// ============================================
// BotLearningProxy.js - Web Worker Proxy
// ============================================

import { BotLearningEngine } from './BotLearning.js';

let sharedWorker = null;
let reqIdCounter = 0;

const STORAGE_VERSION = 2;
const LEGACY_STORAGE_VERSION = 1;
const STORAGE_BACKUP_SUFFIX = '.lastgood';

function fnv1a32(input) {
    let hash = 0x811c9dc5;
    const str = String(input || '');
    for (let i = 0; i < str.length; i++) {
        hash ^= str.charCodeAt(i);
        hash = Math.imul(hash, 0x01000193) >>> 0;
    }
    return hash.toString(16).padStart(8, '0');
}

function normalizeDump(source, now = Date.now()) {
    const src = source && typeof source === 'object' ? source : {};
    const safeNow = Math.max(0, Math.floor(Number.isFinite(now) ? now : Date.now()));
    const rawStates = Array.isArray(src.states) ? src.states : [];
    const states = [];

    for (let i = 0; i < rawStates.length; i++) {
        const row = rawStates[i];
        if (!Array.isArray(row) || typeof row[0] !== 'string' || !Array.isArray(row[1])) continue;

        const values = new Array(row[1].length);
        for (let j = 0; j < row[1].length; j++) {
            values[j] = Number.isFinite(row[1][j]) ? row[1][j] : 0;
        }

        states.push([
            row[0],
            values,
            Number.isFinite(row[2]) ? Math.max(1, Math.floor(row[2])) : 1,
            Number.isFinite(row[3]) ? Math.max(0, Math.floor(row[3])) : safeNow,
        ]);
    }

    return {
        savedAt: Number.isFinite(src.savedAt) ? Math.max(0, Math.floor(src.savedAt)) : safeNow,
        epsilon: Number.isFinite(src.epsilon) ? src.epsilon : 0,
        totalUpdates: Number.isFinite(src.totalUpdates) ? Math.max(0, Math.floor(src.totalUpdates)) : 0,
        totalReward: Number.isFinite(src.totalReward) ? src.totalReward : 0,
        states,
    };
}

function createPayloadFromDump(dump, now = Date.now()) {
    const normalized = normalizeDump(dump, now);
    const core = {
        epsilon: normalized.epsilon,
        totalUpdates: normalized.totalUpdates,
        totalReward: normalized.totalReward,
        states: normalized.states,
    };
    const checksum = fnv1a32(JSON.stringify(core));
    return {
        version: STORAGE_VERSION,
        savedAt: normalized.savedAt,
        checksum,
        epsilon: normalized.epsilon,
        totalUpdates: normalized.totalUpdates,
        totalReward: normalized.totalReward,
        states: normalized.states,
    };
}

function parseStoredPayload(raw) {
    if (!raw) return null;
    let parsed = null;
    try {
        parsed = JSON.parse(raw);
    } catch {
        return null;
    }
    if (!parsed || !Array.isArray(parsed.states)) return null;

    const version = Number(parsed.version);
    if (Number.isFinite(version) && version !== STORAGE_VERSION && version !== LEGACY_STORAGE_VERSION) {
        return null;
    }

    if (version === STORAGE_VERSION && typeof parsed.checksum === 'string') {
        const core = {
            epsilon: Number.isFinite(parsed.epsilon) ? parsed.epsilon : 0,
            totalUpdates: Number.isFinite(parsed.totalUpdates) ? Math.max(0, Math.floor(parsed.totalUpdates)) : 0,
            totalReward: Number.isFinite(parsed.totalReward) ? parsed.totalReward : 0,
            states: parsed.states,
        };
        const expected = fnv1a32(JSON.stringify(core));
        if (expected !== parsed.checksum) {
            return null;
        }
    }

    return normalizeDump(parsed);
}

function mergeNormalizedDumps(currentDump, incomingDump, actionCount) {
    const current = normalizeDump(currentDump || {});
    const incoming = normalizeDump(incomingDump || {});
    const safeActionCount = Math.max(1, Math.floor(Number.isFinite(actionCount) ? actionCount : 1));
    const mergedByState = new Map();

    const upsert = (row) => {
        if (!Array.isArray(row) || typeof row[0] !== 'string' || !Array.isArray(row[1])) return;
        const stateKey = row[0];
        const values = new Array(safeActionCount);
        for (let i = 0; i < safeActionCount; i++) {
            values[i] = Number.isFinite(row[1][i]) ? row[1][i] : 0;
        }
        const visits = Number.isFinite(row[2]) ? Math.max(1, Math.floor(row[2])) : 1;
        const lastSeen = Number.isFinite(row[3]) ? Math.max(0, Math.floor(row[3])) : 0;

        if (!mergedByState.has(stateKey)) {
            mergedByState.set(stateKey, [stateKey, values, visits, lastSeen]);
            return;
        }

        const existing = mergedByState.get(stateKey);
        const existingValues = existing[1];
        const existingVisits = Math.max(1, Math.floor(Number.isFinite(existing[2]) ? existing[2] : 1));
        const mergedVisits = existingVisits + visits;

        for (let i = 0; i < safeActionCount; i++) {
            const oldValue = Number.isFinite(existingValues[i]) ? existingValues[i] : 0;
            const newValue = Number.isFinite(values[i]) ? values[i] : 0;
            existingValues[i] = ((oldValue * existingVisits) + (newValue * visits)) / mergedVisits;
        }
        existing[2] = mergedVisits;
        existing[3] = Math.max(
            Math.max(0, Math.floor(Number.isFinite(existing[3]) ? existing[3] : 0)),
            lastSeen
        );
    };

    for (let i = 0; i < current.states.length; i++) {
        upsert(current.states[i]);
    }
    for (let i = 0; i < incoming.states.length; i++) {
        upsert(incoming.states[i]);
    }

    const epsCandidates = [];
    if (Number.isFinite(current.epsilon)) epsCandidates.push(current.epsilon);
    if (Number.isFinite(incoming.epsilon)) epsCandidates.push(incoming.epsilon);
    const epsilon = epsCandidates.length > 0 ? Math.min(...epsCandidates) : 0;

    const currentUpdates = Number.isFinite(current.totalUpdates) ? Math.max(0, Math.floor(current.totalUpdates)) : 0;
    const incomingUpdates = Number.isFinite(incoming.totalUpdates) ? Math.max(0, Math.floor(incoming.totalUpdates)) : 0;
    const totalUpdates = Math.max(currentUpdates, incomingUpdates);

    const currentReward = Number.isFinite(current.totalReward) ? current.totalReward : 0;
    const incomingReward = Number.isFinite(incoming.totalReward) ? incoming.totalReward : 0;
    const totalReward = (incomingUpdates > currentUpdates || Math.abs(incomingReward) > Math.abs(currentReward))
        ? incomingReward
        : currentReward;

    return {
        savedAt: Math.max(
            Number.isFinite(current.savedAt) ? Math.max(0, Math.floor(current.savedAt)) : 0,
            Number.isFinite(incoming.savedAt) ? Math.max(0, Math.floor(incoming.savedAt)) : 0
        ),
        epsilon,
        totalUpdates,
        totalReward,
        states: Array.from(mergedByState.values()),
    };
}

export class BotLearningProxy {
    constructor(options = {}) {
        this.engineId = options.storageKey || 'default';
        this.options = { ...options, storageKey: this.engineId };
        this.backupStorageKey = `${this.engineId}${STORAGE_BACKUP_SUFFIX}`;
        // Separate mirror key avoids storage races with worker-owned persistence.
        this.fallbackEngine = new BotLearningEngine({ ...this.options, storageKey: `${this.engineId}.fallback` });
        this.enabled = options.enabled !== false;
        this.trainingEnabled = options.trainingEnabled !== false;
        this.fallbackEngine.setEnabled(this.enabled);
        this.fallbackEngine.setTrainingEnabled(this.trainingEnabled);

        // Stats mirror
        this.epsilon = this.fallbackEngine.epsilonStart;
        this.totalUpdates = 0;
        this.totalReward = 0;
        this.statesCount = 0;
        this.lastSaveAt = 0;
        this.lastLoadedAt = 0;
        this.updatesSinceSave = 0;

        if (!sharedWorker) {
            sharedWorker = new Worker(new URL('../workers/aiWorker.js', import.meta.url), { type: 'module' });
        }

        // Global message listener for the shared worker
        if (!sharedWorker.onmessage) {
            sharedWorker._instances = new Map();
            sharedWorker.onmessage = (e) => {
                const msg = e.data;
                if (msg.engineId && sharedWorker._instances.has(msg.engineId)) {
                    sharedWorker._instances.get(msg.engineId)._handleWorkerMessage(msg);
                }
            };
        }
        sharedWorker._instances.set(this.engineId, this);

        this._callbacks = new Map();

        // Load local storage first to pass to worker
        const dump = this._loadLocalStorage();
        if (dump && Array.isArray(dump.states)) {
            this._hydrateFallbackFromDump(dump);
            this._syncMirroredStatsFromFallback();
            this.lastLoadedAt = Date.now();
        }

        sharedWorker.postMessage({
            type: 'INIT',
            engineId: this.engineId,
            options: this.options,
            dump
        });
    }

    _hydrateFallbackFromDump(dump) {
        if (!this.fallbackEngine || !dump || !Array.isArray(dump.states)) return;

        const actionCount = this.fallbackEngine.actions.length;
        const now = Date.now();
        this.fallbackEngine.qTable.clear();
        this.fallbackEngine.stateMeta.clear();

        for (let i = 0; i < dump.states.length; i++) {
            const row = dump.states[i];
            if (!Array.isArray(row) || typeof row[0] !== 'string' || !Array.isArray(row[1])) continue;
            const arr = new Float64Array(actionCount);
            for (let a = 0; a < actionCount; a++) {
                arr[a] = Number.isFinite(row[1][a]) ? row[1][a] : 0;
            }
            this.fallbackEngine.qTable.set(row[0], arr);
            this.fallbackEngine.stateMeta.set(row[0], {
                visits: Number.isFinite(row[2]) ? Math.max(1, Math.floor(row[2])) : 1,
                lastSeen: Number.isFinite(row[3]) ? Math.max(0, Math.floor(row[3])) : now,
            });
        }

        if (Number.isFinite(dump.epsilon)) {
            this.fallbackEngine.epsilon = dump.epsilon;
        }
        this.fallbackEngine.totalUpdates = Number.isFinite(dump.totalUpdates) ? Math.max(0, Math.floor(dump.totalUpdates)) : 0;
        this.fallbackEngine.totalReward = Number.isFinite(dump.totalReward) ? dump.totalReward : 0;
        this.fallbackEngine.lastSaveAt = Number.isFinite(dump.savedAt) ? Math.max(0, Math.floor(dump.savedAt)) : this.fallbackEngine.lastSaveAt;
        this.fallbackEngine.lastLoadedAt = now;
        this.fallbackEngine.updatesSinceSave = 0;
    }

    _syncMirroredStatsFromFallback() {
        const stats = this.fallbackEngine.getStats();
        this.epsilon = stats.epsilon;
        this.totalUpdates = stats.totalUpdates;
        this.totalReward = stats.totalReward;
        this.statesCount = stats.states;
        this.lastSaveAt = stats.lastSaveAt || this.lastSaveAt;
        this.lastLoadedAt = stats.lastLoadedAt || this.lastLoadedAt;
        this.updatesSinceSave = stats.updatesSinceSave || 0;
    }

    _loadLocalStorage() {
        if (typeof localStorage === 'undefined') return null;
        try {
            const primaryRaw = localStorage.getItem(this.engineId);
            const primaryDump = parseStoredPayload(primaryRaw);
            if (primaryDump) {
                return primaryDump;
            }

            const backupRaw = localStorage.getItem(this.backupStorageKey);
            const backupDump = parseStoredPayload(backupRaw);
            if (backupDump) {
                try {
                    if (backupRaw) localStorage.setItem(this.engineId, backupRaw);
                } catch {
                    // Ignore self-heal failures.
                }
                return backupDump;
            }
        } catch {
            return null;
        }
        return null;
    }

    _handleWorkerMessage(msg) {
        if (msg.type === 'SAVE_SYNC') {
            const dump = normalizeDump(msg.dump || {});
            this._hydrateFallbackFromDump(dump);
            this._syncMirroredStatsFromFallback();
            this._saveLocalStorage(dump);
        }
        if (msg.reqId && this._callbacks.has(msg.reqId)) {
            this._callbacks.get(msg.reqId)(msg);
            this._callbacks.delete(msg.reqId);
        }
    }

    _saveLocalStorage(dump) {
        if (typeof localStorage === 'undefined') return false;

        try {
            const payload = createPayloadFromDump(dump);
            const serialized = JSON.stringify(payload);
            const previousRaw = localStorage.getItem(this.engineId);
            if (previousRaw) {
                localStorage.setItem(this.backupStorageKey, previousRaw);
            }
            localStorage.setItem(this.engineId, serialized);
            this.lastSaveAt = payload.savedAt;
            this.updatesSinceSave = 0;
            return true;
        } catch {
            try {
                const payload = createPayloadFromDump(dump);
                localStorage.setItem(this.engineId, JSON.stringify(payload));
                this.lastSaveAt = payload.savedAt;
                this.updatesSinceSave = 0;
                return true;
            } catch {
                // Ignore local persistence failures (quota / private mode).
                return false;
            }
        }
    }

    _exportFallbackDump(now = Date.now()) {
        const states = [];
        for (const [key, values] of this.fallbackEngine.qTable.entries()) {
            const meta = this.fallbackEngine.stateMeta.get(key) || { visits: 1, lastSeen: now };
            states.push([
                key,
                Array.from(values),
                Math.max(1, Math.floor(meta.visits || 1)),
                Math.max(0, Math.floor(meta.lastSeen || now)),
            ]);
        }

        return {
            savedAt: now,
            epsilon: this.fallbackEngine.epsilon,
            totalUpdates: this.fallbackEngine.totalUpdates,
            totalReward: this.fallbackEngine.totalReward,
            states,
        };
    }

    // Pass through synchronous encodeState
    encodeState(params) {
        return this.fallbackEngine.encodeState(params);
    }

    setEnabled(enabled) {
        this.enabled = !!enabled;
        if (this.fallbackEngine?.setEnabled) {
            this.fallbackEngine.setEnabled(this.enabled);
        }
        sharedWorker.postMessage({ type: 'SET_PARAMS', engineId: this.engineId, params: { enabled } });
    }

    setTrainingEnabled(enabled) {
        this.trainingEnabled = !!enabled;
        if (this.fallbackEngine?.setTrainingEnabled) {
            this.fallbackEngine.setTrainingEnabled(this.trainingEnabled);
        }
        sharedWorker.postMessage({ type: 'SET_PARAMS', engineId: this.engineId, params: { trainingEnabled: enabled } });
    }

    setEpsilonOverride(value) {
        if (this.fallbackEngine?.setEpsilonOverride) {
            this.fallbackEngine.setEpsilonOverride(value);
            this._syncMirroredStatsFromFallback();
        }
        sharedWorker.postMessage({ type: 'SET_PARAMS', engineId: this.engineId, params: { epsilonOverride: value } });
    }

    getActionName(index) {
        return this.fallbackEngine.getActionName(index);
    }

    getActionCount() {
        return this.fallbackEngine.getActionCount();
    }

    selectAction(stateKey, options = {}) {
        return this.fallbackEngine.selectAction(stateKey, options);
    }

    // Async action fetching
    requestAction(stateKey, options, callback) {
        const reqId = ++reqIdCounter;
        this._callbacks.set(reqId, (msg) => {
            if (msg.type === 'ACTION_ACK' && typeof callback === 'function') callback(msg.action);
        });
        sharedWorker.postMessage({
            type: 'SELECT_ACTION',
            engineId: this.engineId,
            stateKey,
            options,
            reqId
        });
    }

    updateTransition(params = {}) {
        const result = this.fallbackEngine.updateTransition(params);
        this._syncMirroredStatsFromFallback();
        sharedWorker.postMessage({
            type: 'UPDATE_TRANSITION',
            engineId: this.engineId,
            params
        });
        return result;
    }

    getStats() {
        this._syncMirroredStatsFromFallback();
        return {
            loaded: true,
            enabled: this.enabled,
            trainingEnabled: this.trainingEnabled,
            states: this.statesCount,
            maxStates: this.fallbackEngine?.maxStates || 0,
            epsilon: this.epsilon,
            epsilonStart: this.fallbackEngine?.epsilonStart,
            epsilonMin: this.fallbackEngine?.epsilonMin,
            totalUpdates: this.totalUpdates,
            totalReward: this.totalReward,
            storageKey: this.engineId,
            backupStorageKey: this.backupStorageKey,
            lastSaveAt: this.lastSaveAt,
            lastLoadedAt: this.lastLoadedAt,
            updatesSinceSave: this.updatesSinceSave,
            saveEveryUpdates: this.fallbackEngine?.saveEveryUpdates || 0,
            minSaveIntervalMs: this.fallbackEngine?.minSaveIntervalMs || 0,
        };
    }

    exportDump(now = Date.now()) {
        return this._exportFallbackDump(now);
    }

    save(force = false) {
        if (force) {
            // Ensure we have a synchronous local snapshot even if worker message is lost.
            this._saveLocalStorage(this._exportFallbackDump());
        }
        // Push a ping update and the worker will push a SAVE_SYNC if forced or enough time elapsed.
        sharedWorker.postMessage({ type: 'FORCE_SAVE', engineId: this.engineId, force });
        return true;
    }

    reset(saveAfterReset = true) {
        this.fallbackEngine.reset(false);
        this._syncMirroredStatsFromFallback();
        if (saveAfterReset) {
            this._saveLocalStorage(this._exportFallbackDump());
        }
        sharedWorker.postMessage({ type: 'RESET', engineId: this.engineId, saveAfterReset });
    }

    requestDump() {
        return new Promise(resolve => {
            const reqId = ++reqIdCounter;
            this._callbacks.set(reqId, (msg) => {
                if (msg.type === 'DUMP_ACK') resolve(msg.dump);
            });
            sharedWorker.postMessage({ type: 'REQUEST_DUMP', engineId: this.engineId, reqId });
        });
    }

    importDumpAndSave(statesOrDump, totalUpdates, totalReward) {
        const now = Date.now();
        let dump = null;

        if (statesOrDump && typeof statesOrDump === 'object' && !Array.isArray(statesOrDump) && Array.isArray(statesOrDump.states)) {
            dump = normalizeDump(statesOrDump);
        } else {
            const rawStates = Array.isArray(statesOrDump) ? statesOrDump : [];
            const states = [];
            for (let i = 0; i < rawStates.length; i++) {
                const row = rawStates[i];
                if (!Array.isArray(row) || typeof row[0] !== 'string' || !Array.isArray(row[1])) continue;
                states.push([
                    row[0],
                    Array.from(row[1]),
                    Number.isFinite(row[2]) ? Math.max(1, Math.floor(row[2])) : 1,
                    Number.isFinite(row[3]) ? Math.max(0, Math.floor(row[3])) : now,
                ]);
            }
            dump = normalizeDump({
                savedAt: now,
                epsilon: this.epsilon, // preserve
                totalUpdates,
                totalReward,
                states,
            });
        }

        if (typeof this.fallbackEngine.importDumpAndSave === 'function') {
            this.fallbackEngine.importDumpAndSave(dump, { save: false });
        } else {
            this._hydrateFallbackFromDump(dump);
        }
        this._syncMirroredStatsFromFallback();
        const exported = this._exportFallbackDump(dump.savedAt || now);
        this._saveLocalStorage(exported);
        sharedWorker.postMessage({
            type: 'INIT',
            engineId: this.engineId,
            options: this.options,
            dump: exported
        });
    }

    mergeDumpAndSave(dump) {
        const incoming = normalizeDump(dump || {});
        if (!Array.isArray(incoming.states) || incoming.states.length === 0) {
            return false;
        }

        const actionCount = this.fallbackEngine?.getActionCount?.() || 8;
        const merged = mergeNormalizedDumps(this._exportFallbackDump(), incoming, actionCount);

        if (typeof this.fallbackEngine.mergeDumpAndSave === 'function') {
            this.fallbackEngine.mergeDumpAndSave(merged, { save: false });
        } else if (typeof this.fallbackEngine.importDumpAndSave === 'function') {
            this.fallbackEngine.importDumpAndSave(merged, { save: false });
        } else {
            this._hydrateFallbackFromDump(merged);
        }

        this._syncMirroredStatsFromFallback();
        const exported = this._exportFallbackDump(merged.savedAt || Date.now());
        this._saveLocalStorage(exported);
        sharedWorker.postMessage({
            type: 'INIT',
            engineId: this.engineId,
            options: this.options,
            dump: exported
        });
        return true;
    }
}

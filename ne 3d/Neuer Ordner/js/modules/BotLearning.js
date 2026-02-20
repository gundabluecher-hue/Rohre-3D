// ============================================
// BotLearning.js - Lightweight Q-learning layer for bots
// ============================================

import { CONFIG } from './Config.js';

export const LEARNING_ACTIONS = Object.freeze([
    'NO_OP',
    'YAW_LEFT',
    'YAW_RIGHT',
    'PITCH_UP',
    'PITCH_DOWN',
    'BOOST',
    'USE_ITEM',
    'SHOOT_ITEM',
]);

const STORAGE_VERSION = 2;
const LEGACY_STORAGE_VERSION = 1;
const STORAGE_BACKUP_SUFFIX = '.lastgood';
const DEFAULT_STORAGE_KEY = 'mini-curve-fever-3d.bot-learning.v1';

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function toBin(value, thresholds) {
    if (!Number.isFinite(value)) return thresholds.length;
    for (let i = 0; i < thresholds.length; i++) {
        if (value < thresholds[i]) return i;
    }
    return thresholds.length;
}

function toFiniteNumber(value, fallback = 0) {
    return Number.isFinite(value) ? value : fallback;
}

function pickRandomIndex(indices) {
    if (!indices || indices.length === 0) return 0;
    return indices[Math.floor(Math.random() * indices.length)];
}

function fnv1a32(input) {
    let hash = 0x811c9dc5;
    const str = String(input || '');
    for (let i = 0; i < str.length; i++) {
        hash ^= str.charCodeAt(i);
        hash = Math.imul(hash, 0x01000193) >>> 0;
    }
    return hash.toString(16).padStart(8, '0');
}

function buildCorePayload(epsilon, totalUpdates, totalReward, states) {
    return {
        epsilon: toFiniteNumber(epsilon, 0),
        totalUpdates: Math.max(0, Math.floor(toFiniteNumber(totalUpdates, 0))),
        totalReward: toFiniteNumber(totalReward, 0),
        states: Array.isArray(states) ? states : [],
    };
}

function buildPayload(core, now = Date.now()) {
    const safeCore = buildCorePayload(core?.epsilon, core?.totalUpdates, core?.totalReward, core?.states);
    const checksum = fnv1a32(JSON.stringify(safeCore));
    return {
        version: STORAGE_VERSION,
        savedAt: Math.max(0, Math.floor(toFiniteNumber(now, Date.now()))),
        checksum,
        epsilon: safeCore.epsilon,
        totalUpdates: safeCore.totalUpdates,
        totalReward: safeCore.totalReward,
        states: safeCore.states,
    };
}

export class BotLearningEngine {
    constructor(options = {}) {
        const cfg = CONFIG.BOT?.LEARNING || {};
        this.storageKey = options.storageKey || cfg.STORAGE_KEY || DEFAULT_STORAGE_KEY;
        this.alpha = toFiniteNumber(options.alpha, toFiniteNumber(cfg.ALPHA, 0.16));
        this.gamma = toFiniteNumber(options.gamma, toFiniteNumber(cfg.GAMMA, 0.92));
        this.epsilonStart = clamp(toFiniteNumber(options.epsilonStart, toFiniteNumber(cfg.EPSILON_START, 0.35)), 0, 1);
        this.epsilonMin = clamp(toFiniteNumber(options.epsilonMin, toFiniteNumber(cfg.EPSILON_MIN, 0.04)), 0, 1);
        this.epsilonDecay = clamp(toFiniteNumber(options.epsilonDecay, toFiniteNumber(cfg.EPSILON_DECAY, 0.9995)), 0.9, 1);
        this.maxStates = Math.max(200, Math.floor(toFiniteNumber(options.maxStates, toFiniteNumber(cfg.MAX_STATES, 2500))));
        this.saveEveryUpdates = Math.max(1, Math.floor(toFiniteNumber(options.saveEveryUpdates, toFiniteNumber(cfg.SAVE_EVERY_UPDATES, 200))));
        this.minSaveIntervalMs = Math.max(0, Math.floor(toFiniteNumber(options.minSaveIntervalMs, toFiniteNumber(cfg.MIN_SAVE_INTERVAL_MS, 4000))));

        this.actions = LEARNING_ACTIONS.slice();
        this.trainingEnabled = !!(options.trainingEnabled ?? cfg.ENABLED ?? false);
        this.enabled = true;

        this.epsilon = this.epsilonStart;
        this.totalUpdates = 0;
        this.totalReward = 0;
        this.updatesSinceSave = 0;
        this.lastSaveAt = 0;
        this.lastLoadedAt = 0;
        this.epsilonOverride = null;
        this.backupStorageKey = `${this.storageKey}${STORAGE_BACKUP_SUFFIX}`;

        this.qTable = new Map();
        this.stateMeta = new Map();
        this._loaded = this.load();
    }

    setEnabled(enabled) {
        this.enabled = !!enabled;
    }

    setTrainingEnabled(enabled) {
        this.trainingEnabled = !!enabled;
    }

    setEpsilonOverride(value) {
        if (value === null || value === undefined || value === '') {
            this.epsilonOverride = null;
            return;
        }
        const parsed = Number(value);
        if (!Number.isFinite(parsed)) return;
        this.epsilonOverride = clamp(parsed, this.epsilonMin, 1);
        this.epsilon = this.epsilonOverride;
    }

    getActionName(actionIndex) {
        if (!Number.isInteger(actionIndex) || actionIndex < 0 || actionIndex >= this.actions.length) {
            return this.actions[0];
        }
        return this.actions[actionIndex];
    }

    getActionCount() {
        return this.actions.length;
    }

    encodeState({ player, sense, arena, planarMode }) {
        const safeSense = sense || {};
        const lookAhead = Math.max(1, toFiniteNumber(safeSense.lookAhead, 1));
        const opennessRatio = toFiniteNumber(safeSense.localOpenness, 0) / lookAhead;
        const targetDistance = Number.isFinite(safeSense.targetDistanceSq)
            ? Math.sqrt(Math.max(0, safeSense.targetDistanceSq))
            : Infinity;
        const speedRatio = (player && player.baseSpeed > 0)
            ? toFiniteNumber(player.speed / player.baseSpeed, 1)
            : 1;
        const nearestHumanDistance = Number.isFinite(safeSense.nearestHumanDistanceSq)
            ? Math.sqrt(Math.max(0, safeSense.nearestHumanDistanceSq))
            : Infinity;
        const humanCount = Math.max(0, Math.floor(toFiniteNumber(safeSense.humanAliveCount, 0)));
        const humanThreat = clamp(toFiniteNumber(safeSense.humanThreat, 0), 0, 2);

        let heightZone = 1;
        if (!planarMode && player && arena?.bounds) {
            const midY = (arena.bounds.minY + arena.bounds.maxY) * 0.5;
            if (player.position.y < midY - 5) heightZone = 0;
            else if (player.position.y > midY + 5) heightZone = 2;
        }

        const f = toBin(toFiniteNumber(safeSense.forwardRisk, 0), [0.2, 0.4, 0.6, 0.85]);
        const p = toBin(toFiniteNumber(safeSense.pressure, 0), [0.25, 0.5, 0.9, 1.2]);
        const o = toBin(opennessRatio, [0.25, 0.45, 0.65, 0.85]);
        const d = toBin(targetDistance, [8, 16, 30, 55]);
        const s = toBin(speedRatio, [0.9, 1.1, 1.4, 1.8]);
        const t = safeSense.targetInFront ? 1 : 0;
        const i = safeSense.immediateDanger ? 1 : 0;
        const j = safeSense.projectileThreat ? 1 : 0;
        const m = planarMode ? 1 : 0;
        const hc = toBin(humanCount, [1, 2]);
        const hd = toBin(nearestHumanDistance, [10, 20, 35, 55]);
        const ht = toBin(humanThreat, [0.2, 0.45, 0.75, 1.1]);

        return `f${f}|p${p}|o${o}|d${d}|s${s}|t${t}|i${i}|j${j}|h${heightZone}|m${m}|hc${hc}|hd${hd}|ht${ht}`;
    }

    selectAction(stateKey, options = {}) {
        if (!this.enabled || !stateKey) return 0;

        const training = options.training !== false;
        const allowedActions = Array.isArray(options.allowedActions) ? options.allowedActions : null;
        const candidates = [];
        for (let i = 0; i < this.actions.length; i++) {
            if (!allowedActions || allowedActions[i]) {
                candidates.push(i);
            }
        }
        if (candidates.length === 0) return 0;

        const qValues = this._ensureState(stateKey);
        const shouldExplore = training && this.trainingEnabled && Math.random() < this.epsilon;
        if (shouldExplore) {
            return pickRandomIndex(candidates);
        }

        let bestIndex = candidates[0];
        let bestValue = qValues[bestIndex];
        for (let i = 1; i < candidates.length; i++) {
            const idx = candidates[i];
            const val = qValues[idx];
            if (val > bestValue) {
                bestValue = val;
                bestIndex = idx;
            }
        }
        return bestIndex;
    }

    updateTransition(params = {}) {
        const stateKey = typeof params.stateKey === 'string' ? params.stateKey : '';
        const nextStateKey = typeof params.nextStateKey === 'string' ? params.nextStateKey : '';
        const actionIndex = Number.isInteger(params.actionIndex) ? params.actionIndex : 0;
        const reward = toFiniteNumber(params.reward, 0);
        const terminal = !!params.terminal;
        const training = params.training !== false;

        if (!stateKey) return null;
        if (actionIndex < 0 || actionIndex >= this.actions.length) return null;

        const qValues = this._ensureState(stateKey);
        const oldValue = qValues[actionIndex];

        let nextBest = 0;
        if (!terminal && nextStateKey) {
            const nextValues = this._ensureState(nextStateKey);
            nextBest = nextValues[0];
            for (let i = 1; i < nextValues.length; i++) {
                if (nextValues[i] > nextBest) nextBest = nextValues[i];
            }
        }

        const target = reward + (terminal ? 0 : this.gamma * nextBest);
        const tdError = target - oldValue;
        const canTrain = training && this.trainingEnabled;

        if (canTrain) {
            qValues[actionIndex] = oldValue + this.alpha * tdError;
            this.totalUpdates++;
            this.totalReward += reward;
            this.updatesSinceSave++;
            if (this.epsilonOverride === null) {
                this.epsilon = Math.max(this.epsilonMin, this.epsilon * this.epsilonDecay);
            } else {
                this.epsilon = this.epsilonOverride;
            }

            this._touchState(stateKey);
            if (nextStateKey) this._touchState(nextStateKey);
            this._pruneStatesIfNeeded();
            this.save(false);
        }

        return {
            updated: canTrain,
            tdError,
            qValue: qValues[actionIndex],
            epsilon: this.epsilon,
        };
    }

    reset(saveAfterReset = true) {
        this.qTable.clear();
        this.stateMeta.clear();
        this.totalUpdates = 0;
        this.totalReward = 0;
        this.updatesSinceSave = 0;
        this.epsilon = this.epsilonOverride === null ? this.epsilonStart : this.epsilonOverride;
        if (saveAfterReset) this.save(true);
    }

    exportDump(now = Date.now()) {
        const safeNow = Math.max(0, Math.floor(toFiniteNumber(now, Date.now())));
        return {
            savedAt: safeNow,
            epsilon: this.epsilon,
            totalUpdates: this.totalUpdates,
            totalReward: this.totalReward,
            states: this._serializeStates(safeNow),
        };
    }

    importDumpAndSave(dump, options = {}) {
        const incoming = this._normalizeExternalDump(dump);
        if (!incoming) return false;

        this.qTable.clear();
        this.stateMeta.clear();

        const actionCount = this.actions.length;
        for (let i = 0; i < incoming.states.length; i++) {
            const row = incoming.states[i];
            const stateKey = row[0];
            const values = row[1];
            const visits = row[2];
            const lastSeen = row[3];

            const arr = new Float64Array(actionCount);
            for (let a = 0; a < actionCount; a++) {
                arr[a] = toFiniteNumber(values[a], 0);
            }

            this.qTable.set(stateKey, arr);
            this.stateMeta.set(stateKey, {
                visits: Math.max(1, Math.floor(toFiniteNumber(visits, 1))),
                lastSeen: Math.max(0, Math.floor(toFiniteNumber(lastSeen, incoming.savedAt))),
            });
        }

        if (Number.isFinite(incoming.epsilon)) {
            const nextEpsilon = clamp(incoming.epsilon, this.epsilonMin, this.epsilonStart);
            this.epsilon = this.epsilonOverride === null ? nextEpsilon : this.epsilonOverride;
        }
        this.totalUpdates = Math.max(0, Math.floor(toFiniteNumber(incoming.totalUpdates, 0)));
        this.totalReward = toFiniteNumber(incoming.totalReward, 0);
        this.lastLoadedAt = Date.now();
        this.updatesSinceSave = 0;
        this._pruneStatesIfNeeded();

        if (options.save !== false) {
            this.save(true);
        }
        return true;
    }

    mergeDumpAndSave(dump, options = {}) {
        const incoming = this._normalizeExternalDump(dump);
        if (!incoming) return false;

        const actionCount = this.actions.length;
        for (let i = 0; i < incoming.states.length; i++) {
            const row = incoming.states[i];
            const stateKey = row[0];
            const incomingValues = row[1];
            const incomingVisits = Math.max(1, Math.floor(toFiniteNumber(row[2], 1)));
            const incomingLastSeen = Math.max(0, Math.floor(toFiniteNumber(row[3], incoming.savedAt)));

            const existingValues = this.qTable.get(stateKey);
            const existingMeta = this.stateMeta.get(stateKey);
            if (!existingValues || !existingMeta) {
                const arr = new Float64Array(actionCount);
                for (let a = 0; a < actionCount; a++) {
                    arr[a] = toFiniteNumber(incomingValues[a], 0);
                }
                this.qTable.set(stateKey, arr);
                this.stateMeta.set(stateKey, {
                    visits: incomingVisits,
                    lastSeen: incomingLastSeen,
                });
                continue;
            }

            const oldVisits = Math.max(1, Math.floor(toFiniteNumber(existingMeta.visits, 1)));
            const mergedVisits = oldVisits + incomingVisits;
            for (let a = 0; a < actionCount; a++) {
                const oldValue = toFiniteNumber(existingValues[a], 0);
                const nextValue = toFiniteNumber(incomingValues[a], 0);
                existingValues[a] = ((oldValue * oldVisits) + (nextValue * incomingVisits)) / mergedVisits;
            }
            existingMeta.visits = mergedVisits;
            existingMeta.lastSeen = Math.max(
                Math.max(0, Math.floor(toFiniteNumber(existingMeta.lastSeen, 0))),
                incomingLastSeen
            );
        }

        const previousUpdates = this.totalUpdates;
        const incomingUpdates = Math.max(0, Math.floor(toFiniteNumber(incoming.totalUpdates, 0)));
        this.totalUpdates = Math.max(this.totalUpdates, incomingUpdates);

        const incomingReward = toFiniteNumber(incoming.totalReward, 0);
        if (incomingUpdates > previousUpdates || Math.abs(incomingReward) > Math.abs(this.totalReward)) {
            this.totalReward = incomingReward;
        }

        if (Number.isFinite(incoming.epsilon)) {
            const targetEpsilon = Math.min(this.epsilon, incoming.epsilon);
            const nextEpsilon = clamp(targetEpsilon, this.epsilonMin, this.epsilonStart);
            this.epsilon = this.epsilonOverride === null ? nextEpsilon : this.epsilonOverride;
        }

        this.lastLoadedAt = Date.now();
        this.updatesSinceSave = Math.max(1, this.updatesSinceSave);
        this._pruneStatesIfNeeded();

        if (options.save !== false) {
            this.save(true);
        }
        return true;
    }

    getStats() {
        return {
            loaded: this._loaded,
            enabled: this.enabled,
            trainingEnabled: this.trainingEnabled,
            states: this.qTable.size,
            maxStates: this.maxStates,
            epsilon: this.epsilon,
            epsilonStart: this.epsilonStart,
            epsilonMin: this.epsilonMin,
            totalUpdates: this.totalUpdates,
            totalReward: this.totalReward,
            storageKey: this.storageKey,
            backupStorageKey: this.backupStorageKey,
            lastSaveAt: this.lastSaveAt,
            lastLoadedAt: this.lastLoadedAt,
            updatesSinceSave: this.updatesSinceSave,
            saveEveryUpdates: this.saveEveryUpdates,
            minSaveIntervalMs: this.minSaveIntervalMs,
            epsilonOverride: this.epsilonOverride,
        };
    }

    save(force = false) {
        if (typeof localStorage === 'undefined') return false;
        const now = Date.now();
        if (!force) {
            if (this.updatesSinceSave < this.saveEveryUpdates) return false;
            if (now - this.lastSaveAt < this.minSaveIntervalMs) return false;
        }

        const payload = buildPayload({
            epsilon: this.epsilon,
            totalUpdates: this.totalUpdates,
            totalReward: this.totalReward,
            states: this._serializeStates(now),
        }, now);
        const serialized = JSON.stringify(payload);

        try {
            const previousRaw = localStorage.getItem(this.storageKey);
            if (previousRaw) {
                localStorage.setItem(this.backupStorageKey, previousRaw);
            }
            localStorage.setItem(this.storageKey, serialized);
            this.lastSaveAt = now;
            this.updatesSinceSave = 0;
            return true;
        } catch {
            try {
                // Last fallback: write current payload at least to the primary key.
                localStorage.setItem(this.storageKey, serialized);
                this.lastSaveAt = now;
                this.updatesSinceSave = 0;
                return true;
            } catch {
                return false;
            }
        }
    }

    load() {
        if (typeof localStorage === 'undefined') return false;
        try {
            const primaryRaw = localStorage.getItem(this.storageKey);
            if (this._hydrateFromRaw(primaryRaw)) {
                return true;
            }

            const backupRaw = localStorage.getItem(this.backupStorageKey);
            if (!this._hydrateFromRaw(backupRaw)) {
                return false;
            }

            // Self-heal the primary key if backup was the last valid payload.
            try {
                if (backupRaw) localStorage.setItem(this.storageKey, backupRaw);
            } catch {
                // Ignore self-heal failures.
            }
            return true;
        } catch {
            return false;
        }
    }

    _serializeStates(now = Date.now()) {
        const states = [];
        for (const [key, values] of this.qTable.entries()) {
            const meta = this.stateMeta.get(key) || { visits: 1, lastSeen: now };
            states.push([
                key,
                Array.from(values),
                Math.max(1, Math.floor(meta.visits || 1)),
                Math.max(0, Math.floor(meta.lastSeen || now)),
            ]);
        }
        return states;
    }

    _normalizeExternalDump(source) {
        const src = source && typeof source === 'object' ? source : null;
        if (!src || !Array.isArray(src.states)) return null;

        const safeNow = Date.now();
        const savedAt = Math.max(0, Math.floor(toFiniteNumber(src.savedAt ?? src.timestamp, safeNow)));
        const epsilon = Number.isFinite(src.epsilon) ? src.epsilon : null;
        const totalUpdates = Math.max(0, Math.floor(toFiniteNumber(src.totalUpdates, 0)));
        const totalReward = toFiniteNumber(src.totalReward, 0);

        const states = [];
        const actionCount = this.actions.length;
        for (let i = 0; i < src.states.length; i++) {
            const entry = src.states[i];
            if (!Array.isArray(entry) || typeof entry[0] !== 'string' || !Array.isArray(entry[1])) continue;

            const values = new Array(actionCount);
            for (let a = 0; a < actionCount; a++) {
                values[a] = toFiniteNumber(entry[1][a], 0);
            }

            const visits = Math.max(1, Math.floor(toFiniteNumber(entry[2], 1)));
            const lastSeen = Math.max(0, Math.floor(toFiniteNumber(entry[3], savedAt)));
            states.push([entry[0], values, visits, lastSeen]);
        }

        if (states.length === 0) return null;
        return {
            savedAt,
            epsilon,
            totalUpdates,
            totalReward,
            states,
        };
    }

    _hydrateFromRaw(raw) {
        if (!raw) return false;
        let parsed = null;
        try {
            parsed = JSON.parse(raw);
        } catch {
            return false;
        }
        if (!parsed || !Array.isArray(parsed.states)) return false;

        const version = Number(parsed.version);
        if (Number.isFinite(version) && version !== STORAGE_VERSION && version !== LEGACY_STORAGE_VERSION) {
            return false;
        }

        if (version === STORAGE_VERSION && typeof parsed.checksum === 'string') {
            const core = buildCorePayload(parsed.epsilon, parsed.totalUpdates, parsed.totalReward, parsed.states);
            const expected = fnv1a32(JSON.stringify(core));
            if (parsed.checksum !== expected) {
                return false;
            }
        }

        this.qTable.clear();
        this.stateMeta.clear();

        const actionCount = this.actions.length;
        const loadedAt = Date.now();
        for (let i = 0; i < parsed.states.length; i++) {
            const entry = parsed.states[i];
            if (!Array.isArray(entry) || entry.length < 2) continue;
            const stateKey = entry[0];
            const values = entry[1];
            const visits = toFiniteNumber(entry[2], 1);
            const lastSeen = toFiniteNumber(entry[3], loadedAt);
            if (typeof stateKey !== 'string' || !Array.isArray(values)) continue;

            const arr = new Float64Array(actionCount);
            for (let a = 0; a < actionCount; a++) {
                arr[a] = toFiniteNumber(values[a], 0);
            }
            this.qTable.set(stateKey, arr);
            this.stateMeta.set(stateKey, {
                visits: Math.max(1, Math.floor(visits)),
                lastSeen: Math.max(0, Math.floor(lastSeen)),
            });
        }

        const nextEpsilon = clamp(toFiniteNumber(parsed.epsilon, this.epsilonStart), this.epsilonMin, this.epsilonStart);
        this.epsilon = this.epsilonOverride === null ? nextEpsilon : this.epsilonOverride;
        this.totalUpdates = Math.max(0, Math.floor(toFiniteNumber(parsed.totalUpdates, 0)));
        this.totalReward = toFiniteNumber(parsed.totalReward, 0);
        this.lastSaveAt = Math.max(0, Math.floor(toFiniteNumber(parsed.savedAt, this.lastSaveAt)));
        this.lastLoadedAt = loadedAt;
        this.updatesSinceSave = 0;
        this._pruneStatesIfNeeded();
        return true;
    }

    _ensureState(stateKey) {
        if (!this.qTable.has(stateKey)) {
            this.qTable.set(stateKey, new Float64Array(this.actions.length));
            this.stateMeta.set(stateKey, { visits: 1, lastSeen: Date.now() });
        }
        return this.qTable.get(stateKey);
    }

    _touchState(stateKey) {
        const now = Date.now();
        const existing = this.stateMeta.get(stateKey);
        if (!existing) {
            this.stateMeta.set(stateKey, { visits: 1, lastSeen: now });
            return;
        }
        existing.visits = Math.max(1, existing.visits + 1);
        existing.lastSeen = now;
    }

    _pruneStatesIfNeeded() {
        if (this.qTable.size <= this.maxStates) return;
        const overflow = this.qTable.size - this.maxStates;
        const sortable = [];
        for (const [key, meta] of this.stateMeta.entries()) {
            sortable.push({
                key,
                visits: toFiniteNumber(meta?.visits, 1),
                lastSeen: toFiniteNumber(meta?.lastSeen, 0),
            });
        }
        sortable.sort((a, b) => {
            if (a.visits !== b.visits) return a.visits - b.visits;
            return a.lastSeen - b.lastSeen;
        });
        for (let i = 0; i < overflow && i < sortable.length; i++) {
            this.qTable.delete(sortable[i].key);
            this.stateMeta.delete(sortable[i].key);
        }
    }
}


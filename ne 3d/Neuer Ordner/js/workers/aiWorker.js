// ============================================
// aiWorker.js - Web Worker for Bot Learning
// ============================================

import { BotLearningEngine } from '../modules/BotLearning.js';

const engines = new Map();

self.onmessage = (e) => {
    const msg = e.data;
    if (!msg || !msg.type) return;

    if (msg.type === 'INIT') {
        const eng = new BotLearningEngine(msg.options);

        // Import state if provided
        if (msg.dump) {
            eng.qTable.clear();
            eng.stateMeta.clear();
            const dumpStates = Array.isArray(msg.dump.states) ? msg.dump.states : [];
            for (const row of dumpStates) {
                if (!Array.isArray(row) || typeof row[0] !== 'string' || !Array.isArray(row[1])) continue;
                const arr = new Float64Array(eng.actions.length);
                for (let a = 0; a < eng.actions.length; a++) arr[a] = row[1][a] || 0;
                eng.qTable.set(row[0], arr);
                eng.stateMeta.set(row[0], { visits: row[2], lastSeen: row[3] });
            }
            eng.epsilon = Number.isFinite(msg.dump.epsilon) ? msg.dump.epsilon : eng.epsilon;
            eng.totalUpdates = Number.isFinite(msg.dump.totalUpdates) ? msg.dump.totalUpdates : eng.totalUpdates;
            eng.totalReward = Number.isFinite(msg.dump.totalReward) ? msg.dump.totalReward : eng.totalReward;
            eng.lastSaveAt = Number.isFinite(msg.dump.savedAt) ? msg.dump.savedAt : eng.lastSaveAt;
        }

        // Override save to send to main thread instead of localStorage
        eng.save = (force) => {
            const now = Date.now();
            if (!force) {
                if (eng.updatesSinceSave < eng.saveEveryUpdates) return false;
                if (now - eng.lastSaveAt < eng.minSaveIntervalMs) return false;
            }
            const states = [];
            for (const [key, values] of eng.qTable.entries()) {
                const meta = eng.stateMeta.get(key) || { visits: 1, lastSeen: now };
                states.push([key, Array.from(values), meta.visits, meta.lastSeen]);
            }
            self.postMessage({
                type: 'SAVE_SYNC',
                engineId: msg.engineId,
                dump: {
                    savedAt: now,
                    epsilon: eng.epsilon,
                    totalUpdates: eng.totalUpdates,
                    totalReward: eng.totalReward,
                    states
                }
            });
            eng.lastSaveAt = now;
            eng.updatesSinceSave = 0;
            return true;
        };

        engines.set(msg.engineId, eng);
        self.postMessage({ type: 'INIT_ACK', engineId: msg.engineId });
        return;
    }

    const eng = engines.get(msg.engineId);
    if (!eng) return;

    if (msg.type === 'SELECT_ACTION') {
        const action = eng.selectAction(msg.stateKey, msg.options);
        self.postMessage({ type: 'ACTION_ACK', engineId: msg.engineId, reqId: msg.reqId, action });
    } else if (msg.type === 'UPDATE_TRANSITION') {
        const result = eng.updateTransition(msg.params);
        if (msg.reqId) {
            self.postMessage({ type: 'TRANSITION_ACK', engineId: msg.engineId, reqId: msg.reqId, result });
        }
    } else if (msg.type === 'SET_PARAMS') {
        if (msg.params.enabled !== undefined) eng.setEnabled(msg.params.enabled);
        if (msg.params.trainingEnabled !== undefined) eng.setTrainingEnabled(msg.params.trainingEnabled);
        if (msg.params.epsilonOverride !== undefined) eng.setEpsilonOverride(msg.params.epsilonOverride);
    } else if (msg.type === 'ENCODE_STATE') {
        const stateKey = eng.encodeState(msg.params);
        self.postMessage({ type: 'ENCODE_ACK', engineId: msg.engineId, reqId: msg.reqId, stateKey });
    } else if (msg.type === 'RESET') {
        eng.reset(msg.saveAfterReset);
    } else if (msg.type === 'FORCE_SAVE') {
        eng.save(msg.force);
    } else if (msg.type === 'REQUEST_DUMP') {
        const states = [];
        for (const [key, values] of eng.qTable.entries()) {
            states.push([key, Array.from(values)]);
        }
        self.postMessage({
            type: 'DUMP_ACK',
            engineId: msg.engineId,
            reqId: msg.reqId,
            dump: {
                states3D: states, // generic states
                statesPlanar: states,
                engine3D: { totalUpdates: eng.totalUpdates, totalReward: eng.totalReward },
                enginePlanar: { totalUpdates: eng.totalUpdates, totalReward: eng.totalReward }
            }
        });
    }
};

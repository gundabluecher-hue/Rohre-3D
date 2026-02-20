// ============================================
// RoundRecorder.js - Lightweight debug logger + KPI recorder
// ============================================

const MAX_EVENTS = 800;
const MAX_SNAPSHOTS = 900;
const MAX_ROUNDS = 120;
const MAX_TRACKED_PLAYERS = 16;

function createRoundSummary() {
    return {
        roundId: 0,
        duration: 0,
        winnerIndex: -1,
        winnerIsBot: false,
        botCount: 0,
        humanCount: 0,
        botSurvivalAverage: 0,
        selfCollisions: 0,
        stuckEvents: 0,
        bounceWallEvents: 0,
        bounceTrailEvents: 0,
        itemUseEvents: 0,
        stuckPerMinute: 0,
        learningUpdates: 0,
        learningRewardSum: 0,
        learningTdAbsSum: 0,
    };
}

function createAggregateSummary() {
    return {
        rounds: 0,
        totalDuration: 0,
        totalBotLives: 0,
        totalBotSurvival: 0,
        totalSelfCollisions: 0,
        totalStuckEvents: 0,
        totalBounceWallEvents: 0,
        totalBounceTrailEvents: 0,
        totalItemUseEvents: 0,
        botWins: 0,
        totalLearningUpdates: 0,
        totalLearningReward: 0,
        totalLearningTdAbs: 0,
    };
}

export class RoundRecorder {
    constructor() {
        this.events = new Array(MAX_EVENTS);
        for (let i = 0; i < MAX_EVENTS; i++) {
            this.events[i] = { time: 0, type: '', player: -1, data: '' };
        }
        this.eventIndex = 0;
        this.eventCount = 0;

        this.snapshots = new Array(MAX_SNAPSHOTS);
        for (let i = 0; i < MAX_SNAPSHOTS; i++) {
            this.snapshots[i] = { time: 0, players: [] };
        }
        this.snapshotIndex = 0;
        this.snapshotCount = 0;

        this.roundSummaries = new Array(MAX_ROUNDS);
        for (let i = 0; i < MAX_ROUNDS; i++) {
            this.roundSummaries[i] = createRoundSummary();
        }
        this.roundSummaryIndex = 0;
        this.roundSummaryCount = 0;
        this._roundIdCounter = 0;

        this.playerSpawnTime = new Float32Array(MAX_TRACKED_PLAYERS);
        this.playerDeathTime = new Float32Array(MAX_TRACKED_PLAYERS);
        this.playerIsBot = new Uint8Array(MAX_TRACKED_PLAYERS);
        this.playerSeen = new Uint8Array(MAX_TRACKED_PLAYERS);
        this._botSurvivalSumByIndex = new Float64Array(MAX_TRACKED_PLAYERS);
        this._botSurvivalRoundsByIndex = new Uint32Array(MAX_TRACKED_PLAYERS);

        this._frameCounter = 0;
        this._snapshotInterval = 10;
        this.roundStartTime = 0;
        this._elapsedSimSec = 0;
        this._enabled = true;

        this._aggregate = createAggregateSummary();
        this._baselines = new Map();
        this._lastRoundSummary = null;

        this._resetRoundState();
    }

    resetAll() {
        this.eventIndex = 0;
        this.eventCount = 0;
        this.snapshotIndex = 0;
        this.snapshotCount = 0;
        this.roundSummaryIndex = 0;
        this.roundSummaryCount = 0;
        this._roundIdCounter = 0;
        this.roundStartTime = 0;
        this._elapsedSimSec = 0;
        this._frameCounter = 0;

        for (let i = 0; i < MAX_ROUNDS; i++) {
            this.roundSummaries[i] = createRoundSummary();
        }

        this._aggregate = createAggregateSummary();
        this._baselines.clear();
        this._lastRoundSummary = null;
        this._botSurvivalSumByIndex.fill(0);
        this._botSurvivalRoundsByIndex.fill(0);
        this._resetRoundState();
    }

    _resetRoundState() {
        this._roundSelfCollisions = 0;
        this._roundStuckEvents = 0;
        this._roundBounceWallEvents = 0;
        this._roundBounceTrailEvents = 0;
        this._roundItemUseEvents = 0;
        this._roundLearningUpdates = 0;
        this._roundLearningRewardSum = 0;
        this._roundLearningTdAbsSum = 0;
        for (let i = 0; i < MAX_TRACKED_PLAYERS; i++) {
            this.playerSpawnTime[i] = -1;
            this.playerDeathTime[i] = -1;
            this.playerIsBot[i] = 0;
            this.playerSeen[i] = 0;
        }
    }

    _elapsedSeconds() {
        return Math.max(0, this._elapsedSimSec || 0);
    }

    tick(dt) {
        if (!this._enabled) return;
        const safeDt = Number.isFinite(dt) ? dt : 0;
        if (safeDt <= 0) return;
        this._elapsedSimSec += safeDt;
    }

    _trackPlayer(player, resetForSpawn = false) {
        if (!player || player.index < 0 || player.index >= MAX_TRACKED_PLAYERS) return;
        const idx = player.index;
        this.playerSeen[idx] = 1;
        this.playerIsBot[idx] = player.isBot ? 1 : 0;
        if (this.playerSpawnTime[idx] < 0) {
            this.playerSpawnTime[idx] = this._elapsedSeconds();
        }
        if (resetForSpawn) {
            this.playerDeathTime[idx] = -1;
        }
    }

    startRound(players = []) {
        this.eventIndex = 0;
        this.eventCount = 0;
        this.snapshotIndex = 0;
        this.snapshotCount = 0;
        this._frameCounter = 0;
        this.roundStartTime = performance.now();
        this._elapsedSimSec = 0;
        this._resetRoundState();
        this._lastRoundSummary = null;

        if (Array.isArray(players)) {
            for (let i = 0; i < players.length; i++) {
                this._trackPlayer(players[i], true);
            }
        }
    }

    logEvent(type, playerIndex, data = '') {
        if (!this._enabled) return;

        const entry = this.events[this.eventIndex];
        entry.time = this._elapsedSeconds();
        entry.type = type;
        entry.player = playerIndex;
        entry.data = data;

        this.eventIndex = (this.eventIndex + 1) % MAX_EVENTS;
        if (this.eventCount < MAX_EVENTS) this.eventCount++;

        if (type === 'STUCK') this._roundStuckEvents++;
        if (type === 'BOUNCE_WALL') this._roundBounceWallEvents++;
        if (type === 'BOUNCE_TRAIL') this._roundBounceTrailEvents++;
        if (type === 'ITEM_USE') this._roundItemUseEvents++;
    }

    markPlayerSpawn(player) {
        if (!this._enabled) return;
        this._trackPlayer(player, true);
    }

    markPlayerDeath(player, cause = '') {
        if (!this._enabled || !player || player.index < 0 || player.index >= MAX_TRACKED_PLAYERS) return;

        const idx = player.index;
        if (this.playerSpawnTime[idx] < 0) {
            this.playerSpawnTime[idx] = 0;
        }
        if (this.playerDeathTime[idx] < 0) {
            this.playerDeathTime[idx] = this._elapsedSeconds();
        }

        if (cause === 'TRAIL_SELF') {
            this._roundSelfCollisions++;
        }
    }

    recordLearningStep(reward = 0, tdError = 0, epsilon = 0, action = '') {
        if (!this._enabled) return;
        const safeReward = Number.isFinite(reward) ? reward : 0;
        const safeTdError = Number.isFinite(tdError) ? tdError : 0;
        const safeEpsilon = Number.isFinite(epsilon) ? epsilon : 0;

        this._roundLearningUpdates++;
        this._roundLearningRewardSum += safeReward;
        this._roundLearningTdAbsSum += Math.abs(safeTdError);

        // Keep event log compact during long training sessions.
        if (this._roundLearningUpdates % 8 === 0) {
            this.logEvent(
                'LEARN_STEP',
                -1,
                `a=${action || 'NO_OP'} r=${safeReward.toFixed(3)} td=${safeTdError.toFixed(3)} e=${safeEpsilon.toFixed(3)}`
            );
        }
    }

    finalizeRound(winner, players = []) {
        if (!this._enabled) return null;

        const roundDuration = Math.max(0, this._elapsedSeconds());
        let botCount = 0;
        let humanCount = 0;
        let botSurvivalSum = 0;

        if (Array.isArray(players)) {
            for (let i = 0; i < players.length; i++) {
                const p = players[i];
                if (!p || p.index < 0 || p.index >= MAX_TRACKED_PLAYERS) continue;
                this._trackPlayer(p, false);
                const idx = p.index;
                if (this.playerDeathTime[idx] < 0) {
                    this.playerDeathTime[idx] = roundDuration;
                }
                const spawnTime = this.playerSpawnTime[idx] >= 0 ? this.playerSpawnTime[idx] : 0;
                const survival = Math.max(0, this.playerDeathTime[idx] - spawnTime);
                if (p.isBot) {
                    botCount++;
                    botSurvivalSum += survival;
                    this._botSurvivalSumByIndex[idx] += survival;
                    this._botSurvivalRoundsByIndex[idx] += 1;
                } else {
                    humanCount++;
                }
            }
        }

        const round = this.roundSummaries[this.roundSummaryIndex];
        this._roundIdCounter++;
        round.roundId = this._roundIdCounter;
        round.duration = roundDuration;
        round.winnerIndex = winner ? winner.index : -1;
        round.winnerIsBot = !!winner?.isBot;
        round.botCount = botCount;
        round.humanCount = humanCount;
        round.botSurvivalAverage = botCount > 0 ? botSurvivalSum / botCount : 0;
        round.selfCollisions = this._roundSelfCollisions;
        round.stuckEvents = this._roundStuckEvents;
        round.bounceWallEvents = this._roundBounceWallEvents;
        round.bounceTrailEvents = this._roundBounceTrailEvents;
        round.itemUseEvents = this._roundItemUseEvents;
        round.stuckPerMinute = roundDuration > 0 ? this._roundStuckEvents / (roundDuration / 60) : 0;
        round.learningUpdates = this._roundLearningUpdates;
        round.learningRewardSum = this._roundLearningRewardSum;
        round.learningTdAbsSum = this._roundLearningTdAbsSum;

        this.roundSummaryIndex = (this.roundSummaryIndex + 1) % MAX_ROUNDS;
        if (this.roundSummaryCount < MAX_ROUNDS) this.roundSummaryCount++;

        this._aggregate.rounds += 1;
        this._aggregate.totalDuration += roundDuration;
        this._aggregate.totalBotLives += botCount;
        this._aggregate.totalBotSurvival += botSurvivalSum;
        this._aggregate.totalSelfCollisions += this._roundSelfCollisions;
        this._aggregate.totalStuckEvents += this._roundStuckEvents;
        this._aggregate.totalBounceWallEvents += this._roundBounceWallEvents;
        this._aggregate.totalBounceTrailEvents += this._roundBounceTrailEvents;
        this._aggregate.totalItemUseEvents += this._roundItemUseEvents;
        this._aggregate.totalLearningUpdates += this._roundLearningUpdates;
        this._aggregate.totalLearningReward += this._roundLearningRewardSum;
        this._aggregate.totalLearningTdAbs += this._roundLearningTdAbsSum;
        if (winner?.isBot) this._aggregate.botWins += 1;

        this._lastRoundSummary = {
            roundId: round.roundId,
            duration: round.duration,
            winnerIndex: round.winnerIndex,
            winnerIsBot: round.winnerIsBot,
            botCount: round.botCount,
            humanCount: round.humanCount,
            botSurvivalAverage: round.botSurvivalAverage,
            selfCollisions: round.selfCollisions,
            stuckEvents: round.stuckEvents,
            bounceWallEvents: round.bounceWallEvents,
            bounceTrailEvents: round.bounceTrailEvents,
            itemUseEvents: round.itemUseEvents,
            stuckPerMinute: round.stuckPerMinute,
            learningUpdates: round.learningUpdates,
            learningRewardSum: round.learningRewardSum,
            learningTdAbsSum: round.learningTdAbsSum,
        };

        this.logEvent('ROUND_END', round.winnerIndex, `duration=${round.duration.toFixed(2)}`);
        return this._lastRoundSummary;
    }

    getLastRoundMetrics() {
        return this._lastRoundSummary ? { ...this._lastRoundSummary } : null;
    }

    getRoundSummaries(limit = MAX_ROUNDS) {
        const safeLimit = Math.max(0, Math.floor(limit));
        const available = this.roundSummaryCount;
        if (safeLimit === 0 || available === 0) return [];

        const take = Math.min(available, safeLimit);
        const startIdx = available >= MAX_ROUNDS ? this.roundSummaryIndex : 0;
        const offset = Math.max(0, available - take);
        const out = [];

        for (let i = 0; i < take; i++) {
            const idx = (startIdx + offset + i) % MAX_ROUNDS;
            const round = this.roundSummaries[idx];
            out.push({
                roundId: round.roundId,
                duration: round.duration,
                winnerIndex: round.winnerIndex,
                winnerIsBot: round.winnerIsBot,
                botCount: round.botCount,
                humanCount: round.humanCount,
                botSurvivalAverage: round.botSurvivalAverage,
                selfCollisions: round.selfCollisions,
                stuckEvents: round.stuckEvents,
                bounceWallEvents: round.bounceWallEvents,
                bounceTrailEvents: round.bounceTrailEvents,
                itemUseEvents: round.itemUseEvents,
                stuckPerMinute: round.stuckPerMinute,
                learningUpdates: round.learningUpdates,
                learningRewardSum: round.learningRewardSum,
                learningTdAbsSum: round.learningTdAbsSum,
            });
        }
        return out;
    }

    getBotSurvivalAverages(limit = MAX_TRACKED_PLAYERS) {
        const safeLimit = Math.max(0, Math.floor(limit));
        if (safeLimit <= 0) return [];

        const out = [];
        for (let idx = 0; idx < MAX_TRACKED_PLAYERS; idx++) {
            const rounds = this._botSurvivalRoundsByIndex[idx];
            if (!rounds) continue;
            const total = this._botSurvivalSumByIndex[idx];
            out.push({
                botIndex: idx,
                botNumber: idx + 1,
                rounds,
                totalSurvivalSec: total,
                averageSurvivalSec: rounds > 0 ? total / rounds : 0,
            });
        }
        out.sort((a, b) => a.botIndex - b.botIndex);
        return out.slice(0, safeLimit);
    }

    getAggregateMetrics() {
        const rounds = this._aggregate.rounds;
        const totalDuration = this._aggregate.totalDuration;
        return {
            rounds,
            botWinRate: rounds > 0 ? this._aggregate.botWins / rounds : 0,
            averageBotSurvival: this._aggregate.totalBotLives > 0
                ? this._aggregate.totalBotSurvival / this._aggregate.totalBotLives
                : 0,
            selfCollisionsPerRound: rounds > 0 ? this._aggregate.totalSelfCollisions / rounds : 0,
            stuckEventsPerMinute: totalDuration > 0 ? this._aggregate.totalStuckEvents / (totalDuration / 60) : 0,
            bounceWallPerRound: rounds > 0 ? this._aggregate.totalBounceWallEvents / rounds : 0,
            bounceTrailPerRound: rounds > 0 ? this._aggregate.totalBounceTrailEvents / rounds : 0,
            itemUsePerRound: rounds > 0 ? this._aggregate.totalItemUseEvents / rounds : 0,
            learningUpdatesPerRound: rounds > 0 ? this._aggregate.totalLearningUpdates / rounds : 0,
            learningRewardPerRound: rounds > 0 ? this._aggregate.totalLearningReward / rounds : 0,
            learningTdAbsMean: this._aggregate.totalLearningUpdates > 0
                ? this._aggregate.totalLearningTdAbs / this._aggregate.totalLearningUpdates
                : 0,
        };
    }

    getLearningAnalysis(windowSize = 12) {
        const safeWindow = Math.max(2, Math.floor(windowSize));
        const rounds = this.getRoundSummaries(safeWindow * 2);
        if (rounds.length === 0) {
            return {
                status: 'NO_DATA',
                samplesRecent: 0,
                samplesPrevious: 0,
                recentUpdatesPerRound: 0,
                recentRewardPerRound: 0,
                recentTdAbsMean: 0,
                prevUpdatesPerRound: 0,
                prevRewardPerRound: 0,
                prevTdAbsMean: 0,
                updateTrendPerRound: 0,
                rewardTrendPerRound: 0,
                tdAbsTrend: 0,
            };
        }

        const recent = rounds.slice(-safeWindow);
        const previous = rounds.slice(-(safeWindow * 2), -safeWindow);

        const sum = (collection, mapper) => collection.reduce((acc, item) => acc + mapper(item), 0);
        const avg = (collection, mapper) => collection.length > 0 ? sum(collection, mapper) / collection.length : 0;
        const tdAbsMean = (collection) => {
            const updates = sum(collection, (item) => item.learningUpdates || 0);
            if (updates <= 0) return 0;
            const tdAbs = sum(collection, (item) => item.learningTdAbsSum || 0);
            return tdAbs / updates;
        };

        const recentUpdatesPerRound = avg(recent, (item) => item.learningUpdates || 0);
        const recentRewardPerRound = avg(recent, (item) => item.learningRewardSum || 0);
        const recentTdAbsMean = tdAbsMean(recent);

        const prevUpdatesPerRound = avg(previous, (item) => item.learningUpdates || 0);
        const prevRewardPerRound = avg(previous, (item) => item.learningRewardSum || 0);
        const prevTdAbsMean = tdAbsMean(previous);

        const updateTrendPerRound = recentUpdatesPerRound - prevUpdatesPerRound;
        const rewardTrendPerRound = recentRewardPerRound - prevRewardPerRound;
        const tdAbsTrend = recentTdAbsMean - prevTdAbsMean;

        let status = 'NO_DATA';
        if (recentUpdatesPerRound <= 0.001) {
            status = 'NO_LEARNING';
        } else if (Math.abs(rewardTrendPerRound) < 0.02 && Math.abs(updateTrendPerRound) < 0.1) {
            status = 'PLATEAU';
        } else if (rewardTrendPerRound >= 0) {
            status = tdAbsTrend <= 0 ? 'IMPROVING' : 'UNSTABLE';
        } else {
            status = 'UNSTABLE';
        }

        return {
            status,
            samplesRecent: recent.length,
            samplesPrevious: previous.length,
            recentUpdatesPerRound,
            recentRewardPerRound,
            recentTdAbsMean,
            prevUpdatesPerRound,
            prevRewardPerRound,
            prevTdAbsMean,
            updateTrendPerRound,
            rewardTrendPerRound,
            tdAbsTrend,
        };
    }

    captureBaseline(label = 'BASELINE') {
        const snapshot = this.getAggregateMetrics();
        this._baselines.set(label, snapshot);
        return { label, ...snapshot };
    }

    compareWithBaseline(label = 'BASELINE') {
        if (!this._baselines.has(label)) return null;
        const baseline = this._baselines.get(label);
        const current = this.getAggregateMetrics();
        const b = baseline || {};
        return {
            label,
            baseline,
            current,
            delta: {
                botWinRate: current.botWinRate - (b.botWinRate || 0),
                averageBotSurvival: current.averageBotSurvival - (b.averageBotSurvival || 0),
                selfCollisionsPerRound: current.selfCollisionsPerRound - (b.selfCollisionsPerRound || 0),
                stuckEventsPerMinute: current.stuckEventsPerMinute - (b.stuckEventsPerMinute || 0),
                bounceWallPerRound: current.bounceWallPerRound - (b.bounceWallPerRound || 0),
                bounceTrailPerRound: current.bounceTrailPerRound - (b.bounceTrailPerRound || 0),
                itemUsePerRound: current.itemUsePerRound - (b.itemUsePerRound || 0),
                learningUpdatesPerRound: current.learningUpdatesPerRound - (b.learningUpdatesPerRound || 0),
                learningRewardPerRound: current.learningRewardPerRound - (b.learningRewardPerRound || 0),
                learningTdAbsMean: current.learningTdAbsMean - (b.learningTdAbsMean || 0),
            },
        };
    }

    getValidationMatrix() {
        return [
            { id: 'V1', mode: '1p', bots: 1, mapKey: 'standard', planarMode: false, portalCount: 0, rounds: 10 },
            { id: 'V2', mode: '1p', bots: 3, mapKey: 'maze', planarMode: false, portalCount: 0, rounds: 10 },
            { id: 'V3', mode: '1p', bots: 3, mapKey: 'complex', planarMode: true, portalCount: 4, rounds: 10 },
            { id: 'V4', mode: '2p', bots: 2, mapKey: 'standard', planarMode: true, portalCount: 6, rounds: 10 },
        ];
    }

    recordFrame(players) {
        if (!this._enabled) return;
        this._frameCounter++;
        if (this._frameCounter % this._snapshotInterval !== 0) return;

        const snap = this.snapshots[this.snapshotIndex];
        snap.time = this._elapsedSeconds();

        while (snap.players.length < players.length) {
            snap.players.push({ idx: 0, alive: false, x: 0, y: 0, z: 0, bot: false });
        }
        for (let i = 0; i < players.length; i++) {
            const p = players[i];
            const s = snap.players[i];
            s.idx = p.index;
            s.alive = p.alive;
            s.x = +p.position.x.toFixed(1);
            s.y = +p.position.y.toFixed(1);
            s.z = +p.position.z.toFixed(1);
            s.bot = p.isBot;
        }

        this.snapshotIndex = (this.snapshotIndex + 1) % MAX_SNAPSHOTS;
        if (this.snapshotCount < MAX_SNAPSHOTS) this.snapshotCount++;
    }

    dump() {
        const eventList = [];
        const startIdx = this.eventCount >= MAX_EVENTS ? this.eventIndex : 0;
        for (let i = 0; i < this.eventCount; i++) {
            const idx = (startIdx + i) % MAX_EVENTS;
            const e = this.events[idx];
            eventList.push(`[${e.time.toFixed(2)}s] ${e.type} P${e.player} ${e.data}`);
        }

        const lastRound = this.getLastRoundMetrics();
        const aggregate = this.getAggregateMetrics();
        const comparison = this.compareWithBaseline('BASELINE');

        console.group('%cROUND LOG', 'color: #0af; font-size: 14px; font-weight: bold;');
        console.log(`Duration: ${this._elapsedSeconds().toFixed(1)}s`);
        console.log(`Events: ${this.eventCount}`);
        console.table(eventList.map((e) => ({ log: e })));
        if (lastRound) {
            console.log('Round KPI:', lastRound);
        }
        console.log('Aggregate KPI:', aggregate);
        if (comparison) {
            console.log('Baseline delta (BASELINE):', comparison.delta);
        }

        const snapList = [];
        const snapStart = this.snapshotCount >= MAX_SNAPSHOTS ? this.snapshotIndex : 0;
        const showCount = Math.min(this.snapshotCount, 20);
        const offset = Math.max(0, this.snapshotCount - showCount);
        for (let i = 0; i < showCount; i++) {
            const idx = (snapStart + offset + i) % MAX_SNAPSHOTS;
            const s = this.snapshots[idx];
            const playerStr = s.players
                .filter((p) => p.idx !== undefined)
                .map((p) => `${p.bot ? 'Bot' : 'P'}${p.idx}:${p.alive ? 'alive' : 'dead'}(${p.x},${p.y},${p.z})`)
                .join(' | ');
            snapList.push({ time: s.time.toFixed(2) + 's', players: playerStr });
        }
        if (snapList.length > 0) {
            console.log('Recent positions:');
            console.table(snapList);
        }
        console.groupEnd();

        return {
            events: eventList,
            snapshots: snapList,
            lastRound,
            aggregate,
            baselineDelta: comparison ? comparison.delta : null,
        };
    }
}

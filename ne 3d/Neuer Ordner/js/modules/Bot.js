// ============================================
// Bot.js - AI opponent logic
// ============================================

import * as THREE from 'three';
import { CONFIG } from './Config.js';
import { BotLearningEngine } from './BotLearning.js';
import { perfStart, perfEnd } from './PerfDebug.js';

const WORLD_UP = new THREE.Vector3(0, 1, 0);
const PERF_SECTION_BOT_UPDATE = 'bot.update';
const PERF_SECTION_BOT_SENSE = 'bot.senseEnvironment';
const PERF_SECTION_BOT_SCORE_PROBE = 'bot.scoreProbe';
const PERF_SECTION_BOT_DECIDE_STEERING = 'bot.decideSteering';
const PERF_SECTION_BOT_DECIDE_ITEM = 'bot.decideItemUsage';

const MAP_BEHAVIOR = {
    standard: { caution: 0.0, portalBias: 0.0, aggressionBias: 0.0 },
    empty: { caution: -0.12, portalBias: -0.08, aggressionBias: 0.16 },
    maze: { caution: 0.22, portalBias: 0.06, aggressionBias: -0.1 },
    complex: { caution: 0.16, portalBias: 0.08, aggressionBias: -0.04 },
    pyramid: { caution: 0.08, portalBias: 0.12, aggressionBias: 0.03 },
};

// Phase 3: Kontextsensitive Item-Regeln (emergencyScale + combatSelf)
const ITEM_RULES = {
    SPEED_UP: { self: 0.8, offense: 0.2, defensiveScale: 0.5, emergencyScale: 0.1, combatSelf: 0.2 },
    SLOW_DOWN: { self: -0.8, offense: 0.9, defensiveScale: 0.1, emergencyScale: 0.0, combatSelf: -0.3 },
    THICK: { self: 0.9, offense: 0.1, defensiveScale: 0.8, emergencyScale: 0.2, combatSelf: 0.4 },
    THIN: { self: -0.6, offense: 0.7, defensiveScale: 0.2, emergencyScale: 0.0, combatSelf: -0.2 },
    SHIELD: { self: 0.5, offense: 0.0, defensiveScale: 1.2, emergencyScale: 2.5, combatSelf: 0.8 },
    SLOW_TIME: { self: 0.7, offense: 0.35, defensiveScale: 0.6, emergencyScale: 0.4, combatSelf: 0.3 },
    GHOST: { self: 0.95, offense: 0.1, defensiveScale: 1.0, emergencyScale: 2.0, combatSelf: 0.5 },
    INVERT: { self: -0.7, offense: 0.85, defensiveScale: 0.15, emergencyScale: 0.0, combatSelf: -0.4 },
};

const LEARN_ACTION_INDEX = Object.freeze({
    NO_OP: 0,
    YAW_LEFT: 1,
    YAW_RIGHT: 2,
    PITCH_UP: 3,
    PITCH_DOWN: 4,
    BOOST: 5,
    USE_ITEM: 6,
    SHOOT_ITEM: 7,
});

function createProbe(name, yaw, pitch, weight = 0) {
    return {
        name,
        yaw,
        pitch,
        weight,
        dir: new THREE.Vector3(),
        risk: 999,
        wallDist: 0,
        trailDist: 0,
        clearance: 0,
        immediateDanger: false,
    };
}

export class BotAI {
    constructor(options = {}) {
        this.recorder = options.recorder || null;
        this.learningEngine = options.learning instanceof BotLearningEngine ? options.learning : null;
        this.botId = options.botId || `bot-${Math.random().toString(36).slice(2, 8)}`;
        this.learningEnabled = !!options.learningEnabled;
        this.learningTraining = !!options.learningTraining;
        this.forcePlanarMode = !!options.forcePlanarMode;
        this._learningReward = {
            survivalPerSec: CONFIG.BOT.LEARNING?.REWARD?.SURVIVAL_PER_SEC ?? 0.03,
            bounceWall: CONFIG.BOT.LEARNING?.REWARD?.BOUNCE_WALL ?? -0.35,
            bounceTrail: CONFIG.BOT.LEARNING?.REWARD?.BOUNCE_TRAIL ?? -0.55,
            kill: CONFIG.BOT.LEARNING?.REWARD?.KILL ?? 2.2,
            death: CONFIG.BOT.LEARNING?.REWARD?.DEATH ?? -2.8,
            roundWin: CONFIG.BOT.LEARNING?.REWARD?.ROUND_WIN ?? 1.4,
            roundLoss: CONFIG.BOT.LEARNING?.REWARD?.ROUND_LOSS ?? -0.8,
            roundDraw: CONFIG.BOT.LEARNING?.REWARD?.ROUND_DRAW ?? -0.25,
        };
        this._learning = {
            lastStateKey: '',
            lastActionIndex: -1,
            rewardBuffer: 0,
            roundReward: 0,
            decisionCount: 0,
            updateCount: 0,
        };

        this.currentInput = {
            pitchUp: false,
            pitchDown: false,
            yawLeft: false,
            yawRight: false,
            rollLeft: false,
            rollRight: false,
            boost: false,
            cameraSwitch: false,
            dropItem: false,
            shootItem: false,
            shootItemIndex: -1,
            nextItem: false,
            useItem: -1,
        };

        this.reactionTimer = 0;
        this._profileName = 'NORMAL';
        this.profile = null;

        this._decision = {
            yaw: 0,
            pitch: 0,
            boost: false,
            useItem: -1,
            shootItem: false,
            shootItemIndex: -1,
        };

        this.state = {
            turnCommitTimer: 0,
            committedYaw: 0,
            committedPitch: 0,

            recoveryActive: false,
            recoveryTimer: 0,
            recoveryCooldown: 0,
            recoveryYaw: 0,
            recoveryPitch: 0,

            targetPlayer: null,
            targetRefreshTimer: 0,
            itemUseCooldown: 0,
            itemShootCooldown: 0,

            portalIntentActive: false,
            portalIntentTimer: 0,
            portalIntentScore: 0,
            portalEntryDistanceSq: Infinity,
        };

        this.sense = {
            lookAhead: 0,
            forwardRisk: 1,
            bestProbe: null,
            targetDistanceSq: Infinity,
            targetInFront: false,
            immediateDanger: false,
            pressure: 0,
            localOpenness: 0,
            mapCaution: 0,
            mapPortalBias: 0,
            mapAggressionBias: 0,
            // Phase 2: Projektil-Sensing
            projectileThreat: false,
            projectileEvadeYaw: 0,
            projectileEvadePitch: 0,
            // Phase 5: Höhenbewusstsein
            heightBias: 0,
            // Phase 6: Multi-Bot-Spacing
            botRepulsionYaw: 0,
            botRepulsionPitch: 0,
            // Phase 4: Pursuit
            pursuitActive: false,
            pursuitYaw: 0,
            pursuitPitch: 0,
            pursuitAimDot: 0,
        };

        this._checkStuckTimer = 0;
        this._stuckScore = 0;
        this._recentBouncePressure = 0;
        this._hasPositionSample = false;
        this._lastPos = new THREE.Vector3();
        this._lastCollisionNormal = new THREE.Vector3();
        this._hasCollisionNormal = false;

        this._portalEntry = new THREE.Vector3();
        this._portalExit = new THREE.Vector3();
        this._portalTarget = null;

        this._tmpForward = new THREE.Vector3();
        this._tmpRight = new THREE.Vector3();
        this._tmpUp = new THREE.Vector3();
        this._tmpVec = new THREE.Vector3();
        this._tmpVec2 = new THREE.Vector3();
        this._tmpVec3 = new THREE.Vector3();

        // Phase 1: Erweiterte Probes (12 statt 7)
        this._probes = [
            createProbe('forward', 0, 0, 0),
            createProbe('left', -1.0, 0, 0.02),
            createProbe('right', 1.0, 0, 0.02),
            createProbe('leftWide', -1.8, 0, 0.07),
            createProbe('rightWide', 1.8, 0, 0.07),
            createProbe('up', 0, 0.9, 0.08),
            createProbe('down', 0, -0.9, 0.08),
            // Neue diagonale Probes
            createProbe('upLeft', -0.7, 0.7, 0.10),
            createProbe('upRight', 0.7, 0.7, 0.10),
            createProbe('downLeft', -0.7, -0.7, 0.10),
            createProbe('downRight', 0.7, -0.7, 0.10),
            // Backward-Probe für Rückwärtserkennung
            createProbe('backward', 3.14, 0, 0.25),
        ];

        this._setDifficulty(options.difficulty || CONFIG.BOT.ACTIVE_DIFFICULTY || CONFIG.BOT.DEFAULT_DIFFICULTY || 'NORMAL');
        this._checkStuckTimer = this.profile.stuckCheckInterval;
    }

    _setDifficulty(profileName) {
        const profiles = CONFIG.BOT.DIFFICULTY_PROFILES || {};
        const upper = typeof profileName === 'string' ? profileName.toUpperCase() : 'NORMAL';
        this._profileName = profiles[upper] ? upper : 'NORMAL';

        const fallback = {
            reactionTime: CONFIG.BOT.REACTION_TIME || 0.15,
            lookAhead: CONFIG.BOT.LOOK_AHEAD || 12,
            aggression: CONFIG.BOT.AGGRESSION || 0.5,
            errorRate: 0,
            probeSpread: 0.7,
            probeStep: 2,
            turnCommitTime: 0.25,
            stuckCheckInterval: 0.4,
            stuckTriggerTime: 1.6,
            minProgressDistance: 0.9,
            minForwardProgress: 0.45,
            recoveryDuration: 1.0,
            recoveryCooldown: 1.5,
            itemUseCooldown: 1.0,
            itemShootCooldown: 0.6,
            targetRefreshInterval: 0.2,
            portalInterest: 0.5,
            portalSeekDistance: 70,
            portalEntryDotMin: 0.3,
            portalIntentThreshold: 0.2,
            portalIntentDuration: 1.0,
            boostChance: 0.004,
        };

        this.profile = { ...fallback, ...(profiles[this._profileName] || {}) };
    }

    setDifficulty(profileName) {
        this._setDifficulty(profileName);
        this.reactionTimer = 0;
        this.state.turnCommitTimer = 0;
        this.state.recoveryActive = false;
    }

    setLearningOptions(options = {}) {
        if (Object.prototype.hasOwnProperty.call(options, 'learningEngine')) {
            this.learningEngine = options.learningEngine instanceof BotLearningEngine ? options.learningEngine : this.learningEngine;
        }
        if (Object.prototype.hasOwnProperty.call(options, 'enabled')) {
            this.learningEnabled = !!options.enabled;
        }
        if (Object.prototype.hasOwnProperty.call(options, 'training')) {
            this.learningTraining = !!options.training;
        }
        if (Object.prototype.hasOwnProperty.call(options, 'forcePlanarMode')) {
            this.forcePlanarMode = !!options.forcePlanarMode;
        }
        if (!this._isLearningActive()) {
            this._clearLearningTransition();
        }
    }

    onBounce(type, normal = null) {
        const pressure = type === 'TRAIL' ? 1.3 : 0.9;
        this._recentBouncePressure = Math.min(4, this._recentBouncePressure + pressure);
        if (normal) {
            this._lastCollisionNormal.copy(normal).normalize();
            this._hasCollisionNormal = true;
        }
        if (this._isLearningActive()) {
            this._addLearningReward(type === 'TRAIL' ? this._learningReward.bounceTrail : this._learningReward.bounceWall);
        }
    }

    onKill(targetPlayer = null, cause = 'UNKNOWN') {
        if (!this._isLearningActive()) return;
        this._addLearningReward(this._learningReward.kill);
        if (this.recorder?.logEvent) {
            const victim = targetPlayer ? `victim=${targetPlayer.index}` : 'victim=-1';
            this.recorder.logEvent('LEARN_KILL', Number.isFinite(targetPlayer?.index) ? targetPlayer.index : -1, `killer=${this.botId} cause=${cause} ${victim}`);
        }
    }

    onDeath(cause = 'UNKNOWN') {
        if (!this._isLearningActive()) return;
        this._addLearningReward(this._learningReward.death);
        this._finalizeLearningTransition(true, `death:${cause}`);
    }

    onRoundEnd(outcome = 'draw') {
        if (!this._isLearningActive()) return;
        if (outcome === 'win') {
            this._addLearningReward(this._learningReward.roundWin);
        } else if (outcome === 'loss') {
            this._addLearningReward(this._learningReward.roundLoss);
        } else {
            this._addLearningReward(this._learningReward.roundDraw);
        }
        this._finalizeLearningTransition(true, `round:${outcome}`);
    }

    _resetInput(input) {
        input.pitchUp = false;
        input.pitchDown = false;
        input.yawLeft = false;
        input.yawRight = false;
        input.rollLeft = false;
        input.rollRight = false;
        input.boost = false;
        input.cameraSwitch = false;
        input.dropItem = false;
        input.shootItem = false;
        input.shootItemIndex = -1;
        input.nextItem = false;
        input.useItem = -1;
    }

    _resetDecision() {
        this._decision.yaw = 0;
        this._decision.pitch = 0;
        this._decision.boost = false;
        this._decision.useItem = -1;
        this._decision.shootItem = false;
        this._decision.shootItemIndex = -1;
    }

    _buildBasis(forward) {
        this._tmpRight.crossVectors(WORLD_UP, forward);
        if (this._tmpRight.lengthSq() < 0.000001) {
            this._tmpRight.set(1, 0, 0);
        } else {
            this._tmpRight.normalize();
        }
        this._tmpUp.crossVectors(forward, this._tmpRight).normalize();
    }

    _updateTimers(dt) {
        this.reactionTimer -= dt;
        this._checkStuckTimer -= dt;
        this._recentBouncePressure = Math.max(0, this._recentBouncePressure - dt * 1.35);

        this.state.turnCommitTimer = Math.max(0, this.state.turnCommitTimer - dt);
        this.state.recoveryCooldown = Math.max(0, this.state.recoveryCooldown - dt);
        this.state.targetRefreshTimer = Math.max(0, this.state.targetRefreshTimer - dt);
        this.state.itemUseCooldown = Math.max(0, this.state.itemUseCooldown - dt);
        this.state.itemShootCooldown = Math.max(0, this.state.itemShootCooldown - dt);
        this.state.portalIntentTimer = Math.max(0, this.state.portalIntentTimer - dt);

        if (this.state.portalIntentTimer === 0) {
            this.state.portalIntentActive = false;
            this.state.portalIntentScore = 0;
            this._portalTarget = null;
        }
    }

    _updateStuckState(player, arena, allPlayers) {
        if (!this._hasPositionSample) {
            this._lastPos.copy(player.position);
            this._hasPositionSample = true;
            return;
        }

        if (this._checkStuckTimer > 0) return;
        this._checkStuckTimer = this.profile.stuckCheckInterval;

        player.getDirection(this._tmpForward).normalize();
        this._tmpVec.subVectors(player.position, this._lastPos);
        const movement = this._tmpVec.length();
        const forwardProgress = this._tmpVec.dot(this._tmpForward);

        const weakMovement = movement < this.profile.minProgressDistance;
        const weakProgress = forwardProgress < this.profile.minForwardProgress;

        if (weakMovement || weakProgress) {
            this._stuckScore += this.profile.stuckCheckInterval;
        } else {
            this._stuckScore = Math.max(0, this._stuckScore - this.profile.stuckCheckInterval * 0.8);
        }

        this._stuckScore += this._recentBouncePressure * 0.06;
        this._lastPos.copy(player.position);

        if (!this.state.recoveryActive && this.state.recoveryCooldown <= 0 && this._stuckScore >= this.profile.stuckTriggerTime) {
            this._enterRecovery(player, arena, allPlayers, 'low-progress');
        }
    }

    _selectRecoveryManeuver(player, arena, allPlayers) {
        player.getDirection(this._tmpForward).normalize();
        this._buildBasis(this._tmpForward);

        const candidates = this._isPlanarMode()
            ? [
                { yaw: -1, pitch: 0, weight: 0.02 },
                { yaw: 1, pitch: 0, weight: 0.02 },
                { yaw: -1, pitch: 0, weight: 0.12, biasAwayFromNormal: true },
                { yaw: 1, pitch: 0, weight: 0.12, biasAwayFromNormal: true },
            ]
            : [
                { yaw: -1, pitch: 0, weight: 0.02 },
                { yaw: 1, pitch: 0, weight: 0.02 },
                { yaw: -1, pitch: 1, weight: 0.1 },
                { yaw: 1, pitch: 1, weight: 0.1 },
                { yaw: -1, pitch: -1, weight: 0.1 },
                { yaw: 1, pitch: -1, weight: 0.1 },
                { yaw: -1, pitch: 0, weight: 0.14, biasAwayFromNormal: true },
                { yaw: 1, pitch: 0, weight: 0.14, biasAwayFromNormal: true },
            ];

        const sampleDistances = [3, 5.5, 8.5, 12];
        let best = null;
        let bestScore = Infinity;

        for (let i = 0; i < candidates.length; i++) {
            const candidate = candidates[i];
            this._tmpVec.copy(this._tmpForward).addScaledVector(this._tmpRight, candidate.yaw * 0.95);
            if (!this._isPlanarMode() && candidate.pitch !== 0) {
                this._tmpVec.addScaledVector(this._tmpUp, candidate.pitch * 0.75);
            }
            this._tmpVec.normalize();

            let score = candidate.weight;

            if (candidate.biasAwayFromNormal && this._hasCollisionNormal) {
                const side = this._tmpRight.dot(this._lastCollisionNormal);
                if ((candidate.yaw > 0 && side > 0) || (candidate.yaw < 0 && side < 0)) {
                    score += 0.65;
                }
            }

            for (let j = 0; j < sampleDistances.length; j++) {
                const distance = sampleDistances[j];
                this._tmpVec2.copy(player.position).addScaledVector(this._tmpVec, distance);

                const wallHit = arena.checkCollision(this._tmpVec2, 1.35);
                const trailHit = this._checkTrailHit(this._tmpVec2, player, allPlayers);
                if (wallHit || trailHit) {
                    score += 3.2 + j * 0.8 + (trailHit ? 0.9 : 0.5);
                    break;
                }

                score += this._estimateEnemyPressure(this._tmpVec2, player, allPlayers) * 0.35;
            }

            if (this._hasCollisionNormal) {
                const awayDot = this._tmpVec.dot(this._lastCollisionNormal);
                score -= awayDot * 0.65;
            }

            if (!this._isPlanarMode()) {
                const margin = 7;
                const projectedY = player.position.y + this._tmpVec.y * 9;
                if (projectedY < arena.bounds.minY + margin || projectedY > arena.bounds.maxY - margin) {
                    score += 0.85;
                }
            }

            if (score < bestScore) {
                bestScore = score;
                best = candidate;
            }
        }

        return best;
    }

    _enterRecovery(player, arena, allPlayers, reason) {
        this.state.recoveryActive = true;
        this.state.recoveryTimer = this.profile.recoveryDuration;
        this.state.recoveryCooldown = this.profile.recoveryCooldown;
        this._stuckScore = 0;

        const maneuver = this._selectRecoveryManeuver(player, arena, allPlayers);
        this.state.recoveryYaw = maneuver?.yaw || (Math.random() > 0.5 ? 1 : -1);
        this.state.recoveryPitch = this._isPlanarMode() ? 0 : (maneuver?.pitch || 0);

        if (!this._isPlanarMode()) {
            const margin = 8;
            if (player.position.y < arena.bounds.minY + margin) this.state.recoveryPitch = 1;
            else if (player.position.y > arena.bounds.maxY - margin) this.state.recoveryPitch = -1;
        }

        if (this.recorder) {
            this.recorder.logEvent(
                'STUCK',
                player.index,
                `reason=${reason} yaw=${this.state.recoveryYaw} pitch=${this.state.recoveryPitch}`
            );
        }
    }

    _shouldBoostRecovery(player, arena, allPlayers) {
        if (this._recentBouncePressure > 1.2) return false;
        if (this.sense.forwardRisk > 0.62) return false;

        player.getDirection(this._tmpForward).normalize();
        this._buildBasis(this._tmpForward);
        this._tmpVec.copy(this._tmpForward);
        this._tmpVec.addScaledVector(this._tmpRight, this.state.recoveryYaw * 0.22);
        if (!this._isPlanarMode()) {
            this._tmpVec.addScaledVector(this._tmpUp, this.state.recoveryPitch * 0.2);
        }
        this._tmpVec.normalize();

        const checks = [3, 5, 7];
        for (let i = 0; i < checks.length; i++) {
            this._tmpVec2.copy(player.position).addScaledVector(this._tmpVec, checks[i]);
            if (arena.checkCollision(this._tmpVec2, 1.35) || this._checkTrailHit(this._tmpVec2, player, allPlayers)) {
                return false;
            }
        }
        return true;
    }

    _updateRecovery(dt, player, arena, allPlayers) {
        this.state.recoveryTimer -= dt;
        if (this.state.recoveryTimer <= 0) {
            this.state.recoveryActive = false;
            this.state.recoveryYaw = 0;
            this.state.recoveryPitch = 0;
            return false;
        }

        this._resetInput(this.currentInput);
        this.currentInput.boost = this._shouldBoostRecovery(player, arena, allPlayers);
        if (this.state.recoveryYaw > 0) this.currentInput.yawRight = true;
        else if (this.state.recoveryYaw < 0) this.currentInput.yawLeft = true;

        if (!this._isPlanarMode()) {
            if (this.state.recoveryPitch > 0) this.currentInput.pitchUp = true;
            else if (this.state.recoveryPitch < 0) this.currentInput.pitchDown = true;
        }
        return true;
    }

    _computeDynamicLookAhead(player) {
        const base = this.profile.lookAhead;
        const speedRatio = player.baseSpeed > 0 ? player.speed / player.baseSpeed : 1;
        let lookAhead = base * (1 + (speedRatio - 1) * 0.75);
        if (player.isBoosting) lookAhead *= 1.2;
        return Math.max(8, lookAhead);
    }

    _mapBehavior(arena) {
        const mapKey = arena.currentMapKey || 'standard';
        return MAP_BEHAVIOR[mapKey] || MAP_BEHAVIOR.standard;
    }

    _composeProbeDirection(forward, right, up, probe) {
        const yawFactor = probe.yaw * this.profile.probeSpread;
        const pitchFactor = probe.pitch * this.profile.probeSpread;

        probe.dir.copy(forward);
        if (yawFactor !== 0) probe.dir.addScaledVector(right, yawFactor);
        if (!this._isPlanarMode() && pitchFactor !== 0) probe.dir.addScaledVector(up, pitchFactor);
        probe.dir.normalize();
    }

    _checkTrailHit(position, player, allPlayers) {
        const selfSkipRecent = this.state.recoveryActive
            ? 6
            : (this._recentBouncePressure > 1.4 ? 8 : 12);
        for (let i = 0; i < allPlayers.length; i++) {
            const other = allPlayers[i];
            if (!other || !other.alive) continue;
            const skipRecent = other === player ? selfSkipRecent : 0;

            if (other.trail.checkCollisionFast) {
                if (other.trail.checkCollisionFast(position, 1.35, skipRecent)) {
                    return true;
                }
            } else {
                const hit = other.trail.checkCollision(position, 1.35, skipRecent);
                if (hit && hit.hit) return true;
            }
        }
        return false;
    }

    _scoreProbe(player, arena, allPlayers, probe, lookAhead) {
        const perfToken = perfStart(PERF_SECTION_BOT_SCORE_PROBE);
        try {
            const step = this.profile.probeStep;

            // Phase 1: Adaptive LookAhead pro Probe-Typ
            let probeLookAhead = lookAhead;
            const absYaw = Math.abs(probe.yaw);
            if (absYaw > 2.5) {
                probeLookAhead = lookAhead * 0.4;  // backward
            } else if (absYaw > 1.2) {
                probeLookAhead = lookAhead * 0.7;  // wide sides
            }

            let wallDist = probeLookAhead;
            let trailDist = probeLookAhead;
            let immediateDanger = false;

            for (let d = step; d <= probeLookAhead; d += step) {
                this._tmpVec.copy(player.position).addScaledVector(probe.dir, d);

                if (arena.checkCollision(this._tmpVec, 1.35)) {
                    wallDist = d;
                    if (d <= step * 1.5) immediateDanger = true;
                    break;
                }

                if (this._checkTrailHit(this._tmpVec, player, allPlayers)) {
                    trailDist = d;
                    if (d <= step * 1.5) immediateDanger = true;
                    break;
                }
            }

            // Phase 1: Speed-basiertes Risiko
            const speedRatio = player.baseSpeed > 0 ? player.speed / player.baseSpeed : 1;
            const speedFactor = Math.max(0, speedRatio - 1) * 0.3;

            const wallRisk = 1 - Math.min(1, wallDist / probeLookAhead);
            const trailRisk = 1 - Math.min(1, trailDist / probeLookAhead);
            let risk = wallRisk * (1.1 + this.sense.mapCaution + speedFactor)
                + trailRisk * (1.45 + this.sense.mapCaution * 0.5 + speedFactor * 0.7);

            risk += probe.weight;
            if (immediateDanger) risk += 2.2;

            // Easy bots make more mistakes, hard bots remain clean.
            if (this.profile.errorRate > 0 && Math.random() < this.profile.errorRate) {
                risk += (Math.random() - 0.2) * 0.65;
            }

            probe.wallDist = wallDist;
            probe.trailDist = trailDist;
            probe.clearance = Math.min(wallDist, trailDist);
            probe.immediateDanger = immediateDanger;
            probe.risk = risk;
        } finally {
            perfEnd(PERF_SECTION_BOT_SCORE_PROBE, perfToken);
        }
    }

    _selectTarget(player, allPlayers) {
        let bestTarget = null;
        let bestScore = -Infinity;
        let bestDistSq = Infinity;

        player.getDirection(this._tmpForward).normalize();

        for (let i = 0; i < allPlayers.length; i++) {
            const other = allPlayers[i];
            if (!other || other === player || !other.alive) continue;

            this._tmpVec.subVectors(other.position, player.position);
            const distSq = this._tmpVec.lengthSq();
            if (distSq < 0.0001) continue;

            const invDist = 1 / Math.max(4, Math.sqrt(distSq));
            const toward = this._tmpVec.normalize().dot(this._tmpForward);

            other.getDirection(this._tmpVec2).normalize();
            this._tmpVec3.subVectors(player.position, other.position).normalize();
            const threatAlignment = this._tmpVec2.dot(this._tmpVec3);

            const score = invDist * 0.9 + toward * 0.55 + threatAlignment * 0.35;
            if (score > bestScore) {
                bestScore = score;
                bestTarget = other;
                bestDistSq = distSq;
            }
        }

        this.state.targetPlayer = bestTarget;
        this.sense.targetDistanceSq = bestTarget ? bestDistSq : Infinity;

        if (bestTarget) {
            this._tmpVec.subVectors(bestTarget.position, player.position).normalize();
            this.sense.targetInFront = this._tmpVec.dot(this._tmpForward) > 0.52;
        } else {
            this.sense.targetInFront = false;
        }
    }

    _estimateEnemyPressure(position, owner, allPlayers) {
        let nearestDistSq = Infinity;
        for (let i = 0; i < allPlayers.length; i++) {
            const other = allPlayers[i];
            if (!other || other === owner || !other.alive) continue;
            const d = other.position.distanceToSquared(position);
            if (d < nearestDistSq) nearestDistSq = d;
        }
        if (!isFinite(nearestDistSq)) return 0;
        const dist = Math.sqrt(nearestDistSq);
        return dist >= 40 ? 0 : 1 - dist / 40;
    }

    _estimatePointRisk(point, player, arena, allPlayers) {
        const wallHit = arena.checkCollision(point, 1.6) ? 1 : 0;
        const trailHit = this._checkTrailHit(point, player, allPlayers) ? 1 : 0;
        const enemyPressure = this._estimateEnemyPressure(point, player, allPlayers);
        return wallHit * 1.2 + trailHit * 1.5 + enemyPressure * 0.6;
    }

    // ================================================================
    // Phase 7: Portal-Exit-Safety — prüfe 4 Richtungen am Exit
    // ================================================================
    _estimateExitSafety(exit, arena, player, allPlayers) {
        const probeDistance = 5;
        const dirs = [
            { x: 1, y: 0, z: 0 },
            { x: -1, y: 0, z: 0 },
            { x: 0, y: 0, z: 1 },
            { x: 0, y: 0, z: -1 },
        ];
        let blockedCount = 0;
        for (let i = 0; i < dirs.length; i++) {
            this._tmpVec3.set(
                exit.x + dirs[i].x * probeDistance,
                exit.y + dirs[i].y * probeDistance,
                exit.z + dirs[i].z * probeDistance
            );
            if (arena.checkCollision(this._tmpVec3, 1.6)
                || this._checkTrailHit(this._tmpVec3, player, allPlayers)) {
                blockedCount++;
            }
        }
        return blockedCount / dirs.length;
    }

    // ================================================================
    // Phase 2: Projektil-Sensing — eingehende Geschosse erkennen
    // ================================================================
    _senseProjectiles(player, projectiles) {
        this.sense.projectileThreat = false;
        this.sense.projectileEvadeYaw = 0;
        this.sense.projectileEvadePitch = 0;

        const awareness = this.profile.projectileAwareness || 0;
        if (awareness <= 0 || !projectiles || projectiles.length === 0) return;

        player.getDirection(this._tmpForward).normalize();
        this._buildBasis(this._tmpForward);

        let nearestTime = Infinity;
        let evadeYaw = 0;
        let evadePitch = 0;

        for (let i = 0; i < projectiles.length; i++) {
            const proj = projectiles[i];
            if (proj.owner === player) continue;  // eigene Geschosse ignorieren

            this._tmpVec.subVectors(proj.position, player.position);
            const dist = this._tmpVec.length();
            if (dist > 25 || dist < 0.5) continue;

            // Prüfen ob Projektil auf Bot zufliegt
            this._tmpVec.normalize();
            this._tmpVec2.copy(proj.velocity).normalize();
            const towardBot = -this._tmpVec2.dot(this._tmpVec); // Positiv = fliegt auf uns zu
            if (towardBot < 0.4) continue;

            // Einschlagzeit schätzen
            const speed = proj.velocity.length();
            const timeToImpact = speed > 1 ? dist / speed : 999;
            if (timeToImpact > 0.8) continue;

            // Zufallscheck basierend auf Awareness
            if (Math.random() > awareness) continue;

            if (timeToImpact < nearestTime) {
                nearestTime = timeToImpact;

                // Ausweichrichtung = Kreuzprodukt(Flugrichtung, WORLD_UP)
                this._tmpVec3.crossVectors(this._tmpVec2, WORLD_UP).normalize();
                // Welche Seite des Bots? → auf die entgegengesetzte Seite ausweichen
                const side = this._tmpRight.dot(this._tmpVec3);
                evadeYaw = side > 0 ? -1 : 1;

                if (!this._isPlanarMode()) {
                    // Vertikale Komponente: wenn Projektil von oben → runter, etc.
                    const verticalApproach = this._tmpVec.y;
                    evadePitch = verticalApproach > 0.2 ? -1 : (verticalApproach < -0.2 ? 1 : 0);
                }
            }
        }

        if (nearestTime < Infinity) {
            this.sense.projectileThreat = true;
            this.sense.projectileEvadeYaw = evadeYaw;
            this.sense.projectileEvadePitch = evadePitch;
        }
    }

    // ================================================================
    // Phase 5: Höhenbewusstsein — bevorzuge Arena-Mitte
    // ================================================================
    _senseHeight(player, arena) {
        this.sense.heightBias = 0;
        if (this._isPlanarMode()) return;

        const bias = this.profile.heightBias || 0;
        if (bias <= 0) return;

        const b = arena.bounds;
        const midY = (b.minY + b.maxY) * 0.5;
        const offset = player.position.y - midY;
        const range = (b.maxY - b.minY) * 0.5;

        if (range <= 0) return;

        // Normalisiert: -1 (ganz unten) bis +1 (ganz oben)
        const normalizedOffset = offset / range;

        // Gegensteuerung: wenn oben → Pitch-Down-Bias, wenn unten → Pitch-Up
        this.sense.heightBias = -normalizedOffset * bias;
    }

    // ================================================================
    // Phase 6: Multi-Bot-Spacing — Abstoßung von anderen Bots
    // ================================================================
    _senseBotSpacing(player, allPlayers) {
        this.sense.botRepulsionYaw = 0;
        this.sense.botRepulsionPitch = 0;

        const weight = this.profile.spacingWeight || 0;
        if (weight <= 0) return;

        const minDist = 12;
        player.getDirection(this._tmpForward).normalize();
        this._buildBasis(this._tmpForward);

        let repulseX = 0;
        let repulseY = 0;

        for (let i = 0; i < allPlayers.length; i++) {
            const other = allPlayers[i];
            if (!other || other === player || !other.alive || !other.isBot) continue;

            this._tmpVec.subVectors(player.position, other.position);
            const dist = this._tmpVec.length();
            if (dist >= minDist || dist < 0.1) continue;

            // Abstoßungsstärke
            const strength = weight * (1 - dist / minDist);
            this._tmpVec.normalize();

            // In Yaw/Pitch-Raum projizieren
            repulseX += this._tmpRight.dot(this._tmpVec) * strength;
            repulseY += this._tmpUp.dot(this._tmpVec) * strength;
        }

        if (Math.abs(repulseX) > 0.05) {
            this.sense.botRepulsionYaw = repulseX > 0 ? 1 : -1;
        }
        if (!this._isPlanarMode() && Math.abs(repulseY) > 0.05) {
            this.sense.botRepulsionPitch = repulseY > 0 ? 1 : -1;
        }
    }

    // ================================================================
    // Phase 4: Pursuit-Mode — aktives Verfolgen
    // ================================================================
    _evaluatePursuit(player) {
        this.sense.pursuitActive = false;
        this.sense.pursuitYaw = 0;
        this.sense.pursuitPitch = 0;
        this.sense.pursuitAimDot = 0;

        if (!this.profile.pursuitEnabled) return;
        if (this.sense.immediateDanger || this.sense.forwardRisk > 0.3) return;

        const target = this.state.targetPlayer;
        if (!target || !target.alive) return;

        const pursuitRadius = this.profile.pursuitRadius || 35;
        if (this.sense.targetDistanceSq > pursuitRadius * pursuitRadius) return;
        if (!this.sense.targetInFront) return;

        // Richtung zum Ziel berechnen
        player.getDirection(this._tmpForward).normalize();
        this._buildBasis(this._tmpForward);

        this._tmpVec.subVectors(target.position, player.position).normalize();

        const aimDot = this._tmpVec.dot(this._tmpForward);
        const yawSignal = this._tmpRight.dot(this._tmpVec);
        const pitchSignal = this._tmpUp.dot(this._tmpVec);

        this.sense.pursuitActive = true;
        this.sense.pursuitAimDot = aimDot;
        this.sense.pursuitYaw = Math.abs(yawSignal) > 0.05 ? (yawSignal > 0 ? 1 : -1) : 0;
        if (!this._isPlanarMode()) {
            this.sense.pursuitPitch = Math.abs(pitchSignal) > 0.08 ? (pitchSignal > 0 ? 1 : -1) : 0;
        }
    }

    _evaluatePortalIntent(player, arena, allPlayers) {
        if (!arena.portalsEnabled || !arena.portals || arena.portals.length === 0) {
            this.state.portalIntentActive = false;
            this._portalTarget = null;
            return;
        }

        if (this.profile.portalInterest <= 0) {
            this.state.portalIntentActive = false;
            this._portalTarget = null;
            return;
        }

        const seekDistance = this.profile.portalSeekDistance;
        const seekDistSq = seekDistance * seekDistance;

        player.getDirection(this._tmpForward).normalize();

        let bestScore = -Infinity;
        let bestEntry = null;
        let bestExit = null;
        let bestEntryDistSq = Infinity;

        for (let i = 0; i < arena.portals.length; i++) {
            const portal = arena.portals[i];
            // Prüfe beide Seiten des Portals
            const sides = [
                { entry: portal.posA, exit: portal.posB },
                { entry: portal.posB, exit: portal.posA },
            ];

            for (let s = 0; s < sides.length; s++) {
                const { entry, exit } = sides[s];
                const distSq = player.position.distanceToSquared(entry);
                if (distSq > seekDistSq) continue;

                this._tmpVec.subVectors(entry, player.position).normalize();
                const forwardDot = this._tmpVec.dot(this._tmpForward);
                if (forwardDot < this.profile.portalEntryDotMin) continue;

                const entryRisk = this._estimatePointRisk(entry, player, arena, allPlayers);
                // Phase 7: Exit-Safety statt einfacher Punkt-Risiko
                const exitSafety = this._estimateExitSafety(exit, arena, player, allPlayers);
                const exitRisk = exitSafety;
                // Wenn >= 75% der Exit-Richtungen blockiert sind → Portal meiden
                if (exitSafety >= 0.75) continue;

                const localRelief = this.sense.forwardRisk - exitRisk;
                const distancePenalty = distSq / seekDistSq;
                const score =
                    localRelief * (0.8 + this.profile.portalInterest) +
                    this.sense.mapPortalBias * 0.5 -
                    entryRisk * 0.6 -
                    distancePenalty * 0.4;

                if (score > bestScore) {
                    bestScore = score;
                    bestEntry = entry;
                    bestExit = exit;
                    bestEntryDistSq = distSq;
                }
            }
        }

        if (bestEntry && bestScore >= this.profile.portalIntentThreshold) {
            this.state.portalIntentActive = true;
            this.state.portalIntentTimer = this.profile.portalIntentDuration;
            this.state.portalIntentScore = bestScore;
            this.state.portalEntryDistanceSq = bestEntryDistSq;
            this._portalEntry.copy(bestEntry);
            this._portalExit.copy(bestExit);
            this._portalTarget = this._portalEntry;
            return;
        }

        this.state.portalIntentActive = false;
        this.state.portalIntentScore = 0;
        this._portalTarget = null;
    }

    _senseEnvironment(player, arena, allPlayers, projectiles) {
        const mapBehavior = this._mapBehavior(arena);
        this.sense.mapCaution = mapBehavior.caution;
        this.sense.mapPortalBias = mapBehavior.portalBias;
        this.sense.mapAggressionBias = mapBehavior.aggressionBias;

        this.sense.lookAhead = this._computeDynamicLookAhead(player);

        player.getDirection(this._tmpForward).normalize();
        this._buildBasis(this._tmpForward);

        // Phase 1: Probe-Anzahl basierend auf Schwierigkeit filtern
        const maxProbes = this.profile.probeCount || this._probes.length;

        let bestProbe = null;
        let bestRisk = Infinity;
        let forwardProbe = null;
        let opennessSum = 0;
        let opennessCount = 0;

        for (let i = 0; i < this._probes.length; i++) {
            // Probes nach Index begrenzen (EASY nutzt weniger)
            if (i >= maxProbes) break;

            const probe = this._probes[i];
            const isVertical = Math.abs(probe.pitch) > 0.001;

            if (this._isPlanarMode() && isVertical) {
                continue;
            }

            this._composeProbeDirection(this._tmpForward, this._tmpRight, this._tmpUp, probe);
            this._scoreProbe(player, arena, allPlayers, probe, this.sense.lookAhead);

            opennessSum += probe.clearance;
            opennessCount++;

            if (probe.name === 'forward') {
                forwardProbe = probe;
            }

            if (probe.risk < bestRisk) {
                bestRisk = probe.risk;
                bestProbe = probe;
            }
        }

        this.sense.bestProbe = bestProbe;
        this.sense.forwardRisk = forwardProbe ? forwardProbe.risk : 1;
        this.sense.immediateDanger = !!(forwardProbe && forwardProbe.immediateDanger);
        this.sense.localOpenness = opennessCount > 0 ? opennessSum / opennessCount : this.sense.lookAhead * 0.4;

        const nearestEnemyPressure = this._estimateEnemyPressure(player.position, player, allPlayers);
        const tightSpacePressure = 1 - Math.min(1, this.sense.localOpenness / this.sense.lookAhead);
        this.sense.pressure = Math.min(1.6, nearestEnemyPressure * 0.8 + tightSpacePressure * 0.9 + this._recentBouncePressure * 0.2);

        if (this.state.targetRefreshTimer <= 0 || !this.state.targetPlayer || !this.state.targetPlayer.alive) {
            this._selectTarget(player, allPlayers);
            this.state.targetRefreshTimer = this.profile.targetRefreshInterval;
        }

        // Phase 2: Projektile scannen
        this._senseProjectiles(player, projectiles);

        // Phase 4: Pursuit evaluieren
        this._evaluatePursuit(player);

        // Phase 5: Höhe erfassen
        this._senseHeight(player, arena);

        // Phase 6: Bot-Spacing
        this._senseBotSpacing(player, allPlayers);

        this._evaluatePortalIntent(player, arena, allPlayers);
    }

    _applyPortalSteering(player) {
        if (!this.state.portalIntentActive || !this._portalTarget) return false;

        this._tmpVec.subVectors(this._portalTarget, player.position);
        const distSq = this._tmpVec.lengthSq();

        if (distSq < 9) {
            this.state.portalIntentActive = false;
            this._portalTarget = null;
            return false;
        }

        this._tmpVec.normalize();
        player.getDirection(this._tmpForward).normalize();
        this._buildBasis(this._tmpForward);

        const yawSignal = this._tmpRight.dot(this._tmpVec);
        const pitchSignal = this._tmpUp.dot(this._tmpVec);

        this._decision.yaw = Math.abs(yawSignal) > 0.08 ? (yawSignal > 0 ? 1 : -1) : 0;
        if (!this._isPlanarMode()) {
            this._decision.pitch = Math.abs(pitchSignal) > 0.08 ? (pitchSignal > 0 ? 1 : -1) : 0;
        }

        if (distSq < 196 && this.sense.forwardRisk < 0.75) {
            this._decision.boost = true;
        }

        return true;
    }

    _decideSteering(player) {
        const best = this.sense.bestProbe;
        if (!best) {
            this._decision.yaw = Math.random() > 0.5 ? 1 : -1;
            this._decision.pitch = 0;
            return;
        }

        player.getDirection(this._tmpForward).normalize();
        this._buildBasis(this._tmpForward);

        const yawSignal = this._tmpRight.dot(best.dir);
        const pitchSignal = this._tmpUp.dot(best.dir);

        let desiredYaw = Math.abs(yawSignal) > 0.06 ? (yawSignal > 0 ? 1 : -1) : 0;
        let desiredPitch = 0;
        if (!this._isPlanarMode() && Math.abs(pitchSignal) > 0.08) {
            desiredPitch = pitchSignal > 0 ? 1 : -1;
        }

        // Phase 5: Höhenbias einmischen (leichter Pitch-Modifier)
        if (!this._isPlanarMode() && desiredPitch === 0 && Math.abs(this.sense.heightBias) > 0.15) {
            desiredPitch = this.sense.heightBias > 0 ? 1 : -1;
        }

        // Phase 6: Bot-Spacing — wenn kein starkes Probe-Signal, Abstoßung nutzen
        if (desiredYaw === 0 && this.sense.botRepulsionYaw !== 0) {
            desiredYaw = this.sense.botRepulsionYaw;
        }
        if (!this._isPlanarMode() && desiredPitch === 0 && this.sense.botRepulsionPitch !== 0) {
            desiredPitch = this.sense.botRepulsionPitch;
        }

        const opennessRatio = this.sense.lookAhead > 0
            ? this.sense.localOpenness / this.sense.lookAhead
            : 0.5;
        const commitScale = this.sense.immediateDanger
            ? 0.45
            : ((this.sense.forwardRisk > 0.72 || opennessRatio < 0.55 || this._recentBouncePressure > 1.2) ? 0.65 : 1);
        const commitDuration = Math.max(0.08, this.profile.turnCommitTime * commitScale);

        if (this.state.turnCommitTimer <= 0 || this.sense.immediateDanger) {
            this.state.committedYaw = desiredYaw;
            this.state.committedPitch = desiredPitch;
            if (desiredYaw !== 0 || desiredPitch !== 0) {
                this.state.turnCommitTimer = commitDuration;
            }
        }

        if (this.state.turnCommitTimer > 0) {
            desiredYaw = this.state.committedYaw;
            desiredPitch = this.state.committedPitch;
        }

        this._decision.yaw = desiredYaw;
        this._decision.pitch = desiredPitch;

        const aggression = this.profile.aggression + this.sense.mapAggressionBias;
        if (!this.sense.immediateDanger && this.sense.forwardRisk < 0.45) {
            if (Math.random() < this.profile.boostChance * (0.8 + Math.max(0, aggression))) {
                this._decision.boost = true;
            }
        }

        // Hard bots correct less randomly; easy bots keep subtle random drift.
        if (this._profileName === 'EASY' && Math.random() < 0.08) {
            this._decision.yaw = Math.random() > 0.5 ? 1 : -1;
        }
    }

    _decideItemUsage(player) {
        if (!player.inventory || player.inventory.length === 0) return;

        let bestUseScore = -Infinity;
        let bestUseIndex = -1;
        let bestShootScore = -Infinity;
        let bestShootIndex = -1;

        const pressure = this.sense.pressure;
        const aggression = Math.max(0, this.profile.aggression + this.sense.mapAggressionBias);
        const targetBonus = this.sense.targetInFront ? 1.1 : 0.5;

        // Phase 3: Kontextvariablen
        const crashRisk = this.sense.immediateDanger ? 1.0 : (this.sense.forwardRisk > 0.6 ? 0.5 : 0);
        const enemyClose = this.sense.targetDistanceSq < 100; // < 10 Einheiten
        const contextWeight = this.profile.itemContextWeight || 0.5;

        for (let i = 0; i < player.inventory.length; i++) {
            const type = player.inventory[i];
            const rule = ITEM_RULES[type] || { self: 0, offense: 0, defensiveScale: 0, emergencyScale: 0, combatSelf: 0 };

            // Phase 3: Erweitertes Self-Scoring mit Kontext
            const selfScore = rule.self
                + pressure * rule.defensiveScale
                + crashRisk * (rule.emergencyScale || 0) * contextWeight
                + (enemyClose ? (rule.combatSelf || 0) * contextWeight : 0);
            const shootScore = rule.offense * (0.55 + aggression) * targetBonus;

            if (selfScore > bestUseScore) {
                bestUseScore = selfScore;
                bestUseIndex = i;
            }
            if (shootScore > bestShootScore) {
                bestShootScore = shootScore;
                bestShootIndex = i;
            }
        }

        if (bestUseIndex >= 0 && bestUseScore > 0.72 && this.state.itemUseCooldown <= 0) {
            this._decision.useItem = bestUseIndex;
            this.state.itemUseCooldown = this.profile.itemUseCooldown;
            return;
        }

        if (bestShootIndex >= 0 && bestShootScore > 0.45 && this.state.itemShootCooldown <= 0) {
            this._decision.shootItem = true;
            this._decision.shootItemIndex = bestShootIndex;
            this.state.itemShootCooldown = this.profile.itemShootCooldown;
        }
    }

    _applyDecisionToInput() {
        const input = this.currentInput;
        this._resetInput(input);

        if (this._decision.yaw > 0) input.yawRight = true;
        else if (this._decision.yaw < 0) input.yawLeft = true;

        if (this._decision.pitch > 0) input.pitchUp = true;
        else if (this._decision.pitch < 0) input.pitchDown = true;

        input.boost = this._decision.boost;
        input.useItem = this._decision.useItem;
        input.shootItem = this._decision.shootItem;
        input.shootItemIndex = this._decision.shootItemIndex;

        return input;
    }

    _isLearningActive() {
        return !!(this.learningEnabled && this.learningEngine && this.learningEngine.enabled !== false);
    }

    _isPlanarMode() {
        return !!(CONFIG.GAMEPLAY.PLANAR_MODE || this.forcePlanarMode);
    }

    _canTrainLearning() {
        return !!(this._isLearningActive() && this.learningTraining);
    }

    _addLearningReward(value) {
        if (!this._isLearningActive()) return;
        if (!Number.isFinite(value)) return;
        this._learning.rewardBuffer += value;
        this._learning.roundReward += value;
    }

    _clearLearningTransition() {
        this._learning.lastStateKey = '';
        this._learning.lastActionIndex = -1;
        this._learning.rewardBuffer = 0;
    }

    _getLearningStateKey(player, arena) {
        if (!this._isLearningActive()) return '';
        return this.learningEngine.encodeState({
            player,
            sense: this.sense,
            arena,
            planarMode: this._isPlanarMode(),
        });
    }

    _getLearningAllowedActions(player) {
        if (!this._isLearningActive()) return null;
        const count = this.learningEngine.getActionCount();
        const allowed = new Array(count).fill(true);
        const planarMode = this._isPlanarMode();

        if (planarMode) {
            allowed[LEARN_ACTION_INDEX.PITCH_UP] = false;
            allowed[LEARN_ACTION_INDEX.PITCH_DOWN] = false;
        }
        const hasItems = !!(player.inventory && player.inventory.length > 0);
        if (!hasItems || this.state.itemUseCooldown > 0) {
            allowed[LEARN_ACTION_INDEX.USE_ITEM] = false;
        }
        if (!hasItems || this.state.itemShootCooldown > 0) {
            allowed[LEARN_ACTION_INDEX.SHOOT_ITEM] = false;
        }
        if (this.sense.immediateDanger || this.sense.forwardRisk > 0.82) {
            allowed[LEARN_ACTION_INDEX.USE_ITEM] = false;
        }
        return allowed;
    }

    _flushLearningTransition(nextStateKey) {
        if (!this._isLearningActive()) return;
        if (this._learning.lastActionIndex < 0 || !this._learning.lastStateKey) return;

        const reward = this._learning.rewardBuffer;
        const result = this.learningEngine.updateTransition({
            stateKey: this._learning.lastStateKey,
            actionIndex: this._learning.lastActionIndex,
            reward,
            nextStateKey,
            terminal: false,
            training: this._canTrainLearning(),
        });
        this._learning.rewardBuffer = 0;
        if (result?.updated) {
            this._learning.updateCount++;
            if (this.recorder?.recordLearningStep) {
                this.recorder.recordLearningStep(reward, result.tdError, result.epsilon, this.learningEngine.getActionName(this._learning.lastActionIndex));
            }
        }
    }

    _finalizeLearningTransition(terminal = true, reason = '') {
        if (!this._isLearningActive()) return;
        if (this._learning.lastActionIndex < 0 || !this._learning.lastStateKey) {
            this._learning.rewardBuffer = 0;
            return;
        }

        const reward = this._learning.rewardBuffer;
        const result = this.learningEngine.updateTransition({
            stateKey: this._learning.lastStateKey,
            actionIndex: this._learning.lastActionIndex,
            reward,
            nextStateKey: '',
            terminal: !!terminal,
            training: this._canTrainLearning(),
        });
        if (result?.updated && this.recorder?.recordLearningStep) {
            this.recorder.recordLearningStep(reward, result.tdError, result.epsilon, this.learningEngine.getActionName(this._learning.lastActionIndex));
        }
        if (this.recorder?.logEvent) {
            this.recorder.logEvent('LEARN_EPISODE_END', -1, `bot=${this.botId} reason=${reason || 'terminal'} reward=${reward.toFixed(3)}`);
        }
        this._clearLearningTransition();
    }

    _applyLearningAction(player, stateKey) {
        if (!this._isLearningActive() || !stateKey) return;

        const actionIndex = this.learningEngine.selectAction(stateKey, {
            training: this._canTrainLearning(),
            allowedActions: this._getLearningAllowedActions(player),
        });
        this._learning.lastStateKey = stateKey;
        this._learning.lastActionIndex = actionIndex;
        this._learning.decisionCount++;

        switch (actionIndex) {
            case LEARN_ACTION_INDEX.YAW_LEFT:
                this._decision.yaw = -1;
                break;
            case LEARN_ACTION_INDEX.YAW_RIGHT:
                this._decision.yaw = 1;
                break;
            case LEARN_ACTION_INDEX.PITCH_UP:
                if (!this._isPlanarMode()) this._decision.pitch = 1;
                break;
            case LEARN_ACTION_INDEX.PITCH_DOWN:
                if (!this._isPlanarMode()) this._decision.pitch = -1;
                break;
            case LEARN_ACTION_INDEX.BOOST:
                this._decision.boost = true;
                break;
            case LEARN_ACTION_INDEX.USE_ITEM:
                if (player.inventory && player.inventory.length > 0 && this.state.itemUseCooldown <= 0) {
                    const useIndex = Math.min(player.selectedItemIndex || 0, player.inventory.length - 1);
                    this._decision.useItem = useIndex;
                    this._decision.shootItem = false;
                    this._decision.shootItemIndex = -1;
                    this.state.itemUseCooldown = this.profile.itemUseCooldown;
                }
                break;
            case LEARN_ACTION_INDEX.SHOOT_ITEM:
                if (player.inventory && player.inventory.length > 0 && this.state.itemShootCooldown <= 0) {
                    const shootIndex = Math.min(player.selectedItemIndex || 0, player.inventory.length - 1);
                    this._decision.shootItem = true;
                    this._decision.shootItemIndex = shootIndex;
                    this._decision.useItem = -1;
                    this.state.itemShootCooldown = this.profile.itemShootCooldown;
                }
                break;
            default:
                break;
        }
    }

    update(dt, player, arena, allPlayers, projectiles) {
        const activeDifficulty = CONFIG.BOT.ACTIVE_DIFFICULTY || this._profileName;
        if (activeDifficulty !== this._profileName) {
            this._setDifficulty(activeDifficulty);
        }
        if (this._isLearningActive()) {
            this._addLearningReward((this._learningReward.survivalPerSec || 0) * dt);
        }

        this._updateTimers(dt);
        this._updateStuckState(player, arena, allPlayers);

        if (this.state.recoveryActive) {
            if (this._updateRecovery(dt, player, arena, allPlayers)) {
                return this.currentInput;
            }
        }

        if (this.reactionTimer > 0) {
            return this.currentInput;
        }

        const jitter = 1 + (Math.random() * 2 - 1) * this.profile.errorRate * 0.2;
        this.reactionTimer = Math.max(0.02, this.profile.reactionTime * jitter);

        this._resetDecision();
        this._senseEnvironment(player, arena, allPlayers, projectiles);
        const learningStateKey = this._getLearningStateKey(player, arena);
        this._flushLearningTransition(learningStateKey);

        if (this.sense.immediateDanger && this.state.recoveryCooldown <= 0 && this._recentBouncePressure > 2.3) {
            this._enterRecovery(player, arena, allPlayers, 'collision-pressure');
            if (this._updateRecovery(dt, player, arena, allPlayers)) {
                return this.currentInput;
            }
        }

        // Phase 2: Projektil-Ausweichen hat Priorität
        if (this.sense.projectileThreat && this.sense.forwardRisk < 0.6) {
            this._decision.yaw = this.sense.projectileEvadeYaw;
            this._decision.pitch = this.sense.projectileEvadePitch;
            this._decision.boost = true; // Ausweichboost
        } else {
            const portalDriven = this._applyPortalSteering(player);
            if (!portalDriven) {
                // Phase 4: Pursuit-Mode vor normalem Steering
                if (this.sense.pursuitActive) {
                    this._decision.yaw = this.sense.pursuitYaw;
                    this._decision.pitch = this.sense.pursuitPitch;
                    // Boost wenn Entfernung > 20
                    if (this.sense.targetDistanceSq > 400) {
                        this._decision.boost = true;
                    }
                    // Phase 4: Schuss bei gutem Aim
                    const aimTolerance = this.profile.pursuitAimTolerance || 0.85;
                    if (this.sense.pursuitAimDot > aimTolerance && player.inventory && player.inventory.length > 0) {
                        this._decision.shootItem = true;
                        this._decision.shootItemIndex = 0;
                        this.state.itemShootCooldown = this.profile.itemShootCooldown;
                    }
                } else {
                    this._decideSteering(player);
                }
            }
        }

        this._decideItemUsage(player);
        this._applyLearningAction(player, learningStateKey);
        return this._applyDecisionToInput();
    }
}

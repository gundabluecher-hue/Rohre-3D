// ============================================
// Bot.js - AI opponent logic
// ============================================

import * as THREE from 'three';
import { CONFIG } from './Config.js';

const WORLD_UP = new THREE.Vector3(0, 1, 0);

const MAP_BEHAVIOR = {
    standard: { caution: 0.0, portalBias: 0.0, aggressionBias: 0.0 },
    empty: { caution: -0.12, portalBias: -0.08, aggressionBias: 0.16 },
    maze: { caution: 0.22, portalBias: 0.06, aggressionBias: -0.1 },
    complex: { caution: 0.16, portalBias: 0.08, aggressionBias: -0.04 },
    pyramid: { caution: 0.08, portalBias: 0.12, aggressionBias: 0.03 },
};

const ITEM_RULES = {
    SPEED_UP: { self: 0.8, offense: 0.2, defensiveScale: 0.5 },
    SLOW_DOWN: { self: -0.8, offense: 0.9, defensiveScale: 0.1 },
    THICK: { self: 0.9, offense: 0.1, defensiveScale: 0.8 },
    THIN: { self: -0.6, offense: 0.7, defensiveScale: 0.2 },
    SHIELD: { self: 1.0, offense: 0.0, defensiveScale: 1.2 },
    SLOW_TIME: { self: 0.7, offense: 0.35, defensiveScale: 0.6 },
    GHOST: { self: 0.95, offense: 0.1, defensiveScale: 1.0 },
    INVERT: { self: -0.7, offense: 0.85, defensiveScale: 0.15 },
};

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

        this._probes = [
            createProbe('forward', 0, 0, 0),
            createProbe('left', -1.0, 0, 0.02),
            createProbe('right', 1.0, 0, 0.02),
            createProbe('leftWide', -1.8, 0, 0.07),
            createProbe('rightWide', 1.8, 0, 0.07),
            createProbe('up', 0, 0.9, 0.08),
            createProbe('down', 0, -0.9, 0.08),
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

    onBounce(type, normal = null) {
        const pressure = type === 'TRAIL' ? 1.3 : 0.9;
        this._recentBouncePressure = Math.min(4, this._recentBouncePressure + pressure);
        if (normal) {
            this._lastCollisionNormal.copy(normal).normalize();
            this._hasCollisionNormal = true;
        }
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

        const candidates = CONFIG.GAMEPLAY.PLANAR_MODE
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
            if (!CONFIG.GAMEPLAY.PLANAR_MODE && candidate.pitch !== 0) {
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

            if (!CONFIG.GAMEPLAY.PLANAR_MODE) {
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
        this.state.recoveryPitch = CONFIG.GAMEPLAY.PLANAR_MODE ? 0 : (maneuver?.pitch || 0);

        if (!CONFIG.GAMEPLAY.PLANAR_MODE) {
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
        if (!CONFIG.GAMEPLAY.PLANAR_MODE) {
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

        if (!CONFIG.GAMEPLAY.PLANAR_MODE) {
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
        if (!CONFIG.GAMEPLAY.PLANAR_MODE && pitchFactor !== 0) probe.dir.addScaledVector(up, pitchFactor);
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
        const step = this.profile.probeStep;
        let wallDist = lookAhead;
        let trailDist = lookAhead;
        let immediateDanger = false;

        for (let d = step; d <= lookAhead; d += step) {
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

        const wallRisk = 1 - Math.min(1, wallDist / lookAhead);
        const trailRisk = 1 - Math.min(1, trailDist / lookAhead);
        let risk = wallRisk * (1.1 + this.sense.mapCaution) + trailRisk * (1.45 + this.sense.mapCaution * 0.5);

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
            let entry = portal.posA;
            let exit = portal.posB;
            let distSq = player.position.distanceToSquared(entry);
            if (distSq <= seekDistSq) {
                this._tmpVec.subVectors(entry, player.position).normalize();
                let forwardDot = this._tmpVec.dot(this._tmpForward);
                if (forwardDot >= this.profile.portalEntryDotMin) {
                    let entryRisk = this._estimatePointRisk(entry, player, arena, allPlayers);
                    let exitRisk = this._estimatePointRisk(exit, player, arena, allPlayers);
                    let localRelief = this.sense.forwardRisk - exitRisk;
                    let distancePenalty = distSq / seekDistSq;
                    let score =
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

            entry = portal.posB;
            exit = portal.posA;
            distSq = player.position.distanceToSquared(entry);
            if (distSq <= seekDistSq) {
                this._tmpVec.subVectors(entry, player.position).normalize();
                let forwardDot = this._tmpVec.dot(this._tmpForward);
                if (forwardDot >= this.profile.portalEntryDotMin) {
                    let entryRisk = this._estimatePointRisk(entry, player, arena, allPlayers);
                    let exitRisk = this._estimatePointRisk(exit, player, arena, allPlayers);
                    let localRelief = this.sense.forwardRisk - exitRisk;
                    let distancePenalty = distSq / seekDistSq;
                    let score =
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

    _senseEnvironment(player, arena, allPlayers) {
        const mapBehavior = this._mapBehavior(arena);
        this.sense.mapCaution = mapBehavior.caution;
        this.sense.mapPortalBias = mapBehavior.portalBias;
        this.sense.mapAggressionBias = mapBehavior.aggressionBias;

        this.sense.lookAhead = this._computeDynamicLookAhead(player);

        player.getDirection(this._tmpForward).normalize();
        this._buildBasis(this._tmpForward);

        let bestProbe = null;
        let bestRisk = Infinity;
        let forwardProbe = null;
        let opennessSum = 0;
        let opennessCount = 0;

        for (let i = 0; i < this._probes.length; i++) {
            const probe = this._probes[i];
            const isVertical = Math.abs(probe.pitch) > 0.001;
            const isWide = Math.abs(probe.yaw) > 1.2;

            if (CONFIG.GAMEPLAY.PLANAR_MODE && isVertical) {
                continue;
            }
            if (isWide && this._profileName === 'EASY') {
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
        if (!CONFIG.GAMEPLAY.PLANAR_MODE) {
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
        if (!CONFIG.GAMEPLAY.PLANAR_MODE && Math.abs(pitchSignal) > 0.08) {
            desiredPitch = pitchSignal > 0 ? 1 : -1;
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

        for (let i = 0; i < player.inventory.length; i++) {
            const type = player.inventory[i];
            const rule = ITEM_RULES[type] || { self: 0, offense: 0, defensiveScale: 0 };

            const selfScore = rule.self + pressure * rule.defensiveScale;
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

    update(dt, player, arena, allPlayers) {
        const activeDifficulty = CONFIG.BOT.ACTIVE_DIFFICULTY || this._profileName;
        if (activeDifficulty !== this._profileName) {
            this._setDifficulty(activeDifficulty);
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
        this._senseEnvironment(player, arena, allPlayers);

        if (this.sense.immediateDanger && this.state.recoveryCooldown <= 0 && this._recentBouncePressure > 2.3) {
            this._enterRecovery(player, arena, allPlayers, 'collision-pressure');
            if (this._updateRecovery(dt, player, arena, allPlayers)) {
                return this.currentInput;
            }
        }

        const portalDriven = this._applyPortalSteering(player);
        if (!portalDriven) {
            this._decideSteering(player);
        }

        this._decideItemUsage(player);
        return this._applyDecisionToInput();
    }
}

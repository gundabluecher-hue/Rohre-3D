// ============================================
// Bot.js - KI-Gegner
// ============================================

import * as THREE from 'three';
import { CONFIG } from './Config.js';

export class BotAI {
    constructor() {
        this.reactionTimer = 0;
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
            useItem: -1,
        };
        this.avoidDirection = 0; // -1 links, 1 rechts
        this._tmpDir = new THREE.Vector3();
        this._tmpFuture = new THREE.Vector3();
        this._tmpNearFuture = new THREE.Vector3();

        // Anti-Stuck Variables
        this.stuckTimer = 0;
        this.lastPos = new THREE.Vector3();
        this.checkStuckInterval = 0.5;
        this.checkStuckTimer = 0;
        this.isStuck = false;
        this.unstuckDuration = 0;
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
        input.useItem = -1;
    }

    update(dt, player, arena, allPlayers) {
        this.reactionTimer -= dt;

        // --- Anti-Stuck Logic ---
        this.checkStuckTimer -= dt;
        if (this.checkStuckTimer <= 0) {
            this.checkStuckTimer = this.checkStuckInterval;
            const distSq = player.position.distanceToSquared(this.lastPos);
            // If moved less than 1 unit in 0.5s, likely stuck
            if (distSq < 1.0) {
                this.stuckTimer += this.checkStuckInterval;
            } else {
                this.stuckTimer = 0;
                this.isStuck = false;
            }
            this.lastPos.copy(player.position);
        }

        if (this.stuckTimer > 2.0) {
            // Stuck for > 2 seconds -> Activate Unstuck Maneuver
            this.isStuck = true;
            this.unstuckDuration = 1.0; // Try to break free for 1s
            this.stuckTimer = 0; // Reset timer to avoid immediate re-trigger
            // Pick random direction for unstuck
            this.avoidDirection = Math.random() > 0.5 ? 1 : -1;
        }

        if (this.unstuckDuration > 0) {
            this.unstuckDuration -= dt;
            // Force radical turn and boost
            const input = this.currentInput; // Mutate current input directly
            this._resetInput(input);
            input.boost = true;
            if (this.avoidDirection > 0) input.yawRight = true;
            else input.yawLeft = true;

            // Randomly pitch up or down to break 2D loops
            if (!CONFIG.GAMEPLAY.PLANAR_MODE) {
                if (Math.random() > 0.5) input.pitchUp = true;
                else input.pitchDown = true;
            }

            return input;
        }
        // ------------------------

        if (this.reactionTimer > 0) return this.currentInput;

        this.reactionTimer = CONFIG.BOT.REACTION_TIME;

        // Re-use existing object
        const input = this.currentInput;
        this._resetInput(input);

        const pos = player.position;
        const dir = player.getDirection(this._tmpDir);
        const lookAhead = CONFIG.BOT.LOOK_AHEAD;

        // Vorausschauen: Wand oder Hindernis?
        const futurePos = this._tmpFuture.copy(pos).addScaledVector(dir, lookAhead);
        const nearFuture = this._tmpNearFuture.copy(pos).addScaledVector(dir, lookAhead * 0.5);

        const willHitWall = arena.checkCollision(futurePos, 2);
        const willHitSoon = arena.checkCollision(nearFuture, 2);

        // Trails prüfen
        let willHitTrail = false;
        for (const p of allPlayers) {
            if (p === player) {
                if (p.trail.checkCollision(futurePos, 1.5, 20)) {
                    willHitTrail = true;
                    break;
                }
            } else {
                if (p.trail.checkCollision(futurePos, 1.5, 0)) {
                    willHitTrail = true;
                    break;
                }
            }
        }

        if (willHitWall || willHitTrail) {
            // Ausweichen
            if (this.avoidDirection === 0) {
                // Zufällige Richtung wählen und beibehalten
                this.avoidDirection = Math.random() > 0.5 ? 1 : -1;
            }

            if (this.avoidDirection > 0) {
                input.yawRight = true;
            } else {
                input.yawLeft = true;
            }

            // Auch nach oben/unten ausweichen wenn nötig (nur wenn nicht Planar)
            if (willHitSoon && !CONFIG.GAMEPLAY.PLANAR_MODE) {
                input.pitchUp = pos.y < arena.bounds.maxY * 0.5;
                input.pitchDown = pos.y >= arena.bounds.maxY * 0.5;
            }
        } else {
            this.avoidDirection = 0;

            // Leichte Zufallsbewegung für natürlicheres Verhalten
            if (Math.random() < 0.1) {
                if (Math.random() > 0.5) {
                    input.yawLeft = true;
                } else {
                    input.yawRight = true;
                }
            }

            // Höhenstabilisierung (nur wenn nicht im Planar Mode)
            if (!CONFIG.GAMEPLAY.PLANAR_MODE) {
                if (pos.y < 3) input.pitchUp = true;
                if (pos.y > arena.bounds.maxY - 5) input.pitchDown = true;
            }
        }

        // --- Portal Usage Logic (New) ---
        if (CONFIG.GAMEPLAY.PLANAR_MODE && arena.portalsEnabled && arena.portals.length > 0) {
            // Chance to look for a portal to switch levels
            // Higher chance if we haven't switched in a while (not tracked yet, so just random)
            if (Math.random() < 0.02) {
                // Find nearest portal in front of us
                let bestPortal = null;
                let bestDistSq = Infinity;
                const maxDistSq = 80 * 80; // Only look 80 units ahead

                for (const p of arena.portals) {
                    // Check both ends
                    const targets = [p.posA, p.posB];
                    for (const target of targets) {
                        // Is it on our level? (approx)
                        // Planar Mode levels are specific. If we are at Y=10, we want portals at Y=10.
                        if (Math.abs(target.y - pos.y) > 5) continue; // Skip portals on other levels

                        const distSq = pos.distanceToSquared(target);
                        if (distSq < maxDistSq && distSq < bestDistSq) {
                            // Check if it's in front
                            this._tmpDir.subVectors(target, pos).normalize();
                            const dot = this._tmpDir.dot(dir);
                            if (dot > 0.5) { // 60 degree cone roughly
                                bestPortal = target;
                                bestDistSq = distSq;
                            }
                        }
                    }
                }

                if (bestPortal) {
                    // Steer towards portal
                    // Calculate local direction to target
                    // Simple steering:
                    this._tmpDir.subVectors(bestPortal, pos).normalize();
                    // Cross product to determine Left/Right
                    const crossY = dir.z * this._tmpDir.x - dir.x * this._tmpDir.z;

                    if (crossY > 0.05) input.yawLeft = true;
                    if (crossY < -0.05) input.yawRight = true;

                    // Reset other inputs to focus on portal? Maybe.
                    // Let's just bias the yaw.
                }
            }
        }
        // -------------------------------

        // Item nutzen wenn vorhanden
        if (player.inventory.length > 0 && Math.random() < CONFIG.BOT.AGGRESSION * 0.05) {
            input.useItem = 0;
        }

        // Gelegentlich Item schiessen
        if (player.inventory.length > 0 && Math.random() < CONFIG.BOT.AGGRESSION * 0.02) {
            input.shootItem = true;
        }

        // Gelegentlich boosten
        if (!willHitWall && !willHitTrail && Math.random() < 0.005) {
            input.boost = true;
        }

        // Return the reused object (implied)
        return input;
    }
}

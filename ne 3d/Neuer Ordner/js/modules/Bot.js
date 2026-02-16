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

            // Auch nach oben/unten ausweichen wenn nötig
            if (willHitSoon) {
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

            // Höhenstabilisierung
            if (pos.y < 3) input.pitchUp = true;
            if (pos.y > arena.bounds.maxY - 5) input.pitchDown = true;
        }

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

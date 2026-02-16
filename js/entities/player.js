/**
 * PLAYER.JS - Spieler-Klasse
 * Verwaltet Spieler-Status, Position, Inventar, etc.
 */

import * as THREE from 'three';
import { CONFIG, PLAYER_COLORS, BASE_UP, BASE_RIGHT, BASE_FORWARD } from '../modules/Config.js';
import { generateId } from '../core/utils.js';

export class Player {
    constructor(id, color) {
        this.id = id;
        this.color = color || (id === 1 ? PLAYER_COLORS.P1 : PLAYER_COLORS.P2);
        this.alive = true;

        // === Position & Rotation ===
        this.pos = new THREE.Vector3(0, 40, 0);
        this.q = new THREE.Quaternion();

        // === Flugzeug-Mesh (wird extern erstellt und zugewiesen) ===
        this.aircraftMesh = null; // Wird von AircraftMesh befüllt

        // === Input (smoothed) ===
        this.yawTarget = 0;
        this.pitchTarget = 0;
        this.rollTarget = 0;
        this.yawInput = 0;
        this.pitchInput = 0;
        this.rollInput = 0;

        // === Lücken-System ===
        this.gapUntil = 0;
        this.nextGapAt = Infinity;

        // === Schutz-Zeiten ===
        this.safeUntil = 0;
        this.noDrawUntil = 0;

        // === Trail/Spur ===
        this.lastSegPoint = new THREE.Vector3();
        this.segments = [];
        this.trailGroup = new THREE.Group();
        this.trailMat = new THREE.MeshStandardMaterial({
            color: this.color,
            roughness: 0.35,
            metalness: 0.25,
            emissive: new THREE.Color(this.color).multiplyScalar(0.35),
            emissiveIntensity: 0.55
        });

        // === Modifikatoren ===
        this.mod = {
            speed: 1,
            thickness: 1
        };

        // === Effekte (Power-Ups) ===
        this.effects = [];
        this.invertEnd = 0;

        // === Inventar ===
        this.inventory = [];
        this.selectedSlot = 0;

        // === Boost ===
        this.boostCharge = 1;
        this.boostActive = false;
        this.boostFactor = 1;

        // === Cooldowns ===
        this.foamCooldownUntil = 0;
        this.portalCooldownUntil = 0;
        this.shotCooldownUntil = 0;

        // === Status-Flags ===
        this.shielded = false;
        this.ghostMode = false;

        // === Visuelles Schild ===
        this.shieldMesh = this.createShieldMesh();
    }

    /**
     * Erstellt das Schild-Mesh
     */
    createShieldMesh() {
        const geo = new THREE.SphereGeometry(18, 24, 24);
        const mat = new THREE.MeshStandardMaterial({
            color: 0x60a5fa,
            transparent: true,
            opacity: 0.35,
            emissive: 0x60a5fa,
            emissiveIntensity: 1.0,
            side: THREE.DoubleSide
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.visible = false;
        return mesh;
    }

    /**
     * Forward-Vektor basierend auf Quaternion
     */
    getForwardVector() {
        return BASE_FORWARD.clone().applyQuaternion(this.q).normalize();
    }

    /**
     * Right-Vektor basierend auf Quaternion
     */
    getRightVector() {
        return BASE_RIGHT.clone().applyQuaternion(this.q).normalize();
    }

    /**
     * Up-Vektor basierend auf Quaternion
     */
    getUpVector() {
        return BASE_UP.clone().applyQuaternion(this.q).normalize();
    }

    /**
     * Fügt ein Item zum Inventar hinzu
     */
    addToInventory(powerType) {
        if (this.inventory.length < CONFIG.INVENTORY_SIZE) {
            this.inventory.push({
                id: generateId('inv'),
                typeId: powerType.id,
                addedAt: performance.now()
            });
            return true;
        }
        return false;
    }

    /**
     * Entfernt ein Item aus dem Inventar
     */
    removeFromInventory(slot) {
        if (slot >= 0 && slot < this.inventory.length) {
            return this.inventory.splice(slot, 1)[0];
        }
        return null;
    }

    /**
     * Update Flugzeug-Mesh Position & Rotation
     */
    updateMesh() {
        if (this.aircraftMesh) {
            this.aircraftMesh.position.copy(this.pos);
            this.aircraftMesh.quaternion.copy(this.q);
        }

        if (this.shieldMesh) {
            this.shieldMesh.position.copy(this.pos);
        }
    }

    /**
     * Wendet einen Power-Up-Effekt an
     */
    applyEffect(powerType, duration) {
        this.effects.push({
            typeId: powerType.id,
            expiresAt: performance.now() / 1000 + duration
        });
        if (powerType.apply) {
            powerType.apply(this);
        }
    }

    /**
     * Entfernt einen Effekt
     */
    removeEffect(typeId) {
        const effect = this.effects.find(e => e.typeId === typeId);
        if (effect) {
            this.effects = this.effects.filter(e => e !== effect);
        }
    }

    /**
     * Reset für neue Runde
     */
    reset(spawnPos) {
        this.alive = true;
        this.pos.copy(spawnPos);
        this.q.identity();

        this.yawTarget = 0;
        this.pitchTarget = 0;
        this.rollTarget = 0;
        this.yawInput = 0;
        this.pitchInput = 0;
        this.rollInput = 0;

        this.gapUntil = 0;
        this.nextGapAt = Infinity;
        this.safeUntil = 0;
        this.noDrawUntil = 0;

        this.lastSegPoint.copy(this.pos);
        this.segments = [];

        this.mod.speed = 1;
        this.mod.thickness = 1;
        this.effects = [];
        this.invertEnd = 0;

        this.inventory = [];
        this.selectedSlot = 0;

        this.boostCharge = 1;
        this.boostActive = false;
        this.boostFactor = 1;

        this.foamCooldownUntil = 0;
        this.portalCooldownUntil = 0;
        this.shotCooldownUntil = 0;

        this.shielded = false;
        this.ghostMode = false;

        if (this.shieldMesh) {
            this.shieldMesh.visible = false;
        }
    }

    /**
     * Cleanup beim Entfernen
     */
    dispose() {
        // Trail-Geometrien aufräumen
        this.trailGroup.traverse(obj => {
            if (obj.geometry) obj.geometry.dispose();
        });

        // Shield aufräumen
        if (this.shieldMesh) {
            this.shieldMesh.geometry.dispose();
            this.shieldMesh.material.dispose();
        }

        // Material aufräumen
        this.trailMat.dispose();
    }
}

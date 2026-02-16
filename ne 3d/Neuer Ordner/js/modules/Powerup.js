// ============================================
// Powerup.js - Powerup-Spawning & Pickup
// ============================================

import * as THREE from 'three';
import { CONFIG } from './Config.js';

export class PowerupManager {
    constructor(renderer, arena) {
        this.renderer = renderer;
        this.arena = arena;
        this.items = []; // { mesh, type, box }
        this.spawnTimer = 0;
        this.typeKeys = Object.keys(CONFIG.POWERUP.TYPES);
        this._pickupBoxSize = new THREE.Vector3();
        this._pickupSphere = new THREE.Sphere();
    }

    update(dt) {
        this.spawnTimer += dt;

        // Neue Items spawnen
        if (this.spawnTimer >= CONFIG.POWERUP.SPAWN_INTERVAL && this.items.length < CONFIG.POWERUP.MAX_ON_FIELD) {
            this.spawnTimer = 0;
            this._spawnRandom();
        }

        // Animation
        const time = performance.now() * 0.001;
        const pickupSize = CONFIG.POWERUP.PICKUP_RADIUS * 2;
        this._pickupBoxSize.set(pickupSize, pickupSize, pickupSize);
        for (const item of this.items) {
            item.mesh.rotation.y += CONFIG.POWERUP.ROTATION_SPEED * dt;
            item.mesh.position.y = item.baseY + Math.sin(time * CONFIG.POWERUP.BOUNCE_SPEED + item.phase) * CONFIG.POWERUP.BOUNCE_HEIGHT;

            // Bounding Box aktualisieren
            item.box.setFromCenterAndSize(
                item.mesh.position,
                this._pickupBoxSize
            );
        }
    }

    _spawnRandom() {
        const type = this.typeKeys[Math.floor(Math.random() * this.typeKeys.length)];
        const config = CONFIG.POWERUP.TYPES[type];
        const pos = this.arena.getRandomPosition(8);

        // Würfel-Mesh
        const size = CONFIG.POWERUP.SIZE;
        const geo = new THREE.BoxGeometry(size, size, size);
        const mat = new THREE.MeshStandardMaterial({
            color: config.color,
            emissive: config.color,
            emissiveIntensity: 0.5,
            roughness: 0.2,
            metalness: 0.8,
            transparent: true,
            opacity: 0.85,
        });

        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.copy(pos);
        mesh.castShadow = true;

        // Wireframe-Overlay
        const wireGeo = new THREE.BoxGeometry(size * 1.15, size * 1.15, size * 1.15);
        const wireMat = new THREE.MeshBasicMaterial({
            color: config.color,
            wireframe: true,
            transparent: true,
            opacity: 0.3,
        });
        const wire = new THREE.Mesh(wireGeo, wireMat);
        mesh.add(wire);

        this.renderer.addToScene(mesh);

        const box = new THREE.Box3().setFromCenterAndSize(
            pos,
            new THREE.Vector3(CONFIG.POWERUP.PICKUP_RADIUS * 2, CONFIG.POWERUP.PICKUP_RADIUS * 2, CONFIG.POWERUP.PICKUP_RADIUS * 2)
        );

        this.items.push({
            mesh,
            type,
            box,
            baseY: pos.y,
            phase: Math.random() * Math.PI * 2,
        });
    }

    /** Prüft ob ein Spieler ein Item einsammelt */
    checkPickup(playerPosition, radius) {
        this._pickupSphere.center.copy(playerPosition);
        this._pickupSphere.radius = radius + CONFIG.POWERUP.PICKUP_RADIUS;

        for (let i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].box.intersectsSphere(this._pickupSphere)) {
                const item = this.items.splice(i, 1)[0];
                this.renderer.removeFromScene(item.mesh);
                item.mesh.geometry.dispose();
                item.mesh.material.dispose();
                return item.type;
            }
        }
        return null;
    }

    clear() {
        for (const item of this.items) {
            this.renderer.removeFromScene(item.mesh);
            item.mesh.geometry.dispose();
            item.mesh.material.dispose();
        }
        this.items = [];
        this.spawnTimer = 0;
    }
}

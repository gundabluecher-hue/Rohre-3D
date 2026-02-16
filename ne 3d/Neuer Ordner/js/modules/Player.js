// ============================================
// Player.js - Spieler-Logik (Kampfjet)
// ============================================

import * as THREE from 'three';
import { CONFIG } from './Config.js';
import { Trail } from './Trail.js';

// Shared Geometries (einmalig erstellt, von allen Spielern geteilt)
const SHARED_GEO = {};
function _ensureSharedGeo() {
    if (SHARED_GEO.body) return;
    SHARED_GEO.body = new THREE.ConeGeometry(0.35, 3.2, 8);
    SHARED_GEO.body.rotateX(Math.PI / 2);
    SHARED_GEO.cockpit = new THREE.SphereGeometry(0.28, 10, 10, 0, Math.PI * 2, 0, Math.PI / 2);
    SHARED_GEO.nozzle = new THREE.CylinderGeometry(0.2, 0.25, 0.4, 8);
    SHARED_GEO.nozzle.rotateX(Math.PI / 2);
    SHARED_GEO.flameInner = new THREE.ConeGeometry(0.15, 1.0, 8);
    SHARED_GEO.flameInner.rotateX(-Math.PI / 2);
    SHARED_GEO.flameMid = new THREE.ConeGeometry(0.22, 1.4, 8);
    SHARED_GEO.flameMid.rotateX(-Math.PI / 2);
    SHARED_GEO.flameOuter = new THREE.ConeGeometry(0.28, 1.8, 8);
    SHARED_GEO.flameOuter.rotateX(-Math.PI / 2);
    SHARED_GEO.shield = new THREE.SphereGeometry(1.5, 8, 8);
    // Flügel-Geometrien
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0); wingShape.lineTo(-1.8, 0.6); wingShape.lineTo(-0.3, 0.8); wingShape.lineTo(0, 0);
    SHARED_GEO.wingL = new THREE.ExtrudeGeometry(wingShape, { depth: 0.06, bevelEnabled: false });
    const wingShapeR = new THREE.Shape();
    wingShapeR.moveTo(0, 0); wingShapeR.lineTo(1.8, 0.6); wingShapeR.lineTo(0.3, 0.8); wingShapeR.lineTo(0, 0);
    SHARED_GEO.wingR = new THREE.ExtrudeGeometry(wingShapeR, { depth: 0.06, bevelEnabled: false });
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0); finShape.lineTo(0, 0.8); finShape.lineTo(0.4, 0.1); finShape.lineTo(0, 0);
    SHARED_GEO.fin = new THREE.ExtrudeGeometry(finShape, { depth: 0.04, bevelEnabled: false });
}

export class Player {
    constructor(renderer, index, color, isBot = false) {
        this.renderer = renderer;
        this.index = index;
        this.color = color;
        this.isBot = isBot;
        this.alive = true;
        this.score = 0;

        // Physik
        this.position = new THREE.Vector3();
        this.velocity = new THREE.Vector3(0, 0, -1);
        this.quaternion = new THREE.Quaternion();
        this.speed = CONFIG.PLAYER.SPEED;
        this.baseSpeed = CONFIG.PLAYER.SPEED;

        // Wiederverwendbare Temp-Objekte (vermeidet GC-Druck)
        this._tmpEuler = new THREE.Euler(0, 0, 0, 'YXZ');
        this._tmpEuler2 = new THREE.Euler(0, 0, 0, 'YXZ');
        this._tmpQuat = new THREE.Quaternion();
        this._tmpVec = new THREE.Vector3();
        this._tmpDir = new THREE.Vector3();

        // Boost
        this.boostTimer = 0;
        this.boostCooldown = 0;
        this.isBoosting = false;

        // Powerup-Effekte
        this.activeEffects = [];
        this.inventory = [];
        this.selectedItemIndex = 0;
        this.hasShield = false;
        this.isGhost = false;
        this.invertControls = false;
        this.invertPitchBase = false;
        this.modelScale = CONFIG.PLAYER.MODEL_SCALE || 1;
        this.cockpitCamera = false;
        this.spawnProtectionTimer = 0;

        // Kamera-Modus
        this.cameraMode = 0;

        // 3D-Modell (Kampfjet)
        this._createModel();

        // Trail
        this.trail = new Trail(renderer, color);
    }

    _createModel() {
        _ensureSharedGeo();
        this.group = new THREE.Group();

        const jetMat = new THREE.MeshStandardMaterial({
            color: this.color,
            emissive: this.color,
            emissiveIntensity: 0.2,
            roughness: 0.3,
            metalness: 0.7,
        });
        const jetMatDark = new THREE.MeshStandardMaterial({
            color: this.color,
            emissive: this.color,
            emissiveIntensity: 0.1,
            roughness: 0.4,
            metalness: 0.8,
        });

        // --- Rumpf (shared Geometry) ---
        const body = new THREE.Mesh(SHARED_GEO.body, jetMat);
        body.castShadow = false;
        this.group.add(body);

        // --- Cockpit (shared Geometry) ---
        const cockpitMat = new THREE.MeshStandardMaterial({
            color: 0x88ccff,
            emissive: 0x2266aa,
            emissiveIntensity: 0.3,
            transparent: true,
            opacity: 0.7,
            roughness: 0.1,
            metalness: 0.9,
        });
        const cockpit = new THREE.Mesh(SHARED_GEO.cockpit, cockpitMat);
        cockpit.rotation.x = -Math.PI / 2;
        cockpit.position.set(0, 0.2, -0.7);
        this.group.add(cockpit);

        // --- Delta-Flügel (shared Geometries) ---
        const wingL = new THREE.Mesh(SHARED_GEO.wingL, jetMatDark);
        wingL.position.set(0, -0.02, 0.1);
        wingL.castShadow = false;
        this.group.add(wingL);

        const wingR = new THREE.Mesh(SHARED_GEO.wingR, jetMatDark);
        wingR.position.set(0, -0.02, 0.1);
        wingR.castShadow = false;
        this.group.add(wingR);

        // --- Heckleitwerk (shared Geometry) ---
        const fin = new THREE.Mesh(SHARED_GEO.fin, jetMat);
        fin.position.set(-0.02, 0.15, 1.0);
        fin.castShadow = false;
        this.group.add(fin);

        // --- Düse (shared Geometry) ---
        const nozzleMat = new THREE.MeshStandardMaterial({
            color: 0x333333,
            roughness: 0.6,
            metalness: 0.9,
        });
        const nozzle = new THREE.Mesh(SHARED_GEO.nozzle, nozzleMat);
        nozzle.position.z = 1.5;
        this.group.add(nozzle);

        // --- Flammen-Triebwerkseffekt (shared Geometries) ---
        this.flameGroup = new THREE.Group();
        this.flameGroup.position.z = 1.9;
        this.flames = [];

        const flameInnerMat = new THREE.MeshBasicMaterial({
            color: 0xffffaa,
            transparent: true,
            opacity: 0.9,
        });
        const flameInner = new THREE.Mesh(SHARED_GEO.flameInner, flameInnerMat);
        this.flameGroup.add(flameInner);
        this.flames.push(flameInner);

        const flameMidMat = new THREE.MeshBasicMaterial({
            color: 0xff8800,
            transparent: true,
            opacity: 0.6,
        });
        const flameMid = new THREE.Mesh(SHARED_GEO.flameMid, flameMidMat);
        this.flameGroup.add(flameMid);
        this.flames.push(flameMid);

        const flameOuterMat = new THREE.MeshBasicMaterial({
            color: 0xff3300,
            transparent: true,
            opacity: 0.35,
        });
        const flameOuter = new THREE.Mesh(SHARED_GEO.flameOuter, flameOuterMat);
        this.flameGroup.add(flameOuter);
        this.flames.push(flameOuter);

        // BoostLight entfernt fuer Performance

        this.group.add(this.flameGroup);

        // --- Schild-Kugel (shared Geometry, 8 Segmente) ---
        const shieldMat = new THREE.MeshBasicMaterial({
            color: 0x4488ff,
            transparent: true,
            opacity: 0,
            wireframe: true,
        });
        this.shieldMesh = new THREE.Mesh(SHARED_GEO.shield, shieldMat);
        this.group.add(this.shieldMesh);

        this.renderer.addToScene(this.group);
        this._applyModelScale();
    }

    spawn(position, startDirection = null) {
        this.position.copy(position);
        this.alive = true;
        this.speed = this.baseSpeed;
        this.boostTimer = 0;
        this.boostCooldown = 0;
        this.isBoosting = false;
        this.activeEffects = [];
        this.hasShield = false;
        this.isGhost = false;
        this.invertControls = false;
        this.spawnProtectionTimer = CONFIG.PLAYER.SPAWN_PROTECTION || 0;
        // Planar Mode State
        this.currentPlanarY = CONFIG.PLAYER.START_Y || 5;
        this.trail.clear();
        this.trail.resetWidth();
        this.group.visible = true;

        // Zufällige Startrichtung
        if (startDirection && startDirection.lengthSq() > 0.0001) {
            this._tmpVec.copy(startDirection).normalize();
            this.quaternion.setFromUnitVectors(this._tmpDir.set(0, 0, -1), this._tmpVec);
        } else {
            const angle = Math.random() * Math.PI * 2;
            this._tmpEuler.set(0, angle, 0, 'YXZ'); this.quaternion.setFromEuler(this._tmpEuler);
        }

        this._updateModel();
    }

    update(dt, input) {
        if (!this.alive) return;
        this.spawnProtectionTimer = Math.max(0, this.spawnProtectionTimer - dt);

        // Effekte aktualisieren
        this._updateEffects(dt);

        // Steuerung
        const turnSpeed = CONFIG.PLAYER.TURN_SPEED * dt;
        const rollSpeed = CONFIG.PLAYER.ROLL_SPEED * dt;

        let pitchInput = 0;
        let yawInput = 0;
        let rollInput = 0;

        if (input) {
            pitchInput = (input.pitchUp ? 1 : 0) - (input.pitchDown ? 1 : 0);
            yawInput = (input.yawLeft ? 1 : 0) - (input.yawRight ? 1 : 0);
            rollInput = (input.rollLeft ? 1 : 0) - (input.rollRight ? 1 : 0);

            // Invertierte Steuerung?
            if (this.invertPitchBase) {
                pitchInput *= -1;
            }

            // Invertierte Steuerung durch Effekt?
            if (this.invertControls) {
                pitchInput *= -1;
                yawInput *= -1;
            }

            // Planar Mode: Ignore pitch input
            if (CONFIG.GAMEPLAY.PLANAR_MODE) {
                pitchInput = 0;
            }

            // Boost
            if (input.boost && this.boostCooldown <= 0 && !this.isBoosting) {
                this.isBoosting = true;
                this.boostTimer = CONFIG.PLAYER.BOOST_DURATION;
            }
        }

        // Rotation anwenden (wiederverwendbare Objekte)
        this._tmpEuler.set(
            pitchInput * turnSpeed,
            yawInput * turnSpeed,
            rollInput * rollSpeed,
            'YXZ'
        );
        this._tmpQuat.setFromEuler(this._tmpEuler);
        this.quaternion.multiply(this._tmpQuat);

        // Auto-Roll (Stabilisierung)
        if (CONFIG.PLAYER.AUTO_ROLL && rollInput === 0) {
            this._tmpEuler2.setFromQuaternion(this.quaternion, 'YXZ');
            this._tmpEuler2.z *= (1 - CONFIG.PLAYER.AUTO_ROLL_SPEED * dt);

            if (CONFIG.GAMEPLAY.PLANAR_MODE) {
                this._tmpEuler2.x = 0; // Strict pitch lock 
            }

            this.quaternion.setFromEuler(this._tmpEuler2);
        } else if (CONFIG.GAMEPLAY.PLANAR_MODE) {
            // Strict pitch lock even if rolling
            this._tmpEuler2.setFromQuaternion(this.quaternion, 'YXZ');
            this._tmpEuler2.x = 0;
            this.quaternion.setFromEuler(this._tmpEuler2);
        }

        // Boost-Logik
        if (this.isBoosting) {
            this.boostTimer -= dt;
            this.speed = this.baseSpeed * CONFIG.PLAYER.BOOST_MULTIPLIER;
            if (this.boostTimer <= 0) {
                this.isBoosting = false;
                this.boostCooldown = CONFIG.PLAYER.BOOST_COOLDOWN;
                this.speed = this.baseSpeed;
            }
        }
        if (this.boostCooldown > 0) {
            this.boostCooldown -= dt;
        }

        // Vorwärtsbewegung (ohne clone)
        this._tmpVec.set(0, 0, -1).applyQuaternion(this.quaternion);
        this.velocity.copy(this._tmpVec).multiplyScalar(this.speed);

        if (CONFIG.GAMEPLAY.PLANAR_MODE) {
            this.velocity.y = 0;
            // Use currentPlanarY instead of static constant
            this.position.y = this.currentPlanarY;
        }

        this.position.x += this.velocity.x * dt;
        if (!CONFIG.GAMEPLAY.PLANAR_MODE) {
            this.position.y += this.velocity.y * dt;
        }
        this.position.z += this.velocity.z * dt;

        // Trail aktualisieren
        this.trail.update(dt, this.position, this._tmpVec);

        // Modell updaten
        this._updateModel();
    }

    _updateModel() {
        this.group.position.copy(this.position);
        this.group.quaternion.copy(this.quaternion);

        const time = performance.now() * 0.001;

        // --- Flammen-Animation ---
        if (this.flames && this.flames.length > 0) {
            const boostFactor = this.isBoosting ? 3.0 : 1.0;
            const flicker = Math.sin(time * 25) * 0.15 + Math.sin(time * 37) * 0.1;

            // Innere Flamme
            const innerScale = (0.4 + flicker * 0.3) * boostFactor;
            this.flames[0].scale.set(1, 1, innerScale);
            this.flames[0].material.opacity = this.isBoosting ? 1.0 : 0.7;

            // Mittlere Flamme
            const midScale = (0.35 + flicker * 0.2) * boostFactor;
            this.flames[1].scale.set(1, 1, midScale);
            this.flames[1].material.opacity = this.isBoosting ? 0.8 : 0.45;

            // Äußere Flamme
            const outerScale = (0.3 + flicker * 0.15) * boostFactor;
            this.flames[2].scale.set(1, 1, outerScale);
            this.flames[2].material.opacity = this.isBoosting ? 0.6 : 0.2;

            // Boost-Farbwechsel
            if (this.isBoosting) {
                this.flames[0].material.color.setHex(0xffffff);
                this.flames[1].material.color.setHex(0xffaa33);
                this.flames[2].material.color.setHex(0xff4400);
            } else {
                this.flames[0].material.color.setHex(0xffffaa);
                this.flames[1].material.color.setHex(0xff8800);
                this.flames[2].material.color.setHex(0xff3300);
            }
        }

        // BoostLight entfernt

        // Schild-Visualisierung
        if (this.shieldMesh) {
            this.shieldMesh.material.opacity = this.hasShield ? 0.25 + Math.sin(time * 5) * 0.1 : 0;
        }

    }

    _updateEffects(dt) {
        for (let i = this.activeEffects.length - 1; i >= 0; i--) {
            const effect = this.activeEffects[i];
            effect.remaining -= dt;

            if (effect.remaining <= 0) {
                // Effekt beenden
                this._removeEffect(effect);
                this.activeEffects.splice(i, 1);
            }
        }
    }

    _applyModelScale() {
        if (this.group) {
            this.group.scale.setScalar(this.modelScale);
        }
    }

    setControlOptions(options = {}) {
        if (typeof options.invertPitch === 'boolean') {
            this.invertPitchBase = options.invertPitch;
        }
        if (typeof options.modelScale === 'number') {
            this.modelScale = options.modelScale;
            this._applyModelScale();
        }
        if (typeof options.cockpitCamera === 'boolean') {
            this.cockpitCamera = options.cockpitCamera;
        }
    }

    applyPowerup(type) {
        const config = CONFIG.POWERUP.TYPES[type];
        if (!config) return;

        // Vorherigen gleichen Effekt entfernen
        this.activeEffects = this.activeEffects.filter(e => {
            if (e.type === type) {
                this._removeEffect(e);
                return false;
            }
            return true;
        });

        const effect = { type, remaining: config.duration };
        this.activeEffects.push(effect);

        // Effekt anwenden
        switch (type) {
            case 'SPEED_UP':
                this.baseSpeed = CONFIG.PLAYER.SPEED * config.multiplier;
                this.speed = this.baseSpeed;
                break;
            case 'SLOW_DOWN':
                this.baseSpeed = CONFIG.PLAYER.SPEED * config.multiplier;
                this.speed = this.baseSpeed;
                break;
            case 'THICK':
                this.trail.setWidth(config.trailWidth);
                break;
            case 'THIN':
                this.trail.setWidth(config.trailWidth);
                break;
            case 'SHIELD':
                this.hasShield = true;
                break;
            case 'GHOST':
                this.isGhost = true;
                break;
            case 'INVERT':
                this.invertControls = true;
                break;
            // SLOW_TIME wird global behandelt
        }
    }

    _removeEffect(effect) {
        switch (effect.type) {
            case 'SPEED_UP':
            case 'SLOW_DOWN':
                this.baseSpeed = CONFIG.PLAYER.SPEED;
                this.speed = this.baseSpeed;
                break;
            case 'THICK':
            case 'THIN':
                this.trail.resetWidth();
                break;
            case 'SHIELD':
                this.hasShield = false;
                break;
            case 'GHOST':
                this.isGhost = false;
                break;
            case 'INVERT':
                this.invertControls = false;
                break;
        }
    }

    addToInventory(type) {
        if (this.inventory.length < CONFIG.POWERUP.MAX_INVENTORY) {
            this.inventory.push(type);
            return true;
        }
        return false;
    }

    cycleItem() {
        if (this.inventory.length > 0) {
            this.selectedItemIndex = (this.selectedItemIndex + 1) % this.inventory.length;
        } else {
            this.selectedItemIndex = 0;
        }
    }

    useItem() {
        if (this.inventory.length > 0 && this.selectedItemIndex < this.inventory.length) {
            const type = this.inventory.splice(this.selectedItemIndex, 1)[0];
            // Korrigiere Index wenn nötig
            if (this.selectedItemIndex >= this.inventory.length && this.inventory.length > 0) {
                this.selectedItemIndex = 0;
            }
            this.applyPowerup(type);
            return type;
        }
        return null;
    }

    dropItem() {
        if (this.inventory.length > 0) {
            return this.inventory.pop();
        }
        return null;
    }

    kill() {
        this.alive = false;
        this.group.visible = false;
    }

    getDirection(out = null) {
        if (out) {
            return out.set(0, 0, -1).applyQuaternion(this.quaternion);
        }
        return new THREE.Vector3(0, 0, -1).applyQuaternion(this.quaternion);
    }

    dispose() {
        this.trail.dispose();
        this.renderer.removeFromScene(this.group);
    }
}

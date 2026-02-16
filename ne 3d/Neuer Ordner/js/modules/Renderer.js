// ============================================
// Renderer.js - Three.js Rendering & Kameras
// ============================================

import * as THREE from 'three';
import { CONFIG } from './Config.js';

export class Renderer {
    constructor(canvas) {
        this.canvas = canvas;

        // WebGL Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: window.devicePixelRatio <= 1,
            alpha: false,
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, CONFIG.RENDER.MAX_PIXEL_RATIO));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this._width = window.innerWidth;
        this._height = window.innerHeight;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.BasicShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        this.renderer.setClearColor(CONFIG.COLORS.BACKGROUND);

        // Szene
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(CONFIG.COLORS.BACKGROUND, 50, 200);

        // Beleuchtung
        this._setupLights();

        // Kameras (eine pro Spieler)
        this.cameras = [];
        this.cameraTargets = []; // Smoothing-Ziele
        this.cameraModes = [];

        this.splitScreen = false;

        window.addEventListener('resize', () => this._onResize());

        // Performance: Wiederverwendbare Vektoren
        this._tmpVec = new THREE.Vector3();
        this._tmpVec2 = new THREE.Vector3();
        this._tmpLookAt = new THREE.Vector3();
    }

    _setupLights() {
        // Ambient
        const ambient = new THREE.AmbientLight(CONFIG.COLORS.AMBIENT_LIGHT, 0.8);
        this.scene.add(ambient);

        // Hauptlicht
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(30, 50, 30);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.set(CONFIG.RENDER.SHADOW_MAP_SIZE, CONFIG.RENDER.SHADOW_MAP_SIZE);
        dirLight.shadow.camera.near = 1;
        dirLight.shadow.camera.far = 150;
        dirLight.shadow.camera.left = -60;
        dirLight.shadow.camera.right = 60;
        dirLight.shadow.camera.top = 60;
        dirLight.shadow.camera.bottom = -60;
        this.scene.add(dirLight);

        // Nebenlicht
        const fillLight = new THREE.DirectionalLight(0x4466aa, 0.3);
        fillLight.position.set(-20, 30, -10);
        this.scene.add(fillLight);

        // PointLight entfernt fuer Performance
    }

    createCamera(index) {
        const cam = new THREE.PerspectiveCamera(
            CONFIG.CAMERA.FOV,
            this._getAspect(),
            CONFIG.CAMERA.NEAR,
            CONFIG.CAMERA.FAR
        );
        cam.position.set(0, 15, 20);
        this.cameras.push(cam);
        this.cameraTargets.push({
            position: new THREE.Vector3(),
            lookAt: new THREE.Vector3(),
        });
        this.cameraModes.push(0); // THIRD_PERSON
        return cam;
    }

    setSplitScreen(enabled) {
        this.splitScreen = enabled;
        this._updateCameraAspects();
    }

    cycleCamera(playerIndex) {
        if (playerIndex < this.cameraModes.length) {
            this.cameraModes[playerIndex] = (this.cameraModes[playerIndex] + 1) % CONFIG.CAMERA.MODES.length;
        }
    }

    getCameraMode(playerIndex) {
        return CONFIG.CAMERA.MODES[this.cameraModes[playerIndex] || 0];
    }

    /** Aktualisiert die Kameraposition für einen Spieler */
    updateCamera(playerIndex, playerPosition, playerDirection, dt, playerQuaternion = null, cockpitCamera = false) {
        if (playerIndex >= this.cameras.length) return;

        const cam = this.cameras[playerIndex];
        const target = this.cameraTargets[playerIndex];
        const mode = this.getCameraMode(playerIndex);
        const smooth = CONFIG.CAMERA.SMOOTHING;

        if (cockpitCamera && playerQuaternion) {
            // --- Cockpit-Modus: Horizont dreht mit dem Flugzeug ---
            if (mode === 'THIRD_PERSON') {
                // Offset (hinter + über dem Spieler) rotiert mit
                this._tmpVec.set(0, CONFIG.CAMERA.FOLLOW_HEIGHT, CONFIG.CAMERA.FOLLOW_DISTANCE);
                this._tmpVec.applyQuaternion(playerQuaternion);
                target.position.copy(playerPosition).add(this._tmpVec);
            } else if (mode === 'FIRST_PERSON') {
                target.position.copy(playerPosition);
            } else if (mode === 'TOP_DOWN') {
                this._tmpVec.set(0, 40, 5);
                this._tmpVec.applyQuaternion(playerQuaternion);
                target.position.copy(playerPosition).add(this._tmpVec);
            }

            // Smooth Position (dt-basierte Dämpfung)
            const smoothFactor = 1 - Math.pow(1 - smooth, dt * 60);
            cam.position.lerp(target.position, smoothFactor);

            // Kamera-Rotation = Spieler-Rotation (Horizont kippt mit)
            cam.quaternion.slerp(playerQuaternion, smoothFactor);
        } else {
            // --- Standard-Modus: Horizont bleibt waagerecht ---
            if (mode === 'THIRD_PERSON') {
                // behind = playerDirection * -dist
                this._tmpVec.copy(playerDirection).multiplyScalar(-CONFIG.CAMERA.FOLLOW_DISTANCE);
                // up
                this._tmpVec.y += CONFIG.CAMERA.FOLLOW_HEIGHT;
                target.position.copy(playerPosition).add(this._tmpVec);

                // LookAt
                this._tmpVec2.copy(playerDirection).multiplyScalar(CONFIG.CAMERA.LOOK_AHEAD);
                target.lookAt.copy(playerPosition).add(this._tmpVec2);
            } else if (mode === 'FIRST_PERSON') {
                target.position.copy(playerPosition);
                this._tmpVec2.copy(playerDirection).multiplyScalar(20);
                target.lookAt.copy(playerPosition).add(this._tmpVec2);
            } else if (mode === 'TOP_DOWN') {
                target.position.set(playerPosition.x, playerPosition.y + 40, playerPosition.z + 5);
                target.lookAt.copy(playerPosition);
            }

            // Smooth interpolation (dt-basierte Dämpfung)
            const smoothFactor = 1 - Math.pow(1 - smooth, dt * 60);
            cam.position.lerp(target.position, smoothFactor);

            cam.getWorldDirection(this._tmpLookAt);
            this._tmpLookAt.multiplyScalar(10).add(cam.position);
            this._tmpLookAt.lerp(target.lookAt, smoothFactor);
            cam.lookAt(this._tmpLookAt);
        }
    }

    /** Rendert die Szene */
    render() {
        const w = this._width;
        const h = this._height;

        if (this.splitScreen && this.cameras.length >= 2) {
            // Split-Screen: Linke Hälfte
            this.renderer.setViewport(0, 0, w / 2, h);
            this.renderer.setScissor(0, 0, w / 2, h);
            this.renderer.setScissorTest(true);
            this.renderer.render(this.scene, this.cameras[0]);

            // Rechte Hälfte
            this.renderer.setViewport(w / 2, 0, w / 2, h);
            this.renderer.setScissor(w / 2, 0, w / 2, h);
            this.renderer.render(this.scene, this.cameras[1]);

            this.renderer.setScissorTest(false);
        } else if (this.cameras.length > 0) {
            // Vollbild
            this.renderer.setViewport(0, 0, w, h);
            this.renderer.render(this.scene, this.cameras[0]);
        }
    }

    _getAspect() {
        if (this.splitScreen) {
            return (this._width / 2) / this._height;
        }
        return this._width / this._height;
    }

    _updateCameraAspects() {
        const aspect = this._getAspect();
        for (const cam of this.cameras) {
            cam.aspect = aspect;
            cam.updateProjectionMatrix();
        }
    }

    _onResize() {
        this._width = window.innerWidth;
        this._height = window.innerHeight;
        this.renderer.setSize(this._width, this._height);
        this._updateCameraAspects();
    }

    addToScene(obj) {
        this.scene.add(obj);
    }

    removeFromScene(obj) {
        this.scene.remove(obj);
    }

    clearScene() {
        // Entferne alles außer Lichter
        const toRemove = [];
        this.scene.traverse((child) => {
            if (!child.isLight && child !== this.scene) {
                toRemove.push(child);
            }
        });
        for (const obj of toRemove) {
            if (obj.parent === this.scene) {
                this.scene.remove(obj);
            }
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) {
                if (Array.isArray(obj.material)) {
                    obj.material.forEach(m => m.dispose());
                } else {
                    obj.material.dispose();
                }
            }
        }
        this.cameras = [];
        this.cameraTargets = [];
        this.cameraModes = [];
    }

    setQuality(quality) {
        if (quality === 'LOW') {
            this.renderer.shadowMap.enabled = false;
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 0.8)); // Reduzierte Auflösung
            this.renderer.toneMapping = THREE.NoToneMapping;
            this.scene.fog.near = 30; this.scene.fog.far = 120; // Weniger Nebel
        } else {
            this.renderer.shadowMap.enabled = true;
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, CONFIG.RENDER.MAX_PIXEL_RATIO));
            this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
            this.scene.fog.near = 50; this.scene.fog.far = 200;
        }
        // Material neu kompilieren erzwingen (nötig für Schatten-Änderung)
        this.scene.traverse((child) => {
            if (child.isMesh && child.material) {
                child.material.needsUpdate = true;
            }
        });
    }
}

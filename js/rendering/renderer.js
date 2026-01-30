/**
 * RENDERER.JS - Three.js Rendering-Setup
 * Initialisiert Scene, Renderer, Kameras, Lichter
 */

import { CONFIG } from '../core/config.js';

export class GameRenderer {
    constructor() {
        this.scene = null;
        this.renderer = null;
        this.camera = null;
        this.camera2 = null;
        this.lights = [];
    }

    /**
     * Initialisiert das Rendering-System
     */
    init() {
        // === Scene ===
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x020617, 500, 6500);
        this.scene.background = new THREE.Color(0x020617);

        // === Renderer ===
        this.renderer = new THREE.WebGLRenderer({
            antialias: CONFIG.ANTIALIAS,
            alpha: false,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.0;

        document.body.appendChild(this.renderer.domElement);

        // === Kameras ===
        this.camera = new THREE.PerspectiveCamera(
            CONFIG.CAMERA_FOV,
            window.innerWidth / window.innerHeight,
            CONFIG.CAMERA_NEAR,
            CONFIG.CAMERA_FAR
        );
        this.camera.position.set(0, 300, 600);

        this.camera2 = new THREE.PerspectiveCamera(
            CONFIG.CAMERA_FOV,
            window.innerWidth / window.innerHeight,
            CONFIG.CAMERA_NEAR,
            CONFIG.CAMERA_FAR
        );
        this.camera2.position.set(0, 300, 600);

        // === Lichter ===
        this.setupLights();

        // === Resize Handler ===
        window.addEventListener('resize', () => this.onResize());
    }

    /**
     * Lichter einrichten
     */
    setupLights() {
        // Ambient Light
        const ambient = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambient);
        this.lights.push(ambient);

        // Directional Light (Hauptlicht)
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
        dirLight.position.set(800, 1200, 400);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = CONFIG.SHADOW_MAP_SIZE;
        dirLight.shadow.mapSize.height = CONFIG.SHADOW_MAP_SIZE;
        dirLight.shadow.camera.left = -1600;
        dirLight.shadow.camera.right = 1600;
        dirLight.shadow.camera.top = 1200;
        dirLight.shadow.camera.bottom = -1200;
        dirLight.shadow.camera.near = 100;
        dirLight.shadow.camera.far = 3500;
        dirLight.shadow.bias = -0.0005;
        this.scene.add(dirLight);
        this.lights.push(dirLight);

        // Point Lights für Atmosphäre
        const pointLight1 = new THREE.PointLight(0x3b82f6, 0.6, 1800);
        pointLight1.position.set(-900, 400, -700);
        this.scene.add(pointLight1);
        this.lights.push(pointLight1);

        const pointLight2 = new THREE.PointLight(0xf59e0b, 0.5, 1600);
        pointLight2.position.set(800, 350, 800);
        this.scene.add(pointLight2);
        this.lights.push(pointLight2);

        // Hemisphere Light für weichere Schatten
        const hemiLight = new THREE.HemisphereLight(0x60a5fa, 0x1e3a5f, 0.3);
        this.scene.add(hemiLight);
        this.lights.push(hemiLight);
    }

    /**
     * Render-Loop (Single oder Split-Screen)
     */
    render(players) {
        const w = window.innerWidth;
        const h = window.innerHeight;

        if (players.length > 1) {
            // === Split-Screen (Vertical) ===
            this.renderer.setScissorTest(true);

            // Player 1 (linke Hälfte)
            this.renderer.setViewport(0, 0, w / 2, h);
            this.renderer.setScissor(0, 0, w / 2, h);
            this.camera.aspect = (w / 2) / h;
            this.camera.updateProjectionMatrix();
            this.renderer.render(this.scene, this.camera);

            // Player 2 (rechte Hälfte)
            this.renderer.setViewport(w / 2, 0, w / 2, h);
            this.renderer.setScissor(w / 2, 0, w / 2, h);
            this.camera2.aspect = (w / 2) / h;
            this.camera2.updateProjectionMatrix();
            this.renderer.render(this.scene, this.camera2);

            this.renderer.setScissorTest(false);
        } else {
            // === Single-Player ===
            this.renderer.setViewport(0, 0, w, h);
            this.camera.aspect = w / h;
            this.camera.updateProjectionMatrix();
            this.renderer.render(this.scene, this.camera);
        }
    }

    /**
     * Resize-Handler
     */
    onResize() {
        const w = window.innerWidth;
        const h = window.innerHeight;

        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();

        this.camera2.aspect = w / h;
        this.camera2.updateProjectionMatrix();

        this.renderer.setSize(w, h);
    }

    /**
     * Cleanup
     */
    dispose() {
        this.renderer.dispose();
        this.lights.forEach(light => {
            if (light.dispose) light.dispose();
        });
    }
}

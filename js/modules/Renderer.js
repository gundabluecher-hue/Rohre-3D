import * as THREE from 'three';
import { CONFIG } from './Config.js';

export class Renderer {
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x070b12, 1200, 5000);

        // Kameras
        this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 16000); // P1
        this.camera2 = new THREE.PerspectiveCamera(75, 1, 0.1, 16000); // P2

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.body.appendChild(this.renderer.domElement);

        // Licht
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.32));

        const sun = new THREE.DirectionalLight(0xffffff, 0.95);
        sun.position.set(600, 1200, 400);
        sun.castShadow = true;
        sun.shadow.camera.near = 0.5;
        sun.shadow.camera.far = 3000;
        sun.shadow.camera.left = -1500;
        sun.shadow.camera.right = 1500;
        sun.shadow.camera.top = 1500;
        sun.shadow.camera.bottom = -1500;
        sun.shadow.mapSize.width = 2048;
        sun.shadow.mapSize.height = 2048;
        this.scene.add(sun);

        // Start Resizer
        window.addEventListener("resize", () => this.onResize());
        this.onResize();
    }

    onResize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.renderer.setSize(w, h);
    }

    updateCamera(player, cam, mode) {
        if (!player || !player.alive) return;

        if (mode === "first") {
            // 1st Person: Slightly above cockpit
            // Player forward is ... derived from q.
            // Assume standard: -Z forward?
            // Helper:
            const up = player.getUpVector();
            const fwd = player.getForwardVector();

            // Pos: PlayerPos + Up * 6 + Fwd * 2
            const eyePos = player.pos.clone()
                .addScaledVector(up, 6)
                .addScaledVector(fwd, 4);

            cam.position.copy(eyePos);
            cam.quaternion.copy(player.q);

            // If the camera defaults to looking -Z, and player q aligns -Z to fwd, we are good.
            // If standard GL camera: looks down -Z.
        } else {
            // 3rd Person
            const up = player.getUpVector();
            const fwd = player.getForwardVector();

            // Behind: -Fwd * 100 + Up * 40
            const dist = 100;
            const height = 45;

            const camPos = player.pos.clone()
                .addScaledVector(fwd, -dist)
                .addScaledVector(up, height);

            cam.position.lerp(camPos, 0.1); // Smooth follow
            cam.lookAt(player.pos.clone().addScaledVector(fwd, 50));
        }
    }

    render(players) {
        // Handle split screen logic based on player count
        const p1 = players[0];
        const p2 = players[1]; // might be undefined

        const w = window.innerWidth;
        const h = window.innerHeight;

        if (p2) {
            // Split Screen
            const halfW = Math.floor(w / 2);

            // P1 Left
            this.renderer.setViewport(0, 0, halfW, h);
            this.renderer.setScissor(0, 0, halfW, h);
            this.renderer.setScissorTest(true);

            this.camera.aspect = halfW / h;
            this.camera.updateProjectionMatrix();
            this.renderer.render(this.scene, this.camera);

            // P2 Right
            this.renderer.setViewport(halfW, 0, halfW, h);
            this.renderer.setScissor(halfW, 0, halfW, h);
            this.renderer.setScissorTest(true);

            this.camera2.aspect = halfW / h;
            this.camera2.updateProjectionMatrix();
            this.renderer.render(this.scene, this.camera2);

            this.renderer.setScissorTest(false);
        } else {
            // Single
            this.renderer.setViewport(0, 0, w, h);
            this.renderer.setScissorTest(false);

            this.camera.aspect = w / h;
            this.camera.updateProjectionMatrix();
            this.renderer.render(this.scene, this.camera);
        }
    }
}

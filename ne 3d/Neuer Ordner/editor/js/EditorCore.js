import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';

export class EditorCore {
    constructor(containerId) {
        this.container = document.getElementById(containerId);

        this.keys = { w: false, a: false, s: false, d: false, q: false, e: false, shift: false };
        document.addEventListener('keydown', (e) => {
            const key = e.key.toLowerCase();
            if (this.keys.hasOwnProperty(key)) this.keys[key] = true;
            if (e.key === 'Shift') this.keys.shift = true;
        });
        document.addEventListener('keyup', (e) => {
            const key = e.key.toLowerCase();
            if (this.keys.hasOwnProperty(key)) this.keys[key] = false;
            if (e.key === 'Shift') this.keys.shift = false;
        });

        this.setupScene();
    }

    setupScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x020617);
        this.scene.fog = new THREE.Fog(0x020617, 3000, 6000);

        this.camera = new THREE.PerspectiveCamera(45, this.container.clientWidth / this.container.clientHeight, 1, 10000);
        this.camera.position.set(0, 2000, 2000);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.container.appendChild(this.renderer.domElement);

        this.orbit = new OrbitControls(this.camera, this.renderer.domElement);
        this.orbit.enableDamping = true;
        this.orbit.dampingFactor = 0.05;
        this.orbit.maxDistance = 6000;
        this.orbit.mouseButtons = {
            LEFT: THREE.MOUSE.NONE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.ROTATE
        };

        // Im Fly-Mode wollen wir nur umherblicken (Mouselook), nicht pannen
        this.orbit.listenToKeyEvents(window);

        this.transformControl = new TransformControls(this.camera, this.renderer.domElement);
        this.transformControl.addEventListener('dragging-changed', (event) => {
            const flyMode = document.getElementById("chkFly")?.checked;
            if (!flyMode) this.orbit.enabled = !event.value;
        });

        this.scene.add(this.transformControl);
        this.transformControl.setTranslationSnap(null); // default off

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
        dirLight.position.set(1000, 2000, 500);
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 2000;
        dirLight.shadow.camera.bottom = - 2000;
        dirLight.shadow.camera.left = - 2000;
        dirLight.shadow.camera.right = 2000;
        this.scene.add(dirLight);

        // Grid & Ground Area
        const gridHelper = new THREE.GridHelper(4000, 40, 0x1f2937, 0x111827);
        gridHelper.position.y = 0;
        this.scene.add(gridHelper);

        const groundGeo = new THREE.PlaneGeometry(10000, 10000);
        groundGeo.rotateX(-Math.PI / 2);
        this.groundMesh = new THREE.Mesh(groundGeo, new THREE.ShadowMaterial({ opacity: 0.2 }));
        this.groundMesh.receiveShadow = true;
        this.scene.add(this.groundMesh);

        // Y-Level Grid (for building on floors)
        this.yGridHelper = new THREE.GridHelper(4000, 40, 0x3b82f6, 0x1e3a8a);
        this.yGridHelper.position.y = 0;
        this.yGridHelper.visible = false;
        this.scene.add(this.yGridHelper);

        this.yGroundMesh = new THREE.Mesh(groundGeo, new THREE.MeshBasicMaterial({ visible: false }));
        this.yGroundMesh.position.y = 0;
        this.scene.add(this.yGroundMesh);

        // Objects container
        this.objectsContainer = new THREE.Group();
        this.scene.add(this.objectsContainer);

        // Tunnel Visuals Layer
        this.tunnelLines = new THREE.Group();
        this.scene.add(this.tunnelLines);

        // Resize
        window.addEventListener('resize', () => {
            this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        });

        this.lastTime = performance.now();
    }

    animate(time) {
        requestAnimationFrame((t) => this.animate(t));

        const dt = (time - this.lastTime) / 1000 || 0.016;
        this.lastTime = time;

        const flyMode = document.getElementById("chkFly")?.checked;
        if (flyMode) {
            const speed = (this.keys.shift ? 600 : 250) * dt;
            const dir = new THREE.Vector3();
            this.camera.getWorldDirection(dir);
            dir.normalize();

            const right = new THREE.Vector3();
            right.crossVectors(dir, this.camera.up).normalize();

            const move = new THREE.Vector3();
            if (this.keys.w) move.add(dir);
            if (this.keys.s) move.sub(dir);
            if (this.keys.d) move.add(right);
            if (this.keys.a) move.sub(right);
            if (this.keys.e) move.y += 1;
            if (this.keys.q) move.y -= 1;

            if (move.lengthSq() > 0) {
                move.normalize().multiplyScalar(speed);
                this.camera.position.add(move);
                this.orbit.target.add(move);
            }
        }

        this.orbit.update();
        this.renderer.render(this.scene, this.camera);
    }
}

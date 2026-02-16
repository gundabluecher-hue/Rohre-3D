import { CONFIG } from './Config.js';
import * as THREE from 'three';

export class Arena {
    constructor(scene) {
        this.scene = scene;
        this.walls = [];
        this.portals = [];
        this.tunnels = [];
        this.obstacles = [];

        // Groups
        this.portalGroup = new THREE.Group();
        this.scene.add(this.portalGroup);

        this.tunnelGroup = new THREE.Group();
        this.scene.add(this.tunnelGroup);

        this.obstacleGroup = new THREE.Group();
        this.scene.add(this.obstacleGroup);

        // Geometry Cache
        this.wallLRGeo = new THREE.PlaneGeometry(CONFIG.ARENA_D, CONFIG.ARENA_H);
        this.wallFBGeo = new THREE.PlaneGeometry(CONFIG.ARENA_W, CONFIG.ARENA_H);
        this.planeGeo = new THREE.PlaneGeometry(CONFIG.ARENA_W, CONFIG.ARENA_D);

        // Materials Cache
        this.hardMat = new THREE.MeshStandardMaterial({
            color: 0xf87171, roughness: 0.35, metalness: 0.25,
            emissive: new THREE.Color(0x7a1010), emissiveIntensity: 0.65
        });
        this.foamMat = new THREE.MeshStandardMaterial({
            color: 0x34d399, roughness: 0.85, metalness: 0,
            emissive: new THREE.Color(0x0b6b4f), emissiveIntensity: 0.25,
            transparent: true, opacity: 0.78
        });

        this.initTextures();
        this.buildBox();
    }

    initTextures() {
        this.arenaTex = this.makeCheckerTexture({
            cells: 12, c1: "#070d1c", c2: "#0b1630", accent: "#60a5fa", accentAlpha: 0.10
        });
        this.arenaTex.repeat.set(6, 3);

        this.floorTex = this.makeCheckerTexture({
            cells: 16, c1: "#060a16", c2: "#0a1328", accent: "#34d399", accentAlpha: 0.08
        });
        this.floorTex.repeat.set(8, 8);

        this.ceilTex = this.makeCheckerTexture({
            cells: 14, c1: "#050913", c2: "#091a2f", accent: "#a78bfa", accentAlpha: 0.08
        });
        this.ceilTex.repeat.set(7, 7);
    }

    makeCheckerTexture({ size = 512, cells = 8, c1 = "#0b1224", c2 = "#0f1c33", accent = null, accentAlpha = 0.12 } = {}) {
        const c = document.createElement("canvas");
        c.width = size; c.height = size;
        const g = c.getContext("2d");
        const cell = size / cells;

        for (let y = 0; y < cells; y++) {
            for (let x = 0; x < cells; x++) {
                g.fillStyle = (x + y) % 2 === 0 ? c1 : c2;
                g.fillRect(x * cell, y * cell, cell, cell);
                if (accent && Math.random() < 0.18) {
                    g.globalAlpha = accentAlpha;
                    g.fillStyle = accent;
                    g.fillRect(x * cell, y * cell, cell, cell);
                    g.globalAlpha = 1;
                }
            }
        }
        // Gitterlinien
        g.globalAlpha = 0.08;
        g.strokeStyle = "#ffffff";
        for (let i = 0; i <= cells; i++) {
            const p = i * cell;
            g.beginPath(); g.moveTo(p, 0); g.lineTo(p, size); g.stroke();
            g.beginPath(); g.moveTo(0, p); g.lineTo(size, p); g.stroke();
        }
        g.globalAlpha = 1;

        const tex = new THREE.CanvasTexture(c);
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = 4;
        return tex;
    }

    arenaMat() {
        return new THREE.MeshStandardMaterial({
            color: 0xffffff, map: this.arenaTex, roughness: 0.95, metalness: 0,
            side: THREE.DoubleSide, transparent: true, opacity: 1
        });
    }

    buildBox() {
        const halfW = CONFIG.ARENA_W / 2;
        const halfD = CONFIG.ARENA_D / 2;
        const wallH = CONFIG.ARENA_H;

        // Walls
        this.wallLeft = new THREE.Mesh(this.wallLRGeo, this.arenaMat());
        this.wallLeft.position.set(-halfW, wallH / 2, 0);
        this.wallLeft.rotation.y = Math.PI / 2;
        this.scene.add(this.wallLeft); this.walls.push(this.wallLeft);

        this.wallRight = new THREE.Mesh(this.wallLRGeo, this.arenaMat());
        this.wallRight.position.set(halfW, wallH / 2, 0);
        this.wallRight.rotation.y = -Math.PI / 2;
        this.scene.add(this.wallRight); this.walls.push(this.wallRight);

        this.wallFront = new THREE.Mesh(this.wallFBGeo, this.arenaMat());
        this.wallFront.position.set(0, wallH / 2, -halfD);
        this.scene.add(this.wallFront); this.walls.push(this.wallFront);

        this.wallBack = new THREE.Mesh(this.wallFBGeo, this.arenaMat());
        this.wallBack.position.set(0, wallH / 2, halfD);
        this.wallBack.rotation.y = Math.PI;
        this.scene.add(this.wallBack); this.walls.push(this.wallBack);

        // Floor / Ceiling
        this.floor = new THREE.Mesh(this.planeGeo, new THREE.MeshStandardMaterial({
            color: 0xffffff, map: this.floorTex, roughness: 0.98, metalness: 0, side: THREE.DoubleSide
        }));
        this.floor.rotation.x = -Math.PI / 2;
        this.scene.add(this.floor);

        this.ceiling = new THREE.Mesh(this.planeGeo, new THREE.MeshStandardMaterial({
            color: 0xffffff, map: this.ceilTex, roughness: 0.98, metalness: 0, side: THREE.DoubleSide
        }));
        this.ceiling.rotation.x = Math.PI / 2;
        this.ceiling.position.y = CONFIG.ARENA_H;
        this.scene.add(this.ceiling);

        // Initialization for opacity
        for (const w of this.walls) {
            w.userData.defaultOpacity = 1;
        }

        // Spawn Marker
        const spawnMarkerGeo = new THREE.ConeGeometry(30, 80, 4);
        const spawnMarkerMat = new THREE.MeshStandardMaterial({ color: 0xffff00, emissive: 0x888800 });
        this.spawnMarker = new THREE.Mesh(spawnMarkerGeo, spawnMarkerMat);
        this.spawnMarker.rotation.x = Math.PI; // Point down
        this.spawnMarker.visible = false;
        this.scene.add(this.spawnMarker);
    }

    setOuterWallsInspect(isInspect) {
        const op = isInspect ? CONFIG.WALL_INSPECT_OPACITY : 1;
        for (const w of this.walls) {
            w.material.opacity = op;
            w.material.needsUpdate = true;
        }
    }

    updateDimensions(w, h, d) {
        CONFIG.ARENA_W = w; CONFIG.ARENA_H = h; CONFIG.ARENA_D = d;
        const halfW = w / 2;
        const halfD = d / 2;
        const wallH = h;

        if (this.wallLeft) {
            this.wallLeft.position.set(-halfW, wallH / 2, 0);
            this.wallLeft.scale.set(d / 2400, h / 950, 1);
            if (this.wallLeft.material.map) this.wallLeft.material.map.repeat.set(d / 400, h / 400);
        }
        if (this.wallRight) {
            this.wallRight.position.set(halfW, wallH / 2, 0);
            this.wallRight.scale.set(d / 2400, h / 950, 1);
            if (this.wallRight.material.map) this.wallRight.material.map.repeat.set(d / 400, h / 400);
        }
        if (this.wallFront) {
            this.wallFront.position.set(0, wallH / 2, -halfD);
            this.wallFront.scale.set(w / 2800, h / 950, 1);
            if (this.wallFront.material.map) this.wallFront.material.map.repeat.set(w / 400, h / 400);
        }
        if (this.wallBack) {
            this.wallBack.position.set(0, wallH / 2, halfD);
            this.wallBack.scale.set(w / 2800, h / 950, 1);
            if (this.wallBack.material.map) this.wallBack.material.map.repeat.set(w / 400, h / 400);
        }
        if (this.floor) {
            this.floor.scale.set(w / 2800, d / 2400, 1);
            if (this.floor.material.map) this.floor.material.map.repeat.set(w / 350, d / 350);
        }
        if (this.ceiling) {
            this.ceiling.position.y = wallH;
            this.ceiling.scale.set(w / 2800, d / 2400, 1);
            if (this.ceiling.material.map) this.ceiling.material.map.repeat.set(w / 400, d / 400);
        }
    }

    // --- Portals ---

    addPortalVisual(pos, normal, radius, color) {
        const ringGeo = new THREE.RingGeometry(radius * 0.7, radius, 40);
        const ringMat = new THREE.MeshBasicMaterial({
            color, side: THREE.DoubleSide, transparent: true, opacity: 0.9
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.copy(pos.clone().addScaledVector(normal, 1.0));
        const lookTarget = pos.clone().add(normal);
        ring.lookAt(lookTarget);

        const glowGeo = new THREE.CircleGeometry(radius * 0.7, 40);
        const glowMat = new THREE.MeshBasicMaterial({
            color, transparent: true, opacity: 0.22
        });
        const glow = new THREE.Mesh(glowGeo, glowMat);
        glow.position.set(0, 0, 0.5);
        ring.add(glow);

        this.portalGroup.add(ring);
    }

    addPortalPair(posA, normalA, colorA, posB, normalB, colorB, radius) {
        const idxA = this.portals.length;
        const idxB = idxA + 1;
        this.portals.push({
            pos: posA.clone(),
            normal: normalA.clone().normalize(),
            exitDir: normalA.clone().normalize(),
            radius,
            partnerIndex: idxB
        });
        this.portals.push({
            pos: posB.clone(),
            normal: normalB.clone().normalize(),
            exitDir: normalB.clone().normalize(),
            radius,
            partnerIndex: idxA
        });

        this.addPortalVisual(posA, normalA, radius, colorA);
        this.addPortalVisual(posB, normalB, radius, colorB);
    }

    rebuildPortals() {
        // Clear old
        while (this.portalGroup.children.length) {
            const c = this.portalGroup.children.pop();
            if (c.geometry) c.geometry.dispose();
            if (c.material) c.material.dispose();
        }
        this.portals.length = 0;

        const halfW = CONFIG.ARENA_W / 2;
        const halfD = CONFIG.ARENA_D / 2;
        const wallH = CONFIG.ARENA_H;
        const portalRadius = 120; // Hardcoded or config?

        // Add new based on current dimensions
        this.addPortalPair(
            new THREE.Vector3(-halfW + 0.5, wallH * 0.52, 0),
            new THREE.Vector3(1, 0, 0), 0x22c55e,
            new THREE.Vector3(halfW - 0.5, wallH * 0.52, 0),
            new THREE.Vector3(-1, 0, 0), 0x3b82f6,
            portalRadius
        );
        this.addPortalPair(
            new THREE.Vector3(0, wallH * 0.6, -halfD + 0.5),
            new THREE.Vector3(0, 0, 1), 0xf97316,
            new THREE.Vector3(0, wallH * 0.6, halfD - 0.5),
            new THREE.Vector3(0, 0, -1), 0xa855f7,
            portalRadius
        );
    }

    // --- Tunnels ---

    clearTunnels() {
        while (this.tunnelGroup.children.length) {
            const m = this.tunnelGroup.children.pop();
            m.geometry?.dispose?.();
            const mats = Array.isArray(m.material) ? m.material : [m.material];
            for (const mm of mats) { mm.map?.dispose?.(); }
        }
        this.tunnels.length = 0;
    }

    orientMeshToDir(mesh, dir) {
        const up = new THREE.Vector3(0, 1, 0);
        mesh.quaternion.copy(new THREE.Quaternion().setFromUnitVectors(up, dir.clone().normalize()));
    }

    makeTunnelWallMat() {
        const tex = this.makeCheckerTexture({
            cells: 10, c1: "#0a1636", c2: "#183b7a", accent: "#f59e0b", accentAlpha: 0.12
        });
        tex.repeat.set(10, 2);
        return new THREE.MeshStandardMaterial({
            color: 0xffffff, map: tex, roughness: 0.25, metalness: 0.2,
            emissive: new THREE.Color(0x1b4d9a), emissiveIntensity: 1.0,
            transparent: true, opacity: 0.62, side: THREE.DoubleSide
        });
    }

    makeTunnelSafeMat() {
        const tex = this.makeCheckerTexture({
            cells: 8, c1: "#0a2a1f", c2: "#1d6b55", accent: "#bfe6ff", accentAlpha: 0.10
        });
        tex.repeat.set(8, 2);
        return new THREE.MeshStandardMaterial({
            color: 0xffffff, map: tex, roughness: 0.35, metalness: 0,
            emissive: new THREE.Color(0x4fd2ff), emissiveIntensity: 0.85,
            transparent: true, opacity: 0.50, side: THREE.DoubleSide
        });
    }

    makeBoundaryRingMat() {
        return new THREE.MeshStandardMaterial({
            color: 0xffffff, roughness: 0.2, metalness: 0.1,
            emissive: new THREE.Color(0x7dd3fc), emissiveIntensity: 1.1,
            transparent: true, opacity: 0.75
        });
    }

    addTunnel(A, B) {
        const radius = CONFIG.TUNNEL_RADIUS;
        const safeRadius = radius * CONFIG.TUNNEL_SAFE_FACTOR;

        const dir = new THREE.Vector3().subVectors(B, A);
        const len = dir.length();
        const dirN = dir.clone().normalize();
        const mid = new THREE.Vector3().addVectors(A, B).multiplyScalar(0.5);

        const tunnelId = "tunnel-" + Math.random().toString(36).slice(2, 9);

        const wallGeo = new THREE.CylinderGeometry(radius, radius, len, 40, 1, true);
        const wallMesh = new THREE.Mesh(wallGeo, this.makeTunnelWallMat());
        wallMesh.userData.tunnelId = tunnelId;
        wallMesh.position.copy(mid);
        this.orientMeshToDir(wallMesh, dirN);
        this.tunnelGroup.add(wallMesh);

        const safeGeo = new THREE.CylinderGeometry(safeRadius, safeRadius, len, 32, 1, true);
        const safeMesh = new THREE.Mesh(safeGeo, this.makeTunnelSafeMat());
        safeMesh.userData.tunnelId = tunnelId;
        safeMesh.position.copy(mid);
        this.orientMeshToDir(safeMesh, dirN);
        this.tunnelGroup.add(safeMesh);

        const ringMat = this.makeBoundaryRingMat();
        const ringCount = Math.max(5, Math.floor(len / 220));
        for (let i = 1; i < ringCount; i++) {
            const t = i / ringCount;
            const p = new THREE.Vector3().lerpVectors(A, B, t);
            const torusGeo = new THREE.TorusGeometry(safeRadius, 3.5, 10, 50);
            const ring = new THREE.Mesh(torusGeo, ringMat);
            ring.userData.tunnelId = tunnelId;
            ring.position.copy(p);
            const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dirN);
            ring.quaternion.copy(q);
            ring.rotateX(Math.PI / 2);
            this.tunnelGroup.add(ring);
        }

        this.tunnels.push({ id: tunnelId, A: A.clone(), B: B.clone(), radius, safeRadius, dirN, len });
    }

    checkTunnelCollision(pos, tmpN, tmpClosest) {
        // Assuming tmpN and tmpClosest are passed to avoid allocations, or created here
        const _tmpN = tmpN || new THREE.Vector3();
        const _tmpClosest = tmpClosest || new THREE.Vector3();
        const endFade = CONFIG.TUNNEL_END_FADE;

        for (const t of this.tunnels) {
            const AP = _tmpN.copy(pos).sub(t.A);
            const s = AP.dot(t.dirN);
            if (s < 0 || s > t.len) continue;

            const sClamped = Math.max(0, Math.min(t.len, s));
            _tmpClosest.copy(t.A).addScaledVector(t.dirN, sClamped);

            const d = _tmpClosest.distanceTo(pos);
            const influence = t.radius * CONFIG.TUNNEL_INFLUENCE_PAD;
            if (d > influence) continue;

            const fadeIn = (t.len > 0) ? Math.max(0, Math.min(1, s / endFade)) : 0;
            const fadeOut = (t.len > 0) ? Math.max(0, Math.min(1, (t.len - s) / endFade)) : 0;
            // Simplified smooth step
            const f1 = fadeIn * fadeIn * (3 - 2 * fadeIn);
            const f2 = fadeOut * fadeOut * (3 - 2 * fadeOut);
            const axialFade = Math.min(f1, f2);

            const effectiveSafe = t.safeRadius + (t.radius - t.safeRadius) * (1 - axialFade);

            if (d > effectiveSafe) return { hit: true, reason: "Tunnelwand" };
        }
        return { hit: false, reason: "" };
    }


    // --- Obstacles ---

    clearObstacles() {
        while (this.obstacleGroup.children.length) {
            const m = this.obstacleGroup.children.pop();
            m.geometry?.dispose?.();
        }
        this.obstacles.length = 0;
    }

    spawnBlock(type) {
        const rand = (min, max) => Math.random() * (max - min) + min;
        const size = rand(CONFIG.BLOCK_MIN, CONFIG.BLOCK_MAX);
        const geo = new THREE.BoxGeometry(size, size, size);
        const mesh = new THREE.Mesh(geo, type === "hard" ? this.hardMat : this.foamMat);

        const halfWm = CONFIG.ARENA_W / 2 - CONFIG.WALL_MARGIN - 140;
        const halfDm = CONFIG.ARENA_D / 2 - CONFIG.WALL_MARGIN - 140;

        mesh.position.set(
            rand(-halfWm, halfWm),
            rand(CONFIG.ARENA_H * 0.18, CONFIG.ARENA_H * 0.82),
            rand(-halfDm, halfDm)
        );
        mesh.rotation.set(rand(0, Math.PI), rand(0, Math.PI), rand(0, Math.PI));
        this.obstacleGroup.add(mesh);

        this.obstacles.push({ type, mesh, radius: size * 0.62 });
    }

    checkObstacleCollision(pos) {
        const headR = CONFIG.HEAD_RADIUS;
        for (const o of this.obstacles) {
            const c = o.mesh.position;
            const dx = pos.x - c.x, dy = pos.y - c.y, dz = pos.z - c.z;
            const rr = (o.radius + headR) ** 2;
            if (dx * dx + dy * dy + dz * dz <= rr) {
                return { hit: true, type: o.type, obstacle: o };
            }
        }
        return { hit: false };
    }

    // --- Maps ---

    buildMap(mapId) {
        this.clearTunnels();
        this.clearObstacles();
        let w = 2800, h = 950, d = 2400; // Defaults

        if (mapId === "empty_small") {
            w = 1400; h = 600; d = 1200;
            this.updateDimensions(w, h, d);
        } else if (mapId === "labyrinth") {
            w = 1600; h = 800; d = 1400;
            this.updateDimensions(w, h, d);
            this.buildLabyrinth();
        } else if (mapId === "complex") {
            this.updateDimensions(w, h, d); // default
            this.buildTunnelsComplex();
            this.buildObstaclesComplex();
        } else if (mapId === "pyramid") {
            this.updateDimensions(w, h, d); // default
            this.buildTunnelsPyramid();
            this.buildObstaclesPyramid();
        } else {
            // Basic
            this.updateDimensions(w, h, d);
            this.buildTunnelsBasic();
            this.buildObstaclesBasic();
        }

        this.rebuildPortals();
    }

    buildTunnelsBasic() {
        const y1 = CONFIG.ARENA_H * 0.55;
        const y2 = CONFIG.ARENA_H * 0.42;
        const y3 = CONFIG.ARENA_H * 0.62;

        this.addTunnel(new THREE.Vector3(-980, y1, 0), new THREE.Vector3(980, y1, 0));
        this.addTunnel(new THREE.Vector3(-520, y2, -900), new THREE.Vector3(-520, y2, 900));
        this.addTunnel(new THREE.Vector3(820, y3, -720), new THREE.Vector3(-220, y3, 720));
    }

    buildObstaclesBasic() {
        for (let i = 0; i < CONFIG.HARD_BLOCK_COUNT; i++) this.spawnBlock("hard");
        for (let i = 0; i < CONFIG.FOAM_BLOCK_COUNT; i++) this.spawnBlock("foam");
    }

    buildTunnelsComplex() {
        const yMid = CONFIG.ARENA_H * 0.55;
        const yLow = CONFIG.ARENA_H * 0.35;
        const yHigh = CONFIG.ARENA_H * 0.75;

        // GroÃŸes Kreuz im Zentrum
        this.addTunnel(new THREE.Vector3(-1200, yMid, 0), new THREE.Vector3(1200, yMid, 0));
        this.addTunnel(new THREE.Vector3(0, yMid, -900), new THREE.Vector3(0, yMid, 900));

        // Diagonaler "Main"-Tunnel
        this.addTunnel(new THREE.Vector3(-1100, yLow, -900), new THREE.Vector3(1100, yHigh, 900));

        // Vertikaler Schacht
        this.addTunnel(new THREE.Vector3(-600, yLow, 600), new THREE.Vector3(-600, yHigh + 260, 600));

        // Quadratischer Tunnel-Ring
        this.addTunnel(new THREE.Vector3(600, yLow, -600), new THREE.Vector3(900, yLow, -300));
        this.addTunnel(new THREE.Vector3(900, yLow, -300), new THREE.Vector3(900, yLow, 300));
        this.addTunnel(new THREE.Vector3(900, yLow, 300), new THREE.Vector3(600, yLow, 600));
        this.addTunnel(new THREE.Vector3(600, yLow, 600), new THREE.Vector3(600, yLow, -600));
    }

    buildObstaclesComplex() {
        const rand = (min, max) => Math.random() * (max - min) + min;
        // Hartes Ring-Muster am Boden
        const ringR = 750;
        const ringY = CONFIG.ARENA_H * 0.22;
        const ringCount = 10;
        for (let i = 0; i < ringCount; i++) {
            const angle = (i / ringCount) * Math.PI * 2;
            const x = Math.cos(angle) * ringR;
            const z = Math.sin(angle) * ringR;
            const size = rand(CONFIG.BLOCK_MIN * 1.1, CONFIG.BLOCK_MAX * 1.4);
            const geo = new THREE.BoxGeometry(size, size, size);
            const mesh = new THREE.Mesh(geo, this.hardMat);
            mesh.position.set(x, ringY, z);
            mesh.rotation.set(rand(0, Math.PI), rand(0, Math.PI), rand(0, Math.PI));
            this.obstacleGroup.add(mesh);
            this.obstacles.push({ type: "hard", mesh, radius: size * 0.6 });
        }

        // ZusÃ¤tzliche zufÃ¤llige Hindernisse
        for (let i = 0; i < CONFIG.HARD_BLOCK_COUNT + 12; i++) this.spawnBlock("hard");
        for (let i = 0; i < CONFIG.FOAM_BLOCK_COUNT + 10; i++) this.spawnBlock("foam");
    }

    buildTunnelsPyramid() {
        // Empty
    }

    buildObstaclesPyramid() {
        // Eine groÃŸe Pyramide
        const r = 450;
        const h = 700;
        const geo = new THREE.ConeGeometry(r, h, 4);
        const mesh = new THREE.Mesh(geo, this.hardMat);
        mesh.position.set(0, h * 0.35, 0);
        mesh.rotation.y = Math.PI / 4;
        this.obstacleGroup.add(mesh);
        this.obstacles.push({ type: "hard", mesh, radius: r * 0.65 });
    }

    buildLabyrinth() {
        const rand = (min, max) => Math.random() * (max - min) + min;
        const halfW = CONFIG.ARENA_W / 2;
        const halfD = CONFIG.ARENA_D / 2;
        const cols = 5;
        const rows = 5;
        const cellW = (CONFIG.ARENA_W - 200) / cols;
        const cellD = (CONFIG.ARENA_D - 200) / rows;

        for (let r = 0; r <= rows; r++) {
            for (let c = 0; c <= cols; c++) {
                if (Math.random() > 0.35) continue;

                const isHorz = Math.random() > 0.5;
                const len = isHorz ? cellW : cellD;
                const th = 60;
                const h = 400;

                const geo = new THREE.BoxGeometry(isHorz ? len : th, h, isHorz ? th : len);
                const mesh = new THREE.Mesh(geo, this.hardMat);

                const x = -halfW + 100 + c * cellW;
                const z = -halfD + 100 + r * cellD;
                const y = h / 2 + rand(0, 200);

                mesh.position.set(x, y, z);
                this.obstacleGroup.add(mesh);
                this.obstacles.push({ type: "hard", mesh, radius: Math.max(len, th) * 0.4 });
            }
        }
    }
}

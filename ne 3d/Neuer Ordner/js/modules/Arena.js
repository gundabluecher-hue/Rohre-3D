// ============================================
// Arena.js - Map-Generierung
// ============================================

import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { CONFIG } from './Config.js';

export class Arena {
    constructor(renderer) {
        this.renderer = renderer;
        this.obstacles = [];
        this.portals = [];
        this.models = [];
        this.portalsEnabled = true;
        this.bounds = { minX: 0, maxX: 0, minY: 0, maxY: 0, minZ: 0, maxZ: 0 };
        this._tmpSphere = new THREE.Sphere();  // Wiederverwendbar für Kollision
    }

    /** Baut die Arena für die gewählte Map */
    build(mapKey) {
        const map = CONFIG.MAPS[mapKey] || CONFIG.MAPS.standard;
        this.currentMapKey = mapKey;
        const scale = CONFIG.ARENA.MAP_SCALE || 1;
        const [baseSx, baseSy, baseSz] = map.size;
        const sx = baseSx * scale;
        const sy = baseSy * scale;
        const sz = baseSz * scale;
        const halfX = sx / 2;
        const halfY = sy / 2;
        const halfZ = sz / 2;

        this.bounds = {
            minX: -halfX, maxX: halfX,
            minY: 0, maxY: sy,
            minZ: -halfZ, maxZ: halfZ,
        };

        // Material
        const checkerTemplate = this._createCheckerTexture(
            CONFIG.ARENA.CHECKER_LIGHT_COLOR,
            CONFIG.ARENA.CHECKER_DARK_COLOR
        );
        const checkerWorldSize = Math.max(1, CONFIG.ARENA.CHECKER_WORLD_SIZE || 18);

        const floorTexture = checkerTemplate.clone();
        floorTexture.needsUpdate = true;
        floorTexture.repeat.set(
            Math.max(1, sx / checkerWorldSize),
            Math.max(1, sz / checkerWorldSize)
        );

        const wallTexture = checkerTemplate.clone();
        wallTexture.needsUpdate = true;
        wallTexture.repeat.set(
            Math.max(1, sx / checkerWorldSize),
            Math.max(1, sy / checkerWorldSize)
        );

        const wallMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            map: wallTexture,
            transparent: true,
            opacity: 0.9,
            roughness: 0.75,
            metalness: 0.1,
            side: THREE.DoubleSide,
        });

        const floorMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            map: floorTexture,
            roughness: 0.9,
            metalness: 0.05,
        });

        const obstacleMat = new THREE.MeshStandardMaterial({
            color: 0x2a2a4a,
            roughness: 0.4,
            metalness: 0.5,
            transparent: true,
            opacity: 0.6,
        });

        // ---- Boden ----
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(sx, sz),
            floorMat
        );
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        floor.matrixAutoUpdate = false; // Optimierung: Statisch
        floor.updateMatrix();
        this.renderer.addToScene(floor);

        // ---- Wände ----
        const t = CONFIG.ARENA.WALL_THICKNESS * scale;

        // Vorne (z+)
        this._addWall(0, halfY, halfZ + t / 2, sx + 2 * t, sy, t, wallMat);
        // Hinten (z-)
        this._addWall(0, halfY, -halfZ - t / 2, sx + 2 * t, sy, t, wallMat);
        // Links (x-)
        this._addWall(-halfX - t / 2, halfY, 0, t, sy, sz, wallMat);
        // Rechts (x+)
        this._addWall(halfX + t / 2, halfY, 0, t, sy, sz, wallMat);
        // Decke
        this._addWall(0, sy, 0, sx, t, sz, wallMat);

        // ---- Hindernisse ----
        for (const obs of map.obstacles) {
            const [px, py, pz] = obs.pos;
            const [ox, oy, oz] = obs.size;
            this._addObstacle(
                px * scale,
                py * scale,
                pz * scale,
                ox * scale,
                oy * scale,
                oz * scale,
                obstacleMat
            );
        }

        // ---- Portale ----
        this._buildPortals(map, scale);

        // ---- Models ----
        if (map.models) {
            this._loadModels(map.models, scale);
        }

        // ---- Umgebungseffekte ----
        this._addParticles(sx, sy, sz);
    }

    _loadModels(modelsConf, scale) {
        const loader = new OBJLoader();
        for (const mod of modelsConf) {
            loader.load(mod.file, (object) => {
                const material = new THREE.MeshStandardMaterial({
                    color: mod.color || 0xffffff,
                    roughness: 0.3,
                    metalness: 0.5,
                });
                object.traverse((child) => {
                    if (child.isMesh) {
                        child.material = material;
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });

                const s = (mod.scale || 1.0) * scale;
                object.scale.set(s, s, s);
                if (mod.pos) {
                    object.position.set(mod.pos[0] * scale, mod.pos[1] * scale, mod.pos[2] * scale);
                }

                this.renderer.addToScene(object);
                this.models.push(object);
            }, undefined, (error) => {
                console.error(`[Arena] Failed to load model ${mod.file}`, error);
            });
        }
    }

    _buildPortals(map, scale) {
        this.portals = [];
        if (!this.portalsEnabled) return;

        const pairCount = Math.max(0, Math.floor(CONFIG.GAMEPLAY.PORTAL_COUNT || 0));
        if (pairCount > 0) {
            this._buildFixedDynamicPortals(pairCount);
            return;
        }

        if (Array.isArray(map.portals)) {
            for (const def of map.portals) {
                this._createPortalFromDef(def, scale);
            }
        }

        // AP-04: Validierung der Portal-Abstände
        this._validatePortalPlacements();
    }

    _createPortalFromDef(def, scale) {
        const posA = this._resolvePortalPosition(
            new THREE.Vector3(def.a[0] * scale, def.a[1] * scale, def.a[2] * scale),
            11
        );
        const posB = this._resolvePortalPosition(
            new THREE.Vector3(def.b[0] * scale, def.b[1] * scale, def.b[2] * scale),
            29
        );
        const color = def.color || 0x00ffcc;
        this._addPortalInstance(posA, posB, color, 'NEUTRAL', 'NEUTRAL');
    }

    _buildFixedDynamicPortals(pairCount) {
        if (CONFIG.GAMEPLAY.PLANAR_MODE) {
            this._buildFixedPlanarPortals(pairCount);
        } else {
            this._buildFixed3DPortals(pairCount);
        }
    }

    _buildFixed3DPortals(pairCount) {
        const colors = [0x00ffcc, 0xff00cc, 0xffff00, 0x00ccff, 0xff8844, 0x66ff44];
        const slots = this._getMapPortalSlots3D();
        if (slots.length < 2) return;

        for (let i = 0; i < pairCount; i++) {
            const slotA = slots[(i * 2) % slots.length];
            const slotB = slots[(i * 2 + 5) % slots.length];
            const slotBAlt = slots[(i * 2 + 7) % slots.length];

            const posA = this._portalPositionFromSlot(slotA, i * 13 + 5);
            let posB = this._portalPositionFromSlot(slotB, i * 17 + 9);
            if (posA.distanceToSquared(posB) < 64) {
                posB = this._portalPositionFromSlot(slotBAlt, i * 23 + 3);
            }

            this._addPortalInstance(posA, posB, colors[i % colors.length], 'NEUTRAL', 'NEUTRAL');
        }
    }

    _buildFixedPlanarPortals(pairCount) {
        const colors = [0x00ffcc, 0xff00cc, 0xffff00, 0x00ccff, 0xff8844, 0x66ff44];
        const anchors = this._getMapPlanarAnchors();
        const levels = this.getPortalLevelsFallback();
        if (anchors.length === 0 || levels.length < 2) return;

        const transitionCount = levels.length - 1;
        for (let i = 0; i < pairCount; i++) {
            const anchor = anchors[i % anchors.length];
            const levelBand = (i + Math.floor(i / Math.max(1, anchors.length))) % transitionCount;
            const lowY = levels[levelBand];
            const highY = levels[levelBand + 1];
            const pair = this._resolvePlanarElevatorPair(anchor[0], anchor[1], lowY, highY, i * 29 + 7);
            if (!pair) continue;

            this._addPortalInstance(pair.low, pair.high, colors[i % colors.length], 'UP', 'DOWN');
        }
    }

    _getMapPortalSlots3D() {
        const layouts = {
            standard: [
                [-0.75, 0.18, -0.75], [0.75, 0.18, 0.75], [0.75, 0.35, -0.75], [-0.75, 0.35, 0.75],
                [-0.2, 0.52, -0.82], [0.2, 0.52, 0.82], [-0.82, 0.62, 0.2], [0.82, 0.62, -0.2],
                [0, 0.26, -0.35], [0, 0.58, 0.35], [-0.45, 0.72, 0], [0.45, 0.72, 0],
            ],
            empty: [
                [-0.78, 0.2, -0.78], [0.78, 0.2, 0.78], [0.78, 0.2, -0.78], [-0.78, 0.2, 0.78],
                [0, 0.45, -0.82], [0, 0.45, 0.82], [-0.82, 0.45, 0], [0.82, 0.45, 0],
                [-0.35, 0.72, -0.35], [0.35, 0.72, 0.35], [0.35, 0.72, -0.35], [-0.35, 0.72, 0.35],
            ],
            maze: [
                [-0.8, 0.22, -0.6], [0.8, 0.22, 0.6], [-0.8, 0.22, 0.6], [0.8, 0.22, -0.6],
                [-0.25, 0.5, -0.8], [0.25, 0.5, 0.8], [-0.6, 0.62, 0], [0.6, 0.62, 0],
                [0, 0.35, -0.2], [0, 0.35, 0.2], [-0.4, 0.75, -0.35], [0.4, 0.75, 0.35],
            ],
            complex: [
                [-0.82, 0.2, -0.82], [0.82, 0.2, 0.82], [0.82, 0.2, -0.82], [-0.82, 0.2, 0.82],
                [-0.5, 0.42, -0.1], [0.5, 0.42, 0.1], [-0.1, 0.55, 0.5], [0.1, 0.55, -0.5],
                [0, 0.72, -0.72], [0, 0.72, 0.72], [-0.72, 0.72, 0], [0.72, 0.72, 0],
            ],
            pyramid: [
                [-0.78, 0.18, -0.78], [0.78, 0.18, 0.78], [0.78, 0.18, -0.78], [-0.78, 0.18, 0.78],
                [-0.45, 0.38, -0.45], [0.45, 0.38, 0.45], [0, 0.58, -0.78], [0, 0.58, 0.78],
                [-0.78, 0.58, 0], [0.78, 0.58, 0], [-0.2, 0.78, 0], [0.2, 0.78, 0],
            ],
        };
        return layouts[this.currentMapKey] || layouts.standard;
    }

    _getMapPlanarAnchors() {
        const anchors = {
            standard: [[-0.7, -0.7], [0.7, -0.7], [0.7, 0.7], [-0.7, 0.7], [0, -0.45], [0, 0.45], [-0.45, 0], [0.45, 0]],
            empty: [[-0.75, -0.75], [0.75, -0.75], [0.75, 0.75], [-0.75, 0.75], [0, -0.55], [0, 0.55], [-0.55, 0], [0.55, 0]],
            maze: [[-0.78, -0.62], [0.78, -0.62], [0.78, 0.62], [-0.78, 0.62], [0, -0.72], [0, 0.72], [-0.52, 0], [0.52, 0]],
            complex: [[-0.82, -0.82], [0.82, -0.82], [0.82, 0.82], [-0.82, 0.82], [-0.55, 0], [0.55, 0], [0, -0.55], [0, 0.55]],
            pyramid: [[-0.78, -0.78], [0.78, -0.78], [0.78, 0.78], [-0.78, 0.78], [-0.48, 0], [0.48, 0], [0, -0.48], [0, 0.48]],
        };
        return anchors[this.currentMapKey] || anchors.standard;
    }

    _portalPositionFromSlot(slot, seed) {
        const b = this.bounds;
        const margin = CONFIG.PORTAL.RING_SIZE + 2.5;
        const nx = (slot[0] + 1) * 0.5;
        const ny = slot[1];
        const nz = (slot[2] + 1) * 0.5;
        const pos = new THREE.Vector3(
            b.minX + margin + nx * (b.maxX - b.minX - 2 * margin),
            b.minY + margin + ny * (b.maxY - b.minY - 2 * margin),
            b.minZ + margin + nz * (b.maxZ - b.minZ - 2 * margin)
        );
        return this._resolvePortalPosition(pos, seed);
    }

    _portalPositionFromXZLevel(nx, nz, levelY, seed) {
        const b = this.bounds;
        const margin = CONFIG.PORTAL.RING_SIZE + 2.5;
        const pos = new THREE.Vector3(
            b.minX + margin + (nx + 1) * 0.5 * (b.maxX - b.minX - 2 * margin),
            levelY,
            b.minZ + margin + (nz + 1) * 0.5 * (b.maxZ - b.minZ - 2 * margin)
        );
        return this._resolvePortalPosition(pos, seed);
    }

    _resolvePlanarElevatorPair(nx, nz, yLow, yHigh, seed = 0) {
        const lowY = Math.min(yLow, yHigh);
        const highY = Math.max(yLow, yHigh);
        const b = this.bounds;
        const margin = CONFIG.PORTAL.RING_SIZE + 2.5;
        const testRadius = CONFIG.PORTAL.RADIUS * 0.75;

        const baseX = b.minX + margin + (nx + 1) * 0.5 * (b.maxX - b.minX - 2 * margin);
        const baseZ = b.minZ + margin + (nz + 1) * 0.5 * (b.maxZ - b.minZ - 2 * margin);

        const lowProbe = new THREE.Vector3();
        const highProbe = new THREE.Vector3();
        for (let i = 0; i < 28; i++) {
            const angle = (((seed + i * 41) % 360) * Math.PI) / 180;
            const dist = i === 0 ? 0 : 2.2 + (i - 1) * 1.2;
            const x = Math.max(b.minX + margin, Math.min(b.maxX - margin, baseX + Math.cos(angle) * dist));
            const z = Math.max(b.minZ + margin, Math.min(b.maxZ - margin, baseZ + Math.sin(angle) * dist));

            lowProbe.set(x, lowY, z);
            highProbe.set(x, highY, z);
            if (!this.checkCollision(lowProbe, testRadius) && !this.checkCollision(highProbe, testRadius)) {
                return {
                    low: lowProbe.clone(),
                    high: highProbe.clone(),
                };
            }
        }

        const lowFallback = this._resolvePortalPosition(new THREE.Vector3(baseX, lowY, baseZ), seed);
        const highAtLowXZ = new THREE.Vector3(lowFallback.x, highY, lowFallback.z);
        if (!this.checkCollision(highAtLowXZ, testRadius)) {
            return {
                low: lowFallback,
                high: highAtLowXZ,
            };
        }

        const highFallback = this._resolvePortalPosition(new THREE.Vector3(baseX, highY, baseZ), seed + 17);
        const lowAtHighXZ = new THREE.Vector3(highFallback.x, lowY, highFallback.z);
        if (!this.checkCollision(lowAtHighXZ, testRadius)) {
            return {
                low: lowAtHighXZ,
                high: highFallback,
            };
        }

        return null;
    }

    _resolvePortalPosition(pos, seed = 0) {
        const b = this.bounds;
        const margin = CONFIG.PORTAL.RING_SIZE + 2.5;
        const testRadius = CONFIG.PORTAL.RADIUS * 0.75;
        if (!this.checkCollision(pos, testRadius)) {
            return pos;
        }

        const probe = new THREE.Vector3();
        for (let i = 0; i < 20; i++) {
            const angle = (((seed + i * 37) % 360) * Math.PI) / 180;
            const dist = 2.5 + i * 1.3;
            const yShift = ((i % 5) - 2) * 1.1;
            probe.set(
                pos.x + Math.cos(angle) * dist,
                pos.y + yShift,
                pos.z + Math.sin(angle) * dist
            );

            probe.x = Math.max(b.minX + margin, Math.min(b.maxX - margin, probe.x));
            probe.y = Math.max(b.minY + margin, Math.min(b.maxY - margin, probe.y));
            probe.z = Math.max(b.minZ + margin, Math.min(b.maxZ - margin, probe.z));

            if (!this.checkCollision(probe, testRadius)) {
                return probe.clone();
            }
        }

        return pos;
    }

    _addPortalInstance(posA, posB, color, dirA = 'NEUTRAL', dirB = 'NEUTRAL') {
        const meshA = this._createPortalMesh(posA, color, dirA);
        const meshB = this._createPortalMesh(posB, color, dirB);

        this.portals.push({
            posA, posB,
            meshA, meshB,
            color,
            cooldowns: new Map(),
        });
    }

    _createPortalMesh(position, color, direction = 'NEUTRAL') {
        const group = new THREE.Group();
        const ringSize = CONFIG.PORTAL.RING_SIZE;

        // Override color based on direction if specified
        // Green for UP, Red for DOWN, specified color for NEUTRAL
        let displayColor = color;
        if (direction === 'UP') displayColor = 0x00ff00;
        if (direction === 'DOWN') displayColor = 0xff0000;

        // Äußerer Ring (Torus)
        const torusGeo = new THREE.TorusGeometry(ringSize, 0.3, 16, 32);
        const torusMat = new THREE.MeshStandardMaterial({
            color: displayColor,
            emissive: displayColor,
            emissiveIntensity: 1.2,
            roughness: 0.2,
            metalness: 0.8,
        });
        const torus = new THREE.Mesh(torusGeo, torusMat);
        group.add(torus);

        // Innerer Glow (halbtransparente Scheibe)
        const discGeo = new THREE.CircleGeometry(ringSize * 0.85, 32);
        const discMat = new THREE.MeshBasicMaterial({
            color: displayColor,
            transparent: true,
            opacity: 0.15,
            side: THREE.DoubleSide,
        });
        const disc = new THREE.Mesh(discGeo, discMat);
        group.add(disc);

        // Zweiter innerer Ring für Tiefe
        const innerTorusGeo = new THREE.TorusGeometry(ringSize * 0.6, 0.15, 12, 24);
        const innerTorusMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            emissive: displayColor,
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.6,
        });
        const innerTorus = new THREE.Mesh(innerTorusGeo, innerTorusMat);
        group.add(innerTorus);

        // DIRECTION ARROW
        if (direction !== 'NEUTRAL') {
            const arrowGeo = new THREE.ConeGeometry(0.8, 2.5, 8);
            const arrowMat = new THREE.MeshBasicMaterial({
                color: displayColor,
                transparent: true,
                opacity: 0.8,
            });
            const arrow = new THREE.Mesh(arrowGeo, arrowMat);

            // Default Cone points UP (Y+)
            if (direction === 'UP') {
                // Point Up
                arrow.position.y = 0;
            } else if (direction === 'DOWN') {
                // Point Down
                arrow.rotation.x = Math.PI;
                arrow.position.y = 0;
            }

            group.add(arrow);

            // Animation helper
            group.userData.arrow = arrow;
            group.userData.direction = direction;
        }

        group.position.copy(position);
        this.renderer.addToScene(group);

        return group;
    }

    toggleBeams() {
        // Beams intentionally removed: portal pairing is only shown via color and position.
    }

    /** Prüft ob eine Position ein Portal berührt, gibt Zielposition zurück oder null */
    checkPortal(position, radius, entityId) {
        if (!this.portalsEnabled) return null;

        const triggerRadius = CONFIG.PORTAL.RADIUS;
        const triggerRadiusSq = (triggerRadius + radius) * (triggerRadius + radius);

        for (const portal of this.portals) {
            // Cooldown prüfen
            if (portal.cooldowns.has(entityId) && portal.cooldowns.get(entityId) > 0) {
                continue;
            }

            const distASq = position.distanceToSquared(portal.posA);
            const distBSq = position.distanceToSquared(portal.posB);

            if (distASq < triggerRadiusSq) {
                // Teleport zu B
                const dist = portal.posA.distanceTo(portal.posB);
                const dynamicCooldown = Math.max(CONFIG.PORTAL.COOLDOWN, dist / 80);
                portal.cooldowns.set(entityId, dynamicCooldown);
                return { target: portal.posB, portal };
            }
            if (distBSq < triggerRadiusSq) {
                // Teleport zu A
                const dist = portal.posA.distanceTo(portal.posB);
                const dynamicCooldown = Math.max(CONFIG.PORTAL.COOLDOWN, dist / 80);
                portal.cooldowns.set(entityId, dynamicCooldown);
                return { target: portal.posA, portal };
            }
        }

        return null;
    }

    _createCheckerTexture(lightColor, darkColor) {
        const size = 128;
        const half = size / 2;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;

        const ctx = canvas.getContext('2d');
        const light = `#${lightColor.toString(16).padStart(6, '0')}`;
        const dark = `#${darkColor.toString(16).padStart(6, '0')}`;

        ctx.fillStyle = light;
        ctx.fillRect(0, 0, half, half);
        ctx.fillRect(half, half, half, half);

        ctx.fillStyle = dark;
        ctx.fillRect(half, 0, half, half);
        ctx.fillRect(0, half, half, half);

        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestMipmapLinearFilter;
        return texture;
    }

    _addWall(x, y, z, w, h, d, material) {
        const geo = new THREE.BoxGeometry(w, h, d);
        const mesh = new THREE.Mesh(geo, material);
        mesh.position.set(x, y, z);
        mesh.matrixAutoUpdate = false; // Optimierung
        mesh.updateMatrix();
        this.renderer.addToScene(mesh);

        const box = new THREE.Box3().setFromObject(mesh);
        this.obstacles.push({ mesh, box, isWall: true });
    }

    _addObstacle(x, y, z, w, h, d, material) {
        const geo = new THREE.BoxGeometry(w, h, d);

        // Kanten sichtbar machen
        const edges = new THREE.EdgesGeometry(geo);
        const lineMat = new THREE.LineBasicMaterial({ color: 0x4466aa, transparent: true, opacity: 0.5 });

        const mesh = new THREE.Mesh(geo, material.clone());
        mesh.position.set(x, y, z);
        mesh.castShadow = false;
        mesh.receiveShadow = false;
        mesh.matrixAutoUpdate = false; // Optimierung
        mesh.updateMatrix();
        this.renderer.addToScene(mesh);

        const line = new THREE.LineSegments(edges, lineMat);
        line.position.copy(mesh.position);
        line.matrixAutoUpdate = false; // Optimierung
        line.updateMatrix();
        this.renderer.addToScene(line);

        const box = new THREE.Box3().setFromObject(mesh);
        this.obstacles.push({ mesh, box, isWall: false });
    }

    _addParticles(sx, sy, sz) {
        // Schwebende Partikel für Atmosphäre
        const count = 200;
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * sx;
            positions[i * 3 + 1] = Math.random() * sy;
            positions[i * 3 + 2] = (Math.random() - 0.5) * sz;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const mat = new THREE.PointsMaterial({
            color: 0x4488ff,
            size: 0.15,
            transparent: true,
            opacity: 0.4,
            sizeAttenuation: true,
            sizeAttenuation: true, // Fixed redundant property in original? No, it's ok.
        });

        this.particles = new THREE.Points(geo, mat);
        this.renderer.addToScene(this.particles);
    }

    /** Prüft Kollision eines Punktes mit Arena-Grenzen und Hindernissen */
    checkCollision(position, radius) {
        const b = this.bounds;

        // Grenzen-Check
        if (position.x - radius < b.minX || position.x + radius > b.maxX ||
            position.y - radius < b.minY || position.y + radius > b.maxY ||
            position.z - radius < b.minZ || position.z + radius > b.maxZ) {
            return true;
        }

        // Hindernis-Check (wiederverwendbare Sphere)
        this._tmpSphere.center.copy(position);
        this._tmpSphere.radius = radius;
        for (const obs of this.obstacles) {
            if (obs.box.intersectsSphere(this._tmpSphere)) {
                return true;
            }
        }

        return false;
    }

    /** Gibt eine zufällige freie Position in der Arena zurück */
    getRandomPosition(margin = 5) {
        const b = this.bounds;
        for (let attempts = 0; attempts < 50; attempts++) {
            const x = b.minX + margin + Math.random() * (b.maxX - b.minX - 2 * margin);
            const y = 3 + Math.random() * (b.maxY - 6);
            const z = b.minZ + margin + Math.random() * (b.maxZ - b.minZ - 2 * margin);
            const pos = new THREE.Vector3(x, y, z);

            if (!this.checkCollision(pos, 3)) {
                return pos;
            }
        }
        return new THREE.Vector3(0, CONFIG.PLAYER.START_Y, 0);
    }

    getRandomPositionOnLevel(level, margin = 5) {
        const b = this.bounds;
        const clampedY = Math.max(b.minY + 3, Math.min(b.maxY - 3, level));
        for (let attempts = 0; attempts < 50; attempts++) {
            const x = b.minX + margin + Math.random() * (b.maxX - b.minX - 2 * margin);
            const z = b.minZ + margin + Math.random() * (b.maxZ - b.minZ - 2 * margin);
            const pos = new THREE.Vector3(x, clampedY, z);

            if (!this.checkCollision(pos, 3)) {
                return pos;
            }
        }
        return new THREE.Vector3(0, clampedY, 0);
    }

    getPortalLevelsFallback() {
        const b = this.bounds;
        const span = Math.max(1, b.maxY - b.minY);
        const levelCount = Math.max(2, Math.floor(CONFIG.GAMEPLAY.PLANAR_LEVEL_COUNT || 5));
        const minRatio = 0.18;
        const maxRatio = 0.82;
        const levels = [];

        for (let i = 0; i < levelCount; i++) {
            const t = levelCount <= 1 ? 0.5 : i / (levelCount - 1);
            const ratio = minRatio + (maxRatio - minRatio) * t;
            levels.push(b.minY + span * ratio);
        }

        return levels;
    }

    getPortalLevels() {
        const levels = [];
        const epsilon = 0.35;

        for (const portal of this.portals) {
            for (const y of [portal.posA.y, portal.posB.y]) {
                let exists = false;
                for (const value of levels) {
                    if (Math.abs(value - y) <= epsilon) {
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    levels.push(y);
                }
            }
        }

        if (levels.length === 0) {
            return this.getPortalLevelsFallback();
        }
        levels.sort((a, b) => a - b);
        return levels;
    }

    update(dt) {
        // Partikel leicht bewegen
        if (this.particles) {
            this.particles.rotation.y += dt * 0.02;
        }

        // Portale animieren
        const rotSpeed = CONFIG.PORTAL.ROTATION_SPEED;
        for (const portal of this.portals) {
            // Ringe rotieren
            if (portal.meshA) {
                portal.meshA.rotation.z += dt * rotSpeed;
                portal.meshA.rotation.y += dt * rotSpeed * 0.3;
            }
            if (portal.meshB) {
                portal.meshB.rotation.z -= dt * rotSpeed;
                portal.meshB.rotation.y -= dt * rotSpeed * 0.3;
            }

            // Cooldowns runterzählen (sichere Iteration)
            const toDelete = [];
            for (const [id, time] of portal.cooldowns) {
                const remaining = time - dt;
                if (remaining <= 0) {
                    toDelete.push(id);
                } else {
                    portal.cooldowns.set(id, remaining);
                }
            }
            for (let k = 0; k < toDelete.length; k++) {
                portal.cooldowns.delete(toDelete[k]);
            }
        }
    }

    _validatePortalPlacements() {
        if (!this.portals || this.portals.length === 0) return;

        const minPairDistance = CONFIG.GAMEPLAY.PLANAR_MODE
            ? (CONFIG.PORTAL.MIN_PAIR_DISTANCE_PLANAR || CONFIG.PORTAL.MIN_PAIR_DISTANCE || 15)
            : (CONFIG.PORTAL.MIN_PAIR_DISTANCE || 15);
        const minDistSq = minPairDistance * minPairDistance;
        for (let i = this.portals.length - 1; i >= 0; i--) {
            const p = this.portals[i];
            if (p.posA.distanceToSquared(p.posB) < minDistSq) {
                console.warn(`[Arena] Portal pair ${i} too close together! Removing.`);
                this.portals.splice(i, 1);
            }
        }
    }
}

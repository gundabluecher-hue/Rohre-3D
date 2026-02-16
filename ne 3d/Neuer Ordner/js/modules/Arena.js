// ============================================
// Arena.js - Map-Generierung
// ============================================

import * as THREE from 'three';
import { CONFIG } from './Config.js';

export class Arena {
    constructor(renderer) {
        this.renderer = renderer;
        this.obstacles = [];
        this.portals = [];
        this.portalsEnabled = true;
        this.bounds = { minX: 0, maxX: 0, minY: 0, maxY: 0, minZ: 0, maxZ: 0 };
        this._tmpSphere = new THREE.Sphere();  // Wiederverwendbar für Kollision
    }

    /** Baut die Arena für die gewählte Map */
    build(mapKey) {
        const map = CONFIG.MAPS[mapKey] || CONFIG.MAPS.standard;
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

        // ---- Umgebungseffekte ----
        this._addParticles(sx, sy, sz);
    }

    _buildPortals(map, scale) {
        this.portals = [];
        if (!this.portalsEnabled) return;

        // Dynamic Portals override map portals if count > 0
        const dynamicCount = CONFIG.GAMEPLAY.PORTAL_COUNT || 0;

        if (dynamicCount > 0) {
            this._generateDynamicPortals(dynamicCount, scale);
        } else if (Array.isArray(map.portals)) {
            // Standard Map Portals
            for (const def of map.portals) {
                this._createPortalFromDef(def, scale);
            }
        }
    }

    _createPortalFromDef(def, scale) {
        const posA = new THREE.Vector3(def.a[0] * scale, def.a[1] * scale, def.a[2] * scale);
        const posB = new THREE.Vector3(def.b[0] * scale, def.b[1] * scale, def.b[2] * scale);
        const color = def.color || 0x00ffcc;
        this._addPortalInstance(posA, posB, color);
    }

    _addPortalInstance(posA, posB, color) {
        const meshA = this._createPortalMesh(posA, color);
        const meshB = this._createPortalMesh(posB, color);

        this.portals.push({
            posA, posB,
            meshA, meshB,
            color,
            cooldowns: new Map(),
        });
    }

    _generateDynamicPortals(count, scale) {
        const isPlanar = CONFIG.GAMEPLAY.PLANAR_MODE;
        const colors = [0x00ffcc, 0xff00cc, 0xffff00, 0x00ccff];

        for (let i = 0; i < count; i++) {
            const color = colors[i % colors.length];

            if (isPlanar) {
                this._generatePlanarPortal(scale, color);
            } else {
                this._generateRandomPortal(scale, color);
            }
        }
    }

    _generatePlanarPortal(scale, color) {
        // Planar Mode: Portals connect predefined vertical tiers (levels)
        // Levels: 10 (Low), 32 (Mid-Low), 54 (Mid-High), 76 (High)
        // Arena Height is approx 90
        const levels = [
            10,
            32,
            54,
            76
        ];

        // Randomly pick two DISTINCT levels
        const levelIndexA = Math.floor(Math.random() * levels.length);
        let levelIndexB = Math.floor(Math.random() * levels.length);
        while (levelIndexB === levelIndexA) {
            levelIndexB = Math.floor(Math.random() * levels.length);
        }

        const yA = levels[levelIndexA];
        const yB = levels[levelIndexB];

        const margin = 8 * scale;
        const b = this.bounds;

        // Random X/Z position within safe bounds
        // Option 1: Portals are floating in space
        // Option 2: Portals are on walls

        // Let's make them floating "Elevators" at random positions in the arena
        // to encourage flying around.
        const x = b.minX + margin + Math.random() * (b.maxX - b.minX - 2 * margin);
        const z = b.minZ + margin + Math.random() * (b.maxZ - b.minZ - 2 * margin);

        // Both portals at same X/Z, just different Height
        const posA = new THREE.Vector3(x, yA, z);
        const posB = new THREE.Vector3(x, yB, z);

        // Determine Direction
        const dirA = yB > yA ? 'UP' : 'DOWN';
        const dirB = yA > yB ? 'UP' : 'DOWN';

        this._addPortalInstance(posA, posB, color, dirA, dirB);

        // Create Connection Beam
        if (CONFIG.GAMEPLAY.PORTAL_BEAMS) {
            this._createPortalBeam(posA, posB, color);
        }
    }

    _generateRandomPortal(scale, color) {
        const posA = this.getRandomPosition();
        const posB = this.getRandomPosition();
        this._addPortalInstance(posA, posB, color, 'NEUTRAL', 'NEUTRAL');
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

    _createPortalBeam(posA, posB, color) {
        // Vertical beam between two points
        const height = Math.abs(posA.y - posB.y);
        const midY = (posA.y + posB.y) / 2;

        const geo = new THREE.CylinderGeometry(0.2, 0.2, height, 8, 1, true);
        const mat = new THREE.MeshBasicMaterial({
            color: 0x44aaff,
            opacity: 0.15,
            transparent: true,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const beam = new THREE.Mesh(geo, mat);
        beam.position.set(posA.x, midY, posA.z);
        this.renderer.addToScene(beam);

        if (!this.beams) this.beams = [];
        this.beams.push(beam);
    }

    toggleBeams(visible) {
        if (!this.beams) return;
        for (const beam of this.beams) {
            beam.visible = visible;
        }
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
                portal.cooldowns.set(entityId, CONFIG.PORTAL.COOLDOWN);
                return { target: portal.posB, portal };
            }
            if (distBSq < triggerRadiusSq) {
                // Teleport zu A
                portal.cooldowns.set(entityId, CONFIG.PORTAL.COOLDOWN);
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
        // Fallback
        return new THREE.Vector3(0, CONFIG.PLAYER.START_Y, 0);
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
}

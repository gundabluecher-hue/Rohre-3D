import * as THREE from 'three';

export class EditorMapManager {
    constructor(core, UI, assetLoader) {
        this.core = core;
        this.UI = UI;
        this.assetLoader = assetLoader;

        this.mapData = {
            tunnels: [], hardBlocks: [], foamBlocks: [],
            portals: [], items: [], botSpawns: [], aircraft: [],
            playerSpawn: { x: -800, y: 950 * 0.55, z: 0 }
        };

        this.setupPrimitives();
    }

    setupPrimitives() {
        this.blockGeo = new THREE.BoxGeometry(1, 1, 1);
        this.sphereGeo = new THREE.SphereGeometry(1, 16, 16);
        this.cylinderGeo = new THREE.CylinderGeometry(1, 1, 1, 16);
        this.torusGeo = new THREE.TorusGeometry(1, 0.3, 16, 32);
        this.torusKnotGeo = new THREE.TorusKnotGeometry(1, 0.3, 64, 8);

        this.mats = {
            hard: new THREE.MeshLambertMaterial({ color: 0xf97373, transparent: true, opacity: 0.8 }),
            foam: new THREE.MeshLambertMaterial({ color: 0x34d399, transparent: true, opacity: 0.8 }),
            tunnel: new THREE.MeshLambertMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.5 }),
            portal: new THREE.MeshLambertMaterial({ color: 0xc084fc }),
            playerSpawn: new THREE.MeshLambertMaterial({ color: 0xeab308 }),
            botSpawn: new THREE.MeshLambertMaterial({ color: 0xef4444 }),
            item_fallback: new THREE.MeshLambertMaterial({ color: 0x64748b }),
            aircraft_fallback: new THREE.MeshLambertMaterial({ color: 0xc084fc })
        };
        this.coneGeo = new THREE.ConeGeometry(1, 2, 8);
    }

    createSelectionOutline(geometry) {
        const outline = new THREE.LineSegments(
            new THREE.EdgesGeometry(geometry),
            new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.2 })
        );
        outline.userData.isSelectionOutline = true;
        return outline;
    }

    attachSelectionOutlines(object) {
        object.traverse((child) => {
            if (!child?.isMesh || !child.geometry) return;
            child.add(this.createSelectionOutline(child.geometry));
        });
    }

    createMesh(type, subType, x, y, z, sizeInfo, extraProps = {}) {
        let mesh;
        let userData = { type, sizeInfo, ...extraProps };

        if (type === "hard" || type === "foam") {
            mesh = new THREE.Mesh(this.blockGeo, this.mats[type]);
            const sx = extraProps.sizeX || sizeInfo * 2 || 140;
            const sz = extraProps.sizeZ || sizeInfo * 2 || 140;
            const sy = extraProps.sizeY || sizeInfo * 2 || 140;
            mesh.scale.set(sx, sy, sz);
            userData.sizeX = sx;
            userData.sizeZ = sz;
            userData.sizeY = sy;
        }
        else if (type === "tunnel") {
            // Tunnel ist nun ein echtes Segment von A nach B!
            mesh = new THREE.Mesh(this.cylinderGeo, this.mats.tunnel);
            const r = sizeInfo || 160;
            userData.radius = r;

            // Falls extraProps Start/End-Vektoren beinhaltet
            if (extraProps.pointA && extraProps.pointB) {
                this.alignTunnelSegment(mesh, extraProps.pointA, extraProps.pointB, r);
            } else {
                mesh.scale.set(r, 100, r); // Fallback-Darstellung
            }
        }
        else if (type === "portal") {
            mesh = new THREE.Mesh(this.torusGeo, this.mats.portal);
            const r = sizeInfo || 80;
            mesh.scale.set(r, r, r);
            mesh.rotation.x = Math.PI / 2;
            userData.sizeInfo = r;
        }
        else if (type === "spawn") {
            mesh = new THREE.Mesh(this.torusKnotGeo, subType === 'player' ? this.mats.playerSpawn : this.mats.botSpawn);
            mesh.scale.set(40, 40, 40);
            userData.subType = subType;
        }
        else if (type === "item") {
            let objClone = this.assetLoader.getClone(subType);
            if (objClone) mesh = objClone;
            else mesh = new THREE.Mesh(this.sphereGeo, this.mats.item_fallback);

            mesh.scale.set(50, 50, 50);
            if (subType === 'item_shield' || subType === 'item_coin' || subType === 'item_ring') mesh.scale.set(50, 10, 50);
            if (subType === 'item_capsule' || subType === 'item_rocket') mesh.scale.set(30, 80, 30);

            userData.subType = subType;
        }
        else if (type === "aircraft") {
            let objClone = this.assetLoader.getClone(subType);
            if (objClone) mesh = objClone;
            else mesh = new THREE.Mesh(this.coneGeo, this.mats.aircraft_fallback);

            const s = extraProps.modelScale || 50;
            mesh.scale.set(s, s, s);
            userData.subType = subType;
            userData.modelScale = s;
        }

        if (!mesh) {
            console.warn(`[EditorMapManager] Unsupported mesh type "${type}"`);
            return null;
        }

        mesh.position.set(x, y, z);
        mesh.userData = userData;

        this.attachSelectionOutlines(mesh);

        // Apply rotation if loaded from JSON
        if (extraProps.rotateY) {
            mesh.rotation.y = extraProps.rotateY;
        }

        this.core.objectsContainer.add(mesh);
        this.UI.updateHudCount();
        if (type === 'tunnel') this.UI.updateTunnelVisuals();

        return mesh;
    }

    alignTunnelSegment(mesh, pA, pB, radius) {
        const distance = pA.distanceTo(pB);
        mesh.position.copy(pA).lerp(pB, 0.5);
        mesh.scale.set(radius, distance, radius);
        mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pB.clone().sub(pA).normalize());
        mesh.userData.pointA = pA.clone();
        mesh.userData.pointB = pB.clone();
        mesh.userData.radius = radius;
    }

    syncTunnelEndpointsFromMesh(mesh) {
        if (!mesh || mesh.userData?.type !== 'tunnel') return;

        const direction = new THREE.Vector3(0, 1, 0).applyQuaternion(mesh.quaternion).normalize();
        const halfLength = Math.max(0, mesh.scale.y * 0.5);
        const center = mesh.position.clone();

        mesh.userData.pointA = center.clone().addScaledVector(direction, -halfLength);
        mesh.userData.pointB = center.clone().addScaledVector(direction, halfLength);
        mesh.userData.radius = mesh.scale.x || mesh.userData.radius || 160;
    }

    generateJSONExport(arenaSize) {
        let payload = {
            arenaSize,
            tunnels: [], hardBlocks: [], foamBlocks: [],
            botSpawns: [], portals: [], items: [], aircraft: [],
            playerSpawn: { x: -800, y: arenaSize.height * 0.55, z: 0 }
        };

        this.core.objectsContainer.children.forEach(obj => {
            const u = obj.userData;
            const p = obj.position;
            const ry = obj.rotation.y || 0; // Capture Y rotation

            if (u.type === 'hard') payload.hardBlocks.push({ x: p.x, y: p.y, z: p.z, width: u.sizeX, depth: u.sizeZ, height: u.sizeY, size: u.sizeInfo, rotateY: ry });
            else if (u.type === 'foam') payload.foamBlocks.push({ x: p.x, y: p.y, z: p.z, width: u.sizeX, depth: u.sizeZ, height: u.sizeY, size: u.sizeInfo, rotateY: ry });
            else if (u.type === 'portal') payload.portals.push({ x: p.x, y: p.y, z: p.z, radius: u.sizeInfo });
            else if (u.type === 'spawn') {
                if (u.subType === 'player') payload.playerSpawn = { x: p.x, y: p.y, z: p.z };
                else payload.botSpawns.push({ x: p.x, y: p.y, z: p.z });
            }
            else if (u.type === 'item') payload.items.push({ type: u.subType, x: p.x, y: p.y, z: p.z, rotateY: ry });
            else if (u.type === 'aircraft') payload.aircraft.push({ jetId: u.subType, x: p.x, y: p.y, z: p.z, scale: u.modelScale || 50, rotateY: ry });
            else if (u.type === 'tunnel') {
                if (u.pointA && u.pointB) {
                    payload.tunnels.push({ ax: u.pointA.x, ay: u.pointA.y, az: u.pointA.z, bx: u.pointB.x, by: u.pointB.y, bz: u.pointB.z, radius: u.radius });
                }
            }
        });

        return JSON.stringify(payload, null, 2);
    }

    importFromJSON(jsonString, syncArenaValuesCallback) {
        try {
            const data = JSON.parse(jsonString);
            this.UI.clearAllObjects();

            if (data.arenaSize) {
                document.getElementById("numArenaW").value = data.arenaSize.width;
                document.getElementById("numArenaD").value = data.arenaSize.depth;
                document.getElementById("numArenaH").value = data.arenaSize.height;
                syncArenaValuesCallback();
            }

            if (data.hardBlocks) data.hardBlocks.forEach(b => this.createMesh('hard', null, b.x, b.y, b.z, b.size, { sizeX: b.width || b.size * 2, sizeZ: b.depth || b.size * 2, sizeY: b.height || b.size * 2, rotateY: b.rotateY || 0 }));
            if (data.foamBlocks) data.foamBlocks.forEach(b => this.createMesh('foam', null, b.x, b.y, b.z, b.size, { sizeX: b.width || b.size * 2, sizeZ: b.depth || b.size * 2, sizeY: b.height || b.size * 2, rotateY: b.rotateY || 0 }));
            if (data.portals) data.portals.forEach(b => this.createMesh('portal', null, b.x, b.y, b.z, b.radius));
            if (data.items) data.items.forEach(b => this.createMesh('item', b.type, b.x, b.y, b.z, 0, { rotateY: b.rotateY || 0 }));
            if (data.aircraft) data.aircraft.forEach(a => this.createMesh('aircraft', a.jetId, a.x, a.y, a.z, 0, { modelScale: a.scale || 50, rotateY: a.rotateY || 0 }));
            if (data.botSpawns) data.botSpawns.forEach(b => this.createMesh('spawn', 'bot', b.x, b.y, b.z));
            if (data.playerSpawn) this.createMesh('spawn', 'player', data.playerSpawn.x, data.playerSpawn.y, data.playerSpawn.z);

            if (data.tunnels) {
                data.tunnels.forEach(t => {
                    const pA = new THREE.Vector3(t.ax, t.ay, t.az);
                    const pB = new THREE.Vector3(t.bx, t.by, t.bz);
                    const center = pA.clone().lerp(pB, 0.5);
                    this.createMesh('tunnel', null, center.x, center.y, center.z, t.radius, { pointA: pA, pointB: pB });
                });
            }
        } catch (e) {
            alert("JSON Parse Error: " + e.message);
        }
    }
}

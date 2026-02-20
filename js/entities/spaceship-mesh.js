/**
 * SPACESHIP-MESH.JS - 3D Raumschiff-Modell
 * Sci-Fi Raumschiff aus Three.js Primitiven
 */

import * as THREE from 'three';

export class SpaceshipMesh extends THREE.Group {
    constructor(color) {
        super();
        this.playerColor = color;

        this.primaryMat = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.2,
            metalness: 0.8,
            emissive: new THREE.Color(color).multiplyScalar(0.15),
            emissiveIntensity: 0.3
        });

        this.darkMat = new THREE.MeshStandardMaterial({
            color: 0x0a0a1a,
            roughness: 0.5,
            metalness: 0.9
        });

        this.glowMat = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.9
        });

        this.engineGlowMat = new THREE.MeshBasicMaterial({
            color: 0xff6600,
            transparent: true,
            opacity: 0.85
        });

        this.createSaucer();
        this.createCockpitDome();
        this.createEngineRing();
        this.createWinglets();
        this.createCannon();
    }

    createSaucer() {
        // Haupt-Scheibe (flache Ellipse)
        const geo = new THREE.CylinderGeometry(14, 10, 4, 16);
        const mesh = new THREE.Mesh(geo, this.primaryMat);
        mesh.position.z = -2;
        this.add(mesh);

        // Untere Wölbung
        const bottomGeo = new THREE.SphereGeometry(10, 12, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
        const bottom = new THREE.Mesh(bottomGeo, this.darkMat);
        bottom.position.z = -2;
        bottom.position.y = -2;
        this.add(bottom);
    }

    createCockpitDome() {
        // Glas-Kuppel oben
        const geo = new THREE.SphereGeometry(5, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2);
        const mat = new THREE.MeshPhysicalMaterial({
            color: 0x88ccff,
            transmission: 0.6,
            opacity: 0.75,
            roughness: 0.05,
            metalness: 0.0,
            clearcoat: 1.0,
            clearcoatRoughness: 0.05
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(0, 2, -4);
        this.add(mesh);
    }

    createEngineRing() {
        // Ring-Engine hinten
        const geo = new THREE.TorusGeometry(7, 1.5, 8, 20);
        geo.rotateX(Math.PI / 2);
        const mesh = new THREE.Mesh(geo, this.darkMat);
        mesh.position.z = 8;
        this.add(mesh);

        // Glow-Ring
        const glowGeo = new THREE.TorusGeometry(7, 0.6, 6, 20);
        glowGeo.rotateX(Math.PI / 2);
        const glow = new THREE.Mesh(glowGeo, this.engineGlowMat);
        glow.position.z = 9;
        this.add(glow);

        // Innerer Engine-Kern
        const coreGeo = new THREE.CylinderGeometry(4, 4, 2, 12, 1, true);
        coreGeo.rotateX(Math.PI / 2);
        const core = new THREE.Mesh(coreGeo, this.glowMat);
        core.position.z = 7;
        this.add(core);
    }

    createWinglets() {
        // 4 symmetrische Flügelchen
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(8, -3);
        shape.lineTo(6, -6);
        shape.lineTo(-2, -2);
        const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.8, bevelEnabled: false });
        geo.rotateX(Math.PI / 2);
        geo.rotateY(-Math.PI / 2);

        const offsets = [
            { x: -14, z: 0, ry: 0 },
            { x: 14, z: 0, ry: Math.PI },
            { x: 0, z: -14, ry: Math.PI / 2 },
            { x: 0, z: 14, ry: -Math.PI / 2 },
        ];

        offsets.forEach(o => {
            const w = new THREE.Mesh(geo, this.primaryMat);
            w.position.set(o.x, -1, o.z - 2);
            w.rotation.y = o.ry;
            this.add(w);
        });
    }

    createCannon() {
        // Zwei Kanonen vorne
        const geo = new THREE.CylinderGeometry(0.4, 0.4, 10, 6);
        geo.rotateX(Math.PI / 2);
        const mat = new THREE.MeshStandardMaterial({ color: 0x334466, metalness: 0.95, roughness: 0.2 });

        const left = new THREE.Mesh(geo, mat);
        left.position.set(-4, 0, -16);
        this.add(left);

        const right = new THREE.Mesh(geo, mat);
        right.position.set(4, 0, -16);
        this.add(right);

        this.muzzlePos = new THREE.Vector3(0, 0, -21);
    }

    getMuzzlePosition() {
        const v = this.muzzlePos.clone();
        v.applyMatrix4(this.matrixWorld);
        return v;
    }
}

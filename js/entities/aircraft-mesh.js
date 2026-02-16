/**
 * AIRCRAFT-MESH.JS - 3D Flugzeug-Modell
 * Procedurally generiertes Flugzeug aus Three.js Primitiven
 */

import * as THREE from 'three';

export class AircraftMesh extends THREE.Group {
    constructor(color) {
        super();

        this.playerColor = color;

        // Materalien
        this.primaryMat = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.3,
            metalness: 0.6,
            emissive: new THREE.Color(color).multiplyScalar(0.2),
            emissiveIntensity: 0.2
        });

        this.secondaryMat = new THREE.MeshStandardMaterial({
            color: 0x334155, // Dark slate
            roughness: 0.7,
            metalness: 0.2
        });

        this.cockpitMat = new THREE.MeshPhysicalMaterial({
            color: 0x1e293b,
            transmission: 0.5,
            opacity: 0.7,
            roughness: 0.2,
            metalness: 0.1,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1
        });

        this.glowMat = new THREE.MeshBasicMaterial({
            color: 0x60a5fa, // Engine glow
            transparent: true,
            opacity: 0.8
        });

        this.createBody();
        this.createWings();
        this.createTail();
        this.createCockpit();
        this.createEngines();
        this.createCannon();

        // Initial rotation to align with game physics (if needed)
        // Physics: -Z is forward.
        // Mesh: By default, cylinder is Y-up.
        // So we rotate the group so local -Z is forward?
        // Let's assume the construction below builds it along -Z.
    }

    createBody() {
        // Main Fuselage
        const geo = new THREE.CylinderGeometry(2.5, 3.5, 24, 12);
        geo.rotateX(Math.PI / 2); // Align to Z-axis
        const mesh = new THREE.Mesh(geo, this.primaryMat);
        mesh.position.z = -2;
        this.add(mesh); // Z range: -14 to +10

        // Nose Cone
        const noseGeo = new THREE.ConeGeometry(2.5, 8, 12);
        noseGeo.rotateX(-Math.PI / 2); // Pointing to -Z
        const nose = new THREE.Mesh(noseGeo, this.primaryMat);
        nose.position.z = -18;
        this.add(nose);
    }

    createWings() {
        // Main Wings (Delta shapeish)
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(12, 10);
        shape.lineTo(12, 4);
        shape.lineTo(0, -6);
        const geo = new THREE.ExtrudeGeometry(shape, { depth: 1, bevelEnabled: true, bevelSize: 0.5, bevelThickness: 0.5 });
        geo.rotateX(Math.PI / 2); // Lay flat
        geo.rotateY(-Math.PI / 2); // Mirror config?

        // Left Wing
        const leftWing = new THREE.Mesh(geo, this.primaryMat);
        leftWing.position.set(-2, 0, 4);
        leftWing.rotation.x = Math.PI; // Flip
        leftWing.scale.set(1, 1, 1);
        this.add(leftWing);

        // Right Wing
        const rightWing = new THREE.Mesh(geo, this.primaryMat);
        rightWing.position.set(2, 0, 4);
        // rightWing.rotation.z = Math.PI;
        this.add(rightWing);

        // Stabilizers (Canards)
        const canardShape = new THREE.Shape();
        canardShape.moveTo(0, 0);
        canardShape.lineTo(4, 3);
        canardShape.lineTo(4, 1);
        canardShape.lineTo(0, -2);
        const canardGeo = new THREE.ExtrudeGeometry(canardShape, { depth: 0.5, bevelEnabled: false });
        canardGeo.rotateX(Math.PI / 2);
        canardGeo.rotateY(-Math.PI / 2);

        const leftCan = new THREE.Mesh(canardGeo, this.secondaryMat);
        leftCan.position.set(-2, -0.5, -8);
        leftCan.rotation.x = Math.PI;
        this.add(leftCan);

        const rightCan = new THREE.Mesh(canardGeo, this.secondaryMat);
        rightCan.position.set(2, -0.5, -8);
        this.add(rightCan);
    }

    createTail() {
        // Vertical Stabilizer
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(5, 6);
        shape.lineTo(3, 6);
        shape.lineTo(-2, 0);
        const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.8, bevelEnabled: true, bevelSize: 0.2, bevelThickness: 0.2 });
        // Centered
        geo.translate(-1.5, 0, 0);

        const tail = new THREE.Mesh(geo, this.primaryMat);
        tail.position.set(0, 2, 8);
        tail.rotation.y = Math.PI / 2; // Align to Z
        this.add(tail);

        // Horizontal Stabilizers? (Already have wings)
    }

    createCockpit() {
        const geo = new THREE.CapsuleGeometry(1.4, 4, 4, 8);
        const mesh = new THREE.Mesh(geo, this.cockpitMat);
        mesh.rotation.x = Math.PI / 2;
        mesh.position.set(0, 1.8, -4);
        this.add(mesh);
    }

    createEngines() {
        const geo = new THREE.CylinderGeometry(1.2, 1.0, 6, 8, 1, true);
        geo.rotateX(Math.PI / 2);

        // Left Engine
        const lEng = new THREE.Mesh(geo, this.secondaryMat);
        lEng.position.set(-3.5, 0.5, 6);
        this.add(lEng);

        // Right Engine
        const rEng = new THREE.Mesh(geo, this.secondaryMat);
        rEng.position.set(3.5, 0.5, 6);
        this.add(rEng);

        // Glow
        const glowGeo = new THREE.CircleGeometry(1.0, 16);
        const glowL = new THREE.Mesh(glowGeo, this.glowMat);
        glowL.position.set(0, -3, 0); // Local to cylinder? No, absolute
        glowL.rotation.x = Math.PI; // Face back
        // Parenting to engine mesh to make it easier
        lEng.add(glowL);
        glowL.position.set(0, 3, 0); // End of cylinder (y=3 because height=6, centered)

        const glowR = new THREE.Mesh(glowGeo, this.glowMat);
        glowR.rotation.x = Math.PI;
        rEng.add(glowR);
        glowR.position.set(0, 3, 0);
    }

    createCannon() {
        // Under nose gun
        const geo = new THREE.CylinderGeometry(0.3, 0.3, 8, 6);
        geo.rotateX(Math.PI / 2);
        const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.9, roughness: 0.4 }));
        mesh.position.set(0, -1.8, -8);
        this.add(mesh);

        this.muzzlePos = new THREE.Vector3(0, -1.8, -12); // Approximate muzzle end
    }

    getMuzzlePosition() {
        // Return world position of muzzle
        const v = this.muzzlePos.clone();
        v.applyMatrix4(this.matrixWorld);
        return v;
    }
}

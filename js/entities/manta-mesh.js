/**
 * MANTA-MESH.JS - 3D Manta-Ray-Stil-Gleiter
 * Breiter, flacher Gleiter mit geschwungenen Flügeln
 */

import * as THREE from 'three';

export class MantaMesh extends THREE.Group {
    constructor(color) {
        super();
        this.playerColor = color;

        this.primaryMat = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.25,
            metalness: 0.6,
            emissive: new THREE.Color(color).multiplyScalar(0.2),
            emissiveIntensity: 0.35,
            side: THREE.DoubleSide
        });

        this.darkMat = new THREE.MeshStandardMaterial({
            color: 0x1a1a2e,
            roughness: 0.6,
            metalness: 0.4
        });

        this.glowMat = new THREE.MeshBasicMaterial({
            color: 0x00eeff,
            transparent: true,
            opacity: 0.8
        });

        this.createBody();
        this.createWings();
        this.createTail();
        this.createEyes();
        this.createCannon();
    }

    createBody() {
        // Flacher Körper (gedrückte Raute)
        const shape = new THREE.Shape();
        shape.moveTo(0, -20); // Nose
        shape.bezierCurveTo(4, -12, 6, -4, 5, 4);
        shape.bezierCurveTo(4, 8, 2, 10, 0, 11);  // tail start
        shape.bezierCurveTo(-2, 10, -4, 8, -5, 4);
        shape.bezierCurveTo(-6, -4, -4, -12, 0, -20);

        const geo = new THREE.ExtrudeGeometry(shape, {
            depth: 2.5,
            bevelEnabled: true,
            bevelSize: 1.2,
            bevelThickness: 1.0,
            bevelSegments: 3
        });
        geo.rotateX(-Math.PI / 2);
        geo.translate(0, 0, 0);

        const mesh = new THREE.Mesh(geo, this.primaryMat);
        mesh.position.y = -1;
        this.add(mesh);
    }

    createWings() {
        // Linker Flügel (geschwungen)
        const leftShape = new THREE.Shape();
        leftShape.moveTo(0, 0);
        leftShape.bezierCurveTo(-5, -3, -14, -8, -22, -4);
        leftShape.bezierCurveTo(-26, -2, -26, 4, -22, 6);
        leftShape.bezierCurveTo(-14, 8, -5, 4, 0, 2);

        const leftGeo = new THREE.ExtrudeGeometry(leftShape, {
            depth: 1,
            bevelEnabled: true,
            bevelSize: 0.4,
            bevelThickness: 0.3
        });
        leftGeo.rotateX(-Math.PI / 2);

        const leftWing = new THREE.Mesh(leftGeo, this.primaryMat);
        leftWing.position.set(-5, -0.5, -6);
        this.add(leftWing);

        // Rechter Flügel (Spiegelung)
        const rightShape = new THREE.Shape();
        rightShape.moveTo(0, 0);
        rightShape.bezierCurveTo(5, -3, 14, -8, 22, -4);
        rightShape.bezierCurveTo(26, -2, 26, 4, 22, 6);
        rightShape.bezierCurveTo(14, 8, 5, 4, 0, 2);

        const rightGeo = new THREE.ExtrudeGeometry(rightShape, {
            depth: 1,
            bevelEnabled: true,
            bevelSize: 0.4,
            bevelThickness: 0.3
        });
        rightGeo.rotateX(-Math.PI / 2);

        const rightWing = new THREE.Mesh(rightGeo, this.primaryMat);
        rightWing.position.set(5, -0.5, -6);
        this.add(rightWing);

        // Unter-Lichtstreifen an Flügeln
        const lineGeo = new THREE.CylinderGeometry(0.3, 0.3, 20, 6);
        lineGeo.rotateZ(Math.PI / 2);

        const lineL = new THREE.Mesh(lineGeo, this.glowMat);
        lineL.position.set(-13, -1, -3);
        this.add(lineL);

        const lineR = new THREE.Mesh(lineGeo, this.glowMat);
        lineR.position.set(13, -1, -3);
        this.add(lineR);
    }

    createTail() {
        // Dünner Schwanz
        const geo = new THREE.CylinderGeometry(0.5, 1.5, 14, 6);
        geo.rotateX(Math.PI / 2);
        const tail = new THREE.Mesh(geo, this.darkMat);
        tail.position.z = 13;
        this.add(tail);

        // Schwanzflosse (vertikal)
        const finShape = new THREE.Shape();
        finShape.moveTo(0, 0);
        finShape.lineTo(0, 6);
        finShape.lineTo(4, 3);
        finShape.lineTo(3, 0);
        const finGeo = new THREE.ExtrudeGeometry(finShape, { depth: 0.4, bevelEnabled: false });
        finGeo.rotateX(Math.PI / 2);
        finGeo.rotateY(Math.PI / 2);
        const fin = new THREE.Mesh(finGeo, this.primaryMat);
        fin.position.set(0, 2, 14);
        this.add(fin);

        // Thruster Glow
        const glowGeo = new THREE.CylinderGeometry(1.2, 0.8, 2, 10, 1, true);
        glowGeo.rotateX(Math.PI / 2);
        const glow = new THREE.Mesh(glowGeo, this.glowMat);
        glow.position.z = 17;
        this.add(glow);
    }

    createEyes() {
        // Zwei leuchtende "Augen" / Sensoren vorne
        const eyeGeo = new THREE.SphereGeometry(1.2, 8, 6);
        const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff0066, transparent: true, opacity: 0.9 });

        const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
        eyeL.position.set(-3, 1, -18);
        this.add(eyeL);

        const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
        eyeR.position.set(3, 1, -18);
        this.add(eyeR);
    }

    createCannon() {
        // Zentralkanone unten
        const geo = new THREE.CylinderGeometry(0.5, 0.5, 6, 6);
        geo.rotateX(Math.PI / 2);
        const mat = new THREE.MeshStandardMaterial({ color: 0x222233, metalness: 0.9, roughness: 0.3 });
        const cannon = new THREE.Mesh(geo, mat);
        cannon.position.set(0, -2, -20);
        this.add(cannon);

        this.muzzlePos = new THREE.Vector3(0, -2, -23);
    }

    getMuzzlePosition() {
        const v = this.muzzlePos.clone();
        v.applyMatrix4(this.matrixWorld);
        return v;
    }
}

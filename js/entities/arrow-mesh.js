/**
 * ARROW-MESH.JS - 3D Pfeil-Modell
 * Schlankes, aerodynamisches Pfeilformat
 */

import * as THREE from 'three';

export class ArrowMesh extends THREE.Group {
    constructor(color) {
        super();
        this.playerColor = color;

        this.primaryMat = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.15,
            metalness: 0.85,
            emissive: new THREE.Color(color).multiplyScalar(0.25),
            emissiveIntensity: 0.4
        });

        this.accentMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.1,
            metalness: 0.95,
            emissive: 0xffffff,
            emissiveIntensity: 0.1
        });

        this.thrusterMat = new THREE.MeshBasicMaterial({
            color: 0xff4400,
            transparent: true,
            opacity: 0.9
        });

        this.createBody();
        this.createArrowhead();
        this.createFins();
        this.createThruster();
    }

    createBody() {
        // Schlanker Rumpf
        const geo = new THREE.CylinderGeometry(1.2, 2.0, 22, 8);
        geo.rotateX(Math.PI / 2);
        const mesh = new THREE.Mesh(geo, this.primaryMat);
        mesh.position.z = 1;
        this.add(mesh);

        // Mittlerer Band/Streifen
        const bandGeo = new THREE.CylinderGeometry(2.15, 2.15, 2, 8);
        bandGeo.rotateX(Math.PI / 2);
        const band = new THREE.Mesh(bandGeo, this.accentMat);
        band.position.z = 4;
        this.add(band);
    }

    createArrowhead() {
        // Spitze vorne - klassischer Kegel
        const coneGeo = new THREE.ConeGeometry(1.2, 12, 8);
        coneGeo.rotateX(-Math.PI / 2);
        const nose = new THREE.Mesh(coneGeo, this.primaryMat);
        nose.position.z = -15;
        this.add(nose);

        // Pfeispitze-Schultern (Angled Cut)
        const wingShape = new THREE.Shape();
        wingShape.moveTo(0, 0);
        wingShape.lineTo(6, 5);
        wingShape.lineTo(8, 0);
        wingShape.lineTo(6, -1);
        const wGeo = new THREE.ExtrudeGeometry(wingShape, { depth: 0.6, bevelEnabled: false });
        wGeo.rotateX(Math.PI / 2);
        wGeo.rotateY(-Math.PI / 2);

        const leftW = new THREE.Mesh(wGeo, this.primaryMat);
        leftW.position.set(-2, 0, -7);
        leftW.rotation.x = Math.PI;
        this.add(leftW);

        const rightW = new THREE.Mesh(wGeo, this.primaryMat);
        rightW.position.set(2, 0, -7);
        this.add(rightW);
    }

    createFins() {
        // Heck-Stabilisatoren (X-förmig)
        const finShape = new THREE.Shape();
        finShape.moveTo(0, 0);
        finShape.lineTo(0, 7);
        finShape.lineTo(5, 10);
        finShape.lineTo(5, 3);

        const finGeo = new THREE.ExtrudeGeometry(finShape, { depth: 0.5, bevelEnabled: false });
        finGeo.rotateX(Math.PI / 2);
        finGeo.rotateY(-Math.PI / 2);

        // 4 Fins in X-Anordnung
        const angles = [0, Math.PI / 2, Math.PI, -Math.PI / 2];
        angles.forEach(angle => {
            const fin = new THREE.Mesh(finGeo, this.primaryMat);
            fin.position.z = 10;
            fin.rotation.z = angle;
            // Adjust position based on angle
            fin.position.x = Math.cos(angle + Math.PI / 2) * 1.5;
            fin.position.y = Math.sin(angle + Math.PI / 2) * 1.5;
            this.add(fin);
        });
    }

    createThruster() {
        // Triebwerk hinten - leuchtendes Oval
        const geo = new THREE.CylinderGeometry(2.0, 1.5, 3, 10, 1, true);
        geo.rotateX(Math.PI / 2);
        const mesh = new THREE.Mesh(geo, this.thrusterMat);
        mesh.position.z = 13;
        this.add(mesh);

        // Inner glow disc
        const discGeo = new THREE.CircleGeometry(1.8, 12);
        const glowMat = new THREE.MeshBasicMaterial({ color: 0xff8800, transparent: true, opacity: 0.95 });
        const disc = new THREE.Mesh(discGeo, glowMat);
        disc.position.z = 14.5;
        disc.rotation.y = Math.PI;
        this.add(disc);

        this.muzzlePos = new THREE.Vector3(0, 0, -21);
    }

    getMuzzlePosition() {
        const v = this.muzzlePos.clone();
        v.applyMatrix4(this.matrixWorld);
        return v;
    }
}

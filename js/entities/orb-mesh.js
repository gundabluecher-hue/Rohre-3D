/**
 * ORB-MESH.JS - 3D Energie-Orb-Modell
 * Futuristischer schwebender Energie-Orb mit rotierenden Ringen
 */

import * as THREE from 'three';

export class OrbMesh extends THREE.Group {
    constructor(color) {
        super();
        this.playerColor = color;
        this._time = 0;

        this.coreMat = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.05,
            metalness: 0.2,
            emissive: new THREE.Color(color),
            emissiveIntensity: 0.6,
            transparent: true,
            opacity: 0.9
        });

        this.shellMat = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.1,
            metalness: 0.9,
            emissive: new THREE.Color(color).multiplyScalar(0.3),
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        this.ringMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.05,
            metalness: 1.0,
            emissive: new THREE.Color(color).multiplyScalar(0.5),
            emissiveIntensity: 0.7
        });

        this.innerGlowMat = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.5,
            side: THREE.BackSide
        });

        this.cannonMat = new THREE.MeshStandardMaterial({
            color: 0x111122,
            roughness: 0.2,
            metalness: 0.95
        });

        this.createCore();
        this.createShell();
        this.createRings();
        this.createCannon();
    }

    createCore() {
        // Innerer leuchtender Kern
        const geo = new THREE.SphereGeometry(5, 16, 12);
        this.coreMesh = new THREE.Mesh(geo, this.coreMat);
        this.add(this.coreMesh);

        // Innerer Glow (BackSide größere Kugel)
        const glowGeo = new THREE.SphereGeometry(6.5, 12, 8);
        const innerGlow = new THREE.Mesh(glowGeo, this.innerGlowMat);
        this.add(innerGlow);
    }

    createShell() {
        // Äußere Hülle (halbtransparent)
        const geo = new THREE.SphereGeometry(8, 16, 12);
        const shell = new THREE.Mesh(geo, this.shellMat);
        this.add(shell);

        // Hexagonale Panzerung (Box-Gitter simuliert)
        const panelMat = new THREE.MeshStandardMaterial({
            color: 0x334466,
            roughness: 0.3,
            metalness: 0.9,
            transparent: true,
            opacity: 0.6,
            wireframe: false
        });

        // 6 Platten am Äquator
        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            const panelGeo = new THREE.BoxGeometry(3, 3, 1);
            const panel = new THREE.Mesh(panelGeo, panelMat);
            panel.position.set(
                Math.cos(angle) * 8,
                0,
                Math.sin(angle) * 8
            );
            panel.lookAt(0, 0, 0);
            this.add(panel);
        }
    }

    createRings() {
        // 3 rotierende Ringe (verschiedene Achsen)
        const ringGeo1 = new THREE.TorusGeometry(10, 0.6, 8, 32);
        this.ring1 = new THREE.Mesh(ringGeo1, this.ringMat);
        this.add(this.ring1);

        const ringGeo2 = new THREE.TorusGeometry(10, 0.6, 8, 32);
        this.ring2 = new THREE.Mesh(ringGeo2, this.ringMat);
        this.ring2.rotation.x = Math.PI / 2;
        this.add(this.ring2);

        const ringGeo3 = new THREE.TorusGeometry(10, 0.4, 8, 32);
        this.ring3 = new THREE.Mesh(ringGeo3, this.ringMat);
        this.ring3.rotation.z = Math.PI / 3;
        this.ring3.rotation.x = Math.PI / 4;
        this.add(this.ring3);

        // LED-Punkte an den Ringen
        const dotGeo = new THREE.SphereGeometry(0.8, 6, 6);
        const dotMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });

        for (let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2;
            const dot = new THREE.Mesh(dotGeo, dotMat);
            dot.position.set(Math.cos(angle) * 10, 0, Math.sin(angle) * 10);
            this.ring1.add(dot);
        }
    }

    createCannon() {
        // Vorne: Energie-Strahl-Emitter
        const emitterGeo = new THREE.ConeGeometry(1.5, 6, 8);
        emitterGeo.rotateX(Math.PI / 2); // Zeigt nach vorne (-Z)
        const emitter = new THREE.Mesh(emitterGeo, this.cannonMat);
        emitter.position.z = -11;
        this.add(emitter);

        // Emitter-Ring
        const ringGeo = new THREE.TorusGeometry(2, 0.4, 6, 12);
        ringGeo.rotateX(Math.PI / 2);
        const eRing = new THREE.Mesh(ringGeo, this.ringMat);
        eRing.position.z = -9;
        this.add(eRing);

        this.muzzlePos = new THREE.Vector3(0, 0, -14);
    }

    // Animierbare Ringe (von außen aufrufbar)
    tick(dt) {
        this._time += dt;
        if (this.ring1) this.ring1.rotation.y += dt * 1.2;
        if (this.ring2) this.ring2.rotation.z += dt * 0.8;
        if (this.ring3) {
            this.ring3.rotation.y += dt * 0.5;
            this.ring3.rotation.x += dt * 0.3;
        }
        // Pulsierender Kern
        if (this.coreMesh) {
            const pulse = 0.9 + 0.1 * Math.sin(this._time * 3);
            this.coreMesh.scale.setScalar(pulse);
        }
    }

    getMuzzlePosition() {
        const v = this.muzzlePos.clone();
        v.applyMatrix4(this.matrixWorld);
        return v;
    }
}

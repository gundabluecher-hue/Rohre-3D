/**
 * AIRCRAFT-MESH.JS - 3D Flugzeug-Modell
 * Procedurally generiertes Flugzeug aus Three.js Primitiven
 */

export class AircraftMesh extends THREE.Group {
    constructor(color) {
        super();

        this.playerColor = color;
        this.buildMesh();
    }

    /**
     * Erstellt das Flugzeug-Modell
     */
    buildMesh() {
        const color = new THREE.Color(this.playerColor);
        const darkColor = color.clone().multiplyScalar(0.7);

        // === RUMPF (Hauptkörper) ===
        const bodyGeo = new THREE.CylinderGeometry(4, 3, 24, 12);
        const bodyMat = new THREE.MeshStandardMaterial({
            color: color,
            metalness: 0.6,
            roughness: 0.3,
            emissive: color.clone().multiplyScalar(0.2),
            emissiveIntensity: 0.3
        });
        const body = new THREE.Mesh(bodyGeo, bodyMat);
        body.rotation.z = Math.PI / 2; // Horizontal
        body.castShadow = true;
        this.add(body);

        // === NASE (Bug) ===
        const noseGeo = new THREE.ConeGeometry(3, 8, 12);
        const nose = new THREE.Mesh(noseGeo, bodyMat);
        nose.rotation.z = -Math.PI / 2;
        nose.position.x = 16;
        nose.castShadow = true;
        this.add(nose);

        // === FLÜGEL ===
        const wingGeo = new THREE.BoxGeometry(28, 1.5, 8);
        const wingMat = new THREE.MeshStandardMaterial({
            color: darkColor,
            metalness: 0.4,
            roughness: 0.4,
            emissive: darkColor.clone().multiplyScalar(0.15),
            emissiveIntensity: 0.2
        });
        const wings = new THREE.Mesh(wingGeo, wingMat);
        wings.position.set(0, -1.5, 0);
        wings.castShadow = true;
        this.add(wings);

        // === FLÜGEL-DETAILS (Ailerons) ===
        const aileronGeo = new THREE.BoxGeometry(8, 0.8, 3);
        const aileronL = new THREE.Mesh(aileronGeo, wingMat);
        aileronL.position.set(-4, -1, 10);
        this.add(aileronL);

        const aileronR = new THREE.Mesh(aileronGeo, wingMat);
        aileronR.position.set(-4, -1, -10);
        this.add(aileronR);

        // === COCKPIT (Kanzel) ===
        const cockpitGeo = new THREE.SphereGeometry(3.5, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2);
        const cockpitMat = new THREE.MeshStandardMaterial({
            color: 0x4488ff,
            transparent: true,
            opacity: 0.75,
            metalness: 0.9,
            roughness: 0.1,
            emissive: 0x2266bb,
            emissiveIntensity: 0.5
        });
        const cockpit = new THREE.Mesh(cockpitGeo, cockpitMat);
        cockpit.position.set(6, 2, 0);
        cockpit.rotation.z = -Math.PI / 2;
        this.add(cockpit);

        // === HECK-FLÜGEL (Horizontal Stabilizer) ===
        const tailWingGeo = new THREE.BoxGeometry(12, 1, 4);
        const tailWing = new THREE.Mesh(tailWingGeo, wingMat);
        tailWing.position.set(-10, 1, 0);
        tailWing.castShadow = true;
        this.add(tailWing);

        // === SEITENLEITWERK (Vertical Stabilizer) ===
        const finGeo = new THREE.BoxGeometry(1.5, 7, 6);
        const fin = new THREE.Mesh(finGeo, wingMat);
        fin.position.set(-10, 3.5, 0);
        fin.castShadow = true;
        this.add(fin);

        // === TRIEBWERKE (Engines) ===
        const engineGeo = new THREE.CylinderGeometry(1.5, 1.5, 6, 10);
        const engineMat = new THREE.MeshStandardMaterial({
            color: 0x333333,
            metalness: 0.9,
            roughness: 0.2
        });

        const engineL = new THREE.Mesh(engineGeo, engineMat);
        engineL.rotation.z = Math.PI / 2;
        engineL.position.set(-2, -1, 6);
        this.add(engineL);

        const engineR = new THREE.Mesh(engineGeo, engineMat);
        engineR.rotation.z = Math.PI / 2;
        engineR.position.set(-2, -1, -6);
        this.add(engineR);

        // === KANONE (Weapon) ===
        const cannonGeo = new THREE.CylinderGeometry(0.9, 0.8, 14, 12);
        const cannonMat = new THREE.MeshStandardMaterial({
            color: 0x1a1a1a,
            metalness: 0.95,
            roughness: 0.15,
            emissive: 0x050505,
            emissiveIntensity: 0.2
        });
        this.cannon = new THREE.Mesh(cannonGeo, cannonMat);
        this.cannon.rotation.z = Math.PI / 2;
        this.cannon.position.set(10, -3, 0);
        this.cannon.castShadow = true;
        this.add(this.cannon);

        // Mündung-Marker (unsichtbar, nur für Position)
        this.muzzlePoint = new THREE.Object3D();
        this.muzzlePoint.position.set(17, -3, 0); // Vorne an der Kanone
        this.add(this.muzzlePoint);

        // === LANDING GEAR (optional, vereinfacht) ===
        const wheelGeo = new THREE.CylinderGeometry(1, 1, 0.8, 10);
        const wheelMat = new THREE.MeshStandardMaterial({
            color: 0x222222,
            metalness: 0.3,
            roughness: 0.7
        });

        const wheelFront = new THREE.Mesh(wheelGeo, wheelMat);
        wheelFront.rotation.x = Math.PI / 2;
        wheelFront.position.set(8, -4, 0);
        this.add(wheelFront);

        const wheelBackL = new THREE.Mesh(wheelGeo, wheelMat);
        wheelBackL.rotation.x = Math.PI / 2;
        wheelBackL.position.set(-4, -4, 3);
        this.add(wheelBackL);

        const wheelBackR = new THREE.Mesh(wheelGeo, wheelMat);
        wheelBackR.rotation.x = Math.PI / 2;
        wheelBackR.position.set(-4, -4, -3);
        this.add(wheelBackR);
    }

    /**
     * Gibt Mündungsposition in Weltkoordinaten zurück
     */
    getMuzzlePosition() {
        const worldPos = new THREE.Vector3();
        this.muzzlePoint.getWorldPosition(worldPos);
        return worldPos;
    }

    /**
     * Gibt Mündungsrichtung in Weltkoordinaten zurück
     */
    getMuzzleDirection() {
        const worldDir = new THREE.Vector3(1, 0, 0); // Lokal: X-Achse
        this.muzzlePoint.getWorldDirection(worldDir);
        return worldDir.normalize();
    }

    /**
     * Cleanup
     */
    dispose() {
        this.traverse(obj => {
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) {
                if (Array.isArray(obj.material)) {
                    obj.material.forEach(mat => mat.dispose());
                } else {
                    obj.material.dispose();
                }
            }
        });
    }
}

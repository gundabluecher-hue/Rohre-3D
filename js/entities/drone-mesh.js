/**
 * DRONE-MESH.JS - 3D Drohnen-Modell
 * Kantiger, technischer Quadro-Drohnen-Look
 */

import * as THREE from 'three';

export class DroneMesh extends THREE.Group {
    constructor(color) {
        super();
        this.playerColor = color;

        this.primaryMat = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.3,
            metalness: 0.75,
            emissive: new THREE.Color(color).multiplyScalar(0.2),
            emissiveIntensity: 0.3
        });

        this.darkMat = new THREE.MeshStandardMaterial({
            color: 0x111122,
            roughness: 0.7,
            metalness: 0.5
        });

        this.rotorMat = new THREE.MeshStandardMaterial({
            color: 0x334455,
            roughness: 0.4,
            metalness: 0.8,
            transparent: true,
            opacity: 0.6
        });

        this.ledMat = new THREE.MeshBasicMaterial({
            color: 0x00ff88,
            transparent: true,
            opacity: 1.0
        });

        this.thrusterMat = new THREE.MeshBasicMaterial({
            color: 0x4488ff,
            transparent: true,
            opacity: 0.8
        });

        this.createCore();
        this.createArms();
        this.createRotors();
        this.createSensors();
        this.createCannon();
    }

    createCore() {
        // Haupt-Körper (flacher Quader)
        const geo = new THREE.BoxGeometry(8, 4, 12);
        const mesh = new THREE.Mesh(geo, this.primaryMat);
        this.add(mesh);

        // Obere Abdeckung (leicht abgerundet durch Bevel)
        const topGeo = new THREE.BoxGeometry(6, 1.5, 10);
        const top = new THREE.Mesh(topGeo, this.darkMat);
        top.position.y = 2.75;
        this.add(top);

        // Unterseite - Sensor-Array
        const sensorGeo = new THREE.BoxGeometry(4, 0.8, 6);
        const sensorMat = new THREE.MeshStandardMaterial({ color: 0x001133, roughness: 0.2, metalness: 0.9 });
        const sensor = new THREE.Mesh(sensorGeo, sensorMat);
        sensor.position.y = -2.4;
        this.add(sensor);

        // Status-LED Streifen
        const ledGeo = new THREE.BoxGeometry(5, 0.4, 0.4);
        const led = new THREE.Mesh(ledGeo, this.ledMat);
        led.position.set(0, 2.1, -4);
        this.add(led);

        const led2 = new THREE.Mesh(ledGeo, this.ledMat);
        led2.position.set(0, 2.1, 4);
        this.add(led2);
    }

    createArms() {
        // 4 Ausleger-Arme diagonal
        const armGeo = new THREE.BoxGeometry(16, 1.2, 2);

        const arm1 = new THREE.Mesh(armGeo, this.primaryMat);
        arm1.rotation.y = Math.PI / 4;
        arm1.position.y = 0.5;
        this.add(arm1);

        const arm2 = new THREE.Mesh(armGeo, this.primaryMat);
        arm2.rotation.y = -Math.PI / 4;
        arm2.position.y = 0.5;
        this.add(arm2);

        // Arm-Verstärkungen (kleine Quader an den Enden)
        const bracketGeo = new THREE.BoxGeometry(2.5, 2, 2.5);
        const positions = [
            { x: 8, z: 8 },
            { x: -8, z: 8 },
            { x: 8, z: -8 },
            { x: -8, z: -8 }
        ];
        positions.forEach(pos => {
            const b = new THREE.Mesh(bracketGeo, this.darkMat);
            b.position.set(pos.x, 0.5, pos.z);
            this.add(b);
        });
    }

    createRotors() {
        // 4 Rotoren an den Arm-Enden
        const rotorGeo = new THREE.CylinderGeometry(5, 5, 0.3, 16);

        const positions = [
            { x: 8, z: 8 },
            { x: -8, z: 8 },
            { x: 8, z: -8 },
            { x: -8, z: -8 }
        ];

        positions.forEach(pos => {
            const rotor = new THREE.Mesh(rotorGeo, this.rotorMat);
            rotor.position.set(pos.x, 2.5, pos.z);
            this.add(rotor);

            // Rotor-Ring
            const ringGeo = new THREE.TorusGeometry(4.8, 0.3, 6, 16);
            const ring = new THREE.Mesh(ringGeo, this.darkMat);
            ring.position.set(pos.x, 2.5, pos.z);
            this.add(ring);

            // Thruster-Glow unter Rotor
            const glowGeo = new THREE.CylinderGeometry(3.5, 2, 1.5, 12, 1, true);
            const glow = new THREE.Mesh(glowGeo, this.thrusterMat);
            glow.position.set(pos.x, 1.5, pos.z);
            this.add(glow);
        });
    }

    createSensors() {
        // Front-Kamera
        const camGeo = new THREE.BoxGeometry(3, 2, 1.5);
        const camMat = new THREE.MeshStandardMaterial({ color: 0x000011, roughness: 0.1, metalness: 0.9 });
        const cam = new THREE.Mesh(camGeo, camMat);
        cam.position.set(0, -0.5, -7);
        this.add(cam);

        // Kamera-Linse
        const lensGeo = new THREE.CylinderGeometry(0.7, 0.7, 0.8, 10);
        lensGeo.rotateX(Math.PI / 2);
        const lensMat = new THREE.MeshPhysicalMaterial({ color: 0x0011ff, transmission: 0.4, roughness: 0.0, metalness: 0.0 });
        const lens = new THREE.Mesh(lensGeo, lensMat);
        lens.position.set(0, -0.5, -7.8);
        this.add(lens);

        // Ranging-Sensor (vorne)
        const sGeo = new THREE.BoxGeometry(1, 1, 0.8);
        const redMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const rangeSensor = new THREE.Mesh(sGeo, redMat);
        rangeSensor.position.set(0, 1, -7);
        this.add(rangeSensor);
    }

    createCannon() {
        // Untergehängtes Geschütz
        const barrelGeo = new THREE.CylinderGeometry(0.5, 0.5, 10, 6);
        barrelGeo.rotateX(Math.PI / 2);
        const barrelMat = new THREE.MeshStandardMaterial({ color: 0x222233, metalness: 0.95, roughness: 0.2 });
        const barrel = new THREE.Mesh(barrelGeo, barrelMat);
        barrel.position.set(0, -3, -7);
        this.add(barrel);

        // Halterung
        const mountGeo = new THREE.BoxGeometry(2, 2, 2);
        const mount = new THREE.Mesh(mountGeo, this.darkMat);
        mount.position.set(0, -2, -4);
        this.add(mount);

        this.muzzlePos = new THREE.Vector3(0, -3, -12);
    }

    getMuzzlePosition() {
        const v = this.muzzlePos.clone();
        v.applyMatrix4(this.matrixWorld);
        return v;
    }
}

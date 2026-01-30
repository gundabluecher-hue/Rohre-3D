/**
 * TRAIL-INSTANCING.JS - Optimiertes Trail-Rendering
 * Verwendet InstancedMesh statt einzelner Meshes für bessere Performance
 */

import { CONFIG } from '../core/config.js';

export class TrailInstanceManager {
    constructor(scene, maxInstances = 10000) {
        this.scene = scene;
        this.maxInstances = maxInstances;
        this.instancedMesh = null;
        this.activeCount = 0;
        this.freeIndices = [];
        this.segmentData = new Map(); // ID → instanceIndex

        this.init();
    }

    /**
     * Initialisiert InstancedMesh
     */
    init() {
        // Basis-Geometrie (Zylinder für Trail-Segment)
        const geo = new THREE.CylinderGeometry(1, 1, 1, 14, 1, false);

        // Material (wird pro Spieler geklont mit unterschiedlicher Farbe)
        const mat = new THREE.MeshStandardMaterial({
            color: 0x60a5fa,
            roughness: 0.35,
            metalness: 0.25,
            emissive: new THREE.Color(0x1b4d9a),
            emissiveIntensity: 0.55
        });

        // InstancedMesh erstellen
        this.instancedMesh = new THREE.InstancedMesh(geo, mat, this.maxInstances);
        this.instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

        // Alle als unsichtbar starten
        for (let i = 0; i < this.maxInstances; i++) {
            this.freeIndices.push(i);
            this.hideInstance(i);
        }

        this.scene.add(this.instancedMesh);
    }

    /**
     * Fügt ein Trail-Segment hinzu
     */
    addSegment(id, position, rotation, scale, color) {
        if (this.freeIndices.length === 0) {
            // Kein Platz mehr - entferne ältestes Segment
            const oldestId = this.segmentData.keys().next().value;
            if (oldestId) this.removeSegment(oldestId);

            if (this.freeIndices.length === 0) {
                console.warn('Trail-Instance-Pool voll!');
                return null;
            }
        }

        const instanceIndex = this.freeIndices.pop();
        this.segmentData.set(id, instanceIndex);

        // Matrix erstellen
        const matrix = new THREE.Matrix4();
        matrix.compose(position, rotation, scale);

        this.instancedMesh.setMatrixAt(instanceIndex, matrix);

        // Optional: Farbe setzen (wenn unterschiedliche Farben pro Spieler)
        if (color) {
            this.instancedMesh.setColorAt(instanceIndex, new THREE.Color(color));
        }

        this.instancedMesh.instanceMatrix.needsUpdate = true;
        if (color && this.instancedMesh.instanceColor) {
            this.instancedMesh.instanceColor.needsUpdate = true;
        }

        this.activeCount++;
        return instanceIndex;
    }

    /**
     * Aktualisiert ein bestehendes Segment
     */
    updateSegment(id, position, rotation, scale) {
        const instanceIndex = this.segmentData.get(id);
        if (instanceIndex === undefined) return false;

        const matrix = new THREE.Matrix4();
        matrix.compose(position, rotation, scale);

        this.instancedMesh.setMatrixAt(instanceIndex, matrix);
        this.instancedMesh.instanceMatrix.needsUpdate = true;

        return true;
    }

    /**
     * Entfernt ein Segment
     */
    removeSegment(id) {
        const instanceIndex = this.segmentData.get(id);
        if (instanceIndex === undefined) return false;

        this.hideInstance(instanceIndex);
        this.segmentData.delete(id);
        this.freeIndices.push(instanceIndex);
        this.activeCount--;

        return true;
    }

    /**
     * Versteckt eine Instanz (skaliert auf 0)
     */
    hideInstance(index) {
        const matrix = new THREE.Matrix4();
        matrix.makeScale(0, 0, 0); // Unsichtbar durch 0-Skalierung

        this.instancedMesh.setMatrixAt(index, matrix);
        this.instancedMesh.instanceMatrix.needsUpdate = true;
    }

    /**
     * Löscht alle Segmente
     */
    clearAll() {
        this.segmentData.clear();
        this.freeIndices = [];

        for (let i = 0; i < this.maxInstances; i++) {
            this.freeIndices.push(i);
            this.hideInstance(i);
        }

        this.activeCount = 0;
    }

    /**
     * Statistik
     */
    getStats() {
        return {
            active: this.activeCount,
            free: this.freeIndices.length,
            total: this.maxInstances,
            usage: (this.activeCount / this.maxInstances * 100).toFixed(1) + '%'
        };
    }

    /**
     * Cleanup
     */
    dispose() {
        this.instancedMesh.geometry.dispose();
        this.instancedMesh.material.dispose();
        this.scene.remove(this.instancedMesh);
        this.segmentData.clear();
        this.freeIndices = [];
    }
}

/**
 * Helper: Erstellt Trail-Segment-Transform
 */
export function createTrailSegmentTransform(pointA, pointB, radius) {
    const dirV = new THREE.Vector3().subVectors(pointB, pointA);
    const len = dirV.length();

    if (len < 0.001) return null;

    // Position = Mittelpunkt
    const position = new THREE.Vector3()
        .addVectors(pointA, pointB)
        .multiplyScalar(0.5);

    // Rotation = Richtung von A nach B
    const up = new THREE.Vector3(0, 1, 0);
    const dirN = dirV.clone().normalize();
    const axis = new THREE.Vector3().crossVectors(up, dirN);
    const axisLen = axis.length();
    const angle = Math.acos(THREE.MathUtils.clamp(up.dot(dirN), -1, 1));

    const rotation = new THREE.Quaternion();
    if (axisLen > 1e-6) {
        axis.normalize();
        rotation.setFromAxisAngle(axis, angle);
    }

    // Scale = Radius + Länge
    const scale = new THREE.Vector3(radius, len, radius);

    return { position, rotation, scale };
}

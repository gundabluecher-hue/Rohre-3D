// ============================================
// Trail.js - Optimized 3D trail using InstancedMesh & Spatial Hashing
// ============================================

import * as THREE from 'three';
import { CONFIG } from './Config.js';

const UNIT_CYLINDER_GEOMETRY = new THREE.CylinderGeometry(1, 1, 1, 4);
const UP_AXIS = new THREE.Vector3(0, 1, 0);
const DUMMY = new THREE.Object3D();

// Spatial Hashing Config
const CELL_SIZE = 10;

export class Trail {
    constructor(renderer, color) {
        this.renderer = renderer;
        this.color = color;

        // Ring Buffer Logic
        this.maxSegments = CONFIG.TRAIL.MAX_SEGMENTS || 1400;
        this.writeIndex = 0;
        this.segmentCount = 0;
        this._dirty = false;

        // State
        this.timeSinceUpdate = 0;
        this.hasLastPosition = false;
        this.lastX = 0;
        this.lastY = 0;
        this.lastZ = 0;
        this.inGap = false;
        this.gapTimer = 0;
        this.width = CONFIG.TRAIL.WIDTH;
        this._tmpDir = new THREE.Vector3();

        // Material
        this.material = new THREE.MeshStandardMaterial({
            color: color,
            emissive: color,
            emissiveIntensity: 0.3,
            roughness: 0.3,
            metalness: 0.6,
        });

        // InstancedMesh
        this.mesh = new THREE.InstancedMesh(UNIT_CYLINDER_GEOMETRY, this.material, this.maxSegments);
        this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        this.mesh.castShadow = false;
        this.mesh.receiveShadow = false;
        this.mesh.frustumCulled = false;

        // Initial invisible matrices – DUMMY wiederverwenden statt neue Matrix4
        DUMMY.scale.set(0, 0, 0);
        DUMMY.updateMatrix();
        for (let i = 0; i < this.maxSegments; i++) {
            this.mesh.setMatrixAt(i, DUMMY.matrix);
        }

        this.renderer.addToScene(this.mesh);

        // Data & Spatial Grid
        this.segmentsData = new Float32Array(this.maxSegments * 7); // [x1, y1, z1, x2, y2, z2, radius]
        this.grid = new Map(); // Key: "x,z", Value: [segmentIndex, ...]
        this.segmentCells = new Int32Array(this.maxSegments); // Stores cell key hash for each segment
    }

    setWidth(width) {
        this.width = width;
    }

    resetWidth() {
        this.width = CONFIG.TRAIL.WIDTH;
    }

    forceGap(duration = 0.5) {
        this.inGap = true;
        this.gapTimer = duration;
        this.hasLastPosition = false;
    }

    update(dt, position, direction) {
        if (this.inGap) {
            this.gapTimer -= dt;
            if (this.gapTimer <= 0) {
                this.inGap = false;
            }
            this._setLastPosition(position);
            return;
        }

        this.timeSinceUpdate += dt;

        if (this.timeSinceUpdate >= CONFIG.TRAIL.UPDATE_INTERVAL) {
            this.timeSinceUpdate -= CONFIG.TRAIL.UPDATE_INTERVAL;

            if (Math.random() < CONFIG.TRAIL.GAP_CHANCE) {
                this.inGap = true;
                this.gapTimer = CONFIG.TRAIL.GAP_DURATION;
                this._setLastPosition(position);
                return;
            }

            if (this.hasLastPosition) {
                this._addSegment(this.lastX, this.lastY, this.lastZ, position.x, position.y, position.z);
            }
            this._setLastPosition(position);
        }

        // needsUpdate nur einmal pro Frame
        if (this._dirty) {
            this.mesh.count = Math.min(this.segmentCount, this.maxSegments);
            this.mesh.instanceMatrix.needsUpdate = true;
            this._dirty = false;
        }
    }

    _setLastPosition(position) {
        this.hasLastPosition = true;
        this.lastX = position.x;
        this.lastY = position.y;
        this.lastZ = position.z;
    }

    _getKey(x, z) {
        const cx = Math.floor(x / CELL_SIZE);
        const cz = Math.floor(z / CELL_SIZE);
        // Simple hash to integer to avoid string allocations
        return (cx + 1000) * 2000 + (cz + 1000);
    }

    _addSegment(fromX, fromY, fromZ, toX, toY, toZ) {
        const dx = toX - fromX;
        const dy = toY - fromY;
        const dz = toZ - fromZ;
        const length = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (length < 0.01) return;

        // Cleanup old segment from grid
        if (this.segmentCount >= this.maxSegments) {
            const oldKey = this.segmentCells[this.writeIndex];
            if (this.grid.has(oldKey)) {
                const arr = this.grid.get(oldKey);
                const idx = arr.indexOf(this.writeIndex);
                if (idx !== -1) {
                    // Fast remove: swap with last and pop
                    const last = arr[arr.length - 1];
                    arr[idx] = last;
                    arr.pop();
                }
                if (arr.length === 0) this.grid.delete(oldKey);
            }
        }

        const radius = this.width * 0.5;
        const midX = (fromX + toX) * 0.5;
        const midY = (fromY + toY) * 0.5;
        const midZ = (fromZ + toZ) * 0.5;

        // Visual InstancedMesh
        DUMMY.position.set(midX, midY, midZ);
        this._tmpDir.set(dx / length, dy / length, dz / length);
        DUMMY.quaternion.setFromUnitVectors(UP_AXIS, this._tmpDir);
        DUMMY.scale.set(radius, length, radius);
        DUMMY.updateMatrix();

        this.mesh.setMatrixAt(this.writeIndex, DUMMY.matrix);
        this._dirty = true;

        // Data Storage
        const offset = this.writeIndex * 7;
        this.segmentsData[offset] = fromX;
        this.segmentsData[offset + 1] = fromY;
        this.segmentsData[offset + 2] = fromZ;
        this.segmentsData[offset + 3] = toX;
        this.segmentsData[offset + 4] = toY;
        this.segmentsData[offset + 5] = toZ;
        this.segmentsData[offset + 6] = radius;

        // Register in Spatial Hashing Grid
        const key = this._getKey(midX, midZ);
        if (!this.grid.has(key)) {
            this.grid.set(key, []);
        }
        this.grid.get(key).push(this.writeIndex);
        this.segmentCells[this.writeIndex] = key;

        // Increment Ring Buffer
        this.writeIndex = (this.writeIndex + 1) % this.maxSegments;
        if (this.segmentCount < this.maxSegments) {
            this.segmentCount++;
        }
    }

    checkCollision(position, radius, skipRecent = 20) {
        if (this.segmentCount === 0) return false;

        const cellX = Math.floor(position.x / CELL_SIZE);
        const cellZ = Math.floor(position.z / CELL_SIZE);

        // Iterate 3x3 neighbor cells
        for (let dx = -1; dx <= 1; dx++) {
            for (let dz = -1; dz <= 1; dz++) {
                const cx = cellX + dx;
                const cz = cellZ + dz;
                const key = (cx + 1000) * 2000 + (cz + 1000); // Must match _getKey logic

                const indices = this.grid.get(key);
                if (!indices) continue;

                for (let i = 0; i < indices.length; i++) {
                    const idx = indices[i];

                    // Skip Recent Segments (Ring Buffer Distance)
                    // Calculates distance backwards from writeIndex
                    let dist = (this.writeIndex - 1 - idx + this.maxSegments) % this.maxSegments;
                    if (dist < skipRecent) continue;

                    const offset = idx * 7;
                    const segRadius = this.segmentsData[offset + 6];
                    const totalRadius = radius + segRadius;

                    // Fast AABB Check
                    const x1 = this.segmentsData[offset];
                    const x2 = this.segmentsData[offset + 3];
                    const minX = (x1 < x2 ? x1 : x2) - segRadius;
                    const maxX = (x1 > x2 ? x1 : x2) + segRadius;
                    if (position.x < minX || position.x > maxX) continue;

                    const z1 = this.segmentsData[offset + 2];
                    const z2 = this.segmentsData[offset + 5];
                    const minZ = (z1 < z2 ? z1 : z2) - segRadius;
                    const maxZ = (z1 > z2 ? z1 : z2) + segRadius;
                    if (position.z < minZ || position.z > maxZ) continue;

                    // Inline calculation to get 't' for normal
                    const fromX = this.segmentsData[offset];
                    const fromY = this.segmentsData[offset + 1];
                    const fromZ = this.segmentsData[offset + 2];
                    const toX = this.segmentsData[offset + 3];
                    const toY = this.segmentsData[offset + 4];
                    const toZ = this.segmentsData[offset + 5];

                    const vx = toX - fromX;
                    const vy = toY - fromY;
                    const vz = toZ - fromZ;
                    const wx = position.x - fromX;
                    const wy = position.y - fromY;
                    const wz = position.z - fromZ;

                    const lenSq = vx * vx + vy * vy + vz * vz;
                    let t = 0;
                    if (lenSq > 0.000001) {
                        t = (wx * vx + wy * vy + wz * vz) / lenSq;
                        if (t < 0) t = 0;
                        else if (t > 1) t = 1;
                    }

                    const cx = fromX + t * vx;
                    const cy = fromY + t * vy;
                    const cz = fromZ + t * vz;

                    const dx = position.x - cx;
                    const dy = position.y - cy;
                    const dz = position.z - cz;
                    const distSq = dx * dx + dy * dy + dz * dz;

                    if (distSq <= totalRadius * totalRadius) {
                        // Avoid zero length normal
                        const len = Math.sqrt(distSq) || 0.001;
                        const normal = new THREE.Vector3(dx / len, dy / len, dz / len);
                        return { hit: true, normal };
                    }
                }
            }
        }
        return false;
    }

    _distanceSqPointToSegment(px, py, pz, fromX, fromY, fromZ, toX, toY, toZ) {
        const vx = toX - fromX;
        const vy = toY - fromY;
        const vz = toZ - fromZ;
        const wx = px - fromX;
        const wy = py - fromY;
        const wz = pz - fromZ;

        const lenSq = vx * vx + vy * vy + vz * vz;
        if (lenSq <= 0.000001) return wx * wx + wy * wy + wz * wz;

        let t = (wx * vx + wy * vy + wz * vz) / lenSq;
        if (t < 0) t = 0;
        else if (t > 1) t = 1;

        const cx = fromX + t * vx;
        const cy = fromY + t * vy;
        const cz = fromZ + t * vz;

        const dx = px - cx;
        const dy = py - cy;
        const dz = pz - cz;
        return dx * dx + dy * dy + dz * dz;
    }

    clear() {
        DUMMY.scale.set(0, 0, 0);
        DUMMY.updateMatrix();
        for (let i = 0; i < this.maxSegments; i++) {
            this.mesh.setMatrixAt(i, DUMMY.matrix);
        }
        this.mesh.instanceMatrix.needsUpdate = true;
        this.mesh.count = 0;

        this.writeIndex = 0;
        this.segmentCount = 0;
        this.hasLastPosition = false;
        this.timeSinceUpdate = 0;
        this.inGap = false;

        this.grid.clear();
        this.segmentCells.fill(0);
    }

    dispose() {
        this.renderer.removeFromScene(this.mesh);
        this.mesh.dispose();
        this.material.dispose();
    }
}

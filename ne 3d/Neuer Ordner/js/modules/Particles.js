// ============================================
// Particles.js - Optimized Particle System (InstancedMesh)
// ============================================

import * as THREE from 'three';

const MAX_PARTICLES = 1000;
const DUMMY = new THREE.Object3D();

export class ParticleSystem {
    constructor(renderer) {
        this.renderer = renderer;
        this.count = 0;

        // Data arrays (Structure of Arrays for cache locality)
        this.positions = new Float32Array(MAX_PARTICLES * 3);
        this.velocities = new Float32Array(MAX_PARTICLES * 3);
        this.lifetimes = new Float32Array(MAX_PARTICLES);
        this.maxLifetimes = new Float32Array(MAX_PARTICLES);
        this.gravities = new Float32Array(MAX_PARTICLES);
        this.scales = new Float32Array(MAX_PARTICLES);

        // Color tracking (InstanceColor is stored on GPU, but we need CPU copy for compaction)
        this.colors = new Float32Array(MAX_PARTICLES * 3);

        // Geometry & Material
        const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 1.0,
        });

        this.mesh = new THREE.InstancedMesh(geometry, material, MAX_PARTICLES);
        this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        this.mesh.count = 0;

        this.renderer.addToScene(this.mesh);
        this._tmpColor = new THREE.Color();
    }

    spawn(position, count, color, speed = 1.0, size = 0.5, life = 1.0) {
        this._tmpColor.setHex(color);

        for (let i = 0; i < count; i++) {
            if (this.count >= MAX_PARTICLES) return;

            const idx = this.count;
            this.count++;

            // Position
            this.positions[idx * 3] = position.x;
            this.positions[idx * 3 + 1] = position.y;
            this.positions[idx * 3 + 2] = position.z;

            // Velocity
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = speed * (0.5 + Math.random() * 0.5);

            this.velocities[idx * 3] = r * Math.sin(phi) * Math.cos(theta);
            this.velocities[idx * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            this.velocities[idx * 3 + 2] = r * Math.cos(phi);

            // Properties
            this.lifetimes[idx] = life * (0.8 + Math.random() * 0.4);
            this.maxLifetimes[idx] = this.lifetimes[idx];
            this.gravities[idx] = -5.0; // Stronger gravity for punchy feel
            this.scales[idx] = size * (0.5 + Math.random() * 0.5);

            // Color
            this.colors[idx * 3] = this._tmpColor.r;
            this.colors[idx * 3 + 1] = this._tmpColor.g;
            this.colors[idx * 3 + 2] = this._tmpColor.b;

            // Set initial color
            this.mesh.setColorAt(idx, this._tmpColor);

            // Set initial matrix
            DUMMY.position.set(this.positions[idx * 3], this.positions[idx * 3 + 1], this.positions[idx * 3 + 2]);
            DUMMY.scale.setScalar(this.scales[idx]);
            DUMMY.updateMatrix();
            this.mesh.setMatrixAt(idx, DUMMY.matrix);
        }

        this.mesh.instanceMatrix.needsUpdate = true;
        if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
    }

    spawnExplosion(position, color) {
        this.spawn(position, 30, color, 12.0, 0.7, 0.6);
    }

    spawnHit(position, color) {
        this.spawn(position, 10, color, 6.0, 0.4, 0.3);
    }

    update(dt) {
        if (this.count === 0) {
            this.mesh.count = 0;
            return;
        }

        let aliveCount = 0;
        let dirtyColor = false;

        for (let i = 0; i < this.count; i++) {
            this.lifetimes[i] -= dt;

            if (this.lifetimes[i] > 0) {
                // Determine source index (i) and target index (aliveCount)
                // If i == aliveCount, just update in place.
                // If i > aliveCount, we move i to aliveCount (compaction).

                const srcIdx3 = i * 3;
                const dstIdx3 = aliveCount * 3;

                // Physics Update
                this.velocities[srcIdx3 + 1] += this.gravities[i] * dt;

                this.positions[srcIdx3] += this.velocities[srcIdx3] * dt;
                this.positions[srcIdx3 + 1] += this.velocities[srcIdx3 + 1] * dt;
                this.positions[srcIdx3 + 2] += this.velocities[srcIdx3 + 2] * dt;

                // Compaction: Move data if needed
                if (i !== aliveCount) {
                    this.positions[dstIdx3] = this.positions[srcIdx3];
                    this.positions[dstIdx3 + 1] = this.positions[srcIdx3 + 1];
                    this.positions[dstIdx3 + 2] = this.positions[srcIdx3 + 2];

                    this.velocities[dstIdx3] = this.velocities[srcIdx3];
                    this.velocities[dstIdx3 + 1] = this.velocities[srcIdx3 + 1];
                    this.velocities[dstIdx3 + 2] = this.velocities[srcIdx3 + 2];

                    this.lifetimes[aliveCount] = this.lifetimes[i];
                    this.maxLifetimes[aliveCount] = this.maxLifetimes[i];
                    this.gravities[aliveCount] = this.gravities[i];
                    this.scales[aliveCount] = this.scales[i];

                    this.colors[dstIdx3] = this.colors[srcIdx3];
                    this.colors[dstIdx3 + 1] = this.colors[srcIdx3 + 1];
                    this.colors[dstIdx3 + 2] = this.colors[srcIdx3 + 2];

                    // Update instance color at new index
                    this._tmpColor.setRGB(this.colors[dstIdx3], this.colors[dstIdx3 + 1], this.colors[dstIdx3 + 2]);
                    this.mesh.setColorAt(aliveCount, this._tmpColor);
                    dirtyColor = true;
                }

                // Render Update
                DUMMY.position.set(this.positions[dstIdx3], this.positions[dstIdx3 + 1], this.positions[dstIdx3 + 2]);

                // Rotate based on velocity direction or just spin
                DUMMY.rotation.x += this.velocities[dstIdx3 + 2] * dt;
                DUMMY.rotation.y += this.velocities[dstIdx3] * dt;

                const scale = this.scales[aliveCount] * (this.lifetimes[aliveCount] / this.maxLifetimes[aliveCount]);
                DUMMY.scale.setScalar(scale);
                DUMMY.updateMatrix();

                this.mesh.setMatrixAt(aliveCount, DUMMY.matrix);

                aliveCount++;
            }
        }

        this.count = aliveCount;
        this.mesh.count = aliveCount;
        this.mesh.instanceMatrix.needsUpdate = true;
        if (dirtyColor && this.mesh.instanceColor) {
            this.mesh.instanceColor.needsUpdate = true;
        }
    }

    clear() {
        this.count = 0;
        this.mesh.count = 0;
    }
}

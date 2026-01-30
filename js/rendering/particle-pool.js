/**
 * PARTICLE-POOL.JS - Object-Pooling für Partikel
 * Wiederverwendung von Partikel-Objekten statt ständiger Neu-Erstellung
 */

import { rand } from '../core/utils.js';

/**
 * Einzelnes Partikel
 */
class Particle {
    constructor() {
        this.pos = new THREE.Vector3();
        this.vel = new THREE.Vector3();
        this.color = new THREE.Color();
        this.life = 0;
        this.maxLife = 1;
        this.size = 1;
        this.active = false;
        this.mesh = null;
    }

    /**
     * Initialisiert Partikel mit neuen Werten
     */
    spawn(pos, vel, color, life, size) {
        this.pos.copy(pos);
        this.vel.copy(vel);
        this.color.set(color);
        this.life = 0;
        this.maxLife = life;
        this.size = size;
        this.active = true;
    }

    /**
     * Update pro Frame
     */
    update(dt) {
        if (!this.active) return false;

        this.life += dt;
        if (this.life >= this.maxLife) {
            this.active = false;
            return false;
        }

        // Bewegung
        this.pos.addScaledVector(this.vel, dt);

        // Gravity (optional)
        this.vel.y -= 98 * dt; // 98 = Erdbeschleunigung (angepasst)

        // Update Mesh
        if (this.mesh) {
            this.mesh.position.copy(this.pos);

            // Fade-out
            const alpha = 1 - (this.life / this.maxLife);
            this.mesh.material.opacity = alpha;

            // Shrink
            const scale = alpha * this.size;
            this.mesh.scale.setScalar(scale);
        }

        return true;
    }

    /**
     * Deaktiviert Partikel
     */
    kill() {
        this.active = false;
        if (this.mesh) {
            this.mesh.visible = false;
        }
    }
}

/**
 * Partikel-Pool Manager
 */
export class ParticlePool {
    constructor(scene, poolSize = 1000) {
        this.scene = scene;
        this.poolSize = poolSize;
        this.pool = [];
        this.activeParticles = [];
        this.group = new THREE.Group();

        this.scene.add(this.group);
        this.init();
    }

    /**
     * Erstellt Pool mit Partikeln
     */
    init() {
        const geo = new THREE.SphereGeometry(1, 8, 8);

        for (let i = 0; i < this.poolSize; i++) {
            const particle = new Particle();

            // Mesh erstellen
            const mat = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 1,
                depthWrite: false
            });

            const mesh = new THREE.Mesh(geo, mat);
            mesh.visible = false;
            this.group.add(mesh);

            particle.mesh = mesh;
            this.pool.push(particle);
        }
    }

    /**
     * Spawnt ein neues Partikel
     */
    spawn(pos, vel, color = 0xffffff, life = 1.0, size = 5) {
        let particle = this.pool.pop();

        if (!particle) {
            // Pool leer - recycele ältestes aktives Partikel
            if (this.activeParticles.length > 0) {
                particle = this.activeParticles.shift();
                particle.kill();
            } else {
                console.warn('Partikel-Pool komplett voll!');
                return null;
            }
        }

        particle.spawn(pos, vel, color, life, size);
        particle.mesh.visible = true;
        particle.mesh.material.color.set(color);

        this.activeParticles.push(particle);

        return particle;
    }

    /**
     * Spawnt einen Burst (viele Partikel auf einmal)
     */
    spawnBurst(pos, count = 20, color = 0xffffff, speed = 200, life = 0.8, size = 4) {
        for (let i = 0; i < count; i++) {
            const vel = new THREE.Vector3(
                rand(-1, 1),
                rand(-0.5, 1),
                rand(-1, 1)
            ).normalize().multiplyScalar(speed);

            this.spawn(
                pos,
                vel,
                color,
                rand(life * 0.7, life * 1.3),
                rand(size * 0.7, size * 1.3)
            );
        }
    }

    /**
     * Update aller aktiven Partikel
     */
    update(dt) {
        for (let i = this.activeParticles.length - 1; i >= 0; i--) {
            const particle = this.activeParticles[i];

            if (!particle.update(dt)) {
                // Partikel ist tot - zurück in Pool
                particle.kill();
                this.activeParticles.splice(i, 1);
                this.pool.push(particle);
            }
        }
    }

    /**
     * Löscht alle aktiven Partikel
     */
    clearAll() {
        this.activeParticles.forEach(p => {
            p.kill();
            this.pool.push(p);
        });
        this.activeParticles = [];
    }

    /**
     * Statistik
     */
    getStats() {
        return {
            active: this.activeParticles.length,
            pooled: this.pool.length,
            total: this.poolSize,
            usage: (this.activeParticles.length / this.poolSize * 100).toFixed(1) + '%'
        };
    }

    /**
     * Cleanup
     */
    dispose() {
        this.pool.forEach(p => {
            if (p.mesh) {
                p.mesh.geometry.dispose();
                p.mesh.material.dispose();
            }
        });

        this.scene.remove(this.group);
        this.pool = [];
        this.activeParticles = [];
    }
}

/**
 * Vordefinierte Particle-Effects
 */
export const ParticleEffects = {
    /**
     * Explosion
     */
    explosion: (pool, pos, color = 0xff6600) => {
        pool.spawnBurst(pos, 30, color, 250, 0.8, 6);
    },

    /**
     * Collision Spark
     */
    spark: (pool, pos, color = 0xffffff) => {
        pool.spawnBurst(pos, 15, color, 180, 0.5, 3);
    },

    /**
     * Power-Up sammeln
     */
    powerup: (pool, pos, color = 0x60a5fa) => {
        pool.spawnBurst(pos, 25, color, 200, 1.0, 5);
    },

    /**
     * Trail-Rauch
     */
    smoke: (pool, pos, color = 0x666666) => {
        pool.spawn(
            pos,
            new THREE.Vector3(rand(-20, 20), rand(-10, 30), rand(-20, 20)),
            color,
            1.5,
            8
        );
    }
};

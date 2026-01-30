/**
 * PROJECTILE-SYSTEM.JS - Projektil-Verwaltung mit Item-Support
 * Integriert Flugzeug-Mündung und visuelle Effekte
 */

import { CONFIG } from '../core/config.js';
import { generateId } from '../core/utils.js';
import { createEnhancedProjectile, spawnMuzzleFlash, ProjectileTrail, spawnHitEffect } from './projectile-effects.js';

export class ProjectileSystem {
    constructor(scene, particlePool) {
        this.scene = scene;
        this.particlePool = particlePool;
        this.projectiles = [];
        this.projectileGroup = new THREE.Group();
        this.scene.add(this.projectileGroup);
    }

    /**
     * Schießt ein Projektil vom Spieler
     */
    shoot(player, powerType, audioSystem) {
        const nowT = performance.now() / 1000;

        // Cooldown prüfen
        if (nowT < player.shotCooldownUntil) {
            return false;
        }

        if (!powerType) {
            if (audioSystem) audioSystem.playError();
            return false;
        }

        // === Mündungsposition ===
        let muzzlePos, direction;

        if (player.aircraftMesh) {
            // Von Flugzeug-Kanone
            muzzlePos = player.aircraftMesh.getMuzzlePosition();
            direction = player.aircraftMesh.getMuzzleDirection();
        } else {
            // Fallback: Von Spieler-Position
            muzzlePos = player.pos.clone();
            direction = player.getForwardVector();
        }

        // === Projektil erstellen ===
        const projMesh = createEnhancedProjectile(
            powerType.color,
            powerType.icon || '●',
            CONFIG.PROJECTILE_RADIUS
        );
        projMesh.position.copy(muzzlePos);
        this.projectileGroup.add(projMesh);

        // === Trail-System ===
        const trail = new ProjectileTrail(this.particlePool, powerType.color);

        // === Projektil-Daten ===
        const projectile = {
            id: generateId('proj'),
            pos: muzzlePos.clone(),
            vel: direction.clone().multiplyScalar(CONFIG.PROJECTILE_SPEED),
            owner: player.id,
            powerType: powerType,
            mesh: projMesh,
            trail: trail,
            bornAt: nowT,
            expiresAt: nowT + CONFIG.PROJECTILE_LIFETIME
        };

        this.projectiles.push(projectile);

        // === Effekte ===
        spawnMuzzleFlash(this.scene, muzzlePos, powerType.color);

        if (audioSystem) {
            audioSystem.playShoot();
        }

        // === Cooldown ===
        player.shotCooldownUntil = nowT + CONFIG.PROJECTILE_COOLDOWN;

        return true;
    }

    /**
     * Update alle Projektile
     */
    update(dt, players, obstacles, applyEffectCallback) {
        const nowT = performance.now() / 1000;

        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const proj = this.projectiles[i];

            // Bewegung
            proj.pos.addScaledVector(proj.vel, dt);
            proj.mesh.position.copy(proj.pos);

            // Sprite Billboard (immer zur Kamera)
            if (proj.mesh.userData.sprite) {
                // Sprite rotiert automatisch zur Kamera (Sprite-Verhalten)
            }

            // Trail updaten
            if (proj.trail) {
                proj.trail.update(proj.pos, dt);
            }

            // Ablauf-Zeit
            if (nowT > proj.expiresAt) {
                this.removeProjectile(i);
                continue;
            }

            // Arena-Grenzen
            if (this.isOutOfBounds(proj.pos)) {
                this.removeProjectile(i);
                continue;
            }

            // Kollision mit Spielern
            let hit = false;
            for (const target of players) {
                if (target.id === proj.owner || !target.alive) continue;
                if (hit) break;

                const dist = proj.pos.distanceTo(target.pos);
                const hitRadius = CONFIG.PROJECTILE_RADIUS + CONFIG.HEAD_RADIUS + 5;

                if (dist <= hitRadius) {
                    // TREFFER!
                    spawnHitEffect(
                        this.scene,
                        this.particlePool,
                        target.pos,
                        proj.powerType.color,
                        target
                    );

                    // Effekt anwenden
                    if (applyEffectCallback) {
                        applyEffectCallback(target, proj.powerType);
                    }

                    this.removeProjectile(i);
                    hit = true;
                    break;
                }
            }

            if (hit) continue;

            // Kollision mit Hindernissen (optional)
            if (obstacles) {
                for (const obstacle of obstacles) {
                    const dist = proj.pos.distanceTo(obstacle.mesh.position);

                    if (dist <= CONFIG.PROJECTILE_RADIUS + obstacle.radius) {
                        if (obstacle.type === 'hard') {
                            // Hartes Hindernis - Projektil zerstört
                            this.removeProjectile(i);
                            hit = true;
                            break;
                        }
                        // Foam = durchfliegen
                    }
                }
            }
        }
    }

    /**
     * Prüft ob Position außerhalb Arena
     */
    isOutOfBounds(pos) {
        const halfW = CONFIG.ARENA_W / 2 - CONFIG.WALL_MARGIN;
        const halfH = CONFIG.ARENA_H - CONFIG.WALL_MARGIN;
        const halfD = CONFIG.ARENA_D / 2 - CONFIG.WALL_MARGIN;

        return (
            pos.x < -halfW || pos.x > halfW ||
            pos.z < -halfD || pos.z > halfD ||
            pos.y < CONFIG.WALL_MARGIN || pos.y > halfH
        );
    }

    /**
     * Entfernt ein Projektil
     */
    removeProjectile(index) {
        const proj = this.projectiles[index];
        if (!proj) return;

        this.projectileGroup.remove(proj.mesh);

        // Cleanup Mesh
        proj.mesh.traverse(obj => {
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) {
                if (Array.isArray(obj.material)) {
                    obj.material.forEach(m => m.dispose());
                } else {
                    obj.material.dispose();
                }
            }
        });

        this.projectiles.splice(index, 1);
    }

    /**
     * Entfernt alle Projektile
     */
    clearAll() {
        while (this.projectiles.length > 0) {
            this.removeProjectile(0);
        }
    }

    /**
     * Cleanup
     */
    dispose() {
        this.clearAll();
        this.scene.remove(this.projectileGroup);
    }
}

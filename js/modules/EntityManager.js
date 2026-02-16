import * as THREE from 'three';
import { Player } from '../entities/player.js';
import { AircraftMesh } from '../entities/aircraft-mesh.js';
import { CONFIG, POWER_TYPES, POWER_MULT } from './Config.js';
import { updateBot } from '../bot.js';

export class EntityManager {
    constructor(scene) {
        this.scene = scene;
        this.players = [];
        this.powers = [];
        this.projectiles = [];
        this.particles = [];
        this.arena = null; // Set via setArena

        // Groups
        this.powerGroup = new THREE.Group();
        this.scene.add(this.powerGroup);

        this.projectileGroup = new THREE.Group();
        this.scene.add(this.projectileGroup);

        this.particleGroup = new THREE.Group();
        this.scene.add(this.particleGroup);

        // Assets
        this.projectileGeo = new THREE.SphereGeometry(CONFIG.PROJECTILE_RADIUS, 8, 8);
        this.projectileMat = new THREE.MeshBasicMaterial({ color: 0xff3333 });
    }

    setArena(arena) {
        this.arena = arena;
    }

    initPlayers(count, useBot2) {
        // Clear existing
        this.players.forEach(p => {
            p.dispose();
            if (p.aircraftMesh) this.scene.remove(p.aircraftMesh);
            if (p.trailGroup) this.scene.remove(p.trailGroup);
            if (p.shieldMesh) this.scene.remove(p.shieldMesh);
        });
        this.players.length = 0;

        // Create P1
        const p1 = new Player(1);
        p1.aircraftMesh = new AircraftMesh(p1.color);
        this.scene.add(p1.aircraftMesh);
        this.scene.add(p1.trailGroup);
        if (p1.shieldMesh) this.scene.add(p1.shieldMesh);
        this.players.push(p1);

        // Create P2 if needed
        if (count > 1) {
            const p2 = new Player(2);
            p2.aircraftMesh = new AircraftMesh(p2.color);
            this.scene.add(p2.aircraftMesh);
            this.scene.add(p2.trailGroup);
            if (p2.shieldMesh) this.scene.add(p2.shieldMesh);

            // Bot Setup
            const chkBot2 = document.getElementById("chkBot2"); // Check if element exists
            // Or assume passed arg
            p2.isBot = useBot2; //|| (chkBot2 && chkBot2.checked);

            this.players.push(p2);
        }

        return this.players;
    }

    updatePlayers(dt, inputManager) {
        // count valid players for win condition check later
        let aliveCount = 0;

        this.players.forEach(p => {
            if (!p.alive) {
                if (p.aircraftMesh) p.aircraftMesh.visible = false;
                if (p.shieldMesh) p.shieldMesh.visible = false;
                return;
            }
            aliveCount++;

            // 1. INPUT
            if (p.isBot) {
                // Determine opponent
                const opponent = this.players.find(op => op.id !== p.id);
                // We need obstacleGroup for bot raycasting
                // Assuming arena has obstacleGroup
                updateBot(p, opponent, dt, this.arena ? this.arena.obstacleGroup : null);
            } else {
                this.handlePlayerInput(p, dt, inputManager);
            }

            // 2. PHYSICS & MOVEMENT
            this.updatePlayerPhysics(p, dt);

            // 3. COLLISIONS
            this.checkCollisions(p);

            // 4. TRAILS
            this.updatePlayerTrail(p, dt);

            // 5. VISUALS
            p.updateMesh();
        });
    }

    handlePlayerInput(p, dt, inputManager) {
        const keys = inputManager.getKeysFor(p.id);
        const held = (code) => inputManager.isKeyDown(code);

        const snap90 = document.getElementById("chkSnap90")?.checked;
        const autoRoll = document.getElementById("chkAutoRoll")?.checked;
        const invert1 = document.getElementById("chkInvertPitch1")?.checked;
        const invert2 = document.getElementById("chkInvertPitch2")?.checked;
        const invert = (p.id === 1) ? invert1 : invert2;

        let rawYaw = 0, rawPitch = 0, rawRoll = 0;

        if (!snap90) {
            rawYaw = (held(keys.left) ? 1 : 0) + (held(keys.right) ? -1 : 0);
            rawPitch = (held(keys.up) ? 1 : 0) + (held(keys.down) ? -1 : 0);
        }

        if (invert) rawPitch *= -1;

        // Invert Item Effect
        // Implement invert effect check based on time passed to p
        // ...

        // Auto Roll Logic
        if (autoRoll) {
            const f = p.getForwardVector();
            const worldUp = new THREE.Vector3(0, 1, 0);
            const dotFU = f.dot(worldUp);
            if (Math.abs(dotFU) < 0.97) {
                const r = p.getRightVector();
                let rightBase = new THREE.Vector3().crossVectors(f, worldUp);
                if (rightBase.lengthSq() > 1e-6) {
                    rightBase.normalize();
                    const rightInv = rightBase.clone().multiplyScalar(-1);
                    const dotU = Math.max(-1, Math.min(1, r.dot(rightBase)));
                    const dotI = Math.max(-1, Math.min(1, r.dot(rightInv)));
                    const angleU = Math.acos(dotU);
                    const angleI = Math.acos(dotI);
                    const useInv = angleI < angleU;
                    const angleErr = useInv ? angleI : angleU;

                    if (angleErr > 0.02) {
                        const targetRight = useInv ? rightInv : rightBase;
                        const axis = new THREE.Vector3().crossVectors(r, targetRight);
                        const sign = Math.sign(f.dot(axis));
                        // rngAutoRoll value? Should act as strength
                        const strength = parseFloat(document.getElementById("rngAutoRoll")?.value || "6") / 10;
                        // Clamp
                        const maxTurn = CONFIG.ROLL_RATE * dt * strength;
                        // Fix logic: we want roll target not direct roll add
                        // But here we are setting rawRoll target? No, rawRoll is input strength [-1, 1].
                        // Let's just set rawRoll based on error.
                        rawRoll = Math.max(-1, Math.min(1, sign * (angleErr / (Math.PI / 2)) * strength * 5));
                    }
                }
            }
        } else {
            rawRoll = (held(keys.rollL) ? -1 : 0) + (held(keys.rollR) ? 1 : 0);
        }

        p.yawTarget = rawYaw;
        p.pitchTarget = rawPitch;
        p.rollTarget = rawRoll;

        // Actions
        if (held(keys.shoot)) this.shootProjectile(p);

        // Boost
        if (held(keys.boost) && p.boostCharge > 0.05) {
            p.boostActive = true;
        } else {
            p.boostActive = false;
        }
    }

    updatePlayerPhysics(p, dt) {
        // Boost Logic
        if (p.boostActive) {
            p.boostCharge -= CONFIG.BOOST_CONSUME_RATE * dt;
            if (p.boostCharge <= 0) { p.boostCharge = 0; p.boostActive = false; }
        } else {
            p.boostCharge += CONFIG.BOOST_RECHARGE_RATE * dt;
            if (p.boostCharge > 1) p.boostCharge = 1;
        }
        p.boostFactor = p.boostActive ? CONFIG.BOOST_MULT : 1;

        // Input Smoothing
        p.yawInput += (p.yawTarget - p.yawInput) * CONFIG.INPUT_SMOOTH;
        p.pitchInput += (p.pitchTarget - p.pitchInput) * CONFIG.INPUT_SMOOTH;
        p.rollInput += (p.rollTarget - p.rollInput) * CONFIG.INPUT_SMOOTH;

        // Rotation
        const up = p.getUpVector();
        const right = p.getRightVector(); // Legacy used BASE_RIGHT applied quat, same thing
        const fwd = p.getForwardVector();

        // Use CONFIG values for rates
        // We need yawRateRadPerSec function or calc locally
        const speed = this.getSpeed(p);
        // Empiric turn rate scaling based on speed?
        // Legacy: yawRateRadPerSec() => map(speed to index in SPEED_MAP) -> turn rate
        // Let's simplified version:
        const turnSpeedConfig = 2.5; // rad/sec base

        const qYaw = new THREE.Quaternion().setFromAxisAngle(up, p.yawInput * turnSpeedConfig * dt);
        const qPitch = new THREE.Quaternion().setFromAxisAngle(right, p.pitchInput * turnSpeedConfig * dt);
        const qRoll = new THREE.Quaternion().setFromAxisAngle(fwd, p.rollInput * CONFIG.ROLL_RATE * dt);

        p.q.premultiply(qYaw);
        p.q.premultiply(qPitch);
        p.q.premultiply(qRoll);
        p.q.normalize();

        // Move
        p.pos.addScaledVector(fwd, speed * dt);
    }

    getSpeed(p) {
        // Base Speed from slider
        const baseSpeed = parseFloat(document.getElementById("rngSpeed")?.value || "22");
        return baseSpeed * CONFIG.SPEED_MULT * p.mod.speed * p.boostFactor;
    }

    checkCollisions(p) {
        if (!this.arena) return;

        // 1. Bounds
        const halfW = CONFIG.ARENA_W / 2 - CONFIG.WALL_MARGIN;
        const halfD = CONFIG.ARENA_D / 2 - CONFIG.WALL_MARGIN;
        const h = CONFIG.ARENA_H - CONFIG.WALL_MARGIN;

        if (p.pos.x < -halfW || p.pos.x > halfW || p.pos.z < -halfD || p.pos.z > halfD || p.pos.y < CONFIG.WALL_MARGIN || p.pos.y > h) {
            // Check Portals (Grace logic)
            // Simplified: just kill if out bounds for now, add portal grace later if needed
            // But we need portal teleport logic!
            const teleported = this.tryPortalTeleport(p);
            if (!teleported) {
                // Creating simple bounds check
                p.alive = false;
                this.spawnBurst(p.pos, p.color);
                return;
            }
        }

        // 2. Tunnels
        const tCol = this.arena.checkTunnelCollision(p.pos);
        if (tCol.hit) {
            p.alive = false;
            this.spawnBurst(p.pos, p.color);
            return;
        }

        // 3. Obstacles
        const oCol = this.arena.checkObstacleCollision(p.pos);
        if (oCol.hit) {
            if (oCol.type === "hard") {
                if (p.shielded) {
                    p.shielded = false;
                    // remove visual effect
                    if (p.shieldMesh) p.shieldMesh.visible = false;
                    // Bump back?
                } else {
                    p.alive = false;
                    this.spawnBurst(p.pos, p.color);
                }
            } else {
                // Foam bounce logic
                // Call a method to handle bounce
                this.applyFoamBounce(p, oCol.obstacle);
            }
        }
    }

    updatePlayerTrail(p, dt) {
        // ... Logic to add segments to p.trailGroup ...
        // Simplified for this step: Just update lastSegPoint
        const dist = p.lastSegPoint.distanceTo(p.pos);
        if (dist >= CONFIG.SEGMENT_LEN_TARGET) {
            this.addTubeSegment(p, p.lastSegPoint.clone(), p.pos.clone());
            p.lastSegPoint.copy(p.pos);
        }
    }

    addTubeSegment(p, A, B) {
        const r = CONFIG.TUBE_RADIUS_BASE * p.mod.thickness;
        const dir = new THREE.Vector3().subVectors(B, A);
        const len = dir.length();
        if (len < 0.1) return;

        const geo = new THREE.CylinderGeometry(r, r, len, 8, 1, false);
        const mesh = new THREE.Mesh(geo, p.trailMat);
        const mid = new THREE.Vector3().addVectors(A, B).multiplyScalar(0.5);
        mesh.position.copy(mid);

        const up = new THREE.Vector3(0, 1, 0);
        const dirN = dir.normalize();

        // Proper orientation (cylinder defaults to Y axis)
        const q = new THREE.Quaternion().setFromUnitVectors(up, dirN);
        mesh.quaternion.copy(q);

        p.trailGroup.add(mesh);
        p.segments.push({ mesh });

        if (p.segments.length > CONFIG.MAX_SEGMENTS) {
            const old = p.segments.shift();
            p.trailGroup.remove(old.mesh);
            old.mesh.geometry.dispose();
        }
    }

    tryPortalTeleport(p) {
        if (!this.arena) return false;
        // Check portals
        for (const port of this.arena.portals) {
            const dist = p.pos.distanceTo(port.pos);
            if (dist < port.radius) {
                // Check Partner
                if (port.partnerIndex !== undefined && this.arena.portals[port.partnerIndex]) {
                    const partner = this.arena.portals[port.partnerIndex];
                    // Teleport!
                    // Offset slightly to avoid immediate re-trigger
                    p.pos.copy(partner.pos).addScaledVector(partner.exitDir, 40);
                    // Rotate velocity/orientation? 
                    // Simple implementation: Maintain relative orientation to portal normal
                    // Or just keep orientation if portals are aligned.
                    // Legacy code didn't do complex rotation transform, just position.
                    return true;
                }
            }
        }
        return false;
    }

    applyFoamBounce(p, obstacle) {
        // Simple bounce logic
        const n = new THREE.Vector3().subVectors(p.pos, obstacle.mesh.position).normalize();
        p.pos.addScaledVector(n, 20); // Push out
        // Adjust orientation to reflect?
        // p.q ...
    }

    // --- Powers ---

    spawnPower() {
        if (this.powers.length >= CONFIG.POWER_MAX_ON_FIELD) return;

        // Random pos
        const halfW = CONFIG.ARENA_W / 2 - 200;
        const halfD = CONFIG.ARENA_D / 2 - 200;
        const x = (Math.random() - 0.5) * 2 * halfW;
        const y = Math.random() * (CONFIG.ARENA_H * 0.6) + 100;
        const z = (Math.random() - 0.5) * 2 * halfD;
        const pos = new THREE.Vector3(x, y, z);

        // Random Type
        const type = POWER_TYPES[Math.floor(Math.random() * POWER_TYPES.length)];

        // Visual
        const geo = new THREE.BoxGeometry(20, 20, 20);
        const mat = new THREE.MeshStandardMaterial({
            color: type.color, emissive: type.color, emissiveIntensity: 0.8
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.copy(pos);
        this.powerGroup.add(mesh);

        this.powers.push({
            type, mesh, pos,
            createdAt: performance.now()
        });
    }

    updatePowers(dt) {
        // Rotate
        this.powers.forEach(pow => {
            pow.mesh.rotation.y += dt;
            pow.mesh.rotation.x += dt * 0.5;
        });

        // Collection
        this.players.forEach(p => {
            if (!p.alive) return;
            for (let i = this.powers.length - 1; i >= 0; i--) {
                const pow = this.powers[i];
                if (p.pos.distanceTo(pow.pos) < 30 + CONFIG.POWER_RADIUS) {
                    // Collect
                    const added = p.addToInventory(pow.type);
                    if (added) {
                        this.powerGroup.remove(pow.mesh);
                        pow.mesh.geometry.dispose();
                        pow.mesh.material.dispose();
                        this.powers.splice(i, 1);
                        // Sound?
                    }
                }
            }
        });
    }

    // --- Projectiles ---

    shootProjectile(p) {
        if (performance.now() < p.shotCooldownUntil) return;
        p.shotCooldownUntil = performance.now() + CONFIG.PROJECTILE_COOLDOWN * 1000;

        const pos = p.aircraftMesh ? p.aircraftMesh.getMuzzlePosition() : p.pos.clone();
        const dir = p.getForwardVector();

        const mesh = new THREE.Mesh(this.projectileGeo, this.projectileMat);
        mesh.position.copy(pos);
        this.projectileGroup.add(mesh);

        this.projectiles.push({
            mesh, pos: pos.clone(), dir: dir.clone(),
            ownerId: p.id,
            lifetime: CONFIG.PROJECTILE_LIFETIME
        });
    }

    updateProjectiles(dt) {
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const proj = this.projectiles[i];
            proj.lifetime -= dt;
            if (proj.lifetime <= 0) {
                this.removeProjectile(i);
                continue;
            }

            const move = proj.dir.clone().multiplyScalar(CONFIG.PROJECTILE_SPEED * dt);
            proj.pos.add(move);
            proj.mesh.position.copy(proj.pos);

            // Checking hits against players
            let hit = false;
            for (const p of this.players) {
                if (!p.alive || p.id === proj.ownerId) continue;
                if (p.pos.distanceTo(proj.pos) < CONFIG.HEAD_RADIUS + CONFIG.PROJECTILE_RADIUS + 10) {
                    // Hit Player
                    p.alive = false;
                    this.spawnBurst(p.pos, p.color);
                    hit = true;
                    this.removeProjectile(i);
                    break;
                }
            }
            if (hit) continue;

            // Check Arena Walls (simple bounds)
            const halfW = CONFIG.ARENA_W / 2;
            if (Math.abs(proj.pos.x) > halfW || Math.abs(proj.pos.z) > CONFIG.ARENA_D / 2) {
                this.removeProjectile(i);
            }
        }
    }

    removeProjectile(index) {
        const p = this.projectiles[index];
        this.projectileGroup.remove(p.mesh);
        this.projectiles.splice(index, 1);
    }

    // --- Particles ---
    spawnBurst(pos, color) {
        for (let i = 0; i < 20; i++) {
            const geo = new THREE.BoxGeometry(4, 4, 4);
            const mat = new THREE.MeshBasicMaterial({ color: color });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.copy(pos);

            const vel = new THREE.Vector3(
                Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5
            ).normalize().multiplyScalar(Math.random() * 500);

            this.particleGroup.add(mesh);
            this.particles.push({ mesh, vel, life: 1.0 });
        }
    }

    updateParticles(dt) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.life -= dt;
            if (p.life <= 0) {
                this.particleGroup.remove(p.mesh);
                p.mesh.geometry.dispose();
                p.mesh.material.dispose();
                this.particles.splice(i, 1);
                continue;
            }
            p.mesh.position.addScaledVector(p.vel, dt);
            p.mesh.rotation.x += dt * 5;
        }
    }

    reset() {
        this.powers.forEach(p => {
            this.powerGroup.remove(p.mesh);
            p.mesh.geometry.dispose();
            p.mesh.material.dispose();
        });
        this.powers.length = 0;

        this.projectiles.forEach(p => {
            this.projectileGroup.remove(p.mesh);
            p.mesh.geometry.dispose();
            p.mesh.material.dispose();
        });
        this.projectiles.length = 0;

        this.particles.forEach(p => {
            this.particleGroup.remove(p.mesh);
            p.mesh.geometry.dispose();
            p.mesh.material.dispose();
        });
        this.particles.length = 0;
    }

    resetPlayers(spawnPos) {
        this.players.forEach((p, i) => {
            const pos = spawnPos.clone();
            if (this.players.length > 1) {
                if (p.id === 1) pos.x -= 80;
                if (p.id === 2) pos.x += 80;
            }
            p.reset(pos);
        });
    }

    checkWinCondition() {
        const alive = this.players.filter(p => p.alive);
        // If single player (count == 1), wait until dead.
        // If 2 players, wait until <= 1 alive. (Unless P1 vs P2. If P2 is bot, same rule).
        if (this.players.length > 1) {
            if (alive.length <= 1) {
                const winner = alive.length === 1 ? alive[0].id : null;
                const reason = winner ? `Spieler ${winner} gewinnt!` : "Unentschieden!";
                return { gameOver: true, winner, reason };
            }
        } else {
            if (alive.length === 0) {
                return { gameOver: true, winner: null, reason: "Zerstört" };
            }
        }
        return { gameOver: false };
    }
}

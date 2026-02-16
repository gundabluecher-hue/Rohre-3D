import * as THREE from 'three';
import { CONFIG } from './modules/Config.js';

const botState = {
    mode: "SMART",
    checkStuckTimer: 0,
    lastStuckPos: new THREE.Vector3(),
    isStuck: false,
    raycaster: new THREE.Raycaster(),
    randomDir: new THREE.Vector3(0, 0, 1),
    interceptTimer: 0,
    interimDir: null
};

export function updateBot(botPlayer, humanPlayer, dt, obstacleGroup) {
    if (!botPlayer || !botPlayer.alive) return;

    const pos = botPlayer.pos;
    const fwd = botPlayer.getForwardVector ? botPlayer.getForwardVector() : new THREE.Vector3(0, 0, 1).applyQuaternion(botPlayer.q);

    // --- Arena Config ---
    const halfW = CONFIG.ARENA_W / 2;
    const halfD = CONFIG.ARENA_D / 2;
    const maxH = CONFIG.ARENA_H;
    const wallMargin = CONFIG.WALL_MARGIN || 20;

    // 1. STUCK DETECTION
    botState.checkStuckTimer += dt;
    if (botState.checkStuckTimer > 0.5) {
        if (botState.lastStuckPos.distanceTo(pos) < 10) {
            if (!botState.isStuck) {
                botState.isStuck = true;
                botState.randomDir = new THREE.Vector3(
                    Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5
                ).normalize();
                botPlayer.boostCharge = 1;
                botPlayer.boostActive = true;
            }
        } else {
            botState.isStuck = false;
        }
        botState.lastStuckPos.copy(pos);
        botState.checkStuckTimer = 0;
    }

    if (botState.isStuck) {
        const desiredDir = botState.randomDir;
        const blend = fwd.clone().lerp(desiredDir, 10 * dt).normalize();
        lookAtDirection(botPlayer, blend);
        return;
    }

    // 2. SMART WALL AVOIDANCE (Reflection)
    const warningDist = 550;
    const criticalDist = 220;
    const wallNormal = new THREE.Vector3();
    let isCritical = false;
    let nearWall = false;

    // Check X Walls
    if (pos.x < -halfW + warningDist) {
        wallNormal.x += 1;
        nearWall = true;
        if (pos.x < -halfW + criticalDist) isCritical = true;
    } else if (pos.x > halfW - warningDist) {
        wallNormal.x -= 1;
        nearWall = true;
        if (pos.x > halfW - criticalDist) isCritical = true;
    }

    // Check Z Walls
    if (pos.z < -halfD + warningDist) {
        wallNormal.z += 1;
        nearWall = true;
        if (pos.z < -halfD + criticalDist) isCritical = true;
    } else if (pos.z > halfD - warningDist) {
        wallNormal.z -= 1;
        nearWall = true;
        if (pos.z > halfD - criticalDist) isCritical = true;
    }

    // Check Y Walls (Floor/Ceiling)
    if (pos.y < wallMargin + warningDist) {
        wallNormal.y += 1;
        nearWall = true;
        if (pos.y < wallMargin + criticalDist) isCritical = true;
    } else if (pos.y > maxH - warningDist) {
        wallNormal.y -= 1;
        nearWall = true;
        if (pos.y > maxH - criticalDist) isCritical = true;
    }

    let desiredDir = fwd.clone();
    let overrideTurnSpeed = null;

    if (nearWall) {
        wallNormal.normalize();
        const headingIntoWall = fwd.dot(wallNormal) < 0.1;

        if (headingIntoWall) {
            const reflection = fwd.clone().reflect(wallNormal).normalize();

            if (isCritical) {
                desiredDir = reflection.lerp(wallNormal, 0.5).normalize();
                overrideTurnSpeed = 12.0;
                botPlayer.boostActive = true;
            } else {
                desiredDir = reflection;
                overrideTurnSpeed = 4.0;
            }
        }
    }

    // 3. NO WALL THREAT -> DO GAMEPLAY
    if (!nearWall || (nearWall && !isCritical && fwd.dot(wallNormal) > 0.2)) {

        const rngSafeDist = document.getElementById("rngBotSafeDist");
        const safeDist = rngSafeDist ? parseInt(rngSafeDist.value) : 250;

        const rngRandom = document.getElementById("rngBotRandom");
        const randomValue = rngRandom ? parseInt(rngRandom.value) : 5;
        const clampedRandom = Math.min(10, Math.max(1, randomValue));
        const randomChance = 0.005 + (clampedRandom - 1) * 0.005;

        const rngReact = document.getElementById("rngBotReact");
        const reactValue = rngReact ? parseInt(rngReact.value) : 5;
        const clampedReact = Math.min(10, Math.max(1, reactValue));
        const reactLerp = 0.2 + (clampedReact - 1) * 0.06;

        if (!botState.interimDir || Math.random() < randomChance) {
            botState.interimDir = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
        }

        let targetVec = botState.interimDir;

        if (humanPlayer && humanPlayer.alive) {
            const toPlayer = new THREE.Vector3().subVectors(humanPlayer.pos, pos);
            const dist = toPlayer.length();

            if (dist < safeDist) {
                targetVec = toPlayer.clone().negate().normalize();
            } else if (dist < safeDist * 2) {
                targetVec = toPlayer.normalize();
            } else {
                targetVec = toPlayer.normalize();
            }
        }

        desiredDir.lerp(targetVec, reactLerp * dt * 5.0).normalize();
    }

    // 4. RAYCAST AVOIDANCE (Blocks)
    if (!isCritical && obstacleGroup) {
        const rayDist = 400;
        botState.raycaster.set(pos, fwd);
        if (obstacleGroup.children && obstacleGroup.children.length > 0) {
            const intersects = botState.raycaster.intersectObjects(obstacleGroup.children, false);
            if (intersects.length > 0 && intersects[0].distance < rayDist) {
                desiredDir.add(new THREE.Vector3(0, 1, 0)).normalize();
                overrideTurnSpeed = 6.0;
            }
        }
    }

    // 5. EXECUTE STEERING
    const rngTurn = document.getElementById("rngBotTurn");
    const baseTurnSpeed = rngTurn ? parseInt(rngTurn.value) : 5;
    const finalTurnSpeed = (overrideTurnSpeed ?? (baseTurnSpeed * 0.8)) * dt;

    const newDir = fwd.lerp(desiredDir, finalTurnSpeed).normalize();
    lookAtDirection(botPlayer, newDir);

    if (!isCritical) botPlayer.boostActive = false;
}

function lookAtDirection(p, dir) {
    const up = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3().crossVectors(up, dir).normalize();
    if (right.lengthSq() < 0.001) right.set(1, 0, 0);
    const correctedUp = new THREE.Vector3().crossVectors(dir, right).normalize();

    // Legacy mapping: Forward is X axis.
    const m = new THREE.Matrix4();
    m.makeBasis(dir, correctedUp, right);
    p.q.setFromRotationMatrix(m);
}

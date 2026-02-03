/* =========================
   Bot Logic (2P CPU) - Smart Reflection
   Fixed Encoding (UTF-8)
========================= */
const botState = {
    mode: "SMART",
    checkStuckTimer: 0,
    lastStuckPos: new THREE.Vector3(),
    isStuck: false,
    raycaster: new THREE.Raycaster(),
    randomDir: new THREE.Vector3(0, 0, 1),
    interceptTimer: 0,
    interimDir: null // Added missing property initialize
};

function updateBot(botPlayer, humanPlayer, dt) {
    if (!botPlayer || !botPlayer.alive) return;

    // Checks (chkBot1/chkBot2) are handled in game.js loop now.
    // We just execute logic for whoever is passed as botPlayer.

    const pos = botPlayer.pos;
    const fwd = forwardVector(botPlayer); // Calling global from game.js

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
        // Panic Escape
        const desiredDir = botState.randomDir;
        const blend = fwd.lerp(desiredDir, 10 * dt).normalize();
        lookAtDirection(botPlayer, blend);
        return;
    }

    // 2. SMART WALL AVOIDANCE (Reflection)
    const warningDist = 550;   // Start steering away
    const criticalDist = 220;  // Hard panic turn
    let wallNormal = new THREE.Vector3();
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

    // Analyze Wall Threat
    if (nearWall) {
        wallNormal.normalize();
        const headingIntoWall = fwd.dot(wallNormal) < 0.1;

        if (headingIntoWall) {
            // Reflection
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

        // Random Wander
        if (!botState.interimDir || Math.random() < 0.02) {
            botState.interimDir = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
        }

        let targetVec = botState.interimDir;

        if (humanPlayer && humanPlayer.alive) {
            const toPlayer = new THREE.Vector3().subVectors(humanPlayer.pos, pos);
            const dist = toPlayer.length();

            if (dist < safeDist) {
                // Flee
                targetVec = toPlayer.clone().negate().normalize();
            } else if (dist < safeDist * 2) {
                // Orbit
                targetVec = new THREE.Vector3().crossVectors(toPlayer.normalize(), new THREE.Vector3(0, 1, 0)).normalize();
            } else {
                // Chase
                targetVec = toPlayer.normalize();
            }
        }

        desiredDir.lerp(targetVec, 0.4).normalize();
    }

    // 4. RAYCAST AVOIDANCE (Blocks)
    if (!isCritical && typeof obstacleGroup !== "undefined") {
        const rayDist = 400;
        botState.raycaster.set(pos, fwd);
        const intersects = botState.raycaster.intersectObjects(obstacleGroup.children, false);
        if (intersects.length > 0 && intersects[0].distance < rayDist) {
            desiredDir.add(new THREE.Vector3(0, 1, 0)).normalize();
            overrideTurnSpeed = 6.0;
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
    const m = new THREE.Matrix4();
    m.makeBasis(dir, correctedUp, right);
    p.q.setFromRotationMatrix(m);
}

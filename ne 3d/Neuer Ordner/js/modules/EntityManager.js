// ============================================
// EntityManager.js - manages players, collisions and item projectiles
// ============================================

import * as THREE from 'three';
import { CONFIG } from './Config.js';
import { Player } from './Player.js';
import { BotAI } from './Bot.js';

// Reused input object to reduce GC
const SHARED_EMPTY_INPUT = {
    pitchUp: false,
    pitchDown: false,
    yawLeft: false,
    yawRight: false,
    rollLeft: false,
    rollRight: false,
    boost: false,
    cameraSwitch: false,
    dropItem: false,
    shootItem: false,
    shootItemIndex: -1,
    nextItem: false,
    useItem: -1,
};

function getEmptyInput() {
    // Reset properties
    SHARED_EMPTY_INPUT.pitchUp = false;
    SHARED_EMPTY_INPUT.pitchDown = false;
    SHARED_EMPTY_INPUT.yawLeft = false;
    SHARED_EMPTY_INPUT.yawRight = false;
    SHARED_EMPTY_INPUT.rollLeft = false;
    SHARED_EMPTY_INPUT.rollRight = false;
    SHARED_EMPTY_INPUT.boost = false;
    SHARED_EMPTY_INPUT.cameraSwitch = false;
    SHARED_EMPTY_INPUT.dropItem = false;
    SHARED_EMPTY_INPUT.shootItem = false;
    SHARED_EMPTY_INPUT.shootItemIndex = -1;
    SHARED_EMPTY_INPUT.nextItem = false;
    SHARED_EMPTY_INPUT.useItem = -1;
    return SHARED_EMPTY_INPUT;
}

export class EntityManager {
    constructor(renderer, arena, powerupManager, particles, audio, recorder, learningEngines = null) {
        this.renderer = renderer;
        this.arena = arena;
        this.powerupManager = powerupManager;
        this.particles = particles;
        this.audio = audio;
        this.recorder = recorder;
        this.learningEngines = this._normalizeLearningEngines(learningEngines);
        this.players = [];
        this.humanPlayers = [];
        this.bots = [];
        this.botByPlayer = new Map();
        this.projectiles = [];
        this._projectileAssets = new Map();
        this._projectilePools = new Map();
        this.onPlayerDied = null;
        this.onRoundEnd = null;
        this.onPlayerFeedback = null;

        // Wiederverwendbare temp-Vektoren (vermeidet GC-Druck)
        this._tmpVec = new THREE.Vector3();
        this._tmpVec2 = new THREE.Vector3();
        this._tmpDir = new THREE.Vector3();
        this._tmpDir2 = new THREE.Vector3();
        this._tmpCamAnchor = new THREE.Vector3();
        this._tmpBoundaryNormal = new THREE.Vector3();

        // Lock-On Cache (einmal pro Frame berechnen)
        this._lockOnCache = new Map();
        this.botDifficulty = CONFIG.BOT.ACTIVE_DIFFICULTY || CONFIG.BOT.DEFAULT_DIFFICULTY || 'NORMAL';
        this.trainingEnabled = false;
        this.mortalBots = false;
        this.botOnlyRoundEnd = false;
        this.dualWorlds = false;
        this.worldCount = 1;
        this._worldZones = [];
        this._worldRoundState = [];
        this._arenaViewCache = new Map();
    }

    _isLearningEngineLike(candidate) {
        return !!(
            candidate
            && typeof candidate.selectAction === 'function'
            && typeof candidate.updateTransition === 'function'
            && typeof candidate.getStats === 'function'
        );
    }

    _normalizeLearningEngines(source) {
        const engines = {
            mode3d: null,
            planar: null,
        };

        if (this._isLearningEngineLike(source)) {
            engines.mode3d = source;
            engines.planar = source;
            return engines;
        }

        if (source && typeof source === 'object') {
            if (this._isLearningEngineLike(source.mode3d)) {
                engines.mode3d = source.mode3d;
            } else if (this._isLearningEngineLike(source.mode3D)) {
                engines.mode3d = source.mode3D;
            }
            if (this._isLearningEngineLike(source.planar)) {
                engines.planar = source.planar;
            } else if (this._isLearningEngineLike(source.planarMode)) {
                engines.planar = source.planarMode;
            }
        }

        if (!engines.mode3d && engines.planar) {
            engines.mode3d = engines.planar;
        }
        if (!engines.planar && engines.mode3d) {
            engines.planar = engines.mode3d;
        }
        return engines;
    }

    _resolveLearningEngine(forcePlanarMode = false) {
        // Dual worlds must always map world-specific engines, independent of global planar mode.
        if (this.dualWorlds && this.worldCount >= 2) {
            if (forcePlanarMode) {
                return this.learningEngines.planar || this.learningEngines.mode3d || null;
            }
            return this.learningEngines.mode3d || this.learningEngines.planar || null;
        }

        const usePlanar = !!(forcePlanarMode || CONFIG.GAMEPLAY.PLANAR_MODE);
        if (usePlanar) {
            return this.learningEngines.planar || this.learningEngines.mode3d || null;
        }
        return this.learningEngines.mode3d || this.learningEngines.planar || null;
    }

    setup(numHumans, numBots, options = {}) {
        console.log(`[EntityManager] Setup: Humans=${numHumans}, Bots=${numBots}`);
        this.clear();

        const humanConfigs = Array.isArray(options.humanConfigs) ? options.humanConfigs : [];
        const modelScale = typeof options.modelScale === 'number' ? options.modelScale : (CONFIG.PLAYER.MODEL_SCALE || 1);
        this.botDifficulty = options.botDifficulty || CONFIG.BOT.ACTIVE_DIFFICULTY || this.botDifficulty;
        const training = (options.training && typeof options.training === 'object') ? options.training : {};
        this.trainingEnabled = !!training.enabled;
        const learningEnabled = true;
        const learningTraining = true;
        this.mortalBots = this.trainingEnabled ? !!training.mortalBots : true;
        this.botOnlyRoundEnd = this.trainingEnabled && !!training.botVsBotOnly;
        this.dualWorlds = !!(this.botOnlyRoundEnd && training.dualWorlds);
        this.worldCount = this.dualWorlds ? 2 : 1;
        this._worldZones = [];
        this._worldRoundState = [];
        this._arenaViewCache.clear();

        this.humanPlayers = [];
        this.botByPlayer.clear();

        const humanColors = [CONFIG.COLORS.PLAYER_1, CONFIG.COLORS.PLAYER_2];
        for (let i = 0; i < numHumans; i++) {
            const player = new Player(this.renderer, i, humanColors[i], false);
            player.setControlOptions({
                invertPitch: !!humanConfigs[i]?.invertPitch,
                cockpitCamera: !!humanConfigs[i]?.cockpitCamera,
                modelScale,
                forcePlanarMode: false,
            });
            player.worldId = 0;
            this.players.push(player);
            this.humanPlayers.push(player);
        }

        for (let i = 0; i < numBots; i++) {
            const color = CONFIG.COLORS.BOT_COLORS[i % CONFIG.COLORS.BOT_COLORS.length];
            const player = new Player(this.renderer, numHumans + i, color, true);
            const worldId = this.dualWorlds ? (Math.floor(i / 2) % this.worldCount) : 0;
            const forcePlanarMode = this.dualWorlds && worldId === 1;
            const learningEngine = this._resolveLearningEngine(forcePlanarMode);
            player.setControlOptions({
                modelScale,
                invertPitch: false,
                forcePlanarMode,
            });
            player.worldId = worldId;
            const ai = new BotAI({
                difficulty: this.botDifficulty,
                recorder: this.recorder,
                learning: learningEngine,
                learningEnabled,
                learningTraining,
                botId: `bot-w${worldId}-${numHumans + i}`,
                forcePlanarMode,
            });
            this.players.push(player);
            this.bots.push({ player, ai, worldId });
            this.botByPlayer.set(player, ai);
        }
    }

    setBotDifficulty(profileName) {
        this.botDifficulty = profileName || this.botDifficulty;
        for (let i = 0; i < this.bots.length; i++) {
            const bot = this.bots[i];
            if (bot?.ai?.setDifficulty) {
                bot.ai.setDifficulty(this.botDifficulty);
            }
        }
    }

    setTrainingOptions(training = {}) {
        this.trainingEnabled = !!training.enabled;
        this.mortalBots = this.trainingEnabled ? !!training.mortalBots : true;
        this.botOnlyRoundEnd = this.trainingEnabled && !!training.botVsBotOnly;
        this.dualWorlds = !!(this.botOnlyRoundEnd && training.dualWorlds);
        this.worldCount = this.dualWorlds ? 2 : 1;
        this._worldZones = [];
        this._worldRoundState = [];
        this._arenaViewCache.clear();

        for (let i = 0; i < this.bots.length; i++) {
            const bot = this.bots[i];
            const worldId = this.dualWorlds ? (Math.floor(i / 2) % this.worldCount) : 0;
            if (bot?.player) {
                bot.player.worldId = worldId;
            }
            if (bot) {
                bot.worldId = worldId;
            }
            const forcePlanarMode = this.dualWorlds && worldId === 1;
            if (bot?.player?.setControlOptions) {
                bot.player.setControlOptions({ forcePlanarMode });
            }
            if (bot?.ai?.setLearningOptions) {
                const learningEngine = this._resolveLearningEngine(forcePlanarMode);
                bot.ai.setLearningOptions({
                    learningEngine,
                    enabled: true,
                    training: true,
                    forcePlanarMode,
                });
            }
        }
    }

    _isDualWorldsActive() {
        return !!(this.dualWorlds && this.worldCount >= 2);
    }

    _getWorldIdForPlayer(player) {
        if (!player) return 0;
        if (Number.isInteger(player.worldId)) {
            return Math.max(0, Math.min(this.worldCount - 1, player.worldId));
        }
        return 0;
    }

    _areInSameWorld(a, b) {
        if (!this._isDualWorldsActive()) return true;
        return this._getWorldIdForPlayer(a) === this._getWorldIdForPlayer(b);
    }

    _buildWorldZones() {
        const bounds = this.arena?.bounds;
        if (!bounds) {
            this._worldZones = [];
            return;
        }
        if (!this._isDualWorldsActive()) {
            this._worldZones = [{ ...bounds, worldId: 0 }];
            return;
        }

        const midX = (bounds.minX + bounds.maxX) * 0.5;
        const splitGap = Math.max(2.5, (bounds.maxX - bounds.minX) * 0.05);
        const leftMax = midX - splitGap * 0.5;
        const rightMin = midX + splitGap * 0.5;

        this._worldZones = [
            {
                worldId: 0,
                minX: bounds.minX,
                maxX: leftMax,
                minY: bounds.minY,
                maxY: bounds.maxY,
                minZ: bounds.minZ,
                maxZ: bounds.maxZ,
            },
            {
                worldId: 1,
                minX: rightMin,
                maxX: bounds.maxX,
                minY: bounds.minY,
                maxY: bounds.maxY,
                minZ: bounds.minZ,
                maxZ: bounds.maxZ,
            },
        ];
    }

    _getWorldBounds(worldId = 0) {
        if (this._worldZones.length === 0) {
            this._buildWorldZones();
        }
        if (this._worldZones.length === 0) {
            return this.arena?.bounds || null;
        }
        if (!this._isDualWorldsActive()) {
            return this._worldZones[0];
        }
        const idx = Math.max(0, Math.min(this._worldZones.length - 1, worldId));
        return this._worldZones[idx] || this._worldZones[0];
    }

    _resetWorldRoundState() {
        const count = this._isDualWorldsActive() ? this.worldCount : 1;
        this._worldRoundState = [];
        for (let i = 0; i < count; i++) {
            this._worldRoundState.push({
                resolved: false,
                winner: null,
            });
        }
    }

    _getPlayersInWorld(worldId) {
        if (!this._isDualWorldsActive()) return this.players;
        const out = [];
        for (let i = 0; i < this.players.length; i++) {
            const p = this.players[i];
            if (this._getWorldIdForPlayer(p) === worldId) {
                out.push(p);
            }
        }
        return out;
    }

    _getProjectilesInWorld(worldId) {
        if (!this._isDualWorldsActive()) return this.projectiles;
        const out = [];
        for (let i = 0; i < this.projectiles.length; i++) {
            const projectile = this.projectiles[i];
            const projectileWorld = Number.isInteger(projectile?.worldId) ? projectile.worldId : 0;
            if (projectileWorld === worldId) {
                out.push(projectile);
            }
        }
        return out;
    }

    _getArenaViewForWorld(worldId) {
        if (!this._isDualWorldsActive()) {
            return this.arena;
        }

        let view = this._arenaViewCache.get(worldId);
        if (!view) {
            view = {
                bounds: {
                    minX: 0,
                    maxX: 0,
                    minY: 0,
                    maxY: 0,
                    minZ: 0,
                    maxZ: 0,
                },
                currentMapKey: 'standard',
                portalsEnabled: false,
                portals: [],
                checkCollision: (position, radius = 0) => (
                    this.arena.checkCollision(position, radius)
                    || this._isPositionOutOfWorldBounds(position, worldId, radius)
                ),
            };
            this._arenaViewCache.set(worldId, view);
        }

        const arenaBounds = this.arena?.bounds;
        const zone = this._getWorldBounds(worldId);
        if (arenaBounds) {
            view.bounds.minY = arenaBounds.minY;
            view.bounds.maxY = arenaBounds.maxY;
            view.bounds.minZ = arenaBounds.minZ;
            view.bounds.maxZ = arenaBounds.maxZ;
        }
        if (zone) {
            view.bounds.minX = zone.minX;
            view.bounds.maxX = zone.maxX;
        } else if (arenaBounds) {
            view.bounds.minX = arenaBounds.minX;
            view.bounds.maxX = arenaBounds.maxX;
        }

        view.currentMapKey = this.arena?.currentMapKey || 'standard';
        view.portalsEnabled = !!this.arena?.portalsEnabled;
        view.portals = Array.isArray(this.arena?.portals) ? this.arena.portals : [];

        return view;
    }

    _getRandomPositionInWorld(worldId = 0, margin = 12, planarLevel = null) {
        const zone = this._getWorldBounds(worldId);
        if (!zone) return this.arena.getRandomPosition(margin);

        const innerMinX = zone.minX + margin;
        const innerMaxX = zone.maxX - margin;
        const innerMinY = zone.minY + margin;
        const innerMaxY = zone.maxY - margin;
        const innerMinZ = zone.minZ + margin;
        const innerMaxZ = zone.maxZ - margin;

        const minX = Math.min(innerMinX, innerMaxX);
        const maxX = Math.max(innerMinX, innerMaxX);
        const minZ = Math.min(innerMinZ, innerMaxZ);
        const maxZ = Math.max(innerMinZ, innerMaxZ);

        const x = minX + Math.random() * (maxX - minX);
        const z = minZ + Math.random() * (maxZ - minZ);
        let y = innerMinY + Math.random() * Math.max(0.0001, (innerMaxY - innerMinY));
        if (Number.isFinite(planarLevel)) {
            y = planarLevel;
        }
        return new THREE.Vector3(x, y, z);
    }

    _isPositionOutOfWorldBounds(position, worldId = 0, radius = 0) {
        if (!this._isDualWorldsActive()) return false;
        const zone = this._getWorldBounds(worldId);
        if (!zone) return false;
        const r = Math.max(0, radius);
        return (
            position.x - r < zone.minX
            || position.x + r > zone.maxX
        );
    }

    _getWorldBoundaryNormal(position, worldId = 0, radius = 0) {
        if (!this._isDualWorldsActive()) return null;
        const zone = this._getWorldBounds(worldId);
        if (!zone) return null;
        const r = Math.max(0, radius);
        if (position.x - r < zone.minX) {
            return this._tmpBoundaryNormal.set(1, 0, 0);
        }
        if (position.x + r > zone.maxX) {
            return this._tmpBoundaryNormal.set(-1, 0, 0);
        }
        return null;
    }

    _constrainPlayerToWorld(player) {
        if (!this._isDualWorldsActive() || !player) return;
        const zone = this._getWorldBounds(this._getWorldIdForPlayer(player));
        if (!zone) return;
        const margin = CONFIG.PLAYER.HITBOX_RADIUS + 0.3;
        player.position.x = Math.max(zone.minX + margin, Math.min(zone.maxX - margin, player.position.x));
    }

    _getSpectatorFocusForWorld(worldId) {
        if (!this._isDualWorldsActive()) return null;
        let fallback = null;
        for (let i = 0; i < this.players.length; i++) {
            const p = this.players[i];
            if (this._getWorldIdForPlayer(p) !== worldId) continue;
            if (!fallback) fallback = p;
            if (p.alive) return p;
        }
        return fallback;
    }

    spawnAll() {
        this._roundEnded = false;
        this._buildWorldZones();
        this._resetWorldRoundState();
        const isPlanar = !!CONFIG.GAMEPLAY.PLANAR_MODE;
        const planarSpawnLevel = isPlanar ? this._getPlanarSpawnLevel() : null;

        for (const player of this.players) {
            const worldId = this._getWorldIdForPlayer(player);
            const usePlayerPlanar = !!(player?.isPlanarMode && player.isPlanarMode());
            const selectedPlanarLevel = usePlayerPlanar ? this._getPlanarSpawnLevel() : planarSpawnLevel;
            const pos = this._findSpawnPosition(12, 12, selectedPlanarLevel, worldId);
            const dir = this._findSafeSpawnDirection(pos, worldId);
            player.spawn(pos, dir);
            player.worldId = worldId;
            player.shootCooldown = 0;
            if (this.recorder) {
                this.recorder.markPlayerSpawn(player);
                this.recorder.logEvent('SPAWN', player.index, `bot=${player.isBot ? 1 : 0} world=${worldId}`);
            }
        }
    }

    _getPlanarSpawnLevel() {
        const bounds = this.arena?.bounds || null;
        const fallback = bounds
            ? (bounds.minY + bounds.maxY) * 0.5
            : (CONFIG.PLAYER.START_Y || 5);

        // User rule: with 0 portals, everyone starts on the arena middle level.
        const hasPortals = Array.isArray(this.arena?.portals) && this.arena.portals.length > 0;
        if (!hasPortals) {
            return fallback;
        }

        if (!this.arena?.getPortalLevels) {
            return fallback;
        }

        const levels = this.arena.getPortalLevels();
        if (!Array.isArray(levels) || levels.length === 0) {
            return fallback;
        }

        let best = fallback;
        let bestDist = Infinity;
        for (let i = 0; i < levels.length; i++) {
            const value = levels[i];
            if (!Number.isFinite(value)) continue;
            const dist = Math.abs(value - fallback);
            if (dist < bestDist) {
                bestDist = dist;
                best = value;
            }
        }
        return best;
    }

    _findSpawnPosition(minDistance = 12, margin = 12, planarLevel = null, worldId = 0) {
        const usePlanarLevel = Number.isFinite(planarLevel) && !!this.arena?.getRandomPositionOnLevel;
        const randomSpawn = () => {
            if (this._isDualWorldsActive()) {
                return this._getRandomPositionInWorld(worldId, margin, usePlanarLevel ? planarLevel : null);
            }
            return usePlanarLevel
                ? this.arena.getRandomPositionOnLevel(planarLevel, margin)
                : this.arena.getRandomPosition(margin);
        };

        for (let attempts = 0; attempts < 100; attempts++) {
            const pos = randomSpawn();
            let tooClose = false;

            for (const other of this.players) {
                if (!other.alive) continue;
                if (this._isDualWorldsActive() && this._getWorldIdForPlayer(other) !== worldId) continue;
                if (other.position.distanceToSquared(pos) < minDistance * minDistance) {
                    tooClose = true;
                    break;
                }
            }

            if (!tooClose) {
                return pos;
            }
        }

        return randomSpawn();
    }

    _findSafeSpawnDirection(position, worldId = 0) {
        const sampleCount = 20;
        let bestDirection = new THREE.Vector3(0, 0, -1);
        let bestDistance = -1;

        for (let i = 0; i < sampleCount; i++) {
            const angle = (Math.PI * 2 * i) / sampleCount;
            this._tmpDir.set(Math.sin(angle), 0, -Math.cos(angle));
            const freeDistance = this._traceFreeDistance(position, this._tmpDir, 36, 2.2, worldId);
            if (freeDistance > bestDistance) {
                bestDistance = freeDistance;
                bestDirection.copy(this._tmpDir);
            }
        }

        return bestDirection;
    }

    _traceFreeDistance(origin, direction, maxDistance, stepDistance, worldId = 0) {
        const step = Math.max(0.5, stepDistance);
        let traveled = 0;
        while (traveled < maxDistance) {
            traveled += step;
            this._tmpVec.set(
                origin.x + direction.x * traveled,
                origin.y + direction.y * traveled,
                origin.z + direction.z * traveled
            );
            if (
                this.arena.checkCollision(this._tmpVec, CONFIG.PLAYER.HITBOX_RADIUS)
                || this._isPositionOutOfWorldBounds(this._tmpVec, worldId, CONFIG.PLAYER.HITBOX_RADIUS)
            ) {
                return traveled - step;
            }
        }
        return maxDistance;
    }

    update(dt, inputManager) {
        // Lock-On Cache für diesen Frame zurücksetzen
        this._lockOnCache.clear();

        this._updateProjectiles(dt);

        for (const player of this.players) {
            if (!player.alive) continue;
            player.shootCooldown = Math.max(0, (player.shootCooldown || 0) - dt);

            let input = getEmptyInput();

            if (player.isBot) {
                const botAI = this.botByPlayer.get(player);
                if (botAI) {
                    const worldId = this._getWorldIdForPlayer(player);
                    const arenaView = this._isDualWorldsActive() ? this._getArenaViewForWorld(worldId) : this.arena;
                    const scopedPlayers = this._isDualWorldsActive() ? this._getPlayersInWorld(worldId) : this.players;
                    const scopedProjectiles = this._isDualWorldsActive() ? this._getProjectilesInWorld(worldId) : this.projectiles;
                    input = botAI.update(dt, player, arenaView, scopedPlayers, scopedProjectiles);
                }
            } else {
                const includeSecondaryBindings = this.humanPlayers.length === 1 && player.index === 0;
                input = inputManager.getPlayerInput(player.index, { includeSecondaryBindings });
                if (input.cameraSwitch) {
                    this.renderer.cycleCamera(player.index);
                    player.cameraMode = this.renderer.cameraModes[player.index] || 0;
                }
            }

            if (input.nextItem) {
                player.cycleItem();
            }

            if (input.dropItem) {
                player.dropItem();
            }

            if (input.useItem >= 0) {
                const result = this._useInventoryItem(player, input.useItem);
                if (result.ok) {
                    if (this.recorder) {
                        this.recorder.logEvent('ITEM_USE', player.index, `mode=use type=${result.type}`);
                    }
                } else if (!player.isBot) {
                    this._notifyPlayerFeedback(player, result.reason);
                }
            }

            if (input.shootItem) {
                const result = this._shootItemProjectile(player, input.shootItemIndex);
                if (!result.ok && !player.isBot) {
                    this._notifyPlayerFeedback(player, result.reason);
                } else if (result.ok && this.recorder) {
                    this.recorder.logEvent('ITEM_USE', player.index, `mode=shoot type=${result.type}`);
                }
            }

            player.update(dt, input);
            this._constrainPlayerToWorld(player);

            const spawnProtected = (player.spawnProtectionTimer || 0) > 0;
            if (!player.isGhost && !spawnProtected) {
                const worldId = this._getWorldIdForPlayer(player);
                const hitArenaWall = this.arena.checkCollision(player.position, CONFIG.PLAYER.HITBOX_RADIUS);
                const hitWorldBoundary = this._isPositionOutOfWorldBounds(player.position, worldId, CONFIG.PLAYER.HITBOX_RADIUS);
                if (hitArenaWall || hitWorldBoundary) {
                    if (player.hasShield) {
                        player.hasShield = false;
                        player.getDirection(this._tmpDir).multiplyScalar(2);
                        player.position.sub(this._tmpDir);
                        this._constrainPlayerToWorld(player);
                    } else if (player.isBot && !this.mortalBots) {
                        // Bot: unsterblich – von Wand abprallen
                        const boundaryNormal = (!hitArenaWall && hitWorldBoundary)
                            ? this._getWorldBoundaryNormal(player.position, worldId, CONFIG.PLAYER.HITBOX_RADIUS)
                            : null;
                        this._bounceBot(player, boundaryNormal, 'WALL');
                    } else {
                        if (this.audio) this.audio.play('HIT');
                        if (this.particles) this.particles.spawnHit(player.position, player.color);
                        this._killPlayer(player, 'WALL');
                        continue;
                    }
                }

                for (const other of this.players) {
                    if (!other.alive) continue;
                    if (!this._areInSameWorld(player, other)) continue;
                    const skipRecent = other === player ? 15 : 0;
                    const collision = other.trail.checkCollision(player.position, CONFIG.PLAYER.HITBOX_RADIUS, skipRecent);

                    if (collision && collision.hit) {
                        if (player.hasShield) {
                            player.hasShield = false;
                        } else if (player.isBot && !this.mortalBots) {
                            // Bot: unsterblich – von Trail abprallen
                            // Use the collision result we already have
                            if (collision && collision.hit) {
                                this._bounceBot(player, collision.normal, 'TRAIL');
                                break;
                            }
                        } else {
                            if (this.audio) this.audio.play('HIT');
                            if (this.particles) this.particles.spawnHit(player.position, player.color);
                            const cause = other === player ? 'TRAIL_SELF' : 'TRAIL_OTHER';
                            const killer = other !== player ? other : null;
                            this._killPlayer(player, cause, killer);
                            break;
                        }
                    }
                }
            }

            if (!player.alive) continue;

            // Portal-Check
            const portalResult = this._isDualWorldsActive()
                ? null
                : this.arena.checkPortal(player.position, CONFIG.PLAYER.HITBOX_RADIUS, player.index);
            if (portalResult) {
                player.position.copy(portalResult.target);

                // Offset in Blickrichtung, um Loop zu vermeiden
                player.getDirection(this._tmpVec).normalize().multiplyScalar(2.0);
                player.position.add(this._tmpVec);

                // Update Planar Level if in Planar Mode
                if (player?.isPlanarMode && player.isPlanarMode()) {
                    player.currentPlanarY = portalResult.target.y;
                }

                player.trail.forceGap(0.5);
                this._constrainPlayerToWorld(player);
            }

            const pickedUp = this.powerupManager.checkPickup(player.position, CONFIG.PLAYER.HITBOX_RADIUS);
            if (pickedUp) {
                player.addToInventory(pickedUp);
                if (this.audio) this.audio.play('POWERUP');
                if (this.particles) this.particles.spawnHit(player.position, 0x00ff00);
            }
        }

        // Guard: nur einmal pro Runde onRoundEnd aufrufen
        if (this._roundEnded) return;

        // Rundenende orientiert sich an menschlichen Spielern.
        let humansAlive = 0;
        let lastHumanAlive = null;
        for (const h of this.humanPlayers) {
            if (h.alive) {
                humansAlive++;
                lastHumanAlive = h;
            }
        }

        let shouldEnd = false;
        let winner = null;
        let handledWorldOutcomes = false;

        if (this.humanPlayers.length === 1) {
            // Singleplayer: Runde endet wenn der Spieler stirbt (Bot kann als Sieger gelten)
            if (humansAlive === 0) {
                console.log('[EntityManager] Round End: Singleplayer Died');
                shouldEnd = true;
                winner = null;
                for (let i = 0; i < this.bots.length; i++) {
                    const botPlayer = this.bots[i].player;
                    if (botPlayer && botPlayer.alive) {
                        winner = botPlayer;
                        break;
                    }
                }
            }
        } else if (this.humanPlayers.length >= 2) {
            // Multiplayer: Runde endet wenn nur noch 1 Mensch lebt
            if (humansAlive <= 1 && this.humanPlayers.length > 1) {
                console.log(`[EntityManager] Round End: Multiplayer Survivor. HumansAlive=${humansAlive}, TotalHumans=${this.humanPlayers.length}, Winner=P${winner ? winner.index : 'None'}`);
                shouldEnd = true;
                winner = lastHumanAlive; // kann null sein wenn beide tot
            }
        } else {
            if (this.botOnlyRoundEnd) {
                if (this._isDualWorldsActive()) {
                    let allWorldsResolved = true;
                    for (let worldId = 0; worldId < this.worldCount; worldId++) {
                        const state = this._worldRoundState[worldId];
                        if (!state || state.resolved) continue;

                        let botsAlive = 0;
                        let lastBotAlive = null;
                        let worldBotCount = 0;
                        for (let i = 0; i < this.bots.length; i++) {
                            const botPlayer = this.bots[i]?.player;
                            if (!botPlayer) continue;
                            if (this._getWorldIdForPlayer(botPlayer) !== worldId) continue;
                            worldBotCount++;
                            if (botPlayer.alive) {
                                botsAlive++;
                                lastBotAlive = botPlayer;
                            }
                        }

                        if (worldBotCount > 0 && botsAlive <= 1) {
                            state.resolved = true;
                            state.winner = lastBotAlive || null;
                            for (let i = 0; i < this.bots.length; i++) {
                                const bot = this.bots[i];
                                if (!bot?.player?.alive || !bot?.ai?.onRoundEnd) continue;
                                if (this._getWorldIdForPlayer(bot.player) !== worldId) continue;
                                const outcome = state.winner
                                    ? (bot.player === state.winner ? 'win' : 'loss')
                                    : 'draw';
                                bot.ai.onRoundEnd(outcome);
                            }
                        } else {
                            allWorldsResolved = false;
                        }
                    }
                    handledWorldOutcomes = true;
                    if (allWorldsResolved) {
                        shouldEnd = true;
                        winner = this._worldRoundState[0]?.winner || this._worldRoundState[1]?.winner || null;
                    }
                } else {
                    let botsAlive = 0;
                    let lastBotAlive = null;
                    for (let i = 0; i < this.bots.length; i++) {
                        const botPlayer = this.bots[i]?.player;
                        if (botPlayer?.alive) {
                            botsAlive++;
                            lastBotAlive = botPlayer;
                        }
                    }
                    if (botsAlive <= 1 && this.bots.length > 0) {
                        shouldEnd = true;
                        winner = lastBotAlive;
                    }
                }
            }
        }

        if (shouldEnd) {
            this._roundEnded = true;
            if (!handledWorldOutcomes) {
                for (let i = 0; i < this.bots.length; i++) {
                    const bot = this.bots[i];
                    if (!bot?.player?.alive || !bot?.ai?.onRoundEnd) continue;
                    const outcome = winner
                        ? (bot.player === winner ? 'win' : 'loss')
                        : 'draw';
                    bot.ai.onRoundEnd(outcome);
                }
            }
            if (this.onRoundEnd) {
                this.onRoundEnd(winner);
            }
        }
    }

    _takeInventoryItem(player, preferredIndex = -1) {
        if (!player.inventory || player.inventory.length === 0) {
            return { ok: false, reason: 'Kein Item verfuegbar', type: null };
        }

        const index = Number.isInteger(preferredIndex) && preferredIndex >= 0
            ? Math.min(preferredIndex, player.inventory.length - 1)
            : Math.min(player.selectedItemIndex || 0, player.inventory.length - 1);

        const type = player.inventory.splice(index, 1)[0];
        if (player.inventory.length === 0) {
            player.selectedItemIndex = 0;
        } else if (player.selectedItemIndex >= player.inventory.length) {
            player.selectedItemIndex = 0;
        }

        return { ok: true, type };
    }

    _useInventoryItem(player, preferredIndex = -1) {
        const itemResult = this._takeInventoryItem(player, preferredIndex);
        if (!itemResult.ok || !itemResult.type) {
            return { ok: false, reason: 'Kein Item zum Nutzen' };
        }

        player.applyPowerup(itemResult.type);
        return { ok: true, type: itemResult.type };
    }

    _shootItemProjectile(player, preferredIndex = -1) {
        if ((player.shootCooldown || 0) > 0) {
            return { ok: false, reason: `Schuss bereit in ${player.shootCooldown.toFixed(1)}s` };
        }

        const itemResult = this._takeInventoryItem(player, preferredIndex);
        if (!itemResult.ok || !itemResult.type) {
            return { ok: false, reason: 'Kein Item zum Schiessen', type: null };
        }
        const type = itemResult.type;

        const power = CONFIG.POWERUP.TYPES[type];
        if (!power) {
            return { ok: false, reason: 'Item ungueltig' };
        }

        player.getAimDirection(this._tmpDir).normalize();
        this._tmpVec.copy(player.position).addScaledVector(this._tmpDir, 2.2);
        const speed = CONFIG.PROJECTILE.SPEED;
        const radius = CONFIG.PROJECTILE.RADIUS;
        const rocketGroup = this._acquireProjectileMesh(type, power.color);
        rocketGroup.position.copy(this._tmpVec);
        this._tmpVec2.copy(this._tmpVec).add(this._tmpDir);
        rocketGroup.lookAt(this._tmpVec2);

        this.projectiles.push({
            mesh: rocketGroup,
            flame: rocketGroup.userData.flame || null,
            poolKey: type,
            owner: player,
            worldId: this._getWorldIdForPlayer(player),
            type,
            position: this._tmpVec.clone(),
            velocity: this._tmpDir.clone().multiplyScalar(speed),
            radius,
            ttl: CONFIG.PROJECTILE.LIFE_TIME,
            traveled: 0,
            target: this._checkLockOn(player),  // Zielsuchend wenn Lock-On
        });

        player.shootCooldown = CONFIG.PROJECTILE.COOLDOWN;
        if (this.audio) this.audio.play('SHOOT');
        return { ok: true, type };
    }

    _acquireProjectileMesh(type, color) {
        const pool = this._getProjectilePool(type);
        let rocketGroup = pool.pop();

        if (!rocketGroup) {
            const assets = this._getProjectileAssets(type, color);
            rocketGroup = new THREE.Group();

            const body = new THREE.Mesh(assets.bodyGeo, assets.bodyMat);
            rocketGroup.add(body);

            const tip = new THREE.Mesh(assets.tipGeo, assets.tipMat);
            tip.position.z = -0.8;
            rocketGroup.add(tip);

            for (let i = 0; i < 4; i++) {
                const fin = new THREE.Mesh(assets.finGeo, assets.finMat);
                fin.position.z = 0.5;
                const angle = (Math.PI / 2) * i;
                if (i % 2 === 0) {
                    fin.position.x = Math.cos(angle) * 0.2;
                } else {
                    fin.position.y = Math.sin(angle) * 0.2;
                    fin.rotation.z = Math.PI / 2;
                }
                rocketGroup.add(fin);
            }

            const flame = new THREE.Mesh(assets.flameGeo, assets.flameMat);
            flame.position.z = 0.85;
            rocketGroup.add(flame);
            rocketGroup.userData.flame = flame;
        }

        rocketGroup.visible = true;
        if (rocketGroup.userData.flame) {
            rocketGroup.userData.flame.scale.set(1, 1, 1);
        }
        this.renderer.addToScene(rocketGroup);
        return rocketGroup;
    }

    _getProjectilePool(type) {
        if (!this._projectilePools.has(type)) {
            this._projectilePools.set(type, []);
        }
        return this._projectilePools.get(type);
    }

    _getProjectileAssets(type, color) {
        if (this._projectileAssets.has(type)) {
            return this._projectileAssets.get(type);
        }

        const bodyGeo = new THREE.CylinderGeometry(0.15, 0.15, 1.2, 8);
        bodyGeo.rotateX(Math.PI / 2);
        const tipGeo = new THREE.ConeGeometry(0.15, 0.4, 8);
        tipGeo.rotateX(Math.PI / 2);
        const finGeo = new THREE.BoxGeometry(0.02, 0.25, 0.3);
        const flameGeo = new THREE.ConeGeometry(0.1, 0.5, 6);
        flameGeo.rotateX(-Math.PI / 2);

        const bodyMat = new THREE.MeshStandardMaterial({
            color,
            emissive: color,
            emissiveIntensity: 0.4,
            roughness: 0.3,
            metalness: 0.6,
        });
        const tipMat = new THREE.MeshStandardMaterial({
            color: 0xcccccc,
            emissive: color,
            emissiveIntensity: 0.2,
            roughness: 0.2,
            metalness: 0.8,
        });
        const finMat = new THREE.MeshStandardMaterial({
            color,
            emissive: color,
            emissiveIntensity: 0.3,
            roughness: 0.4,
            metalness: 0.5,
        });
        const flameMat = new THREE.MeshBasicMaterial({
            color: 0xff6600,
            transparent: true,
            opacity: 0.8,
        });

        const assets = {
            bodyGeo,
            tipGeo,
            finGeo,
            flameGeo,
            bodyMat,
            tipMat,
            finMat,
            flameMat,
        };
        this._projectileAssets.set(type, assets);
        return assets;
    }

    /** Prüft ob ein Gegner im Lock-On-Kegel ist (mit Cache) */
    _checkLockOn(player) {
        // Cache prüfen
        if (this._lockOnCache.has(player.index)) {
            return this._lockOnCache.get(player.index);
        }

        player.getDirection(this._tmpDir).normalize();
        const maxAngle = (CONFIG.HOMING.LOCK_ON_ANGLE * Math.PI) / 180;
        const maxRange = CONFIG.HOMING.MAX_LOCK_RANGE;
        const maxRangeSq = maxRange * maxRange;
        let bestTarget = null;
        let bestDistSq = Infinity;

        for (const other of this.players) {
            if (other === player || !other.alive) continue;
            if (!this._areInSameWorld(player, other)) continue;

            this._tmpVec.subVectors(other.position, player.position);
            const distSq = this._tmpVec.lengthSq();
            if (distSq > maxRangeSq || distSq < 1) continue;

            const angle = this._tmpDir.angleTo(this._tmpVec.normalize());
            if (angle <= maxAngle && distSq < bestDistSq) {
                bestTarget = other;
                bestDistSq = distSq;
            }
        }

        this._lockOnCache.set(player.index, bestTarget);
        return bestTarget;
    }

    /** Gibt das Lock-On-Ziel für einen Spieler zurück (für HUD, aus Cache) */
    getLockOnTarget(playerIndex) {
        // Aus Cache wenn vorhanden
        if (this._lockOnCache.has(playerIndex)) {
            return this._lockOnCache.get(playerIndex);
        }
        const player = this.players[playerIndex];
        if (!player || !player.alive) return null;
        return this._checkLockOn(player);
    }

    _updateProjectiles(dt) {
        const time = performance.now() * 0.001;

        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const projectile = this.projectiles[i];

            // Step ohne .clone() – direkt berechnen
            const vx = projectile.velocity.x * dt;
            const vy = projectile.velocity.y * dt;
            const vz = projectile.velocity.z * dt;
            projectile.position.x += vx;
            projectile.position.y += vy;
            projectile.position.z += vz;
            projectile.traveled += Math.sqrt(vx * vx + vy * vy + vz * vz);
            projectile.ttl -= dt;
            projectile.mesh.position.copy(projectile.position);

            // Rakete orientieren – tmp-Vektor statt clone
            this._tmpVec.addVectors(projectile.position, projectile.velocity);
            projectile.mesh.lookAt(this._tmpVec);

            // Portal-Check – numerische ID statt Template-String
            const portalResult = this._isDualWorldsActive()
                ? null
                : this.arena.checkPortal(projectile.position, projectile.radius, 1000 + i);
            if (portalResult) {
                projectile.position.copy(portalResult.target);
                // Offset in Flugrichtung
                this._tmpVec.copy(projectile.velocity).normalize().multiplyScalar(1.5);
                projectile.position.add(this._tmpVec);
                projectile.mesh.position.copy(projectile.position);
            }

            // Homing-Logik ohne neue Vektoren
            if (projectile.target && projectile.target.alive) {
                this._tmpVec.subVectors(projectile.target.position, projectile.position).normalize();
                this._tmpVec2.copy(projectile.velocity);
                const speed = this._tmpVec2.length();
                this._tmpVec2.normalize();

                const turnRate = CONFIG.HOMING.TURN_RATE * dt;
                this._tmpVec2.lerp(this._tmpVec, Math.min(turnRate, 1.0)).normalize();
                projectile.velocity.copy(this._tmpVec2.multiplyScalar(speed));

                // Orientierung updaten
                this._tmpVec.addVectors(projectile.position, projectile.velocity);
                projectile.mesh.lookAt(this._tmpVec);
            }

            // Raketenflamme flackern
            if (projectile.flame) {
                const flicker = 0.7 + Math.sin(time * 30 + i * 7) * 0.3;
                projectile.flame.scale.set(1, 1, flicker);
            }

            if (
                projectile.ttl <= 0 ||
                projectile.traveled >= CONFIG.PROJECTILE.MAX_DISTANCE ||
                this.arena.checkCollision(projectile.position, projectile.radius) ||
                this._isPositionOutOfWorldBounds(projectile.position, Number.isInteger(projectile.worldId) ? projectile.worldId : 0, projectile.radius)
            ) {
                // Wand/Arena Treffer
                if (this.particles) this.particles.spawnHit(projectile.position, 0xffff00);
                if (this.audio && !projectile.owner.isBot) this.audio.play('HIT');
                this._removeProjectileAt(i);
                continue;
            }

            let hit = false;
            for (const target of this.players) {
                if (!target.alive || target === projectile.owner) {
                    continue;
                }
                if (!this._areInSameWorld(projectile.owner, target)) {
                    continue;
                }

                const hitRadius = CONFIG.PLAYER.HITBOX_RADIUS + projectile.radius;
                if (target.position.distanceToSquared(projectile.position) <= hitRadius * hitRadius) {
                    if (target.hasShield) {
                        target.hasShield = false;
                        if (!projectile.owner.isBot) {
                            this._notifyPlayerFeedback(projectile.owner, 'Treffer geblockt');
                        }
                    } else {
                        target.applyPowerup(projectile.type);
                        // Powerup Effect
                        if (this.particles) this.particles.spawnExplosion(target.position, projectile.poolKey ? 0xff0000 : 0xffff00);
                        if (this.audio) this.audio.play('POWERUP');
                        if (!projectile.owner.isBot) {
                            this._notifyPlayerFeedback(projectile.owner, 'Treffer!');
                        }
                    }
                    hit = true;
                    break;
                }
            }

            if (hit) {
                this._removeProjectileAt(i);
            }
        }
    }

    _removeProjectileAt(index) {
        const projectile = this.projectiles[index];
        if (!projectile) return;

        this._releaseProjectileMesh(projectile);
        this.projectiles.splice(index, 1);
    }

    _releaseProjectileMesh(projectile) {
        this.renderer.removeFromScene(projectile.mesh);
        projectile.mesh.visible = false;
        const pool = this._getProjectilePool(projectile.poolKey || projectile.type);
        pool.push(projectile.mesh);
    }

    _notifyPlayerFeedback(player, message) {
        if (this.onPlayerFeedback) {
            this.onPlayerFeedback(player, message);
        }
    }

    _killPlayer(player, cause = 'UNKNOWN', killer = null) {
        if (!player || !player.alive) return;
        player.kill();
        if (this.particles) this.particles.spawnExplosion(player.position, player.color);
        if (this.audio) this.audio.play('EXPLOSION');
        if (player.isBot) {
            const ai = this.botByPlayer.get(player);
            if (ai?.onDeath) {
                ai.onDeath(cause, killer || null);
            }
        }
        if (killer && killer.isBot) {
            const killerAI = this.botByPlayer.get(killer);
            if (killerAI?.onKill) {
                killerAI.onKill(player, cause);
            }
        }
        if (this.recorder) {
            this.recorder.markPlayerDeath(player, cause);
            const killerIndex = Number.isFinite(killer?.index) ? killer.index : -1;
            const worldId = this._getWorldIdForPlayer(player);
            this.recorder.logEvent('KILL', player.index, `cause=${cause} killer=${killerIndex} world=${worldId}`);
        }
        if (this.onPlayerDied) {
            this.onPlayerDied(player);
        }
    }

    _isBotPositionSafe(player, position) {
        const hitbox = CONFIG.PLAYER.HITBOX_RADIUS;
        if (this.arena.checkCollision(position, hitbox)) {
            return false;
        }
        if (this._isPositionOutOfWorldBounds(position, this._getWorldIdForPlayer(player), hitbox)) {
            return false;
        }

        for (let i = 0; i < this.players.length; i++) {
            const other = this.players[i];
            if (!other || !other.alive) continue;
            if (!this._areInSameWorld(player, other)) continue;

            const skipRecent = other === player ? 20 : 0;
            if (other.trail.checkCollisionFast) {
                if (other.trail.checkCollisionFast(position, hitbox, skipRecent)) {
                    return false;
                }
            } else {
                const collision = other.trail.checkCollision(position, hitbox, skipRecent);
                if (collision && collision.hit) {
                    return false;
                }
            }
        }

        return true;
    }

    _clampBotPosition(vec, worldId = 0) {
        const b = this.arena.bounds;
        const m = CONFIG.PLAYER.HITBOX_RADIUS + 0.5;
        vec.x = Math.max(b.minX + m, Math.min(b.maxX - m, vec.x));
        vec.y = Math.max(b.minY + m, Math.min(b.maxY - m, vec.y));
        vec.z = Math.max(b.minZ + m, Math.min(b.maxZ - m, vec.z));
        if (this._isDualWorldsActive()) {
            const zone = this._getWorldBounds(worldId);
            if (zone) {
                vec.x = Math.max(zone.minX + m, Math.min(zone.maxX - m, vec.x));
            }
        }
    }

    _findSafeBouncePosition(player, baseDirection, normal = null) {
        const originX = player.position.x;
        const originY = player.position.y;
        const originZ = player.position.z;
        const worldId = this._getWorldIdForPlayer(player);
        const distances = [2.5, 4, 6, 8];

        const variants = [
            { x: baseDirection.x, y: baseDirection.y, z: baseDirection.z },
        ];

        if (normal) {
            variants.push({
                x: baseDirection.x + normal.x * 0.35,
                y: baseDirection.y + normal.y * 0.35,
                z: baseDirection.z + normal.z * 0.35,
            });
            variants.push({
                x: baseDirection.x - normal.x * 0.22,
                y: baseDirection.y - normal.y * 0.22,
                z: baseDirection.z - normal.z * 0.22,
            });
        }

        for (let v = 0; v < variants.length; v++) {
            let vx = variants[v].x;
            let vy = variants[v].y;
            let vz = variants[v].z;
            const len = Math.hypot(vx, vy, vz);
            if (len < 0.0001) continue;
            vx /= len;
            vy /= len;
            vz /= len;

            for (let i = 0; i < distances.length; i++) {
                const d = distances[i];
                this._tmpVec.set(
                    originX + vx * d,
                    originY + vy * d,
                    originZ + vz * d
                );
                this._clampBotPosition(this._tmpVec, worldId);
                if (this._isBotPositionSafe(player, this._tmpVec)) {
                    player.position.copy(this._tmpVec);
                    return true;
                }
            }
        }

        this._tmpVec.set(originX + baseDirection.x * 2, originY + baseDirection.y * 2, originZ + baseDirection.z * 2);
        this._clampBotPosition(this._tmpVec, worldId);
        player.position.copy(this._tmpVec);
        return false;
    }

    /** Bot prallt von Wand/Trail ab: Richtung reflektieren + zurückstoßen */
    _bounceBot(player, normalOverride = null, source = 'WALL') {
        // Aktuelle Flugrichtung ermitteln
        player.getDirection(this._tmpDir);

        const pos = player.position;
        const b = this.arena.bounds;

        let normal = this._tmpVec2;

        if (normalOverride) {
            normal.copy(normalOverride).normalize();
        } else {
            // Nächste Wand bestimmen
            // Distanzen zu den 6 Wänden berechnen

            // Distanzen zu den 6 Wänden berechnen
            const dLeft = pos.x - b.minX;
            const dRight = b.maxX - pos.x;
            const dDown = pos.y - b.minY;
            const dUp = b.maxY - pos.y;
            const dFront = pos.z - b.minZ;
            const dBack = b.maxZ - pos.z;

            // Nächste Wand finden → Normale in _tmpVec2
            let minDist = dLeft;
            this._tmpVec2.set(1, 0, 0);

            if (dRight < minDist) { minDist = dRight; this._tmpVec2.set(-1, 0, 0); }
            if (dDown < minDist) { minDist = dDown; this._tmpVec2.set(0, 1, 0); }
            if (dUp < minDist) { minDist = dUp; this._tmpVec2.set(0, -1, 0); }
            if (dFront < minDist) { minDist = dFront; this._tmpVec2.set(0, 0, 1); }
            if (dBack < minDist) { minDist = dBack; this._tmpVec2.set(0, 0, -1); }

            normal = this._tmpVec2;
        } // End else (no normalOverride)

        // Richtung reflektieren: r = d - 2(d·n)n (ohne Mutation der Normalen)
        const dot = this._tmpDir.dot(normal);
        // _tmpDir = _tmpDir - 2*dot*normal
        this._tmpDir.x -= 2 * dot * normal.x;
        this._tmpDir.y -= 2 * dot * normal.y;
        this._tmpDir.z -= 2 * dot * normal.z;
        this._tmpDir.normalize();

        // Add randomness to bounce to prevent loops
        this._tmpDir.addScaledVector(normal, 0.25);
        const randomScale = source === 'TRAIL' ? 0.35 : 0.24;
        this._tmpDir.x += (Math.random() - 0.5) * randomScale;
        this._tmpDir.y += (Math.random() - 0.5) * randomScale;
        this._tmpDir.z += (Math.random() - 0.5) * randomScale;
        if (player?.isPlanarMode && player.isPlanarMode()) {
            this._tmpDir.y = 0;
        }
        this._tmpDir.normalize();

        // Neue Richtung auf den Quaternion anwenden
        this._tmpVec.copy(pos).add(this._tmpDir);
        player.group.lookAt(this._tmpVec);
        player.quaternion.copy(player.group.quaternion);

        // Mehrere Distanzen testen und erste sichere Position nehmen.
        this._findSafeBouncePosition(player, this._tmpDir, normal);

        // Kurze Trail-Lücke nach Bounce
        player.trail.forceGap(0.3);

        const botAI = this.botByPlayer.get(player);
        if (botAI?.onBounce) {
            botAI.onBounce(source, normal);
        }

        if (this.recorder) {
            const eventType = source === 'TRAIL' ? 'BOUNCE_TRAIL' : 'BOUNCE_WALL';
            this.recorder.logEvent(eventType, player.index);
        }
    }


    updateCameras(dt) {
        let updatedAnyHumanCamera = false;
        for (const player of this.players) {
            if (!player.isBot && player.index < this.renderer.cameras.length) {
                const pos = player.position;
                const dir = player.alive ? player.getDirection(this._tmpDir2) : this._tmpDir2.set(0, 0, -1);
                const firstPersonAnchor = player.getFirstPersonCameraAnchor(this._tmpCamAnchor);
                this.renderer.updateCamera(
                    player.index,
                    pos,
                    dir,
                    dt,
                    player.quaternion,
                    player.cockpitCamera,
                    player.isBoosting,
                    this.arena,
                    firstPersonAnchor
                );
                player.cameraMode = this.renderer.cameraModes[player.index] || 0;
                updatedAnyHumanCamera = true;
            }
        }

        // Developer training mode: no human players -> use spectator cameras.
        if (!updatedAnyHumanCamera && this.humanPlayers.length === 0 && this.renderer.cameras.length > 0) {
            let primaryFocus = null;
            let secondaryFocus = null;

            if (this._isDualWorldsActive()) {
                primaryFocus = this._getSpectatorFocusForWorld(0);
                secondaryFocus = this._getSpectatorFocusForWorld(1);
                if (!primaryFocus && this.players.length > 0) {
                    primaryFocus = this.players[0];
                }
                if (!secondaryFocus) {
                    secondaryFocus = primaryFocus;
                }
            } else {
                for (let i = 0; i < this.players.length; i++) {
                    const p = this.players[i];
                    if (p?.alive) {
                        if (!primaryFocus) {
                            primaryFocus = p;
                        } else if (!secondaryFocus && p !== primaryFocus) {
                            secondaryFocus = p;
                        }
                    }
                }
                if (!primaryFocus && this.players.length > 0) {
                    primaryFocus = this.players[0];
                }
                if (!secondaryFocus) {
                    for (let i = 0; i < this.players.length; i++) {
                        const candidate = this.players[i];
                        if (candidate && candidate !== primaryFocus) {
                            secondaryFocus = candidate;
                            break;
                        }
                    }
                }
                if (!secondaryFocus) {
                    secondaryFocus = primaryFocus;
                }
            }

            if (primaryFocus) {
                const pos = primaryFocus.position;
                const dir = primaryFocus.alive ? primaryFocus.getDirection(this._tmpDir2) : this._tmpDir2.set(0, 0, -1);
                const firstPersonAnchor = primaryFocus.getFirstPersonCameraAnchor(this._tmpCamAnchor);
                this.renderer.updateCamera(
                    0,
                    pos,
                    dir,
                    dt,
                    primaryFocus.quaternion,
                    false,
                    primaryFocus.isBoosting,
                    this.arena,
                    firstPersonAnchor
                );
            }

            if (secondaryFocus && this.renderer.cameras.length > 1) {
                const pos = secondaryFocus.position;
                const dir = secondaryFocus.alive ? secondaryFocus.getDirection(this._tmpDir2) : this._tmpDir2.set(0, 0, -1);
                const firstPersonAnchor = secondaryFocus.getFirstPersonCameraAnchor(this._tmpCamAnchor);
                this.renderer.updateCamera(
                    1,
                    pos,
                    dir,
                    dt,
                    secondaryFocus.quaternion,
                    false,
                    secondaryFocus.isBoosting,
                    this.arena,
                    firstPersonAnchor
                );
            }
        }
    }

    getHumanPlayers() {
        return this.humanPlayers;
    }

    clear() {
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            this._removeProjectileAt(i);
        }

        for (const pool of this._projectilePools.values()) {
            for (const mesh of pool) {
                this.renderer.removeFromScene(mesh);
            }
        }
        this._projectilePools.clear();

        for (const assets of this._projectileAssets.values()) {
            assets.bodyGeo.dispose();
            assets.tipGeo.dispose();
            assets.finGeo.dispose();
            assets.flameGeo.dispose();
            assets.bodyMat.dispose();
            assets.tipMat.dispose();
            assets.finMat.dispose();
            assets.flameMat.dispose();
        }
        this._projectileAssets.clear();

        for (const player of this.players) {
            player.dispose();
        }
        this.players = [];
        this.humanPlayers = [];
        this.bots = [];
        this.botByPlayer.clear();
        this.projectiles = [];
        this._lockOnCache.clear();
        this._worldZones = [];
        this._worldRoundState = [];
        this._arenaViewCache.clear();
        this.dualWorlds = false;
        this.worldCount = 1;
    }
}

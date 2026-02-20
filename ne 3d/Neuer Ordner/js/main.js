// ============================================
// main.js - entry point and game controller
// ============================================

import * as THREE from 'three';
import { CONFIG } from './modules/Config.js';
import { Renderer } from './modules/Renderer.js';
import { GameLoop } from './modules/GameLoop.js';
import { InputManager } from './modules/InputManager.js';
import { Arena } from './modules/Arena.js';
import { EntityManager } from './modules/EntityManager.js';
import { PowerupManager } from './modules/Powerup.js';
import { ParticleSystem } from './modules/Particles.js';
import { AudioManager } from './modules/Audio.js';
import { HUD } from './modules/HUD.js';
import { RoundRecorder } from './modules/RoundRecorder.js';
import { BotLearningEngine } from './modules/BotLearning.js';
import { BotLearningProxy } from './modules/BotLearningProxy.js';

const SETTINGS_STORAGE_KEY = 'mini-curve-fever-3d.settings.v4';
const SETTINGS_STORAGE_LEGACY_KEYS = ['mini-curve-fever-3d.settings.v3'];
const SETTINGS_PROFILES_STORAGE_KEY = 'mini-curve-fever-3d.settings-profiles.v1';
const TRAINING_META_STORAGE_KEY = 'mini-curve-fever-3d.training-meta.v1';
const TRAINING_META_BACKUP_STORAGE_KEY = 'mini-curve-fever-3d.training-meta.v1.backup';
const LEARNING_SNAPSHOT_STORAGE_KEY = 'mini-curve-fever-3d.bot-learning.snapshot.v1';
const LEARNING_BASELINE_STORAGE_KEY = 'mini-curve-fever-3d.bot-learning.baseline.v1';
const LEARNING_DISK_SYNC_ENDPOINT = '/api/learning-sync';
const LEARNING_DISK_SYNC_MIN_INTERVAL_MS = 8000;
const LEARNING_IMPORT_STATE_KEY = 'mini-curve-fever-3d.bot-learning.legacy-import.v1';
const LEGACY_LEARNING_BASE_PATHS = Object.freeze([
    './bot-learning-data.json',
]);
const LEGACY_LEARNING_SUMMARY_PATH = './learning_history_compact_summary.json';

/* global __APP_VERSION__, __BUILD_TIME__, __BUILD_ID__ */
const APP_VERSION = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : 'dev';
const BUILD_TIME = typeof __BUILD_TIME__ !== 'undefined' ? __BUILD_TIME__ : new Date().toISOString();
const BUILD_ID = typeof __BUILD_ID__ !== 'undefined' ? __BUILD_ID__ : 'dev';


function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function createLearningEngine(options = {}) {
    if (typeof Worker !== 'undefined') {
        try {
            return new BotLearningProxy(options);
        } catch (error) {
            console.warn('[Learning] Worker proxy unavailable, falling back to main-thread engine.', error);
        }
    }
    return new BotLearningEngine(options);
}

const KEY_BIND_ACTIONS = [
    { label: 'Pitch Hoch', key: 'UP' },
    { label: 'Pitch Runter', key: 'DOWN' },
    { label: 'Links (Gier)', key: 'LEFT' },
    { label: 'Rechts (Gier)', key: 'RIGHT' },
    { label: 'Rollen Links', key: 'ROLL_LEFT' },
    { label: 'Rollen Rechts', key: 'ROLL_RIGHT' },
    { label: 'Boost', key: 'BOOST' },
    { label: 'Schiessen', key: 'SHOOT' },
    { label: 'Item Abwerfen', key: 'DROP' },
    { label: 'Item Wechseln', key: 'NEXT_ITEM' },
    { label: 'Kamera', key: 'CAMERA' },
];

export class Game {
    constructor() {
        this.settings = this._loadSettings();
        this.settingsProfiles = this._loadProfiles();
        this.trainingMeta = this._loadTrainingMeta();
        this.learningBaseline = this._loadLearningBaseline();
        this._recoverTrainingMetaFromPersistentSources();
        this.activeProfileName = '';
        this.settingsDirty = false;

        this.state = 'MENU';
        this.roundPause = 0;
        this._hudTimer = 0;
        this._adaptiveTimer = 0;
        this._statsTimer = 0;
        this._trainingOverlayTimer = 0;
        this._trainingProgressHistory = [];
        this._lastLearningAutoSaveAt = Date.now();
        this._learningDiskSync = {
            available: null,
            inFlight: false,
            initStarted: false,
            lastLoadedAt: 0,
            lastSavedAt: 0,
            lastFingerprint: '',
            lastError: '',
        };
        this._legacyLearningImportPromise = null;
        this._legacyLearningImportDone = false;
        this.keyCapture = null;
        this.isLowQuality = false;

        this._tmpAimVec = new THREE.Vector3();
        this._tmpAimDir = new THREE.Vector3();
        this._tmpRollEuler = new THREE.Euler(0, 0, 0, 'YXZ');

        const canvas = document.getElementById('game-canvas');
        this.renderer = new Renderer(canvas);
        this.input = new InputManager();
        this.audio = new AudioManager();

        // HUD Systems
        this.hudP1 = new HUD('p1-fighter-hud', 0);
        this.hudP2 = new HUD('p2-fighter-hud', 1);

        // Debug Recorder
        this.recorder = new RoundRecorder();
        const baseLearningStorageKey = CONFIG.BOT.LEARNING?.STORAGE_KEY || 'mini-curve-fever-3d.bot-learning.v1';
        const storageKey3D = CONFIG.BOT.LEARNING?.STORAGE_KEY_3D || `${baseLearningStorageKey}.3d`;
        const storageKeyPlanar = CONFIG.BOT.LEARNING?.STORAGE_KEY_PLANAR || `${baseLearningStorageKey}.planar`;
        if (typeof localStorage !== 'undefined') {
            try {
                if (storageKey3D !== baseLearningStorageKey) {
                    const legacyPayload = localStorage.getItem(baseLearningStorageKey);
                    const hasNew3DPayload = !!localStorage.getItem(storageKey3D);
                    if (legacyPayload && !hasNew3DPayload) {
                        localStorage.setItem(storageKey3D, legacyPayload);
                    }
                }
            } catch {
                // Ignore storage migration errors.
            }
        }
        this.botLearning3D = createLearningEngine({
            storageKey: storageKey3D,
        });
        this.botLearningPlanar = createLearningEngine({
            storageKey: storageKeyPlanar,
        });
        // Legacy alias for places that still reference a single engine.
        this.botLearning = this.botLearning3D;

        this._applySettingsToRuntime();
        this.input.setBindings(this.settings.controls);

        this.arena = null;
        this.entityManager = null;
        this.powerupManager = null;
        this.particles = new ParticleSystem(this.renderer);

        this.gameLoop = new GameLoop(
            (dt, loopMeta) => this.update(dt, loopMeta),
            () => this.render()
        );

        this.ui = {
            mainMenu: document.getElementById('main-menu'),
            hud: document.getElementById('hud'),
            p1Hud: document.getElementById('p1-hud'),
            p2Hud: document.getElementById('p2-hud'),
            p1Score: document.querySelector('#p1-hud .player-score'),
            p2Score: document.querySelector('#p2-hud .player-score'),
            p1Items: document.getElementById('p1-items'),
            p2Items: document.getElementById('p2-items'),
            messageOverlay: document.getElementById('message-overlay'),
            messageText: document.getElementById('message-text'),
            messageSub: document.getElementById('message-sub'),
            statusToast: document.getElementById('status-toast'),
            keybindWarning: document.getElementById('keybind-warning'),
            menuContext: document.getElementById('menu-context'),
            buildInfo: document.getElementById('build-info'),
            buildInfoDetail: document.getElementById('build-info-detail'),
            copyBuildButton: document.getElementById('btn-copy-build'),

            modeButtons: Array.from(document.querySelectorAll('.mode-btn')),
            mapSelect: document.getElementById('map-select'),
            botSlider: document.getElementById('bot-count'),
            botLabel: document.getElementById('bot-count-label'),
            botDifficultySelect: document.getElementById('bot-difficulty'),
            winSlider: document.getElementById('win-count'),
            winLabel: document.getElementById('win-count-label'),
            autoRollToggle: document.getElementById('auto-roll-toggle'),
            invertP1: document.getElementById('invert-p1'),
            invertP2: document.getElementById('invert-p2'),
            cockpitCamP1: document.getElementById('cockpit-cam-p1'),
            cockpitCamP2: document.getElementById('cockpit-cam-p2'),
            portalsToggle: document.getElementById('portals-toggle'),

            speedSlider: document.getElementById('speed-slider'),
            speedLabel: document.getElementById('speed-label'),
            turnSlider: document.getElementById('turn-slider'),
            turnLabel: document.getElementById('turn-label'),
            planeSizeSlider: document.getElementById('plane-size-slider'),
            planeSizeLabel: document.getElementById('plane-size-label'),
            trailWidthSlider: document.getElementById('trail-width-slider'),
            trailWidthLabel: document.getElementById('trail-width-label'),
            gapSizeSlider: document.getElementById('gap-size-slider'),
            gapSizeLabel: document.getElementById('gap-size-label'),
            gapFrequencySlider: document.getElementById('gap-frequency-slider'),
            gapFrequencyLabel: document.getElementById('gap-frequency-label'),
            itemAmountSlider: document.getElementById('item-amount-slider'),
            itemAmountLabel: document.getElementById('item-amount-label'),
            fireRateSlider: document.getElementById('fire-rate-slider'),
            fireRateLabel: document.getElementById('fire-rate-label'),
            lockOnSlider: document.getElementById('lockon-slider'),
            lockOnLabel: document.getElementById('lockon-label'),
            crosshairP1: document.getElementById('crosshair-p1'),
            crosshairP2: document.getElementById('crosshair-p2'),

            keybindP1: document.getElementById('keybind-p1'),
            keybindP2: document.getElementById('keybind-p2'),
            resetKeysButton: document.getElementById('btn-reset-keys'),
            saveKeysButton: document.getElementById('btn-save-keys'),
            profileNameInput: document.getElementById('profile-name'),
            profileSelect: document.getElementById('profile-select'),
            profileSaveButton: document.getElementById('btn-profile-save'),
            profileLoadButton: document.getElementById('btn-profile-load'),
            profileDeleteButton: document.getElementById('btn-profile-delete'),
            startButton: document.getElementById('btn-start'),

            trainingEnabledToggle: document.getElementById('training-enabled-toggle'),
            trainingBotOnlyToggle: document.getElementById('training-bot-only-toggle'),
            trainingMortalBotsToggle: document.getElementById('training-mortal-bots-toggle'),
            trainingAutoRestartToggle: document.getElementById('training-auto-restart-toggle'),
            trainingSpectatorSplitToggle: document.getElementById('training-spectator-split-toggle'),
            trainingDualWorldsToggle: document.getElementById('training-dual-worlds-toggle'),
            trainingPauseLearningToggle: document.getElementById('training-pause-learning-toggle'),
            trainingTimeScaleSlider: document.getElementById('training-time-scale-slider'),
            trainingTimeScaleLabel: document.getElementById('training-time-scale-label'),
            trainingAutoSaveSlider: document.getElementById('training-autosave-rounds-slider'),
            trainingAutoSaveLabel: document.getElementById('training-autosave-rounds-label'),
            trainingStartButton: document.getElementById('btn-training-start'),
            trainingSaveButton: document.getElementById('btn-training-save'),
            trainingResetButton: document.getElementById('btn-training-reset'),
            trainingSnapshotSaveButton: document.getElementById('btn-training-snapshot-save'),
            trainingSnapshotRestoreButton: document.getElementById('btn-training-snapshot-restore'),
            trainingBaselineSetButton: document.getElementById('btn-training-baseline-set'),
            trainingBaselineClearButton: document.getElementById('btn-training-baseline-clear'),
            trainingBaselineStatus: document.getElementById('training-baseline-status'),
            trainingStatusMain: document.getElementById('training-status-main'),
            trainingStatusStorage: document.getElementById('training-status-storage'),
            trainingStatus: document.getElementById('training-status'),
            trainingOverlay: document.getElementById('training-overlay'),
            trainingOverlayLines: document.getElementById('training-overlay-lines'),
            trainingOverlayProgressFill: document.getElementById('training-overlay-progress-fill'),
            trainingOverlayProgressLabel: document.getElementById('training-overlay-progress-label'),
            trainingOverlayStatusChip: document.getElementById('training-overlay-status-chip'),
            trainingOverlayStatusExplanation: document.getElementById('training-overlay-status-explanation'),
            trainingOverlayProgressSummary: document.getElementById('training-overlay-progress-summary'),
            trainingOverlayProgressExplainer: document.getElementById('training-overlay-progress-explainer'),
            trainingOverlayStorageSummary: document.getElementById('training-overlay-storage-summary'),
            trainingOverlayGraphLine: document.getElementById('training-overlay-graph-line'),
            trainingOverlayGraphArea: document.getElementById('training-overlay-graph-area'),
            trainingOverlayGraphRange: document.getElementById('training-overlay-graph-range'),
            trainingOverlayActivityMain: document.getElementById('training-overlay-activity-main'),
            trainingOverlayActivitySub: document.getElementById('training-overlay-activity-sub'),
            trainingOverlayStabilityMain: document.getElementById('training-overlay-stability-main'),
            trainingOverlayStabilitySub: document.getElementById('training-overlay-stability-sub'),
            trainingOverlayPersistenceMain: document.getElementById('training-overlay-persistence-main'),
            trainingOverlayPersistenceSub: document.getElementById('training-overlay-persistence-sub'),
        };

        this._navButtons = [];
        this._menuButtonByPanel = new Map();
        this._lastMenuTrigger = null;
        this._buildInfoClipboardText = '';

        this._setupMenuListeners();
        this._setupMenuNavigation();
        this._syncMenuControls();
        this._markSettingsDirty(false);
        this._renderBuildInfo();
        this._bootstrapLearningDiskSync();
        this._kickoffLegacyLearningImport();

        this.gameLoop.start();

        window.addEventListener('keydown', (e) => this._handleKeyCapture(e), true);

        // Performance Analyse-Overlay (F) + Quality Toggle (P)
        this._fpsTracker = {
            samples: [], avg: 60, update(dt) {
                if (dt > 0) this.samples.push(1 / dt);
                if (this.samples.length > 60) this.samples.shift();
                this.avg = this.samples.length > 0
                    ? this.samples.reduce((a, b) => a + b, 0) / this.samples.length : 60;
            }
        };

        window.addEventListener('keydown', (e) => {
            if (e.code === 'KeyP' && !this.keyCapture) {
                this.isLowQuality = !this.isLowQuality;
                const quality = this.isLowQuality ? 'LOW' : 'HIGH';
                this.renderer.setQuality(quality);
                this._showStatusToast(`Grafik: ${quality === 'LOW' ? 'Niedrig (Schnell)' : 'Hoch (Schön)'}`);
            }
            // Performance Analyse-Overlay (F)
            if (e.code === 'KeyF' && !this.keyCapture) {
                if (!this.stats) {
                    this.stats = document.createElement('div');
                    this.stats.style.cssText = 'position:fixed;top:10px;left:10px;color:#0f0;font:13px/1.5 monospace;z-index:1000;pointer-events:none;background:rgba(0,0,0,0.6);padding:8px 12px;border-radius:6px;min-width:200px;white-space:pre-wrap;';
                    document.body.appendChild(this.stats);
                    this._statsTimer = 0;
                } else {
                    this.stats.remove();
                    this.stats = null;
                }
            }
        });

        const flushLearningData = () => {
            this._saveLearningData(false, true);
            this._syncLearningDataToDisk(true, { keepalive: true });
        };
        window.addEventListener('beforeunload', flushLearningData);
        window.addEventListener('pagehide', flushLearningData);
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                flushLearningData();
            }
        });
    }

    // update() ist weiter unten definiert (einzelne Methode für alles)

    _formatBuildTime() {
        if (BUILD_TIME === 'dev') {
            return {
                short: 'dev',
                iso: 'dev',
                local: 'dev',
            };
        }

        const parsed = new Date(BUILD_TIME);
        const iso = Number.isNaN(parsed.getTime()) ? BUILD_TIME : parsed.toISOString();
        const local = Number.isNaN(parsed.getTime())
            ? BUILD_TIME
            : parsed.toLocaleString('de-DE', { hour12: false });
        const short = iso.slice(0, 16).replace('T', ' ');

        return { short, iso, local };
    }

    _renderBuildInfo() {
        const buildTime = this._formatBuildTime();
        const shortInfo = `v${APP_VERSION} · Build ${BUILD_ID} · ${buildTime.short}`;
        const detailInfo = [
            `Version: v${APP_VERSION}`,
            `Build-ID: ${BUILD_ID}`,
            `Zeit (UTC): ${buildTime.iso}`,
            `Zeit (lokal): ${buildTime.local}`,
        ].join('\n');

        if (this.ui.buildInfo) {
            this.ui.buildInfo.textContent = shortInfo;
        }
        if (this.ui.buildInfoDetail) {
            this.ui.buildInfoDetail.textContent = detailInfo;
        }
        this._buildInfoClipboardText = detailInfo;
    }

    _copyBuildInfoToClipboard() {
        const payload = this._buildInfoClipboardText || `v${APP_VERSION} · Build ${BUILD_ID}`;
        const fallbackCopy = () => {
            const helper = document.createElement('textarea');
            helper.value = payload;
            helper.setAttribute('readonly', 'readonly');
            helper.style.position = 'fixed';
            helper.style.top = '-9999px';
            document.body.appendChild(helper);
            helper.select();
            const copied = document.execCommand('copy');
            document.body.removeChild(helper);
            this._showStatusToast(copied ? 'Build-Info kopiert' : 'Kopieren nicht moeglich', 1400, copied ? 'success' : 'error');
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(payload)
                .then(() => this._showStatusToast('Build-Info kopiert', 1400, 'success'))
                .catch(() => fallbackCopy());
            return;
        }

        fallbackCopy();
    }

    _getMenuSectionLabel(panelId) {
        if (!panelId) return 'Hauptmenue';

        const linkedButton = this._menuButtonByPanel.get(panelId);
        if (linkedButton) {
            return (linkedButton.textContent || '').replace(/\s+/g, ' ').trim();
        }

        const panelTitle = document.querySelector(`#${panelId} .submenu-title`);
        return (panelTitle?.textContent || 'Untermenue').replace(/\s+/g, ' ').trim();
    }

    _updateMenuContext() {
        if (!this.ui.menuContext) return;

        const section = this._getMenuSectionLabel(this._activeSubmenu);
        const activeProfile = this.activeProfileName || this._normalizeProfileName(this.ui.profileNameInput?.value || '') || 'kein Profil';
        const dirtyState = this.settingsDirty ? 'ungespeicherte Aenderungen' : 'alles gespeichert';
        this.ui.menuContext.textContent = `${section} · Profil: ${activeProfile} · ${dirtyState}`;
    }

    _createDefaultSettings() {
        return {
            mode: '1p',
            mapKey: 'standard',
            numBots: 1,
            botDifficulty: 'NORMAL',
            winsNeeded: 5,
            autoRoll: true,
            invertPitch: {
                PLAYER_1: false,
                PLAYER_2: false,
            },
            cockpitCamera: {
                PLAYER_1: false,
                PLAYER_2: false,
            },
            portalsEnabled: true,
            gameplay: {
                speed: 18,
                turnSensitivity: 2.2,
                planeScale: 1.0,
                trailWidth: 0.6,
                gapSize: 0.3,
                gapFrequency: 0.02,
                itemAmount: 8,
                fireRate: 0.45,
                lockOnAngle: 15,
                planarMode: false,
                portalCount: 0,
                planarLevelCount: 5,
                portalBeams: false,
            },
            training: {
                enabled: false,
                botVsBotOnly: false,
                mortalBots: false,
                autoRestart: true,
                spectatorSplit: false,
                dualWorlds: false,
                onlineLearningPaused: false,
                timeScale: 1000.0,
                autoSaveRounds: 5,
            },
            controls: this._cloneDefaultControls(),
        };
    }

    _cloneDefaultControls() {
        const base = deepClone(CONFIG.KEYS);
        return {
            PLAYER_1: { ...base.PLAYER_1 },
            PLAYER_2: { ...base.PLAYER_2 },
        };
    }

    _normalizePlayerControls(source, fallback) {
        const src = source || {};
        const out = {
            UP: src.UP || fallback.UP,
            DOWN: src.DOWN || fallback.DOWN,
            LEFT: src.LEFT || fallback.LEFT,
            RIGHT: src.RIGHT || fallback.RIGHT,
            ROLL_LEFT: src.ROLL_LEFT || fallback.ROLL_LEFT,
            ROLL_RIGHT: src.ROLL_RIGHT || fallback.ROLL_RIGHT,
            BOOST: src.BOOST || fallback.BOOST,
            SHOOT: src.SHOOT || fallback.SHOOT,
            NEXT_ITEM: src.NEXT_ITEM || fallback.NEXT_ITEM,
            DROP: src.DROP || fallback.DROP,
            CAMERA: src.CAMERA || fallback.CAMERA,
        };

        return out;
    }

    _sanitizeSettings(saved) {
        const defaults = this._createDefaultSettings();
        const src = saved && typeof saved === 'object' ? saved : {};
        const merged = deepClone(defaults);

        merged.mode = src.mode === '2p' ? '2p' : '1p';
        merged.mapKey = CONFIG.MAPS[src.mapKey] ? src.mapKey : defaults.mapKey;
        merged.numBots = clamp(parseInt(src.numBots ?? defaults.numBots, 10), 0, 8);
        merged.botDifficulty = ['EASY', 'NORMAL', 'HARD'].includes(src.botDifficulty)
            ? src.botDifficulty
            : defaults.botDifficulty;
        merged.winsNeeded = clamp(parseInt(src.winsNeeded ?? defaults.winsNeeded, 10), 1, 15);
        merged.autoRoll = typeof src.autoRoll === 'boolean' ? src.autoRoll : defaults.autoRoll;

        merged.invertPitch.PLAYER_1 = !!src?.invertPitch?.PLAYER_1;
        merged.invertPitch.PLAYER_2 = !!src?.invertPitch?.PLAYER_2;
        merged.cockpitCamera.PLAYER_1 = !!src?.cockpitCamera?.PLAYER_1;
        merged.cockpitCamera.PLAYER_2 = !!src?.cockpitCamera?.PLAYER_2;
        merged.portalsEnabled = src?.portalsEnabled !== undefined ? !!src.portalsEnabled : defaults.portalsEnabled;

        merged.gameplay.speed = clamp(parseFloat(src?.gameplay?.speed ?? defaults.gameplay.speed), 8, 40);
        merged.gameplay.turnSensitivity = clamp(parseFloat(src?.gameplay?.turnSensitivity ?? defaults.gameplay.turnSensitivity), 0.8, 5);
        merged.gameplay.planeScale = clamp(parseFloat(src?.gameplay?.planeScale ?? defaults.gameplay.planeScale), 0.6, 2.0);
        merged.gameplay.trailWidth = clamp(parseFloat(src?.gameplay?.trailWidth ?? defaults.gameplay.trailWidth), 0.2, 2.5);
        merged.gameplay.gapSize = clamp(parseFloat(src?.gameplay?.gapSize ?? defaults.gameplay.gapSize), 0.05, 1.5);
        merged.gameplay.gapFrequency = clamp(parseFloat(src?.gameplay?.gapFrequency ?? defaults.gameplay.gapFrequency), 0, 0.25);
        merged.gameplay.itemAmount = clamp(parseInt(src?.gameplay?.itemAmount ?? defaults.gameplay.itemAmount, 10), 1, 20);
        merged.gameplay.fireRate = clamp(parseFloat(src?.gameplay?.fireRate ?? defaults.gameplay.fireRate), 0.1, 2.0);
        merged.gameplay.lockOnAngle = clamp(parseInt(src?.gameplay?.lockOnAngle ?? defaults.gameplay.lockOnAngle, 10), 5, 45);
        merged.gameplay.planarMode = !!(src?.gameplay?.planarMode ?? defaults.gameplay.planarMode);
        merged.gameplay.portalCount = clamp(parseInt(src?.gameplay?.portalCount ?? defaults.gameplay.portalCount, 10), 0, 20);
        merged.gameplay.planarLevelCount = clamp(parseInt(src?.gameplay?.planarLevelCount ?? defaults.gameplay.planarLevelCount, 10), 2, 10);
        merged.gameplay.portalBeams = false;

        merged.training.enabled = !!(src?.training?.enabled ?? defaults.training.enabled);
        merged.training.botVsBotOnly = !!(src?.training?.botVsBotOnly ?? defaults.training.botVsBotOnly);
        merged.training.mortalBots = !!(src?.training?.mortalBots ?? defaults.training.mortalBots);
        merged.training.autoRestart = src?.training?.autoRestart !== undefined
            ? !!src.training.autoRestart
            : defaults.training.autoRestart;
        merged.training.spectatorSplit = !!(src?.training?.spectatorSplit ?? defaults.training.spectatorSplit);
        merged.training.dualWorlds = !!(src?.training?.dualWorlds ?? defaults.training.dualWorlds);
        merged.training.onlineLearningPaused = !!(src?.training?.onlineLearningPaused ?? defaults.training.onlineLearningPaused);
        const parsedTrainingScale = parseFloat(src?.training?.timeScale ?? defaults.training.timeScale);
        const trainingScaleBounds = this._getTrainingTimeScaleBounds();
        merged.training.timeScale = clamp(
            Number.isFinite(parsedTrainingScale) ? parsedTrainingScale : defaults.training.timeScale,
            trainingScaleBounds.min,
            trainingScaleBounds.max
        );
        const parsedAutoSaveRounds = parseInt(src?.training?.autoSaveRounds ?? defaults.training.autoSaveRounds, 10);
        merged.training.autoSaveRounds = clamp(
            Number.isFinite(parsedAutoSaveRounds) ? parsedAutoSaveRounds : defaults.training.autoSaveRounds,
            1,
            50
        );

        merged.controls.PLAYER_1 = this._normalizePlayerControls(src?.controls?.PLAYER_1, defaults.controls.PLAYER_1);
        merged.controls.PLAYER_2 = this._normalizePlayerControls(src?.controls?.PLAYER_2, defaults.controls.PLAYER_2);

        return merged;
    }

    _loadSettings() {
        try {
            const keys = [SETTINGS_STORAGE_KEY, ...SETTINGS_STORAGE_LEGACY_KEYS];
            for (const key of keys) {
                const raw = localStorage.getItem(key);
                if (!raw) continue;
                const saved = JSON.parse(raw);
                return this._sanitizeSettings(saved);
            }
        } catch {
            // Ignore malformed storage and fall back to defaults.
        }
        return this._createDefaultSettings();
    }

    _saveSettings() {
        try {
            localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(this.settings));
            this._markSettingsDirty(false);
        } catch {
            // Ignore persistence errors (private mode, quotas, etc.)
        }
    }

    _loadProfiles() {
        try {
            const raw = localStorage.getItem(SETTINGS_PROFILES_STORAGE_KEY);
            if (!raw) return [];
            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed)) return [];

            const out = [];
            const used = new Set();
            for (const entry of parsed) {
                const name = this._normalizeProfileName(entry?.name || '');
                const key = this._getProfileNameKey(name);
                if (!name || used.has(key)) continue;
                used.add(key);
                out.push({
                    name,
                    updatedAt: Number(entry?.updatedAt || Date.now()),
                    settings: this._sanitizeSettings(entry?.settings || {}),
                });
            }
            out.sort((a, b) => b.updatedAt - a.updatedAt);
            return out;
        } catch {
            return [];
        }
    }

    _saveProfiles() {
        try {
            localStorage.setItem(SETTINGS_PROFILES_STORAGE_KEY, JSON.stringify(this.settingsProfiles));
            return true;
        } catch {
            // Ignore persistence errors.
            return false;
        }
    }

    _createDefaultTrainingMeta() {
        return {
            version: 1,
            totalTrainingRounds: 0,
            firstTrainingAt: 0,
            lastTrainingAt: 0,
        };
    }

    _sanitizeTrainingMeta(meta) {
        const src = meta && typeof meta === 'object' ? meta : {};
        const out = this._createDefaultTrainingMeta();
        out.totalTrainingRounds = Math.max(0, Math.floor(Number(src.totalTrainingRounds) || 0));
        out.firstTrainingAt = Math.max(0, Math.floor(Number(src.firstTrainingAt) || 0));
        out.lastTrainingAt = Math.max(0, Math.floor(Number(src.lastTrainingAt) || 0));
        return out;
    }

    _mergeTrainingMeta(...sources) {
        const merged = this._createDefaultTrainingMeta();
        for (let i = 0; i < sources.length; i++) {
            const current = this._sanitizeTrainingMeta(sources[i]);
            merged.totalTrainingRounds = Math.max(merged.totalTrainingRounds, current.totalTrainingRounds);
            if (current.firstTrainingAt > 0 && (merged.firstTrainingAt <= 0 || current.firstTrainingAt < merged.firstTrainingAt)) {
                merged.firstTrainingAt = current.firstTrainingAt;
            }
            merged.lastTrainingAt = Math.max(merged.lastTrainingAt, current.lastTrainingAt);
        }
        if (merged.lastTrainingAt > 0 && merged.firstTrainingAt > 0 && merged.lastTrainingAt < merged.firstTrainingAt) {
            merged.lastTrainingAt = merged.firstTrainingAt;
        }
        return this._sanitizeTrainingMeta(merged);
    }

    _readTrainingMetaFromStorageKey(storageKey) {
        if (typeof localStorage === 'undefined' || !storageKey) return null;
        try {
            const raw = localStorage.getItem(storageKey);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            return this._sanitizeTrainingMeta(parsed);
        } catch {
            return null;
        }
    }

    _loadTrainingMeta() {
        const primary = this._readTrainingMetaFromStorageKey(TRAINING_META_STORAGE_KEY);
        const backup = this._readTrainingMetaFromStorageKey(TRAINING_META_BACKUP_STORAGE_KEY);
        return this._mergeTrainingMeta(primary, backup);
    }

    _recoverTrainingMetaFromPersistentSources() {
        const baselineRounds = Math.max(0, Math.floor(Number(this.learningBaseline?.absoluteRoundCount) || 0));
        const baselineAt = Math.max(0, Math.floor(Number(this.learningBaseline?.createdAt) || 0));
        const snapshot = this._loadLearningSnapshot();
        const merged = this._mergeTrainingMeta(
            this.trainingMeta,
            baselineRounds > 0 || baselineAt > 0
                ? {
                    totalTrainingRounds: baselineRounds,
                    firstTrainingAt: baselineAt,
                    lastTrainingAt: baselineAt,
                }
                : null,
            snapshot?.trainingMeta || null
        );
        const current = this._sanitizeTrainingMeta(this.trainingMeta);
        const changed = (
            merged.totalTrainingRounds !== current.totalTrainingRounds
            || merged.firstTrainingAt !== current.firstTrainingAt
            || merged.lastTrainingAt !== current.lastTrainingAt
        );
        this.trainingMeta = merged;
        if (changed) {
            this._saveTrainingMeta();
        }
    }

    _saveTrainingMeta() {
        if (typeof localStorage === 'undefined') return false;
        try {
            const payload = this._mergeTrainingMeta(
                this._readTrainingMetaFromStorageKey(TRAINING_META_STORAGE_KEY),
                this._readTrainingMetaFromStorageKey(TRAINING_META_BACKUP_STORAGE_KEY),
                this.trainingMeta
            );
            this.trainingMeta = payload;
            const serialized = JSON.stringify(payload);
            localStorage.setItem(TRAINING_META_STORAGE_KEY, serialized);
            localStorage.setItem(TRAINING_META_BACKUP_STORAGE_KEY, serialized);
            return true;
        } catch {
            return false;
        }
    }

    _recordAbsoluteTrainingRound() {
        if (!this.trainingMeta || typeof this.trainingMeta !== 'object') {
            this.trainingMeta = this._createDefaultTrainingMeta();
        }
        const now = Date.now();
        this.trainingMeta.totalTrainingRounds = Math.max(0, Math.floor(Number(this.trainingMeta.totalTrainingRounds) || 0)) + 1;
        if (!Number.isFinite(this.trainingMeta.firstTrainingAt) || this.trainingMeta.firstTrainingAt <= 0) {
            this.trainingMeta.firstTrainingAt = now;
        }
        this.trainingMeta.lastTrainingAt = now;
        this._saveTrainingMeta();
        return this.trainingMeta.totalTrainingRounds;
    }

    _getAbsoluteTrainingRoundCount(sessionRoundCount = 0) {
        const sessionRounds = Number.isFinite(sessionRoundCount) ? Math.max(0, Math.floor(sessionRoundCount)) : 0;
        const persistedRounds = Math.max(0, Math.floor(Number(this.trainingMeta?.totalTrainingRounds) || 0));
        const baselineRounds = Math.max(0, Math.floor(Number(this.learningBaseline?.absoluteRoundCount) || 0));
        return Math.max(sessionRounds, persistedRounds, baselineRounds);
    }

    _normalizeProfileName(rawName) {
        return String(rawName || '')
            .trim()
            .replace(/\s+/g, ' ')
            .slice(0, 32);
    }

    _getProfileNameKey(rawName) {
        return this._normalizeProfileName(rawName).toLocaleLowerCase();
    }

    _findProfileIndexByName(profileName) {
        const key = this._getProfileNameKey(profileName);
        if (!key) return -1;
        return this.settingsProfiles.findIndex((profile) => this._getProfileNameKey(profile.name) === key);
    }

    _findProfileByName(profileName) {
        const index = this._findProfileIndexByName(profileName);
        return index >= 0 ? this.settingsProfiles[index] : null;
    }

    _applySettingsToRuntime() {
        const trainingBotOnly = !!(this.settings.training?.enabled && this.settings.training?.botVsBotOnly);
        const trainingDualWorlds = !!(trainingBotOnly && this.settings.training?.dualWorlds);
        this.numHumans = trainingBotOnly ? 0 : (this.settings.mode === '2p' ? 2 : 1);
        const minBots = trainingDualWorlds ? 4 : (trainingBotOnly ? 2 : 0);
        const maxBots = trainingDualWorlds ? 4 : 8;
        const parsedBots = parseInt(this.settings.numBots, 10);
        this.numBots = clamp(Number.isFinite(parsedBots) ? parsedBots : minBots, minBots, maxBots);
        this.settings.numBots = this.numBots;
        this.mapKey = this.settings.mapKey;
        this.winsNeeded = this.settings.winsNeeded;

        CONFIG.PLAYER.SPEED = this.settings.gameplay.speed;
        CONFIG.PLAYER.TURN_SPEED = this.settings.gameplay.turnSensitivity;
        CONFIG.PLAYER.MODEL_SCALE = this.settings.gameplay.planeScale;
        CONFIG.PLAYER.HITBOX_RADIUS = 0.8 * this.settings.gameplay.planeScale;
        CONFIG.PLAYER.AUTO_ROLL = this.settings.autoRoll;

        if (this.settings.gameplay) {
            const requestedPlanarMode = !!this.settings.gameplay.planarMode;
            CONFIG.GAMEPLAY.PLANAR_MODE = trainingDualWorlds ? false : requestedPlanarMode;
            CONFIG.GAMEPLAY.PORTAL_COUNT = this.settings.gameplay.portalCount || 0;
            CONFIG.GAMEPLAY.PLANAR_LEVEL_COUNT = clamp(parseInt(this.settings.gameplay.planarLevelCount ?? 5, 10), 2, 10);
        }

        CONFIG.TRAIL.WIDTH = this.settings.gameplay.trailWidth;
        CONFIG.TRAIL.GAP_DURATION = this.settings.gameplay.gapSize;
        CONFIG.TRAIL.GAP_CHANCE = this.settings.gameplay.gapFrequency;

        CONFIG.POWERUP.MAX_ON_FIELD = Math.round(this.settings.gameplay.itemAmount);
        CONFIG.PROJECTILE.COOLDOWN = this.settings.gameplay.fireRate;

        if (this.settings.gameplay) {
            CONFIG.GAMEPLAY.PORTAL_BEAMS = false;
        }

        CONFIG.BOT.ACTIVE_DIFFICULTY = this.settings.botDifficulty || CONFIG.BOT.DEFAULT_DIFFICULTY;
        const onlineLearningPaused = !!this.settings.training?.onlineLearningPaused;
        this._setLearningEnginesEnabled(true, !onlineLearningPaused);

        // Apply immediately if arena exists
        if (this.arena && this.arena.toggleBeams) {
            this.arena.toggleBeams(CONFIG.GAMEPLAY.PORTAL_BEAMS);
        }
        if (this.entityManager && this.entityManager.setBotDifficulty) {
            this.entityManager.setBotDifficulty(CONFIG.BOT.ACTIVE_DIFFICULTY);
        }
        if (this.entityManager && this.entityManager.setTrainingOptions) {
            this.entityManager.setTrainingOptions(this.settings.training);
        }

        this.input.setBindings(this.settings.controls);

        CONFIG.HOMING.LOCK_ON_ANGLE = this.settings.gameplay.lockOnAngle;
        this._applyLoopTiming(1.0);
    }

    _setupMenuListeners() {
        this.ui.modeButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                this.settings.mode = btn.dataset.mode === '2p' ? '2p' : '1p';
                this._onSettingsChanged();
            });
        });

        this.ui.mapSelect.addEventListener('change', (e) => {
            this.settings.mapKey = CONFIG.MAPS[e.target.value] ? e.target.value : 'standard';
            this._onSettingsChanged();
        });

        this.ui.botSlider.addEventListener('input', () => {
            this.settings.numBots = clamp(parseInt(this.ui.botSlider.value, 10), 0, 8);
            this._onSettingsChanged();
        });

        if (this.ui.botDifficultySelect) {
            this.ui.botDifficultySelect.addEventListener('change', () => {
                const value = String(this.ui.botDifficultySelect.value || '').toUpperCase();
                this.settings.botDifficulty = ['EASY', 'NORMAL', 'HARD'].includes(value) ? value : 'NORMAL';
                this._onSettingsChanged();
            });
        }

        this.ui.winSlider.addEventListener('input', () => {
            this.settings.winsNeeded = clamp(parseInt(this.ui.winSlider.value, 10), 1, 15);
            this._onSettingsChanged();
        });

        this.ui.autoRollToggle.addEventListener('change', () => {
            this.settings.autoRoll = !!this.ui.autoRollToggle.checked;
            this._onSettingsChanged();
        });

        this.ui.invertP1.addEventListener('change', () => {
            this.settings.invertPitch.PLAYER_1 = !!this.ui.invertP1.checked;
            this._onSettingsChanged();
        });

        this.ui.invertP2.addEventListener('change', () => {
            this.settings.invertPitch.PLAYER_2 = !!this.ui.invertP2.checked;
            this._onSettingsChanged();
        });

        this.ui.cockpitCamP1.addEventListener('change', () => {
            this.settings.cockpitCamera.PLAYER_1 = !!this.ui.cockpitCamP1.checked;
            this._onSettingsChanged();
        });

        this.ui.cockpitCamP2.addEventListener('change', () => {
            this.settings.cockpitCamera.PLAYER_2 = !!this.ui.cockpitCamP2.checked;
            this._onSettingsChanged();
        });

        const planarModeToggle = document.getElementById('planar-mode-toggle');
        if (planarModeToggle) {
            planarModeToggle.addEventListener('change', (e) => {
                if (!this.settings.gameplay) this.settings.gameplay = {};
                this.settings.gameplay.planarMode = e.target.checked;

                // Usability: Auto-active portals if they are off, because Planar Mode needs them
                if (this.settings.gameplay.planarMode && (this.settings.gameplay.portalCount || 0) === 0) {
                    this.settings.gameplay.portalCount = 4;
                    this._showStatusToast('Ebenen-Modus: 4 Portale aktiviert');
                }

                this._onSettingsChanged();
            });
        }

        this.ui.portalsToggle.addEventListener('change', () => {
            this.settings.portalsEnabled = !!this.ui.portalsToggle.checked;
            this._onSettingsChanged();
        });

        this.ui.speedSlider.addEventListener('input', () => {
            this.settings.gameplay.speed = clamp(parseFloat(this.ui.speedSlider.value), 8, 40);
            this._onSettingsChanged();
        });

        this.ui.turnSlider.addEventListener('input', () => {
            this.settings.gameplay.turnSensitivity = clamp(parseFloat(this.ui.turnSlider.value), 0.8, 5);
            this._onSettingsChanged();
        });

        this.ui.planeSizeSlider.addEventListener('input', () => {
            this.settings.gameplay.planeScale = clamp(parseFloat(this.ui.planeSizeSlider.value), 0.6, 2.0);
            this._onSettingsChanged();
        });

        this.ui.trailWidthSlider.addEventListener('input', () => {
            this.settings.gameplay.trailWidth = clamp(parseFloat(this.ui.trailWidthSlider.value), 0.2, 2.5);
            this._onSettingsChanged();
        });

        this.ui.gapSizeSlider.addEventListener('input', () => {
            this.settings.gameplay.gapSize = clamp(parseFloat(this.ui.gapSizeSlider.value), 0.05, 1.5);
            this._onSettingsChanged();
        });

        this.ui.gapFrequencySlider.addEventListener('input', () => {
            this.settings.gameplay.gapFrequency = clamp(parseFloat(this.ui.gapFrequencySlider.value), 0, 0.25);
            this._onSettingsChanged();
        });

        this.ui.itemAmountSlider.addEventListener('input', () => {
            this.settings.gameplay.itemAmount = clamp(parseInt(this.ui.itemAmountSlider.value, 10), 1, 20);
            this._onSettingsChanged();
        });

        this.ui.fireRateSlider.addEventListener('input', () => {
            this.settings.gameplay.fireRate = clamp(parseFloat(this.ui.fireRateSlider.value), 0.1, 2.0);
            this._onSettingsChanged();
        });

        this.ui.lockOnSlider.addEventListener('input', () => {
            this.settings.gameplay.lockOnAngle = clamp(parseInt(this.ui.lockOnSlider.value, 10), 5, 45);
            this._onSettingsChanged();
        });

        this.ui.keybindP1.addEventListener('click', (e) => {
            const btn = e.target.closest('button.keybind-btn');
            if (!btn) return;
            this._startKeyCapture('PLAYER_1', btn.dataset.action);
        });

        this.ui.keybindP2.addEventListener('click', (e) => {
            const btn = e.target.closest('button.keybind-btn');
            if (!btn) return;
            this._startKeyCapture('PLAYER_2', btn.dataset.action);
        });

        this.ui.resetKeysButton.addEventListener('click', () => {
            this.settings.controls = this._cloneDefaultControls();
            this._onSettingsChanged();
            this._showStatusToast('✅ Standard-Tasten wiederhergestellt');
        });

        this.ui.saveKeysButton.addEventListener('click', () => {
            this._saveSettings();
            this._showStatusToast('Einstellungen gespeichert');
        });

        this.ui.startButton.addEventListener('click', () => {
            this.startMatch();
        });

        if (this.ui.profileSaveButton) {
            this.ui.profileSaveButton.addEventListener('click', () => {
                this._saveProfile(this.ui.profileNameInput?.value || '');
            });
        }
        if (this.ui.profileLoadButton) {
            this.ui.profileLoadButton.addEventListener('click', () => {
                const selected = this._normalizeProfileName(this.ui.profileSelect?.value || '');
                if (!selected) {
                    this._showStatusToast('Profil auswaehlen', 1400, 'error');
                    return;
                }
                this._loadProfile(selected);
            });
        }
        if (this.ui.profileDeleteButton) {
            this.ui.profileDeleteButton.addEventListener('click', () => {
                const selected = this._normalizeProfileName(this.ui.profileSelect?.value || '');
                if (!selected) {
                    this._showStatusToast('Profil auswaehlen', 1400, 'error');
                    return;
                }
                this._deleteProfile(selected);
            });
        }
        if (this.ui.profileSelect) {
            this.ui.profileSelect.addEventListener('change', () => {
                const selected = this._normalizeProfileName(this.ui.profileSelect.value || '');
                const selectedProfile = this._findProfileByName(selected);
                this.activeProfileName = selectedProfile ? selectedProfile.name : '';
                if (this.ui.profileNameInput) {
                    this.ui.profileNameInput.value = this.activeProfileName;
                }
                this._syncProfileActionState();
            });
        }
        if (this.ui.profileNameInput) {
            this.ui.profileNameInput.addEventListener('input', () => {
                this._syncProfileActionState();
            });
            this.ui.profileNameInput.addEventListener('keydown', (event) => {
                if (event.key !== 'Enter') return;
                event.preventDefault();
                this._saveProfile(this.ui.profileNameInput.value || '');
            });
        }

        const portalCountSlider = document.getElementById('portal-count-slider');
        const portalCountLabel = document.getElementById('portal-count-label');
        if (portalCountSlider && portalCountLabel) {
            portalCountSlider.addEventListener('input', (e) => {
                const val = parseInt(e.target.value, 10);
                portalCountLabel.textContent = val;
                if (!this.settings.gameplay) this.settings.gameplay = {};
                this.settings.gameplay.portalCount = val;
                this._onSettingsChanged();
            });
        }

        const planarLevelCountSlider = document.getElementById('planar-level-count-slider');
        const planarLevelCountLabel = document.getElementById('planar-level-count-label');
        if (planarLevelCountSlider && planarLevelCountLabel) {
            planarLevelCountSlider.addEventListener('input', (e) => {
                const val = clamp(parseInt(e.target.value, 10), 2, 10);
                planarLevelCountLabel.textContent = val;
                if (!this.settings.gameplay) this.settings.gameplay = {};
                this.settings.gameplay.planarLevelCount = val;
                this._onSettingsChanged();
            });
        }

        if (this.ui.copyBuildButton) {
            this.ui.copyBuildButton.addEventListener('click', () => {
                this._copyBuildInfoToClipboard();
            });
        }

        if (this.ui.trainingEnabledToggle) {
            this.ui.trainingEnabledToggle.addEventListener('change', () => {
                this.settings.training.enabled = !!this.ui.trainingEnabledToggle.checked;
                this._onSettingsChanged();
            });
        }
        if (this.ui.trainingBotOnlyToggle) {
            this.ui.trainingBotOnlyToggle.addEventListener('change', () => {
                this.settings.training.botVsBotOnly = !!this.ui.trainingBotOnlyToggle.checked;
                if (this.settings.training.botVsBotOnly) {
                    const requiredBots = this.settings.training.dualWorlds ? 4 : 2;
                    this.settings.numBots = Math.max(requiredBots, this.settings.numBots || requiredBots);
                    this.settings.training.mortalBots = true;
                }
                this._onSettingsChanged();
            });
        }
        if (this.ui.trainingMortalBotsToggle) {
            this.ui.trainingMortalBotsToggle.addEventListener('change', () => {
                this.settings.training.mortalBots = !!this.ui.trainingMortalBotsToggle.checked;
                this._onSettingsChanged();
            });
        }
        if (this.ui.trainingAutoRestartToggle) {
            this.ui.trainingAutoRestartToggle.addEventListener('change', () => {
                this.settings.training.autoRestart = !!this.ui.trainingAutoRestartToggle.checked;
                this._onSettingsChanged();
            });
        }
        if (this.ui.trainingSpectatorSplitToggle) {
            this.ui.trainingSpectatorSplitToggle.addEventListener('change', () => {
                this.settings.training.spectatorSplit = !!this.ui.trainingSpectatorSplitToggle.checked;
                this._onSettingsChanged();
            });
        }
        if (this.ui.trainingDualWorldsToggle) {
            this.ui.trainingDualWorldsToggle.addEventListener('change', () => {
                this.settings.training.dualWorlds = !!this.ui.trainingDualWorldsToggle.checked;
                if (this.settings.training.dualWorlds) {
                    this.settings.training.enabled = true;
                    this.settings.training.botVsBotOnly = true;
                    this.settings.training.mortalBots = true;
                    this.settings.training.spectatorSplit = true;
                    this.settings.numBots = 4;
                }
                this._onSettingsChanged();
            });
        }
        if (this.ui.trainingPauseLearningToggle) {
            this.ui.trainingPauseLearningToggle.addEventListener('change', () => {
                this.settings.training.onlineLearningPaused = !!this.ui.trainingPauseLearningToggle.checked;
                this._onSettingsChanged();
            });
        }
        if (this.ui.trainingTimeScaleSlider) {
            this.ui.trainingTimeScaleSlider.addEventListener('input', () => {
                const bounds = this._getTrainingTimeScaleBounds();
                const parsed = parseFloat(this.ui.trainingTimeScaleSlider.value);
                this.settings.training.timeScale = clamp(Number.isFinite(parsed) ? parsed : 1, bounds.min, bounds.max);
                this._onSettingsChanged();
            });
        }
        if (this.ui.trainingAutoSaveSlider) {
            this.ui.trainingAutoSaveSlider.addEventListener('input', () => {
                this.settings.training.autoSaveRounds = clamp(parseInt(this.ui.trainingAutoSaveSlider.value, 10), 1, 50);
                this._onSettingsChanged();
            });
        }
        if (this.ui.trainingStartButton) {
            this.ui.trainingStartButton.addEventListener('click', () => {
                this._startDeveloperTraining();
            });
        }
        if (this.ui.trainingSaveButton) {
            this.ui.trainingSaveButton.addEventListener('click', () => {
                this._saveLearningData(true);
            });
        }
        if (this.ui.trainingResetButton) {
            this.ui.trainingResetButton.addEventListener('click', () => {
                this._resetLearningData();
            });
        }
        if (this.ui.trainingSnapshotSaveButton) {
            this.ui.trainingSnapshotSaveButton.addEventListener('click', () => {
                this._saveLearningSnapshot(true);
            });
        }
        if (this.ui.trainingSnapshotRestoreButton) {
            this.ui.trainingSnapshotRestoreButton.addEventListener('click', () => {
                this._restoreLearningSnapshot(true);
            });
        }
        if (this.ui.trainingBaselineSetButton) {
            this.ui.trainingBaselineSetButton.addEventListener('click', () => {
                this._setLearningBaseline(true);
            });
        }
        if (this.ui.trainingBaselineClearButton) {
            this.ui.trainingBaselineClearButton.addEventListener('click', () => {
                this._clearLearningBaseline(true);
            });
        }
    }

    _setupMenuNavigation() {
        this._menuNav = document.getElementById('menu-nav');
        this._submenuPanels = Array.from(document.querySelectorAll('.submenu-panel'));
        this._activeSubmenu = null;
        this._navButtons = Array.from(document.querySelectorAll('.nav-btn[data-submenu]'));
        this._menuButtonByPanel.clear();

        for (const panel of this._submenuPanels) {
            panel.setAttribute('aria-hidden', panel.classList.contains('hidden') ? 'true' : 'false');
        }

        // Nav-Buttons → Untermenü öffnen
        for (const btn of this._navButtons) {
            const panelId = btn.dataset.submenu;
            if (panelId) {
                this._menuButtonByPanel.set(panelId, btn);
            }
            btn.setAttribute('aria-expanded', 'false');
            btn.addEventListener('click', () => {
                this._lastMenuTrigger = btn;
                this._showSubmenu(panelId);
            });
        }

        if (this._menuNav) {
            this._menuNav.addEventListener('keydown', (e) => {
                const navKeys = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End'];
                if (!navKeys.includes(e.key)) return;

                const currentIndex = this._navButtons.indexOf(document.activeElement);
                if (currentIndex < 0) return;

                e.preventDefault();
                if (e.key === 'Home') {
                    this._navButtons[0]?.focus();
                    return;
                }
                if (e.key === 'End') {
                    this._navButtons[this._navButtons.length - 1]?.focus();
                    return;
                }

                const step = (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? -1 : 1;
                this._focusNextNavButton(currentIndex, step);
            });
        }

        // Zurück-Buttons → Hauptnavigation
        const backBtns = document.querySelectorAll('.back-btn[data-back]');
        for (const btn of backBtns) {
            btn.addEventListener('click', () => {
                this._showMainNav();
            });
        }

        // ESC im Menü → Zurück zur Hauptnavigation
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && this.state === 'MENU' && this._activeSubmenu) {
                e.preventDefault();
                this._showMainNav();
            }
        });

        this._updateMenuNavState();
        this._updateMenuContext();
    }

    _focusNextNavButton(currentIndex, step) {
        if (!this._navButtons.length) return;
        const length = this._navButtons.length;
        const nextIndex = (currentIndex + step + length) % length;
        this._navButtons[nextIndex]?.focus();
    }

    _updateMenuNavState() {
        for (const btn of this._navButtons) {
            const panelId = btn.dataset.submenu;
            const isActive = !!this._activeSubmenu && panelId === this._activeSubmenu;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        }
    }

    _focusFirstInSubmenu(panel) {
        if (!panel) return;
        const focusTarget = panel.querySelector(
            'button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusTarget) {
            focusTarget.focus();
        }
    }

    _showSubmenu(panelId) {
        if (!panelId) return;

        if (this._menuNav) {
            this._menuNav.classList.add('hidden');
            this._menuNav.setAttribute('aria-hidden', 'true');
        }
        for (const panel of this._submenuPanels) {
            panel.classList.add('hidden');
            panel.setAttribute('aria-hidden', 'true');
        }
        const target = document.getElementById(panelId);
        if (target) {
            target.classList.remove('hidden');
            target.setAttribute('aria-hidden', 'false');
            this._activeSubmenu = panelId;
            this._updateMenuNavState();
            this._focusFirstInSubmenu(target);
            this._updateMenuContext();
        }
    }

    _showMainNav() {
        for (const panel of this._submenuPanels) {
            panel.classList.add('hidden');
            panel.setAttribute('aria-hidden', 'true');
        }
        if (this._menuNav) {
            this._menuNav.classList.remove('hidden');
            this._menuNav.setAttribute('aria-hidden', 'false');
        }
        this._activeSubmenu = null;
        this._updateMenuNavState();
        this._updateMenuContext();

        const focusTarget = this._lastMenuTrigger || this._navButtons[0];
        if (focusTarget && this.state === 'MENU') {
            focusTarget.focus();
        }
    }

    _onSettingsChanged() {
        this._applySettingsToRuntime();
        this._markSettingsDirty(true);
        this._syncMenuControls();
    }

    _syncMenuControls() {
        this.ui.modeButtons.forEach((btn) => {
            btn.classList.toggle('active', btn.dataset.mode === this.settings.mode);
        });

        this.ui.mapSelect.value = this.settings.mapKey;

        this.ui.botSlider.value = String(this.settings.numBots);
        this.ui.botLabel.textContent = String(this.settings.numBots);
        if (this.ui.botDifficultySelect) {
            this.ui.botDifficultySelect.value = this.settings.botDifficulty || 'NORMAL';
        }

        this.ui.winSlider.value = String(this.settings.winsNeeded);
        this.ui.winLabel.textContent = String(this.settings.winsNeeded);

        this.ui.autoRollToggle.checked = this.settings.autoRoll;
        this.ui.invertP1.checked = this.settings.invertPitch.PLAYER_1;
        this.ui.invertP2.checked = this.settings.invertPitch.PLAYER_2;
        this.ui.cockpitCamP1.checked = this.settings.cockpitCamera.PLAYER_1;
        this.ui.cockpitCamP2.checked = this.settings.cockpitCamera.PLAYER_2;

        const planarModeToggle = document.getElementById('planar-mode-toggle');
        if (planarModeToggle) {
            planarModeToggle.checked = this.settings.gameplay?.planarMode || false;
        }

        this.ui.portalsToggle.checked = this.settings.portalsEnabled;

        const portalCountSlider = document.getElementById('portal-count-slider');
        const portalCountLabel = document.getElementById('portal-count-label');
        if (portalCountSlider && portalCountLabel) {
            const val = this.settings.gameplay?.portalCount || 0;
            portalCountSlider.value = val;
            portalCountLabel.textContent = val;
        }

        const planarLevelCountSlider = document.getElementById('planar-level-count-slider');
        const planarLevelCountLabel = document.getElementById('planar-level-count-label');
        if (planarLevelCountSlider && planarLevelCountLabel) {
            const val = clamp(parseInt(this.settings.gameplay?.planarLevelCount ?? 5, 10), 2, 10);
            planarLevelCountSlider.value = val;
            planarLevelCountLabel.textContent = val;
        }

        this.ui.speedSlider.value = String(this.settings.gameplay.speed);
        this.ui.speedLabel.textContent = this.settings.gameplay.speed.toFixed(1);

        this.ui.turnSlider.value = String(this.settings.gameplay.turnSensitivity);
        this.ui.turnLabel.textContent = this.settings.gameplay.turnSensitivity.toFixed(1);

        this.ui.planeSizeSlider.value = String(this.settings.gameplay.planeScale);
        this.ui.planeSizeLabel.textContent = this.settings.gameplay.planeScale.toFixed(1);

        this.ui.trailWidthSlider.value = String(this.settings.gameplay.trailWidth);
        this.ui.trailWidthLabel.textContent = this.settings.gameplay.trailWidth.toFixed(2);

        this.ui.gapSizeSlider.value = String(this.settings.gameplay.gapSize);
        this.ui.gapSizeLabel.textContent = this.settings.gameplay.gapSize.toFixed(2);

        this.ui.gapFrequencySlider.value = String(this.settings.gameplay.gapFrequency);
        this.ui.gapFrequencyLabel.textContent = this.settings.gameplay.gapFrequency.toFixed(3);

        this.ui.itemAmountSlider.value = String(this.settings.gameplay.itemAmount);
        this.ui.itemAmountLabel.textContent = String(this.settings.gameplay.itemAmount);

        this.ui.fireRateSlider.value = String(this.settings.gameplay.fireRate);
        this.ui.fireRateLabel.textContent = this.settings.gameplay.fireRate.toFixed(2);

        this.ui.lockOnSlider.value = String(this.settings.gameplay.lockOnAngle);
        this.ui.lockOnLabel.textContent = String(this.settings.gameplay.lockOnAngle);

        if (this.ui.trainingEnabledToggle) {
            this.ui.trainingEnabledToggle.checked = !!this.settings.training?.enabled;
        }
        if (this.ui.trainingBotOnlyToggle) {
            this.ui.trainingBotOnlyToggle.checked = !!this.settings.training?.botVsBotOnly;
        }
        if (this.ui.trainingMortalBotsToggle) {
            this.ui.trainingMortalBotsToggle.checked = !!this.settings.training?.mortalBots;
        }
        if (this.ui.trainingAutoRestartToggle) {
            this.ui.trainingAutoRestartToggle.checked = !!this.settings.training?.autoRestart;
        }
        if (this.ui.trainingSpectatorSplitToggle) {
            this.ui.trainingSpectatorSplitToggle.checked = !!this.settings.training?.spectatorSplit;
        }
        if (this.ui.trainingDualWorldsToggle) {
            this.ui.trainingDualWorldsToggle.checked = !!this.settings.training?.dualWorlds;
        }
        if (this.ui.trainingPauseLearningToggle) {
            this.ui.trainingPauseLearningToggle.checked = !!this.settings.training?.onlineLearningPaused;
        }
        if (this.ui.trainingBaselineClearButton) {
            this.ui.trainingBaselineClearButton.disabled = !this.learningBaseline;
        }
        if (this.ui.trainingTimeScaleSlider && this.ui.trainingTimeScaleLabel) {
            const bounds = this._getTrainingTimeScaleBounds();
            const scale = clamp(parseFloat(this.settings.training?.timeScale ?? 1), bounds.min, bounds.max);
            this.ui.trainingTimeScaleSlider.max = String(bounds.max);
            this.ui.trainingTimeScaleSlider.value = scale.toFixed(1);
            this.ui.trainingTimeScaleLabel.textContent = scale.toFixed(1);
        }
        if (this.ui.trainingAutoSaveSlider && this.ui.trainingAutoSaveLabel) {
            const rounds = clamp(parseInt(this.settings.training?.autoSaveRounds ?? 5, 10), 1, 50);
            this.ui.trainingAutoSaveSlider.value = String(rounds);
            this.ui.trainingAutoSaveLabel.textContent = String(rounds);
        }

        this._renderKeybindEditor();
        this._syncP2HudVisibility();
        this._syncProfileControls();
        this._updateSaveButtonState();
        this._updateTrainingStatus();
    }

    _markSettingsDirty(isDirty) {
        this.settingsDirty = !!isDirty;
        this._updateSaveButtonState();
    }

    _updateSaveButtonState() {
        if (!this.ui?.saveKeysButton) return;
        this.ui.saveKeysButton.classList.toggle('unsaved', this.settingsDirty);
        this.ui.saveKeysButton.textContent = this.settingsDirty
            ? '💾 Einstellungen explizit speichern *'
            : '💾 Einstellungen explizit speichern';
        this._updateMenuContext();
    }

    _syncProfileControls() {
        if (!this.ui.profileSelect) return;

        const selectedName = this._normalizeProfileName(this.activeProfileName || this.ui.profileSelect.value || '');
        const sortedProfiles = [...this.settingsProfiles].sort((a, b) => b.updatedAt - a.updatedAt);
        this.ui.profileSelect.innerHTML = '';

        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = 'Kein Profil gewaehlt';
        this.ui.profileSelect.appendChild(placeholder);

        for (const profile of sortedProfiles) {
            const opt = document.createElement('option');
            opt.value = profile.name;
            opt.textContent = profile.name;
            this.ui.profileSelect.appendChild(opt);
        }

        const validSelectedProfile = this._findProfileByName(selectedName);
        const validSelected = validSelectedProfile ? validSelectedProfile.name : '';
        this.activeProfileName = validSelected;
        this.ui.profileSelect.value = validSelected;

        if (this.ui.profileNameInput && !document.activeElement?.isSameNode(this.ui.profileNameInput)) {
            this.ui.profileNameInput.value = validSelected;
        }
        this._syncProfileActionState();
    }

    _syncProfileActionState() {
        const selectedProfile = this._findProfileByName(this.ui.profileSelect?.value || this.activeProfileName || '');
        const typedName = this._normalizeProfileName(this.ui.profileNameInput?.value || '');
        const typedProfileIdx = this._findProfileIndexByName(typedName);
        const activeProfileIdx = this._findProfileIndexByName(this.activeProfileName);
        const canUpdateActive = typedName && typedProfileIdx >= 0 && typedProfileIdx === activeProfileIdx;

        if (this.ui.profileLoadButton) {
            this.ui.profileLoadButton.disabled = !selectedProfile;
        }
        if (this.ui.profileDeleteButton) {
            this.ui.profileDeleteButton.disabled = !selectedProfile;
        }
        if (this.ui.profileSaveButton) {
            this.ui.profileSaveButton.disabled = !typedName;
            if (!typedName) {
                this.ui.profileSaveButton.textContent = 'Profil unter Namen speichern';
            } else if (canUpdateActive) {
                this.ui.profileSaveButton.textContent = 'Aktives Profil aktualisieren';
            } else if (typedProfileIdx >= 0) {
                this.ui.profileSaveButton.textContent = 'Name bereits vergeben';
            } else {
                this.ui.profileSaveButton.textContent = 'Neues Profil speichern';
            }
        }
        this._updateMenuContext();
    }

    _saveProfile(profileName) {
        const name = this._normalizeProfileName(profileName);
        if (!name) {
            this._showStatusToast('Profilname fehlt', 1400, 'error');
            return false;
        }

        const idx = this._findProfileIndexByName(name);
        const activeIdx = this._findProfileIndexByName(this.activeProfileName);
        const canOverwrite = idx >= 0 && idx === activeIdx;
        if (idx >= 0 && !canOverwrite) {
            this._showStatusToast('Name existiert bereits', 1500, 'error');
            return false;
        }

        const isUpdate = idx >= 0;
        const entry = {
            name,
            updatedAt: Date.now(),
            settings: deepClone(this.settings),
        };

        if (idx >= 0) {
            this.settingsProfiles[idx] = entry;
        } else {
            this.settingsProfiles.push(entry);
        }

        this.activeProfileName = name;
        const persisted = this._saveProfiles();
        this._syncProfileControls();
        if (!persisted) {
            this._showStatusToast('Profil konnte nicht gespeichert werden', 1700, 'error');
            return false;
        }

        this._showStatusToast(
            isUpdate ? `Profil aktualisiert: ${name}` : `Profil gespeichert: ${name}`,
            1500,
            'success'
        );
        return true;
    }

    _loadProfile(profileName) {
        const name = this._normalizeProfileName(profileName);
        const profile = this._findProfileByName(name);
        if (!profile) {
            this._showStatusToast('Profil nicht gefunden', 1500, 'error');
            return false;
        }

        this.settings = this._sanitizeSettings(profile.settings);
        this.activeProfileName = profile.name;
        this._onSettingsChanged();
        this._markSettingsDirty(false);
        this._showStatusToast(`Profil geladen: ${profile.name}`, 1400, 'success');
        return true;
    }

    _deleteProfile(profileName) {
        const name = this._normalizeProfileName(profileName);
        const index = this._findProfileIndexByName(name);
        if (index < 0) {
            this._showStatusToast('Profil nicht gefunden', 1500, 'error');
            return false;
        }

        const removedName = this.settingsProfiles[index].name;
        this.settingsProfiles.splice(index, 1);

        if (this._findProfileIndexByName(this.activeProfileName) < 0) {
            this.activeProfileName = '';
        }
        const persisted = this._saveProfiles();
        this._syncProfileControls();
        if (!persisted) {
            this._showStatusToast('Profil konnte nicht geloescht werden', 1700, 'error');
            return false;
        }

        this._showStatusToast(`Profil geloescht: ${removedName}`, 1400, 'success');
        return true;
    }

    _renderKeybindEditor() {
        const conflicts = this._collectKeyConflicts();
        this._renderKeybindRows('PLAYER_1', this.ui.keybindP1, conflicts);
        this._renderKeybindRows('PLAYER_2', this.ui.keybindP2, conflicts);
        this._updateKeyConflictWarning(conflicts);
    }

    _renderKeybindRows(playerKey, container, conflicts) {
        container.innerHTML = '';

        for (const action of KEY_BIND_ACTIONS) {
            const row = document.createElement('div');
            row.className = 'key-row';

            const label = document.createElement('div');
            label.className = 'key-action';
            label.textContent = action.label;

            const value = this._getControlValue(playerKey, action.key);
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'keybind-btn';
            button.dataset.action = action.key;
            const isConflict = !!value && (conflicts.get(value) || 0) > 1;
            button.textContent = this._formatKeyCode(value) + (isConflict ? '  (Konflikt)' : '');
            if (isConflict) {
                row.classList.add('conflict');
                button.classList.add('conflict');
            }

            if (this.keyCapture && this.keyCapture.playerKey === playerKey && this.keyCapture.actionKey === action.key) {
                button.classList.add('listening');
                button.textContent = 'Taste druecken...';
            }

            row.appendChild(label);
            row.appendChild(button);
            container.appendChild(row);
        }
    }

    _startKeyCapture(playerKey, actionKey) {
        this.keyCapture = { playerKey, actionKey };
        this._renderKeybindEditor();
    }

    _handleKeyCapture(event) {
        if (!this.keyCapture || this.ui.mainMenu.classList.contains('hidden')) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (event.code === 'Escape') {
            this.keyCapture = null;
            this._renderKeybindEditor();
            return;
        }

        this._setControlValue(this.keyCapture.playerKey, this.keyCapture.actionKey, event.code);
        this.keyCapture = null;
        this._onSettingsChanged();
        this._showStatusToast('✅ Taste gespeichert!');
    }

    _getControlValue(playerKey, actionKey) {
        return this.settings.controls[playerKey][actionKey] || '';
    }

    _setControlValue(playerKey, actionKey, value) {
        this.settings.controls[playerKey][actionKey] = value;
    }

    _collectKeyConflicts() {
        const counts = new Map();
        for (const playerKey of ['PLAYER_1', 'PLAYER_2']) {
            for (const action of KEY_BIND_ACTIONS) {
                const code = this._getControlValue(playerKey, action.key);
                if (!code) continue;
                counts.set(code, (counts.get(code) || 0) + 1);
            }
        }
        return counts;
    }

    _updateKeyConflictWarning(conflicts) {
        const conflictCodes = Array.from(conflicts.entries())
            .filter(([, count]) => count > 1)
            .map(([code]) => this._formatKeyCode(code));

        if (conflictCodes.length === 0) {
            this.ui.keybindWarning.classList.add('hidden');
            this.ui.keybindWarning.textContent = '';
            return;
        }

        this.ui.keybindWarning.classList.remove('hidden');
        this.ui.keybindWarning.textContent = `Achtung: Mehrfachbelegte Tasten: ${conflictCodes.join(', ')}`;
    }

    _formatKeyCode(code) {
        if (!code) return '-';

        const named = {
            ArrowUp: 'Arrow Up',
            ArrowDown: 'Arrow Down',
            ArrowLeft: 'Arrow Left',
            ArrowRight: 'Arrow Right',
            ShiftLeft: 'Shift Left',
            ShiftRight: 'Shift Right',
            Space: 'Space',
            Enter: 'Enter',
            Escape: 'Escape',
            ControlLeft: 'Ctrl Left',
            ControlRight: 'Ctrl Right',
            AltLeft: 'Alt Left',
            AltRight: 'Alt Right',
        };

        if (named[code]) {
            return named[code];
        }
        if (code.startsWith('Key')) {
            return code.slice(3);
        }
        if (code.startsWith('Digit')) {
            return code.slice(5);
        }
        if (code.startsWith('Numpad')) {
            return `Num ${code.slice(6)}`;
        }
        return code;
    }

    _showStatusToast(message, durationMs = 1200, tone = 'info') {
        if (!this.ui.statusToast) return;

        const normalizedTone = tone === 'success' || tone === 'error' ? tone : 'info';
        this.ui.statusToast.textContent = message;
        this.ui.statusToast.classList.remove('hidden', 'show', 'toast-info', 'toast-success', 'toast-error');
        this.ui.statusToast.classList.add(`toast-${normalizedTone}`);
        // Restart animation on repeated calls.
        void this.ui.statusToast.offsetWidth;
        this.ui.statusToast.classList.add('show');

        if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
        }
        this.toastTimeout = setTimeout(() => {
            this.ui.statusToast.classList.remove('show');
            this.ui.statusToast.classList.add('hidden');
        }, durationMs);
    }

    _showPlayerFeedback(player, message) {
        if (!player) return;
        const prefix = player.isBot ? `Bot ${player.index + 1}` : `P${player.index + 1}`;
        this._showStatusToast(`${prefix}: ${message}`);
    }

    _syncP2HudVisibility() {
        if (this.ui.p1Hud) {
            this.ui.p1Hud.classList.toggle('hidden', this.numHumans < 1);
        }
        if (this.ui.p2Hud) {
            this.ui.p2Hud.classList.toggle('hidden', this.numHumans !== 2);
        }
    }

    _getTrainingTimeScaleBounds() {
        const configuredMax = Number(CONFIG.BOT?.LEARNING?.MAX_TRAINING_TIME_SCALE);
        const max = Number.isFinite(configuredMax) ? Math.max(1, configuredMax) : 1000;
        return {
            min: 0.5,
            max,
        };
    }

    _getTrainingBaseTimeScale() {
        const enabled = !!this.settings?.training?.enabled;
        if (!enabled) return 1.0;
        const parsed = parseFloat(this.settings.training.timeScale ?? 1.0);
        const bounds = this._getTrainingTimeScaleBounds();
        return clamp(Number.isFinite(parsed) ? parsed : 1.0, bounds.min, bounds.max);
    }

    _applyLoopTiming(slowFactor = 1.0) {
        if (!this.gameLoop) return;

        const bounds = this._getTrainingTimeScaleBounds();
        const runtimeBoostAllowed = this.state === 'PLAYING' || this.state === 'ROUND_END';
        const baseScale = runtimeBoostAllowed ? this._getTrainingBaseTimeScale() : 1.0;
        const safeSlowFactor = Number.isFinite(slowFactor) && slowFactor > 0 ? slowFactor : 1.0;
        const targetScale = clamp(baseScale * safeSlowFactor, 0.05, bounds.max);
        this.gameLoop.setTimeScale(targetScale);

        const defaultBudget = Math.max(1, Math.floor(CONFIG.MAX_UPDATES_PER_FRAME || 5));
        const turboTraining = runtimeBoostAllowed && this._isTrainingBotOnlyMode() && targetScale > 8;
        let maxUpdatesPerFrame = defaultBudget;
        let maxUpdateCpuMs = 8;
        let dropAccumulatorOnBudgetExhaust = false;

        if (turboTraining) {
            // Quality-safe turbo mode:
            // - no accumulator dropping
            // - no CPU-budget early-abort
            // - enough fixed-step budget to cover clamped dt spikes (up to 0.05s/frame)
            maxUpdatesPerFrame = clamp(Math.ceil(targetScale * 3.2), defaultBudget, 4000);
            maxUpdateCpuMs = 0;
            dropAccumulatorOnBudgetExhaust = false;
        }

        if (typeof this.gameLoop.configureUpdateBudget === 'function') {
            this.gameLoop.configureUpdateBudget({
                maxUpdatesPerFrame,
                maxUpdateCpuMs,
                dropAccumulatorOnBudgetExhaust,
            });
        }
    }

    _isTrainingBotOnlyMode() {
        return !!(this.settings?.training?.enabled && this.settings?.training?.botVsBotOnly);
    }

    _isTrainingDualWorldsMode() {
        return !!(
            this._isTrainingBotOnlyMode()
            && this.settings?.training?.dualWorlds
            && (this.numBots || 0) >= 4
        );
    }

    _isTrainingSpectatorSplitMode() {
        if (this._isTrainingDualWorldsMode()) {
            return true;
        }
        return !!(
            this._isTrainingBotOnlyMode()
            && this.settings?.training?.spectatorSplit
            && (this.numBots || 0) >= 2
        );
    }

    _getLearningEngines() {
        const out = [];
        if (this.botLearning3D) out.push(this.botLearning3D);
        if (this.botLearningPlanar && this.botLearningPlanar !== this.botLearning3D) {
            out.push(this.botLearningPlanar);
        }
        return out;
    }

    _getLearningEngineMap() {
        return {
            mode3d: this.botLearning3D || null,
            planar: this.botLearningPlanar || this.botLearning3D || null,
        };
    }

    _setLearningEnginesEnabled(enabled, trainingEnabled = enabled) {
        const active = !!enabled;
        const trainingActive = !!trainingEnabled;
        const engines = this._getLearningEngines();
        for (let i = 0; i < engines.length; i++) {
            engines[i].setEnabled(active);
            engines[i].setTrainingEnabled(trainingActive);
        }
    }

    _kickoffLegacyLearningImport() {
        if (this._legacyLearningImportDone || this._legacyLearningImportPromise) return;
        this._legacyLearningImportPromise = (async () => {
            const legacyResult = await this._importLegacyLearningDataIfAvailable();
            const canMutateNow = this.state === 'MENU';
            const upgradedEngines = canMutateNow ? this._upgradeActiveLearningSchemas() : 0;
            if (upgradedEngines > 0) {
                this._saveLearningData(false, true);
                this._updateTrainingStatus();
                if ((legacyResult?.integratedSources || 0) <= 0) {
                    this._showStatusToast(`Lernschema aktualisiert (${upgradedEngines} Engine${upgradedEngines > 1 ? 's' : ''})`, 2200, 'success');
                }
            }
            const deferred = !!legacyResult?.deferred || !canMutateNow;
            if (!deferred) {
                this._legacyLearningImportDone = true;
            }
        })().catch((error) => {
            console.warn('[Learning] Legacy import failed.', error);
        }).finally(() => {
            this._legacyLearningImportPromise = null;
        });
    }

    async _importLegacyLearningDataIfAvailable() {
        const engines = this._getLearningEngines();
        if (engines.length === 0) return;

        const importState = this._loadLearningImportState();
        const importedIds = new Set(importState.importedSourceIds || []);
        const storageSources = this._collectLegacyLearningStorageSources();
        const fileSources = await this._loadLegacyLearningFileSources();
        const candidateSources = [...storageSources, ...fileSources];

        let integratedSources = 0;
        let integratedStates3D = 0;
        let integratedStatesPlanar = 0;
        let deferred = false;

        for (let i = 0; i < candidateSources.length; i++) {
            if (this.state !== 'MENU') {
                deferred = true;
                break;
            }
            const source = candidateSources[i];
            const sourceIdCore = this._buildLegacySourceId(source.payload);
            if (!sourceIdCore) continue;
            const sourceId = `${sourceIdCore}|mode:${source.hintMode || 'both'}`;
            if (importedIds.has(sourceId)) continue;

            const dump3D = this._toLegacyEngineDump(source.payload, '3d', source.hintMode);
            const dumpPlanar = this._toLegacyEngineDump(source.payload, 'planar', source.hintMode);

            let importedCurrentSource = false;
            if (dump3D && this.botLearning3D) {
                if (typeof this.botLearning3D.mergeDumpAndSave === 'function') {
                    importedCurrentSource = !!this.botLearning3D.mergeDumpAndSave(dump3D) || importedCurrentSource;
                } else if (typeof this.botLearning3D.importDumpAndSave === 'function') {
                    this.botLearning3D.importDumpAndSave(dump3D);
                    importedCurrentSource = true;
                }
                if (importedCurrentSource) {
                    integratedStates3D += dump3D.states.length;
                }
            }

            if (dumpPlanar && this.botLearningPlanar && this.botLearningPlanar !== this.botLearning3D) {
                let importedPlanar = false;
                if (typeof this.botLearningPlanar.mergeDumpAndSave === 'function') {
                    importedPlanar = !!this.botLearningPlanar.mergeDumpAndSave(dumpPlanar);
                } else if (typeof this.botLearningPlanar.importDumpAndSave === 'function') {
                    this.botLearningPlanar.importDumpAndSave(dumpPlanar);
                    importedPlanar = true;
                }
                importedCurrentSource = importedCurrentSource || importedPlanar;
                if (importedPlanar) {
                    integratedStatesPlanar += dumpPlanar.states.length;
                }
            }

            if (importedCurrentSource) {
                importedIds.add(sourceId);
                integratedSources++;
            }
        }

        if (integratedSources > 0) {
            this._saveLearningImportState({
                importedSourceIds: Array.from(importedIds),
            });
            this._saveLearningData(false, true);
            this._updateTrainingStatus();
            this._showStatusToast(
                `Legacy-Lerndaten integriert (${integratedSources} Quellen, ${integratedStates3D}/${integratedStatesPlanar} States 3D/Planar)`,
                2600,
                'success'
            );
        }

        return {
            integratedSources,
            integratedStates3D,
            integratedStatesPlanar,
            deferred,
        };
    }

    _loadLearningImportState() {
        if (typeof localStorage === 'undefined') {
            return { importedSourceIds: [] };
        }
        try {
            const raw = localStorage.getItem(LEARNING_IMPORT_STATE_KEY);
            if (!raw) return { importedSourceIds: [] };
            const parsed = JSON.parse(raw);
            const importedSourceIds = Array.isArray(parsed?.importedSourceIds)
                ? parsed.importedSourceIds.filter((id) => typeof id === 'string')
                : [];
            return { importedSourceIds };
        } catch {
            return { importedSourceIds: [] };
        }
    }

    _saveLearningImportState(state) {
        if (typeof localStorage === 'undefined') return false;
        try {
            const payload = {
                version: 1,
                importedSourceIds: Array.isArray(state?.importedSourceIds)
                    ? state.importedSourceIds.filter((id) => typeof id === 'string').slice(-256)
                    : [],
                savedAt: Date.now(),
            };
            localStorage.setItem(LEARNING_IMPORT_STATE_KEY, JSON.stringify(payload));
            return true;
        } catch {
            return false;
        }
    }

    async _fetchJsonMaybe(path, timeoutMs = 5000) {
        if (typeof fetch !== 'function') return null;
        const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
        const timer = controller
            ? setTimeout(() => {
                try {
                    controller.abort();
                } catch {
                    // ignore abort errors
                }
            }, timeoutMs)
            : null;
        try {
            const response = await fetch(path, {
                cache: 'no-store',
                signal: controller?.signal,
            });
            if (!response || !response.ok) return null;
            return await response.json();
        } catch {
            return null;
        } finally {
            if (timer) clearTimeout(timer);
        }
    }

    async _loadLegacyLearningFileSources() {
        const sources = [];

        for (let i = 0; i < LEGACY_LEARNING_BASE_PATHS.length; i++) {
            const path = LEGACY_LEARNING_BASE_PATHS[i];
            const payload = await this._fetchJsonMaybe(path, 5000);
            if (payload && typeof payload === 'object') {
                sources.push({
                    hintMode: 'both',
                    payload,
                });
            }
        }

        const summary = await this._fetchJsonMaybe(LEGACY_LEARNING_SUMMARY_PATH, 6500);
        if (summary && Array.isArray(summary.snapshots) && summary.snapshots.length > 0) {
            let latest = null;
            for (let i = 0; i < summary.snapshots.length; i++) {
                const entry = summary.snapshots[i];
                if (!entry || typeof entry.file !== 'string') continue;
                if (!latest) {
                    latest = entry;
                    continue;
                }
                const prevTs = String(latest.timestamp || latest.file);
                const currTs = String(entry.timestamp || entry.file);
                if (currTs >= prevTs) {
                    latest = entry;
                }
            }

            if (latest && typeof latest.file === 'string') {
                const file = latest.file.replace(/\\/g, '/').trim();
                if (file && !file.includes('..')) {
                    const normalized = file.startsWith('learning_history/') ? file : `learning_history/${file}`;
                    const payload = await this._fetchJsonMaybe(`./${normalized}`, 6500);
                    if (payload && typeof payload === 'object') {
                        sources.push({
                            hintMode: 'both',
                            payload,
                        });
                    }
                }
            }
        }

        return sources;
    }

    _collectLegacyLearningStorageSources() {
        if (typeof localStorage === 'undefined') return [];

        const activeKeys = new Set();
        const stats3D = this.botLearning3D?.getStats?.();
        const statsPlanar = this.botLearningPlanar?.getStats?.();
        if (typeof stats3D?.storageKey === 'string') activeKeys.add(stats3D.storageKey);
        if (typeof stats3D?.backupStorageKey === 'string') activeKeys.add(stats3D.backupStorageKey);
        if (typeof statsPlanar?.storageKey === 'string') activeKeys.add(statsPlanar.storageKey);
        if (typeof statsPlanar?.backupStorageKey === 'string') activeKeys.add(statsPlanar.backupStorageKey);

        const out = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (typeof key !== 'string') continue;
            if (!key.startsWith('mini-curve-fever-3d.bot-learning')) continue;
            if (key === LEARNING_IMPORT_STATE_KEY) continue;
            if (activeKeys.has(key)) continue;
            if (key.endsWith('.lastgood') || key.endsWith('.fallback')) continue;

            const raw = localStorage.getItem(key);
            if (!raw) continue;

            let payload = null;
            try {
                payload = JSON.parse(raw);
            } catch {
                payload = null;
            }
            if (!payload || typeof payload !== 'object') continue;

            const lower = key.toLowerCase();
            let hintMode = 'both';
            if (lower.includes('.planar')) hintMode = 'planar';
            else if (lower.includes('.3d')) hintMode = '3d';

            out.push({
                hintMode,
                payload,
            });
        }

        return out;
    }

    _buildLegacyStateFingerprint(rows) {
        if (!Array.isArray(rows) || rows.length === 0) return '0';
        const sanitize = (value) => String(value || '')
            .replace(/[^a-zA-Z0-9_:-]/g, '')
            .slice(0, 24);
        const first = Array.isArray(rows[0]) ? sanitize(rows[0][0]) : '';
        const middle = Array.isArray(rows[Math.floor(rows.length * 0.5)]) ? sanitize(rows[Math.floor(rows.length * 0.5)][0]) : '';
        const last = Array.isArray(rows[rows.length - 1]) ? sanitize(rows[rows.length - 1][0]) : '';
        return `${rows.length}:${first}:${middle}:${last}`;
    }

    _buildLegacySourceId(payload) {
        const src = payload && typeof payload === 'object' ? payload : null;
        if (!src) return '';

        const savedAt = Math.max(0, Math.floor(
            Number.isFinite(src.savedAt) ? src.savedAt
                : (Number.isFinite(src.timestamp) ? src.timestamp : 0)
        ));

        const updates3D = Math.max(0, Math.floor(
            Number.isFinite(src?.engine3D?.totalUpdates) ? src.engine3D.totalUpdates
                : (Number.isFinite(src.totalUpdates) ? src.totalUpdates : 0)
        ));
        const updatesPlanar = Math.max(0, Math.floor(
            Number.isFinite(src?.enginePlanar?.totalUpdates) ? src.enginePlanar.totalUpdates
                : (Number.isFinite(src.totalUpdates) ? src.totalUpdates : 0)
        ));

        const states3D = Array.isArray(src.states3D) ? src.states3D : (Array.isArray(src.states) ? src.states : []);
        const statesPlanar = Array.isArray(src.statesPlanar) ? src.statesPlanar : (Array.isArray(src.states) ? src.states : []);
        const fp3D = this._buildLegacyStateFingerprint(states3D);
        const fpPlanar = this._buildLegacyStateFingerprint(statesPlanar);

        return `t${savedAt}|u3${updates3D}|up${updatesPlanar}|s3${fp3D}|sp${fpPlanar}`;
    }

    _toLegacyEngineDump(payload, mode, hintMode = 'both') {
        const src = payload && typeof payload === 'object' ? payload : null;
        if (!src) return null;
        if (hintMode === '3d' && mode !== '3d') return null;
        if (hintMode === 'planar' && mode !== 'planar') return null;

        let rawStates = null;
        if (mode === '3d' && Array.isArray(src.states3D)) {
            rawStates = src.states3D;
        } else if (mode === 'planar' && Array.isArray(src.statesPlanar)) {
            rawStates = src.statesPlanar;
        } else if (Array.isArray(src.states)) {
            rawStates = src.states;
        }
        if (!Array.isArray(rawStates) || rawStates.length === 0) return null;

        const engineStats = mode === '3d' ? src.engine3D : src.enginePlanar;
        const savedAt = Math.max(0, Math.floor(
            Number.isFinite(src.savedAt) ? src.savedAt
                : (Number.isFinite(src.timestamp) ? src.timestamp : Date.now())
        ));
        const epsilon = Number.isFinite(engineStats?.epsilon)
            ? engineStats.epsilon
            : (Number.isFinite(src.epsilon) ? src.epsilon : null);
        const totalUpdates = Math.max(0, Math.floor(
            Number.isFinite(engineStats?.totalUpdates) ? engineStats.totalUpdates
                : (Number.isFinite(src.totalUpdates) ? src.totalUpdates : 0)
        ));
        const totalReward = Number.isFinite(engineStats?.totalReward)
            ? engineStats.totalReward
            : (Number.isFinite(src.totalReward) ? src.totalReward : 0);

        const actionCount = mode === 'planar'
            ? (this.botLearningPlanar?.getActionCount?.() || this.botLearning3D?.getActionCount?.() || 8)
            : (this.botLearning3D?.getActionCount?.() || 8);

        const rows = [];
        for (let i = 0; i < rawStates.length; i++) {
            const row = rawStates[i];
            if (!Array.isArray(row) || typeof row[0] !== 'string' || !Array.isArray(row[1])) continue;

            const canonicalKey = this._canonicalizeLegacyStateKey(row[0]);
            if (!canonicalKey) continue;

            const values = new Array(actionCount);
            for (let a = 0; a < actionCount; a++) {
                values[a] = Number.isFinite(row[1][a]) ? row[1][a] : 0;
            }

            const visits = Number.isFinite(row[2]) ? Math.max(1, Math.floor(row[2])) : 1;
            const lastSeen = Number.isFinite(row[3]) ? Math.max(0, Math.floor(row[3])) : savedAt;
            rows.push([canonicalKey, values, visits, lastSeen]);
        }

        if (rows.length === 0) return null;

        return {
            savedAt,
            epsilon,
            totalUpdates,
            totalReward,
            states: this._mergeStateRowsByKey(rows, actionCount),
        };
    }

    _mergeStateRowsByKey(rows, actionCount) {
        const map = new Map();
        const safeActionCount = Math.max(1, Math.floor(Number.isFinite(actionCount) ? actionCount : 1));

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (!Array.isArray(row) || typeof row[0] !== 'string' || !Array.isArray(row[1])) continue;

            const key = row[0];
            const values = new Array(safeActionCount);
            for (let a = 0; a < safeActionCount; a++) {
                values[a] = Number.isFinite(row[1][a]) ? row[1][a] : 0;
            }
            const visits = Number.isFinite(row[2]) ? Math.max(1, Math.floor(row[2])) : 1;
            const lastSeen = Number.isFinite(row[3]) ? Math.max(0, Math.floor(row[3])) : 0;

            if (!map.has(key)) {
                map.set(key, [key, values, visits, lastSeen]);
                continue;
            }

            const existing = map.get(key);
            const existingValues = existing[1];
            const existingVisits = Math.max(1, Math.floor(Number.isFinite(existing[2]) ? existing[2] : 1));
            const mergedVisits = existingVisits + visits;

            for (let a = 0; a < safeActionCount; a++) {
                const oldValue = Number.isFinite(existingValues[a]) ? existingValues[a] : 0;
                const newValue = Number.isFinite(values[a]) ? values[a] : 0;
                existingValues[a] = ((oldValue * existingVisits) + (newValue * visits)) / mergedVisits;
            }

            existing[2] = mergedVisits;
            existing[3] = Math.max(
                Math.max(0, Math.floor(Number.isFinite(existing[3]) ? existing[3] : 0)),
                lastSeen
            );
        }

        return Array.from(map.values());
    }

    _tokenNumber(tokenMap, key, fallback, min, max) {
        const raw = Number.isFinite(tokenMap?.[key]) ? tokenMap[key] : fallback;
        const base = Number.isFinite(raw) ? raw : fallback;
        return clamp(Math.floor(base), min, max);
    }

    _canonicalizeLegacyStateKey(rawKey) {
        if (typeof rawKey !== 'string') return '';

        const tokenMap = {};
        const tokens = rawKey.split('|');
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i]?.trim();
            if (!token) continue;
            const match = /^([a-zA-Z]+)(-?\d+)$/.exec(token);
            if (!match) continue;
            const key = match[1];
            const value = parseInt(match[2], 10);
            if (!Number.isFinite(value)) continue;
            tokenMap[key] = value;
        }

        const hasCoreFields = Number.isFinite(tokenMap.f)
            && Number.isFinite(tokenMap.p)
            && Number.isFinite(tokenMap.o)
            && Number.isFinite(tokenMap.d);
        if (!hasCoreFields) return '';

        const f = this._tokenNumber(tokenMap, 'f', 0, 0, 4);
        const p = this._tokenNumber(tokenMap, 'p', 0, 0, 4);
        const o = this._tokenNumber(tokenMap, 'o', 0, 0, 4);
        const d = this._tokenNumber(tokenMap, 'd', 0, 0, 4);
        const s = this._tokenNumber(tokenMap, 's', 0, 0, 4);
        const t = this._tokenNumber(tokenMap, 't', 0, 0, 1);
        const i = this._tokenNumber(tokenMap, 'i', 0, 0, 1);
        const j = this._tokenNumber(tokenMap, 'j', 0, 0, 1);
        const h = this._tokenNumber(tokenMap, 'h', 1, 0, 2);
        const m = this._tokenNumber(tokenMap, 'm', 0, 0, 1);
        const hc = this._tokenNumber(tokenMap, 'hc', 0, 0, 2);
        const hdFallback = Number.isFinite(tokenMap?.hd) ? tokenMap.hd : 4;
        const hd = this._tokenNumber(tokenMap, 'hd', hdFallback, 0, 4);
        const ht = this._tokenNumber(tokenMap, 'ht', 0, 0, 4);

        return `f${f}|p${p}|o${o}|d${d}|s${s}|t${t}|i${i}|j${j}|h${h}|m${m}|hc${hc}|hd${hd}|ht${ht}`;
    }

    _upgradeActiveLearningSchemas() {
        if (this.state !== 'MENU') return 0;

        const targets = [];
        if (this.botLearning3D) {
            targets.push({ engine: this.botLearning3D, mode: '3d' });
        }
        if (this.botLearningPlanar) {
            targets.push({ engine: this.botLearningPlanar, mode: 'planar' });
        }

        let upgradedEngines = 0;
        const seenEngines = new Set();
        for (let i = 0; i < targets.length; i++) {
            const target = targets[i];
            if (!target?.engine || seenEngines.has(target.engine)) continue;
            seenEngines.add(target.engine);
            if (this._upgradeLearningEngineSchema(target.engine, target.mode)) {
                upgradedEngines++;
            }
        }
        return upgradedEngines;
    }

    _upgradeLearningEngineSchema(engine, mode = '3d') {
        if (!engine) return false;
        if (typeof engine.exportDump !== 'function' || typeof engine.importDumpAndSave !== 'function') {
            return false;
        }

        const dump = engine.exportDump(Date.now());
        if (!dump || !Array.isArray(dump.states) || dump.states.length === 0) {
            return false;
        }

        const actionCount = Math.max(1, Math.floor(Number(engine.getActionCount?.() || 8)));
        const normalizedRows = [];
        let changed = false;

        for (let i = 0; i < dump.states.length; i++) {
            const row = dump.states[i];
            if (!Array.isArray(row) || typeof row[0] !== 'string' || !Array.isArray(row[1])) continue;

            const oldKey = row[0];
            const canonicalKey = this._canonicalizeLegacyStateKey(oldKey);
            const finalKey = canonicalKey || oldKey;
            if (finalKey !== oldKey) {
                changed = true;
            }

            const values = new Array(actionCount);
            for (let a = 0; a < actionCount; a++) {
                values[a] = Number.isFinite(row[1][a]) ? row[1][a] : 0;
            }
            const visits = Number.isFinite(row[2]) ? Math.max(1, Math.floor(row[2])) : 1;
            const lastSeen = Number.isFinite(row[3]) ? Math.max(0, Math.floor(row[3])) : (dump.savedAt || Date.now());
            normalizedRows.push([finalKey, values, visits, lastSeen]);
        }

        if (normalizedRows.length === 0) return false;

        const mergedRows = this._mergeStateRowsByKey(normalizedRows, actionCount);
        if (mergedRows.length !== dump.states.length) {
            changed = true;
        }
        if (!changed) return false;

        engine.importDumpAndSave({
            savedAt: Number.isFinite(dump.savedAt) ? dump.savedAt : Date.now(),
            epsilon: Number.isFinite(dump.epsilon) ? dump.epsilon : null,
            totalUpdates: Number.isFinite(dump.totalUpdates) ? Math.max(0, Math.floor(dump.totalUpdates)) : 0,
            totalReward: Number.isFinite(dump.totalReward) ? dump.totalReward : 0,
            states: mergedRows,
        });

        return true;
    }

    _clearTrainingProgressHistory() {
        this._trainingProgressHistory = [];
    }

    _recordTrainingProgressSample(progressPct, rounds, updateCount) {
        if (!Array.isArray(this._trainingProgressHistory)) {
            this._trainingProgressHistory = [];
        }

        const pct = clamp(Number(progressPct) || 0, 0, 100);
        const roundValue = Number.isFinite(rounds) ? Math.max(0, Math.floor(rounds)) : 0;
        const updateValue = Number.isFinite(updateCount) ? Math.max(0, Math.floor(updateCount)) : 0;
        const now = Date.now();
        const history = this._trainingProgressHistory;
        const last = history.length > 0 ? history[history.length - 1] : null;

        if (last) {
            const sameRound = roundValue === last.rounds;
            const sameUpdates = updateValue === last.updates;
            const sameProgress = Math.abs(pct - last.pct) < 0.05;
            if (sameRound && sameUpdates && sameProgress) {
                return;
            }
        }

        history.push({
            time: now,
            rounds: roundValue,
            updates: updateValue,
            pct,
        });

        const maxSamples = 120;
        if (history.length > maxSamples) {
            history.splice(0, history.length - maxSamples);
        }
    }

    _buildTrainingProgressGraphData() {
        const history = Array.isArray(this._trainingProgressHistory) ? this._trainingProgressHistory : [];
        const series = history.slice(-80);
        if (series.length === 0) {
            return {
                sampleCount: 0,
                currentPct: 0,
                minPct: 0,
                maxPct: 0,
                linePoints: '',
                areaPoints: '',
            };
        }

        const values = new Array(series.length);
        for (let i = 0; i < series.length; i++) {
            values[i] = clamp(Number(series[i].pct) || 0, 0, 100);
        }

        let minPct = values[0];
        let maxPct = values[0];
        for (let i = 1; i < values.length; i++) {
            minPct = Math.min(minPct, values[i]);
            maxPct = Math.max(maxPct, values[i]);
        }

        const currentPct = values[values.length - 1];
        if ((maxPct - minPct) < 1.5) {
            minPct = clamp(currentPct - 0.8, 0, 100);
            maxPct = clamp(currentPct + 0.8, 0, 100);
            if ((maxPct - minPct) < 1.5) {
                minPct = clamp(maxPct - 1.5, 0, 100);
                maxPct = clamp(minPct + 1.5, 0, 100);
            }
        }

        const width = 100;
        const height = 28;
        const denom = Math.max(0.001, maxPct - minPct);
        const lineParts = [];
        for (let i = 0; i < values.length; i++) {
            const x = values.length > 1 ? (i / (values.length - 1)) * width : width;
            const norm = clamp((values[i] - minPct) / denom, 0, 1);
            const y = height - (norm * height);
            lineParts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
        }

        const linePoints = lineParts.join(' ');
        const areaPoints = lineParts.length > 0
            ? `0,${height.toFixed(2)} ${linePoints} ${width.toFixed(2)},${height.toFixed(2)}`
            : '';

        return {
            sampleCount: values.length,
            currentPct,
            minPct,
            maxPct,
            linePoints,
            areaPoints,
        };
    }

    _storageKeyExists(key) {
        if (typeof key !== 'string' || key.length === 0 || typeof localStorage === 'undefined') return false;
        try {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) === key) return true;
            }
        } catch {
            return false;
        }
        return false;
    }

    _countExistingStorageKeys(keys = []) {
        const unique = new Set();
        for (let i = 0; i < keys.length; i++) {
            if (typeof keys[i] !== 'string' || keys[i].length === 0) continue;
            unique.add(keys[i]);
        }
        const list = Array.from(unique);
        let existing = 0;
        for (let i = 0; i < list.length; i++) {
            if (this._storageKeyExists(list[i])) {
                existing++;
            }
        }
        return {
            existing,
            total: list.length,
        };
    }

    _buildTrainingTelemetry() {
        const stats3D = this.botLearning3D ? this.botLearning3D.getStats() : null;
        const statsPlanar = this.botLearningPlanar ? this.botLearningPlanar.getStats() : null;
        const training = this.settings?.training || {};
        const onlineLearningPaused = !!training.onlineLearningPaused;
        const baseline = this._loadLearningBaseline();
        this.learningBaseline = baseline;
        const baselineDefaultSummary = baseline
            ? `A/B-Baseline gesetzt: ${new Date(baseline.createdAt).toLocaleString('de-DE', { hour12: false })} (R${baseline.absoluteRoundCount}).`
            : 'A/B: keine Baseline gesetzt (Button "Benchmark A setzen").';
        if (!stats3D && !statsPlanar) {
            return {
                available: false,
                menuLines: ['Learning engine nicht verfuegbar.'],
                overlayLines: ['Learning engine nicht verfuegbar.'],
                overlayStatusClass: 'status-no_learning',
                overlayStatusChipLabel: 'Keine Daten',
                overlayStatusExplanation: 'Learning-Engine ist nicht verfuegbar.',
                overlayProgressPct: 0,
                overlayProgressLabel: '0.0%',
                overlayProgressSummary: 'Gesamtfortschritt: 0.0%',
                overlayProgressExplainer: 'Erklaerung: 70% Explorations-Abbau + 30% State-Coverage.',
                overlayStorageSummary: 'Speicher: keine Daten',
                overlayGraphLinePoints: '',
                overlayGraphAreaPoints: '',
                overlayGraphRangeLabel: 'Trendfenster: keine Daten',
                overlayActivityMain: 'Upd/Runde: n/a',
                overlayActivitySub: 'Mehr Updates beschleunigen Lernen.',
                overlayStabilityMain: 'Reward-Trend: n/a',
                overlayStabilitySub: 'Reward hoch und TD runter ist ein gutes Zeichen.',
                overlayPersistenceMain: 'Save: n/a',
                overlayPersistenceSub: 'Backup hilft bei versehentlichem Reset.',
                menuSummaryMain: 'Updates: 0 | States: 0 | Reward: 0.00',
                menuSummaryStorage: 'Save: n/a | Pending: 0 | Backup: n/a',
                baselineAvailable: !!baseline,
                baselineSummary: baselineDefaultSummary,
            };
        }

        const stateCount = (stats3D?.states || 0) + (statsPlanar?.states || 0);
        const updateCount = (stats3D?.totalUpdates || 0) + (statsPlanar?.totalUpdates || 0);
        const rewardSum = (stats3D?.totalReward || 0) + (statsPlanar?.totalReward || 0);
        const pendingUpdates = (stats3D?.updatesSinceSave || 0) + (statsPlanar?.updatesSinceSave || 0);
        const lastSaveAt = Math.max(stats3D?.lastSaveAt || 0, statsPlanar?.lastSaveAt || 0);
        const saveAgeSec = lastSaveAt > 0 ? ((Date.now() - lastSaveAt) / 1000) : NaN;
        const epsilon3D = Number.isFinite(stats3D?.epsilon) ? stats3D.epsilon.toFixed(3) : 'n/a';
        const epsilonPlanar = Number.isFinite(statsPlanar?.epsilon) ? statsPlanar.epsilon.toFixed(3) : 'n/a';
        const saveTimeLabel = lastSaveAt > 0
            ? new Date(lastSaveAt).toLocaleTimeString('de-DE', { hour12: false })
            : 'n/a';
        const aggregate = this.recorder?.getAggregateMetrics?.() || {};
        const sessionRoundCount = Number.isFinite(aggregate?.rounds) ? aggregate.rounds : 0;
        const absoluteRoundCount = this._getAbsoluteTrainingRoundCount(sessionRoundCount);
        const absoluteStartAtRaw = Math.max(0, Math.floor(Number(this.trainingMeta?.firstTrainingAt) || 0));
        const absoluteStartLabel = absoluteStartAtRaw > 0
            ? new Date(absoluteStartAtRaw).toLocaleString('de-DE', { hour12: false })
            : 'n/a';
        const perBotSurvival = this.recorder?.getBotSurvivalAverages?.(8) || [];
        const analysis = this.recorder?.getLearningAnalysis?.(12) || null;
        const loopDiag = this.gameLoop?.getDiagnostics?.() || null;
        const effectiveScale = Number.isFinite(loopDiag?.effectiveScale) ? loopDiag.effectiveScale : this._getTrainingBaseTimeScale();
        const stepsPerFrame = Number.isFinite(loopDiag?.lastSteps) ? loopDiag.lastSteps : 0;
        const fmt = (value, digits = 3) => (Number.isFinite(value) ? value.toFixed(digits) : 'n/a');
        const trendWord = (value, threshold = 0.01) => {
            if (!Number.isFinite(value)) return 'n/a';
            if (value > threshold) return 'steigend';
            if (value < -threshold) return 'fallend';
            return 'stabil';
        };
        const analysisStatus = analysis?.status || 'NO_DATA';
        const perBotSurvivalText = perBotSurvival.length > 0
            ? perBotSurvival.map((entry) => `B${entry.botNumber}:${fmt(entry.averageSurvivalSec, 2)}s`).join(' | ')
            : 'keine Daten';

        const progressFromEpsilon = (stats) => {
            if (!stats) return NaN;
            const eps = Number(stats.epsilon);
            const epsStart = Number(stats.epsilonStart);
            const epsMin = Number(stats.epsilonMin);
            if (!Number.isFinite(eps) || !Number.isFinite(epsStart) || !Number.isFinite(epsMin) || epsStart <= epsMin) {
                return NaN;
            }
            return clamp(((epsStart - eps) / (epsStart - epsMin)) * 100, 0, 100);
        };
        const progressEps3D = progressFromEpsilon(stats3D);
        const progressEpsPlanar = progressFromEpsilon(statsPlanar);
        const progressSamples = [progressEps3D, progressEpsPlanar].filter((v) => Number.isFinite(v));
        const epsilonProgressPct = progressSamples.length > 0
            ? progressSamples.reduce((sum, value) => sum + value, 0) / progressSamples.length
            : 0;

        const maxStatesTotal = (stats3D?.maxStates || 0) + (statsPlanar?.maxStates || 0);
        const stateCoveragePct = maxStatesTotal > 0 ? clamp((stateCount / maxStatesTotal) * 100, 0, 100) : 0;
        const overlayProgressPct = clamp((epsilonProgressPct * 0.7) + (stateCoveragePct * 0.3), 0, 100);

        this._recordTrainingProgressSample(overlayProgressPct, absoluteRoundCount, updateCount);
        const progressGraph = this._buildTrainingProgressGraphData();
        const overlayProgressSummary = `Gesamtfortschritt: ${overlayProgressPct.toFixed(1)}% | Exploration ${epsilonProgressPct.toFixed(1)}% | State-Coverage ${stateCoveragePct.toFixed(1)}%`;
        const overlayGraphRangeLabel = progressGraph.sampleCount > 1
            ? `Trendfenster: ${progressGraph.sampleCount} Samples | Bereich ${progressGraph.minPct.toFixed(1)}-${progressGraph.maxPct.toFixed(1)}%`
            : 'Trendfenster: Aufbau der Verlaufsdaten...';
        let progressPhase = 'Fruehphase: erst Daten sammeln, Aussagen sind noch unsicher.';
        if (overlayProgressPct >= 75) {
            progressPhase = 'Spaetphase: Exploration ist niedrig, Bot nutzt gelerntes Wissen.';
        } else if (overlayProgressPct >= 40) {
            progressPhase = 'Aufbauphase: der Bot stabilisiert seine Entscheidungen.';
        }
        const overlayProgressExplainer = `Erklaerung: 70% Explorations-Abbau + 30% State-Coverage. ${progressPhase}`;

        const activeStorage = this._countExistingStorageKeys([
            stats3D?.storageKey,
            statsPlanar?.storageKey,
        ]);
        const backupStorage = this._countExistingStorageKeys([
            stats3D?.backupStorageKey,
            statsPlanar?.backupStorageKey,
        ]);
        const backupLabel = backupStorage.total > 0
            ? (backupStorage.existing > 0 ? 'JA' : 'NEIN')
            : 'n/a';
        const saveAgeLabel = Number.isFinite(saveAgeSec) ? `${saveAgeSec.toFixed(1)}s` : 'n/a';
        const diskSyncState = this._learningDiskSync?.available === true
            ? 'AKTIV'
            : (this._learningDiskSync?.available === false ? 'AUS' : 'INIT');
        const menuSummaryMain = `Updates: ${updateCount} | States: ${stateCount} | Runden gesamt: ${absoluteRoundCount}`;
        const menuSummaryStorage = `Save: ${saveTimeLabel} (${saveAgeLabel}) | Pending: ${pendingUpdates} | Backup: ${backupLabel} | PC-Sync: ${diskSyncState}`;
        const overlayStorageSummary = `Speicher: Keys ${activeStorage.existing}/${activeStorage.total} | Backup ${backupStorage.existing}/${backupStorage.total} | Save ${saveTimeLabel} | PC-Sync ${diskSyncState}`;

        const epsilonValues = [stats3D?.epsilon, statsPlanar?.epsilon].filter((value) => Number.isFinite(value));
        const epsilonStartValues = [stats3D?.epsilonStart, statsPlanar?.epsilonStart].filter((value) => Number.isFinite(value));
        const epsilonMinValues = [stats3D?.epsilonMin, statsPlanar?.epsilonMin].filter((value) => Number.isFinite(value));
        const epsilonAvg = epsilonValues.length > 0
            ? epsilonValues.reduce((sum, value) => sum + value, 0) / epsilonValues.length
            : NaN;
        const epsilonStartAvg = epsilonStartValues.length > 0
            ? epsilonStartValues.reduce((sum, value) => sum + value, 0) / epsilonStartValues.length
            : NaN;
        const epsilonMinAvg = epsilonMinValues.length > 0
            ? epsilonMinValues.reduce((sum, value) => sum + value, 0) / epsilonMinValues.length
            : NaN;
        const explorationProgress = (Number.isFinite(epsilonAvg) && Number.isFinite(epsilonStartAvg) && Number.isFinite(epsilonMinAvg) && epsilonStartAvg > epsilonMinAvg)
            ? clamp(((epsilonStartAvg - epsilonAvg) / (epsilonStartAvg - epsilonMinAvg)) * 100, 0, 100)
            : NaN;
        let activityHint = 'Mehr Updates pro Runde beschleunigen das Lernen.';
        if (onlineLearningPaused) {
            activityHint = 'Online-Lernen ist pausiert: Bot spielt nur mit aktuellem Wissen.';
        } else if (Number.isFinite(explorationProgress) && explorationProgress > 80) {
            activityHint = 'Exploration ist niedrig: Bot nutzt gelernte Strategien statt Zufall.';
        } else if (Number.isFinite(explorationProgress) && explorationProgress > 40) {
            activityHint = 'Exploration sinkt: Entscheidungen werden zunehmend stabil.';
        } else if (Number.isFinite(explorationProgress)) {
            activityHint = 'Exploration ist noch hoch: fruehe Lernphase mit mehr Zufall.';
        }

        const updateTrend = Number(analysis?.updateTrendPerRound);
        const rewardTrend = Number(analysis?.rewardTrendPerRound);
        const tdTrend = Number(analysis?.tdAbsTrend);
        const rewardTrendText = trendWord(rewardTrend, 0.02);
        const tdTrendText = trendWord(tdTrend, 0.01);
        const updateTrendText = trendWord(updateTrend, 0.5);
        const confidenceRounds = sessionRoundCount;
        let confidenceLabel = 'niedrig';
        if (confidenceRounds >= 24) {
            confidenceLabel = 'hoch';
        } else if (confidenceRounds >= 10) {
            confidenceLabel = 'mittel';
        }
        let stabilityHint = 'Zu wenig Daten fuer eine belastbare Aussage.';
        if (confidenceLabel !== 'niedrig') {
            if (Number.isFinite(rewardTrend) && Number.isFinite(tdTrend) && rewardTrend > 0.02 && tdTrend < -0.01) {
                stabilityHint = 'Gutes Signal: Reward steigt und TD sinkt, Verhalten wird stabiler.';
            } else if (Number.isFinite(rewardTrend) && Number.isFinite(tdTrend) && rewardTrend < -0.02 && tdTrend > 0.01) {
                stabilityHint = 'Warnung: Reward faellt und TD steigt, Training schwankt aktuell stark.';
            } else {
                stabilityHint = 'Gemischtes Bild: Teilmetriken sind noch nicht klar in einer Richtung.';
            }
        }

        const backupMissing = backupStorage.total > 0 && backupStorage.existing === 0;
        const saveTooOld = Number.isFinite(saveAgeSec) && saveAgeSec > 40;
        let persistenceHint = 'Persistenz ist stabil: letzter Save vorhanden, Backups verfuegbar.';
        if (pendingUpdates > 0) {
            persistenceHint = `Es stehen ${pendingUpdates} Updates fuer den naechsten Save an.`;
        } else if (backupMissing) {
            persistenceHint = 'Warnung: kein Backup gefunden. Lerndaten besser manuell speichern.';
        } else if (saveTooOld) {
            persistenceHint = `Hinweis: letzter Save ist ${saveAgeLabel} alt.`;
        }
        if (this._learningDiskSync?.available === false) {
            persistenceHint = `${persistenceHint} PC-Sync ist aus (lokalen Server mit start_game.bat starten).`;
        } else if (this._learningDiskSync?.available === true) {
            persistenceHint = `${persistenceHint} PC-Sync aktiv.`;
        }

        const statusClassByAnalysis = {
            IMPROVING: 'status-improving',
            PLATEAU: 'status-plateau',
            UNSTABLE: 'status-unstable',
            NO_LEARNING: 'status-no_learning',
            NO_DATA: 'status-no_learning',
        };
        const overlayStatusClass = statusClassByAnalysis[analysisStatus] || 'status-plateau';
        const statusMetaByAnalysis = {
            IMPROVING: {
                label: 'Verbesserung',
                explain: 'Der Bot zeigt aktuell konsistent positive Lernsignale.',
            },
            PLATEAU: {
                label: 'Plateau',
                explain: 'Kurzfristig wenig Veraenderung. Das ist nach laengerem Training normal.',
            },
            UNSTABLE: {
                label: 'Schwankend',
                explain: 'Werte schwanken stark. Training braucht mehr Runden oder stabilere Bedingungen.',
            },
            NO_LEARNING: {
                label: 'Kein Lernen',
                explain: onlineLearningPaused
                    ? 'Online-Lernen ist pausiert.'
                    : 'Es werden aktuell keine Learning-Updates erzeugt.',
            },
            NO_DATA: {
                label: 'Zu wenig Daten',
                explain: 'Noch nicht genug Runden fuer eine belastbare Bewertung.',
            },
        };
        const statusMeta = statusMetaByAnalysis[analysisStatus] || statusMetaByAnalysis.NO_DATA;
        const overlayStatusChipLabel = statusMeta.label;
        const overlayStatusExplanation = `${statusMeta.explain} Konfidenz: ${confidenceLabel} (Session ${confidenceRounds} Runden, Gesamt ${absoluteRoundCount}).`;

        const overlayActivityMain = `Runden gesamt/session ${absoluteRoundCount}/${sessionRoundCount} | Upd/Runde ${fmt(aggregate.learningUpdatesPerRound, 2)}`;
        const overlayActivitySub = `${activityHint} Trend Upd/Runde: ${fmt(updateTrend, 2)} (${updateTrendText}).`;
        const overlayStabilityMain = `Reward-Trend ${fmt(rewardTrend, 3)} (${rewardTrendText}) | TD-Trend ${fmt(tdTrend, 3)} (${tdTrendText})`;
        const overlayStabilitySub = `${stabilityHint} Konfidenz: ${confidenceLabel}.`;
        const overlayPersistenceMain = `Save ${saveTimeLabel} (${saveAgeLabel}) | Backup ${backupStorage.existing}/${backupStorage.total} | Start ${absoluteStartLabel}`;
        const overlayPersistenceSub = persistenceHint;
        const fmtDelta = (value, digits = 3) => {
            if (!Number.isFinite(value)) return 'n/a';
            const sign = value > 0 ? '+' : '';
            return `${sign}${value.toFixed(digits)}`;
        };

        let baselineSummary = baselineDefaultSummary;
        let baselineLineMenu = baselineDefaultSummary;
        let baselineLineOverlay = baselineDefaultSummary;
        if (baseline) {
            const baselineTimeLabel = baseline.createdAt > 0
                ? new Date(baseline.createdAt).toLocaleString('de-DE', { hour12: false })
                : 'n/a';
            const dRewardRound = aggregate.learningRewardPerRound - (baseline.aggregate?.learningRewardPerRound || 0);
            const dTdAbs = aggregate.learningTdAbsMean - (baseline.aggregate?.learningTdAbsMean || 0);
            const dSurvival = aggregate.averageBotSurvival - (baseline.aggregate?.averageBotSurvival || 0);
            const dSelfCollisions = aggregate.selfCollisionsPerRound - (baseline.aggregate?.selfCollisionsPerRound || 0);
            const dUpdatesRound = aggregate.learningUpdatesPerRound - (baseline.aggregate?.learningUpdatesPerRound || 0);
            const dUpdatesTotal = updateCount - (baseline.learning?.updateCount || 0);
            const dStatesTotal = stateCount - (baseline.learning?.stateCount || 0);
            const dRounds = absoluteRoundCount - (baseline.absoluteRoundCount || 0);

            let abScore = 0;
            if (dRewardRound > 0.03) abScore++;
            else if (dRewardRound < -0.03) abScore--;
            if (dSurvival > 0.12) abScore++;
            else if (dSurvival < -0.12) abScore--;
            if (dSelfCollisions < -0.03) abScore++;
            else if (dSelfCollisions > 0.03) abScore--;
            if (dTdAbs < -0.005) abScore++;
            else if (dTdAbs > 0.005) abScore--;

            const abLabel = abScore >= 2 ? 'BESSER' : (abScore <= -2 ? 'SCHLECHTER' : 'GEMISCHT');
            baselineSummary = `A/B seit ${baselineTimeLabel} (R${baseline.absoluteRoundCount}, +${Math.max(0, dRounds)} Runden): ${abLabel}`;
            baselineLineMenu = `A/B: ${abLabel} | Reward/Runde Δ ${fmtDelta(dRewardRound, 3)} | TD Δ ${fmtDelta(dTdAbs, 3)} | Survival Δ ${fmtDelta(dSurvival, 2)}s | SelfColl Δ ${fmtDelta(dSelfCollisions, 3)}`;
            baselineLineOverlay = `A/B zu ${baselineTimeLabel}: Reward/Runde Δ ${fmtDelta(dRewardRound, 3)} | TD Δ ${fmtDelta(dTdAbs, 3)} | Survival Δ ${fmtDelta(dSurvival, 2)}s | SelfColl Δ ${fmtDelta(dSelfCollisions, 3)} | Upd/Runde Δ ${fmtDelta(dUpdatesRound, 2)} | Updates Δ ${fmtDelta(dUpdatesTotal, 0)} | States Δ ${fmtDelta(dStatesTotal, 0)}`;
        }

        const menuLines = [
            `Policy: AN | Online-Lernen: ${onlineLearningPaused ? 'PAUSIERT' : 'AN'} | Dev-Training: ${training.enabled ? 'AN' : 'AUS'}`,
            `BotOnly: ${training.botVsBotOnly ? 'JA' : 'NEIN'} | Mortal: ${training.mortalBots ? 'JA' : 'NEIN'} | Auto-Restart: ${training.autoRestart ? 'JA' : 'NEIN'}`,
            `Split: ${this._isTrainingSpectatorSplitMode() ? 'JA' : 'NEIN'} | Dual-Welten: ${this._isTrainingDualWorldsMode() ? 'JA' : 'NEIN'}`,
            `Runden gesamt/session: ${absoluteRoundCount}/${sessionRoundCount} | Trainingsstart: ${absoluteStartLabel}`,
            `Status: ${overlayStatusChipLabel} | ${overlayStatusExplanation}`,
            `States(3D/Planar/Total): ${stats3D?.states || 0}/${statsPlanar?.states || 0}/${stateCount} | Updates: ${updateCount}`,
            `Epsilon(3D/Planar): ${epsilon3D}/${epsilonPlanar} | RewardSum: ${rewardSum.toFixed(2)} | TimeScale: ${this._getTrainingBaseTimeScale().toFixed(1)}x`,
            `Analyse: ${analysisStatus} | LearnUpd/Round: ${fmt(aggregate.learningUpdatesPerRound, 2)} | Reward/Round: ${fmt(aggregate.learningRewardPerRound, 3)} | TD-Abs(mean): ${fmt(aggregate.learningTdAbsMean, 3)}`,
            `Trend (12 Runden): Updates ${fmt(analysis?.updateTrendPerRound, 2)} | Reward ${fmt(analysis?.rewardTrendPerRound, 3)} | TD ${fmt(analysis?.tdAbsTrend, 3)}`,
            `Loop: Ziel ${this._getTrainingBaseTimeScale().toFixed(1)}x | Ist ${fmt(effectiveScale, 1)}x | Steps/Frame ${stepsPerFrame} | BudgetHits ${loopDiag?.totalBudgetHits || 0}`,
            `Persistenz: pending ${pendingUpdates} | Save ${saveTimeLabel} (${saveAgeLabel}) | Backup ${backupStorage.existing}/${backupStorage.total} | DroppedFrames ${loopDiag?.totalDroppedFrames || 0}`,
            baselineLineMenu,
            `Avg Ueberleben pro Bot: ${perBotSurvivalText}`,
        ];

        const overlayLines = [
            `Runden gesamt/session: ${absoluteRoundCount}/${sessionRoundCount} | Trainingsstart: ${absoluteStartLabel}`,
            baselineLineOverlay,
            'So lesen: Reward-Trend steigend und TD-Trend fallend ist ein gutes Stabilitaetssignal.',
            `Aktuell: Reward-Trend ${fmt(rewardTrend, 3)} (${rewardTrendText}) | TD-Trend ${fmt(tdTrend, 3)} (${tdTrendText})`,
            `Konfidenz: ${confidenceLabel} (Session ${confidenceRounds} Runden) | Runden-Updates: ${fmt(aggregate.learningUpdatesPerRound, 2)}`,
            `Loop Ziel/Ist: ${this._getTrainingBaseTimeScale().toFixed(1)}x/${fmt(effectiveScale, 1)}x | Steps ${stepsPerFrame} | BudgetHits ${loopDiag?.totalBudgetHits || 0}`,
            `Avg Ueberleben/Bot: ${perBotSurvivalText}`,
        ];

        return {
            available: true,
            menuLines,
            overlayLines,
            overlayStatusClass,
            overlayStatusChipLabel,
            overlayStatusExplanation,
            overlayProgressPct,
            overlayProgressLabel: `${overlayProgressPct.toFixed(1)}%`,
            overlayProgressSummary,
            overlayProgressExplainer,
            overlayStorageSummary,
            overlayGraphLinePoints: progressGraph.linePoints,
            overlayGraphAreaPoints: progressGraph.areaPoints,
            overlayGraphRangeLabel,
            overlayActivityMain,
            overlayActivitySub,
            overlayStabilityMain,
            overlayStabilitySub,
            overlayPersistenceMain,
            overlayPersistenceSub,
            menuSummaryMain,
            menuSummaryStorage,
            baselineAvailable: !!baseline,
            baselineSummary,
        };
    }

    _updateTrainingOverlay(telemetry = null) {
        const overlay = this.ui?.trainingOverlay;
        if (!overlay) return;

        const gameVisibleState = this.state === 'PLAYING' || this.state === 'ROUND_END' || this.state === 'MATCH_END';
        const botCount = Number.isFinite(this.numBots) ? this.numBots : (this.entityManager?.bots?.length || 0);
        const trainingModeActive = !!this.settings?.training?.enabled;
        const visible = gameVisibleState && trainingModeActive && botCount > 0;

        overlay.classList.toggle('hidden', !visible);
        if (!visible) return;

        const data = telemetry || this._buildTrainingTelemetry();
        const statusClasses = ['status-improving', 'status-plateau', 'status-unstable', 'status-no_learning'];
        overlay.classList.remove(...statusClasses);
        overlay.classList.add(data.overlayStatusClass || 'status-plateau');

        if (this.ui.trainingOverlayLines) {
            this.ui.trainingOverlayLines.textContent = (data.overlayLines || []).join('\n');
        }
        if (this.ui.trainingOverlayStatusChip) {
            this.ui.trainingOverlayStatusChip.textContent = data.overlayStatusChipLabel || 'Zu wenig Daten';
        }
        if (this.ui.trainingOverlayStatusExplanation) {
            this.ui.trainingOverlayStatusExplanation.textContent = data.overlayStatusExplanation || 'Noch nicht genug Daten fuer eine Bewertung.';
        }
        if (this.ui.trainingOverlayProgressSummary) {
            this.ui.trainingOverlayProgressSummary.textContent = data.overlayProgressSummary || 'Gesamtfortschritt: 0.0%';
        }
        if (this.ui.trainingOverlayProgressExplainer) {
            this.ui.trainingOverlayProgressExplainer.textContent = data.overlayProgressExplainer || 'Erklaerung: 70% Explorations-Abbau + 30% State-Coverage.';
        }
        if (this.ui.trainingOverlayStorageSummary) {
            this.ui.trainingOverlayStorageSummary.textContent = data.overlayStorageSummary || 'Speicher: keine Daten';
        }
        if (this.ui.trainingOverlayActivityMain) {
            this.ui.trainingOverlayActivityMain.textContent = data.overlayActivityMain || 'Upd/Runde: n/a';
        }
        if (this.ui.trainingOverlayActivitySub) {
            this.ui.trainingOverlayActivitySub.textContent = data.overlayActivitySub || 'Mehr Updates beschleunigen Lernen.';
        }
        if (this.ui.trainingOverlayStabilityMain) {
            this.ui.trainingOverlayStabilityMain.textContent = data.overlayStabilityMain || 'Reward-Trend: n/a';
        }
        if (this.ui.trainingOverlayStabilitySub) {
            this.ui.trainingOverlayStabilitySub.textContent = data.overlayStabilitySub || 'Reward hoch und TD runter ist ein gutes Zeichen.';
        }
        if (this.ui.trainingOverlayPersistenceMain) {
            this.ui.trainingOverlayPersistenceMain.textContent = data.overlayPersistenceMain || 'Save: n/a';
        }
        if (this.ui.trainingOverlayPersistenceSub) {
            this.ui.trainingOverlayPersistenceSub.textContent = data.overlayPersistenceSub || 'Backup hilft bei versehentlichem Reset.';
        }
        if (this.ui.trainingOverlayGraphLine) {
            this.ui.trainingOverlayGraphLine.setAttribute('points', data.overlayGraphLinePoints || '');
        }
        if (this.ui.trainingOverlayGraphArea) {
            this.ui.trainingOverlayGraphArea.setAttribute('points', data.overlayGraphAreaPoints || '');
        }
        if (this.ui.trainingOverlayGraphRange) {
            this.ui.trainingOverlayGraphRange.textContent = data.overlayGraphRangeLabel || 'Trendfenster: keine Daten';
        }
        if (this.ui.trainingOverlayProgressFill) {
            const pct = clamp(Number(data.overlayProgressPct) || 0, 0, 100);
            this.ui.trainingOverlayProgressFill.style.width = `${pct.toFixed(1)}%`;
        }
        if (this.ui.trainingOverlayProgressLabel) {
            this.ui.trainingOverlayProgressLabel.textContent = data.overlayProgressLabel || '0.0%';
        }
    }

    _updateTrainingStatus() {
        const telemetry = this._buildTrainingTelemetry();
        if (this.ui.trainingStatusMain) {
            this.ui.trainingStatusMain.textContent = telemetry.menuSummaryMain || 'Updates: 0 | States: 0 | Reward: 0.00';
        }
        if (this.ui.trainingStatusStorage) {
            this.ui.trainingStatusStorage.textContent = telemetry.menuSummaryStorage || 'Save: n/a | Pending: 0 | Backup: n/a';
        }
        if (this.ui.trainingStatus) {
            this.ui.trainingStatus.textContent = (telemetry.menuLines || []).join('\n');
        }
        if (this.ui.trainingBaselineStatus) {
            this.ui.trainingBaselineStatus.textContent = telemetry.baselineSummary || 'A/B: keine Baseline gesetzt (Button "Benchmark A setzen").';
        }
        if (this.ui.trainingBaselineClearButton) {
            this.ui.trainingBaselineClearButton.disabled = !telemetry.baselineAvailable;
        }
        this._updateTrainingOverlay(telemetry);
    }

    _collectLearningEngineEntries() {
        const engineMap = [
            { key: 'mode3d', fallbackKey: 'planar', engine: this.botLearning3D },
            { key: 'planar', fallbackKey: 'mode3d', engine: this.botLearningPlanar },
        ];
        const unique = [];
        const seen = new Set();
        for (let i = 0; i < engineMap.length; i++) {
            const entry = engineMap[i];
            if (!entry.engine || seen.has(entry.engine)) continue;
            seen.add(entry.engine);
            unique.push(entry);
        }
        return unique;
    }

    _buildLearningPersistencePayload(version = 2) {
        const payload = {
            version: Math.max(1, Math.floor(Number(version) || 2)),
            savedAt: Date.now(),
            trainingMeta: this._sanitizeTrainingMeta(this.trainingMeta),
            learningBaseline: this._sanitizeLearningBaseline(this.learningBaseline),
            settings: {
                training: {
                    onlineLearningPaused: !!this.settings?.training?.onlineLearningPaused,
                },
            },
            engines: {},
        };

        const entries = this._collectLearningEngineEntries();
        let exported = 0;
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            if (typeof entry.engine.exportDump !== 'function') continue;
            const dump = entry.engine.exportDump(payload.savedAt);
            if (!dump || !Array.isArray(dump.states)) continue;
            payload.engines[entry.key] = dump;
            exported++;
        }
        return exported > 0 ? payload : null;
    }

    _applyLearningPersistencePayload(rawPayload, options = {}) {
        const payload = (rawPayload && typeof rawPayload === 'object') ? rawPayload : null;
        if (!payload) return 0;
        const useMerge = options.merge !== false;
        const applyPausedSetting = !!options.applyPausedSetting;
        const engines = (payload.engines && typeof payload.engines === 'object') ? payload.engines : {};

        let restored = 0;
        const entries = this._collectLearningEngineEntries();
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            const preferredDump = engines?.[entry.key];
            const fallbackDump = engines?.[entry.fallbackKey];
            const dump = (preferredDump && Array.isArray(preferredDump.states))
                ? preferredDump
                : ((fallbackDump && Array.isArray(fallbackDump.states)) ? fallbackDump : null);
            if (!dump) continue;

            let ok = false;
            if (useMerge && typeof entry.engine.mergeDumpAndSave === 'function') {
                ok = entry.engine.mergeDumpAndSave(dump) !== false;
            } else if (typeof entry.engine.importDumpAndSave === 'function') {
                ok = entry.engine.importDumpAndSave(dump) !== false;
            }
            if (ok) restored++;
        }
        if (restored <= 0) return 0;

        const previousMeta = this._sanitizeTrainingMeta(this.trainingMeta);
        this.trainingMeta = this._mergeTrainingMeta(this.trainingMeta, payload.trainingMeta || null);
        const nextMeta = this._sanitizeTrainingMeta(this.trainingMeta);
        const trainingMetaChanged = (
            previousMeta.totalTrainingRounds !== nextMeta.totalTrainingRounds
            || previousMeta.firstTrainingAt !== nextMeta.firstTrainingAt
            || previousMeta.lastTrainingAt !== nextMeta.lastTrainingAt
        );
        if (trainingMetaChanged) {
            this._saveTrainingMeta();
        }

        const incomingBaseline = this._sanitizeLearningBaseline(payload.learningBaseline);
        if (incomingBaseline) {
            const currentBaselineCreatedAt = Math.max(0, Math.floor(Number(this.learningBaseline?.createdAt) || 0));
            const currentBaselineRounds = Math.max(0, Math.floor(Number(this.learningBaseline?.absoluteRoundCount) || 0));
            const shouldReplaceBaseline = (
                !this.learningBaseline
                || incomingBaseline.createdAt >= currentBaselineCreatedAt
                || incomingBaseline.absoluteRoundCount > currentBaselineRounds
            );
            if (shouldReplaceBaseline) {
                this._saveLearningBaseline(incomingBaseline);
            }
        }

        if (applyPausedSetting && this.settings?.training) {
            this.settings.training.onlineLearningPaused = !!payload.settings?.training?.onlineLearningPaused;
            this._onSettingsChanged();
        }

        this._clearTrainingProgressHistory();
        this._updateTrainingStatus();
        return restored;
    }

    _buildLearningDiskSyncFingerprint() {
        const stats3D = this.botLearning3D ? this.botLearning3D.getStats() : null;
        const statsPlanar = this.botLearningPlanar ? this.botLearningPlanar.getStats() : null;
        const updates = Math.max(0, Math.floor(Number(stats3D?.totalUpdates || 0)))
            + Math.max(0, Math.floor(Number(statsPlanar?.totalUpdates || 0)));
        const states = Math.max(0, Math.floor(Number(stats3D?.states || 0)))
            + Math.max(0, Math.floor(Number(statsPlanar?.states || 0)));
        const rounds = Math.max(0, Math.floor(Number(this.trainingMeta?.totalTrainingRounds || 0)));
        const baselineRounds = Math.max(0, Math.floor(Number(this.learningBaseline?.absoluteRoundCount || 0)));
        const baselineAt = Math.max(0, Math.floor(Number(this.learningBaseline?.createdAt || 0)));
        return `${updates}|${states}|${rounds}|${baselineRounds}|${baselineAt}`;
    }

    async _bootstrapLearningDiskSync() {
        if (this._learningDiskSync.initStarted) return;
        this._learningDiskSync.initStarted = true;
        try {
            const restored = await this._loadLearningDataFromDisk();
            if (restored) {
                this._showStatusToast('Lerndaten vom PC geladen', 1700, 'success');
            }
            await this._syncLearningDataToDisk(true);
        } catch {
            // Disk sync remains optional; localStorage fallback still works.
        }
    }

    async _loadLearningDataFromDisk(showToast = false) {
        if (typeof fetch !== 'function') return false;
        try {
            const response = await fetch(`${LEARNING_DISK_SYNC_ENDPOINT}?t=${Date.now()}`, {
                method: 'GET',
                cache: 'no-store',
            });
            if (response.status === 404) {
                this._learningDiskSync.available = false;
                return false;
            }
            if (response.status === 204) {
                this._learningDiskSync.available = true;
                this._learningDiskSync.lastError = '';
                return false;
            }
            if (!response.ok) {
                throw new Error(`DiskSync GET HTTP ${response.status}`);
            }
            const payload = await response.json();
            const restored = this._applyLearningPersistencePayload(payload, {
                merge: true,
                applyPausedSetting: false,
            });
            this._learningDiskSync.available = true;
            this._learningDiskSync.lastError = '';
            if (restored > 0) {
                this._learningDiskSync.lastLoadedAt = Date.now();
                if (showToast) {
                    this._showStatusToast(`PC-Sync geladen (${restored} Engine${restored > 1 ? 's' : ''})`, 1900, 'success');
                }
                return true;
            }
            return false;
        } catch (error) {
            this._learningDiskSync.lastError = String(error?.message || error || 'unknown');
            if (this._learningDiskSync.available === null) {
                this._learningDiskSync.available = false;
            }
            if (showToast) {
                this._showStatusToast('PC-Sync Laden fehlgeschlagen', 1800, 'error');
            }
            return false;
        }
    }

    async _syncLearningDataToDisk(force = false, options = {}) {
        if (typeof fetch !== 'function') return false;
        if (this._learningDiskSync.inFlight) return false;
        if (!force && this._learningDiskSync.available === false) return false;

        const now = Date.now();
        if (!force && (now - this._learningDiskSync.lastSavedAt) < LEARNING_DISK_SYNC_MIN_INTERVAL_MS) {
            return false;
        }

        const fingerprint = this._buildLearningDiskSyncFingerprint();
        if (!force && fingerprint === this._learningDiskSync.lastFingerprint) {
            return false;
        }

        const payload = this._buildLearningPersistencePayload(2);
        if (!payload) return false;
        const serialized = JSON.stringify(payload);
        const requestedKeepalive = !!options.keepalive;
        const useKeepalive = requestedKeepalive && serialized.length < 60000;

        this._learningDiskSync.inFlight = true;
        try {
            const response = await fetch(LEARNING_DISK_SYNC_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: serialized,
                keepalive: useKeepalive,
            });
            if (response.status === 404) {
                this._learningDiskSync.available = false;
                if (options.showToast) {
                    this._showStatusToast('PC-Sync nicht verfuegbar (lokalen Server starten)', 2200, 'error');
                }
                return false;
            }
            if (!response.ok) {
                throw new Error(`DiskSync POST HTTP ${response.status}`);
            }
            this._learningDiskSync.available = true;
            this._learningDiskSync.lastSavedAt = now;
            this._learningDiskSync.lastFingerprint = fingerprint;
            this._learningDiskSync.lastError = '';
            if (options.showToast) {
                this._showStatusToast('Lerndaten auf PC synchronisiert', 1600, 'success');
            }
            return true;
        } catch (error) {
            this._learningDiskSync.lastError = String(error?.message || error || 'unknown');
            if (this._learningDiskSync.available === null) {
                this._learningDiskSync.available = false;
            }
            if (options.showToast) {
                this._showStatusToast('PC-Sync Speichern fehlgeschlagen', 1800, 'error');
            }
            return false;
        } finally {
            this._learningDiskSync.inFlight = false;
        }
    }

    _saveLearningData(showToast = false, force = true) {
        const engines = this._getLearningEngines();
        if (engines.length === 0) return false;
        let ok = true;
        for (let i = 0; i < engines.length; i++) {
            ok = engines[i].save(force) && ok;
        }
        if (ok) {
            this._lastLearningAutoSaveAt = Date.now();
            this._syncLearningDataToDisk(false);
        }
        this._updateTrainingStatus();
        if (showToast) {
            this._showStatusToast(ok ? 'Lerndaten gespeichert' : 'Lerndaten konnten nicht gespeichert werden', 1400, ok ? 'success' : 'error');
        }
        return ok;
    }

    _saveLearningSnapshot(showToast = false) {
        if (typeof localStorage === 'undefined') {
            if (showToast) {
                this._showStatusToast('Snapshot-Speicher nicht verfuegbar', 1500, 'error');
            }
            return false;
        }

        const payload = {
            version: 1,
            savedAt: Date.now(),
            trainingMeta: this._sanitizeTrainingMeta(this.trainingMeta),
            settings: {
                training: {
                    onlineLearningPaused: !!this.settings?.training?.onlineLearningPaused,
                },
            },
            engines: {},
        };

        const engineMap = [
            { key: 'mode3d', engine: this.botLearning3D },
            { key: 'planar', engine: this.botLearningPlanar },
        ];
        const seenEngines = new Set();

        let exported = 0;
        for (let i = 0; i < engineMap.length; i++) {
            const entry = engineMap[i];
            if (seenEngines.has(entry.engine)) continue;
            seenEngines.add(entry.engine);
            if (!entry.engine || typeof entry.engine.exportDump !== 'function') continue;
            const dump = entry.engine.exportDump(payload.savedAt);
            if (!dump || !Array.isArray(dump.states)) continue;
            payload.engines[entry.key] = dump;
            exported++;
        }

        if (exported === 0) {
            if (showToast) {
                this._showStatusToast('Snapshot fehlgeschlagen: keine Engine-Daten', 1800, 'error');
            }
            return false;
        }

        try {
            localStorage.setItem(LEARNING_SNAPSHOT_STORAGE_KEY, JSON.stringify(payload));
        } catch {
            if (showToast) {
                this._showStatusToast('Snapshot konnte nicht gespeichert werden', 1800, 'error');
            }
            return false;
        }

        if (showToast) {
            this._showStatusToast(`Snapshot gespeichert (${exported} Engine${exported > 1 ? 's' : ''})`, 1600, 'success');
        }
        return true;
    }

    _sanitizeLearningBaseline(rawBaseline) {
        if (!rawBaseline || typeof rawBaseline !== 'object') return null;
        const baseline = {
            version: 1,
            createdAt: 0,
            absoluteRoundCount: 0,
            sessionRoundCount: 0,
            aggregate: {
                averageBotSurvival: 0,
                selfCollisionsPerRound: 0,
                learningUpdatesPerRound: 0,
                learningRewardPerRound: 0,
                learningTdAbsMean: 0,
            },
            learning: {
                updateCount: 0,
                stateCount: 0,
                rewardSum: 0,
            },
        };

        baseline.version = Math.max(1, Math.floor(Number(rawBaseline.version) || 1));
        baseline.createdAt = Math.max(0, Math.floor(Number(rawBaseline.createdAt) || 0));
        baseline.absoluteRoundCount = Math.max(0, Math.floor(Number(rawBaseline.absoluteRoundCount) || 0));
        baseline.sessionRoundCount = Math.max(0, Math.floor(Number(rawBaseline.sessionRoundCount) || 0));

        const aggregate = rawBaseline.aggregate || {};
        baseline.aggregate.averageBotSurvival = Number.isFinite(aggregate.averageBotSurvival) ? aggregate.averageBotSurvival : 0;
        baseline.aggregate.selfCollisionsPerRound = Number.isFinite(aggregate.selfCollisionsPerRound) ? aggregate.selfCollisionsPerRound : 0;
        baseline.aggregate.learningUpdatesPerRound = Number.isFinite(aggregate.learningUpdatesPerRound) ? aggregate.learningUpdatesPerRound : 0;
        baseline.aggregate.learningRewardPerRound = Number.isFinite(aggregate.learningRewardPerRound) ? aggregate.learningRewardPerRound : 0;
        baseline.aggregate.learningTdAbsMean = Number.isFinite(aggregate.learningTdAbsMean) ? aggregate.learningTdAbsMean : 0;

        const learning = rawBaseline.learning || {};
        baseline.learning.updateCount = Math.max(0, Math.floor(Number(learning.updateCount) || 0));
        baseline.learning.stateCount = Math.max(0, Math.floor(Number(learning.stateCount) || 0));
        baseline.learning.rewardSum = Number.isFinite(learning.rewardSum) ? learning.rewardSum : 0;
        return baseline;
    }

    _loadLearningBaseline() {
        if (typeof localStorage === 'undefined') return null;
        try {
            const raw = localStorage.getItem(LEARNING_BASELINE_STORAGE_KEY);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            return this._sanitizeLearningBaseline(parsed);
        } catch {
            return null;
        }
    }

    _saveLearningBaseline(baseline) {
        if (typeof localStorage === 'undefined') return false;
        const sanitized = this._sanitizeLearningBaseline(baseline);
        if (!sanitized) return false;
        try {
            localStorage.setItem(LEARNING_BASELINE_STORAGE_KEY, JSON.stringify(sanitized));
            this.learningBaseline = sanitized;
            return true;
        } catch {
            return false;
        }
    }

    _createLearningBaseline() {
        const stats3D = this.botLearning3D ? this.botLearning3D.getStats() : null;
        const statsPlanar = this.botLearningPlanar ? this.botLearningPlanar.getStats() : null;
        if (!stats3D && !statsPlanar) return null;

        const aggregate = this.recorder?.getAggregateMetrics?.() || {};
        const sessionRoundCount = Number.isFinite(aggregate?.rounds) ? aggregate.rounds : 0;
        const absoluteRoundCount = this._getAbsoluteTrainingRoundCount(sessionRoundCount);
        const updateCount = (stats3D?.totalUpdates || 0) + (statsPlanar?.totalUpdates || 0);
        const stateCount = (stats3D?.states || 0) + (statsPlanar?.states || 0);
        const rewardSum = (stats3D?.totalReward || 0) + (statsPlanar?.totalReward || 0);

        return this._sanitizeLearningBaseline({
            version: 1,
            createdAt: Date.now(),
            absoluteRoundCount,
            sessionRoundCount,
            aggregate: {
                averageBotSurvival: Number.isFinite(aggregate.averageBotSurvival) ? aggregate.averageBotSurvival : 0,
                selfCollisionsPerRound: Number.isFinite(aggregate.selfCollisionsPerRound) ? aggregate.selfCollisionsPerRound : 0,
                learningUpdatesPerRound: Number.isFinite(aggregate.learningUpdatesPerRound) ? aggregate.learningUpdatesPerRound : 0,
                learningRewardPerRound: Number.isFinite(aggregate.learningRewardPerRound) ? aggregate.learningRewardPerRound : 0,
                learningTdAbsMean: Number.isFinite(aggregate.learningTdAbsMean) ? aggregate.learningTdAbsMean : 0,
            },
            learning: {
                updateCount,
                stateCount,
                rewardSum,
            },
        });
    }

    _setLearningBaseline(showToast = false) {
        const baseline = this._createLearningBaseline();
        if (!baseline) {
            if (showToast) {
                this._showStatusToast('Baseline nicht moeglich: keine Lerndaten', 1800, 'error');
            }
            return false;
        }
        const ok = this._saveLearningBaseline(baseline);
        this._updateTrainingStatus();
        if (showToast) {
            const timeLabel = baseline.createdAt > 0
                ? new Date(baseline.createdAt).toLocaleTimeString('de-DE', { hour12: false })
                : 'unbekannt';
            this._showStatusToast(ok ? `Benchmark A gesetzt (${timeLabel})` : 'Benchmark A konnte nicht gespeichert werden', 1800, ok ? 'success' : 'error');
        }
        return ok;
    }

    _clearLearningBaseline(showToast = false) {
        this.learningBaseline = null;
        if (typeof localStorage !== 'undefined') {
            try {
                localStorage.removeItem(LEARNING_BASELINE_STORAGE_KEY);
            } catch {
                // ignore storage errors
            }
        }
        this._updateTrainingStatus();
        if (showToast) {
            this._showStatusToast('Benchmark A geloescht', 1400, 'success');
        }
        return true;
    }

    _loadLearningSnapshot() {
        if (typeof localStorage === 'undefined') return null;
        try {
            const raw = localStorage.getItem(LEARNING_SNAPSHOT_STORAGE_KEY);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== 'object') return null;
            const engines = (parsed.engines && typeof parsed.engines === 'object') ? parsed.engines : {};
            const hasDump3D = !!(engines.mode3d && Array.isArray(engines.mode3d.states));
            const hasDumpPlanar = !!(engines.planar && Array.isArray(engines.planar.states));
            if (!hasDump3D && !hasDumpPlanar) return null;
            return {
                version: Number(parsed.version) || 1,
                savedAt: Number.isFinite(parsed.savedAt) ? Math.max(0, Math.floor(parsed.savedAt)) : 0,
                trainingMeta: parsed.trainingMeta && typeof parsed.trainingMeta === 'object'
                    ? this._sanitizeTrainingMeta(parsed.trainingMeta)
                    : null,
                settings: parsed.settings && typeof parsed.settings === 'object' ? parsed.settings : null,
                engines,
            };
        } catch {
            return null;
        }
    }

    _restoreLearningSnapshot(showToast = false) {
        const snapshot = this._loadLearningSnapshot();
        if (!snapshot) {
            if (showToast) {
                this._showStatusToast('Kein Snapshot gefunden', 1500, 'error');
            }
            return false;
        }

        let restored = 0;
        const engineMap = [
            { key: 'mode3d', engine: this.botLearning3D },
            { key: 'planar', engine: this.botLearningPlanar },
        ];
        const seenEngines = new Set();
        for (let i = 0; i < engineMap.length; i++) {
            const entry = engineMap[i];
            if (seenEngines.has(entry.engine)) continue;
            seenEngines.add(entry.engine);
            if (!entry.engine || typeof entry.engine.importDumpAndSave !== 'function') continue;
            const dump = snapshot.engines?.[entry.key];
            if (!dump || !Array.isArray(dump.states)) continue;
            const ok = entry.engine.importDumpAndSave(dump);
            if (ok !== false) restored++;
        }
        if (restored === 0) {
            if (showToast) {
                this._showStatusToast('Snapshot konnte nicht wiederhergestellt werden', 1800, 'error');
            }
            return false;
        }

        if (snapshot.trainingMeta) {
            this.trainingMeta = this._sanitizeTrainingMeta(snapshot.trainingMeta);
            this._saveTrainingMeta();
        }

        const pausedInSnapshot = !!snapshot.settings?.training?.onlineLearningPaused;
        if (this.settings?.training) {
            this.settings.training.onlineLearningPaused = pausedInSnapshot;
            this._onSettingsChanged();
        }

        this._clearTrainingProgressHistory();
        this._updateTrainingStatus();
        this._syncLearningDataToDisk(true);
        if (showToast) {
            const timeLabel = snapshot.savedAt > 0
                ? new Date(snapshot.savedAt).toLocaleTimeString('de-DE', { hour12: false })
                : 'unbekannt';
            this._showStatusToast(`Snapshot geladen (${restored} Engine${restored > 1 ? 's' : ''}, ${timeLabel})`, 1900, 'success');
        }
        return true;
    }

    _tickLearningAutoPersist() {
        const now = Date.now();
        const minIntervalMs = 2500;
        if (now - this._lastLearningAutoSaveAt < minIntervalMs) return;

        let pending = 0;
        const engines = this._getLearningEngines();
        if (engines.length === 0) {
            this._lastLearningAutoSaveAt = now;
            return;
        }
        for (let i = 0; i < engines.length; i++) {
            const stats = engines[i].getStats ? engines[i].getStats() : null;
            pending += stats?.updatesSinceSave || 0;
        }
        if (pending <= 0) {
            this._lastLearningAutoSaveAt = now;
            return;
        }

        this._saveLearningData(false, true);
        this._lastLearningAutoSaveAt = now;
    }

    _resetLearningData() {
        const engines = this._getLearningEngines();
        if (engines.length === 0) return;
        for (let i = 0; i < engines.length; i++) {
            engines[i].reset(true);
        }
        this._clearTrainingProgressHistory();
        this._updateTrainingStatus();
        this._syncLearningDataToDisk(true);
        this._showStatusToast('Lerndaten zurueckgesetzt', 1500, 'success');
    }

    _startDeveloperTraining() {
        const bounds = this._getTrainingTimeScaleBounds();
        this.settings.training.enabled = true;
        // Keep training conditions close to normal gameplay rules.
        this.settings.training.botVsBotOnly = false;
        this.settings.training.mortalBots = false;
        this.settings.training.autoRestart = true;
        this.settings.training.spectatorSplit = false;
        this.settings.training.dualWorlds = false;
        this.settings.training.onlineLearningPaused = false;
        this.settings.training.timeScale = bounds.max;
        this.settings.training.autoSaveRounds = 1;
        this.settings.numBots = Math.max(1, Number(this.settings.numBots) || 1);
        this._onSettingsChanged();
        this._showStatusToast('Developer-Training gestartet (Normalspiel-Botregeln)', 1500, 'success');
        this.startMatch();
    }

    startMatch() {
        this.keyCapture = null;
        this._applySettingsToRuntime();

        this.ui.mainMenu.classList.add('hidden');
        this.ui.hud.classList.remove('hidden');
        this.ui.messageOverlay.classList.add('hidden');
        this.ui.statusToast.classList.add('hidden');

        const useSpectatorSplit = this._isTrainingSpectatorSplitMode();
        this.renderer.setSplitScreen(this.numHumans === 2 || useSpectatorSplit);
        this._syncP2HudVisibility();

        if (this.entityManager) {
            this.entityManager.clear();
        }
        if (this.powerupManager) {
            this.powerupManager.clear();
        }
        this.particles.clear();
        this.renderer.clearScene();
        this.arena = new Arena(this.renderer);
        this.arena.portalsEnabled = this.settings.portalsEnabled;
        this.arena.build(this.mapKey);

        this.powerupManager = new PowerupManager(this.renderer, this.arena);



        this.entityManager = new EntityManager(
            this.renderer,
            this.arena,
            this.powerupManager,
            this.particles,
            this.audio,
            this.recorder,
            this._getLearningEngineMap()
        );
        this.entityManager.setup(this.numHumans, this.numBots, {
            modelScale: this.settings.gameplay.planeScale,
            botDifficulty: this.settings.botDifficulty || 'NORMAL',
            training: this.settings.training,
            humanConfigs: [
                { invertPitch: this.settings.invertPitch.PLAYER_1, cockpitCamera: this.settings.cockpitCamera.PLAYER_1 },
                { invertPitch: this.settings.invertPitch.PLAYER_2, cockpitCamera: this.settings.cockpitCamera.PLAYER_2 },
            ],
        });
        this.entityManager.onPlayerFeedback = (player, message) => {
            this._showPlayerFeedback(player, message);
        };

        for (let i = 0; i < this.numHumans; i++) {
            this.renderer.createCamera(i);
        }
        if (this.numHumans === 0) {
            this.renderer.createCamera(0);
            if (useSpectatorSplit) {
                this.renderer.createCamera(1);
            }
        }

        for (const player of this.entityManager.players) {
            player.score = 0;
        }

        this.entityManager.onPlayerDied = () => {
            // Optional impact effects can be added here.
        };

        this.entityManager.onRoundEnd = (winner) => {
            this._onRoundEnd(winner);
        };

        this._startRound();
    }

    _startRound() {
        this.state = 'PLAYING';
        this._hudTimer = 0;

        // Crosshair initial reset (visibility is updated dynamically per mode)
        if (this.ui.crosshairP1) {
            this.ui.crosshairP1.style.display = 'none';
        }
        if (this.ui.crosshairP2) {
            this.ui.crosshairP2.style.display = 'none';
        }

        this.roundPause = 0;

        for (const p of this.entityManager.players) {
            p.trail.clear();
        }
        this.powerupManager.clear();

        // Recording Start
        this.recorder.startRound(this.entityManager.players);

        this.entityManager.spawnAll();
        for (const player of this.entityManager.getHumanPlayers()) {
            player.planarAimOffset = 0;
        }

        this._applyLoopTiming(1.0);
        this.ui.messageOverlay.classList.add('hidden');
        this.ui.statusToast.classList.add('hidden');
        this._trainingOverlayTimer = 0;
        this._updateHUD();
        this._updateTrainingStatus();
    }

    _onRoundEnd(winner) {
        this.state = 'ROUND_END';
        this.roundPause = 3.0;
        const botOnlyTraining = this._isTrainingBotOnlyMode();

        if (!botOnlyTraining) {
            console.log('--- ROUND END ---');
        }
        let roundMetrics = null;
        try {
            roundMetrics = this.recorder.finalizeRound(winner, this.entityManager.players);
            if (roundMetrics && !botOnlyTraining) {
                console.log('[Recorder] Round KPI:', roundMetrics);
            }
            if (!botOnlyTraining) {
                // Recording Dump for manual debugging only.
                this.recorder.dump();
            }
        } catch (e) {
            console.error('Recorder Dump Failed:', e);
        }

        const hasBots = Number.isFinite(this.numBots) ? this.numBots > 0 : (this.entityManager?.bots?.length || 0) > 0;
        if (hasBots && this._getLearningEngines().length > 0) {
            this._recordAbsoluteTrainingRound();
            const rounds = this.recorder.getAggregateMetrics().rounds;
            const autoSaveRounds = clamp(parseInt(this.settings.training?.autoSaveRounds ?? 5, 10), 1, 50);
            if (rounds > 0 && rounds % autoSaveRounds === 0) {
                this._saveLearningData(false, true);
            }
            this._updateTrainingStatus();
        }

        const autoTrainingLoop = this._isTrainingBotOnlyMode() && !!this.settings.training?.autoRestart;
        if (autoTrainingLoop) {
            this.ui.messageOverlay.classList.add('hidden');
            this.roundPause = 0.1;
            return;
        }

        if (winner) {
            winner.score++;
        }

        this._updateHUD();

        // Match-Sieg nur wenn nicht Singleplayer-Solo (also entweder MP oder mit Bots)
        const totalBots = parseInt(this.numBots) || 0;
        const canWinMatch = this.entityManager.getHumanPlayers().length > 1 || totalBots > 0;
        const requiredWins = Math.max(5, this.winsNeeded); // SICHERHEIT: Mindestens 5 Siege
        const matchWinner = canWinMatch ? this.entityManager.players.find((p) => p.score >= requiredWins) : null;

        if (matchWinner) {
            this.state = 'MATCH_END';
            const name = matchWinner.isBot ? `Bot ${matchWinner.index + 1}` : `Spieler ${matchWinner.index + 1}`;
            this.ui.messageText.textContent = `Sieg: ${name} (Score: ${matchWinner.score})`;
            this.ui.messageSub.textContent = 'ENTER fuer neues Match oder ESC fuer Menue';
            this.ui.messageOverlay.classList.remove('hidden');
        } else if (winner) {
            const name = winner.isBot ? `Bot ${winner.index + 1}` : `Spieler ${winner.index + 1}`;
            this.ui.messageText.textContent = `${name} gewinnt die Runde`;
            this.ui.messageSub.textContent = 'Naechste Runde in 3...';
            this.ui.messageOverlay.classList.remove('hidden');
        } else {
            this.ui.messageText.textContent = 'Unentschieden';
            this.ui.messageSub.textContent = 'Naechste Runde in 3...';
            this.ui.messageOverlay.classList.remove('hidden');
        }
    }

    _updateHUD() {
        const humans = this.entityManager.getHumanPlayers();

        if (humans.length > 0) {
            const p1Score = String(humans[0].score);
            if (this.ui.p1Score.textContent !== p1Score) {
                this.ui.p1Score.textContent = p1Score;
            }
            this._updateItemBar(this.ui.p1Items, humans[0]);
        }

        if (humans.length > 1) {
            const p2Score = String(humans[1].score);
            if (this.ui.p2Score.textContent !== p2Score) {
                this.ui.p2Score.textContent = p2Score;
            }
            this._updateItemBar(this.ui.p2Items, humans[1]);
        }
    }

    _updateItemBar(container, player) {
        this._ensureItemSlots(container);

        for (let i = 0; i < CONFIG.POWERUP.MAX_INVENTORY; i++) {
            const slot = container.children[i];
            const type = i < player.inventory.length ? player.inventory[i] : '';

            if (slot.dataset.type === type) {
                continue;
            }

            slot.dataset.type = type;
            if (type) {
                const config = CONFIG.POWERUP.TYPES[type];
                slot.textContent = config.icon;
                slot.classList.add('active');
                slot.style.borderColor = '#' + config.color.toString(16).padStart(6, '0');
            } else {
                slot.textContent = '';
                slot.classList.remove('active');
                slot.style.borderColor = '';
            }
        }
    }

    _ensureItemSlots(container) {
        const desired = CONFIG.POWERUP.MAX_INVENTORY;

        while (container.children.length < desired) {
            const slot = document.createElement('div');
            slot.className = 'item-slot';
            slot.dataset.type = '';
            container.appendChild(slot);
        }

        while (container.children.length > desired) {
            container.removeChild(container.lastChild);
        }
    }

    _getPlanarAimAxis(playerIndex) {
        const controls = this.settings.controls;
        const p1 = controls.PLAYER_1;
        const p2 = controls.PLAYER_2;

        let up = false;
        let down = false;

        if (this.numHumans === 1 && playerIndex === 0) {
            up = this.input.isDown(p1.UP) || this.input.isDown(p2.UP);
            down = this.input.isDown(p1.DOWN) || this.input.isDown(p2.DOWN);
        } else {
            const map = playerIndex === 0 ? p1 : p2;
            up = this.input.isDown(map.UP);
            down = this.input.isDown(map.DOWN);
        }

        return (down ? 1 : 0) - (up ? 1 : 0);
    }

    _updatePlanarAimAssist(dt) {
        if (!this.entityManager) return;

        const inputSpeed = CONFIG.GAMEPLAY.PLANAR_AIM_INPUT_SPEED || 1.5;
        const returnSpeed = CONFIG.GAMEPLAY.PLANAR_AIM_RETURN_SPEED || 0.6;
        const isPlanar = !!CONFIG.GAMEPLAY.PLANAR_MODE;

        for (const player of this.entityManager.getHumanPlayers()) {
            const axis = isPlanar ? this._getPlanarAimAxis(player.index) : 0;
            let offset = player.planarAimOffset || 0;

            if (axis !== 0) {
                offset += axis * inputSpeed * dt;
            } else {
                const recover = 1 - Math.exp(-returnSpeed * dt);
                offset += (0 - offset) * recover;
            }

            player.planarAimOffset = clamp(offset, -1, 1);
        }
    }

    _updateCrosshairPosition(player, crosshairElement) {
        if (!player || !player.alive || !crosshairElement) {
            if (crosshairElement) crosshairElement.style.display = 'none';
            return;
        }

        const camera = this.renderer.cameras[player.index];
        if (!camera) {
            crosshairElement.style.display = 'none';
            return;
        }
        crosshairElement.style.display = 'block';

        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        const split = this.numHumans === 2;
        const viewportW = split ? screenW * 0.5 : screenW;
        const viewportX = split ? (player.index === 0 ? 0 : viewportW) : 0;

        player.getAimDirection(this._tmpAimDir);
        this._tmpAimVec.copy(player.position).addScaledVector(this._tmpAimDir, 80).project(camera);

        const ndcX = clamp(this._tmpAimVec.x, -1.05, 1.05);
        const ndcY = clamp(this._tmpAimVec.y, -1.05, 1.05);
        const x = viewportX + (ndcX * 0.5 + 0.5) * viewportW;
        const y = (-(ndcY * 0.5) + 0.5) * screenH;

        this._tmpRollEuler.setFromQuaternion(player.quaternion, 'YXZ');
        const rollDeg = THREE.MathUtils.radToDeg(this._tmpRollEuler.z);

        crosshairElement.style.left = `${x}px`;
        crosshairElement.style.top = `${y}px`;
        crosshairElement.style.transform = `translate(-50%, -50%) rotate(${rollDeg.toFixed(2)}deg)`;
    }

    _updateCrosshairs() {
        if (!this.entityManager) return;

        const p1 = this.entityManager.players[0];
        const p2 = this.entityManager.players[1];
        const planarMode = !!CONFIG.GAMEPLAY.PLANAR_MODE;
        const shouldShowScreenCrosshair = (player) => {
            if (!player) return false;
            if (planarMode) return true;
            const camMode = CONFIG.CAMERA.MODES[player.cameraMode] || 'THIRD_PERSON';
            return camMode !== 'FIRST_PERSON';
        };

        if (this.ui.crosshairP1) {
            if (shouldShowScreenCrosshair(p1)) {
                this._updateCrosshairPosition(p1, this.ui.crosshairP1);
            } else {
                this.ui.crosshairP1.style.display = 'none';
            }
        }
        if (this.ui.crosshairP2) {
            if (this.numHumans === 2) {
                if (shouldShowScreenCrosshair(p2)) {
                    this._updateCrosshairPosition(p2, this.ui.crosshairP2);
                } else {
                    this.ui.crosshairP2.style.display = 'none';
                }
            } else {
                this.ui.crosshairP2.style.display = 'none';
            }
        }
    }

    update(dt, loopMeta = null) {
        // FPS-Tracker (immer aktiv, kein Performance-Overhead)
        this._fpsTracker.update(dt);

        // Debug Recording
        if (this.state === 'PLAYING' && this.entityManager) {
            if (this.recorder?.tick) {
                this.recorder.tick(dt);
            }
            this.recorder.recordFrame(this.entityManager.players);
        }

        // Performance Analyse-Overlay aktualisieren (alle 250ms)
        if (this.stats) {
            this._statsTimer = (this._statsTimer || 0) + dt;
            if (this._statsTimer >= 0.25) {
                this._statsTimer = 0;
                const info = this.renderer.renderer.info;
                const fps = Math.round(this._fpsTracker.avg);
                const draws = info.render.calls || 0;
                const tris = info.render.triangles || 0;
                const geos = info.memory.geometries || 0;
                const texs = info.memory.textures || 0;
                const players = this.entityManager ? this.entityManager.players.filter(p => p.alive).length : 0;
                const quality = this.isLowQuality ? 'LOW' : 'HIGH';
                this.stats.innerHTML =
                    `<b style="color:${fps < 30 ? '#f44' : fps < 50 ? '#fa0' : '#0f0'}">FPS: ${fps}</b>\n` +
                    `Draw Calls: ${draws}\n` +
                    `Dreiecke: ${(tris / 1000).toFixed(1)}k\n` +
                    `Geometrien: ${geos}\n` +
                    `Texturen: ${texs}\n` +
                    `Spieler: ${players}\n` +
                    `Qualität: ${quality}`;
            }
        }

        // Adaptive Qualität: Auto-Switch auf LOW bei < 30 FPS
        this._adaptiveTimer = (this._adaptiveTimer || 0) + dt;
        if (this._adaptiveTimer >= 3.0) {
            this._adaptiveTimer = 0;
            if (this._fpsTracker.avg < 30 && !this.isLowQuality && this.state === 'PLAYING') {
                this.isLowQuality = true;
                this.renderer.setQuality('LOW');
                this._showStatusToast('⚡ Grafik automatisch reduziert');
            }
        }

        this._trainingOverlayTimer = (this._trainingOverlayTimer || 0) + dt;
        if (this._trainingOverlayTimer >= 0.25) {
            this._trainingOverlayTimer = 0;
            this._updateTrainingStatus();
        }

        if (this.state === 'PLAYING') {
            if (this.input.wasPressed('Escape')) {
                this._returnToMenu();
                return;
            }

            this._updatePlanarAimAssist(dt);
            this.entityManager.update(dt, this.input);
            this.powerupManager.update(dt);
            this.particles.update(dt);
            this.arena.update(dt);
            this.entityManager.updateCameras(dt);
            this._updateCrosshairs();

            // HUD nur alle ~200ms aktualisieren (reicht für UI)
            this._hudTimer += dt;
            if (this._hudTimer >= 0.2) {
                this._hudTimer = 0;
                this._updateHUD();
            }

            // FIGHTER HUD UPDATE
            const p1 = this.entityManager.players[0];
            if (p1) this.hudP1.update(p1, dt, this.entityManager);

            // Fadenkreuz Lock-On Farbe updaten (P1)
            if (this.ui.crosshairP1) {
                const lockTarget = this.entityManager.getLockOnTarget(0);
                if (lockTarget) {
                    this.ui.crosshairP1.classList.add('locked');
                } else {
                    this.ui.crosshairP1.classList.remove('locked');
                }
            }

            // Fadenkreuz Lock-On Farbe updaten (P2)
            if (this.ui.crosshairP2 && this.numHumans === 2) {
                const lockTarget = this.entityManager.getLockOnTarget(1);
                if (lockTarget) {
                    this.ui.crosshairP2.classList.add('locked');
                } else {
                    this.ui.crosshairP2.classList.remove('locked');
                }

                const p2 = this.entityManager.players[1];
                if (p2) this.hudP2.update(p2, dt, this.entityManager);
            } else {
                this.hudP2.setVisibility(false);
            }

            let slowFactor = 1.0;
            for (const p of this.entityManager.players) {
                for (const effect of p.activeEffects) {
                    if (effect.type === 'SLOW_TIME') {
                        slowFactor = Math.min(slowFactor, CONFIG.POWERUP.TYPES.SLOW_TIME.timeScale);
                    }
                }
            }
            this._applyLoopTiming(slowFactor);
            if (loopMeta?.frame && loopMeta.stepIndex === 1) {
                this._tickLearningAutoPersist();
            } else if (!loopMeta) {
                this._tickLearningAutoPersist();
            }
        } else if (this.state === 'ROUND_END') {
            if (this.input.wasPressed('Escape')) {
                this._returnToMenu();
                return;
            }

            if (this.input.wasPressed('Enter')) {
                this.roundPause = 0;
            }

            this.roundPause -= dt;

            const countdown = Math.ceil(this.roundPause);
            if (countdown > 0) {
                this.ui.messageSub.textContent = `Naechste Runde in ${countdown}...`;
            }

            this.entityManager.updateCameras(dt);

            if (this.roundPause <= 0) {
                this._startRound();
            }
        } else if (this.state === 'MATCH_END') {
            if (this.input.wasPressed('Enter')) {
                this.startMatch();
            } else if (this.input.wasPressed('Escape')) {
                this._returnToMenu();
            }

            this.entityManager.updateCameras(dt);
        }
    }

    render() {
        this.renderer.render();
    }

    _returnToMenu() {
        this.state = 'MENU';
        if (this.entityManager) {
            this.entityManager.clear();
        }
        if (this.powerupManager) {
            this.powerupManager.clear();
        }
        this.renderer.clearScene();
        this.arena = null;
        this.entityManager = null;
        this.powerupManager = null;
        this.ui.mainMenu.classList.remove('hidden');
        this._showMainNav(); // Reset to main navigation
        this.ui.hud.classList.add('hidden');
        this.ui.messageOverlay.classList.add('hidden');
        this.ui.statusToast.classList.add('hidden');
        // Fadenkreuz verstecken
        if (this.ui.crosshairP1) {
            this.ui.crosshairP1.style.display = 'none';
            this.ui.crosshairP1.style.left = '50%';
            this.ui.crosshairP1.style.top = '50%';
            this.ui.crosshairP1.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        }
        if (this.ui.crosshairP2) {
            this.ui.crosshairP2.style.display = 'none';
            this.ui.crosshairP2.style.left = '50%';
            this.ui.crosshairP2.style.top = '50%';
            this.ui.crosshairP2.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        }
        if (this.ui.trainingOverlay) {
            this.ui.trainingOverlay.classList.add('hidden');
        }
        this._saveLearningData(false, true);
        this._applyLoopTiming(1.0);
        this._syncMenuControls();
        this._kickoffLegacyLearningImport();
    }
    _showDebugLog(recorderDump) {
        // Disabled
    }

    captureBotBaseline(label = 'BASELINE') {
        const normalized = String(label || 'BASELINE').toUpperCase();
        const baseline = this.recorder.captureBaseline(normalized);
        this._showStatusToast(`Bot-Baseline gespeichert: ${normalized}`);
        console.log(`[Recorder] Baseline gespeichert (${normalized}):`, baseline);
        return baseline;
    }

    printBotValidationReport(label = 'BASELINE') {
        const normalized = String(label || 'BASELINE').toUpperCase();
        const aggregate = this.recorder.getAggregateMetrics();
        const comparison = this.recorder.compareWithBaseline(normalized);
        const matrix = this.recorder.getValidationMatrix();
        const report = {
            label: normalized,
            aggregate,
            comparison,
            matrix,
        };
        console.log('[Recorder] Validation report:', report);
        return report;
    }

    getBotValidationMatrix() {
        return this.recorder.getValidationMatrix();
    }

    printBotTestProtocol() {
        const matrix = this.getBotValidationMatrix();
        const protocol = {
            steps: [
                '1) applyBotValidationScenario(0) und 10 Runden spielen.',
                '2) captureBotBaseline(\"BASELINE\") ausfuehren.',
                '3) Weitere Szenarien aus der Matrix durchspielen.',
                '4) printBotValidationReport(\"BASELINE\") fuer KPI-Vergleich ausfuehren.',
            ],
            matrix,
        };
        console.log('[Recorder] Bot-Testprotokoll:', protocol);
        return protocol;
    }

    applyBotValidationScenario(idOrIndex = 0) {
        const matrix = this.getBotValidationMatrix();
        if (!matrix || matrix.length === 0) return null;

        let scenario = null;
        if (typeof idOrIndex === 'number') {
            scenario = matrix[Math.max(0, Math.min(matrix.length - 1, idOrIndex))];
        } else {
            scenario = matrix.find((s) => s.id === idOrIndex) || matrix[0];
        }
        if (!scenario) return null;

        this.settings.mode = scenario.mode === '2p' ? '2p' : '1p';
        this.settings.numBots = scenario.bots;
        this.settings.mapKey = scenario.mapKey;
        this.settings.gameplay.planarMode = !!scenario.planarMode;
        this.settings.gameplay.portalCount = scenario.portalCount;
        this.settings.portalsEnabled = scenario.portalCount > 0 || this.settings.portalsEnabled;
        this.settings.winsNeeded = Math.max(1, this.settings.winsNeeded);
        this._onSettingsChanged();

        this._showStatusToast(`Szenario ${scenario.id} geladen`);
        console.log('[Recorder] Validation scenario loaded:', scenario);
        return scenario;
    }
}

// Global Error Handling
window.onerror = function (msg, url, lineNo, columnNo, error) {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(50,0,0,0.9);color:#fff;padding:20px;z-index:99999;font-family:monospace;overflow:auto;';
    overlay.innerHTML = `<h1>CRITICAL ERROR</h1><p>${msg}</p><p>${url}:${lineNo}:${columnNo}</p><pre>${error ? error.stack : 'No stack trace'}</pre>`;
    document.body.appendChild(overlay);
    return false;
};

window.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('DOM ready, initializing Game...');
        const game = new Game();
        const params = new URLSearchParams(window.location.search);
        if (params.get('autotrain') === '1') {
            game._startDeveloperTraining();
        }
        // Global access for debugging
        window.GAME_INSTANCE = game;
    } catch (err) {
        console.error('Fatal Game Init Error:', err);
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(50,0,0,0.9);color:#fff;padding:20px;z-index:99999;font-family:monospace;overflow:auto;';
        overlay.innerHTML = `<h1>INIT ERROR</h1><p>${err.message}</p><pre>${err.stack}</pre>`;
        document.body.appendChild(overlay);
    }
});

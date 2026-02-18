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

const SETTINGS_STORAGE_KEY = 'mini-curve-fever-3d.settings.v4';
const SETTINGS_STORAGE_LEGACY_KEYS = ['mini-curve-fever-3d.settings.v3'];
const SETTINGS_PROFILES_STORAGE_KEY = 'mini-curve-fever-3d.settings-profiles.v1';

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
        this.activeProfileName = '';
        this.settingsDirty = false;

        this.state = 'MENU';
        this.roundPause = 0;
        this._hudTimer = 0;
        this._adaptiveTimer = 0;
        this._statsTimer = 0;
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

        this._applySettingsToRuntime();
        this.input.setBindings(this.settings.controls);

        this.arena = null;
        this.entityManager = null;
        this.powerupManager = null;
        this.particles = new ParticleSystem(this.renderer);

        this.gameLoop = new GameLoop(
            (dt) => this.update(dt),
            () => this.render()
        );

        this.ui = {
            mainMenu: document.getElementById('main-menu'),
            hud: document.getElementById('hud'),
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
        this.numHumans = this.settings.mode === '2p' ? 2 : 1;
        this.numBots = this.settings.numBots;
        this.mapKey = this.settings.mapKey;
        this.winsNeeded = this.settings.winsNeeded;

        CONFIG.PLAYER.SPEED = this.settings.gameplay.speed;
        CONFIG.PLAYER.TURN_SPEED = this.settings.gameplay.turnSensitivity;
        CONFIG.PLAYER.MODEL_SCALE = this.settings.gameplay.planeScale;
        CONFIG.PLAYER.HITBOX_RADIUS = 0.8 * this.settings.gameplay.planeScale;
        CONFIG.PLAYER.AUTO_ROLL = this.settings.autoRoll;

        if (this.settings.gameplay) {
            CONFIG.GAMEPLAY.PLANAR_MODE = !!this.settings.gameplay.planarMode;
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

        // Apply immediately if arena exists
        if (this.arena && this.arena.toggleBeams) {
            this.arena.toggleBeams(CONFIG.GAMEPLAY.PORTAL_BEAMS);
        }
        if (this.entityManager && this.entityManager.setBotDifficulty) {
            this.entityManager.setBotDifficulty(CONFIG.BOT.ACTIVE_DIFFICULTY);
        }

        this.input.setBindings(this.settings.controls);

        CONFIG.HOMING.LOCK_ON_ANGLE = this.settings.gameplay.lockOnAngle;
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

        this._renderKeybindEditor();
        this._syncP2HudVisibility();
        this._syncProfileControls();
        this._updateSaveButtonState();
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
        this.ui.p2Hud.classList.toggle('hidden', this.numHumans !== 2);
    }

    startMatch() {
        this.keyCapture = null;
        this._applySettingsToRuntime();

        this.ui.mainMenu.classList.add('hidden');
        this.ui.hud.classList.remove('hidden');
        this.ui.messageOverlay.classList.add('hidden');
        this.ui.statusToast.classList.add('hidden');

        this.renderer.setSplitScreen(this.numHumans === 2);
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



        this.entityManager = new EntityManager(this.renderer, this.arena, this.powerupManager, this.particles, this.audio, this.recorder);
        this.numHumans = this.settings.mode === '2p' ? 2 : 1;
        this.numBots = this.settings.numBots;
        this.mapKey = this.settings.mapKey;
        this.winsNeeded = this.settings.winsNeeded || 5;

        this.entityManager.setup(this.numHumans, this.numBots, {
            modelScale: this.settings.gameplay.planeScale,
            botDifficulty: this.settings.botDifficulty || 'NORMAL',
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

        this.gameLoop.setTimeScale(1.0);
        this.ui.messageOverlay.classList.add('hidden');
        this.ui.statusToast.classList.add('hidden');
        this._updateHUD();
    }

    _onRoundEnd(winner) {
        this.state = 'ROUND_END';
        this.roundPause = 3.0;

        // Recording Dump & Debug Text
        // Recording Dump & Debug Text
        // Recording Dump & Debug Text
        console.log('--- ROUND END ---');
        try {
            const roundMetrics = this.recorder.finalizeRound(winner, this.entityManager.players);
            if (roundMetrics) {
                console.log('[Recorder] Round KPI:', roundMetrics);
            }
            // Recording Dump
            this.recorder.dump(); // Log to console only
        } catch (e) {
            console.error('Recorder Dump Failed:', e);
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

    update(dt) {
        // FPS-Tracker (immer aktiv, kein Performance-Overhead)
        this._fpsTracker.update(dt);

        // Debug Recording
        if (this.state === 'PLAYING' && this.entityManager) {
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

            for (const p of this.entityManager.players) {
                for (const effect of p.activeEffects) {
                    if (effect.type === 'SLOW_TIME') {
                        this.gameLoop.setTimeScale(CONFIG.POWERUP.TYPES.SLOW_TIME.timeScale);
                    }
                }
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
        this._syncMenuControls();
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

// ============================================
// main.js - entry point and game controller
// ============================================

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

const SETTINGS_STORAGE_KEY = 'mini-curve-fever-3d.settings.v3';

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

            modeButtons: Array.from(document.querySelectorAll('.mode-btn')),
            mapSelect: document.getElementById('map-select'),
            botSlider: document.getElementById('bot-count'),
            botLabel: document.getElementById('bot-count-label'),
            winSlider: document.getElementById('win-count'),
            winLabel: document.getElementById('win-count-label'),
            autoRollToggle: document.getElementById('auto-roll-toggle'),
            invertP1: document.getElementById('invert-p1'),
            invertP2: document.getElementById('invert-p2'),
            cockpitCamP1: document.getElementById('cockpit-cam-p1'),
            cockpitCamP2: document.getElementById('cockpit-cam-p2'),
            portalsToggle: document.getElementById('portals-toggle'),
            portalBeamsToggle: document.getElementById('portal-beams-toggle'),

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
            startButton: document.getElementById('btn-start'),
        };

        this._setupMenuListeners();
        this._syncMenuControls();

        // Portal Beams Toggle Listener (Added Manually here as _setupMenuListeners might be long)
        // Actually best to put it in _setupMenuListeners.
        // Let's add it here for now to ensure it works without viewing specific line in huge method.
        if (this.ui.portalBeamsToggle) {
            this.ui.portalBeamsToggle.addEventListener('change', (e) => {
                this.settings.gameplay.portalBeams = e.target.checked;
                this._saveSettings();
                this._applySettingsToRuntime();
            });
        }

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

    _createDefaultSettings() {
        return {
            mode: '1p',
            mapKey: 'standard',
            numBots: 1,
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

    _loadSettings() {
        const defaults = this._createDefaultSettings();

        try {
            const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
            if (!raw) {
                return defaults;
            }
            const saved = JSON.parse(raw);

            const merged = deepClone(defaults);

            merged.mode = saved.mode === '2p' ? '2p' : '1p';
            merged.mapKey = CONFIG.MAPS[saved.mapKey] ? saved.mapKey : defaults.mapKey;
            merged.numBots = clamp(parseInt(saved.numBots ?? defaults.numBots, 10), 0, 8);
            merged.winsNeeded = clamp(parseInt(saved.winsNeeded ?? defaults.winsNeeded, 10), 1, 15);
            merged.autoRoll = typeof saved.autoRoll === 'boolean' ? saved.autoRoll : defaults.autoRoll;

            merged.invertPitch.PLAYER_1 = !!saved?.invertPitch?.PLAYER_1;
            merged.invertPitch.PLAYER_2 = !!saved?.invertPitch?.PLAYER_2;

            merged.cockpitCamera.PLAYER_1 = !!saved?.cockpitCamera?.PLAYER_1;
            merged.cockpitCamera.PLAYER_2 = !!saved?.cockpitCamera?.PLAYER_2;

            merged.portalsEnabled = saved?.portalsEnabled !== undefined ? !!saved.portalsEnabled : defaults.portalsEnabled;

            merged.gameplay.speed = clamp(parseFloat(saved?.gameplay?.speed ?? defaults.gameplay.speed), 8, 40);
            merged.gameplay.turnSensitivity = clamp(parseFloat(saved?.gameplay?.turnSensitivity ?? defaults.gameplay.turnSensitivity), 0.8, 5);
            merged.gameplay.planeScale = clamp(parseFloat(saved?.gameplay?.planeScale ?? defaults.gameplay.planeScale), 0.6, 2.0);
            merged.gameplay.trailWidth = clamp(parseFloat(saved?.gameplay?.trailWidth ?? defaults.gameplay.trailWidth), 0.2, 2.5);
            merged.gameplay.gapSize = clamp(parseFloat(saved?.gameplay?.gapSize ?? defaults.gameplay.gapSize), 0.05, 1.5);
            merged.gameplay.gapFrequency = clamp(parseFloat(saved?.gameplay?.gapFrequency ?? defaults.gameplay.gapFrequency), 0, 0.25);
            merged.gameplay.itemAmount = clamp(parseInt(saved?.gameplay?.itemAmount ?? defaults.gameplay.itemAmount, 10), 1, 20);
            merged.gameplay.fireRate = clamp(parseFloat(saved?.gameplay?.fireRate ?? defaults.gameplay.fireRate), 0.1, 2.0);
            merged.gameplay.lockOnAngle = clamp(parseInt(saved?.gameplay?.lockOnAngle ?? defaults.gameplay.lockOnAngle, 10), 5, 45);
            merged.gameplay.planarMode = !!(saved?.gameplay?.planarMode ?? defaults.gameplay.planarMode);
            merged.gameplay.portalCount = clamp(parseInt(saved?.gameplay?.portalCount ?? defaults.gameplay.portalCount, 10), 0, 20);

            merged.controls.PLAYER_1 = this._normalizePlayerControls(saved?.controls?.PLAYER_1, defaults.controls.PLAYER_1);
            merged.controls.PLAYER_2 = this._normalizePlayerControls(saved?.controls?.PLAYER_2, defaults.controls.PLAYER_2);

            return merged;
        } catch {
            return defaults;
        }
    }

    _saveSettings() {
        try {
            localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(this.settings));
        } catch {
            // Ignore persistence errors (private mode, quotas, etc.)
        }
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
        CONFIG.PLAYER.AUTO_ROLL = this.settings.gameplay.autoRoll;

        if (this.settings.gameplay) {
            CONFIG.GAMEPLAY.PLANAR_MODE = !!this.settings.gameplay.planarMode;
            CONFIG.GAMEPLAY.PORTAL_COUNT = this.settings.gameplay.portalCount || 0;
        }

        CONFIG.TRAIL.WIDTH = this.settings.gameplay.trailWidth;
        CONFIG.TRAIL.GAP_DURATION = this.settings.gameplay.gapSize;
        CONFIG.TRAIL.GAP_CHANCE = this.settings.gameplay.gapFrequency;

        CONFIG.POWERUP.MAX_ON_FIELD = Math.round(this.settings.gameplay.itemAmount);
        CONFIG.PROJECTILE.COOLDOWN = this.settings.gameplay.fireRate;

        if (this.settings.gameplay) {
            CONFIG.GAMEPLAY.PORTAL_BEAMS = this.settings.gameplay.portalBeams !== undefined ? !!this.settings.gameplay.portalBeams : true;
        }

        // Apply immediately if arena exists
        if (this.arena && this.arena.toggleBeams) {
            this.arena.toggleBeams(CONFIG.GAMEPLAY.PORTAL_BEAMS);
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
            this._showStatusToast('💾 Alle Einstellungen gespeichert!');
        });

        this.ui.startButton.addEventListener('click', () => {
            this.startMatch();
        });

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
    }

    _onSettingsChanged() {
        this._applySettingsToRuntime();
        this._saveSettings();
        this._syncMenuControls();
    }

    _syncMenuControls() {
        this.ui.modeButtons.forEach((btn) => {
            btn.classList.toggle('active', btn.dataset.mode === this.settings.mode);
        });

        this.ui.mapSelect.value = this.settings.mapKey;

        this.ui.botSlider.value = String(this.settings.numBots);
        this.ui.botLabel.textContent = String(this.settings.numBots);

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

    _showStatusToast(message, durationMs = 1200) {
        if (!this.ui.statusToast) return;

        this.ui.statusToast.textContent = message;
        this.ui.statusToast.classList.remove('hidden', 'show');
        // Restart animation on repeated calls.
        void this.ui.statusToast.offsetWidth;
        this.ui.statusToast.classList.add('show');

        if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
        }
        this.toastTimeout = setTimeout(() => {
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
        this.numHumans = this.settings.mode === 'MULTIPLAYER' ? 2 : 1;
        this.numBots = this.settings.numBots;
        this.mapKey = this.settings.mapKey;
        this.winsNeeded = this.settings.winCount || 10;

        this.entityManager.setup(this.numHumans, this.numBots, {
            modelScale: this.settings.gameplay.planeScale,
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

        // Fadenkreuz anzeigen und positionieren
        if (this.ui.crosshairP1) {
            this.ui.crosshairP1.style.display = 'block';
            this.ui.crosshairP1.classList.remove('p1-split');
        }
        if (this.ui.crosshairP2) {
            this.ui.crosshairP2.style.display = 'none';
            this.ui.crosshairP2.classList.remove('p2-split');
        }

        if (this.numHumans === 2) {
            if (this.ui.crosshairP1) this.ui.crosshairP1.classList.add('p1-split');
            if (this.ui.crosshairP2) {
                this.ui.crosshairP2.style.display = 'block';
                this.ui.crosshairP2.classList.add('p2-split');
            }
        }
        this.roundPause = 0;

        for (const p of this.entityManager.players) {
            p.trail.clear();
        }
        this.powerupManager.clear();

        this.entityManager.spawnAll();

        // Recording Start
        this.recorder.startRound();

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

            this.entityManager.update(dt, this.input);
            this.powerupManager.update(dt);
            this.particles.update(dt);
            this.arena.update(dt);
            this.entityManager.updateCameras(dt);

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
        this.ui.hud.classList.add('hidden');
        this.ui.messageOverlay.classList.add('hidden');
        this.ui.statusToast.classList.add('hidden');
        // Fadenkreuz verstecken
        if (this.ui.crosshairP1) this.ui.crosshairP1.style.display = 'none';
        if (this.ui.crosshairP2) this.ui.crosshairP2.style.display = 'none';
        this._syncMenuControls();
    }
    _showDebugLog(recorderDump) {
        // Disabled
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

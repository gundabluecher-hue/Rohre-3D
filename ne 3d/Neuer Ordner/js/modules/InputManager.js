// ============================================
// InputManager.js - keyboard input and dynamic bindings
// ============================================

import { CONFIG } from './Config.js';

const ACTION_KEYS = [
    'UP',
    'DOWN',
    'LEFT',
    'RIGHT',
    'ROLL_LEFT',
    'ROLL_RIGHT',
    'BOOST',
    'SHOOT',
    'NEXT_ITEM',
    'DROP',
    'CAMERA',
];

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export class InputManager {
    constructor() {
        this.keys = {};
        this.justPressed = {};
        this.bindings = deepClone(CONFIG.KEYS);

        // GC Optimization: Reusable object
        this._reuseInput = {
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
            nextItem: false,
        };

        window.addEventListener('keydown', (e) => {
            if (!this.keys[e.code]) {
                this.justPressed[e.code] = true;
            }
            this.keys[e.code] = true;
            e.preventDefault();
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
            e.preventDefault();
        });
    }

    setBindings(bindingsByPlayer) {
        this.bindings = {
            PLAYER_1: this._normalizePlayerBindings(bindingsByPlayer?.PLAYER_1, CONFIG.KEYS.PLAYER_1),
            PLAYER_2: this._normalizePlayerBindings(bindingsByPlayer?.PLAYER_2, CONFIG.KEYS.PLAYER_2),
        };
    }

    getBindings() {
        return deepClone(this.bindings);
    }

    _normalizePlayerBindings(source, fallback) {
        const fromSource = source || {};
        const normalized = {};

        for (const key of ACTION_KEYS) {
            normalized[key] = fromSource[key] || fallback[key];
        }

        return normalized;
    }

    isDown(code) {
        return !!this.keys[code];
    }

    wasPressed(code) {
        if (this.justPressed[code]) {
            this.justPressed[code] = false;
            return true;
        }
        return false;
    }

    clearJustPressed() {
        this.justPressed = {};
    }

    _resetInput(inputObj) {
        inputObj.pitchUp = false;
        inputObj.pitchDown = false;
        inputObj.yawLeft = false;
        inputObj.yawRight = false;
        inputObj.rollLeft = false;
        inputObj.rollRight = false;
        inputObj.boost = false;
        inputObj.cameraSwitch = false;
        inputObj.dropItem = false;
        inputObj.shootItem = false;
        inputObj.nextItem = false;
    }

    _isActionDown(primaryCode, secondaryCode = '') {
        if (this.isDown(primaryCode)) {
            return true;
        }
        return !!secondaryCode && this.isDown(secondaryCode);
    }

    _wasActionPressed(primaryCode, secondaryCode = '') {
        let pressed = this.wasPressed(primaryCode);
        if (secondaryCode && secondaryCode !== primaryCode) {
            pressed = this.wasPressed(secondaryCode) || pressed;
        }
        return pressed;
    }

    getPlayerInput(playerIndex, options = {}) {
        const includeSecondaryBindings = !!options.includeSecondaryBindings && playerIndex === 0;
        const keyMap = playerIndex === 0 ? this.bindings.PLAYER_1 : this.bindings.PLAYER_2;
        const altKeyMap = includeSecondaryBindings ? this.bindings.PLAYER_2 : null;

        // Reset reused object
        this._resetInput(this._reuseInput);

        this._reuseInput.pitchUp = this._isActionDown(keyMap.UP, altKeyMap?.UP || '');
        this._reuseInput.pitchDown = this._isActionDown(keyMap.DOWN, altKeyMap?.DOWN || '');
        this._reuseInput.yawLeft = this._isActionDown(keyMap.LEFT, altKeyMap?.LEFT || '');
        this._reuseInput.yawRight = this._isActionDown(keyMap.RIGHT, altKeyMap?.RIGHT || '');
        this._reuseInput.rollLeft = this._isActionDown(keyMap.ROLL_LEFT, altKeyMap?.ROLL_LEFT || '');
        this._reuseInput.rollRight = this._isActionDown(keyMap.ROLL_RIGHT, altKeyMap?.ROLL_RIGHT || '');
        this._reuseInput.boost = this._isActionDown(keyMap.BOOST, altKeyMap?.BOOST || '');
        this._reuseInput.cameraSwitch = this._wasActionPressed(keyMap.CAMERA, altKeyMap?.CAMERA || '');
        this._reuseInput.dropItem = this._wasActionPressed(keyMap.DROP, altKeyMap?.DROP || '');
        this._reuseInput.shootItem = this._wasActionPressed(keyMap.SHOOT, altKeyMap?.SHOOT || '');
        this._reuseInput.nextItem = this._wasActionPressed(keyMap.NEXT_ITEM, altKeyMap?.NEXT_ITEM || '');

        return this._reuseInput;
    }
}

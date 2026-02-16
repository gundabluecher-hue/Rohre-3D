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

    getPlayerInput(playerIndex) {
        const keyMap = playerIndex === 0 ? this.bindings.PLAYER_1 : this.bindings.PLAYER_2;

        // Reset reused object
        this._resetInput(this._reuseInput);

        this._reuseInput.pitchUp = this.isDown(keyMap.UP);
        this._reuseInput.pitchDown = this.isDown(keyMap.DOWN);
        this._reuseInput.yawLeft = this.isDown(keyMap.LEFT);
        this._reuseInput.yawRight = this.isDown(keyMap.RIGHT);
        this._reuseInput.rollLeft = this.isDown(keyMap.ROLL_LEFT);
        this._reuseInput.rollRight = this.isDown(keyMap.ROLL_RIGHT);
        this._reuseInput.boost = this.isDown(keyMap.BOOST);
        this._reuseInput.cameraSwitch = this.wasPressed(keyMap.CAMERA);
        this._reuseInput.dropItem = this.wasPressed(keyMap.DROP);
        this._reuseInput.shootItem = this.wasPressed(keyMap.SHOOT);
        this._reuseInput.nextItem = this.wasPressed(keyMap.NEXT_ITEM);

        return this._reuseInput;
    }
}

// ============================================
// GameLoop.js - Fixed Timestep Game Loop
// ============================================

import { CONFIG } from './Config.js';

export class GameLoop {
    constructor(updateFn, renderFn) {
        this.updateFn = updateFn;
        this.renderFn = renderFn;
        this.running = false;
        this.accumulator = 0;
        this.lastTime = 0;
        this.timeScale = 1.0; // Für Zeitlupe-Powerup
        this._boundLoop = this._loop.bind(this);
        this.frameId = null;
    }

    start() {
        this.running = true;
        this.lastTime = performance.now();
        this.accumulator = 0;
        this.frameId = requestAnimationFrame(this._boundLoop);
    }

    stop() {
        this.running = false;
        if (this.frameId) {
            cancelAnimationFrame(this.frameId);
            this.frameId = null;
        }
    }

    setTimeScale(scale) {
        this.timeScale = scale;
    }

    _loop(now) {
        if (!this.running) return;

        const rawDt = (now - this.lastTime) / 1000;
        this.lastTime = now;

        // Begrenze dt um Spiral-of-Death zu vermeiden
        const dt = Math.min(rawDt, 0.1) * this.timeScale;
        this.accumulator += dt;

        const step = CONFIG.TIME_STEP;
        const maxUpdates = CONFIG.MAX_UPDATES_PER_FRAME || 5;
        let updates = 0;

        // Fixed timestep updates
        while (this.accumulator >= step && updates < maxUpdates) {
            this.updateFn(step);
            this.accumulator -= step;
            updates++;
        }

        // Wenn wir zu weit hinterher sind, alte Restzeit verwerfen statt endlos nachzuberechnen.
        if (updates >= maxUpdates && this.accumulator > step) {
            this.accumulator = 0;
        }

        // Render
        this.renderFn();

        this.frameId = requestAnimationFrame(this._boundLoop);
    }
}

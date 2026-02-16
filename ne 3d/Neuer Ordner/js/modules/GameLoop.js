// ============================================
// GameLoop.js - Smooth Variable Timestep Game Loop
// ============================================

import { CONFIG } from './Config.js';

export class GameLoop {
    constructor(updateFn, renderFn) {
        this.updateFn = updateFn;
        this.renderFn = renderFn;
        this.running = false;
        this.lastTime = 0;
        this.timeScale = 1.0; // Für Zeitlupe-Powerup
        this._boundLoop = this._loop.bind(this);
        this.frameId = null;
        this._errorShown = false;
        this.accumulator = 0;
        this.fixedStep = 1 / 60; // Fester Physik-Schritt (1x pro Frame bei 60 FPS)
    }

    start() {
        this.running = true;
        this.lastTime = performance.now();
        this._errorShown = false;
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

        // Begrenze dt um Spiral-of-Death und Tab-Switch-Sprünge zu vermeiden
        const dt = Math.min(rawDt, 0.05);
        this.accumulator += dt * this.timeScale;

        // Maximal 3 Schritte pro Frame (Spiral-of-Death-Schutz)
        const maxAccum = this.fixedStep * 3;
        if (this.accumulator > maxAccum) this.accumulator = maxAccum;

        try {
            let stepped = false;
            while (this.accumulator >= this.fixedStep) {
                this.updateFn(this.fixedStep);
                this.accumulator -= this.fixedStep;
                stepped = true;
            }
            // Fallback: mindestens ein Update pro Frame wenn dt > 0
            if (!stepped && dt > 0) {
                this.updateFn(dt * this.timeScale);
            }
            this.renderFn();
        } catch (err) {
            // Fehler sichtbar machen per Overlay
            if (!this._errorShown) {
                this._errorShown = true;
                console.error('GameLoop error:', err);
                const overlay = document.createElement('div');
                overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;padding:20px;background:#c00;color:#fff;font:16px monospace;z-index:99999;white-space:pre-wrap;';
                overlay.textContent = 'FEHLER: ' + err.message + '\n\n' + err.stack;
                document.body.appendChild(overlay);
            }
        }

        this.frameId = requestAnimationFrame(this._boundLoop);
    }
}

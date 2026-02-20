// ============================================
// GameLoop.js - Smooth Variable Timestep Game Loop
// ============================================

import { CONFIG } from './Config.js';

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function nowMs() {
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        return performance.now();
    }
    return Date.now();
}

export class GameLoop {
    constructor(updateFn, renderFn) {
        this.updateFn = updateFn;
        this.renderFn = renderFn;
        this.running = false;
        this.lastTime = 0;
        this.timeScale = 1.0; // Fuer Zeitlupe/Training
        this._boundLoop = this._loop.bind(this);
        this.frameId = null;
        this._errorShown = false;
        this.accumulator = 0;
        this.fixedStep = 1 / 60; // Fester Physik-Schritt (1x pro Frame bei 60 FPS)
        this.maxUpdatesPerFrame = Math.max(1, Math.floor(CONFIG.MAX_UPDATES_PER_FRAME || 5));
        this.maxUpdateCpuMs = 8;
        this.dropAccumulatorOnBudgetExhaust = false;
        this._diag = {
            frame: 0,
            lastRawDt: 0,
            lastScaledDt: 0,
            lastSimulatedDt: 0,
            lastSteps: 0,
            lastCpuMs: 0,
            lastAccumulator: 0,
            budgetHit: false,
            droppedAccumulator: false,
            totalBudgetHits: 0,
            totalDroppedFrames: 0,
        };
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
        const parsed = Number(scale);
        this.timeScale = Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
    }

    configureUpdateBudget(options = {}) {
        if (Object.prototype.hasOwnProperty.call(options, 'maxUpdatesPerFrame')) {
            const parsed = Number(options.maxUpdatesPerFrame);
            if (Number.isFinite(parsed)) {
                this.maxUpdatesPerFrame = Math.max(1, Math.floor(parsed));
            }
        }
        if (Object.prototype.hasOwnProperty.call(options, 'maxUpdateCpuMs')) {
            const parsed = Number(options.maxUpdateCpuMs);
            if (Number.isFinite(parsed)) {
                this.maxUpdateCpuMs = clamp(parsed, 0, 50);
            }
        }
        if (Object.prototype.hasOwnProperty.call(options, 'dropAccumulatorOnBudgetExhaust')) {
            this.dropAccumulatorOnBudgetExhaust = !!options.dropAccumulatorOnBudgetExhaust;
        }
    }

    getDiagnostics() {
        const d = this._diag;
        const effectiveScale = d.lastRawDt > 0 ? d.lastSimulatedDt / d.lastRawDt : this.timeScale;
        return {
            frame: d.frame,
            lastRawDt: d.lastRawDt,
            lastScaledDt: d.lastScaledDt,
            lastSimulatedDt: d.lastSimulatedDt,
            lastSteps: d.lastSteps,
            lastCpuMs: d.lastCpuMs,
            lastAccumulator: d.lastAccumulator,
            budgetHit: d.budgetHit,
            droppedAccumulator: d.droppedAccumulator,
            totalBudgetHits: d.totalBudgetHits,
            totalDroppedFrames: d.totalDroppedFrames,
            targetScale: this.timeScale,
            effectiveScale,
            maxUpdatesPerFrame: this.maxUpdatesPerFrame,
            maxUpdateCpuMs: this.maxUpdateCpuMs,
        };
    }

    _loop(now) {
        if (!this.running) return;

        const rawDt = (now - this.lastTime) / 1000;
        this.lastTime = now;

        // Begrenze dt um Spiral-of-Death und Tab-Switch-Spruenge zu vermeiden
        const dt = Math.min(rawDt, 0.05);
        const scaledDt = dt * this.timeScale;
        this.accumulator += scaledDt;

        const maxAccum = this.fixedStep * this.maxUpdatesPerFrame;
        if (this.accumulator > maxAccum) {
            this.accumulator = maxAccum;
        }

        try {
            let stepped = false;
            let stepCount = 0;
            let simulatedDt = 0;
            let budgetHit = false;
            let droppedAccumulator = false;
            const frameStart = nowMs();
            const frameIndex = this._diag.frame + 1;

            while (this.accumulator >= this.fixedStep && stepCount < this.maxUpdatesPerFrame) {
                this.updateFn(this.fixedStep, {
                    frame: frameIndex,
                    stepIndex: stepCount + 1,
                    fixedStep: true,
                    timeScale: this.timeScale,
                });
                this.accumulator -= this.fixedStep;
                simulatedDt += this.fixedStep;
                stepCount++;
                stepped = true;

                if (this.maxUpdateCpuMs > 0 && nowMs() - frameStart >= this.maxUpdateCpuMs) {
                    budgetHit = true;
                    break;
                }
            }

            if (!budgetHit && this.accumulator >= this.fixedStep && stepCount >= this.maxUpdatesPerFrame) {
                budgetHit = true;
            }

            if (budgetHit && this.dropAccumulatorOnBudgetExhaust) {
                this.accumulator = 0;
                droppedAccumulator = true;
            }

            if (!stepped && dt > 0) {
                const fallbackDt = dt * this.timeScale;
                this.updateFn(fallbackDt, {
                    frame: frameIndex,
                    stepIndex: 1,
                    fixedStep: false,
                    timeScale: this.timeScale,
                });
                simulatedDt = fallbackDt;
            }

            const frameCpuMs = nowMs() - frameStart;
            this._diag.frame = frameIndex;
            this._diag.lastRawDt = rawDt;
            this._diag.lastScaledDt = scaledDt;
            this._diag.lastSimulatedDt = simulatedDt;
            this._diag.lastSteps = stepCount;
            this._diag.lastCpuMs = frameCpuMs;
            this._diag.lastAccumulator = this.accumulator;
            this._diag.budgetHit = budgetHit;
            this._diag.droppedAccumulator = droppedAccumulator;
            if (budgetHit) this._diag.totalBudgetHits++;
            if (droppedAccumulator) this._diag.totalDroppedFrames++;

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

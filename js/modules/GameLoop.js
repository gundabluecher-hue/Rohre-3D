export class GameLoop {
    constructor(updateFn, renderFn) {
        this.updateFn = updateFn;
        this.renderFn = renderFn;
        this.isRunning = false;
        this.lastTime = 0;
        this.accumulatedTime = 0;
        this.step = 1 / 120; // Fixed timestep
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.lastTime = performance.now();
        this.frameId = requestAnimationFrame((t) => this.loop(t));
    }

    stop() {
        this.isRunning = false;
        cancelAnimationFrame(this.frameId);
    }

    loop(currentTime) {
        if (!this.isRunning) return;

        const dt = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;

        // Cap dt to avoid spirals of death (e.g. max 0.1s)
        let safeDt = Math.min(dt, 0.1);

        this.accumulatedTime += safeDt;

        while (this.accumulatedTime >= this.step) {
            this.updateFn(this.step);
            this.accumulatedTime -= this.step;
        }

        this.renderFn(); // Interpolation could be added here

        this.frameId = requestAnimationFrame((t) => this.loop(t));
    }
}

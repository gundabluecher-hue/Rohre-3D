// ============================================
// Audio.js - Synthesized Sound Effects (No assets needed)
// ============================================

export class AudioManager {
    constructor() {
        this.ctx = null;
        this.enabled = true;
        this.volume = 0.15;
        this.buffers = {};

        // Throttling Logic
        this.lastPlayTime = {}; // { 'EXPLOSION': 123456789 }
        this.cooldowns = {
            'SHOOT': 100,      // Max 10 shots per second
            'EXPLOSION': 200,  // Max 5 explosions per second
            'HIT': 100,
            'POWERUP': 500,
            'BOOST': 200
        };

        // Initialize on first user interaction (browser policy)
        const initAudio = () => this._init();
        window.addEventListener('keydown', initAudio, { once: true });
        window.addEventListener('mousedown', initAudio, { once: true });

        // Emergency Mute Toggle (M)
        window.addEventListener('keydown', (e) => {
            if (e.code === 'KeyM') {
                this.enabled = !this.enabled;
                console.log(`Audio ${this.enabled ? 'ENABLED' : 'DISABLED'}`);
                // Optional: Show toast via main.js (not accessible here directly, but console helps debugging)
            }
        });
    }

    _init() {
        if (this.ctx) return;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
            this.ctx = new AudioContext();
            this._generateBuffers();
        }
    }

    _generateBuffers() {
        // Explosion Buffer (Noise)
        const duration = 0.3;
        const bufferSize = this.ctx.sampleRate * duration;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        this.buffers.explosion = buffer;
    }

    play(type) {
        if (!this.enabled || !this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();

        // Check Cooldown
        const now = performance.now();
        const last = this.lastPlayTime[type] || 0;
        const cooldown = this.cooldowns[type] || 50;

        if (now - last < cooldown) return;
        this.lastPlayTime[type] = now;

        switch (type) {
            case 'SHOOT': this._playShoot(); break;
            case 'EXPLOSION': this._playExplosion(); break;
            case 'HIT': this._playHit(); break;
            case 'POWERUP': this._playPowerup(); break;
            case 'BOOST': this._playBoost(); break;
        }
    }

    _playShoot() {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.1);

        gain.gain.setValueAtTime(this.volume * 0.5, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.1);
    }

    _playExplosion() {
        if (!this.buffers.explosion) return;

        const noise = this.ctx.createBufferSource();
        noise.buffer = this.buffers.explosion;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1000, this.ctx.currentTime);
        filter.frequency.linearRampToValueAtTime(100, this.ctx.currentTime + 0.3);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        noise.start();
    }

    _playHit() {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, this.ctx.currentTime + 0.1);

        gain.gain.setValueAtTime(this.volume * 0.8, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.1);
    }

    _playPowerup() {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(1200, this.ctx.currentTime + 0.2);

        gain.gain.setValueAtTime(this.volume * 0.6, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.2);
    }

    _playBoost() {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(100, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(300, this.ctx.currentTime + 0.3);

        gain.gain.setValueAtTime(this.volume * 0.4, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.3);
    }
}

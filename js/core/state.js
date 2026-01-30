/**
 * STATE.JS - Globaler Spielzustand
 * Verwaltet den aktuellen Zustand des Spiels
 */

export class GameState {
    constructor() {
        // === Phase ===
        this.phase = 'idle'; // idle, running, paused, inspect, edit

        // === Zeit ===
        this.roundTime = 0;
        this.lastReal = 0;
        this.acc = 0;

        // === Spieler ===
        this.players = [];
        this.cameraMode = 'first'; // first, third

        // === Scores ===
        this.scores = {
            p1: 0,
            p2: 0,
        };

        // === Powers ===
        this.powerUps = [];
        this.nextPowerSpawnAt = Infinity;

        // === Projektile ===
        this.projectiles = [];

        // === Partikel ===
        this.particles = [];

        // === NPC ===
        this.npc = {
            active: false,
            mesh: null,
            pos: new THREE.Vector3(),
            vel: new THREE.Vector3(),
            time: 0,
        };

        // === Editor ===
        this.editor = {
            active: false,
            tool: 'tunnel', // tunnel, hard, foam, spawn, delete
            tempTunnelStart: null,
            tempMarker: null,
            spawnPos: new THREE.Vector3(-800, 522, 0),
        };

        // === Camera Shake ===
        this.shake = 0;

        // === UI ===
        this.uiVisible = true;
        this.crosshairVisible = true;
    }

    /**
     * Setze den Spielmodus
     */
    setPhase(phase) {
        this.phase = phase;
        this.dispatchEvent('phase-changed', { phase });
    }

    /**
     * Einfaches Event-System
     */
    listeners = new Map();

    addEventListener(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
    }

    dispatchEvent(event, data) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).forEach(cb => cb(data));
        }
    }

    /**
     * Reset für neue Runde
     */
    resetRound() {
        this.roundTime = 0;
        this.acc = 0;
        this.powerUps = [];
        this.projectiles = [];
        this.particles = [];
        this.shake = 0;
    }

    /**
     * Vollständiger Reset
     */
    reset() {
        this.phase = 'idle';
        this.resetRound();
        this.scores.p1 = 0;
        this.scores.p2 = 0;
        this.cameraMode = 'first';
        this.npc.active = false;
    }
}

// Singleton-Instanz
export const state = new GameState();

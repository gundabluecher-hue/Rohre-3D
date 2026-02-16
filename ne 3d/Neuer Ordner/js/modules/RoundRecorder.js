// ============================================
// RoundRecorder.js - Leichtgewichtiger Debug-Logger
// Zeichnet Events und Positionen der letzten Runde auf.
// Nutzt vorallokierte Arrays → null GC-Druck, null Performance-Kosten.
// ============================================

const MAX_EVENTS = 500;
const MAX_SNAPSHOTS = 600; // ~10 Sekunden bei 60 FPS

export class RoundRecorder {
    constructor() {
        // Event-Log (Ring Buffer)
        this.events = new Array(MAX_EVENTS);
        for (let i = 0; i < MAX_EVENTS; i++) {
            this.events[i] = { time: 0, type: '', player: -1, data: '' };
        }
        this.eventIndex = 0;
        this.eventCount = 0;

        // Position Snapshots (alle 10 Frames)
        this.snapshots = new Array(MAX_SNAPSHOTS);
        for (let i = 0; i < MAX_SNAPSHOTS; i++) {
            this.snapshots[i] = { time: 0, players: [] };
        }
        this.snapshotIndex = 0;
        this.snapshotCount = 0;
        this._frameCounter = 0;
        this._snapshotInterval = 10; // Alle 10 Frames (~6/s bei 60 FPS)

        this.roundStartTime = 0;
        this._enabled = true;
    }

    /** Runde starten – alten Buffer zurücksetzen */
    startRound() {
        this.eventIndex = 0;
        this.eventCount = 0;
        this.snapshotIndex = 0;
        this.snapshotCount = 0;
        this._frameCounter = 0;
        this.roundStartTime = performance.now();
    }

    /** Event aufzeichnen (z.B. BOUNCE, KILL, ROUND_END) */
    logEvent(type, playerIndex, data = '') {
        if (!this._enabled) return;
        const entry = this.events[this.eventIndex];
        entry.time = ((performance.now() - this.roundStartTime) / 1000).toFixed(2);
        entry.type = type;
        entry.player = playerIndex;
        entry.data = data;
        this.eventIndex = (this.eventIndex + 1) % MAX_EVENTS;
        if (this.eventCount < MAX_EVENTS) this.eventCount++;
    }

    /** Position-Snapshot aufzeichnen (nur alle N Frames aufrufen) */
    recordFrame(players) {
        if (!this._enabled) return;
        this._frameCounter++;
        if (this._frameCounter % this._snapshotInterval !== 0) return;

        const snap = this.snapshots[this.snapshotIndex];
        snap.time = ((performance.now() - this.roundStartTime) / 1000).toFixed(2);

        // Spieler-Daten in vorallokiertes Array schreiben
        while (snap.players.length < players.length) {
            snap.players.push({ idx: 0, alive: false, x: 0, y: 0, z: 0, bot: false });
        }
        for (let i = 0; i < players.length; i++) {
            const p = players[i];
            const s = snap.players[i];
            s.idx = p.index;
            s.alive = p.alive;
            s.x = +p.position.x.toFixed(1);
            s.y = +p.position.y.toFixed(1);
            s.z = +p.position.z.toFixed(1);
            s.bot = p.isBot;
        }

        this.snapshotIndex = (this.snapshotIndex + 1) % MAX_SNAPSHOTS;
        if (this.snapshotCount < MAX_SNAPSHOTS) this.snapshotCount++;
    }

    /** Dump der letzten Runde (in Console) */
    dump() {
        const eventList = [];
        const startIdx = this.eventCount >= MAX_EVENTS
            ? this.eventIndex
            : 0;
        for (let i = 0; i < this.eventCount; i++) {
            const idx = (startIdx + i) % MAX_EVENTS;
            const e = this.events[idx];
            eventList.push(`[${e.time}s] ${e.type} P${e.player} ${e.data}`);
        }

        console.group('%c🔍 RUNDEN-LOG', 'color: #0af; font-size: 14px; font-weight: bold;');
        console.log(`Dauer: ${((performance.now() - this.roundStartTime) / 1000).toFixed(1)}s`);
        console.log(`Events: ${this.eventCount}`);
        console.table(eventList.map(e => ({ log: e })));

        // Letzte 20 Snapshots
        const snapList = [];
        const snapStart = this.snapshotCount >= MAX_SNAPSHOTS
            ? this.snapshotIndex
            : 0;
        const showCount = Math.min(this.snapshotCount, 20);
        const offset = Math.max(0, this.snapshotCount - showCount);
        for (let i = 0; i < showCount; i++) {
            const idx = (snapStart + offset + i) % MAX_SNAPSHOTS;
            const s = this.snapshots[idx];
            const playerStr = s.players
                .filter(p => p.idx !== undefined)
                .map(p => `${p.bot ? 'Bot' : 'P'}${p.idx}:${p.alive ? '✓' : '✗'}(${p.x},${p.y},${p.z})`)
                .join(' | ');
            snapList.push({ time: s.time + 's', players: playerStr });
        }
        if (snapList.length > 0) {
            console.log('Letzte Positionen:');
            console.table(snapList);
        }
        console.groupEnd();

        return { events: eventList, snapshots: snapList };
    }
}

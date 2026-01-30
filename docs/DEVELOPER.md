# Mini Curve Fever 3D - Entwickler-Dokumentation

## Architektur-Übersicht

Das Projekt verwendet eine modulare Architektur mit ES6-Modulen und folgt teilweise dem ECS (Entity-Component-System) Pattern.

### Kern-Komponenten

```
┌─────────────────────────────────────────────────────┐
│                   index.html                        │
│  (Entry Point, UI, lädt alle Module)               │
└─────────────────────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
   ┌────────┐      ┌──────────┐    ┌──────────┐
   │  Core  │      │ Entities │    │ Systems  │
   └────────┘      └──────────┘    └──────────┘
        │                │                │
   config.js        player.js       input.js
   state.js         trail.js        audio.js
   utils.js         npc.js          powers.js
```

## Module im Detail

### Core-Module

#### `config.js`
Zentrale Konfigurationsdatei für alle Konstanten:
- Arena-Dimensionen
- Physik-Parameter (Geschwindigkeit, Yaw/Pitch/Roll-Rates)
- Gameplay-Settings (Boost, Gaps, Power-Ups)
- Rendering-Einstellungen

**Wichtige Konstanten:**
```javascript
CONFIG.FIXED_STEP = 1/120    // Fixed Update-Rate
CONFIG.ARENA_W = 2800        // Arena-Breite
CONFIG.BOOST_MULT = 1.85     // Boost-Multiplikator
```

#### `state.js`
Globaler Spielzustand als Singleton:
- Spielphase (idle, running, paused, inspect, edit)
- Spieler-Array
- Scores, Zeitverwaltung
- Event-System für State-Changes

**Event-System:**
```javascript
state.addEventListener('phase-changed', (data) => {
  console.log('Phase:', data.phase);
});
```

#### `utils.js`
Hilfsfunktionen für:
- Mathematik (`clamp`, `lerp`, `smooth01`)
- Zufallswerte (`rand`, `randInt`)
- Geometrie (`distToSegmentSq`)
- Zeit-Formatierung

---

### Entities

#### `player.js`
Player-Klasse mit vollständigem State:

**Properties:**
- `pos` - Position (THREE.Vector3)
- `q` - Rotation (THREE.Quaternion)
- `inventory` - Item-Array (max 5)
- `effects` - Aktive Power-Up-Effekte
- `mod` - Modifikatoren (speed, thickness)

**Methoden:**
- `getForwardVector()` - Forward-Vektor aus Quaternion
- `addToInventory(powerType)` - Item hinzufügen
- `applyEffect(powerType, duration)` - Effekt anwenden
- `reset(spawnPos)` - Reset für neue Runde

**Verwendung:**
```javascript
const player = new Player(1, 0x3b82f6);
player.reset(spawnPosition);
player.addToInventory(speedUpPowerType);
```

---

### Rendering

#### `renderer.js`
GameRenderer-Klasse für Three.js-Setup:
- Scene, Renderer, Kameras
- Lichter (Ambient, Directional, Point, Hemisphere)
- Split-Screen-Handling
- Resize-Logic

**Initialisierung:**
```javascript
const gameRenderer = new GameRenderer();
gameRenderer.init();
gameRenderer.render(players);
```

**Split-Screen:**
```javascript
// Automatisch bei players.length > 1
// Vertical Split mit Scissor-Test
```

#### `materials.js`
Material-Factory-Functions:
- `makeCheckerTexture()` - Procedural Checker-Pattern
- `makeTunnelWallMat()` - Tunnel-Wände
- `makeFloorMat()` - Boden
- `makeHardBlockMat()` - Harte Hindernisse

**Custom Texture:**
```javascript
const tex = makeCheckerTexture({
  cells: 10,
  c1: '#0a1636',
  c2: '#183b7a',
  accent: '#f59e0b',
  accentAlpha: 0.12
});
```

---

### Systems

#### `touch-controls.js`
Touch-Steuerung für Mobile:
- Virtual Joystick (links unten)
- Touch-Buttons (rechts für Boost, Items, etc.)
- Custom Events (`virtualbuttondown`, `virtualbuttonup`)

**Aktivierung:**
```javascript
const touchControls = new TouchControls();
touchControls.init();
touchControls.show(); // Im Running-State

const input = touchControls.getInput();
// { yaw: -1 bis 1, pitch: -1 bis 1 }
```

---

## Datenfluss

### Fixed-Step Game-Loop

```
requestAnimationFrame()
  │
  ├─ Berechne Delta-Time
  │
  ├─ Akkumulator += Delta
  │
  └─ Während (Akkumulator >= FIXED_STEP):
       │
       ├─ roundTime += FIXED_STEP
       │
       ├─ step(FIXED_STEP)
       │    ├─ updateTurnTargets(player)
       │    ├─ updateGapState(player)
       │    ├─ updatePhysics(player, dt)
       │    ├─ checkCollisions(player)
       │    └─ updateTrail(player)
       │
       ├─ Akkumulator -= FIXED_STEP
       │
       └─ Break bei Phase-Wechsel
```

### Kollisionssystem

```
Player Position
  │
  ├─ handleBounds() → Arena-Grenzen / Portale
  ├─ checkTunnelCollision() → Tunnel-Wände
  ├─ checkObstacleCollision() → Blöcke (hard/foam)
  └─ selfCollidesAt() → Trail-Kollision
       │
       └─ Bei Kollision:
            ├─ Schild? → Schild entfernen
            └─ Sonst → player.alive = false
```

---

## Eigene Maps erstellen

### Map-Datenstruktur (JSON)

```json
{
  "arenaSize": {
    "width": 2800,
    "height": 950,
    "depth": 2400
  },
  "tunnels": [
    {
      "ax": -980, "ay": 522.5, "az": 0,
      "bx": 980,  "by": 522.5, "bz": 0,
      "radius": 160
    }
  ],
  "hardBlocks": [
    {
      "x": 200, "y": 400, "z": -300,
      "size": 70
    }
  ],
  "foamBlocks": [],
  "playerSpawn": {
    "x": -800, "y": 522, "z": 0
  }
}
```

### Map laden

1. JSON in `assets/maps/meine-map.json` speichern
2. Map-Loader-Funktion aufrufen:
```javascript
async function loadCustomMap(filename) {
  const response = await fetch(`assets/maps/${filename}`);
  const data = await response.json();
  
  updateArenaDimensions(data.arenaSize.width, data.arenaSize.height, data.arenaSize.depth);
  
  data.tunnels.forEach(t => {
    addTunnel(
      new THREE.Vector3(t.ax, t.ay, t.az),
      new THREE.Vector3(t.bx, t.by, t.bz)
    );
  });
  
  // ... Obstacles spawnen
}
```

---

## Performance-Optimierung

### Trail-Rendering mit Instancing (geplant)

**Problem:** Jedes Trail-Segment = eigener Mesh → viele Draw-Calls

**Lösung:** InstancedMesh
```javascript
const maxSegments = 10000;
const instancedMesh = new THREE.InstancedMesh(
  tubeGeometry,
  material,
  maxSegments
);

// Pro Segment:
const matrix = new THREE.Matrix4();
matrix.setPosition(position);
instancedMesh.setMatrixAt(index, matrix);
instancedMesh.instanceMatrix.needsUpdate = true;
```

### Object-Pooling (geplant)

Partikel-Pool:
```javascript
class ParticlePool {
  constructor(size) {
    this.pool = Array(size).fill(null).map(() => new Particle());
    this.activeIndex = 0;
  }
  
  spawn(pos, vel) {
    const p = this.pool[this.activeIndex % this.pool.length];
    p.reset(pos, vel);
    this.activeIndex++;
    return p;
  }
}
```

---

## Testing

### Manuelle Tests

1. **Alle Maps durchspielen**
   - Standard, Klein, Labyrinth, Komplex, Pyramide
   - 1-Spieler und 2-Spieler-Modus

2. **Alle Power-Ups testen**
   - Jedes Item aufsammeln und nutzen
   - Schild gegen Kollisionen testen
   - Geist-Modus durch Wände

3. **Performance messen**
   - Chrome DevTools Performance-Tab
   - 60 FPS @ 1080p als Ziel
   - Split-Screen sollte stabil laufen

### Debugging

**Console-Logs aktivieren:**
```javascript
CONFIG.DEBUG = true;
CONFIG.DEBUG_COLLISIONS = true;
CONFIG.DEBUG_TRAIL = true;
```

**FPS-Counter:**
```javascript
stats = new Stats();
document.body.appendChild(stats.dom);
// In Render-Loop: stats.update();
```

---

## Erweiterungen

### Neues Power-Up hinzufügen

1. In `powers.js` POWER_TYPES erweitern:
```javascript
{
  id: 'invincible',
  name: 'Unbesiegbar',
  icon: '⭐',
  color: '#fbbf24',
  apply: (p) => {
    p.invincible = true;
    p.shieldMesh.visible = true;
  },
  revert: (p) => {
    p.invincible = false;
    p.shieldMesh.visible = false;
  }
}
```

2. In Player-Klasse Flag hinzufügen:
```javascript
this.invincible = false;
```

3. In Kollisionssystem prüfen:
```javascript
if (p.invincible || p.ghostMode) {
  // Ignoriere Kollision
  return;
}
```

---

## Deployment

### Lokaler HTTP-Server (benötigt für ES6 Modules)

**Python:**
```bash
python -m http.server 8000
```

**Node.js:**
```bash
npx http-server -p 8000
```

**Öffnen:**
```
http://localhost:8000/index.html
```

### Build (optional)

Für Production-Build könnten Module mit Rollup/Webpack gebundelt werden:
```bash
npm install --save-dev rollup
rollup js/main.js --file dist/bundle.js --format iife
```

---

## Lizenz

Persönliches Projekt - Frei verwendbar für eigene Zwecke.

---

**Stand:** Januar 2026  
**Version:** 2.0 (Modular)

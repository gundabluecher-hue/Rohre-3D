# Mini Curve Fever 3D 🎮

Ein 3D-Flugspiel im Stil von "Curve Fever" mit modernster Web-Technologie.

## Features ✨

- 🎯 **2-Spieler Split-Screen** - Lokaler Multiplayer
- ✈️ **Flugzeug-Steuerung** - Yaw, Pitch, Roll + Auto-Roll
- 🚀 **Boost-System** - Ladeanzeige und Speed-Burst
- 🎨 **5 Maps** - Von Standard-Arena bis komplexes Labyrinth
- 🎁 **Power-Ups** - 8 verschiedene Items mit Inventar-System
- 🌀 **Portale** - Teleportation durch Wände
- 🎥 **Dynamische Kamera** - 1st/3rd-Person umschaltbar
- 🎨 **Modernes Design** - Glassmorphism & Dark-Mode
- 📝 **Map-Editor** - Eigene Maps erstellen

## Schnellstart 🚀

1. Öffne `index.html` (Shortcut auf `3dv17.html`) ODER direkt `3dv17.html` (aktuelle Spiel-Version)
2. Alternativ: `archive/v11-v16/3dv16_full.html` (vollständige Original-Version)
3. Drücke **Start** oder **Enter**
4. Fliege mit **W/A/S/D**, rolle mit **Q/E**, booste mit **Shift**

## Steuerung ⌨️

### Spieler 1
- **Yaw (Links/Rechts):** A / D
- **Pitch (Hoch/Runter):** W / S
- **Roll:** Q / E
- **Boost:** Shift
- **Kamera:** C
- **Item nutzen:** 1-5
- **Item droppen:** G

### Spieler 2 (Split-Screen)
- **Yaw:** ← / →
- **Pitch:** ↑ / ↓
- **Roll:** N / M
- **Boost:** Rechtes Shift
- **Item nutzen:** 0
- **Item droppen:** H

## Projekt-Struktur 📁

```
3d/
├── 3dv17.html              # Aktuelle Entwicklungsversion (Single Source)
├── index.html              # Shortcut/Startseite
├── README.md
├── aktuell/                # Kopie der aktuellen Version
│   └── 3dv17.html
├── archive/                # Alle alten Versionen
│   ├── v01-v10/            # Frühe Versionen
│   └── v11-v16/            # Neuere Versionen
├── backup/                 # Automatische Backups
├── docs/                   # Dokumentation
│   ├── CHANGELOG.md
│   ├── DEVELOPER.md
│   └── ...
├── tools/                  # Zusatz-Tools
│   ├── map editor.html
│   └── mapload.html
├── scripts/                # Versionierungs-Skripte
├── css/                    # Stylesheets (aktuell: style.css)
└── js/                     # JavaScript-Module
```

## Entwicklung 🛠️

### Aktueller Stand

- ✅ **Phase 1:** Code-Modularisierung begonnen
  - Ordnerstruktur erstellt
  - Kern-Module (config, state, utils)
  - Player-Klasse
  - Rendering-System
  - CSS-Dateien

- 🚧 **In Arbeit:**
  - Weitere JavaScript-Module
  - Vollständige Integration
  - Performance-Optimierungen

- 📋 **Geplant:**
  - Mobile-Support (Touch-Steuerung)
  - Erweiterte Dokumentation
  - Tutorial-Modus

### Technologie-Stack

- **3D-Engine:** [Three.js](https://threejs.org/) v0.160.0
- **Sprache:** JavaScript (ES6 Modules)
- **Styling:** Vanilla CSS mit Custom Properties
- **Architektur:** Modularer Aufbau, ECS-Pattern

**Hinweis:** Die aktuelle Legacy-UI nutzt `css/style.css`. Die Dateien `css/main.css` und `css/ui.css` sind für die modulare Migration vorgesehen.

### Lokaler Server (optional)
Für ES-Module oder sauberes Laden über HTTP:
```powershell
.\scripts\serve.ps1 -Open
```

## Maps 🗺️

### Standard-Maps

1. **Standard Arena** - Klassisches 3-Tunnel-Layout
2. **Leer (Klein)** - Halbe Arena-Größe, keine Hindernisse
3. **Labyrinth** - Komplexes Wand-Labyrinth
4. **Komplex** - Viele Tunnel + Ring-Formation
5. **Pyramide** - Große zentrale Pyramide

### Eigene Maps erstellen

Nutze den **Map-Editor** (`map editor.html`):
1. Objekte platzieren (Tunnel, Blöcke, Spawn)
2. Als JSON exportieren
3. In `assets/maps/` speichern
4. Im Spiel auswählbar

## Power-Ups 🎁

| Icon | Name | Effekt |
|------|------|--------|
| ⚡ | Schneller | +50% Geschwindigkeit |
| 🐢 | Langsamer | -40% Geschwindigkeit |
| 🧱 | Dick | +120% Spur-Dicke |
| ✂ | Dünn | -55% Spur-Dicke |
| 🛡 | Schild | Einmal-Schutz vor Kollision |
| 🕙 | Zeitlupe | Halbe Spielgeschwindigkeit |
| 👻 | Geist | Durch Objekte fliegen |
| 🔀 | Invertieren | Umgekehrte Steuerung |

## Performance 📊

- **Target:** 60 FPS @ 1080p
- **Fixed-Step Physik:** 120 Hz
- **Split-Screen:** Vertical Split mit separaten Kameras
- **Optimierungen:** Frustum-Culling, LOD (geplant)

## Browser-Kompatibilität 🌐

- ✅ Chrome/Edge (aktuell)
- ✅ Firefox (aktuell)
- ⚠️ Safari (WebGL erforderlich)
- ❌ IE (nicht unterstützt)

## Lizenz & Credits 📜

Entwickelt als persönliches Projekt.

**Inspiration:** Curve Fever, Achtung die Kurve!

## Support & Bugs 🐛

Bei Problemen oder Fragen:
- Prüfe die Browser-Konsole (F12)
- Stelle sicher, dass WebGL aktiviert ist
- Teste die Original-Version (`archive/v11-v16/3dv16_full.html`)

---

**Version:** 2.0 (Modular)  
**Letztes Update:** Januar 2026  
**Status:** 🚧 In Entwicklung

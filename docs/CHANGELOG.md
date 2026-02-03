# Changelog - Mini Curve Fever 3D

Alle wichtigen Änderungen am Projekt werden hier dokumentiert.

## [2.2.0] - 2026-01-30
### Hinzugefügt
- **CPU Bot**: Spieler 2 kann jetzt von der KI gesteuert werden (Checkbox im Menü).
  - **Verhalten**: Wechselt zwischen Verfolgen (Chase P1) und freiem Herumfliegen (Wander).
  - **Boost**: Nutzt zufällig Boost, um aufzuschließen.
  - **Godmode**: Bot prallt von Wänden, Tunneln und Hindernissen ab, statt zu sterben.

## [2.1.8] - 2026-01-30
### Hinzugefügt
- **Steuerung**: Button "Tausch P1/P2" unter Keybindings hinzugefügt (Tauscht Steuerungs-Schemata)
- **Standard-Map**: "Map 5 - Pyramide" ist jetzt die Standard-Auswahl beim Start

## [2.1.7] - 2026-01-30
### Geändert
- **Hitbox**: Um 5% verkleinert (Faktor 0.95), um Clipping bei nahen Vorbeiflügen zu verhindern.

## [2.1.6] - 2026-01-30
### Behoben
- **Kritischer Bug**: Flügel kollidierten nicht mit Wänden, Tunneln oder Spuren
- **Kollisions-System**: Umgestellt auf 4-Punkt-Präzisions-Check (Rumpf, Flügel L/R, Zentrum)
- **Konsistenz**: Kollisionsverhalten jetzt identisch für ALLE Objekte (inkl. Pyramide)

## [2.1.5] - 2026-01-30
### Geändert
- **Ordnerstruktur bereinigt**: `backup/` und `archive/` zusammengelegt
- **Dateinamen korrigiert**: `map editor.html` → `map-editor.html`
- **Skripte aktualisiert**: Alle Skripte nutzen jetzt `archive/`
- **Agenten-Regeln**: `.agent/rules/project-rules.md` erstellt
- **Workflow verbessert**: `/versioning` mit korrekten Pfaden

## [2.1.3] - 2026-01-30
### Behoben
- **Flügel-Hitbox**: Korrigierte Kollisionserkennung für Flügel (X-Offset berücksichtigt)
- **Hitbox-Präzision**: Y-Dimension von ±1.0 auf ±0.25 reduziert (exakte Mesh-Höhe)

### Geändert
- **Projektstruktur reorganisiert**:
  - Alte Versionen (v1-16) → `archive/`
  - Dokumentation → `docs/`
  - Map Editor → `tools/`
  - Automatische Backups → `archive/`
- **Versionierung**: Nur noch `3dv17.html` wird gesichert, alte Versionen werden gelöscht

## [2.1.0] - 2026-01-29
### Hinzugefügt
- **3dv17.html**: Neue Hauptversion mit integrierten Flugzeug-Features.
- **Flugzeug-Modelle**: Steuerbare 3D-Flugzeuge für alle Spieler (Rumpf, Flügel, Cockpit).
- **Kanonen-System**: Sichtbare Kanone am Bug mit korrekt positionierter Mündung.
- **Verbesserte Projektile**: Item-Projektile mit leuchtendem Glow und passenden Icons (🐢, ⚡, etc.).
- **Visuelle Effekte**: Mündungsfeuer beim Schuss und Rauchschweife hinter Projektilen.
- **Treffer-Feedback**: Partikel-Explosionen bei Treffern auf Gegnern oder Spuren.

## v2.0.0 - 2026-01-29 20:08:00
- 🎉 Initiale modulare Version
- ✅ Code-Organisation: Module in js/core, js/entities, js/rendering, js/systems
- ✅ CSS extrahiert: main.css, ui.css
- ✅ Player-Klasse erstellt mit vollständigem State-Management
- ✅ Rendering-System mit Three.js (Scene, Renderer, Lichter)
- ✅ Material-Factory mit proceduralen Texturen
- ✅ Touch-Steuerung für Mobile (Virtual Joystick + Buttons)
- ✅ README.md und DEVELOPER.md Dokumentation
- 📦 Backup der Original-Version in backup/

## v1.16 (Original) - 2026-01-29
- Vollständige Version in archive/v11-v16/3dv16_full.html
- Alle Features funktionsfähig
- 2-Spieler Split-Screen
- 5 Maps, Power-Ups, Portale
- Map-Editor

# HTML -> Godot Porting Checklist

Stand: 2026-02-17

Ziel: funktionale ParitÃ¤t der Godot-Version mit der HTML/Three.js-Version.

## High Priority

1. [x] Ingame-MenÃ¼ + Runtime-Settings
- Scope: Spielmodus, Map, Bots, Bot-Difficulty, Siege, Speed, Turn, Trail, Gap, Items, Fire-Rate, Lock-On, Portale, Planar Mode, Portal-Beams.
- Godot-Targets: `godot_source/Main.gd`, `godot_source/GameManager.gd`, `godot_source/HUD.gd`, neue MenÃ¼-Scene/Script.
- HTML-Referenz: `Neuer Ordner/js/main.js:343`, `Neuer Ordner/index.html:144`.
- Akzeptanz: Werte sind im MenÃ¼ Ã¤nderbar und wirken ohne Neustart.

2. [x] Settings-Persistenz
- Scope: Laden/Speichern aller Gameplay- und Control-Settings.
- Godot-Targets: `godot_source/Main.gd`, neues Save/Load-Modul.
- HTML-Referenz: `Neuer Ordner/js/main.js:239`, `Neuer Ordner/js/main.js:292`.
- Akzeptanz: Neustart lÃ¤dt letzte Einstellungen automatisch.

3. [x] Planar Mode + dynamische Portale + Beam-Visuals
- Scope: Ebenen-Modus (Pitch-Lock), konfigurierbare Portal-Anzahl, optionale Verbindungsstrahlen.
- Godot-Targets: `godot_source/Player.gd`, `godot_source/Arena.gd`, `godot_source/Portal.gd`, `godot_source/Config.gd`.
- HTML-Referenz: `Neuer Ordner/js/modules/Arena.js:166`, `Neuer Ordner/js/main.js:399`.
- Akzeptanz: Portalanzahl/Toggles wirken direkt, Planar-Verhalten entspricht HTML.

4. [x] Bot-Difficulty-Profile (EASY/NORMAL/HARD)
- Scope: Reaktionszeit, LookAhead, Aggression, Fehlerquote, Item-Verhalten je Profil.
- Godot-Targets: `godot_source/BotController.gd`, `godot_source/Config.gd`, `godot_source/GameManager.gd`.
- HTML-Referenz: `Neuer Ordner/js/modules/Config.js:94`, `Neuer Ordner/js/modules/Bot.js:146`.
- Akzeptanz: Profilwechsel Ã¤ndert Bot-Verhalten sichtbar und reproduzierbar.

5. [x] 2P-Split-Screen
- Scope: Zwei aktive Kameras + separater HUD-Layer pro Spieler.
- Godot-Targets: `godot_source/Main.tscn`, `godot_source/CameraRef.gd`, `godot_source/HUD.gd`, `godot_source/Main.gd`.
- HTML-Referenz: `Neuer Ordner/js/modules/Renderer.js:93`, `Neuer Ordner/js/modules/Renderer.js:177`.
- Akzeptanz: 2 Spieler gleichzeitig mit geteiltem Viewport spielbar.

## Medium Priority

1. [x] Fighter-HUD-ParitÃ¤t
- Scope: kÃ¼nstlicher Horizont, Pitch-Ladder, Tape-Scales, Lock-Reticle mit Distanz.
- Godot-Targets: `godot_source/HUD.gd`.
- HTML-Referenz: `Neuer Ordner/js/modules/HUD.js:113`, `Neuer Ordner/index.html:315`.

2. [x] Key-Rebinding-UI + Konflikterkennung
- Scope: Ingame Keybind-Editor mit Warnung bei Doppelbelegung.
- Godot-Targets: `godot_source/Main.gd`, neue UI/Settings-Scripts.
- HTML-Referenz: `Neuer Ordner/js/main.js:582`, `Neuer Ordner/js/main.js:656`.

3. [x] Recorder/KPI-System
- Scope: Round-Metriken, Baseline, Vergleichsreport.
- Godot-Targets: neues `RoundRecorder.gd`, Integration in `godot_source/GameManager.gd`.
- HTML-Referenz: `Neuer Ordner/js/modules/RoundRecorder.js:43`.

4. [x] Performance/Quality-Toggles
- Scope: FPS-Overlay, Quality-Mode, optional adaptive QualitÃ¤tsreduktion.
- Godot-Targets: `godot_source/Main.gd`, `godot_source/HUD.gd`, Render-Settings.
- HTML-Referenz: `Neuer Ordner/js/main.js:153`, `Neuer Ordner/js/main.js:989`.

## Low Priority

1. UX-Polish
- Scope: Toasts, Statusmeldungen, konsistente UI-Texte, visuelle Feinschliffe.
- Godot-Targets: `godot_source/HUD.gd`, neue UI-Komponenten.

2. QA-Automation-Ausbau
- Scope: bestehende QA-Flags/Flows in `Main.gd`/`GameManager.gd` um Szenario-Matrix ergÃ¤nzen.
- Godot-Targets: `godot_source/Main.gd`, `godot_source/GameManager.gd`, `godot_source/tools/run_qa.ps1`.

## Empfohlene Umsetzungsreihenfolge

1. High: 1 -> 2 -> 3
2. High: 4 -> 5
3. Medium komplett
4. Low komplett


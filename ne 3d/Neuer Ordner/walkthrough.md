# Walkthrough - Kernfixes Milestone C

Stand: 2026-02-18
Projekt: `Neuer Ordner` (Mini Curve Fever 3D)
Phase: AP-05 + AP-07 + AP-06

## AP-05 Mehrprofil als Standard

### Ziel
Mehrprofil-Flow robust und alltagstauglich machen (Create/Save/Load/Delete mit klarer Validierung und Feedback).

### Umgesetzt
1. Profilvalidierung in `js/main.js` erweitert:
   - Leere Namen werden blockiert.
   - Duplikate werden case-insensitive erkannt (`Name existiert bereits`), statt still zu ueberschreiben.
2. Profilsuche vereinheitlicht:
   - Neue Helper fuer normalisierte Profil-Namen (`_getProfileNameKey`, `_findProfileIndexByName`, `_findProfileByName`).
   - Alte Storage-Eintraege mit doppelten Namen (nur case-Variante) werden beim Laden dedupliziert.
3. Profilaktionen UX-seitig verbessert:
   - Enter im Profilnamenfeld speichert direkt.
   - Load/Delete werden deaktiviert, wenn kein Profil ausgewaehlt ist.
   - Save-Button passt seinen Text an den Kontext an (neu/aktualisieren/duplikat).
4. Toaster-Feedback verbessert:
   - `success` / `error` / `info` Typen in `main.js`.
   - Typ-spezifische Styles in `style.css`.
   - Klare Meldungen fuer Erfolgs- und Fehlerfaelle.
5. Lade-Flow verbessert:
   - Nach Profil-Load wird der Dirty-State zurueckgesetzt (`_markSettingsDirty(false)`), damit der User nicht faelschlich "unsaved" sieht.

## AP-07 First-Person Boost-Kamera

### Ziel
Im First-Person-Modus soll die Kamera bei Boost weich zur Nase wandern und nicht durch Geometrie clippen.

### Umgesetzt
1. Neue Kamera-Parameter in `js/modules/Config.js`:
   - `FIRST_PERSON_BOOST_OFFSET`
   - `FIRST_PERSON_BOOST_BLEND_SPEED`
   - `COLLISION_RADIUS`
   - `COLLISION_BACKOFF`
   - `COLLISION_STEPS`
2. Renderer-Logik in `js/modules/Renderer.js` erweitert:
   - Pro Kamera ein Boost-Blend-State (`cameraBoostBlend`).
   - Smooth Lerp zwischen Normal-First-Person-Offset und Boost-Nasen-Offset.
   - Kollisionsauflosung `_resolveCameraCollision(...)` gegen `arena.checkCollision(...)` per binarer Suche entlang des Kamera-Segments.
3. Entity-Integration in `js/modules/EntityManager.js`:
   - `updateCamera(...)` bekommt jetzt `player.isBoosting` und `arena` mitgegeben.

## AP-06 QA / Abschluss

### Technischer Smoke-Test
1. `npm run build` ausgefuehrt.
2. Ergebnis: erfolgreich, keine Build-Fehler.
3. Hinweis: bestehende Chunk-Size-Warnung von Vite bleibt bestehen (kein neuer Regression-Hinweis aus diesen Aenderungen).

### Gedanklicher Integrations-Smoketest
1. Menue + Untermenues:
   - Profilmenue-Flow bleibt in bestehende Struktur integriert.
2. Profile:
   - Create/Save/Load/Delete sind konsistent verknuepft.
   - Fehlerfaelle (leer/duplikat/nicht gefunden) liefern sofortiges Feedback.
3. Portale:
   - Keine Aenderung an Portal-Logik, nur Kamera-Update bekommt Arena fuer Collision-Checks.
4. Spielstart + Kamera:
   - Kameraupdates laufen weiterhin ueber den zentralen `EntityManager.updateCameras()` Pfad.
   - Boost wirkt jetzt direkt auf FP-Offset und Clipping-Schutz.

## Geaenderte Dateien
1. `js/main.js`
2. `style.css`
3. `js/modules/Config.js`
4. `js/modules/Renderer.js`
5. `js/modules/EntityManager.js`
6. `walkthrough.md`

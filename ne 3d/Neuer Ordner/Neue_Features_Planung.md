# Erweiterte Feature Planung: Web Worker, Spatial Audio & Cinematic Camera

Stand: 2026-02-19
Status: Nur Planung, keine Umsetzung in diesem Dokument.
Priorisierung: Nach Milestone A bis C der Kernfixes (`Kernfixes_UX_Portal_Profil_Plan.md`).

## 1. Feature 1: Web Worker für Bot-Training (Performance) 🚀

### Ziel

Die Auslagerung der Bot-Updates und des Machine-Learnings (`Bot.js`, `BotLearning.js`, `RoundRecorder.js`) in einen dedizierten Web Worker Thread. Dadurch blockiert die KI-Berechnung nicht mehr den Haupt-Renderer (Three.js), wodurch extrem hochskaliertes Hintergrund-Training (z.B. > 100x Geschwindigkeit) bei stabilen FPS im Vordergrund möglich wird.

### Implementierungs-Schritte

1. **Worker-Schnittstelle definieren:**
   - Erstellen einer neuen Datei `js/workers/aiWorker.js` als Einstiegspunkt für den Web Worker.
   - Definieren klarer Message-Protokolle (`postMessage`, `onmessage`) zwischen `main.js`/`GameLoop.js` und dem Worker:
     - `INIT`: Übertragen der aktuellen Game-Config und Map-Daten (Hindernisse, Portale).
     - `TICK`: Übertragen der aktuellen Spieler- und Projektil-Positionen in einem kompakten Format (TypedArrays/SharedArrayBuffer für Zero-Copy-Transfer, falls der Browser es unterstützt, ansonsten strukturierte JSON-Daten).
     - `ACTION_RESPONSE`: Rückgabe der berechneten Lenk-Befehle und Item-Aktionen der Bots an den Main-Thread.
     - `TRAINING_SYNC`: Übertragen von gespeicherten Lerndaten vom und zum Main-Thread für das UI-Dashboard.
2. **Abhängigkeiten auflösen:**
   - Die KI-Logik darf keine DOM- oder Three.js-Referenzen (z.B. direkte `Vector3` von Three.js in einer Form, die Context braucht) enthalten. Wahrscheinlich müssen reine Mathematik-Klassen (z.B. eine eigene oder von Three.js importierbare Math-Lib, die im Worker läuft) für die Vektorberechnung in der KI genutzt werden.
3. **Synchronisation mit dem GameLoop:**
   - Anpassung der `GameLoop.js`: Anstatt `bot.update(dt)` synchron aufzurufen, fragt der Main-Thread die letzte dem Worker bekannte Aktion ab. Der Worker berechnet asynchron die nächste Aktion.
4. **Validierung:** Messung von `frame_ms_p95` bei 100-fachem Trainingstempo vor und nach dem Umbau (Integration mit dem bestehenden Perf-Plan).

---

## 2. Feature 3: Spatial Audio (Räumliches 3D-Audio) 🎧

### Ziel

Verwendung der Three.js Audio-Engine (`THREE.AudioListener` und `THREE.PositionalAudio`), um Geräusche (Motoren, Schüsse, Explosionen) räumlich im 3D-Raum zu verorten. Das erhöht stark die Immersion, besonders im First-Person-Modus.

### Implementierungs-Schritte

1. **AudioListener Setup:**
   - In `Renderer.js` einen `THREE.AudioListener` erstellen und an die aktive Kamera anheften (bei Splitscreen: an jede Kamera einen eigenen Listener oder einen globalen Master-Listener am Durchschnittspunkt).
2. **Audio.js Refactoring:**
   - Umbau der `Audio.js` Klasse. Statt lokaler HTML5-Audio-Elemente (die rein stereo/global abspielen), werden Three.js `AudioLoader` und `PositionalAudio` Nodes erzeugt.
   - Für jede Entität (Spieler/Bot): Ein `PositionalAudio` Objekt für das Triebwerksgeräusch erstellen und an das jeweilige 3D-Mesh im `Renderer.js` anhängen.
3. **Sound-Events anpassen:**
   - `EntityManager.js` muss bei Events (z.B. `spawnExplosion`, `fireProjectile`) die 3D-Koordinaten an das Audio-System übermitteln.
   - PositionalAudio für Schüsse und Explosionen an den jeweiligen Koordinaten instanziieren, abspielen und nach dem Ende aufräumen.
4. **Feinabstimmung:**
   - Einstellen der `refDistance` und Rolloff-Faktoren, damit Explosionen am anderen Ende der Map leiser sind als direkte Treffer neben dem Spieler.

---

## 3. Feature 4: Cinematic Camera & Hit-Stop 🎬

### Ziel

Dramatische Inszenierung von Spiel-Enden oder Kills durch kurzes Einfrieren des Spiels (Hit-Stop) gefolgt von einer dynamischen Bullet-Time/Zeitlupen-Kamerafahrt.

### Implementierungs-Schritte

1. **Hit-Stop Trigger:**
   - In `GameLoop.js` oder `Arena.js` beim Eintreten eines Kills (Kollision Spieler vs. Trail/Wand) einen `hitStopRemaining` Timer setzen (z.B. 0.15 Sekunden).
   - Solange `hitStopRemaining > 0`, wird das Update der Positionen ausgesetzt. Partikel und Rendering laufen weiter, um den "Einfrier"-Effekt zu betonen.
2. **Bullet-Time / Zeitlupe:**
   - Implementierung eines globalen `timeScale` Faktors in der `GameLoop.js` für das visuelle Gameplay (nicht zu verwechseln mit dem Training-Time-Scale).
   - Nach dem kurzen Hit-Stop wird die `timeScale` für 2-3 Sekunden stark gesenkt (z.B. auf 0.2x).
3. **Cinematic Camera Setup (`Renderer.js`):**
   - Wenn ein Kill-/Win-Event getriggert wird, löst sich die Kamera temporär von ihrer normalen Bindung (Top-Down oder First-Person).
   - Es wird eine Spline-Kurve (BezierCurve3) um den Ort der Explosion berechnet.
   - Die Kamera fährt während der Bullet-Time butterweich diese Kurve ab (Umkreisen der Explosion).
4. **Schmuck-Effekte (Chromatic Aberration & Screen Shake):**
   - Hinzufügen eines leichten Kamera-Shake-Effekts auf den Moment des Impacts.
   - (Optional, falls Shader-Pässe aktiviert werden) Chromatic Aberration Post-Processing für mehr Wucht.
5. **Rückkehr ins Gameplay:**
   - Nach Ablauf der Cinematic-Phase wird die normale Runden-Ende-Logik (Score-Display, Neustart-Timer) aufgerufen und die Kamera kehrt weich zu ihrer Ausgangsposition zurück.

---

## 4. Feature 5: Auswahl fuer 10 verschiedene Portale

### Ziel

Im Menue soll eine klare Auswahl fuer 10 Portaltypen verfuegbar sein. Der gewaehlte Typ beeinflusst
Portal-Verhalten, Optik und Teleport-Regeln, ohne bestehende Maps/Savegames zu brechen.

### Scope (MVP)

1. Ein neuer Selector im Submenu `Portale / Map` fuer `Portaltyp`.
2. 10 feste, benannte Portaltypen.
3. Persistenz in den Einstellungen (localStorage + Profile).
4. Runtime-Uebergabe an `Arena` und saubere Fallbacks auf `STANDARD`.
5. Bot-/Gameplay-Kompatibilitaet bleibt erhalten.

### Vorgeschlagene 10 Portaltypen

1. `STANDARD`: bidirektional, heutiges Verhalten.
2. `ONE_WAY`: nur Richtung A->B, Rueckweg gesperrt.
3. `RANDOM_EXIT`: Eintritt waehlt zufaellig ein anderes Portal derselben Gruppe.
4. `MOMENTUM_KEEP`: Geschwindigkeit/Richtung bleibt maximal erhalten.
5. `BOOST_EXIT`: kurzer Speed-Boost nach Teleport.
6. `SLOW_EXIT`: kurzer Slow-Effekt nach Teleport.
7. `COOLDOWN_LONG`: laengerer individuellen Cooldown pro Entitaet.
8. `SAFE_EXIT`: kurze Unverwundbarkeit nach Austritt.
9. `PLANAR_SHIFT`: erzwingt Ebenenwechsel im Planar-Mode.
10. `UNSTABLE`: periodisch aktiv/inaktiv (Timing-Fenster).

### Architektur-Plan

1. **Config erweitern (`js/modules/Config.js`):**
   - `CONFIG.PORTAL.TYPES` als Registry (Key, Label, Farben, Parameter).
   - `CONFIG.GAMEPLAY.PORTAL_TYPE = 'STANDARD'` als Default.
2. **Settings-Model (`js/main.js`):**
   - Neues Feld `settings.gameplay.portalType`.
   - In `_createDefaultSettings`, `_sanitizeSettings`, `_applySettingsToRuntime` verdrahten.
3. **UI (`index.html`, `js/main.js`):**
   - Neues `<select id="portal-type-select">` mit 10 Optionen.
   - Listener + Sync in `_setupMenuListeners` und `_syncMenuControls`.
4. **Arena-Datenmodell (`js/modules/Arena.js`):**
   - `portal.type` in `_addPortalInstance(...)` speichern.
   - `checkPortal(...)` je Typ Routing + Effekt-Meta zurueckgeben.
5. **Effekte anwenden (`js/modules/EntityManager.js`, ggf. `Player.js`):**
   - Rueckgabe aus `checkPortal`: `{ target, portal, effect }`.
   - Effekte zentral anwenden (Boost/Slow/SafeExit/PlanarShift).
6. **Bots absichern (`js/modules/Bot.js`):**
   - Keine Logikbrueche bei ONE_WAY/RANDOM_EXIT/UNSTABLE.
   - Portal-Intent soll inaktiv geschaltete Portale ignorieren.

### Datenvertrag (vorgeschlagen)

`Arena.checkPortal(...)` gibt zurueck:

```js
{
  target: Vector3,
  portal: PortalRef,
  effect: {
    type: 'BOOST_EXIT' | 'SLOW_EXIT' | 'SAFE_EXIT' | 'NONE',
    duration?: number,
    value?: number
  }
}
```

### UI/UX-Regeln

1. Default ist `STANDARD`.
2. Tooltip/Untertitel erklaert den gewaehlten Typ in 1 Satz.
3. Bei inkompatiblen Kombinationen (z. B. `PLANAR_SHIFT` ohne Planar-Mode):
   - Entweder Auto-Fallback auf `STANDARD`, oder Hinweis im UI + automatische Anpassung.
4. In 1P optional nur ein Portalprofil; in spaeterem Ausbau pro Welt/pro Spieler moeglich.

### Rollout in 3 Schritten

1. **Step A (Low Risk):** UI + Persistenz + `STANDARD`/`ONE_WAY`/`COOLDOWN_LONG`.
2. **Step B (Gameplay):** `BOOST_EXIT`/`SLOW_EXIT`/`SAFE_EXIT`/`MOMENTUM_KEEP`.
3. **Step C (Advanced):** `RANDOM_EXIT`/`PLANAR_SHIFT`/`UNSTABLE` inkl. Bot-Finetuning.

### Akzeptanzkriterien

1. Portaltyp ist im Menue waehlbar und bleibt nach Neustart erhalten.
2. Beim Matchstart kommt der Typ korrekt in `Arena` an.
3. Jede der 10 Optionen zeigt unterscheidbares Verhalten.
4. Keine JS-Errors bei Wechsel waehrend Menu-Nutzung.
5. Teleport bleibt fuer Spieler, Bots und Projektile stabil.

### Test-Matrix (minimal)

1. 1P + 2P je Portaltyp.
2. Planar aus/an je Portaltyp.
3. PortalCount 0, 4, 10, 20.
4. Bots only + menschlicher Spieler.
5. Wechsel des Portaltyps vor Matchstart, direktes Neustarten mehrerer Runden.
\ n \ n # #   5 .   F e a t u r e   6 :   E n t w i c k l e r m o d u s   /   R a n d o m   A s s e t   T e s t e r \ n \ n # # #   Z i e l \ n D e r   N u t z e r   w � n s c h t   s i c h   e i n e n   e i n f a c h e n   W e g ,   u m   v e r s c h i e d e n e   n e u e   3 D - A s s e t s   ( F l u g z e u g e / J e t s )   i m   S p i e l   a u s z u p r o b i e r e n .   D a   p o t e n z i e l l   v i e l e   M o d e l l e   h e r u n t e r g e l a d e n   w e r d e n ,   s o l l   e i n   \  
 E n t w i c k l e r m o d u s \   o d e r   e i n e   \ Z u f � l l i g e  
 A u s w a h l \   ( R a n d o m )   i m p l e m e n t i e r t   w e r d e n . \ n B e i   S t a r t   e i n e r   R u n d e   s o l l   e i n   z u f � l l i g e r   J e t   a u s g e w � h l t   u n d   d e s s e n   N a m e   i m   U I   a n g e z e i g t   w e r d e n ,   d a m i t   m a n   d i r e k t   s i e h t ,   w e l c h e s   M o d e l l   g e r a d e   a k t i v   i s t .   S p � t e r   k a n n   m a n   d a s   b e s t e   M o d e l l   d a n n   g e z i e l t   i m   M e n �   f e s t l e g e n . \ n \ n # # #   U m s e t z u n g : \ n 1 .   N e u e r   E i n t r a g   i m   M e n � :   ' Z u f � l l i g   ( T e s t m o d u s ) ' . \ n 2 .   B e i m   R u n d e n s t a r t   w � h l t   d a s   S p i e l   z u f � l l i g   e i n   3 D - M o d e l l   ( z . B .   S T A N D A R D ,   S P A C E S H I P ,   W I N G ,   L O W P O L Y   e t c . ) . \ n 3 .   E i n   k l e i n e s   U I - E l e m e n t   ( z . B .   o b e n   r e c h t s )   z e i g t :   ' A k t u e l l e r   J e t :   [ N a m e ] ' . \ n 4 .   A u t o m a t i s c h e r   F a l l b a c k ,   f a l l s   e i n   A s s e t   d o c h   n i c h t   l a d e n   s o l l t e .  
 
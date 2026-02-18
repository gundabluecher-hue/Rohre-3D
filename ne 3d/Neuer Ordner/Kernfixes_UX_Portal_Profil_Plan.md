# Ausfuehrlicher Umsetzungsplan (HTML-Version)

Stand: 2026-02-17  
Projekt: `Neuer Ordner`  
Status: Nur Planung, keine Umsetzung in diesem Dokument.

## 1. Zielbild

Das Ziel ist eine wieder klar benutzbare, konsistente Testversion mit stabilem Kern-Workflow:

1. Profile funktionieren ohne Blocker (inkl. editierbarem Profilnamen).
2. Build/Version sind sichtbar, damit alle dieselbe Version testen.
3. Menues sind mit Untermenues skalierbar organisiert.
4. Portal-/Ebenenlogik ist reproduzierbar und fair.
5. Mehrprofil-Flow ist als Standard-Funktion end-to-end verifiziert.
6. First-Person-Kamera liegt beim Boost an der Flugzeugspitze fuer freie Sicht nach vorne.

## 2. Scope

### In Scope (jetzt)

1. Menue-Struktur mit Untermenues und klaren Einstellungswegen.
2. Profilsystem (Anlegen, Benennen, Speichern, Laden, Loeschen) inkl. Bugfix beim Namenfeld.
3. Sichtbare Build-Info (Version/Commit/Branch/Buildzeit).
4. Portal-Ebenen-Ausrichtung je Map inkl. Testfaellen.
5. Kern-QA inkl. Regression auf bestehende Kernfunktionen.
6. First-Person-Kamera-Position beim Boost (Nase/Spitze des Flugzeugs) mit freier Sicht.

### Out of Scope (spaeter)

1. Bot-KI-Verbesserungen.
2. Neue Spielmodi (erst nach Kernfixes).
3. Feature-Ausbau ausserhalb der oben genannten Kernpunkte.

## 3. Prioritaeten

### P0 (Blocker)

1. Preset-Profilname editierbar machen.
2. Build-/Versionsanzeige im UI.

### P1 (Kernstabilitaet)

1. Untermenues und skalierbare Informationsarchitektur.
2. Portal-Ebenen-Ausrichtung fixen.
3. Mehrprofil als Standard finalisieren und end-to-end pruefen.
4. First-Person-Boost-Kamera an die Flugzeugspitze legen.

### P2 (Abschluss)

1. Testmatrix und Release-Check fuer Kernfixes.

## 4. Architektur- und UX-Leitlinien

1. Kein versteckter Auto-Save bei kritischen Einstellungen; explizite Speicherung klar zeigen.
2. Jede Aktion mit klarer Rueckmeldung (z. B. "Profil gespeichert", "Profil geladen").
3. Maximal 3 Klicks bis zu jeder wichtigen Einstellung.
4. Keine doppelten Bedienpfade fuer denselben Zweck ohne klare Kennzeichnung.
5. Immer sichtbare Build-ID in Menue oder Splash/Debug-Zeile.
6. In First-Person darf Boost die Sicht nicht verdecken; Kamera bleibt vorne an der Flugzeugspitze.

## 5. Arbeitspakete (detailliert)

## AP-01: Profilname-Bugfix und Eingabefeld-Stabilisierung

Ziel: Profilname muss sicher editierbar sein.

Betroffene Bereiche:

1. `Neuer Ordner/index.html`
2. `Neuer Ordner/style.css`
3. `Neuer Ordner/js/main.js`

Aufgaben:

1. HTML pruefen:
   - Feld hat kein unbeabsichtigtes `readonly`/`disabled`.
   - Korrekte `id` und Event-Bindings vorhanden.
2. CSS pruefen:
   - Kein Overlay blockiert Klick/Focus (`pointer-events`, `z-index`).
   - Fokuszustand visuell klar.
3. JS pruefen:
   - Keine Listener, die Eingabe direkt ueberschreiben.
   - Kein `blur` oder Re-Render, der Typen verhindert.
   - Name-Sanitizing nur beim Speichern, nicht beim Tippen.
4. Regression pruefen:
   - Klick ins Feld, Tippen, Editieren, Loeschen, Speichern, Laden.

Akzeptanzkriterien:

1. Feld ist bei jedem Oeffnen editierbar.
2. Tastaturinput wird sofort sichtbar.
3. Profil kann mit geaendertem Namen gespeichert und geladen werden.
4. Nach Reload bleibt der Name korrekt erhalten.

Aufwand: S (0.5 Tag)

## AP-02: Build-/Versionsanzeige im UI

Ziel: Jede Testperson erkennt eindeutig, welchen Build sie nutzt.

Betroffene Bereiche:

1. `Neuer Ordner/package.json`
2. `Neuer Ordner/js/main.js`
3. `Neuer Ordner/index.html`
4. Optional: Build-Script/Env-Injektion in Vite-Konfiguration

Aufgaben:

1. Metadaten-Quelle definieren:
   - Version (`package.json`)
   - Commit-Hash
   - Branch
   - Build-Zeitstempel
2. Build-Metadaten in Runtime verfuegbar machen.
3. UI-Element fuer Build-Info integrieren:
   - gut sichtbar, aber nicht stoerend.
4. Optional: "Copy Build Info"-Button fuer Bugreports.

Akzeptanzkriterien:

1. Build-Info ist im Menue sichtbar.
2. Zwei unterschiedliche Builds zeigen eindeutig unterschiedliche IDs.
3. QA kann in Tickets die Build-ID referenzieren.

Aufwand: S (0.5 Tag)

## AP-03: Menue-Informationsarchitektur mit Untermenues

Ziel: Skalierbare, auffindbare Menuestruktur.

Zielstruktur (Vorschlag):

1. Hauptmenue
2. Spiel starten
3. Einstellungen
4. Profile
5. Steuerung
6. HUD/Anzeige
7. Gameplay
8. Portale/Map
9. Debug/Build-Info

Betroffene Bereiche:

1. `Neuer Ordner/index.html`
2. `Neuer Ordner/style.css`
3. `Neuer Ordner/js/main.js`
4. Optional: neue UI-Module unter `Neuer Ordner/js/modules/`

Aufgaben:

1. Navigationsmodell definieren:
   - Ein aktiver Screen/Panel-Stack.
   - Zurueck-Logik einheitlich.
2. Untermenue-Container erstellen.
3. Fokus-/Keyboard-Navigation sicherstellen.
4. Sichtbarkeit je Modus regeln (Planar/3D nur relevante Optionen).
5. Bestehende Controls sauber zuordnen statt verstreut zu lassen.

Akzeptanzkriterien:

1. Jede Kernfunktion ist logisch einsortiert.
2. Keine "toten" Buttons oder unverbundene Screens.
3. Alle wesentlichen Optionen in maximal 3 Schritten erreichbar.

Aufwand: M (1-2 Tage)

## AP-04: Portal-Ebenen-Ausrichtung und Konsistenz

Ziel: Portale sind pro Map sauber auf Ebenen ausgerichtet, Teleport-Verhalten ist reproduzierbar.

Betroffene Bereiche:

1. `Neuer Ordner/js/modules/Arena.js`
2. `Neuer Ordner/js/modules/EntityManager.js`
3. `Neuer Ordner/js/modules/Powerup.js` (falls Ebenenkopplung fuer Items mit betroffen)
4. `Neuer Ordner/js/modules/Config.js`

Aufgaben:

1. Portal-Level-Modell festziehen:
   - Pro Map feste Ebenenhoehen.
   - Pro Portalpaar klare Ein-/Ausgangs-Ebene.
2. Spawn-/Exit-Pruefung:
   - Kein Exit zwischen Ebenen ohne Regel.
   - Kein Clamp, der Exit "falsch" verschiebt.
3. Kollisions-/Teleport-Checks:
   - Teleport nur bei sauberem Trigger.
   - Kein sofortiges Rueckteleport-Loopen.
4. Visual-Check:
   - Positionen verifizierbar und lernbar.
   - Keine verbindenden Linien (wie gewuenscht), Zuordnung durch Farbe/Lage.

Akzeptanzkriterien:

1. Portale bleiben auf definierten Ebenen.
2. Teleports landen reproduzierbar auf korrekter Ziel-Ebene.
3. Mehrere Testlaeufe pro Map ohne zufaellige Ebenenfehler.

Aufwand: M (1-2 Tage)

## AP-05: Mehrprofil als Standard + End-to-End-Flow

Ziel: Mehrprofil ist keine Nebenfunktion, sondern Standard-Workflow.

Betroffene Bereiche:

1. `Neuer Ordner/js/main.js`
2. `Neuer Ordner/index.html`
3. `Neuer Ordner/style.css`

Aufgaben:

1. Einheitliche Profilaktionen:
   - Neu anlegen
   - Benennen/Umbenennen
   - Speichern (explizit)
   - Laden
   - Loeschen
2. Fehlerfaelle sauber behandeln:
   - Doppelter Name
   - Leerer Name
   - ungueltige Zeichen
3. UX-Feedback:
   - Success/Fehler-Meldungen klar und kurz.
4. E2E-Pruefung:
   - Anlegen -> Benennen -> Speichern -> Laden -> Neustart -> erneut Laden.

Akzeptanzkriterien:

1. Der komplette Flow funktioniert ohne Workaround.
2. Kein Profilverlust bei Reload.
3. Nutzer koennen zwischen mehreren Profilen sicher wechseln.

Aufwand: M (1-2 Tage)

## AP-06: QA, Regression und Release-Readiness

Ziel: Kernfixes sind stabil und fuer Teamtests freigegeben.

Aufgaben:

1. Testmatrix erstellen:
   - 1P/2P
   - Planar/3D
   - mindestens 2 Maps
   - Profilwechsel waehrend Session
2. Smoke-Tests:
   - Starten, Einstellen, Speichern, Spielen, Neustart, Laden.
3. Portal-spezifische Tests:
   - Mehrfachteleports je Map, gleiche Ziele erwartet.
4. Dokumentation:
   - Kurzprotokoll je Testlauf mit Build-ID.

Akzeptanzkriterien:

1. Keine P0/P1-Blocker offen.
2. Kern-Workflows laufen stabil in reproduzierbaren Testlaeufen.

Aufwand: S-M (ca. 1 Tag)

## AP-07: First-Person-Boost-Kamera an der Flugzeugspitze

Ziel: Im First-Person-Modus liegt die Kamera waehrend Boost an der Flugzeugspitze (Nase), damit freie Sicht nach vorne erhalten bleibt.

Betroffene Bereiche:

1. `Neuer Ordner/js/modules/Renderer.js`
2. `Neuer Ordner/js/modules/Player.js`
3. `Neuer Ordner/js/main.js`
4. `Neuer Ordner/js/modules/Config.js`

Aufgaben:

1. Kamera-Offset fuer First-Person definieren:
   - Normalflug-Offset.
   - Boost-Offset auf Flugzeugspitze/Nase.
2. Weiche Uebergaenge beim Eintritt/Austritt aus Boost:
   - Kein hartes Springen.
   - Keine Sichtblockade durch eigenes Modell.
3. Kollisions-/Clipping-Pruefung:
   - Kamera clippt nicht durch Modell oder Geometrie.
   - Sicht bleibt auch in Kurven stabil.
4. Optionale Parameter in Config:
   - Blend-Geschwindigkeit.
   - Maximaler Boost-Kamera-Offset.

Akzeptanzkriterien:

1. Bei aktivem Boost befindet sich die First-Person-Kamera an der Flugzeugspitze.
2. Die Sicht nach vorne bleibt frei (kein verdeckendes Cockpit/Modellteil).
3. Kamerawechsel in/out Boost fuehlt sich stabil und nicht ruckartig an.
4. Kein neues Clipping-Problem in Standard-Maps.

Aufwand: S-M (0.5-1 Tag)

## 6. Reihenfolge und Milestones

## Milestone A: Benutzbarkeit wiederherstellen

1. AP-01 Profilname-Bugfix
2. AP-02 Build-ID sichtbar

Definition of Done A:

1. Profil-Workflow ist nicht mehr blockiert.
2. Build-Verwechslungen sind im Test ausgeschlossen.

## Milestone B: Struktur und Konsistenz

1. AP-03 Untermenues
2. AP-04 Portal-Ebenen-Fix

Definition of Done B:

1. Menues sind logisch und skalierbar.
2. Portal-Gameplay ist reproduzierbar.

## Milestone C: Abschluss Kernfixes

1. AP-05 Mehrprofil finalisieren
2. AP-07 First-Person-Boost-Kamera
3. AP-06 QA/Regression

Definition of Done C:

1. End-to-End Speichern/Laden fuer Mehrprofil ist stabil.
2. First-Person-Boost-Sicht ist frei und stabil.
3. Freigabe fuer naechsten Feature-Zyklus moeglich.

## 7. Zeit- und Aufwandsrahmen

Gesamtschaetzung: 4.5 bis 8 Arbeitstage (je nach Regressionen und UX-Nacharbeit).

1. P0: 1 Tag
2. P1 Struktur/Portal: 2 bis 4 Tage
3. P1 Mehrprofil + Kamera + QA: 1.5 bis 3 Tage

## 8. Risiken und Gegenmassnahmen

1. Risiko: UI-Rework erzeugt neue Fokus-/Input-Bugs.
   Gegenmassnahme: AP-01 als Referenztests automatisieren/manuell dokumentieren.
2. Risiko: Portal-Fix kollidiert mit bestehenden Spawn-/Map-Randbedingungen.
   Gegenmassnahme: Map-spezifische Positionsvalidierung und Grenzpruefungen.
3. Risiko: Build-Info nicht in allen Startpfaden sichtbar.
   Gegenmassnahme: Anzeige im Hauptmenue plus optional im HUD/Debug.
4. Risiko: Profilschema-Altlasten (alte LocalStorage-Struktur).
   Gegenmassnahme: Migrationslogik + Fallback beim Laden.
5. Risiko: Neue Boost-Kamera erzeugt Clipping oder Uebelkeit durch harte Uebergaenge.
   Gegenmassnahme: Sanfte Kamera-Interpolation, FOV-/Offset-Limits, gezielte FP-Boost-Tests.

## 9. Testkatalog (konkret)

## Profiltests

1. Neues Profil anlegen, Namen tippen, speichern, laden.
2. Profil umbenennen und erneut laden.
3. Leerer Name -> valide Fehlermeldung.
4. Doppelname -> validierte Rueckmeldung.
5. Reload des Spiels -> Profil bleibt vorhanden.

## Menuetests

1. Alle Untermenues oeffnen/schliessen ohne Hanger.
2. Zurueck-Button funktioniert immer.
3. Keyboard-Navigation springt nicht auf falsche Elemente.

## Portaltests

1. Pro Map alle Portale mehrfach benutzen.
2. Ein-/Ausgang stimmen pro Portalpaar reproduzierbar.
3. Keine Ausgaenge "zwischen Ebenen".

## Build-ID-Tests

1. Build-ID bei Start sichtbar.
2. Nach neuem Build aendert sich ID erkennbar.
3. ID ist in Bugreport kopierbar (falls Button umgesetzt).

## First-Person-Kameratests

1. Im First-Person-Modus Boost aktivieren, Kamera sitzt an der Flugzeugspitze.
2. Sicht nach vorne bleibt frei (keine Modellverdeckung) bei Geradeausflug und Kurvenflug.
3. Wechsel Normalflug <-> Boost hat weichen Uebergang ohne ruckartige Spruenge.
4. In mehreren Maps kein Clipping durch Waende/Geometrie.

## 10. Ergebnisartefakte

Nach Abschluss der Umsetzung muessen folgende Artefakte vorliegen:

1. Aktualisierte UI-Struktur in `index.html`/`style.css`/`main.js`.
2. Dokumentierte Build-ID-Strategie.
3. Reproduzierbare Portal-Map-Konfiguration.
4. Dokumentierte FP-Boost-Kamera-Parameter (Offset/Blend) in Config.
5. Testprotokoll mit Build-ID und Ergebnis je Testfall.

## 11. Go/No-Go Kriterien fuer naechsten Zyklus

Go nur, wenn alle Bedingungen erfuellt sind:

1. Profilname-Bug ist behoben.
2. Build-ID ist sichtbar.
3. Menuestruktur ist konsistent.
4. Portal-Ebenenverhalten ist reproduzierbar.
5. Mehrprofil-End-to-End ist stabil getestet.
6. First-Person-Boost-Kamera liegt stabil an der Spitze mit freier Sicht.

No-Go, wenn einer der Punkte als Blocker offen ist.

## 12. Hinweis zur Feature-Reihenfolge

Wie angefordert gilt:

1. Erst Kernfixes.
2. Danach neue Modi.
3. Bot-KI bleibt bis dahin bewusst hintangestellt.

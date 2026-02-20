# Bot-Verbesserung: Phasenplan

## Ueberblick
Dieses Dokument beschreibt die geplanten Phasen zur Verbesserung der Bots.
Der Fokus liegt auf besserer Navigation, stabilerem Verhalten, sinnvoller Item-Nutzung und messbarer Qualitaet.

## Phase 1 - Baseline und Messbarkeit
**Ziel:** Ausgangslage objektiv erfassen.

**Aufgaben:**
- Bot-spezifische Events im Recorder ergaenzen (`STUCK`, `BOUNCE_WALL`, `BOUNCE_TRAIL`, `ITEM_USE`).
- Vergleichsmetriken definieren: Ueberlebenszeit, Selbstkollisionen pro Runde, Stuck-Events pro Minute, Winrate.
- Kurzen Testablauf fuer wiederholbare Bot-Matches festlegen.

**Ergebnis:**
- Messbare Baseline fuer spaetere Vergleiche.

**Aufwand:** 0.5 Tag

## Phase 2 - KI-Struktur refactoren
**Ziel:** Wartbare und erweiterbare Bot-Architektur.

**Aufgaben:**
- `update()` in klare Schritte teilen: Wahrnehmung, Entscheidung, Aktion.
- Interne KI-Daten strukturieren (Gefahrenscore, Zielzustand, Cooldowns).
- Bestehendes Verhalten unveraendert uebernehmen, nur sauber trennen.

**Ergebnis:**
- Bessere Lesbarkeit und sichere Grundlage fuer weitere Verbesserungen.

**Aufwand:** 1-2 Tage

## Phase 3 - Navigation und Kollision vermeiden
**Ziel:** Deutlich weniger unnoetige Wand- und Trail-Treffer.

**Aufgaben:**
- Mehrere Richtungsproben statt nur Forward-Check (vorne, links, rechts; optional oben/unten).
- Risiko-Scoring pro Richtung auf Basis Wanddistanz, Trail-Naehe und freier Strecke.
- Dynamisches Look-Ahead je nach Geschwindigkeit/Boost.
- Turn-Commit fuer kurze Zeit, damit Bots nicht zickzacken.

**Ergebnis:**
- Ruhigeres Flugverhalten und bessere Ueberlebensfaehigkeit.

**Aufwand:** 2 Tage

## Phase 4 - Robustes Anti-Stuck-Verhalten
**Ziel:** Bots sollen sich verlaesslich aus schlechten Situationen loesen.

**Aufgaben:**
- Stuck-Erkennung erweitern (Fortschritt in Blickrichtung + Kollision-Historie).
- Gezielte Recovery-Manoever statt rein zufaelliger Rettungsversuche.
- Abbruchkriterien und Cooldown einfuehren, um Endlosschleifen zu verhindern.

**Ergebnis:**
- Stark reduzierte Stuck-Rate und stabilere Matches.

**Aufwand:** 1 Tag

## Phase 5 - Taktik fuer Zielwahl und Items
**Ziel:** Bots handeln weniger zufaellig und situationsbezogen.

**Aufgaben:**
- Zielpriorisierung einfuehren (naeher Gegner, Bedrohung, guenstige Schusslinie).
- Item-Entscheidungen auf Utility-Basis statt Zufall treffen.
- Defensiv/Offensiv-Logik mit einfachen Regeln und Cooldowns ausbalancieren.

**Ergebnis:**
- Nachvollziehbares, spielerisch glaubwuerdiges Verhalten.

**Aufwand:** 1-2 Tage

## Phase 6 - Portal- und Map-Intelligenz
**Ziel:** Portale und Maps strategisch nutzen.

**Aufgaben:**
- Portal-Nutzung als Intent mit Sicherheitscheck (Eingang, Ausgang, Gegnernaehe).
- Zufallsbasierte Portal-Entscheidungen durch Nutzenbewertung ersetzen.
- Map-spezifische Heuristiken fuer Engstellen und offene Zonen einfuehren.

**Ergebnis:**
- Bessere Entscheidungen in Planar- und Portal-Szenarien.

**Aufwand:** 1 Tag

## Phase 7 - Schwierigkeitsgrade und Balancing
**Ziel:** Klare Skill-Stufen fuer verschiedene Spielertypen.

**Aufgaben:**
- Profile definieren: `EASY`, `NORMAL`, `HARD`.
- Parameter je Profil abstimmen: Reaktionszeit, Fehlerquote, Aggression, Look-Ahead.
- Optional: Schwierigkeit im Menu als Setting verfuegbar machen.

**Ergebnis:**
- Kontrollierbare Bot-Staerke und besseres Spielerlebnis.

**Aufwand:** 1 Tag

## Phase 8 - Validierung und Abnahme
**Ziel:** Verbesserungen belegen und absichern.

**Aufgaben:**
- Testmatrix durchlaufen: 1v1, 1v3, unterschiedliche Maps, Planar/Portale an/aus.
- Baseline gegen Endstand vergleichen.
- KPI-Ziele pruefen (z. B. weniger Selbstkollisionen, weniger Stuck, fairere Winrate).

**Ergebnis:**
- Belastbarer Abschlussbericht mit Entscheidung fuer Release.

**Aufwand:** 1 Tag

## Gesamtaufwand
- Realistisch: **7.5 bis 9.5 Tage** (inkl. Iteration und Balancing).

## Abhaengigkeiten
- Phase 1 vor allen anderen Phasen abschliessen.
- Phase 2 als technische Grundlage fuer Phase 3 bis 7.
- Phase 8 erst nach Abschluss der Kernphasen starten.

# Bot-Performance Debug und Leistungsverbesserung - KI-autonomer Ausfuehrungsplan

Stand: 2026-02-18  
Status: Nur Planung, keine Umsetzung in diesem Dokument

## 1. Auftrag und Scope

Ziel ist eine reproduzierbare, KI-autonome Vorgehensweise zum Debuggen und Verbessern der Performance ohne Gameplay-Regressions.

### In Scope

1. `Neuer Ordner/js/modules/Bot.js`
2. `Neuer Ordner/js/modules/Arena.js`
3. `Neuer Ordner/js/modules/EntityManager.js`
4. `Neuer Ordner/js/modules/Renderer.js`
5. `Neuer Ordner/js/modules/Config.js`

### Out of Scope

1. Neue Features ohne direkten Performance-Nutzen
2. Grosses Gameplay-Rebalancing ohne Messbeleg
3. Refactors ohne messbare Performance-Auswirkung

## 2. Zielmetriken

Pro Szenario werden mindestens diese Metriken erhoben:

1. `bot_update_ms_p95` (p95 von `Bot.update()`)
2. `frame_ms_p95` (p95 Frame-Zeit)
3. `frame_ms_max` (Maximalwert)
4. `heap_delta_mb` (Speicherwachstum pro Lauf)
5. `stuck_events_per_min`
6. `self_collisions_per_round`
7. `winrate_distribution` (nur als Fairness-Guardrail)

## 3. Reproduzierbare Szenarien

Die KI arbeitet nur mit festen Vergleichsszenarien:

1. `S1`: 1v1, planar aus, portals aus, 3 Matches
2. `S2`: 1v3, planar aus, portals an, 3 Matches
3. `S3`: 1v3, planar an, portals aus, 3 Matches
4. `S4`: 1v3, komplexe Map, portals an, 3 Matches

Regeln:

1. Falls Seed-System existiert: feste Seeds pro Szenario.
2. Falls kein Seed-System existiert: feste Startkonfigurationen und Matchdauer.
3. Pro Szenario mindestens 20 Wiederholungen fuer statistische Aussagekraft.

## 4. Instrumentierungsplan

Messpunkte werden als Debug-Flag-gesteuerte Instrumentierung geplant:

1. In `Bot.js`:
   - `update`
   - `_senseEnvironment`
   - `_scoreProbe`
   - `_decideSteering`
   - `_decideItemUsage`
2. In `Arena.js`:
   - Kollisionstests
   - Portal-Eintritt/Austritt-Checks
3. In `EntityManager.js`:
   - Iteration ueber Spieler, Trails, Projektile
4. In `Renderer.js`:
   - Frame-Pipeline-Zeit
5. In `Config.js`:
   - globales Performance-Flag und Sampling-Rate

Instrumentierung darf im Normalmodus keinen relevanten Overhead erzeugen.

## 5. Baseline-Protokoll

Vor jeder Optimierung ist eine Baseline Pflicht.

Artefakte:

1. `artifacts/perf/baseline.json` (Rohdaten)
2. `artifacts/perf/baseline.md` (lesbare Zusammenfassung)

Protokollinhalt:

1. Szenario-ID
2. Run-Anzahl
3. avg, p95, max, stddev je Metrik
4. Datum/Zeit
5. Build-ID (falls vorhanden)

## 6. Priorisierungslogik fuer Engpaesse

Kandidaten werden nach dieser Heuristik priorisiert:

`impact_score = time_share * call_frequency * variance`

Zusatzregeln:

1. Quick Wins mit niedrigem Risiko zuerst.
2. Pro Zyklus genau eine Massnahme.
3. Nach jeder Massnahme sofort Re-Messung.

## 7. Massnahmenkatalog (nur Planung)

Typische Kandidaten:

1. Fruehere Abbruchbedingungen in Hot Paths
2. Reduktion redundanter `Vector3`-Operationen
3. Caching von wiederholten Berechnungen pro Tick
4. Begrenzung Probe-Anzahl dynamisch je Risiko
5. Senkung unnnoetiger Kollisionschecks bei klarer Lage
6. Adaptive Update-Frequenz fuer teure Subsysteme

Jede Massnahme braucht:

1. Ziel-Hotspot
2. erwarteten Effekt
3. Risikoanalyse (Performance vs Gameplay)
4. Akzeptanzkriterium

## 8. Validierungsregeln

Eine Aenderung wird nur uebernommen, wenn:

1. Zielmetrik verbessert ist (mindestens 5 Prozent p95 in betroffenem Hotspot), und
2. keine Guardrail-Verletzung vorliegt.

Guardrails:

1. Keine neuen kritischen Funktionsfehler
2. `stuck_events_per_min` nicht schlechter als Baseline + definierte Toleranz
3. `winrate_distribution` nicht signifikant entgleist

Falls Guardrail verletzt wird:

1. Aenderung verwerfen oder anpassen
2. erneute Messung

## 9. KI-Ablaufalgorithmus

Ablauf pro Iteration:

1. Baseline/aktuellen Stand messen
2. Top-Engpass waehlen
3. Genau eine Optimierung umsetzen
4. Re-Messung in allen Szenarien
5. Vergleich gegen vorher
6. Entscheiden: behalten oder verwerfen
7. Iteration fortsetzen

Stop-Bedingungen:

1. Kein Kandidat bringt > 5 Prozent Verbesserung
2. Zielmetriken erreicht
3. Weitere Aenderungen brechen Guardrails

## 10. Eskalationsregeln

Menschliche Entscheidung anfordern, wenn:

1. Baseline statistisch instabil bleibt
2. Performance und Fairness nicht gleichzeitig haltbar sind
3. Nach 3 Iterationen kein Fortschritt sichtbar ist
4. Architekturumbau erforderlich waere

## 11. Abschlussartefakte

Nach kompletter Umsetzung muessen vorliegen:

1. `artifacts/perf/final_report.md`
2. `artifacts/perf/metrics_before_after.json`
3. Liste aller uebernommenen und verworfenen Massnahmen mit Begruendung
4. Rest-Risiken und naechste Kandidaten


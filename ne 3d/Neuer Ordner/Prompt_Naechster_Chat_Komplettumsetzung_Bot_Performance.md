# Prompt fuer naechsten Chat: Komplette Umsetzung

Bitte fuehre die komplette Umsetzung im Projekt durch, nicht nur planen.

Projektpfad:
`c:\Users\gunda\Desktop\3d\ne 3d\Neuer Ordner`

Verbindliche Planquelle:
`Neuer Ordner/Bot_Performance_Debug_Plan_KI_Autonom.md`

Aufgabe:
Implementiere den gesamten Performance-Debug- und Optimierungsprozess fuer Bot/Kernsysteme end-to-end inklusive Instrumentierung, Baseline, iterativen Optimierungen, Validierung und Abschlussreport.

Wichtige Ziele:
1. p95-Performance in den Hotspots verbessern (vor allem `Bot.update()` und Teilfunktionen).
2. Keine funktionalen Regressions im Gameplay.
3. Messungen reproduzierbar und nachvollziehbar dokumentieren.

Arbeitsregeln:
1. Starte direkt mit Umsetzung, keine neue reine Planungsantwort.
2. Arbeite in kleinen, nachvollziehbaren Schritten.
3. Nach jeder relevanten Aenderung: messen und Ergebnis festhalten.
4. Nur Aenderungen behalten, die Metrik-Verbesserung zeigen und Guardrails einhalten.
5. Wenn du auf eine unklare Produktentscheidung triffst, stelle eine kurze Rueckfrage mit 2-3 Optionen.

Konkrete Deliverables:
1. Instrumentierung ueber Debug-Flag in passenden Modulen (`Bot.js`, `Arena.js`, `EntityManager.js`, `Renderer.js`, `Config.js`).
2. Reproduzierbarer Benchmark-/Messablauf mit Szenarien.
3. Baseline-Artefakte:
   - `artifacts/perf/baseline.json`
   - `artifacts/perf/baseline.md`
4. Iterative Optimierungsdurchlaeufe mit Vorher/Nachher-Vergleich.
5. Abschlussartefakte:
   - `artifacts/perf/metrics_before_after.json`
   - `artifacts/perf/final_report.md`

Guardrails:
1. Keine neuen kritischen Laufzeitfehler.
2. Keine deutliche Verschlechterung von `stuck_events_per_min`.
3. Keine starke Entgleisung der `winrate_distribution`.

Output-Format im Chat:
1. Kurze Statusupdates waehrend der Umsetzung.
2. Am Ende: geaenderte Dateien, wichtigste Metrikverbesserungen, offene Risiken, naechste sinnvolle Schritte.


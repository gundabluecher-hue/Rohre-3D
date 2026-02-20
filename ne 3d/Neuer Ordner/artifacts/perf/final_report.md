# Final Performance Report

- Created: 2026-02-18T07:04:42.378Z
- Baseline file: C:\Users\gunda\Desktop\3d\ne 3d\Neuer Ordner\artifacts\perf\baseline.json
- Optimized file: C:\Users\gunda\Desktop\3d\ne 3d\Neuer Ordner\artifacts\perf\optimized.json

## Summary

- bot.update p95 avg: 0.450 ms -> 0.500 ms (11.11%)
- frame p95 avg: 6.650 ms -> 6.825 ms (2.63%)
- frame max peak: 22.800 ms -> 31.600 ms (38.60%)

## Scenario Deltas

| Scenario | bot.update p95 delta % | frame p95 delta % | stuck/min delta % | self collisions delta % | winrate drift max abs |
|---|---:|---:|---:|---:|---:|
| S1 | 0.00 | 24.53 | n/a | n/a | 0.050 |
| S2 | 20.00 | 0.00 | n/a | n/a | 0.050 |
| S3 | 0.00 | 0.00 | n/a | n/a | 0.150 |
| S4 | 20.00 | -7.32 | n/a | n/a | 0.100 |

## Guardrails

- Critical runtime errors: PASS
- Stuck events tolerance (+10% max): PASS
- Winrate drift tolerance (max abs <= 0.30): PASS

## Adopted Measures

- Instrumentation in Bot/Arena/EntityManager/Renderer with debug flag and sampling.

## Rejected Measures

- None documented in this run.

## Residual Risks

- Browser-level timing variance can still affect p95 in short runs.
- Winrate guardrail is distribution-based and may need more rounds for tight confidence intervals.

## Next Candidates

- Reduce trail collision cost in player-vs-trail checks via fast path / broadphase.
- Evaluate adaptive probe density in low-risk Bot states.

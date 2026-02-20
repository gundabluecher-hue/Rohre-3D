# Performance Benchmark SMOKE

- Timestamp: 2026-02-18T05:01:01.414Z
- Build: v0.9.0 · Build MLRK4HFM · 2026-02-18 04:53
- Rounds per scenario: 5
- SampleEvery: 2

## Scenario Overview

| Scenario | bot.update p95 | frame p95 | frame max | heap delta MB | stuck/min | self collisions/round |
|---|---:|---:|---:|---:|---:|---:|
| S1 | 0.600 | 6.400 | 22.500 | 2.448 | 0.000 | 0.000 |

## Aggregate

- bot.update p95 avg: 0.600 ms
- frame p95 avg: 6.400 ms
- frame max peak: 22.500 ms
- heap delta avg: 2.448 MB
- stuck/min avg: 0.000
- self collisions/round avg: 0.000

## Winrate Distribution

- S1: player_0=1.000

## Hotspots (p95)

- S1: bot.update=0.600, bot.senseEnvironment=1.500, bot.scoreProbe=0.200, entity.update=1.300

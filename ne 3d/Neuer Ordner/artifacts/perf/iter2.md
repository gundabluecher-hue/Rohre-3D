# Performance Benchmark ITER2

- Timestamp: 2026-02-18T05:30:13.421Z
- Build: v0.9.0 · Build MLRLA11I · 2026-02-18 05:26
- Rounds per scenario: 5
- SampleEvery: 2

## Scenario Overview

| Scenario | bot.update p95 | frame p95 | frame max | heap delta MB | stuck/min | self collisions/round |
|---|---:|---:|---:|---:|---:|---:|
| S1 | 0.600 | 6.700 | 9.300 | 2.474 | 0.000 | 0.000 |
| S2 | 0.600 | 8.500 | 13.400 | 2.418 | 0.000 | 0.000 |
| S3 | 0.300 | 6.100 | 8.100 | -4.692 | 0.000 | 0.000 |
| S4 | 0.500 | 5.500 | 8.400 | 1.700 | 0.000 | 0.000 |

## Aggregate

- bot.update p95 avg: 0.500 ms
- frame p95 avg: 6.700 ms
- frame max peak: 13.400 ms
- heap delta avg: 0.475 MB
- stuck/min avg: 0.000
- self collisions/round avg: 0.000

## Winrate Distribution

- S1: player_0=0.800, player_1=0.200
- S2: player_0=1.000
- S3: player_0=1.000
- S4: player_0=1.000

## Hotspots (p95)

- S1: bot.update=0.600, bot.senseEnvironment=1.200, bot.scoreProbe=0.200, entity.update=1.400
- S2: bot.update=0.600, bot.senseEnvironment=1.600, bot.scoreProbe=0.200, entity.update=2.100
- S3: bot.update=0.300, bot.senseEnvironment=1.000, bot.scoreProbe=0.200, entity.update=1.700
- S4: bot.update=0.500, bot.senseEnvironment=1.500, bot.scoreProbe=0.200, entity.update=2.300

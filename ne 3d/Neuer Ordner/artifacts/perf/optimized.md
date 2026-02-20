# Performance Benchmark OPTIMIZED

- Timestamp: 2026-02-18T07:03:09.539Z
- Build: v0.9.0 · Build MLRO5SZ4 · 2026-02-18 06:46
- Rounds per scenario: 20
- SampleEvery: 2

## Scenario Overview

| Scenario | bot.update p95 | frame p95 | frame max | heap delta MB | stuck/min | self collisions/round |
|---|---:|---:|---:|---:|---:|---:|
| S1 | 0.500 | 6.600 | 31.600 | 3.634 | 0.000 | 0.000 |
| S2 | 0.600 | 6.900 | 11.000 | -0.214 | 0.000 | 0.000 |
| S3 | 0.300 | 6.200 | 8.900 | -3.410 | 0.000 | 0.000 |
| S4 | 0.600 | 7.600 | 10.900 | 2.352 | 0.000 | 0.000 |

## Aggregate

- bot.update p95 avg: 0.500 ms
- frame p95 avg: 6.825 ms
- frame max peak: 31.600 ms
- heap delta avg: 0.590 MB
- stuck/min avg: 0.000
- self collisions/round avg: 0.000

## Winrate Distribution

- S1: player_0=1.000
- S2: player_0=0.900, player_1=0.050, player_2=0.050
- S3: player_0=0.750, player_1=0.200
- S4: player_0=0.850, player_1=0.150

## Hotspots (p95)

- S1: bot.update=0.500, bot.senseEnvironment=1.500, bot.scoreProbe=0.200, entity.update=1.300
- S2: bot.update=0.600, bot.senseEnvironment=1.700, bot.scoreProbe=0.200, entity.update=2.200
- S3: bot.update=0.300, bot.senseEnvironment=0.800, bot.scoreProbe=0.200, entity.update=1.300
- S4: bot.update=0.600, bot.senseEnvironment=1.900, bot.scoreProbe=0.200, entity.update=2.300

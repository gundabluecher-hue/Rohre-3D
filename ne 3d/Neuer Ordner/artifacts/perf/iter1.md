# Performance Benchmark ITER1

- Timestamp: 2026-02-18T05:25:04.082Z
- Build: v0.9.0 · Build MLRL38WG · 2026-02-18 05:20
- Rounds per scenario: 5
- SampleEvery: 2

## Scenario Overview

| Scenario | bot.update p95 | frame p95 | frame max | heap delta MB | stuck/min | self collisions/round |
|---|---:|---:|---:|---:|---:|---:|
| S1 | 0.500 | 5.900 | 11.000 | 2.192 | 0.000 | 0.000 |
| S2 | 0.400 | 7.500 | 15.100 | 2.035 | 0.000 | 0.000 |
| S3 | 0.300 | 5.900 | 9.500 | -5.135 | 0.000 | 0.000 |
| S4 | 0.500 | 7.500 | 14.000 | 1.295 | 0.000 | 0.000 |

## Aggregate

- bot.update p95 avg: 0.425 ms
- frame p95 avg: 6.700 ms
- frame max peak: 15.100 ms
- heap delta avg: 0.097 MB
- stuck/min avg: 0.000
- self collisions/round avg: 0.000

## Winrate Distribution

- S1: player_0=0.800, player_1=0.200
- S2: player_0=1.000
- S3: player_0=0.600, player_1=0.400
- S4: player_0=0.800, player_1=0.200

## Hotspots (p95)

- S1: bot.update=0.500, bot.senseEnvironment=1.300, bot.scoreProbe=0.200, entity.update=1.000
- S2: bot.update=0.400, bot.senseEnvironment=0.900, bot.scoreProbe=0.100, entity.update=1.700
- S3: bot.update=0.300, bot.senseEnvironment=0.700, bot.scoreProbe=0.200, entity.update=1.200
- S4: bot.update=0.500, bot.senseEnvironment=1.100, bot.scoreProbe=0.200, entity.update=1.800

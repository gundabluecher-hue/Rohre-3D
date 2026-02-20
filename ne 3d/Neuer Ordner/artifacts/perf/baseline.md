# Performance Benchmark BASELINE

- Timestamp: 2026-02-18T06:46:35.007Z
- Build: v0.9.0 · Build MLRNKIH5 · 2026-02-18 06:30
- Rounds per scenario: 20
- SampleEvery: 2

## Scenario Overview

| Scenario | bot.update p95 | frame p95 | frame max | heap delta MB | stuck/min | self collisions/round |
|---|---:|---:|---:|---:|---:|---:|
| S1 | 0.500 | 5.300 | 22.800 | 3.390 | 0.000 | 0.000 |
| S2 | 0.500 | 6.900 | 12.800 | -0.800 | 0.000 | 0.000 |
| S3 | 0.300 | 6.200 | 8.200 | -2.949 | 0.000 | 0.000 |
| S4 | 0.500 | 8.200 | 14.100 | -2.094 | 0.000 | 0.000 |

## Aggregate

- bot.update p95 avg: 0.450 ms
- frame p95 avg: 6.650 ms
- frame max peak: 22.800 ms
- heap delta avg: -0.613 MB
- stuck/min avg: 0.000
- self collisions/round avg: 0.000

## Winrate Distribution

- S1: player_0=0.950, player_1=0.050
- S2: player_0=0.850, player_1=0.100, player_2=0.050
- S3: player_0=0.900, player_1=0.100
- S4: player_0=0.750, player_1=0.200, player_2=0.050

## Hotspots (p95)

- S1: bot.update=0.500, bot.senseEnvironment=1.400, bot.scoreProbe=0.200, entity.update=1.500
- S2: bot.update=0.500, bot.senseEnvironment=1.700, bot.scoreProbe=0.200, entity.update=2.200
- S3: bot.update=0.300, bot.senseEnvironment=0.900, bot.scoreProbe=0.200, entity.update=1.400
- S4: bot.update=0.500, bot.senseEnvironment=1.700, bot.scoreProbe=0.200, entity.update=2.300

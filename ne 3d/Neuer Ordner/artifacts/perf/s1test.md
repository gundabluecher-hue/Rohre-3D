# Performance Benchmark S1TEST

- Timestamp: 2026-02-18T06:09:29.358Z
- Build: v0.9.0 · Build MLRMO9RE · 2026-02-18 06:05
- Rounds per scenario: 20
- SampleEvery: 2

## Scenario Overview

| Scenario | bot.update p95 | frame p95 | frame max | heap delta MB | stuck/min | self collisions/round |
|---|---:|---:|---:|---:|---:|---:|
| S1 | 0.500 | 5.900 | 8.200 | 4.111 | 0.000 | 0.000 |

## Aggregate

- bot.update p95 avg: 0.500 ms
- frame p95 avg: 5.900 ms
- frame max peak: 8.200 ms
- heap delta avg: 4.111 MB
- stuck/min avg: 0.000
- self collisions/round avg: 0.000

## Winrate Distribution

- S1: player_0=0.950, player_1=0.050

## Hotspots (p95)

- S1: bot.update=0.500, bot.senseEnvironment=1.100, bot.scoreProbe=0.200, entity.update=1.300

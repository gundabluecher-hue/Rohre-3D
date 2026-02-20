# Perf Benchmark Workflow

## Commands

```bash
npm run perf:baseline -- --sample-every 2 --time-scale 8 --max-round-sec 10 --timeout-ms 480000 --port 4200
npm run perf:optimized -- --sample-every 2 --time-scale 8 --max-round-sec 10 --timeout-ms 480000 --port 4208
npm run perf:compare
node tools/perf/verify-training.mjs --rounds 12 --time-scale 1000 --max-round-sec 10 --timeout-ms 360000 --port 4216
```

## Scenario Set

- `S1`: 1v1, planar off, portals off
- `S2`: 1v3, planar off, portals on
- `S3`: 1v3, planar on, portals off
- `S4`: 1v3, complex map, portals on

## Notes

- Runner uses deterministic RNG seeds per scenario.
- `max-round-sec` enforces a hard cap for long rounds to keep run time stable.
- Perf instrumentation is enabled via runtime override in benchmark mode.
- Training smoke now validates persistence by force-saving, reloading, and checking restored learning counters.

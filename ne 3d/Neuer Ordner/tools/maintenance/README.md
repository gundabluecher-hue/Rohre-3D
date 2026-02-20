# Maintenance Utilities

## Learning History Cleanup

This utility archives older bot learning snapshots and rewrites a consistent compact summary.

### Dry run

```bash
npm run cleanup:learning:dry
```

### Apply cleanup

```bash
npm run cleanup:learning
```

### Options

```bash
node tools/maintenance/cleanup-learning-history.mjs --keep 300 --dry-run
node tools/maintenance/cleanup-learning-history.mjs --history-dir learning_history --archive-dir learning_history_archive --summary learning_history_compact_summary.json --keep 500
```

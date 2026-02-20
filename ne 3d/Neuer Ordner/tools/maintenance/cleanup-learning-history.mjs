#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

const SNAPSHOT_RE = /^bot_intelligence_(\d{8}_\d{6})\.json$/;

function toPosix(p) {
    return p.split(path.sep).join('/');
}

function readArgs(argv) {
    const args = {
        historyDir: 'learning_history',
        archiveDir: 'learning_history_archive',
        summaryPath: 'learning_history_compact_summary.json',
        keep: 300,
        dryRun: false,
    };

    for (let i = 0; i < argv.length; i++) {
        const token = argv[i];
        const next = argv[i + 1];
        if (token === '--history-dir' && next) {
            args.historyDir = next;
            i++;
        } else if (token === '--archive-dir' && next) {
            args.archiveDir = next;
            i++;
        } else if (token === '--summary' && next) {
            args.summaryPath = next;
            i++;
        } else if (token === '--keep' && next) {
            const n = Number.parseInt(next, 10);
            if (Number.isFinite(n) && n >= 1) {
                args.keep = n;
            }
            i++;
        } else if (token === '--dry-run') {
            args.dryRun = true;
        }
    }
    return args;
}

async function listSnapshots(historyDir) {
    const entries = await fs.readdir(historyDir, { withFileTypes: true });
    const snapshots = [];

    for (const entry of entries) {
        if (!entry.isFile()) continue;
        const match = SNAPSHOT_RE.exec(entry.name);
        if (!match) continue;
        snapshots.push({
            file: entry.name,
            timestamp: match[1],
            fullPath: path.join(historyDir, entry.name),
        });
    }

    snapshots.sort((a, b) => {
        if (a.timestamp === b.timestamp) return a.file.localeCompare(b.file);
        return a.timestamp.localeCompare(b.timestamp);
    });
    return snapshots;
}

async function safeReadJson(filePath) {
    try {
        const raw = await fs.readFile(filePath, 'utf8');
        const normalized = raw.charCodeAt(0) === 0xfeff ? raw.slice(1) : raw;
        return JSON.parse(normalized);
    } catch {
        return null;
    }
}

function toFiniteNumber(value, fallback = 0) {
    return Number.isFinite(value) ? value : fallback;
}

function extractSnapshotMetrics(payload) {
    const src = payload && typeof payload === 'object' ? payload : {};
    const engine3D = src.engine3D && typeof src.engine3D === 'object' ? src.engine3D : {};
    const enginePlanar = src.enginePlanar && typeof src.enginePlanar === 'object' ? src.enginePlanar : {};
    const states3D = Array.isArray(src.states3D) ? src.states3D : [];
    const statesPlanar = Array.isArray(src.statesPlanar) ? src.statesPlanar : [];
    const states = Array.isArray(src.states) ? src.states : [];

    const updatesTotal = Math.max(
        0,
        Math.floor(
            toFiniteNumber(src.totalUpdates, 0)
        )
    );
    const updates3D = Math.max(
        0,
        Math.floor(
            toFiniteNumber(engine3D.totalUpdates, 0)
        )
    );
    const updatesPlanar = Math.max(
        0,
        Math.floor(
            toFiniteNumber(enginePlanar.totalUpdates, 0)
        )
    );

    const updates = Math.max(
        updatesTotal,
        updates3D,
        updatesPlanar,
        updates3D + updatesPlanar
    );

    const rewardTotal = toFiniteNumber(src.totalReward, 0);
    const reward3D = toFiniteNumber(engine3D.totalReward, 0);
    const rewardPlanar = toFiniteNumber(enginePlanar.totalReward, 0);
    const reward = (() => {
        const hasTotal = Number.isFinite(src.totalReward);
        if (hasTotal) return rewardTotal;
        if (Number.isFinite(engine3D.totalReward) && Number.isFinite(enginePlanar.totalReward)) {
            return reward3D + rewardPlanar;
        }
        if (Number.isFinite(engine3D.totalReward)) return reward3D;
        if (Number.isFinite(enginePlanar.totalReward)) return rewardPlanar;
        return 0;
    })();

    const statesTotal = Math.max(0, Math.floor(toFiniteNumber(src.statesCount, 0)));
    const statesFromEngines = Math.max(
        0,
        Math.floor(toFiniteNumber(engine3D.states, 0))
    ) + Math.max(
        0,
        Math.floor(toFiniteNumber(enginePlanar.states, 0))
    );
    const statesFromRows = states3D.length + statesPlanar.length;

    const stateCount = Math.max(
        statesTotal,
        statesFromEngines,
        statesFromRows,
        states.length
    );

    return {
        updates,
        reward,
        states: stateCount,
    };
}

function summarizeSnapshots(snapshots) {
    if (!Array.isArray(snapshots) || snapshots.length === 0) {
        return {
            updatesMin: 0,
            updatesMax: 0,
            updatesGrowth: 0,
            rewardMin: 0,
            rewardMax: 0,
            rewardDelta: 0,
            statesMin: 0,
            statesMax: 0,
            statesGrowth: 0,
        };
    }

    const first = snapshots[0];
    const last = snapshots[snapshots.length - 1];
    let updatesMin = Number.POSITIVE_INFINITY;
    let updatesMax = Number.NEGATIVE_INFINITY;
    let rewardMin = Number.POSITIVE_INFINITY;
    let rewardMax = Number.NEGATIVE_INFINITY;
    let statesMin = Number.POSITIVE_INFINITY;
    let statesMax = Number.NEGATIVE_INFINITY;

    for (const s of snapshots) {
        updatesMin = Math.min(updatesMin, s.updates);
        updatesMax = Math.max(updatesMax, s.updates);
        rewardMin = Math.min(rewardMin, s.reward);
        rewardMax = Math.max(rewardMax, s.reward);
        statesMin = Math.min(statesMin, s.states);
        statesMax = Math.max(statesMax, s.states);
    }

    return {
        updatesMin: Number.isFinite(updatesMin) ? updatesMin : 0,
        updatesMax: Number.isFinite(updatesMax) ? updatesMax : 0,
        updatesGrowth: last.updates - first.updates,
        rewardMin: Number.isFinite(rewardMin) ? rewardMin : 0,
        rewardMax: Number.isFinite(rewardMax) ? rewardMax : 0,
        rewardDelta: last.reward - first.reward,
        statesMin: Number.isFinite(statesMin) ? statesMin : 0,
        statesMax: Number.isFinite(statesMax) ? statesMax : 0,
        statesGrowth: last.states - first.states,
    };
}

async function ensureDir(dirPath) {
    await fs.mkdir(dirPath, { recursive: true });
}

async function fileExists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}

async function moveFileSafely(fromPath, toPath) {
    try {
        await fs.rename(fromPath, toPath);
    } catch (err) {
        if (!err || err.code !== 'EXDEV') {
            throw err;
        }
        await fs.copyFile(fromPath, toPath);
        await fs.unlink(fromPath);
    }
}

async function getUniqueArchiveTarget(baseTargetPath) {
    if (!(await fileExists(baseTargetPath))) {
        return baseTargetPath;
    }
    const dir = path.dirname(baseTargetPath);
    const ext = path.extname(baseTargetPath);
    const base = path.basename(baseTargetPath, ext);
    let i = 1;
    while (i < 10_000) {
        const candidate = path.join(dir, `${base}__dup${i}${ext}`);
        if (!(await fileExists(candidate))) {
            return candidate;
        }
        i++;
    }
    throw new Error(`Could not create unique archive target for ${baseTargetPath}`);
}

async function archiveOldSnapshots({ historyDir, archiveDir, keep, dryRun }) {
    const snapshots = await listSnapshots(historyDir);
    const keepCount = Math.max(1, Math.min(keep, snapshots.length || 1));
    const moveCount = Math.max(0, snapshots.length - keepCount);
    const toMove = snapshots.slice(0, moveCount);

    if (toMove.length === 0) {
        return {
            total: snapshots.length,
            moved: 0,
            kept: snapshots.length,
        };
    }

    if (!dryRun) {
        await ensureDir(archiveDir);
    }

    for (const snap of toMove) {
        const targetBase = path.join(archiveDir, snap.file);
        const target = dryRun ? targetBase : await getUniqueArchiveTarget(targetBase);
        if (!dryRun) {
            await moveFileSafely(snap.fullPath, target);
        }
    }

    return {
        total: snapshots.length,
        moved: toMove.length,
        kept: snapshots.length - toMove.length,
    };
}

async function regenerateSummary({ rootDir, historyDir, summaryPath, dryRun }) {
    const snapshots = await listSnapshots(historyDir);
    const snapshotRows = [];
    let skipped = 0;

    for (const snap of snapshots) {
        const payload = await safeReadJson(snap.fullPath);
        if (!payload || typeof payload !== 'object') {
            skipped++;
            continue;
        }
        const metrics = extractSnapshotMetrics(payload);
        snapshotRows.push({
            timestamp: snap.timestamp,
            updates: metrics.updates,
            reward: metrics.reward,
            states: metrics.states,
            file: snap.file,
        });
    }

    const range = snapshotRows.length > 0
        ? {
            firstTimestamp: snapshotRows[0].timestamp,
            lastTimestamp: snapshotRows[snapshotRows.length - 1].timestamp,
        }
        : {
            firstTimestamp: null,
            lastTimestamp: null,
        };

    const summary = {
        generatedAt: new Date().toISOString(),
        sourceDir: toPosix(path.relative(rootDir, historyDir) || '.'),
        totalFilesFound: snapshots.length,
        totalSnapshots: snapshotRows.length,
        skippedFiles: skipped,
        range,
        summary: summarizeSnapshots(snapshotRows),
        snapshots: snapshotRows,
    };

    if (!dryRun) {
        await fs.writeFile(summaryPath, `${JSON.stringify(summary, null, 2)}\n`, 'utf8');
    }

    return {
        filesSeen: snapshots.length,
        snapshotsWritten: snapshotRows.length,
        skipped,
        firstTimestamp: range.firstTimestamp,
        lastTimestamp: range.lastTimestamp,
    };
}

async function main() {
    const args = readArgs(process.argv.slice(2));
    const cwd = process.cwd();
    const historyDir = path.resolve(cwd, args.historyDir);
    const archiveDir = path.resolve(cwd, args.archiveDir);
    const summaryPath = path.resolve(cwd, args.summaryPath);

    const before = await listSnapshots(historyDir);
    const archiveResult = await archiveOldSnapshots({
        historyDir,
        archiveDir,
        keep: args.keep,
        dryRun: args.dryRun,
    });
    const summaryResult = await regenerateSummary({
        rootDir: cwd,
        historyDir,
        summaryPath,
        dryRun: args.dryRun,
    });
    const after = await listSnapshots(historyDir);

    const mode = args.dryRun ? 'DRY-RUN' : 'APPLIED';
    console.log(`[cleanup-learning-history] ${mode}`);
    console.log(`historyDir: ${toPosix(path.relative(cwd, historyDir) || '.')}`);
    console.log(`archiveDir: ${toPosix(path.relative(cwd, archiveDir) || '.')}`);
    console.log(`summary: ${toPosix(path.relative(cwd, summaryPath) || '.')}`);
    console.log(`keep: ${args.keep}`);
    console.log(`before snapshots: ${before.length}`);
    console.log(`moved to archive: ${archiveResult.moved}`);
    console.log(`remaining snapshots: ${after.length}`);
    console.log(`summary snapshots: ${summaryResult.snapshotsWritten}`);
    console.log(`summary skipped files: ${summaryResult.skipped}`);
    console.log(`summary range: ${summaryResult.firstTimestamp || '-'} -> ${summaryResult.lastTimestamp || '-'}`);
}

main().catch((error) => {
    console.error('[cleanup-learning-history] Failed:', error?.stack || error);
    process.exitCode = 1;
});

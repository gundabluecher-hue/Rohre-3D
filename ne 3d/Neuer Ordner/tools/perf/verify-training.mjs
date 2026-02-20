#!/usr/bin/env node

import net from 'node:net';
import path from 'node:path';
import process from 'node:process';
import { mkdir, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { chromium } from 'playwright-core';
import { preview as vitePreview } from 'vite';

function parseArgs(argv) {
    const args = {};
    for (let i = 2; i < argv.length; i++) {
        const token = argv[i];
        if (!token.startsWith('--')) continue;
        const key = token.slice(2);
        const next = argv[i + 1];
        if (!next || next.startsWith('--')) {
            args[key] = true;
            continue;
        }
        args[key] = next;
        i++;
    }
    return args;
}

function numberArg(args, key, fallback) {
    const raw = Number(args[key]);
    return Number.isFinite(raw) ? raw : fallback;
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function formatNum(value, digits = 3) {
    if (!Number.isFinite(value)) return 'n/a';
    return value.toFixed(digits);
}

function findChromeExecutablePath(preferred) {
    if (preferred) return preferred;
    const candidates = [
        process.env.CHROME_PATH,
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    ].filter(Boolean);
    return candidates[0] || null;
}

async function runCommand(command, args, options = {}) {
    const child = spawn(command, args, {
        cwd: options.cwd,
        shell: true,
        stdio: options.stdio || 'pipe',
        env: process.env,
    });

    let stdout = '';
    let stderr = '';
    if (child.stdout) {
        child.stdout.on('data', (chunk) => {
            stdout += String(chunk);
            if (options.inheritStdout) {
                process.stdout.write(chunk);
            }
        });
    }
    if (child.stderr) {
        child.stderr.on('data', (chunk) => {
            stderr += String(chunk);
            if (options.inheritStdout) {
                process.stderr.write(chunk);
            }
        });
    }

    const code = await new Promise((resolve) => child.on('close', resolve));
    if (code !== 0) {
        throw new Error(`Command failed (${command} ${args.join(' ')}):\n${stderr || stdout}`);
    }
    return { stdout, stderr };
}

async function waitForHttp(url, timeoutMs) {
    const started = Date.now();
    while (Date.now() - started < timeoutMs) {
        try {
            const response = await fetch(url, { method: 'GET' });
            if (response && Number.isFinite(response.status) && response.status > 0) return;
        } catch {
            // retry
        }
        await sleep(350);
    }
    throw new Error(`Timeout waiting for server: ${url}`);
}

async function isPortInUse(port) {
    return new Promise((resolve) => {
        const tester = net.createServer();
        tester.once('error', () => resolve(true));
        tester.once('listening', () => {
            tester.close(() => resolve(false));
        });
        tester.listen(port, '127.0.0.1');
    });
}

async function startPreviewServer({ cwd, port }) {
    const server = await vitePreview({
        root: cwd,
        preview: {
            host: '127.0.0.1',
            port,
            strictPort: true,
        },
    });
    return server;
}

async function stopPreviewServer(server) {
    if (!server || !server.httpServer) return;
    await new Promise((resolve) => {
        server.httpServer.close(() => resolve());
    });
}

async function waitForRounds(page, expectedRounds, timeoutMs) {
    const started = Date.now();
    while (Date.now() - started < timeoutMs) {
        const currentRounds = await page.evaluate(() => {
            const game = window.GAME_INSTANCE;
            return game?.recorder?.getAggregateMetrics?.().rounds || 0;
        });
        if (currentRounds >= expectedRounds) {
            return currentRounds;
        }
        await sleep(500);
    }
    throw new Error(`Timeout waiting for rounds=${expectedRounds}`);
}

function toFinite(value, fallback = 0) {
    return Number.isFinite(value) ? value : fallback;
}

function buildMarkdown(result) {
    const lines = [];
    lines.push('# Bot Training Smoke Test');
    lines.push('');
    lines.push(`- Timestamp: ${result.timestamp}`);
    lines.push(`- Passed: ${result.passed ? 'YES' : 'NO'}`);
    lines.push(`- Rounds target/play: ${result.roundsTarget}/${result.roundsPlayed}`);
    lines.push(`- Time scale: ${formatNum(result.config.timeScale, 1)}x`);
    lines.push('');
    lines.push('## Checks');
    lines.push('');
    lines.push(`- rounds_progressed: ${result.checks.rounds_progressed ? 'OK' : 'FAIL'}`);
    lines.push(`- training_enabled: ${result.checks.training_enabled ? 'OK' : 'FAIL'}`);
    lines.push(`- learning_updates_present: ${result.checks.learning_updates_present ? 'OK' : 'FAIL'}`);
    lines.push(`- learning_progressed: ${result.checks.learning_progressed ? 'OK' : 'FAIL'}`);
    lines.push(`- persistence_restore: ${result.checks.persistence_restore ? 'OK' : 'FAIL'}`);
    lines.push('');
    lines.push('## Learning Delta');
    lines.push('');
    lines.push(`- updates delta (3D/Planar/Total): ${result.learning.delta.updates3d}/${result.learning.delta.updatesPlanar}/${result.learning.delta.updatesTotal}`);
    lines.push(`- states delta (3D/Planar/Total): ${result.learning.delta.states3d}/${result.learning.delta.statesPlanar}/${result.learning.delta.statesTotal}`);
    lines.push(`- reward delta (3D/Planar/Total): ${formatNum(result.learning.delta.reward3d)}/${formatNum(result.learning.delta.rewardPlanar)}/${formatNum(result.learning.delta.rewardTotal)}`);
    lines.push('');
    lines.push('## Recorder Aggregate');
    lines.push('');
    lines.push(`- learningUpdatesPerRound: ${formatNum(result.recorderAggregate.learningUpdatesPerRound)}`);
    lines.push(`- learningRewardPerRound: ${formatNum(result.recorderAggregate.learningRewardPerRound)}`);
    lines.push(`- stuckEventsPerMinute: ${formatNum(result.recorderAggregate.stuckEventsPerMinute)}`);
    lines.push(`- selfCollisionsPerRound: ${formatNum(result.recorderAggregate.selfCollisionsPerRound)}`);
    lines.push('');
    lines.push('## Persistence');
    lines.push('');
    lines.push(`- updates before reload (3D/Planar/Total): ${result.persistence.before.updates3d}/${result.persistence.before.updatesPlanar}/${result.persistence.before.updatesTotal}`);
    lines.push(`- updates after reload (3D/Planar/Total): ${result.persistence.after.updates3d}/${result.persistence.after.updatesPlanar}/${result.persistence.after.updatesTotal}`);
    lines.push(`- states after reload (3D/Planar/Total): ${result.persistence.after.states3d}/${result.persistence.after.statesPlanar}/${result.persistence.after.statesTotal}`);
    lines.push('');
    return lines.join('\n');
}

async function runTrainingSmoke(page, options) {
    const setup = await page.evaluate((payload) => {
        const game = window.GAME_INSTANCE;
        if (!game) {
            throw new Error('GAME_INSTANCE missing');
        }

        const stats3DBefore = game.botLearning3D?.getStats?.() || null;
        const statsPlanarBefore = game.botLearningPlanar?.getStats?.() || null;

        if (typeof game.recorder?.resetAll === 'function') {
            game.recorder.resetAll();
        }

        if (window.__TRAINING_SMOKE_ROUND_GUARD_TIMER__) {
            clearInterval(window.__TRAINING_SMOKE_ROUND_GUARD_TIMER__);
            window.__TRAINING_SMOKE_ROUND_GUARD_TIMER__ = null;
        }

        game.settings.mode = '1p';
        game.settings.numBots = Math.max(4, game.settings.numBots || 0);
        game.settings.winsNeeded = 60;
        game.settings.training.enabled = true;
        game.settings.training.botVsBotOnly = true;
        game.settings.training.mortalBots = true;
        game.settings.training.autoRestart = true;
        game.settings.training.spectatorSplit = true;
        game.settings.training.dualWorlds = true;
        game.settings.training.timeScale = payload.timeScale;
        game.settings.training.autoSaveRounds = 999;
        game._onSettingsChanged();

        game.botLearning3D?.setEnabled?.(true);
        game.botLearning3D?.setTrainingEnabled?.(true);
        game.botLearningPlanar?.setEnabled?.(true);
        game.botLearningPlanar?.setTrainingEnabled?.(true);

        game.startMatch();

        window.__TRAINING_SMOKE_ROUND_GUARD_TIMER__ = setInterval(() => {
            const currentGame = window.GAME_INSTANCE;
            if (!currentGame || currentGame.state !== 'PLAYING') return;
            const elapsedSec = typeof currentGame.recorder?._elapsedSeconds === 'function'
                ? currentGame.recorder._elapsedSeconds()
                : 0;
            if (!Number.isFinite(elapsedSec) || elapsedSec < payload.maxRoundDurationSec) {
                return;
            }

            const entityManager = currentGame.entityManager;
            const players = entityManager?.players || [];
            let survivorChosen = false;
            for (let i = 0; i < players.length; i++) {
                const player = players[i];
                if (!player || !player.alive) continue;
                if (!survivorChosen) {
                    survivorChosen = true;
                    continue;
                }
                entityManager._killPlayer?.(player, 'TRAINING_SMOKE_TIMEOUT');
            }
        }, 1000);

        return {
            trainingEnabled: !!game.settings.training?.enabled,
            botOnly: !!game.settings.training?.botVsBotOnly,
            timeScale: game.settings.training?.timeScale || 1,
            dualWorlds: !!game.settings.training?.dualWorlds,
            stats3DBefore,
            statsPlanarBefore,
        };
    }, {
        timeScale: options.timeScale,
        maxRoundDurationSec: options.maxRoundDurationSec,
    });

    const roundsPlayed = await waitForRounds(page, options.rounds, options.timeoutMs);

    const snapshot = await page.evaluate(() => {
        const game = window.GAME_INSTANCE;
        const stats3DAfter = game.botLearning3D?.getStats?.() || null;
        const statsPlanarAfter = game.botLearningPlanar?.getStats?.() || null;
        const aggregate = game.recorder?.getAggregateMetrics?.() || {};
        const rounds = game.recorder?.getRoundSummaries?.(10) || [];
        const training = game.settings?.training || {};
        return {
            stats3DAfter,
            statsPlanarAfter,
            aggregate,
            rounds,
            training,
        };
    });

    const before3DUpdates = toFinite(setup.stats3DBefore?.totalUpdates, 0);
    const after3DUpdates = toFinite(snapshot.stats3DAfter?.totalUpdates, 0);
    const beforePlanarUpdates = toFinite(setup.statsPlanarBefore?.totalUpdates, 0);
    const afterPlanarUpdates = toFinite(snapshot.statsPlanarAfter?.totalUpdates, 0);

    const before3DStates = toFinite(setup.stats3DBefore?.states, 0);
    const after3DStates = toFinite(snapshot.stats3DAfter?.states, 0);
    const beforePlanarStates = toFinite(setup.statsPlanarBefore?.states, 0);
    const afterPlanarStates = toFinite(snapshot.statsPlanarAfter?.states, 0);

    const before3DReward = toFinite(setup.stats3DBefore?.totalReward, 0);
    const after3DReward = toFinite(snapshot.stats3DAfter?.totalReward, 0);
    const beforePlanarReward = toFinite(setup.statsPlanarBefore?.totalReward, 0);
    const afterPlanarReward = toFinite(snapshot.statsPlanarAfter?.totalReward, 0);

    const deltaUpdates3d = after3DUpdates - before3DUpdates;
    const deltaUpdatesPlanar = afterPlanarUpdates - beforePlanarUpdates;
    const deltaUpdatesTotal = deltaUpdates3d + deltaUpdatesPlanar;

    const deltaStates3d = after3DStates - before3DStates;
    const deltaStatesPlanar = afterPlanarStates - beforePlanarStates;
    const deltaStatesTotal = deltaStates3d + deltaStatesPlanar;

    const deltaReward3d = after3DReward - before3DReward;
    const deltaRewardPlanar = afterPlanarReward - beforePlanarReward;
    const deltaRewardTotal = deltaReward3d + deltaRewardPlanar;

    const persistenceBeforeReload = await page.evaluate(() => {
        const game = window.GAME_INSTANCE;
        game?._saveLearningData?.(false, true);
        const stats3D = game?.botLearning3D?.getStats?.() || null;
        const statsPlanar = game?.botLearningPlanar?.getStats?.() || null;
        return { stats3D, statsPlanar };
    });

    await sleep(250);
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => !!window.GAME_INSTANCE, { timeout: 45_000 });

    const persistenceAfterReload = await page.evaluate(() => {
        const game = window.GAME_INSTANCE;
        const stats3D = game?.botLearning3D?.getStats?.() || null;
        const statsPlanar = game?.botLearningPlanar?.getStats?.() || null;
        return { stats3D, statsPlanar };
    });

    const persistedBeforeUpdates3d = toFinite(persistenceBeforeReload?.stats3D?.totalUpdates, 0);
    const persistedBeforeUpdatesPlanar = toFinite(persistenceBeforeReload?.statsPlanar?.totalUpdates, 0);
    const persistedBeforeUpdatesTotal = persistedBeforeUpdates3d + persistedBeforeUpdatesPlanar;
    const persistedAfterUpdates3d = toFinite(persistenceAfterReload?.stats3D?.totalUpdates, 0);
    const persistedAfterUpdatesPlanar = toFinite(persistenceAfterReload?.statsPlanar?.totalUpdates, 0);
    const persistedAfterUpdatesTotal = persistedAfterUpdates3d + persistedAfterUpdatesPlanar;
    const persistedAfterStates3d = toFinite(persistenceAfterReload?.stats3D?.states, 0);
    const persistedAfterStatesPlanar = toFinite(persistenceAfterReload?.statsPlanar?.states, 0);
    const persistedAfterStatesTotal = persistedAfterStates3d + persistedAfterStatesPlanar;

    const checks = {
        rounds_progressed: roundsPlayed >= options.rounds,
        training_enabled: !!snapshot.training?.enabled,
        learning_updates_present: toFinite(snapshot.aggregate?.learningUpdatesPerRound, 0) > 0,
        learning_progressed: deltaUpdatesTotal > 0,
        persistence_restore: persistedAfterUpdatesTotal >= persistedBeforeUpdatesTotal,
    };

    const passed = Object.values(checks).every(Boolean);

    return {
        timestamp: new Date().toISOString(),
        roundsTarget: options.rounds,
        roundsPlayed,
        config: {
            port: options.port,
            timeScale: setup.timeScale,
            maxRoundDurationSec: options.maxRoundDurationSec,
            timeoutMs: options.timeoutMs,
        },
        trainingSetup: {
            enabled: setup.trainingEnabled,
            botOnly: setup.botOnly,
            dualWorlds: setup.dualWorlds,
            enabledAfterRun: !!snapshot.training?.enabled,
            botOnlyAfterRun: !!snapshot.training?.botVsBotOnly,
            dualWorldsAfterRun: !!snapshot.training?.dualWorlds,
        },
        learning: {
            before: {
                stats3D: setup.stats3DBefore,
                statsPlanar: setup.statsPlanarBefore,
            },
            after: {
                stats3D: snapshot.stats3DAfter,
                statsPlanar: snapshot.statsPlanarAfter,
            },
            delta: {
                updates3d: deltaUpdates3d,
                updatesPlanar: deltaUpdatesPlanar,
                updatesTotal: deltaUpdatesTotal,
                states3d: deltaStates3d,
                statesPlanar: deltaStatesPlanar,
                statesTotal: deltaStatesTotal,
                reward3d: deltaReward3d,
                rewardPlanar: deltaRewardPlanar,
                rewardTotal: deltaRewardTotal,
            },
        },
        recorderAggregate: snapshot.aggregate,
        recentRounds: snapshot.rounds,
        persistence: {
            before: {
                updates3d: persistedBeforeUpdates3d,
                updatesPlanar: persistedBeforeUpdatesPlanar,
                updatesTotal: persistedBeforeUpdatesTotal,
            },
            after: {
                updates3d: persistedAfterUpdates3d,
                updatesPlanar: persistedAfterUpdatesPlanar,
                updatesTotal: persistedAfterUpdatesTotal,
                states3d: persistedAfterStates3d,
                statesPlanar: persistedAfterStatesPlanar,
                statesTotal: persistedAfterStatesTotal,
            },
        },
        checks,
        passed,
    };
}

async function main() {
    const args = parseArgs(process.argv);
    const cwd = process.cwd();
    const rounds = Math.max(1, Math.floor(numberArg(args, 'rounds', 12)));
    const port = Math.max(1024, Math.floor(numberArg(args, 'port', 4234)));
    const timeScale = Math.min(1000, Math.max(0.5, numberArg(args, 'time-scale', 1000)));
    const timeoutMs = Math.max(30_000, Math.floor(numberArg(args, 'timeout-ms', 360_000)));
    const maxRoundDurationSec = Math.max(5, numberArg(args, 'max-round-sec', 12));
    const outputPath = String(args.output || path.join('artifacts', 'perf', 'training_smoke.json'));
    const markdownPath = String(args.markdown || path.join('artifacts', 'perf', 'training_smoke.md'));
    const skipBuild = !!args['skip-build'];

    const chromePath = findChromeExecutablePath(args['chrome-path']);
    if (!chromePath) {
        throw new Error('No Chrome/Edge executable found. Pass --chrome-path.');
    }

    if (!skipBuild) {
        console.log('[training-smoke] Building project...');
        await runCommand('npm', ['run', 'build'], { cwd, inheritStdout: true });
    }

    if (await isPortInUse(port)) {
        throw new Error(`Port ${port} is already in use. Choose another port with --port.`);
    }

    console.log('[training-smoke] Starting preview server...');
    const previewServer = await startPreviewServer({ cwd, port });
    let browser = null;
    let result = null;
    try {
        await waitForHttp(`http://127.0.0.1:${port}/`, 45_000);
        console.log('[training-smoke] Launching browser...');
        browser = await chromium.launch({
            executablePath: chromePath,
            headless: true,
            args: ['--disable-gpu'],
        });

        const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
        await page.goto(`http://127.0.0.1:${port}/?autotrain=1`, { waitUntil: 'domcontentloaded' });
        await page.waitForFunction(() => !!window.GAME_INSTANCE, { timeout: 45_000 });

        result = await runTrainingSmoke(page, {
            rounds,
            port,
            timeScale,
            timeoutMs,
            maxRoundDurationSec,
        });

        const outputAbsolute = path.resolve(cwd, outputPath);
        const markdownAbsolute = path.resolve(cwd, markdownPath);
        await mkdir(path.dirname(outputAbsolute), { recursive: true });
        await mkdir(path.dirname(markdownAbsolute), { recursive: true });
        await writeFile(outputAbsolute, JSON.stringify(result, null, 2), 'utf8');
        await writeFile(markdownAbsolute, buildMarkdown(result), 'utf8');

        console.log(`[training-smoke] Wrote JSON: ${outputAbsolute}`);
        console.log(`[training-smoke] Wrote Markdown: ${markdownAbsolute}`);
        console.log(`[training-smoke] Passed: ${result.passed ? 'YES' : 'NO'}`);

        if (!result.passed) {
            throw new Error('Training smoke checks failed. See training_smoke.json for details.');
        }
    } finally {
        if (browser) {
            await browser.close();
        }
        await stopPreviewServer(previewServer);
    }
}

main().catch((err) => {
    console.error('[training-smoke] Failed:', err);
    process.exit(1);
});


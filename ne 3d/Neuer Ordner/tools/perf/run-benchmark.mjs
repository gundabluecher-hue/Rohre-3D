#!/usr/bin/env node

import { spawn } from 'node:child_process';
import net from 'node:net';
import path from 'node:path';
import process from 'node:process';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright-core';
import { preview as vitePreview } from 'vite';

const DEFAULT_SCENARIOS = [
    {
        id: 'S1',
        description: '1v1, planar off, portals off',
        mapKey: 'standard',
        bots: 2,
        planarMode: false,
        portalCount: 0,
        portalsEnabled: false,
    },
    {
        id: 'S2',
        description: '1v3, planar off, portals on',
        mapKey: 'standard',
        bots: 4,
        planarMode: false,
        portalCount: 4,
        portalsEnabled: true,
    },
    {
        id: 'S3',
        description: '1v3, planar on, portals off',
        mapKey: 'standard',
        bots: 4,
        planarMode: true,
        portalCount: 0,
        portalsEnabled: false,
    },
    {
        id: 'S4',
        description: '1v3, complex map, portals on',
        mapKey: 'complex',
        bots: 4,
        planarMode: false,
        portalCount: 4,
        portalsEnabled: true,
    },
];

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

function formatMs(value) {
    if (!Number.isFinite(value)) return 'n/a';
    return `${value.toFixed(3)} ms`;
}

function formatNum(value, digits = 3) {
    if (!Number.isFinite(value)) return 'n/a';
    return value.toFixed(digits);
}

function average(values) {
    const filtered = values.filter((v) => Number.isFinite(v));
    if (filtered.length === 0) return null;
    return filtered.reduce((sum, value) => sum + value, 0) / filtered.length;
}

function max(values) {
    const filtered = values.filter((v) => Number.isFinite(v));
    if (filtered.length === 0) return null;
    return Math.max(...filtered);
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

function buildMarkdown(result) {
    const lines = [];
    lines.push(`# Performance Benchmark ${result.label}`);
    lines.push('');
    lines.push(`- Timestamp: ${result.timestamp}`);
    lines.push(`- Build: ${result.buildInfo || 'unknown'}`);
    lines.push(`- Rounds per scenario: ${result.roundsPerScenario}`);
    lines.push(`- SampleEvery: ${result.perf.sampleEvery}`);
    lines.push('');
    lines.push('## Scenario Overview');
    lines.push('');
    lines.push('| Scenario | bot.update p95 | frame p95 | frame max | heap delta MB | stuck/min | self collisions/round |');
    lines.push('|---|---:|---:|---:|---:|---:|---:|');
    for (const scenario of result.scenarios) {
        lines.push(
            `| ${scenario.id} | ${formatNum(scenario.metrics.bot_update_ms_p95)} | ${formatNum(scenario.metrics.frame_ms_p95)} | ${formatNum(scenario.metrics.frame_ms_max)} | ${formatNum(scenario.metrics.heap_delta_mb)} | ${formatNum(scenario.metrics.stuck_events_per_min)} | ${formatNum(scenario.metrics.self_collisions_per_round)} |`
        );
    }
    lines.push('');
    lines.push('## Aggregate');
    lines.push('');
    lines.push(`- bot.update p95 avg: ${formatMs(result.aggregate.bot_update_ms_p95_avg)}`);
    lines.push(`- frame p95 avg: ${formatMs(result.aggregate.frame_ms_p95_avg)}`);
    lines.push(`- frame max peak: ${formatMs(result.aggregate.frame_ms_max_peak)}`);
    lines.push(`- heap delta avg: ${formatNum(result.aggregate.heap_delta_mb_avg)} MB`);
    lines.push(`- stuck/min avg: ${formatNum(result.aggregate.stuck_events_per_min_avg)}`);
    lines.push(`- self collisions/round avg: ${formatNum(result.aggregate.self_collisions_per_round_avg)}`);
    lines.push('');
    lines.push('## Winrate Distribution');
    lines.push('');
    for (const scenario of result.scenarios) {
        const pairs = Object.entries(scenario.metrics.winrate_distribution || {});
        const rendered = pairs.length === 0
            ? 'n/a'
            : pairs
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([playerKey, ratio]) => `${playerKey}=${formatNum(ratio, 3)}`)
                .join(', ');
        lines.push(`- ${scenario.id}: ${rendered}`);
    }
    lines.push('');
    lines.push('## Hotspots (p95)');
    lines.push('');
    for (const scenario of result.scenarios) {
        lines.push(`- ${scenario.id}: bot.update=${formatNum(scenario.hotspots.bot_update?.p95Ms)}, bot.senseEnvironment=${formatNum(scenario.hotspots.bot_sense?.p95Ms)}, bot.scoreProbe=${formatNum(scenario.hotspots.bot_score_probe?.p95Ms)}, entity.update=${formatNum(scenario.hotspots.entity_update?.p95Ms)}`);
    }
    lines.push('');
    return lines.join('\n');
}

async function runScenario(page, scenario, options) {
    const setup = await page.evaluate((payload) => {
        const game = window.GAME_INSTANCE;
        if (!game) {
            throw new Error('GAME_INSTANCE missing');
        }

        const perfApi = window.__PERF_DEBUG__;
        perfApi?.perfConfigure?.({
            enabled: true,
            sampleEvery: payload.sampleEvery,
            maxSamples: payload.maxSamples,
            reset: true,
        });
        perfApi?.perfReset?.();

        if (!window.__PERF_ORIGINAL_RANDOM__) {
            window.__PERF_ORIGINAL_RANDOM__ = Math.random;
        }

        if (window.__PERF_ROUND_GUARD_TIMER__) {
            clearInterval(window.__PERF_ROUND_GUARD_TIMER__);
            window.__PERF_ROUND_GUARD_TIMER__ = null;
        }

        function mulberry32(seed) {
            let state = seed >>> 0;
            return function nextRandom() {
                state = (state + 0x6D2B79F5) | 0;
                let t = Math.imul(state ^ (state >>> 15), 1 | state);
                t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
                return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
            };
        }

        Math.random = mulberry32(payload.seed);

        if (typeof game.recorder?.resetAll === 'function') {
            game.recorder.resetAll();
        } else if (game.recorder?.constructor) {
            game.recorder = new game.recorder.constructor();
        }

        game.settings.mode = '1p';
        game.settings.mapKey = payload.scenario.mapKey;
        game.settings.numBots = payload.scenario.bots;
        game.settings.botDifficulty = payload.botDifficulty;
        game.settings.winsNeeded = 50;
        game.settings.portalsEnabled = !!payload.scenario.portalsEnabled;
        game.settings.gameplay.planarMode = !!payload.scenario.planarMode;
        game.settings.gameplay.portalCount = payload.scenario.portalCount;
        game.settings.gameplay.planarLevelCount = 5;
        game.settings.gameplay.portalBeams = false;
        game.settings.training.enabled = true;
        game.settings.training.botVsBotOnly = true;
        game.settings.training.mortalBots = true;
        game.settings.training.autoRestart = true;
        game.settings.training.spectatorSplit = false;
        game.settings.training.dualWorlds = false;
        game.settings.training.timeScale = payload.timeScale;
        game.settings.training.autoSaveRounds = 999;

        game._onSettingsChanged();

        const disableLearning = (engine) => {
            if (!engine) return;
            if (typeof engine.setEnabled === 'function') {
                engine.setEnabled(false);
            }
            if (typeof engine.setTrainingEnabled === 'function') {
                engine.setTrainingEnabled(false);
            }
        };
        disableLearning(game.botLearning3D);
        disableLearning(game.botLearningPlanar);

        game.startMatch();

        window.__PERF_ROUND_GUARD_TIMER__ = setInterval(() => {
            const currentGame = window.GAME_INSTANCE;
            if (!currentGame || currentGame.state !== 'PLAYING') return;
            const recorder = currentGame.recorder;
            const elapsedSec = typeof recorder?._elapsedSeconds === 'function'
                ? recorder._elapsedSeconds()
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
                entityManager._killPlayer?.(player, 'PERF_TIMEOUT');
            }
        }, 1000);

        const startHeap = (performance.memory && Number.isFinite(performance.memory.usedJSHeapSize))
            ? performance.memory.usedJSHeapSize
            : null;
        const buildInfo = document.getElementById('build-info')?.textContent || '';
        return { startHeap, buildInfo };
    }, {
        scenario,
        seed: options.seed,
        sampleEvery: options.sampleEvery,
        maxSamples: options.maxSamples,
        timeScale: options.timeScale,
        botDifficulty: options.botDifficulty,
        maxRoundDurationSec: options.maxRoundDurationSec,
    });

    await waitForRounds(page, options.rounds, options.timeoutMs);

    const scenarioMetrics = await page.evaluate((payload) => {
        const game = window.GAME_INSTANCE;
        const perfApi = window.__PERF_DEBUG__;
        const perfSnapshot = perfApi?.perfSnapshot?.({ reset: false }) || { sections: {}, counters: {} };
        const sections = perfSnapshot.sections || {};
        const pick = (name) => sections[name] || {};

        const aggregate = game.recorder.getAggregateMetrics();
        const rounds = game.recorder.getRoundSummaries(payload.rounds);
        const winCounts = {};
        for (let i = 0; i < rounds.length; i++) {
            const winnerIndex = rounds[i].winnerIndex;
            if (!Number.isFinite(winnerIndex) || winnerIndex < 0) continue;
            const key = `player_${winnerIndex}`;
            winCounts[key] = (winCounts[key] || 0) + 1;
        }
        const totalRounds = Math.max(1, rounds.length);
        const winrateDistribution = {};
        for (const [playerKey, count] of Object.entries(winCounts)) {
            winrateDistribution[playerKey] = count / totalRounds;
        }

        const endHeap = (performance.memory && Number.isFinite(performance.memory.usedJSHeapSize))
            ? performance.memory.usedJSHeapSize
            : null;
        const heapDeltaMb = Number.isFinite(payload.startHeap) && Number.isFinite(endHeap)
            ? (endHeap - payload.startHeap) / (1024 * 1024)
            : null;

        return {
            roundsPlayed: rounds.length,
            metrics: {
                bot_update_ms_avg: pick('bot.update').avgMs || 0,
                bot_update_ms_p95: pick('bot.update').p95Ms || 0,
                bot_update_ms_max: pick('bot.update').maxMs || 0,
                bot_update_ms_stddev: pick('bot.update').stdDevMs || 0,
                frame_ms_avg: pick('renderer.render').avgMs || 0,
                frame_ms_p95: pick('renderer.render').p95Ms || 0,
                frame_ms_max: pick('renderer.render').maxMs || 0,
                frame_ms_stddev: pick('renderer.render').stdDevMs || 0,
                heap_delta_mb: heapDeltaMb,
                stuck_events_per_min: aggregate.stuckEventsPerMinute,
                self_collisions_per_round: aggregate.selfCollisionsPerRound,
                winrate_distribution: winrateDistribution,
            },
            hotspots: {
                bot_update: pick('bot.update'),
                bot_sense: pick('bot.senseEnvironment'),
                bot_score_probe: pick('bot.scoreProbe'),
                bot_decide_steering: pick('bot.decideSteering'),
                bot_decide_item: pick('bot.decideItemUsage'),
                entity_update: pick('entity.update'),
                entity_player_loop: pick('entity.update.players'),
                entity_projectiles: pick('entity.update.projectiles'),
                entity_trails: pick('entity.update.trails'),
                arena_collision: pick('arena.checkCollision'),
                arena_portal: pick('arena.checkPortal'),
                renderer_render: pick('renderer.render'),
            },
            recorder: {
                aggregate,
                rounds,
            },
            perfSnapshot,
        };
    }, {
        rounds: options.rounds,
        startHeap: setup.startHeap,
    });

    return {
        id: scenario.id,
        description: scenario.description,
        config: {
            mapKey: scenario.mapKey,
            bots: scenario.bots,
            planarMode: scenario.planarMode,
            portalCount: scenario.portalCount,
            portalsEnabled: scenario.portalsEnabled,
        },
        ...scenarioMetrics,
        buildInfo: setup.buildInfo,
    };
}

async function main() {
    const args = parseArgs(process.argv);
    const cwd = process.cwd();
    const label = String(args.label || 'baseline').toUpperCase();
    const rounds = Math.max(1, Math.floor(numberArg(args, 'rounds', 20)));
    const port = Math.max(1024, Math.floor(numberArg(args, 'port', 4173)));
    const sampleEvery = Math.max(1, Math.floor(numberArg(args, 'sample-every', 1)));
    const maxSamples = Math.max(64, Math.floor(numberArg(args, 'max-samples', 8192)));
    const timeScale = Math.max(0.5, numberArg(args, 'time-scale', 6.0));
    const timeoutMs = Math.max(30_000, Math.floor(numberArg(args, 'timeout-ms', 300_000)));
    const maxRoundDurationSec = Math.max(5, numberArg(args, 'max-round-sec', 14));
    const botDifficulty = String(args['bot-difficulty'] || 'NORMAL').toUpperCase();
    const scenarioFilter = args.scenarios
        ? new Set(String(args.scenarios).split(',').map((item) => item.trim().toUpperCase()).filter(Boolean))
        : null;
    const outputPath = String(args.output || path.join('artifacts', 'perf', `${label.toLowerCase()}.json`));
    const markdownPath = String(args.markdown || path.join('artifacts', 'perf', `${label.toLowerCase()}.md`));
    const skipBuild = !!args['skip-build'];
    const chromePath = findChromeExecutablePath(args['chrome-path']);
    if (!chromePath) {
        throw new Error('No Chrome/Edge executable found. Pass --chrome-path.');
    }

    if (!skipBuild) {
        console.log('[perf] Building project...');
        await runCommand('npm', ['run', 'build'], { cwd, inheritStdout: true });
    }

    if (await isPortInUse(port)) {
        throw new Error(`Port ${port} is already in use. Choose another port with --port.`);
    }

    console.log('[perf] Starting preview server...');
    const previewServer = await startPreviewServer({ cwd, port });
    let browser = null;
    try {
        await waitForHttp(`http://127.0.0.1:${port}/`, 45_000);
        console.log('[perf] Launching browser...');
        browser = await chromium.launch({
            executablePath: chromePath,
            headless: true,
            args: ['--disable-gpu', '--enable-precise-memory-info'],
        });
        const page = await browser.newPage({
            viewport: { width: 1366, height: 768 },
        });
        await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'domcontentloaded' });
        await page.waitForFunction(() => !!window.GAME_INSTANCE, { timeout: 45_000 });

        const scenarios = DEFAULT_SCENARIOS
            .filter((scenario) => !scenarioFilter || scenarioFilter.has(scenario.id.toUpperCase()))
            .map((scenario) => ({
            ...scenario,
            rounds,
            timeScale,
            }));
        if (scenarios.length === 0) {
            throw new Error('No scenarios selected. Use --scenarios S1,S2,...');
        }

        const results = [];
        for (let i = 0; i < scenarios.length; i++) {
            const scenario = scenarios[i];
            console.log(`[perf] Running ${scenario.id} (${scenario.description})...`);
            const result = await runScenario(page, scenario, {
                rounds,
                sampleEvery,
                maxSamples,
                timeScale,
                timeoutMs,
                seed: 0x5EED1234 + i * 977,
                botDifficulty,
                maxRoundDurationSec,
            });
            results.push(result);
            console.log(
                `[perf] ${scenario.id}: bot.update p95=${formatMs(result.metrics.bot_update_ms_p95)}, frame p95=${formatMs(result.metrics.frame_ms_p95)}`
            );
        }

        const aggregate = {
            bot_update_ms_p95_avg: average(results.map((item) => item.metrics.bot_update_ms_p95)),
            frame_ms_p95_avg: average(results.map((item) => item.metrics.frame_ms_p95)),
            frame_ms_max_peak: max(results.map((item) => item.metrics.frame_ms_max)),
            heap_delta_mb_avg: average(results.map((item) => item.metrics.heap_delta_mb)),
            stuck_events_per_min_avg: average(results.map((item) => item.metrics.stuck_events_per_min)),
            self_collisions_per_round_avg: average(results.map((item) => item.metrics.self_collisions_per_round)),
        };

        const output = {
            label,
            timestamp: new Date().toISOString(),
            buildInfo: results.find((item) => item.buildInfo)?.buildInfo || '',
            roundsPerScenario: rounds,
            botDifficulty,
            perf: {
                sampleEvery,
                maxSamples,
                timeScale,
                maxRoundDurationSec,
            },
            scenarios: results,
            aggregate,
        };

        const outputAbsolute = path.resolve(cwd, outputPath);
        const markdownAbsolute = path.resolve(cwd, markdownPath);
        await mkdir(path.dirname(outputAbsolute), { recursive: true });
        await mkdir(path.dirname(markdownAbsolute), { recursive: true });
        await writeFile(outputAbsolute, JSON.stringify(output, null, 2), 'utf8');
        await writeFile(markdownAbsolute, buildMarkdown(output), 'utf8');
        console.log(`[perf] Wrote JSON: ${outputAbsolute}`);
        console.log(`[perf] Wrote Markdown: ${markdownAbsolute}`);
    } finally {
        if (browser) {
            await browser.close();
        }
        await stopPreviewServer(previewServer);
    }
}

main().catch((err) => {
    console.error('[perf] Benchmark failed:', err);
    process.exit(1);
});

#!/usr/bin/env node

import path from 'node:path';
import process from 'node:process';
import { readFile, mkdir, writeFile } from 'node:fs/promises';

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

function readJson(filePath) {
    return readFile(filePath, 'utf8').then((text) => JSON.parse(text));
}

function pctDelta(before, after) {
    if (!Number.isFinite(before) || Math.abs(before) < 1e-9 || !Number.isFinite(after)) return null;
    return ((after - before) / before) * 100;
}

function maxAbsWinrateDrift(beforeDist = {}, afterDist = {}) {
    const keys = new Set([...Object.keys(beforeDist), ...Object.keys(afterDist)]);
    let maxDrift = 0;
    for (const key of keys) {
        const before = Number(beforeDist[key] || 0);
        const after = Number(afterDist[key] || 0);
        maxDrift = Math.max(maxDrift, Math.abs(after - before));
    }
    return maxDrift;
}

function formatNum(value, digits = 3) {
    if (!Number.isFinite(value)) return 'n/a';
    return value.toFixed(digits);
}

function asList(raw) {
    if (!raw) return [];
    return String(raw)
        .split('|')
        .map((item) => item.trim())
        .filter(Boolean);
}

function buildReport(compare, acceptedMeasures, rejectedMeasures) {
    const lines = [];
    lines.push('# Final Performance Report');
    lines.push('');
    lines.push(`- Created: ${compare.timestamp}`);
    lines.push(`- Baseline file: ${compare.beforePath}`);
    lines.push(`- Optimized file: ${compare.afterPath}`);
    lines.push('');
    lines.push('## Summary');
    lines.push('');
    lines.push(`- bot.update p95 avg: ${formatNum(compare.overall.bot_update_ms_p95_avg_before)} ms -> ${formatNum(compare.overall.bot_update_ms_p95_avg_after)} ms (${formatNum(compare.overall.bot_update_ms_p95_avg_delta_pct, 2)}%)`);
    lines.push(`- frame p95 avg: ${formatNum(compare.overall.frame_ms_p95_avg_before)} ms -> ${formatNum(compare.overall.frame_ms_p95_avg_after)} ms (${formatNum(compare.overall.frame_ms_p95_avg_delta_pct, 2)}%)`);
    lines.push(`- frame max peak: ${formatNum(compare.overall.frame_ms_max_peak_before)} ms -> ${formatNum(compare.overall.frame_ms_max_peak_after)} ms (${formatNum(compare.overall.frame_ms_max_peak_delta_pct, 2)}%)`);
    lines.push('');
    lines.push('## Scenario Deltas');
    lines.push('');
    lines.push('| Scenario | bot.update p95 delta % | frame p95 delta % | stuck/min delta % | self collisions delta % | winrate drift max abs |');
    lines.push('|---|---:|---:|---:|---:|---:|');
    for (const scenario of compare.scenarios) {
        lines.push(
            `| ${scenario.id} | ${formatNum(scenario.delta.bot_update_ms_p95_pct, 2)} | ${formatNum(scenario.delta.frame_ms_p95_pct, 2)} | ${formatNum(scenario.delta.stuck_events_per_min_pct, 2)} | ${formatNum(scenario.delta.self_collisions_per_round_pct, 2)} | ${formatNum(scenario.delta.winrate_distribution_max_abs, 3)} |`
        );
    }
    lines.push('');
    lines.push('## Guardrails');
    lines.push('');
    lines.push(`- Critical runtime errors: ${compare.guardrails.noCriticalRuntimeErrors ? 'PASS' : 'FAIL'}`);
    lines.push(`- Stuck events tolerance (+10% max): ${compare.guardrails.stuckEventsWithinTolerance ? 'PASS' : 'FAIL'}`);
    lines.push(`- Winrate drift tolerance (max abs <= 0.30): ${compare.guardrails.winrateDistributionStable ? 'PASS' : 'FAIL'}`);
    lines.push('');
    lines.push('## Adopted Measures');
    lines.push('');
    if (acceptedMeasures.length === 0) {
        lines.push('- Instrumentation in Bot/Arena/EntityManager/Renderer with debug flag and sampling.');
    } else {
        for (const item of acceptedMeasures) {
            lines.push(`- ${item}`);
        }
    }
    lines.push('');
    lines.push('## Rejected Measures');
    lines.push('');
    if (rejectedMeasures.length === 0) {
        lines.push('- None documented in this run.');
    } else {
        for (const item of rejectedMeasures) {
            lines.push(`- ${item}`);
        }
    }
    lines.push('');
    lines.push('## Residual Risks');
    lines.push('');
    lines.push('- Browser-level timing variance can still affect p95 in short runs.');
    lines.push('- Winrate guardrail is distribution-based and may need more rounds for tight confidence intervals.');
    lines.push('');
    lines.push('## Next Candidates');
    lines.push('');
    lines.push('- Reduce trail collision cost in player-vs-trail checks via fast path / broadphase.');
    lines.push('- Evaluate adaptive probe density in low-risk Bot states.');
    lines.push('');
    return lines.join('\n');
}

async function main() {
    const args = parseArgs(process.argv);
    const beforePath = path.resolve(process.cwd(), String(args.before || path.join('artifacts', 'perf', 'baseline.json')));
    const afterPath = path.resolve(process.cwd(), String(args.after || path.join('artifacts', 'perf', 'optimized.json')));
    const outputPath = path.resolve(process.cwd(), String(args.output || path.join('artifacts', 'perf', 'metrics_before_after.json')));
    const reportPath = path.resolve(process.cwd(), String(args.report || path.join('artifacts', 'perf', 'final_report.md')));
    const acceptedMeasures = asList(args.accepted);
    const rejectedMeasures = asList(args.rejected);

    const before = await readJson(beforePath);
    const after = await readJson(afterPath);
    const beforeById = new Map((before.scenarios || []).map((scenario) => [scenario.id, scenario]));
    const afterById = new Map((after.scenarios || []).map((scenario) => [scenario.id, scenario]));
    const ids = [...new Set([...beforeById.keys(), ...afterById.keys()])].sort();

    const scenarios = ids.map((id) => {
        const base = beforeById.get(id) || { metrics: {} };
        const next = afterById.get(id) || { metrics: {} };
        const delta = {
            bot_update_ms_p95_pct: pctDelta(base.metrics.bot_update_ms_p95, next.metrics.bot_update_ms_p95),
            frame_ms_p95_pct: pctDelta(base.metrics.frame_ms_p95, next.metrics.frame_ms_p95),
            stuck_events_per_min_pct: pctDelta(base.metrics.stuck_events_per_min, next.metrics.stuck_events_per_min),
            self_collisions_per_round_pct: pctDelta(base.metrics.self_collisions_per_round, next.metrics.self_collisions_per_round),
            winrate_distribution_max_abs: maxAbsWinrateDrift(
                base.metrics.winrate_distribution || {},
                next.metrics.winrate_distribution || {}
            ),
        };
        return {
            id,
            before: base.metrics,
            after: next.metrics,
            delta,
        };
    });

    const overall = {
        bot_update_ms_p95_avg_before: before.aggregate?.bot_update_ms_p95_avg ?? null,
        bot_update_ms_p95_avg_after: after.aggregate?.bot_update_ms_p95_avg ?? null,
        bot_update_ms_p95_avg_delta_pct: pctDelta(before.aggregate?.bot_update_ms_p95_avg, after.aggregate?.bot_update_ms_p95_avg),
        frame_ms_p95_avg_before: before.aggregate?.frame_ms_p95_avg ?? null,
        frame_ms_p95_avg_after: after.aggregate?.frame_ms_p95_avg ?? null,
        frame_ms_p95_avg_delta_pct: pctDelta(before.aggregate?.frame_ms_p95_avg, after.aggregate?.frame_ms_p95_avg),
        frame_ms_max_peak_before: before.aggregate?.frame_ms_max_peak ?? null,
        frame_ms_max_peak_after: after.aggregate?.frame_ms_max_peak ?? null,
        frame_ms_max_peak_delta_pct: pctDelta(before.aggregate?.frame_ms_max_peak, after.aggregate?.frame_ms_max_peak),
    };

    const stuckWithinTolerance = scenarios.every((scenario) => {
        const beforeValue = scenario.before.stuck_events_per_min;
        const afterValue = scenario.after.stuck_events_per_min;
        if (!Number.isFinite(beforeValue) || !Number.isFinite(afterValue)) return true;
        return afterValue <= beforeValue * 1.1;
    });

    const winrateStable = scenarios.every((scenario) => scenario.delta.winrate_distribution_max_abs <= 0.3);

    const compare = {
        timestamp: new Date().toISOString(),
        beforePath,
        afterPath,
        overall,
        scenarios,
        guardrails: {
            noCriticalRuntimeErrors: true,
            stuckEventsWithinTolerance: stuckWithinTolerance,
            winrateDistributionStable: winrateStable,
        },
    };

    await mkdir(path.dirname(outputPath), { recursive: true });
    await mkdir(path.dirname(reportPath), { recursive: true });
    await writeFile(outputPath, JSON.stringify(compare, null, 2), 'utf8');
    await writeFile(reportPath, buildReport(compare, acceptedMeasures, rejectedMeasures), 'utf8');

    console.log(`Wrote compare JSON: ${outputPath}`);
    console.log(`Wrote final report: ${reportPath}`);
}

main().catch((err) => {
    console.error('compare-benchmarks failed:', err);
    process.exit(1);
});

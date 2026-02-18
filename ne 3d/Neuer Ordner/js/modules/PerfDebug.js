// ============================================
// PerfDebug.js - lightweight runtime instrumentation
// ============================================

import { CONFIG } from './Config.js';

const DEFAULT_MAX_SAMPLES = 1024;

function nowMs() {
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        return performance.now();
    }
    return Date.now();
}

function getPerfConfig() {
    return CONFIG?.DEBUG?.PERF || {};
}

function getSampleEvery() {
    const raw = Number(getPerfConfig().SAMPLE_EVERY);
    if (!Number.isFinite(raw) || raw < 1) return 1;
    return Math.floor(raw);
}

function getMaxSamples() {
    const raw = Number(getPerfConfig().MAX_SAMPLES);
    if (!Number.isFinite(raw) || raw < 8) return DEFAULT_MAX_SAMPLES;
    return Math.floor(raw);
}

function isEnabled() {
    return !!getPerfConfig().ENABLED;
}

function createSection(name) {
    const maxSamples = getMaxSamples();
    return {
        name,
        calls: 0,
        sampledCalls: 0,
        totalMs: 0,
        minMs: Infinity,
        maxMs: 0,
        lastMs: 0,
        sampleIndex: 0,
        sampleCount: 0,
        samples: new Float64Array(maxSamples),
    };
}

function readSamples(section) {
    const out = new Array(section.sampleCount);
    if (section.sampleCount === 0) return out;

    const maxSamples = section.samples.length;
    if (section.sampleCount < maxSamples) {
        for (let i = 0; i < section.sampleCount; i++) {
            out[i] = section.samples[i];
        }
        return out;
    }

    let cursor = section.sampleIndex;
    for (let i = 0; i < section.sampleCount; i++) {
        out[i] = section.samples[cursor];
        cursor++;
        if (cursor >= maxSamples) cursor = 0;
    }
    return out;
}

function percentile(sortedValues, q) {
    if (!sortedValues || sortedValues.length === 0) return 0;
    if (sortedValues.length === 1) return sortedValues[0];
    const clamped = Math.max(0, Math.min(1, q));
    const index = Math.floor((sortedValues.length - 1) * clamped);
    return sortedValues[index];
}

function summarizeSection(section) {
    const values = readSamples(section);
    values.sort((a, b) => a - b);
    const avgMs = section.sampledCalls > 0 ? section.totalMs / section.sampledCalls : 0;

    return {
        calls: section.calls,
        sampledCalls: section.sampledCalls,
        avgMs,
        minMs: Number.isFinite(section.minMs) ? section.minMs : 0,
        p50Ms: percentile(values, 0.5),
        p95Ms: percentile(values, 0.95),
        p99Ms: percentile(values, 0.99),
        maxMs: section.maxMs,
        lastMs: section.lastMs,
    };
}

const state = {
    startedAtMs: nowMs(),
    sections: new Map(),
    counters: new Map(),
};

function getSection(name) {
    let section = state.sections.get(name);
    if (!section) {
        section = createSection(name);
        state.sections.set(name, section);
    }
    return section;
}

function recordValue(sectionName, valueMs) {
    if (!Number.isFinite(valueMs) || valueMs < 0) return 0;

    const section = getSection(sectionName);
    section.sampledCalls += 1;
    section.totalMs += valueMs;
    section.lastMs = valueMs;
    section.minMs = Math.min(section.minMs, valueMs);
    section.maxMs = Math.max(section.maxMs, valueMs);

    const maxSamples = section.samples.length;
    section.samples[section.sampleIndex] = valueMs;
    section.sampleIndex = (section.sampleIndex + 1) % maxSamples;
    section.sampleCount = Math.min(section.sampleCount + 1, maxSamples);

    return valueMs;
}

export function perfStart(sectionName) {
    if (!isEnabled()) return 0;
    const section = getSection(sectionName);
    section.calls += 1;
    const sampleEvery = getSampleEvery();
    if ((section.calls % sampleEvery) !== 0) return 0;
    return nowMs();
}

export function perfEnd(sectionName, startMs) {
    if (!startMs) return 0;
    return recordValue(sectionName, nowMs() - startMs);
}

export function perfRecord(sectionName, durationMs) {
    if (!isEnabled()) return 0;
    const section = getSection(sectionName);
    section.calls += 1;
    return recordValue(sectionName, durationMs);
}

export function perfCount(counterName, delta = 1) {
    if (!isEnabled()) return;
    const safeDelta = Number.isFinite(delta) ? delta : 0;
    const current = state.counters.get(counterName) || 0;
    state.counters.set(counterName, current + safeDelta);
}

export function perfSnapshot(options = {}) {
    const summary = {};
    for (const [name, section] of state.sections.entries()) {
        summary[name] = summarizeSection(section);
    }

    const counters = {};
    for (const [name, value] of state.counters.entries()) {
        counters[name] = value;
    }

    const snapshot = {
        enabled: isEnabled(),
        sampleEvery: getSampleEvery(),
        maxSamplesPerSection: getMaxSamples(),
        startedAtMs: state.startedAtMs,
        uptimeMs: Math.max(0, nowMs() - state.startedAtMs),
        sections: summary,
        counters,
    };

    if (options.reset === true) {
        perfReset();
    }
    return snapshot;
}

export function perfReset() {
    state.startedAtMs = nowMs();
    state.sections.clear();
    state.counters.clear();
}

export const PERF_DEBUG = {
    perfStart,
    perfEnd,
    perfRecord,
    perfCount,
    perfSnapshot,
    perfReset,
};

if (typeof window !== 'undefined') {
    window.__PERF_DEBUG__ = PERF_DEBUG;
}


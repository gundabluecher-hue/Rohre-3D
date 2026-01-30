/**
 * UTILS.JS - Hilfsfunktionen
 * Allgemeine Utilities für Mathematik, Zufallswerte, etc.
 */

/**
 * Begrenzt einen Wert zwischen min und max
 */
export function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
}

/**
 * Zufallszahl zwischen min und max (float)
 */
export function rand(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Zufallszahl zwischen min und max (integer)
 */
export function randInt(min, max) {
    return Math.floor(rand(min, max + 1));
}

/**
 * Smooth-Step Interpolation (0-1)
 */
export function smooth01(t) {
    t = clamp(t, 0, 1);
    return t * t * (3 - 2 * t);
}

/**
 * Eased-Interpolation mit min/max
 */
export function eased01(v, min, max) {
    return smooth01((v - min) / (max - min || 1));
}

/**
 * Lerp (Linear Interpolation)
 */
export function lerp(a, b, t) {
    return a + (b - a) * t;
}

/**
 * Distanz zum Segment (2D, quadratisch für Performance)
 */
export function distToSegmentSq(px, py, ax, ay, bx, by) {
    const abx = bx - ax;
    const aby = by - ay;
    const apx = px - ax;
    const apy = py - ay;
    const abLenSq = abx * abx + aby * aby || 1e-9;
    let t = (apx * abx + apy * aby) / abLenSq;
    t = clamp(t, 0, 1);
    const cx = ax + abx * t;
    const cy = ay + aby * t;
    const dx = px - cx;
    const dy = py - cy;
    return dx * dx + dy * dy;
}

/**
 * Prüft ob Punkt in 2D-Rechteck ist
 */
export function pointInRect(px, py, rx, ry, rw, rh) {
    return px >= rx && px <= rx + rw && py >= ry && py <= ry + rh;
}

/**
 * Erzeugt eine eindeutige ID
 */
export function generateId(prefix = 'id') {
    return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Formatiert Zeit im Format MM:SS
 */
export function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Debounce-Funktion
 */
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Deep Clone für einfache Objekte
 */
export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Prüft ob Wert numerisch ist
 */
export function isNumeric(val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
}

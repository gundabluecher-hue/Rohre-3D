/**
 * MATERIALS.JS - Material-Definitionen
 * Wiederverwendbare Materialien und Texturen
 */

/**
 * Erstellt eine Checker-Textur
 */
export function makeCheckerTexture(options = {}) {
    const {
        cells = 8,
        c1 = '#0a1636',
        c2 = '#183b7a',
        accent = '#f59e0b',
        accentAlpha = 0.12,
        size = 256
    } = options;

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const cellSize = size / cells;
    for (let y = 0; y < cells; y++) {
        for (let x = 0; x < cells; x++) {
            ctx.fillStyle = (x + y) % 2 === 0 ? c1 : c2;
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }

    // Akzent-Line
    ctx.strokeStyle = accent;
    ctx.globalAlpha = accentAlpha;
    ctx.lineWidth = 2;
    for (let i = 0; i <= cells; i++) {
        const pos = i * cellSize;
        ctx.beginPath();
        ctx.moveTo(pos, 0);
        ctx.lineTo(pos, size);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, pos);
        ctx.lineTo(size, pos);
        ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
}

/**
 * Tunnel-Wand-Material
 */
export function makeTunnelWallMat() {
    const tex = makeCheckerTexture({
        cells: 10,
        c1: '#0a1636',
        c2: '#183b7a',
        accent: '#f59e0b',
        accentAlpha: 0.12
    });
    tex.repeat.set(10, 2);

    return new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: tex,
        roughness: 0.25,
        metalness: 0.2,
        emissive: new THREE.Color(0x1b4d9a),
        emissiveIntensity: 1.0,
        transparent: true,
        opacity: 0.62,
        side: THREE.DoubleSide
    });
}

/**
 * Tunnel-Safe-Zone-Material
 */
export function makeTunnelSafeMat() {
    const tex = makeCheckerTexture({
        cells: 8,
        c1: '#0a2a1f',
        c2: '#1d6b55',
        accent: '#bfe6ff',
        accentAlpha: 0.10
    });
    tex.repeat.set(8, 2);

    return new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: tex,
        roughness: 0.35,
        metalness: 0,
        emissive: new THREE.Color(0x4fd2ff),
        emissiveIntensity: 0.85,
        transparent: true,
        opacity: 0.50,
        side: THREE.DoubleSide
    });
}

/**
 * Boundary-Ring-Material (Tunnel-Ringe)
 */
export function makeBoundaryRingMat() {
    return new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.2,
        metalness: 0.1,
        emissive: new THREE.Color(0x7dd3fc),
        emissiveIntensity: 1.1,
        transparent: true,
        opacity: 0.75
    });
}

/**
 * Floor-Material
 */
export function makeFloorMat() {
    const tex = makeCheckerTexture({
        cells: 18,
        c1: '#030712',
        c2: '#0f172a',
        accent: '#1e3a5f',
        accentAlpha: 0.15
    });
    tex.repeat.set(6, 5);

    return new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: tex,
        roughness: 0.85,
        metalness: 0.1,
        emissive: new THREE.Color(0x0a1120),
        emissiveIntensity: 0.35
    });
}

/**
 * Ceiling-Material
 */
export function makeCeilingMat() {
    return new THREE.MeshStandardMaterial({
        color: 0x0b1324,
        roughness: 0.95,
        metalness: 0,
        emissive: new THREE.Color(0x050a15),
        emissiveIntensity: 0.25
    });
}

/**
 * Wall-Material
 */
export function makeWallMat() {
    const tex = makeCheckerTexture({
        cells: 14,
        c1: '#0a1636',
        c2: '#152144',
        accent: '#3b82f6',
        accentAlpha: 0.08
    });
    tex.repeat.set(4, 3);

    return new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: tex,
        roughness: 0.65,
        metalness: 0.15,
        emissive: new THREE.Color(0x1e3a8a),
        emissiveIntensity: 0.45,
        transparent: true,
        opacity: 0.85
    });
}

/**
 * Hard-Block-Material
 */
export function makeHardBlockMat() {
    return new THREE.MeshStandardMaterial({
        color: 0xf87171,
        roughness: 0.35,
        metalness: 0.25,
        emissive: new THREE.Color(0x7a1010),
        emissiveIntensity: 0.65
    });
}

/**
 * Foam-Block-Material
 */
export function makeFoamBlockMat() {
    return new THREE.MeshStandardMaterial({
        color: 0x34d399,
        roughness: 0.85,
        metalness: 0,
        emissive: new THREE.Color(0x0b6b4f),
        emissiveIntensity: 0.25,
        transparent: true,
        opacity: 0.78
    });
}

/**
 * Portal-Material
 */
export function makePortalMat(color) {
    return new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.2,
        metalness: 0.4,
        emissive: new THREE.Color(color),
        emissiveIntensity: 1.5,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide
    });
}

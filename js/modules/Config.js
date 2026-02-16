import * as THREE from 'three';

export const CONFIG = {
    FIXED_STEP: 1 / 120,

    // Welt
    ARENA_W: 2800,
    ARENA_H: 950,
    ARENA_D: 2400,
    WALL_MARGIN: 18,

    // Bewegung
    SPEED_MAP: [0, 10.0, 14.0, 18.0, 23.0, 28.0, 34.0],
    SPEED_MULT: 10.0,

    YAW_MIN: 1.1,
    YAW_MAX: 3.8,
    PITCH_MIN: 1.0,
    PITCH_MAX: 3.4,
    ROLL_RATE: 3.0,

    INPUT_SMOOTH: 0.55,

    // Spur
    SEGMENT_LEN_TARGET: 5.0,
    TUBE_RADIUS_BASE: 3.6,
    TUBE_RADIUS_MIN: 2.8,
    HEAD_RADIUS: 3.6,
    MAX_SEGMENTS: 9000,

    // Lücken
    GAP_INTERVAL_MIN: 0.9,
    GAP_INTERVAL_MAX: 5.5,
    GAP_DUR_MIN: 0.06,
    GAP_DUR_MAX: 0.26,

    // Start/Grace
    START_GRACE_SEC: 3.0,
    SPAWN_NODRAW: 0.28,

    // Self collision
    SELF_IGNORE_BASE: 0.70,
    SELF_IGNORE_SLOW_EXTRA: 0.45,
    SELF_IGNORE_MIN: 0.45,
    SELF_IGNORE_MAX: 1.60,
    SELF_SKIP_LAST_N: 24,
    SELF_MIN_SEGMENTS: 22,

    // Snap
    SNAP_ANGLE: Math.PI / 2,

    // Tunnel
    TUNNEL_RADIUS: 160,
    TUNNEL_SAFE_FACTOR: 0.82,
    TUNNEL_INFLUENCE_PAD: 1.05,
    TUNNEL_END_FADE: 220,

    // Blöcke
    HARD_BLOCK_COUNT: 18,
    FOAM_BLOCK_COUNT: 16,
    BLOCK_MIN: 28,
    BLOCK_MAX: 78,

    FOAM_BOUNCE_COOLDOWN: 0.16,
    FOAM_REFLECT_STRENGTH: 1.0,
    FOAM_PUSH_EXTRA: 2.4,

    // Items / Inventar
    INVENTORY_SIZE: 5,

    POWER_RADIUS: 16,
    POWER_MAX_ON_FIELD: 6,
    POWER_LIFETIME_SEC: 14,
    POWER_DURATION_SEC: 5.2,

    POWER_SPAWN_MIN_SEC: 1.2,
    POWER_SPAWN_MAX_SEC: 3.2,

    POWER_SPAWN_PLAYER_MIN_DIST: 160,
    POWER_SPAWN_WALL_PAD: 80,

    // Mod-Clamps
    MOD_SPEED_MIN: 0.45,
    MOD_SPEED_MAX: 2.6,
    MOD_THICK_MIN: 0.45,
    MOD_THICK_MAX: 3.6,

    // Boost
    BOOST_MULT: 2.4,
    BOOST_RECHARGE_RATE: 0.25,
    BOOST_CONSUME_RATE: 0.65,

    // Projectiles
    PROJECTILE_SPEED: 1800,
    PROJECTILE_RADIUS: 8,
    PROJECTILE_LIFETIME: 30.0,
    PROJECTILE_COOLDOWN: 0.4,

    // Arena-Inspect
    WALL_INSPECT_OPACITY: 0.18
};

/* Verstärkte Item-Faktoren */
export const POWER_MULT = {
    SPEED_UP: 2.0,
    SPEED_DOWN: 0.5,
    THIN: 0.4,
    FAT: 3.0
};

export const POWER_TYPES = [
    {
        id: "speedUp", name: "Schneller", icon: "⚡", color: "#34d399",
        apply: (p) => { p.mod.speed *= POWER_MULT.SPEED_UP; },
        revert: (p) => { p.mod.speed /= POWER_MULT.SPEED_UP; }
    },

    {
        id: "speedDown", name: "Langsamer", icon: "🐢", color: "#f87171",
        apply: (p) => { p.mod.speed *= POWER_MULT.SPEED_DOWN; },
        revert: (p) => { p.mod.speed /= POWER_MULT.SPEED_DOWN; }
    },

    {
        id: "fat", name: "Dick", icon: "🧱", color: "#fbbf24",
        apply: (p) => { p.mod.thickness *= POWER_MULT.FAT; },
        revert: (p) => { p.mod.thickness /= POWER_MULT.FAT; }
    },

    {
        id: "thin", name: "Dünn", icon: "✂", color: "#a78bfa",
        apply: (p) => { p.mod.thickness *= POWER_MULT.THIN; },
        revert: (p) => { p.mod.thickness /= POWER_MULT.THIN; }
    },

    {
        id: "shield", name: "Schild", icon: "🛡", color: "#60a5fa",
        apply: (p) => {
            p.shielded = true;
            if (p.shieldMesh) p.shieldMesh.visible = true;
        },
        revert: (p) => {
            p.shielded = false;
            if (p.shieldMesh) p.shieldMesh.visible = false;
        }
    },


    {
        id: "slowmo", name: "Zeitlupe", icon: "🕙", color: "#34d399",
        apply: () => { CONFIG.SPEED_MULT *= 0.5; },
        revert: () => { CONFIG.SPEED_MULT /= 0.5; }
    },

    {
        id: "ghost", name: "Geist", icon: "👻", color: "#f472b6",
        apply: (p) => { p.ghostMode = true; },
        revert: (p) => { p.ghostMode = false; }
    },

    {
        id: "invert", name: "Invertieren", icon: "🔀", color: "#d946ef",
        apply: (p) => { p.invertEnd = performance.now() / 1000 + 4.0; },
        revert: (p) => { p.invertEnd = 0; }
    }
];

export const BASE_UP = new THREE.Vector3(0, 1, 0);
export const BASE_RIGHT = new THREE.Vector3(1, 0, 0);
export const BASE_FORWARD = new THREE.Vector3(0, 0, -1);

export const PLAYER_COLORS = {
    P1: 0x3b82f6, // Blau
    P2: 0xf59e0b, // Orange
};

export const AUDIO = {
    MASTER_VOLUME: 0.5,
    SFX_VOLUME: 0.7,
    MUSIC_VOLUME: 0.3,
};

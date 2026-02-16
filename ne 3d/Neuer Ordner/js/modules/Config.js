// ============================================
// Config.js - Zentrale Spielkonfiguration
// ============================================

export const CONFIG = {
    // ---- Allgemein ----
    TICK_RATE: 60,
    TIME_STEP: 1 / 60,
    MAX_UPDATES_PER_FRAME: 5,

    // ---- Arena ----
    ARENA: {
        SIZE: 80,
        WALL_HEIGHT: 30,
        WALL_THICKNESS: 2,
        FLOOR_COLOR: 0x0a0a1a,
        WALL_COLOR: 0x1a1a3a,
        GRID_COLOR: 0x1a1a2e,
        MAP_SCALE: 3,
        CHECKER_LIGHT_COLOR: 0xd9d9d9,
        CHECKER_DARK_COLOR: 0x5a5a5a,
        CHECKER_WORLD_SIZE: 18,
    },

    // ---- Spieler ----
    PLAYER: {
        SPEED: 18,
        TURN_SPEED: 2.2,
        ROLL_SPEED: 2.0,
        BOOST_MULTIPLIER: 1.8,
        BOOST_DURATION: 2.0,
        BOOST_COOLDOWN: 5.0,
        SPAWN_PROTECTION: 1.0,
        HITBOX_RADIUS: 0.8,
        MODEL_SCALE: 1.0,
        START_Y: 10,
        AUTO_ROLL: true,
        AUTO_ROLL_SPEED: 1.5,
    },

    // ---- Gameplay Options ----
    GAMEPLAY: {
        PLANAR_MODE: false,
        PORTAL_COUNT: 0,
        PORTAL_BEAMS: true,
    },

    // ---- Trail (Schweifspur) ----
    TRAIL: {
        WIDTH: 0.6,
        UPDATE_INTERVAL: 0.07,
        GAP_CHANCE: 0.02,
        GAP_DURATION: 0.3,
        MAX_SEGMENTS: 5000,
    },

    // ---- Rendering ----
    RENDER: {
        MAX_PIXEL_RATIO: 1.35,
        SHADOW_MAP_SIZE: 512,
    },

    // ---- Powerups ----
    POWERUP: {
        SPAWN_INTERVAL: 3.0,
        MAX_ON_FIELD: 8,
        PICKUP_RADIUS: 2.5,
        SIZE: 1.5,
        ROTATION_SPEED: 2.0,
        BOUNCE_SPEED: 1.5,
        BOUNCE_HEIGHT: 0.5,
        MAX_INVENTORY: 5,
        DURATION: 5.0,

        TYPES: {
            SPEED_UP: { name: 'Schneller', color: 0x00ff66, icon: '⚡', duration: 4, multiplier: 1.6 },
            SLOW_DOWN: { name: 'Langsamer', color: 0xff3333, icon: '🐢', duration: 4, multiplier: 0.5 },
            THICK: { name: 'Dick', color: 0xffcc00, icon: '🧱', duration: 5, trailWidth: 1.8 },
            THIN: { name: 'Dünn', color: 0xaa44ff, icon: '✂', duration: 5, trailWidth: 0.2 },
            SHIELD: { name: 'Schild', color: 0x4488ff, icon: '🛡', duration: 3 },
            SLOW_TIME: { name: 'Zeitlupe', color: 0x44ff88, icon: '🕙', duration: 4, timeScale: 0.4 },
            GHOST: { name: 'Geist', color: 0xff66cc, icon: '👻', duration: 3 },
            INVERT: { name: 'Invertieren', color: 0xff00ff, icon: '🔀', duration: 4 },
        }
    },

    // ---- Bots ----
    BOT: {
        REACTION_TIME: 0.15,
        LOOK_AHEAD: 12,
        AGGRESSION: 0.5,
    },

    // ---- Projektile (Item-Schuss) ----
    PROJECTILE: {
        SPEED: 45,
        RADIUS: 0.7,
        LIFE_TIME: 3.0,
        MAX_DISTANCE: 140,
        COOLDOWN: 0.45,
    },

    // ---- Portale ----
    PORTAL: {
        RADIUS: 3.5,
        COOLDOWN: 1.2,
        RING_SIZE: 4.0,
        ROTATION_SPEED: 2.0,
    },

    // ---- Homing (Zielsuchend) ----
    HOMING: {
        LOCK_ON_ANGLE: 15,       // Grad – Lock-On-Kegel
        TURN_RATE: 3.0,          // Wie schnell Rakete zum Ziel lenkt (Rad/s)
        MAX_LOCK_RANGE: 100,     // Maximale Lock-On-Entfernung
    },

    // ---- Farben ----
    COLORS: {
        PLAYER_1: 0x00aaff,
        PLAYER_2: 0xff8800,
        BOT_COLORS: [0xff4444, 0x44ff44, 0xffff44, 0xff44ff, 0x44ffff],
        BACKGROUND: 0x080812,
        AMBIENT_LIGHT: 0x334466,
        POINT_LIGHT: 0xffffff,
    },

    // ---- Kamera ----
    CAMERA: {
        FOV: 75,
        NEAR: 0.1,
        FAR: 200,
        FOLLOW_DISTANCE: 12,
        FOLLOW_HEIGHT: 6,
        LOOK_AHEAD: 5,
        SMOOTHING: 0.08,
        MODES: ['THIRD_PERSON', 'FIRST_PERSON', 'TOP_DOWN'],
        FIRST_PERSON_OFFSET: 4.0, // Kamera vor dem Flugzeug
    },

    // ---- Maps ----
    MAPS: {
        standard: {
            name: 'Standard Arena',
            size: [80, 30, 80],
            obstacles: [
                { pos: [0, 5, 0], size: [4, 10, 4] },
                { pos: [20, 5, 20], size: [3, 10, 3] },
                { pos: [-20, 5, -20], size: [3, 10, 3] },
                { pos: [20, 5, -20], size: [3, 10, 3] },
                { pos: [-20, 5, 20], size: [3, 10, 3] },
            ],
            portals: [
                { a: [-30, 12, 0], b: [30, 12, 0], color: 0x00ffcc },
            ]
        },
        empty: {
            name: 'Leer',
            size: [50, 25, 50],
            obstacles: [],
            portals: []
        },
        maze: {
            name: 'Labyrinth',
            size: [80, 25, 80],
            obstacles: [
                { pos: [-20, 5, -20], size: [20, 10, 2] },
                { pos: [20, 5, -20], size: [20, 10, 2] },
                { pos: [0, 5, 0], size: [30, 10, 2] },
                { pos: [-20, 5, 20], size: [20, 10, 2] },
                { pos: [20, 5, 20], size: [20, 10, 2] },
                { pos: [-20, 5, 0], size: [2, 10, 20] },
                { pos: [20, 5, 0], size: [2, 10, 20] },
                { pos: [0, 5, -20], size: [2, 10, 15] },
                { pos: [0, 5, 20], size: [2, 10, 15] },
            ],
            portals: [
                { a: [-30, 10, -30], b: [30, 10, 30], color: 0xff66ff },
                { a: [30, 10, -30], b: [-30, 10, 30], color: 0x66ccff },
            ]
        },
        complex: {
            name: 'Komplex',
            size: [90, 30, 90],
            obstacles: [
                { pos: [0, 5, 0], size: [6, 12, 6] },
                { pos: [-25, 5, -25], size: [10, 8, 2] },
                { pos: [25, 5, -25], size: [2, 8, 10] },
                { pos: [-25, 5, 25], size: [2, 8, 10] },
                { pos: [25, 5, 25], size: [10, 8, 2] },
                { pos: [-15, 5, 0], size: [2, 15, 15] },
                { pos: [15, 5, 0], size: [2, 15, 15] },
                { pos: [0, 5, -15], size: [15, 15, 2] },
                { pos: [0, 5, 15], size: [15, 15, 2] },
                { pos: [-30, 3, 0], size: [5, 6, 5] },
                { pos: [30, 3, 0], size: [5, 6, 5] },
            ],
            portals: [
                { a: [-35, 12, -35], b: [35, 12, 35], color: 0xffaa00 },
                { a: [35, 12, -35], b: [-35, 12, 35], color: 0x00aaff },
            ]
        },
        pyramid: {
            name: 'Pyramide',
            size: [80, 35, 80],
            obstacles: [
                { pos: [0, 2, 0], size: [20, 4, 20] },
                { pos: [0, 6, 0], size: [15, 4, 15] },
                { pos: [0, 10, 0], size: [10, 4, 10] },
                { pos: [0, 14, 0], size: [5, 4, 5] },
                { pos: [-30, 5, -30], size: [3, 10, 3] },
                { pos: [30, 5, -30], size: [3, 10, 3] },
                { pos: [-30, 5, 30], size: [3, 10, 3] },
                { pos: [30, 5, 30], size: [3, 10, 3] },
            ],
            portals: [
                { a: [0, 25, -30], b: [0, 25, 30], color: 0xff44ff },
            ]
        }
    },

    // ---- Tastenbelegung ----
    KEYS: {
        PLAYER_1: {
            UP: 'KeyW',
            DOWN: 'KeyS',
            LEFT: 'KeyA',
            RIGHT: 'KeyD',
            ROLL_LEFT: 'KeyQ',
            ROLL_RIGHT: 'KeyE',
            BOOST: 'ShiftLeft',
            SHOOT: 'KeyF',
            NEXT_ITEM: 'KeyR',
            DROP: 'KeyG',
            CAMERA: 'KeyC',
        },
        PLAYER_2: {
            UP: 'ArrowUp',
            DOWN: 'ArrowDown',
            LEFT: 'ArrowLeft',
            RIGHT: 'ArrowRight',
            ROLL_LEFT: 'KeyN',
            ROLL_RIGHT: 'KeyM',
            BOOST: 'ShiftRight',
            SHOOT: 'KeyJ',
            NEXT_ITEM: 'KeyL',
            DROP: 'KeyH',
            CAMERA: 'KeyV',
        }
    }
};

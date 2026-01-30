/**
 * CONFIG.JS - Zentrale Spielkonfiguration & Konstanten
 * Alle Einstellungen für Physik, Gameplay und Rendering
 */

export const CONFIG = {
  // === Fixed-Step Loop ===
  FIXED_STEP: 1 / 120,

  // === Arena-Dimensionen ===
  ARENA_W: 2800,
  ARENA_H: 950,
  ARENA_D: 2400,
  WALL_MARGIN: 18,

  // === Bewegung & Geschwindigkeit ===
  SPEED_MAP: [0, 10.0, 14.0, 18.0, 23.0, 28.0, 34.0],
  SPEED_MULT: 10.0,

  YAW_MIN: 1.1,
  YAW_MAX: 3.8,
  PITCH_MIN: 1.0,
  PITCH_MAX: 3.4,
  ROLL_RATE: 3.0,

  INPUT_SMOOTH: 0.55,
  SNAP_ANGLE: Math.PI / 2,

  // === Boost ===
  BOOST_MULT: 1.85,
  BOOST_CONSUME_RATE: 0.45,
  BOOST_RECHARGE_RATE: 0.28,

  // === Trail/Spur ===
  SEGMENT_LEN_TARGET: 12,
  TUBE_RADIUS_BASE: 6.5,
  HEAD_RADIUS: 10,

  // === Lücken ===
  GAP_AVG_INTERVAL_MIN: 1.5,
  GAP_AVG_INTERVAL_MAX: 5.0,
  GAP_DURATION_MIN: 0.08,
  GAP_DURATION_MAX: 0.6,

  // === Start & Grace Period ===
  START_GRACE_SEC: 1.8,
  SPAWN_NODRAW: 0.3,

  // === Tunnel ===
  TUNNEL_RADIUS: 160,
  TUNNEL_SAFE_FACTOR: 0.68,
  TUNNEL_INFLUENCE_PAD: 1.25,
  TUNNEL_END_FADE: 160,

  // === Obstacles ===
  HARD_BLOCK_COUNT: 8,
  FOAM_BLOCK_COUNT: 6,
  BLOCK_MIN: 50,
  BLOCK_MAX: 95,
  FOAM_BOUNCE_MULT: 1.3,
  FOAM_COOLDOWN: 0.4,

  // === Powers ===
  POWER_SPAWN_INTERVAL_MIN: 3.5,
  POWER_SPAWN_INTERVAL_MAX: 8.0,
  POWER_EFFECT_DURATION: 7.0,
  POWER_RADIUS: 24,
  INVENTORY_SIZE: 5,

  // === Portale ===
  PORTAL_COOLDOWN: 0.6,
  PORTAL_SIZE: 80,

  // === Projektile ===
  PROJECTILE_SPEED: 1800,
  PROJECTILE_LIFETIME: 30.0,
  PROJECTILE_COOLDOWN: 0.4,
  PROJECTILE_RADIUS: 8,

  // === Camera ===
  CAMERA_FOV: 75,
  CAMERA_NEAR: 1,
  CAMERA_FAR: 8000,

  // === Rendering ===
  SHADOW_MAP_SIZE: 2048,
  ANTIALIAS: true,

  // === Physics ===
  GRAVITY: 0, // Aktuell keine Gravity (Flugzeug)
  FRICTION: 0.98,

  // === NPC ===
  NPC_SPEED: 250,
};

/**
 * Power-Up-Multiplikatoren
 */
export const POWER_MULT = {
  SPEED_UP: 1.5,
  SPEED_DOWN: 0.6,
  FAT: 2.2,
  THIN: 0.45,
};

/**
 * Basis-Vektoren für Quaternion-Berechnungen
 */
export const BASE_UP = new THREE.Vector3(0, 1, 0);
export const BASE_RIGHT = new THREE.Vector3(1, 0, 0);
export const BASE_FORWARD = new THREE.Vector3(0, 0, -1);

/**
 * Farben für Spieler
 */
export const PLAYER_COLORS = {
  P1: 0x3b82f6, // Blau
  P2: 0xf59e0b, // Orange
};

/**
 * Audio-Einstellungen
 */
export const AUDIO = {
  MASTER_VOLUME: 0.5,
  SFX_VOLUME: 0.7,
  MUSIC_VOLUME: 0.3,
};

/**
 * Editor-Einstellungen
 */
export const EDITOR = {
  GRID_SIZE: 100,
  SNAP_TO_GRID: false,
  DEFAULT_TUNNEL_RADIUS: 160,
  DEFAULT_BLOCK_SIZE: 70,
};

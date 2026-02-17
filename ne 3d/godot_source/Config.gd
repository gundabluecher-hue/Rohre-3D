extends Node
class_name Config

# Core simulation.
const TICK_RATE: int = 60
const TIME_STEP: float = 1.0 / float(TICK_RATE)

# Match flow.
const TARGET_SCORE: int = 5
const COUNTDOWN_SECONDS: float = 3.0
const ROUND_END_DELAY: float = 2.6
const MATCH_RESTART_DELAY: float = 1.0
const MAX_ROUND_SECONDS: float = 120.0

# Arena.
const ARENA_SIZE: float = 80.0
const WALL_HEIGHT: float = 30.0
const WALL_THICKNESS: float = 2.0
const MAP_SCALE: float = 3.0
const START_Y: float = 10.0
const SPAWN_MARGIN: float = 10.0
const SPAWN_MIN_DISTANCE: float = 18.0
const SPAWN_SAFE_RADIUS: float = 2.2
const FLOOR_COLOR: Color = Color(0.04, 0.04, 0.10)
const WALL_COLOR: Color = Color(0.10, 0.10, 0.23)
const GRID_COLOR: Color = Color(0.10, 0.10, 0.18)
const CHECKER_LIGHT_COLOR: Color = Color(0.85, 0.85, 0.85)
const CHECKER_DARK_COLOR: Color = Color(0.35, 0.35, 0.35)
const CHECKER_WORLD_SIZE: float = 18.0

# Flight and collision.
const PLAYER_SPEED: float = 18.0
const PITCH_SPEED: float = 2.0
const YAW_SPEED: float = 2.3
const ROLL_SPEED: float = 2.0
const AUTO_ROLL: bool = true
const AUTO_ROLL_SPEED: float = 3.0
const BOOST_MULTIPLIER: float = 1.8
const BOOST_DURATION: float = 2.0
const BOOST_COOLDOWN: float = 5.0
const SPAWN_PROTECTION: float = 1.0
const HITBOX_RADIUS: float = 0.85
const HEAD_ON_PLAYER_RADIUS: float = 1.6
const MAX_SPEED_MULTIPLIER: float = 2.4
const MIN_SPEED_MULTIPLIER: float = 0.45
const MAX_TRAIL_MULTIPLIER: float = 2.2
const MIN_TRAIL_MULTIPLIER: float = 0.35

# Trail.
const TRAIL_WIDTH: float = 0.6
const TRAIL_UPDATE_INTERVAL: float = 0.07
const TRAIL_MAX_SEGMENTS: int = 5000
const TRAIL_GAP_CHANCE: float = 0.02
const TRAIL_GAP_DURATION: float = 0.3

# Powerups.
const POWERUP_SPAWN_INTERVAL: float = 3.0
const POWERUP_SPAWN_JITTER: float = 0.8
const POWERUP_MAX_ON_FIELD: int = 8
const POWERUP_PICKUP_RADIUS: float = 2.5
const POWERUP_MIN_PLAYER_DISTANCE: float = 7.5
const POWERUP_SIZE: float = 1.5
const POWERUP_ROTATION_SPEED: float = 2.0
const POWERUP_BOUNCE_SPEED: float = 1.5
const POWERUP_BOUNCE_HEIGHT: float = 0.5
const POWERUP_DURATION_DEFAULT: float = 4.5
const POWERUP_MAX_INVENTORY: int = 5
const POWERUP_STACK_DURATION_FACTOR: float = 0.65
const SPEED_STACK_CAP: int = 2
const TRAIL_STACK_CAP: int = 2
const SHIELD_STACK_CAP: int = 3
const SLOW_TIME_STACK_CAP: int = 2
const SLOW_TIME_MIN_SCALE: float = 0.45
const SLOW_TIME_DURATION_CAP: float = 8.0

# Projectile / lock-on.
const PROJECTILE_SPEED: float = 45.0
const PROJECTILE_RADIUS: float = 0.7
const PROJECTILE_LIFE_TIME: float = 3.0
const PROJECTILE_MAX_DISTANCE: float = 140.0
const PROJECTILE_COOLDOWN: float = 0.45
const HOMING_LOCK_ON_ANGLE: float = 15.0
const HOMING_TURN_RATE: float = 3.0
const HOMING_MAX_RANGE: float = 100.0

# Portals.
const PORTAL_RADIUS: float = 3.5
const PORTAL_COOLDOWN: float = 1.2
const PORTAL_RING_SIZE: float = 4.0
const PORTAL_ROTATION_SPEED: float = 2.0

enum PowerupType { SPEED_UP, SLOW_DOWN, THICK, THIN, SHIELD, SLOW_TIME, GHOST, INVERT }

const POWERUP_TYPE_TO_KEY := {
	PowerupType.SPEED_UP: "SPEED_UP",
	PowerupType.SLOW_DOWN: "SLOW_DOWN",
	PowerupType.THICK: "THICK",
	PowerupType.THIN: "THIN",
	PowerupType.SHIELD: "SHIELD",
	PowerupType.SLOW_TIME: "SLOW_TIME",
	PowerupType.GHOST: "GHOST",
	PowerupType.INVERT: "INVERT"
}

const POWERUP_KEY_TO_TYPE := {
	"SPEED_UP": PowerupType.SPEED_UP,
	"SLOW_DOWN": PowerupType.SLOW_DOWN,
	"THICK": PowerupType.THICK,
	"THIN": PowerupType.THIN,
	"SHIELD": PowerupType.SHIELD,
	"SLOW_TIME": PowerupType.SLOW_TIME,
	"GHOST": PowerupType.GHOST,
	"INVERT": PowerupType.INVERT
}

const POWERUP_SPAWN_WEIGHTS := {
	PowerupType.SPEED_UP: 1.0,
	PowerupType.SLOW_DOWN: 1.0,
	PowerupType.THICK: 0.9,
	PowerupType.THIN: 0.9,
	PowerupType.SHIELD: 1.1,
	PowerupType.SLOW_TIME: 0.8,
	PowerupType.GHOST: 0.8,
	PowerupType.INVERT: 0.9
}

const POWERUP_DATA := {
	PowerupType.SPEED_UP: {
		"name": "Speed Up",
		"short": "SPD+",
		"color": Color(0.00, 1.00, 0.42),
		"duration": 4.0,
		"speed_mult": 1.6
	},
	PowerupType.SLOW_DOWN: {
		"name": "Slow Down",
		"short": "SPD-",
		"color": Color(1.00, 0.22, 0.22),
		"duration": 4.0,
		"speed_mult": 0.5
	},
	PowerupType.THICK: {
		"name": "Thick Trail",
		"short": "TRL+",
		"color": Color(1.00, 0.82, 0.12),
		"duration": 5.0,
		"trail_mult": 1.8
	},
	PowerupType.THIN: {
		"name": "Thin Trail",
		"short": "TRL-",
		"color": Color(0.67, 0.28, 1.00),
		"duration": 5.0,
		"trail_mult": 0.35
	},
	PowerupType.SHIELD: {
		"name": "Shield",
		"short": "SHD",
		"color": Color(0.28, 0.54, 1.00),
		"duration": 3.0,
		"charges": 1
	},
	PowerupType.SLOW_TIME: {
		"name": "Slow Time",
		"short": "TIME",
		"color": Color(0.28, 1.00, 0.56),
		"duration": 4.0,
		"time_scale": 0.4
	},
	PowerupType.GHOST: {
		"name": "Ghost",
		"short": "GHO",
		"color": Color(1.00, 0.45, 0.82),
		"duration": 3.0
	},
	PowerupType.INVERT: {
		"name": "Invert",
		"short": "INV",
		"color": Color(1.00, 0.20, 1.00),
		"duration": 4.0
	}
}

# Bots.
const BOT_REACTION_TIME: float = 0.12
const BOT_LOOK_AHEAD: float = 13.0
const BOT_STEP_DISTANCE: float = 1.8
const BOT_PROBE_SPREAD: float = 0.75
const BOT_HEIGHT_FLOOR_MARGIN: float = 6.0
const BOT_HEIGHT_CEIL_MARGIN: float = 7.0
const BOT_TURN_COMMIT_TIME: float = 0.2
const BOT_BOOST_CHANCE: float = 0.0045
const BOT_RANDOM_DRIFT: float = 0.04
const BOT_DEFAULT_DIFFICULTY: String = "NORMAL"
const BOT_DIFFICULTY_PROFILES := {
	"EASY": {
		"reaction_time": 0.24,
		"look_ahead": 11.0,
		"step_distance": 2.3,
		"probe_spread": 0.62,
		"turn_commit_time": 0.14,
		"boost_chance": 0.0025,
		"random_drift": 0.12,
		"aggression": 0.36,
		"error_rate": 0.24,
		"item_use_cooldown": 1.25,
		"item_shoot_cooldown": 0.8,
		"item_use_chance": 0.05,
		"item_shoot_chance": 0.01,
		"height_floor_margin": 6.0,
		"height_ceil_margin": 8.0
	},
	"NORMAL": {
		"reaction_time": 0.14,
		"look_ahead": 13.0,
		"step_distance": 1.6,
		"probe_spread": 0.74,
		"turn_commit_time": 0.18,
		"boost_chance": 0.0045,
		"random_drift": 0.05,
		"aggression": 0.58,
		"error_rate": 0.11,
		"item_use_cooldown": 0.95,
		"item_shoot_cooldown": 0.62,
		"item_use_chance": 0.06,
		"item_shoot_chance": 0.012,
		"height_floor_margin": 6.0,
		"height_ceil_margin": 7.0
	},
	"HARD": {
		"reaction_time": 0.08,
		"look_ahead": 16.0,
		"step_distance": 1.4,
		"probe_spread": 0.9,
		"turn_commit_time": 0.24,
		"boost_chance": 0.0065,
		"random_drift": 0.02,
		"aggression": 0.74,
		"error_rate": 0.04,
		"item_use_cooldown": 0.78,
		"item_shoot_cooldown": 0.48,
		"item_use_chance": 0.08,
		"item_shoot_chance": 0.018,
		"height_floor_margin": 5.0,
		"height_ceil_margin": 6.0
	}
}

# Camera.
const CAMERA_FOV: float = 75.0
const CAMERA_FOLLOW_DISTANCE: float = 12.0
const CAMERA_FOLLOW_HEIGHT: float = 6.0
const CAMERA_LOOK_AHEAD: float = 6.0
const CAMERA_POSITION_SMOOTHING: float = 7.0
const CAMERA_ROTATION_SMOOTHING: float = 8.0
const CAMERA_MAX_STEP: float = 45.0

# Colors.
const COLOR_PLAYER_1: Color = Color(0.00, 0.67, 1.00)
const COLOR_PLAYER_2: Color = Color(1.00, 0.53, 0.00)
const COLOR_BOTS: Array[Color] = [
	Color(1.00, 0.27, 0.27),
	Color(0.27, 1.00, 0.27),
	Color(1.00, 1.00, 0.27),
	Color(1.00, 0.27, 1.00),
	Color(0.27, 1.00, 1.00)
]

static func get_powerup_data(type_idx: int) -> Dictionary:
	return POWERUP_DATA.get(type_idx, POWERUP_DATA[PowerupType.SPEED_UP]).duplicate(true)

static func powerup_key_from_type(type_idx: int) -> String:
	return String(POWERUP_TYPE_TO_KEY.get(type_idx, "SPEED_UP"))

static func powerup_type_from_key(key: String) -> int:
	var lookup := key.strip_edges().to_upper()
	return int(POWERUP_KEY_TO_TYPE.get(lookup, PowerupType.SPEED_UP))

static func random_powerup_type(rng: RandomNumberGenerator) -> int:
	if rng == null:
		return PowerupType.SPEED_UP

	var total := 0.0
	for value in POWERUP_SPAWN_WEIGHTS.values():
		total += float(value)
	if total <= 0.0:
		return PowerupType.SPEED_UP

	var pick := rng.randf_range(0.0, total)
	var accum := 0.0
	for type_idx in POWERUP_SPAWN_WEIGHTS.keys():
		accum += float(POWERUP_SPAWN_WEIGHTS[type_idx])
		if pick <= accum:
			return int(type_idx)
	return PowerupType.SPEED_UP

static func get_maps() -> Dictionary:
	return {
		"standard": {
			"name": "Standard Arena",
			"size": Vector3(80, 30, 80),
			"obstacles": [
				{ "pos": Vector3(0, 5, 0), "size": Vector3(4, 10, 4) },
				{ "pos": Vector3(20, 5, 20), "size": Vector3(3, 10, 3) },
				{ "pos": Vector3(-20, 5, -20), "size": Vector3(3, 10, 3) },
				{ "pos": Vector3(20, 5, -20), "size": Vector3(3, 10, 3) },
				{ "pos": Vector3(-20, 5, 20), "size": Vector3(3, 10, 3) }
			],
			"portals": [
				{ "a": Vector3(-30, 12, 0), "b": Vector3(30, 12, 0), "color": Color(0.0, 1.0, 0.8) }
			]
		},
		"empty": {
			"name": "Empty",
			"size": Vector3(50, 25, 50),
			"obstacles": [],
			"portals": []
		},
		"maze": {
			"name": "Maze",
			"size": Vector3(80, 25, 80),
			"obstacles": [
				{ "pos": Vector3(-20, 5, -20), "size": Vector3(20, 10, 2) },
				{ "pos": Vector3(20, 5, -20), "size": Vector3(20, 10, 2) },
				{ "pos": Vector3(0, 5, 0), "size": Vector3(30, 10, 2) },
				{ "pos": Vector3(-20, 5, 20), "size": Vector3(20, 10, 2) },
				{ "pos": Vector3(20, 5, 20), "size": Vector3(20, 10, 2) },
				{ "pos": Vector3(-20, 5, 0), "size": Vector3(2, 10, 20) },
				{ "pos": Vector3(20, 5, 0), "size": Vector3(2, 10, 20) },
				{ "pos": Vector3(0, 5, -20), "size": Vector3(2, 10, 15) },
				{ "pos": Vector3(0, 5, 20), "size": Vector3(2, 10, 15) }
			],
			"portals": [
				{ "a": Vector3(-30, 10, -30), "b": Vector3(30, 10, 30), "color": Color(1.0, 0.4, 1.0) },
				{ "a": Vector3(30, 10, -30), "b": Vector3(-30, 10, 30), "color": Color(0.4, 0.8, 1.0) }
			]
		},
		"complex": {
			"name": "Complex",
			"size": Vector3(90, 30, 90),
			"obstacles": [
				{ "pos": Vector3(0, 5, 0), "size": Vector3(6, 12, 6) },
				{ "pos": Vector3(-25, 5, -25), "size": Vector3(10, 8, 2) },
				{ "pos": Vector3(25, 5, -25), "size": Vector3(2, 8, 10) },
				{ "pos": Vector3(-25, 5, 25), "size": Vector3(2, 8, 10) },
				{ "pos": Vector3(25, 5, 25), "size": Vector3(10, 8, 2) },
				{ "pos": Vector3(-15, 5, 0), "size": Vector3(2, 15, 15) },
				{ "pos": Vector3(15, 5, 0), "size": Vector3(2, 15, 15) },
				{ "pos": Vector3(0, 5, -15), "size": Vector3(15, 15, 2) },
				{ "pos": Vector3(0, 5, 15), "size": Vector3(15, 15, 2) },
				{ "pos": Vector3(-30, 3, 0), "size": Vector3(5, 6, 5) },
				{ "pos": Vector3(30, 3, 0), "size": Vector3(5, 6, 5) }
			],
			"portals": [
				{ "a": Vector3(-35, 12, -35), "b": Vector3(35, 12, 35), "color": Color(1.0, 0.67, 0.0) },
				{ "a": Vector3(35, 12, -35), "b": Vector3(-35, 12, 35), "color": Color(0.0, 0.67, 1.0) }
			]
		},
		"pyramid": {
			"name": "Pyramid",
			"size": Vector3(80, 35, 80),
			"obstacles": [
				{ "pos": Vector3(0, 2, 0), "size": Vector3(20, 4, 20) },
				{ "pos": Vector3(0, 6, 0), "size": Vector3(15, 4, 15) },
				{ "pos": Vector3(0, 10, 0), "size": Vector3(10, 4, 10) },
				{ "pos": Vector3(0, 14, 0), "size": Vector3(5, 4, 5) },
				{ "pos": Vector3(-30, 5, -30), "size": Vector3(3, 10, 3) },
				{ "pos": Vector3(30, 5, -30), "size": Vector3(3, 10, 3) },
				{ "pos": Vector3(-30, 5, 30), "size": Vector3(3, 10, 3) },
				{ "pos": Vector3(30, 5, 30), "size": Vector3(3, 10, 3) }
			],
			"portals": [
				{ "a": Vector3(0, 25, -30), "b": Vector3(0, 25, 30), "color": Color(1.0, 0.27, 1.0) }
			]
		}
	}

static func get_map_keys() -> Array[String]:
	var maps := get_maps()
	var keys: Array[String] = []
	for key in maps.keys():
		keys.append(String(key))
	keys.sort()
	return keys

static func get_default_settings() -> Dictionary:
	return {
		"mode": "1p",
		"map_key": "standard",
		"bots": 1,
		"bot_difficulty": BOT_DEFAULT_DIFFICULTY,
		"wins_needed": TARGET_SCORE,
		"performance": {
			"show_fps_overlay": false,
			"quality_mode": "HIGH",
			"adaptive_quality": true
		},
		"gameplay": {
			"speed": PLAYER_SPEED,
			"turn": YAW_SPEED,
			"trail_width": TRAIL_WIDTH,
			"gap_size": TRAIL_GAP_DURATION,
			"gap_frequency": TRAIL_GAP_CHANCE,
			"items": POWERUP_MAX_ON_FIELD,
			"fire_rate": PROJECTILE_COOLDOWN,
			"lock_on_angle": HOMING_LOCK_ON_ANGLE,
			"portals_enabled": true,
			"planar_mode": false,
			"portal_count": 0,
			"portal_beams": true
		}
	}

static func normalize_settings(raw: Dictionary) -> Dictionary:
	var defaults := get_default_settings()
	var normalized := defaults.duplicate(true)
	if not (raw is Dictionary):
		return normalized

	var maps := get_maps()
	var mode_value := String(raw.get("mode", defaults["mode"])).strip_edges().to_lower()
	normalized["mode"] = "2p" if mode_value == "2p" else "1p"

	var map_key := String(raw.get("map_key", defaults["map_key"])).strip_edges().to_lower()
	if maps.has(map_key):
		normalized["map_key"] = map_key

	normalized["bots"] = _clamp_int(raw.get("bots", defaults["bots"]), 0, 8)
	normalized["wins_needed"] = _clamp_int(raw.get("wins_needed", defaults["wins_needed"]), 1, 15)

	var difficulty := String(raw.get("bot_difficulty", defaults["bot_difficulty"])).strip_edges().to_upper()
	if not BOT_DIFFICULTY_PROFILES.has(difficulty):
		difficulty = BOT_DEFAULT_DIFFICULTY
	normalized["bot_difficulty"] = difficulty

	var performance_defaults: Dictionary = normalized["performance"]
	var performance_input = raw.get("performance", {})
	if performance_input is Dictionary:
		performance_defaults["show_fps_overlay"] = bool(performance_input.get("show_fps_overlay", performance_defaults["show_fps_overlay"]))
		var quality_mode := String(performance_input.get("quality_mode", performance_defaults["quality_mode"])).strip_edges().to_upper()
		if quality_mode != "LOW":
			quality_mode = "HIGH"
		performance_defaults["quality_mode"] = quality_mode
		performance_defaults["adaptive_quality"] = bool(performance_input.get("adaptive_quality", performance_defaults["adaptive_quality"]))
	normalized["performance"] = performance_defaults

	var gameplay_defaults: Dictionary = normalized["gameplay"]
	var gameplay_input = raw.get("gameplay", {})
	if gameplay_input is Dictionary:
		gameplay_defaults["speed"] = _clamp_float(gameplay_input.get("speed", gameplay_defaults["speed"]), 8.0, 40.0)
		gameplay_defaults["turn"] = _clamp_float(gameplay_input.get("turn", gameplay_defaults["turn"]), 0.8, 5.0)
		gameplay_defaults["trail_width"] = _clamp_float(gameplay_input.get("trail_width", gameplay_defaults["trail_width"]), 0.2, 2.5)
		gameplay_defaults["gap_size"] = _clamp_float(gameplay_input.get("gap_size", gameplay_defaults["gap_size"]), 0.05, 1.5)
		gameplay_defaults["gap_frequency"] = _clamp_float(gameplay_input.get("gap_frequency", gameplay_defaults["gap_frequency"]), 0.0, 0.25)
		gameplay_defaults["items"] = _clamp_int(gameplay_input.get("items", gameplay_defaults["items"]), 1, 20)
		gameplay_defaults["fire_rate"] = _clamp_float(gameplay_input.get("fire_rate", gameplay_defaults["fire_rate"]), 0.1, 2.0)
		gameplay_defaults["lock_on_angle"] = _clamp_float(gameplay_input.get("lock_on_angle", gameplay_defaults["lock_on_angle"]), 5.0, 45.0)
		gameplay_defaults["portals_enabled"] = bool(gameplay_input.get("portals_enabled", gameplay_defaults["portals_enabled"]))
		gameplay_defaults["planar_mode"] = bool(gameplay_input.get("planar_mode", gameplay_defaults["planar_mode"]))
		gameplay_defaults["portal_count"] = _clamp_int(gameplay_input.get("portal_count", gameplay_defaults["portal_count"]), 0, 20)
		gameplay_defaults["portal_beams"] = bool(gameplay_input.get("portal_beams", gameplay_defaults["portal_beams"]))

	normalized["gameplay"] = gameplay_defaults
	return normalized

static func get_bot_profile(profile_name: String) -> Dictionary:
	var key := profile_name.strip_edges().to_upper()
	if not BOT_DIFFICULTY_PROFILES.has(key):
		key = BOT_DEFAULT_DIFFICULTY
	return BOT_DIFFICULTY_PROFILES[key].duplicate(true)

static func _clamp_int(value: Variant, min_value: int, max_value: int) -> int:
	return clamp(int(value), min_value, max_value)

static func _clamp_float(value: Variant, min_value: float, max_value: float) -> float:
	return clamp(float(value), min_value, max_value)

extends Node

const Config = preload("res://Config.gd")

@export var player: CharacterBody3D
@export var arena: Node3D
@export var debug_draw: bool = false
@export var difficulty: String = Config.BOT_DEFAULT_DIFFICULTY

var reaction_timer: float = 0.0
var turn_commit_timer: float = 0.0
var committed_yaw: float = 0.0
var committed_pitch: float = 0.0
var item_use_cooldown: float = 0.0
var item_shoot_cooldown: float = 0.0

var _profile_name: String = Config.BOT_DEFAULT_DIFFICULTY
var _profile: Dictionary = {}

var current_input: Dictionary = {
	"pitch": 0.0,
	"yaw": 0.0,
	"roll": 0.0,
	"boost": false,
	"shoot_item": false,
	"use_item": false,
	"next_item": false,
	"drop_item": false
}

var _forward_risk: float = 0.0
var _local_openness: float = 0.0
var _collision_query_shape: SphereShape3D = SphereShape3D.new()
var _collision_query: PhysicsShapeQueryParameters3D = PhysicsShapeQueryParameters3D.new()

func _ready() -> void:
	if player == null:
		push_warning("BotController: player reference missing.")
		set_process(false)
		return

	_collision_query.shape = _collision_query_shape
	_collision_query.collide_with_bodies = true
	_collision_query.collide_with_areas = false
	_collision_query.exclude = [player.get_rid()]

	set_difficulty(difficulty)
	reaction_timer = randf_range(0.05, _get_profile_float("reaction_time", Config.BOT_REACTION_TIME))

func set_difficulty(profile_name: String) -> void:
	_profile_name = profile_name.strip_edges().to_upper()
	if not Config.BOT_DIFFICULTY_PROFILES.has(_profile_name):
		_profile_name = Config.BOT_DEFAULT_DIFFICULTY
	_profile = Config.get_bot_profile(_profile_name)
	difficulty = _profile_name
	reaction_timer = 0.0

func get_difficulty() -> String:
	return _profile_name

func _process(delta: float) -> void:
	if player == null or not is_instance_valid(player):
		return
	if not bool(player.get("alive")):
		return
	if difficulty.strip_edges().to_upper() != _profile_name:
		set_difficulty(difficulty)

	reaction_timer -= delta
	turn_commit_timer = max(0.0, turn_commit_timer - delta)
	item_use_cooldown = max(0.0, item_use_cooldown - delta)
	item_shoot_cooldown = max(0.0, item_shoot_cooldown - delta)

	if reaction_timer <= 0.0:
		var base_reaction := _get_profile_float("reaction_time", Config.BOT_REACTION_TIME)
		var jitter := 1.0 + randf_range(-0.2, 0.2) * _get_profile_float("error_rate", 0.1)
		reaction_timer = max(0.02, base_reaction * jitter)
		_sense_decide_act()

	_apply_input()

func _sense_decide_act() -> void:
	_reset_input()

	var pos := player.global_position
	var basis := player.global_transform.basis
	var forward := (-basis.z).normalized()
	var right := basis.x.normalized()
	var up := basis.y.normalized()

	var probes := [
		{"yaw": 0.0, "pitch": 0.0, "weight": 0.00, "name": "forward"},
		{"yaw": -1.0, "pitch": 0.0, "weight": 0.05, "name": "left"},
		{"yaw": 1.0, "pitch": 0.0, "weight": 0.05, "name": "right"},
		{"yaw": -1.8, "pitch": 0.0, "weight": 0.10, "name": "left_wide"},
		{"yaw": 1.8, "pitch": 0.0, "weight": 0.10, "name": "right_wide"},
		{"yaw": 0.0, "pitch": 0.85, "weight": 0.08, "name": "up"},
		{"yaw": 0.0, "pitch": -0.85, "weight": 0.08, "name": "down"}
	]

	var look_ahead := _dynamic_look_ahead()
	var best_probe: Dictionary = {}
	var best_score := -INF
	_local_openness = 0.0
	var openness_count := 0

	for probe in probes:
		var probe_dir := forward
		var probe_spread := _get_profile_float("probe_spread", Config.BOT_PROBE_SPREAD)
		probe_dir += right * (float(probe["yaw"]) * probe_spread)
		probe_dir += up * (float(probe["pitch"]) * probe_spread)
		probe_dir = probe_dir.normalized()

		var probe_eval := _evaluate_probe(pos, probe_dir, look_ahead)
		probe["dir"] = probe_dir
		probe["clearance"] = probe_eval["clearance"]
		probe["risk"] = probe_eval["risk"] + float(probe["weight"])
		probe["immediate"] = probe_eval["immediate"]

		_local_openness += float(probe_eval["clearance"])
		openness_count += 1

		var score := float(probe_eval["clearance"]) - (float(probe["risk"]) * look_ahead)
		if score > best_score:
			best_score = score
			best_probe = probe

		if probe["name"] == "forward":
			_forward_risk = float(probe["risk"])

	if openness_count > 0:
		_local_openness /= float(openness_count)

	if best_probe.is_empty():
		current_input["yaw"] = 1.0 if randf() > 0.5 else -1.0
		return

	var desired_dir: Vector3 = best_probe["dir"]
	var yaw_signal := right.dot(desired_dir)
	var pitch_signal := up.dot(desired_dir)

	var desired_yaw := 0.0
	if absf(yaw_signal) > 0.06:
		desired_yaw = 1.0 if yaw_signal > 0.0 else -1.0

	var desired_pitch := 0.0
	if absf(pitch_signal) > 0.08:
		desired_pitch = 1.0 if pitch_signal > 0.0 else -1.0

	if turn_commit_timer <= 0.0 or bool(best_probe.get("immediate", false)):
		committed_yaw = desired_yaw
		committed_pitch = desired_pitch
		if desired_yaw != 0.0 or desired_pitch != 0.0:
			turn_commit_timer = _get_profile_float("turn_commit_time", Config.BOT_TURN_COMMIT_TIME)

	if turn_commit_timer > 0.0:
		desired_yaw = committed_yaw
		desired_pitch = committed_pitch

	var drift := _get_profile_float("random_drift", Config.BOT_RANDOM_DRIFT)
	desired_yaw += randf_range(-drift, drift)
	desired_pitch += randf_range(-drift, drift) * 0.5
	if randf() < _get_profile_float("error_rate", 0.0) * 0.35:
		desired_yaw *= -1.0

	desired_pitch = _apply_height_bias(desired_pitch)

	current_input["yaw"] = clamp(desired_yaw, -1.0, 1.0)
	current_input["pitch"] = clamp(desired_pitch, -1.0, 1.0)
	current_input["roll"] = clamp(current_input["yaw"] * 0.55, -1.0, 1.0)

	if _should_boost(best_probe):
		current_input["boost"] = true

	_decide_item_usage(best_probe)

func _apply_height_bias(base_pitch: float) -> float:
	var adjusted := base_pitch
	var extents := _get_spawn_extents()
	var y := player.global_position.y
	var floor_margin := _get_profile_float("height_floor_margin", Config.BOT_HEIGHT_FLOOR_MARGIN)
	var ceil_margin := _get_profile_float("height_ceil_margin", Config.BOT_HEIGHT_CEIL_MARGIN)
	if y < floor_margin:
		adjusted = max(adjusted, 1.0)
	elif y > extents.y - ceil_margin:
		adjusted = min(adjusted, -1.0)
	return adjusted

func _dynamic_look_ahead() -> float:
	var current_speed: float = float(player.get("current_speed"))
	var base_speed: float = max(0.1, float(player.get("base_speed")))
	var speed_ratio: float = current_speed / base_speed
	var look_base := _get_profile_float("look_ahead", Config.BOT_LOOK_AHEAD)
	var look: float = look_base * (1.0 + (speed_ratio - 1.0) * 0.75)
	if bool(player.get("is_boosting")):
		look *= 1.18
	return max(8.0, look)

func _evaluate_probe(origin: Vector3, direction: Vector3, look_ahead: float) -> Dictionary:
	var step: float = _get_profile_float("step_distance", Config.BOT_STEP_DISTANCE)
	var clearance: float = look_ahead
	var immediate := false

	for dist in range(1, int(ceil(look_ahead / step)) + 1):
		var sample_distance := float(dist) * step
		var sample := origin + direction * sample_distance

		if _position_collides(sample, Config.HITBOX_RADIUS):
			clearance = sample_distance
			if sample_distance <= step * 1.5:
				immediate = true
			break
		if _position_hits_trails(sample, Config.HITBOX_RADIUS):
			clearance = sample_distance
			if sample_distance <= step * 1.5:
				immediate = true
			break

	var risk: float = 1.0 - clamp(clearance / look_ahead, 0.0, 1.0)
	if immediate:
		risk += 1.6
	if _get_profile_float("error_rate", 0.0) > 0.0 and randf() < _get_profile_float("error_rate", 0.0) * 0.3:
		risk += randf_range(0.0, 0.75)

	return {
		"clearance": clearance,
		"risk": risk,
		"immediate": immediate
	}

func _should_boost(best_probe: Dictionary) -> bool:
	if _forward_risk > 0.45:
		return false
	if float(best_probe.get("risk", 1.0)) > 0.4:
		return false
	if _local_openness < 6.5:
		return false
	var aggression := _get_profile_float("aggression", 0.5)
	var chance := _get_profile_float("boost_chance", Config.BOT_BOOST_CHANCE) * (0.85 + aggression)
	return randf() < chance

func _position_collides(position: Vector3, radius: float) -> bool:
	if player == null:
		return false
	var world := player.get_world_3d()
	if world == null:
		return false

	_collision_query_shape.radius = radius
	_collision_query.transform = Transform3D(Basis.IDENTITY, position)
	var hits := world.direct_space_state.intersect_shape(_collision_query, 1)
	return not hits.is_empty()

func _position_hits_trails(position: Vector3, radius: float) -> bool:
	var all_players := get_tree().get_nodes_in_group("players")
	for p in all_players:
		if not is_instance_valid(p):
			continue
		if not bool(p.get("alive")):
			continue

		var trail = p.get("trail_node")
		if trail == null or not trail.has_method("check_collision"):
			continue

		var skip_recent := 0
		if p == player:
			skip_recent = 10
		if trail.call("check_collision", position, radius, skip_recent):
			return true
	return false

func _get_spawn_extents() -> Vector3:
	var fallback := Vector3(
		Config.ARENA_SIZE * Config.MAP_SCALE * 0.5,
		Config.WALL_HEIGHT * Config.MAP_SCALE,
		Config.ARENA_SIZE * Config.MAP_SCALE * 0.5
	)

	if arena == null:
		return fallback
	var arena_mesh := arena.get_node_or_null("Arena")
	if arena_mesh == null:
		return fallback

	var map_data = arena_mesh.get("current_map_data")
	if not (map_data is Dictionary):
		return fallback
	if not map_data.has("size"):
		return fallback
	if not (map_data["size"] is Vector3):
		return fallback

	var map_size: Vector3 = map_data["size"]
	return Vector3(map_size.x * Config.MAP_SCALE * 0.5, map_size.y * Config.MAP_SCALE, map_size.z * Config.MAP_SCALE * 0.5)

func _reset_input() -> void:
	current_input["pitch"] = 0.0
	current_input["yaw"] = 0.0
	current_input["roll"] = 0.0
	current_input["boost"] = false
	current_input["shoot_item"] = false
	current_input["use_item"] = false
	current_input["next_item"] = false
	current_input["drop_item"] = false

func _decide_item_usage(best_probe: Dictionary) -> void:
	if player == null:
		return
	var inv_value = player.get("inventory")
	if not (inv_value is Array):
		return
	var inventory: Array = inv_value
	if inventory.is_empty():
		return

	var aggression := _get_profile_float("aggression", 0.5)
	var shoot_chance := _get_profile_float("item_shoot_chance", 0.012) * (0.8 + aggression)
	var use_chance := _get_profile_float("item_use_chance", 0.05) * (1.2 - aggression * 0.35)

	# Shoot if path is clear and we are not in immediate danger.
	if item_shoot_cooldown <= 0.0 and _forward_risk < 0.35 and float(best_probe.get("risk", 1.0)) < 0.45 and randf() < shoot_chance:
		current_input["shoot_item"] = true
		item_shoot_cooldown = _get_profile_float("item_shoot_cooldown", 0.62)
		return

	# Use a defensive item when pressure is high.
	if item_use_cooldown <= 0.0 and _forward_risk > 0.72 and randf() < use_chance:
		current_input["use_item"] = true
		item_use_cooldown = _get_profile_float("item_use_cooldown", 0.95)
		return

	# Cycle occasionally to avoid being stuck on a bad item.
	if inventory.size() > 1 and randf() < 0.012:
		current_input["next_item"] = true

func _apply_input() -> void:
	if player == null:
		return
	if player.has_method("set_bot_input"):
		player.call("set_bot_input", current_input)

func _get_profile_float(key: String, fallback: float) -> float:
	if _profile.is_empty():
		return fallback
	if not _profile.has(key):
		return fallback
	return float(_profile[key])

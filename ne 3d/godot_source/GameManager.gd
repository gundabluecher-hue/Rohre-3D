extends Node

const Config = preload("res://Config.gd")
const BotControllerScript = preload("res://BotController.gd")
const AudioBusScript = preload("res://AudioBus.gd")
const ProjectileScript = preload("res://Projectile.gd")

signal game_started(mode: String)
signal state_changed(new_state: int, old_state: int)
signal countdown_updated(seconds_left: int)
signal round_started(round_index: int)
signal round_ended(round_index: int, winner_index: int, cause: String)
signal score_changed(scores: Dictionary)
signal game_over(winner_index: int)
signal paused_changed(paused: bool)
signal player_spawned(player: Node, player_index: int, is_bot: bool)
signal player_died(player_index: int, cause: String)
signal powerup_collected(player_index: int, type_idx: int)
signal feedback(message: String)

enum GameState { BOOT, COUNTDOWN, PLAYING, ROUND_END, GAME_OVER, PAUSED }

@export var player_scene: PackedScene
@export var arena_node: Node3D
@export var human_players: int = 1
@export var bot_players: int = 3
@export var target_score: int = Config.TARGET_SCORE
@export var bot_difficulty: String = Config.BOT_DEFAULT_DIFFICULTY
@export var lock_on_angle: float = Config.HOMING_LOCK_ON_ANGLE
@export var qa_powerup_sweep: bool = false

var players: Array[Node] = []
var current_round: int = 0
var max_rounds: int = Config.TARGET_SCORE
var scores: Dictionary = {}
var gameplay_settings: Dictionary = {}

var time_scale: float = 1.0
var round_transitioning: bool = false
var game_mode: String = "single"
var game_over_state: bool = false
var winner_index: int = -1

var state: int = GameState.BOOT
var _state_before_pause: int = GameState.BOOT
var _countdown_timer: float = 0.0
var _countdown_last_whole: int = -1
var _round_end_timer: float = 0.0
var _round_timer: float = 0.0
var _round_end_locked: bool = false

var _rng := RandomNumberGenerator.new()
var _audio_bus: Node = null
var _slow_time_timer: float = 0.0
var _slow_time_stacks: int = 0
var _slow_time_scale: float = 1.0
var _qa_powerup_queue: Array[int] = []
var _qa_powerup_timer: float = 0.0
var _collision_query_shape: SphereShape3D = SphereShape3D.new()
var _collision_query: PhysicsShapeQueryParameters3D = PhysicsShapeQueryParameters3D.new()

func _ready() -> void:
	process_mode = Node.PROCESS_MODE_ALWAYS
	add_to_group("game_manager")
	_rng.randomize()
	max_rounds = target_score
	gameplay_settings = Config.get_default_settings().get("gameplay", {}).duplicate(true)

	if arena_node == null:
		arena_node = get_node_or_null("../World") as Node3D
	if arena_node == null and get_tree().current_scene:
		arena_node = get_tree().current_scene.get_node_or_null("World") as Node3D

	_collision_query.shape = _collision_query_shape
	_collision_query.collide_with_bodies = true
	_collision_query.collide_with_areas = false
	_collision_query.margin = 0.02

	_ensure_audio_bus()

func _process(delta: float) -> void:
	if state == GameState.PAUSED:
		return

	_update_global_effects(delta)

	match state:
		GameState.COUNTDOWN:
			_update_countdown(delta)
		GameState.PLAYING:
			_update_playing(delta)
		GameState.ROUND_END:
			_update_round_end(delta)
		_:
			pass

func start_game(mode: String = "single") -> void:
	if player_scene == null:
		push_error("GameManager: player_scene is not assigned.")
		return
	if arena_node == null:
		push_error("GameManager: arena_node is not assigned.")
		return

	game_mode = mode
	max_rounds = target_score
	winner_index = -1
	game_over_state = false
	current_round = 0
	round_transitioning = false
	_round_end_locked = false
	_state_before_pause = GameState.BOOT
	_qa_powerup_queue.clear()
	_qa_powerup_timer = 0.0
	if qa_powerup_sweep:
		print("[QA] Powerup sweep enabled")

	if get_tree().paused:
		get_tree().paused = false

	_clear_runtime_entities()
	_spawn_roster()
	_apply_gameplay_to_live_players()
	_apply_bot_difficulty_to_live_bots()
	_reset_scores()
	_emit_score_changed()

	_change_state(GameState.BOOT)
	emit_signal("game_started", game_mode)

	_start_next_round_countdown()

func restart_game() -> void:
	start_game(game_mode)

func stop_game() -> void:
	_change_state(GameState.BOOT)
	_clear_runtime_entities()
	players.clear()

func toggle_pause() -> void:
	if state == GameState.GAME_OVER or state == GameState.BOOT:
		return

	if state == GameState.PAUSED:
		get_tree().paused = false
		_change_state(_state_before_pause)
		emit_signal("paused_changed", false)
		return

	_state_before_pause = state
	_change_state(GameState.PAUSED)
	get_tree().paused = true
	emit_signal("paused_changed", true)

func is_playing() -> bool:
	return state == GameState.PLAYING

func is_paused() -> bool:
	return state == GameState.PAUSED

func get_state_name() -> String:
	match state:
		GameState.BOOT:
			return "boot"
		GameState.COUNTDOWN:
			return "countdown"
		GameState.PLAYING:
			return "playing"
		GameState.ROUND_END:
			return "round_end"
		GameState.GAME_OVER:
			return "game_over"
		GameState.PAUSED:
			return "paused"
		_:
			return "unknown"

func get_current_round() -> int:
	return current_round

func get_target_score() -> int:
	return target_score

func get_scores_snapshot() -> Dictionary:
	return scores.duplicate(true)

func get_players_snapshot() -> Array:
	return players.duplicate()

func apply_runtime_settings(settings: Dictionary, apply_live: bool = true) -> void:
	var normalized := Config.normalize_settings(settings)
	human_players = 2 if String(normalized.get("mode", "1p")) == "2p" else 1
	bot_players = int(normalized.get("bots", bot_players))
	target_score = int(normalized.get("wins_needed", target_score))
	max_rounds = target_score
	bot_difficulty = String(normalized.get("bot_difficulty", Config.BOT_DEFAULT_DIFFICULTY)).to_upper()
	gameplay_settings = normalized.get("gameplay", {}).duplicate(true)
	lock_on_angle = float(gameplay_settings.get("lock_on_angle", Config.HOMING_LOCK_ON_ANGLE))

	if not apply_live:
		return
	_apply_gameplay_to_live_players()
	_apply_bot_difficulty_to_live_bots()

func get_lock_on_target_index(player_index: int) -> int:
	for p in players:
		if not is_instance_valid(p):
			continue
		if int(p.get("player_index")) != player_index:
			continue
		var target := _find_lock_on_target(p)
		if target == null:
			return -1
		return int(target.get("player_index"))
	return -1

func set_time_scale(scale: float) -> void:
	time_scale = clamp(scale, Config.SLOW_TIME_MIN_SCALE, 1.0)
	Engine.time_scale = time_scale

func _reset_scores() -> void:
	scores.clear()
	for p in players:
		if not is_instance_valid(p):
			continue
		var idx := int(p.get("player_index"))
		scores[idx] = 0

func _emit_score_changed() -> void:
	emit_signal("score_changed", scores.duplicate(true))

func _spawn_roster() -> void:
	players.clear()

	var humans: int = max(1, human_players)
	if game_mode == "multi":
		humans = max(2, humans)
	var bots: int = max(0, bot_players)

	var total: int = humans + bots
	for i in range(total):
		var is_bot: bool = i >= humans
		_spawn_player(i, is_bot)

func _spawn_player(index: int, is_bot: bool) -> void:
	if player_scene == null or arena_node == null:
		return

	var instance := player_scene.instantiate()
	if instance == null:
		return

	instance.add_to_group("players")
	instance.add_to_group("entities")
	instance.set("player_index", index)
	instance.set("is_bot", is_bot)
	instance.set("color", _resolve_player_color(index, is_bot))

	arena_node.add_child(instance)
	if instance.has_method("apply_gameplay_settings"):
		instance.call("apply_gameplay_settings", gameplay_settings)
	players.append(instance)

	_connect_player_signals(instance)
	if is_bot:
		_attach_bot_controller(instance)

	emit_signal("player_spawned", instance, index, is_bot)

func _resolve_player_color(index: int, is_bot: bool) -> Color:
	if index == 0:
		return Config.COLOR_PLAYER_1
	if not is_bot and index == 1:
		return Config.COLOR_PLAYER_2
	if Config.COLOR_BOTS.is_empty():
		return Color.WHITE
	return Config.COLOR_BOTS[index % Config.COLOR_BOTS.size()]

func _attach_bot_controller(player: Node) -> void:
	if player == null:
		return

	for child in player.get_children():
		if child is Node and child.get_script() == BotControllerScript:
			child.queue_free()

	var bot_controller: Node = BotControllerScript.new()
	bot_controller.set("player", player)
	bot_controller.set("arena", arena_node)
	if bot_controller.has_method("set_difficulty"):
		bot_controller.call("set_difficulty", bot_difficulty)
	else:
		bot_controller.set("difficulty", bot_difficulty)
	player.add_child(bot_controller)

func _apply_gameplay_to_live_players() -> void:
	for p in players:
		if not is_instance_valid(p):
			continue
		if p.has_method("apply_gameplay_settings"):
			p.call("apply_gameplay_settings", gameplay_settings)

func _apply_bot_difficulty_to_live_bots() -> void:
	for p in players:
		if not is_instance_valid(p):
			continue
		if not bool(p.get("is_bot")):
			continue
		for child in p.get_children():
			if child == null:
				continue
			if child.get_script() != BotControllerScript:
				continue
			if child.has_method("set_difficulty"):
				child.call("set_difficulty", bot_difficulty)
			else:
				child.set("difficulty", bot_difficulty)

func _connect_player_signals(player: Node) -> void:
	if player == null:
		return

	if player.has_signal("died"):
		var died_callable := Callable(self, "_on_player_died")
		if not player.is_connected("died", died_callable):
			player.connect("died", died_callable)

	if player.has_signal("powerup_applied"):
		var powerup_callable := Callable(self, "_on_player_powerup_applied")
		if not player.is_connected("powerup_applied", powerup_callable):
			player.connect("powerup_applied", powerup_callable)

	if player.has_signal("audio_event"):
		var audio_callable := Callable(self, "_on_player_audio_event")
		if not player.is_connected("audio_event", audio_callable):
			player.connect("audio_event", audio_callable)

	if player.has_signal("item_shot"):
		var shot_callable := Callable(self, "_on_player_item_shot")
		if not player.is_connected("item_shot", shot_callable):
			player.connect("item_shot", shot_callable)

func _start_next_round_countdown() -> void:
	if players.is_empty():
		emit_signal("feedback", "No players available. Restarting roster.")
		_spawn_roster()
		_reset_scores()
		_emit_score_changed()

	if players.is_empty():
		push_error("GameManager: Failed to create player roster.")
		return

	current_round += 1
	round_transitioning = false
	_round_end_locked = false
	_round_timer = 0.0
	_clear_projectiles()

	_reset_global_effects()
	_spawn_all_players_for_round()
	_qa_prepare_powerup_sweep()

	_countdown_timer = max(0.1, Config.COUNTDOWN_SECONDS)
	_countdown_last_whole = -1
	_change_state(GameState.COUNTDOWN)
	_emit_countdown_tick()

func _spawn_all_players_for_round() -> void:
	var spawn_data := _build_spawn_data(players.size())
	for i in range(players.size()):
		var p: Node = players[i]
		if not is_instance_valid(p):
			continue

		var info: Dictionary = spawn_data[i] if i < spawn_data.size() else {
			"position": Vector3(0, Config.START_Y, 0),
			"direction": Vector3(0, 0, -1)
		}

		if p.has_method("spawn"):
			p.call("spawn", info["position"], info["direction"])

func _build_spawn_data(count: int) -> Array:
	var positions: Array[Vector3] = []
	for _i in range(count):
		positions.append(_find_spawn_position(positions))

	var data: Array = []
	for i in range(count):
		var pos := positions[i]
		data.append({
			"position": pos,
			"direction": _find_safe_spawn_direction(pos)
		})
	return data

func _find_spawn_position(existing_positions: Array[Vector3]) -> Vector3:
	var extents := _get_spawn_extents()
	var min_y := Config.START_Y
	var max_y: float = max(Config.START_Y + 2.0, extents.y - Config.SPAWN_MARGIN)

	for _attempt in range(120):
		var candidate := Vector3(
			_rng.randf_range(-extents.x + Config.SPAWN_MARGIN, extents.x - Config.SPAWN_MARGIN),
			_rng.randf_range(min_y, max_y),
			_rng.randf_range(-extents.z + Config.SPAWN_MARGIN, extents.z - Config.SPAWN_MARGIN)
		)

		if _too_close_to_existing(candidate, existing_positions):
			continue
		if _position_collides(candidate, Config.SPAWN_SAFE_RADIUS):
			continue
		if _position_hits_trails(candidate, Config.SPAWN_SAFE_RADIUS):
			continue
		return candidate

	var fallback_angle := _rng.randf_range(0.0, TAU)
	var fallback_radius: float = min(extents.x, extents.z) * 0.45
	return Vector3(
		sin(fallback_angle) * fallback_radius,
		Config.START_Y,
		cos(fallback_angle) * fallback_radius
	)

func _find_safe_spawn_direction(origin: Vector3) -> Vector3:
	var best_dir := Vector3(0, 0, -1)
	var best_clearance := -1.0

	for i in range(24):
		var angle := TAU * float(i) / 24.0
		var horizontal := Vector3(sin(angle), 0.0, -cos(angle))
		for pitch in [-0.2, 0.0, 0.2]:
			var dir := Vector3(horizontal.x, pitch, horizontal.z).normalized()
			var clearance := _trace_clearance(origin, dir, 38.0, 2.0)
			if clearance > best_clearance:
				best_clearance = clearance
				best_dir = dir

	if best_dir.length_squared() < 0.001:
		return Vector3(0, 0, -1)
	return best_dir

func _trace_clearance(origin: Vector3, direction: Vector3, max_distance: float, step_distance: float) -> float:
	var distance := 0.0
	var step: float = max(0.6, step_distance)
	while distance < max_distance:
		distance += step
		var sample := origin + direction * distance
		if _position_collides(sample, Config.HITBOX_RADIUS):
			return distance - step
		if _position_hits_trails(sample, Config.HITBOX_RADIUS):
			return distance - step
	return max_distance

func _too_close_to_existing(candidate: Vector3, existing_positions: Array[Vector3]) -> bool:
	var min_dist_sq := Config.SPAWN_MIN_DISTANCE * Config.SPAWN_MIN_DISTANCE
	for pos in existing_positions:
		if candidate.distance_squared_to(pos) < min_dist_sq:
			return true
	return false

func _position_hits_trails(position: Vector3, radius: float) -> bool:
	for p in players:
		if not is_instance_valid(p):
			continue
		if not p.get("alive"):
			continue
		var trail = p.get("trail_node")
		if trail == null:
			continue
		if trail.has_method("check_collision"):
			var skip_recent := 0
			if trail.call("check_collision", position, radius, skip_recent):
				return true
	return false

func _position_collides(position: Vector3, radius: float) -> bool:
	if arena_node == null:
		return false
	var world := arena_node.get_world_3d()
	if world == null:
		return false

	_collision_query_shape.radius = radius
	_collision_query.transform = Transform3D(Basis.IDENTITY, position)
	var hits := world.direct_space_state.intersect_shape(_collision_query, 1)
	return not hits.is_empty()

func _get_spawn_extents() -> Vector3:
	var fallback := Vector3(
		Config.ARENA_SIZE * Config.MAP_SCALE * 0.5,
		Config.WALL_HEIGHT * Config.MAP_SCALE,
		Config.ARENA_SIZE * Config.MAP_SCALE * 0.5
	)
	if arena_node == null:
		return fallback

	var arena = arena_node.get_node_or_null("Arena")
	if arena == null:
		return fallback

	var map_data = arena.get("current_map_data")
	if not (map_data is Dictionary):
		return fallback
	if not map_data.has("size"):
		return fallback
	if not (map_data["size"] is Vector3):
		return fallback

	var size: Vector3 = map_data["size"]
	var scaled := size * Config.MAP_SCALE
	return Vector3(scaled.x * 0.5, scaled.y, scaled.z * 0.5)

func _update_countdown(delta: float) -> void:
	_countdown_timer = max(0.0, _countdown_timer - delta)
	_emit_countdown_tick()
	if _countdown_timer > 0.0:
		return

	_round_timer = 0.0
	_change_state(GameState.PLAYING)
	_qa_apply_initial_powerup_sweep()
	emit_signal("round_started", current_round)

func _emit_countdown_tick() -> void:
	var whole := int(ceil(_countdown_timer))
	if whole == _countdown_last_whole:
		return
	_countdown_last_whole = whole
	emit_signal("countdown_updated", max(0, whole))

func _update_playing(delta: float) -> void:
	_qa_update_powerup_sweep(delta)
	_round_timer += delta
	if _round_timer >= Config.MAX_ROUND_SECONDS:
		_request_round_end(-1, "timeout")
		return

	var alive_count := 0
	var last_alive_index := -1
	var valid_count := 0

	for p in players:
		if not is_instance_valid(p):
			continue
		valid_count += 1
		if bool(p.get("alive")):
			alive_count += 1
			last_alive_index = int(p.get("player_index"))

	if valid_count <= 1:
		return

	if alive_count <= 1:
		var cause := "last_alive" if last_alive_index >= 0 else "draw"
		_request_round_end(last_alive_index, cause)

func _update_round_end(delta: float) -> void:
	if game_over_state:
		return

	_round_end_timer = max(0.0, _round_end_timer - delta)
	if _round_end_timer > 0.0:
		return

	_start_next_round_countdown()

func _request_round_end(round_winner_index: int, cause: String) -> void:
	if state != GameState.PLAYING:
		return
	if _round_end_locked:
		return

	_round_end_locked = true
	round_transitioning = true
	_change_state(GameState.ROUND_END)
	_clear_projectiles()

	if round_winner_index >= 0:
		if not scores.has(round_winner_index):
			scores[round_winner_index] = 0
		scores[round_winner_index] = int(scores[round_winner_index]) + 1
		_emit_score_changed()

	emit_signal("round_ended", current_round, round_winner_index, cause)
	_play_audio("round_end")

	if round_winner_index >= 0 and int(scores.get(round_winner_index, 0)) >= target_score:
		_set_game_over(round_winner_index)
		return

	_round_end_timer = Config.ROUND_END_DELAY

func _set_game_over(result_winner_index: int) -> void:
	game_over_state = true
	winner_index = result_winner_index
	round_transitioning = false
	_change_state(GameState.GAME_OVER)
	emit_signal("game_over", winner_index)
	_play_audio("game_over")

func _change_state(new_state: int) -> void:
	if state == new_state:
		return
	var old_state := state
	state = new_state
	emit_signal("state_changed", state, old_state)

func _clear_runtime_entities() -> void:
	for node in get_tree().get_nodes_in_group("powerups"):
		if is_instance_valid(node):
			node.queue_free()
	for node in get_tree().get_nodes_in_group("projectiles"):
		if is_instance_valid(node):
			node.queue_free()
	for node in get_tree().get_nodes_in_group("players"):
		if is_instance_valid(node):
			node.queue_free()

	players.clear()

func _clear_projectiles() -> void:
	for node in get_tree().get_nodes_in_group("projectiles"):
		if is_instance_valid(node):
			node.queue_free()

func _reset_global_effects() -> void:
	_slow_time_timer = 0.0
	_slow_time_stacks = 0
	_slow_time_scale = 1.0
	set_time_scale(1.0)

func _update_global_effects(delta: float) -> void:
	if _slow_time_timer <= 0.0:
		return

	_slow_time_timer = max(0.0, _slow_time_timer - delta)
	if _slow_time_timer > 0.0:
		return

	_slow_time_stacks = 0
	_slow_time_scale = 1.0
	set_time_scale(1.0)

func _apply_slow_time(duration: float, scale: float) -> void:
	var safe_duration: float = max(0.4, duration)
	var safe_scale: float = clamp(scale, Config.SLOW_TIME_MIN_SCALE, 0.95)

	if _slow_time_timer > 0.0:
		_slow_time_stacks = min(Config.SLOW_TIME_STACK_CAP, _slow_time_stacks + 1)
		_slow_time_timer = min(
			Config.SLOW_TIME_DURATION_CAP,
			_slow_time_timer + safe_duration * Config.POWERUP_STACK_DURATION_FACTOR
		)
	else:
		_slow_time_stacks = 1
		_slow_time_timer = safe_duration

	_slow_time_scale = min(_slow_time_scale, safe_scale)
	set_time_scale(_slow_time_scale)

func _on_player_died(player_index: int, cause: String) -> void:
	emit_signal("player_died", player_index, cause)

	if state != GameState.PLAYING:
		return

	var alive_count := 0
	var alive_index := -1
	for p in players:
		if not is_instance_valid(p):
			continue
		if bool(p.get("alive")):
			alive_count += 1
			alive_index = int(p.get("player_index"))

	if alive_count <= 1:
		var reason := "last_alive" if alive_index >= 0 else "draw"
		_request_round_end(alive_index, reason)

func _on_player_powerup_applied(player_index: int, type_idx: int) -> void:
	emit_signal("powerup_collected", player_index, type_idx)

	if type_idx != Config.PowerupType.SLOW_TIME:
		return

	var data := Config.get_powerup_data(type_idx)
	_apply_slow_time(
		float(data.get("duration", Config.POWERUP_DURATION_DEFAULT)),
		float(data.get("time_scale", 0.6))
	)

func _on_player_audio_event(event_name: String, _player_index: int) -> void:
	_play_audio(event_name)

func _on_player_item_shot(player_index: int, type_idx: int) -> void:
	if state != GameState.PLAYING:
		return
	var shooter := _find_player_by_index(player_index)
	if shooter == null:
		return
	if not bool(shooter.get("alive")):
		return
	_spawn_projectile_for_player(shooter, type_idx)

func _spawn_projectile_for_player(shooter: Node, type_idx: int) -> void:
	if arena_node == null:
		return
	if ProjectileScript == null:
		return

	var projectile: Node = ProjectileScript.new()
	if projectile == null:
		return

	var forward: Vector3 = (-shooter.global_transform.basis.z).normalized()
	var spawn_pos: Vector3 = shooter.global_position + forward * 2.2
	var target: Node = _find_lock_on_target(shooter)

	projectile.set("owner_player", shooter)
	projectile.set("target_player", target)
	projectile.set("type_idx", type_idx)
	arena_node.add_child(projectile)

	if projectile.has_method("launch"):
		projectile.call("launch", spawn_pos, forward)

func _find_player_by_index(player_index: int) -> Node:
	for p in players:
		if not is_instance_valid(p):
			continue
		if int(p.get("player_index")) == player_index:
			return p
	return null

func _find_lock_on_target(shooter: Node) -> Node:
	if shooter == null:
		return null

	var shooter_pos: Vector3 = shooter.global_position
	var shooter_forward: Vector3 = (-shooter.global_transform.basis.z).normalized()
	var max_range_sq: float = Config.HOMING_MAX_RANGE * Config.HOMING_MAX_RANGE
	var max_angle: float = deg_to_rad(lock_on_angle)

	var best_target: Node = null
	var best_dist_sq := INF

	for p in players:
		if not is_instance_valid(p):
			continue
		if p == shooter:
			continue
		if not bool(p.get("alive")):
			continue

		var to_target: Vector3 = p.global_position - shooter_pos
		var dist_sq: float = to_target.length_squared()
		if dist_sq > max_range_sq or dist_sq < 0.0001:
			continue

		var direction: Vector3 = to_target.normalized()
		if shooter_forward.angle_to(direction) > max_angle:
			continue

		if dist_sq < best_dist_sq:
			best_dist_sq = dist_sq
			best_target = p

	return best_target

func _qa_update_powerup_sweep(delta: float) -> void:
	if not qa_powerup_sweep:
		return
	if _qa_powerup_queue.is_empty():
		return
	if state != GameState.PLAYING:
		return

	_qa_powerup_timer -= delta
	if _qa_powerup_timer > 0.0:
		return
	_qa_powerup_timer = 0.7

	var target_player := _find_primary_human()
	if target_player == null:
		return
	if not bool(target_player.get("alive")):
		return

	var power_type: int = int(_qa_powerup_queue.pop_front())
	if target_player.has_method("apply_powerup"):
		target_player.call("apply_powerup", power_type)
	print("[QA] Applied powerup=%s to player=%d" % [Config.powerup_key_from_type(power_type), int(target_player.get("player_index"))])

func _qa_prepare_powerup_sweep() -> void:
	_qa_powerup_queue.clear()
	_qa_powerup_timer = 0.45
	if not qa_powerup_sweep:
		return

	_qa_powerup_queue.append(Config.PowerupType.SPEED_UP)
	_qa_powerup_queue.append(Config.PowerupType.SLOW_DOWN)
	_qa_powerup_queue.append(Config.PowerupType.THICK)
	_qa_powerup_queue.append(Config.PowerupType.THIN)
	_qa_powerup_queue.append(Config.PowerupType.SHIELD)
	_qa_powerup_queue.append(Config.PowerupType.SLOW_TIME)
	_qa_powerup_queue.append(Config.PowerupType.GHOST)
	_qa_powerup_queue.append(Config.PowerupType.INVERT)

func _qa_apply_initial_powerup_sweep() -> void:
	if not qa_powerup_sweep:
		return
	if _qa_powerup_queue.is_empty():
		return

	var target_player := _find_primary_human()
	if target_player == null:
		return
	if not bool(target_player.get("alive")):
		return
	if not target_player.has_method("apply_powerup"):
		return

	var pending := _qa_powerup_queue.duplicate()
	_qa_powerup_queue.clear()
	for type_variant in pending:
		var power_type: int = int(type_variant)
		target_player.call("apply_powerup", power_type)
		print("[QA] Applied powerup=%s to player=%d" % [Config.powerup_key_from_type(power_type), int(target_player.get("player_index"))])

func _find_primary_human() -> Node:
	for p in players:
		if not is_instance_valid(p):
			continue
		if bool(p.get("is_bot")):
			continue
		if int(p.get("player_index")) == 0:
			return p
	for p in players:
		if not is_instance_valid(p):
			continue
		if bool(p.get("is_bot")):
			continue
		return p
	return null

func _ensure_audio_bus() -> void:
	_audio_bus = get_node_or_null("AudioBus")
	if _audio_bus != null:
		return

	if AudioBusScript == null:
		return

	_audio_bus = AudioBusScript.new()
	_audio_bus.name = "AudioBus"
	add_child(_audio_bus)

func _play_audio(event_name: String) -> void:
	if _audio_bus == null:
		return
	if not _audio_bus.has_method("play_event"):
		return
	_audio_bus.call("play_event", event_name)

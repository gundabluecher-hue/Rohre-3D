extends Node3D

const Config = preload("res://Config.gd")

@export var powerup_scene: PackedScene
@export var game_manager: Node
@export var arena: Node3D
@export var spawn_interval: float = Config.POWERUP_SPAWN_INTERVAL
@export var max_on_field: int = Config.POWERUP_MAX_ON_FIELD
@export var spawn_height: float = Config.START_Y

var spawn_timer: float = 0.0
var _rng := RandomNumberGenerator.new()
var _active: bool = false
var _collision_query_shape: SphereShape3D = SphereShape3D.new()
var _collision_query: PhysicsShapeQueryParameters3D = PhysicsShapeQueryParameters3D.new()

func _ready() -> void:
	_rng.randomize()
	spawn_timer = _next_spawn_delay()

	if game_manager == null:
		game_manager = get_node_or_null("../../GameManager")
	if arena == null:
		arena = get_node_or_null("../Arena") as Node3D

	_collision_query.shape = _collision_query_shape
	_collision_query.collide_with_bodies = true
	_collision_query.collide_with_areas = false

	_connect_game_signals()

func _process(delta: float) -> void:
	if powerup_scene == null:
		return
	if not _active:
		return
	if game_manager == null:
		return
	if not bool(game_manager.call("is_playing")):
		return

	spawn_timer -= delta
	if spawn_timer > 0.0:
		return

	spawn_timer = _next_spawn_delay()
	_spawn_powerup_if_needed()

func _next_spawn_delay() -> float:
	return max(0.45, spawn_interval + _rng.randf_range(-Config.POWERUP_SPAWN_JITTER, Config.POWERUP_SPAWN_JITTER))

func _spawn_powerup_if_needed() -> void:
	if get_tree().get_nodes_in_group("powerups").size() >= max_on_field:
		return

	var position := _find_spawn_position()
	if position == Vector3.INF:
		return

	var instance := powerup_scene.instantiate()
	if instance == null:
		return

	if instance.has_method("set"):
		instance.set("type_idx", Config.random_powerup_type(_rng))
	get_parent().add_child(instance)
	instance.global_position = position

func _find_spawn_position() -> Vector3:
	var extents := _get_arena_half_extents()
	for _attempt in range(70):
		var candidate := Vector3(
			_rng.randf_range(-extents.x, extents.x),
			_rng.randf_range(max(4.0, spawn_height - 2.0), max(6.0, extents.y - 6.0)),
			_rng.randf_range(-extents.z, extents.z)
		)

		if not _position_is_valid(candidate):
			continue
		return candidate

	return Vector3.INF

func _position_is_valid(pos: Vector3) -> bool:
	if _is_near_player(pos, Config.POWERUP_MIN_PLAYER_DISTANCE):
		return false
	if _position_collides(pos, Config.POWERUP_PICKUP_RADIUS * 0.65):
		return false
	return true

func _is_near_player(pos: Vector3, min_dist: float) -> bool:
	var min_dist_sq := min_dist * min_dist
	for node in get_tree().get_nodes_in_group("players"):
		if not is_instance_valid(node):
			continue
		if not bool(node.get("alive")):
			continue
		if pos.distance_squared_to(node.global_position) < min_dist_sq:
			return true
	return false

func _position_collides(position: Vector3, radius: float) -> bool:
	if arena == null:
		return false
	var world := arena.get_world_3d()
	if world == null:
		return false

	_collision_query_shape.radius = radius
	_collision_query.transform = Transform3D(Basis.IDENTITY, position)
	var hits := world.direct_space_state.intersect_shape(_collision_query, 1)
	return not hits.is_empty()

func _get_arena_half_extents() -> Vector3:
	var fallback := Vector3(
		Config.ARENA_SIZE * Config.MAP_SCALE * 0.45,
		Config.WALL_HEIGHT * Config.MAP_SCALE,
		Config.ARENA_SIZE * Config.MAP_SCALE * 0.45
	)
	if arena == null:
		return fallback

	var map_data = arena.get("current_map_data")
	if not (map_data is Dictionary):
		return fallback
	if not map_data.has("size"):
		return fallback
	if not (map_data["size"] is Vector3):
		return fallback

	var size_value: Vector3 = map_data["size"]
	var scaled := size_value * Config.MAP_SCALE * 0.5
	return Vector3(
		max(8.0, scaled.x - Config.SPAWN_MARGIN),
		max(10.0, scaled.y),
		max(8.0, scaled.z - Config.SPAWN_MARGIN)
	)

func _connect_game_signals() -> void:
	if game_manager == null:
		return

	_safe_connect("game_started", "_on_game_started")
	_safe_connect("round_started", "_on_round_started")
	_safe_connect("round_ended", "_on_round_ended")
	_safe_connect("game_over", "_on_game_over")
	_safe_connect("state_changed", "_on_state_changed")

func _safe_connect(signal_name: StringName, method_name: StringName) -> void:
	if not game_manager.has_signal(signal_name):
		return
	var cb := Callable(self, method_name)
	if not game_manager.is_connected(signal_name, cb):
		game_manager.connect(signal_name, cb)

func _on_game_started(_mode: String) -> void:
	_clear_powerups()
	spawn_timer = _next_spawn_delay()
	_active = false

func _on_round_started(_round_index: int) -> void:
	spawn_timer = max(0.5, _next_spawn_delay() * 0.65)
	_active = true

func _on_round_ended(_round_index: int, _winner_index: int, _cause: String) -> void:
	_active = false
	_clear_powerups()

func _on_game_over(_winner_index: int) -> void:
	_active = false
	_clear_powerups()

func _on_state_changed(new_state: int, _old_state: int) -> void:
	# GameManager.GameState.PLAYING = 2
	_active = new_state == 2

func _clear_powerups() -> void:
	for node in get_tree().get_nodes_in_group("powerups"):
		if is_instance_valid(node):
			node.queue_free()

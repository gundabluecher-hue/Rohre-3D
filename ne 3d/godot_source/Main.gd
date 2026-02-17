extends Node

const Config = preload("res://Config.gd")
const SettingsStore = preload("res://SettingsStore.gd")
const CameraRefScript = preload("res://CameraRef.gd")
const HUDScript = preload("res://HUD.gd")

@onready var arena: Node3D = $World/Arena
@onready var game_manager: Node = $GameManager
@onready var camera_ref: Camera3D = $World/Camera3D
@onready var powerup_spawner: Node = $World/PowerupSpawner
@onready var hud: Control = $HUD
@onready var runtime_menu: CanvasLayer = $RuntimeMenu

@export var map_key: String = "standard"
@export var game_mode: String = "single"
@export var human_player_count: int = 1
@export var bot_player_count: int = 3

var _settings: Dictionary = {}

var _game_over: bool = false
var _match_started: bool = false
var _menu_in_game: bool = false
var _auto_start_match: bool = false

var _qa_matches_target: int = 0
var _qa_matches_completed: int = 0
var _qa_target_score_override: int = -1
var _qa_powerup_sweep: bool = false

var _cli_overrides: Dictionary = {}
var _cli_gameplay_overrides: Dictionary = {}

var _split_root: HBoxContainer = null
var _split_viewport_p1: SubViewport = null
var _split_viewport_p2: SubViewport = null
var _split_camera_p1: Camera3D = null
var _split_camera_p2: Camera3D = null
var _hud_p2: Control = null

func _ready() -> void:
	process_mode = Node.PROCESS_MODE_ALWAYS
	_ensure_input_actions()
	_parse_cli_args()
	_load_settings()
	_apply_cli_overrides()

	_setup_split_screen_nodes()
	_wire_references()
	_connect_game_signals()
	_connect_menu_signals()

	_apply_settings_to_runtime(true)
	runtime_menu.call("set_settings", _settings)

	if _auto_start_match:
		_start_match()
	else:
		runtime_menu.call("open_menu", false)

	call_deferred("_bind_runtime_refs")

func _process(_delta: float) -> void:
	if Input.is_action_just_pressed("pause_game"):
		if runtime_menu.call("is_open"):
			_on_menu_resume_requested()
		else:
			_open_runtime_menu()
		return

	if runtime_menu.call("is_open"):
		return

	if _game_over and Input.is_action_just_pressed("restart_game"):
		_restart_game()

	if Input.is_action_just_pressed("camera_mode"):
		_cycle_camera_mode()
	if Input.is_action_just_pressed("cycle_focus_player"):
		if not _is_split_active():
			_cycle_focus_player()

func _load_settings() -> void:
	_settings = SettingsStore.load_settings()
	if _settings.is_empty():
		_settings = Config.get_default_settings()

func _apply_cli_overrides() -> void:
	var mode_override := String(_cli_overrides.get("mode", "")).to_lower()
	if mode_override == "2p":
		_settings["mode"] = "2p"
	elif mode_override == "1p":
		_settings["mode"] = "1p"

	var map_override := String(_cli_overrides.get("map_key", "")).to_lower()
	if not map_override.is_empty():
		_settings["map_key"] = map_override

	if _cli_overrides.has("bots"):
		_settings["bots"] = int(_cli_overrides["bots"])
	if _cli_overrides.has("bot_difficulty"):
		_settings["bot_difficulty"] = String(_cli_overrides["bot_difficulty"]).to_upper()
	if _cli_overrides.has("wins_needed"):
		_settings["wins_needed"] = int(_cli_overrides["wins_needed"])

	if not _cli_gameplay_overrides.is_empty():
		var gameplay: Dictionary = _settings.get("gameplay", {})
		for key in _cli_gameplay_overrides.keys():
			gameplay[String(key)] = _cli_gameplay_overrides[key]
		_settings["gameplay"] = gameplay

	if _qa_target_score_override > 0:
		_settings["wins_needed"] = _qa_target_score_override
	if _qa_matches_target > 0:
		_auto_start_match = true

	_settings = Config.normalize_settings(_settings)
	_save_settings()

func _save_settings() -> void:
	SettingsStore.save_settings(_settings)

func _connect_menu_signals() -> void:
	if runtime_menu == null:
		return
	_safe_connect_node(runtime_menu, "settings_changed", "_on_menu_settings_changed")
	_safe_connect_node(runtime_menu, "start_match_requested", "_on_menu_start_match_requested")
	_safe_connect_node(runtime_menu, "resume_requested", "_on_menu_resume_requested")

func _safe_connect_node(node: Object, signal_name: StringName, method_name: StringName) -> void:
	if node == null:
		return
	if not node.has_signal(signal_name):
		return
	var callable := Callable(self, method_name)
	if not node.is_connected(signal_name, callable):
		node.connect(signal_name, callable)

func _open_runtime_menu() -> void:
	_menu_in_game = _match_started and game_manager != null
	if _menu_in_game and game_manager.has_method("is_paused") and not game_manager.call("is_paused"):
		if game_manager.has_method("toggle_pause"):
			game_manager.call("toggle_pause")
	runtime_menu.call("open_menu", _menu_in_game)

func _on_menu_settings_changed(new_settings: Dictionary) -> void:
	_settings = Config.normalize_settings(new_settings)
	_save_settings()
	_apply_settings_to_runtime(true)

func _on_menu_start_match_requested() -> void:
	_start_match()

func _on_menu_resume_requested() -> void:
	runtime_menu.call("close_menu")
	if _menu_in_game and game_manager != null and game_manager.has_method("is_paused") and game_manager.call("is_paused"):
		if game_manager.has_method("toggle_pause"):
			game_manager.call("toggle_pause")
	_menu_in_game = false

func _start_match() -> void:
	_menu_in_game = false
	runtime_menu.call("close_menu")
	_apply_settings_to_runtime(true)

	if game_manager != null and game_manager.has_method("start_game"):
		game_manager.call("start_game", game_mode)

	_match_started = true
	_game_over = false
	call_deferred("_bind_runtime_refs")

func _apply_settings_to_runtime(rebuild_map: bool) -> void:
	_settings = Config.normalize_settings(_settings)

	var mode_value := String(_settings.get("mode", "1p"))
	game_mode = "multi" if mode_value == "2p" else "single"
	human_player_count = 2 if mode_value == "2p" else 1
	bot_player_count = int(_settings.get("bots", bot_player_count))
	map_key = String(_settings.get("map_key", map_key))

	var gameplay: Dictionary = _settings.get("gameplay", {})
	var wins_needed := int(_settings.get("wins_needed", Config.TARGET_SCORE))
	var difficulty := String(_settings.get("bot_difficulty", Config.BOT_DEFAULT_DIFFICULTY)).to_upper()
	var runtime_settings := _settings.duplicate(true)

	if _qa_target_score_override > 0:
		wins_needed = _qa_target_score_override
		runtime_settings["wins_needed"] = wins_needed

	if game_manager != null:
		if game_manager.has_method("apply_runtime_settings"):
			game_manager.call("apply_runtime_settings", runtime_settings, true)
		else:
			game_manager.set("human_players", human_player_count)
			game_manager.set("bot_players", bot_player_count)
			game_manager.set("target_score", wins_needed)
			game_manager.set("bot_difficulty", difficulty)
			game_manager.set("lock_on_angle", float(gameplay.get("lock_on_angle", Config.HOMING_LOCK_ON_ANGLE)))
		if _qa_powerup_sweep:
			game_manager.set("qa_powerup_sweep", true)

	if powerup_spawner != null:
		powerup_spawner.set("max_on_field", int(gameplay.get("items", Config.POWERUP_MAX_ON_FIELD)))

	if arena != null:
		if arena.has_method("apply_runtime_settings"):
			arena.call("apply_runtime_settings", gameplay, rebuild_map, map_key)
		elif rebuild_map and arena.has_method("build_map"):
			arena.call("build_map", map_key)

	if runtime_menu != null:
		runtime_menu.call("set_settings", _settings)

	_configure_split_screen(mode_value == "2p")

func _wire_references() -> void:
	if game_manager != null:
		game_manager.set("arena_node", $World)

	if powerup_spawner != null:
		powerup_spawner.set("game_manager", game_manager)
		powerup_spawner.set("arena", arena)

	if hud != null:
		hud.set("game_manager", game_manager)
		hud.set("camera_node", camera_ref)

	if _hud_p2 != null:
		_hud_p2.set("game_manager", game_manager)
		_hud_p2.set("camera_node", _split_camera_p2)

func _parse_cli_args() -> void:
	for arg in OS.get_cmdline_user_args():
		if arg.begins_with("--qa_matches="):
			_qa_matches_target = max(0, arg.trim_prefix("--qa_matches=").to_int())
			continue
		if arg.begins_with("--qa_target_score="):
			_qa_target_score_override = max(1, arg.trim_prefix("--qa_target_score=").to_int())
			continue
		if arg.begins_with("--qa_powerup_sweep="):
			_qa_powerup_sweep = arg.trim_prefix("--qa_powerup_sweep=").to_int() != 0
			continue
		if arg.begins_with("--autostart="):
			_auto_start_match = arg.trim_prefix("--autostart=").to_int() != 0
			continue
		if arg.begins_with("--map="):
			_cli_overrides["map_key"] = arg.trim_prefix("--map=").strip_edges().to_lower()
			continue
		if arg.begins_with("--mode="):
			var mode_value := arg.trim_prefix("--mode=").strip_edges().to_lower()
			_cli_overrides["mode"] = "2p" if mode_value == "multi" or mode_value == "2p" else "1p"
			continue
		if arg.begins_with("--humans="):
			var humans: int = clamp(arg.trim_prefix("--humans=").to_int(), 1, 2)
			_cli_overrides["mode"] = "2p" if humans >= 2 else "1p"
			continue
		if arg.begins_with("--bots="):
			_cli_overrides["bots"] = clamp(arg.trim_prefix("--bots=").to_int(), 0, 8)
			continue
		if arg.begins_with("--wins="):
			_cli_overrides["wins_needed"] = clamp(arg.trim_prefix("--wins=").to_int(), 1, 15)
			continue
		if arg.begins_with("--bot_difficulty="):
			_cli_overrides["bot_difficulty"] = arg.trim_prefix("--bot_difficulty=").strip_edges().to_upper()
			continue
		if arg.begins_with("--planar="):
			_cli_gameplay_overrides["planar_mode"] = arg.trim_prefix("--planar=").to_int() != 0
			continue
		if arg.begins_with("--portal_count="):
			_cli_gameplay_overrides["portal_count"] = clamp(arg.trim_prefix("--portal_count=").to_int(), 0, 20)
			continue
		if arg.begins_with("--portal_beams="):
			_cli_gameplay_overrides["portal_beams"] = arg.trim_prefix("--portal_beams=").to_int() != 0
			continue

func _connect_game_signals() -> void:
	if game_manager == null:
		return

	_safe_connect("game_started", "_on_game_started")
	_safe_connect("round_started", "_on_round_started")
	_safe_connect("game_over", "_on_game_over")
	_safe_connect("player_died", "_on_player_died")

func _safe_connect(signal_name: StringName, method_name: StringName) -> void:
	if not game_manager.has_signal(signal_name):
		return
	var callable := Callable(self, method_name)
	if not game_manager.is_connected(signal_name, callable):
		game_manager.connect(signal_name, callable)

func _on_game_started(_mode: String) -> void:
	_game_over = false
	_match_started = true
	call_deferred("_bind_runtime_refs")

func _on_round_started(_round_index: int) -> void:
	call_deferred("_bind_runtime_refs")

func _on_game_over(_winner_index: int) -> void:
	_game_over = true
	if _qa_matches_target <= 0:
		return

	print("[Flow] Game over. winner=%d" % _winner_index)
	_qa_matches_completed += 1
	print("[QA] Completed match %d/%d" % [_qa_matches_completed, _qa_matches_target])
	if _qa_matches_completed >= _qa_matches_target:
		print("[QA] Completed matches: %d" % _qa_matches_completed)
		return

	await get_tree().create_timer(0.7).timeout
	_start_match()

func _on_player_died(_player_index: int, _cause: String) -> void:
	call_deferred("_bind_runtime_refs")

func _restart_game() -> void:
	_start_match()

func _bind_runtime_refs() -> void:
	var players := get_tree().get_nodes_in_group("players")
	if players.is_empty():
		return

	if _is_split_active():
		var p1: Node = _find_player_by_index(players, 0)
		var p2: Node = _find_player_by_index(players, 1)
		if p1 == null:
			p1 = _pick_focus_player(players)
		if p2 == null:
			p2 = p1

		if _split_camera_p1 != null and p1 != null:
			if _split_camera_p1.has_method("set_target"):
				_split_camera_p1.call("set_target", p1)
			else:
				_split_camera_p1.set("target", p1)
		if _split_camera_p2 != null and p2 != null:
			if _split_camera_p2.has_method("set_target"):
				_split_camera_p2.call("set_target", p2)
			else:
				_split_camera_p2.set("target", p2)

		if hud != null and p1 != null:
			hud.set("player", p1)
			hud.set("camera_node", _split_camera_p1)
		if _hud_p2 != null and p2 != null:
			_hud_p2.set("player", p2)
			_hud_p2.set("camera_node", _split_camera_p2)
		return

	var chosen: Node = _pick_focus_player(players)
	if chosen == null:
		chosen = players[0]

	if camera_ref != null:
		if camera_ref.has_method("set_target"):
			camera_ref.call("set_target", chosen)
		else:
			camera_ref.set("target", chosen)

	if hud != null:
		hud.set("player", chosen)
		hud.set("camera_node", camera_ref)

func _find_player_by_index(players: Array, player_idx: int) -> Node:
	for p in players:
		if not is_instance_valid(p):
			continue
		if int(p.get("player_index")) == player_idx:
			return p
	return null

func _cycle_focus_player() -> void:
	var players := get_tree().get_nodes_in_group("players")
	if players.is_empty():
		return

	var valid_players: Array[Node] = []
	for p in players:
		if not is_instance_valid(p):
			continue
		if not bool(p.get("alive")):
			continue
		valid_players.append(p)
	if valid_players.is_empty():
		return

	var current_player: Node = null
	if hud != null:
		current_player = hud.get("player")

	var current_idx := valid_players.find(current_player)
	if current_idx < 0:
		current_idx = 0
	var next_idx := (current_idx + 1) % valid_players.size()
	var chosen := valid_players[next_idx]

	if camera_ref != null:
		if camera_ref.has_method("set_target"):
			camera_ref.call("set_target", chosen)
		else:
			camera_ref.set("target", chosen)

	if hud != null:
		hud.set("player", chosen)
		hud.set("camera_node", camera_ref)

func _pick_focus_player(players: Array) -> Node:
	var fallback: Node = null
	for p in players:
		if not is_instance_valid(p):
			continue
		if fallback == null:
			fallback = p
		if int(p.get("player_index")) == 0:
			return p
	return fallback

func _cycle_camera_mode() -> void:
	if _is_split_active():
		if _split_camera_p1 != null and _split_camera_p1.has_method("cycle_mode"):
			_split_camera_p1.call("cycle_mode")
		if _split_camera_p2 != null and _split_camera_p2.has_method("cycle_mode"):
			_split_camera_p2.call("cycle_mode")
		return

	if camera_ref != null and camera_ref.has_method("cycle_mode"):
		camera_ref.call("cycle_mode")

func _setup_split_screen_nodes() -> void:
	if _split_root != null:
		return

	_split_root = HBoxContainer.new()
	_split_root.name = "SplitViewportRoot"
	_split_root.anchor_right = 1.0
	_split_root.anchor_bottom = 1.0
	_split_root.mouse_filter = Control.MOUSE_FILTER_IGNORE
	_split_root.add_theme_constant_override("separation", 0)
	add_child(_split_root)
	if hud != null:
		move_child(_split_root, hud.get_index())

	var left_container := SubViewportContainer.new()
	left_container.stretch = true
	left_container.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	left_container.size_flags_vertical = Control.SIZE_EXPAND_FILL
	left_container.mouse_filter = Control.MOUSE_FILTER_IGNORE
	_split_root.add_child(left_container)

	var right_container := SubViewportContainer.new()
	right_container.stretch = true
	right_container.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	right_container.size_flags_vertical = Control.SIZE_EXPAND_FILL
	right_container.mouse_filter = Control.MOUSE_FILTER_IGNORE
	_split_root.add_child(right_container)

	_split_viewport_p1 = SubViewport.new()
	_split_viewport_p1.render_target_update_mode = SubViewport.UPDATE_ALWAYS
	left_container.add_child(_split_viewport_p1)

	_split_viewport_p2 = SubViewport.new()
	_split_viewport_p2.render_target_update_mode = SubViewport.UPDATE_ALWAYS
	right_container.add_child(_split_viewport_p2)

	_split_camera_p1 = CameraRefScript.new()
	_split_camera_p1.name = "SplitCameraP1"
	_split_camera_p1.current = true
	_split_viewport_p1.add_child(_split_camera_p1)

	_split_camera_p2 = CameraRefScript.new()
	_split_camera_p2.name = "SplitCameraP2"
	_split_camera_p2.current = true
	_split_viewport_p2.add_child(_split_camera_p2)

	_hud_p2 = HUDScript.new()
	_hud_p2.name = "HUDP2"
	_hud_p2.visible = false
	add_child(_hud_p2)
	if runtime_menu != null:
		move_child(_hud_p2, runtime_menu.get_index())

	_split_root.visible = false

func _update_split_viewport_sizes() -> void:
	if _split_viewport_p1 == null or _split_viewport_p2 == null:
		return
	var view_size := get_viewport().get_visible_rect().size
	var half_width: int = max(1, int(floor(view_size.x * 0.5)))
	var right_width: int = max(1, int(view_size.x) - half_width)
	var height: int = max(1, int(view_size.y))
	_split_viewport_p1.size = Vector2i(half_width, height)
	_split_viewport_p2.size = Vector2i(right_width, height)

func _configure_split_screen(enabled: bool) -> void:
	_setup_split_screen_nodes()

	var world_3d: World3D = $World.get_world_3d()
	if _split_viewport_p1 != null:
		_split_viewport_p1.world_3d = world_3d
	if _split_viewport_p2 != null:
		_split_viewport_p2.world_3d = world_3d

	if _split_root != null:
		_split_root.visible = enabled

	if camera_ref != null:
		camera_ref.current = not enabled
	if _split_camera_p1 != null:
		_split_camera_p1.current = enabled
	if _split_camera_p2 != null:
		_split_camera_p2.current = enabled

	if hud != null:
		if enabled:
			_set_hud_region(hud, 0.0, 0.5)
			hud.set("camera_node", _split_camera_p1)
		else:
			_set_hud_region(hud, 0.0, 1.0)
			hud.set("camera_node", camera_ref)

	if _hud_p2 != null:
		_hud_p2.visible = enabled
		if enabled:
			_set_hud_region(_hud_p2, 0.5, 1.0)
			_hud_p2.set("camera_node", _split_camera_p2)

func _set_hud_region(target_hud: Control, left_anchor: float, right_anchor: float) -> void:
	target_hud.anchor_left = left_anchor
	target_hud.anchor_top = 0.0
	target_hud.anchor_right = right_anchor
	target_hud.anchor_bottom = 1.0
	target_hud.offset_left = 0.0
	target_hud.offset_top = 0.0
	target_hud.offset_right = 0.0
	target_hud.offset_bottom = 0.0

func _is_split_active() -> bool:
	if _settings.is_empty():
		return false
	return String(_settings.get("mode", "1p")) == "2p"

func _ensure_input_actions() -> void:
	_ensure_action("pitch_up", KEY_W)
	_ensure_action("pitch_down", KEY_S)
	_ensure_action("yaw_left", KEY_A)
	_ensure_action("yaw_right", KEY_D)
	_ensure_action("roll_left", KEY_Q)
	_ensure_action("roll_right", KEY_E)
	_ensure_action("boost", KEY_SPACE)
	_ensure_action("shoot_item", KEY_F)
	_ensure_action("use_item", KEY_G)
	_ensure_action("drop_item", KEY_H)
	_ensure_action("next_item", KEY_T)
	_ensure_action("next_item", KEY_R)

	_ensure_action("pitch_up_p2", KEY_UP)
	_ensure_action("pitch_down_p2", KEY_DOWN)
	_ensure_action("yaw_left_p2", KEY_LEFT)
	_ensure_action("yaw_right_p2", KEY_RIGHT)
	_ensure_action("roll_left_p2", KEY_N)
	_ensure_action("roll_right_p2", KEY_M)
	_ensure_action("boost_p2", KEY_SHIFT)
	_ensure_action("shoot_item_p2", KEY_J)
	_ensure_action("use_item_p2", KEY_K)
	_ensure_action("drop_item_p2", KEY_H)
	_ensure_action("next_item_p2", KEY_L)

	_ensure_action("camera_mode", KEY_C)
	_ensure_action("camera_mode", KEY_V)
	_ensure_action("cycle_focus_player", KEY_TAB)
	_ensure_action("restart_game", KEY_ENTER)
	_ensure_action("restart_game", KEY_KP_ENTER)
	_ensure_action("restart_game", KEY_R)
	_ensure_action("pause_game", KEY_ESCAPE)
	_ensure_action("pause_game", KEY_P)

func _ensure_action(action: String, keycode: int) -> void:
	if not InputMap.has_action(action):
		InputMap.add_action(action)

	for event in InputMap.action_get_events(action):
		if event is InputEventKey and event.keycode == keycode:
			return

	var ev := InputEventKey.new()
	ev.keycode = keycode
	InputMap.action_add_event(action, ev)

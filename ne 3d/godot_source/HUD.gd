extends Control
const Config = preload("res://Config.gd")


@export var player: Node3D
@export var game_manager: Node
@export var camera_node: Node3D
@export var hud_color: Color = Color(0.14, 1.0, 0.42, 0.9)
@export var redraw_interval: float = 0.05

var _font: Font = null
var _scores: Dictionary = {}
var _countdown: int = -1
var _winner_index: int = -1
var _state_name: String = "boot"
var _paused: bool = false

var _feedback_text: String = ""
var _feedback_timer: float = 0.0
var _draw_accumulator: float = 0.0

func _ready() -> void:
	process_mode = Node.PROCESS_MODE_ALWAYS
	_font = ThemeDB.fallback_font
	_connect_game_signals()

func _process(delta: float) -> void:
	if player == null:
		player = get_tree().get_first_node_in_group("players") as Node3D

	if game_manager == null:
		game_manager = get_node_or_null("../GameManager")
		_connect_game_signals()

	if _feedback_timer > 0.0:
		_feedback_timer = max(0.0, _feedback_timer - delta)
		if _feedback_timer == 0.0 and _state_name != "game_over":
			_feedback_text = ""

	_draw_accumulator += delta
	if redraw_interval <= 0.0 or _draw_accumulator >= redraw_interval:
		_draw_accumulator = 0.0
		queue_redraw()

func _draw() -> void:
	if _font == null:
		return

	var view := get_viewport_rect().size
	_draw_flight_panel(Rect2(16, view.y - 248, 420, 232))
	_draw_round_panel(Rect2(16, 16, 330, 94))
	_draw_score_panel(Rect2(view.x - 340, 16, 324, 160))
	_draw_status_panel(Rect2(view.x * 0.5 - 240, 20, 480, 96))

	if _state_name == "game_over":
		_draw_center_overlay("GAME OVER", _winner_text() + "\nPress ENTER or R to restart", Color(1.0, 0.92, 0.35, 1.0))
	elif _paused:
		_draw_center_overlay("PAUSED", "Press ESC or P to continue", Color(0.85, 0.95, 1.0, 1.0))

func _draw_flight_panel(rect: Rect2) -> void:
	_draw_panel(rect)
	_draw_panel_title(rect, "Flight Info")

	if player == null or not is_instance_valid(player):
		_draw_line(rect, 0, "No player")
		return

	var speed := float(player.get("current_speed"))
	var alt := player.global_position.y
	var heading: float = float(player.call("get_heading_deg")) if player.has_method("get_heading_deg") else 0.0
	var pitch: float = float(player.call("get_pitch_deg")) if player.has_method("get_pitch_deg") else 0.0
	var roll: float = float(player.call("get_roll_deg")) if player.has_method("get_roll_deg") else 0.0
	var boost_cd: float = float(player.call("get_boost_cooldown_left")) if player.has_method("get_boost_cooldown_left") else 0.0
	var heading_int := int(round(heading)) % 360

	_draw_line(rect, 0, "SPD  %.1f" % speed)
	_draw_line(rect, 1, "ALT  %.1f" % alt)
	_draw_line(rect, 2, "HDG  %03d" % heading_int)
	_draw_line(rect, 3, "PIT  %+.1f   ROL %+.1f" % [pitch, roll])
	_draw_line(rect, 4, "BOOST CD %.1fs" % boost_cd)
	_draw_line(rect, 5, _build_camera_mode_line())
	_draw_line(rect, 6, _build_inventory_line())
	_draw_line(rect, 7, _build_lock_line())

	var effect_line := _build_effect_line()
	_draw_line(rect, 8, effect_line)

func _draw_round_panel(rect: Rect2) -> void:
	_draw_panel(rect)
	_draw_panel_title(rect, "Round")

	var round_value := 0
	var target_value := 0
	if game_manager != null:
		if game_manager.has_method("get_current_round"):
			round_value = int(game_manager.call("get_current_round"))
		if game_manager.has_method("get_target_score"):
			target_value = int(game_manager.call("get_target_score"))

	_draw_line(rect, 0, "State: %s" % _state_name.to_upper())
	_draw_line(rect, 1, "Round: %d" % round_value)
	_draw_line(rect, 2, "Target Score: %d" % target_value)
	if _countdown >= 0 and _state_name == "countdown":
		_draw_line(rect, 3, "Start in: %d" % _countdown)

func _draw_score_panel(rect: Rect2) -> void:
	_draw_panel(rect)
	_draw_panel_title(rect, "Score")

	var entries := _score_entries()
	if entries.is_empty():
		_draw_line(rect, 0, "No scores yet")
		return

	var line := 0
	for entry in entries:
		_draw_line(rect, line, entry)
		line += 1

func _draw_status_panel(rect: Rect2) -> void:
	_draw_panel(rect)
	_draw_panel_title(rect, "Status")

	var text := _feedback_text
	if text.is_empty():
		if _state_name == "countdown":
			text = "Round starts in %d" % max(0, _countdown)
		elif _state_name == "playing":
			text = "Fight"
		elif _state_name == "round_end":
			text = "Round finished"
		elif _state_name == "game_over":
			text = "Match finished"
		else:
			text = "Waiting"

	_draw_line(rect, 0, text)

func _draw_panel(rect: Rect2) -> void:
	draw_rect(rect, Color(0.0, 0.0, 0.0, 0.52))
	draw_rect(rect, hud_color, false, 2.0)

func _draw_panel_title(rect: Rect2, title: String) -> void:
	draw_string(_font, Vector2(rect.position.x + 10, rect.position.y + 20), title, HORIZONTAL_ALIGNMENT_LEFT, -1, 16, hud_color)

func _draw_line(rect: Rect2, line_idx: int, text: String) -> void:
	var y := rect.position.y + 42.0 + float(line_idx) * 20.0
	draw_string(_font, Vector2(rect.position.x + 10, y), text, HORIZONTAL_ALIGNMENT_LEFT, -1, 15, Color(0.88, 1.0, 0.9, 1.0))

func _draw_center_overlay(title: String, subtitle: String, tint: Color) -> void:
	var view := get_viewport_rect().size
	var box := Rect2(view.x * 0.5 - 250.0, view.y * 0.5 - 90.0, 500.0, 180.0)
	draw_rect(box, Color(0.0, 0.0, 0.0, 0.72))
	draw_rect(box, tint, false, 3.0)

	var title_size := _font.get_string_size(title, HORIZONTAL_ALIGNMENT_LEFT, -1, 28)
	draw_string(_font, Vector2(view.x * 0.5 - title_size.x * 0.5, box.position.y + 62.0), title, HORIZONTAL_ALIGNMENT_LEFT, -1, 28, tint)

	var subtitle_lines := subtitle.split("\n")
	for i in range(subtitle_lines.size()):
		var line := subtitle_lines[i]
		var line_size := _font.get_string_size(line, HORIZONTAL_ALIGNMENT_LEFT, -1, 18)
		draw_string(
			_font,
			Vector2(view.x * 0.5 - line_size.x * 0.5, box.position.y + 96.0 + float(i) * 24.0),
			line,
			HORIZONTAL_ALIGNMENT_LEFT,
			-1,
			18,
			Color(0.95, 0.95, 0.95, 1.0)
		)

func _score_entries() -> Array[String]:
	var result: Array[String] = []
	var players: Array = []
	if game_manager != null:
		if game_manager.has_method("get_players_snapshot"):
			var p_value = game_manager.call("get_players_snapshot")
			if p_value is Array:
				players = p_value

	if players.is_empty():
		for idx in _scores.keys():
			result.append("P%d: %d" % [int(idx) + 1, int(_scores[idx])])
		return result

	for p in players:
		if not is_instance_valid(p):
			continue
		var idx := int(p.get("player_index"))
		var name := _player_display_name(idx)
		var points := int(_scores.get(idx, 0))
		var alive_flag := "ALIVE" if bool(p.get("alive")) else "DOWN"
		result.append("%s  %d  [%s]" % [name, points, alive_flag])

	return result

func _build_effect_line() -> String:
	if player == null or not is_instance_valid(player):
		return "Effects: -"
	if not player.has_method("get_status_effects"):
		return "Effects: -"

	var effects: Array = player.call("get_status_effects")
	if effects.is_empty():
		return "Effects: none"

	var text := "Effects: "
	for i in range(min(3, effects.size())):
		if i > 0:
			text += " | "
		text += String(effects[i])
	return text

func _build_inventory_line() -> String:
	if player == null or not is_instance_valid(player):
		return "Items: -"
	var inventory_value = player.get("inventory")
	if not (inventory_value is Array):
		return "Items: -"
	var inventory: Array = inventory_value
	if inventory.is_empty():
		return "Items: empty"

	var selected := int(player.get("selected_item_index"))
	var entries: Array[String] = []
	for i in range(inventory.size()):
		var label := Config.powerup_key_from_type(int(inventory[i]))
		if i == selected:
			label = "[" + label + "]"
		entries.append(label)
	return "Items: %s" % " ".join(entries)

func _build_lock_line() -> String:
	if player == null or not is_instance_valid(player):
		return "Lock: -"
	if game_manager == null:
		return "Lock: -"
	if not game_manager.has_method("get_lock_on_target_index"):
		return "Lock: -"

	var shooter_idx := int(player.get("player_index"))
	var target_idx := int(game_manager.call("get_lock_on_target_index", shooter_idx))
	if target_idx < 0:
		return "Lock: none"
	return "Lock: %s" % _player_display_name(target_idx)

func _build_camera_mode_line() -> String:
	var active_camera := camera_node
	if active_camera == null:
		active_camera = get_viewport().get_camera_3d()
	if active_camera == null:
		return "Cam: -"
	if active_camera.has_method("get_mode_name"):
		return "Cam: %s" % String(active_camera.call("get_mode_name"))
	return "Cam: default"

func _winner_text() -> String:
	if _winner_index < 0:
		return "Winner: none"
	return "Winner: %s" % _player_display_name(_winner_index)

func _player_display_name(player_idx: int) -> String:
	if game_manager != null:
		if game_manager.has_method("get_players_snapshot"):
			var players_value = game_manager.call("get_players_snapshot")
			if players_value is Array:
				var players: Array = players_value
				for p in players:
					if not is_instance_valid(p):
						continue
					if int(p.get("player_index")) != player_idx:
						continue
					if bool(p.get("is_bot")):
						return "BOT%d" % player_idx
					return "P%d" % (player_idx + 1)

	return "P%d" % (player_idx + 1)

func _connect_game_signals() -> void:
	if game_manager == null:
		return

	_connect_if_exists("state_changed", "_on_state_changed")
	_connect_if_exists("countdown_updated", "_on_countdown_updated")
	_connect_if_exists("round_started", "_on_round_started")
	_connect_if_exists("round_ended", "_on_round_ended")
	_connect_if_exists("score_changed", "_on_score_changed")
	_connect_if_exists("game_over", "_on_game_over")
	_connect_if_exists("paused_changed", "_on_paused_changed")
	_connect_if_exists("game_started", "_on_game_started")

func _connect_if_exists(signal_name: StringName, method_name: StringName) -> void:
	if game_manager == null:
		return
	if not game_manager.has_signal(signal_name):
		return
	var callable := Callable(self, method_name)
	if not game_manager.is_connected(signal_name, callable):
		game_manager.connect(signal_name, callable)

func _on_state_changed(new_state: int, _old_state: int) -> void:
	if game_manager != null and game_manager.has_method("get_state_name"):
		_state_name = String(game_manager.call("get_state_name"))
	else:
		_state_name = str(new_state)
	queue_redraw()

func _on_countdown_updated(seconds_left: int) -> void:
	_countdown = seconds_left
	_feedback_text = "Round starts in %d" % max(0, seconds_left)
	_feedback_timer = 0.35
	queue_redraw()

func _on_round_started(round_index: int) -> void:
	_countdown = -1
	_feedback_text = "Round %d started" % round_index
	_feedback_timer = 1.1
	queue_redraw()

func _on_round_ended(round_index: int, winner_index: int, cause: String) -> void:
	if winner_index >= 0:
		_feedback_text = "Round %d winner: %s" % [round_index, _player_display_name(winner_index)]
	else:
		_feedback_text = "Round %d draw (%s)" % [round_index, cause]
	_feedback_timer = 2.0
	queue_redraw()

func _on_score_changed(new_scores: Dictionary) -> void:
	_scores = new_scores.duplicate(true)
	queue_redraw()

func _on_game_over(winner_index: int) -> void:
	_winner_index = winner_index
	_feedback_text = ""
	_feedback_timer = 0.0
	_state_name = "game_over"
	queue_redraw()

func _on_paused_changed(paused: bool) -> void:
	_paused = paused
	queue_redraw()

func _on_game_started(_mode: String) -> void:
	_winner_index = -1
	_countdown = -1
	_feedback_text = ""
	_feedback_timer = 0.0
	_paused = false
	_state_name = "boot"
	queue_redraw()

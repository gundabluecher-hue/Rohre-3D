extends Control
const Config = preload("res://Config.gd")


@export var player: Node3D
@export var game_manager: Node
@export var camera_node: Node3D
@export var hud_color: Color = Color(0.14, 1.0, 0.42, 0.9)
@export var redraw_interval: float = 0.05
@export var fighter_hud_enabled: bool = true
@export var fighter_hud_first_person_only: bool = true
@export var fighter_hud_pitch_px_per_deg: float = 8.0
@export var performance_overlay_enabled: bool = false

var _font: Font = null
var _scores: Dictionary = {}
var _countdown: int = -1
var _winner_index: int = -1
var _state_name: String = "boot"
var _paused: bool = false

var _feedback_text: String = ""
var _feedback_timer: float = 0.0
var _draw_accumulator: float = 0.0
var _performance_snapshot: Dictionary = {}

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
	_draw_fighter_hud(view)
	_draw_flight_panel(Rect2(16, view.y - 248, 420, 232))
	_draw_round_panel(Rect2(16, 16, 330, 94))
	_draw_score_panel(Rect2(view.x - 340, 16, 324, 160))
	_draw_status_panel(Rect2(view.x * 0.5 - 240, 20, 480, 96))
	_draw_performance_overlay(view)

	if _state_name == "game_over":
		_draw_center_overlay("GAME OVER", _winner_text() + "\nPress ENTER or R to restart", Color(1.0, 0.92, 0.35, 1.0))
	elif _paused:
		_draw_center_overlay("PAUSED", "Press ESC or P to continue", Color(0.85, 0.95, 1.0, 1.0))

func set_performance_overlay_enabled(enabled: bool) -> void:
	performance_overlay_enabled = enabled
	queue_redraw()

func set_performance_snapshot(snapshot: Dictionary) -> void:
	_performance_snapshot = snapshot.duplicate(true)
	queue_redraw()

func _draw_performance_overlay(view: Vector2) -> void:
	if not performance_overlay_enabled:
		return

	var rect := Rect2(view.x - 264.0, view.y - 164.0, 248.0, 148.0)
	_draw_panel(rect)
	_draw_panel_title(rect, "Performance")

	var fps := float(_performance_snapshot.get("fps", 0.0))
	var frame_ms := float(_performance_snapshot.get("frame_ms", 0.0))
	var alive_players := int(_performance_snapshot.get("alive_players", 0))
	var quality := String(_performance_snapshot.get("quality_mode", "HIGH"))
	var adaptive := bool(_performance_snapshot.get("adaptive_quality", false))

	_draw_line(rect, 0, "FPS: %.1f" % fps)
	_draw_line(rect, 1, "Frame: %.1f ms" % frame_ms)
	_draw_line(rect, 2, "Alive: %d" % alive_players)
	_draw_line(rect, 3, "Quality: %s" % quality)
	_draw_line(rect, 4, "Adaptive: %s" % ("ON" if adaptive else "OFF"))

func _draw_fighter_hud(view: Vector2) -> void:
	if not fighter_hud_enabled:
		return
	if player == null or not is_instance_valid(player):
		return
	if not bool(player.get("alive")):
		return
	if fighter_hud_first_person_only and not _is_first_person_camera():
		return

	var center := Vector2(view.x * 0.5, view.y * 0.54)
	var scope_radius: float = minf(view.x, view.y) * 0.23
	var pitch: float = float(player.call("get_pitch_deg")) if player.has_method("get_pitch_deg") else 0.0
	var roll: float = float(player.call("get_roll_deg")) if player.has_method("get_roll_deg") else 0.0
	var heading: float = float(player.call("get_heading_deg")) if player.has_method("get_heading_deg") else 0.0
	var speed_value := int(round(float(player.get("current_speed")) * 10.0))
	var alt_value := int(round(player.global_position.y))
	var heading_int := int(round(heading)) % 360
	var roll_rad := deg_to_rad(roll)
	var axis := Vector2(cos(roll_rad), sin(roll_rad))
	var normal := Vector2(-sin(roll_rad), cos(roll_rad))

	var frame_color := Color(hud_color.r, hud_color.g, hud_color.b, 0.76)
	var line_color := Color(0.76, 1.0, 0.8, 0.92)
	var minor_color := Color(0.52, 0.95, 0.66, 0.55)
	var tape_bg := Color(0.0, 0.0, 0.0, 0.4)
	var tape_frame := Color(hud_color.r, hud_color.g, hud_color.b, 0.66)

	draw_arc(center, scope_radius, 0.0, TAU, 72, frame_color, 2.0)
	draw_arc(center, scope_radius * 0.66, 0.0, TAU, 56, Color(frame_color.r, frame_color.g, frame_color.b, 0.22), 1.0)
	_draw_center_cross(center, line_color)

	var horizon_half: float = scope_radius * 0.85
	var horizon_left: Vector2 = center - axis * horizon_half
	var horizon_right: Vector2 = center + axis * horizon_half
	draw_line(horizon_left, horizon_right, Color(line_color.r, line_color.g, line_color.b, 0.62), 1.8)

	for deg in range(-90, 95, 5):
		if deg == 0:
			continue
		var ladder_offset: float = (pitch - float(deg)) * fighter_hud_pitch_px_per_deg
		if absf(ladder_offset) > scope_radius * 1.2:
			continue

		var ladder_center: Vector2 = center + normal * ladder_offset
		var rung_half: float = maxf(24.0, 62.0 - absf(float(deg)) * 0.35)
		var rung_start: Vector2 = ladder_center - axis * rung_half
		var rung_end: Vector2 = ladder_center + axis * rung_half

		if deg < 0:
			var span: Vector2 = rung_end - rung_start
			draw_line(rung_start, rung_start + span * 0.36, minor_color, 1.4)
			draw_line(rung_end - span * 0.36, rung_end, minor_color, 1.4)
		else:
			draw_line(rung_start, rung_end, line_color, 1.6)

		if deg % 10 == 0:
			var label := str(abs(deg))
			var label_left: Vector2 = ladder_center - axis * (rung_half + 18.0)
			var label_right: Vector2 = ladder_center + axis * (rung_half + 8.0)
			draw_string(_font, label_left, label, HORIZONTAL_ALIGNMENT_LEFT, -1, 12, minor_color)
			draw_string(_font, label_right, label, HORIZONTAL_ALIGNMENT_LEFT, -1, 12, minor_color)

	var speed_rect := Rect2(center.x - scope_radius - 114.0, center.y - 110.0, 86.0, 220.0)
	var alt_rect := Rect2(center.x + scope_radius + 28.0, center.y - 110.0, 86.0, 220.0)
	var heading_rect := Rect2(center.x - 168.0, center.y - scope_radius - 68.0, 336.0, 56.0)
	_draw_vertical_tape(speed_rect, "SPD", speed_value, 10, 20, tape_bg, tape_frame, line_color, true)
	_draw_vertical_tape(alt_rect, "ALT", alt_value, 10, 20, tape_bg, tape_frame, line_color, false)
	_draw_heading_tape(heading_rect, heading_int, tape_bg, tape_frame, line_color, minor_color)
	_draw_lock_reticle(view, line_color)

func _draw_center_cross(center: Vector2, color: Color) -> void:
	draw_line(center + Vector2(-22.0, 0.0), center + Vector2(-8.0, 0.0), color, 2.0)
	draw_line(center + Vector2(8.0, 0.0), center + Vector2(22.0, 0.0), color, 2.0)
	draw_line(center + Vector2(0.0, -16.0), center + Vector2(0.0, -4.0), color, 2.0)
	draw_line(center + Vector2(0.0, 4.0), center + Vector2(0.0, 16.0), color, 2.0)
	draw_circle(center, 2.2, color)

func _draw_vertical_tape(
	rect: Rect2,
	title: String,
	current_value: int,
	tick_step: int,
	pixels_per_step: int,
	bg_color: Color,
	frame_color: Color,
	text_color: Color,
	left_aligned: bool
) -> void:
	draw_rect(rect, bg_color)
	draw_rect(rect, frame_color, false, 1.8)
	draw_string(_font, Vector2(rect.position.x + 8.0, rect.position.y + 16.0), title, HORIZONTAL_ALIGNMENT_LEFT, -1, 12, frame_color)

	var center_y := rect.position.y + rect.size.y * 0.5
	var value_text := str(current_value)
	var value_size := _font.get_string_size(value_text, HORIZONTAL_ALIGNMENT_LEFT, -1, 18)
	draw_string(
		_font,
		Vector2(rect.position.x + rect.size.x * 0.5 - value_size.x * 0.5, center_y + 6.0),
		value_text,
		HORIZONTAL_ALIGNMENT_LEFT,
		-1,
		18,
		text_color
	)

	var major_step := tick_step * 2
	var min_tick := current_value - 120
	var max_tick := current_value + 120
	var start_tick := int(floor(float(min_tick) / float(tick_step))) * tick_step
	for tick in range(start_tick, max_tick + tick_step, tick_step):
		var diff := current_value - tick
		var y := center_y + (float(diff) / float(tick_step)) * float(pixels_per_step)
		if y < rect.position.y + 26.0 or y > rect.position.y + rect.size.y - 10.0:
			continue

		var is_major := tick % major_step == 0
		var tick_len := 18.0 if is_major else 10.0
		if left_aligned:
			var tick_start := Vector2(rect.position.x + rect.size.x - tick_len - 4.0, y)
			var tick_end := Vector2(rect.position.x + rect.size.x - 4.0, y)
			draw_line(tick_start, tick_end, text_color, 1.3)
			if is_major:
				draw_string(_font, Vector2(rect.position.x + 6.0, y + 4.0), str(tick), HORIZONTAL_ALIGNMENT_LEFT, -1, 11, text_color)
		else:
			var right_start := Vector2(rect.position.x + 4.0, y)
			var right_end := Vector2(rect.position.x + tick_len + 4.0, y)
			draw_line(right_start, right_end, text_color, 1.3)
			if is_major:
				var label := str(tick)
				var size := _font.get_string_size(label, HORIZONTAL_ALIGNMENT_LEFT, -1, 11)
				draw_string(
					_font,
					Vector2(rect.position.x + rect.size.x - size.x - 6.0, y + 4.0),
					label,
					HORIZONTAL_ALIGNMENT_LEFT,
					-1,
					11,
					text_color
				)

func _draw_heading_tape(
	rect: Rect2,
	current_heading: int,
	bg_color: Color,
	frame_color: Color,
	text_color: Color,
	minor_color: Color
) -> void:
	draw_rect(rect, bg_color)
	draw_rect(rect, frame_color, false, 1.8)

	var center := Vector2(rect.position.x + rect.size.x * 0.5, rect.position.y + rect.size.y * 0.5)
	draw_string(
		_font,
		Vector2(center.x - 16.0, rect.position.y + 18.0),
		"%03d" % current_heading,
		HORIZONTAL_ALIGNMENT_LEFT,
		-1,
		16,
		text_color
	)

	for tick in range(0, 360, 15):
		var diff := _shortest_heading_diff(current_heading, tick)
		var x := center.x + diff * 2.2
		if x < rect.position.x + 6.0 or x > rect.position.x + rect.size.x - 6.0:
			continue

		var is_major := tick % 45 == 0
		var y0 := rect.position.y + rect.size.y - 8.0
		var y1 := y0 - (11.0 if is_major else 6.0)
		draw_line(Vector2(x, y0), Vector2(x, y1), text_color, 1.2)
		if is_major:
			var label := _heading_label(tick)
			var size := _font.get_string_size(label, HORIZONTAL_ALIGNMENT_LEFT, -1, 11)
			draw_string(
				_font,
				Vector2(x - size.x * 0.5, rect.position.y + 16.0),
				label,
				HORIZONTAL_ALIGNMENT_LEFT,
				-1,
				11,
				minor_color
			)

func _draw_lock_reticle(view: Vector2, color: Color) -> void:
	if game_manager == null:
		return
	if not game_manager.has_method("get_lock_on_target_index"):
		return

	var shooter_idx := int(player.get("player_index"))
	var target_idx := int(game_manager.call("get_lock_on_target_index", shooter_idx))
	if target_idx < 0:
		return

	var target := _find_player_node(target_idx)
	if target == null:
		return
	if not bool(target.get("alive")):
		return

	var active_camera := _resolve_active_camera()
	if active_camera == null:
		return
	if active_camera.is_position_behind(target.global_position):
		return

	var screen_pos := active_camera.unproject_position(target.global_position)
	if screen_pos.x < -120.0 or screen_pos.x > view.x + 120.0:
		return
	if screen_pos.y < -120.0 or screen_pos.y > view.y + 120.0:
		return

	var r := 18.0
	draw_arc(screen_pos, r, 0.0, TAU, 40, color, 1.8)
	draw_line(screen_pos + Vector2(-r - 8.0, 0.0), screen_pos + Vector2(-r + 2.0, 0.0), color, 1.8)
	draw_line(screen_pos + Vector2(r - 2.0, 0.0), screen_pos + Vector2(r + 8.0, 0.0), color, 1.8)
	draw_line(screen_pos + Vector2(0.0, -r - 8.0), screen_pos + Vector2(0.0, -r + 2.0), color, 1.8)
	draw_line(screen_pos + Vector2(0.0, r - 2.0), screen_pos + Vector2(0.0, r + 8.0), color, 1.8)

	var dist := int(round(player.global_position.distance_to(target.global_position)))
	var text := "%s  %dm" % [_player_display_name(target_idx), dist]
	draw_string(_font, screen_pos + Vector2(-30.0, -24.0), text, HORIZONTAL_ALIGNMENT_LEFT, -1, 13, color)

func _shortest_heading_diff(current_heading: int, target_heading: int) -> float:
	var diff := float(target_heading - current_heading)
	while diff > 180.0:
		diff -= 360.0
	while diff < -180.0:
		diff += 360.0
	return diff

func _heading_label(value: int) -> String:
	match value % 360:
		0:
			return "N"
		45:
			return "NE"
		90:
			return "E"
		135:
			return "SE"
		180:
			return "S"
		225:
			return "SW"
		270:
			return "W"
		315:
			return "NW"
		_:
			return ""

func _is_first_person_camera() -> bool:
	var active_camera := _resolve_active_camera()
	if active_camera == null:
		return false
	if not active_camera.has_method("get_mode_name"):
		return false
	return String(active_camera.call("get_mode_name")) == "FIRST_PERSON"

func _resolve_active_camera() -> Camera3D:
	if camera_node != null and camera_node is Camera3D:
		return camera_node as Camera3D
	var vp_camera := get_viewport().get_camera_3d()
	return vp_camera

func _find_player_node(player_idx: int) -> Node3D:
	if game_manager == null:
		return null
	if not game_manager.has_method("get_players_snapshot"):
		return null
	var players_value = game_manager.call("get_players_snapshot")
	if not (players_value is Array):
		return null
	var players: Array = players_value
	for p in players:
		if not is_instance_valid(p):
			continue
		if int(p.get("player_index")) != player_idx:
			continue
		if p is Node3D:
			return p as Node3D
	return null

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

extends CanvasLayer
class_name RuntimeMenu

const Config = preload("res://Config.gd")

signal settings_changed(new_settings: Dictionary)
signal start_match_requested()
signal resume_requested()

var settings: Dictionary = {}

var _menu_open_in_game: bool = false
var _updating_controls: bool = false
var _controls: Dictionary = {}

var _title_label: Label = null
var _start_button: Button = null
var _resume_button: Button = null

func _ready() -> void:
	layer = 10
	process_mode = Node.PROCESS_MODE_ALWAYS
	_build_ui()
	visible = false

func set_settings(new_settings: Dictionary) -> void:
	settings = Config.normalize_settings(new_settings)
	_sync_controls()

func open_menu(in_game: bool) -> void:
	_menu_open_in_game = in_game
	visible = true
	_refresh_buttons()
	_sync_controls()

func close_menu() -> void:
	visible = false

func is_open() -> bool:
	return visible

func _build_ui() -> void:
	var root := Control.new()
	root.name = "Root"
	root.anchor_right = 1.0
	root.anchor_bottom = 1.0
	root.mouse_filter = Control.MOUSE_FILTER_STOP
	add_child(root)

	var dim := ColorRect.new()
	dim.anchor_right = 1.0
	dim.anchor_bottom = 1.0
	dim.color = Color(0.0, 0.0, 0.0, 0.72)
	root.add_child(dim)

	var panel := PanelContainer.new()
	panel.custom_minimum_size = Vector2(760, 640)
	panel.anchor_left = 0.5
	panel.anchor_top = 0.5
	panel.anchor_right = 0.5
	panel.anchor_bottom = 0.5
	panel.offset_left = -380.0
	panel.offset_top = -320.0
	panel.offset_right = 380.0
	panel.offset_bottom = 320.0
	root.add_child(panel)

	var margin := MarginContainer.new()
	margin.add_theme_constant_override("margin_left", 14)
	margin.add_theme_constant_override("margin_top", 12)
	margin.add_theme_constant_override("margin_right", 14)
	margin.add_theme_constant_override("margin_bottom", 12)
	panel.add_child(margin)

	var layout := VBoxContainer.new()
	layout.add_theme_constant_override("separation", 10)
	margin.add_child(layout)

	_title_label = Label.new()
	_title_label.text = "Match Setup"
	_title_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	_title_label.add_theme_font_size_override("font_size", 24)
	layout.add_child(_title_label)

	var help := Label.new()
	help.text = "Adjust values live. Use Start/Restart Match to apply roster/map changes."
	help.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	layout.add_child(help)

	var scroll := ScrollContainer.new()
	scroll.size_flags_vertical = Control.SIZE_EXPAND_FILL
	layout.add_child(scroll)

	var content := VBoxContainer.new()
	content.name = "Rows"
	content.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	content.add_theme_constant_override("separation", 8)
	scroll.add_child(content)

	_add_option_row(content, "mode", "Mode", [{"label": "1P", "value": "1p"}, {"label": "2P", "value": "2p"}])
	_add_map_row(content)
	_add_slider_row(content, "bots", "Bots", 0.0, 8.0, 1.0, true, 0)
	_add_option_row(content, "bot_difficulty", "Bot Difficulty", [
		{"label": "EASY", "value": "EASY"},
		{"label": "NORMAL", "value": "NORMAL"},
		{"label": "HARD", "value": "HARD"}
	])
	_add_slider_row(content, "wins_needed", "Wins Needed", 1.0, 15.0, 1.0, true, 0)
	_add_slider_row(content, "speed", "Speed", 8.0, 40.0, 0.5, false, 1)
	_add_slider_row(content, "turn", "Turn", 0.8, 5.0, 0.1, false, 1)
	_add_slider_row(content, "trail_width", "Trail Width", 0.2, 2.5, 0.05, false, 2)
	_add_slider_row(content, "gap_size", "Gap Size", 0.05, 1.5, 0.05, false, 2)
	_add_slider_row(content, "gap_frequency", "Gap Frequency", 0.0, 0.25, 0.005, false, 3)
	_add_slider_row(content, "items", "Items", 1.0, 20.0, 1.0, true, 0)
	_add_slider_row(content, "fire_rate", "Fire Rate", 0.1, 2.0, 0.05, false, 2)
	_add_slider_row(content, "lock_on_angle", "Lock-On", 5.0, 45.0, 1.0, false, 0, "deg")
	_add_check_row(content, "portals_enabled", "Portals Enabled")
	_add_check_row(content, "planar_mode", "Planar Mode")
	_add_slider_row(content, "portal_count", "Portal Count", 0.0, 20.0, 1.0, true, 0)
	_add_check_row(content, "portal_beams", "Portal Beams")

	var buttons := HBoxContainer.new()
	buttons.alignment = BoxContainer.ALIGNMENT_CENTER
	buttons.add_theme_constant_override("separation", 10)
	layout.add_child(buttons)

	var defaults_button := Button.new()
	defaults_button.text = "Defaults"
	defaults_button.pressed.connect(_on_defaults_pressed)
	buttons.add_child(defaults_button)

	_start_button = Button.new()
	_start_button.text = "Start Match"
	_start_button.pressed.connect(func() -> void:
		emit_signal("start_match_requested")
	)
	buttons.add_child(_start_button)

	_resume_button = Button.new()
	_resume_button.text = "Resume"
	_resume_button.pressed.connect(func() -> void:
		emit_signal("resume_requested")
	)
	buttons.add_child(_resume_button)

func _refresh_buttons() -> void:
	if _title_label != null:
		_title_label.text = "Ingame Menu" if _menu_open_in_game else "Match Setup"
	if _resume_button != null:
		_resume_button.visible = _menu_open_in_game
	if _start_button != null:
		_start_button.text = "Restart Match" if _menu_open_in_game else "Start Match"

func _add_map_row(parent: VBoxContainer) -> void:
	var maps := Config.get_maps()
	var options: Array[Dictionary] = []
	for map_key in Config.get_map_keys():
		var map_entry: Dictionary = maps.get(map_key, {})
		options.append({
			"label": String(map_entry.get("name", map_key)),
			"value": map_key
		})
	_add_option_row(parent, "map_key", "Map", options)

func _add_option_row(parent: VBoxContainer, key: String, title: String, options: Array[Dictionary]) -> void:
	var row := HBoxContainer.new()
	row.add_theme_constant_override("separation", 12)
	parent.add_child(row)

	var label := Label.new()
	label.text = title
	label.custom_minimum_size = Vector2(170, 0)
	row.add_child(label)

	var option := OptionButton.new()
	option.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	for entry in options:
		var text := String(entry.get("label", ""))
		var value = entry.get("value", text)
		option.add_item(text)
		var idx := option.item_count - 1
		option.set_item_metadata(idx, value)
	row.add_child(option)

	_controls[key] = {"type": "option", "node": option}
	option.item_selected.connect(func(index: int) -> void:
		if _updating_controls:
			return
		var selected = option.get_item_metadata(index)
		match key:
			"mode":
				settings["mode"] = "2p" if String(selected) == "2p" else "1p"
			"map_key":
				settings["map_key"] = String(selected)
			"bot_difficulty":
				settings["bot_difficulty"] = String(selected).to_upper()
		_emit_settings_changed()
	)

func _add_check_row(parent: VBoxContainer, key: String, title: String) -> void:
	var row := HBoxContainer.new()
	row.add_theme_constant_override("separation", 12)
	parent.add_child(row)

	var label := Label.new()
	label.text = title
	label.custom_minimum_size = Vector2(170, 0)
	row.add_child(label)

	var check := CheckBox.new()
	check.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	row.add_child(check)

	_controls[key] = {"type": "check", "node": check}
	check.toggled.connect(func(pressed: bool) -> void:
		if _updating_controls:
			return
		_set_gameplay_value(key, pressed)
		if key == "planar_mode" and pressed and int(_get_gameplay_value("portal_count", 0)) == 0:
			_set_gameplay_value("portal_count", 4)
		_emit_settings_changed()
	)

func _add_slider_row(
	parent: VBoxContainer,
	key: String,
	title: String,
	min_value: float,
	max_value: float,
	step: float,
	is_int: bool,
	decimals: int,
	suffix: String = ""
) -> void:
	var row := VBoxContainer.new()
	row.add_theme_constant_override("separation", 4)
	parent.add_child(row)

	var header := HBoxContainer.new()
	row.add_child(header)

	var label := Label.new()
	label.text = title
	label.custom_minimum_size = Vector2(170, 0)
	header.add_child(label)

	var value_label := Label.new()
	value_label.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	value_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_RIGHT
	header.add_child(value_label)

	var slider := HSlider.new()
	slider.min_value = min_value
	slider.max_value = max_value
	slider.step = step
	slider.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	row.add_child(slider)

	_controls[key] = {
		"type": "slider",
		"node": slider,
		"value_label": value_label,
		"is_int": is_int,
		"decimals": decimals,
		"suffix": suffix
	}

	slider.value_changed.connect(func(new_value: float) -> void:
		if _updating_controls:
			return
		var payload: Variant = int(round(new_value)) if is_int else snappedf(new_value, step)
		match key:
			"bots":
				settings["bots"] = int(payload)
			"wins_needed":
				settings["wins_needed"] = int(payload)
			_:
				_set_gameplay_value(key, payload)
		if key == "planar_mode":
			_set_gameplay_value("planar_mode", bool(payload))
		_update_slider_label(key)
		_emit_settings_changed()
	)

func _set_gameplay_value(key: String, value: Variant) -> void:
	var gameplay: Dictionary = settings.get("gameplay", {})
	if not (gameplay is Dictionary):
		gameplay = {}
	gameplay[key] = value
	settings["gameplay"] = gameplay

func _get_gameplay_value(key: String, fallback: Variant) -> Variant:
	var gameplay = settings.get("gameplay", {})
	if not (gameplay is Dictionary):
		return fallback
	return gameplay.get(key, fallback)

func _update_slider_label(key: String) -> void:
	if not _controls.has(key):
		return
	var entry: Dictionary = _controls[key]
	if String(entry.get("type", "")) != "slider":
		return
	var slider := entry.get("node") as HSlider
	var value_label := entry.get("value_label") as Label
	if slider == null or value_label == null:
		return

	var is_int := bool(entry.get("is_int", false))
	var decimals := int(entry.get("decimals", 0))
	var suffix := String(entry.get("suffix", ""))
	if is_int:
		value_label.text = "%d%s" % [int(round(slider.value)), suffix]
		return
	value_label.text = "%s%s" % [_format_decimal(slider.value, decimals), suffix]

func _format_decimal(value: float, decimals: int) -> String:
	return ("%." + str(max(0, decimals)) + "f") % value

func _sync_controls() -> void:
	_updating_controls = true

	_select_option("mode", String(settings.get("mode", "1p")))
	_select_option("map_key", String(settings.get("map_key", "standard")))
	_select_option("bot_difficulty", String(settings.get("bot_difficulty", "NORMAL")).to_upper())

	_set_slider("bots", float(settings.get("bots", 1)))
	_set_slider("wins_needed", float(settings.get("wins_needed", 5)))
	_set_slider("speed", float(_get_gameplay_value("speed", Config.PLAYER_SPEED)))
	_set_slider("turn", float(_get_gameplay_value("turn", Config.YAW_SPEED)))
	_set_slider("trail_width", float(_get_gameplay_value("trail_width", Config.TRAIL_WIDTH)))
	_set_slider("gap_size", float(_get_gameplay_value("gap_size", Config.TRAIL_GAP_DURATION)))
	_set_slider("gap_frequency", float(_get_gameplay_value("gap_frequency", Config.TRAIL_GAP_CHANCE)))
	_set_slider("items", float(_get_gameplay_value("items", Config.POWERUP_MAX_ON_FIELD)))
	_set_slider("fire_rate", float(_get_gameplay_value("fire_rate", Config.PROJECTILE_COOLDOWN)))
	_set_slider("lock_on_angle", float(_get_gameplay_value("lock_on_angle", Config.HOMING_LOCK_ON_ANGLE)))
	_set_slider("portal_count", float(_get_gameplay_value("portal_count", 0)))

	_set_check("portals_enabled", bool(_get_gameplay_value("portals_enabled", true)))
	_set_check("planar_mode", bool(_get_gameplay_value("planar_mode", false)))
	_set_check("portal_beams", bool(_get_gameplay_value("portal_beams", true)))

	_updating_controls = false
	_refresh_buttons()

func _select_option(key: String, value: Variant) -> void:
	if not _controls.has(key):
		return
	var entry: Dictionary = _controls[key]
	var option := entry.get("node") as OptionButton
	if option == null:
		return
	for i in range(option.item_count):
		if option.get_item_metadata(i) == value:
			option.select(i)
			return
	if option.item_count > 0:
		option.select(0)

func _set_slider(key: String, value: float) -> void:
	if not _controls.has(key):
		return
	var entry: Dictionary = _controls[key]
	var slider := entry.get("node") as HSlider
	if slider == null:
		return
	slider.value = clamp(value, slider.min_value, slider.max_value)
	_update_slider_label(key)

func _set_check(key: String, value: bool) -> void:
	if not _controls.has(key):
		return
	var entry: Dictionary = _controls[key]
	var check := entry.get("node") as CheckBox
	if check == null:
		return
	check.button_pressed = value

func _emit_settings_changed() -> void:
	settings = Config.normalize_settings(settings)
	_sync_controls()
	emit_signal("settings_changed", settings.duplicate(true))

func _on_defaults_pressed() -> void:
	settings = Config.get_default_settings()
	_emit_settings_changed()

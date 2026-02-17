extends RefCounted
class_name SettingsStore

const Config = preload("res://Config.gd")
const SETTINGS_PATH := "user://runtime_settings_v1.json"
const CONTROL_ACTIONS := [
	"pitch_up",
	"pitch_down",
	"yaw_left",
	"yaw_right",
	"roll_left",
	"roll_right",
	"boost",
	"shoot_item",
	"use_item",
	"drop_item",
	"next_item",
	"pitch_up_p2",
	"pitch_down_p2",
	"yaw_left_p2",
	"yaw_right_p2",
	"roll_left_p2",
	"roll_right_p2",
	"boost_p2",
	"shoot_item_p2",
	"use_item_p2",
	"drop_item_p2",
	"next_item_p2",
	"camera_mode",
	"cycle_focus_player",
	"restart_game",
	"pause_game"
]

static func load_settings() -> Dictionary:
	var defaults := Config.get_default_settings()
	if not FileAccess.file_exists(SETTINGS_PATH):
		return defaults

	var file := FileAccess.open(SETTINGS_PATH, FileAccess.READ)
	if file == null:
		return defaults

	var payload_text := file.get_as_text()
	if payload_text.is_empty():
		return defaults

	var json := JSON.new()
	if json.parse(payload_text) != OK:
		return defaults
	if not (json.data is Dictionary):
		return defaults

	var normalized := Config.normalize_settings(json.data)
	var parsed: Dictionary = json.data
	if parsed.has("controls") and parsed["controls"] is Dictionary:
		_apply_controls(parsed["controls"])
	return normalized

static func save_settings(settings: Dictionary) -> void:
	var normalized := Config.normalize_settings(settings)
	normalized["controls"] = _capture_controls()
	var file := FileAccess.open(SETTINGS_PATH, FileAccess.WRITE)
	if file == null:
		return
	file.store_string(JSON.stringify(normalized, "\t"))

static func _capture_controls() -> Dictionary:
	var result: Dictionary = {}
	for action in CONTROL_ACTIONS:
		if not InputMap.has_action(action):
			continue
		var keys: Array[int] = []
		for event in InputMap.action_get_events(action):
			if not (event is InputEventKey):
				continue
			keys.append(int(event.keycode))
		result[action] = keys
	return result

static func _apply_controls(raw_controls: Dictionary) -> void:
	for action_variant in raw_controls.keys():
		var action := String(action_variant)
		if not InputMap.has_action(action):
			InputMap.add_action(action)

		var existing := InputMap.action_get_events(action)
		for event in existing:
			if event is InputEventKey:
				InputMap.action_erase_event(action, event)

		var key_list_variant = raw_controls[action_variant]
		if not (key_list_variant is Array):
			continue
		var key_list: Array = key_list_variant
		for key_variant in key_list:
			var keycode := int(key_variant)
			if keycode <= 0:
				continue
			var input_event := InputEventKey.new()
			input_event.keycode = keycode
			InputMap.action_add_event(action, input_event)

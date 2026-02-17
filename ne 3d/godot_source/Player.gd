extends CharacterBody3D

const Config = preload("res://Config.gd")

signal died(player_index: int, cause: String)
signal respawned(player_index: int)
signal powerup_applied(player_index: int, type_idx: int)
signal audio_event(event_name: String, player_index: int)
signal item_shot(player_index: int, type_idx: int)
signal inventory_changed(player_index: int, items: Array, selected_index: int)

@export_group("Movement")
@export var base_speed: float = Config.PLAYER_SPEED
@export var pitch_speed: float = Config.PITCH_SPEED
@export var yaw_speed: float = Config.YAW_SPEED
@export var roll_speed: float = Config.ROLL_SPEED
@export var auto_roll: bool = Config.AUTO_ROLL
@export var auto_roll_speed: float = Config.AUTO_ROLL_SPEED

@export_group("Boost")
@export var boost_multiplier: float = Config.BOOST_MULTIPLIER
@export var boost_duration: float = Config.BOOST_DURATION
@export var boost_cooldown_time: float = Config.BOOST_COOLDOWN

@export_group("Gameplay")
@export var fire_rate: float = Config.PROJECTILE_COOLDOWN
@export var planar_mode: bool = false

@export_group("Refs")
@export var trail_node: Node3D
@export var visuals: Node3D

var current_speed: float = 0.0
var boost_timer: float = 0.0
var boost_cooldown: float = 0.0
var is_boosting: bool = false

var alive: bool = true
var is_bot: bool = false
var bot_input: Dictionary = {}
var player_index: int = 0
var color: Color = Color.WHITE
var inventory: Array[int] = []
var selected_item_index: int = 0
var shoot_cooldown: float = 0.0

var spawn_protection_timer: float = 0.0
var shield_timer: float = 0.0
var shield_charges: int = 0

var speed_up_timer: float = 0.0
var slow_down_timer: float = 0.0
var thick_timer: float = 0.0
var thin_timer: float = 0.0
var ghost_timer: float = 0.0
var invert_timer: float = 0.0

var speed_up_stacks: int = 0
var slow_down_stacks: int = 0
var thick_stacks: int = 0
var thin_stacks: int = 0

var _default_collision_mask: int = 0
var _default_trail_width: float = Config.TRAIL_WIDTH
var _gap_frequency_setting: float = Config.TRAIL_GAP_CHANCE
var _gap_size_setting: float = Config.TRAIL_GAP_DURATION
var _body_material: StandardMaterial3D = null
var _shield_mesh: MeshInstance3D = null

func _ready() -> void:
	current_speed = base_speed
	_default_collision_mask = collision_mask

	if trail_node == null:
		trail_node = get_node_or_null("Trail") as Node3D
	if visuals == null:
		visuals = get_node_or_null("Visuals") as Node3D

	if trail_node != null:
		var width_value = trail_node.get("trail_width")
		if width_value != null:
			_default_trail_width = float(width_value)
		trail_node.set("trail_width", _default_trail_width)
		if trail_node.has_method("set_gap_settings"):
			trail_node.call("set_gap_settings", _gap_frequency_setting, _gap_size_setting)

	_setup_visuals()
	_clear_effects_full()
	_apply_visual_state()

func _physics_process(delta: float) -> void:
	_update_timers(delta)
	_update_collision_mode()

	if not alive:
		_update_visual_state_only(delta)
		return

	var input_data := _read_input()
	_apply_rotation(delta, input_data)
	_handle_boost(delta, bool(input_data["boost"]))
	_handle_inventory_actions(input_data)
	_update_effect_outputs()

	var forward := -global_transform.basis.z
	if planar_mode:
		forward.y = 0.0
		if forward.length_squared() < 0.0001:
			forward = Vector3.FORWARD
		forward = forward.normalized()
	velocity = forward * current_speed
	move_and_slide()

	_check_collisions()
	_update_trail(delta)
	_update_visual_state_only(delta)

func _read_input() -> Dictionary:
	var pitch := 0.0
	var yaw := 0.0
	var roll := 0.0
	var boost_pressed := false
	var shoot_pressed := false
	var use_pressed := false
	var next_pressed := false
	var drop_pressed := false

	if is_bot:
		pitch = float(bot_input.get("pitch", 0.0))
		yaw = float(bot_input.get("yaw", 0.0))
		roll = float(bot_input.get("roll", 0.0))
		boost_pressed = bool(bot_input.get("boost", false))
		shoot_pressed = bool(bot_input.get("shoot_item", false))
		use_pressed = bool(bot_input.get("use_item", false))
		next_pressed = bool(bot_input.get("next_item", false))
		drop_pressed = bool(bot_input.get("drop_item", false))
	else:
		if player_index == 1:
			pitch = Input.get_axis("pitch_down_p2", "pitch_up_p2")
			yaw = Input.get_axis("yaw_right_p2", "yaw_left_p2")
			roll = Input.get_axis("roll_right_p2", "roll_left_p2")
			boost_pressed = Input.is_action_just_pressed("boost_p2")
			shoot_pressed = Input.is_action_just_pressed("shoot_item_p2")
			use_pressed = Input.is_action_just_pressed("use_item_p2")
			next_pressed = Input.is_action_just_pressed("next_item_p2")
			drop_pressed = Input.is_action_just_pressed("drop_item_p2")
		else:
			pitch = Input.get_axis("pitch_down", "pitch_up")
			yaw = Input.get_axis("yaw_right", "yaw_left")
			roll = Input.get_axis("roll_right", "roll_left")
			boost_pressed = Input.is_action_just_pressed("boost")
			shoot_pressed = Input.is_action_just_pressed("shoot_item")
			use_pressed = Input.is_action_just_pressed("use_item")
			next_pressed = Input.is_action_just_pressed("next_item")
			drop_pressed = Input.is_action_just_pressed("drop_item")

	if invert_timer > 0.0:
		pitch *= -1.0
		yaw *= -1.0

	return {
		"pitch": clamp(pitch, -1.0, 1.0),
		"yaw": clamp(yaw, -1.0, 1.0),
		"roll": clamp(roll, -1.0, 1.0),
		"boost": boost_pressed,
		"shoot_item": shoot_pressed,
		"use_item": use_pressed,
		"next_item": next_pressed,
		"drop_item": drop_pressed
	}

func _apply_rotation(delta: float, input_data: Dictionary) -> void:
	var pitch := float(input_data["pitch"])
	var yaw := float(input_data["yaw"])
	var roll := float(input_data["roll"])
	if planar_mode:
		pitch = 0.0

	rotate_object_local(Vector3.RIGHT, pitch * pitch_speed * delta)
	rotate_object_local(Vector3.UP, yaw * yaw_speed * delta)
	rotate_object_local(Vector3.BACK, roll * roll_speed * delta)

	var euler := global_transform.basis.get_euler(EULER_ORDER_YXZ)
	if auto_roll and absf(roll) < 0.02:
		euler.z = move_toward(euler.z, 0.0, auto_roll_speed * delta)
	if planar_mode:
		euler.x = 0.0
	else:
		euler.x = clamp(euler.x, -1.45, 1.45)
	global_transform.basis = Basis.from_euler(euler, EULER_ORDER_YXZ).orthonormalized()

func _handle_boost(delta: float, boost_pressed: bool) -> void:
	if boost_pressed and boost_cooldown <= 0.0 and not is_boosting:
		is_boosting = true
		boost_timer = boost_duration
		emit_signal("audio_event", "boost", player_index)

	if is_boosting:
		boost_timer = max(0.0, boost_timer - delta)
		if boost_timer == 0.0:
			is_boosting = false
			boost_cooldown = boost_cooldown_time

	if boost_cooldown > 0.0:
		boost_cooldown = max(0.0, boost_cooldown - delta)
	shoot_cooldown = max(0.0, shoot_cooldown - delta)

func _handle_inventory_actions(input_data: Dictionary) -> void:
	if bool(input_data.get("next_item", false)):
		cycle_item()
	if bool(input_data.get("drop_item", false)):
		drop_selected_item()
	if bool(input_data.get("use_item", false)):
		use_selected_item()
	if bool(input_data.get("shoot_item", false)):
		shoot_selected_item()

func _update_timers(delta: float) -> void:
	spawn_protection_timer = max(0.0, spawn_protection_timer - delta)
	shield_timer = max(0.0, shield_timer - delta)
	ghost_timer = max(0.0, ghost_timer - delta)
	invert_timer = max(0.0, invert_timer - delta)

	speed_up_timer = max(0.0, speed_up_timer - delta)
	slow_down_timer = max(0.0, slow_down_timer - delta)
	thick_timer = max(0.0, thick_timer - delta)
	thin_timer = max(0.0, thin_timer - delta)

	if speed_up_timer == 0.0:
		speed_up_stacks = 0
	if slow_down_timer == 0.0:
		slow_down_stacks = 0
	if thick_timer == 0.0:
		thick_stacks = 0
	if thin_timer == 0.0:
		thin_stacks = 0
	if shield_timer == 0.0 and shield_charges <= 0:
		shield_charges = 0

func _update_collision_mode() -> void:
	if ghost_timer > 0.0:
		collision_mask = 0
	else:
		collision_mask = _default_collision_mask

func _update_effect_outputs() -> void:
	var speed_mult := 1.0
	if speed_up_timer > 0.0 and speed_up_stacks > 0:
		var data_up := Config.get_powerup_data(Config.PowerupType.SPEED_UP)
		speed_mult *= pow(float(data_up.get("speed_mult", 1.2)), speed_up_stacks)
	if slow_down_timer > 0.0 and slow_down_stacks > 0:
		var data_down := Config.get_powerup_data(Config.PowerupType.SLOW_DOWN)
		speed_mult *= pow(float(data_down.get("speed_mult", 0.8)), slow_down_stacks)

	speed_mult = clamp(speed_mult, Config.MIN_SPEED_MULTIPLIER, Config.MAX_SPEED_MULTIPLIER)

	var boost_mult := boost_multiplier if is_boosting else 1.0
	current_speed = base_speed * speed_mult * boost_mult

	var trail_mult := 1.0
	if thick_timer > 0.0 and thick_stacks > 0:
		var thick_data := Config.get_powerup_data(Config.PowerupType.THICK)
		trail_mult *= pow(float(thick_data.get("trail_mult", 1.4)), thick_stacks)
	if thin_timer > 0.0 and thin_stacks > 0:
		var thin_data := Config.get_powerup_data(Config.PowerupType.THIN)
		trail_mult *= pow(float(thin_data.get("trail_mult", 0.65)), thin_stacks)
	trail_mult = clamp(trail_mult, Config.MIN_TRAIL_MULTIPLIER, Config.MAX_TRAIL_MULTIPLIER)

	if trail_node != null:
		trail_node.set("trail_width", _default_trail_width * trail_mult)

func _check_collisions() -> void:
	if spawn_protection_timer > 0.0:
		return
	if ghost_timer > 0.0:
		return

	if get_slide_collision_count() > 0:
		var collision := get_slide_collision(0)
		var wall_normal := collision.get_normal() if collision else Vector3.ZERO
		_handle_impact("wall", wall_normal)
		return

	var all_players := get_tree().get_nodes_in_group("players")
	var head_on_radius_sq := Config.HEAD_ON_PLAYER_RADIUS * Config.HEAD_ON_PLAYER_RADIUS

	for p in all_players:
		if not is_instance_valid(p):
			continue
		if not bool(p.get("alive")):
			continue

		var p_is_ghost := float(p.get("ghost_timer")) > 0.0

		if p != self and not p_is_ghost:
			if global_position.distance_squared_to(p.global_position) <= head_on_radius_sq:
				_handle_impact("player", (global_position - p.global_position).normalized())
				return

		var trail = p.get("trail_node")
		if trail == null:
			continue
		if not trail.has_method("check_collision"):
			continue
		if p_is_ghost:
			continue

		var skip_recent := 0
		if p == self:
			skip_recent = 18

		if trail.call("check_collision", global_position, Config.HITBOX_RADIUS, skip_recent):
			var trail_cause := "trail_self" if p == self else "trail"
			_handle_impact(trail_cause, Vector3.ZERO)
			return

func _handle_impact(cause: String, normal: Vector3) -> void:
	if _consume_shield_if_available():
		_emit_feedback_flash(Color(0.3, 0.7, 1.0), 0.2, 1.8)
		emit_signal("audio_event", "shield", player_index)
		_bounce_from(normal)
		return

	die(cause)

func _bounce_from(normal: Vector3) -> void:
	var forward := -global_transform.basis.z
	var bounce_normal := normal
	if bounce_normal.length_squared() < 0.001:
		bounce_normal = -forward
	bounce_normal = bounce_normal.normalized()

	var reflected := forward.bounce(bounce_normal)
	if reflected.length_squared() < 0.001:
		reflected = forward.rotated(Vector3.UP, PI * 0.5)
	reflected = reflected.normalized()

	global_position += bounce_normal * 1.4
	look_at(global_position + reflected, Vector3.UP)
	spawn_protection_timer = max(spawn_protection_timer, 0.2)

	if trail_node != null and trail_node.has_method("force_gap"):
		trail_node.call("force_gap", 0.25)

func _consume_shield_if_available() -> bool:
	if shield_charges <= 0:
		return false
	shield_charges -= 1
	if shield_charges <= 0:
		shield_timer = 0.0
	return true

func _update_trail(delta: float) -> void:
	if trail_node == null:
		return
	if not trail_node.has_method("update_trail"):
		return
	trail_node.call("update_trail", delta, global_position, -global_transform.basis.z)

func spawn(pos: Vector3, direction: Vector3 = Vector3.ZERO) -> void:
	alive = true
	if visuals != null:
		visuals.visible = true

	global_position = pos
	velocity = Vector3.ZERO
	current_speed = base_speed
	spawn_protection_timer = Config.SPAWN_PROTECTION
	boost_timer = 0.0
	boost_cooldown = 0.0
	shoot_cooldown = 0.0
	is_boosting = false
	inventory.clear()
	selected_item_index = 0
	emit_signal("inventory_changed", player_index, inventory.duplicate(), selected_item_index)

	_clear_effects_full()

	if direction.length_squared() > 0.001:
		look_at(pos + direction.normalized(), Vector3.UP)

	if trail_node != null:
		if trail_node.has_method("clear_trail"):
			trail_node.call("clear_trail")
		if trail_node.has_method("force_gap"):
			trail_node.call("force_gap", 0.25)

	_emit_feedback_flash(Color(1.0, 1.0, 1.0), 0.3, 2.2)
	emit_signal("respawned", player_index)

func die(cause: String = "unknown") -> void:
	if not alive:
		return
	if spawn_protection_timer > 0.0:
		return

	alive = false
	velocity = Vector3.ZERO
	if visuals != null:
		visuals.visible = false

	_emit_feedback_flash(Color(1.0, 0.25, 0.2), 0.35, 2.4)
	emit_signal("audio_event", "hit", player_index)
	emit_signal("died", player_index, cause)

func set_bot_input(input: Dictionary) -> void:
	bot_input = input

func apply_gameplay_settings(gameplay: Dictionary) -> void:
	if not (gameplay is Dictionary):
		return

	base_speed = float(gameplay.get("speed", base_speed))
	var turn := float(gameplay.get("turn", yaw_speed))
	pitch_speed = turn
	yaw_speed = turn
	roll_speed = turn
	fire_rate = max(0.05, float(gameplay.get("fire_rate", fire_rate)))
	planar_mode = bool(gameplay.get("planar_mode", planar_mode))
	_gap_frequency_setting = float(gameplay.get("gap_frequency", _gap_frequency_setting))
	_gap_size_setting = float(gameplay.get("gap_size", _gap_size_setting))

	var width := float(gameplay.get("trail_width", _default_trail_width))
	_default_trail_width = width
	if trail_node != null:
		trail_node.set("trail_width", width)
		if trail_node.has_method("set_gap_settings"):
			trail_node.call(
				"set_gap_settings",
				_gap_frequency_setting,
				_gap_size_setting
			)

	_update_effect_outputs()

func add_to_inventory(type_idx: int) -> bool:
	if inventory.size() >= Config.POWERUP_MAX_INVENTORY:
		return false
	inventory.append(type_idx)
	if inventory.size() == 1:
		selected_item_index = 0
	var data := Config.get_powerup_data(type_idx)
	_emit_feedback_flash(Color(data.get("color", Color.WHITE)), 0.2, 1.4)
	emit_signal("audio_event", "pickup", player_index)
	emit_signal("inventory_changed", player_index, inventory.duplicate(), selected_item_index)
	return true

func cycle_item() -> void:
	if inventory.is_empty():
		selected_item_index = 0
		return
	selected_item_index = (selected_item_index + 1) % inventory.size()
	emit_signal("inventory_changed", player_index, inventory.duplicate(), selected_item_index)

func use_selected_item() -> int:
	if inventory.is_empty():
		return -1
	selected_item_index = clamp(selected_item_index, 0, inventory.size() - 1)
	var type_idx: int = int(inventory.pop_at(selected_item_index))
	if selected_item_index >= inventory.size():
		selected_item_index = 0
	emit_signal("inventory_changed", player_index, inventory.duplicate(), selected_item_index)
	apply_powerup(type_idx)
	return type_idx

func drop_selected_item() -> int:
	if inventory.is_empty():
		return -1
	selected_item_index = clamp(selected_item_index, 0, inventory.size() - 1)
	var type_idx: int = int(inventory.pop_at(selected_item_index))
	if selected_item_index >= inventory.size():
		selected_item_index = 0
	emit_signal("inventory_changed", player_index, inventory.duplicate(), selected_item_index)
	return type_idx

func shoot_selected_item() -> int:
	if inventory.is_empty():
		return -1
	if shoot_cooldown > 0.0:
		return -1
	selected_item_index = clamp(selected_item_index, 0, inventory.size() - 1)
	var type_idx: int = int(inventory.pop_at(selected_item_index))
	if selected_item_index >= inventory.size():
		selected_item_index = 0
	shoot_cooldown = max(0.05, fire_rate)
	emit_signal("inventory_changed", player_index, inventory.duplicate(), selected_item_index)
	emit_signal("audio_event", "shoot", player_index)
	emit_signal("item_shot", player_index, type_idx)
	return type_idx

func consume_shield_charge() -> bool:
	if not _consume_shield_if_available():
		return false
	_emit_feedback_flash(Color(0.3, 0.7, 1.0), 0.2, 1.8)
	emit_signal("audio_event", "shield", player_index)
	return true

func apply_powerup(type_idx: int) -> void:
	var data := Config.get_powerup_data(type_idx)
	var duration := float(data.get("duration", Config.POWERUP_DURATION_DEFAULT))

	match type_idx:
		Config.PowerupType.SPEED_UP:
			slow_down_timer = 0.0
			slow_down_stacks = 0
			speed_up_stacks = min(Config.SPEED_STACK_CAP, speed_up_stacks + 1)
			speed_up_timer = _stacked_duration(speed_up_timer, duration)
		Config.PowerupType.SLOW_DOWN:
			speed_up_timer = 0.0
			speed_up_stacks = 0
			slow_down_stacks = min(Config.SPEED_STACK_CAP, slow_down_stacks + 1)
			slow_down_timer = _stacked_duration(slow_down_timer, duration)
		Config.PowerupType.THICK:
			thin_timer = 0.0
			thin_stacks = 0
			thick_stacks = min(Config.TRAIL_STACK_CAP, thick_stacks + 1)
			thick_timer = _stacked_duration(thick_timer, duration)
		Config.PowerupType.THIN:
			thick_timer = 0.0
			thick_stacks = 0
			thin_stacks = min(Config.TRAIL_STACK_CAP, thin_stacks + 1)
			thin_timer = _stacked_duration(thin_timer, duration)
		Config.PowerupType.SHIELD:
			var add_charges := int(data.get("charges", 1))
			shield_charges = min(Config.SHIELD_STACK_CAP, shield_charges + add_charges)
			shield_timer = _stacked_duration(shield_timer, duration)
		Config.PowerupType.SLOW_TIME:
			# Applied globally in GameManager via signal.
			pass
		Config.PowerupType.GHOST:
			ghost_timer = _stacked_duration(ghost_timer, duration)
		Config.PowerupType.INVERT:
			invert_timer = _stacked_duration(invert_timer, duration)

	_update_effect_outputs()
	_emit_feedback_flash(Color(data.get("color", Color.WHITE)), 0.22, 1.7)
	emit_signal("audio_event", "pickup", player_index)
	emit_signal("powerup_applied", player_index, type_idx)

func _stacked_duration(current_value: float, added_duration: float) -> float:
	if current_value <= 0.0:
		return added_duration
	return current_value + (added_duration * Config.POWERUP_STACK_DURATION_FACTOR)

func _clear_effects_full() -> void:
	shield_timer = 0.0
	shield_charges = 0

	speed_up_timer = 0.0
	slow_down_timer = 0.0
	thick_timer = 0.0
	thin_timer = 0.0
	ghost_timer = 0.0
	invert_timer = 0.0

	speed_up_stacks = 0
	slow_down_stacks = 0
	thick_stacks = 0
	thin_stacks = 0

	collision_mask = _default_collision_mask
	if trail_node != null:
		trail_node.set("trail_width", _default_trail_width)

func get_status_effects() -> Array[String]:
	var result: Array[String] = []
	if spawn_protection_timer > 0.0:
		result.append("Spawn %.1fs" % spawn_protection_timer)
	if shield_charges > 0:
		result.append("Shield x%d" % shield_charges)
	if speed_up_timer > 0.0:
		result.append("Speed+ %.1fs" % speed_up_timer)
	if slow_down_timer > 0.0:
		result.append("Speed- %.1fs" % slow_down_timer)
	if thick_timer > 0.0:
		result.append("Trail+ %.1fs" % thick_timer)
	if thin_timer > 0.0:
		result.append("Trail- %.1fs" % thin_timer)
	if ghost_timer > 0.0:
		result.append("Ghost %.1fs" % ghost_timer)
	if invert_timer > 0.0:
		result.append("Invert %.1fs" % invert_timer)
	if shoot_cooldown > 0.0:
		result.append("Shot CD %.1fs" % shoot_cooldown)
	return result

func get_heading_deg() -> float:
	var euler := global_transform.basis.get_euler(EULER_ORDER_YXZ)
	return wrapf(-rad_to_deg(euler.y), 0.0, 360.0)

func get_pitch_deg() -> float:
	var euler := global_transform.basis.get_euler(EULER_ORDER_YXZ)
	return rad_to_deg(euler.x)

func get_roll_deg() -> float:
	var euler := global_transform.basis.get_euler(EULER_ORDER_YXZ)
	return rad_to_deg(euler.z)

func get_boost_cooldown_left() -> float:
	return boost_cooldown

func _setup_visuals() -> void:
	if visuals == null:
		return

	var body := visuals.get_node_or_null("Body") as MeshInstance3D
	if body != null:
		_body_material = StandardMaterial3D.new()
		_body_material.albedo_color = color
		_body_material.emission_enabled = true
		_body_material.emission = color
		_body_material.emission_energy_multiplier = 0.25
		_body_material.roughness = 0.25
		_body_material.metallic = 0.35
		body.material_override = _body_material

	_shield_mesh = MeshInstance3D.new()
	var shield_shape := SphereMesh.new()
	shield_shape.radius = 1.15
	shield_shape.height = 2.3
	_shield_mesh.mesh = shield_shape

	var shield_mat := StandardMaterial3D.new()
	shield_mat.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
	shield_mat.albedo_color = Color(0.35, 0.62, 1.0, 0.22)
	shield_mat.emission_enabled = true
	shield_mat.emission = Color(0.35, 0.62, 1.0)
	shield_mat.emission_energy_multiplier = 1.2
	shield_mat.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
	_shield_mesh.material_override = shield_mat
	_shield_mesh.visible = false
	add_child(_shield_mesh)

func _update_visual_state_only(_delta: float) -> void:
	_apply_visual_state()

func _apply_visual_state() -> void:
	if _body_material != null:
		var alpha := 0.42 if ghost_timer > 0.0 else 1.0
		_body_material.albedo_color = Color(color.r, color.g, color.b, alpha)
		_body_material.emission = color

	if _shield_mesh != null:
		_shield_mesh.visible = alive and shield_charges > 0
		if _shield_mesh.visible:
			_shield_mesh.rotation.y += 0.07

func _emit_feedback_flash(tint: Color, start_scale: float, end_scale: float) -> void:
	if not is_inside_tree():
		return

	var root := get_tree().current_scene
	if root == null:
		return

	var flash := MeshInstance3D.new()
	var mesh := SphereMesh.new()
	mesh.radius = 0.35
	mesh.height = 0.7
	flash.mesh = mesh

	var mat := StandardMaterial3D.new()
	mat.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
	mat.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
	mat.albedo_color = Color(tint.r, tint.g, tint.b, 0.65)
	mat.emission_enabled = true
	mat.emission = tint
	mat.emission_energy_multiplier = 1.7
	flash.material_override = mat

	root.add_child(flash)
	flash.global_position = global_position
	flash.scale = Vector3.ONE * start_scale

	var tween := flash.create_tween()
	tween.tween_property(flash, "scale", Vector3.ONE * end_scale, 0.18)
	tween.finished.connect(Callable(flash, "queue_free"))

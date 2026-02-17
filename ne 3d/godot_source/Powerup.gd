extends Area3D

const Config = preload("res://Config.gd")

signal picked_up(player_index: int, type_idx: int)

@export var type_key: String = "RANDOM"
@export var type_idx: int = -1

var _base_y: float = 0.0
var _phase: float = 0.0
var _box_mesh: MeshInstance3D = null
var _wire_mesh: MeshInstance3D = null
var _label_3d: Label3D = null

func _ready() -> void:
	add_to_group("powerups")
	monitoring = true
	monitorable = true

	_base_y = global_position.y
	_phase = randf() * TAU

	_resolve_type()
	_setup_visuals()

	if not body_entered.is_connected(_on_body_entered):
		body_entered.connect(_on_body_entered)

func _process(delta: float) -> void:
	rotation.y += Config.POWERUP_ROTATION_SPEED * delta
	var t := Time.get_ticks_msec() * 0.001
	global_position.y = _base_y + sin(t * Config.POWERUP_BOUNCE_SPEED + _phase) * Config.POWERUP_BOUNCE_HEIGHT

func _resolve_type() -> void:
	if type_idx >= 0:
		return

	if type_key.strip_edges().to_upper() != "RANDOM":
		type_idx = Config.powerup_type_from_key(type_key)
		return

	var rng := RandomNumberGenerator.new()
	rng.randomize()
	type_idx = Config.random_powerup_type(rng)

func _setup_visuals() -> void:
	var data := Config.get_powerup_data(type_idx)
	var tint: Color = data.get("color", Color.WHITE)
	var short_label := String(data.get("short", "P"))

	_box_mesh = MeshInstance3D.new()
	var box := BoxMesh.new()
	box.size = Vector3.ONE * Config.POWERUP_SIZE
	_box_mesh.mesh = box

	var mat := StandardMaterial3D.new()
	mat.albedo_color = Color(tint.r, tint.g, tint.b, 0.86)
	mat.emission_enabled = true
	mat.emission = tint
	mat.emission_energy_multiplier = 0.75
	mat.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
	_box_mesh.material_override = mat
	add_child(_box_mesh)

	_wire_mesh = MeshInstance3D.new()
	var wire_box := BoxMesh.new()
	wire_box.size = Vector3.ONE * (Config.POWERUP_SIZE * 1.18)
	_wire_mesh.mesh = wire_box

	var wire_mat := StandardMaterial3D.new()
	wire_mat.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
	wire_mat.albedo_color = Color(tint.r, tint.g, tint.b, 0.35)
	wire_mat.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
	_wire_mesh.material_override = wire_mat
	add_child(_wire_mesh)

	_label_3d = Label3D.new()
	_label_3d.text = short_label
	_label_3d.modulate = tint
	_label_3d.outline_size = 3
	_label_3d.billboard = BaseMaterial3D.BILLBOARD_ENABLED
	_label_3d.position = Vector3(0, Config.POWERUP_SIZE * 0.9, 0)
	add_child(_label_3d)

	var shape := CollisionShape3D.new()
	var sphere := SphereShape3D.new()
	sphere.radius = Config.POWERUP_PICKUP_RADIUS
	shape.shape = sphere
	add_child(shape)

func _on_body_entered(body: Node) -> void:
	if body == null:
		return
	if not body.is_in_group("players"):
		return
	if not bool(body.get("alive")):
		return
	if not body.has_method("add_to_inventory") and not body.has_method("apply_powerup"):
		return

	if body.has_method("add_to_inventory"):
		body.call("add_to_inventory", type_idx)
	else:
		body.call("apply_powerup", type_idx)
	_emit_pickup_flash()
	emit_signal("picked_up", int(body.get("player_index")), type_idx)
	queue_free()

func _emit_pickup_flash() -> void:
	var data := Config.get_powerup_data(type_idx)
	var tint: Color = data.get("color", Color.WHITE)

	var flash := MeshInstance3D.new()
	var sphere := SphereMesh.new()
	sphere.radius = 0.4
	sphere.height = 0.8
	flash.mesh = sphere
	flash.global_position = global_position

	var mat := StandardMaterial3D.new()
	mat.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
	mat.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
	mat.albedo_color = Color(tint.r, tint.g, tint.b, 0.6)
	mat.emission_enabled = true
	mat.emission = tint
	mat.emission_energy_multiplier = 1.6
	flash.material_override = mat

	var root := get_tree().current_scene
	if root != null:
		root.add_child(flash)
		var tween := flash.create_tween()
		tween.tween_property(flash, "scale", Vector3.ONE * 2.2, 0.16)
		tween.finished.connect(Callable(flash, "queue_free"))

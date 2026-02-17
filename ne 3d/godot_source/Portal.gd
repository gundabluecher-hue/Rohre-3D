extends Area3D

const Config = preload("res://Config.gd")

@export var target_portal: Node3D
@export var color: Color = Color(0.0, 1.0, 0.8, 1.0)
@export var direction_hint: String = "NEUTRAL"

var _cooldowns: Dictionary = {}
var _ring: MeshInstance3D = null
var _inner_ring: MeshInstance3D = null
var _arrow: MeshInstance3D = null

func _ready() -> void:
	monitoring = true
	monitorable = true
	_build_visuals()

	if not body_entered.is_connected(_on_body_entered):
		body_entered.connect(_on_body_entered)

func _process(delta: float) -> void:
	if _ring != null:
		_ring.rotation.z += Config.PORTAL_ROTATION_SPEED * delta
		_ring.rotation.y += Config.PORTAL_ROTATION_SPEED * 0.3 * delta
	if _inner_ring != null:
		_inner_ring.rotation.z -= Config.PORTAL_ROTATION_SPEED * delta
		_inner_ring.rotation.y -= Config.PORTAL_ROTATION_SPEED * 0.3 * delta

	var to_erase: Array[int] = []
	for key_variant in _cooldowns.keys():
		var key: int = int(key_variant)
		var time_left: float = max(0.0, float(_cooldowns[key]) - delta)
		if time_left <= 0.0:
			to_erase.append(key)
		else:
			_cooldowns[key] = time_left
	for key in to_erase:
		_cooldowns.erase(key)

func set_cooldown_for(entity_id: int, duration: float) -> void:
	_cooldowns[entity_id] = max(float(_cooldowns.get(entity_id, 0.0)), duration)

func _on_body_entered(body: Node) -> void:
	if target_portal == null:
		return
	if not body.is_in_group("players"):
		return
	if not bool(body.get("alive")):
		return

	var entity_id := body.get_instance_id()
	if float(_cooldowns.get(entity_id, 0.0)) > 0.0:
		return

	_cooldowns[entity_id] = Config.PORTAL_COOLDOWN
	if target_portal.has_method("set_cooldown_for"):
		target_portal.call("set_cooldown_for", entity_id, Config.PORTAL_COOLDOWN)

	var destination := target_portal.global_position
	body.global_position = destination

	var trail = body.get("trail_node")
	if trail != null and trail.has_method("force_gap"):
		trail.call("force_gap", 0.5)

func _build_visuals() -> void:
	var display_color := _display_color()

	var shape := CollisionShape3D.new()
	var sphere := SphereShape3D.new()
	sphere.radius = Config.PORTAL_RADIUS
	shape.shape = sphere
	add_child(shape)

	_ring = MeshInstance3D.new()
	var ring_mesh := TorusMesh.new()
	ring_mesh.inner_radius = Config.PORTAL_RING_SIZE - 0.3
	ring_mesh.outer_radius = Config.PORTAL_RING_SIZE + 0.3
	ring_mesh.rings = 24
	ring_mesh.ring_segments = 24
	_ring.mesh = ring_mesh

	var ring_mat := StandardMaterial3D.new()
	ring_mat.albedo_color = display_color
	ring_mat.emission_enabled = true
	ring_mat.emission = display_color
	ring_mat.emission_energy_multiplier = 1.2
	ring_mat.roughness = 0.2
	ring_mat.metallic = 0.8
	_ring.material_override = ring_mat
	add_child(_ring)

	var disc := MeshInstance3D.new()
	var disc_mesh := CylinderMesh.new()
	disc_mesh.top_radius = Config.PORTAL_RING_SIZE * 0.85
	disc_mesh.bottom_radius = Config.PORTAL_RING_SIZE * 0.85
	disc_mesh.height = 0.04
	disc.mesh = disc_mesh
	var disc_mat := StandardMaterial3D.new()
	disc_mat.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
	disc_mat.albedo_color = Color(display_color.r, display_color.g, display_color.b, 0.18)
	disc_mat.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
	disc.material_override = disc_mat
	add_child(disc)

	_inner_ring = MeshInstance3D.new()
	var inner_mesh := TorusMesh.new()
	inner_mesh.inner_radius = Config.PORTAL_RING_SIZE * 0.6 - 0.12
	inner_mesh.outer_radius = Config.PORTAL_RING_SIZE * 0.6 + 0.12
	inner_mesh.rings = 20
	inner_mesh.ring_segments = 20
	_inner_ring.mesh = inner_mesh
	var inner_mat := StandardMaterial3D.new()
	inner_mat.albedo_color = Color(1.0, 1.0, 1.0, 0.7)
	inner_mat.emission_enabled = true
	inner_mat.emission = display_color
	inner_mat.emission_energy_multiplier = 0.5
	inner_mat.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
	_inner_ring.material_override = inner_mat
	add_child(_inner_ring)

	if direction_hint != "NEUTRAL":
		_arrow = MeshInstance3D.new()
		var arrow_mesh := CylinderMesh.new()
		arrow_mesh.top_radius = 0.0
		arrow_mesh.bottom_radius = 0.7
		arrow_mesh.height = 2.2
		_arrow.mesh = arrow_mesh
		_arrow.rotation.x = PI if direction_hint == "DOWN" else 0.0
		var arrow_mat := StandardMaterial3D.new()
		arrow_mat.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
		arrow_mat.albedo_color = Color(display_color.r, display_color.g, display_color.b, 0.8)
		arrow_mat.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
		arrow_mat.emission_enabled = true
		arrow_mat.emission = display_color
		arrow_mat.emission_energy_multiplier = 1.0
		_arrow.material_override = arrow_mat
		add_child(_arrow)

func _display_color() -> Color:
	match direction_hint:
		"UP":
			return Color(0.0, 1.0, 0.3, 1.0)
		"DOWN":
			return Color(1.0, 0.2, 0.2, 1.0)
		_:
			return color

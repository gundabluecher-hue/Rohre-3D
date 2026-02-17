extends Node3D

const Config = preload("res://Config.gd")

@export var floor_material: StandardMaterial3D
@export var wall_material: StandardMaterial3D
@export var obstacle_material: StandardMaterial3D
@export var portal_scene: PackedScene

@export var portals_enabled: bool = true
@export var planar_mode: bool = false
@export var portal_count: int = 0
@export var portal_beams: bool = true

var current_map_data: Dictionary = {}
var current_map_key: String = "standard"
var generated_nodes: Array[Node] = []

var _portals: Array[Node3D] = []
var _beams: Array[MeshInstance3D] = []
var _rng := RandomNumberGenerator.new()

func _ready() -> void:
	_rng.randomize()

func build_map(map_key: String, gameplay: Dictionary = {}) -> void:
	_apply_gameplay_values(gameplay)
	current_map_key = map_key
	_clear_map()

	var maps := Config.get_maps()
	if not maps.has(current_map_key):
		current_map_key = "standard"
	current_map_data = maps[current_map_key]

	var size: Vector3 = current_map_data["size"]
	var scale_factor := Config.MAP_SCALE
	var sx := size.x * scale_factor
	var sy := size.y * scale_factor
	var sz := size.z * scale_factor

	_create_floor(sx, sz)

	var wall_t := Config.WALL_THICKNESS * scale_factor
	var wall_h := sy
	_create_wall(Vector3(0.0, wall_h * 0.5, sz * 0.5 + wall_t * 0.5), Vector3(sx + 2.0 * wall_t, wall_h, wall_t))
	_create_wall(Vector3(0.0, wall_h * 0.5, -sz * 0.5 - wall_t * 0.5), Vector3(sx + 2.0 * wall_t, wall_h, wall_t))
	_create_wall(Vector3(-sx * 0.5 - wall_t * 0.5, wall_h * 0.5, 0.0), Vector3(wall_t, wall_h, sz))
	_create_wall(Vector3(sx * 0.5 + wall_t * 0.5, wall_h * 0.5, 0.0), Vector3(wall_t, wall_h, sz))
	_create_wall(Vector3(0.0, wall_h, 0.0), Vector3(sx, wall_t, sz))

	if current_map_data.has("obstacles"):
		for obs in current_map_data["obstacles"]:
			var pos: Vector3 = obs["pos"] * scale_factor
			var dim: Vector3 = obs["size"] * scale_factor
			_create_obstacle(pos, dim)

	_build_portals(scale_factor)

func apply_runtime_settings(gameplay: Dictionary, rebuild_map: bool = false, map_override: String = "") -> void:
	_apply_gameplay_values(gameplay)
	if not map_override.is_empty():
		current_map_key = map_override

	if rebuild_map:
		build_map(current_map_key, gameplay)
	else:
		set_portal_beams_visible(portal_beams)

func toggle_beams(visible: bool) -> void:
	set_portal_beams_visible(visible)

func set_portal_beams_visible(visible: bool) -> void:
	portal_beams = visible
	for beam in _beams:
		if is_instance_valid(beam):
			beam.visible = visible

func _apply_gameplay_values(gameplay: Dictionary) -> void:
	if not (gameplay is Dictionary):
		return
	portals_enabled = bool(gameplay.get("portals_enabled", portals_enabled))
	planar_mode = bool(gameplay.get("planar_mode", planar_mode))
	portal_count = clamp(int(gameplay.get("portal_count", portal_count)), 0, 20)
	portal_beams = bool(gameplay.get("portal_beams", portal_beams))

func _create_floor(sx: float, sz: float) -> void:
	var floor_mesh := MeshInstance3D.new()
	var plane := PlaneMesh.new()
	plane.size = Vector2(sx, sz)
	floor_mesh.mesh = plane
	floor_mesh.material_override = floor_material
	floor_mesh.create_trimesh_collision()
	add_child(floor_mesh)
	generated_nodes.append(floor_mesh)

func _create_wall(pos: Vector3, size: Vector3) -> void:
	var mesh_inst := MeshInstance3D.new()
	var box := BoxMesh.new()
	box.size = size
	mesh_inst.mesh = box
	mesh_inst.material_override = wall_material
	mesh_inst.position = pos

	var body := StaticBody3D.new()
	var shape := CollisionShape3D.new()
	shape.shape = box.create_convex_shape()
	body.add_child(shape)
	mesh_inst.add_child(body)

	add_child(mesh_inst)
	generated_nodes.append(mesh_inst)

func _create_obstacle(pos: Vector3, size: Vector3) -> void:
	var mesh_inst := MeshInstance3D.new()
	var box := BoxMesh.new()
	box.size = size
	mesh_inst.mesh = box
	mesh_inst.material_override = obstacle_material
	mesh_inst.position = pos

	var body := StaticBody3D.new()
	var shape := CollisionShape3D.new()
	shape.shape = box.create_convex_shape()
	body.add_child(shape)
	mesh_inst.add_child(body)

	add_child(mesh_inst)
	generated_nodes.append(mesh_inst)

func _build_portals(scale_factor: float) -> void:
	_portals.clear()
	_beams.clear()
	if not portals_enabled:
		return

	if portal_count > 0:
		_generate_dynamic_portals(portal_count, scale_factor)
	elif current_map_data.has("portals"):
		for p_def in current_map_data["portals"]:
			var pos_a: Vector3 = p_def["a"] * scale_factor
			var pos_b: Vector3 = p_def["b"] * scale_factor
			var color: Color = p_def.get("color", Color(0.0, 1.0, 0.8))
			_create_portal_pair(pos_a, pos_b, color)

	set_portal_beams_visible(portal_beams)

func _generate_dynamic_portals(count: int, _scale_factor: float) -> void:
	var colors: Array[Color] = [
		Color(0.0, 1.0, 0.8),
		Color(1.0, 0.0, 0.8),
		Color(1.0, 1.0, 0.2),
		Color(0.3, 0.8, 1.0)
	]

	for i in range(count):
		var color := colors[i % colors.size()]
		if planar_mode:
			_generate_planar_portal_pair(color)
		else:
			_generate_random_portal_pair(color)

func _generate_planar_portal_pair(color: Color) -> void:
	var extents := _get_map_extents()
	var levels: Array[float] = [10.0, 32.0, 54.0, 76.0]
	for i in range(levels.size()):
		levels[i] = clamp(levels[i], 4.0, extents.y - 4.0)

	var idx_a := _rng.randi_range(0, levels.size() - 1)
	var idx_b := _rng.randi_range(0, levels.size() - 1)
	while idx_b == idx_a:
		idx_b = _rng.randi_range(0, levels.size() - 1)

	var y_a := levels[idx_a]
	var y_b := levels[idx_b]
	var margin := 8.0
	var x := _rng.randf_range(-extents.x + margin, extents.x - margin)
	var z := _rng.randf_range(-extents.z + margin, extents.z - margin)

	var pos_a := Vector3(x, y_a, z)
	var pos_b := Vector3(x, y_b, z)
	var dir_a := "UP" if y_b > y_a else "DOWN"
	var dir_b := "UP" if y_a > y_b else "DOWN"
	_create_portal_pair(pos_a, pos_b, color, dir_a, dir_b)

func _generate_random_portal_pair(color: Color) -> void:
	var pos_a := _find_random_portal_position()
	var pos_b := _find_random_portal_position()
	_create_portal_pair(pos_a, pos_b, color)

func _find_random_portal_position() -> Vector3:
	var extents := _get_map_extents()
	var margin := 8.0
	for _i in range(40):
		var candidate := Vector3(
			_rng.randf_range(-extents.x + margin, extents.x - margin),
			_rng.randf_range(6.0, extents.y - 6.0),
			_rng.randf_range(-extents.z + margin, extents.z - margin)
		)
		return candidate
	return Vector3(0, Config.START_Y, 0)

func _create_portal_pair(
	pos_a: Vector3,
	pos_b: Vector3,
	color: Color,
	dir_a: String = "NEUTRAL",
	dir_b: String = "NEUTRAL"
) -> void:
	if portal_scene == null:
		return

	var p1 := portal_scene.instantiate()
	var p2 := portal_scene.instantiate()
	if p1 == null or p2 == null:
		return

	p1.position = pos_a
	p2.position = pos_b
	p1.set("target_portal", p2)
	p2.set("target_portal", p1)
	p1.set("color", color)
	p2.set("color", color)
	p1.set("direction_hint", dir_a)
	p2.set("direction_hint", dir_b)

	add_child(p1)
	add_child(p2)
	generated_nodes.append(p1)
	generated_nodes.append(p2)
	_portals.append(p1)
	_portals.append(p2)

	if portal_beams:
		_create_portal_beam(pos_a, pos_b, color)

func _create_portal_beam(pos_a: Vector3, pos_b: Vector3, color: Color) -> void:
	var delta := pos_b - pos_a
	var length := delta.length()
	if length <= 0.1:
		return

	var beam := MeshInstance3D.new()
	var geo := CylinderMesh.new()
	geo.top_radius = 0.18
	geo.bottom_radius = 0.18
	geo.height = length
	beam.mesh = geo

	var mat := StandardMaterial3D.new()
	mat.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
	mat.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
	mat.albedo_color = Color(color.r, color.g, color.b, 0.18)
	mat.emission_enabled = true
	mat.emission = color
	mat.emission_energy_multiplier = 1.2
	mat.no_depth_test = true
	beam.material_override = mat

	var up := delta.normalized()
	var side := up.cross(Vector3.FORWARD)
	if side.length_squared() < 0.0001:
		side = up.cross(Vector3.RIGHT)
	side = side.normalized()
	var forward := side.cross(up).normalized()
	var basis := Basis(side, up, forward).orthonormalized()
	var mid := (pos_a + pos_b) * 0.5

	beam.transform = Transform3D(basis, mid)
	add_child(beam)
	generated_nodes.append(beam)
	_beams.append(beam)

func _get_map_extents() -> Vector3:
	var fallback := Vector3(
		Config.ARENA_SIZE * Config.MAP_SCALE * 0.5,
		Config.WALL_HEIGHT * Config.MAP_SCALE,
		Config.ARENA_SIZE * Config.MAP_SCALE * 0.5
	)
	if current_map_data.is_empty():
		return fallback
	if not current_map_data.has("size"):
		return fallback
	if not (current_map_data["size"] is Vector3):
		return fallback
	var size: Vector3 = current_map_data["size"]
	var scaled := size * Config.MAP_SCALE
	return Vector3(scaled.x * 0.5, scaled.y, scaled.z * 0.5)

func _clear_map() -> void:
	for node in generated_nodes:
		if is_instance_valid(node):
			node.queue_free()
	generated_nodes.clear()
	_portals.clear()
	_beams.clear()

extends Node3D

const Config = preload("res://Config.gd")

@export var owner_player: Node
@export var target_player: Node
@export var type_idx: int = Config.PowerupType.SPEED_UP
@export var speed: float = Config.PROJECTILE_SPEED
@export var radius: float = Config.PROJECTILE_RADIUS
@export var life_time: float = Config.PROJECTILE_LIFE_TIME
@export var max_distance: float = Config.PROJECTILE_MAX_DISTANCE
@export var homing_turn_rate: float = Config.HOMING_TURN_RATE

var _direction: Vector3 = Vector3.ZERO
var _travelled: float = 0.0
var _shape: SphereShape3D = SphereShape3D.new()
var _query: PhysicsShapeQueryParameters3D = PhysicsShapeQueryParameters3D.new()
var _flame: MeshInstance3D = null

func _ready() -> void:
	add_to_group("projectiles")

	_shape.radius = radius
	_query.shape = _shape
	_query.collide_with_bodies = true
	_query.collide_with_areas = false
	_query.margin = 0.02

	_build_visual()

	if _direction.length_squared() < 0.001:
		_direction = -global_transform.basis.z

func launch(origin: Vector3, direction: Vector3) -> void:
	global_position = origin
	_direction = direction.normalized()
	if _direction.length_squared() > 0.001:
		look_at(global_position + _direction, Vector3.UP)

func _physics_process(delta: float) -> void:
	life_time = max(0.0, life_time - delta)
	if life_time <= 0.0:
		queue_free()
		return

	if target_player != null and is_instance_valid(target_player) and bool(target_player.get("alive")):
		var desired_dir: Vector3 = (target_player.global_position - global_position).normalized()
		if desired_dir.length_squared() > 0.001:
			var steer_alpha: float = clamp(homing_turn_rate * delta, 0.0, 1.0)
			_direction = _direction.lerp(desired_dir, steer_alpha).normalized()

	var step := _direction * speed * delta
	global_position += step
	_travelled += step.length()
	if _travelled >= max_distance:
		queue_free()
		return

	if _direction.length_squared() > 0.001:
		look_at(global_position + _direction, Vector3.UP)

	if _flame != null:
		_flame.scale.z = 0.72 + sin(Time.get_ticks_msec() * 0.04) * 0.2

	if _check_impact():
		queue_free()

func _check_impact() -> bool:
	var world := get_world_3d()
	if world == null:
		return false

	_shape.radius = radius
	_query.transform = Transform3D(Basis.IDENTITY, global_position)
	var excludes: Array[RID] = []
	if owner_player != null and is_instance_valid(owner_player):
		excludes.append(owner_player.get_rid())
	_query.exclude = excludes

	var hits := world.direct_space_state.intersect_shape(_query, 8)
	if hits.is_empty():
		return false

	for hit in hits:
		var collider: Object = hit.get("collider")
		if collider == null:
			continue
		if collider == owner_player:
			continue

		if collider is Node and (collider as Node).is_in_group("players"):
			var target := collider as Node
			if not bool(target.get("alive")):
				continue
			if target.has_method("consume_shield_charge") and bool(target.call("consume_shield_charge")):
				return true
			if target.has_method("apply_powerup"):
				target.call("apply_powerup", type_idx)
			return true

		# Any other body means wall/obstacle hit.
		return true

	return false

func _build_visual() -> void:
	var data := Config.get_powerup_data(type_idx)
	var tint: Color = data.get("color", Color(1.0, 0.8, 0.2, 1.0))

	var body := MeshInstance3D.new()
	var body_mesh := CapsuleMesh.new()
	body_mesh.radius = 0.18
	body_mesh.height = 0.8
	body.mesh = body_mesh

	var body_mat := StandardMaterial3D.new()
	body_mat.albedo_color = tint
	body_mat.emission_enabled = true
	body_mat.emission = tint
	body_mat.emission_energy_multiplier = 0.55
	body_mat.metallic = 0.65
	body.material_override = body_mat
	add_child(body)

	_flame = MeshInstance3D.new()
	var flame_mesh := CylinderMesh.new()
	flame_mesh.top_radius = 0.03
	flame_mesh.bottom_radius = 0.14
	flame_mesh.height = 0.52
	_flame.mesh = flame_mesh
	_flame.position = Vector3(0.0, 0.0, 0.38)

	var flame_mat := StandardMaterial3D.new()
	flame_mat.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
	flame_mat.albedo_color = Color(1.0, 0.5, 0.15, 0.9)
	flame_mat.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
	flame_mat.emission_enabled = true
	flame_mat.emission = Color(1.0, 0.5, 0.15, 1.0)
	flame_mat.emission_energy_multiplier = 1.8
	_flame.material_override = flame_mat
	add_child(_flame)

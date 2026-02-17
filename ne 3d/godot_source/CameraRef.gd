extends Camera3D

const Config = preload("res://Config.gd")

@export var target: Node3D
@export var follow_distance: float = Config.CAMERA_FOLLOW_DISTANCE
@export var follow_height: float = Config.CAMERA_FOLLOW_HEIGHT
@export var look_ahead: float = Config.CAMERA_LOOK_AHEAD
@export var position_smoothing: float = Config.CAMERA_POSITION_SMOOTHING
@export var rotation_smoothing: float = Config.CAMERA_ROTATION_SMOOTHING
@export var first_person_offset: float = 4.0
@export var top_down_height: float = 45.0

var _snap_next: bool = true
var _camera_mode: int = 0

const CAMERA_MODE_NAMES := ["THIRD_PERSON", "FIRST_PERSON", "TOP_DOWN"]

func _ready() -> void:
	top_level = true
	fov = Config.CAMERA_FOV

func set_target(new_target: Node3D) -> void:
	target = new_target
	_snap_next = true

func cycle_mode() -> void:
	_camera_mode = (_camera_mode + 1) % CAMERA_MODE_NAMES.size()
	_snap_next = true

func get_mode_name() -> String:
	return CAMERA_MODE_NAMES[_camera_mode]

func _physics_process(delta: float) -> void:
	if target == null or not is_instance_valid(target):
		return

	var target_pos := target.global_position
	var target_forward := (-target.global_transform.basis.z).normalized()
	var desired_pos := target_pos
	var look_target := target_pos + target_forward

	match _camera_mode:
		1:
			desired_pos = target_pos + (target_forward * first_person_offset) + (Vector3.UP * 0.55)
			look_target = target_pos + (target_forward * 25.0)
		2:
			desired_pos = target_pos + (Vector3.UP * top_down_height)
			look_target = target_pos
		_:
			desired_pos = target_pos - (target_forward * follow_distance) + (Vector3.UP * follow_height)
			look_target = target_pos + (target_forward * look_ahead)

	if _snap_next:
		global_position = desired_pos
		look_at(look_target, Vector3.UP)
		_snap_next = false
		return

	var pos_alpha := 1.0 - exp(-position_smoothing * delta)
	global_position = global_position.lerp(desired_pos, pos_alpha)

	if global_position.distance_to(desired_pos) > Config.CAMERA_MAX_STEP:
		global_position = desired_pos

	var dir := (look_target - global_position)
	if dir.length_squared() < 0.0001:
		return

	var up_hint := Vector3.UP
	if absf(dir.normalized().dot(Vector3.UP)) > 0.98:
		up_hint = Vector3.FORWARD
	var desired_basis := Basis.looking_at(dir.normalized(), up_hint)
	var rot_alpha := 1.0 - exp(-rotation_smoothing * delta)
	global_transform.basis = global_transform.basis.slerp(desired_basis, rot_alpha).orthonormalized()

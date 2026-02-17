extends MultiMeshInstance3D

const Config = preload("res://Config.gd")

@export var max_segments: int = Config.TRAIL_MAX_SEGMENTS
@export var update_interval: float = Config.TRAIL_UPDATE_INTERVAL
@export var trail_width: float = Config.TRAIL_WIDTH
@export var gap_chance: float = Config.TRAIL_GAP_CHANCE
@export var gap_duration: float = Config.TRAIL_GAP_DURATION
@export var cell_size: float = 10.0

var write_index: int = 0
var segment_count: int = 0
var time_since_update: float = 0.0

var last_pos: Vector3 = Vector3.ZERO
var has_last_pos: bool = false
var is_gap: bool = false
var gap_timer: float = 0.0

var grid: Dictionary = {}
var segment_cells: PackedInt32Array = PackedInt32Array()
var segments_data: PackedFloat32Array = PackedFloat32Array()

func _ready() -> void:
	if multimesh == null:
		multimesh = MultiMesh.new()
		multimesh.transform_format = MultiMesh.TRANSFORM_3D

		var cyl := CylinderMesh.new()
		cyl.top_radius = 1.0
		cyl.bottom_radius = 1.0
		cyl.height = 1.0
		cyl.radial_segments = 6
		multimesh.mesh = cyl

	multimesh.instance_count = max_segments
	multimesh.visible_instance_count = 0

	segments_data.resize(max_segments * 7)
	segment_cells.resize(max_segments)
	for i in range(segment_cells.size()):
		segment_cells[i] = 0

	for i in range(max_segments):
		multimesh.set_instance_transform(i, Transform3D.IDENTITY)

func update_trail(dt: float, current_pos: Vector3, _direction: Vector3) -> void:
	if is_gap:
		gap_timer = max(0.0, gap_timer - dt)
		if gap_timer == 0.0:
			is_gap = false
		_set_last_pos(current_pos)
		return

	time_since_update += dt
	if time_since_update < update_interval:
		return

	time_since_update -= update_interval

	if randf() < gap_chance:
		force_gap(gap_duration)
		_set_last_pos(current_pos)
		return

	if has_last_pos:
		_add_segment(last_pos, current_pos)
	_set_last_pos(current_pos)

func force_gap(duration: float = 0.3) -> void:
	is_gap = true
	gap_timer = max(0.05, duration)
	has_last_pos = false

func set_width(new_width: float) -> void:
	trail_width = max(0.05, new_width)

func set_gap_settings(new_chance: float, new_duration: float) -> void:
	gap_chance = clamp(new_chance, 0.0, 0.8)
	gap_duration = max(0.02, new_duration)

func reset_width() -> void:
	trail_width = Config.TRAIL_WIDTH

func clear_trail() -> void:
	segment_count = 0
	write_index = 0
	has_last_pos = false
	time_since_update = 0.0
	is_gap = false
	gap_timer = 0.0
	grid.clear()

	if multimesh != null:
		multimesh.visible_instance_count = 0

func check_collision_fast(pos: Vector3, radius: float, skip_recent: int = 20) -> bool:
	return check_collision(pos, radius, skip_recent)

func check_collision(pos: Vector3, radius: float, skip_recent: int = 20) -> bool:
	if segment_count == 0:
		return false

	var cell_x := floori(pos.x / cell_size)
	var cell_z := floori(pos.z / cell_size)

	for dx in range(-1, 2):
		for dz in range(-1, 2):
			var key := _cell_key(cell_x + dx, cell_z + dz)
			if not grid.has(key):
				continue

			var indices: Array = grid[key]
			for idx_variant in indices:
				var idx := int(idx_variant)
				var dist := (write_index - 1 - idx + max_segments) % max_segments
				if dist < skip_recent:
					continue

				var base := idx * 7
				var seg_radius := segments_data[base + 6]
				var total_radius := radius + seg_radius

				var a := Vector3(segments_data[base + 0], segments_data[base + 1], segments_data[base + 2])
				var b := Vector3(segments_data[base + 3], segments_data[base + 4], segments_data[base + 5])

				if _distance_sq_point_to_segment(pos, a, b) <= total_radius * total_radius:
					return true

	return false

func _set_last_pos(pos: Vector3) -> void:
	last_pos = pos
	has_last_pos = true

func _add_segment(from: Vector3, to: Vector3) -> void:
	var diff := to - from
	var length := diff.length()
	if length < 0.01:
		return

	if segment_count >= max_segments:
		var old_key := segment_cells[write_index]
		if grid.has(old_key):
			var arr: Array = grid[old_key]
			arr.erase(write_index)
			if arr.is_empty():
				grid.erase(old_key)

	var up := diff / length
	var right := up.cross(Vector3.UP).normalized()
	if right.length_squared() < 0.001:
		right = Vector3.RIGHT
	var forward := right.cross(up).normalized()

	var basis := Basis(right, up, forward)
	var trans := Transform3D(basis, (from + to) * 0.5)
	trans = trans.scaled_local(Vector3(trail_width * 0.5, length, trail_width * 0.5))
	multimesh.set_instance_transform(write_index, trans)

	var offset := write_index * 7
	segments_data[offset + 0] = from.x
	segments_data[offset + 1] = from.y
	segments_data[offset + 2] = from.z
	segments_data[offset + 3] = to.x
	segments_data[offset + 4] = to.y
	segments_data[offset + 5] = to.z
	segments_data[offset + 6] = trail_width * 0.5

	var mid := (from + to) * 0.5
	var key := _cell_key(floori(mid.x / cell_size), floori(mid.z / cell_size))
	if not grid.has(key):
		grid[key] = []
	grid[key].append(write_index)
	segment_cells[write_index] = key

	write_index = (write_index + 1) % max_segments
	if segment_count < max_segments:
		segment_count += 1
	multimesh.visible_instance_count = segment_count

func _cell_key(cx: int, cz: int) -> int:
	return (cx + 1000) * 2000 + (cz + 1000)

func _distance_sq_point_to_segment(p: Vector3, a: Vector3, b: Vector3) -> float:
	var ab := b - a
	var len_sq := ab.length_squared()
	if len_sq <= 0.000001:
		return p.distance_squared_to(a)

	var t: float = clamp((p - a).dot(ab) / len_sq, 0.0, 1.0)
	var closest: Vector3 = a + ab * t
	return p.distance_squared_to(closest)

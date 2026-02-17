extends Node
class_name AudioBus

@export var master_volume_db: float = -14.0

var _player: AudioStreamPlayer
var _playback: AudioStreamGeneratorPlayback
var _mix_rate: float = 44100.0
var _last_event_ms: Dictionary = {}

const EVENT_DATA := {
	"shoot": { "freq": 780.0, "duration": 0.10, "volume": 0.2, "wave": "square", "cooldown": 80 },
	"boost": { "freq": 220.0, "duration": 0.12, "volume": 0.22, "wave": "triangle", "cooldown": 120 },
	"hit": { "freq": 120.0, "duration": 0.18, "volume": 0.3, "wave": "saw", "cooldown": 120 },
	"pickup": { "freq": 640.0, "duration": 0.16, "volume": 0.22, "wave": "sine", "cooldown": 130 },
	"shield": { "freq": 420.0, "duration": 0.14, "volume": 0.22, "wave": "square", "cooldown": 120 },
	"round_end": { "freq": 300.0, "duration": 0.26, "volume": 0.2, "wave": "sine", "cooldown": 300 },
	"game_over": { "freq": 170.0, "duration": 0.38, "volume": 0.25, "wave": "triangle", "cooldown": 700 }
}

func _ready() -> void:
	process_mode = Node.PROCESS_MODE_ALWAYS
	_player = AudioStreamPlayer.new()
	_player.volume_db = master_volume_db

	var stream := AudioStreamGenerator.new()
	stream.mix_rate = _mix_rate
	stream.buffer_length = 0.4
	_player.stream = stream
	add_child(_player)

	_player.play()
	_playback = _player.get_stream_playback() as AudioStreamGeneratorPlayback

func play_event(event_name: String) -> void:
	if _playback == null:
		return

	var key := event_name.strip_edges().to_lower()
	var event: Dictionary = EVENT_DATA.get(key, {})
	if event.is_empty():
		return

	var now := Time.get_ticks_msec()
	var cooldown := int(event.get("cooldown", 80))
	var last := int(_last_event_ms.get(key, 0))
	if now - last < cooldown:
		return
	_last_event_ms[key] = now

	_push_tone(
		float(event.get("freq", 440.0)),
		float(event.get("duration", 0.12)),
		float(event.get("volume", 0.2)),
		String(event.get("wave", "sine"))
	)

func _push_tone(freq: float, duration: float, volume: float, wave: String) -> void:
	if _playback == null:
		return
	if freq <= 0.0 or duration <= 0.0:
		return

	var frame_count := int(duration * _mix_rate)
	if frame_count <= 0:
		return

	var available := _playback.get_frames_available()
	if available <= 0:
		return
	frame_count = min(frame_count, available)

	for i in range(frame_count):
		var t := float(i) / _mix_rate
		var env := _envelope(float(i) / float(frame_count))
		var sample := _wave_value(wave, freq, t) * volume * env
		_playback.push_frame(Vector2(sample, sample))

func _envelope(phase: float) -> float:
	# Short attack and release to avoid clicks.
	if phase < 0.08:
		return phase / 0.08
	if phase > 0.78:
		return max(0.0, (1.0 - phase) / 0.22)
	return 1.0

func _wave_value(wave: String, freq: float, t: float) -> float:
	var theta := TAU * freq * t
	match wave:
		"square":
			return 1.0 if sin(theta) >= 0.0 else -1.0
		"triangle":
			return 2.0 * abs(2.0 * (theta / TAU - floor(theta / TAU + 0.5))) - 1.0
		"saw":
			return 2.0 * (theta / TAU - floor(theta / TAU + 0.5))
		_:
			return sin(theta)

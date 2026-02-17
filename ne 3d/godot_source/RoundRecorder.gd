extends RefCounted
class_name RoundRecorder

const MAX_EVENTS := 800
const MAX_SNAPSHOTS := 900
const MAX_ROUNDS := 120
const MAX_TRACKED_PLAYERS := 16

var events: Array[Dictionary] = []
var snapshots: Array[Dictionary] = []
var round_summaries: Array[Dictionary] = []

var _round_start_msec: int = 0
var _frame_counter: int = 0
var _snapshot_interval: int = 10
var _round_id_counter: int = 0

var _player_spawn_time: Dictionary = {}
var _player_death_time: Dictionary = {}
var _player_is_bot: Dictionary = {}

var _round_self_collisions: int = 0
var _round_stuck_events: int = 0
var _round_bounce_wall_events: int = 0
var _round_bounce_trail_events: int = 0
var _round_item_use_events: int = 0
var _round_item_shot_events: int = 0

var _aggregate: Dictionary = _create_aggregate_summary()
var _baselines: Dictionary = {}
var _last_round_summary: Dictionary = {}

func start_round(players: Array = []) -> void:
	events.clear()
	snapshots.clear()
	_frame_counter = 0
	_round_start_msec = Time.get_ticks_msec()
	_last_round_summary = {}
	_reset_round_state()

	for p in players:
		_track_player(p, true)

func log_event(event_type: String, player_index: int, data: String = "") -> void:
	var entry := {
		"time": _elapsed_seconds(),
		"type": event_type,
		"player": player_index,
		"data": data
	}
	_append_with_limit(events, entry, MAX_EVENTS)

	match event_type:
		"STUCK":
			_round_stuck_events += 1
		"BOUNCE_WALL":
			_round_bounce_wall_events += 1
		"BOUNCE_TRAIL":
			_round_bounce_trail_events += 1
		"ITEM_USE":
			_round_item_use_events += 1
		"ITEM_SHOT":
			_round_item_shot_events += 1

func mark_player_spawn(player: Node) -> void:
	_track_player(player, true)

func mark_player_death(player: Node, cause: String = "") -> void:
	if player == null:
		return
	var idx := int(player.get("player_index"))
	if idx < 0 or idx >= MAX_TRACKED_PLAYERS:
		return

	if not _player_spawn_time.has(idx):
		_player_spawn_time[idx] = 0.0
	if not _player_death_time.has(idx):
		_player_death_time[idx] = _elapsed_seconds()

	if cause == "trail_self":
		_round_self_collisions += 1

func record_frame(players: Array) -> void:
	_frame_counter += 1
	if _frame_counter % _snapshot_interval != 0:
		return

	var player_state: Array[Dictionary] = []
	for p in players:
		if p == null or not is_instance_valid(p):
			continue
		player_state.append({
			"idx": int(p.get("player_index")),
			"alive": bool(p.get("alive")),
			"x": snappedf(float(p.global_position.x), 0.1),
			"y": snappedf(float(p.global_position.y), 0.1),
			"z": snappedf(float(p.global_position.z), 0.1),
			"bot": bool(p.get("is_bot"))
		})

	var snap := {
		"time": _elapsed_seconds(),
		"players": player_state
	}
	_append_with_limit(snapshots, snap, MAX_SNAPSHOTS)

func finalize_round(winner: Node, players: Array = []) -> Dictionary:
	var round_duration: float = maxf(0.0, _elapsed_seconds())
	var bot_count := 0
	var human_count := 0
	var bot_survival_sum := 0.0

	for p in players:
		if p == null or not is_instance_valid(p):
			continue
		_track_player(p, false)
		var idx := int(p.get("player_index"))
		if idx < 0 or idx >= MAX_TRACKED_PLAYERS:
			continue

		if not _player_death_time.has(idx):
			_player_death_time[idx] = round_duration
		var spawn_time := float(_player_spawn_time.get(idx, 0.0))
		var death_time := float(_player_death_time.get(idx, round_duration))
		var survival: float = maxf(0.0, death_time - spawn_time)

		if bool(p.get("is_bot")):
			bot_count += 1
			bot_survival_sum += survival
		else:
			human_count += 1

	var winner_index := int(winner.get("player_index")) if winner != null and is_instance_valid(winner) else -1
	var winner_is_bot := bool(winner.get("is_bot")) if winner != null and is_instance_valid(winner) else false

	_round_id_counter += 1
	var summary := {
		"roundId": _round_id_counter,
		"duration": round_duration,
		"winnerIndex": winner_index,
		"winnerIsBot": winner_is_bot,
		"botCount": bot_count,
		"humanCount": human_count,
		"botSurvivalAverage": bot_survival_sum / float(bot_count) if bot_count > 0 else 0.0,
		"selfCollisions": _round_self_collisions,
		"stuckEvents": _round_stuck_events,
		"bounceWallEvents": _round_bounce_wall_events,
		"bounceTrailEvents": _round_bounce_trail_events,
		"itemUseEvents": _round_item_use_events,
		"itemShotEvents": _round_item_shot_events,
		"stuckPerMinute": _round_stuck_events / (round_duration / 60.0) if round_duration > 0.0 else 0.0
	}

	_append_with_limit(round_summaries, summary, MAX_ROUNDS)
	_aggregate["rounds"] = int(_aggregate["rounds"]) + 1
	_aggregate["totalDuration"] = float(_aggregate["totalDuration"]) + round_duration
	_aggregate["totalBotLives"] = int(_aggregate["totalBotLives"]) + bot_count
	_aggregate["totalBotSurvival"] = float(_aggregate["totalBotSurvival"]) + bot_survival_sum
	_aggregate["totalSelfCollisions"] = int(_aggregate["totalSelfCollisions"]) + _round_self_collisions
	_aggregate["totalStuckEvents"] = int(_aggregate["totalStuckEvents"]) + _round_stuck_events
	_aggregate["totalBounceWallEvents"] = int(_aggregate["totalBounceWallEvents"]) + _round_bounce_wall_events
	_aggregate["totalBounceTrailEvents"] = int(_aggregate["totalBounceTrailEvents"]) + _round_bounce_trail_events
	_aggregate["totalItemUseEvents"] = int(_aggregate["totalItemUseEvents"]) + _round_item_use_events
	_aggregate["totalItemShotEvents"] = int(_aggregate["totalItemShotEvents"]) + _round_item_shot_events
	if winner_is_bot:
		_aggregate["botWins"] = int(_aggregate["botWins"]) + 1

	_last_round_summary = summary.duplicate(true)
	log_event("ROUND_END", winner_index, "duration=%.2f" % round_duration)
	return summary.duplicate(true)

func get_last_round_metrics() -> Dictionary:
	return _last_round_summary.duplicate(true)

func get_aggregate_metrics() -> Dictionary:
	var rounds := int(_aggregate["rounds"])
	var total_duration := float(_aggregate["totalDuration"])
	var total_bot_lives := int(_aggregate["totalBotLives"])
	return {
		"rounds": rounds,
		"botWinRate": float(_aggregate["botWins"]) / float(rounds) if rounds > 0 else 0.0,
		"averageBotSurvival": float(_aggregate["totalBotSurvival"]) / float(total_bot_lives) if total_bot_lives > 0 else 0.0,
		"selfCollisionsPerRound": float(_aggregate["totalSelfCollisions"]) / float(rounds) if rounds > 0 else 0.0,
		"stuckEventsPerMinute": float(_aggregate["totalStuckEvents"]) / (total_duration / 60.0) if total_duration > 0.0 else 0.0,
		"bounceWallPerRound": float(_aggregate["totalBounceWallEvents"]) / float(rounds) if rounds > 0 else 0.0,
		"bounceTrailPerRound": float(_aggregate["totalBounceTrailEvents"]) / float(rounds) if rounds > 0 else 0.0,
		"itemUsePerRound": float(_aggregate["totalItemUseEvents"]) / float(rounds) if rounds > 0 else 0.0,
		"itemShotPerRound": float(_aggregate["totalItemShotEvents"]) / float(rounds) if rounds > 0 else 0.0
	}

func capture_baseline(label: String = "BASELINE") -> Dictionary:
	var normalized := label.strip_edges().to_upper()
	if normalized.is_empty():
		normalized = "BASELINE"
	var snapshot := get_aggregate_metrics()
	_baselines[normalized] = snapshot.duplicate(true)
	var result := snapshot.duplicate(true)
	result["label"] = normalized
	return result

func compare_with_baseline(label: String = "BASELINE") -> Dictionary:
	var normalized := label.strip_edges().to_upper()
	if normalized.is_empty():
		normalized = "BASELINE"
	if not _baselines.has(normalized):
		return {}

	var baseline: Dictionary = _baselines[normalized]
	var current := get_aggregate_metrics()
	return {
		"label": normalized,
		"baseline": baseline.duplicate(true),
		"current": current.duplicate(true),
		"delta": {
			"botWinRate": float(current["botWinRate"]) - float(baseline.get("botWinRate", 0.0)),
			"averageBotSurvival": float(current["averageBotSurvival"]) - float(baseline.get("averageBotSurvival", 0.0)),
			"selfCollisionsPerRound": float(current["selfCollisionsPerRound"]) - float(baseline.get("selfCollisionsPerRound", 0.0)),
			"stuckEventsPerMinute": float(current["stuckEventsPerMinute"]) - float(baseline.get("stuckEventsPerMinute", 0.0)),
			"bounceWallPerRound": float(current["bounceWallPerRound"]) - float(baseline.get("bounceWallPerRound", 0.0)),
			"bounceTrailPerRound": float(current["bounceTrailPerRound"]) - float(baseline.get("bounceTrailPerRound", 0.0)),
			"itemUsePerRound": float(current["itemUsePerRound"]) - float(baseline.get("itemUsePerRound", 0.0)),
			"itemShotPerRound": float(current["itemShotPerRound"]) - float(baseline.get("itemShotPerRound", 0.0))
		}
	}

func get_validation_matrix() -> Array[Dictionary]:
	return [
		{"id": "V1", "mode": "1p", "bots": 1, "mapKey": "standard", "planarMode": false, "portalCount": 0, "rounds": 10},
		{"id": "V2", "mode": "1p", "bots": 3, "mapKey": "maze", "planarMode": false, "portalCount": 0, "rounds": 10},
		{"id": "V3", "mode": "1p", "bots": 3, "mapKey": "complex", "planarMode": true, "portalCount": 4, "rounds": 10},
		{"id": "V4", "mode": "2p", "bots": 2, "mapKey": "standard", "planarMode": true, "portalCount": 6, "rounds": 10}
	]

func dump(baseline_label: String = "BASELINE") -> Dictionary:
	var event_lines: Array[String] = []
	for entry in events:
		event_lines.append(
			"[%.2fs] %s P%d %s" % [
				float(entry.get("time", 0.0)),
				String(entry.get("type", "")),
				int(entry.get("player", -1)),
				String(entry.get("data", ""))
			]
		)

	var recent_snapshots: Array[Dictionary] = []
	var start_idx: int = maxi(0, snapshots.size() - 20)
	for i in range(start_idx, snapshots.size()):
		recent_snapshots.append(snapshots[i].duplicate(true))

	var comparison := compare_with_baseline(baseline_label)
	return {
		"events": event_lines,
		"snapshots": recent_snapshots,
		"lastRound": get_last_round_metrics(),
		"aggregate": get_aggregate_metrics(),
		"baselineDelta": comparison.get("delta", {})
	}

func _track_player(player: Node, reset_for_spawn: bool) -> void:
	if player == null or not is_instance_valid(player):
		return
	var idx := int(player.get("player_index"))
	if idx < 0 or idx >= MAX_TRACKED_PLAYERS:
		return

	_player_is_bot[idx] = bool(player.get("is_bot"))
	if not _player_spawn_time.has(idx):
		_player_spawn_time[idx] = _elapsed_seconds()
	if reset_for_spawn:
		_player_death_time.erase(idx)

func _reset_round_state() -> void:
	_round_self_collisions = 0
	_round_stuck_events = 0
	_round_bounce_wall_events = 0
	_round_bounce_trail_events = 0
	_round_item_use_events = 0
	_round_item_shot_events = 0
	_player_spawn_time.clear()
	_player_death_time.clear()
	_player_is_bot.clear()

func _elapsed_seconds() -> float:
	if _round_start_msec <= 0:
		return 0.0
	return float(Time.get_ticks_msec() - _round_start_msec) / 1000.0

func _append_with_limit(buffer: Array, item: Variant, limit: int) -> void:
	buffer.append(item)
	while buffer.size() > limit:
		buffer.remove_at(0)

func _create_aggregate_summary() -> Dictionary:
	return {
		"rounds": 0,
		"totalDuration": 0.0,
		"totalBotLives": 0,
		"totalBotSurvival": 0.0,
		"totalSelfCollisions": 0,
		"totalStuckEvents": 0,
		"totalBounceWallEvents": 0,
		"totalBounceTrailEvents": 0,
		"totalItemUseEvents": 0,
		"totalItemShotEvents": 0,
		"botWins": 0
	}

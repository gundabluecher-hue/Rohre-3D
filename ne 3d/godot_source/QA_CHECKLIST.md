# QA Checklist (Godot 4.6)

## Regression Checklist

- [x] Project starts without script parse/runtime errors (`--quit-after 15`).
- [x] Renderer compatibility stays `gl_compatibility`.
- [x] Round flow runs through `boot -> countdown -> playing -> round_end -> game_over`.
- [x] Restart path (`ENTER`/`R`) calls `GameManager.restart_game()` and respawns all players.
- [x] Pause path (`ESC`/`P`) toggles and returns to previous state.
- [x] Powerup cleanup on round end and game over.
- [x] No duplicate round-end trigger (`_round_end_locked` guard).
- [x] Camera keeps stable target lock without overshoot spikes.
- [x] HUD draw frequency throttled (`0.05s` redraw interval).
- [x] Trail collision/spatial hash works with capped segments and no script errors.

## Stability Commands

Use from project root `C:\Users\gunda\Desktop\3d\ne 3d`:

```powershell
powershell -ExecutionPolicy Bypass -File .\godot_source\tools\run_qa.ps1 -Mode smoke -QuitAfter 20
```

```powershell
powershell -ExecutionPolicy Bypass -File .\godot_source\tools\run_qa.ps1 -Mode match -QuitAfter 260 -Matches 1 -TargetScore 1
```

Automated multi-match smoke (fast mode):

```powershell
powershell -ExecutionPolicy Bypass -File .\godot_source\tools\run_qa.ps1 -Mode match -QuitAfter 900 -Matches 3 -TargetScore 1
```

Expected console marker:

```text
[QA] Completed matches: 3
```

Powerup sweep smoke (applies all 8 powerups in QA mode):

```powershell
powershell -ExecutionPolicy Bypass -File .\godot_source\tools\run_qa.ps1 -Mode sweep -QuitAfter 900
```

Full regression sequence (smoke + match + sweep):

```powershell
powershell -ExecutionPolicy Bypass -File .\godot_source\tools\run_qa.ps1 -Mode full -QuitAfter 320 -Matches 1 -TargetScore 1
```

Multi-mode smoke (2 humans + 1 bot):

```powershell
& "C:\Users\gunda\Downloads\Godot_v4.6-stable_win64.exe\Godot_v4.6-stable_win64_console.exe" --path "C:\Users\gunda\Desktop\3d\ne 3d\godot_source" --quit-after 900 -- --mode=multi --humans=2 --bots=1 --qa_matches=1 --qa_target_score=1
```

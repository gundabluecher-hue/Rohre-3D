param(
	[ValidateSet("smoke", "match", "sweep", "full")]
	[string]$Mode = "full",
	[int]$QuitAfter = 300,
	[int]$Matches = 3,
	[int]$TargetScore = 1
)

$ErrorActionPreference = "Stop"

$projectPath = Split-Path -Parent $PSScriptRoot
$godotBin = "C:\Users\gunda\Downloads\Godot_v4.6-stable_win64.exe\Godot_v4.6-stable_win64_console.exe"

if (-not (Test-Path $godotBin)) {
	Write-Error "Godot binary not found: $godotBin"
}

function Invoke-Godot {
	param(
		[int]$Timeout,
		[string[]]$CliArgs
	)

	$cmd = @("--path", $projectPath, "--quit-after", "$Timeout")
	if ($CliArgs.Count -gt 0) {
		$cmd += @("--")
		$cmd += $CliArgs
	}

	Write-Host "[QA] Running: $godotBin $($cmd -join ' ')"
	& $godotBin @cmd
	if ($LASTEXITCODE -ne 0) {
		throw "Godot exited with code $LASTEXITCODE"
	}
}

switch ($Mode) {
	"smoke" {
		Invoke-Godot -Timeout ([Math]::Max(15, $QuitAfter)) -CliArgs @()
	}
	"match" {
		Invoke-Godot -Timeout ([Math]::Max(180, $QuitAfter)) -CliArgs @(
			"--qa_matches=$Matches",
			"--qa_target_score=$TargetScore"
		)
	}
	"sweep" {
		Invoke-Godot -Timeout ([Math]::Max(240, $QuitAfter)) -CliArgs @(
			"--qa_matches=1",
			"--qa_target_score=1",
			"--qa_powerup_sweep=1"
		)
	}
	"full" {
		Invoke-Godot -Timeout 15 -CliArgs @()
		Invoke-Godot -Timeout ([Math]::Max(180, $QuitAfter)) -CliArgs @(
			"--qa_matches=$Matches",
			"--qa_target_score=$TargetScore"
		)
		Invoke-Godot -Timeout ([Math]::Max(240, $QuitAfter)) -CliArgs @(
			"--qa_matches=1",
			"--qa_target_score=1",
			"--qa_powerup_sweep=1"
		)
	}
}

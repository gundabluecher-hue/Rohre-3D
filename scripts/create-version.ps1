# create-version.ps1
param(
    [string]$Message = "Auto-Version",
    [switch]$GitBackup
)

$versionsDir = "archive"
if (-not (Test-Path $versionsDir)) {
    New-Item -ItemType Directory -Path $versionsDir | Out-Null
}

$versionFile = "version.json"
$newVer = "2.0.1"

if (Test-Path $versionFile) {
    try {
        $json = Get-Content -Path $versionFile -Raw | ConvertFrom-Json
        $verParts = $json.version.Split(".")
        $verParts[2] = [int]$verParts[2] + 1
        $newVer = "$($verParts[0]).$($verParts[1]).$($verParts[2])"
    }
    catch {
        $newVer = "2.0.1"
    }
}

$targetDir = Join-Path $versionsDir "v$newVer"
New-Item -ItemType Directory -Path $targetDir -Force | Out-Null

# Files that make the current runtime work (HTML + referenced assets)
$filesToCopy = @(
    "3dv17.html",
    "index.html",
    "css/style.css",
    "js/bot.js",
    "js/game.js",
    "js/three.min.js"
)

$copied = New-Object System.Collections.Generic.List[string]
$missing = New-Object System.Collections.Generic.List[string]

foreach ($relPath in $filesToCopy) {
    if (-not (Test-Path $relPath)) {
        $missing.Add($relPath)
        continue
    }

    $destPath = Join-Path $targetDir $relPath
    $destDir = Split-Path $destPath -Parent
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }

    Copy-Item -Path $relPath -Destination $destPath -Force
    $copied.Add($relPath)
}

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

# Keep existing schema in version.json (timestamp/version/msg)
$versionJson = [ordered]@{
    timestamp = $timestamp
    version    = $newVer
    msg        = $Message
}
$versionJson | ConvertTo-Json -Depth 5 | Set-Content -Path $versionFile -Encoding UTF8

# Rich metadata for the archive folder (used by list-versions.ps1)
$archiveInfo = [ordered]@{
    version   = $newVer
    timestamp = $timestamp
    message   = $Message
    files     = $copied
}
$archiveInfo | ConvertTo-Json -Depth 10 | Set-Content -Path (Join-Path $targetDir "version-info.json") -Encoding UTF8

Write-Host "Version $newVer created in $targetDir" -ForegroundColor Green

if ($missing.Count -gt 0) {
    Write-Host "Note: Some files were not found and were not versioned:" -ForegroundColor Yellow
    $missing | ForEach-Object { Write-Host "  - $_" -ForegroundColor Yellow }
}

if ($GitBackup) {
    Write-Host "Running Git backup (add/commit/push)..." -ForegroundColor Cyan
    git add -A
    git commit -m "Version $newVer: $Message"
    git push origin main

    if ($LASTEXITCODE -eq 0) {
        Write-Host "Git backup done." -ForegroundColor Green
    }
    else {
        Write-Host "Git backup failed (see output above)." -ForegroundColor Yellow
    }
}

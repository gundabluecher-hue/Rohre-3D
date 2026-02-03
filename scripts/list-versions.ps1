# list-versions.ps1
# Lists created versions in archive/

$versionsDir = "archive"

if (-not (Test-Path $versionsDir)) {
    Write-Host "No versions found (archive/ missing)." -ForegroundColor Red
    exit 1
}

Write-Host "`nAll versions:" -ForegroundColor Cyan
Write-Host ("=" * 80) -ForegroundColor Gray

$folders = Get-ChildItem -Path $versionsDir -Directory | Sort-Object Name -Descending

foreach ($folder in $folders) {
    $versionInfoFile = Join-Path $folder.FullName "version-info.json"

    if (-not (Test-Path $versionInfoFile)) {
        Write-Host "`n$($folder.Name)" -ForegroundColor Yellow
        Write-Host "   (no version-info.json)" -ForegroundColor Gray
        continue
    }

    try {
        $info = Get-Content -Path $versionInfoFile -Raw | ConvertFrom-Json
    }
    catch {
        Write-Host "`n$($folder.Name)" -ForegroundColor Yellow
        Write-Host "   (invalid version-info.json: $($_.Exception.Message))" -ForegroundColor Gray
        continue
    }

    $msg = $info.message
    if (-not $msg) { $msg = $info.msg }

    Write-Host "`n$($folder.Name)" -ForegroundColor Green
    if ($info.timestamp) { Write-Host "   Date: $($info.timestamp)" -ForegroundColor Gray }
    if ($msg) { Write-Host "   Message: $msg" -ForegroundColor White }

    if ($info.files) {
        $fileList = @($info.files) -join ", "
        Write-Host "   Files: $fileList" -ForegroundColor Gray
    }
}

Write-Host "`n" ("=" * 80) -ForegroundColor Gray
Write-Host "Total: $($folders.Count) folders`n" -ForegroundColor Cyan

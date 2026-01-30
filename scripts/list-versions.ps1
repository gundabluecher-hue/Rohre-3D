# list-versions.ps1
# Zeigt alle erstellten Versionen an

$versionsDir = "archive"

if (-not (Test-Path $versionsDir)) {
    Write-Host "❌ Keine Versionen gefunden" -ForegroundColor Red
    exit
}

Write-Host "`n📦 Alle Versionen:" -ForegroundColor Cyan
Write-Host ("=" * 80) -ForegroundColor Gray

$versions = Get-ChildItem $versionsDir -Directory | Sort-Object Name -Descending

foreach ($versionFolder in $versions) {
    $versionInfoFile = Join-Path $versionFolder.FullName "version-info.json"
    
    if (Test-Path $versionInfoFile) {
        $info = Get-Content $versionInfoFile | ConvertFrom-Json
        
        Write-Host "`n📌 $($versionFolder.Name)" -ForegroundColor Green
        Write-Host "   Datum: $($info.timestamp)" -ForegroundColor Gray
        Write-Host "   Beschreibung: $($info.message)" -ForegroundColor White
        Write-Host "   Dateien: $($info.files)" -ForegroundColor Gray
    }
    else {
        Write-Host "`n📌 $($versionFolder.Name)" -ForegroundColor Yellow
        Write-Host "   (Keine Version-Info vorhanden)" -ForegroundColor Gray
    }
}

Write-Host "`n" ("=" * 80) -ForegroundColor Gray
Write-Host "Gesamt: $($versions.Count) Versionen`n" -ForegroundColor Cyan

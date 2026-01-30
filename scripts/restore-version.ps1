# restore-version.ps1
# Stellt eine alte Version wieder her

param(
    [Parameter(Mandatory = $true)]
    [string]$Version
)

$versionsDir = "archive"
$versionDir = Join-Path $versionsDir "v$Version"

if (-not (Test-Path $versionDir)) {
    Write-Host "❌ Version v$Version nicht gefunden!" -ForegroundColor Red
    Write-Host "Verfügbare Versionen:" -ForegroundColor Yellow
    .\scripts\list-versions.ps1
    exit
}

Write-Host "`n⚠️  ACHTUNG: Aktuelle Dateien werden überschrieben!" -ForegroundColor Yellow
$confirm = Read-Host "Fortfahren? (j/n)"

if ($confirm -ne 'j') {
    Write-Host "Abgebrochen." -ForegroundColor Gray
    exit
}

# Backup der aktuellen Version erstellen
Write-Host "`n📦 Erstelle Backup der aktuellen Version..." -ForegroundColor Cyan
.\scripts\create-version.ps1 -Message "Automatisches Backup vor Restore v$Version"

# Dateien wiederherstellen
Write-Host "`n🔄 Stelle Version v$Version wieder her..." -ForegroundColor Cyan

$files = Get-ChildItem $versionDir -File
foreach ($file in $files) {
    if ($file.Name -ne "version-info.json") {
        Copy-Item $file.FullName . -Force
        Write-Host "  ✓ $($file.Name)" -ForegroundColor Green
    }
}

# Ordner wiederherstellen
if (Test-Path (Join-Path $versionDir "css")) {
    Copy-Item (Join-Path $versionDir "css") "css" -Recurse -Force
    Write-Host "  ✓ css/" -ForegroundColor Green
}
if (Test-Path (Join-Path $versionDir "js")) {
    Copy-Item (Join-Path $versionDir "js") "js" -Recurse -Force
    Write-Host "  ✓ js/" -ForegroundColor Green
}

Write-Host "`n✅ Version v$Version erfolgreich wiederhergestellt!" -ForegroundColor Green
Write-Host ""

# create-version.ps1
param([string]$Message = "Auto-Version")

$vDir = "archive"
if (!(Test-Path $vDir)) { New-Item -Type Directory $vDir | Out-Null }

$vFile = "version.json"
if (Test-Path $vFile) {
    try {
        $json = Get-Content $vFile | ConvertFrom-Json
        $ver = $json.version.Split('.')
        $ver[2] = [int]$ver[2] + 1
        $newVer = "$($ver[0]).$($ver[1]).$($ver[2])"
    }
    catch {
        $newVer = "2.0.1"
    }
}
else {
    $newVer = "2.0.1"
}

$targetDir = Join-Path $vDir "v$newVer"

# Alle Versionen werden behalten (kein automatisches Löschen)

New-Item -Type Directory $targetDir -Force | Out-Null

$files = @("3dv17.html")
foreach ($f in $files) {
    if (Test-Path $f) { Copy-Item $f $targetDir -Force }
}

$info = @{ version = $newVer; timestamp = (Get-Date -Format "yyyy-MM-dd HH:mm:ss"); msg = $Message }
$info | ConvertTo-Json | Set-Content $vFile

Write-Host "Version $newVer created in $targetDir" -ForegroundColor Green

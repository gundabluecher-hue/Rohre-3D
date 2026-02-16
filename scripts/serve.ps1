param(
    [int]$Port = 8080,
    [switch]$Open
)

$projectRoot = Split-Path -Parent $PSScriptRoot
Push-Location $projectRoot

try {
    $pythonCmd = Get-Command python -ErrorAction SilentlyContinue
    if (-not $pythonCmd) {
        $pythonCmd = Get-Command py -ErrorAction SilentlyContinue
    }

    if (-not $pythonCmd) {
        Write-Host "Python nicht gefunden. Installiere Python oder starte einen lokalen HTTP-Server deiner Wahl." -ForegroundColor Yellow
        exit 1
    }

    $url = "http://localhost:$Port/3dv17.html"
    Write-Host "Serving on $url (Ctrl+C zum Beenden)" -ForegroundColor Green
    if ($Open) {
        Start-Process $url
    }

    & $pythonCmd.Source -m http.server $Port --bind 127.0.0.1
}
finally {
    Pop-Location
}

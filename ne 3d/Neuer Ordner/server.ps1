param(
    [int]$Port = 9999,
    [int]$MaxPortTries = 20,
    [switch]$NoBrowser
)

$root = $PSScriptRoot
if (-not $root) {
    $root = (Get-Location).Path
}

$mimeTypes = @{
    ".html" = "text/html"
    ".css"  = "text/css"
    ".js"   = "application/javascript"
    ".json" = "application/json"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".map"  = "application/json"
}

function Start-ListenerOnFirstFreePort {
    param(
        [int]$StartPort,
        [int]$TryCount
    )

    for ($i = 0; $i -lt $TryCount; $i++) {
        $candidatePort = $StartPort + $i
        $candidate = New-Object System.Net.HttpListener
        $candidate.Prefixes.Add("http://localhost:$candidatePort/")

        try {
            $candidate.Start()
            return @{ Listener = $candidate; Port = $candidatePort }
        } catch {
            $msg = $_.Exception.Message
            try { $candidate.Close() } catch {}

            # Typical conflict/ACL errors: move to next port.
            if (
                $msg -match "Konflikt" -or
                $msg -match "conflict" -or
                $msg -match "registration" -or
                $msg -match "Access is denied"
            ) {
                continue
            }

            throw
        }
    }

    throw "Kein freier Port gefunden im Bereich $StartPort bis $($StartPort + $TryCount - 1)."
}

$listener = $null
$activePort = $null

try {
    $startup = Start-ListenerOnFirstFreePort -StartPort $Port -TryCount $MaxPortTries
    $listener = $startup.Listener
    $activePort = $startup.Port

    Write-Host ""
    Write-Host "  === Mini Curve Fever 3D ===" -ForegroundColor Cyan
    Write-Host "  Server laeuft auf: http://localhost:$activePort" -ForegroundColor Green
    Write-Host "  Druecke Ctrl+C zum Beenden." -ForegroundColor DarkGray
    Write-Host ""

    if (-not $NoBrowser) {
        Start-Process "http://localhost:$activePort"
    }

    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
        } catch [System.Net.HttpListenerException] {
            break
        } catch [System.ObjectDisposedException] {
            break
        }

        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.AbsolutePath
        if ([string]::IsNullOrWhiteSpace($urlPath) -or $urlPath -eq "/") {
            $urlPath = "/index.html"
        }

        $relativePath = $urlPath.TrimStart('/').Replace('/', '\')
        if ($relativePath.Contains("..")) {
            $response.StatusCode = 403
            $msg = [System.Text.Encoding]::UTF8.GetBytes("403 - Zugriff verweigert")
            $response.OutputStream.Write($msg, 0, $msg.Length)
            $response.Close()
            continue
        }

        $filePath = Join-Path $root $relativePath

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
            $contentType = $mimeTypes[$ext]
            if (-not $contentType) {
                $contentType = "application/octet-stream"
            }

            $response.ContentType = $contentType
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 - Nicht gefunden")
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }

        $response.Close()
    }
}
catch {
    Write-Host "Fehler: $($_.Exception.Message)" -ForegroundColor Red
}
finally {
    if ($listener) {
        try {
            if ($listener.IsListening) {
                $listener.Stop()
            }
        } catch {}

        try {
            $listener.Close()
        } catch {}
    }
}

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

$dataDir = Join-Path $root "data"
$learningSyncFile = Join-Path $dataDir "learning-sync.json"
$learningSyncBackupFile = "$learningSyncFile.bak"

function Write-TextResponse {
    param(
        [Parameter(Mandatory = $true)]$Response,
        [Parameter(Mandatory = $true)][int]$StatusCode,
        [Parameter(Mandatory = $true)][string]$Text,
        [string]$ContentType = "text/plain; charset=utf-8"
    )
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($Text)
    $Response.StatusCode = $StatusCode
    $Response.ContentType = $ContentType
    $Response.ContentLength64 = $bytes.Length
    $Response.OutputStream.Write($bytes, 0, $bytes.Length)
}

function Read-RequestBodyUtf8 {
    param(
        [Parameter(Mandatory = $true)]$Request
    )
    $encoding = $Request.ContentEncoding
    if (-not $encoding) {
        $encoding = [System.Text.Encoding]::UTF8
    }
    $reader = New-Object System.IO.StreamReader($Request.InputStream, $encoding)
    try {
        return $reader.ReadToEnd()
    } finally {
        $reader.Close()
    }
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
        $method = [string]$request.HttpMethod
        if ([string]::IsNullOrWhiteSpace($method)) {
            $method = "GET"
        } else {
            $method = $method.ToUpperInvariant()
        }

        if ($urlPath -eq "/api/learning-sync") {
            try {
                $response.Headers["Cache-Control"] = "no-store, no-cache, must-revalidate"

                if ($method -eq "GET") {
                    $sourcePath = $null
                    if (Test-Path $learningSyncFile -PathType Leaf) {
                        $sourcePath = $learningSyncFile
                    } elseif (Test-Path $learningSyncBackupFile -PathType Leaf) {
                        $sourcePath = $learningSyncBackupFile
                    }

                    if (-not $sourcePath) {
                        $response.StatusCode = 204
                        $response.Close()
                        continue
                    }

                    $raw = Get-Content -Path $sourcePath -Raw -Encoding UTF8
                    if ([string]::IsNullOrWhiteSpace($raw)) {
                        $response.StatusCode = 204
                        $response.Close()
                        continue
                    }

                    Write-TextResponse -Response $response -StatusCode 200 -Text $raw -ContentType "application/json; charset=utf-8"
                    $response.Close()
                    continue
                }

                if ($method -eq "POST") {
                    $rawBody = Read-RequestBodyUtf8 -Request $request
                    if ([string]::IsNullOrWhiteSpace($rawBody)) {
                        Write-TextResponse -Response $response -StatusCode 400 -Text "Leerer Request Body"
                        $response.Close()
                        continue
                    }

                    try {
                        $parsed = $rawBody | ConvertFrom-Json -ErrorAction Stop
                        if (-not $parsed -or -not $parsed.engines) {
                            throw "Invalid payload: engines missing."
                        }
                    } catch {
                        Write-TextResponse -Response $response -StatusCode 400 -Text "Ungueltiges JSON Payload"
                        $response.Close()
                        continue
                    }

                    if (-not (Test-Path $dataDir -PathType Container)) {
                        New-Item -Path $dataDir -ItemType Directory -Force | Out-Null
                    }

                    $tmpPath = "$learningSyncFile.tmp"
                    [System.IO.File]::WriteAllText($tmpPath, $rawBody, [System.Text.UTF8Encoding]::new($false))

                    if (Test-Path $learningSyncFile -PathType Leaf) {
                        Copy-Item -Path $learningSyncFile -Destination $learningSyncBackupFile -Force
                    }
                    Move-Item -Path $tmpPath -Destination $learningSyncFile -Force

                    $ack = "{`"ok`":true,`"savedAt`":$([DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds())}"
                    Write-TextResponse -Response $response -StatusCode 200 -Text $ack -ContentType "application/json; charset=utf-8"
                    $response.Close()
                    continue
                }

                $response.Headers["Allow"] = "GET, POST"
                Write-TextResponse -Response $response -StatusCode 405 -Text "Method not allowed"
                $response.Close()
                continue
            } catch {
                try {
                    Write-TextResponse -Response $response -StatusCode 500 -Text "Internal sync error"
                } catch {}
                try { $response.Close() } catch {}
                continue
            }
        }

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

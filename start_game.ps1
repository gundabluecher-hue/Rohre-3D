
try {
    $port = 8080
    $path = $PSScriptRoot
    
    Write-Host "Starting server..."
    
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Start()

    Write-Host "Server started at http://localhost:$port/"
    Write-Host "Please do not close this window while playing."

    try {
        Start-Process "http://localhost:$port/3dv17.html"
        
        while ($listener.IsListening) {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            $localPath = $path + $request.Url.LocalPath.Replace("/", "\")
            
            if (Test-Path $localPath -PathType Leaf) {
                $content = [System.IO.File]::ReadAllBytes($localPath)
                $response.ContentLength64 = $content.Length
                
                $ext = [System.IO.Path]::GetExtension($localPath)
                switch ($ext) {
                    ".html" { $response.ContentType = "text/html" }
                    ".js"   { $response.ContentType = "application/javascript" }
                    ".css"  { $response.ContentType = "text/css" }
                    ".json" { $response.ContentType = "application/json" }
                    ".map"  { $response.ContentType = "application/json" }
                    ".png"  { $response.ContentType = "image/png" }
                    ".jpg"  { $response.ContentType = "image/jpeg" }
                }
                
                $response.OutputStream.Write($content, 0, $content.Length)
                $response.StatusCode = 200
            } else {
                $response.StatusCode = 404
            }
            
            $response.Close()
        }
    } finally {
        $listener.Stop()
    }
} catch {
    Write-Error $_
    Write-Host "An error occurred. Press Enter to exit." -ForegroundColor Red
    Read-Host
}

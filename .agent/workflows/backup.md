---
description: Schnelles Backup der aktuellen Version
---

# Backup-Workflow

Erstellt ein schnelles Backup ohne Versionsnummer zu erhöhen.

## Schnell-Backup erstellen

// turbo
```powershell
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupDir = "archive\backup_$timestamp"
New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
Copy-Item "3dv17.html" $backupDir
Write-Host "✅ Backup erstellt: $backupDir" -ForegroundColor Green
```

## Wann nutzen?

- Vor experimentellen Änderungen
- Wenn du `/versioning` nicht ausführen willst
- Für schnelle Zwischenstände

## Hinweis

> [!TIP]
> Für offizielle Versionen nutze stattdessen `/versioning`.

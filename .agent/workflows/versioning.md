---
description: Erstelle automatisch eine neue Version bei Änderungen
---

# Versionierungs-Workflow

Dieser Workflow erstellt versionierte Backups bei Änderungen an wichtigen Dateien.

## Vor Code-Änderungen

### Schritt 1: Version-Script ausführen

```powershell
# Erstelle neue Version
.\scripts\create-version.ps1
```

Das Script:
- Erkennt die aktuelle Versionsnummer aus `version.json`
- Erstellt einen neuen Versions-Ordner in `archive/`
- Kopiert die aktuell benötigten Dateien (HTML/CSS/JS)
- Aktualisiert die Versionsnummer

Optional (wenn gewünscht):
```powershell
.\scripts\create-version.ps1 -Message "…" -GitBackup
```

### Schritt 2: Änderungen vornehmen

Jetzt kannst du sicher Änderungen vornehmen.

## Manuelle Versionierung

```powershell
# Kopiere aktuelle Hauptdatei mit Timestamp
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$version = (Get-Content version.json | ConvertFrom-Json).version
New-Item -ItemType Directory -Path "archive\v$version" -Force
Copy-Item "3dv17.html" "archive\v$version\3dv17_$timestamp.html"
```

## Version wiederherstellen

```powershell
.\scripts\restore-version.ps1 -Version "2.1.0"
```

## Versions-Übersicht anzeigen

```powershell
.\scripts\list-versions.ps1
```

Zeigt alle Versionen mit:
- Versionsnummer
- Datum
- Dateigröße

## Hinweise

> [!IMPORTANT]
> Verwende immer diesen Workflow vor größeren Änderungen!

Siehe auch: `.agent/rules/project-rules.md` für Namenskonventionen.

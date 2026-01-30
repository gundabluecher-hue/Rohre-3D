# 🔧 Versionierungs-System - Setup

## Problem: PowerShell Execution Policy

Falls du den Fehler bekommst:
```
Die Ausführung von Skripts auf diesem System deaktiviert ist
```

## Lösung (Einmalig)

### Option 1: PowerShell als Administrator öffnen

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Danach kannst du alle Scripts ausführen.

### Option 2: Bypass für einzelne Ausführung

```powershell
PowerShell -ExecutionPolicy Bypass -File .\scripts\create-version.ps1
```

### Option 3: Manuelle Alternative (ohne Scripts)

Wenn du die Scripts nicht ausführen kannst, hier die manuelle Version:

#### Version erstellen

```powershell
# 1. Zeitstempel generieren
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"

# 2. Versions-Ordner erstellen
New-Item -ItemType Directory -Path "archive\v_$timestamp" -Force

# 3. Wichtige Dateien kopieren
Copy-Item "3dv17.html" "archive\v_$timestamp\"
Copy-Item "index.html" "archive\v_$timestamp\" -ErrorAction SilentlyContinue
Copy-Item "css" "archive\v_$timestamp\" -Recurse -ErrorAction SilentlyContinue
Copy-Item "js" "archive\v_$timestamp\" -Recurse -ErrorAction SilentlyContinue

Write-Host "✅ Version v_$timestamp erstellt!"
```

## Schnell-Setup (Empfohlen)

1. **PowerShell als Admin** öffnen (Rechtsklick auf PowerShell → Als Administrator ausführen)

2. **Execution Policy setzen:**
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

3. **Bestätigen mit:** `J` (Ja)

4. **Testen:**
```powershell
cd C:\Users\gunda\Desktop\3d
.\scripts\create-version.ps1 -Message "Test Version"
```

---

**Danach funktioniert das automatische Versionierungs-System! 🎉**

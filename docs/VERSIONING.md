# Versionierungs-System

Automatisches Backup-System für alle wichtigen Projektdateien.

## 🎯 Funktion

Bei jeder wichtigen Änderung wird automatisch eine versionierte Kopie aller Dateien erstellt.

## 📋 Verwendung

### Version erstellen (Vor Änderungen)

```powershell
cd c:\Users\gunda\Desktop\3d
.\scripts\create-version.ps1
```

Oder mit Beschreibung:
```powershell
.\scripts\create-version.ps1 -Message "Touch-Steuerung verbessert"
```

**Das passiert:**
- ✅ Erstellt Ordner `archive/vX.X.X`
- ✅ Kopiert die aktuell benötigten Laufzeit-Dateien (HTML, JS, CSS)
- ✅ Aktualisiert `version.json`
- ✅ Versionsnummer wird automatisch erhöht
- ✅ Schreibt Metadaten nach `archive/vX.X.X/version-info.json`

Optional (wenn gewünscht):
```powershell
.\scripts\create-version.ps1 -Message "…" -GitBackup
```
Das führt zusätzlich `git add -A`, `git commit` und `git push` aus.

### Alle Versionen anzeigen

```powershell
.\scripts\list-versions.ps1
```

Zeigt:
```text
All versions:
================================================================================

v2.0.3
   Date: 2026-01-29 20:15:00
   Message: Bug fixes
   Files: 3dv17.html, index.html, css, js, assets
...
```

### Alte Version wiederherstellen

```powershell
.\scripts\restore-version.ps1 -Version "2.0.1"
```

**ACHTUNG:** Erstellt automatisch Backup der aktuellen Version, bevor wiederhergestellt wird!

## 📁 Struktur

```
3d/
├── scripts/
│   ├── create-version.ps1    # Version erstellen
│   ├── list-versions.ps1     # Versionen auflisten
│   └── restore-version.ps1   # Version wiederherstellen
├── archive/
│   ├── v2.0.0/               # Automatisches Backup
│   ├── v2.0.1/
│   └── v2.0.2/
├── version.json              # Aktuelle Version
└── CHANGELOG.md              # Versions-Historie
```

## 🔄 Workflow

### Standard-Ablauf

1. **Vor Änderung:** `.\scripts\create-version.ps1 -Message "Was du ändern wirst"`
2. **Änderungen vornehmen** in den Dateien
3. **(Optional)** Weitere Version erstellen nach großen Änderungen

### Bei Problemen

- **Fehler gemacht?** → `.\scripts\restore-version.ps1 -Version "X.X.X"`
- **Alte Version ansehen?** → Öffne `archive/v11-v16/3dv16_full.html`

## 🎨 Features

✅ **Automatische Versionsnummern** (Major.Minor.Patch)  
✅ **Timestamps** für jede Version  
✅ **Beschreibungen** pro Version  
✅ **Changelog** kann manuell gepflegt werden  
✅ **Restore-Funktion** mit Sicherheits-Backup  
✅ **Übersichtliche Auflistung** aller Versionen  

## 📊 Gesicherte Dateien

Bei jedem Backup:
- `3dv17.html`
- `index.html`
- `css/`
- `js/`
- `assets/`

## 💡 Tipps

- **Häufig versionieren:** Vor jeder größeren Änderung
- **Aussagekräftige Beschreibungen:** `-Message "Was geändert wurde"`
- **Regelmäßig aufräumen:** Alte Versionen löschen (manuell)
- **Backup vor Restore:** Das Script macht das automatisch!

## 🚀 Beispiele

```powershell
# Neue Funktion hinzufügen
.\scripts\create-version.ps1 -Message "Gyroscope-Steuerung hinzugefügt"

# Bug beheben
.\scripts\create-version.ps1 -Message "Kollisions-Bug behoben"

# Design-Änderung
.\scripts\create-version.ps1 -Message "UI modernisiert"

# Vor großem Refactoring
.\scripts\create-version.ps1 -Message "Vor Physik-System Überarbeitung"
```

---

**Versionierungs-System aktiviert!** 🎉  
Jetzt kannst du sicher experimentieren - alte Versionen sind immer einen Befehl entfernt!

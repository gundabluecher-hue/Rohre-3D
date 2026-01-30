---
description: Projekt-Regeln für konsistente Entwicklung
---

# Projekt-Regeln

## Dateinamen
- **Keine Leerzeichen** - Verwende `kebab-case` (z.B. `map-editor.html`)
- **Keine Versionsnummern im Namen** - Version nur in `version.json`
- **Keine temporären Suffixe** (`_fixed`, `_rejected`, `_backup`)

## Ordnerstruktur
| Ordner | Zweck |
|--------|-------|
| `archive/` | Alle versionierten Backups |
| `docs/` | Dokumentation |
| `tools/` | Hilfswerkzeuge |
| `scripts/` | PowerShell-Skripte |
| `js/`, `css/` | Modulare Quelldateien |

## Vor Code-Änderungen (PFLICHT!)

> [!CAUTION]
> **BACKUP IST PFLICHT!** Vor JEDER Änderung an `3dv17.html` oder anderen wichtigen Dateien MUSS ein Backup erstellt werden!

1. **IMMER zuerst `/backup` ausführen** (erstellt Zeitstempel-Backup)
2. Prüfe `version.json` für aktuelle Version
3. Bei größeren Änderungen: `/versioning` Workflow ausführen
4. Aktualisiere `docs/CHANGELOG.md`

> [!TIP]
> Der Agent (ich) bin verpflichtet, vor jeder Code-Änderung ein Backup zu erstellen. Falls ich das vergesse, erinnere mich daran!

## Nach Code-Änderungen
1. Teste im Browser (F12 für Konsole)
2. Erhöhe Version in `version.json`
3. Commit mit aussagekräftiger Nachricht

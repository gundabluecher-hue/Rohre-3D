---
description: Öffne das Spiel im Browser zum Testen
---

# Test-Workflow

Starte das Spiel zum Testen im Browser.

## Browser öffnen

// turbo
```powershell
# Öffne 3dv17.html im Standard-Browser
Start-Process "3dv17.html"
```

## Prüfpunkte

Nach dem Start prüfe:
- [ ] Spiel lädt ohne Fehler (F12 → Konsole)
- [ ] Steuerung funktioniert (W/A/S/D)
- [ ] Kein Absturz nach 30 Sekunden

## Bei Fehlern

1. Browser-Konsole öffnen (F12)
2. Fehlermeldung kopieren
3. Fehlermeldung hier einfügen für Analyse

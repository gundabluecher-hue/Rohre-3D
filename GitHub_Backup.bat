@echo off
cd /d "%~dp0"
echo Starte Backup zu GitHub...
git add .
git commit -m "Auto-Backup: %date% %time%"
git push origin main
echo.
echo Backup erfolgreich!
timeout /t 5

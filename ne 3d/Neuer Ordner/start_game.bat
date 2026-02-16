@echo off
echo ====================================
echo   Mini Curve Fever 3D - NE 3D Launcher
echo ====================================
echo.
echo Projektpfad: %~dp0
echo Starte lokalen Webserver aus DIESEM Ordner...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause

@echo off
PowerShell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start_game.ps1"
if %errorlevel% neq 0 pause

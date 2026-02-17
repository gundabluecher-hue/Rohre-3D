@echo off
setlocal

set "PROJECT_DIR=%~dp0godot_source"
set "PROJECT_FILE=%PROJECT_DIR%\project.godot"

if not exist "%PROJECT_FILE%" (
  echo Projektdatei nicht gefunden:
  echo %PROJECT_FILE%
  pause
  exit /b 1
)

set "GODOT_EXE=%~dp0Godot_v4.6-stable_win64.exe"
if not exist "%GODOT_EXE%" set "GODOT_EXE=%USERPROFILE%\Downloads\Godot_v4.6-stable_win64.exe\Godot_v4.6-stable_win64.exe"
if not exist "%GODOT_EXE%" set "GODOT_EXE=%USERPROFILE%\Downloads\Godot_v4.6-stable_win64.exe"

if not exist "%GODOT_EXE%" (
  echo Godot 4.6 wurde nicht gefunden.
  echo Bitte in dieser Datei den Pfad in GODOT_EXE anpassen.
  echo Gesucht wurde:
  echo   %~dp0Godot_v4.6-stable_win64.exe
  echo   %USERPROFILE%\Downloads\Godot_v4.6-stable_win64.exe\Godot_v4.6-stable_win64.exe
  echo   %USERPROFILE%\Downloads\Godot_v4.6-stable_win64.exe
  pause
  exit /b 1
)

start "" "%GODOT_EXE%" --path "%PROJECT_DIR%"
exit /b 0

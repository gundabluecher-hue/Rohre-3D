@echo off
echo === Mini Curve Fever 3D - Map Editor ===
echo Starte Vite Dev-Server...
echo.

cd /d "%~dp0"

start "" http://localhost:5173/editor/map-editor-3d.html

npm run dev

@echo off
title Mostak Portfolio - Local Dev Server
cd /d "%~dp0"
echo ====================================================
echo   Starting Mostak's Portfolio Server...
echo   Opening in your default browser at http://localhost:5173
echo ====================================================
echo.
timeout /t 2 /nobreak >nul
start http://localhost:5173
npm run dev
pause

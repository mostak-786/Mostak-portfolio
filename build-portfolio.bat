@echo off
title Mostak Portfolio - Build Project
cd /d "%~dp0"
echo ====================================================
echo   Building production bundle...
echo ====================================================
echo.
npm run build
echo.
echo Build finished! Press any key to close.
pause

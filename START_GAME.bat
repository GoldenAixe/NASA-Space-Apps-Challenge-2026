@echo off
cd /d "%~dp0"
where py >nul 2>nul
if not errorlevel 1 (
    py -3 start_game.py
    exit /b
)
python --version >nul 2>nul
if not errorlevel 1 (
    python start_game.py
    exit /b
)
echo Python 3 is needed for this launcher.
echo You can also open this folder with VS Code Live Server or any static web server.
pause

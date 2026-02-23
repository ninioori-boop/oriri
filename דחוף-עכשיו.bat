@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo מעלה את האתר ל-GitHub...
git add .
git status
git commit -m "עדכון האתר - פריסה מחדש"
git push origin main

echo.
echo הושלם! בדוק ב-Actions ב-GitHub שהפריסה הסתיימה.
echo האתר: https://ninioori-boop.github.io/oriri/blog.html
pause

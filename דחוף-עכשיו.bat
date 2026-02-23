@echo off
chcp 65001 >nul
cd /d "c:\Users\ninio\OneDrive\B7A3~1\oriri-main"

echo מעלה את האתר ל-GitHub...
git add .
git status
git commit -m "עדכון האתר - פריסה מחדש"
git push origin main

echo.
echo הושלם! בדוק ב-Actions ב-GitHub שהפריסה הסתיימה.
echo האתר: https://ninioori-boop.github.io/oriri/blog.html
pause

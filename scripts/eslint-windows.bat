@ECHO off

SETLOCAL ENABLEDELAYEDEXPANSION
SET "LIST="
for /F "tokens=*" %%f IN ('git diff-index --name-only --diff-filter=d HEAD ^| more /p ^| findstr /rec:"\.jsx*"') DO (
  if "!LIST!"=="" (SET LIST=%%f) ELSE (SET LIST=!LIST! %%f)
)
( IF "%~1" == "" (npx eslint %LIST%) ELSE (npx eslint %1 %LIST%) ) && (echo Run successful:[92m"No lint errors"[0m)

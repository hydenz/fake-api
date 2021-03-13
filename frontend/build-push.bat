@ECHO OFF
ECHO Building react app
call npm run build && move build ..\
@REM cd ..
@REM call git stash && call git checkout prod
@REM pause
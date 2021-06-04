@echo off
title 显示WIFI密码 by KD
cls
:CORE          
echo ============================
netsh wlan show profiles
echo -------------
echo 请选择选项：
echo 1.查看密码
echo 2.退出
echo WIFI名字就是 所有用户配置文件
echo ===========================
:FI
set /p COREID=请输入选项:（1/2）
if "%COREID%"=="1" (goto WIFIMM)
if "%COREID%"=="2" (goto notice) else (
echo 你写错了，只能写（1/2）
goto FI
:WIFIMM
echo ===========================
set /p WIFIMZ=请输入WIFI名(不分大小)  
netsh wlan show profile name="%WIFIMZ%" key=clear
echo 关键内容就是该WIFI的密码
echo 任意键后会返回主页
echo ===========================
pause
@cls
goto CORE
echo ============================
:notice
EXIt
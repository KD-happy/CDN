@echo off
title ��ʾWIFI���� by KD
cls
:CORE          
echo ============================
netsh wlan show profiles
echo -------------
echo ��ѡ��ѡ�
echo 1.�鿴����
echo 2.�˳�
echo WIFI���־��� �����û������ļ�
echo ===========================
:FI
set /p COREID=������ѡ��:��1/2��
if "%COREID%"=="1" (goto WIFIMM)
if "%COREID%"=="2" (goto notice) else (
echo ��д���ˣ�ֻ��д��1/2��
goto FI
:WIFIMM
echo ===========================
set /p WIFIMZ=������WIFI��(���ִ�С)  
netsh wlan show profile name="%WIFIMZ%" key=clear
echo �ؼ����ݾ��Ǹ�WIFI������
echo �������᷵����ҳ
echo ===========================
pause
@cls
goto CORE
echo ============================
:notice
EXIt
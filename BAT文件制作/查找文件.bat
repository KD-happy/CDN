@echo off
title �����ļ���ַ by KD

:Return
cls
:CORE
echo ==================================
echo �����ļ���ַ
echo 1.��C�̲���
echo 2.��D�̲���
echo 3.��E�̲���
echo 4.���Լ��涨��·���²����ļ�
echo.
echo ������������Help(���ִ�Сд)
echo �ļ�Խ�����ʱ���Խ���������ĵȴ�
echo ==================================
set /p Useroption=������ѡ�
if "%Useroption%" == "1" ( goto FindC )
if "%Useroption%" == "2" ( goto FindD )
if "%Useroption%" == "3" ( goto FindE ) 
if "%Useroption%" == "4" ( goto FreeFind )
if /i "%Useroption%" == "Help" ( goto Help )
if /i "%Useroption%" == "FH" ( goto Return ) else (
cls
echo ����ˣ���ϸ��Ŷ
goto CORE
)

:Help
echo ==================================
echo �ļ�֧��ͨ��� *
echo *.txt ���ǲ���txt�ļ�
echo �������ļ����ͣ�ֻҪ�ĺ�׺��������
echo *���* ���ǲ������ƺ� ��� ���ļ�
echo.
echo ·����ѯʱ��ѡ�����Ҫ��·������һ��
echo Ҫ���̷���
echo ��ʽ��D:\Software
echo.
echo ���������ҳ������FH(���ִ�Сд)�᷵�ص�һ��ҳ��
echo ==================================
echo ������󷵻ص�һ��ҳ��
pause
cls
goto CORE

:FindC
echo д����Ҫ���ҵ��ļ���
set /p Filename=�ļ�����
if /i "%Filename%" == "FH" ( goto Return )
dir /s /b C:\%Filename%
echo ==================================
echo ������ʾ�ľ��Ǵ��ļ���·����
echo ������󷵻ص�һ��ҳ��
pause
cls
goto CORE

:FindD
echo д����Ҫ���ҵ��ļ���
set /p Filename=�ļ�����
if /i "%Filename%" == "FH" ( goto Return )
dir /s /b D:\%Filename%
echo ==================================
echo ������ʾ�ľ��Ǵ��ļ���·����
echo ������󷵻ص�һ��ҳ��
pause
cls
goto CORE

:FindE
echo д����Ҫ���ҵ��ļ���
set /p Filename=�ļ�����
if /i "%Filename%" == "FH" ( goto Return )
dir /s /b E:\%Filename%
echo ==================================
echo ������ʾ�ľ��Ǵ��ļ���·����
echo ������󷵻ص�һ��ҳ��
pause
cls
goto CORE

:FreeFind
echo д����Ҫ��·��
set /p Filepath=·����
if /i "%Filepath%" == "FH" ( goto Return )
echo д����Ҫ���ҵ��ļ���
set /p Filename=�ļ�����
if /i "%Filename%" == "FH" ( goto Return )
dir /s /b %Filepath%\%Filename%
echo ==================================
echo ������ʾ·�����Ǵ��ļ���·����
echo ������󷵻ص�һ��ҳ��
pause
cls
goto CORE
@echo off
title 查找文件地址 by KD

:Return
cls
:CORE
echo ==================================
echo 查找文件地址
echo 1.在C盘查找
echo 2.在D盘查找
echo 3.在E盘查找
echo 4.在自己规定的路径下查找文件
echo.
echo 不会用其输入Help(不分大小写)
echo 文件越多查找时间就越长，请耐心等待
echo ==================================
set /p Useroption=请输入选项：
if "%Useroption%" == "1" ( goto FindC )
if "%Useroption%" == "2" ( goto FindD )
if "%Useroption%" == "3" ( goto FindE ) 
if "%Useroption%" == "4" ( goto FreeFind )
if /i "%Useroption%" == "Help" ( goto Help )
if /i "%Useroption%" == "FH" ( goto Return ) else (
cls
echo 填错了，仔细看哦
goto CORE
)

:Help
echo ==================================
echo 文件支持通配符 *
echo *.txt 就是查找txt文件
echo 其他的文件类型，只要改后缀名就行了
echo *你好* 就是查找名称含 你好 的文件
echo.
echo 路径查询时，选择好需要的路径后复制一下
echo 要含盘符名
echo 格式：D:\Software
echo.
echo 任意个输入页面输入FH(不分大小写)会返回第一个页面
echo ==================================
echo 任意键后返回第一个页面
pause
cls
goto CORE

:FindC
echo 写你想要查找的文件名
set /p Filename=文件名：
if /i "%Filename%" == "FH" ( goto Return )
dir /s /b C:\%Filename%
echo ==================================
echo 上面显示的就是此文件的路径了
echo 任意键后返回第一个页面
pause
cls
goto CORE

:FindD
echo 写你想要查找的文件名
set /p Filename=文件名：
if /i "%Filename%" == "FH" ( goto Return )
dir /s /b D:\%Filename%
echo ==================================
echo 上面显示的就是此文件的路径了
echo 任意键后返回第一个页面
pause
cls
goto CORE

:FindE
echo 写你想要查找的文件名
set /p Filename=文件名：
if /i "%Filename%" == "FH" ( goto Return )
dir /s /b E:\%Filename%
echo ==================================
echo 上面显示的就是此文件的路径了
echo 任意键后返回第一个页面
pause
cls
goto CORE

:FreeFind
echo 写你想要的路径
set /p Filepath=路径：
if /i "%Filepath%" == "FH" ( goto Return )
echo 写你想要查找的文件名
set /p Filename=文件名：
if /i "%Filename%" == "FH" ( goto Return )
dir /s /b %Filepath%\%Filename%
echo ==================================
echo 上面显示路径就是此文件的路径了
echo 任意键后返回第一个页面
pause
cls
goto CORE
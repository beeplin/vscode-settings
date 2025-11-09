#Requires AutoHotkey v2.0
#SingleInstance Force

#Include layer.ahk

setLayer "", "
(
Esc          F1    F2    F3    F4       F5    F6    F7    F8       F9    F10   F11   F12

``     1     2     3     4     5     6     7     8     9     0     -     =            BS

Tab       q     w     f     p     b     j     l     u     y     ;     [     ]          \

LControl   a     r     s     t     g     m     n     e     i     o     '           Enter

LShift        x     c     d     z     v     k     h     ,     .     /             RShift

CapsLock   LWin  LAlt               Space                        LAlt  AppsKey  RControl
)"

setLayer "Space", "
(
Sleep Browser_Back Browser_Forward Browser_Refresh Browser_Stop Browser_Search Browser_Favorites Browser_Home Media_Stop Launch_Mail Launch_Media Launch_App1 Launch_App2

F11   F1    F2    F3    F4    F5                F6    F7    F8    F9    F10  Volume_Down Volume_Up       Volume_Mute

F12     Esc    BS    Up    Del   PgUp              Home  7     8     9     0  Media_Prev Media_Next Media_Play_Pause

WheelUp/^ Enter Left  Down  Right PgDn              End   4     5     6     =  WheelLeft                  WheelRight

WheelDown/+ RButton MButton LButton XButton1 XButton2  -     1     2     3     ``                             RShift

WheelLeft/^ WheelRight/#  Ins/!               Space                                PrintScreen/! ScrollLock Pause/>^
)"

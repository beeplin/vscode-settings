#Requires AutoHotkey v2.0
#SingleInstance Force

#Include layer.ahk

setLayer "", "
(
Esc          F1    F2    F3    F4       F5    F6    F7    F8       F9    F10   F11   F12

``     1     2     3     4     5     6     7     8     9     0     -     =            BS

Tab       q     w     f     p     b     j     l     u     y     ;     [     ]          \

CapsLock/^ a     r     s     t     g     m     n     e     i     o     '           Enter

LShift        z     x     c     d     v      k     h     ,     .     /            RShift

LControl  LWin  LAlt                  Space                         LAlt  RWin  RControl
)"

setLayer "Space", "
(
Esc         F1    F2    F3    F4     F5    F6    F7    F8                             F9    F10   F11   F12

Ins   F1    F2    F3    F4    F5        F6    F7    F8    F9    F10       Volume_Down Volume_Up Volume_Mute

F11/!   PgUp/^ BS    Up    Del   ``        \     7     8     9     = Media_Prev Media_Next Media_Play_Pause

F12/^     Esc/! Left  Enter Right Tab       '     4     5     6     0     Home                          End

LShift     PgDn/+ WheelLeft Down WheelRight [  ]     1     2     3     -                             RShift

LControl  LWin  LAlt                Space                                              LAlt  RWin  RControl
)"

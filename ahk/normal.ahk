#Requires AutoHotkey v2.0
#SingleInstance Force

#Include layer.ahk

setLayer "", "
(
``     <     -     =     >     ~     %     &     (     {     }     )     |        !

_         q     w     f     p     b     j     l     u     y     ;     [     ]     \

CapsLock/^ a     r     s     t     g     m     n     e     i     o     '          +

LShift        z     x     c     d     v      k     h     ,     .     /        RShift

PrintScreen/^  LWin  LAlt           Space                    LAlt  RWin  AppsKey/>^
)"

setLayer "Space", "
(
Ins   F1    F2    F3    F4    F5        F6    F7    F8    F9    F10   Volume_Down    Volume_Up   Volume_Mute

F11/!   Home/^ BS    Up    PgUp  Del       ^     7     8     9     $  Media_Prev Media_Next Media_Play_Pause

F12/^     Esc/+ Left  Enter Right PgDn      @     4     5     6     0     -                                +

LShift     End/! Tab Down WheelLeft WheelRight #     1     2     3     *                              RShift

ScrollLock/^  LWin  LAlt                  Space                                         LAlt  RWin  Pause/>^
)"

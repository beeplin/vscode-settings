#Requires AutoHotkey v2.0
#SingleInstance Force

#Include layer.ahk

setLayer "", "
(
F11   F1    F2    F3    F4    F5  LButton MButton RButton   (     )     {     }    BackSpace

Tab      q     w     f     p     b     k     l     u     y     ;     [     ]               \

CapsLock/^  a   r     s     t     g     m     n     e     i     o     '                Enter

LShift       x     c     d     z     v     j     h     ,     .     /                  RShift

LWin  LWin  LAlt                   Space                                RAlt  RWin  RControl
)"

setLayer "Space", "
(
F12   F6    F7    F8    F9    F10   Ins  Media_Prev Media_Play_Pause Media_Next Volume_Mute Volume_Down Volume_Up ScrollLock

LAlt     Esc   BS    Up    Del   PgUp  Home  ``    -     =     \  WheelLeft WheelRight Pause

LControl  Enter Left  Down  Right PgDn  End   >     _     +     |     Space          AppsKey

LShift       1     2     3     4     5     6     7     8     9     0                  RShift

LWin  LWin       LAlt               Space                               RAlt  RWin  RControl
)"

; setLayer "CapsLock", "
; (
; Esc         F1    F2    F3    F4               F5        F6      F7       F8            F9           F10           F11            F12

; Help  F1    F2    F3    F4    F5         F6         F7       F8      F9       F10       Volume_Down       Volume_Up       Volume_Mute

; Sleep    F9    F10   F11   F12 ScrollLock Media_Prev XButton1 WheelUp XButton2 Volume_Up Launch_App1 Launch_App2 Media_NextMedia_Stop

; LControl  F5    F6    F7    F8  PrintScreen Media_Next WheelLeft WheelDown WheelRight Volume_Down            Launch_Media Launch_Mail

; LShift       F1    F2    F3    F4    Pause  Media_Play_Pause  LButton   MButton   RButton  Volume_Mute                         RShift

; Ins       LWin  LAlt               Space                                                                      RAlt  AppsKey  RControl
; )"

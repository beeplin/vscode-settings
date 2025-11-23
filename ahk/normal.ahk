#Requires AutoHotkey v2.0
#SingleInstance Force

#Include layer.ahk

setLayer "", "
(
Esc         F1    F2    F3    F4       F5    F6    F7    F8          F9    F10    F11    F12

F11   F1    F2    F3    F4    F5    F6    F7    F8    F9    F10    XButton1 XButton2 WheelUp

Tab      q     w     f     p     b     k     l     u     y     ;     [  WheelLeft WheelRight

LControl  a     r     s     t     g     m     n     e     i     o     '            WheelDown

LShift       x     c     d     z     v     j     h     ,     .     /                  RShift

CapsLock  LWin  LAlt               Space                                RAlt  RWin  RControl
)"

setLayer "Space", "
(
Esc         F1    F2    F3    F4       F5    F6    F7    F8          F9    F10    F11    F12

F12 Volume_Mute Volume_Down Volume_Up Media_Play_Pause Media_Prev Media_Next Launch_Media Launch_Mail Launch_App1 Launch_App2 LButton RButton Sleep

Space    Esc   BS    Up    Del   PgUp  Home  >    -     =     \     ]       ScrollLock Pause

LControl  Enter Left  Down  Right PgDn  End   {     (     )     }     ``         PrintScreen

LShift       1     2     3     4     5     6     7     8     9     0                  RShift

Ins       LWin  LAlt               Space                                RAlt  RWin  RControl
)"

; setLayer "CapsLock", "
; (
; Esc         F1    F2    F3    F4               F5        F6      F7       F8            F9           F10           F11            F12

; Help  F1    F2    F3    F4    F5         F6         F7       F8      F9       F10       Volume_Down       Volume_Up       Volume_Mute

; Sleep    F12   F9    F8    F7  ScrollLock Media_Prev XButton1 WheelUp XButton2 Volume_Up Launch_App1 Launch_App2 Media_NextMedia_Stop

; LControl  F11   F6    F5    F4  PrintScreen Media_Next WheelLeft WheelDown WheelRight Volume_Down             Launch_Media Launch_Mail

; LShift       F3    F2    F1    F10   Pause  Media_Play_Pause  LButton   MButton   RButton  Volume_Mute                         RShift

; Ins       LWin  LAlt               Space                                                                      RAlt  AppsKey  RControl
; )"

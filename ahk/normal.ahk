#Requires AutoHotkey v2.0
#SingleInstance Force

#Include layer.ahk

setLayer "", "
(
Esc         F1    F2    F3    F4       F5    F6    F7    F8             F9     F10     F11     F12

F11   F1    F2    F3    F4    F5    F6    F7    F8    F9    F10  Volume_Down Volume_Up Volume_Mute

Tab      q     w     f     p     b     j     l     u     y     ;     [       Media_Prev Media_Next

LControl  a     r     s     t     g     m     n     e     i     o     '           Media_Play_Pause

LShift       x     c     d     z     v     k     h     ,     .     /                        RShift

CapsLock  LWin  LAlt               Space                                     RAlt  _      RControl
)"

setLayer "Space", "
(
Esc         F1    F2    F3    F4       F5    F6    F7    F8             F9     F10     F11     F12

F12   F1    F2    F3    F4    F5    F6    F7    F8    F9    F10  Volume_Down Volume_Up Volume_Mute

``       Esc   BS    Up    Del   PgUp  Home  >    -     =     |     ]        Media_Prev Media_Next

LControl  Enter Left  Down  Right PgDn  End   )     }     {     (     \           Media_Play_Pause

LShift       3     2     1     4     5     6     7     8     9     0                        RShift

Ins       LWin  LAlt               Space                                     RAlt  Space  RControl
)"

; setLayer "CapsLock", "
; (
; Esc         F1    F2    F3    F4               F5        F6      F7       F8            F9           F10           F11            F12

; Help  F1    F2    F3    F4    F5         F6         F7       F8      F9       F10       Volume_Down       Volume_Up       Volume_Mute

; Sleep    F12   F9    F8    F7  ScrollLock Media_Prev XButton1 WheelUp XButton2 Volume_Up Launch_App1 Launch_App2 Media_NextMedia_Stop

; LControl  F11   F6    F5    F4  PrintScreen Media_Next WheelLeft WheelDown WheelDown Volume_Down             Launch_Media Launch_Mail

; LShift       F3    F2    F1    F10   Pause  Media_Play_Pause  LButton   MButton   RButton  Volume_Mute                         RShift

; Ins       LWin  LAlt               Space                                                                      RAlt  AppsKey  RControl
; )"

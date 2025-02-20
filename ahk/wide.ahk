#Requires AutoHotkey v2.0
#SingleInstance Force

; this keymap is optimized for english, pinyin, vim and vscode

#Include layer.ahk

setLayer "", "
(
%           ``    <     >     {     }   Volume_Down  Volume_Up   $     :     =     [     ]         \

Tab            q     w     f     p     b      Volume_Mute     j     l     u     y     ;     (      )

Escape/^        a     r     s     t     g      WheelRight      m     n     e     i     o           '

LShift             x     c     d     v     z                _     k     h     ,     .              /

Left/^              LWin  LAlt                   Space                        RShift  RWin  Right/>^
)"

setLayer "Space", "
(
PrintScreen F1    F2    F3    F4    F7   Media_Prev  Media_Next  F5    F6    F9    F10   F11       !

^z             F8 Backspace Up Delete Insert Media_Play_Pause ~     7     8     9     +     |      &

CapsLock/^      F12   Left  Enter Right PgUp   WheelLeft       #     1     2     3     -           "

LShift             Home  Down  End   PgDn  AppsKey          ^     @     4     5     6              *

ScrollLock/^  LWin  LAlt                  Space                               0       RWin  Pause/>^
)"

Esc::%
Space & Esc::^y

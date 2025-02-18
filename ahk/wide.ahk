#Requires AutoHotkey v2.0
#SingleInstance Force

; this keymap is optimized for english, pinyin, vim and vscode

#Include layer.ahk

setLayer "", "
(
%     ``    <     >     {     }  Volume_Down  Volume_Up   +     -     =     [     ]         \

Tab      q     w     f     p     b     Volume_Mute     j     l     u     y     ;     (      )

Escape/^  a     r     s     t     g     WheelRight      m     n     e     i     o           '

LShift       x     c     d     v     z               _     k     h     ,     .              /

Left/^         LWin  LAlt                 Space                      RShift  RWin    Right/>^
)"

setLayer "Space", "
(
^y    F1    F2    F3    F4    F7  Media_Prev  Media_Next  F5    F6    F9    F10   F11       ^

^z       Home  BS    Up    Del   F8  Media_Play_Pause  &     7     8     9     *     $      @

Ins/^     LAlt  Left  Enter Right F12   WheelLeft       !     1     2     3     0           "

LShift       PgUp  Down  PgDn  End   CapsLock        ~     |     4     5     6              #

PrintScreen/^  LWin  LAlt                 Space                      RShift  RWin  AppsKey/>^
)"

Esc::%
Space & Esc::^y

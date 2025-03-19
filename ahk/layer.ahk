#Requires AutoHotkey v2.0
#SingleInstance Force

#Include thinkpad.ahk

physicalKeyboard := convertLayer("
(
``    1     2     3     4     5     6     7     8     9     0     -     =  BackSpace

Tab      q     w     e     r     t     y     u     i     o     p     [     ]       \

CapsLock  a     s     d     f     g     h     j     k     l     ;     '        Enter

LShift       z     x     c     v     b     n     m     ,     .     /          RShift

LControl LWin LAlt                  Space                      RAlt AppsKey RControl
)"
)

setLayer(leader, str) {
    layer := convertLayer(str)
    for index, physical in physicalKeyboard {
        hot := leader = "" ? "*" physical : leader " & " physical
        layered := parseLayered(layer[index])
        if layered.hold = ""
            HotKey hot, handleLayered(physical, "", layered)
        else {
            Hotkey hot, handleLayered(physical, "Down", layered)
            Hotkey hot " Up", handleLayered(physical, "Up", layered)
        }
    }
}

convertLayer(str) {
    str := StrReplace(str, "`n", " ")
    loop {
        str := StrReplace(str, "  ", " ", , &count)
        if count = 0
            break
    }
    return StrSplit(str, " ")
}

parseLayered(str) {
    array := StrSplit(str, "/")
    tail := SubStr(str, -1, 1)
    hasHold := array.Length = 2 and InStr("^!+", tail)
    side := hasHold ? InStr(array[2], ">") ? "R" : "L" : ""
    hold := hasHold ? side (tail = "^" ? "Control" : tail = "!" ? "Alt" : "Shift") : ""
    remained := hasHold ? array[1] : str
    tap := ""
    prefix := ""
    if StrLen(remained) = 1
        tap := remained
    else
        for index, char in StrSplit(remained)
            if InStr("^+!#", char)
                prefix .= char
            else
                tap .= char
    return { hold: hold, tap: tap, prefix: prefix }
}

handleLayered(physical, direction, layered) {
    return hot => sendLayered(hot, physical, direction, layered)
}

sendLayered(hot, physical, direction, layered) {
    if layered.hold = ""
        Send("{Blind}" layered.prefix "{" layered.tap "}")
    else {
        Send "{" layered.hold " " direction "}"
        if direction = "Up" and A_PriorKey = physical {
            if (A_TimeSincePriorHotkey < 1000) {
                Suspend "1"
                ; Send "{" layered.hold " Down}"
                ; Send "{" layered.hold " Up}"
                Send "{Blind}{" layered.tap "}"
            }
            Suspend "0"
        }
    }
}

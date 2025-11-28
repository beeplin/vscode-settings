#Requires AutoHotkey v2.0
#SingleInstance Force

MT(leader, key, hold, tap) {
    pre := leader = "" ? "" : leader " & "
    Hotkey pre key, _ => Send("{Blind}{" hold " down}")
    Hotkey pre key " up", _ => up(key, hold, tap)
}

up(key, hold, tap) {
    Send "{Blind}{" hold " up}"
    if A_PriorKey = key {
        if (A_TimeSincePriorHotkey < 1000) {
            Suspend "1"
            ; Sleep 10
            Send "{Blind}{" hold " down}" ; for alt & sticky mods
            ; Sleep 10
            Send "{Blind}{" hold " up}"
            Send "{Blind}{" tap "}"
        }
        ; Sleep 10
        Suspend "0"
    }
}

`::F11
1::F1
2::F2
3::F3
4::F4
5::F5
6::WheelLeft
7::WheelRight
8::_
9::(
0::`{
-::}
=::)
BackSpace::BackSpace

Tab::Tab
q::q
w::w
e::f
r::p
t::b
y::k
u::l
i::u
o::y
p::;
[::[
]::]
\::\

MT "", "CapsLock", "LControl", "CapsLock"
a::a
s::r
d::s
f::t
g::g
h::m
j::n
k::e
l::i
`;::o
'::'
Enter::Enter

LShift::LShift
z::x
x::c
c::d
v::z
b::v
n::j
m::h
,::,
.::.
/::/
RShift::RShift

LControl::LWin
LWin::LWin
LAlt::LAlt
Space::Space
RAlt::RAlt
AppsKey::AppsKey
RControl::RControl

Space & `::F12
Space & 1::F6
Space & 2::F7
Space & 3::F8
Space & 4::F9
Space & 5::F10
Space & 6::PrintScreen
Space & 7::ScrollLock
Space & 8:: Pause
Space & 9::WheelLeft
Space & 0::WheelRight
Space & -::Volume_Down
Space & =::Volume_Up
Space & BackSpace::Volume_Mute

MT "Space", "Tab", "LAlt", "Home"
Space & q::Esc
Space & w::BS
Space & e::Up
Space & r::Del
Space & t::PgUp
Space & y::XButton1
Space & u::XButton2
Space & i::LButton
Space & o::MButton
Space & p::RButton
Space & [::Media_Prev
Space & ]::Media_Next
Space & \::Media_Play_Pause

MT "Space", "CapsLock", "LControl", "End"
Space & a::Enter
Space & s::Left
Space & d::Down
Space & f::Right
Space & g::PgDn
Space & h::<
Space & j::>
Space & k::-
Space & l::=
Space & `;::\
Space & '::`
Space & Enter::Space

MT "Space", "LShift", "LShift", "Ins"
; Space & LShift::LShift
Space & z::1
Space & x::2
Space & c::3
Space & v::4
Space & b::5
Space & n::6
Space & m::7
Space & ,::8
Space & .::9
Space & /::0
Space & RShift::RShift

Space & LControl::LWin
Space & LWin::LWin
Space & LAlt::LAlt
Space & RAlt::RAlt
Space & AppsKey::RWin
Space & RControl::RControl

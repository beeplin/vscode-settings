#Requires AutoHotkey v2.0
#SingleInstance Force

`::F11
1::F1
2::F2
3::F3
4::F4
5::F5
6::WheelLeft
7::WheelRight
8::*
9::(
0::)
-::_
=::+
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

CapsLock:: Send "{Blind}{LControl down}"
CapsLock up::
{
    Send "{Blind}{LControl Up}"
    if (A_PriorKey == "CapsLock" and A_TimeSincePriorHotkey < 400)
        Send "{Blind}{Escape}"
}
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
LWin::CapsLock
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
Space & 9::XButton1
Space & 0::XButton2
Space & -::Volume_Down
Space & =::Volume_Up
Space & BackSpace::Volume_Mute

Space & Tab::Home
Space & q::End
Space & w::BS
Space & e::Up
Space & r::Del
Space & t::PgUp
Space & y::NumpadSub
Space & u::NumpadAdd
Space & i::-
Space & o::=
Space & p::\
Space & [::Media_Prev
Space & ]::Media_Next
Space & \::Media_Play_Pause

Space & CapsLock::LControl
Space & a::Enter
Space & s::Left
Space & d::Down
Space & f::Right
Space & g::PgDn
Space & h::>
Space & j::`{
Space & k::(
Space & l::)
Space & `;::}
Space & '::`
Space & Enter::Space

Space & LShift::LShift
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
Space & LWin::LControl
Space & LAlt::LAlt
Space & RAlt::RAlt
Space & AppsKey::AppsKey
Space & RControl::RControl

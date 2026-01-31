const SNIPPETS = [
  {
    id: "777",
    title: "Turtle Star",
    tags: ["777", "turtle graphics", "python"],
    code: `from turtle import *
from colorsys import *

tracer(20)
b = "black"
bgcolor(b)
h = 0
pensize(2)
speed(0)

for i in range(600):
    h += 0.009
    color(hsv_to_rgb(h,1,1),b)
    begin_fill()
    for j in range(5):
        fd(100)
        rt(100)
        fd(100)
        lt(100)
        rt(360 / 5)
    end_fill()
    rt(2)
    hideturtle()

done()`
  },
  {
    id: "650",
    title: "Avengers Logo",
    tags: ["650", "python"],
    code: ` import turtle

def draw_circle(pen):
	# outer circle
	pen.setposition(0, -280)
	pen.pendown()
	pen.begin_fill()
	pen.color('red')
	pen.pencolor('white')
	pen.circle(300)
	pen.end_fill()
	pen.penup()

def draw_circle2(pen):
	# inner circle
	pen.pensize(2)
	pen.setposition(0, -230)
	pen.pendown()
	pen.begin_fill()
	pen.color('black')
	pen.circle(250)
	pen.end_fill()
	pen.penup()

def draw_A(pen):
	# drawing ‘A’
	pen.setposition(30, -110)
	pen.pendown()
	pen.begin_fill()
	pen.color('red')
	pen.pensize(10)
	pen.pencolor('white')
	pen.forward(23)
	pen.backward(123)
	pen.left(60)
	pen.backward(220)
	pen.right(60)
	pen.backward(100)
	pen.right(117)
	pen.backward(710)
	pen.right(63)
	pen.backward(110)
	pen.right(90)
	pen.backward(510)
	pen.right(90)
	pen.backward(100)
	pen.right(90)
	pen.backward(70)
	pen.end_fill()
	pen.penup()

def draw_triangle(pen):
	# Triangle shape in ‘A’ to make it look like 2d
	pen.pensize(10)
	pen.setposition(53, -40)
	pen.pendown()
	pen.begin_fill()
	pen.color('black')
	pen.pencolor('white')
	pen.right(90)
	pen.forward(100)
	pen.right(115)
	pen.forward(250)
	pen.right(157)
	pen.forward(227)
	pen.end_fill()

def draw_arrow(pen):
	# arrow
	pen.backward(80)
	pen.left(42)
	pen.forward(147)
	pen.right(83)
	pen.forward(140)

if __name__ == '__main__':
	win = turtle.Screen()
	win.bgcolor('black')

	avengers = turtle.Turtle()
	avengers.speed(10)
	avengers.pensize(10)
	avengers.penup()
	
	draw_circle(avengers)
	draw_circle2(avengers)
	draw_A(avengers)
	draw_triangle(avengers)
	draw_arrow(avengers)
	
	avengers.hideturtle()
	turtle.done() `
  }
	{
    id: "650",
    title: "Avengers Logo",
    tags: ["650", "python"],
    code: ` { <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pure CSS 3D Tunnel</title>

  <style>
    body {
      margin: 0;
      background: #000;
      overflow: hidden;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: monospace;
    }

    .vhs-wrapper {
      position: relative;
      width: 100vw;
      height: 100vh;
      background: #000;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      filter: contrast(1.2) brightness(1.1);
    }

    .vhs-wrapper::before {
      content: "";
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.02),
        rgba(255, 255, 255, 0.02) 1px,
        transparent 1px,
        transparent 2px
      );
      z-index: 2;
      pointer-events: none;
      animation: flicker 0.15s infinite;
    }

    .space-tunnel {
      position: relative;
      width: 200px;
      height: 200px;
      transform-style: preserve-3d;
      perspective: 800px;
      transform: translateZ(0);
    }

    .cube-frame {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid rgba(128, 255, 255, 0.6);
      box-shadow:
        0 0 20px rgba(0, 255, 255, 0.3),
        0 0 60px rgba(0, 128, 255, 0.2);
      animation: fly 3s linear infinite;
      mix-blend-mode: screen;
      filter: drop-shadow(2px 0 red) drop-shadow(-2px 0 blue);
    }

    .cube-frame:nth-child(1) { animation-delay: 0s; }
    .cube-frame:nth-child(2) { animation-delay: 0.4s; }
    .cube-frame:nth-child(3) { animation-delay: 0.8s; }
    .cube-frame:nth-child(4) { animation-delay: 1.2s; }
    .cube-frame:nth-child(5) { animation-delay: 1.6s; }
    .cube-frame:nth-child(6) { animation-delay: 2s; }
    .cube-frame:nth-child(7) { animation-delay: 2.4s; }

    @keyframes fly {
      0% {
        transform: translateZ(600px) scale(0.1) rotate(0deg);
        opacity: 0;
      }
      25% {
        opacity: 1;
      }
      100% {
        transform: translateZ(-800px) scale(2.5) rotate(360deg);
        opacity: 0;
      }
    }

    @keyframes flicker {
      0%, 100% { opacity: 0.1; }
      50% { opacity: 0.2; }
    }
  </style>
</head>

<body>
  <div class="vhs-wrapper">
    <div class="space-tunnel">
      <div class="cube-frame"></div>
      <div class="cube-frame"></div>
      <div class="cube-frame"></div>
      <div class="cube-frame"></div>
      <div class="cube-frame"></div>
      <div class="cube-frame"></div>
      <div class="cube-frame"></div>
    </div>
  </div>
</body>
</html>` }

  {
    id: "999",
    title: "Hanuman Drawing",
    tags: ["999", "turtle graphics", "python"],
    code: `from turtle import Turtle,Screen
import turtle
k=Turtle()
k.speed(0)
k.color("#FF8C00")
s=Screen()
s.bgcolor("black")
k.penup()
k.goto(-300,450)
k.begin_fill()
k.pendown()
k.left(70)
k.circle(-52,45)
k.circle(-100,45)
k.circle(-200,45)
k.fd(40)
k.circle(-10,45)
k.fd(40)
k.circle(7,180)
k.fd(40)
k.right(128)
k.circle(-200,30)
k.fd(40)
k.right(120)
k.fd(25)
k.left(132)
k.circle(-80,30)
k.fd(20)
k.circle(80,30)
k.left(20)
k.circle(-80,45)
k.fd(10)
k.circle(-15,90)
k.fd(30)
k.circle(5,150)
k.fd(10)
k.circle(-2,170)
k.fd(140)
k.left(170)
k.circle(-150,70)
k.right(100)
k.circle(190,40)
k.circle(-20,98)
k.fd(80)
k.circle(-25,70)
k.fd(25)
k.circle(5,110)
k.circle(55,30)
k.right(70)
k.fd(7)
k.right(15)
k.back(10)
k.right(120)
k.fd(20)
k.right(120)
k.fd(30)
k.circle(-2,40)
k.fd(30)
k.right(120)
k.fd(20)
k.left(53)
k.fd(60)
k.circle(-25,80)
k.left(120)
k.fd(20)
k.circle(-5,170)
k.left(180)
k.circle(-100,25)
k.left(120)
k.fd(10)
k.right(120)
k.fd(40)
k.right(80)
k.fd(20)
k.circle(2,160)
k.circle(80,20)
k.right(110)
k.fd(10)
k.circle(-2,70)
k.fd(30)
k.left(58)
k.fd(110)
k.circle(-50,55)
k.left(160)
k.fd(20)
k.right(110)
k.circle(-42,45)
k.circle(-15,90)
k.circle(-15,50)
k.fd(10)
k.circle(4,184)
k.end_fill()

k.penup()
k.goto(-350,195)
k.pendown()
k.begin_fill()
k.left(5)
k.circle(30,40)
k.left(15)
k.circle(-100,40)
k.circle(4,185)
k.fd(45)
k.circle(60,45)

k.circle(5,90)
k.end_fill()

k.penup()
k.goto(-390,205)
k.pendown()
k.begin_fill()
k.left(55)
k.circle(30,45)
k.circle(5,120)
k.fd(10)
k.right(120)
k.circle(-20,90)
k.circle(1,90)
k.circle(10,60)
k.left(50)
k.circle(30,40)
k.circle(40,45)
k.left(5)
k.fd(3)
k.circle(10,120)
k.end_fill()

k.penup()
k.goto(-450,-60)
k.pendown()
k.begin_fill()
k.right(104)
k.circle(-65,40)
k.circle(100,40)
k.circle(20,73)
k.fd(60)
k.right(5)
k.fd(25)
k.left(20)
k.circle(30,45)
k.circle(40,70)
k.circle(100,35)
k.fd(10)
k.circle(20,100)
k.circle(-30,60)
k.left(234)
k.fd(60)
k.left(45)
k.circle(100,20)
k.end_fill()

#tika
k.color("black")
k.penup()
k.goto(-280,165)
k.goto(-310,420)
k.pendown()
k.begin_fill()
k.left(28)
k.fd(60)
k.left(5)
k.fd(50)
k.circle(2,180)
k.right(5)
k.fd(50)
k.left(8)
k.fd(60)
k.end_fill()

#leftrighttika
k.penup()
k.goto(-310,250)
k.pendown()
k.begin_fill()
k.left(45)
k.circle(-55,60)
k.left(10)
k.fd(110)
k.left(178)
k.fd(130)
k.circle(55,60)
k.left(62)
k.circle(45,60)
k.fd(140)
k.left(178)
k.fd(130)
k.circle(-50,45)
k.end_fill()



k.penup()
k.goto(-265,420)
k.pendown()
k.begin_fill()
k.left(27)
k.circle(200,30)
k.circle(-200,24)
k.circle(-3,180)
k.fd(3)
k.back(40)
k.right(120)
k.fd(10)
k.circle(-5,150)
k.left(20)

k.circle(7,90)

k.fd(15)
k.right(210)
k.fd(10)
k.circle(-5,85)
k.fd(50)
k.circle(80,30)
k.left(170)
k.circle(-80,30)
k.fd(20)
k.right(160)
k.fd(70)
k.right(184)
k.fd(70)
k.right(160)
k.circle(-150,30)
k.left(133)
k.fd(20)
k.circle(-90,30)
k.right(90)
k.fd(10)
k.left(185)
k.circle(150,30)

k.fd(20)
k.circle(-1,170)
k.right(10)
k.fd(120)
k.left(165)
k.fd(30)
k.circle(-10,45)
k.left(5)
k.circle(25,60)
k.circle(-2,180)
k.fd(5)
k.left(15)
k.circle(-30,60)
k.circle(30,70)
k.left(160)
k.circle(-30,90)
k.left(90)
k.fd(45)
k.right(90)
k.circle(-30,60)
k.left(160)
k.circle(30,70)
k.right(70)
k.fd(13)
k.right(130)
k.fd(120)
k.circle(-143,24)
k.end_fill()


#facecorrection(not created proper so..)
k.color("black")
k.penup()
k.goto(-300,450)
k.right(70)
k.begin_fill()
k.pendown()
k.left(70)
k.circle(-52,45)
k.right(20)
k.circle(-100,45)
k.circle(-100,45)
k.fd(40)
k.left(20)
k.circle(-10,45)
k.fd(20)
k.circle(5,180)
k.fd(20)
k.right(128)
k.circle(-150,30)
k.fd(40)
k.right(120)
k.fd(25)
k.left(132)
k.circle(-80,30)
k.fd(20)
k.circle(80,30)
k.left(20)
k.circle(-80,45)
k.circle(-15,90)
k.right(10)
k.fd(30)
k.circle(5,150)
k.fd(10)
k.left(10)
k.circle(-2,170)
k.fd(70)
k.left(174)
k.circle(-150,70)
k.fd(20)
k.left(90)
k.fd(200)
k.left(90)
k.fd(500)
k.left(45)
k.fd(300)
k.left(45)
k.fd(150)
k.left(68)
k.fd(230)
k.end_fill()

k.color("#FF8C00")
k.penup()
k.goto(-270,187)
k.pendown()
k.begin_fill()
k.right(168)
k.circle(-20,90)
k.left(65)
k.fd(20)
k.right(130)
k.circle(10,90)
k.left(90)
k.circle(-10,45)
k.circle(5,45)
k.left(85)
k.circle(-7,250)

k.fd(3)
k.circle(-17,90)
k.right(8)
k.fd(25)
k.left(170)
k.fd(23)
k.circle(17,90)
k.left(3)
k.fd(20)
k.circle(-2,90)
k.fd(10)
k.right(90)
k.fd(20)
k.circle(-27,90)
k.right(4)
k.fd(60)
k.end_fill()

#ear

k.color("#FF8C00")
k.penup()
k.goto(-120,100) 
k.pendown()
k.begin_fill()
k.right(80)
k.fd(25) 
k.right(5)
k.fd(25)
k.right(100) 
k.fd(5)
k.circle(5,120)
k.fd(15)
k.circle(-40,45)
k.circle(-50,70)
k.right(10)
k.circle(-30,45) 
k.circle(-70,50)
k.right(35)
k.fd(30)
k.left(17)
k.fd(60)
k.left(90) 
k.circle(-10,300)
k.left(70)
k.fd(15)
k.left(133)
k.fd(7)
k.end_fill()
k.penup()
k.color("black")

k.goto(-115,130)

k.pendown()

k.begin_fill()
k.right(190) 
k.circle(40,40)
k.circle(20,70)
k.right(60)
k.circle(-47,45) 
k.circle(-27,90)
k.circle(-5,45)
k.fd(40)
k.circle(-7,50)
k.fd(30)
k.right(163)
k.circle(-90,20)
k.circle(2,60)
k.fd(25)
k.c`
];

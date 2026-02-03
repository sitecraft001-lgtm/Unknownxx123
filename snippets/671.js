export default {
  id: "671",
  title: "Cool Turtle",
  tags: ["671", "python", "Turtle Graphics"],
  code: `from turtle import *
import colorsys

speed(0)
pensize(2)
bgcolor("black")
h = 0.0

for i in range(100):
    r, g, b = colorsys.hsv_to_rgb(h, 1, 1)
    color(r, g, b)
    h += 0.01  

    for j in range(4):
        fd(i)
        rt(20)
        rt(60)

    rt(120)

done()`
};

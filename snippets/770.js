SNIPPETS["770"] = {
  id: "770",
  title: "Cool Turtle",
  code: `
from turtle import *
import colorsys
import math

speed(0)
pensize(2)
bgcolor("black")
hideturtle()

h = 0.0

for i in range(160):
    r, g, b = colorsys.hsv_to_rgb(h, 1, abs(math.sin(i * 0.05)))
    color(r, g, b)

    h += 0.07

    for j in range(6):
        fd(i)
        rt(30)
        fd(i // 2)
        rt(60)
    rt(137)  

done()
`,
  tags: ["python","turtle"],
  video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Optional
};

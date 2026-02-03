SNIPPETS.push({
  id: "777",
  title: "Turtle Star",
  code: `
from turtle import *
from colorsys import *

tracer(20)
bgcolor("black")
h = 0
pensize(2)
speed(0)

for i in range(6):
    h += 0.009
    color(h,1,1)
    forward(200)
    left(144)
`,
  tags: ["python", "turtle", "graphics"]
});

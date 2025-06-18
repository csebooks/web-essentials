---
title: Grid
weight: 1
---

> **CSS Grid** is a powerful two-dimensional layout system that allows you to create complex grid-based designs. It enables you to define rows and columns, and place items within those grids.

Key Properties:
- `display: grid;`: Defines a grid container.
- `grid-template-columns`: Specifies the number and size of columns.
- `grid-template-rows`: Specifies the number and size of rows.
- `grid-gap`: Defines the spacing between grid items.

Example (CSS Grid):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid Layout</title>
    <style>
        .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;
            height: 100vh;
        }
        .box {
            background-color: coral;
            color: white;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
        <div class="box">Box 4</div>
        <div class="box">Box 5</div>
        <div class="box">Box 6</div>
    </div>
</body>
</html>
```
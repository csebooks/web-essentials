---
title: Flex
weight: 2
---

> **Flexbox** is a modern layout technique in CSS that allows you to create flexible and responsive layouts with ease. It enables the distribution of space within a container and aligns items along the main axis or cross axis.

#### Key Properties:
- `display: flex;`: Defines a flex container.
- `flex-direction`: Specifies the direction of the flex items (`row`, `column`).
- `justify-content`: Aligns items horizontally (main axis).
- `align-items`: Aligns items vertically (cross axis).
- `flex-wrap`: Allows wrapping of items when they exceed the container's width.

#### Example (Flexbox):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Layout</title>
    <style>
        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
            background-color: lightgray;
        }
        .box {
            width: 100px;
            height: 100px;
            background-color: steelblue;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
    </div>
</body>
</html>
```


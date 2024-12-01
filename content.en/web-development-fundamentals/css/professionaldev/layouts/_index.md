---
title: Layouts
weight: 4
---

> In CSS, **layout** refers to the way content is arranged and displayed on a web page. CSS provides various layout techniques to control the positioning, alignment, and distribution of elements within a container. These layouts help create responsive, visually appealing designs that adapt to different screen sizes.

In the default flow, elements are displayed in their natural flow:
- **Block-level elements** (e.g., `<div>`, `<p>`, `<h1>`) take up the full width of their parent container and push subsequent elements to the next line.
- **Inline elements** (e.g., `<span>`, `<a>`) only take up as much space as needed and do not start on a new line.

#### Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Normal Flow Layout</title>
    <style>
        p {
            background-color: lightblue;
            padding: 10px;
        }
        span {
            background-color: lightgreen;
            padding: 5px;
        }
    </style>
</head>
<body>
    <p>This is a block-level element.</p>
    <span>This is an inline element.</span>
    <p>Another block-level element.</p>
</body>
</html>
```
Modern apps uses more flexible layout plans that wll be discussed in the next chapter.

### **4. Positioning in CSS**

CSS positioning properties allow you to control the position of elements within their parent containers.

#### Key Properties:
- `position`: Defines the positioning method (`static`, `relative`, `absolute`, `fixed`, `sticky`).
- `top`, `right`, `bottom`, `left`: Adjust the position based on the parent container.

#### Example (Positioning):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Positioning Layout</title>
    <style>
        .container {
            position: relative;
            width: 300px;
            height: 300px;
            background-color: lightgray;
        }
        .box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: coral;
            width: 100px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Centered Box</div>
    </div>
</body>
</html>
```

---

### **5. Float and Clear Layout**

Float-based layouts were historically used to create multi-column designs before Flexbox and Grid. The `float` property is used to float elements to the left or right of their container, and `clear` is used to control how the next element behaves after a floated element.

#### Example (Float Layout):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Float Layout</title>
    <style>
        .container {
            width: 100%;
        }
        .box {
            float: left;
            width: 30%;
            margin-right: 5%;
            background-color: coral;
            text-align: center;
            color: white;
            padding: 20px;
        }
        .box:last-child {
            margin-right: 0;
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

---

### **Conclusion**
Layouts in CSS provide a wide range of tools to control the positioning and arrangement of elements on a page. From simple block-level flow to powerful layout systems like Flexbox and Grid, CSS gives you the flexibility to create complex, responsive, and modern designs.

Let me know if you'd like to dive deeper into any of these layout techniques or see more examples!
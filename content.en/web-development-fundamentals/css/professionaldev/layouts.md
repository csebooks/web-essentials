---
title: Layouts
weight: 3
---



> In CSS, **layout** refers to the way content is arranged and displayed on a web page. CSS provides various layout techniques to control the positioning, alignment, and distribution of elements within a container. These layouts help create responsive, visually appealing designs that adapt to different screen sizes.

# Common Layout Techniques

 **Normal Flow (Block and Inline Elements)**
 **Flexbox**
 **CSS Grid**
 **Positioning (Static, Relative, Absolute, Fixed, Sticky)**
 **Float and Clear**

---

### **1. Normal Flow (Block and Inline Elements)**

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

---

### **2. Flexbox Layout**

**Flexbox** is a modern layout technique in CSS that allows you to create flexible and responsive layouts with ease. It enables the distribution of space within a container and aligns items along the main axis or cross axis.

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

---

### **3. CSS Grid Layout**

**CSS Grid** is a powerful two-dimensional layout system that allows you to create complex grid-based designs. It enables you to define rows and columns, and place items within those grids.

#### Key Properties:
- `display: grid;`: Defines a grid container.
- `grid-template-columns`: Specifies the number and size of columns.
- `grid-template-rows`: Specifies the number and size of rows.
- `grid-gap`: Defines the spacing between grid items.

#### Example (CSS Grid):

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

---

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
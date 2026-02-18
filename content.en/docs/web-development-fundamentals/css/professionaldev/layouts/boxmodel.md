---
title: Box Model  
weight: 1
---


> The **Box Model** is the foundation of layout design in CSS. It describes how every HTML element is represented as a rectangular box consisting of the following components:  

1. **Content**: The actual content of the element (e.g., text, images).  
2. **Padding**: The space between the content and the border.  
3. **Border**: A boundary around the padding (or content if no padding is set).  
4. **Margin**: The space outside the border that separates the element from others.

---

### **Box Model Structure**  

The structure can be visualized as:  
```plaintext
| Margin       |
|--------------|
| Border       |
|--------------|
| Padding      |
|--------------|
| Content      |
```

### **Key Properties**
1. **Content**: Controlled by properties like `width` and `height`.  
2. **Padding**: Adjusted with `padding`, `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.  
3. **Border**: Styled using `border`, `border-width`, `border-style`, and `border-color`.  
4. **Margin**: Modified with `margin`, `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

---

### **Example: Box Model in Action**

#### **HTML File**  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box Model Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="box">
        Box Model Example
    </div>
</body>
</html>
```

#### **CSS File**  
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f4f4f4;
}

.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 5px solid #4CAF50;
    margin: 20px;
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 1.5;
}
```

---

### **Explanation of the Example**
1. **Content**:  
   - The content area of the box is `200px` wide and `100px` tall (`width` and `height`).

2. **Padding**:  
   - Adds `20px` of space inside the box between the content and the border.

3. **Border**:  
   - A `5px` green border surrounds the padding.

4. **Margin**:  
   - `20px` of space is added outside the border, separating the box from other elements.

---

### **Visualization**  
- **Width and Height**: Define the size of the content.  
- **Total Width**: Content width + padding + border + margin.  
  In this example:  
  ```
  Total Width = 200px (content) + 40px (padding, 20px * 2) + 10px (border, 5px * 2) + 40px (margin, 20px * 2) = 290px
  ```
  
---

### **Key Concepts**
- The box model determines how elements are sized and spaced.
- The `box-sizing` property can change how the total size is calculated:
  - **`content-box`**: Default behavior (does not include padding and border in width/height).  
  - **`border-box`**: Includes padding and border in width/height.  

Let me know if you'd like to explore advanced box model techniques!
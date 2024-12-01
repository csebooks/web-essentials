---
title: Media Query  
weight: 4
---



> **Media queries** are a feature of CSS that allow you to apply styles based on the characteristics of the user's device, such as its screen size, resolution, orientation, or even color scheme. They are essential for creating **responsive web designs**, which adapt to different screen sizes and devices.

---

### **How Media Queries Work**

Media queries use the `@media` rule to define conditional styles. Styles within a media query block are only applied if the specified conditions are met.

---

### **Syntax**
```css
@media (condition) {
    /* CSS rules here */
}
```

#### **Common Conditions**
1. `max-width`: Applies styles if the device width is less than or equal to the specified value.
2. `min-width`: Applies styles if the device width is greater than or equal to the specified value.
3. `orientation`: Targets the screen orientation (`portrait` or `landscape`).
4. `prefers-color-scheme`: Detects if the user prefers a light or dark theme.

---

### **Example: Responsive Design with Media Queries**

#### **HTML File (`index.html`)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Query Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Responsive Design</h1>
    </header>
    <main>
        <p>Resize the browser window to see the layout change!</p>
    </main>
</body>
</html>
```

#### **CSS File (`styles.css`)**
```css
/* Default styles (applied to all screen sizes) */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: lightgray;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 20px;
}

main {
    padding: 20px;
}

/* Styles for small screens (mobile devices) */
@media (max-width: 600px) {
    header {
        background-color: #007BFF;
    }

    main {
        background-color: white;
        color: black;
    }
}

/* Styles for medium screens (tablets) */
@media (min-width: 601px) and (max-width: 1024px) {
    header {
        background-color: #FF5722;
    }

    main {
        background-color: #f4f4f4;
        color: #333;
    }
}

/* Styles for large screens (desktops) */
@media (min-width: 1025px) {
    header {
        background-color: #4CAF50;
    }

    main {
        background-color: lightblue;
        color: navy;
    }
}
```

---

### **Explanation**

1. **Default Styles**: These are applied to all screen sizes unless overridden by a media query.
2. **Mobile Devices (`max-width: 600px`)**:  
   - Applies styles when the screen width is 600px or less.  
   - Changes the `header` color to blue.  
3. **Tablets (`min-width: 601px` and `max-width: 1024px`)**:  
   - Styles apply for screen widths between 601px and 1024px.  
   - Changes the `header` color to orange.  
4. **Desktops (`min-width: 1025px`)**:  
   - Styles apply for screens wider than 1025px.  
   - Keeps the `header` color green and the `main` background light blue.

---

---
title: Typography
weight: 3
---

> **Typography** is a key aspect of web design that focuses on the style, appearance, and arrangement of text. In CSS, typography can be controlled through various properties such as font family, size, weight, line height, and more.

---

### **Key Typography Properties in CSS**

1. **`font-family`**  
   Specifies the font type to be used. You can use web-safe fonts or custom fonts.

   ```css
   p {
       font-family: Arial, sans-serif;
   }
   ```

2. **`font-size`**  
   Controls the size of the text. You can use units like `px`, `em`, `rem`, `%`, and `vw`.

   ```css
   h1 {
       font-size: 36px;
   }

   p {
       font-size: 1rem; /* 1 rem is relative to the root font-size */
   }
   ```

3. **`font-weight`**  
   Defines the thickness of the font. Common values are `normal`, `bold`, and numeric values (100 to 900).

   ```css
   h2 {
       font-weight: bold;
   }

   p {
       font-weight: 400; /* Normal weight */
   }
   ```

4. **`font-style`**  
   Specifies whether the text is italicized, normal, or oblique.

   ```css
   em {
       font-style: italic;
   }
   ```

5. **`line-height`**  
   Sets the amount of space between lines of text. It's important for readability.

   ```css
   p {
       line-height: 1.5;
   }
   ```

6. **`letter-spacing`**  
   Adjusts the spacing between characters.

   ```css
   h1 {
       letter-spacing: 2px;
   }
   ```

7. **`word-spacing`**  
   Adjusts the space between words.

   ```css
   p {
       word-spacing: 5px;
   }
   ```

8. **`text-align`**  
   Controls the alignment of text within its container (`left`, `right`, `center`, `justify`).

   ```css
   h1 {
       text-align: center;
   }

   p {
       text-align: justify;
   }
   ```

9. **`text-transform`**  
   Controls the capitalization of text (`uppercase`, `lowercase`, `capitalize`, `none`).

   ```css
   h2 {
       text-transform: uppercase;
   }
   ```

10. **`text-decoration`**  
   Adds decoration to text such as `underline`, `line-through`, `overline`, or `none`.

    ```css
    a {
        text-decoration: underline;
    }
    ```

11. **`text-indent`**  
    Indents the first line of text in a block element.

    ```css
    p {
        text-indent: 30px;
    }
    ```

---

### **Font Sizing Units**
- **`px`**: Fixed pixel size.
- **`em`**: Relative to the font size of the parent element.
- **`rem`**: Relative to the root element (`html`), offering better consistency for responsive design.
- **`%`**: Relative to the parent element.
- **`vw` and `vh`**: Relative to the viewport width (`vw`) or height (`vh`), used for responsive typography.

---

### **Web Fonts and Custom Fonts**

You can use **custom fonts** in your website by linking to external font libraries like Google Fonts or by using `@font-face` to define your own fonts.

#### **Using Google Fonts**
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

```css
body {
    font-family: 'Roboto', sans-serif;
}
```

#### **Using `@font-face`**
```css
@font-face {
    font-family: 'MyCustomFont';
    src: url('fonts/mycustomfont.woff2') format('woff2');
}

body {
    font-family: 'MyCustomFont', sans-serif;
}
```

---

### **Example: Typography Styles in a Web Page**

#### **HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typography Example</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Typography in CSS</h1>
    </header>
    <main>
        <p>This is an example of how to use typography properties in CSS to style text on a web page.</p>
    </main>
</body>
</html>
```

#### **CSS (styles.css)**
```css
body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
}

header {
    text-align: center;
    padding: 20px;
    background-color: #007BFF;
    color: white;
}

h1 {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 2px;
}

p {
    font-size: 18px;
    font-weight: 400;
    margin: 20px;
    padding: 10px;
}
```

---

### **Conclusion**
Typography is a critical part of web design, as it affects readability, user experience, and overall design aesthetics. With CSS, you can control almost every aspect of typography, from fonts to spacing, alignment, and decoration.

Let me know if you'd like more advanced typography techniques or other related topics!
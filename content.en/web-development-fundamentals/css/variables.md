---
title: CSS Variables  
weight: 2
---

 
 
 > **variables**, also called **custom properties**, allow you to store reusable values in a CSS file. They act like placeholders for values (e.g., colors, fonts, sizes) that you can reference throughout your stylesheet.  

**Key Features:**  
- Begin with a double hyphen (`--`), e.g., `--main-color`.  
- Can be defined globally (in the `:root` selector) or locally within specific selectors.  
- Accessed using the `var()` function.  

---

# Advantages of CSS Variables**
1. **Reusability**: Define a value once and reuse it across the stylesheet.  
2. **Maintainability**: Update the variable to instantly reflect changes wherever it is used.  
3. **Dynamic Updates**: CSS variables can be manipulated via JavaScript to create dynamic themes.  

---

### **Example: CSS Variables in Action**

#### **HTML File (`index.html`)**  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Variables Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <main>
        <p>This is an example of using CSS variables to style a web page.</p>
        <button>Click Me</button>
    </main>
</body>
</html>
```

#### **CSS File (`styles.css`)**  
```css
/* Global variables defined in :root */
:root {
    --primary-color: #4CAF50;
    --secondary-color: white;
    --text-color: #333;
    --font-size: 16px;
    --button-radius: 8px;
}

/* Apply variables */
body {
    font-family: Arial, sans-serif;
    font-size: var(--font-size);
    background-color: var(--secondary-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;
}

header {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    text-align: center;
    padding: 1em;
}

button {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border: none;
    padding: 10px 20px;
    border-radius: var(--button-radius);
    cursor: pointer;
    font-size: var(--font-size);
}

button:hover {
    background-color: darkgreen;
}
```

---

### **Explanation of the Example**  

1. **Defining Variables**:  
   - Global variables like `--primary-color` and `--font-size` are defined in the `:root` selector, making them available throughout the stylesheet.  

2. **Using Variables**:  
   - The `var()` function is used to insert variable values into CSS properties. For example:  
     ```css
     color: var(--primary-color);
     ```

3. **Result**:  
   - The `button` and `header` share the same `--primary-color`, ensuring consistency. Any changes to `--primary-color` automatically apply to both.  

---

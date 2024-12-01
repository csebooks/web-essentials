---
title: Themes
weight: 1
---

> In web design, **themes** refer to a set of styles that define the appearance and look of a website. A theme typically includes colors, fonts, layout styles, and other design elements that can be applied across a website to ensure consistency. In CSS, you can create themes by using **CSS variables** (custom properties) to define color schemes, fonts, and other design properties, making it easy to switch between different visual styles (e.g., light mode and dark mode).

### **Why Use Themes in CSS?**
- **Consistency**: Themes ensure a consistent design across all pages of a website.
- **Ease of Maintenance**: You can update the theme in one place (via CSS variables) and automatically reflect the changes across the entire site.
- **User Preferences**: Themes can be toggled based on user preferences, such as switching between light mode and dark mode.

---

### **How to Create a Theme in CSS**

The key to creating themes in CSS is to use **CSS variables** for colors, fonts, and other design properties, making it easy to swap them out for different themes.

---

### **Example: Implementing Light and Dark Themes**

Let's create a simple example where we switch between **light mode** and **dark mode** using CSS variables.

#### **HTML File (`index.html`)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Themes Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <button id="theme-toggle">Toggle Dark/Light Mode</button>
    </header>
    <main>
        <p>This is an example of how to implement themes in CSS.</p>
    </main>

    <script src="script.js"></script>
</body>
</html>
```

#### **CSS File (`styles.css`)**

In this CSS file, we define the two themes (light and dark) using CSS variables:

```css
/* Default to Light Theme */
:root {
    --background-color: #ffffff;
    --text-color: #000000;
    --header-bg: #4CAF50;
    --header-text-color: #ffffff;
}

/* Dark Theme */
[data-theme="dark"] {
    --background-color: #333333;
    --text-color: #ffffff;
    --header-bg: #212121;
    --header-text-color: #ffffff;
}

/* Apply the theme to the body */
body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: var(--header-bg);
    color: var(--header-text-color);
    padding: 20px;
    text-align: center;
}

button {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

### **How It Works**
1. **CSS Variables**: The `:root` selector defines the default values for light mode (light theme). We use custom properties like `--background-color`, `--text-color`, etc., to manage the theme's colors.
2. **Switching Themes**: The `[data-theme="dark"]` selector is used to apply a different set of CSS variables when the page's `data-theme` attribute is set to `"dark"`.


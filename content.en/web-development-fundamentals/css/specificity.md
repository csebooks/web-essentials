---
title: Specificity  
weight: 3
---



> **Specificity** determines which CSS rule is applied when multiple rules target the same element. It’s essentially a scoring system that calculates the priority of CSS selectors. The higher the specificity, the more likely a rule will be applied.

---

### **Specificity Hierarchy**
1. **Inline Styles**: Styles written directly on the HTML element using the `style` attribute.  
   - Highest priority.
   - Example: `<p style="color: red;">`.

2. **IDs**: Selectors targeting elements by their `id`.  
   - Example: `#example`.

3. **Classes, Attributes, and Pseudo-classes**:  
   - Example: `.class`, `[attribute=value]`, `:hover`.

4. **Element and Pseudo-elements**:  
   - Example: `div`, `p`, `::before`.

5. **Universal Selector (`*`)**, Inherited Styles, and Default Browser Styles:  
   - Lowest priority.

---

### **How Specificity is Calculated?**

Specificity is represented as a four-part value: `(a, b, c, d)`  
- `a`: Inline styles (`style="..."`) → 1 if present; otherwise, 0.  
- `b`: Number of ID selectors.  
- `c`: Number of class selectors, attributes, and pseudo-classes.  
- `d`: Number of element and pseudo-element selectors.  

**Example Calculation**:  
```css
/* Specificity values: */
div p { color: blue; }            /* (0, 0, 0, 2) */
p.class { color: green; }         /* (0, 0, 1, 1) */
#id { color: red; }               /* (0, 1, 0, 0) */
```
The rule with the highest specificity wins.

---

### **Example**

#### **HTML File**  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Specificity Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="example" class="highlight">
        <p>This is a paragraph.</p>
    </div>
</body>
</html>
```

#### **CSS File**  
```css
/* General element selector */
div p {
    color: blue; /* Specificity: (0, 0, 0, 2) */
}

/* Class selector */
.highlight p {
    color: green; /* Specificity: (0, 0, 1, 1) */
}

/* ID selector */
#example p {
    color: red; /* Specificity: (0, 1, 0, 1) */
}
```

---

### **Outcome**
- The `<p>` element inside `<div id="example" class="highlight">` will have **red text** because the ID selector `#example p` has the highest specificity.  

---

### **Key Points**
1. **Specificity Conflicts**: When two rules have the same specificity, the one that appears **last** in the CSS file is applied.
2. **Avoid Overuse of !important**: Adding `!important` to a rule overrides specificity but can lead to hard-to-maintain code.
3. **Best Practices**:
   - Write CSS with clear and minimal selectors.
   - Use IDs sparingly; prefer classes for reusability.

Let me know if you’d like a more detailed breakdown or further examples!
---
title: Basics  
weight: 1
---

> A **CSS rule** is a set of instructions used to define the style of elements on a web page. It consists of two main parts:

1. **Selector**: Identifies the HTML elements to which the styles will be applied.
2. **Declaration Block**: Contains one or more style declarations, each defining a specific property and its value.


```css
selector {
    property: value;
    property: value;
}
```

- **Selector**: Specifies which HTML element(s) the rule applies to (e.g., `p`, `h1`, `.class`, `#id`).
- **Property**: A CSS attribute (e.g., `color`, `font-size`) that determines what aspect of the element will be styled.
- **Value**: Specifies the setting for the property (e.g., `red`, `16px`).


Lets create a new css file `src/css/styles.css` with below content

```css
p {
    color: blue;          /* Changes text color to blue */
    font-size: 16px;      /* Sets the font size to 16 pixels */
    margin: 10px;         /* Adds 10px margin around the paragraph */
}
```

- **Selector**: `p` (applies to all `<p>` elements).
- **Declarations**:
  - `color: blue;`
  - `font-size: 16px;`
  - `margin: 10px;`

---

Next, We need to link this css to our existing `src/index.html` by adding below html element above `</head>`

```html
  <link href="css/styles.css" rel="stylesheet"/>
```

# Types of Selectors in CSS**

- **Universal Selector (`*`)**: Targets all elements.
  ```css
  * {
      margin: 0;
      padding: 0;
  }
  ```

- **Type Selector**: Targets specific HTML elements.
  ```css
  h1 {
      font-weight: bold;
  }
  ```

- **Class Selector (`.classname`)**: Targets elements with a specific class.
  ```css
  .highlight {
      background-color: yellow;
  }
  ```

- **ID Selector (`#idname`)**: Targets a specific element by its ID.
  ```css
  #header {
      text-align: center;
  }
  ```

- **Group Selector**: Applies the same style to multiple selectors.
  ```css
  h1, h2, h3 {
      font-family: Arial, sans-serif;
  }
  ```

- **Descendant Selector**: Targets elements nested within other elements.
  ```css
  div p {
      color: gray;
  }
  ```

---

# **Comments in CSS Rules**
CSS rules can include comments to explain the code, making it easier to read and maintain. Comments are written between `/*` and `*/`.

```css
/* This styles the main heading */
h1 {
    color: navy;
    font-size: 24px;
}
```

# **Key Points About CSS Rules**
1. **Case Sensitivity**: Property names and values are case-insensitive (`COLOR` is the same as `color`), but custom identifiers like class names and IDs are case-sensitive.
2. **Semicolons**: Each declaration must end with a semicolon (`;`). The last declaration can omit it, but it’s a best practice to include it.
3. **Cascading**: CSS rules are applied in a cascading manner, meaning the order and specificity of rules affect which styles are applied.

By mastering CSS rules, you can control and customize the appearance of web pages effectively.
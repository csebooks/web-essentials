---
title: Text Elements
weight: 2
---

> HTML provides a range of elements specifically designed to structure, format, and emphasize text on web pages. These text elements allow developers to create meaningful and visually appealing content.

---


# Headings

Used to define headings in a hierarchical structure.
```html
<h1>This is a Heading 1</h1>
<h2>This is a Heading 2</h2>
<h3>This is a Heading 3</h3>
<h4>This is a Heading 4</h4>
<h5>This is a Heading 5</h5>
<h6>This is a Heading 6</h6>
```
- `<h1>` is the largest and most important heading.
- `<h6>` is the smallest and least important heading.

---

# Paragraphs
Defines a block of text.
```html
<p>This is a paragraph of text.</p>
```

---

# Inline Text Formatting
For applying styles or emphasizing specific parts of text.

- **Bold Text**
  ```html
  <b>This text is bold.</b>
  <strong>This text is strong emphasis.</strong>
  ```
  *`<strong>` has semantic meaning (important text).*

- **Italic Text**
  ```html
  <i>This text is italic.</i>
  <em>This text is emphasized.</em>
  ```
  *`<em>` is used for semantic emphasis.*

- **Underlined Text**
  ```html
  <u>This text is underlined.</u>
  ```

- **Small Text**
  ```html
  <small>This text is smaller.</small>
  ```

- **Deleted and Inserted Text**
  ```html
  <del>This text is deleted.</del>
  <ins>This text is inserted.</ins>
  ```

- **Superscript and Subscript**
  ```html
  x<sup>2</sup> is superscript. H<sub>2</sub>O is subscript.
  ```

---

# Blockquote
Defines a block of quoted text.
```html
<blockquote>
  This is a long quotation from another source.
</blockquote>
```

---

# Code and Preformatted Text
- **Inline Code**
  ```html
  <code>console.log('Hello, World!');</code>
  ```

- **Preformatted Text**
  ```html
  <pre>
    Line 1
    Line 2
  </pre>
  ```
  *Preserves whitespace and line breaks.*

---

# Lists
- **Ordered List**
  ```html
  <ol>
    <li>First item</li>
    <li>Second item</li>
  </ol>
  ```

- **Unordered List**
  ```html
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  ```

- **Description List**
  ```html
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
  </dl>
  ```

---

# Anchor (Link)
Defines a hyperlink.
```html
<a href="https://example.com">Visit Example</a>
```

# Horizontal Rule
Creates a horizontal line to separate content.
```html
<hr>
```


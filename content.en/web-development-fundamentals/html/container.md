---
title: Container
weight: 5
---

> In HTML, a **container** is a composite element that acts as a wrapper for grouping and organizing content on a web page. Containers are commonly used to structure the layout, style elements collectively, or apply specific behaviors to a group of elements.

---

**Common Container Elements:**
   - `<div>`: A block-level container with no inherent meaning, primarily used for styling and layout purposes.
   - `<span>`: An inline container for grouping text or small elements within a line.
   - Semantic Containers (e.g., `<header>`, `<section>`, `<article>`, `<footer>`) add meaning and structure to the document.

---


Lets start design a form with container types. Create file under `src` named `container.html`.

#  Containers Types

## `<div>`: The Most Common Container
- A generic block-level container for grouping content.
- Often styled using CSS or used as a layout grid.

**Example:**
```html
<div class="container">
  <h1>Welcome</h1>
  <p>This is a simple HTML container example.</p>
</div>
```

## `<span>`: Inline Container**
- A generic inline container for styling or grouping small portions of text.

**Example:**
```html
<p>This is a <span style="color: red;">highlighted</span> word.</p>
```

## Semantic Containers
Semantic containers give meaning to the content they hold, improving accessibility and SEO.

- **`<header>`**: For page or section headers.
- **`<nav>`**: For navigation links.
- **`<section>`**: For grouping related content.
- **`<article>`**: For self-contained content like blog posts.
- **`<footer>`**: For footer content.
- **`<aside>`**: For extra content that supports the main content.

**Example:**
```html
<section>
  <h2>About Us</h2>
  <p>We are a team of developers building amazing products.</p>
</section>
```

---

By using containers effectively, developers can create well-structured, maintainable, and visually appealing web pages.
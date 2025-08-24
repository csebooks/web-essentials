---
title: Grid
weight: 2
---

> **CSS Grid** is a two-dimensional layout system for the web. It lets you arrange content in rows and columns, making it easy to build complex, responsive, and accessible layouts.

## Key Concepts

- **Grid Container**: The parent element with `display: grid`.
- **Grid Items**: The direct children of the grid container.
- **Rows & Columns**: Defined using `grid-template-rows` and `grid-template-columns`.
- **Gap**: Space between rows and columns (`gap` or `grid-gap`).
- **Grid Areas**: Named sections for easier placement.

---

## Example

Let's build a modern, accessible college landing page step by step. Each step introduces new structure or features, with Emmet for HTML and matching CSS. create a file `events.html`

### Page Structure & Header

Start with the main structure and a visually appealing header.


```
body>header>h1{Starlight College}+p{Empowering Students, Inspiring Futures}
```


```css
body {
    font-family: 'Segoe UI', Arial, sans-serif;
    margin: 0;
    background: #f9f9f9;
    color: #222;
}
header {
    background: linear-gradient(90deg, #1976d2 60%, #42a5f5 100%);
    color: #fff;
    padding: 2rem 0 1.5rem 0;
    text-align: center;
    box-shadow: 0 2px 8px rgba(25, 118, 210, 0.1);
}
header h1 {
    margin: 0 0 0.5rem 0;
    font-size: 2.5rem;
    letter-spacing: 2px;
}
header p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 300;
}
```

---

### Navigation Bar

Add a navigation bar for easy access to sections.


```
nav>a[href="#about"]{About}+a[href="#events"]{Events}+a[href="#contact"]{Contact}
```

```css
nav {
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.04);
    padding: 0.5rem 0;
    text-align: center;
}
nav a {
    color: #1976d2;
    text-decoration: none;
    margin: 0 1.5rem;
    font-weight: 500;
    font-size: 1.1rem;
    transition: color 0.2s;
}
nav a:hover {
    color: #0d47a1;
}
```

### Hero Section

Add a hero section with a background image and overlay.


```
section.hero>div.hero-content>h2{Welcome to Starlight College}+p{Discover a world of opportunities...}
```


```css
.hero {
    background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
    color: #fff;
    padding: 4rem 2rem 5rem 2rem;
    text-align: center;
    position: relative;
}
.hero::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(25, 118, 210, 0.5);
    z-index: 0;
}
.hero-content {
    position: relative;
    z-index: 1;
}
.hero h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
}
.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}
```

---

### About Section

Add an about section with a card-like appearance.


```
section.about#about>h2{About Us}+p{Starlight College is a premier institution...}
```


```css
.about {
    max-width: 900px;
    margin: 2rem auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    padding: 2rem;
}
.about h2 {
    color: #1976d2;
    margin-top: 0;
}
```

---

### Events Grid

Add a grid of event cards.


```
section.events-section#events>h2{Upcoming Events}+div.events-grid>div.event-card*3>h3{Event Title $}+p{Event $ details}+button{Register}
```


```css
.events-section {
    max-width: 1100px;
    margin: 2rem auto;
    padding: 2rem 1rem;
}
.events-section h2 {
    color: #1976d2;
    margin-bottom: 1.5rem;
}
.events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
.event-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
}
.event-card h3 {
    margin-top: 0;
    color: #0d47a1;
}
.event-card p {
    flex: 1;
}
.event-card button {
    background: #1976d2;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
    transition: background 0.2s;
}
.event-card button:hover {
    background: #0d47a1;
}
```

---

### Modal Registration Form

Add a modal popup for event registration. 


```
section.modal#registerModal>div.modal-content>button.close-modal{×}+h3#modalEventTitle{Register for Event}+form#registerForm>input[name="name" placeholder="Your Name"]+input[type="email" name="email" placeholder="Your Email"]+input[name="roll" placeholder="Roll Number"]+textarea[name="message" placeholder="Why do you want to join? (optional)"]+button[type="submit"]{Submit Registration}+div#successMsg{Thank you for registering!}
```


```css
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0; top: 0; width: 100vw; height: 100vh;
    background: rgba(0,0,0,0.4);
    justify-content: center;
    align-items: center;
}
.modal.active {
    display: flex;
}
.modal-content {
    background: #fff;
    padding: 2rem 2.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 16px rgba(25, 118, 210, 0.15);
    min-width: 320px;
    max-width: 90vw;
    position: relative;
}
.modal-content h3 {
    margin-top: 0;
    color: #1976d2;
}
.close-modal {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #888;
    cursor: pointer;
}
.modal-content form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.modal-content input, .modal-content textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}
.modal-content button[type="submit"] {
    background: #1976d2;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 0.5rem;
    transition: background 0.2s;
}
.modal-content button[type="submit"]:hover {
    background: #0d47a1;
}
```

---

### Footer

Add a simple footer for contact and copyright.


```
footer#contact>p{Contact us: info@starlightcollege.edu | +1 234 567 8901}+p{© 2025 Starlight College. All rights reserved.}
```


```css
footer {
    background: #222;
    color: #fff;
    text-align: center;
    padding: 1.5rem 0 1rem 0;
    margin-top: 3rem;
}
```

---

### Responsive Tweaks

Make the layout mobile-friendly.


```css
@media (max-width: 700px) {
    .about, .events-section {
        padding: 1rem 0.5rem;
    }
    .modal-content {
        padding: 1rem;
    }
}
```
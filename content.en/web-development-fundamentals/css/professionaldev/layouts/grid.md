---
title: Grid
weight: 2
---

# CSS Grid Layout

> **CSS Grid** is a two-dimensional layout system for the web. It lets you arrange content in rows and columns, making it easy to build complex, responsive, and accessible layouts.

## Key Concepts

- **Grid Container**: The parent element with `display: grid`.
- **Grid Items**: The direct children of the grid container.
- **Rows & Columns**: Defined using `grid-template-rows` and `grid-template-columns`.
- **Gap**: Space between rows and columns (`gap` or `grid-gap`).
- **Grid Areas**: Named sections for easier placement.

---

## Example: College Events Landing Page (Step by Step)

Let's build a modern, accessible college landing page step by step. Each step introduces new structure or features, with Emmet for HTML and matching CSS.

---

### Step 1: Page Structure & Header

Start with the main structure and a visually appealing header.

**Emmet:**
```
body>header>h1{Starlight College}+p{Empowering Students, Inspiring Futures}
```

**CSS:**
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

### Step 2: Navigation Bar

Add a navigation bar for easy access to sections.

**Emmet:**
```
nav>a[href="#about"]{About}+a[href="#events"]{Events}+a[href="#contact"]{Contact}
```

**CSS:**
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

---

### Step 3: Hero Section

Add a hero section with a background image and overlay.

**Emmet:**
```
section.hero>div.hero-content>h2{Welcome to Starlight College}+p{Discover a world of opportunities...}
```

**CSS:**
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

### Step 4: About Section

Add an about section with a card-like appearance.

**Emmet:**
```
section.about#about>h2{About Us}+p{Starlight College is a premier institution...}
```

**CSS:**
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

### Step 5: Events Grid

Add a grid of event cards.

**Emmet:**
```
section.events-section#events>h2{Upcoming Events}+div.events-grid>div.event-card*3>h3{Event Title $}+p{Event $ details}+button{Register}
```

**CSS:**
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

### Step 6: Modal Registration Form (Optional Advanced)

Add a modal popup for event registration. (JS not shown here, see full sample for logic.)

**Emmet:**
```
section.modal#registerModal>div.modal-content>button.close-modal{×}+h3#modalEventTitle{Register for Event}+form#registerForm>input[name="name" placeholder="Your Name"]+input[type="email" name="email" placeholder="Your Email"]+input[name="roll" placeholder="Roll Number"]+textarea[name="message" placeholder="Why do you want to join? (optional)"]+button[type="submit"]{Submit Registration}+div#successMsg{Thank you for registering!}
```

**CSS:**
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

### Step 7: Footer

Add a simple footer for contact and copyright.

**Emmet:**
```
footer#contact>p{Contact us: info@starlightcollege.edu | +1 234 567 8901}+p{© 2025 Starlight College. All rights reserved.}
```

**CSS:**
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

### Step 8: Responsive Tweaks

Make the layout mobile-friendly.

**CSS:**
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

---


---

## Full HTML Reference (Body Content)

Below is the complete HTML content that would go inside the `<body>` tag for the final landing page:

```html
<header>
    <h1>Starlight College</h1>
    <p>Empowering Students, Inspiring Futures</p>
</header>
<nav>
    <a href="#about">About</a>
    <a href="#events">Events</a>
    <a href="#contact">Contact</a>
</nav>
<section class="hero">
    <div class="hero-content">
        <h2>Welcome to Starlight College</h2>
        <p>Discover a world of opportunities, vibrant campus life, and a community that supports your dreams. Join us for our upcoming events and be a part of something extraordinary!</p>
    </div>
</section>
<section class="about" id="about">
    <h2>About Us</h2>
    <p>Starlight College is a premier institution dedicated to academic excellence, innovation, and holistic development. Our diverse programs, world-class faculty, and state-of-the-art facilities provide students with the tools they need to succeed in a rapidly changing world. We believe in nurturing talent, fostering creativity, and building leaders for tomorrow.</p>
</section>
<section class="events-section" id="events">
    <h2>Upcoming Events</h2>
    <div class="events-grid">
        <div class="event-card">
            <h3>Tech Symposium 2025</h3>
            <p>Join us for a day of tech talks, workshops, and networking with industry leaders. Open to all students and faculty.</p>
            <button onclick="openModal('Tech Symposium 2025')">Register</button>
        </div>
        <div class="event-card">
            <h3>Art & Culture Fest</h3>
            <p>Experience the vibrant culture of our college with music, dance, art exhibitions, and food stalls. Family and friends welcome!</p>
            <button onclick="openModal('Art & Culture Fest')">Register</button>
        </div>
        <div class="event-card">
            <h3>Sports Meet</h3>
            <p>Show your sportsmanship and compete in a variety of games and athletic events. Prizes and certificates for winners.</p>
            <button onclick="openModal('Sports Meet')">Register</button>
        </div>
    </div>
</section>
<section class="modal" id="registerModal">
    <div class="modal-content">
        <button class="close-modal" onclick="closeModal()">&times;</button>
        <h3 id="modalEventTitle">Register for Event</h3>
        <form id="registerForm" onsubmit="submitForm(event)">
            <input type="text" id="name" name="name" placeholder="Your Name" required />
            <input type="email" id="email" name="email" placeholder="Your Email" required />
            <input type="text" id="roll" name="roll" placeholder="Roll Number" required />
            <textarea id="message" name="message" placeholder="Why do you want to join? (optional)"></textarea>
            <button type="submit">Submit Registration</button>
        </form>
        <div id="successMsg" style="display:none; color: #388e3c; margin-top: 1rem; font-weight: 500;">Thank you for registering!</div>
    </div>
</section>
<footer id="contact">
    <p>Contact us: info@starlightcollege.edu | +1 234 567 8901</p>
    <p>© 2025 Starlight College. All rights reserved.</p>
</footer>
```

---

This stepwise approach helps you build a modern, accessible landing page using HTML, CSS Grid, and Emmet, with a focus on real-world web design.
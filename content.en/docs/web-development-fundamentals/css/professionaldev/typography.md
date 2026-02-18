---
title: Typography
weight: 3
---

> **Typography** is a key aspect of web design that focuses on the style, appearance, and arrangement of text. In CSS, typography can be controlled through various properties such as font family, size, weight, line height, and more.

### Key Typography Properties

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
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

```css
body {
  font-family: "Roboto", sans-serif;
}
```

#### **Using `@font-face`**

```css
@font-face {
  font-family: "MyCustomFont";
  src: url("fonts/mycustomfont.woff2") format("woff2");
}

body {
  font-family: "MyCustomFont", sans-serif;
}
```

---

# Typography in Practice: A Job Application Page (Step‑by‑Step)

This tutorial helps you practice typography through a realistic job application page. Each section gives you:

1. An **Emmet expression** (to scaffold HTML fast)
2. The **expanded HTML** (for reference/copy)
3. **Focused CSS** (typographic styling only)
4. A quick note on **why it works** typographically

> Tip: Create two files: `index.html` and `styles.css`. Add each section as you go. The CSS shown under each step can be appended to `styles.css`.

---

## 0) Base Setup & Type System

**Emmet (HTML head & skeleton)**

```emmet
!
```

**Expanded HTML (placeholders trimmed for clarity)**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Job Application — Ada Lovelace</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main class="container" role="main"></main>
  </body>
</html>
```

**CSS (type scale, rhythm, readable measure)**

```css
:root {
  /* Font system */
  --font-sans: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
    "Noto Sans", Arial, "Apple Color Emoji", "Segoe UI Emoji";
  --text: #141414;
  --muted: #5a5a5a;
  --accent: #2563eb; /* Indigo-ish */
  --ink-subtle: #8f8f8f;
  --max-ch: 68ch; /* ideal reading measure */
}

html {
  font-size: 16px;
}
body {
  margin: 0;
  color: var(--text);
  background: #fafafa;
  font-family: var(--font-sans);
  line-height: 1.6;
}
.container {
  max-width: 72rem;
  margin-inline: auto;
  padding: clamp(1rem, 3vw, 2rem);
}

/* Scalable headings using clamp */
h1 {
  font-size: clamp(2.25rem, 4vw + 1rem, 3.5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
}
h2 {
  font-size: clamp(1.25rem, 1.2vw + 1rem, 1.75rem);
  line-height: 1.25;
  letter-spacing: -0.012em;
  margin: 2rem 0 0.75rem;
}
h3 {
  font-size: clamp(1.05rem, 0.6vw + 1rem, 1.25rem);
  line-height: 1.25;
  letter-spacing: -0.008em;
  margin: 1.25rem 0 0.25rem;
}

p,
ul,
ol,
blockquote {
  max-width: var(--max-ch);
}
small,
.meta {
  color: var(--muted);
  font-size: 0.9375rem;
}
hr {
  border: none;
  border-top: 1px solid #e9e9e9;
  margin: 1.5rem 0;
}

a {
  color: var(--accent);
  text-decoration-thickness: from-font;
  text-underline-offset: 2px;
}
a:hover {
  text-decoration-thickness: 2px;
}

/* Helpers */
.flow > * + * {
  margin-top: var(--flow, 0.75rem);
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}
```

**Why it works**: Sets a clear type scale, generous line-height, and a comfortable measure (\~60–70ch) for paragraphs.

---

## 1) Top Header (Applicant Overview)

**Emmet**

```emmet
header#top.flow>h1.name{Ada Lovelace}+p.role{Senior Backend Engineer}+ul.meta>li*3
```

**Expanded HTML**

```html
<header id="top" class="flow">
  <h1 class="name">Ada Lovelace</h1>
  <p class="role">Senior Backend Engineer</p>
  <ul class="meta" aria-label="Contact details">
    <li><a href="mailto:ada@example.com">ada@example.com</a></li>
    <li><a href="tel:+11234567890">+1 (123) 456‑7890</a></li>
    <li><a href="https://example.com">example.com</a></li>
  </ul>
</header>
```

**CSS**

```css
#top .role {
  color: var(--ink-subtle);
  font-weight: 500;
  margin-top: 0.25rem;
}
#top .meta {
  list-style: none;
  display: flex;
  gap: 0.75rem;
  padding: 0;
  margin: 0.25rem 0 0;
  flex-wrap: wrap;
}
#top .meta li + li {
  position: relative;
}
#top .meta li + li::before {
  content: "•";
  margin-right: 0.75rem;
  color: #b5b5b5;
}
```

**Why it works**: Hierarchy is crystal clear—big name, supportive role line, then compact metadata separated with a gentle dot.

---

## 2) Personal Summary

**Emmet**

```emmet
section#summary.flow>h2{Overview}+p*2
```

**Expanded HTML**

```html
<section id="summary" class="flow">
  <h2>Overview</h2>
  <p>
    Seasoned engineer with a focus on reliable data pipelines and API design. I
    enjoy type‑driven development and pragmatic DX improvements.
  </p>
  <p>
    Proven track of mentoring teams, simplifying legacy code, and raising
    quality through automation and clear documentation.
  </p>
</section>
```

**CSS**

```css
#summary p {
  text-wrap: pretty;
}
```

**Why it works**: Paragraphs sit at an ideal measure for speed and comprehension.

---

## 3) Application Details (Definition List)

Use a definition list for tidy key→value pairs (position, location, expected CTC, notice period, etc.).

**Emmet**

```emmet
section#details>h2{Application Details}+dl.grid>(div>dt{Position}+dd{Senior Backend Engineer})+(div>dt{Location}+dd{Chennai, IN})+(div>dt{Notice Period}+dd{30 days})+(div>dt{Expected CTC}+dd{₹24 LPA})
```

**Expanded HTML**

```html
<section id="details">
  <h2>Application Details</h2>
  <dl class="grid">
    <div>
      <dt>Position</dt>
      <dd>Senior Backend Engineer</dd>
    </div>
    <div>
      <dt>Location</dt>
      <dd>Chennai, IN</dd>
    </div>
    <div>
      <dt>Notice Period</dt>
      <dd>30 days</dd>
    </div>
    <div>
      <dt>Expected CTC</dt>
      <dd>₹24 LPA</dd>
    </div>
  </dl>
</section>
```

**CSS**

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 0.75rem 1.25rem;
}
.grid dt {
  font-variant-caps: all-small-caps;
  letter-spacing: 0.06em;
  color: var(--muted);
}
.grid dd {
  margin: 0.125rem 0 0.5rem;
}
.grid div {
  padding: 0.5rem 0;
  border-bottom: 1px solid #efefef;
}
```

**Why it works**: Definition lists are semantic for name–value data, and small‑caps labels amplify scannability without shouting.

---

## 4) Work Experience (Readable Blocks)

**Emmet**

```emmet
section#experience>h2{Experience}+ol.timeline>li.job*2>article.flow>h3{Company — Role}+p.meta{Jan 2022–Present · Remote}+ul.responsibilities>li*3
```

**Expanded HTML**

```html
<section id="experience">
  <h2>Experience</h2>
  <ol class="timeline">
    <li class="job">
      <article class="flow">
        <h3>Orbit Labs — Senior Backend Engineer</h3>
        <p class="meta">Jan 2023 – Present · Remote</p>
        <ul class="responsibilities">
          <li>
            Designed a type‑safe SQL layer reducing runtime errors by 40%.
          </li>
          <li>
            Led a migration from monolith to modular services without downtime.
          </li>
          <li>Mentored 6 engineers; instituted ADRs and API style guide.</li>
        </ul>
      </article>
    </li>
    <li class="job">
      <article class="flow">
        <h3>DataForge — Backend Engineer</h3>
        <p class="meta">Aug 2020 – Dec 2022 · Chennai</p>
        <ul class="responsibilities">
          <li>
            Built streaming ETL with backpressure and exactly‑once semantics.
          </li>
          <li>Cut p95 latency by 30% through cache and query tuning.</li>
          <li>
            Introduced contract tests to stabilize cross‑team integrations.
          </li>
        </ul>
      </article>
    </li>
  </ol>
</section>
```

**CSS**

```css
#experience .timeline {
  list-style: none;
  padding: 0;
  margin: 0;
}
#experience .job + .job {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #efefef;
}
#experience h3 {
  margin-bottom: 0;
}
#experience .meta {
  font-feature-settings: "tnum" 1;
}
.responsibilities {
  padding-left: 1.2rem;
}
.responsibilities li {
  margin: 0.25rem 0;
}
.responsibilities li::marker {
  color: var(--accent);
}
```

**Why it works**: Clear blocks with restrained decoration; numeric dates use tabular figures for neat alignment.

---

## 5) Education

**Emmet**

```emmet
section#education>h2{Education}+ul.edu>li*2>h3{Degree — School}+p.meta{Year · City}+p{One‑line highlight}
```

**Expanded HTML**

```html
<section id="education">
  <h2>Education</h2>
  <ul class="edu">
    <li>
      <h3>B.E. Computer Science — PSG Tech</h3>
      <p class="meta">2016 – 2020 · Coimbatore</p>
      <p>Graduated with focus on databases and distributed systems.</p>
    </li>
    <li>
      <h3>MOOC Specialization — Data Engineering</h3>
      <p class="meta">2022 · Online</p>
      <p>Kafka, Flink, and lakehouse patterns.</p>
    </li>
  </ul>
</section>
```

**CSS**

```css
.edu {
  list-style: none;
  padding: 0;
  margin: 0;
}
.edu li + li {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #efefef;
}
```

**Why it works**: Mirrors the experience layout for consistency; short, skimmable lines.

---

## 6) Skills (Chips) & Tools (Inline List)

**Emmet**

```emmet
section#skills>h2{Skills}+ul.chips>li*8{Java}+section#tools>h2{Tools}+ul.meta>li*5
```

**Expanded HTML**

```html
<section id="skills">
  <h2>Skills</h2>
  <ul class="chips" aria-label="Primary skills">
    <li>Java</li>
    <li>Spring</li>
    <li>SQL</li>
    <li>jOOQ</li>
    <li>Kafka</li>
    <li>Flink</li>
    <li>Redis</li>
    <li>Docker</li>
  </ul>
</section>
<section id="tools">
  <h2>Tools</h2>
  <ul class="meta">
    <li>IntelliJ IDEA</li>
    <li>GitHub Actions</li>
    <li>Grafana</li>
    <li>PostgreSQL</li>
    <li>Linux</li>
  </ul>
</section>
```

**CSS**

```css
.chips {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.chips li {
  border: 1px solid #e3e3e3;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-size: 0.95rem;
}
```

**Why it works**: Chips read as nouns; the minimal stroke and rounded shapes prevent visual noise.

---

## 7) Cover Letter (Optional)

**Emmet**

```emmet
section#letter>h2{Cover Letter}+blockquote>p*2
```

**Expanded HTML**

```html
<section id="letter">
  <h2>Cover Letter</h2>
  <blockquote>
    <p>
      I’m excited about building reliable, well‑typed backends that make
      frontends joyful. I value small APIs with strong contracts.
    </p>
    <p>
      My recent focus has been performance work around query plans and safe
      concurrency, which I’d love to continue at your team.
    </p>
  </blockquote>
</section>
```

**CSS**

```css
blockquote {
  border-left: 4px solid var(--accent);
  padding-left: 1rem;
  font-style: italic;
  color: #333;
}
blockquote p + p {
  margin-top: 0.5rem;
}
```

**Why it works**: The left rule and italics set apart long‑form prose without overwhelming the page.

---

## 8) Links & Attachments (Accessible List)

**Emmet**

```emmet
section#links>h2{Links}+ul>li*3>a[href="#"]{GitHub Repo}
```

**Expanded HTML**

```html
<section id="links">
  <h2>Links</h2>
  <ul>
    <li><a href="#">Portfolio</a></li>
    <li><a href="#">GitHub</a></li>
    <li><a href="#">LinkedIn</a></li>
  </ul>
</section>
```

**CSS**

```css
#links ul {
  padding-left: 1.2rem;
}
#links li {
  margin: 0.25rem 0;
}
```

**Why it works**: Simple lists maintain rhythm; underline defaults keep links obvious and accessible.

---

## 9) Footer (Signature)

**Emmet**

```emmet
footer#foot.flow>hr+p.meta{Last updated: Aug 24, 2025}
```

**Expanded HTML**

```html
<footer id="foot" class="flow">
  <hr />
  <p class="meta">Last updated: Aug 24, 2025</p>
</footer>
```

**CSS**

```css
#foot {
  margin-top: 2rem;
}
```

**Why it works**: A quiet end‑note; the rule creates closure with minimal visual weight.

---

## 10) Print Styles (Nice on Paper)

Append this at the end of your CSS.

```css
@media print {
  body {
    background: white;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .chips li {
    border-color: #bbb;
  }
  .container {
    padding: 0;
  }
  /* Avoid page breaks inside logical blocks */
  header,
  section,
  footer {
    break-inside: avoid;
  }
}
```

---

## Putting It All Together (HTML Skeleton)

Paste the sections in order into `<main class="container">…</main>`.

```html
<main class="container">
  <!-- 1) Header -->
  <header id="top" class="flow">
    <h1 class="name">Ada Lovelace</h1>
    <p class="role">Senior Backend Engineer</p>
    <ul class="meta" aria-label="Contact details">
      <li><a href="mailto:ada@example.com">ada@example.com</a></li>
      <li><a href="tel:+11234567890">+1 (123) 456‑7890</a></li>
      <li><a href="https://example.com">example.com</a></li>
    </ul>
  </header>

  <!-- 2) Summary -->
  <section id="summary" class="flow">
    <h2>Overview</h2>
    <p>
      Seasoned engineer with a focus on reliable data pipelines and API design.
      I enjoy type‑driven development and pragmatic DX improvements.
    </p>
    <p>
      Proven track of mentoring teams, simplifying legacy code, and raising
      quality through automation and clear documentation.
    </p>
  </section>

  <!-- 3) Application Details -->
  <section id="details">
    <h2>Application Details</h2>
    <dl class="grid">
      <div>
        <dt>Position</dt>
        <dd>Senior Backend Engineer</dd>
      </div>
      <div>
        <dt>Location</dt>
        <dd>Chennai, IN</dd>
      </div>
      <div>
        <dt>Notice Period</dt>
        <dd>30 days</dd>
      </div>
      <div>
        <dt>Expected CTC</dt>
        <dd>₹24 LPA</dd>
      </div>
    </dl>
  </section>

  <!-- 4) Experience -->
  <section id="experience">
    <h2>Experience</h2>
    <ol class="timeline">
      <li class="job">
        <article class="flow">
          <h3>Orbit Labs — Senior Backend Engineer</h3>
          <p class="meta">Jan 2023 – Present · Remote</p>
          <ul class="responsibilities">
            <li>
              Designed a type‑safe SQL layer reducing runtime errors by 40%.
            </li>
            <li>
              Led a migration from monolith to modular services without
              downtime.
            </li>
            <li>Mentored 6 engineers; instituted ADRs and API style guide.</li>
          </ul>
        </article>
      </li>
      <li class="job">
        <article class="flow">
          <h3>DataForge — Backend Engineer</h3>
          <p class="meta">Aug 2020 – Dec 2022 · Chennai</p>
          <ul class="responsibilities">
            <li>
              Built streaming ETL with backpressure and exactly‑once semantics.
            </li>
            <li>Cut p95 latency by 30% through cache and query tuning.</li>
            <li>
              Introduced contract tests to stabilize cross‑team integrations.
            </li>
          </ul>
        </article>
      </li>
    </ol>
  </section>

  <!-- 5) Education -->
  <section id="education">
    <h2>Education</h2>
    <ul class="edu">
      <li>
        <h3>B.E. Computer Science — PSG Tech</h3>
        <p class="meta">2016 – 2020 · Coimbatore</p>
        <p>Graduated with focus on databases and distributed systems.</p>
      </li>
      <li>
        <h3>MOOC Specialization — Data Engineering</h3>
        <p class="meta">2022 · Online</p>
        <p>Kafka, Flink, and lakehouse patterns.</p>
      </li>
    </ul>
  </section>

  <!-- 6) Skills & Tools -->
  <section id="skills">
    <h2>Skills</h2>
    <ul class="chips" aria-label="Primary skills">
      <li>Java</li>
      <li>Spring</li>
      <li>SQL</li>
      <li>jOOQ</li>
      <li>Kafka</li>
      <li>Flink</li>
      <li>Redis</li>
      <li>Docker</li>
    </ul>
  </section>
  <section id="tools">
    <h2>Tools</h2>
    <ul class="meta">
      <li>IntelliJ IDEA</li>
      <li>GitHub Actions</li>
      <li>Grafana</li>
      <li>PostgreSQL</li>
      <li>Linux</li>
    </ul>
  </section>

  <!-- 7) Cover Letter -->
  <section id="letter">
    <h2>Cover Letter</h2>
    <blockquote>
      <p>
        I’m excited about building reliable, well‑typed backends that make
        frontends joyful. I value small APIs with strong contracts.
      </p>
      <p>
        My recent focus has been performance work around query plans and safe
        concurrency, which I’d love to continue at your team.
      </p>
    </blockquote>
  </section>

  <!-- 8) Links -->
  <section id="links">
    <h2>Links</h2>
    <ul>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">GitHub</a></li>
      <li><a href="#">LinkedIn</a></li>
    </ul>
  </section>

  <!-- 9) Footer -->
  <footer id="foot" class="flow">
    <hr />
    <p class="meta">Last updated: Aug 24, 2025</p>
  </footer>
</main>
```

---

**Conclusion**
Typography is a critical part of web design, as it affects readability, user experience, and overall design aesthetics. With CSS, you can control almost every aspect of typography, from fonts to spacing, alignment, and decoration.

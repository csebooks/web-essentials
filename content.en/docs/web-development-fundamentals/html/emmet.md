---
title: Emmet
weight: 2
---

> **Emmet** is a powerful toolkit that speeds up HTML and CSS authoring. Instead of typing repetitive tags, you type **abbreviations** and press <kbd>Tab</kbd> (or your editor’s expansion key) to instantly generate the full code.

It works in **VS Code** and many other editors, and has become an essential tool for front-end developers.

## Why Use Emmet?

1. **Increases productivity** – Write less, generate more.
2. **Avoids typo errors** – Syntax is precise and consistent.
3. **Reinforces web development mindset** – Keeps you thinking in terms of **HTML structure** and **CSS selectors**.

## Quick Reference: Common HTML Emmet Abbreviations

| **Category**          | **Emmet Abbreviation**    | **Expanded HTML**                                                                                            |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Basic Tag**         | `div`                     | `<div></div>`                                                                                                |
| **Nesting Operators** | `div>ul>li`               | `html\n<div>\n    <ul>\n        <li></li>\n    </ul>\n</div>\n`                                              |
| **Sibling Elements**  | `h1+p`                    | `html\n<h1></h1>\n<p></p>\n`                                                                                 |
| **Multiplication**    | `ul>li*3`                 | `html\n<ul>\n    <li></li>\n    <li></li>\n    <li></li>\n</ul>\n`                                           |
| **ID and Class**      | `div#header`              | `<div id="header"></div>`                                                                                    |
|                       | `div.container`           | `<div class="container"></div>`                                                                              |
| **Multiple Classes**  | `div.red.blue`            | `<div class="red blue"></div>`                                                                               |
| **Attributes**        | `input[type=text]`        | `<input type="text">`                                                                                        |
| **Text Content**      | `p{Hello World}`          | `<p>Hello World</p>`                                                                                         |
| **Numbering**         | `ul>li.item$*3`           | `html\n<ul>\n    <li class="item1"></li>\n    <li class="item2"></li>\n    <li class="item3"></li>\n</ul>\n` |
| **Grouping**          | `(header>ul>li*2)+footer` | `html\n<header>\n    <ul>\n        <li></li>\n        <li></li>\n    </ul>\n</header>\n<footer></footer>\n`  |

## Quick Reference: Common CSS Emmet Abbreviations

| **Category**           | **Emmet Abbreviation** | **Expanded CSS**           |
| ---------------------- | ---------------------- | -------------------------- |
| **Margin / Padding**   | `m10`                  | `margin: 10px;`            |
|                        | `m10-20`               | `margin: 10px 20px;`       |
|                        | `p5`                   | `padding: 5px;`            |
|                        | `p10-20`               | `padding: 10px 20px;`      |
| **Width / Height**     | `w100`                 | `width: 100px;`            |
|                        | `h200`                 | `height: 200px;`           |
| **Font**               | `fs14`                 | `font-size: 14px;`         |
|                        | `fw700`                | `font-weight: 700;`        |
| **Background**         | `bgc#333`              | `background-color: #333;`  |
| **Color**              | `c#f00`                | `color: #f00;`             |
| **Border**             | `bd1-s#000`            | `border: 1px solid #000;`  |
| **Display / Position** | `d:f`                  | `display: flex;`           |
|                        | `pos:a`                | `position: absolute;`      |
| **Flexbox Helpers**    | `jc:c`                 | `justify-content: center;` |
|                        | `ai:c`                 | `align-items: center;`     |

Simple, right? ✨

Still have doubts? Don’t worry — in the upcoming chapters we’ll explore **HTML and CSS concepts in more detail** using Emmet expressions. This step-by-step approach will make it even easier to get familiar and confident with modern web development.

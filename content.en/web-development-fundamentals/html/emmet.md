---
title: Emmet
weight: 2
---

Emmet is a web-developer’s toolkit that can greatly improve your HTML & CSS workflow.

---

## How to Use Emmet

Type the abbreviation and press <kbd>Tab</kbd> in your editor to expand it into full HTML code. Emmet works in VS Code and many other editors.

---

## Quick Reference: Common HTML Emmet Abbreviations

| Purpose         | Emmet Abbreviation         | Expands To                        |
|-----------------|---------------------------|-----------------------------------|
| HTML5 Boilerplate | `html:5`                | HTML5 template                    |
| Heading         | `h1{Title}`               | `<h1>Title</h1>`                  |
| Paragraph       | `p{Text}`                 | `<p>Text</p>`                     |
| Link            | `a:link` or `a[href]`     | `<a href="http://"></a>`         |
| Image           | `img:src`                 | `<img src="" alt="">`           |
| List            | `ul>li*3`                 | `<ul><li></li><li></li><li></li></ul>` |
| Div with class  | `.container`              | `<div class="container"></div>`  |
| Table           | `table>tr*2>td*2`         | Table with 2 rows, 2 columns      |
| ...existing code...

---

## Containers
| Container Type      | Emmet Abbreviation | Expands To                        |
|--------------------|--------------------|-----------------------------------|
| `span`             | `span`             | `<span></span>`                   |
| `header`           | `header`           | `<header></header>`               |
| `nav`              | `nav`              | `<nav></nav>`                     |
| `article`          | `article`          | `<article></article>`             |
| `footer`           | `footer`           | `<footer></footer>`               |
| `aside`            | `aside`            | `<aside></aside>`                 |

**Combine containers and content:**
- `section>h2{Title}+p{Text}` → section with heading and paragraph

---

## Text Elements

| Text Element      | Emmet Abbreviation                | Expands To                        |
|------------------|-----------------------------------|-----------------------------------|
| Heading          | `h1{Title}`                       | `<h1>Title</h1>`                   |
| Paragraph        | `p{Text}`                         | `<p>Text</p>`                      |
| Bold             | `b{Bold}` or `strong{Strong}`     | `<b>Bold</b>` or `<strong>Strong</strong>` |
| Italic           | `i{Italic}` or `em{Em}`           | `<i>Italic</i>` or `<em>Em</em>`   |
| Underline        | `u{Underline}`                    | `<u>Underline</u>`                 |
| Small            | `small{Small}`                    | `<small>Small</small>`             |
| Superscript      | `sup{2}`                          | `<sup>2</sup>`                     |
| Subscript        | `sub{2}`                          | `<sub>2</sub>`                     |
| Blockquote       | `blockquote{Quote}`               | `<blockquote>Quote</blockquote>`   |
| Inline code      | `code{code}`                      | `<code>code</code>`                |
| List             | `ul>li*3` or `ol>li*3`            | `<ul><li></li><li></li><li></li></ul>` |
| Link             | `a[href]`                         | `<a href=""></a>`                 |
| HR               | `hr`                              | `<hr>`                             |
| Abbreviation     | `abbr[title]`                     | `<abbr title=""></abbr>`          |
| Address          | `address{Address}`                | `<address>Address</address>`       |
| Time             | `time[datetime]`                  | `<time datetime=""></time>`       |

---

## Forms

| `form`          | `form[action="/submit" method="post"]`           | `<form action="/submit" method="post">` |
| Password input  | `input:password[name="pwd"]`                      | `<input type="password" name="pwd">` |
| Email input     | `input:email[name="email"]`                       | `<input type="email" name="email">` |
| Number input    | `input:number[name="age"]`                        | `<input type="number" name="age">` |
| Radio           | `input:radio[name="gender" value="male"]`        | `<input type="radio" name="gender" value="male">` |
| Checkbox        | `input:checkbox[name="subscribe"]`                | `<input type="checkbox" name="subscribe">` |
| Select          | `select>option*2`                                  | `<select><option></option><option></option></select>` |
| Textarea        | `textarea[name="msg"]`                            | `<textarea name="msg"></textarea>` |
| File upload     | `input:file[name="file"]`                         | `<input type="file" name="file">` |
| Button          | `button{Click}`                                    | `<button>Click</button>` |
| Submit          | `input:submit[value=Send]`                         | `<input type="submit" value="Send">` |
| Reset           | `input:reset[value=Reset]`                         | `<input type="reset" value="Reset">` |

---

## Media

| Media Type | Emmet Abbreviation | Expands To |
|------------|--------------------|------------|
| Image      | `img:src`          | `<img src="" alt="">` |
| Audio      | `audio[controls]>source` | `<audio controls><source></audio>` |
| Video      | `video[controls]>source` | `<video controls><source></video>` |
| Iframe     | `iframe[src]`      | `<iframe src=""></iframe>` |


# Elements

Emmet doesn’t have a predefined set of available tag names, so we can use element's names like div or p to generate HTML tags.

# Nesting operators

Nesting operators are used to position abbreviation elements inside generated tree: whether it should be placed inside or near the context element.

**Child: >**

div>ul>li

```html
<div>
    <ul>
        <li></li>
    </ul>
</div>

**Sibling: +**

div+p+bq

```html
<div></div>
<p></p>
<blockquote></blockquote>
```
**Climb-up: ^**

div+div>p>span+em^bq

```html
<div></div>
<div>
    <p><span></span><em></em></p>
    <blockquote></blockquote>
</div>
```

div+div>p>span+em^^^bq

```html
<div></div>
<div>
    <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```

**Multiplication:**

ul>li*5

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

**Grouping: ()**

div>(header>ul>li*2>a)+footer>p

```html
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```

# Attribute operators

Attribute operators are used to modify attributes of outputted elements.

**ID and CLASS**

div#header+div.page+div#footer.class1.class2.class3

```html
<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>
```

**Custom attributes**

td[title="Hello world!" colspan=3]

```html
<td title="Hello world!" colspan="3"></td>
```

**Text: {}**

a{Click me}

```html
<a href="">Click me</a>
```
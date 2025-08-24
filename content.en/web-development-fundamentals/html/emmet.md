---
title: Emmet
weight: 2
---

Emmet is a web-developer’s toolkit that can greatly improve your HTML & CSS workflow.

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
```

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
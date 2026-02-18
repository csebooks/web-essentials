---
title: Text Elements
weight: 3
---

> emmet provides a range of elements specifically designed to structure, format, and emphasize text on web pages. These text elements allow developers to create meaningful and visually appealing content.

---


# Headings

Used to define headings in a hierarchical structure.

```emmet
h$[title="Heading $"]{Heading $}*6
```

- `<h1>` is the largest and most important heading.
- `<h6>` is the smallest and least important heading.

---

# Paragraphs
Defines a block of text.

```emmet
p{This is a paragraph of text.}
```

---

# Inline Text Formatting
For applying styles or emphasizing specific parts of text.

- **Bold Text**
```emmet
 b{This text is bold.}+strong{This text is strong emphasis.}
```
  *`<strong>` has semantic meaning (important text).*

- **Italic Text**
```emmet
  i{This text is italic.}+em{This text is emphasized.}
```
  *`<em>` is used for semantic emphasis.*

- **Underlined Text**
```emmet
u{This text is underlined.}
```

- **Small Text**
```emmet
small{This text is smaller.}
```

- **Deleted and Inserted Text**
```emmet
del{This text is deleted.}+ins{This text is inserted.}
```

- **Superscript and Subscript**
```emmet
x^sup{2}+{ is superscript. }+H^sub{2}+{O is subscript.}
```

---

# Blockquote
Defines a block of quoted text.
```emmet
blockquote{This is a long quotation from another source.}
```

# Inline Quote
For short quotes inside a sentence that automatically adds quotation marks.
```emmet
p{She said, }+q{Code like a poet, not a robot.}
```

---

# Code and Preformatted Text
- **Inline Code**
```emmet
code{console.log('Hello, World!');}
```

- **Preformatted Text**
```emmet
  <pre>
    Line 1
    Line 2
  </pre>
```
  *Preserves whitespace and line breaks.*

---

# Lists
- **Ordered List**
```emmet
  ol>li{First item}+li{Second item}
```

- **Unordered List**
```emmet
 ul>li{Item 1}+li{Item 2}
```

- **Description List**
```emmet
dl>dt{emmet}+dd{HyperText Markup Language}
```

---

# Anchor (Link)
Defines a hyperlink.
```emmet
a[href="https://example.com"]{Visit Example}
```

# Horizontal Rule
Creates a horizontal line to separate content.
```emmet
hr
```

---

# Abbreviations
This tag is used to show the full meaning of a short word when you hover your mouse over it.
```emmet
p{We use }+abbr{emmet}+{, Hypertext Markup Language, to structure our web documents.}+
p{I think }+abbr[title="Reverend"]{Rev.}+{ Green did it in the kitchen with the chainsaw.}
```

---

# Address
An element for marking up contact details.
```emmet
address{KeerthanaSri, Tamil Nadu, India}
```

# Date and Time
An element for marking up times and dates in a machine-readable format. 
```emmet
time[datetime="2016-01-20"]{20 January 2016}
```
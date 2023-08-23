---
title: "Cascading Style Sheets™"
weight: 2
---

## O B J E C T I V E S

In this chapter you will learn:

■ To control the appearance of a website by creating style sheets.

■ To use a style sheet to give all the pages of a website the same look and feel.

■ To use the class attribute to apply styles.

■ To specify the precise font, size, color and other properties of displayed text.

■ To specify element backgrounds and colors.

■ To understand the box model and how to control margins, borders and padding.

■ To use style sheets to separate presentation from content.

**5.1 Introduction** In Chapter 4, we introduced the Extensible HyperText Markup Language (XHTML) for marking up information to be rendered in a browser. In this chapter, we shift our focus to formatting and presenting information. To do this, we use a W3C technology called **Cas- cading Style Sheets™** (**CSS**) that allows document authors to specify the presentation of elements on a web page (e.g., fonts, spacing, colors) separately from the structure of the document (section headers, body text, links, etc.). This **separation of structure from pre- sentation** simplifies maintaining and modifying a web page.

XHTML was designed to specify the content and structure of a document. Though it has some attributes that control presentation, it is better not to mix presentation with content. If a website’s presentation is determined entirely by a style sheet, a web designer can simply swap in a new style sheet to completely change the appearance of the site. CSS provides a way to apply style outside of XHTML, allowing the XHTML to dictate the content while the CSS dictates how it’s presented.

As with XHTML, the W3C provides a CSS code validator located at jigsaw.w3.org/ css-validator/. It is a good idea to validate all CSS code with this tool to make sure that your code is correct and works on as many browsers as possible.

CSS is a large topic. As such, we can introduce only the basic knowledge of CSS that you’ll need to understand the examples and exercises in the rest of the book. For more CSS references and resources, check out our CSS Resource Center at www.deitel.com/css21.

The W3C’s CSS specification is currently in its second major version, with a third in development. The current versions of most major browsers support much of the function- ality in CSS 2. This allows programmers to make full use of its features. In this chapter, we introduce CSS, demonstrate some of the features introduced in CSS 2 and discuss some of the upcoming CSS 3 features. As you read this book, open each XHTML docu- ment in your web browser so you can view and interact with it in a web browser, as it was originally intended.

Remember that the examples in this book have been tested in Internet Explorer 7 and Firefox 2. The latest versions of many other browsers (e.g., Safari, Opera, Konqueror) should render this chapter’s examples properly, but we have not tested them. Some exam- ples in this chapter _will not work_ in older browsers, such as Internet Explorer 6 and earlier. Make sure you have either Internet Explorer 7 (Windows only) or Firefox 2 (available for all major platforms) installed before running the examples in this chapter.

## Inline Styles

You can declare document styles in several ways. This section presents **inline styles** that declare an individual element’s format using the XHTML attribute **style**. Inline styles override any other styles applied using the techniques we discuss later in the chapter. Figure 5.1 applies inline styles to p elements to alter their font size and color.

**Good Programming Practice 5.1**

> _Inline styles do not truly separate presentation from content. To apply similar styles to multiple elements, use embedded style sheets or external style sheets, introduced later in this chapter._ 5.1

The first inline style declaration appears in line 17. Attribute style specifies an ele- ment’s style. Each **CSS property** (**font-size** in this case) is followed by a colon and a value. In line 17, we declare this particular p element to use 20-point font size.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 5.1: inline.html -->
<!-- Using inline styles -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Inline Styles</title>
</head>
<body>
<p>This text does not have any style applied to it.</p>

<!-- The style attribute allows you to declare -->
<!-- inline styles. Separate multiple style properties -->
<!-- with a semicolon. -->
<p style = "font-size: 20pt">    This text has the
<em>font-size</em> style applied to it, making it 20pt.
</p>

<p style = "font-size: 20pt; color: #6666ff">
This text has the <em>font-size</em> and
<em>color</em> styles applied to it, making it
20pt. and light blue.</p>
</body>
</html>
```

**Fig. 5.1** | Using inline styles. (Part 1 of 2.)

**Fig. 5.1** | Using inline styles. (Part 2 of 2.)

Line 21 specifies the two properties, font-size and **color**, separated by a semicolon. In this line, we set the given paragraph’s color to light blue, using the hexadecimal code #6666ff. Color names may be used in place of hexadecimal codes. We provide a list of hexadecimal color codes and color names in Appendix B, XHTML Colors.

## Embedded Style Sheets

A second technique for using style sheets is **embedded style sheets**. Embedded style sheets enable a you to embed an entire CSS document in an XHTML document’s head section. To achieve this separation between the CSS code and the XHTML that it styles, we will use **CSS selectors**. Figure 5.2 creates an embedded style sheet containing four styles.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 5.2: embedded.html -->
<!-- Embedded style sheets. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Style Sheets</title>

<!-- this begins the style sheet section -->
<style type = "text/css">
em { font-weight: bold;
color: black }
h1 { font-family: tahoma, helvetica, sans-serif }
p { font-size: 12pt;
font-family: arial, sans-serif }
.special { color: #6666ff }
</style>
</head>
```

**Fig. 5.2** | Embedded style sheets. (Part 1 of 2.)

```js
<body>
<!-- this class attribute applies the .special style -->
<h1 class = "special">Deitel &amp; Associates, Inc.</h1>

<p>Deitel &amp; Associates, Inc. is an internationally
recognized corporate training and publishing organization
specializing in programming languages, Internet/World
Wide Web technology and object technology education.
The company provides courses on Java, C++, Visual Basic,
C#, C, Internet and World Wide Web programming, Object
Technology, and more.</p>

<h1>Clients</h1>
<p class = "special"> The company's clients include many
<em>Fortune 1000 companies</em>, government agencies,
branches of the military and business organizations.
Through its publishing partnership with Prentice Hall,
Deitel &amp; Associates, Inc. publishes leading-edge
programming textbooks, professional books, interactive
web-based multimedia Cyber Classrooms, satellite
courses and World Wide Web courses.</p>
</body>
</html>
```

**Fig. 5.2** | Embedded style sheets. (Part 2 of 2.)

The style element (lines 12–19) defines the embedded style sheet. Styles placed in the head apply to matching elements wherever they appear in the entire document. The style element’s type attribute specifies the **Multipurpose Internet Mail Extensions (MIME) type** that describes a file’s content. CSS documents use the MIME type text/

css. Other MIME types include image/gif (for GIF images), text/javascript (for the JavaScript scripting language, which we discuss in Chapters 6–11), and more.

The body of the style sheet (lines 13–18) declares the **CSS rules** for the style sheet. A CSS selector determines which elements will be styled according to a rule. Our first rule begins with the selector em (line 13) to select all em elements in the document. The **font-**

**weight** property in line 13 specifies the “boldness” of text. Possible values are bold, normal (the default), bolder (bolder than bold text) and lighter (lighter than normal text). Bold- ness also can be specified with multiples of 100, from 100 to 900 (e.g., 100, 200, …, 900). Text specified as normal is equivalent to 400, and bold text is equivalent to 700. However, many systems do not have fonts that can scale with this level of precision, so using the values from 100 to 900 might not display the desired effect.

In this example, all em elements will be displayed in a bold font. We also apply styles to all h1 (line 15) and p (lines 16–17) elements. The body of each rule is enclosed in curly braces ({ and }).

Line 18 uses a new kind of selector to declare a **style class** named special. Style classes define styles that can be applied to any element. In this example, we declare class special, which sets color to blue. We can apply this style to any element type, whereas the other rules in this style sheet apply only to specific element types defined in the style sheet (i.e., em, h1 or p). Style-class declarations are preceded by a period. We will discuss how to apply a style class momentarily.

CSS rules in embedded style sheets use the same syntax as inline styles; the property name is followed by a colon (:) and the value of the property. Multiple properties are sep- arated by semicolons (;). In the rule for em elements, the color property specifies the color of the text, and property font-weight makes the font bold.

The **font-family** property (line 15) specifies the name of the font to use. Not all users have the same fonts installed on their computers, so CSS allows you to specify a comma- separated list of fonts to use for a particular style. The browser attempts to use the fonts in the order they appear in the list. It’s advisable to end a font list with a **generic font family name** in case the other fonts are not installed on the user’s computer. In this example, if the tahoma font is not found on the system, the browser will look for the helvetica font. If neither is found, the browser will display its default sans-serif font. Other generic font families include serif (e.g., times new roman, Georgia), cursive (e.g., script), fantasy (e.g., critter) and monospace (e.g., courier, fixedsys).

The **font-size** property (line 16) specifies a 12-point font. Other possible measure- ments in addition to pt (point) are introduced later in the chapter. Relative values— xx-

small, x-small, small, smaller, medium, large, larger, x-large and xx-large—also can be used. Generally, relative values for font-size are preferred over point sizes because an author does not know the specific measurements of the display for each client. Relative font-size values permit more flexible viewing of web pages.

For example, a user may wish to view a web page on a handheld device with a small screen. Specifying an 18-point font size in a style sheet will prevent such a user from seeing more than one or two characters at a time. However, if a relative font size is specified, such as large or larger, the actual size is determined by the browser that displays the font. Using relative sizes also makes pages more accessible to users with disabilities. Users with impaired vision, for example, may configure their browser to use a larger default font, upon which all relative sizes are based. Text that the author specifies to be smaller than the main text still displays in a smaller size font, yet it is clearly visible to each user. Acces- sibility is an important consideration—in 1998, congress passed the Section 508 Amend-

ment to the Rehabilitation Act of 1973, mandating that websites of government agencies are required to be accessible to disabled users.

Line 23 uses the XHTML attribute **class** in an h1 element to apply a style class—in this case class special (declared with the .special selector in the style sheet on line 18). When the browser renders the h1 element, note that the text appears on screen with the properties of both an h1 element (arial or sans-serif font defined in line 17) and the .special style class applied (the color #6666ff defined in line 18). Also notice that the browser still applies its own default style to the h1 element—the header is still displayed in a large font size. Similarly, all em elements will still be italicized by the browser, but they will also be bold as a result of our style rule.

The formatting for the p element and the .special class is applied to the text in lines 34–41. In many cases, the styles applied to an element (the **parent** or **ancestor element**) also apply to the element’s nested elements (**child** or **descendant elements**). The em element nested in the p element in line 35 **inherits** the style from the p element (namely, the 12- point font size in line 16) but retains its italic style. In other words, styles defined for the paragraph and not defined for the em element is applied to the em element. Because mul- tiple values of one property can be set or inherited on the same element, they must be reduced to one style per element before being rendered. We discuss the rules for resolving these conflicts in the next section.

## Conflicting Styles

Styles may be defined by a **user**, an **author** or a **user agent** (e.g., a web browser). A user is a person viewing your web page, you are the author—the person who writes the docu- ment—and the user agent is the program used to render and display the document. Styles “cascade,” or flow together, such that the ultimate appearance of elements on a page results from combining styles defined in several ways. Styles defined by the user take precedence over styles defined by the user agent, and styles defined by authors take precedence over styles defined by the user.

Most styles defined for parent elements are also inherited by child (nested) elements. While it makes sense to inherit most styles, such as font properties, there are certain prop- erties that we don’t want to be inherited. Consider for example the background-image

property, which allows the programmer to set an image as the background of an element. If the body element is assigned a background image, we don’t want the same image to be in the background of every element in the body of our page. Instead, the background-

image property of all child elements retains its default value of none. In this section, we discuss the rules for resolving conflicts between styles defined for elements and styles inherited from parent and ancestor elements.

Figure 5.2 presented an example of **inheritance** in which a child em element inherited the font-size property from its parent p element. However, in Fig. 5.2, the child em ele- ment had a color property that conflicted with (i.e., had a different value than) the color property of its parent p element. Properties defined for child and descendant elements have a greater **specificity** than properties defined for parent and ancestor elements. Con- flicts are resolved in favor of properties with a higher specificity. In other words, the styles explicitly defined for a child element are more specific than the styles defined for the child’s parent element; therefore, the child’s styles take precedence. Figure 5.3 illustrates examples of inheritance and specificity.

Line 12 applies property text-decoration to all a elements whose class attribute is set to nodec. The text-decoration property applies **decorations** to text in an element. By default, browsers underline the text of an a (anchor) element. Here, we set the text-dec- oration property to none to indicate that the browser should not underline hyperlinks. Other possible values for text-decoration include overline, line-through, underline and blink. \[_Note:_ blink is not supported by Internet Explorer.\] The .nodec appended to a is a more specific class selector; this style will apply only to a (anchor) elements that specify nodec in their class attribute.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 5.3: advanced.html -->
<!-- Inheritance in style sheets. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>More Styles</title>
<style type = "text/css">
body { font-family: arial, helvetica, sans-serif }
a.nodec { text-decoration: none }
a:hover { text-decoration: underline }
li em { font-weight: bold }
h1, em { text-decoration: underline }
ul { margin-left: 20px }
ul ul { font-size: .8em }
</style>
</head>
<body>
<h1>Shopping list for Monday:</h1>

<ul>
<li>Milk</li>
<li>Bread
<ul>
<li>White bread</li>
<li>Rye bread</li>
<li>Whole wheat bread</li>
</ul>
</li>
<li>Rice</li>
<li>Potatoes</li>
<li>Pizza <em>with mushrooms</em></li>
</ul>

<p><em>Go to the</em>
<a class = "nodec" href = "http://www.deitel.com">
Grocery store</a>
</p>
</body>
</html>
```

**Fig. 5.3** | Inheritance in style sheets. (Part 1 of 2.)

**Fig. 5.3** | Inheritance in style sheets. (Part 2 of 2.)

**Portability Tip 5.1**

> _To ensure that your style sheets work in various web browsers, test them on all the client web browsers that will render documents using your styles, as well as using the W3C CSS Validator._ 5.1

Line 13 specifies a style for hover, which is a **pseudoclass**. Pseudoclasses give the author access to content not specifically declared in the document. The **hover pseudoclass** is activated dynamically when the user moves the mouse cursor over an element. Note that pseudoclasses are separated by a colon (with no surrounding spaces) from the name of the element to which they are applied.

**Common Programming Error 5.1**

> _Including a space before or after the colon separating a pseudoclass from the name of the element to which it is applied is an error that prevents the pseudoclass from being applied properly._ 5.1

Line 14 causes all em elements that are children of li elements to be bold. In the screen output of Fig. 5.3, note that **Go to the** (contained in an em element in line 37) does not appear bold, because the em element is not in an li element. However, the em element con- taining **with mushrooms** (line 34) is nested in an li element; therefore, it is formatted in bold. The syntax for applying rules to multiple elements is similar. In line 15, we separate the selectors with a comma to apply an underline style rule to all h1 and all em elements.

Line 16 assigns a left margin of 20 pixels to all ul elements. We will discuss the margin properties in detail in Section 5.9. A pixel is a **relative-length measurement**—it varies in size, based on screen resolution. Other relative lengths include **em** (the _M_\-height of the font, which is usually set to the height of an uppercase _M_), **ex** (the _x_\-height of the font, which is usually set to the height of a lowercase _x_) and percentages (e.g., font-size: 50%). To set an element to display text at 150 percent of its default text size, the author could use the syntax

font-size: 1.5em

Alternatively, you could use

font-size: 150%

Other units of measurement available in CSS are **absolute-length measurements**—i.e., units that do not vary in size based on the system. These units are **in** (inches), **cm** (centi- meters), **mm** (millimeters), **pt** (points; 1 pt = 1/72 in) and **pc** (picas; 1 pc = 12 pt). Line 17 specifies that all nested unordered lists (ul elements that are descendants of ul elements) are to have font size .8em. \[_Note:_ When setting a style property that takes a measurement (e.g. font-size, margin-left), no units are necessary if the value is zero.]

**Good Programming Practice 5.2**

> _Whenever possible, use relative-length measurements. If you use absolute-length measurements, your document may not be readable on some client browsers (e.g., wireless phones)._ 5.2

## Linking External Style Sheets

Style sheets are a convenient way to create a document with a uniform theme. With **exter- nal style sheets** (i.e., separate documents that contain only CSS rules), you can provide a uniform look and feel to an entire website. Different pages on a site can all use the same style sheet. When changes to the styles are required, the author needs to modify only a sin- gle CSS file to make style changes across the entire website. Note that while embedded style sheets separate content from presentation, both are still contained in a single file, pre- venting a web designer and a content author from working in parallel. External style sheets solve this problem by separating the content and style into separate files.

**Software Engineering Observation 5.1**

> _Always use an external style sheet when developing a website with multiple pages. External style sheets separate content from presentation, allowing for more consistent look-and-feel, more efficient development, and better performance._ 5.1

Figure 5.4 presents an external style sheet. Lines 1–2 are **CSS comments**. Like XHTML comments, CSS comments describe the content of a CSS document. Comments may be placed in any type of CSS code (i.e., inline styles, embedded style sheets and external style sheets) and always start with /\* and end with \*/. Text between these delim- iters is ignored by the browser.

```js
/\* Fig. 5.4: styles.css \*/
/\* External stylesheet \*/
```

**Fig. 5.4** | External style sheet. (Part 1 of 2.)

```js
body { font-family: arial, helvetica, sans-serif }

a.nodec { text-decoration: none }

a:hover { text-decoration: underline }

li em { font-weight: bold }

h1, em { text-decoration: underline }

ul { margin-left: 20px }

ul ul { font-size: .8em; }
```

**Fig. 5.4** | External style sheet. (Part 2 of 2.)

Figure 5.5 contains an XHTML document that references the external style sheet in Fig. 5.4. Lines 10–11 (Fig. 5.5) show a **link** element that uses the **rel** attribute to specify a **relationship** between the current document and another document. In this case, we declare the linked document to be a **stylesheet** for this document. The type attribute specifies the MIME type of the related document as text/css. The href attribute pro- vides the URL for the document containing the style sheet. In this case, styles.css is in the same directory as external.html.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 5.6: external.html -->
<!-- Linking an external style sheet. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Linking External Style Sheets</title>
 <link rel = "stylesheet" type = "text/css"
 href = "styles.css" />
 </head>
 <body>
 <h1>Shopping list for <em>Monday</em>:</h1>

 <ul>
 <li>Milk</li>
 <li>Bread
 <ul>
 <li>White bread</li>
 <li>Rye bread</li>
 <li>Whole wheat bread</li>
 </ul>
 </li>
 <li>Rice</li>
 <li>Potatoes</li>
```

**Fig. 5.5** | Linking an external style sheet. (Part 1 of 2.)

```js
<li>Pizza <em>with mushrooms</em></li>
</ul>

<p><em>Go to the</em>
<a class = "nodec" href = "http://www.deitel.com">
Grocery store</a>
</p>
</body>
</html>
```

**Fig. 5.5** | Linking an external style sheet. (Part 2 of 2.)

**Software Engineering Observation 5.2**

> _External style sheets are reusable. Creating them once and reusing them reduces programming effort._ 5.2

**Performance Tip 5.1**

> _Reusing external style sheets reduces load time and bandwidth usage on a server, since the style sheet can be downloaded once, stored by the web browser, and applied to all pages on a website._ 5.1

## Positioning Elements

Before CSS, controlling the positioning of elements in an XHTML document was diffi- cult—the browser determined positioning. CSS introduced the **position** property and a capability called **absolute positioning**, which gives authors greater control over how doc- ument elements are displayed. Figure 5.6 demonstrates absolute positioning.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 5.6: positioning.html -->
<!-- Absolute positioning of elements. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Absolute Positioning</title>
<style type = "text/css">
.bgimg { position: absolute;
top: 0px;
left: 0px;
z-index: 1 }
.fgimg { position: absolute;
top: 25px;
left: 100px;
z-index: 2 }
.text { position: absolute;
top: 25px;
left: 100px;
z-index: 3;
font-size: 20pt;
font-family: tahoma, geneva, sans-serif }
</style>
</head>
<body>
<p><img src = "bgimg.gif" class = "bgimg"
alt = "First positioned image" /></p>

<p><img src = "fgimg.gif" class = "fgimg"
alt = "Second positioned image" /></p>

<p class = "text">Positioned Text</p>
</body>
</html>
```

**Fig. 5.6** | Absolute positioning of elements. (Part 1 of 2.)

**Fig. 5.6** | Absolute positioning of elements. (Part 2 of 2.)

Normally, elements are positioned on the page in the order that they appear in the XHTML document. Lines 11–14 define a style called bgimg for the first img element (i.gif) on the page. Specifying an element’s position as absolute removes the element from the normal flow of elements on the page, instead positioning it according to the dis- tance from the top, left, right or bottom margins of its **containing block-level element** (i.e., an element such as body or p). Here, we position the element to be 0 pixels away from both the top and left margins of its containing element. In line 28, this style is applied to the image, which is contained in a p element.

The **z-index** property allows you to layer overlapping elements properly. Elements that have higher z-index values are displayed in front of elements with lower z-index

values. In this example, i.gif has the lowest z-index (1), so it displays in the background. The .fgimg CSS rule in lines 15–18 gives the circle image (circle.gif, in lines 31–32) a z-index of 2, so it displays in front of i.gif. The p element in line 34 (Positioned Text) is given a z-index of 3 in line 22, so it displays in front of the other two. If you do not specify a z-index or if elements have the same z-index value, the elements are placed from background to foreground in the order they are encountered in the document.

Absolute positioning is not the only way to specify page layout. Figure 5.7 demon- strates **relative positioning**, in which elements are positioned relative to other elements.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 5.7: positioning2.html -->
<!-- Relative positioning of elements. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Relative Positioning</title>
```

**Fig. 5.7** | Relative positioning of elements. (Part 1 of 2.)

```js
<style type = "text/css">
p { font-size: 1.3em;
font-family: verdana, arial, sans-serif }
span { color: red;
font-size: .6em;
height: 1em }
.super { position:
relative; top: -1ex }
.sub { position: relative;
bottom: -1ex }
.shiftleft { position: relative;
left: -1ex }
.shiftright { position: relative;
right: -1ex }
</style>
</head>
<body>
<p>The text at the end of this sentence
<span class = "super">is in superscript</span>.</p>

<p>The text at the end of this sentence
<span class = "sub">is in subscript</span>.</p>

<p>The text at the end of this sentence
<span class = "shiftleft">is shifted left</span>.</p>

<p>The text at the end of this sentence
<span class = "shiftright">is shifted right</span>.</p>
</body>
</html>
```

**Fig. 5.7** | Relative positioning of elements. (Part 2 of 2.)

Setting the position property to relative, as in class super (lines 16–17), lays out the element on the page and offsets it by the specified top, bottom, left or right value. Unlike absolute positioning, relative positioning keeps elements in the general flow of ele- ments on the page, so positioning is relative to other elements in the flow. Recall that ex (line 17) is the _x_\-height of a font, a relative-length measurement typically equal to the height of a lowercase _x_.

**Common Programming Error 5.2**

> _Because relative positioning keeps elements in the flow of text in your documents, be careful to avoid unintentionally overlapping text._ 5.2

**_Inline and Block-Level Elements_**
We introduce the **span** element in line 28. Lines 13–15 define the CSS rule for all span elements. The height of the span determines how much vertical space the span will occu- py. The font-size determines the size of the text inside the span.

Element span is a **grouping element**—it does not apply any inherent formatting to its contents. Its primary purpose is to apply CSS rules or id attributes to a section of text. Element span is an **inline-level element**—it applies formatting to text without changing the flow of the document. Examples of inline elements include span, img, a, em and strong. The **div** element is also a grouping element, but it is a **block-level element**. This means it is displayed on its own line and has a virtual box around it. Examples of block- level elements include div, p and heading elements (h1 through h6). We’ll discuss inline and block-level elements in more detail in Section 5.9.

## Backgrounds

CSS provides control over the background of block-level elements. CSS can set a back- ground color or add background images to XHTML elements. Figure 5.8 adds a corporate logo to the bottom-right corner of the document. This logo stays fixed in the corner even when the user scrolls up or down the screen.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 5.8: background.html -->
<!-- Adding background images and indentation. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Background Images</title>
<style type = "text/css">
body { background-image: url(logo.gif);
background-position: bottom right;
background-repeat: no-repeat;
background-attachment: fixed;
background-color: #eeeeee }
p { font-size: 18pt;
color: #1144AA;
text-indent: 1em;
font-family: arial, sans-serif; }
.dark { font-weight: bold }
</style>
</head>
```

**Fig. 5.8** | Adding background images and indentation. (Part 1 of 2.)

```js
<body>
<p>
This example uses the background-image,
background-position and background-attachment
styles to place the <span class = "dark">Deitel
&amp; Associates, Inc.</span> logo in the bottom,
right corner of the page. Notice how the logo
stays in the proper position when you resize the
browser window. The background-color fills in where
there is no image.
</p>
</body>
</html>
```

**Fig. 5.8** | Adding background images and indentation. (Part 2 of 2.)

The **background-image** property (line 11) specifies the image URL for the image logo.gif in the format url(fileLocation). You can also set the **background-color** prop- erty in case the image is not found (and to fill in where the image does not cover).

The **background-position** property (line 12) places the image on the page. The key- words top, bottom, center, left and right are used individually or in combination for vertical and horizontal positioning. An image can be positioned using lengths by speci- fying the horizontal length followed by the vertical length. For example, to position the image as horizontally centered (positioned at 50 percent of the distance across the screen) and 30 pixels from the top, use

background-position: 50% 30px;

The **background-repeat** property (line 13) controls background image **tiling**, which places multiple copies of the image next to each other to fill the background. Here, we set the tiling to no-repeat to display only one copy of the background image. Other values include repeat (the default) to tile the image vertically and horizontally, repeat-x to tile the image only horizontally or repeat-y to tile the image only vertically.

The final property setting, **background-attachment: fixed** (line 14), fixes the image in the position specified by **background-position**. Scrolling the browser window will not move the image from its position. The default value, scroll, moves the image as the user scrolls through the document.

Line 18 uses the **text-indent** property to indent the first line of text in the element by a specified amount, in this case 1em. An author might use this property to create a web page that reads more like a novel, in which the first line of every paragraph is indented.

Another CSS property that formats text is the **font-style** property, which allows the developer to set text to none, italic or oblique (oblique is simply more slanted than italic—the browser will default to italic if the system or font does not support oblique text).

## Element Dimensions

In addition to positioning elements, CSS rules can specify the actual dimensions of each page element. Figure 5.9 demonstrates how to set the dimensions of elements.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 5.9: width.html -->
<!-- Element dimensions and text alignment. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Box Dimensions</title>
<style type = "text/css">
div { background-color: #aaccff;
margin-bottom: .5em;
font-family: arial, helvetica, sans-serif }
</style>
</head>
<body>
<div style = "width: 20%">Here is some
text that goes in a box which is
set to stretch across twenty percent
of the width of the screen.</div>

<div style = "width: 80%; text-align: center">
Here is some CENTERED text that goes in a box
which is set to stretch across eighty percent of
the width of the screen.</div>

<div style = "width: 20%; height: 150px; overflow: scroll">
This box is only twenty percent of
the width and has a fixed height.
What do we do if it overflows? Set the
overflow property to scroll!</div>
</body>
</html>
```

**Fig. 5.9** | Element dimensions and text alignment. (Part 1 of 2.)

**Fig. 5.9** | Element dimensions and text alignment. (Part 2 of 2.)

The inline style in line 17 illustrates how to set the **width** of an element on screen; here, we indicate that the div element should occupy 20 percent of the screen width. The height of an element can be set similarly, using the **height** property. The height and width values also can be specified as relative or absolute lengths. For example,

width: 10em

sets the element’s width to 10 times the font size. Most elements are left aligned by default; however, this alignment can be altered to position the element elsewhere. Line 22 sets text in the element to be center aligned; other values for the **text-align** property include left and right.

In the third div, we specify a percentage height and a pixel width. One problem with setting both dimensions of an element is that the content inside the element can exceed the set boundaries, in which case the element is simply made large enough for all the con- tent to fit. However, in line 27, we set the **overflow** property to scroll, a setting that adds scroll bars if the text overflows the boundaries.

## Box Model and Text Flow

All block-level XHTML elements have a virtual box drawn around them based on what is known as the **box model**. When the browser renders elements using the box model, the content of each element is surrounded by **padding**, a **border** and a **margin** (Fig. 5.10).

CSS controls the border using three properties: **border-width**, **border-color** and **border-style**. We illustrate these three properties in Fig. 5.11.

**Fig. 5.10** | Box model for block-level elements.

Property border-width may be set to any valid CSS length (e.g., em, ex, px, etc.) or to the predefined value of thin, medium or thick. The **border-color property** sets the color. \[_Note:_ This property has different meanings for different style borders.\] The border-style options are none, hidden, dotted, dashed, solid, double, groove, ridge, inset and outset. Borders groove and ridge have opposite effects, as do inset and outset. When border-style is set to none, no border is rendered.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- Fig. 5.11: borders.html -->
<!-- Borders of block-level elements. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Borders</title>
<style type = "text/css">
div { text-align: center;
width: 50%;
position: relative;
left: 25%;
border-width: 4px }
.medium { border-width: medium }
.thin { border-width: thin }
.solid { border-style: solid }
.double { border-style: double }
.groove { border-style: groove }
.inset { border-style: inset }
.outset { border-style: outset }
.dashed { border-style: dashed }
.red { border-color: red }
.blue { border-color: blue }
</style>
</head>
<body>
<div class = "solid">Solid border</div><hr />
<div class = "double">Double border</div><hr />
<div class = "groove">Groove border</div><hr />
<div class = "inset">Inset border</div><hr />
<div class = "dashed">Dashed border</div><hr />
```

**Fig. 5.11** | Borders of block-level elements. (Part 1 of 2.)

```js
<div class = "thin red solid">Thin Red Solid border</div><hr />
<div class = "medium blue outset">Medium Blue Outset border</div>
</body>
</html>
```

**Fig. 5.11** | Borders of block-level elements. (Part 2 of 2.)

Each border property may be set for an individual side of the box (e.g., border-top- style or border-left-color). Note that we assign more than one class to an XHTML element by separating multiple class names with spaces, as shown in lines 36–37.

As we have seen with absolute positioning, it is possible to remove elements from the normal flow of text. **Floating** allows you to move an element to one side of the screen; other content in the document then flows around the floated element. Figure 5.12 dem- onstrates how floats and the box model can be used to control the layout of an entire page.

Looking at the XHTML code, we can see that the general structure of this document consists of a header and two main sections. Each section contains a subheading and a para- graph of text.

Block-level elements (such as divs) render with a line break before and after their con- tent, so the header and two sections will render vertically one on top of another. In the absence of our styles, the subheading divs would also stack vertically on top of the text in the p tags. However, in line 24 we set the float property to right in the class floated, which is applied to the subheadings. This causes each subheading div to float to the right edge of its containing element, while the paragraph of text will flow around it.

Line 17 assigns a margin of .5em to all paragraph tags. The **margin property** sets the space between the outside of the border and all other content on the page. In line 21, we assign .2em of padding to the floated divs. The **padding property** determines the distance between the content inside an element and the inside of the element’s border. Margins for individual sides of an element can be specified (lines 22–23) by using the properties **margin-top**, **margin-right**, **margin-left** and **margin-bottom**. Padding can be specified in the same way, using **padding-top**, **padding-right**, **padding-left** and **padding-bottom**. To see the effects of margins and padding, try putting the margin and padding properties inside comments and observing the difference.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 5.12: floating.html -->
<!-- Floating elements. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Flowing Text Around Floating Elements</title>

<style type = "text/css">
div.heading { background-color: #bbddff;
text-align: center;
font-family: arial, helvetica, sans-serif;
padding: .2em }
p { text-align: justify;
font-family: verdana, geneva, sans-serif;
margin: .5em }
div.floated { background-color: #eeeeee;
font-size: 1.5em;
font-family: arial, helvetica, sans-serif;
padding: .2em;
margin-left: .5em;
margin-bottom: .5em;
float: right;
text-align: right;
width: 50% }
div.section { border: 1px solid #bbddff }
</style>
</head>
<body>
<div class = "heading"><img src = "deitel.png" alt = "Deitel" />
</div>
<div class = "section">
<div class = "floated">Corporate Training and Publishing</div>
<p>Deitel &amp; Associates, Inc. is an internationally
recognized corporate training and publishing organization
specializing in programming languages, Internet/World
Wide Web technology and object technology education.
The company provides courses on Java, C++, Visual Basic, C#,
C, Internet and web programming, Object
Technology, and more.</p>
</div>
<div class = "section">
<div class = "floated">Leading-Edge Programming Textbooks</div>
<p>Through its publishing
partnership with Prentice Hall, Deitel &amp; Associates,
Inc. publishes leading-edge programming textbooks,
professional books, interactive CD-ROM-based multimedia
Cyber Classrooms, satellite courses and DVD and web-based
video courses.</p>
</div>
</body>
</html>
```

**Fig. 5.12** | Floating elements. (Part 1 of 2.)

In line 27, we assign a border to the section boxes using a shorthand declaration of the border properties. CSS allows shorthand assignments of borders to allow you to define all three border properties in one line. The syntax for this shorthand is border: <width> <style> <color>. Our border is one pixel thick, solid, and the same color as the back-ground-color property of the heading div (line 11). This allows the border to blend with the header and makes the page appear as one box with a line dividing its sections.

## Media Types

CSS **media types** allow a programmer to decide what a page should look like depending on the kind of media being used to display the page. The most common media type for a web page is the **screen media type**, which is a standard computer screen. Other media types in CSS 2 include **handheld**, **braille**, **aural** and **print**. The handheld medium is designed for mobile Internet devices, while braille is for machines that can read or print web pages in braille. aural styles allow the programmer to give a speech-synthesizing web browser more information about the content of the web page. This allows the browser to present a web page in a sensible manner to a visually impaired person. The print media type affects a web page’s appearance when it is printed. For a complete list of CSS media types, see http://www.w3.org/TR/REC-CSS2/media.html#media-types.

Media types allow a programmer to decide how a page should be presented on any one of these media without affecting the others. Figure 5.13 gives a simple example that applies one set of styles when the document is viewed on the screen, and another when the document is printed. To see the difference, look at the screen captures below the paragraph or use the **Print Preview** feature in Internet Explorer or Firefox.

In line 11, we begin a block of styles that applies to all media types, declared by @media all and enclosed in curly braces ({ and }). In lines 13–18, we define some styles for all media types. Lines 20–27 set styles to be applied only when the page is printed, beginning with the declaration @media print and enclosed in curly braces.

The styles we applied for all media types look nice on a screen but would not look good on a printed page. A colored background would use a lot of ink, and a black-and- white printer may print a page that’s hard to read because there isn’t enough contrast

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 5.13: mediatypes.html -->
<!-- CSS media types. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Media Types</title>
<style type = "text/css">
@media all
{
body { background-color: #4488aa }
h1 { font-family: verdana, helvetica, sans-serif;
color: #aaffcc }
p { font-size: 12pt;
color: white;
font-family: arial, sans-serif }
} /\* end @media all declaration. \*/
@media print
{
body { background-color: white }
h1 { color: #008844}
p { font-size: 14pt;
color: #4488aa;
font-family: "times new roman", times, serif }
} /\* end @media print declaration. \*/
</style>
</head>
<body>
<h1>CSS Media Types Example</h1>

<p>
This example uses CSS media types to vary how the page
appears in print and how it appears on any other media.
This text will appear one font on the screen and a
different font on paper or in a print preview. To see
the difference in Internet Explorer, go to the Print
menu and select Print Preview. In Firefox, select Print
Preview from the File menu.
</p>
</body>
</html>
```

**Fig. 5.13** | CSS media types. (Part 1 of 2.)

**Fig. 5.13** | CSS media types. (Part 2 of 2.)

between the colors. Also, sans-serif fonts like arial, helvetica, and geneva are easier to read on a screen, while serif fonts like times new roman are easier to read on paper.

**Look-and-Feel Observation 5.1**

> _Pages with dark background colors and light text use a lot of ink and may be difficult to read when printed, especially on a black-and white-printer. Use the print media type to avoid this._ 5.1

**Look-and-Feel Observation 5.2**

> _In general, sans-serif fonts look better on a screen, while serif fonts look better on paper. The print media type allows your web page to display sans-serif font on a screen and change to a serif font when it is printed._ 5.2

To solve these problems, we apply specific styles for the print media type. We change the background-color of the body, the color of the h1 tag, and the font-size, color, and font-family of the p tag to be more suited for printing and viewing on paper. Notice that most of these styles conflict with the declarations in the section for all media types. Since the print media type has higher specificity than all media types, the print styles override the styles for all media types when the page is printed. Since the font-family property of the h1 tag is not overridden in the print section, it retains its old value even when the page is printed.

## Building a CSS Drop-Down Menu

Drop-down menus are a good way to provide navigation links on a website without using a lot of screen space. In this section, we take a second look at the :hover pseudoclass and introduce the display property to create a drop-down menu using CSS and XHTML.

We’ve already seen the :hover pseudoclass used to change a link’s style when the mouse hovers over it. We will use this feature in a more advanced way to cause a menu to appear when the mouse hovers over a menu button. The other important property we need is the **display** property. This allows a programmer to decide whether an element is rendered on the page or not. Possible values include block, inline and none. The block

and inline values display the element as a block element or an inline element, while none stops the element from being rendered. The code for the drop-down menu is shown in Fig. 5.14.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 5.14: dropdown.html -->
<!-- CSS drop-down menu. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>
Drop-Down Menu
</title>
<style type = "text/css">
body { font-family: arial, sans-serif }
div.menu { font-weight: bold;
color: white;
border: 2px solid #225599;
text-align: center;
width: 10em;
background-color: #225599 }
div.menu:hover a { display: block }
div.menu a { display: none;
border-top: 2px solid #225599;
background-color: white;
width: 10em;
text-decoration: none;
color: black }
div.menu a:hover { background-color: #dfeeff }
</style>
</head>
<body>
<div class = "menu">Menu
<a href = "#">Home</a>
<a href = "#">News</a>
```

**Fig. 5.14** | CSS drop-down menu. (Part 1 of 2.)

```js
<a href = "#">Articles</a>
<a href = "#">Blog</a>
<a href = "#">Contact</a>
</div>
</body>
</html>
```

**Fig. 5.14** | CSS drop-down menu. (Part 2 of 2.)

First let’s look at the XHTML code. In lines 31–37, a div of class menu has the text “Menu” and five links inside it. This is our drop-down menu. The behavior we want is as follows: the text that says “Menu” should be the only thing visible on the page, unless the mouse is over the menu div. When the mouse cursor hovers over the menu div, we want the links to appear below the menu for the user to choose from.

To see how we get this functionality, let’s look at the CSS code. There are two lines that give us the drop-down functionality. Line 21 selects all the links inside the menu div and sets their display value to none. This instructs the browser not to render the links. The other important style is in line 20. The selectors in this line are similar to those in line 21, except that this line selects only the a (anchor) elements that are children of a menu div that has the mouse over it. The display: block in this line means that when the mouse is over the menu div, the links inside it will be displayed as block-level elements.

The selectors in line 27 are also similar to lines 20 and 21. This time, however, the style is applied only to any a element that is a child of the menu div when that child has the mouse cursor over it. This style changes the background-color of the currently high- lighted menu option. The rest of the CSS simply adds aesthetic style to the components of our menu. Look at the screen captures or run the code example to see the menu in action.

This drop-down menu is just one example of more advanced CSS formatting. Many additional resources are available online for CSS navigation menus and lists. Specifically, check out List-o-Matic, an automatic CSS list generator located at www.accessify.com/ tools-and-wizards/developer-tools/list-o-matic/ and Dynamic Drive’s library of vertical and horizontal CSS menus at www.dynamicdrive.com/style/.

## User Style Sheets

Users can define their own **user style sheets** to format pages based on their preferences. For example, people with visual impairments may want to increase the page’s text size. Web page authors need to be careful not to inadvertently override user preferences with defined styles. This section discusses possible conflicts between **author styles** and **user styles**.

Figure 5.15 contains an author style. The font-size is set to 9pt for all <p> tags that have class note applied to them.

User style sheets are external style sheets. Figure 5.16 shows a user style sheet that sets the body’s font-size to 20pt, color to yellow and background-color to #000080.

User style sheets are not linked to a document; rather, they are set in the browser’s options. To add a user style sheet in IE7, select **Internet Options...**, located in the **Tools** menu. In the **Internet Options** dialog (Fig. 5.17) that appears, click **Accessibility...**, check the **Format documents using my style sheet** checkbox, and type the location of the user style sheet. Internet Explorer 7 applies the user style sheet to any document it loads. To add a user style sheet in Firefox, find your Firefox profile using the instructions at

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 5.15: user\_absolute.html -->
<!-- pt measurement for text size. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>User Styles</title>
<style type = "text/css">
.note { font-size: 9pt }
</style>
</head>
<body>
<p>Thanks for visiting my website. I hope you enjoy it.
</p><p class = "note">Please Note: This site will be
moving soon. Please check periodically for updates.</p>
</body>
</html>
```

**Fig. 5.15** | pt measurement for text size. (Part 1 of 2.)

**Fig. 5.15** | pt measurement for text size. (Part 2 of 2.)

**1** /\* Fig. 5.16: userstyles.css \*/
**2** /\* A user stylesheet \*/
**3** body { font-size: 20pt;
**4** color: yellow;
**5** background-color: #000080 }

**Fig. 5.16** | User style sheet.

www.mozilla.org/support/firefox/profile#locate and place a style sheet called userContent.css in the chrome subdirectory.

The web page from Fig. 5.15 is displayed in Fig. 5.18, with the user style sheet from Fig. 5.16 applied.

In this example, if users define their own font-size in a user style sheet, the author style has a higher precedence and overrides the user style. The 9pt font specified in the author style sheet overrides the 20pt font specified in the user style sheet. This small font

**Fig. 5.17** | User style sheet in Internet Explorer 7. (Part 1 of 2.)

**Fig. 5.17** | User style sheet in Internet Explorer 7. (Part 2 of 2.)

**Fig. 5.18** | User style sheet applied with pt measurement.

may make pages difficult to read, especially for individuals with visual impairments. You can avoid this problem by using relative measurements (e.g., em or ex) instead of absolute measurements, such as pt. Figure 5.19 changes the font-size property to use a relative measurement (line 11) that does not override the user style set in Fig. 5.16. Instead, the font size displayed is relative to the one specified in the user style sheet. In this case, text enclosed in the <p> tag displays as 20pt, and <p> tags that have class note applied to them are displayed in 15pt (.75 times 20pt).

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 5.19: user\_relative.html -->
<!-- em measurement for text size. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>User Styles</title>
```

**Fig. 5.19** | em measurement for text size. (Part 1 of 2.)

```js
<style type = "text/css">
.note { font-size: .75em }
</style>
</head>
<body>
<p>Thanks for visiting my website. I hope you enjoy it.
</p><p class = "note">Please Note: This site will be
moving soon. Please check periodically for updates.</p>
</body>
</html>
```

**Fig. 5.19** | em measurement for text size. (Part 2 of 2.)

Figure 5.20 displays the web page from Fig. 5.19 with the user style sheet from Fig. 5.16 applied. Note that the second line of text displayed is larger than the same line of text in Fig. 5.18.

**Fig. 5.20** | User style sheet applied with em measurement.

## CSS 3

The W3C is currently developing CSS 3 and some browsers are beginning to implement some of the new features that will be in the **CSS 3** specification. We discuss a few of the upcoming features that will most likely be included in CSS 3.

CSS 3 will allow for more advanced control of borders. In addition to the border-style, border-color, and border-width properties, you will be able to set multiple border colors, use images for borders, add shadows to boxes, and create borders with rounded corners.

Background images will be more versatile in CSS 3, allowing the programmer to set the size of a background image, specify an offset to determine where in the element the image should be positioned, and use multiple background images in one element. There will also be properties to set shadow effects on text and more options for text overflow when the text is too long to fit in its containing element.

Additional features will include resizable boxes, enhanced selectors, multicolumn lay- outs, and more developed speech (aural) styles. The Web Resources section points you to the Deitel CSS Resource Center, where you can find links to the latest information on the development and features of CSS 3.

## Wrap-Up

In this chapter we introduced Cascading Style Sheets, a technology that allows us to create flexibility in formatting XHTML documents. We learned how to define styles inline, us- ing embedded style sheets, and linking to external style sheets. We learned that external style sheets achieve true separation of content and presentation by putting each in its own file. We discussed how style sheets “cascade” to resolve conflicting style property defini- tions. We used absolute and relative positioning, background images and colors, and set the dimensions of XHTML elements.

We also learned about the box model and how to use borders, padding, and margins, as well as how to float elements to one side of the page. We provided examples of a web page with separate styles for the print media type, a drop-down menu using the display

property, and learned more about accessibility and user styles. XHTML and CSS are the basic technologies behind web pages. In the next chapter,

we begin our treatment of JavaScript, which allows us to make more interactive and dynamic pages.

## Web Resources

http://www.deitel.com/css21
The Deitel CSS Resource Center contains links to some of the best CSS information on the web. There you’ll find categorized links to tutorials, references, code examples, demos, videos, and more. Check out the demos section for more advanced examples of layouts, menus, and other web page components.

---
title: "Cascading Style Sheets™"
weight: 2
---

**O B J E C T I V E S** In this chapter you will learn:

■ To control the appearance of a website by creating style sheets.

■ To use a style sheet to give all the pages of a website the same look and feel.

■ To use the class attribute to apply styles.

■ To specify the precise font, size, color and other properties of displayed text.

■ To specify element backgrounds and colors.

■ To understand the box model and how to control margins, borders and padding.

■ To use style sheets to separate presentation from content.

**_Fashions fade, style is eternal._ —Yves Saint Laurent**

**_A style does not go out of style as long as it adapts itself to its period. When there is an incompatibility between the style and a certain state of mind, it is never the style that triumphs._ —Coco Chanel**

**_How liberating to work in the margins, outside a central perception._ —Don DeLillo**

**_I’ve gradually risen from lower-class background to lower-class foreground._ —Marvin Cohen**

**160** Chapter 5 Cascading Style Sheets™ (CSS) **O**

**u tl**

**in e**

**5.1 Introduction** In Chapter 4, we introduced the Extensible HyperText Markup Language (XHTML) for marking up information to be rendered in a browser. In this chapter, we shift our focus to formatting and presenting information. To do this, we use a W3C technology called **Cas- cading Style Sheets™** (**CSS**) that allows document authors to specify the presentation of elements on a web page (e.g., fonts, spacing, colors) separately from the structure of the document (section headers, body text, links, etc.). This **separation of structure from pre- sentation** simplifies maintaining and modifying a web page.

XHTML was designed to specify the content and structure of a document. Though it has some attributes that control presentation, it is better not to mix presentation with content. If a website’s presentation is determined entirely by a style sheet, a web designer can simply swap in a new style sheet to completely change the appearance of the site. CSS provides a way to apply style outside of XHTML, allowing the XHTML to dictate the content while the CSS dictates how it’s presented.

As with XHTML, the W3C provides a CSS code validator located at jigsaw.w3.org/ css-validator/. It is a good idea to validate all CSS code with this tool to make sure that your code is correct and works on as many browsers as possible.

CSS is a large topic. As such, we can introduce only the basic knowledge of CSS that you’ll need to understand the examples and exercises in the rest of the book. For more CSS references and resources, check out our CSS Resource Center at www.deitel.com/css21.

The W3C’s CSS specification is currently in its second major version, with a third in development. The current versions of most major browsers support much of the function- ality in CSS 2. This allows programmers to make full use of its features. In this chapter, we introduce CSS, demonstrate some of the features introduced in CSS 2 and discuss some of the upcoming CSS 3 features. As you read this book, open each XHTML docu- ment in your web browser so you can view and interact with it in a web browser, as it was originally intended.

**5.1** Introduction **5.2** Inline Styles **5.3** Embedded Style Sheets **5.4** Conflicting Styles **5.5** Linking External Style Sheets **5.6** Positioning Elements **5.7** Backgrounds **5.8** Element Dimensions **5.9** Box Model and Text Flow

**5.10** Media Types **5.11** Building a CSS Drop-Down Menu **5.12** User Style Sheets **5.13** CSS 3 **5.14** Wrap-Up **5.15** Web Resources

Summary | Terminology | Self-Review Exercise | Answers to Self-Review Exercises | Exercises

5.2 Inline Styles **161**

Remember that the examples in this book have been tested in Internet Explorer 7 and Firefox 2. The latest versions of many other browsers (e.g., Safari, Opera, Konqueror) should render this chapter’s examples properly, but we have not tested them. Some exam- ples in this chapter _will not work_ in older browsers, such as Internet Explorer 6 and earlier. Make sure you have either Internet Explorer 7 (Windows only) or Firefox 2 (available for all major platforms) installed before running the examples in this chapter.

**5.2 Inline Styles** You can declare document styles in several ways. This section presents **inline styles** that declare an individual element’s format using the XHTML attribute **style**. Inline styles override any other styles applied using the techniques we discuss later in the chapter. Figure 5.1 applies inline styles to p elements to alter their font size and color.

**Good Programming Practice 5.1** _Inline styles do not truly separate presentation from content. To apply similar styles to multiple elements, use embedded style sheets or external style sheets, introduced later in this chapter._ 5.1

The first inline style declaration appears in line 17. Attribute style specifies an ele- ment’s style. Each **CSS property** (**font-size** in this case) is followed by a colon and a value. In line 17, we declare this particular p element to use 20-point font size.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 5.1: inline.html --> **6** <!-- Using inline styles --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Inline Styles</title>

**10** </head> **11** <body> **12** <p>This text does not have any style applied to it.</p> **13 14** <!-- The style attribute allows you to declare --> **15** <!-- inline styles. Separate multiple style properties --> **16** <!-- with a semicolon. --> **17** This text has the **18** <em>font-size</em> style applied to it, making it 20pt. **19** </p> **20 21 22** This text has the <em>font-size</em> and **23** <em>color</em> styles applied to it, making it **24** 20pt. and light blue.</p> **25** </body> **26** </html>

**Fig. 5.1** | Using inline styles. (Part 1 of 2.)

<p style = "font-size: 20pt">

<p style = "font-size: 20pt; color: #6666ff">

**162** Chapter 5 Cascading Style Sheets™ (CSS)

Line 21 specifies the two properties, font-size and **color**, separated by a semicolon. In this line, we set the given paragraph’s color to light blue, using the hexadecimal code #6666ff. Color names may be used in place of hexadecimal codes. We provide a list of hexadecimal color codes and color names in Appendix B, XHTML Colors.

**5.3 Embedded Style Sheets** A second technique for using style sheets is **embedded style sheets**. Embedded style sheets enable a you to embed an entire CSS document in an XHTML document’s head section. To achieve this separation between the CSS code and the XHTML that it styles, we will use **CSS selectors**. Figure 5.2 creates an embedded style sheet containing four styles.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 5.2: embedded.html --> **6** <!-- Embedded style sheets. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Style Sheets</title>

**10 11** <!-- this begins the style sheet section --> **12 13 14 15 16 17 18 19 20** </head>

**Fig. 5.2** | Embedded style sheets. (Part 1 of 2.)

**Fig. 5.1** | Using inline styles. (Part 2 of 2.)

<style type = "text/css"> em { font-weight: bold;

color: black } h1 { font-family: tahoma, helvetica, sans-serif } p { font-size: 12pt;

font-family: arial, sans-serif } .special { color: #6666ff }

</style>

5.3 Embedded Style Sheets **163**

The style element (lines 12–19) defines the embedded style sheet. Styles placed in the head apply to matching elements wherever they appear in the entire document. The style element’s type attribute specifies the **Multipurpose Internet Mail Extensions (MIME) type** that describes a file’s content. CSS documents use the MIME type text/

css. Other MIME types include image/gif (for GIF images), text/javascript (for the JavaScript scripting language, which we discuss in Chapters 6–11), and more.

**21** <body> **22** <!-- this class attribute applies the .special style --> **23 24 25** <p>Deitel &amp; Associates, Inc. is an internationally **26** recognized corporate training and publishing organization **27** specializing in programming languages, Internet/World **28** Wide Web technology and object technology education. **29** The company provides courses on Java, C++, Visual Basic, **30** C#, C, Internet and World Wide Web programming, Object **31** Technology, and more.</p> **32 33** <h1>Clients</h1> **34** <p class = "special"> The company's clients include many **35** <em>Fortune 1000 companies</em>, government agencies, **36** branches of the military and business organizations. **37** Through its publishing partnership with Prentice Hall, **38** Deitel &amp; Associates, Inc. publishes leading-edge **39** programming textbooks, professional books, interactive **40** web-based multimedia Cyber Classrooms, satellite **41** courses and World Wide Web courses.</p> **42** </body> **43** </html>

**Fig. 5.2** | Embedded style sheets. (Part 2 of 2.)

<h1 class = "special">Deitel &amp; Associates, Inc.</h1>

**164** Chapter 5 Cascading Style Sheets™ (CSS)

The body of the style sheet (lines 13–18) declares the **CSS rules** for the style sheet. A CSS selector determines which elements will be styled according to a rule. Our first rule begins with the selector em (line 13) to select all em elements in the document. The **font-**

**weight** property in line 13 specifies the “boldness” of text. Possible values are bold, normal (the default), bolder (bolder than bold text) and lighter (lighter than normal text). Bold- ness also can be specified with multiples of 100, from 100 to 900 (e.g., 100, 200, …, 900). Text specified as normal is equivalent to 400, and bold text is equivalent to 700. However, many systems do not have fonts that can scale with this level of precision, so using the values from 100 to 900 might not display the desired effect.

In this example, all em elements will be displayed in a bold font. We also apply styles to all h1 (line 15) and p (lines 16–17) elements. The body of each rule is enclosed in curly braces ({ and }).

Line 18 uses a new kind of selector to declare a **style class** named special. Style classes define styles that can be applied to any element. In this example, we declare class special, which sets color to blue. We can apply this style to any element type, whereas the other rules in this style sheet apply only to specific element types defined in the style sheet (i.e., em, h1 or p). Style-class declarations are preceded by a period. We will discuss how to apply a style class momentarily.

CSS rules in embedded style sheets use the same syntax as inline styles; the property name is followed by a colon (:) and the value of the property. Multiple properties are sep- arated by semicolons (;). In the rule for em elements, the color property specifies the color of the text, and property font-weight makes the font bold.

The **font-family** property (line 15) specifies the name of the font to use. Not all users have the same fonts installed on their computers, so CSS allows you to specify a comma- separated list of fonts to use for a particular style. The browser attempts to use the fonts in the order they appear in the list. It’s advisable to end a font list with a **generic font family name** in case the other fonts are not installed on the user’s computer. In this example, if the tahoma font is not found on the system, the browser will look for the helvetica font. If neither is found, the browser will display its default sans-serif font. Other generic font families include serif (e.g., times new roman, Georgia), cursive (e.g., script), fantasy (e.g., critter) and monospace (e.g., courier, fixedsys).

The **font-size** property (line 16) specifies a 12-point font. Other possible measure- ments in addition to pt (point) are introduced later in the chapter. Relative values— xx-

small, x-small, small, smaller, medium, large, larger, x-large and xx-large—also can be used. Generally, relative values for font-size are preferred over point sizes because an author does not know the specific measurements of the display for each client. Relative font-size values permit more flexible viewing of web pages.

For example, a user may wish to view a web page on a handheld device with a small screen. Specifying an 18-point font size in a style sheet will prevent such a user from seeing more than one or two characters at a time. However, if a relative font size is specified, such as large or larger, the actual size is determined by the browser that displays the font. Using relative sizes also makes pages more accessible to users with disabilities. Users with impaired vision, for example, may configure their browser to use a larger default font, upon which all relative sizes are based. Text that the author specifies to be smaller than the main text still displays in a smaller size font, yet it is clearly visible to each user. Acces- sibility is an important consideration—in 1998, congress passed the Section 508 Amend-

5.4 Conflicting Styles **165**

ment to the Rehabilitation Act of 1973, mandating that websites of government agencies are required to be accessible to disabled users.

Line 23 uses the XHTML attribute **class** in an h1 element to apply a style class—in this case class special (declared with the .special selector in the style sheet on line 18). When the browser renders the h1 element, note that the text appears on screen with the properties of both an h1 element (arial or sans-serif font defined in line 17) and the .special style class applied (the color #6666ff defined in line 18). Also notice that the browser still applies its own default style to the h1 element—the header is still displayed in a large font size. Similarly, all em elements will still be italicized by the browser, but they will also be bold as a result of our style rule.

The formatting for the p element and the .special class is applied to the text in lines 34–41. In many cases, the styles applied to an element (the **parent** or **ancestor element**) also apply to the element’s nested elements (**child** or **descendant elements**). The em element nested in the p element in line 35 **inherits** the style from the p element (namely, the 12- point font size in line 16) but retains its italic style. In other words, styles defined for the paragraph and not defined for the em element is applied to the em element. Because mul- tiple values of one property can be set or inherited on the same element, they must be reduced to one style per element before being rendered. We discuss the rules for resolving these conflicts in the next section.

**5.4 Conflicting Styles** Styles may be defined by a **user**, an **author** or a **user agent** (e.g., a web browser). A user is a person viewing your web page, you are the author—the person who writes the docu- ment—and the user agent is the program used to render and display the document. Styles “cascade,” or flow together, such that the ultimate appearance of elements on a page results from combining styles defined in several ways. Styles defined by the user take precedence over styles defined by the user agent, and styles defined by authors take precedence over styles defined by the user.

Most styles defined for parent elements are also inherited by child (nested) elements. While it makes sense to inherit most styles, such as font properties, there are certain prop- erties that we don’t want to be inherited. Consider for example the background-image

property, which allows the programmer to set an image as the background of an element. If the body element is assigned a background image, we don’t want the same image to be in the background of every element in the body of our page. Instead, the background-

image property of all child elements retains its default value of none. In this section, we discuss the rules for resolving conflicts between styles defined for elements and styles inherited from parent and ancestor elements.

Figure 5.2 presented an example of **inheritance** in which a child em element inherited the font-size property from its parent p element. However, in Fig. 5.2, the child em ele- ment had a color property that conflicted with (i.e., had a different value than) the color property of its parent p element. Properties defined for child and descendant elements have a greater **specificity** than properties defined for parent and ancestor elements. Con- flicts are resolved in favor of properties with a higher specificity. In other words, the styles explicitly defined for a child element are more specific than the styles defined for the child’s parent element; therefore, the child’s styles take precedence. Figure 5.3 illustrates examples of inheritance and specificity.

**166** Chapter 5 Cascading Style Sheets™ (CSS)

Line 12 applies property text-decoration to all a elements whose class attribute is set to nodec. The text-decoration property applies **decorations** to text in an element. By default, browsers underline the text of an a (anchor) element. Here, we set the text-dec- oration property to none to indicate that the browser should not underline hyperlinks. Other possible values for text-decoration include overline, line-through, underline and blink. \[_Note:_ blink is not supported by Internet Explorer.\] The .nodec appended to a is a more specific class selector; this style will apply only to a (anchor) elements that specify nodec in their class attribute.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 5.3: advanced.html --> **6** <!-- Inheritance in style sheets. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>More Styles</title>

**10** <style type = "text/css"> **11** body { font-family: arial, helvetica, sans-serif } **12 13 14 15 16** ul { margin-left: 20px } **17** ul ul { font-size: .8em } **18** </style> **19** </head> **20** <body> **21** <h1>Shopping list for Monday:</h1> **22 23** <ul> **24** <li>Milk</li> **25** <li>Bread **26** <ul> **27** <li>White bread</li> **28** <li>Rye bread</li> **29** <li>Whole wheat bread</li> **30** </ul> **31** </li> **32** <li>Rice</li> **33** <li>Potatoes</li> **34** <li>Pizza <em>with mushrooms</em></li> **35** </ul> **36 37** <p><em>Go to the</em> **38** <a class = "nodec" href = "http://www.deitel.com"> **39** Grocery store</a> **40** </p> **41** </body> **42** </html>

**Fig. 5.3** | Inheritance in style sheets. (Part 1 of 2.)

a.nodec { text-decoration: none } a:hover { text-decoration: underline } li em { font-weight: bold } h1, em { text-decoration: underline }

5.4 Conflicting Styles **167**

**Portability Tip 5.1** \_To ensure that your style sheets work in various web browsers, test them on all the client web browsers that will render documents using your styles, as well as using the W3C CSS Validator.\_5.1

Line 13 specifies a style for hover, which is a **pseudoclass**. Pseudoclasses give the author access to content not specifically declared in the document. The **hover pseudoclass** is activated dynamically when the user moves the mouse cursor over an element. Note that pseudoclasses are separated by a colon (with no surrounding spaces) from the name of the element to which they are applied.

**Common Programming Error 5.1** _Including a space before or after the colon separating a pseudoclass from the name of the element to which it is applied is an error that prevents the pseudoclass from being applied properly._ 5.1

Line 14 causes all em elements that are children of li elements to be bold. In the screen output of Fig. 5.3, note that **Go to the** (contained in an em element in line 37) does not appear bold, because the em element is not in an li element. However, the em element con- taining **with mushrooms** (line 34) is nested in an li element; therefore, it is formatted in bold. The syntax for applying rules to multiple elements is similar. In line 15, we separate the selectors with a comma to apply an underline style rule to all h1 and all em elements.

Line 16 assigns a left margin of 20 pixels to all ul elements. We will discuss the margin properties in detail in Section 5.9. A pixel is a **relative-length measurement**—it varies in

**Fig. 5.3** | Inheritance in style sheets. (Part 2 of 2.)

**168** Chapter 5 Cascading Style Sheets™ (CSS)

size, based on screen resolution. Other relative lengths include **em** (the _M_\-height of the font, which is usually set to the height of an uppercase _M_), **ex** (the _x_\-height of the font, which is usually set to the height of a lowercase _x_) and percentages (e.g., font-size: 50%). To set an element to display text at 150 percent of its default text size, the author could use the syntax

font-size: 1.5em

Alternatively, you could use

font-size: 150%

Other units of measurement available in CSS are **absolute-length measurements**—i.e., units that do not vary in size based on the system. These units are **in** (inches), **cm** (centi- meters), **mm** (millimeters), **pt** (points; 1 pt = 1/72 in) and **pc** (picas; 1 pc = 12 pt). Line 17 specifies that all nested unordered lists (ul elements that are descendants of ul elements) are to have font size .8em. \[_Note:_ When setting a style property that takes a measurement (e.g. font-size, margin-left), no units are necessary if the value is zero.\]

**Good Programming Practice 5.2** _Whenever possible, use relative-length measurements. If you use absolute-length measurements, your document may not be readable on some client browsers (e.g., wireless phones)._ 5.2

**5.5 Linking External Style Sheets** Style sheets are a convenient way to create a document with a uniform theme. With **exter- nal style sheets** (i.e., separate documents that contain only CSS rules), you can provide a uniform look and feel to an entire website. Different pages on a site can all use the same style sheet. When changes to the styles are required, the author needs to modify only a sin- gle CSS file to make style changes across the entire website. Note that while embedded style sheets separate content from presentation, both are still contained in a single file, pre- venting a web designer and a content author from working in parallel. External style sheets solve this problem by separating the content and style into separate files.

**Software Engineering Observation 5.1** _Always use an external style sheet when developing a website with multiple pages. External style sheets separate content from presentation, allowing for more consistent look-and-feel, more efficient development, and better performance._ 5.1

Figure 5.4 presents an external style sheet. Lines 1–2 are **CSS comments**. Like XHTML comments, CSS comments describe the content of a CSS document. Comments may be placed in any type of CSS code (i.e., inline styles, embedded style sheets and external style sheets) and always start with /\* and end with \*/. Text between these delim- iters is ignored by the browser.

**1** /\* Fig. 5.4: styles.css \*/ **2** /\* External stylesheet \*/ **3**

**Fig. 5.4** | External style sheet. (Part 1 of 2.)

5.5 Linking External Style Sheets **169**

Figure 5.5 contains an XHTML document that references the external style sheet in Fig. 5.4. Lines 10–11 (Fig. 5.5) show a **link** element that uses the **rel** attribute to specify a **relationship** between the current document and another document. In this case, we declare the linked document to be a **stylesheet** for this document. The type attribute specifies the MIME type of the related document as text/css. The href attribute pro- vides the URL for the document containing the style sheet. In this case, styles.css is in the same directory as external.html.

**4** body { font-family: arial, helvetica, sans-serif } **5 6** a.nodec { text-decoration: none } **7 8** a:hover { text-decoration: underline } **9**

**10** li em { font-weight: bold } **11 12** h1, em { text-decoration: underline } **13 14** ul { margin-left: 20px } **15 16** ul ul { font-size: .8em; }

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 5.6: external.html --> **6** <!-- Linking an external style sheet. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Linking External Style Sheets</title>

**10 11 12** </head> **13** <body> **14** <h1>Shopping list for <em>Monday</em>:</h1> **15 16** <ul> **17** <li>Milk</li> **18** <li>Bread **19** <ul> **20** <li>White bread</li> **21** <li>Rye bread</li> **22** <li>Whole wheat bread</li> **23** </ul> **24** </li> **25** <li>Rice</li> **26** <li>Potatoes</li>

**Fig. 5.5** | Linking an external style sheet. (Part 1 of 2.)

**Fig. 5.4** | External style sheet. (Part 2 of 2.)

<link rel = "stylesheet" type = "text/css" href = "styles.css" />

**170** Chapter 5 Cascading Style Sheets™ (CSS)

**Software Engineering Observation 5.2** _External style sheets are reusable. Creating them once and reusing them reduces programming effort._ 5.2

**Performance Tip 5.1** _Reusing external style sheets reduces load time and bandwidth usage on a server, since the style sheet can be downloaded once, stored by the web browser, and applied to all pages on a website._ 5.1

**5.6 Positioning Elements** Before CSS, controlling the positioning of elements in an XHTML document was diffi- cult—the browser determined positioning. CSS introduced the **position** property and a capability called **absolute positioning**, which gives authors greater control over how doc- ument elements are displayed. Figure 5.6 demonstrates absolute positioning.

**27** <li>Pizza <em>with mushrooms</em></li> **28** </ul> **29 30** <p><em>Go to the</em> **31** <a class = "nodec" href = "http://www.deitel.com"> **32** Grocery store</a> **33** </p> **34** </body> **35** </html>

**Fig. 5.5** | Linking an external style sheet. (Part 2 of 2.)

5.6 Positioning Elements **171**

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 5.6: positioning.html --> **6** <!-- Absolute positioning of elements. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Absolute Positioning</title>

**10** <style type = "text/css"> **11 12 13 14 15 16 17 18 19 20 21 22 23** font-size: 20pt; **24** font-family: tahoma, geneva, sans-serif } **25** </style> **26** </head> **27** <body> **28** <p><img src = "bgimg.gif" class = "bgimg" **29** alt = "First positioned image" /></p> **30 31** <p><img src = "fgimg.gif" class = "fgimg" **32** alt = "Second positioned image" /></p> **33 34** <p class = "text">Positioned Text</p> **35** </body> **36** </html>

**Fig. 5.6** | Absolute positioning of elements. (Part 1 of 2.)

.bgimg { position: absolute; top: 0px; left: 0px; z-index: 1 }

.fgimg { position: absolute; top: 25px; left: 100px; z-index: 2 }

.text { position: absolute; top: 25px; left: 100px; z-index: 3;

**172** Chapter 5 Cascading Style Sheets™ (CSS)

Normally, elements are positioned on the page in the order that they appear in the XHTML document. Lines 11–14 define a style called bgimg for the first img element (i.gif) on the page. Specifying an element’s position as absolute removes the element from the normal flow of elements on the page, instead positioning it according to the dis- tance from the top, left, right or bottom margins of its **containing block-level element** (i.e., an element such as body or p). Here, we position the element to be 0 pixels away from both the top and left margins of its containing element. In line 28, this style is applied to the image, which is contained in a p element.

The **z-index** property allows you to layer overlapping elements properly. Elements that have higher z-index values are displayed in front of elements with lower z-index

values. In this example, i.gif has the lowest z-index (1), so it displays in the background. The .fgimg CSS rule in lines 15–18 gives the circle image (circle.gif, in lines 31–32) a z-index of 2, so it displays in front of i.gif. The p element in line 34 (Positioned Text) is given a z-index of 3 in line 22, so it displays in front of the other two. If you do not specify a z-index or if elements have the same z-index value, the elements are placed from background to foreground in the order they are encountered in the document.

Absolute positioning is not the only way to specify page layout. Figure 5.7 demon- strates **relative positioning**, in which elements are positioned relative to other elements.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 5.7: positioning2.html --> **6** <!-- Relative positioning of elements. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Relative Positioning</title>

**Fig. 5.7** | Relative positioning of elements. (Part 1 of 2.)

**Fig. 5.6** | Absolute positioning of elements. (Part 2 of 2.)

5.6 Positioning Elements **173**

Setting the position property to relative, as in class super (lines 16–17), lays out the element on the page and offsets it by the specified top, bottom, left or right value. Unlike absolute positioning, relative positioning keeps elements in the general flow of ele- ments on the page, so positioning is relative to other elements in the flow. Recall that ex

**10** <style type = "text/css"> **11** p { font-size: 1.3em; **12** font-family: verdana, arial, sans-serif } **13** span { color: red; **14** font-size: .6em; **15** height: 1em } **16 17 18 19 20 21 22 23 24** </style> **25** </head> **26** <body> **27** <p>The text at the end of this sentence **28 29 30** <p>The text at the end of this sentence **31 32 33** <p>The text at the end of this sentence **34 35 36** <p>The text at the end of this sentence **37 38** </body> **39** </html>

v

**Fig. 5.7** | Relative positioning of elements. (Part 2 of 2.)

.super { position: relative; top: -1ex }

.sub { position: relative; bottom: -1ex }

.shiftleft { position: relative; left: -1ex }

.shiftright { position: relative; right: -1ex }

<span class = "super">is in superscript</span>.</p>

<span class = "sub">is in subscript</span>.</p>

<span class = "shiftleft">is shifted left</span>.</p>

<span class = "shiftright">is shifted right</span>.</p>

**174** Chapter 5 Cascading Style Sheets™ (CSS)

(line 17) is the _x_\-height of a font, a relative-length measurement typically equal to the height of a lowercase _x_.

**Common Programming Error 5.2** _Because relative positioning keeps elements in the flow of text in your documents, be careful to avoid unintentionally overlapping text._ 5.2

**_Inline and Block-Level Elements_** We introduce the **span** element in line 28. Lines 13–15 define the CSS rule for all span elements. The height of the span determines how much vertical space the span will occu- py. The font-size determines the size of the text inside the span.

Element span is a **grouping element**—it does not apply any inherent formatting to its contents. Its primary purpose is to apply CSS rules or id attributes to a section of text. Element span is an **inline-level element**—it applies formatting to text without changing the flow of the document. Examples of inline elements include span, img, a, em and strong. The **div** element is also a grouping element, but it is a **block-level element**. This means it is displayed on its own line and has a virtual box around it. Examples of block- level elements include div, p and heading elements (h1 through h6). We’ll discuss inline and block-level elements in more detail in Section 5.9.

**5.7 Backgrounds** CSS provides control over the background of block-level elements. CSS can set a back- ground color or add background images to XHTML elements. Figure 5.8 adds a corporate logo to the bottom-right corner of the document. This logo stays fixed in the corner even when the user scrolls up or down the screen.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 5.8: background.html --> **6** <!-- Adding background images and indentation. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Background Images</title>

**10** <style type = "text/css"> **11 12 13 14 15 16** p { font-size: 18pt; **17** color: #1144AA; **18 19** font-family: arial, sans-serif; } **20** .dark { font-weight: bold } **21** </style> **22** </head>

**Fig. 5.8** | Adding background images and indentation. (Part 1 of 2.)

body { background-image: url(logo.gif); background-position: bottom right; background-repeat: no-repeat; background-attachment: fixed; background-color: #eeeeee }

text-indent: 1em;

5.7 Backgrounds **175**

The **background-image** property (line 11) specifies the image URL for the image logo.gif in the format url(fileLocation). You can also set the **background-color** prop- erty in case the image is not found (and to fill in where the image does not cover).

The **background-position** property (line 12) places the image on the page. The key- words top, bottom, center, left and right are used individually or in combination for vertical and horizontal positioning. An image can be positioned using lengths by speci- fying the horizontal length followed by the vertical length. For example, to position the image as horizontally centered (positioned at 50 percent of the distance across the screen) and 30 pixels from the top, use

background-position: 50% 30px;

The **background-repeat** property (line 13) controls background image **tiling**, which places multiple copies of the image next to each other to fill the background. Here, we set the tiling to no-repeat to display only one copy of the background image. Other values include repeat (the default) to tile the image vertically and horizontally, repeat-x to tile the image only horizontally or repeat-y to tile the image only vertically.

**23** <body> **24** <p> **25** This example uses the background-image, **26** background-position and background-attachment **27** styles to place the <span class = "dark">Deitel **28** &amp; Associates, Inc.</span> logo in the bottom, **29** right corner of the page. Notice how the logo **30** stays in the proper position when you resize the **31** browser window. The background-color fills in where **32** there is no image. **33** </p> **34** </body> **35** </html>

**Fig. 5.8** | Adding background images and indentation. (Part 2 of 2.)

**176** Chapter 5 Cascading Style Sheets™ (CSS)

The final property setting, **background-attachment: fixed** (line 14), fixes the image in the position specified by **background-position**. Scrolling the browser window will not move the image from its position. The default value, scroll, moves the image as the user scrolls through the document.

Line 18 uses the **text-indent** property to indent the first line of text in the element by a specified amount, in this case 1em. An author might use this property to create a web page that reads more like a novel, in which the first line of every paragraph is indented.

Another CSS property that formats text is the **font-style** property, which allows the developer to set text to none, italic or oblique (oblique is simply more slanted than italic—the browser will default to italic if the system or font does not support oblique text).

**5.8 Element Dimensions** In addition to positioning elements, CSS rules can specify the actual dimensions of each page element. Figure 5.9 demonstrates how to set the dimensions of elements.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 5.9: width.html --> **6** <!-- Element dimensions and text alignment. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Box Dimensions</title>

**10** <style type = "text/css"> **11** div { background-color: #aaccff; **12** margin-bottom: .5em; **13** font-family: arial, helvetica, sans-serif } **14** </style> **15** </head> **16** <body> **17** Here is some **18** text that goes in a box which is **19** set to stretch across twenty percent **20** of the width of the screen.</div> **21 22 23** Here is some CENTERED text that goes in a box **24** which is set to stretch across eighty percent of **25** the width of the screen.</div> **26 27 28** This box is only twenty percent of **29** the width and has a fixed height. **30** What do we do if it overflows? Set the **31** overflow property to scroll!</div> **32** </body> **33** </html>

**Fig. 5.9** | Element dimensions and text alignment. (Part 1 of 2.)

<div style = "width: 20%">

<div style = "width: 80%; text-align: center">

<div style = "width: 20%; height: 150px; overflow: scroll">

5.9 Box Model and Text Flow **177**

The inline style in line 17 illustrates how to set the **width** of an element on screen; here, we indicate that the div element should occupy 20 percent of the screen width. The height of an element can be set similarly, using the **height** property. The height and width values also can be specified as relative or absolute lengths. For example,

width: 10em

sets the element’s width to 10 times the font size. Most elements are left aligned by default; however, this alignment can be altered to position the element elsewhere. Line 22 sets text in the element to be center aligned; other values for the **text-align** property include left and right.

In the third div, we specify a percentage height and a pixel width. One problem with setting both dimensions of an element is that the content inside the element can exceed the set boundaries, in which case the element is simply made large enough for all the con- tent to fit. However, in line 27, we set the **overflow** property to scroll, a setting that adds scroll bars if the text overflows the boundaries.

**5.9 Box Model and Text Flow** All block-level XHTML elements have a virtual box drawn around them based on what is known as the **box model**. When the browser renders elements using the box model, the content of each element is surrounded by **padding**, a **border** and a **margin** (Fig. 5.10).

CSS controls the border using three properties: **border-width**, **border-color** and **border-style**. We illustrate these three properties in Fig. 5.11.

**Fig. 5.9** | Element dimensions and text alignment. (Part 2 of 2.)

**178** Chapter 5 Cascading Style Sheets™ (CSS)

Property border-width may be set to any valid CSS length (e.g., em, ex, px, etc.) or to the predefined value of thin, medium or thick. The **border-color property** sets the color. \[_Note:_ This property has different meanings for different style borders.\] The border-style options are none, hidden, dotted, dashed, solid, double, groove, ridge, inset and outset. Borders groove and ridge have opposite effects, as do inset and outset. When border-style is set to none, no border is rendered.

**Fig. 5.10** | Box model for block-level elements.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 5.11: borders.html --> **6** <!-- Borders of block-level elements. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Borders</title>

**10** <style type = "text/css"> **11** div { text-align: center; **12** width: 50%; **13** position: relative; **14** left: 25%; **15** border-width: 4px } **16 17 18 19 20 21 22 23 24 25 26** </style> **27** </head> **28** <body> **29** <div class = "solid">Solid border</div><hr /> **30** <div class = "double">Double border</div><hr /> **31** <div class = "groove">Groove border</div><hr /> **32** <div class = "inset">Inset border</div><hr /> **33** <div class = "dashed">Dashed border</div><hr />

**Fig. 5.11** | Borders of block-level elements. (Part 1 of 2.)

Margin Border Padding

Content

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

5.9 Box Model and Text Flow **179**

Each border property may be set for an individual side of the box (e.g., border-top- style or border-left-color). Note that we assign more than one class to an XHTML element by separating multiple class names with spaces, as shown in lines 36–37.

As we have seen with absolute positioning, it is possible to remove elements from the normal flow of text. **Floating** allows you to move an element to one side of the screen; other content in the document then flows around the floated element. Figure 5.12 dem- onstrates how floats and the box model can be used to control the layout of an entire page.

Looking at the XHTML code, we can see that the general structure of this document consists of a header and two main sections. Each section contains a subheading and a para- graph of text.

Block-level elements (such as divs) render with a line break before and after their con- tent, so the header and two sections will render vertically one on top of another. In the absence of our styles, the subheading divs would also stack vertically on top of the text in the p tags. However, in line 24 we set the float property to right in the class floated, which is applied to the subheadings. This causes each subheading div to float to the right edge of its containing element, while the paragraph of text will flow around it.

Line 17 assigns a margin of .5em to all paragraph tags. The **margin property** sets the space between the outside of the border and all other content on the page. In line 21, we assign .2em of padding to the floated divs. The **padding property** determines the distance between the content inside an element and the inside of the element’s border. Margins for individual sides of an element can be specified (lines 22–23) by using the properties **margin-top**, **margin-right**, **margin-left** and **margin-bottom**. Padding can be specified in the same way, using **padding-top**, **padding-right**, **padding-left** and **padding-bottom**. To see the effects of margins and padding, try putting the margin and padding properties inside comments and observing the difference.

**34 35 36** </body> **37** </html>

**Fig. 5.11** | Borders of block-level elements. (Part 2 of 2.)

<div class = "thin red solid">Thin Red Solid border</div><hr /> <div class = "medium blue outset">Medium Blue Outset border</div>

**180** Chapter 5 Cascading Style Sheets™ (CSS)

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 5.12: floating.html --> **6** <!-- Floating elements. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Flowing Text Around Floating Elements</title>

**10** <style type = "text/css"> **11** div.heading { background-color: #bbddff; **12** text-align: center; **13** font-family: arial, helvetica, sans-serif; **14** padding: .2em } **15** p { text-align: justify; **16** font-family: verdana, geneva, sans-serif; **17 18** div.floated { background-color: #eeeeee; **19** font-size: 1.5em; **20** font-family: arial, helvetica, sans-serif; **21 22 23 24 25** text-align: right; **26** width: 50% } **27 28** </style> **29** </head> **30** <body> **31** <div class = "heading"><img src = "deitel.png" alt = "Deitel" /> **32** </div> **33** <div class = "section"> **34** <div class = "floated">Corporate Training and Publishing</div> **35** <p>Deitel &amp; Associates, Inc. is an internationally **36** recognized corporate training and publishing organization **37** specializing in programming languages, Internet/World **38** Wide Web technology and object technology education. **39** The company provides courses on Java, C++, Visual Basic, C#, **40** C, Internet and web programming, Object **41** Technology, and more.</p> **42** </div> **43** <div class = "section"> **44** <div class = "floated">Leading-Edge Programming Textbooks</div> **45** <p>Through its publishing **46** partnership with Prentice Hall, Deitel &amp; Associates, **47** Inc. publishes leading-edge programming textbooks, **48** professional books, interactive CD-ROM-based multimedia **49** Cyber Classrooms, satellite courses and DVD and web-based **50** video courses.</p> **51** </div> **52** </body> **53** </html>

**Fig. 5.12** | Floating elements. (Part 1 of 2.)

margin: .5em }

padding: .2em; margin-left: .5em; margin-bottom: .5em; float: right;

div.section { border: 1px solid #bbddff }

5.10 Media Types **181**

In line 27, we assign a border to the section boxes using a shorthand declaration of the border properties. CSS allows shorthand assignments of borders to allow you to define all three border properties in one line. The syntax for this shorthand is border: <width>

<style> <color>. Our border is one pixel thick, solid, and the same color as the back-

ground-color property of the heading div (line 11). This allows the border to blend with the header and makes the page appear as one box with a line dividing its sections.

**5.10 Media Types** CSS **media types** allow a programmer to decide what a page should look like depending on the kind of media being used to display the page. The most common media type for a web page is the **screen media type**, which is a standard computer screen. Other media types in CSS 2 include **handheld**, **braille**, **aural** and **print**. The handheld medium is designed for mobile Internet devices, while braille is for machines that can read or print web pages in braille. aural styles allow the programmer to give a speech-synthesizing web browser more information about the content of the web page. This allows the browser to present a web page in a sensible manner to a visually impaired person. The print media type affects a web page’s appearance when it is printed. For a complete list of CSS media types, see http://www.w3.org/TR/REC-CSS2/media.html#media-types.

Media types allow a programmer to decide how a page should be presented on any one of these media without affecting the others. Figure 5.13 gives a simple example that applies one set of styles when the document is viewed on the screen, and another when the document is printed. To see the difference, look at the screen captures below the paragraph or use the **Print Preview** feature in Internet Explorer or Firefox.

**Fig. 5.12** | Floating elements. (Part 2 of 2.)  

**182** Chapter 5 Cascading Style Sheets™ (CSS)

In line 11, we begin a block of styles that applies to all media types, declared by @media all and enclosed in curly braces ({ and }). In lines 13–18, we define some styles for all media types. Lines 20–27 set styles to be applied only when the page is printed, beginning with the declaration @media print and enclosed in curly braces.

The styles we applied for all media types look nice on a screen but would not look good on a printed page. A colored background would use a lot of ink, and a black-and- white printer may print a page that’s hard to read because there isn’t enough contrast

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 5.13: mediatypes.html --> **6** <!-- CSS media types. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Media Types</title>

**10** <style type = "text/css"> **11 12** { **13** body { background-color: #4488aa } **14** h1 { font-family: verdana, helvetica, sans-serif; **15** color: #aaffcc } **16** p { font-size: 12pt; **17** color: white; **18** font-family: arial, sans-serif } **19** } /\* end @media all declaration. \*/ **20 21** { **22** body { background-color: white } **23** h1 { color: #008844} **24** p { font-size: 14pt; **25** color: #4488aa; **26** font-family: "times new roman", times, serif } **27** } /\* end @media print declaration. \*/ **28** </style> **29** </head> **30** <body> **31** <h1>CSS Media Types Example</h1> **32 33** <p> **34** This example uses CSS media types to vary how the page **35** appears in print and how it appears on any other media. **36** This text will appear one font on the screen and a **37** different font on paper or in a print preview. To see **38** the difference in Internet Explorer, go to the Print **39** menu and select Print Preview. In Firefox, select Print **40** Preview from the File menu. **41** </p> **42** </body> **43** </html>

**Fig. 5.13** | CSS media types. (Part 1 of 2.)

@media all

@media print

5.10 Media Types **183**

between the colors. Also, sans-serif fonts like arial, helvetica, and geneva are easier to read on a screen, while serif fonts like times new roman are easier to read on paper.

**Look-and-Feel Observation 5.1** _Pages with dark background colors and light text use a lot of ink and may be difficult to read when printed, especially on a black-and white-printer. Use the print media type to avoid this._ 5.1

**Look-and-Feel Observation 5.2** _In general, sans-serif fonts look better on a screen, while serif fonts look better on paper. The print media type allows your web page to display sans-serif font on a screen and change to a serif font when it is printed._ 5.2

To solve these problems, we apply specific styles for the print media type. We change the background-color of the body, the color of the h1 tag, and the font-size, color, and font-family of the p tag to be more suited for printing and viewing on paper. Notice that most of these styles conflict with the declarations in the section for all media types. Since the print media type has higher specificity than all media types, the print styles override the styles for all media types when the page is printed. Since the font-family

**Fig. 5.13** | CSS media types. (Part 2 of 2.)

**184** Chapter 5 Cascading Style Sheets™ (CSS)

property of the h1 tag is not overridden in the print section, it retains its old value even when the page is printed.

**5.11 Building a CSS Drop-Down Menu** Drop-down menus are a good way to provide navigation links on a website without using a lot of screen space. In this section, we take a second look at the :hover pseudoclass and introduce the display property to create a drop-down menu using CSS and XHTML.

We’ve already seen the :hover pseudoclass used to change a link’s style when the mouse hovers over it. We will use this feature in a more advanced way to cause a menu to appear when the mouse hovers over a menu button. The other important property we need is the **display** property. This allows a programmer to decide whether an element is rendered on the page or not. Possible values include block, inline and none. The block

and inline values display the element as a block element or an inline element, while none stops the element from being rendered. The code for the drop-down menu is shown in Fig. 5.14.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 5.14: dropdown.html --> **6** <!-- CSS drop-down menu. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>

**10** Drop-Down Menu **11** </title> **12** <style type = "text/css"> **13** body { font-family: arial, sans-serif } **14** div.menu { font-weight: bold; **15** color: white; **16** border: 2px solid #225599; **17** text-align: center; **18** width: 10em; **19** background-color: #225599 } **20 21 22** border-top: 2px solid #225599; **23** background-color: white; **24** width: 10em; **25** text-decoration: none; **26** color: black } **27 28** </style> **29** </head> **30** <body> **31** <div class = "menu">Menu **32** <a href = "#">Home</a> **33** <a href = "#">News</a>

**Fig. 5.14** | CSS drop-down menu. (Part 1 of 2.)

div.menu:hover a { display: block } div.menu a { display: none;

div.menu a:hover { background-color: #dfeeff }

5.11 Building a CSS Drop-Down Menu **185**

First let’s look at the XHTML code. In lines 31–37, a div of class menu has the text “Menu” and five links inside it. This is our drop-down menu. The behavior we want is as follows: the text that says “Menu” should be the only thing visible on the page, unless the mouse is over the menu div. When the mouse cursor hovers over the menu div, we want the links to appear below the menu for the user to choose from.

To see how we get this functionality, let’s look at the CSS code. There are two lines that give us the drop-down functionality. Line 21 selects all the links inside the menu div

and sets their display value to none. This instructs the browser not to render the links. The other important style is in line 20. The selectors in this line are similar to those in line 21, except that this line selects only the a (anchor) elements that are children of a menu div that has the mouse over it. The display: block in this line means that when the mouse is over the menu div, the links inside it will be displayed as block-level elements.

**34** <a href = "#">Articles</a> **35** <a href = "#">Blog</a> **36** <a href = "#">Contact</a> **37** </div> **38** </body> **39** </html>

**Fig. 5.14** | CSS drop-down menu. (Part 2 of 2.)

**186** Chapter 5 Cascading Style Sheets™ (CSS)

The selectors in line 27 are also similar to lines 20 and 21. This time, however, the style is applied only to any a element that is a child of the menu div when that child has the mouse cursor over it. This style changes the background-color of the currently high- lighted menu option. The rest of the CSS simply adds aesthetic style to the components of our menu. Look at the screen captures or run the code example to see the menu in action.

This drop-down menu is just one example of more advanced CSS formatting. Many additional resources are available online for CSS navigation menus and lists. Specifically, check out List-o-Matic, an automatic CSS list generator located at www.accessify.com/ tools-and-wizards/developer-tools/list-o-matic/ and Dynamic Drive’s library of vertical and horizontal CSS menus at www.dynamicdrive.com/style/.

**5.12 User Style Sheets** Users can define their own **user style sheets** to format pages based on their preferences. For example, people with visual impairments may want to increase the page’s text size. Web page authors need to be careful not to inadvertently override user preferences with defined styles. This section discusses possible conflicts between **author styles** and **user styles**.

Figure 5.15 contains an author style. The font-size is set to 9pt for all <p> tags that have class note applied to them.

User style sheets are external style sheets. Figure 5.16 shows a user style sheet that sets the body’s font-size to 20pt, color to yellow and background-color to #000080.

User style sheets are not linked to a document; rather, they are set in the browser’s options. To add a user style sheet in IE7, select **Internet Options...**, located in the **Tools** menu. In the **Internet Options** dialog (Fig. 5.17) that appears, click **Accessibility...**, check the **Format documents using my style sheet** checkbox, and type the location of the user style sheet. Internet Explorer 7 applies the user style sheet to any document it loads. To add a user style sheet in Firefox, find your Firefox profile using the instructions at

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 5.15: user\_absolute.html --> **6** <!-- pt measurement for text size. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>User Styles</title>

**10** <style type = "text/css"> **11 12** </style> **13** </head> **14** <body> **15** <p>Thanks for visiting my website. I hope you enjoy it. **16 17 18** </body> **19** </html>

**Fig. 5.15** | pt measurement for text size. (Part 1 of 2.)

.note { font-size: 9pt }

</p><p class = "note">Please Note: This site will be moving soon. Please check periodically for updates.</p>

5.12 User Style Sheets **187**

www.mozilla.org/support/firefox/profile#locate and place a style sheet called userContent.css in the chrome subdirectory.

The web page from Fig. 5.15 is displayed in Fig. 5.18, with the user style sheet from Fig. 5.16 applied.

In this example, if users define their own font-size in a user style sheet, the author style has a higher precedence and overrides the user style. The 9pt font specified in the author style sheet overrides the 20pt font specified in the user style sheet. This small font

**1** /\* Fig. 5.16: userstyles.css \*/ **2** /\* A user stylesheet \*/ **3 4** color: yellow; **5** background-color: #000080 }

**Fig. 5.16** | User style sheet.

**Fig. 5.17** | User style sheet in Internet Explorer 7. (Part 1 of 2.)

**Fig. 5.15** | pt measurement for text size. (Part 2 of 2.)

body { font-size: 20pt;

**188** Chapter 5 Cascading Style Sheets™ (CSS)

may make pages difficult to read, especially for individuals with visual impairments. You can avoid this problem by using relative measurements (e.g., em or ex) instead of absolute measurements, such as pt. Figure 5.19 changes the font-size property to use a relative measurement (line 11) that does not override the user style set in Fig. 5.16. Instead, the font size displayed is relative to the one specified in the user style sheet. In this case, text enclosed in the <p> tag displays as 20pt, and <p> tags that have class note applied to them are displayed in 15pt (.75 times 20pt).

**Fig. 5.18** | User style sheet applied with pt measurement.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 5.19: user\_relative.html --> **6** <!-- em measurement for text size. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>User Styles</title>

**Fig. 5.19** | em measurement for text size. (Part 1 of 2.)

**Fig. 5.17** | User style sheet in Internet Explorer 7. (Part 2 of 2.)

5.13 CSS 3 **189**

Figure 5.20 displays the web page from Fig. 5.19 with the user style sheet from Fig. 5.16 applied. Note that the second line of text displayed is larger than the same line of text in Fig. 5.18.

**5.13 CSS 3** The W3C is currently developing CSS 3 and some browsers are beginning to implement some of the new features that will be in the **CSS 3** specification. We discuss a few of the upcoming features that will most likely be included in CSS 3.

CSS 3 will allow for more advanced control of borders. In addition to the border-

style, border-color, and border-width properties, you will be able to set multiple

**10** <style type = "text/css"> **11 12** </style> **13** </head> **14** <body> **15** <p>Thanks for visiting my website. I hope you enjoy it. **16** </p><p class = "note">Please Note: This site will be **17** moving soon. Please check periodically for updates.</p> **18** </body> **19** </html>

**Fig. 5.20** | User style sheet applied with em measurement.

**Fig. 5.19** | em measurement for text size. (Part 2 of 2.)

.note { font-size: .75em }

**190** Chapter 5 Cascading Style Sheets™ (CSS)

border colors, use images for borders, add shadows to boxes, and create borders with rounded corners.

Background images will be more versatile in CSS 3, allowing the programmer to set the size of a background image, specify an offset to determine where in the element the image should be positioned, and use multiple background images in one element. There will also be properties to set shadow effects on text and more options for text overflow when the text is too long to fit in its containing element.

Additional features will include resizable boxes, enhanced selectors, multicolumn lay- outs, and more developed speech (aural) styles. The Web Resources section points you to the Deitel CSS Resource Center, where you can find links to the latest information on the development and features of CSS 3.

**5.14 Wrap-Up** In this chapter we introduced Cascading Style Sheets, a technology that allows us to create flexibility in formatting XHTML documents. We learned how to define styles inline, us- ing embedded style sheets, and linking to external style sheets. We learned that external style sheets achieve true separation of content and presentation by putting each in its own file. We discussed how style sheets “cascade” to resolve conflicting style property defini- tions. We used absolute and relative positioning, background images and colors, and set the dimensions of XHTML elements.

We also learned about the box model and how to use borders, padding, and margins, as well as how to float elements to one side of the page. We provided examples of a web page with separate styles for the print media type, a drop-down menu using the display

property, and learned more about accessibility and user styles. XHTML and CSS are the basic technologies behind web pages. In the next chapter,

we begin our treatment of JavaScript, which allows us to make more interactive and dynamic pages.

**5.15 Web Resources** http://www.deitel.com/css21 The Deitel CSS Resource Center contains links to some of the best CSS information on the web. There you’ll find categorized links to tutorials, references, code examples, demos, videos, and more. Check out the demos section for more advanced examples of layouts, menus, and other web page components.

**Summary**

**_Section 5.2 Inline Styles_** • The inline style allows you to declare a style for an individual element by using the style at-

tribute in the element’s start tag.

• Each CSS property is followed by a colon and the value of the attribute. Multiple property dec- larations are separated by a semicolon.

• The color property sets text color. Color names and hexadecimal codes may be used as the value.

Summary **191**

**_Section 5.3 Embedded Style Sheets_** • Styles that are placed in a style element use selectors to apply style elements throughout the en-

tire document.

• style element attribute type specifies the MIME type (the specific encoding format) of the style sheet. Style sheets use text/css.

• Each rule body in a style sheet begins and ends with a curly brace ({ and }).

• The font-weight property specifies the “boldness” of text. Possible values are bold, normal (the default), bolder (bolder than bold text) and lighter (lighter than normal text).

• Boldness also can be specified with multiples of 100, from 100 to 900 (e.g., 100, 200, …, 900). Text specified as normal is equivalent to 400, and bold text is equivalent to 700.

• Style-class declarations are preceded by a period and are applied to elements of the specific class. The class attribute applies a style class to an element.

• The CSS rules in a style sheet use the same format as inline styles: The property is followed by a colon (:) and the value of that property. Multiple properties are separated by semicolons (;).

• The background-color attribute specifies the background color of the element.

• The font-family attribute names a specific font that should be displayed. Generic font families allow authors to specify a type of font instead of a specific font, in case a browser does not support a specific font. The font-size property specifies the size used to render the font.

**_Section 5.4 Conflicting Styles_** • Most styles are inherited from parent elements. Styles defined for children have higher specificity

and take precedence over the parent’s styles.

• Pseudoclasses give the author access to content not specifically declared in the document. The hover pseudoclass is activated when the user moves the mouse cursor over an element.

• The text-decoration property applies decorations to text in an element, such as underline, overline, line-through and blink.

• To apply rules to multiple elements, separate the elements with commas in the style sheet.

• To apply rules to only a certain type of element that is a child of another type, separate the ele- ment names with spaces.

• A pixel is a relative-length measurement: It varies in size based on screen resolution. Other rela- tive lengths are em, ex and percentages.

• The other units of measurement available in CSS are absolute-length measurements—that is, units that do not vary in size. These units can be in (inches), cm (centimeters), mm (millimeters), pt (points; 1 pt = 1/72 in) or pc (picas; 1 pc = 12 pt).

**_Section 5.5 Linking External Style Sheets_** • External linking of style sheets can create a uniform look for a website; separate pages can all use

the same styles. Modifying a single style-sheet file makes changes to styles across an entire web- site.

• link’s rel attribute specifies a relationship between two documents. For style sheets, the rel at- tribute declares the linked document to be a stylesheet for the document. The type attribute specifies the MIME type of the related document as text/css. The href attribute provides the URL for the document containing the style sheet.

**_Section 5.6 Positioning Elements_** • The CSS position property allows absolute positioning, which provides greater control over

where on a page elements reside. Specifying an element’s position as absolute removes it from

**192** Chapter 5 Cascading Style Sheets™ (CSS)

the normal flow of elements on the page and positions it according to distance from the top, left, right or bottom margin of its parent element.

• The z-index property allows a developer to layer overlapping elements. Elements that have high- er z-index values are displayed in front of elements with lower z-index values.

• Unlike absolute positioning, relative positioning keeps elements in the general flow on the page and offsets them by the specified top, left, right or bottom value.

• Element span is a grouping element—it does not apply any inherent formatting to its contents. Its primary purpose is to apply CSS rules or id attributes to a section of text.

• span is an inline-level element—it applies formatting to text without changing the flow of the document. Examples of inline elements include span, img, a, em and strong.

• The div element is also a grouping element, but it is a block-level element. This means it is dis- played on its own line and has a virtual box around it. Examples of block-level elements include div, p and heading elements (h1 through h6).

**_Section 5.7 Backgrounds_** • Property background-image specifies the URL of the image, in the format url(fileLocation). The

property background-position places the image on the page using the values top, bottom, center, left and right individually or in combination for vertical and horizontal positioning. You can also position by using lengths.

• The background-repeat property controls the tiling of the background image. Setting the tiling to no-repeat displays one copy of the background image on screen. The background-repeat prop- erty can be set to repeat (the default) to tile the image vertically and horizontally, to repeat-x to tile the image only horizontally or to repeat-y to tile the image only vertically.

• The property setting background-attachment: fixed fixes the image in the position specified by background-position. Scrolling the browser window will not move the image from its set posi- tion. The default value, scroll, moves the image as the user scrolls the window.

• The text-indent property indents the first line of text in the element by the specified amount.

• The font-style property allows you to set text to none, italic or oblique (oblique will default to italic if the system does not have a separate font file for oblique text, which is normally the case).

**_Section 5.8 Element Dimensions_** • The dimensions of elements on a page can be set with CSS by using properties height and width.

• Text in an element can be centered using text-align; other values for the text-align property are left and right.

• One problem with setting both vertical and horizontal dimensions of an element is that the con- tent inside the element might sometimes exceed the set boundaries, in which case the element must be made large enough for all the content to fit. However, a developer can set the overflow property to scroll; this setting adds scroll bars if the text overflows the boundaries set for it.

**_Section 5.9 Box Model and Text Flow_** • The border-width property may be set to any of the CSS lengths or to the predefined value of

thin, medium or thick.

• The border-styles available are none, hidden, dotted, dashed, solid, double, groove, ridge, in- set and outset.

• The border-color property sets the color used for the border.

• The class attribute allows more than one class to be assigned to an XHTML element by sepa- rating each class name from the next with a space.

Terminology **193**

• Browsers normally place text and elements on screen in the order in which they appear in the XHTML file. Elements can be removed from the normal flow of text. Floating allows you to move an element to one side of the screen; other content in the document will then flow around the floated element.

• CSS uses a box model to render elements on screen. The content of each element is surrounded by padding, a border and margins. The properties of this box are easily adjusted.

• The margin property determines the distance between the element’s edge and any outside text.

• Margins for individual sides of an element can be specified by using margin-top, margin-right, margin-left and margin-bottom.

• The padding property determines the distance between the content inside an element and the edge of the element. Padding also can be set for each side of the box by using padding-top, pad- ding-right, padding-left and padding-bottom.

**_Section 5.10 Media Types_** • CSS media types allow a programmer to decide what a page should look like depending on the

kind of media being used to display the page. The most common media type for a web page is the screen media type, which is a standard computer screen.

• A block of styles that applies to all media types is declared by @media all and enclosed in curly braces. To create a block of styles that apply to a single media type such as print, use @media

print and enclose the style rules in curly braces.

• Other media types in CSS 2 include handheld, braille, aural and print. The handheld medium is designed for mobile Internet devices, while braille is for machines that can read or print web pages in braille. aural styles allow the programmer to give a speech-synthesizing web browser more information about the content of the web page. The print media type affects a web page’s appearance when it is printed.

**_Section 5.11 Building a CSS Drop-Down Menu_** • The :hover pseudoclass is used to apply styles to an element when the mouse cursor is over it.

• The display property allows a programmer to decide if an element is displayed as a block ele- ment, inline element, or is not rendered at all (none).

**_Section 5.12 User Style Sheets_** • Users can define their own user style sheets to format pages based on their preferences.

• Absolute font size measurements override user style sheets, while relative font sizes will yield to a user-defined style.

**_Section 5.13 CSS 3_** • While CSS 2 is the current W3C Recommendation, CSS 3 is in development, and some brows-

ers are beginning to implement some of the new features that will be in the CSS 3 specification.

• CSS 3 will introduce new features related to borders, backgrounds, text effects, layout, and more.

**Terminology** absolute positioning absolute-length measurement ancestor element arial font aural media type author style

background-attachment property background-color property background-image property background-position property background-repeat property blink text decoration

**194** Chapter 5 Cascading Style Sheets™ (CSS)

block-level element border border-color property border-style property border-width property box model braille media type Cascading Style Sheets (CSS) class attribute cm (centimeter) colon (:) color property CSS 2 CSS 3 CSS comment CSS property CSS rule CSS selector cursive generic font family dashed border style descendant element display property div element dotted border style double border style em (_M_\-height of font) embedded style sheet ex (_x_\-height of font) external style sheets float property floated element font-family property font-size property font-style property font-weight property generic font family groove border style grouping element handheld media type height property hidden border style in (inch) inheritance inline-level element inline style inset border style large relative font size larger relative font size left property value line-through text decoration

link element linking to an external style sheet margin property margin-bottom property margin-left property margin-right property margin-top property media types medium relative border width medium relative font size MIME (Multipurpose Internet Mail

Extensions) type mm (millimeter) monospace font none border style outset border style overflow property overline text decoration padding property parent element pc (pica) position property print media type pseudoclass pt (point) rel attribute (link) relative positioning relative-length measurement repeat property value ridge border style right property value sans-serif generic font family screen media type scroll property value selector separation of structure from content serif generic font family small relative font size smaller relative font size solid border style span element specificity style style attribute style class style in header section of document text flow text/css MIME type text-align property text-decoration property

Self-Review Exercises **195**

text-indent property thick border width thin border width user agent user style sheet width property

x-large relative font size x-small relative font size xx-large relative font size xx-small relative font size z-index property

**Self-Review Exercises 5.1** Assume that the size of the base font on a system is 12 points.

a) How big is a 36-point font in ems? b) How big is a 9-point font in ems? c) How big is a 24-point font in picas? d) How big is a 12-point font in inches? e) How big is a 1-inch font in picas?

**5.2** Fill in the blanks in the following statements: a) Using the element allows authors to use external style sheets in their pages. b) To apply a CSS rule to more than one element at a time, separate the element names

with a(n) . c) Pixels are a(n) -length measurement unit. d) The pseudoclass is activated when the user moves the mouse cursor over the

specified element. e) Setting the overflow property to provides a mechanism for containing inner

content without compromising specified box dimensions. f) is a generic inline element that applies no inherent formatting and is

a generic block-level element that applies no inherent formatting. g) Setting property background-repeat to tiles the specified background-image

vertically. h) To begin a block of styles that applies to only the print media type, you use the decla-

ration print, followed by an opening curly brace ({). i) The property allows you to indent the first line of text in an element. j) The three components of the box model are the , and .

**Answers to Self-Review Exercises 5.1** a) 3 ems. b) 0.75 ems. c) 2 picas. d) 1/6 inch. e) 6 picas.

**5.2** a) link. b) comma. c) relative. d) hover. e) scroll. f) span, div. g) repeat-y. h) @media. i) text-indent. j) padding, border, margin.

**Exercises 5.3** Write a CSS rule that makes all text 1.5 times larger than the base font of the system and colors the text red.

**5.4** Write a CSS rule that places a background image halfway down the page, tiling it horizon- tally. The image should remain in place when the user scrolls up or down.

**5.5** Write a CSS rule that gives all h1 and h2 elements a padding of 0.5 ems, a dashed border style and a margin of 0.5 ems.

**5.6** Write a CSS rule that changes the color of all elements containing attribute class = "green- Move" to green and shifts them down 25 pixels and right 15 pixels.

**196** Chapter 5 Cascading Style Sheets™ (CSS)

**5.7** Make a layout template that contains a header and two columns. Use divs for the each lay- out component, and use float to line up the columns side by side. Give each component a border and/or a background color so you can see where your divs are.

**5.8** Add an embedded style sheet to the XHTML document in Fig. 4.5. The style sheet should contain a rule that displays h1 elements in blue. In addition, create a rule that displays all links in blue without underlining them. When the mouse hovers over a link, change the link’s background color to yellow.

**5.9** Make a navigation button using a div with a link inside it. Give it a border, background, and text color, and make them change when the user hovers the mouse over the button. Use an ex- ternal style sheet. Make sure your style sheet validates at http://jigsaw.w3.org/css-validator/. Note that some warnings may be unavoidable, but your CSS should have no errors.

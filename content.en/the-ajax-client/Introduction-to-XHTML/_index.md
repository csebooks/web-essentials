---
title: "Introduction to XHTML"
weight: 1
---

# O B J E C T I V E S

In this chapter you will learn:

■ To understand important components of XHTML documents.

■ To use XHTML to create web pages.

■ To add images to web pages.

■ To create and use hyperlinks to navigate web pages.

■ To mark up lists of information.

■ To create tables with rows and columns of data and control table formatting.

■ To create and use forms to get user input.

■ To make web pages accessible to search engines using <meta> tags.

## Introduction

Welcome to the world of opportunity created by the World Wide Web. The Internet is almost four decades old, but it wasn’t until the web’s growth in popularity in the 1990s and the recent start of the Web 2.0 era that the explosion of opportunity we are experienc- ing began. Exciting new developments occur almost daily—the pace of innovation is un- precedented. In this chapter, you’ll develop your own web pages. As the book proceeds, you’ll create increasingly appealing and powerful web pages. Later in the book, you’ll learn how to create complete web-based applications with databases and user interfaces.

This chapter begins unlocking the power of web-based application development with **XHTML**—the **Extensible HyperText Markup Language**. Later in the chapter, we intro- duce more sophisticated XHTML techniques such as **internal linking** for easier page nav- igation, **forms** for collecting information from a web-page visitor and **tables**, which are particularly useful for structuring information from **databases** (i.e., software that stores structured sets of data). In the next chapter, we discuss a technology called **Cascading Style Sheets™** (**CSS**), a technology that makes web pages more visually appealing.

Unlike procedural programming languages such as C, C++, or Java, XHTML is a **markup language** that specifies the format of the text that is displayed in a web browser such as Microsoft’s Internet Explorer or Mozilla Firefox.

One key issue when using XHTML is the separation of the **presentation** of a docu- ment (i.e., the document’s appearance when rendered by a browser) from the **structure** of the document’s information. XHTML is based on HTML (HyperText Markup Lan- guage)—a legacy technology of the World Wide Web Consortium (W3C). In HTML, it was common to specify both the document’s structure and its formatting. Formatting might specify where the browser placed an element in a web page or the fonts and colors used to display an element. The XHTML 1.0 Strict recommendation (the version of XHTML that we use in this book) allows only a document’s structure to appear in a valid XHTML document, and not its formatting. Normally, such formatting is specified with Cascading Style Sheets (Chapter 5). All our examples in this chapter are based upon the XHTML 1.0 Strict Recommendation.

## Editing XHTML

In this chapter, we write XHTML in its **source-code form**. We create **XHTML documents** by typing them in a text editor (e.g., Notepad, TextEdit, vi, emacs) and saving them with either an .html or an .htm filename extension.

**Good Programming Practice 4.1**

> _Assign filenames to documents that describe their functionality. This practice can help you iden- tify documents faster. It also helps people who want to link to a page, by giving them an easy-to- remember name. For example, if you are writing an XHTML document that contains product information, you might want to call it products.html._ 4.1

Computers called **web servers** running specialized software store XHTML docu- ments. Clients (e.g., web browsers) request specific **resources** such as the XHTML docu- ments from web servers. For example, typing www.deitel.com/books/downloads.html into a web browser’s address field requests downloads.html from the books directory on the web server running at www.deitel.com. We discuss web servers in detail in Chapter 21. For now, we simply place the XHTML documents on our computer and render them by opening them locally with a web browser such as Internet Explorer or Firefox.

## First XHTML Example

This chapter presents XHTML markup and provides screen captures that show how a browser renders (i.e., displays) the XHTML. You can download the examples from www.deitel.com/books/iw3htp4. Every XHTML document we show has line numbers for the reader’s convenience—these line numbers are not part of the XHTML documents. As you read this book, open each XHTML document in your web browser so you can view and interact with it as it was originally intended.

Figure 4.1 is an XHTML document named main.html. This first example displays the message “Welcome to XHTML!” in the browser. The key line in the program is line 13, which tells the browser to display “Welcome to XHTML!” Now let us consider each line of the program.

Lines 1–3 are required in XHTML documents to conform with proper XHTML syntax. For now, copy and paste these lines into each XHTML document you create. The meaning of these lines is discussed in detail in Chapter 14.

Lines 5–6 are **XHTML comments**. XHTML document creators insert comments to improve markup readability and describe the content of a document. Comments also help other people read and understand an XHTML document’s markup and content. Com- ments do not cause the browser to perform any action when the user loads the XHTML document into the web browser to view it. XHTML comments always start with <!-- and end with -->. Each of our XHTML examples includes comments that specify the figure number and filename and provide a brief description of the example’s purpose. Subse- quent examples include comments in the markup, especially to highlight new features.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- Fig. 4.1: main.html -->
<!-- First XHTML example. -->
<html xmlns = "http://www.w3.org/1999/xhtml"> 
<head>
<title>Welcome</title>
</head>
<body>
<p>Welcome to XHTML!</p>
</body>
</html>
```

**Fig. 4.1** | First XHTML example.

**Good Programming Practice 4.2**

> _Place comments throughout your markup. Comments help other programmers understand the markup, assist in debugging and list useful information that you do not want the browser to ren- der. Comments also help you understand your own markup when you revisit a document to mod- ify or update it in the future._ 4.2

XHTML markup contains text that represents the content of a document and **ele- ments** that specify a document’s structure. Some important elements of an XHTML doc- ument are the **html** element, the **head** element and the **body** element. The html element encloses the **head section** (represented by the head element) and the **body section** (repre- sented by the body element). The head section contains information about the XHTML document, such as its **title**. The head section also can contain special document formatting instructions called **style sheets** and client-side programs called **scripts** for creating dynamic web pages. (We introduce style sheets in Chapter 5 and scripting with JavaScript in Chapter 6.) The body section contains the page’s content that the browser displays when the user visits the web page.

XHTML documents delimit an element with **start** and **end** tags. A start tag consists of the element name in angle brackets (e.g., <html>). An end tag consists of the element name preceded by a forward slash (/) in angle brackets (e.g., </html>). In this example, lines 7 and 15 define the start and end of the html element. Note that the end tag in line 15 has the same name as the start tag, but is preceded by a / inside the angle brackets. Many start tags have **attributes** that provide additional information about an element. Browsers can use this additional information to determine how to process the element.

Each attribute has a **name** and a **value** separated by an equals sign (=). Line 7 specifies a required attribute (xmlns) and value (http://www.w3.org/1999/xhtml) for the html ele- ment in an XHTML document. For now, simply copy and paste the html element start tag in line 7 into your XHTML documents. We discuss the details of the xmlns attribute in Chapter 14.

**Common Programming Error 4.1**

> _Not enclosing attribute values in either single or double quotes is a syntax error_. _However, some web browsers may still render the element correctly._ 4.1

**Common Programming Error 4.2**

> _Using uppercase letters in an XHTML element or attribute name is a syntax error. However, some web browsers may still render the element correctly._ 4.2

An XHTML document divides the html element into two sections—head and body. Lines 8–10 define the web page’s head section with a head element. Line 9 specifies a title element. This is called a **nested element** because it is enclosed in the head element’s start and end tags. The head element is also a nested element because it is enclosed in the html

element’s start and end tags. The title element describes the web page. Titles usually appear in the **title bar** at the top of the browser window, in the browser tab that the page is displayed on, and also as the text identifying a page when users add the page to their list of **Favorites** or **Bookmarks** that enables them to return to their favorite sites. Search engines (i.e., sites that allow users to search the web) also use the title for indexing purposes.

**Good Programming Practice 4.3**

> _Indenting nested elements emphasizes a document’s structure and promotes readability._

**Common Programming Error 4.3**

> _XHTML does not permit tags to overlap—a nested element’s end tag must appear in the docu- ment before the enclosing element’s end tag. For example, the nested XHTML tags <head><ti- tle>hello</head></title> cause a syntax error, because the enclosing head element’s ending </head> tag appears before the nested title element’s ending </title> tag._

**Good Programming Practice 4.4**

> _Use a consistent title-naming convention for all pages on a site. For example, if a site is named “Bailey’s Website,” then the title of the contact page might be “Bailey’s Website - Contact.” This practice can help users better understand the website’s structure._ 4.4

Line 12 begins the document’s body element. The body section of an XHTML doc- ument specifies the document’s content, which may include text and elements.

Some elements, such as the **paragraph element** (denoted with <p> and </p>) in line 13, mark up text for display in a browser. All the text placed between the <p> and </p>

tags forms one paragraph. When the browser renders a paragraph, a blank line usually pre- cedes and follows paragraph text.

This document ends with two end tags (lines 14–15). These tags close the body and html elements, respectively. The </html> tag in an XHTML document informs the browser that the XHTML markup is complete.

To open an XHTML example from this chapter, open the folder where you saved the book’s examples, browse to the ch04 folder and double click the file to open it in your default web browser. At this point your browser window should appear similar to the sample screen capture shown in Fig. 4.1. (Note that we resized the browser window to save space in the book.)

## W3C XHTML Validation Service

Programming web-based applications can be complex, and XHTML documents must be written correctly to ensure that browsers process them properly. To promote correctly written documents, the World Wide Web Consortium (W3C) provides a **validation ser- vice** (validator.w3.org) for checking a document’s syntax. Documents can be validated by providing a URL that specifies the file’s location, by uploading a file to valida-

tor.w3.org/file-upload.html or by pasting code directly into a text area. Uploading a file copies the file from the user’s computer to another computer on the Internet. The W3C’s web page indicates that the service name is **MarkUp Validation Service** and that the validation service is able to validate the syntax of XHTML documents. All the XHTML examples in this book have been validated successfully using validator.w3.org.

By clicking **Choose…**, users can select files on their own computers for upload. After selecting a file, clicking the **Check** button uploads and validates the file. If a document con- tains syntax errors, the validation service displays error messages describing the errors.

**Error-Prevention Tip 4.1**

> _Most current browsers attempt to render XHTML documents even if they are invalid. This often leads to unexpected and possibly undesirable results. Use a validation service, such as the W3C **MarkUp Validation Service**, to confirm that an XHTML document is syntactically correct._ 4.1

## Headings

Some text in an XHTML document may be more important than other text. For example, the text in this section is considered more important than a footnote. XHTML provides six **headings**, called **heading elements**, for specifying the relative importance of informa- tion. Figure 4.2 demonstrates these elements (h1 through h6). Heading element h1 (line 13) is considered the most significant heading and is typically rendered in a larger font than the other five headings (lines 14–18). Each successive heading element (i.e., h2, h3, etc.) is typically rendered in a progressively smaller font.

**Portability Tip 4.1**

> _The text size used to display each heading element can vary significantly between browsers. In Chapter 5, we discuss how to control the text size and other text properties._ 4.1

**Look-and-Feel Observation 4.1**

> _Placing a heading at the top of every XHTML page helps viewers understand the purpose of each page._ 4.1

**Look-and-Feel Observation 4.2**

> _Use larger headings to emphasize more important sections of a web page._ 4.2

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 4.2: heading.html -->
<!-- Heading elements h1 through h6. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Headings</title>
 </head>

 <body>
 <h1>Level 1 Heading</h1>
 <h2>Level 2 heading</h2>
 <h3>Level 3 heading</h3>
 <h4>Level 4 heading</h4>
 <h5>Level 5 heading</h5>
 <h6>Level 6 heading</h6>
 </body>
 </html>
```

**Fig. 4.2** | Heading elements h1 through h6.

## Linking

One of the most important XHTML features is the **hyperlink**, which references (or **links** to) other resources, such as XHTML documents and images. When a user clicks a hyper- link, the browser tries to execute an action associated with it (e.g., navigate to a URL, open an e-mail client, etc.). In XHTML, both text and images can act as hyperlinks. Web browsers typically underline text hyperlinks and color their text blue by default, so that users can distinguish hyperlinks from plain text. In Fig. 4.3, we create text hyperlinks to four different websites.

Line 14 introduces the **strong element**, which indicates that its contents has high importance. Browsers typically display such text in a bold font.

Links are created using the **a** (**anchor**) element. Line 17 defines a hyperlink to the URL assigned to attribute **href**, which specifies the location of a linked resource, such as

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 4.3: links.html -->
<!-- Linking to other web pages. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Links</title>
 </head>

 <body>
 <h1>Here are my favorite sites</h1>
 <p><strong>Click a name to go to that page.</strong></p> **15**
 <!-- Create four text hyperlinks -->
 <p><a href = "http://www.deitel.com">Deitel</a></p>
 <p><a href = "http://www.prenhall.com">Prentice Hall</a></p>
 <p><a href = "http://www.yahoo.com">Yahoo!</a></p>
 <p><a href = "http://www.usatoday.com">USA Today</a></p>
 </body>
 </html>
```

**Fig. 4.3** | Linking to other web pages.

a web page, a file or an e-mail address. This particular anchor element links the text Deitel to a web page located at http://www.deitel.com. When a URL does not indicate a spe- cific document on the website, the web server returns a default web page. This page is often called index.html; however, most web servers can be configured to use any file as the default web page for the site. If the web server cannot locate a requested document, it returns an error indication to the web browser, and the browser displays a web page con- taining an error message to the user.

**_Hyperlinking to an E-Mail Address_**
Anchors can link to e-mail addresses using a **mailto:** URL. When someone clicks this type of anchored link, most browsers launch the default e-mail program (e.g., Microsoft Out- look or Mozilla Thunderbird) to enable the user to write an e-mail message to the linked address. Figure 4.4 demonstrates this type of anchor. Lines 15–17 contain an e-mail link. The form of an e-mail anchor is <a href = "mailto:_emailAddress_">…</a>. In this case, we link to the e-mail address deitel@deitel.com.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 4.4: contact.html -->
<!-- Linking to an e-mail address. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Contact Page</title>
 </head>

 <body>
 <p>
 My email address is
 <a href = "mailto:deitel@deitel.com">
 deitel@deitel.com
 </a>
 . Click the address and your default email client
 will open an e-mail message and address it to me.
 </p>
 </body>
 </html>
```

**Fig. 4.4** | Linking to an e-mail address.

## Images

The examples discussed so far demonstrate how to mark up documents that contain only text. However, most web pages contain both text and images. In fact, images are an equally important, if not essential, part of web-page design. The three most popular image formats used by web developers are Graphics Interchange Format (GIF), Joint Photographic Ex- perts Group (JPEG) and Portable Network Graphics (PNG) images. Users can create im- ages using specialized software, such as Adobe Photoshop Elements (www.adobe.com), G.I.M.P. (http://www.gimp.org) and Inkscape (http://www.inkscape.org). Images may also be acquired from various websites. Figure 4.5 demonstrates how to incorporate images into web pages.

Lines 14–15 use an **img element** to insert an image in the document. The image file’s location is specified with the img element’s **src attribute**. This image is located in the same directory as the XHTML document, so only the image’s filename is required. Optional attributes **width** and **height** specify the image’s width and height, respectively. You can scale an image by increasing or decreasing the values of the image width and height

attributes. If these attributes are omitted, the browser uses the image’s actual width and height. Images are measured in **pixels** (“picture elements”), which represent dots of color on the screen. Any image-editing program will have a feature that displays the dimensions, in pixels, of an image. The image in Fig. 4.5 is 92 pixels wide and 120 pixels high.

**Good Programming Practice 4.5**

> _Always include the width and the height of an image inside the <img> tag. When the browser loads the XHTML file, it will know immediately from these attributes how much screen space to provide for the image and will lay out the page properly, even before it downloads the image._

**Performance Tip 4.1**

> _Including the width and height attributes in an <img> tag can result in the browser’s loading and rendering pages faster._ 4.1

**Common Programming Error 4.4**

> _Entering new dimensions for an image that change its inherent width-to-height ratio distorts the appearance of the image. For example, if your image is 200 pixels wide and 100 pixels high, you should ensure that any new dimensions have a 2:1 width-to-height ratio._ 4.4

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- Fig. 4.5: picture.html -->
<!-- Images in XHTML files. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Images</title>
 </head>
```

**Fig. 4.5** | Images in XHTML files. (Part 1 of 2.)

```bash
<body>
<p>
<img src = "cpphtp6.jpg" width = "92" height = "120" alt = "C++ How to Program book cover" />
<img src = "jhtp.jpg" width = "92" height = "120" alt = "Java How to Program book cover" />
</p>
</body>
</html>
```

**Fig. 4.5** | Images in XHTML files. (Part 2 of 2.)

Every img element in an XHTML document must have an **alt attribute**. If a browser cannot render an image, the browser displays the alt attribute’s value. A browser may not be able to render an image for several reasons. It may not support images—as is the case with a **text-based browser** (i.e., a browser that can display only text)—or the client may have disabled image viewing to reduce download time. Figure 4.5 shows Internet Explorer 7 rendering a red x symbol and displaying the alt attribute’s value, signifying that the image (jhtp.jpg) cannot be found.

The alt attribute helps you create **accessible** web pages for users with disabilities, especially those with vision impairments who use text-based browsers. Specialized software called a **speech synthesizer** can “speak” the alt attribute’s value so that a user with a visual impairment knows what the browser is displaying.

Some XHTML elements (called **empty elements**) contain only attributes and do not mark up text (i.e., text is not placed between the start and end tags). Empty elements (e.g., img) must be terminated, either by using the **forward slash character** (/) inside the closing right angle bracket (>) of the start tag or by explicitly including the end tag. When using the forward slash character, we add a space before it to improve readability (as shown at the ends of lines 15 and 17). Rather than using the forward slash character, lines 16–17 could be written with a closing </img> tag as follows:

<img src = "jhtp.jpg" width = "92" height = "120" alt = "Java How to Program book cover"></img>

**_Using Images as Hyperlinks_**
By using images as hyperlinks, web developers can create graphical web pages that link to other resources. In Fig. 4.6, we create six different image hyperlinks.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- Fig. 4.6: nav.html -->
<!-- Images as link anchors. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Navigation Bar</title>
 </head>

 <body>
 <p>
 <a href = "links.html">
 <img src = "buttons/links.jpg" width = "65"
 height = "50" alt = "Links Page" />
 </a>

 <a href = "list.html">
 <img src = "buttons/list.jpg" width = "65"
 height = "50" alt = "List Example Page" />
 </a>

 <a href = "contact.html">
 <img src = "buttons/contact.jpg" width = "65"
 height = "50" alt = "Contact Page" />
 </a>

 <a href = "table1.html">
 <img src = "buttons/table.jpg" width = "65"
 height = "50" alt = "Table Page" />
 </a>

 <a href = "form.html">
 <img src = "buttons/form.jpg" width = "65"
 height = "50" alt = "Feedback Form" />
 </a>
 </p>
 </body>
 </html>
```

**Fig. 4.6** | Images as link anchors. (Part 1 of 2.)

**Fig. 4.6** | Images as link anchors. (Part 2 of 2.)

Lines 14–17 create an **image hyperlink** by nesting an img element in an anchor (a) element. The value of the img element’s src attribute value specifies that this image (links.jpg) resides in a directory named buttons. The buttons directory and the XHTML document are in the same directory. Images from other web documents also can be referenced by setting the src attribute to the name and location of the image. Note that if you’re hosting a publicly available web page that uses an image from another site, you should get permission to use the image and host a copy of image on your own website. If you refer to an image on another website, the browser has to request the image resource from the other site’s server. Clicking an image hyperlink takes a user to the web page spec- ified by the surrounding anchor element’s href attribute. Notice that when the mouse hovers over a link of any kind, the URL that the link points to is displayed in the status bar at the bottom of the browser window.

## Special Characters and Horizontal Rules

When marking up text, certain characters or symbols (e.g., <) may be difficult to embed directly into an XHTML document. Some keyboards do not provide these symbols, or the presence of these symbols may cause syntax errors. For example, the markup

<p>if x < 10 then increment x by 1</p>

results in a syntax error because it uses the less-than character (<), which is reserved for start tags and end tags such as <p> and </p>. XHTML provides **character entity references** (in the form &_code_;) for representing special characters. We could correct the previous line by writing

<p>if x &lt; 10 then increment x by 1</p>

which uses the character entity reference **&lt;** for the less-than symbol (<). Figure 4.7 demonstrates how to use special characters in an XHTML document. For a list of special characters, see Appendix A, XHTML Special Characters.

Lines 24–25 contain other special characters, which can be expressed as either char- acter entity references (coded using word abbreviations such as &amp; for ampersand and &copy; for copyright) or **numeric character references**—decimal or **hexadecimal** (**hex**) values representing special characters. For example, the & character is represented in dec- imal and hexadecimal notation as &#38; and &#x26;, respectively. Hexadecimal numbers are base 16 numbers—digits in a hexadecimal number have values from 0 to 15 (a total of 16 different values). The letters A–F represent the hexadecimal digits corresponding to decimal values 10–15. Thus in hexadecimal notation we can have numbers like 876 con- sisting solely of decimal-like digits, numbers like DA19F consisting of digits and letters, and numbers like DCB consisting solely of letters. We discuss hexadecimal numbers in detail in Appendix E, Number Systems.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 4.7: contact2.html -->
<!-- Inserting special characters. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Contact Page</title>
</head>

<body>
<p>
Click
<a href = "mailto:deitel@deitel.com">here</a>
to open an email message addressed to
deitel@deitel.com.
</p>

<hr /> <!-- inserts a horizontal rule -->

<!-- special characters are entered -->
<!-- using the form &code; -->
<p>All information on this site is <strong>&copy;
Deitel &amp; Associates, Inc. 2007.</strong></p>

<!-- to strike through text use <del> tags -->
<!-- to subscript text use <sub> tags -->
<!-- to superscript text use <sup> tags -->
<!-- these tags are nested inside other tags -->
<p><del>You may download 3.14 x 10<sup>2</sup>
characters worth of information from this site.</del>
Only <sub>one</sub> download per hour is permitted.</p>
<p><em>Note: &lt; &frac14; of the information
presented here is updated daily.</em></p>
</body>
</html>
```

**Fig. 4.7** | Inserting special characters. (Part 1 of 2.)

**Fig. 4.7** | Inserting special characters. (Part 2 of 2.)

In lines 31–33, we introduce four new elements. Most browsers render the **del** ele- ment as strike-through text. With this format users can easily indicate document revisions. To **superscript** text (i.e., raise text above the baseline and decreased font size) or **subscript** text (i.e., lower text below the baseline and decreased font size), use the **sup** or **sub** element, respectively. The paragraph in lines 34–35 contains an **em element**, which indicates that its contents should be emphasized. Browsers usually render em elements in an italic font. We also use character entity reference &lt; for a less-than sign and &frac14; for the frac- tion 1/4 (line 34).

In addition to special characters, this document introduces a **horizontal rule**, indi- cated by the **<hr />** tag in line 22. Most browsers render a horizontal rule as a horizontal line with a blank line above and below it.

## Lists

Up to this point, we have presented basic XHTML elements and attributes for linking to resources, creating headings, using special characters and incorporating images. In this sec- tion, we discuss how to organize information on a web page using lists. In the next section, we introduce another feature for organizing information, called a table. Figure 4.8 displays text in an **unordered list** (i.e., a list that does not order its items by letter or number). The unordered list element **ul** creates a list in which each item begins with a bullet symbol (called a disc). Each entry in an unordered list (element ul in line 17) is an **li** (**list item**) element (lines 19–22). Most web browsers render each li element on a new line with a bullet symbol indented from the beginning of the line.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 4.8: links2.html -->
<!-- Unordered list containing hyperlinks. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Links</title>
</head>

<body>
<h1>Here are my favorite sites</h1>
<p><strong>Click on a name to go to that page.</strong></p>

<!-- create an unordered list -->
<ul>
<!-- add four list items -->
<li><a href = "http://www.deitel.com">Deitel</a></li>
<li><a href = "http://www.w3.org">W3C</a></li>
<li><a href = "http://www.yahoo.com">Yahoo!</a></li>
<li><a href = "http://www.cnn.com">CNN</a></li>
</ul>
</body>
</html>
```

**Fig. 4.8** | Unordered list containing hyperlinks. (Part 1 of 2.)

**Fig. 4.8** | Unordered list containing hyperlinks. (Part 2 of 2.)

**_Nested Lists_**
Lists may be nested to represent hierarchical relationships, as in an outline format. Figure 4.9 demonstrates nested lists and **ordered lists**. The ordered list element **ol** creates a list in which each item begins with a number.

A web browser indents each nested list to indicate a hierarchical relationship. The first ordered list begins at line 30. Items in an ordered list are enumerated one, two, three and so on. Nested ordered lists are enumerated in the same manner. The items in the outer- most unordered list (line 16) are preceded by discs. List items nested inside the unordered list of line 16 are preceded by circular bullets. Although not demonstrated in this example, subsequent nested list items are preceded by square bullets.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 4.9: list.html -->
<!-- Nested and ordered lists. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Lists</title>
</head>

<body>
<h1>The Best Features of the Internet</h1>

<!-- create an unordered list -->
<ul>
<li>You can meet new people from countries around
the world.</li>
<li>
You have access to new media as it becomes public:

<!-- this starts a nested list, which uses a -->
<!-- modified bullet. The list ends when you -->
<!-- close the <ul> tag. -->
<ul>
<li>New games</li>
<li>New applications

<!-- nested ordered list -->
<ol>
<li>For business</li>
<li>For pleasure</li>
</ol>
</li> <!-- ends line 27 new applications li -->

<li>Around the clock news</li>
<li>Search engines</li>
<li>Shopping</li>
<li>Programming

<!-- another nested ordered list -->
<ol>
<li>XML</li>
<li>Java</li>
<li>XHTML</li>
<li>Scripts</li>
<li>New languages</li>
</ol>
</li> <!-- ends programming li of line 39 -->
</ul> <!-- ends the nested list of line 25 -->
</li>

<li>Links</li>
<li>Keeping in touch with old friends</li>
<li>It is the technology of the future!</li>
</ul> <!-- ends the unordered list of line 16 -->
</body>
</html>
```

**Fig. 4.9** | Nested and ordered lists. (Part 1 of 2.)

**Fig. 4.9** | Nested and ordered lists. (Part 2 of 2.)

## Tables

Tables are frequently used to organize data into rows and columns. Our first example (Fig. 4.10) creates a table with six rows and two columns to display price information for fruit.

Tables are defined with the **table** element (lines 15–62). Lines 15–17 specify the start tag for a table element that has several attributes. The **border** attribute specifies the table’s border width in pixels. To create a table without a border, set border to "0". This example assigns attribute **width** the value "40%" to set the table’s width to 40 percent of the browser’s width. A developer can also set attribute width to a specified number of pixels. Try resizing the browser window to see how the width of the window affects the width of the table.

As its name implies, attribute **summary** (lines 16–17) describes the table’s contents. Speech devices use this attribute to make the table more accessible to users with visual impairments. The **caption** element (line 21) describes the table’s content and helps text-

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 4.10: table1.html -->
<!-- Creating a basic table. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>A simple XHTML table</title>
</head>

<body>

<!-- the <table> tag opens a table -->
<table border = "1" width = "40%"
summary = "This table provides information about
the price of fruit">

<!-- the <caption> tag summarizes the table's -->
<!-- contents (this helps the visually impaired) -->
<caption><strong>Price of Fruit</strong></caption>

<!-- the <thead> section appears first in the table -->
<!-- it formats the table header area -->
<thead>
<tr> <!-- <tr> inserts a table row -->
<th>Fruit</th> <!-- insert a heading cell -->
<th>Price</th>
</tr>
</thead>

<!-- the <tfoot> section appears last in the table -->
<!-- it formats the table footer -->
<tfoot>
<tr>
<th>Total</th>
<th>$3.75</th>
</tr>
</tfoot>

<!-- all table content is enclosed -->
<!-- within the <tbody> -->
<tbody>
<tr>
<td>Apple</td> <!-- insert a data cell -->
<td>$0.25</td>
</tr>
<tr>
<td>Orange</td>
<td>$0.50</td>
</tr>
<tr>
<td>Banana</td>
<td>$1.00</td>
</tr>
<tr>
<td>Pineapple</td>
<td>$2.00</td>
</tr>
</tbody>
</table>

</body>
</html>

```

**Fig. 4.10** | Creating a basic table. (Part 1 of 2.)

**Fig. 4.10** | Creating a basic table. (Part 2 of 2.)

based browsers interpret the table data. Text inside the <caption> tag is rendered above the table by most browsers. Attribute summary and element caption are two of the many XHTML features that make web pages more accessible to users with disabilities.

A table has three distinct sections—**head**, **body** and **foot**. The head section (or header cell) is defined with a **thead** element (lines 25–30), which contains header information such as column names. Each **tr** element (lines 26–29) defines an individual **table row**. The columns in the head section are defined with **th** elements. Most browsers center text formatted by th (table header column) elements and display them in bold. Table header elements are nested inside table row elements (lines 27–28).

The body section, or **table body**, contains the table’s primary data. The table body (lines 43–60) is defined in a **tbody** element. In the body, each tr element specifies one row. **Data cells** contain individual pieces of data and are defined with **td** (**table data**) ele- ments in each row.

The foot section (lines 34–39) is defined with a **tfoot** (table foot) element. The text placed in the footer commonly includes calculation results and footnotes. Like other sec- tions, the foot section can contain table rows, and each row can contain cells. As in the head section, cells in the foot section are created using th elements, instead of the td ele- ments used in the table body. Note that the table foot section must be above the body sec- tion in the code, but the table foot displays at the bottom of the table.

**_Using rowspan and colspan_**
Figure 4.10 explored a basic table’s structure. Figure 4.11 presents another table example and introduces two new attributes that allow you to build more complex tables.

The table begins in line 15. Table cells are sized to fit the data they contain. Docu- ment authors can create larger data cells using the attributes **rowspan** and **colspan**. The values assigned to these attributes specify the number of rows or columns occupied by a cell. The th element at lines 23–26 uses the attribute rowspan = "2" to allow the cell con- taining the picture of the camel to use two vertically adjacent cells (thus the cell _spans_ two rows). The th element in lines 29–32 uses the attribute colspan = "4" to widen the header cell (containing Camelid comparison and Approximate as of 6/2007) to span four cells.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- Fig. 4.11: table2.html -->
<!-- Complex XHTML table. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Tables</title>
</head>

<body>
<h1>Table Example Page</h1>

<table border = "1">
<caption>Here is a more complex sample table.</caption>

<thead>
<!-- rowspans and colspans merge the specified -->
<!-- number of cells vertically or horizontally -->
<tr>
<!-- merge two rows -->
<th rowspan = "2">
<img src = "camel.gif" width = "205"
height = "167" alt = "Picture of a camel" />
</th>

<!-- merge four columns -->
<th colspan = "4">
<h1>Camelid comparison</h1>
<p>Approximate as of 6/2007</p>
</th>
</tr>
<tr>
<th># of Humps</th>
<th>Indigenous region</th>
<th>Spits?</th>
<th>Produces Wool?</th>
</tr>
</thead>
<tbody>
<tr>
<th>Camels (bactrian)</th>
<td>2</td>
<td>Africa/Asia</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<th>Llamas</th>
<td>1</td>
<td>Andes Mountains</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</body>
</html>
```

**Fig. 4.11** | Complex XHTML table. (Part 1 of 2.)

**Fig. 4.11** | Complex XHTML table. (Part 2 of 2.)

## Forms

When browsing websites, users often need to provide such information as search keywords, e-mail addresses and zip codes. XHTML provides a mechanism, called a form, for collecting data from a user.

Data that users enter on a web page is normally sent to a web server that provides access to a site’s resources (e.g., XHTML documents, images). These resources are located either on the same machine as the web server or on a machine that the web server can access through the network. When a browser requests a web page or file that is located on a server, the server processes the request and returns the requested resource. A request con- tains the name and path of the desired resource and the method of communication (called a **protocol**). XHTML documents use the Hypertext Transfer Protocol (HTTP).

Figure 4.12 is a simple form that sends data to the web server, which passes the form data to a program. The program processes the data received from the web server and typ- ically returns information to the web server. The web server then sends the information as an XHTML document to the web browser. We discuss web servers in Chapter 21. \[_Note:_ This example demonstrates client-side functionality. If the form is submitted (by clicking **Submit**), nothing will happen, because we don’t yet know how to process the form data. In later chapters, we present the server-side programming (e.g., in ASP.NET, JavaServer Faces, and PHP) necessary to process information entered into a form.\]

Forms can contain visual and nonvisual components. Visual components include clickable buttons and other graphical user interface components with which users interact. Nonvisual components, called **hidden inputs**, store any data that you specify, such as e- mail addresses and XHTML document filenames that act as links. The form is defined in lines 21–46 by a **form** element.

Attribute **method** (line 21) specifies how the form’s data is sent to the web server. Using method = "**post**" appends form data to the browser request, which contains the pro- tocol (HTTP) and the requested resource’s URL. This method of passing data to the server is transparent—the user doesn’t see the data after the form is submitted. The other pos- sible value, method = "**get**", appends the form data directly to the end of the URL of the script, where it is visible in the browser’s **Address** field. The _post_ and _get_ methods for sending form data are discussed in detail in Chapter 21, Web Servers (IIS and Apache).

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 4.12: form.html -->
<!-- Form with hidden fields and a text box. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Forms</title>
</head>

<body>
<h1>Feedback Form</h1>

<p>Please fill out this form to help
us improve our site.</p>

<!-- this tag starts the form, gives the -->
<!-- method of sending information and the -->
<!-- location of form script -->
<form method = "post" action = "">
<p>
<!-- hidden inputs contain non-visual -->
<!-- information -->
<input type = "hidden" name = "recipient"
value = "deitel@deitel.com" />
<input type = "hidden" name = "subject"
value = "Feedback Form" />
<input type = "hidden" name = "redirect"
value = "main.html" />
</p>

<!-- <input type = "text"> inserts a text box -->
<p>
<label>Name:
<input name = "name" type = "text" size = "25"
maxlength = "30" />
</label></p>
<p>
<!-- input types "submit" and "reset" insert -->
<!-- buttons for submitting and clearing the -->
<!-- form's contents -->
<input type = "submit" value = "Submit" />
<input type = "reset" value = "Clear" />
</p>
</form>
</body>
</html>
```

**Fig. 4.12** | Form with hidden fields and a text box. (Part 2 of 2.)

**Fig. 4.12** | Form with hidden fields and a text box. (Part 1 of 2.)

The **action** attribute in the <form> tag in line 21 specifies the URL of a script on the web server that will be invoked to process the form’s data. Since we haven’t introduced server-side programming yet, we leave this attribute empty for now.

Lines 25–44 define six **input** elements that specify data to provide to the script that processes the form (also called the **form handler**). There are several types of input ele- ments. An input’s type is determined by its **type attribute**. This form uses a text input, a submit input, a reset input and three hidden inputs.

**142** Chapter 4 Introduction to XHTML

The **text** input in lines 35–36 inserts a **text box** in the form. Users can type data in text boxes. The label element (lines 34–37) provides users with information about the input element’s purpose. The input element’s **size** attribute specifies the number of char- acters visible in the text box. Optional attribute **maxlength** limits the number of characters input into the text box—in this case, the user is not permitted to type more than 30 char- acters.

**Look-and-Feel Observation 4.3**

> _Include a label element for each form element to help users determine the purpose of each form element._ 4.3

Two input elements in lines 43–44 create two buttons. The **submit** input element is a button. When the submit button is pressed, the user is sent to the location specified in the form’s action attribute. The **value** attribute sets the text displayed on the button. The **reset** input element allows a user to reset all form elements to their default values. The value attribute of the reset input element sets the text displayed on the button (the default value is **Reset** if you omit the value attribute).

The three input elements in lines 25–30 have the type attribute hidden, which allows you to send form data that is not input by a user. The three hidden inputs are an e-mail address to which the data will be sent, the e-mail’s subject line and a URL for the browser to open after submission of the form. Two other input attributes are **name**, which identi- fies the input element, and **value**, which provides the value that will be sent (or posted) to the web server.

**Good Programming Practice 4.6**

> _Place hidden input elements at the beginning of a form, immediately after the opening <form> tag. This placement allows document authors to locate hidden input elements quickly._ 4.6

**_Additional Form Elements_**
In the previous example, you saw basic elements of XHTML forms. Now that you know the general structure of a form, we introduce elements and attributes for creating more complex forms. Figure 4.13 contains a form that solicits user feedback about a website.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 4.13: form2.html -->
<!-- Form using a variety of components. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>More Forms</title>
 </head>

 <body>
 <h1>Feedback Form</h1>
```

**Fig. 4.13** | Form using a variety of components. (Part 1 of 4.)

```bash
<p>Please fill out this form to help
us improve our site.</p>

<form method = "post" action = "">
<p>
<input type = "hidden" name = "recipient"
value = "deitel@deitel.com" />
<input type = "hidden" name = "subject"
value = "Feedback Form" />
<input type = "hidden" name = "redirect"
value = "main.html" />
</p>

<p><label>Name:
<input name = "name" type = "text" size = "25" />
</label></p>

<!-- <textarea> creates a multiline textbox -->
<p><label>Comments: <br />
<textarea name = "comments"
rows = "4" cols = "36">Enter comments here.</textarea>
</label></p>

<!-- <input type = "password"> inserts a -->
<!-- textbox whose display is masked with -->
<!-- asterisk characters -->
<p><label>E-mail Address:
<input name = "email" type = "password" size = "25" />
</label></p>

<p>
<strong>Things you liked:</strong><br />

<label>Site design
<input name = "thingsliked" type = "checkbox"
value = "Design" /></label>
<label>Links
<input name = "thingsliked" type = "checkbox"
value = "Links" /></label>
<label>Ease of use
<input name = "thingsliked" type = "checkbox"
value = "Ease" /></label>
<label>Images
<input name = "thingsliked" type = "checkbox"
value = "Images" /></label>
<label>Source code
<input name = "thingsliked" type = "checkbox"
value = "Code" /></label>
</p>

<!-- <input type = "radio" /> creates a radio -->
<!-- button. The difference between radio buttons -->
```

**Fig. 4.13** | Form using a variety of components. (Part 2 of 4.)

```bash
<!-- and checkboxes is that only one radio button -->
<!-- in a group can be selected. -->
<p>
<strong>How did you get to our site?:</strong><br />

<label>Search engine
<input name = "howtosite" type = "radio"
value = "search engine" checked = "checked" /></label>
<label>Links from another site
<input name = "howtosite" type = "radio"
value = "link" /></label>
<label>Deitel.com Website
<input name = "howtosite" type = "radio"
value = "deitel.com" /></label>
<label>Reference in a book
<input name = "howtosite" type = "radio"
value = "book" /></label>
<label>Other
<input name = "howtosite" type = "radio"
value = "other" /></label>
</p>

<p>
<label>Rate our site:

<!-- the <select> tag presents a drop-down -->
<!-- list with choices indicated by the -->
<!-- <option> tags -->
<select name = "rating">
<option selected = "selected">Amazing</option>
<option>10</option>
<option>9</option>
<option>8</option>
<option>7</option>
<option>6</option>
<option>5</option>
<option>4</option>
<option>3</option>
<option>2</option>
<option>1</option>
<option>Awful</option>
</select>
</label>
</p>

<p>
<input type = "submit" value = "Submit" />
<input type = "reset" value = "Clear" />
</p>
</form>
</body>
</html>
```

**Fig. 4.13** | Form using a variety of components. (Part 3 of 4.)

**Fig. 4.13** | Form using a variety of components. (Part 4 of 4.)

In line 32, we introduce the **br** element, which most browsers render as a =**line break**. Any markup or text following a br element is rendered on the next line. Like the img ele- ment, br is an example of an empty element terminated with a forward slash. We add a space before the forward slash to enhance readability.

The **textarea** element (lines 33–34) inserts a multiline text box, called a **text area**, into the form. The number of rows is specified with the **rows** attribute, and the number of columns (i.e., characters per line) is specified with the **cols** attribute. In this example, the textarea is four rows high and 36 characters wide. To display default text in the text area, place the text between the <textarea> and </textarea> tags. Default text can be specified in other input types, such as text boxes, by using the value attribute.

The **password** input in line 41 inserts a password box with the specified size (max- imum number of characters allowed). A password box allows users to enter sensitive infor- mation, such as credit card numbers and passwords, by “masking” the information input with asterisks (**\***). The actual value input is sent to the web server, not the characters that mask the input.

Lines 47–61 introduce the **checkbox** form element. Checkboxes enable users to select from a set of options. When a user selects a checkbox, a check mark appears in the check- box. Otherwise, the checkbox remains empty. Each **"checkbox"** input creates a new checkbox. Checkboxes can be used individually or in groups. Checkboxes that belong to a group are assigned the same name (in this case, "thingsliked").

**Common Programming Error 4.5**

> _When your form has several checkboxes with the same name, you must make sure that they have different values, or the scripts running on the web server will not be able to distinguish them._ 4.5

After the checkboxes, we present two more ways to allow the user to make choices. In this example, we introduce two new input types. The first type is the **radio button** (lines 71–85) specified with type **"radio"**. Radio buttons are similar to checkboxes, except that only one radio button in a group of radio buttons may be selected at any time. The radio buttons in a group all have the same name attributes and are distinguished by their different value attributes. The attribute–value pair checked = "checked" (line 73) indicates which radio button, if any, is selected initially. The checked attribute also applies to checkboxes.

**Common Programming Error 4.6**

> _Not setting the name attributes of the radio buttons in a form to the same name is a logic error because it lets the user select all of them at the same time._ 4.6

The **select** element (lines 94–107) provides a drop-down list from which the user can select an item. The name attribute identifies the drop-down list. The **option** elements (lines 95–106) add items to the drop-down list. The option element’s **selected** attribute specifies which item initially is displayed as the selected item in the select element. If no option element is marked as selected, the browser selects the first option by default.

## Internal Linking

Earlier in the chapter, we discussed how to hyperlink one web page to another. Figure 4.14 introduces **internal linking**—a mechanism that enables the user to jump between loca- tions in the same document. Internal linking is useful for long documents that contain many sections. Clicking an internal link enables users to find a section without scrolling through the entire document.

Line 14 contains a tag with the id attribute (set to "features") for an internal hyper- link. To link to a tag with this attribute inside the same web page, the href attribute of an anchor element includes the id attribute value preceded by a pound sign (as in #features). Line 56 contains a hyperlink with the id features as its target. Selecting this hyperlink in a web browser scrolls the browser window to the h1 tag in line 14. Note that you may have to resize your browser to a small window and scroll down before clicking the link to see the browser scroll to the h1 element.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 4.14: internal.html -->
<!-- Internal hyperlinks to make pages more navigable. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
```

**Fig. 4.14** | Internal hyperlinks to make pages more navigable. (Part 1 of 3.)

```bash
<head>
<title>Internal Links</title>
</head>

<body>
<!-- id attribute creates an internal hyperlink destination -->
<h1 id = "features">The Best Features of the Internet</h1>

<!-- an internal link's address is "#id" -->
<p><a href = "#bugs">Go to <em>Favorite Bugs</em></a></p>

<ul>
<li>You can meet people from countries
around the world.</li>
<li>You have access to new media as it becomes public:
<ul>
<li>New games</li>
<li>New applications
<ul> **27** <li>For Business</li>
<li>For Pleasure</li>
</ul>
</li>

<li>Around the clock news</li>
<li>Search Engines</li>
<li>Shopping</li>
<li>Programming
<ul>
<li>XHTML</li>
<li>Java</li>
<li>Dynamic HTML</li>
<li>Scripts</li>
<li>New languages</li>
</ul>
</li>
</ul>
</li>

<li>Links</li>
<li>Keeping in touch with old friends</li>
<li>It is the technology of the future!</li>
</ul>

<!-- id attribute creates an internal hyperlink destination -->
<h1 id = "bugs">My 3 Favorite Bugs</h1>
<p>
<!-- internal hyperlink to features -->
<a href = "#features">Go to <em>Favorite Features</em></a>
</p>
<ol>
<li>Fire Fly</li>
<li>Gal Ant</li>
```

**Fig. 4.14** | Internal hyperlinks to make pages more navigable. (Part 2 of 3.)

```bash
<li>Roman Tic</li>
</ol>
</body>
</html>
```

**Fig. 4.14** | Internal hyperlinks to make pages more navigable. (Part 3 of 3.)

**Look-and-Feel Observation 4.4**

> _Internal hyperlinks are useful in XHTML documents that contain large amounts of informa- tion. Internal links to different parts of the page make it easier for users to navigate the page— they do not have to scroll to find the section they want._ 4.4

Although not demonstrated in this example, a hyperlink can specify an internal link in another document by specifying the document name followed by a pound sign and the id value, as in:

href = "filename.html#id"

For example, to link to a tag with the id attribute called booklist in books.html, href is assigned "books.html#booklist". You can also send the browser to an internal link on an- other website by appending the pound sign and id value of an element to any URL, as in:

href = "_URL_/filename.html#_id_"

## meta Elements

Search engines help people find websites. They usually catalog sites by following links from page to page (often known as spidering or crawling) and saving identification and classifi- cation information for each page. One way that search engines catalog pages is by reading the content in each page’s **meta** elements, which specify information about a document.

Two important attributes of the meta element are **name**, which identifies the type of meta element, and **content**, which provides the information search engines use to catalog pages. Figure 4.15 introduces the meta element.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 4.15: meta.html -->
<!-- meta elements provide keywords and a description of a page. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Welcome</title>

<!-- <meta> tags provide search engines with -->
<!-- information used to catalog a site -->
<meta name = "keywords" content = "web page,design,
XHTML, tutorial, personal, help, index, form,
contact, feedback, list, links, deitel" />
<meta name = "description" content = "This website will
help you learn the basics of XHTML and web page design
through the use of interactive examples and
instruction." />
</head>
<body>
<h1>Welcome to Our Website!</h1>

<p>We have designed this site to teach about the wonders
of <strong><em>XHTML</em></strong>. <em>XHTML</em> is
better equipped than <em>HTML</em> to represent complex
data on the Internet. <em>XHTML</em> takes advantage of
XML’s strict syntax to ensure well-formedness. Soon you
```

**Fig. 4.15** | meta elements provide keywords and a description of a page. (Part 1 of 2.)

```bash
will know about many of the great features of
<em>XHTML.</em></p>

<p>Have Fun With the Site!</p>
</body>
</html>
```

**Fig. 4.15** | meta elements provide keywords and a description of a page. (Part 2 of 2.)

Lines 13–15 demonstrate a "keywords" meta element. The content attribute of such a meta element provides search engines with a list of words that describe a page. These words are compared with words in search requests. Thus, including meta elements and their content information can draw more viewers to your site.

Lines 16–19 demonstrate a "description" meta element. The content attribute of such a meta element provides a three- to four-line description of a site, written in sentence form. Search engines also use this description to catalog your site and sometimes display this information as part of the search results. Note that this use of the meta element is one of many methods of search engine optimization (SEO). For more information on SEO, visit Deitel’s SEO Resource Center at www.deitel.com/searchengineoptimization.

**Software Engineering Observation 4.1**

> _meta elements are not visible to users and must be placed inside the head section of your XHTML document. If meta elements are not placed in this section, they will not be read by search engines_ 4.1

## Wrap-Up

This chapter introduced XHTML and explored many of its features. We discussed the ba- sics of XHTML as well as marking up information in tables, creating forms for gathering user input, linking to sections in the same document and using <meta> tags. In Chapter 5, we build on the XHTML introduced in this chapter by discussing how to make web pages more visually appealing with Cascading Style Sheets.

## Web Resources

www.deitel.com/xhtml

Visit our online XHTML Resource Center for links to some of the best XHTML information on the web. There you’ll find categorized links to introductions, tutorials, books, blogs, forums, sample chapters, and more. Also check out links about XHTML 2, the upcoming version of the XHTML standard.

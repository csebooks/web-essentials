---
title: Basics
weight: 1
---

Let's get started with our static website. Create a working folder.

```shell
mkdir my-static-website
```

From now onwards lets refer this as `PWD` ( Present Working Directory ).
Next we need to intialize the project.

```shell
cd my-static-website
npm init
```

After providing inputs to the prompt, the project has been successfully created.To view the project, open it in the VS Code editor.

```shell
code .
```

You will find a file named `package.json` in the project directory. We will see this file in detail later but for now just consider this file contains all about your project.

We need a bundler which can prepare the static assets for us. There are many options, but here we use `parcel js`.  Lets add this to our project.

```shell
npm install --save-dev parcel
```

Open your `package.json` and you will find `parcel` added as **devDependencies**.
Next we need to create our html file `src/index.html` and keep the below content inside the file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First HTML Page</title>
</head>
<body>
  Lets build HTML
</body>
</html>
```

- `<!DOCTYPE html>`: Declares the document as an HTML5 document.
- `<html>`: Root element of the HTML document.
- `<head>`: Contains meta-information about the document (e.g., title, character set).
- `<title>`: Sets the title displayed on the browser tab.
- `<body>`: Contains the content displayed on the web page, such as headings, paragraphs, links, images, etc.

Lets server the HTML with

```shell
npx parcel src/index.html
```

> NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it.


You can now open [localhost:1234](localhost:1234) to view your html file.

Lets make a small change `Lets build HTML` as `Lets build HTML Text, Media, Form and Container Elements` and save the file. You should see your browser that shows updated content automatically. Cool. Isn't it ?

Lets understand the concepts behnind the basic HTML we jusy created.

# Elements
An **HTML element** is the fundamental building block of a web page, consisting of a start tag, content (optional), and an end tag. It represents a piece of content or functionality, such as a paragraph, heading, image, or link, on a web page. For example, the `<p>` element defines a paragraph, and the content inside it is displayed as text: `<p>This is a paragraph.</p>`. Some elements, like `<img>`, are self-closing and do not require an end tag. Elements define the structure and meaning of the content in an HTML document. There are two types of elements

1. **Semantic Elements**  
   - Clearly define the purpose and meaning of content.  
   - Examples: `<header>`, `<footer>`, `<article>`, `<nav>`.  

2. **Non-Semantic Elements**  
   - Do not convey meaning about their content.  
   - Examples: `<div>`, `<span>`.  

Semantic elements improve accessibility and SEO, while non-semantic elements are used for layout and styling purposes.

# Tags  
An **HTML tag** is the textual representation used to define the beginning and end of an element. Tags are enclosed in angle brackets (`< >`) and may include the element's name and attributes. A start tag (e.g., `<h1>`) marks the beginning of an element, and an optional end tag (e.g., `</h1>`) marks its end. For example, `<h1>Heading</h1>` defines a heading element, where `<h1>` is the start tag and `</h1>` is the end tag. Tags are essential for structuring content and enabling browsers to interpret and render HTML documents correctly.

# Attributes  
Attributes in HTML are additional properties or information added to elements to define their behavior, appearance, or functionality. They are included within the start tag of an element, typically as key-value pairs (e.g., `name="value"`). For example, in `<img src="image.jpg" alt="Description">`, the `src` attribute specifies the image source file, and the `alt` attribute provides alternative text for accessibility. Attributes customize and enhance the functionality of HTML elements, allowing developers to control layout, behavior, and interactions on a web page.
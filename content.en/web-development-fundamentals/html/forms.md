---
title: Forms
weight: 5
---

> An **HTML form** is a structured way to collect user input and send it to a server for processing. Forms are essential for enabling user interaction on web pages, such as logging in, signing up, providing feedback, or searching for information.

---

**Key Components in Form**

**Form Element**
The `<form>` element serves as a container for input elements and specifies how and where to send the data.

```emmet
form[action="submit.php" method="post"]
```

- **`action`**: Specifies the URL where the form data will be sent.
- **`method`**: Determines the HTTP method to use (`GET` or `POST`).

Lets start design a form with the few common input types.
Create file under `src` named `form.html`.

---

# Common Input Types in Forms

## Text Input

Used for single-line text.

```emmet
input:text[name="username" placeholder="Enter your name"]
```

## Password Input

Used for secure input (hides characters).

```emmet
input:password[name="password" placeholder="Enter your password"]
```

## Email Input

Validates an email address.

```emmet
input:email[name="email" placeholder="Enter your email"]
```

## Number Input

Allows only numeric input.

```emmet
input:number[name="age" min="1" max="100"]
```

## Radio Buttons

Used for selecting one option from a group.

```emmet
label>input:radio[name="gender" value="male"]{ Male}^^label>input:radio[name="gender" value="female"]{ Female}
```

## Checkboxes

Used for selecting one or more options.

```emmet
label>input:checkbox[name="subscribe" value="newsletter"]{ Subscribe to Newsletter}
```

## Dropdown List (Select)

Allows the user to choose one option from a dropdown menu.

```emmet
select[name="country"]>option[value="us"]{United States}+option[value="uk"]{United Kingdom}
```

## Multiselect List (Select)

Allows the user to choose more than one option from a list menu.

```emmet
label[for="cars"]{Choose a car:}+select[name="cars" multiple]>option[value="volvo"]{Volvo}+option[value="saab"]{Saab}+option[value="opel"]{Opel}+option[value="audi"]{Audi}
```

## Text Area

For multi-line text input.

```emmet
textarea[name="message" rows=4 cols=50 placeholder="Enter your message"]
```

## File Upload

Allows users to upload a file.

```emmet
input:file[name="profile_picture"]
```

## Button

Creates a clickable button that does nothing by default

```emmet
button[type=button]{Click Me}
```

## Submit Button

Used to submit the form data.

```emmet
input:submit[value=Submit]
```

## Reset Button

Resets all form fields to their default values.

```emmet
input:reset[value=Reset]
```

---

**HTML Form Example**

```emmet
html:5>head>meta:charset+meta:vp+title{HTML Form Example}^^body>h1{Contact Us}+form[action="/submit" method="post"]>(label[for="name"]{Name:}+input:text#name[name="name" required]+br*2+label[for="email"]{Email:}+input:email#email[name="email" required]+br*2+p{Gender:}+label>input:radio[name="gender" value="male"]+{ Male}^^label>input:radio[name="gender" value="female"]+{ Female}+br*2+label[for="country"]{Country:}+select#country[name="country"]>option[value="us"]{United States}+option[value="uk"]{United Kingdom}+option[value="in"]{India}^^br*2+label[for="message"]{Message:}+br+textarea#message[name="message" rows="5" cols="40"]^^br*2+input:submit[value="Submit"])
```

---

# Attributes of the `<form>` Element

**`action`**

- Specifies the URL where the form data is sent.
- Example: `action="/submit.php"`

**`method`**

- Defines the HTTP method:
  - `GET`: Appends form data to the URL (visible in the address bar).
  - `POST`: Sends data in the HTTP request body (more secure).

**`enctype`**

- Specifies the encoding type for form data:
  - `application/x-www-form-urlencoded` (default for text data).
  - `multipart/form-data` (used for file uploads).

**`autocomplete`**

- Enables or disables the browser's autofill feature.
- Example: `autocomplete="on"` or `autocomplete="off"`

**`target`**

- Specifies where to display the response:
  - `_self`: Default, opens in the same window.
  - `_blank`: Opens in a new tab or window.

---

# Validation in Forms

HTML provides built-in validation for form inputs to ensure data accuracy:

**`required`**: Ensures the field is not left empty.

```emmet
 input:text[name="name" required]
```

**`min` and `max`**: Specifies numeric range.

```emmet
input:number[name=age min=1 max=100]
```

**`pattern`**: Validates input against a regular expression.

```emmet
input:text[name=username pattern="[a-zA-Z0-9]+" title="Only letters and numbers allowed."]
```

**`maxlength` and `minlength`**: Limits the number of characters.

```emmet
input:text[name=username minlength=5 maxlength=10]
```

---

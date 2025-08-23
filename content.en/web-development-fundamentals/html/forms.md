---
title: Forms
weight: 5
---

> An **HTML form** is a structured way to collect user input and send it to a server for processing. Forms are essential for enabling user interaction on web pages, such as logging in, signing up, providing feedback, or searching for information.

---

 **Key Components in Form**

 **Form Element**
   The `<form>` element serves as a container for input elements and specifies how and where to send the data.
   ```html
   <form action="submit.php" method="post">
     <!-- Input elements go here -->
   </form>
   ```
   - **`action`**: Specifies the URL where the form data will be sent.
   - **`method`**: Determines the HTTP method to use (`GET` or `POST`).


Lets start design a form with the few common input types.
Create file under `src` named `form.html`.

---

# Common Input Types in Forms

## Text Input
Used for single-line text.
```html
<input type="text" name="username" placeholder="Enter your name">
```

## Password Input
Used for secure input (hides characters).
```html
<input type="password" name="password" placeholder="Enter your password">
```

## Email Input
Validates an email address.
```html
<input type="email" name="email" placeholder="Enter your email">
```

## Number Input
Allows only numeric input.
```html
<input type="number" name="age" min="1" max="100">
```

##  Radio Buttons
Used for selecting one option from a group.
```html
<label><input type="radio" name="gender" value="male"> Male</label>
<label><input type="radio" name="gender" value="female"> Female</label>
```

## Checkboxes
Used for selecting one or more options.
```html
<label><input type="checkbox" name="subscribe" value="newsletter"> Subscribe to Newsletter</label>
```

## Dropdown List (Select)
Allows the user to choose one option from a dropdown menu.
```html
<select name="country">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>
```


## Multiselect List (Select)
Allows the user to choose more than one option from a list menu.
```html
<label for="cars">Choose a car:</label>
   <select name="cars" multiple>
   <option value="volvo">Volvo</option>
   <option value="saab">Saab</option>
   <option value="opel">Opel</option>
   <option value="audi">Audi</option>
</select>
```



## Text Area
For multi-line text input.
```html
<textarea name="message" rows="4" cols="50" placeholder="Enter your message"></textarea>
```

## File Upload
Allows users to upload a file.
```html
<input type="file" name="profile_picture">
```

## Button
Creates a clickable button that does nothing by default 
```html
<button type="button">Click Me</button>
```

## Submit Button
Used to submit the form data.
```html
<input type="submit" value="Submit">
```

## Reset Button
Resets all form fields to their default values.
```html
<input type="reset" value="Reset">
```

---

**HTML Form Example**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Form Example</title>
</head>
<body>
  <h1>Contact Us</h1>
  <form action="/submit" method="post">
    <!-- Text Input -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>

    <!-- Email Input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>

    <!-- Radio Buttons -->
    <p>Gender:</p>
    <label><input type="radio" name="gender" value="male"> Male</label>
    <label><input type="radio" name="gender" value="female"> Female</label><br><br>

    <!-- Dropdown -->
    <label for="country">Country:</label>
    <select id="country" name="country">
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="in">India</option>
    </select><br><br>

    <!-- Text Area -->
    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="5" cols="40"></textarea><br><br>

    <!-- Submit Button -->
    <input type="submit" value="Submit">
  </form>
</body>
</html>
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
   ```html
   <input type="text" name="name" required>
   ```

**`min` and `max`**: Specifies numeric range.
   ```html
   <input type="number" name="age" min="1" max="100">
   ```

**`pattern`**: Validates input against a regular expression.
   ```html
   <input type="text" name="username" pattern="[a-zA-Z0-9]+" title="Only letters and numbers allowed.">
   ```

**`maxlength` and `minlength`**: Limits the number of characters.
   ```html
   <input type="text" name="username" maxlength="10" minlength="5">
   ``` 

---
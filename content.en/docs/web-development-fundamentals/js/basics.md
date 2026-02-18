---
title: Basics
weight: 1
---


#### **Embedding JavaScript in HTML**
1. **Inline Script**  
   ```html
   <button onclick="alert('Hello, World!')">Click Me</button>
   ```

2. **Internal Script**  
   ```html
   <script>
     document.write("Hello, World!");
   </script>
   ```

3. **External Script**  
   ```html
   <script src="script.js"></script>
   ```

   *Example `script.js`:*
   ```javascript
   console.log("Hello, World!");
   ```

---

### **Key JavaScript Concepts**

#### **1. Variables**
Variables store data values.
```javascript
let name = "John";   // Modern variable declaration
const age = 25;      // Constant value
var isStudent = true; // Older variable declaration
```

#### **2. Data Types**
JavaScript supports various data types:
- **String:** `"Hello"`
- **Number:** `42`
- **Boolean:** `true` or `false`
- **Object:** `{ name: "John", age: 25 }`
- **Array:** `[1, 2, 3, 4]`
- **Undefined:** A variable with no assigned value.

#### **3. Functions**
Reusable blocks of code.
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Outputs: Hello, Alice!
```

#### **4. Events**
JavaScript handles user actions and events.
```javascript
document.getElementById("myButton").onclick = function() {
  alert("Button clicked!");
};
```

#### **5. Conditional Statements**
Control the flow of execution.
```javascript
let score = 85;
if (score > 90) {
  console.log("Excellent");
} else if (score > 75) {
  console.log("Good");
} else {
  console.log("Needs Improvement");
}
```

#### **6. Loops**
Perform repetitive tasks.
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

### **Real-World Use Cases**
1. **Web Development**  
   - Interactive forms, sliders, modals, and animations.

2. **Game Development**  
   - Browser-based games using HTML5 canvas and libraries like Phaser.js.

3. **Mobile Apps**  
   - Frameworks like React Native allow developers to build cross-platform mobile apps.

4. **Server-Side Development**  
   - Node.js enables building scalable server-side applications.

5. **Real-Time Applications**  
   - Apps like chat platforms or collaborative tools using WebSockets.

---

### **Hello World Example**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Example</title>
</head>
<body>
  <h1>Welcome to JavaScript!</h1>
  <button onclick="sayHello()">Click Me</button>

  <script>
    function sayHello() {
      alert("Hello, World!");
    }
  </script>
</body>
</html>
```

When the button is clicked, a JavaScript function (`sayHello`) is called, displaying an alert box with "Hello, World!"

---

### **Advantages of JavaScript**
- **Versatility:** Runs on both client and server sides.
- **Interactivity:** Adds life to static web pages.
- **Rich Ecosystem:** Access to vast libraries and frameworks.
- **Speed:** Runs directly in the browser without requiring compilation.

JavaScript is the cornerstone of modern web development, enabling developers to build everything from simple web pages to complex, scalable web applications.
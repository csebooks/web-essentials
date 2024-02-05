---
title: "JavaScript: Arrays"
weight: 7
---

# O B J E C T I V E S

In this chapter you will learn:

■ To use arrays to store lists and tables of values.

■ To declare an array, initialize an array and refer to individual elements of an array.

■ To pass arrays to functions.

■ To search and sort an array.

■ To declare and manipulate multidimensional arrays.

## Introduction

This chapter serves as an introduction to the important topic of data structures. **Arrays** are data structures consisting of related data items (sometimes called **collections** of data items). JavaScript arrays are “dynamic” entities in that they can change size after they are created. Many of the techniques demonstrated in this chapter are used frequently in Chapters 12–13 as we introduce the collections that allow a script programmer to manip- ulate every element of an XHTML document dynamically.

## Arrays

An array is a group of memory locations that all have the same name and normally are of the same type (although this attribute is not required in JavaScript). To refer to a particular location or element in the array, we specify the name of the array and the **position number** of the particular element in the array.

Figure 10.1 shows an array of integer values named c. This array contains 12 **ele- ments**_._ Any one of these elements may be referred to by giving the name of the array fol- lowed by the position number of the element in square brackets (\[\]). The first element in every array is the **zeroth element**_._ Thus, the first element of array c is referred to as c\[0\], the second element of array c is referred to as c\[1\], the seventh element of array c is referred to as c\[6\] and, in general, the \_i_th element of array c is referred to as c\[i-1\]. Array names follow the same conventions as other identifiers.

The position number in square brackets is called a **subscript** (or an **index**). A subscript must be an integer or an integer expression. If a program uses an expression as a subscript, then the expression is evaluated to determine the value of the subscript. For example, if we assume that variable a is equal to 5 and that variable b is equal to 6, then the statement

c\[ a + b \] += 2;

adds 2 to array element c\[ 11 \]. Note that a subscripted array name is a left-hand-side ex- pression—it can be used on the left side of an assignment to place a new value into an array

**Fig. 10.1** | Array with 12 elements.

element.It can also be used on the right side of an assignment to assign its value to another left-hand side expression.

Let us examine array c in Fig. 10.1 more closely. The array’s **name** is c. The **length** of array c is 12 and can be found using by the following expression:

c.length

Every array in JavaScript knows its own length. The array’s 12 elements are referred to as c\[ 0 \], c\[ 1 \], c\[ 2 \], …, c\[ 11 \]. The **value** of c\[ 0 \] is -45, the value of c\[ 1 \] is 6, the value of c\[ 2 \] is 0, the value of c\[ 7 \] is 62 and the value of c\[ 11 \] is 78. To calculate the sum of the values contained in the first three elements of array c and store the result in variable sum, we would write

sum = c\[ 0 \] + c\[ 1 \] + c\[ 2 \];

To divide the value of the seventh element of array c by 2 and assign the result to the vari- able x, we would write

x = c\[ 6 \] / 2;

**Common Programming Error 10.1**

> _It is important to note the difference between the “seventh element of the array” and “array ele- ment seven.” Because array subscripts begin at 0, the seventh element of the array has a subscript of 6, while array element seven has a subscript of 7 and is actually the eighth element of the array. This confusion is a source of “off-by-one” errors._ 10.1

The brackets that enclose the array subscript are a JavaScript operator. Brackets have the same level of precedence as parentheses. The chart in Fig. 10.2 shows the precedence and associativity of the operators introduced so far in the text. They are shown from top to bottom in decreasing order of precedence, alongside their associativity and type.

|     Operators      | Associativity |      Type      |
| :----------------: | :-----------: | :------------: |
|     () \[\] .      | left to right |    highest     |
|      ++ -- !       | right to left |     unary      |
|       \* / %       | left to right | multiplicative |
|        \+ -        | left to right |    additive    |
|     < <= > >=      | left to right |   relational   |
|       \== !=       | left to right |    equality    |
|         &&         | left to right |  logical AND   |
|                    | left to right |   logical OR   |
|         ?:         | right to left |  conditional   |
| \= += -= \*= /= %= | right to left |   assignment   |

**Fig. 10.2** | Precedence and associativity of the operators discussed so far.

## Declaring and Allocating Arrays

Arrays occupy space in memory. Actually, an array in JavaScript is an **Array object**. The programmer uses **operator new** to allocate dynamically (request memory for) the number of elements required by each array. Operator new creates an object as the program executes by obtaining enough memory to store an object of the type specified to the right of new. The process of creating new objects is also known as **creating an instance** or **instantiating an object**_,_ and operator new is known as the **dynamic memory allocation operator**. Arrays are allocated with new because arrays are considered to be objects, and all objects must be created with new. To allocate 12 elements for integer array c, use the statement

var c = new Array( 12 );

The preceding statement can also be performed in two steps, as follows:

var c; // declares the array c = new Array( 12 ); // allocates the array

When arrays are allocated, the elements are not initialized—they have the value unde-

fined.

**Common Programming Error 10.2**

> _Assuming that the elements of an array are initialized when the array is allocated may result in logic errors._ 10.2

## Examples Using Arrays

This section presents several examples of creating and manipulating arrays.

**_Creating and Initializing Arrays_** The script in Fig. 10.3 uses operator new to allocate an Array of five elements and an emp- ty array. The script demonstrates initializing an Array of existing elements and also shows that an Array can grow dynamically to accommodate new elements. The Array’s values are displayed in XHTML tables.

Line 17 creates Array n1 as an array of five elements. Line 18 creates Array n2 as an empty array. Lines 21–22 use a for statement to initialize the elements of n1 to their sub-

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 10.3: InitArray.html -->
<!-- Initializing the elements of an array. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Initializing an Array</title>
<style type = "text/css">
table { width: 10em }
th { text-align: left }
</style>
<script type = "text/javascript">
<!--
// create (declare) two new arrays
var n1 = new Array( 5 ); // allocate five-element Array
var n2 = new Array(); // allocate empty Array

// assign values to each element of Array n1
for ( var i = 0; i < n1.length; ++i )
n1\[ i \] = i;

// create and initialize five elements in Array n2
for ( i = 0; i < 5; ++i )
n2\[ i \] = i;

outputArray( "Array n1:", n1 );
outputArray( "Array n2:", n2 );

// output the heading followed by a two-column table
// containing subscripts and elements of "theArray"
function outputArray( heading, theArray )
{
document.writeln( "<h2>" + heading + "</h2>" );
document.writeln( "<table border = \\"1\\"" );
document.writeln( "<thead><th>Subscript</th>" +
"<th>Value</th></thead><tbody>" );

// output the subscript and value of each array element
for ( var i = 0; i < theArray.length; i++ )
document.writeln( "<tr><td>" + i + "</td><td>" +
theArray\[ i \] + "</td></tr>" );

document.writeln( "</tbody></table>" );
} // end function outputArray
// -->
```

**Fig. 10.3** | Initializing the elements of an array. (Part 1 of 2.)

```bash
</script>
</head><body></body>
</html>
```

**Fig. 10.3** | Initializing the elements of an array. (Part 2 of 2.)

script numbers (0 to 4). Note also the use of zero-based counting (remember, array sub- scripts start at 0) so that the loop can access every element of the array. Note too the use of the expression n1.length in the condition for the for statement to determine the length of the array. In this example, the length of the array is 5, so the loop continues executing as long as the value of control variable i is less than 5. For a five-element array, the sub- script values are 0 through 4, so using the less than operator, <, guarantees that the loop does not attempt to access an element beyond the end of the array. Zero-based counting is usually used to iterate through arrays.

Lines 25–26 use a for statement to add five elements to the Array n2 and initialize each element to its subscript number (0 to 4). Note that Array n2 grows dynamically to accommodate the values assigned to each element of the array.

**Software Engineering Observation 10.1**

> _JavaScript automatically reallocates an Array when a value is assigned to an element that is outside the bounds of the original Array. Elements between the last element of the original Array and the new element have undefined values._ 10.1

Lines 28–29 invoke function outputArray (defined in lines 33–46) to display the contents of each array in an XHTML table. Function outputArray receives two argu- ments—a string to be output before the XHTML table that displays the contents of the array and the array to output. Lines 41–43 use a for statement to output XHTML text that defines each row of the table. Once again, note the use of zero-based counting so that the loop can access every element of the array.

**Common Programming Error 10.3**

> _Referring to an element outside the Array bounds is normally a logic error._ 10.3

**Error-Prevention Tip 10.1**

> _When using subscripts to loop through an Array, the subscript should never go below 0 and should always be less than the number of elements in the Array (i.e., one less than the size of the Array). Make sure that the loop-terminating condition prevents the access of elements outside this range._ 10.1

If the values of an Array’s elements are known in advance, the elements can be allo- cated and initialized in the declaration of the array. There are two ways in which the initial values can be specified. The statement

var n = \[ 10, 20, 30, 40, 50 \];

uses a comma-separated **initializer list** enclosed in square brackets (\[ and \]) to create a five- element Array with subscripts of 0, 1, 2, 3 and 4. The array size is determined by the num- ber of values in the initializer list. Note that the preceding declaration does not require the new operator to create the Array object—this functionality is provided by the interpreter when it encounters an array declaration that includes an initializer list. The statement

var n = new Array( 10, 20, 30, 40, 50 );

also creates a five-element array with subscripts of 0, 1, 2, 3 and 4. In this case, the initial values of the array elements are specified as arguments in the parentheses following new

Array. The size of the array is determined by the number of values in parentheses. It is also possible to reserve a space in an Array for a value to be specified later by using a comma as a **place holder** in the initializer list. For example, the statement

var n = \[ 10, 20, , 40, 50 \];

creates a five-element array with no value specified for the third element (n\[ 2 \]).

**_Initializing Arrays with Initializer Lists_**
The script in Fig. 10.4 creates three Array objects to demonstrate initializing arrays with initializer lists (lines 18–20) and displays each array in an XHTML table using the same function outputArray discussed in Fig. 10.3. Note that when Array integers2 is dis- played in the web page, the elements with subscripts 1 and 2 (the second and third ele- ments of the array) appear in the web page as undefined. These are the two elements for which we did not supply values in the declaration in line 20 in the script.

**_Summing the Elements of an Array with for and for…in_**
The script in Fig. 10.5 sums the values contained in theArray, the 10-element integer ar- ray declared, allocated and initialized in line 13. The statement in line 19 in the body of the first for statement does the totaling. Note that the values supplied as initializers for array theArray could be read into the program using an XHTML form.

In this example, we introduce JavaScript’s **for…in statement**, which enables a script to perform a task for each element in an array (or, as we will see in Chapters 12–13, for each element in a collection). This process is also known as **iterating over the elements of an array**. Lines 25-26 show the syntax of a for…in statement. Inside the parentheses, we declare the element variable used to select each element in the object to the right of key-

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 10.4: InitArray2.html -->
<!-- Declaring and initializing arrays. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Initializing an Array with a Declaration</title>
<style type = "text/css">
table { width: 15em }
th { text-align: left }
</style>
<script type = "text/javascript">
<!--
// Initializer list specifies the number of elements and
// a value for each element.
var colors = new Array( "cyan", "magenta","yellow", "black" );
var integers1 = \[ 2, 4, 6, 8 \];
var integers2 = \[ 2, , , 8 \];

outputArray( "Array colors contains", colors );
outputArray( "Array integers1 contains", integers1 );
outputArray( "Array integers2 contains", integers2 );

// output the heading followed by a two-column table
// containing the subscripts and elements of theArray
function outputArray( heading, theArray )
{
document.writeln( "<h2>" + heading + "</h2>" );
document.writeln( "<table border = \\"1\\"" );
document.writeln( "<thead><th>Subscript</th>" +
"<th>Value</th></thead><tbody>" );

// output the subscript and value of each array element
for ( var i = 0; i < theArray.length; i++ )
document.writeln( "<tr><td>" + i + "</td><td>" +
theArray\[ i \] + "</td></tr>" );

document.writeln( "</tbody></table>" );
} // end function outputArray
// -->
</script>
</head><body></body>
</html>
```

**Fig. 10.4** | Declaring and initializing arrays. (Part 1 of 2.)

**Fig. 10.4** | Declaring and initializing arrays. (Part 2 of 2.)

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 10.5: SumArray.html -->
<!-- Summing elements of an array. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Sum the Elements of an Array</title>

<script type = "text/javascript">
<!--
var theArray = \[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 \];
var total1 = 0, total2 = 0;
```

**Fig. 10.5** | Summing elements of an array. (Part 1 of 2.)

```bash
// iterates through the elements of the array in order and adds
// each element's value to total1
for ( var i = 0; i < theArray.length; i++ )
total1 += theArray\[ i \];

document.writeln( "Total using subscripts: " + total1 );

// iterates through the elements of the array using a for... in
// statement to add each element's value to total2
for ( var element in theArray )
total2 += theArray\[ element \];

document.writeln( "<br />Total using for...in: " + total2 );
// -->
</script>
</head><body></body>
</html>
```

**Fig. 10.5** | Summing elements of an array. (Part 2 of 2.)

word in (theArray in this case). When using for…in, JavaScript automatically deter- mines the number of elements in the array. As the JavaScript interpreter iterates over theArray’s elements, variable element is assigned a value that can be used as a subscript for theArray. In the case of an Array, the value assigned is a subscript in the range from 0 up to, but not including, theArray.length. Each value is added to total2 to produce the sum of the elements in the array.

**Error-Prevention Tip 10.2**

> _When iterating over all the elements of an Array, use a for…in statement to ensure that you manipulate only the existing elements of the Array. Note that a for…in statement skips any undefined elements in the array._ 10.2

**_Using the Elements of an Array as Counters_**
In Chapter 9, we indicated that there is a more elegant way to implement the dice-rolling program in Fig. 9.5. The program rolled a single six-sided die 6000 times and used a switch statement to total the number of times each value was rolled. An array version of this script is shown in Fig. 10.6. The switch statement in Fig. 9.5 is replaced by line 24 of this program. This line uses the random face value as the subscript for the array frequency to determine which element to increment during each iteration of the loop. Be- cause the random number calculation in line 23 produces numbers from 1 to 6 (the values for a six-sided die), the frequency array must be large enough to allow subscript values of 1 to 6. The smallest number of elements required for an array to have these subscript values is seven elements (subscript values from 0 to 6). In this program, we ignore element 0 of array frequency and use only the elements that correspond to values on the sides of a die. Also, lines 32–34 of this program use a loop to generate the table that was written one line at a time in Fig. 9.5. Because we can loop through array frequency to help produce the output, we do not have to enumerate each XHTML table row as we did in Fig. 9.5.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 10.6: RollDie.html -->
<!-- Dice-rolling program using an array instead of a switch. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Roll a Six-Sided Die 6000 Times</title>
<style type = "text/css">
table { width: 15em }
th { text-align: left }
</style>
<script type = "text/javascript">
<!--
var face;
var frequency = \[ , 0, 0, 0, 0, 0, 0 \]; // leave frequency\[0\]
// uninitialized

// summarize results
for ( var roll = 1; roll <= 6000; ++roll )
{
face = Math.floor( 1 + Math.random() \* 6 );
++frequency\[ face \];
} // end for

document.writeln( "<table border = \\"1\\"><thead>" );
document.writeln( "<th>Face</th>" +
"<th>Frequency</th></thead><tbody>" );

// generate entire table of frequencies for each face
for ( face = 1; face < frequency.length; ++face )
document.writeln( "<tr><td>" + face + "</td><td>" +
frequency\[ face \] + "</td></tr>" );

document.writeln( "</tbody></table>" );
// -->
</script>
</head>
<body>
<p>Click Refresh (or Reload) to run the script again</p>
</body>
</html>
```

**Fig. 10.6** | Dice-rolling program using an array instead of a switch. (Part 1 of 2.)

**Fig. 10.6** | Dice-rolling program using an array instead of a switch. (Part 2 of 2.)

## Random Image Generator Using Arrays

In Chapter 9, we created a random image generator that required image files to be named 1.gif, 2.gif, …, 7.gif. In this example (Fig. 10.7), we create a more elegant random im- age generator that does not require the image filenames to be integers. This version of the random image generator uses an array pictures to store the names of the image files as strings. The script generates a random integer and uses it as a subscript into the pictures array. The script outputs an XHTML img element whose src attribute contains the image filename located in the randomly selected position in the pictures array.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 10.7: RandomPicture2.html -->
<!-- Random image generation using arrays. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Random Image Generator</title>
<style type = "text/css">
table { width: 15em }
th { text-align: left }
</style>
<script type = "text/javascript">
<!--
var pictures =
\[ "CPE", "EPT", "GPP", "GUI", "PERF", "PORT", "SEO" \];

// pick a random image from the pictures array and displays by
// creating an img tag and appending the src attribute to the
// filename
```

**Fig. 10.7** | Random image generation using arrays. (Part 1 of 2.)

```bash
document.write ( "<img src = \\"" +
pictures\[ Math.floor( Math.random() \* 7 ) \] + ".gif\\" />" );
// -->
</script>
</head>
<body>
<p>Click Refresh (or Reload) to run the script again</p>
</body>
</html>
```

**Fig. 10.7** | Random image generation using arrays. (Part 2 of 2.)

The script declares the array pictures in lines 16–17 and initializes it with the names of seven image files. Lines 22–23 create the img tag that displays the random image on the web page. Line 22 opens the img tag and begins the src attribute. Line 23 generates a random integer from 0 to 6 as an index into the pictures array, the result of which is a randomly selected image filename. The expression

pictures\[ Math.floor( Math.random() \* 7 ) \]

evaluates to a string from the pictures array, which then is written to the document (line 23). Line 23 completes the img tag with the extension of the image file (.gif).

## References and Reference Parameters

Two ways to pass arguments to functions (or methods) in many programming languages are **pass-by-value** and **pass-by-reference**. When an argument is passed to a function by val- ue, a _copy_ of the argument’s value is made and is passed to the called function. In Java- Script, numbers, boolean values and strings are passed to functions by value.

With pass-by-reference, the caller gives the called function direct access to the caller’s data and allows it to modify the data if it so chooses. This procedure is accomplished by passing to the called function the actual **location in memory** (also called the **address**) where the data resides. Pass-by-reference can improve performance because it can elimi- nate the overhead of copying large amounts of data, but it can weaken security because the called function can access the caller’s data. In JavaScript, all objects (and thus all Arrays) are passed to functions by reference.

**Error-Prevention Tip 10.3**

> _With pass-by-value, changes to the copy of the called function do not affect the original variable’s value in the calling function. This prevents the accidental side effects that so greatly hinder the development of correct and reliable software systems._ 10.3

**Software Engineering Observation 10.2**

> _Unlike some other languages, JavaScript does not allow the programmer to choose whether to pass each argument by value or by reference. Numbers, boolean values and strings are passed by value. Objects are passed to functions by reference. When a function receives a reference to an object, the function can manipulate the object directly._ 10.2

**Software Engineering Observation 10.3**

> _When returning information from a function via a return statement, numbers and boolean values are always returned by value (i.e., a copy is returned), and objects are always returned by reference (i.e., a reference to the object is returned). Note that, in the pass-by-reference case, it is not necessary to return the new value, since the object is already modified._ 10.3

To pass a reference to an object into a function, simply specify the reference name in the function call. Normally, the reference name is the identifier that the program uses to manipulate the object. Mentioning the reference by its parameter name in the body of the called function actually refers to the original object in memory, and the original object can be accessed directly by the called function.

Arrays are objects in JavaScript, so Arrays are passed to a function by reference—a called function can access the elements of the caller’s original Arrays. The name of an array actually is a reference to an object that contains the array elements and the length variable, which indicates the number of elements in the array. In the next section, we demonstrate pass-by-value and pass-by-reference, using arrays.

## Passing Arrays to Functions

To pass an array argument to a function, specify the name of the array (a reference to the array) without brackets. For example, if array hourlyTemperatures has been declared as

var hourlyTemperatures = new Array( 24 );

then the function call

modifyArray( hourlyTemperatures );

passes array hourlyTemperatures to function modifyArray. As stated in Section 10.2, ev- ery array object in JavaScript knows its own size (via the length attribute). Thus, when we pass an array object into a function, we do not pass the size of the array separately as an argument. Figure 10.3 illustrated this concept when we passed Arrays n1 and n2 to func- tion outputArray to display each Array’s contents.

Although entire arrays are passed by reference, _individual numeric and boolean array elements_ are passed _by value_ exactly as simple numeric and boolean variables are passed (the objects referred to by individual elements of an Array of objects are still passed by refer- ence). Such simple single pieces of data are called **scalars**, or **scalar quantities**_._ To pass an array element to a function, use the subscripted name of the element as an argument in the function call.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 10.8: PassArray.html -->
<!-- Passing arrays and individual array elements to functions. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Passing arrays and individual array
elements to functions</title>
<script type = "text/javascript">
<!--
var a = \[ 1, 2, 3, 4, 5 \];

document.writeln( "<h2>Effects of passing entire " +
"array by reference</h2>" );
outputArray( "Original array: ", a );

modifyArray( a ); // array a passed by reference

outputArray( "Modified array: ", a );
4
document.writeln( "<h2>Effects of passing array " +
"element by value</h2>" +
"a\[3\] before modifyElement: " + a\[ 3 \] );

modifyElement( a\[ 3 \] ); // array element a\[3\] passed by value

document.writeln( "<br />a\[3\] after modifyElement: " + a\[ 3 \] );

// outputs heading followed by the contents of "theArray"
function outputArray( heading, theArray )
{
document.writeln(
heading + theArray.join( " " ) + "<br />" );
} // end function outputArray

// function that modifies the elements of an array
function modifyArray( theArray )
{
for ( var j in theArray )
theArray\[ j \] \*= 2;
} // end function modifyArray

// function that modifies the value passed
function modifyElement( e )
{
e \*= 2; // scales element e only for the duration of the
// function
document.writeln( "<br />value in modifyElement: " + e );
} // end function modifyElement
// -->
</script>
```

**Fig. 10.8** | Passing arrays and individual array elements to functions. (Part 1 of 2.)

```bash
**54** </head><body></body>
**55** </html>
```

**Fig. 10.8** | Passing arrays and individual array elements to functions. (Part 2 of 2.)

For a function to receive an Array through a function call, the function’s parameter list must specify a parameter that will refer to the Array in the body of the function. Unlike other programming languages, JavaScript does not provide a special syntax for this pur- pose. JavaScript simply requires that the identifier for the Array be specified in the param- eter list. For example, the function header for function modifyArray might be written as

function modifyArray( b )

indicating that modifyArray expects to receive a parameter named b (the argument sup- plied in the calling function must be an Array). Arrays are passed by reference, and there- fore when the called function uses the array name b, it refers to the actual array in the caller (array hourlyTemperatures in the preceding call). The script in Fig. 10.8 demonstrates the difference between passing an entire array and passing an array element.

**Software Engineering Observation 10.4**

> _JavaScript does not check the number of arguments or types of arguments that are passed to a function. It is possible to pass any number of values to a function. JavaScript will attempt to perform conversions when the values are used._ 10.4

The statement in line 17 invokes function outputArray to display the contents of array a before it is modified. Function outputArray (defined in lines 32–36) receives a string to output and the array to output. The statement in lines 34–35 uses Array method **join** to create a string containing all the elements in theArray. Method join takes as its argument a string containing the **separator** that should be used to separate the elements of the array in the string that is returned. If the argument is not specified, the empty string is used as the separator.

Line 19 invokes function modifyArray (lines 39–43) and passes it array a. The modifyArray function multiplies each element by 2. To illustrate that array a’s elements were modified, the statement in line 21 invokes function outputArray again to display the contents of array a after it is modified. As the screen capture shows, the elements of a are indeed modified by modifyArray.

To show the value of a\[ 3 \] before the call to modifyElement, line 25 outputs the value of a\[ 3 \]. Line 27 invokes modifyElement (lines 46–51) and passes a\[ 3 \] as the argument. Remember that a\[ 3 \] actually is one integer value in the array a. Also remember that numeric values and boolean values are always passed to functions by value. Therefore, a copy of a\[ 3 \] is passed. Function modifyElement multiplies its argument by 2 and stores the result in its parameter e. The parameter of function modifyElement is a local variable in that function, so when the function terminates, the local variable is no longer accessible. Thus, when control is returned to the main script, the unmodified value of a\[ 3 \] is displayed by the statement in line 29.

## Sorting Arrays

Sorting data (putting data in a particular order, such as ascending or descending) is one of the most important computing functions. A bank sorts all checks by account number so that it can prepare individual bank statements at the end of each month. Telephone com- panies sort their lists of accounts by last name and, within that, by first name, to make it easy to find phone numbers. Virtually every organization must sort some data—in many cases, massive amounts of data. Sorting data is an intriguing problem that has attracted some of the most intense research efforts in the field of computer science.

The Array object in JavaScript has a built-in method **sort** for sorting arrays. Figure 10.9 demonstrates the Array object’s sort method.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 10.9: Sort.html -->
<!-- Sorting an array with sort. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Sorting an Array with Array Method sort</title>
<script type = "text/javascript">
<!--
var a = \[ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 \];

document.writeln( "<h1>Sorting an Array</h1>" );
outputArray( "Data items in original order: ", a );
a.sort( compareIntegers ); // sort the array
outputArray( "Data items in ascending order: ", a );

// output the heading followed by the contents of theArray
function outputArray( heading, theArray )
{
document.writeln( "<p>" + heading +
theArray.join( " " ) + "</p>" );
} // end function outputArray
```

**Fig. 10.9** | Sorting an array with sort. (Part 1 of 2.)

```bash

// comparison function for use with sort
function compareIntegers( value1, value2 )
{
return parseInt( value1 ) - parseInt( value2 );
} // end function compareIntegers
// -->
</script>
</head><body></body>
</html>
```

**Fig. 10.9** | Sorting an array with sort. (Part 2 of 2.)

By default, Array method sort (with no arguments) uses string comparisons to deter- mine the sorting order of the Array elements. The strings are compared by the ASCII values of their characters. \[_Note:_ String comparison is discussed in more detail in Chapter 11, JavaScript: Objects.\] In this example, we’d like to sort an array of integers.

Method sort takes as its optional argument the name of a function (called the **com- parator function**) that compares its two arguments and returns one of the following:

• a negative value if the first argument is less than the second argument

• zero if the arguments are equal, or

• a positive value if the first argument is greater than the second argument

This example uses function compareIntegers (defined in lines 27–30) as the comparator function for method sort. It calculates the difference between the integer values of its two arguments (function parseInt ensures that the arguments are handled properly as inte- gers). If the first argument is less than the second argument, the difference will be a nega- tive value. If the arguments are equal, the difference will be zero. If the first argument is greater than the second argument, the difference will be a positive value.

Line 16 invokes Array object a’s sort method and passes function compareIntegers

as an argument. Method sort receives function compareIntegers as an argument, then uses the function to compare elements of the Array a to determine their sorting order.

**Software Engineering Observation 10.5**

> _.Functions in JavaScript are considered to be data. Therefore, functions can be assigned to variables, stored in Arrays and passed to functions just like other data types._ 10.5

## Searching Arrays: Linear Search and Binary Search

Often, a programmer will be working with large amounts of data stored in arrays. It may be necessary to determine whether an array contains a value that matches a certain key val- ue. The process of locating a particular element value in an array is called searching. In this section we discuss two searching techniques—the simple linear search technique (Fig. 10.10) and the more efficient binary search technique (Fig. 10.11).

**_Searching an Array with Linear Search_**
The script in Fig. 10.10 performs a **linear search** on an array. Function linearSearch (de- fined in lines 42–50) uses a for statement containing an if statement to compare each element of an array with a search key (lines 45–47). If the search key is found, the function returns the subscript value (line 47) of the element to indicate the exact position of the search key in the array. \[_Note:_ The loop (lines 45–47) in the linearSearch function ter- minates, and the function returns control to the caller as soon as the return statement in its body executes.\] If the search key is not found, the function returns a value of –1. The function returns the value –1 because it is not a valid subscript number.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 10.10: LinearSearch.html -->
<!-- Linear search of an array. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Linear Search of an Array</title>
<script type = "text/javascript">
<!--
var a = new Array( 100 );// create an Array

// fill Array with even integer values from 0 to 198
for ( var i = 0; i < a.length; ++i )
a\[ i \] = 2 \* i;

// function called when "Search" button is pressed
function buttonPressed()
{
// get the input text field
var inputVal = document.getElementById( "inputVal" );

// get the result text field
var result = document.getElementById( "result" );

// get the search key from the input text field
var searchKey = inputVal.value;

// Array a is passed to linearSearch even though it
// is a global variable. Normally an array will
// be passed to a method for searching.
```

**Fig. 10.10** | Linear search of an array. (Part 1 of 2.)

```bash
var element = linearSearch( a, parseInt( searchKey ) );

if ( element != -1 )
result.value = "Found value in element " + element;
else
result.value = "Value not found";
} // end function buttonPressed

// Search "theArray" for the specified "key" value
function linearSearch( theArray, key )
{
// iterates through each element of the array in order
for ( var n = 0; n < theArray.length; ++n )
if ( theArray\[ n \] == key )
return n;

return -1;
} // end function linearSearch
// -->
</script>
</head>

<body>
<form action = "">
<p>Enter integer search key<br />
<input id = "inputVal" type = "text" />
<input type = "button" value = "Search"
onclick = "buttonPressed()" /><br /></p>
<p>Result<br />
<input id = "result" type = "text" size = "30" /></p>
</form>
</body>
</html>
```

**Fig. 10.10** | Linear search of an array. (Part 2 of 2.)

If the array being searched is not in any particular order, the value is just as likely to be found in the first element as the last. On average, therefore, the program will have to compare the search key with half the elements of the array.

The program contains a 100-element array (defined in line 12) filled with the even integers from 0 to 198. The user types the search key in a text field (defined in the XHTML form in lines 56–63) and clicks the **Search** button to start the search. \[_Note:_ The array is passed to linearSearch even though the array is a global script variable. We do this because arrays are normally passed to functions for searching.\]

**_Searching an Array with Binary Search_**
The linear search method works well for small arrays or for unsorted arrays. However, for large arrays, linear searching is inefficient. The **binary search algorithm** is more efficient, but it requires that the array be sorted. The first iteration of this algorithm tests the middle element in the array. If this matches the search key, the algorithm ends. Assuming the array is sorted in ascending order, then if the search key is less than the middle element, it cannot match any element in the second half of the array and the algorithm continues with only the first half of the array (i.e., the first element up to, but not including, the middle ele- ment). If the search key is greater than the middle element, it cannot match any element in the first half of the array and the algorithm continues with only the second half of the array (i.e., the element after the middle element through the last element). Each iteration tests the middle value of the remaining portion of the array. If the search key does not match the element, the algorithm eliminates half of the remaining elements. The algo- rithm ends by either finding an element that matches the search key or reducing the sub- array to zero size.

As an example consider the sorted 15-element array

2 3 5 10 27 30 34 51 56 65 77 81 82 93 99

and a search key of 65. A program implementing the binary search algorithm would first check whether 51 is the search key (because 51 is the middle element of the array). The search key (65) is larger than 51, so 51 is discarded along with the first half of the array (all elements smaller than 51.) Next, the algorithm checks whether 81 (the middle element of the remainder of the array) matches the search key. The search key (65) is smaller than 81, so 81 is discarded along with the elements larger than 81. After just two tests, the algo- rithm has narrowed the number of values to check to three (56, 65 and 77). The algorithm then checks 65 (which indeed matches the search key), and returns the index of the array element containing 65. This algorithm required just three comparisons to determine whether the search key matched an element of the array. Using a linear search algorithm would have required 10 comparisons. \[_Note:_ In this example, we have chosen to use an ar- ray with 15 elements so that there will always be an obvious middle element in the array. With an even number of elements, the middle of the array lies between two elements. We implement the algorithm to choose the lower of those two elements.\]

Figure 10.11 presents the iterative version of function binarySearch (lines 40–64). Function binarySearch is called from line 31 of function buttonPressed (lines 18–37)— the event handler for the **Search** button in the XHTML form. Function binarySearch

receives two arguments—an array called theArray (the array to search) and key (the search key). The array is passed to binarySearch even though the array is a global variable. Once again, we do this because an array is normally passed to a function for searching. If key matches the middle element of a subarray (line 55), middle (the subscript of the current element) is returned, to indicate that the value was found and the search is complete. If key does not match the middle element of a subarray, the low subscript or the high sub- script (both declared in the function) is adjusted, so that a smaller subarray can be searched. If key is less than the middle element (line 57), the high subscript is set to middle - 1 and the search is continued on the elements from low to middle - 1. If key is greater than the middle element (line 59), the low subscript is set to middle + 1 and the search is continued on the elements from middle + 1 to high. These comparisons are per- formed by the nested if…else statement in lines 55–60.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 10.11: BinarySearch.html -->
<!-- Binary search of an array. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Binary Search</title>
<script type = "text/javascript">
<!--
var a = new Array( 15 );

for ( var i = 0; i < a.length; ++i )
a\[ i \] = 2 \* i;

// function called when "Search" button is pressed
function buttonPressed()
{
var inputVal = document.getElementById( "inputVal" );
var result = document.getElementById( "result" );
var searchKey = inputVal.value;

result.value = "Portions of array searched\\n";

// Array a is passed to binarySearch even though it
// is a global variable. This is done because
// normally an array is passed to a method
// for searching.
var element =
binarySearch( a, parseInt( searchKey ) );

if ( element != -1 )
result.value += "\\nFound value in element " + element;
else
result.value += "\\nValue not found";
} // end function buttonPressed
```

**Fig. 10.11** | Binary search of an array. (Part 1 of 3.)

```bash
// binary search function
function binarySearch( theArray, key )
{
var low = 0; // low subscript
var high = theArray.length - 1; // high subscript
var middle; // middle subscript

while ( low <= high ) {
middle = ( low + high ) / 2;

// The following line is used to display the
// part of theArray currently being manipulated
// during each iteration of the binary
// search loop. buildOutput( theArray, low, middle, high );
buildOutput( theArray, low, middle, high );

if ( key == theArray\[ middle \] ) // match
return middle;
else if ( key < theArray\[ middle \] )
high = middle - 1; // search low end of array
else
low = middle + 1; // search high end of array
} // end while

return -1; // searchKey not found
} // end function binarySearch

// Build one row of output showing the current
// part of the array being processed.
function buildOutput( theArray, low, mid, high )
{
var result = document.getElementById( "result" );

for ( var i = 0; i < theArray.length; i++ )
{
if ( i < low || i > high )
result.value += " ";
else if ( i == mid ) // mark middle element in output
result.value += theArray\[ i \] +
( theArray\[ i \] < 10 ? "\* " : "\* " );
else
result.value += theArray\[ i \] +
( theArray\[ i \] < 10 ? " " : " " );
} // end for

result.value += "\\n";
} // end function buildOutput
// -->
</script>
</head>
```

**Fig. 10.11** | Binary search of an array. (Part 2 of 3.)

```bash
<body>
<form action = "">
<p>Enter integer search key<br />
<input id = "inputVal" type = "text" />
<input type = "button" value = "Search"
onclick = "buttonPressed()" /><br /></p>
<p>Result<br />
<textarea id = "result" rows = "7" cols = "60">
</textarea></p>
</form>
</body>
</html>
```

**Fig. 10.11** | Binary search of an array. (Part 3 of 3.)

In a worst-case scenario, searching an array of 1023 elements will take only 10 com- parisons using a binary search. Repeatedly dividing 1024 by 2 (because after each compar- ison we are able to eliminate half of the array) yields the values 512, 256, 128, 64, 32, 16, 8, 4, 2 and 1. The number 1024 (210) is divided by 2 only ten times to get the value 1. Dividing by 2 is equivalent to one comparison in the binary search algorithm. An array of about one million elements takes a maximum of 20 comparisons to find the key. An array of about one billion elements takes a maximum of 30 comparisons to find the key. When searching a sorted array, this is a tremendous increase in performance over the linear search that required comparing the search key to an average of half the elements in the array. For a one-billion-element array, this is the difference between an average of 500 million com- parisons and a maximum of 30 comparisons! The maximum number of comparisons needed for the binary search of any sorted array is the exponent of the first power of 2 greater than the number of elements in the array.

Our program uses a 15-element array (defined at line 12). The first power of 2 greater than the number of elements is 16 (24), so binarySearch requires at most four compari- sons to find the key. To illustrate this, line 53 calls method buildOutput (declared in lines 68–85) to output each subarray during the binary search process. Method buildOutput marks the middle element in each subarray with an asterisk (\*) to indicate the element with which the key is compared. No matter what search key is entered, each search in this example results in a maximum of four lines of output—one per comparison.

## Multidimensional Arrays

Multidimensional arrays with two subscripts are often used to represent tables of values consisting of information arranged in **rows** and **columns**_._ To identify a particular table el- ement, we must specify the two subscripts; by convention, the first identifies the element’s row, and the second identifies the element’s column. Arrays that require two subscripts to identify a particular element are called **two-dimensional arrays**_._

Multidimensional arrays can have more than two dimensions. JavaScript does not support multidimensional arrays directly, but does allow the programmer to specify arrays whose elements are also arrays, thus achieving the same effect. When an array contains one-dimensional arrays as its elements, we can imagine these one-dimensional arrays as rows of a table, and the positions in these arrays as columns. Figure 10.12 illustrates a two- dimensional array named a that contains three rows and four columns (i.e., a three-by-four array—three one-dimensional arrays, each with 4 elements). In general, an array with _m_ rows and _n_ columns is called an **_m_\-by-_n_ array**_._

Every element in array a is identified in Fig. 10.12 by an element name of the form a\[ i \]\[ j \]; a is the name of the array, and i and j are the subscripts that uniquely identify

**Fig. 10.12** | Two-dimensional array with three rows and four columns.

the row and column, respectively, of each element in a. Note that the names of the ele- ments in the first row all have a first subscript of 0; the names of the elements in the fourth column all have a second subscript of 3.

**_Arrays of One-Dimensional Arrays_**
Multidimensional arrays can be initialized in declarations like a one-dimensional array. Array b with two rows and two columns could be declared and initialized with the state- ment

var b = [ [ 1, 2 ], [ 3, 4 ] ];

The values are grouped by row in square brackets. The array [1, 2] initializes element b[0], and the array [3, 4] initializes element b[1]. So 1 and 2 initialize b[0][0] and b[0][1], respectively. Similarly, 3 and 4 initialize b[1][0] and b[1][1], respectively. The interpreter determines the number of rows by counting the number of sub initializer lists—arrays nested within the outermost array. The interpreter determines the number of columns in each row by counting the number of values in the sub-array that initializes the row.

**_Two-Dimensional Arrays with Rows of Different Lengths_**
The rows of a two-dimensional array can vary in length. The declaration

var b = [ [ 1, 2 ], [ 3, 4, 5 ] ];

creates array b with row 0 containing two elements (1 and 2) and row 1 containing three elements (3, 4 and 5).

**_Creating Two-Dimensional Arrays with new_**
A multidimensional array in which each row has a different number of columns can be allocated dynamically, as follows:

var b;
b = new Array( 2 ); // allocate rows
b[ 0 ] = new Array( 5 ); // allocate columns for row 0
b[ 1 ] = new Array( 3 ); // allocate columns for row 1

The preceding code creates a two-dimensional array with two rows. Row 0 has five col- umns, and row 1 has three columns.

**_Two-Dimensional Array Example: Displaying Element Values_**
Figure 10.13 initializes two-dimensional arrays in declarations and uses nested for…in loops to **traverse the arrays** (i.e., manipulate every element of the array).

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 10.13: InitArray3.html -->
<!-- Initializing multidimensional arrays. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
```

**Fig. 10.13** | Initializing multidimensional arrays. (Part 1 of 2.)

```bash
<head>
<title>Initializing Multidimensional Arrays</title>
<script type = "text/javascript">
<!--
var array1 = [ [ 1, 2, 3 ], // first row
[ 4, 5, 6 ] ]; // second row
var array2 = [ [ 1, 2 ], // first row
[ 3 ], // second row
[ 4, 5, 6 ] ]; // third row

outputArray( "Values in array1 by row", array1 );
outputArray( "Values in array2 by row", array2 );

function outputArray( heading, theArray )
{
document.writeln( "<h2>" + heading + "</h2><pre>" );

// iterates through the set of one-dimensional arrays
for ( var i in theArray )
{
// iterates through the elements of each one-dimensional
// array
for ( var j in theArray[ i ] )
document.write( theArray[ i ][ j ] + " " );

document.writeln( "<br />" );
} // end for

document.writeln( "</pre>" );
} // end function outputArray
// -->
</script>
</head><body></body>
</html>
```

**Fig. 10.13** | Initializing multidimensional arrays. (Part 2 of 2.)

The program declares two arrays in main script (in the XHTML head element). The declaration of array1 (lines 12–13 provides six initializers in two sublists. The first sublist initializes the first row of the array to the values 1, 2 and 3; the second sublist initializes the second row of the array to the values 4, 5 and 6. The declaration of array2 (lines 14– 16) provides six initializers in three sublists. The sublist for the first row explicitly initial- izes the first row to have two elements, with values 1 and 2, respectively. The sublist for the second row initializes the second row to have one element, with value 3. The sublist for the third row initializes the third row to the values 4, 5 and 6.

The script calls function outputArray from lines 18–19 to display each array’s ele- ments in the web page. Function outputArray (lines 21–37) receives two arguments—a string heading to output before the array and the array to output (called theArray). Note the use of a nested for…in statement to output the rows of each two-dimensional array. The outer for…in statement iterates over the rows of the array. The inner for…in state- ment iterates over the columns of the current row being processed. The nested for…in

statement in this example could have been written with for statements, as follows:

for ( var i = 0; i < theArray.length; ++i ) {

for ( var j = 0; j < theArray\[ i \].length; ++j )
document.write( theArray\[ i \]\[ j \] + " " );
document.writeln( "<br />" );
}

In the outer for statement, the expression theArray.length determines the number of rows in the array. In the inner for statement, the expression theArray\[i\].length deter- mines the number of columns in each row of the array. This condition enables the loop to determine, for each row, the exact number of columns.

**_Common Multidimensional-Array Manipulations with for and for…in Statements_**
Many common array manipulations use for or for…in repetition statements. For exam- ple, the following for statement sets all the elements in the third row of array a in Fig. 10.12 to zero:

for ( var col = 0; col < a[ 2 ].length; ++col )
a[ 2 ][ col ] = 0;

We specified the _third_ row; therefore, we know that the first subscript is always 2 (0 is the first row and 1 is the second row). The for loop varies only the second subscript (i.e., the column subscript). The preceding for statement is equivalent to the assignment state- ments

a[ 2 ][ 0 ] = 0;
a[ 2 ][ 1 ] = 0;
a[ 2 ][ 2 ] = 0;
a[ 2 ][ 3 ] = 0;

The following for…in statement is also equivalent to the preceding for statement:

for ( var col in a[ 2 ] )
a[ 2 ][ col ] = 0;

The following nested for statement determines the total of all the elements in array a:

var total = 0;

for ( var row = 0; row < a.length; ++row )

for ( var col = 0; col < a[ row ].length; ++col )
total += a[ row ][ col ];

The for statement totals the elements of the array, one row at a time. The outer for state- ment begins by setting the row subscript to 0, so that the elements of the first row may be totaled by the inner for statement. The outer for statement then increments row to 1, so that the elements of the second row can be totaled. Then the outer for statement incre- ments row to 2, so that the elements of the third row can be totaled. The result can be dis- played when the nested for statement terminates. The preceding for statement is equivalent to the following for…in statement:

var total = 0;

for ( var row in a )

for ( var col in a[ row ] )
total += a[ row ][ col ];

## Building an Online Quiz

Online quizzes and polls are popular web applications often used for educational purposes or just for fun. Web developers typically build quizzes using simple XHTML forms and process the results with JavaScript. Arrays allow a programmer to represent several possible answer choices in a single data structure. Figure 10.14 contains an online quiz consisting of one question. The quiz page contains one of the tip icons used throughout this book and an XHTML form in which the user identifies the type of tip the image represents by selecting one of four radio buttons. After the user selects one of the radio button choices and submits the form, the script determines whether the user selected the correct type of tip to match the mystery image. The JavaScript function that checks the user’s answer combines several of the concepts from the current chapter and previous chapters in a con- cise and useful script.

Before we discuss the script code, we first discuss the body element (lines 25–48) of the XHTML document. The body’s GUI components play an important role in the script.

Lines 26–47 define the form that presents the quiz to users. Line 26 begins the form

element and specifies the onsubmit attribute to "checkAnswers()", indicating that the interpreter should execute the JavaScript function checkAnswers (lines 12–21) when the user submits the form (i.e., clicks the **Submit** button or presses _Enter_).

Line 29 adds the tip image to the page. Lines 32–42 display the radio buttons and corresponding labels that display possible answer choices. Lines 44–45 add the submit

and reset buttons to the page. We now examine the script used to check the answer submitted by the user. Lines 12–

21 declare the function checkAnswers that contains all the JavaScript required to grade the quiz. The if…else statement in lines 17–20 determines whether the user answered the question correctly. The image that the user is asked to identify is the Error-Prevention Tip icon. Thus the correct answer to the quiz corresponds to the second radio button.

An XHTML form’s elements can be accessed individually using getElementById or through the **elements property** of the containing form object. The elements property

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 10.14: quiz.html -->
<!-- Online quiz graded with JavaScript. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Online Quiz</title>
<script type = "text/JavaScript">
<!--
function checkAnswers()
{
var myQuiz = document.getElementById( "myQuiz" );

// determine whether the answer is correct
if ( myQuiz.elements\[ 1 \].checked )
alert( "Congratulations, your answer is correct" );
else // if the answer is incorrect
alert( "Your answer is incorrect. Please try again" ); **21** } // end function checkAnswers **22** \--> **23** </script>
</head>
<body>
<form id = "myQuiz" onsubmit = "checkAnswers()" action = "">
<p>Select the name of the tip that goes with the
image shown:<br />
<img src="EPT.gif" alt="mystery tip"/>
<br />

<input type = "radio" name = "radiobutton" value = "CPE" />
<label>Common Programming Error</label>

<input type = "radio" name = "radiobutton" value = "EPT" />
<label>Error-Prevention Tip</label>

<input type = "radio" name = "radiobutton" value = "PERF" />
<label>Performance Tip</label>

<input type = "radio" name = "radiobutton" value = "PORT" />
<label>Portability Tip</label><br />

<input type = "submit" name = "submit" value = "Submit" />
<input type = "reset" name = "reset" value = "Reset" />
</p>
</form>
</body>
</html>
```

**Fig. 10.14** | Online quiz graded with JavaScript. (Part 1 of 2.)

**Fig. 10.14** | Online quiz graded with JavaScript. (Part 2 of 2.)

contains an array of all the form’s controls. The radio buttons are part of the XHTML form myQuiz, so we access the elements array in line 17 using dot notation (myQuiz.elements[ 1 ]). The array element myQuiz.elements[ 1 ] corresponds to the correct answer (i.e., the second radio button). Finally, line 17 determines whether the property **checked** of the second radio button is true. Property checked of a radio button is true when the radio button is selected, and it is false when the radio button is not selected. Recall that only one radio button may be selected at any given time. If property myQuiz.elements[ 1 ].checked is true, indicating that the correct answer is selected, the script alerts a congratulatory message. If property checked of the radio button is false, then the script alerts an alternate message (line 20).

## Wrap-Up

In this chapter, we discussed how to store related data items into an array structure. After demonstrating the declaration and initialization of an array, we described how to access and manipulate individual elements of the array using subscripts. We then introduced the concept of an Array object, and learned that objects are passed to a method by reference instead of by value. We explored the sorting of arrays, and described two different methods of searching them. Finally, we discussed multidimensional arrays and how to use them to organize arrays in other arrays.

## Web Resources

www.deitel.com/javascript/

The Deitel JavaScript Resource Center contains links to some of the best JavaScript resources on the web. There you’ll find categorized links to JavaScript tools, code generators, forums, books, libraries, frameworks and more. Also check out the tutorials for all skill levels, from introductory to advanced. Be sure to visit the related Resource Centers on XHTML (www.deitel.com/xhtml/) and CSS 2.1 (www.deitel.com/css21/).

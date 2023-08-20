---
title: "JavaScript: Arrays"
weight: 7
---

**O B J E C T I V E S** In this chapter you will learn:

■ To use arrays to store lists and tables of values.

■ To declare an array, initialize an array and refer to individual elements of an array.

■ To pass arrays to functions.

■ To search and sort an array.

■ To declare and manipulate multidimensional arrays.

**_With sobs and tears he sorted out Those of the largest size . . ._ —Lewis Carroll**

**_Attempt the end, and never stand to doubt; Nothing’s so hard, but search will find it out._ —Robert Herrick**

**_Now go, write it before them in a table, and note it in a book._ —Isaiah 30:8**

**_’Tis in my memory lock’d, And you yourself shall keep the key of it._ —William Shakespeare**

10.1 Introduction **363 O**

**u tl**

**in e**

**10.1 Introduction** This chapter serves as an introduction to the important topic of data structures. **Arrays** are data structures consisting of related data items (sometimes called **collections** of data items). JavaScript arrays are “dynamic” entities in that they can change size after they are created. Many of the techniques demonstrated in this chapter are used frequently in Chapters 12–13 as we introduce the collections that allow a script programmer to manip- ulate every element of an XHTML document dynamically.

**10.2 Arrays** An array is a group of memory locations that all have the same name and normally are of the same type (although this attribute is not required in JavaScript). To refer to a particular location or element in the array, we specify the name of the array and the **position number** of the particular element in the array.

Figure 10.1 shows an array of integer values named c. This array contains 12 **ele- ments**_._ Any one of these elements may be referred to by giving the name of the array fol- lowed by the position number of the element in square brackets (\[\]). The first element in every array is the **zeroth element**_._ Thus, the first element of array c is referred to as c\[0\], the second element of array c is referred to as c\[1\], the seventh element of array c is referred to as c\[6\] and, in general, the \_i_th element of array c is referred to as c\[i-1\]. Array names follow the same conventions as other identifiers.

The position number in square brackets is called a **subscript** (or an **index**). A subscript must be an integer or an integer expression. If a program uses an expression as a subscript, then the expression is evaluated to determine the value of the subscript. For example, if we assume that variable a is equal to 5 and that variable b is equal to 6, then the statement

c\[ a + b \] += 2;

adds 2 to array element c\[ 11 \]. Note that a subscripted array name is a left-hand-side ex- pression—it can be used on the left side of an assignment to place a new value into an array

**10.1** Introduction **10.2** Arrays **10.3** Declaring and Allocating Arrays **10.4** Examples Using Arrays **10.5** Random Image Generator Using Arrays **10.6** References and Reference Parameters **10.7** Passing Arrays to Functions **10.8** Sorting Arrays **10.9** Searching Arrays: Linear Search and Binary Search

**10.10** Multidimensional Arrays **10.11** Building an Online Quiz **10.12** Wrap-Up **10.13** Web Resources

Summary | Terminology | Self-Review Exercises | Answers to Self-Review Exercises | Exercises

**364** Chapter 10 JavaScript: Arrays

element. It can also be used on the right side of an assignment to assign its value to another left-hand side expression.

Let us examine array c in Fig. 10.1 more closely. The array’s **name** is c. The **length** of array c is 12 and can be found using by the following expression:

c.length

Every array in JavaScript knows its own length. The array’s 12 elements are referred to as c\[ 0 \], c\[ 1 \], c\[ 2 \], …, c\[ 11 \]. The **value** of c\[ 0 \] is -45, the value of c\[ 1 \] is 6, the value of c\[ 2 \] is 0, the value of c\[ 7 \] is 62 and the value of c\[ 11 \] is 78. To calculate the sum of the values contained in the first three elements of array c and store the result in variable sum, we would write

sum = c\[ 0 \] + c\[ 1 \] + c\[ 2 \];

To divide the value of the seventh element of array c by 2 and assign the result to the vari- able x, we would write

x = c\[ 6 \] / 2;

**Common Programming Error 10.1** _It is important to note the difference between the “seventh element of the array” and “array ele- ment seven.” Because array subscripts begin at 0, the seventh element of the array has a subscript of 6, while array element seven has a subscript of 7 and is actually the eighth element of the array. This confusion is a source of “off-by-one” errors._ 10.1

The brackets that enclose the array subscript are a JavaScript operator. Brackets have the same level of precedence as parentheses. The chart in Fig. 10.2 shows the precedence and associativity of the operators introduced so far in the text. They are shown from top to bottom in decreasing order of precedence, alongside their associativity and type.

**Fig. 10.1** | Array with 12 elements.

\-45

62

\-3

1

6453

78

0

\-89

1543

72

0

6

c\[ 0 \]

Name of the array is c

Position number of the element within the array c

c\[ 7 \]

c\[ 8 \]

c\[ 9 \]

c\[ 10 \]

c\[ 11 \]

c\[ 6 \]

c\[ 5 \]

c\[ 4 \]

c\[ 3 \]

c\[ 2 \]

c\[ 1 \]

ValueName of an individual array element

10.3 Declaring and Allocating Arrays **365**

**10.3 Declaring and Allocating Arrays** Arrays occupy space in memory. Actually, an array in JavaScript is an **Array object**. The programmer uses **operator new** to allocate dynamically (request memory for) the number of elements required by each array. Operator new creates an object as the program executes by obtaining enough memory to store an object of the type specified to the right of new. The process of creating new objects is also known as **creating an instance** or **instantiating an object**_,_ and operator new is known as the **dynamic memory allocation operator**. Arrays are allocated with new because arrays are considered to be objects, and all objects must be created with new. To allocate 12 elements for integer array c, use the statement

var c = new Array( 12 );

The preceding statement can also be performed in two steps, as follows:

var c; // declares the array c = new Array( 12 ); // allocates the array

When arrays are allocated, the elements are not initialized—they have the value unde-

fined.

**Common Programming Error 10.2** _Assuming that the elements of an array are initialized when the array is allocated may result in logic errors._ 10.2

**10.4 Examples Using Arrays** This section presents several examples of creating and manipulating arrays.

**_Creating and Initializing Arrays_** The script in Fig. 10.3 uses operator new to allocate an Array of five elements and an emp- ty array. The script demonstrates initializing an Array of existing elements and also shows

Operators Associativity Type

() \[\] . left to right highest

++ -- ! right to left unary

\* / % left to right multiplicative

\+ - left to right additive

< <= > >= left to right relational

\== != left to right equality

&& left to right logical AND

|| left to right logical OR

?: right to left conditional

\= += -= \*= /= %= right to left assignment

**Fig. 10.2** | Precedence and associativity of the operators discussed so far.

**366** Chapter 10 JavaScript: Arrays

that an Array can grow dynamically to accommodate new elements. The Array’s values are displayed in XHTML tables.

Line 17 creates Array n1 as an array of five elements. Line 18 creates Array n2 as an empty array. Lines 21–22 use a for statement to initialize the elements of n1 to their sub-

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 10.3: InitArray.html --> **6** <!-- Initializing the elements of an array. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Initializing an Array</title>

**10** <style type = "text/css"> **11** table { width: 10em } **12** th { text-align: left } **13** </style> **14** <script type = "text/javascript"> **15** <!-- **16** // create (declare) two new arrays **17 18 19 20** // assign values to each element of Array n1 **21** for ( var i = 0; i < n1.length; ++i ) **22 23 24** // create and initialize five elements in Array n2 **25** for ( i = 0; i < 5; ++i ) **26 27 28** outputArray( "Array n1:", n1 ); **29** outputArray( "Array n2:", n2 ); **30 31** // output the heading followed by a two-column table **32** // containing subscripts and elements of "theArray" **33** function outputArray( heading, theArray ) **34** { **35** document.writeln( "<h2>" + heading + "</h2>" ); **36** document.writeln( "<table border = \\"1\\"" ); **37** document.writeln( "<thead><th>Subscript</th>" + **38** "<th>Value</th></thead><tbody>" ); **39 40** // output the subscript and value of each array element **41 42 43 44 45** document.writeln( "</tbody></table>" ); **46** } // end function outputArray **47** // -->

**Fig. 10.3** | Initializing the elements of an array. (Part 1 of 2.)

var n1 = new Array( 5 ); // allocate five-element Array var n2 = new Array(); // allocate empty Array

n1\[ i \] = i;

n2\[ i \] = i;

for ( var i = 0; i < theArray.length; i++ ) document.writeln( "<tr><td>" + i + "</td><td>" +

theArray\[ i \] + "</td></tr>" );

10.4 Examples Using Arrays **367**

script numbers (0 to 4). Note also the use of zero-based counting (remember, array sub- scripts start at 0) so that the loop can access every element of the array. Note too the use of the expression n1.length in the condition for the for statement to determine the length of the array. In this example, the length of the array is 5, so the loop continues executing as long as the value of control variable i is less than 5. For a five-element array, the sub- script values are 0 through 4, so using the less than operator, <, guarantees that the loop does not attempt to access an element beyond the end of the array. Zero-based counting is usually used to iterate through arrays.

Lines 25–26 use a for statement to add five elements to the Array n2 and initialize each element to its subscript number (0 to 4). Note that Array n2 grows dynamically to accommodate the values assigned to each element of the array.

**Software Engineering Observation 10.1** _JavaScript automatically reallocates an Array when a value is assigned to an element that is outside the bounds of the original Array. Elements between the last element of the original Array and the new element have undefined values._ 10.1

Lines 28–29 invoke function outputArray (defined in lines 33–46) to display the contents of each array in an XHTML table. Function outputArray receives two argu- ments—a string to be output before the XHTML table that displays the contents of the array and the array to output. Lines 41–43 use a for statement to output XHTML text

**48** </script> **49** </head><body></body> **50** </html>

**Fig. 10.3** | Initializing the elements of an array. (Part 2 of 2.)

**368** Chapter 10 JavaScript: Arrays

that defines each row of the table. Once again, note the use of zero-based counting so that the loop can access every element of the array.

**Common Programming Error 10.3** _Referring to an element outside the Array bounds is normally a logic error._ 10.3

**Error-Prevention Tip 10.1** _When using subscripts to loop through an Array, the subscript should never go below 0 and should always be less than the number of elements in the Array (i.e., one less than the size of the Array). Make sure that the loop-terminating condition prevents the access of elements outside this range._ 10.1

If the values of an Array’s elements are known in advance, the elements can be allo- cated and initialized in the declaration of the array. There are two ways in which the initial values can be specified. The statement

var n = \[ 10, 20, 30, 40, 50 \];

uses a comma-separated **initializer list** enclosed in square brackets (\[ and \]) to create a five- element Array with subscripts of 0, 1, 2, 3 and 4. The array size is determined by the num- ber of values in the initializer list. Note that the preceding declaration does not require the new operator to create the Array object—this functionality is provided by the interpreter when it encounters an array declaration that includes an initializer list. The statement

var n = new Array( 10, 20, 30, 40, 50 );

also creates a five-element array with subscripts of 0, 1, 2, 3 and 4. In this case, the initial values of the array elements are specified as arguments in the parentheses following new

Array. The size of the array is determined by the number of values in parentheses. It is also possible to reserve a space in an Array for a value to be specified later by using a comma as a **place holder** in the initializer list. For example, the statement

var n = \[ 10, 20, , 40, 50 \];

creates a five-element array with no value specified for the third element (n\[ 2 \]).

**_Initializing Arrays with Initializer Lists_** The script in Fig. 10.4 creates three Array objects to demonstrate initializing arrays with initializer lists (lines 18–20) and displays each array in an XHTML table using the same function outputArray discussed in Fig. 10.3. Note that when Array integers2 is dis- played in the web page, the elements with subscripts 1 and 2 (the second and third ele- ments of the array) appear in the web page as undefined. These are the two elements for which we did not supply values in the declaration in line 20 in the script.

**_Summing the Elements of an Array with for and for…in_** The script in Fig. 10.5 sums the values contained in theArray, the 10-element integer ar- ray declared, allocated and initialized in line 13. The statement in line 19 in the body of the first for statement does the totaling. Note that the values supplied as initializers for array theArray could be read into the program using an XHTML form.

10.4 Examples Using Arrays **369**

In this example, we introduce JavaScript’s **for…in statement**, which enables a script to perform a task for each element in an array (or, as we will see in Chapters 12–13, for each element in a collection). This process is also known as **iterating over the elements of an array**. Lines 25-26 show the syntax of a for…in statement. Inside the parentheses, we declare the element variable used to select each element in the object to the right of key-

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 10.4: InitArray2.html --> **6** <!-- Declaring and initializing arrays. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Initializing an Array with a Declaration</title>

**10** <style type = "text/css"> **11** table { width: 15em } **12** th { text-align: left } **13** </style> **14** <script type = "text/javascript"> **15** <!-- **16** // Initializer list specifies the number of elements and **17** // a value for each element. **18 19 20 21 22** outputArray( "Array colors contains", colors ); **23** outputArray( "Array integers1 contains", integers1 ); **24** outputArray( "Array integers2 contains", integers2 ); **25 26** // output the heading followed by a two-column table **27** // containing the subscripts and elements of theArray **28** function outputArray( heading, theArray ) **29** { **30** document.writeln( "<h2>" + heading + "</h2>" ); **31** document.writeln( "<table border = \\"1\\"" ); **32** document.writeln( "<thead><th>Subscript</th>" + **33** "<th>Value</th></thead><tbody>" ); **34 35** // output the subscript and value of each array element **36** for ( var i = 0; i < theArray.length; i++ ) **37** document.writeln( "<tr><td>" + i + "</td><td>" + **38** theArray\[ i \] + "</td></tr>" ); **39 40** document.writeln( "</tbody></table>" ); **41** } // end function outputArray **42** // --> **43** </script> **44** </head><body></body> **45** </html>

**Fig. 10.4** | Declaring and initializing arrays. (Part 1 of 2.)

var colors = new Array( "cyan", "magenta","yellow", "black" ); var integers1 = \[ 2, 4, 6, 8 \]; var integers2 = \[ 2, , , 8 \];

**370** Chapter 10 JavaScript: Arrays

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 10.5: SumArray.html --> **6** <!-- Summing elements of an array. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Sum the Elements of an Array</title>

**10 11** <script type = "text/javascript"> **12** <!-- **13** var theArray = \[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 \]; **14** var total1 = 0, total2 = 0; **15**

**Fig. 10.5** | Summing elements of an array. (Part 1 of 2.)

**Fig. 10.4** | Declaring and initializing arrays. (Part 2 of 2.)

10.4 Examples Using Arrays **371**

word in (theArray in this case). When using for…in, JavaScript automatically deter- mines the number of elements in the array. As the JavaScript interpreter iterates over theArray’s elements, variable element is assigned a value that can be used as a subscript for theArray. In the case of an Array, the value assigned is a subscript in the range from 0 up to, but not including, theArray.length. Each value is added to total2 to produce the sum of the elements in the array.

**Error-Prevention Tip 10.2** _When iterating over all the elements of an Array, use a for…in statement to ensure that you manipulate only the existing elements of the Array. Note that a for…in statement skips any undefined elements in the array._ 10.2

**_Using the Elements of an Array as Counters_** In Chapter 9, we indicated that there is a more elegant way to implement the dice-rolling program in Fig. 9.5. The program rolled a single six-sided die 6000 times and used a switch statement to total the number of times each value was rolled. An array version of this script is shown in Fig. 10.6. The switch statement in Fig. 9.5 is replaced by line 24 of this program. This line uses the random face value as the subscript for the array fre-

quency to determine which element to increment during each iteration of the loop. Be- cause the random number calculation in line 23 produces numbers from 1 to 6 (the values

**16** // iterates through the elements of the array in order and adds **17** // each element's value to total1 **18 19 20 21** document.writeln( "Total using subscripts: " + total1 ); **22 23** // iterates through the elements of the array using a for... in **24** // statement to add each element's value to total2 **25 26 27 28** document.writeln( "<br />Total using for...in: " + total2 ); **29** // --> **30** </script> **31** </head><body></body> **32** </html>

**Fig. 10.5** | Summing elements of an array. (Part 2 of 2.)

for ( var i = 0; i < theArray.length; i++ ) total1 += theArray\[ i \];

for ( var element in theArray ) total2 += theArray\[ element \];

**372** Chapter 10 JavaScript: Arrays

for a six-sided die), the frequency array must be large enough to allow subscript values of 1 to 6. The smallest number of elements required for an array to have these subscript values is seven elements (subscript values from 0 to 6). In this program, we ignore element 0 of array frequency and use only the elements that correspond to values on the sides of a die. Also, lines 32–34 of this program use a loop to generate the table that was written one line at a time in Fig. 9.5. Because we can loop through array frequency to help produce the output, we do not have to enumerate each XHTML table row as we did in Fig. 9.5.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 10.6: RollDie.html --> **6** <!-- Dice-rolling program using an array instead of a switch. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Roll a Six-Sided Die 6000 Times</title>

**10** <style type = "text/css"> **11** table { width: 15em } **12** th { text-align: left } **13** </style> **14** <script type = "text/javascript"> **15** <!-- **16** var face; **17** var frequency = \[ , 0, 0, 0, 0, 0, 0 \]; // leave frequency\[0\] **18** // uninitialized **19 20** // summarize results **21 22 23 24 25 26 27** document.writeln( "<table border = \\"1\\"><thead>" ); **28** document.writeln( "<th>Face</th>" + **29** "<th>Frequency</th></thead><tbody>" ); **30 31** // generate entire table of frequencies for each face **32 33 34 35 36** document.writeln( "</tbody></table>" ); **37** // --> **38** </script> **39** </head> **40** <body> **41** <p>Click Refresh (or Reload) to run the script again</p> **42** </body> **43** </html>

**Fig. 10.6** | Dice-rolling program using an array instead of a switch. (Part 1 of 2.)

for ( var roll = 1; roll <= 6000; ++roll ) {

face = Math.floor( 1 + Math.random() \* 6 ); ++frequency\[ face \];

} // end for

for ( face = 1; face < frequency.length; ++face ) document.writeln( "<tr><td>" + face + "</td><td>" +

frequency\[ face \] + "</td></tr>" );

10.5 Random Image Generator Using Arrays **373**

**10.5 Random Image Generator Using Arrays** In Chapter 9, we created a random image generator that required image files to be named 1.gif, 2.gif, …, 7.gif. In this example (Fig. 10.7), we create a more elegant random im- age generator that does not require the image filenames to be integers. This version of the random image generator uses an array pictures to store the names of the image files as strings. The script generates a random integer and uses it as a subscript into the pictures array. The script outputs an XHTML img element whose src attribute contains the image filename located in the randomly selected position in the pictures array.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 10.7: RandomPicture2.html --> **6** <!-- Random image generation using arrays. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Random Image Generator</title>

**10** <style type = "text/css"> **11** table { width: 15em } **12** th { text-align: left } **13** </style> **14** <script type = "text/javascript"> **15** <!-- **16 17 18 19** // pick a random image from the pictures array and displays by **20** // creating an img tag and appending the src attribute to the **21** // filename

**Fig. 10.7** | Random image generation using arrays. (Part 1 of 2.)

**Fig. 10.6** | Dice-rolling program using an array instead of a switch. (Part 2 of 2.)

var pictures = \[ "CPE", "EPT", "GPP", "GUI", "PERF", "PORT", "SEO" \];

**374** Chapter 10 JavaScript: Arrays

The script declares the array pictures in lines 16–17 and initializes it with the names of seven image files. Lines 22–23 create the img tag that displays the random image on the web page. Line 22 opens the img tag and begins the src attribute. Line 23 generates a random integer from 0 to 6 as an index into the pictures array, the result of which is a randomly selected image filename. The expression

pictures\[ Math.floor( Math.random() \* 7 ) \]

evaluates to a string from the pictures array, which then is written to the document (line 23). Line 23 completes the img tag with the extension of the image file (.gif).

**10.6 References and Reference Parameters** Two ways to pass arguments to functions (or methods) in many programming languages are **pass-by-value** and **pass-by-reference**. When an argument is passed to a function by val- ue, a _copy_ of the argument’s value is made and is passed to the called function. In Java- Script, numbers, boolean values and strings are passed to functions by value.

With pass-by-reference, the caller gives the called function direct access to the caller’s data and allows it to modify the data if it so chooses. This procedure is accomplished by passing to the called function the actual **location in memory** (also called the **address**) where the data resides. Pass-by-reference can improve performance because it can elimi- nate the overhead of copying large amounts of data, but it can weaken security because the called function can access the caller’s data. In JavaScript, all objects (and thus all Arrays) are passed to functions by reference.

**22 23 24** // --> **25** </script> **26** </head> **27** <body> **28** <p>Click Refresh (or Reload) to run the script again</p> **29** </body> **30** </html>

**Fig. 10.7** | Random image generation using arrays. (Part 2 of 2.)

document.write ( "<img src = \\"" + pictures\[ Math.floor( Math.random() \* 7 ) \] + ".gif\\" />" );

10.7 Passing Arrays to Functions **375**

**Error-Prevention Tip 10.3** _With pass-by-value, changes to the copy of the called function do not affect the original variable’s value in the calling function. This prevents the accidental side effects that so greatly hinder the development of correct and reliable software systems._ 10.3

**Software Engineering Observation 10.2** _Unlike some other languages, JavaScript does not allow the programmer to choose whether to pass each argument by value or by reference. Numbers, boolean values and strings are passed by value. Objects are passed to functions by reference. When a function receives a reference to an object, the function can manipulate the object directly._ 10.2

**Software Engineering Observation 10.3** _When returning information from a function via a return statement, numbers and boolean values are always returned by value (i.e., a copy is returned), and objects are always returned by reference (i.e., a reference to the object is returned). Note that, in the pass-by-reference case, it is not necessary to return the new value, since the object is already modified._ 10.3

To pass a reference to an object into a function, simply specify the reference name in the function call. Normally, the reference name is the identifier that the program uses to manipulate the object. Mentioning the reference by its parameter name in the body of the called function actually refers to the original object in memory, and the original object can be accessed directly by the called function.

Arrays are objects in JavaScript, so Arrays are passed to a function by reference—a called function can access the elements of the caller’s original Arrays. The name of an array actually is a reference to an object that contains the array elements and the length variable, which indicates the number of elements in the array. In the next section, we demonstrate pass-by-value and pass-by-reference, using arrays.

**10.7 Passing Arrays to Functions** To pass an array argument to a function, specify the name of the array (a reference to the array) without brackets. For example, if array hourlyTemperatures has been declared as

var hourlyTemperatures = new Array( 24 );

then the function call

modifyArray( hourlyTemperatures );

passes array hourlyTemperatures to function modifyArray. As stated in Section 10.2, ev- ery array object in JavaScript knows its own size (via the length attribute). Thus, when we pass an array object into a function, we do not pass the size of the array separately as an argument. Figure 10.3 illustrated this concept when we passed Arrays n1 and n2 to func- tion outputArray to display each Array’s contents.

Although entire arrays are passed by reference, _individual numeric and boolean array elements_ are passed _by value_ exactly as simple numeric and boolean variables are passed (the objects referred to by individual elements of an Array of objects are still passed by refer- ence). Such simple single pieces of data are called **scalars**, or **scalar quantities**_._ To pass an array element to a function, use the subscripted name of the element as an argument in the function call.

**376** Chapter 10 JavaScript: Arrays

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 10.8: PassArray.html --> **6** <!-- Passing arrays and individual array elements to functions. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Passing arrays and individual array

**10** elements to functions</title> **11** <script type = "text/javascript"> **12** <!-- **13** var a = \[ 1, 2, 3, 4, 5 \]; **14 15** document.writeln( "<h2>Effects of passing entire " + **16** "array by reference</h2>" ); **17** outputArray( "Original array: ", a ); **18 19 20 21** outputArray( "Modified array: ", a ); **22 23** document.writeln( "<h2>Effects of passing array " + **24** "element by value</h2>" + **25** "a\[3\] before modifyElement: " + a\[ 3 \] ); **26 27 28 29** document.writeln( "<br />a\[3\] after modifyElement: " + a\[ 3 \] ); **30 31** // outputs heading followed by the contents of "theArray" **32** function outputArray( heading, theArray ) **33** { **34** document.writeln( **35** heading + + "<br />" ); **36** } // end function outputArray **37 38** // function that modifies the elements of an array **39 40** { **41 42 43** } // end function modifyArray **44 45** // function that modifies the value passed **46 47** { **48 49 50** document.writeln( "<br />value in modifyElement: " + e ); **51** } // end function modifyElement **52** // --> **53** </script>

**Fig. 10.8** | Passing arrays and individual array elements to functions. (Part 1 of 2.)

modifyArray( a ); // array a passed by reference

modifyElement( a\[ 3 \] ); // array element a\[3\] passed by value

theArray.join( " " )

function modifyArray( theArray )

for ( var j in theArray ) theArray\[ j \] \*= 2;

function modifyElement( e )

e \*= 2; // scales element e only for the duration of the // function

10.7 Passing Arrays to Functions **377**

For a function to receive an Array through a function call, the function’s parameter list must specify a parameter that will refer to the Array in the body of the function. Unlike other programming languages, JavaScript does not provide a special syntax for this pur- pose. JavaScript simply requires that the identifier for the Array be specified in the param- eter list. For example, the function header for function modifyArray might be written as

function modifyArray( b )

indicating that modifyArray expects to receive a parameter named b (the argument sup- plied in the calling function must be an Array). Arrays are passed by reference, and there- fore when the called function uses the array name b, it refers to the actual array in the caller (array hourlyTemperatures in the preceding call). The script in Fig. 10.8 demonstrates the difference between passing an entire array and passing an array element.

**Software Engineering Observation 10.4** _JavaScript does not check the number of arguments or types of arguments that are passed to a function. It is possible to pass any number of values to a function. JavaScript will attempt to perform conversions when the values are used._ 10.4

The statement in line 17 invokes function outputArray to display the contents of array a before it is modified. Function outputArray (defined in lines 32–36) receives a string to output and the array to output. The statement in lines 34–35 uses Array method **join** to create a string containing all the elements in theArray. Method join takes as its argument a string containing the **separator** that should be used to separate the elements of the array in the string that is returned. If the argument is not specified, the empty string is used as the separator.

Line 19 invokes function modifyArray (lines 39–43) and passes it array a. The modifyArray function multiplies each element by 2. To illustrate that array a’s elements were modified, the statement in line 21 invokes function outputArray again to display the

**54** </head><body></body> **55** </html>

**Fig. 10.8** | Passing arrays and individual array elements to functions. (Part 2 of 2.)

**378** Chapter 10 JavaScript: Arrays

contents of array a after it is modified. As the screen capture shows, the elements of a are indeed modified by modifyArray.

To show the value of a\[ 3 \] before the call to modifyElement, line 25 outputs the value of a\[ 3 \]. Line 27 invokes modifyElement (lines 46–51) and passes a\[ 3 \] as the argument. Remember that a\[ 3 \] actually is one integer value in the array a. Also remember that numeric values and boolean values are always passed to functions by value. Therefore, a copy of a\[ 3 \] is passed. Function modifyElement multiplies its argument by 2 and stores the result in its parameter e. The parameter of function modifyElement is a local variable in that function, so when the function terminates, the local variable is no longer accessible. Thus, when control is returned to the main script, the unmodified value of a\[ 3 \] is displayed by the statement in line 29.

**10.8 Sorting Arrays Sorting** data (putting data in a particular order, such as ascending or descending) is one of the most important computing functions. A bank sorts all checks by account number so that it can prepare individual bank statements at the end of each month. Telephone com- panies sort their lists of accounts by last name and, within that, by first name, to make it easy to find phone numbers. Virtually every organization must sort some data—in many cases, massive amounts of data. Sorting data is an intriguing problem that has attracted some of the most intense research efforts in the field of computer science.

The Array object in JavaScript has a built-in method **sort** for sorting arrays. Figure 10.9 demonstrates the Array object’s sort method.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 10.9: Sort.html --> **6** <!-- Sorting an array with sort. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Sorting an Array with Array Method sort</title>

**10** <script type = "text/javascript"> **11** <!-- **12** var a = \[ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 \]; **13 14** document.writeln( "<h1>Sorting an Array</h1>" ); **15** outputArray( "Data items in original order: ", a ); **16 17** outputArray( "Data items in ascending order: ", a ); **18 19** // output the heading followed by the contents of theArray **20** function outputArray( heading, theArray ) **21** { **22** document.writeln( "<p>" + heading + **23** theArray.join( " " ) + "</p>" ); **24** } // end function outputArray

**Fig. 10.9** | Sorting an array with sort. (Part 1 of 2.)

a.sort( compareIntegers ); // sort the array

10.8 Sorting Arrays **379**

By default, Array method sort (with no arguments) uses string comparisons to deter- mine the sorting order of the Array elements. The strings are compared by the ASCII values of their characters. \[_Note:_ String comparison is discussed in more detail in Chapter 11, JavaScript: Objects.\] In this example, we’d like to sort an array of integers.

Method sort takes as its optional argument the name of a function (called the **com- parator function**) that compares its two arguments and returns one of the following:

• a negative value if the first argument is less than the second argument

• zero if the arguments are equal, or

• a positive value if the first argument is greater than the second argument

This example uses function compareIntegers (defined in lines 27–30) as the comparator function for method sort. It calculates the difference between the integer values of its two arguments (function parseInt ensures that the arguments are handled properly as inte- gers). If the first argument is less than the second argument, the difference will be a nega- tive value. If the arguments are equal, the difference will be zero. If the first argument is greater than the second argument, the difference will be a positive value.

Line 16 invokes Array object a’s sort method and passes function compareIntegers

as an argument. Method sort receives function compareIntegers as an argument, then uses the function to compare elements of the Array a to determine their sorting order.

**Software Engineering Observation 10.5** _Functions in JavaScript are considered to be data. Therefore, functions can be assigned to variables, stored in Arrays and passed to functions just like other data types._ 10.5

**25 26** // comparison function for use with sort **27 28 29 30 31** // --> **32** </script> **33** </head><body></body> **34** </html>

**Fig. 10.9** | Sorting an array with sort. (Part 2 of 2.)

function compareIntegers( value1, value2 ) {

return parseInt( value1 ) - parseInt( value2 ); } // end function compareIntegers

**380** Chapter 10 JavaScript: Arrays

**10.9 Searching Arrays: Linear Search and Binary Search** Often, a programmer will be working with large amounts of data stored in arrays. It may be necessary to determine whether an array contains a value that matches a certain key val- ue. The process of locating a particular element value in an array is called searching. In this section we discuss two searching techniques—the simple linear search technique (Fig. 10.10) and the more efficient binary search technique (Fig. 10.11).

**_Searching an Array with Linear Search_** The script in Fig. 10.10 performs a **linear search** on an array. Function linearSearch (de- fined in lines 42–50) uses a for statement containing an if statement to compare each element of an array with a search key (lines 45–47). If the search key is found, the function returns the subscript value (line 47) of the element to indicate the exact position of the search key in the array. \[_Note:_ The loop (lines 45–47) in the linearSearch function ter- minates, and the function returns control to the caller as soon as the return statement in its body executes.\] If the search key is not found, the function returns a value of –1. The function returns the value –1 because it is not a valid subscript number.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 10.10: LinearSearch.html --> **6** <!-- Linear search of an array. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Linear Search of an Array</title>

**10** <script type = "text/javascript"> **11** <!-- **12** // create an Array **13 14** // fill Array with even integer values from 0 to 198 **15 16 17 18** // function called when "Search" button is pressed **19** function buttonPressed() **20** { **21** // get the input text field **22** var inputVal = document.getElementById( "inputVal" ); **23 24** // get the result text field **25** var result = document.getElementById( "result" ); **26 27** // get the search key from the input text field **28** var searchKey = inputVal.value; **29 30** // Array a is passed to linearSearch even though it **31** // is a global variable. Normally an array will **32** // be passed to a method for searching.

**Fig. 10.10** | Linear search of an array. (Part 1 of 2.)

var a = new Array( 100 );

for ( var i = 0; i < a.length; ++i ) a\[ i \] = 2 \* i;

10.9 Searching Arrays: Linear Search and Binary Search **381**

**33 34 35** if ( element != -1 ) **36** result.value = "Found value in element " + element; **37** else **38** result.value = "Value not found"; **39** } // end function buttonPressed **40 41** // Search "theArray" for the specified "key" value **42** function linearSearch( theArray, key ) **43** { **44** // iterates through each element of the array in order **45 46 47 48 49** return -1; **50** } // end function linearSearch **51** // --> **52** </script> **53** </head> **54 55** <body> **56** <form action = ""> **57** <p>Enter integer search key<br /> **58** <input id = "inputVal" type = "text" /> **59** <input type = "button" value = "Search" **60** /><br /></p> **61** <p>Result<br /> **62** <input id = "result" type = "text" size = "30" /></p> **63** </form> **64** </body> **65** </html>

**Fig. 10.10** | Linear search of an array. (Part 2 of 2.)

var element = linearSearch( a, parseInt( searchKey ) );

for ( var n = 0; n < theArray.length; ++n ) if ( theArray\[ n \] == key )

return n;

onclick = "buttonPressed()"

**382** Chapter 10 JavaScript: Arrays

If the array being searched is not in any particular order, the value is just as likely to be found in the first element as the last. On average, therefore, the program will have to compare the search key with half the elements of the array.

The program contains a 100-element array (defined in line 12) filled with the even integers from 0 to 198. The user types the search key in a text field (defined in the XHTML form in lines 56–63) and clicks the **Search** button to start the search. \[_Note:_ The array is passed to linearSearch even though the array is a global script variable. We do this because arrays are normally passed to functions for searching.\]

**_Searching an Array with Binary Search_** The linear search method works well for small arrays or for unsorted arrays. However, for large arrays, linear searching is inefficient. The **binary search algorithm** is more efficient, but it requires that the array be sorted. The first iteration of this algorithm tests the middle element in the array. If this matches the search key, the algorithm ends. Assuming the array is sorted in ascending order, then if the search key is less than the middle element, it cannot match any element in the second half of the array and the algorithm continues with only the first half of the array (i.e., the first element up to, but not including, the middle ele- ment). If the search key is greater than the middle element, it cannot match any element in the first half of the array and the algorithm continues with only the second half of the array (i.e., the element after the middle element through the last element). Each iteration tests the middle value of the remaining portion of the array. If the search key does not match the element, the algorithm eliminates half of the remaining elements. The algo- rithm ends by either finding an element that matches the search key or reducing the sub- array to zero size.

As an example consider the sorted 15-element array

2 3 5 10 27 30 34 51 56 65 77 81 82 93 99

and a search key of 65. A program implementing the binary search algorithm would first check whether 51 is the search key (because 51 is the middle element of the array). The search key (65) is larger than 51, so 51 is discarded along with the first half of the array (all elements smaller than 51.) Next, the algorithm checks whether 81 (the middle element of the remainder of the array) matches the search key. The search key (65) is smaller than 81, so 81 is discarded along with the elements larger than 81. After just two tests, the algo- rithm has narrowed the number of values to check to three (56, 65 and 77). The algorithm then checks 65 (which indeed matches the search key), and returns the index of the array element containing 65. This algorithm required just three comparisons to determine whether the search key matched an element of the array. Using a linear search algorithm would have required 10 comparisons. \[_Note:_ In this example, we have chosen to use an ar- ray with 15 elements so that there will always be an obvious middle element in the array. With an even number of elements, the middle of the array lies between two elements. We implement the algorithm to choose the lower of those two elements.\]

Figure 10.11 presents the iterative version of function binarySearch (lines 40–64). Function binarySearch is called from line 31 of function buttonPressed (lines 18–37)— the event handler for the **Search** button in the XHTML form. Function binarySearch

receives two arguments—an array called theArray (the array to search) and key (the search key). The array is passed to binarySearch even though the array is a global variable. Once

10.9 Searching Arrays: Linear Search and Binary Search **383**

again, we do this because an array is normally passed to a function for searching. If key matches the middle element of a subarray (line 55), middle (the subscript of the current element) is returned, to indicate that the value was found and the search is complete. If key does not match the middle element of a subarray, the low subscript or the high sub- script (both declared in the function) is adjusted, so that a smaller subarray can be searched. If key is less than the middle element (line 57), the high subscript is set to middle - 1 and the search is continued on the elements from low to middle - 1. If key is greater than the middle element (line 59), the low subscript is set to middle + 1 and the search is continued on the elements from middle + 1 to high. These comparisons are per- formed by the nested if…else statement in lines 55–60.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 10.11: BinarySearch.html --> **6** <!-- Binary search of an array. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Binary Search</title>

**10** <script type = "text/javascript"> **11** <!-- **12** var a = new Array( 15 ); **13 14** for ( var i = 0; i < a.length; ++i ) **15** a\[ i \] = 2 \* i; **16 17** // function called when "Search" button is pressed **18** function buttonPressed() **19** { **20** var inputVal = document.getElementById( "inputVal" ); **21** var result = document.getElementById( "result" ); **22** var searchKey = inputVal.value; **23 24** result.value = "Portions of array searched\\n"; **25 26** // Array a is passed to binarySearch even though it **27** // is a global variable. This is done because **28** // normally an array is passed to a method **29** // for searching. **30 31 32 33** if ( element != -1 ) **34** result.value += "\\nFound value in element " + element; **35** else **36** result.value += "\\nValue not found"; **37** } // end function buttonPressed **38**

**Fig. 10.11** | Binary search of an array. (Part 1 of 3.)

var element = binarySearch( a, parseInt( searchKey ) );

**384** Chapter 10 JavaScript: Arrays

**39** // binary search function **40** function binarySearch( theArray, key ) **41** { **42** var low = 0; // low subscript **43** var high = theArray.length - 1; // high subscript **44** var middle; // middle subscript **45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61** } // end while **62 63** return -1; // searchKey not found **64** } // end function binarySearch **65 66** // Build one row of output showing the current **67** // part of the array being processed. **68** function buildOutput( theArray, low, mid, high ) **69** { **70** var result = document.getElementById( "result" ); **71 72** for ( var i = 0; i < theArray.length; i++ ) **73** { **74** if ( i < low || i > high ) **75** result.value += " "; **76** else if ( i == mid ) // mark middle element in output **77** result.value += theArray\[ i \] + **78** ( theArray\[ i \] < 10 ? "\* " : "\* " ); **79** else **80** result.value += theArray\[ i \] + **81** ( theArray\[ i \] < 10 ? " " : " " ); **82** } // end for **83 84** result.value += "\\n"; **85** } // end function buildOutput **86** // --> **87** </script> **88** </head> **89**

**Fig. 10.11** | Binary search of an array. (Part 2 of 3.)

while ( low <= high ) { middle = ( low + high ) / 2;

// The following line is used to display the // part of theArray currently being manipulated // during each iteration of the binary // search loop. buildOutput( theArray, low, middle, high );

if ( key == theArray\[ middle \] ) // match return middle;

else if ( key < theArray\[ middle \] ) high = middle - 1; // search low end of array

else low = middle + 1; // search high end of array

10.9 Searching Arrays: Linear Search and Binary Search **385**

In a worst-case scenario, searching an array of 1023 elements will take only 10 com- parisons using a binary search. Repeatedly dividing 1024 by 2 (because after each compar- ison we are able to eliminate half of the array) yields the values 512, 256, 128, 64, 32, 16, 8, 4, 2 and 1. The number 1024 (210) is divided by 2 only ten times to get the value 1. Dividing by 2 is equivalent to one comparison in the binary search algorithm. An array of

**90** <body> **91** <form action = ""> **92** <p>Enter integer search key<br /> **93** <input id = "inputVal" type = "text" /> **94** <input type = "button" value = "Search" **95** onclick = " " /><br /></p> **96** <p>Result<br /> **97** <textarea id = "result" rows = "7" cols = "60"> **98** </textarea></p> **99** </form> **100** </body> **101** </html>

**Fig. 10.11** | Binary search of an array. (Part 3 of 3.)

buttonPressed()

**386** Chapter 10 JavaScript: Arrays

about one million elements takes a maximum of 20 comparisons to find the key. An array of about one billion elements takes a maximum of 30 comparisons to find the key. When searching a sorted array, this is a tremendous increase in performance over the linear search that required comparing the search key to an average of half the elements in the array. For a one-billion-element array, this is the difference between an average of 500 million com- parisons and a maximum of 30 comparisons! The maximum number of comparisons needed for the binary search of any sorted array is the exponent of the first power of 2 greater than the number of elements in the array.

Our program uses a 15-element array (defined at line 12). The first power of 2 greater than the number of elements is 16 (24), so binarySearch requires at most four compari- sons to find the key. To illustrate this, line 53 calls method buildOutput (declared in lines 68–85) to output each subarray during the binary search process. Method buildOutput

marks the middle element in each subarray with an asterisk (\*) to indicate the element with which the key is compared. No matter what search key is entered, each search in this example results in a maximum of four lines of output—one per comparison.

**10.10 Multidimensional Arrays** Multidimensional arrays with two subscripts are often used to represent tables of values consisting of information arranged in **rows** and **columns**_._ To identify a particular table el- ement, we must specify the two subscripts; by convention, the first identifies the element’s row, and the second identifies the element’s column. Arrays that require two subscripts to identify a particular element are called **two-dimensional arrays**_._

Multidimensional arrays can have more than two dimensions. JavaScript does not support multidimensional arrays directly, but does allow the programmer to specify arrays whose elements are also arrays, thus achieving the same effect. When an array contains one-dimensional arrays as its elements, we can imagine these one-dimensional arrays as rows of a table, and the positions in these arrays as columns. Figure 10.12 illustrates a two- dimensional array named a that contains three rows and four columns (i.e., a three-by-four array—three one-dimensional arrays, each with 4 elements). In general, an array with _m_ rows and _n_ columns is called an **_m_\-by-_n_ array**_._

Every element in array a is identified in Fig. 10.12 by an element name of the form a\[ i \]\[ j \]; a is the name of the array, and i and j are the subscripts that uniquely identify

**Fig. 10.12** | Two-dimensional array with three rows and four columns.

Row 0

Row 1

Row 2

Column subscript Row subscript Array name

a\[ 0 \]\[ 0 \]

a\[ 1 \]\[ 0 \]

a\[ 2 \]\[ 0 \]

a\[ 0 \]\[ 1 \]

a\[ 1 \]\[ 1 \]

a\[ 2 \]\[ 1 \]

a\[ 0 \]\[ 2 \]

a\[ 1 \]\[ 2 \]

a\[ 2 \]\[ 2 \]

a\[ 0 \]\[ 3 \]

Column 0 Column 1 Column 2 Column 3

a\[ 1 \]\[ 3 \]

a\[ 2 \]\[ 3 \]

10.10 Multidimensional Arrays **387**

the row and column, respectively, of each element in a. Note that the names of the ele- ments in the first row all have a first subscript of 0; the names of the elements in the fourth column all have a second subscript of 3.

**_Arrays of One-Dimensional Arrays_** Multidimensional arrays can be initialized in declarations like a one-dimensional array. Array b with two rows and two columns could be declared and initialized with the state- ment

var b = \[ \[ 1, 2 \], \[ 3, 4 \] \];

The values are grouped by row in square brackets. The array \[1, 2\] initializes element b\[0\], and the array \[3, 4\] initializes element b\[1\]. So 1 and 2 initialize b\[0\]\[0\] and b\[0\]\[1\], respectively. Similarly, 3 and 4 initialize b\[1\]\[0\] and b\[1\]\[1\], respectively. The interpreter determines the number of rows by counting the number of sub initializer lists—arrays nested within the outermost array. The interpreter determines the number of columns in each row by counting the number of values in the sub-array that initializes the row.

**_Two-Dimensional Arrays with Rows of Different Lengths_** The rows of a two-dimensional array can vary in length. The declaration

var b = \[ \[ 1, 2 \], \[ 3, 4, 5 \] \];

creates array b with row 0 containing two elements (1 and 2) and row 1 containing three elements (3, 4 and 5).

**_Creating Two-Dimensional Arrays with new_** A multidimensional array in which each row has a different number of columns can be allocated dynamically, as follows:

var b; b = new Array( 2 ); // allocate rows b\[ 0 \] = new Array( 5 ); // allocate columns for row 0 b\[ 1 \] = new Array( 3 ); // allocate columns for row 1

The preceding code creates a two-dimensional array with two rows. Row 0 has five col- umns, and row 1 has three columns.

**_Two-Dimensional Array Example: Displaying Element Values_** Figure 10.13 initializes two-dimensional arrays in declarations and uses nested for…in

loops to **traverse the arrays** (i.e., manipulate every element of the array).

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 10.13: InitArray3.html --> **6** <!-- Initializing multidimensional arrays. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml">

**Fig. 10.13** | Initializing multidimensional arrays. (Part 1 of 2.)

**388** Chapter 10 JavaScript: Arrays

**8** <head> **9** <title>Initializing Multidimensional Arrays</title>

**10** <script type = "text/javascript"> **11** <!-- **12 13 14 15 16 17 18** outputArray( "Values in array1 by row", array1 ); **19** outputArray( "Values in array2 by row", array2 ); **20 21** function outputArray( heading, theArray ) **22** { **23** document.writeln( "<h2>" + heading + "</h2><pre>" ); **24 25** // iterates through the set of one-dimensional arrays **26 27** { **28** // iterates through the elements of each one-dimensional **29** // array **30 31 32 33** document.writeln( "<br />" ); **34** } // end for **35 36** document.writeln( "</pre>" ); **37** } // end function outputArray **38** // --> **39** </script> **40** </head><body></body> **41** </html>

**Fig. 10.13** | Initializing multidimensional arrays. (Part 2 of 2.)

var array1 = \[ \[ 1, 2, 3 \], // first row \[ 4, 5, 6 \] \]; // second row

var array2 = \[ \[ 1, 2 \], // first row \[ 3 \], // second row \[ 4, 5, 6 \] \]; // third row

for ( var i in theArray )

for ( var j in theArray\[ i \] ) document.write( theArray\[ i \]\[ j \] + " " );

10.10 Multidimensional Arrays **389**

The program declares two arrays in main script (in the XHTML head element). The declaration of array1 (lines 12–13 provides six initializers in two sublists. The first sublist initializes the first row of the array to the values 1, 2 and 3; the second sublist initializes the second row of the array to the values 4, 5 and 6. The declaration of array2 (lines 14– 16) provides six initializers in three sublists. The sublist for the first row explicitly initial- izes the first row to have two elements, with values 1 and 2, respectively. The sublist for the second row initializes the second row to have one element, with value 3. The sublist for the third row initializes the third row to the values 4, 5 and 6.

The script calls function outputArray from lines 18–19 to display each array’s ele- ments in the web page. Function outputArray (lines 21–37) receives two arguments—a string heading to output before the array and the array to output (called theArray). Note the use of a nested for…in statement to output the rows of each two-dimensional array. The outer for…in statement iterates over the rows of the array. The inner for…in state- ment iterates over the columns of the current row being processed. The nested for…in

statement in this example could have been written with for statements, as follows:

for ( var i = 0; i < theArray.length; ++i ) {

for ( var j = 0; j < theArray\[ i \].length; ++j ) document.write( theArray\[ i \]\[ j \] + " " );

document.writeln( "<br />" ); }

In the outer for statement, the expression theArray.length determines the number of rows in the array. In the inner for statement, the expression theArray\[i\].length deter- mines the number of columns in each row of the array. This condition enables the loop to determine, for each row, the exact number of columns.

**_Common Multidimensional-Array Manipulations with for and for…in Statements_** Many common array manipulations use for or for…in repetition statements. For exam- ple, the following for statement sets all the elements in the third row of array a in Fig. 10.12 to zero:

for ( var col = 0; col < a\[ 2 \].length; ++col ) a\[ 2 \]\[ col \] = 0;

We specified the _third_ row; therefore, we know that the first subscript is always 2 (0 is the first row and 1 is the second row). The for loop varies only the second subscript (i.e., the column subscript). The preceding for statement is equivalent to the assignment state- ments

a\[ 2 \]\[ 0 \] = 0; a\[ 2 \]\[ 1 \] = 0; a\[ 2 \]\[ 2 \] = 0; a\[ 2 \]\[ 3 \] = 0;

The following for…in statement is also equivalent to the preceding for statement:

for ( var col in a\[ 2 \] ) a\[ 2 \]\[ col \] = 0;

**390** Chapter 10 JavaScript: Arrays

The following nested for statement determines the total of all the elements in array a:

var total = 0;

for ( var row = 0; row < a.length; ++row )

for ( var col = 0; col < a\[ row \].length; ++col ) total += a\[ row \]\[ col \];

The for statement totals the elements of the array, one row at a time. The outer for state- ment begins by setting the row subscript to 0, so that the elements of the first row may be totaled by the inner for statement. The outer for statement then increments row to 1, so that the elements of the second row can be totaled. Then the outer for statement incre- ments row to 2, so that the elements of the third row can be totaled. The result can be dis- played when the nested for statement terminates. The preceding for statement is equivalent to the following for…in statement:

var total = 0;

for ( var row in a )

for ( var col in a\[ row \] ) total += a\[ row \]\[ col \];

**10.11 Building an Online Quiz** Online quizzes and polls are popular web applications often used for educational purposes or just for fun. Web developers typically build quizzes using simple XHTML forms and process the results with JavaScript. Arrays allow a programmer to represent several possible answer choices in a single data structure. Figure 10.14 contains an online quiz consisting of one question. The quiz page contains one of the tip icons used throughout this book and an XHTML form in which the user identifies the type of tip the image represents by selecting one of four radio buttons. After the user selects one of the radio button choices and submits the form, the script determines whether the user selected the correct type of tip to match the mystery image. The JavaScript function that checks the user’s answer combines several of the concepts from the current chapter and previous chapters in a con- cise and useful script.

Before we discuss the script code, we first discuss the body element (lines 25–48) of the XHTML document. The body’s GUI components play an important role in the script.

Lines 26–47 define the form that presents the quiz to users. Line 26 begins the form

element and specifies the onsubmit attribute to "checkAnswers()", indicating that the interpreter should execute the JavaScript function checkAnswers (lines 12–21) when the user submits the form (i.e., clicks the **Submit** button or presses _Enter_).

Line 29 adds the tip image to the page. Lines 32–42 display the radio buttons and corresponding labels that display possible answer choices. Lines 44–45 add the submit

and reset buttons to the page. We now examine the script used to check the answer submitted by the user. Lines 12–

21 declare the function checkAnswers that contains all the JavaScript required to grade the quiz. The if…else statement in lines 17–20 determines whether the user answered the question correctly. The image that the user is asked to identify is the Error-Prevention Tip icon. Thus the correct answer to the quiz corresponds to the second radio button.

10.11 Building an Online Quiz **391**

An XHTML form’s elements can be accessed individually using getElementById or through the **elements property** of the containing form object. The elements property

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 10.14: quiz.html --> **6** <!-- Online quiz graded with JavaScript. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Online Quiz</title>

**10** <script type = "text/JavaScript"> **11** <!-- **12** function checkAnswers() **13** { **14** var myQuiz = document.getElementById( "myQuiz" ); **15 16** // determine whether the answer is correct **17 18** alert( "Congratulations, your answer is correct" ); **19** else // if the answer is incorrect **20** alert( "Your answer is incorrect. Please try again" ); **21** } // end function checkAnswers **22** \--> **23** </script> **24** </head> **25** <body> **26** <form id = "myQuiz" onsubmit = "checkAnswers()" action = ""> **27** <p>Select the name of the tip that goes with the **28** image shown:<br /> **29** <img src="EPT.gif" alt="mystery tip"/> **30** <br /> **31 32 33** <label>Common Programming Error</label> **34 35 36** <label>Error-Prevention Tip</label> **37 38 39** <label>Performance Tip</label> **40 41 42** <label>Portability Tip</label><br /> **43 44** <input type = "submit" name = "submit" value = "Submit" /> **45** <input type = "reset" name = "reset" value = "Reset" /> **46** </p> **47** </form> **48** </body> **49** </html>

**Fig. 10.14** | Online quiz graded with JavaScript. (Part 1 of 2.)

if ( myQuiz.elements\[ 1 \].checked )

<input type = "radio" name = "radiobutton" value = "CPE" />

<input type = "radio" name = "radiobutton" value = "EPT" />

<input type = "radio" name = "radiobutton" value = "PERF" />

<input type = "radio" name = "radiobutton" value = "PORT" />

**392** Chapter 10 JavaScript: Arrays

contains an array of all the form’s controls. The radio buttons are part of the XHTML form myQuiz, so we access the elements array in line 17 using dot notation (myQuiz.elements\[ 1 \]). The array element myQuiz.elements\[ 1 \] corresponds to the correct answer (i.e., the second radio button). Finally, line 17 determines whether the property **checked** of the second radio button is true. Property checked of a radio button is true when the radio button is selected, and it is false when the radio button is not selected. Recall that only one radio button may be selected at any given time. If property myQuiz.elements\[ 1 \].checked is true, indicating that the correct answer is selected, the script alerts a congratulatory message. If property checked of the radio button is false, then the script alerts an alternate message (line 20).

**Fig. 10.14** | Online quiz graded with JavaScript. (Part 2 of 2.)

10.12 Wrap-Up **393**

**10.12 Wrap-Up** In this chapter, we discussed how to store related data items into an array structure. After demonstrating the declaration and initialization of an array, we described how to access and manipulate individual elements of the array using subscripts. We then introduced the concept of an Array object, and learned that objects are passed to a method by reference instead of by value. We explored the sorting of arrays, and described two different methods of searching them. Finally, we discussed multidimensional arrays and how to use them to organize arrays in other arrays.

**10.13 Web Resources** www.deitel.com/javascript/

The Deitel JavaScript Resource Center contains links to some of the best JavaScript resources on the web. There you’ll find categorized links to JavaScript tools, code generators, forums, books, libraries, frameworks and more. Also check out the tutorials for all skill levels, from introductory to advanced. Be sure to visit the related Resource Centers on XHTML (www.deitel.com/xhtml/) and CSS 2.1 (www.deitel.com/css21/).

**Summary**

**_Section 10.1 Introduction_** • Arrays are data structures consisting of related data items (sometimes called collections of data

items).

• JavaScript arrays are “dynamic” entities in that they can change size after they are created.

**_Section 10.2 Arrays_** • An array is a group of memory locations that all have the same name and normally are of the

same type (although this attribute is not required in JavaScript).

• Each individual location is called an element. Any one of these elements may be referred to by giving the name of the array followed by the position number (an integer normally referred to as the subscript or index) of the element in square brackets (\[\]).

• The first element in every array is the zeroth element. In general, the \_i_th element of array c is referred to as c\[i-1\]. Array names follow the same conventions as other identifiers.

• A subscripted array name is a left-hand-side expression—it can be used on the left side of an as- signment to place a new value into an array element. It can also be used on the right side of an assignment operation to assign its value to another left-hand-side expression.

• Every array in JavaScript knows its own length, which it stores in its length attribute.

**_Section 10.3 Declaring and Allocating Arrays_** • JavaScript arrays are represented by Array objects.

• The process of creating new objects using the new operator is known as creating an instance or instantiating an object, and operator new is known as the dynamic memory allocation operator.

**_Section 10.4 Examples Using Arrays_** • Zero-based counting is usually used to iterate through arrays.

**394** Chapter 10 JavaScript: Arrays

• JavaScript automatically reallocates an Array when a value is assigned to an element that is out- side the bounds of the original Array. Elements between the last element of the original Array and the new element have undefined values.

• Arrays can be created using a comma-separated initializer list enclosed in square brackets (\[ and \]). The array’s size is determined by the number of values in the initializer list.

• The initial values of an array can also be specified as arguments in the parentheses following new

Array. The size of the array is determined by the number of values in parentheses.

• JavaScript’s for…in statement enables a script to perform a task for each element in an array. This process is known as iterating over the elements of an array.

**_Section 10.5 Random Image Generator Using Arrays_** • We create a more elegant random image generator than the one in the previous chapter that does

not require the image filenames to be integers by using a pictures array to store the names of the image files as strings and accessing the array using a randomized index.

**_Section 10.6 References and Reference Parameters_** • Two ways to pass arguments to functions (or methods) in many programming languages are

pass-by-value and pass-by-reference.

• When an argument is passed to a function by value, a _copy_ of the argument’s value is made and is passed to the called function.

• In JavaScript, numbers, boolean values and strings are passed to functions by value.

• With pass-by-reference, the caller gives the called function direct access to the caller’s data and allows it to modify the data if it so chooses. Pass-by-reference can improve performance because it can eliminate the overhead of copying large amounts of data, but it can weaken security be- cause the called function can access the caller’s data.

• In JavaScript, all objects (and thus all Arrays) are passed to functions by reference.

• Arrays are objects in JavaScript, so Arrays are passed to a function by reference—a called func- tion can access the elements of the caller’s original Arrays. The name of an array is actually a ref- erence to an object that contains the array elements and the length variable, which indicates the number of elements in the array.

**_Section 10.7 Passing Arrays to Functions_** • To pass an array argument to a function, specify the name of the array (a reference to the array)

without brackets.

• Although entire arrays are passed by reference, _individual numeric and boolean array elements_ are passed _by value_ exactly as simple numeric and boolean variables are passed. Such simple single pieces of data are called scalars, or scalar quantities. To pass an array element to a function, use the subscripted name of the element as an argument in the function call.

• The join method of an Array returns a string that contains all of the elements of an array, sepa- rated by the string supplied in the function’s argument. If an argument is not specified, the emp- ty string is used as the separator.

**_Section 10.8 Sorting Arrays_** • Sorting data (putting data in a particular order, such as ascending or descending) is one of the

most important computing functions.

• The Array object in JavaScript has a built-in method sort for sorting arrays.

• By default, Array method sort (with no arguments) uses string comparisons to determine the sorting order of the Array elements.

Terminology **395**

• Method sort takes as its optional argument the name of a function (called the comparator func- tion) that compares its two arguments and returns a negative value, zero, or a positive value, if the first argument is less than, equal to, or greater than the second, respectively.

• Functions in JavaScript are considered to be data. Therefore, functions can be assigned to vari- ables, stored in Arrays and passed to functions just like other data types.

**_Section 10.9 Searching Arrays: Linear Search and Binary Search_** • The linear search algorithm iterates through the elements of an array until it finds an element

that matches a search key.

• If the array being searched is not in any particular order, it is just as likely that the value will be found in the first element as the last. On average, therefore, the program will have to compare the search key with half the elements of the array.

• The binary search algorithm is more efficient than the linear search algorithm, but it requires that the array be sorted.

• The binary search algorithm tests the middle element in the array and returns the index if it matches the search key. If not, it cuts the list in half, depending on whether the key is greater than or less than the middle element, and repeats the process on the remaining half of the sorted list. The algorithm ends by either finding an element that matches the search key or reducing the subarray to zero size.

• When searching a sorted array, the binary search provides a tremendous increase in performance over the linear search. For a one-billion-element array, this is the difference between an average of 500 million comparisons and a maximum of 30 comparisons.

• The maximum number of comparisons needed for the binary search of any sorted array is the exponent of the first power of 2 greater than the number of elements in the array.

**_Section 10.10 Multidimensional Arrays_** • To identify a particular two-dimensional multidimensional array element, we must specify the

two subscripts; by convention, the first identifies the element’s row, and the second identifies the element’s column.

• In general, an array with _m_ rows and _n_ columns is called an _m_\-by-_n_ array.

• Every element in a two-dimensional array is accessed using an element name of the form a\[ i \]\[ j \]; a is the name of the array, and i and j are the subscripts that uniquely identify the row and column, respectively, of each element in a.

• Multidimensional arrays are maintained as arrays of arrays.

**_Section 10.11 Building an Online Quiz_** • An XHTML form’s elements can be accessed individually using getElementById or through the

elements property of the containing form object. The elements property contains an array of all the form’s controls.

• Property checked of a radio button is true when the radio button is selected, and it is false when the radio button is not selected.

**Terminology** a\[i\]

a\[i\]\[j\]

address in memory array data structure

array initializer list Array object binary search bounds of an array

**396** Chapter 10 JavaScript: Arrays

checked property of a radio button collections of data items column subscript comma-separated initializer list comparator function creating an instance data structure declare an array dynamic memory allocation operator (new) element of an array elements property of a form object for…in repetition statement index of an element initialize an array initializer initializer list instantiating an object iterating over an array’s elements join method of an Array object left-hand-side expression length of an Array object linear search of an array location in an array _m_\-by-_n_ array multidimensional array

name of an array new operator off-by-one error one-dimensional array pass-by-reference pass-by-value passing arrays to functions place holder in an initializer list (,) position number of an element reserve a space in an Array

row subscript scalar quantities separator search key searching an array sort method of the Array object sorting an array square brackets \[\] subscript table of values tabular format traverse an array two-dimensional array value of an element zeroth element

**Self-Review Exercises 10.1** Fill in the blanks in each of the following statements:

a) Lists and tables of values can be stored in . b) The elements of an array are related by the fact that they normally have the same

. c) The number used to refer to a particular element of an array is called its . d) The process of putting the elements of an array in order is called the array. e) Determining whether an array contains a certain key value is called the array. f) An array that uses two subscripts is referred to as a(n) array.

**10.2** State whether each of the following is _true_ or _false_. If _false_, explain why. a) An array can store many different types of values. b) An array subscript should normally be a floating-point value. c) An individual array element that is passed to a function and modified in it will contain

the modified value when the called function completes execution.

**10.3** Write JavaScript statements (regarding array fractions) to accomplish each of the follow- ing tasks:

a) Declare an array with 10 elements, and initialize the elements of the array to 0. b) Refer to the fourth element of the array. c) Refer to array element 4. d) Assign the value 1.667 to array element 9. e) Assign the value 3.333 to the seventh element of the array. f) Sum all the elements of the array, using a for…in statement. Define variable x as a con-

trol variable for the loop.

Answers to Self-Review Exercises **397**

**10.4** Write JavaScript statements (regarding array table) to accomplish each of the following tasks:

a) Declare and create the array with three rows and three columns. b) Display the number of elements. c) Use a for…in statement to initialize each element of the array to the sum of its sub-

scripts. Assume that the variables x and y are declared as control variables.

**10.5** Find the error(s) in each of the following program segments, and correct them. a) var b = new Array( 10 );

for ( var i = 0; i <= b.length; ++i )

b\[ i \] = 1; b) var a = \[ \[ 1, 2 \], \[ 3, 4 \] \];

a\[ 1, 1 \] = 5;

**Answers to Self-Review Exercises 10.1** a) arrays. b) type. c) subscript. d) sorting. e) searching. f) two-dimensional.

**10.2** a) True. b). False. An array subscript must be an integer or an integer expression. c) False. Individual primitive-data-type elements are passed by value. If a reference to an array is passed, then modifications to the elements of the array are reflected in the original element of the array. Also, an individual element of an object type passed to a function is passed by reference, and changes to the object will be reflected in the original array element.

**10.3** a) var fractions = \[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 \];

b) fractions\[ 3 \]

c) fractions\[ 4 \]

d) fractions\[ 9 \] = 1.667;

e) fractions\[ 6 \] = 3.333;

f) var total = 0;

for ( var x in fractions )

total += fractions\[ x \];

**10.4** a) var table = new Array( new Array( 3 ), new Array( 3 ),

new Array( 3 ) );

b) document.write( "total: " + ( table.length \* table\[ 0 \].length ) );

c) for ( var x in table )

for ( var y in table\[ x \] )

table\[ x \]\[ y \] = x + y;

**10.5** a) Error: Referencing an array element outside the bounds of the array (b\[10\]). \[_Note:_ This error is actually a logic error, not a syntax error.\] Correction: Change the <= operator to <. b) Error: The array subscripting is done incorrectly. Correction: Change the statement to a\[ 1 \]\[ 1 \] = 5;.

**Exercises 10.6** Fill in the blanks in each of the following statements:

a) JavaScript stores lists of values in . b) The names of the four elements of array p are , , and

. c) In a two-dimensional array, the first subscript identifies the of an element, and

the second subscript identifies the of an element. d) An _m_\-by-_n_ array contains rows, columns and elements. e) The name the element in row 3 and column 5 of array d is .

**398** Chapter 10 JavaScript: Arrays

f) The name of the element in the third row and fifth column of array d is .

**10.7** State whether each of the following is _true_ or _false_. If _false_, explain why. a) To refer to a particular location or element in an array, we specify the name of the array

and the value of the element. b) A variable declaration reserves space for an array. c) To indicate that 100 locations should be reserved for integer array p, the programmer

should write the declaration p\[ 100 \];

d) A JavaScript program that initializes the elements of a 15-element array to zero must contain at least one for statement.

e) A JavaScript program that totals the elements of a two-dimensional array must contain nested for statements.

**10.8** Write JavaScript statements to accomplish each of the following tasks: a) Display the value of the seventh element of array f. b) Initialize each of the five elements of one-dimensional array g to 8. c) Total the elements of array c, which contains 100 numeric elements. d) Copy 11-element array a into the first portion of array b, which contains 34 elements. e) Determine and print the smallest and largest values contained in 99-element floating-

point array w.

**10.9** Consider a two-by-three array t that will store integers. a) Write a statement that declares and creates array t. b) How many rows does t have? c) How many columns does t have? d) How many elements does t have? e) Write the names of all the elements in the second row of t. f) Write the names of all the elements in the third column of t. g) Write a single statement that sets the elements of t in row 1 and column 2 to zero. h) Write a series of statements that initializes each element of t to zero. Do not use a rep-

etition structure. i) Write a nested for statement that initializes each element of t to zero. j) Write a series of statements that determines and prints the smallest value in array t. k) Write a statement that displays the elements of the first row of t. l) Write a statement that totals the elements of the fourth column of t. m) Write a series of statements that prints the array t in neat, tabular format. List the col-

umn subscripts as headings across the top, and list the row subscripts at the left of each row.

**10.10** Use a one-dimensional array to solve the following problem: A company pays its salespeople on a commission basis. The salespeople receive $200 per week plus 9 percent of their gross sales for that week. For example, a salesperson who grosses $5000 in sales in a week receives $200 plus 9 per- cent of $5000, or a total of $650. Write a script (using an array of counters) that obtains the gross sales for each employee through an XHTML form and determines how many of the salespeople earned salaries in each of the following ranges (assume that each salesperson’s salary is truncated to an integer amount):

a) $200–299 b) $300–399 c) $400–499 d) $500–599 e) $600–699 f) $700–799

Exercises **399**

g) $800–899 h) $900–999 i) $1000 and over

**10.11** Write statements that perform the following operations for a one-dimensional array: a) Set the 10 elements of array counts to zeros. b) Add 1 to each of the 15 elements of array bonus. c) Display the five values of array bestScores, separated by spaces.

**10.12** Use a one-dimensional array to solve the following problem: Read in 20 numbers, each of which is between 10 and 100. As each number is read, print it only if it is not a duplicate of a num- ber that has already been read. Provide for the “worst case,” in which all 20 numbers are different. Use the smallest possible array to solve this problem.

**10.13** Label the elements of three-by-five two-dimensional array sales to indicate the order in which they are set to zero by the following program segment:

for ( var row in sales ) for ( var col in sales\[ row \] )

sales\[ row \]\[ col \] = 0;

**10.14** Write a script to simulate the rolling of two dice. The script should use Math.random to roll the first die and again to roll the second die. The sum of the two values should then be calculated. \[_Note:_ Since each die can show an integer value from 1 to 6, the sum of the values will vary from 2 to 12, with 7 being the most frequent sum, and 2 and 12 the least frequent sums. Figure 10.15 shows the 36 possible combinations of the two dice. Your program should roll the dice 36,000 times. Use a one-dimensional array to tally the numbers of times each possible sum appears. Display the results in an XHTML table. Also determine whether the totals are reasonable (e.g., there are six ways to roll a 7, so approximately 1/6 of all the rolls should be 7).\]

**10.15** Write a script that runs 1000 games of craps and answers the following questions: a) How many games are won on the first roll, second roll, …, twentieth roll and after the

twentieth roll? b) How many games are lost on the first roll, second roll, …, twentieth roll and after the

twentieth roll? c) What are the chances of winning at craps? \[_Note:_ You should discover that craps is one

of the fairest casino games. What do you suppose this means?\] d) What is the average length of a game of craps? e) Do the chances of winning improve with the length of the game?

**10.16** _(Airline Reservations System)_ A small airline has just purchased a computer for its new auto- mated reservations system. You have been asked to program the new system. You are to write a pro- gram to assign seats on each flight of the airline’s only plane (capacity: 10 seats).

**Fig. 10.15** | Thirty-six possible outcomes of rolling two dice.

2

1

3

4

5

6

3

2

4

5

6

7

4

3

5

6

7

8

5

4

6

7

8

9

6

5

7

8

9

10

7

6

8

9

10

11

8

7

9

10

11

12

321 654

**400** Chapter 10 JavaScript: Arrays

Your program should display the following menu of alternatives: Please type 1 for "First

Class" and Please type 2 for "Economy". If the person types 1, your program should assign a seat in the first-class section (seats 1–5). If the person types 2, your program should assign a seat in the economy section (seats 6–10). Your program should print a boarding pass indicating the person’s seat number and whether it is in the first-class or economy section of the plane.

Use a one-dimensional array to represent the seating chart of the plane. Initialize all the ele- ments of the array to 0 to indicate that all the seats are empty. As each seat is assigned, set the cor- responding elements of the array to 1 to indicate that the seat is no longer available.

Your program should, of course, never assign a seat that has already been assigned. When the first-class section is full, your program should ask the person if it is acceptable to be placed in the economy section (and vice versa). If yes, then make the appropriate seat assignment. If no, then print the message "Next flight leaves in 3 hours."

**10.17** Use a two-dimensional array to solve the following problem: A company has four salespeo- ple (1 to 4) who sell five different products (1 to 5). Once a day, each salesperson passes in a slip for each different type of product actually sold. Each slip contains

a) the salesperson number, b) the product number, and c) the total dollar value of the product sold that day.

Thus, each salesperson passes in between zero and five sales slips per day. Assume that the informa- tion from all of the slips for last month is available. Write a script that will read all this information for last month’s sales and summarize the total sales by salesperson by product. All totals should be stored in the two-dimensional array sales. After processing all the information for last month, dis- play the results in an XHTML table format, with each of the columns representing a different salesperson and each of the rows representing a different product. Cross-total each row to get the total sales of each product for last month; cross-total each column to get the total sales by salesper- son for last month. Your tabular printout should include these cross-totals to the right of the totaled rows and to the bottom of the totaled columns.

**10.18** _(Turtle Graphics)_ The Logo language, which is popular among young computer users, made the concept of **turtle graphics** famous. Imagine a mechanical turtle that walks around the room un- der the control of a JavaScript program. The turtle holds a pen in one of two positions, up or down. When the pen is down, the turtle traces out shapes as it moves; when the pen is up, the turtle moves about freely without writing anything. In this problem, you will simulate the operation of the turtle and create a computerized sketchpad as well.

Use a 20-by-20 array floor that is initialized to zeros. Read commands from an array that contains them. Keep track of the current position of the turtle at all times and of whether the pen is currently up or down. Assume that the turtle always starts at position (0, 0) of the floor, with its pen up. The set of turtle commands your script must process are as in Fig. 10.16.

Suppose that the turtle is somewhere near the center of the floor. The following “program” would draw and print a 12-by-12 square, then leave the pen in the up position:

2 5,12 3 5,12 3 5,12 3 5,12 1 6 9

Exercises **401**

As the turtle moves with the pen down, set the appropriate elements of array floor to 1s. When the 6 command (print) is given, display an asterisk or some other character of your choosing wherever there is a 1 in the array. Wherever there is a zero, display a blank. Write a script to implement the turtle-graphics capabilities discussed here. Write several turtle-graphics programs to draw interest- ing shapes. Add other commands to increase the power of your turtle-graphics language.

**10.19** _(The Sieve of Eratosthenes)_ A prime integer is an integer greater than 1 that is evenly divisible only by itself and 1. The Sieve of Eratosthenes is an algorithm for finding prime numbers. It oper- ates as follows:

a) Create an array with all elements initialized to 1 (true). Array elements with prime sub- scripts will remain as 1. All other array elements will eventually be set to zero.

b) Set the first two elements to zero, since 0 and 1 are not prime. Starting with array sub- script 2, every time an array element is found whose value is 1, loop through the remain- der of the array and set to zero every element whose subscript is a multiple of the subscript for the element with value 1. For array subscript 2, all elements beyond 2 in the array that are multiples of 2 will be set to zero (subscripts 4, 6, 8, 10, etc.); for array subscript 3, all elements beyond 3 in the array that are multiples of 3 will be set to zero (subscripts 6, 9, 12, 15, etc.); and so on.

When this process is complete, the array elements that are still set to 1 indicate that the subscript is a prime number. These subscripts can then be printed. Write a script that uses an array of 1000 ele- ments to determine and print the prime numbers between 1 and 999. Ignore element 0 of the array.

**10.20** ( _Simulation: The Tortoise and the Hare)_ In this problem, you will re-create one of the truly great moments in history, namely the classic race of the tortoise and the hare. You will use random number generation to develop a simulation of this memorable event.

Our contenders begin the race at square 1 of 70 squares. Each square represents a possible position along the race course. The finish line is at square 70. The first contender to reach or pass square 70 is rewarded with a pail of fresh carrots and lettuce. The course weaves its way up the side of a slippery mountain, so occasionally the contenders lose ground.

There is a clock that ticks once per second. With each tick of the clock, your script should adjust the position of the animals according to the rules in Fig. 10.17.

Use variables to keep track of the positions of the animals (i.e., position numbers are 1–70). Start each animal at position 1 (i.e., the “starting gate”). If an animal slips left before square 1, move the animal back to square 1.

Command Meaning

1 Pen up

2 Pen down

3 Turn right

4 Turn left

5,10 Move forward 10 spaces (or a number other than 10)

6 Print the 20-by-20 array

9 End of data (sentinel)

**Fig. 10.16** | Turtle graphics commands.

**402** Chapter 10 JavaScript: Arrays

Generate the percentages in Fig. 10.17 by producing a random integer _i_ in the range 1 ≤ _i_ ≤ 10. For the tortoise, perform a “fast plod” when 1 ≤ _i_ ≤ 5, a “slip” when 6 ≤ _i_ ≤ 7 and a “slow plod” when 8 ≤ _i_ ≤ 10. Use a similar technique to move the hare.

Begin the race by printing

BANG !!!!! AND THEY'RE OFF !!!!!

Then, for each tick of the clock (i.e., each repetition of a loop), print a 70-position line show- ing the letter T in the position of the tortoise and the letter H in the position of the hare. Occa- sionally, the contenders will land on the same square. In this case, the tortoise bites the hare, and your script should print OUCH!!! beginning at that position. All print positions other than the T, the H or the OUCH!!! (in case of a tie) should be blank.

After each line is printed, test whether either animal has reached or passed square 70. If so, print the winner, and terminate the simulation. If the tortoise wins, print TORTOISE WINS!!! YAY!!!

If the hare wins, print Hare wins. Yuck! If both animals win on the same tick of the clock, you may want to favor the turtle (the “underdog”), or you may want to print It's a tie. If neither animal wins, perform the loop again to simulate the next tick of the clock. When you are ready to run your script, assemble a group of fans to watch the race. You’ll be amazed at how involved your audience gets!

Later in the book, we introduce a number of Dynamic HTML capabilities, such as graphics, images, animation and sound. As you study those features, you might enjoy enhancing your tor- toise-and-hare contest simulation.

Animal Move type Percentage of the time Actual move

Tortoise Fast plod 50% 3 squares to the right

Slip 20% 6 squares to the left

Slow plod 30% 1 square to the right

Hare Sleep 20% No move at all

Big hop 20% 9 squares to the right

Big slip 10% 12 squares to the left

Small hop 30% 1 square to the right

Small slip 20% 2 squares to the left

**Fig. 10.17** | Rules for adjusting the position of the tortoise and the hare.

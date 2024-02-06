---
title: "JavaScript: Objects"
weight: 8
---

# O B J E C T I V E S

In this chapter you will learn:

■ Object-based programming terminology and concepts.

■ The concepts of encapsulation and data hiding.

■ The value of object orientation.

■ To use the JavaScript objects Math, String, Date, Boolean and Number.

■ To use the browser’s document and window objects.

■ To use cookies.

■ To represent objects simply using JSON.

## Introduction

Most of the JavaScript programs we’ve demonstrated illustrate basic programming con- cepts. These programs provide you with the foundation you need to build powerful and complex scripts as part of your web pages. As you proceed beyond this chapter, you will use JavaScript to manipulate every element of an XHTML document from a script.

This chapter presents a more formal treatment of **objects**. We begin by giving a brief introduction to the concepts behind object-orientation. The remainder of the chapter overviews—and serves as a reference for—several of JavaScript’s built-in objects and dem- onstrates many of their capabilities. We also provide a brief introduction to JSON, a means for creating JavaScript objects. In the chapters on the Document Object Model and Events that follow this chapter, you will be introduced to many objects provided by the browser that enable scripts to interact with the elements of an XHTML document.

## Introduction to Object Technology

This section provides a general introduction to object orientation. The terminology and technologies discussed here support various chapters that come later in the book. Here, you’ll learn that objects are a natural way of thinking about the world and about scripts that manipulate XHTML documents. In Chapters 6–10, we used built-in JavaScript ob- jects—Math and Array—and objects provided by the web browser—document and window—to perform tasks in our scripts. JavaScript uses objects to perform many tasks and therefore is referred to as an **object-based programming language**. As we have seen, Java- Script also uses constructs from the “conventional” structured programming methodology supported by many other programming languages. The first five JavaScript chapters con- centrated on these conventional parts of JavaScript because they are important compo- nents of all JavaScript programs. Our goal here is to help you develop an object-oriented way of thinking. Many concepts in this book, including CSS, JavaScript, Ajax, Ruby on Rails, ASP.NET, and JavaServer Faces are based on at least some of the concepts intro- duced in this section.

**_Basic Object-Technology Concepts_**
We begin our introduction to object technology with some key terminology. Everywhere you look in the real world you see objects—people, animals, plants, cars, planes, buildings, computers, monitors and so on. Humans think in terms of objects. Telephones, houses, traffic lights, microwave ovens and water coolers are just a few more objects we see around us every day.

We sometimes divide objects into two categories: animate and inanimate. Animate objects are “alive” in some sense—they move around and do things. Inanimate objects do not move on their own. Objects of both types, however, have some things in common. They all have **attributes** (e.g., size, shape, color and weight), and they all exhibit **behaviors** (e.g., a ball rolls, bounces, inflates and deflates; a baby cries, sleeps, crawls, walks and blinks; a car accelerates, brakes and turns; a towel absorbs water). We’ll study the kinds of attributes and behaviors that software objects have.

Humans learn about existing objects by studying their attributes and observing their behaviors. Different objects can have similar attributes and can exhibit similar behaviors. Comparisons can be made, for example, between babies and adults, and between humans and chimpanzees.

**Object-oriented design (OOD)** models software in terms similar to those that people use to describe real-world objects. It takes advantage of class relationships, where objects of a certain class, such as a class of vehicles, have the same characteristics—cars, trucks, little red wagons and roller skates have much in common. OOD takes advantage of **inher- itance** relationships, where new classes of objects are derived by absorbing characteristics of existing classes and adding unique characteristics of their own. An object of class “con- vertible” certainly has the characteristics of the more general class “automobile,” but more specifically, the roof goes up and down.

Object-oriented design provides a natural and intuitive way to view the software design process—namely, modeling objects by their attributes, behaviors and interrelation- ships just as we describe real-world objects. OOD also models communication between objects. Just as people send messages to one another (e.g., a sergeant commands a soldier to stand at attention), objects also communicate via messages. A bank account object may receive a message to decrease its balance by a certain amount because the customer has withdrawn that amount of money.

OOD **encapsulates** (i.e., wraps) attributes and **operations** (behaviors) into objects— an object’s attributes and operations are intimately tied together. Objects have the prop- erty of **information hiding**. This means that objects may know how to communicate with one another across well-defined **interfaces**_,_ but normally they are not allowed to know how other objects are implemented—implementation details are hidden within the objects themselves. We can drive a car effectively, for instance, without knowing the details of how engines, transmissions, brakes and exhaust systems work internally—as long as we know how to use the accelerator pedal, the brake pedal, the steering wheel and so on. Informa- tion hiding, as we’ll see, is crucial to good software engineering.

Like the designers of an automobile, the designers of web browsers have defined a set of objects that encapsulate an XHTML document’s elements and expose to a JavaScript programmer the attributes and behaviors that enable a JavaScript program to interact with (or script) those elements (objects). You’ll soon see that the browser’s document object contains attributes and behaviors that provide access to every element of an XHTML doc- ument. Similarly, JavaScript provides objects that encapsulate various capabilities in a script. For example, the JavaScript Array object provides attributes and behaviors that enable a script to manipulate a collection of data. The Array object’s length property (attribute) contains the number of elements in the Array. The Array object’s sort method (behavior) orders the elements of the Array.

Some programming languages—like Java, Visual Basic, C# and C++—are **object ori- ented**. Programming in such a language is called **object-oriented programming (OOP),** and it allows computer programmers to implement object-oriented designs as working software systems. Languages like C, on the other hand, are **procedural**_,_ so programming tends to be **action oriented**_._ In procedural languages, the unit of programming is the **func- tion*.*** In object-oriented languages, the unit of programming is the **class** from which objects are eventually **instantiated** (an OOP term for “created”). Classes contain functions that implement operations and data that comprises attributes.

Procedural programmers concentrate on writing functions. Programmers group actions that perform some common task into functions, and group functions to form pro- grams. Data is certainly important in procedural languages, but the view is that data exists primarily in support of the actions that functions perform. The **verbs** in a system specifi- cation help a procedural programmer determine the set of functions that work together to implement the system.

**_Classes, Properties and Methods_**
Object-oriented programmers concentrate on creating their own **user-defined types** called **classes**. Each class contains data as well as the set of functions that manipulate that data and provide services to **clients** (i.e., other classes or functions that use the class). The data components of a class are called properties. For example, a bank account class might in- clude an account number and a balance. The function components of a class are called methods. For example, a bank account class might include methods to make a deposit (in- creasing the balance), make a withdrawal (decreasing the balance) and inquire what the current balance is. You use built-in types (and other user-defined types) as the “building blocks” for constructing new user-defined types (classes). The **nouns** in a system specifi- cation help you determine the set of classes from which objects are created that work to- gether to implement the system.

Classes are to objects as blueprints are to houses—a class is a “plan” for building an object of the class. Just as we can build many houses from one blueprint, we can instantiate (create) many objects from one class. You cannot cook meals in the kitchen of a blueprint; you can cook meals in the kitchen of a house. You cannot sleep in the bedroom of a blue- print; you can sleep in the bedroom of a house.Classes can have relationships with other classes. For example, in an object-oriented design of a bank, the “bank teller” class needs to relate to other classes, such as the “cus- tomer” class, the “cash drawer” class, the “safe” class, and so on. These relationships are called **associations**.

Packaging software as classes makes it possible for future software systems to **reuse** the classes. Groups of related classes are often packaged as reusable **components**. Just as real- tors often say that the three most important factors affecting the price of real estate are “location, location and location,” some people in the software development community say that the three most important factors affecting the future of software development are “reuse, reuse and reuse.

Indeed, with object technology, you can build much of the new software you’ll need by combining existing classes, just as automobile manufacturers combine interchangeable parts. Each new class you create will have the potential to become a valuable software asset that you and other programmers can reuse to speed and enhance the quality of future soft- ware development efforts. Now that we’ve introduced the terminology associated with object-orientation, you’ll see it used in the upcoming discussions of some of JavaScript’s objects.

## Math Object

The Math object’s methods allow you to perform many common mathematical calcula- tions. As shown previously, an object’s methods are called by writing the name of the ob- ject followed by a dot (.) and the name of the method. In parentheses following the method name is the argument (or a comma-separated list of arguments) to the method. For example, to calculate and display the square root of 900.0 you might write

document.writeln( Math.sqrt( 900.0 ) );

which calls method Math.sqrt to calculate the square root of the number contained in the parentheses (900.0), then outputs the result. The number 900.0 is the argument of the Math.sqrt method. The preceding statement would display 30.0. Some **Math** object methods are summarized in Fig. 11.1.

|  Method   |                   Description                    |                        Examples                        |
| :-------: | :----------------------------------------------: | :----------------------------------------------------: |
| abs( x )  |               absolute value of x                | abs( 7.2 ) is 7.2 abs( 0.0 ) is 0.0 abs( -5.6 ) is 5.6 |
| ceil( x ) | rounds x to the smallest integer not less than x |        ceil( 9.2 ) is 10.0 ceil( -9.8 ) is -9.0        |
| cos( x )  |     trigonometric cosine of x (x in radians)     |                   cos( 0.0 ) is 1.0                    |
| exp( x )  |             exponential method e^x^              |      exp( 1.0 ) is 2.71828 exp( 2.0 ) is 7.38906       |

**Fig. 11.1** | Math object methods. (Part 1 of 2.)

|   Method    |                    Description                     |                      Examples                       |
| :---------: | :------------------------------------------------: | :-------------------------------------------------: |
| floor( x )  | rounds x to the largest integer not greater than x |     floor( 9.2 ) is 9.0 floor( -9.8 ) is -10.0      |
|  log( x )   |         natural logarithm of x (base _e_)          |    log( 2.718282 ) is 1.0 log( 7.389056 ) is 2.0    |
| max( x, y ) |              larger value of x and y               | max( 2.3, 12.7 ) is 12.7 max( -2.3, -12.7 ) is -2.3 |
| min( x, y ) |              smaller value of x and y              | min( 2.3, 12.7 ) is 2.3 min( -2.3, -12.7 ) is -12.7 |
| pow( x, y ) |             x raised to power y (x^y^)             |   pow( 2.0, 7.0 ) is 128.0 pow( 9.0, .5 ) is 3.0    |
| round( x )  |          rounds x to the closest integer           |       round( 9.75 ) is 10 round( 9.25 ) is 9        |
|  sin( x )   |       trigonometric sine of x (x in radians)       |                  sin( 0.0 ) is 0.0                  |
|  sqrt( x )  |                  square root of x                  |      sqrt( 900.0 ) is 30.0 sqrt( 9.0 ) is 3.0       |
|  tan( x )   |     trigonometric tangent of x (x in radians)      |                  tan( 0.0 ) is 0.0                  |

**Fig. 11.1** | Math object methods. (Part 2 of 2.)

**Common Programming Error 11.1**

> _Forgetting to invoke a Math method by preceding the method name with the object name Math and a dot (.) is an error._ 11.1

**Software Engineering Observation 11.1**

> _The primary difference between invoking a standalone function and invoking a method of an object is that an object name and a dot are not required to call a standalone function._ 11.1

The Math object defines several commonly used mathematical constants, summarized in Fig. 11.2. \[_Note:_ By convention, the names of constants are written in all uppercase let- ters so they stand out in a program.\]

| Constant  |            Description             |        Value        |
| :-------: | :--------------------------------: | :-----------------: |
|  Math.E   | Base of a natural logarithm (_e_). | Approximately 2.718 |
| Math.LN2  |       Natural logarithm of 2       | Approximately 0.693 |
| Math.LN10 |      Natural logarithm of 10       | Approximately 2.302 |

**Fig. 11.2** | Properties of the Math object. (Part 1 of 2.)

|   Constant   |                       Description                       |              Value              |
| :----------: | :-----------------------------------------------------: | :-----------------------------: |
|  Math.LOG2E  |                 Base 2 logarithm of _e_                 |       Approximately 1.442       |
| Math.LOG10E  |                Base 10 logarithm of _e_                 |       Approximately 0.434       |
|   Math.PI    | π—the ratio of a circle’s circumference to its diameter | Approximately 3.141592653589793 |
| Math.SQRT1_2 |                   Square root of 0.5                    |       Approximately 0.707       |
|  Math.SQRT2  |                   Square root of 2.0                    |       Approximately 1.414       |

**Fig. 11.2** | Properties of the Math object. (Part 2 of 2.)

**Good Programming Practice 11.1**

> _Use the mathematical constants of the Math object rather than explicitly typing the numeric value of the constant._ 11.1

## String Object

In this section, we introduce JavaScript’s string- and character-processing capabilities. The techniques discussed here are appropriate for processing names, addresses, telephone num- bers, and similar items.

### Fundamentals of Characters and Strings

Characters are the fundamental building blocks of JavaScript programs. Every program is composed of a sequence of characters grouped together meaningfully that is interpreted by the computer as a series of instructions used to accomplish a task.

A string is a series of characters treated as a single unit. A string may include letters, digits and various **special characters**_,_ such as +, -, \*, /, and $. JavaScript supports the set of characters called **Unicode**_®_, which represents a large portion of the world’s languages. (We discuss Unicode in detail in Appendix F.) A string is an object of type **String**. **String literals** or **string constants** (often called **anonymous String objects**) are written as a sequence of characters in double quotation marks or single quotation marks, as follows:

"John Q. Doe" (a name)
'9999 Main Street' (a street address)
"Waltham, Massachusetts" (a city and state)
'(201) 555-1212' (a telephone number)

A String may be assigned to a variable in a declaration. The declaration

var color = "blue";

initializes variable color with the String object containing the string "blue". Strings can be compared via the relational (<, <=, > and >=) and equality operators (== and !=). Strings are compared using the Unicode values of the corresponding characters. For example, the expression "hello" < "Hello" evaluates to false because lowercase letters have higher Uni- code values.

### Methods of the String Object

The String object encapsulates the attributes and behaviors of a string of characters. It provides many methods (behaviors) that accomplish useful tasks such as selecting charac- ters from a string, combining strings (called **concatenation**), obtaining substrings of a string, searching for substrings within a string, tokenizing strings (i.e., splitting strings into individual words) and converting strings to all uppercase or lowercase letters. The String object also provides several methods that generate XHTML tags. Figure 11.3 summarizes many String methods. Figures 11.4–11.7 demonstrate some of these methods.

|                   Method                   |                                                                                                                                                                                                        Description                                                                                                                                                                                                         |
| :----------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|             charAt( _index_ )              |                                                                                                                 Returns a string containing the character at the specified _index_. If there is no character at the _index_, charAt returns an empty string. The first character is located at _index_ 0.                                                                                                                  |
|           charCodeAt( _index_ )            |                                                                                                                                            Returns the Unicode value of the character at the specified _index_, or NaN (not a number) if there is no character at that _index_.                                                                                                                                            |
|             concat( _string_ )             |                                                           Concatenates its argument to the end of the string that invokes the method. The string invoking this method is not modified; instead a new String is returned. This method is the same as adding two strings with the string-concatenation operator + (e.g., s1.con- cat(s2) is the same as s1 + s2).                                                            |
|   fromCharCode(_value1_, _value2_, _…_)    |                                                                                                                                                                 Converts a list of Unicode values into a string containing the cor- responding characters.                                                                                                                                                                 |
|       indexOf(_substring_, _index_ )       |                                        Searches for the first occurrence of _substring_ starting from position _index_ in the string that invokes the method. The method returns the starting index of _substring_ in the source string or –1 if _substring_ is not found. If the _index_ argument is not provided, the method begins searching from index 0 in the source string.                                         |
|     lastIndexOf(_substring_, _index_ )     |                      Searches for the last occurrence of _substring_ starting from position _index_ and searching toward the beginning of the string that invokes the method. The method returns the starting index of _sub- string_ in the source string or –1 if _substring_ is not found. If the _index_ argument is not provided, the method begins searching from the end of the source string.                       |
| replace( _searchString_, _replaceString_ ) |                                                                                                                  Searches for the substring _searchString_, and replaces the first occur- rence with _replaceString_ and returns the modified string, or the original string if no replacement was made.                                                                                                                   |
|          slice( _start_, _end_ )           | Returns a string containing the portion of the string from index _start_ through index _end_. If the _end_ index is not specified, the method returns a string from the _start_ index to the end of the source string. A negative _end_ index specifies an offset from the end of the string, starting from a position one past the end of the last character (so –1 indicates the last character position in the string). |

**Fig. 11.3** | Some String object methods. (Part 1 of 2.)

|               Method               |                                                                                                        Description                                                                                                         |
| :--------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|         split( _string_ )          |              Splits the source string into an array of strings (tokens), where its _string_ argument specifies the delimiter (i.e., the characters that indicate the end of each token in the source string).              |
|     substr(_start_, _length_ )     | Returns a string containing _length_ characters starting from index _start_ in the source string. If _length_ is not specified, a string contain- ing characters from _start_ to the end of the source string is returned. |
|     substring(_start_, _end_ )     |                                                  Returns a string containing the characters from index _start_ up to but not including index _end_ in the source string.                                                   |
|           toLowerCase()            |                                                Returns a string in which all uppercase letters are converted to low- ercase letters. Nonletter characters are not changed.                                                 |
|           toUpperCase()            |                                                 Returns a string in which all lowercase letters are converted to uppercase letters. Nonletter characters are not changed.                                                  |
| _Methods that generate XHTML tags_ |                                                                                                                                                                                                                            |
|          anchor( _name_ )          |                                                                   Wraps the source string in an anchor element (<a></a>) with _name_ as the anchor name.                                                                   |
|              fixed()               |                                                                           Wraps the source string in a <tt></tt> element (same as <pre></ pre>).                                                                           |
|           link( _url_ )            |                                                                Wraps the source string in an anchor element (<a></a>) with _url_ as the hyperlink location.                                                                |
|              strike()              |                                                                                  Wraps the source string in a <strike></strike> element.                                                                                   |
|               sub()                |                                                                                     Wraps the source string in a <sub></sub> element.                                                                                      |
|               sup()                |                                                                                     Wraps the source string in a <sup></sup> element.                                                                                      |

**Fig. 11.3** | Some String object methods. (Part 2 of 2.)

### Character-Processing Methods

The script in Fig. 11.4 demonstrates some of the String object’s character-processing methods, including **charAt** (returns the character at a specific position), **charCodeAt** (re- turns the Unicode value of the character at a specific position), **fromCharCode** (returns a string created from a series of Unicode values), **toLowerCase** (returns the lowercase version of a string) and **toUpperCase** (returns the uppercase version of a string).

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 11.4: CharacterProcessing.html -->
<!-- String methods charAt, charCodeAt, fromCharCode, toLowercase and
toUpperCase. -->
```

**Fig. 11.4** | String methods charAt, charCodeAt, fromCharCode, toLowercase and toUpperCase. (Part 1 of 2.)

```bash
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Character Processing Methods</title>
<script type = "text/javascript">
<!--
var s = "ZEBRA";
var s2 = "AbCdEfG";

document.writeln( "<p>Character at index 0 in '" +
s + "' is " + s.charAt( 0 ) );
document.writeln( "<br />Character code at index 0 in '"
\+ s + "' is " + s.charCodeAt( 0 ) + "</p>" );

document.writeln( "<p>'" +
String.fromCharCode( 87, 79, 82, 68 )+
"' contains character codes 87, 79, 82 and 68</p>" )

document.writeln( "<p>'" + s2 + "' in lowercase is '" +
s2.toLowerCase()+ "'" );
document.writeln( "<br />'" + s2 + "' in uppercase is '"
+s2.toUpperCase() + "'</p>" );
// -->
</script>
</head><body></body>
</html>
```

**Fig. 11.4** | String methods charAt, charCodeAt, fromCharCode, toLowercase and toUpperCase. (Part 2 of 2.)

Lines 16–17 display the first character in String s ("ZEBRA") using String method charAt. Method **charAt** returns a string containing the character at the specified index (0 in this example). Indices for the characters in a string start at 0 (the first character) and go up to (but do not include) the string’s length (i.e., if the string contains five characters, the indices are 0 through 4). If the index is outside the bounds of the string, the method returns an empty string.

Lines 18–19 display the character code for the first character in String s ("ZEBRA") by calling String method charCodeAt. Method charCodeAt returns the Unicode value of the character at the specified index (0 in this example). If the index is outside the bounds of the string, the method returns NaN.

String method fromCharCode receives as its argument a comma-separated list of Unicode values and builds a string containing the character representation of those Uni- code values. Lines 21–23 display the string "WORD", which consists of the character codes 87, 79, 82 and 68. Note that the String object calls method fromCharCode, rather than a specific String variable. Appendix D, ASCII Character Set, contains the character codes for the ASCII character set—a subset of the Unicode character set (Appendix F) that con- tains only Western characters.

The statements in lines 25–26 and 27–28 use String methods **toLowerCase** and **toUpperCase** to display versions of String s2 ("AbCdEfG") in all lowercase letters and all uppercase letters, respectively.

### Searching Methods

Being able to search for a character or a sequence of characters in a string is often useful. For example, if you are creating your own word processor, you may want to provide a ca- pability for searching through the document. The script in Fig. 11.5 demonstrates the String object methods **indexOf** and **lastIndexOf** that search for a specified substring in a string. All the searches in this example are performed on the global string letters (ini- tialized in line 14 with "abcdefghijklmnopqrstuvwxyzabcdefghijklm" in the script).

The user types a substring in the XHTML form searchForm’s inputVal text field and presses the **Search** button to search for the substring in letters. Clicking the **Search** button calls function buttonPressed (defined in lines 16–29) to respond to the onclick

event and perform the searches. The results of each search are displayed in the appropriate text field of searchForm.

Lines 21–22 use String method indexOf to determine the location of the first occur- rence in string letters of the string inputVal.value (i.e., the string the user typed in the

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 11.5: SearchingStrings.html -->
<!-- String searching with indexOf and lastIndexOf. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>
Searching Strings with indexOf and lastIndexOf
</title>
<script type = "text/javascript">
<!--
var letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklm";

function buttonPressed()
{
var searchForm = document.getElementById( "searchForm" );
var inputVal = document.getElementById( "inputVal" );
```

**Fig. 11.5** | String searching with indexOf and lastIndexOf. (Part 1 of 3.)

```bash
searchForm.elements[2].value =
letters.indexOf( inputVal.value );
searchForm.elements[3].value =
letters.lastIndexOf( inputVal.value );
searchForm.elements[4].value =
letters.indexOf( inputVal.value, 12 );
searchForm.elements\[5\].value =
letters.lastIndexOf( inputVal.value, 12 );
} // end function buttonPressed
// -->
</script>
</head>
<body>
<form id = "searchForm" action = "">
<h1>The string to search is:<br />
abcdefghijklmnopqrstuvwxyzabcdefghijklm</h1>
<p>Enter substring to search for
<input id = "inputVal" type = "text" />
<input id = "search" type = "button" value = "Search"
onclick = "buttonPressed()" /><br /></p>

<p>First occurrence located at index
<input id = "first" type = "text" size = "5" />
<br />Last occurrence located at index
<input id = "last" type = "text" size = "5" />
<br />First occurrence from index 12 located at index
<input id = "first12" type = "text" size = "5" />
<br />Last occurrence from index 12 located at index
<input id = "last12" type = "text" size = "5" /></p>
</form>
</body>
</html>
```

**Fig. 11.5** | String searching with indexOf and lastIndexOf. (Part 2 of 3.)

**Fig. 11.5** | String searching with indexOf and lastIndexOf. (Part 3 of 3.)

inputVal text field). If the substring is found, the index at which the first occurrence of the substring begins is returned; otherwise, –1 is returned.

Lines 23–24 use String method lastIndexOf to determine the location of the last occurrence in letters of the string in inputVal. If the substring is found, the index at which the last occurrence of the substring begins is returned; otherwise, –1 is returned.

Lines 25–26 use String method indexOf to determine the location of the first occur- rence in string letters of the string in the inputVal text field, starting from index 12 in letters. If the substring is found, the index at which the first occurrence of the substring (starting from index 12) begins is returned; otherwise, –1 is returned.

Lines 27–28 use String method lastIndexOf to determine the location of the last occurrence in letters of the string in the inputVal text field, starting from index 12 in letters and moving toward the beginning of the input. If the substring is found, the index at which the first occurrence of the substring (if one appears before index 12) begins is returned; otherwise, –1 is returned.

**Software Engineering Observation 11.2**

> _String methods indexOf and lastIndexOf, with their optional second argument (the starting index from which to search), are particularly useful for continuing a search through a large amount of text._ 11.2

### Splitting Strings and Obtaining Substrings

When you read a sentence, your mind breaks it into individual words, or **tokens**, each of which conveys meaning to you. The process of breaking a string into tokens is called **to- kenization**. Interpreters also perform tokenization. They break up statements into such in- dividual pieces as keywords, identifiers, operators and other elements of a programming language. Figure 11.6 demonstrates String method **split**, which breaks a string into its component tokens. Tokens are separated from one another by **delimiters**, typically white-space characters such as blanks, tabs, newlines and carriage returns. Other characters may also be used as delimiters to separate tokens. The XHTML document displays a form con- taining a text field where the user types a sentence to tokenize. The results of the tokeni- zation process are displayed in an XHTML textarea GUI component. The script also demonstrates String method **substring**, which returns a portion of a string.

The user types a sentence into the text field with id inputVal text field and presses the **Split** button to tokenize the string. Function splitButtonPressed (lines 12–21) han- dles the button’s onclick event.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 11.6: SplitAndSubString.html -->
<!-- String object methods split and substring. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>String Methods split and substring</title>
<script type = "text/javascript">
<!--
function splitButtonPressed()
{
var inputString = document.getElementById( "inputVal" ).value;
var tokens = inputString.split( " " );
document.getElementById( "output" ).value =
tokens.join( "\\n" );

document.getElementById( "outputSubstring" ).value =
inputString.substring( 0, 10 );
} // end function splitButtonPressed
// -->
</script>
</head>
<body>
<form action = "">
<p>Enter a sentence to split into words<br />
<input id = "inputVal" type = "text" size = "40" />
<input type = "button" value = "Split" **30** onclick = "splitButtonPressed()" /></p>

<p>The sentence split into words is<br />
<textarea id = "output" rows = "8" cols = "34">
</textarea></p>

<p>The first 10 characters of the input string are
<input id = "outputSubstring" type = "text"
size = "15" /></p>
</form>
</body>
</html>
```

**Fig. 11.6** | String object methods split and substring. (Part 1 of 2.)

**Fig. 11.6** | String object methods split and substring. (Part 2 of 2.)

Line 14 gets the value of the input field and stores it in variable inputString. Line 15 calls String method split to tokenize inputString. The argument to method split is the **delimiter string**—the string that determines the end of each token in the original string. In this example, the space character delimits the tokens. The delimiter string can contain multiple characters that should be used as delimiters. Method split returns an array of strings containing the tokens. Line 17 uses Array method join to combine the tokens in array tokens and separate each token with a newline character (\\n). The resulting string is assigned to the value property of the XHTML form’s output GUI com- ponent (an XHTML textarea).

Lines 19–20 use String method substring to obtain a string containing the first 10 characters of the string the user entered (still stored in inputString). The method returns the substring from the **starting index** (0 in this example) up to but not including the **ending index** (10 in this example). If the ending index is greater than the length of the string, the substring returned includes the characters from the starting index to the end of the original string.

### XHTML Markup Methods

The script in Fig. 11.7 demonstrates the String object’s methods that generate XHTML markup tags. When a String object invokes a markup method, the method wraps the String’s contents in the appropriate XHTML tag. These methods are particularly useful for generating XHTML dynamically during script processing.

Lines 12–17 define the strings that call each of the XHTML markup methods of the String object. Line 19 uses String method **anchor** to format the string in variable anchorText ("This is an anchor") as

<!-a name = "top">This is an anchor</!-a>

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 11.7: MarkupMethods.html -->
<!-- String object XHTML markup methods. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>XHTML Markup Methods of the String Object</title>
<script type = "text/javascript">
<!--
var anchorText = "This is an anchor";
var fixedText = "This is monospaced text";
var linkText = "Click here to go to anchorText";
var strikeText = "This is strike out text";
var subText = "subscript";
var supText = "superscript";

document.writeln(anchorText.anchor( "top" ) );
document.writeln( "<br />" + fixedText.fixed() );
document.writeln( "<br />" + strikeText.strike() );
document.writeln(
"<br />This is text with a " +subText.sub() );
document.writeln(
"<br />This is text with a " +supText.sup() );
document.writeln( "<br />" + linkText.link( "#top" ) );
// -->
</script>
</head><body></body>
</html>
```

**Fig. 11.7** | String object XHTML markup methods. (Part 1 of 2.)

**Fig. 11.7** | String object XHTML markup methods. (Part 2 of 2.)

The name of the anchor is the argument to the method. This anchor will be used later in the example as the target of a hyperlink.

Line 20 uses String method **fixed** to display text in a fixed-width font by formatting the string in variable fixedText ("This is monospaced text") as

<!tt>This is monospaced text</!tt>

Line 21 uses String method **strike** to display text with a line through it by format- ting the string in variable strikeText ("This is strike out text") as

<!strike>This is strike out text</!strike>

Lines 22–23 use String method **sub** to display subscript text by formatting the string in variable subText ("subscript") as

<!sub>subscript</!sub>

Note that the resulting line in the XHTML document displays the word subscript small- er than the rest of the line and slightly below the line.

Lines 24–25 call String method **sup** to display superscript text by formatting the string in variable supText ("superscript") as

<!sup>superscript</!sup>

Note that the resulting line in the XHTML document displays the word superscript

smaller than the rest of the line and slightly above the line. Line 26 uses String method **link** to create a hyperlink by formatting the string in

variable linkText ("Click here to go to anchorText") as

<!a href = "#top">Click here to go to anchorText</!a>

The target of the hyperlink (#top in this example) is the argument to the method and can be any URL. In this example, the hyperlink target is the anchor created in line 19. If you make your browser window short and scroll to the bottom of the web page, then click this link, the browser will reposition to the top of the web page.

## Date Object

JavaScript’s **Date** object provides methods for date and time manipulations. Date and time processing can be performed based on the computer’s **local time zone** or based on World Time Standard’s **Coordinated Universal Time** (abbreviated **UTC**)—formerly called **Greenwich Mean Time (GMT)**. Most methods of the Date object have a local time zone and a UTC version. The methods of the Date object are summarized in Fig. 11.8.

|                               Method                               |                                                                                                               Description                                                                                                               |
| :----------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                       getDate() getUTCDate()                       |                                                                          Returns a number from 1 to 31 representing the day of the month in local time or UTC.                                                                          |
|                        getDay() getUTCDay()                        |                                                                Returns a number from 0 (Sunday) to 6 (Saturday) represent- ing the day of the week in local time or UTC.                                                                |
|                   getFullYear() getUTCFullYear()                   |                                                                                      Returns the year as a four-digit number in local time or UTC.                                                                                      |
|                      getHours() getUTCHours()                      |                                                                         Returns a number from 0 to 23 representing hours since mid- night in local time or UTC.                                                                         |
|               getMilliseconds() getUTCMilliSeconds()               |                               Returns a number from 0 to 999 representing the number of milliseconds in local time or UTC, respectively. The time is stored in hours, minutes, seconds and milliseconds.                                |
|                    getMinutes() getUTCMinutes()                    |                                                                        Returns a number from 0 to 59 representing the minutes for the time in local time or UTC.                                                                        |
|                      getMonth() getUTCMonth()                      |                                                                    Returns a number from 0 (January) to 11 (December) repre- senting the month in local time or UTC.                                                                    |
|                    getSeconds() getUTCSeconds()                    |                                                                        Returns a number from 0 to 59 representing the seconds for the time in local time or UTC.                                                                        |
|                             getTime()                              |                                                                      Returns the number of milliseconds between January 1, 1970, and the time in the Date object.                                                                       |
|                        getTimezoneOffset()                         |                                                         Returns the difference in minutes between the current time on the local computer and UTC (Coordinated Universal Time).                                                          |
|                setDate( _val_ ) setUTCDate( _val_ )                |                                                                                        Sets the day of the month (1 to 31) in local time or UTC.                                                                                        |
|    setFullYear( _y_, _m_, _d_ ) setUTCFullYear( _y_, _m_, _d_ )    |             Sets the year in local time or UTC. The second and third argu- ments representing the month and the date are optional. If an optional argument is not specified, the current value in the Date object is used.              |
| setHours( _h_, _m_, _s_, _ms_ ) setUTCHours( _h_, _m_, _s_, _ms_ ) | Sets the hour in local time or UTC. The second, third and fourth arguments, representing the minutes, seconds and milli- seconds, are optional. If an optional argument is not specified, the current value in the Date object is used. |
|         setMilliSeconds( _ms_ ) setUTCMilliseconds( _ms_ )         |                                                                                          Sets the number of milliseconds in local time or UTC.                                                                                          |

**Fig. 11.8** | Date object methods. (Part 1 of 2.)

|                            Method                            |                                                                                                                  Description                                                                                                                   |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| setMinutes( _m_, _s_, _ms_ ) setUTCMinutes( _m_, _s_, _ms_ ) |             Sets the minute in local time or UTC. The second and third arguments, representing the seconds and milliseconds, are optional. If an optional argument is not specified, the current value in the Date object is used.             |
|         setMonth( _m_, _d_ ) setUTCMonth( _m_, _d_ )         |                          Sets the month in local time or UTC. The second argument, representing the date, is optional. If the optional argument is not specified, the current date value in the Date object is used.                           |
|      setSeconds( _s_, _ms_ ) setUTCSeconds( _s_, _ms_ )      |                      Sets the second in local time or UTC. The second argument, representing the milliseconds, is optional. If this argument is not specified, the current millisecond value in the Date object is used.                       |
|                       setTime( _ms_ )                        |                                                                         Sets the time based on its argument—the number of elapsed milliseconds since January 1, 1970.                                                                          |
|                       toLocaleString()                       | Returns a string representation of the date and time in a form specific to the computer’s locale. For example, September 13, 2007, at 3:42:22 PM is represented as _09/13/07 15:47:22_ in the United States and _13/09/07 15:47:22_ in Europe. |
|                        toUTCString()                         |                                                                          Returns a string representation of the date and time in the form: _15 Sep 2007 15:47:22 UTC_                                                                          |
|                          toString()                          |                                          Returns a string representation of the date and time in a form specific to the locale of the computer (_Mon Sep 17 15:47:22 EDT 2007_ in the United States).                                          |
|                          valueOf()                           |                                                                             The time in number of milliseconds since midnight, January 1, 1970. (Same as getTime.)                                                                             |

**Fig. 11.8** | Date object methods. (Part 2 of 2.)

The script of Fig. 11.9 demonstrates many of the local time zone methods in Fig. 11.8. Line 12 creates a new Date object. The new operator allocates the memory for the Date object. The empty parentheses indicate a call to the Date object’s **constructor** with no arguments. A constructor is an initializer method for an object. Constructors are called automatically when an object is allocated with new. The Date constructor with no arguments initializes the Date object with the local computer’s current date and time.

**Software Engineering Observation 11.3**

> _When an object is allocated with new, the object’s constructor is called automatically to initialize the object before it is used in the program._ 11.3

Lines 16–19 demonstrate the methods toString, toLocaleString, toUTCString and valueOf. Note that method valueOf returns a large integer value representing the total number of milliseconds between midnight, January 1, 1970, and the date and time stored in Date object current.

Lines 23–32 demonstrate the Date object’s _get_ methods for the local time zone. Note that method getFullYear returns the year as a four-digit number. Note as well that method getTimeZoneOffset returns the difference in minutes between the local time zone and UTC time (i.e., a difference of four hours in our time zone when this example was executed).

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 11.9: DateTime.html -->
<!-- Date and time methods of the Date object. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Date and Time Methods</title>
<script type = "text/javascript">
<!--
var current = new Date();

document.writeln(
"<h1>String representations and valueOf</h1>" );
document.writeln( "toString: " + current.toString()+
"<br />toLocaleString: " + current.toLocaleString()+
"<br />toUTCString: " +current.toUTCString() +
"<br />valueOf: " +current.valueOf() );

document.writeln(
"<h1>Get methods for local time zone</h1>" );
document.writeln( "getDate: " +current.getDate() +
"<br />getDay: " + current.getDay()+
"<br />getMonth: " + current.getMonth()+
"<br />getFullYear: " +current.getFullYear() +
"<br />getTime: " + current.getTime()+
"<br />getHours: " +current.getHours() +
"<br />getMinutes: " +current.getMinutes() +
"<br />getSeconds: " + current.getSeconds()+
"<br />getMilliseconds: " +current.getMilliseconds() +
"<br />getTimezoneOffset: " +current.getTimezoneOffset() ) ;

document.writeln(
"<h1>Specifying arguments for a new Date</h1>" );
var anotherDate = new Date( 2007, 2, 18, 1, 5, 0, 0 );
document.writeln( "Date: " + anotherDate );

document.writeln( "<h1>Set methods for local time zone</h1>" );
anotherDate.setDate( 31 );
anotherDate.setMonth( 11 );
anotherDate.setFullYear( 2007 );
anotherDate.setHours( 23 );
anotherDate.setMinutes( 59 );

document.writeln( "Modified date: " + anotherDate );
```

**Fig. 11.9** | Date and time methods of the Date object. (Part 1 of 2.)

```bash
// -->
</script>
</head><body></body>
</html>
```

**Fig. 11.9** | Date and time methods of the Date object. (Part 2 of 2.)

Line 36 demonstrates creating a new Date object and supplying arguments to the Date constructor for _year_, _month_, _date_, _hours_, _minutes_, _seconds_ and _milliseconds_. Note that the _hours_, _minutes_, _seconds_ and _milliseconds_ arguments are all optional. If any one of these arguments is not specified, a zero is supplied in its place. For the _hours_, _minutes_ and _seconds_ arguments, if the argument to the right of any of these arguments is specified, it too must be specified (e.g., if the _minutes_ argument is specified, the _hours_ argument must be speci- fied; if the _milliseconds_ argument is specified, all the arguments must be specified).

Lines 40–45 demonstrate the Date object _set_ methods for the local time zone. Date objects represent the month internally as an integer from 0 to 11. These values are off by one from what you might expect (i.e., 1 for January, 2 for February, …, and 12 for December). When creating a Date object, you must specify 0 to indicate January, 1 to indicate February, …, and 11 to indicate December.

**Common Programming Error 11.2**

> _Assuming that months are represented as numbers from 1 to 12 leads to off-by-one errors when you are processing Dates._ 11.2

The Date object provides two other methods that can be called without creating a new Date object—**Date.parse** and **Date.UTC**. Method Date.parse receives as its argument a string representing a date and time, and returns the number of milliseconds between mid- night, January 1, 1970, and the specified date and time. This value can be converted to a Date object with the statement

var theDate = new Date( _numberOfMilliseconds_ );

which passes to the Date constructor the number of milliseconds since midnight, January 1, 1970, for the Date object.

Method parse converts the string using the following rules:

• Short dates can be specified in the form MM-DD-YY, MM-DD-YYYY, MM/DD/YY or MM/ DD/YYYY. The month and day are not required to be two digits.

• Long dates that specify the complete month name (e.g., “January”), date and year can specify the month, date and year in any order.

• Text in parentheses within the string is treated as a comment and ignored. Com- mas and white-space characters are treated as delimiters.

• All month and day names must have at least two characters. The names are not required to be unique. If the names are identical, the name is resolved as the last match (e.g., “Ju” represents “July” rather than “June”).

• If the name of the day of the week is supplied, it is ignored.

• All standard time zones (e.g., EST for Eastern Standard Time), Coordinated Universal Time (UTC) and Greenwich Mean Time (GMT) are recognized.

• When specifying hours, minutes and seconds, separate each by colons.

• When using a 24-hour-clock format, “PM” should not be used for times after 12 noon.

Date method UTC returns the number of milliseconds between midnight, January 1, 1970, and the date and time specified as its arguments. The arguments to the UTC method include the required _year_, _month_ and _date_, and the optional _hours_, _minutes_, _seconds_ and _mil- liseconds_. If any of the _hours_, _minutes_, _seconds_ or _milliseconds_ arguments is not specified, a zero is supplied in its place. For the _hours_, _minutes_ and _seconds_ arguments, if the argument to the right of any of these arguments in the argument list is specified, that argument must also be specified (e.g., if the _minutes_ argument is specified, the _hours_ argument must be specified; if the _milliseconds_ argument is specified, all the arguments must be specified). As with the result of Date.parse, the result of Date.UTC can be converted to a Date object by creating a new Date object with the result of Date.UTC as its argument.

## Boolean and Number Objects

JavaScript provides the **Boolean** and **Number** objects as object **wrappers** for boolean true/ false values and numbers, respectively. These wrappers define methods and properties useful in manipulating boolean values and numbers. Wrappers provide added functional- ity for working with simple data types.

When a JavaScript program requires a boolean value, JavaScript automatically creates a Boolean object to store the value. JavaScript programmers can create Boolean objects explicitly with the statement

var b = new Boolean( _booleanValue_ );

The constructor argument _booleanValue_ specifies whether the value of the Boolean object should be true or false. If _booleanValue_ is false, 0, null, Number.NaN or an empty string (""), or if no argument is supplied, the new Boolean object contains false. Otherwise, the new Boolean object contains true. Figure 11.10 summarizes the methods of the Bool- ean object.

JavaScript automatically creates Number objects to store numeric values in a Java- Script program. JavaScript programmers can create a Number object with the statement

var n = new Number( _numericValue_ );

The constructor argument _numericValue_ is the number to store in the object. Although you can explicitly create Number objects, normally the JavaScript interpreter creates them as needed. Figure 11.11 summarizes the methods and properties of the Number object.

|   Method   |                                                 Description                                                  |
| :--------: | :----------------------------------------------------------------------------------------------------------: |
| toString() | Returns the string "true" if the value of the Boolean object is true; otherwise, returns the string "false". |
| valueOf()  |               Returns the value true if the Boolean object is true; otherwise, returns false.                |

**Fig. 11.10** | Boolean object methods.

| Method or property  |                                                                                                                                                                                                                         Description                                                                                                                                                                                                                         |
| :-----------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| toString( _radix_ ) | Returns the string representation of the number. The optional _radix_ argument (a number from 2 to 36) specifies the number’s base. For example, radix 2 results in the binary representation of the number, 8 results in the octal representation, 10 results in the decimal representation and 16 results in the hexadecimal represen- tation. See Appendix E, Number Systems, for a review of the binary, octal, decimal and hexadecimal number systems. |

**Fig. 11.11** | Number object methods and properties. (Part 1 of 2.)

|    Method or property    |                                                                                                                                                                                               Description                                                                                                                                                                                                |
| :----------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|        valueOf()         |                                                                                                                                                                                        Returns the numeric value.                                                                                                                                                                                        |
|     Number.MAX_VALUE     |                                                                                                                                              This property represents the largest value that can be stored in a JavaScript program—approximately 1.79E+308.                                                                                                                                              |
|     Number.MIN_VALUE     |                                                                                                                                             This property represents the smallest value that can be stored in a JavaScript program—approximately 5.00E–324.                                                                                                                                              |
|        Number.NaN        | This property represents _not a number_—a value returned from an arithmetic expression that does not result in a number (e.g., the expression parseInt( "hello" ) cannot convert the string "hello" into a number, so parseInt would return Number.NaN. To deter- mine whether a value is NaN, test the result with function isNaN, which returns true if the value is NaN; otherwise, it returns false. |
| Number.NEGATIVE_INFINITY |                                                                                                                                                                      This property represents a value less than -Number.MAX_VALUE.                                                                                                                                                                       |
| Number.POSITIVE_INFINITY |                                                                                                                                                                     This property represents a value greater than Number.MAX_VALUE.                                                                                                                                                                      |

**Fig. 11.11** | Number object methods and properties. (Part 2 of 2.)

## document Object

The **document** object is used to manipulate the document that is currently visible in the browser window. The document object has many properties and methods, such as methods document.write and document.writeln, which have both been used in prior JavaScript examples. Figure 11.12 shows the methods and properties of the document objects that are used in this chapter. You can learn more about the properties and methods of the document object in our JavaScript Resource Center (www.deitel.com/javascript).

|   Method or property   |                                                                Description                                                                 |
| :--------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
| getElementById( _id_ ) |                            Returns the DOM node representing the XHTML element whose id attribute matches _id_.                            |
|   write( _string_ )    |                                           Writes the string to the XHTML document as XHTML code.                                           |
|  writeln( _string_ )   |                       Writes the string to the XHTML document as XHTML code and adds a newline character at the end.                       |
|         cookie         | A string containing the values of all the cookies stored on the user’s computer for the current document. See Section 11.9, Using Cookies. |
|      lastModified      |                                          The date and time that this document was last modified.                                           |

**Fig. 11.12** | Important document object methods and properties.

## window Object

The **window** object provides methods for manipulating browser windows. The following script shows many of the commonly used properties and methods of the window object and uses them to create a website that spans multiple browser windows. Figure 11.13 allows the user to create a new, fully customized browser window by completing an XHTML form and clicking the **Submit** button. The script also allows the user to add text to the new window and navigate the window to a different URL.

The script starts in line 10. Line 12 declares a variable to refer to the new window. We refer to the new window as the **child window** because it is created and controlled by the main, or **parent**, window in this script. Lines 14–50 define the createChildWindow func- tion, which determines the features that have been selected by the user and creates a child window with those features (but does not add any content to the window). Lines 18–20 declare several variables to store the status of the checkboxes on the page. Lines 23–38 set each variable to "yes" or "no" based on whether the corresponding checkbox is checked or unchecked.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 11.13: window.html -->
<!-- Using the window object to create and modify child windows. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Using the Window Object</title>
<script type = "text/javascript">
<!--
var childWindow; // variable to control the child window

function createChildWindow()
{
// these variables all contain either "yes" or "no"
// to enable or disable a feature in the child window
var toolBar;
var menuBar;
var scrollBars;

// determine whether the Tool Bar checkbox is checked
if ( document.getElementById( "toolBarCheckBox" ).checked )
toolBar = "yes";
else
toolBar = "no";

// determine whether the Menu Bar checkbox is checked
if ( document.getElementById( "menuBarCheckBox" ).checked )
menuBar = "yes";
else
menuBar = "no";
```

**Fig. 11.13** | Using the window object to create and modify child windows. (Part 1 of 4.)

```bash
// determine whether the Scroll Bar checkbox is checked
if ( document.getElementById( "scrollBarsCheckBox" ).checked )
scrollBars = "yes";
else
scrollBars = "no";

//display window with selected features
childWindow = window.open( "", "",
",toolbar = " + toolBar +
",menubar = " + menuBar +
",scrollbars = " + scrollBars );

// disable buttons
document.getElementById( "closeButton" ).disabled = false;
document.getElementById( "modifyButton" ).disabled = false;
document.getElementById( "setURLButton" ).disabled = false;
} // end function createChildWindow

// insert text from the textbox in the child window
function modifyChildWindow()
{
if (childWindow.closed )
alert( "You attempted to interact with a closed window" );
else
childWindow.document.write(
document.getElementById( "textForChild" ).value );
} // end function modifyChildWindow

// close the child window
function closeChildWindow()
{
if (childWindow.closed )
alert( "You attempted to interact with a closed window" );
else
childWindow.close();

document.getElementById( "closeButton" ).disabled = true;
document.getElementById( "modifyButton" ).disabled = true;
document.getElementById( "setURLButton" ).disabled = true;
} // end function closeChildWindow

// set the URL of the child window to the URL
// in the parent window's myChildURL
function setChildWindowURL()
{
if ( childWindow.closed)
alert( "You attempted to interact with a closed window" );
else
childWindow.location =
document.getElementById( "myChildURL" ).value;
} // end function setChildWindowURL
//-->
</script>
```

**Fig. 11.13** | Using the window object to create and modify child windows. (Part 2 of 4.)

```bash
</head>
<body>
<h1>Hello, this is the main window</h1>
<p>Please check the features to enable for the child window<br/>
<input id = "toolBarCheckBox" type = "checkbox" value = ""
checked = "checked" />
<label>Tool Bar</label>
<input id = "menuBarCheckBox" type = "checkbox" value = ""
checked = "checked" />
<label>Menu Bar</label>
<input id = "scrollBarsCheckBox" type = "checkbox" value = ""
checked = "checked" />
<label>Scroll Bars</label></p>

<p>Please enter the text that you would like to display
in the child window<br/>
<input id = "textForChild" type = "text"
value = "<h1>Hello, I am a child window.</h1> " />
<input id = "createButton" type = "button"
value = "Create Child Window" onclick = "createChildWindow()" />
<input id= "modifyButton" type = "button" value = "Modify Child Window"
onclick = "modifyChildWindow()" disabled = "disabled" />
<input id = "closeButton" type = "button" value = "Close Child Window"
onclick = "closeChildWindow()" disabled = "disabled" /></p>

<p>The other window's URL is: <br/>
<input id = "myChildURL" type = "text" value = "./" />
<input id = "setURLButton" type = "button" value = "Set Child URL"
onclick = "setChildWindowURL()" disabled = "disabled" /></p>
</body>
</html>
```

**Fig. 11.13** | Using the window object to create and modify child windows. (Part 3 of 4.)

**Fig. 11.13** | Using the window object to create and modify child windows. (Part 4 of 4.)

The statement in lines 41–44 uses the window object’s open method to create the requested child window. Method open has three parameters. The first parameter is the URL of the page to open in the new window, and the second parameter is the name of the window. If you specify the target attribute of an a (anchor) element to correspond to the name of a window, the href of the link will be opened in the window. In our example, we pass window.open empty strings as the first two parameter values because we want the new window to open a blank page, and we use a different method to manipulate the child window’s URL.

The third parameter of the open method is a string of comma-separated, all-lowercase feature names, each followed by an = sign and either "yes" or "no" to determine whether that feature should be displayed in the new window. If these parameters are omitted, the browser defaults to a new window containing an empty page, no title and all features vis- ible. \[_Note:_ If your menu bar is normally hidden in IE7, it will not appear in the child window. Press the _Alt_ key to display it.\] Lines 47–49 enable the buttons for manipulating the child window—these are initially disabled when the page loads.

Lines 53–60 define the function modifyChildWindow, which adds a line of text to the content of the child window. In line 55, the script determines whether the child window is closed. Function modifyChildWindow uses property childWindow.closed to obtain a boolean value that is true if childWindow is closed and false if the window is still open. If the window is closed, an alert box is displayed notifying the user that the window is cur- rently closed and cannot be modified. If the child window is open, lines 58–59 obtain text from the textForChild input (lines 103–104) in the XHTML form in the parent window and uses the child’s document.write method to write this text to the child window.

Function closeChildWindow (lines 63–73) also determines whether the child window is closed before proceeding. If the child window is closed, the script displays an alert box telling the user that the window is already closed. If the child window is open, line 68 closes it using the childWindow.close method. Lines 70–72 disable the buttons that interact with the child window.

**Look-and-Feel Observation 11.1**

> _Popup windows should be used sparingly. Many users dislike websites that open additional win- dows, or that resize or reposition the browser. Some some users have popup blockers that will pre- vent new windows from opening._ 11.1

**Software Engineering Observation 11.4**

> _window.location is a property that always contains a string representation of the URL displayed in the current window. Typically, web browsers will allow a script to retrieve the window.location property of another window only if the script belongs to the same website as the page in the other window._ 11.4

Function setChildWindowURL (lines 77–84) copies the contents of the myChildURL text field to the location property of the child window. If the child window is open, lines 81–82 set property location of the child window to the string in the myChildURL textbox. This action changes the URL of the child window and is equivalent to typing a new URL into the window’s address bar and clicking **Go** (or pressing _Enter_).

The script ends in line 86. Lines 88–116 contain the body of the XHTML document, comprising a form that contains checkboxes, buttons, textboxes and form field labels. The script uses the form elements defined in the body to obtain input from the user. Lines 106, 108, 110, and 115 specify the onclick attributes of XHTML buttons. Each button is set to call a corresponding JavaScript function when clicked.

Figure 11.14 contains a list of some commonly used methods and properties of the window object.

|        Method or property        |                                                                                     Description                                                                                      |
| :------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| open( _url_, _name_, _options_ ) | Creates a new window with the URL of the window set to _url_, the name set to _name_ to refer to it in the script, and the visible features set by the string passed in as _option._ |
|  prompt( _prompt_, _default_ )   |                           Displays a dialog box asking the user for input. The text of the dialog is _prompt_, and the default value is set to _default._                            |
|             close()              |                                                            Closes the current window and deletes its object from memory.                                                             |
|             focus()              |                              This method gives focus to the window (i.e., puts the window in the foreground, on top of any other open browser windows).                              |
|              blur()              |                                               This method takes focus away from the window (i.e., puts the window in the background).                                                |
|         window.document          |                                         This property contains the document object representing the docu- ment currently inside the window.                                          |
|          window.closed           |                                     This property contains a boolean value that is set to true if the window is closed, and false if it is not.                                      |

**Fig. 11.14** | Important window object methods and properties. (Part 1 of 2.)

| Method or property |                                                   Description                                                   |
| :----------------: | :-------------------------------------------------------------------------------------------------------------: |
|   window.opener    | This property contains the window object of the window that opened the current window, if such a window exists. |

**Fig. 11.14** | Important window object methods and properties. (Part 2 of 2.)

## Using Cookies

Cookies provide web developers with a tool for personalizing web pages. A **cookie** is a piece of data that is stored on the user’s computer to maintain information about the client during and between browser sessions. A website may store a cookie on the client’s com- puter to record user preferences or other information that the website can retrieve during the client’s subsequent visits. For example, a website can retrieve the user’s name from a cookie and use it to display a personalized greeting.

Microsoft Internet Explorer and Mozilla Firefox store cookies as small text files on the client’s hard drive. When a user visits a website, the browser locates any cookies written by scripts on that site and makes them available to any scripts located on the site. Note that cookies may be accessed only by scripts belonging to the same website from which they originated (i.e., a cookie set by a script on amazon.com can be read only by other scripts on amazon.com).

Cookies are accessible in JavaScript through the document object’s **cookie** property. JavaScript treats a cookie as a string of text. Any standard string function or method can manipulate a cookie. A cookie has the syntax “identifier=value,” where _identifier_ is any valid JavaScript variable identifier, and _value_ is the value of the cookie variable. When mul- tiple cookies exist for one website, _identifier-value_ pairs are separated by semicolons in the document.cookie string.

Cookies differ from ordinary strings in that each cookie has an expiration date, after which the web browser deletes it. This date can be defined by setting the **expires** property in the cookie string. If a cookie’s expiration date is not set, then the cookie expires by default after the user closes the browser window. A cookie can be deleted immediately by setting the expires property to a date and time in the past.

The assignment operator does not overwrite the entire list of cookies, but appends a cookie to the end of it. Thus, if we set two cookies

document.cookie = "name1=value1;";
document.cookie = "name2=value2;";

document.cookie will contain "name1=value1; name2=value2". Figure 11.15 uses a cookie to store the user’s name and displays a personalized

greeting. This example improves upon the functionality in the dynamic welcome page example of Fig. 6.17 by requiring the user to enter a name only during the first visit to the web page. On each subsequent visit, the script can display the user name that is stored in the cookie.

Line 10 begins the script. Lines 12–13 declare the variables needed to obtain the time, and line 14 declares the variable that stores the name of the user. Lines 16–27 contain the same if…else statement used in Fig. 6.17 to display a time-sensitive greeting.

Lines 30–66 contain the code used to manipulate the cookie. Line 30 determines whether a cookie exists on the client computer. The expression document.cookie evalu- ates to true if a cookie exists. If a cookie does not exist, then the script prompts the user to enter a name (line 45). The script creates a cookie containing the string "name=", fol- lowed by a copy of the user’s name produced by the built-in JavaScript function **escape**

(line 49). The function escape converts any non-alphanumeric characters, such as spaces

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 11.15: cookie.html -->
<!-- Using cookies to store user identification data. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Using Cookies</title>
<script type = "text/javascript">
<!--
var now = new Date(); // current date and time
var hour = now.getHours(); // current hour (0-23)
var name;

if ( hour < 12 ) // determine whether it is morning
document.write( "<h1>Good Morning, " );
else
{
hour = hour - 12; // convert from 24-hour clock to PM time

// determine whether it is afternoon or evening
if ( hour < 6 )
document.write( "<h1>Good Afternoon, " );
else
document.write( "<h1>Good Evening, " );
} // end else

// determine whether there is a cookie
if ( document.cookie)
{
// convert escape characters in the cookie string to their
// English notation
var myCookie = unescape( document.cookie );

// split the cookie into tokens using = as delimiter
var cookieTokens = myCookie.split( "=" );

// set name to the part of the cookie that follows the = sign
name = cookieTokens[ 1 ];
} // end if
else
{
// if there was no cookie, ask the user to input a name
name = window.prompt( "Please enter your name", "Paul" );
```

**Fig. 11.15** | Using cookies to store user identification data. (Part 1 of 3.)

```bash
// escape special characters in the name string
// and add name to the cookie
document.cookie = "name=" + escape( name );
} // end else

document.writeln(
name + ", welcome to JavaScript programming!</h1>" );
document.writeln( "<a href = 'javascript:wrongPerson()'> " +
"Click here if you are not " + name + "</a>" );

// reset the document's cookie if wrong person
function wrongPerson()
{
// reset the cookie
document.cookie= "name=null;" +
" expires=Thu, 01-Jan-95 00:00:01 GMT";

// reload the page to get a new name after removing the cookie
location.reload();
} // end function wrongPerson

// -->
</script>
</head>
<body>
<p>Click Refresh (or Reload) to run the script again</p>
</body>
</html>
```

**Fig. 11.15** | Using cookies to store user identification data. (Part 2 of 3.)

**Fig. 11.15** | Using cookies to store user identification data. (Part 3 of 3.)

and semicolons, in a string to their equivalent **hexadecimal escape sequences** of the form “%_XX_,” where _XX_ is the two-digit hexadecimal ASCII value of a special character. For example, if name contains the value "David Green", the statement escape( name ) evalu- ates to "David%20Green", because the hexadecimal ASCII value of a blank space is 20. It is a good idea to always escape cookie values before writing them to the client. This con- version prevents any special characters in the cookie from being misinterpreted as having a special meaning in the code, rather than being a character in a cookie value. For instance, a semicolon in a cookie value could be misinterpreted as a semicolon separating two adja- cent _identifier-value_ pairs. Applying the function **unescape** to cookies when they are read out of the document.cookie string converts the hexadecimal escape sequences back to English characters for display in a web page.

**Good Programming Practice 11.2**

> _Always store values in cookies with self-documenting identifiers. Do not forget to include the identifier followed by an = sign before the value being stored._ 11.2

If a cookie exists (i.e., the user has been to the page before), then the script **parses** the user name out of the cookie string and stores it in a local variable. Parsing generally refers to the act of splitting a string into smaller, more useful components. Line 34 uses the Java- Script function unescape to replace all the escape sequences in the cookie with their equiv- alent English-language characters. The script stores the unescaped cookie value in the variable myCookie (line 34) and uses the JavaScript function split (line 37), introduced in Section 11.4.5, to break the cookie into identifier and value tokens. At this point in the script, myCookie contains a string of the form "name=_value_"_._ We call split on myCookie

with = as the delimiter to obtain the cookieTokens array, with the first element equal to the name of the identifier and the second element equal to the value of the identifier. Line 40 assigns the value of the second element in the cookieTokens array (i.e., the actual value stored in the cookie) to the variable name. Lines 52–53 add the personalized greeting to the web page, using the user’s name stored in the cookie.

AFter "refresh" is clicked, the website recalls the previously input data.

The script allows the user to reset the cookie, which is useful in case someone new is using the computer. Lines 54–55 create a hyperlink that, when clicked, calls the JavaScript function wrongPerson (lines 58–66). Lines 61–62 set the cookie name to null and the expires property to January 1, 1995 (though any date in the past will suffice). Internet Explorer detects that the expires property is set to a date in the past and deletes the cookie from the user’s computer. The next time this page loads, no cookie will be found. The **reload** method of the location object forces the page to refresh (line 65), and, unable to find an existing cookie, the script prompts the user to enter a new name.

## Final JavaScript Example

The past few chapters have explored many JavaScript concepts and how they can be ap- plied on the web. The next JavaScript example combines many of these concepts into a single web page. Figure 11.16 uses functions, cookies, arrays, loops, the Date object, the window object and the document object to create a sample welcome screen containing a personalized greeting, a short quiz, a random image and a random quotation. We have seen all of these concepts before, but this example illustrates how they work together on one web page.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 11.16: final.html -->
<!-- Rich welcome page using several JavaScript concepts. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Putting It All Together</title>
<script type = "text/javascript">
<!--
var now = new Date(); // current date and time
var hour = now.getHours(); // current hour

// array with names of the images that will be randomly selected
var pictures =
[ "CPE", "EPT", "GPP", "GUI", "PERF", "PORT", "SEO" ];

// array with the quotes that will be randomly selected
var quotes = [ "Form ever follows function.<br/>" +
" Louis Henri Sullivan", "E pluribus unum." +
" (One composed of many.) <br/> Virgil", "Is it a" +
" world to hide virtues in?<br/> William Shakespeare" ];

// write the current date and time to the web page
document.write( "<p>" + now.toLocaleString()+ "<br/></p>" );

// determine whether it is morning
if ( hour < 12 )
document.write( "<h2>Good Morning, " );
```

**Fig. 11.16** | Rich welcome page using several JavaScript concepts. (Part 1 of 5.)

```bash
else
{
hour = hour - 12; // convert from 24-hour clock to PM time

// determine whether it is afternoon or evening
if ( hour < 6 )
document.write( "<h2>Good Afternoon, " );
else
document.write( "<h2>Good Evening, " );
} // end else

// determine whether there is a cookie
if ( document.cookie )
{
// convert escape characters in the cookie string to their
// English notation
var myCookie = unescape( document.cookie );

// split the cookie into tokens using = as delimiter
var cookieTokens = myCookie.split( "=" );

// set name to the part of the cookie that follows the = sign
name = cookieTokens[ 1 ];
} // end if
else
{
// if there was no cookie, ask the user to input a name
name = window.prompt( "Please enter your name", "Paul" );

// escape special characters in the name string
// and add name to the cookie
document.cookie = "name =" + escape( name );
} // end else

// write the greeting to the page
document.writeln(
name + ", welcome to JavaScript programming!</h2>" );

// write the link for deleting the cookie to the page
document.writeln( "<a href = "javascript:wrongPerson()" > " +
"Click here if you are not " + name + "</a><br/>" );

// write the random image to the page
document.write ( "<img src ="" +
pictures[ Math.floor( Math.random() * 7 ) ] +
".gif" /> <br/>" );

// write the random quote to the page
document.write ( quotes[ Math.floor( Math.random() * 3 ) ] );

// create a window with all the quotes in it
function allQuotes()
{
```

**Fig. 11.16** | Rich welcome page using several JavaScript concepts. (Part 2 of 5.)

```bash
// create the child window for the quotes
var quoteWindow = window.open( "", "", "resizable=yes, " +
"toolbar=no, menubar=no, status=no, location=no," +
" scrollBars=yes" );
quoteWindow.document.write( "<p>" )

// loop through all quotes and write them in the new window
for ( var i = 0; i < quotes.length; i++ )
quoteWindow.document.write( ( i + 1 ) + ".) " +
quotes\[ i \] + "<br/><br/>");

// write a close link to the new window
quoteWindow.document.write( "</p><br/><a href = " +
"\\"javascript:window.close()\\">Close this window</a>" );
} // end function allQuotes

// reset the document's cookie if wrong person
function wrongPerson()
{
// reset the cookie
document.cookie= "name=null;" +
" expires=Thu, 01-Jan-95 00:00:01 GMT";

// reload the page to get a new name after removing the cookie
location.reload();
} // end function wrongPerson

// open a new window with the quiz2.html file in it
function openQuiz()
{
window.open( "quiz2.html", "", "toolbar = no, " +
"menubar = no, scrollBars = no" );
} // end function openQuiz
// -->
</script>
</head>
<body>
<p><a href = "javascript:allQuotes()">View all quotes</a></p>

<p id = "quizSpot">
<a href = "javascript:openQuiz()">Please take our quiz</a></p>

<script type = "text/javascript">
// variable that gets the last modification date and time
var modDate = new Date( document.lastModified );

// write the last modified date and time to the page
document.write ( "This page was last modified " +
modDate.toLocaleString() );
</script>
</body>
</html>
```

**Fig. 11.16** | Rich welcome page using several JavaScript concepts. (Part 3 of 5.)

**Fig. 11.16** | Rich welcome page using several JavaScript concepts. (Part 4 of 5.)

**Fig. 11.16** | Rich welcome page using several JavaScript concepts. (Part 5 of 5.)

The script that builds most of this page starts in line 10. Lines 12–13 declare variables needed for determining the time of day. Lines 16–23 create two arrays from which content is randomly selected. This web page contains both an image (whose filename is randomly selected from the pictures array) and a quote (whose text is randomly selected from the quotes array). Line 26 writes the user’s local date and time to the web page using the Date object’s toLocaleString method. Lines 29–40 display a time-sensitive greeting using the same code as Fig. 6.17. The script either uses an existing cookie to obtain the user’s name (lines 43–54) or prompts the user for a name, which the script then stores in a new cookie (lines 55–63). Lines 66–67 write the greeting to the web page, and lines 70–71 produce the link for resetting the cookie. This is the same code used in Fig. 11.15 to manipulate cookies. Lines 74–79 write the random image and random quote to the web page. The script chooses each by randomly selecting an index into each array. This code is similar to the code used in Fig. 10.7 to display a random image using an array.

Function allQuotes (lines 82–98) uses the window object and a for loop to open a new window containing all the quotes in the quotes array. Lines 85–87 create a new window called quoteWindow. The script does not assign a URL or a name to this window, but it does specify the window features to display. Line 88 opens a new paragraph in quoteWindow. A for loop (lines 91–93) traverses the quotes array and writes each quote to quoteWindow. Lines 96–97 close the paragraph in quoteWindow, insert a new line and add a link at the bottom of the page that allows the user to close the window. Note that all- Quotes generates a web page and opens it in an entirely new window with JavaScript.

Function wrongPerson (lines 101–109) resets the cookie storing the user’s name. This function is identical to function wrongPerson in Fig. 11.15.

Function openQuiz (lines 112–116) opens a new window to display a sample quiz. Using the window.open method, the script creates a new window containing quiz2.html

(lines 114–115). We discuss quiz2.html later in this section.

The primary script ends in line 118, and the body of the XHTML document begins in line 120. Line 121 creates the link that calls function allQuotes when clicked. Lines 123–124 create a paragraph element containing the attribute id = "quizSpot". This para- graph contains a link that calls function openQuiz.

Lines 126–133 contain a second script. This script appears in the XHTML docu- ment’s body because it adds a dynamic footer to the page, which must appear after the static XHTML content contained in the first part of the body. This script creates another instance of the Date object, but the date is set to the last modified date and time of the XHTML document, rather than the current date and time (line 128). The script obtains the last modified date and time using property document.lastModified. Lines 131–132 add this information to the web page. Note that the last modified date and time appear at the bottom of the page, after the rest of the body content. If this script were in the head

element, this information would be displayed before the entire body of the XHTML doc- ument. Lines 133–135 close the script, the body and the XHTML document.

**_The Quiz Page_**
The quiz used in this example is in a separate XHTML document named quiz2.html

(Fig. 11.17). This document is similar to quiz.html in Fig. 10.14. The quiz in this exam- ple differs from the quiz in Fig. 10.14 in that it shows the result in the main window in the example, whereas the earlier quiz example alerts the result. After the **Submit** button in the quiz window is clicked, the main window changes to reflect that the quiz was taken, and the quiz window closes.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 11.17: quiz2.html -->
<!-- Online quiz in a child window. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Online Quiz</title>
<script type = "text/JavaScript">
<!--
function checkAnswers()
{
// determine whether the answer is correct
if ( document.getElementById( "myQuiz" ).elements[1].checked )
window.opener.document.getElementById( "quizSpot" ).
innerHTML = "Congratulations, your answer is correct";
else // if the answer is incorrect
window.opener.document.getElementById( "quizSpot" ).
innerHTML = "Your answer is incorrect. " +
"Please try again <br /> <a href = " +
 \"javascript:openQuiz()\">Please take our quiz</a>";

window.opener.focus();
window.close();
} // end function checkAnswers
```

**Fig. 11.17** | Online quiz in a child window. (Part 1 of 3.)

```bash
//-->
</script>
</head>
<body>
<form id = "myQuiz" action = "javascript:checkAnswers()">
<p>Select the name of the tip that goes with the
image shown:<br />
<img src = "EPT.gif" alt = "mystery tip"/>
<br />

<input type = "radio" name = "radiobutton" value = "CPE" />
<label>Common Programming Error</label>

<input type = "radio" name = "radiobutton" value = "EPT" />
<label>Error-Prevention Tip</label>

<input type = "radio" name = "radiobutton" value = "PERF" />
<label>Performance Tip</label>

<input type = "radio" name = "radiobutton" value = "PORT" />
<label>Portability Tip</label><br />

<input type = "submit" name = "Submit" value = "Submit" />
<input type = "reset" name = "reset" value = "Reset" />
</p>
</form>
</body>
</html>
```

**Fig. 11.17** | Online quiz in a child window. (Part 2 of 3.)

**Fig. 11.17** | Online quiz in a child window. (Part 3 of 3.)

Lines 15–22 of this script check the user’s answer and output the result to the main window. Lines 16–17 use window.opener to write to the main window. The property **window.opener** always contains a reference to the window that opened the current window, if such a window exists. Lines 16–17 write to property window.opener.document.getElementById("quizSpot").innerHTML. Recall that quizSpot is the id of the paragraph in the main window that contains the link to open the quiz. Property **innerHTML** refers to the HTML code inside the quizSpot paragraph (i.e., the code between <p> and </p>). Modifying the innerHTML property dynamically changes the XHTML code in the paragraph. Thus, when lines 16–17 execute, the link in the main window dis- appears, and the string "Congratulations, your answer is correct." appears. Lines 19– 22 modify window.opener.document.getElementById("quizSpot").innerHTML. Lines 19–22 use the same technique to display "Your answer is incorrect. Please try again", followed by a link to try the quiz again.

After checking the quiz answer, the script gives focus to the main window (i.e., puts the main window in the foreground, on top of any other open browser windows), using the method **focus** of the main window’s window object. The property window.opener ref- erences the main window, so window.opener.focus() (line 24) gives the main window focus, allowing the user to see the changes made to the text of the main window’s quizSpot paragraph. Finally, the script closes the quiz window, using method window.close (line 25).

Lines 28–29 close the script and head elements of the XHTML document. Line 30 opens the body of the XHTML document. The body contains the form, image, text labels and radio buttons that comprise the quiz. Lines 52–54 close the form, the body and the XHTML document.

## Using JSON to Represent Objects

In 1999, **JSON (JavaScript Object Notation)**—a simple way to represent JavaScript ob- jects as strings—was introduced as an alternative to XML as a data-exchange technique. JSON has gained acclaim due to its simple format, making objects easy to read, create and parse. Each JSON object is represented as a list of property names and values contained in curly braces, in the following format:

{ _propertyName1_ : _value1_, _propertyName2_ : _value2_ }

Arrays are represented in JSON with square brackets in the following format:

[ _value1_, _value2_, _value3_ ]

Each value can be a string, a number, a JSON object, true, false or null. To appreciate the simplicity of JSON data, examine this representation of an array of address-book en- tries from Chapter 15:

[ { first: 'Cheryl', last: 'Black' },
{ first: 'James', last: 'Blue' },
{ first: 'Mike', last: 'Brown' },
{ first: 'Meg', last: 'Gold' } ]

JSON provides a straightforward way to manipulate objects in JavaScript, and many other programming languages now support this format. In addition to simplifying object creation, JSON allows programs to extract data easily and to efficiently transmit data across the Internet. JSON integrates especially well with Ajax applications, discussed in Chapter 15. See Section 15.7 for a more detailed discussion of JSON, as well as an Ajax- specific example. For more information on JSON, visit our JSON Resource Center at www.deitel.com/json.

## Wrap-Up

This chapter provided an introduction to Object Technology, many of JavaScript’s built- in objects, and a brief introduction to JSON, a simple way to represent new JavaScript ob- jects. We introduced vocabulary and concepts integral to object-oriented and object-based programming. We took a closer look at some methods and properties of the Math, Date, Boolean, Number, String, document, and window objects. In the next chapter, we intro- duce the Document Object Model, a set of JavaScript objects that represent the elements in a web page that allows you to dynamically modify the page’s content.

## Web Resources

www.deitel.com/javascript/

The Deitel JavaScript Resource Center contains links to some of the best JavaScript resources on the web. There you’ll find categorized links to JavaScript tools, code generators, forums, books, libraries, frameworks and more. Also check out the tutorials for all skill levels, from introductory to advanced. Be sure to visit the related Resource Centers on XHTML (www.deitel.com/xhtml/) and CSS 2.1 (www.deitel.com/css21/).

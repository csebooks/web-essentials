---
title: "JavaScript: Objects"
weight: 8
---

**O B J E C T I V E S** In this chapter you will learn:

■ Object-based programming terminology and concepts.

■ The concepts of encapsulation and data hiding.

■ The value of object orientation.

■ To use the JavaScript objects Math, String, Date, Boolean and Number.

■ To use the browser’s document and window objects.

■ To use cookies.

■ To represent objects simply using JSON.

**_My object all sublime I shall achieve in time._ —W. S. Gilbert**

**_Is it a world to hide virtues in?_ —William Shakespeare**

**_Good as it is to inherit a library, it is better to collect one._ —Augustine Birrell**

**_A philosopher of imposing stature doesn’t think in a vacuum. Even his most abstract ideas are, to some extent, conditioned by what is or is not known in the time when he lives._ —Alfred North Whitehead**

**404** Chapter 11 JavaScript: Objects **O**

**u tl**

**in e**

**11.1 Introduction** Most of the JavaScript programs we’ve demonstrated illustrate basic programming con- cepts. These programs provide you with the foundation you need to build powerful and complex scripts as part of your web pages. As you proceed beyond this chapter, you will use JavaScript to manipulate every element of an XHTML document from a script.

This chapter presents a more formal treatment of **objects**. We begin by giving a brief introduction to the concepts behind object-orientation. The remainder of the chapter overviews—and serves as a reference for—several of JavaScript’s built-in objects and dem- onstrates many of their capabilities. We also provide a brief introduction to JSON, a means for creating JavaScript objects. In the chapters on the Document Object Model and Events that follow this chapter, you will be introduced to many objects provided by the browser that enable scripts to interact with the elements of an XHTML document.

**11.2 Introduction to Object Technology** This section provides a general introduction to object orientation. The terminology and technologies discussed here support various chapters that come later in the book. Here, you’ll learn that objects are a natural way of thinking about the world and about scripts that manipulate XHTML documents. In Chapters 6–10, we used built-in JavaScript ob- jects—Math and Array—and objects provided by the web browser—document and win-

**11.1** Introduction **11.2** Introduction to Object Technology **11.3** Math Object **11.4** String Object

**11.4.1** Fundamentals of Characters and Strings **11.4.2** Methods of the String Object **11.4.3** Character-Processing Methods **11.4.4** Searching Methods **11.4.5** Splitting Strings and Obtaining Substrings **11.4.6** XHTML Markup Methods

**11.5** Date Object **11.6** Boolean and Number Objects **11.7** document Object **11.8** window Object **11.9** Using Cookies

**11.10** Final JavaScript Example **11.11** Using JSON to Represent Objects **11.12** Wrap-Up **11.13** Web Resources

Summary | Terminology | Self-Review Exercise | Answers to Self-Review Exercise | Exercises Special Section: Challenging String Manipulation Exercises

11.2 Introduction to Object Technology **405**

dow—to perform tasks in our scripts. JavaScript uses objects to perform many tasks and therefore is referred to as an **object-based programming language**. As we have seen, Java- Script also uses constructs from the “conventional” structured programming methodology supported by many other programming languages. The first five JavaScript chapters con- centrated on these conventional parts of JavaScript because they are important compo- nents of all JavaScript programs. Our goal here is to help you develop an object-oriented way of thinking. Many concepts in this book, including CSS, JavaScript, Ajax, Ruby on Rails, ASP.NET, and JavaServer Faces are based on at least some of the concepts intro- duced in this section.

**_Basic Object-Technology Concepts_** We begin our introduction to object technology with some key terminology. Everywhere you look in the real world you see objects—people, animals, plants, cars, planes, buildings, computers, monitors and so on. Humans think in terms of objects. Telephones, houses, traffic lights, microwave ovens and water coolers are just a few more objects we see around us every day.

We sometimes divide objects into two categories: animate and inanimate. Animate objects are “alive” in some sense—they move around and do things. Inanimate objects do not move on their own. Objects of both types, however, have some things in common. They all have **attributes** (e.g., size, shape, color and weight), and they all exhibit **behaviors** (e.g., a ball rolls, bounces, inflates and deflates; a baby cries, sleeps, crawls, walks and blinks; a car accelerates, brakes and turns; a towel absorbs water). We’ll study the kinds of attributes and behaviors that software objects have.

Humans learn about existing objects by studying their attributes and observing their behaviors. Different objects can have similar attributes and can exhibit similar behaviors. Comparisons can be made, for example, between babies and adults, and between humans and chimpanzees.

**Object-oriented design (OOD)** models software in terms similar to those that people use to describe real-world objects. It takes advantage of class relationships, where objects of a certain class, such as a class of vehicles, have the same characteristics—cars, trucks, little red wagons and roller skates have much in common. OOD takes advantage of **inher- itance** relationships, where new classes of objects are derived by absorbing characteristics of existing classes and adding unique characteristics of their own. An object of class “con- vertible” certainly has the characteristics of the more general class “automobile,” but more specifically, the roof goes up and down.

Object-oriented design provides a natural and intuitive way to view the software design process—namely, modeling objects by their attributes, behaviors and interrelation- ships just as we describe real-world objects. OOD also models communication between objects. Just as people send messages to one another (e.g., a sergeant commands a soldier to stand at attention), objects also communicate via messages. A bank account object may receive a message to decrease its balance by a certain amount because the customer has withdrawn that amount of money.

OOD **encapsulates** (i.e., wraps) attributes and **operations** (behaviors) into objects— an object’s attributes and operations are intimately tied together. Objects have the prop- erty of **information hiding**. This means that objects may know how to communicate with one another across well-defined **interfaces**_,_ but normally they are not allowed to know how

**406** Chapter 11 JavaScript: Objects

other objects are implemented—implementation details are hidden within the objects themselves. We can drive a car effectively, for instance, without knowing the details of how engines, transmissions, brakes and exhaust systems work internally—as long as we know how to use the accelerator pedal, the brake pedal, the steering wheel and so on. Informa- tion hiding, as we’ll see, is crucial to good software engineering.

Like the designers of an automobile, the designers of web browsers have defined a set of objects that encapsulate an XHTML document’s elements and expose to a JavaScript programmer the attributes and behaviors that enable a JavaScript program to interact with (or script) those elements (objects). You’ll soon see that the browser’s document object contains attributes and behaviors that provide access to every element of an XHTML doc- ument. Similarly, JavaScript provides objects that encapsulate various capabilities in a script. For example, the JavaScript Array object provides attributes and behaviors that enable a script to manipulate a collection of data. The Array object’s length property (attribute) contains the number of elements in the Array. The Array object’s sort method (behavior) orders the elements of the Array.

Some programming languages—like Java, Visual Basic, C# and C++—are **object ori- ented**. Programming in such a language is called **object-oriented programming (OOP),** and it allows computer programmers to implement object-oriented designs as working software systems. Languages like C, on the other hand, are **procedural**_,_ so programming tends to be **action oriented**_._ In procedural languages, the unit of programming is the **func- tion*.*** In object-oriented languages, the unit of programming is the **class** from which objects are eventually **instantiated** (an OOP term for “created”). Classes contain functions that implement operations and data that comprises attributes.

Procedural programmers concentrate on writing functions. Programmers group actions that perform some common task into functions, and group functions to form pro- grams. Data is certainly important in procedural languages, but the view is that data exists primarily in support of the actions that functions perform. The **verbs** in a system specifi- cation help a procedural programmer determine the set of functions that work together to implement the system.

**_Classes, Properties and Methods_** Object-oriented programmers concentrate on creating their own **user-defined types** called **classes**. Each class contains data as well as the set of functions that manipulate that data and provide services to **clients** (i.e., other classes or functions that use the class). The data components of a class are called properties. For example, a bank account class might in- clude an account number and a balance. The function components of a class are called methods. For example, a bank account class might include methods to make a deposit (in- creasing the balance), make a withdrawal (decreasing the balance) and inquire what the current balance is. You use built-in types (and other user-defined types) as the “building blocks” for constructing new user-defined types (classes). The **nouns** in a system specifi- cation help you determine the set of classes from which objects are created that work to- gether to implement the system.

Classes are to objects as blueprints are to houses—a class is a “plan” for building an object of the class. Just as we can build many houses from one blueprint, we can instantiate (create) many objects from one class. You cannot cook meals in the kitchen of a blueprint; you can cook meals in the kitchen of a house. You cannot sleep in the bedroom of a blue- print; you can sleep in the bedroom of a house.

11.3 Math Object **407**

Classes can have relationships with other classes. For example, in an object-oriented design of a bank, the “bank teller” class needs to relate to other classes, such as the “cus- tomer” class, the “cash drawer” class, the “safe” class, and so on. These relationships are called **associations**.

Packaging software as classes makes it possible for future software systems to **reuse** the classes. Groups of related classes are often packaged as reusable **components**. Just as real- tors often say that the three most important factors affecting the price of real estate are “location, location and location,” some people in the software development community say that the three most important factors affecting the future of software development are “reuse, reuse and reuse.

Indeed, with object technology, you can build much of the new software you’ll need by combining existing classes, just as automobile manufacturers combine interchangeable parts. Each new class you create will have the potential to become a valuable software asset that you and other programmers can reuse to speed and enhance the quality of future soft- ware development efforts. Now that we’ve introduced the terminology associated with object-orientation, you’ll see it used in the upcoming discussions of some of JavaScript’s objects.

**11.3 Math Object** The Math object’s methods allow you to perform many common mathematical calcula- tions. As shown previously, an object’s methods are called by writing the name of the ob- ject followed by a dot (.) and the name of the method. In parentheses following the method name is the argument (or a comma-separated list of arguments) to the method. For example, to calculate and display the square root of 900.0 you might write

document.writeln( Math.sqrt( 900.0 ) );

which calls method Math.sqrt to calculate the square root of the number contained in the parentheses (900.0), then outputs the result. The number 900.0 is the argument of the Math.sqrt method. The preceding statement would display 30.0. Some **Math** object methods are summarized in Fig. 11.1.

Method Description Examples

abs( x ) absolute value of x abs( 7.2 ) is 7.2 abs( 0.0 ) is 0.0 abs( -5.6 ) is 5.6

ceil( x ) rounds x to the smallest integer not less than x

ceil( 9.2 ) is 10.0 ceil( -9.8 ) is -9.0

cos( x ) trigonometric cosine of x (x in radians)

cos( 0.0 ) is 1.0

exp( x ) exponential method \_e_x exp( 1.0 ) is 2.71828 exp( 2.0 ) is 7.38906

**Fig. 11.1** | Math object methods. (Part 1 of 2.)

**408** Chapter 11 JavaScript: Objects

**Common Programming Error 11.1** _Forgetting to invoke a Math method by preceding the method name with the object name Math and a dot (.) is an error._ 11.1

**Software Engineering Observation 11.1** _The primary difference between invoking a standalone function and invoking a method of an object is that an object name and a dot are not required to call a standalone function._ 11.1

The Math object defines several commonly used mathematical constants, summarized in Fig. 11.2. \[_Note:_ By convention, the names of constants are written in all uppercase let- ters so they stand out in a program.\]

floor( x ) rounds x to the largest integer not greater than x

floor( 9.2 ) is 9.0 floor( -9.8 ) is -10.0

log( x ) natural logarithm of x (base _e_)

log( 2.718282 ) is 1.0 log( 7.389056 ) is 2.0

max( x, y ) larger value of x and y max( 2.3, 12.7 ) is 12.7 max( -2.3, -12.7 ) is -2.3

min( x, y ) smaller value of x and y min( 2.3, 12.7 ) is 2.3 min( -2.3, -12.7 ) is -12.7

pow( x, y ) x raised to power y (xy) pow( 2.0, 7.0 ) is 128.0 pow( 9.0, .5 ) is 3.0

round( x ) rounds x to the closest integer

round( 9.75 ) is 10 round( 9.25 ) is 9

sin( x ) trigonometric sine of x (x in radians)

sin( 0.0 ) is 0.0

sqrt( x ) square root of x sqrt( 900.0 ) is 30.0 sqrt( 9.0 ) is 3.0

tan( x ) trigonometric tangent of x (x in radians)

tan( 0.0 ) is 0.0

Method Description Examples

**Fig. 11.1** | Math object methods. (Part 2 of 2.)

Constant Description Value

Math.E Base of a natural logarithm (_e_). Approximately 2.718

Math.LN2 Natural logarithm of 2 Approximately 0.693

Math.LN10 Natural logarithm of 10 Approximately 2.302

**Fig. 11.2** | Properties of the Math object. (Part 1 of 2.)

11.4 String Object **409**

**Good Programming Practice 11.1** _Use the mathematical constants of the Math object rather than explicitly typing the numeric value of the constant._ 11.1

**11.4 String Object** In this section, we introduce JavaScript’s string- and character-processing capabilities. The techniques discussed here are appropriate for processing names, addresses, telephone num- bers, and similar items.

**11.4.1 Fundamentals of Characters and Strings** Characters are the fundamental building blocks of JavaScript programs. Every program is composed of a sequence of characters grouped together meaningfully that is interpreted by the computer as a series of instructions used to accomplish a task.

A string is a series of characters treated as a single unit. A string may include letters, digits and various **special characters**_,_ such as +, -, \*, /, and $. JavaScript supports the set of characters called **Unicode**_®_, which represents a large portion of the world’s languages. (We discuss Unicode in detail in Appendix F.) A string is an object of type **String**. **String literals** or **string constants** (often called **anonymous String objects**) are written as a sequence of characters in double quotation marks or single quotation marks, as follows:

"John Q. Doe" (a name) '9999 Main Street' (a street address) "Waltham, Massachusetts" (a city and state) '(201) 555-1212' (a telephone number)

A String may be assigned to a variable in a declaration. The declaration

var color = "blue";

initializes variable color with the String object containing the string "blue". Strings can be compared via the relational (<, <=, > and >=) and equality operators (== and !=). Strings are compared using the Unicode values of the corresponding characters. For example, the expression "hello" < "Hello" evaluates to false because lowercase letters have higher Uni- code values.

Math.LOG2E Base 2 logarithm of _e_ Approximately 1.442

Math.LOG10E Base 10 logarithm of _e_ Approximately 0.434

Math.PI π—the ratio of a circle’s circumference to its diameter

Approximately 3.141592653589793

Math.SQRT1_2 Square root of 0.5 Approximately 0.707

Math.SQRT2 Square root of 2.0 Approximately 1.414

Constant Description Value

**Fig. 11.2** | Properties of the Math object. (Part 2 of 2.)

**410** Chapter 11 JavaScript: Objects

**11.4.2 Methods of the String Object** The String object encapsulates the attributes and behaviors of a string of characters. It provides many methods (behaviors) that accomplish useful tasks such as selecting charac- ters from a string, combining strings (called **concatenation**), obtaining substrings of a string, searching for substrings within a string, tokenizing strings (i.e., splitting strings into individual words) and converting strings to all uppercase or lowercase letters. The String object also provides several methods that generate XHTML tags. Figure 11.3 summarizes many String methods. Figures 11.4–11.7 demonstrate some of these methods.

Method Description

charAt( _index_ ) Returns a string containing the character at the specified _index_. If there is no character at the _index_, charAt returns an empty string. The first character is located at _index_ 0.

charCodeAt( _index_ ) Returns the Unicode value of the character at the specified _index_, or NaN (not a number) if there is no character at that _index_.

concat( _string_ ) Concatenates its argument to the end of the string that invokes the method. The string invoking this method is not modified; instead a new String is returned. This method is the same as adding two strings with the string-concatenation operator + (e.g., s1.con- cat(s2) is the same as s1 + s2).

fromCharCode(

_value1_, _value2_, _…_)

Converts a list of Unicode values into a string containing the cor- responding characters.

indexOf(

_substring_, _index_ )

Searches for the first occurrence of _substring_ starting from position _index_ in the string that invokes the method. The method returns the starting index of _substring_ in the source string or –1 if _substring_ is not found. If the _index_ argument is not provided, the method begins searching from index 0 in the source string.

lastIndexOf(

_substring_, _index_ )

Searches for the last occurrence of _substring_ starting from position _index_ and searching toward the beginning of the string that invokes the method. The method returns the starting index of _sub- string_ in the source string or –1 if _substring_ is not found. If the _index_ argument is not provided, the method begins searching from the end of the source string.

replace( _searchString_, _replaceString_ )

Searches for the substring _searchString_, and replaces the first occur- rence with _replaceString_ and returns the modified string, or the original string if no replacement was made.

slice( _start_, _end_ ) Returns a string containing the portion of the string from index _start_ through index _end_. If the _end_ index is not specified, the method returns a string from the _start_ index to the end of the source string. A negative _end_ index specifies an offset from the end of the string, starting from a position one past the end of the last character (so –1 indicates the last character position in the string).

**Fig. 11.3** | Some String object methods. (Part 1 of 2.)

11.4 String Object **411**

**11.4.3 Character-Processing Methods** The script in Fig. 11.4 demonstrates some of the String object’s character-processing methods, including **charAt** (returns the character at a specific position), **charCodeAt** (re- turns the Unicode value of the character at a specific position), **fromCharCode** (returns a string created from a series of Unicode values), **toLowerCase** (returns the lowercase version of a string) and **toUpperCase** (returns the uppercase version of a string).

split( _string_ ) Splits the source string into an array of strings (tokens), where its _string_ argument specifies the delimiter (i.e., the characters that indicate the end of each token in the source string).

substr(

_start_, _length_ )

Returns a string containing _length_ characters starting from index _start_ in the source string. If _length_ is not specified, a string contain- ing characters from _start_ to the end of the source string is returned.

substring(

_start_, _end_ )

Returns a string containing the characters from index _start_ up to but not including index _end_ in the source string.

toLowerCase() Returns a string in which all uppercase letters are converted to low- ercase letters. Nonletter characters are not changed.

toUpperCase() Returns a string in which all lowercase letters are converted to uppercase letters. Nonletter characters are not changed.

_Methods that generate XHTML tags_

anchor( _name_ ) Wraps the source string in an anchor element (<a></a>) with _name_ as the anchor name.

fixed() Wraps the source string in a <tt></tt> element (same as <pre></ pre>).

link( _url_ ) Wraps the source string in an anchor element (<a></a>) with _url_ as the hyperlink location.

strike() Wraps the source string in a <strike></strike> element.

sub() Wraps the source string in a <sub></sub> element.

sup() Wraps the source string in a <sup></sup> element.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 11.4: CharacterProcessing.html --> **6** <!-- String methods charAt, charCodeAt, fromCharCode, toLowercase and **7** toUpperCase. -->

**Fig. 11.4** | String methods charAt, charCodeAt, fromCharCode, toLowercase and toUpperCase. (Part 1 of 2.)

Method Description

**Fig. 11.3** | Some String object methods. (Part 2 of 2.)

**412** Chapter 11 JavaScript: Objects

Lines 16–17 display the first character in String s ("ZEBRA") using String method charAt. Method **charAt** returns a string containing the character at the specified index (0 in this example). Indices for the characters in a string start at 0 (the first character) and go up to (but do not include) the string’s length (i.e., if the string contains five characters, the indices are 0 through 4). If the index is outside the bounds of the string, the method returns an empty string.

Lines 18–19 display the character code for the first character in String s ("ZEBRA") by calling String method charCodeAt. Method charCodeAt returns the Unicode value of

**8** <html xmlns = "http://www.w3.org/1999/xhtml"> **9** <head>

**10** <title>Character Processing Methods</title> **11** <script type = "text/javascript"> **12** <!-- **13** var s = "ZEBRA"; **14** var s2 = "AbCdEfG"; **15 16** document.writeln( "<p>Character at index 0 in '" + **17** s + "' is " + ); **18** document.writeln( "<br />Character code at index 0 in '" **19** \+ s + "' is " + + "</p>" ); **20 21** document.writeln( "<p>'" + **22** \+ **23** "' contains character codes 87, 79, 82 and 68</p>" ) **24 25** document.writeln( "<p>'" + s2 + "' in lowercase is '" + **26** \+ "'" ); **27** document.writeln( "<br />'" + s2 + "' in uppercase is '" **28** \+ + "'</p>" ); **29** // --> **30** </script> **31** </head><body></body> **32** </html>

**Fig. 11.4** | String methods charAt, charCodeAt, fromCharCode, toLowercase and toUpperCase. (Part 2 of 2.)

s.charAt( 0 )

s.charCodeAt( 0 )

String.fromCharCode( 87, 79, 82, 68 )

s2.toLowerCase()

s2.toUpperCase()

11.4 String Object **413**

the character at the specified index (0 in this example). If the index is outside the bounds of the string, the method returns NaN.

String method fromCharCode receives as its argument a comma-separated list of Unicode values and builds a string containing the character representation of those Uni- code values. Lines 21–23 display the string "WORD", which consists of the character codes 87, 79, 82 and 68. Note that the String object calls method fromCharCode, rather than a specific String variable. Appendix D, ASCII Character Set, contains the character codes for the ASCII character set—a subset of the Unicode character set (Appendix F) that con- tains only Western characters.

The statements in lines 25–26 and 27–28 use String methods **toLowerCase** and **toUpperCase** to display versions of String s2 ("AbCdEfG") in all lowercase letters and all uppercase letters, respectively.

**11.4.4 Searching Methods** Being able to search for a character or a sequence of characters in a string is often useful. For example, if you are creating your own word processor, you may want to provide a ca- pability for searching through the document. The script in Fig. 11.5 demonstrates the String object methods **indexOf** and **lastIndexOf** that search for a specified substring in a string. All the searches in this example are performed on the global string letters (ini- tialized in line 14 with "abcdefghijklmnopqrstuvwxyzabcdefghijklm" in the script).

The user types a substring in the XHTML form searchForm’s inputVal text field and presses the **Search** button to search for the substring in letters. Clicking the **Search** button calls function buttonPressed (defined in lines 16–29) to respond to the onclick

event and perform the searches. The results of each search are displayed in the appropriate text field of searchForm.

Lines 21–22 use String method indexOf to determine the location of the first occur- rence in string letters of the string inputVal.value (i.e., the string the user typed in the

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 11.5: SearchingStrings.html --> **6** <!-- String searching with indexOf and lastIndexOf. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>

**10** Searching Strings with indexOf and lastIndexOf **11** </title> **12** <script type = "text/javascript"> **13** <!-- **14** var letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklm"; **15 16** function buttonPressed() **17** { **18** var searchForm = document.getElementById( "searchForm" ); **19** var inputVal = document.getElementById( "inputVal" );

**Fig. 11.5** | String searching with indexOf and lastIndexOf. (Part 1 of 3.)

**414** Chapter 11 JavaScript: Objects

**20 21** searchForm.elements\[2\].value = **22** l **23** searchForm.elements\[3\].value = **24 25** searchForm.elements\[4\].value = **26 27** searchForm.elements\[5\].value = **28 29** } // end function buttonPressed **30** // --> **31** </script> **32** </head> **33** <body> **34** <form id = "searchForm" action = ""> **35** <h1>The string to search is:<br /> **36** abcdefghijklmnopqrstuvwxyzabcdefghijklm</h1> **37** <p>Enter substring to search for **38** <input id = "inputVal" type = "text" /> **39** <input id = "search" type = "button" value = "Search" **40** /><br /></p> **41 42** <p>First occurrence located at index **43** <input id = "first" type = "text" size = "5" /> **44** <br />Last occurrence located at index **45** <input id = "last" type = "text" size = "5" /> **46** <br />First occurrence from index 12 located at index **47** <input id = "first12" type = "text" size = "5" /> **48** <br />Last occurrence from index 12 located at index **49** <input id = "last12" type = "text" size = "5" /></p> **50** </form> **51** </body> **52** </html>

**Fig. 11.5** | String searching with indexOf and lastIndexOf. (Part 2 of 3.)

etters.indexOf( inputVal.value );

letters.lastIndexOf( inputVal.value );

letters.indexOf( inputVal.value, 12 );

letters.lastIndexOf( inputVal.value, 12 );

onclick = "buttonPressed()"

11.4 String Object **415**

inputVal text field). If the substring is found, the index at which the first occurrence of the substring begins is returned; otherwise, –1 is returned.

Lines 23–24 use String method lastIndexOf to determine the location of the last occurrence in letters of the string in inputVal. If the substring is found, the index at which the last occurrence of the substring begins is returned; otherwise, –1 is returned.

Lines 25–26 use String method indexOf to determine the location of the first occur- rence in string letters of the string in the inputVal text field, starting from index 12 in letters. If the substring is found, the index at which the first occurrence of the substring (starting from index 12) begins is returned; otherwise, –1 is returned.

Lines 27–28 use String method lastIndexOf to determine the location of the last occurrence in letters of the string in the inputVal text field, starting from index 12 in letters and moving toward the beginning of the input. If the substring is found, the index at which the first occurrence of the substring (if one appears before index 12) begins is returned; otherwise, –1 is returned.

**Software Engineering Observation 11.2** _String methods indexOf and lastIndexOf, with their optional second argument (the starting index from which to search), are particularly useful for continuing a search through a large amount of text._ 11.2

**11.4.5 Splitting Strings and Obtaining Substrings** When you read a sentence, your mind breaks it into individual words, or **tokens**, each of which conveys meaning to you. The process of breaking a string into tokens is called **to- kenization**. Interpreters also perform tokenization. They break up statements into such in- dividual pieces as keywords, identifiers, operators and other elements of a programming language. Figure 11.6 demonstrates String method **split**, which breaks a string into its component tokens. Tokens are separated from one another by **delimiters**, typically white-

**Fig. 11.5** | String searching with indexOf and lastIndexOf. (Part 3 of 3.)

**416** Chapter 11 JavaScript: Objects

space characters such as blanks, tabs, newlines and carriage returns. Other characters may also be used as delimiters to separate tokens. The XHTML document displays a form con- taining a text field where the user types a sentence to tokenize. The results of the tokeni- zation process are displayed in an XHTML textarea GUI component. The script also demonstrates String method **substring**, which returns a portion of a string.

The user types a sentence into the text field with id inputVal text field and presses the **Split** button to tokenize the string. Function splitButtonPressed (lines 12–21) han- dles the button’s onclick event.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 11.6: SplitAndSubString.html --> **6** <!-- String object methods split and substring. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>String Methods split and substring</title>

**10** <script type = "text/javascript"> **11** <!-- **12** function splitButtonPressed() **13** { **14** var inputString = document.getElementById( "inputVal" ).value; **15** var tokens = **16** document.getElementById( "output" ).value = **17** ; **18 19** document.getElementById( "outputSubstring" ).value = **20 21** } // end function splitButtonPressed **22** // --> **23** </script> **24** </head> **25** <body> **26** <form action = ""> **27** <p>Enter a sentence to split into words<br /> **28** <input id = "inputVal" type = "text" size = "40" /> **29** <input type = "button" value = "Split" **30** onclick = "splitButtonPressed()" /></p> **31 32** <p>The sentence split into words is<br /> **33** <textarea id = "output" rows = "8" cols = "34"> **34** </textarea></p> **35 36** <p>The first 10 characters of the input string are **37** <input id = "outputSubstring" type = "text" **38** size = "15" /></p> **39** </form> **40** </body> **41** </html>

**Fig. 11.6** | String object methods split and substring. (Part 1 of 2.)

inputString.split( " " );

tokens.join( "\\n" )

inputString.substring( 0, 10 );

11.4 String Object **417**

Line 14 gets the value of the input field and stores it in variable inputString. Line 15 calls String method split to tokenize inputString. The argument to method split is the **delimiter string**—the string that determines the end of each token in the original string. In this example, the space character delimits the tokens. The delimiter string can contain multiple characters that should be used as delimiters. Method split returns an array of strings containing the tokens. Line 17 uses Array method join to combine the tokens in array tokens and separate each token with a newline character (\\n). The resulting string is assigned to the value property of the XHTML form’s output GUI com- ponent (an XHTML textarea).

Lines 19–20 use String method substring to obtain a string containing the first 10 characters of the string the user entered (still stored in inputString). The method returns the substring from the **starting index** (0 in this example) up to but not including the **ending index** (10 in this example). If the ending index is greater than the length of the string, the substring returned includes the characters from the starting index to the end of the original string.

**11.4.6 XHTML Markup Methods** The script in Fig. 11.7 demonstrates the String object’s methods that generate XHTML markup tags. When a String object invokes a markup method, the method wraps the String’s contents in the appropriate XHTML tag. These methods are particularly useful for generating XHTML dynamically during script processing.

Lines 12–17 define the strings that call each of the XHTML markup methods of the String object. Line 19 uses String method **anchor** to format the string in variable anchorText ("This is an anchor") as

<a name = "top">This is an anchor</a>

**Fig. 11.6** | String object methods split and substring. (Part 2 of 2.)

**418** Chapter 11 JavaScript: Objects

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 11.7: MarkupMethods.html --> **6** <!-- String object XHTML markup methods. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>XHTML Markup Methods of the String Object</title>

**10** <script type = "text/javascript"> **11** <!-- **12** var anchorText = "This is an anchor"; **13** var fixedText = "This is monospaced text"; **14** var linkText = "Click here to go to anchorText"; **15** var strikeText = "This is strike out text"; **16** var subText = "subscript"; **17** var supText = "superscript"; **18 19** document.writeln( ); **20** document.writeln( "<br />" + ); **21** document.writeln( "<br />" + ); **22** document.writeln( **23** "<br />This is text with a " + ); **24** document.writeln( **25** "<br />This is text with a " + ); **26** document.writeln( "<br />" + ); **27** // --> **28** </script> **29** </head><body></body> **30** </html>

**Fig. 11.7** | String object XHTML markup methods. (Part 1 of 2.)

anchorText.anchor( "top" ) fixedText.fixed() strikeText.strike()

subText.sub()

supText.sup() linkText.link( "#top" )

11.5 Date Object **419**

The name of the anchor is the argument to the method. This anchor will be used later in the example as the target of a hyperlink.

Line 20 uses String method **fixed** to display text in a fixed-width font by formatting the string in variable fixedText ("This is monospaced text") as

<tt>This is monospaced text</tt>

Line 21 uses String method **strike** to display text with a line through it by format- ting the string in variable strikeText ("This is strike out text") as

<strike>This is strike out text</strike>

Lines 22–23 use String method **sub** to display subscript text by formatting the string in variable subText ("subscript") as

<sub>subscript</sub>

Note that the resulting line in the XHTML document displays the word subscript small- er than the rest of the line and slightly below the line.

Lines 24–25 call String method **sup** to display superscript text by formatting the string in variable supText ("superscript") as

<sup>superscript</sup>

Note that the resulting line in the XHTML document displays the word superscript

smaller than the rest of the line and slightly above the line. Line 26 uses String method **link** to create a hyperlink by formatting the string in

variable linkText ("Click here to go to anchorText") as

<a href = "#top">Click here to go to anchorText</a>

The target of the hyperlink (#top in this example) is the argument to the method and can be any URL. In this example, the hyperlink target is the anchor created in line 19. If you make your browser window short and scroll to the bottom of the web page, then click this link, the browser will reposition to the top of the web page.

**11.5 Date Object** JavaScript’s **Date** object provides methods for date and time manipulations. Date and time processing can be performed based on the computer’s **local time zone** or based on World Time Standard’s **Coordinated Universal Time** (abbreviated **UTC**)—formerly called

**Fig. 11.7** | String object XHTML markup methods. (Part 2 of 2.)

**420** Chapter 11 JavaScript: Objects

**Greenwich Mean Time (GMT)**. Most methods of the Date object have a local time zone and a UTC version. The methods of the Date object are summarized in Fig. 11.8.

Method Description

getDate()

getUTCDate()

Returns a number from 1 to 31 representing the day of the month in local time or UTC.

getDay() getUTCDay()

Returns a number from 0 (Sunday) to 6 (Saturday) represent- ing the day of the week in local time or UTC.

getFullYear() getUTCFullYear()

Returns the year as a four-digit number in local time or UTC.

getHours() getUTCHours()

Returns a number from 0 to 23 representing hours since mid- night in local time or UTC.

getMilliseconds() getUTCMilliSeconds()

Returns a number from 0 to 999 representing the number of milliseconds in local time or UTC, respectively. The time is stored in hours, minutes, seconds and milliseconds.

getMinutes() getUTCMinutes()

Returns a number from 0 to 59 representing the minutes for the time in local time or UTC.

getMonth()

getUTCMonth()

Returns a number from 0 (January) to 11 (December) repre- senting the month in local time or UTC.

getSeconds()

getUTCSeconds()

Returns a number from 0 to 59 representing the seconds for the time in local time or UTC.

getTime() Returns the number of milliseconds between January 1, 1970, and the time in the Date object.

getTimezoneOffset() Returns the difference in minutes between the current time on the local computer and UTC (Coordinated Universal Time).

setDate( _val_ ) setUTCDate( _val_ )

Sets the day of the month (1 to 31) in local time or UTC.

setFullYear( _y_, _m_, _d_ )

setUTCFullYear( _y_, _m_, _d_ )

Sets the year in local time or UTC. The second and third argu- ments representing the month and the date are optional. If an optional argument is not specified, the current value in the Date object is used.

setHours( _h_, _m_, _s_, _ms_ ) setUTCHours( _h_, _m_, _s_, _ms_ )

Sets the hour in local time or UTC. The second, third and fourth arguments, representing the minutes, seconds and milli- seconds, are optional. If an optional argument is not specified, the current value in the Date object is used.

setMilliSeconds( _ms_ ) setUTCMilliseconds( _ms_ )

Sets the number of milliseconds in local time or UTC.

**Fig. 11.8** | Date object methods. (Part 1 of 2.)

11.5 Date Object **421**

The script of Fig. 11.9 demonstrates many of the local time zone methods in Fig. 11.8. Line 12 creates a new Date object. The new operator allocates the memory for the Date object. The empty parentheses indicate a call to the Date object’s **constructor** with no arguments. A constructor is an initializer method for an object. Constructors are called automatically when an object is allocated with new. The Date constructor with no arguments initializes the Date object with the local computer’s current date and time.

**Software Engineering Observation 11.3** _When an object is allocated with new, the object’s constructor is called automatically to initialize the object before it is used in the program._ 11.3

Lines 16–19 demonstrate the methods toString, toLocaleString, toUTCString and valueOf. Note that method valueOf returns a large integer value representing the total number of milliseconds between midnight, January 1, 1970, and the date and time stored in Date object current.

setMinutes( _m_, _s_, _ms_ ) setUTCMinutes( _m_, _s_, _ms_ )

Sets the minute in local time or UTC. The second and third arguments, representing the seconds and milliseconds, are optional. If an optional argument is not specified, the current value in the Date object is used.

setMonth( _m_, _d_ )

setUTCMonth( _m_, _d_ )

Sets the month in local time or UTC. The second argument, representing the date, is optional. If the optional argument is not specified, the current date value in the Date object is used.

setSeconds( _s_, _ms_ ) setUTCSeconds( _s_, _ms_ )

Sets the second in local time or UTC. The second argument, representing the milliseconds, is optional. If this argument is not specified, the current millisecond value in the Date object is used.

setTime( _ms_ ) Sets the time based on its argument—the number of elapsed milliseconds since January 1, 1970.

toLocaleString() Returns a string representation of the date and time in a form specific to the computer’s locale. For example, September 13, 2007, at 3:42:22 PM is represented as _09/13/07 15:47:22_ in the United States and _13/09/07 15:47:22_ in Europe.

toUTCString() Returns a string representation of the date and time in the form: _15 Sep 2007 15:47:22 UTC_

toString() Returns a string representation of the date and time in a form specific to the locale of the computer (_Mon Sep 17 15:47:22 EDT 2007_ in the United States).

valueOf() The time in number of milliseconds since midnight, January 1, 1970. (Same as getTime.)

Method Description

**Fig. 11.8** | Date object methods. (Part 2 of 2.)

**422** Chapter 11 JavaScript: Objects

Lines 23–32 demonstrate the Date object’s _get_ methods for the local time zone. Note that method getFullYear returns the year as a four-digit number. Note as well that method getTimeZoneOffset returns the difference in minutes between the local time zone and UTC time (i.e., a difference of four hours in our time zone when this example was executed).

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 11.9: DateTime.html --> **6** <!-- Date and time methods of the Date object. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Date and Time Methods</title>

**10** <script type = "text/javascript"> **11** <!-- **12 13 14** document.writeln( **15** "<h1>String representations and valueOf</h1>" ); **16** document.writeln( "toString: " + + **17** "<br />toLocaleString: " + + **18** "<br />toUTCString: " + + **19** "<br />valueOf: " + ); **20 21** document.writeln( **22** "<h1>Get methods for local time zone</h1>" ); **23** document.writeln( "getDate: " + + **24** "<br />getDay: " + + **25** "<br />getMonth: " + + **26** "<br />getFullYear: " + + **27** "<br />getTime: " + + **28** "<br />getHours: " + + **29** "<br />getMinutes: " + + **30** "<br />getSeconds: " + + **31** "<br />getMilliseconds: " + + **32** "<br />getTimezoneOffset: " + ; **33 34** document.writeln( **35** "<h1>Specifying arguments for a new Date</h1>" ); **36** var anotherDate = new Date( 2007, 2, 18, 1, 5, 0, 0 ); **37** document.writeln( "Date: " + anotherDate ); **38 39** document.writeln( "<h1>Set methods for local time zone</h1>" ); **40 41 42 43 44 45 46** document.writeln( "Modified date: " + anotherDate );

**Fig. 11.9** | Date and time methods of the Date object. (Part 1 of 2.)

var current = new Date();

current.toString() current.toLocaleString()

current.toUTCString() current.valueOf()

current.getDate() current.getDay()

current.getMonth() current.getFullYear()

current.getTime() current.getHours()

current.getMinutes() current.getSeconds()

current.getMilliseconds() current.getTimezoneOffset() )

anotherDate.setDate( 31 ); anotherDate.setMonth( 11 ); anotherDate.setFullYear( 2007 ); anotherDate.setHours( 23 ); anotherDate.setMinutes( 59 ); anotherDate.setSeconds( 59 );

11.5 Date Object **423**

Line 36 demonstrates creating a new Date object and supplying arguments to the Date constructor for _year_, _month_, _date_, _hours_, _minutes_, _seconds_ and _milliseconds_. Note that the _hours_, _minutes_, _seconds_ and _milliseconds_ arguments are all optional. If any one of these arguments is not specified, a zero is supplied in its place. For the _hours_, _minutes_ and _seconds_ arguments, if the argument to the right of any of these arguments is specified, it too must be specified (e.g., if the _minutes_ argument is specified, the _hours_ argument must be speci- fied; if the _milliseconds_ argument is specified, all the arguments must be specified).

**47** // --> **48** </script> **49** </head><body></body> **50** </html>

**Fig. 11.9** | Date and time methods of the Date object. (Part 2 of 2.)

**424** Chapter 11 JavaScript: Objects

Lines 40–45 demonstrate the Date object _set_ methods for the local time zone. Date objects represent the month internally as an integer from 0 to 11. These values are off by one from what you might expect (i.e., 1 for January, 2 for February, …, and 12 for December). When creating a Date object, you must specify 0 to indicate January, 1 to indicate February, …, and 11 to indicate December.

**Common Programming Error 11.2** _Assuming that months are represented as numbers from 1 to 12 leads to off-by-one errors when you are processing Dates._ 11.2

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

Date method UTC returns the number of milliseconds between midnight, January 1, 1970, and the date and time specified as its arguments. The arguments to the UTC method include the required _year_, _month_ and _date_, and the optional _hours_, _minutes_, _seconds_ and _mil- liseconds_. If any of the _hours_, _minutes_, _seconds_ or _milliseconds_ arguments is not specified, a zero is supplied in its place. For the _hours_, _minutes_ and _seconds_ arguments, if the argument to the right of any of these arguments in the argument list is specified, that argument must also be specified (e.g., if the _minutes_ argument is specified, the _hours_ argument must be specified; if the _milliseconds_ argument is specified, all the arguments must be specified). As

11.6 Boolean and Number Objects **425**

with the result of Date.parse, the result of Date.UTC can be converted to a Date object by creating a new Date object with the result of Date.UTC as its argument.

**11.6 Boolean and Number Objects** JavaScript provides the **Boolean** and **Number** objects as object **wrappers** for boolean true/ false values and numbers, respectively. These wrappers define methods and properties useful in manipulating boolean values and numbers. Wrappers provide added functional- ity for working with simple data types.

When a JavaScript program requires a boolean value, JavaScript automatically creates a Boolean object to store the value. JavaScript programmers can create Boolean objects explicitly with the statement

var b = new Boolean( _booleanValue_ );

The constructor argument _booleanValue_ specifies whether the value of the Boolean object should be true or false. If _booleanValue_ is false, 0, null, Number.NaN or an empty string (""), or if no argument is supplied, the new Boolean object contains false. Otherwise, the new Boolean object contains true. Figure 11.10 summarizes the methods of the Bool- ean object.

JavaScript automatically creates Number objects to store numeric values in a Java- Script program. JavaScript programmers can create a Number object with the statement

var n = new Number( _numericValue_ );

The constructor argument _numericValue_ is the number to store in the object. Although you can explicitly create Number objects, normally the JavaScript interpreter creates them as needed. Figure 11.11 summarizes the methods and properties of the Number object.

Method Description

toString() Returns the string "true" if the value of the Boolean object is true; otherwise, returns the string "false".

valueOf() Returns the value true if the Boolean object is true; otherwise, returns false.

**Fig. 11.10** | Boolean object methods.

Method or property Description

toString( _radix_ ) Returns the string representation of the number. The optional _radix_ argument (a number from 2 to 36) specifies the number’s base. For example, radix 2 results in the binary representation of the number, 8 results in the octal representation, 10 results in the decimal representation and 16 results in the hexadecimal represen- tation. See Appendix E, Number Systems, for a review of the binary, octal, decimal and hexadecimal number systems.

**Fig. 11.11** | Number object methods and properties. (Part 1 of 2.)

**426** Chapter 11 JavaScript: Objects

**11.7 document Object** The **document** object is used to manipulate the document that is currently visible in the browser window. The document object has many properties and methods, such as methods document.write and document.writeln, which have both been used in prior JavaScript examples. Figure 11.12 shows the methods and properties of the document objects that are used in this chapter. You can learn more about the properties and methods of the docu-

ment object in our JavaScript Resource Center (www.deitel.com/javascript).

valueOf() Returns the numeric value.

Number.MAX_VALUE This property represents the largest value that can be stored in a JavaScript program—approximately 1.79E+308.

Number.MIN_VALUE This property represents the smallest value that can be stored in a JavaScript program—approximately 5.00E–324.

Number.NaN This property represents _not a number_—a value returned from an arithmetic expression that does not result in a number (e.g., the expression parseInt( "hello" ) cannot convert the string "hello"

into a number, so parseInt would return Number.NaN. To deter- mine whether a value is NaN, test the result with function isNaN,

which returns true if the value is NaN; otherwise, it returns false.

Number.NEGATIVE_INFINITY

This property represents a value less than -Number.MAX_VALUE.

Number.POSITIVE_INFINITY

This property represents a value greater than Number.MAX_VALUE.

Method or property Description

getElementById( _id_ ) Returns the DOM node representing the XHTML element whose id attribute matches _id_.

write( _string_ ) Writes the string to the XHTML document as XHTML code.

writeln( _string_ ) Writes the string to the XHTML document as XHTML code and adds a newline character at the end.

cookie A string containing the values of all the cookies stored on the user’s computer for the current document. See Section 11.9, Using Cookies.

lastModified The date and time that this document was last modified.

**Fig. 11.12** | Important document object methods and properties.

Method or property Description

**Fig. 11.11** | Number object methods and properties. (Part 2 of 2.)

11.8 window Object **427**

**11.8 window Object** The **window** object provides methods for manipulating browser windows. The following script shows many of the commonly used properties and methods of the window object and uses them to create a website that spans multiple browser windows. Figure 11.13 allows the user to create a new, fully customized browser window by completing an XHTML form and clicking the **Submit** button. The script also allows the user to add text to the new window and navigate the window to a different URL.

The script starts in line 10. Line 12 declares a variable to refer to the new window. We refer to the new window as the **child window** because it is created and controlled by the main, or **parent**, window in this script. Lines 14–50 define the createChildWindow func- tion, which determines the features that have been selected by the user and creates a child window with those features (but does not add any content to the window). Lines 18–20 declare several variables to store the status of the checkboxes on the page. Lines 23–38 set each variable to "yes" or "no" based on whether the corresponding checkbox is checked or unchecked.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 11.13: window.html --> **6** <!-- Using the window object to create and modify child windows. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Using the Window Object</title>

**10** <script type = "text/javascript"> **11** <!-- **12** var childWindow; // variable to control the child window **13 14** function createChildWindow() **15** { **16** // these variables all contain either "yes" or "no" **17** // to enable or disable a feature in the child window **18** var toolBar; **19** var menuBar; **20** var scrollBars; **21 22** // determine whether the Tool Bar checkbox is checked **23** if ( document.getElementById( "toolBarCheckBox" ).checked ) **24** toolBar = "yes"; **25** else **26** toolBar = "no"; **27 28** // determine whether the Menu Bar checkbox is checked **29** if ( document.getElementById( "menuBarCheckBox" ).checked ) **30** menuBar = "yes"; **31** else **32** menuBar = "no"; **33**

**Fig. 11.13** | Using the window object to create and modify child windows. (Part 1 of 4.)

**428** Chapter 11 JavaScript: Objects

**34** // determine whether the Scroll Bar checkbox is checked **35** if ( document.getElementById( "scrollBarsCheckBox" ).checked ) **36** scrollBars = "yes"; **37** else **38** scrollBars = "no"; **39 40 41 42 43 44 45 46** // disable buttons **47** document.getElementById( "closeButton" ).disabled = false; **48** document.getElementById( "modifyButton" ).disabled = false; **49** document.getElementById( "setURLButton" ).disabled = false; **50** } // end function createChildWindow **51 52** // insert text from the textbox in the child window **53** function modifyChildWindow() **54** { **55** if ( ) **56** alert( "You attempted to interact with a closed window" ); **57** else **58 59 60** } // end function modifyChildWindow **61 62** // close the child window **63** function closeChildWindow() **64** { **65** if ( ) **66** alert( "You attempted to interact with a closed window" ); **67** else **68 69 70** document.getElementById( "closeButton" ).disabled = true; **71** document.getElementById( "modifyButton" ).disabled = true; **72** document.getElementById( "setURLButton" ).disabled = true; **73** } // end function closeChildWindow **74 75** // set the URL of the child window to the URL **76** // in the parent window's myChildURL **77** function setChildWindowURL() **78** { **79** if ( ) **80** alert( "You attempted to interact with a closed window" ); **81** else **82 83 84** } // end function setChildWindowURL **85** //--> **86** </script>

**Fig. 11.13** | Using the window object to create and modify child windows. (Part 2 of 4.)

//display window with selected features childWindow = window.open( "", "",

",toolbar = " + toolBar + ",menubar = " + menuBar + ",scrollbars = " + scrollBars );

childWindow.closed

childWindow.document.write( document.getElementById( "textForChild" ).value );

childWindow.closed

childWindow.close();

childWindow.closed

childWindow.location = document.getElementById( "myChildURL" ).value;

11.8 window Object **429**

**87** </head> **88** <body> **89** <h1>Hello, this is the main window</h1> **90** <p>Please check the features to enable for the child window<br/> **91** <input id = "toolBarCheckBox" type = "checkbox" value = "" **92** checked = "checked" /> **93** <label>Tool Bar</label> **94** <input id = "menuBarCheckBox" type = "checkbox" value = "" **95** checked = "checked" /> **96** <label>Menu Bar</label> **97** <input id = "scrollBarsCheckBox" type = "checkbox" value = "" **98** checked = "checked" /> **99** <label>Scroll Bars</label></p> **100 101** <p>Please enter the text that you would like to display **102** in the child window<br/> **103** <input id = "textForChild" type = "text" **104** value = "<h1>Hello, I am a child window.</h1> " /> **105** <input id = "createButton" type = "button" **106** value = "Create Child Window" /> **107** <input id= "modifyButton" type = "button" value = "Modify Child Window" **108** disabled = "disabled" /> **109** <input id = "closeButton" type = "button" value = "Close Child Window" **110** disabled = "disabled" /></p> **111 112** <p>The other window's URL is: <br/> **113** <input id = "myChildURL" type = "text" value = "./" /> **114** <input id = "setURLButton" type = "button" value = "Set Child URL" **115** disabled = "disabled" /></p> **116** </body> **117** </html>

**Fig. 11.13** | Using the window object to create and modify child windows. (Part 3 of 4.)

onclick = "createChildWindow()"

onclick = "modifyChildWindow()"

onclick = "closeChildWindow()"

onclick = "setChildWindowURL()"

**430** Chapter 11 JavaScript: Objects

The statement in lines 41–44 uses the window object’s open method to create the requested child window. Method open has three parameters. The first parameter is the URL of the page to open in the new window, and the second parameter is the name of the window. If you specify the target attribute of an a (anchor) element to correspond to the name of a window, the href of the link will be opened in the window. In our example, we pass window.open empty strings as the first two parameter values because we want the new window to open a blank page, and we use a different method to manipulate the child window’s URL.

The third parameter of the open method is a string of comma-separated, all-lowercase feature names, each followed by an = sign and either "yes" or "no" to determine whether that feature should be displayed in the new window. If these parameters are omitted, the browser defaults to a new window containing an empty page, no title and all features vis- ible. \[_Note:_ If your menu bar is normally hidden in IE7, it will not appear in the child window. Press the _Alt_ key to display it.\] Lines 47–49 enable the buttons for manipulating the child window—these are initially disabled when the page loads.

Lines 53–60 define the function modifyChildWindow, which adds a line of text to the content of the child window. In line 55, the script determines whether the child window is closed. Function modifyChildWindow uses property childWindow.closed to obtain a boolean value that is true if childWindow is closed and false if the window is still open. If the window is closed, an alert box is displayed notifying the user that the window is cur- rently closed and cannot be modified. If the child window is open, lines 58–59 obtain text from the textForChild input (lines 103–104) in the XHTML form in the parent window and uses the child’s document.write method to write this text to the child window.

Function closeChildWindow (lines 63–73) also determines whether the child window is closed before proceeding. If the child window is closed, the script displays an alert box telling the user that the window is already closed. If the child window is open, line 68

**Fig. 11.13** | Using the window object to create and modify child windows. (Part 4 of 4.)

11.8 window Object **431**

closes it using the childWindow.close method. Lines 70–72 disable the buttons that interact with the child window.

**Look-and-Feel Observation 11.1** _Popup windows should be used sparingly. Many users dislike websites that open additional win- dows, or that resize or reposition the browser. Some some users have popup blockers that will pre- vent new windows from opening._ 11.1

**Software Engineering Observation 11.4** _window.location is a property that always contains a string representation of the URL displayed in the current window. Typically, web browsers will allow a script to retrieve the window.location property of another window only if the script belongs to the same website as the page in the other window._ 11.4

Function setChildWindowURL (lines 77–84) copies the contents of the myChildURL

text field to the location property of the child window. If the child window is open, lines 81–82 set property location of the child window to the string in the myChildURL textbox. This action changes the URL of the child window and is equivalent to typing a new URL into the window’s address bar and clicking **Go** (or pressing _Enter_).

The script ends in line 86. Lines 88–116 contain the body of the XHTML document, comprising a form that contains checkboxes, buttons, textboxes and form field labels. The script uses the form elements defined in the body to obtain input from the user. Lines 106, 108, 110, and 115 specify the onclick attributes of XHTML buttons. Each button is set to call a corresponding JavaScript function when clicked.

Figure 11.14 contains a list of some commonly used methods and properties of the window object.

Method or property Description

open(

_url_, _name_, _options_ )

Creates a new window with the URL of the window set to _url_, the name set to _name_ to refer to it in the script, and the visible features set by the string passed in as _option._

prompt(

_prompt_, _default_ )

Displays a dialog box asking the user for input. The text of the dialog is _prompt_, and the default value is set to _default._

close() Closes the current window and deletes its object from memory.

focus() This method gives focus to the window (i.e., puts the window in the foreground, on top of any other open browser windows).

blur() This method takes focus away from the window (i.e., puts the window in the background).

window.document This property contains the document object representing the docu- ment currently inside the window.

window.closed This property contains a boolean value that is set to true if the window is closed, and false if it is not.

**Fig. 11.14** | Important window object methods and properties. (Part 1 of 2.)

**432** Chapter 11 JavaScript: Objects

**11.9 Using Cookies** Cookies provide web developers with a tool for personalizing web pages. A **cookie** is a piece of data that is stored on the user’s computer to maintain information about the client during and between browser sessions. A website may store a cookie on the client’s com- puter to record user preferences or other information that the website can retrieve during the client’s subsequent visits. For example, a website can retrieve the user’s name from a cookie and use it to display a personalized greeting.

Microsoft Internet Explorer and Mozilla Firefox store cookies as small text files on the client’s hard drive. When a user visits a website, the browser locates any cookies written by scripts on that site and makes them available to any scripts located on the site. Note that cookies may be accessed only by scripts belonging to the same website from which they originated (i.e., a cookie set by a script on amazon.com can be read only by other scripts on amazon.com).

Cookies are accessible in JavaScript through the document object’s **cookie** property. JavaScript treats a cookie as a string of text. Any standard string function or method can manipulate a cookie. A cookie has the syntax “identifier=value,” where _identifier_ is any valid JavaScript variable identifier, and _value_ is the value of the cookie variable. When mul- tiple cookies exist for one website, _identifier-value_ pairs are separated by semicolons in the document.cookie string.

Cookies differ from ordinary strings in that each cookie has an expiration date, after which the web browser deletes it. This date can be defined by setting the **expires** property in the cookie string. If a cookie’s expiration date is not set, then the cookie expires by default after the user closes the browser window. A cookie can be deleted immediately by setting the expires property to a date and time in the past.

The assignment operator does not overwrite the entire list of cookies, but appends a cookie to the end of it. Thus, if we set two cookies

document.cookie = "name1=value1;"; document.cookie = "name2=value2;";

document.cookie will contain "name1=value1; name2=value2". Figure 11.15 uses a cookie to store the user’s name and displays a personalized

greeting. This example improves upon the functionality in the dynamic welcome page example of Fig. 6.17 by requiring the user to enter a name only during the first visit to the web page. On each subsequent visit, the script can display the user name that is stored in the cookie.

Line 10 begins the script. Lines 12–13 declare the variables needed to obtain the time, and line 14 declares the variable that stores the name of the user. Lines 16–27 contain the same if…else statement used in Fig. 6.17 to display a time-sensitive greeting.

window.opener This property contains the window object of the window that opened the current window, if such a window exists.

Method or property Description

**Fig. 11.14** | Important window object methods and properties. (Part 2 of 2.)

11.9 Using Cookies **433**

Lines 30–66 contain the code used to manipulate the cookie. Line 30 determines whether a cookie exists on the client computer. The expression document.cookie evalu- ates to true if a cookie exists. If a cookie does not exist, then the script prompts the user to enter a name (line 45). The script creates a cookie containing the string "name=", fol- lowed by a copy of the user’s name produced by the built-in JavaScript function **escape**

(line 49). The function escape converts any non-alphanumeric characters, such as spaces

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 11.15: cookie.html --> **6** <!-- Using cookies to store user identification data. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Using Cookies</title>

**10** <script type = "text/javascript"> **11** <!-- **12** var now = new Date(); // current date and time **13** var hour = now.getHours(); // current hour (0-23) **14** var name; **15 16** if ( hour < 12 ) // determine whether it is morning **17** document.write( "<h1>Good Morning, " ); **18** else **19** { **20** hour = hour - 12; // convert from 24-hour clock to PM time **21 22** // determine whether it is afternoon or evening **23** if ( hour < 6 ) **24** document.write( "<h1>Good Afternoon, " ); **25** else **26** document.write( "<h1>Good Evening, " ); **27** } // end else **28 29** // determine whether there is a cookie **30** if ( ) **31** { **32** // convert escape characters in the cookie string to their **33** // English notation **34 35 36** // split the cookie into tokens using = as delimiter **37 38 39** // set name to the part of the cookie that follows the = sign **40 41** } // end if **42** else **43** { **44** // if there was no cookie, ask the user to input a name **45** name = window.prompt( "Please enter your name", "Paul" );

**Fig. 11.15** | Using cookies to store user identification data. (Part 1 of 3.)

document.cookie

var myCookie = unescape( document.cookie );

var cookieTokens = myCookie.split( "=" );

name = cookieTokens\[ 1 \];

**434** Chapter 11 JavaScript: Objects

**46 47** // escape special characters in the name string **48** // and add name to the cookie **49 50** } // end else **51 52** document.writeln( **53** name + ", welcome to JavaScript programming!</h1>" ); **54** document.writeln( "<a href = 'javascript:wrongPerson()'> " + **55** "Click here if you are not " + name + "</a>" ); **56 57** // reset the document's cookie if wrong person **58** function wrongPerson() **59** { **60** // reset the cookie **61 62 63 64** // reload the page to get a new name after removing the cookie **65 66** } // end function wrongPerson **67 68** // --> **69** </script> **70** </head> **71** <body> **72** <p>Click Refresh (or Reload) to run the script again</p> **73** </body> **74** </html>

**Fig. 11.15** | Using cookies to store user identification data. (Part 2 of 3.)

document.cookie = "name=" + escape( name );

document.cookie= "name=null;" + " expires=Thu, 01-Jan-95 00:00:01 GMT";

location.reload();

11.9 Using Cookies **435**

and semicolons, in a string to their equivalent **hexadecimal escape sequences** of the form “%_XX_,” where _XX_ is the two-digit hexadecimal ASCII value of a special character. For example, if name contains the value "David Green", the statement escape( name ) evalu- ates to "David%20Green", because the hexadecimal ASCII value of a blank space is 20. It is a good idea to always escape cookie values before writing them to the client. This con- version prevents any special characters in the cookie from being misinterpreted as having a special meaning in the code, rather than being a character in a cookie value. For instance, a semicolon in a cookie value could be misinterpreted as a semicolon separating two adja- cent _identifier-value_ pairs. Applying the function **unescape** to cookies when they are read out of the document.cookie string converts the hexadecimal escape sequences back to English characters for display in a web page.

**Good Programming Practice 11.2** _Always store values in cookies with self-documenting identifiers. Do not forget to include the identifier followed by an = sign before the value being stored._ 11.2

If a cookie exists (i.e., the user has been to the page before), then the script **parses** the user name out of the cookie string and stores it in a local variable. Parsing generally refers to the act of splitting a string into smaller, more useful components. Line 34 uses the Java- Script function unescape to replace all the escape sequences in the cookie with their equiv- alent English-language characters. The script stores the unescaped cookie value in the variable myCookie (line 34) and uses the JavaScript function split (line 37), introduced in Section 11.4.5, to break the cookie into identifier and value tokens. At this point in the script, myCookie contains a string of the form "name=_value_"_._ We call split on myCookie

with = as the delimiter to obtain the cookieTokens array, with the first element equal to the name of the identifier and the second element equal to the value of the identifier. Line 40 assigns the value of the second element in the cookieTokens array (i.e., the actual value stored in the cookie) to the variable name. Lines 52–53 add the personalized greeting to the web page, using the user’s name stored in the cookie.

AFter "refresh" is clicked, the website recalls the previously input data.

**Fig. 11.15** | Using cookies to store user identification data. (Part 3 of 3.)

**436** Chapter 11 JavaScript: Objects

The script allows the user to reset the cookie, which is useful in case someone new is using the computer. Lines 54–55 create a hyperlink that, when clicked, calls the JavaScript function wrongPerson (lines 58–66). Lines 61–62 set the cookie name to null and the expires property to January 1, 1995 (though any date in the past will suffice). Internet Explorer detects that the expires property is set to a date in the past and deletes the cookie from the user’s computer. The next time this page loads, no cookie will be found. The **reload** method of the location object forces the page to refresh (line 65), and, unable to find an existing cookie, the script prompts the user to enter a new name.

**11.10 Final JavaScript Example** The past few chapters have explored many JavaScript concepts and how they can be ap- plied on the web. The next JavaScript example combines many of these concepts into a single web page. Figure 11.16 uses functions, cookies, arrays, loops, the Date object, the window object and the document object to create a sample welcome screen containing a personalized greeting, a short quiz, a random image and a random quotation. We have seen all of these concepts before, but this example illustrates how they work together on one web page.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 11.16: final.html --> **6** <!-- Rich welcome page using several JavaScript concepts. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Putting It All Together</title>

**10** <script type = "text/javascript"> **11** <!-- **12** var now = new Date(); // current date and time **13** var hour = now.getHours(); // current hour **14 15** // array with names of the images that will be randomly selected **16** var pictures = **17** \[ "CPE", "EPT", "GPP", "GUI", "PERF", "PORT", "SEO" \]; **18 19** // array with the quotes that will be randomly selected **20** var quotes = \[ "Form ever follows function.<br/>" + **21** " Louis Henri Sullivan", "E pluribus unum." + **22** " (One composed of many.) <br/> Virgil", "Is it a" + **23** " world to hide virtues in?<br/> William Shakespeare" \]; **24 25** // write the current date and time to the web page **26** document.write( "<p>" + + "<br/></p>" ); **27 28** // determine whether it is morning **29** if ( hour < 12 ) **30** document.write( "<h2>Good Morning, " );

**Fig. 11.16** | Rich welcome page using several JavaScript concepts. (Part 1 of 5.)

now.toLocaleString()

11.10 Final JavaScript Example **437**

**31** else **32** { **33** hour = hour - 12; // convert from 24-hour clock to PM time **34 35** // determine whether it is afternoon or evening **36** if ( hour < 6 ) **37** document.write( "<h2>Good Afternoon, " ); **38** else **39** document.write( "<h2>Good Evening, " ); **40** } // end else **41 42** // determine whether there is a cookie **43** if ( document.cookie ) **44** { **45** // convert escape characters in the cookie string to their **46** // English notation **47** var myCookie = unescape( document.cookie ); **48 49** // split the cookie into tokens using = as delimiter **50** var cookieTokens = myCookie.split( "=" ); **51 52** // set name to the part of the cookie that follows the = sign **53** name = cookieTokens\[ 1 \]; **54** } // end if **55** else **56** { **57** // if there was no cookie, ask the user to input a name **58** name = window.prompt( "Please enter your name", "Paul" ); **59 60** // escape special characters in the name string **61** // and add name to the cookie **62** document.cookie = "name =" + escape( name ); **63** } // end else **64 65** // write the greeting to the page **66** document.writeln( **67** name + ", welcome to JavaScript programming!</h2>" ); **68 69** // write the link for deleting the cookie to the page **70** document.writeln( "<a href = \\"javascript:wrongPerson()\\" > " + **71** "Click here if you are not " + name + "</a><br/>" ); **72 73** // write the random image to the page **74** document.write ( "<img src = \\"" + **75** pictures\[ Math.floor( Math.random() \* 7 ) \] + **76** ".gif\\" /> <br/>" ); **77 78** // write the random quote to the page **79** document.write ( quotes\[ Math.floor( Math.random() \* 3 ) \] ); **80 81** // create a window with all the quotes in it **82** function allQuotes() **83** {

**Fig. 11.16** | Rich welcome page using several JavaScript concepts. (Part 2 of 5.)

**438** Chapter 11 JavaScript: Objects

**84** // create the child window for the quotes **85** var quoteWindow = window.open( "", "", "resizable=yes, " + **86** "toolbar=no, menubar=no, status=no, location=no," + **87** " scrollBars=yes" ); **88** quoteWindow.document.write( "<p>" ) **89 90 91 92 93 94 95** // write a close link to the new window **96** quoteWindow.document.write( "</p><br/><a href = " + **97** "\\"javascript:window.close()\\">Close this window</a>" ); **98** } // end function allQuotes **99 100** // reset the document's cookie if wrong person **101** function wrongPerson() **102** { **103** // reset the cookie **104** document.cookie= "name=null;" + **105** " expires=Thu, 01-Jan-95 00:00:01 GMT"; **106 107** // reload the page to get a new name after removing the cookie **108** location.reload(); **109** } // end function wrongPerson **110 111** // open a new window with the quiz2.html file in it **112** function openQuiz() **113** { **114** window.open( "quiz2.html", "", "toolbar = no, " + **115** "menubar = no, scrollBars = no" ); **116** } // end function openQuiz **117** // --> **118** </script> **119** </head> **120** <body> **121** <p><a href = "javascript:allQuotes()">View all quotes</a></p> **122 123 124 125 126** <script type = "text/javascript"> **127** // variable that gets the last modification date and time **128** var modDate = new Date( ); **129 130** // write the last modified date and time to the page **131** document.write ( "This page was last modified " + **132** modDate.toLocaleString() ); **133** </script> **134** </body> **135** </html>

**Fig. 11.16** | Rich welcome page using several JavaScript concepts. (Part 3 of 5.)

// loop through all quotes and write them in the new window for ( var i = 0; i < quotes.length; i++ )

quoteWindow.document.write( ( i + 1 ) + ".) " + quotes\[ i \] + "<br/><br/>");

<p id = "quizSpot"> <a href = "javascript:openQuiz()">Please take our quiz</a></p>

document.lastModified

11.10 Final JavaScript Example **439**

**Fig. 11.16** | Rich welcome page using several JavaScript concepts. (Part 4 of 5.)

**440** Chapter 11 JavaScript: Objects

The script that builds most of this page starts in line 10. Lines 12–13 declare variables needed for determining the time of day. Lines 16–23 create two arrays from which content is randomly selected. This web page contains both an image (whose filename is randomly selected from the pictures array) and a quote (whose text is randomly selected from the quotes array). Line 26 writes the user’s local date and time to the web page using the Date object’s toLocaleString method. Lines 29–40 display a time-sensitive greeting using the same code as Fig. 6.17. The script either uses an existing cookie to obtain the user’s name (lines 43–54) or prompts the user for a name, which the script then stores in a new cookie (lines 55–63). Lines 66–67 write the greeting to the web page, and lines 70–71 produce the link for resetting the cookie. This is the same code used in Fig. 11.15 to manipulate cookies. Lines 74–79 write the random image and random quote to the web page. The script chooses each by randomly selecting an index into each array. This code is similar to the code used in Fig. 10.7 to display a random image using an array.

Function allQuotes (lines 82–98) uses the window object and a for loop to open a new window containing all the quotes in the quotes array. Lines 85–87 create a new window called quoteWindow. The script does not assign a URL or a name to this window, but it does specify the window features to display. Line 88 opens a new paragraph in quoteWindow. A for loop (lines 91–93) traverses the quotes array and writes each quote to quoteWindow. Lines 96–97 close the paragraph in quoteWindow, insert a new line and add a link at the bottom of the page that allows the user to close the window. Note that all- Quotes generates a web page and opens it in an entirely new window with JavaScript.

Function wrongPerson (lines 101–109) resets the cookie storing the user’s name. This function is identical to function wrongPerson in Fig. 11.15.

Function openQuiz (lines 112–116) opens a new window to display a sample quiz. Using the window.open method, the script creates a new window containing quiz2.html

(lines 114–115). We discuss quiz2.html later in this section.

**Fig. 11.16** | Rich welcome page using several JavaScript concepts. (Part 5 of 5.)

11.10 Final JavaScript Example **441**

The primary script ends in line 118, and the body of the XHTML document begins in line 120. Line 121 creates the link that calls function allQuotes when clicked. Lines 123–124 create a paragraph element containing the attribute id = "quizSpot". This para- graph contains a link that calls function openQuiz.

Lines 126–133 contain a second script. This script appears in the XHTML docu- ment’s body because it adds a dynamic footer to the page, which must appear after the static XHTML content contained in the first part of the body. This script creates another instance of the Date object, but the date is set to the last modified date and time of the XHTML document, rather than the current date and time (line 128). The script obtains the last modified date and time using property document.lastModified. Lines 131–132 add this information to the web page. Note that the last modified date and time appear at the bottom of the page, after the rest of the body content. If this script were in the head

element, this information would be displayed before the entire body of the XHTML doc- ument. Lines 133–135 close the script, the body and the XHTML document.

**_The Quiz Page_** The quiz used in this example is in a separate XHTML document named quiz2.html

(Fig. 11.17). This document is similar to quiz.html in Fig. 10.14. The quiz in this exam- ple differs from the quiz in Fig. 10.14 in that it shows the result in the main window in the example, whereas the earlier quiz example alerts the result. After the **Submit** button in the quiz window is clicked, the main window changes to reflect that the quiz was taken, and the quiz window closes.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 11.17: quiz2.html --> **6** <!-- Online quiz in a child window. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Online Quiz</title>

**10** <script type = "text/JavaScript"> **11** <!-- **12** function checkAnswers() **13** { **14** // determine whether the answer is correct **15** if ( document.getElementById( "myQuiz" ).elements\[1\].checked ) **16 17 18** else // if the answer is incorrect **19 20 21 22 23 24 25** window.close(); **26** } // end function checkAnswers

**Fig. 11.17** | Online quiz in a child window. (Part 1 of 3.)

window.opener.document.getElementById( "quizSpot" ). innerHTML = "Congratulations, your answer is correct";

window.opener.document.getElementById( "quizSpot" ). innerHTML = "Your answer is incorrect. " + "Please try again <br /> <a href = " + \\"javascript:openQuiz()\\">Please take our quiz</a>";

window.opener.focus();

**442** Chapter 11 JavaScript: Objects

**27** //--> **28** </script> **29** </head> **30** <body> **31** <form id = "myQuiz" action = "javascript:checkAnswers()"> **32** <p>Select the name of the tip that goes with the **33** image shown:<br /> **34** <img src = "EPT.gif" alt = "mystery tip"/> **35** <br /> **36 37** <input type = "radio" name = "radiobutton" value = "CPE" /> **38** <label>Common Programming Error</label> **39 40** <input type = "radio" name = "radiobutton" value = "EPT" /> **41** <label>Error-Prevention Tip</label> **42 43** <input type = "radio" name = "radiobutton" value = "PERF" /> **44** <label>Performance Tip</label> **45 46** <input type = "radio" name = "radiobutton" value = "PORT" /> **47** <label>Portability Tip</label><br /> **48 49** <input type = "submit" name = "Submit" value = "Submit" /> **50** <input type = "reset" name = "reset" value = "Reset" /> **51** </p> **52** </form> **53** </body> **54** </html>

**Fig. 11.17** | Online quiz in a child window. (Part 2 of 3.)

11.10 Final JavaScript Example **443**

Lines 15–22 of this script check the user’s answer and output the result to the main window. Lines 16–17 use window.opener to write to the main window. The property **window.opener** always contains a reference to the window that opened the current window, if such a window exists. Lines 16–17 write to property window.opener.docu-

ment.getElementById("quizSpot").innerHTML. Recall that quizSpot is the id of the

**Fig. 11.17** | Online quiz in a child window. (Part 3 of 3.)

**444** Chapter 11 JavaScript: Objects

paragraph in the main window that contains the link to open the quiz. Property **innerHTML** refers to the HTML code inside the quizSpot paragraph (i.e., the code between <p> and </p>). Modifying the innerHTML property dynamically changes the XHTML code in the paragraph. Thus, when lines 16–17 execute, the link in the main window dis- appears, and the string "Congratulations, your answer is correct." appears. Lines 19– 22 modify window.opener.document.getElementById("quizSpot").innerHTML. Lines 19–22 use the same technique to display "Your answer is incorrect. Please try again", followed by a link to try the quiz again.

After checking the quiz answer, the script gives focus to the main window (i.e., puts the main window in the foreground, on top of any other open browser windows), using the method **focus** of the main window’s window object. The property window.opener ref- erences the main window, so window.opener.focus() (line 24) gives the main window focus, allowing the user to see the changes made to the text of the main window’s quizSpot paragraph. Finally, the script closes the quiz window, using method window.close (line 25).

Lines 28–29 close the script and head elements of the XHTML document. Line 30 opens the body of the XHTML document. The body contains the form, image, text labels and radio buttons that comprise the quiz. Lines 52–54 close the form, the body and the XHTML document.

**11.11 Using JSON to Represent Objects** In 1999, **JSON (JavaScript Object Notation)**—a simple way to represent JavaScript ob- jects as strings—was introduced as an alternative to XML as a data-exchange technique. JSON has gained acclaim due to its simple format, making objects easy to read, create and parse. Each JSON object is represented as a list of property names and values contained in curly braces, in the following format:

{ _propertyName1_ : _value1_, _propertyName2_ : _value2_ }

Arrays are represented in JSON with square brackets in the following format:

\[ _value1_, _value2_, _value3_ \]

Each value can be a string, a number, a JSON object, true, false or null. To appreciate the simplicity of JSON data, examine this representation of an array of address-book en- tries from Chapter 15:

\[ { first: 'Cheryl', last: 'Black' }, { first: 'James', last: 'Blue' }, { first: 'Mike', last: 'Brown' }, { first: 'Meg', last: 'Gold' } \]

JSON provides a straightforward way to manipulate objects in JavaScript, and many other programming languages now support this format. In addition to simplifying object creation, JSON allows programs to extract data easily and to efficiently transmit data across the Internet. JSON integrates especially well with Ajax applications, discussed in Chapter 15. See Section 15.7 for a more detailed discussion of JSON, as well as an Ajax- specific example. For more information on JSON, visit our JSON Resource Center at www.deitel.com/json.

11.12 Wrap-Up **445**

**11.12 Wrap-Up** This chapter provided an introduction to Object Technology, many of JavaScript’s built- in objects, and a brief introduction to JSON, a simple way to represent new JavaScript ob- jects. We introduced vocabulary and concepts integral to object-oriented and object-based programming. We took a closer look at some methods and properties of the Math, Date, Boolean, Number, String, document, and window objects. In the next chapter, we intro- duce the Document Object Model, a set of JavaScript objects that represent the elements in a web page that allows you to dynamically modify the page’s content.

**11.13 Web Resources** www.deitel.com/javascript/

The Deitel JavaScript Resource Center contains links to some of the best JavaScript resources on the web. There you’ll find categorized links to JavaScript tools, code generators, forums, books, libraries, frameworks and more. Also check out the tutorials for all skill levels, from introductory to advanced. Be sure to visit the related Resource Centers on XHTML (www.deitel.com/xhtml/) and CSS 2.1 (www.deitel.com/css21/).

**Summary _Section 11.1 Introduction_** • The chapter describes several of JavaScript’s built-in objects, which will serve as a basis for un-

derstanding browser objects in the chapters on Dynamic HTML.

**_Section 11.2 Introduction to Object Technology_** • Objects are a natural way of thinking about the world and about scripts that manipulate

XHTML documents.

• JavaScript uses objects to perform many tasks and therefore is referred to as an object-based pro- gramming language.

• Objects have attributes and exhibit behaviors.

• Object-oriented design (OOD) models software in terms similar to those that people use to de- scribe real-world objects. It takes advantage of class relationships, where objects of a certain class, such as a class of vehicles, have the same characteristics.

• OOD takes advantage of inheritance relationships, where new classes of objects are derived by absorbing characteristics of existing classes and adding unique characteristics of their own.

• Object-oriented design provides a natural and intuitive way to view the software design pro- cess—namely, modeling objects by their attributes, behaviors and interrelationships just as we describe real-world objects.

• OOD also models communication between objects.

• OOD encapsulates attributes and operations (behaviors) into objects.

• Objects have the property of information hiding. This means that objects may know how to communicate with one another across well-defined interfaces, but normally they are not allowed to know how other objects are implemented—implementation details are hidden within the ob- jects themselves.

• The designers of web browsers have defined a set of objects that encapsulate an XHTML docu- ment’s elements and expose to a JavaScript programmer the attributes and behaviors that enable a JavaScript program to interact with (or script) those elements (objects).

**446** Chapter 11 JavaScript: Objects

• Some programming languages—like Java, Visual Basic, C# and C++—are object oriented. Pro- gramming in such a language is called object-oriented programming (OOP), and it allows com- puter programmers to implement object-oriented designs as working software systems.

• Languages like C are procedural, so programming tends to be action oriented.

• In procedural languages, the unit of programming is the function.

• In object-oriented languages, the unit of programming is the class from which objects are even- tually instantiated. Classes contain functions that implement operations and data that imple- ments attributes.

• Procedural programmers concentrate on writing functions. Programmers group actions that per- form some common task into functions, and group functions to form programs.

• Object-oriented programmers concentrate on creating their own user-defined types called classes. Each class contains data as well as the set of functions that manipulate that data and pro- vide services to clients.

• The data components of a class are called properties.

• The function components of a class are called methods.

• The nouns in a system specification help you determine the set of classes from which objects are created that work together to implement the system.

• Classes are to objects as blueprints are to houses.

• Classes can have relationships with other classes. These relationships are called associations.

• Packaging software as classes makes it possible for future software systems to reuse the classes. Groups of related classes are often packaged as reusable components.

• With object technology, you can build much of the new software you’ll need by combining ex- isting classes, just as automobile manufacturers combine interchangeable parts. Each new class you create will have the potential to become a valuable software asset that you and other pro- grammers can reuse to speed and enhance the quality of future software development efforts.

**_Section 11.3 Math Object_** • Math object methods allow you to perform many common mathematical calculations.

• An object’s methods are called by writing the name of the object followed by a dot operator (.) and the name of the method. In parentheses following the method name is the argument (or a comma-separated list of arguments) to the method.

**_Section 11.4 String Object_** • Characters are the fundamental building blocks of JavaScript programs. Every program is com-

posed of a sequence of characters grouped together meaningfully that is interpreted by the com- puter as a series of instructions used to accomplish a task.

• A string is a series of characters treated as a single unit.

• A string may include letters, digits and various special characters, such as +, -, \*, /, and $.

• JavaScript supports Unicode, which represents a large portion of the world’s languages.

• String literals or string constants (often called anonymous String objects) are written as a se- quence of characters in double quotation marks or single quotation marks.

• Combining strings is called concatenation.

• String method charAt returns the character at a specific index in a string. Indices for the charac- ters in a string start at 0 (the first character) and go up to (but do not include) the string’s length (i.e., if the string contains five characters, the indices are 0 through 4). If the index is outside the bounds of the string, the method returns an empty string.

Summary **447**

• String method charCodeAt returns the Unicode value of the character at a specific index in a string. If the index is outside the bounds of the string, the method returns NaN. String method fromCharCode creates a string from a list of Unicode values.

• String method toLowerCase returns the lowercase version of a string. String method toUpper-

Case returns the uppercase version of a string.

• String method indexOf determines the location of the first occurrence of its argument in the string used to call the method. If the substring is found, the index at which the first occurrence of the substring begins is returned; otherwise, -1 is returned. This method receives an optional second argument specifying the index from which to begin the search.

• String method lastIndexOf determines the location of the last occurrence of its argument in the string used to call the method. If the substring is found, the index at which the last occurrence of the substring begins is returned; otherwise, -1 is returned. This method receives an optional second argument specifying the index from which to begin the search.

• The process of breaking a string into tokens is called tokenization. Tokens are separated from one another by delimiters, typically white-space characters such as blank, tab, newline and car- riage return. Other characters may also be used as delimiters to separate tokens.

• String method split breaks a string into its component tokens. The argument to method split

is the delimiter string—the string that determines the end of each token in the original string. Method split returns an array of strings containing the tokens.

• String method substring returns the substring from the starting index (its first argument) up to but not including the ending index (its second argument). If the ending index is greater than the length of the string, the substring returned includes the characters from the starting index to the end of the original string.

• String method anchor wraps the string that calls the method in XHTML element <a></a> with the name of the anchor supplied as the argument to the method.

• String method fixed displays text in a fixed-width font by wrapping the string that calls the method in a <tt></tt> XHTML element.

• String method strike displays struck-out text (i.e., text with a line through it) by wrapping the string that calls the method in a <strike></strike> XHTML element.

• String method sub displays subscript text by wrapping the string that calls the method in a <sub></sub> XHTML element.

• String method sup displays superscript text by wrapping the string that calls the method in a <sup></sup> XHTML element.

• String method link creates a hyperlink by wrapping the string that calls the method in XHTML element <a></a>. The target of the hyperlink (i.e, value of the href property) is the argument to the method and can be any URL.

**_Section 11.5 Date Object_** • JavaScript’s Date object provides methods for date and time manipulations.

• Date and time processing can be performed based either on the computer’s local time zone or on World Time Standard’s Coordinated Universal Time (abbreviated UTC)—formerly called Greenwich Mean Time (GMT).

• Most methods of the Date object have a local time zone and a UTC version.

• Date method parse receives as its argument a string representing a date and time and returns the number of milliseconds between midnight, January 1, 1970, and the specified date and time.

**448** Chapter 11 JavaScript: Objects

• Date method UTC returns the number of milliseconds between midnight, January 1, 1970, and the date and time specified as its arguments. The arguments to the UTC method include the re- quired year, month and date, and the optional hours, minutes, seconds and milliseconds. If any of the hours, minutes, seconds or milliseconds arguments is not specified, a zero is supplied in its place. For the hours, minutes and seconds arguments, if the argument to the right of any of these arguments is specified, that argument must also be specified (e.g., if the minutes argument is specified, the hours argument must be specified; if the milliseconds argument is specified, all the arguments must be specified).

**_Section 11.6 Boolean and Number Objects_** • JavaScript provides the Boolean and Number objects as object wrappers for boolean true/false

values and numbers, respectively.

• When a boolean value is required in a JavaScript program, JavaScript automatically creates a Boolean object to store the value.

• JavaScript programmers can create Boolean objects explicitly with the statement

var b = new Boolean( _booleanValue_ );

The argument _booleanValue_ specifies the value of the Boolean object (true or false). If _boolean- Value_ is false, 0, null, Number.NaN or the empty string (""), or if no argument is supplied, the new Boolean object contains false. Otherwise, the new Boolean object contains true.

• JavaScript automatically creates Number objects to store numeric values in a JavaScript program.

• JavaScript programmers can create a Number object with the statement

var n = new Number( _numericValue_ );

The argument _numericValue_ is the number to store in the object. Although you can explicitly cre- ate Number objects, normally they are created when needed by the JavaScript interpreter.

**_Section 11.7 document Object_** • JavaScript provides the document object for manipulating the document that is currently visible

in the browser window.

**_Section 11.8 window Object_** • JavaScript’s window object provides methods for manipulating browser windows.

**_Section 11.9 Using Cookies_** • A cookie is a piece of data that is stored on the user’s computer to maintain information about

the client during and between browser sessions.

• Cookies are accessible in JavaScript through the document object’s cookie property.

• A cookie has the syntax “identifier=value,” where _identifier_ is any valid JavaScript variable iden- tifier, and _value_ is the value of the cookie variable. When multiple cookies exist for one website, _identifier-value_ pairs are separated by semicolons in the document.cookie string.

• The expires property in a cookie string sets an expiration date, after which the web browser de- letes the cookie. If a cookie’s expiration date is not set, then the cookie expires by default after the user closes the browser window. A cookie can be deleted immediately by setting the expires property to a date and time in the past.

• The assignment operator does not overwrite the entire list of cookies, but appends a cookie to the end of it.

Terminology **449**

**_Section 11.10 Final JavaScript Example_** • window.opener always contains a reference to the window that opened the current window.

• The property innerHTML refers to the HTML code inside the current paragraph element.

• Method focus puts the window it references on top of all the others.

• The window object’s close method closes the browser window represented by the window object.

**_Section 11.11 Using JSON to Represent Objects_** • JSON (JavaScript Object Notation) is a simple way to represent JavaScript objects as strings.

• JSON was introduced in 1999 as an alternative to XML for data exchange.

• Each JSON object is represented as a list of property names and values contained in curly braces, in the following format:

{ _propertyName1_ : _value1_, _propertyName2_ : _value2_ }

• Arrays are represented in JSON with square brackets in the following format:

\[ _value1_, _value2_, _value3_ \]

• Values in JSON can be strings, numbers, JSON objects, true, false or null.

**Terminology** abs method of Math abstraction action-oriented programming language anchor method of String anonymous String object association attribute (property) behavior (method) blink method of String Boolean object ceil method of Math character charAt method of String charCodeAt method of String class close method of window code reuse components concat method of String cookie Coordinated Universal Time (UTC) cos method of Math date Date object delimiter document object E property of Math empty string encapsulation escape function

exp method of Math fixed method of String floor method of Math focus method of window fromCharCode method of String getDate method of Date getDay method of Date getFullYear method of Date getHours method of Date getMilliseconds method of Date getMinutes method of Date getMonth method of Date getSeconds method of Date getTime method of Date getTimezoneOffset method of Date getUTCDate method of Date getUTCDay method of Date getUTCFullYear method of Date getUTCHours method of Date getUTCMilliSeconds method of Date getUTCMinutes method of Date getUTCMonth method of Date getUTCSeconds method of Date Greenwich Mean Time (GMT) hexadecimal escape sequences hiding index in a string indexOf method of String information hiding inheritance

**450** Chapter 11 JavaScript: Objects

innerHTML property instantiation interface lastIndexOf method of String link method of String LN10 property of Math LN2 property of Math local time zone log method of Math LOG10E property of Math LOG2E property of Math Math object max method of Math MAX_SIZE property of Number method min method of Math MIN_SIZE property of Number NaN property of Number NEGATIVE_INFINITY property of Number Number object object object wrapper object-based programming language object-oriented design (OOD) object-oriented programming (OOP) open method of window opener property of window operation parse method of Date PI property of Math POSITIVE_INFINITY property of Number pow method of Math property round method of Math search a string sending a message to an object setDate method of Date setFullYear method of Date setHours method of Date setMilliSeconds method of Date setMinutes method of Date setMonth method of Date setSeconds method of Date setTime method of Date setUTCDate method of Date

setUTCFullYear method of Date setUTCHours method of Date setUTCMilliseconds method of Date setUTCMinutes method of Date setUTCMonth method of Date setUTCSeconds method of Date sin method of Math slice method of String special characters split method of String sqrt method of Math SQRT1_2 property of Math SQRT2 property of Math strike method of String string string constant string literal String object sub method of String substr method of String substring substring method of String sup method of String tan method of Math time token tokenization toLocaleString method of Date toLowerCase method of String toString method of Date toString method of String toUpperCase method of String toUTCString method of Date unescape function Unicode user-defined type UTC (Coordinated Universal Time) UTC method of Date valueOf method of Boolean valueOf method of Date valueOf method of Number valueOf method of String well-defined interfaces window object wrap in XHTML tags

**Self-Review Exercise 11.1** Fill in the blanks in each of the following statements:

a) Because JavaScript uses objects to perform many tasks, JavaScript is commonly referred to as a(n) .

Answers to Self-Review Exercise **451**

b) All objects have and exhibit . c) The methods of the object allow you to perform many common mathematical

calculations. d) Invoking (or calling) a method of an object is referred to as . e) String literals or string constants are written as a sequence of characters in or

. f) Indices for the characters in a string start at . g) String methods and search for the first and last occurrences of a

substring in a String, respectively. h) The process of breaking a string into tokens is called . i) String method formats a String as a hyperlink. j) Date and time processing can be performed based on the or on World Time

Standard’s . k) Date method receives as its argument a string representing a date and time,

and returns the number of milliseconds between midnight, January 1, 1970, and the specified date and time.

**Answers to Self-Review Exercise 11.1** a) object-based programming language. b) attributes, behaviors. c) Math. d) sending a mes- sage to the object. e) double quotation marks, single quotation marks. f) 0. g) indexOf, lastIn- dexOf. h) tokenization. i) link. j) computer’s local time zone, Coordinated Universal Time (UTC). k) parse.

**Exercises 11.2** Create a web page that contains four XHTML buttons. Each button, when clicked, should cause an alert dialog to display a different time or date in relation to the current time. Create a Now button that alerts the current time and date and a Yesterday button that alerts the time and date 24 hours ago. The other two buttons should alert the time and date ten years ago and one week from today.

**11.3** Write a script that tests as many of the Math library functions in Fig. 11.1 as you can. Exer- cise each of these functions by having your program display tables of return values for several argu- ment values in an XHTML textarea.

**11.4** Math method floor may be used to round a number to a specific decimal place. For exam- ple, the statement

y = Math.floor( x \* 10 + .5 ) / 10;

rounds x to the tenths position (the first position to the right of the decimal point). The statement

y = Math.floor( x \* 100 + .5 ) / 100;

rounds x to the hundredths position (i.e., the second position to the right of the decimal point). Write a script that defines four functions to round a number x in various ways:

a) roundToInteger( number )

b) roundToTenths( number )

c) roundToHundredths( number )

d) roundToThousandths( number )

For each value read, your program should display the original value, the number rounded to the nearest integer, the number rounded to the nearest tenth, the number rounded to the nearest hundredth and the number rounded to the nearest thousandth.

**452** Chapter 11 JavaScript: Objects

**11.5** Modify the solution to Exercise 11.4 to use Math method round instead of method floor.

**11.6** Write a script that uses relational and equality operators to compare two Strings input by the user through an XHTML form. Output in an XHTML textarea whether the first string is less than, equal to or greater than the second.

**11.7** Write a script that uses random number generation to create sentences. Use four arrays of strings called article, noun, verb and preposition. Create a sentence by selecting a word at random from each array in the following order: article, noun, verb, preposition, article and noun. As each word is picked, concatenate it to the previous words in the sentence. The words should be sep- arated by spaces. When the final sentence is output, it should start with a capital letter and end with a period.

The arrays should be filled as follows: the article array should contain the articles "the", "a", "one", "some" and "any"; the noun array should contain the nouns "boy", "girl", "dog", "town" and "car"; the verb array should contain the verbs "drove", "jumped", "ran", "walked" and "skipped"; the preposition array should contain the prepositions "to", "from", "over", "under" and "on".

The program should generate 20 sentences to form a short story and output the result to an XHTML textarea. The story should begin with a line reading "Once upon a time..." and end with a line reading "THE END".

**11.8** _(Limericks)_ A limerick is a humorous five-line verse in which the first and second lines rhyme with the fifth, and the third line rhymes with the fourth. Using techniques similar to those developed in Exercise 11.7, write a script that produces random limericks. Polishing this program to produce good limericks is a challenging problem, but the result will be worth the effort!

**11.9** _(Pig Latin)_ Write a script that encodes English-language phrases in pig Latin. Pig Latin is a form of coded language often used for amusement. Many variations exist in the methods used to form pig Latin phrases. For simplicity, use the following algorithm:

To form a pig Latin phrase from an English-language phrase, tokenize the phrase into an array of words using String method split. To translate each English word into a pig Latin word, place the first letter of the English word at the end of the word and add the letters “ay.” Thus the word “jump” becomes “umpjay,” the word “the” becomes “hetay” and the word “computer” becomes “omputercay.” Blanks between words remain as blanks. Assume the following: The English phrase consists of words separated by blanks, there are no punctuation marks and all words have two or more letters. Function printLatinWord should display each word. Each token (i.e., word in the sentence) is passed to method printLatinWord to print the pig Latin word. Enable the user to input the sentence through an XHTML form. Keep a running display of all the converted sen- tences in an XHTML textarea.

**11.10** Write a script that inputs a telephone number as a string in the form (555) 555-5555. The script should use String method split to extract the area code as a token, the first three digits of the phone number as a token and the last four digits of the phone number as a token. Display the area code in one text field and the seven-digit phone number in another text field.

**11.11** Write a script that inputs a line of text, tokenizes it with String method split and outputs the tokens in reverse order.

**11.12** Write a script that inputs text from an XHTML form and outputs it in uppercase and low- ercase letters.

**11.13** Write a script that inputs several lines of text and a search character and uses String method indexOf to determine the number of occurrences of the character in the text.

**11.14** Write a script based on the program in Exercise 11.13 that inputs several lines of text and uses String method indexOf to determine the total number of occurrences of each letter of the

Special Section: Challenging String-Manipulation Exercises **453**

alphabet in the text. Uppercase and lowercase letters should be counted together. Store the totals for each letter in an array, and print the values in tabular format in an XHTML textarea after the totals have been determined.

**11.15** Write a script that reads a series of strings and outputs in an XHTML textarea only those strings beginning with the character “b.”

**11.16** Write a script that reads a series of strings and outputs in an XHTML textarea only those strings ending with the characters “ed.”

**11.17** Write a script that inputs an integer code for a character and displays the corresponding character.

**11.18** Modify your solution to Exercise 11.17 so that it generates all possible three-digit codes in the range 000 to 255 and attempts to display the corresponding characters. Display the results in an XHTML textarea.

**11.19** Write your own version of the String method indexOf and use it in a script.

**11.20** Write your own version of the String method lastIndexOf and use it in a script.

**11.21** Write a program that reads a five-letter word from the user and produces all possible three- letter words that can be derived from the letters of the five-letter word. For example, the three-letter words produced from the word “bathe” include the commonly used words “ate,” “bat,” “bet,” “tab,” “hat,” “the” and “tea.” Output the results in an XHTML textarea.

**11.22** _(Printing Dates in Various Formats)_ Dates are printed in several common formats. Write a script that reads a date from an XHTML form and creates a Date object in which to store it. Then use the various methods of the Date object that convert Dates into strings to display the date in sev- eral formats.

**Special Section: Challenging String-Manipulation Exercises** The preceding exercises are keyed to the text and designed to test the reader's understanding of fundamental string-manipulation concepts. This section includes a collection of intermediate and advanced string-manipulation exercises. The reader should find these problems challenging, yet entertaining. The problems vary considerably in difficulty. Some require an hour or two of pro- gram writing and implementation. Others are useful for lab assignments that might require two or three weeks of study and implementation. Some are challenging term projects.

**11.23** _(Text Analysis)_ The availability of computers with string-manipulation capabilities has re- sulted in some rather interesting approaches to analyzing the writings of great authors. Much atten- tion has been focused on whether William Shakespeare really wrote the works attributed to him. Some scholars believe there is substantial evidence indicating that Christopher Marlowe actually penned these masterpieces. Researchers have used computers to find similarities in the writings of these two authors. This exercise examines three methods for analyzing texts with a computer.

a) Write a script that reads several lines of text from the keyboard and prints a table indi- cating the number of occurrences of each letter of the alphabet in the text. For example, the phrase

To be, or not to be: that is the question:

contains one “a,” two “b’s,” no “c’s,” etc. b) Write a script that reads several lines of text and prints a table indicating the number of

one-letter words, two-letter words, three-letter words, etc., appearing in the text. For ex- ample, the phrase

Whether 'tis nobler in the mind to suffer

contains

**454** Chapter 11 JavaScript: Objects

c) Write a script that reads several lines of text and prints a table indicating the number of occurrences of each different word in the text. The first version of your program should include the words in the table in the same order in which they appear in the text. For example, the lines

To be, or not to be: that is the question: Whether 'tis nobler in the mind to suffer

contain the word “to” three times, the word “be” twice, and the word “or” once. A more interesting (and useful) printout should then be attempted in which the words are sorted alphabetically.

**11.24** _(Check Protection)_ Computers are frequently employed in check-writing systems such as payroll and accounts payable applications. Many strange stories circulate regarding weekly pay- checks being printed (by mistake) for amounts in excess of $1 million. Incorrect amounts are print- ed by computerized check-writing systems because of human error and/or machine failure. Systems designers build controls into their systems to prevent erroneous checks from being issued.

Another serious problem is the intentional alteration of a check amount by someone who intends to cash a check fraudulently. To prevent a dollar amount from being altered, most computerized check-writing systems employ a technique called _check protection._

Checks designed for imprinting by computer contain a fixed number of spaces in which the computer may print an amount. Suppose a paycheck contains eight blank spaces in which the computer is supposed to print the amount of a weekly paycheck. If the amount is large, then all eight of those spaces will be filled, for example:

1,230.60 _(check amount)_ \-------- 12345678 _(position numbers)_

On the other hand, if the amount is less than $1000, then several of the spaces would ordi- narily be left blank. For example,

99.87 -------- 12345678

contains three blank spaces. If a check is printed with blank spaces, it is easier for someone to alter the amount of the check. To prevent a check from being altered, many check-writing systems insert _leading asterisks_ to protect the amount as follows:

\*\*\*99.87 -------- 12345678

Word length Occurrences

1 0

2 2

3 1

4 2 (including ’tis)

5 0

6 2

7 1

Special Section: Challenging String-Manipulation Exercises **455**

Write a script that inputs a dollar amount to be printed on a check, then prints the amount in check-protected format with leading asterisks if necessary. Assume that nine spaces are available for printing the amount.

**11.25** _(Writing the Word Equivalent of a Check Amount)_ Continuing the discussion in the preced- ing exercise, we reiterate the importance of designing check-writing systems to prevent alteration of check amounts. One common security method requires that the check amount be written both in numbers and spelled out in words. Even if someone is able to alter the numerical amount of the check, it is extremely difficult to change the amount in words.

Many computerized check-writing systems do not print the amount of the check in words. Perhaps the main reason for this omission is the fact that most high-level languages used in com- mercial applications do not contain adequate string-manipulation features. Another reason is that the logic for writing word equivalents of check amounts is somewhat involved.

Write a script that inputs a numeric check amount and writes the word equivalent of the amount. For example, the amount 112.43 should be written as

ONE HUNDRED TWELVE and 43/100

**11.26** _(Morse Code)_ Perhaps the most famous of all coding schemes is the Morse code, developed by Samuel Morse in 1832 for use with the telegraph system. The Morse code assigns a series of dots and dashes to each letter of the alphabet, each digit and a few special characters (e.g., period, comma, colon and semicolon). In sound-oriented systems, the dot represents a short sound and the dash rep- resents a long sound. Other representations of dots and dashes are used with light-oriented systems and signal-flag systems.

Separation between words is indicated by a space or, quite simply, by the absence of a dot or dash. In a sound-oriented system, a space is indicated by a short period of time during which no sound is transmitted. The international version of the Morse code appears in Fig. 11.18.

Write a script that reads an English-language phrase and encodes it in Morse code. Also write a program that reads a phrase in Morse code and converts the phrase into the English-language equivalent. Use one blank between each Morse-coded letter and three blanks between each Morse- coded word.

**11.27** _(Metric Conversion Program)_ Write a script that will assist the user with metric conversions. Your program should allow the user to specify the names of the units as strings (e.g., centimeters, liters, grams, for the metric system and inches, quarts, pounds, for the English system) and should respond to simple questions such as

"How many inches are in 2 meters?" "How many liters are in 10 quarts?"

Your program should recognize invalid conversions. For example, the question

"How many feet in 5 kilograms?"

is not a meaningful question because "feet" is a unit of length whereas "kilograms" is a unit of mass.

**11.28** _(Project: A Spell Checker)_ Many popular word-processing software packages have built-in spell checkers.

In this project, you are asked to develop your own spell-checker utility. We make suggestions to help get you started. You should then consider adding more capabilities. Use a computerized dictionary (if you have access to one) as a source of words.

Why do we type so many words with incorrect spellings? In some cases, it is because we sim- ply do not know the correct spelling, so we make a best guess. In some cases, it is because we trans- pose two letters (e.g., “defualt” instead of “default”). Sometimes we double-type a letter

**456** Chapter 11 JavaScript: Objects

accidentally (e.g., “hanndy” instead of “handy”). Sometimes we type a nearby key instead of the one we intended (e.g., “biryhday” instead of “birthday”). And so on.

Design and implement a spell-checker application in JavaScript. Your program should main- tain an array wordList of strings. Enable the user to enter these strings.

Your program should ask a user to enter a word. The program should then look up the word in the wordList array. If the word is present in the array, your program should print “Word is

spelled correctly.” If the word is not present in the array, your program should print “word is not spelled cor-

rectly.” Then your program should try to locate other words in wordList that might be the word the user intended to type. For example, you can try all possible single transpositions of adjacent let- ters to discover that the word “default” is a direct match to a word in wordList. Of course, this implies that your program will check all other single transpositions, such as “edfault,” “dfeault,”

Character Code Character Code

A .- T -

B -... U ..-

C -.-. V ...-

D -.. W .--

E . X -..-

F ..-. Y -.--

G --. Z --..

H ....

I .. _Digits_

J .--- 1 .----

K -.- 2 ..---

L .-.. 3 ...--

M -- 4 ....-

N -. 5 .....

O --- 6 -....

P .--. 7 --...

Q --.- 8 ---..

R .-. 9 ----.

S ... 0 -----

**Fig. 11.18** | Letters of the alphabet as expressed in international Morse code.

Special Section: Challenging String-Manipulation Exercises **457**

“deafult,” “defalut” and “defautl.” When you find a new word that matches one in wordList, print that word in a message, such as “Did you mean "default?"”

Implement other tests, such as replacing each double letter with a single letter and any other tests you can develop, to improve the value of your spell checker.

**11.29** _(Project: Crossword Puzzle Generator)_ Most people have worked a crossword puzzle, but few have ever attempted to generate one. Generating a crossword puzzle is suggested here as a string- manipulation project requiring substantial sophistication and effort.

There are many issues you must resolve to get even the simplest crossword puzzle generator program working. For example, how does one represent the grid of a crossword puzzle in the com- puter? Should one use a series of strings, or use double-subscripted arrays?

You need a source of words (i.e., a computerized dictionary) that can be directly referenced by the program. In what form should these words be stored to facilitate the complex manipulations required by the program?

The really ambitious reader will want to generate the clues portion of the puzzle, in which the brief hints for each across word and each down word are printed for the puzzle worker. Merely printing a version of the blank puzzle itself is not a simple problem.

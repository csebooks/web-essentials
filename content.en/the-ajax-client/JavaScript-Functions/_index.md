---
title: "JavaScript: Functions"
weight: 6
---

**O B J E C T I V E S** In this chapter you will learn:

■ To construct programs modularly from small pieces called functions.

■ To create new functions.

■ How to pass information between functions.

■ Simulation techniques that use random number generation.

■ How the visibility of identifiers is limited to specific regions of programs.

**_Form ever follows function._ —Louis Sullivan**

**_E pluribus unum. (One composed of many.)_ —Virgil**

**_O! call back yesterday, bid time return._ —William Shakespeare**

**_Call me Ishmael._ —Herman Melville**

**_When you call me that, smile._ —Owen Wister**

**322** Chapter 9 JavaScript: Functions **O**

**u tl**

**in e**

**9.1 Introduction** Most computer programs that solve real-world problems are much larger than the pro- grams presented in the first few chapters of this book. Experience has shown that the best way to develop and maintain a large program is to construct it from small, simple pieces, or **modules**. This technique is called **divide and conquer**_._ This chapter describes many key features of JavaScript that facilitate the design, implementation, operation and mainte- nance of large scripts.

**9.2 Program Modules in JavaScript** Modules in JavaScript are called **functions**_._ JavaScript programs are written by combining new functions that the programmer writes with “prepackaged” functions and objects avail- able in JavaScript*.* The prepackaged functions that belong to JavaScript objects (such as Math.pow and Math.round, introduced previously) are called **methods**. The term method implies that the function belongs to a particular object. We refer to functions that belong to a particular JavaScript object as methods; all others are referred to as functions.

JavaScript provides several objects that have a rich collection of methods for per- forming common mathematical calculations, string manipulations, date and time manip- ulations, and manipulations of collections of data called arrays. These objects make your job easier, because they provide many of the capabilities programmers frequently need. Some common predefined objects of JavaScript and their methods are discussed in Chapter 10, JavaScript: Arrays, and Chapter 11, JavaScript: Objects.

**Good Programming Practice 9.1** _Familiarize yourself with the rich collection of objects and methods provided by JavaScript._ 9.1

**Software Engineering Observation 9.1** _Avoid reinventing the wheel. Use existing JavaScript objects, methods and functions instead of writing new ones. This reduces script-development time and helps avoid introducing errors._ 9.1

**9.1** Introduction **9.2** Program Modules in JavaScript **9.3** Programmer-Defined Functions **9.4** Function Definitions **9.5** Random Number Generation **9.6** Example: Game of Chance **9.7** Another Example: Random Image Generator **9.8** Scope Rules **9.9** JavaScript Global Functions

**9.10** Recursion **9.11** Recursion vs. Iteration **9.12** Wrap-Up **9.13** Web Resources

Summary | Terminology | Self-Review Exercises | Answers to Self-Review Exercises | Exercises

9.2 Program Modules in JavaScript **323**

**Portability Tip 9.1** _Using the methods built into JavaScript objects helps make scripts more portable._ 9.1

You can write functions to define specific tasks that may be used at many points in a script. These functions are referred to as **programmer-defined functions**_._ The actual state- ments defining the function are written only once and are hidden from other functions.

A function is **invoked** (i.e., made to perform its designated task) by a **function call**_._ The function call specifies the function name and provides information (as **arguments**) that the called function needs to perform its task. A common analogy for this structure is the hierarchical form of management. A boss (the **calling function**, or **caller**) asks a worker (the **called function**) to perform a task and **return** (i.e., report back) the results when the task is done. The boss function does not know how the worker function performs its des- ignated tasks. The worker may call other worker functions—the boss will be unaware of this. We’ll soon see how this “hiding” of implementation details promotes good software engineering. Figure 9.1 shows the boss function communicating with several worker functions in a hierarchical manner. Note that worker1 acts as a “boss” function to worker4

and worker5, and worker4 and worker5 report back to worker1. Functions are invoked by writing the name of the function, followed by a left paren-

thesis, followed by a comma-separated list of zero or more arguments, followed by a right parenthesis. For example, a programmer desiring to convert a string stored in variable inputValue to a floating-point number and add it to variable total might write

total += parseFloat( inputValue );

When this statement executes, JavaScript function **parseFloat** converts the string in the inputValue variable to a floating-point value and adds that value to total. Variable inputValue is function parseFloat’s argument. Function parseFloat takes a string rep- resentation of a floating-point number as an argument and returns the corresponding float- ing-point numeric value. Function arguments may be constants, variables or expressions.

Methods are called in the same way, but require the name of the object to which the method belongs and a dot preceding the method name. For example, we’ve already seen the syntax document.writeln("Hi there.");. This statement calls the document object’s writeln method to output the text.

**Fig. 9.1** | Hierarchical boss-function/worker-function relationship.

boss

worker2 worker3worker1

worker5worker4

**324** Chapter 9 JavaScript: Functions

**9.3 Programmer-Defined Functions** Functions allow you to modularize a program. All variables declared in function defini- tions are **local variables**—this means that they can be accessed only in the function in which they are defined. Most functions have a list of **parameters** that provide the means for communicating information between functions via function calls. A function’s param- eters are also considered to be local variables. When a function is called, the arguments in the function call are assigned to the corresponding parameters in the function definition.

There are several reasons for modularizing a program with functions. The divide-and- conquer approach makes program development more manageable. Another reason is **soft- ware reusability** (i.e., using existing functions as building blocks to create new programs). With good function naming and definition, programs can be created from standardized functions rather than built by using customized code. For example, we did not have to define how to convert strings to integers and floating-point numbers—JavaScript already provides function parseInt to convert a string to an integer and function parseFloat to convert a string to a floating-point number. A third reason is to avoid repeating code in a program. Code that is packaged as a function can be executed from several locations in a program by calling the function.

**Software Engineering Observation 9.2** _If a function’s task cannot be expressed concisely, perhaps the function is performing too many different tasks. It is usually best to break such a function into several smaller functions._ 9.2

**9.4 Function Definitions** Each script we have presented thus far in the text has consisted of a series of statements and control structures in sequence. These scripts have been executed as the browser loads the web page and evaluates the <head> section of the page. We now consider how you can write your own customized functions and call them in a script.

**_Programmer-Defined Function square_** Consider a script (Fig. 9.2) that uses a function square to calculate the squares of the in- tegers from 1 to 10. \[_Note:_ We continue to show many examples in which the body ele- ment of the XHTML document is empty and the document is created directly by JavaScript. In later chapters, we show many examples in which JavaScripts interact with the elements in the body of a document.\]

The for statement in lines 15–17 outputs XHTML that displays the results of squaring the integers from 1 to 10. Each iteration of the loop calculates the square of the current value of control variable x and outputs the result by writing a line in the XHTML document. Function square is invoked, or called, in line 17 with the expression square(x). When program control reaches this expression, the program calls function square (defined in lines 23–26). The parentheses () represent the **function-call operator**, which has high precedence. At this point, the program makes a copy of the value of x (the argument) and program control transfers to the first line of function square. Function square receives the copy of the value of x and stores it in the parameter y. Then square

calculates y \* y. The result is passed back (returned) to the point in line 17 where square

was invoked. Lines 16–17 concatenate "The square of ", the value of x, the string " is ",

9.4 Function Definitions **325**

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 9.2: SquareInt.html --> **6** <!-- Programmer-defined function square. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>A Programmer-Defined square Function</title>

**10** <script type = "text/javascript"> **11** <!-- **12** document.writeln( "<h1>Square the numbers from 1 to 10</h1>" ); **13 14** // square the numbers from 1 to 10 **15** for ( var x = 1; x <= 10; x++ ) **16** document.writeln( "The square of " + x + " is " + **17** \+ "<br />" ); **18 19** // The following square function definition is executed **20** // only when the function is explicitly called. **21 22** // square function definition **23 24 25 26 27** // --> **28** </script> **29** </head><body></body> **30** </html>

**Fig. 9.2** | Programmer-defined function square.

square( x )

function square( y ) {

return y \* y; } // end function square

**326** Chapter 9 JavaScript: Functions

the value returned by function square and a <br /> tag and write that line of text in the XHTML document. This process is repeated 10 times.

The definition of function square (lines 23–26) shows that square expects a single parameter y. Function square uses this name in its body to manipulate the value passed to square from line 17. The **return statement** in square passes the result of the calculation y \* y back to the calling function. Note that JavaScript keyword var is not used to declare variables in the parameter list of a function.

**Common Programming Error 9.1** _Using the JavaScript var keyword to declare a variable in a function parameter list results in a JavaScript runtime error._ 9.1

In this example, function square follows the rest of the script. When the for state- ment terminates, program control does _not_ flow sequentially into function square. A function must be called explicitly for the code in its body to execute. Thus, when the for

statement terminates in this example, the script terminates.

**Good Programming Practice 9.2** _Place a blank line between function definitions to separate the functions and enhance program readability._ 9.2

**Software Engineering Observation 9.3** _Statements that are enclosed in the body of a function definition are not executed by the Java- Script interpreter unless the function is invoked explicitly._ 9.3

The format of a function definition is

function _function-name_( _parameter-list_ ) {

_declarations and statements_ }

The _function-name_ is any valid identifier. The _parameter-list_ is a comma-separated list con- taining the names of the parameters received by the function when it is called (remember that the arguments in the function call are assigned to the corresponding parameter in the function definition). There should be one argument in the function call for each parame- ter in the function definition. If a function does not receive any values, the _parameter-list_ is empty (i.e., the function name is followed by an empty set of parentheses). The _declara- tions_ and _statements_ in braces form the **function body**_._

**Common Programming Error 9.2** _Forgetting to return a value from a function that is supposed to return a value is a logic error._ 9.2

**Common Programming Error 9.3** _Placing a semicolon after the right parenthesis enclosing the parameter list of a function defini- tion results in a JavaScript runtime error._ 9.3

**Common Programming Error 9.4** _Redefining a function parameter as a local variable in the function is a logic error._ 9.4

9.4 Function Definitions **327**

**Common Programming Error 9.5** _Passing to a function an argument that is not compatible with the corresponding parameter’s expected type is a logic error and may result in a JavaScript runtime error._ 9.5

**Good Programming Practice 9.3** _Although it is not incorrect to do so, do not use the same name for an argument passed to a func- tion and the corresponding parameter in the function definition. Using different names avoids ambiguity._ 9.3

**Software Engineering Observation 9.4** _To promote software reusability, every function should be limited to performing a single, well- defined task, and the name of the function should express that task effectively. Such functions make programs easier to write, debug, maintain and modify._ 9.4

**Error-Prevention Tip 9.1** _A small function that performs one task is easier to test and debug than a larger function that performs many tasks._ 9.1

There are three ways to return control to the point at which a function was invoked. If the function does not return a result, control returns when the program reaches the function-ending right brace or by executing the statement

return;

If the function does return a result, the statement

return _expression_;

returns the value of _expression_ to the caller. When a return statement is executed, control returns immediately to the point at which the function was invoked.

**_Programmer-Defined Function maximum_** The script in our next example (Fig. 9.3) uses a programmer-defined function called max-

imum to determine and return the largest of three floating-point values. The three floating-point values are input by the user via prompt dialogs (lines 12–14).

Lines 16–18 use function parseFloat to convert the strings entered by the user to floating-point values. The statement in line 20 passes the three floating-point values to function maximum (defined in lines 28–31), which determines the largest floating-point value. This value is returned to line 20 by the return statement in function maximum. The value returned is assigned to variable maxValue. Lines 22–25 display the three floating- point values input by the user and the calculated maxValue.

Note the implementation of the function maximum (lines 28–31). The first line indi- cates that the function’s name is maximum and that the function takes three parameters (x, y and z) to accomplish its task. Also, the body of the function contains the statement which returns the largest of the three floating-point values, using two calls to the Math

object’s max method. First, method Math.max is invoked with the values of variables y and z to determine the larger of the two values. Next, the value of variable x and the result of the first call to Math.max are passed to method Math.max. Finally, the result of the second call to Math.max is returned to the point at which maximum was invoked (i.e., line 20). Note

**328** Chapter 9 JavaScript: Functions

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 9.3: maximum.html --> **6** <!-- Programmer-Defined maximum function. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Finding the Maximum of Three Values</title>

**10** <script type = "text/javascript"> **11** <!-- **12** var input1 = window.prompt( "Enter first number", "0" ); **13** var input2 = window.prompt( "Enter second number", "0" ); **14** var input3 = window.prompt( "Enter third number", "0" ); **15 16 17 18 19 20** var maxValue = ; **21 22** document.writeln( "First number: " + value1 + **23** "<br />Second number: " + value2 + **24** "<br />Third number: " + value3 + **25** "<br />Maximum is: " + maxValue ); **26 27** // maximum function definition (called from line 20) **28 29 30 31 32** // --> **33** </script> **34** </head> **35** <body> **36** <p>Click Refresh (or Reload) to run the script again</p> **37** </body> **38** </html>

**Fig. 9.3** | Programmer-defined maximum function. (Part 1 of 2.)

var value1 = parseFloat( input1 ); var value2 = parseFloat( input2 ); var value3 = parseFloat( input3 );

maximum( value1, value2, value3 )

function maximum( x, y, z ) {

return Math.max( x, Math.max( y, z ) ); } // end function maximum

9.5 Random Number Generation **329**

once again that the script terminates before sequentially reaching the definition of func- tion maximum. The statement in the body of function maximum executes only when the function is invoked from line 20.

**9.5 Random Number Generation** We now take a brief and, it is hoped, entertaining diversion into a popular programming application, namely simulation and game playing. In this section and the next, we develop a nicely structured game-playing program that includes multiple functions. The program uses most of the control structures we have studied.

There is something in the air of a gambling casino that invigorates people, from the high rollers at the plush mahogany-and-felt craps tables to the quarter poppers at the one- armed bandits. It is the **element of chance**, the possibility that luck will convert a pocketful of money into a mountain of wealth. The element of chance can be introduced through the Math object’s **random method**. (Remember, we are calling random a method because it belongs to the Math object.)

Consider the following statement:

var randomValue = Math.random();

Method random generates a floating-point value from 0.0 up to, but not including, 1.0. If random truly produces values at random, then every value from 0.0 up to, but not includ- ing, 1.0 has an equal **chance** (or **probability**) of being chosen each time random is called.

The range of values produced directly by random is often different than what is needed in a specific application. For example, a program that simulates coin tossing might require

**Fig. 9.3** | Programmer-defined maximum function. (Part 2 of 2.)

**330** Chapter 9 JavaScript: Functions

only 0 for heads and 1 for tails. A program that simulates rolling a six-sided die would require random integers in the range from 1 to 6. A program that randomly predicts the next type of spaceship, out of four possibilities, that will fly across the horizon in a video game might require random integers in the range 0–3 or 1–4.

To demonstrate method random, let us develop a program (Fig. 9.4) that simulates 20 rolls of a six-sided die and displays the value of each roll. We use the multiplication oper- ator (\*) with random as follows:

Math.floor( 1 + Math.random() \* 6 )

First, the preceding expression multiplies the result of a call to Math.random() by 6 to pro- duce a number in the range 0.0 up to, but not including, 6.0. This is called scaling the range of the random numbers. Next, we add 1 to the result to shift the range of numbers to produce a number in the range 1.0 up to, but not including, 7.0. Finally, we use method **Math.floor** to _round_ the result down to the closest integer not greater than the argument’s value—for example, 1.75 is rounded to 1. Figure 9.4 confirms that the results are in the range 1 to 6.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 9.4: RandomInt.html --> **6** <!-- Random integers, shifting and scaling. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Shifted and Scaled Random Integers</title>

**10** <style type = "text/css"> **11** table { width: 50%; **12** border: 1px solid gray; **13** text-align: center } **14** </style> **15** <script type = "text/javascript"> **16** <!-- **17** var value; **18 19** document.writeln( "<table>" ); **20** document.writeln( "<caption>Random Numbers</caption><tr>" ); **21 22** for ( var i = 1; i <= 20; i++ ) **23** { **24 25** document.writeln( "<td>" + value + "</td>" ); **26 27** // start a new table row every 5 entries **28** if ( i % 5 == 0 && i != 20 ) **29** document.writeln( "</tr><tr>" ); **30** } // end for **31 32** document.writeln( "</tr></table>" );

**Fig. 9.4** | Random integers, shifting and scaling. (Part 1 of 2.)

value = Math.floor( 1 + Math.random() \* 6 );

9.5 Random Number Generation **331**

To show that these numbers occur with approximately equal likelihood, let us simu- late 6000 rolls of a die with the program in Fig. 9.5. Each integer from 1 to 6 should appear approximately 1000 times. Use your browser’s **Refresh** (or **Reload**) button to exe- cute the script again.

**33** // --> **34** </script> **35** </head> **36** <body> **37** <p>Click Refresh (or Reload) to run the script again</p> **38** </body> **39** </html>

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 9.5: RollDie.html --> **6** <!-- Rolling a Six-Sided Die 6000 times. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml">

**Fig. 9.5** | Rolling a six-sided die 6000 times. (Part 1 of 3.)

**Fig. 9.4** | Random integers, shifting and scaling. (Part 2 of 2.)

**332** Chapter 9 JavaScript: Functions

**8** <head> **9** <title>Roll a Six-Sided Die 6000 Times</title>

**10** <script type = "text/javascript"> **11** <!-- **12** var frequency1 = 0; **13** var frequency2 = 0; **14** var frequency3 = 0; **15** var frequency4 = 0; **16** var frequency5 = 0; **17** var frequency6 = 0; **18** var face; **19 20** // roll die 6000 times and accumulate results **21** for ( var roll = 1; roll <= 6000; roll++ ) **22 23 24 25** switch ( face ) **26** { **27** case 1: **28** ++frequency1; **29** break; **30** case 2: **31** ++frequency2; **32** break; **33** case 3: **34** ++frequency3; **35** break; **36** case 4: **37** ++frequency4; **38** break; **39** case 5: **40** ++frequency5; **41** break; **42** case 6: **43** ++frequency6; **44** break; **45** } // end switch **46** } // end for **47 48** document.writeln( "<table border = \\"1\\">" ); **49** document.writeln( "<thead><th>Face</th>" + **50** "<th>Frequency</th></thead>" ); **51** document.writeln( "<tbody><tr><td>1</td><td>" + **52** frequency1 + "</td></tr>" ); **53** document.writeln( "<tr><td>2</td><td>" + frequency2 + **54** "</td></tr>" ); **55** document.writeln( "<tr><td>3</td><td>" + frequency3 + **56** "</td></tr>" ); **57** document.writeln( "<tr><td>4</td><td>" + frequency4 + **58** "</td></tr>" ); **59** document.writeln( "<tr><td>5</td><td>" + frequency5 + **60** "</td></tr>" );

**Fig. 9.5** | Rolling a six-sided die 6000 times. (Part 2 of 3.)

{ face = Math.floor( 1 + Math.random() \* 6 );

9.5 Random Number Generation **333**

As the output of the program shows, we used Math method random and the scaling and shifting techniques of the previous example to simulate the rolling of a six-sided die. Note that we used nested control structures to determine the number of times each side of the six-sided die occurred. Lines 12–17 declare and initialize counter variables to keep track of the number of times each of the six die values appears. Line 18 declares a variable to store the face value of the die. The for statement in lines 21–46 iterates 6000 times. During each iteration of the loop, line 23 produces a value from 1 to 6, which is stored in

**61** document.writeln( "<tr><td>6</td><td>" + frequency6 + **62** "</td></tr></tbody></table>" ); **63** // --> **64** </script> **65** </head> **66** <body> **67** <p>Click Refresh (or Reload) to run the script again</p> **68** </body> **69** </html>

**Fig. 9.5** | Rolling a six-sided die 6000 times. (Part 3 of 3.)

**334** Chapter 9 JavaScript: Functions

face. The nested switch statement in lines 25–45 uses the face value that was randomly chosen as its controlling expression. Based on the value of face, the program increments one of the six counter variables during each iteration of the loop. Note that no default

case is provided in this switch statement, because the statement in line 23 produces only the values 1, 2, 3, 4, 5 and 6. In this example, the default case would never execute. After we study Arrays in Chapter 10, we discuss a way to replace the entire switch statement in this program with a single-line statement.

Run the program several times, and observe the results. Note that the program pro- duces different random numbers each time the script executes, so the results should vary.

The values returned by random are always in the range

0.0 ≤ Math.random() < 1.0

Previously, we demonstrated the statement

face = Math.floor( 1 + Math.random() \* 6 );

which simulates the rolling of a six-sided die. This statement always assigns an integer (at random) to variable face, in the range 1 ≤ face ≤ 6. Note that the width of this range (i.e., the number of consecutive integers in the range) is 6, and the starting number in the range is 1. Referring to the preceding statement, we see that the width of the range is determined by the number used to scale random with the multiplication operator (6 in the preceding statement) and that the starting number of the range is equal to the number (1 in the pre- ceding statement) added to Math.random() \* 6. We can generalize this result as

face = Math.floor( a + Math.random() \* b );

where a is the **shifting value** (which is equal to the first number in the desired range of consecutive integers) and b is the **scaling factor** (which is equal to the width of the desired range of consecutive integers). In this chapter’s exercises, you’ll see that it’s possible to choose integers at random from sets of values other than ranges of consecutive integers.

**9.6 Example: Game of Chance** One of the most popular games of chance is a dice game known as craps, which is played in casinos and back alleys throughout the world. The rules of the game are straightforward:

_A player rolls two dice. Each die has six faces. These faces contain one, two, three, four, five and six spots, respectively. After the dice have come to rest, the sum of the spots on the two upward faces is calculated. If the sum is 7 or 11 on the first throw, the player wins. If the sum is 2, 3 or 12 on the first throw (called “craps”), the player loses (i.e., the “house” wins). If the sum is 4, 5, 6, 8, 9 or 10 on the first throw, that sum becomes the player’s “point.” To win, you must continue rolling the dice until you “make your point” (i.e., roll your point value). You lose by rolling a 7 before making the point._

The script in Fig. 9.6 simulates the game of craps. Note that the player must roll two dice on the first and all subsequent rolls. When you

execute the script, click the **Roll Dice** button to play the game. A message below the **Roll Dice** button displays the status of the game after each roll.

Until now, all user interactions with scripts have been through either a prompt dialog (in which the user types an input value for the program) or an alert dialog (in which a

9.6 Example: Game of Chance **335**

message is displayed to the user, and the user can click **OK** to dismiss the dialog). Although these dialogs are valid ways to receive input from a user and to display messages, they are fairly limited in their capabilities. A prompt dialog can obtain only one value at a time from the user, and a message dialog can display only one message.

More frequently, multiple inputs are received from the user at once via an XHTML form (such as one in which the user enters name and address information) or to display many pieces of data at once (e.g., the values of the dice, the sum of the dice and the point in this example). To begin our introduction to more elaborate user interfaces, this program uses an XHTML form (discussed in Chapter 4) and a new graphical user interface con- cept—GUI **event handling**. This is our first example in which the JavaScript executes in response to the user’s interaction with a GUI component in an XHTML form. This inter- action causes an event. Scripts are often used to respond to events.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 9.6: Craps.html --> **6** <!-- Craps game simulation. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Program that Simulates the Game of Craps</title>

**10** <style type = "text/css"> **11** table { text-align: right } **12** body { font-family: arial, sans-serif } **13** div.red { color: red } **14** </style> **15** <script type = "text/javascript"> **16** <!-- **17** // variables used to test the state of the game **18** var WON = 0; **19** var LOST = 1; **20** var CONTINUE_ROLLING = 2; **21 22** // other variables used in program **23** var firstRoll = true; // true if current roll is first **24** var sumOfDice = 0; // sum of the dice **25** var myPoint = 0; // point if no win/loss on first roll **26** var gameStatus = CONTINUE_ROLLING; // game not over yet **27 28** // process one roll of the dice **29** function play() **30** { **31** // get the point field on the page **32** var point = document.getElementById( "pointfield" ); **33 34** // get the status div on the page **35** var statusDiv = document.getElementById( "status" ); **36** if ( firstRoll ) // first roll of the dice **37** {

**Fig. 9.6** | Craps game simulation. (Part 1 of 4.)

**336** Chapter 9 JavaScript: Functions

**38** sumOfDice = rollDice(); **39 40** switch ( sumOfDice ) **41** { **42** case 7: case 11: // win on first roll **43** gameStatus = WON; **44** // clear point field **45** point.value = ""; **46** break; **47** case 2: case 3: case 12: // lose on first roll **48** gameStatus = LOST; **49** // clear point field **50** point.value = ""; **51** break; **52** default: // remember point **53** gameStatus = CONTINUE_ROLLING; **54** myPoint = sumOfDice; **55** point.value = myPoint; **56** firstRoll = false; **57** } // end switch **58** } // end if **59** else **60** { **61** sumOfDice = rollDice(); **62 63** if ( sumOfDice == myPoint ) // win by making point **64** gameStatus = WON; **65** else **66** if ( sumOfDice == 7 ) // lose by rolling 7 **67** gameStatus = LOST; **68** } // end else **69 70** if ( gameStatus == CONTINUE_ROLLING ) **71** statusDiv.innerHTML = "Roll again"; **72** else **73** { **74** if ( gameStatus == WON ) **75** statusDiv.innerHTML = "Player wins. " + **76** "Click Roll Dice to play again."; **77** else **78** statusDiv.innerHTML = "Player loses. " + **79** "Click Roll Dice to play again."; **80 81** firstRoll = true; **82** } // end else **83** } // end function play **84 85** // roll the dice **86** function rollDice() **87** { **88** var die1; **89** var die2; **90** var workSum;

**Fig. 9.6** | Craps game simulation. (Part 2 of 4.)

9.6 Example: Game of Chance **337**

**91 92** die1 = Math.floor( 1 + Math.random() \* 6 ); **93** die2 = Math.floor( 1 + Math.random() \* 6 ); **94** workSum = die1 + die2; **95 96** document.getElementById( "die1field" ).value = die1; **97** document.getElementById( "die2field" ).value = die2; **98** document.getElementById( "sumfield" ).value = workSum; **99 100** return workSum; **101** } // end function rollDice **102** // --> **103** </script> **104** </head> **105** <body> **106** <form action = ""> **107** <table> **108** <caption>Craps</caption> **109** <tr><td>Die 1</td> **110** <td><input id = "die1field" type = "text" /> **111** </td></tr> **112** <tr><td>Die 2</td> **113** <td><input id = "die2field" type = "text" /> **114** </td></tr> **115** <tr><td>Sum</td> **116** <td><input id = "sumfield" type = "text" /> **117** </td></tr> **118** <tr><td>Point</td> **119** <td><input id = "pointfield" type = "text" /> **120** </td></tr> **121** <tr><td /><td><input type = "button" value = "Roll Dice" **122** onclick = "play()" /></td></tr> **123** </table> **124** <div id = "status" class = "red"> **125** Click the Roll Dice button to play</div> **126** </form> **127** </body> **128** </html>

**Fig. 9.6** | Craps game simulation. (Part 3 of 4.)

**338** Chapter 9 JavaScript: Functions

Before we discuss the script code, we discuss the body element (lines 105–126) of the XHTML document. The GUI components in this section are used extensively in the script.

Line 106 begins the definition of an XHTML form element. The XHTML standard requires that every form contain an action attribute, but because this form does not post its information to a web server, the empty string ("") is used.

asdfjkfdaskl

**Fig. 9.6** | Craps game simulation. (Part 4 of 4.)

9.6 Example: Game of Chance **339**

In this example, we have decided to place the form’s GUI components in an XHTML table element, so line 107 begins the definition of the XHTML table. Lines 109–120 create four table rows. Each row contains a left cell with a text label and an input element in the right cell.

Four input fields (lines 110, 113, 116 and 119) are created to display the value of the first die, the second die, the sum of the dice and the current point value, if any. Their id attributes are set to die1field, die2field, sumfield, and pointfield, respectively. The id attribute can be used to apply CSS styles and to enable script code to refer to an element in an XHTML document. Because the id attribute, if specified, must have a unique value, JavaScript can reliably refer to any single element via its id attribute. We see how this is done in a moment.

Lines 121–122 create a fifth row with an empty cell in the left column before the **Roll Dice** button. The button’s **onclick attribute** indicates the action to take when the user of the XHTML document clicks the **Roll Dice** button. In this example, clicking the button causes a call to function play.

This style of programming is known as **event-driven programming**—the user interacts with a GUI component, the script is notified of the event and the script processes the event. The user’s interaction with the GUI “drives” the program. The button click is known as the **event**. The function that is called when an event occurs is known as an **event-handling function** or **event handler**. When a GUI event occurs in a form, the browser calls the spec- ified event-handling function. Before any event can be processed, each GUI component must know which event-handling function will be called when a particular event occurs. Most XHTML GUI components have several different event types. The event model is dis- cussed in detail in Chapter 13, JavaScript: Events. By specifying onclick = "play()" for the **Roll Dice** button, we instruct the browser to **listen for events** (button-click events in par- ticular). This **registers the event handler** for the GUI component, causing the browser to begin listening for the click event on the component. If no event handler is specified for the **Roll Dice** button, the script will not respond when the user presses the button.

Lines 123–125 end the table and form elements, respectively. After the table, a div

element is created with an id attribute of "status". This element will be updated by the script to display the result of each roll to the user. A style declaration in line 13 colors the text contained in this div red.

The game is reasonably involved. The player may win or lose on the first roll, or may win or lose on any subsequent roll. Lines 18–20 create variables that define the three game states—game won, game lost and continue rolling the dice. Unlike many other program- ming languages, JavaScript does not provide a mechanism to define a **constant** (i.e., a vari- able whose value cannot be modified). For this reason, we use all capital letters for these variable names, to indicate that we do not intend to modify their values and to make them stand out in the code—a common industry practice for genuine constants.

**Good Programming Practice 9.4** _Use only uppercase letters (with underscores between words) in the names of variables that should be used as constants. This format makes such variables stand out in a program._ 9.4

**Good Programming Practice 9.5** _Use meaningfully named variables rather than literal values (such as 2) to make programs more readable._ 9.5

**340** Chapter 9 JavaScript: Functions

Lines 23–26 declare several variables that are used throughout the script. Variable firstRoll indicates whether the next roll of the dice is the first roll in the current game. Variable sumOfDice maintains the sum of the dice from the last roll. Variable myPoint

stores the point if the player does not win or lose on the first roll. Variable gameStatus

keeps track of the current state of the game (WON, LOST or CONTINUE_ROLLING). We define a function rollDice (lines 86–101) to roll the dice and to compute and

display their sum. Function rollDice is defined once, but is called from two places in the program (lines 38 and 61). Function rollDice takes no arguments, so it has an empty parameter list. Function rollDice returns the sum of the two dice.

The user clicks the **Roll Dice** button to roll the dice. This action invokes function play

(lines 29–83) of the script. Lines 32 and 35 create two new variables with objects repre- senting elements in the XHTML document using the document object’s **getElementById method**. The getElementById method, given an id as an argument, finds the XHTML element with a matching id attribute and returns a JavaScript object representing the ele- ment. Line 32 stores an object representing the pointfield input element (line 119) in the variable point. Line 35 gets an object representing the status div from line 124. In a moment, we show how you can use these objects to manipulate the XHTML document.

Function play checks the variable firstRoll (line 36) to determine whether it is true or false. If true, the roll is the first roll of the game. Line 38 calls rollDice, which picks two random values from 1 to 6, displays the value of the first die, the value of the second die and the sum of the dice in the first three text fields and returns the sum of the dice. (We discuss function rollDice in detail shortly.) After the first roll (if firstRoll is false), the nested switch statement in lines 40–57 determines whether the game is won or lost, or whether it should continue with another roll. After the first roll, if the game is not over, sumOfDice is saved in myPoint and displayed in the text field point in the XHTML form.

Note how the text field’s value is changed in lines 45, 50 and 55. The object stored in the variable point allows access to the pointfield text field’s contents. The expression point.value accesses the **value property** of the text field referred to by point. The value property specifies the text to display in the text field. To access this property, we specify the object representing the text field (point), followed by a **dot** (**.**) and the name of the property to access (value). This technique for accessing properties of an object (also used to access methods as in Math.pow) is called **dot notation**. We discuss using scripts to access elements in an XHTML page in more detail in Chapter 13.

The program proceeds to the nested if…else statement in lines 70–82, which uses the statusDiv variable to update the div that displays the game status. Using the object’s **innerHTML property**, we set the text inside the div to reflect the most recent status. In lines 71, 75–76 and 78–79, we set the div’s innerHTML to

Roll again.

if gameStatus is equal to CONTINUE_ROLLING, to

Player wins. Click Roll Dice to play again.

if gameStatus is equal to WON and to

Player loses. Click Roll Dice to play again.

if gameStatus is equal to LOST. If the game is won or lost, line 81 sets firstRoll to true

to indicate that the next roll of the dice begins the next game.

9.7 Another Example: Random Image Generator **341**

The program then waits for the user to click the button **Roll Dice** again. Each time the user clicks **Roll Dice**, the program calls function play, which, in turn, calls the rollDice

function to produce a new value for sumOfDice. If sumOfDice matches myPoint, gameStatus is set to WON, the if…else statement in lines 70–82 executes and the game is complete. If sum is equal to 7, gameStatus is set to LOST, the if…else statement in lines 70–82 executes and the game is complete. Clicking the **Roll Dice** button starts a new game. The program updates the four text fields in the XHTML form with the new values of the dice and the sum on each roll, and updates the text field point each time a new game begins.

Function rollDice (lines 86–101) defines its own local variables die1, die2 and workSum (lines 88–90). Because they are defined inside the rollDice function, these vari- ables are accessible only inside that function. Lines 92–93 pick two random values in the range 1 to 6 and assign them to variables die1 and die2, respectively. Lines 96–98 once again use the document’s getElementById method to find and update the correct input elements with the values of die1, die2 and workSum. Note that the integer values are con- verted automatically to strings when they are assigned to each text field’s value property. Line 100 returns the value of workSum for use in function play.

**Software Engineering Observation 9.5** _Variables that are declared inside the body of a function are known only in that function. If the same variable names are used elsewhere in the program, they will be entirely separate variables in memory._ 9.5

Note the use of the various program-control mechanisms. The craps program uses two functions—play and rollDice—and the switch, if…else and nested if statements. Note also the use of multiple case labels in the switch statement to execute the same state- ments (lines 42 and 47). In the exercises at the end of this chapter, we investigate various interesting characteristics of the game of craps.

**Error-Prevention Tip 9.2** _Initializing variables when they are declared in functions helps avoid incorrect results and in- terpreter messages warning of uninitialized data._ 9.2

**9.7 Another Example: Random Image Generator** Web content that varies randomly adds dynamic, interesting effects to a page. In the next example, we build a **random image generator**, a script that displays a randomly selected image every time the page that contains the script is loaded.

For the script in Fig. 9.7 to function properly, the directory containing the file RandomPicture.html must also contain seven images with integer filenames (i.e., 1.gif, 2.gif, …, 7.gif). The web page containing this script displays one of these seven images, selected at random, each time the page loads.

Lines 12–13 randomly select an image to display on a web page. This docu-

ment.write statement creates an image tag in the web page with the src attribute set to a random integer from 1 to 7, concatenated with ".gif". Thus, the script dynamically sets the source of the image tag to the name of one of the image files in the current directory.

**342** Chapter 9 JavaScript: Functions

**9.8 Scope Rules** Chapters 6–8 used identifiers for variable names. The attributes of variables include name, value and data type (e.g., string, number or boolean). We also use identifiers as names for user-defined functions. Each identifier in a program also has a scope.

The **scope** of an identifier for a variable or function is the portion of the program in which the identifier can be referenced. **Global variables** or **script-level variables** that are declared in the head element are accessible in any part of a script and are said to have **global scope**. Thus every function in the script can potentially use the variables.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 9.7: RandomPicture.html --> **6** <!-- Random image generation using Math.random. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Random Image Generator</title>

**10** <script type = "text/javascript"> **11** <!-- **12 13 14** // --> **15** </script> **16** </head> **17** <body> **18** <p>Click Refresh (or Reload) to run the script again</p> **19** </body> **20** </html>

**Fig. 9.7** | Random image generation using Math.random.

document.write ( "<img src = \\"" + Math.floor( 1 + Math.random() \* 7 ) + ".gif\\" />" );

9.8 Scope Rules **343**

Identifiers declared inside a function have **function** (or **local**) **scope** and can be used only in that function. Function scope begins with the opening left brace ({) of the function in which the identifier is declared and ends at the terminating right brace (}) of the func- tion. Local variables of a function and function parameters have function scope. If a local variable in a function has the same name as a global variable, the global variable is “hidden” from the body of the function.

**Good Programming Practice 9.6** _Avoid local-variable names that hide global-variable names. This can be accomplished by simply avoiding the use of duplicate identifiers in a script._ 9.6

The script in Fig. 9.8 demonstrates the **scope rules** that resolve conflicts between global variables and local variables of the same name. This example also demonstrates the **onload event** (line 52), which calls an event handler (start) when the <body> of the XHTML document is completely loaded into the browser window.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 9.8: scoping.html --> **6** <!-- Scoping example. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>A Scoping Example</title>

**10** <script type = "text/javascript"> **11** <!-- **12** // global variable **13 14** function start() **15** { **16** // variable local to function start **17 18** document.writeln( "local x in start is " + x ); **19 20** functionA(); // functionA has local x **21** functionB(); // functionB uses global variable x **22** functionA(); // functionA reinitializes local x **23** functionB(); // global variable x retains its value **24 25** document.writeln( **26** "<p>local x in start is " + x + "</p>" ); **27** } // end function start **28 29** function functionA() **30** { **31** // initialized each time **32** // functionA is called **33 34** document.writeln( "<p>local x in functionA is " + **35** x + " after entering functionA" );

**Fig. 9.8** | Scoping example. (Part 1 of 2.)

var x = 1;

var x = 5;

var x = 25;

**344** Chapter 9 JavaScript: Functions

Global variable x (line 12) is declared and initialized to 1. This global variable is hidden in any block (or function) that declares a variable named x. Function start (line 14–27) declares a local variable x (line 16) and initializes it to 5. This variable is output in a line of XHTML text to show that the global variable x is hidden in start. The script defines two other functions—functionA and functionB—that each take no arguments and return nothing. Each function is called twice from function start.

Function functionA defines local variable x (line 31) and initializes it to 25. When functionA is called, the variable is output in a line of XHTML text to show that the global variable x is hidden in functionA; then the variable is incremented and output in a line of XHTML text again before the function is exited. Each time this function is called, local variable x is re-created and initialized to 25.

**36** ++x; **37** document.writeln( "<br />local x in functionA is " + **38** x + " before exiting functionA" + "</p>" ); **39** } // end functionA **40 41** function functionB() **42** { **43** document.writeln( "<p>global variable x is " + x + **44** " on entering functionB" ); **45** x \*= 10; **46** document.writeln( "<br />global variable x is " + **47** x + " on exiting functionB" + "</p>" ); **48** } // end functionB **49** // --> **50** </script> **51** </head> **52 53** </html>

**Fig. 9.8** | Scoping example. (Part 2 of 2.)

<body onload = "start()"></body>

9.9 JavaScript Global Functions **345**

Function functionB does not declare any variables. Therefore, when it refers to vari- able x, the global variable x is used. When functionB is called, the global variable is output in a line of XHTML text, multiplied by 10 and output in a line of XHTML text again before the function is exited. The next time function functionB is called, the global vari- able has its modified value, 10, which again gets multiplied by 10, and 100 is output. Finally, the program outputs local variable x in start in a line of XHTML text again, to show that none of the function calls modified the value of x in start, because the func- tions all referred to variables in other scopes.

**9.9 JavaScript Global Functions** JavaScript provides seven global functions. We have already used two of these functions— parseInt and parseFloat. The global functions are summarized in Fig. 9.9.

Actually, the global functions in Fig. 9.9 are all part of JavaScript’s **Global object**. The Global object contains all the global variables in the script, all the user-defined functions in the script and all the functions listed in Fig. 9.9. Because global functions and user- defined functions are part of the Global object, some JavaScript programmers refer to these functions as methods. We use the term method only when referring to a function that is called for a particular object (e.g., Math.random()). As a JavaScript programmer, you do not need to use the Global object directly; JavaScript references it for you.

Global function Description

escape Takes a string argument and returns a string in which all spaces, punctua- tion, accent characters and any other character that is not in the ASCII character set (see Appendix D, ASCII Character Set) are encoded in a hexadecimal format (see Appendix E, Number Systems) that can be rep- resented on all platforms.

eval Takes a string argument representing JavaScript code to execute. The JavaScript interpreter evaluates the code and executes it when the eval

function is called. This function allows JavaScript code to be stored as strings and executed dynamically. \[_Note:_ It is considered a serious security risk to use eval to process any data entered by a user because a malicious user could exploit this to run dangerous code.\]

isFinite Takes a numeric argument and returns true if the value of the argument is not NaN, Number.POSITIVE_INFINITY or Number.NEGATIVE_INFINITY (values that are not numbers or numbers outside the range that JavaScript supports)—otherwise, the function returns false.

isNaN Takes a numeric argument and returns true if the value of the argument is not a number; otherwise, it returns false. The function is commonly used with the return value of parseInt or parseFloat to determine whether the result is a proper numeric value.

**Fig. 9.9** | JavaScript global functions. (Part 1 of 2.)

**346** Chapter 9 JavaScript: Functions

**9.10 Recursion** The programs we have discussed thus far are generally structured as functions that call one another in a disciplined, hierarchical manner. A **recursive function** is a function that calls _itself_, either directly, or indirectly through another function. **Recursion** is an important topic discussed at length in computer science courses. In this section, we present a simple example of recursion.

We consider recursion conceptually first; then we examine several programs con- taining recursive functions. Recursive problem-solving approaches have a number of ele- ments in common. A recursive function is called to solve a problem. The function actually knows how to solve only the simplest case(s), or **base case(s)**. If the function is called with a base case, the function returns a result. If the function is called with a more complex problem, it divides the problem into two conceptual pieces—a piece that the function knows how to process (the base case) and a piece that the function does not know how to process. To make recursion feasible, the latter piece must resemble the original problem, but be a simpler or smaller version it. Because this new problem looks like the original problem, the function invokes (calls) a fresh copy of itself to go to work on the smaller problem; this invocation is referred to as a **recursive call**, or the **recursion step**. The recur- sion step also normally includes the keyword return, because its result will be combined with the portion of the problem the function knew how to solve to form a result that will be passed back to the original caller.

parseFloat Takes a string argument and attempts to convert the beginning of the string into a floating-point value. If the conversion is unsuccessful, the function returns NaN; otherwise, it returns the converted value (e.g., parseFloat( "abc123.45" ) returns NaN, and parseFloat( "123.45abc" )

returns the value 123.45).

parseInt Takes a string argument and attempts to convert the beginning of the string into an integer value. If the conversion is unsuccessful, the func- tion returns NaN; otherwise, it returns the converted value (e.g., parseInt( "abc123" ) returns NaN, and parseInt( "123abc" ) returns the integer value 123). This function takes an optional second argument, from 2 to 36, specifying the **radix** (or **base**) of the number. Base 2 indi- cates that the first argument string is in **binary** format, base 8 indicates that the first argument string is in **octal** format and base 16 indicates that the first argument string is in **hexadecimal** format. See Appendix E, Number Systems, for more information on binary, octal and hexadecimal numbers.

unescape Takes a string as its argument and returns a string in which all characters previously encoded with escape are decoded.

Global function Description

**Fig. 9.9** | JavaScript global functions. (Part 2 of 2.)

9.10 Recursion **347**

The recursion step executes while the original call to the function is still open (i.e., it has not finished executing). The recursion step can result in many more recursive calls as the function divides each new subproblem into two conceptual pieces. For the recursion eventually to terminate, each time the function calls itself with a simpler version of the original problem, the sequence of smaller and smaller problems must converge on the base case. At that point, the function recognizes the base case, returns a result to the previous copy of the function, and a sequence of returns ensues up the line until the original func- tion call eventually returns the final result to the caller. This process sounds exotic when compared with the conventional problem solving we have performed to this point.

As an example of these concepts at work, let us write a recursive program to perform a popular mathematical calculation. The factorial of a nonnegative integer _n,_ written _n_! (and pronounced “_n_ factorial”), is the product

_n_ · (_n_ – 1) · (_n_ – 2) · … · 1

where 1! is equal to 1 and 0! is defined as 1. For example, 5! is the product 5 · 4 · 3 · 2 · 1, which is equal to 120.

The factorial of an integer (number in the following example) greater than or equal to zero can be calculated **iteratively** (nonrecursively) using a for statement, as follows:

var factorial = 1;

for ( var counter = number; counter >= 1; --counter ) factorial \*= counter;

A recursive definition of the factorial function is arrived at by observing the following relationship:

_n_! = _n_ · (_n_ – 1)!

For example, _5!_ is clearly equal to 5 \* 4!, as is shown by the following equations:

5! = 5 · 4 · 3 · 2 · 1 5! = 5 · (4 · 3 · 2 · 1) 5! = 5 · (4!)

The evaluation of 5! would proceed as shown in Fig. 9.10. Figure 9.10 (a) shows how the succession of recursive calls proceeds until 1! is evaluated to be 1, which terminates the recursion. Figure 9.10 (b) shows the values returned from each recursive call to its caller until the final value is calculated and returned.

Figure 9.11 uses recursion to calculate and print the factorials of the integers 0 to 10. The recursive function factorial first tests (line 24) whether a terminating condition is true, i.e., whether number is less than or equal to 1. If so, factorial returns 1, no further recursion is necessary and the function returns. If number is greater than 1, line 27 expresses the problem as the product of number and the value returned by a recursive call to factorial evaluating the factorial of number - 1. Note that factorial( number - 1 )

is a simpler problem than the original calculation, factorial( number ). Function factorial (lines 22–28) receives as its argument the value for which to cal-

culate the factorial. As can be seen in the screen capture in Fig. 9.11, factorial values become large quickly.

**348** Chapter 9 JavaScript: Functions

**Fig. 9.10** | Recursive evaluation of 5!.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 9.11: FactorialTest.html --> **6** <!-- Factorial calculation with a recursive function. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Recursive Factorial Function</title>

**10** <script type = "text/javascript"> **11** <!-- **12** document.writeln( "<h1>Factorials of 1 to 10</h1>" ); **13** document.writeln( "<table>" ); **14 15** for ( var i = 0; i <= 10; i++ ) **16** document.writeln( "<tr><td>" + i + "!</td><td>" + **17** \+ "</td></tr>" ); **18 19** document.writeln( "</table>" ); **20 21** // Recursive definition of function factorial **22 23 24 25 26 27 28**

**Fig. 9.11** | Factorial calculation with a recursive function. (Part 1 of 2.)

(a) Sequence of recursive calls.

5 \* 4!

4 \* 3!

3 \* 2!

2 \* 1!

5!

1

(b) Values returned from each recursive call.

Final value = 120

5! = 5 \* 24 = 120 is returned

4! = 4 \* 6 = 24 is returned

3! = 3 \* 2 = 6 is returned

2! = 2 \* 1 = 2 is returned

1 is returned

5 \* 4!

4 \* 3!

3 \* 2!

2 \* 1!

5!

1

factorial( i )

function factorial( number ) {

if ( number <= 1 ) // base case return 1;

else return number \* factorial( number - 1 );

} // end function factorial

9.11 Recursion vs. Iteration **349**

**Common Programming Error 9.6** \_Forgetting to return a value from a recursive function when one is needed results in a logic error.\_9.6

**Common Programming Error 9.7** _Omitting the base case and writing the recursion step incorrectly so that it does not converge on the base case are both errors that cause infinite recursion, eventually exhausting memory. This situation is analogous to the problem of an infinite loop in an iterative (nonrecursive) solution._ 9.7

**Error-Prevention Tip 9.3** _Internet Explorer displays an error message when a script seems to be going into infinite recur- sion. Firefox simply terminates the script after detecting the problem. This allows the user of the web page to recover from a script that contains an infinite loop or infinite recursion._ 9.3

**9.11 Recursion vs. Iteration** In the preceding section, we studied a function that can easily be implemented either re- cursively or iteratively. In this section, we compare the two approaches and discuss why you might choose one approach over the other in a particular situation.

Both iteration and recursion are based on a control statement: Iteration uses a repeti- tion statement (e.g., for, while or do…while); recursion uses a selection statement (e.g., if, if…else or switch). Both iteration and recursion involve repetition: Iteration explic-

**29** // --> **30** </script> **31** </head><body></body> **32** </html>

**Fig. 9.11** | Factorial calculation with a recursive function. (Part 2 of 2.)

**350** Chapter 9 JavaScript: Functions

itly uses a repetition statement; recursion achieves repetition through repeated function calls. Iteration and recursion each involve a termination test: Iteration terminates when the loop-continuation condition fails; recursion terminates when a base case is recognized. Iteration both with counter-controlled repetition and with recursion gradually approaches termination: Iteration keeps modifying a counter until the counter assumes a value that makes the loop-continuation condition fail; recursion keeps producing simpler versions of the original problem until the base case is reached. Both iteration and recursion can occur infinitely: An infinite loop occurs with iteration if the loop-continuation test never becomes false; infinite recursion occurs if the recursion step does not reduce the problem each time via a sequence that converges on the base case or if the base case is incorrect.

One negative aspect of recursion is that function calls require a certain amount of time and memory space not directly spent on executing program instructions. This is known as function-call overhead. Because recursion uses repeated function calls, this overhead greatly affects the performance of the operation. In many cases, using repetition statements in place of recursion is more efficient. However, some problems can be solved more ele- gantly (and more easily) with recursion.

**Software Engineering Observation 9.6** _Any problem that can be solved recursively can also be solved iteratively (nonrecursively). A recursive approach is normally chosen in preference to an iterative approach when the recursive approach more naturally mirrors the problem and results in a program that is easier to understand and debug. Another reason to choose a recursive solution is that an iterative solution may not be apparent._ 9.6

**Performance Tip 9.1** _Avoid using recursion in performance-oriented situations. Recursive calls take time and consume additional memory._ 9.1

**Common Programming Error 9.8** _Accidentally having a nonrecursive function call itself, either directly, or indirectly through an- other function, can cause infinite recursion._ 9.8

In addition to the Factorial function examnple (Fig. 9.11), we also provide several recursion exercises—raising an integer to an integer power (Exercise 9.34), visualizing recursion (Exercise 9.35) and sum of two integers (Exercise 9.36). Also, Fig. 14.26 uses recursion to traverse an XML document tree.

**9.12 Wrap-Up** This chapter introduced JavaScript functions, which allow you to modularize your pro- grams. We showed how to call functions and methods and how to define your own func- tions that accomplish tasks. We also showed how parameters are used to pass data into a function, while return values are used to pass a result back to the caller. We discussed how to get a range of random numbers and built a craps game and a random image generator using these concepts. Finally, we introduced recursion, which provides an alternative method for solving problems that involve repetitive calculations. In the next chapter, we introduce arrays, which allow you to store lists of data in a single variable.

9.13 Web Resources **351**

**9.13 Web Resources** www.deitel.com/javascript/

The Deitel JavaScript Resource Center contains links to some of the best JavaScript resources on the web. There you’ll find categorized links to JavaScript tools, code generators, forums, books, libraries, frameworks and more. Also check out the tutorials for all skill levels, from introductory to advanced. Be sure to visit the related Resource Centers on XHTML (www.deitel.com/xhtml/) and CSS 2.1 (www.deitel.com/css21/).

**Summary _Section 9.1 Introduction_** • The best way to develop and maintain a large program is to construct it from small, simple pieces,

or modules. This technique is called divide and conquer.

**_Section 9.2 Program Modules in JavaScript_** • JavaScript programs are written by combining new functions that the programmer writes with

“prepackaged” functions and objects available in JavaScript*.*

• The term method implies that the function belongs to a particular object. We refer to functions that belong to a particular JavaScript object as methods; all others are referred to as functions.

• JavaScript provides several objects that have a rich collection of methods for performing common mathematical calculations, string manipulations, date and time manipulations, and manipula- tions of collections of data called arrays. These objects make your job easier, because they provide many of the capabilities programmers frequently need.

• Whenever possible, use existing JavaScript objects, methods and functions instead of writing new ones. This reduces script-development time and helps avoid introducing errors.

• You can define functions that perform specific tasks and use them at many points in a script. These functions are referred to as programmer-defined functions. The actual statements defining the function are written only once and are hidden from other functions.

• Functions are invoked by writing the name of the function, followed by a left parenthesis, fol- lowed by a comma-separated list of zero or more arguments, followed by a right parenthesis.

• Methods are called in the same way as functions, but require the name of the object to which the method belongs and a dot preceding the method name.

• Function (and method) arguments may be constants, variables or expressions.

**_Section 9.3 Programmer-Defined Functions_** • All variables declared in function definitions are local variables—this means that they can be ac-

cessed only in the function in which they are defined.

• A function’s parameters are considered to be local variables. When a function is called, the argu- ments in the call are assigned to the corresponding parameters in the function definition.

• Code that is packaged as a function can be executed from several locations in a program by calling the function.

• Each function should perform a single, well-defined task, and the name of the function should express that task effectively. This promotes software reusability.

**_Section 9.4 Function Definitions_** • The return statement passes information from inside a function back to the point in the program

where it was called.

**352** Chapter 9 JavaScript: Functions

• A function must be called explicitly for the code in its body to execute.

• The format of a function definition is

function _function-name_( _parameter-list_ ) {

_declarations and statements_ }

• There are three ways to return control to the point at which a function was invoked. If the func- tion does not return a result, control returns when the program reaches the function-ending right brace or by executing the statement return;. If the function does return a result, the statement return _expression_; returns the value of _expression_ to the caller.

**_Section 9.5 Random Number Generation_** • Method random generates a floating-point value from 0.0 up to, but not including, 1.0.

• Random integers in a certain range can be generated by scaling and shifting the values returned by random, then using Math.floor to convert them to integers. The scaling factor determines the size of the range (i.e. a scaling factor of 4 means four possible integers). The shift number is added to the result to determine where the range begins (i.e. shifting the numbers by 3 would give num- bers between 3 and 7.)

**_Section 9.6 Example: Game of Chance_** • JavaScript can execute actions in response to the user’s interaction with a GUI component in an

XHTML form. This is referred to as GUI event handling

• An XHTML element’s onclick attribute indicates the action to take when the user of the XHT- ML document clicks on the element.

• In event-driven programming, the user interacts with a GUI component, the script is notified of the event and the script processes the event. The user’s interaction with the GUI “drives” the pro- gram. The function that is called when an event occurs is known as an event-handling function or event handler.

• The getElementById method, given an id as an argument, finds the XHTML element with a matching id attribute and returns a JavaScript object representing the element.

• The value property of a JavaScript object representing an XHTML text input element specifies the text to display in the text field.

• Using an XHTML container (e.g. div, span, p) object’s innerHTML property, we can use a script to set the contents of the element.

**_Section 9.7 Another Example: Random Image Generator_** • We can use random number generation to randomly select from a number of images in order to

display a random image each time a page loads.

**_Section 9.8 Scope Rules_** • Each identifier in a program has a scope. The scope of an identifier for a variable or function is

the portion of the program in which the identifier can be referenced.

• Global variables or script-level variables (i.e., variables declared in the head element of the XHT- ML document) are accessible in any part of a script and are said to have global scope. Thus every function in the script can potentially use the variables.

• Identifiers declared inside a function have function (or local) scope and can be used only in that function. Function scope begins with the opening left brace ({) of the function in which the iden-

Terminology **353**

tifier is declared and ends at the terminating right brace (}) of the function. Local variables of a function and function parameters have function scope.

• If a local variable in a function has the same name as a global variable, the global variable is “hid- den” from the body of the function.

• The onload property of the body element calls an event handler when the body of the XHTML document is completely loaded into the browser window.

**_Section 9.9 JavaScript Global Functions_** • JavaScript provides seven global functions as part of a Global object. This object contains all the

global variables in the script, all the user-defined functions in the script and all the built-in global functions functions listed in Fig. 9.9.

• You do not need to use the Global object directly; JavaScript uses it for you.

**_Section 9.10 Recursion_** • A recursive function calls itself, either directly, or indirectly through another function.

• A recursive function knows how to solve only the simplest case, or base case. If the function is called with a base case, it returns a result. If the function is called with a more complex problem, it knows how to divide the problem into two conceptual pieces—a piece that the function knows how to process (the base case) and a simpler or smaller version of the original problem.

• The function invokes (calls) a fresh copy of itself to go to work on the smaller problem; this in- vocation is referred to as a recursive call, or the recursion step.

• The recursion step executes while the original call to the function is still open (i.e., it has not fin- ished executing).

• For recursion eventually to terminate, each time the function calls itself with a simpler version of the original problem, the sequence of smaller and smaller problems must converge on the base case. At that point, the function recognizes the base case, returns a result to the previous copy of the function, and a sequence of returns ensues up the line until the original function call even- tually returns the final result to the caller.

**_Section 9.11 Recursion vs. Iteration_** • Both iteration and recursion involve repetition: Iteration explicitly uses a repetition statement;

recursion achieves repetition through repeated function calls.

• Iteration and recursion each involve a termination test: Iteration terminates when the loop-con- tinuation condition fails; recursion terminates when a base case is recognized.

• Iteration with counter-controlled repetition and recursion both gradually approach termination: Iteration keeps modifying a counter until the counter assumes a value that makes the loop-con- tinuation condition fail; recursion keeps producing simpler versions of the original problem until the base case is reached.

• Recursion repeatedly invokes the mechanism and, consequently, the overhead of function calls. This effect can be expensive in terms of processor time and memory space.

• Some problems can be understood or solved more easily with recursion than with iteration.

**Terminology** argument in a function call base case binary format block

called function caller calling function computer-assisted instruction (CAI)

**354** Chapter 9 JavaScript: Functions

constant converge on the base case copy of a value divide and conquer dot (.) dot notation element of chance escape function eval function element of chance event event handler event-handling function event-driven programming floor method of the Math object function function (local) scope function argument function body function call function definition function name function parameter function-call operator () getElementById method of the document object Global object global scope global variable hexadecimal innerHTML property invoke a function isFinite function isNaN function iterative solution listen for events

local scope local variable max method of the Math object method modularize a program module object octal onclick event onload event parameter in a function definition parseFloat function parseInt function programmer-defined function probability programmer-defined function radix random method of the Math object random-number generation recursion recursive function recursive step registering an event handler respond to an event return statement scaling scaling factor scope script-level variable shifting value simulation software engineering software reusability unescape function value property of an XHTML text field

**Self-Review Exercises 9.1** Fill in the blanks in each of the following statements:

a) Program modules in JavaScript are called . b) A function is invoked using a(n) . c) A variable known only inside the function in which it is defined is called a(n) . d) The statement in a called function can be used to pass the value of an expres-

sion back to the calling function. e) The keyword indicates the beginning of a function definition.

**9.2** For the given program, state the scope (either global scope or function scope) of each of the following elements:

a) The variable x. b) The variable y. c) The function cube. d) The function output.

Self-Review Exercises **355**

**9.3** Fill in the blanks in each of the following statements: a) Programmer-defined functions, global variables and JavaScript’s global functions are all

part of the object. b) Function determines if its argument is or is not a number. c) Function takes a string argument and returns a string in which all spaces,

punctuation, accent characters and any other character that is not in the ASCII charac- ter set are encoded in a hexadecimal format.

d) Function takes a string argument representing JavaScript code to execute. e) Function takes a string as its argument and returns a string in which all char-

acters that were previously encoded with escape are decoded.

**9.4** Fill in the blanks in each of the following statements: a) An identifier’s is the portion of the program in which the it can be used. b) The three ways to return control from a called function to a caller are ,

and . c) The function is used to produce random numbers. d) Variables declared in a block or in a function’s parameter list are of scope.

**9.5** Locate the error in each of the following program segments and explain how to correct it: a) method g()

{

document.writeln( "Inside method g" );

}

b) // This function should return the sum of its arguments

function sum( x, y )

{

var result;

result = x + y;

}

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> **4 5** <!-- Exercise 9.2: cube.html --> **6** <html xmlns = "http://www.w3.org/1999/xhtml"> **7** <head> **8** <title>Scoping</title> **9** <script type = "text/javascript">

**10** <!-- **11** var x; **12 13** function output() **14** { **15** for ( x = 1; x <= 10; x++ ) **16** document.writeln( cube( x ) + "<br />" ); **17** } // end function output **18 19** function cube( y ) **20** { **21** return y \* y \* y; **22** } // end function cube **23** // --> **24** </script> **25** </head><body onload = "output()"></body> **26** </html>

**356** Chapter 9 JavaScript: Functions

c) function f( a );

{

document.writeln( a );

}

**9.6** Write a complete JavaScript program to prompt the user for the radius of a sphere, and call function sphereVolume to calculate and display the volume of the sphere. Use the statement

volume = ( 4.0 / 3.0 ) \* Math.PI \* Math.pow( radius, 3 );

to calculate the volume. The user should input the radius through an XHTML text field in a <form> and click an XHTML button to initiate the calculation.

**Answers to Self-Review Exercises 9.1** a) functions. b) function call. c) local variable. d) return. e) function.

**9.2** a) Global scope. b) Function scope. c) Global scope. d) Global scope.

**9.3** a) Global. b) isNaN. c) escape. d) eval. e) unescape.

**9.4** a) scope. b) return; or return _expression_; or encountering the closing right brace of a func- tion. c) Math.random. d) local.

**9.5** a) Error: method is not the keyword used to begin a function definition. Correction: Change method to function.

b) Error: The function is supposed to return a value, but does not. Correction: Either delete variable result and place the statement

return x + y;

in the function or add the following statement at the end of the function body: return result;

c) Error: The semicolon after the right parenthesis that encloses the parameter list. Correction: Delete the semicolon after the right parenthesis of the parameter list.

**9.6** The solution below calculates the volume of a sphere using the radius entered by the user.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Exercise 9.6: volume.html --> **6** <html xmlns = "http://www.w3.org/1999/xhtml"> **7** <head> **8** <title>Calculating Sphere Volumes</title> **9** <script type = "text/javascript">

**10** <!-- **11** function displayVolume() **12** { **13** var inputField = document.getElementById( "radiusField" ); **14** var radius = parseFloat( inputField.value ); **15** var answerField = document.getElementById( "answer" ); **16** answerField.value = sphereVolume( radius ); **17** } // end function displayVolume **18 19** function sphereVolume( radius ) **20** { **21** return ( 4.0 / 3.0 ) \* Math.PI \* Math.pow( radius, 3 ); **22** } // end function sphereVolume **23** // -->

Exercises **357**

**Exercises 9.7** Write a script that prompts the user for the radius of a circle, uses a function circleArea to calculate the area of the circle, and prints the area of the circle.

**9.8** A parking garage charges a $2.00 minimum fee to park for up to three hours. The garage charges an additional $0.50 per hour for each hour _or part thereof_ in excess of three hours. The max- imum charge for any given 24-hour period is $10.00. Assume that no car parks for longer than 24 hours at a time. Write a script that calculates and displays the parking charges for each customer who parked a car in this garage yesterday. You should input from the user the hours parked for each customer. The program should display the charge for the current customer and should calculate and display the running total of yesterday's receipts. The program should use the function calculate-

Charges to determine the charge for each customer. Use a text input field to obtain the input from the user.

**9.9** Write function distance that calculates the distance between two points (_x1_, _y1_) and (_x2_, _y2_). All numbers and return values should be floating-point values. Incorporate this function into a script that enables the user to enter the coordinates of the points through an XHTML form.

**9.10** Answer each of the following questions: a) What does it mean to choose numbers “at random”? b) Why is the Math.random function useful for simulating games of chance? c) Why is it often necessary to scale and/or shift the values produced by Math.random? d) Why is computerized simulation of real-world situations a useful technique?

**9.11** Write statements that assign random integers to the variable _n_ in the following ranges: a) 1 ≤ _n_ ≤ 2 b) 1 ≤ _n_ ≤ 100 c) 0 ≤ _n_ ≤ 9 d) 1000 ≤ _n_ ≤ 1112

**24** </script> **25** </head> **26** <body> **27** <form action = ""> **28** <div> **29** <label>Radius: **30** <input id = "radiusField" type = "text" /></label> **31** <input type = "button" value = "Calculate" **32** onclick = "displayVolume()" /> **33** <br /> **34** <label>Answer: **35** <input id = "answer" type = "text" /></label> **36** </div> **37** </form> **38** </body> **39** </html>

**358** Chapter 9 JavaScript: Functions

e) –1 ≤ _n_ ≤ 1 f) –3 ≤ _n_ ≤ 11

**9.12** For each of the following sets of integers, write a single statement that will print a number at random from the set:

a) 2, 4, 6, 8, 10. b) 3, 5, 7, 9, 11. c) 6, 10, 14, 18, 22.

**9.13** Write a function integerPower( base, exponent ) that returns the value of

_base exponent_

For example, integerPower( 3, 4 ) = 3 \* 3 \* 3 \* 3. Assume that exponent and base are integers. Function integerPower should use a for or while statement to control the calculation. Incorporate this function into a script that reads integer values from an XHTML form for base and exponent

and performs the calculation with the integerPower function. The XHTML form should consist of two text fields and a button to initiate the calculation. The user should interact with the pro- gram by typing numbers in both text fields then clicking the button.

**9.14** Write a function multiple that determines, for a pair of integers, whether the second inte- ger is a multiple of the first. The function should take two integer arguments and return true if the second is a multiple of the first, and false otherwise. Incorporate this function into a script that inputs a series of pairs of integers (one pair at a time). The XHTML form should consist of two text fields and a button to initiate the calculation. The user should interact with the program by typing numbers in both text fields, then clicking the button.

**9.15** Write a script that inputs integers (one at a time) and passes them one at a time to function isEven, which uses the modulus operator to determine whether an integer is even. The function should take an integer argument and return true if the integer is even and false otherwise. Use sen- tinel-controlled looping and a prompt dialog.

**9.16** Write a function squareOfAsterisks that displays a solid square of asterisks whose side is specified in integer parameter side. For example, if side is 4, the function displays

\*\*\*\* \*\*\*\* \*\*\*\* \*\*\*\*

Incorporate this function into a script that reads an integer value for side from the user at the key- board and performs the drawing with the squareOfAsterisks function.

**9.17** Modify the script created in Exercise 9.16 to also prompt the user for a character which will be used to create the square. Thus, if side is 5 and fillCharacter is #, the function should print

\##### ##### ##### ##### #####

**9.18** Write program segments that accomplish each of the following tasks: a) Calculate the integer part of the quotient when integer a is divided by integer b. b) Calculate the integer remainder when integer a is divided by integer b. c) Use the program pieces developed in parts (a) and (b) to write a function displayDigits

that receives an integer between 1 and 99999 and prints it as a series of digits, each pair of which is separated by two spaces. For example, the integer 4562 should be printed as

4 5 6 2

Exercises **359**

d) Incorporate the function developed in part (c) into a script that inputs an integer from a prompt dialog and invokes displayDigits by passing to the function the integer en- tered.

**9.19** Implement the following functions: a) Function celsius returns the Celsius equivalent of a Fahrenheit temperature, using the

calculation

C = 5.0 / 9.0 \* ( F - 32 );

b) Function fahrenheit returns the Fahrenheit equivalent of a Celsius temperature, using the calculation

F = 9.0 / 5.0 \* C + 32;

c) Use these functions to write a script that enables the user to enter either a Fahrenheit or a Celsius temperature and displays the Celsius or Fahrenheit equivalent.

Your XHTML document should contain two buttons—one to initiate the conversion from Fahr- enheit to Celsius and one to initiate the conversion from Celsius to Fahrenheit.

**9.20** Write a function minimum3 that returns the smallest of three floating-point numbers. Use the Math.min function to implement minimum3. Incorporate the function into a script that reads three values from the user and determines the smallest value.

**9.21** An integer number is said to be a **perfect number** if its factors, including 1 (but not the number itself), sum to the number. For example, 6 is a perfect number, because 6 = 1 + 2 + 3. Write a function perfect that determines whether parameter number is a perfect number. Use this func- tion in a script that determines and displays all the perfect numbers between 1 and 1000. Print the factors of each perfect number to confirm that the number is indeed perfect. Challenge the com- puting power of your computer by testing numbers much larger than 1000. Display the results in a <textarea>.

**9.22** An integer is said to be **prime** if it is greater than 1 and divisible only by 1 and itself. For example, 2, 3, 5 and 7 are prime, but 4, 6, 8 and 9 are not.

a) Write a function that determines whether a number is prime. b) Use this function in a script that determines and prints all the prime numbers between

1 and 10,000. How many of these 10,000 numbers do you really have to test before being sure that you have found all the primes? Display the results in a <textarea>.

c) Initially, you might think that _n_/2 is the upper limit for which you must test to see whether a number is prime, but you only need go as high as the square root of _n_. Why? Rewrite the program using the Math.sqrt method to calculate the square root, and run it both ways. Estimate the performance improvement.

**9.23** Write a function that takes an integer value and returns the number with its digits reversed. For example, given the number 7631, the function should return 1367. Incorporate the function into a script that reads a value from the user. Display the result of the function in the status bar.

**9.24** The **greatest common divisor** (GCD) of two integers is the largest integer that evenly di- vides each of the two numbers. Write a function gcd that returns the greatest common divisor of two integers. Incorporate the function into a script that reads two values from the user.

**9.25** Write a function qualityPoints that inputs a student’s average and returns 4 if the stu- dent's average is 90–100, 3 if the average is 80–89, 2 if the average is 70–79, 1 if the average is 60– 69 and 0 if the average is lower than 60. Incorporate the function into a script that reads a value from the user.

**9.26** Write a script that simulates coin tossing. Let the program toss the coin each time the user clicks the **Toss** button. Count the number of times each side of the coin appears. Display the results.

**360** Chapter 9 JavaScript: Functions

The program should call a separate function flip that takes no arguments and returns false for tails and true for heads. \[_Note:_ If the program realistically simulates the coin tossing, each side of the coin should appear approximately half the time.\]

**9.27** Computers are playing an increasing role in education. Write a program that will help an elementary-school student learn multiplication. Use Math.random to produce two positive one-digit integers. It should then display a question such as

How much is 6 times 7?

The student then types the answer into a text field. Your program checks the student’s answer. If it is correct, display the string "Very good!" and generate a new question. If the answer is wrong, dis- play the string "No. Please try again." and let the student try the same question again repeatedly until the student finally gets it right. A separate function should be used to generate each new ques- tion. This function should be called once when the script begins execution and each time the user answers the question correctly.

**9.28** The use of computers in education is referred to as **computer-assisted instruction** (CAI). One problem that develops in CAI environments is student fatigue. This problem can be eliminated by varying the computer's dialogue to hold the student's attention. Modify the program in Exercise 9.27 to print one of a variety of comments for each correct answer and each incorrect an- swer. The set of responses for correct answers is as follows:

Very good! Excellent! Nice work! Keep up the good work!

The set of responses for incorrect answers is as follows:

No. Please try again. Wrong. Try once more. Don't give up! No. Keep trying.

Use random number generation to choose a number from 1 to 4 that will be used to select an appropriate response to each answer. Use a switch statement to issue the responses.

**9.29** More sophisticated computer-assisted instruction systems monitor the student’s perfor- mance over a period of time. The decision to begin a new topic is often based on the student’s suc- cess with previous topics. Modify the program in Exercise 9.28 to count the number of correct and incorrect responses typed by the student. After the student answers 10 questions, your program should calculate the percentage of correct responses. If the percentage is lower than 75 percent, print Please ask your instructor for extra help, and reset the program so another student can try it.

**9.30** Write a script that plays a “guess the number” game as follows: Your program chooses the number to be guessed by selecting a random integer in the range 1 to 1000. The script displays the prompt Guess a number between 1 and 1000 next to a text field. The player types a first guess into the text field and clicks a button to submit the guess to the script. If the player's guess is incorrect, your program should display Too high. Try again. or Too low. Try again. to help the player “zero in” on the correct answer and should clear the text field so the user can enter the next guess. When the user enters the correct answer, display Congratulations. You guessed the number! and clear the text field so the user can play again. \[_Note:_ The guessing technique employed in this problem is sim- ilar to a **binary search**, which we discuss in Chapter 10, JavaScript: Arrays*.*\]

**9.31** Modify the program of Exercise 9.30 to count the number of guesses the player makes. If the number is 10 or fewer, display Either you know the secret or you got lucky! If the player guess- es the number in 10 tries, display Ahah! You know the secret! If the player makes more than 10

Exercises **361**

guesses, display You should be able to do better! Why should it take no more than 10 guesses? Well, with each good guess, the player should be able to eliminate half of the numbers. Now show why any number 1 to 1000 can be guessed in 10 or fewer tries.

**9.32** Exercises 9.27 through 9.29 developed a computer-assisted instruction program to teach an elementary-school student multiplication. This exercise suggests enhancements to that program.

a) Modify the program to allow the user to enter a grade-level capability. A grade level of 1 means to use only single-digit numbers in the problems, a grade level of 2 means to use numbers as large as two digits, and so on.

b) Modify the program to allow the user to pick the type of arithmetic problems he or she wishes to study. An option of 1 means addition problems only, 2 means subtraction problems only, 3 means multiplication problems only, 4 means division problems only and 5 means to intermix randomly problems of all these types.

**9.33** Modify the craps program in Fig. 9.6 to allow wagering. Initialize variable bankBalance to 1000 dollars. Prompt the player to enter a wager. Check that the wager is less than or equal to bank-

Balance and, if not, have the user reenter wager until a valid wager is entered. After a valid wager is entered, run one game of craps. If the player wins, increase bankBalance by wager, and print the new bankBalance. If the player loses, decrease bankBalance by wager, print the new bankBalance, check whether bankBalance has become zero and, if so, print the message Sorry. You busted! As the game progresses, print various messages to create some chatter, such as Oh, you're going for broke, huh?

or Aw c’mon, take a chance! or You're up big. Now's the time to cash in your chips!. Implement the chatter as a separate function that randomly chooses the string to display.

**9.34** Write a recursive function power( base, exponent ) that, when invoked, returns

_base exponent_

for example, power( 3, 4 ) = 3 \* 3 \* 3 \* 3. Assume that exponent is an integer greater than or equal to 1. The recursion step would use the relationship

_base exponent = base_ · \_base exponent –\_1

and the terminating condition occurs when exponent is equal to 1, because

_base 1 = base_

Incorporate this function into a script that enables the user to enter the base and exponent.

**9.35** _(Visualizing Recursion)_ It is interesting to watch recursion in action. Modify the factorial function in Fig. 9.11 to display its local variable and recursive-call parameter. For each recursive call, display the outputs on a separate line and add a level of indentation. Do your utmost to make the outputs clear, interesting and meaningful. Your goal here is to design and implement an output for- mat that helps a person understand recursion better. You may want to add such display capabilities to the many other recursion examples and exercises throughout the text.

**9.36** What does the following function do?

// Parameter b must be a positive // integer to prevent infinite recursion function mystery( a, b ) {

if ( b == 1 ) return a;

else return a + mystery( a, b - 1 );

}

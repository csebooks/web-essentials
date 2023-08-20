---
title: "JavaScript: Control Statements II"
weight: 5
---

**O B J E C T I V E S** In this chapter you will learn:

■ The essentials of counter-controlled repetition

■ To use the for and do…while repetition statements to execute statements in a program repeatedly.

■ To perform multiple selection using the switch selection statement.

■ To use the break and continue program-control statements

■ To use the logical operators.

**_Not everything that can be counted counts, and not every thing that counts can be counted._ —Albert Einstein**

**_Who can control his fate?_ —William Shakespeare**

**_The used key is always bright._ —Benjamin Franklin**

**_Intelligence … is the faculty of making artificial objects, especially tools to make tools._ —Henri Bergson**

**_Every advantage in the past is judged in the light of the final issue._ —Demosthenes**

8.1 Introduction **279 O**

**u tl**

**in e**

**8.1 Introduction** Chapter 7 began our introduction to the types of building blocks that are available for problem solving and used them to employ proven program-construction principles. In this chapter, we continue our presentation of the theory and principles of structured pro- gramming by introducing JavaScript’s remaining control statements (with the exception of for…in, which is presented in Chapter 10). As in Chapter 7, the JavaScript techniques you will learn here are applicable to most high-level languages. In later chapters, you’ll see that control structures are helpful in manipulating objects.

**8.2 Essentials of Counter-Controlled Repetition** Counter-controlled repetition requires:

**1\.** The _name_ of a control variable (or loop counter).

**2\.** The _initial value_ of the control variable.

**3\.** The _increment_ (or _decrement_) by which the control variable is modified each time through the loop (also known as _each iteration of the loop_).

**4\.** The condition that tests for the _final value_ of the control variable to determine whether looping should continue.

To see the four elements of counter-controlled repetition, consider the simple script shown in Fig. 8.1, which displays lines of XHTML text that illustrate the seven different font sizes supported by XHTML. The declaration in line 12 _names_ the control variable (counter), reserves space for it in memory and sets it to an _initial value_ of 1. The declara- tion and initialization of counter could also have been accomplished by the following dec- laration and assignment statement:

var counter; // declare counter counter = 1; // initialize counter to 1

Lines 16–18 in the while statement write a paragraph element consisting of the string “XHTML font size” concatenated with the control variable counter’s value, which repre-

**8.1** Introduction **8.2** Essentials of Counter-Controlled Repetition **8.3** for Repetition Statement **8.4** Examples Using the for Statement **8.5** switch Multiple-Selection Statement **8.6** do…while Repetition Statement **8.7** break and continue Statements **8.8** Labeled break and continue Statements **8.9** Logical Operators

**8.10** Summary of Structured Programming **8.11** Wrap-Up **8.12** Web Resources

Summary | Terminology | Self-Review Exercises | Answers to Self-Review Exercises | Exercises

**280** Chapter 8 JavaScript: Control Statements II

sents the font size. An inline CSS style attribute sets the font-size property to the value of counter concatenated to ex. Note the use of the escape sequence \\", which is placed around attribute style’s value. Because the double-quote character delimits the beginning and end of a string literal in JavaScript, it cannot be used in the contents of the string

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 8.1: WhileCounter.html --> **6** <!-- Counter-controlled repetition. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Counter-Controlled Repetition</title>

**10** <script type = "text/javascript"> **11** <!-- **12 13 14 15** { **16** document.writeln( "<p style = \\"font-size: " + **17** counter + "ex\\">XHTML font size " + counter + **18** "ex</p>" ); **19 20** } //end while **21** // --> **22** </script> **23** </head><body></body> **24** </html>

**Fig. 8.1** | Counter-controlled repetition.

var counter = 1; // initialization

while ( counter <= 7 ) // repetition condition

++counter; // increment

8.3 for Repetition Statement **281**

unless it is preceded by a \\ to create the escape sequence \\". For example, if counter is 5, the preceding statement produces the markup

<p style = "font-size: 5ex">XHTML font size 5ex</p>

XHTML allows either single quotes (') or double quotes (") to be placed around the value specified for an attribute. JavaScript allows single quotes to be placed in a string literal. Thus, we could have placed single quotes around the font-size property to produce equivalent XHTML output without the use of escape sequences.

**Common Programming Error 8.1** _Placing a double-quote (") character inside a string literal that is delimited by double quotes causes a runtime error when the script is interpreted. To be displayed as part of a string literal, a double-quote (") character must be preceded by a \\ to form the escape sequence \\"._ 8.1

Line 19 in the while statement _increments_ the control variable by 1 for each iteration of the loop (i.e., each time the body of the loop is performed). The loop-continuation con- dition (line 14) in the while statement tests whether the value of the control variable is less than or equal to 7 (the _final value_ for which the condition is true). Note that the body of this while statement executes even when the control variable is 7. The loop terminates when the control variable exceeds 7 (i.e., counter becomes 8).

**Good Programming Practice 8.1** _Use integer values to control loop counting._ 8.1

**Good Programming Practice 8.2** _Indent the statements in the body of each control structure._ 8.2

**Good Programming Practice 8.3** _Put a blank line before and after each control structure, to make it stand out in the program._ 8.3

**Good Programming Practice 8.4** _Too many levels of nesting can make a program difficult to understand. As a general rule, try to avoid using more than three levels of nesting._ 8.4

**Good Programming Practice 8.5** _Vertical spacing above and below control structures and indentation of the bodies of control structures in the headers of the control structure give programs a two-dimensional appearance that enhances readability._ 8.5

**8.3 for Repetition Statement** The **for repetition statement** handles all the details of counter-controlled repetition. Figure 8.2 illustrates the power of the for statement by reimplementing the script of Fig. 8.1.

When the for statement begins executing (line 15), the control variable counter is declared and is initialized to 1 (i.e., the first statement of the for statement declares the control variable’s _name_ and provides the control variable’s _initial value_). Next, the loop-

**282** Chapter 8 JavaScript: Control Statements II

continuation condition, counter <= 7, is checked. The condition contains the _final value_ (7) of the control variable. The initial value of counter is 1. Therefore, the condition is satisfied (i.e., true), so the body statement (lines 16–18) writes a paragraph element in the XHTML document. Then, variable counter is incremented in the expression ++counter

and the loop continues execution with the loop-continuation test. The control variable is now equal to 2, so the final value is not exceeded and the program performs the body state- ment again (i.e., performs the next iteration of the loop). This process continues until the

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 8.2: ForCounter.html --> **6** <!-- Counter-controlled repetition with the for statement. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Counter-Controlled Repetition</title>

**10** <script type = "text/javascript"> **11** <!-- **12** // Initialization, repetition condition and **13** // incrementing are all included in the for **14** // statement header. **15 16** document.writeln( "<p style = \\"font-size: " + **17** counter + "ex\\">XHTML font size " + counter + **18** "ex</p>" ); **19** // --> **20** </script> **21** </head><body></body> **22** </html>

**Fig. 8.2** | Counter-controlled repetition with the for statement.

for ( var counter = 1; counter <= 7; ++counter )

8.3 for Repetition Statement **283**

control variable counter becomes 8, at which point the loop-continuation test fails and the repetition terminates.

The program continues by performing the first statement after the for statement. (In this case, the script terminates, because the interpreter reaches the end of the script.)

Figure 8.3 takes a closer look at the for statement at line 15 of Fig. 8.2. The for state- ment’s first line (including the keyword for and everything in parentheses after for) is often called the **for statement header**. Note that the for statement “does it all”—it spec- ifies each of the items needed for counter-controlled repetition with a control variable. Remember that a block is a group of statements enclosed in curly braces that can be placed anywhere that a single statement can be placed, so you can use a block to put multiple statements into the body of a for statement.

Note that Fig. 8.3 uses the loop-continuation condition counter <= 7. If you incor- rectly write counter < 7, the loop will execute only six times. This is an example of the common logic error called an **off-by-one error**_._

**Common Programming Error 8.2** _Using an incorrect relational operator or an incorrect final value of a loop counter in the condi- tion of a while, for or do…while statement can cause an off-by-one error or an infinite loop._ 8.2

**Good Programming Practice 8.6** _Using the final value in the condition of a while or for statement and using the <= relational operator will help avoid off-by-one errors. For a loop used to print the values 1 to 10, for exam- ple, the initial value of counter should be 1, and the loop-continuation condition should be counter <= 10 rather than counter < 10 (which is an off-by-one error) or counter < 11 (which is correct). Many programmers, however, prefer so-called **zero-based counting**, in which, to count 10 times through the loop, counter would be initialized to zero and the loop-continuation test would be counter < 10._ 8.6

The general format of the for statement is

for ( _initialization_; _loopContinuationTest_; _increment_ ) _statements_

where the _initialization_ expression names the loop’s control variable and provides its initial value, _loopContinuationTest_ is the expression that tests the loop-continuation condition (containing the final value of the control variable for which the condition is true), and

**Fig. 8.3** | for statement header components.

for ( var counter = 1; counter <= 7; ++counter )

_Initial value_ of control variable

_Increment_ of control variable

Control variable _name_

_Final value_ of control variable for which the condition is true

for keyword

Loop-continuation condition

**284** Chapter 8 JavaScript: Control Statements II

_increment_ is an expression that increments the control variable. The for statement can be represented by an equivalent while statement, with _initialization_, _loopContinuationTest_ and _increment_ placed as follows:

_initialization_;

while ( _loopContinuationTest_ ) {

_statements increment_;

}

In Section 8.7 we discuss an exception to this rule. If the _initialization_ expression in the for statement’s header is the first definition of

the control variable, the control variable can still be used after the for statement in the script. The part of a script in which a variable name can be used is known as the variable’s **scope**. Scope is discussed in detail in Chapter 9, JavaScript: Functions.

**Good Programming Practice 8.7** _Place only expressions involving the control variable in the initialization and increment sections of a for statement. Manipulations of other variables should appear either before the loop (if they execute only once, like initialization statements) or in the loop body (if they execute once per it- eration of the loop, like incrementing or decrementing statements)._ 8.7

The three expressions in the for statement are optional. If _loopContinuationTest_ is omitted, JavaScript assumes that the loop-continuation condition is true, thus creating an infinite loop. One might omit the _initialization_ expression if the control variable is initial- ized before the loop. One might omit the _increment_ expression if the increment is calcu- lated by statements in the body of the for statement or if no increment is needed. The increment expression in the for statement acts like a stand-alone statement at the end of the body of the for statement. Therefore, the expressions

counter = counter + 1 counter += 1 ++counter counter++

are all equivalent in the incrementing portion of the for statement. Many programmers prefer the form counter++. This is because the incrementing of the control variable occurs after the body of the loop is executed, and therefore the postincrementing form seems more natural. Preincrementing and postincrementing both have the same effect in our ex- ample, because the variable being incremented does not appear in a larger expression. The two semicolons in the for statement header are required.

**Common Programming Error 8.3** _Using commas instead of the two required semicolons in the header of a for statement is a syntax error._ 8.3

**Common Programming Error 8.4** _Placing a semicolon immediately to the right of the right parenthesis of the header of a for state- ment makes the body of that for statement an empty statement. This code is normally a logic error._ 8.4

8.3 for Repetition Statement **285**

The initialization, loop-continuation condition and increment portions of a for state- ment can contain arithmetic expressions. For example, assume that x = 2 and y = 10. If x and y are not modified in the body of the loop, then the statement

for ( var j = x; j <= 4 \* x \* y; j += y / x )

is equivalent to the statement

for ( var j = 2; j <= 80; j += 5 )

The “increment” of a for statement may be negative, in which case it is really a dec- rement and the loop actually counts downward.

If the loop-continuation condition initially is false, the for statement’s body is not performed. Instead, execution proceeds with the statement following the for statement.

The control variable frequently is printed or used in calculations in the body of a for

statement, but it does not have to be. Other times, the control variable is used for control- ling repetition but never mentioned in the body of the for statement.

**Error-Prevention Tip 8.1** _Although the value of the control variable can be changed in the body of a for statement, avoid changing it, because doing so can lead to subtle errors._ 8.1

The for statement is flowcharted much like the while statement. For example, Fig. 8.4 shows the flowchart of the for statement

for ( var counter = 1; counter <= 7; ++counter ) document.writeln( "<p style = \\"font-size: " +

counter + "ex\\">XHTML font size " + counter + "ex</p>" );

This flowchart makes it clear that the initialization occurs only once and that incrementing occurs _after_ each execution of the body statement. Note that, besides small circles and ar- rows, the flowchart contains only rectangle symbols and a diamond symbol.

**Fig. 8.4** | for repetition statement flowchart.

counter <= 7

document.writeln( "<p style=\\"font-size: " + counter + "ex\\">XHTML font size " + counter + "ex</p>" );

true

false

var counter = 1

++counter

Establish _initial value_ of control variable.

Determine if _final value_ of control variable has been reached.

Body of loop (this may be many statements)

_Increment_ the control variable.

**286** Chapter 8 JavaScript: Control Statements II

**8.4 Examples Using the for Statement** The examples in this section show methods of varying the control variable in a for state- ment. In each case, we write the appropriate for header. Note the change in the relational operator for loops that decrement the control variable.

a) Vary the control variable from 1 to 100 in increments of 1.

for ( var i = 1; i <= 100; ++i )

b) Vary the control variable from 100 to 1 in increments of -1 (i.e., decrements of 1).

for ( var i = 100; i >= 1; --i )

c) Vary the control variable from 7 to 77 in steps of 7.

for ( var i = 7; i <= 77; i += 7 )

d) Vary the control variable from 20 to 2 in steps of -2.

for ( var i = 20; i >= 2; i -= 2 )

e) Vary the control variable over the following sequence of values: 2, 5, 8, 11, 14, 17, 20.

for ( var j = 2; j <= 20; j += 3 )

f) Vary the control variable over the following sequence of values: 99, 88, 77, 66, 55, 44, 33, 22, 11, 0.

for ( var j = 99; j >= 0; j -= 11 )

**Common Programming Error 8.5** _Not using the proper relational operator in the loop-continuation condition of a loop that counts downward (e.g., using i <= 1 in a loop that counts down to 1) is usually a logic error that will yield incorrect results when the program runs._ 8.5

The next two scripts demonstrate the for repetition statement. Figure 8.5 uses the for statement to sum the even integers from 2 to 100. Note that the increment expression adds 2 to the control variable number after the body executes during each iteration of the loop. The loop terminates when number has the value 102 (which is not added to the sum).

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 8.5: Sum.html --> **6** <!-- Summation with the for repetition structure. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Sum the Even Integers from 2 to 100</title>

**10** <script type = "text/javascript"> **11** <!-- **12** var sum = 0;

**Fig. 8.5** | Summation with the for repetition structure. (Part 1 of 2.)

8.4 Examples Using the for Statement **287**

Note that the body of the for statement in Fig. 8.5 actually could be merged into the rightmost (increment) portion of the for header by using a comma, as follows:

for ( var number = 2; number <= 100; sum += number, number += 2) ;

Similarly, the initialization sum = 0 could be merged into the initialization section of the for statement.

**Good Programming Practice 8.8** \_Although statements preceding a for statement and in the body of a for statement can often be merged into the for header, avoid doing so, because it makes the program more difficult to read.\_8.8

**Good Programming Practice 8.9** _For clarity, limit the size of control-statement headers to a single line, if possible._ 8.9

The next example computes compound interest (compounded yearly) using the for

statement. Consider the following problem statement:

_A person invests $1000.00 in a savings account yielding 5 percent interest. Assuming that all the interest is left on deposit, calculate and print the amount of money in the account at the end of each year for 10 years. Use the following formula to determine the amounts:_

_a = p_ (1 + _r_) _n_

_where_

_p_ is the original amount invested (i.e., the principal) _r_ is the annual interest rate _n_ is the number of years _a_ is the amount on deposit at the end of the \_n_th year.

**13 14 15** sum += number; **16 17** document.writeln( "The sum of the even integers " + **18** "from 2 to 100 is " + sum ); **19** // --> **20** </script> **21** </head><body></body> **22** </html>

**Fig. 8.5** | Summation with the for repetition structure. (Part 2 of 2.)

for ( var number = 2; number <= 100; number += 2 )

**288** Chapter 8 JavaScript: Control Statements II

This problem involves a loop that performs the indicated calculation for each of the 10 years the money remains on deposit. Figure 8.6 presents the solution to this problem, displaying the results in a table.

Lines 16–18 declare three variables and initialize principal to 1000.0 and rate to .05. Lines 20–21 write an XHTML <table> tag, and lines 22–23 write the caption that summarizes the table’s content. Lines 24–25 create the table’s header section (<thead>), a

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 8.6: Interest.html --> **6** <!-- Compound interest calculation with a for loop. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Calculating Compound Interest</title>

**10** <style type = "text/css"> **11** table { width: 100% } **12** th { text-align: left } **13** </style> **14** <script type = "text/javascript"> **15** <!-- **16** var amount; // current amount of money **17** var principal = 1000.0; // principal amount **18** var rate = .05; // interest rate **19 20** document.writeln( **21** "<table border = \\"1\\">" ); // begin the table **22** document.writeln( **23** "<caption>Calculating Compound Interest</caption>" ); **24** document.writeln( **25** "<thead><tr><th>Year</th>" ); // year column heading **26** document.writeln( **27** "<th>Amount on deposit</th>" ); // amount column heading **28** document.writeln( "</tr></thead><tbody>" ); **29 30** // output a table row for each year **31 32** { **33** amount = principal \* Math.pow( 1.0 + rate, year ); **34** document.writeln( "<tr><td>" + year + **35** "</td><td>" + amount.toFixed(2) + **36** "</td></tr>" ); **37** } //end for **38 39** document.writeln( "</tbody></table>" ); **40** // --> **41** </script> **42** </head><body></body> **43** </html>

**Fig. 8.6** | Compound interest calculation with a for loop. (Part 1 of 2.)

for ( var year = 1; year <= 10; ++year )

8.4 Examples Using the for Statement **289**

row (<tr>) and a column heading (<th>) containing “Year.” Lines 26–28 create a table heading for “Amount on deposit” and write the closing </tr> and </thead> tags.

The for statement (lines 31–37) executes its body 10 times, incrementing control variable year from 1 to 10 (note that year represents _n_ in the problem statement). Java- Script does not include an exponentiation operator. Instead, we use the Math object’s pow method for this purpose. Math.pow(x, y) calculates the value of x raised to the yth power. Method Math.pow takes two numbers as arguments and returns the result.

Line 33 performs the calculation using the formula given in the problem statement. Lines 34–36 write a line of XHTML markup that creates another row in the table. The first column is the current year value. The second column displays the value of amount. Line 39 writes the closing </tbody> and </table> tags after the loop terminates.

Line 35 introduces the **Number object** and its **toFixed method**. The variable amount

contains a numerical value, so JavaScript represents it as a Number object. The toFixed

method of a Number object formats the value by rounding it to the specified number of decimal places. On line 35, amount.toFixed(2) outputs the value of amount with two decimal places.

Variables amount, principal and rate represent numbers in this script. Remember that JavaScript represents all numbers as floating-point numbers. This feature is conve- nient in this example, because we are dealing with fractional parts of dollars and need a type that allows decimal points in its values.

Unfortunately, floating-point numbers can cause trouble. Here is a simple example of what can go wrong when using floating-point numbers to represent dollar amounts (assuming that dollar amounts are displayed with two digits to the right of the decimal point): Two dollar amounts stored in the machine could be 14.234 (which would nor- mally be rounded to 14.23 for display purposes) and 18.673 (which would normally be rounded to 18.67 for display purposes). When these amounts are added, they produce the

**Fig. 8.6** | Compound interest calculation with a for loop. (Part 2 of 2.)

**290** Chapter 8 JavaScript: Control Statements II

internal sum 32.907, which would normally be rounded to 32.91 for display purposes. Thus your printout could appear as

14.23 + 18.67

32.91

but a person adding the individual numbers as printed would expect the sum to be 32.90. You have been warned!

**8.5 switch Multiple-Selection Statement** Previously, we discussed the if single-selection statement and the if…else double- selection statement. Occasionally, an algorithm will contain a series of decisions in which a variable or expression is tested separately for each of the values it may assume, and dif- ferent actions are taken for each value. JavaScript provides the switch multiple-selection statement to handle such decision making*.* The script in Fig. 8.7 demonstrates three dif- ferent CSS list formats determined by the value the user enters.

Line 12 in the script declares the variable choice. This variable stores the user’s choice, which determines what type of XHTML list to display. Lines 13–14 declare vari- ables startTag and endTag, which will store the XHTML tags that will be used to create the list element. Line 15 declares variable validInput and initializes it to true. The script uses this variable to determine whether the user made a valid choice (indicated by the value of true). If a choice is invalid, the script sets validInput to false. Line 16 declares vari- able listType, which will store an h1 element indicating the list type. This heading appears before the list in the XHTML document.

Lines 18–19 prompt the user to enter a 1 to display a numbered list, a 2 to display a lettered list and a 3 to display a list with roman numerals. Lines 21–40 define a **switch**

**statement** that assigns to the variables startTag, endTag and listType values based on the value input by the user in the prompt dialog. We create these different lists using the CSS property **list-style-type**, which allows us to set the numbering system for the list. Possible values include decimal (numbers—the default), lower-roman (lowercase Roman numerals), upper-roman (uppercase Roman numerals), lower-alpha (lowercase letters), upper-alpha (uppercase letters), and several others.

The switch statement consists of a series of **case labels** and an optional **default case**. When the flow of control reaches the switch statement, the script evaluates the **control- ling expression** (choice in this example) in the parentheses following keyword switch. The value of this expression is compared with the value in each of the case labels*,* starting with the first case label. Assume that the user entered 2. Remember that the value typed

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 8.7: SwitchTest.html --> **6** <!-- Using the switch multiple-selection statement. -->

**Fig. 8.7** | Using the switch multiple-selection statement. (Part 1 of 4.)

8.5 switch Multiple-Selection Statement **291**

**7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Switching between XHTML List Formats</title>

**10** <script type = "text/javascript"> **11** <!-- **12** var choice; // user’s choice **13** var startTag; // starting list item tag **14** var endTag; // ending list item tag **15** var validInput = true; // indicates if input is valid **16** var listType; // type of list as a string **17 18** choice = window.prompt( "Select a list style:\\n" + **19** "1 (numbered), 2 (lettered), 3 (roman)", "1" ); **20 21 22 23 24** startTag = "<ol>"; **25** endTag = "</ol>"; **26** listType = "<h1>Numbered List</h1>"; **27 28 29** startTag = "<ol style = \\"list-style-type: upper-alpha\\">"; **30** endTag = "</ol>"; **31** listType = "<h1>Lettered List</h1>"; **32 33 34** startTag = "<ol style = \\"list-style-type: upper-roman\\">"; **35** endTag = "</ol>"; **36** listType = "<h1>Roman Numbered List</h1>"; **37 38 39** validInput = false; **40** } //end switch **41 42** if ( validInput == true ) **43** { **44** document.writeln( listType + startTag ); **45 46** for ( var i = 1; i <= 3; ++i ) **47** document.writeln( "<li>List item " + i + "</li>" ); **48 49** document.writeln( endTag ); **50** } //end if **51** else **52** document.writeln( "Invalid choice: " + choice ); **53** // --> **54** </script> **55** </head> **56** <body> **57** <p>Click Refresh (or Reload) to run the script again</p> **58** </body> **59** </html>

**Fig. 8.7** | Using the switch multiple-selection statement. (Part 2 of 4.)

switch ( choice ) {

case "1":

break; case "2":

break; case "3":

break; default:

**292** Chapter 8 JavaScript: Control Statements II

**Fig. 8.7** | Using the switch multiple-selection statement. (Part 3 of 4.)

8.5 switch Multiple-Selection Statement **293**

by the user in a prompt dialog is returned as a string. So, the string 2 is compared to the string in each case in the switch statement. If a match occurs (case "2":), the statements for that case execute. For the string 2 (lines 29–32), we set startTag to an opening ol tag with the style property list-style-type set to upper-alpha, set endTag to "</ol>" to indicate the end of an ordered list and set listType to "<h1>Lettered List</h1>". If no match occurs between the controlling expression’s value and a case label, the default case executes and sets variable validInput to false.

The break statement in line 32 causes program control to proceed with the first state- ment after the switch statement. The break statement is used because the cases in a switch statement would otherwise run together. If break is not used anywhere in a switch statement, then each time a match occurs in the statement, the statements for all the remaining cases execute.

**Fig. 8.7** | Using the switch multiple-selection statement. (Part 4 of 4.)

**294** Chapter 8 JavaScript: Control Statements II

Next, the flow of control continues with the if statement in line 42, which tests vari- able validInput to determine whether its value is true. If so, lines 44–49 write the list- Type, the startTag, three list items (<li>) and the endTag. Otherwise, the script writes text in the XHTML document indicating that an invalid choice was made (line 52).

Each case can have multiple actions (statements). The switch statement is different from others in that braces are not required around multiple actions in a case of a switch. The general switch statement (i.e., using a break in each case) is flowcharted in Fig. 8.8. \[_Note:_ As an exercise, flowchart the general switch statement without break statements.\]

The flowchart makes it clear that each break statement at the end of a case causes control to exit from the switch statement immediately. The break statement is not required for the last case in the switch statement (or the default case, when it appears last), because program control automatically continues with the next statement after the switch statement.

**Common Programming Error 8.6** _Forgetting a break statement when one is needed in a switch statement is a logic error._ 8.6

**Software Engineering Observation 8.1** _Provide a default case in switch statements. Cases not explicitly tested in a switch statement without a default case are ignored. Including a default case focuses the programmer on processing exceptional conditions. However, there are situations in which no default processing is needed._ 8.1

**Good Programming Practice 8.10** _Although the case clauses and the default case clause in a switch statement can occur in any order, it is clearer (and more common) to place the default clause last._ 8.10

**Fig. 8.8** | switch multiple-selection statement.

case a case a action(s) true

false

**.**

**.**

**.**

break

case b action(s) break

false

false

case z case z action(s) break

default action(s)

true

true

case b

8.6 do…while Repetition Statement **295**

**Good Programming Practice 8.11** _In a switch statement, when the default clause is listed last, the break for that case statement is not required. Some programmers include this break for clarity and for symmetry with other cases._ 8.11

Note that having several case labels listed together (e.g., case 1: case 2: with no statements between the cases) simply means that the same set of actions is to occur for each case. Again, note that, besides small circles and arrows, the flowchart contains only rect- angle symbols and diamond symbols.

**8.6 do…while Repetition Statement** The **do…while repetition statement** is similar to the while statement. In the while state- ment, the loop-continuation test occurs at the beginning of the loop, before the body of the loop executes. The do…while statement tests the loop-continuation condition _after_ the loop body executes—therefore, _the loop body always executes at least once._ When a do…while terminates, execution continues with the statement after the while clause. Note that it is not necessary to use braces in a do…while statement if there is only one statement in the body. However, the braces usually are included, to avoid confusion be- tween the while and do…while statements. For example,

while ( _condition_ )

normally is regarded as the header to a while statement. A do…while statement with no braces around a single-statement body appears as

do _statement_

while ( _condition_ );

which can be confusing. The last line—while( _condition_ );—may be misinterpreted by the reader as a while statement containing an empty statement (the semicolon by itself). Thus, to avoid confusion, the do…while statement with a one-statement body is often written as follows:

do {

_statement_ } while ( _condition_ );

**Good Programming Practice 8.12** _Some programmers always include braces in a do…while statement even if they are not neces- sary. This helps eliminate ambiguity between the while statement and the do…while statement containing a one-statement body._ 8.12

**Common Programming Error 8.7** _Infinite loops are caused when the loop-continuation condition never becomes false in a while, for or do…while statement. To prevent this, make sure that there is not a semicolon immedi- ately after the header of a while or for statement. In a counter-controlled loop, make sure that the control variable is incremented (or decremented) in the body of the loop. In a sentinel-con- trolled loop, make sure that the sentinel value is eventually input._ 8.7

**296** Chapter 8 JavaScript: Control Statements II

The script in Fig. 8.9 uses a do…while statement to display each of the six different XHTML heading types (h1 through h6). Line 12 declares control variable counter and initializes it to 1. Upon entering the do…while statement, lines 15–17 write a line of XHTML text in the document. The value of control variable counter is used to create the starting and ending header tags (e.g., <h1> and </h1>) and to create the line of text to dis- play (e.g., This is an h1 level head). Line 18 increments the counter before the loop- continuation test occurs at the bottom of the loop.

The do…while flowchart in Fig. 8.10 makes it clear that the loop-continuation test does not occur until the action executes at least once.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 8.9: DoWhileTest.html --> **6** <!-- Using the do...while repetition statement. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Using the do...while Repetition Statement</title>

**10** <script type = "text/javascript"> **11** <!-- **12** var counter = 1; **13 14 15** document.writeln( "<h" + counter + ">This is " + **16** "an h" + counter + " level head" + "</h" + **17** counter + ">" ); **18** ++counter; **19 20** // --> **21** </script> **22 23** </head><body></body> **24** </html>

**Fig. 8.9** | Using the do…while repetition statement.

do {

} while ( counter <= 6 );

8.7 break and continue Statements **297**

**8.7 break and continue Statements** The **break** and **continue statements** alter the flow of control. The break statement, when executed in a while, for, do…while or switch statement, causes immediate exit from the statement. Execution continues with the first statement after the structure. The break

statement is commonly used to escape early from a loop or to skip the remainder of a switch statement (as in Fig. 8.7). Figure 8.11 demonstrates the break statement in a for

repetition statement. During each iteration of the for statement in lines 14–20, the script writes the value

of count in the XHTML document. When the if statement in line 16 detects that count

**Fig. 8.10** | do…while repetition statement flowchart.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 8.11: BreakTest.html --> **6** <!-- Using the break statement in a for statement. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>

**10** Using the break Statement in a for Statement **11** </title> **12** <script type = "text/javascript"> **13** <!-- **14** for ( var count = 1; count <= 10; ++count ) **15** { **16** if ( count == 5 ) **17 18 19** document.writeln( "Count is: " + count + "<br />" ); **20** } //end for **21 22** document.writeln( **23** "Broke out of loop at count = " + count ); **24** // --> **25** </script> **26** </head><body></body> **27** </html>

**Fig. 8.11** | Using the break statement in a for statement. (Part 1 of 2.)

condition true

action(s)

false

break; // break loop only if count == 5

**298** Chapter 8 JavaScript: Control Statements II

is 5, the break in line 17 executes. This statement terminates the for statement, and the program proceeds to line 22 (the next statement in sequence immediately after the for

statement), where the script writes the value of count when the loop terminated (i.e., 5). The loop executes line 19 only four times.

The continue statement, when executed in a while, for or do…while statement, skips the remaining statements in the body of the statement and proceeds with the next iteration of the loop. In while and do…while statements, the loop-continuation test eval- uates immediately after the continue statement executes. In for statements, the incre- ment expression executes, then the loop-continuation test evaluates. This is the one case in which for and while differ. Improper placement of continue before the increment in a while may result in an infinite loop.

Figure 8.12 uses continue in a for statement to skip the document.writeln state- ment in line 20 when the if statement in line 17 determines that the value of count is 5. When the continue statement executes, the script skips the remainder of the for state- ment’s body. Program control continues with the increment of the for statement’s control variable, followed by the loop-continuation test to determine whether the loop should continue executing.

**Software Engineering Observation 8.2** _Some programmers feel that break and continue violate structured programming. They do not use break and continue, because the effects of these statements can be achieved by structured programming techniques._ 8.2

**Performance Tip 8.1** _The break and continue statements, when used properly, perform faster than the corresponding structured techniques._ 8.1

**Software Engineering Observation 8.3** \_There is a tension between achieving quality software engineering and achieving the best- performing software. Often, one of these goals is achieved at the expense of the other. For all but the most performance-intensive situations, the following rule of thumb should be followed: First make your code simple, readable and correct; then make it fast and small, but only if necessary.\_8.3

**Fig. 8.11** | Using the break statement in a for statement. (Part 2 of 2.)

8.8 Labeled break and continue Statements **299**

**8.8 Labeled break and continue Statements** The break statement can break out of an immediately enclosing while, for, do…while or switch statement. To break out of a nested set of structures, you can use the **labeled break**

**statement**. This statement, when executed in a while, for, do…while or switch state- ment, causes immediate exit from that statement and any number of enclosing repetition

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 8.12: ContinueTest.html --> **6** <!-- Using the continue statement in a for statement. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>

**10** Using the continue Statement in a for Statement **11** </title> **12 13** <script type = "text/javascript"> **14** <!-- **15** for ( var count = 1; count <= 10; ++count ) **16** { **17** if ( count == 5 ) **18 19 20** document.writeln( "Count is: " + count + "<br />" ); **21** } //end for **22 23** document.writeln( "Used continue to skip printing 5" ); **24** // --> **25** </script> **26 27** </head><body></body> **28** </html>

**Fig. 8.12** | Using the continue statement in a for statement.

continue; // skip remaining loop code only if count == 5

**300** Chapter 8 JavaScript: Control Statements II

statements; program execution resumes with the first statement after the enclosing **labeled statement** (a statement preceded by a label). The labeled statement can be a block (a set of statements enclosed in curly braces, {}). Labeled break statements commonly are used to terminate nested looping structures containing while, for, do…while or switch state- ments. Figure 8.13 demonstrates the labeled break statement in a nested for statement.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 8.13: BreakLabelTest.html --> **6** <!-- Labeled break statement in a nested for statement. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Using the break Statement with a Label</title>

**10** <script type = "text/javascript"> **11** <!-- **12 13** for ( var row = 1; row <= 10; ++row ) **14** { **15** for ( var column = 1; column <= 5 ; ++column ) **16** { **17** if ( row == 5 ) **18 19 20** document.write( "\* " ); **21** } //end for **22 23** document.writeln( "<br />" ); **24** } //end for **25 26** // the following line is skipped **27** document.writeln( "This line should not print" ); **28** } // end block labeled stop **29 30** document.writeln( "End of script" ); **31** // --> **32** </script> **33** </head><body></body> **34** </html>

**Fig. 8.13** | Labeled break statement in a nested for statement.

stop: { // labeled block

break stop; // jump to end of stop block

8.8 Labeled break and continue Statements **301**

The labeled block (lines 12–28) begins with a **label** (an identifier followed by a colon). Here, we use the label stop:. The block is enclosed between the braces at the end of line 12 and in line 28, and includes both the nested for statement starting in line 13 and the document.writeln statement in line 27. When the if statement in line 17 detects that row is equal to 5, the statement in line 18 executes. This statement terminates both the for

statement in line 15 and its enclosing for statement in line 13, and the program proceeds to the statement in line 30 (the first statement in sequence after the labeled block). The inner for statement executes its body only four times. Note that the document.writeln

statement in line 27 never executes, because it is included in the labeled block and the outer for statement never completes.

The continue statement proceeds with the next iteration (repetition) of the immedi- ately enclosing while, for or do…while statement. The **labeled continue statement**, when executed in a repetition statement (while, for or do…while), skips the remaining statements in the structure’s body and any number of enclosing repetition statements, then proceeds with the next iteration of the enclosing **labeled repetition statement** (a rep- etition statement preceded by a label). In labeled while and do…while statements, the loop-continuation test evaluates immediately after the continue statement executes. In a labeled for statement, the increment expression executes, then the loop-continuation test evaluates. Figure 8.14 uses the labeled continue statement in a nested for statement to cause execution to continue with the next iteration of the outer for statement.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 8.14: ContinueLabelTest.html --> **6** <!-- Labeled continue statement in a nested for statement. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Using the continue Statement with a Label</title>

**10** <script type = "text/javascript"> **11** <!-- **12 13** for ( var row = 1; row <= 5; ++row ) **14** { **15** document.writeln( "<br />" ); **16 17** for ( var column = 1; column <= 10; ++column ) **18** { **19** if ( column > row ) **20 21 22** document.write( "\* " ); **23** } //end for **24** } //end for **25** // --> **26** </script> **27** </head><body></body> **28** </html>

**Fig. 8.14** | Labeled continue statement in a nested for statement. (Part 1 of 2.)

nextRow: // target label of continue statement

continue nextRow; // next iteration of labeled loop

**302** Chapter 8 JavaScript: Control Statements II

The labeled for statement (lines 13–24) starts with the nextRow label in line 12. When the if statement in line 19 in the inner for statement detects that column is greater than row, line 20 executes and program control continues with the increment of the con- trol variable of the outer for statement. Even though the inner for statement counts from 1 to 10, the number of \* characters output on a row never exceeds the value of row.

**8.9 Logical Operators** So far, we have studied only such **simple conditions** as count <= 10, total > 1000 and num-

ber != sentinelValue. These conditions were expressed in terms of the relational opera- tors >, <, >= and <=, and in terms of the equality operators == and !=. Each decision tested one condition. To make a decision based on multiple conditions, we performed these tests in separate statements or in nested if or if…else statements.

JavaScript provides **logical operators** that can be used to form more complex condi- tions by combining simple conditions. The logical operators are **&&** (**logical AND**), **||** (**logical OR**) and **!** (**logical NOT**, also called **logical negation**). We consider examples of each of these operators.

Suppose that, at some point in a program, we wish to ensure that two conditions are _both_ true before we choose a certain path of execution. In this case, we can use the logical && operator, as follows:

if ( gender == 1 && age >= 65 ) ++seniorFemales;

This if statement contains two simple conditions. The condition gender == 1 might be evaluated to determine, for example, whether a person is a female. The condition age >=

65 is evaluated to determine whether a person is a senior citizen. The if statement then considers the combined condition

gender == 1 && age >= 65

This condition is true _if and only if_ both of the simple conditions are true. Finally, if this combined condition is indeed true, the count of seniorFemales is incremented by 1. If either or both of the simple conditions are false, the program skips the incrementing and proceeds to the statement following the if statement. The preceding combined condition can be made more readable by adding redundant parentheses:

( gender == 1 ) && ( age >= 65 )

**Fig. 8.14** | Labeled continue statement in a nested for statement. (Part 2 of 2.)

8.9 Logical Operators **303**

The table in Fig. 8.15 summarizes the && operator. The table shows all four possible combinations of false and true values for _expression1_ and _expression2_. Such tables are often called **truth tables**_._ JavaScript evaluates to false or true all expressions that include relational operators, equality operators and/or logical operators.

Now let us consider the || (logical OR) operator. Suppose we wish to ensure that either _or_ both of two conditions are true before we choose a certain path of execution. In this case, we use the || operator, as in the following program segment:

if ( semesterAverage >= 90 || finalExam >= 90 ) document.writeln( "Student grade is A" );

This statement also contains two simple conditions. The condition semesterAverage >=

90 is evaluated to determine whether the student deserves an “A” in the course because of a solid performance throughout the semester. The condition finalExam >= 90 is evaluated to determine whether the student deserves an “A” in the course because of an outstanding performance on the final exam. The if statement then considers the combined condition

semesterAverage >= 90 || finalExam >= 90

and awards the student an “A” if either or both of the simple conditions are true. Note that the message "Student grade is A" is _not_ printed only when both of the simple con- ditions are false. Figure 8.16 is a truth table for the logical OR operator (||).

The && operator has a higher precedence than the || operator. Both operators asso- ciate from left to right. An expression containing && or || operators is evaluated only until truth or falsity is known. Thus, evaluation of the expression

gender == 1 && age >= 65

expression1 expression2 expression1 && expression2

false false false

false true false

true false false

true true true

**Fig. 8.15** | Truth table for the && (logical AND) operator.

expression1 expression2 expression1 || expression2

false false false

false true true

true false true

true true true

**Fig. 8.16** | Truth table for the || (logical OR) operator.

**304** Chapter 8 JavaScript: Control Statements II

stops immediately if gender is not equal to 1 (i.e., the entire expression is false) and con- tinues if gender is equal to 1 (i.e., the entire expression could still be true if the condition age >= 65 is true). Similarly, the || operator immediately returns true if the first operand is true. This performance feature for evaluation of logical AND and logical OR expres- sions is called **short-circuit evaluation**_._

JavaScript provides the ! (logical negation) operator to enable a programmer to “reverse” the meaning of a condition (i.e., a true value becomes false, and a false value becomes true). Unlike the logical operators && and ||, which combine two conditions (i.e., they are binary operators), the logical negation operator has only a single condition as an operand (i.e., it is a unary operator). The logical negation operator is placed before a condition to choose a path of execution if the original condition (without the logical nega- tion operator) is false, as in the following program segment:

if ( ! ( grade == sentinelValue ) ) document.writeln( "The next grade is " + grade );

The parentheses around the condition grade == sentinelValue are needed, because the logical negation operator has a higher precedence than the equality operator. Figure 8.17 is a truth table for the logical negation operator.

In most cases, the programmer can avoid using logical negation by expressing the con- dition differently with an appropriate relational or equality operator. For example, the pre- ceding statement may also be written as follows:

if ( grade != sentinelValue ) document.writeln( "The next grade is " + grade );

The script in Fig. 8.18 demonstrates all the logical operators by producing their truth tables. The script produces an XHTML table containing the results.

expression !expression

false true

true false

**Fig. 8.17** | Truth table for operator ! (logical negation).

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 8.18: LogicalOperators.html --> **6** <!-- Demonstrating logical operators. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Demonstrating the Logical Operators</title>

**Fig. 8.18** | Demonstrating logical operators. (Part 1 of 2.)

8.9 Logical Operators **305**

**10** <style type = "text/css"> **11** table { width: 100% } **12** td.left { width: 25% } **13** </style> **14** <script type = "text/javascript"> **15** <!-- **16** document.writeln( **17** "<table border = \\"1\\"" ); **18** document.writeln( **19** "<caption>Demonstrating Logical " + **20** "Operators</caption>" ); **21** document.writeln( **22** "<tr><td class = \\"left\\">Logical AND (&&)</td>" + **23 24 25 26 27** "</td></tr>" ); **28** document.writeln( **29** "<tr><td class = \\"left\\">Logical OR (||)</td>" + **30 31 32 33 34** "</td></tr>" ); **35** document.writeln( **36** "<tr><td class = \\"left\\">Logical NOT (!)</td>" + **37 38 39** document.writeln( "</table>" ); **40** // --> **41** </script> **42** </head><body></body> **43** </html>

**Fig. 8.18** | Demonstrating logical operators. (Part 2 of 2.)

"<td>false && false: " + ( false && false ) + "<br />false && true: " + ( false && true ) + "<br />true && false: " + ( true && false ) + "<br />true && true: " + ( true && true ) +

"<td>false || false: " + ( false || false ) + "<br />false || true: " + ( false || true ) + "<br />true || false: " + ( true || false ) + "<br />true || true: " + ( true || true ) +

"<td>!false: " + ( !false ) + "<br />!true: " + ( !true ) + "</td></tr>" );

**306** Chapter 8 JavaScript: Control Statements II

In the output of Fig. 8.18, the strings "false" and "true" indicate false and true

for the operands in each condition. The result of the condition is shown as true or false. Note that when you use the concatenation operator with a boolean value and a string, JavaScript automatically converts the boolean value to string “false" or "true". Lines 16–39 build an XHTML table containing the results.

An interesting feature of JavaScript is that most nonboolean values can be converted to a boolean true or false value. Nonzero numeric values are considered to be true. The numeric value zero is considered to be false. Any string that contains characters is con- sidered to be true. The empty string (i.e., the string containing no characters) is consid- ered to be false. The value null and variables that have been declared but not initialized are considered to be false. All objects (e.g., the browser’s document and window objects and JavaScript’s Math object) are considered to be true.

Figure 8.19 shows the precedence and associativity of the JavaScript operators intro- duced up to this point. The operators are shown top to bottom in decreasing order of pre- cedence.

**8.10 Summary of Structured Programming** Just as architects design buildings by employing the collective wisdom of their profession, so should programmers design programs. Our field is younger than architecture, and our collective wisdom is considerably sparser. We have learned that structured programming produces programs that are easier to understand than unstructured programs, and thus are easier to test, debug, and modify.

Flowcharts reveal the structured nature of programs or the lack thereof. Connecting individual flowchart symbols arbitrarily can lead to unstructured programs. Therefore, the programming profession has chosen to combine flowchart symbols to form a limited set of control structures and to build structured programs by properly combining control structures in two simple ways.

Operator Associativity Type

++ -- ! right to left unary

\* / % left to right multiplicative

\+ - left to right additive

< <= > >= left to right relational

\== != left to right equality

&& left to right logical AND

|| left to right logical OR

?: right to left conditional

\= += -= \*= /= %= right to left assignment

**Fig. 8.19** | Precedence and associativity of the operators discussed so far.

8.10 Summary of Structured Programming **307**

For simplicity, only single-entry/single-exit control structures are used—that is, there is only one way to enter and one way to exit each control structure. Connecting control structures in sequence to form structured programs is simple: The exit point of one control structure is connected to the entry point of the next control structure (i.e., the control structures are simply placed one after another in a program). We have called this process control-structure stacking. The rules for forming structured programs also allow for con- trol structures to be nested. Figure 8.20 summarizes JavaScript’s control structures. Small circles are used in the figure to indicate the single entry point and the single exit point of each structure.

Figure 8.21 shows the rules for forming properly structured programs. The rules assume that the rectangle flowchart symbol may be used to indicate any action, including input/output. \[_Note:_ An oval flowchart symbol indicates the beginning and end of a pro- cess.\]

Applying the rules in Fig. 8.21 always results in a structured flowchart with a neat, building-block-like appearance. For example, repeatedly applying Rule 2 to the simplest

**Fig. 8.20** | Single-entry/single-exit sequence, selection and repetition structures.

break

**Sequence**

\[t\]

\[f\]

if statement (single selection)

\[t\]

\[f\]

switch statement (multiple selection)

\[t\]

\[f\]

\[t\]

\[f\]

**.**

**.**

**.**

\[t\]

\[f\]

while statement

\[t\]

\[f\]

for statement

\[t\]

\[f\]

do…while statement

.

.

.

**Selection**

**Repetition**

break

break

\[t\]\[f\]

if…else statement (double selection)

**308** Chapter 8 JavaScript: Control Statements II

flowchart (Fig. 8.22) results in a structured flowchart containing many rectangles in sequence (Fig. 8.23). Note that Rule 2 generates a stack of control structures; so let us call Rule 2 the **stacking rule**.

Rule 3 is called the **nesting rule**. Repeatedly applying Rule 3 to the simplest flowchart results in a flowchart with neatly nested control structures. For example, in Fig. 8.24, the rectangle in the simplest flowchart is first replaced with a double-selection (if…else) structure. Then Rule 3 is applied again to both of the rectangles in the double-selection structure by replacing each of these rectangles with double-selection structures. The

Rules for forming structured programs

1\. Begin with the “simplest flowchart” (Fig. 8.22).

2\. Any rectangle (action) can be replaced by two rectangles (actions) in sequence.

3\. Any rectangle (action) can be replaced by any control structure (sequence, if, if…else, switch, while, do…while or for).

4\. Rules 2 and 3 may be applied as often as necessary and in any order.

**Fig. 8.21** | Forming rules for structured programs.

**Fig. 8.22** | Simplest flowchart.

**Fig. 8.23** | Repeatedly applying Rule 2 of Fig. 8.21 to the simplest flowchart.

**.**

**.**

**.**

Rule 2 Rule 2 Rule 2

8.10 Summary of Structured Programming **309**

dashed box around each of the double-selection structures represents the rectangle in the original simplest flowchart that was replaced.

Rule 4 generates larger, more involved and more deeply nested structures. The flow- charts that emerge from applying the rules in Fig. 8.21 constitute the set of all possible structured flowcharts and thus the set of all possible structured programs.

The beauty of the structured approach is that we use only seven simple single-entry/ single-exit pieces and assemble them in only two simple ways. Figure 8.25 shows the kinds of stacked building blocks that emerge from applying Rule 2 and the kinds of nested building blocks that emerge from applying Rule 3. The figure also shows the kind of over- lapped building blocks that cannot appear in structured flowcharts (because of the elimi- nation of the goto statement).

If the rules in Fig. 8.21 are followed, an unstructured flowchart (like the one in Fig. 8.26) cannot be created. If you are uncertain about whether a particular flowchart is structured, apply the rules of Fig. 8.21 in reverse to try to reduce the flowchart to the sim-

**Fig. 8.24** | Applying Rule 3 of Fig. 8.21 to the simplest flowchart.

Rule 3

Rule 3 Rule 3

**310** Chapter 8 JavaScript: Control Statements II

plest flowchart. If the flowchart is reducible to the simplest flowchart, the original flow- chart is structured; otherwise, it is not.

Structured programming promotes simplicity. Bohm and Jacopini have given us the result that only three forms of control are needed:

• sequence

• selection

• repetition

Sequence is trivial. Selection is implemented in one of three ways:

• if statement (single selection)

• if…else statement (double selection)

• switch statement (multiple selection)

In fact, it is straightforward to prove that the if statement is sufficient to provide any form of selection; everything that can be done with the if…else statement and the switch

statement can be implemented by combining if statements (although perhaps not as smoothly).

Repetition is implemented in one of four ways:

• while statement

• do…while statement

• for statement

• for…in statement (discussed in Chapter 10)

**Fig. 8.25** | Stacked, nested and overlapped building blocks.

**Fig. 8.26** | Unstructured flowchart.

Stacked building blocks Nested building blocks Overlapping building blocks (Illegal in structured programs)

8.11 Wrap-Up **311**

It is straightforward to prove that the while statement is sufficient to provide any form of repetition. Everything that can be done with the do…while statement and the for state- ment can be done with the while statement (although perhaps not as elegantly).

Combining these results illustrates that any form of control ever needed in a Java- Script program can be expressed in terms of:

• sequence

• if statement (selection)

• while statement (repetition)

These control structures can be combined in only two ways—stacking and nesting. In- deed, structured programming promotes simplicity.

**8.11 Wrap-Up** In this chapter, we discussed the composition of programs from control structures con- taining actions and decisions. We expanded the previous chapter’s discussion on control structures, discussing the for statement, the do…while statement and the switch state- ment. We also saw how break and continue can be used to alter the flow of the program.

In Chapter 9, we introduce another program-structuring unit, called the function. You’ll learn to compose large programs by combining functions that are composed of con- trol structures. We will also discuss how functions promote software reusability.

**8.12 Web Resources** www.deitel.com/javascript/

The Deitel JavaScript Resource Center contains links to some of the best JavaScript resources on the web. There you’ll find categorized links to JavaScript tools, code generators, forums, books, libraries, frameworks and more. Also check out the tutorials for all skill levels, from introductory to advanced. Be sure to visit the related Resource Centers on XHTML (www.deitel.com/xhtml/) and CSS 2.1 (www.deitel.com/css21/).

**Summary _Section 8.2 Essentials of Counter-Controlled Repetition_** • Counter-controlled repetition requires: the _name_ of a control variable, the _initial value_ of the

control variable, the _increment_ (or _decrement_) by which the control variable is modified each time through the loop, and the condition that tests for the _final value_ of the control variable to deter- mine whether looping should continue.

• Because the double-quote character delimits the beginning and end of a string literal in Java- Script, it cannot be used in the contents of the string unless it is preceded by a \\ to create the escape sequence \\". XHTML allows either single quotes (') or double quotes (") to be placed around the value specified for an attribute. JavaScript allows single quotes to be placed in a string literal.

**_Section 8.3 for Repetition Statement_** • The for statement “does it all”—it specifies each of the items needed for counter-controlled rep-

etition with a control variable.

**312** Chapter 8 JavaScript: Control Statements II

• You can use a block to put multiple statements into the body of a for construct.

• The for statement takes three expressions: an initialization, a condition and an expression.

• The increment expression in the for statement acts like a stand-alone statement at the end of the body of the for statement.

• Place only expressions involving the control variable in the initialization and increment sections of a for statement.

• The three expressions in the for statement are optional. The two semicolons in the for statement are required.

• The initialization, loop-continuation condition and increment portions of a for statement can contain arithmetic expressions.

• The part of a script in which a variable name can be used is known as the variable’s scope.

• The “increment” of a for statement may be negative, in which case it is called a decrement and the loop actually counts downward.

• If the loop-continuation condition initially is false, the body of the for statement is not per- formed. Instead, execution proceeds with the statement following the for statement.

**_Section 8.4 Examples Using the for Statement_** • JavaScript does not include an exponentiation operator. Instead, we use the Math object’s pow

method for this purpose. Math.pow(x, y) calculates the value of x raised to the yth power.

• Floating-point numbers can cause trouble as a result of rounding errors.

**_Section 8.5 switch Multiple-Selection Statement_** • JavaScript provides the switch multiple-selection statement in which a variable or expression is

tested separately for each of the values it may assume. Different actions are taken for each value*.*

• The CSS property list-style-type allows you to set the numbering system for the list. Possible values include decimal (numbers—the default), lower-roman (lowercase roman numerals), up- per-roman (uppercase roman numerals), lower-alpha (lowercase letters), upper-alpha (upper- case letters), and several others.

• The switch statement consists of a series of case labels and an optional default case. When the flow of control reaches the switch statement, the script evaluates the controlling expression in the parentheses following keyword switch. The value of this expression is compared with the val- ue in each of the case labels*,* starting with the first case label. If the comparison evaluates to true, the statements after the case label are executed in order until a break statement is reached.

• The break statement is used as the last statement in each case to exit the switch statement im- mediately.

• The default case allows you to specify a set of statements to execute if no other case is satisfied. This case is usually the last case in the switch statement.

• Each case can have multiple actions (statements). The switch statement is different from other statements in that braces are not required around multiple actions in a case of a switch.

• The break statement is not required for the last case in the switch statement because program control automatically continues with the next statement after the switch statement.

• Having several case labels listed together (e.g., case 1: case 2: with no statements between the cases) simply means that the same set of actions is to occur for each case.

**_Section 8.6 do…while Repetition Statement_** • The do…while statement tests the loop-continuation condition _after_ the loop body executes—

therefore, _the loop body always executes at least once._

Summary **313**

**_Section 8.7 break and continue Statements_** • The break statement, when executed in a while, for, do…while or switch statement, causes im-

mediate exit from the statement. Execution continues with the first statement after the structure.

• The break statement is commonly used to escape early from a loop or to skip the remainder of a switch statement.

• The continue statement, when executed in a while, for or do…while statement, skips the re- maining statements in the body of the statement and proceeds with the next iteration of the loop. In while and do…while statements, the loop-continuation test evaluates immediately after the continue statement executes. In for statements, the increment expression executes, then the loop-continuation test evaluates.

**_Section 8.8 Labeled break and continue Statements_** • To break out of a nested control statement, you can use the labeled break statement. This state-

ment, when executed in a while, for, do…while or switch statement, causes immediate exit from that statement and any number of enclosing repetition statements; program execution resumes with the first statement after the specified labeled statement (a statement preceded by a label).

• A labeled statement can be a block (a set of statements enclosed in curly braces, {}).

• Labeled break statements commonly are used to terminate nested looping structures containing while, for, do…while or switch statements.

• The labeled continue statement, when executed in a repetition statement (while, for or do…while), skips the remaining statements in the structure’s body and any number of enclosing repetition statements, then proceeds with the next iteration of the specified labeled repetition statement (a repetition statement preceded by a label).

• In labeled while and do…while statements, the loop-continuation test evaluates immediately af- ter the continue statement executes. In a labeled for statement, the increment expression exe- cutes, then the loop-continuation test evaluates.

**_Section 8.9 Logical Operators_** • JavaScript provides logical operators that can be used to form more complex conditions by com-

bining simple conditions. The logical operators are && (logical AND), || (logical OR) and ! (log- ical NOT, also called logical negation).

• The && operator is used to ensure that two conditions are _both_ true before choosing a certain path of execution.

• JavaScript evaluates to false or true all expressions that include relational operators, equality op- erators and/or logical operators.

• The || (logical OR) operator is used to ensure that either _or_ both of two conditions are true be- fore choosing choose a certain path of execution.

• The && operator has a higher precedence than the || operator. Both operators associate from left to right.

• An expression containing && or || operators is evaluated only until truth or falsity is known. This is called short-circuit evaluation.

• JavaScript provides the ! (logical negation) operator to enable a programmer to “reverse” the meaning of a condition (i.e., a true value becomes false, and a false value becomes true).

• The logical negation operator has only a single condition as an operand (i.e., it is a unary opera- tor). The logical negation operator is placed before a condition to evaluate to true if the original condition (without the logical negation operator) is false.

• The logical negation operator has a higher precedence than the equality operator.

**314** Chapter 8 JavaScript: Control Statements II

• Most nonboolean values can be converted to a boolean true or false value. Nonzero numeric values are considered to be true. The numeric value zero is considered to be false. Any string that contains characters is considered to be true. The empty string (i.e., the string containing no characters) is considered to be false. The value null and variables that have been declared but not initialized are considered to be false. All objects (e.g., the browser’s document and window

objects and JavaScript’s Math object) are considered to be true.

**Terminology** ! operator && operator || operator break

case label continue

counter-controlled repetition default case in switch

do…while repetition statement for repetition statement for statement header infinite loop labeled break statement labeled block labeled continue statement labeled repetition statement logical AND (&&) logical negation (!) logical operator logical OR (||)

loop-continuation condition Math object multiple selection nested control structure nesting rule Number object off-by-one error pow method of the Math object repetition structure scope short-circuit evaluation simple condition single-entry/single-exit control structure stacked control structure stacking rule switch selection statement toFixed method truth tables while repetition statement zero-based counting

**Self-Review Exercises 8.1** State whether each of the following is _true_ or _false_. If _false_, explain why.

a) The default case is required in the switch selection statement. b) The break statement is required in the last case of a switch selection statement. c) The expression ( x > y && a < b ) is true if either x > y is true or a < b is true. d) An expression containing the || operator is true if either or both of its operands is true.

**8.2** Write a JavaScript statement or a set of statements to accomplish each of the following tasks: a) Sum the odd integers between 1 and 99. Use a for statement. Assume that the variables

sum and count have been declared. b) Calculate the value of 2.5 raised to the power of 3. Use the pow method. c) Print the integers from 1 to 20 by using a while loop and the counter variable x. Assume

that the variable x has been declared, but not initialized. Print only five integers per line. \[_Hint:_ Use the calculation x % 5. When the value of this expression is 0, use docu-

ment.write( "<br />" ) to output a line break in the XHTML document.\] d) Repeat Exercise 8.2 (c), but using a for statement.

**8.3** Find the error in each of the following code segments, and explain how to correct it: a) x = 1;

while ( x <= 10 );

++x;

}

Answers to Self-Review Exercises **315**

b) for ( y = .1; y != 1.0; y += .1 )

document.write( y + " " );

c) switch ( n )

{

case 1:

document.writeln( "The number is 1" );

case 2:

document.writeln( "The number is 2" );

break;

default:

document.writeln( "The number is not 1 or 2" );

break;

}

d) The following code should print the values from 1 to 10: n = 1;

while ( n < 10 )

document.writeln( n++ );

**Answers to Self-Review Exercises 8.1** a) False. The default case is optional. If no default action is needed, then there is no need for a default case. b) False. The break statement is used to exit the switch statement. The break

statement is not required for the last case in a switch statement. c) False. Both of the relational ex- pressions must be true in order for the entire expression to be true when using the && operator. d) True.

**8.2** a) sum = 0;

for ( count = 1; count <= 99; count += 2 )

sum += count;

b) Math.pow( 2.5, 3 )

c) x = 1;

while ( x <= 20 ) {

document.write( x + " " );

if ( x % 5 == 0 )

document.write( "<br />" );

++x;

}

d) for ( x = 1; x <= 20; x++ ) {

document.write( x + " " );

if ( x % 5 == 0 )

document.write( "<br />" );

}

_or_ for ( x = 1; x <= 20; x++ )

if ( x % 5 == 0 )

document.write( x + "<br />" );

else

document.write( x + " " );

**316** Chapter 8 JavaScript: Control Statements II

**8.3** a) Error: The semicolon after the while header causes an infinite loop, and there is a missing left brace. Correction: Replace the semicolon by a {, or remove both the ; and the }.

b) Error: Using a floating-point number to control a for repetition statement may not work, because floating-point numbers are represented approximately by most computers. Correction: Use an integer, and perform the proper calculation to get the values you de- sire:

for ( y = 1; y != 10; y++ ) document.writeln( ( y / 10 ) + " " );

c) Error: Missing break statement in the statements for the first case. Correction: Add a break statement at the end of the statements for the first case. Note that this missing statement is not necessarily an error if the programmer wants the state- ment of case 2: to execute every time the case 1: statement executes.

d) Error: Improper relational operator used in the while continuation condition. Correction: Use <= rather than <, or change 10 to 11.

**Exercises 8.4** Find the error in each of the following segments of code. \[_Note:_ There may be more than one error.\]

a) For ( x = 100, x >= 1, x++ )

document.writeln( x );

b) The following code should print whether integer value is odd or even: switch ( value % 2 ) {

case 0:

document.writeln( "Even integer" );

case 1:

document.writeln( "Odd integer" );

}

c) The following code should output the odd integers from 19 to 1: for ( x = 19; x >= 1; x += 2 )

document.writeln( x );

d) The following code should output the even integers from 2 to 100: counter = 2;

do {

document.writeln( counter );

counter += 2;

} While ( counter < 100 );

**8.5** What does the following script do?

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Exercise 8.5: ex08\_05.html --> **6** <html xmlns = "http://www.w3.org/1999/xhtml"> **7** <head><title>Mystery</title> **8** <script type = "text/javascript"> **9** <!--

**10** document.writeln( "<table>" ); **11**

Exercises **317**

**8.6** Write a script that finds the smallest of several non-negative integers. Assume that the first value read specifies the number of values to be input from the user.

**8.7** Write a script that calculates the product of the odd integers from 1 to 15 then outputs XHTML text that displays the results.

**8.8** Modify the compound interest program in Fig. 8.6 to repeat its steps for interest rates of 5, 6, 7, 8, 9 and 10 percent. Use a for statement to vary the interest rate. Use a separate table for each rate.

**8.9** Write a script that outputs XHTML to display the given patterns separately, one below the other. Use for statements to generate the patterns. All asterisks (\*) should be printed by a single statement of the form document.write( "\*" ); (this causes the asterisks to print side by side). A statement of the form document.writeln( "<br />" ); can be used to position to the next line. A statement of the form document.write( " " ); can be used to display a space (needed for the last two patterns). There should be no other output statements in the program. \[_Hint:_ The last two pat- terns require that each line begin with an appropriate number of blanks. You may need to use the XHTML <pre></pre> tags.\]

(a) (b) (c) (d) \* \*\*\*\*\*\*\*\*\*\* \*\*\*\*\*\*\*\*\*\* \* \*\* \*\*\*\*\*\*\*\*\* \*\*\*\*\*\*\*\*\* \*\* \*\*\* \*\*\*\*\*\*\*\* \*\*\*\*\*\*\*\* \*\*\* \*\*\*\* \*\*\*\*\*\*\* \*\*\*\*\*\*\* \*\*\*\* \*\*\*\*\* \*\*\*\*\*\* \*\*\*\*\*\* \*\*\*\*\* \*\*\*\*\*\* \*\*\*\*\* \*\*\*\*\* \*\*\*\*\*\* \*\*\*\*\*\*\* \*\*\*\* \*\*\*\* \*\*\*\*\*\*\* \*\*\*\*\*\*\*\* \*\*\* \*\*\* \*\*\*\*\*\*\*\* \*\*\*\*\*\*\*\*\* \*\* \*\* \*\*\*\*\*\*\*\*\* \*\*\*\*\*\*\*\*\*\* \* \* \*\*\*\*\*\*\*\*\*\*

**8.10** One interesting application of computers is the drawing of graphs and bar charts (some- times called histograms). Write a script that reads five numbers between 1 and 30. For each number read, output XHTML text that displays a line containing the same number of adjacent asterisks. For example, if your program reads the number 7, it should output XHTML text that displays \*\*\*\*\*\*\*.

**8.11** _(“The Twelve Days of Christmas” Song)_ Write a script that uses repetition and a switch struc- tures to print the song “The Twelve Days of Christmas.” You can find the words at the site

www.santas.net/twelvedaysofchristmas.htm

**12** for ( var i = 1; i <= 10; i++ ) **13** { **14** document.writeln( "<tr>" ); **15 16** for ( var j = 1; j <= 5; j++ ) **17** document.writeln( "<td>(" + i + ", " + j + ")</td>" ); **18 19** document.writeln( "</tr>" ); **20** } // end for **21 22** document.writeln( "</table>" ); **23** \--> **24** </script> **25** </head><body /> **26** </html>

**318** Chapter 8 JavaScript: Control Statements II

**8.12** A mail-order house sells five different products whose retail prices are as follows: product 1, $2.98; product 2, $4.50; product 3, $9.98; product 4, $4.49; and product 5, $6.87. Write a script that reads a series of pairs of numbers as follows:

a) Product number b) Quantity sold for one day

Your program should use a switch statement to determine each product’s retail price and should calculate and output XHTML that displays the total retail value of all the products sold last week. Use a prompt dialog to obtain the product number and quantity from the user. Use a sentinel-con- trolled loop to determine when the program should stop looping and display the final results.

**8.13** Assume that i = 1, j = 2, k = 3 and m = 2. What does each of the given statements print? Are the parentheses necessary in each case?

a) document.writeln( i == 1 );

b) document.writeln( j == 3 );

c) document.writeln( i >= 1 && j < 4 );

d) document.writeln( m <= 99 && k < m );

e) document.writeln( j >= i || k == m );

f) document.writeln( k + m < j || 3 - j >= k );

g) document.writeln( !( k > m ) );

**8.14** Modify Exercise 8.9 to combine your code from the four separate triangles of asterisks into a single script that prints all four patterns side by side, making clever use of nested for statements.

**8.15** _(De Morgan’s Laws)_ In this chapter, we have discussed the logical operators &&, || and !. De Morgan’s Laws can sometimes make it more convenient for us to express a logical expression. These laws state that the expression !(_condition1_ && _condition2_) is logically equivalent to the expression (!_condition1_ || !_condition2_). Also, the expression !(_condition1_ || _condition2_) is logically equivalent to the expression (!_condition1_ && !_condition2_). Use De Morgan’s Laws to write equivalent expres- sions for each of the following, then write a program to show that the original expression and the new expression are equivalent in each case:

a) !( x < 5 ) && !( y >= 7 )

b) !( a == b ) || !( g != 5 )

c) !( ( x <= 8 ) && ( y > 4 ) )

d) !( ( i > 4 ) || ( j <= 6 ) )

**8.16** Write a script that prints the following diamond shape:

\* \*\*\*\*\*\*\*\*\*\* \*\*\*\*\*\*\*\*\*\* \* \*\* \*\*\*\*\*\*\*\*\* \*\*\*\*\*\*\*\*\* \*\* \*\*\* \*\*\*\*\*\*\*\* \*\*\*\*\*\*\*\* \*\*\* \*\*\*\* \*\*\*\*\*\*\* \*\*\*\*\*\*\* \*\*\*\* \*\*\*\*\* \*\*\*\*\*\* \*\*\*\*\*\* \*\*\*\*\* \*\*\*\*\*\* \*\*\*\*\* \*\*\*\*\* \*\*\*\*\*\* \*\*\*\*\*\*\* \*\*\*\* \*\*\*\* \*\*\*\*\*\*\* \*\*\*\*\*\*\*\* \*\*\* \*\*\* \*\*\*\*\*\*\*\* \*\*\*\*\*\*\*\*\* \*\* \*\* \*\*\*\*\*\*\*\*\* \*\*\*\*\*\*\*\*\*\* \* \* \*\*\*\*\*\*\*\*\*\*

\* \*\*\*

\*\*\*\*\* \*\*\*\*\*\*\*

\*\*\*\*\*\*\*\*\* \*\*\*\*\*\*\* \*\*\*\*\* \*\*\* \*

Exercises **319**

You may use output statements that print a single asterisk (\*), a single space or a single newline character. Maximize your use of repetition (with nested for statements), and minimize the number of output statements.

**8.17** Modify the program you wrote in Exercise 8.16 to read an odd number in the range 1 to 19. This number specifies the number of rows in the diamond. Your program should then display a diamond of the appropriate size.

**8.18** A criticism of the break statement and the continue statement is that each is unstructured. Actually, break statements and continue statements can always be replaced by structured state- ments, although coding the replacement can be awkward. Describe in general how you would re- move any break statement from a loop in a program and replace it with some structured equivalent. \[_Hint:_ The break statement “jumps out of” a loop from the body of that loop. The other way to leave is by failing the loop-continuation test. Consider using in the loop-continuation test a second test that indicates “early exit because of a ‘break’ condition.”\] Use the technique you develop here to remove the break statement from the program in Fig. 8.11.

**8.19** What does the following script do?

**8.20** Describe in general how you would remove any continue statement from a loop in a pro- gram and replace it with some structured equivalent. Use the technique you develop to remove the continue statement from the program in Fig. 8.12.

**8.21** Given the following switch statement:

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Exercise 8.19: ex08\_19.html --> **6** <html xmlns = "http://www.w3.org/1999/xhtml"> **7** <head><title>Mystery</title> **8** <script type = "text/javascript"> **9** <!--

**10** for ( var i = 1; i <= 5; i++ ) **11** { **12** for ( var j = 1; j <= 3; j++ ) **13** { **14** for ( var k = 1; k <= 4; k++ ) **15** document.write( "\*" ); **16** document.writeln( "<br />" ); **17** } // end for **18** document.writeln( "<br />" ); **19** } // end for **20** // --> **21** </script> **22** </head><body></body> **23** </html>

**1** switch ( k ) **2** { **3** case 1: **4** break; **5** case 2: **6** case 3: **7** ++k; **8** break;

**320** Chapter 8 JavaScript: Control Statements II

What values are assigned to x when k has values of 1, 2, 3, 4 and 10?

**1** case 4: **2** \--k; **3** break; **4** default: **5** k \*= 3; **6** } //end switch **7 8** x = k;

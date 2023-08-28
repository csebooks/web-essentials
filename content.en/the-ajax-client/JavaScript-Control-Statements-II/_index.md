---
title: "JavaScript: Control Statements II"
weight: 5
---

# O B J E C T I V E S

In this chapter you will learn:

■ The essentials of counter-controlled repetition

■ To use the for and do…while repetition statements to execute statements in a program repeatedly.

■ To perform multiple selection using the switch selection statement.

■ To use the break and continue program-control statements

■ To use the logical operators.

## Introduction

Chapter 7 began our introduction to the types of building blocks that are available for problem solving and used them to employ proven program-construction principles. In this chapter, we continue our presentation of the theory and principles of structured pro- gramming by introducing JavaScript’s remaining control statements (with the exception of for…in, which is presented in Chapter 10). As in Chapter 7, the JavaScript techniques you will learn here are applicable to most high-level languages. In later chapters, you’ll see that control structures are helpful in manipulating objects.

## Essentials of Counter-Controlled Repetition

Counter-controlled repetition requires:

**1\.** The _name_ of a control variable (or loop counter).

**2\.** The _initial value_ of the control variable.

**3\.** The _increment_ (or _decrement_) by which the control variable is modified each time through the loop (also known as _each iteration of the loop_).

**4\.** The condition that tests for the _final value_ of the control variable to determine whether looping should continue.

To see the four elements of counter-controlled repetition, consider the simple script shown in Fig. 8.1, which displays lines of XHTML text that illustrate the seven different font sizes supported by XHTML. The declaration in line 12 _names_ the control variable (counter), reserves space for it in memory and sets it to an _initial value_ of 1. The declara- tion and initialization of counter could also have been accomplished by the following dec- laration and assignment statement:

var counter; // declare counter counter = 1; // initialize counter to 1

Lines 16–18 in the while statement write a paragraph element consisting of the string “XHTML font size” concatenated with the control variable counter’s value, which repre-

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 8.1: WhileCounter.html -->
<!-- Counter-controlled repetition. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Counter-Controlled Repetition</title>
<script type = "text/javascript">
<!--
var counter = 1; // initialization

while ( counter <= 7 ) // repetition condition
{
document.writeln( "<p style = \\"font-size: " +
counter + "ex\\">XHTML font size " + counter +
"ex</p>" );
++counter; // increment
} //end while
// -->
</script>
</head><body></body>
</html>
```

**Fig. 8.1** | Counter-controlled repetition.

sents the font size. An inline CSS style attribute sets the font-size property to the value of counter concatenated to ex. Note the use of the escape sequence \\", which is placed around attribute style’s value. Because the double-quote character delimits the beginning and end of a string literal in JavaScript, it cannot be used in the contents of the string unless it is preceded by a \\ to create the escape sequence \\". For example, if counter is 5, the preceding statement produces the markup

<p style = "font-size: 5ex">XHTML font size 5ex</p>

XHTML allows either single quotes (') or double quotes (") to be placed around the value specified for an attribute. JavaScript allows single quotes to be placed in a string literal. Thus, we could have placed single quotes around the font-size property to produce equivalent XHTML output without the use of escape sequences.

**Common Programming Error 8.1**

> _Placing a double-quote (") character inside a string literal that is delimited by double quotes causes a runtime error when the script is interpreted. To be displayed as part of a string literal, a double-quote (") character must be preceded by a \\ to form the escape sequence \\"._ 8.1

Line 19 in the while statement _increments_ the control variable by 1 for each iteration of the loop (i.e., each time the body of the loop is performed). The loop-continuation con- dition (line 14) in the while statement tests whether the value of the control variable is less than or equal to 7 (the _final value_ for which the condition is true). Note that the body of this while statement executes even when the control variable is 7. The loop terminates when the control variable exceeds 7 (i.e., counter becomes 8).

**Good Programming Practice 8.1**

> _Use integer values to control loop counting._ 8.1

**Good Programming Practice 8.2**

> _Indent the statements in the body of each control structure._ 8.2

**Good Programming Practice 8.3**

> _Put a blank line before and after each control structure, to make it stand out in the program._ 8.3

**Good Programming Practice 8.4**

> _Too many levels of nesting can make a program difficult to understand. As a general rule, try to avoid using more than three levels of nesting._ 8.4

**Good Programming Practice 8.5**

> _Vertical spacing above and below control structures and indentation of the bodies of control structures in the headers of the control structure give programs a two-dimensional appearance that enhances readability._ 8.5

## for Repetition Statement

The **for repetition statement** handles all the details of counter-controlled repetition. Figure 8.2 illustrates the power of the for statement by reimplementing the script of Fig. 8.1.

When the for statement begins executing (line 15), the control variable counter is declared and is initialized to 1 (i.e., the first statement of the for statement declares the control variable’s _name_ and provides the control variable’s _initial value_). Next, the loop-

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 8.2: ForCounter.html -->
<!-- Counter-controlled repetition with the for statement. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Counter-Controlled Repetition</title>
<script type = "text/javascript">
<!--
// Initialization, repetition condition and
// incrementing are all included in the for
// statement header.
for ( var counter = 1; counter <= 7; ++counter )
document.writeln( "<p style = \\"font-size: " +
counter + "ex\\">XHTML font size " + counter +
"ex</p>" );
// -->
</script>
</head><body></body>
</html>
```

**Fig. 8.2** | Counter-controlled repetition with the for statement.

continuation condition, counter <= 7, is checked. The condition contains the _final value_ (7) of the control variable. The initial value of counter is 1. Therefore, the condition is satisfied (i.e., true), so the body statement (lines 16–18) writes a paragraph element in the XHTML document. Then, variable counter is incremented in the expression ++counter and the loop continues execution with the loop-continuation test. The control variable is now equal to 2, so the final value is not exceeded and the program performs the body state- ment again (i.e., performs the next iteration of the loop). This process continues until thecontrol variable counter becomes 8, at which point the loop-continuation test fails and the repetition terminates.

The program continues by performing the first statement after the for statement. (In this case, the script terminates, because the interpreter reaches the end of the script.)

Figure 8.3 takes a closer look at the for statement at line 15 of Fig. 8.2. The for state- ment’s first line (including the keyword for and everything in parentheses after for) is often called the **for statement header**. Note that the for statement “does it all”—it spec- ifies each of the items needed for counter-controlled repetition with a control variable. Remember that a block is a group of statements enclosed in curly braces that can be placed anywhere that a single statement can be placed, so you can use a block to put multiple statements into the body of a for statement.

Note that Fig. 8.3 uses the loop-continuation condition counter <= 7. If you incor- rectly write counter < 7, the loop will execute only six times. This is an example of the common logic error called an **off-by-one error**_._

**Common Programming Error 8.2**

> _Using an incorrect relational operator or an incorrect final value of a loop counter in the condi- tion of a while, for or do…while statement can cause an off-by-one error or an infinite loop._ 8.2

**Good Programming Practice 8.6**

> _Using the final value in the condition of a while or for statement and using the <= relational operator will help avoid off-by-one errors. For a loop used to print the values 1 to 10, for exam- ple, the initial value of counter should be 1, and the loop-continuation condition should be counter <= 10 rather than counter < 10 (which is an off-by-one error) or counter < 11 (which is correct). Many programmers, however, prefer so-called **zero-based counting**, in which, to count 10 times through the loop, counter would be initialized to zero and the loop-continuation test would be counter < 10._ 8.6

The general format of the for statement is

for ( _initialization_; _loopContinuationTest_; _increment_ ) _statements_

where the _initialization_ expression names the loop’s control variable and provides its initial value, _loopContinuationTest_ is the expression that tests the loop-continuation condition (containing the final value of the control variable for which the condition is true), and

**Fig. 8.3** | for statement header components.

_increment_ is an expression that increments the control variable. The for statement can be represented by an equivalent while statement, with _initialization_, _loopContinuationTest_ and _increment_ placed as follows:

_initialization_;

while ( _loopContinuationTest_ ) {

_statements increment_;

}

In Section 8.7 we discuss an exception to this rule. If the _initialization_ expression in the for statement’s header is the first definition of

the control variable, the control variable can still be used after the for statement in the script. The part of a script in which a variable name can be used is known as the variable’s **scope**. Scope is discussed in detail in Chapter 9, JavaScript: Functions.

**Good Programming Practice 8.7**

> _Place only expressions involving the control variable in the initialization and increment sections of a for statement. Manipulations of other variables should appear either before the loop (if they execute only once, like initialization statements) or in the loop body (if they execute once per it- eration of the loop, like incrementing or decrementing statements)._ 8.7

The three expressions in the for statement are optional. If _loopContinuationTest_ is omitted, JavaScript assumes that the loop-continuation condition is true, thus creating an infinite loop. One might omit the _initialization_ expression if the control variable is initial- ized before the loop. One might omit the _increment_ expression if the increment is calcu- lated by statements in the body of the for statement or if no increment is needed. The increment expression in the for statement acts like a stand-alone statement at the end of the body of the for statement. Therefore, the expressions

counter = counter + 1 counter += 1 ++counter counter++

are all equivalent in the incrementing portion of the for statement. Many programmers prefer the form counter++. This is because the incrementing of the control variable occurs after the body of the loop is executed, and therefore the postincrementing form seems more natural. Preincrementing and postincrementing both have the same effect in our ex- ample, because the variable being incremented does not appear in a larger expression. The two semicolons in the for statement header are required.

**Common Programming Error 8.3**

> _Using commas instead of the two required semicolons in the header of a for statement is a syntax error._ 8.3

**Common Programming Error 8.4**

> _Placing a semicolon immediately to the right of the right parenthesis of the header of a for state- ment makes the body of that for statement an empty statement. This code is normally a logic error._ 8.4

The initialization, loop-continuation condition and increment portions of a for state- ment can contain arithmetic expressions. For example, assume that x = 2 and y = 10. If x and y are not modified in the body of the loop, then the statement

for ( var j = x; j <= 4 \* x \* y; j += y / x )

is equivalent to the statement

for ( var j = 2; j <= 80; j += 5 )

The “increment” of a for statement may be negative, in which case it is really a dec- rement and the loop actually counts downward.

If the loop-continuation condition initially is false, the for statement’s body is not performed. Instead, execution proceeds with the statement following the for statement.

The control variable frequently is printed or used in calculations in the body of a for

statement, but it does not have to be. Other times, the control variable is used for control- ling repetition but never mentioned in the body of the for statement.

**Error-Prevention Tip 8.1**

> _Although the value of the control variable can be changed in the body of a for statement, avoid changing it, because doing so can lead to subtle errors._ 8.1

The for statement is flowcharted much like the while statement. For example, Fig. 8.4 shows the flowchart of the for statement

for ( var counter = 1; counter <= 7; ++counter ) document.writeln( "<p style = \\"font-size: " +

counter + "ex\\">XHTML font size " + counter + "ex</p>" );

This flowchart makes it clear that the initialization occurs only once and that incrementing occurs _after_ each execution of the body statement. Note that, besides small circles and ar- rows, the flowchart contains only rectangle symbols and a diamond symbol.

**Fig. 8.4** | for repetition statement flowchart.

## Examples Using the for Statement

The examples in this section show methods of varying the control variable in a for state- ment. In each case, we write the appropriate for header. Note the change in the relational operator for loops that decrement the control variable.

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

**Common Programming Error 8.5**

> _Not using the proper relational operator in the loop-continuation condition of a loop that counts downward (e.g., using i <= 1 in a loop that counts down to 1) is usually a logic error that will yield incorrect results when the program runs._ 8.5

The next two scripts demonstrate the for repetition statement. Figure 8.5 uses the for statement to sum the even integers from 2 to 100. Note that the increment expression adds 2 to the control variable number after the body executes during each iteration of the loop. The loop terminates when number has the value 102 (which is not added to the sum).

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 8.5: Sum.html -->
<!-- Summation with the for repetition structure. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Sum the Even Integers from 2 to 100</title>
<script type = "text/javascript">
<!--
var sum = 0;
```

**Fig. 8.5** | Summation with the for repetition structure. (Part 1 of 2.)

```js

for ( var number = 2; number <= 100; number += 2 )
sum += number;

document.writeln( "The sum of the even integers " +
"from 2 to 100 is " + sum );
// -->
</script>
</head><body></body>
</html>
```

**Fig. 8.5** | Summation with the for repetition structure. (Part 2 of 2.)

Note that the body of the for statement in Fig. 8.5 actually could be merged into the rightmost (increment) portion of the for header by using a comma, as follows:

for ( var number = 2; number <= 100; sum += number, number += 2) ;

Similarly, the initialization sum = 0 could be merged into the initialization section of the for statement.

**Good Programming Practice 8.8**

> _Although statements preceding a for statement and in the body of a for statement can often be merged into the for header, avoid doing so, because it makes the program more difficult to read._ 8.8

**Good Programming Practice 8.9**

> _For clarity, limit the size of control-statement headers to a single line, if possible._ 8.9

The next example computes compound interest (compounded yearly) using the for

statement. Consider the following problem statement:

_A person invests $1000.00 in a savings account yielding 5 percent interest. Assuming that all the interest is left on deposit, calculate and print the amount of money in the account at the end of each year for 10 years. Use the following formula to determine the amounts:_

_a = p_ (1 + _r_) _n_

_where_

_p_ is the original amount invested (i.e., the principal) _r_ is the annual interest rate _n_ is the number of years _a_ is the amount on deposit at the end of the \_n_th year.

This problem involves a loop that performs the indicated calculation for each of the 10 years the money remains on deposit. Figure 8.6 presents the solution to this problem, displaying the results in a table.

Lines 16–18 declare three variables and initialize principal to 1000.0 and rate to .05. Lines 20–21 write an XHTML <table> tag, and lines 22–23 write the caption that summarizes the table’s content. Lines 24–25 create the table’s header section (<thead>), a

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 8.6: Interest.html -->
<!-- Compound interest calculation with a for loop. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Calculating Compound Interest</title>
<style type = "text/css">
table { width: 100% }
th { text-align: left }
</style>
<script type = "text/javascript">
<!--
var amount; // current amount of money
var principal = 1000.0; // principal amount
var rate = .05; // interest rate

document.writeln(
"<table border = \\"1\\">" ); // begin the table
document.writeln(
"<caption>Calculating Compound Interest</caption>" );
document.writeln(
"<thead><tr><th>Year</th>" ); // year column heading
document.writeln(
"<th>Amount on deposit</th>" ); // amount column heading
document.writeln( "</tr></thead><tbody>" );

// output a table row for each year
for ( var year = 1; year <= 10; ++year )
{
amount = principal \* Math.pow( 1.0 + rate, year );
document.writeln( "<tr><td>" + year +
"</td><td>" + amount.toFixed(2) +
"</td></tr>" );
} //end for

document.writeln( "</tbody></table>" );
// -->
</script>
</head><body></body>
</html>
```

**Fig. 8.6** | Compound interest calculation with a for loop. (Part 1 of 2.)

**Fig. 8.6** | Compound interest calculation with a for loop. (Part 2 of 2.)

row (<tr>) and a column heading (<th>) containing “Year.” Lines 26–28 create a table heading for “Amount on deposit” and write the closing </tr> and </thead> tags.

The for statement (lines 31–37) executes its body 10 times, incrementing control variable year from 1 to 10 (note that year represents _n_ in the problem statement). Java- Script does not include an exponentiation operator. Instead, we use the Math object’s pow method for this purpose. Math.pow(x, y) calculates the value of x raised to the yth power. Method Math.pow takes two numbers as arguments and returns the result.

Line 33 performs the calculation using the formula given in the problem statement. Lines 34–36 write a line of XHTML markup that creates another row in the table. The first column is the current year value. The second column displays the value of amount. Line 39 writes the closing </tbody> and </table> tags after the loop terminates.

Line 35 introduces the **Number object** and its **toFixed method**. The variable amount

contains a numerical value, so JavaScript represents it as a Number object. The toFixed

method of a Number object formats the value by rounding it to the specified number of decimal places. On line 35, amount.toFixed(2) outputs the value of amount with two decimal places.

Variables amount, principal and rate represent numbers in this script. Remember that JavaScript represents all numbers as floating-point numbers. This feature is conve- nient in this example, because we are dealing with fractional parts of dollars and need a type that allows decimal points in its values.

Unfortunately, floating-point numbers can cause trouble. Here is a simple example of what can go wrong when using floating-point numbers to represent dollar amounts (assuming that dollar amounts are displayed with two digits to the right of the decimal point): Two dollar amounts stored in the machine could be 14.234 (which would nor- mally be rounded to 14.23 for display purposes) and 18.673 (which would normally be rounded to 18.67 for display purposes). When these amounts are added, they produce the internal sum 32.907, which would normally be rounded to 32.91 for display purposes. Thus your printout could appear as

14.23 + 18.67

32.91

but a person adding the individual numbers as printed would expect the sum to be 32.90. You have been warned!

## switch Multiple-Selection Statement

Previously, we discussed the if single-selection statement and the if…else double- selection statement. Occasionally, an algorithm will contain a series of decisions in which a variable or expression is tested separately for each of the values it may assume, and dif- ferent actions are taken for each value. JavaScript provides the switch multiple-selection statement to handle such decision making*.* The script in Fig. 8.7 demonstrates three dif- ferent CSS list formats determined by the value the user enters.

Line 12 in the script declares the variable choice. This variable stores the user’s choice, which determines what type of XHTML list to display. Lines 13–14 declare vari- ables startTag and endTag, which will store the XHTML tags that will be used to create the list element. Line 15 declares variable validInput and initializes it to true. The script uses this variable to determine whether the user made a valid choice (indicated by the value of true). If a choice is invalid, the script sets validInput to false. Line 16 declares vari- able listType, which will store an h1 element indicating the list type. This heading appears before the list in the XHTML document.

Lines 18–19 prompt the user to enter a 1 to display a numbered list, a 2 to display a lettered list and a 3 to display a list with roman numerals. Lines 21–40 define a **switch**

**statement** that assigns to the variables startTag, endTag and listType values based on the value input by the user in the prompt dialog. We create these different lists using the CSS property **list-style-type**, which allows us to set the numbering system for the list. Possible values include decimal (numbers—the default), lower-roman (lowercase Roman numerals), upper-roman (uppercase Roman numerals), lower-alpha (lowercase letters), upper-alpha (uppercase letters), and several others.

The switch statement consists of a series of **case labels** and an optional **default case**. When the flow of control reaches the switch statement, the script evaluates the **control- ling expression** (choice in this example) in the parentheses following keyword switch. The value of this expression is compared with the value in each of the case labels*,* starting with the first case label. Assume that the user entered 2. Remember that the value typed

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 8.7: SwitchTest.html -->
<!-- Using the switch multiple-selection statement. -->
```

**Fig. 8.7** | Using the switch multiple-selection statement. (Part 1 of 4.)

```js
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Switching between XHTML List Formats</title>
<script type = "text/javascript">
<!--
var choice; // user’s choice
var startTag; // starting list item tag
var endTag; // ending list item tag
var validInput = true; // indicates if input is valid
var listType; // type of list as a string

choice = window.prompt( "Select a list style:\\n" +
"1 (numbered), 2 (lettered), 3 (roman)", "1" );

switch ( choice )
{
case "1":
startTag = "<ol>";
endTag = "</ol>";
listType = "<h1>Numbered List</h1>";
break;
case "2":
startTag = "<ol style = \\"list-style-type: upper-alpha\\">";
endTag = "</ol>";
listType = "<h1>Lettered List</h1>";
break;
case "3":
startTag = "<ol style = \\"list-style-type: upper-roman\\">";
endTag = "</ol>";
listType = "<h1>Roman Numbered List</h1>";
break;
default:
validInput = false;
} //end switch

if ( validInput == true )
{
document.writeln( listType + startTag );

for ( var i = 1; i <= 3; ++i )
document.writeln( "<li>List item " + i + "</li>" );

document.writeln( endTag );
} //end if
else
document.writeln( "Invalid choice: " + choice );
// -->
</script>
</head>
<body>
<p>Click Refresh (or Reload) to run the script again</p>
</body>
</html>
```

**Fig. 8.7** | Using the switch multiple-selection statement. (Part 2 of 4.)

**Fig. 8.7** | Using the switch multiple-selection statement. (Part 3 of 4.)

**Fig. 8.7** | Using the switch multiple-selection statement. (Part 4 of 4.)

by the user in a prompt dialog is returned as a string. So, the string 2 is compared to the string in each case in the switch statement. If a match occurs (case "2":), the statements for that case execute. For the string 2 (lines 29–32), we set startTag to an opening ol tag with the style property list-style-type set to upper-alpha, set endTag to "</ol>" to indicate the end of an ordered list and set listType to "<h1>Lettered List</h1>". If no match occurs between the controlling expression’s value and a case label, the default case executes and sets variable validInput to false.

The break statement in line 32 causes program control to proceed with the first state- ment after the switch statement. The break statement is used because the cases in a switch statement would otherwise run together. If break is not used anywhere in a switch statement, then each time a match occurs in the statement, the statements for all the remaining cases execute.

Next, the flow of control continues with the if statement in line 42, which tests vari- able validInput to determine whether its value is true. If so, lines 44–49 write the list- Type, the startTag, three list items (<li>) and the endTag. Otherwise, the script writes text in the XHTML document indicating that an invalid choice was made (line 52).

Each case can have multiple actions (statements). The switch statement is different from others in that braces are not required around multiple actions in a case of a switch. The general switch statement (i.e., using a break in each case) is flowcharted in Fig. 8.8. \[_Note:_ As an exercise, flowchart the general switch statement without break statements.\]

The flowchart makes it clear that each break statement at the end of a case causes control to exit from the switch statement immediately. The break statement is not required for the last case in the switch statement (or the default case, when it appears last), because program control automatically continues with the next statement after the switch statement.

**Common Programming Error 8.6**

> _Forgetting a break statement when one is needed in a switch statement is a logic error._ 8.6

**Software Engineering Observation 8.1**

> _Provide a default case in switch statements. Cases not explicitly tested in a switch statement without a default case are ignored. Including a default case focuses the programmer on processing exceptional conditions. However, there are situations in which no default processing is needed._ 8.1

**Good Programming Practice 8.10**

> _Although the case clauses and the default case clause in a switch statement can occur in any order, it is clearer (and more common) to place the default clause last._ 8.10

**Fig. 8.8** | switch multiple-selection statement.

**Good Programming Practice 8.11**

> _In a switch statement, when the default clause is listed last, the break for that case statement is not required. Some programmers include this break for clarity and for symmetry with other cases._ 8.11

Note that having several case labels listed together (e.g., case 1: case 2: with no statements between the cases) simply means that the same set of actions is to occur for each case. Again, note that, besides small circles and arrows, the flowchart contains only rect- angle symbols and diamond symbols.

## do…while Repetition Statement

The **do…while repetition statement** is similar to the while statement. In the while state- ment, the loop-continuation test occurs at the beginning of the loop, before the body of the loop executes. The do…while statement tests the loop-continuation condition _after_ the loop body executes—therefore, _the loop body always executes at least once._ When a do…while terminates, execution continues with the statement after the while clause. Note that it is not necessary to use braces in a do…while statement if there is only one statement in the body. However, the braces usually are included, to avoid confusion be- tween the while and do…while statements. For example,

while ( _condition_ )

normally is regarded as the header to a while statement. A do…while statement with no braces around a single-statement body appears as

do _statement_

while ( _condition_ );

which can be confusing. The last line—while( _condition_ );—may be misinterpreted by the reader as a while statement containing an empty statement (the semicolon by itself). Thus, to avoid confusion, the do…while statement with a one-statement body is often written as follows:

do {

_statement_ } while ( _condition_ );

**Good Programming Practice 8.12**

> _Some programmers always include braces in a do…while statement even if they are not neces- sary. This helps eliminate ambiguity between the while statement and the do…while statement containing a one-statement body._ 8.12

**Common Programming Error 8.7**

> _Infinite loops are caused when the loop-continuation condition never becomes false in a while, for or do…while statement. To prevent this, make sure that there is not a semicolon immedi- ately after the header of a while or for statement. In a counter-controlled loop, make sure that the control variable is incremented (or decremented) in the body of the loop. In a sentinel-con- trolled loop, make sure that the sentinel value is eventually input._ 8.7

The script in Fig. 8.9 uses a do…while statement to display each of the six different XHTML heading types (h1 through h6). Line 12 declares control variable counter and initializes it to 1. Upon entering the do…while statement, lines 15–17 write a line of XHTML text in the document. The value of control variable counter is used to create the starting and ending header tags (e.g., <h1> and </h1>) and to create the line of text to dis- play (e.g., This is an h1 level head). Line 18 increments the counter before the loop- continuation test occurs at the bottom of the loop.

The do…while flowchart in Fig. 8.10 makes it clear that the loop-continuation test does not occur until the action executes at least once.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 8.9: DoWhileTest.html -->
<!-- Using the do...while repetition statement. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Using the do...while Repetition Statement</title>
<script type = "text/javascript">
<!--
var counter = 1;

do {
document.writeln( "<h" + counter + ">This is " +
"an h" + counter + " level head" + "</h" +
counter + ">" );
++counter;
} while ( counter <= 6 );
// -->
</script>

</head><body></body>
</html>
```

**Fig. 8.9** | Using the do…while repetition statement.

**Fig. 8.10** | do…while repetition statement flowchart.

## break and continue Statements

The **break** and **continue statements** alter the flow of control. The break statement, when executed in a while, for, do…while or switch statement, causes immediate exit from the statement. Execution continues with the first statement after the structure. The break statement is commonly used to escape early from a loop or to skip the remainder of a switch statement (as in Fig. 8.7). Figure 8.11 demonstrates the break statement in a for repetition statement.

During each iteration of the for statement in lines 14–20, the script writes the value of count in the XHTML document. When the if statement in line 16 detects that count

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 8.11: BreakTest.html -->
<!-- Using the break statement in a for statement. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>
Using the break Statement in a for Statement
</title>
<script type = "text/javascript">
<!--
for ( var count = 1; count <= 10; ++count )
{
if ( count == 5 )
break; // break loop only if count == 5

document.writeln( "Count is: " + count + "<br />" );
} //end for

document.writeln(
"Broke out of loop at count = " + count );
// -->
</script>
</head><body></body>
</html>
```

**Fig. 8.11** | Using the break statement in a for statement. (Part 1 of 2.)

**Fig. 8.11** | Using the break statement in a for statement. (Part 2 of 2.)

is 5, the break in line 17 executes. This statement terminates the for statement, and the program proceeds to line 22 (the next statement in sequence immediately after the for

statement), where the script writes the value of count when the loop terminated (i.e., 5). The loop executes line 19 only four times.

The continue statement, when executed in a while, for or do…while statement, skips the remaining statements in the body of the statement and proceeds with the next iteration of the loop. In while and do…while statements, the loop-continuation test eval- uates immediately after the continue statement executes. In for statements, the incre- ment expression executes, then the loop-continuation test evaluates. This is the one case in which for and while differ. Improper placement of continue before the increment in a while may result in an infinite loop.

Figure 8.12 uses continue in a for statement to skip the document.writeln state- ment in line 20 when the if statement in line 17 determines that the value of count is 5. When the continue statement executes, the script skips the remainder of the for state- ment’s body. Program control continues with the increment of the for statement’s control variable, followed by the loop-continuation test to determine whether the loop should continue executing.

**Software Engineering Observation 8.2**

> _Some programmers feel that break and continue violate structured programming. They do not use break and continue, because the effects of these statements can be achieved by structured programming techniques._ 8.2

**Performance Tip 8.1**

> _The break and continue statements, when used properly, perform faster than the corresponding structured techniques._ 8.1

**Software Engineering Observation 8.3**

> _There is a tension between achieving quality software engineering and achieving the best- performing software. Often, one of these goals is achieved at the expense of the other. For all but the most performance-intensive situations, the following rule of thumb should be followed: First make your code simple, readable and correct; then make it fast and small, but only if necessary._ 8.3

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 8.12: ContinueTest.html -->
<!-- Using the continue statement in a for statement. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>
Using the continue Statement in a for Statement
</title>

<script type = "text/javascript">
<!--
for ( var count = 1; count <= 10; ++count )
{
if ( count == 5 )
continue; // skip remaining loop code only if count == 5

document.writeln( "Count is: " + count + "<br />" );
} //end for

document.writeln( "Used continue to skip printing 5" );
// -->
</script>

</head><body></body>
</html>
```

**Fig. 8.12** | Using the continue statement in a for statement.

## Labeled break and continue Statements

The break statement can break out of an immediately enclosing while, for, do…while or switch statement. To break out of a nested set of structures, you can use the **labeled break**

**statement**. This statement, when executed in a while, for, do…while or switch state- ment, causes immediate exit from that statement and any number of enclosing repetition statements; program execution resumes with the first statement after the enclosing **labeled statement** (a statement preceded by a label). The labeled statement can be a block (a set of statements enclosed in curly braces, {}). Labeled break statements commonly are used to terminate nested looping structures containing while, for, do…while or switch state- ments. Figure 8.13 demonstrates the labeled break statement in a nested for statement.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 8.13: BreakLabelTest.html -->
<!-- Labeled break statement in a nested for statement. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Using the break Statement with a Label</title>
<script type = "text/javascript">
<!--
stop: { // labeled block
for ( var row = 1; row <= 10; ++row )
{
for ( var column = 1; column <= 5 ; ++column )
{
if ( row == 5 )
break stop; // jump to end of stop block

document.write( "\* " );
} //end for

document.writeln( "<br />" );
} //end for

// the following line is skipped
document.writeln( "This line should not print" );
} // end block labeled stop

document.writeln( "End of script" );
// -->
</script>
</head><body></body>
</html>
```

**Fig. 8.13** | Labeled break statement in a nested for statement.
The labeled block (lines 12–28) begins with a **label** (an identifier followed by a colon). Here, we use the label stop:. The block is enclosed between the braces at the end of line 12 and in line 28, and includes both the nested for statement starting in line 13 and the document.writeln statement in line 27. When the if statement in line 17 detects that row is equal to 5, the statement in line 18 executes. This statement terminates both the for statement in line 15 and its enclosing for statement in line 13, and the program proceeds to the statement in line 30 (the first statement in sequence after the labeled block). The inner for statement executes its body only four times. Note that the document.writeln statement in line 27 never executes, because it is included in the labeled block and the outer for statement never completes.

The continue statement proceeds with the next iteration (repetition) of the immedi- ately enclosing while, for or do…while statement. The **labeled continue statement**, when executed in a repetition statement (while, for or do…while), skips the remaining statements in the structure’s body and any number of enclosing repetition statements, then proceeds with the next iteration of the enclosing **labeled repetition statement** (a rep- etition statement preceded by a label). In labeled while and do…while statements, the loop-continuation test evaluates immediately after the continue statement executes. In a labeled for statement, the increment expression executes, then the loop-continuation test evaluates. Figure 8.14 uses the labeled continue statement in a nested for statement to cause execution to continue with the next iteration of the outer for statement.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 8.14: ContinueLabelTest.html -->
<!-- Labeled continue statement in a nested for statement. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Using the continue Statement with a Label</title>
<script type = "text/javascript">
<!--
nextRow: // target label of continue statement
for ( var row = 1; row <= 5; ++row )
{
document.writeln( "<br />" );

for ( var column = 1; column <= 10; ++column )
{
if ( column > row )
continue nextRow; // next iteration of labeled loop

document.write( "\* " );
} //end for
} //end for
// -->
</script>
</head><body></body>
</html>
```

**Fig. 8.14** | Labeled continue statement in a nested for statement. (Part 1 of 2.)

**Fig. 8.14** | Labeled continue statement in a nested for statement. (Part 2 of 2.)

The labeled for statement (lines 13–24) starts with the nextRow label in line 12. When the if statement in line 19 in the inner for statement detects that column is greater than row, line 20 executes and program control continues with the increment of the con- trol variable of the outer for statement. Even though the inner for statement counts from 1 to 10, the number of \* characters output on a row never exceeds the value of row.

## Logical Operators

So far, we have studied only such **simple conditions** as count <= 10, total > 1000 and number != sentinelValue. These conditions were expressed in terms of the relational opera- tors >, <, >= and <=, and in terms of the equality operators == and !=. Each decision tested one condition. To make a decision based on multiple conditions, we performed these tests in separate statements or in nested if or if…else statements.

JavaScript provides **logical operators** that can be used to form more complex condi- tions by combining simple conditions. The logical operators are **&&** (**logical AND**), **||** (**logical OR**) and **!** (**logical NOT**, also called **logical negation**). We consider examples of each of these operators.

Suppose that, at some point in a program, we wish to ensure that two conditions are _both_ true before we choose a certain path of execution. In this case, we can use the logical && operator, as follows:

if ( gender == 1 && age >= 65 ) ++seniorFemales;

This if statement contains two simple conditions. The condition gender == 1 might be evaluated to determine, for example, whether a person is a female. The condition age >=

65 is evaluated to determine whether a person is a senior citizen. The if statement then considers the combined condition

gender == 1 && age >= 65

This condition is true _if and only if_ both of the simple conditions are true. Finally, if this combined condition is indeed true, the count of seniorFemales is incremented by 1. If either or both of the simple conditions are false, the program skips the incrementing and proceeds to the statement following the if statement. The preceding combined condition can be made more readable by adding redundant parentheses:

( gender == 1 ) && ( age >= 65 )

The table in Fig. 8.15 summarizes the && operator. The table shows all four possible combinations of false and true values for _expression1_ and _expression2_. Such tables are often called **truth tables**_._ JavaScript evaluates to false or true all expressions that include relational operators, equality operators and/or logical operators.

Now let us consider the || (logical OR) operator. Suppose we wish to ensure that either _or_ both of two conditions are true before we choose a certain path of execution. In this case, we use the || operator, as in the following program segment:

if ( semesterAverage >= 90 || finalExam >= 90 ) document.writeln( "Student grade is A" );

This statement also contains two simple conditions. The condition semesterAverage >=

90 is evaluated to determine whether the student deserves an “A” in the course because of a solid performance throughout the semester. The condition finalExam >= 90 is evaluated to determine whether the student deserves an “A” in the course because of an outstanding performance on the final exam. The if statement then considers the combined condition

semesterAverage >= 90 || finalExam >= 90

and awards the student an “A” if either or both of the simple conditions are true. Note that the message "Student grade is A" is _not_ printed only when both of the simple con- ditions are false. Figure 8.16 is a truth table for the logical OR operator (||).

The && operator has a higher precedence than the || operator. Both operators asso- ciate from left to right. An expression containing && or || operators is evaluated only until truth or falsity is known. Thus, evaluation of the expression

gender == 1 && age >= 65

| expression1 | expression2 | expression1 && expression2 |
| :---------: | :---------: | :------------------------: |
|    false    |    false    |           false            |
|    false    |    true     |           false            |
|    true     |    false    |           false            |
|    true     |    true     |            true            |

**Fig. 8.15** | Truth table for the && (logical AND) operator.

| expression1 | expression2 | expression1 |     | expression2 |
| :---------: | :---------: | :---------: | --- | ----------- |

| false | false | false |
| false | true | true |
| true | false | true |
| true | true | true |

**Fig. 8.16** | Truth table for the || (logical OR) operator.

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

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 8.18: LogicalOperators.html -->
<!-- Demonstrating logical operators. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Demonstrating the Logical Operators</title>
```

**Fig. 8.18** | Demonstrating logical operators. (Part 1 of 2.)

**10** <style type = "text/css">
**11** table { width: 100% }
**12** td.left { width: 25% }
**13** </style>
**14** <script type = "text/javascript">
**15** <!--
**16** document.writeln(
**17** "<table border = \\"1\\"" );
**18** document.writeln(
**19** "<caption>Demonstrating Logical " +
**20** "Operators</caption>" );
**21** document.writeln(
**22** "<tr><td class = \\"left\\">Logical AND (&&)</td>" +
**23** "<td>false && false: " + ( false && false ) +
**24** "<br />false && true: " + ( false && true ) +
**25** "<br />true && false: " + ( true && false ) +
**26** "<br />true && true: " + ( true && true ) +
**27** "</td></tr>" );
**28** document.writeln(
**29** "<tr><td class = \\"left\\">Logical OR (||)</td>" +
**30** "<td>false || false: " + ( false || false ) +
**31** "<br />false || true: " + ( false || true ) +
**32** "<br />true || false: " + ( true || false ) +
**33** "<br />true || true: " + ( true || true ) +
**34** "</td></tr>" );
**35** document.writeln(
**36** "<tr><td class = \\"left\\">Logical NOT (!)</td>" +
**37** "<td>!false: " + ( !false ) +
**38** "<br />!true: " + ( !true ) + "</td></tr>" );
**39** document.writeln( "</table>" );
**40** // -->
**41** </script>
**42** </head><body></body>
**43** </html>

**Fig. 8.18** | Demonstrating logical operators. (Part 2 of 2.)

In the output of Fig. 8.18, the strings "false" and "true" indicate false and true for the operands in each condition. The result of the condition is shown as true or false. Note that when you use the concatenation operator with a boolean value and a string, JavaScript automatically converts the boolean value to string “false" or "true". Lines 16–39 build an XHTML table containing the results.

An interesting feature of JavaScript is that most nonboolean values can be converted to a boolean true or false value. Nonzero numeric values are considered to be true. The numeric value zero is considered to be false. Any string that contains characters is con- sidered to be true. The empty string (i.e., the string containing no characters) is consid- ered to be false. The value null and variables that have been declared but not initialized are considered to be false. All objects (e.g., the browser’s document and window objects and JavaScript’s Math object) are considered to be true.

Figure 8.19 shows the precedence and associativity of the JavaScript operators intro- duced up to this point. The operators are shown top to bottom in decreasing order of precedence.

|      Operator      | Associativity |      Type      |
| :----------------: | :-----------: | :------------: |
|      ++ -- !       | right to left |     unary      |
|       \* / %       | left to right | multiplicative |
|        \+ -        | left to right |    additive    |
|     < <= > >=      | left to right |   relational   |
|       \== !=       | left to right |    equality    |
|         &&         | left to right |  logical AND   |
|                    | left to right |   logical OR   |
|         ?:         | right to left |  conditional   |
| \= += -= \*= /= %= | right to left |   assignment   |

**Fig. 8.19** | Precedence and associativity of the operators discussed so far.

## Summary of Structured Programming

Just as architects design buildings by employing the collective wisdom of their profession, so should programmers design programs. Our field is younger than architecture, and our collective wisdom is considerably sparser. We have learned that structured programming produces programs that are easier to understand than unstructured programs, and thus are easier to test, debug, and modify.

Flowcharts reveal the structured nature of programs or the lack thereof. Connecting individual flowchart symbols arbitrarily can lead to unstructured programs. Therefore, the programming profession has chosen to combine flowchart symbols to form a limited set of control structures and to build structured programs by properly combining control structures in two simple ways.

For simplicity, only single-entry/single-exit control structures are used—that is, there is only one way to enter and one way to exit each control structure. Connecting control structures in sequence to form structured programs is simple: The exit point of one control structure is connected to the entry point of the next control structure (i.e., the control structures are simply placed one after another in a program). We have called this process control-structure stacking. The rules for forming structured programs also allow for con- trol structures to be nested. Figure 8.20 summarizes JavaScript’s control structures. Small circles are used in the figure to indicate the single entry point and the single exit point of each structure.

Figure 8.21 shows the rules for forming properly structured programs. The rules assume that the rectangle flowchart symbol may be used to indicate any action, including input/output._Note: An oval flowchart symbol indicates the beginning and end of a pro- cess._

Applying the rules in Fig. 8.21 always results in a structured flowchart with a neat, building-block-like appearance. For example, repeatedly applying Rule 2 to the simplest

**Fig. 8.20** | Single-entry/single-exit sequence, selection and repetition structures.

|                                            Rules for forming structured programs                                             |
| :--------------------------------------------------------------------------------------------------------------------------: |
|                                     1\. Begin with the “simplest flowchart” (Fig. 8.22).                                     |
|                     2\. Any rectangle (action) can be replaced by two rectangles (actions) in sequence.                      |
| 3\. Any rectangle (action) can be replaced by any control structure (sequence, if, if…else, switch, while, do…while or for). |
|                           4\. Rules 2 and 3 may be applied as often as necessary and in any order.                           |

**Fig. 8.21** | Forming rules for structured programs.

flowchart (Fig. 8.22) results in a structured flowchart containing many rectangles in sequence (Fig. 8.23). Note that Rule 2 generates a stack of control structures; so let us call Rule 2 the **stacking rule**.

Rule 3 is called the **nesting rule**. Repeatedly applying Rule 3 to the simplest flowchart results in a flowchart with neatly nested control structures. For example, in Fig. 8.24, the rectangle in the simplest flowchart is first replaced with a double-selection (if…else) structure. Then Rule 3 is applied again to both of the rectangles in the double-selection structure by replacing each of these rectangles with double-selection structures. The

**Fig. 8.22** | Simplest flowchart.

**Fig. 8.23** | Repeatedly applying Rule 2 of Fig. 8.21 to the simplest flowchart.

**Fig. 8.24** | Applying Rule 3 of Fig. 8.21 to the simplest flowchart.

dashed box around each of the double-selection structures represents the rectangle in the original simplest flowchart that was replaced.

Rule 4 generates larger, more involved and more deeply nested structures. The flow- charts that emerge from applying the rules in Fig. 8.21 constitute the set of all possible structured flowcharts and thus the set of all possible structured programs.

The beauty of the structured approach is that we use only seven simple single-entry/ single-exit pieces and assemble them in only two simple ways. Figure 8.25 shows the kinds of stacked building blocks that emerge from applying Rule 2 and the kinds of nested building blocks that emerge from applying Rule 3. The figure also shows the kind of over- lapped building blocks that cannot appear in structured flowcharts (because of the elimi- nation of the goto statement).

If the rules in Fig. 8.21 are followed, an unstructured flowchart (like the one in Fig. 8.26) cannot be created. If you are uncertain about whether a particular flowchart is structured, apply the rules of Fig. 8.21 in reverse to try to reduce the flowchart to the sim-

**Fig. 8.25** | Stacked, nested and overlapped building blocks.

**Fig. 8.26** | Unstructured flowchart.

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

Stacked building blocks Nested building blocks Overlapping building blocks (Illegal in structured programs)

It is straightforward to prove that the while statement is sufficient to provide any form of repetition. Everything that can be done with the do…while statement and the for state- ment can be done with the while statement (although perhaps not as elegantly).

Combining these results illustrates that any form of control ever needed in a Java- Script program can be expressed in terms of:

• sequence

• if statement (selection)

• while statement (repetition)

These control structures can be combined in only two ways—stacking and nesting. In- deed, structured programming promotes simplicity.

## Wrap-Up

In this chapter, we discussed the composition of programs from control structures con- taining actions and decisions. We expanded the previous chapter’s discussion on control structures, discussing the for statement, the do…while statement and the switch state- ment. We also saw how break and continue can be used to alter the flow of the program.

In Chapter 9, we introduce another program-structuring unit, called the function. You’ll learn to compose large programs by combining functions that are composed of con- trol structures. We will also discuss how functions promote software reusability.

## Web Resources

www.deitel.com/javascript/

The Deitel JavaScript Resource Center contains links to some of the best JavaScript resources on the web. There you’ll find categorized links to JavaScript tools, code generators, forums, books, libraries, frameworks and more. Also check out the tutorials for all skill levels, from introductory to advanced. Be sure to visit the related Resource Centers on XHTML (www.deitel.com/xhtml/) and CSS 2.1 (www.deitel.com/css21/).

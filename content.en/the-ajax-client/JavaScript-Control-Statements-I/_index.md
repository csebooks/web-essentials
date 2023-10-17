---
title: "JavaScript: Control Statements I"
weight: 4
---

# O B J E C T I V E S

In this chapter you will learn:

■ Basic problem-solving techniques.

■ To develop algorithms through the process of top-down, stepwise refinement.

■ To use the if and if…else selection statements to choose among alternative actions.

■ To use the while repetition statement to execute statements in a script repeatedly.

■ Counter-controlled repetition and sentinel-controlled repetition.

■ To use the increment, decrement and assignment operators.


Before writing a script to solve a problem, it is essential to have a thorough understanding of the problem and a carefully planned approach to solving the problem. When writing a script, it is equally essential to understand the types of building blocks that are available and to employ proven program-construction principles. In this chapter and in Chapter 8, we discuss these issues in our presentation of the theory and principles of structured pro- gramming. The techniques you will learn here are applicable to most high-level languages, including JavaScript.

## Algorithms

Any computable problem can be solved by executing a series of actions in a specific order. A **procedure** for solving a problem in terms of

**1\.** the **actions** to be executed, and

**2\.** the **order** in which the actions are to be executed

is called an **algorithm**. The following example demonstrates that correctly specifying the order in which the actions are to execute is important.

Consider the “rise-and-shine algorithm” followed by one junior executive for getting out of bed and going to work: (1) get out of bed, (2) take off pajamas, (3) take a shower, (4) get dressed, (5) eat breakfast, (6) carpool to work. This routine gets the executive to work well prepared to make critical decisions. Suppose, however, that the same steps are performed in a slightly different order: (1) get out of bed, (2) take off pajamas, (3) get dressed, (4) take a shower, (5) eat breakfast, (6) carpool to work. In this case, our junior executive shows up for work soaking wet. Specifying the order in which statements are to be executed in a computer program is called **program control**. In this chapter and Chapter 8, we investigate the program-control capabilities of JavaScript.

**7.1** Introduction **7.2** Algorithms **7.3** Pseudocode **7.4** Control Structures **7.5** if Selection Statement **7.6** if…else Selection Statement **7.7** while Repetition Statement **7.8** Formulating Algorithms: Counter-Controlled Repetition **7.9** Formulating Algorithms: Sentinel-Controlled Repetition

## Pseudocode

Pseudocode is an artificial and informal language that helps programmers develop algo- rithms. The pseudocode we present here is useful for developing algorithms that will be converted to structured portions of JavaScript programs. Pseudocode is similar to everyday English; it is convenient and user friendly, although it is not an actual computer program- ming language.

**Software Engineering Observation 7.1**

> _Pseudocode is often used to “think out” a program during the program-design process. Then the pseudocode program is converted to a programming language such as JavaScript._ 7.1

The style of pseudocode we present consists purely of characters, so that programmers may conveniently type pseudocode in an editor program. The computer can produce a fresh printed copy of a pseudocode program on demand. Carefully prepared pseudocode may easily be converted to a corresponding JavaScript program. This process is done in many cases simply by replacing pseudocode statements with their JavaScript equivalents. In this chapter, we give several examples of pseudocode.

Pseudocode normally describes only executable statements—the actions that are per- formed when the program is converted from pseudocode to JavaScript and is run. Decla- rations are not executable statements. For example, the declaration

var value1;

instructs the JavaScript interpreter to reserve space in memory for the variable value1. This declaration does not cause any action—such as input, output or a calculation—to oc- cur when the script executes. Some programmers choose to list variables and mention the purpose of each variable at the beginning of a pseudocode program.

## Control Structures

Normally, statements in a program execute one after the other in the order in which they are written. This process is called **sequential execution**. Various JavaScript statements we will soon discuss enable the programmer to specify that the next statement to execute may not be the next one in sequence. This is known as **transfer of control**.

During the 1960s, it became clear that the indiscriminate use of transfers of control was the root of much difficulty experienced by software development groups. The finger of blame was pointed at the **goto statement**, which allowed the programmer to specify a transfer of control to one of a wide range of possible destinations in a program. The notion of so-called **structured programming** became almost synonymous with _“_**goto elimina- tion**.” JavaScript does not have a goto statement.

The research of Bohm and Jacopini demonstrated that programs could be written without goto statements.1 The challenge of the era for programmers was to shift their styles to “goto-less programming.” It was not until the 1970s that programmers started taking structured programming seriously. The results were impressive, as software devel- opment groups reported reduced development times, more frequent on-time delivery of

1\. Bohm, C., and G. Jacopini, “Flow Diagrams, Turing Machines, and Languages with Only Two For- mation Rules,” _Communications of the ACM_, Vol. 9, No. 5, May 1966, pp. 336–371.

systems and more frequent within-budget completion of software projects. The key to these successes is that structured programs are clearer, easier to debug and modify and more likely to be bug free in the first place.

Bohm and Jacopini’s work demonstrated that all programs could be written in terms of only three **control structures**, namely the **sequence structure**, the **selection structure** and the **repetition structure**. The sequence structure is built into JavaScript. Unless directed otherwise, the computer executes JavaScript statements one after the other in the order in which they are written (i.e., in sequence). The **flowchart** segment of Fig. 7.1 illus- trates a typical sequence structure in which two calculations are performed in order.

A **flowchart** is a graphical representation of an algorithm or of a portion of an algo- rithm. Flowcharts are drawn using certain special-purpose symbols, such as rectangles, dia- monds, ovals and small circles; these symbols are connected by arrows called **flowlines**, which indicate the order in which the actions of the algorithm execute*.*

Like pseudocode, flowcharts often are useful for developing and representing algo- rithms, although pseudocode is strongly preferred by many programmers. Flowcharts show clearly how control structures operate; that is all we use them for in this text. Care- fully compare the pseudocode and flowchart representations of each control structure.

Consider the flowchart segment for the sequence structure on the left side of Fig. 7.1. We use the **rectangle symbol** (or **action symbol**) to indicate any type of action, including a calculation or an input/output operation. The flowlines in the figure indicate the order in which the actions are performed—the first action adds grade to total, then the second action adds 1 to counter. JavaScript allows us to have as many actions as we want in a sequence structure. Anywhere a single action may be placed, as we will soon see, we may place several actions in sequence.

In a flowchart that represents a _complete_ algorithm, an **oval symbol** containing the word “Begin” is the first symbol used; an oval symbol containing the word “End” indicates where the algorithm ends. In a flowchart that shows only a portion of an algorithm, as in Fig. 7.1, the oval symbols are omitted in favor of using **small circle symbols**, also called **connector symbols**.

Perhaps the most important flowcharting symbol is the **diamond symbol**, also called the **decision symbol**, which indicates that a decision is to be made. We discuss the dia- mond symbol in the next section.

JavaScript provides three types of selection structures; we discuss each in this chapter and in Chapter 8. The if selection statement performs (selects) an action if a condition is true or skips the action if the condition is false. The if…else selection statement per-

**Fig. 7.1** | Flowcharting JavaScript’s sequence structure.

forms an action if a condition is true and performs a different action if the condition is false. The switch selection statement (Chapter 8) performs one of many different actions, depending on the value of an expression.

The **if** statement is called a **single-selection structure** because it selects or ignores a single action (or, as we will soon see, a single group of actions). The if…else statement is a **double-selection structure** because it selects between two different actions (or groups of actions). The switch statement is a **multiple-selection structure** because it selects among many different actions (or groups of actions).

JavaScript provides four repetition structure types, namely **while**, do…while, for and for…in. (do…while and for are covered in Chapter 8; for…in is covered in Chapter 10.) Each of the words if, else, switch, while, do, for and in is a JavaScript **keyword**. These words are reserved by the language to implement various features, such as JavaScript’s control structures. Keywords cannot be used as identifiers (e.g., for variable names). A complete list of JavaScript keywords is shown in Fig. 7.2.

**Common Programming Error 7.1**

> _Using a keyword as an identifier is a syntax error._ 7.1

As we have shown, JavaScript has only eight control structures: sequence, three types of selection and four types of repetition. A program is formed by combining control struc- tures as necessary to implement the program’s algorithm. As with the sequence structure in Fig. 7.1, we will see that each control structure is flowcharted with two small circle sym- bols, one at the entry point to the control structure and one at the exit point.

|                   JavaScript keywords                   |          |              |          |            |
| :-----------------------------------------------------: | :------: | :----------: | :------: | :--------: |
|                          break                          |   case   |    catch     | continue |  default   |
|                         delete                          |    do    |     else     |  false   |  finally   |
|                           for                           | function |      if      |    in    | instanceof |
|                           new                           |   null   |    return    |  switch  |    this    |
|                          throw                          |   true   |     try      |  typeof  |    var     |
|                          void                           |  while   |     with     |
| _Keywords that are reserved but not used by JavaScript_ |
|                        abstract                         | boolean  |     byte     |   char   |   class    |
|                          const                          | debugger |    double    |   enum   |   export   |
|                         extends                         |  final   |    float     |   goto   | implements |
|                         import                          |   int    |  interface   |   long   |   native   |
|                         package                         | private  |  protected   |  public  |   short    |
|                         static                          |  super   | synchronized |  throws  | transient  |
|                        volatile                         |

**Fig. 7.2** | JavaScript keywords.

**Single-entry/single-exit control structures** make it easy to build programs; the con- trol structures are attached to one another by connecting the exit point of one to the entry point of the next. This process is similar to the way in which a child stacks building blocks, so we call it **control-structure stacking**. We will learn that there is only one other way in which control structures may be connected—**control-structure nesting**. Thus, algorithms in JavaScript programs are constructed from only eight different types of control structures combined in only two ways.

## if Selection Statement

A selection structure is used to choose among alternative courses of action in a program. For example, suppose that the passing grade on an examination is 60 (out of 100). Then the pseudocode statement

_If student’s grade is greater than or equal to 60 Print “Passed”_

determines whether the condition “student’s grade is greater than or equal to 60” is true or false. If the condition is true, then “Passed” is printed, and the next pseudocode state- ment in order is “performed” (remember that pseudocode is not a real programming lan- guage). If the condition is false, the print statement is ignored, and the next pseudocode statement in order is performed.

Note that the second line of this selection structure is indented. Such indentation is optional but is highly recommended, because it emphasizes the inherent structure of struc- tured programs. The JavaScript interpreter ignores white-space characters—blanks, tabs and newlines used for indentation and vertical spacing. Programmers insert these white- space characters to enhance program clarity.

**Good Programming Practice 7.1**

> _Consistently applying reasonable indentation conventions throughout your programs improves program readability. We suggest a fixed-size tab of about 1/4 inch or three spaces per indent._ 7.1

The preceding pseudocode _If_ statement can be written in JavaScript as

if ( studentGrade >= 60 ) document.writeln( "Passed" );

Note that the JavaScript code corresponds closely to the pseudocode. This similarity is the reason that pseudocode is a useful program-development tool. The statement in the body of the if statement outputs the character string "Passed" in the XHTML document.

The flowchart in Fig. 7.3 illustrates the single-selection if statement. This flowchart contains what is perhaps the most important flowcharting symbol—the diamond symbol (or decision symbol), which indicates that a decision is to be made. The decision symbol contains an expression, such as a condition, that can be either **true** or **false**. The decision symbol has two flowlines emerging from it. One indicates the path to follow in the pro- gram when the expression in the symbol is true; the other indicates the path to follow in the program when the expression is false. A decision can be made on any expression that evaluates to a value of JavaScript’s boolean type (i.e., any expression that evaluates to true

or false—also known as a **boolean expression**).

**Fig. 7.3** | Flowcharting the single-selection if statement.

**Software Engineering Observation 7.2**

> _In JavaScript, any nonzero numeric value in a condition evaluates to true, and 0 evaluates to false. For strings, any string containing one or more characters evaluates to true, and the empty string (the string containing no characters, represented as "") evaluates to false. Also, a variable that has been declared with var but has not been assigned a value evaluates to false._ 7.2

Note that the if statement is a single-entry/single-exit control structure. We will soon learn that the flowcharts for the remaining control structures also contain (besides small circle symbols and flowlines) only rectangle symbols, to indicate the actions to be per- formed, and diamond symbols, to indicate decisions to be made. This type of flowchart represents the **action/decision model of programming**.

We can envision eight bins, each containing only the control structures of one of the eight types. These control structures are empty. Nothing is written in the rectangles or in the diamonds. The programmer’s task, then, is to assemble a program from as many of each type of control structure as the algorithm demands, combining them in only two pos- sible ways (stacking or nesting), then filling in the actions and decisions in a manner appropriate for the algorithm. We will discuss the variety of ways in which actions and decisions may be written.

## if…else Selection Statement

The if selection statement performs an indicated action only when the condition evalu- ates to true; otherwise, the action is skipped. The **if…else selection** statement allows the programmer to specify that a different action is to be performed when the condition is true than when the condition is false. For example, the pseudocode statement

_If student’s grade is greater than or equal to 60 Print “Passed”_

_Else Print “Failed”_

prints Passed if the student’s grade is greater than or equal to 60 and prints Failed if the student’s grade is less than 60. In either case, after printing occurs, the next pseudocode statement in sequence (i.e., the next statement after the whole if…else structure) is per- formed. Note that the body of the _Else_ part of the structure is also indented.

**Good Programming Practice 7.2**

> _Indent both body statements of an if…else statement._ 7.2

The indentation convention you choose should be applied carefully throughout your programs (both in pseudocode and in JavaScript). It is difficult to read programs that do not use uniform spacing conventions.

The preceding pseudocode _If…Else_ statement may be written in JavaScript as

if ( studentGrade >= 60 )
document.writeln( "Passed" );
else
document.writeln( "Failed" );

The flowchart shown in Fig. 7.4 illustrates the if…else selection statement’s flow of con- trol. Once again, note that the only symbols in the flowchart (besides small circles and ar- rows) are rectangles (for actions) and a diamond (for a decision). We continue to emphasize this action/decision model of computing. Imagine again a deep bin containing as many empty double-selection structures as might be needed to build a JavaScript algo- rithm. The programmer’s job is to assemble the selection structures (by stacking and nest- ing) with other control structures required by the algorithm and to fill in the empty rectangles and empty diamonds with actions and decisions appropriate to the algorithm’s implementation.

JavaScript provides an operator, called the **conditional operator** (**?:**), that is closely related to the if…else statement. The operator ?: is JavaScript’s only **ternary operator**— it takes three operands. The operands together with the ?: form a **conditional expression**_._ The first operand is a boolean expression, the second is the value for the conditional expression if the expression evaluates to true and the third is the value for the conditional expression if the expression evaluates to false. For example, consider the following state- ment

document.writeln( studentGrade >= 60 ? "Passed" : "Failed" );

**Fig. 7.4** | Flowcharting the double-selection if…else statement.

contains a conditional expression that evaluates to the string "Passed" if the condition studentGrade >= 60 is true and evaluates to the string "Failed" if the condition is false. Thus, this statement with the conditional operator performs essentially the same operation as the preceding if…else statement. The precedence of the conditional operator is low, so the entire conditional expression is normally placed in parentheses to ensure that it eval- uates correctly.

**Nested if**…**else statements** test for multiple cases by placing if…else statements inside if…else statements. For example, the following pseudocode statement indicates that the program should print A for exam grades greater than or equal to 90, B for grades in the range 80 to 89, C for grades in the range 70 to 79, D for grades in the range 60 to 69 and F for all other grades:

_If student’s grade is greater than or equal to 90 Print “A”_

_Else If student’s grade is greater than or equal to 80_

_Print “B” Else_

_If student’s grade is greater than or equal to 70 Print “C”_

_Else If student’s grade is greater than or equal to 60_

_Print “D” Else_

_Print “F”_

This pseudocode may be written in JavaScript as

if ( studentGrade >= 90 ) document.writeln( "A" );

else if ( studentGrade >= 80 )

document.writeln( "B" ); else

if ( studentGrade >= 70 ) document.writeln( "C" );

else if ( studentGrade >= 60 )

document.writeln( "D" ); else

document.writeln( "F" );

If studentGrade is greater than or equal to 90, all four conditions will be true, but only the document.writeln statement after the first test will execute. After that particular doc- ument.writeln executes, the else part of the outer if…else statements is skipped.

**Good Programming Practice 7.3**

> _If there are several levels of indentation, each level should be indented the same additional amount of space._ 7.3

Most JavaScript programmers prefer to write the preceding if structure as

if ( grade >= 90 ) document.writeln( "A" );

else if ( grade >= 80 ) document.writeln( "B" );

else if ( grade >= 70 ) document.writeln( "C" );

else if ( grade >= 60 ) document.writeln( "D" );

else document.writeln( "F" );

The two forms are equivalent. The latter form is popular because it avoids the deep inden- tation of the code to the right. Such deep indentation often leaves little room on a line, forcing lines to be split and decreasing program readability.

It is important to note that the JavaScript interpreter always associates an else with the previous if, unless told to do otherwise by the placement of braces ({}). This situation is referred to as the **dangling-else problem**. For example,

if ( x > 5 ) if ( y > 5 )

document.writeln( "x and y are > 5" ); else

document.writeln( "x is <= 5" );

_appears_ to indicate with its indentation that if x is greater than 5, the if structure in its body determines whether y is also greater than 5. If so, the body of the nested if structure outputs the string "x and y are > 5". Otherwise, it _appears_ that if x is not greater than 5, the else part of the if…else structure outputs the string "x is <= 5".

Beware! The preceding nested if statement does not execute as it appears. The inter- preter actually interprets the preceding statement as

if ( x > 5 ) if ( y > 5 )

document.writeln( "x and y are > 5" ); else

document.writeln( "x is <= 5" );

in which the body of the first if statement is a nested if…else statement. This statement tests whether x is greater than 5. If so, execution continues by testing whether y is also greater than 5. If the second condition is true, the proper string—"x and y are > 5"—is displayed. However, if the second condition is false, the string "x is <= 5" is displayed, even though we know that x is greater than 5.

To force the preceding nested if statement to execute as it was intended originally, it must be written as follows:

if ( x > 5 ) {

if ( y > 5 ) document.writeln( "x and y are > 5" );

} else

document.writeln( "x is <= 5" );

The braces ({}) indicate to the interpreter that the second if statement is in the body of the first if statement and that the else is matched with the first if statement. In Exercises 7.21 and 7.22, you will investigate the dangling-else problem further.

The if selection statement expects only one statement in its body. To include several statements in an if statement’s body, enclose the statements in braces ({ and }). This can also be done in the else section of an if…else statement. A set of statements contained within a pair of braces is called a **block**.

**Software Engineering Observation 7.3**

> _A block can be placed anywhere in a program that a single statement can be placed._ 7.3

**Software Engineering Observation 7.4**

> _Unlike individual statements, a block does not end with a semicolon. However, each statement within the braces of a block should end with a semicolon._ 7.4

The following example includes a block in the else part of an if…else statement:

if ( grade >= 60 ) document.writeln( "Passed" );

else {

document.writeln( "Failed<br />" ); document.writeln( "You must take this course again." );

}

In this case, if grade is less than 60, the program executes both statements in the body of the else and prints

Failed. You must take this course again.

Note the braces surrounding the two statements in the else clause. These braces are im- portant. Without them, the statement

document.writeln( "You must take this course again." );

would be outside the body of the else part of the if and would execute regardless of whether the grade is less than 60.

**Common Programming Error 7.2**

> _Forgetting one or both of the braces that delimit a block can lead to syntax errors or logic errors._ 7.2

Syntax errors (e.g., when one brace in a block is left out of the program) are caught by the interpreter when it attempts to interpret the code containing the syntax error. A **logic error** (e.g., the one caused when both braces around a block are left out of the pro- gram) also has its effect at execution time. A **fatal logic error** causes a program to fail and terminate prematurely. A **nonfatal logic error** allows a program to continue executing, but the program produces incorrect results.

**Good Programming Practice 7.4**


> _Some programmers prefer to type the beginning and ending braces of blocks before typing the in- dividual statements within the braces. This helps avoid omitting one or both of the braces._ 7.4

**Software Engineering Observation 7.5**

> _Just as a block can be placed anywhere a single statement can be placed, it is also possible to have no statement at all (the empty statement) in such places. The empty statement is represented by placing a semicolon (;) where a statement would normally be._ 7.5

**Common Programming Error 7.3**

> _Placing a semicolon after the condition in an if structure leads to a logic error in single-selection if structures and a syntax error in double-selection if structures (if the if part contains a non- empty body statement)._ 7.3

## while Repetition Statement

A repetition structure (also known as a **loop**) allows the programmer to specify that a script is to repeat an action while some condition remains true. The pseudocode statement

_While there are more items on my shopping list Purchase next item and cross it off my list_

describes the repetition that occurs during a shopping trip. The condition “there are more items on my shopping list” may be true or false. If it’s true, then the action “Purchase next item and cross it off my list” is performed. This action is performed repeatedly while the condition remains true. The statement(s) contained in the _While_ repetition structure con- stitute its body*.* The body of a loop such as the _While_ structure may be a single statement or a block. Eventually, the condition becomes false (i.e., when the last item on the shop- ping list has been purchased and crossed off the list). At this point, the repetition termi- nates, and the first pseudocode statement after the repetition structure executes.

**Common Programming Error 7.4**

> _If the body of a while statement never causes the while statement’s condition to become true, a logic error occurs. Normally, such a repetition structure will never terminate—an error called an **infinite loop**. Both Internet Explorer and Firefox show a dialog allowing the user to termi- nate a script that contains an infinite loop._ 7.4

**Common Programming Error 7.5**


> _Remember that JavaScript is a case-sensitive language. In code, spelling the keyword while with an uppercase W, as in While, is a syntax error. All of JavaScript’s reserved keywords, such as while, if and else, contain only lowercase letters._ 7.5

As an example of a while statement, consider a program segment designed to find the first power of 2 larger than 1000. Variable product begins with the value 2. The statement is as follows:

var product = 2;

while ( product <= 1000 ) product = 2 \* product;

When the while statement finishes executing, product contains the result 1024. The flowchart in Fig. 7.5 illustrates the flow of control of the preceding while repetition state- ment. Once again, note that (besides small circles and arrows) the flowchart contains only a rectangle symbol and a
diamond symbol.

**Fig. 7.5** | Flowcharting the while repetition statement.

When the script enters the while statement, product is 2. The script repeatedly mul- tiplies variable product by 2, so product takes on the values 4, 8, 16, 32, 64, 128, 256, 512 and 1024 successively. When product becomes 1024, the condition product <= 1000

in the while statement becomes false. This terminates the repetition, with 1024 as product’s final value. Execution continues with the next statement after the while state- ment. \[_Note:_ If a while statement’s condition is initially false, the body statement(s) will never execute.\]

The flowchart clearly shows the repetition. The flowline emerging from the rectangle wraps back to the decision, which the script tests each time through the loop until the deci- sion eventually becomes false. At this point, the while statement exits, and control passes to the next statement in the program.

## Formulating Algorithms: Counter-Controlled Repetition

To illustrate how to develop algorithms, we solve several variations of a class-averaging problem. Consider the following problem statement:

_A class of ten students took a quiz. The grades (integers in the range 0 to 100) for this quiz are available to you. Determine the class average on the quiz._

The class average is equal to the sum of the grades divided by the number of students (10 in this case). The algorithm for solving this problem on a computer must input each of the grades, perform the averaging calculation and display the result.

Let us use pseudocode to list the actions to execute and specify the order in which the actions should execute. We use **counter-controlled repetition** to input the grades one at a time. This technique uses a variable called a **counter** to control the number of times a set of statements executes. In this example, repetition terminates when the counter exceeds 10. In this section, we present a pseudocode algorithm (Fig. 7.6) and the corresponding program (Fig. 7.7). In the next section, we show how to develop pseudocode algorithms. Counter-controlled repetition often is called **definite repetition**, because the number of repetitions is known before the loop begins executing.

Note the references in the algorithm to a total and a counter. A **total** is a variable in which a script accumulates the sum of a series of values. A counter is a variable a script uses to count—in this case, to count the number of grades entered. Variables that store totals should normally be initialized to zero before they are used in a program.

_Set total to zero_
_Set grade counter to one_

_While grade counter is less than or equal to ten_
_Input the next grade_
_Add the grade into the total_
_Add one to the grade counter_

_Set the class average to the total divided by ten_
_Print the class average_

**Fig. 7.6** | Pseudocode algorithm that uses counter-controlled repetition to solve the class- average problem.

```
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 7.7: average.html -->
<!-- Counter-controlled repetition to calculate a class average. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Class Average Program</title>
<script type = "text/javascript">
<!--
var total; // sum of grades
var gradeCounter; // number of grades entered
var grade; // grade typed by user (as a string)
var gradeValue; // grade value (converted to integer)
var average; // average of all grades

// Initialization Phase
total = 0; // clear total
gradeCounter = 1;// prepare to loop

// Processing Phase
while ( gradeCounter <= 10 )// loop 10 times
{

// prompt for input and read grade from user
grade = window.prompt( "Enter integer grade:", "0" );

// convert grade from a string to an integer
gradeValue = parseInt( grade );

// add gradeValue to total
total = total + gradeValue;
```

**Fig. 7.7** | Counter-controlled repetition to calculate a class average. (Part 1 of 2.)

```js
// add 1 to gradeCounter
gradeCounter = gradeCounter + 1;
} // end while

// Termination Phase
average = total / 10; // calculate the average

// display average of exam grades
document.writeln(
"<h1>Class average is " + average + "</h1>" );
// -->
</script>
</head>
<body>
<p>Click Refresh (or Reload) to run the script again<p>
</body>
</html>
```

**Fig. 7.7** | Counter-controlled repetition to calculate a class average. (Part 2 of 2.)

Lines 12–16 declare variables total, gradeCounter, grade, gradeValue, average. The variable grade will store the string the user types into the prompt dialog. The variable gradeValue will store the integer value of the grade the user enters into the prompt dialog.

Lines 19–20 are assignment statements that initialize total to 0 and gradeCounter

to 1. Note that variables total and gradeCounter are initialized before they are used in a calculation.

**Common Programming Error 7.6**

> _Not initializing a variable that will be used in a calculation results in a logic error that produces the value NaN—Not a Number. You must initialize the variable before it is used in a calculation_ \_7.6

Line 23 indicates that the while statement continues iterating while the value of gradeCounter is less than or equal to 10. Line 27 corresponds to the pseudocode state- ment “_Input the next grade._” The statement displays a prompt dialog with the prompt "Enter integer grade:" on the screen.

After the user enters the grade, line 30 converts it from a string to an integer. We must convert the string to an integer in this example; otherwise, the addition statement in line 33 will be a string-concatenation statement rather than a numeric sum.

Next, the program updates the total with the new gradeValue entered by the user. Line 33 adds gradeValue to the previous value of total and assigns the result to total. This statement seems a bit strange, because it does not follow the rules of algebra. Keep in mind that JavaScript operator precedence evaluates the addition (+) operation before the assignment (=) operation. The value of the expression on the right side of the assignment operator always replaces the value of the variable on the left side of the assignment oper- ator.

The program now is ready to increment the variable gradeCounter to indicate that a grade has been processed and to read the next grade from the user. Line 36 adds 1 to gradeCounter, so the condition in the while statement will eventually become false and terminate the loop. After this statement executes, the program continues by testing the condition in the while statement in line 23. If the condition is still true, the statements in lines 27–36 repeat. Otherwise the program continues execution with the first statement in sequence after the body of the loop (i.e., line 40).

Line 40 assigns the results of the average calculation to variable average. Lines 43–44 write a line of XHTML text in the document that displays the string "Class average is "

followed by the value of variable average as an <-h1> element in the browser. Execute the script in a web browser by double clicking the XHTML document (from Windows Explorer). This script parses any user input as an integer. In the sample program execution in Fig. 7.7, the sum of the values entered (100, 88, 93, 55, 68, 77, 83, 95, 73 and 62) is 794. Although the treats all input as integers, the averaging calculation in the program does not produce an integer. Rather, the calculation produces a **floating-point number** (i.e., a number containing a decimal point). The average of the 10 integers input by the user in this example is 79.4.

**Software Engineering Observation 7.6**

> _If the string passed to parseInt contains a floating-point numeric value, parseInt simply truncates the floating-point part. For example, the string "27.95" results in the integer 27, and the string "–123.45" results in the integer –123. If the string passed to parseInt is not a numeric value, parseInt returns NaN (not a number)._ 7.6

JavaScript actually represents all numbers as floating-point numbers in memory. Floating-point numbers often develop through division, as shown in this example. When we divide 10 by 3, the result is 3.3333333…, with the sequence of 3’s repeating infinitely. The computer allocates only a fixed amount of space to hold such a value, so the stored floating-point value can be only an approximation. Although floating-point numbers are not always 100 percent precise, they have numerous applications. For example, when we speak of a “normal” body temperature of 98.6, we do not need to be precise to a large number of digits. When we view the temperature on a thermometer and read it as 98.6, it may actually be 98.5999473210643. The point here is that few applications require high precision floating-point values, so calling this number simply 98.6 is fine for most appli- cations.

**Common Programming Error 7.7**

> _Using floating-point numbers in a manner that assumes they are represented precisely can lead to incorrect results. Real numbers are represented only approximately by computers. For example, no fixed-size floating-point representation of_ π _can ever be precise, because_ π _is a transcendental number whose value cannot be expressed as digits in a finite amount of space._ 7.7

## Formulating Algorithms: Sentinel-Controlled Repetition

Let us generalize the class-average problem. Consider the following problem:

_Develop a class-averaging program that will process an arbitrary number of grades each time the program is run._

In the first class-average example, the number of grades (10) was known in advance. In this example, no indication is given of how many grades the user will enter. The program must process an arbitrary number of grades. How can the program determine when to stop the input of grades? How will it know when to calculate and display the class average?

One way to solve this problem is to use a special value called a **sentinel value** (also called a **signal value**, a **dummy value** or a **flag value**) to indicate the end of data entry. The user types in grades until all legitimate grades have been entered. Then the user types the sentinel value to indicate that the last grade has been entered. Sentinel-controlled repeti- tion is often called **indefinite repetition**, because the number of repetitions is not known before the loop begins executing.

Clearly, one must choose a sentinel value that cannot be confused with an acceptable input value. –1 is an acceptable sentinel value for this problem because grades on a quiz are normally nonnegative integers from 0 to 100. Thus, an execution of the class-average program might process a stream of inputs such as 95, 96, 75, 74, 89 and –1. The program would compute and print the class average for the grades 95, 96, 75, 74 and 89 (–1 is the sentinel value, so it should not enter into the average calculation).

**Common Programming Error 7.8**

> _Choosing a sentinel value that is also a legitimate data value results in a logic error and may prevent a sentinel-controlled loop from terminating properly._ 7.8

We approach the class-average program with a technique called **top-down, stepwise refinement**, a technique that is essential to the development of well-structured algorithms. We begin with a pseudocode representation of the **top**:

_Determine the class average for the quiz_

The top is a single statement that conveys the program’s overall purpose. As such, the top is, in effect, a complete representation of a program. Unfortunately, the top rarely conveys sufficient detail from which to write the JavaScript algorithm. Therefore we must begin a refinement process. First, we divide the top into a series of smaller tasks and list them in the order in which they need to be performed, creating the following **first refinement**:

_Initialize variables Input, sum up and count the quiz grades Calculate and print the class average_

Here, only the sequence structure is used; the steps listed are to be executed in order, one after the other.

**Software Engineering Observation 7.7**

> _Each refinement, as well as the top itself, is a_ complete _specification of the algorithm; only the level of detail varies._ 7.7

To proceed to the next level of refinement (the **second refinement**), we commit to specific variables. We need a running total of the numbers, a count of how many numbers have been processed, a variable to receive the string representation of each grade as it is input, a variable to store the value of the grade after it is converted to an integer and a vari- able to hold the calculated average. The pseudocode statement

_Initialize variables_

may be refined as follows:

_Initialize total to zero Initialize gradeCounter to zero_

Note that only the variables _total_ and _gradeCounter_ are initialized before they are used; the variables _average_, _grade_ and _gradeValue_ (for the calculated average, the user input and the integer representation of the _grade_, respectively) need not be initialized, because their val- ues are determined as they are calculated or input.

The pseudocode statement

_Input, sum up and count the quiz grades_

requires a repetition structure (a loop) that successively inputs each grade. We do not know in advance how many grades are to be processed, so we will use sentinel-controlled repetition. The user will enter legitimate grades, one at a time. After entering the last le- gitimate grade, the user will enter the sentinel value. The program will test for the sentinel value after the user enters each grade and will terminate the loop when the sentinel value is encountered. The second refinement of the preceding pseudocode statement is then

_Input the first grade (possibly the sentinel) While the user has not as yet entered the sentinel_

_Add this grade into the running total Add one to the grade counter Input the next grade (possibly the sentinel)_

Note that in pseudocode, we do not use braces around the pseudocode that forms the body of the _While_ structure. We simply indent the pseudocode under the _While_, to show that it belongs to the body of the _While_. Remember, pseudocode is only an informal program- development aid.

The pseudocode statement

_Calculate and print the class average_

may be refined as follows:

_If the counter is not equal to zero Set the average to the total divided by the counter Print the average_

_Else Print “No grades were entered”_

Note that we are testing for the possibility of **division by zero**—a logic error that, if unde- tected, would cause the program to produce invalid output. The complete second refine- ment of the pseudocode algorithm for the class-average problem is shown in Fig. 7.8.

**Error-Prevention Tip 7.1**

> _When performing division by an expression whose value could be zero, explicitly test for this case, and handle it appropriately in your program (e.g., by printing an error message) rather than al- lowing the division by zero to occur._ 7.1


**Good Programming Practice 7.5**

> _Include completely blank lines in pseudocode programs to make the pseudocode more readable. The blank lines separate pseudocode control structures and separate the program phases._ 7.5

**Software Engineering Observation 7.8**

> _Many algorithms can be divided logically into three phases: an initialization phase that initializes the program variables, a processing phase that inputs data values and adjusts program variables accordingly, and a termination phase that calculates and prints the results._ 7.8

The pseudocode algorithm in Fig. 7.8 solves the more general class-averaging problem. This algorithm was developed after only two refinements. Sometimes more refinements are necessary.

_Initialize total to zero Initialize gradeCounter to zero_

_Input the first grade (possibly the sentinel) While the user has not as yet entered the sentinel_

_Add this grade into the running total Add one to the grade counter Input the next grade (possibly the sentinel)_

_If the counter is not equal to zero Set the average to the total divided by the counter Print the average_

_Else Print “No grades were entered”_

**Fig. 7.8** | Sentinel-controlled repetition to solve the class-average problem.

**Software Engineering Observation 7.9**

> _The programmer terminates the top-down, stepwise refinement process after specifying the pseudocode algorithm in sufficient detail for the programmer to convert the pseudocode to a JavaScript program. Then, implementing the JavaScript program will normally be straightforward._ 7.9

**Good Programming Practice 7.6**

> _When converting a pseudocode program to JavaScript, keep the pseudocode in the JavaScript program as comments._ 7.6

**Software Engineering Observation 7.10**

> _Experience has shown that the most difficult part of solving a problem on a computer is developing the algorithm for the solution. Once a correct algorithm is specified, the process of producing a working JavaScript program from the algorithm is normally straightforward._ 7.10

**Software Engineering Observation 7.11**

> _Many experienced programmers write programs without ever using program-development tools like pseudocode. As they see it, their ultimate goal is to solve the problem on a computer, and writing pseudocode merely delays the production of final outputs. Although this approach may work for simple and familiar problems, it can lead to serious errors in large, complex projects._ 7.11

Figure 7.9 shows the JavaScript program and a sample execution. Although each grade is an integer, the averaging calculation is likely to produce a number with a decimal point (a real number).

In this example, we see that control structures may be stacked on top of one another (in sequence) just as a child stacks building blocks. The while statement (lines 31–45) is followed immediately by an if…else statement (lines 48–57) in sequence. Much of the code in this program is identical to the code in Fig. 7.7, so we concentrate in this example on the new features.

Line 21 initializes gradeCounter to 0, because no grades have been entered yet. Remember that the program uses sentinel-controlled repetition. To keep an accurate record of the number of grades entered, the script increments gradeCounter only after processing a valid grade value.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 7.9: average2.html -->
<!-- Sentinel-controlled repetition to calculate a class average. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Class Average Program: Sentinel-controlled Repetition</title>

 <script type = "text/javascript">
 <!--
```

**Fig. 7.9** | Sentinel-controlled repetition to calculate a class average. (Part 1 of 3.)

```js
var total; // sum of grades
var gradeCounter; // number of grades entered
var grade; // grade typed by user (as a string)
var gradeValue; // grade value (converted to integer)
var average; // average of all grades

// Initialization phase
total = 0; // clear total
gradeCounter = 0;// prepare to loop

// Processing phase
// prompt for input and read grade from user
grade = window.prompt(
"Enter Integer Grade, -1 to Quit:", "0" );


// convert grade from a string to an integer
gradeValue = parseInt( grade );

while ( gradeValue != -1 )
{
// add gradeValue to total
total = total + gradeValue;

// add 1 to gradeCounter
gradeCounter = gradeCounter + 1;

// prompt for input and read grade from user
grade = window.prompt(
"Enter Integer Grade, -1 to Quit:", "0" );

// convert grade from a string to an integer
gradeValue = parseInt( grade );
} // end while

// Termination phase
if ( gradeCounter != 0 )
{
average = total / gradeCounter;

// display average of exam grades
document.writeln(
"<h1>Class average is " + average + "</h1>" );
} // end if
else
document.writeln( "<p>No grades were entered</p>" );
// -->
</script>
</head>
<body>
<p>Click Refresh (or Reload) to run the script again</p>
</body>
</html>
```

**Fig. 7.9** | Sentinel-controlled repetition to calculate a class average. (Part 2 of 3.)

**Fig. 7.9** | Sentinel-controlled repetition to calculate a class average. (Part 3 of 3.)

Note the difference in program logic for sentinel-controlled repetition as compared with the counter-controlled repetition in Fig. 7.7. In counter-controlled repetition, we read a value from the user during each iteration of the while statement’s body for the spec- ified number of iterations. In sentinel-controlled repetition, we read one value (lines 25– 26) and convert it to an integer (line 29) before the program reaches the while statement. The script uses this value to determine whether the program’s flow of control should enter the body of the while statement. If the while statement’s condition is false (i.e., the user typed the sentinel as the first grade), the script ignores the body of the while statement (i.e., no grades were entered). If the condition is true, the body begins execution and pro- cesses the value entered by the user (i.e., adds the value to the total in line 34). After pro- cessing the value, the script increments gradeCounter by 1 (line 37), inputs the next grade from the user (lines 40–41) and converts the grade to an integer (line 44), before the end of the while statement’s body. When the script reaches the closing right brace } of the body in line 45, execution continues with the next test of the condition of the while state- ment (line 31), using the new value just entered by the user to determine whether the while statement’s body should execute again. Note that the next value always is input from the user immediately before the script evaluates the condition of the while statement. This order allows us to determine whether the value just entered by the user is the sentinel value _before_ processing it (i.e., adding it to the total). If the value entered is the sentinel value, the while statement terminates and the script does not add the value to the total.

**Good Programming Practice 7.7**

> _In a sentinel-controlled loop, the prompts requesting data entry should explicitly remind the user what the sentinel value is._ 7.7

Note the block in the while loop in Fig. 7.9 (lines 32–45). Without the braces, the last three statements in the body of the loop would fall outside of the loop, causing the computer to interpret the code incorrectly, as follows:

This dialog is displayed four times. User input is 97, 88, 72 and –1.

while ( gradeValue != -1 ) // add gradeValue to total total = total + gradeValue;

// add 1 to gradeCounter gradeCounter = gradeCounter + 1;

// prompt for input and read grade from user grade = window.prompt(

"Enter Integer Grade, -1 to Quit:", "0" );

// convert grade from a string to an integer gradeValue = parseInt( grade );

This interpretation would cause an infinite loop in the program if the user does not input the sentinel -1 as the first input value in lines 25–26 (i.e., before the while statement).

**Common Programming Error 7.9**

> _Omitting the braces that delineate a block can lead to logic errors such as infinite loops._ 7.9

## Formulating Algorithms: Nested Control Statements

Let us work through another complete problem. We once again formulate the algorithm using pseudocode and top-down, stepwise refinement, and write a corresponding Java- Script program.

Consider the following problem statement:

_A college offers a course that prepares students for the state licensing exam for real estate brokers. Last year, several of the students who completed this course took the licensing exam. Naturally, the college wants to know how well its students performed. You have been asked to write a program to summarize the results. You have been given a list of these 10 students. Next to each name is written a 1 if the student passed the exam and a 2 if the student failed._

_Your program should analyze the results of the exam as follows:_

_1\. Input each test result (i.e., a 1 or a 2). Display the message “Enter result” on the screen each time the program requests another test result._

_2\. Count the number of test results of each type._

_3\. Display a summary of the test results indicating the number of students who passed and the number of students who failed._

_4\. If more than eight students passed the exam, print the message “Raise tuition.”_

After reading the problem statement carefully, we make the following observations about the problem:

**1\.** The program must process test results for 10 students. A counter-controlled loop will be used.

**2\.** Each test result is a number—either a 1 or a 2. Each time the program reads a test result, the program must determine whether the number is a 1 or a 2. We test for a 1 in our algorithm. If the number is not a 1, we assume that it is a 2. (An exercise at the end of the chapter considers the consequences of this assumption.)

**3\.** Two counters are used to keep track of the exam results—one to count the num- ber of students who passed the exam and one to count the number of students who failed the exam.

After the program processes all the results, it must decide whether more than eight students passed the exam. Let us proceed with top-down, stepwise refinement. We begin with a pseudocode representation of the top:

_Analyze exam results and decide whether tuition should be raised_

Once again, it is important to emphasize that the top is a complete representation of the program, but that several refinements are necessary before the pseudocode can be evolved naturally into a JavaScript program. Our first refinement is as follows:

_Initialize variables Input the ten exam grades and count passes and failures Print a summary of the exam results and decide whether tuition should be raised_

Here, too, even though we have a complete representation of the entire program, further refinement is necessary. We now commit to specific variables. Counters are needed to record the passes and failures; a counter will be used to control the looping process, and a variable is needed to store the user input. The pseudocode statement

_Initialize variables_

may be refined as follows:

_Initialize passes to zero Initialize failures to zero Initialize student to one_

Note that only the counters for the number of passes, the number of failures and the num- ber of students are initialized. The pseudocode statement

_Input the ten quiz grades and count passes and failures_

requires a loop that successively inputs the result of each exam. Here, it is known in ad- vance that there are precisely 10 exam results, so counter-controlled looping is appropriate. Inside the loop (i.e., _nested_ within the loop), a double-selection structure will determine whether each exam result is a pass or a failure and will increment the appropriate counter accordingly. The refinement of the preceding pseudocode statement is then

_While student counter is less than or equal to ten Input the next exam result_

_If the student passed Add one to passes_

_Else Add one to failures_

_Add one to student counter_

Note the use of blank lines to set off the _If…Else_ control structure to improve program readability. The pseudocode statement

_Print a summary of the exam results and decide whether tuition should be raised_

may be refined as follows:

_Print the number of passes Print the number of failures If more than eight students passed_

_Print “Raise tuition”_

The complete second refinement appears in Fig. 7.10. Note that blank lines are also used to set off the _While_ statement for program readability.

This pseudocode is now refined sufficiently for conversion to JavaScript. The Java- Script program and two sample executions are shown in Fig. 7.11.

_Initialize passes to zero Initialize failures to zero Initialize student to one_

_While student counter is less than or equal to ten Input the next exam result_

_If the student passed Add one to passes_

_Else Add one to failures_

_Add one to student counter_

_Print the number of passes Print the number of failures If more than eight students passed_

_Print “Raise tuition”_

**Fig. 7.10** | Examination-results problem pseudocode.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 7.11: analysis.html -->
<!-- Examination-results calculation. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Analysis of Examination Results</title>
<script type = "text/javascript">
<!--
// initializing variables in declarations
var passes = 0; // number of passes
var failures = 0; // number of failures
var student = 1; // student counter
var result; // one exam result
```

**Fig. 7.11** | Examination-results calculation. (Part 1 of 3.)

```js
// process 10 students; counter-controlled loop
while ( student <= 10 )
{
result = window.prompt( "Enter result (1=pass,2=fail)", "0" );

if ( result == "1" )
passes = passes + 1;
else
failures = failures + 1;

student = student + 1;
} // end while

// termination phase
document.writeln( "<h1>Examination Results</h1>" );
document.writeln(
"Passed: " + passes + "<br />Failed: " + failures );

if ( passes > 8 )
document.writeln( "<br />Raise Tuition" );
// -->
</script>
</head>
<body>
<p>Click Refresh (or Reload) to run the script again</p>
</body>
</html>
```

**Fig. 7.11** | Examination-results calculation. (Part 2 of 3.)

This dialog is displayed 10 times. User input is 1, 2, 1, 1, 1, 1, 1, 1, 1 and 1.

**Fig. 7.11** | Examination-results calculation. (Part 3 of 3.)

Lines 13–16 declare the variables used to process the examination results. Note that JavaScript allows variable initialization to be incorporated into declarations (passes is assigned 0, failures is assigned 0 and student is assigned 1). Some programs may require reinitialization at the beginning of each repetition; such reinitialization would normally occur in assignment statements.

The processing of the exam results occurs in the while statement in lines 19–29. Note that the if…else statement in lines 23–26 in the loop tests only whether the exam result was 1; it assumes that all other exam results are 2. Normally, you should validate the values input by the user (i.e., determine whether the values are correct). In the exercises, we ask you to modify this example to validate the input values to ensure that they are either 1 or 2.

**Good Programming Practice 7.8**

> _When inputting values from the user, validate the input to ensure that it is correct. If an input value is incorrect, prompt the user to input the value again._ 7.8

## Assignment Operators

JavaScript provides several assignment operators (called **compound assignment operators**) for abbreviating assignment expressions. For example, the statement

c = c + 3;

can be abbreviated with the **addition assignment operator**, **+=**, as

c += 3;

The += operator adds the value of the expression on the right of the operator to the value of the variable on the left of the operator and stores the result in the variable on the left of the operator. Any statement of the form

_variable_ \= _variable operator expression_;

where _operator_ is one of the binary operators +, -, \*, / or % (or others we will discuss later in the text), can be written in the form

_variable operator_ \= _expression_;

Thus, the assignment c += 3 adds 3 to c. Figure 7.12 shows the arithmetic assignment op- erators, sample expressions using these operators and explanations of the meaning of the operators.

**Performance Tip 7.1**

> _Programmers can write programs that execute a bit faster when the arithmetic assignment oper- ators are used, because the variable on the left side of the assignment does not have to be evaluated twice._ 7.1

**Performance Tip 7.2**

> _Many of the performance tips we mention in this text result in only nominal improvements, so the reader may be tempted to ignore them. Significant performance improvement often is real- ized when a supposedly nominal improvement is placed in a loop that may repeat a large number of times._ 7.2

| Assignment operator | Initial value of variable | Sample expression | Explanation | Assigns |
| :-----------------: | :-----------------------: | :---------------: | :---------: | :-----: |
|         +=          |           c = 3           |      c += 7       |  c = c + 7  | 10 to c |
|         \-=         |           d = 5           |      d -= 4       |  d = d - 4  | 1 to d  |
|         \*=         |           e = 4           |      e \*= 5      | e = e \* 5  | 20 to e |
|         /=          |           f = 6           |      f /= 3       |  f = f / 3  | 2 to f  |
|         %=          |          g = 12           |      g %= 9       |  g = g % 9  | 3 to g  |

**Fig. 7.12** | Arithmetic assignment operators.

## Increment and Decrement Operators

JavaScript provides the unary **increment operator** (**++**) and **decrement operator** (**\--**) (sum- marized in Fig. 7.13). If a variable c is incremented by 1, the increment operator, ++, can be used rather than the expression c = c + 1 or c += 1. If an increment or decrement oper- ator is placed before a variable, it is referred to as the **preincrement** or **predecrement op- erator**, respectively. If an increment or decrement operator is placed after a variable, it is referred to as the **postincrement** or **postdecrement operator**, respectively.

| Operator | Example |    Called     |                                       Explanation                                       |
| :------: | :-----: | :-----------: | :-------------------------------------------------------------------------------------: |
|    ++    |   ++a   | preincrement  |    Increment a by 1, then use the new value of a in the expression which a resides.     |
|    ++    |   a++   | postincrement | Use the current value of a in the expression in which a resides, then increment a by 1. |
|   \--    |   --b   | predecrement  |   Decrement b by 1, then use the new value of b in the expression in which b resides.   |
|   \--    |   b--   | postdecrement | Use the current value of b in the expression in which b resides, then decrement b by 1. |

**Fig. 7.13** | Increment and decrement operators.

**Error-Prevention Tip 7.2**

> _The predecrement and postdecrement JavaScript operators cause the W3C XHTML Validator to incorrectly report errors. The validator attempts to interpret the decrement operator as part of an XHTML comment tag (<!-- or -->). You can avoid this problem by using the subtraction assignment operator (-=) to subtract one from a variable. Note that the validator may report many more (nonexistent) errors once it improperly parses the decrement operator._ 7.2

Preincrementing (or predecrementing) a variable causes the program to increment (decrement) the variable by 1, then use the new value of the variable in the expression in which it appears. Postincrementing (postdecrementing) the variable causes the program to use the current value of the variable in the expression in which it appears, then increment (decrement) the variable by 1.

The script in Fig. 7.14 demonstrates the difference between the preincrementing ver- sion and the postincrementing version of the ++ increment operator. Postincrementing the variable c causes it to be incremented after it is used in the document.writeln method call (line 18). Preincrementing the variable c causes it to be incremented before it is used in the document.writeln method call (line 25). The program displays the value of c before and after the ++ operator is used. The decrement operator (--) works similarly.

```js
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 7.14: increment.html -->
<!-- Preincrementing and Postincrementing. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Preincrementing and Postincrementing</title>
<script type = "text/javascript">
<!--
var c;
```

**Fig. 7.14** | Preincrementing and postincrementing. (Part 1 of 2.)

**13**
**14** c = 5;
**15** document.writeln( "<h3>Postincrementing</h3>" );
**16** document.writeln( c ); // prints 5
**17** // prints 5 then increments
**18** document.writeln( "<br />" + c++ );
**19** document.writeln( "<br />" + c ); // prints 6
**20**
**21** c = 5; '
**22** document.writeln( "<h3>Preincrementing</h3>" );
**23** document.writeln( c ); // prints 5
**24** // increments then prints 6
**25** document.writeln( "<br />" + ++c );
**26** document.writeln( "<br />" + c ); // prints 6
**27** // -->
**28** </script>
**29** </head><body></body>
**30** </html>

**Fig. 7.14** | Preincrementing and postincrementing. (Part 2 of 2.)

**Good Programming Practice 7.9**

> _For readability, unary operators should be placed next to their operands, with no intervening spaces._ 7.9

The three assignment statements in Fig. 7.11 (lines 24, 26 and 28, respectively),

passes = passes + 1; failures = failures + 1; student = student + 1;

can be written more concisely with assignment operators as

passes += 1; failures += 1; student += 1;

with preincrement operators as

++passes; ++failures; ++student;

or with postincrement operators as

passes++; failures++; student++;

It is important to note here that when incrementing or decrementing a variable in a statement by itself, the preincrement and postincrement forms have the same effect, and the predecrement and postdecrement forms have the same effect. It is only when a variable appears in the context of a larger expression that preincrementing the variable and post- incrementing the variable have different effects. Predecrementing and postdecrementing behave similarly.

**Common Programming Error 7.10**

> _Attempting to use the increment or decrement operator on an expression other than a_ **left-hand- side expression**_—commonly called an_ **lvalue**—_is a syntax error. A left-hand-side expression is a variable or expression that can appear on the left side of an assignment operation. For example, writing ++(x + 1) is a syntax error, because (x + 1) is not a left-hand-side expression._ 7.10

Figure 7.15 lists the precedence and associativity of the operators introduced to this point. The operators are shown top to bottom in decreasing order of precedence. The second column describes the associativity of the operators at each level of precedence. Notice that the conditional operator (?:), the unary operators increment (++) and decre- ment (--) and the assignment operators =, +=, -=, \*=, /= and %= associate from right to left. All other operators in the operator precedence table (Fig. 7.15) associate from left to right. The third column names the groups of operators.

|      Operator      | Associativity |      Type      |
| :----------------: | :-----------: | :------------: |
|       ++ --        | right to left |     unary      |
|       \* / %       | left to right | multiplicative |
|        \+ -        | left to right |    additive    |
|     < <= > >=      | left to right |   relational   |
|       \== !=       | left to right |    equality    |
|         ?:         | right to left |  conditional   |
| \= += -= \*= /= %= | right to left |   assignment   |

**Fig. 7.15** | Precedence and associativity of the operators discussed so far.

## Wrap-Up

In this chapter, we introduced the concept of algorithms, and explained how to introduce structure into your programs. We used pseudocode and flowcharts to represent algorithms and demonstrated how to translate them into control structures, which form the basis of all programs. We explored selection and repetition statements, and how to integrate them to make decisions and repeat statements in your code. We also introduced assignment, in- crement and decrement operators, as well as different types of errors that can result from incorrect implementation of control statements.

## Web Resources

www.deitel.com/javascript/

The Deitel JavaScript Resource Center contains links to some of the best JavaScript resources on the web. There you’ll find categorized links to JavaScript tools, code generators, forums, books, libraries, frameworks and more. Also check out the tutorials for all skill levels, from introductory to advanced. Be sure to visit the related Resource Centers on XHTML (www.deitel.com/xhtml/) and CSS 2.1 (www.deitel.com/css21/).

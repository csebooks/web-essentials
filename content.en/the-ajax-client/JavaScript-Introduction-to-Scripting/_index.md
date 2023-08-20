---
title: "JavaScript: Introduction to Scripting"
weight: 3
---

**O B J E C T I V E S** In this chapter you will learn:

■ To write simple JavaScript programs.

■ To use input and output statements.

■ Basic memory concepts.

■ To use arithmetic operators.

■ The precedence of arithmetic operators.

■ To write decision-making statements.

■ To use relational and equality operators.

**_Comment is free, but facts are sacred._ —C. P. Scott**

**_The creditor hath a better memory than the debtor._ —James Howell**

**_When faced with a decision, I always ask, “What would be the most fun?”_ —Peggy Walker**

**_Equality, in a social sense, may be divided into that of condition and that of rights._ —James Fenimore Cooper**

**198** Chapter 6 JavaScript: Introduction to Scripting **O**

**u tl**

**in e**

**6.1 Introduction** In the first five chapters, we introduced the Internet and Web, web browsers, Web 2.0, XHTML and Cascading Style Sheets (CSS). In this chapter, we begin our introduction to the **JavaScript**1 **scripting language**_,_ which facilitates a disciplined approach to designing computer programs that enhance the functionality and appearance of web pages.2

In Chapters 6–11, we present a detailed discussion of JavaScript—the _de facto_ stan- dard client-side scripting language for web-based applications due to its highly portable nature. Our treatment of JavaScript serves two purposes—it introduces client-side scripting (used in Chapters 6–13), which makes web pages more dynamic and interactive, and it provides the programming foundation for the more complex server-side scripting presented later in the book.

We now introduce JavaScript programming and present examples that illustrate sev- eral important features of JavaScript. Each example is carefully analyzed one line at a time. In Chapters 7–8, we present a detailed treatment of program development and program control in JavaScript.

Before you can run code examples with JavaScript on your computer, you may need to change your browser’s security settings. By default, Internet Explorer 7 prevents scripts on your local computer from running, displaying a yellow warning bar at the top of the window instead. To allow scripts to run in files on your computer, select **Internet Options** from the **Tools** menu. Click the **Advanced** tab and scroll down to the **Security** section of

**6.1** Introduction **6.2** Simple Program: Displaying a Line of Text in a Web Page **6.3** Modifying Our First Program **6.4** Obtaining User Input with prompt Dialogs

**6.4.1** Dynamic Welcome Page **6.4.2** Adding Integers

**6.5** Memory Concepts **6.6** Arithmetic **6.7** Decision Making: Equality and Relational Operators **6.8** Wrap-Up **6.9** Web Resources

Summary | Terminology | Self-Review Exercises | Answers to Self-Review Exercises | Exercises

1\. Many people confuse the scripting language JavaScript with the programming language Java (from Sun Microsystems, Inc.). Java is a full-fledged object-oriented programming language. It can be used to develop applications that execute on a range of devices—from the smallest devices (such as cell phones and PDAs) to supercomputers. Java is popular for developing large-scale distributed enter- prise applications and web applications. JavaScript is a browser-based scripting language developed by Netscape and implemented in all major browsers.

2\. JavaScript was originally created by Netscape. Both Netscape and Microsoft have been instrumental in the standardization of JavaScript by ECMA International as ECMAScript. Detailed information about the current ECMAScript standard can be found at www.ecma-international.org/publica- tions/standards/ECMA-262.htm.

6.2 Simple Program: Displaying a Line of Text in a Web Page **199**

the **Settings** list. Check the box labeled **Allow active content to run in files on My Computer** (Fig. 6.1). Click **OK** and restart Internet Explorer. XHTML documents on your own com- puter that contain JavaScript code will now run properly. Firefox has JavaScript enabled by default.

**6.2 Simple Program: Displaying a Line of Text in a Web Page** JavaScript uses notations that may appear strange to nonprogrammers. We begin by con- sidering a simple **script** (or **program**) that displays the text "Welcome to JavaScript Pro-

gramming!" in the body of an XHTML document. All major web browsers contain **JavaScript interpreters**, which process the commands written in JavaScript. The Java- Script code and its output in Internet Explorer are shown in Fig. 6.2.

This program illustrates several important JavaScript features. We consider each line of the XHTML document and script in detail. As in the preceding chapters, we have given each XHTML document line numbers for the reader’s convenience; the line numbers are not part of the XHTML document or of the JavaScript programs. Lines 12–13 do the “real work” of the script, namely, displaying the phrase Welcome to JavaScript Programming!

in the web page. Line 8 indicates the beginning of the <head> section of the XHTML document. For

the moment, the JavaScript code we write will appear in the <head> section. The browser interprets the contents of the <head> section first, so the JavaScript programs we write there execute before the <body> of the XHTML document displays. In later chapters on JavaScript and in the chapters on dynamic HTML, we illustrate **inline scripting**, in which JavaScript code is written in the <body> of an XHTML document.

**Fig. 6.1** | Enabling JavaScript in Internet Explorer 7

**200** Chapter 6 JavaScript: Introduction to Scripting

Line 10 uses the **<script>** tag to indicate to the browser that the text which follows is part of a script. The **type** attribute specifies the type of file as well as the **scripting lan- guage** used in the script—in this case, a text file written in javascript. Both Internet Explorer and Firefox use JavaScript as the default scripting language.

Line 11 contains the XHTML opening comment tag <!--. Some older web browsers do not support scripting. In such browsers, the actual text of a script often will display in the web page. To prevent this from happening, many script programmers enclose the script code in an XHTML comment, so that browsers that do not support scripts will simply ignore the script. The syntax used is as follows:

<script type = "text/javascript"> <!-- _script code here_ // -->

</script>

When a browser that does not support scripts encounters the preceding code, it ignores the <script> and </script> tags and the script code in the XHTML comment. Browsers

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 6.2: welcome.html --> **6** <!-- Displaying a line of text. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>A First Program in JavaScript</title>

**10 11 12 13 14 15 16** </head><body></body> **17** </html>

**Fig. 6.2** | Displaying a line of text.

<script type = "text/javascript"> <!-- document.writeln(

"<h1>Welcome to JavaScript Programming!</h1>" ); // -->

</script>

Title of the XHTML document

Location and name of the loaded XHTML document

Script result

6.2 Simple Program: Displaying a Line of Text in a Web Page **201**

that do support scripting will interpret the JavaScript code as expected. \[_Note:_ Some browsers require the **JavaScript single-line comment //** (see Section 6.4 for an explana- tion) before the ending XHTML comment delimiter (-->) to interpret the script properly. The opening HTML comment tag (<!--) also serves as a single line comment delimiter in JavaScript, therefore it does not need to be commented.\]

**Portability Tip 6.1** _Some browsers do not support the <script>…</script> tags. If your document is to be ren- dered with such browsers, enclose the script code between these tags in an XHTML comment, so that the script text does not get displayed as part of the web page. The closing comment tag of the XHTML comment (-->) is preceded by a JavaScript comment (//) to prevent the browser from trying to interpret the XHTML comment as a JavaScript statement._ 6.1

Lines 12–13 instruct the browser’s JavaScript interpreter to perform an **action**, namely, to display in the web page the **string** of characters contained between the **double quotation (") marks**. A string is sometimes called a **character string**, a **message** or a **string literal**. We refer to characters between double quotation marks as strings. Individual white-space characters between words in a string are not ignored by the browser. However, if consecutive spaces appear in a string, browsers condense them to a single space. Also, in most cases, browsers ignore leading white-space characters (i.e., white space at the begin- ning of a string).

**Software Engineering Observation 6.1** _Strings in JavaScript can be enclosed in either double quotation marks (") or single quotation marks (')._ 6.1

Lines 12–13 use the browser’s **document object**, which represents the XHTML doc- ument the browser is currently displaying. The document object allows you to specify text to display in the XHTML document. The browser contains a complete set of objects that allow script programmers to access and manipulate every element of an XHTML docu- ment. In the next several chapters, we overview some of these objects as we discuss the Document Object Model (DOM).

An object resides in the computer’s memory and contains information used by the script. The term **object** normally implies that **attributes** (**data**) and **behaviors** (**methods**) are associated with the object. The object’s methods use the attributes to perform useful actions for the **client of the object** (i.e., the script that calls the methods). A method may require additional information (**arguments**) to perform its action; this information is enclosed in parentheses after the name of the method in the script. In lines 12–13, we call the document object’s **writeln method** to write a line of XHTML markup in the XHTML document. The parentheses following the method name writeln contain the one argu- ment that method writeln requires (in this case, the string of XHTML that the browser is to display). Method writeln instructs the browser to display the argument string. If the string contains XHTML elements, the browser interprets these elements and renders them on the screen. In this example, the browser displays the phrase Welcome to JavaScript

Programming! as an h1-level XHTML heading, because the phrase is enclosed in an h1 ele- ment.

The code elements in lines 12–13, including document.writeln, its argument in the parentheses (the string) and the **semicolon** (;), together are called a **statement**. Every state-

**202** Chapter 6 JavaScript: Introduction to Scripting

ment ends with a semicolon (also known as the **statement terminator**), although this prac- tice is not required by JavaScript. Line 15 indicates the end of the script.

**Good Programming Practice 6.1** _Always include a semicolon at the end of a statement to terminate the statement. This notation clarifies where one statement ends and the next statement begins._ 6.1

**Common Programming Error 6.1** _Forgetting the ending </script> tag for a script may prevent the browser from interpreting the script properly and may prevent the XHTML document from loading properly._ 6.1

The </head> tag in line 16 indicates the end of the <head> section. Also in line 16, the tags <body> and </body> specify that this XHTML document has an empty body. Line 17 indicates the end of this XHTML document.

We are now ready to view our XHTML document in a web browser—open it in Internet Explorer or Firefox. If the script contains no syntax errors, it should produce the output shown in Fig. 6.2.

**Common Programming Error 6.2** _JavaScript is case sensitive. Not using the proper uppercase and lowercase letters is a_ syntax error*. A syntax error occurs when the script interpreter cannot recognize a statement. The interpreter normally issues an error message to help you locate and fix the incorrect statement. Syntax errors are violations of the rules of the programming language. The interpreter notifies you of a syntax error when it attempts to execute the statement containing the error. The JavaScript interpreter in Internet Explorer reports all syntax errors by indicating in a separate popup window that a “\_runtime error*” has occurred (i.e., a problem occurred while the interpreter was running the script). \[_Note: \_To enable this feature in IE7, select **Internet Options…** from the **Tools** menu. In the **Internet Options** dialog that appears, select the **Advanced** tab and click the checkbox la- belled **Display a notification about every script error** under the **Browsing** category. Firefox has an error console that reports JavaScript errors and warnings. It is accessible by choosing **Error Console** from the **Tools** menu.\]_ 6.2

**Error-Prevention Tip 6.1** _When the interpreter reports a syntax error, sometimes the error is not on the line number indi- cated by the error message. First, check the line for which the error was reported. If that line does not contain errors, check the preceding several lines in the script._ 6.1

**6.3 Modifying Our First Program** This section continues our introduction to JavaScript programming with two examples that modify the example in Fig. 6.2.

**_Displaying a Line of Colored Text_** A script can display Welcome to JavaScript Programming! several ways. Figure 6.3 uses two JavaScript statements to produce one line of text in the XHTML document. This ex- ample also displays the text in a different color, using the CSS color property.

Most of this XHTML document is identical to Fig. 6.2, so we concentrate only on lines 12–14 of Fig. 6.3, which display one line of text in the XHTML document. The first statement uses document method **write** to display a string. Unlike writeln, write does

6.3 Modifying Our First Program **203**

not position the output cursor in the XHTML document at the beginning of the next line after writing its argument. \[_Note:_ The output cursor keeps track of where the next character appears in the XHTML document, not where the next character appears in the web page as rendered by the browser.\] The next character written in the XHTML document appears immediately after the last character written with write. Thus, when lines 13–14 execute, the first character written, “W,” appears immediately after the last character displayed with write (the > character inside the right double quote in line 12). Each write or writeln statement resumes writing characters where the last write or writeln statement stopped writing characters. So, after a writeln statement, the next output appears on the beginning of the next line. In effect, the two statements in lines 12–14 result in one line of XHTML text. Remember that statements in JavaScript are separated by semicolons (;). Therefore, lines 13–14 represent only one complete statement. JavaScript allows large statements to be split over many lines. However, you cannot split a statement in the middle of a string. The + operator (called the “concatenation operator” when used in this manner) in line 13 joins two strings together and is explained in more detail later in this chapter.

**Common Programming Error 6.3** _Splitting a statement in the middle of a string is a syntax error._ 6.3

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 6.3: welcome2.html --> **6** <!-- Printing one line with multiple statements. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Printing a Line with Multiple Statements</title>

**10** <script type = "text/javascript"> **11** <!-- **12 13 14 15** // --> **16** </script> **17** </head><body></body> **18** </html>

**Fig. 6.3** | Printing one line with separate statements.

document.write( "<h1 style = \\"color: magenta\\">" ); document.write( "Welcome to JavaScript " +

"Programming!</h1>" );

**204** Chapter 6 JavaScript: Introduction to Scripting

Note that the characters \\" (in line 12) are not displayed in the browser. The **back- slash** (\\) in a string is an **escape character**_._ It indicates that a “special” character is to be used in the string. When a backslash is encountered in a string of characters, the next char- acter is combined with the backslash to form an **escape sequence**_._ The escape sequence \\" is the **double-quote character**, which causes a double-quote character to be inserted into the string. We use this escape sequence to insert double quotes around the attribute value for style without terminating the string. Note that we could also have used single quotes for the attribute value, as in document.write( "<h1 style = 'color: magenta'>" );, because the single quotes do not terminate a double-quoted string. We discuss escape sequences in greater detail momentarily.

It is important to note that the preceding discussion has nothing to do with the actual rendering of the XHTML text. Remember that the browser does not create a new line of text unless the browser window is too narrow for the text being rendered or the browser encounters an XHTML element that explicitly starts a new line—for example, <br/> to start a new line or <p> to start a new paragraph.

**Common Programming Error 6.4** _Many people confuse the writing of XHTML text with the rendering of XHTML text. Writing XHTML text creates the XHTML that will be rendered by the browser for presentation to the user._ 6.1

**_Displaying Multiple Lines of Text_** In the next example, we demonstrate that a single statement can cause the browser to dis- play multiple lines by using line-break XHTML tags (<br/>) throughout the string of XHTML text in a write or writeln method call. Figure 6.4 demonstrates the use of line- break XHTML tags. Lines 12–13 produce three separate lines of text when the browser renders the XHTML document.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 6.4: welcome3.html --> **6** <!-- Printing on multiple lines with a single statement. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Printing Multiple Lines</title>

**10** <script type = "text/javascript"> **11** <!-- **12 13 14** // --> **15** </script> **16** </head><body></body> **17** </html>

**Fig. 6.4** | Printing on multiple lines with a single statement. (Part 1 of 2.)

document.writeln( "<h1>Welcome to<br />JavaScript" + "<br />Programming!</h1>" );

6.3 Modifying Our First Program **205**

**_Displaying Text in an Alert Dialog_** The first several programs in this chapter display text in the XHTML document. Some- times it is useful to display information in windows called **dialogs** (or **dialog boxes**) that “pop up” on the screen to grab the user’s attention. Dialogs typically display important messages to users browsing the web page. JavaScript allows you easily to display a dialog box containing a message. The program in Fig. 6.5 displays Welcome to JavaScript Pro-

gramming! as three lines in a predefined dialog called an **alert dialog**.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 6.5: welcome4.html --> **6** <!-- Alert dialog displaying multiple lines. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Printing Multiple Lines in a Dialog Box</title>

**10** <script type = "text/javascript"> **11** <!-- **12 13** // --> **14** </script> **15** </head> **16** <body> **17** <p>Click Refresh (or Reload) to run this script again.</p> **18** </body> **19** </html>

**Fig. 6.5** | Alert dialog displaying multiple lines. (Part 1 of 2.)

**Fig. 6.4** | Printing on multiple lines with a single statement. (Part 2 of 2.)

window.alert( "Welcome to\\nJavaScript\\nProgramming!" );

The **OK** button allows the user to dismiss (or hide) the dialog.

The dialog is automatically sized to accommodate the string.

Title bar

Mouse cursor

**206** Chapter 6 JavaScript: Introduction to Scripting

Line 12 in the script uses the browser’s **window** object to display an alert dialog. The argument to the window object’s **alert** method is the string to display. Executing the pre- ceding statement displays the dialog shown in the first window of Fig. 6.5. The **title bar** of the dialog contains the string **Windows Internet Explorer** to indicate that the browser is presenting a message to the user. The dialog provides an **OK** button that allows the user to **dismiss** (i.e., **close**) the dialog by clicking the button. To dismiss the dialog, position the **mouse cursor** (also called the **mouse pointer**) over the **OK** button and click the mouse. Firefox’s alert dialog looks similar, but the title bar contains the text **\[JavaScript Applica- tion\]**.

**Common Programming Error 6.5** _Dialogs display plain text; they do not render XHTML. Therefore, specifying XHTML elements as part of a string to be displayed in a dialog results in the actual characters of the tags being displayed._ 6.1

Note that the alert dialog contains three lines of plain text. Normally, a dialog dis- plays the characters in a string exactly as they appear between the double quotes. Note, however, that the dialog does not display the characters \\n. The escape sequence \\n is the **newline character**_._ In a dialog, the newline character causes the **cursor** (i.e., the current screen position indicator) to move to the beginning of the next line in the dialog. Some other common escape sequences are listed in Fig. 6.6. The \\n, \\t and \\r escape sequences in the table do not affect XHTML rendering unless they are in a **pre element** (this element displays the text between its tags in a fixed-width font exactly as it is formatted between the tags, including leading white-space characters and consecutive white-space characters). The other escape sequences result in characters that will be displayed in plain text dialogs and in XHTML.

**Fig. 6.5** | Alert dialog displaying multiple lines. (Part 2 of 2.)

Escape sequence Description

\\n New line. Position the screen cursor at the beginning of the next line.

\\t Horizontal tab. Move the screen cursor to the next tab stop.

**Fig. 6.6** | Some common escape sequences. (Part 1 of 2.)

6.4 Obtaining User Input with prompt Dialogs **207**

**Common Programming Error 6.6** _XHTML elements in an alert dialog’s message are not interpreted as XHTML.This means that using <br />, for example, to create a line break in an alert box is an error. The string <br/>_

_will simply be included in your message._ 6.6

**6.4 Obtaining User Input with prompt Dialogs** Scripting gives you the ability to generate part or all of a web page’s content at the time it is shown to the user. A script can adapt the content based on input from the user or other variables, such as the time of day or the type of browser used by the client. Such web pages are said to be **dynamic**, as opposed to static, since their content has the ability to change. The next two subsections use scripts to demonstrate dynamic web pages.

**6.4.1 Dynamic Welcome Page** Our next script builds on prior scripts to create a dynamic welcome page that obtains the user’s name, then displays it on the page. The script uses another predefined dialog box from the window object—a **prompt** dialog—which allows the user to input a value that the script can use. The program asks the user to input a name, then displays the name in the XHTML document. Figure 6.7 presents the script and sample output. \[_Note:_ In later Java- Script chapters, we obtain input via GUI components in XHTML forms, as introduced in Chapter 4.\]

Line 12 is a **declaration** that contains the JavaScript **keyword** var. Keywords are words that have special meaning in JavaScript. The keyword **var** at the beginning of the statement indicates that the word name is a **variable**. A variable is a location in the com- puter’s memory where a value can be stored for use by a program. All variables have a name, type and value, and should be declared with a var statement before they are used in

\\r Carriage return. Position the screen cursor to the beginning of the current line; do not advance to the next line. Any characters output after the carriage return overwrite the characters previously output on that line.

\\\\ Backslash. Used to represent a backslash character in a string.

\\" Double quote. Used to represent a double-quote character in a string contained in double quotes. For example,

window.alert( "\\"in quotes\\"" );

displays "in quotes" in an alert dialog.

\\' Single quote. Used to represent a single-quote character in a string. For example,

window.alert( '\\'in quotes\\'' );

displays 'in quotes' in an alert dialog.

Escape sequence Description

**Fig. 6.6** | Some common escape sequences. (Part 2 of 2.)

**208** Chapter 6 JavaScript: Introduction to Scripting

a program. Although using var to declare variables is not required, we will see in Chapter 9, JavaScript: Functions, that var sometimes ensures proper behavior of a script.

The name of a variable can be any valid **identifier**. An identifier is a series of characters consisting of letters, digits, underscores ( \_ ) and dollar signs ($) that does not begin with a digit and is not a reserved JavaScript keyword. \[_Note:_ A complete list of keywords can be

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 6.7: welcome5.html --> **6** <!-- Prompt box used on a welcome screen. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Using Prompt and Alert Boxes</title>

**10** <script type = "text/javascript"> **11** <!-- **12** // string entered by the user **13 14** // read the name from the prompt box as a string **15 16 17** document.writeln( "<h1>Hello, " + name + **18** ", welcome to JavaScript programming!</h1>" ); **19** // --> **20** </script> **21** </head> **22** <body> **23** <p>Click Refresh (or Reload) to run this script again.</p> **24** </body> **25** </html>

**Fig. 6.7** | Prompt box used on a welcome screen.

var name;

name = window.prompt( "Please enter your name" );

6.4 Obtaining User Input with prompt Dialogs **209**

found in Fig. 7.2.\] Identifiers may not contain spaces. Some valid identifiers are Welcome, $value, \_value, m_inputField1 and button7. The name 7button is not a valid identifier, because it begins with a digit, and the name input field is not valid, because it contains a space. Remember that JavaScript is **case sensitive**—uppercase and lowercase letters are considered to be different characters, so name, Name and NAME are different identifiers.

**Good Programming Practice 6.2** \_Choosing meaningful variable names helps a script to be “self-documenting” (i.e., easy to under- stand by simply reading the script, rather than having to read manuals or extended comments).\_6.2

**Good Programming Practice 6.3** _By convention, variable-name identifiers begin with a lowercase first letter. Each subsequent word should begin with a capital first letter. For example, identifier itemPrice has a capital P in its second word, Price._ 6.3

**Common Programming Error 6.7** _Splitting a statement in the middle of an identifier is a syntax error._ 6.7

Declarations end with a semicolon (;) and can be split over several lines with each variable in the declaration separated by a comma—known as a **comma-separated list** of variable names. Several variables may be declared either in one declaration or in multiple declarations.

Programmers often indicate the purpose of each variable in the program by placing a JavaScript comment at the end of each line in the declaration. In line 12, a **single-line comment** that begins with the characters // states the purpose of the variable in the script. This form of comment is called a single-line comment because it terminates at the end of the line in which it appears. A // comment can begin at any position in a line of JavaScript code and continues until the end of the line. Comments do not cause the browser to per- form any action when the script is interpreted; rather, comments are ignored by the Java- Script interpreter.

**Good Programming Practice 6.4** _Some programmers prefer to declare each variable on a separate line. This format allows for easy insertion of a descriptive comment next to each declaration. This is a widely followed professional coding standard._ 6.4

Another comment notation facilitates the writing of **multiline comments**. For example,

/\* This is a multiline comment. It can be split over many lines. \*/

is a multiline comment spread over several lines. Such comments begin with the delimiter /\* and end with the delimiter \*/. All text between the delimiters of the comment is ig- nored by the interpreter.

**Common Programming Error 6.8** _Forgetting one of the delimiters of a multiline comment is a syntax error._ 6.8

**210** Chapter 6 JavaScript: Introduction to Scripting

**Common Programming Error 6.9** _Nesting multiline comments (i.e., placing a multiline comment between the delimiters of anoth- er multiline comment) is a syntax error._ 6.9

JavaScript adopted comments delimited with /\* and \*/ from the C programming lan- guage and single-line comments delimited with // from the C++ programming language. JavaScript programmers generally prefer C++-style single-line comments over C-style comments. Throughout this book, we use C++-style single-line comments.

Line 14 is a comment indicating the purpose of the statement in the next line. Line 15 calls the window object’s prompt method, which displays the dialog in Fig. 6.8. The dialog allows the user to enter a string representing the user’s name.

The argument to prompt specifies a message telling the user what to type in the text field. This message is called a **prompt** because it directs the user to take a specific action. An optional second argument, separated from the first by a comma, may specify the default string displayed in the text field; our code does not supply a second argument. In this case, Internet Explorer displays the default value undefined, while Firefox and most other browsers leave the text field empty. The user types characters in the text field, then clicks the **OK** button to submit the string to the program. We normally receive input from a user through a GUI component such as the prompt dialog, as in this program, or through an XHTML form GUI component, as we will see in later chapters.

The user can type anything in the text field of the prompt dialog. For this program, whatever the user enters is considered the name. If the user clicks the **Cancel** button, no string value is sent to the program. Instead, the prompt dialog submits the value **null**, a JavaScript keyword signifying that a variable has no value. Note that null is not a string literal, but rather a predefined term indicating the absence of value. Writing a null value to the document, however, displays the word null in the web page.

The statement in line 15 **assigns** the value returned by the window object’s prompt

method (a string containing the characters typed by the user—or the default value or null if the **Cancel** button is clicked) to variable name by using the **assignment operator**, =. The statement is read as, “name gets the value returned by window.prompt( "Please enter

your name" ).” The = operator is called a **binary operator** because it has two **operands**— name and the result of the expression window.prompt( "Please enter your name" ). This entire statement is called an **assignment statement** because it assigns a value to a variable. The expression to the right of the assignment operator is always evaluated first.

**Fig. 6.8** | Prompt dialog displayed by the window object’s prompt method.

When the user clicks **OK**, the value typed by the user is returned to the program as a string.

This is the text field in which the user types the value.

This is the prompt to the user.

This is the value the user types into the alert dialog.

6.4 Obtaining User Input with prompt Dialogs **211**

**Good Programming Practice 6.5** _Place spaces on either side of a binary operator. This format makes the operator stand out and makes the program more readable._ 6.5

Lines 17–18 use document.writeln to display the new welcome message. The expres- sion inside the parentheses uses the operator + to “add” a string (the literal "<h1>Hello, "), the variable name (the string that the user entered in line 15) and another string (the literal ", welcome to JavaScript programming!</h1>"). JavaScript has a version of the + oper- ator for **string concatenation** that enables a string and a value of another data type (including another string) to be combined. The result of this operation is a new (and nor- mally longer) string. If we assume that name contains the string literal "Jim", the expres- sion evaluates as follows: JavaScript determines that the two operands of the first +

operator (the string "<h1>Hello, " and the value of variable name) are both strings, then concatenates the two into one string. Next, JavaScript determines that the two operands of the second + operator (the result of the first concatenation operation, the string "<h1>Hello, Jim", and the string ", welcome to JavaScript programming!</h1>") are both strings and concatenates the two. This results in the string "<h1>Hello, Jim, wel-

come to JavaScript programming!</h1>". The browser renders this string as part of the XHTML document. Note that the space between Hello, and Jim is part of the string "<h1>Hello, ".

As we’ll illustrate later, the + operator used for string concatenation can convert other variable types to strings if necessary. Because string concatenation occurs between two strings, JavaScript must convert other variable types to strings before it can proceed with the operation. For example, if a variable age has an integer value equal to 21, then the expression "my age is " + age evaluates to the string "my age is 21". JavaScript converts the value of age to a string and concatenates it with the existing string literal "my age is ".

After the browser interprets the <head> section of the XHTML document (which contains the JavaScript), it then interprets the <body> of the XHTML document (lines 22–24) and renders the XHTML. Notice that the XHTML page is not rendered until the prompt is dismissed because the prompt pauses execution in the head, before the body is processed. If you click your browser’s **Refresh** (Internet Explorer) or **Reload** (Firefox) button after entering a name, the browser will reload the XHTML document, so that you can execute the script again and change the name. \[_Note:_ In some cases, it may be necessary to hold down the _Shift_ key while clicking the **Refresh** or **Reload** button, to ensure that the XHTML document reloads properly. Browsers often save a recent copy of a page in memory, and holding the _Shift_ key forces the browser to download the most recent version of a page.\]

**6.4.2 Adding Integers** Our next script illustrates another use of prompt dialogs to obtain input from the user. Figure 6.9 inputs two **integers** (whole numbers, such as 7, –11, 0 and 31914) typed by a user at the keyboard, computes the sum of the values and displays the result.

Lines 12–16 declare the variables firstNumber, secondNumber, number1, number2 and sum. Single-line comments state the purpose of each of these variables. Line 19 employs a prompt dialog to allow the user to enter a string representing the first of the two

**212** Chapter 6 JavaScript: Introduction to Scripting

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 6.9: addition.html --> **6** <!-- Addition script. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>An Addition Program</title>

**10** <script type = "text/javascript"> **11** <!-- **12** var firstNumber; // first string entered by user **13** var secondNumber; // second string entered by user **14** var number1; // first number to add **15** var number2; // second number to add **16** var sum; // sum of number1 and number2 **17 18** // read in first number from user as a string **19 20 21** // read in second number from user as a string **22 23 24** // convert numbers from strings to integers **25 26 27 28** sum = number1 + number2; // add the numbers **29 30** // display the results **31** document.writeln( "<h1>The sum is " + sum + "</h1>" ); **32** // --> **33** </script> **34** </head> **35** <body> **36** <p>Click Refresh (or Reload) to run the script again</p> **37** </body> **38** </html>

**Fig. 6.9** | Addition script. (Part 1 of 2.)

firstNumber = window.prompt( "Enter first integer" );

secondNumber = window.prompt( "Enter second integer" );

number1 = parseInt( firstNumber ); number2 = parseInt( secondNumber );

6.4 Obtaining User Input with prompt Dialogs **213**

integers that will be added. The script assigns the first value entered by the user to the vari- able firstNumber. Line 22 displays a prompt dialog to obtain the second number to add and assign this value to the variable secondNumber.

As in the preceding example, the user can type anything in the prompt dialog. For this program, if the user either types a noninteger value or clicks the **Cancel** button, a logic error will occur, and the sum of the two values will appear in the XHTML document as **NaN** (meaning **not a number**). A logic error is caused by syntactically correct code that produces an undesired result. In Chapter 11, JavaScript: Objects, we discuss the Number

object and its methods that can determine whether a value is not a number. Recall that a prompt dialog returns to the program as a string the value typed by the

user. Lines 25–26 convert the two strings input by the user to integer values that can be used in a calculation. Function **parseInt** converts its string argument to an integer. Line 25 assigns to the variable number1 the integer that function parseInt returns. Line 26 assigns an integer value to variable number2 in a similar manner. Any subsequent references to number1 and number2 in the program use these integer values. \[_Note:_ We refer to parseInt as a **function** rather than a method because we do not precede the function call with an object name (such as document or window) and a dot (.). The term method means that the function belongs to a particular object. For example, method writeln belongs to the document object and method prompt belongs to the window object.\]

Line 28 calculates the sum of the variables number1 and number2 using the **addition operator**, +, and assigns the result to variable sum by using the assignment operator, =. Notice that the + operator can perform both addition and string concatenation. In this case, the + operator performs addition, because both operands contain integers. After line 28 performs this calculation, line 31 uses document.writeln to display the result of the addition on the web page. Lines 33 and 34 close the script and head elements, respec- tively. Lines 35–37 render the body of XHTML document. Use your browser’s **Refresh** or **Reload** button to reload the XHTML document and run the script again.

**Common Programming Error 6.10** _Confusing the + operator used for string concatenation with the + operator used for addition often leads to undesired results. For example, if integer variable y has the value 5, the expression "y +_

_2 = " + y + 2 results in "y + 2 = 52", not "y + 2 = 7", because first the value of y (i.e., 5) is con- catenated with the string "y + 2 = ", then the value 2 is concatenated with the new, larger string "y + 2 = 5". The expression "y + 2 = " + (y + 2) produces the string "y + 2 = 7" because the parentheses ensure that_ y + 2 _is executed mathematically before it is conveted to a string._ 6.10

**Fig. 6.9** | Addition script. (Part 2 of 2.)

**214** Chapter 6 JavaScript: Introduction to Scripting

**6.5 Memory Concepts** Variable names such as number1, number2 and sum actually correspond to **locations** in the computer's memory. Every variable has a **name**_,_ a **type** and a **value**.

In the addition program in Fig. 6.9, when line 25 executes, the string firstNumber

(previously entered by the user in a prompt dialog) is converted to an integer and placed into a memory location to which the name number1 has been assigned by the interpreter. Suppose the user entered the string 45 as the value for firstNumber. The program converts firstNumber to an integer, and the computer places the integer value 45 into location number1, as shown in Fig. 6.10. Whenever a value is placed in a memory location, the value replaces the previous value in that location. The previous value is lost.

Suppose that the user enters 72 as the second integer. When line 26 executes, the pro- gram converts secondNumber to an integer and places that integer value, 72, into location number2; then the memory appears as shown in Fig. 6.11.

Once the program has obtained values for number1 and number2, it adds the values and places the sum into variable sum. The statement

sum = number1 + number2;

performs the addition and also replaces sum’s previous value. After sum is calculated, the memory appears as shown in Fig. 6.12. Note that the values of number1 and number2 ap- pear exactly as they did before they were used in the calculation of sum. These values were used, but not destroyed, when the computer performed the calculation—when a value is read from a memory location, the process is nondestructive*.*

**Fig. 6.10** | Memory location showing the name and value of variable number1.

**Fig. 6.11** | Memory locations after inputting values for variables number1 and number2.

**Fig. 6.12** | Memory locations after calculating the sum of number1 and number2.

45number1

45

72

number1

number2

45

72

117

number1

number2

sum

6.6 Arithmetic **215**

**_Data Types in JavaScript_** Unlike its predecessor languages C, C++ and Java, JavaScript does not require variables to have a declared type before they can be used in a program. A variable in JavaScript can contain a value of any data type, and in many situations JavaScript automatically converts between values of different types for you. For this reason, JavaScript is referred to as a **loosely typed language**. When a variable is declared in JavaScript, but is not given a value, the variable has an **undefined** value. Attempting to use the value of such a variable is nor- mally a logic error.

When variables are declared, they are not assigned values unless specified by the pro- grammer. Assigning the value null to a variable indicates that it does not contain a value.

**6.6 Arithmetic** Many scripts perform arithmetic calculations. Figure 6.13 summarizes the **arithmetic op- erators**. Note the use of various special symbols not used in algebra. The **asterisk (\*)** indi- cates multiplication; the **percent sign (%)** is the **remainder operator**, which will be discussed shortly. The arithmetic operators in Fig. 6.13 are binary operators, because each operates on two operands. For example, the expression sum + value contains the binary operator + and the two operands sum and value.

JavaScript provides the remainder operator, %, which yields the remainder after divi- sion. \[_Note:_ The % operator is known as the modulus operator in some programming lan- guages.\] The expression x % y yields the remainder after x is divided by y. Thus, 17 % 5

yields 2 (i.e., 17 divided by 5 is 3, with a remainder of 2), and 7.4 % 3.1 yields 1.2. In later chapters, we consider applications of the remainder operator, such as determining whether one number is a multiple of another. There is no arithmetic operator for exponentiation in JavaScript. (Chapter 8, JavaScript: Control Statements II, shows how to perform expo- nentiation in JavaScript using the Math object’s pow method.)

Arithmetic expressions in JavaScript must be written in **straight-line form** to facilitate entering programs into the computer. Thus, expressions such as “a divided by b” must be written as a / b, so that all constants, variables and operators appear in a straight line. The following algebraic notation is generally not acceptable to computers:

JavaScript operation

Arithmetic operator

Algebraic expression

JavaScript expression

Addition + _f_ \+ 7 f + 7

Subtraction - _p_ – _c_ p - c

Multiplication \* _bm_ b \* m

Division / _x_ / _y or or x_ ÷ _y_ x / y

Remainder % _r_ mod _s_ r % s

**Fig. 6.13** | Arithmetic operators.

_a b_ \--

_x y --_

**216** Chapter 6 JavaScript: Introduction to Scripting

Parentheses are used to group expressions in the same manner as in algebraic expres- sions. For example, to multiply a times the quantity b + c we write:

a \* ( b + c )

JavaScript applies the operators in arithmetic expressions in a precise sequence deter- mined by the following **rules of operator precedence**, which are generally the same as those followed in algebra:

**1\.** Multiplication, division and remainder operations are applied first. If an expres- sion contains several multiplication, division and remainder operations, opera- tors are applied from left to right. Multiplication, division and remainder operations are said to have the same level of precedence.

**2\.** Addition and subtraction operations are applied next. If an expression contains several addition and subtraction operations, operators are applied from left to right. Addition and subtraction operations have the same level of precedence.

The rules of operator precedence enable JavaScript to apply operators in the correct order. When we say that operators are applied from left to right, we are referring to the **associa- tivity** of the operators—the order in which operators of equal priority are evaluated. We will see that some operators associate from right to left. Figure 6.14 summarizes the rules of operator precedence. The table in Fig. 6.14 will be expanded as additional JavaScript operators are introduced. A complete precedence chart is included in Appendix C.

Now, in light of the rules of operator precedence, let us consider several algebraic expressions. Each example lists an algebraic expression and the equivalent JavaScript expression.

The following is an example of an arithmetic mean (average) of five terms:

Algebra:

JavaScript: m = ( a + b + c + d + e ) / 5;

The parentheses are required to group the addition operators, because division has higher precedence than addition. The entire quantity ( a + b + c + d + e ) is to be divided by 5. If the parentheses are erroneously omitted, we obtain a + b + c + d + e / 5, which evaluates as

and would not lead to the correct answer.

Operator(s) Operation(s) Order of evaluation (precedence)

\*, / or % Multiplication Division Remainder

Evaluated first. If there are several such opera- tions, they are evaluated from left to right.

\+ or - Addition Subtraction

Evaluated last. If there are several such operations, they are evaluated from left to right.

**Fig. 6.14** | Precedence of arithmetic operators.

_m a b c d e_\+ + + + _5_

_\---------------------------------------_\=

_a b c d e 5 --_\+ + + +

6.7 Decision Making: Equality and Relational Operators **217**

The following is an example of the equation of a straight line:

Algebra:

JavaScript: y = m \* x + b;

No parentheses are required. The multiplication operator is applied first, because multi- plication has a higher precedence than addition. The assignment occurs last, because it has a lower precedence than multiplication and addition.

The following example contains remainder (%), multiplication, division, addition and subtraction operations:

The circled numbers under the statement indicate the order in which JavaScript applies the operators. The multiplication, remainder and division operations are evaluated first in left-to-right order (i.e., they associate from left to right), because they have higher prece- dence than addition and subtraction. The addition and subtraction operations are evalu- ated next. These operations are also applied from left to right.

To develop a better understanding of the rules of operator precedence, consider the evaluation of a second-degree polynomial (_y = ax2 + bx + c_):

The circled numbers indicate the order in which JavaScript applies the operators. Suppose that a, b, c and x are initialized as follows: a = 2, b = 3, c = 7 and x = 5.

Figure 6.15 illustrates the order in which the operators are applied in the preceding second-degree polynomial.

As in algebra, it is acceptable to use unnecessary parentheses in an expression to make the expression clearer. These are also called **redundant parentheses**. For example, the pre- ceding second-degree polynomial might be parenthesized as follows:

y = ( a \* x \* x ) + ( b \* x ) + c;

**Good Programming Practice 6.6** _Using parentheses for complex arithmetic expressions, even when the parentheses are not neces- sary, can make the arithmetic expressions easier to read._ 6.6

**6.7 Decision Making: Equality and Relational Operators** This section introduces a version of JavaScript’s **if** statement that allows a program to make a decision based on the truth or falsity of a **condition**. If the condition is met (i.e., the condition is **true**), the statement in the body of the if statement is executed. If the condition is not met (i.e., the condition is **false**), the statement in the body of the if state-

_y mx b_+=

z

6 1 2 4 3 5

\= p \* r % q + w / x - y;

_z = pr%q + w/x_ – _yAlgebra:_

_Java:_

6 1 2 4 3 5

y = a \* x \* x + b \* x + c;

**218** Chapter 6 JavaScript: Introduction to Scripting

ment is not executed. We will see an example shortly. \[_Note:_ Other versions of the if state- ment are introduced in Chapter 7, JavaScript: Control Statements I.\]

Conditions in if statements can be formed by using the **equality operators** and **rela- tional operators** summarized in Fig. 6.16. The relational operators all have the same level

**Fig. 6.15** | Order in which a second-degree polynomial is evaluated.

Standard algebraic equality operator or relational operator

JavaScript equality or relational operator

Sample JavaScript condition

Meaning of JavaScript condition

_Equality operators_

\= == x == y x is equal to y

≠ != x != y x is not equal to y

_Relational operators_

\> > x > y x is greater than y

< < x < y x is less than y

≥ >= x >= y x is greater than or equal to y

≤ <= x <= y x is less than or equal to y

**Fig. 6.16** | Equality and relational operators.

_(Leftmost multiplication)_

_(Leftmost multiplication)_

_(Multiplication before addition)_

_(Leftmost addition)_

_(Last addition)_

_(Last operation—place_ 72 _in_ y*)*

_Step 1._ y = 2 \* 5 \* 5 + 3 \* 5 + 7;

2 \* 5 is 10

_Step 2._ y = 10 \* 5 + 3 \* 5 + 7;

10 \* 5 is 50

_Step 3._ y = 50 + 3 \* 5 + 7;

3 \* 5 is 15

_Step 4._ y = 50 + 15 + 7;

50 + 15 is 65

_Step 5._ y = 65 + 7;

65 + 7 is 72

_Step 6._ y = 72

6.7 Decision Making: Equality and Relational Operators **219**

of precedence and associate from left to right. The equality operators both have the same level of precedence, which is lower than the precedence of the relational operators. The equality operators also associate from left to right.

**Common Programming Error 6.11** _It is a syntax error if the operators ==, !=, >= and <= contain spaces between their symbols, as in = =, ! =, > = and < =, respectively._ 6.11

**Common Programming Error 6.12** _Reversing the operators !=, >= and <=, as in =!, => and =<, respectively, is a syntax error._ 6.12

**Common Programming Error 6.13** _Confusing the equality operator, ==, with the assignment operator, =, is a logic error. The equal- ity operator should be read as “is equal to,” and the assignment operator should be read as “gets” or “gets the value of.” Some people prefer to read the equality operator as “double equals” or “equals equals.”_ 6.13

The script in Fig. 6.17 uses four if statements to display a time-sensitive greeting on a welcome page. The script obtains the local time from the user’s computer and converts it from 24-hour clock format (0–23) to a 12-hour clock format (0–11). Using this value, the script displays an appropriate greeting for the current time of day. The script and sample output are shown in Fig. 6.17.

Lines 12–14 declare the variables used in the script. Remember that variables may be declared in one declaration or in multiple declarations. If more than one variable is declared in a single declaration (as in this example), the names are separated by commas (,). This list of names is referred to as a comma-separated list. Once again, note the com- ment at the end of each line, indicating the purpose of each variable in the program. Also note that some of the variables are assigned a value in the declaration—JavaScript allows you to assign a value to a variable when the variable is declared.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 6.17: welcome6.html --> **6** <!-- Using equality and relational operators. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Using Relational Operators</title>

**10** <script type = "text/javascript"> **11** <!-- **12** var name; // string entered by the user **13** var // current date and time **14** var // current hour (0-23) **15 16** // read the name from the prompt box as a string **17** name = window.prompt( "Please enter your name" );

**Fig. 6.17** | Using equality and relational operators. (Part 1 of 2.)

now = new Date(); hour = now.getHours();

**220** Chapter 6 JavaScript: Introduction to Scripting

Line 13 sets the variable now to a new **Date object**, which contains information about the current local time. In Section 6.2, we introduced the document object, an object that encapsulates data pertaining to the current web page. Programmers may choose to use

**18 19** // determine whether it is morning **20 21** document.write( "<h1>Good Morning, " ); **22 23** // determine whether the time is PM **24 25** { **26** // convert to a 12-hour clock **27 28 29** // determine whether it is before 6 PM **30 31** document.write( "<h1>Good Afternoon, " ); **32 33** // determine whether it is after 6 PM **34 35** document.write( "<h1>Good Evening, " ); **36** } // end if **37 38** document.writeln( name + **39** ", welcome to JavaScript programming!</h1>" ); **40** // --> **41** </script> **42** </head> **43** <body> **44** <p>Click Refresh (or Reload) to run this script again.</p> **45** </body> **46** </html>

**Fig. 6.17** | Using equality and relational operators. (Part 2 of 2.)

if ( hour < 12 )

if ( hour >= 12 )

hour = hour - 12;

if ( hour < 6 )

if ( hour >= 6 )

6.7 Decision Making: Equality and Relational Operators **221**

other objects to perform specific tasks or obtain particular pieces of information. Here, we use JavaScript’s built-in Date object to acquire the current local time. We create a new instance of an object by using the **new** operator followed by the type of the object, Date, and a pair of parentheses. Some objects require that arguments be placed in the parentheses to specify details about the object to be created. In this case, we leave the parentheses empty to create a default Date object containing information about the current date and time. After line 13 executes, the variable now refers to the new Date object. \[_Note:_ We did not need to use the new operator when we used the document and window objects because these objects always are created by the browser.\] Line 14 sets the variable hour to an integer equal to the current hour (in a 24-hour clock format) returned by the Date object’s getHours method. Chapter 11 presents a more detailed discussion of the Date object’s attributes and methods, and of objects in general. As in the preceding example, the script uses window.prompt to allow the user to enter a name to display as part of the greeting (line 17).

To display the correct time-sensitive greeting, the script must determine whether the user is visiting the page during the morning, afternoon or evening. The first if statement (lines 20–21) compares the value of variable hour with 12. If hour is less than 12, then the user is visiting the page during the morning, and the statement at line 21 outputs the string "Good morning". If this condition is not met, line 21 is not executed. Line 24 determines whether hour is greater than or equal to 12. If hour is greater than or equal to 12, then the user is visiting the page in either the afternoon or the evening. Lines 25–36 execute to determine the appropriate greeting. If hour is less than 12, then the JavaScript interpreter does not execute these lines and continues to line 38.

The brace { in line 25 begins a block of statements (lines 27–35) that are all executed together if hour is greater than or equal to 12—to execute multiple statements inside an if construct, enclose them in curly braces. Line 27 subtracts 12 from hour, converting the current hour from a 24-hour clock format (0–23) to a 12-hour clock format (0–11). The if statement (line 30) determines whether hour is now less than 6. If it is, then the time is between noon and 6 PM, and line 31 outputs the beginning of an XHTML h1 element ("<h1>Good Afternoon, "). If hour is greater than or equal to 6, the time is between 6 PM and midnight, and the script outputs the greeting "Good Evening" (lines 34–35). The brace } in line 36 ends the block of statements associated with the if statement in line 24. Note that if statements can be **nested**, i.e., one if statement can be placed inside another if statement. The if statements that determine whether the user is visiting the page in the afternoon or the evening (lines 30–31 and lines 34–35) execute only if the script has already established that hour is greater than or equal to 12 (line 24). If the script has already determined the current time of day to be morning, these additional comparisons are not performed. (Chapter 7, JavaScript: Control Statements I, presents a more in-depth discus- sion of blocks and nested if statements.) Finally, lines 38–39 output the rest of the XHTML h1 element (the remaining part of the greeting), which does not depend on the time of day.

**Good Programming Practice 6.7** _Include comments after the closing curly brace of control statements (such as if statements) to indicate where the statements end, as in line 36 of Fig. 6.17._ 6.7

Note the indentation of the if statements throughout the program. Such indentation enhances program readability.

**222** Chapter 6 JavaScript: Introduction to Scripting

**Good Programming Practice 6.8** _Indent the statement in the body of an if statement to make the body of the statement stand out and to enhance program readability._ 6.8

**Good Programming Practice 6.9** _Place only one statement per line in a program. This enhances program readability._ 6.9

**Common Programming Error 6.14** _Forgetting the left and/or right parentheses for the condition in an if statement is a syntax error. The parentheses are required._ 6.14

Note that there is no semicolon (;) at the end of the first line of each if statement. Including such a semicolon would result in a logic error at execution time. For example,

if ( hour < 12 ) ; document.write( "<h1>Good Morning, " );

would actually be interpreted by JavaScript erroneously as

if ( hour < 12 ) ;

document.write( "<h1>Good Morning, " );

where the semicolon on the line by itself—called the **empty statement**—is the statement to execute if the condition in the if statement is true. When the empty statement executes, no task is performed in the program. The program then continues with the next state- ment, which executes regardless of whether the condition is true or false. In this example, "<h1>Good Morning, " would be printed regardless of the time of day.

**Common Programming Error 6.15** _Placing a semicolon immediately after the right parenthesis of the condition in an if statement is normally a logic error. The semicolon would cause the body of the if statement to be empty, so the if statement itself would perform no action, regardless of whether its condition was true. Worse yet, the intended body statement of the if statement would now become a statement in sequence after the if statement and would always be executed._ 6.15

**Common Programming Error 6.16** _Leaving out a condition in a series of if statements is normally a logic error. For instance, check- ing if hour is greater than 12 or less than 12, but not if hour is equal to 12, would mean that the script takes no action when hour is equal to 12. Always be sure to handle every possible con- dition._ 6.16

Note the use of spacing in lines 38–39 of Fig. 6.17. Remember that white-space char- acters, such as tabs, newlines and spaces, are normally ignored by the browser. So, state- ments may be split over several lines and may be spaced according to the programmer’s preferences without affecting the meaning of a program. However, it is incorrect to split identifiers and string literals. Ideally, statements should be kept small, but it is not always possible to do so.

6.8 Wrap-Up **223**

**Good Programming Practice 6.10** _A lengthy statement may be spread over several lines. If a single statement must be split across lines, choose breaking points that make sense, such as after a comma in a comma-separated list or after an operator in a lengthy expression. If a statement is split across two or more lines, indent all subsequent lines._ 6.10

The chart in Fig. 6.18 shows the precedence of the operators introduced in this chapter. The operators are shown from top to bottom in decreasing order of precedence. Note that all of these operators, with the exception of the assignment operator, =, associate from left to right. Addition is left associative, so an expression like x + y + z is evaluated as if it had been written as (x + y) + z. The assignment operator, =, associates from right to left, so an expression like x = y = 0 is evaluated as if it had been written as x = (y = 0), which first assigns the value 0 to variable y, then assigns the result of that assignment, 0, to x.

**Good Programming Practice 6.11** _Refer to the operator precedence chart when writing expressions containing many operators. Con- firm that the operations are performed in the order in which you expect them to be performed. If you are uncertain about the order of evaluation in a complex expression, use parentheses to force the order, exactly as you would do in algebraic expressions. Be sure to observe that some operators, such as assignment (=), associate from right to left rather than from left to right._ 6.11

**6.8 Wrap-Up** We’ve introduced many important features of JavaScript, including how to display data, how to input data from the keyboard, how to perform calculations and how to make de- cisions. We also discussed the basics of memory and how variables are stored in a comput- er. In Chapter 7, we introduce structured programming*.* You will become more familiar with indentation techniques. We will study how to specify and vary the order in which statements are executed; this order is called the flow of control*.*

**6.9 Web Resources** www.deitel.com/javascript

The Deitel JavaScript Resource Center contains links to some of the best JavaScript resources on the web. There you’ll find categorized links to JavaScript tools, code generators, forums, books, libraries, frameworks and more. Also check out the tutorials for all skill levels, from introductory to advanced.

Operators Associativity Type

\* / % left to right multiplicative

\+ - left to right additive

< <= > >= left to right relational

\== != left to right equality

\= right to left assignment

**Fig. 6.18** | Precedence and associativity of the operators discussed so far.

**224** Chapter 6 JavaScript: Introduction to Scripting

**Summary _Section 6.1 Introduction_** • The JavaScript language facilitates a disciplined approach to the design of computer programs

that enhance web pages.

**_Section 6.2 Simple Program: Displaying a Line of Text in a Web Page_** • The spacing displayed by a browser in a web page is determined by the XHTML elements used

to format the page.

• Often, JavaScripts appear in the <head> section of the XHTML document.

• The browser interprets the contents of the <head> section first.

• The <script> tag indicates to the browser that the text that follows is part of a script. Attribute type specifies the scripting language used in the script—such as text/javascript.

• A string of characters can be contained between double (") or single (') quotation marks.

• A string is sometimes called a character string, a message or a string literal.

• The browser’s document object represents the XHTML document currently being displayed in the browser. The document object allows a script programmer to specify XHTML text to be dis- played in the XHTML document.

• The browser contains a complete set of objects that allow script programmers to access and ma- nipulate every element of an XHTML document.

• An object resides in the computer’s memory and contains information used by the script. The term object normally implies that attributes (data) and behaviors (methods) are associated with the object. The object’s methods use the attributes’ data to perform useful actions for the client of the object—the script that calls the methods.

• The document object’s writeln method writes a line of XHTML text in the XHTML document.

• The parentheses following the name of a method contain the arguments that the method requires to perform its task (or its action).

• Using writeln to write a line of XHTML text into a document does not guarantee that a corre- sponding line of text will appear in the XHTML document. The text displayed is dependent on the contents of the string written, which is subsequently rendered by the browser. The browser will interpret the XHTML elements as it normally does to render the final text in the document.

• Every statement should end with a semicolon (also known as the statement terminator), although none is required by JavaScript.

• JavaScript is case sensitive. Not using the proper uppercase and lowercase letters is a syntax error.

**_Section 6.3 Modifying Our First Program_** • Sometimes it is useful to display information in windows called dialogs that “pop up” on the

screen to grab the user’s attention. Dialogs are typically used to display important messages to the user browsing the web page. The browser’s window object uses method alert to display an alert dialog. Method alert requires as its argument the string to be displayed.

• When a backslash is encountered in a string of characters, the next character is combined with the backslash to form an escape sequence. The escape sequence \\n is the newline character. It causes the cursor in the XHTML document to move to the beginning of the next line.

**_Section 6.4 Obtaining User Input with prompt Dialogs_** • Keywords are words with special meaning in JavaScript.

Summary **225**

• The keyword var is used to declare the names of variables. A variable is a location in the com- puter’s memory where a value can be stored for use by a program. All variables have a name, type and value, and should be declared with a var statement before they are used in a program.

• A variable name can be any valid identifier consisting of letters, digits, underscores (\_ ) and dollar signs ($) that does not begin with a digit and is not a reserved JavaScript keyword.

• Declarations end with a semicolon (;) and can be split over several lines, with each variable in the declaration separated by a comma (forming a comma-separated list of variable names). Sev- eral variables may be declared in one declaration or in multiple declarations.

• Programmers often indicate the purpose of a variable in the program by placing a JavaScript com- ment at the end of the variable’s declaration. A single-line comment begins with the characters / / and terminates at the end of the line. Comments do not cause the browser to perform any ac- tion when the script is interpreted; rather, comments are ignored by the JavaScript interpreter.

• Multiline comments begin with delimiter /\* and end with delimiter \*/. All text between the de- limiters of the comment is ignored by the interpreter.

• The window object’s prompt method displays a dialog into which the user can type a value. The first argument is a message (called a prompt) that directs the user to take a specific action. The optional second argument is the default string to display in the text field.

• A variable is assigned a value with an assignment statement, using the assignment operator, =. The = operator is called a binary operator, because it has two operands.

• The null keyword signifies that a variable has no value. Note that null is not a string literal, but rather a predefined term indicating the absence of value. Writing a null value to the document, however, displays the word “null”.

• Function parseInt converts its string argument to an integer.

• JavaScript has a version of the + operator for string concatenation that enables a string and a value of another data type (including another string) to be concatenated.

**_Section 6.5 Memory Concepts_** • Variable names correspond to locations in the computer’s memory. Every variable has a name, a

type and a value.

• When a value is placed in a memory location, the value replaces the previous value in that loca- tion. When a value is read out of a memory location, the process is nondestructive.

• JavaScript does not require variables to have a type before they can be used in a program. A vari- able in JavaScript can contain a value of any data type, and in many situations, JavaScript auto- matically converts between values of different types for you. For this reason, JavaScript is referred to as a loosely typed language.

• When a variable is declared in JavaScript, but is not given a value, it has an undefined value. At- tempting to use the value of such a variable is normally a logic error.

• When variables are declared, they are not assigned default values, unless specified otherwise by the programmer. To indicate that a variable does not contain a value, you can assign the value null to it.

**_Section 6.6 Arithmetic_** • The basic arithmetic operators (+, -, \*, /, and %) are binary operators, because they each operate

on two operands.

• Parentheses can be used to group expressions as in algebra.

• Operators in arithmetic expressions are applied in a precise sequence determined by the rules of operator precedence.

**226** Chapter 6 JavaScript: Introduction to Scripting

• When we say that operators are applied from left to right, we are referring to the associativity of the operators. Some operators associate from right to left.

**_Section 6.7 Decision Making: Equality and Relational Operators_** • JavaScript’s if statement allows a program to make a decision based on the truth or falsity of a

condition. If the condition is met (i.e., the condition is true), the statement in the body of the if statement is executed. If the condition is not met (i.e., the condition is false), the statement in the body of the if statement is not executed.

• Conditions in if statements can be formed by using the equality operators and relational opera- tors.

**Terminology** \\" double-quote escape sequence \\\\ backslash escape sequence \\' single quote escape sequence \\n newline escape sequence \\r carriage return escape sequence \\t tab escape sequence action addition operator (+) alert dialog alert method of the window object argument to a method arithmetic expression in straight-line form arithmetic operator assignment assignment operator (=) assignment statement associativity of operators attribute backslash (\\) escape character behavior binary operator case sensitive character string client of an object comma-separated list comment condition cursor data data type Date object decision making declaration dialog division operator (/) document object double quotation (") marks ECMAScript standard

empty statement equality operators error message escape sequence false function identifier if statement inline scripting integer interpreter JavaScript JavaScript interpreter keyword level of precedence literal location in the computer’s memory logic error loosely typed language meaningful variable name method mouse cursor multiline comment (/\* and \*/) multiplication operator (\*) name of a variable NaN (not a number) nested if statements new operator newline character (\\n) null

object operand operator associativity operator precedence parentheses parseInt function perform an action pre element

Self-Review Exercises **227**

program prompt prompt dialog prompt method of the window object redundant parentheses relational operator remainder after division remainder operator (%) rules of operator precedence runtime error script script element scripting language semicolon (;) statement terminator single quotation (') mark single-line comment (//) statement straight-line form string string concatenation

string concatenation operator (+) string literal string of characters subtraction operator (-) syntax error text field title bar of a dialog true type attribute of the <script> tag type of a variable undefined value of a variable var keyword variable violation of the language rules white-space character whole number window object write method of the document object writeln method of the document object

**Self-Review Exercises 6.1** Fill in the blanks in each of the following statements:

a) begins a single-line comment. b) Every statement should end with a(n) . c) The statement is used to make decisions. d) , , and are known as white space. e) The object displays alert dialogs and prompt dialogs. f) are words that are reserved for use by JavaScript. g) Methods and of the object write XHTML text into an

XHTML document.

**6.2** State whether each of the following is _true_ or _false_. If _false_, explain why. a) Comments cause the computer to print the text after the // on the screen when the pro-

gram is executed. b) JavaScript considers the variables number and NuMbEr to be identical. c) The remainder operator (%) can be used only with numeric operands. d) The arithmetic operators \*, /, %, + and - all have the same level of precedence. e) Method parseInt converts an integer to a string.

**6.3** Write JavaScript statements to accomplish each of the following tasks: a) Declare variables c, thisIsAVariable, q76354 and number. b) Display a dialog asking the user to enter an integer. Show a default value of 0 in the text

field. c) Convert a string to an integer, and store the converted value in variable age. Assume

that the string is stored in stringValue. d) If the variable number is not equal to 7, display "The variable number is not equal to

7" in a message dialog. e) Output a line of XHTML text that will display the message "This is a JavaScript pro-

gram" on one line in the XHTML document.

**228** Chapter 6 JavaScript: Introduction to Scripting

f) Output a line of XHTML text that will display the message "This is a JavaScript pro- gram" on two lines in the XHTML document. Use only one statement.

**6.4** Identify and correct the errors in each of the following statements: a) if ( c < 7 );

window.alert( "c is less than 7" );

b) if ( c => 7 )

window.alert( "c is equal to or greater than 7" );

**6.5** Write a statement (or comment) to accomplish each of the following tasks: a) State that a program will calculate the product of three integers \[_Hint:_ Use text that

helps to document a program.\] b) Declare the variables x, y, z and result. c) Declare the variables xVal, yVal and zVal. d) Prompt the user to enter the first value, read the value from the user and store it in the

variable xVal. e) Prompt the user to enter the second value, read the value from the user and store it in

the variable yVal. f) Prompt the user to enter the third value, read the value from the user and store it in the

variable zVal. g) Convert xVal to an integer, and store the result in the variable x. h) Convert yVal to an integer, and store the result in the variable y. i) Convert zVal to an integer, and store the result in the variable z. j) Compute the product of the three integers contained in variables x, y and z, and assign

the result to the variable result. k) Write a line of XHTML text containing the string "The product is " followed by the

value of the variable result.

**6.6** Using the statements you wrote in Exercise 6.5, write a complete program that calculates and prints the product of three integers.

**Answers to Self-Review Exercises 6.1** a) //. b) Semicolon (;). c) if. d) Space characters, newline characters and tab characters. e) window. f) Keywords. g) write, writeln, document.

**6.2** a) False. Comments do not cause any action to be performed when the program is exe- cuted. They are used to document programs and improve their readability. b) False. JavaScript is case sensitive, so these variables are distinct. c) True. d) False. The operators \*, / and % are on the same level of precedence, and the operators + and - are on a lower level of precedence. e) False. Function parseInt converts a string to an integer value.

**6.3** a) var c, thisIsAVariable, q76354, number;

b) value = window.prompt( "Enter an integer", "0" );

c) var age = parseInt( stringValue );

d) if ( number != 7 )

window.alert( "The variable number is not equal to 7" );

e) document.writeln( "This is a JavaScript program" );

f) document.writeln( "This is a<br />JavaScript program" );

**6.4** a) Error: There should not be a semicolon after the right parenthesis of the condition in the if statement. Correction: Remove the semicolon after the right parenthesis. \[_Note:_ The result of this error is that the output statement is executed whether or not the condition in the if

Answers to Self-Review Exercises **229**

statement is true. The semicolon after the right parenthesis is considered an empty state- ment—a statement that does nothing.\]

b) Error: The relational operator => is incorrect. Correction: Change => to >=.

**6.5** a) // Calculate the product of three integers

b) var x, y, z, result;

c) var xVal, yVal, zVal;

d) xVal = window.prompt( "Enter first integer:", "0" );

e) yVal = window.prompt( "Enter second integer:", "0" );

f) zVal = window.prompt( "Enter third integer:", "0" );

g) x = parseInt( xVal );

h) y = parseInt( yVal );

i) z = parseInt( zVal );

j) result = x \* y \* z;

k) document.writeln( "<h1>The product is " + result + "</h1>" );

**6.6** The program is as follows:

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Exercise 6.6: product.html --> **6** <html xmlns = "http://www.w3.org/1999/xhtml"> **7** <head> **8** <title>Product of Three Integers</title> **9** <script type = "text/javascript">

**10** <!-- **11** // Calculate the product of three integers **12** var x, y, z, result; **13** var xVal, yVal, zVal; **14 15** xVal = window.prompt( "Enter first integer:", "0" ); **16** yVal = window.prompt( "Enter second integer:", "0" ); **17** zVal = window.prompt( "Enter third integer:", "0" ); **18 19** x = parseInt( xVal ); **20** y = parseInt( yVal ); **21** z = parseInt( zVal ); **22 23** result = x \* y \* z; **24** document.writeln( "<h1>The product is " + **25** result + "<h1>" ); **26** // --> **27** </script> **28** </head><body></body> **29** </html>

**230** Chapter 6 JavaScript: Introduction to Scripting

**Exercises 6.7** Fill in the blanks in each of the following statements:

a) are used to document a program and improve its readability. b) A dialog capable of receiving input from the user is displayed with method of

object . c) A JavaScript statement that makes a decision is the statement. d) Calculations are normally performed by operators. e) A dialog capable of showing a message to the user is displayed with method

of object .

**6.8** Write JavaScript statements that accomplish each of the following tasks: a) Display the message "Enter two numbers" using the window object. b) Assign the product of variables b and c to variable a. c) State that a program performs a sample payroll calculation.

**6.9** State whether each of the following is _true_ or _false_. If _false_, explain why. a) JavaScript operators are evaluated from left to right. b) The following are all valid variable names: \_under_bar\_, m928134, t5, j7, her_sales$,

his\_$account\_total, a, b$, c, z, z2. c) A valid JavaScript arithmetic expression with no parentheses is evaluated from left to

right. d) The following are all invalid variable names: 3g, 87, 67h2, h22, 2h.

Exercises **231**

**6.10** Fill in the blanks in each of the following statements: a) What arithmetic operations have the same precedence as multiplication? . b) When parentheses are nested, which set of parentheses is evaluated first in an arithmetic

expression? . c) A location in the computer’s memory that may contain different values at various times

throughout the execution of a program is called a .

**6.11** What displays in the message dialog when each of the given JavaScript statements is per- formed? Assume that x = 2 and y = 3.

a) window.alert( "x = " + x );

b) window.alert( "The value of x + x is " + ( x + x ) );

c) window.alert( "x =" );

d) window.alert( ( x + y ) + " = " + ( y + x ) );

**6.12** Which of the following JavaScript statements contain variables whose values are destroyed (i.e., changed or replaced)?

a) p = i + j + k + 7;

b) window.alert( "variables whose values are destroyed" );

c) window.alert( "a = 5" );

d) stringVal = window.prompt( "Enter string:" );

**6.13** Given _y = ax_3 _\+\_ 7, which of the following are correct JavaScript statements for this equation? a) y = a \* x \* x \* x + 7;

b) y = a \* x \* x \* (x + 7);

c) y = (a \* x) \* x \* (x + 7);

d) y = (a \* x) \* x \* x + 7;

e) y = a \* (x \* x \* x) + 7;

f) y = a \* x \* (x \* x + 7);

**6.14** State the order of evaluation of the operators in each of the following JavaScript statements, and show the value of x after each statement is performed.

a) x = 7 + 3 \* 6 / 2 - 1;

b) x = 2 % 2 + 2 \* 2 - 2 / 2;

c) x = ( 3 \* 9 \* ( 3 + ( 9 \* 3 / ( 3 ) ) ) );

**6.15** Write a script that displays the numbers 1 to 4 on the same line, with each pair of adjacent numbers separated by one space. Write the program using the following methods:

a) Using one document.writeln statement. b) Using four document.write statements.

**6.16** Write a script that asks the user to enter two numbers, obtains the two numbers from the user and outputs text that displays the sum, product, difference and quotient of the two numbers. Use the techniques shown in Fig. 6.9.

**6.17** Write a script that asks the user to enter two integers, obtains the numbers from the user and outputs text that displays the larger number followed by the words “is larger” in an alert dia- log. If the numbers are equal, output XHTML text that displays the message “These numbers are

equal.” Use the techniques shown in Fig. 6.17.

**6.18** Write a script that takes three integers from the user and displays the sum, average, product, smallest and largest of the numbers in an alert dialog.

**6.19** Write a script that gets from the user the radius of a circle and outputs XHTML text that displays the circle’s diameter, circumference and area. Use the constant value 3.14159 for π. Use the GUI techniques shown in Fig. 6.9. \[_Note:_ You may also use the predefined constant Math.PI for the value of π. This constant is more precise than the value 3.14159. The Math object is defined by Java-

**232** Chapter 6 JavaScript: Introduction to Scripting

Script and provides many common mathematical capabilities.\] Use the following formulas (_r_ is the radius): _diameter =_ 2*r*, _circumference =_ 2π*r*, _area =_ π*r2*.

**6.20** Write a script that outputs XHTML text that displays in the XHTML document a rectan- gle, an oval, an arrow and a diamond using asterisks (\*), as follows \[_Note:_ Use the <pre> and </pre>

tags to specify that the asterisks should be displayed using a fixed-width font\]:

\*\*\*\*\*\*\*\*\* \*\*\* \* \* \* \* \* \* \*\*\* \* \* \* \* \* \* \*\*\*\*\* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*\*\*\*\*\*\*\*\* \*\*\* \* \*

**6.21** Modify the program you created in Exercise 6.20 by removing the <pre> and </pre> tags. Does the program display the shapes exactly as in Exercise 6.20?

**6.22** What does the following code print?

document.writeln( "\*\\n\*\*\\n\*\*\*\\n\*\*\*\*\\n\*\*\*\*\*" );

**6.23** What does the following code print?

document.writeln( "\*" ); document.writeln( "\*\*\*" ); document.writeln( "\*\*\*\*\*" ); document.writeln( "\*\*\*\*" ); document.writeln( "\*\*" );

**6.24** What does the following code print?

document.write( "\*<br />" ); document.write( "\*\*\*<br />" ); document.write( "\*\*\*\*\*<br />" ); document.write( "\*\*\*\*<br />" ); document.writeln( "\*\*" );

**6.25** What does the following code print?

document.write( "\*<br />" ); document.writeln( "\*\*\*" ); document.writeln( "\*\*\*\*\*" ); document.write( "\*\*\*\*<br />" ); document.writeln( "\*\*" );

**6.26** Write a script that reads five integers and determines and outputs XHTML text that dis- plays the largest and smallest integers in the group. Use only the programming techniques you learned in this chapter.

**6.27** Write a script that reads an integer and determines and outputs XHTML text that displays whether it is odd or even. \[_Hint:_ Use the remainder operator. An even number is a multiple of 2. Any multiple of 2 leaves a remainder of zero when divided by 2.\]

**6.28** Write a script that reads in two integers and determines and outputs XHTML text that dis- plays whether the first is a multiple of the second. \[_Hint_: Use the remainder operator.\]

**6.29** Write a script that outputs XHTML text that displays in the XHTML document a check- erboard pattern, as follows:

Exercises **233**

\* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*

\* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*

\* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*

\* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*

**6.30** Write a script that inputs five numbers and determines and outputs XHTML text that dis- plays the number of negative numbers input, the number of positive numbers input and the number of zeros input.

**6.31** Write a script that calculates the squares and cubes of the numbers from 0 to 10 and outputs XHTML text that displays the resulting values in an XHTML table format, as follows:

number square cube 0 0 0 1 1 1 2 4 8 3 9 27 4 16 64 5 25 125 6 36 216 7 49 343 8 64 512 9 81 729 10 100 1000

\[_Note:_ This program does not require any input from the user.\]

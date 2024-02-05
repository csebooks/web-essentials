---
title: "JavaScript: Events"
weight: 10
---

# O B J E C T I V E S

In this chapter you will learn:

■ The concepts of events, event handlers and event bubbling.

■ To create and register event handlers that respond to mouse and keyboard events.

■ To use the event object to get information about an event.

■ To recognize and respond to many common events.

## Introduction

We’ve seen that XHTML pages can be controlled via scripting, and we’ve already used a few events to trigger scripts, such as the onclick and onsubmit events. This chapter goes into more detail on **JavaScript events**, which allow scripts to respond to user interactions and modify the page accordingly. Events allow scripts to respond to a user who is moving the mouse, entering form data or pressing keys. Events and event handling help make web applications more responsive, dynamic and interactive.

In this chapter, we discuss how to set up functions to react when an event **fires** (occurs). We give examples of event handling for nine common events, including mouse events and form-processing events. A the end of the chapter, we provide a table of the events covered in this chapter and other useful events.

## Registering Event Handlers

Functions that handle events are called **event handlers**. Assigning an event handler to an event on a DOM node is called **registering an event handler**. Previously, we have regis- tered event handlers using the **inline model**, treating events as attributes of XHTML ele- ments (e.g., <p onclick = "myfunction()">). Another model, known as the **traditional model**, for registering event handlers is demonstrated alongside the inline model in Fig. 13.1.

In the earliest event-capable browsers, the inline model was the only way to handle events. Later, Netscape developed the traditional model and Internet Explorer adopted it. Since then, both Netscape and Microsoft have developed separate (incompatible)

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

```

**Fig. 13.1** | Event registration models. (Part 1 of 3.)

**5** <!-- Fig. 13.1: registering.html -->
**6** <!-- Event registration models. -->
**7** <html xmlns = "http://www.w3.org/1999/xhtml">
**8** <head>
**9** <title>Event Registration Models</title>
**10** <style type = "text/css">
**11** div { padding: 5px;
**12** margin: 10px;
**13** border: 3px solid #0000BB;
**14** width: 12em }
**15** </style>
**16** <script type = "text/javascript">
**17** <!--
**18** // handle the onclick event regardless of how it was registered
**19** function handleEvent()
**20** {
**21** alert( "The event was successfully handled." );
**22** } // end function handleEvent
**23**
**24** // register the handler using the traditional model
**25** function registerHandler()
**26** {
**27** var traditional = document.getElementById( "traditional" );
**28** traditional.onclick = handleEvent;
**29** } // end function registerHandler
**30** // -->
**31** </script>
**32** </head>
**33** <body onload = "registerHandler()">
**34** <!-- The event handler is registered inline -->
**35** <div id = "inline" onclick = "handleEvent()" >
**36** Inline registration model</div>
**37**
**38** <!-- The event handler is registered by function registerHandler --> .
**39** <div id = "traditional">Traditional registration model</div>
**40** </body>
**41** </html>

**Fig. 13.1** | Event registration models. (Part 2 of 3.)

**Fig. 13.1** | Event registration models. (Part 3 of 3.)

advanced event models with more functionality than either the inline or the traditional model. Netscape’s advanced model was adapted by the W3C to create a DOM Events Specification. Most browsers support the W3C model, but Internet Explorer 7 does not. This means that to create cross-browser websites, we are mostly limited to the traditional and inline event models. While the advanced models provide more convenience and func- tionality, most of the features can be implemented with the traditional model.

Line 35 assigns "handleEvent()" to the onclick attribute of the div in lines 35–36. This is the inline model for event registration we’ve seen in previous examples. The div in line 39 is assigned an event handler using the traditional model. When the body element (lines 33–40) loads, the registerHandler function is called.

Function registerHandler (lines 25–29) uses JavaScript to register the function handleEvent as the event handler for the onclick event of the div with the id "tradi-

tional". Line 27 gets the div, and line 28 assigns the function handleEvent to the div’s onclick property.

Notice that in line 28, we do not put handleEvent in quotes or include parentheses at the end of the function name, as we do in the inline model in line 35. In the inline model, the value of the XHTML attribute is a _JavaScript statement_ to execute when the event occurs. The value of the onclick property of a DOM node is not an executable state- ment, but the name of a _function_ to be called when the event occurs. Recall that JavaScript functions can be treated as data (i.e., passed into methods, assigned to variables, etc.).

**Common Programming Error 13.1**

> _Putting quotes around the function name when registering it using the inline model would assign a string to the onclick property of the node—a string cannot be called._ 13.1

**Common Programming Error 13.2**

> _Putting parentheses after the function name when registering it using the inline model would call the function immediately and assign its return value to the onclick property._ 13.2

Once the event handler is registered in line 28, the div in line 39 has the same behavior as the div in lines 35–36, because handleEvent (lines 19–22) is set to handle the onclick event for both divs. When either div is clicked, an alert will display "The event was successfully handled."

The traditional model allows us to register event handlers in JavaScript code. This has important implications for what we can do with JavaScript events. For example, tradi- tional event-handler registration allows us to assign event handlers to many elements quickly and easily using repetition statements, instead of adding an inline event handler to each XHTML element. In the remaining examples in this chapter, we use both the inline and traditional registration models depending on which is more convenient.

## Event onload

The onload event fires whenever an element finishes loading successfully (i.e., all its chil- dren are loaded). Frequently, this event is used in the body element to initiate a script after the page loads in the client’s browser. Figure 13.2 uses the onload event for this purpose. The script called by the onload event updates a timer that indicates how many seconds have elapsed since the document was loaded.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 13.2: onload.html -->
<!-- Demonstrating the onload event. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>onload Event</title>
<script type = "text/javascript">
<!--
var seconds = 0;

// called when the page loads to begin the timer
function startTimer()
{
```

**Fig. 13.2** | Demonstrating the onload event. (Part 1 of 2.)

**17** // 1000 milliseconds = 1 second
**18** window.setInterval( "updateTime()", 1000 );
**19** } // end function startTimer
**20**
**21** // called every 1000 ms to update the timer
**22** function updateTime()
**23** {
**24** ++seconds;
**25** document.getElementById( "soFar" ).innerHTML = seconds;
**26** } // end function updateTime
**27** // -->
**28** </script>
**29** </head>
**30** <body onload = "startTimer()">
**31** <p>Seconds you have spent viewing this page so far:
**32** <strong id = "soFar">0</strong></p>
**33** </body>
**34** </html>

**Fig. 13.2** | Demonstrating the onload event. (Part 2 of 2.)

Our use of the onload event occurs in line 30. After the body section loads, the browser triggers the onload event. This calls function startTimer (lines 15–19), which in turn uses method window.setInterval to specify that function updateTime (lines 22–26) should be called every 1000 milliseconds. The updateTime function increments variable seconds and updates the counter on the page.

Note that we could not have created this program without the onload event, because elements in the XHTML page cannot be accessed until the page has loaded. If a script in the head attempts to get a DOM node for an XHTML element in the body, getElement- ById returns null because the body has not yet loaded. Other uses of the onload event include opening a pop-up window once a page has loaded and triggering a script when an image or Java applet loads.

**Common Programming Error 13.3**

> _Trying to get an element in a page before the page has loaded is a common error. Avoid this by putting your script in a function using the onload event to call the function._ 13.3

## Event onmousemove, the event Object and this

This section introduces the onmousemove event, which fires repeatedly whenever the user moves the mouse over the web page. We also discuss the event object and the keyword this, which permit more advanced event-handling capabilities. Figure 13.3 uses on mousemove and this to create a simple drawing program that allows the user to draw inside a box in red or blue by holding down the _Shift_ or _Ctrl_ keys.

The XHTML body has a table with a tbody containing one row that gives the user instructions on how to use the program. The body’s onload attribute (line 61) calls func- tion createCanvas, which initializes the program by filling in the table.

The createCanvas function (lines 23–41) fills in the table with a grid of cells. The CSS rule in lines 14–15 sets the width and height of every td element to 4px. Line 11

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 13.3: draw.html -->
<!-- A simple drawing program. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Simple Drawing Program</title>
<style type = "text/css">
#canvas { width: 400px;
border: 1px solid #999999;
border-collapse: collapse }
td { width: 4px;
height: 4px }
th.key { font-family: arial, helvetica, sans-serif;
font-size: 12px;
border-bottom: 1px solid #999999 }
</style>
<script type = "text/javascript">
<!--
//initialization function to insert cells into the table
function createCanvas ()
{
var side = 100;
var tbody = document.getElementById( "tablebody" );

for ( var i = 0; i < side; i++ )
{
var row = document.createElement( "tr" );

for ( var j = 0; j < side; j++ )
{
var cell = document.createElement( "td" );
cell.onmousemove = processMouseMove;
row.appendChild( cell );
} // end for

tbody.appendChild( row );
} // end for
} // end function createCanvas

```

**Fig. 13.3** | Simple drawing program. (Part 1 of 3.)

```bash
// processes the onmousemove event
function processMouseMove( e )
{
// get the event object from IE
if ( !e )
var e = window.event;

// turn the cell blue if the Ctrl key is pressed
if ( e.ctrlKey )
this.style.backgroundColor = "blue";

// turn the cell red if the Shift key is pressed
if ( e.shiftKey )
this.style.backgroundColor = "red";
} // end function processMouseMove
// -->
</script>
</head>
<body onload = "createCanvas()">
<table id = "canvas" class = "canvas"><tbody id = "tablebody">
<tr><th class = "key" colspan = "100">Hold <tt>ctrl</tt>
to draw blue. Hold <tt>shift</tt> to draw red.</th></tr>
</tbody></table>
</body>
</html>
```

**Fig. 13.3** | Simple drawing program. (Part 2 of 3.)

**Fig. 13.3** | Simple drawing program. (Part 3 of 3.)

dictates that the table is 400px wide. Line 13 uses the border-collapse CSS property to eliminate space between the table cells.

Line 25 defines variable side, which determines the number of cells in each row and the number of rows created by the nested for statements in lines 28–40. We set side to 100 in order to fill the table with 10,000 4px cells. Line 26 stores the tbody element so that we can append rows to it as they are generated.

**Common Programming Error 13.4**

> _Although you can omit the tbody element in an XHTML table, without it you cannot append tr elements as children of a table using JavaScript. While Firefox treats appended rows as mem- bers of the table body, Internet Explorer will not render any table cells that are dynamically add- ed to a table outside a thead, tbody or tfoot element._ 13.4

The nested for statements in lines 28–40 fill the table with a 100 × 100 grid of cells. The outer loop creates each table row, while the inner loop creates each cell. The inner loop uses the createElement method to create a table cell, assigns function process-

MouseMove as the event handler for the cell’s onmousemove event and appends the cell as a child of the row. The **onmousemove event** of an element fires whenever the user moves the mouse over that element.

At this point, the program is initialized and simply calls processMouseMove whenever the mouse moves over any table cell. The function processMouseMove (lines 44–57) colors the cell the mouse moves over, depending on the key that is pressed when the event occurs. Lines 44–48 get the **event object**, which stores information about the event that called the event-handling function.

Internet Explorer and Firefox do not implement the same event models, so we need to account for some differences in how the event object can be handled and used. Firefox and other W3C-compliant browsers (e.g., Safari, Opera) pass the event object as an argu- ment to the event-handling function. Internet Explorer, on the other hand, stores the event object in the event property of the window object. To get the event object regardless of the browser, we use a two-step process. Function processMouseMove takes the param- eter e in line 44 to get the event object from Firefox. Then, if e is undefined (i.e., if the client is Internet Explorer), we assign the object in window.event to e in line 48.

In addition to providing different ways to access the event object, Firefox and Internet Explorer also implement different functionality in the event object itself. How- ever, there are several event properties that both browsers implement with the same name, and some that both browsers implement with different names. In this book, we use prop- erties that are implemented in both event models, or we write our code to use the correct property depending on the browser—all of our code runs properly in IE7 and Firefox 2.

Once e contains the event object, we can use it to get information about the event. Lines 51–56 do the actual drawing. The event object’s **ctrlKey property** contains a boolean which reflects whether the _Ctrl_ key was pressed during the event. If ctrlKey is true, line 52 executes, changing the color of a table cell.

To determine which table cell to color, we introduce the **this keyword**. The meaning of this depends on its context. In an event-handling function, this refers to the DOM object on which the event occurred. Our function uses this to refer to the table cell over which the mouse moved. The this keyword allows us to use one event handler to apply a change to one of many DOM elements, depending on which one received the event.

Lines 51–52 change the background color of this table cell to blue if the _Ctrl_ key is pressed during the event. Similarly, lines 55–56 color the cell red if the _Shift_ key is pressed. To determine this, we use the **shiftKey property** of the event object. This simple func- tion allows the user to draw inside the table on the page in red and blue. You’ll add more functionality to this example in the exercises at the end of this chapter.

This example demonstrated the ctrlKey and shiftKey properties of the event object. Figure 13.4 provides a table of some important cross-browser properties of the event

object. This section introduced the event onmousemove and the keyword this. We also dis-

cussed more advanced event handling using the event object to get information about the event. The next section continues our introduction of events with the onmouseover and onmouseout events.

|      Property       |                                                                             Description                                                                             |
| :-----------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       altKey        |                                                This value is true if the _Alt_ key was pressed when the event fired.                                                |
|    cancelBubble     |                               Set to true to prevent the event from bubbling. Defaults to false. (See Section 14.9, Event Bubbling.)                                |
| clientX and clientY | The coordinates of the mouse cursor inside the client area (i.e., the active area where the web page is displayed, excluding scrollbars, navigation buttons, etc.). |
|       ctrlKey       |                                               This value is true if the _Ctrl_ key was pressed when the event fired.                                                |
|       keyCode       |                      The ASCII code of the key pressed in a keyboard event. See Appen- dix D for more information on the ASCII character set.                       |
| screenX and screenY |                                               The coordinates of the mouse cursor on the screen coordinate sys- tem.                                                |
|      shiftKey       |                                               This value is true if the _Shift_ key was pressed when the event fired.                                               |
|        type         |                                                     The name of the event that fired, without the prefix "on".                                                      |

**Fig. 13.4** | Some event object properties.

## Rollovers with onmouseover and onmouseout

Two more events fired by mouse movements are onmouseover and onmouseout. When the mouse cursor moves into an element, an **onmouseover event** occurs for that element. When the cursor leaves the element, an **onmouseout event** occurs. Figure 13.5 uses these events to achieve a **rollover effect** that updates text when the mouse cursor moves over it. We also introduce a technique for creating rollover images.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

```

**Fig. 13.5** | Events onmouseover and onmouseout. (Part 1 of 5.)

```bash
<!-- Fig. 13.5: onmouseoverout.html -->
<!-- Events onmouseover and onmouseout. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Events onmouseover and onmouseout</title>
<style type = "text/css">
body { background-color: wheat }
table { border-style: groove;
text-align: center;
font-family: monospace;
font-weight: bold }
td { width: 6em }
</style>
<script type = "text/javascript">
<!--
image1 = new Image();
image1.src = "heading1.gif";
image2 = new Image();
image2.src = "heading2.gif";

function mouseOver( e )
{
if ( !e )
var e = window.event;

var target = getTarget( e );

// swap the image when the mouse moves over it
if ( target.id == "heading" )
{
target.src = image2.src;
return;
} // end if

// if an element's id is defined, assign the id to its color
// to turn hex code's text the corresponding color
if ( target.id )
target.style.color = target.id;
} // end function mouseOver

function mouseOut( e )
{
if ( !e )
var e = window.event;

var target = getTarget( e );

// put the original image back when the mouse moves away
if ( target.id == "heading" )
{
target.src = image1.src;
return;
} // end if
```

**Fig. 13.5** | Events onmouseover and onmouseout. (Part 2 of 5.)

```bash

// if an element's id is defined, assign id to innerHTML
// to display the color name
if ( target.id )
target.innerHTML = target.id;
} // end function mouseOut

// return either e.srcElement or e.target, whichever exists
function getTarget( e )
{
if ( e.srcElement )
return e.srcElement;
else
return e.target;
} // end function getTarget

document.onmouseover = mouseOver;
document.onmouseout = mouseOut;
// -->
</script>
</head>
<body>
<img src = "heading1.gif" id = "heading" alt = "Heading Image" />
<p>Can you tell a color from its hexadecimal RGB code
value? Look at the hex code, guess its color. To see
what color it corresponds to, move the mouse over the
hex code. Moving the mouse out of the hex code’s table
cell will display the color name.</p>
<table>
<tr>
<td id = "Black">#000000</td>
<td id = "Blue">#0000FF</td>
<td id = "Magenta">#FF00FF</td>
<td id = "Gray">#808080</td>
</tr> **93** <tr>
<td id = "Green">#008000</td>
<td id = "Lime">#00FF00</td>
<td id = "Maroon">#800000</td>
<td id = "Navy">#000080</td>
</tr>
<tr>
<td id = "Olive">#808000</td>
<td id = "Purple">#800080</td>
<td id = "Red">#FF0000</td>
<td id = "Silver">#C0C0C0</td>
</tr> **105** <tr>
<td id = "Cyan">#00FFFF</td>
<td id = "Teal">#008080</td>
<td id = "Yellow">#FFFF00</td>
<td id = "White">#FFFFFF</td>
</tr>
```

**Fig. 13.5** | Events onmouseover and onmouseout. (Part 3 of 5.)

```bash
</table>
</body>
</html>
```

**Fig. 13.5** | Events onmouseover and onmouseout. (Part 4 of 5.)

**Fig. 13.5** | Events onmouseover and onmouseout. (Part 5 of 5.)

To create a rollover effect for the image in the heading, lines 20–23 create two new JavaScript Image objects—image1 and image2. Image image2 displays when the mouse hovers over the image. Image image1 displays when the mouse is outside the image. The script sets the src properties of each Image in lines 21 and 23, respectively. Creating Image objects preloads the images (i.e., loads the images in advance), so the browser does not need to download the rollover image the first time the script displays the image. If the image is large or the connection is slow, downloading would cause a noticeable delay in the image update.

**Performance Tip 13.1**

> _Preloading images used in rollover effects prevents a delay the first time an image is displayed._ 13.1

Functions mouseOver and mouseOut are set to process the onmouseover and onmouseout events, respectively, in lines 74–75. Both functions begin (lines 25–28 and 45–48) by getting the event object and using function getTarget to find the element that received the action. Because of browser event model differences, we need getTarget

(defined in lines 66–72) to return the DOM node targeted by the action. In Internet Explorer, this node is stored in the event object’s **srcElement property**. In Firefox, it is stored in the event object’s **target property**. Lines 68–71 return the node using the cor- rect property to hide the browser differences from the rest of our program. We must use function getTarget instead of this because we do not define an event handler for each specific element in the document. In this case, using this would return the entire docu- ment. In both mouseOver and mouseOut, we assign the return value of getTarget to vari- able target (lines 30 and 50).

Lines 33–37 in the mouseOver function handle the onmouseover event for the heading image by setting its src attribute (target.src) to the src property of the appropriate Image object (image2.src). The same task occurs with image1 in the mouseOut function (lines 53–57).

The script handles the onmouseover event for the table cells in lines 41–42. This code tests whether an id is specified, which is true only for our hex code table cells and the heading image in this example. If the element receiving the action has an id, the code changes the color of the element to match the color name stored in the id. As you can see in the code for the table (lines 86–111), each td element containing a color code has an id attribute set to one of the 16 basic XHTML colors. Lines 61–62 handle the onmouseout event by changing the text in the table cell the mouse cursor just left to match the color that it represents.

## Form Processing with onfocus and onblur

The onfocus and onblur events are particularly useful when dealing with form elements that allow user input (Fig. 13.6). The onfocus event fires when an element gains focus (i.e., when the user clicks a form field or uses the _Tab_ key to move between form elements), and onblur fires when an element loses focus, which occurs when another control gains the focus. In lines 31–32, the script changes the text inside the div below the form (line 58) based on the messageNum passed to function helpText (lines 29–33). Each of the ele- ments of the form, such as the name input in lines 40–41, passes a different value to the helpText function when it gains focus (and its onfocus event fires). These values are used as indices for helpArray, which is declared and initialized in lines 17–27 and stores help messages. When elements lose focus, they all pass the value 6 to helpText to clear the tip div (note that the empty string "" is stored in the last element of the array).

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 13.6: onfocusblur.html -->
<!-- Demonstrating the onfocus and onblur events. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>A Form Using onfocus and onblur</title>
<style type = "text/css">
.tip { font-family: sans-serif;
color: blue;
font-size: 12px }
</style>
<script type = "text/javascript">
<!--
var helpArray =
[ "Enter your name in this input box.", // element 0
"Enter your e-mail address in this input box, " +
"in the format user@domain.", // element 1
"Check this box if you liked our site.", // element 2
"In this box, enter any comments you would " +
"like us to read.", // element 3
"This button submits the form to the " +
"server-side script.", // element 4
"This button clears the form.", // element 5
"" ]; // element 6

function helpText( messageNum )
{
document.getElementById( "tip" ).innerHTML =
helpArray[ messageNum ];
} // end function helpText
// -->
</script>
</head>
<body>
<form id = "myForm" action = "">
<div>
Name: <input type = "text" name = "name"
onfocus = "helpText(0)" onblur = "helpText(6)" /><br />
E-mail: <input type = "text" name = "e-mail"
onfocus = "helpText(1)" onblur = "helpText(6)" /><br />
Click here if you like this site
<input type = "checkbox" name = "like" onfocus =
"helpText(2)" onblur = "helpText(6)" /><br /><hr />

Any comments?<br />
<textarea name = "comments" rows = "5" cols = "45"
onfocus = "helpText(3)" onblur = "helpText(6)"></textarea>
<br />
<input type = "submit" value = "Submit" onfocus =
"helpText(4)" onblur = "helpText(6)" />
```

**Fig. 13.6** | Demonstrating the onfocus and onblur events. (Part 1 of 2.)

```bash
<input type = "reset" value = "Reset" onfocus =
"helpText(5)" onblur = "helpText(6)" />
</div>
</form>
<div id = "tip" class = "tip"></div>
</body>
</html>
```

**Fig. 13.6** | Demonstrating the onfocus and onblur events. (Part 2 of 2.)

## More Form Processing with onsubmit and onreset

Two more useful events for processing forms are onsubmit and onreset. These events fire when a form is submitted or reset, respectively (Fig. 13.7). Function registerEvents (lines 35–46) registers the event handlers for the form after the body has loaded.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 13.7: onsubmitreset.html -->
<!-- Demonstrating the onsubmit and onreset events. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>A Form Using onsubmit and onreset</title>
<style type = "text/css">
.tip { font-family: sans-serif;
color: blue;
font-size: 12px }
</style>
<script type = "text/javascript">
<!--
var helpArray =
[ "Enter your name in this input box.",
"Enter your e-mail address in this input box, " +
"in the format user@domain.",
"Check this box if you liked our site.",
"In this box, enter any comments you would " +
"like us to read.",
"This button submits the form to the " +
"server-side script.",
"This button clears the form.",
"" ];

function helpText( messageNum )
{
document.getElementById( "tip" ).innerHTML =
helpArray[ messageNum ];
} // end function helpText

function registerEvents()
{

document.getElementById( "myForm" ).onsubmit = function()
{
return confirm( "Are you sure you want to submit?" );
} // end anonymous function
document.getElementById( "myForm" ).onreset = function()
{
return confirm( "Are you sure you want to reset?" );
} // end anonymous function
} // end function registerEvents
```

**Fig. 13.7** | Demonstrating the onsubmit and onreset events. (Part 1 of 2.)

```bash
// -->
</script>
</head>
<body onload = "registerEvents()">
<form id = "myForm" action = "">
<div>
Name: <input type = "text" name = "name"
onfocus = "helpText(0)" onblur = "helpText(6)" /><br />
E-mail: <input type = "text" name = "e-mail"
onfocus = "helpText(1)" onblur = "helpText(6)" /><br />
Click here if you like this site
<input type = "checkbox" name = "like" onfocus =
"helpText(2)" onblur = "helpText(6)" /><br /><hr />

Any comments?<br />
<textarea name = "comments" rows = "5" cols = "45"
onfocus = "helpText(3)" onblur = "helpText(6)"></textarea>
<br />
<input type = "submit" value = "Submit" onfocus =
"helpText(4)" onblur = "helpText(6)" />
<input type = "reset" value = "Reset" onfocus =
"helpText(5)" onblur = "helpText(6)" />
</div>
</form>
<div id = "tip" class = "tip"></div>
</body>
</html>
```

**Fig. 13.7** | Demonstrating the onsubmit and onreset events. (Part 2 of 2.)

Lines 37–40 and 42–45 introduce several new concepts. Line 37 gets the form ele- ment ("myForm", lines 51–70), then lines 37–40 assign an **anonymous function** to its onsubmit property. An anonymous function is defined with no name—it is created in nearly the same way as any other function, but with no identifier after the keyword func-

tion. This notation is useful when creating a function for the sole purpose of assigning it to an event handler. We never call the function ourselves, so we don’t need to give it a name, and it’s more concise to create the function and register it as an event handler at the same time.

The anonymous function (lines 37–40) assigned to the onsubmit property of myForm executes in response to the user submitting the form (i.e., clicking the **Submit** button or pressing the _Enter_ key). Line 39 introduces the **confirm method** of the window object. As with alert, we do not need to prefix the call with the object name window and the dot (.) operator. The confirm dialog asks the users a question, presenting them with an **OK** button and a **Cancel** button. If the user clicks **OK**, confirm returns true; otherwise, confirm returns false.

Our event handlers for the form’s onsubmit and onreset events simply return the value of the confirm dialog, which asks the users if they are sure they want to submit or reset (lines 39 and 44, respectively). By returning either true or false, the event handlers dictate whether the default action for the event—in this case submitting or resetting the form—is taken. (Recall that we also returned false from some event-handling functions to prevent forms from submitting in Chapter 12.) Other default actions, such as following a hyperlink, can be prevented by returning false from an onclick event handler on the link. If an event handler returns true or does not return a value, the default action is taken once the event handler finishes executing.

## Event Bubbling

**Event bubbling** is the process by which events fired in child elements “bubble” up to their parent elements. When an event is fired on an element, it is first delivered to the element’s event handler (if any), then to the parent element’s event handler (if any). This might re- sult in event handling that was not intended. If you intend to handle an event in a child element alone, you should cancel the bubbling of the event in the child element’s event- handling code by using the **cancelBubble property** of the event object, as shown in Fig. 13.8.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 13.8: bubbling.html -->
<!-- Canceling event bubbling. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Event Bubbling</title>
<script type = "text/javascript">
<!--
```

**Fig. 13.8** | Canceling event bubbling. (Part 1 of 3.)

```bash
function documentClick()
{
alert( "You clicked in the document." );
} // end function documentClick

function bubble( e )
{
if ( !e )
var e = window.event;

alert( "This will bubble." );
e.cancelBubble = false;
} // end function bubble

function noBubble( e )
{
if ( !e )
var e = window.event;

alert( "This will not bubble." );
e.cancelBubble = true;
} // end function noBubble

function registerEvents()
{
document.onclick = documentClick;
document.getElementById( "bubble" ).onclick = bubble;
document.getElementById( "noBubble" ).onclick = noBubble;
} // end function registerEvents
// -->
</script>
</head>
<body onload = "registerEvents()">
<p id = "bubble">Bubbling enabled.</p>
<p id = "noBubble">Bubbling disabled.</p>
</body>
</html>
```

**Fig. 13.8** | Canceling event bubbling. (Part 2 of 3.)

**Fig. 13.8** | Canceling event bubbling. (Part 3 of 3.)

Clicking the first p element (line 45) triggers a call to bubble. Then, because line 37 registers the document’s onclick event, documentClick is also called. This occurs because the onclick event bubbles up to the document. This is probably not the desired result. Clicking the second p element (line 46) calls noBubble, which disables the event bubbling for this event by setting the cancelBubble property of the event object to true. \[_Note:_ The default value of cancelBubble is false, so the statement in line 23 is unnecessary.\]

**Common Programming Error 13.5**

> _Forgetting to cancel event bubbling when necessary may cause unexpected results in your scripts._ 13.5

**13.9 More Events** The events we covered in this chapter are among the most commonly used. A list of some events supported by both Firefox and Internet Explorer is given with descriptions in Fig. 13.9.

|    Event    |                                                    Description                                                    |
| :---------: | :---------------------------------------------------------------------------------------------------------------: |
|   onabort   |                              Fires when image transfer has been interrupted by user.                              |
|  onchange   | Fires when a new choice is made in a select element, or when a text input is changed and the element loses focus. |
|   onclick   |                                    Fires when the user clicks using the mouse.                                    |
| ondblclick  |                                      Fires when the mouse is double clicked.                                      |
|   onfocus   |                                      Fires when a form element gains focus.                                       |
|  onkeydown  |                                      Fires when the user pushes down a key.                                       |
| onkeypress  |                                 Fires when the user presses then releases a key.                                  |
|   onkeyup   |                                        Fires when the user releases a key.                                        |
|   onload    |                              Fires when an element and all its children have loaded.                              |
| onmousedown |                                    Fires when a mouse button is pressed down.                                     |
| onmousemove |                                            Fires when the mouse moves.                                            |
| onmouseout  |                                      Fires when the mouse leaves an element.                                      |
| onmouseover |                                      Fires when the mouse enters an element.                                      |
|  onmouseup  |                                      Fires when a mouse button is released.                                       |
|   onreset   |                         Fires when a form resets (i.e., the user clicks a reset button).                          |
|  onresize   |               Fires when the size of an object changes (i.e., the user resizes a window or frame).                |
|  onselect   |                        Fires when a text selection begins (applies to input or textarea).                         |
|  onsubmit   |                                          Fires when a form is submitted.                                          |
|  onunload   |                                       Fires when a page is about to unload.                                       |

**Fig. 13.9** | Cross-browser events.

## Wrap-Up

This chapter introduced JavaScript events, which allow scripts to respond to user interac- tions and make web pages more dynamic. We described event handlers and how to register them to specific events on DOM nodes in the script. We introduced the event object and the keyword this, which allows us to use one event handler to apply a change to the re- cipient of an event. We discussed various events that fire from mouse actions, as well as the onfocus, onblur, onsubmit and onreset events. Finally, we learned about event bub- bling, which can produce unexpected effects in scripts that use events. The next chapter introduces XML, an open technology used for data exchange.

## Web Resources

http://www.quirksmode.org/js/introevents.html

An introduction and reference site for JavaScript events. Includes comprehensive information on history of events, the different event models, and making events work across multiple browsers. wsabstract.com/dhtmltutors/domevent1.shtml

This _JavaScript Kit_ tutorial introduces event handling and discusses the W3C DOM advanced event model. http://www.w3schools.com/jsref/jsref\_events.asp

The W3 School’s JavaScript Event Reference site has a comprehensive list of JavaScript events, a de- scription of their usage and their browser compatibilities. http://www.brainjar.com/dhtml/events/

BrainJar.com’s DOM Event Model site provides a comprehensive introduction to the DOM event model, and has example code to demonstrate several different ways of assigning and using events.

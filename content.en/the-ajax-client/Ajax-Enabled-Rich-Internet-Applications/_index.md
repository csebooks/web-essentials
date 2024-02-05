---
title: "Ajax-Enabled Rich Internet Applications"
weight: 12
---

# O B J E C T I V E S

In this chapter you will learn:

■ What Ajax is and why it is important for building Rich Internet Applications.

■ What asynchronous requests are and how they help give web applications the feel of desktop applications.

■ What the XMLHttpRequest object is and how it’s used to create and manage asynchronous requests to servers and to receive asynchronous responses from servers.

■ Methods and properties of the XMLHttpRequest object.

■ How to use XHTML, JavaScript, CSS, XML, JSON and the DOM in Ajax applications.

■ How to use Ajax frameworks and toolkits, specifically Dojo, to conveniently create robust Ajax-enabled Rich Internet Applications.

■ About resources for studying Ajax-related issues such as security, performance, debugging, the “back-button problem” and more.

## Introduction

Despite the tremendous technological growth of the Internet over the past decade, the us- ability of web applications has lagged behind compared to that of desktop applications. Every significant interaction in a web application results in a waiting period while the ap- plication communicates over the Internet with a server. **Rich Internet Applications (RIAs)** are web applications that approximate the look, feel and usability of desktop appli- cations. RIAs have two key attributes—performance and a rich GUI.

RIA performance comes from **Ajax (Asynchronous JavaScript and XML)**, which uses client-side scripting to make web applications more responsive. Ajax applications separate client-side user interaction and server communication, and run them in parallel, reducing the delays of server-side processing normally experienced by the user.

There are many ways to implement Ajax functionality. **“Raw” Ajax** uses JavaScript to send asynchronous requests to the server, then updates the page using the DOM (see Section 15.5). “Raw” Ajax is best suited for creating small Ajax components that asynchro- nously update a section of the page. However, when writing “raw” Ajax you need to deal directly with cross-browser portability issues, making it impractical for developing large- scale applications. These portability issues are hidden by **Ajax toolkits**, such as **Dojo** (Section 15.8), **Prototype**, **Script.aculo.us** and ASP.NET Ajax, which provide powerful ready-to-use controls and functions that enrich web applications, and simplify JavaScript coding by making it cross-browser compatible.

Traditional web applications use XHTML forms (Chapter 4) to build simple and thin GUIs compared to the rich GUIs of Windows, Macintosh and desktop systems in general. We achieve rich GUI in RIAs with Ajax toolkits and with RIA environments such as Adobe’s Flex (Chapter 18), Microsoft’s Silverlight (Chapter 19) and JavaServer Faces (Chapters 26–27). Such toolkits and environments provide powerful ready-to-use con- trols and functions that enrich web applications.

Previous chapters discussed XHTML, CSS, JavaScript, dynamic HTML, the DOM and XML. This chapter uses these technologies to build Ajax-enabled web applications. The client-side of Ajax applications is written in XHTML and CSS, and uses JavaScript to add functionality to the user interface. XML is used to structure the data passed between the server and the client. We’ll also use JSON (JavaScript Object Notation) for this pur- pose. The Ajax component that manages interaction with the server is usually implemented with JavaScript’s **XMLHttpRequest object**—commonly abbreviated as XHR. The server processing can be implemented using any server-side technology, such as PHP, ASP. NET, JavaServer Faces and Ruby on Rails—each of which we cover in later chapters.

This chapter begins with several examples that build basic Ajax applications using JavaScript and the XMLHttpRequest object. We then build an Ajax application with a rich calendar GUI using the Dojo Ajax toolkit. In subsequent chapters, we use tools such as Adobe Flex, Microsoft Silverlight and JavaServer Faces to build RIAs using Ajax. In Chapter 24, we’ll demonstrate features of the Prototype and Script.aculo.us Ajax libraries, which come with the Ruby on Rails framework (and can be downloaded separately). Pro- totype provides capabilities similar to Dojo. Script.aculo.us provides many “eye candy” effects that enable you to beautify your Ajax applications and create rich interfaces. In Chapter 27, we present Ajax-enabled JavaServer Faces (JSF) components. JSF uses Dojo to implement many of its client-side Ajax capabilities.

## Traditional Web Applications vs. Ajax Applications

In this section, we consider the key differences between traditional web applications and Ajax-based web applications.

**_Traditional Web Applications_**
Figure 15.1 presents the typical interactions between the client and the server in a tradi- tional web application, such as one that uses a user registration form. First, the user fills in the form’s fields, then submits the form (Fig. 15.1, _Step 1_). The browser generates a re- quest to the server, which receives the request and processes it (_Step 2_). The server generates and sends a response containing the exact page that the browser will render (_Step 3_), which causes the browser to load the new page (_Step 4_) and temporarily makes the browser win- dow blank. Note that the client _waits_ for the server to respond and _reloads the entire page_ with the data from the response (_Step 4_). While such a **synchronous request** is being pro-

**Fig. 15.1** | Classic web application reloading the page for every user interaction.

cessed on the server, the user cannot interact with the client web page. Frequent long pe- riods of waiting, due perhaps to Internet congestion, have led some users to refer to the World Wide Web as the “World Wide Wait.” If the user interacts with and submits an- other form, the process begins again (_Steps 5–8_).

This model was originally designed for a web of hypertext documents—what some people call the “brochure web.” As the web evolved into a full-scale applications platform, the model shown in Fig. 15.1 yielded “choppy” application performance. Every full-page refresh required users to re-establish their understanding of the full-page contents. Users began to demand a model that would yield the responsive feel of desktop applications.

**_Ajax Web Applications_**
Ajax applications add a layer between the client and the server to manage communication between the two (Fig. 15.2). When the user interacts with the page, the client creates an XMLHttpRequest object to manage a request (_Step 1_). The XMLHttpRequest object sends the request to the server (_Step 2_) and awaits the response. The requests are **asynchronous**, so the user can continue interacting with the application on the client-side while the server processes the earlier request concurrently. Other user interactions could result in addition- al requests to the server (_Steps 3_ and _4_). Once the server responds to the original request (_Step 5_), the XMLHttpRequest object that issued the request calls a client-side function to process the data returned by the server. This function—known as a **callback function**— uses **partial page updates** (_Step 6_) to display the data in the existing web page _without re- loading the entire page_. At the same time, the server may be responding to the second re- quest (_Step 7_) and the client-side may be starting to do another partial page update (_Step 8_). The callback function updates only a designated part of the page. Such partial page up- dates help make web applications more responsive, making them feel more like desktop applications. The web application does not load a new page while the user interacts with it.

**Fig. 15.2** | Ajax-enabled web application interacting with the server asynchronously.

## Rich Internet Applications (RIAs) with Ajax

Ajax improves the user experience by making interactive web applications more respon- sive. Consider a registration form with a number of fields (e.g., first name, last name e- mail address, telephone number, etc.) and a **Register** (or **Submit**) button that sends the en- tered data to the server. Usually each field has rules that the user’s entries have to follow (e.g., valid e-mail address, valid telephone number, etc.).

When the user clicks **Register**, a classic XHTML form sends the server all of the data to be validated (Fig. 15.3). While the server is validating the data, the user cannot interact with the page. The server finds invalid data, generates a new page identifying the errors in the form and sends it back to the client—which renders the page in the browser. Once the user fixes the errors and clicks the **Register** button, the cycle repeats until no errors are found, then the data is stored on the server. The entire page reloads every time the user submits invalid data.

Ajax-enabled forms are more interactive. Rather than sending the entire form to be validated, entries are validated dynamically as the user enters data into the fields. For example, consider a website registration form that requires a unique e-mail address. When the user enters an e-mail address into the appropriate field, then moves to the next form field to continue entering data, an asynchronous request is sent to the server to validate the e-mail address. If the e-mail address is not unique, the server sends an error message that is displayed on the page informing the user of the problem (Fig. 15.4). By sending each entry asynchronously, the user can address each invalid entry quickly, versus making edits and resubmitting the entire form repeatedly until all entries are valid. Asynchronous

**Fig. 15.3** | Classic XHTML form: User submits entire form to server, which validates the data entered (if any). Server responds indicating fields with invalid or missing data. (Part 1 of 2.)

**Fig. 15.3** | Classic XHTML form: User submits entire form to server, which validates the data entered (if any). Server responds indicating fields with invalid or missing data. (Part 2 of 2.)

**Fig. 15.4** | Ajax-enabled form shows errors asynchronously when user moves to another field.

requests could also be used to fill some fields based on previous fields (e.g., automatically filling in the “city” and “state” fields based on the zip code entered by the user).

## History of Ajax

The term Ajax was coined by Jesse James Garrett of Adaptive Path in February 2005, when he was presenting the previously unnamed technology to a client. The technologies of Ajax (XHTML, JavaScript, CSS, the DOM and XML) have all existed for many years.

Asynchronous page updates can be traced back to earlier browsers. In the 1990s, Netscape’s LiveScript made it possible to include scripts in web pages (e.g., web forms) that could run on the client. LiveScript evolved into JavaScript. In 1998, Microsoft intro- duced the XMLHttpRequest object to create and manage asynchronous requests and responses. Popular applications like Flickr and Google’s Gmail use the XMLHttpRequest

object to update pages dynamically. For example, Flickr uses the technology for its text editing, tagging and organizational features; Gmail continuously checks the server for new e-mail; and Google Maps allows you to drag a map in any direction, downloading the new areas on the map without reloading the entire page.

The name Ajax immediately caught on and brought attention to its component tech- nologies. Ajax has become one of the hottest web-development technologies, enabling webtop applications to challenge the dominance of established desktop applications.

## “Raw” Ajax Example Using the XMLHttpRequest Object

In this section, we use the XMLHttpRequest object to create and manage asynchronous re- quests. The XMLHttpRequest object (which resides on the client) is the layer between the client and the server that manages asynchronous requests in Ajax applications. This object is supported on most browsers, though they may implement it differently—a common is- sue in JavaScript programming. To initiate an asynchronous request (shown in Fig. 15.5), you create an instance of the XMLHttpRequest object, then use its open method to set up the request and its send method to initiate the request. We summarize the XMLHttpRe-

quest properties and methods in Figs. 15.6–15.7. Figure 15.5 presents an Ajax application in which the user interacts with the page by

moving the mouse over book-cover images. We use the onmouseover and onmouseout

events (discussed in Chapter 13) to trigger events when the user moves the mouse over and out of an image, respectively. The onmouseover event calls function getContent with the URL of the document containing the book’s description. The function makes this request asynchronously using an XMLHttpRequest object. When the XMLHttpRequest object receives the response, the book description is displayed below the book images. When the user moves the mouse out of the image, the onmouseout event calls function clearCon-

tent to clear the display box. These tasks are accomplished without reloading the page on the client. You can test-drive this example at test.deitel.com/examples/iw3htp4/

ajax/fig15_05/SwitchContent.html.

**Performance Tip 15.1**

> _When an Ajax application requests a file from a server, such as an XHTML document or an image, the browser typically caches that file. Subsequent requests for the same file can load it from the browser’s cache rather than making the round trip to the server again._ 15.1

**Software Engineering Observation 15.1**

> _For security purposes, the XMLHttpRequest object doesn’t allow a web application to request resources from domain names other than the one that served the application. For this reason, the web application and its resources must reside on the same web server (this could be a web server on your local computer).This is commonly known as the **same origin policy (SOP)**. SOP aims to close a vulnerability called **cross-site scripting**, also known as **XSS**, which allows an attacker to compromise a website’s security by injecting a malicious script onto the page from another domain. To learn more about XSS visit en.wikipedia.org/wiki/XSS. To get content from another domain securely, you can implement a server-side proxy—an application on the web application’s web server—that can make requests to other servers on the web application’s behalf._ 15.0

**_Asynchronous Requests_**
The function getContent (lines 19–35) sends the asynchronous request. Line 24 creates the XMLHttpRequest object, which manages the asynchronous request. We store the object in the global variable asyncRequest (declared at line 16) so that it can be accessed any- where in the script.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 15.5: SwitchContent.html -->
<!-- Asynchronously display content without reloading the page. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<style type="text/css">
.box { border: 1px solid black;
padding: 10px }
</style>
<title>Switch Content Asynchronously</title>
<script type = "text/javascript" language = "JavaScript">
<!--
var asyncRequest; // variable to hold XMLHttpRequest object

// set up and send the asynchronous request
function getContent( url )
{
// attempt to create the XMLHttpRequest and make the request
try
{
asyncRequest = new XMLHttpRequest(); // create request object

// register event handler
asyncRequest.onreadystatechange = stateChange;
asyncRequest.open( 'GET', url, true ); // prepare the request
asyncRequest.send( null ); // send the request
} // end try
```

**Fig. 15.5** | Asynchronously display content without reloading the page. (Part 1 of 3.)

```bash
catch ( exception )
{
alert( 'Request failed.' );
} // end catch
} // end function getContent

// displays the response data on the page
function stateChange()
{
if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 )
{
document.getElementById( 'contentArea' ).innerHTML =
asyncRequest.responseText; // places text in contentArea
} // end if
} // end function stateChange

// clear the content of the box
function clearContent()
{
document.getElementById( 'contentArea' ).innerHTML = '';
} // end function clearContent
// -->
</script>
</head>
<body>
<h1>Mouse over a book for more information.</h1>
<img src =
"http://test.deitel.com/examples/iw3htp4/ajax/thumbs/cpphtp6.jpg"
onmouseover = 'getContent( "cpphtp6.html" )'
onmouseout = 'clearContent()'/>
<img src =
"http://test.deitel.com/examples/iw3htp4/ajax/thumbs/iw3htp4.jpg"
onmouseover = 'getContent( "iw3htp4.html" )'
onmouseout = 'clearContent()'/>
<img src =
"http://test.deitel.com/examples/iw3htp4/ajax/thumbs/jhtp7.jpg"
onmouseover = 'getContent( "jhtp7.html" )'
onmouseout = 'clearContent()'/>
<img src =
"http://test.deitel.com/examples/iw3htp4/ajax/thumbs/vbhtp3.jpg"
onmouseover = 'getContent( "vbhtp3.html" )'
onmouseout = 'clearContent()'/>
<img src =
"http://test.deitel.com/examples/iw3htp4/ajax/thumbs/vcsharphtp2.jpg"
onmouseover = 'getContent( "vcsharphtp2.html" )'
onmouseout = 'clearContent()'/>
<img src =
"http://test.deitel.com/examples/iw3htp4/ajax/thumbs/chtp5.jpg"
onmouseover = 'getContent( "chtp5.html" )'
onmouseout = 'clearContent()'/>
<div class = "box" id = "contentArea">&nbsp;</div>
</body>
</html>
```

**Fig. 15.5** | Asynchronously display content without reloading the page. (Part 2 of 3.)

**Fig. 15.5** | Asynchronously display content without reloading the page. (Part 3 of 3.)

Line 28 calls the XMLHttpRequest open method to prepare an asynchronous GET request. In this example, the url parameter specifies the address of an HTML document containing the description of a particular book. When the third argument is true, the request is asynchronous. The URL is passed to function getContent in response to the onmouseover event for each image. Line 29 sends the asynchronous request to the server by calling XMLHttpRequest send method. The argument null indicates that this request is not submitting data in the body of the request.

**_Exception Handling_**
Lines 22–34 introduce **exception handling**. An **exception** is an indication of a problem that occurs during a program’s execution. The name “exception” implies that the problem occurs infrequently—if the “rule” is that a statement normally executes correctly, then the “excep- tion to the rule” is that a problem occurs. Exception handling enables you to create applica- tions that can resolve (or handle) exceptions—in some cases allowing a program to continue executing as if no problem had been encountered.

Lines 22–30 contain a **try block**, which encloses the code that might cause an excep- tion and the code that should not execute if an exception occurs (i.e., if an exception occurs in a statement of the try block, the remaining code in the try block is skipped). A try block consists of the keyword try followed by a block of code enclosed in curly braces ({}). If there is a problem sending the request—e.g., if a user tries to access the page using an older browser that does not support XMLHttpRequest—the try block terminates imme- diately and a **catch block** (also called a **catch clause** or **exception handler**) catches (i.e., receives) and handles an exception. The catch block (lines 31–34) begins with the key- word catch and is followed by a parameter in parentheses (called the exception parameter) and a block of code enclosed in curly braces. The exception parameter’s name (exception in this example) enables the catch block to interact with a caught exception object (for example, to obtain the name of the exception or an exception-specific error message via the exception object’s name and message properties). In this case, we simply display our own error message 'Request Failed' and terminate the getContent function. The request can fail because a user accesses the web page with an older browser or the content that is being requested is located on a different domain.

**_Callback Functions_**
The stateChange function (lines 38–45) is the callback function that is called when the client receives the response data. Line 27 registers function stateChange as the event han- dler for the XMLHttpRequest object’s onreadystatechange event. Whenever the request makes progress, the XMLHttpRequest calls the onreadystatechange event handler. This progress is monitored by the readyState property, which has a value from 0 to 4. The value 0 indicates that the request is not initialized and the value 4 indicates that the request is complete—all the values for this property are summarized in Fig. 15.6. If the request completes successfully (line 40), lines 42–43 use the XMLHttpRequest object’s responseText property to obtain the response data and place it in the div element named contentArea (defined at line 81). We use the DOM’s getElementById method to get this div element, and use the element’s innerHTML property to place the content in the div.

**_XMLHttpRequest Object Properties and Methods_**
Figures 15.6 and 15.7 summarize some of the XMLHttpRequest object’s properties and methods, respectively. The properties are crucial to interacting with asynchronous re- quests. The methods initialize, configure and send asynchronous requests.

|      Property      |                                                                                                                                                                                                                  Description                                                                                                                                                                                                                  |
| :----------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| onreadystatechange |                                                                                                                                                                           Stores the callback function—the event handler that gets called when the server responds.                                                                                                                                                                           |
|     readyState     | Keeps track of the request’s progress. It is usually used in the call- back function to determine when the code that processes the response should be launched. The readyState value 0 signifies that the request is uninitialized; 1 signifies that the request is loading; 2 signifies that the request has been loaded; 3 signifies that data is actively being sent from the server; and 4 signifies that the request has been completed. |
|    responseText    |                                                                                                                                                                                              Text that is returned to the client by the server.                                                                                                                                                                                               |
|    responseXML     |                                                                                                If the server’s response is in XML format, this property contains the XML document; otherwise, it is empty. It can be used like a document object in JavaScript, which makes it useful for receiving com- plex data (e.g. populating a table).                                                                                                 |
|       status       |                                                                                              HTTP status code of the request. A status of 200 means that request was successful. A status of 404 means that the requested resource was not found. A status of 500 denotes that there was an error while the server was proccessing the request.                                                                                               |
|     statusText     |                                                                                                                                                           Additional information on the request’s status. It is often used to display the error to the user when the request fails.                                                                                                                                                           |

**Fig. 15.6** | XMLHttpRequest object properties.

|      Method      |                                                                                                                                                                                                                                        Description                                                                                                                                                                                                                                        |
| :--------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       open       | Initializes the request and has two mandatory parameters—method and URL. The method parameter specifies the purpose of the request—typically GET if the request is to take data from the server or POST if the request will contain a body in addition to the head- ers. The URL parameter specifies the address of the file on the server that will generate the response. A third optional boolean parameter specifies whether the request is asynchronous—it’s set to true by default. |
|       send       |                                                                                                                                                                   Sends the request to the sever. It has one optional parameter, data, which specifies the data to be POSTed to the server—it’s set to null by default.                                                                                                                                                                   |
| setRequestHeader |                                                                                                                                                                        Alters the header of the request. The two parameters specify the header and its new value. It is often used to set the content-type field.                                                                                                                                                                         |

**Fig. 15.7** | XMLHttpRequest object methods. (Part 1 of 2.)

|        Method         |                                                                                                    Description                                                                                                    |
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   getResponseHeader   | Returns the header data that precedes the response body. It takes one parameter, the name of the header to retrieve. This call is often used to determine the response’s type, to parse the response cor- rectly. |
| getAllResponseHeaders |                                                                  Returns an array that contains all the headers that precede the response body.                                                                   |
|         abort         |                                                                                           Cancels the current request.                                                                                            |

**Fig. 15.7** | XMLHttpRequest object methods. (Part 2 of 2.)

## Using XML and the DOM

When passing structured data between the server and the client, Ajax applications often use XML because it is easy to generate and parse. When the XMLHttpRequest object re- ceives XML data, it parses and stores the data as an XML DOM object in the responseXML property. The example in Fig. 15.8 asynchronously requests from a server XML docu- ments containing URLs of book-cover images, then displays the images in an HTML ta- ble. The code that configures the asynchronous request is the same as in Fig. 15.5. You can test-drive this application at test.deitel.com/examples/iw3htp4/ajax/fig15_08/ PullImagesOntoPage.html (the book-cover images will be easier to see on the screen).

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 15.8: PullImagesOntoPage.html -->
<!-- Image catalog that uses Ajax to request XML data asynchronously. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title> Pulling Images onto the Page </title>
<style type = "text/css">
td { padding: 4px }
img { border: 1px solid black }
</style>
<script type = "text/javascript" language = "Javascript">
var asyncRequest; // variable to hold XMLHttpRequest object

// set up and send the asynchronous request to the XML file
function getImages( url )
{
// attempt to create the XMLHttpRequest and make the request
try
{
asyncRequest = new XMLHttpRequest(); // create request object

```

**Fig. 15.8** | Image catalog that uses Ajax to request XML data asynchronously. (Part 1 of 4.)

```bash
// register event handler
asyncRequest.onreadystatechange = processResponse;
asyncRequest.open( 'GET', url, true ); // prepare the request
asyncRequest.send( null ); // send the request
} // end try
catch ( exception )
{
alert( 'Request Failed' );
} // end catch
} // end function getImages

// parses the XML response; dynamically creates a table using DOM and
// populates it with the response data; displays the table on the page
function processResponse()
{
// if request completed successfully and responseXML is non-null
if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 &&
asyncRequest.responseXML )
{
clearTable(); // prepare to display a new set of images

// get the covers from the responseXML
var covers = asyncRequest.responseXML.getElementsByTagName(
"cover" )

// get base URL for the images
var baseUrl = asyncRequest.responseXML.getElementsByTagName(
"baseurl" ).item( 0 ).firstChild.nodeValue;

// get the placeholder div element named covers
var output = document.getElementById( "covers" );

// create a table to display the images
var imageTable = document.createElement( 'table' );

// create the table's body
var tableBody = document.createElement( 'tbody' );

var rowCount = 0; // tracks number of images in current row
var imageRow = document.createElement( "tr" ); // create row

// place images in row
for ( var i = 0; i < covers.length; i++ )
{
var cover = covers.item( i ); // get a cover from covers array

// get the image filename
var image = cover.getElementsByTagName( "image" ).
item( 0 ).firstChild.nodeValue;

// create table cell and img element to display the image
var imageCell = document.createElement( "td" );
```

**Fig. 15.8** | Image catalog that uses Ajax to request XML data asynchronously. (Part 2 of 4.)

```bash
var imageTag = document.createElement( "img" );

// set img element's src attribute
imageTag.setAttribute( "src", baseUrl + escape( image ) );
imageCell.appendChild( imageTag ); // place img in cell
imageRow.appendChild( imageCell ); // place cell in row
rowCount++; // increment number of images in row

// if there are 6 images in the row, append the row to
// table and start a new row
if ( rowCount == 6 && i + 1 < covers.length )
{
tableBody.appendChild( imageRow );
imageRow = document.createElement( "tr" );
rowCount = 0;
} // end if statement
} // end for statement

tableBody.appendChild( imageRow ); // append row to table body
imageTable.appendChild( tableBody ); // append body to table
output.appendChild( imageTable ); // append table to covers div
} // end if
} // end function processResponse

// deletes the data in the table.
function clearTable()
{
document.getElementById( "covers" ).innerHTML = '';
}// end function clearTable
</script>
</head>
<body>
<input type = "radio" checked = "unchecked" name ="Books" value = "all"
onclick = 'getImages( "all.xml" )'/> All Books
<input type = "radio" checked = "unchecked"
name = "Books" value = "simply"
onclick = 'getImages( "simply.xml" )'/> Simply Books
<input type = "radio" checked = "unchecked"
name = "Books" value = "howto"
onclick = 'getImages( "howto.xml" )'/> How to Program Books
<input type = "radio" checked = "unchecked"
name = "Books" value = "dotnet"
onclick = 'getImages( "dotnet.xml" )'/> .NET Books
<input type = "radio" checked = "unchecked"
name = "Books" value = "javaccpp"
onclick = 'getImages( "javaccpp.xml" )'/> Java, C, C++ Books
<input type = "radio" checked = "checked" name = "Books" value = "none"
onclick = 'clearTable()'/> None
<br/>
<div id = "covers"></div>
</body>
</html>
```

**Fig. 15.8** | Image catalog that uses Ajax to request XML data asynchronously. (Part 3 of 4.)

**Fig. 15.8** | Image catalog that uses Ajax to request XML data asynchronously. (Part 4 of 4.)

When the XMLHttpRequest object receives the response, it invokes the callback func- tion processResponse (lines 38–99). We use XMLHttpRequest object’s responseXML property to access the XML returned by the server. Lines 41–42 check that the request was successful, and that the responseXML property is not empty. The XML file that we requested includes a baseURL node that contains the address of the image directory and a collection of cover nodes that contain image filenames. responseXML is a document object, so we can extract data from it using the XML DOM functions. Lines 47–52 use the DOM’s method **getElementsByTagName** to extract all the image filenames from cover nodes and the URL of the directory from the baseURL node. Since the baseURL has no child nodes, we use item(0).firstChild.nodeValue to obtain the directory’s address and store it in variable baseURL. The image filenames are stored in the covers array.

As in Fig. 15.5 we have a placeholder div element (line 126) to specify where the image table will be displayed on the page. Line 55 stores the div in variable output, so we can fill it with content later in the program.

Lines 58–93 generate an XHTML table dynamically, using the createElement, setAttribute and appendChild DOM methods. Method createElement creates an XHTML element of the specified type. Method **setAttribute** adds or changes an attribute of an XHTML element. Method appendChild inserts one XHTML element into another. Lines 58 and 61 create the table and tbody elements, respectively. We restrict each row to no more than six images, which we track with variable rowCount variable. Each iteration of the for statement (lines 67–93) obtains the filename of the image to be inserted (lines 69–73), creates a table cell element where the image will be inserted (line 76) and creates an <img> element (line 77). Line 80 sets the image’s src attribute to the image’s URL, which we build by concatenating the filename to the base URL of the XHTML document. Lines 81–82 insert the <img> element into the cell and the cell into the table row. When the row has six cells, it is inserted into the table and a new row is cre- ated (lines 87–92). Once all the rows have been inserted into the table, the table is inserted into the placeholder element covers that is referenced by variable output (line 97). This element is located on the bottom of the web page.

Function clearTable (lines 102–105) is called to clear images when the user switches radio buttons. The text is cleared by setting the innerHTML property of the placeholder ele- ment to the empty string.

## Creating a Full-Scale Ajax-Enabled Application

Our next example demonstrates additional Ajax capabilities. The web application interacts with a web service to obtain data and to modify data in a server-side database. The web application and server communicate with a data format called JSON (JavaScript Object Notation). In addition, the application demonstrates server-side validation that occurs in parallel with the user interacting with the web application. You can test the application at test.deitel.com/examples/iw3htp4/ajax/fig15_09_10/AddressBook.html.

**_Using JSON_ JSON**
**(JavaScript Object Notation)**—a simple way to represent JavaScript objects as strings—is an alternative way (to XML) for passing data between the client and the server. Each object in JSON is represented as a list of property names and values contained in curly braces, in the following format:

```
{ _"propertyName1"_ : _value1_, _"propertyName2'_": _value2_ }
```

Arrays are represented in JSON with square brackets in the following format:

```
[ _value1_, _value2_, _value3_ ]
```

Each value can be a string, a number, a JSON representation of an object, true, false or null. You can convert JSON strings into JavaScript objects with JavaScript’s eval function. To evaluate a JSON string properly, a left parenthesis should be placed at the begin- ning of the string and a right parenthesis at the end of the string before the string is passed to the eval function.

The eval function creates a potential security risk—it executes any embedded Java- Script code in its string argument, possibly allowing a harmful script to be injected into JSON. A more secure way to process JSON is to use a JSON parser. In our examples, we use the open source parser from www.json.org/js.html. When you download its Java- Script file, place it in the same folder as your application. Then, link the json.js file into your XHTML file with the following statement in the head section:

```
<script type = "text/javascript" src = "json.js">
```

You can now call function parseJSON on a JSON string to convert it to a JavaScript object.

JSON strings are easier to create and parse than XML, and require fewer bytes. For these reasons, JSON is commonly used to communicate in client/server interaction. For more information on JSON, visit our JSON Resource Center at www.deitel.com/json.

**_Rich Functionality_**
The previous examples in this chapter requested data from static files on the server. The example in Fig. 15.9 is an address-book application that communicates with a server-side application. The application uses server-side processing to give the page the functionality and usability of a desktop application. We use JSON to encode server-side responses and to create objects on the fly.

Initially the address book loads a list of entries, each containing a first and last name (Fig. 15.9(a)). Each time the user clicks a name, the address book uses Ajax functionality to load the person’s address from the server and expand the entry _without reloading the page_ (Fig. 15.9(b))—and it does this _in parallel_ with allowing the user to click other names. The application allows the user to search the address book by typing a last name. As the user enters each keystroke, the application asynchronously displays the list of names in which the last name starts with the characters the user has entered so far (Fig. 15.9(c), Fig. 15.9 (d) and Fig. 15.9(e))—a popular feature called **type ahead**.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 15.9 addressbook.html -->
<!-- Ajax enabled address book application. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Address Book</title>
<link rel = "stylesheet" type = "text/css" href = "address.css" />
<script type = "text/javascript" src = "json.js"></script>
<script type = "text/javascript">
<!--
// URL of the web service
var webServiceUrl = '/AddressBookWebService/AddressService.asmx';
```

**Fig. 15.9** | Ajax-enabled address-book application. (Part 1 of 10.)

```bash

var phoneValid = false; // indicates if the telephone is valid
var zipValid = false; //indicates if the zip code is valid

// get a list of names from the server and display them
function showAddressBook()
{
// hide the "addEntry" form and show the address book
document.getElementById( 'addEntry' ).style.display = 'none';
document.getElementById( 'addressBook' ).style.display = 'block';

var params = "[]"; // create an empty object
callWebService( 'getAllNames', params, parseData );
} // end function showAddressBook

// send the asynchronous request to the web service
function callWebService( method, paramString, callBack )
{
// build request URL string
var requestUrl = webServiceUrl + "/" + method;
var params = paramString.parseJSON();

// build the parameter string to add to the url
 for ( var i = 0; i < params.length; i++ )
{
// checks whether it is the first parameter and builds
// the parameter string accordingly
if ( i == 0 )
requestUrl = requestUrl + "?" + params[ i ].param +
"=" + params[ i ].value; // add first parameter to url
else
requestUrl = requestUrl + "&" + params[ i ].param +
"=" + params[ i ].value; // add other parameters to url
} // end for

// attempt to send the asynchronous request
try
{
var asyncRequest = new XMLHttpRequest(); // create request

// set up callback function and store it
asyncRequest.onreadystatechange = function()
{
callBack( asyncRequest );
}; // end anonymous function

// send the asynchronous request
asyncRequest.open( 'GET', requestUrl, true );
asyncRequest.setRequestHeader("Accept",
"application/json; charset=utf-8" );
asyncRequest.send(); // send request
} // end try
```

**Fig. 15.9** | Ajax-enabled address-book application. (Part 2 of 10.)

```bash
catch ( exception )
{
alert ( 'Request Failed' );
} // end catch
} // end function callWebService

// parse JSON data and display it on the page
function parseData( asyncRequest )
{
// if request has completed successfully process the response
if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 )
{
// convert the JSON string to an Object
var data = asyncRequest.responseText.parseJSON();
displayNames( data ); // display data on the page
} // end if
} // end function parseData

// use the DOM to display the retrieved address book entries
function displayNames( data )
{
// get the placeholder element from the page
var listBox = document.getElementById( 'Names' );
listBox.innerHTML = ''; // clear the names on the page

// iterate over retrieved entries and display them on the page
for ( var i = 0; i < data.length; i++ )
{
// dynamically create a div element for each entry
// and a fieldset element to place it in
var entry = document.createElement( 'div' );
var field = document.createElement( 'fieldset' );
entry.onclick = handleOnClick; // set onclick event handler
entry.id = i; // set the id
entry.innerHTML = data[ i ].First + ' ' + data[ i ].Last;
field.appendChild( entry ); // insert entry into the field
listBox.appendChild( field ); // display the field
} // end for
} // end function displayAll

// event handler for entry's onclick event
function handleOnClick()
{
// call getAddress with the element's content as a parameter
getAddress( eval( 'this' ), eval( 'this.innerHTML' ) );
} // end function handleOnClick

// search the address book for input
// and display the results on the page
function search( input )
{
// get the placeholder element and delete its content
var listBox = document.getElementById( 'Names' );
```

**Fig. 15.9** | Ajax-enabled address-book application. (Part 3 of 10.)

```bash
listBox.innerHTML = ''; // clear the display box

// if no search string is specified all the names are displayed
if ( input == "" ) // if no search value specified
{
showAddressBook(); // Load the entire address book
} // end if
else
{
var params = '[{"param": "input", "value": "' + input + '"}]';
callWebService( "search", params , parseData );
} // end else
} // end function search

// Get address data for a specific entry
function getAddress( entry, name )
{
// find the address in the JSON data using the element's id
// and display it on the page
var firstLast = name.split(" "); // convert string to array
var requestUrl = webServiceUrl + "/getAddress?first="
+ firstLast[ 0 ] + "&last=" + firstLast[ 1 ];

// attempt to send an asynchronous request
try
{
// create request object
var asyncRequest = new XMLHttpRequest();

// create a callback function with 2 parameters
asyncRequest.onreadystatechange = function()
{
displayAddress( entry, asyncRequest );
}; // end anonymous function

asyncRequest.open( 'GET', requestUrl, true );
asyncRequest.setRequestHeader("Accept",
"application/json; charset=utf-8"); // set response datatype
asyncRequest.send(); // send request
} // end try
catch ( exception )
{
alert ( 'Request Failed.' );
} // end catch
} // end function getAddress

// clear the entry's data.
function displayAddress( entry, asyncRequest )
{
// if request has completed successfully, process the response
if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 )
{
```

**Fig. 15.9** | Ajax-enabled address-book application. (Part 4 of 10.)

```bash
// convert the JSON string to an object
var data = asyncRequest.responseText.parseJSON();
var name = entry.innerHTML // save the name string
entry.innerHTML = name + '<br/>' + data.Street +
'<br/>' + data.City + ', ' + data.State
+ ', ' + data.Zip + '<br/>' + data.Telephone;

// clicking on the entry removes the address
entry.onclick = function()
{
clearField( entry, name );
}; // end anonymous function

} // end if
} // end function displayAddress

// clear the entry's data
function clearField( entry, name )
{
entry.innerHTML = name; // set the entry to display only the name
entry.onclick = function() // set onclick event
{
getAddress( entry, name ); // retrieve address and display it
}; // end function
} // end function clearField

// display the form that allows the user to enter more data
function addEntry()
{
document.getElementById( 'addressBook' ).style.display = 'none';
document.getElementById( 'addEntry' ).style.display = 'block';
} // end function addEntry

// send the zip code to be validated and to generate city and state
function validateZip( zip )
{
// build parameter array
var params = '[{"param": "zip", "value": "' + zip + '"}]';
callWebService ( "validateZip", params, showCityState );
} // end function validateZip

// get city and state that were generated using the zip code
// and display them on the page
function showCityState( asyncRequest )
{
// display message while request is being processed
document.getElementById( 'validateZip' ).
innerHTML = "Checking zip...";

// if request has completed successfully, process the response
if ( asyncRequest.readyState == 4 )
{
```

**Fig. 15.9** | Ajax-enabled address-book application. (Part 5 of 10.)

```bash
if ( asyncRequest.status == 200 )
{
// convert the JSON string to an object
var data = asyncRequest.responseText.parseJSON();


// update zip code validity tracker and show city and state
if ( data.Validity == 'Valid' )
{
zipValid = true; // update validity tracker

// display city and state
document.getElementById( 'validateZip' ).innerHTML = '';
document.getElementById( 'city' ).innerHTML = data.City;
document.getElementById( 'state' ).
innerHTML = data.State;
} // end if
else
{
zipValid = false; // update validity tracker
document.getElementById( 'validateZip' ).
innerHTML = data.ErrorText; // display the error

// clear city and state values if they exist
document.getElementById( 'city' ).innerHTML = '';
document.getElementById( 'state' ).innerHTML = '';
} // end else
} // end if
else if ( asyncRequest.status == 500 )
{
document.getElementById( 'validateZip' ).
innerHTML = 'Zip validation service not avaliable';
} // end else if
} // end if
} // end function showCityState

// send the telephone number to the server to validate format
function validatePhone( phone )
{
var params = '[{ "param": "tel", "value": "' + phone + '"}]';
callWebService( "validateTel", params, showPhoneError );
} // end function validatePhone

// show whether the telephone number has correct format
function showPhoneError( asyncRequest )
{
// if request has completed successfully, process the response
if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 )
{
// convert the JSON string to an object
var data = asyncRequest.responseText.parseJSON();

if ( data.ErrorText != "Valid Telephone Format" )
{
```

**Fig. 15.9** | Ajax-enabled address-book application. (Part 6 of 10.)

```bash
phoneValid = false; // update validity tracker
} // end if
else
{
phoneValid = true; // update validity tracker
} // end else

document.getElementById( 'validatePhone' ).
innerHTML = data.ErrorText; // display the error
} // end if
} // end function showPhoneError

// enter the user's data into the database
function saveForm()
{
// retrieve the data from the form
var first = document.getElementById( 'first' ).value;
var last = document.getElementById( 'last' ).value;
var street = document.getElementById( 'street' ).value;
var city = document.getElementById( 'city' ).innerHTML;
var state = document.getElementById( 'state' ).innerHTML;
var zip = document.getElementById( 'zip' ).value;
var phone = document.getElementById( 'phone' ).value;

// check if data is valid
if ( !zipValid || !phoneValid )
{
// display error message
document.getElementById( 'success' ).innerHTML =
'Invalid data entered. Check form for more information';
} // end if
else if ( ( first == "" ) || ( last == "" ) )
{
// display error message
document.getElementById( 'success').innerHTML =
'First Name and Last Name must have a value.';
} // end if
else
{
// hide the form and show the addressbook
document.getElementById( 'addEntry' )
.style.display = 'none';
document.getElementById( 'addressBook' ).
style.display = 'block';

// build the parameter to include in the web service URL
params = '[{"param": "first", "value": "' + first +
'"}, { "param": "last", "value": "' + last +
'"}, { "param": "street", "value": "'+ street +
'"}, { "param": "city", "value": "' + city +
'"}, { "param": "state", "value:": "' + state +
'"}, { "param": "zip", "value": "' + zip +
'"}, { "param": "tel", "value": "' + phone + '"}]';
```

**Fig. 15.9** | Ajax-enabled address-book application. (Part 7 of 10.)

```bash

// call the web service to insert data into the database
callWebService( "addEntry", params, parseData );
} // end else
} // end function saveForm
//-->
</script>
</head>
<body onload = "showAddressBook()">
<div>
<input type = "button" value = "Address Book"
onclick = "showAddressBook()"/>
<input type = "button" value = "Add an Entry" **344** onclick = "addEntry()"/>
</div>
<div id = "addressBook" style = "display : block;">
Search By Last Name:
<input onkeyup = "search( this.value )"/>
<br/>
<div id = "Names">
</div>
</div>
<div id = "addEntry" style = "display : none">
First Name: <input id = 'first'/>
<br/>
Last Name: <input id = 'last'/>
<br/>
<strong> Address: </strong>
<br/>
Street: <input id = 'street'/>
<br/>
City: <span id = "city" class = "validator"></span>
<br/>
State: <span id = "state" class = "validator"></span>
<br/>
Zip: <input id = 'zip' onblur = 'validateZip( this.value )'/>
<span id = "validateZip" class = "validator">
</span>
<br/>
Telephone:<input id = 'phone'
onblur = 'validatePhone( this.value )'/>
<span id = "validatePhone" class = "validator">
</span>
<br/>
<input type = "button" value = "Submit"
onclick = "saveForm()" />
<br/>
<div id = "success" class = "validator">
</div>
</div>
</body>
</html>
```

**Fig. 15.9** | Ajax-enabled address-book application. (Part 8 of 10.)

**Fig. 15.9** | Ajax-enabled address-book application. (Part 9 of 10.)

**Fig. 15.9** | Ajax-enabled address-book application. (Part 10 of 10.)

The application also enables the user to add another entry to the address book by clicking the **addEntry** button (Fig. 15.9(f)). The application displays a form that enables live field validation. As the user fills out the form, the zip-code value is validated and used to generate the city and state (Fig. 15.9(g), Fig. 15.9(h) and Fig. 15.9(i)). The telephone number is validated for correct format (Fig. 15.9(j)). When the Submit button is clicked, the application checks for invalid data and stores the values in a database on the server (Fig. 15.9(k) and Fig. 15.9(l)). You can test-drive this application at test.deitel.com/ examples/iw3htp4/ajax/fig15_09_10/AddressBook.html.

**_Interacting with a Web Service on the Server_**
When the page loads, the onload event (line 339) calls the showAddressBook function to load the address book onto the page. Function showAddressBook (lines 21–29) shows the addressBook element and hides the addEntry element using the HTML DOM (lines 24– 25). Then it calls function callWebService to make an asynchronous request to the server (line 28). Function callWebService requires an array of parameter objects to be sent to the server. In this case, the function we are invoking on the server requires no arguments, so line 27 creates an empty array to be passed to callWebService. Our program uses an ASP.NET web service that we created for this example to do the server-side processing. The web service contains a collection of methods that can be called from a web application.

Function callWebService (lines 32–72) contains the code to call our web service, given a method name, an array of parameter bindings (i.e., the method’s parameter names and argument values) and the name of a callback function. The web-service application and the method that is being called are specified in the request URL (line 35). When sending the request using the GET method, the parameters are concatenated URL starting with a ? symbol and followed by a list of _parameter_\=_value_ bindings, each separated by an &. Lines 39–49 iterate over the array of parameter bindings that was passed as an argument, and add them to the request URL. In this first call, we do not pass any parameters because the web method that returns all the entries requires none. However, future web method calls will send multiple parameter bindings to the web service. Lines 52–71 prepare and send the request, using similar functionality to the previous two examples. There are many types of user interaction in this application, each requiring a separate asynchronous request. For this reason, we pass the appropriate asyncRequest object as an argument to the function specified by the callBack parameter. However, event handlers cannot receive arguments, so lines 57–60 assign an anonymous function to asyncRequest’s onready-statechange property. When this anonymous function gets called, it calls function call-Back and passes the asyncRequest object as an argument. Lines 64–65 set an Accept request header to receive JSON formatted data.

**_Parsing JSON Data_**
Each of our web service’s methods in this example returns a JSON representation of an object or array of objects. For example, when the web application requests the list of names in the address book, the list is returned as a JSON array, as shown in Fig. 15.10. Each object in Fig. 15.10 has the attributes first and last.

Line 11 links the json.js script to the XHTML file so we can parse JSON data. When the XMLHttpRequest object receives the response, it calls function parseData (lines 75–84). Line 81 calls the string’s parseJSON function, which converts the JSON string into a JavaScript object. Then line 82 calls function displayNames (lines 87–106), which

```bash
[
  { first: "Cheryl", last: "Black" },
  { first: "James", last: "Blue" },
  { first: "Mike", last: "Brown" },
  { first: "Meg", last: "Gold" },
];
```

**Fig. 15.10** | Address-book data formatted in JSON.

displays the first and last name of each address-book entry passed to it. Lines 90–91 use the DOM to store the placeholder div element Names in the variable listbox, and clear its content. Once parsed, the JSON string of address-book entries becomes an array, which this function traverses (lines 94–105).

**_Creating XHTML Elements and Setting Event Handlers on the Fly_**
Line 99 uses an XHTML fieldset element to create a box in which the entry will be placed. Line 100 registers function handleOnClick as the onclick event handler for the div created in line 98. This enables the user to expand each address-book entry by clicking it. Function handleOnClick (lines 109–113) calls the getAddress function whenever the user clicks an entry. The parameters are generated dynamically and not evaluated until the getAddress function is called. This enables each function to receive arguments that are specific to the entry the user clicked. Line 102 displays the names on the page by accessing the first (first name) and last (last name) fields of each element of the data array.

Function getAddress (lines 136–166) is called when the user clicks an entry. This request must keep track of the entry where the address is to be displayed on the page. Lines 151–154 set the displayAddress function (lines 168–187) as the callback function, and pass it the entry element as a parameter. Once the request completes successfully, lines 174–178 parse the response and display the addresses. Lines 181–184 update the div’s onclick event handler to hide the address data when that div is clicked again by the user. When the user clicks an expanded entry, function clearField (lines 190–197) is called. Lines 192–196 reset the entry’s content and its onclick event handler to the values they had before the entry was expanded.

**_Implementing Type-Ahead_**
The input element declared in line 348 enables the user to search the address book by last name. As soon as the user starts typing in the input box, the onkeyup event handler calls the search function (lines 117–133), passing the input element’s value as an argument. The search function performs an asynchronous request to locate entries with last names that start with its argument value. When the response is received, the application displays the matching list of names. Each time the user changes the text in the input box, function search is called again to make another asynchronous request.

The search function (lines 117–133) first clears the address-book entries from the page (lines 120–121). If the input argument is the empty string, line 126 displays the entire address book by calling function showAddressBook. Otherwise lines 130–131 send a request to the server to search the data. Line 130 creates a JSON string to represent the parameter object to be sent as an argument to the callWebServices function. Line 131 converts the string to an object and calls the callWebServices function. When the server responds, callback function parseData is invoked, which calls function displayNames to display the results on the page.

**_Implementing a Form with Asynchronous Validation_**
When the **Add an Entry** button (lines 343–344) is clicked, the addEntry function (lines 200–204) is called, which hides the addressBook element and shows the addEntry ele- ment that allows the user to add a person to the address book. The addEntry element (lines 353–380) contains a set of entry fields, some of which have event handlers that enable val- idation that occurs asynchronously as the user continues to interact with the page. When a user enters a zip code, the validateZip function (lines 207–212) is called. This function calls an external web service to validate the zip code. If it is valid, that external web service returns the corresponding city and state. Line 210 builds a parameter object containing validateZip’s parameter name and argument value in JSON format. Line 211 calls the callWebService function with the appropriate method, the parameter object created in line 210 and showCityState (lines 216–258) as the callback function.

Zip-code validation can take a long time due to network delays. The showCityState function is called every time the request object’s readyState property changes. Until the request completes, lines 219–220 display "Checking zip code..." on the page. After the request completes, line 228 converts the JSON response text to an object. The response object has four properties—Validity, ErrorText, City and State. If the request is valid, line 233 updates the zipValid variable that keeps track of zip-code validity (declared at line 18), and lines 237–239 show the city and state that the server generated using the zip code. Otherwise lines 243–245 update the zipValid variable and show the error code. Lines 248–249 clear the city and state elements. If our web service fails to connect to the zip-code validator web service, lines 252–256 display an appropriate error message.

Similarly, when the user enters the telephone number, the function validatePhone (lines 261–265) sends the phone number to the server. Once the server responds, the showPhoneError function (lines 268–288) updates the validatePhone variable (declared at line 17) and shows the message that the web service returned.

When the **Submit** button is clicked, the saveForm function is called (lines 291–335). Lines 294–300 retrieve the data from the form. Lines 303–308 check if the zip code and telephone number are valid, and display the appropriate error message in the Success ele- ment on the bottom of the page. Before the data can be entered into a database on the server, both the first-name and last-name fields must have a value. Lines 309–314 check that these fields are not empty and, if they are empty, display the appropriate error mes- sage. Once all the data entered is valid, lines 318–321 hide the entry form and show the address book. Lines 324–333 build the parameter object using JSON and send the data to the server using the callWebService function. Once the server saves the data, it queries the database for an updated list of entries and returns them; then function parseData dis- plays the entries on the page.

## Dojo Toolkit

Developing web applications in general, and Ajax applications in particular, involves a cer- tain amount of painstaking and tedious work. Cross-browser compatibility, DOM manip- ulation and event handling can get cumbersome, particularly as an application’s size increases. Dojo is a free, open source JavaScript library that takes care of these issues. Dojo reduces asynchronous request handling to a single function call. Dojo also provides cross- browser DOM functions that simplify partial page updates. It covers many more areas of web development, from simple event handling to fully functional rich GUI controls.

To install Dojo, download the Dojo version 0.4.3 from www.Dojotoolkit.org/down-loads to your hard drive. Extract the files from the archive file you downloaded to your web development directory or web server. Including the dojo.js script file in your web application will give you access to all the Dojo functions. To do this, place the following script in the head element of your XHTML document:

```bash
<script type = "text/javascript" src = "_path_/Dojo.js">
```

where _path_ is the relative or complete path to the Dojo toolkit’s files. Quick installation instructions for Dojo are provided at Dojotoolkit.org/book/Dojo-book-0-9/part-1-life-Dojo/quick-installation.

Figure 15.11 is a calendar application that uses Dojo to create the user interface, communicate with the server asynchronously, handle events and manipulate the DOM. The application contains a calendar control that shows the user six weeks of dates (see the screen captures in Fig. 15.11). Various arrow buttons allow the user to traverse the cal- endar. When the user selects a date, an asynchronous request obtains from the server a list of the scheduled events for that date. There is an **Edit** button next to each scheduled event. When the **Edit** button is clicked, the item is replaced by a text box with the item’s content, a **Save** button and a **Cancel** button. When the user presses **Save**, an asynchronous request saves the new value to the server and displays it on the page. This feature, often referred to as **edit-in-place**, is common in Ajax applications. You can test-drive this application at test.deitel.com/examples/iw3htp4/ajax/fig15_11/calendar.html.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 15.11 Calendar.html -->
<!-- Calendar application built with dojo. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<script type = "text/javascript" src = "/dojo043/dojo.js"></script>
<script type = "text/javascript" src = "json.js"></script>
<script type = "text/javascript">
<!--
// specify all the required dojo scripts
dojo.require( "dojo.event.*" ); // use scripts from event package  package
dojo.require( "dojo.widget.*" ); // use scripts from widget package
dojo.require( "dojo.dom.*" ); // use scripts from dom package
dojo.require( "dojo.io.*" ); // use scripts from the io package

// configure calendar event handler
function connectEventHandler()
{
var calendar = dojo.widget.byId( "calendar" ); // get calendar
calendar.setDate( "2007-07-04" );
dojo.event.connect(
calendar, "onValueChanged", "retrieveItems" );
} // end function connectEventHandler
```

**Fig. 15.11** | Calendar application built with Dojo. (Part 1 of 7.)

```bash
// location of CalendarService web service
var webServiceUrl = "/CalendarService/CalendarService.asmx";

// obtain scheduled events for the specified date
function retrieveItems( eventDate )
{
// convert date object to string in yyyy-mm-dd format
var date = dojo.date.toRfc3339( eventDate ).substring( 0, 10 );

// build parameters and call web service
var params = ’[{ "param":"eventDate", "value":"’ +
date + "'}]";
callWebService( 'getItemsByDate', params, displayItems );
} // end function retrieveItems

// call a specific web service asynchronously to get server data
function callWebService( method, params, callback )
{
// url for the asynchronous request
var requestUrl = webServiceUrl + "/" + method;
var params = paramString.parseJSON();

// build the parameter string to append to the url
for ( var i = 0; i < params.length; i++ )
{
// check if it is the first parameter and build
// the parameter string accordingly
if ( i == 0 )
requestUrl = requestUrl + "?" + params[ i ].param +
"=" + params[ i ].value; // add first parameter to url
else
requestUrl = requestUrl + "&" + params[ i ].param +
"=" + params\[ i \].value; // add other parameters to url
} // end for

// call asynchronous request using dojo.io.bind
dojo.io.bind( { url: requestUrl, handler: callback,
accept: "application/json; charset=utf-8" } );
} // end function callWebService

// display the list of scheduled events on the page
function displayItems( type, data, event )
{
if ( type == 'error' ) // if the request has failed
{
alert( 'Could not retrieve the event' ); // display error
} // end if
else
{
var placeholder = dojo.byId( "itemList" ); // get placeholder
placeholder.innerHTML = ''; // clear placeholder
var items = data.parseJSON(); // parse server data
```

**Fig. 15.11** | Calendar application built with Dojo. (Part 2 of 7.)

```bash
// check whether there are events;
// if none then display message
if ( items == "" )
{
placeholder.innerHTML = 'No events for this date.';
}

for ( var i = 0; i < items.length; i++ )
{
// initialize item's container
var item = document.createElement( "div" );
item.id = items[ i ].id; // set DOM id to database id

// obtain and paste the item's description
var text = document.createElement( "div" );
text.innerHTML = items[i].description;
text.id = 'description' + item.id;
dojo.dom.insertAtIndex( text, item, 0 );

// create and insert the placeholder for the edit button
var buttonPlaceHolder = document.createElement( "div" );
dojo.dom.insertAtIndex( buttonPlaceHolder, item, 1 );

// create the edit button and paste it into the container
var editButton = dojo.widget.
createWidget( "Button", {}, buttonPlaceHolder );
editButton.setCaption( "Edit" );
dojo.event.connect(
editButton, 'buttonClick', handleEdit );

// insert item container in the list of items container
dojo.dom.insertAtIndex( item, placeholder, i );
} // end for
} // end else
} // end function displayItems

// send the asynchronous request to get content for editing and
// run the edit-in-place UI
function handleEdit( event )
{
var id = event.currentTarget.parentNode.id; // retrieve id
var params = '[{ "param":"id", "value":"’ + id + ’"}]’;
callWebService( 'getItemById', params, displayForEdit );
} // end function handleEdit

// set up the interface for editing an item
function displayForEdit(type, data, event)
{
if ( type == 'error' ) // if the request has failed
{
alert( 'Could not retrieve the event' ); // display error
}
```

**Fig. 15.11** | Calendar application built with Dojo. (Part 3 of 7.)

```bash
else
{
var item = data.parseJSON(); // parse the item
var id = item.id; // set the id

// create div elements to insert content
var editElement = document.createElement( 'div' );
var buttonElement = document.createElement( 'div' );

// hide the unedited content
var oldItem = dojo.byId( id ); // get the original element
oldItem.id = 'old' + oldItem.id; // change element's id
oldItem.style.display = 'none'; // hide old element
editElement.id = id; // change the "edit" container's id

// create a textbox and insert it on the page
var editArea = document.createElement( 'textarea' );
editArea.id = 'edit' + id; // set textbox id
editArea.innerHTML = item.description; // insert description
dojo.dom.insertAtIndex( editArea, editElement, 0 );

// create button placeholders and insert on the page
// these will be transformed into dojo widgets
var saveElement = document.createElement( 'div' );
var cancelElement = document.createElement( 'div' );
dojo.dom.insertAtIndex( saveElement, buttonElement, 0 );
dojo.dom.insertAtIndex( cancelElement, buttonElement, 1 );
dojo.dom.insertAtIndex( buttonElement, editElement, 1 );

// create "save" and "cancel" buttons
var saveButton =
dojo.widget.createWidget( "Button", {}, saveElement );
var cancelButton =
dojo.widget.createWidget( "Button", {}, cancelElement );
saveButton.setCaption( "Save" ); // set saveButton label
cancelButton.setCaption( "Cancel" ); // set cancelButton text

// set up the event handlers for cancel and save buttons
dojo.event.connect( saveButton, 'buttonClick', handleSave );
dojo.event.connect(
cancelButton, 'buttonClick', handleCancel );

// paste the edit UI on the page
dojo.dom.insertAfter( editElement, oldItem );
} // end else
} // end function displayForEdit

// sends the changed content to the server to be saved
function handleSave( event )
{
// grab user entered data
var id = event.currentTarget.parentNode.parentNode.id;
var descr = dojo.byId( 'edit' + id ).value;
```

**Fig. 15.11** | Calendar application built with Dojo. (Part 4 of 7.)

```bash

// build parameter string and call the web service
var params = '[{ "param":"id", "value":"' + id +
'"}, {"param": "descr", "value":"' + descr + '"}]';
callWebService( 'Save', params, displayEdited );
} // end function handleSave

// restores the original content of the item
function handleCancel( event )
{
var voidEdit = event.currentTarget.parentNode.parentNode;
var id = voidEdit.id; // retrieve the id of the item
dojo.dom.removeNode( voidEdit, true );// remove the edit UI
var old = dojo.byId( 'old' + id ); // retrieve pre-edit version
old.style.display = 'block'; // show pre-edit version
old.id = id; // reset the id
} // end function handleCancel

// displays the updated event information after an edit is saved
function displayEdited( type, data, event )
{
if ( type == 'error' )
{
alert( 'Could not retrieve the event' );
}
else
{
editedItem = data.parseJSON(); // obtain updated description
var id = editedItem.id; // obtain the id
var editElement = dojo.byId( id ); // get the edit UI
dojo.dom.removeNode( editElement, true ); // delete edit UI
var old = dojo.byId( 'old' + id ); // get item container

// get pre-edit element and update its description
var oldText = dojo.byId( 'description' + id );
oldText.innerHTML = editedItem.description;

old.id = id; // reset id
old.style.display = 'block'; // show the updated item
} // end else
} // end function displayEdited

// when the page is loaded, set up the calendar event handler
dojo.addOnLoad( connectEventHandler );
// -->
</script>
<title> Calendar built with dojo </title>
</head>
<body>
Calendar
<div dojoType = "datePicker" style = "float: left"
widgetID = "calendar"></div>
<div id = "itemList" style = "float: left"></div>
```

**Fig. 15.11** | Calendar application built with Dojo. (Part 5 of 7.)

```bash
</body>
</html>
```

**Fig. 15.11** | Calendar application built with Dojo. (Part 6 of 7.)

**Fig. 15.11** | Calendar application built with Dojo. (Part 7 of 7.)

**_Loading Dojo Packages_**
Lines 9–17 load the Dojo framework. Line 9 links the dojo.js script file to the page, giv- ing the script access to all the functions in the Dojo toolkit. Dojo is organized in packages of related functionality. Lines 14–17 use the dojo.require call, provided by the dojo.js script to include the packages we need. The dojo.io package functions communicate with the server, the dojo.event package simplifies event handling, the dojo.widget package provides rich GUI controls, and the dojo.dom package contains additional DOM func- tions that are portable across many different browsers.

The application cannot use any of this functionality until all the packages have been loaded. Line 229 uses the dojo.addOnLoad method to set up the event handling after the page loads. Once all the packages have been loaded, the connectEventHandler function (lines 20–26) is called.

**_Using an Existing Dojo Widget_**
A **Dojo widget** is any predefined user interface element that is part of the Dojo toolkit. The calendar control on the page is the DatePicker widget. To incorporate an existing Dojo widget onto a page, you must set the DojoType attribute of any HTML element to the type of widget that you want it to be (line 236). Dojo widgets also have their own widgetID property (line 237). Line 22 uses the dojo.widget.byId method, rather than the DOM’s document.getElementById method, to obtain the calendar widget element. The dojo.events.connect method links functions together. Lines 24–25 use it to connect the calendar’s onValueChanged event handler to the retrieveItems function. When the user picks a date, a special onValueChanged event that is part of the DatePicker widget calls retrieveItems, passing the selected date as an argument. The retrieveItems function (lines 32–41) builds the parameters for the request to the server, and calls the callWeb-Service function. Line 35 uses the dojo.date.toRfc3339 method to convert the date passed by the calendar control to _yyyy_-_mm_-_dd_ format.

**_Asynchronous Requests in Dojo_**
The callWebService function (lines 44–66) sends the asynchronous request to the spec- ified web-service method. Lines 47–61 build the request URL using the same code as Fig. 15.9. Dojo reduces the asynchronous request to a single call to the dojo.io.bind method (lines 64–65), which works on all the popular browsers such as Firefox, Internet Explorer, Opera, Mozilla and Safari. The method takes an array of parameters, formatted as a JavaScript object. The url parameter specifies the destination of the request, the han- dler parameter specifies the callback function, and the mimetype parameter specifies the format of the response. The handler parameter can be replaced by the load and error parameters. The function passed as load handles successful requests and the function passed as error handles unsuccessful requests.

Response handling is done differently in Dojo. Rather than calling the callback func- tion every time the request’s readyState property changes, Dojo calls the function passed as the “handler” parameter when the request completes. In addition, in Dojo the script does not have access to the request object. All the response data is sent directly to the call- back function The function sent as the handler argument must have three parameters— type, data and event.

In the first request, the function displayItems (lines 69–115) is set as the callback function. Lines 71–74 check if the request is successful, and display an error message if it isn’t. Lines 77–78 obtain the place-holder element (itemList), where the items will be dis- played, and clear its content. Line 79 converts the JSON response text to a JavaScript object, using the same code as the example in Fig. 15.9.

**_Partial Page Updates Using Dojo’s Cross-Browser DOM Manipulation Capabilities_**
The Dojo toolkit (like most other Ajax libraries) provides functionality that enables you to manipulate the DOM in a cross-browser portable manner. Lines 83–86 check if the server-side returned any items, and display an appropriate message if it didn’t. For each item object returned from the server, lines 91–92 create a div element and set its id to the item’s id in the database. Lines 95–97 create a container element for the item’s descrip- tion. Line 98 uses Dojo’s dojo.dom.insertAtIndex method to insert the description ele- ment as the first element in the item’s element.

For each entry, the application creates an **Edit** button that enables the user to edit the event’s content on the page. Lines 101–109 create a Dojo Button widget programmati- cally. Lines 101–102 create a buttonPlaceHolder div element for the button and paste it on the page. Lines 105–106 convert the buttonPlaceHolder element to a Dojo Button widget by calling the dojo.widget.createWidget function. This function takes three parameters—the type of widget to be created, a list of additional widget parameters and the element which is to be converted to a Dojo widget. Line 107 uses the button’s set- Caption method to set the text that appears on the button. Line 112 uses the insertAt Index method to insert the items into the itemList placeholder, in the order in which they were returned from the server.

**_Adding Edit-In-Place Functionality_**
Dojo Button widgets use their own buttonClick event instead of the DOM onclick event to store the event handler. Lines 108–109 use the dojo.event.connect method to connect the buttonClick event of the Dojo Button widget and the handleEdit event han- dler (lines 119–124). When the user clicks the **Edit** button, the Event object gets passed to the event handler as an argument. The Event object’s currentTarget property contains the element that initiated the event. Line 121 uses the currentTarget property to obtain the id of the item. This id is the same as the item’s id in the server database. Line 123 calls the web service’s getItemById method, using the callWebService function to obtain the item that needs to be edited.

Once the server responds, the function displayForEdit (lines 127–178) replaces the item on the screen with the user interface used for editing the item’s content. The code for this is similar to the code in the displayItems function. Lines 129–132 make sure the request was successful and parse the data from the server. Lines 139–140 create the con- tainer elements into which we insert the new user-interface elements. Lines 143–146 hide the element that displays the item and change its id. Now the id of the user-interface ele- ment is the same as the id of the item that it’s editing stored in the database. Lines 149– 152 create the text-box element that will be used to edit the item’s description, paste it into the text box, and paste the resulting text box on the page. Lines 156–173 use the same syntax that was used to create the **Edit** button widget to create **Save** and **Cancel** button widgets. Line 176 pastes the resulting element, containing the text box and two buttons, on the page.

When the user edits the content and clicks the **Cancel** button, the handleCancel function (lines 194–202) restores the item element to what it looked like before the button was clicked. Line 198 deletes the edit UI that was created earlier, using Dojo’s removeNode function. Lines 200–201 show the item with the original element that was used to display the item, and change its id back to the item’s id on the server database.

When the user clicks the **Save** button, the handleSave function (lines 181–191) sends the text entered by the user to the server. Line 185 obtains the text that the user entered in the text box. Lines 188–190 send to the server the id of the item that needs to be updated and the new description.

Once the server responds, displayEdited (lines 205–226) displays the new item on the page. Lines 214–217 contain the same code that was used in handleCancel to remove the user interface used to edit the item and redisplay the element that contains the item. Line 221 changes the item’s description to its new value.

## Wrap-Up

In this chapter, we introduced Ajax and showed how to use it to create Rich Internet Ap- plications (RIAs) that approximate the look, feel and usability of desktop applications. You learned that RIAs have two key attributes—performance and a rich GUI. We dis- cussed that RIA performance comes from Ajax (Asynchronous JavaScript and XML), which uses client-side scripting to make web applications more responsive by separating client-side user interaction and server communication, and running them in parallel.

You learned various ways to develop Ajax applications. We showed how to use “raw” Ajax with its component technologies (XHTML, CSS, JavaScript, dynamic HTML, the DOM, XML and the XMLHttpRequest object) to manage asynchronous requests to the server, then process the server responses (via JavaScript event handling) to perform partial page updates with the DOM on the client. You learned how to implement client/server communication using XML, and how to parse server responses using the DOM.

We discussed the impracticality of “raw” Ajax for developing large-scale applications and the hiding of such portability issues by Ajax toolkits, such as Dojo, Prototype, Script.aculo.us and ASP.NET Ajax, and by RIA environments such as Adobe’s Flex (Chapter 18), Microsoft’s Silverlight (Chapter 19) and JavaServer Faces (Chapters 26– 27). You also learned that these Ajax libraries and RIA environments provide powerful ready-to-use GUI controls and functions that enrich web applications. You used two data formats—XML and JSON .JavaScript Object Notation—for communicating between the server and client. We then built an Ajax application with a rich calendar GUI using the Dojo Ajax toolkit. In the applications we presented, you learned techniques including callback functions for handling asynchronous responses, partial page updates to display response data, JavaScript exception handling, type-ahead capabilities for making sugges- tions to users as they type in a text field and edit-in-place capabilities so users can edit entries directly in a web page.

In subsequent chapters, we use tools such as Adobe Flex, Microsoft Silverlight, Ruby on Rails and JavaServer Faces to build RIAs using Ajax. In Chapter 24, we’ll demonstrate features of the Prototype and Script.aculo.us Ajax libraries, which come with the Ruby on Rails framework. Prototype provides capabilities similar to Dojo. Script.aculo.us provides many “eye candy” effects that enable you to beautify your Ajax applications and create rich interfaces. In Chapter 27, we present Ajax-enabled JavaServer Faces (JSF) components. JSF uses Dojo to implement many of its client-side Ajax capabilities.

## Web Resources

www.deitel.com/ajax

Our _Ajax Resource Center_ contains links to some of the best Ajax resources on the web from which you can learn more about Ajax and its component technologies. Find categorized links to Ajax tools, code, forums, books, libraries, frameworks, conferences, podcasts and more. Check out the tutorials for all skill levels, from introductory to advanced. See our comprehensive list of developer toolkits and libraries. Visit the most popular Ajax commu- nity websites and blogs. Explore many popular commercial and free open-source Ajax ap- plications. Download code snippets and complete scripts that you can use on your own website. Also, be sure to visit our Resource Centers with information on Ajax’s component technologies, including XHTML (www.deitel.com/xhtml/), CSS 2.1 (www.deitel.com/ css21/), XML (www.deitel.com/XML/), and JavaScript (www.deitel.com/javascript/). For a complete list of Resource Centers, visit www.deitel.com/ResourceCenters.html.

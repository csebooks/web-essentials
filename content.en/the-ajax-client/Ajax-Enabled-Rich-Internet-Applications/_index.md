---
title: "Ajax-Enabled Rich Internet Applications"
weight: 12
---

**O B J E C T I V E S** In this chapter you will learn:

■ What Ajax is and why it is important for building Rich Internet Applications.

■ What asynchronous requests are and how they help give web applications the feel of desktop applications.

■ What the XMLHttpRequest object is and how it’s used to create and manage asynchronous requests to servers and to receive asynchronous responses from servers.

■ Methods and properties of the XMLHttpRequest object.

■ How to use XHTML, JavaScript, CSS, XML, JSON and the DOM in Ajax applications.

■ How to use Ajax frameworks and toolkits, specifically Dojo, to conveniently create robust Ajax-enabled Rich Internet Applications.

■ About resources for studying Ajax-related issues such as security, performance, debugging, the “back-button problem” and more.

**_… the challenges are for the designers of these applications: to forget what we think we know about the limitations of the Web, and begin to imagine a wider, richer range of possibilities. It’s going to be fun._ —Jesse James Garrett**

**_Dojo is the standard library JavaScript never had._ —Alex Russell**

**_To know how to suggest is the great art of teaching. To attain it we must be able to guess what will interest …_ —Henri-Fredreic Amiel**

**_It is characteristic of the epistemological tradition to present us with partial scenarios and then to demand whole or categorical answers as it were._ —Avrum Stroll**

**_O! call back yesterday, bid time return._ —William Shakespeare**

15.1 Introduction **589 O**

**u tl**

**in e**

**15.1 Introduction** Despite the tremendous technological growth of the Internet over the past decade, the us- ability of web applications has lagged behind compared to that of desktop applications. Every significant interaction in a web application results in a waiting period while the ap- plication communicates over the Internet with a server. **Rich Internet Applications (RIAs)** are web applications that approximate the look, feel and usability of desktop appli- cations. RIAs have two key attributes—performance and a rich GUI.

RIA performance comes from **Ajax (Asynchronous JavaScript and XML)**, which uses client-side scripting to make web applications more responsive. Ajax applications separate client-side user interaction and server communication, and run them in parallel, reducing the delays of server-side processing normally experienced by the user.

There are many ways to implement Ajax functionality. **“Raw” Ajax** uses JavaScript to send asynchronous requests to the server, then updates the page using the DOM (see Section 15.5). “Raw” Ajax is best suited for creating small Ajax components that asynchro- nously update a section of the page. However, when writing “raw” Ajax you need to deal directly with cross-browser portability issues, making it impractical for developing large- scale applications. These portability issues are hidden by **Ajax toolkits**, such as **Dojo** (Section 15.8), **Prototype**, **Script.aculo.us** and ASP.NET Ajax, which provide powerful ready-to-use controls and functions that enrich web applications, and simplify JavaScript coding by making it cross-browser compatible.

Traditional web applications use XHTML forms (Chapter 4) to build simple and thin GUIs compared to the rich GUIs of Windows, Macintosh and desktop systems in general. We achieve rich GUI in RIAs with Ajax toolkits and with RIA environments such as Adobe’s Flex (Chapter 18), Microsoft’s Silverlight (Chapter 19) and JavaServer Faces (Chapters 26–27). Such toolkits and environments provide powerful ready-to-use con- trols and functions that enrich web applications.

Previous chapters discussed XHTML, CSS, JavaScript, dynamic HTML, the DOM and XML. This chapter uses these technologies to build Ajax-enabled web applications. The client-side of Ajax applications is written in XHTML and CSS, and uses JavaScript to add functionality to the user interface. XML is used to structure the data passed between the server and the client. We’ll also use JSON (JavaScript Object Notation) for this pur- pose. The Ajax component that manages interaction with the server is usually imple-

**15.1** Introduction **15.2** Traditional Web Applications vs. Ajax Applications **15.3** Rich Internet Applications (RIAs) with Ajax **15.4** History of Ajax **15.5** “Raw” Ajax Example Using the XMLHttpRequest Object **15.6** Using XML and the DOM **15.7** Creating a Full-Scale Ajax-Enabled Application **15.8** Dojo Toolkit **15.9** Wrap-Up

**15.10** Web Resources

Summary | Terminology | Self-Review Exercises | Answers to Self-Review Exercises | Exercises

**590** Chapter 15 Ajax-Enabled Rich Internet Applications

mented with JavaScript’s **XMLHttpRequest object**—commonly abbreviated as XHR. The server processing can be implemented using any server-side technology, such as PHP, ASP. NET, JavaServer Faces and Ruby on Rails—each of which we cover in later chapters.

This chapter begins with several examples that build basic Ajax applications using JavaScript and the XMLHttpRequest object. We then build an Ajax application with a rich calendar GUI using the Dojo Ajax toolkit. In subsequent chapters, we use tools such as Adobe Flex, Microsoft Silverlight and JavaServer Faces to build RIAs using Ajax. In Chapter 24, we’ll demonstrate features of the Prototype and Script.aculo.us Ajax libraries, which come with the Ruby on Rails framework (and can be downloaded separately). Pro- totype provides capabilities similar to Dojo. Script.aculo.us provides many “eye candy” effects that enable you to beautify your Ajax applications and create rich interfaces. In Chapter 27, we present Ajax-enabled JavaServer Faces (JSF) components. JSF uses Dojo to implement many of its client-side Ajax capabilities.

**15.2 Traditional Web Applications vs. Ajax Applications** In this section, we consider the key differences between traditional web applications and Ajax-based web applications.

**_Traditional Web Applications_** Figure 15.1 presents the typical interactions between the client and the server in a tradi- tional web application, such as one that uses a user registration form. First, the user fills in the form’s fields, then submits the form (Fig. 15.1, _Step 1_). The browser generates a re- quest to the server, which receives the request and processes it (_Step 2_). The server generates and sends a response containing the exact page that the browser will render (_Step 3_), which causes the browser to load the new page (_Step 4_) and temporarily makes the browser win- dow blank. Note that the client _waits_ for the server to respond and _reloads the entire page_ with the data from the response (_Step 4_). While such a **synchronous request** is being pro-

**Fig. 15.1** | Classic web application reloading the page for every user interaction.

**Se rv**

**er C**

**lie nt** Form

Form

Page 1

Form

Form

Page 2

Form

Form

Page 3

Request 1

Process request

Generate response

Process request

Generate response

Page reloading

Request 2

Page reloading

Form

Form

Page 2

Form

Form

Page 3

**1**

**2**

**3**

**4**

**5**

**6**

**7**

**8**

15.2 Traditional Web Applications vs. Ajax Applications **591**

cessed on the server, the user cannot interact with the client web page. Frequent long pe- riods of waiting, due perhaps to Internet congestion, have led some users to refer to the World Wide Web as the “World Wide Wait.” If the user interacts with and submits an- other form, the process begins again (_Steps 5–8_).

This model was originally designed for a web of hypertext documents—what some people call the “brochure web.” As the web evolved into a full-scale applications platform, the model shown in Fig. 15.1 yielded “choppy” application performance. Every full-page refresh required users to re-establish their understanding of the full-page contents. Users began to demand a model that would yield the responsive feel of desktop applications.

**_Ajax Web Applications_** Ajax applications add a layer between the client and the server to manage communication between the two (Fig. 15.2). When the user interacts with the page, the client creates an XMLHttpRequest object to manage a request (_Step 1_). The XMLHttpRequest object sends the request to the server (_Step 2_) and awaits the response. The requests are **asynchronous**, so the user can continue interacting with the application on the client-side while the server processes the earlier request concurrently. Other user interactions could result in addition- al requests to the server (_Steps 3_ and _4_). Once the server responds to the original request (_Step 5_), the XMLHttpRequest object that issued the request calls a client-side function to process the data returned by the server. This function—known as a **callback function**— uses **partial page updates** (_Step 6_) to display the data in the existing web page _without re- loading the entire page_. At the same time, the server may be responding to the second re- quest (_Step 7_) and the client-side may be starting to do another partial page update (_Step 8_). The callback function updates only a designated part of the page. Such partial page up- dates help make web applications more responsive, making them feel more like desktop applications. The web application does not load a new page while the user interacts with it.

**Fig. 15.2** | Ajax-enabled web application interacting with the server asynchronously.

**Se rv**

**er C**

**lie nt** Form

Form

Page 1

Process request 1

Generate response

Process request 2

Generate response

Request object

Callback function Response processing Request object

Callback function Response processing

Update Update

User interaction initiates asynchronous request

User interaction initiates asynchronous request

Partial page update

Partial page update

**1**

**2**

**3**

**4**

**5**

**6**

**7**

**8**

data data

**592** Chapter 15 Ajax-Enabled Rich Internet Applications

**15.3 Rich Internet Applications (RIAs) with Ajax** Ajax improves the user experience by making interactive web applications more respon- sive. Consider a registration form with a number of fields (e.g., first name, last name e- mail address, telephone number, etc.) and a **Register** (or **Submit**) button that sends the en- tered data to the server. Usually each field has rules that the user’s entries have to follow (e.g., valid e-mail address, valid telephone number, etc.).

When the user clicks **Register**, a classic XHTML form sends the server all of the data to be validated (Fig. 15.3). While the server is validating the data, the user cannot interact with the page. The server finds invalid data, generates a new page identifying the errors in the form and sends it back to the client—which renders the page in the browser. Once the user fixes the errors and clicks the **Register** button, the cycle repeats until no errors are found, then the data is stored on the server. The entire page reloads every time the user submits invalid data.

Ajax-enabled forms are more interactive. Rather than sending the entire form to be validated, entries are validated dynamically as the user enters data into the fields. For example, consider a website registration form that requires a unique e-mail address. When the user enters an e-mail address into the appropriate field, then moves to the next form field to continue entering data, an asynchronous request is sent to the server to validate the e-mail address. If the e-mail address is not unique, the server sends an error message that is displayed on the page informing the user of the problem (Fig. 15.4). By sending each entry asynchronously, the user can address each invalid entry quickly, versus making edits and resubmitting the entire form repeatedly until all entries are valid. Asynchronous

**Fig. 15.3** | Classic XHTML form: User submits entire form to server, which validates the data entered (if any). Server responds indicating fields with invalid or missing data. (Part 1 of 2.)

a) A sample registration form in which the user has not filled in the required fields, but attempts to submit the form anyway by clicking **Register**.

15.3 Rich Internet Applications (RIAs) with Ajax **593**

**Fig. 15.4** | Ajax-enabled form shows errors asynchronously when user moves to another field.

**Fig. 15.3** | Classic XHTML form: User submits entire form to server, which validates the data entered (if any). Server responds indicating fields with invalid or missing data. (Part 2 of 2.)

b) The server responds by indicating all the form fields with missing or invalid data. The user must correct the problems and resubmit the entire form repeatedly until all errors are corrected.

**594** Chapter 15 Ajax-Enabled Rich Internet Applications

requests could also be used to fill some fields based on previous fields (e.g., automatically filling in the “city” and “state” fields based on the zip code entered by the user).

**15.4 History of Ajax** The term Ajax was coined by Jesse James Garrett of Adaptive Path in February 2005, when he was presenting the previously unnamed technology to a client. The technologies of Ajax (XHTML, JavaScript, CSS, the DOM and XML) have all existed for many years.

Asynchronous page updates can be traced back to earlier browsers. In the 1990s, Netscape’s LiveScript made it possible to include scripts in web pages (e.g., web forms) that could run on the client. LiveScript evolved into JavaScript. In 1998, Microsoft intro- duced the XMLHttpRequest object to create and manage asynchronous requests and responses. Popular applications like Flickr and Google’s Gmail use the XMLHttpRequest

object to update pages dynamically. For example, Flickr uses the technology for its text editing, tagging and organizational features; Gmail continuously checks the server for new e-mail; and Google Maps allows you to drag a map in any direction, downloading the new areas on the map without reloading the entire page.

The name Ajax immediately caught on and brought attention to its component tech- nologies. Ajax has become one of the hottest web-development technologies, enabling webtop applications to challenge the dominance of established desktop applications.

**15.5 “Raw” Ajax Example Using the XMLHttpRequest Object** In this section, we use the XMLHttpRequest object to create and manage asynchronous re- quests. The XMLHttpRequest object (which resides on the client) is the layer between the client and the server that manages asynchronous requests in Ajax applications. This object is supported on most browsers, though they may implement it differently—a common is- sue in JavaScript programming. To initiate an asynchronous request (shown in Fig. 15.5), you create an instance of the XMLHttpRequest object, then use its open method to set up the request and its send method to initiate the request. We summarize the XMLHttpRe-

quest properties and methods in Figs. 15.6–15.7. Figure 15.5 presents an Ajax application in which the user interacts with the page by

moving the mouse over book-cover images. We use the onmouseover and onmouseout

events (discussed in Chapter 13) to trigger events when the user moves the mouse over and out of an image, respectively. The onmouseover event calls function getContent with the URL of the document containing the book’s description. The function makes this request asynchronously using an XMLHttpRequest object. When the XMLHttpRequest object receives the response, the book description is displayed below the book images. When the user moves the mouse out of the image, the onmouseout event calls function clearCon-

tent to clear the display box. These tasks are accomplished without reloading the page on the client. You can test-drive this example at test.deitel.com/examples/iw3htp4/

ajax/fig15_05/SwitchContent.html.

**Performance Tip 15.1** _When an Ajax application requests a file from a server, such as an XHTML document or an image, the browser typically caches that file. Subsequent requests for the same file can load it from the browser’s cache rather than making the round trip to the server again._ 15.1

15.5 “Raw” Ajax Example Using the XMLHttpRequest Object **595**

**Software Engineering Observation 15.1** _For security purposes, the XMLHttpRequest object doesn’t allow a web application to request resources from domain names other than the one that served the application. For this reason, the web application and its resources must reside on the same web server (this could be a web server on your local computer).This is commonly known as the **same origin policy (SOP)**. SOP aims to close a vulnerability called **cross-site scripting**, also known as **XSS**, which allows an attacker to compromise a website’s security by injecting a malicious script onto the page from another domain. To learn more about XSS visit en.wikipedia.org/wiki/XSS. To get content from another domain securely, you can implement a server-side proxy—an application on the web application’s web server—that can make requests to other servers on the web application’s behalf._ 15.0

**_Asynchronous Requests_** The function getContent (lines 19–35) sends the asynchronous request. Line 24 creates the XMLHttpRequest object, which manages the asynchronous request. We store the object in the global variable asyncRequest (declared at line 16) so that it can be accessed any- where in the script.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 15.5: SwitchContent.html --> **6** <!-- Asynchronously display content without reloading the page. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <style type="text/css">

**10** .box { border: 1px solid black; **11** padding: 10px } **12** </style> **13** <title>Switch Content Asynchronously</title> **14** <script type = "text/javascript" language = "JavaScript"> **15** <!-- **16** var asyncRequest; // variable to hold XMLHttpRequest object **17 18** // set up and send the asynchronous request **19** function getContent( url ) **20** { **21** // attempt to create the XMLHttpRequest and make the request **22 23 24 25 26 27 28 29 30**

**Fig. 15.5** | Asynchronously display content without reloading the page. (Part 1 of 3.)

try {

asyncRequest = new XMLHttpRequest(); // create request object

// register event handler asyncRequest.onreadystatechange = stateChange; asyncRequest.open( 'GET', url, true ); // prepare the request asyncRequest.send( null ); // send the request

} // end try

**596** Chapter 15 Ajax-Enabled Rich Internet Applications

**31 32 33 34 35** } // end function getContent **36 37** // displays the response data on the page **38** function stateChange() **39** { **40 41 42 43 44 45** } // end function stateChange **46 47** // clear the content of the box **48** function clearContent() **49** { **50** document.getElementById( 'contentArea' ).innerHTML = ''; **51** } // end function clearContent **52** // --> **53** </script> **54** </head> **55** <body> **56** <h1>Mouse over a book for more information.</h1> **57** <img src = **58** "http://test.deitel.com/examples/iw3htp4/ajax/thumbs/cpphtp6.jpg" **59** onmouseover = 'getContent( "cpphtp6.html" )' **60** onmouseout = 'clearContent()'/> **61** <img src = **62** "http://test.deitel.com/examples/iw3htp4/ajax/thumbs/iw3htp4.jpg" **63** onmouseover = 'getContent( "iw3htp4.html" )' **64** onmouseout = 'clearContent()'/> **65** <img src = **66** "http://test.deitel.com/examples/iw3htp4/ajax/thumbs/jhtp7.jpg" **67** onmouseover = 'getContent( "jhtp7.html" )' **68** onmouseout = 'clearContent()'/> **69** <img src = **70** "http://test.deitel.com/examples/iw3htp4/ajax/thumbs/vbhtp3.jpg" **71** onmouseover = 'getContent( "vbhtp3.html" )' **72** onmouseout = 'clearContent()'/> **73** <img src = **74** "http://test.deitel.com/examples/iw3htp4/ajax/thumbs/vcsharphtp2.jpg" **75** onmouseover = 'getContent( "vcsharphtp2.html" )' **76** onmouseout = 'clearContent()'/> **77** <img src = **78** "http://test.deitel.com/examples/iw3htp4/ajax/thumbs/chtp5.jpg" **79** onmouseover = 'getContent( "chtp5.html" )' **80** onmouseout = 'clearContent()'/> **81 82** </body> **83** </html>

**Fig. 15.5** | Asynchronously display content without reloading the page. (Part 2 of 3.)

catch ( exception ) {

alert( 'Request failed.' ); } // end catch

if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 ) {

document.getElementById( 'contentArea' ).innerHTML = asyncRequest.responseText; // places text in contentArea

} // end if

<div class = "box" id = "contentArea">&nbsp;</div>

15.5 “Raw” Ajax Example Using the XMLHttpRequest Object **597**

Line 28 calls the XMLHttpRequest open method to prepare an asynchronous GET

request. In this example, the url parameter specifies the address of an HTML document containing the description of a particular book. When the third argument is true, the

**Fig. 15.5** | Asynchronously display content without reloading the page. (Part 3 of 3.)

a) User hovers over _C++ How to Program_ book cover image, causing an asynchronous request to the server to obtain the book’s description. When the response is received, the application performs a partial page update to display the description.

b) User hovers over _Java How to Program_ book cover image, causing the process to repeat.

**598** Chapter 15 Ajax-Enabled Rich Internet Applications

request is asynchronous. The URL is passed to function getContent in response to the onmouseover event for each image. Line 29 sends the asynchronous request to the server by calling XMLHttpRequest send method. The argument null indicates that this request is not submitting data in the body of the request.

**_Exception Handling_** Lines 22–34 introduce **exception handling**. An **exception** is an indication of a problem that occurs during a program’s execution. The name “exception” implies that the problem occurs infrequently—if the “rule” is that a statement normally executes correctly, then the “excep- tion to the rule” is that a problem occurs. Exception handling enables you to create applica- tions that can resolve (or handle) exceptions—in some cases allowing a program to continue executing as if no problem had been encountered.

Lines 22–30 contain a **try block**, which encloses the code that might cause an excep- tion and the code that should not execute if an exception occurs (i.e., if an exception occurs in a statement of the try block, the remaining code in the try block is skipped). A try block consists of the keyword try followed by a block of code enclosed in curly braces ({}). If there is a problem sending the request—e.g., if a user tries to access the page using an older browser that does not support XMLHttpRequest—the try block terminates imme- diately and a **catch block** (also called a **catch clause** or **exception handler**) catches (i.e., receives) and handles an exception. The catch block (lines 31–34) begins with the key- word catch and is followed by a parameter in parentheses (called the exception parameter) and a block of code enclosed in curly braces. The exception parameter’s name (exception in this example) enables the catch block to interact with a caught exception object (for example, to obtain the name of the exception or an exception-specific error message via the exception object’s name and message properties). In this case, we simply display our own error message 'Request Failed' and terminate the getContent function. The request can fail because a user accesses the web page with an older browser or the content that is being requested is located on a different domain.

**_Callback Functions_** The stateChange function (lines 38–45) is the callback function that is called when the client receives the response data. Line 27 registers function stateChange as the event han- dler for the XMLHttpRequest object’s onreadystatechange event. Whenever the request makes progress, the XMLHttpRequest calls the onreadystatechange event handler. This progress is monitored by the readyState property, which has a value from 0 to 4. The value 0 indicates that the request is not initialized and the value 4 indicates that the request is complete—all the values for this property are summarized in Fig. 15.6. If the request completes successfully (line 40), lines 42–43 use the XMLHttpRequest object’s responseText property to obtain the response data and place it in the div element named contentArea (defined at line 81). We use the DOM’s getElementById method to get this div element, and use the element’s innerHTML property to place the content in the div.

**_XMLHttpRequest Object Properties and Methods_** Figures 15.6 and 15.7 summarize some of the XMLHttpRequest object’s properties and methods, respectively. The properties are crucial to interacting with asynchronous re- quests. The methods initialize, configure and send asynchronous requests.

15.5 “Raw” Ajax Example Using the XMLHttpRequest Object **599**

Property Description

onreadystatechange Stores the callback function—the event handler that gets called when the server responds.

readyState Keeps track of the request’s progress. It is usually used in the call- back function to determine when the code that processes the response should be launched. The readyState value 0 signifies that the request is uninitialized; 1 signifies that the request is loading; 2 signifies that the request has been loaded; 3 signifies that data is actively being sent from the server; and 4 signifies that the request has been completed.

responseText Text that is returned to the client by the server.

responseXML If the server’s response is in XML format, this property contains the XML document; otherwise, it is empty. It can be used like a docu-

ment object in JavaScript, which makes it useful for receiving com- plex data (e.g. populating a table).

status HTTP status code of the request. A status of 200 means that request was successful. A status of 404 means that the requested resource was not found. A status of 500 denotes that there was an error while the server was proccessing the request.

statusText Additional information on the request’s status. It is often used to display the error to the user when the request fails.

**Fig. 15.6** | XMLHttpRequest object properties.

Method Description

open Initializes the request and has two mandatory parameters—method and URL. The method parameter specifies the purpose of the request—typically GET if the request is to take data from the server or POST if the request will contain a body in addition to the head- ers. The URL parameter specifies the address of the file on the server that will generate the response. A third optional boolean parameter specifies whether the request is asynchronous—it’s set to true by default.

send Sends the request to the sever. It has one optional parameter, data, which specifies the data to be POSTed to the server—it’s set to null by default.

setRequestHeader Alters the header of the request. The two parameters specify the header and its new value. It is often used to set the content-type

field.

**Fig. 15.7** | XMLHttpRequest object methods. (Part 1 of 2.)

**600** Chapter 15 Ajax-Enabled Rich Internet Applications

**15.6 Using XML and the DOM** When passing structured data between the server and the client, Ajax applications often use XML because it is easy to generate and parse. When the XMLHttpRequest object re- ceives XML data, it parses and stores the data as an XML DOM object in the responseXML property. The example in Fig. 15.8 asynchronously requests from a server XML docu- ments containing URLs of book-cover images, then displays the images in an HTML ta- ble. The code that configures the asynchronous request is the same as in Fig. 15.5. You can test-drive this application at test.deitel.com/examples/iw3htp4/ajax/fig15_08/ PullImagesOntoPage.html (the book-cover images will be easier to see on the screen).

getResponseHeader Returns the header data that precedes the response body. It takes one parameter, the name of the header to retrieve. This call is often used to determine the response’s type, to parse the response cor- rectly.

getAllResponseHeaders Returns an array that contains all the headers that precede the response body.

abort Cancels the current request.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 15.8: PullImagesOntoPage.html --> **6** <!-- Image catalog that uses Ajax to request XML data asynchronously. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title> Pulling Images onto the Page </title>

**10** <style type = "text/css"> **11** td { padding: 4px } **12** img { border: 1px solid black } **13** </style> **14** <script type = "text/javascript" language = "Javascript"> **15** var asyncRequest; // variable to hold XMLHttpRequest object **16 17** // set up and send the asynchronous request to the XML file **18** function getImages( url ) **19** { **20** // attempt to create the XMLHttpRequest and make the request **21** try **22** { **23** asyncRequest = new XMLHttpRequest(); // create request object **24**

**Fig. 15.8** | Image catalog that uses Ajax to request XML data asynchronously. (Part 1 of 4.)

Method Description

**Fig. 15.7** | XMLHttpRequest object methods. (Part 2 of 2.)

15.6 Using XML and the DOM **601**

**25** // register event handler **26** asyncRequest.onreadystatechange = processResponse; **27** asyncRequest.open( 'GET', url, true ); // prepare the request **28** asyncRequest.send( null ); // send the request **29** } // end try **30** catch ( exception ) **31** { **32** alert( 'Request Failed' ); **33** } // end catch **34** } // end function getImages **35 36** // parses the XML response; dynamically creates a table using DOM and **37** // populates it with the response data; displays the table on the page **38** function processResponse() **39** { **40** // if request completed successfully and responseXML is non-null **41 42 43** { **44** clearTable(); // prepare to display a new set of images **45 46** // get the covers from the responseXML **47 48 49 50 51 52 53 54** // get the placeholder div element named covers **55** var output = document.getElementById( "covers" ); **56 57** // create a table to display the images **58** var imageTable = document.createElement( 'table' ); **59 60** // create the table's body **61** var tableBody = document.createElement( 'tbody' ); **62 63** var rowCount = 0; // tracks number of images in current row **64** var imageRow = document.createElement( "tr" ); // create row **65 66** // place images in row **67** for ( var i = 0; i < covers.length; i++ ) **68** { **69** var cover = covers.item( i ); // get a cover from covers array **70 71** // get the image filename **72** var image = cover.getElementsByTagName( "image" ). **73** item( 0 ).firstChild.nodeValue; **74 75** // create table cell and img element to display the image **76** var imageCell = document.createElement( "td" );

**Fig. 15.8** | Image catalog that uses Ajax to request XML data asynchronously. (Part 2 of 4.)

if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 && asyncRequest.responseXML )

var covers = asyncRequest.responseXML.getElementsByTagName( "cover" )

// get base URL for the images var baseUrl = asyncRequest.responseXML.getElementsByTagName(

"baseurl" ).item( 0 ).firstChild.nodeValue;

**602** Chapter 15 Ajax-Enabled Rich Internet Applications

**77** var imageTag = document.createElement( "img" ); **78 79** // set img element's src attribute **80** imageTag.setAttribute( "src", baseUrl + escape( image ) ); **81** imageCell.appendChild( imageTag ); // place img in cell **82** imageRow.appendChild( imageCell ); // place cell in row **83** rowCount++; // increment number of images in row **84 85** // if there are 6 images in the row, append the row to **86** // table and start a new row **87** if ( rowCount == 6 && i + 1 < covers.length ) **88** { **89** tableBody.appendChild( imageRow ); **90** imageRow = document.createElement( "tr" ); **91** rowCount = 0; **92** } // end if statement **93** } // end for statement **94 95** tableBody.appendChild( imageRow ); // append row to table body **96** imageTable.appendChild( tableBody ); // append body to table **97** output.appendChild( imageTable ); // append table to covers div **98** } // end if **99** } // end function processResponse **100 101** // deletes the data in the table. **102** function clearTable() **103** { **104** document.getElementById( "covers" ).innerHTML = ''; **105** }// end function clearTable **106** </script> **107** </head> **108** <body> **109** <input type = "radio" checked = "unchecked" name ="Books" value = "all" **110** onclick = 'getImages( "all.xml" )'/> All Books **111** <input type = "radio" checked = "unchecked" **112** name = "Books" value = "simply" **113** onclick = 'getImages( "simply.xml" )'/> Simply Books **114** <input type = "radio" checked = "unchecked" **115** name = "Books" value = "howto" **116** onclick = 'getImages( "howto.xml" )'/> How to Program Books **117** <input type = "radio" checked = "unchecked" **118** name = "Books" value = "dotnet" **119** onclick = 'getImages( "dotnet.xml" )'/> .NET Books **120** <input type = "radio" checked = "unchecked" **121** name = "Books" value = "javaccpp" **122** onclick = 'getImages( "javaccpp.xml" )'/> Java, C, C++ Books **123** <input type = "radio" checked = "checked" name = "Books" value = "none" **124** onclick = 'clearTable()'/> None **125** <br/> **126** <div id = "covers"></div> **127** </body> **128** </html>

**Fig. 15.8** | Image catalog that uses Ajax to request XML data asynchronously. (Part 3 of 4.)

15.6 Using XML and the DOM **603**

When the XMLHttpRequest object receives the response, it invokes the callback func- tion processResponse (lines 38–99). We use XMLHttpRequest object’s responseXML

property to access the XML returned by the server. Lines 41–42 check that the request was successful, and that the responseXML property is not empty. The XML file that we requested includes a baseURL node that contains the address of the image directory and a collection of cover nodes that contain image filenames. responseXML is a document

**Fig. 15.8** | Image catalog that uses Ajax to request XML data asynchronously. (Part 4 of 4.)

a) User clicks the **All Books** radio button to display all the book covers. The application sends an asynchronous request to the server to obtain an XML document containing the list of book-cover filenames. When the response is received, the application performs a partial page update to display the set of book covers.

b) User clicks the **How to Program Books** radio button to select a subset of book covers to display. Application sends an asynchronous request to the server to obtain an XML document containing the appropriate subset of book-cover filenames. When the response is received, the application performs a partial page update to display the subset of book covers.

**604** Chapter 15 Ajax-Enabled Rich Internet Applications

object, so we can extract data from it using the XML DOM functions. Lines 47–52 use the DOM’s method **getElementsByTagName** to extract all the image filenames from cover

nodes and the URL of the directory from the baseURL node. Since the baseURL has no child nodes, we use item(0).firstChild.nodeValue to obtain the directory’s address and store it in variable baseURL. The image filenames are stored in the covers array.

As in Fig. 15.5 we have a placeholder div element (line 126) to specify where the image table will be displayed on the page. Line 55 stores the div in variable output, so we can fill it with content later in the program.

Lines 58–93 generate an XHTML table dynamically, using the createElement, setAttribute and appendChild DOM methods. Method createElement creates an XHTML element of the specified type. Method **setAttribute** adds or changes an attribute of an XHTML element. Method appendChild inserts one XHTML element into another. Lines 58 and 61 create the table and tbody elements, respectively. We restrict each row to no more than six images, which we track with variable rowCount variable. Each iteration of the for statement (lines 67–93) obtains the filename of the image to be inserted (lines 69–73), creates a table cell element where the image will be inserted (line 76) and creates an <img> element (line 77). Line 80 sets the image’s src attribute to the image’s URL, which we build by concatenating the filename to the base URL of the XHTML document. Lines 81–82 insert the <img> element into the cell and the cell into the table row. When the row has six cells, it is inserted into the table and a new row is cre- ated (lines 87–92). Once all the rows have been inserted into the table, the table is inserted into the placeholder element covers that is referenced by variable output (line 97). This element is located on the bottom of the web page.

Function clearTable (lines 102–105) is called to clear images when the user switches radio buttons. The text is cleared by setting the innerHTML property of the placeholder ele- ment to the empty string.

**15.7 Creating a Full-Scale Ajax-Enabled Application** Our next example demonstrates additional Ajax capabilities. The web application interacts with a web service to obtain data and to modify data in a server-side database. The web application and server communicate with a data format called JSON (JavaScript Object Notation). In addition, the application demonstrates server-side validation that occurs in parallel with the user interacting with the web application. You can test the application at test.deitel.com/examples/iw3htp4/ajax/fig15_09_10/AddressBook.html.

**_Using JSON_ JSON (JavaScript Object Notation)**—a simple way to represent JavaScript objects as strings—is an alternative way (to XML) for passing data between the client and the server. Each object in JSON is represented as a list of property names and values contained in curly braces, in the following format:

{ _"propertyName1"_ : _value1_, _"propertyName2'_": _value2_ }

Arrays are represented in JSON with square brackets in the following format:

\[ _value1_, _value2_, _value3_ \]

Each value can be a string, a number, a JSON representation of an object, true, false or null. You can convert JSON strings into JavaScript objects with JavaScript’s eval func-

15.7 Creating a Full-Scale Ajax-Enabled Application **605**

tion. To evaluate a JSON string properly, a left parenthesis should be placed at the begin- ning of the string and a right parenthesis at the end of the string before the string is passed to the eval function.

The eval function creates a potential security risk—it executes any embedded Java- Script code in its string argument, possibly allowing a harmful script to be injected into JSON. A more secure way to process JSON is to use a JSON parser. In our examples, we use the open source parser from www.json.org/js.html. When you download its Java- Script file, place it in the same folder as your application. Then, link the json.js file into your XHTML file with the following statement in the head section:

<script type = "text/javascript" src = "json.js">

You can now call function parseJSON on a JSON string to convert it to a JavaScript object. JSON strings are easier to create and parse than XML, and require fewer bytes. For

these reasons, JSON is commonly used to communicate in client/server interaction. For more information on JSON, visit our JSON Resource Center at www.deitel.com/json.

**_Rich Functionality_** The previous examples in this chapter requested data from static files on the server. The example in Fig. 15.9 is an address-book application that communicates with a server-side application. The application uses server-side processing to give the page the functionality and usability of a desktop application. We use JSON to encode server-side responses and to create objects on the fly.

Initially the address book loads a list of entries, each containing a first and last name (Fig. 15.9(a)). Each time the user clicks a name, the address book uses Ajax functionality to load the person’s address from the server and expand the entry _without reloading the page_ (Fig. 15.9(b))—and it does this _in parallel_ with allowing the user to click other names. The application allows the user to search the address book by typing a last name. As the user enters each keystroke, the application asynchronously displays the list of names in which the last name starts with the characters the user has entered so far (Fig. 15.9(c), Fig. 15.9 (d) and Fig. 15.9(e))—a popular feature called **type ahead**.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 15.9 addressbook.html --> **6** <!-- Ajax enabled address book application. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>Address Book</title>

**10** <link rel = "stylesheet" type = "text/css" href = "address.css" /> **11 12** <script type = "text/javascript"> **13** <!-- **14** // URL of the web service **15**

**Fig. 15.9** | Ajax-enabled address-book application. (Part 1 of 10.)

<script type = "text/javascript" src = "json.js"></script>

var webServiceUrl = '/AddressBookWebService/AddressService.asmx';

**606** Chapter 15 Ajax-Enabled Rich Internet Applications

**16 17** var phoneValid = false; // indicates if the telephone is valid **18** var zipValid = false; //indicates if the zip code is valid **19 20** // get a list of names from the server and display them **21** function showAddressBook() **22** { **23** // hide the "addEntry" form and show the address book **24** document.getElementById( 'addEntry' ).style.display = 'none'; **25** document.getElementById( 'addressBook' ).style.display = 'block'; **26 27 28 29** } // end function showAddressBook **30 31** // send the asynchronous request to the web service **32** function callWebService( method, paramString, callBack ) **33** { **34** // build request URL string **35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51** // attempt to send the asynchronous request **52** try **53** { **54** var asyncRequest = new XMLHttpRequest(); // create request **55 56** // set up callback function and store it **57 58 59 60 61 62** // send the asynchronous request **63** asyncRequest.open( 'GET', requestUrl, true ); **64 65 66** asyncRequest.send(); // send request **67** } // end try

**Fig. 15.9** | Ajax-enabled address-book application. (Part 2 of 10.)

var params = "\[\]"; // create an empty object callWebService( 'getAllNames', params, parseData );

var requestUrl = webServiceUrl + "/" + method; var params = paramString.parseJSON();

// build the parameter string to add to the url for ( var i = 0; i < params.length; i++ ) {

// checks whether it is the first parameter and builds // the parameter string accordingly if ( i == 0 )

requestUrl = requestUrl + "?" + params\[ i \].param + "=" + params\[ i \].value; // add first parameter to url

else requestUrl = requestUrl + "&" + params\[ i \].param +

"=" + params\[ i \].value; // add other parameters to url } // end for

asyncRequest.onreadystatechange = function() {

callBack( asyncRequest ); }; // end anonymous function

asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );

15.7 Creating a Full-Scale Ajax-Enabled Application **607**

**68** catch ( exception ) **69** { **70** alert ( 'Request Failed' ); **71** } // end catch **72** } // end function callWebService **73 74** // parse JSON data and display it on the page **75** function parseData( asyncRequest ) **76** { **77** // if request has completed successfully process the response **78** if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 ) **79** { **80** // convert the JSON string to an Object **81 82** displayNames( data ); // display data on the page **83** } // end if **84** } // end function parseData **85 86** // use the DOM to display the retrieved address book entries **87** function displayNames( data ) **88** { **89** // get the placeholder element from the page **90** var listBox = document.getElementById( 'Names' ); **91** listBox.innerHTML = ''; // clear the names on the page **92 93** // iterate over retrieved entries and display them on the page **94** for ( var i = 0; i < data.length; i++ ) **95** { **96** // dynamically create a div element for each entry **97** // and a fieldset element to place it in **98** var entry = document.createElement( 'div' ); **99 100** entry.onclick = handleOnClick; // set onclick event handler **101** entry.id = i; // set the id **102 103** field.appendChild( entry ); // insert entry into the field **104** listBox.appendChild( field ); // display the field **105** } // end for **106** } // end function displayAll **107 108** // event handler for entry's onclick event **109** function handleOnClick() **110** { **111** // call getAddress with the element's content as a parameter **112 113** } // end function handleOnClick **114 115** // search the address book for input **116** // and display the results on the page **117** function search( input ) **118** { **119** // get the placeholder element and delete its content **120** var listBox = document.getElementById( 'Names' );

**Fig. 15.9** | Ajax-enabled address-book application. (Part 3 of 10.)

var data = asyncRequest.responseText.parseJSON();

var field = document.createElement( 'fieldset' );

entry.innerHTML = data\[ i \].First + ' ' + data\[ i \].Last;

getAddress( eval( 'this' ), eval( 'this.innerHTML' ) );

**608** Chapter 15 Ajax-Enabled Rich Internet Applications

**121** listBox.innerHTML = ''; // clear the display box **122 123** // if no search string is specified all the names are displayed **124** if ( input == "" ) // if no search value specified **125** { **126** showAddressBook(); // Load the entire address book **127** } // end if **128** else **129** { **130 131** callWebService( "search", params , parseData ); **132** } // end else **133** } // end function search **134 135** // Get address data for a specific entry **136** function getAddress( entry, name ) **137** { **138** // find the address in the JSON data using the element's id **139** // and display it on the page **140** var firstLast = name.split(" "); // convert string to array **141 142 143 144** // attempt to send an asynchronous request **145** try **146** { **147** // create request object **148** var asyncRequest = new XMLHttpRequest(); **149 150** // create a callback function with 2 parameters **151** asyncRequest.onreadystatechange = function() **152** { **153** displayAddress( entry, asyncRequest ); **154** }; // end anonymous function **155 156** asyncRequest.open( 'GET', requestUrl, true ); **157** asyncRequest.setRequestHeader("Accept", **158** "application/json; charset=utf-8"); // set response datatype **159** asyncRequest.send(); // send request **160** } // end try **161** catch ( exception ) **162** { **163** alert ( 'Request Failed.' ); **164** } // end catch **165** } // end function getAddress **166 167** // clear the entry's data. **168** function displayAddress( entry, asyncRequest ) **169** { **170** // if request has completed successfully, process the response **171** if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 ) **172** {

**Fig. 15.9** | Ajax-enabled address-book application. (Part 4 of 10.)

var params = '\[{"param": "input", "value": "' + input + '"}\]';

var requestUrl = webServiceUrl + "/getAddress?first=" + firstLast\[ 0 \] + "&last=" + firstLast\[ 1 \];

15.7 Creating a Full-Scale Ajax-Enabled Application **609**

**173** // convert the JSON string to an object **174 175 176 177 178 179 180** // clicking on the entry removes the address **181** entry.onclick = function() **182** { **183** clearField( entry, name ); **184** }; // end anonymous function **185 186** } // end if **187** } // end function displayAddress **188 189** // clear the entry's data **190** function clearField( entry, name ) **191** { **192** entry.innerHTML = name; // set the entry to display only the name **193 194 195 196 197** } // end function clearField **198 199** // display the form that allows the user to enter more data **200** function addEntry() **201** { **202** document.getElementById( 'addressBook' ).style.display = 'none'; **203** document.getElementById( 'addEntry' ).style.display = 'block'; **204** } // end function addEntry **205 206** // send the zip code to be validated and to generate city and state **207** function validateZip( zip ) **208** { **209** // build parameter array **210 211 212** } // end function validateZip **213 214** // get city and state that were generated using the zip code **215** // and display them on the page **216** function showCityState( asyncRequest ) **217** { **218** // display message while request is being processed **219 220 221 222** // if request has completed successfully, process the response **223** if ( asyncRequest.readyState == 4 ) **224** {

**Fig. 15.9** | Ajax-enabled address-book application. (Part 5 of 10.)

var data = asyncRequest.responseText.parseJSON(); var name = entry.innerHTML // save the name string entry.innerHTML = name + '<br/>' + data.Street +

'<br/>' + data.City + ', ' + data.State + ', ' + data.Zip + '<br/>' + data.Telephone;

entry.onclick = function() // set onclick event {

getAddress( entry, name ); // retrieve address and display it }; // end function

var params = '\[{"param": "zip", "value": "' + zip + '"}\]'; callWebService ( "validateZip", params, showCityState );

document.getElementById( 'validateZip' ). innerHTML = "Checking zip...";

**610** Chapter 15 Ajax-Enabled Rich Internet Applications

**225** if ( asyncRequest.status == 200 ) **226** { **227** // convert the JSON string to an object **228 229 230** // update zip code validity tracker and show city and state **231** if ( data.Validity == 'Valid' ) **232** { **233** zipValid = true; // update validity tracker **234 235** // display city and state **236** document.getElementById( 'validateZip' ).innerHTML = ''; **237** document.getElementById( 'city' ).innerHTML = data.City; **238** document.getElementById( 'state' ). **239** innerHTML = data.State; **240** } // end if **241** else **242** { **243** zipValid = false; // update validity tracker **244** document.getElementById( 'validateZip' ). **245** innerHTML = data.ErrorText; // display the error **246 247** // clear city and state values if they exist **248** document.getElementById( 'city' ).innerHTML = ''; **249** document.getElementById( 'state' ).innerHTML = ''; **250** } // end else **251** } // end if **252 253 254 255 256** } // end else if **257** } // end if **258** } // end function showCityState **259 260** // send the telephone number to the server to validate format **261** function validatePhone( phone ) **262** { **263 264 265** } // end function validatePhone **266 267** // show whether the telephone number has correct format **268** function showPhoneError( asyncRequest ) **269** { **270** // if request has completed successfully, process the response **271** if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 ) **272** { **273** // convert the JSON string to an object **274 275 276** if ( data.ErrorText != "Valid Telephone Format" ) **277** {

**Fig. 15.9** | Ajax-enabled address-book application. (Part 6 of 10.)

var data = asyncRequest.responseText.parseJSON();

else if ( asyncRequest.status == 500 ) {

document.getElementById( 'validateZip' ). innerHTML = 'Zip validation service not avaliable';

var params = '\[{ "param": "tel", "value": "' + phone + '"}\]'; callWebService( "validateTel", params, showPhoneError );

var data = asyncRequest.responseText.parseJSON();

15.7 Creating a Full-Scale Ajax-Enabled Application **611**

**278** phoneValid = false; // update validity tracker **279** } // end if **280** else **281** { **282** phoneValid = true; // update validity tracker **283** } // end else **284 285** document.getElementById( 'validatePhone' ). **286** innerHTML = data.ErrorText; // display the error **287** } // end if **288** } // end function showPhoneError **289 290** // enter the user's data into the database **291** function saveForm() **292** { **293** // retrieve the data from the form **294** var first = document.getElementById( 'first' ).value; **295** var last = document.getElementById( 'last' ).value; **296** var street = document.getElementById( 'street' ).value; **297** var city = document.getElementById( 'city' ).innerHTML; **298** var state = document.getElementById( 'state' ).innerHTML; **299** var zip = document.getElementById( 'zip' ).value; **300** var phone = document.getElementById( 'phone' ).value; **301 302** // check if data is valid **303** if ( !zipValid || !phoneValid ) **304** { **305** // display error message **306** document.getElementById( 'success' ).innerHTML = **307** 'Invalid data entered. Check form for more information'; **308** } // end if **309** else if ( ( first == "" ) || ( last == "" ) ) **310** { **311** // display error message **312** document.getElementById( 'success').innerHTML = **313** 'First Name and Last Name must have a value.'; **314** } // end if **315** else **316** { **317** // hide the form and show the addressbook **318** document.getElementById( 'addEntry' ) **319** .style.display = 'none'; **320** document.getElementById( 'addressBook' ). **321** style.display = 'block'; **322 323** // build the parameter to include in the web service URL **324 325 326 327 328 329 330**

**Fig. 15.9** | Ajax-enabled address-book application. (Part 7 of 10.)

params = '\[{"param": "first", "value": "' + first + '"}, { "param": "last", "value": "' + last + '"}, { "param": "street", "value": "'+ street + '"}, { "param": "city", "value": "' + city + '"}, { "param": "state", "value:": "' + state + '"}, { "param": "zip", "value": "' + zip + '"}, { "param": "tel", "value": "' + phone + '"}\]';

**612** Chapter 15 Ajax-Enabled Rich Internet Applications

**331 332** // call the web service to insert data into the database **333 334** } // end else **335** } // end function saveForm **336** //--> **337** </script> **338** </head> **339** <body onload = "showAddressBook()"> **340** <div> **341** <input type = "button" value = "Address Book" **342** onclick = "showAddressBook()"/> **343** <input type = "button" value = "Add an Entry" **344** onclick = "addEntry()"/> **345** </div> **346** <div id = "addressBook" style = "display : block;"> **347** Search By Last Name: **348** <input onkeyup = "search( this.value )"/> **349** <br/> **350** <div id = "Names"> **351** </div> **352** </div> **353** <div id = "addEntry" style = "display : none"> **354** First Name: <input id = 'first'/> **355** <br/> **356** Last Name: <input id = 'last'/> **357** <br/> **358** <strong> Address: </strong> **359** <br/> **360** Street: <input id = 'street'/> **361** <br/> **362** City: <span id = "city" class = "validator"></span> **363** <br/> **364** State: <span id = "state" class = "validator"></span> **365** <br/> **366** Zip: <input id = 'zip' onblur = 'validateZip( this.value )'/> **367** <span id = "validateZip" class = "validator"> **368** </span> **369** <br/> **370** Telephone:<input id = 'phone' **371** onblur = 'validatePhone( this.value )'/> **372** <span id = "validatePhone" class = "validator"> **373** </span> **374** <br/> **375** <input type = "button" value = "Submit" **376** onclick = "saveForm()" /> **377** <br/> **378** <div id = "success" class = "validator"> **379** </div> **380** </div> **381** </body> **382** </html>

**Fig. 15.9** | Ajax-enabled address-book application. (Part 8 of 10.)

callWebService( "addEntry", params, parseData );

15.7 Creating a Full-Scale Ajax-Enabled Application **613**

**Fig. 15.9** | Ajax-enabled address-book application. (Part 9 of 10.)

a) Page is loaded. All the entries are displayed. b) User clicks on an entry. The entry expands, showing the address and the telephone.

c) User types "B" in the search field. Application loads the entries whose last names start with "B".

d) User types "Bl" in the search field. Application loads the entries whose last names start with "Bl".

e) User types "Bla" in the search field. Application loads the entries whose last names start with "Bla".

f) User clicks **Add an Entry** button. The form allowing user to add an entry is displayed.

**614** Chapter 15 Ajax-Enabled Rich Internet Applications

**Fig. 15.9** | Ajax-enabled address-book application. (Part 10 of 10.)

g) User types in a nonexistent zip code. An error is displayed.

h) User enters a valid zip code. While the server processes it, **Checking Zip...** is displayed on the page.

i) The server finds the city and state associated with the zip code entered and displays them on the page.

j) The user enters a telephone number and tries to submit the data. The application does not allow this, because the First Name and Last Name are empty.

k) The user enters the last name and the first name and clicks the Submit button.

l) The address book is redisplayed with the new name added in.

15.7 Creating a Full-Scale Ajax-Enabled Application **615**

The application also enables the user to add another entry to the address book by clicking the **addEntry** button (Fig. 15.9(f)). The application displays a form that enables live field validation. As the user fills out the form, the zip-code value is validated and used to generate the city and state (Fig. 15.9(g), Fig. 15.9(h) and Fig. 15.9(i)). The telephone number is validated for correct format (Fig. 15.9(j)). When the Submit button is clicked, the application checks for invalid data and stores the values in a database on the server (Fig. 15.9(k) and Fig. 15.9(l)). You can test-drive this application at test.deitel.com/ examples/iw3htp4/ajax/fig15_09_10/AddressBook.html.

**_Interacting with a Web Service on the Server_** When the page loads, the onload event (line 339) calls the showAddressBook function to load the address book onto the page. Function showAddressBook (lines 21–29) shows the addressBook element and hides the addEntry element using the HTML DOM (lines 24– 25). Then it calls function callWebService to make an asynchronous request to the server (line 28). Function callWebService requires an array of parameter objects to be sent to the server. In this case, the function we are invoking on the server requires no arguments, so line 27 creates an empty array to be passed to callWebService. Our program uses an ASP.NET web service that we created for this example to do the server-side processing. The web service contains a collection of methods that can be called from a web application.

Function callWebService (lines 32–72) contains the code to call our web service, given a method name, an array of parameter bindings (i.e., the method’s parameter names and argument values) and the name of a callback function. The web-service application and the method that is being called are specified in the request URL (line 35). When sending the request using the GET method, the parameters are concatenated URL starting with a ? symbol and followed by a list of _parameter_\=_value_ bindings, each separated by an &. Lines 39–49 iterate over the array of parameter bindings that was passed as an argument, and add them to the request URL. In this first call, we do not pass any parameters because the web method that returns all the entries requires none. However, future web method calls will send multiple parameter bindings to the web service. Lines 52–71 prepare and send the request, using similar functionality to the previous two examples. There are many types of user interaction in this application, each requiring a separate asynchronous request. For this reason, we pass the appropriate asyncRequest object as an argument to the function specified by the callBack parameter. However, event handlers cannot receive arguments, so lines 57–60 assign an anonymous function to asyncRequest’s onready-

statechange property. When this anonymous function gets called, it calls function call-

Back and passes the asyncRequest object as an argument. Lines 64–65 set an Accept

request header to receive JSON formatted data.

**_Parsing JSON Data_** Each of our web service’s methods in this example returns a JSON representation of an object or array of objects. For example, when the web application requests the list of names in the address book, the list is returned as a JSON array, as shown in Fig. 15.10. Each object in Fig. 15.10 has the attributes first and last.

Line 11 links the json.js script to the XHTML file so we can parse JSON data. When the XMLHttpRequest object receives the response, it calls function parseData (lines 75–84). Line 81 calls the string’s parseJSON function, which converts the JSON string into a JavaScript object. Then line 82 calls function displayNames (lines 87–106), which

**616** Chapter 15 Ajax-Enabled Rich Internet Applications

displays the first and last name of each address-book entry passed to it. Lines 90–91 use the DOM to store the placeholder div element Names in the variable listbox, and clear its content. Once parsed, the JSON string of address-book entries becomes an array, which this function traverses (lines 94–105).

**_Creating XHTML Elements and Setting Event Handlers on the Fly_** Line 99 uses an XHTML fieldset element to create a box in which the entry will be placed. Line 100 registers function handleOnClick as the onclick event handler for the div created in line 98. This enables the user to expand each address-book entry by clicking it. Function handleOnClick (lines 109–113) calls the getAddress function whenever the user clicks an entry. The parameters are generated dynamically and not evaluated until the getAddress function is called. This enables each function to receive arguments that are specific to the entry the user clicked. Line 102 displays the names on the page by accessing the first (first name) and last (last name) fields of each element of the data array.

Function getAddress (lines 136–166) is called when the user clicks an entry. This request must keep track of the entry where the address is to be displayed on the page. Lines 151–154 set the displayAddress function (lines 168–187) as the callback function, and pass it the entry element as a parameter. Once the request completes successfully, lines 174–178 parse the response and display the addresses. Lines 181–184 update the div’s onclick event handler to hide the address data when that div is clicked again by the user. When the user clicks an expanded entry, function clearField (lines 190–197) is called. Lines 192–196 reset the entry’s content and its onclick event handler to the values they had before the entry was expanded.

**_Implementing Type-Ahead_** The input element declared in line 348 enables the user to search the address book by last name. As soon as the user starts typing in the input box, the onkeyup event handler calls the search function (lines 117–133), passing the input element’s value as an argument. The search function performs an asynchronous request to locate entries with last names that start with its argument value. When the response is received, the application displays the matching list of names. Each time the user changes the text in the input box, function search is called again to make another asynchronous request.

The search function (lines 117–133) first clears the address-book entries from the page (lines 120–121). If the input argument is the empty string, line 126 displays the entire address book by calling function showAddressBook. Otherwise lines 130–131 send a request to the server to search the data. Line 130 creates a JSON string to represent the parameter object to be sent as an argument to the callWebServices function. Line 131 converts the string to an object and calls the callWebServices function. When the server responds, callback function parseData is invoked, which calls function displayNames to display the results on the page.

**1** \[ { "first": "Cheryl", "last": "Black" }, **2** { "first": "James", "last": "Blue" }, **3** { "first": "Mike", "last": "Brown" }, **4** { "first": "Meg", "last": "Gold" } \]

**Fig. 15.10** | Address-book data formatted in JSON.

15.8 Dojo Toolkit **617**

**_Implementing a Form with Asynchronous Validation_** When the **Add an Entry** button (lines 343–344) is clicked, the addEntry function (lines 200–204) is called, which hides the addressBook element and shows the addEntry ele- ment that allows the user to add a person to the address book. The addEntry element (lines 353–380) contains a set of entry fields, some of which have event handlers that enable val- idation that occurs asynchronously as the user continues to interact with the page. When a user enters a zip code, the validateZip function (lines 207–212) is called. This function calls an external web service to validate the zip code. If it is valid, that external web service returns the corresponding city and state. Line 210 builds a parameter object containing validateZip’s parameter name and argument value in JSON format. Line 211 calls the callWebService function with the appropriate method, the parameter object created in line 210 and showCityState (lines 216–258) as the callback function.

Zip-code validation can take a long time due to network delays. The showCityState

function is called every time the request object’s readyState property changes. Until the request completes, lines 219–220 display "Checking zip code..." on the page. After the request completes, line 228 converts the JSON response text to an object. The response object has four properties—Validity, ErrorText, City and State. If the request is valid, line 233 updates the zipValid variable that keeps track of zip-code validity (declared at line 18), and lines 237–239 show the city and state that the server generated using the zip code. Otherwise lines 243–245 update the zipValid variable and show the error code. Lines 248–249 clear the city and state elements. If our web service fails to connect to the zip-code validator web service, lines 252–256 display an appropriate error message.

Similarly, when the user enters the telephone number, the function validatePhone

(lines 261–265) sends the phone number to the server. Once the server responds, the showPhoneError function (lines 268–288) updates the validatePhone variable (declared at line 17) and shows the message that the web service returned.

When the **Submit** button is clicked, the saveForm function is called (lines 291–335). Lines 294–300 retrieve the data from the form. Lines 303–308 check if the zip code and telephone number are valid, and display the appropriate error message in the Success ele- ment on the bottom of the page. Before the data can be entered into a database on the server, both the first-name and last-name fields must have a value. Lines 309–314 check that these fields are not empty and, if they are empty, display the appropriate error mes- sage. Once all the data entered is valid, lines 318–321 hide the entry form and show the address book. Lines 324–333 build the parameter object using JSON and send the data to the server using the callWebService function. Once the server saves the data, it queries the database for an updated list of entries and returns them; then function parseData dis- plays the entries on the page.

**15.8 Dojo Toolkit** Developing web applications in general, and Ajax applications in particular, involves a cer- tain amount of painstaking and tedious work. Cross-browser compatibility, DOM manip- ulation and event handling can get cumbersome, particularly as an application’s size increases. Dojo is a free, open source JavaScript library that takes care of these issues. Dojo reduces asynchronous request handling to a single function call. Dojo also provides cross- browser DOM functions that simplify partial page updates. It covers many more areas of web development, from simple event handling to fully functional rich GUI controls.

**618** Chapter 15 Ajax-Enabled Rich Internet Applications

To install Dojo, download the Dojo version 0.4.3 from www.Dojotoolkit.org/down-

loads to your hard drive. Extract the files from the archive file you downloaded to your web development directory or web server. Including the dojo.js script file in your web application will give you access to all the Dojo functions. To do this, place the following script in the head element of your XHTML document:

<script type = "text/javascript" src = "_path_/Dojo.js">

where _path_ is the relative or complete path to the Dojo toolkit’s files. Quick installation instructions for Dojo are provided at Dojotoolkit.org/book/Dojo-book-0-9/part-1-

life-Dojo/quick-installation. Figure 15.11 is a calendar application that uses Dojo to create the user interface, com-

municate with the server asynchronously, handle events and manipulate the DOM. The application contains a calendar control that shows the user six weeks of dates (see the screen captures in Fig. 15.11). Various arrow buttons allow the user to traverse the cal- endar. When the user selects a date, an asynchronous request obtains from the server a list of the scheduled events for that date. There is an **Edit** button next to each scheduled event. When the **Edit** button is clicked, the item is replaced by a text box with the item’s content, a **Save** button and a **Cancel** button. When the user presses **Save**, an asynchronous request saves the new value to the server and displays it on the page. This feature, often referred to as **edit-in-place**, is common in Ajax applications. You can test-drive this application at test.deitel.com/examples/iw3htp4/ajax/fig15\_11/calendar.html.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 15.11 Calendar.html --> **6** <!-- Calendar application built with dojo. --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9**

**10** <script type = "text/javascript" src = "json.js"></script> **11** <script type = "text/javascript"> **12** <!-- **13** // specify all the required dojo scripts **14 15 16 17 18 19** // configure calendar event handler **20 21 22 23 24 25 26 27**

**Fig. 15.11** | Calendar application built with Dojo. (Part 1 of 7.)

<script type = "text/javascript" src = "/dojo043/dojo.js"></script>

dojo.require( "dojo.event.\*" ); // use scripts from event package dojo.require( "dojo.widget.\*" ); // use scripts from widget package dojo.require( "dojo.dom.\*" ); // use scripts from dom package dojo.require( "dojo.io.\*" ); // use scripts from the io package

function connectEventHandler() {

var calendar = dojo.widget.byId( "calendar" ); // get calendar calendar.setDate( "2007-07-04" ); dojo.event.connect(

calendar, "onValueChanged", "retrieveItems" ); } // end function connectEventHandler

15.8 Dojo Toolkit **619**

**28** // location of CalendarService web service **29** var webServiceUrl = "/CalendarService/CalendarService.asmx"; **30 31** // obtain scheduled events for the specified date **32** function retrieveItems( eventDate ) **33** { **34** // convert date object to string in yyyy-mm-dd format **35 36 37** // build parameters and call web service **38** var params = ’\[{ "param":"eventDate", "value":"’ + **39** date + "'}\]"; **40** callWebService( 'getItemsByDate', params, displayItems ); **41** } // end function retrieveItems **42 43** // call a specific web service asynchronously to get server data **44** function callWebService( method, params, callback ) **45** { **46** // url for the asynchronous request **47** var requestUrl = webServiceUrl + "/" + method; **48** var params = paramString.parseJSON(); **49 50** // build the parameter string to append to the url **51** for ( var i = 0; i < params.length; i++ ) **52** { **53** // check if it is the first parameter and build **54** // the parameter string accordingly **55** if ( i == 0 ) **56** requestUrl = requestUrl + "?" + params\[ i \].param + **57** "=" + params\[ i \].value; // add first parameter to url **58** else **59** requestUrl = requestUrl + "&" + params\[ i \].param + **60** "=" + params\[ i \].value; // add other parameters to url **61** } // end for **62 63** // call asynchronous request using dojo.io.bind **64 65 66** } // end function callWebService **67 68** // display the list of scheduled events on the page **69** function displayItems( type, data, event ) **70** { **71 72 73 74 75** else **76** { **77 78** placeholder.innerHTML = ''; // clear placeholder **79** var items = data.parseJSON(); // parse server data **80**

**Fig. 15.11** | Calendar application built with Dojo. (Part 2 of 7.)

var date = dojo.date.toRfc3339( eventDate ).substring( 0, 10 );

dojo.io.bind( { url: requestUrl, handler: callback, accept: "application/json; charset=utf-8" } );

if ( type == 'error' ) // if the request has failed {

alert( 'Could not retrieve the event' ); // display error } // end if

var placeholder = dojo.byId( "itemList" ); // get placeholder

**620** Chapter 15 Ajax-Enabled Rich Internet Applications

**81** // check whether there are events; **82** // if none then display message **83** if ( items == "" ) **84** { **85** placeholder.innerHTML = 'No events for this date.'; **86** } **87 88** for ( var i = 0; i < items.length; i++ ) **89** { **90** // initialize item's container **91** var item = document.createElement( "div" ); **92** item.id = items\[ i \].id; // set DOM id to database id **93 94** // obtain and paste the item's description **95** var text = document.createElement( "div" ); **96** text.innerHTML = items\[i\].description; **97** text.id = 'description' + item.id; **98 99 100** // create and insert the placeholder for the edit button **101 102 103 104 105 106 107 108 109 110 111** // insert item container in the list of items container **112 113** } // end for **114** } // end else **115** } // end function displayItems **116 117** // send the asynchronous request to get content for editing and **118** // run the edit-in-place UI **119** function handleEdit( event ) **120** { **121 122** var params = '\[{ "param":"id", "value":"’ + id + ’"}\]’; **123** callWebService( 'getItemById', params, displayForEdit ); **124** } // end function handleEdit **125 126** // set up the interface for editing an item **127** function displayForEdit(type, data, event) **128** { **129** if ( type == 'error' ) // if the request has failed **130** { **131** alert( 'Could not retrieve the event' ); // display error **132** }

**Fig. 15.11** | Calendar application built with Dojo. (Part 3 of 7.)

dojo.dom.insertAtIndex( text, item, 0 );

var buttonPlaceHolder = document.createElement( "div" ); dojo.dom.insertAtIndex( buttonPlaceHolder, item, 1 );

// create the edit button and paste it into the container var editButton = dojo.widget.

createWidget( "Button", {}, buttonPlaceHolder ); editButton.setCaption( "Edit" ); dojo.event.connect(

editButton, 'buttonClick', handleEdit );

dojo.dom.insertAtIndex( item, placeholder, i );

var id = event.currentTarget.parentNode.id; // retrieve id

15.8 Dojo Toolkit **621**

**133** else **134** { **135** var item = data.parseJSON(); // parse the item **136** var id = item.id; // set the id **137 138** // create div elements to insert content **139** var editElement = document.createElement( 'div' ); **140** var buttonElement = document.createElement( 'div' ); **141 142** // hide the unedited content **143** var oldItem = dojo.byId( id ); // get the original element **144** oldItem.id = 'old' + oldItem.id; // change element's id **145** oldItem.style.display = 'none'; // hide old element **146** editElement.id = id; // change the "edit" container's id **147 148** // create a textbox and insert it on the page **149** var editArea = document.createElement( 'textarea' ); **150** editArea.id = 'edit' + id; // set textbox id **151** editArea.innerHTML = item.description; // insert description **152** dojo.dom.insertAtIndex( editArea, editElement, 0 ); **153 154** // create button placeholders and insert on the page **155** // these will be transformed into dojo widgets **156** var saveElement = document.createElement( 'div' ); **157** var cancelElement = document.createElement( 'div' ); **158** dojo.dom.insertAtIndex( saveElement, buttonElement, 0 ); **159** dojo.dom.insertAtIndex( cancelElement, buttonElement, 1 ); **160** dojo.dom.insertAtIndex( buttonElement, editElement, 1 ); **161 162** // create "save" and "cancel" buttons **163** var saveButton = **164** dojo.widget.createWidget( "Button", {}, saveElement ); **165** var cancelButton = **166** dojo.widget.createWidget( "Button", {}, cancelElement ); **167** saveButton.setCaption( "Save" ); // set saveButton label **168** cancelButton.setCaption( "Cancel" ); // set cancelButton text **169 170** // set up the event handlers for cancel and save buttons **171** dojo.event.connect( saveButton, 'buttonClick', handleSave ); **172** dojo.event.connect( **173** cancelButton, 'buttonClick', handleCancel ); **174 175** // paste the edit UI on the page **176** dojo.dom.insertAfter( editElement, oldItem ); **177** } // end else **178** } // end function displayForEdit **179 180** // sends the changed content to the server to be saved **181** function handleSave( event ) **182** { **183** // grab user entered data **184** var id = event.currentTarget.parentNode.parentNode.id; **185** var descr = dojo.byId( 'edit' + id ).value;

**Fig. 15.11** | Calendar application built with Dojo. (Part 4 of 7.)

**622** Chapter 15 Ajax-Enabled Rich Internet Applications

**186 187** // build parameter string and call the web service **188** var params = '\[{ "param":"id", "value":"' + id + **189** '"}, {"param": "descr", "value":"' + descr + '"}\]'; **190** callWebService( 'Save', params, displayEdited ); **191** } // end function handleSave **192 193** // restores the original content of the item **194** function handleCancel( event ) **195** { **196** var voidEdit = event.currentTarget.parentNode.parentNode; **197** var id = voidEdit.id; // retrieve the id of the item **198** // remove the edit UI **199** var old = dojo.byId( 'old' + id ); // retrieve pre-edit version **200** old.style.display = 'block'; // show pre-edit version **201** old.id = id; // reset the id **202** } // end function handleCancel **203 204** // displays the updated event information after an edit is saved **205** function displayEdited( type, data, event ) **206** { **207** if ( type == 'error' ) **208** { **209** alert( 'Could not retrieve the event' ); **210** } **211** else **212** { **213** editedItem = data.parseJSON(); // obtain updated description **214** var id = editedItem.id; // obtain the id **215** var editElement = dojo.byId( id ); // get the edit UI **216** dojo.dom.removeNode( editElement, true ); // delete edit UI **217** var old = dojo.byId( 'old' + id ); // get item container **218 219** // get pre-edit element and update its description **220** var oldText = dojo.byId( 'description' + id ); **221** oldText.innerHTML = editedItem.description; **222 223** old.id = id; // reset id **224** old.style.display = 'block'; // show the updated item **225** } // end else **226** } // end function displayEdited **227 228** // when the page is loaded, set up the calendar event handler **229 230** // --> **231** </script> **232** <title> Calendar built with dojo </title> **233** </head> **234** <body> **235** Calendar **236 237 238** <div id = "itemList" style = "float: left"></div>

**Fig. 15.11** | Calendar application built with Dojo. (Part 5 of 7.)

dojo.dom.removeNode( voidEdit, true );

dojo.addOnLoad( connectEventHandler );

<div dojoType = "datePicker" style = "float: left" widgetID = "calendar"></div>

15.8 Dojo Toolkit **623**

**239** </body> **240** </html>

**Fig. 15.11** | Calendar application built with Dojo. (Part 6 of 7.)

a) DatePicker Dojo widget after the web page loads.

b) User selects a date and the application asynchronously requests a list of events for that date and displays the results with a partial page update.

c) User clicks the **Edit** button to modify an event’s description.

**624** Chapter 15 Ajax-Enabled Rich Internet Applications

**_Loading Dojo Packages_** Lines 9–17 load the Dojo framework. Line 9 links the dojo.js script file to the page, giv- ing the script access to all the functions in the Dojo toolkit. Dojo is organized in packages of related functionality. Lines 14–17 use the dojo.require call, provided by the dojo.js script to include the packages we need. The dojo.io package functions communicate with the server, the dojo.event package simplifies event handling, the dojo.widget package provides rich GUI controls, and the dojo.dom package contains additional DOM func- tions that are portable across many different browsers.

The application cannot use any of this functionality until all the packages have been loaded. Line 229 uses the dojo.addOnLoad method to set up the event handling after the page loads. Once all the packages have been loaded, the connectEventHandler function (lines 20–26) is called.

**_Using an Existing Dojo Widget_** A **Dojo widget** is any predefined user interface element that is part of the Dojo toolkit. The calendar control on the page is the DatePicker widget. To incorporate an existing

**Fig. 15.11** | Calendar application built with Dojo. (Part 7 of 7.)

d) Application performs a partial page update, replacing the original description and the **Edit** button with a text box, **Save** button and **Cancel** button. User modifies the event description and clicks the **Save** button.

d) The **Save** button’s event handler uses an asynchronous request to update the server and uses the server’s response to perform a partial page update, replacing the editing GUI components with the updated description and an **Edit** button.

15.8 Dojo Toolkit **625**

Dojo widget onto a page, you must set the DojoType attribute of any HTML element to the type of widget that you want it to be (line 236). Dojo widgets also have their own wid-

getID property (line 237). Line 22 uses the dojo.widget.byId method, rather than the DOM’s document.getElementById method, to obtain the calendar widget element. The dojo.events.connect method links functions together. Lines 24–25 use it to connect the calendar’s onValueChanged event handler to the retrieveItems function. When the user picks a date, a special onValueChanged event that is part of the DatePicker widget calls retrieveItems, passing the selected date as an argument. The retrieveItems function (lines 32–41) builds the parameters for the request to the server, and calls the callWeb-

Service function. Line 35 uses the dojo.date.toRfc3339 method to convert the date passed by the calendar control to _yyyy_\-_mm_\-_dd_ format.

**_Asynchronous Requests in Dojo_** The callWebService function (lines 44–66) sends the asynchronous request to the spec- ified web-service method. Lines 47–61 build the request URL using the same code as Fig. 15.9. Dojo reduces the asynchronous request to a single call to the dojo.io.bind

method (lines 64–65), which works on all the popular browsers such as Firefox, Internet Explorer, Opera, Mozilla and Safari. The method takes an array of parameters, formatted as a JavaScript object. The url parameter specifies the destination of the request, the han- dler parameter specifies the callback function, and the mimetype parameter specifies the format of the response. The handler parameter can be replaced by the load and error

parameters. The function passed as load handles successful requests and the function passed as error handles unsuccessful requests.

Response handling is done differently in Dojo. Rather than calling the callback func- tion every time the request’s readyState property changes, Dojo calls the function passed as the “handler” parameter when the request completes. In addition, in Dojo the script does not have access to the request object. All the response data is sent directly to the call- back function The function sent as the handler argument must have three parameters— type, data and event.

In the first request, the function displayItems (lines 69–115) is set as the callback function. Lines 71–74 check if the request is successful, and display an error message if it isn’t. Lines 77–78 obtain the place-holder element (itemList), where the items will be dis- played, and clear its content. Line 79 converts the JSON response text to a JavaScript object, using the same code as the example in Fig. 15.9.

**_Partial Page Updates Using Dojo’s Cross-Browser DOM Manipulation Capabilities_** The Dojo toolkit (like most other Ajax libraries) provides functionality that enables you to manipulate the DOM in a cross-browser portable manner. Lines 83–86 check if the server-side returned any items, and display an appropriate message if it didn’t. For each item object returned from the server, lines 91–92 create a div element and set its id to the item’s id in the database. Lines 95–97 create a container element for the item’s descrip- tion. Line 98 uses Dojo’s dojo.dom.insertAtIndex method to insert the description ele- ment as the first element in the item’s element.

For each entry, the application creates an **Edit** button that enables the user to edit the event’s content on the page. Lines 101–109 create a Dojo Button widget programmati- cally. Lines 101–102 create a buttonPlaceHolder div element for the button and paste it on the page. Lines 105–106 convert the buttonPlaceHolder element to a Dojo Button

**626** Chapter 15 Ajax-Enabled Rich Internet Applications

widget by calling the dojo.widget.createWidget function. This function takes three parameters—the type of widget to be created, a list of additional widget parameters and the element which is to be converted to a Dojo widget. Line 107 uses the button’s set- Caption method to set the text that appears on the button. Line 112 uses the insertAt-

Index method to insert the items into the itemList placeholder, in the order in which they were returned from the server.

**_Adding Edit-In-Place Functionality_** Dojo Button widgets use their own buttonClick event instead of the DOM onclick

event to store the event handler. Lines 108–109 use the dojo.event.connect method to connect the buttonClick event of the Dojo Button widget and the handleEdit event han- dler (lines 119–124). When the user clicks the **Edit** button, the Event object gets passed to the event handler as an argument. The Event object’s currentTarget property contains the element that initiated the event. Line 121 uses the currentTarget property to obtain the id of the item. This id is the same as the item’s id in the server database. Line 123 calls the web service’s getItemById method, using the callWebService function to obtain the item that needs to be edited.

Once the server responds, the function displayForEdit (lines 127–178) replaces the item on the screen with the user interface used for editing the item’s content. The code for this is similar to the code in the displayItems function. Lines 129–132 make sure the request was successful and parse the data from the server. Lines 139–140 create the con- tainer elements into which we insert the new user-interface elements. Lines 143–146 hide the element that displays the item and change its id. Now the id of the user-interface ele- ment is the same as the id of the item that it’s editing stored in the database. Lines 149– 152 create the text-box element that will be used to edit the item’s description, paste it into the text box, and paste the resulting text box on the page. Lines 156–173 use the same syntax that was used to create the **Edit** button widget to create **Save** and **Cancel** button widgets. Line 176 pastes the resulting element, containing the text box and two buttons, on the page.

When the user edits the content and clicks the **Cancel** button, the handleCancel

function (lines 194–202) restores the item element to what it looked like before the button was clicked. Line 198 deletes the edit UI that was created earlier, using Dojo’s removeNode function. Lines 200–201 show the item with the original element that was used to display the item, and change its id back to the item’s id on the server database.

When the user clicks the **Save** button, the handleSave function (lines 181–191) sends the text entered by the user to the server. Line 185 obtains the text that the user entered in the text box. Lines 188–190 send to the server the id of the item that needs to be updated and the new description.

Once the server responds, displayEdited (lines 205–226) displays the new item on the page. Lines 214–217 contain the same code that was used in handleCancel to remove the user interface used to edit the item and redisplay the element that contains the item. Line 221 changes the item’s description to its new value.

**15.9 Wrap-Up** In this chapter, we introduced Ajax and showed how to use it to create Rich Internet Ap- plications (RIAs) that approximate the look, feel and usability of desktop applications.

15.10 Web Resources **627**

You learned that RIAs have two key attributes—performance and a rich GUI. We dis- cussed that RIA performance comes from Ajax (Asynchronous JavaScript and XML), which uses client-side scripting to make web applications more responsive by separating client-side user interaction and server communication, and running them in parallel.

You learned various ways to develop Ajax applications. We showed how to use “raw” Ajax with its component technologies (XHTML, CSS, JavaScript, dynamic HTML, the DOM, XML and the XMLHttpRequest object) to manage asynchronous requests to the server, then process the server responses (via JavaScript event handling) to perform partial page updates with the DOM on the client. You learned how to implement client/server communication using XML, and how to parse server responses using the DOM.

We discussed the impracticality of “raw” Ajax for developing large-scale applications and the hiding of such portability issues by Ajax toolkits, such as Dojo, Prototype, Script.aculo.us and ASP.NET Ajax, and by RIA environments such as Adobe’s Flex (Chapter 18), Microsoft’s Silverlight (Chapter 19) and JavaServer Faces (Chapters 26– 27). You also learned that these Ajax libraries and RIA environments provide powerful ready-to-use GUI controls and functions that enrich web applications. You used two data formats—XML and JSON (JavaScript Object Notation—for communicating between the server and client. We then built an Ajax application with a rich calendar GUI using the Dojo Ajax toolkit. In the applications we presented, you learned techniques including callback functions for handling asynchronous responses, partial page updates to display response data, JavaScript exception handling, type-ahead capabilities for making sugges- tions to users as they type in a text field and edit-in-place capabilities so users can edit entries directly in a web page.

In subsequent chapters, we use tools such as Adobe Flex, Microsoft Silverlight, Ruby on Rails and JavaServer Faces to build RIAs using Ajax. In Chapter 24, we’ll demonstrate features of the Prototype and Script.aculo.us Ajax libraries, which come with the Ruby on Rails framework. Prototype provides capabilities similar to Dojo. Script.aculo.us provides many “eye candy” effects that enable you to beautify your Ajax applications and create rich interfaces. In Chapter 27, we present Ajax-enabled JavaServer Faces (JSF) components. JSF uses Dojo to implement many of its client-side Ajax capabilities.

**15.10 Web Resources** www.deitel.com/ajax

Our _Ajax Resource Center_ contains links to some of the best Ajax resources on the web from which you can learn more about Ajax and its component technologies. Find categorized links to Ajax tools, code, forums, books, libraries, frameworks, conferences, podcasts and more. Check out the tutorials for all skill levels, from introductory to advanced. See our comprehensive list of developer toolkits and libraries. Visit the most popular Ajax commu- nity websites and blogs. Explore many popular commercial and free open-source Ajax ap- plications. Download code snippets and complete scripts that you can use on your own website. Also, be sure to visit our Resource Centers with information on Ajax’s component technologies, including XHTML (www.deitel.com/xhtml/), CSS 2.1 (www.deitel.com/ css21/), XML (www.deitel.com/XML/), and JavaScript (www.deitel.com/javascript/). For a complete list of Resource Centers, visit www.deitel.com/ResourceCenters.html.

**628** Chapter 15 Ajax-Enabled Rich Internet Applications

**Summary**

**_Section 15.1 Introduction_** • Despite the tremendous technological growth of the Internet over the past decade, the usability

of web applications has lagged behind compared to desktop applications.

• Rich Internet Applications (RIAs) are web applications that approximate the look, feel and us- ability of desktop applications. RIAs have two key attributes—performance and rich GUI.

• RIA performance comes from Ajax (Asynchronous JavaScript and XML), which uses client-side scripting to make web applications more responsive.

• Ajax applications separate client-side user interaction and server communication, and run them in parallel, making the delays of server-side processing more transparent to the user.

• “Raw” Ajax uses JavaScript to send asynchronous requests to the server, then updates the page using the DOM.

• When writing “raw” Ajax you need to deal directly with cross-browser portability issues, making it impractical for developing large-scale applications.

• Portability issues are hidden by Ajax toolkits, such as Dojo, Prototype and Script.aculo.us, which provide powerful ready-to-use controls and functions that enrich web applications and simplify JavaScript coding by making it cross-browser compatible.

• We achieve rich GUI in RIAs with Ajax toolkits and with RIA environments such as Adobe’s Flex, Microsoft’s Silverlight and JavaServer Faces. Such toolkits and environments provide pow- erful ready-to-use controls and functions that enrich web applications.

• The client-side of Ajax applications is written in XHTML and CSS, and uses JavaScript to add functionality to the user interface.

• XML and JSON are used to structure the data passed between the server and the client.

• The Ajax component that manages interaction with the server is usually implemented with Java- Script’s XMLHttpRequest object—commonly abbreviated as XHR.

**_Section 15.2 Traditional Web Applications vs. Ajax Applications_** • In traditional web applications, the user fills in the form’s fields, then submits the form. The

browser generates a request to the server, which receives the request and processes it. The server generates and sends a response containing the exact page that the browser will render, which causes the browser to load the new page and temporarily makes the browser window blank. The client _waits_ for the server to respond and _reloads the entire page_ with the data from the response.

• While a synchronous request is being processed on the server, the user cannot interact with the client web browser.

• The synchronous model was originally designed for a web of hypertext documents—what some people call the “brochure web.” This model yielded “choppy” application performance.

• In an Ajax application, when the user interacts with a page, the client creates an XMLHttpRequest

object to manage a request. The XMLHttpRequest object sends the request to and awaits the re- sponse from the server. The requests are asynchronous, allowing the user to continue interacting with the application while the server processes the request concurrently. When the server re- sponds, the XMLHttpRequest object that issued the request invokes a callback function, which typically uses partial page updates to display the returned data in the existing web page _without reloading the entire page_.

• The callback function updates only a designated part of the page. Such partial page updates help make web applications more responsive, making them feel more like desktop applications.

Summary **629**

**_Section 15.3 Rich Internet Applications (RIAs) with Ajax_** • A classic XHTML registration form sends all of the data to be validated to the server when the

user clicks the **Register** button. While the server is validating the data, the user cannot interact with the page. The server finds invalid data, generates a new page identifying the errors in the form and sends it back to the client—which renders the page in the browser. Once the user fixes the errors and clicks the **Register** button, the cycle repeats until no errors are found, then the data is stored on the server. The entire page reloads every time the user submits invalid data.

• Ajax-enabled forms are more interactive. Entries are validated dynamically as the user enters data into the fields. If a problem is found, the server sends an error message that is asynchronously displayed to inform the user of the problem. Sending each entry asynchronously allows the user to address invalid entries quickly, rather than making edits and resubmitting the entire form re- peatedly until all entries are valid. Asynchronous requests could also be used to fill some fields based on previous fields’ values.

**_Section 15.4 History of Ajax_** • The term Ajax was coined by Jesse James Garrett of Adaptive Path in February 2005, when he

was presenting the previously unnamed technology to a client.

• All of the technologies involved in Ajax (XHTML, JavaScript, CSS, dynamic HTML, the DOM and XML) have existed for many years.

• In 1998, Microsoft introduced the XMLHttpRequest object to create and manage asynchronous requests and responses.

• Popular applications like Flickr, Google’s Gmail and Google Maps use the XMLHttpRequest ob- ject to update pages dynamically.

• The name Ajax immediately caught on and brought attention to its component technologies. Ajax has quickly become one of the hottest technologies in web development, as it enables web- top applications to challenge the dominance of established desktop applications.

**_Section 15.5 “Raw” Ajax Example using the XMLHttpRequest Object_** • The XMLHttpRequest object (which resides on the client) is the layer between the client and the

server that manages asynchronous requests in Ajax applications. This object is supported on most browsers, though they may implement it differently.

• To initiate an asynchronous request, you create an instance of the XMLHttpRequest object, then use its open method to set up the request, and its send method to initiate the request.

• When an Ajax application requests a file from a server, the browser typically caches that file. Sub- sequent requests for the same file can load it from the browser’s cache.

• For security purposes, the XMLHttpRequest object does not allow a web application to request re- sources from servers other than the one that served the web application.

• Making a request to a different server is known as cross-site scripting (also known as XSS). You can implement a server-side proxy—an application on the web application’s web server—that can make requests to other servers on the web application’s behalf.

• When the third argument to XMLHttpRequest method open is true, the request is asynchronous.

• An exception is an indication of a problem that occurs during a program’s execution.

• Exception handling enables you to create applications that can resolve (or handle) exceptions—in some cases allowing a program to continue executing as if no problem had been encountered.

• A try block encloses code that might cause an exception and code that should not execute if an exception occurs. A try block consists of the keyword try followed by a block of code enclosed in curly braces ({}).

**630** Chapter 15 Ajax-Enabled Rich Internet Applications

• When an exception occurs, a try block terminates immediately and a catch block (also called a catch clause or exception handler) catches (i.e., receives) and handles an exception.

• The catch block begins with the keyword catch and is followed by an exception parameter in parentheses and a block of code enclosed in curly braces.

• The exception parameter’s name enables the catch block to interact with a caught exception ob- ject, which contains name and message properties.

• A callback function is registered as the event handler for the XMLHttpRequest object’s onready- statechange event. Whenever the request makes progress, the XMLHttpRequest calls the onreadystatechange event handler.

• Progress is monitored by the readyState property, which has a value from 0 to 4. The value 0 indicates that the request is not initialized and the value 4 indicates that the request is complete.

**_Section 15.6 Using XML and the DOM_** • When passing structured data between the server and the client, Ajax applications often use XML

because it consumes little bandwidth and is easy to parse.

• When the XMLHttpRequest object receives XML data, the XMLHttpRequest object parses and stores the data as a DOM object in the responseXML property.

• The XMLHttpRequest object’s responseXML property contains the XML returned by the server.

• DOM method createElement creates an XHTML element of the specified type.

• DOM method setAttribute adds or changes an attribute of an XHTML element.

• DOM method appendChild inserts one XHTML element into another.

• The innerHTML property of a DOM element can be used to obtain or change the XHTML that is displayed in a particular element.

**_Section 15.7 Creating a Full-Scale Ajax-Enabled Application_** • JSON (JavaScript Object Notation)—a simple way to represent JavaScript objects as strings—is

an alternative way (to XML) for passing data between the client and the server.

• Each JSON object is represented as a list of property names and values contained in curly braces.

• An array is represented in JSON with square brackets containing a comma-separated list of val- ues.

• Each value in a JSON array can be a string, a number, a JSON representation of an object, true, false or null.

• JavaScript’s eval function can convert JSON strings into JavaScript objects. To evaluate a JSON string properly, a left parenthesis should be placed at the beginning of the string and a right pa- renthesis at the end of the string before the string is passed to the eval function.

• The eval function creates a potential security risk—it executes any embedded JavaScript code in its string argument, possibly allowing a harmful script to be injected into JSON. A more secure way to process JSON is to use a JSON parser

• JSON strings are easier to create and parse than XML and require fewer bytes. For these reasons, JSON is commonly used to communicate in client/server interaction.

• When a request is sent using the GET method, the parameters are concatenated to the URL. URL parameter strings start with a ? symbol and have a list of _parameter_\-_value_ bindings, each separated by an &.

• To implement type-ahead, you can use an element’s onkeyup event handler to make asynchro- nous requests.

Summary **631**

**_Section 15.8 Dojo Toolkit_** • Developing web applications in general, and Ajax applications in particular, involves a certain

amount of painstaking and tedious work. Cross-browser compatibility, DOM manipulation and event handling can get cumbersome, particularly as an application’s size increases. Dojo is a free, open source JavaScript library that takes care of these issues.

• Dojo reduces asynchronous request handling to a single function call.

• Dojo provides cross-browser DOM functions that simplify partial page updates. It also provides event handling and rich GUI controls.

• To install Dojo, download the latest release from www.Dojotoolkit.org/downloads to your hard drive. Extract the files from the archive file you downloaded to your web development directory or web server. To include the Dojo.js script file in your web application, place the following script in the head element of your XHTML document:

<script type = "text/javascript" src = "_path_/Dojo.js">

where _path_ is the relative or complete path to the Dojo toolkit’s files.

• Edit-in-place enables a user to modify data directly in the web page, a common feature in Ajax applications.

• Dojo is organized in packages of related functionality.

• The dojo.require method is used to include specific Dojo packages.

• The dojo.io package functions communicate with the server, the dojo.event package simplifies event handling, the dojo.widget package provides rich GUI controls, and the dojo.dom package contains additional DOM functions that are portable across many different browsers.

• A Dojo widget is any predefined user interface element that is part of the Dojo toolkit.

• To incorporate an existing Dojo widget onto a page, you must set the dojoType attribute of any HTML element to the type of widget that you want it to be.

• The dojo.widget.byId method can be used to obtain a Dojo widget.

• The dojo.events.connect method links functions together.

• The dojo.date.toRfc3339 method converts a date to _yyyy_\-_mm_\-_dd_ format.

• The dojo.io.bind method configures and sends asynchronous requests. The method takes an array of parameters, formatted as a JavaScript object. The url parameter specifies the destination of the request, the handler parameter specifies the callback function, and the mimetype parameter specifies the format of the response. The handler parameter can be replaced by the load and er-

ror parameters. The function passed as the load handler processes successful requests and the function passed as the error handler processes unsuccessful requests.

• Dojo calls the function passed as the handler parameter only when the request completes.

• In Dojo, the script does not have access to the request object. All the response data is sent directly to the callback function.

• The function sent as the handler argument must have three parameters—type, data and event.

• The Dojo toolkit (like most other Ajax libraries) provides functionality that enables you to ma- nipulate the DOM in a cross-browser manner.

• Dojo’s dojo.dom.insertAtIndex method inserts an element at the specified index in the DOM.

• Dojo’s removeNode function removes an element from the DOM.

• Dojo Button widgets use their own buttonClick event instead of the DOM onclick event to store the event handler.

• The Event object’s currentTarget property contains the element that initiated the event.  

**632** Chapter 15 Ajax-Enabled Rich Internet Applications

**Terminology** Ajax Ajax toolkit asynchronous request callback function catch block catch clause catch keyword cross-browser compatibility cross-site scripting (XSS) Dojo Ajax library edit-in-place exception exception handler exception handling GET method of XMLHttpRequest object getResponseHeader method of XMLHttpRequest

object JavaScript Object Notation (JSON) onReadyStateChange property of the XMLHt-

tpRequest object open method of XMLHttpRequest

partial page update Prototype Ajax library “raw” Ajax readyState property of XMLHttpRequest object responseText property of XMLHttpRequest ob-

ject responseXML property of XMLHttpRequest object same origin policy (SOP) Script.aculo.us Ajax library send method of XMLHttpRequest setRequestHeader method of XMLHttpRequest

object status property of XMLHttpRequest object statusText property of XMLHttpRequest object synchronous request try block try keyword type ahead XHR (abbreviation for XMLHttpRequest) XMLHttpRequest object

**Self-Review Exercises 15.1** Fill in the blanks in each of the following statements:

a) Ajax applications use requests to create Rich Internet Applications. b) In Ajax applications, the object manages asynchronous interaction with the

server. c) The event handler called when the server responds is known as a(n) function. d) The attribute can be accessed through the DOM to update an XHTML el-

ement’s content without reloading the page. e) JavaScript’s XMLHttpRequest object is commonly abbreviated as . f) is a simple way to represent JavaScript objects as strings. g) Making a request to a different server is known as . h) JavaScript’s function can convert JSON strings into JavaScript objects. i) A(n) encloses code that might cause an exception and code that should not

execute if an exception occurs. j) The XMLHttpRequest object’s contains the XML returned by the server.

**15.2** State whether each of the following is _true_ or _false_. If _false_, explain why. a) Ajax applications must use XML for server responses. b) The technologies that are used to develop Ajax applications have existed since the

1990s. c) The event handler that processes the response is stored in the readyState property of

XMLHttpRequest. d) An Ajax application can be implemented so that it never needs to reload the page on

which it runs. e) The responseXML property of the XMLHttpRequest object stores the server’s response as

a raw XML string.  

Answers to Self-Review Exercises **633**

f) The Dojo toolkit (like most other Ajax libraries) provides functionality that enables you to manipulate the DOM in a cross-browser manner.

g) An exception indicates successful completion of a program’s execution. h) When the third argument to XMLHttpRequest method open is false, the request is asyn-

chronous. i) For security purposes, the XMLHttpRequest object does not allow a web application to

request resources from servers other than the one that served the web application. j) The innerHTML property of a DOM element can be used to obtain or change the XHT-

ML that is displayed in a particular element.

**Answers to Self-Review Exercises 15.1** a) asynchronous. b) XMLHttpRequest. c) callback. d) innerHTML. e) XHR. f) JSON. g) cross-site scripting (or XSS). h) eval. i) try block. j) responseXML property.

**15.2** a) False. Ajax applications can use any type of textual data as a response. For example, we used JSON in this chapter.

b) True. c) False. readyState is the property that keeps track of the request’s progress. The event

handler is stored in the onReadyStateChange property. d) True. e) False. If the response data has XML format, the XMLHttpRequest object parses it and

stores it in a document object. f) True. g) False. An exception is an indication of a problem that occurs during a program’s execu-

tion. h) False. The third argument to XMLHttpRequest method open must be true to make an

asynchronous request. i) True. j) True.

**Exercises 15.3** Describe the differences between client/server interactions in traditional web applications and client/server interactions in Ajax web applications.

**15.4** Consider the AddressBook application in Fig. 15.9. Describe how you could reimplement the type-ahead capability so that it could perform the search using data previously downloaded rath- er than making an asynchronous request to the server after every keystroke.

**15.5** Describe each of the following terms in the context of Ajax: a) type-ahead b) edit-in-place c) partial page update d) asynchronous request e) XMLHttpRequest

f) “raw” Ajax g) callback function h) same origin policy i) Ajax libraries j) RIA

\[**_Note to Instructors and Students:_** Due to security restrictions on using XMLHttpRequest, Ajax applications must be placed on a web server (even one on your local computer) to enable the appli-  

**634** Chapter 15 Ajax-Enabled Rich Internet Applications

cations to work correctly, and when they need to access other resources, those must reside on the same web server. **_Students:_** You’ll need to work closely with your instructors to understand your lab setup so you can run your solutions to the exercises (the examples are already posted on our web server) and to run many of the other server-side applications that you’ll learn later in the book.\]

**15.6** The XML files used in the book-cover catalog example (Fig. 15.8) also store the titles of the books in a title attribute of each cover node. Modify the example so that every time the mouse hovers over an image, the book’s title is displayed below the image.

**15.7** Create an Ajax-enabled version of the feedback form from Fig. 4.13. As the user moves be- tween form fields, ensure that each field is non-empty. For the e-mail field, ensure that the e-mail address has valid format. In addition, create an XML file that contains a list of email addresses that are not allowed to post feedback. Each time the user enters an e-mail address check whether it is on that list; if so, display an appropriate message.

**15.8** Create an Ajax-based product catalog that obtains its data from JSON files located on the server. The data should be separated into four JSON files. The first file should be a summary file, containing a list of products. Each product should have a title, an image filename for a thumbnail image and a price. The second file should contain a list of descriptions for each product. The third file should contain a list of filenames for the full-size product images. The last file should contain a list of the thumbnail image file names. Each item in a catalogue should have a unique ID that should be included with the entries for that product in every file. Next, create an Ajax-enabled web page that displays the product information in a table. The catalog should initially display a list of product names with their associated thumbnail images and prices. When the mouse hovers over a thumbnail image, the larger product image should be displayed. When the user moves the mouse away from that image, the original thumbnail should be redisplayed. You should provide a button that the user can click to display the product description.

**15.9** Create a version of Exercise 15.8 that uses Dojo’s capabilities and widgets to display the product catalog. Modify the asynchronous request’s to use dojo.io.bind functions rather than raw Ajax. Use Dojo’s DOM functionality to place elements on the page. Improve the look of the page by using Dojo’s button widgets rather than XHTML button elements..

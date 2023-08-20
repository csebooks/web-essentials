---
title: "Adobe® Flex™ 2 and Rich Internet Applications"
weight: 3
---

**O B J E C T I V E S** In this chapter you will learn:

■ What Flex is and what it’s used for.

■ How to design user interfaces in Flex’s user interface markup language, MXML.

■ How to embed multimedia in a Flex application.

■ How to use data binding to create responsive user interfaces.

■ How to access XML data from a Flex application.

■ Client-side scripting in ActionScript 3.0, Flex’s object- oriented scripting language.

■ How to interact with a web service.

■ How to create an advanced user interface.

■ How the Adobe Integrated Runtime allows Flex applications to run on the desktop without an Internet connection.

**_Becoming more flexible, open- minded, having a capacity to deal with change is a good thing._ —Eda Le Shan**

**_We wove a web in childhood, A web of sunny air._ —Charlotte Brontë**

**_Genius is the ability to put into effect what is on your mind._ —F. Scott Fitzgerald**

**_A fair request should be followed by the deed in silence._ —Dante**

**_The transition from cause to effect, from event to event, is often carried on by secret steps, which our foresight cannot divine, and our sagacity is unable to trace._ —Joseph Addison**

**712** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications **O**

**u tl**

**in e**

**18.1 Introduction** In Chapter 15, we introduced Ajax, which uses a combination of XHTML, JavaScript and XML to produce a web application with a desktop-like feel through client-side processing. In this chapter, we introduce **Adobe Flex**, another means of achieving that same goal. Flex uses Adobe’s ubiquitous Flash platform to deliver a rich graphical user interface backed by **ActionScript 3**, Adobe’s implementation of **ECMAScript 4** (better known as JavaScript 2). The relationship between Flex and ActionScript is similar to that between Ajax libraries and JavaScript. The powerful graphical capabilities and cross-platform nature of Flash al- low web developers to deliver Rich Internet Applications (RIAs) to a large user base. The term RIA was coined in 2001 by Macromedia, the creator of Flash and Flex; Adobe ac- quired Macromedia in 2005.

Flex provides user interface library elements that can easily be accessed and custom- ized. You can see these user interface elements in action using Adobe’s Flex 2 Component Explorer at examples.adobe.com/flex2/inproduct/sdk/explorer/explorer.html. The user interface library helps you present a consistent user experience in all applications, a quality that various Ajax and Flash applications lack. Additionally, Flash has the advan- tage of a large installed base—98.6% penetration for Flash 6 and up, and 84.0% penetra- tion for Flash 9 in the United States as of March 2007.1 This allows applications developed in Flex to be used on most Windows, Mac and Linux computers. Since the Flash engine is virtually equivalent across browsers and platforms, Flex developers can avoid the cross-platform conflicts of Ajax and even Java. This significantly reduces devel- opment time.

The Flex framework enables a wide variety of web applications, from simple image viewers to RSS feed readers to complex data analysis tools. This flexibility is partly derived from Flex’s separation of the user interface from the data. Visually appealing and consis- tent user interfaces are easily described using the **MXML markup language**, which is con- verted to Flash’s executable **SWF (Shockwave Flash)** format when the application is compiled.

**18.1** Introduction **18.2** Flex Platform Overview **18.3** Creating a Simple User Interface **18.4** Accessing XML Data from Your Application **18.5** Interacting with Server-Side Applications **18.6** Customizing Your User Interface **18.7** Creating Charts and Graphs **18.8** Connection-Independent RIAs on the Desktop: Adobe Integrated Runtime (AIR) **18.9** Flex 3 Beta

**18.10** Wrap-Up **18.11** Web Resources

Summary | Terminology | Self-Review Exercises | Answers to Self-Review Exercises | Exercises

1\. Adobe Flash Player Version Penetration, March 2007, www.adobe.com/products/player\_census/ flashplayer/version_penetration.html.

18.2 Flex Platform Overview **713**

Flex is appropriate for online stores, where Flex’s versatile user interface library allows for drag-and-drop, dynamic content, multimedia, visual feedback and more. Applications that require real-time streaming data benefit from Flex’s ability to accept data “pushed” from the server and instantly update content, without constantly polling the server as some Ajax applications do. Applications that require data visualization benefit from Flex’s Charting library which can create interactive and customized charts and graphs. Action- Script adds to the power of the Flex user interface library by allowing you to code powerful logic into your Flex applications.

In this chapter, you’ll learn how to implement these elements in real-world applica- tions. You’ll run the examples from your local computer as well as from deitel.com. A comprehensive list of Flex resources is available in our Flex Resource Center at www.deitel.com/flex. Another helpful resource is Adobe’s Flex 2 Language Reference at www.adobe.com/go/flex2\_apiref.

**18.2 Flex Platform Overview** The Flex platform requires the Flash Player 9 runtime environment. Flash Player 9 provides the **ActionScript Virtual Machine** and graphical capabilities that execute Flex applications. Flash Player 9, as described in Chapters 16–17, is a multimedia-rich application environ- ment that runs on most platforms. Flash Player installation is detailed in those chapters, but for end users, only the **Flash Player 9** browser plug-in is required. The plug-in, including a debug version, is included as part of the **Flex SDK (Software Development Kit)** installa- tion. Flex applications are essentially Flash programs that use the Flex framework of user interface elements, web services, animations and more. The Flex development environment is programming-centric in contrast to the animation-centric Flash authoring tool.

In addition to describing user interfaces, MXML can describe web services, data objects, visual effects and more. Flex’s user interface elements are much richer and more consistent than those of HTML and AJAX because they’re rendered the same way on all platforms by the Flash player. The root element of every MXML application is the **Appli- cation element** (<mx:Application>), inside which all Flex elements reside.

The Flex SDK is a free download, which you can get from www.adobe.com/prod-

ucts/flex/downloads. It includes an MXML compiler and debugger, the Flex frame- work, the user interface components, and some templates and examples. You can extract the zip file anywhere on your computer. The compiler and debugger included with the Flex SDK are command-line utilities. They’re written in Java, so you must have Java Runtime Edition 1.4.2_06 (or later) installed. To check your current version, run java -

version in your command line. ActionScript 3 is Adobe’s object-oriented scripting language. Flash Player 9 uses ver-

sion 2 of the ActionScript Virtual Machine (AVM2), which adds support for ActionScript 3 and provides many performance improvements over the previous version. This virtual machine is being submitted as open source to the Mozilla Firefox project to provide sup- port for ActionScript 3 and JavaScript 2. This engine, called Tamarin, is slated to be included in Firefox 4.

ActionScript 3 supports such object-oriented capabilities as inheritance, encapsulation and polymorphism. Also, it uses an **asynchronous programming model**. This means that the program will continue to execute while another operation is being completed, such as a call to a web service. This ensures that the user interface is responsive even while the appli-

**714** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

cation is busy processing data, an important feature of RIAs. In many cases, you’ll need to take advantage of event handling and data binding to handle asynchronous operations.

**Flex Builder** is Adobe’s graphical IDE for Flex applications. A 30-day free trial is available at www.adobe.com/go/tryflex. It is based on Eclipse, a popular open source IDE. Because Flex Builder costs money, and because you can develop Flex applications without it, we won’t use Flex Builder in this book.

**Adobe LiveCycle Data Services ES** extends Flex’s built-in data connectivity, allowing for such features as data push and synchronization. It also enables Flex applications to handle disconnection from the server, synchronizing data upon reconnection. The Express edition of Adobe LiveCycle Data Services ES is available for free at www.adobe.com/go/ trylivecycle_dataservices/. This version is limited to use on a single server with a single CPU (the license agreement is included with the download).

**Flex Charting** provides an extensible library of plotting and graphing elements, including pie charts, line graphs, bar graphs, bubble charts and plots. Flex Charting also provides appealing animations for dynamic data representations. Flex Charting is available for purchase from Adobe, and a 30-day free trial is available at www.adobe.com/go/try- flex. An excellent demonstration of Flex Charting is the **Flex Charting Sampler** available at demo.quietlyscheming.com/ChartSampler/app.html.

**18.3 Creating a Simple User Interface** Our first example application is a simple image viewer (Fig. 18.1) that displays thumbnail (i.e., small) images of several Deitel book covers. In this example, we specify the images with a static array within the MXML, but you could load this type of data dynamically from a web service. You can select a thumbnail to view a larger cover image, or use the horizontal slider to select an image. These two elements are bound to each other, meaning that when the user changes one, the other is updated. The image viewer also allows you to zoom the image. You can try this application at test.deitel.com/examples/iw3htp4/ flex/coverViewer/ (Fig. 18.2).

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!-- Fig. 18.1: coverViewer.mxml --> **3** <!-- Creating a simple book cover viewer in Flex 2 --> **4 5** <!-- an array of images --> **6 7** <!-- each image has a name and source attribute --> **8** <mx:Object name = "C How to Program" source = "chtp5.jpg" /> **9** <mx:Object name = "C++ How to Program" source = "cpphtp6.jpg" />

**10** <mx:Object name = "Internet How to Program" **11** source = "iw3htp4.jpg" /> **12** <mx:Object name = "Java How to Program" source = "jhtp7.jpg" /> **13** <mx:Object name = "VB How to Program" source = "vbhtp3.jpg" /> **14** <mx:Object name = "Visual C# How to Program" **15** source = "vcsharphtp2.jpg" /> **16** <mx:Object name = "Simply C++" source = "simplycpp.jpg" /> **17** <mx:Object name = "Simply VB 2005" source = "simplyvb2005.jpg" />

**Fig. 18.1** | Creating a simple book cover viewer in Flex 2. (Part 1 of 3.)

<mx:Application xmlns:mx = "http://www.adobe.com/2006/mxml">

<mx:ArrayCollection id = "bookCovers">

18.3 Creating a Simple User Interface **715**

**18** <mx:Object name = "Simply Java" source = "simplyjava.jpg" /> **19** <mx:Object name = "Small C++ How to Program" **20** source = "smallcpphtp5.jpg" /> **21** <mx:Object name = "Small Java" source = "smalljavahtp6.jpg" /> **22** </mx:ArrayCollection> **23 24** <!-- bind largeImage's source to the slider and selected thumbnail --> **25 26 27 28 29 30 31 32** <!-- user interface begins here --> **33 34 35 36** <mx:HBox height = "100%" width = "100%"> **37** <mx:VSlider id = "zoomSlider" value = "100" minimum = "0" **38** maximum = "100" liveDragging = "true" **39 40 41** height = "100%" width = "0%" **42** labels = "\[ '0%', 'Zoom', '100%' \]" /> **43** <mx:VBox width = "100%" height = "100%" **44** horizontalAlign = "center"> **45 46** <!-- We bind the source of this image to the source of --> **47** <!-- the selected thumbnail, and center it in the VBox. --> **48** <!-- completeEffect tells Flex to fade the image in --> **49 50** source = "" **51** horizontalAlign = "center" **52** verticalAlign = "middle" **53** width = "100%" height = "100%" **54 55 56** <!-- bind this Label to the name of the selected thumbnail --> **57 58** </mx:VBox> **59** </mx:HBox> **60 61** <!-- slider can switch between images --> **62** <mx:HSlider id = "selectCoverSlider" height = "0%" **63** minimum = "0" maximum = "{ bookCovers.length - 1 }" **64** showDataTip = "false" snapInterval = "1" tickInterval = "1" **65** liveDragging = "true" **66 67 68 69**

**Fig. 18.1** | Creating a simple book cover viewer in Flex 2. (Part 2 of 3.)

<mx:Binding source = "'fullsize/' + bookCovers.getItemAt( selectCoverSlider.value ).source"

destination = "largeImage.source" /> <mx:Binding source = "'fullsize/' + thumbnailList.selectedItem.source"

destination = "largeImage.source" />

<mx:Panel id = "viewPanel" title = "Deitel Book Cover Viewer" width = "100%" height = "100%" horizontalAlign = "center">

change = "largeImage.percentWidth = zoomSlider.value; largeImage.percentHeight = zoomSlider.value;"

<mx:Image id = "largeImage"

completeEffect = "Fade" />

<mx:Label text = "{ thumbnailList.selectedItem.name }" />

change = "thumbnailList.selectedIndex = selectCoverSlider.value; thumbnailList.scrollToIndex( selectCoverSlider.value )" />

**716** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

Line 1 of Fig. 18.1 declares the document to be an XML document, because MXML is a type of XML. The **mx prefix**, defined in line 4, is commonly associated with the **"http://www.adobe.com/2006/mxml" namespace**, which is used for the Flex elements in an MXML document. The **Panel element** (lines 33–94 is a container, and is generally the outermost container of a Flex application. This element has many attributes, including title, width, height, horizontalAlign and verticalAlign. The id = "viewPanel"

attribute allows us to reference this item in ActionScript using the identifier viewPanel. Flex elements can contain an **id attribute**, so that their properties can be accessed progra- matically. The value of the title attribute is displayed at the top of the Panel, in the border. Inside the Panel element, there is an **HBox element** (lines 36–59), which is a con- tainer that organizes its enclosed elements horizontally. There is also a **VBox element** avail- able for organizing elements vertically, which we will use later.

In the HBox, we have a VSlider (lines 37–42) and a VBox (lines 43–58) containing an **Image element** (lines 49–54) and a **Label element** (line 57). The **VSlider element** pro- vides a vertically oriented slider user interface element. The VSlider controls the zoom level of the image. The value attribute sets the slider’s initial value (100 in this example). The minimum and maximum attributes set the range of values you can select with the slider. The change attribute (lines 39–40) allows ActionScript to execute whenever the user changes the slider’s value. Lines 39–40 scale the image by setting its percentWidth and percentHeight properties to the slider’s value. The liveDragging attribute with the value "true" indicates that the ActionScript in the change attribute executes immediately

**70** <!-- display thumbnails of the images in bookCovers horizontally --> **71 72 73 74 75 76** <!-- define how each item is displayed --> **77 78** <mx:Component> **79** <mx:VBox width = "140" height = "160" **80** horizontalAlign = "center" verticalAlign = "middle" **81** verticalScrollPolicy = "off" **82** horizontalScrollPolicy = "off" paddingBottom = "20"> **83 84** <!-- display a thumbnail of each image --> **85 86** verticalAlign = "middle" /> **87 88** <!-- display the name of each image --> **89** <mx:Label text = "{ data.name }" /> **90** </mx:VBox> **91** </mx:Component> **92** </mx:itemRenderer> **93** </mx:HorizontalList> **94** </mx:Panel> **95** </mx:Application>

**Fig. 18.1** | Creating a simple book cover viewer in Flex 2. (Part 3 of 3.)

<mx:HorizontalList id = "thumbnailList" dataProvider = "{ bookCovers }" width = "100%" height = "160" selectedIndex = "0" change = "selectCoverSlider.value = thumbnailList.selectedIndex">

<mx:itemRenderer>

<mx:Image source = "{ 'thumbs/' + data.source }"

18.3 Creating a Simple User Interface **717**

when the user changes the slider value, even if the user is still clicking it. The labels

attribute places text next to the slider. You can give it any number of labels, and it will equidistantly space them.

The Image element has the attribute source = "" (line 50). This is because in lines 25–28, we use a **Binding element** to bind the value of largeImage’s source attribute (line 50) to the value of the source attribute of an element in the bookCovers ArrayCollection (defined in lines 6–22). In line 27, we use the horizontal slider’s value to select an element from bookCovers and set the largeImage’s source. Lines 29–30 set up a second Binding

element that binds the image’s source to the source of the selected item in thumb-

nailList (defined in lines 71–74). For each binding, we prepend 'fullsize/', the direc-

**Fig. 18.2** | Deitel cover Viewer displaying _C How to Program_ cover.

**718** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

tory containing the full-sized images. When the user selects an image with the selectCoverSlider or thumbnailList, largeImage shows the full-size version of the cor- responding image.

The Image element’s other attributes specify that the element is centered (lines 51– 52) and takes up as much space in the containing element as possible (line 53). The com-

pleteEffect attribute of the Image element is set to "Fade" (line 54), which means that when the image is loaded, it will be presented using Flex’s built-in Fade effect. You can view the list of built-in effects at livedocs.adobe.com/flex/201/langref/mx/effects/ package-detail.html.

The **Label element** (line 57) has a text attribute, in which we indicate that the string displayed by the Label is bound to the name of thumbnailList’s selectedItem. The curly braces surrounding this ActionScript are another way to indicate data binding.

Following the HBox is an HSlider (lines 62–68) that gives the user another way to nav- igate through the images. The **HSlider element** is the horizontal equivalent of the VSlider. The change attribute (lines 66–68) changes the selected thumbnail from the thumbnailList based on the value of the HSlider and ensures that the thumbnailList is showing the selected thumbnail by scrolling to the HSlider’s value. We set the HSlider’s maximum value to { bookCovers.length - 1 }, the index of the last element of the book-

Covers array. We set showDataTip to "false" (line 64) to turn off the tool tip showing the HSlider’s current value while the user is dragging the slider. Finally, we set snap- Interval and tickInterval to "1" (line 64), so that the slider’s values increment by 1, and the tick marks are displayed at intervals of 1.

The **HorizontalList element** with id thumbnailList (lines 71–93) takes an array of items from a **dataProvider** and displays them in a horizontal configuration. This HorizontalList’s dataProvider is the ArrayCollection of Objects called bookCovers

(lines 6–22). **Object** is the root class of the ActionScript hierarchy, and is used here to simply hold attributes. An **ArrayCollection** is a type of Array that provides methods for manipulating an Array. Each of the items in the HorizontalList is selectable, and the selectedIndex attribute dictates that the first array element is selected initially.

The thumbnailList contains an inline itemRenderer (lines 77–92), which gives you complete control over the contents of the list. At runtime, the HorizontalList will create an instance of the itemRenderer for each of the elements in the dataProvider array. If you don’t provide an itemRenderer, Flex will render each item with the default item ren- derer, which depends on the item’s type. An itemRenderer can also be defined externally by giving the HorizontalList an itemRenderer attribute equal to the filename (without the extension) of an external MXML file containing the elements you want.

This itemRenderer contains a **Component element** (lines 78–91), which encloses the item to render. Inside the Component element, there is a VBox containing an Image (lines 85–86) and a Label (line 89). The verticalScrollPolicy and horizontalScrollPolicy

attributes (lines 81–82) are set to off so that even if the Image or Label elements don’t fit in the VBox, they won’t show scroll bars. The paddingBottom attribute (line 82) ensures that there is 20 pixels of space for the HorizontalList’s horizontal scroll bar. The Image

element’s source attribute has the specifies the location of the image file. The thumbs/

directory contains the thumbnails we want to display, and data refers to the corre- sponding item from the list’s dataProvider, in this case the bookCovers ArrayCollec-

tion. We must use the keyword data because everything inside the Component element is

18.3 Creating a Simple User Interface **719**

located in a new, separate scope, meaning that it cannot access the variables of the enclosing program. The Label element displays the name element of the corresponding item in the ArrayCollection. The **Spacer element** ensures that there will be enough room for a horizontal scroll bar at the bottom of the thumbnailList in case the window is not wide enough to display all of the thumbnails.

**_Compiling an Application_** Flex applications are converted from MXML into ActionScript, which is then compiled and output as SWF files. We’ll compile our applications using the **mxmlc** command-line compiler, included in the Flex SDK. If you do not want to specify the compiler’s path ev- ery time you run it, you can add the directory to your Path system variable. To do this in Windows XP, first right click **My Computer**, click **Properties**, select the **Advanced** tab, click **Environment Variables**, select **Path** in the list of **System variables**, and append your path to the flex_sdk_2\\bin directory (e.g. C:\\flex_sdk_2\\bin if you extracted it into the C:\\ di- rectory). For Mac OS X and Linux, visit www.linuxheadquarters.com/howto/basic/

path.shtml for instructions. The simplest syntax of the mxmlc command is mxmlc _filename._ You can see a full list of the compiler’s parameters by executing mxmlc -help. For instance, if we’re in the directory containing coverViewer.mxml, and we have added the bin direc- tory to the **Path** system variable, the command for compiling coverViewer.mxml would be mxmlc coverViewer.mxml (Fig. 18.3).

This command creates coverViewer.swf in the current directory. If you’d like, you can test coverViewer.swf in the standalone Flash 9 Player by double clicking the file coverViewer.swf. If this does not work, you can locate the Flash 9 Player at flex_sdk_2\\player\\debug\\SAFlashPlayer.exe for Windows or flex_sdk_2/player/

debug/SAFlashPlayer.dmg for Mac OS X.

**_Running a Flex Application in the Browser_** Because Flex applications run using the Flash Player, they can be embedded into a web page, then run with the Flash Player browser plug-in. The Flex SDK install includes a fold- er of HTML templates for embedding your application. You can copy a template and edit it to point to your SWF file. These templates are located in the folder flex_sdk_2/

resources/html-templates/. The six templates give you different combinations of Flash installation and version detection (checks the user’s Flash Player version) as well as browser history support. For our examples, we use the no-player-detection template. If you would like to implement the install and history features, more information is available at livedocs.adobe.com/flex/201/html/wrapper_131_05.html.

To create an HTML wrapper for the application, first copy the files AC_OETags.js and index.template.html from flex_sdk_2/resources/html-templates/no-player-

detection to your Flex application’s base directory. Rename index.template.html to

**Fig. 18.3** | mxmlc running in Windows XP **Command Prompt**.

**720** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

index.html if you want it to be the default HTML file of the directory on a web server. Now, open the HTML file in your text editor, and replace the variables ${title}, ${swf}, and ${application} with your application’s filename without .swf (in this case, cover- Viewer). For ${height} and ${width}, use 100%. For ${bgcolor}, use #869ca7 (this is Flex’s default color). The modified HTML wrapper for coverViewer is shown in Fig. 18.4.

**1** <!-- Fig. 18.4: index.html --> **2** <!-- HTML wrapper for coverViewer.swf --> **3** <!-- saved from url=(0014)about:internet --> **4** <html lang="en"> **5** <head> **6** <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> **7** <title>coverViewer</title> **8** <script src="AC\_OETags.js" language="javascript"></script> **9** <style>

**10** body { margin: 0px; overflow: hidden; } **11** </style> **12** </head> **13 14** <body scroll='no'> **15** <script language="JavaScript" type="text/javascript"> **16** <!-- **17** AC\_FL\_RunContent( **18 19 20 21 22 23 24 25 26 27 28 29** ); **30** // --> **31** </script> **32** <noscript> **33** <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" **34 35** codebase="http://fpdownload.macromedia.com/get/ **36** flashplayer/current/swflash.cab"> **37 38** <param name="quality" value="high" /> **39 40 41 42 43** play="true" **44** loop="false" **45** quality="high" **46** allowScriptAccess="sameDomain"

**Fig. 18.4** | HTML wrapper for coverViewer.swf. (Part 1 of 2.)

"src", "coverViewer", "width", "100%", "height", "100%", "align", "middle", "id", "coverViewer", "quality", "high", "bgcolor", "#869ca7", "name", "coverViewer", "allowScriptAccess","sameDomain", "type", "application/x-shockwave-flash", "pluginspage", "http://www.adobe.com/go/getflashplayer"

id="coverViewer" width="100%" height="100%"

<param name="movie" value="coverViewer.swf" />

<param name="bgcolor" value="#869ca7" /> <param name="allowScriptAccess" value="sameDomain" /> <embed src="coverViewer.swf" quality="high" bgcolor="#869ca7"

width="100%" height="100%" name="coverViewer" align="middle"

18.3 Creating a Simple User Interface **721**

**_Embedding Images_** Instead of referencing external images, we could embed the images into the SWF file to make it more portable. We specify that an image is embedded by enclosing the source at- tribute inside an @Embed directive, as in source = "@Embed( 'image.jpg' )". This tells the compiler to include the image in the SWF file, which results in a program that not only loads faster, but also is less dependent on external resources, since the SWF includes all resources it needs. In this case, embedding images would significantly increase the size of the SWF. Also, we may later want to update or change the images.

**_Using View States_** Next, we’ll add the ability to hide the thumbnail HorizontalList and to increase the size of the current image. We’ll accomplish this using **view states** (Fig. 18.5), which enable us to change an application’s layout on the fly, allowing for more usable interfaces. You can test this application at test.deitel.com/examples/iw3htp4/flex/coverViewerStates/ (Fig. 18.6).

**47** type="application/x-shockwave-flash" **48** pluginspage="http://www.adobe.com/go/getflashplayer"> **49** </embed> **50** </object> **51** </noscript> **52** </body> **53** </html>

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!-- Fig. 18.5: coverViewerStates.mxml --> **3** <!-- Using States to dynamically modify a user interface --> **4** <mx:Application xmlns:mx = "http://www.adobe.com/2006/mxml"> **5 6 7 8 9**

**10 11 12** <!-- an array of images --> **13** <mx:ArrayCollection id = "bookCovers"> **14** <!-- each image has a name and source attribute --> **15** <mx:Object name = "C How to Program" source = "chtp5.jpg" /> **16** <mx:Object name = "C++ How to Program" source = "cpphtp6.jpg" /> **17** <mx:Object name = "Internet How to Program" **18** source = "iw3htp4.jpg" /> **19** <mx:Object name = "Java How to Program" source = "jhtp7.jpg" /> **20** <mx:Object name = "VB How to Program" source = "vbhtp3.jpg" /> **21** <mx:Object name = "Visual C# How to Program" **22** source = "vcsharphtp2.jpg" /> **23** <mx:Object name = "Simply C++" source = "simplycpp.jpg" />

**Fig. 18.5** | Using States to dynamically modify a user interface. (Part 1 of 3.)

**Fig. 18.4** | HTML wrapper for coverViewer.swf. (Part 2 of 2.)

<!-- ActionScript goes in this section --> <mx:Script>

// import the Cubic easing function for state transitions import mx.effects.easing.Cubic;

</mx:Script>

**722** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

**24** <mx:Object name = "Simply VB 2005" source = "simplyvb2005.jpg" /> **25** <mx:Object name = "Simply Java" source = "simplyjava.jpg" /> **26** <mx:Object name = "Small C++ How to Program" **27** source = "smallcpphtp5.jpg" /> **28** <mx:Object name = "Small Java" source = "smalljavahtp6.jpg" /> **29** </mx:ArrayCollection> **30 31** <!-- define the application's states --> **32 33 34 35 36 37 38 39 40 41 42** <!-- define the transition effect for application state changes --> **43 44 45 46 47 48 49 50 51** <!-- bind the source of largeImage to the selected thumbnail --> **52** <mx:Binding **53** source = "'fullsize/' + **54** bookCovers.getItemAt( selectCoverSlider.value ).source" **55** destination = "largeImage.source" /> **56** <mx:Binding source = "'fullsize/' + thumbnailList.selectedItem.source" **57** destination = "largeImage.source" /> **58 59** <!-- user interface begins here --> **60** <mx:Panel id = "viewPanel" title = "Deitel Book Cover Viewer" **61** width = "100%" height = "100%" horizontalAlign = "center"> **62 63** <mx:HBox height = "100%" width = "100%"> **64** <mx:VSlider id = "zoomSlider" value = "100" minimum = "0" **65** maximum = "100" liveDragging = "true" **66** change = "largeImage.percentWidth = zoomSlider.value; **67** largeImage.percentHeight = zoomSlider.value;" **68** height = "100%" width = "0%" **69** labels = "\[ '0%', 'Zoom', '100%' \]" /> **70** <mx:VBox width = "100%" height = "100%" **71** horizontalAlign = "center"> **72 73** <!-- We bind the source of this image to the source of --> **74** <!-- the selected thumbnail, and center it in the VBox. --> **75** <!-- completeEffect tells Flex to fade the image in --> **76** <mx:Image id = "largeImage"

**Fig. 18.5** | Using States to dynamically modify a user interface. (Part 2 of 3.)

<mx:states> <mx:State name = "HideThumbnails">

<mx:RemoveChild target = "{ thumbnailList }" />

<!-- switch the showHideButton to hide --> <mx:SetEventHandler target = "{ showHideButton }" name = "click"

handler = "currentState = ''" /> </mx:State>

</mx:states>

<mx:transitions> <mx:Transition>

<mx:Resize target = "{ largeImage }" duration = "750" easingFunction = "Cubic.easeOut" />

</mx:Transition> </mx:transitions>

18.3 Creating a Simple User Interface **723**

**77** source = "" **78** horizontalAlign = "center" **79** verticalAlign = "middle" **80** width = "100%" height = "100%" **81** completeEffect = "Fade" /> **82 83** <!-- bind this Label to the name of the selected thumbnail --> **84** <mx:Label text = "{ thumbnailList.selectedItem.name }" /> **85** </mx:VBox> **86** </mx:HBox> **87 88** <!-- slider can switch between images --> **89** <mx:HSlider id = "selectCoverSlider" height = "0%" **90** minimum = "0" maximum = "{ bookCovers.length - 1 }" **91** showDataTip = "false" snapInterval = "1" tickInterval = "1" **92** liveDragging = "true" **93** change = "thumbnailList.selectedIndex = **94** selectCoverSlider.value; **95** thumbnailList.scrollToIndex( selectCoverSlider.value )" /> **96 97** <!-- display thumbnails of the images in bookCovers horizontally --> **98 99 100 101 102 103** <!-- define how each item is displayed --> **104 105** <mx:Component> **106** <mx:VBox width = "140" height = "160" **107** horizontalAlign = "center" verticalAlign = "middle" **108** verticalScrollPolicy = "off" **109** horizontalScrollPolicy = "off" paddingBottom = "20"> **110 111** <!-- display a thumbnail of each image --> **112** <mx:Image source = "{ 'thumbs/' + data.source }" **113** verticalAlign = "middle" /> **114 115** <!-- display the name of each image --> **116** <mx:Label text = "{ data.name }" /> **117** </mx:VBox> **118** </mx:Component> **119** </mx:itemRenderer> **120** </mx:HorizontalList> **121 122 123 124 125 126 127 128** </mx:Panel> **129** </mx:Application>

**Fig. 18.5** | Using States to dynamically modify a user interface. (Part 3 of 3.)

<mx:HorizontalList id = "thumbnailList" dataProvider = "{ bookCovers }" width = "100%" height = "160" selectedIndex = "0" change = "selectCoverSlider.value = thumbnailList.selectedIndex">

<mx:itemRenderer>

<!-- this will exist in the bottom border of the Panel --> <mx:ControlBar>

<mx:LinkButton label = "Show/Hide Thumbnails" click = "currentState = 'HideThumbnails';" id = "showHideButton" />

</mx:ControlBar>

**724** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

We define an application’s states in a **states element** (lines 32–40). An application has a **default state** that contains its initial elements, layout and properties. Each additional state is enclosed in a **State element**, with a name attribute, which is the identifier for the State. View states allow you to add elements via the **AddChild element**, remove elements via the **RemoveChild element**, modify elements’ properties via the **SetProperty element**, set style via the **SetStyle element**, and set event handlers via the **SetEventHandler ele- ment**. The RemoveChild element in line 34 removes the thumbnailList. After the RemoveChild element, there is a **SetEventHandler element** (lines 39–38). Whenever the State is activated, this event handler will be registered. In this case, we change the click

event handler of the showHideButton LinkButton (lines 124–126) to set the current-

State to an empty string, signifying the application’s default state (with the thumbnail viewer displayed). This LinkButton is enclosed in a **ControlBar element** (lines 123– 127)—this embeds the elements it encloses into the bottom border of the Panel. The

**Fig. 18.6** | Deitel Cover Viewer using States to hide thumbnails.

18.4 Accessing XML Data from Your Application **725**

showHideButton element initially has a click attribute set to "currentState = 'Hide-

Thumbnails';". After we define the application’s states, we define a transition effect for the State

change. Any State transition effects are enclosed in the **transitions element** (lines 43– 49). For each **Transition**, you can specify a fromState and toState, using the State’s name. In this case, we leave out these attributes so that the transition effect applies to all State changes. Inside the Transition, we have a Resize effect (lines 45–47). This effect has a targets attribute that specifies which elements it applies to. It also has a duration

attribute, which defines how long the effect lasts in milliseconds. Finally, we define the optional easingFunction attribute. Normally, the Resize effect would go at a linear speed. Instead, we have specified that it should use the Cubic.easeOut function2 (line 47), which controls the acceleration of the Resize animation. We import this function from the Flex library using ActionScript. A **Script element** (lines 7–10) encapsulates the application’s ActionScript code. Line 9 allows the Cubic function to be used anywhere in the program.

**18.4 Accessing XML Data from Your Application** Flex has the ability to access XML natively, using the **E4X (ECMAScript for XML)** stan- dard. In this example, we use this capability to create an address book application. Figure 18.7 loads an XML file containing names and addresses into the application and displays its contents in a DataGrid (Fig. 18.8). The application also displays the selected contact’s location in an embedded Yahoo! Map (Fig. 18.9). Finally, the application allows you to edit any of the selected contact’s data (Fig. 18.10). You can test a live version of this application at test.deitel.com/examples/iw3htp4/flex/addressBook/. Note that be- cause this application makes requests over HTTP, it must be run from a web server. To learn how to set up your own web server, see Chapter 21.

2\. A list of the available easing functions is available at livedocs.adobe.com/flex/201/langref/mx/ effects/easing/package-detail.html.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!-- Fig. 18.7: addressBook.mxml --> **3** <!-- HTTPService, Validators, and new UI elements --> **4** <mx:Application xmlns:mx = "http://www.adobe.com/2006/mxml" **5** layout = "vertical" **6 7 8 9**

**10 11 12 13 14 15 16 17**

**Fig. 18.7** | HTTPService, validators and new UI elements. (Part 1 of 5.)

xmlns:yahoo = "com.yahoo.webapis.maps.\*" creationComplete = "getContacts.send(); initMap();">

<!-- import XML file --> <mx:HTTPService

id = "getContacts" url = "contacts.xml" showBusyCursor = "true" resultFormat = "object" result = "addressCollection = ArrayCollection(

getContacts.lastResult.contacts.contact )" fault = "Alert.show( event.fault.message )" />

**726** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

**18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50** <mx:Panel **51** layout = "vertical" width = "100%" height = "100%" **52** title = "Address Book"> **53 54 55** <mx:VBox label = "View Contacts"> **56** <!-- search box, calls filter function on any change --> **57 58** <mx:Label text = "Search:" /> **59 60** width = "100%" **61 62** </mx:ApplicationControlBar> <!-- End Search Box --> **63 64 65 66 67 68 69 70**

**Fig. 18.7** | HTTPService, validators and new UI elements. (Part 2 of 5.)

<!-- validators for "Edit Contact" fields --> <mx:StringValidator id = "firstnameValidator" source = "{ firstName }"

property = "text" required = "true" trigger = "{ save }" triggerEvent = "click" valid = "saveContact()" />

<mx:StringValidator id = "lastnameValidator" source = "{ lastName }" property = "text" required = "false" />

<mx:ZipCodeValidator id = "zipValidator" source = "{ zipCode }" property = "text" required = "false" />

<mx:EmailValidator id = "emailValidator" source = "{ eMail }" property = "text" required = "false" />

<mx:PhoneNumberValidator id = "phoneValidator" source = "{ phone }" property = "text" required = "false" />

<mx:Script> import mx.collections.ArrayCollection;

// tell compiler to register an event for the addressCollection // variable, allowing it to be bound to another object \[Bindable\] private var addressCollection : ArrayCollection;

</mx:Script>

<!-- include ActionScript to implement search filter --> <mx:Script source = "search.as" />

<!-- include ActionScript to implement Yahoo! Maps component --> <mx:Script source = "map.as" />

<!-- include ActionScript to implement button actions --> <mx:Script source = "buttonActions.as" />

<mx:Accordion id = "accordion" width = "100%" height = "100%" creationPolicy = "all">

<mx:ApplicationControlBar>

<mx:TextInput id = "textFilter"

change = "filter();"/>

<!-- contacts data grid, populated with addressCollection --> <!-- call setMarkerByAddress on change of selection --> <mx:DataGrid id = "contactsView"

dataProvider = "{ addressCollection }" width = "100%" height = "100%" change = "setMarkerByAddress();"> <mx:columns>

18.4 Accessing XML Data from Your Application **727**

**71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91** <!-- start contact action buttons --> **92 93 94** <mx:Button label = "Delete" **95** click = "Alert.show( 'Are you sure?', **96** 'Delete Contact', **97** mx.controls.Alert.YES | mx.controls.Alert.CANCEL, **98** this, deleteContact );" /> **99** <mx:Button label = "Get Directions" **100** click = "getDirections();" /> **101** <mx:Button label = "Edit" **102** click = "accordion.selectedIndex = 2;" /> **103** <mx:Button label = "View on Map" **104** click = "accordion.selectedIndex = 1;" /> **105** <mx:Button label = "E-Mail" **106** click = "emailContact();" /> **107** <!-- end contact action buttons --> **108** </mx:ControlBar> **109** </mx:VBox> <!-- end "View Contacts" Section --> **110 111** <mx:VBox label = "Map View"> **112 113 114 115 116 117** <mx:Button label = "Back to Contacts" **118** click = "accordion.selectedIndex = 0;" /> **119** </mx:VBox> <!-- end "Map View" Section --> **120 121** <mx:VBox label = "Edit Contact"> **122** <!-- begin edit contact form, set default button to "save" -->

**Fig. 18.7** | HTTPService, validators and new UI elements. (Part 3 of 5.)

<mx:DataGridColumn dataField = "firstname" headerText = "First Name" />

<mx:DataGridColumn dataField = "lastname" headerText = "Last Name" />

<mx:DataGridColumn dataField = "street" headerText = "Street" />

<mx:DataGridColumn dataField = "city" headerText = "City" />

<mx:DataGridColumn dataField = "state" headerText = "State" />

<mx:DataGridColumn dataField = "zip" headerText = "Zip" />

<mx:DataGridColumn dataField = "email" headerText = "E-Mail" />

<mx:DataGridColumn dataField = "phone" headerText = "Phone Number" />

</mx:columns> </mx:DataGrid>

<mx:ControlBar>

<mx:Button label = "New" click = "newContact()" />

<!-- create Yahoo! Map --> <yahoo:YahooMapService id = "yahooMap" UUID = "{ UUID }"

swfDomId = "{ swfDomID }" apiId = "{ YahooAPIKey }" mapURL = "{ mapURL }" width = "600" height = "400" />

**728** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

**123 124 125** <!-- edit contact text fields, bound to data --> **126 127 128 129** </mx:FormItem> **130** <mx:FormItem label = "Last Name:"> **131** <mx:TextInput id = "lastName" **132** text = "{ contactsView.selectedItem.lastname }" /> **133** </mx:FormItem> **134** <mx:FormItem label = "Street Address:"> **135** <mx:TextInput id = "streetAddress" **136** text = "{ contactsView.selectedItem.street }" /> **137** </mx:FormItem> **138** <mx:FormItem label = "City:"> **139** <mx:TextInput id = "city" **140** text = "{ contactsView.selectedItem.city }" /> **141** </mx:FormItem> **142** <mx:FormItem label = "State:"> **143** <mx:TextInput id = "state" **144** text = "{ contactsView.selectedItem.state }" /> **145** </mx:FormItem> **146** <mx:FormItem label = "Zip Code:"> **147** <mx:TextInput id = "zipCode" **148** text = "{ contactsView.selectedItem.zip }" /> **149** </mx:FormItem> **150** <mx:FormItem label = "E-Mail Address:"> **151** <mx:TextInput id = "eMail" **152** text = "{ contactsView.selectedItem.email }" /> **153** </mx:FormItem> **154** <mx:FormItem label = "Phone Number:"> **155** <mx:TextInput id = "phone" **156** text = "{ contactsView.selectedItem.phone }" /> **157** </mx:FormItem> **158** <!-- end contact text fields --> **159 160** <!-- edit contact action buttons --> **161** <mx:FormItem> **162** <mx:Button id = "save" label = "Save" /> **163** </mx:FormItem> **164** <mx:FormItem> **165** <!-- cancel button reverts fields to previous values --> **166** <!-- return user to "View Contacts" section --> **167** <mx:Button id = "cancel" label = "Cancel" **168** click = "cancelContact()" /> **169** </mx:FormItem> **170** <mx:FormItem> **171** <!-- pull up "Delete Contact" dialog box --> **172** <mx:Button label = "Delete" **173** click = "Alert.show( 'Are you sure?', **174** 'Delete Contact',

**Fig. 18.7** | HTTPService, validators and new UI elements. (Part 4 of 5.)

<mx:Form width = "100%" backgroundColor = "#ffffff" defaultButton = "{ save }">

<mx:FormItem label = "First Name:" required = "true"> <mx:TextInput id = "firstName"

text = "{ contactsView.selectedItem.firstname }" />

18.4 Accessing XML Data from Your Application **729**

We begin by looking at the user interface code in the Panel element (lines 50–181, Fig. 18.7). An **Accordion element** (lines 53–180) allows the user to easily navigate between multiple VBoxes. As you click the title of one VBox, it slides on top of the previ- ously active VBox. This Accordion contains three VBoxes, **View Contacts**, **Map View**, and **Edit Contact** (lines 55–109, 111–119, and 121–179, respectively). The Accordion

attribute creationPolicy with the value "all" (line 54) forces the Flash player to load all components, even those that are not initially visible to the user. This is necessary to allow the Yahoo! Map to load before we create the map navigation elements.

Inside the **View Contacts** VBox (as seen in Fig. 18.8), we first define an **Application-**

**ControlBar** container for the search field (line 57–62). An ApplicationControlBar is a type of ControlBar that can be placed anywhere or docked at the top of an application.

**175** mx.controls.Alert.YES | mx.controls.Alert.CANCEL, **176** this, deleteContact );" /> **177** </mx:FormItem> **178** </mx:Form> <!-- end edit contact form --> **179** </mx:VBox> <!-- end "Edit Contact" Section --> **180** </mx:Accordion> <!-- end Accordion navigation element --> **181** </mx:Panel> <!-- end UI layout --> **182** </mx:Application>

**Fig. 18.8** | Address book’s **View Contacts** mode.

**Fig. 18.7** | HTTPService, validators and new UI elements. (Part 5 of 5.)

**730** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

This ApplicationControlBar contains a Label explaining to the user what the text field is for, followed by the TextInput element itself (lines 59–61). This element’s change

attribute indicates that the filter function (located in the search.as file) should be called whenever a change is made to the field, such as adding or removing characters. We’ll discuss the filter function in detail when we review the ActionScript code.

Lines 66–88 create a **DataGrid element** with a dataProvider attribute that specifies what data will fill the rows and columns. The dataProvider addressCollection is placed in curly braces (line 67) to indicate that the dataProvider is being bound to the Data-

Grid—any changes to the addressCollection will be displayed in the DataGrid. This DataGrid also has a change attribute. This is set to call the setMarkerByAddress function located in the map.as file whenever the user selects a different contact, so that the map will update to display that contact’s location. In the DataGrid, we define each column using **DataGridColumn elements** inside a parent columns element. Each DataGridColumn (e.g., lines 71–72) has a dataField attribute that tells the element which data it should display, and a headerText attribute that defines the text in the column header.

**Fig. 18.9** | Address book’s **Map View** mode.

18.4 Accessing XML Data from Your Application **731**

Following the DataGrid are a series of Buttons that perform actions. These Buttons reside in a ControlBar container (lines 90–108), and each has a click attribute that defines the ActionScript code that will be executed when the user clicks the Button. For the **New** (lines 92–93), **Get Directions** (lines 99–100), and **E-Mail** (lines 105–106) Buttons, the code executed by click calls a function specific to that Button, located in button-

Actions.as. For the **Delete** Button (94–98), the code executed by click calls the **Alert.show function** to display a dialog box confirming the user’s action. This specific call to the Alert.show function sends five parameters—text, title, flags (specifies which buttons should appear), parent, and closeHandler. For the **Edit** (lines 101–102) and **View on Map** (lines 103–104) Buttons, the click attribute sets the selectedIndex of the Accordion to the index of the appropriate VBox.

The next VBox is **Map View** (lines 111–119 in Fig. 18.7, as seen in Fig. 18.9), which contains two items. The first is the YahooMapService element (lines 113–116). Note that the namespace of this element is yahoo—line 6 defines the yahoo namespace, which directs the compiler to the com/yahoo/webapis/maps directory located in the base direc- tory of your application. This directory contains the YahooMapService.as file, which defines the YahooMapService element. This element has seven attributes. After the id, the next four are constants that we set in the ActionScript file for the Yahoo! Map, map.as.

**Fig. 18.10** | Address book’s **Edit Contact** mode.

**732** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

The last two define the width and height of the map element. We discuss using the Yahoo! Maps API when we describe the map.as file. Following the map is a Button (lines 117–118) that when clicked switches to the **View Contacts** VBox.

The final VBox is **Edit Contact** (lines 121–179 in Fig. 18.7, as seen in Fig. 18.10). This element contains a **Form element** (lines 123–178) that groups the **TextInput elements** and the Button elements into a single entity. This aligns the elements and also allows us to specify such things as defaultButton (line 124), which is set to the **Save** Button. Each TextInput resides in a **FormItem element**, which can specify whether or not the item must be filled in via the required attribute. If this attribute is set to true, Flex will display a red asterisk next to the item. In the addressBook program, only the firstName field is required. When a user leaves this field blank and clicks the **Save** Button, the action is ignored and the firstName field is highlighted. This is an improvement over HTML forms, with which the user is notified of invalid data only after the form is sent to the server (though client-side validation can be performed with JavaScript).

Lines 20–30 create validator elements that check the contents of the TextInput ele- ments to ensure that the user entered data correctly. Flex provides preconfigured validators for Strings, zip codes, e-mail addresses, phone numbers and more. There are several attributes for a validator element. The source attribute specifies which object to validate. The required attribute specifies whether the user is required to fill in data. The trigger

attribute determines which button to listen to. The triggerEvent attribute specifies which event from the trigger initiates validation. The valid attribute specifies what ActionScript to execute if the triggerEvent is triggered and the data is valid.

Lines 10–17 create an **HTTPService** named getContacts. An HTTPService down- loads a URL using the HTTP protocol. The **send method** of an HTTPService executes a request to the service, and can include parameters if the service requires them. We specify the url attribute to be contacts.xml (Fig. 18.11). We set the showBusyCursor attribute to true (line 13) so that the application displays a busy cursor while a request is being pro- cessed. We set the resultFormat to object (line 14), so that the XML is parsed as a tree of ActionScript objects. Some other valid resultFormats are array (which parses the tree as an array object), text (which returns the raw XML) and e4x (which allows you to use E4X expressions, explained in Section 18.4). The expression in the result attribute is exe- cuted when the HTTP request is complete. It stores each contact node from the HTTPS-

ervice’s lastResult property into an ArrayCollection called addressCollection. We create this ArrayCollection in lines 37–38. The **\[Bindable\] metadata tag** allows the variable that follows to be bound. It does this by registering an event to keep track of changes to the variable. The fault attribute (line 17) of an HTTPService specifies what to do in the event of a failed request. In this example, a failed request triggers an Alert dis- playing the error message. Finally, we call the send method at line 7, using the Applica-

tion’s **creationComplete attribute**. This attribute registers an event handler that is triggered after the Flash Player creates all of the interface elements.

**1** <?xml version = "1.0" encoding = "utf-8" ?> **2** <!-- Fig. 18.11: contacts.xml --> **3** <!-- XML file containing contacts -->

**Fig. 18.11** | XML file containing contacts. (Part 1 of 2.)

18.4 Accessing XML Data from Your Application **733**

**4** <contacts> **5** <contact id = "1"> **6** <firstname>Sue</firstname> **7** <lastname>Black</lastname> **8** <street>77 Massachusetts Avenue</street> **9** <city>Cambridge</city>

**10** <state>MA</state> **11** <zip>02139</zip> **12** <email>sue.black@email.com</email> **13** <phone>555-555-5555</phone> **14** </contact> **15** <contact id = "2"> **16** <firstname>James</firstname> **17** <lastname>Blue</lastname> **18** <street>219 4th Avenue</street> **19** <city>Seattle</city> **20** <state>WA</state> **21** <zip>98109</zip> **22** <email>james.blue@email.com</email> **23** <phone>555-555-5555</phone> **24** </contact> **25** <contact id = "3"> **26** <firstname>Mike</firstname> **27** <lastname>Brown</lastname> **28** <street>1315 Cestnut Street</street> **29** <city>St. Louis</city> **30** <state>MO</state> **31** <zip>63103</zip> **32** <email>mike.brown@email.com</email> **33** <phone>555-555-5555</phone> **34** </contact> **35** <contact id = "4"> **36** <firstname>Meg</firstname> **37** <lastname>Gold</lastname> **38** <street>700 14th Street</street> **39** <city>Denver</city> **40** <state>CO</state> **41** <zip>80206</zip> **42** <email>meg.gold@email.com</email> **43** <phone>555-555-5555</phone> **44** </contact> **45** <contact id = "5"> **46** <firstname>John</firstname> **47** <lastname>Gray</lastname> **48** <street>525 Arch Street</street> **49** <city>Philadelphia</city> **50** <state>PA</state> **51** <zip>19106</zip> **52** <email>john.gray@email.com</email> **53** <phone>555-555-5555</phone> **54** </contact> **55** </contacts>

**Fig. 18.11** | XML file containing contacts. (Part 2 of 2.)

**734** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

You can embed ActionScript in MXML through use of the Script tag (lines 32–39). To better organize the code, we also place ActionScript in separate .as files. The address- Book.mxml file includes these files using a Script element with a source attribute (lines 42–48). There are three script files—search.as, map.as and buttonActions.as. We now explain each of these ActionScript files.

**_Search Function ActionScript_** The search.as ActionScript file (Fig. 18.12) contains the function filter (lines 3–8), which is called any time a change is made in the textFilter TextInput—as specified by the change attribute in line 61 of Fig. 18.7. This function defines addressCollection’s filterFunction (line 6) to be testMatch (lines 10–31). An ArrayCollection’s **filter- Function** is passed each item of the collection and returns true if the item matches the search criteria, and false otherwise. Function testMatch tests whether the searchTerm

matches the text in any of the data fields of each item.

**_Yahoo! Map ActionScript_** The map.as ActionScript file (Fig. 18.13) handles the addressBook application’s map functionality. We use the **Yahoo! Maps API**, because Yahoo! provides the ability to embed maps in Flex 2 applications3 (the map itself is a Flash application). The first step in using the Yahoo! Maps API is to get a Yahoo! account and Application ID. These are available at developer.yahoo.com. You then need to download the Yahoo! AS3 API Libraries at developer.yahoo.com/flash/as3_api_libraries.html. Move the source/as3/com/

**1** // Fig. 18.12: search.as **2** // Using a filterFunction for a live search feature **3** private function filter() : void **4** { **5** // define filter function **6** addressCollection.filterFunction = testMatch; **7** addressCollection.refresh(); // refresh data to only display matches **8** } // end function filter **9**

**10** private function testMatch( item : Object ) : Boolean **11** { **12** // save search term to variable **13** var searchTerm:String = textFilter.text.toLowerCase(); **14 15** // return whether search parameter matches any field for each item **16** return( item.firstname.toLowerCase().search( searchTerm ) != -1 || **17** item.lastname.toLowerCase().search( searchTerm ) != -1 || **18** item.street.toLowerCase().search( searchTerm ) != -1 || **19** item.city.toLowerCase().search( searchTerm ) != -1 || **20** item.state.toLowerCase().search( searchTerm ) != -1 || **21** String( item.zip ).search( searchTerm ) != -1 || **22** item.email.toLowerCase().search( searchTerm ) != -1 || **23** item.phone.toLowerCase().search( searchTerm ) != -1 ) **24** } // end function testMatch

**Fig. 18.12** | Using a filterFunction for a live search feature.

3\. For more information see developer.yahoo.com/flash/howto-maps-as3.html.

18.4 Accessing XML Data from Your Application **735**

folder and the source/as2/as2map.swf file into the base directory of your application. This allows you to use the as2map.swf file, which contains the ActionScript 2-based map, as well as use the ActionScript 3 functions Yahoo! provides to control the map.

**1** // Fig. 18.13: map.as **2** // Handle the map functions for the Address Book application **3** import mx.managers.CursorManager; **4 5** import mx.controls.Alert; **6 7** // define constants **8 9**

**10 11 12 13 14 15 16** private function initMap() : void **17** { **18** CursorManager.setBusyCursor(); // turn on busy cursor **19 20 21 22 23** } // end function initMap **24 25** // handle map after it has loaded **26** public function onMapLoaded( event : Object ) : void **27** { **28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46** // turn off busy cursor **47** CursorManager.removeBusyCursor(); **48** } // end function onMapLoaded

**Fig. 18.13** | Handle the map functions for the Address Book application. (Part 1 of 2.)

import com.yahoo.webapis.maps.methodgroups.\*;

private const swfDomID : String = "addressBook"; private const UUID : int = Math.random() \* 10000;

// YahooAPIKey string must be your own from developer.yahoo.com private const YahooAPIKey : String = "_Your Yahoo API Key Here_"; private const mapURL : String = "as2map.swf"; private var mapController : MapController;

// wait for map to load, then call onMapLoaded method yahooMap.addEventListener( 'onMapLoad', onMapLoaded ); yahooMap.addEventListener( 'onMapError', onMapError );

// instantiate map controller mapController = new MapController( yahooMap );

// instantiate panTool method var panTools : PanTool = new PanTool( yahooMap );

// allow user to pan across the map panTools.setPanTool( true );

// instantiate the maps widget class var widgets : Widgets = new Widgets( yahooMap );

// activate Navigator widget widgets.showNavigatorWidget();

// activate map-type selection widget widgets.showSatelliteControlWidget();

**736** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

We first import the classes that we use in this ActionScript file (lines 3–5). The Cur-

sorManager class allows us to set and remove the busy cursor. We also import all of the classes located in the com/yahoo/webapis/maps/methodgroups directory, which provide us with the ability to control the map and to create the map’s user interface widgets. We set the constants necessary for using a Yahoo! Map in lines 8–13. swfDomID (line 8) is a string that must be equal to the object id used in the .html file containing the applica- tion. UUID (line 9) is the unique ID of the map element and is set to Math.random()\*10000

so that it is a random integer from 0 up to 9999. YahooAPIKey (lines 12) should be set to the Yahoo Application ID you obtained from developer.yahoo.com. Constant mapURL (line 13) is the path to the as2map.swf file. Because we placed that file in the base directory of the application, we can simply specify the file’s name. Line 14 creates the mapCon-

troller variable that we will instantiate at line 29. The function initMap (lines 16–23) is called when the application has finished cre-

ating the user interface elements, as specified by addressBook’s creationComplete

attribute (line 7 in Fig. 18.7). This function sets the busy cursor, then registers event han- dlers for the onMapLoad and onMapError events for the map. The onMapError event han-

**49 50** public function onMapError( errorCode:String, httpStatus:String ) : void **51** { **52** Alert.show( errorCode + '\\n' + httpStatus, 'Map Load Error' ); **53** } // end function onMapError **54 55** // place a labeled marker at the currently selected address **56** public function setMarkerByAddress() : void **57** { **58** mapController.removeAllMarkers(); // clear previous markers **59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79** } // end function setMarkerByAddress

**Fig. 18.13** | Handle the map functions for the Address Book application. (Part 2 of 2.)

// add marker at specified address, // labeled with contact's name and address mapController.addCustomPOIMarker(

( contactsView.selectedItem.street + " " + contactsView.selectedItem.city + " " + contactsView.selectedItem.state ), contactsView.selectedItem.firstname, contactsView.selectedItem.lastname, (contactsView.selectedItem.street + "\\n" + contactsView.selectedItem.city + ", " + contactsView.selectedItem.state + " " + contactsView.selectedItem.zip ), 0x990099, 0xFFFFFF );

// instantly center on address and zoom in mapController.setCenterByAddressAndZoom(

contactsView.selectedItem.street + " " + contactsView.selectedItem.city + " " + contactsView.selectedItem.state, 5, 0 );

18.4 Accessing XML Data from Your Application **737**

dler (lines 50–53) triggers an Alert displaying the error. The onMapLoaded event handler (lines 26–48) adds MapController, PanTool and Widgets objects to the map.

**MapController** enables programmatic control of the map’s location and zoom and the placing of markers on the map at a specified address.4 **PanTool** (line 32) enables the user to click and drag the map, as well as double click a location to center on it. **Widgets** (line 38) add the ability to show a navigator widget (line 41), which provides zoom con- trols and an overview map, and a satellite control widget (line 44), which provides the user with a selection of the regular map view, the satellite view, or the hybrid view. After loading all of the map’s functions, initMap removes the busy cursor (line 47).

Function setMarkerByAddress (lines 56–79) provides the ability to place a marker at the location of the selected contact’s location. It uses the mapController’s addCustom-

POIMarker function (lines 62–72) to place a marker at the contact’s address that contains the contact’s first and last name as well as the address. It also uses the mapController’s setCenterByAddressAndZoom function (lines 75–78) to center the map on that contact’s location and zoom down to the street level (zoom level 5). The final parameter of the set- CenterByAddressAndZoom function is the amount of time in milliseconds the map should take to pan to the new location. We set this to 0, because the map will not be visible when this function is called.

**_Button Event-Handling ActionScript_** The buttonActions.as ActionScript file (Fig. 18.14) handles the functionality of most of the addressBook application’s Buttons. Each Button has a corresponding function. The first Button it handles is the **Cancel** Button (lines 167–168 of Fig. 18.7). The cancelCon- tact function (lines 6–19 of Fig. 18.14) reverts **Edit Contact**’s fields back to the previous value of the selected contact, then switches the Accordion to **View Contacts**. The delete- Contact function (lines 22–35) handles when the user clicks a **Delete** Button (lines 94–98 or 172–176 of Fig. 18.7), then clicks **Yes** in the confirmation dialog box. It switches the Accordion to **View Contacts** if the user was not already there, and removes the currently selected contact. The emailContact function (lines 38–46 of Fig. 18.14) creates a new URLRequest object that contains a mailto URL for the current contact’s e-mail address. The call to navigateToURL opens that URL in \_self, which refers to the current browser window. Since the URL is a mailto URL, however, the browser tells the user’s default e- mail client to open and to compose a new message addressed to the specified e-mail ad- dress. The getDirections function (lines 49–60) uses the same method to open a URL; however, instead of forming a mailto URL, it forms a URL pointing to the Yahoo! Maps page, specifying that we want directions ending at the currently selected contact’s address. It opens this URL in \_blank, which creates a new browser window with the specified URL. The saveContact function (lines 63–82) sets the data in the addressCollection

item corresponding to the currently selected contact to be equal to that of the text in **Edit Contact**’s TextInputs. It then refreshes addressCollection in case the contactsView Da- taGrid is being filtered (the refresh ensures that the filter results are current). The newCon- tact function (lines 85–93) creates a new item in addressCollection whose firstname

is set to "New" and whose lastname is set to "Contact". It then sets the selectedIndex of the contactsView DataGrid to be the new item, and switches to the **Edit Contacts** view.

4\. The full list of functions this enables is available at developer.yahoo.com/flash/as3webapis/ docs/com/yahoo/webapis/maps/methodgroups/MapController.html.

**738** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

**1** // Fig. 18.14: buttonActions.as **2** // Implement the actions of each button **3** import mx.events.CloseEvent; **4 5** // "Cancel" button **6** private function cancelContact() : void **7** { **8** // revert edit fields to original value **9** firstName.text = contactsView.selectedItem.firstname;

**10** lastName.text = contactsView.selectedItem.lastname; **11** streetAddress.text = contactsView.selectedItem.street; **12** city.text = contactsView.selectedItem.city; **13** state.text = contactsView.selectedItem.state; **14** zipCode.text = contactsView.selectedItem.zip; **15** eMail.text = contactsView.selectedItem.email; **16** phone.text = contactsView.selectedItem.phone; **17** // return user to "View Contacts" section **18** accordion.selectedIndex = 0; **19** } // end function cancelContact **20 21** // "Delete" button **22** private function deleteContact( event : CloseEvent ) : void **23** { **24** // handle if user clicked "Yes" in "Delete Contact" dialog box **25 26** { **27** // return user to "View Contacts" section if **28** // the user was in "Edit Contacts" section **29** if ( accordion.selectedIndex == 2 ) **30** accordion.selectedIndex = 0; **31 32** // remove selected contact **33 34** } // end if **35** } // end function deleteContact **36 37** // "E-Mail" button **38** public function emailContact() : void **39** { **40 41 42 43 44 45 46** } // end function emailContact **47 48** // "Directions" button **49** public function getDirections() : void **50** { **51** // form directions URL given the selected address **52 53**

**Fig. 18.14** | Implement the actions of each button. (Part 1 of 2.)

if ( event.detail == Alert.YES )

addressCollection.removeItemAt( contactsView.selectedIndex );

// form "mailto" URL given the selected e-mail address var mailURL : URLRequest = new URLRequest( 'mailto:' +

contactsView.selectedItem.email );

// open the URL without opening new window navigateToURL( mailURL, "\_self" );

var directionsURL : URLRequest = new URLRequest( 'http://maps.yahoo.com/broadband#mvt=m&q2=' +

18.5 Interacting with Server-Side Applications **739**

**18.5 Interacting with Server-Side Applications** Flex makes it easy to consume web services. In this example (Fig. 18.15), we use a web service from WebServiceX.net to obtain weather data based on a zip code. The user inputs the zip code, clicks a button and a five-day forecast is displayed on the screen (Fig. 18.16). Additionally, a marker is placed on a Yahoo! Map at the zip code’s location, and the fore- cast information is displayed in the marker’s tool tip (Fig. 18.17). You can test a live ver- sion of this application at test.deitel.com/examples/iw3htp4/flex/weather/. More information on web services is available in Chapter 28, Web Services, and at our Web Ser- vices Resource Center at www.deitel.com/webservices.

**54 55 56 57 58** // open URL in a new window **59** navigateToURL( directionsURL, "\_blank" ); **60** } // end function getDirections **61 62** // "Save" button **63** private function saveContact() : void **64** { **65** // write changes to data array **66 67** firstname : firstName.text, **68** lastname : lastName.text, **69** street : streetAddress.text, **70** city : city.text, **71** state : state.text, **72** zip : zipCode.text, **73** email : eMail.text, **74** phone : phone.text }, **75** contactsView.selectedIndex ); **76 77** // refresh data collection so that search will still work **78** addressCollection.refresh(); **79 80** // return user to "View Contacts" section **81** accordion.selectedIndex = 0; **82** } // end function saveContact **83 84** // "New" button **85** private function newContact() : void **86** { **87 88** firstname : 'New', lastname : 'Contact', **89** street : null, city : null, state : null, **90** zip : null, email : null, phone : null } ); **91** contactsView.selectedIndex = addressCollection.length; **92** accordion.selectedIndex = 2; **93** } // end function newContact

**Fig. 18.14** | Implement the actions of each button. (Part 2 of 2.)

contactsView.selectedItem.street + ' ' + contactsView.selectedItem.city + ' ' + contactsView.selectedItem.state + ' ' + contactsView.selectedItem.zip );

addressCollection.setItemAt( {

addressCollection.addItem( {

**740** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

**1** <?xml version = "1.0" encoding = "utf-8" ?> **2** <!-- Fig. 18.15: weather.mxml --> **3** <!-- Weather Forecast application in Flex 2 --> **4** <mx:Application xmlns:mx = "http://www.adobe.com/2006/mxml" **5** layout = "absolute" xmlns:yahoo = "com.yahoo.webapis.maps.\*" **6** creationComplete = "initMap();" > **7 8** <mx:Script source = "map.as" /> **9**

**10** <mx:Script> **11** <!\[CDATA\[ **12** import mx.controls.dataGridClasses.DataGridColumn; **13** import mx.rpc.events.ResultEvent; **14** import mx.managers.CursorManager; **15** import mx.controls.Alert; **16** import mx.collections.ArrayCollection; **17** import flash.events.MouseEvent; **18 19 20 21 22** \[Bindable\] **23** private var xmlData : XML; **24** \[Bindable\] **25** private var highLowTemp : String; **26** \[Bindable\] **27** private var fiveDayForecast : String = ""; **28** \[Bindable\] **29** private var placeName : String; **30 31** // handle getWeatherButton click action **32** private function getWeather() : void **33** { **34** // disable button while request is pending **35 36 37** // hide the old forecast data before displaying new data **38 39 40** // reset place name while loading new data **41** placeNameText.text = ""; **42 43** // show the loading progress bar **44 45 46** // request the new data **47** weatherService.GetWeatherByZipCode.send(); **48** } // end function getWeather **49 50** private function weatherResultHandler(event : ResultEvent) : void **51** { **52 53**

**Fig. 18.15** | Weather Forecast application in Flex 2. (Part 1 of 5.)

// define default namespace default xml namespace = "http://www.webservicex.net";

getWeatherButton.enabled = false;

forecastBox.visible = false;

loadingBar.visible = true;

// save the result of the web service as XML xmlData = XML( event.result );

18.5 Interacting with Server-Side Applications **741**

**54 55** // check that result is valid by checking length of StateCode **56** if ( xmlData.GetWeatherByZipCodeResult\[ 0 \]. **57** StateCode.text().length() != 0 ) **58** { **59** // set placeNameText to the city and state of the zip code **60** placeName = xmlData.GetWeatherByZipCodeResult\[ 0 \]. **61** PlaceName.text() + ", " + **62** xmlData.GetWeatherByZipCodeResult\[ 0 \].StateCode.text(); **63** placeNameText.text = "5 Day Forecast for " + placeName; **64 65 66 67 68 69 70 71 72** forecastBox.visible = true; **73 74** // save today’s high/low as a string **75** highLowTemp = xmlData.GetWeatherByZipCodeResult. **76** Details.WeatherData.MaxTemperatureF\[ 0 \].text() + **77** "/" + xmlData.GetWeatherByZipCodeResult.Details. **78** WeatherData.MinTemperatureF\[ 0 \].text(); **79 80** // save the five-day forecast as a string **81** fiveDayForecast = highLowTemp; **82 83 84 85 86 87 88 89 90 91 92** // place a marker on the map with the forecast **93** mapController.addCustomPOIMarker( **94** zipcode.text, placeName, highLowTemp, fiveDayForecast, **95** 0x990099, 0xFFFFFF); **96 97** mapController.setCenterByAddressAndZoom( **98** zipcode.text, 7, 0 ); **99** } **100** else **101** { **102** Alert.show( "Invalid zip code" ); **103** } **104** // hide the loading progress bar **105** loadingBar.visible = false; **106**

**Fig. 18.15** | Weather Forecast application in Flex 2. (Part 2 of 5.)

// set image, temperature and date for each day setData( weatherImage0, weatherTemp0, weatherDay0, 0 ); setData( weatherImage1, weatherTemp1, weatherDay1, 1 ); setData( weatherImage2, weatherTemp2, weatherDay2, 2 ); setData( weatherImage3, weatherTemp3, weatherDay3, 3 ); setData( weatherImage4, weatherTemp4, weatherDay4, 4 );

for ( var i : int = 1; i < 5; i++ ) {

fiveDayForecast += ", " + xmlData. GetWeatherByZipCodeResult.Details.WeatherData.

MaxTemperatureF\[ i \].text() + "/" + xmlData. GetWeatherByZipCodeResult.Details. WeatherData.MinTemperatureF\[ i \].text();

} // end for

**742** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

**107** // enable getWeatherButton **108** getWeatherButton.enabled = true; **109** } // end function weatherResultHandler **110 111** private function setData( forecastImage : Image, **112** tempText : Text, dateText : Text, i : int ) : void **113** { **114** // set the image for each day **115 116 117 118** // set the temperature for each day **119 120 121 122 123 124** // set the date for each day **125 126 127** } **128** \]\]> **129** </mx:Script> **130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157** <!-- user interface begins here --> **158** <mx:Panel title = "Weather" width = "100%" height = "100%"> **159** <mx:Accordion id = "accordion" width = "100%" height = "100%"

**Fig. 18.15** | Weather Forecast application in Flex 2. (Part 3 of 5.)

forecastImage.source = xmlData.GetWeatherByZipCodeResult. Details.WeatherData.WeatherImage\[ i \].text();

tempText.text = xmlData.GetWeatherByZipCodeResult. Details.WeatherData.MaxTemperatureF\[ i \].text() + "\\n" + xmlData.GetWeatherByZipCodeResult.Details. WeatherData.MinTemperatureF\[ i \].text();

dateText.text = xmlData.GetWeatherByZipCodeResult. Details.WeatherData.Day\[ i \].text();

<!-- show/hide animations for forecast boxes --> <mx:Parallel id = "forecastAnimationIn">

<mx:Fade duration = "1000" alphaFrom = "0.0" alphaTo = "1.0" /> <mx:Zoom zoomWidthTo = "1" zoomHeightTo = "1" zoomWidthFrom = "0"

zoomHeightFrom = "0" /> </mx:Parallel>

<mx:Parallel id = "forecastAnimationOut"> <mx:Fade duration = "500" alphaFrom = "1.0" alphaTo = "0.0" /> <mx:Zoom zoomWidthTo = "0" zoomHeightTo = "0" zoomWidthFrom = "1"

zoomHeightFrom = "1" /> </mx:Parallel>

<!-- WebService description --> <mx:WebService id = "weatherService"

wsdl = "http://www.webservicex.net/WeatherForecast.asmx?WSDL" fault = "Alert.show( event.fault.faultString )" result = "weatherResultHandler( event )" showBusyCursor = "true"> <mx:operation name = "GetWeatherByZipCode" resultFormat = "e4x">

<mx:request> <ZipCode>{ zipcode.text }</ZipCode>

</mx:request> </mx:operation>

</mx:WebService>

18.5 Interacting with Server-Side Applications **743**

**160** creationPolicy = "all"> **161** <mx:VBox label = "Forecast View" width = "100%" height = "100%"> **162** <mx:ApplicationControlBar **163** defaultButton = "{ getWeatherButton }"> **164** <mx:Label width = "100%" **165** text = "Enter a zip code:" /> **166** <mx:TextInput id = "zipcode" left = "10" /> **167** <mx:Button id = "getWeatherButton" label = "Get Weather" **168** click = "getWeather()" left = "10" /> **169** </mx:ApplicationControlBar> **170 171** <mx:Text fontWeight = "bold" id = "placeNameText" /> **172 173 174 175 176 177** <!-- forecastBox holds the five-day forecast --> **178 179 180 181 182** <mx:VBox id = "forecastBox0" horizontalAlign = "center" **183** borderStyle = "solid" width = "20%" height = "0%"> **184** <mx:Text id = "weatherDay0" /> **185** <mx:Image id = "weatherImage0" /> **186** <mx:Text id = "weatherTemp0" /> **187** </mx:VBox> **188 189** <mx:VBox horizontalAlign = "center" **190** borderStyle = "solid" width = "20%"> **191** <mx:Text id = "weatherDay1" /> **192** <mx:Image id = "weatherImage1" /> **193** <mx:Text id = "weatherTemp1" /> **194** </mx:VBox> **195 196** <mx:VBox horizontalAlign = "center" **197** borderStyle = "solid" width = "20%"> **198** <mx:Text id = "weatherDay2" /> **199** <mx:Image id = "weatherImage2" /> **200** <mx:Text id = "weatherTemp2" /> **201** </mx:VBox> **202 203** <mx:VBox horizontalAlign = "center" **204** borderStyle = "solid" width = "20%"> **205** <mx:Text id = "weatherDay3" /> **206** <mx:Image id = "weatherImage3" /> **207** <mx:Text id = "weatherTemp3" /> **208** </mx:VBox> **209 210** <mx:VBox horizontalAlign = "center" **211** borderStyle = "solid" width = "20%"> **212** <mx:Text id = "weatherDay4" />

**Fig. 18.15** | Weather Forecast application in Flex 2. (Part 4 of 5.)

<mx:ProgressBar id = "loadingBar" indeterminate = "true" labelPlacement = "bottom" visible = "false" minimum = "0" maximum = "100" label = "Loading Weather Data" direction = "right" width = "75%" />

<!-- start off as hidden, define show and hide effects --> <mx:HBox id = "forecastBox" width = "100%" height = "100%"

visible = "false" showEffect = "{ forecastAnimationIn }" hideEffect = "{ forecastAnimationOut }">

**744** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

We first look at the user interface part of weather.mxml (lines 158–232). Line 158 begins the user interface definition with a Panel, which holds an Accordion. In the Accor- dion (lines 159–231), there are two VBoxes, one for the **Forecast View** section (lines 161– 217) and one for the **Map View** section (lines 218–230). The **Forecast View** VBox holds a ApplicationControlBar (lines 162–169) that contains the zipcode TextInput box, the **Get Weather** Button and a ProgressBar that notifies the user that the web service call is

**213** <mx:Image id = "weatherImage4" /> **214** <mx:Text id = "weatherTemp4" /> **215** </mx:VBox> **216** </mx:HBox> **217** </mx:VBox> **218** <mx:VBox label = "Map View" width = "100%" height = "100%"> **219** <!-- create Yahoo! Map --> **220** <yahoo:YahooMapService id = "yahooMap" UUID = "{ UUID }" **221** swfDomId = "{ swfDomID }" **222** apiId = "{ YahooAPIKey }" **223** mapURL = "{ mapURL }" width = "600" height = "400" /> **224** <mx:HBox> **225** <mx:Button label = "Back" **226** click = "accordion.selectedIndex=0;" /> **227** <mx:Button label = "Clear" **228** click = "mapController.removeAllMarkers();" /> **229** </mx:HBox> **230** </mx:VBox> <!-- end "Map View" Section --> **231** </mx:Accordion> **232** </mx:Panel> **233** </mx:Application>

**Fig. 18.16** | **Forecast View** of five-day weather forecast for Boston, MA.

**Fig. 18.15** | Weather Forecast application in Flex 2. (Part 5 of 5.)

18.5 Interacting with Server-Side Applications **745**

being processed. The **ProgressBar** element allows you to give the user an idea of an oper- ation’s state. We set the indeterminate attribute of this ProgressBar to true because the application doesn’t know when the web service call will complete.

The VBox also holds an HBox (lines 179–216) that contains the five-day forecast. Each day’s forecast is held in a VBox that displays the date, an image representing the weather, and the high and low temperature in Fahrenheit. The HBox containing the forecast is not initially visible (line 180) because we do not want to see the borders of its VBoxes before there is any content. It also has the attributes showEffect and hideEffect (lines 180– 181). These tell Flex which animation to use when the element is shown or hidden. These animations (lines 132–142) use the **Parallel element** to play effects simultaneously. Each Parallel element contains two effects, Fade and Zoom. The **Map View** VBox (lines 218– 230) contains the **YahooMapService** element, as well as two Buttons. The first Button

simply returns the user to the **Forecast View**, and the second Button tells the YahooMap-

Service object to remove any markers from the map. The weatherService WebService element (lines 145–155) specifies the URL of the

**Web Services Description Language (WSDL)** file for the web service. A WSDL file is an XML file describing what services are available on a server, how to consume those services, what parameters they accept and what they return. Flex uses this WSDL file to make it easy to access the services without further configuration. We specify the fault event han- dler for the web service (line 147) to show an Alert dialog, and the result event handler to be weatherResultHandler (line 148). We then describe a specific method using the **operation element** (lines 150–154), which specifies the name of the method (GetWeath-

**Fig. 18.17** | **Map View** of 5-Day Weather Forecast for Boston, MA.

**746** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

erByZipCode), and the desired format of the result (e4x). One way to send parameters to the web service is to enclose request elements in the operation element. In this case, the ZipCode parameter is bound to the text property of the zipcode TextInput. Alterna- tively, you can specify the parameters when you actually make the web service call using the same syntax that is used to send parameters to a function.

**_ActionScript for Weather Application_** A Script element (lines 10–129) contains most of this application’s ActionScript. Because the code is located in a CDATA section, the MXML compiler knows not to parse this section as XML in case it contains any reserved characters, such as angle brackets (< and >), that might confuse the compiler. In this section, we define the default XML namespace to be http://www.webservicex.net (line 20). This prevents us from having to specify this namespace every time we access the XML returned by the web service. Function getWeather (lines 32–48) is invoked when getWeatherButton is clicked. It first disables getWeatherButton and sets the busy cursor. It then hides the HBox containing the forecast data, because it is about to be changed, and resets placeNameText. It continues by showing the loadingBar ProgressBar (line 44) and finally requests the weather data through weatherService.GetWeatherByZipCode’s send method (line 47).

Method weatherResultHandler (lines 50–109) is called upon completion of this request. It first saves the web service’s result as an XML object (line 53). It then checks whether the result is valid by seeing if the StateCode returned by the service is not empty. If it is empty, an Alert (line 102) will notify the user that the zip code is invalid. If the StateCode exists, that indicates that the zip code was valid, and that we have received weather data. In this case, the program continues to set placeNameText (line 63) based on the city and state returned by the service, traversing the XML’s tree down to the PlaceName and StateCode items using dot operators (lines 60–62). Next, it displays the data for each data with multiple calls to the setData function (lines 66–70).

This function (lines 111–127) sets the source URL of the forecast image for a given day to the URL in the XML’s corresponding WeatherImage element (lines 115–116). The first WeatherImage in the XML has an index of 0. We apply a similar technique to populate the high and low temperature (lines 119–122) and the date for a given day (lines 125– 126). Lines 75–78 save today’s high and low temperature, as well as the five-day forecast, as strings for use in the map marker.

Finally, we place a marker on the map using mapController’s addCustomPOIMarker function (lines 93–95). We specify the location of the marker to be the zip code we obtained data for, and title of the marker to be the name of that town or city, as well as today’s high and low temperature. The body of the marker is set to display the five-day forecast. The setCenterByAddressAndZoom function (lines 97–98) zooms in and centers the map on the zip code’s location. The function finally hides the ProgressBar, removes the busy cursor, and enables getWeatherButton.

The map.as ActionScript file (Fig. 18.18) handles the map functionality of the weather application. You need to copy the Yahoo! Map com folder and as2map.swf file into the application’s base directory, just as we did for the addressBook application. This version of map.as contains the same initMap, onMapLoaded and onMapError functions as addressBook’s version of map.as, but doesn’t include the function setMarkerByAddress. The only other change is the swfDomID, which is set to weather (line 10).

18.5 Interacting with Server-Side Applications **747**

**1** // Fig. 18.18: map.as **2** // Handle the map functions for the Weather application **3** import mx.managers.CursorManager; **4** import com.yahoo.webapis.maps.methodgroups.\*; **5** import mx.controls.Alert; **6 7** // define constants **8 9** private const UUID : int = Math.random() \* 10000;

**10 11** // YahooAPIKey string must be your own from developer.yahoo.com **12** private const YahooAPIKey : String = "_Your Yahoo API Key Here_"; **13** private const mapURL : String = "as2map.swf"; **14** private var mapController : MapController; **15 16** private function initMap() : void **17** { **18** CursorManager.setBusyCursor(); // turn on busy cursor **19 20** // wait for map to load, then call onMapLoaded method **21** yahooMap.addEventListener( 'onMapLoad', onMapLoaded ); **22** yahooMap.addEventListener( 'onMapError', onMapError ); **23** } // end function initMap **24 25** // handle map after it has loaded **26** public function onMapLoaded( event : Object ) : void **27** { **28** // instantiate map controller **29** mapController = new MapController( yahooMap ); **30 31** // instantiate panTool method **32** var panTools : PanTool = new PanTool( yahooMap ); **33 34** // allow user to pan across the map **35** panTools.setPanTool( true ); **36 37** // instantiate the maps widget class **38** var widgets : Widgets = new Widgets( yahooMap ); **39 40** // activate Navigator widget **41** widgets.showNavigatorWidget(); **42 43** // activate map-type selection widget **44** widgets.showSatelliteControlWidget(); **45 46** // turn off busy cursor **47** CursorManager.removeBusyCursor(); **48** } // end function onMapLoaded **49 50** public function onMapError( errorCode:String, httpStatus:String ) : void **51** { **52** Alert.show(errorCode + '\\n' + httpStatus, 'Map Load Error'); **53** } // end function onMapError

**Fig. 18.18** | Handle the map functions for the Weather application.

private const swfDomID : String = "weather";

**748** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

**18.6 Customizing Your User Interface** Flex allows you to customize the style of your user interface. Just as in XHTML, you can include the styles inline, put them in a separate style section, or place them in a separate style-sheet file. The syntax is similar to that of CSS, but the names of the properties are different when used inline. Here, we add a style section and an inline style to our cover- Viewer application (Fig. 18.19). You can try this application at test.deitel.com/

examples/iw3htp4/flex/coverViewerStyles/. The first change we make is to add a **Style element** (lines 7–15). Inside the Style

element is a format virtually identical to CSS (Chapter 5). We first give all LinkButton and HorizontalList elements custom styles, by setting the font family, size and color. We specify a custom style by using a dot before the style name, customStyle. We can then apply that style to any eligible element by adding a styleName = "customStyle" attribute, as we do in line 101. Finally, we can specify a style inline as we do for the Panel element (lines 74–76). Some of the names of the inline style attributes are different from those in the Style element and in CSS, using a camel-case naming convention instead of hyphen- ation (e.g. font-family becomes fontFamily).

**1** <?xml version = "1.0" encoding = "utf-8" ?> **2** <!-- Fig. 18.19: coverViewerStyles.mxml --> **3** <!-- Using a Style element and inline styles --> **4** <mx:Application xmlns:mx = "http://www.adobe.com/2006/mxml"> **5 6** <!-- define styles for application --> **7 8 9**

**10 11 12 13 14 15 16 17** <!-- ActionScript goes in this section --> **18** <mx:Script> **19** <!\[CDATA\[ **20** // import the Cubic easing function for state transitions **21** import mx.effects.easing.Cubic; **22** \]\]> **23** </mx:Script> **24 25** <!-- an array of images --> **26** <mx:ArrayCollection id = "bookCovers"> **27** <!-- each image has a name and source attribute --> **28** <mx:Object name = "C How to Program" source = "chtp5.jpg" /> **29** <mx:Object name = "C++ How to Program" source = "cpphtp6.jpg" /> **30** <mx:Object name = "Internet How to Program" **31** source = "iw3htp4.jpg" /> **32** <mx:Object name = "Java How to Program" source = "jhtp7.jpg" />

**Fig. 18.19** | Using a Style element and inline styles. (Part 1 of 4.)

<mx:Style> LinkButton { font-family: "Helvetica, sans-serif";

font-size: 14 } HorizontalList { font-size: 12;

color: black } .customStyle { font-size: 16;

font-weight: bold; color: black }

</mx:Style>

18.6 Customizing Your User Interface **749**

**33** <mx:Object name = "VB How to Program" source = "vbhtp3.jpg" /> **34** <mx:Object name = "Visual C# How to Program" **35** source = "vcsharphtp2.jpg" /> **36** <mx:Object name = "Simply C++" source = "simplycpp.jpg" /> **37** <mx:Object name = "Simply VB 2005" source = "simplyvb2005.jpg" /> **38** <mx:Object name = "Simply Java" source = "simplyjava.jpg" /> **39** <mx:Object name = "Small C++ How to Program" **40** source = "smallcpphtp5.jpg" /> **41** <mx:Object name = "Small Java" source = "smalljavahtp6.jpg" /> **42** </mx:ArrayCollection> **43 44** <!-- define the application's states --> **45** <mx:states> **46** <mx:State name = "HideThumbnails"> **47** <mx:RemoveChild target = "{ thumbnailList }" /> **48 49** <!-- switch the showHideButton to hide --> **50** <mx:SetEventHandler target = "{ showHideButton }" name = "click" **51** handler = "currentState = ''" /> **52** </mx:State> **53** </mx:states> **54 55** <!-- define the transition effect for application state changes --> **56** <mx:transitions> **57** <mx:Transition> **58** <mx:Resize **59** targets = "{ \[ thumbnailList, viewPanel, largeImage \] }" **60** duration = "750" easingFunction = "Cubic.easeOut" /> **61** </mx:Transition> **62** </mx:transitions> **63 64** <!-- bind the source of largeImage to the selected thumbnail --> **65** <mx:Binding **66** source = "'fullsize/' + **67** bookCovers.getItemAt( selectCoverSlider.value ).source" **68** destination = "largeImage.source" /> **69** <mx:Binding source = "'fullsize/' + thumbnailList.selectedItem.source" **70** destination = "largeImage.source" /> **71 72** <!-- user interface begins here --> **73 74 75 76 77 78** <mx:HBox height = "100%" width = "100%"> **79** <mx:VSlider id = "zoomSlider" value = "100" minimum = "0" **80** maximum = "100" liveDragging = "true" **81** change = "largeImage.percentWidth = zoomSlider.value; **82** largeImage.percentHeight = zoomSlider.value;" **83** height = "100%" width = "0%" **84** labels = "\[ '0%', 'Zoom', '100%' \]" />

**Fig. 18.19** | Using a Style element and inline styles. (Part 2 of 4.)

<mx:Panel id = "viewPanel" title = "Deitel Book Cover Viewer" width = "100%" height = "100%" horizontalAlign = "center" color = "blue" fontSize = "18" fontFamily = "Helvetica" textAlign = "center">

**750** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

**85** <mx:VBox width = "100%" height = "100%" **86** horizontalAlign = "center"> **87 88** <!-- We bind the source of this image to the source of --> **89** <!-- the selected thumbnail, and center it in the VBox. --> **90** <!-- completeEffect tells Flex to fade the image in --> **91** <mx:Image id = "largeImage" **92** source = "" **93** horizontalAlign = "center" **94** verticalAlign = "middle" **95** width = "100%" height = "100%" **96** completeEffect = "Fade" /> **97 98** <!-- bind this Label to the name of the selected thumbnail --> **99** <!-- also specify a styleName to use the customStyle style --> **100 101 102** </mx:VBox> **103** </mx:HBox> **104 105** <!-- slider can switch between images --> **106** <mx:HSlider id = "selectCoverSlider" height = "0%" **107** minimum = "0" maximum = "{ bookCovers.length - 1 }" **108** showDataTip = "false" snapInterval = "1" tickInterval = "1" **109** liveDragging = "true" **110** change = "thumbnailList.selectedIndex = **111** selectCoverSlider.value; **112** thumbnailList.scrollToIndex( selectCoverSlider.value )" /> **113 114** <!-- display thumbnails of the images in bookCovers horizontally --> **115** <mx:HorizontalList id = "thumbnailList" **116** dataProvider = "{ bookCovers }" width = "100%" height = "160" **117** selectedIndex = "0" **118** change = "selectCoverSlider.value = thumbnailList.selectedIndex"> **119 120** <!-- define how each item is displayed --> **121** <mx:itemRenderer> **122** <mx:Component> **123** <mx:VBox width = "140" height = "160" **124** horizontalAlign = "center" verticalAlign = "middle" **125** verticalScrollPolicy = "off" **126** horizontalScrollPolicy = "off" paddingBottom = "20"> **127 128** <!-- display a thumbnail of each image --> **129** <mx:Image source = "{ 'thumbs/' + data.source }" **130** verticalAlign = "middle" /> **131 132** <!-- display the name of each image --> **133** <mx:Label text = "{ data.name }" /> **134** </mx:VBox> **135** </mx:Component> **136** </mx:itemRenderer> **137** </mx:HorizontalList>

**Fig. 18.19** | Using a Style element and inline styles. (Part 3 of 4.)

<mx:Label text = "{ thumbnailList.selectedItem.name }" styleName = "customStyle" />

18.6 Customizing Your User Interface **751**

To specify an external style-sheet, which uses syntax identical to the contents of a Style element, you simply add a Style element with a source attribute pointing to the style-sheet file, as in <mx:Style source = "styles.css" />.

A great way to try out different styles is Adobe’s Flex Style Explorer, which you can find at weblogs.macromedia.com/mc/archives/FlexStyleExplorer.html. This allows

**138 139** <!-- this will exist in the bottom border of the Panel --> **140** <mx:ControlBar> **141** <mx:LinkButton label = "Show/Hide Thumbnails" **142** click = "currentState = 'HideThumbnails';" **143** id = "showHideButton" /> **144** </mx:ControlBar> **145** </mx:Panel> **146** </mx:Application>

**Fig. 18.19** | Using a Style element and inline styles. (Part 4 of 4.)

**752** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

you to visually create styles for most Flex user interface elements and generate the CSS you need to apply that style to your application.

Another way to customize the look of your application is through themes. The default theme of Flex applications is Halo. Other themes available with the Flex 2 SDK are Halo Classic (the former default), Ice, Institutional, Smoke and Wooden. All of these are defined in CSS files, but some of them also reference outside images and SWF files. These theme files can be found in flex_sdk_2/frameworks/themes/. You can specify that you want your application to use any of these themes at compile time by adding a theme

parameter to the mxmlc command. Fig. 18.20 shows how to compile coverViewer.mxml

with the ice.css theme. You can see how it looks in Fig. 18.21.

**18.7 Creating Charts and Graphs** To use Flex’s charting components, you must first install Flex Charting. A trial version is available at www.adobe.com/go/tryflex. Installation instructions are available at www.ado- be.com/support/documentation/en/flex/2/install.html#installingcharts.

**Fig. 18.20** | Running mxmlc with the theme parameter in Windows XP **Command**

**Prompt**.

**Fig. 18.21** | Deitel Cover Viewer compiled with the Ice theme.

18.7 Creating Charts and Graphs **753**

To demonstrate Flex’s charting capabilities, we’ve added a **Chart View** section to our weather application (Fig. 18.22) and populated it with two charts. The first is a **Line-**

**Chart** that separately plots the high and low temperatures against the date. The user can mouse over any point of data and a data tip will tell the user whether it is a high or low temperature, the date and the temperature. The second chart is a **CandlestickChart**, dis- playing the range of temperatures for each day. This element also uses data tips to show greater detail. You can test a live version of this application at test.deitel.com/exam- ples/iw3htp4/flex/weatherChart/.

A chart is just another type of user interface element. In addition to the chart types mentioned in Section 18.2, a full list of charting components is available from Adobe at livedocs.adobe.com/flex/201/html/charts_intro_108_03.html.

Figure 18.23 is a listing of the weather application with charting capabilities added. The first change we make in the code is to create an ArrayCollection to make our weather data available to a chart. To do this, we add the code \[Bindable\] public var

weatherArray : ArrayCollection; in lines 31–32. We want it to be Bindable so that whenever the ArrayCollection is changed, the chart updates automatically. Next, we add lines 47 and 70 to create text showing the place name in the **Chart View** that acts just like the text in our **Forecast View**. We also add line 182 to animate changes in a chart’s data.

**Fig. 18.22** | **Chart View** showing Boston, MA, forecast.

**754** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

**1** <?xml version = "1.0" encoding = "utf-8" ?> **2** <!-- Fig. 18.23: weatherChart.mxml --> **3** <!-- Charting weather data in Flex 2 --> **4** <mx:Application xmlns:mx = "http://www.adobe.com/2006/mxml" **5** layout = "absolute" **6** xmlns = "\*" xmlns:yahoo = "com.yahoo.webapis.maps.\*" **7** creationComplete = "initMap();" > **8 9** <mx:Script source = "map.as" />

**10 11** <mx:Script> **12** <!\[CDATA\[ **13** import mx.controls.dataGridClasses.DataGridColumn; **14** import mx.rpc.events.ResultEvent; **15** import mx.managers.CursorManager; **16** import mx.controls.Alert; **17** import mx.collections.ArrayCollection; **18** import flash.events.MouseEvent; **19 20** // define default namespace so we don't have to write it every time **21** default xml namespace = "http://www.webservicex.net"; **22 23** \[Bindable\] **24** private var xmlData : XML; **25** \[Bindable\] **26** private var highLowTemp : String; **27** \[Bindable\] **28** private var fiveDayForecast : String = ""; **29** \[Bindable\] **30** public var weatherArray : ArrayCollection; **31 32 33 34** // handle getWeatherButton click action **35** private function getWeather() : void **36** { **37** // disable button while request is pending **38** getWeatherButton.enabled = false; **39 40** // hide the old forecast data before displaying new data **41** forecastBox.visible = false; **42 43** // reset place name while loading new data **44** placeNameText.text = ""; **45 46** // reset place name while loading new data **47 48 49** // show the loading progress bar **50** loadingBar.visible = true; **51**

**Fig. 18.23** | Charting weather data in Flex 2. (Part 1 of 6.)

\[Bindable\] private var placeName : String;

placeNameChartText.text = "";

18.7 Creating Charts and Graphs **755**

**52** // request the new data **53** weatherService.GetWeatherByZipCode.send(); **54** } // end function getWeather **55 56** private function weatherResultHandler(event : ResultEvent) : void **57** { **58** // save the result of the web service as XML **59** xmlData = XML( event.result ); **60 61** // check that result is valid by checking length of StateCode **62** if ( xmlData.GetWeatherByZipCodeResult\[ 0 \]. **63** StateCode.text().length() != 0 ) **64** { **65** // set placeNameText to the city and state of the zip code **66** placeName = xmlData.GetWeatherByZipCodeResult\[ 0 \]. **67** PlaceName.text() + ", " + **68** xmlData.GetWeatherByZipCodeResult\[ 0 \].StateCode.text(); **69** placeNameText.text = "5 Day Forecast for " + placeName; **70 71 72** // set image, temperature and date for each day **73** setData( weatherImage0, weatherTemp0, weatherDay0, 0 ); **74** setData( weatherImage1, weatherTemp1, weatherDay1, 1 ); **75** setData( weatherImage2, weatherTemp2, weatherDay2, 2 ); **76** setData( weatherImage3, weatherTemp3, weatherDay3, 3 ); **77** setData( weatherImage4, weatherTemp4, weatherDay4, 4 ); **78 79** forecastBox.visible = true; **80 81** // save today’s high/low as a string **82** highLowTemp = xmlData.GetWeatherByZipCodeResult. **83** Details.WeatherData.MaxTemperatureF\[ 0 \].text() + **84** "/" + xmlData.GetWeatherByZipCodeResult.Details. **85** WeatherData.MinTemperatureF\[ 0 \].text(); **86 87** // save the five-day forecast as a string **88** fiveDayForecast = highLowTemp; **89 90** for ( var i : int = 1; i < 5; i++ ) **91** { **92** fiveDayForecast += ", " + xmlData. **93** GetWeatherByZipCodeResult.Details.WeatherData. **94** MaxTemperatureF\[ i \].text() + "/" + xmlData. **95** GetWeatherByZipCodeResult.Details. **96** WeatherData.MinTemperatureF\[ i \].text(); **97** } // end for **98 99** // place a marker on the map with the forecast **100** mapController.addCustomPOIMarker( **101** zipcode.text, placeName, highLowTemp, fiveDayForecast, **102** 0x990099, 0xFFFFFF); **103**

**Fig. 18.23** | Charting weather data in Flex 2. (Part 2 of 6.)

placeNameChartText.text = "5 Day Forecast for " + placeName;

**756** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

**104** mapController.setCenterByAddressAndZoom( **105** zipcode.text, 7, 0 ); **106 107** // begin charting functionality **108 109** // saves date, high and low temp into an ArrayCollection **110** // so it can act as a chart's dataProvider **111 112 113 114 115 116** { **117** // create the object to be added to the array **118 119 120** // extract the data from the e4x-formatted result **121 122 123 124 125 126 127 128 129 130 131 132 133** // add the object to the array **134 135** } //end for **136** // end charting functionality **137** } **138** else **139** { **140 141** } **142** // hide the loading progress bar **143** loadingBar.visible = false; **144 145** // enable getWeatherButton **146** getWeatherButton.enabled = true; **147** } // end function weatherResultHandler **148 149** private function setData( forecastImage : Image, **150** tempText : Text, dateText : Text, i : int ) : void **151** { **152** // set the image for each day **153** forecastImage.source = xmlData.GetWeatherByZipCodeResult. **154** Details.WeatherData.WeatherImage\[ i \].text(); **155**

**Fig. 18.23** | Charting weather data in Flex 2. (Part 3 of 6.)

weatherArray = new ArrayCollection( );

for ( var j : int = 0; j < weatherService.GetWeatherByZipCode. lastResult.GetWeatherByZipCodeResult.Details. WeatherData.length(); j++ )

var weatherDataObject : Object = new Object();

weatherDataObject.Date = weatherService. GetWeatherByZipCode.lastResult. GetWeatherByZipCodeResult.Details.WeatherData\[ j \].Day;

weatherDataObject.HighTemp = weatherService. GetWeatherByZipCode.lastResult. GetWeatherByZipCodeResult.Details. WeatherData\[ j \].MaxTemperatureF;

weatherDataObject.LowTemp = weatherService. GetWeatherByZipCode.lastResult. GetWeatherByZipCodeResult.Details. WeatherData\[ j \].MinTemperatureF;

weatherArray.addItem( weatherDataObject );

Alert.show( "Invalid zip code" );

18.7 Creating Charts and Graphs **757**

**156** // set the temperature for each day **157** tempText.text = xmlData.GetWeatherByZipCodeResult. **158** Details.WeatherData.MaxTemperatureF\[ i \].text() + **159** "\\n" + xmlData.GetWeatherByZipCodeResult.Details. **160** WeatherData.MinTemperatureF\[ i \].text(); **161 162** // set the date for each day **163** dateText.text = xmlData.GetWeatherByZipCodeResult. **164** Details.WeatherData.Day\[ i \].text(); **165** } **166** \]\]> **167** </mx:Script> **168 169** <!-- show/hide animations for forecast boxes --> **170** <mx:Parallel id = "forecastAnimationIn"> **171** <mx:Fade duration = "1000" alphaFrom = "0.0" alphaTo = "1.0" /> **172** <mx:Zoom zoomWidthTo = "1" zoomHeightTo = "1" zoomWidthFrom = "0" **173** zoomHeightFrom = "0" /> **174** </mx:Parallel> **175 176** <mx:Parallel id = "forecastAnimationOut"> **177** <mx:Fade duration = "500" alphaFrom = "1.0" alphaTo = "0.0" /> **178** <mx:Zoom zoomWidthTo = "0" zoomHeightTo = "0" zoomWidthFrom = "1" **179** zoomHeightFrom = "1" /> **180** </mx:Parallel> **181 182 183 184** <!-- WebService description --> **185** <mx:WebService id = "weatherService" **186** wsdl = "http://www.webservicex.net/WeatherForecast.asmx?WSDL" **187** fault = "Alert.show( event.fault.faultString )" **188** result = "weatherResultHandler( event )" **189** showBusyCursor = "true"> **190** <mx:operation name = "GetWeatherByZipCode" resultFormat = "e4x"> **191** <mx:request> **192** <ZipCode>{ zipcode.text }</ZipCode> **193** </mx:request> **194** </mx:operation> **195** </mx:WebService> **196 197** <!-- user interface begins here --> **198** <mx:Panel title = "Weather" width = "100%" height = "100%"> **199** <mx:Accordion id = "accordion" width = "100%" height = "100%" **200** creationPolicy = "all"> **201** <mx:VBox label = "Forecast View" width = "100%" height = "100%"> **202** <mx:ApplicationControlBar **203** defaultButton = "{ getWeatherButton }"> **204** <mx:Label width = "100%" **205** text = "Enter a zip code:" /> **206** <mx:TextInput id = "zipcode" left = "10" /> **207** <mx:Button id = "getWeatherButton" label = "Get Weather" **208** click = "getWeather()" left = "10" />

**Fig. 18.23** | Charting weather data in Flex 2. (Part 4 of 6.)

<mx:SeriesInterpolate id = "interpolateEffect" duration = "1000" />

**758** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

**209** </mx:ApplicationControlBar> **210 211** <mx:Text fontWeight = "bold" id = "placeNameText" /> **212** <mx:ProgressBar id = "loadingBar" indeterminate = "true" **213** labelPlacement = "bottom" visible = "false" minimum = "0" **214** maximum = "100" label = "Loading Weather Data" **215** direction = "right" width = "75%" /> **216 217** <!-- forecastBox holds the five-day forecast --> **218** <!-- start off as hidden, define show and hide effects --> **219** <mx:HBox id = "forecastBox" width = "100%" height = "100%" **220** visible = "false" showEffect = "{ forecastAnimationIn }" **221** hideEffect = "{ forecastAnimationOut }"> **222** <mx:VBox id = "forecastBox0" horizontalAlign = "center" **223** borderStyle = "solid" width = "20%" height = "0%"> **224** <mx:Text id = "weatherDay0" /> **225** <mx:Image id = "weatherImage0" /> **226** <mx:Text id = "weatherTemp0" /> **227** </mx:VBox> **228 229** <mx:VBox horizontalAlign = "center" **230** borderStyle = "solid" width = "20%"> **231** <mx:Text id = "weatherDay1" /> **232** <mx:Image id = "weatherImage1" /> **233** <mx:Text id = "weatherTemp1" /> **234** </mx:VBox> **235 236** <mx:VBox horizontalAlign = "center" **237** borderStyle = "solid" width = "20%"> **238** <mx:Text id = "weatherDay2" /> **239** <mx:Image id = "weatherImage2" /> **240** <mx:Text id = "weatherTemp2" /> **241** </mx:VBox> **242 243** <mx:VBox horizontalAlign = "center" **244** borderStyle = "solid" width = "20%"> **245** <mx:Text id = "weatherDay3" /> **246** <mx:Image id = "weatherImage3" /> **247** <mx:Text id = "weatherTemp3" /> **248** </mx:VBox> **249 250** <mx:VBox horizontalAlign = "center" **251** borderStyle = "solid" width = "20%"> **252** <mx:Text id = "weatherDay4" /> **253** <mx:Image id = "weatherImage4" /> **254** <mx:Text id = "weatherTemp4" /> **255** </mx:VBox> **256** </mx:HBox> **257** </mx:VBox> **258** <mx:VBox label = "Map View" width = "100%" height = "100%"> **259** <!-- create Yahoo! Map --> **260** <yahoo:YahooMapService id = "yahooMap" UUID = "{ UUID }" **261** swfDomId = "{ swfDomID }"

**Fig. 18.23** | Charting weather data in Flex 2. (Part 5 of 6.)

18.7 Creating Charts and Graphs **759**

**262** apiId = "{ YahooAPIKey }" **263** mapURL = "{ mapURL }" width = "600" height = "400" /> **264** <mx:HBox> **265** <mx:Button label = "Back" **266** click = "accordion.selectedIndex=0;" /> **267** <mx:Button label = "Clear" **268** click = "mapController.removeAllMarkers();" /> **269** </mx:HBox> **270** </mx:VBox> <!-- end "Map View" Section --> **271 272** <!-- begin "Chart View" pane --> **273 274 275 276 277 278 279 280 281 282 283 284 285 286 287 288 289 290 291 292 293 294 295 296 297 298 299 300 301 302 303 304 305 306 307 308 309 310 311** </mx:Accordion> **312** </mx:Panel> **313** </mx:Application>

**Fig. 18.23** | Charting weather data in Flex 2. (Part 6 of 6.)

<mx:VBox label = "Chart View" width = "100%" height = "100%"> <mx:Text fontWeight = "bold" id = "placeNameChartText" /> <mx:LineChart id = "lineChart" width = "100%" height = "100%"

dataProvider = "{ weatherArray }" showDataTips = "true"> <mx:verticalAxis>

<mx:LinearAxis baseAtZero = "false" /> </mx:verticalAxis> <mx:horizontalAxis>

<mx:CategoryAxis categoryField = "Date" title = "Date" />

</mx:horizontalAxis> <mx:series>

<mx:LineSeries yField = "HighTemp" displayName = "High Temp" showDataEffect = "{ interpolateEffect }" />

<mx:LineSeries yField = "LowTemp" displayName = "Low Temp" showDataEffect = "{ interpolateEffect }" />

</mx:series> </mx:LineChart> <mx:CandlestickChart id = "candlestickChart" width = "100%"

height = "100%" showDataTips = "true" dataProvider = "{ weatherArray }"> <mx:verticalAxis>

<mx:LinearAxis baseAtZero = "false" /> </mx:verticalAxis> <mx:horizontalAxis>

<mx:CategoryAxis categoryField = "Date" title = "Date"/>

</mx:horizontalAxis> <mx:series>

<mx:CandlestickSeries openField = "HighTemp" highField = "HighTemp" lowField = "LowTemp" closeField = "LowTemp" showDataEffect = "{ interpolateEffect }" />

</mx:series> </mx:CandlestickChart>

</mx:VBox> <!-- end "Chart View" section -->

**760** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

Lines 113–135 declare a for statement that iterates over the WeatherData objects returned by the weatherService WebService. Inside the for statement, we create a weatherDataObject and give it the attributes Date, HighTemp, and LowTemp (lines 121– 131). We give these attributes values from the XML returned by the web service. Finally, we add each weatherDataObject to weatherArray (line 134).

We also add a new pane in the Accordion for our chart, a VBox called **Chart View** (lines 273–310). This contains a Text element called placeNameChartText (line 274). This ele- ment serves an identical purpose to placeNameText (line 211). Next, we add a LineChart

element (lines 275–292). This LineChart has the dataProvider attribute set to { weath-

erArray } to indicate that the data presented in the chart is bound to weatherArray. We also specify that showDataTips is true (line 276), meaning that when the user mouses over a data point on the graph, a data tip will pop up, giving the user more detailed information about that point. Line 278 specifies that the baseAtZero attribute of the verticalAxis’ LinearAxis is false. This way, the graph displays the range of temperatures only from lowest to highest, rather than starting at zero. Inside the horizontalAxis element (lines 280–283), we specify one CategoryAxis named Date. The CategoryAxis’ category- Field attribute is set to "Date", meaning that the axis receives data from the Date field of weatherArray. Next, we specify LineSeries elements, located in the series element (lines 284–291). The first LineSeries’ yField attribute is set to "HighTemp", which means that the LineSeries gets its data from the HighTemp field of weatherArray. We also set showDataEffect to "{ interpolateEffect }". This calls the interpolateEffect

SeriesEffect that we created every time the data is updated. We also create a second LineSeries displaying LowTemp from weatherArray, using the same effect.

The second chart is a CandlestickChart (lines 293–309). This chart also sets show- DataTips to "true" and uses the same dataProvider (weatherArray). It also sets the ver- ticalAxis’ baseAtZero attribute to "false" and has a horizontalAxis that displays the Date. In the CandlestickChart’s series element (lines 303–307) is a Candlestick-

Series with several attributes. The four attributes that define the data it displays are open- Field, highField, lowField and closeField. A CandlestickChart is designed to display financial data, such as stock prices. Therefore, it requires a start value and end value in addition to a high and low value. Since we have only high and low data for the weather, we place HighTemp in both openField and highField. Similarly, we place LowTemp in both closeField and lowField. We use interpolateEffect as the showDataEffect. Finally, the swfDomID constant in map.as must point to the filename of our application without .swf (in this case, weatherChart).

**18.8 Connection-Independent RIAs on the Desktop: Adobe Integrated Runtime (AIR)** The **Adobe Integrated Runtime (AIR)** allows developers to deploy Ajax, Flash and Flex web applications to the desktop. It requires the user to download and install the runtime (planned to be between 5 and 9 MB). Once installed, the user can download and run AIR applications as if they were native desktop applications, including running them while dis- connected from the server. This ability to function while disconnected is similar to that of Google’s Gears.5

5\. Information on Google Gears can be found at code.google.com/apis/gears/.

18.9 Flex 3 Beta **761**

AIR (as of the Beta version) supports Mac OS X 10.4.8 and up, Windows XP with Service Pack 2 (SP2) and Windows Vista. Adobe plans to add Linux support “shortly after the 1.0. release”.6 AIR uses Flash Player 9 as well as the the open source WebKit HTML rendering and JavaScript engine (also found in Apple’s Safari and KDE’s Konqueror browsers).

AIR provides an API for file input and output, a SQLite embedded database, win- dowing support, and file-type association (so that you can make it the operating system’s default application for a type of document). It is also planned to support native menus (the Beta version supports this for Mac OS X), and contextual (right click) menus.

Adobe’s AIR web page is currently located at labs.adobe.com/technologies/air/. From there, you will find links to learn more about AIR, download the runtime environ- ment, download the SDK, and try sample applications.

**18.9 Flex 3 Beta** At the time of publication, Flex 3 was in beta. The Flex 3 beta homepage is labs.ado- be.com/technologies/flex/. The final version of Flex 3 is planned to be released in Q4 20077. You can download the Flex SDK beta from labs.adobe.com/technologies/

flex/sdk/flex3sdk.html. Install instructions are available at labs.adobe.com/wiki/

index.php/Flex_3:Release_Notes#Installation_Instructions. An introduction to the features planned for Flex 3 is available at labs.adobe.com/

wiki/index.php/Flex_3:Feature_Introductions. Flex Builder 3, for instance, will add a wizard to easily consume web services, improve the user interface designer, and also add support for AIR development. Some of the new features are discussed at www.adobe.com/ devnet/flex/articles/flex3_whatsnew.html.

**18.10 Wrap-Up** In this chapter, you learned how to describe Flex applications using MXML, how to com- pile them, and how to embed them in web pages. You also learned how to use ActionScript 3 to manipulate data and programatically control the user interface. Finally, you learned how to consume web services in Flex and present data from those web services in a visual and interactive manner. In the next chapter, you’ll learn about Microsoft’s new RIA tech- nology—Silverlight.

**18.11 Web Resources** www.deitel.com/flex The Deitel Flex Resource Center contains many resources, downloads, tutorials, documentation, books, e-books, articles, blogs and more that will help you develop Flex applications. The Deitel Flex Resource Center will provide you resources to allow you to pursue more advanced Flex program- ming.

6\. From labs.adobe.com/wiki/index.php/AIR:Developer_FAQ. 7. From flexwiki.adobe.com/confluence/display/ADOBE/Flex+3+Planning.

**762** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

**Summary _Section 18.1 Introduction_** • Flex uses Adobe’s ubiquitous Flash platform to deliver a rich graphical user interface backed by

ActionScript 3, Adobe’s implementation of ECMAScript 4 (better known as JavaScript 2).

• The term Rich Internet Application (RIA) was coined in 2001 by Macromedia, the creator of Flash and Flex.

• Flash has the advantage of a large installed base. This allows applications developed in Flex to be used on most Windows, Mac and Linux computers.

• Because the Flash engine is virtually equivalent no matter what the browser or platform, Flex de- velopers avoid having to deal with the cross-platform conflicts of Ajax and even Java.

• Flex user interfaces are easily described using the MXML markup language.

• MXML is compiled into Flash’s executable SWF format.

**_Section 18.2 Flex Platform Overview_** • Flash 9 provides the ActionScript Virtual Machine and graphical capabilities that allow Flex ap-

plications to run.

• Flex’s user interface elements are much richer and more consistent than those of HTML and AJAX, because they’re rendered by the Flash player the same way on all platforms.

• The Flex development environment is programming-centric in contrast to the animation-centric Flash development environment.

• In addition to describing user interfaces, MXML allows for the description of web services, data objects, visual effects and more.

• The root element of every MXML application is <mx:Application>, inside which all Flex ele- ments reside.

• The Flex SDK available at www.adobe.com/products/flex/downloads/ includes an MXML compiler and debugger, the Flex framework, and user interface components and some templates and examples.

• ActionScript 3 is Adobe’s object-oriented scripting language, forming the basis of Flash 9 and the associated Flex 2 technology.

• ActionScript 3 uses an asynchronous programming model. This means that the program will continue to execute while another operation is being completed, such as a call to a web service. This ensures that the user interface is responsive even while the application is busy processing data, an important feature of Ajax.

• In many cases, you’ll need to take advantage of event handling and data binding to handle asyn- chronous operations.

• Flex Builder is Adobe’s graphical IDE for Flex applications.

• Adobe LiveCycle Data Services ES, formerly Flex Data Services, extends Flex’s built-in messag- ing to enable data push and synchronization. It also gives Flex applications the ability to handle disconnection from the server and synchronizing of data upon reconnection.

• Flex Charting provides an extensible library of plotting and graphing elements, including pie charts, line graphs, bar graphs, bubble charts and plots, as well as visually stunning animations that can present the user with a dynamic representation of data.

**_Section 18.3 Creating a Simple User Interface_** • The first line of an MXML file declares the document to be an XML document, because MXML

is a type of XML.

Summary **763**

• The mx namespace is commonly used for the Flex elements in an MXML document.

• The VSlider element provides a vertically oriented slider user interface element.

• The HSlider is the horizontal equivalent of the VSlider.

• The value attribute of a slider sets its initial value.

• The minimum and maximum attributes set the range of values you can select with a slider.

• The change attribute specifies ActionScript to execute whenever the user changes a slider’s value.

• A slider’s liveDragging = "true" attribute causes the ActionScript in the change attribute to ex- ecute when the user changes the slider value, even if the user is still clicking the slider.

• The labels attribute of a slider places text next to itself.

• The showDataTip attribute allows you to turn off the tool tip showing the current value of the slider while the user is dragging it.

• The snapInterval attribute specifies the possible increment in values.

• The tickInterval attribute specifies at what intervals tick marks are displayed.

• The Image element has attributes specifying the source URL, as well as size and positioning.

• The Image element’s completeEffect attribute specifies an effect to apply when an image is loaded.

• The Label element has a text attribute to indicate the string displayed by the Label.

• The Binding element indicate that its destination is bound to its source.

• Curly braces are another way to indicate data binding.

• A HorizontalList takes an array of items from a dataProvider and displays them in a horizontal configuration. A HorizontalList has attribute selectedIndex and scrollToIndex. Each of the items in the horizontalList is selectable.

• An ArrayCollection provides methods for manipulating an Array.

• A HorizontalList can contain an inline itemRenderer.

• An itemRenderer gives you complete control over the contents of each item in a list.

• Keyword data refers to the corresponding item from the dataProvider of the HorizonalList. We must use the keyword data because everything inside the Component element is located in a new, separate scope, meaning that it cannot access the variables of the enclosing program.

• Flex applications are converted from MXML into ActionScript, which is then compiled and out- put as SWF files using the mxmlc command-line compiler, included in the Flex SDK.

• You can see a list of the compiler’s runtime parameters by executing mxmlc -help.

• The most basic syntax of the mxmlc command is mxmlc _filename._

• You can embed images into an SWF file to make it more portable. To do so, enclose the source attribute inside an @Embed, as in source = "@Embed( ’image.jpg’ )". This tells the compiler to include the image in the SWF file, which results in a program that not only loads faster, but also is less dependent on external resources, since the SWF includes all resources it needs.

• Because Flex applications run using the Flash Player, they can be embedded into a web page, then run with the Flash Player browser plug-in.

• The Flex SDK install includes a folder of HTML templates for embedding your application in the resources directory.

• Application states give you the ability to change the layout of an application on the fly.

• An application’s states are defined inside a states element. Each state is enclosed in a State el- ement, with a name attribute that is used as the identifier for the State. The current state is set by changing the currentState property, as in currentState = "HideThumbnails".

**764** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

• The State element allows you to add elements via the AddChild element, remove elements via the RemoveChild element, modify elements’ properties via the SetProperty element, set style via the SetStyle element, and set event handlers via the SetEventHandler element.

• Whenever a State is activated, the ActionScript in the SetEventHandler element executes.

• A ControlBar element embeds its nested elements into the bottom border of a Panel.

• State transition effects are enclosed in a transitions element.

• For each Transition, you can specify a fromState and toState, using the State’s name.

• Each effect, such as Resize, has a targets attribute that specifies which elements it applies to.

• An effect has a duration attribute, which defines how long the effect will last in milliseconds.

• An effect has an optional easingFunction attribute. One possible value is the Cubic.easeOut

function, which controls the acceleration of the animation.

**_Section 18.4 Accessing XML Data from Your Application_** • Flex can access XML natively, using the E4X (ECMAScript for XML) standard.

• An Accordion element instantiates a new navigation user interface, in which multiple containers can be placed, providing easy navigation between them.

• An Accordion with the attribute creationPolicy = "all" forces the Flash player to load all com- ponents, even those that are not initially visible to the user.

• The TextInput element uses the change attribute to specify ActionScript to execute whenever a change is made to the field, such as adding or removing characters.

• The DataGrid element has a dataProvider attribute, which defines what data will fill the rows and columns. The object defined as the dataProvider is located within curly brackets so that any changes to the data object will be written back to the grid.

• The DataGrid has a change attribute that calls ActionScript whenever the user clicks a different item in the grid.

• In a DataGrid, each column is defined using a DataGridColumn element. All DataGridColumns re- side in a parent columns element. Each DataGridColumn has a dataField attribute that tells the element which data it should display, and a headerText attribute that defines the text in the col- umn header.

• The Button element has a click attribute that defines the ActionScript code that will be executed when the user clicks the Button.

• Function Alert displays a dialog box and has attributes text, title, flags (specifies which but- tons should appear), parent, and closeHandler.

• The Form element groups elements, such as TextInputs and Buttons, into a single entity that aligns the elements and allows you to specify a defaultButton.

• Each element in a Form resides in a FormItem element, which has a required attribute that spec- ifies whether the item is required. If true, Flex displays a red asterisk next to the item.

• Validators check the contents of a TextInput element to make sure that the user entered data cor- rectly.

• Flex provides preconfigured validators for Strings, zip codes, e-mail addresses, phone numbers, and more.

• The validator element’s source attribute specifies which object is to be validated. The required

attribute specifies whether the user is required to fill in data. The trigger attribute determines which object to listen to. The triggerEvent attribute specifies which event to listen for. The val- id attribute specifies what happens if the triggerEvent is triggered and the data is valid.

Summary **765**

• You can reference external ActionScript by using a Script element with a source attribute set to the path of the .as file.

• The HTTPService downloads a url using the HTTP protocol. The send operation of an HTTP-

Service executes a request to the service, and can include parameters if the service requires them.

• The creationComplete attribute of the Application element executes ActionScript when the Flash Player has finished creating the interface components.

• An HTTPService’s invoke attribute specifies a function to call when the HTTPService is first in- voked.

• An HTTPService’s result attribute specifies a function to call when the HTTPService has com- pleted retrieving the url.

• An HTTPService’s fault attribute specifies a function to call if an error occured while the HTTPS- ervice was retrieving the url.

• An arrayCollection’s filterFunction is handed each item of the arrayCollection and returns true if the item matches the search criteria, and false otherwise.

• The URLRequest object contains a URL that can be opened using the function navigateToURL, which also specifies where to open the URL.

**_Section 18.5 Interacting with Server-Side Applications_** • A container can have attributes showEffect and hideEffect that specify which animations to use

when the element is shown or hidden.

• The Parallel element groups effects, such as Fade and Zoom.

• The WebService element specifies the URL of the Web Services Description Language (WSDL) file for a web service. A WSDL file is an XML file describing what services are available on a serv- er, how to consume those services, what parameters they accept and what they return. Flex uses a WSDL file to make it easy to access the services, without needing further configuration.

• Like an HTTPService, a WebService element allows us to specify an invoke, fault, and result

function.

• We describe a specific web-service method using the operation element, which specifies the method name and the desired result format. The operation element can enclose specific request elements.

• The CDATA element tells the MXML compiler not to parse a section as XML in case it contains any reserved characters.

• You can traverse an XML object’s tree using dot operators.

• The ProgressBar element allows you to give the user an idea of an operation’s state.

**_Section 18.6 Customizing Your User Interface_** • Flex allows you to customize the style of your user interface. Just as in XHTML, you can include

the styles inline, put them in a separate style section or place them in a separate style-sheet file.

• We give user interface elements custom styles either by setting attributes such as fontFamily, fontSize, and color, or by applying a custom style to any eligible element by adding a styleName = "customStyle" attribute.

• To specify an external style-sheet, which will be identical to the contents of a Style element, add a Style element with a source attribute pointing to the style-sheet file, as in <mx:Style

source="styles.css"/>.

• Another way to customize the look of your application is by using themes, found in flex_sdk_2/

frameworks/themes/.

**766** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

• You can specify that you want your application to use a different theme at compile time by add- ing a theme argument to the mxmlc command.

**_Section 18.7 Creating Charts and Graphs_** • A chart is just another type of user interface element.

• The SeriesInterpolate element allows us to animate changes in a chart’s data. The duration

attribute specifies how long the animation takes in milliseconds.

• We can use a for statement that iterates over the objects in an XML object to fill an ArrayCol-

lection with data from the XML.

• The LineChart element creates a line chart, using data from the object specified by the dataPro- vider attribute. The showDataTips attribute, if true, displays a tool tip giving the user more de- tailed information about a point when the user mouses over a data point on the graph.

• The verticalAxis’ LinearAxis has a baseAtZero attribute that specifies whether the chart starts at zero.

• The CategoryAxis element of a horizontalAxis or verticalAxis element defines the values lo- cated on the axes. The categoryField attribute defines what data object the values come from.

• The LineSeries element, located within the series element, defines a series of data values to chart as a line. The yField and xField attributes define the data source. We can also specify a showDataEffect that calls the effect when the data is changed.

• The CandlestickChart element is designed to display financial data, such as stock prices. Inside the series element of the CandlestickChart, we have a CandlestickSeries with the attributes openField, highField, lowField, closeField and interpolateEffect.

**_Section 18.8 Connection-Independent RIAs on the Desktop: Adobe Integrated Run- time (AIR)_** • AIR (Adobe Integrated Runtime) allows developers to deploy web applications written in Ajax

and Flex to the desktop. It requires that the user download and install the runtime.

• The user can download and run AIR applications as if they were native desktop applications, in- cluding running them while disconnected from the server.

• Adobe’s AIR homepage is currently located at labs.adobe.com/technologies/air/.

**_Section 18.9 Flex 3 Beta_** • An introduction to the features planned for Flex 3 is available at labs.adobe.com/wiki/in-

dex.php/Flex_3:Feature_Introductions.

**Terminology** Accordion element ActionScript ActionScript Virtual Machine AddChild element AIR (Adobe Integrated Runtime) angle brackets Application

ApplicationControlBar

asynchronous programming model Bindable

CandlestickChart

CategoryAxis

CDATA

Component

ControlBar

creationComplete attribute CSS Cubic.easeOut

data push DataGrid

dataProvider attribute E4X (ECMAScript for XML) ECMAScript 4 Embed

Self-Review Exercises **767**

encapsulation external style-sheet Fade

filterFunction

five-day forecast Flash 9 Flash Player Flex 3 Flex Builder Flex Charting Flex SDK Form

Google Gears Halo Classic theme HBox

hideEffect

horizontalAxis

HorizontalList

HSlider

HTTPService

Ice theme Image

Institutional theme JavaScript 2 Konqueror web browser Label

LinearAxis

LineChart

LineSeries

LiveCycle Data Services ES Macromedia mailto

MapController

mx namespace MXML markup language mxmlc

navigateToURL

open source operation

Panel

PanTool

Parallel

Path system variable polling polymorphism ProgressBar

Resize

RIAs (Rich Internet Applications) Safari web browser Script

series

SeriesEffect

showEffect

Smoke theme Spacer

SQLite database State

states

Style

SWF (Shockwave Flash) File synchronization temperature TextInput

theme

Transition

transitions

URLRequest

VBox

verticalAxis

VSlider

web services WebKit rendering engine WebServiceX.net

Wooden theme WSDL (Web Services Description Language) Yahoo! Map Yahoo! Maps API YahooMapService

Zoom

**Self-Review Exercises 18.1** Fill in the blanks in each of the following statements:

a) braces indicate data binding. b) is the prefix commonly used to specify the XML namespace of Flex elements. c) The tag is the root tag of an MXML application. d) A(n) element defines the contents of a HorizontalList. e) You can change an Application’s current State using the property. f) The Application tag’s attribute specifies ActionScript to execute when the

user interface has finished loading.

**768** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

g) The content of a DataGrid comes from its . h) An arrayCollection’s allows you to implement a search feature. i) are used to make sure that the user’s input is in the correct format. j) The tag allows you to define a group of effects that occur simultaneously. k) You can modify an application’s look and feel in a CSS-like syntax in the tag. l) A(n) allows you to chart data points with opening, closing, high and low val-

ues.

**18.2** State whether each of the following is _true_ or _false_. If _false_, explain why. a) Flex applications can run only on Windows. b) The Flex SDK is available for free. c) ActionScript 3 executes synchronously. d) Flex 2 applications need the Flash Player 9 to run. e) Buttons can execute ActionScript when clicked using the onClick attribute.

**Answers to Self-Review Exercises 18.1** a) Curly ({ }). b) mx. c) Application. d) itemRenderer. e) currentState f) creationCom- plete. g) dataProvider. h) filterFunction. i) Validators. j) Parallel. k) Style. l) Candlestick- Chart.

**18.2** a) False. Flex applications can run on Mac OS X, Windows and Linux. b) True. c) False. ActionScript 3 is executed in an asynchronous manner. d) True. e) False. ActionScript in the click attribute is executed when the user clicks a button.

**Exercises 18.3** For the coverViewer application, add effects to the itemRenderer of the thumbnail images so that the image zooms in when you roll over it (rollOverEffect) using the Zoom effect, zooms back out when you roll back out (rollOutEffect) using the Zoom effect, and glows red when you click it (mouseDownEffect) using the Glow effect. Learn how to configure these effects by referring to Ado- be’s Flex 2 Language Reference at livedocs.adobe.com/flex/201/langref/mx/effects/Zoom.html and livedocs.adobe.com/flex/201/langref/mx/effects/Glow.html. \[The effects must be defined locally in the itemRenderer, inside the VBox.\] An example of how your solution may look is available at test.deitel.com/examples/iw3htp4/flex/coverViewerExercise/.

**18.4** Combine the XML handling techniques of the addressBook example with the coverViewer example to display the 20 most recent photos from Flickr’s Public RSS feed. See www.flickr.com/

services/feeds/docs/photos*public/ for information on how to use the RSS feed, and Chapter 14 for more information on XML in general. The application should show thumbnails of the images at the bottom, as well as a large version of the selected image. You must set the width and height of the thumbnails to fit in the thumbnails bar. The thumbnails should be labeled with the image’s title, and the large image should be accompanied by the image’s title and author. Include a button that refreshes the RSS feed and loads the most recent images. You may find it beneficial to use an ArrayCollection similar to that in the weatherChart example (Fig. 18.23) to store each im- age’s source and title. One feature you may want to include is the ability for the user to search for specific tags. By adding ?tags=\_stringOfTags* to the end of the RSS URL, where _stringOfTags_ is re- placed by your own string, the RSS feed will return only images containing those tags. Other fea- tures you may want to include are the abilities for the user to chose how many photos to display and to click the author’s name to open the Flickr homepage. An example of how your solution may look is available at test.deitel.com/examples/iw3htp4/flex/flickrPhotoViewerExercise/.

Exercises **769**

**18.5** Add a cellphone number field to the addressBook application. \[_Hint:_ You must add the field in contacts.xml, then modify buttonActions.as, search.as and the DataGrid and **Edit Con- tact** form in addressBook.mxml.\] An example of how your solution may look is available at our web site test.deitel.com/examples/iw3htp4/flex/addressBookExercise/.

**18.6** Create a currency-converter application using the web service at www.webservicex.net/

CurrencyConvertor.asmx. The application should let you select a currency. You can base your ap- plication on the weather example. Use the web service’s ConversionRate operation, sending it FromCurrency and ToCurrency from the list in the web service’s description. One important change you must make from the weather example is that the XML namespace must be the URI http:// www.webserviceX.NET/ instead of http://www.webserviceX.net/. See how your solution may look at test.deitel.com/examples/iw3htp4/flex/currencyConverterExercise/.

---
title: "Microsoft® Silverlight™ And Rich Internet Applications "
weight: 4
---

**O B J E C T I V E S** In this chapter you will learn:

■ What Silverlight is and what its capabilities are.

■ The differences between Silverlight 1.0 and 1.1.

■ To create user interfaces in XAML.

■ To embed multimedia in a Silverlight application.

■ To program for Silverlight with JavaScript.

■ To embed Silverlight in web pages.

■ To host Silverlight applications online with Microsoft’s Silverlight Streaming Service.

■ To program for Silverlight with .NET languages, specifically Visual Basic.

■ To parse RSS feeds in Silverlight 1.1.

**_Had I the heavens’ embroidered cloths, Enwrought with gold and silver light._ —William Butler**

**_This world is but a canvas to our imaginations._ —Henry David Thoreau**

**_Something deeply hidden had to be behind things._ —Albert Einstein**

**_Individuality of expression is the beginning and end of all art._ —Johann Wolfgang von Goethe**

**_The path of duty lies in what is near, and man seeks for it in what is remote._ —Mencius**

19.1 Introduction **771 O**

**u tl**

**in e**

**19.1 Introduction Silverlight**™, formerly code named “Windows Presentation Foundation Everywhere (WPF/E),” is Microsoft’s platform for Rich Internet Applications (RIAs). It is designed to complement Ajax and other RIA technologies, such as Adobe Flash and Flex, Sun’s JavaFX and Microsoft’s own ASP.NET Ajax. Silverlight currently runs as a browser plug-in for In- ternet Explorer, Firefox and Safari on recent versions of Microsoft Windows and Mac OS X. In addition, developers from the Mono project (www.mono-project.com) are developing an open-source implementation of Silverlight for Linux distributions called Moonlight.

Microsoft announced Silverlight 1.0 Beta and 1.1 Alpha at the 2007 MIX conference (www.visitmix.com), Microsoft’s annual conference for web developers and designers. The demos were compelling, and many technology bloggers who attended the conference blogged about Silverlight’s excitement and potential. Since then, Microsoft has continued developing and enhancing Silverlight. At the time of this writing, Silverlight is currently available in version 1.0 Release Candidate and version 1.1 Alpha Refresh.

Despite the generally unstable nature of alpha-level software, we felt compelled to include examples using the Silverlight 1.1 Alpha Refresh because of Silverlight 1.1’s poten- tial to become an important RIA development platform. Silverlight 1.1 is still early in its development cycle, so you may encounter bugs while running this software. Also, it is pos- sible that Silverlight 1.1 will change substantially in future releases, breaking our 1.1-based example applications. For updated examples, please visit our website for this book at www.deitel.com/books/iw3htp4/. For information on the latest version(s) of Silverlight and to find additional Silverlight web resources, please visit our Silverlight Resource Center at www.deitel.com/silverlight.

**19.1** Introduction **19.2** Platform Overview **19.3** Silverlight 1.0 Installation and Overview **19.4** Creating a Movie Viewer for Silverlight 1.0

**19.4.1** Creating a User Interface In XAML Using Expression Blend **19.4.2** Using Storyboards **19.4.3** Creating Controls **19.4.4** Using JavaScript for Event Handling and DOM Manipulation

**19.5** Embedding Silverlight in HTML **19.6** Silverlight Streaming **19.7** Silverlight 1.1 Installation and Overview **19.8** Creating a Cover Viewer for Silverlight 1.1 Alpha **19.9** Building an Application with Third-Party Controls

**19.10** Consuming a Web Service **19.10.1** Consuming the HugeInteger Web Service

**19.11** Silverlight Demos, Games and Web Resources **19.12** Wrap-Up

Summary | Terminology | Self-Review Exercises | Answers to Self-Review Exercises | Exercises

**772** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

**19.2 Platform Overview** Silverlight applications consist of a user interface described in **Extensible Application Markup Language (XAML)** and a **code-behind file** (or files) containing the program log- ic. XAML (pronounced “zammel”) is Microsoft’s XML vocabulary for describing user in- terfaces and is also used in Microsoft’s Windows Presentation Foundation (WPF)—the preferred user-interface technology of the .NET Platform as of version 3.0.

Silverlight currently runs in Internet Explorer 6+ and Firefox 1.5.0.8+ on Windows XP SP2 and Vista, as well as Safari 2.0.4+ and Firefox 1.5.0.8+ on Mac OS X. Support for Windows 2000 and for the Opera browser is planned in a future release.

Silverlight 1.0 focuses primarily on media and supports programming only in Java- Script. Its primary purpose is to take advantage of the increasing popularity of web-based video to drive user adoption—it is well known that users are willing to install software to watch video. Microsoft also provides a service called Silverlight Streaming that allows you to distribute video-based Silverlight applications for free.

When Silverlight 1.1 is released, computers with Silverlight 1.0 will automatically be upgraded. This could immediately make Silverlight 1.1 a widespread platform for RIA development. Silverlight 1.1’s key benefit is that it adds an implementation of the .NET runtime, allowing developers to create Silverlight applications in .NET languages such as Visual Basic, Visual C#, IronRuby and IronPython. This makes it easy for developers familiar with .NET programming for Windows to create applications that run in a web browser. Two of our 1.1 Alpha Refresh examples borrow their user interfaces and code from examples in our _Visual Basic 2005 How to Program, 3/e_ textbook. This straightfor- ward conversion was made possible by Silverlight 1.1’s .NET runtime and a set of third- party Silverlight user-interface controls (available at www.netikatech.com) designed to replicate the standard Windows Forms controls. Microsoft plans to implement their own built-in set of controls in a future release of Silverlight 1.1. Version 1.1 also provides a sub- stantial performance improvement over 1.0 because .NET code is compiled by the devel- oper then executed on the client, unlike JavaScript, which is interpreted and executed on the client at runtime. For a detailed feature comparison of 1.0 Release Candidate and 1.1 Alpha Refresh, visit silverlight.net/GetStarted/overview.aspx.

**19.3 Silverlight 1.0 Installation and Overview** You can download the Silverlight 1.0 Release Candidate plug-in from www.microsoft.com/

silverlight/install.aspx. After installing the plug-in, go to silverlight.net/themes/

silverlight/community/gallerydetail.aspx?cat=1 and try some of the sample applica- tions. We list many other demo websites in Section 19.11.

We developed our Silverlight 1.0 application using Microsoft’s **Expression Blend 2**, a WYSIWYG editor for XAML user interfaces. You can download a free trial of Expression Blend 2 from

www.microsoft.com/Expression/products/download.aspx?key=blend2preview

Follow the instructions on the web page to install the software. Note that Expression Blend runs only on Windows XP SP2 and Vista. Also, note that you do not need to install Visual Studio 2005 Express.

19.4 Creating a Movie Viewer for Silverlight 1.0 **773**

**19.4 Creating a Movie Viewer for Silverlight 1.0** Our first example application is a movie viewer (Fig. 19.1) that plays **Windows Media Video (WMV)** videos. This example runs on Silverlight 1.0 Release Candidate, and the user interface was created using Expression Blend 2 August Preview. The XAML was gen- erated primarily by Expression Blend. We discuss the XAML as we show you how to build the user interface.

The movie viewer’s GUI includes play/pause, stop and full-screen buttons, a timeline with a marker at the current time, a volume control and thumbnails of other videos that you can view. The timeline also shows the percentage of the video that has been down- loaded. In this example, you’ll learn to create user interfaces in XAML and to use Java- Script to handle events. We’ll also demonstrate how to use JavaScript to manipulate the **Silverlight DOM (Document Object Model)**. You can test a live version of this applica- tion at test.deitel.com/examples/iw3htp4/silverlight/MovieViewer/index.html.

To create the project in Expression Blend, open Expression Blend and select **New Project** in the **Project** tab. To create a Silverlight 1.0 application, select **Silverlight Applica- tion (JavaScript)**. Name the project MovieViewer and select the location where you would like to save it.

**19.4.1 Creating a User Interface In XAML Using Expression Blend** To show how XAML works, we first create elements in Expression Blend, then discuss the corresponding generated XAML in Scene.xaml (which you’ll see in Fig. 19.12).

**Fig. 19.1** | Silverlight Movie Viewer.

**774** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

**_Canvas Elements_** The root element of the XAML file is a Canvas element. A **Canvas element** acts as a con- tainer for other user interface elements and controls their position. The parent Canvas el- ement is created when you create a new Silverlight project in Expression Blend. The parent Canvas has a default Name of Page, Width of 640 px and Height of 480 px. The **Name at- tribute** provides an ID to access the element programmatically. The Canvas’s properties can be edited in the **Properties** panel (Fig. 19.2). Additional Canvas elements can be cre- ated in Expression Blend using the Canvas tool in the toolbar, shown in Fig. 19.3. The XAML can be manually edited by selecting **XAML** in Expression Blend’s **View** menu.

**Fig. 19.2** | Expression Blend’s **Properties** inspector.

**Fig. 19.3** | Expression Blend’s toolbar.

**Selection**

**Direct Selection**

**Zoom**

**Paint Bucket**

**Pen**

**Canvas**

**Asset Library**

**Pan**

**Eyedropper**

**Brush Transform**

**Rectangle**

**TextBlock**

19.4 Creating a Movie Viewer for Silverlight 1.0 **775**

**19.4.2 Using Storyboards** The **Storyboard element** allows you to define animations. In Expression Blend, you can create a Storyboard by opening the **Open, create or manage Storyboards** panel and click- ing the **Create new Storyboard** button (Fig. 19.4). Select the **Create as a Resource** check- box (Fig. 19.5). This enables you to start the Storyboard from anywhere in the application’s JavaScript at any time (as opposed to starting the Storyboard automatically when the application loads). Name the Storyboard timelineTimer and click **OK**. This Storyboard will be used as a timer, because a dedicated timer object does not exist in Sil- verlight 1.0. A Storyboard must have a target object, so we will create an invisible object. Create a Rectangle of any size in any location using the **Rectangle** tool, name it invisi- bleRectangle, then set its **Visiblity** to **Collapsed** using the **Properties** panel. Move the time- line playhead to 0.1 seconds, then click the **Record Keyframe** button (Fig. 19.6). In this

**Fig. 19.4** | Expression Blend’s **Objects and Timeline** inspector.

**Fig. 19.5** | Expression Blend’s **Create Storyboard** dialog box.

**Fig. 19.6** | **Objects and Timeline** inspector showing the TimelineTimer Storyboard.

**Create new Storyboard**

**Open, create or manage Storyboards**

Active Canvas

**Close Storyboard**

Timeline playhead **Playhead positionRecord Keyframe**

**776** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

new keyframe, change any property of the rectangle. If you create the keyframe without changing a property, the Storyboard will not do anything. Close the Storyboard by open- ing the **Open, create or manage Storyboards** menu and clicking **Close Storyboard**.

Expression Blend provides the **Gradient brush tool** (Fig. 19.7) to visually create and modify gradients. First, use the **Selection** tool to select the Page Canvas in the design area. Then, select the **Gradient brush** for the **Background** and select the gradient slider on the right (Fig. 19.7). Change the red, green and blue values to 71.

**19.4.3 Creating Controls** We use a **TextBlock element** to display **Silverlight Movie Viewer** at the top of the page. Cre- ate this element using Expression Blend’s **TextBlock** tool, name the element titleText, then change to the **Solid color brush** in the **Brushes** inspector and use the color selector to make the text white. Adjust the text size in the **Text** inspector to **24** (Fig. 19.8).

Next, we create another Canvas element called controls, using the **Canvas** tool. The controls Canvas will contain the application’s buttons, which are themselves Canvases. This Canvas is a child of the Page Canvas element. Create this Canvas at the bottom of the application, spanning the width of the application. Set the **Height** to **160** and make sure that the Canvas is at the bottom of the application by moving it until it snaps into place.

**_Creating the Video Thumbnail Buttons_** For each video, we create a button consisting of the video’s thumbnail and title. Double- click the controls Canvas with the **Selection** tool to activate it, then create four new Can-

**Fig. 19.7** | Expression Blend’s **Brushes** inspector.

**Fig. 19.8** | Expression Blend’s **Text** inspector.

**Red**

**Green**

**Blue Alpha**

Color selector

Gradient slider

**Gradient brush Solid color brush**

**No brush**

19.4 Creating a Movie Viewer for Silverlight 1.0 **777**

vases in the controls Canvas. Set each Canvas’s **Width** to **120** and **Height** to **114**. In each Canvas, create an **Image element**, with the **Source** attribute pointing to the video’s thumb- nail JPEG image, for example baileyThumb.jpg (Fig. 19.9). You can select the **Image** tool by clicking the **Asset Library** button (Fig. 19.3), checking **Show All** and selecting **Image** (Fig. 19.10). Set the Image’s **Width** and **Height** to **120** and **90**, and place it at the top of the Canvas. Add a TextBlock containing the text Crazy Dog. Do the same for the other three Canvases, setting the Image’s Sources to featherAndHammerThumb.jpg, apollo15Launch- Thumb.jpg and F35Thumb.jpg. The TextBlocks for the three Canvases should contain Gravity, Apollo 15 and F35 Landing, respectively. Name the Canvases crazyDogButton, gravityButton, apollo15Button, and f35Button, and space them evenly across the con- trols Canvas. Finally, to make each of these Canvases appear to act like a button, we will set their **Cursor** properties to **Hand** in the **Common Properties** inspector. This way, the us- er’s cursor will change to a hand when the cursor is moved over each button Canvas.

**_Creating the Video Playback Control Buttons_** Next, we create a play button, a stop button, a pause button, and a full-screen button. These buttons are all contained in the controls Canvas. To create the play button, first create a Canvas named playButton, then set its **Width** and **Height** to **30**. Set the **RadiusX** and **RadiusY** to **2** to give the button rounded corners. These properties are located in the **advanced properties** section of the **Appearance** inspector (Fig. 19.11). Inside this Canvas, use the **Rectangle** tool to draw a Rectangle with the same width and height as the Canvas, and set its background to a gradient going from dark blue to light blue. Then, using the **Pen** tool, draw two Paths to make an arrow pointing right (a play button). Use the **Pen** tool to click once at each endpoint of the line. After drawing each line, use the **Select** tool to move the line into place. The **Path element** allows you to draw shapes that include curves and arcs, but here we are just using it to draw simple lines. Set each Path’s **Stroke**

**Fig. 19.9** | Expression Blend’s **Common Properties** inspector for an **Image** element.

**Fig. 19.10** | Expression Blend’s **Asset Library**.

**Image** tool

**MediaElement** tool

**Show all**

**778** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

color to white. Set the **StrokeThickness** property in the **Appearance** inspector to **4**. Set each Path’s **StrokeEndLineCap** and **StrokeStartLineCap** to **Round** in the **Appearance** inspector. Finally, set the **Cursor** property of the playButton Canvas to **Hand**.

Copy the playButton Canvas and paste it three times. Move one copy just to the right of the playButton, then move another to the right side of the application. Double-click the button to the right of the playButton to make it the active Canvas, and remove the Paths. This will be the stop button. Draw a Rectangle with a **Width** of **14** and **Height** of **18**. Set the **RadiusX** and **RadiusY** to **2** in the **Appearance** inspector, then set the **Fill** to solid white and the **Stroke** to **No Brush**. Finally, set the **Name** of the Canvas to stopButton.

Double-click the button at the far right of the application to make it the active Canvas, and remove the Paths. This will be the full-screen button that will enable the user to toggle between a full-screen view and a browser window view of the application. Draw a Rectangle with a **Width** and **Height** of **22**. Set the **RadiusX**, **RadiusY** and **StrokeThickness** to **2**, the **Fill** to **No Brush**, and the **Stroke** to solid white. Then, draw a second Rectangle

with a **Width** and **Height** of **10**, starting at the bottom-left of the previous Rectangle. Give this Rectangle the same **StrokeThickness** and **Fill** and **Stroke** colors as the larger Rect-

angle. Finally, name this Canvas fullscreenButton. Double-click the button that is still on top of the playButton to make it the active

Canvas, and remove the Paths. This will be the pause button. Draw two vertical paths with the same properties as the paths in the play button, and space them apart by a few pixels. Name this Canvas pauseButton and set its **Visibility** attribute to **Collapsed** (i.e., hidden). We’ll programmatically display this button when it is needed.

The application displays the current time of the video in _hh_:_mm_:_ss_ format in the time- Text TextBlock, located inside the timeCanvas Canvas. To create this element, first create a Canvas named timeCanvas to the left of the full-screen button, and give it a **Width** of **75** and **Height** of **23**. Inside this Canvas, create a Rectangle that takes up the entire Canvas. Set this Rectangle’s **RadiusX** and **RadiusY** to **2**, and its **StrokeThickness** to **1**. Set the **Stroke** color to solid black, and the **Fill** to a gradient going from grey to white. Create a TextBlock named timeText using the **TextBlock** tool, and set its initial text value to "00:00:00". Use

**Fig. 19.11** | Expression Blend’s **Appearance** inspector.

**Show advanced properties**

**StrokeEndLineCap** property

**StrokeStartLineCap** property

19.4 Creating a Movie Viewer for Silverlight 1.0 **779**

the default font (**Lucida Sans Unicode**) and font size (**14.667**). This TextBlock’s text value will be updated programmatically in our JavaScript code-behind file.

**_Creating the Volume and Timeline Controls_** The application allows the user to select the volume level through a volume control. To cre- ate this control, first create a Canvas named volumeCanvas with a **Width** of **15** and a **Height** of **30** to the right of the full-screen button. Use the **Rectangle** tool to create a vertical Rect- angle (the slider). Give the Rectangle a **Width** of **4** and **Height** of **30**. Set the **Fill** of the Rect- angle to light grey. Set the **Stroke** of the Rectangle to black, with a **StrokeThickness** of **1**.

Use the **Rectangle** tool to create a horizontal Rectangle (to mark the current volume). Give the Rectangle a **Width** of **14** and **Height** of **2**. Set its **Fill** to white, its **Stroke** to **No Brush** and its **Opacity** to **50%** (in the **Appearance** inspector). Center the horizontal Rectangle on the center of the vertical Rectangle. Finally, name the horizontal Rectangle volumeHead

and the Canvas volumeCanvas. Next, we create a video timeline that serves two purposes. The timeline acts as a

progress bar while the video is being downloaded. This is accomplished by having a dark grey Rectangle with a Width of 400 located underneath a light grey Rectangle with an initial Width of 0. The light Rectangle’s Width is set programmatically in the JavaScript code-behind file to indicate the download progress. Also, a vertical Rectangle acts as the playhead, indicating the current playback progress of the video. To create the video time- line, first create a Canvas named timelineCanvas to the right of the stop button. Give this Canvas a **Width** of **400** and a **Height** of **20**, and a **Cursor** of **Hand**. Inside this Canvas, create a Rectangle named timelineRectangle with a **Width** of **400** and a **Height** of **4**. Set its **StrokeThickness** to **1**, its **Fill** to dark grey and its **Stroke** to black. Center the Rectangle

vertically, then copy and paste the Rectangle. Name the copy downloadProgress-

Rectangle, set its **Fill** to a lighter grey and set its **Width** to **0**. Note that because download- ProgressRectangle appears after the timelineRectangle in the **Objects and Timeline** inspector, it appears on top of the timelineRectangle. You can also specify the _z_\-order of elements (discussed in Section 5.6) using an object’s ZIndex attribute. Higher ZIndex integer values position the element closer to the foreground and in front of other elements with smaller ZIndex values.

Create a Rectangle named playHead with a **Width** of **2** and a **Height** of **20**. Place this Rectangle at the far left of the Canvas and center it vertically. Set this Rectangle’s **Fill** to **No brush**, its **StrokeThickness** to **1**, its **Stroke** to white, and its **Opacity** to **50%**.

**_Using a MediaElement to Display Audio/Video_** The **MediaElement** allows you to include video and/or audio in your Silverlight applica- tion. It supports WMV/VC-1 (including high-definition video), WMA and MP3 for- mats.

First, create a Canvas named movieViewCanvas and set its **Height** to **260** and **Width** to **640**. Inside the Canvas, add a MediaElement named movieMediaElement. To access the **MediaElement** tool, click the **Asset Library** button (Fig. 19.3), check **Show All** and select **MediaElement** (Fig. 19.10). Set the MediaElement’s **Width** and **Height** to those of the Canvas. Set the **Source** attribute to point to bailey.wmv in the **Media** inspector.

This Canvas also contains a **Play** button overlaid on the video. First, create a Canvas

named playOverlayCanvas with an **Opacity** of **60%**, a **Width** of **200** and a **Height** of **180**. Inside this Canvas, create a Rectangle with the same **Width** and **Height** as the Canvas, a **Fill** of black, a **Stroke** of **No brush**, and a **RadiusX** and **RadiusY** of **40**. Create an Ellipse using

**780** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

the **Ellipse** tool with a **Width** of **100** and a **Height** of **100**. Set its **Fill** to **No brush**, its **Stroke** to white, and its **StrokeThickness** to **6**. In the middle of this Ellipse, draw two Paths in the shape of a right arrow, both with a **Width** and **Height** of **30**, a **StrokeThickness** of **6**, and a **StrokeStartLineCap** and **StrokeEndLineCap** of **Round**. Underneath the Ellipse, create a TextBlock containing the text **Play**. Set the font size to **36** in the **Text** inspector.

Finally, set the playOverlayCanvas **Visibility** attribute to **Collapsed**, since we will show this Canvas programmatically.

**_Creating Event Handlers in XAML_** Expression Blend 2 August Preview does not currently have a user interface to set event handlers, so we will manually set them in Scene.xaml (Fig. 19.12). The timelineTimer

Storyboard’s **Completed attribute** (line 8) registers an event that calls the updateTime

function located in our JavaScript code-behind file (Fig. 19.13) when the animation has completed. This JavaScript function updates user-interface elements such as the timeline marker.

**1** <!-- Fig. 19.12: Page.xaml --> **2** <!-- Movie Viewer user interface described in XAML. --> **3 4** <Canvas xmlns="http://schemas.microsoft.com/client/2007" **5** xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" **6** Width="640" Height="480" x:Name="Page" Loaded="canvasLoaded"> **7** <Canvas.Resources> **8** <Storyboard x:Name="timelineTimer" > **9** <DoubleAnimationUsingKeyFrames BeginTime="00:00:00"

**10** Storyboard.TargetName="invisibleRectangle" **11** Storyboard.TargetProperty="(UIElement.Opacity)"> **12** <SplineDoubleKeyFrame KeyTime="00:00:00" Value="1"/> **13** <SplineDoubleKeyFrame KeyTime="00:00:00.1000000" Value="0"/> **14** </DoubleAnimationUsingKeyFrames> **15** <ColorAnimationUsingKeyFrames BeginTime="00:00:00" **16** Duration="00:00:00.0010000" Storyboard.TargetName="Page" **17** Storyboard.TargetProperty="(Panel.Background). **18** (GradientBrush.GradientStops)\[1\].(GradientStop.Color)"> **19** <SplineColorKeyFrame KeyTime="00:00:00" Value="#FF474747"/> **20** </ColorAnimationUsingKeyFrames> **21** </Storyboard> **22** </Canvas.Resources> **23** <Canvas.Background> **24** <LinearGradientBrush EndPoint="1,0.5" StartPoint="0,0.5"> **25** <GradientStop Color="#FF000000" Offset="0"/> **26** <GradientStop Color="#FF505050" Offset="1"/> **27** </LinearGradientBrush> **28** </Canvas.Background> **29** <Rectangle Visibility="Collapsed" x:Name="invisibleRectangle" **30** Width="21" Height="16" Fill="#FFFFFFFF" Stroke="#FF000000" **31** Canvas.Left="7" Canvas.Top="103"/> **32** <TextBlock Width="278" Height="60" Canvas.Left="192" Canvas.Top="8" **33** FontSize="24" TextWrapping="Wrap" x:Name="titleText"><Run **34** Foreground="#FFFFFFFF" Text="Silverlight Movie Viewer"/></TextBlock>

**Fig. 19.12** | Movie Viewer user interface described in XAML. (Part 1 of 5.)

Completed="updateTime"

19.4 Creating a Movie Viewer for Silverlight 1.0 **781**

**35** <Canvas x:Name="controls" Width="640" Height="160" Canvas.Top="320"> **36** <Canvas Cursor="Hand" **37** Width="120" Height="114" Canvas.Left="33" Canvas.Top="38" **38** x:Name="crazyDogButton"> **39** <Image Width="120" Height="90" Source="baileyThumb.jpg"/> **40** <TextBlock Width="78" Height="24" Canvas.Left="23" **41** Canvas.Top="90" TextWrapping="Wrap"><Run **42** Foreground="#FFFFFFFF" Text="Crazy Dog"/></TextBlock> **43** </Canvas> **44** <Canvas Width="120" **45** Height="114" Canvas.Left="184" Canvas.Top="38" Cursor="Hand" **46** x:Name="gravityButton"> **47** <Image Width="120" Height="90" **48** Source="featherAndHammerThumb.jpg"/> **49** <TextBlock Width="52" Height="24" Canvas.Top="90" **50** TextWrapping="Wrap" Canvas.Left="34"><Run **51** Foreground="#FFFFFFFF" Text="Gravity"/></TextBlock> **52** </Canvas> **53** <Canvas Width="120" **54** Height="114" Canvas.Left="335" Canvas.Top="38" Cursor="Hand" **55** x:Name="apollo15Button"> **56** <Image Width="120" Height="90" Source="apollo15LaunchThumb.jpg"/> **57** <TextBlock Width="72" Height="24" Canvas.Left="26" **58** Canvas.Top="90" TextWrapping="Wrap"> **59** <Run Foreground="#FFFFFFFF" Text="Apollo 15"/></TextBlock> **60** </Canvas> **61** <Canvas Width="120" **62** Height="114" Canvas.Left="487" Canvas.Top="38" Cursor="Hand" **63** x:Name="f35Button"> **64** <Image Width="120" Height="90" Source="F35Thumb.jpg"/> **65** <TextBlock Width="88" Height="24" Canvas.Left="16" **66** Canvas.Top="90" TextWrapping="Wrap"><Run **67** Foreground="#FFFFFFFF" Text="F35 Landing"/></TextBlock> **68** </Canvas> **69 70** <!-- define the buttons --> **71** <Canvas **72** Width="30" Height="30" x:Name="playButton" Cursor="Hand" **73** Canvas.Left="10"> **74** <Rectangle Stroke="#FF000000" Width="30" Height="30" **75** RadiusX="4" RadiusY="4"> **76** <Rectangle.Fill> **77** <LinearGradientBrush EndPoint="1,0.5" StartPoint="0,0.5" **78** MappingMode="RelativeToBoundingBox" SpreadMethod="Pad"> **79** <GradientStop Color="#FF0000FF" Offset="0"/> **80** <GradientStop Color="#FF0084FF" Offset="1"/> **81** </LinearGradientBrush> **82** </Rectangle.Fill> **83** </Rectangle> **84** <Path Stretch="Fill" Stroke="#FFFFFFFF" **85** StrokeThickness="4" Width="12" Height="12" Data="M223,388 **86** L244,403" StrokeEndLineCap="Round" StrokeStartLineCap="Round" **87** Canvas.Left="10" Canvas.Top="4"/>

**Fig. 19.12** | Movie Viewer user interface described in XAML. (Part 2 of 5.)

MouseLeftButtonDown="movieThumbHandler"

MouseLeftButtonDown="movieThumbHandler"

MouseLeftButtonDown="movieThumbHandler"

MouseLeftButtonDown="movieThumbHandler"

MouseLeftButtonDown="playAndPauseButtonEventHandler"

**782** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

**88** <Path Stretch="Fill" Stroke="#FFFFFFFF" **89** StrokeThickness="4" Width="12" Height="12" Data="M223,388 **90** L244,403" RenderTransformOrigin="0.5,0.5" **91** StrokeEndLineCap="Square" StrokeStartLineCap="Round" **92** Canvas.Left="10" Canvas.Top="13"> **93** <Path.RenderTransform> **94** <TransformGroup> **95** <ScaleTransform ScaleX="1" ScaleY="-1"/> **96** <SkewTransform AngleX="0" AngleY="0"/> **97** <RotateTransform Angle="0"/> **98** <TranslateTransform X="0" Y="0"/> **99** </TransformGroup> **100** </Path.RenderTransform> **101** </Path> **102** </Canvas> **103** <Canvas x:Name="timeCanvas" Width="75" Height="23" Canvas.Left="497" **104** Canvas.Top="3"> **105** <Rectangle Stroke="#FF000000" Width="75" Height="25" RadiusX="2" **106** RadiusY="2" StrokeThickness="1"> **107** <Rectangle.Fill> **108** <LinearGradientBrush EndPoint="1,0.5" StartPoint="0,0.5"> **109** <GradientStop Color="#FF9A9A9A" Offset="0"/> **110** <GradientStop Color="#FFFFFFFF" Offset="1"/> **111** </LinearGradientBrush> **112** </Rectangle.Fill> **113** </Rectangle> **114** <TextBlock x:Name="timeText" Width="68" Height="17" **115** Foreground="#FF000000" TextWrapping="Wrap" Canvas.Left="4" **116** Canvas.Top="3"><Run Text="00:00:00"/></TextBlock> **117** </Canvas> **118** <Canvas Cursor="Hand" **119** x:Name="volumeCanvas" Width="15" Height="30" **120** Canvas.Left="616"> **121** <Rectangle Fill="#FF868686" **122** Stroke="#FF000000" Width="4" Height="30" Canvas.Left="6"/> **123** <Rectangle Opacity="0.5" x:Name="volumeHead" Width="14" **124** Height="2" Fill="#FFFFFFFF" Stroke="#FFFFFFFF" **125** StrokeThickness="0" RadiusX="0" RadiusY="0" Canvas.Left="1" **126** Canvas.Top="14"/> **127** </Canvas> **128** <Canvas x:Name="timelineCanvas" Width="401" Height="26" **129** Canvas.Left="87" Canvas.Top="2" Cursor="Hand" > **130** <Rectangle x:Name="timelineRectangle" Width="400" Height="4" **131** Fill="#FFA6A6A6" Stroke="#FF000000" Canvas.Top="11"/> **132** <Rectangle **133** x:Name="downloadProgressRectangle" Width="0" **134** Height="4" Fill="#FFD5D5D5" Stroke="#FF000000" **135** Canvas.Top="11"/> **136** <Rectangle Opacity="0.5" x:Name="playHead" Width="2" Height="20" **137** Stroke="#FFFFFFFF" Canvas.Left="1" Canvas.Top="3"/> **138** </Canvas> **139 140** Width="30" Height="30" x:Name="pauseButton" Cursor="Hand"

**Fig. 19.12** | Movie Viewer user interface described in XAML. (Part 3 of 5.)

MouseLeftButtonDown="volumeHandler"

MouseLeftButtonDown="timelineHandler"

<Canvas MouseLeftButtonDown="playAndPauseButtonEventHandler"

19.4 Creating a Movie Viewer for Silverlight 1.0 **783**

**141** Canvas.Left="10" Visibility="Collapsed" > **142** <Rectangle Stroke="#FF000000" Width="30" Height="30" **143** RadiusX="4" RadiusY="4"> **144** <Rectangle.Fill> **145** <LinearGradientBrush EndPoint="1,0.5" StartPoint="0,0.5" **146** MappingMode="RelativeToBoundingBox" SpreadMethod="Pad"> **147** <GradientStop Color="#FF0000FF" Offset="0"/> **148** <GradientStop Color="#FF0084FF" Offset="1"/> **149** </LinearGradientBrush> **150** </Rectangle.Fill> **151** </Rectangle> **152** <Path Stretch="Fill" Stroke="#FFFFFFFF" **153** StrokeThickness="4" Width="4" Height="18" **154** RenderTransformOrigin="0.5,0.5" StrokeEndLineCap="Round" **155** StrokeStartLineCap="Round" Canvas.Left="9" **156** StrokeDashCap="Flat" Canvas.Top="6" Data="M223,388L223,308"/> **157** <Path Stretch="Fill" Stroke="#FFFFFFFF" **158** StrokeThickness="4" Width="4" Height="18" **159** Data="M223,388L223,403" RenderTransformOrigin="0.5,0.5" **160** StrokeEndLineCap="Round" StrokeStartLineCap="Round" **161** Canvas.Left="17" StrokeDashCap="Flat" Canvas.Top="6"/> **162** </Canvas> **163** <Canvas Width="30" **164** Height="30" x:Name="fullscreenButton" Cursor="Hand" **165** Canvas.Left="582" Canvas.Top="1"> **166** <Rectangle Stroke="#FF000000" Width="30" Height="30" **167** RadiusX="4" RadiusY="4"> **168** <Rectangle.Fill> **169** <LinearGradientBrush EndPoint="1,0.5" StartPoint="0,0.5" **170** MappingMode="RelativeToBoundingBox" SpreadMethod="Pad"> **171** <GradientStop Color="#FF0000FF" Offset="0"/> **172** <GradientStop Color="#FF0084FF" Offset="1"/> **173** </LinearGradientBrush> **174** </Rectangle.Fill> **175** </Rectangle> **176** <Rectangle Width="22" Height="22" Stroke="#FFFFFFFF" **177** StrokeEndLineCap="Square" StrokeStartLineCap="Round" **178** StrokeThickness="2" RadiusX="2" RadiusY="2" Canvas.Left="4" **179** Canvas.Top="4"/> **180** <Rectangle Width="10" Height="10" Stroke="#FFFFFFFF" **181** StrokeEndLineCap="Square" StrokeStartLineCap="Round" **182** StrokeThickness="2" RadiusX="2" RadiusY="2" Canvas.Left="4" **183** Canvas.Top="16"/> **184** </Canvas> **185** <Canvas Width="30" **186** Height="30" x:Name="stopButton" Cursor="Hand" Canvas.Left="46"> **187** <Rectangle Stroke="#FF000000" Width="30" Height="30" **188** RadiusX="4" RadiusY="4"> **189** <Rectangle.Fill> **190** <LinearGradientBrush EndPoint="1,0.5" StartPoint="0,0.5" **191** MappingMode="RelativeToBoundingBox" SpreadMethod="Pad"> **192** <GradientStop Color="#FF0000FF" Offset="0"/> **193** <GradientStop Color="#FF0084FF" Offset="1"/>

**Fig. 19.12** | Movie Viewer user interface described in XAML. (Part 4 of 5.)

MouseLeftButtonDown="toggleFullScreen"

MouseLeftButtonDown="stopButtonEventHandler"

**784** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

**194** </LinearGradientBrush> **195** </Rectangle.Fill> **196** </Rectangle> **197** <Rectangle RadiusX="2" RadiusY="2" Width="14" **198** Height="18" Canvas.Left="8" Fill="#FFFFFFFF" **199** StrokeThickness="0" Canvas.Top="6"/> **200** </Canvas> **201** </Canvas> **202** <Canvas x:Name="movieViewCanvas" Width="640" Height="260" **203** Canvas.Top="46"> **204 205 206** Width="640" Height="260" Source="bailey.wmv" /> **207** <Canvas **208** Width="200" Height="180" Canvas.Left="220" Canvas.Top="35" **209** Opacity="0.6" Visibility="Collapsed" x:Name="playOverlayCanvas"> **210** <Canvas.RenderTransform> **211** <TransformGroup> **212** <ScaleTransform ScaleX="1" ScaleY="1"/> **213** <SkewTransform AngleX="0" AngleY="0"/> **214** <RotateTransform Angle="0"/> **215** <TranslateTransform X="0" Y="0"/> **216** </TransformGroup> **217** </Canvas.RenderTransform> **218** <Rectangle Fill="#FF000000" **219** Width="200" Height="180" RadiusX="40" **220** RadiusY="40" Canvas.Left="0" Canvas.Top="0"/> **221** <Ellipse Stroke="#FFFFFFFF" StrokeThickness="6" **222** Width="100" Height="100" Canvas.Left="49" Canvas.Top="14"/> **223** <Path Fill="#FF010000" Stretch="Fill" Stroke="#FFDFDFDF" **224** StrokeThickness="6" Width="30" Height="30" Canvas.Left="86" **225** Canvas.Top="36" Data="M295,189 L319,213" **226** StrokeEndLineCap="Round" StrokeStartLineCap="Round"/> **227** <Path Fill="#FF010000" Stretch="Fill" Stroke="#FFDFDFDF" **228** StrokeThickness="6" Width="30" Height="30" Canvas.Left="86" **229** Canvas.Top="61" Data="M295,189 L319,213" **230** RenderTransformOrigin="0.5,0.5" StrokeEndLineCap="Round" **231** StrokeStartLineCap="Round"> **232** <Path.RenderTransform> **233** <TransformGroup> **234** <ScaleTransform ScaleX="1" ScaleY="1"/> **235** <SkewTransform AngleX="0" AngleY="0"/> **236** <RotateTransform Angle="-90"/> **237** <TranslateTransform X="0" Y="0"/> **238** </TransformGroup> **239** </Path.RenderTransform> **240** </Path> **241** <TextBlock Width="74" Height="49" Canvas.Left="64" **242** Canvas.Top="120" FontSize="36" Foreground="#FFFFFFFF" **243** Text="Play" TextWrapping="Wrap"/> **244** </Canvas> **245** </Canvas> **246** </Canvas>

**Fig. 19.12** | Movie Viewer user interface described in XAML. (Part 5 of 5.)

<MediaElement AutoPlay="false" MediaEnded="movieEndedHandler" MediaOpened="movieOpenedHandler" x:Name="movieMediaElement"

MouseLeftButtonDown="playAndPauseButtonEventHandler"

19.4 Creating a Movie Viewer for Silverlight 1.0 **785**

**_Configuring the Event Handlers_** For each of the thumbnail button Canvases (crazyDogButton, gravityButton, apollo15Button and f35Button), we specify a **MouseLeftButtonDown attribute** (lines 36, 44, 53 and 61, respectively). This registers the movieThumbHandler function (Fig. 19.13, lines 157–178) as the event handler to call when the user clicks one of these Canvases with the left mouse button. Each of the playback control buttons also has a MouseLeftButton- Down attribute (lines 71, 139, 163, 185 and 207 for the play, pause, full-screen, stop, play overlay buttons, respectively). Each of these buttons has a separate event handler function.

The volumeCanvas has a MouseLeftButtonDown attribute (line 118) that allows the user to change the volume by calling volumeHandler (Fig. 19.13, lines 239–245) when the user clicks somewhere on the volumeCanvas.

The downloadProgressRectangle has a MouseLeftButtonDown attribute (line 132) that allows the user to jump anywhere in the video by calling the timelineHandler func- tion (lines 225–236, Fig. 19.13) when the user clicks somewhere on the downloadPro-

gressRectangle. The movieMediaElement’s **MediaOpened** attribute (line 205) is set to movieOpened-

Handler. When a new video is opened, function movieOpenedHandler (Fig. 19.13, lines 137–143) is called to ensure that the **Play** overlay button is visible, and to start the timer that keeps the timeline and time up to date. When you open a movie the MediaElement

begins playing the movie by default. We don’t want this to happen until the user clicks the play button, so we set its **AutoPlay** attribute to false (line 204). The movieMediaEle- ment’s **MediaEnded** attribute (line 204) is set to movieEndedHandler. When the video fin- ishes playing, the movieEndedHandler function (Fig. 19.13, lines 146–155) is called to reset the video to the beginning and to ensure that the **Play** overlay button is visible.

**_Registering Event Handlers in JavaScript_** An alternative to registering event handlers in the XAML is to register event handlers in the JavaScript code. While this technique requires a few more lines of code, it has two key advantages. First, it keeps the application’s logic (in this case, event handling) separate from the application’s user interface. Second, it allows you to add and remove event lis- teners dynamically. The JavaScript for adding an event handler is:

_variableName_ \= _objectName_.addEventHandler( "_EventName_", _eventHandler_ );

The JavaScript for removing an event handler is:

_objectName_.removeEventHandler( "_EventName_", _variableName_ );

When an event is registered in JavaScript using the **addEventListener** method, we must assign the return value of the method to a variable. This way, if we wish to remove an event listener using the **removeEventListener**, we can remove only that specific event listener.

**19.4.4 Using JavaScript for Event Handling and DOM Manipulation** The JavaScript code-behind file, Page.xaml.js (Fig. 19.13), defines the event handlers for the various elements in the XAML. In the event handlers, we use JavaScript to manip- ulate the Silverlight DOM, similar to how we manipulated the XHTML DOM in Chap- ter 12 and the XML DOM in Chapter 14. To edit the JavaScript code files, use your preferred text editor.

**786** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

**1** // Fig. 19.13: Page.xaml.js **2** // JavaScript code-behind for Movie Viewer. **3 4** // variables for accessing the Silverlight elements **5** var host; // allow access to host plug-in **6** var Page; **7** var movieMediaElement; **8** var downloadProgressRectangle; **9** var timeText;

**10** var timelineRectangle; **11** var playHead; **12** var timelineTimer; **13** var playButton; **14** var pauseButton; **15** var playOverlayCanvas; **16** var timelineTimer; **17** var volumeCanvas; **18** var volumeHead; **19** var crazyDogButton; **20** var gravityButton; **21** var apollo15Button; **22** var f35Button; **23** var controls; **24** var fullscreenButton; **25** var timeCanvas; **26** var titleText; **27** var playOverlayCanvasListener; // token for event listener **28 29** function canvasLoaded( sender, eventArgs ) **30** { **31** // set variables to more easily access the Silverlight elements **32** // allow access to host plug-in **33** Page = sender.findName( "Page" ); **34** movieMediaElement = sender.findName( "movieMediaElement" ); **35** downloadProgressRectangle = sender.findName( **36** "downloadProgressRectangle" ); **37** timeText = sender.findName( "timeText" ); **38** timelineRectangle = sender.findName( "timelineRectangle" ); **39** playHead = sender.findName( "playHead" ); **40** timelineTimer = sender.findName( "timelineTimer" ); **41** playButton = sender.findName( "playButton" ); **42** pauseButton = sender.findName( "pauseButton" ); **43** playOverlayCanvas = sender.findName( "playOverlayCanvas" ); **44** volumeCanvas = sender.findName( "volumeCanvas" ); **45** volumeHead = sender.findName( "volumeHead" ); **46** crazyDogButton = sender.findName( "crazyDogButton" ); **47** gravityButton = sender.findName( "gravityButton" ); **48** apollo15Button = sender.findName( "apollo15Button" ); **49** f35Button = sender.findName( "f35Button" ); **50** controls = sender.findName( "controls" ); **51** fullscreenButton = sender.findName( "fullscreenButton" ); **52** timeCanvas = sender.findName( "timeCanvas" ); **53** titleText = sender.findName( "titleText" );

**Fig. 19.13** | JavaScript code-behind file for Movie Viewer. (Part 1 of 6.)

host = sender.getHost();

19.4 Creating a Movie Viewer for Silverlight 1.0 **787**

**54 55** // add an event handler for the onFullScreenChange event **56 57 58** // start the timer **59** timelineTimer.begin(); **60** } // end function canvasLoaded **61 62** // timelineTimer event handler **63** function updateTime() **64** { **65** // get the video's current position in seconds **66** var elapsedTime = movieMediaElement.position.Seconds; **67** var hours = convertToHHMMSS( elapsedTime )\[ 0 \]; // saves hours **68** var minutes = convertToHHMMSS( elapsedTime )\[ 1 \]; // saves minutes **69** var seconds = convertToHHMMSS( elapsedTime )\[ 2 \]; // saves seconds **70 71** // set text of timeText to current time in hh:mm:ss format **72 73 74** // set width of downloadProgressRectangle **75 76 77 78** // if the movie is playing, place the playHead at a **79** // position representing the playback progress **80** if ( movieMediaElement.position.Seconds && **81** movieMediaElement.naturalDuration ) **82** { **83 84 85 86** } // end if **87 88** // if movie is not playing, place the playHead at the beginning **89** else **90** { **91** playHead\[ "Canvas.Left" \] = timelineRectangle\[ "Canvas.Left" \]; **92** } // end else **93 94** // if download is incomplete or movie is playing **95** if ( movieMediaElement.downloadProgress != 1 || **96** movieMediaElement.CurrentState == "Playing" ) **97** { **98** // run timelineTimer again **99** } // end if **100** } // end function updateTime **101 102** // handle play and pause buttons **103** function playAndPauseButtonEventHandler( sender, eventArgs ) **104** { **105** // check the CurrentState of the movie; **106** // pause if playing, play if paused or stopped

**Fig. 19.13** | JavaScript code-behind file for Movie Viewer. (Part 2 of 6.)

host.content.onFullScreenChange = onFullScreenChangedHandler;

timeText.text = hours + ":" + minutes + ":" + seconds;

downloadProgressRectangle.width = movieMediaElement.downloadProgress \* timelineRectangle.width;

playHead\[ "Canvas.Left" \] = ( ( movieMediaElement.position.Seconds / movieMediaElement.naturalDuration.Seconds ) \* timelineRectangle.Width ) + timelineRectangle\[ "Canvas.Left" \];

timelineTimer.begin();

**788** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

**107** if ( movieMediaElement.CurrentState == "Playing" ) **108** { **109** movieMediaElement.pause(); **110 111** playButton.Visibility = "Visible"; // show play button **112** pauseButton.Visibility = "Collapsed"; // hide pause button **113** } // end if **114** else **115** { **116** movieMediaElement.play(); **117** timelineTimer.begin(); // start timelineTimer again **118** pauseButton.Visibility = "Visible"; // show pause button **119** playButton.Visibility = "Collapsed"; // hide play button **120** playOverlayCanvas.Visibility = "Collapsed"; // hide "Play" overlay **121** } // end if **122** } // end function playAndPauseButtonEventHandler **123 124** // handle stop button **125** function stopButtonEventHandler( sender, eventArgs ) **126** { **127** movieMediaElement.stop(); // stop the movie **128** playButton.Visibility = "Visible"; // show play button **129** pauseButton.Visibility = "Collapsed"; // hide pause button **130 131** // show "Play" overlay **132** playOverlayCanvas.Visibility = "Visible"; **133** updateTime(); **134** } // end function stopButtonEventHandler **135 136** // handle MediaOpened event **137** function movieOpenedHandler( sender, eventArgs ) **138** { **139** timelineTimer.begin(); **140 141** // show "Play" overlay **142** playOverlayCanvas.Visibility = "Visible"; **143** } // end function movieOpenedHandler **144 145** // handle when movie has reached end **146** function movieEndedHandler( sender, eventArgs ) **147** { **148** movieMediaElement.stop(); // stop the movie **149** playButton.Visibility = "Visible"; // show play button **150** pauseButton.Visibility = "Collapsed"; // hide pause button **151 152** // show "Play" overlay **153** playOverlayCanvas.Visibility = "Visible"; **154** updateTime(); **155** } // end function movieEndedHandler **156 157** function movieThumbHandler ( sender, eventArgs ) // a thumb was clicked **158** { **159** movieMediaElement.stop(); // stop movie

**Fig. 19.13** | JavaScript code-behind file for Movie Viewer. (Part 3 of 6.)

19.4 Creating a Movie Viewer for Silverlight 1.0 **789**

**160** playButton.Visibility = "Visible"; // show play button **161** pauseButton.Visibility = "Collapsed"; // hide pause button **162 163 164** { **165** case "crazyDogButton": // open Crazy Dog video **166** movieMediaElement.source = "bailey.wmv"; **167** break; **168** case "gravityButton": // open Gravity video **169** movieMediaElement.source = "featherAndHammer.wmv"; **170** break; **171** case "apollo15Button": // open Apollo 15 video **172** movieMediaElement.source = "apollo15Launch.wmv"; **173** break; **174** case "f35Button": // open F35 Landing video **175** movieMediaElement.source = "F35.wmv"; **176** break; **177** } // end switch **178** } // end function movieThumbHandler **179 180** // handle toggle full-screen button by toggling fullScreen state **181** function toggleFullScreen( sender, eventArgs ) **182** { **183 184** } // end function toggleFullScreen **185 186** // handle onFullScreenChange event **187** function onFullScreenChangedHandler( sender, eventArgs ) **188** { **189** // update layout based on current dimensions **190** updateLayout( host.content.actualWidth, **191** host.content.actualHeight ); **192 193** // update time and timeline **194** updateTime(); **195** } // end function onFullScreenChangedHandler **196 197** // reposition and resize elements based on new dimensions **198** function updateLayout( width, height ) **199** { **200** // resize and reposition the elements based on the screen dimensions **201** Page.width = width; **202** Page.height = height; **203** movieMediaElement.width = width; **204** movieMediaElement.height = height - 220; **205** movieMediaElement\[ "Canvas.Left" \] = **206** ( width / 2 ) - ( ( movieMediaElement.width ) / 2 ); **207** movieMediaElement\[ "Canvas.Top" \] = **208** ( ( height - 220 ) / 2 ) - ( movieMediaElement.height / 2 ); **209** controls.width = width; **210** playOverlayCanvas\[ "Canvas.Left" \] = **211** ( width / 2 ) - ( ( playOverlayCanvas.width ) / 2 );

**Fig. 19.13** | JavaScript code-behind file for Movie Viewer. (Part 4 of 6.)

switch ( sender.name )

host.content.fullScreen = !host.content.fullScreen;

**790** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

**212** playOverlayCanvas\[ "Canvas.Top" \] = **213** ( ( height - 220 ) / 2 ) - ( playOverlayCanvas.height / 2 ); **214** controls\[ "Canvas.Left" \] = ( width / 2 ) - ( ( controls.width ) / 2 ); **215** controls\[ "Canvas.Top" \] = height - controls.height; **216** timelineRectangle.width = controls.width - 235; **217** fullscreenButton\[ "Canvas.Left" \] = controls.width - 55; **218** timeCanvas\[ "Canvas.Left" \] = controls.width - 140; **219** volumeCanvas\[ "Canvas.Left" \] = controls.width - 22; **220** titleText\[ "Canvas.Left" \] = **221** ( width / 2 ) - ( ( titleText.width ) / 2 ); **222** } // end function updateLayout **223 224** // handle timelineCanvas's MouseLeftButtonDown event **225** function timelineHandler( sender, eventArgs ) **226** { **227** // determine new time from mouse position **228** var elapsedTime = ( ( eventArgs.getPosition( timelineRectangle ).x ) / **229** timelineRectangle.Width ) \* **230** movieMediaElement.NaturalDuration.seconds; **231** var hours = convertToHHMMSS( elapsedTime )\[ 0 \]; // Saves hours **232** var minutes = convertToHHMMSS( elapsedTime )\[ 1 \]; // Saves minutes **233** var seconds = convertToHHMMSS( elapsedTime )\[ 2 \]; // Saves seconds **234 235** updateTime(); **236** } // end function timelineHandler **237 238** // handle volume's MouseLeftButtonDown event **239** function volumeHandler( sender, eventArgs ) **240** { **241 242 243 244 245** } // end function volumeHandler **246 247** // get the hours, minutes and seconds of the video's current position **248** // Date object converts seconds to hh:mm:ss format **249** function convertToHHMMSS( seconds ) **250** { **251** var datetime = new Date( 0, 0, 0, 0, 0, seconds ); **252** var hours = datetime.getHours(); // saves hours to var **253** var minutes = datetime.getMinutes(); // saves minutes to var **254** var seconds = datetime.getSeconds(); // saves seconds to var **255 256** // ensure hh:mm:ss format **257** if ( seconds < 10 ) **258** { **259** seconds = "0" + seconds; **260** } // end if **261 262** if ( minutes < 10 ) **263** {

**Fig. 19.13** | JavaScript code-behind file for Movie Viewer. (Part 5 of 6.)

movieMediaElement.Position = hours + ":" + minutes + ":" + seconds;

movieMediaElement.volume = 1 - ( ( eventArgs.getPosition( volumeCanvas ).y ) / 30 );

volumeHead\[ "Canvas.Top" \] = eventArgs.getPosition( volumeCanvas ).y;

19.4 Creating a Movie Viewer for Silverlight 1.0 **791**

**_Handling Events and Accessing XAML Elements in JavaScript_** Lines 5–27 declare variables that our event handler functions use to access the XAML el- ements in our video player. In the canvasLoaded function (lines 29–60), which handles the Page Canvas’s **Loaded event** (Fig. 19.12, line 6), these variables are set to reference their corresponding XAML elements using the sender’s **findName** method (lines 33–53). Every event handler receives **sender** and **eventArgs** parameters. The sender parameter is a reference to the element with which the user interacted, and the eventArgs parameter passes information about the event that occurred. Line 32 sets the host variable to the Sil- verlight plug-in object using the **getHost** method. This allows us to access properties of the Silverlight plug-in, such as its screen dimensions, throughout the program. Line 56 registers an event handler for the plug-in’s **onFullScreenChange** event. Line 59 calls the timelineTimer Storyboard’s begin function, to start the Storyboard that we are using as a timer. When this Storyboard’s Completed event (Fig. 19.12, line 8) occurs—i.e., its 0.1- second-long animation completes (Fig. 19.12, lines 9–14)—the event handler update-

Time (lines 63–100) is invoked.

**_Creating a Timer_** The updateTime function (lines 63–100) updates the timeText, the downloadProgress-

Rectangle, the playHead, and starts the timelineTimer again if necessary. It uses the con- vertToHHMMSS function (lines 249–273) to convert the movieMediaElement’s **position.Seconds**—its elapsed time in seconds—to hours, minutes and seconds (lines 66–69), then displays that time in _hh:mm:ss_ format in the timeText textBlock (line 72). The updateTime function also updates the download progress indicator (lines 75–76) by setting the width of the downloadProgressRectangle to the width of the timelineRect- angle multiplied by the movieMediaElement’s **downloadProgress**, which is a value from 0 to 1 representing the fraction of the video that has downloaded so far. Lines 80–81 check whether movieMediaElement’s **naturalDuration** and position.Seconds properties exist. If they do, lines 83–85 set the playHead’s position to the current playback position in the video. This is accomplished by setting the playHead’s Canvas.Left attribute to the sum of the timelineRectangle’s Canvas.Left attribute and the width of the timelineRect-

angle multiplied by the ratio of current time (movieMediaElement.position.Seconds) and total time (movieMediaElement.naturalDuration.Seconds). Left is a **dependency property** of Canvas, meaning that the Left value is relative to that of the Canvas. Since the Canvas.Left dependency property already has a dot in its notation, we must enclose the attribute name in quotes and square brackets, as in _element_\["_attributeName_"\]. If mov-

**264** minutes = "0" + minutes; **265** } // end if **266 267** if ( hours < 10 ) **268** { **269** hours = "0" + hours; **270** } // end if **271 272** return \[ hours, minutes, seconds \] **273** } // end function convertToHHMMSS

**Fig. 19.13** | JavaScript code-behind file for Movie Viewer. (Part 6 of 6.)

**792** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

ieMediaElement’s naturalDuration and position.Seconds attributes do not exist, line 91 sets the playHead’s Canvas.Left attribute to be equal to the timelineRectangle’s to indicate that the movie has not started playing. Finally, lines 95–99 check whether the download is not finished or the movie is playing, in which case it calls timelineTimer’s begin function to run the timer again. This way, the downloadProgressRectangle and playHead will be updated.

**_Handling Button Events_** The playAndPauseButtonEventHandler function (lines 103–122) handles the play and pause buttons’ MouseLeftButtonDown events (Fig. 19.12, lines 71 and 139). Line 107 checks whether the movieMediaElement is currently playing. If it is, the video should be paused and the play button should be shown. If not, lines 116–120 play the video, start the timelineTimer, show the pause button and hide the playOverlayCanvas.

The stopButtonEventHandler function (lines 125–134) handles the stop button. It stops the video (line 127), then shows the play button and the **Play** overlay button (lines 128–132). Finally, it calls the updateTime function to ensure that the timeText Text-

Block displays **00:00:00**. Function movieThumbHandler (lines 157–178) handles the movie thumbnail buttons.

Lines 159–161 stop the video and show the play button. Lines 163–177 contain a switch statement that checks the sender element’s name attribute (the name of the button that was clicked) and sets the Source of movieMediaElement to the corresponding video file.

**_Adding a Full-Screen Feature_** Function toggleFullScreen (lines 181–184) handles the full-screen button. Line 183 sets the Silverlight plug-in’s **fullScreen** attribute to the opposite of its previous value. This means that if the plug-in was previously in full-screen mode, it will switch to windowed mode, and if it was previously in windowed mode, it will switch to full-screen mode.

The onFullScreenChangeHandler function (lines 208–216) handles the onFull-

ScreenChange event. Lines 190–191 uses the updateLayout function to update the layout of the application based on its current width and height. Then, line 194 calls the upda-

teTime function.

**_Dynamically Changing XAML Layout_** Function updateLayout (lines 198–222) repositions the user interface elements relative to the width and height parameters. Lines 201–202 set the width and height of the Page

Canvas to the width and height parameters. Lines 203–204 set the width and height of movieMediaElement to the width parameter and the height parameter minus 220 (leaving room for the controls). Lines 205–208 move the movieMediaElement in the application. Line 209 sets the width of the controls Canvas. Lines 210–213 center the playOverlay- Canvas over the movieMediaElement. Lines 214–215 center the controls at the bottom of the application. Line 216 sets the width of the timelineRectangle to be the width of the controls Canvas minus 235, to allow room for the other controls. Lines 217–219 move the full-screen button, timeCanvas and volumeCanvas to the right side of the controls

Canvas. Finally, lines 220–221 center titleText at the top of the application. The movieOpenedHandler function (lines 137–143) handles movieMediaElement’s

MediaOpened event (Fig. 19.12, line 205). Line 139 starts the timelineTimer to update the loading progress rectangle, and line 142 shows the playOverlayCanvas.

19.5 Embedding Silverlight in HTML **793**

The movieEndedHandler function (lines 146–155) handles the movieMediaElement’s MediaEnded event (Fig. 19.12, line 204). It stops the video (line 148), which resets the playback position to the beginning, then shows the play button and hides the pause button (lines 149–150). Lines 153 shows the playOverlayCanvas. Finally, line 154 calls the updateTime function to ensure that the timeText textBox displays **00:00:00**.

**_Creating a Timeline for a MediaElement_** The timelineHandler function (lines 225–236) handles the downloadProgressRectan-

gle’s MouseLeftButtonDown event (Fig. 19.12, line 132). Lines 228–234 set elapsedTime to the position that was clicked on the timeline, convert the number of seconds to _hh_:_mm_:_ss_ format using the convertToHHMMSS function and set the Position of the movi-

eMediaElement to that time string. Finally, line 235 calls the updateTime function to show the new position.

**_Controlling Volume of a MediaElement_** Function volumeHandler (lines 239–245) handles the volumeCanvas’s MouseLeftButton- Down event (Fig. 19.12, line 118). Lines 241–242 set movieMediaElement’s **volume prop- erty** based on the position the user clicked on the volumeCanvas. We convert the _y_\- coordinate of the mouse relative to the volume rectangle to a value between 0 and 1 (0 being muted and 1 being full volume). Lines 243–244 move the volumeHead to the new position.

**19.5 Embedding Silverlight in HTML** Expression Blend generates an HTML wrapper named Default.html for your Silverlight application when you first create the Silverlight project. Figure 19.14 shows a version of this file that we formatted for readability. You can open Default.html in a supported web browser to test your application. You can embed a Silverlight application into an existing HTML file by including the scripts (lines 8–10), the silverlightHost style class (lines 12–13) and the SilverlightControlHost div (lines 17–21). You can adjust the width and height of your application by changing the width and height attributes of the sil-

verlightHost style class (lines 12–13).

**1** <!-- Fig. 19.14: Default.html --> **2** <!-- HTML wrapper for Movie Viewer. --> **3** <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" **4** "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd"> **5** <html xmlns = "http://www.w3.org/1999/xhtml"> **6** <head> **7** <title>MovieViewer</title> **8 9**

**10 11** <style type = "text/css"> **12 13 14** </style> **15** </head>

**Fig. 19.14** | HTML wrapper for Movie Viewer. (Part 1 of 2.)

<script type = "text/javascript" src = "Silverlight.js"></script> <script type = "text/javascript" src = "Default\_html.js"></script> <script type = "text/javascript" src = "Page.xaml.js"></script>

.silverlightHost { height: 480px; width: 640px }

**794** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

The createSilverlight function (line 19) is located in Default_html.js

(Fig. 19.15). This function inserts the Silverlight plug-in object in the SilverlightCon-

trolHost div. The Default_html.js file that Expression Blend creates will not work with our project because it tries to access function Page in the JavaScript, which no longer exists. You must remove the lines instantiating the scene variable and set the onLoad event to null (line 15).

**19.6 Silverlight Streaming** Microsoft provides a service called **Silverlight Streaming** at silverlight.live.com. This service currently hosts your Silverlight applications for free, which allows individuals and

**16** <body> **17** <div id = "SilverlightControlHost" class = "silverlightHost"> **18** <script type = "text/javascript"> **19 20** </script> **21** </div> **22** </body> **23** </html>

**1** // Fig. 19.15: Default_html.js **2** // Create Silverlight object in SilverlightControlHost div. **3** function createSilverlight() **4** { **5** Silverlight.createObjectEx( { **6** source: "Page.xaml", **7** parentElement: document.getElementById( "SilverlightControlHost" ), **8** id: "SilverlightControl", **9** properties: {

**10** width: "100%", **11** height: "100%", **12** version: "1.0" **13** }, **14** events: { **15** onLoad: null **16** } **17** } ); **18** } **19 20** if ( !window.Silverlight ) **21** window.Silverlight = {}; **22 23** Silverlight.createDelegate = function( instance, method ) { **24** return function() { **25** return method.apply( instance, arguments ); **26** } **27** }

**Fig. 19.15** | Creates Silverlight object in SilverlightControlHost div.

**Fig. 19.14** | HTML wrapper for Movie Viewer. (Part 2 of 2.)

createSilverlight();

19.6 Silverlight Streaming **795**

businesses to share video content online without having to provide and pay for the signif- icant bandwidth that video requires. While in prerelease status, Silverlight Streaming pro- vides you with “up to 4GB storage and unlimited outbound streaming, and no limit on the number of users that can view those streams.”1 Eventually, Microsoft intends to allow “up to 1 million minutes of free video streaming at 700 Kbps per site per month. Unlim- ited streaming will also be available for free with advertising, or with payment of a nominal fee for the service for use without advertising.”2 You can easily embed Silverlight applica- tions that are hosted by this service into your web pages.

**_Encoding Your Video with Expression Media Encoder_** According to dev.live.com/silverlight/, the bit rate of video files included with Sil- verlight applications must not exceed 700 Kbps. To ensure that your video adheres to these requirements, it is recommended that you encode your video using Microsoft Ex- pression Blend Media Encoder. A free trial of Media Encoder is available at www.microsoft.com/expression/products/download.aspx?key=encoder. Once Media Encoder is installed, open it and select **Import...** from the **File** menu. Select the video file you would like to encode (Media Encoder supports many video types) and click **Open**. If the video is encoded in VC-1 and doesn’t open properly, you may need to install Windows Media Player 11. In the **Profile** panel of the **Settings** inspector (Fig. 19.16), you can select the **Video** and **Audio** type. For the Movie Viewer example, we encoded the video using **VC- 1 Streaming Broadband** and the audio using the **Default Profile**. In the **Output** inspector (Fig. 19.16), you can have Media Encoder save a thumbnail of a frame of your choosing, and have the output include one of 14 prebuilt Silverlight media player templates for your video. To start the encoding process, either select **Encode** from the **File** menu, or click the **Encode** button at the bottom of the **Media Content** inspector.

**_Uploading an Application to the Silverlight Streaming Service_** To use the Silverlight Streaming service, you must go to silverlight.live.com and reg- ister for an account. Once you have an account, log in and select **Manage Applications** from the navigation links on the left side of the page. This page will show you what applications are currently being hosted on your account, and it also enables you to upload applications.

1\. dev.live.com/terms/ 2. dev.live.com/silverlight/

**Fig. 19.16** | Microsoft’s Expression Media Encoder. (Part 1 of 2.)

**796** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

To upload an application, you must package it into a Zip archive. This archive must contain your XAML, your code-behind file, any media elements you use in the applica- tion, and a manifest.xml file (Fig. 19.17). The manifest.xml file specifies the filename of your XAML file (line 4), width and height (lines 5–6), and more.

**1** <!-- Fig. 19.17: manifest.xml --> **2** <!-- Manifest for Movie Viewer on Silverlight Streaming. --> **3** <SilverlightApp> **4** <source>Page.xaml</source> **5** <width>640</width> **6** <height>480</height> **7** <inplaceInstallPrompt>true</inplaceInstallPrompt> **8** <background>#000000</background> **9** <framerate>24</framerate>

**10** <version>1.0</version> **11** <isWindowless>false</isWindowless> **12** </SilverlightApp>

**Fig. 19.17** | Manifest for Movie Viewer on Silverlight Streaming.

**Fig. 19.16** | Microsoft’s Expression Media Encoder. (Part 2 of 2.)

19.6 Silverlight Streaming **797**

On the **Manage Applications** page, click the **Upload a Silverlight Application** link. You must enter an **Application Name** and select the Zip archive you wish to upload. If the appli- cation uploads successfully after you click **Upload**, you will see the **Manage Application** page for the application. On this page, Microsoft provides instructions for adding the application to an existing web page. First, you must create a new JavaScript file to handle the CreateSilverlight function that adds the Silverlight application inside a div in your HTML. For the div element that you add to your HTML, make sure to set the width and height parameters to the width and height of your application. Figures 19.18 and 19.19 show the HTML and JavaScript needed to embed the Movie Viewer application that is hosted on Silverlight Streaming.

**1** <?xml version = "1.0" encoding = "utf-8"?> **2** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **3** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **4 5** <!-- Fig. 19.18: silverlightStreaming.html --> **6** <!-- HTML wrapper for Movie Viewer hosted on Silverlight Streaming --> **7** <html xmlns = "http://www.w3.org/1999/xhtml"> **8** <head> **9** <title>MovieViewer Hosted on Silverlight Streaming</title>

**10 11 12 13 14** <style type = "text/css"> **15** .silverlightHost { height: 480px; **16** width: 640px; } **17** </style> **18** </head> **19** <body> **20 21 22 23 24 25 26 27** </body> **28** </html>

**Fig. 19.18** | HTML wrapper for Movie Viewer hosted on Silverlight Streaming.

**1** // Fig. 19.19: CreateSilverlight.js **2** // JavaScript to add the Silverlight object to the Wrapper_MovieViewer div **3** function CreateSilverlight() **4** { **5** Silverlight.createHostedObjectEx( { **6** source: "streaming:/16645/MovieViewer", **7** parentElement: Wrapper_MovieViewer } ); **8** }

**Fig. 19.19** | JavaScript to add the Silverlight object to Wrapper_MovieViewer div.

<script type = "text/javascript" src = "http://agappdom.net/h/silverlight.js"></script>

<script type = "text/javascript" src = "CreateSilverlight.js"></script>

<div id = "Wrapper\_MovieViewer" style = "width: 640px; height: 480px; overflow: hidden;"></div>

<script type = "text/javascript"> var Wrapper\_MovieViewer =

document.getElementById( "Wrapper\_MovieViewer" ); CreateSilverlight();

</script>

**798** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

**19.7 Silverlight 1.1 Installation and Overview Silverlight 1.1** uses a lightweight version of the **.NET CLR (Common Language Run- time)** in the browser plug-in. This allows you to program Silverlight applications in C#, Visual Basic, Python, Ruby and JavaScript. Silverlight 1.1 applications use the .NET CLR’s just-in-time (JIT) compiler to compile the code to machine language, allowing for a significant improvement in performance over the interpreted JavaScript used in Silver- light 1.0 and Ajax.

To install the Silverlight 1.1 Alpha Refresh browser plug-in, go to silverlight.net/

GetStarted/ and download the Silverlight 1.1 Alpha Refresh runtime for your platform. Once you have installed it, you can see some 1.1 applications in action at the website silverlight.net/themes/silverlight/community/gallerydetail.aspx?cat=2.

A chess game that serves as an excellent demonstration of the performance improve- ment is located at silverlight.net/samples/1.1/chess/run/default.html. This game allows you to compare the performance of a computer player coded in .NET to the per- formance of a computer player coded in JavaScript. As you will see, the .NET player usu- ally wins because it can analyze many more moves than the JavaScript player in the same amount of time.

We will develop our Silverlight 1.1 applications using Microsoft Expression Blend 2 and Microsoft Visual Studio 2008. After you have installed these tools, download and install the **Silverlight Tools Alpha for Visual Studio** from go.microsoft.com/fwlink/

?LinkID=89149&clcid=0x409. Now, you can create a Silverlight 1.1 Alpha Refresh project.

**19.8 Creating a Cover Viewer for Silverlight 1.1 Alpha** Our next example is a Deitel book cover viewer (Fig. 19.20) written in XAML (Fig. 19.21) with a Visual Basic code-behind file (Fig. 19.22) for Silverlight 1.1 Alpha

**Fig. 19.20** | Deitel book-cover viewer running on Silverlight 1.1 Alpha Refresh. (Part 1 of 2.)

a) The user clicking the _Internet & World Wide Web How To Program_ cover

19.8 Creating a Cover Viewer for Silverlight 1.1 Alpha **799**

Refresh. This cover viewer retrieves an RSS feed containing the image URIs, and displays three covers at a time. Clicking the cover on the left or right triggers an animation that moves the cover the user clicked to the center. You can test a live version of this application at test.deitel.com/examples/iw3htp4/silverlight/CoverViewer/index.html.

**_Creating a Silverlight 1.1 Application in Visual Studio 2008_** To create a Silverlight 1.1 Alpha Refresh project, open Visual Studio 2008 and select **New Project** in the **File** menu. Next, select **Visual Basic** (for your later projects, you can also se- lect **Visual C#**), then **Silverlight**, then specify the name and location of your project, and click **OK**. The project will initially contain a XAML file, Page.xaml, a code-behind file,

**Fig. 19.20** | Deitel book-cover viewer running on Silverlight 1.1 Alpha Refresh. (Part 2 of 2.)

b) The animation transitioning the center image from the _C++ How to Program_ cover to the _Internet & World Wide Web How To Program_ cover

c) After the animation is complete, the _Internet & World Wide Web How To Program_ cover is now the center image.

**800** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

Page.xaml.vb, Silverlight.js and the HTML wrapper, TestPage.html. You can work on this project in both Visual Studio and Expression Blend at the same time. When you make a change in one program, then switch to the other, it will alert you that the file has been modified outside the program and prompt you to reload the file. Select **Yes** to ensure that you include any changes you made in the other program.

At line 7 of Page.xaml (Fig. 19.21), we define the **x:Class** attribute, which specifies the Class that contains our event handlers, in this case the Page class in Page.xaml.vb

(lines 9–159 of Fig. 19.22). The GUI contains two TextBlocks—titleTextBlock (lines 230–233) and errorTextBlock (lines 234–236)–and three Images—prevImage (lines 237–248), currentImage (lines 249–250) and nextImage (lines 251–262). Both next-

Image and prevImage have a MouseLeftButtonDown attribute, registering the event han- dlers for this event.

**1** <!-- Fig. 19.21: Page.xaml --> **2** <!-- Deitel Cover Viewer in Silverlight 1.1 Alpha Refresh --> **3** <Canvas **4** xmlns = "http://schemas.microsoft.com/client/2007" **5** xmlns:x = "http://schemas.microsoft.com/winfx/2006/xaml" **6** x:Name = "parentCanvas" Loaded = "Page_Loaded" **7** x:Class = "CoverViewer.Page;assembly=ClientBin/CoverViewer.dll" **8** Width = "640" Height = "480" Background = "Black"> **9** <Canvas.Resources>

**10 11 12 13** <!-- Lines 12-99 of the autogenerated code were --> **14** <!-- removed to save space. --> **15 100** </Storyboard> **101 102 103 104** <!-- Lines 103-226 of the autogenerated code were --> **105** <!-- removed to save space. --> **106 227** </Storyboard> **228** </Canvas.Resources> **229 230** <TextBlock x:Name = "titleTextBlock" Canvas.Left = "199.994" **231** Canvas.Top = "5" FontSize = "24" Width = "238.308" **232** TextWrapping = "Wrap" Foreground = "#FFFFFFFF" **233** Text = "Deitel Cover Viewer" /> **234** <TextBlock x:Name = "errorTextBlock" Canvas.Left = "0" **235** Canvas.Top = "400" FontSize = "12" Width = "640" **236** TextWrapping = "Wrap" Foreground = "#FFFFFFFF" /> **237 238** Width = "149.64" Height = "196.652" Canvas.Left = "8" **239** Canvas.Top = "142" RenderTransformOrigin = "0.5, 0.5" > **240** <Image.RenderTransform> **241** <TransformGroup> **242** <ScaleTransform ScaleX = "1" ScaleY = "1" />

**Fig. 19.21** | Deitel Cover Viewer in Silverlight 1.1 Alpha Refresh. (Part 1 of 2.)

<Storyboard x:Name = "nextImageAnimation" Completed = "nextImageSwitch">

<Storyboard x:Name = "prevImageAnimation" Completed = "prevImageSwitch">

<Image x:Name = "prevImage" MouseLeftButtonDown = "prevImageHandler"

19.8 Creating a Cover Viewer for Silverlight 1.1 Alpha **801**

In lines 10–100 (of which lines 12–99 are not shown to save space), the next-

ImageAnimation Storyboard moves and resizes the three images so that the nextImage

replaces the currentImage, the currentImage replaces the prevImage, and the prevImage disappears. This animation code was generated using Expression Blend. To create this ani- mation, first click the **Create new Storyboard** button (Fig. 19.4). Name the Storyboard

nextImageAnimation, and select the **Create as a Resource** checkbox. Then, select next- Image and click **Record Keyframe**. Move the time slider to 0.5 seconds, then move and resize the element so that it replaces currentImage. You can click the **Play** button to see a preview of the animation.

Storyboard nextImageAnimation has a Completed attribute (line 11) that specifies the event handler to be called when the animation is complete. In lines 101–227 (of which lines 103–226 are not shown to save space), the prevImageAnimation Storyboard moves and resizes the three images so that the prevImage replaces the currentImage, the currentImage replaces the nextImage, and the nextImage disappears. This animation also has a Completed attribute (line 102) that specifies the event handler to be called when the animation is complete.

**_Visual Basic Code-Behind File_** The Visual Basic code-behind file, Page.xaml.vb (Fig. 19.22), begins by importing the class libraries the application will use (lines 3–7). Lines 9–10 specify that the Page class Inherits methods and properties from the Canvas class. Lines 13–15 declare the instance variables the application will use. These include imageURIArrayList (a **List** of the image Uris), currentImageIndex (which holds the index number of the Uri in imageURIArray-

List to be displayed as the currentImage), and appRootURI (which uses the appRootURI- Gen method (lines 151–158) to find the root URI of the application at runtime).

**243** <SkewTransform AngleX = "0" AngleY = "0" /> **244** <RotateTransform Angle = "0" /> **245** <TranslateTransform X = "0" Y = "0" /> **246** </TransformGroup> **247** </Image.RenderTransform> **248** </Image> **249 250** Canvas.Left = "186" Canvas.Top = "64.79" /> **251 252** Width = "149.64" Height = "196.652" Canvas.Left = "482.36" **253** Canvas.Top = "142" RenderTransformOrigin = "0.5, 0.5" > **254** <Image.RenderTransform> **255** <TransformGroup> **256** <ScaleTransform ScaleX = "1" ScaleY = "1" /> **257** <SkewTransform AngleX = "0" AngleY = "0" /> **258** <RotateTransform Angle = "0" /> **259** <TranslateTransform X = "0" Y = "0" /> **260** </TransformGroup> **261** </Image.RenderTransform> **262** </Image> **263** </Canvas>

**Fig. 19.21** | Deitel Cover Viewer in Silverlight 1.1 Alpha Refresh. (Part 2 of 2.)

<Image x:Name = "currentImage" Width = "265.302" Height = "348.652"

<Image x:Name = "nextImage" MouseLeftButtonDown = "nextImageHandler"

**802** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

**1** ' Fig. 19.22: Page.xaml.vb **2** ' VB code-behind file for Cover Viewer. **3** Imports System.IO **4** Imports System.Text **5** Imports System.Windows.Browser **6** Imports System.Windows.Browser.Net **7** Imports System.Collections.Generic **8 9** Partial Public Class Page

**10** Inherits Canvas **11 12** ' Instance variables **13 14 15 16 17 18** ' Required to initialize variables **19 20** Try **21 22 23 24 25** ' Save response in variable **26 27 28** ' Save response stream in variable **29 30 31** Dim currentImageURI ' Store Image URI **32 33** ' Create an XmlReader to parse the response stream **34 35 36 37** ' Start reading response stream, exit loop when done **38 39 40** ' Find item element in response stream **41 42 43 44** ' Create an XmlReader for item element **45** Using itemXMLReader As XmlReader = \_ **46 47 48** ' Start reading item element, exit loop when done **49** While (itemXMLReader.Read()) **50 51** ' Find image child element of item **52** If (itemXMLReader.IsStartElement()) Then **53** If ("image" = itemXMLReader.LocalName) Then

**Fig. 19.22** | VB code-behind file for Cover Viewer. (Part 1 of 3.)

Dim currentImageIndex = 0 ' Initialize index of currentImage as 0 Dim imageURIArrayList As New List(Of Uri)() ' Create ArrayList of URIs Dim appRootURI = appRootURIGen() ' Store application root URI

Public Sub Page_Loaded(ByVal o As Object, ByVal e As EventArgs)

InitializeComponent()

Dim httpRequest As New \_ BrowserHttpWebRequest( \_

New Uri(appRootURI + "bookCoversRSS.xml"))

Dim httpResponse = httpRequest.GetResponse()

Dim httpResponseStream = httpResponse.GetResponseStream()

Using xmlReader As XmlReader = xmlReader.Create( \_ New StreamReader(httpResponseStream))

While (xmlReader.Read())

If ((xmlReader.IsStartElement()) And \_ ("item" = xmlReader.LocalName)) Then

xmlReader.ReadSubtree()

19.8 Creating a Cover Viewer for Silverlight 1.1 Alpha **803**

**54 55** ' Save Uri of image into ArrayList **56 57 58 59 60** End If **61** End If **62** End While **63** End Using **64** End If **65** End While **66** End Using **67 68** ' Close BrowserHttpWebRequest **69 70 71** ' Initialize currentImage and nextImage Sources **72 73 74 75** Catch ex As Exception **76** errorTextBlock.Text = "Error: " & ex.Message **77** End Try **78** End Sub ' Page_Loaded **79 80** ' Handle nextImageAnimation's Completed event **81** Private Sub nextImageSwitch(ByVal sender As Object, \_ **82** ByVal e As EventArgs) **83** nextImageAnimation.Stop() **84 85** ' Test if at end of images **86** If (currentImageIndex = (imageURIArrayList.Count - 2)) Then **87** currentImageIndex += 1 ' Increment currentImageIndex **88 89** ' Set Source of prevImage and currentImage **90** prevImage.Source = imageURIArrayList(currentImageIndex - 1) **91** currentImage.Source = imageURIArrayList(currentImageIndex) **92** nextImage.Opacity = 0 ' Hide nextImage **93** Else **94** currentImageIndex += 1 ' Increment currentImageIndex **95 96** ' Set Source of prevImage, currentImage and nextImage **97** prevImage.Source = imageURIArrayList(currentImageIndex - 1) **98** currentImage.Source = imageURIArrayList(currentImageIndex) **99** nextImage.Source = imageURIArrayList(currentImageIndex + 1) **100** prevImage.Opacity = 1 ' Show prevImage **101** End If **102** End Sub ' nextImageSwitch **103 104** ' Handle prevImageAnimation's Completed event **105** Private Sub prevImageSwitch(ByVal sender As Object, \_ **106** ByVal e As EventArgs)

**Fig. 19.22** | VB code-behind file for Cover Viewer. (Part 2 of 3.)

currentImageURI = appRootURI + \_ itemXMLReader.ReadElementContentAsString imageURIArrayList.Add( \_

New Uri(currentImageURI))

httpResponse.Close()

currentImage.Source = imageURIArrayList(currentImageIndex) nextImage.Source = imageURIArrayList(currentImageIndex + 1)

**804** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

**107 108 109** ' Test if at beginning of images **110** If (currentImageIndex = 1) Then **111** currentImageIndex -= 1 ' Decrement currentImageIndex **112** prevImage.Opacity = 0 ' Hide prevImage **113 114** ' Set Source of currentImage and nextImage **115** currentImage.Source = imageURIArrayList(currentImageIndex) **116** nextImage.Source = imageURIArrayList(currentImageIndex + 1) **117** Else **118** currentImageIndex -= 1 ' Decrement currentImageIndex **119 120** ' Set Source of prevImage, currentImage and nextImage **121** prevImage.Source = imageURIArrayList(currentImageIndex - 1) **122** currentImage.Source = imageURIArrayList(currentImageIndex) **123** nextImage.Source = imageURIArrayList(currentImageIndex + 1) **124** nextImage.Opacity = 1 ' Show nextImage **125** End If **126** End Sub ' prevImageSwitch **127 128** ' Handle nextImage's MouseLeftButtonDown event **129** Private Sub nextImageHandler(ByVal sender As Object, \_ **130** ByVal e As EventArgs) **131 132** ' Make sure there are more images to the right **133** If (currentImageIndex < (imageURIArrayList.Count - 1)) Then **134** nextImageAnimation.Begin() **135** End If **136** End Sub ' nextImageHandler **137 138** ' Handle prevImage's MouseLeftButtonDown event **139** Private Sub prevImageHandler(ByVal sender As Object, \_ **140** ByVal e As EventArgs) **141 142** ' Make sure there are more images to the left **143** If (currentImageIndex > 1) Then **144** prevImageAnimation.Begin() **145** ElseIf (currentImageIndex > 0) Then **146** prevImageAnimation.Begin() **147** End If **148** End Sub ' prevImageHandler **149 150** ' Generate root URI of application **151** Public Function appRootURIGen() As String **152 153** ' Find root directory of application **154 155 156 157 158** End Function ' appRootURIGen **159** End Class ' Page

**Fig. 19.22** | VB code-behind file for Cover Viewer. (Part 3 of 3.)

prevImageAnimation.Stop()

Dim path = HtmlPage.DocumentUri.AbsolutePath Dim lastSlash = path.LastIndexOf("/") path = path.Substring(0, lastSlash + 1) Return "http://" & HtmlPage.DocumentUri.Host & path

19.8 Creating a Cover Viewer for Silverlight 1.1 Alpha **805**

In method Page_Loaded (lines 17–78), line 19 initializes the application using the InitializeComponent method located in the autogenerated Page.g.vb file (located in the obj\\Debug directory). This file takes any XAML elements that have an x:Name attribute, and uses the **FindName** method to map each element to a variable of the same name. This means that we do not have to do this manually, as we did for the Silverlight 1.0 **Movie Viewer** example. It also allows us to use Visual Studio’s IntelliSense feature to autocom- plete XAML element names in our code-behind file.

Lines 20–77 try to download an RSS file, bookCoversRSS.xml (Fig. 19.23), and create an array of image Uris. First, lines 21–23 create a **BrowserHttpWebRequest** object that downloads the RSS file located at the URI created by concatenating the appRootURI

variable with bookCoversRSS.xml. Note that the BrowserHttpWebRequest object does not currently support cross-domain requests, so the application and the RSS file must be located on the same server. Lines 26 and 29 get the object used to manipulate the request’s response, then get the stream associated with that object. Lines 34–35 create an **XmlReader**

object to parse the RSS content. The XmlReader class provides read-only access to the ele- ments in an XML document. Lines 38–65 contain a While loop in which the condition remains True until the XmlReader has reached the end of the RSS. Lines 41–42 search for an item element in the RSS, and lines 45–53 read the contents of that element and search for an image element inside the item element. Upon finding an image element, lines 56– 59 add the contents of the image element (the image’s filename) to the imageURIArray-

List as a complete Uri including the application’s root Uri (appRootURI). Line 69 closes the BrowserHttpWebRequest. Lines 72–73 set the Source attribute of the currentImage

and nextImage to the first and second elements of the imageURIArrayList. Lines 75–76 catch any exceptions and display the error message in the errorTextBlock.

**1** <?xml version = "1.0" encoding = "ISO-8859-1" ?> **2** <!-- Fig. 19.23: bookCoversRSS.xml --> **3** <!-- RSS for Deitel book-cover viewer --> **4** <rss version = "2.0"> **5** <link rel = "alternate" type = "application/rss+xml" **6** title = "Deitel Cover Viewer" href = "http://www.deitel.com/" /> **7** <channel> **8** <title>Deitel Cover Viewer</title> **9** <link>http://www.deitel.com/</link>

**10** <description>View the Deitel book covers.</description> **11** <copyright>2008 Deitel And Associates</copyright> **12** <language>en-us</language> **13 14** <item> **15** <title>C How to Program</title> **16** <link>images/chtp5.jpg</link> **17** <image>images/chtp5.jpg</image> **18** </item> **19** <item> **20** <title>C++ How to Program</title> **21** <link>images/cpphtp6.jpg</link> **22** <image>images/cpphtp6.jpg</image> **23** </item>

**Fig. 19.23** | RSS for Deitel book-cover viewer. (Part 1 of 2.)

**806** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

Method appRootURIGen (Fig. 19.22, lines 151–158) first uses the **HtmlPage** element to find the **AbsolutePath** of the page. Lines 155–156 find the last forward slash (/) of the Uri and save the Uri up to that last slash as a string, using the Substring method. Line

**24** <item> **25** <title>Internet How to Program</title> **26** <link>images/iw3htp4.jpg</link> **27** <image>images/iw3htp4.jpg</image> **28** </item> **29** <item> **30** <title>Java How to Program</title> **31** <link>images/jhtp7.jpg</link> **32** <image>images/jhtp7.jpg</image> **33** </item> **34** <item> **35** <title>VB How to Program</title> **36** <link>images/vbhtp3.jpg</link> **37** <image>images/vbhtp3.jpg</image> **38** </item> **39** <item> **40** <title>Visual C# How to Program</title> **41** <link>images/vcsharphtp2.jpg</link> **42** <image>images/vcsharphtp2.jpg</image> **43** </item> **44** <item> **45** <title>Simply C++</title> **46** <link>images/simplycpp.jpg</link> **47** <image>images/simplycpp.jpg</image> **48** </item> **49** <item> **50** <title>Simply VB 2005</title> **51** <link>images/simplyvb2005.jpg</link> **52** <image>images/simplyvb2005.jpg</image> **53** </item> **54** <item> **55** <title>Simply Java</title> **56** <link>images/simplyjava.jpg</link> **57** <image>images/simplyjava.jpg</image> **58** </item> **59** <item> **60** <title>Small C++ How to Program</title> **61** <link>images/smallcpphtp5.jpg</link> **62** <image>images/smallcpphtp5.jpg</image> **63** </item> **64** <item> **65** <title>Small Java</title> **66** <link>images/smalljavahtp6.jpg</link> **67** <image>images/smalljavahtp6.jpg</image> **68** </item> **69** </channel> **70** </rss>

**Fig. 19.23** | RSS for Deitel book-cover viewer. (Part 2 of 2.)

19.9 Building an Application with Third-Party Controls **807**

157 returns a string concatenating "http://", the Silverlight application’s Host (the domain name or IP address of the server) and the path string.

Method nextImageHandler (lines 129–136) handles nextImage’s MouseLeftButton- Down event. Line 133 checks whether there are, in fact, additional book covers to the right. If so, line 134 begins the nextImageAnimation Storyboard. Upon completion, this Sto- ryboard will call the nextImageSwitch method (lines 81–102). Line 86 checks whether there is only one more book cover to the right, in which case it will increment the currentImageIndex by one (line 87), update the Source of prevImage and currentImage

(90–91), and hide nextImage (line 92). If there is more than one book cover to the right, lines 94–100 will increment the currentImageIndex by one (line 94), update the Source

of all three Images (lines 97–99), and ensure that prevImage is visible (line 100), in case the user is going from the first book cover (where prevImage would be hidden) to the second book cover. Methods prevImageHandler (lines 139–148) and prevImageSwitch

(lines 105–126) provide the corresponding functionality for prevImage.

**19.9 Building an Application with Third-Party Controls** Though Silverlight 1.1 Alpha Refresh does not yet include pre-built controls, a number of third-party control libraries have been created. One such third-party library is Netika’s GOA WinForms library for Silverlight. This library is an implementation of .NET’s Sys- tem.Windows.Form library for both Silverlight and Flash. This allows us to create Silver- light applications by using .NET desktop applications as templates. The free version of GOA WinForms includes 40+ controls, including buttons, text boxes, calendars and more. Netika’s website at www.netikatech.com includes demos and documentation for all the controls. To download the library, go to www.netikatech.com/downloads and select the standard Silverlight version of GOA WinForms. After installation, open Visual Studio 2008 and create a new project. Select **Visual Basic**, then **GOA WinForms VB Application** in **My Templates**. Name this project **InterestRateCalculator**, as we will be creating a Silverlight application that calculates interest. For a GOA WinForms project, the Visual Basic code- behind file is located in MyForm.vb. In this file, you will find an InitializeComponent

function (lines 27–42) that creates a Button. Select **Build InterestRateCalculator** from the **Build** menu, then open TestPage.html in your browser to see a sample button.

Open up the InterestRateCalculatorForWindows project from the examples direc- tory. We are going to be creating a Silverlight application from this desktop application (Fig. 19.24). First, build and run the project to see how the application looks on the desktop. Next, replace the InitializeComponent function in the InterestRateCalcu-

lator project’s MyForm.vb with the InitializeComponent in the InterestRateCalcula- torForWindows project’s InterestRateCalculatorForWindows.Designer.vb. Then replace the Friend WithEvents line (line 26) in the InterestRateCalculator project’s MyForm.vb with the Friend WithEvents lines (lines 139–147) in the InterestRateCal-

culatorForWindows project’s InterestRateCalculatorForWindows.Designer.vb file. Finally, copy the btnCalculate_Click function from the InterestRateCalculatorFor-

Windows project’s InterestRateCalculatorForWindows.vb into the MyForm class in the InterestRateCalculator project’s MyForm.vb.

Try to build the InterestRateCalculator project. You will see several errors. This is because not every property of the Windows Form controls has been implemented in GOA WinForms. Looking at Fig. 19.25, you will see that we commented out lines 47, 60, 82,

**808** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

100, 118 and 128–129. These lines all accessed properties not supported in GOA Win- Forms. We kept these lines as comments to show you the relatively easy process of con- verting a Visual Basic desktop application to a Silverlight 1.1 application when using GOA WinForms controls.

**Fig. 19.24** | Interest Calculator in Windows and Silverlight

**1** ' Fig. 19.25: MyForm.vb **2** ' Using third-party controls in Silverlight 1.1 Alpha Refresh. **3** Public Class MyForm **4** Inherits System.Windows.Forms.Form **5 6** Public Sub New() **7** MyBase.New() **8** InitializeComponent() **9** End Sub ' New

**10 11** Protected Overloads Overrides Sub Dispose( \_ **12** ByVal disposing As Boolean) **13** If disposing Then **14** If Not (components Is Nothing) Then **15** components.Dispose() **16** End If **17** End If

**Fig. 19.25** | Using third-party controls in Silverlight 1.1 Alpha Refresh. (Part 1 of 5.)

a) Interest Calculator in Windows b) Interest Calculator in Silverlight

19.9 Building an Application with Third-Party Controls **809**

**18** MyBase.Dispose(disposing) **19** End Sub ' Dispose **20 21** Private components As System.ComponentModel.IContainer **22 23** Private Sub InitializeComponent() **24** Me.btnCalculate = New System.Windows.Forms.Button **25** Me.txtDisplay = New System.Windows.Forms.TextBox **26** Me.lblBalance = New System.Windows.Forms.Label **27** Me.updYear = New System.Windows.Forms.NumericUpDown **28** Me.lblYears = New System.Windows.Forms.Label **29** Me.txtInterest = New System.Windows.Forms.TextBox **30** Me.lblInterest = New System.Windows.Forms.Label **31** Me.txtPrincipal = New System.Windows.Forms.TextBox **32** Me.lblPrincipal = New System.Windows.Forms.Label **33** CType(Me.updYear, \_ **34** System.ComponentModel.ISupportInitialize).BeginInit() **35** Me.SuspendLayout() **36 37** ' btnCalculate **38** Me.btnCalculate.Location = New System.Drawing.Point(197, 14) **39** Me.btnCalculate.Name = "btnCalculate" **40** Me.btnCalculate.Size = New System.Drawing.Size(75, 23) **41** Me.btnCalculate.TabIndex = 17 **42** Me.btnCalculate.Text = "Calculate" **43 44** ' txtDisplay **45** ' the following line was commented out because it accessed **46** ' a property that is not supported in GOA WinForms **47** ' Me.txtDisplay.BackColor = System.Drawing.SystemColors.Control **48** Me.txtDisplay.Location = New System.Drawing.Point(18, 170) **49** Me.txtDisplay.Multiline = True **50** Me.txtDisplay.Name = "txtDisplay" **51** Me.txtDisplay.ReadOnly = True **52** Me.txtDisplay.ScrollBars = System.Windows.Forms.ScrollBars.Vertical **53** Me.txtDisplay.Size = New System.Drawing.Size(254, 104) **54** Me.txtDisplay.TabIndex = 16 **55** Me.txtDisplay.Font = New Font("Courier New", 10) **56 57** ' lblBalance **58** ' the following line was commented out because it accessed **59** ' a property that is not supported in GOA WinForms **60** ' Me.lblBalance.AutoSize = True **61** Me.lblBalance.Location = New System.Drawing.Point(17, 143) **62** Me.lblBalance.Name = "lblBalance" **63** Me.lblBalance.Size = New System.Drawing.Size(122, 13) **64** Me.lblBalance.TabIndex = 15 **65** Me.lblBalance.Text = "Yearly account balance:" **66 67** ' updYear **68** Me.updYear.Location = New System.Drawing.Point(85, 95) **69** Me.updYear.Maximum = New Decimal(New Integer() {10, 0, 0, 0}) **70** Me.updYear.Minimum = New Decimal(New Integer() {1, 0, 0, 0})

**Fig. 19.25** | Using third-party controls in Silverlight 1.1 Alpha Refresh. (Part 2 of 5.)

**810** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

**71** Me.updYear.Name = "updYear" **72** Me.updYear.ReadOnly = True **73** Me.updYear.Size = New System.Drawing.Size(100, 20) **74** Me.updYear.TabIndex = 14 **75** Me.updYear.TextAlign = \_ **76** System.Windows.Forms.HorizontalAlignment.Right **77** Me.updYear.Value = New Decimal(New Integer() {1, 0, 0, 0}) **78 79** ' lblYears **80** ' the following line was commented out because it accessed **81** ' a property that is not supported in GOA WinForms **82** ' Me.lblYears.AutoSize = True **83** Me.lblYears.Location = New System.Drawing.Point(17, 102) **84** Me.lblYears.Name = "lblYears" **85** Me.lblYears.Size = New System.Drawing.Size(37, 13) **86** Me.lblYears.TabIndex = 13 **87** Me.lblYears.Text = "Years:" **88 89** ' txtInterest **90** Me.txtInterest.Location = New System.Drawing.Point(85, 58) **91** Me.txtInterest.Name = "txtInterest" **92** Me.txtInterest.Size = New System.Drawing.Size(100, 20) **93** Me.txtInterest.TabIndex = 12 **94** Me.txtInterest.TextAlign = \_ **95** System.Windows.Forms.HorizontalAlignment.Right **96 97** ' lblInterest **98** ' the following line was commented out because it accessed **99** ' a property that is not supported in GOA WinForms **100** ' Me.lblInterest.AutoSize = True **101** Me.lblInterest.Location = New System.Drawing.Point(17, 61) **102** Me.lblInterest.Name = "lblInterest" **103** Me.lblInterest.Size = New System.Drawing.Size(71, 13) **104** Me.lblInterest.TabIndex = 11 **105** Me.lblInterest.Text = "Interest Rate:" **106 107** ' txtPrincipal **108** Me.txtPrincipal.Location = New System.Drawing.Point(85, 17) **109** Me.txtPrincipal.Name = "txtPrincipal" **110** Me.txtPrincipal.Size = New System.Drawing.Size(100, 20) **111** Me.txtPrincipal.TabIndex = 10 **112** Me.txtPrincipal.TextAlign = \_ **113** System.Windows.Forms.HorizontalAlignment.Right **114 115** ' lblPrincipal **116** ' the following line was commented out because it accessed **117** ' a property that is not supported in GOA WinForms **118** ' Me.lblPrincipal.AutoSize = True **119** Me.lblPrincipal.Location = New System.Drawing.Point(17, 20) **120** Me.lblPrincipal.Name = "lblPrincipal" **121** Me.lblPrincipal.Size = New System.Drawing.Size(50, 13) **122** Me.lblPrincipal.TabIndex = 9 **123** Me.lblPrincipal.Text = "Principal:"

**Fig. 19.25** | Using third-party controls in Silverlight 1.1 Alpha Refresh. (Part 3 of 5.)

19.9 Building an Application with Third-Party Controls **811**

**124 125** ' FrmInterestCalculator **126** ' the following two lines were commented out because they **127** ' accessed properties that are not supported in GOA WinForms **128** ' Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!) **129** ' Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font **130** Me.ClientSize = New System.Drawing.Size(289, 288) **131** Me.Controls.Add(Me.btnCalculate) **132** Me.Controls.Add(Me.txtDisplay) **133** Me.Controls.Add(Me.lblBalance) **134** Me.Controls.Add(Me.updYear) **135** Me.Controls.Add(Me.lblYears) **136** Me.Controls.Add(Me.txtInterest) **137** Me.Controls.Add(Me.lblInterest) **138** Me.Controls.Add(Me.txtPrincipal) **139** Me.Controls.Add(Me.lblPrincipal) **140** Me.Name = "FrmInterestCalculator" **141** Me.Text = "Interest Calculator" **142** CType(Me.updYear, \_ **143** System.ComponentModel.ISupportInitialize).EndInit() **144** Me.ResumeLayout(False) **145** Me.PerformLayout() **146** End Sub ' InitializeComponent **147 148** Friend WithEvents btnCalculate As System.Windows.Forms.Button **149** Friend WithEvents txtDisplay As System.Windows.Forms.TextBox **150** Friend WithEvents lblBalance As System.Windows.Forms.Label **151** Friend WithEvents updYear As System.Windows.Forms.NumericUpDown **152** Friend WithEvents lblYears As System.Windows.Forms.Label **153** Friend WithEvents txtInterest As System.Windows.Forms.TextBox **154** Friend WithEvents lblInterest As System.Windows.Forms.Label **155** Friend WithEvents txtPrincipal As System.Windows.Forms.TextBox **156** Friend WithEvents lblPrincipal As System.Windows.Forms.Label **157 158** Public Shared Sub Main() **159** Application.Run(New MyForm) **160** End Sub ' Main **161 162** Private Sub btnCalculate_Click(ByVal sender As System.Object, \_ **163** ByVal e As System.EventArgs) Handles btnCalculate.Click **164 165** Dim principal As Decimal **166** Dim rate As Double **167** Dim year As Integer **168** Dim amount As Decimal **169 170** principal = Convert.ToDecimal(Me.txtPrincipal.Text) **171** rate = Convert.ToDouble(Me.txtInterest.Text) **172** year = Convert.ToInt32(Me.updYear.Value) **173 174** txtDisplay.Text = String.Format("{0,-6}{1}" & vbCrLf, "Year", \_ **175** "Amount on Deposit") **176**

**Fig. 19.25** | Using third-party controls in Silverlight 1.1 Alpha Refresh. (Part 4 of 5.)

**812** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

Build the InterestRateCalculator project, then open up TestPage.html in a web browser. You will see an **"AG_E_UNKNOWN_ERROR"** error message because the application is not running from a web server. You can safely ignore this error message for now. Test the application, and compare it with the desktop version (Fig. 19.24). Some of the con- trols function slightly differently, as GOA WinForms is not an exact replica of the stan- dard Windows Forms controls.

The InitializeComponent function (lines 23–146) was generated in the Interest-

RateCalculatorForWindows project using Visual Studio’s design mode. TextBoxes are used to input the principal and interest-rate amounts, and a NumericUpDown control is used to input the number of years for which we want to calculate interest.

The btnCalculate_Click function (lines 162–183) handles btnCalculate’s Click

event (line 163). Lines 165 and 168 declare two Decimal variables, principal and amount. Line 166 declares rate as type Double, and line 167 declares year as type Integer. Lines 170–171 take the Text from the txtPrincipal and txtInterest text boxes, convert them to the correct type, then store the value in the corresponding variable. Line 172 takes the Value from the updYear NumericUpDown, converts it to an integer, and stores the value to year. Lines 174–175 set the txtDisplay’s Text to display "Year" and "Amount on

Deposit" column headers followed by a carriage return. These are formatted using the String.Format method.

Lines 177–182 count from 1 to year in increments of 1. Lines 178–179 perform a calculation based on the following formula:

_a = p_(_1 + r_) _n_

where _a_ is the amount, _p_ is the principal, _r_ is the rate and _n_ is the year. Lines 180–181 set txtDisplay’s Text to display two columns containing the current yearCounter and amount values.

**19.10 Consuming a Web Service** In the next example, we consume a web service from a Silverlight application. The web service is designed to perform calculations with integers that contain a maximum of 100 digits. Most programming languages cannot easily perform calculations using integers this large. The web service provides client applications with methods that take two “huge in- tegers” and determine their sum, their difference, which one is larger or smaller and whether the two numbers are equal. We’ve placed the web service is on our website at test.deitel.com/hugeinteger/hugeinteger.asmx.

**177 178 179 180 181 182 183** End Sub ' btnCalculate_Click **184** End Class ' MyForm

**Fig. 19.25** | Using third-party controls in Silverlight 1.1 Alpha Refresh. (Part 5 of 5.)

For yearCounter As Integer = 1 To year amount = principal \* Convert.ToDecimal( \_

Math.Pow(1 + rate / 100, yearCounter)) txtDisplay.Text &= String.Format("{0,-6:D}{1:C}" & vbCrLf, \_

yearCounter, amount) Next

19.10 Consuming a Web Service **813**

We provide a Visual Basic program that consumes this web service. We will create a Silverlight application using that application’s code, then we’ll add a proxy class to the project that allows the Silverlight application to access the web service. The proxy class (or proxy) is generated from the web service’s WSDL file and enables the client to call web methods over the Internet. The proxy class handles all the details of communicating with the web service. The proxy class is hidden from you by default—you can view it in the **Solution Explorer** by clicking the **Show All Files** button. The proxy class’s purpose is to make clients think that they are calling the web methods directly.

When you add a web reference to the Silverlight project, Visual Studio will generate the appropriate proxy class. You will then create an instance of the proxy class and use it to call the web service’s methods. First, create a new **GOA WinForms VB Application** named HugeInteger in Visual Studio 2008, then perform the following steps:

**_Step 1: Opening the Add Web Reference Dialog_** Right click the project name in the **Solution Explorer** and select **Add Web Reference…** (Fig. 19.26).

**_Step 2: Locating Web Services on Your Computer_** In the **Add Web Reference** dialog that appears (Fig. 19.26), enter http://

test.deitel.com/hugeinteger/hugeinteger.asmx in the **URL** field and press **Go**. You will see a list of the operations that the HugeInteger web service provides. Note that for the application to work, it must reside on the same server as the web service, because Sil- verlight 1.1 does not yet allow for cross-domain requests. These steps demonstrate the pro- cess we went through to create the application on our server at test.deitel.com/

examples/iw3htp4/silverlight/HugeInteger/.

**_Step 3: Adding the Web Reference_** Add the web reference by clicking the **Add Reference** button (Fig. 19.27).

**Fig. 19.26** | Adding a web service reference to a project.

**814** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

**_Step 4: Viewing the Web Reference in the Solution Explorer_** The **Solution Explorer** (Fig. 19.28) should now contain a **Web References** folder with a node named after the domain name where the web service is located. In this case, the name is com.deitel.test because we are using a web service from test.deitel.com. When we reference class HugeInteger in the client application, we will do so through the com.dei- tel.test namespace.

**Fig. 19.27** | Web reference selection and description.

**Fig. 19.28** | **Solution Explorer** after adding a web reference to a project.

19.10 Consuming a Web Service **815**

**19.10.1 Consuming the HugeInteger Web Service** Now, copy the InitializeComponent function (lines 14–109) and Private WithEvents

section (lines 111–119) from HugeIntegerForWindows.Designer.vb in the HugeInte-

gerForWindows project to MyForm.vb in the HugeInteger project. Delete the old Initial-

izeComponent function and Friend WithEvents line in MyForm.vb. Then, copy lines 6– 117 from HugeIntegerForWindows.vb in the HugeIntegerForWindows project into the MyForm Class located in MyForm.vb in the HugeInteger project. If you try to build the project now, you will notice that the code is trying to access properties not supported by GOA WinForms. In Fig. 19.29, we commented out lines 38–41, 85–86, 95–95, 105–107 and 118–119 to remove statements that access unsupported properties in GOA Win- Forms. If you were running this application from the same server as the web service, you could now build this application and run it by opening TestPage.html. Try the complet- ed application at test.deitel.com/examples/iw3htp4/silverlight/HugeInteger/.

**1** ' Fig. 19.29: MyForm.vb **2** ' Consuming the HugeInteger web service in Silverlight 1.1 Alpha Refresh **3** Public Class MyForm **4** Inherits System.Windows.Forms.Form **5 6** Public Sub New() **7** MyBase.New() **8** InitializeComponent() **9** End Sub

**10 11** 'Form overrides dispose to clean up the component list. **12** Protected Overloads Overrides Sub Dispose(ByVal disposing As Boolean) **13** If disposing Then **14** If Not (components Is Nothing) Then **15** components.Dispose() **16** End If **17** End If **18** MyBase.Dispose(disposing) **19** End Sub **20 21** Private components As System.ComponentModel.IContainer **22 23** Private Sub InitializeComponent() **24** Me.lblResult = New System.Windows.Forms.Label **25** Me.btnEqual = New System.Windows.Forms.Button **26** Me.btnSmaller = New System.Windows.Forms.Button **27** Me.btnLarger = New System.Windows.Forms.Button **28** Me.btnSubtract = New System.Windows.Forms.Button **29** Me.btnAdd = New System.Windows.Forms.Button **30** Me.txtSecond = New System.Windows.Forms.TextBox **31** Me.txtFirst = New System.Windows.Forms.TextBox **32** Me.lblPrompt = New System.Windows.Forms.Label **33** Me.SuspendLayout() **34 35** ' lblResult **36** ' the following four lines were commented out because they

**Fig. 19.29** | Consuming the HugeInteger web service in Silverlight 1.1 Alpha. (Part 1 of 6.)

**816** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

**37** ' accessed properties that are not supported in GOA WinForms **38** ' Me.lblResult.BorderStyle = System.Windows.Forms.BorderStyle. **39** ' FixedSingle() **40** ' Me.lblResult.Font = New System.Drawing.Font( **41** ' "Microsoft Sans Serif", 9.75!) **42** Me.lblResult.Location = New System.Drawing.Point(13, 122) **43** Me.lblResult.Name = "lblResult" **44** Me.lblResult.Size = New System.Drawing.Size(714, 37) **45** Me.lblResult.TabIndex = 17 **46 47** ' btnEqual **48** Me.btnEqual.Location = New System.Drawing.Point(562, 91) **49** Me.btnEqual.Name = "btnEqual" **50** Me.btnEqual.Size = New System.Drawing.Size(85, 23) **51** Me.btnEqual.TabIndex = 16 **52** Me.btnEqual.Text = "Equal" **53 54** ' btnSmaller **55** Me.btnSmaller.Location = New System.Drawing.Point(445, 91) **56** Me.btnSmaller.Name = "btnSmaller" **57** Me.btnSmaller.Size = New System.Drawing.Size(85, 23) **58** Me.btnSmaller.TabIndex = 15 **59** Me.btnSmaller.Text = "Smaller Than" **60 61** ' btnLarger **62** Me.btnLarger.Location = New System.Drawing.Point(328, 91) **63** Me.btnLarger.Name = "btnLarger" **64** Me.btnLarger.Size = New System.Drawing.Size(85, 23) **65** Me.btnLarger.TabIndex = 14 **66** Me.btnLarger.Text = "Larger Than" **67 68** ' btnSubtract **69** Me.btnSubtract.Location = New System.Drawing.Point(211, 91) **70** Me.btnSubtract.Name = "btnSubtract" **71** Me.btnSubtract.Size = New System.Drawing.Size(85, 23) **72** Me.btnSubtract.TabIndex = 13 **73** Me.btnSubtract.Text = "Subtract" **74 75** ' btnAdd **76** Me.btnAdd.Location = New System.Drawing.Point(94, 91) **77** Me.btnAdd.Name = "btnAdd" **78** Me.btnAdd.Size = New System.Drawing.Size(85, 23) **79** Me.btnAdd.TabIndex = 12 **80** Me.btnAdd.Text = "Add" **81 82** ' txtSecond **83** ' the following two lines were commented out because they **84** ' accessed a property that is not supported in GOA WinForms **85** ' Me.txtSecond.Font = New System.Drawing.Font( **86** ' "Microsoft Sans Serif", 9.75!) **87** Me.txtSecond.Location = New System.Drawing.Point(13, 63) **88** Me.txtSecond.Name = "txtSecond" **89** Me.txtSecond.Size = New System.Drawing.Size(714, 22)

**Fig. 19.29** | Consuming the HugeInteger web service in Silverlight 1.1 Alpha. (Part 2 of 6.)

19.10 Consuming a Web Service **817**

**90** Me.txtSecond.TabIndex = 11 **91 92** ' txtFirst **93** ' the following two lines were commented out because they **94** ' accessed a property that is not supported in GOA WinForms **95** ' Me.txtFirst.Font = New System.Drawing.Font( **96** ' "Microsoft Sans Serif", 9.75!) **97** Me.txtFirst.Location = New System.Drawing.Point(13, 35) **98** Me.txtFirst.Name = "txtFirst" **99** Me.txtFirst.Size = New System.Drawing.Size(714, 22) **100** Me.txtFirst.TabIndex = 10 **101 102** ' lblPrompt **103** ' the following three lines were commented out because they **104** ' accessed properties that are not supported in GOA WinForms **105** ' Me.lblPrompt.AutoSize = True **106** ' Me.lblPrompt.Font = New System.Drawing.Font( **107** ' "Microsoft Sans Serif", 9.75!) **108** Me.lblPrompt.Location = New System.Drawing.Point(13, 16) **109** Me.lblPrompt.Name = "lblPrompt" **110** Me.lblPrompt.Size = New System.Drawing.Size(339, 16) **111** Me.lblPrompt.TabIndex = 9 **112** Me.lblPrompt.Text = "Please enter two positive numbers" & \_ **113** "up to 100 digits each." **114 115** ' UsingHugeIntegerWebService **116** ' the following two lines were commented out because they **117** ' accessed properties that are not supported in GOA WinForms **118** ' Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!) **119** ' Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font **120** Me.ClientSize = New System.Drawing.Size(740, 175) **121** Me.Controls.Add(Me.lblResult) **122** Me.Controls.Add(Me.btnEqual) **123** Me.Controls.Add(Me.btnSmaller) **124** Me.Controls.Add(Me.btnLarger) **125** Me.Controls.Add(Me.btnSubtract) **126** Me.Controls.Add(Me.btnAdd) **127** Me.Controls.Add(Me.txtSecond) **128** Me.Controls.Add(Me.txtFirst) **129** Me.Controls.Add(Me.lblPrompt) **130** Me.Name = "UsingHugeIntegerWebService" **131** Me.Text = "Using Huge Integer Web Service" **132** Me.ResumeLayout(False) **133** Me.PerformLayout() **134** End Sub **135 136** Private WithEvents lblResult As System.Windows.Forms.Label **137** Private WithEvents btnEqual As System.Windows.Forms.Button **138** Private WithEvents btnSmaller As System.Windows.Forms.Button **139** Private WithEvents btnLarger As System.Windows.Forms.Button **140** Private WithEvents btnSubtract As System.Windows.Forms.Button **141** Private WithEvents btnAdd As System.Windows.Forms.Button **142** Private WithEvents txtSecond As System.Windows.Forms.TextBox

**Fig. 19.29** | Consuming the HugeInteger web service in Silverlight 1.1 Alpha. (Part 3 of 6.)

**818** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

**143** Private WithEvents txtFirst As System.Windows.Forms.TextBox **144** Private WithEvents lblPrompt As System.Windows.Forms.Label **145 146** Public Shared Sub Main() **147** Application.Run(New MyForm) **148** End Sub **149 150** ' declare a reference to Web service **151 152 153** ' character to trim from strings **154** Private zeros As Char() = New Char() {"0"c} **155 156** ' adds two numbers input by user **157** Private Sub btnAdd_Click(ByVal sender As System.Object, \_ **158** ByVal e As System.EventArgs) Handles btnAdd.Click **159** ' make sure numbers do not exceed 100 digits and that both **160** ' are not 100 digits long, which would result in overflow **161** If txtFirst.Text.Length > 100 Or txtSecond.Text.Length > 100 \_ **162** Or (txtFirst.Text.Length = 100 And \_ **163** txtSecond.Text.Length = 100) Then **164** MessageBox.Show( \_ **165** "HugeIntegers must not be more than 100 digits" & \_ **166** vbCrLf & "Both integers cannot be of length 100: " & \_ **167** " this causes an overflow", "Error", \_ **168** MessageBoxButtons.OK, MessageBoxIcon.Information) **169** Else **170** ' perform addition **171 172 173** End If **174** End Sub ' btnAdd_Click **175 176** ' subtracts two numbers input by user **177** Private Sub btnSubtract_Click(ByVal sender As System.Object, \_ **178** ByVal e As System.EventArgs) Handles btnSubtract.Click **179** ' ensure that HugeIntegers do not exceed 100 digits **180** If Not NumbersTooBig(txtFirst.Text, txtSecond.Text) Then **181** ' perform subtraction **182** Try **183 184 185 186** If result = "" Then **187** lblResult.Text = "0" **188** Else **189** lblResult.Text = result **190** End If **191** Catch exception As Exception **192** ' if WebMethod throws an exception, **193** ' then first argument was smaller than second **194** MessageBox.Show( \_ **195** "First argument was smaller than the second")

**Fig. 19.29** | Consuming the HugeInteger web service in Silverlight 1.1 Alpha. (Part 4 of 6.)

Private remoteInteger As New com.deitel.test.HugeInteger

lblResult.Text = remoteInteger.Add( \_ txtFirst.Text, txtSecond.Text).TrimStart(zeros)

Dim result As String = remoteInteger.Subtract( \_ txtFirst.Text, txtSecond.Text).TrimStart(zeros)

19.10 Consuming a Web Service **819**

**196** End Try **197** End If **198** End Sub ' btnSubtract_Click **199 200** ' determines whether first number input is larger than the second **201** Private Sub btnLarger_Click(ByVal sender As System.Object, \_ **202** ByVal e As System.EventArgs) Handles btnLarger.Click **203** ' ensure that HugeIntegers do not exceed 100 digits **204** If Not NumbersTooBig(txtFirst.Text, txtSecond.Text) Then **205** ' call Web-service method to determine whether **206** ' first integer is larger than the second **207** If Then **208** lblResult.Text = txtFirst.Text.TrimStart(zeros) & \_ **209** " is larger than " & txtSecond.Text.TrimStart(zeros) **210** Else **211** lblResult.Text = txtFirst.Text.TrimStart(zeros) & \_ **212** " is not larger than " + txtSecond.Text.TrimStart(zeros) **213** End If **214** End If **215** End Sub ' btnLarger_Click **216 217** ' determines whether first number input is smaller than the second **218** Private Sub btnSmaller_Click(ByVal sender As System.Object, \_ **219** ByVal e As System.EventArgs) Handles btnSmaller.Click **220** ' make sure HugeIntegers do not exceed 100 digits **221** If Not NumbersTooBig(txtFirst.Text, txtSecond.Text) Then **222** ' call Web-service method to determine if **223** ' first integer is smaller than second **224** If Then **225** lblResult.Text = txtFirst.Text.TrimStart(zeros) & \_ **226** " is smaller than " + txtSecond.Text.TrimStart(zeros) **227** Else **228** lblResult.Text = txtFirst.Text.TrimStart(zeros) & \_ **229** " is not smaller than " & txtSecond.Text.TrimStart(zeros) **230** End If **231** End If **232** End Sub ' btnSmaller_Click **233 234** ' determines whether the two numbers input are equal **235** Private Sub btnEqual_Click(ByVal sender As System.Object, \_ **236** ByVal e As System.EventArgs) Handles btnEqual.Click **237** ' ensure that HugeIntegers do not exceed 100 digits **238** If Not NumbersTooBig(txtFirst.Text, txtSecond.Text) Then **239** ' call Web-service method to determine if integers are equal **240** If Then **241** lblResult.Text = txtFirst.Text.TrimStart(zeros) & \_ **242** " is equal to " & txtSecond.Text.TrimStart(zeros) **243** Else **244** lblResult.Text = txtFirst.Text.TrimStart(zeros) & \_ **245** " is not equal to " & txtSecond.Text.TrimStart(zeros) **246** End If **247** End If **248** End Sub ' btnEqual_Click

**Fig. 19.29** | Consuming the HugeInteger web service in Silverlight 1.1 Alpha. (Part 5 of 6.)

remoteInteger.Bigger(txtFirst.Text, txtSecond.Text)

remoteInteger.Smaller(txtFirst.Text, txtSecond.Text)

remoteInteger.EqualTo(txtFirst.Text, txtSecond.Text)

**820** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

The code in Fig. 19.29 uses the HugeInteger web service to perform computations with positive integers up to 100 digits long. You are already familiar with converting a Visual Basic Windows Forms application to Silverlight, so we focus our discussion on the web services concepts in this example.

Line 151 creates variable remoteInteger and initializes it with a proxy object of type com.deitel.test.HugeInteger. This variable is used in each of the application’s event handlers to call methods of the HugeInteger web service. Lines 171–172, 183–184, 207, 224 and 240 in the various button event handlers invoke methods of the web service. Note that each call is made on the local proxy object, which then communicates with the web service on the client’s behalf.

The user inputs two integers, each up to 100 digits long. Clicking a button causes the application to invoke a web method to perform the appropriate task and return the result. Note that client application HugeInteger cannot perform operations using 100-digit numbers directly. Instead the application creates String representations of these numbers and passes them as arguments to web methods that handle such tasks for the client. It then uses the return value of each operation to display an appropriate message.

Note that the application eliminates leading zeros in the numbers before displaying them by calling String method TrimStart, which removes all occurrences of characters specified by a Char array (line 154) from the beginning of a String.

**19.11 Silverlight Demos, Games and Web Resources** In this section we provide links to, and descriptions of, several websites where you’ll find Silverlight demos, games, controls, sample code and tutorials. For additional Silverlight re- sources (including tutorials, articles, blogs, books, sample chapters, community sites, FAQs, RSS feeds, podcasts, videos and more), visit the Deitel Silverlight Resource Center at www.deitel.com/silverlight. silverlight.net/community/communitygallery.aspx

The Silverlight Gallery provides a large collection of Silverlight 1.0 and 1.1 sample applications. Check out the top-rated and recently added samples, or view the complete list. Each sample includes a star rating, a description and options for viewing and downloading the samples. Become a member to upload and share your Silverlight applications with the community.

**249 250** ' determines whether numbers input by user are too big **251** Private Function NumbersTooBig(ByVal first As String, \_ **252** ByVal second As String) As Boolean **253** ' display an error message if either number has too many digits **254** If (first.Length > 100) Or (second.Length > 100) Then **255** MessageBox.Show("HugeIntegers must be less than 100 digits", \_ **256** "Error", MessageBoxButtons.OK, MessageBoxIcon.Information) **257** Return True **258** End If **259 260** Return False **261** End Function ' NumbersTooBig **262 263** End Class

**Fig. 19.29** | Consuming the HugeInteger web service in Silverlight 1.1 Alpha. (Part 6 of 6.)

19.11 Silverlight Demos, Games and Web Resources **821**

www.hanselman.com/blog/SilverlightSamples.aspx

A collection of Silverlight sample applications (many overlap with Microsoft’s Silverlight Gallery) compiled by Scott Hanselman, a Microsoft MVP.

community.netikatech.com/demos/

GOA WinForms demos from Netika Tech, available for Silverlight and Flash. GOA WinForms is an implementation of the .NET System.Windows.Form library in Silverlight and Flash for devel- oping RIAs. The simple demos include quick tours of GOA WinForms controls, a DataGrid, an Outlook-like calendar and a Visual Studio-like form designer.

www.andybeaulieu.com/Home/tabid/67/EntryID/73/Default.aspx

Silverlight Rocks! is a simple shooter game built with Silverlight 1.1. Using four buttons on your keyboard, you can turn the spaceship left or right, shoot and thrust forward. The goal is to destroy the asteroids. The author provides a walkthrough of how he wrote the game. The source code is available for download.

www.andybeaulieu.com/Home/tabid/67/EntryID/75/Default.aspx

Destroy All Invaders is a shooter game built with Silverlight 1.1. Select a location from the drop- down list (options include rural upstate New York, Microsoft’s Redmond campus and Las Vegas, to name a few) or enter a specific address. The game brings up a satellite image of the location and an animated helicopter. The point of the game is to shoot and destroy the UFOs. The author provides a walkthrough of how he wrote the game. The source code is available for download.

www.bluerosegames.com/brg/drpopper/default.html

Dr. Popper Silverlight Edition by Bill Reiss of Blue Rose Games is written for Silverlight 1.1. The game consists of multiple colored bubbles arranged on a 10-bubble by 8-bubble board. You can re- move the bubbles in groups of two or more, gaining more points for bigger groups. The source code is available for download.

www.aisto.com/Roeder/Silverlight/Monotone/Default.aspx

Monotone is an animated graphics demo built for Silverlight (using C#) and MP3 audio. Download the source code at www.aisto.com/Roeder/Silverlight/.

www.aisto.com/Roeder/Silverlight/Inplay/Default.aspx

InPlay is an in-browser audio and video player. The demo includes stunning audio and video, and you can use the controls to adjust the volume and position. Source code for InPlay is available at www.aisto.com/Roeder/Silverlight/.

zerogravity.terralever.com/

Zero Gravity is an adventure game, created by Terralever using Silverlight and C#. The game fea- tures animation and audio. Using your keyboard controls, the goal is to get Lieutenant Bennett back to his spaceship safely, jumping between blocks, teleports, switches and more.

silverlight.net/samples/1.0/Sprawl/default.html

Sprawl, written for Silverlight, is a tile-capture game in which you play against the computer. The goal is to capture more tiles than the computer without paving over tiles you have already captured.

cosmik.members.winisp.net/BubbleFactory/

The Bubble Factory game, built with Silverlight, is a simple animated game in which you use key- board controls to move the bubble dropper left or right and to drop the bubbles. The key is to align three bubbles of the same color (horizontally, vertically or diagonally) to make them explode.

silverlight.net/samples/1.1/chess/run/default.html

A simple game of chess built with Silverlight 1.1.

microsoft.blognewschannel.com/archives/2007/06/29/barrel-o-silverlight-games/

The Inside Microsoft blog entry entitled “Barrel O’ Silverlight Games” includes links to several Sil- verlight games including Chess, Zero Gravity, Sprawl, Destroy All Invaders, Digger and more.

**822** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

silverlightrocks.com/community/blogs/silverlight_games_101/default.aspx

A tutorial entitled “Silverlight Games 101: Beginning game programming in Microsoft Silverlight 1.1 using C#” by Bill Reiss and Silverlight Rocks! Topics include the Zero Gravity game, loading XAML dynamically, adding thrusts, a better game loop, keyboard input, creating a game loop and drawing a sprite. All of the source code for the tutorial is available for download.

blogs.msdn.com/tims/default.aspx

Microsoft’s Tim Sneath blogs about Silverlight and other Microsoft technologies. He includes links to 50+ Silverlight samples, information about the latest Silverlight releases and other Silverlight news.

www.junkship.org:8000/silverlightdemo/

The Amazon Search Visualization demo, built with Silverlight. Click the “New Search” button, then enter the title of the book or author for which you would like to search. Images of each book and related books appear on the screen. Click the green button on the image to get the book details (in- cluding title, author(s), reviewer rating, lowest new price and lowest used price). You will also see a visual presentation of book covers for related books. Click the red button on the book cover to close that item. Click the “Clear All” button to search for a new book. dnnsilverlight.adefwebserver.com/Samples/SilverlightVideo/tabid/55/Default.aspx

A Silverlight Video module for DotNetNuke allows you to embed a video player in your DotNet- Nuke site. Check out the demo to view a video in a web page or to view the video full-screen. The site includes installation and configuration instructions.

www.chriscavanagh.com/Chris/Silverlight/Physics2D-1/TestPage.html

A 2-D Physics Engine has numerous platforms. Click the “Drop Wheels” button to drop tires from the top of the page onto the varying platforms to see which direction they will roll. Click the “Move Platforms” button and “Drop Wheels” to try again. dev.aol.com/mail

The AOL Social Mail Gadget, built with Silverlight, gives AOL mail users easy access to email, IM, photos and video and more with just one click. It also allows you to set up an “A-List” of your most important contacts so you are aware when they are online, when a message from someone on the list is received and more.

mlb.mlb.com/media/video.jsp

Check out a sample of a Silverlight video player embedded in a Major League Baseball web page. You can pause and rewind the video and adjust the volume. A link is provided so you can link to the video from your website.

silverlight.net/samples/1.0/Grand-Piano/default.html

A Grand Piano application built with Silverlight includes audio and animation. Click on the key with your mouse to play a note.

www.telerik.com/products/silverlight/overview.aspx

RadControls for Microsoft Silverlight help you build RIAs without using JavaScript or XAML cod- ing. Features include layouts, animation effects, integration with ASP.NET Ajax and more. Check out the demos to see the features, functionality, appearance and more.

blogs.msdn.com/cbowen/archive/2007/07/30/controls-and-control-libraries-for- silverlight.aspx

The blog entry entitled “Controls and Control Libraries for Silverlight” by Microsoft’s Chris Bowen, provides links to some of the reusable Silverlight controls and libraries that allow you to develop Sil- verlight applications faster and more efficiently. You’ll also find links to samples and tutorials.

silverlight.net/QuickStarts/BuildUi/CustomControl.aspx

The tutorial “How to Create Custom Silverlight Controls” discusses the control UI and object mod- el, starting from the Silverlight Class Library Project, defining the UI, getting object references, add-

19.12 Wrap-Up **823**

ing properties and events for control customization, testing your control and shadowing inherited properties. silverlight.net/learn/learnvideo.aspx?video=207

The video tutorial “How to Build a Silverlight Control” by Jesse Liberty, shows you how to create an HTML application that interacts with a Silverlight control. www.codeplex.com/Project/ProjectDirectory.aspx?ProjectSearchText=silverlight

CodePlex, Microsoft's open source project hosting website, includes a collection of 14 open source Silverlight projects including iTunes 2.0, Dynamic Silverlight Samples, Silverlight 1.0 JavaScript In- tellisense, Silverlight Playground, Balder, Silverlight Audio Player and more. Each project includes a description of the project, a demo and the source code. www.aisto.com/Roeder/Silverlight/

Lutz Roeder’s Silverlight page provides several sample applications including Monotone (www.aisto.com/Roeder/Silverlight/Monotone/Default.aspx), a graphics application written in XAML and C#; Digger (www.aisto.com/Roeder/Silverlight/Digger/Default.aspx), a clone of the Boulderdash game, written in C#; and Inplay (www.aisto.com/Roeder/Silverlight/Inplay/ Default.aspx?Audio=play:false&Video=source:http://download.microsoft.com/download/2/

C/4/2C433161-F56C-4BAB-BBC5-B8C6F240AFCC/SL_0410_448x256_300kb_2passCBR.wmv), an audio and video player that can be embedded in a web page, built with C#. Download demos of each ap- plication and get the source code.

**19.12 Wrap-Up** In this chapter, you learned how to build Silverlight XAML user interfaces in Microsoft Expression Blend. You also learned how to program Silverlight event handlers with Java- Script in Silverlight 1.0 and Visual Basic in Silverlight 1.1 Alpha Refresh. We showed how to embed Silverlight applications in HTML pages, and how to distribute media over the web using Microsoft’s Silverlight Streaming service. We used Netika’s GOA WinForms library to port two Visual Basic desktop applications to Silverlight 1.1. Finally, you learned how to consume an ASP.NET web service in Silverlight. In the next chapter, you’ll learn how to use Adobe Dreamweaver CS3 to design web pages.

**Summary _Section 19.1 Introduction_** • Silverlight is Microsoft’s RIA platform. It is designed to complement Ajax and other RIA tech-

nologies, such as Adobe Flash and Flex, Sun’s JavaFX and Microsoft’s own ASP.NET Ajax.

• Silverlight currently runs as a browser plug-in for Internet Explorer, Firefox and Safari on recent versions of Microsoft Windows and Mac OS X.

• Developers from the Mono project are developing an open-source implementation of Silverlight for Linux distributions called Moonlight.

• At the time of this writing, Silverlight is currently available in version 1.0 Release Candidate and version 1.1 Alpha Refresh.

**_Section 19.2 Platform Overview_** • Silverlight applications consist of a user interface described in Extensible Application Markup

Language (XAML) and a code-behind file (or files) containing the program logic.

• XAML is Microsoft’s XML vocabulary for describing user interfaces.

**824** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

• Silverlight 1.0 focuses primarily on media and supports programming only in JavaScript.

• Microsoft provides a service called Silverlight Streaming that allows you to distribute video-based Silverlight applications for free.

• When Silverlight 1.1 is released, computers with Silverlight 1.0 will automatically be upgraded. This could immediately make Silverlight 1.1 a widespread platform for RIA development.

• Silverlight 1.1’s key benefit is that it adds an implementation of the .NET runtime, allowing de- velopers to create Silverlight applications in .NET languages.

• Microsoft plans to implement a built-in set of controls in a future release of Silverlight 1.1.

• Version 1.1 provides a substantial performance improvement over 1.0 because .NET code is compiled by the developer then executed on the client, unlike JavaScript, which is interpreted and executed on the client at runtime.

**_Section 19.3 Silverlight 1.0 Installation and Overview_** • We developed our Silverlight 1.0 application using Microsoft’s Expression Blend 2, a WYSI-

WYG editor for building XAML user interfaces.

**_Section 19.4 Creating a Movie Viewer for Silverlight 1.0_** • To create the project in Expression Blend, open Expression Blend and select **New Project** in the

**Project** tab. To create a Silverlight 1.0 application, select **Silverlight Application (JavaScript)**.

**_Section 19.4.1 Creating a User Interface In XAML Using Expression Blend_** • The root element of the XAML file is a Canvas element. A Canvas element acts as a container for

other user interface elements and controls their position.

• The parent Canvas element is created when you create a new Silverlight project in Expression Blend. The parent Canvas has a default Name of Page, Width of 640 px and Height of 480 px.

• An element’s Name attribute provides an ID to access the element programmatically.

• An element’s properties can be edited in the **Properties** panel.

• Additional Canvas elements can be created in Expression Blend using the toolbar’s Canvas tool.

• The XAML can be manually edited by selecting **XAML** in Expression Blend’s **View** menu.

**_Section 19.4.2 Using Storyboards_** • The Storyboard element allows you to define animations.

• In Expression Blend, you can create a Storyboard by opening the **Open, create or manage Story- boards** panel and clicking the **Create new Storyboard** button. Selecting the **Create as a Resource** checkbox enables you to start the Storyboard from anywhere in the application’s JavaScript.

• A Storyboard must have a target object.

• Expression Blend provides the Gradient brush tool to visually create and modify gradients.

**_Section 19.4.3 Creating Controls_** • You can create a TextBlock element using Expression Blend’s **TextBlock** tool.

• Use the **Solid color brush** in the **Brushes** inspector to set a solid color.

• You can adjust the text size in the **Text** inspector.

• A Canvas element can be a child of another Canvas element.

• Double-click a Canvas element with the **Selection** tool to activate it.

• The Image element’s **Source** attribute points to an image file. You can select the **Image** tool by clicking the **Asset Library** button, checking **Show All**, and selecting **Image**.

Summary **825**

• The user’s cursor will change to a hand when the cursor is moved over a Canvas if its **Cursor** prop- erty is set to **Hand** in the **Common Properties** inspector.

• Set the **RadiusX** and **RadiusY** to give a Rectangle rounded corners. These properties are located in the **advanced properties** section of the **Appearance** inspector.

• Use the **Pen** tool to draw a Path. The Path element allows you to draw shapes that include curves and arcs, but here we are just using it to draw simple lines.

• You can set the **StrokeThickness**, **StrokeEndLineCap** and **StrokeStartLineCap** properties of a Path

in the **Appearance** inspector.

• One element appears on top of another if it appears after the other element in the **Objects and Timeline** inspector. You can also specify the _z_\-order of elements using an object’s ZIndex attribute. Higher ZIndex integer values position the element closer to the foreground.

• The MediaElement allows you to include video and/or audio. To access the **MediaElement** tool, click the **Asset Library** button, check **Show All** and select **MediaElement**.

• The MediaElement’s **Source** attribute points to the source video file.

• Expression Blend 2 August Preview does not currently have a user interface to set event handlers, so you must manually set them in the XAML.

• Storyboard attribute Completed registers an event that is triggered when an animation completes.

• The MouseLeftButtonDown attribute registers an event that is triggered when the user left-clicks on the element.

• MediaElement attribute MediaOpened registers an event that is triggered when a video opens.

• When a MediaElement is loaded, it will begin playing the movie. To change this, set its AutoPlay attribute to false.

• MediaElement attribute MediaEnded registers an event that is triggered when a video has reaches the end.

• An alternative to registering event handlers in the XAML is to register event handlers in the Java- Script code. This has two key advantages—it keeps the application’s logic separate from the ap- plication’s user interface, and it allows you to add and remove event listeners dynamically.

• When registering an event in JavaScript using the addEventListener method, store the method’s return value, so you can remove the event listener using the removeEventListener later.

**_Section 19.4.4 Using JavaScript for Event Handling and DOM Manipulation_** • The JavaScript code-behind file, Page.xaml.js, defines the event handlers for the various ele-

ments in the XAML.

• A Canvas’s Loaded event is triggered when the Canvas finishes loading

• You can create a reference to a XAML element using the sender’s findName method.

• Every event handler receives sender and eventArgs parameters. The sender parameter is a refer- ence to the element with which the user interacted, and the eventArgs parameter passes infor- mation about the event that occurred.

• Method getHost returns a reference to the Silverlight plug-in so you can access its properties.

• The plug-in’s onFullScreenChange event occurts when the application switches to or from full- screen mode.

• A Storyboard’s begin function starts the Storyboard.

• A Storyboard’s Completed event occurs when the animation completes.

• The MediaElement’s position.Seconds attribute contains the media’s elapsed time in seconds.

**826** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

• In the Canvas.Left attribute, Left is a dependency property of Canvas, meaning that the Left

value is relative to the Canvas. To access a dependency property, enclose the attribute name in quotes and square brackets, as in _element_\["_attributeName_"\].

• The plug-in’s fullScreen attribute specifies whether the application is in full-screen mode.

• MediaElement property volume is a value between 0 (muted) and 1 (full volume).

**_Section 19.5 Embedding Silverlight in HTML_** • Expression Blend generates an HTML wrapper named Default.html for your Silverlight appli-

cation when you first create the Silverlight project.

• You can embed a Silverlight application into an existing HTML file by including the scripts, the silverlightHost style class and the SilverlightControlHost div from Default.html.

• You can adjust the width and height of your application by changing the width and height at- tributes of the silverlightHost style class.

**_Section 19.6 Silverlight Streaming_** • Microsoft’s Silverlight Streaming (silverlight.live.com) enables individuals and businesses to

share video content online. You can easily embed Silverlight applications that are hosted by this service into your web pages.

**_Section 19.7 Silverlight 1.1 Installation and Overview_** • Silverlight 1.1 uses a lightweight version of the .NET CLR (Common Language Runtime) in the

browser plug-in. This allows you to program Silverlight applications in many .NET languages.

• Silverlight 1.1 applications use the .NET CLR’s just-in-time (JIT) compiler to compile the code to machine language, providing significant performance improvements over the interpreted Java- Script used in Silverlight 1.0 and Ajax.

• We developed our Silverlight 1.1 applications using Microsoft Expression Blend 2 and Microsoft Visual Studio 2008. The **Silverlight Tools Alpha for Visual Studio** enable you to create a Silverlight 1.1 Alpha Refresh project.

**_Section 19.8 Creating a Cover Viewer for Silverlight 1.1 Alpha_** • To create a Silverlight 1.1 Alpha Refresh project, open Visual Studio 2008 and select **New Project**

in the **File** menu.

• A Silverlight 1.1 Alpha Refresh project will initially contain a XAML file, Page.xaml, a code-be- hind file, Page.xaml.vb, Silverlight.js and the HTML wrapper, TestPage.html.

• The x:Class attribute specifies the class that contains the event handlers.

• The InitializeComponent method in the autogenerated Page.g.vb file, takes any XAML ele- ments that have an x:Name attribute and uses the FindName method to map each element to a vari- able of the same name.

• Note that the BrowserHttpWebRequest object does not currently support cross-domain requests, so your application and its resources must be located on the same server.

• Use the HtmlPage element to find the AbsolutePath of the page.

**_Section 19.9 Building an Application with Third-Party Controls_** • Though Silverlight 1.1 Alpha Refresh does not yet include pre-built controls, a number of third-

party control libraries have been created.

• Netika’s GOA WinForms library implements .NET’s System.Windows.Form library for both Sil- verlight and Flash.

Terminology **827**

• To create a GOA WinForms Silverlight application, open Visual Studio 2008 and create a new project. Select **Visual Basic**, then **GOA WinForms VB Application** in **My Templates**.

• For a GOA WinForms project, the Visual Basic code-behind file is located in MyForm.vb.

• To convert a Visual Basic desktop application to a Silverlight application using GOA WinForms, copy code from the user interface and code-behind files into MyForm.vb.

• You may see errors because not every property of the Windows Form controls has been imple- mented in GOA WinForms.

• Some of the controls function slightly differently, as GOA WinForms is not an exact replica of the standard Windows Forms controls.

**_Section 19.10 Consuming a Web Service_** • A proxy class (or proxy) is generated from a web service’s WSDL file and enables the client to

call web methods over the Internet. The proxy class handles all the details of communicating with the web service.

• When you add a web reference to the Silverlight project, Visual Studio will generate the appro- priate proxy class. You will then create an instance of the proxy class and use it to call the web service’s methods.

• At this time, a Silverlight application that invokes a web service must reside on the same domain as that web service, because Silverlight 1.1 does not yet allow for cross-domain requests.

• Add the web reference by clicking the **Add Reference** button (Fig. 19.27).

**Terminology** addEventListener method AutoPlay attribute of MediaElement element BrowserHttpWebRequest object C# Canvas element Canvas.Left attribute code-behind file Collapsed value of Visibility Completed attribute of Storyboard element dependency property Ellipse element eventArgs parameter Expression Blend 2 Fill attribute findName method of the Silverlight 1.0 plug-in FindName method of the Silverlight 1.1 plug-in fullScreen attribute of Silverlight plug-in getHost method Gradient brush tool Hand value of Cursor attribute Height attribute HTML wrapper HtmlPage element Image element IntelliSense

JavaScript just-in-time (JIT) compiler Loaded event of Canvas element Manifest for Silverlight Streaming MediaElement element MediaEnded attribute of MediaElement MediaOpened attribute of MediaElement MouseLeftButtonDown attribute naturalDuration attribute of a MediaElement

.NET Common Language Runtime (CLR) onFullScreenChange event (Silverlight plug-in) Opacity attribute Path element position.Seconds attribute of MediaElement proxy class for a web service Rectangle element removeEventListener method sender parameter Silverlight Silverlight Document Object Model (DOM) Silverlight plug-in Silverlight Streaming **Silverlight Tools Alpha for Visual Studio** Source attribute of Image Source attribute of MediaElement

**828** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

Storyboard element Stroke attribute TextBlock element Uri

Visibility attribute of Canvas element Visual Basic volume attribute of MediaElement element Web reference selection and description Width attribute Windows Media Video (WMV) Windows Presentation Foundation (WPF)

Windows Presentation Foundation Everywhere (WPF/E)

WMV (Windows Media Video) x:Class attribute of Canvas element x:Name attribute XAML (Extensible Application Markup Lan-

guage) XmlReader object ZIndex attribute of Canvas _z_\-order

**Self-Review Exercises 19.1** Fill in the blanks in each of the following statements:

a) A(n) is the parent element of a XAML file. b) A(n) is used to embed video and audio in a Silverlight application. c) Visual Basic’s class can be used to parse RSS in Silverlight. d) The event is triggered by clicking an element with the left mouse button. e) Animations are described using the XAML element. f) allows you to distribute Silverlight applications containing audio and video

for free. g) allows you to visually edit XAML. h) You can use an object’s attribute to specify the _z_\-order of elements. i) A MediaElement’s attribute determines whether the media will start playing

immediately after it has loaded. j) The Silverlight plug-in’s method retrieves an element of a specific name. k) In Silverlight 1.1, the attribute specifies the Class that contains the XAML

elements’ event handlers.

**19.2** State whether each of the following is _true_ or _false_. If _false_, explain why. a) The Silverlight browser plug-in runs on IE and Firefox on Windows XP and Vista, and

Safari and Firefox on Mac OS X. b) Silverlight applications can be embedded in an existing HTML file. c) Silverlight requires server-side software. d) You can program Silverlight event handlers in XAML. e) Silverlight 1.1 supports programming in C#, Visual Basic, and other .NET languages. f) Silverlight applications can run in full-screen mode. g) The BrowserHttpWebRequest object allows for cross-domain requests. h) A Silverlight application must have at least one Canvas element. i) There is no way to implement a timer in Silverlight 1.0. j) You can hide an element only by setting its Opacity to 0.

**Answers to Self-Review Exercises 19.1** a) Canvas. b) MediaElement. c) XmlReader. d) MouseLeftButtonDown. e) Storyboard. f) Sil- verlight Streaming. g) Expression Blend. h) ZIndex. i) AutoPlay. j) findName. k) x:Class.

**19.2** a) True. b) True. c) False. Silverlight applications can be served by any server, or run locally. d) False. XAML is used to describe the user interface.

Exercises **829**

e) True. f) True. g) False. The BrowserHttpWebRequest object allows for requests only to the Silverlight ap-

plication’s host domain. h) True. i) False. You can use a Storyboard as a timer. j) False. You can set the element’s Visibility to Collapsed.

**Exercises 19.3** Add mouse-over and mouse-down graphics for the controls in the Movie Viewer, to im- prove the feel of the user interface. To do this, add the MouseEnter, MouseLeave and MouseLeftBut-

tonUp events in the XAML and corresponding event handlers in the JavaScript code-behind. An example of how your solution may look is available at test.deitel.com/examples/iw3htp4/

silverlight/MovieViewer2/index.html.

**19.4** Enhance the book-cover viewer application so that when the user switches covers, the new image zooms in instead of instantly appearing. Do this by adding nextNextImage and prevPrevIm-

age elements that are initially hidden. An example of how your solution may look is available at test.deitel.com/examples/iw3htp4/silverlight/CoverViewer2/index.html.

**19.5** Create a Silverlight 1.1 Alpha Visual Basic application based on the book-cover viewer that plays an MP3 audio file using a MediaElement when the user clicks a corresponding Image, such as an album cover. An example of how your solution may look is available at test.deitel.com/

examples/iw3htp4/silverlight/AudioPlayer/index.html.

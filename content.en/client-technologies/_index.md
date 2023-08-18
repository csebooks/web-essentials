---
title: 'Rich Internet Application Client Technologies'
weight: 3
---

  

**PART**

_Rich Internet Application Client Technologies_

_The user should feel in control of the computer; not the other way around. This is achieved in ap- plications that embody three qualities: respon- siveness, permissiveness, and consistency._

—Inside Macintosh, Volume 1, Apple Computer, Inc., 1985

3  

16 Adobe® Flash® CS3

**O B J E C T I V E S** In this chapter you will learn:

■ Flash CS3 multimedia development.

■ To develop Flash movies.

■ Flash animation techniques.

■ ActionScript 3.0, Flash’s object-oriented programming language.

■ To create a preloading animation for a Flash movie.

■ To add sound to Flash movies.

■ To publish a Flash movie.

■ To create special effects with Flash.

■ To create a Splash Screen.

**_Science and technology and the various forms of art, all unite humanity in a single and interconnected system._ —Zhores Aleksandrovich Medvede**

**_All the world’s a stage, and all the men and women merely players; they have their exits and their entrances; and one man in his time plays many parts. . ._ —William Shakespeare**

**_Music has charms to soothe a savage breast, To soften rocks, or bend a knotted oak._ —William Congreve**

**_A flash and where previously the brain held a dead fact, the soul grasps a living truth! At moments we are all artists._ —Arnold Bennett**  

16.1 Introduction **637 O**

**u tl**

**in e**

**16.1 Introduction** Adobe **Flash CS3** (Creative Suite 3) is a commercial application that you can use to pro- duce interactive, animated **movies**. Flash can be used to create web-based banner adver- tisements, interactive websites, games and web-based applications with stunning graphics and multimedia effects. It provides tools for drawing graphics, generating animations, and adding sound and video. Flash movies can be embedded in web pages, distributed on CDs and DVDs as independent applications, or converted into stand-alone, executable pro- grams. Flash includes tools for coding in its scripting language—**ActionScript 3.0**—which is similar to JavaScript and enables interactive applications. A fully functional, 30-day trial version of Flash CS3 is available for download from:

www.adobe.com/products/flash/

To follow along with the examples in this chapter, please install this software before con- tinuing. Follow the on-screen instructions to install the trial version of the Flash software.

To play Flash movies, the **Flash Player plug-in** must be installed in your web browser. The most recent version of the plug-in (at the time of this writing) is version 9. You can download the latest version from:

www.adobe.com/go/getflashplayer

**16.1** Introduction **16.2** Flash Movie Development **16.3** Learning Flash with Hands-On Examples

**16.3.1** Creating a Shape with the Oval Tool **16.3.2** Adding Text to a Button **16.3.3** Converting a Shape into a Symbol **16.3.4** Editing Button Symbols **16.3.5** Adding Keyframes **16.3.6** Adding Sound to a Button **16.3.7** Verifying Changes with **Test Movie**

**16.3.8** Adding Layers to a Movie **16.3.9** Animating Text with Tweening **16.3.10** Adding a Text Field **16.3.11** Adding ActionScript

**16.4** Publishing Your Flash Movie **16.5** Creating Special Effects with Flash

**16.5.1** Importing and Manipulating Bitmaps **16.5.2** Creating an Advertisement Banner with Masking **16.5.3** Adding Online Help to Forms

**16.6** Creating a Website Splash Screen **16.7** ActionScript **16.8** Wrap-Up **16.9** Web Resources

Summary | Terminology | Self-Review Exercises | Answers to Self-Review Exercises | Exercises  

**638** Chapter 16 Adobe® Flash® CS3

According to Adobe’s statistics, approximately 98.7 percent of web users have Flash Player version 6 or greater installed, and 83.4 percent of web users have Flash Player ver- sion 9 installed.1 There are ways to detect whether a user has the appropriate plug-in to view Flash content. Adobe provides a tool called the Flash Player Detection Kit which con- tains files that work together to detect whether a suitable version of Adobe Flash Player is installed in a user’s web browser. This kit can be downloaded from:

www.adobe.com/products/flashplayer/download/detection\_kit/

This chapter introduces building Flash movies. You’ll create interactive buttons, add sound to movies, create special graphic effects and integrate ActionScript in movies.

**16.2 Flash Movie Development** Once Flash CS3 is installed, open the program. Flash’s **Welcome Screen** appears by de- fault. The **Welcome Screen** contains options such as **Open a Recent Item**, **Create New** and **Create from Template**. The bottom of the page contains links to useful help topics and tu- torials. \[_Note:_ For additional help, refer to Flash’s **Help** menu.\]

To create a blank Flash document, click **Flash File (ActionScript 3.0)** under the **Create New** heading. Flash opens a new file called **Untitled-1** in the Flash development environ- ment (Fig. 16.1).

At the center of the development environment is the movie **stage**—the white area in which you place graphic elements during movie development. Above the stage is the **time- line**, which represents the time period over which a movie runs. The timeline is divided into increments called **frames**, represented by gray and white rectangles. Each frame depicts a moment in time during the movie, into which you can insert movie elements. The **playhead** indicates the current frame.

**Common Programming Error 16.1** _Elements placed off stage can still appear if the user changes the aspect ratio of the movie. If an element should not be visible, use an alpha of 0% to hide the element._ 16.1

The development environment contains several windows that provide options and tools for creating Flash movies. Many of these tools are located in the **Tools bar**, the ver- tical window located at the left side of the development environment. The **Tools** bar (Fig. 16.2) is divided into multiple sections, each containing tools and functions that help you create Flash movies. The tools near the top of the **Tools** bar select, add and remove graphics from Flash movies. The **Hand** and **Zoom** tools allow you to pan and zoom in the stage. Another section of tools provides colors for shapes, lines and filled areas. The last section contains settings for the **active tool** (i.e., the tool that is highlighted and in use). You can make a tool behave differently by selecting a new mode from the options section of the **Tools** bar.

Application windows called **panels** organize frequently used movie options. Panel options modify the size, shape, color, alignment and effects associated with a movie’s graphic elements. By default, panels line the right and bottom edges of the window. Panels

1\. Flash Player statistics from Adobe’s Flash Player Penetration Survey website at www.adobe.com/ products/player\_census/flashplayer/version\_penetration.html.  

16.2 Flash Movie Development **639**

**Fig. 16.1** | Flash CS3 development environment.

**Fig. 16.2** | CS3 **Tools** bar.

TimelineTools Stage Panel windowsMenu bar Frames

**Properties** Panel/ **Property Inspector**

Playhead

**Selection Tool**

**Free Transform Tool**

**Pen Tool**

**Line Tool**

**Pencil Tool**

**Ink bottle Tool**

**Stroke color**

**Hand Tool**

**Subselection Tool**

**Lasso Tool**

**Text Tool Rectangle Tool**

**Brush Tool**

**Paint bucket Tool**

**Eraser Tool**

**Zoom Tool**

**No color Fill color**

**Tool options**

**Eyedropper Tool**

**Black and white Snap to Objects Swap Colors**  

**640** Chapter 16 Adobe® Flash® CS3

may be placed anywhere in the development environment by dragging the tab at the left edge of their bars.

The context-sensitive **Properties** panel (frequently referred to as the **Properties** window) is located at the bottom of the screen by default. This panel displays various information about the currently selected object. It is Flash’s most useful tool for viewing and altering an object’s properties.

The **Color**, **Swatches**, **Properties**, **Filters** and **Parameters** panels also appear in the development environment by default. You can access different panels by selecting them from the **Window** menu. To save and manage customized panel layouts, select **Window > Workspace**, then use the **Save Current…** and **Manage…** options to save a layout or load an existing layout, respectively.

**16.3 Learning Flash with Hands-On Examples** Now you’ll create several complete Flash movies. The first example demonstrates how to create an interactive, animated button. ActionScript code will produce a random text string each time the button is clicked. To begin, create a new Flash movie. First, select **File > New**. In the **New Document** dialog (Fig. 16.3), select **Flash File (ActionScript 3.0)** un- der the **General** tab and click **OK**. Next, choose **File > Save As…** and save the movie as Ceo- Assistant.fla. The **.fla** file extension is a Flash-specific extension for editable movies.

**Good Programming Practice 16.1** _Save each project with a meaningful name in its own folder. Creating a new folder for each movie helps keep projects organized._ 16.1

Right click the stage to open a menu containing different movie options. Select **Document Properties…** to display the **Document Properties** dialog (Fig. 16.4). This dialog can also be accessed by selecting **Document…** from the **Modify** menu. Settings such as the **Frame rate**, **Dimensions** and **Background color** are configured in this dialog.

**Fig. 16.3 | New Document** dialog.  

16.3 Learning Flash with Hands-On Examples **641**

The **Frame rate** sets the speed at which movie frames display. A higher frame rate causes more frames to be displayed in a given unit of time (the standard measurement is seconds), thus creating a faster movie. The frame rate for Flash movies on the web is gen- erally between 12 and 60 frames per second (**fps**). Flash’s default frame rate is 12 fps. For this example, set the **Frame Rate** to 10 frames per second.

**Performance Tip 16.1** _Higher frame rates increase the amount of information to process, and thus increase the movie’s processor usage and file size. Be especially aware of file sizes when catering to low bandwidth web users._ 16.1

The background color determines the color of the stage. Click the background-color box (called a **swatch**) to select the background color. A new panel opens, presenting a web- safe palette. Web-safe palettes and color selection are discussed in detail in Chapter 3. Note that the mouse pointer changes into an eyedropper, which indicates that you may select a color. Choose a light blue color (Fig. 16.5).

The box in the upper-left corner of the dialog displays the new background color. The **hexadecimal notation** for the selected color appears to the right of this box. The hexadec- imal notation is the color code that a web browser uses to render color. Hexadecimal nota- tion is discussed in detail in Appendix E, Number Systems.

**Fig. 16.4** | **Document Properties** dialog.

Right click menu

**Background color**

**Frame rate**

**Dimensions**

**Fig. 16.5** | Selecting a background color.

New background color Hexadecimal color notation  

**642** Chapter 16 Adobe® Flash® CS3

**Dimensions** define the size of the movie as it displays on the screen. For this example, set the movie **width** to **200** pixels and the movie **height** to **180** pixels. Click **OK** to apply the changes in the movie settings.

**Software Engineering Observation 16.1** _A movie’s contents are not resized when you change the size of the movie stage._ 16.1

With the new dimensions, the stage appears smaller. Select the **Zoom Tool** from the toolbox (Fig. 16.2) and click the stage once to enlarge it to 200 percent of its size (i.e., zoom in). The current zoom percentage appears in the upper-right above the stage editing area. Editing a movie with small dimensions is easier when the stage is enlarged. Press the _Alt_ key while clicking the zoom tool to reduce the size of the work area (i.e., zoom out). Select the **Hand Tool** from the toolbox, and drag the stage to the center of the editing area. The hand tool may be accessed at any time by holding down the _spacebar_ key.

**16.3.1 Creating a Shape with the Oval Tool** Flash provides several editing tools and options for creating graphics. Flash creates shapes using **vectors**—mathematical equations that Flash uses to define size, shape and color. Some other graphics applications create raster graphics or bitmapped graphics. When vec- tor graphics are saved, they are stored using equations. **Raster graphics** are defined by areas of colored **pixels**—the unit of measurement for most computer monitors. Raster graphics typically have larger file sizes because the computer saves the information for every pixel. Vector and raster graphics also differ in their ability to be resized. Vector graphics can be resized without losing clarity, whereas raster graphics lose clarity as they are enlarged or reduced.

We will now create an interactive button out of a circular shape. You can create shapes by dragging with the shape tools. Select the Oval tool from the toolbox. If the Oval tool is not already displayed, click and hold the Rectangle/Oval tool to display the list of rect- angle and oval tools. We use this tool to specify the button area. Every shape has a **Stroke color** and a **Fill color**. The stroke color is the color of a shape’s outline, and the fill color is the color that fills the shape. Click the swatches in the **Colors** section of the toolbox (Fig. 16.6) to set the fill color to red and the stroke color to black. Select the colors from the web-safe palette or enter their hexadecimal values.

Clicking the **Black and white** button resets the stroke color to black and the fill color to white. Selecting the **Swap colors** option switches the stroke and fill colors. A shape can be created without a fill or stroke color by selecting the **No color** option ( ) when you select either the stroke or fill swatch.

Create the oval anywhere on the stage by dragging with the Oval tool while pressing the _Shift_ key. The _Shift_ key constrains the oval’s proportions to have equal height and

**Fig. 16.6** | Setting the fill and stroke colors.

Stroke color

Black and white Fill color Swap colors  

16.3 Learning Flash with Hands-On Examples **643**

width (i.e., a circle). The same technique creates a square with the Rectangle tool or draws a straight line with the Pencil tool. Drag the mouse until the circle is approximately the size of a dime, then release the mouse button.

After you draw the oval, a dot appears in frame 1, the first frame of the timeline for **Layer 1**. This dot signifies a **keyframe** (Fig. 16.7), which indicates a point of change in a timeline. Whenever you draw a shape in an empty frame, Flash creates a keyframe.

The shape’s fill and stroke may be edited individually. Click the red area with the **Selection** tool (black arrow) to select the circle fill. A grid of white dots appears over an object when it is selected (Fig. 16.8). Click the black stroke around the circle while pressing the _Shift_ key to add to this selection. You can also make multiple selections by dragging with the selection tool to draw a selection box around specific items.

A shape’s size can be modified with the **Properties** panel when the shape is selected (Fig. 16.9). If the panel is not open, open it by selecting **Properties** from the **Window** menu or pressing _<Ctrl>-F3_.

Set the width and height of the circle by typing **30** into the **W:** text field and **30** into the **H:** text field. Entering an equal width and height maintains a **constrained aspect ratio** while changing the circle’s size. A constrained aspect ratio maintains an object’s propor- tions as it is resized. Press _Enter_ to apply these values.

**Fig. 16.7** | Keyframe added to the timeline.

**Fig. 16.8** | Making multiple selections with the Selection tool.

Keyframe  

**644** Chapter 16 Adobe® Flash® CS3

The next step is to modify the shape’s color. We will apply a **gradient fill**—a gradual progression of color that fills the shape. Open the **Swatches** panel (Fig. 16.10), either by selecting **Swatches** from the **Window** menu or by pressing _<Ctrl>-F9_. The **Swatches** panel provides four **radial gradients** and three **linear gradients**, although you also can create and edit gradients with the **Color** panel.

Click outside the circle with the Selection tool to deselect the circle. Now, select only the red fill with the Selection tool. Change the fill color by clicking the red radial gradient fill in the **Swatches** panel. The gradient fills are located at the bottom of the **Swatches** panel (Fig. 16.10). The circle should now have a red radial gradient fill with a black stroke surrounding it.

**16.3.2 Adding Text to a Button** Button titles communicate a button’s function to the user. The easiest way to create a title is with the **Text** tool. Create a button title by selecting the Text tool and clicking the center of the button. Next, type GO in capital letters. Highlight the text with the Text tool. Once text is selected, you can change the font, text size and font color with the **Properties** win- dow (Fig. 16.11). Select a sans-serif font, such as **Arial** or **Verdana**, from the font drop- down list. Set the font size to **14** pt either by typing the size into the font size field or by pressing the arrow button next to it, revealing the **size selection slider**—a vertical slider that, when moved, changes the font size. Set the font weight to bold by clicking the bold

**Fig. 16.9** | Modifying the size of a shape with the **Properties window.**

**Fig. 16.10** | Choosing a gradient fill.

Stroke and fill color

Selection location

Stroke style

Selection width and height

Stroke width

Gradient fills

Red radial gradient fill  

16.3 Learning Flash with Hands-On Examples **645**

button (**B**). Finally, change the font color by clicking the text color swatch and selecting white from the palette.

**Look-and-Feel Observation 16.1** _Sans-serif fonts, such as Arial, Helvetica and Verdana, are easier to read on a computer monitor, and therefore ensure better usability._ 16.1

If the text does not appear in the correct location, drag it to the center of the button with the Selection tool. The button is almost complete and should look similar to Fig. 16.12.

**16.3.3 Converting a Shape into a Symbol** A Flash movie consists of **scenes** and **symbols**. Each scene contains all graphics and sym- bols. The parent movie may contain several symbols that are reusable movie elements, such as **graphics**, **buttons** and **movie clips**. A scene timeline can contain numerous sym- bols, each with its own timeline and properties. A scene may have several **instances** of any given symbol (i.e., the same symbol can appear multiple times in one scene). You can edit symbols independently of the scene by using the symbol’s **editing stage**. The editing stage is separate from the scene stage and contains only one symbol.

**Good Programming Practice 16.2** _Reusing symbols can drastically reduce file size, thereby allowing faster downloads._ 16.2

To make our button interactive, we must first convert the button into a button symbol. The button consists of distinct text, color fill and stroke elements on the parent

**Fig. 16.11** | Setting the font face, size, weight and color with the **Properties window**.

Font face Font size

Character spacing Character positionLinked URL

Text color Bold Italic Text alignment

**Fig. 16.12** | Adding text to the button.  

**646** Chapter 16 Adobe® Flash® CS3

stage. These items are combined and treated as one object when the button is converted into a symbol. Use the Selection tool to drag a **selection box** around the button, selecting the button fill, the button stroke and the text all at one time (Fig. 16.13).

Now, select **Convert to Symbol…** from the **Modify** menu or use the shortcut _F8_ on the keyboard. This opens the **Convert to Symbol** dialog, in which you can set the properties of a new symbol (Fig. 16.14).

Every symbol in a Flash movie must have a unique name. It is a good idea to name symbols by their contents or function, because this makes them easier to identify and reuse. Enter the name **go button** into the **Name** field of the **Convert to Symbol** dialog. The **Behavior** option determines the symbol’s function in the movie.

You can create three different types of symbols—movie clips, buttons and graphics. A **movie clip symbol**’s behavior is similar to that of a scene and thus it is ideal for recurring animations. **Graphic symbols** are ideal for static images and basic animations. **Button symbols** are objects that perform button actions, such as **rollovers** and hyperlinking. A rollover is an action that changes the appearance of a button when the mouse passes over it. For this example, select **Button** as the type of symbol and click **OK**. The button should now be surrounded by a blue box with crosshairs in the upper-left corner, indicating that the button is a symbol. Also, in the **Properties** window panel, name this instance of the **go button** symbol **goButton** in the field containing **<Instance Name>**. Use the selection tool to drag the button to the lower-right corner of the stage.

The **Library** panel (Fig. 16.15) stores every symbol present in a movie and is accessed through the **Window** menu or by the shortcuts _<Ctrl>-L_ or _F11_. Multiple instances of a symbol can be placed in a movie by dragging and dropping the symbol from the **Library** panel onto the stage.

The **Movie Explorer** displays the movie structure and is accessed by selecting **Movie Explorer** from the **Window** menu or by pressing _<Alt>-F3_ (Fig. 16.16). The **Movie Explorer** panel illustrates the relationship between the current scene (**Scene 1**) and its symbols.

**Fig. 16.13** | Selecting an object with the selection tool.

**Fig. 16.14** | Creating a new symbol with the **Convert to Symbol** dialog.  

16.3 Learning Flash with Hands-On Examples **647**

**16.3.4 Editing Button Symbols** The next step in this example is to make the button symbol interactive. The different com- ponents of a button symbol, such as its text, color fill and stroke, may be edited in the sym- bol’s editing stage, which you can access by double clicking the icon next to the symbol in the **Library**. A button symbol’s timeline contains four frames, one for each of the button states (up, over and down) and one for the hit area.

The **up state** (indicated by the **Up** frame on screen) is the default state before the user presses the button or rolls over it with the mouse. Control shifts to the **over state** (i.e., the **Over** frame) when the user rolls over the button with the mouse cursor. The button’s **down state** (i.e., the **Down** frame) plays when a user presses a button. You can create interactive, user-responsive buttons by customizing the appearance of a button in each of these states. Graphic elements in the **hit state** (i.e., the **Hit** frame) are not visible to a viewer of the movie; they exist simply to define the active area of the button (i.e., the area that can be clicked). The hit state will be discussed further in Section 16.6.

By default, buttons have only the up state activated when they are created. You may activate other states by adding keyframes to the other three frames. Keyframes for a button, discussed in the next section, determine how a button reacts when it is rolled over or clicked with the mouse.

**Fig. 16.15** | **Library** panel.

**Fig. 16.16** | **Movie Explorer** for CeoAssistant.fla.

Symbol list

Delete symbolCreate new symbol

Symbol properties

New symbol folder  

**648** Chapter 16 Adobe® Flash® CS3

**16.3.5 Adding Keyframes** Keyframes are points of change in a Flash movie and appear in the timeline with a dot. By adding keyframes to a button symbol’s timeline, you can control how the button reacts to user interactions. The following step shows how to create a button rollover effect, which is accomplished by inserting a keyframe in the button’s **Over** frame, then changing the but- ton’s appearance in that frame. Right click the **Over** frame and select **Insert Keyframe** from the resulting menu or press _F6_ (Fig. 16.18).

**Fig. 16.17** | Modifying button states with a button’s editing stage.

**Fig. 16.18** | Inserting a keyframe.

Button states

Active symbol

Return to main scene

KeyframesCurrent frame

Zoom percentage

Main scene

**Edit Symbols**

Frame options

**Insert Keyframe**

Selected **Over** frame  

16.3 Learning Flash with Hands-On Examples **649**

Select the **Over** frame and click outside the button area with the selection tool to dese- lect the button’s components. Change the color of the button in the **Over** state from red gradient fill to green gradient fill by selecting only the fill portion of the button with the Selection tool. Select the green gradient fill in the **Swatches** panel to change the color of the button in the **Over** state. Changing the color of the button in the over state does not affect the color of the button in the up state. Now, when the user moves the cursor over the button (in the up state) the button animation is replaced by the animation in the **Over** state. Here, we change only the button’s color, but we could have created an entirely new animation in the **Over** state. The button will now change from red to green when the user rolls over the button with the mouse. The button will return to red when the mouse is no longer positioned over the button.

**16.3.6 Adding Sound to a Button** The next step is to add a sound effect that plays when a user clicks the button. Flash im- ports sounds in the WAV (Windows), AIFF (Macintosh) or MP3 formats. Several button sounds are available free for download from sites such as Flashkit (www.flashkit.com) and Muinar (www.sounds.muinar.com). For this example, download the **cash register** sound in WAV format from

www.flashkit.com/soundfx/Industrial\_Commercial/Cash

Click the **Download** link to download the sound from this site. This link opens a new web page from which the user chooses the sound format. Choose MP3 as the file format by clicking the **mp3** link. Save the file to the same folder as CeoAssistant.fla. Extract the sound file and save it in the same folder as CeoAssistant.fla.

Once the sound file is extracted, it can be imported into Flash. Import the sound into the **Library** by choosing **Import to Library…** from the **Import** submenu of the **File** menu. Select **All Formats** in the **Files of type** field of the **Import** dialog so that all available files are displayed. Select the sound file and press **Open**. This imports the sound file and places it in the movie’s **Library**, making it available to use in the movie.

You can add sound to a movie by placing the sound clip in a keyframe or over a series of frames. For this example, we add the sound to the button’s down state so that the sound plays when the user presses the button. Select the button’s **Down** frame and press _F6_ to add a keyframe.

Add the sound to the **Down** keyframe by dragging it from the **Library** to the stage. Open the **Properties** window (Fig. 16.19) and select the **Down** frame in the timeline to define the sound’s properties in the movie. To ensure the desired sound has been added to the keyframe, choose the sound filename from the **Sound** drop-down list. This list contains all the sounds that have been added to the movie. Make sure the **Sync** field is set to **Event** so that the sound plays when the user clicks the button. If the **Down** frame has a blue wave or line through it, the sound effect has been added to the button.

Next, optimize the sound for the web. Double click the sound icon in the **Library** panel to open the **Sound Properties** dialog (Fig. 16.20). The settings in this dialog change the way that the sound is saved in the final movie. Different settings are optimal for dif- ferent sounds and different audiences. For this example, set the **Compression** type to **MP3**, which reduces file size. Ensure that **Use imported MP3 quality** is selected. If the sound clip  

**650** Chapter 16 Adobe® Flash® CS3

is long, or if the source MP3 was encoded with a high bitrate, you may want to deselect this and specify your own bitrate to save space.

The sound clip is now optimized for use on the web. Return to the scene by pressing the **Edit Scene** button ( ) and selecting **Scene 1** or by clicking **Scene 1** at the top of the movie window.

**16.3.7 Verifying Changes with Test Movie**

It is a good idea to ensure that movie components function correctly before proceeding further with development. Movies can be viewed in their **published state** with the Flash Player. The published state of a movie is how it would appear if viewed over the web or with the Flash Player. Published Flash movies have the Shockwave Flash extension **.swf**

(pronounced “swiff”). SWF files can be viewed but not edited.

**Fig. 16.19** | Adding sound to a button.

**Fig. 16.20** | Optimizing sound with the **Sound Properties** dialog.

**Sound**

**Sync**

Line indicates that a sound was added to the **Down** frame

Sound name

**Compression**

Sound clip size and compression  

16.3 Learning Flash with Hands-On Examples **651**

Select **Test Movie** from the **Control** menu (or press _<Ctrl>-Enter_) to **export** the movie into the Flash Player. A window opens with the movie in its published state. Move the cursor over the **GO** button to view the color change (Fig. 16.21), then click the button to play the sound. Close the test window to return to the stage. If the button’s color does not change, return to the button’s editing stage and check that you followed the steps correctly.

**16.3.8 Adding Layers to a Movie** The next step in this example is to create the movie’s title animation. It’s a good idea for you to create a new **layer** for new movie items. A movie can be composed of many layers, each having its own attributes and effects. Layers organize movie elements so that they can be animated and edited separately, making the composition of complex movies easier. Graphics in higher layers appear over the graphics in lower layers.

Before creating a new title layer, double click the text **Layer 1** in the timeline. Rename the layer by entering the text Button into the name field (Fig. 16.22).

Create a new layer for the title animation by clicking the Insert a new layer button or by selecting **Layer** from the **Timeline** submenu of the **Insert** menu. The Insert a new layer button places a layer named **Layer 2** above the selected layer. Change the name of **Layer 2** to **Title**. Activate the new layer by clicking its name.

**Good Programming Practice 16.3** _Always give movie layers descriptive names. Descriptive names are especially helpful when work- ing with many layers._ 16.3

Select the Text tool to create the title text. Click with the Text tool in the center of the stage toward the top. Use the **Property** window to set the font to **Arial**, the text color to navy blue (hexadecimal value #000099) and the font size to **20** pt (Fig. 16.23). Set the text alignment to center by clicking the center justify button.

Type the title **CEO Assistant 1.0** (Fig. 16.24), then click the selection tool. A blue box appears around the text, indicating that it is a **grouped object**. This text is a grouped object because each letter is a part of a text string and cannot be edited independently. Text can be broken apart for color editing, shape modification or animation (shown in a later example). Once text has been broken apart, it may not be edited with the Text tool.

**Fig. 16.21** | **GO** button in its up and over states.

Over stateUp state

**Fig. 16.22** | Renaming a layer.

Rename a layer by double clicking its name

Insert a new layer Delete layer  

**652** Chapter 16 Adobe® Flash® CS3

**16.3.9 Animating Text with Tweening** Animations in Flash are created by inserting keyframes into the timeline. Each keyframe represents a significant change in the position or appearance of the animated object.

You may use several methods to animate objects in Flash. One is to create a series of successive keyframes in the timeline. Modifying the animated object in each keyframe cre- ates an animation as the movie plays. Another method is to insert a keyframe later in the timeline representing the final appearance and position of the object, then create a tween between the two keyframes. **Tweening** is an automated process in which Flash creates the intermediate steps of the animation between two keyframes.

Flash provides two tweening methods. **Shape tweening** morphs an object from one shape to another. For instance, the word “star” could morph into the shape of a star. Shape tweening can be applied only to ungrouped objects, not symbols or grouped objects. Be sure to break apart text before attempting to create a shape tween. **Motion tweening** moves objects around the stage. Motion tweening can be applied to symbols or grouped objects.

You can only have one symbol per layer if you intend to tween the symbol. At this point in the development of the example movie, only frame 1 is occupied in each layer. Keyframes must be designated in the timeline before adding the motion tween. Click frame 15 in the **Title** layer and press _F6_ to add a new keyframe. All the intermediate frames in the timeline should turn gray, indicating that they are active (Fig. 16.25). Until the motion tween is added, each active frame contains the same image as the first frame.

The button disappears from the movie after the first frame because only the first frame is active in the button layer. Before the movie is completed, we’ll move the button to frame 15 of its layer so that the button appears once the animation stops.

We now create a motion tween by modifying the position of the title text. Select frame 1 of the **Title** layer and select the title text with the Selection tool. Drag the title text directly above the stage. When the motion tween is added, the title will move onto the stage. Add

**Fig. 16.23** | Setting text alignment with the **Properties window**.

**Fig. 16.24** | Creating a title with the Text tool.

Left justify Center justify Right justify Full justify

Alias text  

16.3 Learning Flash with Hands-On Examples **653**

the motion tween by right clicking frame 1 in the **Title** layer. Then select **Create Motion Tween** from the **Insert > Timeline** menu. Tweens also can be added using the **Tween type** drop down menu in the **Properties** window. Frames 2–14 should turn light blue, with an arrow pointing from the keyframe in frame 1 to the keyframe in frame 15 (Fig. 16.26).

Test the movie again with the Flash Player by pressing _<Ctrl>-Enter_ to view the new animation. Note that the animation continues to loop—all Flash movies loop by default. Adding the ActionScript function **stop** to the last frame in the movie stops the movie from looping. For this example, click frame 15 of the **Title** layer, and open the **Actions** panel by selecting **Window > Actions** or by pressing _F9_ (Fig. 16.27). The **Actions** panel is used to add

**Fig. 16.25** | Adding a keyframe to create an animation.

**Fig. 16.26** | Creating a motion tween.

**Fig. 16.27** | Adding ActionScript to a frame with the **Actions** panel.

Motion tween

Script navigator

Add script item**Actions** toolbox

stop action

Debug optionsShow code hintsCheck syntax

Action applied to frame  

**654** Chapter 16 Adobe® Flash® CS3

actions (i.e., scripted behaviors) to symbols and frames. Here, add stop(); so that the movie does not loop back to the first frame.

Minimize the **Actions** panel by clicking the down arrow in its title bar. The small letter **a** in frame 15 of the **Title** layer indicates the new action. Test the movie again in Flash Player. Now, the animation should play only once.

The next step is to move the button to frame 15 so that it appears only at the end of the movie. Add a keyframe to frame 15 of the **Button** layer. A copy of the button should appear in the new keyframe. Select the button in the first frame and delete it by pressing the _Delete_ key. The button will now appear only in the keyframe at the end of the movie.

**16.3.10 Adding a Text Field** The final component of our movie is a **text field**, which contains a string of text that changes every time the user presses the button. An instance name is given to the text field so that ActionScript added to the button can control its contents.

Create a layer named **Advice** for the new text field, and add a keyframe to frame 15 of the **Advice** layer. Select the Text tool and create the text field by dragging with the mouse in the stage (Fig. 16.28). Place the text field directly below the title. Set the text font to **Courier New**, **12 pt** and the style to bold in the **Properties** window**.** You can alter the size of the text field by dragging the **anchor** that appears in its upper-right corner.

You’ll now assign an instance name to the text field. Select the text field and open the **Properties** window (Fig. 16.29). The **Properties** window contains several options for mod- ifying text fields. The top-left field contains the different types of text fields. **Static Text**, the default setting for this panel, creates text that does not change. The second option,

**Fig. 16.28** | Creating a text field.

**Fig. 16.29** | Creating a dynamic text field with the **Properties** window.

Text type

Line typeVariable name  

16.3 Learning Flash with Hands-On Examples **655**

**Dynamic Text**, creates text that can be changed or determined by outside variables through ActionScript. When you select this text type, new options appear below this field. The **Line type** drop-down list specifies the text field size as either a single line or multiple lines of text. The **Instance Name** field allows you to give the text field an instance name by which it can be referenced in script. For example, if the text field instance name is newText, you could write a script setting newText.text equal to a string or a function output. The third text type, **Input Text**, creates a text field into which the viewers of the movie can input their own text. For this example, select **Dynamic Text** as the text type. Set the line type to **Single Line** and enter advice as the instance name. This instance name will be used in Action- Script later in this example.

**16.3.11 Adding ActionScript** All the movie objects are now in place, so CEO Assistant 1.0 is almost complete. The final step is to add ActionScript to the button, enabling the script to change the contents of the text field every time a user clicks the button. Our script calls a built-in Flash function to generate a random number. This random number corresponds to a message in a list of pos- sible messages to display. \[_Note:_ The ActionScript in this chapter has been formatted to conform with the code-layout conventions of this book. The Flash application may pro- duce code that is formatted differently.\]

Select frame 15 of the **Button** layer and open the **Actions** panel. We want the action to occur when the user clicks the button. To achieve this, insert the statement:

goButton.addEventListener( MouseEvent.MOUSE\_DOWN, goFunction );

This statement uses the button object’s instance name (**goButton**) to call the **addEventLis- tener** function, which registers an event handler (goFunction in this example) that will be called when the event takes place (i.e., when you click the button). The first argument, MouseEvent.MOUSE\_DOWN, specifies that an action is performed when the user presses the button with the mouse.

The next step is to add the function that handles this event. Create a new function named goFunction by using the code

function goFunction( event : MouseEvent ) : void { } // end function goFunction

The function’s one parameter is a MouseEvent, implying that the function has to be pro- vided with a mouse action to be accessed. The function does not return anything, hence the void return value. Inside this function, add the following statement:

var randomNumber : int = Math.floor( ( Math.random() \* 5 ) );

which creates an integer variable called randomNumber and assigns it a random value. For this example, we use the Math.random function to choose a random number from 0 to 1. Math.random returns a random floating-point number from 0.0 up to, but not including, 1.0. Then, it is scaled accordingly, depending on what the range should be. Since we want all the numbers between 0 and 4, inclusive, the value returned by the Math.random should be multiplied by 5 to produce a number in the range 0.0 up to, but not including, 5.0.  

**656** Chapter 16 Adobe® Flash® CS3

Finally, this new number should be rounded down to the largest integer smaller than itself, using the Math.floor function.

**Error-Prevention Tip 16.1** _ActionScript is case sensitive. Be aware of the case when entering arguments or variable names._16.1

The value of randomNumber determines the text string that appears in the text field. A switch statement sets the text field’s value based on the value of randomNumber. \[_Note:_ For more on switch statements, refer to Chapter 8.\] On a new line in the goFunction func- tion, insert the following switch statement:

switch ( randomNumber ) {

case 0: advice.text = "Hire Someone!"; break;

case 1: advice.text = "Buy a Yacht!"; break;

case 2: advice.text = "Buy stock!"; break;

case 3: advice.text = "Go Golfing!"; break;

case 4: advice.text = "Hold a meeting!"; break;

} // end switch

This statement displays different text in the advice text field based on the value of the vari- able randomNumber. The text field’s text property specifies the text to display. If you feel ambitious, increase the number of advice statements by producing a larger range of ran- dom values and adding more cases to the switch statement. Minimize the **Actions** panel to continue.

Congratulations! You have now completed building CEO Assistant 1.0. Test the movie by pressing _<Ctrl>_\-_Enter_ and clicking the **GO** button. After testing the movie with the Flash Player, return to the main window and save the file.

**16.4 Publishing Your Flash Movie** Flash movies must be **published** for users to view them outside the Flash CS3 environment and Flash Player. This section discusses the more common methods of publishing Flash movies. For this example, we want to publish in two formats, Flash and **Windows Projec- tor**, which creates a standard Windows-executable file that works even if the user hasn’t installed Flash. Select **Publish Settings…** from the **File** menu to open the **Publish Settings** dialog.

Select the **Flash**, **HTML** and **Windows Projector** checkboxes and uncheck all the others. Then click the **Flash** tab at the top of the dialog. This section of the dialog allows you to choose the Flash settings. Flash movies may be published in an older Flash version if you  

16.5 Creating Special Effects with Flash **657**

wish to support older Flash Players. Note that ActionScript 3.0 is not supported by older players, so choose a version with care. Publish the movie by clicking **Publish** in the **Publish Settings** dialog or by selecting **Publish** from the **File** menu. After you’ve published the movie, the directory in which you saved the movie will have several new files (Fig. 16.30). If you wish to place your movie on a website, be sure to copy the HTML, JavaScript and SWF files to your server.

**Good Programming Practice 16.4** _It is not necessary to transfer the .fla version of your Flash movie to a web server unless you want other users to be able to download the editable version of the movie._ 16.4

As we can see in the Ceo Assistant 1.0 example, Flash is a feature-rich program. We have only begun to use Flash to its full potential. ActionScript can create sophisticated pro- grams and interactive movies. It also enables Flash to interact with ASP.NET (Chapter 25), PHP (Chapter 23), and JavaScript (Chapters 6–11), making it a program that integrates smoothly into a web environment.

**16.5 Creating Special Effects with Flash** The following sections introduce several Flash special effects. The preceding example fa- miliarized you with basic movie development. The next sections cover many additional topics, from importing bitmaps to creating splash screens that display before a web page loads.

**16.5.1 Importing and Manipulating Bitmaps** Some of the examples in this chapter require importing bitmapped images and other me- dia into a Flash movie. The importing process is similar for all types of media, including images, sound and video. The following example shows how to import an image into a Flash movie.

Begin by creating a new Flash document. The image we are going to import is located in the Chapter 16 examples folder. Select **File > Import > Import to Stage…** (or press _<Ctrl>_\- _R_) to display the **Import** dialog. Browse to the folder on your system containing this chapter’s examples and open the folder labeled images. Select bug.bmp and click **OK** to continue. A bug image should appear on the stage. The **Library** panel stores imported images. You can convert imported images into editable shapes by selecting the image and pressing _<Ctrl>-B_ or by choosing **Break Apart** from the **Modify** menu. Once an imported image is broken apart, it may be shape tweened or edited with **editing tools**, such as the

**Fig. 16.30** | Published Flash files.

Windows Executable (.exe) Flash (.fla)

HTML document to view movie in browser Flash Player Movie (.swf)

JavaScript file for browser and Flash detection (.js)  

**658** Chapter 16 Adobe® Flash® CS3

Lasso, Paint bucket, Eraser and Paintbrush. The editing tools are found in the toolbox and apply changes to a shape.

Dragging with the **Lasso tool** selects areas of shapes. The color of a selected area may be changed or the selected area may be moved. Click and drag with the Lasso tool to draw the boundaries of the selection. As with the button in the last example, when you select a shape area, a mesh of white dots covers the selection. Once an area is selected, you may change its color by selecting a new fill color with the fill swatch or by clicking the selection with the Paint bucket tool. The Lasso tool has different options (located in the **Options** section of the toolbox) including **Magic wand** and **Polygon mode**. The Magic wand option changes the Lasso tool into the Magic wand tool, which selects areas of similar colors. The polygonal lasso selects straight-edged areas.

The **Eraser tool** removes shape areas when you click and drag the tool across an area. You can change the eraser size using the tool options. Other options include settings that make the tool erase only fills or strokes.

The **Brush tool** applies color in the same way that the eraser removes color. The paint- brush color is selected with the fill swatch. The paintbrush tool options include a **Brush mode** option. These modes are **Paint behind**, which sets the tool to paint only in areas with no color information; **Paint selection**, which paints only areas that have been selected; and **Paint inside**, which paints inside a line boundary.

Each of these tools can create original graphics. Experiment with the different tools to change the shape and color of the imported bug graphic.

**Portability Tip 16.1** _When building Flash movies, use the smallest possible file size and web-safe colors to ensure that most people can view the movie regardless of bandwidth, processor speed or monitor resolution._ 16.1

**16.5.2 Creating an Advertisement Banner with Masking Masking** hides portions of layers. A **masking layer** hides objects in the layers beneath it, revealing only the areas that can be seen through the shape of the mask. Items drawn on a masking layer define the mask’s shape and cannot be seen in the final movie. The next ex- ample, which builds a website banner, shows how to use masking frames to add animation and color effects to text.

Create a new Flash document and set the size of the stage to **470** pixels wide by **60** pixels high. Create three layers named **top**, **middle** and **bottom** according to their positions in the layer hierarchy. These names help track the masked layer and the visible layers. The **top** layer contains the mask, the **middle** layer becomes the masked animation and the **bottom** layer contains an imported bitmapped logo. Import the graphic bug\_apple.bmp

(from the images folder in this chapter’s examples folder) into the first frame of the **top** layer, using the method described in the preceding section. This image will appear too large to fit in the stage area. Select the image with the selection tool and align it with the upper-left corner of the stage. Then select the **Free transform** tool in the toolbox (Fig. 16.31).

The Free transform tool allows us to resize an image. When an object is selected with this tool, anchors appear around its corners and sides. Click and drag an anchor to resize the image in any direction. Holding the _Shift_ key while dragging a corner anchor ensures  

16.5 Creating Special Effects with Flash **659**

that the image maintains the original height and width ratio. Hold down the _Shift_ key while dragging the lower-right anchor upward until the image fits on the stage.

Use the text tool to add text to frame 1 of the **top** layer. Use **Verdana**, **28** pt bold, as the font. Select a blue text color, and make sure that **Static Text** is selected in the **Properties** window. Type the banner text “Deitel and Associates”, making sure that the text fits inside the stage area, and use the Selection tool to position the text next to the image. This text becomes the object that masks an animation.

We must convert the text into a shape before using it as a mask. Click the text field with the Selection tool to ensure that it is active and select **Break Apart** twice from the **Modify** menu. Breaking the text apart once converts each letter into its own text field. Breaking it apart again converts the letters into shapes that cannot be edited with the text tool, but can be manipulated as regular graphics.

Copy the contents of the **top** layer to the **bottom** layer before creating the mask, so that the text remains visible when the mask is added. Right click frame 1 of the **top** layer, and select **Copy Frames** from the resulting menu. Paste the contents of the **top** layer into frame 1 of the **bottom** layer by right clicking frame 1 of the **bottom** layer and selecting **Paste Frames** from the menu. This shortcut pastes the frame’s contents in the same positions as the original frame. Delete the extra copy of the bug image by selecting the bug image in the **top** layer with the selection tool and pressing the _Delete_ key.

Next, you’ll create the animated graphic that the banner text in the **top** layer masks. Click in the first frame of the **middle** layer and use the Oval tool to draw a circle to the left of the image that is taller than the text. The oval does not need to fit inside the banner area. Set the oval stroke to **no color** by clicking the stroke swatch and selecting the **No color** option. Set the fill color to the rainbow gradient (Fig. 16.32), found at the bottom of the **Swatches** panel.

Select the oval by clicking it with the Selection tool, and convert the oval to a symbol by pressing _F8_. Name the symbol **oval** and set the behavior to **Graphic**. When the banner is complete, the oval will move across the stage; however, it will be visible only through the text mask in the **top** layer. Move the oval just outside the left edge of the stage, indi- cating the point at which the oval begins its animation. Create a keyframe in frame 20 of the **middle** layer and another in frame 40. These keyframes indicate the different locations of the **oval** symbol during the animation. Click frame 20 and move the oval just outside

**Fig. 16.31** | Resizing an image with the Free transform tool.

anchor

Free transform

tool  

**660** Chapter 16 Adobe® Flash® CS3

the right side of the stage to indicate the animation’s next key position. Do not move the position of the **oval** graphic in frame 40, so that the oval will return to its original position at the end of the animation. Create the first part of the animation by right clicking frame 1 of the **middle** layer and choosing **Create Motion Tween** from the menu. Repeat this step for frame 20 of the **middle** layer, making the **oval** symbol move from left to right and back. Add keyframes to frame 40 of both the **top** and **bottom** layers so that the other movie ele- ments appear throughout the movie.

Now that all the supporting movie elements are in place, the next step is to apply the masking effect. To do so, right click the **top** layer and select **Mask** (Fig. 16.33). Adding a mask to the **top** layer masks only the items in the layer directly below it (the **middle** layer), so the bug logo in the **bottom** layer remains visible at all times. Adding a mask also locks the **top** and **middle** layers to prevent further editing.

Now that the movie is complete, save it as banner.fla and test it with the Flash Player. The rainbow oval is visible through the text as it animates from left to right. The text in the bottom layer is visible in the portions not containing the rainbow (Fig. 16.34).

**Fig. 16.32** | Creating the oval graphic.

**Fig. 16.33** | Creating a mask layer.

Rainbow gradient fill

Mask layer Masked layer

Locked for editing

Layers  

16.5 Creating Special Effects with Flash **661**

**16.5.3 Adding Online Help to Forms** In this section, we build on Flash techniques introduced earlier in this chapter, including tweening, masking, importing sound and bitmapped images, and writing ActionScript. In the following example, we apply these various techniques to create an online form that of- fers interactive help. The interactive help consists of animations that appear when a user presses buttons located next to the form fields. Each button contains a script that triggers an animation, and each animation provides the user with information regarding the form field that corresponds to the pressed button.

Each animation is a movie-clip symbol that is placed in a separate frame and layer of the scene. Adding a stop action to frame 1 pauses the movie until the user presses a button.

Begin by creating a new movie, using default movie size settings. Set the frame rate to 24 fps. The first layer will contain the site name, form title and form captions. Change the name of **Layer 1** to **text**. Add a stop action to frame 1 of the text layer. Create the site name Bug2Bug.com as static text in the **text** layer using a large, bold font, and place the title at the top of the page. Next, place the form name Registration Form as static text beneath the site name, using the same font, but in a smaller size and different color. The final text element added to this layer is the text box containing the form labels. Create a text box using the **Text Tool**, and enter the text: Name:, Member #: and Password:, pressing _Enter_ after entering each label to put it on a different line. Next, adjust the value of the **Line Spacing** field (the amount of space between lines of text) found by clicking the **Edit Format Options** button ( ) in the **Properties** window. Change the form field caption line spacing to **22** in the **Format Options** dialog (Fig. 16.35) and set the text alignment (found in the **Properties** window) to right justify.

Now we’ll create the form fields for our help form. The first step in the production of these form fields is to create a new layer named **form**. In the **form** layer, draw a rectangle that is roughly the same height as the caption text. This rectangle will serve as a background for the form text fields (Fig. 16.36). We set a **Rectangle corner radius** of 6 px in the **Properties** panel. Feel free to experiment with other shapes and colors.

The next step is to convert the rectangle into a symbol so that it may be reused in the movie. Select the rectangle fill and stroke with the selection tool and press _F8_ to convert the selection to a symbol. Set the symbol behavior to **Graphic** and name the symbol **form**

**Fig. 16.34** | Completed banner.  

**662** Chapter 16 Adobe® Flash® CS3

**field**. This symbol should be positioned next to the **Name:** caption. When the symbol is in place, open the **Library** panel by pressing _<Ctrl>_\-_L_, select the **form** layer and drag two copies of the **form field** symbol from the **Library** onto the stage. This will create two new instances of this symbol. Use the Selection tool to align the fields with their corresponding captions. For more precise alignment, select the desired object with the Selection tool and press the arrow key on the keyboard in the direction you want to move the object. After alignment of the **form field** symbols, the movie should resemble Fig. 16.37.

We now add **input text fields** to our movie. An input text field is a text field into which the user can enter text. Select the Text tool and, using the **Properties** window, set the font to **Verdana**, **16** pt, with dark blue as the color. In the **Text type** pull-down menu in the **Properties** window, select **Input Text** (Fig. 16.38). Then, click and drag in the stage to create a text field slightly smaller than the **form field** symbol we just created. With the Selection tool, position the text field over the instance of the **form field** symbol associated with the name. Create a similar text field for member number and password. Select the Password text field, and select **Password** in the Line type pull-down menu in the **Proper- ties** window. Selecting **Password** causes any text entered into the field by the user to appear as an asterisk (\*). We have now created all the input text fields for our help form. In this

**Fig. 16.35** | Adjusting the line spacing with the **Format Options** dialog.

**Fig. 16.36** | Creating a rectangle with rounded corners.

Line-spacing adjustment

Right justify  

16.5 Creating Special Effects with Flash **663**

example, we won’t actually process the text entered into these fields. Using ActionScript, we could give each input text field a variable name, and send the values of these variables to a server-side script for processing.

Now that the form fields are in place, we can create the help associated with each field. Add two new layers. Name one layer **button** and the other **labels**. The **labels** layer will hold the **frame label** for each keyframe. A frame label is a text string that corresponds to a spe- cific frame or series of frames. In the **labels** layer, create keyframes in frames 2, 3 and 4. Select frame 2 and enter name into the **Frame** field in the **Properties** window (Fig. 16.39).

**Fig. 16.37** | Creating multiple instances of a symbol with the **Library** panel.

**Fig. 16.38** | Input and password text-field creation.

**Fig. 16.39** | Adding **Frame Labels** using the **Properties window**.

Text type Line type

Red flag indicates presence of frame label

**Frame** field  

**664** Chapter 16 Adobe® Flash® CS3

Name frame 3 and frame 4 memberNumber and password, respectively. These frames can now be accessed either by number or by name. We use the labels again later in this example.

In frame 1 of the **button** layer, create a small circular button containing a question mark. \[_Note:_ the **Text type** property of the **Text Tool** will still be **Input Text**, so you must change it back to **Static Text**\]. Position it next to the **name** field. When the button is com- plete, select all of its pieces with the selection tool, and press _F8_ to convert the shape into a button symbol named **helpButton**. Drag two more instances of the **helpButton** symbol from the **Library** panel onto the stage next to each of the form fields.

These buttons will trigger animations that provide information about their corre- sponding form fields. A script will be added to each button so that the movie jumps to a particular frame when a user presses the button. Click the **helpButton** symbol associated with the **name** field and give it the instance name nameHelp. As in Section 16.3.11, we’ll now add event-handling code. Open the **Actions** for the first frame of the **buttons** layer and invoke the nameHelp button’s addEventListener function to register the function name-

Function as the handler of the mouse-click event. In nameFunction, add a gotoAndStop

action, causing the movie play to skip to a particular frame and stop playing. Enter "name" between the function’s parentheses. The script should now read as follows:

nameHelp.addEventListener( MouseEvent.MOUSE\_DOWN, nameFunction );

function nameFunction( event : MouseEvent ) : void {

gotoAndStop( "name" ); }

When the user presses the nameHelp button, this script advances to the frame labeled name and stops. \[_Note:_ We could also have entered gotoAndStop( 2 ), referenced by frame number, in place of gotoAndStop( "name" ).\] Add similar code for the memberHelp and passwordHelp buttons, changing the frame labels to memberNumber and password, the button instance names to memberHelp and passwordHelp and the function names to mem-

berFunction and passwordFunction, respectively. Each button now has an action that points to a distinct frame in the timeline. We next add the interactive help animations to these frames.

The animation associated with each button is created as a movie-clip symbol that is inserted into the scene at the correct frame. For instance, the animation associated with the **Password** field is placed in frame 4, so that when the button is pressed, the gotoAnd-

Stop action skips to the frame containing the correct animation. When the user clicks the button, a help rectangle will open and display the purpose of the associated field.

Each movie clip should be created as a **new symbol** so that it can be edited without affecting the scene. Select **New Symbol…** from the **Insert** menu (or use the shortcut _<Ctrl>- F8_), name the symbol **nameWindow** and set the behavior to **Movie Clip**. Press **OK** to open the symbol’s stage and timeline.

Next, you’ll create the interactive help animation. This animation contains text that describes the form field. Before adding the text, we are going to create a small background animation that we will position behind the text. Begin by changing the name of **Layer 1** to **background**. Draw a dark blue rectangle with no border. This rectangle can be of any size, because we will customize its proportions with the **Properties** window. Select the rectangle  

16.5 Creating Special Effects with Flash **665**

with the Selection tool, then open the **Properties** window. Set the **W:** field to **200** and the **H:** field to **120**, to define the rectangle’s size. Next, center the rectangle by entering **–100** and **–60** into the **X:** and **Y:** fields, respectively (Fig. 16.40).

Now that the rectangle is correctly positioned, we can begin to create its animation. Add keyframes to frames 5 and 10 of the **background** layer. Use the **Properties** window to change the size of the rectangle in frame 5, setting its height to **5.0**. Next, right click frame 5 and select **Copy Frames**. Then right click frame 1 and select **Paste Frames**. While in frame 1, change the width of the rectangle to **5.0**.

The animation is created by applying shape tweening to frames 1 and 5. Recall that shape tweening morphs one shape into another. The shape tween causes the dot in frame 1 to grow into a line by frame 5, then into a rectangle in frame 10. Select frame 1 and apply the shape tween by right clicking frame 1 and selecting **Create Shape Tween**. Do the same for frame 5. Shape tweens appear green in the timeline (Fig. 16.41). Follow the same pro- cedure for frame 5.

Now that this portion of the animation is complete, it may be tested on the stage by pressing _Enter_. The animation should appear as the dot from frame 1 growing into a line by frame 5 and into a rectangle by frame 10.

The next step is to add a mock form field to this animation which demonstrates what the user would type in the actual field. Add two new layers above the **background** layer, named **field** and **text**. The **field** layer contains a mock form field, and the **text** layer contains the help information.

First, create an animation similar to the growing rectangle we just created for the mock form field. Add a keyframe to frame 10 in both the **field** and **text** layers. Fortunately, we have a form field already created as a symbol. Select frame 10 of the **field** layer, and drag

**Fig. 16.40** | Centering an image on the stage with the **Properties** window.

**Fig. 16.41** | Creating a shape tween.

Center alignment

Width

Height Position

Shape tween

Frame 1 Frame 5 Frame 10  

**666** Chapter 16 Adobe® Flash® CS3

the **form field** symbol from the **Library** panel onto the stage, placing it within the current movie clip. Symbols may be embedded in one another; however, they cannot be placed within themselves (i.e., an instance of the **form field** symbol cannot be dragged onto the **form field** symbol editing stage). Align the **form field** symbol with the upper-left corner of the background rectangle, as shown in Fig. 16.42.

Next, set the end of this movie clip by adding keyframes to the **background** and **field** layers in frame 40. Also add keyframes to frames 20 and 25 of the **field** layer. These key- frames define intermediate points in the animation. Refer to Fig. 16.43 for correct key- frame positioning.

The next step in creating the animation is to make the **form field** symbol grow in size. Select frame 20 of the **field** layer, which contains only the **form field** symbol. Next open the **Transform** panel from the **Window** menu. The **Transform** panel can be used to change an object’s size. Check the **Constrain** checkbox to constrain the object’s proportions as it is resized. Selecting this option causes the **scale factor** to be equal in the width and height fields. The scale factor measures the change in proportion. Set the scale factor for the width and height to **150%**, and press _Enter_ to apply the changes. Repeat the previous step for frame 10 of the **field** layer, but scale the **form field** symbol down to **0%**.

The symbol’s animation is created by adding a motion tween. Adding the motion tween to **field** layer frames 10 and 20 will cause the **form field** symbol to grow from 0% of the original size to 150%, then to 100%. Figure 16.43 illustrates this portion of the ani- mation.

Next, you’ll add text to the movie clip to help the user understand the purpose of the corresponding text field. You’ll set text to appear over the **form field** symbol as an example to the user. The text that appears below the **form field** symbol tells the user what should be typed in the text field.

**Fig. 16.42** | Adding the **field** symbol to the **nameWindow** movie clip.

**Fig. 16.43** | Creating an animation with the **form field** symbol.  

16.5 Creating Special Effects with Flash **667**

To add the descriptive text, first insert a keyframe in frame 25 of the **text** layer. Use the Text tool (white, **Arial**, **16** pt text and **3** pt line spacing) to type the help information for the **Name** field. Make sure the text type is **Static Text**. This text will appear in the help window. For instance, our example gives the following directions for the **Name** field: **Enter your name in this field. First name, Last name**. Align this text with the left side of the rect- angle. Next, add a keyframe to frame 40 of this layer, causing the text to appear throughout the animation.

Next, duplicate this movie clip so that it may be customized and reused for the other two help button animations. Open the **Library** panel and right click the **nameWindow** movie clip. Select **Duplicate** from the resulting menu, and name the new clip **password- Window**. Repeat this step once more, and name the third clip **memberWindow** (Fig. 16.44).

You must customize the duplicated movie clips so their text reflects the corresponding form fields. To begin, open the **memberWindow** editing stage by pressing the **Edit Symbols** button, which is found in the upper-right corner of the editing environment, and selecting **memberWindow** from the list of available symbols (Fig. 16.44). Select frame 25 of the **text** layer and change the form field description with the Text tool so that the box contains the directions **Enter your member number here in the form: 556677**. Copy the text in frame 25 by selecting it with the Text tool and using the shortcut _<Ctrl>-C_. Click frame 40 of the **text** layer, which contains the old text. Highlight the old text with the Text tool, and use the shortcut _<Ctrl>-V_ to paste the copied text into this frame. Repeat these steps for the **passwordWindow** movie clip using the directions **Enter your secret password in this field**. \[_Note:_ Changing a symbol’s function or appearance in its editing stage updates the symbol in the scene.\]

The following steps further customize the help boxes for each form field. Open the **nameWindow** symbol’s editing stage by clicking the **Edit Symbols** button (Fig. 16.44) and selecting **nameWindow**. Add a new layer to this symbol called **typedText** above the **text** layer. This layer contains an animation that simulates the typing of text into the form field.

**Fig. 16.44** | Duplicating movie-clip symbols with the **Library** panel.

Current symbol

Symbol to edit

**Edit Scene Edit Symbols**  

**668** Chapter 16 Adobe® Flash® CS3

Insert a keyframe in frame 25. Select this frame and use the Text tool to create a text box on top of the **form field** symbol. Type the name **John Doe** in the text box, then change the text color to black.

The following frame-by-frame animation creates the appearance of the name being typed into the field. Add a keyframe to frame 40 to indicate the end of the animation. Then add new keyframes to frames 26–31. Each keyframe contains a new letter being typed in the sequence, so when the playhead advances, new letters appear. Select the **John Doe** text in frame 25 and delete everything except the first **J** with the Text tool. Next, select frame 26 and delete all of the characters except the **J** and the **o**. This step must be repeated for all subsequent keyframes up to frame 31, each keyframe containing one more letter than the last (Fig. 16.45). Frame 31 should show the entire name. When this process is complete, press _Enter_ to preview the frame-by-frame typing animation.

Create the same type of animation for both the **passwordWindow** and the **member- Window** movie clips, using suitable words. For example, we use six asterisks for the **pass- wordWindow** movie clip and six numbers for the **memberWindow** movie clip. Add a stop

action to frame 40 of all three movie clips so that the animations play only once. The movie clips are now ready to be added to the scene. Click the **Edit Scene** button

next to the **Edit Symbols** button, and select **Scene 1** to return to the scene. Before inserting the movie clips, add the following layers to the timeline: **nameMovie**, **memberMovie** and **passwordMovie**, one layer for each of the movie clips. Add a keyframe in frame 2 of the **nameMovie** layer. Also, add keyframes to frame 4 of the **form**, **text** and **button** layers, ensuring that the form and text appear throughout the movie.

Now you’ll place the movie clips in the correct position in the scene. Recall that the ActionScript for each help button contains the script

function _functionName_( event : MouseEvent ) : void {

gotoAndStop( _frameLabel_ ); }

in which _functionName_ and _frameLabel_ depend on the button. This script causes the movie to skip to the specified frame and stop. Placing the movie clips in the correct frames causes the playhead to skip to the desired frame, play the animation and stop. This effect is cre- ated by selecting frame 2 of the **nameMovie** layer and dragging the **nameWindow** movie clip onto the stage. Align the movie clip with the button next to the **Name** field, placing it half- way between the button and the right edge of the stage.

**Fig. 16.45** | Creating a frame-by-frame animation.

Deleting a letter from each subsequent frame

Frames for text animation  

16.6 Creating a Website Splash Screen **669**

The preceding step is repeated twice for the other two movie clips so that they appear in the correct frames. Add a keyframe to frame 3 of the **memberMovie** layer and drag the **memberWindow** movie clip onto the stage. Position this clip in the same manner as the pre- vious clip. Repeat this step for the **passwordWindow** movie clip, dragging it into frame 4 of the **passwordMovie** layer.

The movie is now complete. Press _<Ctrl>-Enter_ to preview it with the Flash Player. If the triggered animations do not appear in the correct locations, return to the scene and adjust their position. The final movie is displayed in Fig. 16.46.

In our example, we have added a picture beneath the text layer. Movies can be enhanced in many ways, such as by changing colors and fonts or by adding pictures. Our movie (bug2bug.fla) can be found in the this chapter’s examples directory. If you want to use our symbols to recreate the movie, select **Open External Library…** from the **Import** submenu of the **File** menu and open bug2bug.fla. The **Open External Library…** option allows you to reuse symbols from another movie.

**16.6 Creating a Website Splash Screen** Flash is becoming an important tool for e-businesses. Many organizations use Flash to cre- ate website splash screens (i.e., introductions), product demos and web applications. Oth- ers use Flash to build games and interactive entertainment in an effort to attract new visitors. However, these types of applications can take a long time to load, causing visi- tors—especially those with slow connections—to leave the site. One way to alleviate this problem is to provide visitors with an animated Flash introduction that draws and keeps their attention. Flash animations are ideal for amusing visitors while conveying informa- tion as the rest of a page downloads “behind the scenes.”

A **preloader** or **splash screen** is a simple animation that plays while the rest of the web page is loading. Several techniques are used to create animation preloaders. The following

**Fig. 16.46** | **Bug2Bug.com** help form.  

**670** Chapter 16 Adobe® Flash® CS3

example creates an animation preloader that uses ActionScript to pause the movie at a par- ticular frame until all the movie elements have loaded.

To start building the animation preloader, create a new Flash document. Use the default size, and set the background color to a light blue. First, you’ll create the movie pieces that will be loaded later in the process. Create five new layers, and rename **Layer 2** to **C++**, **Layer 3** to **Java** and **Layer 4** to **IW3**. **Layer 5** will contain the movie’s ActionScript, so rename it **actions.** Because **Layer 1** contains the introductory animation, rename this layer **animation**.

The preloaded objects we use in this example are animated movie clip symbols. Create the first symbol by clicking frame 2 of the **C++** layer, inserting a keyframe, and creating a new movie-clip symbol named **cppbook**. When the symbol’s editing stage opens, import the image cpphtp.gif (found in the images folder with this chapter’s examples). Place a keyframe in frame 20 of **Layer 1** and add a stop action to this frame. The animation in this example is produced with the motion tween **Rotate** option, which causes an object to spin on its axis. Create a motion tween in frame 1 with the **Properties** window, setting the **Rotate** option to **CCW** (counterclockwise) and the **times** field to **2** (Fig. 16.47). This causes the image cpphtp.gif to spin two times counterclockwise over a period of 20 frames.

After returning to the scene, drag and drop a copy of the **cppbook** symbol onto the stage in frame 2 of the **C++** layer. Move this symbol to the left side of the stage. Insert a frame in frame 25 of the **C++** layer.

Build a similar movie clip for the **Java** and **IW3** layers, using the files java.gif and iw3.gif to create the symbols. Name the symbol for the **Java** layer **jbook** and the **IW3** symbol **ibook** to identify the symbols with their contents. In the main scene, create a key- frame in frame 8 of the **Java** layer, and place the **jbook** symbol in the center of the stage. Insert a frame in frame 25 of the **Java** layer. Insert the **ibook** symbol in a keyframe in frame 14 of the **IW3** layer, and position it to the right of the **jbook** symbol. Insert a frame in frame 25 of the **IW3** layer. Make sure to leave some space between these symbols so that they will not overlap when they spin (Fig. 16.48). Add a keyframe to the 25th frame of the actions layer, then add a stop to the **Actions** panel of that frame.

Now that the loading objects have been placed, it is time to create the preloading ani- mation. By placing the preloading animation in the frame preceding the frame that con- tains the objects, we can use ActionScript to pause the movie until the objects have loaded. Begin by adding a stop action to frame 1 of the **actions** layer. Select frame 1 of the **anima- tion** layer and create another new movie-clip symbol named **loader**. Use the text tool with a medium-sized sans-serif font, and place the word **Loading** in the center of the symbol’s

**Fig. 16.47** | Creating a rotating object with the motion tween **Rotate** option.

**Rotate**  

16.6 Creating a Website Splash Screen **671**

editing stage. This title indicates to the user that objects are loading. Insert a keyframe into frame 14 and rename this layer **load**.

Create a new layer called **orb** to contain the animation. Draw a circle with no stroke about the size of a quarter above the word **Loading**. Give the circle a green-to-white radial gradient fill color. The colors of this gradient can be edited in the **Color** panel (Fig. 16.49).

The block farthest to the left on the **gradient range** indicates the innermost color of the radial gradient, whereas the block farthest to the right indicates the outermost color of the radial gradient. Click the left block to reveal the **gradient color** swatch. Click the swatch and select a medium green as the inner color of the gradient. Select the right, outer color box and change its color to white. Deselect the circle by clicking on a blank portion of the stage. Note that a white ring appears around the circle due to the colored back- ground. To make the circle fade into the background, we adjust its **alpha** value. Alpha is a value between 0 and 100% that corresponds to a color’s transparency or opacity. An alpha value of 0% appears transparent, whereas a value of 100% appears completely opaque. Select the circle again and click the right gradient box (white). Adjust the value of the **Alpha** field in the **Color Mixer** panel to 0%. Deselect the circle. It should now appear to fade into the background.

The rate of progression in a gradient can also be changed by sliding the color boxes. Select the circle again. Slide the left color box to the middle so that the gradient contains more green than transparent white, then return the slider to the far left. Intermediate colors may be added to the gradient range by clicking beneath the bar, next to one of the existing

**Fig. 16.48** | Inserted movie clips.

**Fig. 16.49** | Changing gradient colors with the **Color** panel.

Gradient color swatch

Outer color

Fill type

Gradient range

Gradient preview

Inner color

Alpha value  

**672** Chapter 16 Adobe® Flash® CS3

color boxes. Click to the right of the inner color box to add a new color box (Fig. 16.50). Slide the new color box to the right and change its color to a darker green. Any color box may be removed from a gradient by dragging it downward off the gradient range.

Insert keyframes into frame 7 and 14 of the **orb** layer. Select the circle in frame 7 with the selection tool. In the **Color** panel change the alpha of every color box to 0%. Select frame 1 in the **Timeline** and add shape tween. Change the value of the **Ease** field in the **Properties** window to **–100**. **Ease** controls the rate of change during tween animation. Neg- ative values cause the animated change to be gradual at the beginning and become increas- ingly drastic. Positive values cause the animation to change quickly in the first frames, becoming less drastic as the animation progresses. Add shape tween to frame 7 and set the **Ease** value to 100. In frame 14, add the action gotoAndPlay(1); to repeat the animation. You can preview the animation by pressing _Enter_. The circle should now appear to pulse.

Before inserting the movie clip into the scene, we are going to create a **hypertext linked button** that will enable the user to skip over the animations to the final destination. Add a new layer called **link** to the **loader** symbol with keyframes in frames 1 and 14. Using the text tool, place the words **skip directly to Deitel website** below **Loading** in a smaller font size. Select the words with the selection tool and convert them into a button symbol named **skip**. Converting the text into a button simulates a text hyperlink created with XHTML. Double click the words to open the **skip** button’s editing stage. For this example, we are going to edit only the hit state. When a button is created from a shape, the button’s hit area is, by default, the area of the shape. It is important to change the hit state of a button created from text so that it includes the spaces between the letters; other- wise, the link will work only when the user hovers over a letter’s area. Insert a keyframe in the hit state. Use the rectangle tool to draw the hit area of the button, covering the entire length and height of the text. This rectangle is not visible in the final movie, because it defines only the hit area (Fig. 16.51).

The button is activated by giving it an action that links it to another web page. After returning to the **loader** movie-clip editing stage, give the **skip** button the instance name **skipButton** and open the **Actions** panel for the first frame of the **link** layer. Invoke the add- EventListener function using the **skipButton** instance to call function onClick whenever

**Fig. 16.50** | Adding an intermediate color to a gradient.

Click and drag to add or remove a color

Resulting gradient

Intermediate color  

16.6 Creating a Website Splash Screen **673**

the button is clicked. Then, create an object of type URLRequest and give the constructor a parameter value of "http://www.deitel.com". The function onClick employs Flash’s navigateToURL function to access the website given to it. Thus, the code now reads

skipButton.addEventListener( MouseEvent.CLICK, onClick ); var url : URLRequest = new URLRequest( "http://www.deitel.com" );

function onClick( e : MouseEvent ) : void {

navigateToURL( url, "\_blank" ); } // end function onClick

The "\_blank" parameter signifies that a new browser window displaying the Deitel web- site should open when the user presses the button.

Return to the scene by clicking **Scene 1** directly below the timeline, next to the name of the current symbol. Drag and drop a copy of the **loader** movie clip from the **Library** panel into frame 1 of the **animation** layer, center it on the stage, and set its **Instance name** to **loadingClip**.

The process is nearly complete. Open the **Actions** panel for the **actions** layer. The fol- lowing actions direct the movie clip to play until all the scene’s objects are loaded. First, add a stop to the frame so that it doesn’t go to the second frame until we tell it to. Using the **loadingClip** movie instance, use the addEventListener function to invoke the function onBegin whenever the event Event.ENTER\_FRAME is triggered. The ENTER\_FRAME event occurs every time the playhead enters a new frame. Since this movie’s frame rate is 12 fps (frames per second), the ENTER\_FRAME event will occur 12 times each second.

loadingClip.addEventListener( Event.ENTER\_FRAME, onBegin );

The next action added to this sequence is the function onBegin. The condition of the if statement will be used to determine how many frames of the movie are loaded. Flash movies load frame by frame. Frames that contain complex images take longer to load. Flash will continue playing the current frame until the next frame has loaded. For our movie, if the number of frames loaded (frameLoaded) is equal to the total number of frames (totalFrames), then the movie is finished loading, so it will play frame 2. It also invokes the removeEventListener function to ensure that onBegin is not called for the remainder of the movie. If the number of frames loaded is less than the total number of frames, then the current movie clip continues to play. The code now reads:

stop();

loadingClip.addEventListener( Event.ENTER\_FRAME, onBegin );

// check if all frames have been loaded function onBegin( event : Event ) : void {

if ( framesLoaded == totalFrames ) {

**Fig. 16.51** | Defining the hit area of a button.

Hit stateUp state  

**674** Chapter 16 Adobe® Flash® CS3

loadingClip.removeEventListener( Event.ENTER\_FRAME, onBegin ); gotoAndPlay( 2 );

} // end if } // end function onBegin

Create one more layer in the scene, and name the layer **title**. Add a keyframe to frame 2 of this layer, and use the Text tool to create a title that reads **Recent Deitel Publications**. Below the title, create another text hyperlink button to the Deitel website. The simplest way to do this is to duplicate the existing **skip** button and modify the text. Right click the **skip** symbol in the **Library** panel, and select **Duplicate**. Name the new button **visit**, and place it in frame 2 of the **title** layer. Label the instance **visitButton**, then create a keyframe in the second frame of the **actions** layer. Duplicate the code from the **Actions** panel of the first frame of the **link** layer in the **loader** symbol, and replace skipButton with visit-

Button. Double click the **visit** button and edit the text to say **visit the Deitel website**. Add keyframes to each frame of the **title** layer and manipulate the text to create a typing effect similar to the one we created in the bug2bug example.

The movie is now complete. Test the movie with the Flash Player (Fig. 16.52). When viewed in the testing window, the loading sequence will play for only one frame because your processor loads all the frames almost instantly. Flash can simulate how a movie would appear to an online user, though. While still in the testing window, select **56K** from the **Download Settings** submenu of the **View** menu. Also, select **Bandwidth Profiler** from the **View** menu. Then select **Simulate Download** from the **View** menu or press _<Ctrl>-Enter_. The graph at the top of the window displays the amount of bandwidth required to load each frame.

**Fig. 16.52** | Creating an animation to preload images.

Images are rotating counterclockwise

Text hyperlinked buttons  

16.7 ActionScript **675**

**16.7 ActionScript** Figure 16.53 lists common Flash ActionScript 3.0 functions. By attaching these functions to frames and symbols, you can build some fairly complex Flash movies.

**16.8 Wrap-Up** In this chapter, we introduced Adobe Flash CS3 (Creative Suite 3) and demonstrated how to produce interactive, animated movies. You learned that Flash CS3 can be used to create web-based banner advertisements, interactive websites, games and web-based applications, and that it provides tools for drawing graphics, generating animations, and adding sound and video. We discussed how to embed Flash movies in web pages and how to execute Flash movies as stand-alone programs. You also learned some ActionScript 3.0 program- ming and created interactive buttons, added sound to movies, created special graphic ef- fects. In the next chapter, you’ll build an interactive game using Flash.

Function Description

gotoAndPlay Jump to a frame or scene in another part of the movie and start playing the movie.

gotoAndStop Jump to a frame or scene in another part of the movie and stop the movie.

play Start playing a movie from the beginning, or from wherever it has been stopped.

stop Stop a movie.

SoundMixer.stopAll Stop the sound track without affecting the movie.

navigateToUrl Load a URL into a new or existing browser window.

fscommand Insert JavaScript or other scripting languages into a Flash movie.

Loader class Load a SWF or JPEG file into the Flash Player from the current movie. Can also load another SWF into a particular movie.

framesLoaded Check whether certain frames have been loaded.

addEventListener Assign functions to a movie clip based on specific events. The events include load, unload, enterFrame, mouseUp, mouseDown, mouseMove, keyUp, keyDown and data.

if Set up condition statements that run only when the condition is true.

while/do while Run a collection of statements while a condition statement is true.

trace Display programming notes or variable values while testing a movie.

Math.random Returns a random number less than or equal to 0 and less than 1.

**Fig. 16.53** | Common ActionScript functions.  

**676** Chapter 16 Adobe® Flash® CS3

**16.9 Web Resources** www.deitel.com/flash9/

The Deitel Flash 9 Resource Center contains links to some of the best Flash 9 and Flash CS3 re- sources on the web. There you’ll find categorized links to forums, conferences, blogs, books, open source projects, videos, podcasts, webcasts and more. Also check out the tutorials for all skill levels, from introductory to advanced. Be sure to visit the related Resource Centers on Microsoft Silverlight (www.deitel.com/silverlight/) and Adobe Flex (www.deitel.com/flex/).

**Summary _Section 16.1 Introduction_** • Adobe _Flash CS3_ (Creative Suite 3) is a commercial application that you can use to produce in-

teractive, animated movies.

• Flash can be used to create web-based banner advertisements, interactive websites, games and web-based applications with stunning graphics and multimedia effects.

• Flash movies can be embedded in web pages, placed on CDs or DVDs as independent applica- tions or converted into stand alone, executable programs.

• Flash includes tools for coding in its scripting language, ActionScript 3.0. ActionScript, which is similar to JavaScript, enables interactive applications.

• To play Flash movies, the Flash Player plug-in must be installed in your web browser. This plug- in has several versions, the most recent of which is version 9.

**_Section 16.2 Flash Movie Development_** • The stage is the white area in which you place graphic elements during movie development. Only

objects in this area will appear in the final movie.

• The timeline represents the time period over which a movie runs.

• Each frame depicts a moment in the movie’s timeline, into which you can insert movie elements.

• The playhead indicates the current frame.

• The **Tools** bar is divided into multiple sections, each containing tools and functions that help you create Flash movies.

• Windows called panels organize frequently used movie options. Panel options modify the size, shape, color, alignment and effects associated with a movie’s graphic elements.

• The context-sensitive **Properties** panel displays information about the currently selected object. It is a useful tool for viewing and altering an object’s properties.

• You can access different panels by selecting them from the **Window** menu.

**_Section 16.3 Learning Flash with Hands-On Examples_** • The .fla file extension is a Flash-specific extension for editable movies.

• **Frame rate** sets the speed at which movie frames display.

• The background color determines the color of the stage.

• **Dimensions** define the size of a movie as it displays on the screen.

**_Section 16.3.1 Creating a Shape with the Oval Tool_** • Flash creates shapes using vectors—mathematical equations that define the shape’s size, shape

and color. When vector graphics are saved, they are stored using equations.  

Summary **677**

• Vector graphics can be resized without losing clarity.

• You can create shapes by dragging with the shape tools.

• Every shape has a stroke color and a fill color. The stroke color is the color of a shape’s outline, and the fill color is the color that fills the shape.

• Clicking the Black and white button resets the stroke color to black and the fill color to white.

• Selecting the Swap colors option switches the stroke and fill colors.

• The _Shift_ key constrains a shape’s proportions to have equal width and height.

• A dot in a frame signifies a keyframe, which indicates a point of change in a timeline.

• A shape’s size can be modified with the **Properties** panel when the shape is selected.

• Gradient fills are gradual progressions of color.

• The **Swatches** panel provides four radial gradients and three linear gradients.

**_Section 16.3.2 Adding Text to a Button_** • Button titles communicate a button’s function to the user. You can create a title with the Text

tool.

• With selected text, you can change the font, text size and font color with the **Properties** window.

• To change the font color, click the text color swatch and select a color from the palette.

**_Section 16.3.3 Converting a Shape into a Symbol_** • The scene contains graphics and symbols. The parent movie may contain several symbols that

are reusable movie elements, such as graphics, buttons and movie clips.

• A scene timeline can contain numerous symbols with their own timelines and properties.

• A scene may have several instances of any given symbol.

• Symbols can be edited independently of the scene by using the symbol’s editing stage. The edit- ing stage is separate from the scene stage and contains only one symbol.

• Selecting **Convert to Symbol…** from the **Modify** menu or using the shortcut _F8_ on the keyboard opens the **Convert to Symbol** dialog, in which you can set the properties of a new symbol.

• Every symbol in a Flash movie must have a unique name.

• You can create three different types of symbols—movie clips, buttons and graphics.

• A movie-clip symbol is ideal for recurring animations.

• Graphic symbols are ideal for static images and basic animations.

• Button symbols are objects that perform button actions, such as rollovers and hyperlinking. A rollover is an action that changes the appearance of a button when the mouse passes over it.

• The **Library** panel stores every symbol in a movie and is accessed through the **Window** menu or by the shortcuts _<Ctrl>-L_ or _F11_. Multiple instances of a symbol can be placed in a movie by drag- ging and dropping the symbol from the **Library** panel onto the stage.

**_Section 16.3.4 Editing Button Symbols_** • The different components of a button symbol, such as its fill and type, may be edited in the sym-

bol’s editing stage. You may access a symbol’s editing stage by double clicking the symbol in the **Library** or by pressing the **Edit Symbols** button and selecting the symbol name.

• The pieces that make up a button can all be changed in the editing stage.

• A button symbol’s timeline contains four frames, one for each of the button states (up, over and down) and one for the hit area.  

**678** Chapter 16 Adobe® Flash® CS3

• The up state (indicated by the **Up** frame on screen) is the default state before the user presses the button or rolls over it with the mouse.

• Control shifts to the over state (i.e., the **Over** frame) when the mouse moves over the button.

• The button’s down state (i.e., the **Down** frame) plays when a user presses a button. You can create interactive, user-responsive buttons by customizing the appearance of a button in each state.

• Graphic elements in the hit state (i.e., the **Hit** frame) are not visible when viewing the movie; they exist simply to define the active area of the button (i.e., the area that can be clicked).

• By default, buttons only have the up state activated when they are created. You may activate oth- er states by adding keyframes to the other three frames.

**_Section 16.3.5 Adding Keyframes_** • Keyframes are points of change in a Flash movie and appear in the timeline as gray with a black

dot. By adding keyframes to a button symbol’s timeline, you can control how the button reacts to user input.

• A rollover is added by inserting a keyframe in the button’s **Over** frame, then changing the but- ton’s appearance in that frame.

• Changing the button color in the over state does not affect the button color in the up state.

**_Section 16.3.6 Adding Sound to a Button_** • Flash imports sounds in the WAV (Windows), AIFF (Macintosh) or MP3 formats.

• Sounds can be imported into the **Library** by choosing **Import to Library** from the **Import** submenu of the **File** menu.

• You can add sound to a movie by placing the sound clip in a keyframe or over a series of frames.

• If a frame has a blue wave or line through it, a sound effect has been added to it.

**_Section 16.3.7 Verifying Changes with Test Movie_** • Movies can be viewed in their published state with the Flash Player. The published state of a

movie is how it would appear if viewed over the web or with the Flash Player.

• Published Flash movies have the Shockwave Flash extension (.swf). SWF files can be viewed but not edited.

**_Section 16.3.8 Adding Layers to a Movie_** • A movie can be composed of many layers, each having its own attributes and effects.

• Layers organize different movie elements so that they can be animated and edited separately, making the composition of complex movies easier. Graphics in higher layers appear over the graphics in lower layers.

• Text can be broken apart or regrouped for color editing, shape modification or animation. How- ever, once text has been broken apart, it may not be edited with the Text tool.

**_Section 16.3.9 Animating Text with Tweening_** • Animations in Flash are created by inserting keyframes into the timeline.

• Tweening, also known as morphing, is an automated process in which Flash creates the interme- diate steps of the animation between two keyframes.

• Shape tweening morphs an ungrouped object from one shape to another.

• Motion tweening moves symbols or grouped objects around the stage.

• Keyframes must be designated in the timeline before adding the motion tween.  

Summary **679**

• Adding the stop function to the last frame in a movie stops the movie from looping.

• The small letter **a** in a frame indicates that it contains an action.

**_Section 16.3.10 Adding a Text Field_** • **Static Text** creates text that does not change.

• **Dynamic Text** creates can be changed or determined by outside variables through ActionScript.

• **Input Text** creates a text field into which the viewers of the movie can input their own text.

**_Section 16.3.11 Adding ActionScript_** • The addEventListener function helps make an object respond to an event by calling a function

when the event takes place.

• MouseEvent.MOUSE\_DOWN specifies that an action is performed when the user clicks the button.

• Math.random returns a random floating-point number from 0.0 up to, but not including, 1.0.

**_Section 16.4 Publishing Your Flash Movie_** • Flash movies must be published for users to view them outside Flash CS3 and the Flash Player.

• Flash movies may be published in a different Flash version to support older Flash Players.

• Flash can automatically generate an XHMTL document that embeds your Flash movie.

**_Section 16.5.1 Importing and Manipulating Bitmaps_** • Once an imported image is broken apart, it may be shape tweened or edited with editing tools

such as the Lasso, Paint bucket, Eraser and Paintbrush. The editing tools are found in the toolbox and apply changes to a shape.

• Dragging with the Lasso tool selects areas of shapes. The color of a selected area may be changed, or the selected area may be moved.

• Once an area is selected, its color may be changed by selecting a new fill color with the fill swatch or by clicking the selection with the Paint bucket tool.

• The Eraser tool removes shape areas when you click and drag the tool across an area. You can change the eraser size using the tool options.

**_Section 16.5.2 Creating an Advertisement Banner with Masking_** • Masking hides portions of layers. A masking layer hides objects in the layers beneath it, revealing

only the areas that can be seen through the shape of the mask.

• Items drawn on a masking layer define the mask’s shape and cannot be seen in the final movie.

• The Free transform tool allows us to resize an image. When an object is selected with this tool, anchors appear around its corners and sides.

• Breaking text apart once converts each letter into its own text field. Breaking it apart again con- verts the letters into shapes that cannot be edited with the Text tool, but can be manipulated as regular graphics.

• Adding a mask to a layer masks only the items in the layer directly below it.

**_Section 16.5.3 Adding Online Help to Forms_** • Use the Selection tool to align objects with their corresponding captions. For more precise align-

ment, select the desired object with the Selection tool and press the arrow key on the keyboard in the direction you want to move the object.

• An input text field is a text field into which the user can type text.  

**680** Chapter 16 Adobe® Flash® CS3

• Each movie clip should be created as a new symbol so that it can be edited without affecting the scene.

• Symbols may be embedded in one another; however, they cannot be placed within themselves.

• The **Transform** panel can be used to change an object’s size.

• The **Constrain** checkbox causes the scale factor to be equal in the height and width fields. The scale factor measures the change in proportion.

• Changing a symbol’s function or appearance in its editing stage updates the symbol in the scene.

**_Section 16.6 Creating a Website Splash Screen_** • Many organizations use Flash to create website splash screens (i.e., introductions), product dem-

os and web applications.

• Flash animations are ideal for amusing visitors while conveying information as the rest of a page downloads “behind the scenes.”

• A preloader is a simple animation that plays while the rest of the web page is loading.

• Alpha is a value between 0 and 100% that corresponds to a color’s transparency or opacity. An alpha value of 0% appears transparent, whereas a value of 100% appears completely opaque.

• The rate of progression in a gradient can also be changed by sliding the color boxes.

• Any color box may be removed from a gradient by dragging it downward off the gradient range.

• **Ease** controls the rate of change during tween animation. Negative values cause the animated change to be gradual at the beginning and become increasingly drastic. Positive values cause the animation to change quickly in the first frames and less drastically as the animation progresses.

• When a button is created from a shape, the button’s hit area is, by default, the area of the shape.

• It is important to change the hit state of a button created from text so that it includes the spaces between the letters; otherwise, the link will work only when the user hovers over a letter’s area.

• The "\_blank" signifies that a new browser window should open when the user presses the button.

• Flash movies load frame by frame, and frames containing complex images take longer to load. Flash will continue playing the current frame until the next frame has loaded.

**Terminology** ActionScript 3.0 active tool addEventListener function Adobe Flash CS3 alpha value anchor **Bandwidth Profiler** bitmapped graphics break apart **Brush Mode Brush Tool** constrained aspect ratio do while control structure down state duplicate symbol **Eraser tool** .fla file format

frame frame label **Frame Rate** frames per second framesLoaded property free transform tool fscommand function gotoAndPlay function gotoAndStop function gradients **Hand tool** hexadecimal notation hit state hypertext link if control structure input text field instance  

Self-Review Exercises **681**

instance name interactive animated movies JavaScript keyframe **Lasso tool** layer **Library** panel Loader class **Magic wand** masking layer math.random function motion tween movie clip movie clip symbol MP3 audio compression format navigateToUrl function **Oval tool** over state play function playhead preloader radial gradient

raster graphic raw compression **Rectangle tool Sample Rate** scenes **Selection tool** shape tween SoundMixer.stopAll function splash screen stage stop function .swf file format symbol **Text tool** timeline trace function tween up state vector graphic web-safe palette while control structure **Zoom tool**

**Self-Review Exercises 16.1** Fill in the blanks in each of the following statements:

a) Adobe Flash’s feature draws the in-between frames of an animation. b) Graphics, buttons and movie clips are all types of . c) The two types of tweening in Adobe Flash are tweening and

tweening. d) Morphing one shape into another over a period of time can be accomplished with

tweening. e) Adobe Flash’s scripting language is called . f) The area in which the movie is created is called the . g) Holding down the _Shift_ key while drawing with the Oval tool draws a perfect

. h) By default, shapes in Flash are created with a fill and a(n) . i) tell Flash how a shape or symbol should look at the beginning and end of

an animation. j) A graphic’s transparency can be altered by adjusting its .

**16.2** State whether each of the following is _true_ or _false_. If _false_, explain why. a) A button’s hit state is entered when the button is clicked. b) To draw a straight line in Flash, hold down the _Shift_ key while drawing with the Pencil

tool. c) Motion tweening moves objects within the stage. d) The more frames you give to an animation, the slower it is. e) Flash’s math.random function returns a number between 1 and 100. f) The maximum number of layers allowed in a movie is ten. g) Flash can shape tween only one shape per layer. h) When a new layer is created, it is placed above the selected layer.  

**682** Chapter 16 Adobe® Flash® CS3

i) The **Lasso Tool** selects objects by drawing freehand or straight-edge selection areas. j) The **Ease** value controls an object’s transparency during motion tween.

**Answers to Self-Review Exercises 16.1** a) tweening. b) symbols. c) shape, motion. d) shape. e) ActionScript. f) stage. g) circle. h) stroke. i) keyframes. j) alpha value.

**16.2** a) False. The down state is entered when the button is clicked. b) True. c) True. d) True. e) False. Flash’s math.random function returns a number greater than or equal to 0 and less than 1. f) False. Flash allows an unlimited number of layers for each movie. g) False. Flash can tween as many shapes as there are on a layer. The effect is usually better when the shapes are placed on their own layers. h) True. i) True. j) False. The **Ease** value controls the acceleration of a tween animation.

**Exercises 16.3** Using the combination of one movie-clip symbol and one button symbol to create a navi- gation bar that contains four buttons, make the buttons trigger an animation (contained in the mov- ie clip) when the user rolls over the buttons with the mouse. Link the four buttons to www.nasa.gov, www.w3c.org, www.flashkit.com and www.cnn.com.

**16.4** Download and import five WAV files from www.coolarchive.com. Create five buttons, each activating a different sound when it is pressed.

**16.5** Create an animated mask that acts as a spotlight on an image. First, import the file arches.jpg from the images folder in the Chapter 16 examples directory. Then, change the back- ground color of the movie to black. Animate the mask in the layer above to create a spotlight effect.

**16.6** Create a text “morph” animation using a shape tween. Make the text that appears in the first frame of the animation change into a shape in the last frame. Make the text and the shape dif- ferent colors.

**16.7** Give a brief description of the following terms: a) symbol b) tweening c) ActionScript d) **Frame rate** e) **Library** panel f) masking g) context-sensitive **Properties** window h) **Bandwidth Profiler** i) **Frame Label**

**16.8** Describe what the following file extensions are used for in Flash movie development. a) .fla

b) .swf

c) .exe

d) .html  

17 Adobe® Flash® CS3: Building an Interactive Game

**O B J E C T I V E S** In this chapter you’ll learn:

■ Advanced ActionScript 3 in Flash CS3.

■ How to build on Flash CS3 skills learned in Chapter 16.

■ The basics of object-oriented programming in Flash CS3.

■ How to create a functional, interactive Flash game.

■ How to make objects move in Flash.

■ How to embed sound and text objects into a Flash movie.

■ How to detect collisions between objects in Flash.

**_Knowledge must come through action._ —Sophocles**

**_It is circumstance and proper timing that give an action its character and make it either good or bad._ —Agesilaus**

**_Life’s but a walking shadow, a poor player that struts and frets his hour upon the stage and then is heard no more: it is a tale told by an idiot, full of sound and fury, signifying nothing._ —William Shakespeare**

**_Come, Watson, come! The game is afoot._ —Sir Arthur Conan Doyle**

**_Cannon to right of them, Cannon to left of them, Cannon in front of them Volley’d and thunder’d._ —Alfred, Lord Tennyson**  

**684** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game **O**

**u tl**

**in e**

**17.1 Introduction** While Adobe Flash CS3 is useful for creating short animations, it is also capable of build- ing large, interactive applications. In this chapter, we build a fully functional interactive video game. First, download the Chapter 17 examples from www.deitel.com/books/

iw3htp4. Then, open FullCannon.swf and run the completed game. In the cannon game, the player has a limited amount of time to hit every part of a moving target. Hitting the target increases the remaining time, and missing the target or hitting the blocker decreases it. Some elements of the FullCannon.swf game are not discussed in the body of the chap- ter, but are presented as supplementary exercises. This case study will sharpen the Flash skills you acquired in Chapter 16 and introduce you to more advanced ActionScript. For this case study, we assume that you are comfortable with the material on Flash in Chapter 16. The completed game should run similar to what is shown in Fig. 17.1. Notice how in

**17.1** Introduction **17.2** Object-Oriented Programming **17.3** Objects in Flash **17.4** Cannon Game: Preliminary Instructions and Notes **17.5** Adding a Start Button **17.6** Creating Moving Objects **17.7** Adding the Rotating Cannon **17.8** Adding the Cannonball **17.9** Adding Sound and Text Objects to the Movie

**17.10** Adding the Time Counter **17.11** Detecting a Miss **17.12** Adding Collision Detection **17.13** Finishing the Game **17.14** ActionScript 3.0 Elements Introduced in This Chapter

Summary | Terminology | Self-Review Exercises | Answers to Self-Review Exercises | Exercises

**Fig. 17.1** | Ball fired from the cannon and hitting the target. (Part 1 of 3.)

a)  

17.1 Introduction **685**

**Fig. 17.1** | Ball fired from the cannon and hitting the target. (Part 2 of 3.)

b)

Dotted arrows show direction of blocker and target motion

c)

c)

d)  

**686** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

Fig. 17.1(c), before the ball collides with the target, the timer displays 9 seconds on the clock. Once the topmost part of the target is hit, 5 seconds are added onto the clock but the clock displays only 13 seconds in Fig. 17.1(d). This is because one second has already passed in this duration, causing the timer to decrease from 14 to 13.

**17.2 Object-Oriented Programming ActionScript 3.0** is an object-oriented scripting language that closely resembles JavaScript. The knowledge you gained from the JavaScript treatment in Chapters 6–11 will help you understand the ActionScript used in this case study.

An ActionScript class is a collection of characteristics known as **properties** and behav- iors known as **functions**. You can create your own classes or use any of Flash’s predefined classes. A symbol stored in the **Library** is a class. A class can be used to create many objects. For example, when you created the rotating-book movie clips in the preloader exercise in Chapter 16, you created a class. Dragging a symbol from the **Library** onto the stage created an instance (object) of the class. Multiple instances of one class can exist on the stage at the same time. Any changes made to an individual instance (resizing, rotating, etc.) affect only that one instance. Changes made to a class (accessed through the **Library**), however, affect every instance of the class.

**17.3 Objects in Flash** In this section, we introduce object-oriented programming in Flash. We also demonstrate dynamic positioning (i.e., moving an object). We create two boxes. Each time you click on the left box, the right box will move to the left.

Start by creating a new Flash document named Box.fla. Set the movie’s dimensions to 230 px wide and 140 px high. On the stage, draw a 100-px-wide blue box with a black

**Fig. 17.1** | Ball fired from the cannon and hitting the target. (Part 3 of 3.)

e)  

17.3 Objects in Flash **687**

outline and convert it into a movie-clip symbol. You can name this symbol **box**, but that is not necessary. Next, select the box on the stage and delete it, leaving the stage empty. This step ensures that the box will be added using the ActionScript code and that the box is not already on the stage. Now, create a new **ActionScript File** from the **File > New** menu, save it as BoxCode.as in the same directory as Box.fla, and add the code in Fig. 17.3.

The properties x and y refer to the respective _x-_ and _y-_coordinates of the boxes. The two imports (lines 5–6) at the top of the code allow for the code to utilize those two classes, which in this case are MouseEvent and Sprite, both of which are built-in Flash classes. Inside the class, the two Box instances are declared. By declaration of the two Box objects at the beginning of the class (lines 11–12), they become instance variables and have scope through the entire class. Once the boxes have been allocated positions (lines 18–21), they must be placed on the stage using the addChild function (lines 23–24). The function han-

dleClick is called every time the user clicks box1**.** The addEventListener function, which is invoked by box1, specifies that handleClick will be called whenever box1 is clicked (line 27).

**Fig. 17.2** | Dynamic positioning.

**1** // Fig. 17.2: BoxCode.as **2** // Object animation in ActionScript. **3** package **4** { **5** import flash.events.MouseEvent; // import MouseEvent class **6** import flash.display.Sprite; // import Sprite class **7 8** public class BoxCode extends Sprite **9** {

**10** // create two new box objects **11** public var box1 = new Box(); **12** public var box2 = new Box(); **13 14** // initialize Box coordinates, add Boxes **15** // to the stage and register MOUSE\_DOWN event handler **16** public function BoxCode() : void **17** { **18** box1.x = 15; // set box1's x-coordinate **19** box1.y = 20; // set box1's y-coordinate **20** box2.x = 115; // set box2's x-coordinate **21** box2.y = 20; // set box2's y-coordinate

**Fig. 17.3** | Object animation in ActionScript. (Part 1 of 2.)  

**688** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

To test the code, return to Box.fla. In the **Library** panel, right click the Box symbol and select **Linkage**. In the pop-up box, check off the box next to **Export for ActionScript** and type Box in the space provided next to **Class**. Ignore Flash’s warning that a definition for this class doesn’t exist in the classpath. Once you return to the stage, go to the **Property Inspector** panel and in the space next to **Document Class**, type BoxCode and press _Enter_. Now, the BoxCode ActionScript file has been linked to this specific Flash document. Type _<Ctrl>-Enter_ to test the movie.

**17.4 Cannon Game: Preliminary Instructions and Notes** Open the template file named CannonTemplate.fla from Chapter 17’s examples folder. We’ll build our game from this template. For this case study, the graphics have already been created so that we can focus on the ActionScript. We created all the images using Flash. Chapter 16 provides a detailed coverage of Flash’s graphical capabilities. Take a minute to familiarize yourself with the symbols in the **Library**. Note that the **target** movie clip has movie clips within it. Also, the **ball**, **sound**, **text** and **scoreText** movie clips have stop actions and labels already in place. Throughout the game, we play different sections of these movie clips by referencing their frame labels. The stop action at the end of each section ensures that only the desired animation will be played.

**_Labeling Frames_** Before writing any ActionScript to build the game, we must label each frame in the main timeline to represent its purpose in the game. First, add a keyframe to frames 2 and 3 of the **Labels** layer. Select the first frame of the **Labels** layer and enter **intro** into the **Frame Label** field in the **Property Inspector**. A flag should appear in the corresponding box in the **timeline**. Label the second frame **game** and the third frame **end**. These labels will provide useful references as we create the game.

**_Using the Actions Layer_** In our game, we use an **Actions** layer to hold any ActionScript attached to a specific frame. ActionScript programmers often create an **Actions** layer to better organize Flash movies.

**22 23** addChild( box1 ); // add box1 to the stage **24** addChild( box2 ); // add box2 to the stage **25 26** // handleClick is called when box1 is clicked **27** box1.addEventListener( MouseEvent.MOUSE\_DOWN, handleClick ); **28** } // end BoxCode constructor **29 30** // move box2 5 pixels to the left whenever box1 is clicked **31** private function handleClick( args : MouseEvent ) **32** { **33** box2.x -= 5; **34** } // end function handleClick **35** } // end class BoxCode **36** } // end package

**Fig. 17.3** | Object animation in ActionScript. (Part 2 of 2.)  

17.5 Adding a Start Button **689**

Add keyframes in the second and third frame of the **Actions** layer, and place a stop func- tion in all three frames.

**17.5 Adding a Start Button** Most games start with an introductory animation. In this section, we create a simple start- ing frame for our game (Fig. 17.1(a)).

Select the first frame of the **Intro/End** layer. From the **Library**, drag the **introText** movie clip and the **Play** button onto the stage. Resize and position both objects any way you like. Set the **Play** button’s instance name to **playButton**. Don’t worry that **introText** is invisible when deselected; it will fade in when the movie is viewed.

Test the movie. The text effects were created by manipulating alpha and gradient values with shape tweening. Explore the different symbols in the **Library** to see how they were created. Now, in the first frame of the **Actions** layer, add the code shown in Fig. 17.4 in the **Actions** panel. When the **Play** button is clicked, the movie will now play the second frame, labeled **game**.

**17.6 Creating Moving Objects _Adding the Target_** In our game, the player’s goal is to hit a moving target, which we create in this section. Create a keyframe in the second frame of the **Target** layer, then drag an instance of the **tar- get** movie clip from the **Library** onto the stage. Using the **Property Inspector**, position the target at the _x-_ and _y-_coordinates 490 and 302, respectively. The position (0, 0) is located in the upper-left corner of the screen, so the target should appear near the lower-right cor- ner of the stage. Give the **target** symbol the instance name **target**. Right click the **target** symbol in the **Library** and select **Linkage**. In the box that pops up, select **Export for Action- Script** and enter Target in the **Class** field.

The **target** symbol is now linked with a class named Target. Create a new **ActionScript File** from the **File > New** menu. Save this file immediately and give it the name Target.as. This will serve as the Target class definition. In this file, add the code in Fig. 17.5.

The Target class has four instance variables—the speed of the Target (speed), the direction of the Target (upDown), the number of times the Target has been hit by the ball (hitCounter), and the Timer variable (moveTargetTimer). We specify that moveTarget- Timer is a Timer using the colon syntax in line 18. The first parameter of the Timer con- structor is the delay between timer events in milliseconds. The second parameter is the

**1** // Fig. 17.4: Handle playButton click event. **2 3** // call function playFunction when playButton is clicked **4** playButton.addEventListener( MouseEvent.MOUSE\_DOWN, playFunction ); **5 6** // go to game frame **7** function playFunction( event : MouseEvent ) : void **8** { **9** gotoAndPlay( "game" );

**10** } // end function playFunction

**Fig. 17.4** | Handle playButton click event.  

**690** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

**1** // Fig. 17.5: Target.as **2** // Move target, set direction and speed, **3** // and keep track of number of blocks hit. **4** package **5** { **6** // import relevant classes **7** import flash.display.MovieClip; **8** import flash.events.TimerEvent; **9** import flash.utils.Timer;

**10 11** public class Target extends MovieClip **12** { **13** var speed; // speed of Target **14** var upDown; // direction of Target **15** var hitCounter; // number of times Target has been hit **16 17** // timer runs indefinitely every 33 ms **18** var moveTargetTimer : Timer = new Timer ( 33, 0 ); **19 20** // register function moveTarget as moveTargetTimer’s **21** // event handler, start timer **22** public function Target() : void **23** { **24** moveTargetTimer.addEventListener ( **25** TimerEvent.TIMER, moveTarget ); **26** moveTargetTimer.start(); // start timer **27** } // end Target constructor **28 29** // move the Target **30** private function moveTarget( t : TimerEvent ) **31** { **32** // if Target is at the top or bottom of the stage, **33** // change its direction **34** if ( y > 310 ) **35** { **36** upDown = -1; // change direction to up **37** } // end if **38 39** else if ( y < 90 ) **40** { **41** upDown = 1; // change direction to down **42** } // end else **43 44** y += (speed \* upDown); // move target **45** } // end function moveTarget **46 47** // set direction of the Target **48** public function setUpDown( newUpDown : int ) **49** { **50** upDown = newUpDown; **51** } // end function setUpDown **52**

**Fig. 17.5** | Move target, set direction and speed, and track number of blocks hit. (Part 1 of 2.)  

17.6 Creating Moving Objects **691**

number of times the Timer should repeat. A value of 0 means that the Timer will run inde- finately. The constructor function (lines 22–27) activates moveTargetTimer, which in turn calls the moveTarget function (lines 30–45) to move the Target every 33 millisec- onds. The moveTarget function contains a nested if…else statement (lines 34–42) that sets upDown to -1 (up) when the target reaches the bottom of the screen and sets upDown to 1 (down) when it reaches the top of the screen. It does this by testing if the target’s _y-_coor- dinate is greater than 310 or less than 90. \[_Note:_ The property y refers specifically to the _y-_coordinate of the small white circle that appears on the main stage.\] Since the stage is 400 pixels high and the target is 180 pixels high (half of which is below its _y_\-coordinate), when the target’s _y_\-coordinate is equal to 310, the bottom end of the target is even with bottom of the stage. Similar logic applies when the target is at the top of the stage.

**53** // get direction of the Target **54** public function getUpDown() : int **55** { **56** return upDown; **57** } // end function getUpDown **58 59** // set speed of the Target **60** public function setSpeed ( newSpeed : int ) **61** { **62** speed = newSpeed; **63** } // end function setSpeed **64 65** // get speed of the Target **66** public function getSpeed() : int **67** { **68** return speed; **69** } // end function getSpeed **70 71** // set the number of times the Target has been hit **72** public function setHitCounter( newCount : int ) **73** { **74** hitCounter = newCount; **75** } // end setHitCounter function **76 77** // return the number of times the Target has been hit **78** public function getHitCounter () : int **79** { **80** return hitCounter; **81** } // end function getHitCounter **82 83** // stop moveTargetTimer **84** public function stopTimers() : void **85** { **86** moveTargetTimer.stop(); **87** } **88** } // end class Target **89** } // end package

**Fig. 17.5** | Move target, set direction and speed, and track number of blocks hit. (Part 2 of 2.)  

**692** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

Line 44 moves the target by incrementing its _y_\-coordinate by the result of getSpeed() \* upDown. The remaining functions in this class are the public _get_ and _set_ functions for the upDown, speed and hitCounter variables. These allow us to retrieve and set the values out- side of the class. The stopTimers function allows us to stop the moveTargetTimer from outside of the class.

Now, we can enable the target on stage, **target**, to move vertically simply by adding the calling methods setSpeed, setUpDown and setHitCounter in the second frame of the **Actions** layer:

target.setSpeed( 8 ); target.setUpDown( -1 ); target.setHitCounter( 0 );

Now, test the movie to see the target oscillate between the top and bottom of the stage.

**_Adding the Blocker_** An additional moving object is used to block the ball, increasing the game’s difficulty. In- sert a keyframe in the second frame of the Blocker layer and drag an instance of the **block- er** object from the **Library** onto the stage. Give this **blocker** instance the name **blocker**. Set the blocker instance’s _x-_ and _y-_coordinates to 415 and 348, respectively. Create a Block-

er.as file and class and link it to the **blocker** symbol. In this file, add the code in Fig. 17.6.

**1** // Fig. 17.6: Blocker.as **2** // Set position and speed of Blocker. **3** package **4** { **5** // import relevant classes **6** import flash.display.MovieClip; **7** import flash.events.TimerEvent; **8** import flash.utils.Timer; **9**

**10** public class Blocker extends MovieClip **11** { **12** var speed : int; // speed of Blocker **13** var upDown : int; // direction of Blocker **14** var moveBlockerTimer : Timer = new Timer ( 33, 0 ); **15 16** // call function moveBlocker as moveBlockerTimer event handler **17** public function Blocker() : void **18** { **19** moveBlockerTimer.addEventListener ( **20** TimerEvent.TIMER, moveBlocker ); **21** moveBlockerTimer.start(); **22** } // end Blocker constructor **23 24** // move the Blocker **25** private function moveBlocker( t : TimerEvent ) **26** { **27** // if Blocker is at the top or bottom of the stage, **28** // change its direction

**Fig. 17.6** | Set position and speed of Blocker. (Part 1 of 2.)  

17.6 Creating Moving Objects **693**

This code is very similar to that of the Target.as. Add the following code in the second frame of the **Actions** layer to set the speed and direction of the blocker:

blocker.setSpeed( 5 ); blocker.setUpDown( 1 );

Test the movie. The blocker and target should both oscillate at different speeds (Fig. 17.7).

**29** if ( y > 347.5 ) **30** { **31** upDown = -1; **32** } // end if **33 34** else if ( y < 52.5 ) **35** { **36** upDown = 1; **37** } // end else **38 39** y += getSpeed() \* upDown; **40** } // end function moveBlocker **41 42** // set speed for the Blocker **43** public function setSpeed ( v : int ) **44** { **45** speed = v; **46** } // end function setSpeed **47 48** // get speed of the Blocker **49** public function getSpeed() : int **50** { **51** return speed; **52** } // end function getSpeed **53 54** // set direction for the Blocker **55** public function setUpDown( newUpDown : int ) **56** { **57** upDown = newUpDown; **58** } // end function setUpDown **59 60** // get direction of the Blocker **61** public function getUpDown() : int **62** { **63** return upDown; **64** } // end function getUpDown **65 66** // stop moveBlockerTimer **67** public function stopTimers() : void **68** { **69** moveBlockerTimer.stop(); **70** } **71** } // end class Blocker **72** } // end package

**Fig. 17.6** | Set position and speed of Blocker. (Part 2 of 2.)  

**694** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

**17.7 Adding the Rotating Cannon** Many Flash applications include animation that responds to mouse-cursor motions. In this section, we discuss how to make the cannon’s barrel follow the cursor, allowing the player to aim at the moving target. The skills you learn here can be used to create many effects that respond to cursor movements.

Add a keyframe to the second frame of the **Cannon** layer and drag the **cannon** object from the **Library** onto the stage. Set its _x_\- and _y_\-coordinates to 0 and 200. Give this cannon instance the name **cannon**. The cannon should appear in the middle of the stage’s left edge (Fig. 17.8).

**_Coding the Cannon’s Rotation_** Now, add the code from Fig. 17.9 to the second frame of the **Actions** layer. This code ro- tates the cannon barrel to point toward the cursor. The _x-_ and _y-_coordinates of the cursor are directly accessed using the stage.mouseX and stage.mouseY properties. The code ex-

**Fig. 17.7** | Oscillating blocker and target.

**Fig. 17.8** | Cannon position.  

17.7 Adding the Rotating Cannon **695**

ecutes any time the player moves the cursor, so the cannon always points toward the mouse cursor. The addEventListener function of the stage object registers the mouseInHandler function as the event handler of the MOUSE\_MOVE event (line 2). Inside the mouseInHandler function, an if statement (lines 8–9) checks whether the cursor is within the stage. If it is, the code adjusts the cannon’s rotation so that it points toward the cursor (line 13). The **rotation property** (line 13) controls an object’s rotation, assuming its natural orientation to be 0 degrees.

ActionScript’s **Math class** contains various mathematical functions and values that are useful when performing complex operations. For a full list of the Math class’s functions and values, refer to the **Flash Help** in the **Help** menu. We use the Math class to help us compute the rotation angle required to point the cannon toward the cursor.

First, we need to find the cursor’s coordinates relative to the cannon. Subtracting 200 from the cursor’s _y_\-coordinate gives us the cursor’s vertical position, assuming (0, 0) lies at the cannon’s center (Fig. 17.10). We then determine the desired angle of rotation. Note the

**1** // Fig. 17.9: Register mouseInHandler as MOUSE\_MOVE event handler. **2** stage.addEventListener( MouseEvent.MOUSE\_MOVE, mouseInHandler ); **3 4** // rotate cannon when mouse is moved **5** function mouseInHandler( args : MouseEvent ) : void **6** { **7** // rotates cannon if cursor is within stage **8** if ( ( stage.mouseX > 0 ) && ( stage.mouseY > 0 ) && **9** ( stage.mouseX < 550 ) && ( stage.mouseY < 400 ) )

**10** { **11** // adjust cannon rotation based on cursor position **12** var angle = Math.atan2( ( stage.mouseY - 200 ), stage.mouseX ); **13** cannon.rotation = angle \* ( 180 / Math.PI ); **14** } // end if **15** } // end function mouseInHandler

**Fig. 17.9** | Register mouseInHandler as MOUSE\_MOVE event handler.

**Fig. 17.10** | Trigonometry of the **cannon** object.

α

x

y

Actual position (0, 200)

Position relative to cannon (0, 0)

Actual position: (75, 250) Position relative to cannon: (75, 50)  

**696** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

right triangle created by the cannon and the cursor in Fig. 17.10. From trigonometry, we know that the tangent of angle α equals the length of side _y_ divided by side _x_: tan(α) _\= y/x_. We want the value of α, though, not the value of tan(α). Since the arc tangent is the inverse of the tangent, we can rewrite this equation as α = arctan(_y/x_). The Math object provides us with an arc tangent function: Math.atan2(y, x). This function returns a value, in radians, equal to the angle opposite side y and adjacent to side x (line 12). Radians are a type of angle measurement similar to degrees that range from 0 to 2π instead of 0 to 360. To convert from radians to degrees, we multiply by 180/π (line 13). The constant Math.PI provides the value of π. Since this rotation adjustment is performed every time the mouse moves within the stage, the cannon barrel appears to constantly point at the cursor. Test the movie to observe this effect.

**Error-Prevention Tip 17.1** _If your code is not working and no error message displays, ensure that every variable points to the correct object. One incorrect reference can prevent an entire function from operating correctly._17.1

**_Hiding the Cannon Layer_** We won’t make any other changes to the **Cannon** layer. Hide the **Cannon** layer by selecting the **show/hide** selector (dot) in the portion of the **Timeline** to the right of the layer name (Fig. 17.11). A red **x** should appear in place of the dot to indicate that the layer is hidden while editing the movie. The layer will still be visible when the movie is viewed. Clicking the show/hide **x** again makes the **Cannon** layer visible.

**17.8 Adding the Cannonball** In this section, we add the cannonball to our game. Create a keyframe in frame 2 of the **Ball** layer, then drag the **ball** symbol from the **Library** onto the stage. Give the **ball** object the instance name **ball**. Notice that the ball instance appears as a small white circle on the stage. This circle is Flash’s default appearance for a movie clip that has no graphic in its first frame. The ball will appear hidden beneath the cannon when the movie is viewed, be- cause it is on a lower layer. Provide the Ball object with the _x-_ and _y-_coordinates 0 and 200, respectively. This places the ball right under the cannon, so that when the ball is fired, it appears to have been fired from inside the cannon.

**_Initializing the Ball’s Motion Variables_** Link the **ball** symbol to a Ball class, as we did previously with the Target and Blocker

classes. Next, create a new ActionScript 3.0 file named Ball.as and add the code shown in Fig. 17.12 to the file.

**Fig. 17.11** | Using selectors to show/hide layers.

Show/Hide selectors Hidden layer  

17.8 Adding the Cannonball **697**

This code defines the Ball class. It has three properties—the speed in the _x-_direction, speedX (line 12), the speed in the _y-_direction, speedY (line 13), and a timer that moves the ball, moveBallTimer (line 16). Since the speed in the _x_\-direction will be only integer values, it is of type int. However, the speed in the _y_\-direction is also dependent on fire-

Ratio, which can be a decimal value, and thus, speedY is of type Number, which is Action- Script 3’s floating-point variable type. The class definition also creates the _get_ and _set_ functions for these properties. When the Ball object is created, the Ball constructor func- tion starts the moveBallTimer, which calls the moveBall function every 33 ms. Function moveBall (lines 28–32) increments the _x-_ and _y-_coordinates by speedX and speedY. The stopTimers function allows us to stop the moveBallTimer from outside of the class.

**1** // Fig. 17.12: Ball.as **2** // Move ball and set speed. **3** package **4** { **5** // import relevant classes **6** import flash.display.MovieClip; **7** import flash.events.TimerEvent; **8** import flash.utils.Timer; **9**

**10** public class Ball extends MovieClip **11** { **12** var speedX : int; // speed in x-direction **13** var speedY : Number; // speed in y-direction **14 15** // Create Timer object to move ball **16** var moveBallTimer : Timer = new Timer( 33, 0 ); **17 18** // Ball constructor starts moveBallTimer **19** public function Ball() : void **20** { **21** // call function moveBall as moveBallTimer event handler **22** moveBallTimer.addEventListener( **23** TimerEvent.TIMER, moveBall ); **24** moveBallTimer.start(); **25** } // end Ball constructor **26 27** // update the x and y coordinates using the specific speeds **28** private function moveBall( t : TimerEvent ) **29** { **30** x += speedX; **31** y += speedY; **32** } // end function moveBall **33 34** // set speed in x direction **35** public function setSpeedX( v : int ) **36** { **37** speedX = v; **38** } // end function setSpeedX **39**

**Fig. 17.12** | Move ball and set speed. (Part 1 of 2.)  

**698** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

**_Scripting the Ball’s Motion_** In the second frame of the **Actions** layer, add the code in Fig. 17.13. The new code moves the ball along a straight line in the direction the cannon was pointing when the mouse was clicked.

**40** // get speed in x direction **41** public function getSpeedX() : int **42** { **43** return speedX; **44** } // end function getSpeedX **45 46** // set speed in y direction **47** public function setSpeedY( v : int, fireRatio : Number ) **48** { **49** speedY = v \* fireRatio; **50** } // end function setSpeedY **51 52** // get speed in y direction **53** public function getSpeedY() : Number **54** { **55** return speedY; **56** } // end function getSpeedY **57 58** public function stopTimers() : void **59** { **60** moveBallTimer.stop(); **61** } // end function stopTimer **62** } // end class Ball **63** } // end package

**1** // Fig. 17.13: Fire ball on click event. **2** var firing : Boolean = false; // is ball firing? **3** var exploding : Boolean = false; // is ball exploding? **4** var fireRatio : Number = 0; // firing direction of ball **5** var speed : int = 30; // speed of ball **6** ball.setSpeedX( 0 ); **7** ball.setSpeedY( 0, 0 ); **8 9** // register function mouseDownHandler as MOUSE\_DOWN event handler

**10** stage.addEventListener( MouseEvent.MOUSE\_DOWN, mouseDownHandler ); **11 12** function mouseDownHandler( args : MouseEvent ) : void **13** { **14** // if the mouse is within the stage and the ball has not been fired or **15** // exploded yet, fire ball toward mouse cursor **16** if ( ( !firing ) && ( !exploding ) && ( stage.mouseX > 0 ) && **17** ( stage.mouseY > 0 ) && ( stage.mouseX < 550 ) && **18** ( stage.mouseY < 400 ) ) **19** {

**Fig. 17.13** | Fire ball on click event. (Part 1 of 2.)

**Fig. 17.12** | Move ball and set speed. (Part 2 of 2.)  

17.9 Adding Sound and Text Objects to the Movie **699**

This code initializes four variables—firing, exploding, fireRatio and speed (lines 2–5). Variables firing and exploding are set to false to signify that the ball is not moving or exploding. Later, we will set exploding to true and play a brief explosion ani- mation upon collision with the target or the blocker. Variables fireRatio and speed

specify the ball’s firing direction and speed, respectively. The function addEventListener

(line 10) registers the function mouseDownHandler (lines 12–25) as the event handler for the stage’s MOUSE\_DOWN event. The if statement in the mouseDownHandler function (lines 16–24) checks that the ball is not currently in flight (!firing) or exploding (!exploding), and the mouse is within the stage (lines 16–18). If the condition evaluates to true, firing is set to true (line 20), and fireRatio is set to the mouse’s _y_\-coordinate (relative to the cannon) divided by its _x_\-coordinate (line 21). This fireRatio will move the ball toward the cursor’s position when it is fired. Lines 22–23 set the ball’s speed in the _x_\-direction to speed, and the ball’s speed in the _y_\-direction to speed \* fireRatio. The expression speed \* fireRatio returns the appropriate change in y based on the given change in x

(speed).

**17.9 Adding Sound and Text Objects to the Movie** Next, we add sound and text to our movie. Add a keyframe to frame 2 of the **Text** layer and drag the **text** symbol from the **Library** onto the stage. Note that the **text** object, like the ball, is represented by a small white dot. This dot will not appear when the movie is viewed. Position the **text** symbol in the center of the stage at coordinate (275, 200), and name the instance **text**. Then, add a keyframe to the second frame of the **Sounds** and **ScoreText** layers, and add an instance of the **sound** and **scoreText** objects, respectively. Center both objects on the stage and give them instance names matching their symbol names—**sound** and **scoreText.** Lock these three layers by clicking the **lock/unlock** selector (dot) to the right of the layer name in the timeline (Fig. 17.14). When a layer is locked,

**20** firing = true; **21** fireRatio = ( stage.mouseY - 200 ) / stage.mouseX; **22** ball.setSpeedX( speed ); **23** ball.setSpeedY( speed, fireRatio ); **24** } // end if **25** } // end function mouseDownHandler

**Fig. 17.14** | **Lock/Unlock** layers.

**Fig. 17.13** | Fire ball on click event. (Part 2 of 2.)

**Lock/Unlock** selector  

**700** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

its elements are visible, but they cannot be edited. This allows you to use one layer’s ele- ments as visual references for designing another layer, while ensuring that no elements are moved unintentionally. To unlock a layer, click the lock symbol to the right of the layer name in the **Timeline**.

All the necessary sound and text capabilities have now been added to the game. In the next section, we add the time counter to the game.

**17.10 Adding the Time Counter** What makes the cannon game challenging is the limited amount of time the player has to completely destroy the target. Time, whether increasing or decreasing, is an important aspect of many games and applications. In this section, we discuss adding a time counter that decreases as the game progresses.

**_Adding the Time Box_** In the cannon game, the player has a limited amount of time to destroy every section of the target. The amount of time remaining appears in a dynamic text box in the bottom- left corner of the screen. To create this dynamic text box, first add a keyframe to frame 2 of the **Time** layer and add an instance of the **time** symbol to the stage**.** Position it at coor- dinate (100, 365), which should be in the lower-left corner of the stage. Name the instance **time**. Open the **time** symbol from the **Library** and select the text field. In the **Property In- spector**, change the text type to **Dynamic Text** and name the instance **timeText**. Return to the main scene, and add the code in Fig. 17.15 to the **Actions** panel in the second frame.

The variable timer is initialized to 10 (line 2). This variable will hold the amount of time remaining. The countTimer (lines 3–7) calls the countDown function (lines 9–18) each second. The countDown function decrements the timer by 1, and also sets the text

of the time symbol’s timeText element to "TIME: ", followed by the current value of timer.

**1** // Fig. 17.15: Timer countdown. **2** var timer = 10; // set initial timer value to 10 seconds **3** var countTimer : Timer = new Timer( 1000, 0 ); **4 5** // call function countDown as countTimer event handler **6** countTimer.addEventListener( TimerEvent.TIMER, countDown ); **7** countTimer.start(); // start Timer **8 9** function countDown( t : TimerEvent )

**10** { **11** \--timer; // decrement timer by 1 every second **12** time.timeText.text = "TIME: " + timer; **13** // player loses game if he/she runs out of time **14** if( ( !firing ) && timer <= 0 ) **15** { **16** gotoAndPlay( "end" ); // call end frame sequence **17** } // end if **18** } // end function countDown

**Fig. 17.15** | Timer countdown.  

17.10 Adding the Time Counter **701**

Lines 14–17 test whether time has run out and the ball is not firing. If the condition is true, the movie will skip to the (empty) end frame.

Test the movie. The time should decrease from 10 to 0. When the time reaches 0, the **end** frame should play. Because none of the functions or objects in the second frame cur- rently exist in the third frame, the timers that are still active will try to call those functions and fail, returning an error message. To fix this, we must first include all of the objects on the stage in the second frame in the third frame. You can do this by inserting a new frame (not keyframe) in the third frame of the **Text**, **ScoreText**, **Sounds**, **Time**, **Cannon**, **Ball**, **Target**, and **Blocker** layers. Next, we must stop all timers and hide most of the elements at the beginning of the third frame. Add the code in Fig. 17.16 to the third frame of the Actions layer.

Lines 2–3 remove the event listeners for the stage’s MOUSE\_MOVE and MOUSE\_DOWN

events, which are no longer needed. Lines 4–7 stop all of the timers that we have used, either by accessing the timer’s stop method directly (line 4), or by accessing the class’s stopTimers method (lines 5–7). Lines 8–13 hide every element on the stage by playing the hidden frame of each element, which is an empty frame.

**_Creating a Final Animation Sequence_** Games generally have a final animation sequence that informs the player of the outcome of the game. In this section, we create a final animation sequence for the game.

First, we must create a winner boolean to keep track of whether the player has won or lost the game. To do this, add the following code to the second frame of the Actions layer.

var winner : Boolean = false; // Keep track of who won

Next, add the code in Fig. 17.17 to the third frame of the Actions layer. This if…else statement checks the winner variable. If winner is true, the **text** movie clip goes to the **win** frame. Otherwise **text** goes to the **lose** frame. Test the movie again. When the time runs out, the **lose** frame, containing the text **Game Over**, should appear on an other- wise blank stage.

**1** // Fig. 17.16: Stops all timers and sends objects into hidden frame. **2** stage.removeEventListener( MouseEvent.MOUSE\_MOVE, mouseInHandler ); **3** stage.removeEventListener( MouseEvent.MOUSE\_DOWN, mouseDownHandler ); **4** countTimer.stop(); **5** blocker.stopTimers(); **6** ball.stopTimers(); **7** target.stopTimers(); **8** blocker.gotoAndPlay( "hidden" ); **9** cannon.gotoAndPlay( "hidden" );

**10** ball.gotoAndPlay( "hidden" ); **11** target.gotoAndPlay( "hidden" ); **12** time.gotoAndPlay( "hidden" ); **13** scoreText.gotoAndPlay( "hidden" );

**Fig. 17.16** | Stops all timers and sends objects into hidden frame.  

**702** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

**17.11 Detecting a Miss** We now add code to the **ball** instance that detects when the ball has moved outside of the stage. First, add the checkBall function in Fig. 17.18 to the second frame of the **Actions** panel.

Lines 5–6 test whether the ball is outside the bounds of the stage. If it is, the checkBallTimer is stopped (line 8), because the ball is no longer in motion and does not need to be checked until it has been fired again. Boolean firing is set to false (line 9). Then, lines 10–12 play the text movie clip’s miss frame, the scoreText movie clip’s minusTwo frame and the sound movie clip’s miss frame. This will display **MISS** and **\-2** on the stage, and play the miss sound. Also, the timer variable is decreased by 2 (line 13). Finally, the Ball object is reset to its starting position and speed (lines 14–17).

In order to check the ball at regular intervals, we create a timer that calls checkBall every 33 ms. First, add the following code to the second frame of the **Actions** layer:

// Check ball at 33-ms intervals var checkBallTimer : Timer = new Timer( 33, 0 );

**1** // Fig. 17.17: Check winner and show "Winner" or "Game Over". **2** if (winner == true) **3** { **4** text.gotoAndPlay( "win" ); **5** } **6 7** else **8** { **9** text.gotoAndPlay( "lose" );

**10** }

**Fig. 17.17** | Check winner and show **Winner** or **Game Over**.

**1** // Fig. 17.18: Detecting a miss. **2** function checkBall ( e : TimerEvent ) **3** { **4** // if ball is not inside stage, go through miss sequence **5** if ( ( ball.x < 0 ) || ( ball.y < 0 ) || ( ball.x > 550 ) || **6** ( ball.y > 400 ) ) **7** { **8** checkBallTimer.stop(); // stop checkBallTimer **9** firing = false; // ball is no longer being fired

**10** text.gotoAndPlay( "miss" ); // display miss on the stage **11** scoreText.gotoAndPlay ( "minusTwo" ); // display "-2" **12** sound.gotoAndPlay ( "miss" ); // miss sound is played **13** timer -= 2; // deduct 2 seconds from timer **14** ball.x = 0; // set ball back to initial x-coordinate **15** ball.y = 200; // set ball back to initial y-coordinate **16** ball.setSpeedX( 0 ); // set ball speed in x-direction to 0 **17** ball.setSpeedY( 0, 0 ); // set ball speed in y-direction to 0 **18** } // end if **19** } // end function checkBall

**Fig. 17.18** | Detecting a miss.  

17.12 Adding Collision Detection **703**

Next, we must start the timer. Since this timer needs to run only after the ball has been fired, we will start the timer in the mouseDownHandler. Insert the following code between lines 13 and 14 of Fig. 17.13.

// call function checkBall as checkBallTimer event handler checkBallTimer.addEventListener( TimerEvent.TIMER, checkBall ); checkBallTimer.start(); // start Timer

We must also stop this timer at the end of the game by adding the following code to the third frame of the Actions layer.

checkBallTimer.stop();

Test the movie with your computer’s sound turned on. At this point, every fired ball should travel off the stage and count as a miss. In the next few sections, we discuss how to add features that allow the player to gain time and win the game.

**17.12 Adding Collision Detection** Before we add collision detection to the target and blocker, we add a function that handles the actions common to all of our collisions. Add the onBallContact function (Fig. 17.19) to the second frame of the Actions layer.

**1** // Fig. 17.19: Common actions after collision. **2** function onBallContact( timeChange : int ) **3** { **4** // adjust variables to play exploding sequence **5** exploding = true; **6** firing = false; **7** timer += timeChange; // add the amount of time passed as parameter **8** ball.gotoAndPlay( "explode" ); // explode the Ball object **9** ball.setSpeedX( 0 ); // set ball speed in x-direction to 0

**10** ball.setSpeedY( 0, 0 ); // set ball speed in y-direction to 0 **11 12** // give explode animation time to finish, then call resetBall **13** explodeTimer.addEventListener( TimerEvent.TIMER, resetBall ); **14** explodeTimer.start(); **15 16** // play appropriate sound and text based on timeChange **17** if ( timeChange < 0 ) **18** { **19** sound.gotoAndPlay( "blocked" ); **20** text.gotoAndPlay( "blocked" ); **21** if ( timeChange == -5 ) **22** { **23** scoreText.gotoAndPlay( "minusFive" ); **24** } // end if **25** } // end if **26 27** else if ( timeChange >= 0 ) **28** {

**Fig. 17.19** | Common actions after collision. (Part 1 of 2.)  

**704** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

The onBallContact function takes a timeChange parameter that specifies how many seconds to add or remove from the time remaining. Line 7 adds timeChange to the timer. Lines 8–10 tell the ball to explode and stop. Lines 13–14 start a timer that calls the reset- Ball function after completion. We must create this timer by adding the following code to the second frame of the **Actions** layer:

// Delay for ball explosion var explodeTimer : Timer = new Timer( 266, 1 );

This timer gives the ball’s explode animation time to complete before it calls reset- Ball. We must stop this timer at the end of the game, by adding the following code to the third frame of the **Actions** layer.

explodeTimer.stop();

The resetBall function (Fig. 17.20) sets exploding to false (line 4), then resets the ball to the starting frame and position (lines 5–7). Add the resetBall function to the second frame of the Actions layer.

The onBallContact function (Fig. 17.19) also plays a frame from the sound, text and scoreText movie clips, depending on the timeChange, to notify the player whether

**29** sound.gotoAndPlay( "hit" ); **30** text.gotoAndPlay( "hit" ); **31 32** // increment the hitCounter by 1 **33** target.setHitCounter( target.getHitCounter() + 1 ); **34 35** if ( target.getHitCounter() >= 5 ) **36** { **37** // if target has been hit 5 times, then declare player winner **38** winner = true; **39** gotoAndPlay( "end" ); // go to third frame **40** } // end if **41 42** if ( timeChange == 5 ) **43** { **44** scoreText.gotoAndPlay( "plusFive" ); **45** } // end if **46 47** else if ( timeChange == 10 ) **48** { **49** scoreText.gotoAndPlay( "plusTen" ); **50** } // end else **51 52** else if ( timeChange == 20 ) **53** { **54** scoreText.gotoAndPlay( "plus20" ); **55** } // end else **56** } // end else **57** } // end function onBallContact

**Fig. 17.19** | Common actions after collision. (Part 2 of 2.)  

17.12 Adding Collision Detection **705**

they hit a target or a blocker, and to show the player how many points they gained or lost (lines 17–56). Lines 35–40 test whether the target has been hit 5 times. If it has, winner is set to true and the end frame is played.

**_Adding Collision Detection to the Target and Blocker_** Flash has a built-in **collision detection** function that determines whether two objects are touching. The function _object1_.**hitTestObject**(_object2_) returns true if any part of _object1_ touches _object2_. Many games must detect collisions between moving objects to control game play or add realistic effects. In this game, we rely on collision detection to determine if the ball hits either the blocker or the target.

In this section, we add code to **target** and **blocker** that increases or decreases your remaining time, depending on what you hit. Note that the **target** object comprises five instances of three different symbols: one **targetCenter** (white), two **targetMiddle**s (gray) and two **targetOut**s (red). The closer to the center the **target** is hit, the more seconds get added to the total time.

Add the collision detection function shown in Fig. 17.21 to the second frame of the **Actions** layer.

**1** // Fig. 17.20: Reset the ball to its original position. **2** function resetBall( t : TimerEvent ) **3** { **4** exploding = false; // set the ball explosion status to false **5** ball.gotoAndPlay( "normal" ); **6** ball.x = 0; // set x-coordinate to original position **7** ball.y = 200; // set y-coordinate to original position **8** } // end function resetBall

**Fig. 17.20** | Reset the ball to its original position.

**1** // Fig. 17.21: Detect collision using hitTestObject. **2** function collisionDetection() **3** { **4** if ( target.out1.hitTestObject( ball ) && ( !exploding ) ) **5** { **6** onBallContact ( 5 ); // hit upper outer part of target **7** target.out1.gotoAndPlay( "hit" ); **8** } // end if **9**

**10** else if ( target.mid1.hitTestObject( ball ) && ( !exploding ) ) **11** { **12** onBallContact ( 10 ); // hit upper middle part of target **13** target.mid1.gotoAndPlay( "hit" ); **14** } // end else **15 16** else if ( target.center.hitTestObject( ball ) && ( !exploding ) ) **17** { **18** onBallContact ( 20 ); // hit center of target **19** target.center.gotoAndPlay( "hit" ); **20** } // end else

**Fig. 17.21** | Detect collision using hitTestObject. (Part 1 of 2.)  

**706** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

Function collisionDetection consists of an if…else statement that tests whether the ball has hit the blocker or one of the parts of the target. It ensures that the ball is not currently exploding, to prevent the ball from hitting more than one part of the target at a time. If these conditions return true, the onBallContact function is called with the appro- priate number of seconds to add to or subtract from the timer as the parameter. For each of the parts of the target, that part’s hit animation is played upon being hit. For the blocker, an if statement (lines 39–43) checks whether time has run out (line 39). If it has, the winner is set to false and the movie moves to the end frame.

To run the collisionDetection function at a regular interval, we will call it from the checkBall function. Add the following at the beginning of the checkBall function.

collisionDetection();

Now test the movie. The target pieces should disappear when hit by the ball, as shown in Fig. 17.1. The player can now gain time by hitting the target and lose time by hitting the blocker. The ball should explode in the position where it hit the blocker, then reset to under the cannon, allowing the player to fire again.

**17.13 Finishing the Game** Open the **text** symbol’s editing stage from the **Library**. An action that plays the frame la- beled **intro** in the main scene has already been attached to the last frame of the sections labeled **win** and **lose**. These actions, which were included in the original CannonTem-

plate.fla file, cause the game to restart after the final text animation is played.

**21 22** else if ( target.mid2.hitTestObject( ball ) && ( !exploding ) ) **23** { **24** onBallContact ( 10 ); // hit lower middle part of target **25** target.mid2.gotoAndPlay( "hit" ); **26** } // end else **27 28** else if ( target.out2.hitTestObject( ball ) && ( !exploding ) ) **29** { **30** onBallContact ( 5 ); // hit lower outer part of target **31** target.out2.gotoAndPlay( "hit" ); **32** } // end else **33 34** else if ( blocker.hitTestObject( ball ) && ( !exploding ) ) **35** { **36** onBallContact ( -5 ); **37 38** // if timer runs out, player loses **39** if ( timer < 0 ) **40** { **41** winner = false; **42** gotoAndPlay( "end" ); **43** } // end if **44** } // end else **45** } // end function collisionDetection

**Fig. 17.21** | Detect collision using hitTestObject. (Part 2 of 2.)  

17.14 ActionScript 3.0 Elements Introduced in This Chapter **707**

To change the game’s difficulty, adjust speed in the **blocker** and/or the **target**. Adjusting the time change in the timeText instance also changes the difficulty (a smaller decrement gives more time).

Congratulations! You have created an interactive Flash game. Now you can play the completed version. In the chapter exercises, you can improve the game and add additional levels of difficulty.

**17.14 ActionScript 3.0 Elements Introduced in This Chapter** Figure 17.22 lists the Flash ActionScript 3.0 elements introduced in this chapter, which are useful in building complex Flash movies.

Element Description

_object_.x Property that refers to _object_’s _x_\-coordinate.

_object_.y Property that refers to _object_’s _y_\-coordinate.

addChild(_object_) Function that adds the object to the stage.

addEventListener(

_event_, _function_) Function that invokes another function in response to an event.

mouseX Mouse’s _x_\-coordinate property.

mouseY Mouse’s _y_\-coordinate property.

_object_.rotation Property that rotates the _object_.

stage Manipulates objects on the stage.

_object1_.hitTestObject( _object2_ )

Built-in function that determines when two objects collide

Math Built-in object that contains useful functions and properties (refer to Flash’s ActionScript Dictionary for a full list).

**Fig. 17.22** | ActionScript 3.0 elements.

**Summary _Section 17.1 Introduction_** • Adobe Flash CS3 is capable of building large, interactive applications.

**_Section 17.2 Object-Oriented Programming_** • ActionScript 3.0 is an object-oriented scripting language that closely resembles JavaScript. The

knowledge you gained from the JavaScript treatment in Chapters 6–11 will help you understand the ActionScript used in this case study.

• An ActionScript class is a collection of characteristics known as properties and of behaviors known as functions.  

**708** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

• You can create your own classes or use any of Flash’s predefined classes.

• A symbol stored in the **Library** is a class.

• A class can be used to create many instances, or objects, of the class.

• Dragging a symbol from the **Library** onto the stage creates an instance (object) of the class. Mul- tiple instances of one class can exist on the stage at the same time.

• Any changes made to an individual instance (resizing, rotating, etc.) affect only that one instance.

• Changes made to a class (accessed through the **Library**), affect every instance of the class.

**_Section 17.3 Objects in Flash_** • The properties x and y refer to the respective _x-_ and _y-_coordinates of an object.

• import allows you to utilize built-in classes of ActionScript 3.0, such as MouseEvent and Sprite.

• Instance variables have scope through the entire class.

• Movie clips in the **Library** can be placed on the stage using the addChild function.

• Function addEventListener registers an event handler to be called when an event is triggered.

**_Section 17.4 Cannon Game: Preliminary Instructions and Notes_** • The stop action at the end of a section ensures that only the desired animation will be played.

• ActionScript programmers often create an **Actions** layer to better organize Flash movies.

**_Section 17.5 Adding a Start Button_** • Most games start with an introductory animation.

**_Section 17.6 Creating Moving Objects_** • The first parameter of a Timer constructor is the delay between timer events in milliseconds. The

second parameter is the number of times the Timer should repeat. A value of 0 means that the Timer will run indefinitely.

**_Section 17.7 Adding the Rotating Cannon_** • Many Flash applications include animation that responds to mouse cursor motions.

• ActionScript’s Math class contains various mathematical functions and values that are useful when performing complex operations. For a full list of the Math class’s functions and values, refer to the **Flash Help** dictionary from the **Help** menu.

• The Math object provides us with an arc tangent function: Math.atan2(y, x). This function re- turns a value, in radians, equal to the angle opposite side y and adjacent to side x.

• The constant Math.PI provides the value of π.

• If your code is not working and no error message displays, ensure that every variable points to the correct object. One incorrect stage can prevent an entire function from operating correctly.

• Hide a layer by selecting the show/hide selector (dot) in the portion of the **Timeline** to the right of the layer name. A red **x** should appear in place of the dot to indicate that the layer is hidden while editing the movie. The layer will still be visible when the movie is viewed. Clicking the show/hide **x** again makes the layer visible.

**_Section 17.8 Adding the Cannonball_** • A small white circle is Flash’s default appearance for a movie clip that has no graphic in its first

frame.

• The Number type is ActionScript 3’s floating-point variable type.  

Terminology **709**

**_Section 17.9 Adding Sound and Text Objects to the Movie_** • Lock a layer by clicking the lock/unlock selector (dot) to the right of the layer name in the time-

line. When a layer is locked, its elements are visible, but they cannot be edited. This allows you to use one layer’s elements as visual references for designing another layer, while ensuring that no elements are moved unintentionally. To unlock a layer, click the lock symbol to the right of the layer name in the **Timeline**.

**_Section 17.10 Adding the Time Counter_** • Time, whether increasing or decreasing, is an important aspect of many games and applications.

• Games generally have a final animation sequence that informs the player of the outcome of the game.

**_Section 17.12 Adding Collision Detection_** • Flash has a built-in collision detection function that determines whether two objects are touch-

ing. The function _object1_.hitTestObject(_object2_) returns true if any part of _object1_ touches _object2_. Many games must detect collisions between moving objects to control game play or add realistic effects. In this game, we rely on collision detection to determine if the ball hits either the blocker or the target.

**Terminology** ActionScript 3.0 addChild

addEventListener

Adobe Flash CS 3 function hitTestObject ActionScript collision detection

method import instance instance name instance variable **Library** lock/unlock layer

Math class MouseEvent

Number

property **Property Inspector** rotation property show/hide layers Sprite

stage

stage.mouseX

stage.mouseY

stop

**Self-Review Exercises 17.1** State whether each of the following is _true_ or _false_. If _false_, explain why.

a) ActionScript 3.0 is an object-oriented scripting language that contains functions and classes.

b) There can be multiple instances of one symbol. c) Locking a layer is the same as hiding it, except that a hidden layer can still be edited. d) New functions can never be created in Flash. We must rely on Flash’s predefined func-

tions.

**17.2** Fill in the blanks for each of the following statements. a) Property accesses the main timeline object. b) A movie clip with no animation in its first frame appears as a(n) . c) Flash has a built-in function that returns true when two objects touch.  

**710** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

**Answers to Self-Review Exercises 17.1** a) True. b) True. d) False. Neither locked nor hidden layers can be edited. Locked layers are visible, though, whereas hidden layers are not. e) False. New functions can be created inside a package, or inside a frame’s **Actions** using the keyword function.

**17.2** a) stage. b) small white circle. c) collision detection.

**Exercises 17.3** Add an **instructions** button to the **intro** frame of the main scene. Make it play a brief movie clip explaining the rules of the game. The instructions should not interfere with the actual game play.

**17.4** Use Flash’s random( _n_ ) function (discussed in Chapter 16) to assign a random speed be- tween 1 and 4 to the blocker, and a speed between 5 and 7 to the target. Remember that random( _n_ )

returns a random integer between 0 and _n_.

**17.5** Add a text field to the **end** frame that displays the player’s final score (i.e., the time remain- ing) if the player wins. Output different phrases depending on the player’s final score (e.g., 1–10: Nice job, 11–15: Great!, 16–20: Amazing!). \[_Hint:_ Create a new global variable finalTime if the player wins. Create an if…else statement to determine which text phrase to use based on final-

Time.\]

**17.6** Add a second level to the game with two blockers instead of one. Try to do this without adding a fourth frame to the timeline. Instead, create a duplicate **blocker** symbol and modify it to appear invisible at first. Think about reversing the process we used to make the sections of the **target** invisible. The final score should be a combination of first- and second-round scores. \[_Hint:_ Create an instance variable level that stores the current level (i.e., 1 or 2). Make the second blocker visible only if level == 2.\]

**17.7** Give a brief description of each of the following terms: a) Lock/unlock b) Instance c) Collision detection d) x and y

e) Event handler f) Function  

18 Adobe® Flex™ 2 and Rich Internet Applications **O B J E C T I V E S** In this chapter you will learn:

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

1\. Adobe Flash Player Version Penetration, March 2007, www.adobe.com/products/player\_census/ flashplayer/version\_penetration.html.  

18.2 Flex Platform Overview **713**

Flex is appropriate for online stores, where Flex’s versatile user interface library allows for drag-and-drop, dynamic content, multimedia, visual feedback and more. Applications that require real-time streaming data benefit from Flex’s ability to accept data “pushed” from the server and instantly update content, without constantly polling the server as some Ajax applications do. Applications that require data visualization benefit from Flex’s Charting library which can create interactive and customized charts and graphs. Action- Script adds to the power of the Flex user interface library by allowing you to code powerful logic into your Flex applications.

In this chapter, you’ll learn how to implement these elements in real-world applica- tions. You’ll run the examples from your local computer as well as from deitel.com. A comprehensive list of Flex resources is available in our Flex Resource Center at www.deitel.com/flex. Another helpful resource is Adobe’s Flex 2 Language Reference at www.adobe.com/go/flex2\_apiref.

**18.2 Flex Platform Overview** The Flex platform requires the Flash Player 9 runtime environment. Flash Player 9 provides the **ActionScript Virtual Machine** and graphical capabilities that execute Flex applications. Flash Player 9, as described in Chapters 16–17, is a multimedia-rich application environ- ment that runs on most platforms. Flash Player installation is detailed in those chapters, but for end users, only the **Flash Player 9** browser plug-in is required. The plug-in, including a debug version, is included as part of the **Flex SDK (Software Development Kit)** installa- tion. Flex applications are essentially Flash programs that use the Flex framework of user interface elements, web services, animations and more. The Flex development environment is programming-centric in contrast to the animation-centric Flash authoring tool.

In addition to describing user interfaces, MXML can describe web services, data objects, visual effects and more. Flex’s user interface elements are much richer and more consistent than those of HTML and AJAX because they’re rendered the same way on all platforms by the Flash player. The root element of every MXML application is the **Appli- cation element** (<mx:Application>), inside which all Flex elements reside.

The Flex SDK is a free download, which you can get from www.adobe.com/prod-

ucts/flex/downloads. It includes an MXML compiler and debugger, the Flex frame- work, the user interface components, and some templates and examples. You can extract the zip file anywhere on your computer. The compiler and debugger included with the Flex SDK are command-line utilities. They’re written in Java, so you must have Java Runtime Edition 1.4.2\_06 (or later) installed. To check your current version, run java -

version in your command line. ActionScript 3 is Adobe’s object-oriented scripting language. Flash Player 9 uses ver-

sion 2 of the ActionScript Virtual Machine (AVM2), which adds support for ActionScript 3 and provides many performance improvements over the previous version. This virtual machine is being submitted as open source to the Mozilla Firefox project to provide sup- port for ActionScript 3 and JavaScript 2. This engine, called Tamarin, is slated to be included in Firefox 4.

ActionScript 3 supports such object-oriented capabilities as inheritance, encapsulation and polymorphism. Also, it uses an **asynchronous programming model**. This means that the program will continue to execute while another operation is being completed, such as a call to a web service. This ensures that the user interface is responsive even while the appli-  

**714** Chapter 18 Adobe® Flex™ 2 and Rich Internet Applications

cation is busy processing data, an important feature of RIAs. In many cases, you’ll need to take advantage of event handling and data binding to handle asynchronous operations.

**Flex Builder** is Adobe’s graphical IDE for Flex applications. A 30-day free trial is available at www.adobe.com/go/tryflex. It is based on Eclipse, a popular open source IDE. Because Flex Builder costs money, and because you can develop Flex applications without it, we won’t use Flex Builder in this book.

**Adobe LiveCycle Data Services ES** extends Flex’s built-in data connectivity, allowing for such features as data push and synchronization. It also enables Flex applications to handle disconnection from the server, synchronizing data upon reconnection. The Express edition of Adobe LiveCycle Data Services ES is available for free at www.adobe.com/go/ trylivecycle\_dataservices/. This version is limited to use on a single server with a single CPU (the license agreement is included with the download).

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

**_Compiling an Application_** Flex applications are converted from MXML into ActionScript, which is then compiled and output as SWF files. We’ll compile our applications using the **mxmlc** command-line compiler, included in the Flex SDK. If you do not want to specify the compiler’s path ev- ery time you run it, you can add the directory to your Path system variable. To do this in Windows XP, first right click **My Computer**, click **Properties**, select the **Advanced** tab, click **Environment Variables**, select **Path** in the list of **System variables**, and append your path to the flex\_sdk\_2\\bin directory (e.g. C:\\flex\_sdk\_2\\bin if you extracted it into the C:\\ di- rectory). For Mac OS X and Linux, visit www.linuxheadquarters.com/howto/basic/

path.shtml for instructions. The simplest syntax of the mxmlc command is mxmlc _filename._ You can see a full list of the compiler’s parameters by executing mxmlc -help. For instance, if we’re in the directory containing coverViewer.mxml, and we have added the bin direc- tory to the **Path** system variable, the command for compiling coverViewer.mxml would be mxmlc coverViewer.mxml (Fig. 18.3).

This command creates coverViewer.swf in the current directory. If you’d like, you can test coverViewer.swf in the standalone Flash 9 Player by double clicking the file coverViewer.swf. If this does not work, you can locate the Flash 9 Player at flex\_sdk\_2\\player\\debug\\SAFlashPlayer.exe for Windows or flex\_sdk\_2/player/

debug/SAFlashPlayer.dmg for Mac OS X.

**_Running a Flex Application in the Browser_** Because Flex applications run using the Flash Player, they can be embedded into a web page, then run with the Flash Player browser plug-in. The Flex SDK install includes a fold- er of HTML templates for embedding your application. You can copy a template and edit it to point to your SWF file. These templates are located in the folder flex\_sdk\_2/

resources/html-templates/. The six templates give you different combinations of Flash installation and version detection (checks the user’s Flash Player version) as well as browser history support. For our examples, we use the no-player-detection template. If you would like to implement the install and history features, more information is available at livedocs.adobe.com/flex/201/html/wrapper\_131\_05.html.

To create an HTML wrapper for the application, first copy the files AC\_OETags.js and index.template.html from flex\_sdk\_2/resources/html-templates/no-player-

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

**_Yahoo! Map ActionScript_** The map.as ActionScript file (Fig. 18.13) handles the addressBook application’s map functionality. We use the **Yahoo! Maps API**, because Yahoo! provides the ability to embed maps in Flex 2 applications3 (the map itself is a Flash application). The first step in using the Yahoo! Maps API is to get a Yahoo! account and Application ID. These are available at developer.yahoo.com. You then need to download the Yahoo! AS3 API Libraries at developer.yahoo.com/flash/as3\_api\_libraries.html. Move the source/as3/com/

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

Another way to customize the look of your application is through themes. The default theme of Flex applications is Halo. Other themes available with the Flex 2 SDK are Halo Classic (the former default), Ice, Institutional, Smoke and Wooden. All of these are defined in CSS files, but some of them also reference outside images and SWF files. These theme files can be found in flex\_sdk\_2/frameworks/themes/. You can specify that you want your application to use any of these themes at compile time by adding a theme

parameter to the mxmlc command. Fig. 18.20 shows how to compile coverViewer.mxml

with the ice.css theme. You can see how it looks in Fig. 18.21.

**18.7 Creating Charts and Graphs** To use Flex’s charting components, you must first install Flex Charting. A trial version is available at www.adobe.com/go/tryflex. Installation instructions are available at www.ado- be.com/support/documentation/en/flex/2/install.html#installingcharts.

**Fig. 18.20** | Running mxmlc with the theme parameter in Windows XP **Command**

**Prompt**.

**Fig. 18.21** | Deitel Cover Viewer compiled with the Ice theme.  

18.7 Creating Charts and Graphs **753**

To demonstrate Flex’s charting capabilities, we’ve added a **Chart View** section to our weather application (Fig. 18.22) and populated it with two charts. The first is a **Line-**

**Chart** that separately plots the high and low temperatures against the date. The user can mouse over any point of data and a data tip will tell the user whether it is a high or low temperature, the date and the temperature. The second chart is a **CandlestickChart**, dis- playing the range of temperatures for each day. This element also uses data tips to show greater detail. You can test a live version of this application at test.deitel.com/exam- ples/iw3htp4/flex/weatherChart/.

A chart is just another type of user interface element. In addition to the chart types mentioned in Section 18.2, a full list of charting components is available from Adobe at livedocs.adobe.com/flex/201/html/charts\_intro\_108\_03.html.

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

index.php/Flex\_3:Release\_Notes#Installation\_Instructions. An introduction to the features planned for Flex 3 is available at labs.adobe.com/

wiki/index.php/Flex\_3:Feature\_Introductions. Flex Builder 3, for instance, will add a wizard to easily consume web services, improve the user interface designer, and also add support for AIR development. Some of the new features are discussed at www.adobe.com/ devnet/flex/articles/flex3\_whatsnew.html.

**18.10 Wrap-Up** In this chapter, you learned how to describe Flex applications using MXML, how to com- pile them, and how to embed them in web pages. You also learned how to use ActionScript 3 to manipulate data and programatically control the user interface. Finally, you learned how to consume web services in Flex and present data from those web services in a visual and interactive manner. In the next chapter, you’ll learn about Microsoft’s new RIA tech- nology—Silverlight.

**18.11 Web Resources** www.deitel.com/flex The Deitel Flex Resource Center contains many resources, downloads, tutorials, documentation, books, e-books, articles, blogs and more that will help you develop Flex applications. The Deitel Flex Resource Center will provide you resources to allow you to pursue more advanced Flex program- ming.

6\. From labs.adobe.com/wiki/index.php/AIR:Developer\_FAQ. 7. From flexwiki.adobe.com/confluence/display/ADOBE/Flex+3+Planning.  

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

• Another way to customize the look of your application is by using themes, found in flex\_sdk\_2/

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

dex.php/Flex\_3:Feature\_Introductions.

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

services/feeds/docs/photos\_public/ for information on how to use the RSS feed, and Chapter 14 for more information on XML in general. The application should show thumbnails of the images at the bottom, as well as a large version of the selected image. You must set the width and height of the thumbnails to fit in the thumbnails bar. The thumbnails should be labeled with the image’s title, and the large image should be accompanied by the image’s title and author. Include a button that refreshes the RSS feed and loads the most recent images. You may find it beneficial to use an ArrayCollection similar to that in the weatherChart example (Fig. 18.23) to store each im- age’s source and title. One feature you may want to include is the ability for the user to search for specific tags. By adding ?tags=_stringOfTags_ to the end of the RSS URL, where _stringOfTags_ is re- placed by your own string, the RSS feed will return only images containing those tags. Other fea- tures you may want to include are the abilities for the user to chose how many photos to display and to click the author’s name to open the Flickr homepage. An example of how your solution may look is available at test.deitel.com/examples/iw3htp4/flex/flickrPhotoViewerExercise/.  

Exercises **769**

**18.5** Add a cellphone number field to the addressBook application. \[_Hint:_ You must add the field in contacts.xml, then modify buttonActions.as, search.as and the DataGrid and **Edit Con- tact** form in addressBook.mxml.\] An example of how your solution may look is available at our web site test.deitel.com/examples/iw3htp4/flex/addressBookExercise/.

**18.6** Create a currency-converter application using the web service at www.webservicex.net/

CurrencyConvertor.asmx. The application should let you select a currency. You can base your ap- plication on the weather example. Use the web service’s ConversionRate operation, sending it FromCurrency and ToCurrency from the list in the web service’s description. One important change you must make from the weather example is that the XML namespace must be the URI http:// www.webserviceX.NET/ instead of http://www.webserviceX.net/. See how your solution may look at test.deitel.com/examples/iw3htp4/flex/currencyConverterExercise/.  

19 Microsoft® Silverlight™ and Rich Internet Applications

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

The createSilverlight function (line 19) is located in Default\_html.js

(Fig. 19.15). This function inserts the Silverlight plug-in object in the SilverlightCon-

trolHost div. The Default\_html.js file that Expression Blend creates will not work with our project because it tries to access function Page in the JavaScript, which no longer exists. You must remove the lines instantiating the scene variable and set the onLoad event to null (line 15).

**19.6 Silverlight Streaming** Microsoft provides a service called **Silverlight Streaming** at silverlight.live.com. This service currently hosts your Silverlight applications for free, which allows individuals and

**16** <body> **17** <div id = "SilverlightControlHost" class = "silverlightHost"> **18** <script type = "text/javascript"> **19 20** </script> **21** </div> **22** </body> **23** </html>

**1** // Fig. 19.15: Default\_html.js **2** // Create Silverlight object in SilverlightControlHost div. **3** function createSilverlight() **4** { **5** Silverlight.createObjectEx( { **6** source: "Page.xaml", **7** parentElement: document.getElementById( "SilverlightControlHost" ), **8** id: "SilverlightControl", **9** properties: {

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

**1** // Fig. 19.19: CreateSilverlight.js **2** // JavaScript to add the Silverlight object to the Wrapper\_MovieViewer div **3** function CreateSilverlight() **4** { **5** Silverlight.createHostedObjectEx( { **6** source: "streaming:/16645/MovieViewer", **7** parentElement: Wrapper\_MovieViewer } ); **8** }

**Fig. 19.19** | JavaScript to add the Silverlight object to Wrapper\_MovieViewer div.

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

**1** <!-- Fig. 19.21: Page.xaml --> **2** <!-- Deitel Cover Viewer in Silverlight 1.1 Alpha Refresh --> **3** <Canvas **4** xmlns = "http://schemas.microsoft.com/client/2007" **5** xmlns:x = "http://schemas.microsoft.com/winfx/2006/xaml" **6** x:Name = "parentCanvas" Loaded = "Page\_Loaded" **7** x:Class = "CoverViewer.Page;assembly=ClientBin/CoverViewer.dll" **8** Width = "640" Height = "480" Background = "Black"> **9** <Canvas.Resources>

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

Public Sub Page\_Loaded(ByVal o As Object, ByVal e As EventArgs)

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

**54 55** ' Save Uri of image into ArrayList **56 57 58 59 60** End If **61** End If **62** End While **63** End Using **64** End If **65** End While **66** End Using **67 68** ' Close BrowserHttpWebRequest **69 70 71** ' Initialize currentImage and nextImage Sources **72 73 74 75** Catch ex As Exception **76** errorTextBlock.Text = "Error: " & ex.Message **77** End Try **78** End Sub ' Page\_Loaded **79 80** ' Handle nextImageAnimation's Completed event **81** Private Sub nextImageSwitch(ByVal sender As Object, \_ **82** ByVal e As EventArgs) **83** nextImageAnimation.Stop() **84 85** ' Test if at end of images **86** If (currentImageIndex = (imageURIArrayList.Count - 2)) Then **87** currentImageIndex += 1 ' Increment currentImageIndex **88 89** ' Set Source of prevImage and currentImage **90** prevImage.Source = imageURIArrayList(currentImageIndex - 1) **91** currentImage.Source = imageURIArrayList(currentImageIndex) **92** nextImage.Opacity = 0 ' Hide nextImage **93** Else **94** currentImageIndex += 1 ' Increment currentImageIndex **95 96** ' Set Source of prevImage, currentImage and nextImage **97** prevImage.Source = imageURIArrayList(currentImageIndex - 1) **98** currentImage.Source = imageURIArrayList(currentImageIndex) **99** nextImage.Source = imageURIArrayList(currentImageIndex + 1) **100** prevImage.Opacity = 1 ' Show prevImage **101** End If **102** End Sub ' nextImageSwitch **103 104** ' Handle prevImageAnimation's Completed event **105** Private Sub prevImageSwitch(ByVal sender As Object, \_ **106** ByVal e As EventArgs)

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

In method Page\_Loaded (lines 17–78), line 19 initializes the application using the InitializeComponent method located in the autogenerated Page.g.vb file (located in the obj\\Debug directory). This file takes any XAML elements that have an x:Name attribute, and uses the **FindName** method to map each element to a variable of the same name. This means that we do not have to do this manually, as we did for the Silverlight 1.0 **Movie Viewer** example. It also allows us to use Visual Studio’s IntelliSense feature to autocom- plete XAML element names in our code-behind file.

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

culatorForWindows project’s InterestRateCalculatorForWindows.Designer.vb file. Finally, copy the btnCalculate\_Click function from the InterestRateCalculatorFor-

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

**124 125** ' FrmInterestCalculator **126** ' the following two lines were commented out because they **127** ' accessed properties that are not supported in GOA WinForms **128** ' Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!) **129** ' Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font **130** Me.ClientSize = New System.Drawing.Size(289, 288) **131** Me.Controls.Add(Me.btnCalculate) **132** Me.Controls.Add(Me.txtDisplay) **133** Me.Controls.Add(Me.lblBalance) **134** Me.Controls.Add(Me.updYear) **135** Me.Controls.Add(Me.lblYears) **136** Me.Controls.Add(Me.txtInterest) **137** Me.Controls.Add(Me.lblInterest) **138** Me.Controls.Add(Me.txtPrincipal) **139** Me.Controls.Add(Me.lblPrincipal) **140** Me.Name = "FrmInterestCalculator" **141** Me.Text = "Interest Calculator" **142** CType(Me.updYear, \_ **143** System.ComponentModel.ISupportInitialize).EndInit() **144** Me.ResumeLayout(False) **145** Me.PerformLayout() **146** End Sub ' InitializeComponent **147 148** Friend WithEvents btnCalculate As System.Windows.Forms.Button **149** Friend WithEvents txtDisplay As System.Windows.Forms.TextBox **150** Friend WithEvents lblBalance As System.Windows.Forms.Label **151** Friend WithEvents updYear As System.Windows.Forms.NumericUpDown **152** Friend WithEvents lblYears As System.Windows.Forms.Label **153** Friend WithEvents txtInterest As System.Windows.Forms.TextBox **154** Friend WithEvents lblInterest As System.Windows.Forms.Label **155** Friend WithEvents txtPrincipal As System.Windows.Forms.TextBox **156** Friend WithEvents lblPrincipal As System.Windows.Forms.Label **157 158** Public Shared Sub Main() **159** Application.Run(New MyForm) **160** End Sub ' Main **161 162** Private Sub btnCalculate\_Click(ByVal sender As System.Object, \_ **163** ByVal e As System.EventArgs) Handles btnCalculate.Click **164 165** Dim principal As Decimal **166** Dim rate As Double **167** Dim year As Integer **168** Dim amount As Decimal **169 170** principal = Convert.ToDecimal(Me.txtPrincipal.Text) **171** rate = Convert.ToDouble(Me.txtInterest.Text) **172** year = Convert.ToInt32(Me.updYear.Value) **173 174** txtDisplay.Text = String.Format("{0,-6}{1}" & vbCrLf, "Year", \_ **175** "Amount on Deposit") **176**

**Fig. 19.25** | Using third-party controls in Silverlight 1.1 Alpha Refresh. (Part 4 of 5.)  

**812** Chapter 19 Microsoft® Silverlight™ and Rich Internet Applications

Build the InterestRateCalculator project, then open up TestPage.html in a web browser. You will see an **"AG\_E\_UNKNOWN\_ERROR"** error message because the application is not running from a web server. You can safely ignore this error message for now. Test the application, and compare it with the desktop version (Fig. 19.24). Some of the con- trols function slightly differently, as GOA WinForms is not an exact replica of the stan- dard Windows Forms controls.

The InitializeComponent function (lines 23–146) was generated in the Interest-

RateCalculatorForWindows project using Visual Studio’s design mode. TextBoxes are used to input the principal and interest-rate amounts, and a NumericUpDown control is used to input the number of years for which we want to calculate interest.

The btnCalculate\_Click function (lines 162–183) handles btnCalculate’s Click

event (line 163). Lines 165 and 168 declare two Decimal variables, principal and amount. Line 166 declares rate as type Double, and line 167 declares year as type Integer. Lines 170–171 take the Text from the txtPrincipal and txtInterest text boxes, convert them to the correct type, then store the value in the corresponding variable. Line 172 takes the Value from the updYear NumericUpDown, converts it to an integer, and stores the value to year. Lines 174–175 set the txtDisplay’s Text to display "Year" and "Amount on

Deposit" column headers followed by a carriage return. These are formatted using the String.Format method.

Lines 177–182 count from 1 to year in increments of 1. Lines 178–179 perform a calculation based on the following formula:

_a = p_(_1 + r_) _n_

where _a_ is the amount, _p_ is the principal, _r_ is the rate and _n_ is the year. Lines 180–181 set txtDisplay’s Text to display two columns containing the current yearCounter and amount values.

**19.10 Consuming a Web Service** In the next example, we consume a web service from a Silverlight application. The web service is designed to perform calculations with integers that contain a maximum of 100 digits. Most programming languages cannot easily perform calculations using integers this large. The web service provides client applications with methods that take two “huge in- tegers” and determine their sum, their difference, which one is larger or smaller and whether the two numbers are equal. We’ve placed the web service is on our website at test.deitel.com/hugeinteger/hugeinteger.asmx.

**177 178 179 180 181 182 183** End Sub ' btnCalculate\_Click **184** End Class ' MyForm

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

**143** Private WithEvents txtFirst As System.Windows.Forms.TextBox **144** Private WithEvents lblPrompt As System.Windows.Forms.Label **145 146** Public Shared Sub Main() **147** Application.Run(New MyForm) **148** End Sub **149 150** ' declare a reference to Web service **151 152 153** ' character to trim from strings **154** Private zeros As Char() = New Char() {"0"c} **155 156** ' adds two numbers input by user **157** Private Sub btnAdd\_Click(ByVal sender As System.Object, \_ **158** ByVal e As System.EventArgs) Handles btnAdd.Click **159** ' make sure numbers do not exceed 100 digits and that both **160** ' are not 100 digits long, which would result in overflow **161** If txtFirst.Text.Length > 100 Or txtSecond.Text.Length > 100 \_ **162** Or (txtFirst.Text.Length = 100 And \_ **163** txtSecond.Text.Length = 100) Then **164** MessageBox.Show( \_ **165** "HugeIntegers must not be more than 100 digits" & \_ **166** vbCrLf & "Both integers cannot be of length 100: " & \_ **167** " this causes an overflow", "Error", \_ **168** MessageBoxButtons.OK, MessageBoxIcon.Information) **169** Else **170** ' perform addition **171 172 173** End If **174** End Sub ' btnAdd\_Click **175 176** ' subtracts two numbers input by user **177** Private Sub btnSubtract\_Click(ByVal sender As System.Object, \_ **178** ByVal e As System.EventArgs) Handles btnSubtract.Click **179** ' ensure that HugeIntegers do not exceed 100 digits **180** If Not NumbersTooBig(txtFirst.Text, txtSecond.Text) Then **181** ' perform subtraction **182** Try **183 184 185 186** If result = "" Then **187** lblResult.Text = "0" **188** Else **189** lblResult.Text = result **190** End If **191** Catch exception As Exception **192** ' if WebMethod throws an exception, **193** ' then first argument was smaller than second **194** MessageBox.Show( \_ **195** "First argument was smaller than the second")

**Fig. 19.29** | Consuming the HugeInteger web service in Silverlight 1.1 Alpha. (Part 4 of 6.)

Private remoteInteger As New com.deitel.test.HugeInteger

lblResult.Text = remoteInteger.Add( \_ txtFirst.Text, txtSecond.Text).TrimStart(zeros)

Dim result As String = remoteInteger.Subtract( \_ txtFirst.Text, txtSecond.Text).TrimStart(zeros)  

19.10 Consuming a Web Service **819**

**196** End Try **197** End If **198** End Sub ' btnSubtract\_Click **199 200** ' determines whether first number input is larger than the second **201** Private Sub btnLarger\_Click(ByVal sender As System.Object, \_ **202** ByVal e As System.EventArgs) Handles btnLarger.Click **203** ' ensure that HugeIntegers do not exceed 100 digits **204** If Not NumbersTooBig(txtFirst.Text, txtSecond.Text) Then **205** ' call Web-service method to determine whether **206** ' first integer is larger than the second **207** If Then **208** lblResult.Text = txtFirst.Text.TrimStart(zeros) & \_ **209** " is larger than " & txtSecond.Text.TrimStart(zeros) **210** Else **211** lblResult.Text = txtFirst.Text.TrimStart(zeros) & \_ **212** " is not larger than " + txtSecond.Text.TrimStart(zeros) **213** End If **214** End If **215** End Sub ' btnLarger\_Click **216 217** ' determines whether first number input is smaller than the second **218** Private Sub btnSmaller\_Click(ByVal sender As System.Object, \_ **219** ByVal e As System.EventArgs) Handles btnSmaller.Click **220** ' make sure HugeIntegers do not exceed 100 digits **221** If Not NumbersTooBig(txtFirst.Text, txtSecond.Text) Then **222** ' call Web-service method to determine if **223** ' first integer is smaller than second **224** If Then **225** lblResult.Text = txtFirst.Text.TrimStart(zeros) & \_ **226** " is smaller than " + txtSecond.Text.TrimStart(zeros) **227** Else **228** lblResult.Text = txtFirst.Text.TrimStart(zeros) & \_ **229** " is not smaller than " & txtSecond.Text.TrimStart(zeros) **230** End If **231** End If **232** End Sub ' btnSmaller\_Click **233 234** ' determines whether the two numbers input are equal **235** Private Sub btnEqual\_Click(ByVal sender As System.Object, \_ **236** ByVal e As System.EventArgs) Handles btnEqual.Click **237** ' ensure that HugeIntegers do not exceed 100 digits **238** If Not NumbersTooBig(txtFirst.Text, txtSecond.Text) Then **239** ' call Web-service method to determine if integers are equal **240** If Then **241** lblResult.Text = txtFirst.Text.TrimStart(zeros) & \_ **242** " is equal to " & txtSecond.Text.TrimStart(zeros) **243** Else **244** lblResult.Text = txtFirst.Text.TrimStart(zeros) & \_ **245** " is not equal to " & txtSecond.Text.TrimStart(zeros) **246** End If **247** End If **248** End Sub ' btnEqual\_Click

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

silverlightrocks.com/community/blogs/silverlight\_games\_101/default.aspx

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

C/4/2C433161-F56C-4BAB-BBC5-B8C6F240AFCC/SL\_0410\_448x256\_300kb\_2passCBR.wmv), an audio and video player that can be embedded in a web page, built with C#. Download demos of each ap- plication and get the source code.

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

20 Adobe® Dreamweaver® CS3

**O B J E C T I V E S** In this chapter you will learn:

■ To use Dreamweaver CS3 effectively.

■ To develop web pages in a visual environment.

■ To insert images and links into web pages.

■ To create XHTML elements such as tables and forms.

■ To insert scripts into Dreamweaver pages.

■ To use the Spry framework to create richer, more dynamic web applications.

■ To use Dreamweaver’s site-management capabilities.

**_We must select the illusion which appeals to our temperament, and embrace it with passion, if we want to be happy._ —Cyril Connolly**

**_The symbolic view of things is a consequence of long absorption in images. Is sign language the real language of Paradise?_ —Hugo Ball**

**_What you see is what you get (WYSIWYG)._ —Anonymous**

**_All human knowledge takes the form of interpretation._ —Walter Benjamin**  

20.1 Introduction **831 O**

**u tl**

**in e**

**20.1 Introduction** This chapter presents Adobe’s _Dreamweaver CS3_, perhaps the most popular visual HTML editor. A fully functional, 30–day trial version of Dreamweaver is available for download at www.adobe.com/cfusion/tdrc/index.cfm?product=dreamweaver. Please download and install the software before studying this chapter.

Using Dreamweaver, you can easily perform many of the tasks you learned in previous chapters. You can insert and edit text, as well as create more complex XHTML elements, such as tables, forms, frames and much more. In addition, this latest version of Dream- weaver now enables you to develop Ajax applications with Adobe’s Spry framework.

**20.2 Adobe Dreamweaver CS3** Upon starting, Dreamweaver displays the default **Start Page**, which offers various op- tions, such as **Open a Recent Item**, **Create New** and **Create from Samples** (Fig. 20.1). For example, you can click the **HTML** option under the **Create New** heading to open a blank page in the default viewing mode (Fig. 20.2). Dreamweaver is a **WYSIWYG (What You See Is What You Get)** editor. Unlike editors that simply display XHTML code, Dream- weaver renders XHTML elements much as a browser would, using the WYSIWYG screen. This functionality enables you to design your web pages as they will appear on the web.

We will now recreate the book’s first XHTML example (Fig. 4.1) using Dream- weaver. To see a more detailed list of options for creating new files, create a new document by selecting **New…** from the **File** menu. In the **New Document dialog**, select the **Blank page** tab from the leftmost column, and **HTML** from the **Page Type:** list (Fig. 20.3). By default, Dreamweaver’s **DocType** (in the lower-right corner) is set to **XHMTL 1.0 Transi- tional**. Select the drop-down **DocType** menu and select **XHTML 1.0 Strict**—this will cause Dreamweaver to generate XHTML-compliant code. In the **Layout:** list, make sure **<none>** is selected. Click the **Create** button to open the new document.

**20.1** Introduction **20.2** Adobe Dreamweaver CS3 **20.3** Text Styles **20.4** Images and Links **20.5** Symbols and Lines **20.6** Tables **20.7** Forms **20.8** Scripting in Dreamweaver **20.9** Spry Framework for Creating Ajax Applications

**20.10** Site Management **20.11** Wrap-Up **20.12** Web Resources

Summary | Terminology | Self-Review Exercises | Answers to Self-Review Exercises | Exercises  

**832** Chapter 20 Adobe® Dreamweaver® CS3

**Fig. 20.1** | Dreamweaver **Start Page**.

**Fig. 20.2** | Dreamweaver editing environment.

**Font**

Text **Size**

Text **Style**

Text alignment

**Property Inspector**

**Document** window

**Files** panel

Hyperlink

Table

Images

Media

Templates

Tag Chooser

**Insert** bar

**Document** toolbar

Panels

Tag selector Text color

**Document** window  

20.2 Adobe Dreamweaver CS3 **833**

Type

Welcome to XHTML!

in the **Document** window. Dreamweaver automatically places this text in the body element. Note that XHTML tags are not currently visible. We will switch to an alternate view in a moment to see the code that Dreamweaver generates. Now, to insert a title as we did in Fig. 4.1, right click in the **Document** window and select **Page Properties…** from the pop- up menu to view the **Page Properties** dialog (Fig. 20.4).

**Fig. 20.3** | **New Document** dialog.

**Fig. 20.4** | **Page Properties** dialog.

**Background image**

**Text color**

**Background color**

**Page font**

Font **Size**

**Category** list  

**834** Chapter 20 Adobe® Dreamweaver® CS3

The **Category list** lets the user select a set of properties to view. Select **Title/Encoding** from the **Category** list and enter **Internet and WWW How to Program** into the **Title** field. Clicking **OK** inserts a title element with the corresponding title text inside the head ele- ment of your XHTML code. \[_Note:_ You can also create a title by entering text directly into the Document title box (Fig. 20.6).\] You now have a representation of the code in Fig. 4.1 in the WYSIWYG display (Fig. 20.5).

Though you have been editing using the WYSIWYG display, remember that you are still programming in XHTML. To view or edit the XHTML that Dreamweaver gener- ated, you must switch from **Design view**, the mode you are currently working in, to **Code view**. To do so, click the **Code button** in the **Document toolbar** (Fig. 20.6). Note that Dreamweaver automatically color-codes XHTML to make viewing easier (Fig. 20.7). The tag names, attribute values and page text are all displayed in different colors. The code- coloring scheme can be accessed (and modified) by selecting **Preferences…** from the **Edit** menu and clicking **Code Coloring** in the **Category** list.

To save your file, click **Save** in the **File** menu or press _<Ctrl>-S_. The **Save As dialog** will appear, allowing you to specify a filename, type and location (Fig. 20.8). Create a folder in your C: drive named **Dreamweaver sites**. Type main into the **File name** field and select **HTML Documents** as the file type. Dreamweaver adds an .html filename extension if no extension is specified.

**Fig. 20.5** | Example of Fig. 4.1 in Dreamweaver.

**Fig. 20.6 | Document** toolbar.

**Code** view **Design** view Document title

File managementCode and design view

View in browser

Refresh **Design** view

View optionsFile name

Validate markup

Check browser compatibility  

20.3 Text Styles **835**

To view your page in a browser, press _F12_ or select **Preview in Browser** from the **File** menu. Note that the **File** menu option provides several browsers in which to view your code—more browsers can be added with the **Edit Browser List...** option. Your page should appear identical to the one in Fig. 4.1.

**20.3 Text Styles** In Dreamweaver, we can alter text properties with the **Text menu** or the **Property Inspec- tor** (Fig. 20.2). Using these tools, we can quickly apply heading tags (<h1>, <h2>, etc.), list

**Fig. 20.7 | Code** view.

**Fig. 20.8 | Save As** dialog.  

**836** Chapter 20 Adobe® Dreamweaver® CS3

tags (<ol>, <ul>) and several other tags used for styling text. Text can also be aligned left, right or centered, resized, indented and colored.

Create a new document, switch back to **Design** view and type the text, as shown in the screen capture of Fig. 20.9, into the **Document** window. Drag the mouse to highlight one line at a time and select the corresponding heading tag from the **Format** pull-down menu in the **Property Inspector**. Then, highlight all the text by pressing _<Ctrl>-A_, and click the align center button in the **Property Inspector**. The resulting XHTML produced by Dream- weaver is shown in Fig. 20.9.

As you can see, Dreamweaver is prone to produce somewhat inefficient code. In this case, for example, using Cascading Style Sheets (CSS) to center the text would have been more efficient. At the end of this section, we discuss how to integrate CSS into your web page without having to edit the XHTML in **Code** view.

**1** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **2** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **3** <html xmlns="http://www.w3.org/1999/xhtml"> **4** <head> **5** <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> **6** <title>Untitled Document</title> **7** </head> **8 9** <body>

**10 11 12 13 14 15 16** </body> **17** </html>

**Fig. 20.9** | Applying heading tags and centering using Dreamweaver.

<h1 align="center">Level 1 Heading</h1> <h2 align="center">Level 2 Heading</h2> <h3 align="center">Level 3 Heading</h3> <h4 align="center">Level 4 Heading</h4> <h5 align="center">Level 5 Heading</h5> <h6 align="center">Level 6 Heading</h6>  

20.3 Text Styles **837**

**Software Engineering Observation 20.1** _Dreamweaver uses text-manipulation techniques that sometimes produce inefficient code. Make sure to check the code often to know exactly the kind of XHTML Dreamweaver is producing. Thorough knowledge of a page and what XHTML elements are present is necessary for advanced scripting._ 20.1

Dreamweaver is capable of much more extensive text formatting, such as creating mathematical formulas. For example, type

e = mc2

into a new WYSIWYG window, then highlight the text. You can now change the format- ting of the equation by selecting **Style** from the **Text** menu, and selecting **Code**. The **Code** option applies a code element to the highlighted text, which designates formulas or com- puter code. Many other useful text-formatting options are located in the **Text** menu, as well. Click the **Code** button in the **Document** toolbar to view the code, and find the 2 in the equation. Surround the 2 with a <sup>…</sup> tag. The <sup>…</sup> tag formats the enclosed text as a superscript. Notice that after typing <sup>, Dreamweaver automat- ically completes a matching end tag (</sup>) after you have entered the </ characters. Click the **Design** button in the **Document** toolbar to view the fully formatted text (Fig. 20.10).

The formula can be further emphasized by selecting a **Color…** attribute from the **Text** menu. You can also access most of the elements in the **Text** menu (though not the color attribute) by right clicking highlighted text.

**Look-and-Feel Observation 20.1** _When you press_ Enter _after typing text in **Design** view, Dreamweaver encloses that text in a new paragraph (p) element. If you want to insert only a <br /> tag into a page, hold_ Shift _while pressing_ Enter_._ 20.1

**Look-and-Feel Observation 20.2** _You can manipulate the properties of almost any element displayed in the Dreamweaver window by right clicking an element and selecting its properties from the menu that pops up._ 20.2

**Fig. 20.10** | Styling text using code and sup elements.  

**838** Chapter 20 Adobe® Dreamweaver® CS3

The **Property Inspector** is also useful for creating lists. Try entering the contents of a shopping list, as shown in Fig. 20.11, and applying the **Unordered List style** to the list elements. Apply an h2 element to the title of the list.

Select **List** from the **Text** menu for more list-related tags, such as the definition list (<dl>). There are two list elements in a **definition list**—the defined term (<dt>) and the definition data (<dd>). Figure 20.12 shows the formatting produced by a definition list and the code Dreamweaver uses to produce it.

To apply the definition list as shown, select **Definition List** from the **List** submenu of the **Text** menu. In the **Document** window, type the first term you want to define. When you press _Enter_, Dreamweaver changes the style to match that of a definition. Pressing _Enter_ again lets you enter another defined term. The bold style of the defined terms is applied by clicking the **Bold** button in the **Property Inspector**, which applies the strong

element.

**Fig. 20.11** | List creation in Dreamweaver.

**1** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" **2** "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> **3** <html xmlns="http://www.w3.org/1999/xhtml"> **4** <head> **5** <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> **6** <title>Untitled Document</title> **7** </head> **8 9** <body>

**10** <dl> **11** <dt><strong>FTP</strong></dt> **12** <dd>File Transfer Protocol</dd>

**Fig. 20.12** | Definition list inserted using the **Text** menu. (Part 1 of 2.)

Ordered listUnordered list  

20.3 Text Styles **839**

**_Creating Style Sheets_** Dreamweaver provides powerful tools to integrate CSS easily into existing code. Type

Deitel Textbooks Internet & World Wide Web How to Program, 4/e Java How to Program, 7/e Visual Basic 2005 How to Program, 3/e C# For Programmers, 2/e

into the WYSIWYG display. Make the last four lines into unordered list elements using the method described above.

Select **CSS Styles** from the Window menu, or press _<Shift>-F11_. The **CSS Styles** panel will appear on the right-hand side of the page (Fig. 20.13). Now, click the **New CSS Rule** icon (Fig. 20.13) to open the **New CSS Rule dialog**. Next to the **Selector Type:** prompt, select the **Tag** option. This designates your style selections to the particular tag selected in the **Tag:** prompt. Enter ul into this menu’s text box, or select it from the drop-down list. Next to the **Define in:** field, select the **This document only** radio button to create an embedded style sheet. The **(New Style Sheet File)** option generates an external style sheet.

**13** <dt><strong>GIF</strong></dt> **14** <dd>Graphics Interchange Format</dd> **15** <dt><strong>XHTML</strong></dt> **16** <dd>Extensible HyperText Markup Language</dd> **17** <dt><strong>PNG</strong></dt> **18** <dd>Portable Network Graphics</dd> **19** </dl> **20** </body> **21** </html>

**Fig. 20.12** | Definition list inserted using the **Text** menu. (Part 2 of 2.)

Bold Italic  

**840** Chapter 20 Adobe® Dreamweaver® CS3

Click **OK** to open the **CSS Rule definition dialog**. **Type** should already be selected in the **Category menu**. Next to the **Decoration:** field, check the **underline** box. Now select **Background** from the **Category list**, and enter #66ffff into the **Background color:** field. Click **OK** to exit the dialog and return to the **Design** view. The text within the <ul> and </ul> tags should now appear as in Fig. 20.14.

**Fig. 20.13** | **CSS Styles** panel.

**Fig. 20.14** | List with styles applied using CSS.

**New CSS Rule** icon**Attach Style Sheet** icon  

20.4 Images and Links **841**

Now click the **New CSS Rule** icon to bring up the dialog again. This time, select **Class** under **Selector Type:**, and next to **Name:** enter special. In the **CSS Rule definition** dialog, select **x-large** from the **Size:** menu. Click **OK** to return to **Style** view, and highlight the word Deitel. Then right click the text and select **CSS styles** from the menu that appears. In the new menu, click **special** to apply the new class to the selected text. Your page should now appear as in Fig. 20.14.

Select the **All** option under the **CSS Styles** tab of the **CSS Styles** panel. There should now be a <style> tag in the **All Rules** window. Click the plus sign to its left to expand the category. Note that the two style rules that you created are present in this menu, and that additional properties can be added by selecting the rule, then clicking the **Add Property** link in the panel. Also, clicking a property’s value in the **CSS Styles** panel creates a drop- down menu, allowing you to specify a new value for the property.

Switch to **Code** view to see the style sheet that Dreamweaver has generated for you. Note that a <span> element was automatically created to contain the special class.

Please refer to

www.adobe.com/devnet/dreamweaver/css.html

for additional information on using CSS in Dreamweaver.

**20.4 Images and Links** Inserting images using Dreamweaver is simply a matter of clicking a button and selecting an image to insert. Open the **Select Image Source dialog** (Fig. 20.15) either by selecting **Image** from the **Insert** menu, clicking the **Images** menu (Fig. 20.2) in the **Insert** bar and se- lecting **Image**, or pressing _<Ctrl>_<_Alt_\>-_I_. Browse your local hard-drive directory for a JPEG, GIF or PNG image. You can view the image’s URL in the **URL** field—this will become the image’s src attribute, which can also be viewed in the **Src** field of the **Property Inspector**.

**Fig. 20.15** | Image source selection in Dreamweaver.

**URL** field  

**842** Chapter 20 Adobe® Dreamweaver® CS3

**Software Engineering Observation 20.2** _When you insert a local image into an unsaved document, Dreamweaver sets an absolute path, such as file:///C|/Dreamweaver sites/camel.gif. If the image is stored in the same folder as the .html file, saving the document sets the image source to a relative path, starting at the folder in which the document is saved (e.g., camel.gif)._ 20.2

After inserting your image, select it in the **Document** window and create a hyperlink using the **Link** field in the **Property Inspector** (Fig. 20.16). Type in the URL to which the hyperlink will point, http://www.deitel.com. Using the **Border** field of the **Property Inspector**, add a border = 0 attribute to the <img> tag to remove the blue rectangle that normally appears around the image.

You can also change other image attributes in the **Property Inspector**. Try resizing the image using the height and width fields and changing its alignment in the **Align pull-down menu**. Clicking and dragging an image’s borders also resizes the image.

**20.5 Symbols and Lines** Dreamweaver allows you to insert characters that are not located on the standard key- board. These characters are accessed by selecting **HTML** in the **Insert** menu, then selecting **Special Characters**. Select **Other_…_** from the **Special Characters** submenu to view the **Insert Other Character dialog**, which contains a list of various characters (Fig. 20.17).

**Fig. 20.16** | Image properties in the **Property Inspector**.

**Fig. 20.17** | **Insert Other Character** dialog.

Hyperlink

Width Height

**Align**

Image source

Image name (for scripting) **Border**  

20.6 Tables **843**

In the next example, we demonstrate how these symbols can be used in a web page, along with Dreamweaver’s **horizontal rule** feature. Begin by typing

10 ÷ 5 =

Use the **Insert Other Character** dialog to insert the division symbol. Then, select **HTML** from the **Insert** menu and click the **Horizontal Rule button**. This action inserts a line (hr ele- ment) onto the page directly below the cursor’s position. The line should be selected by default; if it is not, select the line by clicking it once. Using the **Property Inspector**, set the width to **60** pixels by entering **60** in the **W** field and selecting **pixels** from the pull-down menu directly to its right (Fig. 20.18). The other value in the menu, **%**, sets the line’s length to the specified percentage of the screen. Make the line **5** pixels high by entering **5** in the **H** field (values in this field always have pixels as their units). Select **Left** from the **Align** pull-down menu.

On a new line, type the number 2. Insert another horizontal rule below the 2. Set its height to 10 pixels and width to 100%. The page should now resemble Fig. 20.19.

**20.6 Tables** As useful as tables are, they often are time consuming and confusing to code by hand in XHTML. Dreamweaver offers easy-to-use table-editing commands. Open the **Table** dia- log by selecting **Table** from the **Insert** menu, clicking the **Table** button in the **Insert** bar or

**Fig. 20.18** | **Horizontal Rule** properties.

**Fig. 20.19** | Special characters and hr elements in Dreamweaver.

Height Width Percent or pixels Alignment  

**844** Chapter 20 Adobe® Dreamweaver® CS3

pressing _<Ctrl><Alt>-T_. The **Table dialog** (Fig. 20.20) allows us to select the number of rows and columns, the width of the table and several other related settings.

Figure 20.21 is a simple table with two rows, two columns and no border. Once the table is placed, you can manipulate its size. Click in a cell and press **<tr>** in the **tag selector** (Fig. 20.2) at the bottom of the **Document** window to select that row. Pressing the _Delete_ key removes the row from the table. You can highlight an individual cell by clicking **<td>** in the tag selector. Holding down the _Ctrl_ key, then clicking multiple cells allows them all to be selected simultaneously. Clicking the **Merge Cells button** in the **Property Inspector** while two adjacent cells are selected combines the cells into one (Fig. 20.22). Dream- weaver uses the colspan and rowspan attributes of the <td> tag to merge cells. Select a cell and click the **Split Cell** button in the **Property Inspector** to open the **Split Cell** dialog, which allows you to divide the selected cell into any number of rows or columns (Fig. 20.23).

The **Property Inspector** allows us to manipulate the selected table, or a portion of the table. While a cell is selected, its text attributes can be adjusted just as we demonstrated earlier in the chapter. In addition, background and border colors can be assigned to cells, groups of cells or an entire table. We can adjust a cell’s height and width in the **Property Inspector**. To manually adjust a cell’s size, you can also click and drag its border lines.

**Fig. 20.20** | **Table** dialog.

**Fig. 20.21** | Table with two rows and two columns.

**Rows**

**Border thickness Table width**

**Columns**

**Cell padding Cell spacing**

**Header** options

**Accessibility** options

Tag selector  

20.6 Tables **845**

We now recreate the table of Fig. 4.11. Make a four-row and five-column table that spans 90% of the page with a one-pixel border. Click the top-left cell, hold the _Shift_ key and click the cell below it—another way to select multiple cells. Two of the leftmost cells should now be selected. Merge them by right clicking in either cell and selecting **Table > Merge Cells** (Fig. 20.24) or select **Merge Cells** in the **Property Inspector** as we did before.

**Fig. 20.22** | Table **Property Inspector**.

**Fig. 20.23 | Split Cell** dialog.

**Fig. 20.24** | Merging cells in a table.

**Merge Cells**

**Split Cell** Alignment Border colorBackground color  

**846** Chapter 20 Adobe® Dreamweaver® CS3

To make space for the title of the table, select the top four cells (again using the _Shift_ key) and merge them together. The layout of the table should now resemble Fig. 20.25. Now, type in the text and insert the image.

To increase the visual appeal of the table, add color by selecting the desired cells and adjusting their background color in the **Property Inspector**. The size of rows and columns also can be adjusted by changing the **H** (height) and **W** (width) field values in the **Property Inspector** or by clicking and dragging the boundaries between cells.

**20.7 Forms** All the necessary XHTML coding needed for creating a feedback form or any other forms can be done in Dreamweaver. To insert a form, first select **Forms** from the insert menu in the **Insert** bar (Fig. 20.26). The **Insert** bar will now contain various options for creating forms. Click the leftmost button to insert an empty form into the document. Forms can also be inserted by selecting **Form** from the **Insert** menu’s **Form** submenu.

After a form is inserted into a document, Dreamweaver displays a dotted line to delin- eate the bounds of the form. Any form objects (i.e., text fields, buttons, etc.) placed inside

**Fig. 20.25** | Almost completed table.

**Fig. 20.26 | Forms Insert** bar.

File field

Form

Text field

Hidden field

Textarea

Checkbox

Radio button

Radio group

List/Menu

Jump menu

Button

Image field

Label

Fieldset

Spry Validation Controls  

20.7 Forms **847**

this dotted line will be part of the same form element in the XHTML code that Dream- weaver generates.

We can modify the properties of a form by clicking anywhere inside the dotted line that delineates the form, then clicking **<form#**_name_**\>** (where _name_ is the name of the form

element) in the tag selector at the bottom of the **Document** window. Dreamweaver assigns default names to forms in sequential order (i.e., the first form inserted is named **form1**, the second form is named **form2** and so on). The name of the form can be altered in the **Form name** field in the **Property Inspector**. The **Property Inspector** can also be used to set the **Action** and **Method** attributes of the form, which are required for server-side processing. Server-side technology is discussed later in this book.

You can insert text field by clicking the **Text Field** button in the **Insert** bar or by selecting **Text Field** from the **Insert** menu’s **Form** submenu. The **Input Tag Accessibility Attributes dialog** that appears allows you to set an id and label for the text field, and to specify some of its other properties. Once placed, a text field’s attributes can be adjusted using the **Property Inspector**. Its name, id and value attributes can be set or modified along with the size and maxlength (Fig. 20.27). The text field type also can be set to **Multi line**, allowing multiple lines of text, or **Password**, making all entered text appear as asterisks (\*).

Scrollable **Textareas** also can be selected from the **Form Insert** bar. Their properties are almost identical to those of a text field, except that they have the additional attributes for the number of lines (specified in the **Num lines** field in the **Property Inspector**) and **Wrap** (i.e., how the text area handles lines of text that exceed its width).

A drop-down select menu can be added by clicking the **List/Menu button** in the **Insert** bar. To add entries and values to the list or menu, click the **List Values… button** in the **Property Inspector** (Fig. 20.28). In the **List Values** dialog, you can add entries by pressing the **_\+_** button, and remove entries by pressing the **_–_** button. Each entry has an **Item Label** and a **Value.** An entry can be made the default selection by selecting it in the **Initially selected** list in the **Property Inspector**.

Now that we’ve discussed the basics of forms in Dreamweaver, we’re ready to create a “rate my website” form. To start, insert a form into a new page, followed by text fields, menus and text. The elements should appear as in Fig. 20.29.

Make the text fields the proper width by adjusting the **Char width** value in the **Property Inspector**. Now select the drop-down menu to the right of the text **How would you rate our site?** and click the **List Values…** button in the **Property Inspector** to add appropriate entries to the list (e.g., **Excellent**, **Good**, **Fair**, **Poor** and **Terrible**).

**Fig. 20.27** | Text field **Property Inspector.**

name and id Maximum characters (maxlength)

Width (size)

Initial value

Text field type  

**848** Chapter 20 Adobe® Dreamweaver® CS3

This example has three radio buttons, all contained in the same group. To add a group of radio buttons, click the **Radio Group** button in the **Insert** bar. In the **Radio Group** dialog, specify the **Name** of the group, and each radio button’s **Label** and **Value**. The **Radio Group** dialog works similarly to the **List Values** dialog.

**Fig. 20.28** | **List Values** dialog box.

**Fig. 20.29** | Completed form.

name and id

Add/remove entry

Item label Item value

List Values  

20.8 Scripting in Dreamweaver **849**

To create the **Reset** and **Submit** buttons, click the **Button** selection in the **Insert** bar. The **Value** of each new button defaults to **Submit**, but can be changed to **Reset** or any other value using the **Property Inspector**. The button’s **Property Inspector** can also be used to assign a **Button name**, which is assigned to the button’s name and id attributes, or to specify its **Action**, or type attribute.

For a complete list and description of Dreamweaver’s XHTML tags, open the **Refer- ence** panel by selecting **Reference** from the **Window** menu. Select the desired XHTML ele- ment from the **Tag** pull-down list in the **Reference** panel.

**20.8 Scripting in Dreamweaver** Dreamweaver also allows us to add JavaScript to our pages manually in the **Code** view or automatically using the **Behaviors panel**. To open the **Behaviors** panel, either select **Be- haviors** from the **Window** menu, or press _<Shift_\>-_F4_. The **Behaviors** panel appears as a tab option in the **Tag panel** (Fig. 20.30).

The **Behaviors** panel allows us to add commands to elements of a web page that trigger various JavaScript actions in response to browser events. To add an action, select an ele- ment on the page. Click the **_\+_** button in the **Behaviors** panel to display a pop-up menu of applicable actions. The pop-up menu offers several predefined JavaScript actions, such as **Go To URL** or **Popup Message**. A developer also can manually write an action by selecting **Call JavaScript** from the pop-up menu and entering the desired code into the **Call Java- Script** dialog. Selecting **Get More Behaviors…** opens a web page that provides options to download or purchase additional behaviors, extensions, functions and code. After com- pleting the dialog associated with the selected action, the action and a default event appear in the **Behaviors** panel. A developer can change the event that triggers this action by clicking the event field and choosing an event from the drop-down list that appears.

Dreamweaver supports several server-side scripting languages, discussed later in the book, such as ASP.NET, JSF, PHP and ColdFusion. Server-side scripting elements, such

**Fig. 20.30** | **Behaviors** panel and menu to add behaviors.

Add behavior Remove behavior

Event Action

Behaviors tab  

**850** Chapter 20 Adobe® Dreamweaver® CS3

as **Databases** and **Bindings**, can be accessed in the **Window** menu. Tags of the various lan- guages can also be selected from the **Tag Chooser**, which is accessed by selecting **Tag…** from the **Insert** menu, or from the icon in the **Insert** bar (Fig. 20.2). Dreamweaver allows the user to add scripting elements only where applicable.

**20.9 Spry Framework for Creating Ajax Applications** Many toolkits are available that provide prebuilt controls to enhance web applications and make it easier to include JavaScript functions in your applications with minimal coding (such as the Dojo toolkit mentioned in Chapter 15, and the Prototype and Script.aculo.us toolkits in Chapter 24). Adobe also created its own toolkit for Dreamweaver to develop dynamic and more robust web pages known as the **Spry Framework**.

The Spry Framework enables web developers with basic knowledge of HTML, CSS and JavaScript to create richer websites and dynamic pages. The framework includes a ready-to-use JavaScript library, which contains prebuilt, but customizable, widgets (such as a **Validation Textarea**, **Validation Text Field** and a **Menu Bar**), effects (such as grow, shrink, fade and highlight) and Ajax capabilities. To view all of the available spry tools, click the **Spry** tab in the **Insert** bar (Fig. 20.31).

Recall that Ajax applications separate client-side user interaction and server commu- nication and run them in parallel, making the delays of server-side processing more trans- parent to the user. Consider the form example that you built in Fig. 20.29. None of the data entered into the form is transmitted to the server until the user clicks the **Submit** button. At that time, any errors in the form are sent back to the user for correction. With Ajax and the Spry framework, text field input is validated on the client side. When the page loads, the files that provide the validation are loaded directly into the page, so you can check for errors in any given field as soon as the user moves to the next field in the form.

Now, let’s rebuild the form in Fig. 20.29 using Spry controls. First, insert **Spry Vali- dation Text Field**s next to the **Name** and **E-mail Address** labels.

Select the blue **Spry** box connected to the text field you created next to the **E-mail Address** label. In the **Property Inspector**, set the **Type:** to **Email Address**. Make sure that the **Change** checkbox is selected. This means that a valid e-mail address must be in the field and if any changes are made to the address, the client will display a message prompting the user to make a change before continuing (Fig. 20.33).

**Fig. 20.31** | Spry Tools.

Spry Tabbed PanelsSpry XML

data set

Spry Region

Spry Repeat

Spry Repeat List

Spry Table

Spry Validation Text Field

Spry Validation Select

Spry Validation Checkbox

Spry Validation Text Area

Spry Accordion

Spry Menu Bar

Spry Collapsible Panel  

20.9 Spry Framework for Creating Ajax Applications **851**

**Fig. 20.32** | Inserting Spry Validation Text Fields.

**Fig. 20.33** | Using a Spry Text Field to validate data before continuing to fill out a form.  

**852** Chapter 20 Adobe® Dreamweaver® CS3

Our application detects an error when validating the information in the e-mail address text field. As soon as we try to move to the next field, the application displays the error **Invalid format** to let us know that we must correct the information that we originally typed into that field.

Real-time validation is a key element in Ajax and rich Internet applications. The framework also provides capabilities for loading and processing XML data obtained via Ajax interactions with the server. Using the Spry Framework, developers can take advan- tage of such rich functionality, even if they don’t have a deep understanding of XML and JavaScript. For more information on the Spry framework, for Ajax-based examples and for the latest version of the framework, visit labs.adobe.com/technologies/spry/.

**20.10 Site Management** In this book, we focus primarily on the skills and technologies involved in creating indi- vidual web pages. As a result, we do not spend much time discussing complete websites. Creating an effective website is a difficult process, requiring planning, effort and time.

Dreamweaver is a powerful tool for creating and maintaining a website. To create a site using Dreamweaver, first open the **Files panel** either by selecting **Files** from the **Window** menu or by pressing _F8_. Click the **Manage Sites…** link in the **Files** panel’s drop- down list, or click the link to the right of this menu, to open the **Manage Sites dialog**. From this dialog, a developer can access previously created websites or create new ones. To create a new website, click the **New…** button in the **Manage Sites** dialog and select **Site** from the pop-up list. Then, follow the instructions provided by Dreamweaver’s **Site Definition Wizard**. Once completed, site files can be viewed, accessed and added in the **File** panel.

In general, pages in a website should have consistent colors and styles to maintain site uniformity. Dreamweaver’s **Assets panel** holds elements common to a website, such as pictures, colors and links. Open the **Assets** panel by selecting **Assets** from the **Window** menu or pressing _F11_.

While Dreamweaver is a valuable aid in website creation, it is not a replacement for thorough knowledge of XHTML and the related scripting languages taught in this book. Be sure to familiarize yourself with these other technologies before using Dreamweaver to accelerate the development process.

**20.11 Wrap-Up** This chapter provided an introduction to Dreamweaver CS3, a WYSIWYG visual XHT- ML editor. We described how to create, save and modify documents, and explained how to implement many of Chapter 4’s examples in the Dreamweaver environment. We also discussed incorporating more advanced scripting into pages created in Dreamweaver. Fi- nally, we introduced Dreamweaver’s Spry framework, which allows us to create richer websites and dynamic pages by incorporating XML into documents. The next chapter will discuss web servers, and how they can be used to exchange information over the Internet.

**20.12 Web Resources** www.adobe.com/devnet/dreamweaver

Adobe’s _Dreamweaver Developer Center_ contains numerous tutorials and sample files intended for beginner, intermediate and expert users. This site explores some of the more advanced features of Dreamweaver in addition to the topics covered in this chapter.  

20.12 Web Resources **853**

www.adobe.com/software/dreamweaver

This site contains detailed product information, software downloads and links to featured sites cre- ated with Dreamweaver CS3.

**Summary _Section 20.1 Introduction_** • Dreamweaver CS3 is a popular HTML editor that can create complex XHTML elements, such

as tables, forms and frames.

**_Section 20.2 Adobe Dreamweaver CS3_** • Unlike editors that simply display XHTML code, Dreamweaver renders XHTML elements

much as a browser would, using the WYSIWYG screen. This functionality enables you to design your web pages as they will appear on the web.

• Create a new document by selecting **New…** from the **File** menu. In the **New Document** dialog, se- lect the **Blank page** tab from the leftmost column, and **HTML** from the **Page Type:** list.

• Dreamweaver automatically encloses text in a paragraph (p) element for proper formatting.

• The **Category** list in the **Page Properties** dialogue lets the user select a set of properties to view.

• To view or edit the XHTML that Dreamweaver has generated, you must switch from **Design** view to **Code** view.

• The tag names, attribute values and page text are all displayed in different colors.

• To save your file, click **Save** in the **File** menu or press _<Ctrl>-S_.

• To view your page in a browser, press _F12_ or select **Preview in Browser** from the **File** menu. Note that the **File** menu option provides several browsers in which to view your code—more browsers can be added with the **Edit Browser List...** option.

**_Section 20.3 Text Styles_** • In Dreamweaver, we can alter text properties with the **Text** menu or the **Property Inspector**.

• Dreamweaver is prone to produce somewhat inefficient code.

• Dreamweaver is capable of extensive text formatting, such as creating mathematical formulas.

• Many useful text-formatting options are located in the **Text** menu and can be applied to high- lighted code.

• You can also access most of the elements in the **Text** menu by right clicking highlighted text.

• Dreamweaver automatically inserts a matching end tag in Code view.

• The **Property Inspector** can be used to create lists.

• Dreamweaver can integrate CSS easily into existing code using the **CSS Styles** panel. You can create both embedded and external style sheets with this tool.

**_Section 20.4 Images and Links_** • Images can be inserted into Dreamweaver by selecting **Image** from the **Insert** menu or clicking

the **Images** button in the **Insert** bar.

**_Section 20.5 Symbols and Lines_** • Dreamweaver allows you to insert characters that are not located on the standard keyboard by

selecting **HTML** in the **Insert** menu, then selecting **Special Characters.**

• Select **HTML** from the **Insert** menu and click the **Horizontal Rule** button to insert a horizontal rule.  

**854** Chapter 20 Adobe® Dreamweaver® CS3

**_Section 20.6 Tables_** • Open the **Table** dialog by selecting **Table** from the **Insert** menu, clicking the **Table** button in

the **Insert** bar or pressing _<Ctrl><Alt>-T_.

• The **Table** dialog allows us to select the number of rows and columns, the overall width of the table and several other related settings.

• The **Property Inspector** allows us to manipulate the selected table, or a portion of the table.

**_Section 20.7 Forms_** • To insert a form, first select **Forms** from the insert menu in the **Insert** bar, which will now contain

various options for creating forms.

• Dreamweaver displays a dotted line to delineate the bounds of the form. Any form objects (i.e., text fields, buttons, etc.) placed inside this dotted line will be part of the same form element in the XHTML code that Dreamweaver generates.

• We can modify the properties of a form by clicking anywhere inside the dotted line that delin- eates the form, then clicking **<form#**_name_**\>** (where _name_ is the name of the form element) in the tag selector at the bottom of the **Document** window.

• For a complete list and description of Dreamweaver’s XHTML tags, open the **Reference** panel by selecting **Reference** from the **Window** menu. Select the desired XHTML element from the **Tag** pull-down list in the **Reference** panel.

**_Section 20.8 Scripting in Dreamweaver_** • Dreamweaver also allows us to add JavaScript to our pages manually in the Code view, or auto-

matically using the **Behaviors** panel.

• The **Behaviors** panel allows us to add commands to elements of a web page that trigger various JavaScript actions in response to browser events.

• Dreamweaver supports several server-side scripting languages such as ASP.NET, JSF, PHP and ColdFusion. Server-side scripting elements, such as **Databases** and **Bindings**, can be accessed in the **Window** menu.

**_Section 20.9 Spry Framework for Creating Ajax Applications_** • The Spry Framework promotes the creation of richer websites and dynamic pages by incorporat-

ing XML into documents for those web developers with basic knowledge of HTML, CSS and JavaScript.

• To view all of the available spry tools, click the **Spry** tab in the **Insert** bar.

• Ajax applications, including the Spry Framework, separate client-side user interaction and server communication, and run them in parallel, making the delays of server-side processing more transparent to the user.

• With Ajax and the Spry framework, text field input is validated on the client side. When the page loads, the files that provide the validation are loaded directly into the page, so you can check for errors in any given field as soon as the user moves to the next field in the form.

• You can manipulate the properties of Spry elements by selecting the blue **Spry** box connected to the element you created, then using the **Property Inspector**.

**_Section 20.10 Site Management_** • Dreamweaver can help you create and maintain a website with the Files panel and the Site Def-

inition Wizard.

• Dreamweaver’s **Assets** panel holds elements common to a website, such as pictures, colors and links.  

Terminology **855**

**Terminology Assets** panel **Background Color Behaviors** panel **Button** button **Category** list **Code** view **CSS Rule definition** dialog dd element (definition; <dd>…</dd>) **Design** view dl element (definition list; <dl>…</dl>) **Document** toolbar **Document** window dt element (defined term; <dt>…</dt>) **Files** panel **Font** field in **Property Inspector Form** button in **Insert** bar **Form** tab in **Insert** bar **Horizontal Rule** in **HTML** option in **Insert** menu **Images** button in **Insert** bar **Insert** bar

**Insert** menu **Link** field in the **Property Inspector List Values** button **List/Menu** button **Manage Sites** dialog **Merge Cells** button in **Property Inspector New CSS Rule** dialog **Page Property…** dialog **Property Inspector Preview in Browser Save** in **File** menu **Special Characters** dialog **Split Cell** button in **Property Inspector Style** in **Text** menu **Table** button in **Insert** bar **Table** dialog Tag selector **Text Field** button **Text** menu WYSIWYG (What You See Is What You Get)

**Self-Review Exercises 20.1** State whether each of the following is _true_ or _false_. If _false_, explain why.

a) Dreamweaver renders XHTML elements correctly in its WYSIWYG display. b) Dreamweaver allows web-page authors to insert images simply by clicking a button and

selecting an image to insert. c) Dreamweaver requires the user to manually write special characters into the code. d) Dreamweaver delineates a form element in the WYSIWYG editor with a dotted line. e) Dreamweaver can be used to create only XHTML documents.

**20.2** Fill in the blanks for each of the following statements. a) A(n) editor renders web-page elements exactly as a browser would. b) The allows you to adjust the selected element’s attributes. c) Dreamweaver’s option combines selected table cells into one cell. d) The panel allows a developer to add JavaScript to an XHTML document.

**Answers to Self-Review Exercises 20.1** a) True.

b) True. c) False. Selecting **Special Characters** from the **HTML** submenu of the **Insert** menu provides

a list of special characters. d) True. e) False. Dreamweaver supports several server-side scripting languages, such as ASP.NET,

JSF and PHP.

**20.2** a) WYSIWYG (What You See Is What You Get). b) **Property Inspector**. c) **Merge Cells**. d) **Behaviors**.  

**856** Chapter 20 Adobe® Dreamweaver® CS3

**Exercises 20.3** Create the following table using Dreamweaver:

**20.4** Create the following form using Dreamweaver:

**20.5** Add a feature to your solution to Exercise 20.4 that displays an alert dialog reading "form submitted" when the user clicks the **Submit** button, and that displays an alert dialog "form reset" appear when the user clicks the **Reset** button.

**20.6** Create a personal web page using Dreamweaver that features an image and a list of interests. Experiment with different text-formatting options. Link the image to your favorite website.

**20.7** Recreate the page in Fig. 5.2 using an external style sheet.
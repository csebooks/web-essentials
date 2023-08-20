---
title: "Adobe® Flash® CS3"
weight: 1
---

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

1\. Flash Player statistics from Adobe’s Flash Player Penetration Survey website at www.adobe.com/ products/player_census/flashplayer/version_penetration.html.

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

goButton.addEventListener( MouseEvent.MOUSE_DOWN, goFunction );

This statement uses the button object’s instance name (**goButton**) to call the **addEventLis- tener** function, which registers an event handler (goFunction in this example) that will be called when the event takes place (i.e., when you click the button). The first argument, MouseEvent.MOUSE_DOWN, specifies that an action is performed when the user presses the button with the mouse.

The next step is to add the function that handles this event. Create a new function named goFunction by using the code

function goFunction( event : MouseEvent ) : void { } // end function goFunction

The function’s one parameter is a MouseEvent, implying that the function has to be pro- vided with a mouse action to be accessed. The function does not return anything, hence the void return value. Inside this function, add the following statement:

var randomNumber : int = Math.floor( ( Math.random() \* 5 ) );

which creates an integer variable called randomNumber and assigns it a random value. For this example, we use the Math.random function to choose a random number from 0 to 1. Math.random returns a random floating-point number from 0.0 up to, but not including, 1.0. Then, it is scaled accordingly, depending on what the range should be. Since we want all the numbers between 0 and 4, inclusive, the value returned by the Math.random should be multiplied by 5 to produce a number in the range 0.0 up to, but not including, 5.0.

**656** Chapter 16 Adobe® Flash® CS3

Finally, this new number should be rounded down to the largest integer smaller than itself, using the Math.floor function.

**Error-Prevention Tip 16.1** \_ActionScript is case sensitive. Be aware of the case when entering arguments or variable names.\_16.1

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

Create a new Flash document and set the size of the stage to **470** pixels wide by **60** pixels high. Create three layers named **top**, **middle** and **bottom** according to their positions in the layer hierarchy. These names help track the masked layer and the visible layers. The **top** layer contains the mask, the **middle** layer becomes the masked animation and the **bottom** layer contains an imported bitmapped logo. Import the graphic bug_apple.bmp

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

nameHelp.addEventListener( MouseEvent.MOUSE_DOWN, nameFunction );

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

The process is nearly complete. Open the **Actions** panel for the **actions** layer. The fol- lowing actions direct the movie clip to play until all the scene’s objects are loaded. First, add a stop to the frame so that it doesn’t go to the second frame until we tell it to. Using the **loadingClip** movie instance, use the addEventListener function to invoke the function onBegin whenever the event Event.ENTER_FRAME is triggered. The ENTER_FRAME event occurs every time the playhead enters a new frame. Since this movie’s frame rate is 12 fps (frames per second), the ENTER_FRAME event will occur 12 times each second.

loadingClip.addEventListener( Event.ENTER_FRAME, onBegin );

The next action added to this sequence is the function onBegin. The condition of the if statement will be used to determine how many frames of the movie are loaded. Flash movies load frame by frame. Frames that contain complex images take longer to load. Flash will continue playing the current frame until the next frame has loaded. For our movie, if the number of frames loaded (frameLoaded) is equal to the total number of frames (totalFrames), then the movie is finished loading, so it will play frame 2. It also invokes the removeEventListener function to ensure that onBegin is not called for the remainder of the movie. If the number of frames loaded is less than the total number of frames, then the current movie clip continues to play. The code now reads:

stop();

loadingClip.addEventListener( Event.ENTER_FRAME, onBegin );

// check if all frames have been loaded function onBegin( event : Event ) : void {

if ( framesLoaded == totalFrames ) {

**Fig. 16.51** | Defining the hit area of a button.

Hit stateUp state

**674** Chapter 16 Adobe® Flash® CS3

loadingClip.removeEventListener( Event.ENTER_FRAME, onBegin ); gotoAndPlay( 2 );

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

• MouseEvent.MOUSE_DOWN specifies that an action is performed when the user clicks the button.

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

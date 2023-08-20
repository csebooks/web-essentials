---
title: "Adobe® Dreamweaver® Cs3"
weight: 5
---

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

**Look-and-Feel Observation 20.1** _When you press_ Enter _after typing text in **Design** view, Dreamweaver encloses that text in a new paragraph (p) element. If you want to insert only a <br /> tag into a page, hold_ Shift _while pressing_ Enter*.* 20.1

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

**20.5 Symbols and Lines** Dreamweaver allows you to insert characters that are not located on the standard key- board. These characters are accessed by selecting **HTML** in the **Insert** menu, then selecting **Special Characters**. Select **Other*…*** from the **Special Characters** submenu to view the **Insert Other Character dialog**, which contains a list of various characters (Fig. 20.17).

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

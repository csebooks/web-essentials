---
title: "Asp.Net 2.0 And Asp.Net Ajax"
weight: 5
---

# OBJECTIVES 
In this chapter you will learn:

- Web application development using Active Server Pages .NET (ASP.NET).

- To create Web Forms.

- To create ASP.NET applications consisting of multiple Web Forms.

- To maintain state information about a user with session tracking and cookies.

- To use the **Web Site Administration Tool** to modify web application configuration settings.

- To control user access to web applications using forms authentication and ASP.NET login controls.

- To use databases in ASP.NET applications.

- To design a master page and content pages to create a uniform look-and-feel for a website.


## Introduction 
This chapter introduces **web application development** with Microsoft’s **Active Server Pages .NET (ASP.NET) 2.0** technology. Web-based applications create web content for web-browser clients. This web content includes Extensible HyperText Markup Language (XHTML), client-side scripting, images and binary data. If you are not familiar with XHTML, you should read Chapter 4 before studying this chapter. [Note: This chapter as- sumes that you know Visual Basic and are familiar with the .NET platform version 2.0. To learn more about Visual Basic, check out Visual Basic 2005 How to Program, Third Edi- tion, or visit our Visual Basic Resource Center at www.deitel.com/visualbasic.]

We present several examples that demonstrate web application development using **Web Forms**, **web controls** (also called **ASP.NET server controls**) and Visual Basic pro- gramming. We also introduce ASP.NET Ajax and use it to enhance one of the earlier exam- ples. Web Form files have the filename extension **.aspx** and contain the web page’s GUI. You customize Web Forms by adding web controls including labels, text boxes, images, buttons and other GUI components. The Web Form file generates the web page that is sent to the client browser. From this point onward, we refer to Web Form files as **ASPX files**.


An ASPX file created in Visual Studio is implemented as a class written in a .NET language, such as Visual Basic. This class contains event handlers, initialization code, utility methods and other supporting code. The file that contains this class is called the **code-behind file** and provides the ASPX file’s programmatic implementation.

To develop the code and GUIs in this chapter, we used Microsoft Visual Web Devel- oper 2005 Express—an IDE designed for developing ASP.NET web applications. Visual Web Developer and Visual Basic 2005 Express share many common features and visual programming tools that simplify building complex applications, such as those that access a database (Sections 25.5–25.6). The full version of Visual Studio 2005 includes the func- tionality of Visual Web Developer, so the instructions we present for Visual Web Devel- oper also apply to Visual Studio 2005. Note that you must install either Visual Web Developer 2005 Express (available from msdn.microsoft.com/vstudio/express/vwd/

default.aspx) or a complete version of Visual Studio 2005 to implement the programs in this chapter.

## Creating and Running a Simple Web Form Example
Our first example displays the web server’s time of day in a browser window. When run, this program displays the text A Simple Web Form Example, followed by the web server’s time. As mentioned previously, the program consists of two related files—an ASPX file (Fig. 25.1) and a Visual Basic code-behind file (Fig. 25.2), which we’ll discuss in Section 25.2.5. We first display the markup, code and output, then we carefully guide you through the step-by-step process of creating this program. [Note: The markup in Fig. 25.1 and other ASPX file listings in this chapter is the same as the markup that appears in Visual Web Developer, but we’ve reformatted it for presentation purposes to make the code more readable.]

Visual Web Developer generates all the markup shown in Fig. 25.1 when you set the web page’s title, type text in the Web Form, drag a Label onto the Web Form and set the properties of the page’s text and the Label. We discuss these steps in Section 25.2.6.

~~~html
1 <%-- Fig. 25.1: WebTime.aspx --%>
2 <%-- A page that displays the current time in a Label. --%>
3
4
5
6 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
7 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
8
9 <html xmlns="http://www.w3.org/1999/xhtml" >
10 <head >
11 <title>A Simple Web Form Example</title>
12 </head>
13 <body>
14 <form id="form1" >
15 <div>
16 <h2>
17 Current time on the Web server:</h2>
~~~

**Fig. 25.1** | ASPX file that displays the web server’s time. (Part 1 of 2.)

~~~html
18 <p>
19
20
21
22 </p>
23 </div>
24 </form>
25 </body>
26 </html>
~~~

**Fig. 25.1** | ASPX file that displays the web server’s time. (Part 2 of 2.)


### 25.2.1 Examining an ASPX File
The ASPX file contains other information in addition to XHTML. Lines 1–2 are **ASP.NET comments** that indicate the figure number, the filename and the purpose of the file. ASP.NET comments begin with **<%--** and terminate with **\--%>**. We added these com- ments to the file. ASP.NET comments are not output as part of the XHTML sent to the client. Lines 3–4 use a **Page** directive (in an ASPX file a **directive** is delimited by **<%@** and **%>**) to specify information needed by ASP.NET to process this file. The **Language** at- tribute of the Page directive specifies the language of the code-behind file as Visual Basic ("VB"); the code-behind file (i.e., the **CodeFile**) is WebTime.aspx.vb. A code-behind file- name usually consists of the full ASPX filename (e.g., WebTime.aspx) followed by a filena- me extension indicating the programming language (.vb in this chapter’s examples).

The **AutoEventWireup** attribute (line 3) determines how Web Form events are han- dled. When AutoEventWireup is set to true, ASP.NET determines which methods in the class are called in response to events generated in the Page. For example, ASP.NET will call methods PageInit and PageLoad in the code-behind file to handle the Page’s Init and Load events, respectively. AutoEventWireup requires the event-handling methods to follow specific naming copnventions. (We discuss these events later in the chapter.)

The **Inherits** attribute (line 4) specifies the page’s class name—in this case, WebTime. We say more about Inherits momentarily. [Note: We explicitly set the **EnableSession-**

**State** attribute (line 4) to False. We explain the significance of this attribute later in the chapter. The IDE sometimes generates attribute values (e.g., true and false) and control names (as you will see later in the chapter) that do not adhere to our standard code capi- talization conventions (i.e., True and False). Like Visual Basic, ASP.NET markup is not case sensitive, so using a different case is not problematic. To remain consistent with the code generated by the IDE, we do not modify these values in our code listings or in our accompanying discussions.]

For this first ASPX file, we provide a brief discussion of the XHTML markup. For more information on XHTML, see Chapter 4. Lines 6–7 contain the document type dec- laration, which specifies the document element name (HTML) and the PUBLIC Uniform Resource Identifier (URI) for the DTD that defines the XHTML vocabulary.

Lines 9–10 contain the <html> and <head> start tags, respectively. XHTML docu- ments have the root element html and mark up information about the document in the head element. Also note that the html element specifies the XML namespace of the docu- ment using the xmlns attribute (see Section 14.4).


Notice the **runat** attribute in line 10, which is set to **"server"**. This attribute indi- cates that when a client requests this ASPX file, ASP.NET processes the head element and its nested elements on the server and generates the corresponding XHTML, which is then sent to the client. In this case, the XHTML sent to the client will be identical to the markup in the ASPX file. However, as you will see, ASP.NET can generate complex XHTML markup from simple elements in an ASPX file.

Line 11 sets the title of this web page. We demonstrate how to set the title through a property in the IDE shortly. Line 13 contains the <body> start tag, which begins the body of the XHTML document; the body contains the main content that the browser displays. The form that contains our XHTML text and controls is defined in lines 14–24. Again, the runat attribute in the form element indicates that this element executes on the server, which generates equivalent XHTML and sends it to the client. Lines 15–23 contain a div element that groups the elements of the form in a block of markup.

**Software Engineering Observation 25.1** 
>Most ASP.NET controls must be placed in a form element in which the <form> tag has the runat="server" attribute.

Lines 16–17 are an XHTML h2 heading element. As we demonstrate shortly, the IDE generates this element in response to typing text directly in the Web Form and selecting the text as a second-level heading.

Lines 18–22 contain a p element to mark up a paragraph of content in the browser. Lines 19–21 mark up a Label web control. The properties that we set in the **Properties** window, such as Font-Size and BackColor (i.e., background color), are attributes here. The **ID** attribute (line 19) assigns a name to the control so that it can be manipulated pro- grammatically in the code-behind file. We set the control’s **EnableViewState** attribute (line 20) to False. We explain the significance of this attribute later in the chapter.

The **asp: tag prefix** in the declaration of the **Label** tag (line 19) indicates that the label is an ASP.NET web control, not an XHTML element. Each web control maps to a corresponding XHTML element (or group of elements)—when processing a web control on the server, ASP.NET generates XHTML markup that will be sent to the client to rep- resent that control in a web browser.

**Portability Tip 25.1** 
>The same web control can map to different XHTML elements, depending on the client browser and the web control’s property settings.

In this example, the asp:Label control maps to the XHTML **span** element (i.e., ASP.NET creates a span element to represent this control in the client’s web browser). A span element particular element is used because span elements allow formatting styles to be applied to text. Several of the property values that were applied to our label are repre- sented as part of the style attribute of the span element. You will soon see what the gen- erated span element’s markup looks like.

The web control in this example contains the runat="server" attribute–value pair (line 19), because this control must be processed on the server so that the server can trans- late the control into XHTML that can be rendered in the client browser. If this attribute pair is not present, the asp:Label element is written as text to the client (i.e., the control is not converted into a span element and does not render properly).


### 25.2.2 Examining a Code-Behind File
Figure 25.2 presents the code-behind file. Recall that the ASPX file in Fig. 25.1 references WebTime.aspx.vb in line 3.

Line 3 (Fig. 25.2) begins the declaration of class WebTime. A class declaration can span multiple source-code files, and the separate portions of the class declaration in each file are known as partial classes. The Partial modifier in line 3 indicates that the code-behind file is a partial class. We discuss the remainder of this class shortly.

Line 4 indicates that WebTime inherits from class **Page** in namespace **System.Web.UI**. This namespace contains classes and controls that assist in building web-based applica- tions. Class Page provides events and objects necessary for creating web-based applica- tions. In addition to class Page, System.Web.UI also includes class **Control**—the base class that provides common functionality for all web controls.

Lines 7–11 define method **PageInit**, which handles the page’s **Init** event. This event indicates that all the controls on the page have been created and initialized and addi- tional application-specific initialization can now be performed. The only initialization required for this page is setting timeLabel’s Text property to the time on the server (i.e., the computer on which this code executes). The statement in line 10 retrieves the current time and formats it as hh:mm:ss. For example, 9 AM is formatted as 09:00:00, and 2:30 PM is formatted as 14:30:00. Notice that the code-behind file can access timeLabel (the ID of the Label in the ASPX file) programmatically, even though the file does not contain a declaration for a variable named timeLabel. You will learn why momentarily.

~~~vb
1 ' Fig. 25.5: WebTime.aspx.vb
2 ' Code-behind file for a page that displays the current time.
3 Partial Class WebTime
4 Inherits System.Web.UI.Page
5
6 ' initializes the contents of the page
7 Protected Sub Page_Init(ByVal sender As Object, _
8 ByVal e As System.EventArgs) Handles Me.Init
9
10
11 End Sub ' Page_Init
12 End Class ' WebTime
~~~

**Fig. 25.2** | Code-behind file for a page that displays the web server’s time.


### 25.2.3 Relationship Between an ASPX File and a Code-Behind File
How are the ASPX and code-behind files used to create the web page that is sent to the client? First, recall that class WebTime is the base class specified in line 4 of the ASPX file (Fig. 25.1). This class (partially declared in the code-behind file) inherits from Page, which defines general web page functionality. Partial class WebTime inherits this function- ality and defines some of its own (i.e., displaying the current time). The code in the code- behind file displays the time, whereas the code in the ASPX file defines the GUI.

When a client requests an ASPX file, ASP.NET creates two partial classes behind the scenes. The code-behind file contains one partial class named WebTime and ASP.NET gen- erate another partial class containing the remainder of class WebTime, based on the markup in the ASPX file. For example, WebTime.aspx contains a **Label** web control with ID time-

Label, so the generated partial class would contain a declaration for a variable named timeLabel of type System.Web.UI.WebControls.Label. Class Label represents a web control for displaying text. It is defined in namespace **System.Web.UI.WebControls**, which contains web controls for designing a page’s user interface. Web controls in this namespace derive from class **WebControl**. When compiled, the partial class that declares timeLabel combines with the code-behind file’s partial class declaration to form the com- plete WebTime class. This explains why line 10 in Fig. 25.2 can access timeLabel, which is created in lines 19–21 of WebTime.aspx (Fig. 25.1)—method PageInit and control timeLabel are actually members of the same class, but defined in separate partial classes.

The partial class generated by ASP.NET is based on the ASPX file that defines the page’s visual representation. This partial class is combined with the one in Fig. 25.2, which defines the page’s logic. The first time the web page is requested, this class is compiled and an instance is created. This instance represents the page and creates the XHTML that is sent to the client. The assembly created from the compiled partial classes is placed in a sub- directory of

C:\\WINDOWS\\Microsoft.NET\\Framework\VersionNumber\\ Temporary ASP.NET Files\\WebTime

where VersionNumber is the version number of the .NET Framework (e.g., v2.0.50727) installed on your computer.

Once the web page has been compiled, no recompilation is required on subsequent requeses. New instances of the web page class will be created to serve each request. The project will be recompiled only when you modify the application; changes are detected by the runtime environment, and the application is recompiled to reflect the altered content.

### 25.2.4 How the Code in an ASP.NET Web Page Executes
Let’s look briefly at how the code for our web page executes. When an instance of the page is created, the **PreInit** event occurs first, invoking method **PagePreInit**, which can be used to set a page’s theme and look-and-feel (and perform other tasks that are beyond this chapter’s scope). The Init event occurs next, invoking method PageInit. Method PageInit is used to initialize objects and other aspects of the page. After PageInit exe- cutes, the **Load** event occurs, and the **PageLoad** event handler executes. Although not present in this example, the PreInit and Load events are inherited from class Page. You will see examples of the PageLoad event handler later in the chapter. After the Load event handler finishes executing, the page processes events that are generated by the page’s controls, such as user interactions with the GUI. When the user’s request is considered fully processed, an **Unload** event occurs, which calls the **PageUnload** event handler. This event, too, is inherited from class Page. PageUnload typically contains code that releases re- sources used by the page. Other events occur as well, but are typically used only by ASP.NET controls to generate XHTML to render client-side controls. You can learn more about a Page’s event life cycle at msdn2.microsoft.com/en-US/library/ms178472.aspx.

### 25.2.5 Examining the XHTML Generated by an ASP.NET Application
Figure 25.3 shows the XHTML generated by ASP.NET when a client browser requests WebTime.aspx (Fig. 25.1). To view this code, select **View > Source** in Internet Explorer. We added the comments in lines 1–2 and reformatted the XHTML for readability.

The markup in this page is similar to the ASPX file. Lines 7–9 define a document header comparable to that in Fig. 25.1. Lines 10–25 define the document’s body. Line 11 begins the form, a mechanism for collecting user information and sending it to the web server. In this particular program, the user does not submit data to the web server for pro- cessing; however, processing user data is a crucial part of many applications that is facili- tated by forms. We demonstrate how to submit form data to the server in later examples.

XHTML forms can contain visual and nonvisual components. Visual components include buttons and other GUI components with which users interact. Nonvisual compo- nents, called **hidden inputs**, store data, such as e-mail addresses, that the document author specifies. A hidden input is defined in lines 13–14. We discuss the precise meaning of this

~~~html
1 <!-- Fig. 25.3: WebTime.html -->
2 <!-- The XHTML generated when WebTime.aspx is loaded. -->
3 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
4 "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
5
6 <html xmlns="http://www.w3.org/1999/xhtml" >
7 <head>
8 <title>A Simple Web Form Example</title>
9 </head>
10 <body>
11 <form name="form1" method="post" action="WebTime.aspx" id="form1">
12 <div>
13
14
15 </div>
16
17 <div>
18 <h2>Current time on the Web server:</h2>
19 <p>
20
21
22 </p>
23 </div>
24 </form>
25 </body>
26 </html>
~~~

**Fig. 25.3** | XHTML response when the browser requests WebTime.aspx.

hidden input later in the chapter. Attribute **method** of the form element (line 11) specifies the method by which the web browser submits the form to the server. The **action**

attribute identifies the name and location of the resource that will be requested when this form is submitted—in this case, WebTime.aspx. Recall that the ASPX file’s form element contained the runat="server" attribute–value pair (line 14 of Fig. 25.1). When the form is processed on the server, the runat attribute is removed. The method and action

attributes are added, and the resulting XHTML form is sent to the client browser. In the ASPX file, the form’s Label (i.e., timeLabel) is a web control. Here, we are

viewing the XHTML created by our application, so the form contains a span element (lines 20–21 of Fig. 25.3) to represent the text in the label. In this particular case, ASP.NET maps the Label web control to an XHTML span element. The formatting options that were specified as properties of timeLabel, such as the font size and color of the text in the Label, are now specified in the style attribute of the span element.

Notice that only those elements in the ASPX file marked with the runat="server"

attribute–value pair or specified as web controls are modified or replaced when the file is processed by the server. The pure XHTML elements, such as the h2 in line 18, are sent to the browser as they appear in the ASPX file.

### 25.2.6 Building an ASP.NET Web Application
Now that we have presented the ASPX file, the code-behind file and the resulting web page sent to the web browser, we show the steps we used to create this application in Visual Web Developer.

**Step 1: Creating the Website** In Visual Web Developer, select **File > New Web Site...** to display the **New Web Site** dialog (Fig. 25.4). In this dialog, select **ASP.NET Web Site** in the **Templates** pane. Below this pane, there are two fields in which you can specify the type and location of the web appli-

**Fig. 25.4** | Creating an **ASP.NET Web Site** in Visual Web Developer.



cation you are creating. If it is not already selected, select **HTTP** from the drop-down list closest to **Location**. This indicates that the web application should be configured to run as an IIS application using HTTP (either on your computer or on a remote computer). We want our project to be located in http://localhost, which is the URL for IIS’s root di- rectory (this URL normally corresponds to the C:\\InetPub\\wwwroot directory on your machine). The name **localhost** indicates that the server resides on local computer. If the web server were located on a different computer, localhost would be replaced with the appropriate IP address or hostname. By default, Visual Web Developer sets the location where the website will be created to http://localhost/WebSite, which we change to http://localhost/WebTime.

If you do not have IIS on your computer or do not have permission to access it, you can select **File System** from the drop-down list next to **Location** to create the web applica- tion in a folder on your computer. You will be able to test the application using Visual Web Developer’s internal ASP.NET Development Server, but you will not be able to access the application remotely over the Internet.

The **Language** drop-down list in the **New Web Site** dialog allows you to specify the language (i.e., Visual Basic, Visual C# or Visual J#) in which you will write the code- behind file(s) for the web application. Change the setting to Visual Basic. Click **OK** to create the website. This creates the directory C:\\Inetpub\\wwwroot\\WebTime (in IIS) and makes it accessible through the URL http://localhost/WebTime. This action also creates a WebTime directory in the directory My Documents\\Visual Studio 2005\\Projects in which the project’s solution files (e.g., WebTime.sln) are stored.

**Step 2: Examining the Solution Explorer of the Newly Created Project** The next several figures describe the new project’s content, beginning with the **Solution Explorer** shown in Fig. 25.5. Like Visual Basic 2005 Express, Visual Web Developer cre- ates several files when you create a new project. It creates an ASPX file (i.e., Web Form) named Default.aspx for each new **ASP.NET Web Site** project. This file is open by default in the Web Forms Designer in **Source** mode when the project first loads (we discuss this momentarily). As mentioned previously, a code-behind file is included as part of the project. Visual Web Developer creates a code-behind file named Default.aspx.vb. To open the ASPX file’s code-behind file, right click the ASPX file and select **View Code** or click the **View Code** button ( ) at the top of the **Solution Explorer**. Alternatively, you can

**Fig. 25.5** | **Solution Explorer** window for project WebTime.

expand the node for the ASPX file to reveal the node for the code-behind file (see Fig. 25.5). You can also choose to list all the files in the project individually (instead of nested) by clicking the **Nest Related Files** button—this option is turned on by default, so clicking the button toggles the option off.

The **Properties** and **Refresh** buttons in Visual Web Developer’s **Solution Explorer** behave like those in Visual Basic 2005 Express. Visual Web Developer’s **Solution Explorer** also contains the buttons **View Designer**, **Copy Web Site** and **ASP.NET Configuration**. The **View Designer** button allows you to open the Web Form in **Design** mode, which we discuss shortly. The **Copy Web Site** button opens a dialog that allows you to move the files in this project to another location, such as a remote web server. This is useful if you are devel- oping the application on your local computer, but want to make it available to the public from a different location. Finally, the **ASP.NET Configuration** button takes you to a web page called the **Web Site Administration Tool**, where you can manipulate various settings and security options for your application. We discuss this tool in greater detail in Section 25.6.

**Step 3: Examining the Toolbox in Visual Web Developer** 
Figure 25.6 shows the **Toolbox** displayed in the IDE when the project loads. Figure 25.6(a) displays the beginning of the **Standard** list of web controls, and Fig. 25.6(b) displays the remaining web controls, and the list of **Data** controls used in ASP.NET. We discuss specific controls in Fig. 25.6 as they are used throughout the chapter. Notice that some controls in the **Toolbox** are similar to Windows controls.

**Fig. 25.6** | **Toolbox** in Visual Web Developer.


**Step 4: Examining the Web Forms Designer** 
Figure 25.7 shows the Web Forms Designer in **Source** mode, which appears in the center of the IDE. When the project loads for the first time, the Web Forms Designer displays the autogenerated ASPX file (i.e., Default.aspx) in **Source** mode, which allows you to view and edit the markup that comprises the web page. The markup listed in Fig. 25.7 was created by the IDE and serves as a template that we will modify shortly. Clicking the **De- sign** button in the lower-left corner of the Web Forms Designer switches to **Design** mode (Fig. 25.8), which allows you to drag and drop controls from the **Toolbox** onto the Web Form and see the controls. You can also type at the current cursor location to add text to the web page. We demonstrate this shortly. In response to such actions, the IDE generates the appropriate markup in the ASPX file. Notice that **Design** mode indicates the XHTML element where the cursor is currently located. Clicking the **Source** button returns the Web Forms Designer to **Source** mode, where you can see the generated markup.

**Fig. 25.7** | **Source** mode of the Web Forms Designer.

**Fig. 25.8** | **Design** mode of the Web Forms Designer.


**Step 5: Examining the Code-Behind File in the IDE** 
The next figure (Fig. 25.9) displays Default.aspx.vb—the code-behind file generated by Visual Web Developer for Default.aspx. Right click the ASPX file in the **Solution Explor- er** and select **View Code** to open the code-behind file. When it is first created, this file con- tains nothing more than a partial class declaration. We will add the PageInit event handler to this code momentarily.

**Step 6: Renaming the ASPX File** 
Now that you’ve seen the contents of the default ASPX and code-behind files, let’s rename these files. Right click the ASPX file in the **Solution Explorer** and select **Rename**. Enter the new filename WebTime.aspx and press Enter. This updates the name of both the ASPX file and the code-behind file. The IDE also updates the Page directive’s CodeFile attribute in WebTime.aspx.

**Step 7: Renaming the Class in the Code-Behind File and Updating the ASPX File** 
Although renaming the ASPX file causes the name of the code-behind file to change, this action does not affect the name of the partial class declared in the code-behind file. Open the code-behind file and change the class name from Default (line 2 in Fig. 25.9) to WebTime, so the partial class declaration appears as in line 3 of Fig. 25.2. Recall that this class is also referenced by the Page directive in the ASPX file. Using the Web Forms De- signer’s **Source** mode, modify the Inherits attribute of the Page directive in WebTime.as-

px, so it appears as in line 4 of Fig. 25.1. The value of the Inherits attribute and the class name in the code-behind file must be identical; otherwise, you’ll get errors when you build the web application.

**Step 8: Changing the Title of the Page** 
Before designing the content of the Web Form, we change its title from the default Unti- tled Page (line 9 of Fig. 25.7) to A Simple Web Form Example. To do so, open the ASPX file in **Source** mode and modify the text in the title element—i.e., the text between the tags <title> and </title>. Alternatively, you can open the ASPX file in **Design** mode and modify the Web Form’s **Title** property in the **Properties** window. To view the Web Form’s properties, select DOCUMENT from the drop-down list in the **Properties** window; **DOCUMENT** represents the Web Form in the **Properties** window.

**Step 9: Designing the Page** 
Designing a Web Form is as simple as designing a Windows Form. To add controls to the page, drag-and-drop them from the **Toolbox** onto the Web Form in **Design** mode. Like the Web Form itself, each control is an object that has properties, methods and events. You can set these properties and events visually using the **Properties** window or programmati- cally in the code-behind file. However, unlike working with a Windows Form, you can type text directly on a Web Form at the cursor location or insert XHTML elements from the **Toolbox**.

Controls and other elements are placed sequentially on a Web Form, much as text and images are placed in a document using word-processing software like Microsoft Word. Controls are placed one after another in the order in which you drag-and-drop them onto the Web Form. The cursor indicates the point at which text and XHTML elements will be inserted. If you want to position a control between existing text or controls, you can drop the control at a specific position within the existing elements. You can also rearrange existing controls using drag-and-drop actions. By default, controls flow based on the width of the page. An alternate type of layout is known as **absolute positioning**, in which con- trols are located exactly where they are dropped on the Web Form. You can enable abso- lute positioning in **Design** mode by selecting **Layout > Position > Auto-position Options…**., clicking the first checkbox in the **Positioning options** pane of the **Options** dialog that appears, then selecting the appropriate positioning option from the drop-down menu.

**Portability Tip 25.2** 
>Absolute positioning is discouraged, because pages designed in this manner may not render cor- rectly on computers with different screen resolutions and font sizes. This could cause absolutely positioned elements to overlap each other or display off-screen, requiring the client to scroll to see the full page content.

In this example, we use one piece of text and one Label. To add the text to the Web Form, click the blank Web Form in **Design** mode and type Current time on the Web

server:. Visual Web Developer is a **WYSIWYG** (**What You See Is What You Get**) editor—whenever you make a change to a Web Form in **Design** mode, the IDE creates the markup (visible in **Source** mode) necessary to achieve the desired visual effects seen in **Design** mode. After adding the text to the Web Form, switch to **Source** mode. You should see that the IDE added this text to the div element that appears in the ASPX file by default. Back in **Design** mode, highlight the text you added. From the **Block Format** drop- down list (see Fig. 25.10), choose **Heading 2** to format this text as a heading that will appear bold in a font slightly larger than the default. This action encloses the text in an h2

element. Finally, click to the right of the text and press the Enter key to start a new para- graph. This action generates a p (paragraph) element in the ASPX file’s markup. The IDE should now look like Fig. 25.10.

You can place a Label on a Web Form either by dragging-and-dropping or by double clicking the **Toolbox**’s **Label** control. Ensure that the cursor is in the new paragraph, then add a Label that will be used to display the time. Using the **Properties** window, set the (ID) property of the Label to timeLabel. In the Text property, delete timeLabel’s text— this text will be set programmatically in the code-behind file. When a Label does not con- tain text, its name is displayed in square brackets in the Web Forms Designer (Fig. 25.11) as a placeholder for design and layout purposes. This text is not displayed at execution time. We set timeLabel’s BackColor, ForeColor and Font-Size properties to Black, Yellow and XX-Large, respectively. To change the Label’s font properties, select the Label, expand the Font node in the **Properties** window and change each relevant property.

**Fig. 25.10** | WebTime.aspx after inserting text and a new paragraph.

As the Label’s properties are set, Visual Web Developer updates the ASPX file’s contents. Figure 25.11 shows the IDE after setting these properties.

Next, set the Label’s EnableViewState property to False. Finally, select DOCUMENT from the drop-down list in the **Properties** window and set the Web Form’s EnableSes- sionState property to False. We discuss both of these properties later in the chapter.


**Fig. 25.11** | WebTime.aspx after adding a Label and setting its properties.


**Step 10: Adding Page Logic** 
Now that you’ve designed the user interface, you’ll add Visual Basic code to the code-be- hind file to obtain the server’s time. Open WebTime.aspx.vb by double clicking its node in the **Solution Explorer**. In this example, we add a PageInit event handler (lines 7–11 of Fig. 25.2) to the code-behind file. Recall that PageInit handles the Init event and con- tains code to initialize the page. The statement in line 10 of Fig. 25.2 sets timeLabel’s text to the server’s current time.

**Step 11: Running the Program** 
After creating the Web Form, you can view it several ways. First, you can select **Debug > Start Without Debugging**, which runs the application by opening it in a browser window. If you created the application on your local IIS server (as we did in this example), the URL shown in the browser will be http://localhost/WebTime/WebTime.aspx (Fig. 25.2), in- dicating that the web page (the ASPX file) is located within the virtual directory WebTime

on the local IIS web server. IIS must be running to test the website in a browser. IIS can be started by executing inetmgr.exe from **Start > Run...**, right clicking **Default Web Site** and selecting **Start**. [Note: You might need to expand the node representing your computer to display the **Default Web Site**.]

If you created the ASP.NET application on the local file system, the URL shown in the browser will be http://localhost:PortNumber/WebTime/WebTime.aspx, where Port- Number is the number of the randomly assigned port on which Visual Web Developer’s built-in test server runs. The IDE assigns the port number on a per-solution basis. This URL indicates that the WebTime project folder is being accessed through the root directory of the test server running at localhost:PortNumber. When you select **Debug > Start Without Debugging**, a tray icon appears near the bottom-right of your screen next to the computer’s date and time to show that the **ASP.NET Development Server** is running. The test server stops when you exit Visual Web Developer.

To debug your application, you can select **Debug > Start Debugging** to view the web page in a web browser with debugging enabled. You cannot debug a web application unless debugging is explicitly enabled by the **Web.config** file—a file that stores configura- tion settings for an ASP.NET web application. You will rarely need to manually create or modify Web.config. The first time you select **Debug > Start Debugging** in a project, a dialog appears and asks whether you want the IDE to modify the Web.config file to enable debugging. After you click **OK**, the IDE enters **Running** mode. You can exit **Running** mode by selecting **Debug > Stop Debugging** in Visual Web Developer or by closing the browser window in which the ASPX file is displayed.

To view a specific ASPX file, you can right click either the Web Forms Designer or the ASPX filename (in the **Solution Explorer**) and select **View In Browser** to load the page in a web browser. Right clicking the ASPX file in the **Solution Explorer** and selecting **Browse With…** also opens the page in a browser, but first allows you to specify the web browser that should display the page and its screen resolution.

Finally, you can run your application by opening a browser window and typing the web page’s URL in the **Address** field. When testing an ASP.NET application on the same computer running IIS, type http://localhost/ProjectFolder/PageName.aspx, where ProjectFolder is the folder in which the page resides (usually the name of the project), and PageName is the name of the ASP.NET page. If your application resides on the local file system, you must first start the **ASP.NET Development Server** by running the application using one of the methods described above. Then you can type the URL (including the PortNumber found in the test server’s tray icon) in the browser to execute the application.

Note that all of these methods of running the application compile the project for you. In fact, ASP.NET compiles your web page whenever it changes between HTTP requests. For example, suppose you browse the page, then modify the ASPX file or add code to the code-behind file. When you reload the page, ASP.NET recompiles the page on the server before returning the HTTP response to the browser. This important new behavior of ASP.NET 2.0 ensures that clients always see the latest version of the page. You can man- ually compile a web page or an entire website by selecting **Build Page** or **Build Site**, respec- tively, from the **Build** menu in Visual Web Developer.

**Windows Firewall Settings** 
If you would like to test your web application over a network, you may need to change your Windows Firewall settings. For security reasons, Windows Firewall does not allow remote access to a web server on your local computer by default. To change this, open the Windows Firewall utility in the Windows Control Panel. In Windows XP, Click the **Ad- vanced** tab and select your network connection from the **Network Connection Settings** list, then click **Settings…**. On the **Services** tab of the **Advanced Settings** dialog, ensure that **Web Server (HTTP)** is checked. In Windows Vista click the **Change settings** link, then click **Continue** in dialog that appears. Select the **Exceptions** tab and place a check next to **World Wide Web Services (HTTP)**.

## Web Controls
This section introduces some of the web controls located in the **Standard** section of the **Toolbox** (Fig. 25.6). Figure 25.12 summarizes some of the web controls used in the chap- ter examples.


**Fig. 25.12** | Commonly used web controls.


### 25.3.1 Text and Graphics Controls
Figure 25.13 depicts a simple form for gathering user input. This example uses all the con- trols listed in Fig. 25.12, except Label, which you used in Section 25.2. The code in Fig. 25.13 was generated by Visual Web Developer in response to dragging controls onto the page in **Design** mode. To begin, create an ASP.NET website named WebControls. [Note: This example does not contain any functionality—i.e., no action occurs when the user clicks **Register**. We ask you to provide the functionality as an exercise. In subsequent examples, we demonstrate how to add functionality to many of these web controls.]

~~~html
1 <%-- Fig. 25.13: WebControls.aspx --%>
2 <%-- Registration form that demonstrates Web controls. --%>
3 <%@ Page Language="VB" AutoEventWireup="false"
4 CodeFile="WebControls.aspx.vb" Inherits="WebControls" %>
5
6 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
7 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
8
9 <html xmlns="http://www.w3.org/1999/xhtml">
10 <head runat="server">
11 <title>Web Controls Demonstration</title>
12 </head>
13 <body>
14 <form id="form1" runat="server">
15 <div>
16 <h3>This is a sample registration form.</h3>
17 <p>
18 <em>Please fill in all fields and click Register.</em></p>
19 <p>
20
21
22
23
24 </p>
25 <table id="TABLE1">
26 <tr>
27 <td style="width: 230px; height: 21px" valign="top">
28 <asp:Image ID="firstNameImage" runat="server"
29 EnableViewState="False" ImageUrl="~/Images/fname.png" />
30
31
32 </td>
33 <td style="width: 231px; height: 21px" valign="top">
34 <asp:Image ID="lastNameImage" runat="server"
35 EnableViewState="False" ImageUrl="~/Images/lname.png" />
36 <asp:TextBox ID="lastNameTextBox" runat="server"
37 EnableViewState="False"></asp:TextBox>
38 </td>
39 </tr>
40 <tr>
41 <td style="width: 230px" valign="top">
42 <asp:Image ID="emailImage" runat="server"
43 EnableViewState="False" ImageUrl="~/Images/email.png" />
44 <asp:TextBox ID="emailTextBox" runat="server"
45 EnableViewState="False"></asp:TextBox>
46 </td>
~~~

**Fig. 25.13** | Web Form that demonstrates web controls. (Part 1 of 3.)

~~~html
47 <td style="width: 231px" valign="top">
48 <asp:Image ID="phoneImage" runat="server"
49 EnableViewState="False" ImageUrl="~/Images/phone.png" />
50 <asp:TextBox ID="phoneTextBox" runat="server"
51 EnableViewState="False"></asp:TextBox>
52 Must be in the form (555) 555-5555.
53 </td>
54 </tr>
55 </table>
56 <p>
57 <asp:Image ID="publicationsImage" runat="server"
58 EnableViewState="False"
59 ImageUrl="~/Images/publications.png" /> &nbsp;
60 <span style="color: teal">
61 Which book would you like information about?</span>
62 </p>
63 <p>
64
65
66
67
68
69
70
71
72
73
74 </p>
75 <p>
76
77
78
79
80
81 </p>
82 <p>
83 <asp:Image ID="osImage" runat="server" EnableViewState="False"
84 ImageUrl="~/Images/os.png" /> &nbsp;
85 <span style="color: teal">
86 Which operating system are you using?</span>
87 </p>
88 <p>
89
90
91
92
93
94
95
96
97 </p>
98 <p>
~~~

**Fig. 25.13** | Web Form that demonstrates web controls. (Part 2 of 3.)

**Fig. 25.13** | Web Form that demonstrates web controls. (Part 3 of 3.)


Before discussing the web controls used in this ASPX file, we explain the XHTML that creates the layout seen in Fig. 25.13. The page contains an h3 heading element (line 16), followed by a series of additional XHTML blocks. We place most of the web controls inside p elements (i.e., paragraphs), but we use an XHTML table element (lines 25–55) to organize the Image and TextBox controls in the user information section of the page. In the preceding section, we described how to add heading elements and paragraphs visually without manipulating any XHTML in the ASPX file directly. Visual Web Developer allows you to add a table in a similar manner.


**Adding an XHTML Table to a Web Form** 
To create a table with two rows and two columns in **Design** mode, select the **Insert Table** command from the **Layout** menu. In the **Insert Table** dialog that appears, select the **Custom** radio button. In the **Layout** group box, change the values of **Rows** and **Columns** to 2. By default, the contents of a table cell are aligned vertically in the middle of the cell. We changed the vertical alignment of all cells in the table by clicking the **Cell Properties…** but- ton, then selecting **top** from the **Vertical align** combo box in the resulting dialog. This caus- es the content of each table cell to align with the top of the cell. Click **OK** to close the **Cell Properties** dialog, then click **OK** to close the **Insert Table** dialog and create the table. Once a table is created, controls and text can be added to particular cells to create a neatly orga- nized layout.

**Setting the Color of Text on a Web Form** 
Notice that some of the instructions to the user on the form appear in a teal color. To set the color of a specific piece of text, highlight the text and select **Format > Foreground col- or…**. In the **Color Picker** dialog, click the **Named Colors** tab and choose a color. Click **OK** to apply the color. Note that the IDE places the colored text in an XHTML span element (e.g., lines 22–23) and applies the color using the span’s style attribute.

**Examining Web Controls on a Sample Registration Form** 
Lines 20–21 of Fig. 25.13 define an **Image** control, which inserts an image into a web page. The images used in this example are located in the chapter’s examples directory. You can download the examples from www.deitel.com/books/iw3htp4. Before an image can be displayed on a web page using an Image web control, the image must first be added to the project. We added an Images folder to this project (and to each example project in the chapter that uses images) by right clicking the location of the project in the **Solution Explor- er**, selecting **New Folder** and entering the folder name Images. We then added each of the images used in the example to this folder by right clicking the folder, selecting **Add Existing Item…** and browsing for the files to add. You can also drag a folder full of images onto the project’s location in the **Solution Explorer** to add the folder and all the images to the project.

The **ImageUrl** property (line 21) specifies the location of the image to display in the Image control. To select an image, click the ellipsis next to the ImageUrl property in the **Properties** window and use the **Select Image** dialog to browse for the desired image in the project’s Images folder. When the IDE fills in the ImageUrl property based on your selec- tion, it includes a tilde and forward slash (~/) at the beginning of the ImageUrl—this indi- cates that the Images folder is in the root directory of the project.

Lines 25–55 contain the table element created by the steps discussed previously. Each td element contains an Image control and a **TextBox** control, which allows you to obtain text from the user and display text to the user. For example, lines 30–31 define a TextBox control used to collect the user’s first name.

Lines 64–73 define a **DropDownList**. This control is similar to the XHTML select

control. When a user clicks the drop-down list, it expands and displays a list from which the user can make a selection. Each item in the drop-down list is defined by a **ListItem**

element (lines 66–72). After dragging a DropDownList control onto a Web Form, you can add items to it using the **ListItem Collection Editor**. This process is similar to customizing a ListBox in a Windows application. In Visual Web Developer, you can access the **ListItem Collection Editor** by clicking the ellipsis next to the Items property of the DropDownList, or by using the **DropDownList Tasks** menu. You can open this menu by clicking the small arrowhead that appears in the upper-right corner of the control in **Design** mode (Fig. 25.14). This menu is called a **smart tag menu**. Visual Web Developer displays smart tag menus for many ASP.NET controls to facilitate common tasks. Clicking **Edit Items...** in the **DropDownList Tasks** menu opens the **ListItem Collection Editor**, which allows you to add ListItem elements to the DropDownList.

The **HyperLink** control (lines 76–80 of Fig. 25.13) adds a hyperlink to a web page. The **NavigateUrl** property (line 77) of this control specifies the resource (i.e., http:// www.deitel.com) that is requested when a user clicks the hyperlink. Setting the **Target**

property to blank specifies that the requested web page should open in a new browser window. By default, HyperLink controls cause pages to open in the same browser window.

Lines 89–96 define a **RadioButtonList** control, which provides a series of radio but- tons from which the user can select only one. Like options in a DropDownList, individual radio buttons are defined by ListItem elements. Note that, like the **DropDownList Tasks** smart tag menu, the **RadioButtonList Tasks** smart tag menu also provides an **Edit Items…** link to open the **ListItem Collection Editor**.

The final web control in Fig. 25.13 is a **Button** (lines 99–100). A Button web control represents a button that triggers an action when clicked. This control typically maps to an XHTML input element with attribute type set to "submit". As stated earlier, clicking the **Register** button in this example does not do anything.

**Fig. 25.14** | **DropDownList Tasks** smart tag menu.


### 25.3.2 AdRotator Control
Web pages often contain product or service advertisements, which usually consist of im- ages. Although website authors want to include as many sponsors as possible, web pages can display only a limited number of advertisements. To address this problem, ASP.NET provides the **AdRotator** web control for displaying advertisements. Using advertisement data located in an XML file, an AdRotator randomly selects an image to display and gen- erates a hyperlink to the web page associated with that image. Browsers that do not support images display alternate text that is specified in the XML document. If a user clicks the image or substituted text, the browser loads the web page associated with that image.

**Demonstrating the AdRotator Web Control** 
Figure 25.15 demonstrates the AdRotator web control. In this example, the “advertise- ments” that we rotate are the flags of 10 countries. When a user clicks the displayed flag image, the browser is redirected to a web page containing information about the country that the flag represents. If a user refreshes the browser or requests the page again, one of the 10 flags is again chosen at random and displayed.

The ASPX file in Fig. 25.15 is similar to that in Fig. 25.1. However, instead of XHTML text and a Label, this page contains XHTML text (the h3 element in line 16) and an AdRotator control named countryRotator (lines 18–19). This page also contains an XmlDataSource control (lines 20–22), which supplies the data to the AdRotator con- trol. The background attribute of the page’s body element (line 13) is set to the image background.png, located in the project’s Images folder. To specify this file, click the ellipsis provided next to the Background property of DOCUMENT in the **Properties** window and use the resulting dialog to select background.png from the Images folder. The images and XML file used in this example are both located in the chapter’s examples directory.

You do not need to add any code to the code-behind file, because the AdRotator con- trol “does all the work.” The output depicts two different requests. Figure 25.15(a) shows

~~~html
1 <%-- Fig. 25.15: FlagRotator.aspx --%>
2 <%-- A Web Form that displays flags using an AdRotator control. --%>
3 <%@ Page Language="VB" AutoEventWireup="false"
4 CodeFile="FlagRotator.aspx.vb" Inherits="FlagRotator" %>
5
6 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
7 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
8
9 <html xmlns="http://www.w3.org/1999/xhtml" >
10 <head runat="server">
11 <title>Flag Rotator</title>
12 </head>
13 <body background="Images/background.png">
14 <form id="form1" runat="server">
15 <div>
16 <h3>AdRotator Example</h3>
17 <p>
18
19
20
21
22
23 </p>
24 </div>
25 </form>
26 </body>
27 </html>
~~~

**Fig. 25.15** | Web Form that demonstrates the AdRotator web control. (Part 1 of 2.)

**Fig. 25.15** | Web Form that demonstrates the AdRotator web control. (Part 2 of 2.)


the first time the page is requested, when the American flag is shown. In the second request, as shown in Fig. 25.15(b), the French flag is displayed. Figure 25.15(c) depicts the web page that loads when the French flag is clicked.

**Connecting Data to an AdRotator Control** 
An AdRotator control accesses an XML file (presented shortly) to determine what adver- tisement (i.e., flag) image, hyperlink URL and alternate text to display and include in the page. To connect the AdRotator control to the XML file, we create an **XmlDataSource**

control—one of several ASP.NET data controls (found in the **Data** section of the **Toolbox**) that encapsulate data sources and make such data available for web controls. An XmlData-

Source references an XML file containing data that will be used in an ASP.NET applica- tion. Later in the chapter, you will learn more about data-bound web controls, as well as the SqlDataSource control, which retrieves data from a SQL Server database, and the ObjectDataSource control, which encapsulates an object that makes data available.

To build this example, we first add the XML file AdRotatorInformation.xml to the project. Each project created in Visual Web Developer contains an AppData folder, which is intended to store all the data used by the project. Right click this folder in the **Solution Explorer** and select **Add Existing Item…**, then browse for AdRotatorInformation.xml on your computer. We provide this file in the chapter’s examples directory in the subdirectory named exampleXMLFiles.

After adding the XML file to the project, drag an AdRotator control from the **Toolbox** to the Web Form. The **AdRotator Tasks** smart tag menu will open automatically. From this menu, select **<New Data Source…>** from the **Choose Data Source** drop-down list to start the **Data Source Configuration Wizard**. Select **XML File** as the data-source type. This causes the wizard to create an XmlDataSource with the ID specified in the bottom half of the wizard dialog. We set the ID of the control to adXmlDataSource. Click **OK** in the **Data Source Configuration Wizard** dialog. The **Configure Data Source - adXmlDataSource** dialog appears next. In this dialog’s **Data File** section, click **Browse…** and, in the **Select XML File** dialog, locate and select the XML file you added to the AppData folder. Click **OK** to exit this dialog, then click **OK** to exit the **Configure Data Source - adXmlDataSource** dialog. After completing these steps, the AdRotator is configured to use the XML file to deter- mine which advertisements to display.

**Examining an XML File Containing Advertisement Information** 
XML document AdRotatorInformation.xml (Fig. 25.16)—or any XML document used with an AdRotator control—must contain one **Advertisements** root element (lines 4– 94). Within that element can be several **Ad** elements (e.g., lines 5–12), each of which pro- vides information about a different advertisement. Element **ImageUrl** (line 6) specifies the path (location) of the advertisement’s image, and element **NavigateUrl** (lines 7–9) speci- fies the URL for the web page that loads when a user clicks the advertisement. Note that we reformatted this file for presentation purposes. The actual XML file cannot contain any whitespace before or after the URL in the NavigateUrl element, or the whitespace will be considered part of the URL, and the page will not load properly.

The **AlternateText** element (line 10) nested in each Ad element contains text that displays in place of the image when the browser cannot locate or render the image for some reason (i.e., the file is missing, or the browser is not capable of displaying it), or to assist the visually impaired. The AlternateText element’s text is also a tooltip that Internet Explorer displays when a user places the mouse pointer over the image (Fig. 25.15). The **Impressions** element (line 11) specifies how often a particular image appears, relative to the other images. An advertisement that has a higher Impressions value displays more fre- quently than an advertisement with a lower value. In our example, the advertisements dis- play with equal probability, because the value of each Impressions element is set to 1.

~~~xml
1 <?xml version="1.0" encoding="utf-8"?>
2 <!-- Fig. 25.16: AdRotatorInformation.xml -->
3 <!-- XML file containing advertisement information. -->
4 <Advertisements>
5 <Ad>
6 <ImageUrl>Images/france.png</ImageUrl>
7 <NavigateUrl>http://www.cia.gov/library/publications/
8 the-world-factbook/geos/fr.html
9 </NavigateUrl>
10 <AlternateText>France Information</AlternateText>
11 <Impressions>1</Impressions>
12 </Ad>
13
14 <Ad>
15 <ImageUrl>Images/germany.png</ImageUrl>
16 <NavigateUrl>http://www.cia.gov/library/publications/
17 the-world-factbook/geos/gm.html
18 </NavigateUrl>
19 <AlternateText>Germany Information</AlternateText>
20 <Impressions>1</Impressions>
21 </Ad>
22
~~~

**Fig. 25.16** | XML file containing advertisement information used in AdRotator example. (Part 1 of 3.)

~~~xml
23 <Ad>
24 <ImageUrl>Images/italy.png</ImageUrl>
25 <NavigateUrl>http://www.cia.gov/library/publications/
26 the-world-factbook/geos/it.html
27 </NavigateUrl>
28 <AlternateText>Italy Information</AlternateText>
29 <Impressions>1</Impressions>
30 </Ad>
31
32 <Ad>
33 <ImageUrl>Images/spain.png</ImageUrl>
34 <NavigateUrl>http://www.cia.gov/library/publications/
35 the-world-factbook/geos/sp.html
36 </NavigateUrl>
37 <AlternateText>Spain Information</AlternateText>
38 <Impressions>1</Impressions>
39 </Ad>
40
41 <Ad>
42 <ImageUrl>Images/latvia.png</ImageUrl>
43 <NavigateUrl>http://www.cia.gov/library/publications/
44 the-world-factbook/geos/lg.html
45 </NavigateUrl>
46 <AlternateText>Latvia Information</AlternateText>
47 <Impressions>1</Impressions>
48 </Ad>
49
50 <Ad>
51 <ImageUrl>Images/peru.png</ImageUrl>
52 <NavigateUrl>http://www.cia.gov/library/publications/
53 the-world-factbook/geos/pe.html
54 </NavigateUrl>
55 <AlternateText>Peru Information</AlternateText>
56 <Impressions>1</Impressions>
57 </Ad>
58
59 <Ad>
60 <ImageUrl>Images/senegal.png</ImageUrl>
61 <NavigateUrl>http://www.cia.gov/library/publications/
62 the-world-factbook/geos/sg.html
63 </NavigateUrl>
64 <AlternateText>Senegal Information</AlternateText>
65 <Impressions>1</Impressions>
66 </Ad>
67
68 <Ad>
69 <ImageUrl>Images/sweden.png</ImageUrl>
70 <NavigateUrl>http://www.cia.gov/library/publications/
71 the-world-factbook/geos/sw.html
72 </NavigateUrl>
73 <AlternateText>Sweden Information</AlternateText>
~~~

**Fig. 25.16** | XML file containing advertisement information used in AdRotator example. (Part 2 of 3.)

~~~xml
74 <Impressions>1</Impressions>
75 </Ad>
76
77 <Ad>
78 <ImageUrl>Images/thailand.png</ImageUrl>
79 <NavigateUrl>http://www.cia.gov/library/publications/
80 the-world-factbook/geos/th.html
81 </NavigateUrl>
82 <AlternateText>Thailand Information</AlternateText>
83 <Impressions>1</Impressions>
84 </Ad>
85
86 <Ad>
87 <ImageUrl>Images/unitedstates.png</ImageUrl>
88 <NavigateUrl>http://www.cia.gov/library/publications/
89 the-world-factbook/geos/us.html
90 </NavigateUrl>
91 <AlternateText>United States Information</AlternateText>
92 <Impressions>1</Impressions>
93 </Ad>
94 </Advertisements>
~~~

**Fig. 25.16** | XML file containing advertisement information used in AdRotator example. (Part 3 of 3.)


### 25.3.3 Validation Controls
This section introduces a different type of web control, called a **validation control** (or **val- idator**), which determines whether the data in another web control is in the proper format. For example, validators could determine whether a user has provided information in a re- quired field or whether a zip-code field contains exactly five digits. Validators provide a mechanism for validating user input on the client. When the XHTML for our page is cre- ated, the validator is converted into JavaScript that performs the validation. However, some clients do not support scripting or disable scripting. So, for security reasons, validation is always performed on the server too—whether or not scripting is enabled on the client. For this example, we assume the client has JavaScript enabled.

**Validating Input in a Web Form** 
The example in this section prompts the user to enter a name, e-mail address and phone number. A website could use a form like this to collect contact information from site vis- itors. After the user enters any data, but before the data is sent to the web server, validators ensure that the user entered a value in each field and that the e-mail address and phone number values are in an acceptable format. In this example, (555) 123-4567, 555-123- 4567 and 123-4567 are all considered valid phone numbers. Once the data is submitted, the web server responds by displaying an appropriate message and an XHTML table re- peating the submitted information. Note that a real business application would typically store the submitted data in a database or in a file on the server. We simply send the data back to the form to demonstrate that the server received the data.TextBoxes for retrieving the user’s name, e-mail address and phone number, respectively, and line 78 defines a **Submit** button. Lines 80–82 create a Label named outputLabel that displays the response from the server when the user successfully submits the form. Notice that outputLabel’s **Visible** property is initially set to False (line 81), so the Label does not appear in the client’s browser when the page loads for the first time.

**Using RequiredFieldValidator Controls** 
In this example, we use three **RequiredFieldValidator** controls (found in the **Validation** section of the **Toolbox**) to ensure that the name, e-mail address and phone number Text- Boxes are not empty when the form is submitted. A RequiredFieldValidator makes an input control a required field. If such a field is empty, validation fails. For example, lines 26–30 define RequiredFieldValidator nameInputValidator, which confirms that nameTextBox is not empty. Line 28 associates nameTextBox with nameInputValidator by setting the validator’s **ControlToValidate** property to nameTextBox. This indicates that nameInputValidator verifies the nameTextBox’s contents. We set the value of this prop- erty (and the validator’s other properties) by selecting the validator in **Design** mode and using the **Properties** window to specify property values. Property **ErrorMessage**’s text (line 29) is displayed on the Web Form if the validation fails. If the user does not input any data in nameTextBox and attempts to submit the form, the ErrorMessage text is displayed in red. Because we set the validator’s **Display** property to Dynamic (line 28), the validator is displayed on the Web Form only when validation fails. Space is allocated dynamically when validation fails, causing the controls below the validator to shift downward to ac- commodate the ErrorMessage, as seen in Fig. 25.17(a)–(c).

**Using RegularExpressionValidator Controls** 
This example also uses **RegularExpressionValidator** controls to match the e-mail ad- dress and phone number entered by the user against regular expressions. These controls de- termine whether the e-mail address and phone number were each entered in a valid format. For example, lines 44–51 create a RegularExpressionValidator named emailFormat Validator. Line 46 sets property ControlToValidate to emailTextBox to indicate that emailFormatValidator verifies the emailTextBox’s contents.

~~~html
1 <%-- Fig. 25.17: Validation.aspx --%>
2 <%-- Form that demonstrates using validators to validate user input. --%>
3 <%@ Page Language="VB" AutoEventWireup="false"
4 CodeFile="Validation.aspx.vb" Inherits="Validation" %>
5
6 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
7 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
8
9 <html xmlns="http://www.w3.org/1999/xhtml" >
10 <head runat="server">
11 <title>Demonstrating Validation Controls</title>
12 </head>
13 <body>
14 <form id="form1" runat="server">
15 <div>
~~~

**Fig. 25.17** | Form that demonstrates using validators to validate user input. (Part 1 of 4.)


~~~html
16 Please fill out the following form.<br /><em>All fields are
17 required and must contain valid information.</em><br />
18 <br />
19 <table>
20 <tr>
21 <td style="width: 100px" valign="top">
22 Name:</td>
23 <td style="width: 450px" valign="top">
24 <asp:TextBox ID="nameTextBox" runat="server">
25 </asp:TextBox><br />
26
27
28
29
30
31 </td>
32 </tr>
33 <tr>
34 <td style="width: 100px" valign="top">E-mail address:</td>
35 <td style="width: 450px" valign="top">
36 <asp:TextBox ID="emailTextBox" runat="server">
37 </asp:TextBox>
38 &nbsp;e.g., user@domain.com<br />
39
40
41
42
43
44
45
46
47
48
49
50
51
52 </td>
53 </tr>
54 <tr>
55 <td style="width: 100px; height: 21px" valign="top">
56 Phone number:</td>
57 <td style="width: 450px; height: 21px" valign="top">
58 <asp:TextBox ID="phoneTextBox" runat="server">
59 </asp:TextBox>
60 &nbsp;e.g., (555) 555-1234<br />
61
62
63
64
65
66
67
68
~~~

**Fig. 25.17** | Form that demonstrates using validators to validate user input. (Part 2 of 4.)

~~~html
69
70
71
72
73
74 </td>
75 </tr>
76 </table>
77 <br />
78 <asp:Button ID="submitButton" runat="server" Text="Submit" /><br />
79 <br />
80 <asp:Label ID="outputLabel" runat="server"
81 Text="Thank you for your submission." Visible="False">
82 </asp:Label>
83 </div>
84 </form>
85 </body>
86 </html>
~~~

**Fig. 25.17** | Form that demonstrates using validators to validate user input. (Part 3 of 4.)

**Fig. 25.17** | Form that demonstrates using validators to validate user input. (Part 4 of 4.)


A RegularExpressionValidator’s **ValidationExpression** property specifies the reg- ular expression that validates the ControlToValidate’s contents. Clicking the ellipsis next to property ValidationExpression in the **Properties** window displays the **Regular Expres- sion Editor** dialog, which contains a list of **Standard expressions** for phone numbers, zip codes and other formatted information. You can also write your own custom expression. For the emailFormatValidator, we selected the standard expression **Internet e-mail address**, which uses the validation expression

\\w+([-+.']\\w+)\*@\\w+([-.]\\w+)\*\\.\\w+([-.]\\w+)\*




This regular expression indicates that an e-mail address is valid if the part of the address before the @ symbol contains one or more word characters (i.e., alphanumeric characters or underscores), followed by zero or more strings comprised of a hyphen, plus sign, period or apostrophe and additional word characters. After the @ symbol, a valid e-mail address must contain one or more groups of word characters potentially separated by hyphens or periods, followed by a required period and another group of one or more word characters potentially separated by hyphens or periods. For example, bob.white@email.com, bob- white@my-email.com and bob's-personal.email@white.email.com are all valid e-mail addresses. If the user enters text in the emailTextBox that does not have the correct format and either clicks in a different text box or attempts to submit the form, the ErrorMessage text is displayed in red. You can learn more about regular expressions at www.regular- expressions.info.

We also use RegularExpressionValidator phoneFormatValidator (lines 66–73) to ensure that the phoneTextBox contains a valid phone number before the form is sub- mitted. In the **Regular Expression Editor** dialog, we select **U.S. phone number**, which assigns

((\\(\\d{3}\\) ?)|(\\d{3}-))?\\d{3}-\\d{4}

to the ValidationExpression property. This expression indicates that a phone number can contain a three-digit area code either in parentheses and followed by an optional space or without parentheses and followed by required hyphen. After an optional area code, a phone number must contain three digits, a hyphen and another four digits. For example, (555) 123-4567, 555-123-4567 and 123-4567 are all valid phone numbers.

If all five validators are successful (i.e., each TextBox is filled in, and the e-mail address and phone number provided are valid), clicking the **Submit** button sends the form’s data to the server. As shown in Fig. 25.17(d), the server then responds by displaying the sub- mitted data in the outputLabel (lines 80–82).

**Examining the Code-Behind File for a Web Form That Receives User Input** Figure 25.18 depicts the code-behind file for the ASPX file in Fig. 25.17. Notice that this code-behind file does not contain any implementation related to the validators. We say more about this soon.

~~~java
1 ' Fig. 25.18: Validation.aspx.vb
2 ' Code-behind file for the form demonstrating validation controls.
3 Partial Class Validation
4 Inherits System.Web.UI.Page
5
6 ' Page_Load event handler executes when the page is loaded
7 Protected Sub Page_Load(ByVal sender As Object, _
8 ByVal e As System.EventArgs) Handles Me.Load
9 ' if this is not the first time the page is loading
10 ' (i.e., the user has already submitted form data)
11 If IsPostBack Then
12 ' retrieve the values submitted by the user
13 Dim name As String = nameTextBox.Text
14 Dim email As String = emailTextBox.Text
~~~

**Fig. 25.18** | Code-behind file for the form demonstrating validation controls. (Part 1 of 2.)

~~~java
15 Dim phone As String = phoneTextBox.Text
16
17 ' create a table indicating the submitted values
18 outputLabel.Text &= _
19 "<br />We received the following information:" & _
20 "<table style=""background-color: yellow"">" & _
21 "<tr><td>Name: </td><td>" & name & "</td></tr>" & _
22 "<tr><td>E-mail address: </td><td>" & email & "</td></tr>" & _
23 "<tr><td>Phone number: </td><td>" & phone & "</td></tr>" & _
24 "<table>"
25 outputLabel.Visible = True ' display the output message
26 End If
27 End Sub ' Page_Load
28 End Class ' Validation
~~~

**Fig. 25.18** | Code-behind file for the form demonstrating validation controls. (Part 2 of 2.)

Web programmers using ASP.NET often design their web pages so that the current page reloads when the user submits the form; this enables the program to receive input, process it as necessary and display the results in the same page when it is loaded the second time. These pages usually contain a form that, when submitted, sends the values of all the controls to the server and causes the current page to be requested again. This event is known as a **postback**. Line 11 uses the **IsPostBack** property of class Page to determine whether the page is being loaded due to a postback. The first time that the web page is requested, IsPostBack is False, and the page displays only the form for user input. When the postback occurs (from the user clicking **Submit**), IsPostBack is True.

Lines 13–15 retrieve the values of nameTextBox, emailTextBox and phoneTextBox. When data is posted to the web server, the XHTML form’s data is accessible to the web application through the properties of the ASP.NET controls. Lines 18–24 append to out-

putLabel’s Text a line break, an additional message and an XHTML table containing the submitted data, so the user knows that the server received the data correctly. In a real busi- ness application, the data would be stored in a database or file at this point in the applica- tion. Line 25 sets the outputLabel’s Visible property to True, so the user can see the thank you message and submitted data.

**Examining the Client-Side XHTML for a Web Form with Validation** 
Figure 25.19 shows the XHTML and ECMAScript sent to the client browser when Validation.aspx loads after the postback. (We added the comments in lines 1–2.) To view this code, select **View > Source** in Internet Explorer. Lines 27–55, lines 126–190 and lines 196–212 contain the ECMAScript that provides the implementation for the validation controls and for performing the postback. ASP.NET generates this ECMAScript. You do not need to be able to create or even understand ECMAScript—the functionality defined for the controls in our application is converted to working ECMAScript for us.

The EnableViewState attribute determines whether a web control’s value is retained when a postback occurs. Previously, we explicitly set this attribute to False. The default value, True, indicates that the control’s value is retained. In Fig. 25.17(d), notice that the user input is retained after the postback occurs. A hidden input in the XHTML document (lines 17–25 of Fig. 25.19) contains the data of the controls on this page. This element is always named **VIEWSTATE** and stores the controls’ data as an encoded string.

~~~html
1 <!-- Fig. 25.19 -->
2 <!-- The XHTML and ECMAScript generated for Validation.aspx -->
3 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
4 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
5 <html xmlns="http://www.w3.org/1999/xhtml" >
6 <head>
7 <title>Demonstrating Validation Controls</title>
8 </head>
9 <body>
10 <form name="form1" method="post" action="Validation.aspx"
11 onsubmit="javascript:return WebForm_OnSubmit();" id="form1">
12 <div>
13 <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET"
14 value="" />
15 <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT"
16 value="" />
17
18
19
20
21
22
23
24
25
26 </div>
27 <script type="text/javascript">
28 <!--
29 var theForm = document.forms['form1'];
30 if (!theForm) {
31 theForm = document.form1;
32 }
33 function __doPostBack(eventTarget, eventArgument) {
34 if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
35 theForm.__EVENTTARGET.value = eventTarget;
36 theForm.__EVENTARGUMENT.value = eventArgument;
37 theForm.submit();
38 }
39 }
40 // -->
41 </script>
42 <script src="/Validation/WebResource.axd?d=g4BXOwpt2-0jwFwNi7BCNQ2
43 &amp;t=632670465355304640" type="text/javascript"></script>
44 <script src="/Validation/WebResource.axd?d=ZlFGPYdc0paOPqraRf9s2PN8QeuH
45 PzQxnkR5mPVtAVc1&amp;t=632670465355304640"
46 type="text/javascript"></script>
47 <script type="text/javascript">
48 <!--
49 function WebForm_OnSubmit() {
50 if (typeof(ValidatorOnSubmit) == "function" &&
51 ValidatorOnSubmit() == false) return false;
~~~

**Fig. 25.19** | XHTML and ECMAScript generated by ASP.NET and sent to the browser when Validation.aspx is requested. (Part 1 of 5.)

~~~html
52 return true;
53 }
54 // -->
55 </script>
56 <div>
57 Please fill out the following form.<br />
58 <em>All fields are required and must contain valid information.
59 </em><br />
60 <br />
61 <table>
62 <tr>
63 <td style="width: 100px" valign="top"> Name:</td>
64 <td style="width: 450px" valign="top">
65 <input name="nameTextBox" type="text" value="Bob White"
66 id="nameTextBox" />
67 <br />
68 <span id="nameInputValidator"
69 style="color:Red;display:none;">
70 Please enter your name.</span> </td>
71 </tr>
72 <tr>
73 <td style="width: 100px" valign="top">E-mail address:</td>
74 <td style="width: 450px" valign="top">
75 <input name="emailTextBox" type="text"
76 value="bwhite@email.com" id="emailTextBox" />
77 &nbsp;e.g., user@domain.com<br />
78 <span id="emailInputValidator"
79 style="color:Red;display:none;">
80 Please enter your e-mail address.</span>
81 <span id="emailFormatValidator"
82 style="color:Red;display:none;">Please enter an e-mail
83 address in a valid format.</span> </td>
84 </tr>
85 <tr>
86 <td style="width: 100px; height: 21px" valign="top">
87 Phone number:</td>
88 <td style="width: 450px; height: 21px" valign="top">
89 <input name="phoneTextBox" type="text"
90 value="(555) 555-1234" id="phoneTextBox" />
91 &nbsp;e.g., (555) 555-1234<br />
92 <span id="phoneInputValidator"
93 style="color:Red;display:none;">
94 Please enter your phone number.</span>
95 <span id="phoneFormatValidator"
96 style="color:Red;display:none;">Please enter a phone
97 number in a valid format.</span> </td>
98 </tr>
99 </table>
100 <br />
101 <input type="submit" name="submitButton" value="Submit"
102 onclick="javascript:WebForm_DoPostBackWithOptions(
~~~

**Fig. 25.19** | XHTML and ECMAScript generated by ASP.NET and sent to the browser when Validation.aspx is requested. (Part 2 of 5.)

~~~html
103 new WebForm_PostBackOptions(&quot;submitButton&quot;,
104 &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false,
105 false))" id="submitButton" />
106 <br />
107 <br />
108 <span id="outputLabel">Thank you for your submission.<br />
109 We received the following information:
110 <table style="background-color: yellow">
111 <tr>
112 <td>Name: </td>
113 <td>Bob White</td>
114 </tr>
115 <tr>
116 <td>E-mail address: </td>
117 <td>bwhite@email.com</td>
118 </tr>
119 <tr>
120 <td>Phone number: </td>
121 <td>(555) 555-1234</td>
122 </tr>
123 <table>
124 </span>
125 </div>
126 <script type="text/javascript">
127 <!--
128 var Page_Validators = new Array(
129 document.getElementById("nameInputValidator"),
130 document.getElementById("emailInputValidator"),
131 document.getElementById("emailFormatValidator"),
132 document.getElementById("phoneInputValidator"),
133 document.getElementById("phoneFormatValidator"));
134 // -->
135 </script>
136 <script type="text/javascript">
137 <!--
138 var nameInputValidator = document.all ?
139 document.all["nameInputValidator"] :
140 document.getElementById("nameInputValidator");
141 nameInputValidator.controltovalidate = "nameTextBox";
142 nameInputValidator.errormessage = "Please enter your name.";
143 nameInputValidator.display = "Dynamic";
144 nameInputValidator.evaluationfunction =
145 "RequiredFieldValidatorEvaluateIsValid";
146 nameInputValidator.initialvalue = "";
147 var emailInputValidator = document.all ?
148 document.all["emailInputValidator"] :
149 document.getElementById("emailInputValidator");
150 emailInputValidator.controltovalidate = "emailTextBox";
151 emailInputValidator.errormessage =
152 "Please enter your e-mail address.";
153 emailInputValidator.display = "Dynamic";
~~~

**Fig. 25.19** | XHTML and ECMAScript generated by ASP.NET and sent to the browser when Validation.aspx is requested. (Part 3 of 5.)

~~~html
154 emailInputValidator.evaluationfunction =
155 "RequiredFieldValidatorEvaluateIsValid";
156 emailInputValidator.initialvalue = "";
157 var emailFormatValidator = document.all ?
158 document.all["emailFormatValidator"] :
159 document.getElementById("emailFormatValidator");
160 emailFormatValidator.controltovalidate = "emailTextBox";
161 emailFormatValidator.errormessage =
162 "Please enter an e-mail address in a valid format.";
163 emailFormatValidator.display = "Dynamic";
164 emailFormatValidator.evaluationfunction =
165 "RegularExpressionValidatorEvaluateIsValid";
166 emailFormatValidator.validationexpression =
167 "\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";
168 var phoneInputValidator = document.all ?
169 document.all["phoneInputValidator"] :
170 document.getElementById("phoneInputValidator");
171 phoneInputValidator.controltovalidate = "phoneTextBox";
172 phoneInputValidator.errormessage =
173 "Please enter your phone number.";
174 phoneInputValidator.display = "Dynamic";
175 phoneInputValidator.evaluationfunction =
176 "RequiredFieldValidatorEvaluateIsValid";
177 phoneInputValidator.initialvalue = "";
178 var phoneFormatValidator = document.all ?
179 document.all["phoneFormatValidator"] :
180 document.getElementById("phoneFormatValidator");
181 phoneFormatValidator.controltovalidate = "phoneTextBox";
182 phoneFormatValidator.errormessage =
183 "Please enter a phone number in a valid format.";
184 phoneFormatValidator.display = "Dynamic";
185 phoneFormatValidator.evaluationfunction =
186 "RegularExpressionValidatorEvaluateIsValid";
187 phoneFormatValidator.validationexpression =
188 "((\\(\\d{3}\\) ?)|(\\d{3}-))?\\d{3}-\\d{4}";
189 // -->
190 </script>
191 <div>
192 <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION"
193 value="/wEWBQL6jZCbCAKLsYSOBwKCkfPgDAKE8IO1CQKSuuDUC0eNO370TaQqZQ
194 0WPApD0KktGC5N" />
195 </div>
196 <script type="text/javascript">
197 <!--
198 var Page_ValidationActive = false;
199 if (typeof(ValidatorOnLoad) == "function") {
200 ValidatorOnLoad();
201 }
202
203 function ValidatorOnSubmit() {
204 if (Page_ValidationActive) {
~~~

**Fig. 25.19** | XHTML and ECMAScript generated by ASP.NET and sent to the browser when Validation.aspx is requested. (Part 4 of 5.)

~~~html
205 return ValidatorCommonOnSubmit();
206 }
207 else {
208 return true;
209 }
210 }
211 // -->
212 </script>
213 </form>
214 </body>
215 </html>
~~~

**Fig. 25.19** | XHTML and ECMAScript generated by ASP.NET and sent to the browser when Validation.aspx is requested. (Part 5 of 5.)

**Performance Tip 25.1** 
>Setting EnableViewState to False reduces the amount of data passed to the web server with each request.

**Software Engineering Observation 25.2** 
>Client-side validation cannot be trusted by the server because there are too many ways top circumvent client-side validation. For this reason, all important validation should be peformed on the server.

**25.4 Session Tracking** 
Originally, critics accused the Internet and e-businesses of failing to provide the kind of customized service typically experienced in “brick-and-mortar” stores. To address this problem, e-businesses began to establish mechanisms by which they could personalize us- ers’ browsing experiences, tailoring content to individual users while enabling them to by- pass irrelevant information. Businesses achieve this level of service by tracking each customer’s movement through the Internet and combining the collected data with infor- mation provided by the consumer, including billing information, personal preferences, in- terests and hobbies.

**Personalization** 
**Personalization** makes it possible for e-businesses to communicate effectively with their customers and also improves users’ ability to locate desired products and services. Compa- nies that provide content of particular interest to users can establish relationships with cus- tomers and build on those relationships over time. Furthermore, by targeting consumers with personal offers, recommendations, advertisements, promotions and services, e-busi- nesses create customer loyalty. Websites can use sophisticated technology to allow visitors to customize home pages to suit their individual needs and preferences. Similarly, online shopping sites often store personal information for customers, tailoring notifications and special offers to their interests. Such services encourage customers to visit sites more fre- quently and make purchases more regularly.


**Privacy** 
A trade-off exists, however, between personalized e-business service and protection of pri- vacy. Some consumers embrace the idea of tailored content, but others fear the possible adverse consequences if the info they provide to e-businesses is released or collected by tracking technologies. Consumers and privacy advocates ask: What if the e-business to which we give personal data sells or gives that information to another organization without our knowledge? What if we do not want our actions on the Internet—a supposedly anon- ymous medium—to be tracked and recorded by unknown parties? What if unauthorized parties gain access to sensitive private data, such as credit card numbers or medical history? All of these are questions that must be debated and addressed by programmers, consumers, e-businesses and lawmakers alike.

**Recognizing Clients** 
To provide personalized services to consumers, e-businesses must be able to recognize cli- ents when they request information from a site. As we have discussed, the request/response system on which the web operates is facilitated by HTTP. Unfortunately, HTTP is a state- less protocol. This means that web servers cannot determine whether a request comes from a particular client or whether the same or different clients generate a series of requests.

To circumvent this problem, sites can use the concept of a “session” to identify indi- vidual clients. A session represents a unique client on a website. If the client leaves a site and then returns later, the client will still be recognized as the same user. To help the server distinguish among clients, each client must identify itself to the server. Tracking indi- vidual clients, known as **session tracking**, can be achieved in a number of ways. One pop- ular technique uses cookies (Section 25.4.1); another uses ASP.NET’s HttpSessionState object (Section 25.4.2). Additional session-tracking techniques include the use of input form elements of type "hidden" and URL rewriting. Using "hidden" form elements, a Web Form can write session-tracking data into a form in the web page that it returns to the client in response to a prior request. When the user submits the form in the new web page, all the form data, including the "hidden" fields, is sent to the form handler on the web server. When a website performs URL rewriting, the Web Form embeds session- tracking information directly in the URLs of hyperlinks that the user clicks to send subse- quent requests to the web server.

Note that our previous examples set the Web Form’s EnableSessionState property to False. However, because we wish to use session tracking in the following examples, we keep this property’s default setting—True.

### 25.4.1 Cookies Cookies 
provide web developers with a tool for identifying and tracking web users. A cookie is a piece of data stored in a small text file on the user’s computer. A cookie main- tains information about the client during and between browser sessions. The first time a user visits the website, the user’s computer might receive a cookie; this cookie is then re- trieved each time the user revisits that site. The collected information is intended to be an anonymous record containing data that is used to personalize the user’s future visits to the site. For example, cookies in a shopping application might store unique identifiers for us- ers. When a user adds items to an online shopping cart or performs another task resulting in a request to the web server, the server receives a cookie containing the user’s unique identifier. The server then uses the unique identifier to locate the shopping cart and per- form any necessary processing.

In addition to identifying users, cookies also can indicate users’ shopping preferences. When a web server receives a request from a client, the server can examine the cookie(s) it sent to the client during previous communications, identify the users’s preferences and immediately return products of interest to the client.

Every HTTP-based interaction between a client and a server includes a header con- taining information either about the request (when the communication is from the client to the server) or about the response (when the communication is from the server to the client). When a web server receives a request, the header includes information such as the request type (e.g., Get) and any cookies that have been sent previously from the server to be stored on the client machine. When the server formulates its response, the header infor- mation contains any cookies the server wants to store on the client computer and other information, such as the MIME type of the response.

The **expiration date** of a cookie determines how long the cookie remains on the client’s computer. If you do not set an expiration date for a cookie, the web browser main- tains the cookie for the duration of the browsing session. Otherwise, the Web browser maintains the cookie until the expiration date occurs. When the browser requests a resource from a web server, cookies previously sent to the client by that Web server are returned to the web server as part of the request formulated by the browser. Cookies are deleted when they **expire**.

**Portability Tip 25.3** 
>Users may disable cookies in their browsers to ensure that their privacy is protected. Such users will experience difficulty using sites that depend on cookies to maintain state information.

**Using Cookies to Provide Book Recommendations** 
The next web application demonstrates the use of cookies. The example contains two pages. In the first page (Figs. 25.20–25.21), users select a favorite programming language from a group of radio buttons and submit the XHTML form to the web server for pro- cessing. The web server responds by creating a cookie that stores a record of the chosen language, as well as the ISBN number for a book on that topic. The server then returns an XHTML document to the browser, allowing the user either to select another favorite pro- gramming language or to view the second page in our application (Figs. 25.22–25.23), which lists recommended books pertaining to the programming language that the user se- lected previously. When the user clicks the hyperlink, the cookies previously stored on the client are read and used to form the list of book recommendations.

The ASPX file in Fig. 25.20 contains five radio buttons (lines 20–26) with the values **Visual Basic 2005**, **Visual C# 2005**, **C**, **C++**, and **Java**. Recall that you can set the values of radio buttons via the **ListItem Collection Editor**, which you open either by clicking the RadioButtonList’s Items property in the **Properties** window or by clicking the **Edit Items…** link in the **RadioButtonList Tasks** smart tag menu. The user selects a programming language by clicking one of the radio buttons. When the user clicks **Submit**, we’ll create a cookie containing the selected language. Then, we’ll add this cookie to the HTTP response header, so the cookie will be stored on the user’s computer. Each time the user chooses a language and clicks **Submit**, a cookie is written to the client. Each time the client requests information from our web application, the cookies are sent back to the server.


When the postback occurs, certain controls are hidden and others are displayed. The Label, RadioButtonList and Button used to select a language are hidden. Toward the bottom of the page, a Label and two HyperLinks are displayed. One link requests this page (lines 32–35), and the other requests Recommendations.aspx (lines 37–40). Clicking the first hyperlink (the one that requests the current page) does not cause a postback to occur. The file Options.aspx is specified in the NavigateUrl property of the hyperlink. When the hyperlink is clicked, a new request for this page occurs. Recall that earlier in the chapter, we set NavigateUrl to a remote website (http://www.deitel.com). To set this property to a page within the same ASP.NET application, click the ellipsis button next to the NavigateUrl property in the **Properties** window to open the **Select URL** dialog. Use this dialog to select a page within your project as the destination for the HyperLink.

~~~html
1 <%-- Fig. 25.20: Options.aspx --%>
2 <%-- Allows client to select programming languages and access --%>
3 <%-- book recommendations. --%>
4 <%@ Page Language="VB" AutoEventWireup="false"
5 CodeFile="Options.aspx.vb" Inherits="Options" %>
6
7 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
8 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
9
10 <html xmlns="http://www.w3.org/1999/xhtml" >
11 <head runat="server">
12 <title>Cookies</title>
13 </head>
14 <body>
15 <form id="form1" runat="server">
16 <div>
17 <asp:Label ID="promptLabel" runat="server" Font-Bold="True"
18 Font-Size="Large" Text="Select a programming language:">
19 </asp:Label>
20
21
22
23
24
25
26
27 <asp:Button ID="submitButton" runat="server" Text="Submit" />
28 <asp:Label ID="responseLabel" runat="server" Font-Bold="True"
29 Font-Size="Large" Text="Welcome to cookies!" Visible="False">
30 </asp:Label><br />
31 <br />
32
33
34
35
36 <br />
37
38
~~~

**Fig. 25.20** | ASPX file that presents a list of programming languages. (Part 1 of 2.)

~~~html
39
40
41 </div>
42 </form>
43 </body>
44 </html>
~~~

**Fig. 25.20** | ASPX file that presents a list of programming languages. (Part 2 of 2.)



**Adding and Linking to a New Web Form** 
Setting the NavigateUrl property to a page in the current application requires that the destination page exist already. Thus, to set the NavigateUrl property of the second link (the one that requests the page with book recommendations) to Recommendations.aspx, you must first create this file by right clicking the project location in the **Solution Explorer** and selecting **Add New Item…** from the menu that appears. In the **Add New Item** dialog, select **Web Form** from the **Templates** pane and change the name of the file to Recommen-

dations.aspx. Finally, check the box labeled **Place code in separate file** to indicate that the IDE should create a code-behind file for this ASPX file. Click **Add** to create the file. (We discuss the contents of this ASPX file and code-behind file shortly.) Once the Recom- mendations.aspx file exists, you can select it as the NavigateUrl value for a HyperLink in the **Select URL** dialog.


**Writing Cookies in a Code-Behind File** 
Figure 25.21 presents the code-behind file for Options.aspx (Fig. 25.20). This file con- tains the code that writes a cookie to the client machine when the user selects a program- ming language. The code-behind file also modifies the appearance of the page in response to a postback.

~~~java
1 ' Fig. 25.21: Options.aspx.vb
2 ' Processes user's selection of a programming language
3 ' by displaying links and writing a cookie to the user's machine.
4 Partial Class Options
5 Inherits System.Web.UI.Page
6
7
8
9 ' initializes the Hashtable of values to be stored as cookies
10 Protected Sub Page_Init(ByVal sender As Object, _
11 ByVal e As System.EventArgs) Handles Me.Init
12
13
14
15
16
17 End Sub ' Page_Init
18
19 ' if postback, hide form and display links to make additional
20 ' selections or view recommendations
21 Protected Sub Page_Load(ByVal sender As Object, _
22 ByVal e As System.EventArgs) Handles Me.Load
23
24 If IsPostBack Then
25 ' user has submitted information, so display message
26 ' and appropriate hyperlinks
27 responseLabel.Visible = True
28 languageLink.Visible = True
29 recommendationsLink.Visible = True
30
31 ' hide other controls used to make language selection
32 promptLabel.Visible = False
33 languageList.Visible = False
34 submitButton.Visible = False
35
36
37
38
39
40
41
42
43 End If
44 End Sub ' Page_Load
45
~~~

**Fig. 25.21** | Code-behind file that writes a cookie to the client. (Part 1 of 2.)

~~~java
46 ' write a cookie to record the user's selection
47 Protected Sub submitButton_Click(ByVal sender As Object, _
48 ByVal e As System.EventArgs) Handles submitButton.Click
49 ' if the user made a selection
50 If languageList.SelectedItem IsNot Nothing Then
51 Dim language As String = languageList.SelectedItem.ToString()
52
53
54
55
56
57
58
59
60
61 End If
62 End Sub ' submitButton_Click
63 End Class ' Options
~~~

**Fig. 25.21** | Code-behind file that writes a cookie to the client. (Part 2 of 2.)


Line 7 creates variable books as a **Hashtable** (namespace System.Collections)—a data structure that stores **key–value pairs**. A program uses the key to store and retrieve the associated value in the Hashtable. In this example, the keys are strings containing the programming languages’ names, and the values are strings containing the ISBN numbers for the recommended books. Class Hashtable provides method **Add**, which takes as argu- ments a key and a value. A value that is added via method Add is placed in the Hashtable

at a location determined by the key. The value for a specific Hashtable entry can be deter- mined by indexing the Hashtable with that value’s key. The expression

HashtableName(keyName)

returns the value in the key–value pair in which keyName is the key. For example, the ex- pression books(language) in line 54 returns the value that corresponds to the key con- tained in language.

Clicking the **Submit** button creates a cookie if a language is selected and causes a post- back to occur. In the submitButtonClick event handler (lines 47–62), a new cookie object (of type **HttpCookie**) is created to store the language and its corresponding ISBN

number (line 57). This cookie is then Added to the **Cookies** collection sent as part of the HTTP response header (line 60). The postback causes the condition in the If statement of PageLoad (line 24) to evaluate to True, and lines 27–42 execute. Lines 27–29 reveal the initially hidden controls responseLabel, languageLink and recommendationsLink. Lines 32–34 hide the controls used to obtain the user’s language selection. Line 37 deter- mines whether the user selected a language. If so, that language is displayed in response-

Label (lines 38–39). Otherwise, text indicating that a language was not selected is displayed in responseLabel (line 41).

**Displaying Book Recommendations Based on Cookie Values** 
After the postback of Options.aspx, the user may request a book recommendation. The book recommendation hyperlink forwards the user to Recommendations.aspx (Fig. 25.22) to display the recommendations based on the user’s language selections.

~~~html
1 <%-- Fig. 25.22: Recommendations.aspx --%>
2 <%-- Displays book recommendations using cookies. --%>
3 <%@ Page Language="VB" AutoEventWireup="false"
4 CodeFile="Recommendations.aspx.vb" Inherits="Recommendations" %>
5
6 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
7 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
8
9 <html xmlns="http://www.w3.org/1999/xhtml" >
10 <head runat="server">
11 <title>Book Recommendations</title>
12 </head>
13 <body>
14 <form id="form1" runat="server">
15 <div>
16 <asp:Label ID="recommendationsLabel" runat="server"
17 Font-Bold="True" Font-Size="X-Large" Text="Recommendations">
18 </asp:Label><br />
19 <br />
20
21
22 <br />
23 <asp:HyperLink ID="languageLink" runat="server"
24 NavigateUrl="~/Options.aspx">
25 Click here to choose another language
26 </asp:HyperLink>&nbsp;</div>
27 </form>
28 </body>
29 </html>
~~~

**Fig. 25.22** | ASPX file that displays book recommendations based on cookies


Recommendations.aspx contains a Label (lines 16–18), a ListBox (lines 20–21) and a HyperLink (lines 23–26). The Label displays the text **Recommendations** if the user selects one or more languages; otherwise, it displays **No Recommendations**. The ListBox displays the recommendations specified by the code-behind file (Fig. 25.23). The Hyper-

Link allows the user to return to Options.aspx to select additional languages.

**Code-Behind File That Creates Book Recommendations from Cookies** 
In the code-behind file (Fig. 25.23), method Page*Init (lines 7–28) retrieves the cookies from the client, using the Request object’s **Cookies** property (line 10). This returns a col- lection of type **HttpCookieCollection**, containing cookies that have previously been writ- ten to the client. Cookies can be read by an application only if they were created in the domain in which the application is running—a web server can never access cookies created outside the domain associated with that server. For example, a cookie created by a web server in the deitel.com domain cannot be read by a web server in any other domain. [Note:* Depending on the settings in web.config and whether other pages store cookies, other cookie values may be displayed by this web application.]

Line 13 determines whether at least one cookie exists. Lines 14–17 add the informa- tion in the cookie(s) to the booksListBox. The loop retrieves the name and value of each cookie using i, the loop’s control variable, to determine the current value in the cookie collection. The **Name** and **Value** properties of class HttpCookie, which contain the lan- guage and corresponding ISBN, respectively, are concatenated with " How to Program.

~~~java
1 ' Fig. 25.23: Recommendations.aspx.vb
2 ' Creates book recommendations based on cookies.
3 Partial Class Recommendations
4 Inherits System.Web.UI.Page
5
6 ' read cookies and populate ListBox with any book recommendations
7 Protected Sub Page_Init(ByVal sender As Object, _
8 ByVal e As System.EventArgs) Handles Me.Init
9
10
11
12 ' if there are cookies, list the appropriate books and ISBN numbers
13 If <> 0 Then
14 For i As Integer = 0 To - 1
15
16
17 Next
18 Else
19 ' if there are no cookies, then no language was chosen, so
20 ' display appropriate message and clear and hide booksListBox
21 recommendationsLabel.Text = "No Recommendations"
22 booksListBox.Items.Clear()
23 booksListBox.Visible = False
24
25 ' modify languageLink because no language was selected
26 languageLink.Text = "Click here to choose a language"
27 End If
28 End Sub ' Page_Init
29 End Class ' Recommendations
~~~

**Fig. 25.23** | Reading cookies from a client to determine book recommendations.


ISBN# " and added to the ListBox. Lines 21–26 execute if no language was selected. We summarize some commonly used HttpCookie properties in Fig. 25.24.

**Fig. 25.24** | HttpCookie properties.


### 25.4.2 Session Tracking with HttpSessionState 
Session-tracking capabilities are provided by the FCL class **HttpSessionState**. To dem- onstrate basic session-tracking techniques, we modified the example of Figs. 25.20–25.23 to use HttpSessionState objects. Figures 25.25–25.26 present the ASPX file and code- behind file for Options.aspx. Figures 25.28–25.29 present the ASPX file and code-be- hind file for Recommendations.aspx. Options.aspx is similar to the version presented in Fig. 25.20, but Fig. 25.25 contains two additional Labels (lines 32–33 and lines 35–36), which we discuss shortly.

Every Web Form includes an HttpSessionState object, which is accessible through property **Session** of class Page. Throughout this section, we use property Session to manipulate our page’s HttpSessionState object. When the web page is requested, an HttpSessionState object is created and assigned to the Page’s Session property. As a result, we often refer to property Session as the Session object.

**Adding Session Items** 
When the user presses **Submit** on the Web Form, submitButtonClick is invoked in the code-behind file (Fig. 25.26, lines 55–66). Method submitButtonClick responds by adding a key–value pair to our Session object, specifying the language chosen and the ISBN number for a book on that language. These key–value pairs are often referred to as **session items**. Next, a postback occurs. Each time the user clicks **Submit**, submitButtonClick adds a new session item to the HttpSessionState object. Because much of this example is identical to the last example, we concentrate on the new features.

~~~html
1 <%-- Fig. 25.25: Options.aspx --%>
2 <%-- Allows client to select programming languages and access --%>
3 <%-- book recommendations. --%>
4 <%@ Page Language="VB" AutoEventWireup="false"
5 CodeFile="Options.aspx.vb" Inherits="Options" %>
6
7 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
8 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
9
10 <html xmlns="http://www.w3.org/1999/xhtml" >
11 <head id="Head1" runat="server">
12 <title>Sessions</title>
13 </head>
14 <body>
15 <form id="form1" runat="server">
16 <div>
17 <asp:Label ID="promptLabel" runat="server" Font-Bold="True"
18 Font-Size="Large" Text="Select a programming language:">
19 </asp:Label>
20 <asp:RadioButtonList ID="languageList" runat="server">
21 <asp:ListItem>Visual Basic 2005</asp:ListItem>
22 <asp:ListItem>Visual C# 2005</asp:ListItem>
23 <asp:ListItem>C</asp:ListItem>
24 <asp:ListItem>C++</asp:ListItem>
25 <asp:ListItem>Java</asp:ListItem>
26 </asp:RadioButtonList>
27 <asp:Button ID="submitButton" runat="server" Text="Submit" />
28 <asp:Label ID="responseLabel" runat="server" Font-Bold="True"
29 Font-Size="Large" Text="Welcome to sessions!" Visible="False">
30 </asp:Label><br />
31 <br />
32
33
34 <br />
35
36
37 <br />
38 <asp:HyperLink ID="languageLink" runat="server"
39 NavigateUrl="~/Options.aspx" Visible="False">
40 Click here to choose another language
41 </asp:HyperLink><br />
42 <br />
43 <asp:HyperLink ID="recommendationsLink" runat="server"
44 NavigateUrl="~/Recommendations.aspx" Visible="False">
45 Click here to get book recommendations
46 </asp:HyperLink>
47 </div>
48 </form>
~~~

**Fig. 25.25** | ASPX file that presents a list of programming languages. (Part 1 of 2.)

~~~html
49 </body>
50 </html>
~~~

**Fig. 25.25** | ASPX file that presents a list of programming languages. (Part 2 of 2.

**Software Engineering Observation 25.3** 
>A Web Form should not use instance variables to maintain client state information, because each new request or postback is handled by a new instance of the page. Instead, maintain client state information in HttpSessionState objects, because such objects are specific to each client.

Like a cookie, an HttpSessionState object can store name–value pairs. These session items are placed in an HttpSessionState object by calling method **Add**. Line 64 calls Add to place the language and its corresponding recommended book’s ISBN number in the HttpSessionState object. If the application calls method Add to add an attribute that has the same name as an attribute previously stored in a session, the object associated with that attribute is replaced.

**Software Engineering Observation 25.4** 
>A benefit of using HttpSessionState objects (rather than cookies) is that HttpSessionState objects can store any type of object (not just Strings) as attribute values. This provides you with increased flexibility in determining the type of state information to maintain for clients.

~~~java
1 ' Fig. 25.26: Options.aspx.vb
2 ' Processes user's selection of a programming language
3 ' by displaying links and writing information in a Session object.
4 Partial Class Options
5 Inherits System.Web.UI.Page
6 ' stores values to represent books
7 Private books As New System.Collections.Hashtable()
8
9 ' initializes the Hashtable of values to be stored in a Session
10 Protected Sub Page_Init(ByVal sender As Object, _
11 ByVal e As System.EventArgs) Handles Me.Init
12 books.Add("Visual Basic 2005", "0-13-186900-0")
13 books.Add("Visual C# 2005", "0-13-152523-9")
14 books.Add("C", "0-13-142644-3")
15 books.Add("C++", "0-13-185757-6")
16 books.Add("Java", "0-13-148398-6")
17 End Sub ' Page_Init
18
19 ' if postback, hide form and display links to make additional
20 ' selections or view recommendations
21 Protected Sub Page_Load(ByVal sender As Object, _
22 ByVal e As System.EventArgs) Handles Me.Load
23
24 If IsPostBack Then
25 ' user has submitted information, so display message
26 ' and appropriate hyperlinks
27 responseLabel.Visible = True
28 idLabel.Visible = True
29 timeoutLabel.Visible = True
30 languageLink.Visible = True
31 recommendationsLink.Visible = True
32
33 ' hide other controls used to make language selection
34 promptLabel.Visible = False
35 languageList.Visible = False
36 submitButton.Visible = False
37
38 ' if the user made a selection, display it in responseLabel
39 If languageList.SelectedItem IsNot Nothing Then
40 responseLabel.Text &= " You selected " & _
41 languageList.SelectedItem.Text.ToString()
42 Else
43 responseLabel.Text &= " You did not select a language."
44 End If
45
46
47
48
49
50
51 End If
52 End Sub ' Page_Load
~~~

**Fig. 25.26** | Processes user's selection of a programming language by displaying links and writing information in a Session object. (Part 1 of 2.)

~~~java
53
54 ' record the user's selection in the Session
55 Protected Sub submitButton_Click(ByVal sender As Object, _
56 ByVal e As System.EventArgs) Handles submitButton.Click
57 ' if the user made a selection
58 If languageList.SelectedItem IsNot Nothing Then
59 Dim language As String = languageList.SelectedItem.ToString()
60
61 ' get ISBN number of book for the given language
62 Dim ISBN As String = books(language).ToString()
63
64
65 End If
66 End Sub ' submitButton_Click
67 End Class ' Options
~~~

**Fig. 25.26** | Processes user's selection of a programming language by displaying links and writing information in a Session object. (Part 2 of 2.)

The application handles the postback event (lines 24–51) in method PageLoad. Here, we retrieve information about the current client’s session from the Session object’s properties and display this information in the web page. The ASP.NET application con- tains information about the HttpSessionState object for the current client. Property **SessionID** (line 47) contains the **unique session ID**—a sequence of random letters and numbers. The first time a client connects to the web server, a unique session ID is created for that client and a temporary cookie is written to the client so the server can identify the client on subsequent requests. When the client makes additional requests, the client’s ses- sion ID from that temporary cookie is compared with the session IDs stored in the web server’s memory to retrieve the client’s HttpSessionState object. Recall that clients may disable cookies in their web browsers to ensure that their privacy is protected. Such clients will experience difficulty using web applications that depend on HttpSessionState

objects and cookies to maintain state information. The HttpSessionStrate property IsCookieless indicates whether URL rewriting or cookies are used for session tracking. Property **Timeout** (line 50) specifies the maximum amount of time that an Http-

SessionState object can be inactive before it is discarded. Figure 25.27 lists some common HttpSessionState properties.

**Fig. 25.27** | HttpSessionState properties. (Part 1 of 2.)

**Fig. 25.27** | HttpSessionState properties. (Part 2 of 2.)


**Displaying Recommendations Based on Session Values** As in the cookies example, this application provides a link to Recommendations.aspx (Fig. 25.28), which displays a list of book recommendations based on the user’s language selections. Lines 20–21 define a ListBox web control that is used to present the recom- mendations to the user.

~~~html
1 <%-- Fig. 25.28: Recommendations.aspx --%>
2 <%-- Displays book recommendations using a Session object. --%>
3 <%@ Page Language="VB" AutoEventWireup="false"
4 CodeFile="Recommendations.aspx.vb" Inherits="Recommendations" %>
5
6 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
7 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
8
9 <html xmlns="http://www.w3.org/1999/xhtml" >
10 <head id="Head1" runat="server">
11 <title>Book Recommendations</title>
12 </head>
13 <body>
14 <form id="form1" runat="server">
15 <div>
16 <asp:Label ID="recommendationsLabel" runat="server"
17 Font-Bold="True" Font-Size="X-Large" Text="Recommendations">
18 </asp:Label><br />
19 <br />
20 <asp:ListBox ID="booksListBox" runat="server" Height="125px"
21 Width="450px"></asp:ListBox><br />
22 <br />
23 <asp:HyperLink ID="languageLink" runat="server"
24 NavigateUrl="~/Options.aspx">
25 Click here to choose another language
26 </asp:HyperLink>&nbsp;</div>
27 </form>
28 </body>
29 </html>
~~~

**Fig. 25.28** | Session-based book recommendations displayed in a ListBox. (Part 1 of 2.)

**Fig. 25.28** | Session-based book recommendations displayed in a ListBox. (Part 2 of 2.)

**Code-Behind File That Creates Book Recommendations from a Session** 
Figure 25.29 presents the code-behind file for Recommendations.aspx. Event handler PageInit (lines 7–30) retrieves the session information. If a user has not selected a lan- guage on Options.aspx, our Session object’s **Count** property will be 0. This property pro- vides the number of session items contained in a Session object. If Session object’s Count property is 0 (i.e., no language was selected), then we display the text **No Recommendations** and update the Text of the HyperLink back to Options.aspx.

~~~java
1 ' Fig. 25.29: Recommendations.aspx.vb
2 ' Creates book recommendations based on a Session object.
3 Partial Class Recommendations
4 Inherits System.Web.UI.Page
5
6 ' read Session items and populate ListBox with any book recommendations
7 Protected Sub Page_Init(ByVal sender As Object, _
8 ByVal e As System.EventArgs) Handles Me.Init
9 ' determine whether Session contains any information
10 If <> 0 Then
11 For i As Integer = 0 To Session.Count - 1
12
13
14
15
16
17
18
19 Next
20 Else
~~~

**Fig. 25.29** | Session data used to provide book recommendations to the user. (Part 1 of 2.)

~~~java
21 ' if there are no session items, no language was chosen, so
22 ' display appropriate message and clear and hide booksListBox
23 recommendationsLabel.Text = "No Recommendations"
24 booksListBox.Items.Clear()
25 booksListBox.Visible = False
26
27 ' modify languageLink because no language was selected
28 languageLink.Text = "Click here to choose a language"
29 End If
30 End Sub ' Page_Init
31 End Class ' Recommendations
~~~

**Fig. 25.29** | Session data used to provide book recommendations to the user. (Part 2 of 2.)


If the user has chosen a language, the loop in lines 11–19 iterates through our Session object’s session items, temporarily storing each key name (line 13). The value in a key– value pair is retrieved from the Session object by indexing the Session object with the key name, using the same process by which we retrieved a value from our Hashtable in the preceding section.

Line 13 accesses the **Keys** property of class HttpSessionState, which returns a col- lection containing all the keys in the session. Line 13 indexes this collection to retrieve the current key. Lines 16–18 concatenate keyName’s value to the String " How to Program.

ISBN#: " and the value from the Session object for which keyName is the key. This String is the recommendation that appears in the ListBox.

## Case Study: Connecting to a Database in ASP.NET
Many websites allow users to provide feedback about the website in a **guestbook**. Typical- ly, users click a link on the website’s home page to request the guestbook page. This page usually consists of an XHTML form that contains fields for the user’s name, e-mail ad- dress, message/feedback and so on. Data submitted on the guestbook form is then stored in a database located on the web server’s machine.

In this section, we create a guestbook Web Form application. This example’s GUI is slightly more complex than that of earlier examples. It contains a **GridView** ASP.NET data control, as shown in Fig. 25.30, which displays all the entries in the guestbook in tabular format. We explain how to create and configure this data control shortly. Note that the GridView displays **abc** in **Design** mode to indicate string data that will be retrieved from a data source at runtime.

The XHTML form presented to the user consists of a name field, an e-mail address field and a message field. The form also contains a **Submit** button to send the data to the server and a **Clear** button to reset each of the fields on the form. The application stores the guestbook information in a SQL Server database called Guestbook.mdf located on the web server. (We provide this database in the examples directory for this chapter. You can download the examples from www.deitel.com/books/iw3htp4.) Below the XHTML form, the GridView displays the data (i.e., guestbook entries) in the database’s Messages table.

**Fig. 25.30** | Guestbook application GUI in **Design** mode.


### 25.5.1 Building a Web Form That Displays Data from a Database
We now explain how to build this GUI and set up the data binding between the GridView control and the database. We present the ASPX file generated from the GUI later in the section, and we discuss the related code-behind file in the next section. To build the guest- book application, perform the following steps:

**Step 1: Creating the Project** 
Create an **ASP.NET Web Site** named Guestbook and name the ASPX file Guestbook.aspx. Rename the class in the code-behind file Guestbook, and update the Page directive in the ASPX file accordingly.

**Step 2: Creating the Form for User Input** 
In **Design** mode for the ASPX file, add the text Please leave a message in our guest-

book: formatted as an h2 header. As discussed in Section 25.3.1, insert an XHTML table with two columns and four rows, configured so that the text in each cell aligns with the top of the cell. Place the appropriate text (see Fig. 25.30) in the top three cells in the table’s left column. Then place TextBoxes named nameTextBox, emailTextBox and message-

TextBox in the top three table cells in the right column. Set messageTextBox to be a mul- tiline TextBox. Finally, add Buttons named submitButton and clearButton to the bottom-right table cell. Set the buttons’ Text properties to Submit and Clear, respectively. We discuss the buttons’ event handlers when we present the code-behind file.

**Step 3: Adding a GridView Control to the Web Form** 
Add a GridView named messagesGridView that will display the guestbook entries. This control appears in the **Data** section of the **Toolbox**. The colors for the GridView are speci- fied through the **Auto Format...** link in the **GridView Tasks** smart tag menu that opens when you place the GridView on the page. Clicking this link causes an **Auto Format** dialog to open with several choices. In this example, we chose **Simple**. We soon show how to set the GridView’s data source (i.e., where it gets the data to display in its rows and columns).

**Step 4: Adding a Database to an ASP.NET Web Application** 
To use a SQL Server 2005 Express database in an ASP.NET web application, it is easiest to first add it to the project’s AppData folder. Right click this folder in the **Solution Ex- plorer** and select **Add Existing Item…**. Locate the Guestbook.mdf file in the exampleData-

bases subdirectory of the chapter’s examples directory, then click **Add**.

**Step 5: Binding the GridView to the Messages Table of the Guestbook Database** 
Now that the database is part of the project, we can configure the GridView to display its data. Open the **GridView Tasks** smart tag menu, then select **<New data source...>** from the **Choose Data Source** drop-down list. In the **Data Source Configuration Wizard** that appears, select **Database**. In this example, we use a **SqlDataSource** control that allows the applica- tion to interact with the Guestbook database. Set the ID of the data source to messagesSql-

DataSource and click **OK** to begin the **Configure Data Source** wizard. In the **Choose Your Data Connection** screen, select Guestbook.mdf from the drop-down list (Fig. 25.31), then click **Next >** twice to continue to the **Configure the Select Statement** screen.

The **Configure the Select Statement** screen (Fig. 25.32) allows you to specify which data the SqlDataSource should retrieve from the database. Your choices on this page design a SELECT statement, shown in the bottom pane of the dialog. The **Name** drop-down list identifies a table in the database. The Guestbook database contains only one table named Messages, which is selected by default. In the **Columns** pane, click the checkbox marked with an asterisk (**\***) to indicate that you want to retrieve the data from all the col- umns in the **Message** table. Click the **Advanced** button, then check the box next to **Gen-**

**Fig. 25.31** | **Configure Data Source** dialog in Visual Web Developer.

**Fig. 25.32** | Configuring the SELECT statement used by the SqlDataSource to retrieve data.


**erate UPDATE, INSERT and DELETE statements**. This configures the SqlDataSource

control to allow us to change data in, insert new data into and delete data from the data- base. We discuss inserting new guestbook entries based on users’ form submissions shortly. Click **OK**, then click **Next >** to continue the **Configure Data Source** wizard.

The next screen of the wizard allows you to test the query that you just designed. Click **Test Query** to preview the data that will be retrieved by the SqlDataSource (shown in Fig. 25.33).

Finally, click **Finish** to complete the wizard. Notice that a control named messages-

SqlDataSource now appears on the Web Form directly below the GridView (Fig. 25.34). This control is represented in **Design** mode as a gray box containing its type and name. This control will not appear on the web page—the gray box simply provides a way to manipulate the control visually through **Design** mode. Also notice that the GridView now has column headers that correspond to the columns in the Messages table and that the rows each contain either a number (which signifies an autoincremented column) or **abc** (which indicates string data). The actual data from the Guestbook database file will appear in these rows when the ASPX file is executed and viewed in a web browser.

**Step 6: Modifying the Columns of the Data Source Displayed in the GridView** 
It is not necessary for site visitors to see the MessageID column when viewing past guest- book entries—this column is merely a unique primary key required by the Messages table within the database. Thus, we modify the GridView so that this column does not display


**Fig. 25.33** | Previewing the data retrieved by the SqlDataSource.

**Fig. 25.34** | **Design** mode displaying SqlDataSource control for a GridView.

on the Web Form. In the **GridView Tasks** smart tag menu, click **Edit Columns**. In the re- sulting **Fields** dialog (Fig. 25.35), select **MessageID** in the **Selected fields** pane, then click the **X**. This removes the MessageID column from the GridView. Click **OK** to return to the main IDE window. The GridView should now appear as in Fig. 25.30.

**Fig. 25.35** | Removing the MessageID column from the GridView.


**Step 7: Modifying the Way the SqlDataSource Control Inserts Data** 
When you create a SqlDataSource in the manner described here, it is configured to permit INSERT SQL operations against the database table from which it gathers data. You must specify the values to insert either programmatically or through other controls on the Web Form. In this example, we wish to insert the data entered by the user in the nameTextBox, emailTextBox and messageTextBox controls. We also want to insert the current date— we will specify the date to insert programmatically in the code-behind file, which we present shortly.

To configure the SqlDataSource to allow such an insertion, select the messagesSql- DataSource control then click the ellipsis button next to the control’s **InsertQuery** prop- erty of the messagesSqlDataSource control in the **Properties** window. The **Command and Parameter Editor** (Fig. 25.36) that appears displays the INSERT command used by the Sql- DataSource control. This command contains parameters @Date, @Name, @Email and @Mes-

sage. You must provide values for these parameters before they are inserted into the database. Each parameter is listed in the **Parameters** section of the **Command and Param- eter Editor**. Because we will set the **Date** parameter programmatically, we do not modify it here. For each of the remaining three parameters, select the parameter, then select **Control** from the **Parameter source** drop-down list. This indicates that the value of the parameter should be taken from a control. The **ControlID** drop-down list contains all the controls on the Web Form. Select the appropriate control for each parameter, then click **OK**. Now the SqlDataSource is configured to insert the user’s name, e-mail address and message in the

**Fig. 25.36** | Setting up INSERT parameters based on control values.


Messages table of the Guestbook database. We show how to set the date parameter and initiate the insert operation when the user clicks **Submit** shortly.

**ASPX File for a Web Form That Interacts with a Database** 
The ASPX file generated by the guestbook GUI (and messagesSqlDataSource control) is shown in Fig. 25.37. This file contains a large amount of generated markup. We discuss only those parts that are new or noteworthy for the current example. Lines 19–58 contain the XHTML and ASP.NET elements that comprise the form that gathers user input. The GridView control appears in lines 60–85. The <asp:GridView> start tag (lines 60–63) contains properties that set various aspects of the GridView’s appearance and behavior, such as whether grid lines should be displayed between rows and columns. The **DataSourceID** property identifies the data source that is used to fill the GridView with data at runtime.

Lines 66–75 define the Columns that appear in the GridView. Each column is repre- sented as a **BoundField**, because the values in the columns are bound to values retrieved from the data source (i.e., the Messages table of the Guestbook database). The DataField property of each BoundField identifies the column in the data source to which the column in the GridView is bound. The HeaderText property indicates the text that appears as the column header. By default, this is the name of the column in the data source, but you can change this property as desired. Lines 76–84 contain nested elements that define the styles used to format the GridView’s rows. The IDE configured these styles based on your selec- tion of the **Simple** style in the **Auto Format** dialog for the GridView.

The messagesSqlDataSource is defined by the markup in lines 86–115 in Fig. 25.37. Line 87 contains a **ConnectionString** property, which indicates the connection through which the SqlDataSource control interacts with the database. The value of this property uses an **ASP.NET expression**, delimited by **<%$** and **%>**, to access the Guestbook-

ConnectionString stored in the ConnectionStrings section of the application’s Web.config configuration file. Recall that we created this connection string earlier in this section using the **Configure Data Source** wizard.Lines 88–95 define the **DeleteCommand**, **InsertCommand**, **SelectCommand** and **UpdateCommand** properties, which contain the DELETE, INSERT, SELECT and UPDATE SQL statements, respectively. These were generated by the **Configure Data Source** wizard. In this example, we use only the InsertCommand. We discuss invoking this command shortly.

~~~html
1 <%-- Fig. 25.37: Guestbook.aspx --%>
2 <%-- Guestbook Web application with a form for users to submit --%>
3 <%-- guestbook entries and a GridView to view existing entries. --%>
4 <%@ Page Language="VB" AutoEventWireup="false"
5 CodeFile="Guestbook.aspx.vb" Inherits="Guestbook" %>
6
7 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
8 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
9
10 <html xmlns="http://www.w3.org/1999/xhtml" >
11 <head runat="server">
12 <title>Guestbook</title>
13 </head>
14 <body>
15 <form id="form1" runat="server">
16 <div>
17 <h2>
18 Please leave a message in our guestbook:</h2>
19 <table>
20 <tr>
21 <td style="width: 130px; height: 21px" valign="top">
22 Your name:<br />
23 </td>
24 <td style="width: 300px; height: 21px" valign="top">
25 <asp:TextBox ID="nameTextBox" runat="server"
26 Width="300px"></asp:TextBox>
27 </td>
28 </tr>
29 <tr>
30 <td style="width: 130px" valign="top">
31 Your e-mail address:<br />
32 </td>
33 <td style="width: 300px" valign="top">
34 <asp:TextBox ID="emailTextBox" runat="server"
35 Width="300px"></asp:TextBox>
36 </td>
37 </tr>
38 <tr>
39 <td style="width: 130px" valign="top">
40 Tell the world:<br />
41 </td>
~~~

**Fig. 25.37** | ASPX file for the guestbook application. (Part 1 of 4.)


~~~html
42 <td style="width: 300px" valign="top">
43 <asp:TextBox ID="messageTextBox" runat="server"
44 Height="100px" Rows="8" Width="300px">
45 </asp:TextBox>
46 </td>
47 </tr>
48 <tr>
49 <td style="width: 130px" valign="top">
50 </td>
51 <td style="width: 300px" valign="top">
52 <asp:Button ID="submitButton" runat="server"
53 Text="Submit" />
54 <asp:Button ID="clearButton" runat="server"
55 Text="Clear" />
56 </td>
57 </tr>
58 </table>
59 <br />
60
61 AutoGenerateColumns="False" CellPadding="4"
62 DataKeyNames="MessageID"
63 ForeColor="#333333" GridLines="None" Width="600px">
64 <FooterStyle BackColor="#1C5E55" Font-Bold="True"
65 ForeColor="White" />
66
67
68
69
70
71
72
73
74
75
76 <RowStyle BackColor="#E3EAEB" />
77 <EditRowStyle BackColor="#7C6F57" />
78 <SelectedRowStyle BackColor="#C5BBAF" Font-Bold="True"
79 ForeColor="#333333" />
80 <PagerStyle BackColor="#666666" ForeColor="White"
81 HorizontalAlign="Center" />
82 <HeaderStyle BackColor="#1C5E55" Font-Bold="True"
83 ForeColor="White" />
84 <AlternatingRowStyle BackColor="White" />
85 </asp:GridView>
86
87
88 DeleteCommand="DELETE FROM [Messages] WHERE [MessageID] =
89 @MessageID" InsertCommand="INSERT INTO [Messages]
90 ([Date], [Name], [Email], [Message])
91 VALUES (@Date, @Name, @Email, @Message)"
92 UpdateCommand=
93 "UPDATE [Messages] SET [Date] = @Date, [Name] = @Name,
94 [Email] = @Email, [Message] = @Message
~~~

**Fig. 25.37** | ASPX file for the guestbook application. (Part 2 of 4.)

~~~html
95 WHERE [MessageID] = @MessageID">
96 <DeleteParameters>
97 <asp:Parameter Name="MessageID" Type="Int32" />
98 </DeleteParameters>
99 <UpdateParameters>
100 <asp:Parameter Name="Date" Type="String" />
101 <asp:Parameter Name="Name" Type="String" />
102 <asp:Parameter Name="Email" Type="String" />
103 <asp:Parameter Name="Message" Type="String" />
104 <asp:Parameter Name="MessageID" Type="Int32" />
105 </UpdateParameters>
106
107
108
109
110
111
112
113
114
115 </asp:SqlDataSource>
116 </div>
117 </form>
118 </body>
119 </html>
~~~

**Fig. 25.37** | ASPX file for the guestbook application. (Part 3 of 4.)

**Fig. 25.37** | ASPX file for the guestbook application. (Part 4 of 4.)


Notice that the SQL commands used by the SqlDataSource contain several parame- ters (prefixed with @). Lines 96–114 contain elements that define the name, the type and, for some parameters, the source of the parameter. Parameters that are set programmatically are defined by **Parameter** elements containing Name and Type properties. For example, line 107 defines the Date parameter of Type String. This corresponds to the @Date parameter in the InsertCommand (line 91). Parameters that obtain their values from controls are defined by **ControlParameter** elements. Lines 108–113 contain markup that sets up the relationships between the INSERT parameters and the Web Form’s TextBoxes. We estab- lished these relationships in the **Command and Parameter Editor** (Fig. 25.36). Each ControlParameter contains a ControlID property indicating the control from which the parameter gets its value. The PropertyName specifies the property that contains the actual value to be used as the parameter value. The IDE sets the PropertyName based on the type of control specified by the ControlID (indirectly via the **Command and Parameter Editor**). In this case, we use only TextBoxes, so the PropertyName of each ControlParameter is Text (e.g., the value of parameter @Name comes from nameTextBox.Text). However, if we were using a DropDownList, for example, the PropertyName would be SelectedValue.

### 25.5.2 Modifying the Code-Behind File for the Guestbook Application
After building the Web Form and configuring the data controls used in this example, dou- ble click the **Submit** and **Clear** buttons in **Design** view to create their corresponding Click

event handlers in the Guestbook.aspx.vb code-behind file (Fig. 25.38). The IDE generates empty event handlers, so we must add the appropriate code to make these but-

~~~java
1 ' Fig. 25.38: Guestbook.aspx.vb
2 ' Code-behind file that defines event handlers for the guestbook.
3 Partial Class Guestbook
4 Inherits System.Web.UI.Page
5
6 ' Submit Button adds a new guestbook entry to the database,
7 ' clears the form and displays the updated list of guestbook entries
8 Protected Sub submitButton_Click(ByVal sender As Object, _
9 ByVal e As System.EventArgs) Handles submitButton.Click
10
11
12
13
14
15
16
17
18
19
20
21
22
23 ' clear the TextBoxes
24 nameTextBox.Text = ""
25 emailTextBox.Text = ""
26 messageTextBox.Text = ""
27
28 ' update the GridView with the new database table contents
29 messagesGridView.DataBind()
30 End Sub ' submitButton_Click
31
32 ' Clear Button clears the Web Form's TextBoxes
33 Protected Sub clearButton_Click(ByVal sender As Object, _
34 ByVal e As System.EventArgs) Handles clearButton.Click
35 nameTextBox.Text = ""
36 emailTextBox.Text = ""
37 messageTextBox.Text = ""
38 End Sub ' clearButton_Click
39 End Class ' Guestbook
~~~

**Fig. 25.38** | Code-behind file for the guestbook application.

tons work properly. The event handler for clearButton (lines 33–38) clears each TextBox

by setting its Text property to an empty string. This resets the form for a new guestbook submission.

Lines 8–30 contain the event-handling code for submitButton, which adds the user’s information to the Messages table of the Guestbook database. Recall that we configured messagesSqlDataSource’s INSERT command to use the values of the TextBoxes on the Web Form as the parameter values inserted into the database. We have not yet specified the date value to be inserted, though. Lines 11–12 assign a String representation of the current date (e.g., "3/27/06") to a new object of type Parameter. This Parameter object is identified as "Date" and is given the current date as a default value. The SqlData- Source’s InsertParameters collection contains an item named Date (at position 0), which we Remove in line 15 and replace in line 16 by Adding our currentDate parameter. Invoking SqlDataSource method Insert in line 21 executes the INSERT command against the database, thus adding a row to the Messages table. After the data is inserted into the database, lines 24–26 clear the TextBoxes, and line 29 invokes messagesGridView’s Data- Bind method to refresh the data that the GridView displays. This causes messagesSql-

DataSource (the data source of the GridView) to execute its SELECT command to obtain the Messages table’s newly updated data.

## Case Study: Secure Books Database Application
This case study presents a web application in which a user logs into a secure website to view a list of publications by an author of the user’s choosing. The application consists of several ASPX files. Section 25.6.1 presents the application and explains the purpose of each of its web pages. Section 25.6.2 provides step-by-step instructions to guide you through building the application and presents the markup in the ASPX files.

**25.6.1 Examining the Completed Secure Books Database Application** This example uses a technique known as **forms authentication** to protect a page so that only users known to the website can access it. Such users are known as the site’s members. Authentication is a crucial tool for sites that allow only members to enter the site or a por- tion of the site. In this application, website visitors must log in before they are allowed to view the publications in the Books database. The first page that a user would typically re- quest is Login.aspx (Fig. 25.39). You will soon learn to create this page using a Login con- trol, one of several **ASP.NET login controls** that help create secure applications using authentication. These controls are found in the **Login** section of the **Toolbox**.

The Login.aspx page allows a site visitor to enter an existing user name and password to log into the website. A first-time visitor must click the link below the **Log In** button to create a new user before logging in. Doing so redirects the visitor to CreateNewUser.aspx

**Fig. 25.39** | Login.aspx page of the secure books database application.


(Fig. 25.40), which contains a CreateUserWizard control that presents the visitor with a user registration form. We discuss the CreateUserWizard control in detail in Section 25.6.2. In Fig. 25.40, we use the password pa$$word for testing purposes—as you will learn, the CreateUserWizard requires that the password contain special characters for security purposes. Clicking **Create User** establishes a new user account. After creating the account, the user is automatically logged in and shown a success message (Fig. 25.41).

**Fig. 25.40** | CreateNewUser.aspx page of the secure books database application.

**Fig. 25.41** | Message displayed to indicate that a user account was created successfully.



Clicking the **Continue** button on the confirmation page sends the user to Books.aspx

(Fig. 25.42), which provides a drop-down list of authors and a table containing the ISBNs, titles, edition numbers and copyright years of books in the database. By default, all the books by Harvey Deitel are displayed. Links appear at the bottom of the table that allow you to access additional pages of data. When the user chooses an author, a postback occurs, and the page is updated to display information about books written by the selected author (Fig. 25.43).

**Fig. 25.42** | Books.aspx displaying books by Harvey Deitel (by default).

**Fig. 25.43** | Books.aspx displaying books by Andrew Goldberg.


Note that once the user creates an account and is logged in, Books.aspx displays a welcome message customized for the particular logged-in user. As you will soon see, a Log- inName control provides this functionality. After you add this control to the page, ASP.NET handles the details of determining the user name.

Clicking the **Click here to log out** link logs the user out, then sends the user back to Login.aspx (Fig. 25.44). This link is created by a LoginStatus control, which handles the log out details. After logging out, the user would need to log in through Login.aspx to view the book listing again. The Login control on this page receives the user name and password entered by a visitor. ASP.NET compares these values with user names and pass- words stored in a database on the server. If there is a match, the visitor is **authenticated** (i.e., the user’s identity is confirmed). We explain the authentication process in detail in Section 25.6.2. When an existing user is successfully authenticated, Login.aspx redirects the user to Books.aspx (Fig. 25.42). If the user’s login attempt fails, an appropriate error message is displayed (Fig. 25.45).

**Fig. 25.44** | Logging in using the Login control.

**Fig. 25.45** | Error message displayed for an unsuccessful login attempt.



Notice that Login.aspx, CreateNewUser.aspx and Books.aspx share the same page header containing the logo image from the fictional company Bug2Bug. Instead of placing this image at the top of each page, we use a **master page** to achieve this. As we demonstrate shortly, a master page defines common GUI elements that are inherited by each page in a set of **content pages**. Just as Visual Basic classes can inherit instance variables and methods from existing classes, content pages inherit elements from master pages—this is known as **visual inheritance**.

### 25.6.2 Creating the Secure Books Database Application
Now that you are familiar with how this application behaves, you’ll learn how to create it from scratch. Thanks to the rich set of login and data controls provided by ASP.NET, you will not have to write any code to create this application. In fact, the application does not contain any code-behind files. All of the functionality is specified through properties of controls, many of which are set through wizards and other visual programming tools. ASP.NET hides the details of authenticating users against a database of user names and passwords, displaying appropriate success or error messages and redirecting the user to the correct page based on the authentication results. We now discuss the steps you must per- form to create the secure books database application.

**Step 1: Creating the Website** 
Create a new **ASP.NET Web Site** at http://localhost/Bug2Bug as described previously. We will explicitly create each of the ASPX files that we need in this application, so delete the IDE-generated Default.aspx file (and its corresponding code-behind file) by selecting Default.aspx in the **Solution Explorer** and pressing the Delete key. Click **OK** in the confir- mation dialog to delete these files.

**Step 2: Setting Up the Website’s Folders** 
Before building the pages in the website, we create folders to organize its contents. First, create an Images folder by right clicking the location of the website in the **Solution Explorer** and selecting **New Folder**, then add the bug2bug.png file to it. This image can be found in the examples directory for this chapter. Next, add the Books.mdf database file (located in the exampleDatabases subdirectory of the chapter’s examples directory) to the project’s AppData folder. We show how to retrieve data from this database later in the section.

**Step 3: Configuring the Application’s Security Settings** 
In this application, we want to ensure that only authenticated users are allowed to access Books.aspx (created in Step 9 and Step 10) to view the information in the database. Pre- viously, we created all of our ASPX pages in the web application’s root directory (e.g., http://localhost/ProjectName). By default, any website visitor (regardless of whether the visitor is authenticated) can view pages in the root directory. ASP.NET allows you to restrict access to particular folders of a website. We do not want to restrict access to the root of the website, however, because all users must be able to view Login.aspx and CreateNewUser.aspx to log in and create user accounts, respectively. Thus, if we want to restrict access to Books.aspx, it must reside in a directory other than the root directory. Create a folder named Secure. Later in the section, we will create Books.aspx in this fold- er. First, let’s enable forms authentication in our application and configure the Secure

folder to restrict access to authenticated users only.


Select **Website > ASP.NET Configuration** to open the **Web Site Administration Tool** in a web browser (Fig. 25.46). This tool allows you to configure various options that deter- mine how your application behaves. Click either the **Security** link or the **Security** tab to open a web page in which you can set security options (Fig. 25.47), such as the type of authentication the application should use. In the **Users** column, click **Select authentication type**. On the resulting page (Fig. 25.48), select the radio button next to **From the internet** to indicate that users will log in via a form on the website in which the user can enter a username and password (i.e., the application will use forms authentication). The default setting—**From a local network**—relies on users’ Windows user names and passwords for authentication purposes. Click the **Done** button to save this change.

Now that forms authentication is enabled, the **Users** column on the main page of the **Web Site Administration Tool** (Fig. 25.49) provides links to create and manage users. As you saw in Section 25.6.1, our application provides the CreateNewUser.aspx page in which users can create their own accounts. Thus, while it is possible to create users through the **Web Site Administration Tool**, we do not do so here.

Even though no users exist at the moment, we configure the Secure folder to grant access only to authenticated users (i.e., deny access to all unauthenticated users). Click the **Create access rules** link in the **Access Rules** column of the **Web Site Administration Tool** (Fig. 25.49) to view the **Add New Access Rule** page (Fig. 25.50). This page is used to create an **access rule**—a rule that grants or denies access to a particular web application directory for a specific user or group of users. Click the Secure directory in the left column of the page to identify the directory to which our access rule applies. In the middle column, select the radio button marked **Anonymous users** to specify that the rule applies to users who

**Fig. 25.46** | **Web Site Administration Tool** for configuring a web application.



**Fig. 25.47** | **Security** page of the **Web Site Administration Tool**.

**Fig. 25.48** | Choosing the type of authentication used by an ASP.NET web application.

25.6 Case Study: Secure Books Database Application **1081**

**Fig. 25.49** | Main page of the **Web Site Administration Tool** after enabling forms authentication.

**Fig. 25.50** | **Add New Access Rule** page used to configure directory access.



have not been authenticated. Finally, select **Deny** in the right column, labeled **Permission**, then click **OK**. This rule indicates that **anonymous users** (i.e., users who have not identi- fied themselves by logging in) should be denied access to any pages in the Secure directory (e.g., Books.aspx). By default, anonymous users who attempt to load a page in the Secure directory are redirected to the Login.aspx page so that they can identify themselves. Note that because we did not set up any access rules for the Bug2Bug root directory, anonymous users may still access pages there (e.g., Login.aspx, CreateNewUser.aspx). We create these pages momentarily.

**Step 4: Examining the Autogenerated Web.config Files** 
We have now configured the application to use forms authentication and created an access rule to ensure that only authenticated users can access the Secure folder. Before creating the website’s content, we examine how the changes made through the **Web Site Adminis- tration Tool** appear in the IDE. Recall that Web.config is an XML file used for application configuration, such as enabling debugging or storing database connection strings. Visual Web Developer generates two Web.config files in response to our actions using the **Web Site Administration Tool**—one in the application’s root directory and one in the Secure

folder. [Note: You may need to click the **Refresh** button in the **Solution Explorer** to see these files.] In an ASP.NET application, a page’s configuration settings are determined by the current directory’s Web.config file. The settings in this file take precedence over the set- tings in the root directory’s Web.config file.

After setting the authentication type for the web application, the IDE generates a Web.config file at http://localhost/Bug2Bug/Web.config, which contains an **authen-** **tication** element

**<authentication mode="Forms" />**

This element appears in the root directory’s Web.config file, so the setting applies to the entire website. The value "Forms" of the **mode** attribute specifies that we want to use forms authentication. Had we left the authentication type set to **From a local network** in the **Web Site Administration Tool**, the mode attribute would be set to "Windows".

After creating the access rule for the Secure folder, the IDE generates a second Web.config file in that folder. This file contains an **authorization** element that indicates who is, and who is not, authorized to access this folder over the web. In this application, we want to allow only authenticated users to access the contents of the Secure folder, so the authorization element appears as

 <authorization>
 <deny users="?" />
 </authorization>

Rather than grant permission to each individual authenticated user, we deny access to those who are not authenticated (i.e., those who have not logged in). The **deny** element inside the authorization element specifies the users to whom we wish to deny access. When the users attribute’s value is set to "?", all anonymous (i.e., unauthenticated) users are denied access to the folder. Thus, an unauthenticated user will not be able to load http://localhost/Bug2Bug/Secure/Books.aspx. Instead, such a user will be redirected to the Login.aspx page—when a user is denied access to a part of a site, ASP.NET by de- fault sends the user to a page named Login.aspx in the application’s root directory.


**Step 5: Creating a Master Page** 
Now that you have established the application’s security settings, you can create the appli- cation’s web pages. We begin with the master page, which defines the elements we want to appear on each page. A master page is like a base class in a visual inheritance hierarchy, and content pages are like derived classes. The master page contains placeholders for cus- tom content created in each content page. The content pages visually inherit the master page’s content, then add content in place of the master page’s placeholders.

For example, you might want to include a **navigation bar** (i.e., a series of buttons for navigating a website) on every page of a site. If the site encompasses a large number of pages, adding markup to create the navigation bar for each page can be time consuming. Moreover, if you subsequently modify the navigation bar, every page on the site that uses it must be updated. By creating a master page, you can specify the navigation bar markup in one file and have it appear on all the content pages, with only a few lines of markup. If the navigation bar changes, only the master page changes—any content pages that use it are updated the next time the page is requested.

In this example, we want the Bug2Bug logo to appear as a header at the top of every page, so we will place an Image control in the master page. Each subsequent page we create will be a content page based on this master page and thus will include the header. To create a master page, right click the location of the website in the **Solution Explorer** and select **Add New Item…**. In the **Add New Item** dialog, select **Master Page** from the template list and specify Bug2Bug.master as the filename. Master pages have the filename extension **.master** and, like Web Forms, can optionally use a code-behind file to define additional functionality. In this example, we do not need to specify any code for the master page, so leave the box labeled **Place code in a separate file** unchecked. Click **Add** to create the page.

The IDE opens the master page in **Source** mode (Fig. 25.51) when the file is first cre- ated. [Note: We added a line break in the DOCTYPE element for presentation purposes.] The

**Fig. 25.51** | Master page in **Source** mode.



markup for a master page is almost identical to that of a Web Form. One difference is that a master page contains a **Master** directive (line 1 in Fig. 25.51), which specifies that this file defines a master page using the indicated Language for any code. Because we chose not to use a code-behind file, the master page also contains a **script** element (lines 6–8). Code that would usually be placed in a code-behind file can be placed in a script element. However, we remove the script element from this page, because we do not need to write any additional code. After deleting this block of markup, set the title of the page to Bug2Bug. Finally, notice that the master page contains a **ContentPlaceHolder** control (lines 17–18 of Fig. 25.51). This control serves as a placeholder for content that will be defined by a content page. You will see how to define content to replace the Content-

PlaceHolder shortly. At this point, you can edit the master page in **Design** mode (Fig. 25.52) as if it were

an ASPX file. Notice that the ContentPlaceHolder control appears as a large rectangle with a gray bar indicating the control’s type and ID. Using the **Properties** window, change the ID of this control to bodyContent.

To create a header in the master page that will appear at the top of each content page, we insert a table into the master page. Place the cursor to the left of the ContentPlace-

Holder and select **Layout > Insert Table**. In the **Insert Table** dialog, click the **Template** radio button, then select **Header** from the drop-down list of available table templates. Click **OK** to create a table that fills the page and contains two rows. Drag and drop the Content-

PlaceHolder into the bottom table cell. Change the valign property of this cell to top, so the ContentPlaceHolder vertically aligns with the top of the cell. Next, set the Height

of the top table cell to 130. Add to this cell an Image control named headerImage with its ImageUrl property set to the bug2bug.png file in the project’s Images folder. Figure 25.53 shows the markup and **Design** view of the completed master page. As you will see in Step

**Fig. 25.52** | Master page in **Design** mode.

**1** <%-- Fig. 25.53: Bug2bug.master --%> 
**2** <%-- Master page that defines common features of all pages in the --%> **3** <%-- secure book database application. --%>

**Fig. 25.53** | Bug2Bug.master page that defines a logo image header for all pages in the secure book database application. (Part 1 of 2.)

~~~html
4 <%@ Master Language="VB" %>
5
6 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
7 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
8
9 <html xmlns="http://www.w3.org/1999/xhtml" >
10 <head runat="server">
11 <title>Bug2Bug</title>
12 </head>
13 <body>
14 <form id="form1" runat="server">
15 <div>
16 <table border="0" cellpadding="0" cellspacing="0"
17 style="width: 100%; height: 100%">
18 <tr>
19 <td height="130" style="width: 887px">
20
21
22 </td>
23 </tr>
24 <tr>
25 <td style="width: 887px" valign="top">
26
27
28 </td>
29 </tr>
30 </table>
31 &nbsp;
32 </div>
33 </form>
34 </body>
35 </html>
~~~

**Fig. 25.53** | Bug2Bug.master page that defines a logo image header for all pages in the secure book database application. (Part 2 of 2.)


6, a content page based on this master page displays the logo image defined here, as well as the content designed for that specific page (in place of the ContentPlaceHolder).

**Step 6: Creating a Content Page** 
We now create a content page based on Bug2Bug.master. We begin by building Create-

NewUser.aspx. To create this file, right click the master page in the **Solution Explorer** and select **Add Content Page**. This action causes a Default.aspx file, configured to use the master page, to be added to the project. Rename this file CreateNewUser.aspx, then open it in **Source** mode (Fig. 25.54). Note that this file contains a Page directive with a Lan-

guage property, a MasterPageFile property and a Title property. The Page directive in- dicates the **MasterPageFile** that is used as a starting point for this new page’s design. In this case, the MasterPageFile property is set to "~/Bug2Bug.master" to indicate that the current file is based on the master page we just created. The **Title** property specifies the title that will be displayed in the web browser’s title bar when the content page is loaded. This value, which we set to Create a New User, replaces the value (i.e., Bug2Bug) set in the title element of the master page.

**Fig. 25.54** | Content page CreateNewUser.aspx in **Source** mode.


Because CreateNewUser.aspx’s Page directive specifies Bug2Bug.master as the page’s MasterPageFile, the content page implicitly contains the contents of the master page, such as the DOCTYPE, html and body elements. The content page file does not duplicate the XHTML elements found in the master page. Instead, the content page contains a **Content** control (lines 3–5 in Fig. 25.54), in which we will place page-specific content that will replace the master page’s ContentPlaceHolder when the content page is requested. The ContentPlaceHolderID property of the Content control identifies the ContentPlace-

Holder in the master page that the control should replace—in this case, bodyContent. The relationship between a content page and its master page is more evident in **Design**

mode (Fig. 25.55). The gray shaded region contains the contents of the master page Bug2Bug.master as they will appear in CreateNewUser.aspx when rendered in a web browser. The only editable part of this page is the Content control, which appears in place of the master page’s ContentPlaceHolder.

**Step 7: Adding a CreateUserWizard Control to a Content Page** 
Recall from Section 25.6.1 that CreateNewUser.aspx is the page in our website that al- lows first-time visitors to create user accounts. To provide this functionality, we use a **CreateUserWizard** control. Place the cursor inside the Content control in **Design** mode and double click CreateUserWizard in the **Login** section of the **Toolbox** to add it to the


**Fig. 25.55** | Content page CreateNewUser.aspx in **Design** mode


page at the current cursor position. You can also drag-and-drop the control onto the page. To change the CreateUserWizard’s appearance, open the **CreateUserWizard Tasks** smart tag menu, and click **Auto Format**. Select the **Professional** color scheme.

As discussed previously, a CreateUserWizard provides a registration form that site vis- itors can use to create a user account. ASP.NET creates a SQL Server database (named ASPNETDB.MDF and located in the AppData folder) to store the user names, passwords and other account information of the application’s users. ASP.NET also enforces a default set of requirements for filling out the form. Each field on the form is required, the password must contain at least seven characters (including at least one nonalphanumeric character) and the two passwords entered must match. The form also asks for a security question and answer that can be used to identify a user in case the user needs to reset or recover the account’s password.

After the user fills in the form’s fields and clicks the **Create User** button to submit the account information, ASP.NET verifies that all the form’s requirements were fulfilled and attempts to create the user account. If an error occurs (e.g., the user name already exists), the CreateUserWizard displays a message below the form. If the account is created suc- cessfully, the form is replaced by a confirmation message and a button that allows the user to continue. You can view this confirmation message in **Design** mode by selecting **Com- plete** from the **Step** drop-down list in the **CreateUserWizard Tasks** smart tag menu.

When a user account is created, ASP.NET automatically logs the user into the site (we say more about the login process shortly). At this point, the user is authenticated and allowed to access the Secure folder. After we create Books.aspx later in this section, we set the CreateUserWizard’s ContinueDestinationPageUrl property to ~/Secure/

Books.aspx to indicate that the user should be redirected to Books.aspx after clicking the **Continue** button on the confirmation page.

Figure 25.56 presents the completed CreateNewUser.aspx file (reformatted for read- ability). Inside the Content control, the CreateUserWizard control is defined by the markup in lines 7–36. The start tag (lines 7–10) contains several properties that specify formatting styles for the control, as well as the ContinueDestinationPageUrl property, which you will set later in the chapter. Lines 11–16 specify the wizard’s two steps— CreateUserWizardStep and CompleteWizardStep—in a WizardSteps element. Create- UserWizardStep and CompleteWizardStep are classes that encapsulate the details of cre- ating a user and issuing a confirmation message. Finally, lines 17–35 contain elements that define additional styles used to format specific parts of the control.

The sample outputs in Fig. 25.56(a) and Fig. 25.56(b) demonstrate successfully cre- ating a user account with CreateNewUser.aspx. We use the password pa$$word for testing purposes. This password satisfies the minimum length and special character requirement imposed by ASP.NET, but in a real application, you should use a password that is more difficult for someone to guess. Figure 25.56(c) illustrates the error message that appears when you attempt to create a second user account with the same user name—ASP.NET requires that each user name be unique.

~~~java
1 <%-- Fig. 25.56: CreateNewUser.aspx --%>
2 <%-- Content page using a CreateUserWizard control to register users. --%>
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17 <SideBarStyle BackColor="#5D7B9D" BorderWidth="0px"
18 Font-Size="0.9em" VerticalAlign="Top" />
19 <TitleTextStyle BackColor="#5D7B9D" Font-Bold="True"
20 ForeColor="White" />
21 <SideBarButtonStyle BorderWidth="0px" Font-Names="Verdana"
22 ForeColor="White" />
23 <NavigationButtonStyle BackColor="#FFFBFF" BorderColor="#CCCCCC"
24 BorderStyle="Solid" BorderWidth="1px" Font-Names="Verdana"
25 ForeColor="#284775" />
26 <HeaderStyle BackColor="#5D7B9D" BorderStyle="Solid"
27 Font-Bold="True" Font-Size="0.9em"
28 ForeColor="White" HorizontalAlign="Center" />
29 <CreateUserButtonStyle BackColor="#FFFBFF" BorderColor="#CCCCCC"
30 BorderStyle="Solid" BorderWidth="1px" Font-Names="Verdana"
31 ForeColor="#284775" />
32 <ContinueButtonStyle BackColor="#FFFBFF" BorderColor="#CCCCCC"
33 BorderStyle="Solid" BorderWidth="1px" Font-Names="Verdana"
34 ForeColor="#284775" />
~~~

**Fig. 25.56** | CreateNewUser.aspx content page that provides a user registration form. (Part 1 of 2.)

~~~java
35 <StepStyle BorderWidth="0px" />
36
37
~~~

**Fig. 25.56** | CreateNewUser.aspx content page that provides a user registration form. (Part 2 of 2.)


**Step 8: Creating a Login Page** 

Recall from Section 25.6.1 that Login.aspx is the page in our website that allows return- ing visitors to log into their user accounts. To create this functionality, add another con- tent page named Login.aspx and set its title to Login. In **Design** mode, drag a **Login**

control (located in the **Login** section of the **Toolbox**) to the page’s Content control. Open the **Auto Format** dialog from the **Login Tasks** smart tag menu and set the control’s color scheme to **Professional**.

Next, configure the Login control to display a link to the page for creating new users. Set the Login control’s CreateUserUrl property to CreateNewUser.aspx by clicking the ellipsis button to the property’s right in the **Properties** window and selecting the Create-

NewUser.aspx file in the dialog. Then set the CreateUserText property to Click here to

create a new user. These property values cause a link to appear in the Login control. Finally, change the value of the Login control’s DisplayRememberMe property to

False. By default, the control displays a checkbox and the text Remember me next time. This can be used to allow a user to remain authenticated beyond a single browser session on the user’s current computer. However, we want to require that users log in each time they visit the site, so we disable this option.

The Login control encapsulates the details of logging a user into a web application (i.e., authenticating a user). When a user enters a user name and password, then clicks the **Log In** button, ASP.NET determines whether the items provided match those of an account in the membership database (i.e., ASPNETDB.MDF created by ASP.NET). If they match, the user is authenticated (i.e., the user’s identity is confirmed), and the browser is redirected to the page specified by the Login control’s DestinationPageUrl property. We set this property to the Books.aspx page after creating it in the next section. If the user’s identity cannot be confirmed (i.e., the user is not authenticated), the Login control dis- plays an error message (see Fig. 25.57), and the user can attempt to log in again.

~~~java
1 <%-- Fig. 25.57: Login.aspx --%>
2 <%-- Content page using a Login control that authenticates users. --%>
3
4 <asp:Content ID="Content1" ContentPlaceHolderID="bodyContent"
5 Runat="Server">
6
7
8
9
10
11
12 <TitleTextStyle BackColor="#5D7B9D" Font-Bold="True"
13 Font-Size="0.9em" ForeColor="White" />
14 <InstructionTextStyle Font-Italic="True" ForeColor="Black" />
15 <TextBoxStyle Font-Size="0.8em" />
16 <LoginButtonStyle BackColor="#FFFBFF" BorderColor="#CCCCCC"
17 BorderStyle="Solid" BorderWidth="1px" Font-Names="Verdana"
18 Font-Size="0.8em" ForeColor="#284775" />
19
20 </asp:Content>
~~~

**Fig. 25.57** | Login.aspx content page using a Login control. (Part 1 of 2.)

**Fig. 25.57** | Login.aspx content page using a Login control. (Part 2 of 2.)

Figure 25.57 presents the completed Login.aspx file. Note that, as in CreateNew User.aspx, the Page directive indicates that this content page inherits content from Bug2Bug.master. In the Content control that replaces the master page’s ContentPlace- Holder with ID bodyContent, lines 6–19 create a Login control. Note the CreateUser-

Text and CreateUserUrl properties (lines 8–9) that we set using the **Properties** window. Line 11 in the start tag for the Login control contains the DestinationPageUrl (you will set this property in the next step). The elements in lines 12–18 define various formatting styles applied to parts of the control. Note that all of the functionality related to actually logging the user in or displaying error messages is completely hidden from you.

When a user enters the user name and password of an existing user account, ASP.NET authenticates the user and writes to the client an **encrypted** cookie containing information about the authenticated user. Encrypted data is data translated into a code that only the sender and receiver can understand—thereby keeping it private. The encrypted cookie contains a String user name and a Boolean value that specifies whether this cookie should persist (i.e., remain on the client’s computer) beyond the current session. Our application authenticates the user only for the current session.

**Step 9: Creating a Content Page That Only Authenticated Users Can Access** 
A user who has been authenticated will be redirected to Books.aspx. We now create the Books.aspx file in the Secure folder—the folder for which we set an access rule denying access to anonymous users. If an unauthenticated user requests this file, the user will be redirected to Login.aspx. From there, the user can either log in or a create a new account, both of which will authenticate the user, thus allowing the user to return to Books.aspx.

To create Books.aspx, right click the Secure folder in the **Solution Explorer** and select **Add New Item…**. In the resulting dialog, select **Web Form** and specify the filename Books.aspx. Check the box **Select Master Page** to indicate that this Web Form should be created as a content page that references a master page, then click **Add**. In the **Select a Master Page** dialog, select Bug2Bug.master and click **OK**. The IDE creates the file and opens it in **Source** mode. Change the Title property of the Page directive to Book Infor-

mation.

**Step 10: Customizing the Secure Page** 
To customize the Books.aspx page for a particular user, we add a welcome message con- taining a **LoginName** control, which displays the current authenticated user name. Open Books.aspx in **Design** mode. In the Content control, type Welcome followed by a comma and a space. Then drag a LoginName control from the **Toolbox** onto the page. When this page executes on the server, the text [UserName] that appears in this control in **Design** mode will be replaced by the current user name. In **Source** mode, type an exclamation point (!) directly after the LoginName control (with no spaces in between). [Note: If you add the exclamation point in **Design** mode, the IDE may insert extra spaces or a line break between this character and the preceding control. Entering the ! in **Source** mode ensures that it appears adjacent to the user’s name.]

Next, add a LoginStatus control, which will allow the user to log out of the website when finished viewing the listing of books in the database. A **LoginStatus** control renders on a web page in one of two ways—by default, if the user is not authenticated, the control displays a hyperlink with the text Login; if the user is authenticated, the control displays a hyperlink with the text Logout. Each link performs the stated action. Add a LoginStatus control to the page by dragging it from the **Toolbox** onto the page. In this example, any user who reaches this page must already be authenticated, so the control will always render as a Logout link. The **LoginStatus Tasks** smart tag menu allows you switch between the control’s **Views**. Select the **Logged In** view to see the Logout link. To change the actual text of this link, modify the control’s LogoutText property to Click here to log out. Next, set the LogoutAction property to RedirectToLoginPage.

**Step 11: Connecting the CreateUserWizard and Login Controls to the Secure Page** 
Now that we have created Books.aspx, we can specify that this is the page to which the CreateUserWizard and Login controls redirect users after they are authenticated. Open CreateNewUser.aspx in **Design** mode and set the CreateUserWizard control’s Continue- DestinationPageUrl property to Books.aspx. Next, open Login.aspx and select Books.aspx as the DestinationPageUrl of the Login control.

At this point, you can run the web application by selecting **Debug > Start Without Debugging**. First, create a user account on CreateNewUser.aspx, then notice how the LoginName and LoginStatus controls appear on Books.aspx. Next, log out of the site and log back in using Login.aspx.

**Step 12: Generating a DataSet Based on the Books.mdf Database** 
Now, let’s add the content (i.e., book information) to the secure page Books.aspx. This page will provide a DropDownList containing authors’ names and a GridView displaying information about books written by the author selected in the DropDownList. A user will select an author from the DropDownList to cause the GridView to display information about only the books written by the selected author. As you will see, we create this func- tionality entirely in **Design** mode without writing any code.

To work with the Books database, we use an approach slightly different than in the preceding case study, in which we accessed the Guestbook database using a SqlDataSource control. Here we use an **ObjectDataSource** control, which encapsulates an object that provides access to a data source. An ObjectDataSource can encapsulate a TableAdapter

and use its methods to access the data in the database. This helps separate the data-access logic from the presentation logic. As you will see shortly, the SQL statements used to retrieve data do not appear in the ASPX page when using an ObjectDataSource.

The first step in accessing data using an ObjectDataSource is to create a DataSet that contains the data from the Books database required by the application. In Visual Basic 2005 Express, this occurs automatically when you add a data source to a project. In Visual Web Developer, however, you must explicitly generate the DataSet. Right click the project’s location in the **Solution Explorer** and select **Add New Item…**. In the resulting dialog, select **DataSet** and specify BooksDataSet.xsd as the filename, then click **Add**. A dialog will appear that asks you whether the DataSet should be placed in an AppCode

folder—a folder whose contents are compiled and made available to all parts of the project. Click **Yes** for the IDE to create this folder to store BooksDataSet.xsd.

**Step 13: Creating and Configuring an AuthorsTableAdapter** 
Once the DataSet is added, the **Dataset Designer** will appear, and the **TableAdapter Con- figuration Wizard** will open. This wizard allows you to configure a TableAdapter for filling a DataTable in a DataSet with data from a database. The Books.aspx page requires two sets of data—a list of authors that will be displayed in the page’s DropDownList (created shortly) and a list of books written by a specific author. We focus on the first set of data here—the authors. Thus, we use the **TableAdapter Configuration Wizard** first to configure an AuthorsTableAdapter. In the next step, we will configure a TitlesTableAdapter.

In the **TableAdapter Configuration Wizard**, select Books.mdf from the drop-down list. Then click **Next >** twice to save the connection string in the application’s Web.config file and move to the **Choose a Command Type** screen.

In the wizard’s **Choose a Command Type** screen, select **Use SQL statements** and click **Next >**. The next screen allows you to enter a SELECT statement for retrieving data from the database, which will then be placed in an Authors DataTable within the Books-

DataSet. Enter the SQL statement

**SELECT** AuthorID, FirstName + **' '** + LastName **AS** Name **FROM** Authors

in the text box on the **Enter a SQL Statement** screen. This query selects the AuthorID of each row. This query’s result will also contain the column Name that is created by concat- enating each row’s FirstName and LastName, separated by a space. The **AS** SQL keyword allows you to generate a column in a query result—called an **alias**—that contains a SQL expression’s result (e.g., FirstName + ' ' + LastName). You’ll soon see how we use this que- ry’s result to populate the DropDownList with items containing the authors’ full names.

After entering the SQL statement, click the **Advanced Options…** button and uncheck **Generate Insert, Update and Delete statements**, since this application does not need to modify the database’s contents. Click **OK** to close the **Advanced Options** dialog. Click **Next >** to advance to the **Choose Methods to Generate** screen. Leave the default names and click **Finish**. Notice that the **DataSet Designer** (Fig. 25.58) now displays a DataTable

named Authors with AuthorID and Name members, and Fill and GetData methods.

**Step 14: Creating and Configuring a TitlesTableAdapter** 
Books.aspx needs to access a list of books by a specific author and a list of authors. Thus we must create a TitlesTableAdapter that will retrieve the desired information from the

**Fig. 25.58** | Authors DataTable in the **Dataset Designer**.


database’s Titles table. Right click the **Dataset Designer** and from the menu that appears, select **Add > TableAdapter…** to launch the **TableAdapter Configuration Wizard**. Make sure the BooksConnectionString is selected as the connection in the wizard’s first screen, then click **Next >**. Choose **Use SQL statements** and click **Next >**.

In the **Enter a SQL Statement** screen, open the **Advanced Options** dialog and uncheck **Generate Insert, Update and Delete statements**, then click **OK**. Our application allows users to filter the books displayed by the author’s name, so we need to build a query that takes an AuthorID as a parameter and returns the rows in the Titles table for books written by that author. To build this complex query, click the **Query Builder…** button.

In the **Add Table** dialog that appears, select **AuthorISBN** and click **Add**. Then **Add** the **Titles** table, too. Our query requires access to data in both of these tables. Click **Close** to exit the **Add Table** dialog. In the **Query Builder** window’s top pane (Fig. 25.59), check the box marked **\* (All Columns)** in the **Titles** table. Next, in the middle pane, add a row with **Column** set to AuthorISBN.AuthorID. Uncheck the **Output** box, because we do not want


**Fig. 25.59** | **Query Builder** for designing a query that selects books written by a particular author.


the **AuthorID** to appear in our query result. Add an @authorID parameter in this row’s **Filter** column. The SQL statement generated by these actions retrieves information about all books written by the author specified by parameter @authorID. The statement first merges the data from the AuthorISBN and Titles tables. The INNER JOIN clause specifies that the ISBN columns of each table are compared to determine which rows are merged. The INNER JOIN results in a temporary table containing the columns of both tables. The WHERE clause of the SQL statement restricts the book information from this temporary table to a specific author (i.e., all rows in which the AuthorID column is equal to @authorID).

Click **OK** to exit the **Query Builder**, then in the **TableAdapter Configuration Wizard**, click **Next >**. On the **Choose Methods to Generate** screen, enter FillByAuthorID and Get DataByAuthorID as the names of the two methods to be generated for the TitlesTable Adapter. Click **Finish** to exit the wizard. You should now see a Titles DataTable in the **Dataset Designer** (Fig. 25.60).

**Fig. 25.60** | **Dataset Designer** after adding the TitlesTableAdapter.


**Step 15: Adding a DropDownList Containing Authors’ First and Last Names** Now that we have created a BooksDataSet and configured the necessary TableAdapters, we add controls to Books.aspx that will display the data on the web page. We first add the DropDownList from which users can select an author. Open Books.aspx in **Design** mode, then add the text Author: and a DropDownList control named authorsDropDownList in the page’s Content control, below the existing content. The DropDownList initially dis- plays the text [Unbound]. We now bind the list to a data source, so the list displays the author information placed in the BooksDataSet by the AuthorsTableAdapter. In the **DropDownList Tasks** smart tag menu, click **Choose Data Source…** to start the **Data Source Configuration Wizard**. Select **<New data source…>** from the **Select a data source** drop- down list in the first screen of the wizard. Doing so opens the **Choose a Data Source Type** screen. Select **Object** and set the ID to authorsObjectDataSource, then click **OK**.

An ObjectDataSource accesses data through another object, often called a **business object**. Recall that the middle tier of a three-tier application contains business logic that controls the way an application’s top-tier user interface (in this case, Books.aspx) accesses the bottom tier’s data (in this case, the Books.mdf database file). Thus, a business object represents the middle tier of an application and mediates interactions between the other two tiers. In an ASP.NET web application, a TableAdapter typically serves as the business object that retrieves the data from the bottom-tier database and makes it available to the top-tier user interface through a DataSet. In the **Choose a Business Object** screen of the **Configure Data Source** wizard (Fig. 25.61), select BooksDataSetTableAdapters.Authors- TableAdapter. [Note: You may need to save the project to see the AuthorsTableAdapter.]


BooksDataSetTableAdapters is a namespace declared by the IDE when you create Books- DataSet. Click **Next >** to continue.

The **Define Data Methods** screen (Fig. 25.62) allows you to specify which of the busi- ness object’s methods (in this case, AuthorsTableAdapter) should be used to obtain the data accessed through the ObjectDataSource. You can choose only methods that return data, so the only choice is method GetData, which returns an AuthorsDataTable. Click **Finish** to close the **Configure Data Source** wizard and return to the **Data Source Configura- tion Wizard** for the DropDownList (Fig. 25.63). The new data source (i.e., authorsObject-

**Fig. 25.61** | Choosing a business object for an ObjectDataSource.

**Fig. 25.62** | Choosing a data method of a business object for use with an ObjectDataSource.

**Fig. 25.63** | Choosing a data source for a DropDownList.


DataSource) should be selected in the top drop-down list. The other two drop-down lists on this screen allow you to configure how the DropDownList control uses the data from the data source. Set Name as the data field to display and AuthorID as the data field to use as the value. Thus, when authorsDropDownList is rendered in a web browser, the list items display the author names, but the underlying values associated with each item are the author AuthorIDs. Finally, click **OK** to bind the DropDownList to the specified data.

The last step in configuring the DropDownList on Books.aspx is to set the control’s **AutoPostBack** property to True. This property indicates that a postback occurs each time the user selects an item in the DropDownList. As you will see shortly, this causes the page’s GridView (created in the next step) to display new data.

**Step 16: Creating a GridView to Display the Selected Author’s Books** 
We now add a GridView to Books.aspx for displaying the book information by the author selected in the authorsDropDownList. Add a GridView named titlesGridView below the other controls in the page’s Content control.

To bind the GridView to data from the Books database, select **<New data source…>** from the **Choose Data Source** drop-down list in the **GridView Tasks** smart tag menu. When the **Data Source Configuration Wizard** opens, select **Object** and set the ID of the data source to titlesObjectDataSource, then click **OK**. In the **Choose a Business Object** screen, select the BooksDataSetTableAdapters.TitlesTableAdapter from the drop-down list to indi- cate the object that will be used to access the data. Click **Next >**. In the **Define Data Methods** screen, leave the default selection of GetDataByAuthorID as the method that will be invoked to obtain the data for display in the GridView. Click **Next >**.

Recall that TitlesTableAdapter method GetDataByAuthorID requires a parameter to indicate the AuthorID for which data should be retrieved. The **Define Parameters** screen (Fig. 25.64) allows you to specify where to obtain the value of the @authorID parameter in the SQL statement executed by GetDataByAuthorID. Select **Control** from the **Parameter source** drop-down list. Select authorsDropDownList as the **ControlID** (i.e., the ID of the

**Fig. 25.64** | Choosing the data source for a parameter in a business object’s data method.


parameter source control). Next, enter 1 as the **DefaultValue**, so books by Harvey Deitel (who has AuthorID 1 in the database) display when the page first loads (i.e., before the user has made any selections using the authorsDropDownList). Finally, click **Finish** to exit the wizard. The GridView is now configured to display the data retrieved by TitlesTable-

Adapter.GetDataByAuthorID, using the value of the current selection in authorsDrop-

DownList as the parameter. Thus, when the user selects a new author and a postback occurs, the GridView displays a new set of data.

Now that the GridView is tied to a data source, we modify several of the control’s properties to adjust its appearance and behavior. Set the GridView’s CellPadding property to 5, set the BackColor of the AlternatingRowStyle to LightYellow, and set the Back-

Color of the HeaderStyle to LightGreen. Change the Width of the control to 600px to accommodate long data values.

Next, in the **GridView Tasks** smart tag menu, check **Enable Sorting**. This causes the column headings in the GridView to turn into hyperlinks that allow users to sort the data in the GridView. For example, clicking the Titles heading in the web browser will cause the displayed data to appear sorted in alphabetical order. Clicking this heading a second time will cause the data to be sorted in reverse alphabetical order. ASP.NET hides the details required to achieve this functionality.

Finally, in the **GridView Tasks** smart tag menu, check **Enable Paging**. This causes the GridView to split across multiple pages. The user can click the numbered links at the bottom of the GridView control to display a different page of data. GridView’s **PageSize** property determines the number of entries per page. Set the PageSize property to 4 using the **Prop- erties** window so that the GridView displays only four books per page. This technique for displaying data makes the site more readable and enables pages to load more quickly (because less data is displayed at one time). Note that, as with sorting data in a GridView, you do not need to add any code to achieve paging functionality. Figure 25.65 displays the completed Books.aspx file in **Design** mode.

**Fig. 25.65** | Completed Books.aspx in **Design** mode.


**Step 17: Examining the Markup in Books.aspx** 
Figure 25.66 presents the markup in Books.aspx (reformatted for readability). Aside from the exclamation point in line 8, which we added manually in **Source** mode, all the remain- ing markup was generated by the IDE in response to the actions we performed in **Design** mode. The Content control (lines 5–53) defines page-specific content that will replace the ContentPlaceHolder named bodyContent. Recall that this control is located in the master page specified in line 3. Line 8 creates the LoginName control, which displays the authen- ticated user’s name when the page is requested and viewed in a browser. Lines 9–11 create the LoginStatus control. Recall that this control is configured to redirect the user to the login page after logging out (i.e., clicking the hyperlink with the LogoutText).

Lines 15–18 define the DropDownList that displays the names of the authors in the Books database. Line 16 contains the control’s AutoPostBack property, which indicates that changing the selected item in the list causes a postback to occur. The DataSourceID

property in line 16 specifies that the DropDownList’s items are created based on the data obtained through the authorsObjectDataSource (defined in lines 19–23). Line 21 spec- ifies that this ObjectDataSource accesses the Books database by calling method GetData

of the BooksDataSet’s AuthorsTableAdapter (line 22). Lines 26–42 create the GridView that displays information about the books written

by the selected author. The start tag (lines 26–29) indicates that paging (with a page size of 4) and sorting are enabled in the GridView. The AutoGenerateColumns property indi- cates whether the columns in the GridView are generated at runtime based on the fields in the data source. This property is set to False, because the IDE-generated Columns element


~~~VB
1 <%-- Fig. 25.66: Books.aspx --%>
2 <%-- Displays information from the Books database. --%>
3 <%@ Page Language="VB" MasterPageFile="~/Bug2Bug.master"
4 Title="Book Information" %>
5 <asp:Content ID="Content1" ContentPlaceHolderID="bodyContent"
6 Runat="Server">
7 Welcome,
8
9
10
11
12 <br />
13 <br />
14 Author:
15 <asp:DropDownList ID="authorsDropDownList" runat="server"
16
17
18 </asp:DropDownList>
19
20
21
22
23
24 <br />
25 <br />
26
27
28
29
30 <Columns>
31 <asp:BoundField DataField="ISBN" HeaderText="ISBN"
32 ReadOnly="True" SortExpression="ISBN" />
33 <asp:BoundField DataField="Title" HeaderText="Title"
34 SortExpression="Title" />
35 <asp:BoundField DataField="EditionNumber"
36 HeaderText="EditionNumber" SortExpression="EditionNumber" />
37 <asp:BoundField DataField="Copyright" HeaderText="Copyright"
38 SortExpression="Copyright" />
39 </Columns>
40 <HeaderStyle BackColor="LightGreen" />
41 <AlternatingRowStyle BackColor="LightYellow" />
42 </asp:GridView>
43
44
45
46
47 <SelectParameters>
48
49
50
51 </SelectParameters>
52 </asp:ObjectDataSource>
53 </asp:Content>
~~~

**Fig. 25.66** | Markup for the completed Books.aspx file. (Part 1 of 2.)

**Fig. 25.66** | Markup for the completed Books.aspx file. (Part 2 of 2.)


(lines 30–39) already specifies the columns for the GridView using BoundFields. Lines 43–52 define the ObjectDataSource used to fill the GridView with data. Recall that we configured titlesObjectDataSource to use method GetDataByAuthorID of the Books-

DataSet’s TitlesTableAdapter for this purpose. The ControlParameter in lines 48–50 specifies that the value of method GetDataByAuthorID’s parameter comes from the SelectedValue property of the authorsDropDownList.

Figure 25.66(a) depicts the default appearance of Books.aspx in a web browser. Because the DefaultValue property (line 49) of the ControlParameter for the titles-

ObjectDataSource is set to 1, books by the author with AuthorID 1 (i.e., Harvey Deitel) are displayed when the page first loads. Note that the GridView displays paging links below the data, because the number of rows of data returned by GetDataByAuthorID is greater than the page size. Figure 25.66(b) shows the GridView after clicking the 2 link to view the second page of data. Figure 25.66(c) presents Books.aspx after the user selects a dif- ferent author from the authorsDropDownList. The data fits on one page, so the GridView does not display paging links.

## ASP.NET Ajax
In this section, we introduce how you can use **ASP.NET Ajax** to quickly and easily add Ajax functionality to existing ASP.NET web applications. You can download the latest version of ASP.NET Ajax from www.asp.net/ajax/downloads. Run the.msi installer you downloaded and follow the on-screen instructions to install the **Ajax Extensions package**.

The Ajax Extensions package implements basic Ajax functionality. Microsoft also provides the **ASP.NET Ajax Control Toolkit**, which contains rich, Ajax-enabled GUI controls. There is also a link to the download the latest version of the Ajax Control Toolkit from the ASP.NET Ajax download page listed above. The toolkit does not come with an installer, so you must extract the contents of the toolkit’s ZIP file to your hard drive.

To make using the ASP.NET Ajax Control Toolkit more convenient, you’ll want to add its controls to the **Toolbox** in Visual Web Developer (or in Visual Studio) so you can drag and drop controls onto your Web Forms. To do so, right click the **Toolbox** and choose **Add Tab.** Type Ajax Toolkit in the new tab. Then right click the tab and select **Choose Items**. Navigate to the folder in which you extracted the Ajax Control Toolkit and select AjaxControlToolkit.dll from the SampleWebSite\\Bin folder. A list of available Ajax controls will appear under the **Ajax Toolkit** tab when you are in **Design** mode.

To demonstrate ASP.NET Ajax capabilities we’ll enhance the Validation application from Fig. 25.17. The only modifications to this application will appear in its .aspx file. This application was not initially set up to support Ajax functionality, so we must first modify the web.config file. First, in Visual Web Developer select **File > New Website…** to display the **New Website** dialog. Then, create an empty **ASP.NET Ajax-Enabled Website**. Open the web.config file in this new application and copy its contents. Next, open the Validation application and replace the contents of its web.config file with the contents of the web.config file you just copied. The new web.config file adds the system.web.extensions, httpHandlers and httpModules sections, which specify the set- tings for running scripts that enable Ajax functionality. If you’d like to learn more about the details of these web.config modifications, please visit the site www.asp.net/ajax/doc- umentation/live/configuringASPNETAJAX.aspx.


We’ll now use Ajax-enabled controls to add Ajax features to this application. Figure 25.67 is a modified validation.aspx file that enhances the application by using the ToolkitScriptManager, UpdatePanel and ValidatorCalloutExtender controls.

~~~html
1 <%-- Fig. 25.67: Validation.aspx --%>
2 <%-- Validation application enhanced by ASP.NET Ajax. --%>
3 <%@ Page Language="VB" AutoEventWireup="false"
4 CodeFile="Validation.aspx.vb" Inherits="Validation" %>
5
6
7
8 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
9 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
10
11 <html xmlns="http://www.w3.org/1999/xhtml" >
12 <head runat="server">
13 <title>Demonstrating Validation Controls</title>
14 </head>
15 <body>
16 <form id="form1" runat="server">
17 <div>
18
19
20
21 &nbsp;Please fill out the following form.<br /><em>All fields are
22 required and must contain valid information.</em><br /><br />
23 <table>
24 <tr>
25 <td style="width: 100px" valign="top">
26 Name:</td>
27 <td style="width: 450px" valign="top">
28 <asp:TextBox ID="nameTextBox" runat="server">
29 </asp:TextBox>
30 <br />
31 <asp:RequiredFieldValidator
32 ID="nameInputValidator" runat="server"
33 ControlToValidate="nameTextBox"
34 ErrorMessage="Please enter your name.">
35 </asp:RequiredFieldValidator>
36
37
38 </td>
39 </tr>
40 <tr>
41 <td style="width: 100px" valign="top">E-mail address:</td>
42 <td style="width: 450px" valign="top">
43 <asp:TextBox ID="emailTextBox" runat="server">
44 </asp:TextBox>
45 &nbsp;e.g., user@domain.com<br />
46 <asp:RequiredFieldValidator
47 ID="emailInputValidator" runat="server"
~~~

**Fig. 25.67** | Validation application enhanced by ASP.NET Ajax. (Part 1 of 3.)

~~~html
48 ControlToValidate="emailTextBox"
49 ErrorMessage="Please enter your e-mail address.">
50 </asp:RequiredFieldValidator>
51
52
53 <asp:RegularExpressionValidator
54 ID="emailFormatValidator" runat="server"
55 ControlToValidate="emailTextBox"
56 ErrorMessage=
57 "Please enter an e-mail address in a valid format."
58 ValidationExpression=
59 "\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*">
60 </asp:RegularExpressionValidator>
61
62
63
64 </td>
65 </tr>
66 <tr>
67 <td style="width: 100px; height: 21px" valign="top">
68 Phone number:</td>
69 <td style="width: 450px; height: 21px" valign="top">
70 <asp:TextBox ID="phoneTextBox" runat="server">
71 </asp:TextBox>
72 &nbsp;e.g., (555) 555-1234<br />
73 <asp:RequiredFieldValidator
74 ID="phoneInputValidator" runat="server"
75 ControlToValidate="phoneTextBox"
76 ErrorMessage="Please enter your phone number.">
77 </asp:RequiredFieldValidator>
78
79
80 <asp:RegularExpressionValidator
81 ID="phoneFormatValidator" runat="server"
82 ControlToValidate="phoneTextBox"
83 ErrorMessage=
84 "Please enter a phone number in a valid format."
85 ValidationExpression=
86 "((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}">
87 </asp:RegularExpressionValidator>
88
89
90
91 </td>
92 </tr>
93 </table>
94
95
96
97
98
99
100
~~~

**Fig. 25.67** | Validation application enhanced by ASP.NET Ajax. (Part 2 of 3.)

~~~html
101
102
103 </div>
104 </form>
105 </body>
106 </html>
~~~

**Fig. 25.67** | Validation application enhanced by ASP.NET Ajax. (Part 3 of 3.)


**ScriptManager Control** 
The key control in every ASP.NET Ajax-enabled application is the **ScriptManager**, which manages the client-side scripts that enable asynchronous Ajax functionality. There can be only one ScriptManager per page. To incorporate controls from the Ajax Control Toolkit you should use the **ToolkitScriptManager** that comes with the toolkit contorls, rather than the ScriptManager from the ASP.NET Ajax Extensions. The ToolkitScriptManager bundles all the scripts associated with ASP. NET Ajax Toolkit controls to optimize the ap- plication’s performance. Drag the ToolkitScriptManager from the **Ajax Toolkit** tab in the toolbox to the top of the page—a script manager must appear before any controls that use the scripts it manages. This generates lines 5–6 and lines 18–20. Lines 5–6 associate the AjaxControlToolkit assembly with the tag prefix ajax, allowing us to put Ajax Control Toolkit elements on the page. Lines 18–20 load the ToolkitScriptManager on the page.

**Common Programming Error 25.1** 
>Putting more than one instance of the ScriptManager control on a Web Form causes the appli- cation to throw an InvalidOperationException when the page is initialized.

**Partial Page Updates Using the UpdatePanel Control** 
The **UpdatePanel control** eliminates full-page refreshes by isolating a section of a page for a partial-page update. To implement a partial-page update, drag the UpdatePanel control from the **Ajax Extensions** tab in the **Toolbox** to your form. Then, drag into the UpdatePan- el the control to update and the control that triggers the update. For this example, drag the outputLabel and submitButton elements into the UpdatePanel. The components that are managed by the UpdatePanel are placed in the ContentTemplate element (lines 95–101) of the UpdatePanel (lines 94–102). When the user clicks the **Submit** button, the UpdatePanel intercepts the request and makes an asynchronous request to the server in- stead. Then the response is inserted in the outputLabel element, and the UpdatePanel re- loads the label to display the new text without refreshing the entire page.

**Adding Ajax Functionality to ASP.NET Validation Controls Using Ajax Extenders** 
Several controls in the Ajax Control Toolkit are **extenders**—components that enhance regular ASP.NET controls. Lines 36–37, 51–52, 61–63, 78–79 and 88–90 define **Vali-** **datorCalloutExtender controls** that display error messages in small yellow callouts next to the input fields. Line 37 sets the targetControlID property, which indicates the vali- dator control from which the ValidatorCalloutExtender should obtain the error mes- sage to display. The ValidatorCalloutExtenders display error messages with a nicer look and feel, so we no longer need the validator controls to display these messages on their own. For this reason, line 33 sets the Display property of the first validator to None. The remaining control extenders and validator controls are configured similarly.

**Additional ASP.NET Information** 
The Ajax Control Toolkit contains many other extenders and independent controls. You can check them out using the sample website included with the toolkit. The live version of the sample website can be found at www.asp.net/ajax/control-toolkit/live/. For more information on ASP.NET Ajax, check out our ASP.NET Ajax Resource Center at www.deitel.com/aspdotnetajax.

## Wrap-Up
In this chapter, we introduced web application development using ASP.NET and Visual Web Developer 2005 Express. We began by discussing the simple HTTP transactions that take place when you request and receive a web page through a web browser. You then learned about the three tiers (i.e., the client or top tier, the business logic or middle tier and the information or bottom tier) that comprise most web applications.


Next, we explained the role of ASPX files (i.e., Web Form files) and code-behind files, and the relationship between them. We discussed how ASP.NET compiles and executes web applications so that they can be displayed as XHTML in a web browser. You also learned how to build an ASP.NET web application using Visual Web Developer.

The chapter demonstrated several common ASP.NET web controls used for dis- playing text and images on a Web Form. You learned how to use an AdRotator control to display randomly selected images. We also discussed validation controls, which allow you to ensure that user input on a web page satisfies certain requirements.

We discussed the benefits of maintaining a user’s state information across multiple pages of a website. We then demonstrated how you can include such functionality in a web application using either cookies or session tracking with HttpSessionState objects.

We presented two case studies on building ASP.NET applications that interact with databases. First, we showed how to build a guestbook application that allows users to submit comments about a website. You learned how to save the user input in a SQL Server database and how to display past submissions on the web page.

Finally, we introduced ASP.NET Ajax and the Ajax Control Toolkit. You learned how to add Ajax functionality to an existing application by using the ToolkitScript-

Manager and the UpdatePanel. You also learned how to use validation extenders. The second case study presented a secure web application that requires users to log in

before accessing information from the Books database. You used the **Web Site Administra- tion Tool** to configure the application to use forms authentication and prevent anonymous users from accessing the book information. This case study explained how to use the new ASP.NET 2.0 Login, CreateUserWizard, LoginName and LoginStatus controls to sim- plify user authentication. You also learned to create a uniform look-and-feel for a website using a master page and several content pages. In the next chapter, you will learn about similar web application development techniques with JavaServer Faces, which is imple- mented with the Java programming language.

## Web Resources** 
www.deitel.com/aspdotnet/

The Deitel ASP.NET Resource Center focuses on the vast amount of free ASP.NET content avail- able online, plus some for-sale items. Start your search here for tools, downloads, text and video tu- torials, webcasts, podcasts, wikis, documentation, reference manuals, conferences, FAQs, books, e- books, sample chapters, articles, newsgroups, forums, downloads from CNET’s download.com, jobs and contract opportunities, and more that will help you develop ASP.NET-based applications. Keep track of ASP.NET blogs for the latest news and developments, or sign up for RSS feeds to be notified promptly of each new development. Also, download free open-source ASP.NET projects.
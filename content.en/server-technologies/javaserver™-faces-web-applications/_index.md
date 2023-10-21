---
title: "Javaserver™ Faces Web Applications"
weight: 6
---

# OBJECTIVES 
In this chapter you will learn:

- Web application development using Java Technologies and Netbeans.

- To create JavaServer Pages with JavaServer Faces components.

- To create web applications consisting of multiple pages.

- To validate user input on a web page.

- To maintain state information about a user with session tracking and cookies.

## 26.1 Introduction
In this chapter, we introduce web application development with Java-based technology. Web-based applications create web content for web browser clients. This web content in- cludes Extensible HyperText Markup Language (XHTML), client-side scripting, images and binary data. If you are not familiar with XHTML, you should read Chapter 4 before studying this chapter. [Note: This chapter assumes that you know Java. To learn more about Java, check out Java How to Program, Seventh Edition, or visit our Java Resource Centers at www.deitel.com/ResourceCenters.html.]

This chapter begins with an overview of multitier application architecture and Java’s web technologies for implementing multitier applications. We then present several exam- ples that demonstrate web application development. The first example introduces you to Java web development. In the second example, we build a web application that simply shows the look-and-feel of several web application GUI components. Next, we demon- strate how to use validation components and custom validation methods to ensure that user input is valid before it is submitted for processing on the server. The chapter finishes with two examples of customizing a user’s experience with session tracking.

In Chapter 27, we continue our discussion of Java web application development with more advanced concepts, including the AJAX-enabled components from Sun’s Java Blue- Prints. AJAX helps web-based applications provide the interactivity and responsiveness that users typically expect of desktop applications.

Throughout this chapter and Chapter 27, we use the **Netbeans 5.5.1** IDE, its **Visual Web Pack** and the **Sun Java System Application Server (SJSAS)**. The Visual Web Pack helps you build web applications using Java technologies such as JavaServer Pages and JavaServer Faces. To implement the examples presented in this chapter, you must install all three software products. A bundle of Netbeans 5.5.1 and SJSAS is available at

www.netbeans.info/downloads/index.php?rs=22&p=3

The Visual Web Pack is available at

www.netbeans.org/products/visualweb/

## 26.2 Java Web Technologies
Java web technologies continually evolve to provide developers with higher levels of ab- straction and greater separation of the application’s tiers. This separation makes web ap- plications more maintainable and extensible. It also allows for an effective division of labor. A graphic designer can build the application’s user interface without concern for the underlying page logic, which will be handled by a programmer. Meanwhile, the program- mer is free to focus on the application’s business logic, leaving the details of building an attractive and easy-to-use application to the designer. Netbeans is the latest step in this evolution, allowing you to develop a web application’s GUI in a drag-and-drop design tool, while handling the business logic in separate Java classes.

Java multitier applications are typically implemented using the features of Java Enter- prise Edition (Java EE). The technologies we use to develop web applications in Chapters 26–27 are part of Java EE 5 (java.sun.com/javaee).

### 26.2.1 Servlets 
Servlets are the lowest-level view of web development technologies in Java that we will dis- cuss in this chapter. They use the HTTP request/response model of communication be- tween client and server.

**Servlets** 
extend a server’s functionality by allowing it to generate dynamic content. For instance, servlets can dynamically generate custom XHTML documents, help provide secure access to a website, interact with databases on behalf of a client and maintain unique session information for each client. A web server component called the **servlet container** executes and interacts with servlets. Packages **javax.servlet** and **javax.servlet.http**

provide the classes and interfaces to define servlets. The servlet container receives HTTP requests from a client and directs each request to the appropriate servlet. The servlet pro- cesses the request and returns an appropriate response to the client—usually in the form of an XHTML or XML (Extensible Markup Language) document to display in the browser. XML is a language used to exchange structured data on the web.

Architecturally, all servlets must implement the **Servlet** interface of package javax.servlet, which ensures that each servlet can execute in the framework provided by the servlet container. Interface Servlet declares methods used by the servlet container to manage the servlet’s life cycle. A servlet’s life cycle begins when the servlet container loads it into memory—usually in response to the first request for the servlet. Before the servlet can handle that request, the container invokes the servlet’s init method, which is called only once during a servlet’s life cycle to initialize the servlet. After init completes execu- tion, the servlet is ready to respond to its first request. All requests are handled by a servlet’s


**service method**, which is the key method in defining a servlet’s functionality. The ser-

vice method receives the request, processes it and sends a response to the client. During a servlet’s life cycle, service is called once per request. Each new request is typically han- dled in a separate thread of execution (managed by the servlet container), so each servlet must be thread safe. When the servlet container terminates the servlet (e.g. when the servlet container needs more memory or when it is shut down), the servlet’s destroy

method is called to release any resources held by the servlet.

### 26.2.2 JavaServer Pages 
**JavaServer Pages** (**JSP**) technology is an extension of servlet technology. Each JSP is trans- lated by the JSP container into a servlet. Unlike servlets, JSPs help you separate presenta- tion from content. JavaServer Pages enable web application programmers to create dynamic content by reusing predefined components and by interacting with components using server-side scripting. JSP programmers can use special software components called JavaBeans and custom tag libraries that encapsulate complex, dynamic functionality. A **JavaBean** is a reusable component that follows certain conventions for class design. For example, JavaBeans classes that allow reading and writing of instance variables must pro- vide appropriate get and set methods. The complete set of class design conventions is discussed in the JavaBeans specification (java.sun.com/products/javabeans/glasgow/ index.html).

**Custom Tag Libraries** 
**Custom tag libraries** are a powerful feature of JSP that allows Java developers to hide code for database access and other complex operations in **custom tags**. To use such capabilities, you simply add the custom tags to the page. This simplicity enables web-page designers who are not familiar with Java to enhance web pages with powerful dynamic content and dynamic processing capabilities. The JSP classes and interfaces are located in the packages javax.servlet.jsp and javax.servlet.jsp.tagext.

**JSP Components** 
There are four key components to JSPs—directives, actions, scripting elements and tag li- braries. **Directives** are messages to the **JSP container**—the web server component that ex- ecutes JSPs. Directives enable you to specify page settings, to include content from other resources and to specify custom tag libraries for use in JSPs. **Actions** encapsulate function- ality in predefined tags that programmers can embed in JSPs. Actions often are performed based on the information sent to the server as part of a particular client request. They also can create Java objects for use in JSPs. **Scripting elements** enable you to insert Java code that interacts with components in a JSP (and possibly other web application components) to perform request processing. **Tag libraries** are part of the **tag extension mechanism** that enables programmers to create custom tags. Such tags enable web-page designers to ma- nipulate JSP content without prior Java knowledge. The **JavaServer Pages Standard Tag Library** (**JSTL**) provides the functionality for many common web application tasks, such as iterating over a collection of objects and executing SQL statements.

**Static Content** 
JSPs can contain other static content. For example, JSPs normally include XHTML or XML markup. Such markup is known as **fixed-template data** or **fixed-template text**. Any literal text or XHTML markup in a JSP is translated to a String literal in the servlet rep- resentation of the JSP.

**Processing a JSP Request** 
When a JSP-enabled server receives the first request for a JSP, the JSP container translates the JSP into a servlet that handles the current request and future requests to the JSP. JSPs thus rely on the same request/response mechanism as servlets to process requests from and send responses to clients.

**Performance Tip 26.1** 
>Some JSP containers translate JSPs into servlets at the JSP’s deployment time (i.e., when the ap- plication is placed on a web server). This eliminates the translation overhead for the first client that requests each JSP, as the JSP will be translated before it is ever requested by a client.

### 26.2.3 JavaServer Faces 
**JavaServer Faces (JSF)** is a web application framework (similar to ASP.NET) that simpli- fies the design of an application’s user interface and further separates a web application’s presentation from its business logic. A **framework** simplifies application development by providing libraries and sometimes software tools to help you organize and build your ap- plications. Though the JSF framework can use many technologies to define the pages in web applications, this chapter focuses on JSF applications that use JavaServer Pages. JSF provides a set of user interface components, or **JSF components**, that simplify web-page design. These components are similar to the Swing components used to build GUI appli- cations. JSF provides two JSP custom tag libraries for adding these components to a JSP page. JSF also includes APIs for handling component events (such as processing compo- nent state changes and validating user input), navigating between web application pages and more. You design the look-and-feel of a page with JSF by adding tags to a JSP file and manipulating their attributes. You define the page’s behavior separately in a related Java source-code file.

Though the standard JSF components are sufficient for most basic web applications, you can also write custom component libraries. Additional component libraries are avail- able through the **Java BluePrints** project—which shows best practices for developing Java applications. Many other vendors provide JSF component libraries. For example, Oracle provides almost 100 components in its ADF Faces library. In the next chapter, we discuss one such component library, the BluePrints AJAX components library, which can be found at blueprints.dev.java.net/ajaxcomponents.html.

### 26.2.4 Web Technologies in Netbeans 
Netbeans web applications consist of one or more JSP web pages built in the JavaServer Faces framework. These JSP files have the filename extension **.jsp** and contain the web pages’ GUI elements. The JSPs can also contain JavaScript to add functionality to the page. JSPs can be customized in Netbeans by adding JSF components, including labels, text fields, images, buttons and other GUI components. The IDE allows you to design pages visually by dragging and dropping these components onto a page; you can also cus- tomize a web page by editing the .jsp file manually.

Every JSP file created in Netbeans represents a web page and has a corresponding JavaBean class called the **page bean**. A JavaBean class must have a default (or no-argument) constructor, and get and set methods for all of the bean’s properties (i.e., instance vari- ables). The page bean defines properties for each of the page’s elements. The page bean also contains event handlers and page life-cycle methods for managing tasks such as page initialization and rendering, and other supporting code for the web application.

Every Netbeans web application has three other JavaBeans. The **RequestBean** object is maintained in **request scope**—this object exists only for an HTTP request’s duration. A **SessionBean** object has **session scope**—the object exists throughout a user’s browsing ses- sion or until the session times out. There is a unique SessionBean object for each user. Finally, the **ApplicationBean** object has **application scope**—this object is shared by all instances of an application and exists as long as the application remains deployed on a web server. This object is used for application-wide data storage or processing; only one instance exists for the application, regardless of the number of open sessions.

## 26.3 Creating and Running a Simple Application in Netbeans
Our first example displays the web server’s time of day in a browser window. When run, this program displays the text "Current Time on the Web Server", followed by the web server’s time. The application contains a single web page and, as mentioned previously, consists of two related files—a JSP file (Fig. 26.1) and a supporting page bean file (Fig. 26.3). The application also has the three scoped data beans for request, session, and application scopes. Since this application does not store data, these beans are not used in this example. We first discuss the markup in the JSP file, the code in the page bean file and the application output, then we provide step-by-step instructions for creating the pro- gram. [Note: The markup in Fig. 26.1 and other JSP file listings in this chapter is the same as the markup that appears in Netbeans, but we have reformatted these listings for presen- tation purposes to make the code more readable.]

~~~xml
1 <?xml version = "1.0" encoding = "UTF-8"?>
2
3 <!-- Fig. 26.1: Time.jsp -->
4 <!-- JSP file generated by Netbeans that displays -->
5 <!-- the current time on the web server -->
6
7
8
9
10
11 <jsp:directive.page contentType = "text/html;charset=UTF-8"
12 pageEncoding = "UTF-8" />
13 <f:view>
14 <webuijsf:page binding = "#{Time.page1}" id = "page1">
15 <webuijsf:html binding = "#{Time.html1}" id = "html1">
~~~

**Fig. 26.1** | JSP file generated by Netbeans that displays the current time on the web server. (Part 1 of 2.)

~~~xml
16
17
18
19
20
21
22 <webuijsf:body binding = "#{Time.body1}" id = "body1"
23 style = "-rave-layout: grid">
24 <webuijsf:form binding = "#{Time.form1}" id = "form1">
25
26
27
28
29 <webuijsf:staticText binding = "#{Time.clockText}"
30 id = "clockText" style = "background-color: black;
31 color: yellow; font-size: 18px; left: 24px;
32 top: 48px; position: absolute" />
33 </webuijsf:form>
34 </webuijsf:body>
35 </webuijsf:html>
36 </webuijsf:page>
37 </f:view>
38 </jsp:root>
~~~

**Fig. 26.1** | JSP file generated by Netbeans that displays the current time on the web server. (Part 2 of 2.)



Netbeans generates all the markup shown in Fig. 26.1 when you set the web page’s title, drag two **Static Text** components onto the page and set the properties of the **Static Text** components. **Static Text** components display text that cannot be edited by the user. We show these steps shortly.

### 26.3.1 Examining a JSP File
The JSP files used in this and the following examples are generated almost entirely by Net- beans, which provides a Visual Editor that allows you to build a page’s GUI by dragging and dropping components onto a design area. The IDE generates a JSP file in response to your interactions. Line 1 of Fig. 26.1 is the XML declaration, indicating the fact that the JSP is expressed in XML syntax and the version of XML that is used. Lines 3–5 are com- ments that we added to the JSP to indicate its figure number, filename and purpose.

Line 6 begins the JSP’s root element. All JSPs must have this **jsp:root** element, which has a version attribute to indicate the JSP version being used (line 6) and one or more xmlns attributes (lines 7–10). Each **xmlns attribute** specifies a prefix and a URL for a tag library, allowing the page to use tags from that library. For example, line 9 allows the page to use the standard JSP elements. To use these elements, each element’s tag must be preceded by the jsp prefix. All JSPs generated by Netbeans include the tag libraries spec- ified in lines 7–10 (the JSF core components library, the JSF HTML components library, the JSP standard components library and the JSF user interface components library).

Lines 11–12 are the **jsp:directive.page** element. Its contentType attribute speci- fies the MIME type (text/html) and the character set (UTF-8) the page uses. The page-Encoding attribute specifies the character encoding used by the page source. These attributes help the client (typically a web browser) determine how to render the content.

All pages containing JSF components are represented in a **component tree** (Fig. 26.2) with the root JSF element **f:view**, which is of type **UIViewRoot**. This component tree structure is represented in a JSP by enclosing all JSF component tags inside the f:view

element (lines 13–37). Lines 14–21 begin the JSP’s definition with the **webuijsf:page**, **webuijsf:html** and

**webuijsf::head** tags, all from the webuijsf (JSF user interface components) tag library. These and many other webuijsf page elements have a binding attribute. For example, the webuijsf:head element (line 16) has the attribute binding = "#{Time.head1}." This attribute uses **JSF Expression Language** notation (i.e., #{Time.head1}) to reference the head1 property in the Time class that represents the page bean (you’ll see this class in Fig. 26.3). You can bind an attribute of a JSP element to a property in any of the web appli- cation’s JavaBeans. For instance, the text attribute of a **webuijsf:label** component can be bound to a String property in the application’s SessionBean (shown in Section 26.5.2).

The webuijsf:head element (lines 16–21) has a title attribute that specifies the page’s title. This element also contains a **webuijsf:link** element (lines 18–19) that spec- ifies the CSS stylesheet used by the page, and a **webuijsf:meta** element (line 20) that spec- ifies the page’s refresh rate. The **webuijsf:body** element (lines 22–34) contains a **webuijsf:form** element (lines 24–33), which contains two **webuijsf:staticText** com- ponents (lines 25–28 and 29–32) that display the page’s text. The timeHeader component (lines 25–28) has a text attribute (line 28) that specifies the text to display (i.e., "Current time on the web server"). The clockText component (lines 29–32) does not specify a text attribute because this component’s text will be set programmatically.


**Fig. 26.2** | Sample JSF component tree.

For the markup in this file to be displayed in a browser, all the JSP’s elements are auto- matically mapped to XHTML elements that the browser recognizes. The same web com- ponent can map to different XHTML elements, depending on the client browser and the component’s property settings. In this example, the webuijsf:staticText components (lines 25–28, 29–32) map to XHTML **span** elements. A span element contains text that is displayed on a web page and is typically used to control the formatting of the text. The style attributes of a JSP’s webuijsf:staticText element will be represented as part of the corresponding span element’s style attribute when the browser renders the page. We show momentarily the XHTML document that results when Time.jsp is requested by a browser.

### 26.3.2 Examining a Page Bean File 
Figure 26.3 presents the page bean file. Line 3 indicates that this class belongs to package webtime. This line is autogenerated and specifies the project’s name as the package name. Line 18 begins class Time’s declaration and indicates that it inherits from class **Abstract- PageBean** (from package **com.sun.rave.web.ui.appbase**). All page bean classes that sup- port JSP files with JSF components must inherit from the abstract class AbstractPageBean, which provides page life-cycle methods. Note that the IDE makes the class name match the page name. Package **com.sun.webui.jsf.component** includes classes for many of the basic JSF components (see the import statements at lines 6–13).

~~~java
1 // Fig. 26.3: Time.java
2 // Page bean file that sets clockText to the time on the Web server.
3 package webtime;
4
5 import com.sun.rave.web.ui.appbase.AbstractPageBean;
6 import com.sun.webui.jsf.component.Body;
7 import com.sun.webui.jsf.component.Form;
8 import com.sun.webui.jsf.component.Head;
9 import com.sun.webui.jsf.component.Html;
10 import com.sun.webui.jsf.component.Link;
11 import com.sun.webui.jsf.component.Meta;
12 import com.sun.webui.jsf.component.Page;
13 import com.sun.webui.jsf.component.StaticText;
14 import java.text.DateFormat;
15 import java.util.Date;
16 import javax.faces.FacesException;
17
18 public class Time extends AbstractPageBean
19 {
20 private int placeholder;
21
22 // auto-generated component initialization method.
23 private void init() throws Exception
24 {
25 } // end method init
26
27 private Page page1 = new Page();

~~~

**Fig. 26.3** | Page bean file that sets clockText to the time on the web server. (Part 1 of 5.)

~~~java
29 public Page getPage1()
30 {
31 return page1;
32 } // end method getPage1
33
34 public void setPage1( Page p )
35 {
36 this.page1 = p;
37 } // end method setPage1
38
39 private Html html1 = new Html();
40
41 public Html getHtml1()
42 {
43 return html1;
44 } // end method getHtml1
45
46 public void setHtml1( Html h )
47 {
48 this.html1 = h;
49 } // end method setHtml1
50
51 private Head head1 = new Head();
52
53 public Head getHead1()
54 {
55 return head1;
56 } // end method getHead1
57
58 public void setHead1( Head h )
59 {
60 this.head1 = h;
61 } // end method setHead1
62
63 private Link link1 = new Link();
64
65 public Link getLink1()
66 {
67 return link1;
68 } // end method getLink1
69
70 public void setLink1( Link l )
71 {
72 this.link1 = l;
73 } // end method setLink1
74
75 private Body body1 = new Body();
76
77 public Body getBody1()
78 {
79 return body1;
80 } // end method getBody1
81
~~~

**Fig. 26.3** | Page bean file that sets clockText to the time on the web server. (Part 2 of 5.)

~~~java
82 public void setBody1( Body b )
83 {
84 this.body1 = b;
85 } // end method setBody1
86
87 private Form form1 = new Form();
88
89 public Form getForm1()
90 {
91 return form1;
92 } // end method getForm1
93
94 public void setForm1( Form f )
95 {
96 this.form1 = f;
97 } // end method setForm1
98
99 private StaticText timeHeader = new StaticText();
100
101 public StaticText getTimeHeader()
102 {
103 return timeHeader;
104 } // end method getTimeHeader
105
106 public void setTimeHeader( StaticText st )
107 {
108 this.timeHeader = st;
109 } // end method setTimeHeader
110
111
112
113 public StaticText getClockText()
114 {
115 return clockText;
116 } // end method getClockText
117
118
119 {
120 this.clockText = st;
121 } // end method setClockText
122
123 private Meta meta1 = new Meta();
124
125 public Meta getMeta1()
126 {
127 return meta1;
128 } // end method getMeta1
129
130 public void setMeta1( Meta m )
131 {
132 this.meta1 = m;
133 } // end method setMeta1
134
~~~

**Fig. 26.3** | Page bean file that sets clockText to the time on the web server. (Part 3 of 5.)

~~~java
135 public Time()
136 {
137 } // end Time constructor
138
139 // initializes page content
140 public void init()
141 {
142 super.init();
143
144 try
145 {
146 init();
147 } // end try
148 catch ( Exception e )
149 {
150 log( "Time Initialization Failure", e );
151 throw e instanceof FacesException ? ( FacesException ) e :
152 new FacesException( e );
153 } // end catch
154 } // end method init
155
156 // method called when postback occurs
157 public void preprocess()
158 {
159 } // end method preprocess
160
161 // method called before the page is rendered
162 public void prerender()
163 {
164
165
166 } // end method prerender
167
168 // method called after rendering completes, if init was called
169 public void destroy()
170 {
171 } // end method destroy
172
173 // return a reference to the scoped data bean
174 protected SessionBean1 getSessionBean1()
175 {
176 return ( SessionBean1 ) getBean( "SessionBean1" );
177 } // end method getSessionBean1
178
179 // return a reference to the scoped data bean
180 protected ApplicationBean1 getApplicationBean1()
181 {
182 return ( ApplicationBean1 ) getBean( "ApplicationBean1" );
183 } // end method getApplicationBean1
184
185 // return a reference to the scoped data bean
186 protected RequestBean1 getRequestBean1()
~~~

**Fig. 26.3** | Page bean file that sets clockText to the time on the web server. (Part 4 of 5.)

~~~java
188 return ( RequestBean1 ) getBean( "RequestBean1" );
189 } // end method getRequestBean1
190 } // end class Time
~~~

**Fig. 26.3** | Page bean file that sets clockText to the time on the web server. (Part 5 of 5.)


This page bean file provides get and set methods for every element of the JSP file of Fig. 26.1. These methods are generated automatically by the IDE. We included the com- plete page bean file in this first example, but in future examples these properties and their get and set methods will be omitted to save space. Lines 99–109 and 111–121 of the page bean file define the two **Static Text** components that we dropped onto the page and their get and set methods. These components are objects of class StaticText in package com.sun.webui.jsf.component.

The only logic required in this page is to set the clockText component’s text to read the current time on the server. We do this in the prerender method (lines 162–166). The meaning of this and other page bean methods will be discussed shortly. Lines 164–165 fetch and format the time on the server and set the value of clockText to that time.

### 26.3.3 Event-Processing Life Cycle 
Netbeans’s application model places several methods in the page bean that tie into the JSF **event-processing life cycle**. These methods represent four major stages—initialization, preprocessing, prerendering and destruction. Each corresponds to a method in the page bean class—init, preprocess, prerender and destroy, respectively. Netbeans automat- ically creates these methods, but you can customize them to handle life-cycle processing tasks, such as rendering an element on a page only if a user clicks a button.

The **init method** (Fig. 26.3, lines 140–154) is called by the JSP container the first time the page is requested and on postbacks. A **postback** occurs when form data is sub- mitted, and the page and its contents are sent to the server to be processed. Method init

invokes its superclass version (line 142) then tries to call the method init (declared in lines 23–25). The init method is also automatically generated and handles component initial- ization tasks (if there are any), such as setting the options for a group of radio buttons.

The **preprocess method** (lines 157–159) is called after init, but only if the page is processing a postback. The **prerender method** (lines 162–166) is called just before a page is rendered (i.e., displayed) by the browser. This method should be used to set component properties; properties that are set sooner (such as in method init) may be overwritten before the page is actually rendered by the browser. For this reason, we set the value of clockText in the prerender method.

Finally, the **destroy method** (lines 169–171) is called after the page has been ren- dered, but only if the init method was called. This method handles tasks such as freeing resources used to render the page.

### 26.3.4 Relationship Between the JSP and Page Bean Files 
The page bean has a property for every element that appears in the JSP file of Fig. 26.1, from the html element to the two Static Text components. Recall that the elements in the JSP file were explicitly bound to these properties by each element’s binding attribute using a JSF Expression Language statement. Because this is a JavaBean class, get and set methods for each of these properties are also included (lines 27–133). This code is auto- matically generated by the IDE for every web application project.

### 26.3.5 Examining the XHTML Generated by a Java Web Application
Figure 26.4 shows the XHTML generated when Time.jsp (Fig. 26.1) is requested by a cli- ent web browser. To view this XHTML, select **View > Source** in Internet Explorer or **View > Page Source** in Firefox. [Note: We reformatted the XHTML to conform to our coding conventions.]

~~~jsp
1 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
2 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
3 <html xmlns = "http://www.w3.org/1999/xhtml"
4 xmlns:wairole = "http://www.w3.org/2005/01/wai-rdf/GUIRoleTaxonomy#"
5 xmlns:waistate = "http://www.w3.org/2005/07/aaa">
6 <head>
7 <meta content = "no-cache" http-equiv = "Pragma" />
8 <meta content = "no-cache" http-equiv = "Cache-Control" />
9 <meta content = "no-store" http-equiv = "Cache-Control" />
10 <meta content = "max-age=0" http-equiv = "Cache-Control" />
11 <meta content = "1" http-equiv = "Expires" />
12 <title>Web Time: A Simple Example</title>
13 <link rel = "stylesheet" type = "text/css" href = "/WebTime/theme/
14 com/sun/webui/jsf/suntheme/css/css_master.css" />
15 <link rel = "stylesheet" type = "text/css" href = "/WebTime/theme/
16 com/sun/webui/jsf/suntheme/css/ie7.css" />
17 <script type = "text/javascript">
18 djConfig = {
19 "isDebug": false,
20 "parseWidgets": false,
21 "debugAtAllCosts": false
22 };
23 </script>
24 <script type = "text/javascript"
25 src = "/WebTime/theme/META-INF/dojo/dojo.js"></script>
26 <script type = "text/javascript"
27 src = "/WebTime/theme/META-INF/json/json.js"></script>
28 <script type = "text/javascript"
29 src = "/WebTime/theme/META-INF/prototype/prototype.js"></script>
30 <script type = "text/javascript"
31 src = "/WebTime/theme/META-INF/com_sun_faces_ajax.js"></script>
~~~

**Fig. 26.4** | XHTML response generated when the browser requests Time.jsp. (Part 1 of 2.)

~~~jsp
32 <script type = "text/javascript">
33 dojo.hostenv.setModulePrefix( "webui.suntheme",
34 "/WebTime/theme/com/sun/webui/jsf/suntheme/javascript" );
35 dojo.require( 'webui.suntheme.*' );
36 </script>
37 <link id = "link1" rel = "stylesheet" type = "text/css"
38 href = "/WebTime/resources/stylesheet.css" />
39 <meta id = "j_id_id7" http-equiv = "refresh" content = "60" />
40 </head>
41 <body id = "body1" style = "-rave-layout:grid" onload="" onunload="">
42 <form id = "form1" class = "form" method = "post"
43 action = "/WebTime/faces/Time.jsp"
44 enctype = "application/x-www-form-urlencoded">
45
46
47
48
49
50
51 <input id = "form1_hidden" name = "form1_hidden"
52 value = "form1_hidden" type = "hidden" />
53 <input type = "hidden" name = "javax.faces.ViewState"
54 id = "javax.faces.ViewState" value = "j_id173:j_id174" />
55 </form>
56 <script type = "text/javascript">
57 webui.suntheme.common.body = new webui.suntheme.body(
58 '/Time.jsp', '/WebTime/faces/Time.jsp', null, null,
59 'com_sun_webui_util_FocusManager_focusElementId');</script>
60 </body>
61 </html>
~~~

**Fig. 26.4** | XHTML response generated when the browser requests Time.jsp. (Part 2 of 2.)


The XHTML document in Fig. 26.4 is similar in structure to the JSP file of Fig. 26.1. Lines 1–2 are the document type declaration, which declares this document to be an XHTML

1.0 Transitional document. The XHTML meta tags in lines 7–11 are equivalent to HTTP headers and are used to control browser behavior.

Lines 41–60 define the body of the document. Lines 42–55 define an XHTML form. In this particular program, the user does not submit data to the web server for processing. We demonstrate how to submit data to the server in later examples. Attribute method of the form element (line 42) specifies the method by which the web browser submits the form to the server. By default, JSPs use the post method. The form’s action attribute (line 43) identifies the resource that will be requested when this form is submitted—in this case, /WebTime/faces/Time.jsp.

Note that the two **Static Text** components (i.e., timeHeader and clockText) are rep- resented by two span elements in the XHTML document (lines 45–47, 48–50) as previ- ously discussed. The formatting options that were specified as properties of timeHeader and clockText, such as the font size and text color in the components, are now specified in each span element’s style attribute.

### 26.3.6 Building a Web Application in Netbeans 
Now that we have presented the JSP file, the page bean file and the resulting XHTML web page sent to the web browser, we discuss the steps to create this application. To build the WebTime application, perform the following steps in Netbeans:

**Step 1: Creating the Web Application Project** 
Select **File > New Project...** to display the **New Project** dialog. In this dialog, select **Web** in the **Categories** pane, **Visual Web Application** in the **Projects** pane and click **Next**. Change the project name to WebTime. In the **Project Location** field, specify where you’d like to store the project. These settings will create a WebTime directory to store the project’s files in the parent directory you specified. Keep the other default settings and click **Finish** to create the web application project.

**Step 2: Examining the Visual Editor Window of the New Project** 
The next several figures describe important features of the IDE, beginning with the **Visual Editor** window (Fig. 26.5). Netbeans creates a single web page named Page1 when a new project is created. This page is open by default in the Visual Editor in **Design mode** when the project first loads. As you drag and drop new components onto the page, **Design** mode allows you to see how your page will be rendered in the browser. The JSP file for this page, named Page1.jsp, can be viewed by clicking the **JSP** button at the top of the visual editor or by right clicking anywhere in the Visual Editor and selecting **Edit JSP Source**. As men- tioned previously, each web page is supported by a page bean file. Netbeans creates a file named Page1.java when a new project is created. To open this file, click the **Java** button at the top of the Visual Editor or right click anywhere in the Visual Editor and select **Edit Java Source**.

The **Preview in Browser** button at the top of the Visual Editor window allows you to view your pages in a browser without having to build and run the application. The **Refresh** button redraws the page in the Visual Editor. The **Show Virtual Forms** button allows you to see which form elements are participating in virtual forms (we discuss this concept in Chapter 27). The **Target Browser Size** drop-down list lets you specify the optimal browser

**Fig. 26.5** | Visual Editor window in **Design** mode.

resolution for viewing the page and lets you see what the page will look like in different screen resolutions.

**Step 3: Examining the Palette in Netbeans** 
Figure 26.6 shows the **Palette** displayed in the IDE when the project loads. Part (a) dis- plays the beginning of the **Basic** list of web components, and part (b) displays the remain- ing **Basic** components, as well as the list of **Layout** components. We discuss specific components in Fig. 26.6 as they are used throughout the chapter.

**Fig. 26.6** | **Palette** in Netbeans.

**Step 4: Examining the Projects Window** 
Figure 26.7 displays the **Projects** window, which appears in the upper-left corner of the IDE. This window displays the hierarchy of all files included in the project. The JSP files for each page are listed under the **Web Pages** node. This node also includes the **resources** folder, which contains the CSS stylesheet for the project and any other files the pages may need to display properly, such as image files. All of the Java source code, including the page bean file for each web page and the application, session and request scope beans, can be found under the **Source Packages** node. Another useful file displayed in the project win- dow is the **Page Navigation** file, which defines rules for navigating the project’s pages based on the outcome of some user-initiated event, such as clicking a button or a link. The **Page Navigation** file can also be accessed by right clicking in the Visual Editor while in **Design** mode and selecting **Page Navigation**.

**Step 5: Examining the JSP and Java Files in the IDE** 
Figure 26.8 displays Page1.jsp—the JSP file generated by Netbeans for Page1. [Note: We reformatted the code to match our coding conventions.] Click the **JSP** button at the top

**Fig. 26.7** | **Projects** window for the WebTime project.

**Fig. 26.8** | JSP file generated for Page1 by Netbeans.


of the Visual Editor to open the JSP file. When it is first created, this file contains some tags for setting up the page, including linking to the page’s style sheet and defining the necessary JSF libraries. Otherwise, the JSP file’s tags are empty, as no components have been added to the page yet.

Figure 26.9 displays part of Page1.java—the page bean file generated by Netbeans for Page1. Click the **Java** button at the top of the Visual Editor to open the page bean file.


This file contains a Java class with the same name as the page (i.e., Page1), which extends the class AbstractPageBean. As previously mentioned, AbstractPageBean has several methods that manage the page’s life cycle. Four of these methods—init, preprocess, prerender and destroy—are overridden by Page1.java. Other than method init, these methods are initially empty. They serve as placeholders for you to customize the behavior of your web application. The page bean file also includes get and set methods for all of the page’s elements—page, html, head, body and link to start. You can view these get and set methods by clicking the plus (**+**) sign on the line that says **Managed Component Definition**.

**Step 6: Renaming the JSP and JSF Files** 
Typically, you’ll want to rename the JSP and Java files in your project, so that their names are relevant to your application. Right click the Page1.jsp file in the **Projects Window** and select **Rename…** to display the **Rename Class Page1** dialog. Enter the new filename Time. If **Preview All Changes** is checked, the **Refactoring Window** will appear at the bottom of the IDE when you click **Next >**. **Refactoring** is the process of modifying source code to im- prove its readability and reusability without changing its behavior—for example, by re- naming methods or variables, or breaking long methods into shorter ones. Netbeans has built-in refactoring tools that automate some refactoring tasks. Using these tools to re- name the project files updates the name of both the JSP file and the page bean file. The refactoring tool also changes the class name in the page bean file and all of the attribute bindings in the JSP file to reflect the new class name. Note that none of these changes will be made until you click **Do Refactoring** in the **Refactoring Window**. If you do not preview the changes, refactoring occurs when you click **Next >** in the **Rename Class Page1** dialog.

**Fig. 26.9** | Page bean file for Page1.jsp generated by Netbeans.


**Step 7: Changing the Title of the Page** 
Before designing the content of the web page, we give it the title "Web Time: A Simple Ex- ample". By default, the page does not have a title when it is generated by the IDE. To add a title, open the JSP file in **Design** mode. In the **Properties** window, enter the new title next to the **Title** property and press Enter. View the JSP to see that the attribute title = "Web

Time: A Simple Example" was automatically added to the webuijsf:head tag.

**Step 8: Designing the Page** Designing a web page is simple in Netbeans. To add components to the page, you can drag and drop them from the **Palette** onto the page in **Design** mode. Like the web page itself, each component is an object that has properties, methods and events. You can set these properties and events visually using the **Properties** window or programmatically in the page bean file. Get and set methods are automatically added to the page bean file for each component you add to the page.

The IDE generates the JSP tags for the components you drag and drop using a grid layout, as specified in the webuijsf:body tag. The components are rendered using **absolute positioning**—they appear exactly where they are dropped on the page. As you add compo- nents, the style attribute in each component’s JSP element will include the number of pixels from the top and left margins of the page at which the component is positioned.

This example uses two **Static Text** components. To add the first one to the page, drag and drop it from the **Palette**’s **Basic** components list to the page in **Design** mode. Edit the component’s text by typing "Current time on the web server:" directly into the compo- nent. The text can also be edited by changing the component’s text property in the **Prop- erties** window. Netbeans is a WYSIWYG (What You See Is What You Get) editor— whenever you make a change to a web page in **Design** mode, the IDE creates the markup (visible in **JSP** mode) necessary to achieve the desired visual effects seen in **Design** mode. After adding the text to the web page, switch to **JSP** mode. You should see that the IDE added a webuijsf:staticText element to the page body, which is bound to the object staticText1, in the page bean file and whose text attribute matches the text you just entered. Back in **Design** mode, click the **Static Text** component to select it. In the **Proper- ties** window, click the ellipsis button next to the style property to open a dialog box to edit the text’s style. Select 18 px for the font size and click **OK**. Again in the **Properties** window, change the id property to timeHeader. Setting the id property also changes the name of the component’s corresponding property in the page bean and updates its binding attribute in the JSP accordingly. Notice that font-size: 18 px has been added to the style attribute and the id attribute has been changed to timeHeader in the com- ponent’s tag in the JSP file. The IDE should now appear as in Fig. 26.10.

Drop a second **Static Text** component onto the page and set its id to clockText. Edit its style property so that the font size is 18 px, the text color is yellow, and the back- ground color is black. Do not edit the component’s text, as this will be set programmat- ically in the page bean file. The component will display with the text **Static Text** in the IDE, but will not display any text at runtime unless the text is set programmatically. Figure 26.11 shows the IDE after the second component is added.

**Step 9: Adding Page Logic** After designing the user interface, you can modify the page bean file to set the text of the clockText element. In this example, we add a statement to method prerender (lines 170–

**Fig. 26.10** | Time.jsp after inserting the first **Static Text** component.

**Fig. 26.11** | Time.jsp after adding the second StaticText component.

174 of Fig. 26.3). Recall that we use method prerender to ensure that clockText will be updated each time the page is refreshed. Lines 164–165 of Fig. 26.3 programmatically set the text of clockText to the current time on the server. For this statement to work, you’ll also need the two imports shown in lines 14–15 of Fig. 26.3.

We would like this page to refresh automatically to display an up-to-date time. To accomplish this, add <webuijsf:meta content = "60" httpEquiv = "refresh" /> to the JSP file, before the end of the webuijsf:head tag. This tag tells the browser to reload the page automatically every 60 seconds. You can also add this tag by dragging a **Meta** com- ponent from the **Advanced** section of the **Palette** to your page, then setting the compo- nent’s content attribute to 60 and its httpEquiv attribute to refresh. If you do this, the **Meta** component will show up in the **Outline** window.

**Step 10: Examining the Outline Window** 
Figure 26.12 displays the **Outline window** in Netbeans. The **Time** node representing the page bean file is expanded and shows the contents of the component tree. The request, session and application scope beans are collapsed by default, as we have not added any properties to these beans in this example. Clicking an item in the page’s component tree selects the item in the Visual Editor.

**Fig. 26.12** | **Outline** window in Netbeans.

**Step 11: Running the Application** 
After creating the web page, you can view it several ways. First, you can select **Build > Build Main Project**, and after the build completes, select **Run > Run Main Project**, to run the appli- cation in a browser window. You can run a project that has already been built by pressing the **Run Main Project** icon ( ) in the toolbar at the top of the IDE. Note that if changes are made to a project, the project must be rebuilt before they will be reflected when the ap- plication is viewed in a browser. Because this application was built on the local file system, the URL displayed in the address bar of the browser when the application is run will be http://localhost:8080/WebTime/ (Fig. 26.3), where 8080 is the port number on which the test server—**Sun Java System Application Server (SJSAS)**—runs by default. [Note: The port number will depend on the server to which you deploy your web application.]

Alternatively, you can press F5 to build the application, then run it in debug mode— the Netbeans built-in debugger can help you troubleshoot applications. If you type F6, the program executes without debugging enabled.

**Error-Prevention Tip 26.1** 
>If you have trouble building your project due to errors in the Netbeans-generated XML files used for building, try cleaning the project and building again. You can do this by selecting **Build > Clean and Build Main Project** or by pressing Shift + F11**.

Finally, you can run your built application by opening a browser window and typing the web page’s URL in the **Address** field. Since your application resides on the local file system, you must first start the Sun Java System Application Server. If you have previously run the application using one of the methods above, the server will already be started. Otherwise, you can start the server from the IDE by opening the **Runtime** tab (located in the same panel as the **Projects**), expanding the **Servers** node, right clicking **Sun Java System Application Server 9** and selecting **Start**. Then you can type the URL (including the port number for the application server, 8080) in the browser to execute the application. For this example it is not necessary to type the entire URL, http://localhost:8080/

WebTime/faces/Time.jsp. The path to the file Time.jsp (i.e., faces/Time.jsp) can be omitted, because this file was set by default as the project’s start page. For projects with multiple pages, you can change the start page by right clicking the desired page in the **Projects** window and selecting **Set As Start Page**. The start page is indicated by a green arrow next to the page’s name in the **Projects** window.

## 26.4 JSF Components 
This section introduces some of the JSF components featured in the **Palette** (Fig. 26.6). Figure 26.13 summarizes some of the JSF components used in the chapter examples.

**Fig. 26.13** | Commonly used JSF components.

### 26.4.1 Text and Graphics Components 
Figure 26.14 displays a simple form for gathering user input. This example uses all the components listed in Fig. 26.13, except Label, which you will see in later examples. All the code in Fig. 26.14 was generated by Netbeans in response to actions performed in **De- sign** mode. This example does not perform any tasks when the user clicks **Register**. We ask you to add functionality to this example as an exercise. In successive examples, we demon- strate how to add functionality to many of these JSF components.

Before discussing the JSF components used in this JSP file, we explain the XHTML that creates the layout in Fig. 26.14. As discussed previously, Netbeans uses absolute posi- tioning, so components are rendered wherever they were dropped in the Visual Editor. In this example, in addition to absolute positioning, we use a **Grid Panel** component (lines 37–61) from the **Palette**’s **Layout** component group. The h: prefix indicates that it can be found in the JSF HTML tag library. This component, an object of class HtmlPanelGrid in package javax.faces.component.html, controls the positioning of the components it contains. The **Grid Panel** component allows the designer to specify the number of columns the grid should contain. Components may then be dropped anywhere inside the panel, and they will automatically be repositioned into evenly spaced columns in the order in which they are dropped. When the number of components exceeds the number of col- umns, the panel moves the additional components to a new row. In this way, the **Grid Panel** behaves like an XHTML table, and is in fact rendered to the browser as an XHTML table. In this example, we use the **Grid Panel** to control the positions of the **Image** and **Text Field** components in the user information section of the page.

~~~jsp
1 <?xml version = "1.0" encoding = "UTF-8" ?>
2
3 <!-- Fig. 26.14: WebComponents.jsp -->
4 <!-- Registration form that demonstrates JSF components -->
5 <jsp:root version = "1.2"
6 xmlns:f = "http://java.sun.com/jsf/core"
7 xmlns:h = "http://java.sun.com/jsf/html"
8 xmlns:jsp = "http://java.sun.com/JSP/Page"
9 xmlns:webuijsf = "http://www.sun.com/webui/webuijsf">
10 <jsp:directive.page contentType = "text/html;charset=UTF-8"
11 pageEncoding = "UTF-8" />
12 <f:view>
13 <webuijsf:page binding = "#{WebComponents.page1}" id = "page1">
14 <webuijsf:html binding = "#{WebComponents.html1}" id = "html1">
15 <webuijsf:head binding = "#{WebComponents.head1}" id = "head1"
16 title = "Sample Registration Form">
17 <webuijsf:link binding = "#{WebComponents.link1}"
18 id = "link1" url = "/resources/stylesheet.css" />
19 </webuijsf:head>
20 <webuijsf:body binding = "#{WebComponents.body1}" id = "body1"
21 style = "-rave-layout: grid">
22 <webuijsf:form binding = "#{WebComponents.form1}"
23 id = "form1">
24 <webuijsf:staticText binding = "#{WebComponents.header}"
25 id = "header" style = "font-size: 18px; left: 24px;
26 top: 24px; position: absolute; width: 264px"
27 text = "This is a sample registration form" />
28 <webuijsf:staticText
29 binding = "#{WebComponents.instructions}"
30 id = "instructions" style = "font-size: 12px;
31 font-style: italic; left: 24px; top: 48px;
32 position: absolute"
33 text = "Please fill in all fields and click Register"/>
34
35
36
37
38
39
40
41 <webuijsf:image binding = "#{WebComponents.image1}"
42 id = "image1" url = "/resources/fname.JPG" />

~~~
**Fig. 26.14** | Registration form that demonstrates JSF components. (Part 1 of 3.)

~~~jsp
43
44
45
46 <webuijsf:image binding = "#{WebComponents.image2}"
47 id = "image2" url = "/resources/lname.JPG" />
48 <webuijsf:textField
49 binding = "#{WebComponents.lastNameTextField}"
50 id = "lastNameTextField" />
51 <webuijsf:image binding = "#{WebComponents.image4}"
52 id = "image4" url = "/resources/email.JPG" />
53 <webuijsf:textField
54 binding = "#{WebComponents.emailTextField}"
55 id = "emailTextField" />
56 <webuijsf:image binding = "#{WebComponents.image3}"
57 id = "image3" url = "/resources/phone.JPG" />
58 <webuijsf:textField
59 binding = "#{WebComponents.phoneTextField}"
60 id = "phoneTextField" />
61 </h:panelGrid>
62 <webuijsf:image binding = "#{WebComponents.image5}"
63 id = "image5" style = "left: 24px; top: 216px;
64 position: absolute"
65 url = "/resources/publications.JPG" />
66 <webuijsf:staticText
67 binding = "#{WebComponents.publicationLabel}"
68 id = "publicationLabel" style = "font-size: 12px;
69 left: 216px; top: 216px; position: absolute"
70 text = "Which book would you like information about?"/>
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89 <webuijsf:image binding = "#{WebComponents.image6}"
90 id = "image6" style = "left: 24px; top: 312px;
91 position: absolute" url = "/resources/os.JPG" />
92 <webuijsf:staticText binding = "#{WebComponents.osLabel}"
93 id = "osLabel" style = "font-size: 12px; left: 216px;
94 top: 312px; position: absolute"
95 text = "What operating system are you using?" />
~~~

**Fig. 26.14** | Registration form that demonstrates JSF components. (Part 2 of 3.)

~~~jsp
96
97
98
99
100
101
102 </webuijsf:form>
103 </webuijsf:body>
104 </webuijsf:html>
105 </webuijsf:page>
106 </f:view>
107 </jsp:root>
~~~

**Fig. 26.14** | Registration form that demonstrates JSF components. (Part 3 of 3.)


**Adding a Formatting Component to a Web Page** 
To create the layout for the **User Information** section of the form shown in Fig. 26.14, drag a **Grid Panel** component onto the page. In the **Properties** window, change the component’s id to gridPanel and set the component’s columns property to 4. The component also has properties to control the cell padding, cell spacing and other elements of the component’s appearance. In this case, accept the defaults for these properties. Now you can simply drag the **Image**s and **Text Field**s for user information into the **Grid Panel**. The **Grid Panel** will manage their spacing and their organization into rows and columns.


**Examining Web Components on a Sample Registration Form** 
Lines 34–36 of Fig. 26.14 define an **Image** component, an object of class ImageComponent which inserts an image into a web page. The images used in this example are located in this chapter’s examples directory. Images to be displayed on a web page must be placed in the project’s resources folder. To add images to the project, drop an **Image** component onto the page and click the ellipsis button next to the **url** property in the **Properties** win- dow. This opens a dialog in which you can select the image to display. Since no images have been added to the resources folder yet, click the **Add File** button, locate the image on your computer’s file system and click **Add File**. This copies the file you selected into the project’s resources directory. Now you can select the image from the list of files in the resources folder and click **OK** to insert the image into the page.

Lines 37–61 contain an h:panelGrid element representing the **Grid Panel** compo- nent. Within this element, there are eight **Image** and **Text Field** components. **Text Field**s allow you to obtain text input from the user. For example, lines 43–45 define a **Text Field** control used to collect the user’s first name. You can label a **Text Field** by setting its label property, which places text directly above the **Text Field**. Alternatively, you can label a **Text Field** by dragging and dropping a **Label** component onto the page, which allows you to customize the **Label**’s position and style. In this example, we are using images to indicate the purpose of each **Text Field**.

The order in which **Text Fields** are dragged to the page is important, because their JSP tags are added to the JSP file in that order. When a user presses the Tab key to navigate between input fields, they will navigate the fields in the order in which the JSP tags occur in the JSP file. To specify the navigation order, you should drag components onto the page in that order. Alternatively, you can set each input field’s tabIndex property in the **Prop- erties** window to control the order in which the user will tab through the fields. A compo- nent with a tab index of 1 will be the first in the tab sequence.

Lines 71–77 define a **Drop Down List**. When a user clicks the drop-down list, it expands and displays a list from which the user can make a selection. This component is an object of class DropDown and is bound to the object booksDropDownDefaultOptions, a SingleSelectOptionsList object that controls the list of options. This object can be con- figured automatically by right clicking the drop-down list in **Design** mode and selecting **Configure Default Options…**, which opens the **Options Customizer** dialog box to add options to the list. Each option consists of a display String that will represent the option in the browser and a value String that will be returned when programmatically retrieving the user’s selection from the drop-down list. Netbeans constructs the SingleSelectOp-

tionsList object in the page bean file based on the display-value pairs entered in the **Options Customizer** dialog box. To view the code that constructs the object, close the dialog box by clicking **OK**, open the page bean file, and expand the **Creator-managed Com- ponent Definition** node near the top of the file. The object is constructed in the init

method, which is called from method init the first time the page loads. Lines 78–84 define a **Radio Button Group** component of class RadioButtonGroup,

which provides a series of radio buttons from which the user can select only one. Like **Drop Down List**, a **Radio Button Group** is bound to a SingleSelectOptionList object. The options can be edited by right clicking the component and selecting **Configure Default Options…**. Also like the drop-down list, the SingleSelectOptionsList is automatically generated by the IDE and placed in the init method of the page bean class.


Lines 85–88 define a **Button** component of class Button that triggers an action when clicked. A **Button** component typically maps to an input XHTML element with attribute type set to submit. As stated earlier, clicking the **Register** button in this example does not do anything.

The **Hyperlink** component (lines 96–101) of class Hyperlink adds a link to a web page. The url property of this component specifies the resource (http://www.deitel.com in this case) that is requested when a user clicks the hyperlink. Setting the target property to blank specifies that the requested web page should open in a new browser window. By default, **Hyperlink** components cause pages to open in the same browser window.

### 26.4.2 Validation Using Validator Components and Custom Validators 
This section introduces form **validation**. Validating user input is an important step in col- lecting information from users. Validation helps prevent processing errors due to incom- plete or improperly formatted user input. For example, you may perform validation to ensure that all required fields have been filled out or that a zip-code field contains exactly five digits. Netbeans provides three validator components. A **Length Validator** determines whether a field contains an acceptable number of characters. **Double Range Validators** and **Long Range Validators** determine whether numeric input falls within acceptable ranges. Package **javax.faces.validators** contains the classes for these validators. Netbeans also allows custom validation with validator methods in the page bean file. The following ex- ample demonstrates validation using both a validator component and custom validation.

**Validating Form Data in a Web Application** 
The example in this section prompts the user to enter a name, e-mail address and phone number. After the user enters any data, but before the data is sent to the web server, vali- dation ensures that the user entered a value in each field, that the entered name does not exceed 30 characters, and that the e-mail address and phone number values are in an ac- ceptable format. If the client does not have JavaScript enabled, then the validation would be performed on the server. In this example, (555) 123-4567, 555-123-4567 and 123- 4567 are all considered valid phone numbers. Once the data is submitted, the web server responds by displaying an appropriate message and a **Grid Panel** component repeating the submitted information. Note that a real business application would typically store the sub- mitted data in a database or in a file on the server. We simply send the data back to the page to demonstrate that the server received the data.

**Building the Web Page** 
This web application introduces two additional JSF components—**Label** and **Message** from the **Basic** section of the **Palette**. Each of the page’s three text fields should have its own label and message. **Label** components describe other components and can be associ- ated with user input fields by setting their for property. **Message** components display er- ror messages when validation fails. This page requires three **Text Field**s, three **Label**s and three **Message**s, as well as a submit **Button**. To associate the **Label** components and **Mes- sage** components with their corresponding **Text Field** components, hold the Ctrl and Shift keys, then drag the label or message to the appropriate **Text Field**. In the **Properties** win- dow, notice that each **Label** and **Message** component’s for property is set to the appro- priate **Text Field**.



You should also add a **Static Text** component to display a validation success message at the bottom of the page. Set the text to "Thank you for your submission.<br/>We received the following information:" and change the component’s id to resultText. In the **Properties** window, unset the component’s rendered and escaped properties. The **rendered** property controls whether the component will be displayed the first time the page loads. Setting **escaped** to false enables the browser to recognize the <br/> tag so it can start a new line of text rather than display the characters "<br/>" in the web page.

Finally, add a **Grid Panel** component below the resultText component. The panel should have two columns, one for displaying **Static Text** components that label the user’s validated data, and one for displaying **Static Text** components that echo back that data. The panel’s rendered property should be set to false so that it is not initialially displayed.

The JSP file for this page is displayed in Fig. 26.15. Lines 34–40, 48–52 and 60–64 define webuijsf:textFields for retrieving the user’s name, e-mail address and phone number, respectively. Lines 31–33, 45–47 and 57–59 define webuijsf:labels for each of these text fields. Lines 41–44, 53–56 and 65–68 define the text fields’ **webuijsf:message** elements. Lines 69–73 define a **Submit** webuijsf:button. Lines 74–78 create a webuijsf:staticText named resultText that displays the response from the server when the user successfully submits the form, and lines 79–99 define a webuijsf:panelGrid that contains components for echoing validated user input to the browser.

~~~xml
1 <?xml version = "1.0" encoding = "UTF-8"?>
2
3 <!-- Fig. 26.15: Validation.jsp -->
4 <!-- JSP that demonstrates validation of user input. -->
5 <jsp:root version = "1.2"
6 xmlns:f = "http://java.sun.com/jsf/core"
7 xmlns:h = "http://java.sun.com/jsf/html"
8 xmlns:jsp = "http://java.sun.com/JSP/Page"
9 xmlns:webuijsf = "http://www.sun.com/webui/webuijsf">
10 <jsp:directive.page contentType = "text/html;charset=UTF-8"
11 pageEncoding = "UTF-8"/>
12 <f:view>
13 <webuijsf:page binding = "#{Validation.page1}" id = "page1">
14 <webuijsf:html binding = "#{Validation.html1}" id = "html1">
15 <webuijsf:head binding = "#{Validation.head1}" id = "head1">
16 <webuijsf:link binding = "#{Validation.link1}" id = "link1"
17 url = "/resources/stylesheet.css"/>
18 </webuijsf:head>
19 <webuijsf:body binding = "#{Validation.body1}" id = "body1"
20 style = "-rave-layout: grid">
21 <webuijsf:form binding = "#{Validation.form1}" id = "form1">
22 <webuijsf:staticText binding = "#{Validation.headerText}"
23 id = "headerText" style = "font-size: 14px; font-weight:
24 bold; left: 24px; top: 24px; position: absolute"
25 text = "Please fill out the following form:"/>
26 <webuijsf:staticText binding =
27 "#{Validation.instructionText}" id = "instructionText"
28 style = "font-size: 12px; font-style: italic; left:
~~~

**Fig. 26.15** | JSP that demonstrates validation of user input. (Part 1 of 4.)

~~~xml
29 24px; top: 48px; position: absolute" text = "All fields
30 are required and must contain valid information."/>
31 <webuijsf:label binding = "#{Validation.nameLabel}" for =
32 "nameTextField" id = "nameLabel" style = "left: 24px;
33 top: 75px; position: absolute" text = "Name:"/>
34 <webuijsf:textField binding = "#{Validation.nameTextField}"
35 id = "nameTextField" required = "true" style = "left:
36 96px; top: 72px; position: absolute; width: 216px"
37
38
39 valueChangeListenerExpression =
40 "#{Validation.nameTextField_processValueChange}"/>
41 <webuijsf:message binding = "#{Validation.nameMessage}"
42 for = "nameTextField" id = "nameMessage" showDetail =
43 "false" showSummary = "true"
44 style = "left: 336px; top: 74px; position: absolute"/>
45 <webuijsf:label binding = "#{Validation.emailLabel}" for =
46 "emailTextField" id = "emailLabel" style = "left: 24px;
47 top: 109px; position: absolute" text = "E-Mail:"/>
48 <webuijsf:textField binding =
49 "#{Validation.emailTextField}" id = "emailTextField"
50 required = "true" style = "left: 96px; top: 106px;
51 position: absolute; width: 216px"
52 />
53 <webuijsf:message binding = "#{Validation.emailMessage}"
54 for = "emailTextField" id = "emailMessage" showDetail =
55 "false" showSummary = "true" style = "left: 336px; top:
56 108px; position: absolute"/>
57 <webuijsf:label binding = "#{Validation.phoneLabel}" for =
58 "phoneTextField" id = "phoneLabel" style = "left: 24px;
59 top: 143px; position: absolute" text = "Phone:"/>
60 <webuijsf:textField binding =
61 "#{Validation.phoneTextField}" id = "phoneTextField"
62 required = "true" style = "left: 96px; top: 140px;
63 position: absolute; width: 216px"
64 />
65 <webuijsf:message binding = "#{Validation.phoneMessage}"
66 for = "phoneTextField" id = "phoneMessage" showDetail =
67 "false" showSummary = "true" style = "left: 336px; top:
68 142px; position: absolute"/>
69 <webuijsf:button
70 binding =
71 "#{Validation.submitButton}" id = "submitButton" style =
72 "left: 23px; top: 192px; position: absolute; width:
73 100px" text = "Submit"/>
74 <webuijsf:staticText binding = "#{Validation.resultText}"
75 escape = "false" id = "resultText" rendered = "false"
76 style = "left: 24px; top: 216px; position: absolute"
77 text = "Thank you for your submission.&lt;br/&gt;We
78 received the following information:"/>
79 <h:panelGrid binding = "#{Validation.resultGridPanel}"
80 columns = "2" id = "resultGridPanel" rendered = "false"
81 style = "border-width: 1px; border-style: solid;
~~~

**Fig. 26.15** | JSP that demonstrates validation of user input. (Part 2 of 4.)

~~~xml
82 background-color: #ffff99; height: 96px; left: 24px;
83 top: 264px; position: absolute" width = "288">
84 <webuijsf:staticText binding =
85 "#{Validation.nameResultLabel}"
86 id = "nameResultLabel" text = "Name:"/>
87 <webuijsf:staticText binding =
88 "#{Validation.nameResult}" id = "nameResult"/>
89 <webuijsf:staticText binding =
90 "#{Validation.emailResultLabel}"
91 id = "emailResultLabel" text = "E-Mail:"/>
92 <webuijsf:staticText binding =
93 "#{Validation.emailResult}" id = "emailResult"/>
94 <webuijsf:staticText binding =
95 "#{Validation.phoneResultLabel}"
96 id = "phoneResultLabel" text = "Phone:"/>
97 <webuijsf:staticText binding =
98 "#{Validation.phoneResult}" id = "phoneResult"/>
99 </h:panelGrid>
100 </webuijsf:form>
101 </webuijsf:body>
102 </webuijsf:html>
103 </webuijsf:page>
104 </f:view>
105 </jsp:root>
~~~

**Fig. 26.15** | JSP that demonstrates validation of user input. (Part 3 of 4.)

**Fig. 26.15** | JSP that demonstrates validation of user input. (Part 4 of 4.)


**Setting the Required Property of an Input Component** 
Ensuring that the user has made a selection or entered some text in a required input ele- ment is a basic type of validation. This is accomplished by checking the **required** box in the element’s **Properties** window. If you add a validator component or custom validator method to an input field, the field’s required property must be set to true for validation to occur. Notice that each of the three input webuijsf:textFields in this example has its required property set to true. Also note in the Visual Editor that the label for a required field is automatically marked by a red asterisk. If a user submits this form with empty text fields, the default error message for a required field will be displayed in the empty field’s associated webuijsf:message component. To customize the error message, you must pro- vide a custom validator.


**Using the LengthValidator Component** 
In this example, we use the **Length Validator** component (found in the **Validators** section of the **Palette**) to ensure that the length of the user’s name does not exceed 30 characters. This might be useful to ensure that a value will fit in a particular database field.

To add a **Length Validator** to a component, simply drag the validator from the **Palette** and drop it onto the field to validate. A **lengthValidator1** node will appear in the **Outline** window. To edit the validation component’s properties, click this node and set the max-

imum and minimum properties to the desired number of characters in the **Properties** window. Here, we set only the maximum property to 30. We also changed the component’s id to nameLengthValidator. Notice that the nameTextField’s validationExpression

property has been bound to the nameLengthValidator’s validate method in the page bean file (lines 37–38). Remember that most client-side validation can be circumvented, so important validation should always be performed on the server.

This validator allows users to type as much text in the field as they wish, and if they exceed the limit, the default length validation error message will be displayed in the field’s webuijsf:message component after the user clicks the **Submit** button. It is possible to limit the length of user input without using validation. By setting a **Text Field**’s maxLength property, the **Text Field**’s cursor will not advance beyond the maximum allowable number of characters, so the user cannot submit data that exceeds the length limit.

**Using Regular Expressions to Perform Custom Validation** 
Some of the most common validation tasks involve checking user input for appropriate formatting. For instance, it may be necessary to check user-entered e-mail addresses and telephone numbers to ensure that they conform to the standard formatting for valid e-mail addresses and phone numbers. Matching user input against a regular expression is an ef- fective way to ensure that the input is properly formatted. Netbeans does not provide com- ponents for validation using regular expressions, so we will add our own custom validator methods to the page bean file. To add a custom validator to an input component, right click the component and select **Edit Event Handler > validate**. This creates a validation method for the component with an empty body in the page bean file. We’ll add code to this method shortly. Note that both emailTextField and phoneTextField’s validate at- tributes are bound to their respective custom validation methods in the page bean file (lines 51–52 and 63–64).

**Examining the Page Bean File for a Form That Receives User Input** 
Figure 26.16 contains the page bean file for the JSP file in Fig. 26.15. Line 31 sets the maximum length for the nameLengthValidator, which is a property of this page bean. Re- call that the name text field was bound to this property in the JSP file. Method emailTextFieldvalidate (lines 410–422) and phoneTextFieldvalidate (lines 426– 438) are the custom validator methods that verify the user-entered e-mail address and phone number, respectively. The submitButtonaction method (lines 441–452) echoes the data back to the user if validation succeeds. The validator methods are called before the event handler, so if validation fails, submitButtonaction will not be called and the user input will not be echoed.

The two custom validator methods in this page bean file validate a text field’s contents against a regular expression using the String method match, which takes a regular expres- sion as an argument and returns true if the String conforms to the specified format.

~~~java
1 // Fig. 26.16: Validation.java
2 // Validating user input.
3 package validation;
4
5 import com.sun.rave.web.ui.appbase.AbstractPageBean;
6 import com.sun.webui.jsf.component.Body;
7 import com.sun.webui.jsf.component.Button;
8 import com.sun.webui.jsf.component.Form;
9 import com.sun.webui.jsf.component.Head;
10 import com.sun.webui.jsf.component.Html;
11 import com.sun.webui.jsf.component.Label;
12 import com.sun.webui.jsf.component.Link;
13 import com.sun.webui.jsf.component.Message;
14 import com.sun.webui.jsf.component.Page;
15 import com.sun.webui.jsf.component.StaticText;
16 import com.sun.webui.jsf.component.TextField;
17 import javax.faces.FacesException;
18 import javax.faces.application.FacesMessage;
19 import javax.faces.component.UIComponent;
20 import javax.faces.component.html.HtmlPanelGrid;
21 import javax.faces.context.FacesContext;
22 import javax.faces.validator.LengthValidator;
23 import javax.faces.validator.ValidatorException;
24
25 public class Validation extends AbstractPageBean
26 {
27 private int __placeholder;
28
29 private void _init() throws Exception
30 {
31 nameLengthValidator.setMaximum( 30 );
32 } // end method _init
33
34
35
36
408 // validates entered email address against the regular expression
409 // that represents the form of a valid email address.
410 public void emailTextField_validate( FacesContext context,
411 UIComponent component, Object value )
412 {
413 String email = String.valueOf( value );
414
415 // if entered email address is not in a valid format
416
417
418
419
420
421
422 } // end method emailTextField_validate
423
~~~

**Fig. 26.16** | Page bean for validating user input and redisplaying that input if valid. (Part 1 of 2.)


~~~java
424 // validates entered phone number against the regular expression
425 // that represents the form of a valid phone number.
426 public void phoneTextField_validate( FacesContext context,
427 UIComponent component, Object value )
428 {
429 String phone = String.valueOf( value );
430
431 // if entered phone number is not in a valid format
432
433
434
435
436
437
438 } // end method phoneTextField_validate
439
440 // displays the values the user entered
441 public String submitButton_action()
442 {
443 String name = String.valueOf( nameTextField.getValue() );
444 String email = String.valueOf( emailTextField.getValue() );
445 String phone = String.valueOf( phoneTextField.getValue() );
446 nameResult.setValue( name );
447 emailResult.setValue( email );
448 phoneResult.setValue( phone );
449 resultGridPanel.setRendered( true );
450 resultText.setRendered( true );
451 return null;
452 } // end method submitButton_action
453 } // end class Validation
~~~

**Fig. 26.16** | Page bean for validating user input and redisplaying that input if valid. (Part 2 of 2.)


For the emailTextFieldvalidate method, we use the validation expression

\\w+([-+.']\\w+)\*@\\w+([-.]\\w+)\*\\.\\w+([-.]\\w+)\*

Note that each backslash in the regular expression String (line 417) must be escaped with another backslash (as in \\\\), because the backslash character normally represents the beginning of an escape sequence in Java. This regular expression indicates that an e-mail address is valid if the part before the @ symbol contains one or more word characters (i.e., alphanumeric characters or underscores), followed by zero or more Strings comprised of a hyphen, plus sign, period or apostrophe and additional word characters. After the @ sym- bol, a valid e-mail address must contain one or more groups of word characters potentially separated by hyphens or periods, followed by a required period and another group of one or more word characters potentially separated by hyphens or periods. For example, the e- mail addresses bob's-personal.email@white.email.com, bob-white@my-email.com and bob.white@email.com are all valid. If the user enters text in emailTextField that does not have the correct format and attempts to submit the form, lines 419–420 throw a Valida-

torException. The Message component catches this exception and displays the message in red.


The regular expression in phoneTextFieldvalidate ensures that the phoneTextBox

contains a valid phone number before the form is submitted. The user input is matched against the regular expression

((\\(\\d{3}\\) ?)|(\\d{3}-))?\\d{3}-\\d{4}

(Again, each backslash is escaped in the regular expression String in line 433.) This ex- pression indicates that a phone number can contain a three-digit area code either in pa- rentheses and followed by an optional space or without parentheses and followed by a required hyphen. After an optional area code, a phone number must contain three digits, a hyphen and another four digits. For example, (555) 123-4567, 555-123-4567 and 123-

4567 are all valid phone numbers. If a user enters an invalid phone number, lines 435–436 throw a ValidatorException The Message component catches this exception and dis- plays the error message in red.

If all six validators are successful (i.e., each TextField contains data, the name is less than 30 characters and the e-mail address and phone number are valid), clicking the **Submit** button sends the form’s data to the server. As shown in Fig. 26.15(d), the submitButtonaction method displays the submitted data in a gridPanel (lines 446– 449) and a success message in resultsText (line 450).

## 26.5 Session Tracking
In the early days of the Internet, e-businesses could not provide the kind of customized service typically experienced in “brick-and-mortar” stores. To address this problem, e- businesses began to establish mechanisms by which they could personalize users’ browsing experiences, tailoring content to individual users while enabling them to bypass irrelevant information. Businesses achieve this level of service by tracking each customer’s movement through their websites and combining the collected data with information provided by the consumer, including billing information, personal preferences, interests and hobbies.

**Personalization** **Personalization** makes it possible for e-businesses to communicate effectively with their customers and also improves the user’s ability to locate desired products and services. Companies that provide content of particular interest to users can establish relationships with customers and build on those relationships over time. Furthermore, by targeting con- sumers with personal offers, recommendations, advertisements, promotions and services, e-businesses create customer loyalty. Websites can use sophisticated technology to allow visitors to customize home pages to suit their individual needs and preferences. Similarly, online shopping sites often store personal information for customers, tailoring notifica- tions and special offers to their interests. Such services encourage customers to visit sites and make purchases more frequently.

**Privacy** 
A trade-off exists, however, between personalized e-business service and protection of pri- vacy. Some consumers embrace the idea of tailored content, but others fear the possible adverse consequences if the info they provide to e-businesses is released or collected by tracking technologies. Consumers and privacy advocates ask: What if the e-business to which we give personal data sells or gives that information to another organization without our knowledge? What if we do not want our actions on the Internet—a supposedly anon- ymous medium—to be tracked and recorded by unknown parties? What if unauthorized parties gain access to sensitive private data, such as credit card numbers or medical history? All of these are questions that must be debated and addressed by programmers, consumers, e-businesses and lawmakers alike.

**Recognizing Clients** 
To provide personalized services to consumers, e-businesses must be able to recognize cli- ents when they request information from a site. As we have discussed, the request/response system on which the web operates is facilitated by HTTP. Unfortunately, HTTP is a state- less protocol—it does not support persistent connections that would enable web servers to maintain state information regarding particular clients. So, web servers cannot determine whether a request comes from a particular client or whether a series of requests comes from one or several clients. To circumvent this problem, sites can provide mechanisms to iden- tify individual clients. A session represents a unique client on a website. If the client leaves a site and then returns later, the client will still be recognized as the same user. To help the server distinguish among clients, each client must identify itself to the server.

Tracking individual clients, known as **session tracking**, can be achieved in a number of ways in JSPs. One popular technique uses cookies (Section 26.5.1); another uses the SessionBean object (Section 26.5.2). Additional session-tracking techniques include using input form elements of type "hidden" and URL rewriting. With "hidden" form ele- ments, a Web Form can write session-tracking data into a form in the web page that it returns to the client in response to a prior request. When the user submits the form in the new web page, all the form data, including the "hidden" fields, is sent to the form handler on the web server. With URL rewriting, the web server embeds session-tracking informa- tion directly in the URLs of hyperlinks that the user clicks to send subsequent requests to the web server.

### 26.5.1 Cookies Cookies 
provide web developers with a tool for personalizing web pages. A cookie is a piece of data typically stored in a text file on the user’s computer. A cookie maintains in- formation about the client during and between browser sessions. The first time a user visits the website, the user’s computer might receive a cookie; this cookie is then reactivated each time the user revisits that site. The aim is to create an anonymous record containing data that is used to personalize the user’s future visits to the site. For example, cookies in a shop- ping application might store unique identifiers for users. When a user adds items to an on- line shopping cart or performs another task resulting in a request to the web server, the server receives a cookie from the client containing the user’s unique identifier. The server then uses the unique identifier to locate the shopping cart and perform any necessary pro- cessing.

In addition to identifying users, cookies also can indicate clients’ shopping prefer- ences. When a web server receives a request from a client, the server can examine the cookie(s) it sent to the client during previous communications, identify the client’s pref- erences and immediately display products of interest to the client.


to the server) or about the response (when the communication is from the server to the client). When a page receives a request, the header includes information such as the request type (e.g., GET or POST) and any cookies that have been sent previously from the server to be stored on the client machine. When the server formulates its response, the header infor- mation contains any cookies the server wants to store on the client computer and other information, such as the MIME type of the response.

The **expiration date** of a cookie determines how long the cookie remains on the client’s computer. If you do not set an expiration date for a cookie, the web browser main- tains the cookie for the duration of the browsing session. Otherwise, the web browser maintains the cookie until the expiration date occurs. When the browser requests a resource from a web server, cookies previously sent to the client by that web server are returned to the web server as part of the request formulated by the browser. Cookies are deleted when they **expire**.


**Portability Tip 26.1** 
>Clients may disable cookies in their web browsers for more privacy. When such clients use web applications that depend on cookies to maintain state information, the applications will not ex- ecute correctly.


**Using Cookies to Provide Book Recommendations** 
The next web application shows how to use cookies. The example contains two pages. In the first page (Figs. 26.17 and 26.19), users select a favorite programming language from a group of radio buttons and submit the form to the web server for processing. The web server responds by creating a cookie that stores the selected language and the ISBN num- ber for a recommended book on that topic. The server then renders new components in the browser that allow the user either to select another favorite programming language or to view the second page in our application (Figs. 26.20–26.21), which lists recommended books pertaining to the programming language(s) that the user selected. When the user clicks the hyperlink, the cookies previously stored on the client are read and used to form the list of book recommendations.

The JSP file in Fig. 26.17 contains a **Radio Button Group** (lines 26–30) with the options **Java**, **C++**, **Visual Basic 2005**, **Visual C# 2005** and **Internet & Web** (set in the page bean). Recall that you can set the display and value Strings of radio buttons by right clicking the **Radio Button Group** and selecting **Configure Default Options…**. The user selects a programming language by clicking a radio button. When the user presses **Submit**, the web application creates a cookie containing the selected language. This cookie is added to the HTTP response header and sent to the client as part of the response.

~~~xml
1 <?xml version = "1.0" encoding = "UTF-8"?>
2
3 <!-- Fig. 26.17: Options.jsp -->
4 <!-- JSP file that allows the user to select a programming language -->
5 <jsp:root version = "1.2"
6 xmlns:f = "http://java.sun.com/jsf/core"
~~~

**Fig. 26.17** | JSP file that allows the user to select a programming language. (Part 1 of 4.)

~~~xml
7 xmlns:h = "http://java.sun.com/jsf/html"
8 xmlns:jsp = "http://java.sun.com/JSP/Page"
9 xmlns:webuijsf = "http://www.sun.com/webui/webuijsf">
10 <jsp:directive.page contentType = "text/html;charset=UTF-8"
11 pageEncoding = "UTF-8"/>
12 <f:view>
13 <webuijsf:page binding = "#{Options.page1}" id = "page1">
14 <webuijsf:html binding = "#{Options.html1}" id = "html1">
15 <webuijsf:head binding = "#{Options.head1}" id = "head1">
16 <webuijsf:link binding = "#{Options.link1}" id = "link1"
17 url = "/resources/stylesheet.css"/>
18 </webuijsf:head>
19 <webuijsf:body binding = "#{Options.body1}" id = "body1"
20 style = "-rave-layout: grid">
21 <webuijsf:form binding = "#{Options.form1}" id = "form1">
22 <webuijsf:staticText binding = "#{Options.instructionText}"
23 id = "instructionText" style = "font-size: 18px;
24 left: 24px; top: 24px; position: absolute"
25 text = "Select a programming language:"/>
26 <webuijsf:radioButtonGroup binding =
27 "#{Options.languageRadioGroup}" id =
28 "languageRadioGroup" items =
29 "#{Options.languageRadioGroupDefaultOptions.options}"
30 style = "left: 24px; top: 48px; position: absolute"/>
31 <webuijsf:button actionExpression =
32 "#{Options.submitButton_action}" binding =
33 "#{Options.submitButton}" id = "submitButton" style =
34 "left: 23px; top: 192px; position: absolute;
35 width: 100px" text = "Submit"/>
36 <webuijsf:staticText binding = "#{Options.responseText}"
37 id = "responseText" rendered = "false" style =
38 "font-size: 18px; left: 24px; top: 24px;
39 position: absolute"/>
40 <webuijsf:hyperlink actionExpression =
41 "#{Options.languagesLink_action}" binding =
42 "#{Options.languagesLink}" id = "languagesLink"
43 rendered = "false" style = "left: 24px; top: 72px;
44 position: absolute" text =
45 "Click here to choose another language."/>
46 <webuijsf:hyperlink actionExpression =
47 "#{Options.recommendationsLink_action}" binding =
48 "#{Options.recommendationsLink}" id =
49 "recommendationsLink" rendered = "false" style =
50 "left: 24px; top: 96px; position: absolute"
51 text = "Click here to get book recommendations."
52 url = "/faces/Recommendations.jsp"/>
53 </webuijsf:form>
54 </webuijsf:body>
55 </webuijsf:html>
56 </webuijsf:page>
57 </f:view>
58 </jsp:root>
~~~

**Fig. 26.17** | JSP file that allows the user to select a programming language. (Part 2 of 4.)


**Fig. 26.17** | JSP file that allows the user to select a programming language. (Part 3 of 4.)

**Fig. 26.17** | JSP file that allows the user to select a programming language. (Part 4 of 4.)

When the user clicks **Submit**, the webuijsf:staticText, webuijsf:radioButton- Group and webuijsf:button elements used to select a language are hidden, and a webuijsf:staticText and two webuijsf:hyperlink elements are displayed. One webuijsf:staticText and both webuijsf:hyperlinks initially have their rendered prop- erties set to false (lines 37, 43, and 49). This indicates that these components are not vis- ible the first time the page loads, as we want the user’s first view of the page to include only the components for selecting a programming language and submitting the selection.

The first hyperlink (lines 40–45) requests this page, and the second (lines 46–52) requests Recommendations.jsp. The url property is not set for the first link; we discuss this momentarily. The second link’s url property is set to /faces/Recommendations.jsp. Recall that earlier in the chapter, we set a url property to a remote website (http:// www.deitel.com). To set this property to a page within the current application, you can click the ellipsis button next to the url property in the **Properties** window to open a dialog. You can then use this dialog to select a page within your project as the link’s destination.

**Adding and Linking to a New Web Page** 
Setting the url property to a page in the current application requires that the destination page already exists. To set the url property of a link to Recommendations.jsp, you must first create this page. Right click the **Web Pages** node in the **Projects** window and select **New > Page…** from the menu that appears. In the **New Page** dialog, change the name of the page to Recommendations and click **Finish** to create the files Recommendations.jsp and Recommendations.java. (We discuss the contents of these files shortly.) Once the Recom- mendations.jsp file exists, you can select it as the url value for recommendationsLink.

For Options.jsp, rather than setting the languagesLink’s url property, we will add an action handler for this component to the page bean. The action handler will enable us to show and hide components of the page without redirecting the user to another page. Specifying a destination url would override the component’s action handler and redirect the user to the specified page, so it is important that we do not set the url property in this case. Since we use this link to reload the current page, we simply return null from the action handler, causing Options.jsp to reload.

To add an action handler to a hyperlink that should also direct the user to another page, you must add a rule to the **Page Navigation** file (Fig. 26.18). To edit this file, right

**Fig. 26.18** | Editing the **Page Navigation** file.

click anywhere in the Visual Designer and select **Page Navigation**. Click Options.jsp in the navigation designer to display its components that might cause the page to request another page. Locate the link whose navigation rule you would like to set (recommenda- tionsLink in this case) and drag it to the destination page. Now the link can direct the user to a new page (Recommendations.jsp) without overriding its action handler. Editing the **Page Navigation** file is also useful when you would like action elements that cannot specify a url property, such as buttons, to direct users to another page. You’ll configure a link from Recommendations.asp to Options.jsp later in this section.

Figure 26.19 contains the code that writes a cookie to the client machine when the user selects a programming language. The file also determines which components appear on the page, displaying either the components for choosing a language or the links for nav- igating the application, depending on the user’s actions.

~~~java
1 // Fig. 26.19: Options.java
2 // Page bean that stores user's language selection as a client cookie.
3 package sessiontrackingcookies;
4
5 import com.sun.rave.web.ui.appbase.AbstractPageBean;
6 import com.sun.webui.jsf.component.Body;
7 import com.sun.webui.jsf.component.Button;
8 import com.sun.webui.jsf.component.Form;
9 import com.sun.webui.jsf.component.Head;
10 import com.sun.webui.jsf.component.Html;
11 import com.sun.webui.jsf.component.Hyperlink;
12 import com.sun.webui.jsf.component.Link;
13 import com.sun.webui.jsf.component.Page;
14 import com.sun.webui.jsf.component.RadioButtonGroup;
15 import com.sun.webui.jsf.component.StaticText;
16 import com.sun.webui.jsf.model.SingleSelectOptionsList;
17 import java.util.Properties;
18 import javax.faces.FacesException;
19 import javax.servlet.http.Cookie;
20 import javax.servlet.http.HttpServletResponse;
21
~~~

**Fig. 26.19** | Page bean that stores the user’s language selection in a client cookie. (Part 1 of 3.)

~~~java
22 public class Options extends AbstractPageBean
23 {
24 private int __placeholder;
25
26 private void _init() throws Exception
27 {
28 languageRadioGroupDefaultOptions.setOptions(
29 new com.sun.webui.jsf.model.Option[] {
30 new com.sun.webui.jsf.model.Option( "Java", "Java" ),
31 new com.sun.webui.jsf.model.Option( "C++", "C++" ),
32 new com.sun.webui.jsf.model.Option( "Visual-Basic-2005",
33 "Visual Basic 2005" ),
34 new com.sun.webui.jsf.model.Option( "Visual-C#-2005",
35 "Visual C# 2005" ),
36 new com.sun.webui.jsf.model.Option( "Internet-&-Web",
37 "Internet & Web" )
38 } // end array initializer
39 ); // end call to setOptions
40 } // end method _init
41
42
43
44
200 private Properties books = new Properties();
201
202 // Construct a new page bean instance and initialize the properties
203 // that map languages to ISBN numbers of recommended books.
204 public Options()
205 {
206 // initialize the Properties object of values to be stored as
207 // cookies.
208 books.setProperty( "Java", "0132222205" );
209 books.setProperty( "C++", "0136152503" );
210 books.setProperty( "Visual Basic 2005", "0131869000" );
211 books.setProperty( "Visual C# 2005", "0131525239" );
212 books.setProperty( "Internet & Web", "0131752421" );
213 } // end Options constructor
214
215
216
217
258 // Action handler for the Submit button. Checks whether a language
259 // was selected and, if so, registers a cookie for that language and
260 // sets the responseText to indicate the chosen language.
261 public String submitButton_action()
262 {
263 String msg = "Welcome to Cookies! You ";
264
265 // if the user made a selection
266 if ( languageRadioGroup.getSelected() != null )
267 {
268 String language = languageRadioGroup.getSelected().toString();
269 msg += "selected " + language.replace( '-', ' ' ) + ".";
~~~

**Fig. 26.19** | Page bean that stores the user’s language selection in a client cookie. (Part 2 of 3.)

~~~java
270
271 // get ISBN number of book for the given language
272 String ISBN = books.getProperty( language );
273
274
275
276
277
278
279
280
281 } // end if
282 else
283 msg += "did not select a language.";
284
285 responseText.setValue( msg );
286 languageRadioGroup.setRendered( false );
287 instructionText.setRendered( false );
288 submitButton.setRendered( false );
289 responseText.setRendered( true );
290 languagesLink.setRendered( true );
291 recommendationsLink.setRendered( true );
292 return null; // reloads the page
293 } // end method submitButton_action
294
295 // redisplay the components for selecting a language
296 public String languagesLink_action()
297 {
298 responseText.setRendered( false );
299 languagesLink.setRendered( false );
300 recommendationsLink.setRendered( false );
301 languageRadioGroup.setRendered( true );
302 instructionText.setRendered( true );
303 submitButton.setRendered( true );
304 return null;
305 } // end method languagesLink_action
306 } // end class Options
~~~

**Fig. 26.19** | Page bean that stores the user’s language selection in a client cookie. (Part 3 of 3.)


As mentioned previously, the init method handles component initialization. Since this page contains a RadioButtonGroup object that requires initialization, method init

(lines 26–40) constructs an array of Option objects to be displayed by the buttons. Lines 208–212 in the constructor initialize a Properties object—a data structure

that stores String key/value pairs. The application uses the key to store and retrieve the associated value in the Properties object. In this example, the keys are Strings con- taining the programming language names, and the values are Strings containing the ISBN numbers for the recommended books. Class Properties provides method set-

Property, which takes as arguments a key and a value. A value that is added via method setProperty is placed in the Properties at a location determined by the key. The value for a specific Properties entry can be determined by invoking the method getProperty

on the Properties object with that value’s key as an argument.


**Software Engineering Observation 26.1** 
>Netbeans can automatically import any missing packages your Java file needs. For example, after adding the Properties object to Options.java, you can right click in the Java editor window and select **Fix Imports** to automatically import java.util.Properties.

Clicking **Submit** invokes the event handler submitButtonaction (lines 261–293), which displays a message indicating the selected language in the responseText element and adds a new cookie to the response. If a language was selected (line 266), the selected item is retrieved (line 268). Line 269 adds the selected language to the results message.

Line 272 retrieves the ISBN for the selected language from the books Properties

objectc. Then line 275 creates a new Cookie object (in package javax.servlet.http), using the selected language as the cookie’s name and a corresponding ISBN as the cookie’s value. This cookie is added to the HTTP response header in lines 278–280. An object of class HttpServletResponse (from package javax.servlet.http) represents the response. This object can be accessed by invoking the method getExternalContext on the page bean, then invoking getResponse on the resulting object. If a language was not selected, line 283 sets the results message to indicate that no selection was made.

Lines 285–291 control the appearance of the page after the user clicks **Submit**. Line 285 sets the responseText to display the String msg. Since the user has just submitted a language selection, the components used to collect the selection are hidden (lines 286– 288) and responseText and the links used to navigate the application are displayed (lines 289–291). The action handler returns null at line 292, which reloads Options.jsp.

Lines 296–305 contain the languagesLink’s event handler. When the user clicks this link, responseText and the two links are hidden (lines 298–300), and the components that allow the user to select a language are redisplayed (lines 301–303). The method returns null at line 304, causing Options.jsp to reload.

**Displaying Book Recommendations Based on Cookie Values** 
After clicking **Submit**, the user may request a book recommendation. The book recom- mendations hyperlink forwards the user to Recommendations.jsp (Fig. 26.20) to display recommendations based on the user’s language selections.

~~~xml
1 <?xml version = "1.0" encoding = "UTF-8"?>
2
3 <!-- Fig. 26.20: Recommendations.jsp -->
4 <!-- Displays book recommendations using cookies -->
5 <jsp:root version = "1.2"
6 xmlns:f = "http://java.sun.com/jsf/core"
7 xmlns:h = "http://java.sun.com/jsf/html"
8 xmlns:jsp = "http://java.sun.com/JSP/Page"
9 xmlns:webuijsf = "http://www.sun.com/webui/webuijsf">
10 <jsp:directive.page contentType = "text/html;charset=UTF-8"
11 pageEncoding = "UTF-8"/>
12 <f:view>
13 <webuijsf:page binding = "#{Recommendations.page1}" id = "page1">
14 <webuijsf:html binding = "#{Recommendations.html1}" id = "html1">
15 <webuijsf:head binding = "#{Recommendations.head1}" id = "head1">
~~~

**Fig. 26.20** | JSP file that displays book recommendations based on cookies. (Part 1 of 2.)

~~~xml
16 <webuijsf:link binding = "#{Recommendations.link1}"
17 id = "link1" url = "/resources/stylesheet.css"/>
18 </webuijsf:head>
19 <webuijsf:body binding = "#{Recommendations.body1}"
20 id = "body1" style = "-rave-layout: grid">
21 <webuijsf:form binding = "#{Recommendations.form1}"
22 id = "form1">
23 <webuijsf:label binding =
24 "#{Recommendations.recommendationsLabel}" for =
25 "recommendationsListbox" id = "recommendationsLabel"
26 style = "font-size: 18px; left: 24px; top: 24px;
27 position: absolute" text = "Recommendations"/>
28 <webuijsf:listbox binding =
29 "#{Recommendations.recommendationsListbox}" id =
30 "recommendationsListbox" items = "#{Recommendations.
31 recommendationsListboxDefaultOptions.options}"
32 style = "height: 96px; left: 24px; top: 48px;
33 position: absolute; width: 360px"/>
34 <webuijsf:hyperlink actionExpression =
35 "#{Recommendations.optionsLink_action}" binding =
36 "#{Recommendations.optionsLink}" id = "optionsLink"
37 style = "left: 24px; top: 168px; position: absolute"
38 text = "Click here to choose another language."/>
39 </webuijsf:form>
40 </webuijsf:body>
41 </webuijsf:html>
42 </webuijsf:page>
43 </f:view>
44 </jsp:root>
~~~

**Fig. 26.20** | JSP file that displays book recommendations based on cookies. (Part 2 of 2.)


Recommendations.jsp contains a **Label** (lines 23–27), a **Listbox** (lines 28–33) and a **Hyperlink** (lines 34–38). The **Label** displays the text Recommendations at the top of the page. A **Listbox** component displays a list of options from which a user can make multiple selections. The **Listbox** in this example displays the recommendations created by the Rec- ommendations.java page bean (Fig. 26.21), or the text "No Recommendations. Please select a language." The **Hyperlink** allows the user to return to Options.jsp to select additional languages. You can configure this hyperlink using the **Page Navigation** file as described earlier in this section.

**Page Bean That Creates Book Recommendations from Cookies** In Recommendations.java (Fig. 26.21), method prerender (lines 180–210) retrieves the cookies from the client, using the request object’s getCookies method (lines 183–185). An object of class HttpServletRequest (from package javax.servlet.http) represents the request. This object can be obtained by invoking method getExternalContext on the page bean, then invoking getRequest on the resulting object. The call to getCookies re- turns an array of the cookies previously written to the client. Cookies can be read by an application only if they were created by a server in the domain in which the application is running—a web server cannot access cookies created by servers in other domains. For ex- ample, a cookie created by a web server in the deitel.com domain cannot be read by a web server in any other domain.

~~~java
1 // Fig. 26.21: Recommendations.java
2 // Displays book recommendations based on cookies storing user's selected
3 // programming languages.
4 package sessiontrackingcookies;
5
6 import com.sun.rave.web.ui.appbase.AbstractPageBean;
7 import com.sun.webui.jsf.component.Body;
8 import com.sun.webui.jsf.component.Form;
9 import com.sun.webui.jsf.component.Head;
10 import com.sun.webui.jsf.component.Html;
11 import com.sun.webui.jsf.component.Hyperlink;
12 import com.sun.webui.jsf.component.Label;
13 import com.sun.webui.jsf.component.Link;
14 import com.sun.webui.jsf.component.Listbox;
15 import com.sun.webui.jsf.component.Page;
16 import com.sun.webui.jsf.component.StaticText;
17 import com.sun.webui.jsf.model.DefaultOptionsList;
18 import com.sun.webui.jsf.model.Option;
19 import javax.faces.FacesException;
20 import javax.servlet.http.Cookie;
21 import javax.servlet.http.HttpServletRequest;
22
23 public class Recommendations extends AbstractPageBean
24 {
25 private int __placeholder;
26
27 private void _init() throws Exception
28 {
29 recommendationsListboxDefaultOptions.setOptions(
30 new com.sun.webui.jsf.model.Option[] {} );
31 }
32
~~~

**Fig. 26.21** | Page bean that displays book recommendations based on cookies storing user’s selected languages. (Part 1 of 2.)

~~~java
33
34
35
179 // displays the book recommendations in the Listbox
180 public void prerender()
181 {
182
183
184
185
186
187 // if there are cookies, store the corresponding books and ISBN
188 // numbers in an array of Options
189 Option [] recommendations;
190
191 if ( cookies.length > 1 )
192 {
193 recommendations = new Option[ cookies.length - 1 ];
194
195 for ( int i = 0; i < cookies.length - 1; i++ )
196 {
197 String language = .replace( '-', ' ' );
198 recommendations[ i ] = new Option( language +
199 " How to Program. ISBN#: " + );
200 } // end for
201 } // end if
202 else
203 {
204 recommendations = new Option[ 1 ];
205 recommendations[ 0 ] = new Option(
206 "No recommendations. Please select a language." ) ;
207 } // end else
208
209 recommendationsListbox.setItems( recommendations );
210 } // end method prerender
211
212
213
214
231 // redirects user to Options.jsp
232 public String optionsLink_action()
233 {
234 return "case1"; // returns to Options.jsp
235 } // end method optionsLink_action
236 } // end class Recommendations
~~~

**Fig. 26.21** | Page bean that displays book recommendations based on cookies storing user’s selected languages. (Part 2 of 2.)


Line 191 determines whether at least one cookie exists. Lines 195–200 add the infor- mation in the cookie(s) to an Option array. Arrays of Option objects can be displayed as a list of items in a **Listbox** component. The loop retrieves the name and value of each cookie, using the control variable to determine the current value in the cookie array. If no language was selected, lines 204–206 add to an Options array a message instructing the user to select a language. Line 209 sets recommendationsListBox to display the resulting Options array. We summarize commonly used Cookie methods in Fig. 26.22.

**Fig. 26.22** | javax.servlet.http.Cookie methods


### 26.5.2 Session Tracking with the SessionBean Object 
You can also perform session tracking with the SessionBean class that is provided in each web application created with Netbeans. When a web page in the project is requested, a SessionBean object is created. Properties of this object can be accessed throughout a browser session by invoking the method getSessionBean on the page bean. To demon- strate session-tracking techniques using the SessionBean, we modified the page bean files in Figs. 26.19 and 26.21 so that they use the SessionBean to store the user’s selected languages. We begin with the updated Options.jsp file (Fig. 26.23). Figure 26.26 pre- sents the SessionBean.java file, and Fig. 26.27 presents the modified page bean file for Options.jsp.

The Options.jsp file in Fig. 26.23 is similar to that presented in Fig. 26.17 for the cookies example. Lines 40–48 define two webuijsf:staticText elements that were not present in the cookies example. The first element displays the text "Number of selections so far:". The second element’s text attribute is bound to property numSelections in the SessionBean (line 48). We discuss how to bind the text attribute to a SessionBean prop- erty momentarily.

~~~xml
1 <?xml version = "1.0" encoding = "UTF-8"?>
2
3 <!-- Fig. 26.23: Options.jsp -->
4 <!-- JSP file that allows the user to select a programming language -->
5 <jsp:root version = "1.2"
6 xmlns:f = "http://java.sun.com/jsf/core"
7 xmlns:h = "http://java.sun.com/jsf/html"
8 xmlns:jsp = "http://java.sun.com/JSP/Page"
9 xmlns:webuijsf = "http://www.sun.com/webui/webuijsf">
10 <jsp:directive.page contentType = "text/html;charset=UTF-8"
11 pageEncoding = "UTF-8"/>
12 <f:view>
13 <webuijsf:page binding = "#{Options.page1}" id = "page1">
14 <webuijsf:html binding = "#{Options.html1}" id = "html1">
15 <webuijsf:head binding = "#{Options.head1}" id = "head1">
16 <webuijsf:link binding = "#{Options.link1}" id = "link1"
17 url = "/resources/stylesheet.css"/>
18 </webuijsf:head>
19 <webuijsf:body binding = "#{Options.body1}" id = "body1"
20 style = "-rave-layout: grid">
21 <webuijsf:form binding = "#{Options.form1}" id = "form1">
22 <webuijsf:staticText binding = "#{Options.instructionText}"
23 id = "instructionText" style = "font-size: 18px;
24 left: 24px; top: 24px; position: absolute"
25 text = "Select a programming language:"/>
26 <webuijsf:radioButtonGroup binding =
27 "#{Options.languageRadioGroup}" id =
28 "languageRadioGroup" items =
29 "#{Options.languageRadioGroupDefaultOptions.options}"
30 style = "left: 24px; top: 48px; position: absolute"/>
31 <webuijsf:button actionExpression =
32 "#{Options.submitButton_action}" binding =
33 "#{Options.submitButton}" id = "submitButton" style =
34 "left: 23px; top: 192px; position: absolute;
35 width: 100px" text = "Submit"/>
36 <webuijsf:staticText binding = "#{Options.responseText}"
37 id = "responseText" rendered = "false" style =
38 "font-size: 18px; left: 24px; top: 24px;
39 position: absolute"/>
40 <webuijsf:staticText binding = "#{Options.selectionsText}"
41 id = "selectionsText" rendered = "false" style =
42 "position: absolute; left: 24px; top: 72px" text =
43 "Number of selections so far:"/>
44 <webuijsf:staticText binding =
45 "#{Options.selectionsValueText}" id =
46 "selectionsValueText" rendered = "false" style =
47 "left: 168px; top: 72px; position: absolute"
48 />
49 <webuijsf:hyperlink actionExpression =
50 "#{Options.languagesLink_action}" binding =
51 "#{Options.languagesLink}" id = "languagesLink"
52 rendered = "false" style = "left: 24px; top: 120px;
~~~

**Fig. 26.23** | JSP file that allows the user to select a programming language. (Part 1 of 3.)

~~~xml
53 position: absolute"
54 text = "Click here to choose another language."/>
55 <webuijsf:hyperlink actionExpression =
56 "#{Options.recommendationsLink_action}" binding =
57 "#{Options.recommendationsLink}" id =
58 "recommendationsLink" rendered = "false" style =
59 "left: 24px; top: 144px; position: absolute"
60 text = "Click here to get book recommendations."
61 url = "/faces/Recommendations.jsp"/>
62 </webuijsf:form>
63 </webuijsf:body>
64 </webuijsf:html>
65 </webuijsf:page>
66 </f:view>
67 </jsp:root>
~~~

**Fig. 26.23** | JSP file that allows the user to select a programming language. (Part 2 of 3.)

**Fig. 26.23** | JSP file that allows the user to select a programming language. (Part 3 of 3.)



**Adding Properties to the SessionBean** 
In this example, we use session tracking to store not only the user’s selected languages, but also the number of selections made. To store this information in the SessionBean, we add properties to the SessionBean class.

To add a property that will store the number of selections so far, right click the SessionBean1 node in the **Outline** window and select **Add > Property** to display the **New Property Pattern** dialog (Fig. 26.24). This dialog allows you to add primitive, String or primitive type-wrapper (e.g., Integer, Double) properties to the SessionBean. Add an int

property named numSelections and click **OK** to accept the default settings for this prop- erty. Open the SessionBean file, and at the bottom of the source code you’ll see a new property definition, a get method and set method for numSelections.

Property numSelections is manipulated in the page bean file to store the number of languages the user selected. To display the value of this property in the selectionsValue- Text element in the JSP file, right click the element in the **Outline** window and select **Bind to Data…**. In the **Bind to Data** dialog (Fig. 26.25), select the **Bind to an Object** tab, locate property numSelections under the SessionBean1 node and click **OK**. The **Static Text** ele- ment will now always display the value of SessionBean1’s numSelections property. If the

**Fig. 26.24** | **New Property** dialog for adding a property to the SessionBean.


property’s value changes, the text changes as well, so that you need not programmatically set the text in the page bean file.

Now that we’ve added a property to store the number of selections in the SessionBean1, we must add a second property to store the selections themselves. We’d like to store selections as key/value pairs of the selected language and the ISBN number of a related book, similar to the way selections were stored using cookies. To do this, we add a Properties object named selectedLanguages to the SessionBean. We manually added this property to the SessionBean file, but you can add it using the **New Property** dialog in Fig. 26.24. Simply type java.util.Properties in the **Type** drop-down list’s field, con- figure the property and click **OK**. The modified SessionBean file (after the two properties have been added) is displayed in Fig. 26.26.


**Fig. 26.25** | **Bind to Data** dialog.

~~~java
1 // Fig. 26.26: SessionBean.java
2 // SessionBean file for storing language selections.
3 package sessiontrackingsessions;
4
5 import com.sun.rave.web.ui.appbase.AbstractSessionBean;
6 import javax.faces.FacesException;
7
8 public class SessionBean1 extends AbstractSessionBean
9 {
10
11
12
53 // holds value of property numSelections
54
55
56 // returns value of numSelections
57 public int getNumSelections()
58 {
59 return this.numSelections;
60 } // end method getNumSelections
61
62 // sets new value of numSelections
63 public void setNumSelections(int numSelections)
64 {
65 this.numSelections = numSelections;
66 } // end method setNumSelections
67
68 // holds value of property selectedLanguages
69
70
71
72 // returns selectedLanguages
73 public java.util.Properties getSelectedLanguages()
74 {
75 return this.selectedLanguages;
76 } // end method getSelectedLanguages
77
78 // sets new value of property selectedLanguages
79 public void setSelectedLanguages(
80 java.util.Properties selectedLanguages )
81 {
82 this.selectedLanguages = selectedLanguages;
83 } // end method setSelectedLanguages
84 } // end class SessionBean1
~~~

**Fig. 26.26** | SessionBean file for storing language selections.


Line 54 declares the numSelections property, and lines 57–60 and 63–66 declare its get and set methods, respectively. This portion of the code was generated automatically when we used the **New Property** dialog. Lines 69–70 define the Properties object selectedLanguages that will store user selections. Lines 73–76 and 79–83 are the get and set methods for this property.


**Manipulating SessionBean Properties in a Page Bean File** The page bean file for the Options.jsp page is displayed in Fig. 26.27. Because much of this example is identical to the preceding one, we concentrate on the new features.


~~~java
1 // Fig. 26.27: Options.java
2 // Page bean that stores language selections in a SessionBean property.
3 package sessiontrackingsessions;
4
5 import com.sun.rave.web.ui.appbase.AbstractPageBean;
6 import com.sun.webui.jsf.component.Body;
7 import com.sun.webui.jsf.component.Button;
8 import com.sun.webui.jsf.component.Form;
9 import com.sun.webui.jsf.component.Head;
10 import com.sun.webui.jsf.component.Html;
11 import com.sun.webui.jsf.component.Hyperlink;
12 import com.sun.webui.jsf.component.Link;
13 import com.sun.webui.jsf.component.Page;
14 import com.sun.webui.jsf.component.RadioButtonGroup;
15 import com.sun.webui.jsf.component.StaticText;
16 import com.sun.webui.jsf.model.SingleSelectOptionsList;
17 import java.util.Properties;
18 import javax.faces.FacesException;
19 import javax.servlet.http.Cookie;
20 import javax.servlet.http.HttpServletResponse;
21
22 public class Options extends AbstractPageBean
23 {
24 private int __placeholder;
25
26 private void _init() throws Exception
27 {
28 languageRadioGroupDefaultOptions.setOptions(
29 new com.sun.webui.jsf.model.Option[] {
30 new com.sun.webui.jsf.model.Option( "Java", "Java" ),
31 new com.sun.webui.jsf.model.Option( "C++", "C++" ),
32 new com.sun.webui.jsf.model.Option( "Visual Basic 2005",
33 "Visual Basic 2005" ),
34 new com.sun.webui.jsf.model.Option( "Visual C# 2005",
35 "Visual C# 2005" ),
36 new com.sun.webui.jsf.model.Option( "Internet & Web",
37 "Internet & Web")
38 } // end array initializer
39 ); // end call to setOptions
40 } // end method _init
41
42
43
44
226 // Construct a new page bean instance and initialize the properties
227 // that map languages to ISBN numbers of recommended books.
228 public Options()
229 {
~~~

**Fig. 26.27** | Page bean that stores language selections in a SessionBean property. (Part 1 of 3.)

~~~java
230 // initialize the Properties object of values to be stored
231 // in the session
232 books.setProperty( "Java", "0132222205" );
233 books.setProperty( "C++", "0136152503" );
234 books.setProperty( "Visual Basic 2005", "0131869000" );
235 books.setProperty( "Visual C# 2005", "0131525239" );
236 books.setProperty( "Internet & Web", "0131752421" );
237 } // end Options constructor
238
239
240
241
282 // Action handler for the Submit button. Checks whether a language
283 // was selected and, if so, registers a cookie for that language and
284 // sets the responseText to indicate the chosen language.
285 public String submitButton_action()
286 {
287 String msg = "Welcome to sessions! You ";
288
289 // if the user made a selection
290 if ( getLanguageRadioGroup().getSelected() != null )
291 {
292 String language = languageRadioGroup.getSelected().toString();
293 msg += "selected " + language + ".";
294
295 // get ISBN number of book for the given language.
296 String ISBN = books.getProperty( language );
297
298
299
300
301
302 // increment numSelections in the SessionBean and update
303 // selectedLanguages if user has not made this selection before
304 if ( result == null )
305 {
306
307
308 } // end if
309 } // end if
310 else
311 msg += "did not select a language.";
312
313 responseText.setValue( msg );
314 languageRadioGroup.setRendered( false );
315 instructionText.setRendered( false );
316 submitButton.setRendered( false );
317 responseText.setRendered( true );
318 selectionsText.setRendered( true );
319 selectionsValueText.setRendered( true );
320 languagesLink.setRendered( true );
321 recommendationsLink.setRendered( true );
~~~

**Fig. 26.27** | Page bean that stores language selections in a SessionBean property. (Part 2 of 3.)

**Fig. 26.27** | Page bean that stores language selections in a SessionBean property. (Part 3 of 3.)


The submitButton’s action handler (lines 285–323) stores the user’s selections in the SessionBean and increments the number of selections made, if necessary. Line 299 retrieves from the SessionBean the Properties object that contains the user’s selections. Line 300 adds the current selection to the Properties object. Method setProperty

returns the value previously associated with the new key, or null if this key was not already stored in the Properties object. If adding the new property returns null, then the user has made a new selection. In this case, lines 306–307 increment the numSelections prop- erty in the SessionBean. Lines 313–321 and the languaguesLink action handler (lines 326–337) control the components that are displayed, just as in the cookies examples.

**Software Engineering Observation 26.2** 
>A benefit of using SessionBean properties (rather than cookies) is that they can store any type of object (not just Strings) as attribute values. This provides you with increased flexibility in maintaining client-state information.

**Displaying Recommendations Based on Session Values** 
As in the cookies example, this application provides a link to Recommendations.jsp, which displays a list of book recommendations based on the user’s language selections. Since this JSP is identical to the version in Fig. 26.20, we show only the sample output of this page in Fig. 26.28.

**Page Bean That Creates Book Recommendations from a SessionBean Property** 
Figure 26.29 presents the page bean for Recommendations.jsp. Again, much of it is sim- ilar to the page bean used in the cookies example. We discuss only the new features.


**Fig. 26.28** | JSP file that displays book recommendations based on language selections stored in session scope.


~~~java
1 // Fig. 26.29: Recommendations.java
2 // Page bean that displays book recommendations based on a SessionBean
3 // property.
4 package sessiontrackingsessions;
5
6 import com.sun.rave.web.ui.appbase.AbstractPageBean;
7 import com.sun.webui.jsf.component.Body;
8 import com.sun.webui.jsf.component.Form;
9 import com.sun.webui.jsf.component.Head;
10 import com.sun.webui.jsf.component.Html;
11 import com.sun.webui.jsf.component.Hyperlink;
12 import com.sun.webui.jsf.component.Label;
13 import com.sun.webui.jsf.component.Link;
14 import com.sun.webui.jsf.component.Listbox;
15 import com.sun.webui.jsf.component.Page;
16 import com.sun.webui.jsf.model.DefaultOptionsList;
17 import com.sun.webui.jsf.model.Option;
18 import java.util.Enumeration;
19 import java.util.Properties;
20 import javax.faces.FacesException;
21
22 public class Recommendations extends AbstractPageBean
23 {
24
25
26
178 // displays the book recommendations in the Listbox
179 public void prerender()
180 {
181
182
183
Fig. 26.29 | Displays book recommendations based on a SessionBean property. (Part 1 of 2.)
// To save space, we omitted the code in lines 24-177. The complete
// source code is provided with this chapter's examples.
// retrieve user's selections and number of selections made
Properties languages = getSessionBean1().getSelectedLanguages();
Enumeration selectionsEnum = languages.propertyNames();
~~~

**Fig. 26.29** | Displays book recommendations based on a SessionBean property. (Part 1 of 2.)

~~~java
184
185
186 Option [] recommendations;
187
188 // if at least one selection was made
189 if ( numSelected > 0 )
190 {
191 recommendations = new Option[ numSelected ];
192
193 for ( int i = 0; i < numSelected; i++ )
194 {
195
196
197
198
199 } // end for
200 } // end if
201 else
202 {
203 recommendations = new Option[ 1 ];
204 recommendations[ 0 ] = new Option(
205 "No recommendations. Please select a language." );
206 } // end else
207
208 recommendationsListbox.setItems( recommendations );
209 } // end method prerender
210
211
212
213
230 // redirects user to Options.jsp
231 public String optionsLink_action()
232 {
233 return "case1"; // returns to Options.jsp
234 } // end method optionsLink_action
235 } // end class Recommendations
~~~

**Fig. 26.29** | Displays book recommendations based on a SessionBean property. (Part 2 of 2.)


Line 182 retrieves the Properties object containing the user’s selections from the SessionBean, and line 183 gets an enumeration of all of the keys in that Properties

object. Line 184 retrieves the number of selections made from the SessionBean. If any selections were made, line 191 constructs an appropriately sized Option array to display the selections in the webuijsf:listBox element of Recommendations.jsp. Lines 193–199 add each of the user’s selections to this Option array. Line 195 gets the next key from the enumeration of keys, and lines 196–198 add a recommendation to the Option array.

## 26.6 Wrap-Up
In this chapter, we introduced web application development using JavaServer Pages and JavaServer Faces in Netbeans. We began by discussing the simple HTTP transactions that take place when you request and receive a web page through a web browser. We then discussed the three tiers (i.e., the client or top tier, the business logic or middle tier and the information or bottom tier) that comprise most web applications.

You learned the role of JSP files and page bean files, and the relationship between them. You learned how to use Netbeans to visually build web applications using Net- beans’s drag-and-drop capabilities, then you compiled and executed them.

We demonstrated several common JSF components used for displaying text and images on web pages. We also discussed validation components and custom validator methods, which allow you to ensure that user input satisfies certain requirements.

We discussed the benefits of maintaining user information across multiple pages of a website. We then demonstrated how you can include such functionality in a web applica- tion using either cookies or properties in the SessionBean class. In the next chapter, we continue our discussion of web application development. You’ll learn how to access a data- base from a JSF web application, how to use several of the AJAX-enabled JSF components from Sun’s Java Blueprints and how to use virtual forms.

## 26.7 Web Resources
Our Java Resource Centers focus on the enormous amount of free Java content available online. We currently provide six Java-related Resource Centers:

www.deitel.com/java/ www.deitel.com/JavaCertification/ www.deitel.com/JavaDesignPatterns/ www.deitel.com/JavaEE5/ www.deitel.com/JavaFX/ www.deitel.com/JavaSE6Mustang/

You can view our complete list of Resource Centers at

www.deitel.com/ResourceCenters.html

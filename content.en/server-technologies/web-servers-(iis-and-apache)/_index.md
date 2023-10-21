---
title: "Web Servers (Iis And Apache)"
weight: 1
---

# OBJECTIVES

In this chapter you will learn:

- To understand a web server’s functionality.

- To introduce Microsoft Internet Information Services (IIS) and Apache HTTP Server.

- To set up virtual directories from which content can be served.

- To test whether you set up the virtual directory properly.


## 21.1 Introduction
 In this chapter, we discuss the specialized software—called a **web server**—that responds to client requests (typically from a web browser) by providing resources such as XHTML documents. For example, when users enter a Uniform Resource Locator (URL) address, such as www.deitel.com, into a web browser, they are requesting a specific document from a web server. The web server maps the URL to a resource on the server (or to a file on the server’s network) and returns the requested resource to the client. During this interaction, the web server and the client communicate using the platform-independent Hypertext Transfer Protocol (HTTP), a protocol for transferring requests and files over the Internet or a local intranet.

Our web server discussion introduces **Microsoft Internet Information Services (IIS)** and the open source **Apache HTTP Server**. Sections 21.6 and 21.7 discuss IIS and Apache, respectively.

## 21.2 HTTP Transactions
 In this section, we discuss what occurs behind the scenes when a user requests a web page in a browser. The HTTP protocol allows clients and servers to interact and exchange in- formation in a uniform and reliable manner.

In its simplest form, a web page is nothing more than an XHTML document that describes to a web browser how to display and format the document’s information. XHTML documents normally contain hyperlinks that link to different pages or to other parts of the same page. When the user clicks a hyperlink, the requested web page loads into the user’s web browser. Similarly, the user can type the address of a page into the browser’s address field.

**URIs** 
HTTP uses URIs (Uniform Resource Identifiers) to identify data on the Internet. URIs that specify document locations are called URLs (Uniform Resource Locators). Common URLs refer to files, directories or objects that perform complex tasks, such as database lookups and Internet searches. If you know the URL of a publicly available resource or file anywhere on the web, you can access it through HTTP.

**Parts of a URL**
 A URL contains information that directs a browser to the resource that the user wishes to access. Computers that run **web server** software make such resources available. Let’s exam- ine the components of the URL

http://www.deitel.com/books/downloads.html

The http:// indicates that the resource is to be obtained using the HTTP protocol. The middle portion, www.deitel.com, is the server’s fully qualified **hostname**—the name of the server on which the resource resides. This computer usually is referred to as the **host**, because it houses and maintains resources. The hostname www.deitel.com is translated into an **IP address**—a unique numerical value that identifies the server much as a tele- phone number uniquely defines a particular phone line. More information on IP addresses is available at en.wikipedia.org/wiki/IP_address. This translation is performed by a **domain name system (DNS) server**—a computer that maintains a database of hostnames and their corresponding IP addresses—and the process is called a **DNS lookup**.

The remainder of the URL (i.e., /books/downloads.html) specifies both the name of the requested resource (the XHTML document downloads.html) and its path, or location (/books), on the web server. The path could specify the location of an actual directory on the web server’s file system. For security reasons, however, the path normally specifies the location of a **virtual directory**. The server translates the virtual directory into a real loca- tion on the server (or on another computer on the server’s network), thus hiding the true location of the resource. Some resources are created dynamically using other information stored on the server computer, such as a database. The hostname in the URL for such a resource specifies the correct server; the path and resource information identify the resource with which to interact to respond to the client’s request.

**Making a Request and Receiving a Response** When given a URL, a web browser performs a simple HTTP transaction to retrieve and display the web page found at that address. Figure 21.1 illustrates the transaction, showing the interaction between the web browser (the client side) and the web server application (the server side).

In Fig. 21.1, the web browser sends an HTTP request to the server. The request (in its simplest form) is

GET /books/downloads.html HTTP/1.1

The word **GET** is an **HTTP method** indicating that the client wishes to obtain a resource from the server. The remainder of the request provides the path name of the resource (e.g., an XHTML document) and the protocol’s name and version number (HTTP/1.1). The cli- ent’s request also contains some required and optional headers.

Any server that understands HTTP (version 1.1) can translate this request and respond appropriately. Figure 21.2 depicts the server responding to a request. The server first responds by sending a line of text that indicates the HTTP version, followed by a numeric code and a phrase describing the status of the transaction. For example,

HTTP/1.1 200 OK

**Fig. 21.1** | Client interacting with web server. _Step 1:_ The GET request.

**Fig. 21.2** | Client interacting with web server. _Step 2:_ The HTTP response.

indicates success, whereas
    HTTP/1.1 404 Not found
informs the client that the web server could not locate the requested resource. A complete
list of numeric codes indicating the status of an HTTP transaction can be found at
www.w3.org/Protocols/rfc2616/rfc2616-sec10.html.


**HTTP Headers**
The server then sends one or more **HTTP headers**, which provide additional information
about the data that will be sent. In this case, the server is sending an XHTML text document, so one HTTP header for this example would read:

Content-type: text/html

The information provided in this header specifies the **Multipurpose Internet Mail Extensions (MIME)** type of the content that the server is transmitting to the browser. MIME is
an Internet standard that specifies data formats so that programs can interpret data correctly. Forexample, the MIME type text/plain indicates that thesent information is text
that can be displayed directly, without any interpretation of the content as XHTML mark up. Similarly, the MIME type image/jpeg indicates that the content is a JPEG image. When the browser receives this MIME type, it attempts to display the image.

The header or set of headers is followed by a blank line, which indicates to the client browser that the server is finished sending HTTP headers. The server then sends the con- tents of the requested XHTML document (downloads.html). The client-side browser parses the XHTML markup it receives and renders (or displays) the results. The server nor- mally keeps the connection open to process other requests from the client.

**HTTP get and post Requests**
 The two most common **HTTP request types** (also known as **request methods**) are get and post. A get request typically gets (or retrieves) information from a server. Common uses of get requests are to retrieve an XHTML document or an image, or to fetch search results based on a user-submitted search term. A post request typically posts (or sends) data to a server. Common uses of post requests are to send form data or documents to a server.

An HTTP request often posts data to a **server-side form handler** that processes the data. For example, when a user performs a search or participates in a web-based survey, the web server receives the information specified in the XHTML form as part of the request. Get requests and post requests can both be used to send form data to a web server, yet each request type sends the information differently.

A get request sends information to the server as part of the URL, e.g., www.google.com/search?q=deitel. In this case search is the name of Google’s server- side form handler, q is the name of a variable in Google’s search form and deitel is the search term. Notice the ? in the preceding URL. A ? separates the **query string** from the rest of the URL in a request. A name/value pair is passed to the server with the name and the value separated by an equals sign (=). If more than one name/value pair is submitted, each pair is separated by an ampersand (&). The server uses data passed in a query string to retrieve an appropriate resource from the server. The server then sends a **response** to the client. A get request may be initiated by submitting an XHTML form whose method

attribute is set to "get", or by typing the URL (possibly containing a query string) directly into the browser’s address bar (See Chapter 2 for more information on how various search engines operate and Chapter 4 for an in-depth discussion of XHTML forms.)

A post request is specified in an XHTML form by the method "post". The post

method sends form data as part of the HTTP message, not as part of the URL. A get

request typically limits the query string (i.e., everything to the right of the ?) to a specific number of characters (2083 in IE; more in other browsers), so it is often necessary to send large pieces of information using the post method. The post method is also sometimes preferred because it hides the submitted data from the user by embedding it in an HTTP message. If a form submits several hidden input values along with user-submitted data, the post method might generate a URL like www.searchengine.com/search. The form data still reaches the server and is processed in a similar fashion to a get request, but the user does not see the exact information sent.

**Software Engineering Observation 21.1** 
The data sent in a post request is not part of the URL and the user can’t see the data by default. However there are tools available that expose this data, so you should not assume that the data is secure just because a post request is used.

**Client-Side Caching** 
Browsers often **cache** (save on disk) web pages for quick reloading. If there are no changes between the version stored in the cache and the current version on the web, this speeds up your browsing experience. An HTTP response can indicate the length of time for which the content remains “fresh.” If this amount of time has not been reached, the browser can avoid another request to the server. If not, the browser loads the document from the cache. Thus, the browser minimizes the amount of data that must be downloaded for you to view a web page. Browsers typically do not cache the server’s response to a post request, because the next post might not return the same result. For example, in a survey, many users could visit the same web page and answer to a question. The survey results could then be dis- played for the user. Each new answer changes the overall results of the survey.

When you use a web-based search engine, the browser normally supplies the informa- tion you specify in an HTML form to the search engine with a get request. The search engine performs the search, then returns the results to you as a web page. Such pages are sometimes cached by the browser in case you perform the same search again.

## 21.3 Multitier Application Architecture 
Web-based applications are **multitier applications** (sometimes referred to as **_n_\-tier appli- cations**) that divide functionality into separate **tiers** (i.e., logical groupings of functional- ity). Although tiers can be located on the same computer, the tiers of web-based applications often reside on separate computers. Figure 21.3 presents the basic structure of a **three-tier web-based application**.

The **bottom tier** (also called the data tier or the information tier) maintains the appli- cation’s data. This tier typically stores data in a relational database management system (RDBMS). We discuss RDBMSs in Chapter 22. For example, a retail store might have an inventory information database containing product descriptions, prices and quantities in stock. Another database might contain customer information, such as user names, billing addresses and credit card numbers. These may reside on one or more computers, which together comprise the application’s data.

The **middle tier** implements business logic, controller logic and presentation logic to control interactions between the application’s clients and its data. The middle tier acts as an intermediary between data in the information tier and the application’s clients. The middle-tier **controller logic** processes client requests (such as requests to view a product

**Fig. 21.3** | Three-tier architecture.

catalog) and retrieves data from the database. The middle-tier **presentation logic** then pro- cesses data from the information tier and presents the content to the client. Web applica- tions typically present data to clients as XHTML documents.

**Business logic** in the middle tier enforces **business rules** and ensures that data is reli- able before the application updates a database or presents data to users. Business rules dic- tate how clients access data, and how applications process data. For example, a business rule in the middle tier of a retail store’s web-based application might ensure that all product quantities remain positive. A client request to set a negative quantity in the bottom tier’s product information database would be rejected by the middle tier’s business logic.

The **top tier**, or client tier, is the application’s user interface, which gathers input and displays output. Users interact directly with the application through the user interface, which is typically a web browser, keyboard and mouse, or a mobile device. In response to user actions (e.g., clicking a hyperlink), the client tier interacts with the middle tier to make requests and to retrieve data from the information tier. The client tier then displays the data retrieved for the user. The client tier never directly interacts with the information tier.

## 21.4 Client-Side Scripting versus Server-Side Scripting
 In earlier chapters, we focused on client-side scripting with JavaScript. Client-side script- ing can be used to validate user input, to interact with the browser, to enhance web pages by manipulating the DOM of a page, and to add Ajax functionality.

Client-side scripting does have limitations, such as browser dependency; the browser or **scripting host** must support the scripting language and capabilities. Scripts are restricted from accessing the local hardware and filesystem for security reasons. Another issue is that client-side scripts can be viewed by the client by using the browser’s source- viewing capability. Sensitive information, such as passwords or other personally identifi- able data, should not be on the client. All client-side data validation should be mirrored on the server. Also, placing certain operations in JavaScript on the client can open web applications to attack and other security issues.

Programmers have more flexibility with **server-side scripts**, which often generate custom responses for clients. For example, a client might connect to an airline’s web server and request a list of flights from Boston to San Antonio between April 19th and May 5th. The server queries the database, dynamically generates XHTML content containing the flight list and sends the XHTML to the client. This technology allows clients to obtain the most current flight information from the database by connecting to an airline’s web server.

Server-side scripting languages have a wider range of programmatic capabilities than their client-side equivalents. For example, server-side scripts often can access the server’s file directory structure, whereas client-side scripts cannot access the client’s directories.

Server-side scripts also have access to server-side software that extends server function- ality—Microsoft web servers use **ISAPI (Internet Server Application Program Interface) extensions** and Apache HTTP Servers use **modules**. Components and modules range from programming language support to counting the number of web-page hits. We dis- cuss some of these components and modules in the remaining chapters of the book.

**Software Engineering Observation 21.2** Properly configured server-side script source code is not visible to the client; only XHTML and any client-side scripts are visible to the client.

## 21.5 Accessing Web Servers
 To request documents from web servers, users must know the hostnames on which the web server software resides. Users can request documents from **local web servers** (i.e., ones residing on users’ machines) or **remote web servers** (i.e., ones residing on different ma- chines).

Local web servers can be accessed through your computer’s name or through the name **localhost**—a hostname that references the local machine and normally translates to the IP address 127.0.0.1 (known as the **loopback address**). We sometimes use localhost in this book for demonstration purposes. To display the machine name in Windows XP, Windows Server 2003, Windows Vista, Mac OS X or Linux, run the hostname command in a command prompt or terminal window.

A remote web server referenced by a fully qualified hostname or an IP address can also serve documents. In the URL http://www.deitel.com/books/downloads.html, the middle portion, www.deitel.com, is the server’s fully qualified hostname.


**Windows Firewall Settings** 
If you’d like to test your web server over a network, you may need to change your Win- dows Firewall settings. For security reasons, Windows Firewall does not allow remote ac- cess to a web server on your local computer by default. To change this, open the Windows Firewall utility in the Windows Control Panel. Click the **Advanced** tab and select your network connection from the **Network Connection Settings** list, then click **Settings…**. On the **Services** tab of the **Advanced Settings** dialog, ensure that **Web Server (HTTP)** is checked.

## 21.6 Microsoft Internet Information Services (IIS) 
**Microsoft Internet Information Services (IIS)** is a web server that is included with several versions of Windows. Installing IIS enables a computer to serve documents. To install IIS 5.1 on Windows XP Professional, open the **Add or Remove Programs** control panel, click **Add/Remove Windows Components**, check the checkbox next to **Internet Information Ser- vices (IIS)**, and click **Next >**. You may need the original operating system disk to complete the installation. For IIS 6.0 on Windows Server 2003 and IIS 7.0 on Windows Vista, the software should already be installed (but is also on your installation disk). The remainder of this section assumes that either IIS 5.1, IIS 6.0 or IIS 7.0 is installed on your system. In Windows Server 2003, you’ll need to use the **Manager Your Server** window to add the **Ap- plication Server** role. In Windows Vista, go to the **Control Panel**, select **Programs**, then se- lect **Turn Windows Features On or Off**.

The following subsections explain how to configure IIS 5.1, IIS 6.0 and IIS 7.0 to serve documents via HTTP. If you are using Windows XP or Windows Server 2003, see Section 21.6.1. If you are using Windows Vista, skip to Section 21.6.2.

### 21.6.1 Microsoft Internet Information Services (IIS) 5.1 and 6.0 
Start the Internet services manager by clicking the **Start** button and opening the **Control Panel**. If the **Control Panel** is currently in **Category View**, click **Switch to Classic View**. Then, double click the **Administrative Tools** icon and double click the **Internet Services Manager** icon (**Internet Information Services (IIS) Manager** in Windows Server 2003). For Windows XP, this opens the **Internet Information Services** window (Fig. 21.4)—the administration

**Fig. 21.4** | **Internet Information Services** window of IIS 5.1.

program for IIS 5.1. For Windows Server 2003, this opens the (**Internet Information Ser- vices (IIS) Manager**, which provides the same capabilities. Alternatively, you can type inetmgr at the **Start** menu’s **Run...** command prompt to open this window. You place doc- uments that will be requested from IIS either in the website’s **default directory** (i.e., C:\\Inetpub\\wwwroot) or in a **virtual directory**. A virtual directory is an alias for an existing directory that resides on the local machine (e.g., C:\\) or on the network. When a server is accessed from a web browser, content in the default directory and virtual directories is vis- ible to the client.

In the window, the left pane contains the web server’s directory structure. The name of the machine running IIS (e.g., **RESILIANT**) is listed under **Internet Information Services**. Clicking the **\+** symbol to the left of the machine name displays **Default Web Site** (and pos- sibly several other nodes).

Expand the **Default Web Site** directory by clicking the **\+** to the left of it. In this direc- tory, we will create a virtual directory for the website. Most web documents are placed in the web server’s wwwroot directory or one of its subdirectories. For this example, we create a directory in the wwwroot directory and have our virtual directory point to it. To create a virtual directory in this directory, right click **Default Web Site** and select **New > Virtual Directory…**. This starts the **Virtual Directory Creation Wizard** (Fig. 21.5), which guides you through creating a virtual directory.


**Fig. 21.5** | **Virtual Directory Creation Wizard** welcome page.


To begin, click **Next >** in the **Virtual Directory Creation Wizard** welcome page. In the **Virtual Directory Alias** page (Fig. 21.6), enter a name for the virtual directory and click **Next >**. We use the name Chapter21Test, although the virtual directory may have any name, provided that it does not conflict with an existing virtual directory name.

In the **Web Site Content Directory** page (Fig. 21.7), enter the path for the directory containing the documents that clients will view. We created a directory named C:\\Chapter21Examples that serves our documents. You can select the **Browse** button to navigate to the desired directory or to create a new one. Click **Next >**.

The **Access Permissions** page (Fig. 21.8) presents the virtual directory **security level** choices. Choose the access level appropriate for a web document. The **Read** option allows users to read and download files located in the directory. The **Run scripts (such as ASP)**

**Fig. 21.6** | **Virtual Directory Alias** page of the **Virtual Directory Creation Wizard.**

**Fig. 21.7** | **Web Site Content Directory** page of the **Virtual Directory Creation Wizard.**

**Fig. 21.8** | **Access Permissions** page of the **Virtual Directory Creation Wizard.**

option allows scripts to run in the directory. The **Execute (such as ISAPI applications or CGI)** option allows applications to run in the directory. The **Write** option allows a web page to write to files on the server, which could be a security risk. The **Browse** option allows users to see a full list of the folder’s files through a web browser. By default, **Read** and **Run scripts** are enabled. Click **Next >**.

Click **Finish** to complete the creation of the virtual directory and exit the **Virtual Direc- tory Creation Wizard**. The newly created virtual directory, Chapter21Test, is now part of the **Default Web Site**. The IIS server is configured to serve documents through the Chapter21Test virtual directory. The URL http://localhost/Chapter21Test now ref- erences the C:\\Chapter21Examples directory.

To start IIS so it can serve content, right click **Default Web Site** and select **Start**. If you need to stop IIS, right click **Default Web Site** and select **Stop**. The web server is not avail- able to serve content if it is stopped.

### 21.6.2 Microsoft Internet Information Services (IIS) 7.0
To start the **Internet Information Services (IIS) Manager**, click the start ( ) button, se- lect the **Control Panel**, click **Classic View**, double click the **Administrative Tools** icon and double click the **Internet Information Services (IIS) Manager** icon. Click **Continue** in the di- alog that appears to display the **Internet Information Services (IIS) Manager** window (Fig. 21.9)—the administration program for IIS 7.0. You place documents that will be re- quested from IIS either in the **default directory** (i.e., C:\\Inetpub\\wwwroot) or in a **virtual directory**. A virtual directory is an alias for an existing directory that resides on the local machine (e.g., C:\\) or on the network. When a server is accessed from a browser, only the default directory and virtual directories are visible to the client.

In the **Internet Information Services (IIS) Manager** window, the left pane contains the web server’s directory structure. The name of the machine running IIS (e.g., **QUALIFLY**) is listed at the top of the **Connections** column. Clicking the arrow ( ) symbol to the left of the machine name displays **Application Pools** and **Web Sites**. The **Application Pools** folder contains tools for configuring advanced features of IIS 7.0.

**Fig. 21.9** | **Internet Information (IIS) Services Manager** window (IIS 7.0).

Expand **Web Sites** by clicking the arrow ( ) to the left of it. This should display **Default Web Site.** Expand **Default Web Site** by clicking the arrow ( ) to the left of it. These are the folders and virtual directories in the default website. For this example, we create a virtual directory from which we request our documents. To create a virtual directory, right click **Default Web Site** and select **Add Virtual Directory…**. This displays the **Add Virtual Direc- tory** dialog (Fig. 21.10). In the **Alias:** field, enter a name for the virtual directory. We use the name Chapter21Test, although the virtual directory may have any name, provided that it does not conflict with an existing virtual directory. In the **Physical path:** field, enter the path for the directory containing the documents that clients will view. We created a directory named C:\\Chapter21Examples for our documents. If necessary, select the **…** button to navigate to the desired directory or to create a new one. Click **OK** to create the new virtual directory.

In Windows Vista, before you can use IIS, you must enable the World Wide Web Publishing Service (W3SVC). To do so, go to the start ( ) button, select **Control Panel**, select **Classic View**, double click **Administrative Tools** and double click **Services**. This dis- plays the **Services** window. Locate **World Wide Web Publishing Service** in the list of ser- vices, then right click it and select **Properties**. In the window that appears, change the **Startup type:** option to **Automatic**, then click **OK**. Next, right click **World Wide Web Pub- lishing Service** again and select **Start** to run IIS so that it can accept requests.

**Fig. 21.10** | **Add Virtual Directory** dialog.

## 21.7 Apache HTTP Server
The Apache HTTP Server, maintained by the Apache Software Foundation, is currently the most popular web server because of its stability, efficiency, portability, security and small size. It is open source software that runs on UNIX, Linux, Mac OS X, Windows and numerous other platforms.

Mac OS X and many versions of Linux come preinstalled with Apache. If your system does not have Apache preinstalled, you can obtain the Apache HTTP Server for a variety of platforms from httpd.apache.org/download.cgi. For instructions on installing ver- sion 2.2 of the Apache HTTP Server on Windows, please visit

http://httpd.apache.org/docs-2.2/platform/windows.html

After installing the Apache HTTP Server, start the application. For Windows, open the **Start** menu, select **Programs > Apache HTTP Server** [_version number_] **\> Control Apache Server > Monitor Apache Servers**. Double click on the **Apache Service Monitor** that appears in your **Taskbar**, select **Apache2**, and click **Start** (Fig. 21.11). For Mac OS X, you can start Apache from the **System Preferences** by opening the **Sharing** preference pane and check- ing the checkbox next to **Web Sharing**. To stop Apache in Windows, open the **Apache Ser- vice Monitor**, select your server, and click **Stop**. For Mac OS X, open the **Sharing** preference pane and uncheck the checkbox next to **Web Sharing**.

All documents that will be requested from an Apache HTTP Server must either be in the default directory (i.e., C:\\Program Files\\Apache Software Foundation\\Apache2.2\\

htdocs for Windows, /Library/WebServer/Documents for Mac OS X, and /var/www/

html or /var/www for most Linux distros) or in a directory for which an Apache HTTP Server **alias** is configured. An alias is Apache’s equivalent to Microsoft IIS’s virtual direc- tory. It is a pointer to an existing directory that resides on the local machine or on the net- work. We will create an alias for the examples in this chapter.

Instead of using an administrative utility or set of wizards, we configure the Apache HTTP Server by editing the httpd.conf file. This file contains all the information that

**Fig. 21.11** | **Apache Service Monitor**. (Courtesy of The Apache Software Foundation, <http://www.apache.org/>.)


the Apache HTTP Server needs to run correctly and serve web documents. For Windows, the httpd.conf file is located in the conf subdirectory of Apache’s installation directory. For Mac OS X and most Linux distros, it is located in the /etc/apache2/ directory. To edit this file, either open the httpd.conf in a text editor, or in Windows go to the **Start** menu and select **Programs > Apache HTTP Server** [version number] **\> Configure Apache Server > Edit the Apache httpd.conf Configuration File**. httpd.conf is a large text file con- taining all of Apache HTTP Server’s configuration information. In this file, any line that starts with a # is a comment that explains the various configuration options.

**Good Programming Practice 21.1** 
>Place a small comment near any changes you make to the Apache httpd.conf file.

An introductory comment at the top of the httpd.conf file explains how the file is organized. After this comment, the configuration information starts with the most impor- tant, global settings. These should have been configured correctly by the Apache installer. Scroll down in the file until you have reached the section titled DocumentRoot (using your text editor’s search function will save time). The DocumentRoot setting specifies Apache’s default directory. In Windows, the default setting is:

DocumentRoot "C:/Program Files/Apache Software Foundation/Apache2.2/ htdocs"

Now, find the section starting with <IfModule alias_module> and ending with </

IfModule>. To create an alias, we add the following lines below the comment.

\# This alias is for the examples used in Chapter 21 Alias /Chapter21Test "C:/Chapter21Examples"

This creates an alias called Chapter21Test that points to the physical directory C:\\Chapter21Examples. We use the name Chapter21Test, but any name that does not conflict with an existing alias is allowed. We created a directory named C:\\Chapter21Examples that contains our documents (you should specify an appropriate path on Linux or Mac OS X). Note that in both the name of the alias and the path of the directory to which the alias points we must use forward slashes (/), not backslashes (\).

**Error-Prevention Tip 21.1** 
>If you place a forward slash (/) at the end of the alias name, Apache will require this slash when a document is requested from the server. For example, if your alias is /myExamples/, then a user request for http://localhost/myExamples will not work as expected. The user will need to re- quest http://localhost/myExamples/ to access the alias. If the forward slash (/) is not placed at the end of the alias name, Apache will not require this slash, and will work as expected wheth- er or not it is present in the request.

Once we have created the alias, we must set the access settings of that directory so that users have permission to access it. The default access settings for every directory are to deny access to everybody. In order to override those settings for our new directory, C:\\Chapter21Examples, we must create a new Directory entry. We append this new Directory entry to the end of the file:

\# Begin Chapter21Examples directory access settings <Directory "C:/Chapter21Examples">

Options Indexes 
Order allow,deny 
Allow from all

</Directory> 

\# End Chapter21Examples directory access settings

We begin by specifying the location of the directory, then proceed to configure that directory. Indexes on the Options line specifies that if an index file, such as index.html, does not exist, Apache will generate one for you that contains the filenames of every doc- ument in the directory. Order allow,deny specifies that users are permitted access by default, and are denied only if they are specifically blocked. Allow from all specifies that all users are permitted access.

Now, the Apache HTTP Server is configured to serve our web document from the C:\\Chapter21Examples directory. We need to restart the server so that our changes to httpd.conf file will take effect. Then we will be ready to request documents from the Apache HTTP Server. To restart the server, we must first stop it and start it again. Please refer to the beginning of this section for instructions on how to stop and start the Apache HTTP Server.

## 21.8 Requesting Documents
This section demonstrates how an HTTP server responds to requests for XHTML docu- ments. Requesting other types of documents is similar. We discuss serving these docu- ments using the IIS and Apache HTTP Servers. The server sends XHTML documents to the client as **static web pages**. The server response for a given XHTML document is always the same. For other types of documents, such as PHP, Ruby on Rails, ASP.NET and Java- Server Faces, the appropriate language interpreter or scripting engine first generates XHT- ML content, then transmits it to the client over HTTP. These are often referred to as **dynamic web pages**, because the results of these requests might vary based on numerous factors, such as user input, the time of day and current database content.

Copy test.html from the Chapter 21 examples directory into the directory C:\\Chapter21Examples (or to the directory you created in Section 21.6 or 21.7). This is the directory that is referenced by our virtual directory (Chapter21Test). [_Note_: A file cannot be copied directly to a virtual directory, because a virtual directory is only a name referring to a physical local directory.] To request the document from IIS or Apache, start the server, launch a web browser and enter the XHTML document’s URL (i.e., http:// localhost/Chapter21Test/test.html) in the **Address** field. Figure 21.12 displays the result of requesting test.html in Internet Explorer 7.

**Fig. 21.12** | Requesting test.html.

## 21.9 Web Resources
www.deitel.com/WebServers/

The Web Servers Resource Center guides you through learning the basics behind web servers, de- ciding which server is best suited to you, and configuring and maintaining your own web server. Start your search here for resources, downloads, tutorials, documentation, books, e-books, articles, blogs and more that will help you run your own web server. www.fiddlertool.com/fiddler/

Fiddler is a freeware web debugging proxy that logs all HTTP traffic between your computer and the Internet. Fiddler allows you to inspect traffic, set breakpoints, and "fiddle" with incoming or outgoing data. The tool includes a JavaScript-based scripting system, and can be extended using any .NET language. addons.mozilla.org/en-US/firefox/addon/3829

An add-on for Firefox that enables you to view HTTP traffic as you browse the web. This can help you learn more about HTTP.


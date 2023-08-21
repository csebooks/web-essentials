---
title: Web-Browser-Basics:-Internet-Explorer-and-Firefox
weight: 2
---

# O B J E C T I V E S In this chapter you will learn:

■ To understand the Microsoft Internet Explorer 7 (IE7) and Mozilla Firefox 2 (FF2) web browsers’ capabilities.

■ To use IE7 and FF2 to search the information available on the World Wide Web.

■ To customize a browser according to your own needs and preferences.

■ To understand the differences among various browsers.

## Introduction to the Internet Explorer 7 and Firefox 2 Web Browsers

The Internet is an essential medium for communicating and interacting with people worldwide. The need to publish and share information has fueled the rapid growth of the web. **Web browsers** are software programs that allow users to access the web’s rich content. Whether for business or personal use, millions of people use web browsers to access the tremendous amount of information available on the web and to share or exchange this content with other users. The www portion of the Internet, which we encounter often in this chapter, is made up of hyperlinked documents written in XHTML and rich media.

Popular web browsers at the time of publication are Microsoft’s _Internet Explorer_, Mozilla’s _Firefox_, Apple’s _Safari_ and Opera Software’s _Opera_. This chapter focuses on the features of Internet Explorer (IE7) and Firefox 2 (FF2), which are the most widely used of these browsers. All examples in this book are supported by both IE7 and FF2.

## Connecting to the Internet

A computer alone is not enough to access the Internet. In addition to web browser soft- ware, the computer needs specific hardware and a connection to an Internet Service Pro- vider to view web pages. This section describes the components that enable Internet access.

First, a computer must have a **modem** or **network card**. A modem is hardware that enables a computer to connect to a **network** via phone lines. A modem converts data to audio tones and transmits the data over phone lines. A network card, also called a **network interface card (NIC)**, is hardware that allows a computer to connect to the Internet through a network or a high-speed Internet connection, such as a **local area network (LAN)**, **cable modem** or **Digital Subscriber Line (DSL)**.

After ensuring that a computer has a modem or a network card (most computers come with one or both of these), the next step is to register with an **Internet Service Provider (ISP)**. Computers connect to an ISP using a modem and phone line, or via a NIC using a LAN, DSL or cable modem. The ISP connects computers to the Internet. Most college and university campuses offer network connections, and many communities now offer wireless access. If a network connection is not available, then popular commercial ISPs,such as AOL (www.aol.com), Comcast (www.comcast.net), Earthlink (www.earth- link.net), Verizon (www.verizon.com), Microsoft Network (www.msn.com) and NetZero (www.netzero.net) are alternatives.

**Bandwidth** and cost are two considerations when deciding which commercial ISP ser- vice to use. Bandwidth refers to the amount of data that can be transferred through a com- munications medium in a fixed amount of time. Different ISPs offer different types of high-speed connections, called **broadband connections**—which include DSL, cable modem and **Integrated Services Digital Network (ISDN)**—and slower **dial-up connec- tions**. Each connection type has a different bandwidth and cost to users.

Broadband is a category of high-bandwidth Internet service that is most often pro- vided to home users by cable television and telephone companies. DSL is a broadband ser- vice that allows computers to be connected at all times to the Internet over existing phone lines, without interfering with telephone services. DSL requires a special modem provided by the ISP. Like DSL, cable modems enable the computer to be connected to the Internet at all times. Cable modems transmit data over the cables that bring television to homes and businesses. Unlike DSL, the bandwidth is shared by many users. This sharing can reduce the bandwidth available to each person when many use the system simultaneously. ISDN provides Internet service over either digital or standard telephone lines. ISDN requires spe- cialized hardware, called a **terminal adapter (TA)**, which is usually obtained from the ISP.

Dial-up service uses an existing telephone line. If a computer is connected to the Internet, the user usually cannot receive voice calls during this time. If the voice calls do connect, the Internet connection is interrupted. To prevent this, users may choose to install an extra phone line dedicated to Internet service.

Fiber optics are replacing traditional metal cables in many computer networks due to their greater bandwidth and mechanical advantages that provide a better signal. Though their popularity is currently limited by the high cost of materials and installation, consis- tent improvements in the industry will allow fiber optic cables to become a key element of the communications industry in the near future.

Once a computer is connected to a network, the user must choose a web browser for navigating the Internet. Internet Explorer is preinstalled on all Windows machines, and your version can be updated at www.microsoft.com/ie. Firefox can be downloaded at www.mozilla.com/firefox, and can be installed on many different operating systems. When installing this browser, select **Custom** when prompted for a setup type, and ensure that the **DOM Inspector** option is selected in the next screen. Doing so will ensure that you have additional Firefox functionality that we discuss in Chapter 12.

## Internet Explorer 7 and Firefox 2 Features

A web browser is software that allows the user to view certain types of Internet files in an interactive environment. Figure 2.1 shows the Deitel Home Page using Internet Explorer 7 web browser, and Fig. 2.2 uses Firefox 2. The **URL (Uniform Resource Locator)** http://www.deitel.com is found in the **Address** bar in IE7, and the **Location** bar in FF2. The URL specifies the address (i.e., location) of the web page displayed in the browser window. Each web page on the Internet is associated with a unique URL. URLs usually begin with http://, which stands for **Hypertext Transfer Protocol (HTTP)**, the standard protocol (or set of communication rules) for transferring web documents over the Inter- net. URLs of websites that handle private information, such as credit card numbers, often

2.3 Internet Explorer 7 and Firefox 2 Features **31**

**Fig. 2.1** | Deitel® website in Internet Explorer 7.

**Fig. 2.2** | Deitel® website in Firefox 2.

begin with https://, the abbreviation for **Hypertext Transfer Protocol over Secure Sockets Layer (HTTPS)**, the standard for transferring encrypted data on the web.

There are several techniques for navigating between URLs. You can click the **Address** field and type a web page’s URL, then press _Enter_ or click **Go** (in IE7, this is the same button as **Refresh**) to request the web page located at that URL. For example, to visit Yahoo!’s website, type www.yahoo.com in the **Address** bar and press the _Enter_ key. Clicking **Refresh** loads the latest version of the web page from the current website. IE7 and FF2, as well as most other popular browsers, add the http:// prefix to the website name because HTTP is the default protocol used for the web.

**_Hyperlinks_**
Another way to navigate the web is via visual elements on web pages called **hyperlinks** that, when clicked, load a specified web document. Both images and text may be hyperlinked. When the mouse pointer hovers over a hyperlink, the default arrow pointer changes into a hand with the index finger pointing upward. Often hyperlinked text appears underlined and as in different color from regular text in a web page. Originally used as a publishing tool for scientific research, hyperlinks are widely used to reference sources, or sites that have more information on a particular topic. The paths created by hyperlinking create the effect of the “web.”

Hyperlinks can reference other web pages, e-mail addresses, files and more. If a hyper- link’s URL is in the form mailto:_emailAddress_, clicking the link loads your default e-mail program and opens a **message window** addressed to the specified e-mail address. Note that these hyperlinks are generally displayed on the screen as just the e-mail address or the recipient’s name.

If a hyperlink references a file that the browser is incapable of displaying, the browser prepares to **download** the file, and generally prompts the user for information about how the file should be stored. When a file is downloaded, it is copied onto the user’s computer. Programs, documents, images and sound files are all examples of downloadable files.

**_Tabbed Browsing_**
Many browsers, including IE7 and FF2, provide **tabbed browsing**. Holding down the _Ctrl_ key and pressing the letter _T_ while in the IE7 or FF2 browser opens another tab in the same window, allowing the user to browse multiple pages without cluttering the desktop with many windows. [_Note:_ For Mac users, all references to the _Ctrl_ key in this chapter’s shortcuts should be replaced with the _Command_ key.\] Also, pressing _Ctrl_ while clicking a link will open the requested page in a new tab. Clicking on the tabs switches between the different pages in the browser, and web pages are then accessed normally. Using tabs is an excellent way to keep the browser organized when viewing multiple pages at once.

**_Using the History Feature_**
IE7 and FF2 maintain a **History** list of previously visited URLs in chronological order. This feature allows users to return to recently visited websites easily. The history feature can be accessed several different ways. The simplest and most frequently used method is to click the **Forward** and **Back** buttons located at the top of the browser window (see Fig. 2.1). The **Back** button reloads into the browser the page you last visited. Assuming that you used the **Back** button to view previously visited pages, the **Forward** button would load the next URL from the history into the browser. The keyboard shortcut for **Forward** is _<Alt_\> and the _Right Arrow_ key or just _Shift_ and _Backspace_, and the shortcut for **Back** is _<Alt_\> and the _Left Arrow_ key or simply _Backspace_.

In IE7, the user can view the last and next nine web pages visited and the current page by clicking the down arrows immediately to the right of the **Forward** button; the user can then request one of the recently viewed pages by clicking the title of the page in the drop- down list. In FF2, there are separate menus to the right of both the **Forward** and the **Back** buttons. Each displays the previous and following fifteen pages in the history, respectively. Note that these methods only display history results from the browser’s current **session**, which is the period when the browser remains open. In IE7 and FF2, there is a menu to the right of the address bar which displays a longer but more basic history of visited sites (it does not include any URLs accessed through hyperlinks), including websites that were visited in previous sessions. Another way to display sites from a previous session is to use **History**.

Selecting **History** from the down-arrow menu in IE7, or clicking the **History** menu, then the **Show In Sidebar** option in FF2, divides the browser window into two sections: the **History** window (on the left) and the content window (Figs. 2.3–2.4). In IE7, clicking the yellow star icon in the upper left of the window, then selecting the **History** option, dis- plays a similar menu. By default, the **History** window lists the URLs visited in the past twenty days in IE7 and nine days in FF2.

**Fig. 2.3** | The **History** menu in Internet Explorer 7.

**Fig. 2.4** | The **History** menu in Firefox 2.

The **History** window contains heading levels ordered chronologically. Within each time frame (e.g., **Today**) headings are alphabetized by website name (although the organi- zation can be changed clicking the **History** drop-down menu in IE7 or the **View** drop-down menu of FF2, both located in the **History** window). This window is useful for finding pre- viously visited websites without having to remember the exact URL. Selecting a URL from the **History** window loads the web page into the content window.

**_AutoComplete_**
URLs from the history can be displayed in a drop-down list when a user types a URL into the **Address** bar. This feature is called **AutoComplete**. Any URL from this drop-down list can be selected with the mouse to load the web page at that URL into the browser (Fig. 2.5).

**_Off-Line Browsing_**
For some users, such as those with dial-up connections, maintaining a connection for long periods of time may not be practical. For this reason, web pages can be saved directly to the computer’s hard drive for **off-line** browsing (i.e., browsing while not connected to the Internet). Select **Save As…** in IE7, or **Save Page As…** in FF2, both from the **File** menu to save a web page and all its components, including the images. [_Note:_ To display the **File** menu in IE7, press the _Alt_ key.\] This option is also available under the **Page** menu in IE7 (Fig. 2.1). Individual images from a website can also be saved by clicking the image with the right mouse button and selecting **Save Picture As…** (IE7) **or Save Image As...** (FF2) from the displayed **context menu** (Fig. 2.6).

**Fig. 2.5** | AutoComplete suggests possible URLs when given a partial address.

**Fig. 2.6** | Saving a picture from a website.

**_Downloads_**
As mentioned earlier, files from the Internet may be copied to a computer’s hard drive by a process called **downloading**. This section discusses the types of documents commonly downloaded from the Internet and techniques for downloading them.[_Note:_ You should always be cautious when downloading files from the Internet, as they may contain viruses. Only download from sites that you trust.\]

Some common Internet downloads are **applications** (i.e., software that performs spe- cific functions, such as word processing), **plug-ins** and **extensions**. Plug-ins are specialized pieces of software that help the browser support additional content types. An example of an IE7 and FF2 plug-in is the **Acrobat Reader** from **Adobe, Inc.** (www.adobe.com/ products/acrobat/readstep2.html), which allows users to view **PDF (Portable Docu-ment Format)** documents that otherwise cannot be rendered by the browser. Another popular plug-in allows the browser to render **Flash** content, which adds audio, video and animation effects to a website. To view sites enabled with Flash, download the Adobe Flash Player plug-in at www.adobe.com/products/flashplayer. Microsoft’s rich media plug-in, **Silverlight**, is available for download at silverlight.net/GetStarted. (Both Flash and Silverlight are discussed in much greater depth in Chapters 16, 17 and 19). Nor- mally the browser prompts the user to download a plug-in when one is needed. Plug-ins may also be downloaded from CNET (www.download.com). This site has a large, search- able index and database of many plug-in programs available for download.

Extensions are add-ons that enhance the preexisting functionality of the browser. Examples of extensions include blog editors, universal uploaders and various translation dictionaries and tools. Many IE7 add-ons can be found at www.ieaddons.com, and FF2 add-ons can be browsed and downloaded at https://addons.mozilla.org.

**_Viewing Source Code_**
Clicking on the **View** menu followed by the **Source** option in IE7 and **Page Source** in FF2 allows you to view the **source code**, or the original code written to create the web page you are viewing. Generally, source code is easy for humans to read and interpret, and allows the viewer to understand how the programmer created the page. For example, if an ele- ment of a web page does not display properly, examining the source code can help to in- form the user what the programmer was trying to do. Examining source code is a useful tool for debugging your own code, or for learning how web developers create some of the elements you see on the web.

## Customizing Browser Settings

Browsers have many settings that determine how sites are displayed, how security measures are applied and how outputs are rendered. Most of these settings are located in the **Internet Options** dialog (Fig. 2.7) in the **Tools** menu of IE7, and in **Options** under the **Tools** menu in FF2 in Windows (Fig. 2.8) \[_Note:_ For Firefox on a Mac, this is called the **Preferences** menu.\]. The default settings are usually adequate for normal browsing, but these settings can be customized to suit each user’s preferences.

Some privacy settings for IE7 and FF2 can be set under the **Privacy** tab. In IE7 there are six levels of privacy. The most lenient level permits the downloading of **cookies** (text files that are placed on the computer by websites to retain or gather information about the user); the most strict level blocks all cookies from all websites and constantly updates a report to the user about browsing privacy. Using this level may prevent certain websites from working correctly. In FF2 the **Privacy** tab displays options about how data is remem- bered in the system and when cookies should be accepted.

Security options for both browsers can be found under the **Security** tab. The browsers’ options are significantly different, but both allow you to specify how much information you want to hide from unfamiliar sites, as well as how much of the site’s content you would like to block from your own computer. Both browsers allow you to distinguish between trusted sites and the rest of the web, and to browse safe sites with lower security settings.

A personal home page can be specified under the **General** tab in IE7 and **Main** in FF2. The home page is the web page that loads when the browser is first opened and appears when the **Home** button at the top of the browser window is clicked (Figs. 2.1–2.2).

**Fig. 2.7** | **Internet Options** in Internet Explorer 7.

History options also may be adjusted in this category. By clicking the **Settings** button in the **Browsing history** section of the **General** tab in IE7, or the **Network** option in the **Advanced** tab of FF2, the amount of disk space to be reserved for the web page **cache** can be set. The cache is an area of temporary storage that a browser designates for saving web pages for rapid future access. When a page is viewed that has been visited recently, IE7 and FF2 check whether they already have some elements on that page (such as images) saved in the cache, to reduce download time. Having a large cache can considerably speed up web browsing, whereas having a small cache saves disk space. Caching can sometimes cause problems, because Internet Explorer and Firefox do not always check to ensure that a cached page is the same as the latest version residing on the web server. Holding down the _Ctrl_ key and pressing _F5_ in either browser, or pressing _Ctrl_, _Shift_ and _R_ in FF2, remedies this problem by forcing the browser to retrieve the latest version of the web page from the website. Once the **Internet Options** are set, click **OK** in both browsers.

## Searching the Internet

The Internet provides a wealth of information on virtually any topic. The sheer volume of information on the web can make it difficult for users to find specific information. To help users locate information, many websites provide **search engines** that explore the Internet and maintain searchable records containing information about website content. This sec- tion explains how search engines work and discusses two types of search engines.

**Fig. 2.8** | **Options** in Firefox 2.

Search engines such as Google (www.google.com), Yahoo! (www.yahoo.com), MSN (www.msn.com), AltaVista (www.altavista.com) and Ask.com (www.ask.com) store infor- mation in data repositories called **databases** that facilitate quick information retrieval. When the user enters a word or phrase, the search engine returns a list of hyperlinks to sites that satisfy the search criteria. Each search engine site has different criteria for nar- rowing searches, such as publishing date, language and relevance. Using multiple search engines may provide the best results in finding the desired content quickly. Sites such as MetaCrawler (www.metacrawler.com) use **metasearch engines**, which do not maintain databases. Instead, they send the search criteria to other search engines and aggregate the results. Many web browsers, including IE7 and FF2 (Figs. 2.9–2.10.), have a built-in search box placed in the window that can be used to browse the web. In both browsers, the user can choose which search engine to use by clicking the down-arrow menu (Fig. 2.9–2.10).

Search engines can also be used to help resolve programming errors. There are many websites that contain documentation about specific functions, how to use them correctly and related common errors. Putting a function name or error message into a search engine can often help a programmer discover where a mistake may have been made in the code. Also, websites such as www.thescripts.com allow users to post specific programming questions that can be answered by other programmers. Other websites like this one, as well as communities for specific languages, can be found using search engines.

**Fig. 2.9** | Searching the Internet with Internet Explorer 7.

**Fig. 2.10** | Searching the Internet with Firefox 2.

## Keeping Track of Your Favorite Sites

As users browse the web, they often visit certain sites repeatedly and may want to record their URL and title. IE7 provides a feature called **favorites** for bookmarking (keeping track of) such sites (Fig. 2.11). Any page’s URL can be added to the list of favorites using the **Favorites** menu’s **Add to Favorites…** command, or by pressing the yellow star and green plus icon in the upper left corner of the window. A **Favorites** window can also be accessed by clicking the yellow star icon on the toolbar and clicking the **Favorites** option. Favorites can be accessed at any time by selecting them with the mouse from the **Favorites** menu. Favorites can be categorized and grouped into folders in the **Organize Favorites** dialog (dis- played when **Organize Favorites…** is selected from the **Favorites** menu). These folders ap- pear as submenus in the **Favorites** menu. The **Organize Favorites** dialog also allows users to rename, delete and move favorites between folders.

FF2 has a similar feature called **bookmarks**, which can be added with the **Bookmark This Page...** option in the **Bookmark** menu and used the same way that **Favorites** are described in this section (Fig. 2.12). Most browsers have their own version of **Favorites** or **Bookmarks**.

## File Transfer Protocol (FTP)

The **File Transfer Protocol (FTP)** is a set of rules by which computers transfer data, espe- cially large files, over the Internet. An FTP site’s URL begins with ftp:// rather than http://, and can also be accessed either with the web browser or software that supports FTP. **Filezilla** is a popular, open source FTP client for Windows that functions outside a

**Fig. 2.11** | The **Favorites** menu helps organize frequently visited websites in Internet Explorer 7.

**Fig. 2.12** | The **Bookmarks** menu helps organize frequently visited websites in Firefox 2.

web browser. It can be downloaded for free from http://filezilla.sourceforge.net. FF2 also has an extension, FireFTP, that adds the functionality of an FTP client to the browser. This add-on is available at http://fireftp.mozdev.org.

When your browser is pointed to an FTP site, the contents of the specified site direc- tory appear in the window, and can be browsed as though they were files on the local com- puter. Files are downloaded by clicking their icons and following the browser’s download instructions, or by dragging the file or folder with the mouse onto the desktop or into another directory. Windows users may copy and paste the URL into the address bar of the **My Computer** window, called the Windows Explorer (Fig. 2.13), which has a particularly straightforward interface for FTP. Windows Explorer can be accessed from the **Start** menu, or by clicking the **Page** menu, then selecting **Open FTP Site in Windows Explorer** in IE7.

When accessing an FTP site, the user may or may not be prompted for login infor- mation. Many FTP sites allow **anonymous FTP access**, where any user is permitted to view and download files. If login is required, the username is set by default to _anonymous_, and the user either is prompted for an e-mail address or should put an e-mail address in the password field. The browser sends the user’s e-mail address and name to the website for tracking and information purposes. Other FTP sites contain directories with **restricted access**—only users with authorized usernames and passwords are permitted to access such directories. When a user is trying to enter a restricted-access FTP directory, a **Log On As** dialog like the one in Fig. 2.13 is displayed, prompting the user for login information.

Transferring a file from the local machine to another location on the Internet is called **uploading** and can be accomplished using the FTP protocol. Files can be transferred from the local machine (your computer) to the remote machine (server), with an FTP client. The specific instructions for each client are different, but almost all FTP clients allow you to upload, download and perform other file-managing tasks on your data. Understanding FTP is especially important for web developers, since uploading files to a web server is a necessary part of creating a website.

**Fig. 2.13** | FTP site access.

## Online Help

Web browsers are complex pieces of software with rich functionality. Although browser designers make every effort to produce user-friendly software, users still need time to fa- miliarize themselves with each web browser and its particular features. Answers to fre- quently asked questions about using the web browser are included with FF2 and IE7, as well as most other browsers. This information is accessible through the built-in help fea- ture available in the **Help** menu (Figs. 2.14–2.15).

**Fig. 2.14** | Internet Explorer 7 **Help** dialog.

**Fig. 2.15** | Firefox 2 **Help** dialog.

A good source for locating help about a specific feature is the **Contents and Index** menu item in IE7 and **Help Contents** in FF2, both accessible through the **Help** menu. IE’s help menu can also be accessed by clicking the **Help** option on the toolbar’s chevron. When these items are selected, the browser’s help dialog is displayed. In IE7, the **Contents** tab organizes the help topics by category, the **Index** tab contains an alphabetical list of **Help** topics and the **Search** tab provides capabilities for searching the help documents. The **Favorites** tab allows users to maintain a list of frequently used help topics. FF2’s **Help** window provides a search box and an expandable table of contents for browsing.

## Other Web Browsers

Besides Internet Explorer and Firefox, many other web browsers are available, including _Opera_ (www.opera.com) and _Safari_ (www.apple.com/safari). All these browsers differ in functionality, performance and features. Also, they employ different HTML layout en- gines, which determine how a web page displays in a browser. Firefox 2 uses Gecko as its layout engine, Safari uses a modified version of the KHTML layout engine and Opera and IE7 have their own engines. Gecko and KHTML are both free and open source.

Opera, as well as IE7 and FF2, is a browser designed to be accessible to all users, including those with visual or mobility impairments. Opera software also recently devel- oped a lightweight “Mini” version of the browser that runs effectively on mobile devices. Safari, originally created for Apple’s Mac OS, features an elegantly simple interface and impressive speed, especially when executing JavaScript (discussed in Chapters 6–11). Because browsers use different HTML layout engines, they may display the same web page differently. Additionally, some capabilities supported in one browser may not be sup- ported in another. The existence of different browser functionality and features makes cross-browser compatibility difficult to achieve.

## Wrap-Up

In this chapter, we described the requirements for connecting to the Internet, and we in- troduced the basic features of Microsoft’s Internet Explorer 7 and Mozilla’s Firefox 2. You learned how to customize your browsing experience to fit your personal needs, and how to exchange data safely using the Internet. We also discussed how to use search engines to find information on the web and demonstrated how to keep track of useful sites. In the next chapter, we discuss the defining characteristics of Web 2.0 and how it has changed the way that users interact with the Internet.

## Web Resources

www.deitel.com/ie7
www.deitel.com/firefox

The Deitel Internet Explorer and Firefox Resource Centers contain links to some of the best resources about these browsers on the web. There you’ll find categorized links to Internet Explorer and Firefox downloads and add-ons, keyboard shortcuts, glossaries, code compatibility issues, blogs, forums, podcasts and more. Also check out the range of tutorials on different aspects of these browsers.

**Summary**
_Section 2.1 Introduction to the Internet Explorer 7 and Firefox 2 Web Browsers_
• Web browsers are software programs that allow users to access the web’s rich multimedia content.

• The two most popular web browsers are Microsoft’s _Internet Explorer_ and Mozilla’s _Firefox_.

**Section 2.2 Connecting to the Internet**
• A computer alone is not enough to access the Internet. In addition to web browser software, the computer needs specific hardware and a connection to an Internet Service Provider.

• A modem enables a computer to connect to the Internet. A modem converts data to audio tones and transmits the data over phone lines. A network card, also called a network interface card (NIC), allows a computer to connect to the Internet through a network or a high-speed Internet connection, such as a LAN, cable modem or a Digital Subscriber Line (DSL).

• Bandwidth refers to the amount of data that can be transferred through a communications me- dium in a fixed amount of time. Different ISPs offer different types of high-speed connections, called broadband connections.

• Broadband is a category of high-bandwidth Internet service that is most often provided by cable television and telephone companies to home users.

• DSL is a broadband service that allows computers to be connected at all times to the Internet over existing phone lines, without interfering with voice services.

• Cable modems enable the computer to be connected to the Internet at all times. Cable modems transmit data over the cables that bring television to homes and businesses.

• ISDN provides Internet service over either digital or standard telephone lines. ISDN requires specialized hardware, called a terminal adapter (TA), which is usually obtained from the ISP.

• Fiber optics are a cable alternative that provide greater bandwidth and a better signal, but their popularity is limited by high cost.

**Section 2.3 Internet Explorer 7 and Firefox 2 Features**
• A URL is the address of a web page. Each web page is associated with a unique URL. URLs usually begin with http://, which stands for Hypertext Transfer Protocol (HTTP), the industry standard protocol for transferring web documents over the Internet.

• URLs of websites that handle private information, such as credit card numbers, often begin with https://, the abbreviation for Hypertext Transfer Protocol over Secure Sockets Layer (HTTPS), the standard for transferring encrypted data over the Internet.

• Several techniques are available for navigating between different URLs. A user can click the **Ad- dress** field and type a web page’s URL. The user can then press _Enter_ or click **Go** to request the web page located at that URL.

• Another way to navigate the web is via visual elements on web pages called hyperlinks that, when clicked, load a specified web document. Both images and text serve as hyperlinks.

• Hyperlinks can reference other web pages, e-mail addresses and files. If a hyperlink is a mailto:_e-mailaddress_, clicking the link loads your default e-mail program and opens a message window addressed to the specified recipient’s e-mail address.

• Tabbed browsing allows you to browse multiple pages without cluttering the desktop with many windows.

• When a file is downloaded, it is copied onto the user’s computer. Programs, documents, images and sound files are all downloadable files.

• IE7 and FF2 maintain a list of previously visited URLs in chronological order, called the history.

• The **History** window contains heading levels ordered chronologically. Within each time frame headings are alphabetized by site directory name. This window is useful for finding previously visited sites without having to remember the exact URL.

• URLs from the history are displayed in a drop-down list when a user types a URL into the **Ad- dress** bar. This feature is called AutoComplete. Any URL from this drop-down list can be select- ed with the mouse to load the web page at that URL into the browser.

• Web pages can be saved directly to the computer’s hard drive for off-line browsing. Select **Save As…** (IE7) or **Save Page As…** (FF2) from the **File** menu at the top of the browser window to save a web page and all its components.

• Individual images from a website can be saved by clicking the image with the right mouse button and selecting **Save Picture As…** (IE7) or **Save Image As…** (FF2) from the displayed context menu.

• Plug-ins are specialized pieces of software that enable the browser to support additional types of content. Normally the browser prompts the user to download a plug-in when a plug-in is needed.

• Extensions enhance the preexisting functionality of the browser.

• Clicking the **View** menu followed by the **Source** option in IE7 or **Page Source** in FF2 allows you to view the source code, or the original code written to create the web page you are viewing.

**Section 2.4 Customizing Browser Settings**
• IE7 and FF2 have many settings that determine how sites are displayed, how security measures are applied and how outputs are rendered. Many of these can be accessed through the **Tools** menu, then **Internet Options** in IE7, or **Options** in FF2.

• The privacy level for IE7 can be set under the **Privacy** tab of the **Internet Options** dialog. There are six levels of privacy. The most lenient level permits downloading and cookies; the strictest level renders a constant flow of alerts and alarms about browsing security and might prevent certain websites from working correctly.

• Privacy settings for FF2 can be found under the **Privacy** tab of **Options**, which displays options about how data is remembered in the system and when cookies should be accepted.

• Other security options can be found for both browsers under the **Security** tab.

• A personal home page can be specified under the **General** tab of the **Internet Options** dialog in IE7, and **Main** under **Options** in FF2. The home page is the web page that loads when the browser is first opened and appears when the **Home** button at the top of the browser window is clicked.

• History and cache options may be adjusted in the **General** tab of the **Internet Options** dialog by clicking the **Settings…** button in IE7, and the cache can be adjusted in the **Network** option in the **Advanced** tab of FF2. The amount of disk space to be reserved for web-page cache can be set here.

**Section 2.5 Searching the Internet**
• Search engines explore the Internet and maintain searchable records containing information about websites.

• Metasearch engines do not maintain databases. Instead, they send the search criteria to other search engines and aggregate the results. IE7 and FF2 have built-in search boxes next to the **Ad- dress** bar with several different search engines which can be selected by the user.

• Search engines are helpful tools for finding solutions to programming problems.

**Section 2.6 Keeping Track of Your Favorite Sites**
• As users browse the web, they often visit certain sites repeatedly. Internet Explorer 7 provides a feature called **Favorites** for bookmarking such sites, and Firefox 2 has a similar tool called **Book-marks**. Sites can be remembered and organized under the **Favorites** menu in IE7 and the **Book- marks** menu in FF2.

**Section 2.7 File Transfer Protocol (FTP)**
• FTP (file transfer protocol) is an older protocol for transferring information, especially large files,over the Internet. An FTP site’s URL begins with ftp:// rather than http://, and can be access- ed through the browser or by any software that supports FTP.

• FTP sites with anonymous access allow any user access. Many FTP sites have restricted access; only users with authorized usernames and passwords are permitted to access such sites.

• Transferring a file from the local machine to another location on the Internet is called uploading and can be accomplished using the FTP protocol.

**Section 2.8 Online Help**
• The **Help** menu in the browsers allows the user to search or browse for answers to common questions and solutions to problems with the software.

**Section 2.9 Other Web Browsers**
• Many other browsers are available for download, each with its own set of features and advantages.
Two of these browsers are Opera and Safari.

---
title: "File Transfer Protocol (FTP)"
weight: 7
---

# File Transfer Protocol (FTP)

The **File Transfer Protocol (FTP)** is a set of rules by which computers transfer data, espe- cially large files, over the Internet. An FTP site’s URL begins with ftp:// rather than http://, and can also be accessed either with the web browser or software that supports FTP. **Filezilla** is a popular, open source FTP client for Windows that functions outside a

**Fig. 2.11** | The **Favorites** menu helps organize frequently visited websites in Internet Explorer 7.

**Fig. 2.12** | The **Bookmarks** menu helps organize frequently visited websites in Firefox 2.

web browser. It can be downloaded for free from http://filezilla.sourceforge.net. FF2 also has an extension, FireFTP, that adds the functionality of an FTP client to the browser. This add-on is available at http://fireftp.mozdev.org.

When your browser is pointed to an FTP site, the contents of the specified site direc- tory appear in the window, and can be browsed as though they were files on the local com- puter. Files are downloaded by clicking their icons and following the browser’s download instructions, or by dragging the file or folder with the mouse onto the desktop or into another directory. Windows users may copy and paste the URL into the address bar of the **My Computer** window, called the Windows Explorer (Fig. 2.13), which has a particularly straightforward interface for FTP. Windows Explorer can be accessed from the **Start** menu, or by clicking the **Page** menu, then selecting **Open FTP Site in Windows Explorer** in IE7.

When accessing an FTP site, the user may or may not be prompted for login infor- mation. Many FTP sites allow **anonymous FTP access**, where any user is permitted to view and download files. If login is required, the username is set by default to _anonymous_, and the user either is prompted for an e-mail address or should put an e-mail address in the password field. The browser sends the user’s e-mail address and name to the website for tracking and information purposes. Other FTP sites contain directories with **restricted access**—only users with authorized usernames and passwords are permitted to access such directories. When a user is trying to enter a restricted-access FTP directory, a **Log On As** dialog like the one in Fig. 2.13 is displayed, prompting the user for login information.

Transferring a file from the local machine to another location on the Internet is called **uploading** and can be accomplished using the FTP protocol. Files can be transferred from the local machine (your computer) to the remote machine (server), with an FTP client. The specific instructions for each client are different, but almost all FTP clients allow you to upload, download and perform other file-managing tasks on your data. Understanding FTP is especially important for web developers, since uploading files to a web server is a necessary part of creating a website.

**Fig. 2.13** | FTP site access.
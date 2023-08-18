---
title: 'Introduction'
weight: 1
---

**PART**

_Introduction_

_The renaissance of interest in the web that we call Web 2.0 has reached the mainstream._

—Tim O’Reilly

1  

1 Introduction to Computers and the Internet

**O B J E C T I V E S** In this chapter you will learn:

■ Basic computing concepts.

■ The different types of programming languages.

■ The evolution of the Internet and the World Wide Web.

■ What Web 2.0 is and why it’s having such an impact among Internet-based and traditional businesses.

■ What Rich Internet Applications (RIAs) are and the key software technologies used to build RIAs.

**_The renaissance of interest in the web that we call Web 2.0 has reached the mainstream._ —Tim O’Reilly**

**_Billions of queries stream across the servers of these Internet services—the aggregate thoughtstream of humankind, online._ —John Battelle, _The Search_**

**_People are using the web to build things they have not built or written or drawn or communicated anywhere else._ —Tim Berners-Lee**

**_Some people take what we contribute and extend it and contribute it back \[to Ruby on Rails\]. That's really the basic open source success story._ —David Heinemeier Hansson, interviewed by Chris Karr at www.Chicagoist.com**  

1.1 Introduction **3 O**

**u tl**

**in e**

**1.1 Introduction** Welcome to Internet and World Wide Web programming and Web 2.0! And welcome to a walkthrough of the Web 2.0 phenomenon from the technical, business and social per- spectives. We’ve worked hard to create what we hope you’ll find to be an informative, en- tertaining and challenging learning experience. As you read this book, you may want to refer to www.deitel.com for updates and additional information.

The technologies you’ll learn in this book are fun for novices, and simultaneously are appropriate for experienced professionals who build substantial information systems. _Internet & World Wide Web How to Program, Fourth Edition_, is designed to be an effective learning tool for each of these audiences. How can one book appeal to both groups? The answer is that the core of this book emphasizes achieving program clarity through the proven techniques of structured programming, object-based programming and object-ori- ented programming. Beginners will learn programming the right way from the beginning. Experienced programmers will find “industrial-strength” code examples. We have attempted to write in a clear and straightforward manner using best practices.

Perhaps most important, the book presents hundreds of working examples and shows the outputs produced when these examples are rendered in browsers or run on computers. We present all concepts in the context of complete working programs. We call this the “live-code approach.” These examples are available for download from our website, www.deitel.com/books/iw3htp4/.

The early chapters introduce computer fundamentals, the Internet and the web. We show how to use software for browsing the web. We present a carefully paced introduction to “client-side” web programming, using the popular JavaScript language and the closely related technologies of XHTML (Extensible HyperText Markup Language), CSS (Cas-

**1.1** Introduction **1.2** What Is a Computer? **1.3** Computer Organization **1.4** Machine Languages, Assembly Languages and High-Level Languages **1.5** History of the Internet and World Wide Web **1.6** World Wide Web Consortium (W3C) **1.7** Web 2.0 **1.8** Personal, Distributed and Client/Server Computing **1.9** Hardware Trends

**1.10** Key Software Trend: Object Technology **1.11** JavaScript: Object-Based Scripting for the Web **1.12** Browser Portability **1.13** C, C++ and Java **1.14** BASIC, Visual Basic, Visual C++, C# and .NET **1.15** Software Technologies **1.16** Notes about _Internet & World Wide Web How to Program, 4/e_ **1.17** Web Resources

Summary | Terminology | Self-Review Exercises | Answers to Self-Review Exercises | Exercises  

**4** Chapter 1 Introduction to Computers and the Internet

cading Style Sheets) and the DOM (Document Object Model). We often refer to “pro- gramming” as scripting—for reasons that will soon become clear. Novices will find that the material in the JavaScript chapters presents a solid foundation for the deeper treatment of scripting in the Adobe Flash, Adobe Flex, Microsoft Silverlight, PHP and Ruby on Rails chapters later in the book. Experienced programmers will read the early chapters quickly and find the treatment of scripting in the later chapters to be rigorous and challenging.

Most people are familiar with the exciting things that computers can do. Using this textbook, you’ll learn how to command computers to perform specific tasks. **Software** (i.e., the instructions you write to command the computer to perform **actions** and make **decisions**) controls computers (often referred to as **hardware**). JavaScript and PHP are among today’s most popular software development languages for web-based applications.

Computer use is increasing in almost every field of endeavor. In an era of steadily rising costs, computing costs have been decreasing dramatically because of rapid develop- ments in both hardware and software technologies. Computers that filled large rooms and cost millions of dollars just two decades ago can now be inscribed on the surfaces of silicon chips smaller than fingernails, costing perhaps a few dollars each. Silicon is one of the most abundant materials on earth—it is an ingredient in common sand. Silicon-chip tech- nology has made computing so economical that more than a billion general-purpose com- puters worldwide are now helping people in business, industry, government, education and in their personal lives. And billions more computers are embedded in cell phones, appliances, automobiles, security systems, game systems and so much more.

Through the early 1990s most students in introductory programming courses learned only the methodology called structured programming. As you study the various scripting languages in this book, you’ll learn both structured programming and the newer method- ology called object-based programming. After this, you’ll be well prepared to study today’s popular full-scale programming languages such as C++, Java, C# and Visual Basic .NET and to learn the even more powerful programming methodology of object-oriented pro- gramming. We believe that object-oriented programming will be the key programming methodology for at least several decades.

Today’s users are accustomed to applications with rich graphical user interfaces (GUIs), such as those used on Apple’s Mac OS X systems, Microsoft Windows systems, various Linux systems and more. Users want applications that employ the multimedia capabilities of graphics, images, animation, audio and video. They want applications that can run on the Internet and the web and communicate with other applications. Users want to apply database technologies for storing and manipulating their business and personal data. They want applications that are not limited to the desktop or even to some local computer network, but that can integrate Internet and web components, and remote data- bases. Programmers want to use all these capabilities in a truly portable manner so that applications will run without modification on a variety of **platforms** (i.e., different types of computers running different operating systems).

In this book, we present a number of powerful software technologies that will enable you to build these kinds of systems. Early in the book we concentrate on using technolo- gies such as the Extensible HyperText Markup Language (XHTML), JavaScript, CSS, Flash, Flex, Silverlight, Dreamweaver and Extensible Markup Language (XML) to build the portions of web-based applications that reside on the **client side** (i.e., the portions of applications that typically run in your web browsers such as Mozilla’s Firefox 2 or  

1.1 Introduction **5**

Microsoft’s Internet Explorer 7). Later in the book we concentrate on using technologies such as web servers, databases (integrated collections of data), PHP, Ruby on Rails, ASP.NET, ASP.NET Ajax and JavaServer Faces (JSF) to build the **server side** of web- based applications. These portions of applications typically run on “heavy-duty” computer systems on which organizations’ business-critical websites reside. By mastering the tech- nologies in this book, you’ll be able to build substantial web-based, client/server, database- intensive, “multitier” applications. We begin with a discussion of computer hardware and software fundamentals. If you are generally familiar with computers, the Internet and the web, you may want to skip some or all of this chapter.

To keep up to date with Internet and web programming developments, and the latest information on _Internet & World Wide Web How to Program, 4/e_, at Deitel & Associates, please register for our free e-mail newsletter, _the Deitel® Buzz Online,_ at

www.deitel.com/newsletter/subscribe.html

Please check out our growing list of Internet and web programming, and Internet business Resource Centers at

www.deitel.com/resourcecenters.html

Each week, we announce our latest Resource Centers in the newsletter. Figure 2 in the Preface includes a complete list of Deitel Resource Centers at the time of this writing. The Resource Centers include links to, and descriptions of, key tutorials, demos, free software tools, articles, e-books, white papers, videos, podcasts, blogs, RSS feeds and more that will help you deepen your knowledge of most of the subjects we discuss in this book.

Errata and updates for the book are posted at

www.deitel.com/books/iw3htp4/

You’re embarking on a challenging and rewarding path. As you proceed, if you have any questions, please send e-mail to

deitel@deitel.com

We’ll respond promptly. We hope that you’ll enjoy learning with _Internet & World Wide Web How to Program, Fourth Edition_.

**_Architecture of_ Internet & World Wide Web How to Program, 4/e** This book focuses on Web 2.0 and Rich Internet Application (RIA) development. Our goal is to develop webtop applications that have the responsiveness, look and feel of tradi- tional desktop applications. In the interim since the previous edition of this book, Deitel has evolved into a development organization, while maintaining its focus on programming languages textbook and professional book authoring, and corporate training. We’re build- ing the infrastructure for the Internet businesses we’re designing and developing as part of our Web 2.0 Internet Business Initiative. This edition has been enhanced with discussions of many practical issues we’ve encountered in developing that infrastructure.

Figure 1.1 shows the architecture of _Internet & World Wide Web How to Program, 4/e._ The book is divided into several parts. The first part, Chapters 1–3, provides an introduc- tion to the Internet and the web, web browsers and Web 2.0. These chapters provide a foundation for understanding Web 2.0 and Rich Internet Application development. Chapter 1 introduces hardware, software, communications and Web 2.0 topics. If you are  

**6** Chapter 1 Introduction to Computers and the Internet

a serious web developer, you’ll want to test your web applications across many browsers and platforms. The examples for this book target Microsoft’s Internet Explorer 7 (IE7) and Mozilla’s Firefox 2 (FF2) browsers, each of which is introduced in Chapter 2. The examples execute correctly in both browsers. Many of the examples will also work in other browsers such as Opera and Safari. Many of the examples will not work on earlier browsers. Microsoft Windows users should upgrade to IE7 and install FF2; readers with other operating systems should install Firefox 2. Web browsers—a crucial component of web applications—are free, as are most of the software technologies we present in this book. Chapter 3 discusses Web 2.0 from technical, business and social perspectives.

The second part of the book, Chapters 4–15, presents a 12-chapter treatment of Ajax component technologies that concludes with Chapter 15’s treatment of Ajax develop- ment. Ajax is not a new technology—we’ve been writing about all but one of its compo- nent technologies since the first edition of this book in 1999, and many of the technologies existed before that. However, Ajax is one of the key technologies of Web 2.0 and RIAs. Several later chapters in the book demonstrate technologies that encapsulate Ajax func- tionality to help make it operate across a wide variety of browsers and browser versions.

The third part of the book, Chapters 15–28, focuses on both the client and server sides of the GUI and graphical part of RIA development. Here we cover client-side tech- nologies such as Adobe Flash, Adobe Flex and Microsoft Silverlight that use, or can be combined with, Ajax or Ajax-like capabilities to develop RIAs. Each of these technologies

o

**Fig. 1.1** | Architecture of _Internet & World Wide Web How to Program, 4/e_.  

1.2 What Is a Computer? **7**

also can consume web services. Next, we present the server side of web application devel- opment with discussions of web servers (IIS and Apache), databases, several server-side scripting languages such as PHP and Ruby on Rails, and several server-side frameworks such as ASP.NET 2.0 and JavaServer Faces. We complete our server-side discussion with a chapter on building web services.

You may have noticed that Chapter 15, Ajax-Enabled Rich Internet Applications, overlaps the second and third parts of the book. Chapter 15 serves as a bridge from “raw” Ajax development to sophisticated RIA development.

**1.2 What Is a Computer?** A **computer** is a device that can perform computations and make logical decisions billions of times faster than human beings can. For example, many of today’s personal computers can perform several billion additions per second. A person could operate a desk calculator for an entire lifetime and still not complete as many calculations as a powerful personal computer can perform in one second! (Points to ponder: How would you know whether the person added the numbers correctly? How would you know whether the computer added the numbers correctly?) Today’s fastest **supercomputers** can perform trillions of ad- ditions per second!

Computers process data under the control of sets of instructions called **computer pro- grams**_._ These programs guide the computer through orderly sets of actions specified by people called **computer programmers**_._

A computer consists of various devices referred to as hardware (e.g., the keyboard, screen, mouse, hard disk, memory, DVD drives and processing units)_._ The programs that run on a computer are referred to as software_._ Hardware costs have been declining dramat- ically in recent years, to the point that personal computers have become a commodity. In this book, you’ll learn proven methods that are reducing software development costs— object-oriented programming and object-oriented design.

**1.3 Computer Organization** Regardless of differences in physical appearance, virtually every computer may be envi- sioned as divided into six **logical units** or sections:

**1\. Input unit**. This is the “receiving” section of the computer. It obtains informa- tion (data and computer programs) from **input devices** and places this informa- tion at the disposal of the other units for processing. Most information is entered into computers through keyboards and mouse devices. Information also can be entered in many other ways, including by speaking to your computer, scanning images, uploading digital photos and videos, and receiving information from a network, such as the Internet.

**2\. Output unit**. This is the “shipping” section of the computer. It takes information that the computer has processed and places it on various **output devices** to make the information available for use outside the computer. Most information output from computers today is displayed on screens, printed on paper or used to control other devices. Computers also can output their information to networks, such as the Internet.  

**8** Chapter 1 Introduction to Computers and the Internet

**3\. Memory unit**. This is the rapid-access, relatively low-capacity “warehouse” section of the computer. It stores computer programs while they are being executed. It re- tains information that has been entered through the input unit, so that it will be immediately available for processing when needed. The memory unit also retains processed information until it can be placed on output devices by the output unit. Information in the memory unit is typically lost when the computer’s power is turned off. The memory unit is often called either **memory** or **primary memory**_._

**4\. Arithmetic and logic unit (ALU)**. This is the “manufacturing” section of the computer. It is responsible for performing calculations, such as addition, subtrac- tion, multiplication and division. It contains the decision mechanisms that allow the computer, for example, to compare two items from the memory unit to de- termine whether they are equal, or if one is larger than the other.

**5\. Central processing unit (CPU)**. This is the computer’s “administrative” section. It coordinates and supervises the other sections’ operations. The CPU tells the in- put unit when information should be read into the memory unit, tells the ALU when information from the memory unit should be used in calculations and tells the output unit when to send information from the memory unit to certain output devices. Many of today’s computers have multiple CPUs and, hence, can perform many operations simultaneously—such computers are called **multiprocessors**.

**6\. Secondary storage unit**. This is the computer’s long-term, high-capacity “ware- housing” section. Programs or data not actively being used by the other units nor- mally are placed on secondary storage devices, such as your hard drive, until they are needed, possibly hours, days, months or even years later. Information in sec- ondary storage takes much longer to access than information in primary memory, but the cost per unit of secondary storage is much less than that of primary mem- ory. Other secondary storage devices include CDs and DVDs, which can hold hundreds of millions and billions of characters, respectively.

**1.4 Machine Languages, Assembly Languages and High-Level Languages** Programmers write instructions in various programming languages, some directly under- standable by computers and others requiring intermediate **translation** steps. Hundreds of computer languages are in use today. These may be divided into three general types:

**1\.** Machine languages

**2\.** Assembly languages

**3\.** High-level languages

Any computer can directly understand only its own **machine language**_._ Machine lan- guage is the “natural language” of a computer and as such is defined by its hardware design. \[_Note:_ Machine language is often referred to as **object code**. This term predates “object- oriented programming.” These two uses of “object” are unrelated.\] Machine languages generally consist of strings of numbers (ultimately reduced to 1s and 0s) that instruct com- puters to perform their most elementary operations one at a time. Machine languages are **machine dependent** (i.e., a particular machine language can be used on only one type of computer). Such languages are cumbersome for humans, as illustrated by the following  

1.4 Machine Languages, Assembly Languages and High-Level Languages **9**

section of an early machine-language program that adds overtime pay to base pay and stores the result in gross pay:

+1300042774 +1400593419 +1200274027

Machine-language programming was simply too slow, tedious and error prone for most programmers. Instead of using the strings of numbers that computers could directly understand, programmers began using English-like abbreviations to represent elementary operations. These abbreviations formed the basis of **assembly languages**_._ **Translator pro- grams** called **assemblers** were developed to convert early assembly-language programs to machine language at computer speeds. The following section of an assembly-language pro- gram also adds overtime pay to base pay and stores the result in gross pay:

load basepay add overpay store grosspay

Although such code is clearer to humans, it is incomprehensible to computers until trans- lated to machine language.

Computer usage increased rapidly with the advent of assembly languages, but pro- grammers still had to use many instructions to accomplish even the simplest tasks. To speed the programming process, **high-level languages** were developed in which single statements could be written to accomplish substantial tasks. Translator programs called **compilers** convert high-level language programs into machine language_._ High-level lan- guages allow programmers to write instructions that look almost like everyday English and contain commonly used mathematical notations. A payroll program written in a high-level language might contain a statement such as

grossPay = basePay + overTimePay;

From your standpoint, obviously, high-level languages are preferable to machine and assembly language. C, C++, Microsoft’s .NET languages (e.g., Visual Basic, Visual C++ and Visual C#) and Java are among the most widely used high-level programming lan- guages. All of the Internet and web application development languages that you’ll learn in this book are high-level languages.

The process of compiling a high-level language program into machine language can take a considerable amount of computer time. **Interpreter** programs were developed to execute high-level language programs directly, although much more slowly. In this book, we study several key programming languages, including JavaScript, ActionScript, PHP and Ruby on Rails—each of these **scripting languages** is processed by interpreters. We also study markup languages such as XHTML and XML, which can be processed by inter- preted scripting languages. You’ll see that interpreters have played an especially important role in helping scripting languages and markup languages achieve their goal of portability across a variety of platforms.

**Performance Tip 1.1** _Interpreters have an advantage over compilers in scripting. An interpreted program can begin executing as soon as it is downloaded to the client’s machine, without the need to be compiled before it can execute. On the downside, scripts generally run much slower than compiled code._ 1.1  

**10** Chapter 1 Introduction to Computers and the Internet

**Portability Tip 1.1** _Interpreted languages are more portable than compiled languages. Interpreters can be imple- mented for each platform on which the interpreted languages need to execute._ 1.1

**Software Engineering Observation 1.1** _Interpreted languages are more dynamic than compiled languages. For example, server-side applications can generate code in response to user interactions, and that code can then be interpreted in a browser._ 1.1

**1.5 History of the Internet and World Wide Web** In the late 1960s, one of the authors (HMD) was a graduate student at MIT. His research at MIT’s Project MAC (now the Laboratory for Computer Science—the home of the World Wide Web Consortium) was funded by ARPA—the Advanced Research Projects Agency of the Department of Defense. ARPA sponsored a conference at which several doz- en ARPA-funded graduate students were brought together at the University of Illinois at Urbana-Champaign to meet and share ideas. During this conference, ARPA rolled out the blueprints for networking the main computer systems of about a dozen ARPA-funded uni- versities and research institutions. They were to be connected with communications lines operating at a then-stunning 56 Kbps (i.e., 56,000 bits per second)—this at a time when most people (of the few who could) were connecting over telephone lines to computers at a rate of 110 bits per second. There was great excitement at the conference. Researchers at Harvard talked about communicating with the Univac 1108 “supercomputer” at the Uni- versity of Utah to handle calculations related to their computer graphics research. Many other intriguing possibilities were raised. Academic research about to take a giant leap for- ward. Shortly after this conference, ARPA proceeded to implement the **ARPANET**, which eventually evolved into today’s **Internet**.

Things worked out differently from what was originally planned. Rather than enabling researchers to share each other’s computers, it rapidly became clear that enabling researchers to communicate quickly and easily via what became known as **electronic mail** (**e-mail**, for short) was the key early benefit of the ARPANET. This is true even today on the Internet, as e-mail facilitates communications of all kinds among a billion people worldwide.

One of the primary goals for ARPANET was to allow multiple users to send and receive information simultaneously over the same communications paths (e.g., phone lines). The network operated with a technique called **packet switching**, in which digital data was sent in small bundles called **packets**. The packets contained address, error-control and sequencing information. The address information allowed packets to be routed to their destinations. The sequencing information helped in reassembling the packets— which, because of complex routing mechanisms, could actually arrive out of order—into their original order for presentation to the recipient. Packets from different senders were intermixed on the same lines. This packet-switching technique greatly reduced transmis- sion costs, as compared with the cost of dedicated communications lines.

The network was designed to operate without centralized control. If a portion of the network failed, the remaining working portions would still route packets from senders to receivers over alternative paths for reliability.  

1.6 World Wide Web Consortium (W3C) **11**

The protocol for communicating over the ARPANET became known as **TCP**—the **Transmission Control Protocol**. TCP ensured that messages were properly routed from sender to receiver and that they arrived intact.

As the Internet evolved, organizations worldwide were implementing their own net- works for both intraorganization (i.e., within the organization) and interorganization (i.e., between organizations) communications. A wide variety of networking hardware and soft- ware appeared. One challenge was to get these different networks to communicate. ARPA accomplished this with the development of **IP**—the **Internet Protocol**, truly creating a **“network of networks,”** the current architecture of the Internet. The combined set of pro- tocols is now commonly called **TCP/IP**.

Initially, Internet use was limited to universities and research institutions; then the military began using the Internet. Eventually, the government decided to allow access to the Internet for commercial purposes. Initially, there was resentment in the research and military communities—these groups were concerned that response times would become poor as “the Net” became saturated with users.

In fact, the exact opposite has occurred. Businesses rapidly realized that they could tune their operations and offer new and better services to their clients, so they started spending vast amounts of money to develop and enhance the Internet. This generated fierce competition among communications carriers and hardware and software suppliers to meet this demand. The result is that **bandwidth** (i.e., the information-carrying capacity) on the Internet has increased tremendously and costs have decreased significantly.

The **World Wide Web** allows computer users to locate and view multimedia-based documents on almost any subject over the Internet. Though the Internet was developed decades ago, the web is a relatively recent creation. In 1989, **Tim Berners-Lee** of CERN (the European Organization for Nuclear Research) began to develop a technology for sharing information via hyperlinked text documents. Berners-Lee called his invention the **HyperText Markup Language** (**HTML**). He also wrote communication protocols to form the backbone of his new information system, which he called the World Wide Web. In par- ticular, he wrote the **Hypertext Transfer Protocol** (**HTTP**)—a communications protocol used to send information over the web. Web use exploded with the availability in 1993 of the Mosaic browser, which featured a user-friendly graphical interface. Marc Andreessen, whose team at NCSA developed Mosaic, went on to found Netscape, the company that many people credit with initiating the explosive Internet economy of the late 1990s.

In the past, most computer applications ran on computers that were not connected to one another, whereas today’s applications can be written to communicate among the world’s computers. The Internet mixes computing and communications technologies. It makes our work easier. It makes information instantly and conveniently accessible world- wide. It enables individuals and small businesses to get worldwide exposure. It is changing the way business is done. People can search for the best prices on virtually any product or service. Special-interest communities can stay in touch with one another. Researchers can be made instantly aware of the latest breakthroughs. The Internet and the web are surely among humankind’s most profound creations.

**1.6 World Wide Web Consortium (W3C)** In October 1994, Tim Berners-Lee founded an organization—called the **World Wide Web Consortium** (**W3C**)—devoted to developing nonproprietary, interoperable technol-  

**12** Chapter 1 Introduction to Computers and the Internet

ogies for the World Wide Web. One of the W3C’s primary goals is to make the web uni- versally accessible—regardless of ability, language or culture. The W3C home page (www.w3.org) provides extensive resources on Internet and web technologies.

The W3C is also a standardization organization. Web technologies standardized by the W3C are called **Recommendations**. W3C Recommendations include the Extensible HyperText Markup Language (XHTML), Cascading Style Sheets (CSS), HyperText Markup Language (HTML—now considered a “legacy” technology) and the Extensible Markup Language (XML). A recommendation is not an actual software product, but a document that specifies a technology’s role, syntax rules and so forth.

**1.7 Web 2.0** In 2003 there was a noticeable shift in how people and businesses were using the web and developing web-based applications. The term **Web 2.0** was coined by **Dale Dougherty** of **O’Reilly® Media**1 in 2003 to describe this trend. Although it became a major media buzzword, few people really know what Web 2.0 means. Generally, Web 2.0 companies use the web as a platform to create collaborative, community-based sites (e.g., social net- working sites, blogs, wikis, etc.).

**Web 1.0** (the state of the web through the 1990s and early 2000s) was focused on a relatively small number of companies and advertisers producing content for users to access (some people called it the “brochure web”). Web 2.0 _involves_ the user—not only is the content often created by the users, but users help organize it, share it, remix it, critique it, update it, etc. One way to look at Web 1.0 is as a _lecture_, a small number of professors informing a large audience of students. In comparison, Web 2.0 is a _conversation_, with everyone having the opportunity to speak and share views.

Web 2.0 is providing new opportunities and connecting people and content in unique ways. Web 2.0 embraces an **architecture of participation**—a design that encour- ages user interaction and community contributions. You, the user, are the most important aspect of Web 2.0—so important, in fact, that in 2006, _TIME Magazine_’s “Person of the Year” was “you.”2 The article recognized the social phenomenon of Web 2.0—the shift away from a powerful few to an empowered many. Several popular blogs now compete with traditional media powerhouses, and many Web 2.0 companies are built almost entirely on user-generated content. For websites like MySpace®, Facebook®, Flickr™, YouTube, eBay® and Wikipedia®, users create the content, while the companies provide the platforms. These companies _trust their users_—without such trust, users cannot make significant contributions to the sites.

The architecture of participation has influenced software development as well. Open source software is available for anyone to use and modify with few or no restrictions. Using **collective intelligence**—the concept that a large diverse group of people will create smart ideas—communities collaborate to develop software that many people believe is better and more robust than proprietary software. Rich Internet Applications (RIAs) are being devel-

1\. O’Reilly, T. “What is Web 2.0: Design Patterns and Business Models for the Next Generation of Software.” September 2005 <http://www.oreillynet.com/pub/a/oreilly/tim/news/2005/ 09/30/what-is-web-20.html?page=1>.

2\. Grossman, L. “TIME’s Person of the Year: You.” _TIME_, December 2006 <http:// www.time.com/time/magazine/article/0,9171,1569514,00.html>.  

1.8 Personal, Distributed and Client/Server Computing **13**

oped using technologies (such as Ajax) that have the look and feel of desktop software, enhancing a user’s overall experience. Software as a Service (SaaS)—software that runs on a server instead of a local computer—has also gained prominence because of sophisticated new technologies and increased broadband Internet access.

Search engines, including Google™, Yahoo!®, MSN®, Ask™, and many more, have become essential to sorting through the massive amount of content on the web. Social bookmarking sites such as del.icio.us and Ma.gnolia allow users to share their favorite sites with others. Social media sites such as Digg™, Spotplex™ and Netscape® enable the community to decide which news articles are the most significant. The way we find the information on these sites is also changing—people are **tagging** (i.e., labeling) web content by subject or keyword in a way that helps anyone locate information more effectively.

Web services have emerged and, in the process, have inspired the creation of many Web 2.0 businesses. Web services allow you to incorporate functionality from existing applications and websites into your own web applications quickly and easily. For example, using Amazon Web Services™, you can create a specialty bookstore and earn revenues through the Amazon Associates Program; or, using Google™ Maps web services with eBay web services, you can build location-based “mashup” applications to find auction items in certain geographical areas. Web services, inexpensive computers, abundant high- speed Internet access, open source software and many other elements have inspired new, exciting, **lightweight business models** that people can launch with only a small invest- ment. Some types of websites with rich and robust functionality that might have required hundreds of thousands or even millions of dollars to build in the 1990s can now be built for nominal amounts of money.

In the future, we’ll see computers learn to understand the meaning of the data on the web—the beginnings of the Semantic Web are already appearing. Continual improve- ments in hardware, software and communications technologies will enable exciting new types of applications.

These topics and more are covered in a detailed walkthrough in Chapter 3, Dive Into® Web 2.0. The chapter highlights the major characteristics and technologies of Web 2.0, providing examples of popular Web 2.0 companies and Web 2.0 Internet business and monetization models. You’ll learn about user-generated content, blogging, content networks, social networking, location-based services and more. In Chapters 4–28, you’ll learn key software technologies for building web-based applications in general, and Ajax- enabled, web-based Rich Internet Applications in particular. See our Web 2.0 Resource Center at www.deitel.com/web2.0/ for more information.

**1.8 Personal, Distributed and Client/Server Computing** In 1977, Apple Computer popularized **personal computing**_._ Computers became so eco- nomical that people could buy them for their own personal or business use. In 1981, IBM, the world’s largest computer vendor, introduced the IBM Personal Computer. This quick- ly legitimized personal computing in business, industry and government organizations, where IBM mainframes were heavily used.

These computers were for the most part “stand-alone” units—people transported disks back and forth between them to share information (this was often called “sneak- ernet”). Although early personal computers were not powerful enough to timeshare several users, these machines could be linked together in computer networks, sometimes over tele-  

**14** Chapter 1 Introduction to Computers and the Internet

phone lines and sometimes in **local area networks (LANs)** within an organization. This led to the phenomenon of **distributed computing**_,_ in which an organization’s computing, instead of being performed only at some central computer installation, is distributed over networks to the sites where the organization’s work is performed. Personal computers were powerful enough to handle the computing requirements of individual users as well as the basic communications tasks of passing information between computers electronically.

Today’s personal computers are as powerful as the million-dollar machines of just a few decades ago. The most powerful desktop machines—called **workstations**—provide individual users with enormous capabilities. Information is shared easily across computer networks, where computers called **servers** (file servers, database servers, web servers, etc.) offer data storage and other capabilities that may be used by **client** computers distributed throughout the network, hence the term **client/server computing**_._ Today’s popular oper- ating systems, such as UNIX, Linux, Mac OS X and Microsoft’s Windows-based systems, provide the kinds of capabilities discussed in this section.

**1.9 Hardware Trends** The Internet community thrives on the continuing stream of dramatic improvements in hardware, software and communications technologies. In general, people expect to pay at least a little more for most products and services every year. The opposite generally has been the case in the computer and communications industries, especially with regard to the hardware costs of supporting these technologies. For many decades, and with no change expected in the foreseeable future, hardware costs have fallen rapidly. This is a phe- nomenon of technology. **Moore’s Law** states that the power of hardware doubles every two years, while the price remains essentially the same.3 Significant improvements also have occurred in the communications field, especially in recent years, with the enormous demand for communications bandwidth attracting tremendous competition, forcing communications bandwidth to increase and prices to decline. We know of no other fields in which technology moves so quickly and costs fall so rapidly.

When computer use exploded in the 1960s and 1970s, there was talk of the huge improvements in human productivity that computing and communications would bring about. However, these productivity improvements did not immediately materialize. Orga- nizations were spending vast sums on computers and distributing them to their work- forces, but without immediate productivity gains. On the hardware side, it was the invention of microprocessor chip technology and its wide deployment in the late 1970s and 1980s which laid the groundwork for significant productivity improvements in the 1990s. On the software side, productivity improvements are now coming from object technology, which we use throughout this book.

Recently, hardware has been moving toward mobile, wireless technology. Small hand- held devices are now more powerful than early 1970s supercomputers. Portability is now a major focus for the computer industry. Wireless data-transfer speeds have become so fast that many Internet users’ primary web access is through wireless networks. The next few years will see dramatic advances in wireless capabilities for personal users and businesses.

3\. Moore, G. “Cramming More Components onto Integrated Circuits.” _Electronics_, April 1965 <ftp://download.intel.com/museum/Moores\_Law/Articles-Press\_Releases/Gordon\_Moore\_ 1965\_Article.pdf>.  

1.10 Key Software Trend: Object Technology **15**

**1.10 Key Software Trend: Object Technology** One of the authors, HMD, remembers the great frustration felt in the 1960s by software development organizations, especially those working on large-scale projects. During his undergraduate years, he had the privilege of working summers at a leading computer ven- dor on the teams developing timesharing, virtual-memory operating systems. This was a great experience for a college student. But, in the summer of 1967, reality set in when the company “decommitted” from producing as a commercial product the particular system on which hundreds of people had been working for many years. It was difficult to get this thing called software right—software is “complex stuff.”

Improvements to software technology did emerge, with the benefits of structured pro- gramming (and the related disciplines of **structured systems analysis and design**) being realized in the 1970s. Not until the technology of object-oriented programming became widely used in the 1990s, though, did software developers feel they had the necessary tools for making major strides in the software development process.

What are objects and why are they special? Actually, object technology is a packaging scheme that helps us create meaningful software units. These can be large and are highly focused on particular applications areas. There are date objects, time objects, paycheck objects, invoice objects, audio objects, video objects, file objects, record objects and so on. In fact, almost any noun can be reasonably represented as an object.

We live in a world of objects. Just look around you. There are cars, planes, people, animals, buildings, traffic lights, elevators and the like. Before object-oriented languages appeared, procedural programming languages (such as Fortran, COBOL, Pascal, BASIC and C) were focused on actions (verbs) rather than on things or objects (nouns). Program- mers living in a world of objects programmed primarily using verbs. This made it awkward to write programs. Now, with the availability of popular object-oriented languages, such as C++, Java, Visual Basic and C#, programmers continue to live in an object-oriented world _and_ can program in an object-oriented manner. This is a more natural process than procedural programming and has resulted in significant productivity gains.

A key problem with procedural programming is that the program units do not effec- tively mirror real-world entities, so these units are not particularly reusable. It’s not unusual for programmers to “start fresh” on each new project and have to write similar software “from scratch.” This wastes time and money, as people repeatedly “reinvent the wheel.” With object technology, the software entities created (called **classes**), if properly designed, tend to be reusable on future projects. Using libraries of reusable componentry can greatly reduce effort required to implement certain kinds of systems (compared to the effort that would be required to reinvent these capabilities on new projects).

**Software Engineering Observation 1.2** _Extensive class libraries of reusable software components are available on the Internet. Many of these libraries are free._ 1.2

**Software Engineering Observation 1.3** _Some organizations report that the key benefit object-oriented programming gives them is not software that is reusable but, rather, software that is more understandable, better organized and easier to maintain, modify and debug. This can be significant, because perhaps as much as 80 percent of software cost is associated not with the original efforts to develop the software, but with the continued evolution and maintenance of that software throughout its lifetime._ 1.3  

**16** Chapter 1 Introduction to Computers and the Internet

**1.11 JavaScript: Object-Based Scripting for the Web** JavaScript is an object-based scripting language with strong support for proper software engineering techniques. Students learn to create and manipulate objects from the start in JavaScript. JavaScript is available free in today’s popular web browsers.

Does JavaScript provide the solid foundation of programming principles typically taught in first programming courses—a portion of the intended audience for this book? We think so.

The JavaScript chapters of the book are more than just an introduction to the lan- guage. They also present an introduction to computer programming fundamentals, including control structures, functions, arrays, recursion, strings and objects. Experienced programmers will read Chapters 6–13 quickly and master JavaScript by reading our live- code examples and by examining the corresponding screenshots. Beginners will learn com- puter programming in these carefully paced chapters by reading the code explanations and completing the many exercises.

JavaScript is a powerful scripting language. Experienced programmers sometimes take pride in creating strange, contorted, convoluted JavaScript code. This kind of coding makes programs more difficult to read, test and debug. This book is also geared for novice programmers; for all readers we stress program clarity.

**Good Programming Practice 1.1** _Write your programs in a simple and straightforward manner. This is sometimes referred to as KIS (“keep it simple”). One key aspect of keeping it simple is another interpretation of KIS— “keep it small.” Do not “stretch” the language by trying bizarre uses._ 1.1

You’ll see that JavaScript is a portable scripting language and that programs written in JavaScript can run in many web browsers. Actually, portability is an elusive goal. \\

**Portability Tip 1.2** _Although it is easier to write portable programs in JavaScript than in many other programming languages, differences among interpreters and browsers make portability difficult to achieve. Simply writing programs in JavaScript does not guarantee portability. Programmers occasionally need to research platform variations and write their code accordingly._ 1.2

**Portability Tip 1.3** _When writing JavaScript programs, you need to deal directly with cross-browser portability is- sues. Such issues are hidden by JavaScript libraries (e.g., Dojo, Prototype, Script.aculo.us and ASP.NET Ajax) which provide powerful, ready-to-use capabilities that simplify JavaScript cod- ing by making it cross-browser compatible._ 1.3

**Error-Prevention Tip 1.1** _Always test your JavaScript programs on all systems and in all web browsers for which they are intended._ 1.1

**Good Programming Practice 1.2** _Read the documentation for the JavaScript version you are using to access JavaScript’s rich col- lection of features._ 1.2  

1.12 Browser Portability **17**

**Error-Prevention Tip 1.2** _Your computer and JavaScript interpreter are good teachers. If you are not sure how a feature works, even after studying the documentation, experiment and see what happens. Study each er- ror or warning message and adjust the code accordingly._ 1.2

JavaScript was created by Netscape, the company that created the first widely suc- cessful web browser. Both Netscape and Microsoft have been instrumental in the stan- dardization of JavaScript by ECMA International (formerly the European Computer Manufacturers Association) as ECMAScript. In Chapters 16–17, we discuss Adobe Flash, which uses another scripting language named ActionScript. ActionScript and JavaScript are converging in the next version of the JavaScript standard (JavaScript 2/ECMA Script version 4) currently under development by ECMA. This will result in a universal client scripting language, greatly simplifying web application development.

**1.12 Browser Portability** Ensuring a consistent look and feel on client-side browsers is one of the great challenges of developing web-based applications. Currently, a standard does not exist to which soft- ware developers must adhere when creating web browsers. Although browsers share a com- mon set of features, each browser might render pages differently. Browsers are available in many versions and on many different platforms (Microsoft Windows, Apple Macintosh, Linux, UNIX, etc.). Vendors add features to each new version that sometimes result in cross-platform incompatibility issues. Clearly it is difficult to develop web pages that ren- der correctly on all versions of each browser. In this book we develop web applications that execute on both the Internet Explorer 7 and Firefox 2 browsers.

**Portability Tip 1.4** _The web is populated with many different browsers, which makes it difficult for authors and web application developers to create universal solutions. The W3C is working toward the goal of a universal client-side platform._ 1.4

**1.13 C, C++ and Java _C_** The **C** language was developed by Dennis Ritchie at Bell Laboratories. C was implement- ed in 1972. C initially became known as the development language of the UNIX operating system. Today, virtually all new major operating systems are written in C and/or C++.

**_C++_** Bjarne Stroustrup developed **C++**, an extension of C, in the early 1980s. C++ provides a number of features that “spruce up” the C language, but more importantly, it provides ca- pabilities for object-oriented programming. C++ is a hybrid language: It is possible to pro- gram in either a C-like style (procedural programming), in which the focus is on actions, or an object-oriented style, in which the focus is on objects, or both. C and C++ have in- fluenced many subsequent programming languages, such as Java, C#, JavaScript and PHP, each of which has a syntax similar to C and C++.  

**18** Chapter 1 Introduction to Computers and the Internet

**_Java_** Microprocessors are having a profound impact in intelligent consumer electronic devices. Recognizing this, Sun Microsystems in 1991 funded an internal corporate research project code-named Green to provide software for these devices. The project resulted in the de- velopment of a C++-based language that its creator, James Gosling, called Oak after an oak tree outside his window at Sun. It was later discovered that there already was a computer language called Oak. When a group of Sun people visited a local coffee shop, the name **Java** was suggested and it stuck.

The Green project ran into some difficulties. The marketplace for intelligent con- sumer electronic devices did not develop in the early 1990s as quickly as Sun had antici- pated. The project was in danger of being canceled. By sheer good fortune, the World Wide Web exploded in popularity in 1993, and Sun saw the immediate potential of using Java to add **dynamic content** (e.g., interactivity, animations and the like) to web pages. This breathed new life into the project.

Sun formally announced Java at an industry conference in May 1995. Java garnered the attention of the business community because of the phenomenal interest in the web. Java is now used to develop large-scale enterprise applications, to enhance the function- ality of web servers (the computers that provide the content we see in our web browsers), to provide applications for consumer devices (e.g., cell phones, pagers and personal digital assistants) and for many other purposes.

**1.14 BASIC, Visual Basic, Visual C++, C# and .NET** The **BASIC** (Beginner’s All-purpose Symbolic Instruction Code) programming language was developed in the mid-1960s at Dartmouth College as a means of writing simple pro- grams. BASIC’s primary purpose was to familiarize novices with programming techniques. Microsoft’s Visual Basic language, introduced in the early 1990s to simplify the develop- ment of Microsoft Windows applications, has become one of the most popular program- ming languages in the world.

Microsoft’s latest development tools are part of its corporatewide strategy for inte- grating the Internet and the web into computer applications. This strategy is implemented in Microsoft’s **.NET platform**, which provides the capabilities developers need to create computer applications that can execute on computers distributed across the Internet. Microsoft’s three primary programming languages are **Visual Basic** (based on the original BASIC), **Visual C++** (based on C++) and **Visual C#** (a relatively new language based on C++ and Java that was developed expressly for the .NET platform). Developers using .NET can write software components in the language they are most familiar with, then form applications by combining those components with others written in any .NET language.

**1.15 Software Technologies** In this section, we discuss some software engineering topics and buzzwords that you’ll hear in the software development community. We’ve created Resource Centers on most of these topics, with many more on the way.

**Agile Software Development** is a set of methodologies that try to get software imple- mented quickly with fewer resources than previous methodologies. Check out the Agile Alliance (www.agilealliance.org) and the Agile Manifesto (www.agilemanifesto.org).  

1.15 Software Technologies **19**

**Refactoring** involves reworking code to make it clearer and easier to maintain while preserving its functionality. It’s widely employed with agile development methodologies. Many refactoring tools are available to do major portions of the reworking automatically.

**Design patterns** are proven architectures for constructing flexible and maintainable object-oriented software. The field of design patterns tries to enumerate those recurring patterns, encouraging software designers to reuse them to develop better-quality software with less time, money and effort.

**Game programming**. The computer game business is larger than the first-run movie business. College courses and even majors are now devoted to the sophisticated software techniques used in game programming. Chapter 17 discusses building interactive games with Adobe Flash CS3. Also check out our Resource Centers on Game Programming, C++ Game Programming and Programming Projects.

**Open source software** is developed in a way unlike the proprietary development that dominated software’s early years and remains strong today. With open source develop- ment, individuals and companies contribute their efforts in developing, maintaining and evolving software in exchange for the right to use that software for their own purposes, typ- ically at no charge. Open source code generally gets scrutinized by a much larger audience than proprietary software, so bugs may be removed faster. Open source also encourages more innovation. Sun recently open sourced Java. Some organizations you’ll hear a lot about in the open source community are the Eclipse Foundation (the Eclipse IDE is pop- ular for C++ and Java software development), the Mozilla Foundation (the creators of the Firefox browser), the Apache Software Foundation (the creators of the Apache web server) and SourceForge (which provides the tools for managing open source projects and cur- rently has over 150,000 open source projects under development).

**Linux** is an open source operating system and one of the greatest successes of the open source movement. Apache is the most popular open source web server. **MySQL** (see Chap- ters 22–24) is an open source database management system. **PHP** (see Chapter 23) is the most popular open source server-side “scripting” language for developing Internet-based applications. **LAMP** is an acronym for the set of open source technologies that many developers used to build web applications—it stands for Linux, Apache, MySQL and PHP (or Perl or Python—two other scripting languages used for similar purposes).

**Ruby on Rails** (see Chapter 24) combines the scripting language Ruby with the Rails web application framework developed by the company 37Signals. Their book, _Getting Real_, is a must read for today’s web application developers; read it free at getting-

real.37signals.com/toc.php. Many Ruby on Rails developers have reported significant productivity gains over using other languages when developing database-intensive web applications.

Software has generally been viewed as a product; most software still is offered this way. If you want to run an application, you buy a software package from a software vendor. You then install that software on your computer and run it as needed. As new versions of the software appear, you upgrade your software, often at significant expense. This process can become cumbersome for organizations with tens of thousands of systems that must be maintained on a diverse array of computer equipment. With **Software as a Service (SaaS)**, the software runs on servers elsewhere on the Internet. When those servers are updated, all clients worldwide see the new capabilities; no local installation is needed. You access the service through a browser—these are quite portable, so you can run the same applications  

**20** Chapter 1 Introduction to Computers and the Internet

on different kinds of computers from anywhere in the world. Salesforce.com, Google, Microsoft and 37Signals all offer SaaS.

**1.16 Notes about _Internet & World Wide Web How to Program, 4/e_** In 1995, we saw an explosion of interest in the Internet and the World Wide Web. We immersed ourselves in these technologies, and a clear picture started to emerge in our minds of the next direction to take in writing textbooks for introductory programming courses. **Electronic commerce**, or **e-commerce**, as it is typically called, began to dominate the business, financial and computer industry news. This was a reconceptualization of the way business should be conducted. We still wanted to teach programming principles, but we felt compelled to do it in the context of the technologies that businesses and organiza- tions need to create Internet-based and web-based applications. With this realization, the first edition of _Internet & World Wide Web How to Program_ was born and published in December of 1999.

_Internet & World Wide Web How to Program, Fourth Edition_ teaches programming languages and programming language principles. In addition, we focus on the broad range of technologies that will help you build real-world Internet-based and web-based applica- tions that interact with other applications and with databases. These capabilities allow you to develop the kinds of enterprise-level, distributed applications popular in industry today.

You’ll learn computer programming and basic principles of computer science and information technology. You also will learn proven software development methods—top- down stepwise-refinement, functionalization and object-based programming. Our pri- mary programming language is JavaScript, a compact language that is especially designed for developing Internet- and web-based applications. Chapters 6–13 present a rich discus- sion of JavaScript and its capabilities, including dozens of complete examples followed by screen images that illustrate typical program inputs and outputs.

After you learn programming principles from the detailed JavaScript discussions, we present condensed treatments of four other popular Internet/web programming languages for building the server side of Internet- and web-based client/server applications. Chapter 23 introduces the popular PHP scripting language. Chapter 24 introduces Ruby, the scripting language used with the Ruby on Rails framework for rapid development of database-driven web applications. In Chapter 25, we discuss ASP.NET 2.0—Microsoft’s technology for server-side scripting. ASP.NET pages can be written in Visual Basic and C#; we code ASP.NET pages using Visual Basic. In Chapters 26–27, we discuss JavaServer Faces, which uses the Java programming language. Finally, in Chapter 28, we discuss web services (using examples in both Java and ASP.NET).

**1.17 Web Resources** www.deitel.com/

Check this site frequently for updates, corrections and additional resources for all Deitel & Associ- ates, Inc., publications. www.deitel.com/resourcecenters.html

Check out the complete list of Deitel Resource Centers, including numerous programming, open source, Web 2.0 and Internet business topics.  

1.17 Web Resources **21**

netforbeginners.about.com

The About.com _Internet for Beginners_ guide provides valuable resources for further exploration of the history and workings of the Internet and the web. www.learnthenet.com/english/index.html

_Learn the Net_ is a website containing a complete overview of the Internet, the web and the underly- ing technologies. The site contains much information appropriate for novices. www.w3.org

The World Wide Web Consortium (W3C) website offers a comprehensive description of web tech- nologies. For each Internet technology with which the W3C is involved, the site provides a descrip- tion of the technology, its benefits to web designers, the history of the technology and the future goals of the W3C in developing the technology.

**Summary**

**_Section 1.1 Introduction_** • In an era of steadily rising costs, computing costs have been decreasing dramatically because of

rapid developments in both hardware and software technologies.

• Technologies such as Extensible HyperText Markup Language (XHTML), JavaScript, Flash, Flex, Dreamweaver and Extensible Markup Language (XML) are used to build the portions of web-based applications that reside on the client side (i.e., the portions of applications that typi- cally run on web browsers such as Firefox or Microsoft’s Internet Explorer).

• Technologies such as web servers, databases, ASP.NET, PHP, Ruby on Rails and JavaServer Fac- es are used to build the server side of web-based applications. These parts of applications typically run on “heavy-duty” computer systems on which organizations’ business-critical websites reside.

**_Section 1.2 What Is a Computer?_** • A computer is a device capable of performing computations and making logical decisions at

speeds billions of times faster than human beings can.

• A computer processes data under the control of sets of instructions called computer programs, which guide it through orderly sets of actions specified by computer programmers.

• The various devices that comprise a computer system are referred to as hardware.

• The computer programs that run on a computer are referred to as software.

**_Section 1.3 Computer Organization_** • The input unit is the “receiving” section of the computer. It obtains information from input de-

vices and places it at the disposal of the other units for processing.

• The output unit is the “shipping” section of the computer. It takes information processed by the computer and places it on output devices to make it available for use outside the computer.

• The memory unit is the rapid-access, relatively low-capacity “warehouse” section of the comput- er. It retains information that has been entered through the input unit, making it immediately available for processing when needed, and retains information that has already been processed until it can be placed on output devices by the output unit.

• The arithmetic and logic unit (ALU) is the “manufacturing” section of the computer. It is re- sponsible for performing calculations and making decisions.

• The central processing unit (CPU) is the “administrative” section of the computer. It coordinates and supervises the operation of the other sections.  

**22** Chapter 1 Introduction to Computers and the Internet

• The secondary storage unit is the long-term, high-capacity “warehousing” section of the comput- er. Programs or data not being used by the other units are normally placed on secondary storage devices (e.g., disks) until they are needed, possibly hours, days, months or even years later.

**_Section 1.4 Machine Languages, Assembly Languages and High-Level Languages_** • Any computer can directly understand only its own machine language, which generally consists

of strings of numbers ultimately reduced to 1s and 0s that instruct the computer to perform its most elementary operations.

• English-like abbreviations form the basis of assembly languages. Translator programs called as- semblers convert assembly-language programs to machine language.

• Compilers translate high-level language programs into machine-language programs. High-level languages contain English words and conventional mathematical notations.

• Interpreter programs directly execute high-level language programs, eliminating the need to compile them into machine language.

**_Section 1.5 History of the Internet and World Wide Web_** • In the late 1960s, ARPA, the Advanced Research Projects Agency of the U.S. Department of De-

fense rolled out the blueprints for networking the main computer systems of about a dozen ARPA-funded universities and research institutions. ARPA then proceeded to implement the ARPANET, the predecessor to today’s Internet.

• The World Wide Web allows computer users to locate and view multimedia-based documents (i.e., documents with text, graphics, animations, audios or videos) on almost any subject.

• In 1989, Tim Berners-Lee of CERN began to develop the World Wide Web and several com- munication protocols that form the backbone of the web.

• Web use exploded with the availability in 1993 of the Mosaic browser, which featured a user- friendly graphical interface. Marc Andreessen, whose team at NCSA developed Mosaic, went on to found Netscape, the company that many people credit with initiating the explosive Internet economy of the late 1990s.

**_Section 1.6 World Wide Web Consortium (W3C)_** • In October 1994, Tim Berners-Lee founded the World Wide Web Consortium (W3C)—an or-

ganization devoted to developing nonproprietary, interoperable technologies for the web.

**_Section 1.7 Web 2.0_** • Web 2.0 companies use the web as a platform to create collaborative, community-based sites

(e.g., social networking sites, blogs, wikis, etc.).

• Web 1.0 (the state of the web through the 1990s and early 2000s) was focused on a relatively small number of companies and advertisers producing content for users to access.

• Web 2.0 embraces an architecture of participation—a design that encourages user interaction and community contributions.

• Using the collective intelligence—the concept that a large diverse group of people will create smart ideas—communities collaborate to develop open source software that many people believe is better and more robust than proprietary software.

• Rich Internet Applications (RIAs) are being developed using technologies (such as Ajax) that have the look and feel of desktop software, enhancing a user’s overall experience.

• Web services, inexpensive computers, abundant high-speed Internet access, open source software and many other elements have inspired new, exciting, lightweight business models that people can launch with only a small investment.  

Summary **23**

**_Section 1.8 Personal, Distributed and Client/Server Computing_** • Apple Computer popularized personal computing.

• IBM’s Personal Computer quickly legitimized personal computing in business, industry and government organizations, where IBM mainframes were heavily used.

• Although early personal computers were not powerful enough to timeshare several users, these machines could be linked together in computer networks, sometimes over telephone lines and sometimes in local area networks (LANs) within an organization. This led to the phenomenon of distributed computing.

• Today’s personal computers are as powerful as the million-dollar machines of just a few decades ago, and information is shared easily across computer networks.

**_Section 1.9 Hardware Trends_** • Moore’s Law states that the power of hardware doubles every two years, while the price remains

essentially the same.

**_Section 1.10 Key Software Trend: Object Technology_** • Objects are essentially reusable software components that model real-world items.

• Not until object-oriented programming became widely used in the 1990s did software develop- ers feel they had the tools to make major strides in the software development process.

• Object technology is a packaging scheme that helps us create meaningful software units.

• A key problem with procedural programming is that the program units do not effectively mirror real-world entities, so these units are not particularly reusable.

• With object technology, the software entities created (called classes), if properly designed, tend to be reusable on future projects. Using libraries of reusable componentry can greatly reduce ef- fort required to implement certain kinds of systems.

• Some organizations report that the key benefit object-oriented programming gives them is the production of software which is more understandable, better organized and easier to maintain, modify and debug.

**_Section 1.11 JavaScript: Object-Based Scripting for the Web_** • JavaScript is an object-based scripting language with strong support for proper software engineer-

ing techniques.

• JavaScript was created by Netscape. Both Netscape and Microsoft have been instrumental in the standardization of JavaScript by ECMA International as ECMAScript.

**_Section 1.12 Browser Portability_** • Ensuring a consistent look and feel on client-side browsers is one of the great challenges of de-

veloping web-based applications.

**_Section 1.13 C, C++ and Java_** • C initially became known as the development language of the UNIX operating system. Today,

virtually all new major operating systems are written in C and/or C++.

• C++ provides a number of features that “spruce up” the C language, but more importantly, it provides capabilities for object-oriented programming.

• Java is used to create dynamic and interactive content for web pages, develop enterprise applica- tions, enhance web-server functionality, provide applications for consumer devices and more.  

**24** Chapter 1 Introduction to Computers and the Internet

**_Section 1.14 BASIC, Visual Basic, Visual C++, C# and .NET_** • The BASIC programming language was developed in the mid-1960s at Dartmouth College. Its

primary purpose was to familiarize novices with programming techniques.

• Microsoft’s Visual Basic was introduced in the early 1990s to simplify the process of developing Microsoft Windows applications.

• Microsoft has a corporatewide strategy for integrating the Internet and the web into computer applications. This strategy is implemented in Microsoft’s .NET platform.

• The .NET platform’s three primary programming languages are Visual Basic, Visual C++ and Visual C#.

• .NET developers can write software components in their preferred language, then form applica- tions by combining those components with components written in any .NET language.

**_Section 1.15 Software Technologies_** • Agile Software Development is a set of methodologies that try to get software implemented

quickly with fewer resources than previous methodologies.

• Refactoring involves reworking code to make it clearer and easier to maintain while preserving its functionality.

• Design patterns are proven architectures for constructing flexible and maintainable object-ori- ented software.

• Open source development allows individuals and companies to contribute their efforts in devel- oping, maintaining and evolving software in exchange for the right to use that software for their own purposes, typically at no charge.

• With Software as a Service (SaaS), the software runs on servers elsewhere on the Internet, rather than on the desktop.

**Terminology** actions Agile Software Development architecture of participation arithmetic and logic unit (ALU) ARPANET assemblers assembly language bandwidth BASIC C C++ central processing unit (CPU) class client side client/server computing collective intelligence compilers computer computer program computer programmer CSS

Dale Dougherty data data structure decision design pattern distributed computing DOM (Document Object Model) dynamic content electronic commerce (e-commerce) electronic mail (e-mail) function game programming hardware high-level languages HTML (HyperText Markup Language) HTTP (Hypertext Transfer Protocol) input device input unit Internet interpreter IP (Internet Protocol)  

Self-Review Exercises **25**

Java JavaScript LAMP library lightweight business models Linux local area networks (LANs) logical unit machine dependent machine language memory memory unit method Moore’s Law multiprocessor MySQL .NET platform O’Reilly Media object code object-based programming object-oriented programming open source software output devices output unit packet packet switching personal computer PHP platform

primary memory refactoring Ruby on Rails scripting scripting language secondary storage unit server side server software Software as a Service (SaaS) structured programming structured systems analysis and design supercomputer tagging TCP (Transmission Control Protocol) TCP/IP translation translator program Visual Basic Visual C# Visual C++ Web 1.0 Web 2.0 workstation World Wide Web World Wide Web Consortium (W3C) XHTML (Extensible HyperText Markup Lan-

guage) XML (Extensible Markup Language)

**Self-Review Exercises 1.1** Fill in the blanks in each of the following:

a) The company that popularized personal computing was . b) The computer that made personal computing legitimate in business and industry was

the . c) Computers process data under the control of sets of instructions called computer

. d) The six key logical units of the computer are the , , ,

, and the . e) The three classes of languages discussed in the chapter are , , and

. f) The programs that translate high-level language programs into machine language are

called . g) , or labeling content, is another key part of the collaborative theme of Web 2.0. h) With Internet applications, the desktop evolves to the . i) involves reworking code to make it clearer and easier to maintain while pre-

serving its functionality. j) With development, individuals and companies contribute their efforts in de-

veloping, maintaining and evolving software in exchange for the right to use that soft- ware for their own purposes, typically at no charge.  

**26** Chapter 1 Introduction to Computers and the Internet

k) The was the predecessor to the Internet. l) The information-carrying capacity of a communications medium like the Internet is

called . m) The acronym TCP/IP stands for .

**1.2** Fill in the blanks in each of the following statements. a) The allows computer users to locate and view multimedia-based documents

on almost any subject over the Internet. b) founded an organization—called the World Wide Web Consortium

(W3C)—devoted to developing nonproprietary, interoperable technologies for the World Wide Web.

c) are reusable software components that model items in the real world. d) In a typical client/server relationship, the requests that some action be per-

formed and the performs the action and responds.

**Answers to Self-Review Exercises 1.1** a) Apple. b) IBM Personal Computer. c) programs. d) input unit, output unit, memory unit, arithmetic and logic unit, central processing unit, secondary storage unit. e) machine languag- es, assembly languages and high-level languages. f) compilers. g) Tagging. h) webtop. i) Refactor- ing. j) open source. k) ARPANET. l) bandwidth. m) Transmission Control Protocol/Internet Protocol.

**1.2** a) World Wide Web. b) Tim Berners-Lee. c) Objects. d) client, server.

**Exercises 1.3** Categorize each of the following items as either hardware or software:

a) CPU b) ALU c) input unit d) an editor program

**1.4** Fill in the blanks in each of the following statements: a) Which logical unit of the computer receives information from outside the computer for

use by the computer? . b) The process of instructing the computer to solve specific problems is called . c) What type of computer language uses English-like abbreviations for machine-language

instructions? . d) Which logical unit of the computer sends information that has already been processed

by the computer to various devices so that the information may be used outside the computer? .

e) Which logical units of the computer retain information? . f) Which logical unit of the computer performs calculations? . g) Which logical unit of the computer makes logical decisions? . h) The level of computer language most convenient for you to write programs quickly and

easily is . i) The only language that a computer directly understands is called that computer's

. j) Which logical unit of the computer coordinates the activities of all the other logical

units? .  

Exercises **27**

k) Some organizations report that the key benefit gives them is the production of software which is more understandable, better organized and easier to maintain, modify and debug.

l) Web 2.0 embraces an —a design that encourages user interaction and com- munity contributions.

m) is the concept that a large diverse group of people will create smart ideas.

**1.5** Fill in the blanks in each of the following statements (based on Section 1.15, Software Technologies):

a) The open source database management system used in LAMP development is .

b) A key advantage of Software as a Service (SaaS) is . c) are proven architectures for constructing flexible and maintainable object-ori-

ented software. d) is the most popular open source server-side “scripting” language for develop-

ing Internet-based applications.

**1.6** What is the relationship between JavaScript and ECMAScript?

**1.7** In this chapter, we discussed a few popular Web 2.0 businesses including MySpace, Flickr, YouTube and Wikipedia. Indentify a Web 2.0 business and describe why it fits the Web 2.0 busi- ness model.  

2 Web Browser Basics: Internet Explorer and Firefox

**O B J E C T I V E S** In this chapter you will learn:

■ To understand the Microsoft Internet Explorer 7 (IE7) and Mozilla Firefox 2 (FF2) web browsers’ capabilities.

■ To use IE7 and FF2 to search the information available on the World Wide Web.

■ To customize a browser according to your own needs and preferences.

■ To understand the differences among various browsers.

**_Give us the tools, and we will finish the job._ —Sir Winston Churchill**

**_We must learn to explore all the options and possibilities that confront us in a complex and rapidly changing world._ —J. William Fulbright**  

2.1 Introduction to the Internet Explorer 7 and Firefox 2 Web Browsers **29 O**

**u tl**

**in e**

**2.1 Introduction to the Internet Explorer 7 and Firefox 2 Web Browsers** The Internet is an essential medium for communicating and interacting with people worldwide. The need to publish and share information has fueled the rapid growth of the web. **Web browsers** are software programs that allow users to access the web’s rich content. Whether for business or personal use, millions of people use web browsers to access the tremendous amount of information available on the web and to share or exchange this content with other users. The www portion of the Internet, which we encounter often in this chapter, is made up of hyperlinked documents written in XHTML and rich media.

Popular web browsers at the time of publication are Microsoft’s _Internet Explorer_, Mozilla’s _Firefox_, Apple’s _Safari_ and Opera Software’s _Opera_. This chapter focuses on the features of Internet Explorer (IE7) and Firefox 2 (FF2), which are the most widely used of these browsers. All examples in this book are supported by both IE7 and FF2.

**2.2 Connecting to the Internet** A computer alone is not enough to access the Internet. In addition to web browser soft- ware, the computer needs specific hardware and a connection to an Internet Service Pro- vider to view web pages. This section describes the components that enable Internet access.

First, a computer must have a **modem** or **network card**. A modem is hardware that enables a computer to connect to a **network** via phone lines. A modem converts data to audio tones and transmits the data over phone lines. A network card, also called a **network interface card (NIC)**, is hardware that allows a computer to connect to the Internet through a network or a high-speed Internet connection, such as a **local area network (LAN)**, **cable modem** or **Digital Subscriber Line (DSL)**.

After ensuring that a computer has a modem or a network card (most computers come with one or both of these), the next step is to register with an **Internet Service Provider (ISP)**. Computers connect to an ISP using a modem and phone line, or via a NIC using a LAN, DSL or cable modem. The ISP connects computers to the Internet. Most college and university campuses offer network connections, and many communities now offer wireless access. If a network connection is not available, then popular commercial ISPs,

**2.1** Introduction to the Internet Explorer 7 and Firefox 2 Web Browsers **2.2** Connecting to the Internet **2.3** Internet Explorer 7 and Firefox 2 Features **2.4** Customizing Browser Settings **2.5** Searching the Internet **2.6** Keeping Track of Your Favorite Sites **2.7** File Transfer Protocol (FTP) **2.8** Online Help **2.9** Other Web Browsers

**2.10** Wrap-Up **2.11** Web Resources

Summary | Terminology | Self-Review Exercises | Answers to Self-Review Exercises | Exercises  

**30** Chapter 2 Web Browser Basics: Internet Explorer and Firefox

such as AOL (www.aol.com), Comcast (www.comcast.net), Earthlink (www.earth- link.net), Verizon (www.verizon.com), Microsoft Network (www.msn.com) and NetZero (www.netzero.net) are alternatives.

**Bandwidth** and cost are two considerations when deciding which commercial ISP ser- vice to use. Bandwidth refers to the amount of data that can be transferred through a com- munications medium in a fixed amount of time. Different ISPs offer different types of high-speed connections, called **broadband connections**—which include DSL, cable modem and **Integrated Services Digital Network (ISDN)**—and slower **dial-up connec- tions**. Each connection type has a different bandwidth and cost to users.

Broadband is a category of high-bandwidth Internet service that is most often pro- vided to home users by cable television and telephone companies. DSL is a broadband ser- vice that allows computers to be connected at all times to the Internet over existing phone lines, without interfering with telephone services. DSL requires a special modem provided by the ISP. Like DSL, cable modems enable the computer to be connected to the Internet at all times. Cable modems transmit data over the cables that bring television to homes and businesses. Unlike DSL, the bandwidth is shared by many users. This sharing can reduce the bandwidth available to each person when many use the system simultaneously. ISDN provides Internet service over either digital or standard telephone lines. ISDN requires spe- cialized hardware, called a **terminal adapter (TA)**, which is usually obtained from the ISP.

Dial-up service uses an existing telephone line. If a computer is connected to the Internet, the user usually cannot receive voice calls during this time. If the voice calls do connect, the Internet connection is interrupted. To prevent this, users may choose to install an extra phone line dedicated to Internet service.

Fiber optics are replacing traditional metal cables in many computer networks due to their greater bandwidth and mechanical advantages that provide a better signal. Though their popularity is currently limited by the high cost of materials and installation, consis- tent improvements in the industry will allow fiber optic cables to become a key element of the communications industry in the near future.

Once a computer is connected to a network, the user must choose a web browser for navigating the Internet. Internet Explorer is preinstalled on all Windows machines, and your version can be updated at www.microsoft.com/ie. Firefox can be downloaded at www.mozilla.com/firefox, and can be installed on many different operating systems. When installing this browser, select **Custom** when prompted for a setup type, and ensure that the **DOM Inspector** option is selected in the next screen. Doing so will ensure that you have additional Firefox functionality that we discuss in Chapter 12.

**2.3 Internet Explorer 7 and Firefox 2 Features** A web browser is software that allows the user to view certain types of Internet files in an interactive environment. Figure 2.1 shows the Deitel Home Page using Internet Explorer 7 web browser, and Fig. 2.2 uses Firefox 2. The **URL (Uniform Resource Locator)** http://www.deitel.com is found in the **Address** bar in IE7, and the **Location** bar in FF2. The URL specifies the address (i.e., location) of the web page displayed in the browser window. Each web page on the Internet is associated with a unique URL. URLs usually begin with http://, which stands for **Hypertext Transfer Protocol (HTTP)**, the standard protocol (or set of communication rules) for transferring web documents over the Inter- net. URLs of websites that handle private information, such as credit card numbers, often  

2.3 Internet Explorer 7 and Firefox 2 Features **31**

**Fig. 2.1** | Deitel® website in Internet Explorer 7.

**Fig. 2.2** | Deitel® website in Firefox 2.

Scroll bars

**Stop**

Pointer (over a hyperlink)

**Refresh**/**GoAddress** barTabs**Back Forward** Recent history **Page** menu**Home**

Scroll barsPointer (over a hyperlink)

**Location** bar**Tabs GoBack StopForward Refresh Home** Recent history  

**32** Chapter 2 Web Browser Basics: Internet Explorer and Firefox

begin with https://, the abbreviation for **Hypertext Transfer Protocol over Secure Sockets Layer (HTTPS)**, the standard for transferring encrypted data on the web.

There are several techniques for navigating between URLs. You can click the **Address** field and type a web page’s URL, then press _Enter_ or click **Go** (in IE7, this is the same button as **Refresh**) to request the web page located at that URL. For example, to visit Yahoo!’s website, type www.yahoo.com in the **Address** bar and press the _Enter_ key. Clicking **Refresh** loads the latest version of the web page from the current website. IE7 and FF2, as well as most other popular browsers, add the http:// prefix to the website name because HTTP is the default protocol used for the web.

**_Hyperlinks_** Another way to navigate the web is via visual elements on web pages called **hyperlinks** that, when clicked, load a specified web document. Both images and text may be hyperlinked. When the mouse pointer hovers over a hyperlink, the default arrow pointer changes into a hand with the index finger pointing upward. Often hyperlinked text appears underlined and as in different color from regular text in a web page. Originally used as a publishing tool for scientific research, hyperlinks are widely used to reference sources, or sites that have more information on a particular topic. The paths created by hyperlinking create the effect of the “web.”

Hyperlinks can reference other web pages, e-mail addresses, files and more. If a hyper- link’s URL is in the form mailto:_emailAddress_, clicking the link loads your default e-mail program and opens a **message window** addressed to the specified e-mail address. Note that these hyperlinks are generally displayed on the screen as just the e-mail address or the recipient’s name.

If a hyperlink references a file that the browser is incapable of displaying, the browser prepares to **download** the file, and generally prompts the user for information about how the file should be stored. When a file is downloaded, it is copied onto the user’s computer. Programs, documents, images and sound files are all examples of downloadable files.

**_Tabbed Browsing_** Many browsers, including IE7 and FF2, provide **tabbed browsing**. Holding down the _Ctrl_ key and pressing the letter _T_ while in the IE7 or FF2 browser opens another tab in the same window, allowing the user to browse multiple pages without cluttering the desktop with many windows. \[_Note:_ For Mac users, all references to the _Ctrl_ key in this chapter’s shortcuts should be replaced with the _Command_ key.\] Also, pressing _Ctrl_ while clicking a link will open the requested page in a new tab. Clicking on the tabs switches between the different pages in the browser, and web pages are then accessed normally. Using tabs is an excellent way to keep the browser organized when viewing multiple pages at once.

**_Using the History Feature_** IE7 and FF2 maintain a **History** list of previously visited URLs in chronological order. This feature allows users to return to recently visited websites easily. The history feature can be accessed several different ways. The simplest and most frequently used method is to click the **Forward** and **Back** buttons located at the top of the browser window (see Fig. 2.1). The **Back** button reloads into the browser the page you last visited. Assuming that you used the **Back** button to view previously visited pages, the **Forward** button would load the next URL from the history into the browser. The keyboard shortcut for **Forward** is _<Alt_\> and  

2.3 Internet Explorer 7 and Firefox 2 Features **33**

the _Right Arrow_ key or just _Shift_ and _Backspace_, and the shortcut for **Back** is _<Alt_\> and the _Left Arrow_ key or simply _Backspace_.

In IE7, the user can view the last and next nine web pages visited and the current page by clicking the down arrows immediately to the right of the **Forward** button; the user can then request one of the recently viewed pages by clicking the title of the page in the drop- down list. In FF2, there are separate menus to the right of both the **Forward** and the **Back** buttons. Each displays the previous and following fifteen pages in the history, respectively. Note that these methods only display history results from the browser’s current **session**, which is the period when the browser remains open. In IE7 and FF2, there is a menu to the right of the address bar which displays a longer but more basic history of visited sites (it does not include any URLs accessed through hyperlinks), including websites that were visited in previous sessions. Another way to display sites from a previous session is to use **History**.

Selecting **History** from the down-arrow menu in IE7, or clicking the **History** menu, then the **Show In Sidebar** option in FF2, divides the browser window into two sections: the **History** window (on the left) and the content window (Figs. 2.3–2.4). In IE7, clicking the yellow star icon in the upper left of the window, then selecting the **History** option, dis- plays a similar menu. By default, the **History** window lists the URLs visited in the past twenty days in IE7 and nine days in FF2.

**Fig. 2.3** | The **History** menu in Internet Explorer 7.

Interactive **History** window

Site from folder Website folder Content window

**History** date options  

**34** Chapter 2 Web Browser Basics: Internet Explorer and Firefox

The **History** window contains heading levels ordered chronologically. Within each time frame (e.g., **Today**) headings are alphabetized by website name (although the organi- zation can be changed clicking the **History** drop-down menu in IE7 or the **View** drop-down menu of FF2, both located in the **History** window). This window is useful for finding pre- viously visited websites without having to remember the exact URL. Selecting a URL from the **History** window loads the web page into the content window.

**_AutoComplete_** URLs from the history can be displayed in a drop-down list when a user types a URL into the **Address** bar. This feature is called **AutoComplete**. Any URL from this drop-down list can be selected with the mouse to load the web page at that URL into the browser (Fig. 2.5).

**_Off-Line Browsing_** For some users, such as those with dial-up connections, maintaining a connection for long periods of time may not be practical. For this reason, web pages can be saved directly to the computer’s hard drive for **off-line** browsing (i.e., browsing while not connected to the Internet). Select **Save As…** in IE7, or **Save Page As…** in FF2, both from the **File** menu to save a web page and all its components, including the images. \[_Note:_ To display the **File** menu in IE7, press the _Alt_ key.\] This option is also available under the **Page** menu in IE7 (Fig. 2.1). Individual images from a website can also be saved by clicking the image with the right mouse button and selecting **Save Picture As…** (IE7) **or Save Image As...** (FF2) from the displayed **context menu** (Fig. 2.6).

**Fig. 2.4** | The **History** menu in Firefox 2.

**History** date optionsInteractive **History** window

Site from folder Website folder Content window  

2.3 Internet Explorer 7 and Firefox 2 Features **35**

**_Downloads_** As mentioned earlier, files from the Internet may be copied to a computer’s hard drive by a process called **downloading**. This section discusses the types of documents commonly downloaded from the Internet and techniques for downloading them. \[_Note:_ You should always be cautious when downloading files from the Internet, as they may contain viruses. Only download from sites that you trust.\]

Some common Internet downloads are **applications** (i.e., software that performs spe- cific functions, such as word processing), **plug-ins** and **extensions**. Plug-ins are specialized pieces of software that help the browser support additional content types. An example of an IE7 and FF2 plug-in is the **Acrobat Reader** from **Adobe, Inc.** (www.adobe.com/ products/acrobat/readstep2.html), which allows users to view **PDF (Portable Docu-**

**Fig. 2.5** | AutoComplete suggests possible URLs when given a partial address.

**Fig. 2.6** | Saving a picture from a website.

URLsPartial Address  

**36** Chapter 2 Web Browser Basics: Internet Explorer and Firefox

**ment Format)** documents that otherwise cannot be rendered by the browser. Another popular plug-in allows the browser to render **Flash** content, which adds audio, video and animation effects to a website. To view sites enabled with Flash, download the Adobe Flash Player plug-in at www.adobe.com/products/flashplayer. Microsoft’s rich media plug-in, **Silverlight**, is available for download at silverlight.net/GetStarted. (Both Flash and Silverlight are discussed in much greater depth in Chapters 16, 17 and 19). Nor- mally the browser prompts the user to download a plug-in when one is needed. Plug-ins may also be downloaded from CNET (www.download.com). This site has a large, search- able index and database of many plug-in programs available for download.

Extensions are add-ons that enhance the preexisting functionality of the browser. Examples of extensions include blog editors, universal uploaders and various translation dictionaries and tools. Many IE7 add-ons can be found at www.ieaddons.com, and FF2 add-ons can be browsed and downloaded at https://addons.mozilla.org.

**_Viewing Source Code_** Clicking on the **View** menu followed by the **Source** option in IE7 and **Page Source** in FF2 allows you to view the **source code**, or the original code written to create the web page you are viewing. Generally, source code is easy for humans to read and interpret, and allows the viewer to understand how the programmer created the page. For example, if an ele- ment of a web page does not display properly, examining the source code can help to in- form the user what the programmer was trying to do. Examining source code is a useful tool for debugging your own code, or for learning how web developers create some of the elements you see on the web.

**2.4 Customizing Browser Settings** Browsers have many settings that determine how sites are displayed, how security measures are applied and how outputs are rendered. Most of these settings are located in the **Internet Options** dialog (Fig. 2.7) in the **Tools** menu of IE7, and in **Options** under the **Tools** menu in FF2 in Windows (Fig. 2.8) \[_Note:_ For Firefox on a Mac, this is called the **Preferences** menu.\]. The default settings are usually adequate for normal browsing, but these settings can be customized to suit each user’s preferences.

Some privacy settings for IE7 and FF2 can be set under the **Privacy** tab. In IE7 there are six levels of privacy. The most lenient level permits the downloading of **cookies** (text files that are placed on the computer by websites to retain or gather information about the user); the most strict level blocks all cookies from all websites and constantly updates a report to the user about browsing privacy. Using this level may prevent certain websites from working correctly. In FF2 the **Privacy** tab displays options about how data is remem- bered in the system and when cookies should be accepted.

Security options for both browsers can be found under the **Security** tab. The browsers’ options are significantly different, but both allow you to specify how much information you want to hide from unfamiliar sites, as well as how much of the site’s content you would like to block from your own computer. Both browsers allow you to distinguish between trusted sites and the rest of the web, and to browse safe sites with lower security settings.

A personal home page can be specified under the **General** tab in IE7 and **Main** in FF2. The home page is the web page that loads when the browser is first opened and appears when the **Home** button at the top of the browser window is clicked (Figs. 2.1–2.2).  

2.5 Searching the Internet **37**

History options also may be adjusted in this category. By clicking the **Settings** button in the **Browsing history** section of the **General** tab in IE7, or the **Network** option in the **Advanced** tab of FF2, the amount of disk space to be reserved for the web page **cache** can be set. The cache is an area of temporary storage that a browser designates for saving web pages for rapid future access. When a page is viewed that has been visited recently, IE7 and FF2 check whether they already have some elements on that page (such as images) saved in the cache, to reduce download time. Having a large cache can considerably speed up web browsing, whereas having a small cache saves disk space. Caching can sometimes cause problems, because Internet Explorer and Firefox do not always check to ensure that a cached page is the same as the latest version residing on the web server. Holding down the _Ctrl_ key and pressing _F5_ in either browser, or pressing _Ctrl_, _Shift_ and _R_ in FF2, remedies this problem by forcing the browser to retrieve the latest version of the web page from the website. Once the **Internet Options** are set, click **OK** in both browsers.

**2.5 Searching the Internet** The Internet provides a wealth of information on virtually any topic. The sheer volume of information on the web can make it difficult for users to find specific information. To help users locate information, many websites provide **search engines** that explore the Internet and maintain searchable records containing information about website content. This sec- tion explains how search engines work and discusses two types of search engines.

**Fig. 2.7** | **Internet Options** in Internet Explorer 7.

**Tools** menu **Internet Options** dialog

Options categories

Changeable options  

**38** Chapter 2 Web Browser Basics: Internet Explorer and Firefox

Search engines such as Google (www.google.com), Yahoo! (www.yahoo.com), MSN (www.msn.com), AltaVista (www.altavista.com) and Ask.com (www.ask.com) store infor- mation in data repositories called **databases** that facilitate quick information retrieval. When the user enters a word or phrase, the search engine returns a list of hyperlinks to sites that satisfy the search criteria. Each search engine site has different criteria for nar- rowing searches, such as publishing date, language and relevance. Using multiple search engines may provide the best results in finding the desired content quickly. Sites such as MetaCrawler (www.metacrawler.com) use **metasearch engines**, which do not maintain databases. Instead, they send the search criteria to other search engines and aggregate the results. Many web browsers, including IE7 and FF2 (Figs. 2.9–2.10.), have a built-in search box placed in the window that can be used to browse the web. In both browsers, the user can choose which search engine to use by clicking the down-arrow menu (Fig. 2.9–2.10).

Search engines can also be used to help resolve programming errors. There are many websites that contain documentation about specific functions, how to use them correctly and related common errors. Putting a function name or error message into a search engine can often help a programmer discover where a mistake may have been made in the code. Also, websites such as www.thescripts.com allow users to post specific programming questions that can be answered by other programmers. Other websites like this one, as well as communities for specific languages, can be found using search engines.

**Fig. 2.8** | **Options** in Firefox 2.

Changeable options

Options categories**Tools** menu **Internet Options** dialog  

2.5 Searching the Internet **39**

**Fig. 2.9** | Searching the Internet with Internet Explorer 7.

**Fig. 2.10** | Searching the Internet with Firefox 2.

**Search** window

Search engine selections

Search engine menu

**Search** windowSearch engine selections Search engine menu  

**40** Chapter 2 Web Browser Basics: Internet Explorer and Firefox

**2.6 Keeping Track of Your Favorite Sites** As users browse the web, they often visit certain sites repeatedly and may want to record their URL and title. IE7 provides a feature called **favorites** for bookmarking (keeping track of) such sites (Fig. 2.11). Any page’s URL can be added to the list of favorites using the **Favorites** menu’s **Add to Favorites…** command, or by pressing the yellow star and green plus icon in the upper left corner of the window. A **Favorites** window can also be accessed by clicking the yellow star icon on the toolbar and clicking the **Favorites** option. Favorites can be accessed at any time by selecting them with the mouse from the **Favorites** menu. Favorites can be categorized and grouped into folders in the **Organize Favorites** dialog (dis- played when **Organize Favorites…** is selected from the **Favorites** menu). These folders ap- pear as submenus in the **Favorites** menu. The **Organize Favorites** dialog also allows users to rename, delete and move favorites between folders.

FF2 has a similar feature called **bookmarks**, which can be added with the **Bookmark This Page...** option in the **Bookmark** menu and used the same way that **Favorites** are described in this section (Fig. 2.12). Most browsers have their own version of **Favorites** or **Bookmarks**.

**2.7 File Transfer Protocol (FTP)** The **File Transfer Protocol (FTP)** is a set of rules by which computers transfer data, espe- cially large files, over the Internet. An FTP site’s URL begins with ftp:// rather than http://, and can also be accessed either with the web browser or software that supports FTP. **Filezilla** is a popular, open source FTP client for Windows that functions outside a

**Fig. 2.11** | The **Favorites** menu helps organize frequently visited websites in Internet Explorer 7.

**Favorites Add**/**Organize** Favorites

**Add a Favorite** dialog  

2.7 File Transfer Protocol (FTP) **41**

web browser. It can be downloaded for free from http://filezilla.sourceforge.net. FF2 also has an extension, FireFTP, that adds the functionality of an FTP client to the browser. This add-on is available at http://fireftp.mozdev.org.

When your browser is pointed to an FTP site, the contents of the specified site direc- tory appear in the window, and can be browsed as though they were files on the local com- puter. Files are downloaded by clicking their icons and following the browser’s download instructions, or by dragging the file or folder with the mouse onto the desktop or into another directory. Windows users may copy and paste the URL into the address bar of the **My Computer** window, called the Windows Explorer (Fig. 2.13), which has a particularly straightforward interface for FTP. Windows Explorer can be accessed from the **Start** menu, or by clicking the **Page** menu, then selecting **Open FTP Site in Windows Explorer** in IE7.

When accessing an FTP site, the user may or may not be prompted for login infor- mation. Many FTP sites allow **anonymous FTP access**, where any user is permitted to view and download files. If login is required, the username is set by default to _anonymous_, and the user either is prompted for an e-mail address or should put an e-mail address in the password field. The browser sends the user’s e-mail address and name to the website for tracking and information purposes. Other FTP sites contain directories with **restricted access**—only users with authorized usernames and passwords are permitted to access such directories. When a user is trying to enter a restricted-access FTP directory, a **Log On As** dialog like the one in Fig. 2.13 is displayed, prompting the user for login information.

Transferring a file from the local machine to another location on the Internet is called **uploading** and can be accomplished using the FTP protocol. Files can be transferred from

**Fig. 2.12** | The **Bookmarks** menu helps organize frequently visited websites in Firefox 2.

**Add**/**Organize** Bookmarks**Bookmarks**

**Add Bookmark** dialog  

**42** Chapter 2 Web Browser Basics: Internet Explorer and Firefox

the local machine (your computer) to the remote machine (server), with an FTP client. The specific instructions for each client are different, but almost all FTP clients allow you to upload, download and perform other file-managing tasks on your data. Understanding FTP is especially important for web developers, since uploading files to a web server is a necessary part of creating a website.

**2.8 Online Help** Web browsers are complex pieces of software with rich functionality. Although browser designers make every effort to produce user-friendly software, users still need time to fa- miliarize themselves with each web browser and its particular features. Answers to fre- quently asked questions about using the web browser are included with FF2 and IE7, as well as most other browsers. This information is accessible through the built-in help fea- ture available in the **Help** menu (Figs. 2.14–2.15).

**Fig. 2.13** | FTP site access.

Folders in the FTP directoryFTP address

**Log On As** window for password- protected site  

2.8 Online Help **43**

**Fig. 2.14** | Internet Explorer 7 **Help** dialog.

**Fig. 2.15** | Firefox 2 **Help** dialog.

**Help** menu

CategoriesTabs

chevron

**Help** menu

Categories  

**44** Chapter 2 Web Browser Basics: Internet Explorer and Firefox

A good source for locating help about a specific feature is the **Contents and Index** menu item in IE7 and **Help Contents** in FF2, both accessible through the **Help** menu. IE’s help menu can also be accessed by clicking the **Help** option on the toolbar’s chevron. When these items are selected, the browser’s help dialog is displayed. In IE7, the **Contents** tab organizes the help topics by category, the **Index** tab contains an alphabetical list of **Help** topics and the **Search** tab provides capabilities for searching the help documents. The **Favorites** tab allows users to maintain a list of frequently used help topics. FF2’s **Help** window provides a search box and an expandable table of contents for browsing.

**2.9 Other Web Browsers** Besides Internet Explorer and Firefox, many other web browsers are available, including _Opera_ (www.opera.com) and _Safari_ (www.apple.com/safari). All these browsers differ in functionality, performance and features. Also, they employ different HTML layout en- gines, which determine how a web page displays in a browser. Firefox 2 uses Gecko as its layout engine, Safari uses a modified version of the KHTML layout engine and Opera and IE7 have their own engines. Gecko and KHTML are both free and open source.

Opera, as well as IE7 and FF2, is a browser designed to be accessible to all users, including those with visual or mobility impairments. Opera software also recently devel- oped a lightweight “Mini” version of the browser that runs effectively on mobile devices. Safari, originally created for Apple’s Mac OS, features an elegantly simple interface and impressive speed, especially when executing JavaScript (discussed in Chapters 6–11). Because browsers use different HTML layout engines, they may display the same web page differently. Additionally, some capabilities supported in one browser may not be sup- ported in another. The existence of different browser functionality and features makes cross-browser compatibility difficult to achieve.

**2.10 Wrap-Up** In this chapter, we described the requirements for connecting to the Internet, and we in- troduced the basic features of Microsoft’s Internet Explorer 7 and Mozilla’s Firefox 2. You learned how to customize your browsing experience to fit your personal needs, and how to exchange data safely using the Internet. We also discussed how to use search engines to find information on the web and demonstrated how to keep track of useful sites. In the next chapter, we discuss the defining characteristics of Web 2.0 and how it has changed the way that users interact with the Internet.

**2.11 Web Resources** www.deitel.com/ie7 www.deitel.com/firefox

The Deitel Internet Explorer and Firefox Resource Centers contain links to some of the best resources about these browsers on the web. There you’ll find categorized links to Internet Explorer and Firefox downloads and add-ons, keyboard shortcuts, glossaries, code compatibility issues, blogs, forums, podcasts and more. Also check out the range of tutorials on different aspects of these browsers.  

Summary **45**

**Summary _Section 2.1 Introduction to the Internet Explorer 7 and Firefox 2 Web Browsers_** • Web browsers are software programs that allow users to access the web’s rich multimedia con-

tent.

• The two most popular web browsers are Microsoft’s _Internet Explorer_ and Mozilla’s _Firefox_.

**_Section 2.2 Connecting to the Internet_** • A computer alone is not enough to access the Internet. In addition to web browser software, the

computer needs specific hardware and a connection to an Internet Service Provider.

• A modem enables a computer to connect to the Internet. A modem converts data to audio tones and transmits the data over phone lines. A network card, also called a network interface card (NIC), allows a computer to connect to the Internet through a network or a high-speed Internet connection, such as a LAN, cable modem or a Digital Subscriber Line (DSL).

• Bandwidth refers to the amount of data that can be transferred through a communications me- dium in a fixed amount of time. Different ISPs offer different types of high-speed connections, called broadband connections.

• Broadband is a category of high-bandwidth Internet service that is most often provided by cable television and telephone companies to home users.

• DSL is a broadband service that allows computers to be connected at all times to the Internet over existing phone lines, without interfering with voice services.

• Cable modems enable the computer to be connected to the Internet at all times. Cable modems transmit data over the cables that bring television to homes and businesses.

• ISDN provides Internet service over either digital or standard telephone lines. ISDN requires specialized hardware, called a terminal adapter (TA), which is usually obtained from the ISP.

• Fiber optics are a cable alternative that provide greater bandwidth and a better signal, but their popularity is limited by high cost.

**_Section 2.3 Internet Explorer 7 and Firefox 2 Features_** • A URL is the address of a web page. Each web page is associated with a unique URL. URLs usu-

ally begin with http://, which stands for Hypertext Transfer Protocol (HTTP), the industry standard protocol for transferring web documents over the Internet.

• URLs of websites that handle private information, such as credit card numbers, often begin with https://, the abbreviation for Hypertext Transfer Protocol over Secure Sockets Layer (HTTPS), the standard for transferring encrypted data over the Internet.

• Several techniques are available for navigating between different URLs. A user can click the **Ad- dress** field and type a web page’s URL. The user can then press _Enter_ or click **Go** to request the web page located at that URL.

• Another way to navigate the web is via visual elements on web pages called hyperlinks that, when clicked, load a specified web document. Both images and text serve as hyperlinks.

• Hyperlinks can reference other web pages, e-mail addresses and files. If a hyperlink is a mailto:_e-mailaddress_, clicking the link loads your default e-mail program and opens a message window addressed to the specified recipient’s e-mail address.

• Tabbed browsing allows you to browse multiple pages without cluttering the desktop with many windows.

• When a file is downloaded, it is copied onto the user’s computer. Programs, documents, images and sound files are all downloadable files.  

**46** Chapter 2 Web Browser Basics: Internet Explorer and Firefox

• IE7 and FF2 maintain a list of previously visited URLs in chronological order, called the history.

• The **History** window contains heading levels ordered chronologically. Within each time frame headings are alphabetized by site directory name. This window is useful for finding previously visited sites without having to remember the exact URL.

• URLs from the history are displayed in a drop-down list when a user types a URL into the **Ad- dress** bar. This feature is called AutoComplete. Any URL from this drop-down list can be select- ed with the mouse to load the web page at that URL into the browser.

• Web pages can be saved directly to the computer’s hard drive for off-line browsing. Select **Save As…** (IE7) or **Save Page As…** (FF2) from the **File** menu at the top of the browser window to save a web page and all its components.

• Individual images from a website can be saved by clicking the image with the right mouse button and selecting **Save Picture As…** (IE7) or **Save Image As…** (FF2) from the displayed context menu.

• Plug-ins are specialized pieces of software that enable the browser to support additional types of content. Normally the browser prompts the user to download a plug-in when a plug-in is needed.

• Extensions enhance the preexisting functionality of the browser.

• Clicking the **View** menu followed by the **Source** option in IE7 or **Page Source** in FF2 allows you to view the source code, or the original code written to create the web page you are viewing.

**_Section 2.4 Customizing Browser Settings_** • IE7 and FF2 have many settings that determine how sites are displayed, how security measures

are applied and how outputs are rendered. Many of these can be accessed through the **Tools** menu, then **Internet Options** in IE7, or **Options** in FF2.

• The privacy level for IE7 can be set under the **Privacy** tab of the **Internet Options** dialog. There are six levels of privacy. The most lenient level permits downloading and cookies; the strictest level renders a constant flow of alerts and alarms about browsing security and might prevent certain websites from working correctly.

• Privacy settings for FF2 can be found under the **Privacy** tab of **Options**, which displays options about how data is remembered in the system and when cookies should be accepted.

• Other security options can be found for both browsers under the **Security** tab.

• A personal home page can be specified under the **General** tab of the **Internet Options** dialog in IE7, and **Main** under **Options** in FF2. The home page is the web page that loads when the browser is first opened and appears when the **Home** button at the top of the browser window is clicked.

• History and cache options may be adjusted in the **General** tab of the **Internet Options** dialog by clicking the **Settings…** button in IE7, and the cache can be adjusted in the **Network** option in the **Advanced** tab of FF2. The amount of disk space to be reserved for web-page cache can be set here.

**_Section 2.5 Searching the Internet_** • Search engines explore the Internet and maintain searchable records containing information

about websites.

• Metasearch engines do not maintain databases. Instead, they send the search criteria to other search engines and aggregate the results. IE7 and FF2 have built-in search boxes next to the **Ad- dress** bar with several different search engines which can be selected by the user.

• Search engines are helpful tools for finding solutions to programming problems.

**_Section 2.6 Keeping Track of Your Favorite Sites_** • As users browse the web, they often visit certain sites repeatedly. Internet Explorer 7 provides a

feature called **Favorites** for bookmarking such sites, and Firefox 2 has a similar tool called **Book-**  

Terminology **47**

**marks**. Sites can be remembered and organized under the **Favorites** menu in IE7 and the **Book- marks** menu in FF2.

**_Section 2.7 File Transfer Protocol (FTP)_** • FTP (file transfer protocol) is an older protocol for transferring information, especially large files,

over the Internet. An FTP site’s URL begins with ftp:// rather than http://, and can be access- ed through the browser or by any software that supports FTP.

• FTP sites with anonymous access allow any user access. Many FTP sites have restricted access; only users with authorized usernames and passwords are permitted to access such sites.

• Transferring a file from the local machine to another location on the Internet is called uploading and can be accomplished using the FTP protocol.

**_Section 2.8 Online Help_** • The **Help** menu in the browsers allows the user to search or browse for answers to common ques-

tions and solutions to problems with the software.

**_Section 2.9 Other Web Browsers_** • Many other browsers are available for download, each with its own set of features and advantages.

Two of these browsers are Opera and Safari.

**Terminology Address** bar Adobe Acrobat Reader Adobe Flash Player anonymous FTP applications AutoComplete **Back** button bandwidth bookmark broadband connection cable modem cache context menu cookie database dial-up connection Digital Subscriber Line (DSL) download extensions **Favorites** fiber optics file transfer File Transfer Protocol (FTP) Filezilla Firefox 2 (FF2) Flash Content **Forward** button Gecko **Help** menu

**History** home page HTML layout engine hyperlink Hypertext Transfer Protocol (HTTP) Hypertext Transfer Protocol over Secure Sockets

Layer (HTTPS) Integrated Services Digital Network (ISDN) Internet Explorer 7 (IE7) **Internet Options** Internet Service Provider (ISP) metasearch engine modem Mozilla Firefox network network card network interface card (NIC) off-line browsing Opera plug-in Portable Document Format (PDF) **Privacy** restricted access Safari **Search** search engine security level session sharing  

**48** Chapter 2 Web Browser Basics: Internet Explorer and Firefox

Silverlight source code terminal adaptor (TA) Uniform Resource Locator (URL)

uploading web browser web editor Windows Internet Explorer

**Self-Review Exercises 2.1** Fill in the blanks in each of the following statements:

a) The two most popular web browsers are and . b) A browser is used to view files on the . c) The location of a file on the Internet is called its . d) The element in a web page that, when clicked, causes a new web page to load is called

a(n) ; when your mouse passes over this element, the mouse pointer changes into a(n) in IE7 and FF2.

e) IE7 and FF2 keep of a list of visited URLs called the . f) You can save an image from a web page by right clicking the image and selecting

in IE7 or in FF2. g) The feature of IE7 and FF2 that provides options for completing URLs is called

. h) The feature that enables the user to save URLs of frequently visited sites is called

in IE7 or in FF2.

**2.2** State whether each of the following is _true_ or _false_. If the statement is _false_, explain why. a) Fiber optics cables have a better signal than traditional metal cables, but an inferior

bandwidth. b) It is not possible to view web pages when not connected to the Internet. c) Search engines can be used to help resolve programming errors. d) The cache is an area on the hard drive that is used for saving web pages for rapid future

access. e) FTP is a popular Internet mechanism by which files are uploaded and downloaded. f) You can access any FTP site by logging in with the user name anonymous.

**Answers to Self-Review Exercises 2.1** a) Internet Explorer, Firefox. b) Internet and the web. c) URL. d) hyperlink, hand. e) history. f) **Save Picture As…**., **Save Image As…**. g) AutoComplete. h) **Favorites**, **Bookmarks**.

**2.2** a) False. Fiber optic cables have a greater bandwidth than metal ones. b) False. Web pages saved to the hard drive can be viewed using off-line browsing. c) True. d) True. e) True. f) False. Many FTP sites are restricted and do not admit the general public.

**Exercises 2.3** Spell out the following acronyms, and include a brief description of each:

a) HTTP b) FTP c) URL d) DSL e) PDF f) ISP

**2.4** Use your browser’s FTP capability to access ftp.cdrom.com and ftp.deitel.com. Observe what happens in both cases, and, if the site can be accessed, list the directory output.  

Exercises **49**

**2.5** Go to www.ieaddons.com and browse the various extensions and plug-ins that can be in- stalled into Internet Explorer. Choose one to install, and observe what capabilities are added as you browse the Internet.

**2.6** Go to addons.mozilla.org and browse the various extensions and plug-ins that can be in- stalled into Firefox. Choose one to install, and observe what capabilities are added as you browse the Internet.

**2.7** Download and install the Opera (www.opera.com) and Safari (www.apple.com/safari) web browsers. Go to your favorite websites and try to observe any differences in speed, appearance and functionality.  

3 Dive Into®

Web 2.0

**O B J E C T I V E S** In this chapter you will learn:

■ The defining characteristics of Web 2.0.

■ Why search is fundamental to Web 2.0.

■ How Web 2.0 empowers the individual.

■ The importance of collective intelligence and network effects.

■ The significance and growth of blogging.

■ Social networking, social media and social bookmarking.

■ How tagging leads to folksonomies.

■ How web services enable new applications to be quickly and easily “mashed up” from existing applications.

■ Web 2.0 technologies.

■ Web 2.0 Internet business and monetization models.

■ The emerging Semantic Web (the “web of meaning”).

**_Network effects from user contri- butions are the key to market dominance in the Web 2.0 era._ —Tim O’Reilly**

**_Link by link, click by click, search is building possibly the most lasting, ponderous, and sig- nificant cultural artifact in the history of humankind: the Data- base of Intentions._ —John Battelle, _The Search_**

**_Web 2.0 is a massive social ex- periment...this is an opportunity to build a new kind of interna- tional understanding...citizen to citizen, person to person._ —Lev Grossman, _TIME_**

**_One of the powerful things about networking technology like the Internet or the Web or the Se- mantic Web...is that the things we’ve just done with them far surpass the imagination of the people who invented them._ —Tim Berners-Lee, interviewed by Peter Moon, _IDG Now_**  

3.1 Introduction **51 O**

**u tl**

**in e**

\[Note: _Chapter 3, Dive Into® Web 2.0, is also available as a free, frequently updated HTML- based e-book at http://www.deitel.com/freeWeb20ebook/_. _It is also available as a down- loadable, fully-formatted PDF for a small fee. Check this site for the latest hyperlink-rich ver- sion. Many of the topics in this chapter are supplemented by extensive Resource Centers at http://www.deitel.com/resourcecenters.html. The e-book and the PDF link to the Re- source Centers and other web resources for further study._\]

**3.1 Introduction** Chapter 1 presented basic computing concepts and the roles of several key technologies in developing distributed client/server applications for the Internet and the web. Chapter 2 discussed the capabilities of web browsers and how to use the latest versions of the two most popular browsers, Internet Explorer 7 and Firefox 2. Chapter 3 introduces the prin- ciples, applications, technologies, companies, business models and monetization strategies of Web 2.0.

When the Mosaic browser was introduced in 1993, the web exploded in popularity. It continued to experience tremendous growth throughout the 1990s—a period referred to as the “dot-com bubble”; that bubble burst in 2001. In 2003 there was a noticeable shift in how people and businesses were using the web and developing web-based applications.

**3.1** Introduction **3.2** What Is Web 2.0? **3.3** Search **3.4** Content Networks **3.5** User-Generated Content **3.6** Blogging **3.7** Social Networking **3.8** Social Media **3.9** Tagging

**3.10** Social Bookmarking **3.11** Software Development **3.12** Rich Internet Applications (RIAs) **3.13** Web Services, Mashups, Widgets and Gadgets **3.14** Location-Based Services **3.15** XML, RSS, Atom, JSON and VoIP **3.16** Web 2.0 Monetization Models **3.17** Web 2.0 Business Models **3.18** Future of the Web **3.19** Wrap-Up **3.20** Where to Go for More Web 2.0 Information **3.21** Web 2.0 Bibliography **3.22** Web 2.0 Glossary

Self-Review Exercises | Answers to Self-Review Exercises | Exercises  

**52** Chapter 3 Dive Into® Web 2.0

The term **Web 2.0**—coined by **Dale Dougherty** of **O’Reilly® Media**1 in 2003 to describe this trend—became a major media buzzword, but few people really know what it means. Generally, Web 2.0 companies use the web as a platform to create collaborative, commu- nity-based sites (e.g., social networking sites, blogs, wikis, etc.). Web 2.0 was popularized by the annual O’Reilly Media Web 2.0 Summit (launched in 2004), in Tim O’Reilly’s defining article on Web 2.0 entitled, “What is Web 2.0: Design Patterns and Business Models for the Next Generation of Software,”2 and in John Musser and Tim O’Reilly’s for-sale report, “Web 2.0 Principles and Best Practices.”3

The growth of Web 2.0 can be attributed to some key factors. First, hardware keeps getting cheaper and faster, with memory capacities and speeds increasing at a rapid rate. Moore’s Law states that the power of hardware doubles every two years, while the price remains essentially the same.4 This allows for development of applications with high demands that would have been previously unthinkable. Second, broadband Internet use has exploded—a Pew Internet study in March 2006 found 42% of American adults had high-speed Internet in their homes. Of the 35% of Internet users who had posted content online, 73% had broadband Internet.5 The abundance of digital media online would never have been possible without high-speed Internet. Third, the availability of abundant open source software (see Section 3.11) has resulted in cheaper (and often free) customiz- able software options. This makes it easier to start new Web 2.0 companies and greatly decreases the cost of failure. Fourth, unlike in **Web 1.0** (the state of the web through the 1990s and early 2000s), there are many easy-to-employ models available to monetize Web 2.0 businesses—immediately generating (modest amounts of) revenue allows for more stable growth of new companies.

Our information on the companies in this chapter comes from common knowledge, the company websites and the footnoted books and articles.

**3.2 What Is Web 2.0?** In a sense, this entire chapter defines Web 2.0, but let’s begin with a brief, one-section dis- cussion. Web 1.0 was focused on a relatively small number of companies and advertisers producing content for users to access—some people called the web at the time the “bro- chure web.” Web 2.0 _involves_ the user—not only is the content often created by users, but users help organize it, share it, remix it, critique it, update it, etc. One way to look at Web 1.0 is as a _lecture_, a small number of professors informing a large audience of students. In comparison, Web 2.0 is a _conversation_, with everyone having the opportunity to speak and share views.

1\. O’Reilly, T. “What is Web 2.0: Design Patterns and Business Models for the Next Generation of Software.” September 2005 <http://www.oreillynet.com/pub/a/oreilly/tim/news/2005/09/ 30/what-is-web-20.html>.

2\. O’Reilly, T. “What is Web 2.0: Design Patterns and Business Models for the Next Generation of Software.” September 2005 <http://www.oreillynet.com/pub/a/oreilly/tim/news/2005/09/ 30/what-is-web-20.html>.

3\. Musser, J. and T. O’Reilly. _Web 2.0 Principles and Best Practices_. O’Reilly Media, Inc., 2006. 4. Moore, G. “Cramming More Components onto Integrated Circuits.” _Electronics_, April 1965

<ftp://download.intel.com/museum/Moores\_Law/Articles-Press\_Releases/Gordon\_Moore \_1965\_Article.pdf>.

5\. Horrigan, J. B. “Home Broadband Adoption 2006.” _Pew Internet & American Life Project_, May 2006 <http://www.pewinternet.org/pdfs/PIP\_Broadband\_trends2006.pdf>.  

3.2 What Is Web 2.0? **53**

Web 2.0 embraces an **architecture of participation**—a design that encourages user interaction and community contributions.6 You, the user, are the most important aspect of Web 2.0—so important, in fact, that in 2006, _TIME Magazine_’s “Person of the Year” was “you.”7 The article recognized the social phenomenon of Web 2.0—the shift away from a powerful few to an empowered many.

_“We can’t be device centric...we must be user centric.”_ —Bill Gates, MIX06 conference8

Many Web 2.0 companies are built almost entirely on user-generated content and **har- nessing collective intelligence**. The significance is not just in having user-generated con- tent, but in how it is used. Google—the leading search engine and Internet advertising company—sends its users to user-generated websites by considering what users collectively have valued in the past. For websites like MySpace®, Flickr™, YouTube and Wikipedia®, users create the content, while the sites provide the platforms. These companies _trust their users_—without such trust, users cannot make significant contributions to the sites.

_“A platform beats an application every time.”_ —Tim O’Reilly9

The architecture of participation is seen in software development as well. Open source software is available for anyone to use and modify with few or no restrictions—this has played a major role in Web 2.0 development. Harnessing collective intelligence,10 com- munities collaborate to develop software that many people believe is better than propri- etary software.

You, the user, are not only contributing content and developing open source software, but you are also directing how media is delivered, and deciding which news and informa- tion outlets you trust. Many popular blogs now compete with traditional media power- houses. Social bookmarking sites such as del.icio.us and Ma.gnolia allow users to recommend their favorite sites to others. Social media sites such as Digg™ or Reddit enable the community to decide which news articles are the most significant. You are also changing the way we find the information on these sites by **tagging** (i.e., labeling) web content by subject or keyword in a way that helps anyone locate information more effec- tively. This is just one of the ways Web 2.0 helps users identify new meaning in already existing content. RSS feeds (Chapter 14, XML and RSS) enable you to receive new infor- mation as it is updated—pushing the content right to your desktop.

6\. O’Reilly, T. “What is Web 2.0: Design Patterns and Business Models for the Next Generation of Software.” September 2005 <http://www.oreillynet.com/pub/a/oreilly/tim/news/2005/09/ 30/what-is-web-20.html>.

7\. Grossman, L. “TIME’s Person of the Year: You.” _TIME_, December 2006 <http://www.time.com/ time/magazine/article/0,9171,1569514,00.html>.

8\. “Bill Gates: Microsoft MIX06 Conference.” _Microsoft_, March 2006 <http://www.microsoft.com/ presspass/exec/billg/speeches/2006/03-20MIX.mspx>.

9\. O’Reilly, T. “What is Web 2.0: Design Patterns and Business Models for the Next Generation of Software.” September 2005 <http://www.oreillynet.com/pub/a/oreilly/tim/news/2005/09/ 30/what-is-web-20.html>.

10\. O’Reilly, T. “What is Web 2.0: Design Patterns and Business Models for the Next Generation of Software.” September 2005 <http://www.oreillynet.com/pub/a/oreilly/tim/news/2005/09/ 30/what-is-web-20.html>.  

**54** Chapter 3 Dive Into® Web 2.0

The rise of **social networks** has changed the way we interact and network. MySpace— the largest social network—has rapidly become the world’s most popular website. Other popular social networking sites include Facebook, Bebo, LinkedIn, and Second Life—a 3D virtual world where you interact with others via your online persona called an **avatar**.

Many Web 2.0 businesses leverage the **Long Tail**.11 Coined by Chris Anderson in an article in the October 2004 _WIRED_ magazine, the Long Tail refers to the economic model in which the market for non-hits (typically large numbers of low-volume items) could be significant and sometimes even greater than the market for big hits (typically small num- bers of high-volume items).12 So an online company like Netflix—which has a catalog of over 80,000 movie titles for rent—typically rents a large volume of less popular movies in addition to the substantial business it does renting hits. A local movie store has limited shelf space and serves a small, local population; it cannot afford the space to carry the Long Tail movies in every store. However, Netflix serves millions of people and does not have the physical constraints of stores; it can keep a small inventory of many Long Tail movies to serve its entire customer base. The opportunity to leverage the Long Tail is made pos- sible by the relative ease of running a Web 2.0 Internet business and is fueled by the social effects of Web 2.0 that increase exposure for lesser-known products.

In this chapter, we introduce some of the key technologies used to create Web 2.0 applications. Many of these technologies are discussed in detail in the programming chap- ters of _Internet & World Wide Web How to Program, 4/e_. You’ll learn web development tech- nologies, such as Ajax (Chapter 15); its component technologies, including XHTML (Chapter 4), Cascading Style Sheets (CSS, Chapter 5), JavaScript (Chapters 6–11), the Document Object Model (DOM, Chapter 12), XML (Chapter 14) and the XMLHttpRe-

quest object (Chapter 15); and the popular Ajax toolkits—Dojo (Chapter 15) and Script.aculo.us (Chapter 24).

You’ll learn how to build Rich Internet Applications (RIAs)—web applications that offer the responsiveness and rich GUI features of desktop applications. We discuss key tools for building RIAs, including Adobe’s Flex (Chapter 18), Microsoft’s Silverlight (Chapter 19), ASP.NET Ajax (Chapter 25) and Sun’s JavaServer Faces (Chapters 26–27). We present web development tools such as Adobe’s Dreamweaver and its Ajax-enabling capabilities (Chapter 20). We also discuss other popular development technologies including JSON (Chapter 15), the web servers IIS and Apache (Chapter 21), MySQL (Chapter 22), PHP (Chapter 23), and ASP.NET (Chapter 25).

We discuss the emergence of web services (Chapter 28), which allow you to incorpo- rate functionality from existing applications into your own applications quickly and easily. For example, using Amazon Web Services™, you can create a specialty bookstore and earn revenues through the Amazon Associates program; or using Google™ Maps web services with eBay web services, you can build location-based mashup applications to find auction items in certain geographical areas. Web services, inexpensive computers, abundant high- speed Internet access, open source software and many other elements have inspired new, exciting **lightweight business models** that people can launch with only a small investment. Some websites with robust functionality that might have required hundreds of thousands

11\. Anderson, C. _The Long Tail: Why the Future of Business Is Selling Less of More_. Hyperion, 2006. 12. Anderson, C. “The Long Tail.” _WIRED_, October 2004 <http://www.wired.com/wired/archive/

12.10/tail.html>.  

3.3 Search **55**

or even millions of dollars to build in the 1990s can now be built for nominal amounts of money.

Section 3.17 overviews key Web 2.0 business models, many of which are also explained in greater depth throughout the chapter. Fig. 3.1 includes a list of Web 2.0- related conferences. Some have a technology focus, while others have a business focus.

**3.3 Search** _“Google’s mission is to organize the world’s information and make it universally accessible and useful.”_

—Google13

In Web 2.0, the saying “content is king” remains a prevailing theme. With seemingly end- less content available online, the **findability** of content becomes key. **Search engines** are the primary tools people use to find information on the web. Today, you perform searches with keywords, but the future of web search will use natural language (see, for example, Powerset.com). Currently, when you enter a keyword or phrase, the search engine finds matching web pages and shows you a **search engine results page (SERP)** with recom- mended web pages listed and sorted by relevance. People-assisted search engines have also emerged, such as Mahalo, which pays people to develop search results.14 The popularity of vertical search engines—ones that focus on a specific topic or industry—is on the rise, though traffic to these search engines is still far behind the major (more generalized) search engines.

Traffic to the major search engines is growing rapidly—according to a recent com- Score (a web analytics company) report, Americans conducted 8 billion search queries in June 2007, up 26% from the previous year. In the same report, the comScore analysis of

Web 2.0 and related conferences

AdTech Affiliate Marketing Summit AjaxWorld Expo All Things Digital Always On Blog Business Summit eBay Live Emerging Technology Emerging Telephony Future of Online Advertising JavaOne

Microsoft MIX Microsoft Tech Ed MySQL Conference and Expo Open Source (OSCON) RailsConf Search Engine Strategies Tools of Change for Publishing Ubuntu Live Web 2.0 Expo Web 2.0 Summit Where 2.0

**Fig. 3.1** | Web 2.0 and related conferences.

13\. “Company Overview.” _Google_ <http://www.google.com/intl/en/corporate/index.html>. 14. “Mahalo Greenhouse FAQ.” _Mahalo_ <http://greenhouse.mahalo.com/Mahalo\_Greenhouse

\_FAQ>.  

**56** Chapter 3 Dive Into® Web 2.0

U.S. market share across the most popular search engines reported Google at the top with 49.5% of the U.S. search market, followed by Yahoo! with 25.1%, Microsoft with 13.2%, Ask with 5.0% and Time Warner Network with 4.2%.15

John Battelle’s book _The Search: How Google and Its Rivals Rewrote the Rules of Business and Transformed Our Culture_ provides an extensive history of search engines and presents strong arguments for the importance of search in almost every aspect of our personal and business lives. John Battelle’s _Searchblog_ discusses search and technology issues (http:// battellemedia.com).

**_Attention Economy_**

_“Telecommunications bandwidth is not a problem, but human bandwidth is.”_ —Thomas Davenport and John Beck, _The Attention Economy_16

The abundant amounts of information being produced and people’s limited free time has led to an **attention economy**. More content is available than users can sort through on their own, especially given the demands on their time, such as responsibilities to children, parents, friends, employers, etc. _The Attention Economy_, by Thomas Davenport and John Beck, begins with the familiar story of a man whose attention is constantly demanded by work and family. The authors explain that the constant flow of information in today’s world causes attention to continually be diverted.

Though it used to be difficult to obtain diverse content, there are now seemingly end- less options competing for an audience’s attention. As a result, search engines have gained popularity by helping users quickly find and filter the information they want.17

**_Google Search_ Google** is the leading search and online advertising company, founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Google is so popular that its name has been added to the Oxford English Dictionary—the verb “Google” means to find something on the Internet using the Google search engine. (“google” with a low- ercase “g” is a cricket term, whereas “googol” or 10100 is the mathematical term Google was named after.)18

Google’s success in search is largely based on its **PageRank**™ algorithm (patented by Stanford University and Larry Page) and its unique infrastructure of servers that uses linked PCs to achieve faster responses and increased scalability at lower costs.19 Estimates on the number of Google servers range from hundreds of thousands to over one million.20

The PageRank algorithm considers the number of links into a web page and the quality of

15\. “comScore Releases June U.S. Search Engine Rankings.” _CNNMoney_, 16 July 2007 <http:// money.cnn.com/news/newsfeeds/articles/prnewswire/AQM17916072007-1.htm>.

16\. Davenport, T. and J. Beck. _The Attention Economy: Understanding the New Currency of Business_. Har- vard Business School Press, 2002, p.2.

17\. Thompson, C. “Media in the Age of the Swarm.” _cbc.ca_ <http://www.cbc.ca/10th/columns/ media\_thompson.html>.

18\. Brin, S. and L. Page. “The Anatomy of a Large-Scale Hypertextual Web Search Engine.” <http:// infolab.stanford.edu/~backrub/google.html>.

19\. “Technology Overview.” _Google_ <http://www.google.com/corporate/tech.html>. 20. “Google: One Million and Counting.” _Pandia Search Engine News_, 2 July 2007 <http://

www.pandia.com/sew/481-gartner.html>.  

3.3 Search **57**

the linking sites (among other factors) to determine the importance of the page. Each inbound link is a vote saying that site is valuable to someone else; however, votes are given different weights depending on the “voter” site’s own value. So, two pages could have the same PageRank even if one has numerous links in from other pages and the other has fewer links in but from pages with higher PageRank. Google search also considers all of the con- tent on the page, its fonts, its headers and the content of neighboring pages.21 Sites with the highest PageRank will appear at the top of the search results.

In addition to its regular search engine, Google offers specialty search engines for images, news, videos, blogs and more. Using Google web services, you can build Google Maps and other Google services into your applications (see Section 3.13, Web Services, Mashups, Widgets and Gadgets).

**AdWords**, Google’s pay-per-click (PPC) contextual advertising program (launched in 2000), is the company’s main source of revenue. AdWords ads appear next to search results on the Google site (and are related to the search query). Advertisers write their own ads, which are unobtrusive and uniform in appearance—each ad consists of a headline, limited text and a URL. Advertisers bid on search keywords related to their ads and pay based on the number of users who click on the ads.

**AdSense** is Google’s advertising program for publishers (sites like http://

www.deitel.com that offer content), inspired by Susan Wojcicki, the vice president of product management. (In 1998, Wojcicki rented a spare room in her house to Larry Page and Sergey Brin where they founded Google.)22 AdSense is a fundamental and popular form of website monetization, particularly for Web 2.0 startup companies. Google text ads (as well as banner and rich-media ads) are placed on participating sites with related con- tent. Click-through rates on contextual ads are often higher than on non-contextual ads because the ads reach people expressing interest in a related topic. As a result, contextual pay-per-click ads generally pay a higher eCPM (effective cost per thousand impressions).

**_Yahoo!_ Yahoo!** was started in 1994 by Jerry Yang and David Filo (also Stanford Ph.D. students) as a web directory rather than a search engine. The original site, “Jerry and David’s Guide to the World Wide Web,” consisted of their favorite websites manually added to a catego- rized directory.23 As the web grew, maintaining the directory structure became increasing- ly difficult, and a search capability was created for better access to the data. Focusing more on search, Yahoo! also expanded into other areas, becoming a popular provider of e-mail, user groups and more. In 2003, Yahoo! acquired Overture (now Yahoo! Search Market- ing), which was the first search engine to offer sponsored search results successfully.24

**_MSN_** MSN search was created in 1998, a year after Google was launched.25 Over the past few years, Microsoft has made search engine technology development a top priority.26 Mi-

21\. “Technology Overview.” _Google_ <http://www.google.com/corporate/tech.html>. 22. Graham, J. “The House that Helped Build Google.” _USA TODAY_, 5 July 2007, 1B. 23. “Company History.” _Yahoo!_ <http://yhoo.client.shareholder.com/press/history.cfm>. 24. Mills, E. “Google Rises at Yahoo’s Expense.” _CNET_, 23 April 2007 <http://news.com.com/

Google+rises+at+Yahoos+expense/2100-1038\_3-6178164.html>. 25. Underwood, L. “A Brief History of Search Engines.”_Web Ref_ <http://www.webreference.com/au-

thoring/search\_history/>.  

**58** Chapter 3 Dive Into® Web 2.0

crosoft search query volume and its search market share grew rapidly in June 2007; anal- ysis companies comScore and Compete attribute this boost largely to MSN’s Live Search club, a program introduced in May 2007 to reward users of Live Search.27, 28 MSN’s Live Search includes a new search engine, index and crawler.29 It allows you to search the web, performing specialized searches (news, images, or local listings) or MSN content search- es.30 Another approach that Microsoft is taking to increase its search market share is buy- ing vertical search sites such as MedStory, a health search engine. 31 Microsoft is also looking to gain market share in the contextual advertising market through Microsoft ad- Center (similar to Google AdWords and Yahoo! Search Marketing).

**_Ask_ Ask** (formally known as AskJeeves.com) is owned by InterActiveCorp (IAC), which also owns Ticketmaster®, Match.com®, LendingTree.com®, RealEstate.com® and many oth- er Internet properties. In June 2007, Ask launched a new search site, which includes a new design with a simple homepage default, customizable backgrounds, new video search (powered by Blinkx) and the ability to view video previews and listen to music clips. The search results are based on the searcher’s location—Ask will report relevant local businesses and events. Searching for movies, for example, will show local show times.

**_Vertical Search_ Vertical search engines** are specialists (focusing on specific topics) in comparison to gen- eralists (e.g., Google and Yahoo!).32 Vertical search engines enable you to search for re- sources in a specific area, with the goal of providing you with a smaller number of more relevant results. Popular vertical search engines include travel sites (such as Kayak or Ex- pedia), real-estate sites (such as Zillow or Trulia), job search sites (such as Indeed or Mon- ster) and shopping search engines (such as Shopzilla and MySimon).

**_Location-Based Search_ Location-based search** (offered by most major search engines as well as some smaller spe- cialized ones) uses geographic information about the searcher to provide more relevant search results. For example, search engines can ask the user for a ZIP code or estimate the user’s general location based on IP address. The engine can then use this information to give higher priority to search results physically located near the user. This is particularly useful when searching for businesses such as restaurants or car services. (See Section 3.14 for more information on location-based services.)

26\. Olson, S. “MSN Launches Revamped Search Engine.” _CNET,_ 30 June 2004 <http:// news.com.com/MSN+launches+revamped+search+engine/2100-1032\_3-5254083.html>.

27\. “comScore Releases June U.S. Search Engine Rankings.” _CNNMoney_, 16 July 2007 <http:// money.cnn.com/news/newsfeeds/articles/prnewswire/AQM17916072007-1.htm>.

28\. Sullivan, D. “Compete: Microsoft Gaining Searches; Live Search Club Giveaway Working?” _Search Engine Land_, 10 July 2007 <http://searchengineland.com/070710-105603.php>.

29\. “MSN Live Search: About Us.” _MSN_ <http://search.msn.com/docs/default.aspx>. 30. “Web Search: How to use MSN Search.” _MSN_ <http://search.msn.com/docs/

help.aspx?t=SEARCH\_CONC\_WhatsNewWithMSNSearch.htm>. 31. “Vertical Search-Engines: Know Your Subject.” _Economist.com_, 12 July 2007 <http://

www.economist.com/business/displaystory.cfm?story\_id=9478224>. 32. “Vertical Search-Engines: Know Your Subject.” _Economist.com_, 12 July 2007 <http://

www.economist.com/business/displaystory.cfm?story\_id=9478224>.  

3.3 Search **59**

**_Creating Customized Search Engines_** Rollyo—a build-your-own customized search engine website—allows you to explore, cre- ate and personalize search engines (“searchrolls”) created by others. This helps you narrow your search to sites you already trust.33 Other custom search sites include Gigablast and Google Custom Search Engine.

**_Search Engine Optimization (SEO)_ Search Engine Optimization (SEO)** is the process of designing and tuning your website to maximize your findability and improve your rankings in organic (non-paid) search en- gine results. To maximize traffic, you need to take into consideration how search engines work when you design your website. There are two ways of employing SEO. The first, **white hat SEO**, refers to methods that are approved by search engines, do not attempt to deceive the search engines, and produce quality, long-term results. Top white hat tech- niques for SEO include: offering quality content, using proper metadata and effective key- words, and having inbound links from relevant high-quality pages.34 **Black hat** methods are used to deceive search engines. Although they may result in temporary improvement in search engine results, these tactics could get your site banned by the search engines. A “Googlebomb” (or link bomb) is an example of a black hat method—it attempts to trick the Google algorithm into promoting a certain page (generally for humorous reasons).35

**_Link Building_ Link building** is the process of increasing search engine rankings and traffic by generating inbound links to a particular website. Search engine algorithms regard each link as a vote for the destination website’s content, so sites with the greatest **link popularity** (or number of high-quality inbound links) appear highest on search engine result pages (SERPs). The three most practiced methods of building links include reciprocal linking, link baiting and natural linking. **Reciprocal linking** is an exchange in which two related websites link to each other, increasing the link popularity of both sites and adding value for site users. **Link baiting** involves creating attention-grabbing web content specifically for viral (exponen- tially increasing) exposure through social media and social bookmarking websites. **Natural linking** is the process of building one-way inbound links by optimizing website content and user experience without the explicit solicitation of a backlink. Search algorithms are continuously updated to prevent black hat SEOs from deceiving search engines with au- tomated linking software and links from directories or other low-quality websites. One- way links from websites with strong, related pages are given greater weight than reciprocal links, links from sites with unrelated content or links from sites with low PageRank.

**_Search Engine Marketing (SEM)_ Search Engine Marketing (SEM)** is the method of promoting your website to increase traffic and search results by raising the site’s visibility on search engine results pages. Danny Sullivan (founder of Search Engine Watch and, more recently, Search Engine Land) introduced the term “Search Engine Marketing” in 2001 to include SEO, manag-

33\. “About Rollyo.” _Rollyo_ <http://www.rollyo.com/about.html>. 34. Wilding, R. “Top 5 Black Hat and White Hat Search Engines Optimisation Techniques.”_PushON_

<http://www.pushon.co.uk/articles/top5-black-hat-white-hat-seo.htm>. 35. Calore, M. “Remembering the First Google Bomb.” _Compiler (WIRED blog)_, 26 January 2007

<http://blog.wired.com/monkeybites/2007/01/earlier\_today\_m.html>.  

**60** Chapter 3 Dive Into® Web 2.0

ing paid listings, developing online marketing strategies and submitting sites to directo- ries.36 SEO is the most popular form of search engine marketing, which continues to take away business from other marketing channels (especially offline sources). According to the Search Engine Marketing Professional Organization’s annual State of Search Engine Mar- keting survey, North American advertisers spent $9.4 billion on search engine marketing in 2006, a 62% increase over 2005 spending.37

**_Search Engine Watch and Search Engine Land_ Search Engine Watch** is a search engine marketing resource site. It includes articles, tuto- rials, conferences and more. The site, launched in 1997 by Danny Sullivan, was inspired by his 1996 release of “A Webmaster’s Guide To Search Engines.” Search Engine Watch incorporates Web 2.0 features (blogging and forums in addition to expert columnist arti- cles). Other Search Engine Watch departments include search engine submission tips, web searching tips, popular search engines and search engine resources (numerous topics relat- ed to search engines). Danny Sullivan served as Search Engine Watch’s editor-in-chief un- til November 2006, when he left the site and became the editor-in-chief for **Search Engine Land**. The site provides news and information on the major search engines—Google, Ya- hoo!, and Microsoft—as well as search engine marketing and searching issues. The site also informs users of upcoming related conferences and webcasts.

**_Search Engine Strategies Conferences_ Search Engine Strategies** is a global conference series focused on search engine advertising (including current SEO and SEM issues). Search Engine Strategies (hosted by Search En- gine Watch) offers event information given by the top experts in the field as well as repre- sentatives from search engine companies.38 Because traffic and advertising are so important to most Web 2.0 businesses, understanding the search process and making sure your site is easily found is vital.

**_Discovery_** Rather than the traditional use of search engines (searching with a topic in mind), **discov- ery** refers to finding new content you would not have otherwise sought out. For example, Yahoo!’s original directory design allowed users to browse categories, and discover new in- teresting sites. StumbleUpon, a social bookmarking site, addresses discovery with its rec- ommendation system that helps you discover and share websites based on your interests. Content networks also direct users to web content they would not necessarily have looked for otherwise.

**3.4 Content Networks Content networks** are websites or collections of websites that provide information in var- ious forms (such as articles, wikis, blogs, etc.). These provide another way of filtering the vast amounts of information on the Internet, by allowing users to go to a trusted site that

36\. Sullivan, D. “Congratulations! You’re a Search Engine Marketer!” _Search Engine Watch_, 5 November 2005 <http://searchenginewatch.com/showPage.html?page=2164351>.

37\. Sherman, C. “The State of Search Engine Marketing 2006.” _Search Engine Land,_ 8 February 2007 <http://searchengineland.com/070208-095009.php>.

38\. _Search Engine Strategies: Conference & Expos_, 2007 <http://www.searchenginestrategies.com>.  

3.5 User-Generated Content **61**

has already sorted through many sources to find the best content or has provided its own content. Figure 3.2 shows some examples of content networks.

**3.5 User-Generated Content User-generated content** has been the key to success for many of today’s leading Web 2.0 companies, such as Amazon, eBay and Monster. The community adds value to these sites, which, in many cases, are almost entirely built on user-generated content. For example, **eBay** (an online auction site) relies on the community to buy and sell auction items, and **Monster** (a job search engine) connects job seekers with employers and recruiters.

User-generated content includes explicitly generated content such as articles, home videos and photos. It can also include implicitly generated content—information that is gathered from the users’ actions online. For example, every product you buy from Amazon and every video you watch on YouTube provides these sites with valuable information

Content networks

**About.com**—Acquired by the _New York Times_, About is a collection of information on a wide variety of topics. About was founded in 1996 and provides over 500 guides written by topic experts. The guides include new content as well as links to other websites.

**b5media**—A blog network with over 200 blogs related to travel, entertainment, tech- nology and more.

**Corante**—A blog network authored by lead- ing commentators in technology, business, law, science, and culture.

**Deitel**—Deitel Resource Centers (currently about 80 sites and growing rapidly) include links to, and descriptions of, key tutorials, demos, free software tools, articles, e-books, whitepapers, videos, podcasts, blogs, RSS feeds and more. Resource Centers are grouped into major topic areas, including Web 2.0, Internet business, programming languages, software development and open source. See Fig. 2 in the Preface for a com- plete list of Resource Centers.

**eHow**—eHow claims over 35,000 articles explaining “how to do just about every- thing.” The articles are written by members, and the site also features a section of “how to” videos.

**Gawker Media**—A blog network that includes 14 blogs, such as Gizmodo, Gawker, Valleywag and Lifehacker. The blogs cover a range of topics including tech- nology, gossip and more.

**HowStuffWorks**—HowStuffWorks offers articles explaining “how the world actually works.” Articles are written by freelance writ- ers, and experts from _Consumer Guide_ and _Mobil Travel Guide_.

**LifeTips**—LifeTips provides short articles on both work and general life issues from hundreds of writers. Tips are voted on by readers (who can also mark their favorites for easy access).

**9rules**—A blog network with a wide range of blog topics. The site also includes social networking aspects.

**Suite101**—Suite101 offers thousands of articles on a variety of topics written by freelance writers. In addition to the articles, the site also provides discussion areas and free courses.

**Weblogs, Inc.**—A blog network of 90 blogs, including Engadget, Autoblog and Joystiq. Users can apply to write for one of the blogs (and get paid) or suggest topics for potential new blogs.

**Fig. 3.2** | Content networks.  

**62** Chapter 3 Dive Into® Web 2.0

about your interests. Companies like Amazon have developed massive databases of anon- ymous user data to understand how users interact with their site. For example, Amazon uses your purchase history and compares it to purchases made by other users with similar interests to make personalized recommendations (e.g., “customers who bought this item also bought...”). Implicitly generated content is often considered hidden content. For example, web links and tags are hidden content; every site you link to from your own site or bookmark on a social bookmarking site could be considered a vote for that site’s impor- tance. Search engines such as Google (which uses the PageRank algorithm) use the number and quality of these links to a site to determine the importance of a site in search results.

**_Collective Intelligence_ Collective intelligence** is the concept that collaboration can result in smart ideas. Working together, users combine their knowledge for everyone’s benefit.

The first chapter of _Wikinomics_, by Don Tapscott and Anthony D. Williams, tells the Goldcorp story. Inspired by the community efforts in Linux, the CEO of Goldcorp released to the public proprietary geological information about the company’s land. Gold- corp offered cash rewards to people who could use this information to help the company locate gold on the land. The community helped his company find 8 million ounces of gold, catapulting Goldcorp from $100 million in stock equity to $9 billion.39 Goldcorp reaped amazing benefits by sharing information and encouraging community participation.

User-generated content is significant to Web 2.0 companies because of the innovative ways companies are harnessing collective intelligence. We’ve already discussed Google’s PageRank (Section 3.3), which is a product of collective intelligence. Amazon’s and Last.fm’s personalized recommendations also result from collective intelligence, as algo- rithms evaluate user preferences to provide you with a better experience by helping you discover new products or music preferred by other people with similar interests. Wesabe is a web community where members share their decisions about money and savings—the site uses the collective financial experiences of the community to create recommenda- tions.40 Reputation systems (used by companies like eBay) also use collective intelligence to build trust between buyers and sellers by sharing user feedback with the community. Social bookmarking sites (Section 3.10), and social media sites (like Digg and Flickr) use collective intelligence to promote popular material, making it easier for others to find.

**_Wikis_ Wikis**, websites that allow users to edit existing content and add new information, are prime examples of user-generated content and collective intelligence. The most popular wiki is **Wikipedia**, a community-generated encyclopedia with articles available in over 200 languages. Wikipedia trusts its users to follow certain rules, such as not deleting accurate information and not adding biased information, while allowing community members to enforce the rules. The result has been a wealth of information growing much faster than could otherwise be produced. In 2005, an experiment comparing 42 entries from Wiki- pedia and _Britannica_ (a popular printed traditional encyclopedia) showed only slightly

39\. Tapscott, D. and A.D. Williams. _Wikinomics: How Mass Collaboration Changes Everything_. Portfolio Hardcover, 2006.

40\. “FAQ.” _Wesabe_ <http://www.wesabe.com/page/faq>.  

3.5 User-Generated Content **63**

more inaccuracies in the Wikipedia articles.41 The Wikipedia entries were promptly cor- rected, though, whereas errors in _Britannica_ entries cannot be corrected until the book’s next printing and will remain in already printed copies.

Wikipedia, **Wikia** (a site for specialized wiki communities about popular television shows, games, literature, shopping and more) and many other wikis use **MediaWiki** open source software (originally developed for Wikipedia). The software can be downloaded from MediaWiki’s website (www.mediawiki.org), where you can also find descriptions, tutorials, suggestions and more to help navigate the software. Wikis are also used by many companies to provide product information, support and community resources. **Social- Text**, the first wiki company, provides corporate wiki services. Many companies have found that using wikis for project collaboration reduces e-mails and phone calls between employees, while allowing the ability to closely track a project’s changes.42

**_Collaborative Filtering_** Though collaboration can result in a wealth of knowledge, some users might submit false or faulty information. For example, Wikipedia has experienced instances of people delib- erately adding false information to entries. While **moderation** (monitoring of content by staff) is sometimes necessary, it is time consuming and costly. Many Web 2.0 companies rely on the community to help police their sites. This **collaborative filtering** lets users pro- mote valuable material and flag offensive or inappropriate material. Users have the power to choose for themselves what is important. Examples of sites using collaborative filtering include Digg, a news site where users rate the stories (see Section 3.8), and social book- marking sites such as del.icio.us, where users can easily find popular sites (see Section 3.10). Customer reviews on Amazon products also employ collaborative filter- ing—readers vote on the usefulness of each review (helping other readers to find the best reviews).

**_Craigslist_ Craigslist**, founded by Craig Newmark, is a popular classified ads website that has radical- ly changed the classified advertising market. Newspapers have experienced a decline in classified ad sales,43 as revenues from help-wanted ads on Craigslist climbed to $50 million in 2006.44 Most ad postings on Craigslist are free, and it’s easy for anyone to post ads. The site has gained popularity because of its job and housing postings. In 2005, a documenta- ry, “24 Hours on Craigslist,” showed the diverse postings that occur on the site in a single day.45 Craigslist is built on user content, leveraging the Long Tail by connecting the unique (often unusual) needs of its users. The site also uses collaborative filtering—users are encouraged to flag inappropriate postings.

41\. Cauchi, S. “Online Encyclopedias Put to the Test.” _The Age_, 15 December 2005 <http:// www.theage.com.au/news/national/online-encyclopedias-put-to-the-test/2005/12/14/ 1134500913345.html>.

42\. “SocialText is the Enterprise Wiki Trusted Most by Global 2000 Corporations.” _SocialText_ <http:/ /www.socialtext.com/products/overview>.

43\. Steel, E. “Newspapers’ Ad Sales Show Accelerating Drop.”_The Wall Street Journal_, 18 July 2007, A4. 44. “Leading Indicators.” _FORTUNE_, 13 November 2006, p.40. 45. “24 Hours on Craigslist.”<http://24hoursoncraigslist.com/>.  

**64** Chapter 3 Dive Into® Web 2.0

**_Wisdom of Crowds_ Wisdom of crowds** (from the book of the same title written by James Surowiecki) is sim- ilar to collective intelligence—it suggests that a large diverse group of people (that does not necessarily include experts) can be smarter than a small group of specialists. The key dif- ference between collective intelligence and the wisdom of crowds is that the latter is not meant to be a collaborative process—part of forming a reliable crowd is making sure peo- ple don’t influence each other.46 For example, Surowiecki describes how calculating the average of all submissions in a guessing contest (e.g., guessing the number of jelly beans in a jar) often results in nearly the correct answer, even though most individual estimates are incorrect and vary considerably. When the U.S. submarine _Scorpion_ sank in 1968, the Navy asked various experts to work individually assessing what might have happened; their collective answers were then analyzed to determine the accurate location of the subma- rine.47 Practical everyday applications of the wisdom of crowds can be seen in sites em- ploying collaborative filtering.

**3.6 Blogging** _“The blog is the best relationship generator you’ve ever seen.”_

—Robert Scoble, blogger48

**_History of Blogging_ Blogs** are websites consisting of entries listed in reverse chronological order. They have ex- isted since the mid-1990s; however, interest in blogging has grown exponentially in recent years because of easy-to-use blogging software and increasingly economical Internet access. The term “blog” evolved from **weblog**, a regularly updated list of interesting websites. These blogs consisted of short postings, in reverse chronological order, that contained links to other web pages and short commentaries or reactions. Blogging has since taken on a looser structure—some blogs still follow the traditional format of links and small amounts of text, while others consist of essays, sometimes not containing any links. Blogs can also now incorporate media, such as music or videos. Many people are familiar with personal journal blogs, like those on **Xanga** or **LiveJournal**. These sites include social net- working features and are particularly popular with teenage bloggers, who often write about their day-to-day lives for friends.

Blogging has become a major social phenomenon, empowering users to participate in, rather than just view, the web. In July 2006 most **bloggers**, or blog authors, had not had a personal website before starting their blog.49 The increased availability of user-friendly blogging software has allowed blogging to become accessible to more mainstream Internet users.

46\. Jenkins, H. “Collective Intelligence vs. The Wisdom of Crowds.” _Confessions of an Aca-Fan_, 27 Novem- ber 2006 <http://www.henryjenkins.org/2006/11/collective\_intelligence\_vs\_the.html>.

47\. Surowiecki, J. _The Wisdom of Crowds_. Anchor, 2005. 48. Kirkpatrick, D. “Why There’s No Escaping the Blog.” _FORTUNE_, 10 January 2005 <http://

money.cnn.com/magazines/fortune/fortune\_archive/2005/01/10/8230982/index.htm>. 49. Lenhart, A. and S. Fox. “Bloggers: A Portrait of the Internet’s New Storytellers.” _Pew Internet_

_& American Life Project_, July 2006 <http://www.pewinternet.org/pdfs/PIP%20Bloggers %20Report%20July%2019%202006.pdf>.  

3.6 Blogging **65**

**_Blog Components_ Reader comments** create an interactive experience, allowing readers to react to blog en- tries. According to a Pew Internet study, 87% of blogs allow reader comments.50 Success- ful bloggers pay attention to their readers and respond, often sparking interesting discussions and debates. However, allowing comments increases the possibility of spam (including irrelevant comments, inappropriate language and link spam—where a user tries to increase an irrelevant site’s number of inbound links). By some estimates, over 90% of blog comments are spam.51

**Permalinks** provide blog readers with a way of linking to specific blog entries. Each blog post has a unique URL referring to that single post. Links stay relevant even after the blog entry moves off the homepage and into the archive.

**Trackbacks** tell bloggers who is linking to their posts. This enhances Internet content by making linking two-way. The blogger provides a trackback link, and sites that use the link are added to a list on the blog entry. For an example of a trackbacks section, visit http://www.techcrunch.com/2006/08/08/web-20-the-24-minute-documentary/. This is a permalink to a post on **TechCrunch**, a popular Internet technology blog, that features a Web 2.0 video from 2006.

A **blogroll** is a list of the blogger’s favorite blogs. Though not all blogs feature a blog- roll, it is common for the main page of a blog to contain links to several other blogs. For example, LiveJournal automatically incorporates a blogroll (consisting of users the blogger has marked as friends) into a user’s profile page.

**_Blogging and Journalism_**

_“Freedom of the press is guaranteed only to those who own one.”_ —A.J. Liebling52

Blogging has encouraged **citizen journalism**, allowing anyone to be a journalist. Blogs have become a significant news resource, drawing traffic away from the mainstream media. Some argue that this form of “participatory journalism” holds less biases than mainstream media, or at least makes these biases clear and provides many different views. This **democ- ratization of media** allows a larger group to take part in journalism.53 Traditional journal- ists had previously been able to create a representative democracy (much like the political system of the United States) by speaking for the masses. However, blogging gives a voice to everyone with a computer and Internet access, creating a more direct democracy.

Many bloggers are recognized as members of the media. Just as television and radio increased the speed of news delivery over that of newspapers, blogs have become a fast and in-depth (and often “unwashed”) news medium. The mass media is embracing blogging; many TV news anchors suggest that viewers read their blogs after the show, and many newspaper websites feature blogs by reporters.

50\. Lenhart, A. and S. Fox. “Bloggers: A Portrait of the Internet’s New Storytellers.” _Pew Internet & American Life Project_, July 2006 <http://www.pewinternet.org/pdfs/PIP%20Bloggers %20Report%20July%2019%202006.pdf>.

51\. _Akismet_, 10 August 2007 <http://akismet.com/stats/>. 52. “A.J. Liebling Quotes.” _ThinkExist.com Quotations_ <http://thinkexist.com/quotation/free

dom\_of\_the\_press\_is\_guaranteed\_only\_to\_those/220714.html>. 53. Bowman, S. and C. Willis. “We Media.” July 2003 <http://www.hypergene.net/wemedia/

download/we\_media.pdf>.  

**66** Chapter 3 Dive Into® Web 2.0

Though journalism is a large part of the blogging phenomenon, according to a Pew Internet study only one-third of bloggers consider their blogs a form of journalism. Eighty-four percent of bloggers consider it a hobby, and only 10% spend more than ten hours a week blogging.54 Posting new content and responding to reader comments requires a substantial time commitment.

**_Growth of Blogging_** The number of blogs has been doubling about twice a year.55 However, there is also a large number of abandoned blogs. A Caslon Analytics study found that “66.0% of surveyed blogs had not been updated in two months.”56

Companies are reaching out to the **blogosphere**, or blogging community, to keep in touch with consumer opinions. Many CEOs and top executives from large companies such as Sun Microsystems, Marriott International and General Motors are now regular bloggers. This helps build consumer trust and loyalty. The NewPR Wiki lists over 250 CEOs and upper-management bloggers.57

Increased use of mobile devices has also lead to **moblogging**, or mobile blogging, as bloggers no longer need to be at their computer to update their blogs. Similarly, **vlogging**, or video blogging, has gained popularity. Rocketboom, for example, posts a three-minute video every day covering news and Internet stories.

**_Blogging and RSS Feeds_** Many popular blogs provide RSS and Atom feeds to let readers know when new content is posted. Feeds, offered through blogging software or sites such as **Feedburner** (acquired by Google in 2007), help bloggers track and maintain a steady readership. The feeds (con- taining an entire post or just a selection with a link) can be automatically syndicated via the web and aggregated on a website or application designated by the user. Some sites (like Feedburner) provide an e-mail option, forwarding the day’s posts to subscribers. While the use of feeds is certainly growing, a Pew Internet study in July 2006 reported that only 18% of bloggers provide RSS feeds.58 (See “RSS and Atom” in Section 3.15.)

**_Blogging Software_** Bloggers now have many options for building blogs. Online hosted blog software options include **WordPress** (which also offers server software), **TypePad** and **Blogger**. Blog server software programs include **Movable Type** and **Textpattern**. These require users to have their own web server; however, they also allow for more customization. Some word pro-

54\. Lenhart, A. and S. Fox. “Bloggers: A Portrait of the Internet’s New Storytellers.” _Pew Internet & American Life Project_, July 2006 <http://www.pewinternet.org/pdfs/PIP%20Bloggers %20Report%20July%2019%202006.pdf>.

55\. Walsh, B. _Clear Blogging: How People Are Changing the World and How You Can Join Them_. Apress, 2007.

56\. “Blog Statistics and Demographics.” _Caslon Analytics_. March 2007 <http:// www.caslon.com.au/weblogprofile1.htm>.

57\. “CEO Blog List.” _NewPR Wiki_ <http://www.thenewpr.com/wiki/pmwiki.php/Resources/ CEOBlogsList?pagename=Resources.CEOBlogsList>.

58\. Lenhart, A. and S. Fox. “Bloggers: A Portrait of the Internet’s New Storytellers.” _Pew Internet & American Life Project_, July 2006 <http://www.pewinternet.org/pdfs/PIP%20Bloggers %20Report%20July%2019%202006.pdf>.  

3.7 Social Networking **67**

cessors (such as Microsoft Word 2007) also offer blog publishing features or are compat- ible with blog posting extensions.

**_Blog Networks_ Blog networks** are collections of blogs, often with several editors. Popular blog networks include Corante, Weblogs, Inc., 9rules, b5media and Gawker Media. Many of these net- works, with multiple bloggers and daily postings, draw significant traffic and a broad au- dience. Blog networks help bloggers build reputations and loyal readers. Some social networking sites like MySpace and Facebook also enable blogging to a private network of friends.

**_Blog Search Engines_ Blog search engines**, such as **Technorati** and **Google Blog Search**, monitor the blogo- sphere’s constant changes. When dealing with blogs, search results cannot be based strictly on traditional factors such as reputations built over time (since the blogosphere is so dy- namic). Technorati, which tracked over 93 million blogs in July 2007, addresses the unique needs of what they call the “World Live Web.” Google Blog Search adjusts Goo- gle’s search algorithms to specifically address the blogosphere. Other blog search engines include Feedster, IceRocket and Blogdigger.

**3.7 Social Networking Social networking** sites, which allow users to keep track of their existing interpersonal re- lationships and form new ones, are experiencing extraordinary growth in Web 2.0. Ac- cording to the “Hitwise US Consumer Generated Media Report,” in September 2006 “one in every 20 Internet visits went to one of the top 20 social networks.” A large portion of the traffic on shopping sites (and other Web 2.0 sites) comes from social networking websites such as MySpace.59

**_Network Effects_**

_“What distinguished 2.0 is the design of systems that harness network effects—a broader way of saying community—to get better the more people use them.”_

—Tim O’Reilly60

The term **network effects** refers to the increased value of a network as its number of users grows. **Metcalfe’s Law** states that the value of the network is proportional to the square of the number of users.61 Consider, for example, eBay—the more buyers and sellers that use the site, the more valuable the site becomes to its users. Google’s AdSense advertising pro- gram also increases in value as the number of participating advertisers and publishers grows and ads can be better matched to site content (see Section 3.3). Social networking sites also rely heavily on network effects, often attracting users only if their friends are on the site.

A key part of building a successful network and creating an architecture of participa- tion is setting the user preferences to **default to share** content so users will automatically

59\. Prescott, L. “Hitwise US Consumer Generated Media Report.” _Hitwise,_ February 2007. 60. Heiss, J. “Open Possibilities at the First CommunityOne Conference.” _JavaOne_, 7 May 2007

<http://java.sun.com/javaone/sf/2007/articles/comm1\_post.jsp>. 61. “Metcalf ’s Law.” <http://www-ec.njit.edu/~robertso/infosci/metcalf.html>.  

**68** Chapter 3 Dive Into® Web 2.0

contribute to the value of the network.62 Most users do not think about sharing capabili- ties, let alone care to alter their preferences. If companies do not enable sharing automat- ically, few users will take the time to share their data. _Providing the option to disable sharing is an important privacy feature_.

Network effects also make it difficult (though not impossible) to break into markets already claimed by successful companies. User content often loses value when moved into a new network. For example, a photo’s tags (created by the community) on Flickr are lost if the photo is taken to a different site. Competitors must then find a unique way of con- vincing users that it’s worth the switch.

**_Friendster_ Friendster** was an early leader in social networking. Within a year of Friendster’s founding in 2002, Google offered to buy the site (Friendster rejected the offer). Created as a dating site, Friendster experienced a boom in popularity that quickly overwhelmed its servers. Friendster’s popularity declined as new sites like MySpace emerged.63 Though Friendster has not been able to keep pace with competing social networking sites, it still claims over 45 million members worldwide. It was granted a patent in 2006 on a key part of social networking, specifically how networks of friends are developed (i.e., identifying mutual friends and degrees of separation).64

**_MySpace_ MySpace** is the most popular social networking site. Hitwise reported it as the top website in May 2007 based on market share (beating Google by 1.5%).65 Self-defined as “an on- line community that lets you meet your friends’ friends,” MySpace allows you to build a network of friends and identify mutual friends. Each user’s page can contain general info, pictures, blog entries, a message board and more. Customization options, such as changing the background or adding music, give users an easy way to create their own unique web page. The site also features a private messaging system and special sections for film, music, videos, classifieds, etc.

MySpace plays an important role in the music scene, and even companies and politi- cians are creating accounts. MySpace reaches a younger audience than most conventional media outlets. Some political candidates have used MySpace to reach out to young voters and find new volunteers. Though candidates risk embarrassing connections (to inappro- priate accounts) on these sites, they have often found the benefits to be worth it.66 Busi- nesses can also create profiles, which then become a form of free advertising. News Corp, which acquired MySpace in 2005 for $580 million, recognizes its benefits for local busi-

62\. O’Reilly, T. “What is Web 2.0: Design Patterns and Business Models for the Next Generation of Software.” September 2005 <http://www.oreillynet.com/pub/a/oreilly/tim/news/2005/09/ 30/what-is-web-20.html>.

63\. Rivlin, G. “Wallflower at the Web Party.” _New York Times_, 15 October 2006 <http:// www.nytimes.com/2006/10/15/business/yourmoney/15friend.html>.

64\. Kirkpatrick, M. “Friendster Awarded Patent on Social Networking.” _TechCrunch_, 7 July 2006 <http://www.techcrunch.com/2006/07/07/friendster-awarded-patent-on-social- networking/>.

65\. “Top 20 Websites.” _Hitwise_, May 2007. <http://hitwise.com/datacenter/rankings.php>. 66. Jesdanun, A. “Candidates Seek Youths at MySpace.” _ABC News_, 17 August 2006 <http://abcnews

.go.com/Technology/wireStory?id=2325325&page=1>.  

3.7 Social Networking **69**

nesses that want to gain exposure.67 Though many consider social networking sites to be more popular with teenagers and young adults, the largest user group on MySpace (and other large social networking sites) consists of 35–54 year olds.68

**_Facebook_** Hitwise named **Facebook** the “preferred network among college students. Because Face- book was closed to non-students, students felt safer than on MySpace, and Facebook be- came nearly a social necessity for students seeking to connect with peers.”69 In July 2007, Facebook held an 85% market share of four-year U.S. universities and had over 31 million users.70 Though Facebook has since allowed users without an .edu e-mail address to join, this elitism and idea of increased privacy drew a large enough crowd to compete with My- Space. A user can set privacy levels for networks or even individuals, but Facebook users (as well as users of other social networking sites) are warned about possible repercussions from information they post.

_“Remember, unless you’re prepared to attach something in your profile to a resume or scholarship application, don’t post it.”_

—Facebook71

The site has added many features over the past few years, including photo albums where you can tag your friends in pictures, recently updated profiles lists, events, groups, a marketplace for classified ads, and user status updates. In May 2007, the site introduced third-party applications that can be integrated directly into Facebook. Not all feature implementations have gone smoothly, though. In Fall 2006, Facebook experienced resis- tance from users concerned over privacy issues when it added a “News Feed” feature, which lists updates of friends’ Facebook activities in real time.72 Facebook increased pri- vacy options in response, quieting most complaints.

**_LinkedIn_** In June 2007, **LinkedIn** claimed a membership of “11 million experienced professionals.” The business-oriented social networking site allows users to stay in touch with professional contacts, network with new contacts, check references, and find a job or a potential em- ployee. Its low-key design and feature implementations keep the site unobtrusive.73 Be- cause of its older, more mature audience, privacy concerns are more prevalent—some users worry that their professional contacts will be abused by other users or even their employers

67\. “Businesses Find MySpace is a Place to Reach Youth.” _Trend Watching_, 11 July 2006 <http:// www.trendwatching.com/about/inmedia/articles/youniversal\_branding/businesses\_find \_myspace\_is\_a\_p.html>.

68\. Arrington, M. “Bear Stearns: Yahoo Must Form A Social Networking Strategy.” _TechCrunch_, 3 August 2007 <http://www.techcrunch.com/2007/08/03/bear-stearns-yahoo-must-form-a- social-networking-strategy>.

69\. Prescott, L. “Hitwise US Consumer Generated Media Report.” _Hitwise,_ February 2007. 70. “Facebook Statistics.” _Facebook_, 17 July 2007 <http://static.ak.facebook.com/press/

facebook\_statist ics.pdf?11:44617>. 71. “Customer Support.” _Facebook_ <http://www.facebook.com/help.php?tab=safety>. 72. Schmidt, T. S. “Inside the Backlash Against Facebook.” _TIME_, 6 September 2006 <http://

www.time.com/time/nation/article/0,8599,1532225,00.html>. 73. Copeland, M. “The Missing Link.” _CNNMoney.com_, 28 February 2007 <http://money.cnn.com/

magazines/business2/business2\_archive/2006/12/01/8394967/index.htm>.  

**70** Chapter 3 Dive Into® Web 2.0

for marketing reasons.74 However, the site has gained popularity as a convenient way of networking. Members can find other professionals through their mutual acquaintances and get introductions.

LinkedIn monetizes the site through advertising, premium accounts for power users (mostly recruiters), and groups for companies and organizations. Because of the growing size of its network, LinkedIn maintains a strong hold on the professional market.75

**_Xing_ Xing** is a professional networking site based out of Germany. Xing is most popular in Eu- rope and offers its services across many countries, industries, and languages—an important factor, given today’s globalization of organizations. With its discovery capability and man- agement tools, Xing helps members find professionals, search for job opportunities and lo- cate other business prospects. In April 2007, Xing reached 2 million users.76 Xing has also been acquiring other social networks in an attempt to increase its global reach.

**_Second Life_ Second Life**, developed by Linden Labs, is a **3D virtual world** with millions of inhabitants. Users create **avatars**, digital representations of themselves that they can use to meet other users with similar interests, conduct business, participate in group activities, take classes and more. Some users have created profitable businesses or continued their real-life pro- fessions in the virtual world. For example, lawyers have used Second Life to meet new cli- ents (often software developers wanting to discuss patent laws).77 Many large corporations, such as IBM and Hewlett-Packard, have created Second Life presences to connect with customers, hold meetings and even recruit and interview new hires.78, 79

Users can create objects and add scripts (to animate the objects) in the virtual world. Because Second Life allows users to maintain rights to whatever they create, a dynamic marketplace has emerged that does millions of dollars in transactions monthly—the site has its own exchange, the LindeX.80 Not only does this create monetization opportunities for users (one woman claims to have earned over $1 million in Second Life assets81), but Second Life earns revenue from premium accounts, purchases of virtual land and more.

**_Gaia Online_ Gaia Online** is a popular teen virtual world. This online community allows teens to play games, make friends and express their creativity. Similar to Second Life, Gaia has its own marketplace where members can earn Gaia Gold for various actions they perform on the

74\. “The CEO’s Guide to Social Networks.” _BusinessWeek_, 11 September 2006 <http://business- week.com/mediacenter/qt/podcasts/guide\_to\_tech/guidetotech\_09\_11\_06.mp3>.

75\. Copeland, M. “The Missing Link.” _CNNMoney.com_, 28 February 2007 <http://money.cnn.com/ magazines/business2/business2\_archive/2006/12/01/8394967/index.htm>.

76\. “Xing Reaches 2 Million Users.” Mashable, <http://mashable.com/2007/04/16/xing/>. 77. “Second Life Lawyer.” _Business 2.0_, May 2007, p.86. 78. Athavely, A. “A Job Interview You Don’t Have to Show Up For.” _The Wall Street Journal Online_, 20

June 2007 <http://online.wsj.com/article/SB118229876637841321.html>. 79. Bulkeley, W. “Playing Well With Others.” _The Wall Street Journal Online_, 18 June 2007 <http://

online.wsj.com/article/SB118194536298737221.html>. 80. “What is Second Life.” <http://secondlife.com/whatis>. 81. Lawson, S. “Second Life Creates a Millionaire.” _IDG News_, 30 November 2006 <http://

www.itworld.com/App/4201/061130secondlife/>.  

3.8 Social Media **71**

site (e.g., playing games or posting), and use their earnings at the virtual stores or for cre- ating their own shops. Nearly 300,000 members login daily and about 2 million unique visitors login to Gaia every month.82

**_Mobile Social Networking_** Many social networking sites have found innovative ways of connecting people through the Internet and their mobile devices (such as cell phones and PDAs). Mobile users can send instant messages, check e-mail, and post content to the web from Internet-enabled mobile devices. The new Apple iPhone further realizes the dream of having the **Internet in your pocket** by allowing the full Internet (not a simplified mobile one) to be accessed wherever wireless Internet access is available.

Google’s **Dodgeball.com** provides users with mobile access to a network of friends in many cities. GPS chips in mobile devices allow Dodgeball users to update their location and be notified of nearby friends or “crushes.” Dodgeball also provides an easy way of sending messages to groups of friends to plan get-togethers. (See Section 3.14, Location- Based Services.)

Other sites such as **Twitter** provide similar services, accessible by text message, IM or a web client. Twitter users can message groups of friends at once and automatically receive their friends’ updates on a cell phone or through a chat window. The site is considered to be a **microblogging** service (since users are limited to a small number of characters for each update). Twitter offers a web services API, which allows developers to integrate Twitter into other applications. (See Section 3.13, Web Services, Mashups, Widgets and Gadgets, for more information on web services APIs.)

**3.8 Social Media Social media** refers to any media shared online (e.g., videos, music, photos, news, etc.). Hitwise reported that “increased broadband penetration, combined with the rise of con- sumer generated content and the proliferation of webcams and cell phone and home video cameras have firmly entrenched online video viewing into the habits of entertainment seekers in the United States.”83

**_YouTube_ YouTube**, launched in late 2005, is the leading Internet video site. In true Web 2.0 fash- ion, the entire site is based on user-generated content. Users upload videos, and rate and comment on videos posted by other users. YouTube’s Quick Capture Flash software makes it easy to upload content directly from a webcam. Users can browse videos by cat- egory, tag, or by following “related video” links. Highly rated videos are featured on You- Tube’s homepage. While many professionals and film students post content on the site, the most popular submissions are often simple spoofs or home videos. Because of the viral network effects of YouTube, these amateur videos can quickly gain worldwide attention.

Users can subscribe to other users’ content, share videos with friends by e-mail, or embed videos directly into their blogs or other websites. YouTube addresses privacy and

82\. “About Us.” _Gaia Online_, <http://www.gaiaonline.com/info/about.php?>. 83. Prescott, L. “Hitwise US Consumer Generated Media Report.” _Hitwise,_ February 2007.  

**72** Chapter 3 Dive Into® Web 2.0

spam concerns by allowing users to set videos as “public” or “private” and flag inappro- priate material for review by YouTube’s staff.

Less than a year after its official launch, YouTube was acquired by Google (which had its own less popular Google Video site) for $1.65 billion. Less than six months after the acquisition, Viacom sued YouTube for $1 billion for copyright infringement.84 The Dig- ital Millennium Copyright Act of 1998 protects companies from prosecution due to user actions if they work in “good faith” to remove offending content.85 However, interpreta- tions of this act vary, and it has become a point of contention for many companies. You- Tube is developing a mechanism that automatically detects copyrighted material. Currently, illegal content is removed from the site manually.

**_Internet TV_** Many mass-media companies now offer full-length episodes of popular television shows on their websites to tap into the increasingly popular Internet television market. The av- erage American watches 4.5 hours of television a day, not including Internet television.86

Sites, such as **Joost**, Veoh and MobiTV, have emerged as a new way of watching television. Joost, for example, uses semantic technologies to help users find programs that interest them. (See Section 3.18, Future of the Web.)

Limited by copyright issues, Internet TV sites must make deals with mainstream net- works to offer their content online. Viacom made a deal with Joost, allowing the site to include some shows from networks such as MTV, VH1 and Comedy Central.87 As users take back the power to choose what they watch and when, networks may find themselves making more deals with Internet TV companies. As technologies continue to improve, Internet TV has the potential to radically change the television industry. Already, smaller content creators are able to gain access to worldwide audiences. In late June 2007, MySpace joined the market with its MySpaceTV. With MySpace’s enormous member- ship, it could rapidly become a direct competitor to YouTube and Internet TV websites.

Internet TV allows advertisers to target their markets more precisely than with broad- cast television. Advertisers can use demographic information, such as location, gender and age, to serve appropriate ads.

**_Digg_ Digg** features news, videos and podcasts, all posted and rated by users. It has gained pop- ularity by allowing users to “digg” or “bury” posts and user comments. Valuable sites, marked by large numbers of diggs, are moved to the Digg front page where other users can easily find them. Formulas were adjusted to make sure the “wisdom of crowds” was not being hijacked by users trying to promote their own posts.88 Sites that are “dugg” and fea-

84\. Mills, E. “Copyright Quagmire for Google and YouTube.” _ZDNet_, 14 March 2007 <http:// news.zdnet.com/2100-9588\_22-6167281.html>.

85\. “Conference Report Filed in House.” _Library of Congress_, 8 October 1998 <http://thomas .loc.gov/cgi-bin/bdquery/z?d105:HR02281:@@@D&summ2=m&>.

86\. Colvin, G. “TV Is Dying? Long Live TV!” _FORTUNE_, 5 February 2007, p.43. 87. O’Hear, S. “Viacom to Partner with Joost.” _ZDNet_, 20 February 2007 <http://blogs.zdnet.com/

social/?p=96>. 88. Maney, K. “Techies Hot on Concept of ‘Wisdom of Crowds,’ But It Has Some Pitfalls.” _USA_

_Today_, 12 September 2006 <http://www.usatoday.com/tech/columnist/kevinmaney/2006- 09-12-wisdom-of-crowds\_x.htm>.  

3.8 Social Media **73**

tured on the homepage typically experience a traffic surge. Bloggers can add Digg buttons to their sites, making it easy for readers to “digg” their posts.

Digg uses collaborative filtering to help reduce spam by “burying” it (users can vote against posts they don’t like). Users can also set the threshold of diggs to automatically filter out content with low ratings. The site was criticized for removing popular posts of HD DVD security cracks (on the advice of lawyers); however, Kevin Rose (Digg’s founder) decided to support the crowds and “deal with whatever the consequences might be.”89 Digg has additional social networking capabilities; users can view their friends’ Digg activities and the Diggs of other users with similar interests. Some Digg-like sites include Netscape, Reddit and Newsvine.

**_Last.fm_ Last.fm** is an Internet radio website that uses Web 2.0 concepts to make music recommen- dations and build communities. The site provides open source desktop software that can be integrated into most popular music players. Its **scrobbling** feature tracks the music users listen to so that Last.fm can provide users with personalized recommendations. A stream- able radio with “discovery mode” and a network of like-minded listeners help users find new music. Groups and an events section add social value. The site also offers tagging and wiki pages for artists and record labels.

**_Digital Rights Management (DRM)_ Digital Rights Management (DRM)** systems add software to media files to prevent them from being misused, but these systems restrict compatibility with many media players. Companies want to protect their digital products from illegal distribution; however, users want unrestricted access to media they’ve purchased.

**iTunes**, Apple’s music store, has been criticized for restricting users’ access to their own music by allowing only up to five computers to be authorized to play any given file. However, Apple’s Steve Jobs advocated a DRM-free music world in February 2007, arguing the greater risk for piracy is in DRM-free CDs, which make up the majority of music sales.90 CDs remain DRM-free because many CD players are not compatible with DRM systems. In June 2007, Amazon offered DRM-free downloads from more than 12,000 record labels, and both iTunes and Amazon sell DRM-free music from EMI (one of the four major record companies).91

**_Podcasting_ Podcasting** was popularized by Apple’s iPod portable media player. A **podcast** is a digital audio file (e.g., an .mp3) that often takes on the characteristics of a radio talk show (though without live callers).92 Much as blogging has made journalism accessible to everyone, pod-

89\. Hefflinger, M. “Digg Users Revolt Over Deleted Posts of HD DVD Security Hack.” _digitalmedi- awire_, 2 May 2007 <http://www.dmwmedia.com/news/2007/05/02/digg-users-revolt-over- deleted-posts-of-hd-dvd-security-hack>.

90\. Jobs, S. “Thoughts on Music.” 6 February 2007 <http://www.apple.com/hotnews/thoughtso nmusic/>.

91\. “Amazon.com to Launch DRM-Free MP3 Music Download Store with Songs and Albums from EMI Music and More Than 12,000 Other Labels.” 16 May 2007 <http://phx.corporate-ir .net/phoenix.zhtml?c=176060&p=irol-newsArticle&ID=1003003>.

92\. Torrone, P. “What Is Podcasting?” _O’Reilly Media_, 20 July 2005 <http://digitalmedia.oreilly .com/2005/07/20/WhatIsPodcasting.html>.  

**74** Chapter 3 Dive Into® Web 2.0

casting has introduced a more democratic form of radio broadcasting. Podcasts are easily created with audio software and can be played on a computer or portable media player. The files are posted online at individual websites or distributed via programs like Apple’s iTunes. Listeners can often subscribe to podcasts via RSS feeds. Forrester Research pre- dicted 12 million households will be regularly subscribing to podcasts by 2010.93

**3.9 Tagging _History of Tagging_ Tagging**, or labeling content, is part of the collaborative nature of Web 2.0. A tag is any user-generated word or phrase that helps organize web content and label it in a more hu- man way. Though standard sets of labels allow users to mark content in a general way, tag- ging items with self-chosen labels creates a stronger identification of the content. In an interview by the Pew Internet & American Life Project, David Weinberger (author of _Ev- erything is Miscellaneous_) said:

_“Maybe the most interesting thing about tagging is that we now have millions and millions of people who are saying, in public, what they think pages and images are about.”_

—David Weinberger

As part of the same December 2006 report, 28% of Internet users had reportedly “tagged” content online.94

**_Tag Clouds_ Tag Clouds** are visual displays of tags weighted by popularity. Many Web 2.0 sites include a graphical representation of popular tags (the popularity of the tag marked by the size of its text). There are many ways of forming tag clouds—terms often appear in alphabetical order. However, tag clouds show only how the majority (or the crowd) thinks and disre- gard many individual unique points of view.95 Figure 3.3 is an example of a “text cloud” that we created manually from the major terms in this chapter. (To build your own text cloud try ArtViper’s TextTagCloud tool at http://www.artviper.net/texttagcloud/.)

**_Folksonomies_ Folksonomies** are classifications based on tags. The term is generally attributed to Thomas Vander Wal, who combined the words “taxonomy” and “folk” to create a new term for this Internet phenomenon.96 Folksonomies are formed on sites such as Flickr, Technorati and del.icio.us. Users can search content by tags, which identify content in different (and sometimes more meaningful) ways than traditional keywords used by search engines.

An example of Web 2.0’s reach outside of traditional technology fields can be seen in the **steve.museum project**, an experiment in tagging and folksonomies regarding museum

93\. D’Agostino, D. “Security in the World of Web 2.0.” _Innovations_, Winter 2006, p.15. 94. Rainie, L. “Tagging.” _Pew Internet & American Life Project_, 31 January 2007. <http://www.pewin-

ternet.org/pdfs/PIP\_Tagging.pdf>. 95. Rainie, L. “Tagging.” _Pew Internet & American Life Project_, 31 January 2007. <http://www.pewin-

ternet.org/pdfs/PIP\_Tagging.pdf>. 96. Vander Wal, T. “Folksonomy Coinage and Definition.” _Vanderwal.net_, 2 February 2007 <http://

www.vanderwal.net/folksonomy.html>.  

3.9 Tagging **75**

collections. In 2005, The Metropolitan Museum of Art and the Guggenheim Museum organized a retreat to plan the project.97 In 2007 they posted various collections of art online and asked the community for help tagging them.

**_Flickr_ Flickr**—a popular photo-sharing site—was launched in February 2004 and acquired by Yahoo! in 2005. The Flickr development team was originally working on “The Game

**Fig. 3.3** | Text cloud of major Web 2.0 terms from this chapter.

97\. Chun, S., R. Cherry, D. Hiwiller, J. Trant and B. Wyman. “Steve.museum: An Ongoing Experiment in Social Tagging, Folksonomy, and Museums.” _Archives & Museum Informatics_, 1 March 2006 <http://www.archimuse.com/mw2006/papers/wyman/wyman.html>.  

**76** Chapter 3 Dive Into® Web 2.0

Neverending”—a multiplayer Flash game based on IM (instant message) and chat inter- faces.98 However, the team listened to its users and developed real-time photo sharing (Flickr Live) and more traditional web pages where users could view uploaded pictures. The Game Neverending and Flickr Live were later retired as the popularity of photo shar- ing and commenting on the web pages grew.99

Flickr is a key content-tagging site. Intended as a way of organizing personal photo collections, tagging on the site gained popularity as the community became interested in “a global view of the **tagscape**” (how other people are tagging photos).100 Users can search for photos by meaningful tags. The tags also encourage loyalty to the site, since the tags are lost if photos are moved to another site.

**_Technorati_ Technorati**, a social media search engine, uses tags to find relevant blogs and other forms of social media. To become searchable by Technorati, bloggers can add tags to their posts with a simple line of HTML or use the automated category system offered by some blog- ging software packages.101 Technorati tag searches return results from the blogosphere, YouTube videos and Flickr photos. Technorati features a tag cloud on its homepage and a “where’s the fire” section to promote the most popular tags and search results.

**3.10 Social Bookmarking Social bookmarking** sites let you share your Internet bookmarks (e.g., your favorite web- sites, blogs, and articles) through a website. Users can access these bookmarks from any computer and discover new sites by searching popular bookmarks and tags. Some of the most popular social bookmarking sites are del.icio.us, Ma.gnolia, Blue Dot, Stumble- Upon, Simpy and Furl.

**_del.icio.us_ del.icio.us**, a self-described “collection of favorites,” reported its two-millionth user regis- tration in March 2007.102 Users can add a bookmark by going to the site or by using the del.icio.us downloadable browser buttons. Some sites post clickable badges—a button provided by del.icio.us to “save this page”—that make it easy for users to bookmark the site using del.icio.us.

del.icio.us is a great example of a Web 2.0 company that uses tagging, social net- working and user-generated content. When bookmarking a website, users can add notes and tags to describe the site. These tags are searchable and help organize sites, making it easier for users to find the content they want based on what other users have recommended (by bookmarking). Users can also add descriptions to tags, which can help clear up what

98\. Schonfeld, E. “The Flickrization of Yahoo!” _CNN Money.com_, 1 December 2005 <http:// money.cnn.com/magazines/business2/business2\_archive/2005/12/01/8364623/>.

99\. Garrett, J.J. “An Interview with Flickr’s Eric Costello.” _Adaptive Path_, 4 August 2005 <http:// www.adaptivepath.com/publications/essays/archives/000519.php>.

100\. Garrett, J.J. “An Interview with Flickr’s Eric Costello.” _Adaptive Path_, 4 August 2005 <http:// www.adaptivepath.com/publications/essays/archives/000519.php>.

101\. “Using Technorati Tags.” _Technorati_ <http://support.technorati.com/support/siteguide/ tags>.

102\. “That was Fast.” del.icio.us blog, 29 March 2007 <http://blog.del.icio.us/blog/2007/03/ that\_was\_fast.html>.  

3.11 Software Development **77**

a certain tag might mean to different people. Thus, searching for content on del.icio.us is based on collaborative filtering rather than search engine algorithms. The site also offers a fully searchable podcasting section.

Third parties can use the del.icio.us web services API to build tools and incorporate social bookmarking functionality into their applications (see Section 3.13, Web Services, Mashups, Widgets and Gadgets). For example, Adobe Illustrator uses the del.icio.us tech- nology to organize bookmarks in the program’s documentation.103

**_Ma.gnolia_**

_“If searching was the first day of the web, people helping each other find what they want must be the second.”_

—Ma.gnolia104

**Ma.gnolia** is another social bookmarking site offering tagging and convenient bookmark accessibility through the site. Bookmarked pages are saved (when possible) so users need not worry about losing content if a page goes offline. The site also provides browser but- tons (bookmarklets) for posting sites to Ma.gnolia, and a “roots” feature, which lets you see what other users have said about a site while surfing the Internet. Ma.gnolia encourages social networking through user groups and a private messaging feature. To deal with spam, Ma.gnolia trusts handpicked moderators, called “gardeners.”105

**3.11 Software Development** A key to Web 2.0 software development is to KIS (keep it simple; keep it small). At the 2006 Emerging Technology Conference, Rael Dornfest (now CEO of the company “val- ues of n” and former O’Reilly CTO) explained, “great businesses will be built on giving you less.”106 This is particularly important given the “attention economy” (too much in- formation, too little time)—the theme of the 2006 conference.

**_The Webtop_** The web has now become an application, development, delivery, and execution platform. The **webtop**, or web desktop, allows you to run web applications in a desktop-like envi- ronment in a web browser. Using the web as a platform is part of a movement toward op- erating-system–independent applications. The removal of OS barriers allows the potential audience for any single product to become larger. An example of a popular webtop is the Laszlo Webtop (built on the OpenLaszlo framework), which runs applications written in OpenLaszlo as well as those written in other frameworks using XML requests.107 Exam-

103\. “Know How Adobe and del.icio.us Work Together?” del.icio.us blog, 30 May 2007 <http:// blog.del.icio.us/blog/2007/05/knowhow\_adobe\_a.html>.

104\. “About Ma.gnolia.” <http://ma.gnolia.com/about>. 105. “Gardeners.” Ma.gnolia Community Wiki, 29 March 2007 <http://wiki.ma.gnolia.com/

Gardeners>. 106. Farber, D. “ETech: Attenuation, Web 2.0 and spimes.” _ZDNet_, 7 March 2006 <http://

blogs.zdnet.com/BTL/?p=2667>. 107. “The RIA Desktop in a Browser.” _LaszloSystems_ <http://www.laszlosystems.com/software/

webtop>.  

**78** Chapter 3 Dive Into® Web 2.0

ples of Laszlo Webtop applications can be seen at http://www.laszlosystems.com/

showcase/samples. Other webtops include eyeOS and StartForce.

**_Software as a Service (SaaS)_ Software as a Service (SaaS)**, application software that runs on a web server rather than being installed on the client computer, has gained popularity, particularly with businesses. It provides many benefits, including fewer demands on internal IT departments, increased accessibility for out-of-the-office use, and an easy way to maintain software on a large scale.108 Instead of being installed on the local machine, software is installed on the pro- vider’s web server and accessed by customers “as a service” over the Internet. Updates ap- plied on the server impact every computer. This change from local to server machine makes it easier for large corporations to keep software updates uniform throughout the or- ganization. Most Google software is offered as SaaS. Microsoft now offers SaaS products, Windows Live and Office Live.

Collaborating on projects with co-workers across the world is easier, since informa- tion is stored on a web server instead of on a single desktop. 37Signals has developed sev- eral SaaS products, including Basecamp (a product management and collaboration tool), Campfire (a group chat tool), Backpack (a personal organization tool), Ta-da (a “to-do” list tool), Highrise (a customer relations tool), and Writeboard (a collaborative word-pro- cessing tool). Salesforce.com, which specializes in Customer Relationship Management (CRM) software, is a key SaaS company—they provide popular business applications for sales, marketing, customer support, analytics and more.

**_Perpetual Beta and Agile Development_** Due to the increased use of web applications there has been a shift away from the tradi- tional software release cycle. Historically, companies would spend months or even years developing major new software releases. Because releases came so infrequently, each one had to go through extensive testing and beta periods to create a “final” release each time. There is now a greater focus on **agile software development**, which refers to development of fewer features at a time with more frequent releases. This “**perpetual beta**” of frequent smaller releases is made possible by using the web as a platform.109 A new CD cannot be distributed to all customers every day; however, updates to web servers delivering the ap- plication can be easily made.

37Signals’ _Getting Real_, an e-book that discusses agile techniques for building web applications, warns against the temptation to overuse “betas.” The Internet is a dynamic medium—there will always be flaws and possible upgrades. Companies must decide how long it’s really necessary to remain in a beta period, before it becomes just an excuse for a weak application. _Getting Real_, comprised of 91 short essays and numerous quotes and anecdotes, is a must read, providing an informative, insightful and entertaining walk through the software development process. The e-book can be read for free on their site or downloaded as a PDF for a fee.110

108\. Peiris, M. “The Pros and Cons of Hosted Software.” _SmartBiz_, March 2006 <http://www.smart- biz.com/article/articleview/1118/1/42>.

109\. O’Reilly, T. “What is Web 2.0: Design Patterns and Business Models for the Next Generation of Software.” September 2005 <http://www.oreillynet.com/pub/a/oreilly/tim/news/2005/09/ 30/what-is-web-20.html>.

110\. 37Signals. _Getting Real_. 2006 <http://gettingreal.37signals.com>.  

3.11 Software Development **79**

**_Open Source_** The open source movement continues to gain momentum. The idea behind it is not new (it was popularized in 1998 with O’Reilly’s Freeware Open Source Summit, now known as OSCON).111 Historically, programs had been distributed by sharing the source code, before selling compiled programs became the norm. Though open source software is not always free, the source code is available (under license) to developers, who can customize it to meet their unique needs.

_“Business-technology managers know all too well the adage about open source: It’s free, as in a free puppy. The work and expense start once you get it home.”_

—Larry Greenemeier, _InformationWeek_112

Using open source projects, such as the popular Linux operating systems Red Hat or Ubuntu, may require more work and technical knowledge than using the Microsoft Win- dows or Apple Macintosh operating systems. However, advanced users are able to cus- tomize the software to fit their needs. Benefits to using an open source program include the possibility of reduced cost (if you have the skills to work with it) and the worldwide support networks where users help each other. Because the source code is available to everyone, users can look to the community for bug fixes and plug-ins (program extensions that add functionality), instead of waiting for the software vendor to address each issue. The Ubuntu forums, for example, contain a wealth of information created by users helping other users. In addition to the free support that springs up around open source projects, businesses have been built from developing project extensions and consulting. IBM invested $1 billion in Linux in 2001.

_“Linux can do for business applications what the Internet did for networking and communications.”_

—Louis Gerstner, former CEO of IBM113

At http://www.SourceForge.net over 150,000 open source projects are under develop- ment. Other sites with open source downloads include freshmeat.net and Tucows. The popular **Firefox** web browser from the **Mozilla Foundation**, the Apache web server from the **Apache Software Foundation**, and the MySQL database system are all open source. DotNetNuke and PHPNuke offer open source frameworks for developing rich Internet portals, making it easy and economical to develop sophisticated websites. (http:// www.deitel.com is a DotNetNuke site.)

**_Licensing: GNU Licenses and Creative Commons_** Open source project licenses vary—many projects use the GNU General Public License (GPL), which allows redistribution of the project provided the source code is included and the copyright information is left intact. The Free Software Foundation provides other ver- sions as well, including the GNU Lesser General Public License and the GNU Free Doc-

111\. Van Rossum, G. “Open Source Summit Trip Report.” _Linux Gazette_, 10 April 1998 <http:// linuxgazette.net/issue28/rossum.html>.

112\. Greenemeier, L. “Open-Source Exuberance.” _InformationWeek_, 11 July 2005 <http://www.info rmationweek.com/story/showArticle.jhtml?articleID=165700923>.

113\. Wilcox, J. “IBM to Spend $1 Billion on Linux in 2001.” _CNET_, 12 December 2000 <http:// news.com.com/IBM+to+spend+1+billion+on+Linux+in+2001/2100-1001\_3-249750.html>.  

**80** Chapter 3 Dive Into® Web 2.0

umentation License. The Open Source Initiative also lists over 50 licenses available to open source software developers, including the BSD license and the MIT license.114

**Creative Commons** (creativecommons.org) deals with licensing issues for all types of digital media. The organization offers a variety of options to support **remixing** (extending existing content), commercial issues and attribution. By allowing users access to general licenses through Creative Commons or the Free Software Foundation, developers can worry less about the complicated issues of licensing and instead focus on developing.

**3.12 Rich Internet Applications (RIAs) Rich Internet Applications (RIAs)** are web applications that offer the responsiveness, “rich” features and functionality approaching that of desktop applications. Early Internet applications supported only a basic HTML **graphical user interface (GUI)**. Though they could serve simple functions, these applications did not have the look or feel of a desktop application. The relatively slow Internet connections these applications relied on led to the term “World Wide Wait.” RIAs are a result of today’s more advanced technologies that allow greater responsiveness and advanced GUIs.

**_Ajax_** The term **Ajax (Asynchronous JavaScript and XML)** was coined by Adaptive Path’s Jesse James Garrett in February 2005. Ajax (see Chapter 15, Ajax-Enabled Rich Internet Appli- cations) allows partial page updates—meaning updates of individual pieces of a web page without having to reload the entire page. This creates a more responsive GUI, allowing users to continue interacting with the page as the server processes requests.

The technologies that make up Ajax—XHTML, CSS, JavaScript, the DOM, XML, and the XMLHttpRequest object—are not new. In fact, in the 1990s, Netscape used asyn- chronous page updates in LiveScript, which evolved into JavaScript. However, the popu- larity of Ajax has dramatically increased since its naming. Ajax performs a vital role in Web 2.0, particularly in building webtop applications and enhancing the user’s overall experi- ence. The following toolkits and **frameworks** (environments with standard components that make development faster and easier) provide libraries and tools for convenient Ajax- enabled application development.

**_Dojo_ Dojo** is an open source JavaScript toolkit—it is a library, not a framework. Dojo develop- ment began in late 2004.115 Dojo helps standardize JavaScript by providing a variety of packages for cross-browser compatibility, rich GUI controls, event handling and more. (See the Dojo section in Chapter 15.)

**_Flex_** Adobe **Flex** (see Chapter 18) is an RIA framework that allows you to build scalable, cross- platform, multimedia-rich applications that can be delivered over the Internet. It uses the Flash Player 9 runtime environment, which is installed on over 97% of computers, allow-

114\. Tiemann, M. “Licenses by Name.” _Open Source Initiative_, 18 September 2006 <http://www.open source.org/licenses/alphabetical>.

115\. “History.” _The Dojo Toolkit_, 10 April 2007 <http://dojotoolkit.org/book/dojo-book-0-9/ introduction/history>.  

3.12 Rich Internet Applications (RIAs) **81**

ing for almost universal compatibility.116 Flash Player 9 is backed by ActionScript 3, Ado- be’s object-oriented scripting language—this uses an asynchronous programming model, which allows for partial page updates similar to Ajax. Flash CS3 (the development tool for creating Flash movies) is discussed in Chapters 16–17.

**_Silverlight_** Microsoft’s **Silverlight** (see Chapter 19), formerly known as Windows Presentation Foun- dation Everywhere (WPF/E) and released in May 2007, is Microsoft’s new competitor to Flex and Flash. Silverlight 1.1 uses a compact version of the .NET framework. Silverlight applications have user interfaces built in Extensible Application Markup Language (XAML)—Microsoft’s XML-based format for describing user interfaces. The new frame- work allows quick and easy development of RIAs and is designed to run on major browsers and operating systems.117 **Moonlight**, an open source version of Silverlight for Linux op- erating systems, is being developed.

**_JavaFX_ JavaFX** is Sun Microsystems’ counterpart to Flex and Silverlight, also designed for build- ing Rich Internet Applications. It consists of the JavaFX Script and JavaFX Mobile (for mobile devices). The JavaFX Script, which takes advantage of the fact Java is installed on most computers, will be available under open source licences (see https://open

jfx.dev.java.net/).118

**_Ruby on Rails_ Ruby on Rails** (see Chapter 24), developed by 37Signals’ David Heinemeier Hansson, is an open source framework based on the Ruby scripting language that allows you to build database-intensive applications quickly, easily, and with less code. Ruby on Rails was de- signed to build 37Signals’ Basecamp (a project management and collaboration tool) and other SaaS products.

**_Script.aculo.us_** The **Script.aculo.us** library for creating “eye candy” effects is built on the Prototype Java- Script framework. Prototype encapsulates the DOM (Document Object Model, Chapter 12) and provides cross-browser processing capabilities.119 Script.aculo.us uses this framework and adds capabilities for rich user interfaces. Its core effects include opac- ity, scale, morph, move, highlight and parallel (for combining multiple effects).120

Script.aculo.us is used on many popular websites and is incorporated into other frame- works (such as Ruby on Rails). We discuss Script.aculo.us and present examples in Chapter 24, Ruby on Rails.

116\. “Adobe Flex 2.” _Adobe_ <http://www.adobe.com/products/flex/whitepapers/pdfs/ flex2wp\_technicaloverview.pdf>.

117\. Cubrilovic, N. “Silverlight: The Web Just Got Richer.” _TechCrunch_, 30 April 2007 <http:// www.techcrunch.com/2007/04/30/silverlight-the-web-just-got-richer>.

118\. “Sun Radically Simplifies Content Authoring—Previews JavaFX Script.” _Sun Microsystems_, 8 May 2007 <http://www.sun.com/aboutsun/pr/2007-05/sunflash.20070508.2.xml>.

119\. “Prototype Tips and Tutorials.” _Prototype JavaScript_ <http://prototypejs.org/learn>. 120. “Core Effects.” _Script.aculo.us Wiki_ <http://wiki.script.aculo.us/scriptaculous/show/

CoreEffects>.  

**82** Chapter 3 Dive Into® Web 2.0

**_JavaServer Faces_ JavaServer Faces (JSF)** is a Java-based web application framework. JSF separates design el- ements from business logic and provides a set of user-interface components (JSF compo- nents) that make developing RIAs simple. One of the **Java BluePrints** projects provides additional resources and libraries for building Ajax-enabled applications. We build RIAs with JSF in Chapters 26–27.

**_ASP.NET Ajax_ ASP.NET Ajax** (Chapter 25) is an extension of the .NET framework for creating Ajax- enabled applications. It includes an open source Ajax Control Toolkit for implementing asynchronous functionality. ASP.NET Ajax is easily used in Microsoft Visual Web Devel- oper or Microsoft Visual Studio to quickly create Rich Internet Applications.

**_Adobe Integrated Runtime and Google Gears_** Though web application use has been increasing, many feel these programs cannot truly compete with desktop applications until the “Offline Problem” (not being able to access web applications and data when not connected to the Internet) has been solved.121 Busi- nesses can lose valuable time and money when Internet issues occur such as a slow or bro- ken Internet connection.

Adobe released its **Adobe Integrated Runtime** (**AIR**; previously called Apollo) in beta form in June 2007. AIR allows users to run Flex web applications on their desktops even when they are _not_ connected to the Internet, thus allowing users to remain efficient when they are unable to access the Internet or when an SaaS application server goes down. Users can continue their work and synchronize it with the servers again later.

**Google Gears**, also in beta, is a similar product, allowing use of web applications while offline. Google Gears was created out of a Google engineer’s 20% project, inspired by wanting to use Google Reader on a bus with “flaky” Internet access.122 (Google engineers devote 20% of their time to projects other than their usual work and 10% of their time to projects that are “truly new.”)123 **Dojo Offline** (using the Dojo library) is built on top of Google Gears, creating an easy-to-use interface for using web applications offline.124

**3.13 Web Services, Mashups, Widgets and Gadgets** _“Design for ‘hackability’ and remixability.”_

—Tim O’Reilly125

Instead of reinventing the wheel with every new project, developers can use existing com- panies’ **web services** to create feature-rich applications. Incorporating web services into new programs allows people to develop new applications quickly.

121\. Berlind, D. “Google Gears Vies to be De Facto Tech for Offline Web Apps.” _ZDNet_, 31 May 2007 <http://blogs.zdnet.com/Berlind/?p=504>.

122\. Mills, E. “Google Gears Churns Toward Microsoft.” _CNET_, 31 May 2007 <http://news.com.com/ 2100-1012\_3-6187942.html>.

123\. “The 70 Percent Solution.” _Business 2.0_, 28 November 2005 <http://money.cnn.com/2005/11/ 28/news/newsmakers/schmidt\_biz20\_1205/>.

124\. “The Dojo Offline Toolkit.” _The Dojo Toolkit_ <http://dojotoolkit.org/offline>. 125. O’Reilly, T. “What is Web 2.0: Design Patterns and Business Models for the Next Generation of

Software.” September 2005 <http://www.oreillynet.com/pub/a/oreilly/tim/news/2005/09/ 30/what-is-web-20.html>.  

3.13 Web Services, Mashups, Widgets and Gadgets **83**

**_APIs_ APIs (Application Programming Interfaces)** provide applications with access to external services and databases. For example, a traditional programming API, like the Sun’s Java API, allows programmers to use already-written methods and functions in their programs. Web services APIs are now offered by some websites as ways of sharing some of their func- tionality and information across the Internet.

Unique databases are central to Web 2.0; “data is the next Intel Inside.”126 Whether data is obtained from a proprietary source or collected over time from users, much of a site’s value is in its databases. Many major Web 2.0 companies (e.g., eBay, Amazon, Google, Yahoo! and Flickr) provide APIs to encourage use of their services and data in the development of mashups, widgets and gadgets.

**_Mashups_ Mashups** combine content or functionality from existing web services, websites and RSS feeds to serve a new purpose. For example, **Housingmaps.com** is a mashup of Google Maps and real-estate listings from Craigslist. Mashups with maps are particularly popular, as are mashups using RSS feeds (see “RSS and Atom” in Section 3.15) created by using services such as Yahoo! PipesTM—a tool that enables you to aggregate and manipulate many data sources.

Using APIs can save time and money (some great mashups have been built in an after- noon); however, the mashup is then reliant on one or more third parties. If the API pro- vider experiences downtime, the mashup will be unavailable as well (unless the mashup is programmed to avoid sites that are down). Always check the “terms of service” for using each company’s web services. Many API providers charge usage fees based on the mashup’s number of calls made to the server. Some sites require you to ask permission before using their APIs for commercial purposes, and others (e.g., Google) require that mashups based on their web services be free. Also, while mashups add value to data, there is always the question of who owns the data, and thus who should profit from the mashup.

Figure 3.4 lists some popular mashups. The site Programmable Web catalogs APIs and mashups and offers a “Mashup Matrix” (http://www.programmableweb.com/ matrix) detailing which APIs have been combined to form each mashup. As more com- panies offer APIs, the only limitation on mashups (and the businesses built on them) is the developer’s creativity. More complex mashups, using programs like Google Earth and Second Life, could be coming soon.127

126\. O’Reilly, T. “What is Web 2.0: Design Patterns and Business Models for the Next Generation of Software.” September 2005 <http://www.oreillynet.com/pub/a/oreilly/tim/news/2005/09/ 30/what-is-web-20.html>.

Mashup Combines

http://www.housingmaps.com Google Maps and Craigslist real-estate listings to create a map marked with available housing listings.

**Fig. 3.4** | Mashup examples. (Part 1 of 2.)

127\. Roush, W. “Second Earth.” _Technology Review_, July/August 2007, p.38.  

**84** Chapter 3 Dive Into® Web 2.0

**_Widgets and Gadgets_ Widgets**, also referred to as **gadgets**, are mini applications designed to run either as stand- alone applications or as add-on features in web pages. _Newsweek_ called 2007 the “Year of the Widget” because of the huge increase in popularity of these applications.128 Widgets can be used to personalize your Internet experience by displaying real-time weather con- ditions, aggregating RSS feeds, viewing maps, receiving event reminders, providing easy access to search engines and more. The availability of web services, APIs and various tools makes it easy even for beginner programmers to develop widgets. There are many catalogs of widgets online—one of the most all-inclusive is **Widgipedia**, which provides an exten- sive catalog of widgets and gadgets for a variety of platforms.

**_Amazon Web Services_ Amazon** is a leading provider of web services. The site provides historical pricing data and E-Commerce Services (ECS), which enable companies to use Amazon’s systems to sell their own products. Amazon also offers hardware and communications infrastructure web services that are particularly popular with companies, providing economical **web-scale computing**. Amazon’s Elastic Compute Cloud (EC2), Simple Storage Service (S3) and Simple Queue Service (SQS) enable businesses to pay for only the processing or storage space needed during any given period. This makes it possible for companies to save money (by not having to buy and maintain new hardware, software and communications equip- ment) while still being able to scale their storage and computing power to handle traffic surges (or reduce loss when the site’s popularity declines). This is extremely significant in the Internet world, where a site’s traffic can explode or crash overnight.

http://www.chicagocrime.org Google Maps and crime data from Cit- izen ICAM to create a map of Chicago marked with crime locations.

http://www.feedmashr.com RSS feeds from Digg, ClipMarks, the _New York Times_, del.icio.us, Reddit and Slashdot to create a listing of the most popular stories from all sources.

http://www.secretprices.com Amazon, Epinions.com and Shop- ping.com to create a comparison shop- ping site.

http://paul.kedrosky.com/ publicloos/

Google Maps and Bathroom Diaries to create a map of San Francisco marked with the locations of public restrooms.

128\. Braiker, B. “Tech: Welcome, Year of the Widget.” _Newsweek_, 30 December 2006 <http:// www.msnbc.msn.com/id/16329739/site/newsweek/>.

Mashup Combines

**Fig. 3.4** | Mashup examples. (Part 2 of 2.)  

3.14 Location-Based Services **85**

Amazon also provides “artificial artificial intelligence” with its unique **Mechanical Turk**. This web service allows applications to call on people to perform tasks (such as iden- tifying pictures) that are easier for humans to do than computers. People can sign up to become part of the Mechanical Turk web service and bid on jobs (called Human Intelli- gence Tasks or HITs). This creates a competitive market, driving down developer costs, creating opportunities for people worldwide and allowing more applications to become feasible.

**_REST (Representational State Transfer)-Based Web Services_ Representational State Transfer (REST)** (originally proposed in Roy Thomas Fielding’s doctoral dissertation129) refers to an architectural style for implementing web services. Though REST is not a standard, RESTful web services are implemented using web stan- dards. Each operation in a RESTful web service is easily identified by a unique URL. So, when the server receives a request, it immediately knows what operation to perform. Such web services can be used in a program or directly from a web browser. In some cases, the results of a particular operation may be cached locally by the browser. This can make sub- sequent requests for the same operation faster by loading the result directly from the browser’s cache.130 Amazon’s S3 is RESTful, and many other Web 2.0 web services pro- vide RESTful interfaces.131

RESTful web services are alternatives to those implemented with SOAP (Simple Object Access Protocol). (We discuss both REST-based and SOAP-based web services in Chapter 28, Web Services.) With SOAP-based web services, the request and response are hidden (in entities known as a SOAP “envelopes”). SOAP requests must be deciphered as they are received at the server to determine the operation to perform and the arguments required to perform that operation. Similarly, the responses are encoded and deciphered on the client to obtain the result of the operation. SOAP does not currently provide a mechanism for caching results.

**3.14 Location-Based Services Location-Based Services (LBS)** are applications that take your geographic location (city, state, location of your mobile device, etc.) into consideration. While the term generally re- fers to services accessed on mobile devices using the Global Positioning System (GPS), it can also be used to describe web applications that take your location into account. Search engines including Yahoo! Local and Google Maps use **localization** to provide you with geographically relevant content. Local search is particularly useful when you want to find a nearby business (e.g., plumbers, taxis, etc.). Location-based services are becoming in- creasingly popular in Web 2.0 applications. Conferences related to LBS include O’Reilly’s Where 2.0 and the Location Intelligence Conference.

**_Global Positioning System (GPS)_** The **Global Positioning System (GPS)**, developed by the United States Department of Defense, uses numerous satellites that send signals to a GPS receiver to determine its exact

129\. Fielding, R. T. “Architectural Styles and the Design of Network-Based Software Architectures.” <http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm>.

130\. Costello, R. “REST Tutorial.” _xFront_, 26 June 2002 <http://www.xfront.com/REST.html>. 131. Richardson, L. and S. Ruby. _RESTful Web Services_. O’Reilly, 2007.  

**86** Chapter 3 Dive Into® Web 2.0

location. (A Russian system called GLONASS also exists, and a new system named Galileo is under development in Europe.) In the 1980s, the US Department of Defense opened GPS for civilian use to encourage satellite technology development.132 Numerous loca- tion-based services are now available using GPS technology, such as GPS mapping devices used in cars or on mobile devices. GPS is also being used for safety. The US Federal Com- munications Commission (FCC) now requires wireless carriers to provide the locations of wireless customers calling 911 so emergency services can find them faster. To meet this requirement, wireless carriers have developed GPS-enabled cell phones.133 These phones also provide premium services, such as driving directions and local information. The Dis- ney Family Locator service uses GPS-enabled phones to help parents keep track of their children (as long as the child is carrying the special cell phone).134

**_Mapping Services_ Google Maps** is one of the most popular mapping applications available online. You can use Google Maps to locate businesses in your area, get driving directions and live traffic information, create custom maps with images and more. You can even get the information by using your mobile device. Google’s local search allows you to locate a business in a geo- graphic area and get its address, phone number, driving directions and even user reviews. **Google Earth** provides satellite images of virtually any location on the planet. In some areas, you can even get a panoramic view of a neighborhood at street level. You can use the Google Maps API to add mapping capabilities to your websites and web applications.

**MapQuest**, owned by AOL, provides similar mapping services. Use it to get direc- tions and maps on your desktop or mobile device. The MapQuest OpenAPI allows you to add location-based services to your web applications. Additional mapping services include Yahoo! Local Maps and MSN Live Search. Both services offer maps, driving direc- tions, traffic information and local search.

Companies such as **NAVTEQ** and **Tele Atlas** provide digital map data for in-vehicle and portable navigation devices, websites, location-based services and more. Developers building commercial location-based services can license the robust mapping products from these companies to build richly functional web applications.

**_GeoRSS and Geotagging_ GeoRSS**, based on the RSS standards, is a set of standards for representing geographical information in a feed. Location and geographical information in a GeoRSS feed can be used in GPS devices, mapping applications and other location-based services. For exam- ple, a blog post about a vacation could map the locations mentioned.135

**Geotagging** can be used to add location information (longitude, latitude, etc.) to web- sites, images, RSS feeds, videos and more. Websites can often determine a user’s location by their IP address. Geotagging a website provides the user with location information about the site.136 Geographic information can be used to add value to search results. Geotagging

132\. Schiller, J. and A. Voisard. _Location-Based Services_. Morgan Kaufmann, 2004. 133. Malykhina, E. “Nokia Wants Your Cell Phone To Tell You Where You Are.” _InformationWeek_, 9 Oc-

tober 2006 <http://www.informationweek.com/showArticle.jhtml?articleID=193105219>. 134. Magid, L. “Global Positioning by Cellphone.” _New York Times_, 19 July 2007, C7. 135. “GeoRSS: Geographically Encoded Objects for RSS Feeds.” _GeoRSS_ <http://georss.org/>. 136. Turner, A. “Geotagging Web Pages and RSS Feeds.” _Linux Journal_, 11 January 2005 <http://in

teractive.linuxjournal.com/node/8025>.  

3.15 XML, RSS, Atom, JSON and VoIP **87**

could also be mashed up with existing visualization systems, such as Google Earth or MSN Virtual Earth, which provide advanced satellite images for anywhere on the planet.

**3.15 XML, RSS, Atom, JSON and VoIP** For more information on any of the following technologies, visit the corresponding Re- source Centers at http://www.deitel.com/resourcecenters.html (see Fig. 2 in the Preface for a complete list of Deitel Resource Centers).

**_XML_ XML** (Extensible Markup Language, Chapter 14), developed in 1996 by the World Wide Web Consortium (W3C), is a markup language that allows you to label data based on its meaning. XML describes data in a way that is meaningful to both humans and computers.

XML documents are text files with a .xml extension; they can be created in text editors. These documents can reference a **Document Type Definition (DTD)** or a **schema**, which defines the structure for the document. This allows the information in the document to be verified by validating parsers, meaning they will check to make sure that no elements are missing (e.g., a last-name element in a document listing full names) and that the elements occur in the proper order. This makes XML data more reliable than data prepared with some other data-describing options. XML also can be used to create customized markup languages (e.g., XHTML for web content, CML for chemistry, MathML for mathematical content and formulas, and XBRL for financial data)—these are referred to as **XML vocab- ularies**. XHTML is described in Chapter 4, Introduction to XHTML. Chapter 14, XML and RSS, presents several examples that use MathML to render mathematical expressions.

**_RSS and Atom_** Sites that offer RSS (Chapter 14) and Atom feeds can maintain an “open connection” with their readers. Users no longer have to regularly visit sites for updates—by subscribing to a site’s feed, users receive updates as new information is posted to the site. The difference between RSS and Atom is subtle and unimportant to most users—many tools support both formats. Versions of RSS (an XML-based web content syndication format) have ex- isted since the late 1990s; Atom dates to 2003.

Most major web browsers support RSS and Atom feeds, and many **aggregators** (or feed readers) are available to help users organize their subscriptions. Feedburner (acquired by Google) is used by many blogs to provide their readers with new posts by e-mail. This service also helps bloggers get a better idea of the size of their audience (by allowing them to see the number of subscribers).

**_JSON_ JavaScript Object Notation (JSON)** was developed in 1999 as an alternative to XML. JSON (discussed in Chapter 15, Ajax-Enabled Rich Internet Applications) is a text-based data interchange format used to represent JavaScript objects as strings and transmit them over a network. It is commonly used in Ajax applications. JSON text is easy to produce and read—it is also faster to parse (or extract) than XML.

**_VoIP_ Voice over Internet Protocol (VoIP)** is the technology used to make free or inexpensive phone calls over the Internet. Some businesses and individuals have switched completely  

**88** Chapter 3 Dive Into® Web 2.0

to VoIP and eliminated traditional phone lines to cut costs. There are many VoIP services, such as Vonage, Packet8 or Lingo; Skype is the most popular. Acquired by eBay to inte- grate buyer and seller voice communication into auctions,137 Skype offers free and fee- based services (such as calling non-Skype phones). VoIP is an enabling technology that can be layered into Web 2.0 companies and websites.

**3.16 Web 2.0 Monetization Models** _“The advertising model has come along; we underestimated how big that would be.”_

—Bill Gates, MIX06

Many Web 1.0 businesses discovered that popularity (“eyeballs”) was not the same as fi- nancial success. Web 2.0 companies are paying more attention to **monetizing** their traffic. Starting an Internet business is cheaper than ever, and the cost of failure is lower. Anyone can start earning modest amounts of money almost immediately, using the monetization models described in Fig. 3.5.

Web 2.0 monetization is heavily reliant on advertising. Using Google’s AdSense con- textual advertising program is one of the fastest and most popular ways of monetizing a new Internet business. For more information see Deitel’s Google AdSense and Website Monetization Resource Centers at http://www.deitel.com/resourcecenters.html.

137\. Broache, A. “eBay to Nab Skype for $2.6 Billion.” _CNET_, 12 September 2005 <http:// news.com.com/eBay+to+nab+Skype+for+2.6+billion/2100-1030\_3-5860055.html>.

Web 2.0 monetization models

**affiliate network**—A business (such as Com- mission Junction and LinkShare) that con- nects web publishers with cost-per-action affiliate programs. See affiliate program.

**affiliate program**—A deal offered by a com- pany to share a portion of the revenues earned from traffic coming from web pub- lisher websites. Affiliates provide text and image ads to post on the publishers’ sites. If a user clicks through to the affiliate site and takes a specified action (e.g., makes a pur- chase, fills out a registration form, etc.) the publisher is paid a portion of the revenue or a flat fee. Companies offering affiliate pro- grams include Amazon (the Amazon Associ- ates program), Indeed, ClickBank, eBay and thousands more.

**banner ad**—An ad that consists of an image, often placed at the top of a page.

**blog advertising**—Advertising specifically designed for display on blog sites. Compa- nies include Federated Media and Blogads.

**contextual advertising**—Advertising that is targeted to the content on a web page. Con- textual ad programs include Google AdSense, Yahoo! Publisher Network, Vibrant Media, Kontera and Tribal Fusion.

**cost-per-action (CPA)**—Advertising that is billed to the advertiser per user action (e.g., purchasing a product or filling out a mort- gage application). Companies include Ama- zon and Indeed. See also performance-based advertising.

**Fig. 3.5** | Web 2.0 monetization models. (Part 1 of 2.)  

3.17 Web 2.0 Business Models **89**

**3.17 Web 2.0 Business Models** The technologies and collaborative nature of Web 2.0 have opened up new business mod- els. Some of these would not have been feasible even ten years ago, but because of Moore’s Law they are not only possible but thriving. At the moment, there is no foreseeable end to the advancements attributed to Moore’s Law, so fantastic ideas that are impossible today may become possible within just a few years. Figure 3.6 outlines many popular Internet

**cost-per-click (CPC)**—Advertising that is billed by user click. The web publisher receives revenue each time a user clicks an ad on the publisher’s site, regardless of whether the user makes a subsequent purchase. Com- panies include Google AdSense and Yahoo! Publisher Network. **cost-per-thousand impressions (CPM)**— Advertising (usually banner advertising) that is billed per thousand impressions, regardless of whether the user clicks on the ad. Compa- nies include DoubleClick, ValueClick and many more.

**e-commerce**—Selling products and/or ser- vices directly through a website. Companies include Amazon, Dell, CafePress.com and thousands more.

**interstitial ad**—An ad that plays between page loads. Companies include Tribal Fusion, DoubleClick, and many more.

**in-text contextual advertising**—Advertising that is marked by double-underlined key- words or phrases in the content of a web page. When a reader hovers the mouse cur- sor over a double-underlined word or phrase, a text ad pops up. By clicking on an ad, read- ers are taken to the advertiser’s page. Compa- nies providing in-text contextual advertising include Vibrant Media, Text Link Ads, Kontera and Tribal Fusion.

**lead generation**—Leads are generated when a visitor fills out an inquiry form so that a salesperson can follow through and poten- tially convert the lead to a sale. Lead genera- tion is a subset of cost-per-action advertising. See cost-per-action (CPA).

**paid blog post**—A blog post (often a prod- uct review) that an advertiser pays a blogger to write. Some argue the ethics of this prac- tice, and bloggers are encouraged to disclose that they are being paid for the posts. Com- panies that match bloggers and advertisers include PayPerPost, SponsoredReviews and ReviewMe. **performance-based advertising**—Advertis- ing that pays based on user action, such as making a purchase, filling out a registration form, etc. These are also often part of affili- ate programs such as Amazon and Click- Bank. See cost-per-action (CPA).

**premium content**—Content on a website that is available for an extra fee (e.g., e- books, articles, etc.). Companies that offer premium content include _The Wall Street Journal Online_ and Search Engine Watch.

**RSS ad**—An ad included in RSS feeds. Companies include Feedster, Feedburner and Yahoo! Search Marketing.

**tagging for profit—A** site that buys inbound links or tags from other sites to help increase traffic, and thus increase potential advertis- ing revenue. High-traffic sites can sell tags or links to other websites for a profit. (Caution: Search engines may lower the ranking of sites with paid links.) An example is 1000tags.com.

**virtual worlds monetization**—Selling prod- ucts, premium services, virtual land and more in an online virtual world website. Vir- tual worlds include Second Life, IMVU, Habbo, Gaia Online and There.

Web 2.0 monetization models

**Fig. 3.5** | Web 2.0 monetization models. (Part 2 of 2.)  

**90** Chapter 3 Dive Into® Web 2.0

business models and lists some companies that use each one. In just about every case, there are many more companies using that business model.

Web 2.0 business models

**advertising exchange**—An online market- place where web publishers can sell their advertising inventory (ad space) to advertis- ers. Companies include DoubleClick Adver- tising Exchange and Right Media Exchange.

**affiliate network**—A business that connects web publishers with cost-per-action affiliate programs, which are a form of cost-per- action advertising. Companies include Com- mission Junction and LinkShare. (See Fig. 3.5 for more information on affiliate programs.)

**blog**—A website with a series of posts in reverse chronological order. Many blogs attract significant traffic and monetize with advertising and affiliate programs. Popular blogs include BoingBoing, Gizmodo, Tech- Crunch, John Battelle’s Searchblog, Problog- ger and Scobleizer.

**blog search engine**—A search engine devoted to the blogosphere. Companies include Technorati, Feedster, IceRocket and Google Blog Search.

**blog network**—A collection of blogs with multiple editors. Popular blog networks include Corante, 9rules, Gawker Media and Weblogs, Inc.

**buying and selling domain names**—A com- pany purchases domain names with the intent of selling them in the future as Inter- net real estate becomes more valuable. Com- panies include Afternic.com and GreatDomains.

**competitive intelligence**—A company that analyzes Internet usage for use by client web- sites. Companies include Hitwise and Com- pete, Inc.

**content network**—A site (or collection of sites) that provides content including arti- cles, wikis, blogs and more. Companies

include About.com, Deitel, LifeTips and Suite101.

**discovery**—A site that introduces users to valuable content they would not have looked for otherwise. Sites include StumbleUpon, Aggregate Knowledge, MOG and Deitel.

**domain registrar**—A site that sells domain names. Companies include Register.com, GoDaddy and Network Solutions.

**encyclopedia and reference source**—An online reference encyclopedia, dictionary, thesaurus, etc. Sites include Wikipedia, Ref- erence.com and Citizendium.

**feed aggregator**—An application that com- bines RSS or Atom feeds so the user can view all subscriptions in a single location. Appli- cations include NetNewsWire, Google Reader and Bloglines.

**file sharing**—An application where users can share files, music, software and more. Com- panies include BitTorrent, LimeWire, Kazaa, AllPeers and Shareaza.

**infrastructure for distributing open source projects**—A site that hosts collaborative open source software projects. Sites include SourceForge, freshmeat.net and Tucows.

**Internet and web conference organizer**—A company that organizes conferences on Internet and web topics. Companies include O’Reilly Media, CMP and Jupiter.

**Internet radio**—A site that distributes music and radio shows over the Internet. Compa- nies include Last.fm and Pandora.

**Internet TV**—A site that distributes televi- sion shows (or allows you to distribute your own shows) over the Internet. Companies include Joost and Brightcove.

**Internet video**—A video sharing site where users upload and share content. Companies include YouTube and Yahoo! Video.

**Fig. 3.6** | Web 2.0 business models. (Part 1 of 4.)  

3.17 Web 2.0 Business Models **91**

**job boards and job search**—A site that con- nects job seekers with employers and/or job search engines. Job boards include Monster, CareerBuilder and Dice. Job search engines include Indeed, Jobster and SimplyHired.

**mashup**—A combination of two or more existing web services and feeds to create a new application. For example, http:// www.housingmaps.com combines real estate listings from Craigslist with Google Maps so you can view the listings on a map. For a list of popular mashups, see http://

www.programmableweb.com/popular.

**massively multiplayer online game**—An online role playing or strategy game where Internet users interact with one another. Games include World of Warcraft, Guild Wars and Lineage.

**mobile social networking**—A social net- work oriented towards mobile devices (such as cell phones). Companies include Twitter, Dodgeball and MocoSpace.

**music distribution site**—An online music site where you can purchase electronic ver- sions (e.g., .mp3) of single songs or entire albums. Companies include iTunes, Rhap- sody and Amie Street.

**online advertising**—An online advertising company that offers contextual advertising, banner advertising, in-text contextual adver- tising and more. Companies include Google, Yahoo!, Microsoft, DoubleClick, Vibrant Media, Tribal Fusion, Kontera, Quigo, Val- ueClick, Federated Media and many more.

**online auction**—A marketplace where visi- tors bid for products (and services) over the Internet. Companies include eBay, Over- stock.com and Amazon Auctions.

**online classifieds—A** classifieds “advertis- ing” site where users can post jobs, real-estate listings, personal ads, etc. Companies include Craigslist, Yahoo! Classifieds and Google Base.

**online survey site**—A site that offers survey services to other companies. A popular example is Survey Monkey.

**open source**—Software that is available (under license) for anyone to use and modify with few or no restrictions. Many Web 2.0 companies use open source software to power their sites and offer open source prod- ucts and content. Companies include the Free Software Foundation, Apache, Mozilla, Zend and many more.

**outsourcing marketplaces**—An online mar- ketplace where contractors and freelancers can connect with potential clients for short- term work. Companies include Elance and Guru.com.

**payments**—A site that handles secure pay- ments for e-commerce sites. Companies include PayPal and Google Checkout.

**people-assisted search**—A search engine or search-driven content site that is filtered and organized by people to provide users with more relevant search results. Companies include Mahalo and Deitel.

**personalized start page**—A site that allows you to customize a start page with weather, news, etc. Companies include Netvibes, iGoogle, Pageflakes and Protopage.

**photo sharing site**—A site where users can post and share their photos with other users. Companies include Flickr and Photobucket.

**real estate**—A site that offers online real estate listings and information. Companies include Redfin, Trulia and Zillow.

**recommender system**—A system that col- lects data using collaborative filtering sys- tems to determine users’ tastes and interests. Sites can gather information about your per- sonal interests, compare you to other users with similar interests and make recommen- dations. Popular examples of sites using rec- ommender systems include Pandora, Netflix, CleverSet, ChoiceStream, MyStrands, Stum- bleUpon, Last.fm, and MovieLens.

Web 2.0 business models

**Fig. 3.6** | Web 2.0 business models. (Part 2 of 4.)  

**92** Chapter 3 Dive Into® Web 2.0

**reputation system**—A system used by busi- nesses like eBay and Amazon to encourage trust. For example, after each eBay transac- tion, the buyer and the seller can each leave positive or negative comments about the other party.

**search engine**—The primary tool people use to find information on the web. Companies include Google, Yahoo!, MSN, Ask and many more.

**selling digital content**—An e-commerce site that sells digital media (e.g., e-books). Com- panies include ClickBank, Blish, Lulu and more.

**social bookmarking site**—A site that allows users to share their bookmarks with others. Users bookmark their favorites sites, articles, blogs and more, and tag them by keyword. Companies include del.icio.us, Ma.gnolia and Blue Dot.

**social media site**—A site that allows digital media (text, photos, videos, music, etc.) to be shared online. Companies include Digg, YouTube, Flickr, Reddit, Wikipedia and more.

**social networking site**—A site that helps users organize their existing relationships and establish new ones. Companies include MySpace, Facebook, Bebo, LinkedIn, Sec- ond Life, Gaia Online and more.

**Software as a Service (SaaS)**—Software that runs on a web server rather than being installed on a local client computer. By mod- ifying the version of the software on the server, a company can simultaneously update all users to the latest version. SaaS applica- tions include Salesforce.com, Microsoft Office Live, Microsoft Windows Live, Zoho Office Suite and many Google and 37Signals products.

**subscription site**—A site that offers member- only areas and premium content (additional content for a fee). Examples include Safari Books Online and the _Wall Street Journal_.

**travel site**—An online travel resource site that allows you to find and book hotels, air travel, rental cars and more. Companies include Expedia, Travelocity and Orbitz.

**vertical search engine**—A search engine that allows you to focus your search on a narrow topic. For example, travel search engines include Yahoo! Fare Finder, SideStep and Kayak; source-code search engines include Krugle and Koders.

**virtual world**—A social networking site (or program) where users create an avatar (their online image and persona) that they use to meet other users with similar interests, con- duct business, participate in group activities, take classes and more. Companies include Second Life, Habbo, Gaia Online and There.

**Voice over Internet Protocol (VoIP) site**—A site that offers inexpensive or free telephone services over the Internet. Companies include Skype, Packet8, Lingo and Vonage.

**Web 2.0 software**—Software designed to build Web 2.0 sites and applications (e.g., blogging software). Companies include Six Apart, 37Signals, Adobe and Microsoft.

**web analytics**—Software (desktop and SaaS) and companies that analyze Internet traffic, demographics, navigation and more. Com- panies include Alexa, WebTrends, Click- Tracks, Google Analytics and WebSideStory.

**web and mobile messaging**—A service that allows you to chat with your contacts from various Internet messaging services (AIM, Yahoo! Messenger, MSN Messenger, Google Talk). Companies include Meebo and eBuddy.

**web conferencing**—An application that enables users to collaborate remotely. This often includes chat, VoIP and desktop shar- ing. Companies include WebEx, GoToMeet- ing and DimDim (open source).

Web 2.0 business models

**Fig. 3.6** | Web 2.0 business models. (Part 3 of 4.)  

3.18 Future of the Web **93**

**3.18 Future of the Web** _“Web 2.0 will make the cover of_ Time _magazine, and thus its moment in the sun will have passed. However, the story that drives Web 2.0 will only strengthen, and folks will cast about for the next best name for the phenomenon.”_

—John Battelle138

_“We’re a long way from the full realization of the potential of intelligent systems, and there will no doubt be a tipping point where the systems get smart enough that we'll be ready to say, ‘this is qualitatively different. Let’s call it Web 3.0.’”_

—Tim O’Reilly139

The XHTML coding on websites defines their structure and layout, specifying colors, fonts, sizes, use of bold and italic, paragraphs, tables and the like, but _not_ specifying the _meaning_ of the data on the page. Web 1.0 servers sent mostly static web pages coded in HTML or XHTML to browsers that rendered the pages on the screen. Web 2.0 applica- tions are more dynamic, generally enabling significant interaction between the user (the client) and the computer (the server), and among communities of users.

Computers have a hard time deciphering meaning from XHTML content. The web today involves _users’_ interpretations of what pages and images mean, but the future entails a shift from XHTML to a more sophisticated system based on XML, enabling _computers_ to better understand meaning.

Web 2.0 companies use “data mining” to extract as much meaning as they can from XHTML-encoded pages. For example, Google’s AdSense contextual advertising program does a remarkable job placing relevant ads next to content based on some interpretation of the meaning of that content. XHTML-encoded content does not explicitly convey meaning, but XML-encoded content does. So if we can encode in XML (and derivative technologies) much or all of the content on the web, we’ll take a great leap forward towards realizing the Semantic Web.

It is unlikely that web developers and users will directly encode all web content in XML—it’s simply too tedious and probably too complex for most web designers. Rather, the XML encoding will occur naturally as a by-product of using various content creation tools. For example, to submit a resume on a website, there may be a tool that enables the

**webmail**—A web-based e-mail system that allows you to send and receive e-mail using a standard browser. Popular webmail services include Google gmail, .Mac, Yahoo! Mail and MSN Hotmail.

**wiki**—A site that offers collaborative, edit- able documents online. Companies include Wikipedia, Wikia and SocialText.

138\. Battelle, John. “2006 Predictions, How Did I Do?” _John Battelle Searchblog_, <http://battelleme- dia.com/archives/003216.php>.

139\. O’Reilly, Tim. “Web 3.0 Maybe when we get there.” _O’Reilly Radar_, 13 November 2006 <http:// radar.oreilly.com/archives/2006/11/web\_30\_maybe\_wh.html>.

Web 2.0 business models

**Fig. 3.6** | Web 2.0 business models. (Part 4 of 4.)  

**94** Chapter 3 Dive Into® Web 2.0

user to fill out a form (with first name, last name, phone number, career goal, etc.). When the resume is submitted, the tool could create a computer readable microformat that could easily be found and read by applications that process resumes. Such tools might help a company find qualified potential employees, or help a job seeker who wants to write a resume find resumes of people with similar qualifications).

**_Tagging and Folksonomies_** Tagging and folksonomies are early hints of a “web of meaning.” Without tagging, search- ing for a picture on Flickr would be like searching for a needle in a giant haystack. Flickr’s tagging system allows users to subjectively tag pictures with meaning, making photos find- able by search engines. Tagging is a “loose” classification system, quite different, for exam- ple, from using the Dewey Decimal System for cataloging books, which follows a rigid taxonomy system, limiting your choices to a set of predetermined categories. Tagging is a more “democratic” labeling system that allows people, for example, to associate whatever meanings they choose with a picture (e.g. who is in the picture, where it was taken, what is going on, the colors, the mood, etc.).

**_Semantic Web_**

_“People keep asking what Web 3.0 is. I think maybe when you've got an overlay of scalable vector graphics—everything rippling and folding and looking misty—on Web 2.0 and access to a semantic Web integrated across a huge space of data, you'll have access to an unbelievable data resource.”_

—Tim Berners-Lee140

_“The Holy Grail for developers of the semantic Web is to build a system that can give a reasonable and complete response to a simple question like: I’m looking for a warm place to vacation and I have a budget of $3,000. Oh, and I have an 11- year-old child…Under Web 3.0, the same search would ideally call up a complete vacation package that was planned as meticulously as if it had been assembled by a human travel agent.”_

—John Markoff141

Many people consider the **Semantic Web** to be the next generation in web development, one that helps to realize the full potential of the web. This is Tim Berners-Lee’s original vision of the web, also known as the “**web of meaning**.”142 Though Web 2.0 applications are finding meaning in content, the Semantic Web will attempt to make those meanings clear to computers as well as humans. It will be a web able to answer complex and subtle questions.

Realization of the Semantic Web depends heavily on XML and XML-based technol- ogies (see Chapter 14), which help make web content more understandable to computers. Currently, computers “understand” data on basic levels, but are progressing to find mean-

140\. Shannon, V. “A 'More Revolutionary' Web.” May 2006 <http://www.iht.com/articles/2006/ 05/23/business/web.php>.

141.Markoff, John. “Entrepreneurs See a Web Guided by Common Sense.” The New York Times, No- vember 2006 <http://www.nytimes.com/2006/11/12/business/12web.html?ex=1320987600& en=254d697964cedc62&ei=5088>.

142\. Berners-Lee, T. _Weaving the Web_. Harper-Collins, 2000.  

3.18 Future of the Web **95**

ingful connections and links between data points. The emerging Semantic Web technolo- gies highlight new relationships among web data. Some experiments that emphasize this are Flickr and FOAF (Friend of a Friend), a research project that “is creating a Web of machine-readable pages describing people, the links between them and the things they create and do.”143 Programming in both instances involves links between databases—ulti- mately allowing users to share, transfer, and use each other’s information (photos, blogs, etc.).144

Preparations for the Semantic Web have been going on for years. XML is already widely used in both online and offline applications, but still only a minute portion of the web is coded in XML or derivative technologies. Many companies, including **Zepheira**, an information management company, and Joost, an Internet TV provider, already use semantic technologies in working with data. Deterring Semantic Web development are concerns about the consequences of false information and the abuse of data. Since the Semantic Web will rely on computers having greater access to information and will yield a deeper understanding of its significance, some people worry about the potentially increased consequences of security breaches. The **Policy Aware Web Project** is an early attempt at developing standards to encourage data sharing by providing access policies that can sufficiently protect individuals’ privacy concerns.145

**_Microformats_**

_“We need microformats that people agree on.”_ — Bill Gates, MIX06 conference146

Some people look at the web and see lots of “loose” information. Others see logical aggre- gates, such as business cards, resumes, events and so forth. **Microformats** are standard for- mats for representing information aggregates that can be understood by computers, enabling better search results and new types of applications. The key is for developers to use standard microformats, rather than developing customized, non-standard data aggre- gations. Microformat standards encourage sites to similarly organize their information, thus increasing interoperability. For example, if you want to create an event or an events calendar, you could use the hCalendar microformat. Some other microformats are adr for address information, hresume for resumes, and xfolk for collections of bookmarks.147

**_Resource Description Framework (RDF)_** The **Resource Description Framework (RDF)**, developed by the World Wide Web Con- sortium (W3C), is based on XML and used to describe content in a way that is understood by computers. RDF helps connect isolated databases across the web with consistent se- mantics.148 The structure of any expression in RDF is a collection of triples.149 **RDF tri- ples** consist of two pieces of information (subject and object) and a linking fact (predicate).

143\. Friend of a Friend Project homepage. <http://www.foaf-project.org/>. 144. Shannon, Victoria. “A ‘More Revolutionary’ Web.” _International Herald Tribune_. May 24 2006 <ht-

tp://www.iht.com/articles/2006/05/23/business/web.php>. 145. Weitzner, D., J. Hendler, T. Berners-Lee, and D. Connolly. “Creating a Policy-Aware Web: Discre-

tionary, Rule-based Access for the World Wide Web.” October 2004 <http://www.w3.org/2004/ 09/Policy-Aware-Web-acl.pdf>.

146\. “Bill Gates: Microsoft MIX06 Conference.” _Microsoft_, March 2006. 147. “Microformats Wiki.” _microformats.org_ <http://microformats.org/wiki/Main\_Page>.  

**96** Chapter 3 Dive Into® Web 2.0

Let’s create a simple RDF triple. “Chapter 3, Dive Into® Web 2.0” is the title of this doc- ument and one property (the document’s subject) that we’ll use in our RDF triple. Anoth- er property of this chapter is “Deitel” as the author. So the sentence “Chapter 3, Dive Into® Web 2.0 is written by Deitel” is an RDF triple, containing two properties and a linking fact (“is written by”).

**DBpedia.org** is currently transferring content into RDF from Wikipedia, one of the largest and most popular resources of online information. Using **SPARQL** (SPARQL Pro- tocol and RDF Query Language), DBpedia.org is converting data from Wikipedia entries into RDF triples. In June 2007, they claimed to have over 91 million triples—this will allow the information (from Wikipedia) to be accessed by more advanced search queries.150

**_Ontologies_ Ontologies** are ways of organizing and describing related items, and are used to represent semantics. This is another means of cataloging Internet content in a way that can be un- derstood by computers.151 RDF is designed for formatting ontologies. **OWL (Web On- tology Language)**, also designed for formatting ontologies in XML, extends beyond the basic semantics of RDF ontologies to enable even deeper machine understanding of con- tent.152

**_Closing Comment_** This book will get you up to speed on Web 2.0 applications development. Building a “web of meaning” will ultimately open a floodgate of opportunities for web developers and en- trepreneurs to write new applications, create new kinds of businesses, etc. We don’t know exactly what the “web of meaning” will look like, but it’s starting to take shape. If it helps accomplish what many leaders in the web community believe is possible, the future of the web will be exciting indeed.

**3.19 Wrap-Up** In this chapter, you learned how Web 2.0 embraces an architecture of participation, en- couraging user interaction and community contributions. User-generated content is the key to success for many leading Web 2.0 companies. Harnessing collective intelligence can result in smart ideas. Collaborative filtering lets users promote valuable content, and flag offensive or inappropriate material. The wisdom of crowds suggests that a large diverse group of people can be smarter than a small group of specialists.

We presented several popular Web 2.0 business models. You learned how you, the user, are deciding which news and information outlets you trust, enabling popular blogs and social media networks to compete with traditional media powerhouses. People are using social networks to interact and network, personally and professionally. We discussed

148\. Miller, E. “An Introduction to the Resource Description Framework.” _D-Lib Magazine_, May 1998 <http://dlib.org/dlib/may98/miller/05miller.html>.

149\. “Resource Description Framework (RDF) Concepts and Abstract Sytax.” _w3.org_ <http:// www.w3.org/TR/rdf-concepts/#section-Concepts>.

150\. _DBPedia.org._ <http://dbpedia.org/docs/>. 151. Heflin, J. “OWL Web Ontology Language Use Cases and Requirements.” _W3C_, 10 February 2004

<http://www.w3.org/TR/webont-req/>. 152. “Introduction to OWL.” _W3Schools_ <http://www.w3schools.com/rdf/rdf\_owl.asp>.  

3.20 Where to Go for More Web 2.0 Information **97**

popular social bookmarking sites that let you share your favorite websites, blogs, and arti- cles with other users.

You learned about the Long Tail economic model and how Web 2.0 Internet busi- nesses are increasing exposure for lesser-known products in a way that traditional busi- nesses cannot. Web 2.0 companies are monetizing their content with advertising, affiliate programs and more.

We discussed how the explosion of content combined with people’s increasing demands on time has led to an attention economy, increasing the importance of search engines used to find content online. SEO, link building and SEM can help you maximize your website’s findability and improve search engine results. Many Web 2.0 sites enable discovery, pointing you to valuable new content that you might not have otherwise sought. Tagging and folksonomies help you locate content on the web more effectively, especially content that computers have a hard time identifying, such as photos and videos. Search engines are using localization to provide you with geographically relevant content.

You learned how Software as a Service (SaaS) applications offer companies (and users) many benefits, including fewer demands on internal IT departments, increased accessibility for out-of-the-office use, an easy way to maintain software across a diversity of platforms on a large scale and more. Rich Internet Applications offer responsiveness, “rich” features and functionality similar to desktop applications. Web services are used to create feature-rich mashup applications, combining content or functionality from existing web services, web- sites and RSS feeds. Many people believe that the Semantic Web—the “web of meaning”— will be the next generation of the web, enabling exciting new kinds of applications.

This chapter concludes our introduction to computers, the Internet, browsers and Web 2.0. The remainder of the book is devoted to building web applications—you’ll learn how to program the client side and the server side, including interacting with databases. We’ll focus on building Ajax-enabled Rich Internet Applications. We begin in Chapter 4 by discussing how to use XHTML (the Extensible HyperText Markup Language) to create web pages to be rendered by web browsers. You'll use XHTML to incorporate images into your web pages, add internal linking for page navigation, create forms for col- lecting information from a user, create tables and more.

**3.20 Where to Go for More Web 2.0 Information** Figure 3.4 lists some popular resources for Web 2.0 news and analysis.

Resource Description

TechCrunch http://www.techcrunch.com/

Edited by Michael Arrington, this blog is the lead- ing Web 2.0 news resource that profiles innovative and important Internet companies and products.

Mashable http://www.mashable.com/

A social networking news blog, edited by Pete Cashmore. The site includes sections devoted to MySpace, YouTube, Bebo, Facebook and Xanga.

**Fig. 3.7** | Web 2.0 news, analysis, technology and business resources. (Part 1 of 2.)  

**98** Chapter 3 Dive Into® Web 2.0

**3.21 Web 2.0 Bibliography _General Web 2.0_** Anderson, C. _The Long Tail: Why the Future of Business Is Selling Less of More._ Hyperion, 2006.

Anderson, C. “The Long Tail.” _WIRED_, October 2004 <http://www.wired.com/wired/archive/

12.10/tail.html>.

Battelle, J. _The Search: How Google and Its Rivals Rewrote the Rules of Business and Transformed Our Culture_. Portfolio, 2005.

“Bill Gates: Microsoft MIX06 Conference.” _Microsoft_, March 2006 <http://www.microsoft.com/

presspass/exec/billg/speeches/2006/03-20MIX.mspx>.

Brin, S. and L. Page. “The Anatomy of a Large-Scale Hypertextual Web Search Engine.” <http://

infolab.stanford.edu/~backrub/google.html>.

Farber, D. “ETech: Attenuation, Web 2.0 and spimes.” _ZDNet_, March 2006 <http://

blogs.zdnet.com/BTL/?p=2667>.

Graham, P. “Web 2.0.” November 2005 <http://www.paulgraham.com/web20.html>.

ReadWriteWeb http://www.readwriteweb.com/

Edited by Richard MacManus, this blog provides web technology news, reviews and analysis.

GigaOM http://www.gigaom.com/

Technology news and analysis blog, edited by Om Malik—founder of GigaOmniMedia and a former writer for Business 2.0, Red Herring and Forbes.com.

Dion Hinchcliffe’s Web 2.0 Blog http://web2.socialcomputingmaga- zine.com/

Web 2.0 news and analysis blog by Dion Hinch- cliffe, Editor-in-Chief of _Social Computing_ Maga- zine.

Matt Cutts’ Blog http://www.mattcutts.com/blog/

Matt Cutts, a software engineer at Google, blogs about gadgets, Google and SEO.

O’Reilly Radar http://radar.oreilly.com/

O’Reilly Media’s blog about Web 2.0, open source, emerging technology and more.

SearchEngineLand http://www.searchengineland.com/

Search engine news blog, edited by Danny Sulli- van—a leading search engine expert.

SearchEngineWatch http://searchenginewatch.com/

News and analysis of the search engine industry. Includes blogs, tutorials, forums and more.

Deitel Resource Centers http://www.deitel.com/

resourcecenters.html

(See Fig. 2 in the Preface for a list of Resource Centers.)

Numerous Web 2.0 technology and Internet busi- ness Resource Centers that include links to, and descriptions of tutorials, demos, free software tools, articles, e-books, whitepapers, videos, podcasts, blogs, RSS feeds and more.

Resource Description

**Fig. 3.7** | Web 2.0 news, analysis, technology and business resources. (Part 2 of 2.)  

3.21 Web 2.0 Bibliography **99**

Grossman, L. “_TIME_’s Person of the Year: You.” _TIME_, December 2006 <http://www.time.com/

time/magazine/article/0,9171,1569514,00.html>.

Hinchcliffe, D. “The State of Web 2.0.” April 2006 <http://web2.socialcomputingmaga-

zine.com/the\_state\_of\_web\_20.htm>.

Horrigan, J. B. “Home Broadband Adoption 2006.” _Pew Internet & American Life Project_, May 2006 <http://www.pewinternet.org/pdfs/PIP\_Broadband\_trends2006.pdf>.

Madden, M. and S. Fox. “Riding the Waves of ‘Web 2.0.’”_Pew Internet & American Life Project_, October 2006 <http://www.pewinternet.org/pdfs/PIP\_Web\_2.0.pdf>.

Miller, P. “Thinking About This Web 2.0 Thing.” August 2005 <http://paulmiller.type-

pad.com/thinking\_about\_the\_future/2005/08/thinking\_about\_.html>.

Moore, G. “Cramming More Components onto Integrated Circuits.” _Electronics_, April 1965 <http://ftp://download.intel.com/museum/Moores\_Law/Articles-Press\_Releases/

Gordon\_Moore\_1965\_Article.pdf>.

Musser, J. and T. O’Reilly. _Web 2.0 Principles and Best Practices_. O’Reilly Media, Inc., 2006.

O’Reilly, T. “Web 2.0: Compact Definition?” October 2005 <http://radar.oreilly.com/

archives/2005/10/web\_20\_compact\_definition.html>.

O’Reilly, T. “What is Web 2.0: Design Patterns and Business Models for the Next Generation of Software.” September 2005 <http://www.oreillynet.com/pub/a/oreilly/tim/news/2005/

09/30/what-is-web-20.html>.

“Tim O’Reilly’s seven principles of web 2.0 make a lot more sense if you change the order.” _Open Garden_s, April 2006 <http://opengardensblog.futuretext.com/archives/2006/04/

tim\_o\_reillys\_s.html>.

**_Search_** “About Rollyo.” _Rollyo_ <http://www.rollyo.com/about.html>.

“About Us.”_Microsoft adCenter Labs_ <http://adlab.msn.com/AboutUs.aspx>.

Brin, S. and L. Page. “The Anatomy of a Large-Scale Hypertextual Web Search Engine.” <http://

infolab.stanford.edu/~backrub/google.html>.

Calore, M. “Remembering the First Google Bomb.” _Compiler (WIRED blog)_, 26 January 2007 <http://blog.wired.com/monkeybites/2007/01/earlier\_today\_m.html>.

“Company History.” _Yahoo!_ <http://yhoo.client.shareholder.com/press/history.cfm>.

“Company Overview.” _Google_ <http://www.google.com/intl/en/corporate/index.html>.

“comScore Search Rankings.” _CNN,_ 16 July 2007 <http://money.cnn.com/news/newsfeeds/

articles/prnewswire/AQM17916072007-1.htm>.

Davenport, T. and J. Beck. _The Attention Economy: Understanding the New Currency of Business_. Harvard Business School Press, 2002.

“Google: One Million and Counting.” _Pandia Search Engine News_, 2 July 2007 <http://www.pandia

.com/sew/481-gartner.html>.

“Mahalo FAQ.” _Mahalo_ <http://www.mahalo.com/Mahalo\_FAQ>.

“Microsoft Digital Advertising Solutions.” _Microsoft._ <http://advertising.microsoft.com/

advertising-online>.

Mills, E. “Google Rises at Yahoo’s expense.” _CNET_, 23 April 2007 <http://news.com.com/

Google+rises+at+Yahoos+expense/2100-1038\_3-6178164.html>.

Morville, P. _Ambient Findability: What We Find Changes Who We Become_. O’Reilly Media Inc., 2005.  

**100** Chapter 3 Dive Into® Web 2.0

“MSN Live Search: About Us.” _MSN_ <http://search.msn.com/docs/default.aspx?FORM=HL

HP2>.

Olson, S. “MSN Launches Revamped Search Engine.” _CNET,_ 30 June 2004 <http://

news.com.com/MSN+launches+revamped+search+engine/2100-1032\_3-5254083.html>.

_Search Engine Strategies: Conference & Expos_, 2007 <http://www.searchenginestrategies.com>.

Sherman, C. “The State of Search Engine Marketing 2006." _Search Engine Land_, 8 February 2007 <http://searchengineland.com/070208-095009.php>.

Sullivan, D. “Congratulations! You’re a Search Engine Marketer!” _Search Engine Watch_, 5 November 2005 <http://searchenginewatch.com/showPage.html?page=2164351>.

“Technology Overview.” _Google_ <http://www.google.com/corporate/tech.html>.

Thompson, C. “Media in the Age of the Swarm.” _cbc.ca_ <http://www.cbc.ca/10th/columns/

media\_thompson.html>.

Underwood, L. “A Brief History of Search Engines.” _Web Ref._ <http://www.webreference.com/ authoring/search\_history/>.

“Vertical Search-Engines: Know Your Subject.” _Economist.com_, 12 July 2007 <http://www.econom

ist.com/business/displaystory.cfm?story\_id=9478224>.

“Web Search: How to use MSN Search.” _MSN_ <http://search.msn.com/docs/

help.aspx?t=SEARCH\_CONC\_WhatsNewWithMSNSearch.htm#2D>.

Wilding, R. “Top 5 Black Hat and White Hat Search Engines Optimisation Techniques.” _PushON_ <http://www.pushon.co.uk/articles/top5-black-hat-white-hat-seo.htm>.

**_User-Generated Content_** Cauchi, S. “Online Encyclopedias Put to the Test.” _The Age_, December 2005 <http://

www.theage.com/au/news/national/online-encyclopedias-put-to-the-test/2005/12/14/

1134500913345.html>.

“Leading Indicators.” _FORTUNE_, 13 November 2006, p.40.

Maney, K. “Techies Hot on Concept of ‘Wisdom of Crowds,’ But It Has Some Pitfalls.” _USA Today_, September 2006 <http://www.usatoday.com/tech/columnist/kevinmaney/2006-09-

12-wisdom-of-crowds\_x.htm>.

O’Reilly, T. “The Architecture of Participation.” June 2004 <http://oreillynet.com/lpt/a/

5994>.

Seigenthaler, J. “A False Wikipedia ‘Biography.’” _USA Today_, November 2005 <http://www.usa

today.com/news/opinion/editorials/2005-11-29-wikipedia-edit\_x.htm>.

“SocialText is the Enterprise Wiki Trusted Most by Global 2000 Corporations.” _SocialText_ <http:/ /www.socialtext.com/products/overview>.

Steel, E. “Newspapers’ Ad Sales Show Accelerating Drop.” _The Wall Street Journal_, 18 July 2007, A4.

Surowiecki, J. _The Wisdom of Crowds_. Anchor, 2005.

Tapscott, D. and A. D. Williams. _Wikinomics: How Mass Collaboration Changes Everything_. Portfo- lio Hardcover, 2006.

Vara, V. “Wikis at Work.” _The Wall Street Journal_, 18 June 2007, R11.

**_Blogging_** _Akismet_ <http://http://akismet.com/stats/>.

“Blog Statistics and Demographics.” _Caslon Analytics_, March 2007 <http://www.caslon.comau/

weblogprofile1.htm>.  

3.21 Web 2.0 Bibliography **101**

Blood, R. “Weblogs: A History and Perspective.” _Rebecca’s Pocket_, September 2000 <http://

www.rebeccablood.net/essays/weblog\_history.html>.

Bowman, S. and C. Willis. “We Media.” July 2003 <http://www.hypergene.net/wemedia/down

load/we\_media.pdf>.

“CEO Blog List.” _NewPR Wiki_ <http://www.thenewpr.com/wiki/pmwiki.php/Resources/CEOB-

logsList?pagename=Resources.CEOBlogsList>.

Kirkpatrick, D. “Why There’s No Escaping the Blog.” _FORTUNE_, 10 January 2005 <http://

money.cnn.com/magazines/fortune/fortune\_archive/2005/01/10/8230982/index.htm>.

Lenhart, A. and S. Fox. “Bloggers: A Portrait of the Internet’s New Storytellers.” _Pew Internet & American Life Project_, July 2006 <http://www.pewinternet.org/pdfs/PIP%20Bloggers

%20Report%20July%2019%202006.pdf>.

Thompson, C. “A Timeline of the History of Blogging.” _New York Magazine_, February 2006 <http://nymag.com/news/media/15971/>.

Walsh, B. _Clear Blogging: How People Are Changing the World and How You Can Join Them_. APress, 2007.

**_Social Networking_** Arrington, M. “Bear Stearns: Yahoo Must Form A Social Networking Strategy.” _TechCrunch_, 3

August 2007 <http://www.techcrunch.com/2007/08/03/bear-stearns-yahoo-must-form-a-

social-networking-strategy>.

Athavely, A. “A Job Interview You Don’t Have to Show Up For.” _The Wall Street Journal Online_, June 2007 <http://online.wsj.com/article/SB118229876637841321.html?mod=tff\_main\_

tff\_top>.

Baker, S. “IBM on Second Life: More than PR.” _BusinessWeek_, 15 November 2006 <http://

www.businessweek.com/the\_thread/blogspotting/archives/2006/11/ibm\_on\_second\_

l.html>.

Bulkeley, W. “Playing Well With Others.” _The Wall Street Journal Online_, 18 June 2007 <http://

online.wsj.com/article/SB118194536298737221.html>.

“Businesses Find MySpace is a Place to Reach Youth.” _Trend Watching_, July 2006 <http://

www.trendwatching.com/about/inmedia/articles/youniversal\_branding/businesses\_find

\_myspace\_is\_a\_p.html>.

Copeland, M. “The Missing Link.” _CNNMoney.com_, February 2007 <http://money.cnn.com/

magazines/business2/business2\_archive/2006/12/01/8394967/index.htm>.

“Customer Support.” _Facebook_ <http://www.facebook.com/help.php?tab=safety>.

“Facebook Statistics.” _Facebook_, 17 July 2007 <http://static.ak.facebook.com/press/

facebook\_statistics.pdf?11:44617>.

Jesdanun, A. “Candidates Seek Youths at MySpace.” _ABC News_, August 2006 <http://abc

news.go.com/Technology/wireStory?id=2325325&page=1>.

Kirkpatrick, M. “Friendster Awarded Patent on Social Networking.” _TechCrunch_, July 2006 <http://www.techcrunch.com/2006/07/07/friendster-awarded-patent-on-social-net

working/>.

Lawson, S. “Second Life Creates a Millionaire.” _IDG News_, 30 November 2006 <http://

www.itworld.com/App/4201/061130secondlife/>.

“Metcalf ’s Law.” <http://www-ec.njit.edu/~robertso/infosci/metcalf.html>.

Prescott, L. “Hitwise US Consumer Generated Media Report.” _Hitwise,_ February 2007.  

**102** Chapter 3 Dive Into® Web 2.0

Rivlin, G. “Wallflower at the Web Party.” _New York Times_, October 2006 <http://

www.nytimes.com/2006/10/15/business/yourmoney/15friend.html>.

“Second Life Lawyer.” _Business 2.0_, May 2007, p.86.

“The CEO’s Guide to Social Networks.” _BusinessWeek_, September 2006 <http://business

week.com/mediacenter/qt/podcasts/guide\_to\_tech/guidetotech\_09\_11\_06.mp3>.

“Top 20 Websites.” _Hitwise_, May 2007 <http://hitwise.com/datacenter/rankings.php>.

“What is Second Life.” <http://secondlife.com/whatis>.

**_Social Media_** “Amazon.com to Launch DRM-Free MP3 Music Download Store with Songs and Albums from

EMI Music and More Than 12,000 Other Labels.” May 2007 <http://phx.corporate-

ir.net/phoenix.zhtml?c=176060&p=irol-newsArticle&ID=1003003>.

Colvin, G. “TV Is Dying? Long Live TV!” _FORTUNE_, 5 February 2007, p.43.

“Conference Report Filed in House.” _Library of Congress_, 8 October 1998 <http://thomas

.loc.gov/cgi-bin/bdquery/z?d105:HR02281:@@@D&summ2=m&>.

D’Agostino, D. “Security in the World of Web 2.0.” _Innovations_, Winter 2006, p.15.

Hefflinger, M. “Digg Users Revolt Over Deleted Posts of HD DVD Security Hack.” _digitalmedi- awire_, 2 May 2007 <http://www.dmwmedia.com/news/2007/05/02/digg-users-revolt-over-

deleted-posts-of-hd-dvd-security-hack>.

Jobs, S. “Thoughts on Music.” February 2007 <http://www.apple.com/hotnews/thoughtson

music>.

“Leading Indicators.” _FORTUNE_, 13 November 2006, p.40.

Maney, K. “Techies Hot on Concept of ‘Wisdom of Crowds,’ but it has some pitfalls.” _USA Today_, September 2006 <http://www.usatoday.com/tech/columnist/kevinmaney/2006-09-12-wis

dom-of-crowds\_x.htm>.

Mills, E. “Copyright Quagmire for Google and YouTube.” _ZDNet_, March 2007 <http://

news.zdnet.com/2100-9588\_22-6167281.html>.

O’Hear, S. “Viacom to Partner with Joost.” _ZDNet_, 20 February 2007 <http://blogs.zdnet.com/

social/?p=96>.

Prescott, L. “Hitwise US Consumer Generated Media Report.” _Hitwise,_ February 2007.

Steel, E. “Newspapers’ Ad Sales Show Accelerating Drop.” _The Wall Street Journal_, 18 July 2007, A4.

Smith E. and K. Delaney. “Vivendi’s Universal Sues Two Web Sites Over Video Sharing.” _The Wall Street Journal_, 18 October 2006, B3.

Torrone, P. “What Is Podcasting?” _O’Reilly Media_, 20 July 2005 <http://digitalme

dia.oreilly.com/2005/07/20/WhatIsPodcasting.html>.

**_Tagging_** Chun, S., R. Cherry, D. Hiwiller, J. Trant and B. Wyman. “Steve.museum: An Ongoing Experi-

ment in Social Tagging, Folksonomy, and Museums.” _Archives & Museum Informatics_, March 2006 <http://www.archimuse.com/mw2006/papers/wyman/wyman.html>.

Garrett, J. J. “An Interview with Flickr’s Eric Costello.” _Adaptive Path_, August 2005 <http://

www.adaptivepath.com/publications/essays/archives/000519.php>.

Masters, C. “Programming Provocateurs.” _TIME_, 19 March 2007, p. 84.

Mayfield, R. “Buy Side Publishing.” _Ross Mayfield’s Weblog_, April 2006 <http://ross.type

pad.com/blog/2006/04/buy\_side\_publis.html>.  

3.21 Web 2.0 Bibliography **103**

Rainie, L. “Tagging.” _Pew Internet & American Life Project_, December 2006 <http://www.pew

internet.org/pdfs/PIP\_Tagging.pdf>.

Schonfeld, E. “The Flickrization of Yahoo!” _CNN Money.com_, December 2005 <http://

money.cnn.com/magazines/business2/business2\_archive/2005/12/01/8364623/>.

“Using Technorati Tags.” _Technorati_ <http://support.technorati.com/support/siteguide/

tags>.

Vander Wal, T. “Folksonomy Coinage and Definition.” _Vanderwal.net_, February 2007 <http://

www.vanderwal.net/folksonomy.html>.

**_Social Bookmarking_** “About Ma.gnolia” <http://ma.gnolia.com/about>.

“Gardeners.” _Ma.gnolia Community Wiki_, March 2007 <http://wiki.ma.gnolia.com/Gardeners>.

“Know How Adobe and del.icio.us Work Together?” _del.icio.us blog_, May 2007 <http://

blog.del.icio.us/blog/2007/05/knowhow\_adobe\_a.html>.

“That was Fast.” _del.icio.us blog_, March 2007 <http://blog.del.icio.us/blog/2007/03/

that\_was\_fast.html>.

**_Software Development_** 37Signals. _Getting Real_, 2006 <http://gettingreal.37signals.com>.

Fallows, D. “China’s Online Population Explosion.” _Pew Internet & American Life Project_, July 2007 <http://www.pewinternet.org/pdfs/China\_Internet\_July\_2007.pdf>.

Farber, D. “ETech: Attenuation, Web 2.0 and Spimes.” _ZDNet_, March 2006 <http:// blogs.zdnet.com/BTL/?p=2667>.

Greenemeier, L. “Open-Source Exuberance.” _InformationWeek_, July 2005 <http://www.informa tionweek.com/story/showArticle.jhtml?articleID=165700923>.

Peiris, M. “The Pros and Cons of Hosted Software.” _SmartBiz_, March 2006 <http://www.smart biz.com/article/articleview/1118/1/42>.

Pink, D. H. “Why the World Is Flat.” _Wired_, May 2005 <http://http://www.wired.com/wired/

archive/13.05/friedman.html>.

Tapscott, D. and A. D. Williams. _Wikinomics: How Mass Collaboration Changes Everything_. Portfo- lio Hardcover, 2006.

“The RIA Desktop in a Browser.” _LaszloSystems_ <http://www.laszlosystems.com/software/

webtop>.

Tiemann, M. “Licenses by Name.” _Open Source Initiative_, 18 September 2006 <http://www.open

source.org/licenses/alphabetical>.

Van Rossum, G. “Open Source Summit Trip Report.” _Linux Gazette_, 10 April 1998 <http://

linuxgazette.net/issue28/rossum.html>.

Wilcox, J. “IBM to Spend $1 Billion on Linux in 2001.” _CNET_, January 2002 <http://

news.com.com/IBM+to+spend+1+billion+on+Linux+in+2001/2100-1001\_3-249750.html>.

**_Rich Internet Applications_** “Adobe Flex 2.” _Adobe_ <http://www.adobe.com/products/flex/whitepapers/pdfs/flex2wp

\_technicaloverview.pdf>.

Berlind, D. “Google Gears Vies to be De Facto Tech for Offline Web Apps.” _ZDNet_, 31 May 2007 <http://blogs.zdnet.com/Berlind/?p=504>.

“Core Effects.” _Script.aculo.us Wiki_ <http://wiki.script.aculo.us/scriptaculous/show/Core

Effects>.  

**104** Chapter 3 Dive Into® Web 2.0

Cubrilovic, N. “Silverlight: The Web Just Got Richer.” _TechCrunch_, April 2007 <http://

www.techcrunch.com/2007/04/30/silverlight-the-web-just-got-richer>.

Mills, E. “Google Gears Churns Toward Microsoft.” _CNET_, 31 May 2007 <http://news.com.com/

2100-1012\_3-6187942.html>.

“Prototype Tips and Tutorials.” _Prototype JavaScript_ <http://prototypejs.org/learn>.

“Sun Radically Simplifies Content Authoring—Previews JavaFX Script.” _Sun Microsystems_, 8 May 2007 <http://www.sun.com/aboutsun/pr/2007-05/sunflash.20070508.2.xml>.

Taft, E. “Google Gears Allows Offline Web Development.” _eWeek_, 30 May 2007 <http://

www.eweek.com/article2/0,1895,2139083,00.asp>.

“The 70 Percent Solution.” _Business 2.0_, 28 November 2005 <http://money.cnn.com/2005/11/28/

news/newsmakers/schmidt\_biz20\_1205/>.

“The Dojo Offline Toolkit.” _The Dojo Toolkit_ <http://dojotoolkit.org/offline>.

**_Web Services and Mashups_** _Amazon Web Services_ <http://aws.amazon.com>.

Braiker, B. “Tech: Welcome, Year of the Widget.” _Newsweek_, December 2006 <http://

www.msnbc.msn.com/id/16329739/site/newsweek/>.

Costello, R. “REST Tutorial.” _xFront_, June 2002 <http://www.xfront.com/REST.html>.

Fielding, R. T. “Architectural Styles and the Design of Network-Based Software Architectures.” <http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm>.

Richardson, L. and S. Ruby. _RESTful Web Services_. O’Reilly, 2007.

Roush, W. “Second Earth.” _Technology Review_, July/August 2007, p.38.

**_Location-Based Services_** Magid, L. “Global Positioning by Cellphone.” _New York Times_, 19 July 2007, C7.

Malykhina, E. “Nokia Wants Your Cell Phone To Tell You Where You Are.” _InformationWeek_, 9 October 2006 <http://www.informationweek.com/showArticle.jhtml?articleID=1931

05219>.

Schiller, J. and A. Voisard. _Location-Based Services_. Morgan Kaufmann, 2004.

**_XML, RSS, Atom, JSON and VoIP_** Broache, A. “eBay to Nab Skype for $2.6 billion.” _CNET_, 12 September 2005 <http://

news.com.com/eBay+to+nab+Skype+for+2.6+billion/2100-1030\_3-5860055.html>.

“Introducing JSON” <http://www.json.org>.

**_Internet Business_** Anderson, C. _The Long Tail: Why the Future of Business Is Selling Less of More_. Hyperion, 2006.

Copeland, M. “The Missing Link.” _CNNMoney.com_, February 2007 <http://money.cnn.com/

magazines/business2/business2\_archive/2006/12/01/8394967/index.htm>.

Deutschman, A. “Inside the Mind of Jeff Bezos.” _Fast Company_, August 2004 <http://www.fast

company.com/magazine/85/bezos\_1.html>.

Graham, J. “The House that Helped Build Google.” _USA TODAY_, 5 July 2007, 1B.

Helft, M. “eBay Spawns a Marketplace for the Bizarre.” _CNN_, 20 September 1999 <http://

www.cnn.com/TECH/computing/9909/20/ebay.side.show.idg/>.

Newman, A. A. “Google to Expand Program, Giving Newspapers a Lift.” _New York Times_, 18 July 2007, C8.  

3.22 Web 2.0 Glossary **105**

O’Connell, P. “Pierre Omidyar on ‘Connecting People.’” _BusinessWeek_, 20 June 2005 <http://

www.businessweek.com/magazine/content/05\_25/b3938900.htm>.

_Second Life_ <http://www.secondlife.com/whatis/economy.php>.

**_Semantic Web_** Berners-Lee, T. _Weaving the Web_. Harper-Collins, 2000.

“Bill Gates: Microsoft MIX06 Conference.” _Microsoft_, March 2006 <http://www.microsoft.com/

presspass/exec/billg/speeches/2006/03-20MIX.mspx>.

Copeland, M. V. “Weaving The \[Semantic\] Web.” _Business 2.0_, July 2007, p.89-93.

Heflin, J. “OWL Web Ontology Language Use Cases and Requirements.” _W3C_, 10 February 2004 <http://www.w3.org/TR/webont-req/>.

“Introduction to OWL.” _W3Schools_ <http://www.w3schools.com/rdf/rdf\_owl.asp>.

“Microformats FAQs for RDF fans.” _Microformat.org Wiki_ <http://microformats.org/wiki/

faqs-for-RDF>.

“Microformats Wiki.” _microformats.org_ <http://microformats.org/wiki/Main\_Page>.

Miller, E. “An Introduction to the Resource Description Framework.” _D-Lib Magazine_, May 1998 <http://dlib.org/dlib/may98/miller/05miller.html>.

Rapoza, J. “Semantic Web Technology Gains Steam.” _eWEEK_, June 2007 <http://

etech.eweek.com/content/web\_technology/semantic\_web\_technology\_gains\_steam.html>.

Rapoza, J. “SPARQL Will Make the Web Shine.” _eWEEK_, May 2006 <http://www.eweek.com/

article2/0,1759,1965980,00.asp>.

Rapoza, J. “Weaving the Semantic Web.” _eWEEK_, May 2007 <http://etech.eweek.com/content/

web\_technology/spinning\_the\_semantic\_web.html>.

Tauberer, J. “What Is RDF?” _xml.com_, July 2006 <http://www.xml.com/pub/a/2001/01/24/

rdf.html>.

Weitzner, D., J. Hendler, T. Berners-Lee, and D. Connolly. “Creating a Policy-Aware Web: Discre- tionary, Rule-based Access for the World Wide Web.” October 2004 <http://www.w3.org/

2004/09/Policy-Aware-Web-acl.pdf>.

**3.22 Web 2.0 Glossary Adaptive Path**—A strategy and design consulting company that helps companies build products

that improve the users’ experiences. Founder Jesse James Garrett coined the term Ajax and is a major proponent of the technology.

**Adobe Integrated Runtime (AIR)**—Allows offline access to web applications (i.e., when an Internet connection is not available).

**AdSense**—Google’s search advertising program for web publishers. This is a fundamental and popular form of monetization, particularly for Web 2.0 startup companies.

**AdWords**—Google’s search advertising program for advertisers.

**affiliate network**—A company (see Commission Junction and LinkShare) that connects web publishers with cost-per-action affiliate programs. (See affiliate program.)

**affiliate program**—A program that allows publishers to post text and image ads on their sites. If a user clicks through to the affiliate site and takes a specified action (e.g., makes a purchase, fills out a registration form, etc.) the publisher is paid a portion of the sale or a flat fee.

**agile software development**—A process that focuses on developing small pieces and upgrades to a program quickly and continuously throughout the life cycle of the product.  

**106** Chapter 3 Dive Into® Web 2.0

**Amazon**—An online retailer and web services provider. The Amazon Associates affiliate program allows web publishers to monetize their sites by recommending Amazon products.

**Apache**—An open source software foundation, responsible for the Apache Web Server and many other open source products.

**API (Application Programming Interface)**—An interface called by a program. Web services are often referred to as APIs and are accessible over the Internet.

**Apple**—A leading computer company, responsible for Macintosh computers, the iPod, iTunes and the iPhone.

**architecture of participation**—A design that encourages user interaction, where the community contributes content and/or participates in the design and development process. Creating websites that encourage participation is a key part of Web 2.0.

**Ajax (Asynchronous JavaScript and XML)**—Allows pieces of a web page to be refreshed separately, while the user continues to work on the page. Ajax improves the user’s experience by making webtop applications approach the responsiveness of desktop applications.

**Atom**—Used for web feeds; similar to RSS.

**attention economy**—The result of the abundant amounts of information being produced and people’s limited free time. More content is available than users can sort through on their own.

**avatar**—A person’s digital representation in a 3D world such as Second Life.

**Basecamp**—An SaaS project management and collaboration tool from 37Signals.

**Blinkx**—A video search engine with over 12 million hours of video indexed (which makes the content searchable).

**blog**—A website consisting of posts in reverse chronological order. For common blog components see: blogroll, permalink, reader comment, and trackback.

**blog search engine**—A search engine devoted to the blogosphere. Some of the top blog search engines include Technorati, Feedster, IceRocket and Google Blog Search.

**Blogger**—A popular blogging platform now owned by Google.

**blogger**—The author of a blog.

**blogging**—The act of writing a blog.

**blog network**—A collection of blogs with multiple editors. Popular blog networks include Corante, 9rules, Gawker and Weblogs, Inc.

**blogosphere**—The blogging community. In mid 2007 there were over 90 million blogs.

**blogroll**—A list of links to a blogger’s favorite blogs.

**broadband Internet**—High-speed Internet, often offered by cable companies and satellite companies.

**collaborative filtering**—The act of working together to promote valuable content and remove spam or offensive content.

**collective intelligence**—The idea that collaboration and competition among large groups results in grand and intelligent ideas.

**Commission Junction**—A popular affiliate network with member advertisers including eBay, Best Buy, Hewlett-Packard and hundreds more.

**community-generated content**—Content (writing, videos, etc.) that is created by Internet users.

**contextual advertising**—Advertising that is targeted to web page content. Because these ads are relevant to the nearby content, contextual ads often enhance the value of that content and generate higher clickthrough rates.  

3.22 Web 2.0 Glossary **107**

**Corante**—A blog network whose blogs are written by leading commentators in their field. Categories include law, policy, business, management, media, the Internet, technology and science.

**cost-per-action (CPA)**—Advertising that is billed by user action (e.g., purchasing a product or filling out a form).

**cost-per-click (CPC)**—Advertising that is billed by user click. The publisher receives revenue each time the user clicks an ad on the publisher’s site, regardless of whether the user makes a subse- quent purchase.

**cost-per-thousand impressions (CPM)**—Advertising that is billed per thousand impressions, regardless of whether the user clicks the ad or makes a subsequent purchase.

**Craigslist**—A popular classifieds and social networking website that fits the Web 2.0 lightweight business model. The company has few employees and all of the content is user generated. Craigslist was originally free; however, it is now transitioning to charging for certain services such as real-estate and job postings. A portion of the company is owned by eBay.

**DBPedia.org**—A website working on converting Wikipedia articles into RDF triples. This is a step toward the Semantic Web.

**Deitel**—A content-creation, corporate training and Web 2.0 business development organization. Deitel has a rapidly growing content network (currently about 80 Resource Centers) special- izing in topic categories, including Web 2.0, Internet business, programming languages, software development and more.

**del.icio.us**—A social bookmarking site.

**Digg**—A social media site where users submit news stories and the community votes on the stories. The most popular stories are featured on the site’s front page.

**Digital Rights Management (DRM)**—Technology used to prevent piracy and misuse of digital media. Several high-profile executives, including Apple CEO Steve Jobs, have recently started an anti-DRM movement.

**discovery**—The future of search; the idea of introducing users to valuable content they might not have looked for otherwise. For example, social bookmarking sites and Deitel Resource Centers suggest valuable resources.

**Dodgeball.com**—A social networking site designed for use on mobile devices, owned by Google. Allows users to locate friends and “crushes” who are nearby so they can meet up.

**DotNetNuke**—An open source web application framework based on Microsoft’s .NET framework. DotNetNuke allows users to build dynamic websites quickly and easily. For more information, visit the DotNetNuke Resource Center (http://www.deitel.com/Resource Centers/Software/DotNetNukeDNN/tabid/1217/Default.aspx).

**DoubleClick**—An Internet advertising company acquired by Google in 2007 for $3.1 billion. Their advertising exchange connects advertisers with online publishers.

**Dougherty, Dale**—Coined the term “Web 2.0.”

**eBay**—The leading online auction site.

**Extensible Markup Language (XML)**—A widely supported open (i.e., nonproprietary) technology for electronic data exchange and storage, which is fundamental to Web 2.0 and the Semantic Web. It can be used to create other markup languages to describe data in a structured manner.

**Facebook**—A social networking site. Though it is now open to the public, Facebook was originally designed for and is especially popular with college students.  

**108** Chapter 3 Dive Into® Web 2.0

**Federated Media**—A company that connects bloggers with advertisers. Founded by John Battelle, the chair for the annual Web 2.0 Summit Conference, and the author of _The Search: How Google and Its Rivals Rewrote the Rules of Business and Transformed Our Culture_.

**Feedburner**—Provides RSS feeds for blogs, feed monetization, podcast tracking and more. Acquired by Google.

**Firefox**—Open source web browser (based on the Netscape Navigator browser introduced in 1994) developed by the Mozilla Foundation. For more information, visit the Firefox Resource Center (http://www.deitel.com/ResourceCenters/Software/Firefox/tabid/1213/Default .aspx).

**Flex**—A Rich Internet Application (RIA) framework developed by Adobe. For more information, visit the Flex Resource Center (http://www.deitel.com/ResourceCenters/Programming/ AdobeFlex/tabid/1682/Default.aspx).

**Flickr**—A photo-sharing website often credited as one of the best examples of tagging content.

**folksonomy**—A classification based on tagging content. Users tag the web content (web pages, photos, etc.), making it easier to find the content online. Folksonomies are formed on sites such as Flickr, Technorati and del.icio.us. Users can search tags for content that is identified in different (and sometimes more meaningful) ways than by traditional search engines.

**Friendster**—A social networking site; an early leader in the category of social networking. In 2006, Friendster was awarded a patent for a method and tool called the “Web of Friends,” which gathers descriptive and relationship information for users in the network. The combined data is used to show all of the social relationships connecting two users in the social network. It also allows users to find people connected to their friends, their friends' friends, etc.

**Garrett, Jesse James**—Coined the term “Ajax” and founded Adaptive Path.

**Gawker Media**—A blog network that includes Gawker.com (New York City gossip), Gizmodo.com (technology and gadgets) and more.

**Google**—A Web 2.0 search and online advertising company founded by Larry Page and Sergey Brin when they were Ph.D. students at Stanford University. It is the most widely used search engine, commanding almost 50% market share. In addition to its regular search engine, Google offers specialty search engines for images, news, videos, blogs and more. Google provides web services that allow you to build Google Maps and other Google services into your applications.

**Google Gears**—An open source web browser extension that enables developers to provide offline usage of their web applications. The program can easily be resynchronized when an Internet connection becomes available.

**Google Maps**—Google’s mapping web service, hugely popular in mashups.

**Hitwise**—An Internet competitive intelligence service provider. Hitwise collects and sells usage information from over one million websites in numerous industries. Clients use the infor- mation to find market share, keyword, web traffic flow and demographic data.

**housingmaps.com**—A mashup of Google Maps and Craigslist apartment and real-estate listings; often credited as being the first mashup.

**IceRocket**—A blog search engine.

**Intel**—The computer hardware company that creates the processors that power most of the world’s computers.

**interstitial ad**—Ad that plays between page loads.

**in-text contextual advertising**—Advertising that is marked by double-underlined keywords in the content of a web page. When a reader hovers the mouse over a double-underlined word, a text  

3.22 Web 2.0 Glossary **109**

ad pops up. By clicking on the ad, the reader is taken to the advertiser’s page. Companies providing in-text contextual advertising include Vibrant Media, Kontera, Text Link Ads and Tribal Fusion.

**iPhone**—Apple’s mobile phone, released June 2007. The iPhone is designed to run a full version of the Internet.

**iPod**—Apple’s portable media player.

**iTunes**—Apple’s online music and video store; designed to sync with the iPod. **John Battelle’s Searchblog**—A blog in which John Battelle discusses search, media, technology,

and more. (See Federated Media.) **JSON (JavaScript Object Notation)**—A text-based data interchange format used to represent

data structures and objects, and transmit them over a network. JSON is most often used with JavaScript in Ajax applications, but it can also be used with other programming languages.

**Joost**—An Internet TV company using semantic technologies to provide high-quality video with time shifting (recording for later viewing) and social networking capabilities. Joost allows advertisers to target their markets precisely. Advertisers can use demographic information such as location, gender, age, and more, to serve appropriate ads and to get a better return on investment from their advertising campaigns.

**Last.fm**—A popular social music website that uses the wisdom of crowds to recommend music to its users. The Last.fm Audioscrobbler music engine automatically sends the name of every song the user plays to the server. It then uses the information to recommend songs and artists, connect users with similar tastes and more.

**Laszlo Webtop**—A desktop-like environment for running web applications built on the OpenLaszlo framework.

**lead generation**—A monetization model for many sites that send traffic to another site and typically collect a fee when the visitor fills out an inquiry form so a salesperson can follow through and potentially convert the lead into a sale.

**lightweight business model**—A plan that allows a company to start quickly and with little capital investment. This is facilitated by powerful yet economical computers, the wide availability of inexpensive broadband Internet, robust open source software offerings, and well-developed, easy-to-employ monetization models—especially advertising and affiliate programs.

**link baiting**—Attracting other sites to link to your site, but without specifically asking for links. Providing quality content is considered the best form of link baiting.

**link building**—Using various methods to encourage other sites to link to your site. It is widely believed that increasing the number of inbound links to your site will encourage search engines to send you more traffic.

**LinkedIn**—A social networking site for business professionals. It can be used to stay in touch with professional contacts or make new contacts in your extended network.

**LinkShare**—A popular affiliate network with over 600 member companies (including American Express, Office Depot and Walmart).

**Livejournal**—A website where you can create your own blog.

**Long Tail**—Coined by Chris Anderson in an article in the October 2004 _WIRED_ magazine (http://www.wired.com/wired/archive/12.10/tail.html). Refers to the continuous sales of numerous items with low sales volume that can add up to a significant part of a company’s total sales. Amazon and Netflix are classic Long Tail companies.

**mashup**—A combination of two or more existing web services, RSS feeds or other sources of data to create a new application. For example, http://www.housingmaps.com combines real estate  

**110** Chapter 3 Dive Into® Web 2.0

listings from Craigslist with Google Maps so you can view the listings on a map. For a list of popular mashups, see http://www.programmableweb.com/popular.

**Mechanical Turk**—Amazon’s “artificial artificial intelligence,” which uses people in a web service to perform tasks that are difficult for computers to perform, such as identifying the subject of a picture and transcribing dictation recordings. Users can post a HIT (Human Intelligence Task). Anyone interested in completing the task can submit a response. If the response is approved by the person who posted the HIT, the responder is paid a predetermined fee for each task completed. The key is that the human task is interwoven with the execution of the web service, creating applications that mix computing power with human intelligence accessed worldwide.

**MediaWiki**—Open source software written originally for Wikipedia and now used by many popular wikis.

**Metcalfe’s Law**—The value of a network is proportional to the square of the number of its users. Metcalfe’s Law was authored by Robert Metcalfe, the creator of Ethernet. (See also network effects.)

**microformat**—A common standard for identifying information in a way that can be understood by computers. Some current microformats include adr (for address information), hresume (for resumes and CVs), and xfolk (for collections of bookmarks). See http://microformats.org for more information.

**mobile technology**—Devices such as cell phones and PDAs. An increasing number now offer web access, which has opened up new web application possibilities. (See also iPhone.)

**moblogging**—Blogging from mobile devices.

**moderation**—Monitoring and censoring inappropriate content and comments in blog or forum postings. The potential need for moderation is a drawback to allowing user-generated content.

**monetization**—Generating money through your website (e.g., using contextual advertising, affiliate programs, e-commerce and other revenue-generating models).

**Moonlight**—An open source version of Microsoft’s Silverlight for Linux operating systems.

**Movable Type**—A blogging software package from the company Six Apart that is installed on the blogger’s server.

**Mozilla Foundation**—Creates and maintains open source software including the Mozilla Firefox web browser and the Mozilla Thunderbird e-mail client.

**MySpace**—The most popular social networking site, and the most popular site on the Internet.

**network effects**—The increased value of a network as its number of users grows. For example, as the number of people with Internet connections grows worldwide, the value and benefit to all users of the Internet grows (individuals can communicate with more people, companies can reach more customers, etc.). (See Metcalfe’s Law.)

**9Rules**—A blog network.

**ontology**—A way of organizing and relating things. Ontologies are a key technology in the Semantic Web.

**open source software**—Software that is available for anyone to use and modify with few or no restrictions. Users can modify source code to meet their unique needs, or collaborate with others to enhance the software. Many Web 2.0 companies use open source software to power their sites, and offer open source products and content.

**O’Reilly Media**—The company that introduced and promoted the term Web 2.0 (coined by company executive Dale Dougherty). O’Reilly Media publishes technology books and  

3.22 Web 2.0 Glossary **111**

websites, and hosts several conferences, including the Web 2.0 Summit, Web 2.0 Expo, OSCON™ (the Open Source Convention), Emerging Technology, Emerging Telephony, Where 2.0, RailsConf, MySQL, Ubuntu Live and more. See the O’Reilly Radar (http:// radar.oreilly.com/) to keep up-to-date on emerging technology trends.

**outsourcing**—A company’s hiring of independent contractors or other companies to perform various tasks. Outsourcing is often cheaper for the company.

**performance-based advertising**—Advertising that pays based on user actions, such as making a purchase, filling out a registration form, etc. (See also cost-per-action.)

**permalink**—A URL that links to a specific blog entry instead of the blog’s homepage. Links stay relevant even after the blog entry moves off the home page and into the archive.

**perpetual beta**—The idea of continually releasing new features even if they aren’t “final.” This allows software companies to constantly fix bugs and improve the software by getting continuous feedback from real users.

**Pew Internet & American Life Project**—A non-profit Internet research company. The project is funded by the Pew Charitable Trusts, which has also initiated other research and cultural projects.

**PHPNuke**—An open source content-management system and web publishing tool based on PHP and MySQL.

**podcast**—A media file designed for syndicated distribution online. It can be played on a personal computer or mobile media player (such as an iPod or MP3 player).

**Policy Aware Web Project**—A site devoted to developing policies regarding Internet data. This is an attempt to deal with Semantic Web security concerns.

**premium content**—Website content that is available for a fee (e.g., e-books, articles, etc.). It is a way for publishers to monetize their sites. Sites offering premium content typically offer free content as well.

**Problogger**—A blog about blogging. It teaches bloggers how to monetize their sites with Google AdSense and other programs.

**Programmable Web**—A website with extensive directories of web services APIs and mashups.

**publisher**—See “web publisher.”

**RDF (Resource Description Framework)**—An XML-based language used to describe content attributes such as the page title, author, etc.

**RDF triples**—Composed of two pieces of information and a linking fact. They are used to help computers understand data, a vital part of the Semantic Web.

**reader comment**—Feedback left by readers on a blog.

**recommender systems**—Systems that collect data using collaborative filtering to determine users' tastes and interests as they search the Internet. For example, Amazon’s “customers who bought this item also bought...”

**Red Hat**—A popular version of the Linux operating system. The company is a leader in the open source movement.

**remixing**—Combining existing applications and/or content into something new; this is funda- mental to Web 2.0.

**reputation systems**—Systems used by businesses like eBay and Amazon to encourage trust. For example, after each eBay transaction, the buyer and the seller can each leave positive or negative comments about the other party.  

**112** Chapter 3 Dive Into® Web 2.0

**REST (Representational State Transfer)**—A simple alternative to SOAP for implementing web services. Many developers prefer REST-based web services to SOAP-based web services for their simplicity, their ability to be cached and more. Amazon offers some REST-based web services. (See also SOAP.)

**Rich Internet Applications (RIAs)**—Web applications that have the responsiveness and the rich GUI normally associated with desktop applications. Related technologies for building RIAs include Ajax, Dojo, Silverlight, Flex and more.

**RSS**—An XML-based web-content syndication format. Syndicated RSS feeds are used to publish frequently updated content such as news, blog entries, podcasts, and more. Some RSS feeds include the full text, but most contain only a portion of the document, encouraging the reader to visit the content site.

**Ruby on Rails**—An open source, web application development scripting language and framework that increases the speed at which you can create typical database-driven web applications.

**Salesforce.com**—An SaaS company that specializes in Customer Relationship Management (CRM) software; a leader in the SaaS movement.

**scrobbling**—Last.fm’s music tracking and analysis feature that provides you with recommenda- tions based on the music you listen to through the site or on your iPod. (See also recommender systems.)

**search engine marketing (SEM)**—Promoting your website to increase traffic and search results. This includes paid search, online advertising and more.

**search engine optimization (SEO)**—Designing your website to maximize your findability and improve your rankings in organic search engine results.

**search engine result page (SERP)**—The page shown to a user by a search engine with a listing of web pages matching the search query sorted by relevance.

**SearchEngineLand.com**—Danny Sullivan’s search engine news blog.

**SearchEngineWatch.com**—A search engine marketing resource site. Includes articles, tutorials, conferences and more.

**Second Life**—A 3D virtual world social networking program developed by Linden Labs. Users create an avatar (their online image and persona) that they use to meet other users with similar interests, conduct business, participate in group activities, take classes and more.

**Semantic Web**—The “web of meaning.” What some believe will be the next evolution of the web in which web content can be read and understood by software applications.

**Silverlight**—A Rich Internet Application (RIA) framework developed by Microsoft; competes with Adobe Flash and Flex.

**Six Apart**—The company responsible for several blogging software applications and websites, including Movable Type, TypePad and Vox.

**Skype**—The most popular VoIP company. Users can place free calls to other Skype users around the world over their Internet connection. They also offer fee-based services that allow you to call non-Skype phone numbers. Skype was purchased by eBay in 2005 for $2.6 billion. Its founders recently launched Joost (an Internet TV site).

**SOAP (Simple Object Access Protocol)**—A protocol for exchanging XML-based information over a network. SOAP is used as a messaging framework in web services.

**social bookmarking**—The act of sharing your bookmarks with others through a website such as del.icio.us or Ma.gnolia. Users bookmark their favorites sites, articles, blogs and more, and tag them by keyword.  

3.22 Web 2.0 Glossary **113**

**social media**—Any media (e.g., photos, videos, music, etc.) shared online. Social media sites, such as Digg, YouTube and Flickr, often include features for user comments, collaborative filtering and tagging.

**social networking**—Sites designed to organize users’ existing relationships and help users establish new ones. Popular social networking sites include MySpace, Facebook, LinkedIn, Second Life and more.

**SocialText**—The first wiki company; provides wiki services to corporations. (See also wiki.)

**Software as a Service (SaaS)**—Software that runs on a web server. It does not need to be installed on your local computer, and companies can instantly update all users to the latest version. Salesforce.com, Google, 37Signals and Microsoft all have extensive SaaS offerings.

**spam**—Junk e-mail messages, blog comments and forum postings.

**SPARQL Protocol and RDF Query Language (SPARQL)**—An RDF query language for the Semantic Web.

**tag**—An author- and/or user-submitted label for web content used to classify it by subject or keyword. For example, a picture of the Statue of Liberty posted on Flickr might be tagged with “newyorkcity,” “statueofliberty,” “usa,” etc. Users can search for content on a site by tags. For examples of tag usage, see Technorati and Flickr.

**tag cloud**—A weighted list of content tags on a website. A tag cloud is usually in alphabetical order, with the most popular tags often appearing in a larger or bold font. Each tag links to a page where you’ll find all of the content on that site that has been “tagged” (by publishers and/or users) with that term. Tag clouds are used by many Web 2.0 companies, including Technorati, Flickr, del.icio.us and more.

**tagging**—The act of adding tags to content.

**tagscape**—The tagging “landscape”; the patterns and trends that are seen in tagging and tag clouds.

**TechCrunch**—A popular Internet technology blog that focuses on the companies, products, people and events of Web 2.0.

**Technorati**—A popular blog search engine that uses tagging.

**37Signals**—The company that developed Ruby on Rails (http://www.deitel.com/Resource Centers/Programming/Ruby/tabid/715/Default.aspx) and many SaaS applications, including Basecamp.

**trackback**—A method for web content authors to request notification when a website links to their content (articles, blog postings, etc.). It is a great way for authors to track links into their sites, measure the viral effects of their work, find related sites and more.

**Twitter**—A mobile web service that enables users to message groups of friends at once and automat- ically receive their friends’ updates on a cell phone or through a chat window.

**Ubuntu**—A popular distribution of the Linux operating system.

**user-generated content**—Content that is created by users. User-generated content is central to Web 2.0.

**ValueClick**—An Internet advertising company.

**vlogging**—Video blogging.

**VoIP (Voice over Internet Protocol)**—Voice services over the Internet; used to build telephone services. The leading VoIP company is Skype, which offers free phone service among Skype users worldwide.

**Vonage**—A VoIP company. They provide broadband Internet telephone services that can be used with a standard phone (with adapter).  

**114** Chapter 3 Dive Into® Web 2.0

**Web 1.0**—The Internet experience previous to Web 2.0, focusing more on static content. Some people called it the “brochure web.”

**Web 2.0**—A term coined by Dale Dougherty of O’Reilly Media in 2003. It refers to the current state of the web, which has a strong emphasis on user participation and community. Web 2.0 sites include social networking, wikis, blogging, social media, tagging, collaborative filtering, and more.

**web as a platform**—Instead of viewing the operating system as the application platform and building “Windows-based applications” or “Linux-based applications,” developers now build “web-based applications.”

**web of meaning**—Another name for the “Semantic Web.”

**Web Ontology Language (OWL)**—A key Semantic Web technology, used for organizing data.

**web publisher**—A site that offers content. Advertisers place ads on web publisher sites.

**web-scale computing**—Refers to the ability to scale memory and processing power according to need, by using web-based processing power and memory, often provided by other companies. Amazon offers web-scale computing through web services such as Simple Storage Service (S3) and Elastic Compute Cloud (EC2).

**web service**—A service provided online that can be called by another program across the Internet.

**Weblogsinc**—A blog network.

**webtop**—A desktoplike environment (such as Laszlo Webtop) for running web applications in a web browser.

**wiki**—A collaborative, editable document online. The best known example of a wiki is Wikipedia, which has quickly become a leading web resource for virtually any topic.

**Wikia**—A site offering specialized wiki communities about popular television shows, games, liter- ature, shopping and more.

**Wikipedia**—A community-generated encyclopedia using wiki technology.

**wisdom of crowds**—The concept that a large diverse group of individuals that does not necessarily include experts can provide more accurate answers than a small group of specialists working together.

**WordPress**—Popular blogging software.

**World Wide Web Consortium (W3C)**—An organization that develops web standards.

**Xanga**—A popular personal blogging site that includes community features.

**XML (Extensible Markup Language)**—A markup language developed in 1996 by the World Wide Web Consortium (W3C) that allows you to label data based on its meaning.

**XML vocabularies**—Customized XML-based markup languages, such as XHTML for web content, CML for chemistry, MathML for mathematical content and formulas, and XBRL for financial data.

**Yahoo! Pipes**—A mashup tool that enables you to aggregate and manipulate many data sources.

**Yahoo! Publisher Network**—Yahoo’s contextual advertising program for publishers. This is a fundamental and popular form of monetization, particularly for Web 2.0 startup companies.

**Yahoo! Search Marketing**—Yahoo!’s advertising program for advertisers.

**YouTube**—An Internet video sharing site that has created a huge social phenomenon. Users upload and share videos. The company was bought by Google in 2006 for $1.65 billion.

**Zepheira**—A company that provides Semantic Web knowledge management and enterprise data integration products and services.  

Self-Review Exercises **115**

**Self-Review Exercises 3.1** Fill in the blanks in each of the following statements:

a) content refers to (legally) taking someone else’s existing content and adding to it or changing it in some way.

b) The term Web 2.0 was coined by of O’Reilly® Media in 2003. c) are user-generated labels used to categorize content. d) The major Ajax technologies are , , , ,

and . e) are webtop applications that have responsiveness and functionality ap-

proaching that of desktop applications. f) Amazon’s hardware and communications infrastructure web services are examples of

. They enable businesses to pay for only the processing or storage space need- ed during any given period.

g) The increased value of a network as its number of users grows is referred to as .

h) Two popular RIA frameworks are Adobe’s and Microsoft’s .

**3.2** State whether each of the following is _true_ or _false_. If _false_, explain why. a) Tagging is for personal organization of content only. b) The user is at the center of Web 2.0. c) Location-based services always use GPS. d) Open source software is often called “free” because it does not cost money. e) Google’s PageRank is determined by the number of page views a website receives.

**Answers to Self-Review Exercises 3.1** a) Remixing.

b) Dale Dougherty c) Tags. d) XHTML, CSS, JavaScript, the DOM, XML, the XMLHttpRequest object. e) Rich Internet Applications (RIAs). f) web-scale computing. g) network effects (an aspect of Metcalfe’s Law). h) Flex, Silverlight.

**3.2** a) False. User-generated tags are used by many websites to categorize content so that it is easily searchable by other users.

b) True. c) False. Location-based services often use GPS; however, they often use other information

to determine your location, such as your IP address. d) False. Open source software is free in terms of allowing access to the source code. It is

not necessarily free of cost. e) False. The PageRank algorithm considers the number of links into a web page and the

quality of the linking sites (among other factors) to determine the importance of the page. Google search also considers all of the content on the page, its fonts, its headers and the content of neighboring pages.

**Exercises 3.3** Fill in the blanks in each of the following statements:

a) is an example of an agile development process.  

**116** Chapter 3 Dive Into® Web 2.0

b) The is a design that encourages user interaction and community contribu- tions.

c) Ruby on Rails was developed by . d) systems add software to digital media to prevent piracy. e) are attempts at consistent naming conventions. f) Wikis rely on the .

**3.4** State whether each of the following is _true_ or _false_. If _false_, explain why. a) Advertising is the most common Web 2.0 monetization model. b) Collaborative filtering is used by search engines. c) XML is an executable language. d) Most bloggers provide RSS feeds. e) Holding people’s attention is difficult in today’s society.

**3.5** Define each of the following terms: a) collective intelligence. b) folksonomy. c) permalink. d) tag cloud. e) web service. f) monetization.

**3.6** List some of the key factors that have attributed to the growth of Web 2.0.

**3.7** Discuss some of the methods you can use to increase the findability of your website.

**3.8** In Section 3.3 we discussed how many Web 2.0 sites are enabling discovery—helping you find new content you would not have otherwise sought out. Pick three Web 2.0 sites and describe how they are enabling you to discover new content through their sites.

**3.9** Consider a picture of the Eiffel Tower. List 10 words you might use to tag this picture on a photosharing site such as Flickr so that others searching the site will find it.
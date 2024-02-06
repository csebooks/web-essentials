---
title: "XML and RSS"
weight: 11
---

# O B J E C T I V E S

In this chapter you will learn:

■ To mark up data using XML.

■ How XML namespaces help provide unique XML element and attribute names.

■ To create DTDs and schemas for specifying and validating the structure of an XML document.

■ To create and use simple XSL style sheets to render XML document data.

■ To retrieve and manipulate XML data programmatically using JavaScript.

■ RSS and how to programmatically apply an XSL transformation to an RSS document using JavaScript.

## Introduction

The **Extensible Markup Language (XML)** was developed in 1996 by the **World Wide Web Consortium’s (W3C’s)** XML Working Group. XML is a widely supported **open technology** (i.e., nonproprietary technology) for describing data that has become the stan- dard format for data exchanged between applications over the Internet.

Web applications use XML extensively and web browsers provide many XML-related capabilities. Sections 14.2–14.7 introduce XML and XML-related technologies—XML namespaces for providing unique XML element and attribute names, and Document Type Definitions (DTDs) and XML Schemas for validating XML documents. These sec- tions support the use of XML in many subsequent chapters. Sections 14.8–14.9 present additional XML technologies and key JavaScript capabilities for loading and manipulating XML documents programmatically—this material is optional but is recommended if you plan to use XML in your own applications. Finally, Section 14.10 introduces RSS—an XML format used to syndicate simple website content—and shows how to format RSS elements using JavaScript and other technologies presented in this chapter.

## XML Basics

XML permits document authors to create **markup** (i.e., a text-based notation for describ- ing data) for virtually any type of information. This enables document authors to create entirely new markup languages for describing any type of data, such as mathematical for- mulas, software-configuration instructions, chemical molecular structures, music, news, recipes and financial reports. XML describes data in a way that both human beings and computers can understand.

Figure 14.1 is a simple XML document that describes information for a baseball player. We focus on lines 5–9 to introduce basic XML syntax. You will learn about the other elements of this document in Section 14.3.

```bash
<?xml version = "1.0"?>

<!-- Fig. 14.1: player.xml -->
<!-- Baseball player structured with XML -->
<player>
<firstName>John</firstName>
<lastName>Doe</lastName>
<battingAverage>0.375</battingAverage>
</player>
```

**Fig. 14.1** | XML that describes a baseball player’s information.

XML documents contain text that represents content (i.e., data), such as John (line 6 of Fig. 14.1), and **elements** that specify the document’s structure, such as firstName (line 6 of Fig. 14.1). XML documents delimit elements with **start tags** and **end tags**. A start tag consists of the element name in **angle brackets** (e.g., <player> and <firstName> in lines 5 and 6, respectively). An end tag consists of the element name preceded by a **forward slash (/)** in angle brackets (e.g., </firstName> and </player> in lines 6 and 9, respec- tively). An element’s start and end tags enclose text that represents a piece of data (e.g., the player’s firstName—John—in line 6, which is enclosed by the <firstName> start tag and </firstName> end tag). Every XML document must have exactly one **root element** that contains all the other elements. In Fig. 14.1, the root element is player (lines 5–9).

XML-based markup languages—called XML **vocabularies**—provide a means for describing particular types of data in standardized, structured ways. Some XML vocabu- laries include XHTML (Extensible HyperText Markup Language), MathML (for mathe- matics), VoiceXML™ (for speech), CML (Chemical Markup Language—for chemistry), XBRL (Extensible Business Reporting Language—for financial data exchange) and others that we discuss in Section 14.7.

Massive amounts of data are currently stored on the Internet in many formats (e.g., databases, web pages, text files). Much of this data, especially that which is passed between systems, will soon take the form of XML. Organizations see XML as the future of data encoding. Information technology groups are planning ways to integrate XML into their systems. Industry groups are developing custom XML vocabularies for most major indus- tries that will allow business applications to communicate in common languages. For example, many web services allow web-based applications to exchange data seamlessly through standard protocols based on XML. We discuss web services in Chapter 28.

The next generation of the web is being built on an XML foundation, enabling you to develop more sophisticated web-based applications. XML allows you to assign meaning to what would otherwise be random pieces of data. As a result, programs can “understand” the data they manipulate. For example, a web browser might view a street address in a simple web page as a string of characters without any real meaning. In an XML document, however, this data can be clearly identified (i.e., marked up) as an address. A program that uses the document can recognize this data as an address and provide links to a map of that location, driving directions from that location or other location-specific information. Likewise, an application can recognize names of people, dates, ISBN numbers and any other type of XML-encoded data. The application can then present users with other related information, providing a richer, more meaningful user experience.

**_Viewing and Modifying XML Documents_**
XML documents are highly portable. Viewing or modifying an XML document—which is a text file that usually ends with the **.xml** filename extension—does not require special software, although many software tools exist, and new ones are frequently released that make it more convenient to develop XML-based applications. Any text editor that sup- ports ASCII/Unicode characters can open XML documents for viewing and editing. Also, most web browsers can display XML documents in a formatted manner that shows the XML’s structure. Section 14.3 demonstrates this in Internet Explorer and Firefox. An im- portant characteristic of XML is that it is both human and machine readable.

**_Processing XML Documents_**
Processing an XML document requires software called an **XML parser** (or **XML proces- sor**). A parser makes the document’s data available to applications. While reading an XML document’s contents, a parser checks that the document follows the syntax rules specified by the W3C’s XML Recommendation (www.w3.org/XML). XML syntax requires a single root element, a start tag and end tag for each element, and properly nested tags (i.e., the end tag for a nested element must appear before the end tag of the enclosing element). Fur- thermore, XML is case sensitive, so the proper capitalization must be used in elements. A document that conforms to this syntax is a **well-formed XML document** and is syntacti- cally correct. We present fundamental XML syntax in Section 14.3. If an XML parser can process an XML document successfully, that XML document is well-formed. Parsers can provide access to XML-encoded data in well-formed documents only.

Often, XML parsers are built into software or available for download over the Internet. Some popular parsers include **Microsoft XML Core Services (MSXML)**— which is included with Internet Explorer, the Apache Software Foundation’s **Xerces** (xml.apache.org) and the open-source **Expat XML Parser** (expat.sourceforge.net).

**_Validating XML Documents_**
An XML document can reference a **Document Type Definition (DTD)** or a **schema** that defines the proper structure of the XML document. When an XML document references a DTD or a schema, some parsers (called **validating parsers**) can read the DTD/schema and check that the XML document follows the structure defined by the DTD/schema. If the XML document conforms to the DTD/schema (i.e., the document has the appropriate structure), the XML document is **valid**. For example, if in Fig. 14.1 we were referencing a DTD that specified that a player element must have firstName, lastName and battin-

gAverage elements, then omitting the lastName element (line 7 in Fig. 14.1) would inval- idate the XML document player.xml. However, the XML document would still be well- formed, because it follows proper XML syntax (i.e., it has one root element, each element has a start tag and an end tag, and the elements are nested properly). By definition, a valid XML document is well-formed. Parsers that cannot check for document conformity against DTDs/schemas are **nonvalidating parsers**—they determine only whether an XML document is well-formed, not whether it is valid.

We discuss validation, DTDs and schemas, as well as the key differences between these two types of structural specifications, in Sections 14.5–14.6. For now, note that schemas are XML documents themselves, whereas DTDs are not. As you will learn in Section 14.6, this difference presents several advantages in using schemas over DTDs.

**Software Engineering Observation 14.1**

> _DTDs and schemas are essential for business-to-business (B2B) transactions and mission-critical systems. Validating XML documents ensures that disparate systems can manipulate data structured in standardized ways and prevents errors caused by missing or malformed data._ 14.1

**_Formatting and Manipulating XML Documents_**
Most XML documents contain only data, not formatting instructions, so applications that process XML documents must decide how to manipulate or display the data. For example, a PDA (personal digital assistant) may render an XML document differently than a wire- less phone or a desktop computer. You can use **Extensible Stylesheet Language (XSL)** to specify rendering instructions for different platforms. We discuss XSL in Section 14.8.

XML-processing programs can also search, sort and manipulate XML data using XSL. Some other XML-related technologies are XPath (XML Path Language—a language for accessing parts of an XML document), XSL-FO (XSL Formatting Objects—an XML vocabulary used to describe document formatting) and XSLT (XSL Transformations—a language for transforming XML documents into other documents). We present XSLT and XPath in Section 14.8.

## Structuring Data

In this section and throughout this chapter, we create our own XML markup. XML allows you to describe data precisely in a well-structured format.

**_XML Markup for an Article_**
In Fig. 14.2, we present an XML document that marks up a simple article using XML. The line numbers shown are for reference only and are not part of the XML document.

This document begins with an **XML declaration** (line 1), which identifies the docu- ment as an XML document. The **version attribute** specifies the XML version to which the document conforms. The current XML standard is version 1.0. Though the W3C released a version 1.1 specification in February 2004, this newer version is not yet widely supported. The W3C may continue to release new versions as XML evolves to meet the requirements of different fields.

```bash
<?xml version = "1.0"?>
<!-- Fig. 14.2: article.xml -->
<!-- Article structured with XML -->
<article>
<title>Simple XML</title>
<date>July 4, 2007</date>
<author>
<firstName>John</firstName>
<lastName>Doe</lastName>
</author>
<summary>XML is pretty easy.</summary>
<content>This chapter presents examples that use XML.</content>
</article>
```

**Fig. 14.2** | XML used to mark up an article.

**Portability Tip 14.1**

> _Documents should include the XML declaration to identify the version of XML used. A docu- ment that lacks an XML declaration might be assumed to conform to the latest version of XML—when it does not, errors could result._ 14.1

As in most markup languages, blank lines (line 2), white spaces and indentation help improve readability. Blank lines are normally ignored by XML parsers. XML comments (lines 3–4), which begin with <!-- and end with -->, can be placed almost anywhere in an XML document and can span multiple lines. There must be exactly one end marker (-->) for each begin marker (<!--).

**Common Programming Error 14.1**

> _Placing any characters, including white space, before the XML declaration is an error._ 14.1

**Common Programming Error 14.2**

> _In an XML document, each start tag must have a matching end tag; omitting either tag is an error. Soon, you will learn how such errors are detected._ 14.2

**Common Programming Error 14.3**

> _XML is case sensitive. Using different cases for the start tag and end tag names for the same ele- ment is a syntax error._ 14.3

In Fig. 14.2, article (lines 5–14) is the root element. The lines that precede the root element (lines 1–4) are the XML **prolog**. In an XML prolog, the XML declaration must appear before the comments and any other markup.

The elements we use in the example do not come from any specific markup language. Instead, we chose the element names and markup structure that best describe our partic- ular data. You can invent elements to mark up your data. For example, element title (line 6) contains text that describes the article’s title (e.g., Simple XML). Similarly, date (line 7), author (lines 8–11), firstName (line 9), lastName (line 10), summary (line 12) and con-

tent (line 13) contain text that describes the date, author, the author’s first name, the author’s last name, a summary and the content of the document, respectively. XML ele- ment names can be of any length and may contain letters, digits, underscores, hyphens and periods. However, they must begin with either a letter or an underscore, and they should not begin with “xml” in any combination of uppercase and lowercase letters (e.g., XML, Xml, xMl), as this is reserved for use in the XML standards. v

**Common Programming Error 14.4**

> _Using a white-space character in an XML element name is an error._ 14.4

**Good Programming Practice 14.1**

> _XML element names should be meaningful to humans and should not use abbreviations._ 14.1

XML elements are **nested** to form hierarchies—with the root element at the top of the hierarchy. This allows document authors to create parent/child relationships between data. For example, elements title, date, author, summary and content are nested within article. Elements firstName and lastName are nested within author. We discuss the hierarchy of Fig. 14.2 later in this chapter (Fig. 14.25).

**Common Programming Error 14.5**

> _Nesting XML tags improperly is a syntax error. For example, <x><y>hello</x></y> is an error, because the </y> tag must precede the </x> tag._ 14.5

Any element that contains other elements (e.g., article or author) is a **container ele- ment**. Container elements also are called **parent elements**. Elements nested inside a con- tainer element are **child elements** (or children) of that container element. If those child elements are at the same nesting level, they are **siblings** of one another.

**_Viewing an XML Document in Internet Explorer and Firefox_**
The XML document in Fig. 14.2 is simply a text file named article.xml. This document does not contain formatting information for the article. This is because XML is a technol- ogy for describing the structure of data. Formatting and displaying data from an XML document are application-specific issues. For example, when the user loads article.xml in Internet Explorer, MSXML (Microsoft XML Core Services) parses and displays the document’s data. Firefox has a similar capability. Each browser has a built-in **style sheet** to format the data. Note that the resulting format of the data (Fig. 14.3) is similar to the format of the listing in Fig. 14.2. In Section 14.8, we show how to create style sheets to transform your XML data into various formats suitable for display.

Note the minus sign (**–**) and plus sign (**+**) in the screen shots of Fig. 14.3. Although these symbols are not part of the XML document, both browsers place them next to every container element. A minus sign indicates that the browser is displaying the container ele- ment’s child elements. Clicking the minus sign next to an element collapses that element

**Fig. 14.3** | article.xml displayed by Internet Explorer 7 and Firefox 2. (Part 1 of 2.)

**Fig. 14.3** | article.xml displayed by Internet Explorer 7 and Firefox 2. (Part 2 of 2.)

(i.e., causes the browser to hide the container element’s children and replace the minus sign with a plus sign). Conversely, clicking the plus sign next to an element expands that element (i.e., causes the browser to display the container element’s children and replace the plus sign with a minus sign). This behavior is similar to viewing the directory structure on your system in Windows Explorer or another similar directory viewer. In fact, a direc- tory structure often is modeled as a series of tree structures, in which the **root** of a tree rep- resents a disk drive (e.g., C:), and **nodes** in the tree represent directories. Parsers often store XML data as tree structures to facilitate efficient manipulation, as discussed in Section 14.9.

[_Note:_ In Windows XP Service Pack 2 and Windows Vista, by default Internet Explorer displays all the XML elements in expanded view, and clicking the minus sign (Fig. 14.3(a)) does not do anything. To enable collapsing and expanding, right click the _Information Bar_ that appears just below the **Address** field and select **Allow Blocked Con- tent...**. Then click **Yes** in the pop-up window that appears.]

**_XML Markup for a Business Letter_**
Now that you’ve seen a simple XML document, let’s examine a more complex XML doc- ument that marks up a business letter (Fig. 14.4). Again, we begin the document with the XML declaration (line 1) that states the XML version to which the document conforms.

```bash
<?xml version = "1.0"?>
<!-- Fig. 14.4: letter.xml -->
<!-- Business letter marked up as XML -->
<!DOCTYPE letter SYSTEM "letter.dtd">
<letter>
<contact type = "sender">
<name>Jane Doe</name>
<address1>Box 12345</address1>
<address2>15 Any Ave.</address2>
<city>Othertown</city>
<state>Otherstate</state>
<zip>67890</zip>
<phone>555-4321</phone>
<flag gender = "F" />
</contact>
<contact type = "receiver">
<name>John Doe</name>
<address1>123 Main St.</address1>
<address2></address2>
<city>Anytown</city>
<state>Anystate</state>
<zip>12345</zip>
<phone>555-1234</phone>
<flag gender = "M" />
</contact>
<salutation>Dear Sir:</salutation>
<paragraph>It is our privilege to inform you about our new database
managed with XML. This new system allows you to reduce the
load on your inventory list server by having the client machine
perform the work of sorting and filtering the data.
</paragraph>
<paragraph>Please visit our website for availability and pricing.
</paragraph>

```

**Fig. 14.4** | Business letter marked up as XML. (Part 1 of 2.)

```bash
<closing>Sincerely,</closing>
<signature>Ms. Jane Doe</signature>
</letter>
```

**Fig. 14.4** | Business letter marked up as XML. (Part 2 of 2.)

Line 5 specifies that this XML document references a DTD. Recall from Section 14.2 that DTDs define the structure of the data for an XML document. For example, a DTD specifies the elements and parent/child relationships between elements permitted in an XML document.

**Error-Prevention Tip 14.1**

> _An XML document is not required to reference a DTD, but validating XML parsers can use a DTD to ensure that the document has the proper structure._ 14.1

**Portability Tip 14.2**

> _Validating an XML document helps guarantee that independent developers will exchange data in a standardized form that conforms to the DTD._ 14.2

The DOCTYPE reference (line 5) contains three items, the name of the root element that the DTD specifies (letter); the keyword **SYSTEM** (which denotes an **external DTD**—a DTD declared in a separate file, as opposed to a DTD declared locally in the same file); and the DTD’s name and location (i.e., letter.dtd in the current directory; this could also be a fully qualified URL). DTD document filenames typically end with the **.dtd** extension. We discuss DTDs and letter.dtd in detail in Section 14.5.

Several tools (many of which are free) validate documents against DTDs (discussed in Section 14.5) and schemas (discussed in Section 14.6). Microsoft’s **XML Validator** is available free of charge from the **Download sample** link at

msdn.microsoft.com/archive/en-us/samples/internet/
xml/xml_validator/default.asp

This validator can validate XML documents against both DTDs and schemas. To install it, run the downloaded executable file xml_validator.exe and follow the steps to com- plete the installation. Once the installation is successful, open the validate_js.htm file located in your XML Validator installation directory in IE to validate your XML docu- ments. We installed the XML Validator at C:\\XMLValidator (Fig. 14.5). The output (Fig. 14.6) shows the results of validating the document using Microsoft’s XML Validator. You can click a node to expand it and see its contents. Visit www.w3.org/XML/Schema for a list of additional validation tools.

Root element letter (lines 7–43 of Fig. 14.4) contains the child elements contact, contact, salutation, paragraph, paragraph, closing and signature. Data can be placed between an elements’ tags or as **attributes**—name/value pairs that appear within the angle brackets of an element’s start tag. Elements can have any number of attributes (separated by spaces) in their start tags. The first contact element (lines 8–17) has an attribute named type with **attribute value** "sender", which indicates that this contact element identifies the letter’s sender. The second contact element (lines 19–28) has attribute type with value "receiver", which indicates that this contact element identifies the letter’s recipient. Like element names, attribute names are case sensitive, can be any

**Fig. 14.5** | Validating an XML document with Microsoft’s XML Validator.

**Fig. 14.6** | Validation result using Microsoft’s XML Validator.

length, may contain letters, digits, underscores, hyphens and periods, and must begin with either a letter or an underscore character. A contact element stores various items of infor- mation about a contact, such as the contact’s name (represented by element name), address (represented by elements address1, address2, city, state and zip), phone number (rep- resented by element phone) and gender (represented by attribute gender of element flag). Element salutation (line 30) marks up the letter’s salutation. Lines 32–39 mark up the letter’s body using two paragraph elements. Elements closing (line 41) and signature (line 42) mark up the closing sentence and the author’s “signature,” respectively.

**Common Programming Error 14.6**

> _Failure to enclose attribute values in double ("") or single ('') quotes is a syntax error._ 14.6

Line 16 introduces the **empty element** flag. An empty element is one that does not have any content. Instead, an empty element sometimes places data in attributes. Empty element flag has one attribute that indicates the gender of the contact (represented by the parent contact element). Document authors can close an empty element either by placing a slash immediately preceding the right angle bracket, as shown in line 16, or by explicitly writing an end tag, as in line 22

<!address2></!address2>

Note that the address2 element in line 22 is empty because there is no second part to this contact’s address. However, we must include this element to conform to the structural rules specified in the XML document’s DTD—letter.dtd (which we present in Section 14.5). This DTD specifies that each contact element must have an address2 child element (even if it is empty). In Section 14.5, you will learn how DTDs indicate re- quired and optional elements.

## XML Namespaces

XML allows document authors to create custom elements. This extensibility can result in **naming collisions** among elements in an XML document that each have the same name. For example, we may use the element book to mark up data about a Deitel publication. A stamp collector may use the element book to mark up data about a book of stamps. Using both of these elements in the same document could create a naming collision, making it difficult to determine which kind of data each element contains.

An XML **namespace** is a collection of element and attribute names. XML namespaces provide a means for document authors to unambiguously refer to elements with the same name (i.e., prevent collisions). For example,

<!subject>Geometry</!subject>

and

<!subject>Cardiology</!subject>

use element subject to mark up data. In the first case, the subject is something one studies in school, whereas in the second case, the subject is a field of medicine. Namespaces can differentiate these two subject elements—for example:

<!highschool:subject>Geometry</!highschool:subject>

and

<!medicalschool:subject>Cardiology</!medicalschool:subject>

Both highschool and medicalschool are **namespace prefixes**. A document author places a namespace prefix and colon (:) before an element name to specify the namespace to which that element belongs. Document authors can create their own namespace prefixes using virtually any name except the reserved namespace prefix xml. In the next subsections, we demonstrate how document authors ensure that namespaces are unique.

**Common Programming Error 14.7**

> _Attempting to create a namespace prefix named xml in any mixture of uppercase and lowercase letters is a syntax error—the xml namespace prefix is reserved for internal use by XML itself._ 14.7

**_Differentiating Elements with Namespaces_**
Figure 14.7 demonstrates namespaces. In this document, namespaces differentiate two distinct elements—the file element related to a text file and the file document related to an image file.

```bash
<?xml version = "1.0"?>

<!-- Fig. 14.7: namespace.xml -->
<!-- Demonstrating namespaces -->
<text:directory
xmlns:text = "urn:deitel:textInfo"
xmlns:image = "urn:deitel:imageInfo">

<text:file filename = "book.xml">
<text:description>A book list</text:description>
</text:file>

<image:file filename = "funny.jpg">
<image:description>A funny picture</image:description>
<image:size width = "200" height = "100" />
</image:file>
</text:directory>
```

**Fig. 14.7** | XML namespaces demonstration.

Lines 6–7 use the XML-namespace reserved attribute **xmlns** to create two namespace prefixes—text and image. Each namespace prefix is bound to a series of characters called a **Uniform Resource Identifier (URI)** that uniquely identifies the namespace. Document authors create their own namespace prefixes and URIs. A URI is a way to identifying a resource, typically on the Internet. Two popular types of URI are **Uniform Resource Name (URN)** and **Uniform Resource Locator (URL)**.

To ensure that namespaces are unique, document authors must provide unique URIs. In this example, we use the text urn:deitel:textInfo and urn:deitel:imageInfo as URIs. These URIs employ the URN scheme frequently used to identify namespaces. Under this naming scheme, a URI begins with "urn:", followed by a unique series of addi- tional names separated by colons.

Another common practice is to use URLs, which specify the location of a file or a resource on the Internet. For example, www.deitel.com is the URL that identifies the home page of the Deitel & Associates website. Using URLs guarantees that the namespaces are unique because the domain names (e.g., www.deitel.com) are guaranteed to be unique. For example, lines 5–7 could be rewritten as

```
<text:directory
xmlns:text = "http://www.deitel.com/xmlns-text"
xmlns:image = "http://www.deitel.com/xmlns-image">
```

where URLs related to the deitel.com domain name serve as URIs to identify the text and image namespaces. The parser does not visit these URLs, nor do these URLs need to refer to actual web pages. They each simply represent a unique series of characters used to differ- entiate URI names. In fact, any string can represent a namespace. For example, our image namespace URI could be hgjfkdlsa4556, in which case our prefix assignment would be

```
xmlns:image = "hgjfkdlsa4556"
```

Lines 9–11 use the text namespace prefix for elements file and description. Note that the end tags must also specify the namespace prefix text. Lines 13–16 apply namespace prefix image to the elements file, description and size. Note that attributes do not require namespace prefixes (although they can have them), because each attribute is already part of an element that specifies the namespace prefix. For example, attribute filename (line 9) is implicitly part of namespace text because its element (i.e., file) spec- ifies the text namespace prefix.

**_Specifying a Default Namespace_**
To eliminate the need to place namespace prefixes in each element, document authors may specify a **default namespace** for an element and its children. Figure 14.8 demonstrates us- ing a default namespace (urn:deitel:textInfo) for element directory.

Line 5 defines a default namespace using attribute xmlns with no prefex specified, but with a URI as its value. Once we define this default namespace, child elements belonging to the namespace need not be qualified by a namespace prefix. Thus, element file (lines 8–10) is in the default namespace urn:deitel:textInfo. Compare this to lines 9–10 of Fig. 14.7, where we had to prefix the file and description element names with the namespace prefix text.

The default namespace applies to the directory element and all elements that are not qualified with a namespace prefix. However, we can use a namespace prefix to specify a

```bash
<?xml version = "1.0"?>

<!-- Fig. 14.8: defaultnamespace.xml -->
<!-- Using default namespaces -->
<directory xmlns = "urn:deitel:textInfo"
xmlns:image = "urn:deitel:imageInfo">

<file filename = "book.xml">
<description>A book list</description>
</file>

<image:file filename = "funny.jpg">
<image:description>A funny picture</image:description>
<image:size width = "200" height = "100" />
</image:file>
</directory>
```

**Fig. 14.8** | Default namespace demonstration.

different namespace for a particular element. For example, the file element in lines 12– 15 includes the image namespace prefix, indicating that this element is in the urn:deitel:imageInfo namespace, not the default namespace.

**_Namespaces in XML Vocabularies_**
XML-based languages, such as XML Schema (Section 14.6) and Extensible Stylesheet Language (XSL) (Section 14.8), often use namespaces to identify their elements. Each of these vocabularies defines special-purpose elements that are grouped in namespaces. These namespaces help prevent naming collisions between predefined elements and user-defined elements.

## Document Type Definitions (DTDs)

Document Type Definitions (DTDs) are one of two main types of documents you can use to specify XML document structure. Section 14.6 presents W3C XML Schema docu- ments, which provide an improved method of specifying XML document structure.

**Software Engineering Observation 14.2**

> _XML documents can have many different structures, and for this reason an application cannot be certain whether a particular document it receives is complete, ordered properly, and not missing data. DTDs and schemas (Section 14.6) solve this problem by providing an extensible way to describe XML document structure. Applications should use DTDs or schemas to confirm whether XML documents are valid._ 14.2

**Software Engineering Observation 14.3**

> _Many organizations and individuals are creating DTDs and schemas for a broad range of applications. These collections—called **repositories**—are available free for download from the web (e.g., www.xml.org, www.oasis-open.org)._ 14.3

**_Creating a Document Type Definition_**
Figure 14.4 presented a simple business letter marked up with XML. Recall that line 5 of letter.xml references a DTD—letter.dtd (Fig. 14.9). This DTD specifies the business letter’s element types and attributes, and their relationships to one another.

A DTD describes the structure of an XML document and enables an XML parser to verify whether an XML document is valid (i.e., whether its elements contain the proper attributes and appear in the proper sequence). DTDs allow users to check document struc- ture and to exchange data in a standardized format. A DTD expresses the set of rules for document structure using an EBNF (Extended Backus-Naur Form) grammar. DTDs are not themselves XML documents. [_Note:_ EBNF grammars are commonly used to define programming languages. To learn more about EBNF grammars, visit en.wikipedia.org/ wiki/EBNF or www.garshol.priv.no/download/text/bnf.html.]

```bash
<!-- Fig. 14.9: letter.dtd -->
<!-- DTD document for letter.xml -->

<!ELEMENT letter ( contact+, salutation, paragraph+,
closing, signature )>

<!ELEMENT contact ( name, address1, address2, city, state,
zip, phone, flag )>
<!ATTLIST contact type CDATA #IMPLIED>

<!ELEMENT name ( #PCDATA )>
<!ELEMENT address1 ( #PCDATA )>
<!ELEMENT address2 ( #PCDATA )>
<!ELEMENT city ( #PCDATA )>
<!ELEMENT state ( #PCDATA )>
<!ELEMENT zip ( #PCDATA )>
<!ELEMENT phone ( #PCDATA )>
<!ELEMENT flag EMPTY>
<!ATTLIST flag gender (M | F) "M">

<!ELEMENT salutation ( #PCDATA )>
<!ELEMENT closing ( #PCDATA )>
<!ELEMENT paragraph ( #PCDATA )>
<!ELEMENT signature ( #PCDATA )>
```

**Fig. 14.9** | Document Type Definition (DTD) for a business letter.

**Common Programming Error 14.8**

> _For documents validated with DTDs, any document that uses elements, attributes or nesting re- lationships not explicitly defined by a DTD is an invalid document._ 14.8

**_Defining Elements in a DTD_**
The **ELEMENT element type declaration** in lines 4–5 defines the rules for element letter. In this case, letter contains one or more contact elements, one salutation element, one or more paragraph elements, one closing element and one signature element, in that sequence. The **plus sign (+) occurrence indicator** specifies that the DTD requires one or more occurrences of an element. Other occurence indicators include the **asterisk** (\*), which indicates an optional element that can occur zero or more times, and the **question mark** (?), which indicates an optional element that can occur at most once (i.e., zero or one occurrence). If an element does not have an occurrence indicator, the DTD requires exactly one occurrence.

The contact element type declaration (lines 7–8) specifies that a contact element contains child elements name, address1, address2, city, state, zip, phone and flag— in that order. The DTD requires exactly one occurrence of each of these elements.

**_Defining Attributes in a DTD_**
Line 9 uses the **ATTLIST attribute-list declaration** to define an attribute named type for the contact element. Keyword **#IMPLIED** specifies that if the parser finds a contact ele- ment without a type attribute, the parser can choose an arbitrary value for the attribute or can ignore the attribute. Either way the document will still be valid (if the rest of the doc- ument is valid)—a missing type attribute will not invalidate the document. Other key- words that can be used in place of #IMPLIED in an ATTLIST declaration include **#REQUIRED** and **#FIXED**. Keyword #REQUIRED specifies that the attribute must be present in the ele- ment, and keyword #FIXED specifies that the attribute (if present) must have the given fixed value. For example,

```
<!ATTLIST address zip CDATA #FIXED "01757">
```

indicates that attribute zip (if present in element address) must have the value 01757 for the document to be valid. If the attribute is not present, then the parser, by default, uses the fixed value that the ATTLIST declaration specifies.

**_Character Data vs. Parsed Character Data_**
Keyword **CDATA** (line 9) specifies that attribute type contains **character data** (i.e., a string). A parser will pass such data to an application without modification.

**Software Engineering Observation 14.4**

> _DTD syntax cannot describe an element’s or attribute’s data type. For example, a DTD cannot specify that a particular element or attribute can contain only integer data._ 14.4

Keyword **#PCDATA** (line 11) specifies that an element (e.g., name) may contain **parsed character data** (i.e., data that is processed by an XML parser). Elements with parsed char- acter data cannot contain markup characters, such as less than (<), greater than (>) or ampersand (&). The document author should replace any markup character in a #PCDATA element with the character’s corresponding **character entity reference**. For example, the character entity reference &lt; should be used in place of the less-than symbol (<), and the character entity reference &gt; should be used in place of the greater-than symbol (>). A document author who wishes to use a literal ampersand should use the entity reference &amp; instead—parsed character data can contain ampersands (&) only for inserting enti- ties. See Appendix A, XHTML Special Characters, for a list of other character entity ref- erences.

**Common Programming Error 14.9**

> _Using markup characters (e.g., <, > and &) in parsed character data is an error. Use character entity references (e.g., &lt;, &gt; and &amp;) instead._ 14.9

**_Defining Empty Elements in a DTD_**
Line 18 defines an empty element named flag. Keyword **EMPTY** specifies that the element does not contain any data between its start and end tags. Empty elements commonly de- scribe data via attributes. For example, flag’s data appears in its gender attribute (line 19). Line 19 specifies that the gender attribute’s value must be one of the enumerated values (M or F) enclosed in parentheses and delimited by a vertical bar (|) meaning “or.” Note that line 19 also indicates that gender has a default value of M.

**_Well-Formed Documents vs. Valid Documents_**
In Section 14.3, we demonstrated how to use the Microsoft XML Validator to validate an XML document against its specified DTD. The validation revealed that the XML docu- ment letter.xml (Fig. 14.4) is well-formed and valid—it conforms to letter.dtd

(Fig. 14.9). Recall that a well-formed document is syntactically correct (i.e., each start tag has a corresponding end tag, the document contains only one root element, etc.), and a valid document contains the proper elements with the proper attributes in the proper se- quence. An XML document cannot be valid unless it is well-formed.

When a document fails to conform to a DTD or a schema, the Microsoft XML Val- idator displays an error message. For example, the DTD in Fig. 14.9 indicates that a con- tact element must contain the child element name. A document that omits this child element is still well-formed, but is not valid. In such a scenario, Microsoft XML Validator displays the error message shown in Fig. 14.10.

**Fig. 14.10** | XML Validator displaying an error message.

## W3C XML Schema Documents

In this section, we introduce schemas for specifying XML document structure and validat- ing XML documents. Many developers in the XML community believe that DTDs are not flexible enough to meet today’s programming needs. For example, DTDs lack a way of indicating what specific type of data (e.g., numeric, text) an element can contain, and DTDs are not themselves XML documents, forcing developers to learn multiple gram- mars and developers to create multiple types of parsers. These and other limitations have led to the development of schemas.

Unlike DTDs, schemas do not use EBNF grammar. Instead, schemas use XML syntax and are actually XML documents that programs can manipulate. Like DTDs, schemas are used by validating parsers to validate documents.

In this section, we focus on the W3C’s **XML Schema** vocabulary (note the capital “S” in “Schema”). We use the term XML Schema in the rest of the chapter whenever we refer to W3C’s XML Schema vocabulary. For the latest information on XML Schema, visit www.w3.org/XML/Schema. For tutorials on XML Schema concepts beyond what we present here, visit www.w3schools.com/schema/default.asp.

Recall that a DTD describes an XML document’s structure, not the content of its ele- ments. For example,

```
<quantity>5</quantity>
```

contains character data. If the document that contains element quantity references a DTD, an XML parser can validate the document to confirm that this element indeed does contain PCDATA content. However, the parser cannot validate that the content is numeric; DTDs do not provide this capability. So, unfortunately, the parser also considers

```
<quantity>hello</quantity>
```

to be valid. An application that uses the XML document containing this markup should test that the data in element quantity is numeric and take appropriate action if it is not.

XML Schema enables schema authors to specify that element quantity’s data must be numeric or, even more specifically, an integer. A parser validating the XML document against this schema can determine that 5 conforms and hello does not. An XML docu- ment that conforms to a schema document is **schema valid**, and one that does not conform is **schema invalid**. Schemas are XML documents and therefore must themselves be valid.

**_Validating Against an XML Schema Document_**
Figure 14.11 shows a schema-valid XML document named book.xml, and Fig. 14.12 shows the pertinent XML Schema document (book.xsd) that defines the structure for book.xml. By convention, schemas use the **.xsd** extension. We used an online XSD sche- ma validator provided at

www.xmlforasp.net/SchemaValidator.aspx

to ensure that the XML document in Fig. 14.11 conforms to the schema in Fig. 14.12. To validate the schema document itself (i.e., book.xsd) and produce the output shown in Fig. 14.12, we used an online XSV (XML Schema Validator) provided by the W3C at

www.w3.org/2001/03/webdata/xsv

These tools are free and enforce the W3C’s specifications regarding XML Schemas and schema validation.

```bash
<?xml version = "1.0"?>

<!-- Fig. 14.11: book.xml -->
<!-- Book list marked up as XML -->
<deitel:books xmlns:deitel = "http://www.deitel.com/booklist">
<book>
<title>Visual Basic 2005 How to Program, 3/e</title>
</book>
<book>
<title>Visual C# 2005 How to Program, 2/e</title>
</book>
<book>
<title>Java How to Program, 7/e</title>
</book>
<book>
<title>C++ How to Program, 6/e</title>
</book>
<book>
<title>Internet and World Wide Web How to Program, 4/e</title>
</book>
</deitel:books>
```

**Fig. 14.11** | Schema-valid XML document describing a list of books.

```bash
<?xml version = "1.0"?>

<!-- Fig. 14.12: book.xsd -->
<!-- Simple W3C XML Schema document -->
<schema xmlns = "http://www.w3.org/2001/XMLSchema"
xmlns:deitel = "http://www.deitel.com/booklist"
targetNamespace = "http://www.deitel.com/booklist">

<element name = "books" type = "deitel:BooksType"/>

<complexType name = "BooksType">
<sequence>
<element name = "book" type = "deitel:SingleBookType"
minOccurs = "1" maxOccurs = "unbounded"/>
</sequence>
</complexType>

<complexType name = "SingleBookType">
<sequence>
<element name = "title" type = "string"/>
</sequence>
</complexType>
</schema>
```

**Fig. 14.12** | XML Schema document for book.xml. (Part 1 of 2.)

**Fig. 14.12** | XML Schema document for book.xml. (Part 2 of 2.)

Figure 14.11 contains markup describing several Deitel books. The books element (line 5) has the namespace prefix deitel, indicating that the books element is a part of the http://www.deitel.com/booklist namespace.

**_Creating an XML Schema Document_**
Figure 14.12 presents the XML Schema document that specifies the structure of book.xml (Fig. 14.11). This document defines an XML-based language (i.e., a vocabulary) for writ- ing XML documents about collections of books. The schema defines the elements, at- tributes and parent/child relationships that such a document can (or must) include. The schema also specifies the type of data that these elements and attributes may contain.

Root element **schema** (Fig. 14.12, lines 5–23) contains elements that define the struc- ture of an XML document such as book.xml. Line 5 specifies as the default namespace the standard W3C XML Schema namespace URI—**http://www.w3.org/2001/XMLSchema**. This namespace contains predefined elements (e.g., root-element schema) that comprise the XML Schema vocabulary—the language used to write an XML Schema document.

**Portability Tip 14.3**

> _W3C XML Schema authors specify URI http://www.w3.org/2001/XMLSchema when referring to the XML Schema namespace. This namespace contains predefined elements that comprise the XML Schema vocabulary. Specifying this URI ensures that validation tools correctly identify XML Schema elements and do not confuse them with those defined by document authors._ 14.3

Line 6 binds the URI http://www.deitel.com/booklist to namespace prefix deitel. As we discuss momentarily, the schema uses this namespace to differentiate names created by us from names that are part of the XML Schema namespace. Line 7 also spec- ifies http://www.deitel.com/booklist as the **targetNamespace** of the schema. This attribute identifies the namespace of the XML vocabulary that this schema defines. Note that the targetNamespace of book.xsd is the same as the namespace referenced in line 5 of book.xml (Fig. 14.11). This is what “connects” the XML document with the schema that defines its structure. When an XML schema validator examines book.xml and book.xsd, it will recognize that book.xml uses elements and attributes from the http://

www.deitel.com/booklist namespace. The validator also will recognize that this namespace is the namespace defined in book.xsd (i.e., the schema’s targetNamespace).

Thus the validator knows where to look for the structural rules for the elements and attributes used in book.xml.

**_Defining an Element in XML Schema_**
In XML Schema, the **element** tag (line 9) defines an element to be included in an XML document that conforms to the schema. In other words, element specifies the actual _ele- ments_ that can be used to mark up data. Line 9 defines the books element, which we use as the root element in book.xml (Fig. 14.11). Attributes **name** and **type** specify the element’s name and type, respectively. An element’s type indicates the data that the element may contain. Possible types include XML Schema-defined types (e.g., string, double) and user-defined types (e.g., BooksType, which is defined in lines 11–16). Figure 14.13 lists several of XML Schema’s many built-in types. For a complete list of built-in types, see Section 3 of the specification found at www.w3.org/TR/xmlschema-2.

| XML Schema type |       Description       |                                                                                                 Ranges or structures                                                                                                  |        Examples         |
| :-------------: | :---------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------: |
|     string      |   A character string    |                                                                                                                                                                                                                       |         "hello"         |
|     boolean     |      True or false      |                                                                                                      true, false                                                                                                      |          true           |
|     decimal     |    A decimal numeral    |                                                              i \* (10^n^), where i is an integer and n is an integer that is less than or equal to zero.                                                              |     5, -12, -45.78      |
|      float      | A floating-point number | m \* (2^e^), where m is an integer whose absolute value is less than 224 and e is an integer in the range -149 to 104. Plus three additional numbers: pos- itive infinity, negative infinity and not-a-number (NaN).  |  0, 12, -109.375, NaN   |
|     double      | A floating-point number | m \* (2^e^), where m is an integer whose absolute value is less than 253 and e is an integer in the range -1075 to 970. Plus three additional numbers: pos- itive infinity, negative infinity and not-a-number (NaN). |  0, 12, -109.375, NaN   |
|      long       |     A whole number      |                                                                                -9223372036854775808 to 9223372036854775807, inclusive.                                                                                | 1234567890, -1234567890 |
|       int       |     A whole number      |                                                                                         -2147483648 to 2147483647, inclusive.                                                                                         | 1234567890, -1234567890 |

**Fig. 14.13** | Some XML Schema types. (Part 1 of 2.)

| XML Schema type |                   Description                   |                                                   Ranges or structures                                                   |    Examples    |
| :-------------: | :---------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :------------: |
|      short      |                 A whole number                  |                                               -32768 to 32767, inclusive.                                                |    12, -345    |
|      date       |   A date consisting of a year, month and day    | yyyy-mm with an optional dd and an optional time zone, where yyyy is four digits long and mm and dd are two digits long. |   2005-05-10   |
|      time       | A time consisting of hours, minutes and seconds |                      hh:mm:ss with an optional time zone, where hh, mm and ss are two digits long.                       | 16:30:25-05:00 |

**Fig. 14.13** | Some XML Schema types. (Part 2 of 2.)

In this example, books is defined as an element of type deitel:BooksType (line 9). BooksType is a user-defined type (lines 11–16) in the http://www.deitel.com/booklist namespace and therefore must have the namespace prefix deitel. It is not an existing XML Schema type.

Two categories of type exist in XML Schema—**simple types** and **complex types**. Simple and complex types differ only in that simple types cannot contain attributes or child elements and complex types can.

A user-defined type that contains attributes or child elements must be defined as a complex type. Lines 11–16 use element **complexType** to define BooksType as a complex type that has a child element named book. The sequence element (lines 12–15) allows you to specify the sequential order in which child elements must appear. The element (lines 13–14) nested within the complexType element indicates that a BooksType element (e.g., books) can contain child elements named book of type deitel:SingleBookType (defined in lines 18–22). Attribute **minOccurs** (line 14), with value 1, specifies that elements of type BooksType must contain a minimum of one book element. Attribute **maxOccurs** (line 14), with value **unbounded**, specifies that elements of type BooksType may have any number of book child elements.

Lines 18–22 define the complex type SingleBookType. An element of this type con- tains a child element named title. Line 20 defines element title to be of simple type string. Recall that elements of a simple type cannot contain attributes or child elements. The schema end tag (</schema>, line 23) declares the end of the XML Schema document.

**_A Closer Look at Types in XML Schema_**
Every element in XML Schema has a type. Types include the built-in types provided by XML Schema (Fig. 14.13) or user-defined types (e.g., SingleBookType in Fig. 14.12).

Every simple type defines a **restriction** on an XML Schema-defined type or a restric- tion on a user-defined type. Restrictions limit the possible values that an element can hold.

Complex types are divided into two groups—those with **simple content** and those with **complex content**. Both can contain attributes, but only complex content can contain child elements. Complex types with simple content must extend or restrict some other existing type. Complex types with complex content do not have this limitation. We dem- onstrate complex types with each kind of content in the next example.

The schema document in Fig. 14.14 creates both simple types and complex types. The XML document in Fig. 14.15 (laptop.xml) follows the structure defined in Fig. 14.14 to describe parts of a laptop computer. A document such as laptop.xml that conforms to a schema is known as an **XML instance document**—the document is an instance (i.e., example) of the schema.

Line 5 declares the default namespace to be the standard XML Schema namespace— any elements without a prefix are assumed to be in the XML Schema namespace. Line 6 binds the namespace prefix computer to the namespace http://www.deitel.com/computer. Line 7 identifies this namespace as the targetNamespace—the namespace being defined by the current XML Schema document.

To design the XML elements for describing laptop computers, we first create a simple type in lines 9–13 using the **simpleType** element. We name this simpleType gigahertz

```bash
<?xml version = "1.0"?>
<!-- Fig. 14.14: computer.xsd -->
<!-- W3C XML Schema document -->

<schema xmlns = "http://www.w3.org/2001/XMLSchema"
xmlns:computer = "http://www.deitel.com/computer"
targetNamespace = "http://www.deitel.com/computer">

<simpleType name = "gigahertz">
<restriction base = "decimal">
<minInclusive value = "2.1"/>
</restriction>
</simpleType>

<complexType name = "CPU">
<simpleContent>
<extension base = "string">
<attribute name = "model" type = "string"/>
</extension>
</simpleContent>
</complexType>

<complexType name = "portable">
<all>
<element name = "processor" type = "computer:CPU"/>
<element name = "monitor" type = "int"/>
<element name = "CPUSpeed" type = "computer:gigahertz"/>
<element name = "RAM" type = "int"/>
</all>
<attribute name = "manufacturer" type = "string"/>
</complexType>

<element name = "laptop" type = "computer:portable"/>
</schema>
```

**Fig. 14.14** | XML Schema document defining simple and complex types.

because it will be used to describe the clock speed of the processor in gigahertz. Simple types are restrictions of a type typically called a **base type**. For this simpleType, line 10 declares the base type as decimal, and we restrict the value to be at least 2.1 by using the **minInclusive** element in line 11.

Next, we declare a complexType named CPU that has **simpleContent** (lines 16–20). Remember that a complex type with simple content can have attributes but not child ele- ments. Also recall that complex types with simple content must extend or restrict some XML Schema type or user-defined type. The **extension** element with attribute **base** (line 17) sets the base type to string. In this complexType, we extend the base type string with an attribute. The **attribute** element (line 18) gives the complexType an attribute of type string named model. Thus an element of type CPU must contain string text (because the base type is string) and may contain a model attribute that is also of type string.

Last, we define type portable, which is a complexType with complex content (lines 23–31). Such types are allowed to have child elements and attributes. The element **all** (lines 24–29) encloses elements that must each be included once in the corresponding XML instance document. These elements can be included in any order. This complex type holds four elements—processor, monitor, CPUSpeed and RAM. They are given types CPU, int, gigahertz and int, respectively. When using types CPU and gigahertz, we must include the namespace prefix computer, because these user-defined types are part of the computer namespace (http://www.deitel.com/computer)—the namespace defined in the current document (line 7). Also, portable contains an attribute defined in line 30. The attribute element indicates that elements of type portable contain an attribute of type string named manufacturer.

Line 33 declares the actual element that uses the three types defined in the schema. The element is called laptop and is of type portable. We must use the namespace prefix computer in front of portable.

We have now created an element named laptop that contains child elements processor, monitor, CPUSpeed and RAM, and an attribute manufacturer. Figure 14.15 uses the laptop element defined in the computer.xsd schema. Once again, we used an online XSD schema validator (www.xmlforasp.net/SchemaValidator.aspx) to ensure that this XML instance document adheres to the schema’s structural rules.

Line 5 declares namespace prefix computer. The laptop element requires this prefix because it is part of the http://www.deitel.com/computer namespace. Line 6 sets the

```bash
<?xml version = "1.0"?>

<!-- Fig. 14.15: laptop.xml -->
<!-- Laptop components marked up as XML -->
<computer:laptop xmlns:computer = "http://www.deitel.com/computer"
manufacturer = "IBM">

<processor model = "Centrino">Intel</processor>
<monitor>17</monitor>
<CPUSpeed>2.4</CPUSpeed>
<RAM>256</RAM>
</computer:laptop>
```

**Fig. 14.15** | XML document using the laptop element defined in computer.xsd.

laptop’s manufacturer attribute, and lines 8–11 use the elements defined in the schema to describe the laptop’s characteristics.

This section introduced W3C XML Schema documents for defining the structure of XML documents, and we validated XML instance documents against schemas using an online XSD schema validator. Section 14.7 discusses several XML vocabularies and dem- onstrates the MathML vocabulary. Section 14.10 demonstrates the RSS vocabulary.

## XML Vocabularies

XML allows authors to create their own tags to describe data precisely. People and orga- nizations in various fields of study have created many different kinds of XML for structur- ing data. Some of these markup languages are: **MathML (Mathematical Markup Language)**, **Scalable Vector Graphics (SVG)**, **Wireless Markup Language (WML)**, **Ex- tensible Business Reporting Language (XBRL)**, **Extensible User Interface Language (XUL)** and **Product Data Markup Language (PDML)**. Two other examples of XML vo- cabularies are W3C XML Schema and the Extensible Stylesheet Language (XSL), which we discuss in Section 14.8. The following subsections describe MathML and other custom markup languages.

### MathML™

Until recently, computers typically required specialized software packages such as TeX and LaTeX for displaying complex mathematical expressions. This section introduces MathML, which the W3C developed for describing mathematical notations and expres- sions. One application that can parse, render and edit MathML is the W3C’s **Amaya**™ browser/editor, which can be downloaded from

www.w3.org/Amaya/User/BinDist.html

This page contains download links for several platforms. Amaya documentation and in- stallation notes also are available at the W3C website. Firefox also can render MathML, but it requires additional fonts. Instructions for downloading and installing these fonts are available at www.mozilla.org/projects/mathml/fonts/. You can download a plug-in (www.dessci.com/en/products/mathplayer/) to render MathML in Internet Explorer .

MathML markup describes mathematical expressions for display. MathML is divided into two types of markup—**content** markup and **presentation** markup. Content markup provides tags that embody mathematical concepts. Content MathML allows programmers to write mathematical notation specific to different areas of mathematics. For instance, the multiplication symbol has one meaning in set theory and another meaning in linear algebra. Content MathML distinguishes between different uses of the same symbol. Pro- grammers can take content MathML markup, discern mathematical context and evaluate the marked-up mathematical operations. Presentation MathML is directed toward for- matting and displaying mathematical notation. We focus on Presentation MathML in the MathML examples.

**_Simple Equation in MathML_**
Figure 14.16 uses MathML to mark up a simple expression. For this example, we show the expression rendered in Firefox.

```bash
<?xml version="1.0" encoding="iso-8859-1"?>
<!DOCTYPE math PUBLIC "-//W3C//DTD MathML 2.0//EN"
"http://www.w3.org/TR/MathML2/dtd/mathml2.dtd">

<!-- Fig. 14.16: mathml1.mml -->
<!-- MathML equation. -->
<math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>2</mn>
<mo>+</mo>
<mn>3</mn>
<mo>=</mo>
<mn>5</mn>
</math>
```

**Fig. 14.16** | Expression marked up with MathML and displayed in the Firefox browser.

By convention, MathML files end with the .mml filename extension. A MathML doc- ument’s root node is the math element, and its default namespace is http://www.w3.org/ 1998/Math/MathML (line 7). The **mn element** (line 8) marks up a number. The **mo element** (line 9) marks up an operator (e.g., +). Using this markup, we define the expression 2 + 3 = 5, which any MathML capable browser can display.

**_Algebraic Equation in MathML_**
Let’s consider using MathML to mark up an algebraic equation containing exponents and arithmetic operators (Fig. 14.17). For this example, we again show the expression ren- dered in Firefox.

```bash
<?xml version="1.0" encoding="iso-8859-1"?>
<!DOCTYPE math PUBLIC "-//W3C//DTD MathML 2.0//EN"
"http://www.w3.org/TR/MathML2/dtd/mathml2.dtd">

<!-- Fig. 14.17: mathml2.html -->
<!-- MathML algebraic equation. -->
<math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>3</mn>
<mo>&InvisibleTimes;</mo>
<msup>
<mi>x</mi>
<mn>2</mn>
</msup>
```

**Fig. 14.17** | Algebraic equation marked up with MathML and displayed in the Firefox browser. (Part 1 of 2.)

```bash
<mo>+</mo>
<mn>x</mn>
<mo>&minus;</mo>
<mfrac>
<mn>2</mn>
<mi>x</mi>
</mfrac>
<mo>=</mo>
<mn>0</mn>
</math>
```

**Fig. 14.17** | Algebraic equation marked up with MathML and displayed in the Firefox browser. (Part 2 of 2.)

Line 9 uses **entity reference &InvisibleTimes;** to indicate a multiplication operation without explicit **symbolic representation** (i.e., the multiplication symbol does not appear between the 3 and x). For exponentiation, lines 10–13 use the msup element, which rep- resents a superscript. This **msup element** has two children—the expression to be super- scripted (i.e., the base) and the superscript (i.e., the exponent). Correspondingly, the msub element represents a subscript. To display variables such as x, line 11 uses **identifier ele- ment mi**.

To display a fraction, lines 17–20 uses the **mfrac element**. Lines 18–19 specify the numerator and the denominator for the fraction. If either the numerator or the denomi- nator contains more than one element, it must appear in an mrow element.

**_Calculus Expression in MathML_**
Figure 14.18 marks up a calculus expression that contains an integral symbol and a square- root symbol.

```bash
<?xml version="1.0" encoding="iso-8859-1"?>
<!DOCTYPE math PUBLIC "-//W3C//DTD MathML 2.0//EN"
"http://www.w3.org/TR/MathML2/dtd/mathml2.dtd">

<!-- Fig. 14.18 mathml3.html -->
<!-- Calculus example using MathML -->
<math xmlns="http://www.w3.org/1998/Math/MathML">
<mrow>
<msubsup>
<mo>&int;</mo>
```

**Fig. 14.18** | Calculus expression marked up with MathML and displayed in the Amaya browser. [Courtesy of World Wide Web Consortium (W3C).] (Part 1 of 2.)

```bash
<mn>0</mn>
<mrow>
<mn>1</mn>
<mo>&minus;</mo>
<mi>y</mi>
</mrow>
</msubsup>
<msqrt>
<mn>4</mn>
<mo>&InvisibleTimes;</mo>
<msup>
<mi>x</mi>
<mn>2</mn>
</msup>
<mo>+</mo>
<mi>y</mi>
</msqrt>
<mo>&delta;</mo>
<mi>x</mi>
</mrow>
</math>
```

**Fig. 14.18** | Calculus expression marked up with MathML and displayed in the Amaya browser. \[Courtesy of World Wide Web Consortium (W3C).\] (Part 2 of 2.)

Lines 8–30 group the entire expression in an **mrow element**, which is used to group elements that are positioned horizontally in an expression. The entity reference **&int;** (line 10) represents the integral symbol, while the **msubsup element** (lines 9–17) specifies the subscript and superscript a base expression (e.g., the integral symbol). Element mo marks up the integral operator. The msubsup element requires three child elements—an operator (e.g., the integral entity, line 10), the subscript expression (line 11) and the superscript expression (lines 12–16). Element mn (line 11) marks up the number (i.e., 0) that represents the subscript. Element mrow (lines 12–16) marks up the superscript expression (i.e., 1-_y_).

Element **msqrt** (lines 18–27) represents a square-root expression. Line 28 introduces entity reference &delta; for representing a lowercase delta symbol. Delta is an operator, so line 28 places this entity in element mo. To see other operations and symbols in MathML, visit www.w3.org/Math.

### Other Markup Languages

Literally hundreds of markup languages derive from XML. Every day developers find new uses for XML. Figure 14.20 summarizes a few of these markup languages. The website

www.service-architecture.com/xml/articles/index.html

provides a nice list of common XML vocabularies and descriptions.

|                    Markup language                    |                                                                                                                                                                                       Description                                                                                                                                                                                       |
| :---------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|            Chemical Markup Language (CML)             | Chemical Markup Language (CML) is an XML vocabulary for representing molecular and chemical information. Many previ- ous methods for storing this type of information (e.g., special file types) inhibited document reuse. CML takes advantage of XML’s portability to enable document authors to use and reuse molecular information without corrupting important data in the process. |
|                       VoiceXML™                       |                   The VoiceXML Forum founded by AT&T, IBM, Lucent and Motorola developed VoiceXML. It provides interactive voice communication between humans and computers through a tele- phone, PDA (personal digital assistant) or desktop computer. IBM’s VoiceXML SDK can process VoiceXML documents. Visit www.voicexml.org for more information on VoiceXML.                    |
|  Synchronous Multimedia Integration Language (SMIL™)  |                                                                                                SMIL is an XML vocabulary for multimedia presentations. The W3C was the primary developer of SMIL, with contributions from some companies. Visit www.w3.org/AudioVideo for more on SMIL.                                                                                                 |
| Research Information Exchange Markup Language (RIXML) |                                                                                                                            RIXML, developed by a consortium of brokerage firms, marks up investment data. Visit www.rixml.org for more information on RIXML.                                                                                                                            |
|            Geography Markup Language (GML)            |                                                                                                                         OpenGIS developed the Geography Markup Language to describe geographic information. Visit www.opengis.org for more information on GML.                                                                                                                          |
|       Extensible User Interface Language (XUL)        |                                                                                                                     The Mozilla Project created the Extensible User Interface Lan- guage for describing graphical user interfaces in a platform-inde- pendent way.                                                                                                                      |

**Fig. 14.19** | Various markup languages derived from XML.

## Extensible Stylesheet Language and XSL Transformations

**Extensible Stylesheet Language (XSL)** documents specify how programs are to render XML document data. XSL is a group of three technologies**—XSL-FO (XSL Formatting Objects)**, **XPath (XML Path Language)** and XSLT (XSL Transformations) . XSL-FO is a vocabulary for specifying formatting, and XPath is a string-based language of expressions used by XML and many of its related technologies for effectively and efficiently locating structures and data (such as specific elements and attributes) in XML documents.

The third portion of XSL—XSL Transformations (XSLT)—is a technology for trans- forming XML documents into other documents—i.e., transforming the structure of the XML document data to another structure. XSLT provides elements that define rules for transforming one XML document to produce a different XML document. This is useful when you want to use data in multiple applications or on multiple platforms, each of which may be designed to work with documents written in a particular vocabulary. For example, XSLT allows you to convert a simple XML document to an XHTML document that presents the XML document’s data (or a subset of the data) formatted for display in a web browser.

Transforming an XML document using XSLT involves two tree structures—the **source tree** (i.e., the XML document to be transformed) and the **result tree** (i.e., the XML document to be created). XPath is used to locate parts of the source-tree document that match **templates** defined in an **XSL style sheet**. When a match occurs (i.e., a node matches a template), the matching template executes and adds its result to the result tree. When there are no more matches, XSLT has transformed the source tree into the result tree. The XSLT does not analyze every node of the source tree; it selectively navigates the source tree using XPath’s select and match attributes. For XSLT to function, the source tree must be properly structured. Schemas, DTDs and validating parsers can validate document structure before using XPath and XSLTs.

**_A Simple XSL Example_**
Figure 14.20 lists an XML document that describes various sports. The output shows the result of the transformation (specified in the XSLT template of Fig. 14.21) rendered by Internet Explorer.

To perform transformations, an XSLT processor is required. Popular XSLT proces- sors include Microsoft’s MSXML and the Apache Software Foundation’s **Xalan 2** (xml.apache.org). The XML document in Fig. 14.20 is transformed into an XHTML document by MSXML when the document is loaded in Internet Explorer. MSXML is both an XML parser and an XSLT processor. Firefox also includes an XSLT processor.

```bash
<?xml version = "1.0"?>
<?xml-stylesheet type = "text/xsl" href = "sports.xsl"?>

<!-- Fig. 14.20: sports.xml -->
<!-- Sports Database -->

<sports>
<game id = "783">
<name>Cricket</name>

<paragraph>
More popular among commonwealth nations.
</paragraph>
</game>
```

**Fig. 14.20** | XML document that describes various sports. (Part 1 of 2.)

```bash

<game id = "239">
<name>Baseball</name>

<paragraph>
More popular in America.
</paragraph>
</game>

<game id = "418">
<name>Soccer (Futbol)</name>

<paragraph>
Most popular sport in the world.
</paragraph>
</game>
</sports>
```

**Fig. 14.20** | XML document that describes various sports. (Part 2 of 2.)

Line 2 (Fig. 14.20) is a **processing instruction (PI)** that references the XSL style sheet sports.xsl (Fig. 14.21). A processing instruction is embedded in an XML document and provides application-specific information to whichever XML processor the application uses. In this particular case, the processing instruction specifies the location of an XSLT document with which to transform the XML document. The **<?** and **?>** (line 2, Fig. 14.20) delimit a processing instruction, which consists of a **PI target** (e.g., xml-

stylesheet) and a **PI value** (e.g., type = "text/xsl" href = "sports.xsl"). The PI value’s type attribute specifies that sports.xsl is a text/xsl file (i.e., a text file con- taining XSL content). The href attribute specifies the name and location of the style sheet to apply—in this case, sports.xsl in the current directory.

**Software Engineering Observation 14.5**

> _XSL enables document authors to separate data presentation (specified in XSL documents) from data description (specified in XML documents)._ 14.5

**Common Programming Error 14.10**

> _You will sometimes see the XML processing instruction <!?xml-stylesheet?> written as <!?xml:stylesheet?> with a colon rather than a dash. The version with a colon results in an XML parsing error in Firefox._ 14.10

Figure 14.21 shows the XSL document for transforming the structured data of the XML document of Fig. 14.20 into an XHTML document for presentation. By conven- tion, XSL documents have the filename extension **.xsl**.

Lines 6–7 begin the XSL style sheet with the **stylesheet** start tag. Attribute **version** specifies the XSLT version to which this document conforms. Line 7 binds namespace prefix **xsl** to the W3C’s XSLT URI (i.e., http://www.w3.org/1999/XSL/Transform).

```bash
<?xml version = "1.0"?>
<!-- Fig. 14.21: sports.xsl -->
<!-- A simple XSLT transformation -->

<!-- reference XSL style sheet URI -->
<xsl-stylesheet version = "1.0"
xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

<xsl:output method = "html" omit-xml-declaration = "no"
doctype-system =
"http://www.w3c.org/TR/xhtml1/DTD/xhtml1-strict.dtd"
doctype-public = "-//W3C//DTD XHTML 1.0 Strict//EN"/>

<xsl:template match = "/"> <!-- match root element -->

<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Sports</title>
</head>

<body>
<table border = "1" bgcolor = "wheat">
<thead>
<tr>
<th>ID</th>
<th>Sport</th>
<th>Information</th>
</tr>
</thead>

<!-- insert each name and paragraph element value -->
<!-- into a table row. -->
<xsl:for-each select = "/sports/game">
<tr>
<td><xsl:value-of select = "@id"/></td>
<td><xsl:value-of select = "name"/></td>
<td><xsl:value-of select = "paragraph"/></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>

</xsl:template>
</xsl:stylesheet>
```

**Fig. 14.21** | XSLT that creates elements and attributes in an XHTML document.

Lines 9–12 use element **xsl:output** to write an XHTML document type declaration (DOCTYPE) to the result tree (i.e., the XML document to be created). The DOCTYPE identi- fies XHTML as the type of the resulting document. Attribute method is assigned "html", which indicates that HTML is being output to the result tree. Attribute **omit-xml-dec-** **laration** specifies whether the transformation should write the XML declaration to the result tree. In this case, we do not want to omit the XML declaration, so we assign to this attribute the value "no". Attributes doctype-system and doctype-public write the DOCTYPE DTD information to the result tree.

XSLT uses **templates** (i.e., **xsl:template** elements) to describe how to transform particular nodes from the source tree to the result tree. A template is applied to nodes that are specified in the required match attribute. Line 14 uses the **match** attribute to select the **doc- ument root** (i.e., the conceptual part of the document that contains the root element and everything below it) of the XML source document (i.e., sports.xml). The XPath char- acter **/** (a forward slash) always selects the document root. Recall that XPath is a string- based language used to locate parts of an XML document easily. In XPath, a leading for- ward slash specifies that we are using **absolute addressing** (i.e., we are starting from the root and defining paths down the source tree). In the XML document of Fig. 14.20, the child nodes of the document root are the two processing instruction nodes (lines 1–2), the two comment nodes (lines 4–5) and the sports element node (lines 7–31). The template in Fig. 14.21, line 14, matches a node (i.e., the root node), so the contents of the template are now added to the result tree.

The MSXML processor writes the XHTML in lines 16–29 (Fig. 14.21) to the result tree exactly as it appears in the XSL document. Now the result tree consists of the DOCTYPE definition and the XHTML code from lines 16–29. Lines 33–39 use element **xsl:for- each** to iterate through the source XML document, searching for game elements. Attribute **select** is an XPath expression that specifies the nodes (called the **node set**) on which the xsl:for-each operates. Again, the first forward slash means that we are using absolute addressing. The forward slash between sports and game indicates that game is a child node of sports. Thus, the xsl:for-each finds game nodes that are children of the sports node. The XML document sports.xml contains only one sports node, which is also the docu- ment root node. After finding the elements that match the selection criteria, the xsl:for- each processes each element with the code in lines 34–38 (these lines produce one row in a table each time they execute) and places the result of lines 34–38 in the result tree.

Line 35 uses element **value-of** to retrieve attribute id’s value and place it in a td ele- ment in the result tree. The XPath symbol **@** specifies that id is an attribute node of the context node game. Lines 36–37 place the name and paragraph element values in td ele- ments and insert them in the result tree. When an XPath expression has no beginning for- ward slash, the expression uses **relative addressing**. Omitting the beginning forward slash tells the xsl:value-of select statements to search for name and paragraph elements that are children of the context node, not the root node. Due to the last XPath expression selec- tion, the current context node is game, which indeed has an id attribute, a name child ele- ment and a paragraph child element.

**_Using XSLT to Sort and Format Data_**
Figure 14.22 presents an XML document (sorting.xml) that marks up information about a book. Note that several elements of the markup describing the book appear out of

```bash
<?xml version = "1.0"?>
<?xml-stylesheet type = "text/xsl" href = "sorting.xsl"?>

<!-- Fig. 14.22: sorting.xml -->
<!-- XML document containing book information -->
<book isbn = "999-99999-9-X">
<title>Deitel&apos;s XML Primer</title>

<author>
<firstName>Jane</firstName>
<lastName>Blue</lastName>
</author>

<chapters>
<frontMatter>
<preface pages = "2" />
<contents pages = "5" />
<illustrations pages = "4" />
</frontMatter>

<chapter number = "3" pages = "44">Advanced XML</chapter>
<chapter number = "2" pages = "35">Intermediate XML</chapter>
<appendix number = "B" pages = "26">Parsers and Tools</appendix>
<appendix number = "A" pages = "7">Entities</appendix>
<chapter number = "1" pages = "28">XML Fundamentals</chapter>
</chapters>

<media type = "CD" />
</book>
```

**Fig. 14.22** | XML document containing book information.

order (e.g., the element describing Chapter 3 appears before the element describing Chap- ter 2). We arranged them this way purposely to demonstrate that the XSL style sheet ref- erenced in line 2 (sorting.xsl) can sort the XML file’s data for presentation purposes.

Figure 14.23 presents an XSL document (sorting.xsl) for transforming sorting.xml (Fig. 14.22) to XHTML. Recall that an XSL document navigates a source tree and builds a result tree. In this example, the source tree is XML, and the output tree is XHTML. Line 14 of Fig. 14.23 matches the root element of the document in Fig. 14.22. Line 15 outputs an html start tag to the result tree. In line 16, the <xsl:apply- templates/> element specifies that the XSLT processor is to apply the xsl:templates defined in this XSL document to the current node’s (i.e., the document root’s) children. The content from the applied templates is output in the html element that ends at line 17.

Lines 21–84 specify a template that matches element book. The template indicates how to format the information contained in book elements of sorting.xml (Fig. 14.22) as XHTML.

Lines 23–24 create the title for the XHTML document. We use the book’s ISBN (from attribute isbn) and the contents of element title to create the string that appears in the browser window’s title bar (**ISBN 999-99999-9-X - Deitel’s XML Primer**).

Line 28 creates a header element that contains the book’s title. Lines 29–31 create a header element that contains the book’s author. Because the context node (i.e., the current

```bash
<?xml version = "1.0"?>

<!-- Fig. 14.23: sorting.xsl -->
<!-- Transformation of book information into XHTML -->
<xsl:stylesheet version = "1.0"
xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

<!-- write XML declaration and DOCTYPE DTD information -->
<xsl:output method = "html" omit-xml-declaration = "no"
doctype-system = "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"
doctype-public = "-//W3C//DTD XHTML 1.1//EN"/>

<!-- match document root -->
<xsl:template match = "/">
<html xmlns = "http://www.w3.org/1999/xhtml">
<xsl:apply-templates/>
</html>
</xsl:template>

<!-- match book -->
<xsl:template match = "book">
<head>
<title>ISBN <xsl:value-of select = "@isbn"/> -
<xsl:value-of select = "title"/></title>
</head>

<body>
<h1 style = "color: blue"><xsl:value-of select = "title"/></h1>
<h2 style = "color: blue">by
<xsl:value-of select = "author/lastName"/>,
<xsl:value-of select = "author/firstName"/></h2>

<table style = "border-style: groove; background-color: wheat">

<xsl:for-each select = "chapters/frontMatter/\*">
<tr>
<td style = "text-align: right">
<xsl:value-of select = "name()"/>
</td>

<td>
( <xsl:value-of select = "@pages"/> pages )
</td>
</tr>
</xsl:for-each>

<xsl:for-each select = "chapters/chapter">
<xsl:sort select = "@number" data-type = "number"
order = "ascending"/>
<tr>
<td style = "text-align: right">
Chapter <xsl:value-of select = "@number"/>
</td>
```

**Fig. 14.23** | XSL document that transforms sorting.xml into XHTML. (Part 1 of 2.)

```bash

<td>
<xsl:value-of select = "text()"/>
( <xsl:value-of select = "@pages"/> pages )
</td>
</tr>
</xsl:for-each>

<xsl:for-each select = "chapters/appendix">
<xsl:sort select = "@number" data-type = "text"
order = "ascending"/>
<tr>
<td style = "text-align: right">
Appendix <xsl:value-of select = "@number"/>
</td>

<td>
<xsl:value-of select = "text()"/>
( <xsl:value-of select = "@pages"/> pages )
</td>
</tr>
</xsl:for-each>
</table>

<br /><p style = "color: blue">Pages:
<xsl:variable name = "pagecount"
select = "sum(chapters//\*/@pages)"/>
<xsl:value-of select = "$pagecount"/>
<br />Media Type: <xsl:value-of select = "media/@type"/></p>
</body>
</xsl:template>
</xsl:stylesheet>
```

**Fig. 14.23** | XSL document that transforms sorting.xml into XHTML. (Part 2 of 2.)

node being processed) is book, the XPath expression author/lastName selects the author’s last name, and the expression author/firstName selects the author’s first name.

Line 35 selects each element (indicated by an asterisk) that is a child of element frontMatter. Line 38 calls **node-set function name** to retrieve the current node’s element name (e.g., preface). The current node is the context node specified in the xsl:for-each (line 35). Line 42 retrieves the value of the pages attribute of the current node.

Line 47 selects each chapter element. Lines 48–49 use element **xsl:sort** to sort chapters by number in ascending order. Attribute **select** selects the value of attribute number in context node chapter. Attribute **data-type**, with value "number", specifies a numeric sort, and attribute **order**, with value "ascending", specifies ascending order. Attribute data-type also accepts the value "text" (line 63), and attribute order also accepts the value "descending". Line 56 uses **node-set function text** to obtain the text between the chapter start and end tags (i.e., the name of the chapter). Line 57 retrieves the value of the pages attribute of the current node. Lines 62–75 perform similar tasks for each appendix.

Lines 79–80 use an **XSL variable** to store the value of the book’s total page count and output the page count to the result tree. Attribute **name** specifies the variable’s name (i.e., pagecount), and attribute select assigns a value to the variable. Function **sum** (line 80) totals the values for all page attribute values. The two slashes between chapters and \*

indicate a **recursive descent**—the MSXML processor will search for elements that contain an attribute named pages in all descendant nodes of chapters. The XPath expression

//\*

selects all the nodes in an XML document. Line 81 retrieves the value of the newly created XSL variable pagecount by placing a dollar sign in front of its name.

**_Summary of XSL Style-Sheet Elements_**
This section’s examples used several predefined XSL elements to perform various opera- tions. Figure 14.24 lists these elements and several other commonly used XSL elements. For more information on these elements and XSL in general, see www.w3.org/Style/XSL.

|                   Element                    |                                                                                      Description                                                                                      |
| :------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|            <xsl:apply-templates>             |                                                    Applies the templates of the XSL document to the children of the current node.                                                     |
| <xsl:apply-templates match = "_expression_"> | Applies the templates of the XSL document to the children of _expression_. The value of the attribute match (i.e., _expression_) must be an XPath expression that specifies elements. |
|                <xsl:template>                |                                                               Contains rules to apply when a specified node is matched.                                                               |
|    <xsl:value-of select = "_expression_">    |                Selects the value of an XML element and adds it to the output tree of the transformation. The required select attribute con- tains an XPath expression.                |

**Fig. 14.24** | XSL style-sheet elements. (Part 1 of 2.)

|                Element                 |                                                                                                                 Description                                                                                                                  |
| :------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <xsl:for-each select = "_expression_"> |                                                                         Applies a template to every node selected by the XPath speci- fied by the select attribute.                                                                          |
|   <xsl:sort select = "_expression_">   |                Used as a child element of an <xsl:apply-templates> or <xsl:for-each> element. Sorts the nodes selected by the <xsl:apply-template> or <xsl:for-each> element so that the nodes are processed in sorted order.                |
|              <xsl:output>              | Has various attributes to define the format (e.g., XML, XHTML), version (e.g., 1.0, 2.0), document type and media type of the output document. This tag is a top-level element— it can be used only as a child element of an xml:stylesheet. |
|               <xsl:copy>               |                                                                                                  Adds the current node to the output tree.                                                                                                   |

**Fig. 14.24** | XSL style-sheet elements. (Part 2 of 2.)

This section introduced Extensible Stylesheet Language (XSL) and showed how to create XSL transformations to convert XML documents from one format to another. We showed how to transform XML documents to XHTML documents for display in a web browser. Recall that these transformations are performed by MSXML, Internet Explorer’s built-in XML parser and XSLT processor. In most business applications, XML documents are transferred between business partners and are transformed to other XML vocabularies programmatically. Section 14.9 discusses the XML Document Object Model (DOM) and demonstrates how to manupulate the DOM of an XML document using JavaScript.

## Document Object Model (DOM)

Although an XML document is a text file, retrieving data from the document using tradi- tional sequential file processing techniques is neither practical nor efficient, especially for adding and removing elements dynamically.

Upon successfully parsing a document, some XML parsers store document data as tree structures in memory. Figure 14.25 illustrates the tree structure for the root element of the document article.xml (Fig. 14.2). This hierarchical tree structure is called a **Document Object Model** (**DOM**) **tree**, and an XML parser that creates this type of structure is known as a **DOM parser**. Each element name (e.g., article, date, firstName) is repre- sented by a node. A node that contains other nodes (called **child nodes** or children) is called a **parent node** (e.g., author). A parent node can have many children, but a child node can have only one parent node. Nodes that are peers (e.g., firstName and lastName) are called **sibling nodes**. A node’s **descendant nodes** include its children, its children’s chil- dren and so on. A node’s **ancestor nodes** include its parent, its parent’s parent and so on. Many of the XML DOM capabilities you’ll see in this section are similar or identical to those of the XHTML DOM you learned in Chapter 12.

The DOM tree has a single **root node**, which contains all the other nodes in the doc- ument. For example, the root node of the DOM tree that represents article.xml con- tains a node for the XML declaration (line 1), two nodes for the comments (lines 3–4) and a node for the XML document’s root element article (line 5).

**Fig. 14.25** | Tree structure for the document article.xml of Fig. 14.2.

To introduce document manipulation with the XML Document Object Model, we provide a scripting example (Fig. 14.26) that uses JavaScript and XML. This example loads the XML document article.xml (Fig. 14.2) and uses the XML DOM API to dis- play the document’s element names and values. The example also provides buttons that enable you to navigate the DOM structure. As you click each button, an appropriate part of the document is highlighted. All of this is done in a manner that enables the example to execute in both Internet Explorer 7 and Firefox 2. Figure 14.26 lists the JavaScript code that manipulates this XML document and displays its content in an XHTML page.

**_Overview of the body Element_**
Lines 203–217 create the XHTML document’s body. When the body loads, its onload event calls our JavaScript function loadXMLDocument to load and display the contents of article.xml in the div at line 216 (outputDiv). Lines 204–215 define a form consisting of five buttons. When each button is pressed, it invokes one of our JavaScript functions to navigate article.xml’s DOM structure.

**_Global Script Variables_**
Lines 16–21 in the script element (lines 14–201) declare several variables used through- out the script. Variable doc references a DOM object representation of article.xml. Variable outputHTML stores the markup that will be placed in outputDiv. Variable id Counter is used to track the unique id attributes that we assign to each element in the out- putHTML markup. These ids will be used to dynamically highlight parts of the document when the user clicks the buttons in the form. Variable depth determines the indentation level for the content in article.xml. We use this to structure the output using the nesting of the elements in article.xml. Variables current and previous track the current and previous nodes in article.xml’s DOM structure as the user navigates it.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 14.26: XMLDOMTraversal.html -->
<!-- Traversing an XML document using the XML DOM. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Traversing an XML document using the XML DOM</title>
<style type = "text/css">
.highlighted { background-color: yellow }
#outputDiv { font: 10pt "Lucida Console", monospace; }
</style>
<script type="text/javascript">
<!--
var doc; // variable to reference the XML document
var outputHTML = ""; // stores text to output in outputDiv
var idCounter = 1; // used to create div IDs
var depth = -1; // tree depth is -1 to start
var current = null; // represents the current node for traversals
var previous = null; // represent prior node in traversals

// load XML document based on whether the browser is IE7 or Firefox 2 .
function loadXMLDocument( url )
{
if ( window.ActiveXObject ) // IE7
{
// create IE7-specific XML document object
doc = new ActiveXObject( "Msxml2.DOMDocument.6.0" );
doc.async = false; // specifies synchronous loading of XML doc
doc.load( url ); // load the XML document specified by url
buildHTML( doc.childNodes ); // display the nodes
displayDoc();
} // end if
else if ( document.implementation &&
document.implementation.createDocument ) // other browsers
{
// create XML document object
doc = document.implementation.createDocument( "", "", null );
doc.load( url ); // load the XML document specified by url
doc.onload = function() // function to execute when doc loads
{
buildHTML( doc.childNodes ); // called by XML doc onload event
displayDoc(); // display the HTML
} // end XML document's onload event handler
} // end else
else // not supported
alert( 'This script is not supported by your browser' );
} // end function loadXMLDocument

// traverse xmlDocument and build XHTML representation of its content
function buildHTML( childList )
{
```

**Fig. 14.26** | Traversing an XML document using the XML DOM. (Part 1 of 8.)

```bash
++depth; // increase tab depth

// display each node's content
for ( var i = 0; i < childList.length; i++ )
{
switch ( childList[ i ].nodeType )
{
case 1: // Node.ELEMENT_NODE; value used for portability
outputHTML += "<div id=\\"id" + idCounter + "\">";
spaceOutput( depth ); // insert spaces
outputHTML += childList[ i ].nodeName ; // show node's name
++idCounter; // increment the id counter

// if current node has children, call buildHTML recursively
if ( childList[ i ].childNodes.length != 0 )
buildHTML( childList[ i ].childNodes );

outputHTML += "</div>";
break;
case 3: // Node.TEXT_NODE; value used for portability
case 8: // Node.COMMENT_NODE; value used for portability
// if nodeValue is not 3 or 6 spaces (Firefox issue),
// include nodeValue in HTML
if ( childList[ i ].nodeValue.indexOf( " " ) == -1 &&
childList[ i ].nodeValue.indexOf( " " ) == -1 )
{
outputHTML += "<div id=\"id" + idCounter + "\">";
spaceOutput( depth ); // insert spaces
outputHTML += childList[ i ].nodeValue + "</div>";
++idCounter; // increment the id counter
} // end if
} // end switch
} // end for

\--depth; // decrease tab depth
} // end function buildHTML

// display the XML document and highlight the first child
function displayDoc()
{
document.getElementById( "outputDiv" ).innerHTML = outputHTML;
current = document.getElementById( 'id1' );
setCurrentNodeStyle( current.id, true );
} // end function displayDoc

// insert non-breaking spaces for indentation
function spaceOutput( number )
{
for ( var i = 0; i < number; i++ )
{
outputHTML += "&nbsp;&nbsp;&nbsp;";
} // end for
} // end function spaceOutput
```

**Fig. 14.26** | Traversing an XML document using the XML DOM. (Part 2 of 8.)

```bash
// highlight first child of current node
function processFirstChild() {
  if (
    current.childNodes.length == 1 && // only one child
    current.firstChild.nodeType == 3
  ) {
    // and it's a text node
    alert("There is no child node");
  } // end if
  else if (current.childNodes.length > 1) {
    previous = current; // save currently highlighted node

    if (current.firstChild.nodeType != 3)
      // if not text node
      current = current.firstChild; // get new current node
    // if text node, use firstChild's nextSibling instead
    else current = current.firstChild.nextSibling; // get first sibling

    setCurrentNodeStyle(previous.id, false); // remove highlight
    setCurrentNodeStyle(current.id, true); // add highlight
  } // end if
  else alert("There is no child node");
} // end function processFirstChild

// highlight next sibling of current node
function processNextSibling() {
  if (current.id != "outputDiv" && current.nextSibling) {
    previous = current; // save currently highlighted node
    current = current.nextSibling; // get new current node
    setCurrentNodeStyle(previous.id, false); // remove highlight
    setCurrentNodeStyle(current.id, true); // add highlight
  } // end if
  else alert("There is no next sibling");
} // end function processNextSibling

// highlight previous sibling of current node if it is not a text node
function processPreviousSibling() {
  if (
    current.id != "outputDiv" &&
    current.previousSibling &&
    current.previousSibling.nodeType != 3
  ) {
    previous = current; // save currently highlighted node
    current = current.previousSibling; // get new current node
    setCurrentNodeStyle(previous.id, false); // remove highlight
    setCurrentNodeStyle(current.id, true); // add highlight
  } // end if
  else alert("There is no previous sibling");
} // end function processPreviousSibling
```

**Fig. 14.26** | Traversing an XML document using the XML DOM. (Part 3 of 8.)

```bash

// highlight last child of current node
function processLastChild()
{
if ( current.childNodes.length == 1 &&
current.lastChild.nodeType == 3 )
{
alert( "There is no child node" );
} // end if
else if ( current.childNodes.length != 0 )
{
previous = current; // save currently highlighted node
current = current.lastChild; // get new current node
setCurrentNodeStyle( previous.id, false ); // remove highlight
setCurrentNodeStyle( current.id, true ); // add highlight
} // end if
else
alert( "There is no child node" );
} // end function processLastChild

// highlight parent of current node
function processParentNode()
{
if ( current.parentNode.id != "body" )
{
previous = current; // save currently highlighted node
current = current.parentNode; // get new current node
setCurrentNodeStyle( previous.id, false ); // remove highlight
setCurrentNodeStyle( current.id, true ); // add highlight
} // end if
else
alert( "There is no parent node" );
} // end function processParentNode

// set style of node with specified id
function setCurrentNodeStyle( id, highlight )
{
document.getElementById( id ).className =
( highlight ? "highlighted" : "" );
} // end function setCurrentNodeStyle
// -->
</script>
</head>
<body id = "body" onload = "loadXMLDocument( 'article.xml' );">
<form action = "" onsubmit = "return false;">
<input type = "submit" value = "firstChild"
onclick = "processFirstChild()"/>
<input type = "submit" value = "nextSibling"
onclick = "processNextSibling()"/>
<input type = "submit" value = "previousSibling"
onclick = "processPreviousSibling()"/>
<input type = "submit" value = "lastChild"
onclick = "processLastChild()"/>
```

**Fig. 14.26** | Traversing an XML document using the XML DOM. (Part 4 of 8.)

```bash
<input type = "submit" value = "parentNode"
onclick = "processParentNode()"/>
</form><br/>
<div id = "outputDiv"></div>
</body>
</html>
```

**Fig. 14.26** | Traversing an XML document using the XML DOM. (Part 5 of 8.)

**Fig. 14.26** | Traversing an XML document using the XML DOM. (Part 6 of 8.)

**Fig. 14.26** | Traversing an XML document using the XML DOM. (Part 7 of 8.)

**Fig. 14.26** | Traversing an XML document using the XML DOM. (Part 8 of 8.)

**_Function loadXMLDocument_**
Function loadXMLDocument (lines 24–49) receives the URL of an XML document to load, then loads the document based on whether the browser is Internet Explorer 7 (26–34) or Firefox 2 (lines 35–46)—the code for Firefox 2 works in several other browsers as well. Line 26 determines whether window.**ActiveXObject** exists. If so, this indicates that the browser is Internet Explorer. Line 29 creates a Microsoft ActiveXObject that loads Mi- crosoft’s **MSXML parser**, which provides capabilities for manipulating XML documents. Line 30 indicates that we’d like the XML document to be loaded synchronously, then line 31 uses the ActiveXObject’s **load method** to load article.xml. When this completes, we call our buildHTML method (defined in lines 52–89) to construct an XHTML representa- tion of the XML document. The expression doc.childNodes is a list of the XML docu- ment’s top-level nodes. Line 33 calls our displayDoc function (lines 92–97) to display the contents of article.xml in outputDiv.

If the browser is Firefox 2, then the document object’s **implementation** property and the implementation property’s **createDocument** method will exist (lines 35–36). In this case, line 39 uses the createDocument method to create an empty XML document object. If necessary, you can specify the XML document’s namespace as the first argument and its root element as the second argument. We used empty strings for both in this example. According to the site www.w3schools.com/xml/xml\_parser.asp, the third argument is not implemented yet, so it should always be null. Line 40 calls its load method to load article.xml. Firefox loads the XML document asynchronously, so you must use the XML document’s onload property to specify a function to call (an anonymous function in this example) when the document finishes loading. When this event occurs, lines 43– 44 call buildHTML and displayDoc just as we did in lines 32–33.

**Common Programming Error 14.11**

> _Attempting to process the contents of a dynamically loaded XML document in Firefox before the document’s onload event fires is a logic error. The document’s contents are not available until the onload event fires._ 14.11

**_Function buildHTML_**
Function buildHTML (lines 52–89) is a recursive function that receives a list of nodes as an argument. Line 54 increments the depth for indentation purposes. Lines 57–86 iterate through the nodes in the list. The switch statement (lines 59–85) uses the current node’s **nodeType property** to determine whether the current node is an element (line 61), a text node (i.e., the text content of an element; line 73) or a comment node (line 74). If it is an element, then we begin a new div element in our XHTML (line 62) and give it a unique id. Then function spaceOutput (defined in lines 100–106) appends **nonbreaking spaces (&nbsp;)**—i.e., spaces that the browser is not allowed to collapse or that can be used to keep words together—to indent the current element to the correct level. Line 64 appends the name of the current element using the node’s **nodeName property**. If the current ele- ment has children, the length of the current node’s childNodes list is nonzero and line 69 recursively calls buildHTML to append the current element’s child nodes to the markup. When that recursive call completes, line 71 completes the div element that we started at line 62.

If the current element is a text node, lines 77–78 obtain the node’s value with the **nodeValue property** and use the string method indexOf to determine whether the node’s value starts with three or six spaces. Unfortunately, unlike MSMXL, Firefox’s XML parser does not ignore the white space used for indentation in XML documents. Instead it creates text nodes containing just the space characters. The condition in lines 77–78 enables us to ignore these nodes in Firefox. If the node contains text, lines 80–82 append a new div to the markup and use the node’s nodeValue property to insert that text in the div. Line 88 in buildHTML decrements the depth counter.

**Portability Tip 14.4**

> _Firefox’s XML parser does not ignore white space used for indentation in XML documents. In- stead, it creates text nodes containing the white-space characters._ 14.4

**_Function displayDoc_**
In function displayDoc (lines 92–97), line 94 uses the DOM’s getElementById method to obtain the outputDiv element and set its innerHTML property to the new markup gen- erated by buildHTML. Then, line 95 sets variable current to refer to the div with id 'id1' in the new markup, and line 96 uses our setCurrentNodeStyle method (defined at lines 195–199) to highlight that div.

**_Functions processFirstChild and processLastChild_**
Function processFirstChild (lines 109–130) is invoked by the onclick event of the but- ton at lines 205–206. If the current node has only one child and it’s a text node (lines 111–112), line 114 displays an alert dialog indicating that there is no child node—we nav- igate only to nested XML elements in this example. If there are two or more children, line 118 stores the value of current in previous, and lines 120–123 set current to refer to its **firstChild** (if this child is not a text node) or its firstChild’s **nextSibling** (if the firstChild is a text node)—again, this is to ensure that we navigate only to nodes that represent XML elements. Then lines 125–126 unhighlight the previous node and high- light the new current node. Function processLastChild (lines 162–178) works similar- ly, using the current node’s **lastChild** property.

**_Functions processNextSibling and processPreviousSibling_**
Function processNextSibling (lines 133–144) first ensures that the current node is not the outputDiv and that nextSibling exists. If so, lines 137–140 adjust the previous and current nodes accordingly and update their highlighting. Function processPrevious-Sibling (lines 147–159) works similarly, ensuring first that the current node is not the outputDiv, that previousSibling exists and that previousSibling is not a text node.

**_Function processParentNode_**
Function processParentNode (lines 181–192) first checks whether the current node’s **parentNode** is the XHTML page’s body. If not, lines 185–188 adjust the previous and current nodes accordingly and update their highlighting.

**_Common DOM Properties_**
The tables in Figs. 14.27–14.32 describe many common DOM properties and methods. Some of the key DOM objects are **Node** (a node in the tree), **NodeList** (an ordered set of Nodes), **Document** (the document), **Element** (an element node), **Attr** (an attribute node) and **Text** (a text node). There are many more objects, properties and methods than we can possibly list here. Our XML Resource Center (www.deitel.com/XML/) includes links to various DOM reference websites.

| Property/Method |                                                                                                                  Description                                                                                                                  |
| :-------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    nodeType     |                                                                                                    An integer representing the node type.                                                                                                     |
|    nodeName     |                                                                                                             The name of the node.                                                                                                             |
|    nodeValue    |                                                                                                 A string or null depending on the node type.                                                                                                  |
|   parentNode    |                                                                                                               The parent node.                                                                                                                |
|   childNodes    |                                                                                          A NodeList (Fig. 14.28) with all the children of the node.                                                                                           |
|   firstChild    |                                                                                                    The first child in the Node’s NodeList.                                                                                                    |
|    lastChild    |                                                                                                    The last child in the Node’s NodeList.                                                                                                     |
| previousSibling |                                                                                         The node preceding this node; null if there is no such node.                                                                                          |
|   nextSibling   |                                                                                         The node following this node; null if there is no such node.                                                                                          |
|   attributes    |                                                                              A collection of Attr objects (Fig. 14.31) containing the attributes for this node.                                                                               |
|  insertBefore   | Inserts the node (passed as the first argument) before the existing node (passed as the second argument). If the new node is already in the tree, it is removed before insertion. The same behavior is true for other methods that add nodes. |
|  replaceChild   |                                                                                        Replaces the second argument node with the first argument node.                                                                                        |
|   removeChild   |                                                                                                     Removes the child node passed to it.                                                                                                      |
|   appendChild   |                                                                                           Appends the node it receives to the list of child nodes.                                                                                            |

**Fig. 14.27** | Common Node properties and methods.

| Property/Method |                                                                                      Description                                                                                       |
| :-------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      item       | Method that receives an index number and returns the element node at that index. Indices range from 0 to _length_ – 1. You can also access the nodes in a NodeList via array indexing. |
|     length      |                                                                         The total number of nodes in the list.                                                                         |

**Fig. 14.28** | NodeList property and method.

|   Property/Method    |                                                                                                                            Description                                                                                                                             |
| :------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   documentElement    |                                                                                                                   The root node of the document.                                                                                                                   |
|    createElement     |                                                                                                  Creates and returns an element node with the specified tag name.                                                                                                  |
|   createAttribute    |                                                                                          Creates and returns an Attr node (Fig. 14.31) with the specified name and value.                                                                                          |
|    createTextNode    |                                                                                                 Creates and returns a text node that contains the specified text.                                                                                                  |
| getElementsByTagName | Returns a NodeList of all the nodes in the subtree with the name specified as the first argument, ordered as they would be encoun- tered in a preorder traversal. An optional second argument speci- fies either the direct child nodes (0) or any descendant (1). |

**Fig. 14.29** | Document properties and methods.

| Property/Method  |                                                 Description                                                 |
| :--------------: | :---------------------------------------------------------------------------------------------------------: |
|     tagName      |                                          The name of the element.                                           |
|   getAttribute   |                                Returns the value of the specified attribute.                                |
|   setAttribute   | Changes the value of the attribute passed as the first argument to the value passed as the second argument. |
| removeAttribute  |                                      Removes the specified attribute.                                       |
| getAttributeNode |                                    Returns the specified attribute node.                                    |
| setAttributeNode |                             Adds a new attribute node with the specified name.                              |

**Fig. 14.30** | Element property and methods.

| Property/Method |           Description            |
| :-------------: | :------------------------------: |
|      value      | The specified attribute’s value. |
|      name       |    The name of the attribute.    |

**Fig. 14.31** | Attr properties.

| Property/Method |                   Description                   |
| :-------------: | :---------------------------------------------: |
|      data       |         The text contained in the node.         |
|     length      | The number of characters contained in the node. |

**Fig. 14.32** | Text methods.

**_Locating Data in XML Documents with XPath_**
Although you can use XML DOM capabilities to navigate through and manipulate nodes, this is not the most efficient means of locating data in an XML document’s DOM tree. A simpler way to locate nodes is to search for lists of nodes matching search criteria that are written as XPath expressions. Recall that XPath (XML Path Language) provides a syntax for locating specific nodes in XML documents effectively and efficiently. XPath is a string- based language of expressions used by XML and many of its related technologies (such as XSLT, discussed in Section 14.8).

Figure 14.33 enables the user to enter XPath expressions in an XHTML form. When the user clicks the **Get Matches** button, the script applies the XPath expression to the XML DOM and displays the matching nodes. Figure 14.34 shows the XML document sports.xml that we use in this example. [_Note:_ The versions of sports.xml presented in Fig. 14.34 and Fig. 14.20 are nearly identical. In the current example, we do not want to apply an XSLT, so we omit the processing instruction found in line 2 of Fig. 14.20. We also removed extra blank lines to save space.]

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 14.33: xpath.html -->
<!-- Using XPath to locate nodes in an XML document. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Using XPath to Locate Nodes in an XML Document</title>
<style type = "text/css">
#outputDiv { font: 10pt "Lucida Console", monospace; }
</style>
<script type = "text/javascript">
<!--
var doc; // variable to reference the XML document
var outputHTML = ""; // stores text to output in outputDiv
var browser = ""; // used to determine which browser is being used

// load XML document based on whether the browser is IE7 or Firefox 2
function loadXMLDocument( url )
{
if ( window.ActiveXObject ) // IE7
{
```

**Fig. 14.33** | Using XPath to locate nodes in an XML document. (Part 1 of 3.)

```bash
// create IE7-specific XML document object
doc = new ActiveXObject( "Msxml2.DOMDocument.6.0" );
doc.async = false; // specifies synchronous loading of XML doc
doc.load( url ); // load the XML document specified by url
browser = "IE7"; // set browser
} // end if
else if ( document.implementation &&
document.implementation.createDocument ) // other browsers
{
// create XML document object
doc = document.implementation.createDocument( "", "", null );
doc.load( url ); // load the XML document specified by url
browser = "FF2"; // set browser
} // end else
else // not supported
alert( 'This script is not supported by your browser' );
} // end function loadXMLDocument

// display the XML document
function displayDoc()
{
document.getElementById( "outputDiv" ).innerHTML = outputHTML;
} // end function displayDoc

// obtain and apply XPath expression
function processXPathExpression()
{
var xpathExpression = document.getElementById( "inputField" ).value;
outputHTML = "";

if ( browser == "IE7" )
{
var result = doc.selectNodes( xpathExpression );

for ( var i = 0; i < result.length; i++ )
outputHTML += "<div style='clear: both'>" +
result.item( i ).text + "</div>";
} // end if
else // browser == "FF2"
{
var result = document.evaluate( xpathExpression, doc, null,
XPathResult.ANY_TYPE, null );
var current = result.iterateNext();

while ( current )
{
outputHTML += "<div style='clear: both'>" +
current.textContent + "</div>";
current = result.iterateNext();
} // end while
} // end else
```

**Fig. 14.33** | Using XPath to locate nodes in an XML document. (Part 2 of 3.)

```bash
displayDoc();
} // end function processXPathExpression
// -->
</script>
</head>
<body id = "body" onload = "loadXMLDocument( 'sports.xml' );">
<form action = "" onsubmit = "return false;">
<input id = "inputField" type = "text" style = "width: 200px"/>
<input type = "submit" value = "Get Matches"
/>
</form><br/>
<div id = "outputDiv"></div>
</body>
</html>
```

**Fig. 14.33** | Using XPath to locate nodes in an XML document. (Part 3 of 3.)

```bash
<?xml version = "1.0"?>

<!-- Fig. 14.34: sports.xml -->
<!-- Sports Database -->
<sports>
<game id = "783">
<name>Cricket</name>
<paragraph>
More popular among commonwealth nations.
</paragraph>
</game>
<game id = "239">
<name>Baseball</name>
<paragraph>
More popular in America.
</paragraph>
</game>
<game id = "418">
<name>Soccer (Futbol)</name>
<paragraph>
Most popular sport in the world.
</paragraph>
</game>
</sports>
```

**Fig. 14.34** | XML document that describes various sports.

The program of Fig. 14.33 loads the XML document sports.xml (Fig. 14.34) using the same techniques we presented in Fig. 14.26, so we focus on only the new features in this example. Internet Explorer 7 (MSXML) and Firefox 2 handle XPath processing dif- ferently, so this example declares the variable browser (line 17) to store the browser that loaded the page. In function loadDocument (lines 20–40), lines 28 and 36 assign a string to variable browser indicating the appropriate browser.

When the body of this XHTML document loads, its onload event calls loadDocument (line 81) to load the sports.xml file. The user specifies the XPath expression in the input element at line 83. When the user clicks the **Get Matches** button (lines 84–85), its onclick event handler invokes our processXPathExpression function to locate any matches and display the results in outputDiv (line 87).

Function processXPathExpression (lines 49–77) first obtains the XPath expression (line 51). The document object’s getElementById method returns the element with the id "inputField"; then we use its value property to get the XPath expression. Lines 54–61 apply the XPath expression in Internet Explorer 7, and lines 62–74 apply the XPath expression in Firefox 2. In IE7, the XML document object’s **selectNodes method** receives an XPath expression as an argument and returns a collection of elements that match the expression. Lines 58–60 iterate through the results and mark up each one in a separate div element. After this loop completes, line 76 displays the generated markup in outputDiv.

For Firefox 2, lines 64–65 invoke the XML document object’s **evaluate method**, which receives five arguments—the XPath expression, the document to apply the expres- sion to, a namespace resolver, a result type and an XPathResult object into which to place the results. If the last argument is null, the function simply returns a new **XPathResult**

**object** containing the matches. The namespace resolver argument can be null if you are not using XML namespace prefixes in the XPath processing. Lines 66–73 iterate through the XPathResult and mark up the results. Line 66 invokes the XPathResult’s iter-

ateNext method to position to the first result. If there is a result, the condition in line 68 will be true, and lines 70–71 create a div for that result. Line 72 then positions to the next result. After this loop completes, line 76 displays the generated markup in outputDiv.

Figure 14.35 summarizes the XPath expressions that we demonstrate in Fig. 14.33’s sample outputs. For more information on using XPath in Firefox, visit the site developer.mozilla.org/en/docs/XPath. For more information on using XPath in Internet Explorer, visit msdn.microsoft.com/msdnmag/issues/0900/xml/.

|           Expression            |                                                                    Description                                                                     |
| :-----------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------: |
|             /sports             |                                      Matches all sports nodes that are child nodes of the document root node.                                      |
|          /sports/game           |                           Matches all game nodes that are child nodes of sports, which is a child of the document root.                            |
|        /sports/game/name        |             Matches all name nodes that are child nodes of game. The game is a child of sports, which is a child of the document root.             |
|     /sports/game/paragraph      |          Matches all paragraph nodes that are child nodes of game. The game is a child of sports, which is a child of the document root.           |
|   /sports/game \[@id=’239’\]    |                Matches the game node with the id number 239. The game is a child of sports, which is a child of the document root.                 |
| /sports/game \[name='Cricket'\] | Matches all game nodes that contain a child ele- ment whose name is Cricket. The game is a child of sports, which is a child of the document root. |

**Fig. 14.35** | XPath expressions and descriptions.

## RSS

**RSS** stands for **RDF (Resource Description Framework) Site Summary** and is also known as **Rich Site Summary** and **Really Simple Syndication**. RSS is an XML format used to syndicate website content, such as news articles, blog entries, product reviews, pod- casts, vodcasts and more for inclusion on other websites. An RSS feed contains an **rss root element** with a version attribute and a **channel child element** with **item subelements**. Depending on the RSS version, the channel and item elements have certain required and optional child elements. The item elements provide the feed subscriber with a link to a web page or file, a title and description of the page or file. The most commonly used RSS feed versions are 0.91, 1.0, and 2.0, with RSS 2.0 being the most popular version. We dis- cuss only RSS version 2.0 in this section.

RSS version 2.0, introduced in 2002, builds upon the RSS 0.9x versions. Version 2.0 does not contain length limitations or item element limitations of earlier versions, makes some formerly required elements optional, and adds new channel and item subelements. Removing length limitations on item descriptions allows RSS feeds to contain entire arti- cles, blog entries and other web content. You can also have partial feeds that provide only a summary of the syndicated content. Partial feeds require the RSS subscriber to visit a website to view the complete content. RSS 2.0 allows item elements to contain an enclo-sure element providing the location of a media file that is related to the item. Such enclo-sures enable syndication of audio and video (such as podcasts and vodcasts) via RSS feeds.

By providing up-to-date, linkable content for anyone to use, RSS enables website developers to draw more traffic. It also allows users to get news and information from many sources easily and reduces content development time. RSS simplifies importing information from portals, weblogs and news sites. Any piece of information can be syndi- cated via RSS, not just news. After putting information in RSS format, an RSS program, such as a feed reader or aggregator, can check the feed for changes and react to them. For more details on RSS and for links to many RSS sites, visit our RSS Resource Center at www.deitel.com/RSS.

**_RSS 2.0 channel and item Elements_**
In RSS 2.0, the required child elements of channel are description, link and title, and the required child element of an item is either title or description. Figures 14.36– 14.37 overview the child elements of channels and items, respectively.

|    Element     |                                                        Description                                                         |
| :------------: | :------------------------------------------------------------------------------------------------------------------------: |
|     title      |                                              The name of the channel or feed.                                              |
|      link      |                           The URL to the website of the channel or feed the RSS is coming from.                            |
|  description   |                                           A description of the channel or feed.                                            |
|    language    |                                 The language the channel is in, using W3C language values.                                 |
|   copyright    |                                       The copyright material of the channel or feed.                                       |
| managingEditor |                                  The e-mail address of the editor of the channel or feed.                                  |
|   webMaster    |                                The e-mail address for the webmaster of the channel or feed.                                |
|    pubDate     | The date of the channel or feed release, using the RFC 822 Date and Time Specification—e.g., Sun, 14 Jan 2007 8:00:00 EST. |
| lastBuildDate  |               The last date the channel or feed was changed, using the RFC 822 Date and Time Specification.                |
|    category    |          The category (or several categories) of the channel or feed. This element has an optional attribute tag.          |
|   generator    |                            Indicates the program that was used to generate the channel or feed.                            |

**Fig. 14.36** | channel elements and descriptions. (Part 1 of 2.)

|  Element  |                                                                                             Description                                                                                              |
| :-------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   docs    |                                                                  The URL of the documentation for the format used in the RSS file.                                                                   |
|   cloud   |                                 Specifies a SOAP web service that supports the rssCloud interface (cyber.law.harvard.edu/rss/soapMeetsRss.html# rsscloudInterface).                                  |
|    ttl    |                                         (Time To Live) A number of minutes for how long the channel or feed can be cached before refreshing from the source.                                         |
|   image   | The GIF, JPEG or PNG image that can be displayed with the channel or feed. This element contains the required children title, link and url, and the optional children description, height and width. |
|  rating   |                                                          The PICS (Platform for Internet Content Selection) rating for the channel or feed.                                                          |
| textInput |                           Specifies a text input box to display with the channel or feed. This ele- ment contains the required children title, name, link and description.                           |
| skipHours |                                                                Tells aggregators which hours they can skip checking for new content.                                                                 |
| skipDays  |                                                                 Tells aggregators which days they can skip checking for new content.                                                                 |

**Fig. 14.36** | channel elements and descriptions. (Part 2 of 2.)

|   Element   |                                                     Description                                                      |
| :---------: | :------------------------------------------------------------------------------------------------------------------: |
|    title    |                                                The title of the item.                                                |
|    link     |                                                 The URL of the item.                                                 |
| description |                                             The description of the item.                                             |
|   author    |                                    The e-mail address of the author of the item.                                     |
|  category   |            The category (or several categories) of the item. This element has an optional attribute tag.             |
|  comments   |                                 The URL of a page for comments related to the item.                                  |
|  enclosure  | The location of a media object attached to the item. This element has the required attributes type, url and length.  |
|    guid     |                       (Globally Unique Identifier) A string that uniquely identifies the item.                       |
|   pubDate   | The date the item was published, using the RFC 822 Date and Time Specifi- cation—e.g., Sun, 14 Jan 2007 8:00:00 EST. |
|   source    |                    The RSS channel the item came from. This element has a required attribute url.                    |

**Fig. 14.37** | item elements and descriptions.

**_Browsers and RSS Feeds_**
Many of the latest web browsers can now view RSS feeds, determine whether a website offers feeds, allow you to subscribe to feeds and create feed lists. An **RSS aggregator** keeps tracks of many RSS feeds and brings together information from the separate feeds. There are many RSS aggregators available, including Bloglines, BottomFeeder, FeedDemon, Mi- crosoft Internet Explorer 7, Mozilla Firefox 2.0, My Yahoo, NewsGator and Opera 9.

To allow browsers and search engines to determine whether a web page contains an RSS feed, a link element can be added to the head of a page as follows:

```
<link rel = "alternate" type = "application/rss+xml" title = "RSS" href = "file">
```

Many sites provide RSS feed validators. Some examples of RSS feed validators are validator.w3.org/feed, feedvalidator.org, and www.validome.org/rss-atom/.

**_Creating a Feed Aggregator_**
The DOM and XSL can be used to create RSS aggregators. A simple RSS aggregator uses an XSL stylesheet to format RSS feeds as XHTML. Figure 14.38 loads two XML docu- ments—an RSS feed (a small portion of which is shown in Fig. 14.39) and an XSL style sheet—then uses JavaScript to apply an XSL transformation to the RSS content and ren- der it on the page. You’ll notice as we discuss this program that there is little commonality between Internet Explorer 7 and Firefox with regard to programmatically applying XSL transformations. This is one of the reasons that JavaScript libraries have become popular in web development—they tend to hide such browser-specific issues from you. We discuss the Dojo toolkit—one of many popular JavaScript libraries—in Section 15.8. For more information on JavaScript libraries, see our JavaScript and Ajax Resource Centers (www.deitel.com/JavaScript/ and www.deitel.com/Ajax/, respectively).

**_Determining the Browser Type and Loading the Documents_**
When this page first loads, lines 19–23 (Fig. 14.38) determine whether the browser is In- ternet Explorer 7 or Firefox 2 and store the result in variable browser for use throughout the script. After the body of this XHTML document loads, its onload event calls function start (lines 26–48) to load RSS and XSL files as XML documents, and to transform the RSS. Since Internet Explorer 7 can download the files synchronously, lines 30–33 perform the loading, transformation and display steps sequentially. As mentioned previously, Fire- fox 2 loads the files asynchronously. For this reason, line 37 starts loading the rss.xsl

document (included with this example’s code), and lines 38–46 register an onload event handler for that document. When the document finishes loading, line 40 begins loading the deitel-20.xml RSS document. Lines 41–45 register an onload event handler for this second document. When it finishes loading, lines 43–44 perform the transformation and display the results.

**_Transforming the RSS to XHTML_**
Function applyTransform (Fig. 14.38, lines 75–96) performs the browser-specific XSL transformations using the RSS document and XSL document it receives as arguments. Line 81 uses the MSXML object’s built-in XSLT capabilities to apply the transformations. Method **transformNode** is invoked on the rssDocument object and receives the xslDocument object as an argument.

```bash
<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Fig. 14.38: RssViewer.html -->
<!-- Simple RSS viewer. -->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Simple RSS Viewer</title>
<style type = "text/css">
#outputDiv { font: 12px Verdana, Geneva, Arial,
Helvetica, sans-serif; }
</style>
<script type = "text/javascript">
<!--
var browser = ""; // used to determine which browser is being used

// is the browser Internet Explorer 7 or Firefox 2?
if ( window.ActiveXObject ) // IE7
browser = "IE7";
else if ( document.implementation &&
document.implementation.createDocument ) // FF2 and other browsers
browser = "FF2";

// load both the RSS feed and the XSL file to process it
function start()
{
if ( browser == "IE7" )
{
var xsl = loadXMLDocument( 'rss.xsl' ); // load XSL file
var rss = loadXMLDocument( 'deitel-20.xml' ); // load RSS feed
var result = applyTransform( rss, xsl ); // apply transform
displayTransformedRss( result ); // display feed info
} // end if
else if ( browser == "FF2" )
{
var xsl = loadXMLDocument( 'rss.xsl' ); // load XSL file
xsl.onload = function() // function to execute when xsl loads
{
var rss = loadXMLDocument( 'deitel-20.xml' ); // load RSS feed
rss.onload = function() // function to execute when rss loads
{
var result = applyTransform( rss, xsl ); // apply transform
displayTransformedRss( result ); // display feed info
} // end onload event handler for rss
} // end onload event handler for xsl
} // end else
} // end function start

// load XML document based on whether the browser is IE7 or Firefox 2
function loadXMLDocument( url )
{
var doc = ""; // variable to manage loading file
```

**Fig. 14.38** | Rendering an RSS feed in a web page using XSLT and JavaScript. (Part 1 of 3.)

```bash

if ( browser == "IE7" ) // IE7
{
// create IE7-specific XML document object
doc = new ActiveXObject( "Msxml2.DOMDocument.6.0" );
doc.async = false; // specifies synchronous loading of XML doc
doc.load( url ); // load the XML document specified by url
} // end if
else if ( browser == "FF2" ) // other browsers
{
// create XML document object
doc = document.implementation.createDocument( "", "", null );
doc.load( url ); // load the XML document specified by url
} // end else
else // not supported
alert( 'This script is not supported by your browser' );

return doc; // return the loaded document
} // end function loadXMLDocument

// apply XSL transformation and show results
function applyTransform( rssDocument, xslDocument )
{
var result; // stores transformed RSS

// transform the RSS feed to XHTML
if ( browser == "IE7" )
result = rssDocument.transformNode( xslDocument );
else // browser == "FF2"
{
// create Firefox object to perform transformation
var xsltProcessor = new XSLTProcessor();

// specify XSL stylesheet to use in transformation
xsltProcessor.importStylesheet( xslDocument );

// apply the transformation
result =
xsltProcessor.transformToFragment( rssDocument, document );
} // end else

return result; // return the transformed RSS
} // end function applyTransform

// display the XML document and highlight the first child
function displayTransformedRss( resultXHTML )
{
if ( browser == "IE7" )
document.getElementById( "outputDiv" ).innerHTML = resultXHTML;
else // browser == "FF2"
document.getElementById( "outputDiv" ).appendChild(
resultXHTML );
} // end function displayTransformedRss
```

**Fig. 14.38** | Rendering an RSS feed in a web page using XSLT and JavaScript. (Part 2 of 3.)

```bash
// -->
</script>
</head>
<body id = "body" onload = "start();">
<div id = "outputDiv"></div>
</body>
</html>
```

**Fig. 14.38** | Rendering an RSS feed in a web page using XSLT and JavaScript. (Part 3 of 3.)

```bash
<?xml version="1.0" encoding="utf-8"?>

<!-- Fig. 14.39: deitel-20.xml -->
<!-- RSS 2.0 feed of Deitel Resource Centers -->
<rss version="2.0">
<channel>
<title>
Internet &#38; World Wide Web How to Program:
Deitel Resource Centers
</title>
```

**Fig. 14.39** | RSS 2.0 sample feed. (Part 1 of 2.)

```bash
<link>http://www.deitel.com/ResourceCenters.html</link>
<description>
Check out our growing network of Resource Centers that focus on
many of today's hottest programming, Web 2.0 and technology
topics. Start your search here for downloads, tutorials,
documentation, books, e-books, blogs, RSS feeds, journals,
articles, training, webcasts, podcasts, videos and more.
</description>
<languague>en-us</languague>
<image>
<url>
http://www.deitel.com/Portals/0/deitel\_transparent\_smaller.png
</url>
<title>Deitel.com</title>
<link>http://www.deitel.com/</link>
</image>

<item>
<title>Adobe® Flex</title>
<link>http://www.deitel.com/Flex/</link>
<description>
<p>
Welcome to the Adobe® Flex™ Resource Center. Adobe Flex 2 is a
rich Internet application (RIA) framework that allows you to
create scalable, cross-platform, multimedia-rich applications
for delivery within the enterprise or across the Internet.
Start your search here for resources, downloads, tutorials,
documentation, books, e-books, articles, blogs and more that
will help you develop Flex applications.
</p>
</description>
<category>Programming</category>
</item>
</channel>
</rss>
```

**Fig. 14.39** | RSS 2.0 sample feed. (Part 2 of 2.)

Firefox provides built-in XSLT processing in the form of the **XSLTProcessor** object (created at line 85). After creating this object, you use its **importStylesheet** method to specify the XSL stylesheet you’d like to apply (line 88). Finally, lines 91–92 apply the transformation by invoking the XSLTProcessor object’s **transformToFragment** method, which returns a document fragment—i.e., a piece of a document. In our case, the rss.xsl document transforms the RSS into an XHTML table element that we’ll append to the outputDiv element in our XHTML page. The arguments to transformToFragment are the document to transform and the document object to which the transformed fragment will belong. To learn more about XSLTProcessor, visit developer.mozilla.org/en/docs/The_XSLT/JavaScript_Interface_in_Gecko.

In each browser’s case, after the transformation, the resulting XHTML markup is assigned to variable result and returned from function applyTransform. Then function displayTransformedRss is called.

**_Displaying the XHTML Markup_**
Function displayTransformedRss (lines 99–106) displays the transformed RSS in the outputDiv element (line 111 in the body). In both Internet Explorer 7 and Firefox 2, we use the DOM method getElementById to obtain the outputDiv element. In Internet Ex- plorer 7, the node’s innerHTML property is used to add the table as a child of the outputDiv element (line 102). In Firefox, the node’s appendChild method must be used to append the table (a document fragment) to the outputDiv element.

## Wrap-Up

In this chapter, we studied Extensible Markup Language and several of its related technol- ogies. We began by discussing some basic XML terminology, introducing the concepts of markup, XML vocabularies and XML parsers (validating and nonvalidating). We then demonstrated how to describe and structure data in XML, illustrating these points with examples marking up an article and a business letter.

The chapter discussed the concept of an XML namespace. You learned that each namespace has a unique name that provides a means for document authors to unambigu- ously refer to elements with the same name (i.e., prevent naming collisions). We presented examples of defining two namespaces in the same document, as well as setting the default namespace for a document.

We also discussed how to create DTDs and schemas for specifying and validating the structure of an XML document. We showed how to use various tools to confirm whether XML documents are valid (i.e., conform to a DTD or schema).

The chapter demonstrated how to create and use XSL documents to specify rules for converting XML documents between formats. Specifically, you learned how to format and sort XML data as XHTML for display in a web browser.

The final sections of the chapter presented more advanced uses of XML. We demon- strated how to retrieve and display data from an XML document using JavaScript. We illustrated how a Document Object Model (DOM) tree represents each element of an XML document as a node in the tree. You also learned how to traverse the DOM tree, interact with individual nodes in the DOM tree from JavaScript code, search for nodes using XPath and apply XSL transformations.

Chapter 15 begins our discussion of Rich Internet Applications (RIAs)—web appli- cations that approximate the look, feel and usability of desktop applications. RIAs have two key attributes—performance and rich GUI. You’ll learn about Ajax (Asynchronous JavaScript and XML), which uses all the concepts you’ve learned so far to build rich web applications. You’ll see that Ajax techniques are key to the responsiveness of RIAs.

## Web Resources

www.deitel.com/XML/

The Deitel XML Resource Center focuses on the vast amount of free XML content available online, plus some for-sale items. Start your search here for tools, downloads, tutorials, podcasts, wikis, doc- umentation, conferences, FAQs, books, e-books, sample chapters, articles, newsgroups, forums, downloads from CNET’s download.com, jobs and contract opportunities, and more that will help you develop XML applications.

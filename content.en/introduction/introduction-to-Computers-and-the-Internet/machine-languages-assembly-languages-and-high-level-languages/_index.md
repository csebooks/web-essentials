---
title: "Machine Languages, Assembly Languages and High-Level Languages"
weight: 4
---

# Machine Languages, Assembly Languages and High-Level Languages

Programmers write instructions in various programming languages, some directly under- standable by computers and others requiring intermediate **translation** steps. Hundreds of computer languages are in use today. These may be divided into three general types:

**1\.** Machine languages

**2\.** Assembly languages

**3\.** High-level languages

Any computer can directly understand only its own **machine language**_._ Machine lan- guage is the “natural language” of a computer and as such is defined by its hardware design.[Note:Machine language is often referred to as object code**. This term predates “object- oriented programming.” These two uses of “object” are unrelated.] Machine languages generally consist of strings of numbers (ultimately reduced to 1s and 0s) that instruct com- puters to perform their most elementary operations one at a time. Machine languages are **machine dependent** (i.e., a particular machine language can be used on only one type of computer). Such languages are cumbersome for humans, as illustrated by the following

section of an early machine-language program that adds overtime pay to base pay and stores the result in gross pay:

+1300042774
+1400593419
+1200274027

Machine-language programming was simply too slow, tedious and error prone for most programmers. Instead of using the strings of numbers that computers could directly understand, programmers began using English-like abbreviations to represent elementary operations. These abbreviations formed the basis of **assembly languages**_._ **Translator pro- grams** called **assemblers** were developed to convert early assembly-language programs to machine language at computer speeds. The following section of an assembly-language pro- gram also adds overtime pay to base pay and stores the result in gross pay:

load basepay
add overpay
store grosspay

Although such code is clearer to humans, it is incomprehensible to computers until trans- lated to machine language.

Computer usage increased rapidly with the advent of assembly languages, but pro- grammers still had to use many instructions to accomplish even the simplest tasks. To speed the programming process, **high-level languages** were developed in which single statements could be written to accomplish substantial tasks. Translator programs called **compilers** convert high-level language programs into machine language*.* High-level lan- guages allow programmers to write instructions that look almost like everyday English and contain commonly used mathematical notations. A payroll program written in a high-level language might contain a statement such as

grossPay = basePay + overTimePay;

From your standpoint, obviously, high-level languages are preferable to machine and assembly language. C, C++, Microsoft’s .NET languages (e.g., Visual Basic, Visual C++ and Visual C#) and Java are among the most widely used high-level programming lan- guages. All of the Internet and web application development languages that you’ll learn in this book are high-level languages.

The process of compiling a high-level language program into machine language can take a considerable amount of computer time. **Interpreter** programs were developed to execute high-level language programs directly, although much more slowly. In this book, we study several key programming languages, including JavaScript, ActionScript, PHP and Ruby on Rails—each of these **scripting languages** is processed by interpreters. We also study markup languages such as XHTML and XML, which can be processed by inter- preted scripting languages. You’ll see that interpreters have played an especially important role in helping scripting languages and markup languages achieve their goal of portability across a variety of platforms.

**Performance Tip 1.1**

> _Interpreters have an advantage over compilers in scripting. An interpreted program can begin executing as soon as it is downloaded to the client’s machine, without the need to be compiled before it can execute. On the downside, scripts generally run much slower than compiled code._ 1.1

**Portability Tip 1.1**

> _Interpreted languages are more portable than compiled languages. Interpreters can be imple- mented for each platform on which the interpreted languages need to execute._ 1.1

**Software Engineering Observation 1.1**

> _Interpreted languages are more dynamic than compiled languages. For example, server-side applications can generate code in response to user interactions, and that code can then be interpreted in a browser._ 1.1
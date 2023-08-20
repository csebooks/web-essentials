---
title: "Database Sql Mysql Ado.Net 2.0 And Java  Db"
weight: 2
---

**O B J E C T I V E S** In this chapter you will learn:

■ Relational database concepts.

■ To use Structured Query Language (SQL) to retrieve data from and manipulate data in a database.

■ To install and configure MySQL.

■ To create a MySQL database.

■ The ADO.NET 2.0 object model.

**_It is a capital mistake to theorize before one has data._ —Arthur Conan Doyle**

**_Now go, write it before them in a table, and note it in a book, that it may be for the time to come for ever and ever._ —The Holy Bible, Isaiah 30:8**

**_Get your facts first, and then you can distort them as much as you please._ —Mark Twain**

**_I like two kinds of men: domestic and foreign._ —Mae West**

**880** Chapter 22 Database: SQL, MySQL, ADO.NET 2.0 and Java DB **O**

**u tl**

**in e**

**22.1 Introduction** A **database** is an organized collection of data. There are many different strategies for orga- nizing data to facilitate easy access and manipulation. A **database management system** (**DBMS**) provides mechanisms for storing, organizing, retrieving and modifying data. Database management systems allow for the access and storage of data without concern for the internal representation of the data in the database.

Today’s most popular database systems are relational databases, where the data is stored without consideration of its physical structure (Section 22.2). A language called **SQL**—pronounced “sequel,” or as its individual letters—is the international standard lan- guage used almost universally with relational databases to perform **queries** (i.e., to request information that satisfies given criteria) and to manipulate data. \[_Note:_ As you learn about SQL, you will see some authors writing “a SQL statement” (which assumes the pronunci- ation “sequel”) and others writing “an SQL statement” (which assumes that the individual letters are pronounced). In this book we pronounce SQL as “sequel.”\] Some popular **rela- tional database management systems** (**RDBMSs**) are Microsoft SQL Server, Oracle, Sybase, IBM DB2, Informix, PostgreSQL and MySQL.

Programs connect to, and interact with, a relational database via an **interface**—soft- ware that facilitates communication between a database management system and a pro- gram. For example, Java developers can use the JDBC interface to interact with databases. Similarly, ASP.NET programmers communicate with databases and manipulate their data through the interface provided by ADO.NET.

**22.1** Introduction **22.2** Relational Databases **25.3** Relational Database Overview: The books Database **22.4** SQL

**22.4.1** Basic SELECT Query **22.4.2** WHERE Clause **22.4.3** ORDER BY Clause **22.4.4** Combining Data from Multiple Tables: INNER JOIN **22.4.5** INSERT Statement **22.4.6** UPDATE Statement **22.4.7** DELETE Statement

**22.5** MySQL **22.6** Instructions for Installing MySQL **22.7** Instructions for Setting Up a MySQL User Account **22.8** Creating a Database in MySQL **22.9** ADO.NET Object Model

**22.10** Java DB/Apache Derby **22.11** Wrap-Up **22.12** Web Resources

Summary | Terminology | Self-Review Exercise | Answers to Self-Review Exercise | Exercises

22.2 Relational Databases **881**

**22.2 Relational Databases** A **relational database** is a logical representation of data that allows the data to be accessed without consideration of its physical structure. A relational database stores data in **tables**. Figure 22.1 illustrates a sample table that might be used in a personnel system. The table name is Employee, and its primary purpose is to store the attributes of an employee. Tables are composed of **rows**, and rows are composed of **columns** in which values are stored. This table consists of six rows. The Number column of each row in this table is the table’s **pri- mary key**—a column (or group of columns) in a table with a unique value that cannot be duplicated in other rows. This guarantees that each row can be identified by its primary key. Good examples of primary key columns are a social security number, an employee ID number and a part number in an inventory system, as values in each of these columns are guaranteed to be unique. The rows in Fig. 22.1 are displayed in order by primary key. In this case, the rows are listed in increasing order, but we could also use decreasing order.

Rows in tables are not guaranteed to be stored in any particular order. As we will dem- onstrate in an upcoming example, programs can specify ordering criteria when requesting data from a database.

Each column represents a data attribute. Rows are normally unique (by primary key) within a table, but particular column values may be duplicated between rows—e.g., three different rows in the Employee table’s Department column contain number 413.

Different users of a database are often interested in different data and different rela- tionships among the data. Most users require only subsets of the rows and columns. To obtain these subsets, we use queries to specify which data to select from a table. We use SQL to define complex queries that select data from a table. For example, we might select data from the Employee table to create a result that shows where each department is located, and present the data sorted in increasing order by department number. This result is shown in Fig. 22.2. SQL queries are discussed in Section 22.4.

**Fig. 22.1** | Employee table sample data.

**Fig. 22.2** | Result of selecting distinct Department and Location data from table Employee.

23603

24568

34589

35761

47132

78321

Jones

Kerwin

Larson

Myers

Neumann

Stephens

Number

Primary key

Row

Column

Name

413

413

642

611

413

611

Department

1100

2000

1800

1400

9000

8500

Salary

New Jersey

New Jersey

Los Angeles

Orlando

New Jersey

Orlando

Location

413 611 642

New Jersey Orlando Los Angeles

Department Location

**882** Chapter 22 Database: SQL, MySQL, ADO.NET 2.0 and Java DB

**22.3 Relational Database Overview: A books Database** We now overview relational databases in the context of a sample books database we created for this chapter. Before we discuss SQL, we overview the tables of the books database. We use this database to introduce various database concepts, including how to use SQL to ob- tain information from the database and to manipulate the data. We provide a script to cre- ate the database. You can find the script in the examples directory for this chapter. Section 22.8 explains how to use this script.

The database consists of three tables—authors, authorISBN and titles. The authors table (described in Fig. 22.3) consists of three columns that maintain each author’s unique ID number, first name and last name. Figure 22.4 contains sample data from the authors table of the books database.

The authorISBN table (described in Fig. 22.5) has two columns that maintain each ISBN and the corresponding author’s ID number. This table associates authors with their books. The columns represent the relationship between the authors and titles tables—

Column Description

authorID Author’s ID number in the database. In the books database, this integer col- umn is defined as **autoincremented**—for each row inserted in this table, the authorID value is increased by 1 automatically to ensure that each row has a unique authorID. This column represents the table’s primary key.

firstName Author’s first name (a string).

lastName Author’s last name (a string).

**Fig. 22.3** | authors table from the books database.

authorID firstName lastName

1 Harvey Deitel

2 Paul Deitel

3 Andrew Goldberg

4 David Choffnes

**Fig. 22.4** | Sample data from the authors table.

Column Description

authorID The author’s ID number, a foreign key to the authors table.

isbn The ISBN for a book, a foreign key to the titles table.

**Fig. 22.5** | authorISBN table from the books database.

22.3 Relational Database Overview: A books Database **883**

one row in authors may be associated with many rows in titles, and vice versa. Figure 22.6 contains sample data from the authorISBN table. \[_Note:_ To save space, we split the table’s contents into two columns, each containing the authorID and isbn columns.\] The authorID column (and similarly, the isbn column) is a **foreign key**—a column in this table that matches the primary-key column in another table (i.e., authorID in the authors table). Foreign keys are specified when creating a table. The foreign key helps maintain the **Rule of Referential Integrity**—every foreign-key value must appear as another table’s pri- mary-key value. This enables the DBMS to determine whether the authorID value for a particular book is valid. Foreign keys also allow related data in multiple tables to be selected from those tables for analytic purposes—this is known as **joining** the data. If you were to remove an author from the authors table, you’d also want to remove the corre- sponding rows in the authorISBN table.

The titles table described in Fig. 22.7 consists of four columns that stand for each book’s ISBN, the title, the edition number and the copyright year. The table is in Fig. 22.8.

authorID isbn authorID isbn

1 0131869000 2 0131450913

2 0131869000 1 0131828274

1 0131483986 2 0131828274

2 0131483986 3 0131450913

1 0131450913 4 0131828274

**Fig. 22.6** | Sample data from the authorISBN table of books.

Column Description

isbn ISBN of the book (a string). The table’s primary key. ISBN is an abbrevia- tion for “International Standard Book Number”—a numbering scheme that publishers use to give every book a unique identification number.

title Title of the book (a string).

editionNumber Edition number of the book (an integer).

copyright Copyright year of the book (a string).

**Fig. 22.7** | titles table from the books database.

isbn title editionNumber copyright

0131869000 Visual Basic How to Program 3 2006

0131525239 Visual C# How to Program 2 2006

**Fig. 22.8** | Sample data from the titles table of the books database. (Part 1 of 2.)

**884** Chapter 22 Database: SQL, MySQL, ADO.NET 2.0 and Java DB

There is a one-to-many relationship between a primary key and a corresponding for- eign key (e.g., one author can write many books). A foreign key creates a relationship between two tables in which the record with a given primary key can be referenced many times in the foreign key’s table. Figure 22.9 is an **entity-relationship** (**ER**) **diagram** for the books database. This diagram shows the database tables and the relationships among them. The first compartment in each box contains the table’s name. The names in italic are primary keys. A table’s primary key uniquely identifies each row in the table. Every row must have a primary-key value, and that value must be unique in the table. This is known as the **Rule of Entity Integrity**.

**Common Programming Error 22.1** _Not providing a value for every column in a primary key breaks the Rule of Entity Integrity and causes the DBMS to report an error._ 22.1

**Common Programming Error 22.2** _Providing the same value for the primary key in multiple rows causes the DBMS to report an error._ 22.2

The lines connecting the tables in Fig. 22.9 represent the relationships between the tables. Consider the line between the authorISBN and authors tables. On the authors end of the line, there is a 1, and on the authorISBN end, there is an infinity symbol (∞ ), indi- cating a **one-to-many relationship** in which every author in the authors table can have an arbitrary number of ISBNs in the authorISBN table. Note that the relationship line links the authorID column in the table authors (i.e., its primary key) to the authorID column in table authorISBN (i.e., its foreign key). The authorID column in the authorISBN table is a foreign key.

0132222205 Java How to Program 7 2007

0131857576 C++ How to Program 5 2005

0132404168 C How to Program 5 2007

0131450913 Internet and World Wide Web How to Program

3 2004

isbn title editionNumber copyright

**Fig. 22.8** | Sample data from the titles table of the books database. (Part 2 of 2.)

**Fig. 22.9** | Table relationships in the books database.

1 1 **Titles**

Copyright

EditionNumber

Title

_ISBN_

**AuthorISBN**

_ISBN_

_AuthorID_

**Authors**

LastName

FirstName

_AuthorID_

22.4 SQL **885**

**Common Programming Error 22.3** _Providing a foreign-key value that does not appear as a primary-key value in another table breaks the Rule of Referential Integrity and causes the DBMS to report an error._ 22.3

The line between the titles and authorISBN tables illustrates another one-to-many relationship; a title can be written by any number of authors. In fact, the sole purpose of the authorISBN table is to provide a many-to-many relationship between the authors and titles tables—an author can write any number of books and a book can have any number of authors. The primary key for authorISBN is the combination of authorID and ISBN.

**22.4 SQL** We now provide an overview of SQL in the context of our books database. You will be able to use the SQL discussed here in the examples later in the chapter and in examples in Chapters 23–28.

The next several subsections discuss most of the SQL keywords listed in Fig. 22.10 in the context of SQL queries and statements. Other SQL keywords are beyond this text’s scope. To learn other keywords, refer to the SQL reference guide supplied by the vendor of the RDBMS you are using. \[_Note:_ For more information on SQL, refer to the web resources in Section 22.12.\]

**22.4.1 Basic SELECT Query** Let us consider several SQL queries that extract information from database books. A SQL query “selects” rows and columns from one or more tables in a database. Such selections are performed by queries with the SELECT keyword. The basic form of a SELECT query is

SELECT \* FROM _tableName_

SQL keyword Description

SELECT Retrieves data from one or more tables.

FROM Tables involved in the query. Required in every SELECT.

WHERE Criteria for selection that determine the rows to be retrieved, deleted or updated. Optional in a SQL query or a SQL statement.

GROUP BY Criteria for grouping rows. Optional in a SELECT query.

ORDER BY Criteria for ordering rows. Optional in a SELECT query.

INNER JOIN Combine rows from multiple tables.

INSERT Insert rows into a specified table.

UPDATE Update rows in a specified table.

DELETE Delete rows from a specified table.

**Fig. 22.10** | SQL query keywords.

**886** Chapter 22 Database: SQL, MySQL, ADO.NET 2.0 and Java DB

in which the **asterisk (\*)** indicates that all rows and columns from the _tableName_ table should be retrieved. For example, to retrieve all the data in the authors table, use

SELECT \* FROM authors

Most programs do not require all the data in a table. To retrieve only specific columns from a table, replace the asterisk (\*) with a comma-separated list of the column names. For example, to retrieve only the columns authorID and lastName for all rows in the authors table, use the query

SELECT authorID, lastName FROM authors

This query returns the data listed in Fig. 22.11.

**Software Engineering Observation 22.1** _For most queries, the asterisk (\*) should not be used to specify column names. In general, you process results by knowing in advance the order of the columns in the result—for example, selecting authorID and lastName from table authors ensures that the columns will appear in the result with authorID as the first column and lastName as the second column. Programs typically process result columns by specifying the column number in the result (starting from number 1 for the first column). Selecting columns by name also avoids returning unneeded columns and protects against changes in the actual order of the columns in the table(s)._ 22.1

**Common Programming Error 22.4** _If you assume that the columns are always returned in the same order from a query that uses the asterisk (_\*_), the program may process the results incorrectly. If the column order in the table(s) changes or if additional columns are added at a later time, the order of the columns in the result changes accordingly._ 22.4

**22.4.2 WHERE Clause** In most cases, it is necessary to retrieve rows in a database that satisfy certain **selection cri- teria**. Only rows that satisfy the selection criteria (formally called **predicates**) are selected. SQL uses the optional WHERE **clause** in a query to specify the selection criteria for the query. The basic form of a query with selection criteria is

SELECT _columnName1_, _columnName2_, _…_ FROM _tableName_ WHERE _criteria_

For example, to select the title, editionNumber and copyright columns from table titles for which the copyright year is greater than 2005, use the query

authorID lastName

1 Deitel

2 Deitel

3 Goldberg

4 Choffnes

**Fig. 22.11** | Sample authorID and lastName data from the authors table.

22.4 SQL **887**

SELECT title, editionNumber, copyright FROM titles WHERE copyright > '2005'

Figure 22.12 shows the result of the preceding query. The WHERE clause criteria can contain the operators <, >, <=, >=, =, <> and LIKE. Operator **LIKE** is used for **pattern matching** with wildcard characters **percent** (**%**) and **underscore** (\_). Pattern matching allows SQL to search for strings that match a given pattern.

A pattern that contains a percent character (%) searches for strings that have zero or more characters at the percent character’s position in the pattern. For example, the next query locates the rows of all the authors whose last name starts with the letter D:

SELECT authorID, firstName, lastName FROM authors WHERE lastName LIKE 'D%'

This query selects the two rows shown in Fig. 22.13—two of the four authors have a last name starting with the letter D (followed by zero or more characters). The % in the WHERE

clause’s LIKE pattern indicates that any number of characters can appear after the letter D in the lastName. Note that the pattern string is surrounded by single-quote characters.

**Portability Tip 22.1** _See the documentation for your database system to determine whether SQL is case sensitive on your system and to determine the syntax for SQL keywords (i.e., should they be all uppercase let- ters, all lowercase letters or some combination of the two?)._ 22.1

An underscore ( \_ ) in the pattern string indicates a single wildcard character at that position in the pattern. For example, the following query locates the rows of all the authors

title editionNumber copyright

Visual C# How to Program 2 2006

Visual Basic 2005 How to Program 3 2006

Java How to Program 7 2007

C How to Program 5 2007

**Fig. 22.12** | Sampling of titles with copyrights after 2005 from table titles.

authorID firstName lastName

1 Harvey Deitel

2 Paul Deitel

**Fig. 22.13** | Authors whose last name starts with D from the authors table.

**888** Chapter 22 Database: SQL, MySQL, ADO.NET 2.0 and Java DB

whose last names start with any character (specified by \_), followed by the letter o, fol- lowed by any number of additional characters (specified by %):

SELECT authorID, firstName, lastName FROM authors WHERE lastName LIKE '\_o%'

The preceding query produces the row shown in Fig. 22.14, because only one author in our database has a last name that contains the letter o as its second letter.

**22.4.3 ORDER BY Clause** The rows in the result of a query can be sorted into ascending or descending order by using the optional **ORDER BY clause**. The basic form of a query with an ORDER BY clause is

SELECT _columnName1_, _columnName2_, _…_ FROM _tableName_ ORDER BY _column_ ASC SELECT _columnName1_, _columnName2_, _…_ FROM _tableName_ ORDER BY _column_ DESC

where ASC specifies ascending order (lowest to highest), DESC specifies descending order (highest to lowest) and _column_ specifies the column on which the sort is based. For exam- ple, to obtain the list of authors in ascending order by last name (Fig. 22.15), use the query

SELECT authorID, firstName, lastName FROM authors ORDER BY lastName ASC

Note that the default sorting order is ascending, so ASC is optional. To obtain the same list of authors in descending order by last name (Fig. 22.16), use the query

authorID firstName lastName

3 Andrew Goldberg

**Fig. 22.14** | The only author from the authors table whose last name contains o as the second letter.

authorID firstName lastName

4 David Choffnes

1 Harvey Deitel

2 Paul Deitel

3 Andrew Goldberg

**Fig. 22.15** | authors sample data in ascending order by lastName.

22.4 SQL **889**

SELECT authorID, firstName, lastName FROM authors ORDER BY lastName DESC

Multiple columns can be used for sorting with an ORDER BY clause of the form

ORDER BY _column1 sortingOrder_, _column2 sortingOrder_, _…_

where _sortingOrder_ is either ASC or DESC. Note that the _sortingOrder_ does not have to be identical for each column. The query

SELECT authorID, firstName, lastName FROM authors ORDER BY lastName, firstName

sorts all the rows in ascending order by last name, then by first name. If any rows have the same value in the lastName column, they are returned sorted by firstName (Fig. 22.17).

The WHERE and ORDER BY clauses can be combined in one query, as in

SELECT isbn, title, editionNumber, copyright FROM titles WHERE title LIKE '%How to Program' ORDER BY title ASC

which returns the isbn, title, editionNumber and copyright of each book in the titles table that has a title ending with "How to Program" and sorts them in ascending order by title. The query results are shown in Fig. 22.18.

authorID firstName lastName

3 Andrew Goldberg

1 Harvey Deitel

2 Paul Deitel

4 David Choffnes

**Fig. 22.16** | authors sample data in descending order by lastName.

authorID firstName lastName

4 David Choffnes

1 Harvey Deitel

2 Paul Deitel

3 Andrew Goldberg

**Fig. 22.17** | authors sample data in ascending order by lastName and firstName.

**890** Chapter 22 Database: SQL, MySQL, ADO.NET 2.0 and Java DB

**22.4.4 Combining Data from Multiple Tables: INNER JOIN** Database designers often split related data into separate tables to ensure that a database does not store data redundantly. For example, the books database has tables authors and titles. We use an authorISBN table to store the relationship data between authors and their corresponding titles. If we did not separate this information into individual tables, we would need to include author information with each entry in the titles table. Then the database would store duplicate author information for authors who wrote multiple books. Often, it is necessary to combine data from multiple tables into a single result. Re- ferred to as joining the tables, this is specified by an INNER JOIN operator in the query. An INNER JOIN combines rows from two tables by matching values in columns that are com- mon to the tables. The basic form of an INNER JOIN is:

SELECT _columnName1, columnName2, …_ FROM _table1_ INNER JOIN _table2_

ON _table1_._columnName_ \= _table2_._columnName_

The **ON clause** of the INNER JOIN specifies a condition (often comparing columns from each table) that determines which rows are combined. For example, the following query produces a list of authors accompanied by the ISBNs for books written by each author:

SELECT firstName, lastName, isbn FROM authors INNER JOIN authorISBN

ON authors.authorID = authorISBN.authorID ORDER BY lastName, firstName

The query combines the firstName and lastName columns from table authors with the isbn column from table authorISBN, sorting the result in ascending order by lastName and firstName. Only rows in which the authorIDs match are combined. Note the use of the syntax _tableName_._columnName_ in the ON clause. This syntax, called a **qualified name**, specifies the columns from each table that should be compared to join the tables. The “_tableName_.” syntax is required if the columns have the same name in both tables. The

isbn title edition- Number

copy- right

0132404168 C How to Program 5 2007

0131857576 C++ How to Program 5 2005

0131450913 Internet and World Wide Web How to Program 3 2004

0132222205 Java How to Program 7 2007

0131869000 Visual Basic 2005 How to Program 3 2006

0131525239 Visual C# How to Program 2 2006

**Fig. 22.18** | Sampling of books from table titles whose titles end with How to Program in ascending order by title.

22.4 SQL **891**

same syntax can be used in any query to distinguish columns in different tables that have the same name. In some systems, table names qualified with the database name can be used to perform cross-database queries. As always, the query can contain an ORDER BY clause. Figure 22.19 depicts a portion of the results of the preceding query, ordered by lastName

and firstName. \[_Note:_ To save space, we split the result of the query into two columns, each containing the firstName, lastName and isbn columns.\]

**Software Engineering Observation 22.2** _If a SQL statement includes columns with the same name from multiple tables, the statement must precede those column names with their table names and a dot (e.g., authors.authorID)._ 22.2

**Common Programming Error 22.5** \_Failure to qualify names for columns that have the same name in two or more tables is an error.\_22.2

**22.4.5 INSERT Statement** The INSERT statement inserts a row into a table. The basic form of this statement is

INSERT INTO _tableName_ ( _columnName1_, _columnName2_, _…_, _columnNameN_ ) VALUES ( _value1_, _value2_, _…_, _valueN_ )

where _tableName_ is the table in which to insert the row. The _tableName_ is followed by a comma-separated list of column names in parentheses (this list is not required if the IN-

SERT operation specifies a value for every column of the table in the correct order). The list of column names is followed by the SQL keyword VALUES and a comma-separated list of values in parentheses. The values specified here must match the columns specified after the table name in both order and type (e.g., if _columnName1_ is supposed to be the firstName column, then _value1_ should be a string in single quotes representing the first name).

firstName lastName isbn firstName lastName isbn

David Choffnes 0131828274 Paul Deitel 0131869000

Harvey Deitel 0131869000 Paul Deitel 0131525239

Harvey Deitel 0131525239 Paul Deitel 0132222205

Harvey Deitel 0132222205 Paul Deitel 0131857576

Harvey Deitel 0131857576 Paul Deitel 0132404168

Harvey Deitel 0132404168 Paul Deitel 0131450913

Harvey Deitel 0131450913 Paul Deitel 0131869000

Harvey Deitel 0131869000 Paul Deitel 0131828274

Harvey Deitel 0131828274 Andrew Goldberg 0131450913

**Fig. 22.19** | Sampling of authors and ISBNs for the books they have written in ascending order by lastName and firstName.

**892** Chapter 22 Database: SQL, MySQL, ADO.NET 2.0 and Java DB

**Good Programming Practice 22.1** _Always explicitly list the columns when inserting rows. If the table’s column order changes or a new column is added, omitting the columns list may cause an error._ 22.1

The INSERT statement

INSERT INTO authors ( firstName, lastName ) VALUES ( 'Sue', 'Smith' )

inserts a row into the authors table. The statement indicates that values are provided for the firstName and lastName columns. The corresponding values are 'Sue' and 'Smith'. We do not specify an authorID in this example because authorID is an autoincremented column in the authors table. For every row added to this table, the database assigns a unique authorID value that is the next value in the autoincremented sequence (i.e., 1, 2, 3 and so on). In this case, Sue Smith would be assigned authorID number 5. Figure 22.20 shows the authors table after the INSERT operation. \[_Note:_ Not every database manage- ment system supports autoincremented columns. Check the documentation for your DBMS for alternatives to autoincremented columns.\]

**Common Programming Error 22.6** _It is normally an error to specify a value for an autoincrement column._ 22.2

**Common Programming Error 22.7** _SQL uses the single-quote (') character as a delimiter for strings. To specify a string containing a single quote (e.g., O’Malley) in a SQL statement, the string must have two single quotes in the position where the single-quote character appears in the string (e.g., 'O''Malley'). The first of the two single-quote characters acts as an escape character for the second. Not escaping single- quote characters in a string that is part of a SQL statement is a SQL syntax error._ 22.7

**22.4.6 UPDATE Statement** An UPDATE statement modifies data in a table. The basic form of the UPDATE statement is

UPDATE _tableName_ SET _columnName1_ \= _value1_, _columnName2_ \= _value2_, …, _columnNameN_ \= _valueN_ WHERE _criteria_

authorID firstName lastName

1 Harvey Deitel

2 Paul Deitel

3 Andrew Goldberg

4 David Choffnes

5 Sue Smith

**Fig. 22.20** | Sample data from table Authors after an INSERT operation.

22.4 SQL **893**

where _tableName_ is the table to update. The _tableName_ is followed by keyword SET and a comma-separated list of column name/value pairs in the format _columnName_ \= _value_. The _value_ can be an expression that yields a value. The optional WHERE clause provides criteria that determine which rows to update. Though not required, the WHERE clause is typically used, unless a change is to be made to every row. The UPDATE statement

UPDATE authors SET lastName = 'Jones' WHERE lastName = 'Smith' AND firstName = 'Sue'

updates a row in the authors table. The statement indicates that lastName will be assigned the value Jones for the row in which lastName is equal to Smith and firstName is equal to Sue. \[_Note:_ If there are multiple rows with the first name “Sue” and the last name “Smith,” this statement will modify all such rows to have the last name “Jones.”\] If we know the authorID in advance of the UPDATE operation (possibly because we searched for it previously), the WHERE clause can be simplified as follows:

WHERE authorID = 5

Figure 22.21 shows the authors table after the UPDATE operation has taken place.

**22.4.7 DELETE Statement** A SQL DELETE statement removes rows from a table. The basic form of a DELETE is

DELETE FROM _tableName_ WHERE _criteria_

where _tableName_ is the table from which to delete. The optional WHERE clause specifies the criteria used to determine which rows to delete. If this clause is omitted, all the table’s rows are deleted. The DELETE statement

DELETE FROM authors WHERE lastName = 'Jones' AND firstName = 'Sue'

deletes the row (or rows) for Sue Jones in the authors table. If we know the authorID in advance of the DELETE operation, the WHERE clause can be simplified as follows:

WHERE authorID = 5

Figure 22.22 shows the authors table after the DELETE operation has taken place.

authorID firstName lastName

1 Harvey Deitel

2 Paul Deitel

3 Andrew Goldberg

4 David Choffnes

5 Sue Jones

**Fig. 22.21** | Sample data from table authors after an UPDATE operation.

**894** Chapter 22 Database: SQL, MySQL, ADO.NET 2.0 and Java DB

**22.5 MySQL** In 1994, TcX, a Swedish consulting firm, needed a fast and flexible way to access its tables. Unable to find a database server that could accomplish the required task adequately, Michael Widenius, the principal developer at TcX, decided to create his own database server. The resulting product was called _MySQL_ (pronounced “my sequel”), a robust and scalable relational database management system (RDBMS).

MySQL is a multiuser, multithreaded (i.e., allows multiple simultaneous connec- tions) RDBMS server that uses SQL to interact with and manipulate data. The MySQL Manual (www.mysql.com/why-mysql/topreasons.html) lists numerous benefits of MySQL. A few important benefits include:

**1\.** Scalability. You can embed in an application or use it in massive data warehous- ing environments.

**2\.** Performance. You can optimize performance based on the purpose of the data- base in your application.

**3\.** Support for many programming languages. Later chapters demonstrate how to ac- cess a MySQL database from PHP (Chapter 23) and Ruby on Rails (Chapter 24).

**4\.** Implementations of MySQL for Windows, Mac OS X, Linux and UNIX.

**5\.** Handling large databases (e.g., tens of thousands of tables with millions of rows).

For these reasons and more, MySQL is the database of choice for many businesses, universities and individuals. MySQL is an open source software product. \[_Note:_ Under certain situations, a commercial license is required for MySQL. See www.mysql.com/

company/legal/licensing/ for details\]

**22.6 Instructions for Installing MySQL MySQL 5.0 Community Edition** is an open source database management system that ex- ecutes on many platforms, including Windows, Solaris, Linux, and Macintosh. Complete information about MySQL is available from www.mysql.com.

**_Installing MySQL_** To install MySQL Community Edition:

**1\.** To learn about the installation requirements for your platform, visit the site dev.mysql.com/doc/refman/5.0/en/general-installation-issues.html.

authorID firstName lastName

1 Harvey Deitel

2 Paul Deitel

3 Andrew Goldberg

4 David Choffnes

**Fig. 22.22** | Sample data from table authors after a DELETE operation.

22.7 Instructions for Setting Up a MySQL User Account **895**

**2\.** Visit dev.mysql.com/downloads/mysql/5.0.html and download the installer for your platform. For our MySQL examples, you need only the Windows Essen- tials package on Microsoft Windows, or the Standard package on most other plat- forms. \[_Note:_ For these instructions, we assume you are running Microsoft Windows. Complete installation instructions for other platforms are available at dev.mysql.com/doc/refman/5.0/en/installing.html.\]

**3\.** Double click mysql-essential-5.0.45-win32.msi to start the installer. \[_Note:_ This filename may differ, based on the current version of MySQL 5.0.\]

**4\.** Choose **Typical** for the **Setup Type** and click **Next >**. Then click **Install**.

When the installation completes, you will be asked to set up an account on MySQL.com. If you do not wish to do this, select **Skip Sign-up** and click **Next >**. After completing the sign-up process or skipping it, you can configure the MySQL Server. Click **Finish** to start the **MySQL Server Instance Configuration Wizard**. To configure the server:

**1\.** Click **Next >**, then select **Standard Configuration** and click **Next >** again.

**2\.** You have the option of installing MySQL as a Windows service, which enables the MySQL server to begin executing automatically each time your system starts. For our examples, this is unnecessary, so uncheck **Install as a Windows Service**, then check **Include Bin Directory in Windows PATH**. This will enable you to use the MySQL commands in the Windows Command Prompt.

**3\.** Click **Next >**, then click **Execute** to perform the server configuration.

**4\.** Click **Finish** to close the wizard.

**22.7 Instructions for Setting Up a MySQL User Account** For the MySQL examples to execute correctly, you need to set up a user account that al- lows users to create, delete and modify a database. After MySQL is installed, follow the steps below to set up a user account (these steps assume MySQL is installed in its default installation directory):

**1\.** Open a Command Prompt and start the database server by executing the com- mand mysqld-nt.exe. (On Linux, execute mysqld start from a shell or terminal window.) Note that this command has no output—it simply starts the MySQL server. Do not close this window—doing so terminates the server.

**2\.** Next, you’ll start the **MySQL command-line client tool** so you can set up a user account, open another Command Prompt and execute the command

mysql -h localhost -u root

The -h option indicates the host (i.e., computer) on which the MySQL server is running—in this case your local computer (localhost). The -u option indicates the user account that will be used to log in to the server—root is the default user account that is created during installation to allow you to configure the server. Once you’ve logged in, you’ll see a mysql> prompt at which you can type com- mands to interact with the MySQL server.

**896** Chapter 22 Database: SQL, MySQL, ADO.NET 2.0 and Java DB

**3\.** Next, you’ll add the iw3htp4 user account to the mysql built-in database. To cre- ate the iw3htp4 user account with the password iw3htp4, execute the following commands from the mysql> prompt:

create user 'iw3htp4'@'localhost' identified by 'iw3htp4';

grant select, insert, update, delete, create, drop, references, execute on \*.\* to 'iw3htp4'@'localhost';

This creates the iw3htp4 user with the privileges needed to create the databases used in this chapter and manipulate those databases.

**4\.** Type the command

exit;

to terminate the MySQL monitor.

**22.8 Creating a Database in MySQL** For each MySQL database we discuss in this book, we provide a SQL script in a file with the .sql extension that sets up the database and its tables. You can execute these scripts in the MySQL command-line client tool. In the examples directory for this chapter, you’ll find the SQL script books.sql to create the books database. For the following steps, we assume that the MySQL server (mysqld-nt.exe) is still running. To execute the books.sql script:

**1\.** Open a command prompt and use the cd command to change directories to the location that contains the books.sql script.

**2\.** Start the MySQL monitor by typing

mysql -h localhost -u iw3htp4 -p

The -p option prompts you for the password for the iw3htp4 user account. When prompted, enter the password iw3htp4.

**3\.** Execute the script by typing

source books.sql;

This creates a books database in the server’s data directory—located on Win- dows at C:\\Program Files\\MySQL\\MySQL Server 5.0\\data by default.

**4\.** Type the command

exit;

to terminate the MySQL command-line client tool. You are now ready to use your MySQL database.

**22.9 ADO.NET Object Model** Several examples in Chapter 25, ASP.NET 2.0 and ASP.NET Ajax, use ADO.NET 2.0 to access and manipulate SQL Server 2005 Express databases. The **ADO.NET object model** provides an API for accessing database management systems programmatically. ADO.NET was created for the .NET framework to replace Microsoft’s ActiveX Data Ob-

22.9 ADO.NET Object Model **897**

jects™ (ADO) technology. Microsoft’s Visual Studio IDE features visual programming tools that simplify the process of using a database in your projects. While you may not need to work directly with many ADO.NET objects to develop simple applications, basic knowledge of how the ADO.NET object model works is important for understanding data access in Visual Basic (the programming language we use in Chapter 25).

**_Namespaces System.Data, System.Data.OleDb and System.Data.SqlClient_** Namespace **System.Data** is the root namespace for the ADO.NET API. The other impor- tant ADO.NET namespaces, **System.Data.OleDb** and **System.Data.SqlClient**, contain classes that enable programs to connect with and manipulate **data sources**—locations that contain data, such as a database or an XML file. Namespace System.Data.OleDb contains classes that are designed to work with any data source that supports the OLE DB API, whereas System.Data.SqlClient contains classes that are optimized to work with Mi- crosoft SQL Server databases. The Chapter 25 examples manipulate SQL Server 2005 Ex- press databases, so we use the classes of namespace System.Data.SqlClient. SQL Server 2005 Express is available at msdn.microsoft.com/vstudio/express/sql/default.aspx.

An object of class **SqlConnection** (namespace System.Data.SqlClient) represents a connection to a data source—specifically a Microsoft SQL Server database. A SqlConnec-

tion object keeps track of the location of the data source and any settings that specify how the data source is to be accessed. A connection is either **active** (i.e., open and permitting data to be sent to and retrieved from the data source) or **closed**.

An object of class **SqlCommand** (namespace System.Data.SqlClient) represents a SQL command that a DBMS can execute on a database. A program can use SqlCommand

objects to manipulate a data source through a SqlConnection. The program must open the connection to the data source before executing one or more SqlCommands and close the connection once no further access to the data source is required. A connection that remains active for some length of time to permit multiple data operations is known as a **persistent connection**.

Class **DataTable** (namespace System.Data) represents a table of data. A DataTable

contains a collection of **DataRows** that represent the table’s data. A DataTable also has a collection of **DataColumns** that describe the columns in a table. DataRow and DataColumn

are both located in namespace System.Data. An object of class **System.Data.DataSet**, which consists of a set of DataTables and the relationships among them, represents a **cache** of data—data that a program stores temporarily in local memory. The structure of a DataSet mimics the structure of a relational database.

**_ADO.NET’s Disconnected Model_** An advantage of using class DataSet is that it is **disconnected**—the program does not need a persistent connection to the data source to work with data in a DataSet. Instead, the pro- gram connects to the data source to **populate the DataSet** (i.e., fill the DataSet’s Data- Tables with data), but disconnects from the data source immediately after retrieving the desired data. The program then accesses and potentially manipulates the data stored in the DataSet. The program operates on this local cache of data, rather than the original data in the data source. If the program makes changes to the data in the DataSet that need to be permanently saved in the data source, the program reconnects to the data source to per- form an update, then disconnects promptly. Thus the program does not require any active, persistent connection to the data source.

**898** Chapter 22 Database: SQL, MySQL, ADO.NET 2.0 and Java DB

An object of class **SqlDataAdapter** (namespace System.Data.SqlClient) connects to a SQL Server data source and executes SQL statements to both populate a DataSet and update the data source based on the current contents of a DataSet. A SqlDataAdapter

maintains a SqlConnection object that it opens and closes as needed to perform these operations, using SqlCommands.

**22.10 Java DB/Apache Derby** As of the Java SE 6 Development Kit (JDK), Sun Microsystems now bundles the open source, pure Java database **Java DB** (the Sun branded version of Apache Derby) with the JDK. Chapters 27–28 use Java DB in data-driven web applications. Similar to MySQL, Java DB has both an embedded version and a network (client/server) version. The tools we use in Chapters 27–28 come with Java DB. For those examples, we use Java DB’s net- work version, and we provide all the information you need to configure each example’s database. You can learn more about Apache Derby at db.apache.org/derby. You can learn more about Java DB at developers.sun.com/javadb/.

**22.11 Wrap-Up** In this chapter, you learned basic database concepts and how to interact with data in a da- tabase using SQL. You learned about the SQL statements SELECT, INSERT, UPDATE and DE-

LETE, as well as clauses such as WHERE, ORDER BY and INNER JOIN. You learned how to install MySQL, to create and configure a MySQL user account, and to execute scripts that create databases in MySQL. We also discussed ADO.NET 2.0 and introduced Java DB. In the next chapter, you’ll learn one of the most popular server-side scripting languages—PHP.

**22.12 Web Resources** Many database-related resources are available on the web. This section lists several data- base resources. www.sql.org

The sql.org site is an online resource that provides a tutorial on the SQL programming language. It offers links to news groups, discussion forums, free software and various database vendors. www.deitel.com/mysql/

The Deitel MySQL Resource Center focuses on the vast amount of free MySQL content available online, plus some for-sale items. Start your search here for tools, downloads, tutorials, podcasts, wikis, documentation, conferences, FAQs, books, sample chapters, articles, newsgroups, forums, jobs, contract opportunities, and more that will help you develop MySQL database applications. www.mysql.com

This site is the MySQL database home page. You can download the latest version of MySQL and access its online documentation. www.mysql.com/products/enterprise/server.html

Introduction to the MySQL database server and links to its documentation and download sites. dev.mysql.com/doc/mysql/en/index.html

MySQL reference manual. developers.sun.com/prodtech/javadb/reference/docs/10.2.1.6/devguide/index.html

The _Java DB Developer’s Guide_.

22.12 Web Resources **899**

www.microsoft.com/sql

The _Microsoft SQL Server_ website contains product information, technical support, SQL news and tips on using the SQL Server to solve business problems. msdn.microsoft.com/vstudio/express/sql/

The _Microsoft SQL Server Express_ website. www.w3schools.com/sql

The _SQL School_ website provides a tutorial on basic to advanced SQL commands. The site contains a short quiz that reinforces SQL concepts. www.sqlmag.com

_SQL Server Magazine_ is an excellent SQL Server resource. Subscribers receive monthly issues filled with articles on SQL design and information on current developments involving SQL. Certain ar- ticles are available for free at the website. db.apache.org/derby/

The Apache Derby website provides downloads and resources for Apache Derby.

**Summary _Section 22.1 Introduction_** • A database is an integrated collection of data. A database management system (DBMS) provides

mechanisms for storing, organizing, retrieving and modifying data.

• Today’s most popular database management systems are relational database systems.

• SQL is the international standard language used almost universally with relational database sys- tems to perform queries and manipulate data.

• Programs connect to, and interact with, relational databases systems via an interface—software that facilitates communications between a database management system and a program.

**_Section 22.2 Relational Databases_** • A relational database stores data in tables. Tables are composed of rows, and rows are composed

of columns in which values are stored.

• A primary key provides a unique value that cannot be duplicated in other rows of the same table.

• Each column of a table represents a different attribute in a row of data.

• The primary key can be composed of more than one column.

• SQL provides a rich set of language constructs that enable you to define complex queries to re- trieve data from a database.

• Every column in a primary key must have a value, and the value of the primary key must be unique. This is known as the Rule of Entity Integrity.

• A one-to-many relationship between tables indicates that a row in one table can have many re- lated rows in a separate table.

• A foreign key is a column in a table that matches the primary-key column in another table.

• The foreign key helps maintain the Rule of Referential Integrity: Every foreign-key value must appear as another table’s primary-key value. Foreign keys can be used to combine information from multiple tables. There is a one-to-many relationship between a primary key and its corre- sponding foreign key.

**900** Chapter 22 Database: SQL, MySQL, ADO.NET 2.0 and Java DB

**_Section 22.4.1 Basic SELECT Query_** • The basic form of a query is

SELECT \* FROM _tableName_

where the asterisk (\*) indicates that all columns from _tableName_ should be selected, and _table- Name_ specifies the table in the database from which rows will be retrieved.

• To retrieve specific columns from a table, replace the asterisk (\*) with a comma-separated list of column names.

**_Section 22.4.2 WHERE Clause_** • The optional WHERE clause in a query specifies the selection criteria for the query. The basic form

of a query with selection criteria is

SELECT _columnName1_, _columnName2_, _…_ FROM _tableName_ WHERE _criteria_

• The WHERE clause can contain operators <, >, <=, >=, =, <> and LIKE. Operator LIKE is used for string pattern matching with wildcard characters percent (%) and underscore (\_).

• A percent character (%) in a pattern indicates that a string matching the pattern can have zero or more characters at the percent character’s location in the pattern.

• An underscore (\_) in the pattern string indicates a single character at that position in the pattern.

**_Section 22.4.3 ORDER BY Clause_** • The result of a query can be sorted in ascending or descending order using the optional ORDER BY

clause. The simplest form of an ORDER BY clause is

SELECT _columnName1_, _columnName2_, _…_ FROM _tableName_ ORDER BY _column_ ASC SELECT _columnName1_, _columnName2_, _…_ FROM _tableName_ ORDER BY _column_ DESC

where ASC specifies ascending order, DESC specifies descending order and _column_ specifies the col- umn on which the sort is based. The default sorting order is ascending, so ASC is optional.

• Multiple columns can be used for ordering purposes with an ORDER BY clause of the form

ORDER BY _column1 sortingOrder_, _column2 sortingOrder_, _…_

• The WHERE and ORDER BY clauses can be combined in one query. If used, ORDER BY must be the last clause in the query.

**_Section 22.4.4 Merging Data from Multiple Tables: INNER JOIN_** • An INNER JOIN combines rows from two tables by matching values in columns that are common

to the tables. The basic form for the INNER JOIN operator is:

SELECT _columnName1, columnName2, …_ FROM _table1_ INNER JOIN _table2_

ON _table1.columnName_ \= _table2.columnName_

The ON clause specifies a condition that determines which rows are joined. This condition often compares columns from each table If a SQL statement uses columns with the same name from multiple tables, the column names must be fully qualified by prefixing them with their table names and a dot (.).

**_Section 22.4.5 INSERT Statement_** • An INSERT statement inserts a new row into a table. The basic form of this statement is

INSERT INTO _tableName_ ( _columnName1_, _columnName2_, _…_, _columnNameN_ ) VALUES ( _value1_, _value2_, _…_, _valueN_ )

Summary **901**

where _tableName_ is the table in which to insert the row. The _tableName_ is followed by a comma- separated list of column names in parentheses. The list of column names is followed by the SQL keyword VALUES and a comma-separated list of values in parentheses.

• SQL uses single quotes (') as the delimiter for strings. To specify a string containing a single quote in SQL, the single quote must be escaped with another single quote.

**_Section 22.4.6 UPDATE Statement_** • An UPDATE statement modifies data in a table. The basic form of an UPDATE statement is

UPDATE _tableName_ SET _columnName1_ \= _value1_, _columnName2_ \= _value2_, …, _columnNameN_ \= _valueN_ WHERE _criteria_

where _tableName_ is the table in which to update data. The _tableName_ is followed by keyword SET

and a comma-separated list of column name/value pairs in the format _columnName_ \= _value_. The optional WHERE clause _criteria_ determines which rows to update.

**_Section 22.4.7 DELETE Statement_** • A DELETE statement removes rows from a table. The simplest form for a DELETE statement is

DELETE FROM _tableName_ WHERE _criteria_

where _tableName_ is the table from which to delete a row (or rows). The optional WHERE _criteria_ determines which rows to delete. If this clause is omitted, all the table’s rows are deleted.

**_Section 22.5 MySQL_** • MySQL (pronounced “my sequel”) is a robust and scalable relational database management sys-

tem (RDBMS) that was created by the Swedish consulting firm TcX in 1994.

• MySQL is a multiuser, multithreaded RDBMS server that uses SQL to interact with and manip- ulate data.

• Multithreading capabilities enable MySQL database to perform multiple tasks concurrently, al- lowing the server to process client requests efficiently.

• Implementations of MySQL are available for Windows, Mac OS X, Linux and UNIX.

**_Section 22.9 ADO.NET Object Model_** • The ADO.NET object model provides an API for accessing database systems programmatically.

• ADO.NET was created for the .NET framework to replace Microsoft’s ActiveX Data Objects (ADO) technology.

• Namespace System.Data is the root namespace for the ADO.NET API.

• Namespace System.Data.OleDb contains classes that are designed to work with any data source that supports the OLE DB API, whereas System.Data.SqlClient contains classes that are opti- mized to work with Microsoft SQL Server databases.

• An object of class SqlConnection represents a connection to a SQL Server data source.

• A SqlConnection object keeps track of the location of the data source and any settings that spec- ify how the data source is to be accessed.

• A SqlCommand object represents a SQL command that a DBMS can execute on a database.

• A connection that remains active for some length of time to permit multiple data operations is known as a persistent connection.

• A DataTable contains a collection of DataRows that represent the table’s data. A DataTable also has a collection of DataColumns that describe the columns in a table.

**902** Chapter 22 Database: SQL, MySQL, ADO.NET 2.0 and Java DB

• A DataSet, which consists of a set of DataTables and the relationships among them, represents a cache of data—data that a program stores temporarily in local memory.

• The structure of a DataSet mimics the structure of a relational database.

• An advantage of using class DataSet is that it is disconnected—the program does not need a per- sistent connection to the data source to work with data in a DataSet.

• A SqlDataAdapter object connects to a SQL Server data source and executes SQL statements to both populate a DataSet and update the data source based on the current contents of a DataSet.

**_Section 22.10 Java DB/Apache Derby_** • As of the Java SE 6 Development Kit (JDK), Sun Microsystems now bundles the open source,

pure Java database Java DB (the Sun branded version of Apache Derby) with the JDK.

**Terminology** % SQL wildcard character \* SQL wildcard character \_ SQL wildcard character active database connection ADO.NET object model AND SQL keyword Apache Derby ASC SQL keyword ascending order asterisk (\*) SQL wildcard character autoincremented column value column column number in a result set combine records from tables data source database database management system (DBMS) DataColumn class DataRow class DataSet class DataTable class DELETE SQL statement DESC SQL keyword disconnected object model entity-relationship diagram escape character foreign key FROM SQL clause GROUP BY SQL clause INNER JOIN SQL clause INSERT SQL statement Java DB joining database tables LIKE SQL clause many-to-many relationship Microsoft SQL Server

MySQL mysqld-nt.exe

ON SQL clause one-to-many relationship ORDER BY SQL clause pattern matching percent (%) SQL wildcard character persistent database connection populating a DataSet

predicate primary key qualified name query relational database relational database management system

(RDBMS) relational database table row Rule of Entity Integrity Rule of Referential Integrity SELECT SQL keyword selecting data from a table selection criteria SET SQL clause single-quote character .sql filename extension SQL script SqlCommand class SqlConnection class SqlDataAdapter class Structured Query Language (SQL) System.Data namespace System.Data.OleDb namespace System.Data.SqlClient namespace table underscore (\_) SQL wildcard character

Self-Review Exercise **903**

UPDATE SQL statement VALUES SQL clause

WHERE SQL clause

**Self-Review Exercise 22.1** Fill in the blanks in each of the following statements:

a) The international standard database language is . b) A table in a database consists of and . c) The uniquely identifies each row in a table. d) SQL keyword is followed by the selection criteria that specify the rows to

select in a query. e) SQL keywords specify the order in which rows are sorted in a query. f) Merging rows from multiple database tables is called the tables. g) A(n) is an organized collection of data. h) A(n) is a set of columns whose values match the primary key values of an-

other table.

**Answers to Self-Review Exercise 22.1** a) SQL. b) rows, columns. c) primary key. d) WHERE. e) ORDER BY. f) joining. g) database. h) foreign key.

**Exercises 22.2** Define the following terms:

a) Qualified name. b) Rule of Referential Integrity. c) Rule of Entity Integrity. d) System.Data. e) selection criteria.

**22.3** State the purpose of the following SQL keywords: a) ASC

b) FROM

c) DESC

d) INSERT

e) LIKE

f) UPDATE

g) SET

h) VALUES

i) ON

**22.4** Write SQL queries for the books database (discussed in Section 22.3) that perform each of the following tasks:

a) Select all authors from the Authors table with the columns in the order lastName, firstName and authorID.

b) Select a specific author and list all books for that author. Include the title, year and ISBN number. Order the information alphabetically by title.

c) Add a new author to the Authors table. d) Add a new title for an author (remember that the book must have an entry in the

AuthorISBN table).

**904** Chapter 22 Database: SQL, MySQL, ADO.NET 2.0 and Java DB

**22.5** Fill in the blanks in each of the following statements: a) The states that every column in a primary key must have a value, and the

value of the primary key must be unique b) The states that every foreign-key value must appear as another table’s prima-

ry-key value. c) A(n) in a pattern indicates that a string matching the pattern can have zero

or more characters at the percent character’s location in the pattern. d) Java DB is the Sun branded version of . e) A(n) in a LIKE pattern string indicates a single character at that position in

the pattern. f) There is a(n) relationship between a primary key and its corresponding for-

eign key. g) SQL uses as the delimiter for strings. h) Microsoft’s object model provides an API for accessing database systems pro-

grammatically.

**22.6** Correct each of the following SQL statements that refer to the books database. a) SELECT firstName FROM author WHERE authorID = 3 b) SELECT isbn, title FROM Titles ORDER WITH title DESC

c) INSERT INTO Authors ( authorID, firstName, lastName )

VALUES ( "2", "Jane", "Doe" )

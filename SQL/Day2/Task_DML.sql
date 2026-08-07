CREATE DATABASE CompanyDB;
USE CompanyDB;

CREATE TABLE Employees(
id INT,
name VARCHAR(100),
department VARCHAR(100),
salary INT,
city VARCHAR(100)
);

INSERT INTO Employees
VALUES
(1,'Rahul','Developer',50000,'Chennai'),
(2,'Priya','HR',45000,'Hyderabad'),
(3,'Arun','Developer',65000,'Coimbatore'),
(4,'Kiran','Tester',40000,'Bangalore'),
(5,'Sneha','Developer',55000,'Chennai');

SELECT * FROM Employees;

CREATE TABLE Students(
student_id INT,
student_name VARCHAR(100),
course VARCHAR(100),
age INT,
city VARCHAR(100)
);

INSERT INTO Students
VALUES
(101,'Ajay','BCA',19,'Chennai'),
(102,'Divya','BSc',20,'Madurai'),
(103,'Karthik','BCom',21,'Chennai'),
(104,'Meena','BCA',18,'Salem'),
(105,'Vijay','BSc',22,'Coimbatore'),
(106,'Anu','BCom',19,'Chennai'),
(107,'Ravi','BCA',23,'Erode'),
(108,'Keerthi','BSc',20,'Trichy');

SELECT * FROM Students;

UPDATE Employees
SET salary=75000
WHERE id=3;

SELECT * FROM Employees
WHERE id=3;

UPDATE Employees
SET department='Team Lead',
city='Bangalore'
WHERE id=2;

SELECT * FROM Employees
WHERE id=2;

DELETE FROM Employees
WHERE id=5;

SELECT * FROM Employees;

UPDATE Employees
SET salary=salary+10000
WHERE department='Developer';

SELECT * FROM Employees
WHERE department='Developer';

UPDATE Students
SET city='Coimbatore'
WHERE city='Chennai';

SELECT * FROM Students
WHERE city='Coimbatore';

DELETE FROM Students
WHERE age<20;

SELECT * FROM Students;

CREATE TABLE Products(
product_id INT,
product_name VARCHAR(100),
price INT,
category VARCHAR(100)
);

INSERT INTO Products
VALUES
(1,'Laptop',60000,'Electronics'),
(2,'Mobile',25000,'Electronics'),
(3,'Chair',5000,'Furniture'),
(4,'Table',8000,'Furniture'),
(5,'Headphones',3000,'Accessories');

SELECT * FROM Products;

UPDATE Products
SET price=65000
WHERE product_id=1;

DELETE FROM Products
WHERE product_id=5;

SELECT * FROM Products;
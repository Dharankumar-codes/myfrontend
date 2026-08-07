CREATE DATABASE CompanyDB;
SHOW DATABASES;
USE CompanyDB;
CREATE TABLE Employees (
    emp_id INT,
    emp_name VARCHAR(100),
    department VARCHAR(100),
    salary INT,
    city VARCHAR(100)
);
DESC Employees;
ALTER TABLE Employees
ADD email VARCHAR(100),
ADD phone INT,
ADD experience INT;
DESC Employees;
ALTER TABLE Employees
MODIFY salary BIGINT,
MODIFY phone BIGINT;
DESC Employees;
ALTER TABLE Employees
RENAME COLUMN emp_name TO employee_name;
ALTER TABLE Employees
RENAME COLUMN city TO location;
DESC Employees;
ALTER TABLE Employees
DROP COLUMN experience,
DROP COLUMN email;
DESC Employees;
ALTER TABLE Employees
RENAME TO EmployeeDetails;
SHOW TABLES;
CREATE TABLE Students (
    student_id INT,
    student_name VARCHAR(100),
    course VARCHAR(100),
    age INT,
    city VARCHAR(100)
);
DESC Students;
ALTER TABLE Students
ADD mobile BIGINT;
DESC Students;
TRUNCATE TABLE Students;
DESC Students;
DROP TABLE Students;
DROP TABLE EmployeeDetails;
DROP DATABASE CompanyDB;
SHOW DATABASES;
SELECT DATABASE();
SHOW DATABASES;
CREATE DATABASE TestDB;
SHOW DATABASES;
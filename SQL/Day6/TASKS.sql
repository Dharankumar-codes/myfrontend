DROP DATABASE IF EXISTS CompanyDB;

CREATE DATABASE CompanyDB;

USE CompanyDB;


-- Task 1 - Create Database

SHOW DATABASES;

USE CompanyDB;


-- Task 2 - Create Table

CREATE TABLE Employees (
    id INT,
    name VARCHAR(100),
    department VARCHAR(100),
    salary INT,
    city VARCHAR(100)
);

DESC Employees;


-- Task 3 - Alter Table

ALTER TABLE Employees
ADD email VARCHAR(150);

ALTER TABLE Employees
MODIFY salary BIGINT;

ALTER TABLE Employees
RENAME COLUMN city TO location;

DESC Employees;


-- Task 4 - Insert Records

INSERT INTO Employees (id, name, department, salary, location, email)
VALUES
(1, 'Arun', 'IT', 60000, 'Chennai', 'arun@gmail.com'),
(2, 'Bala', 'IT', 70000, 'Chennai', 'bala@gmail.com'),
(3, 'Charan', 'IT', 65000, 'Chennai', 'charan@gmail.com'),
(4, 'Deepa', 'HR', 50000, 'Bangalore', 'deepa@gmail.com'),
(5, 'Elango', 'HR', 55000, 'Bangalore', 'elango@gmail.com'),
(6, 'Fathima', 'HR', 52000, 'Bangalore', 'fathima@gmail.com'),
(7, 'Gokul', 'Finance', 80000, 'Mumbai', 'gokul@gmail.com'),
(8, 'Hari', 'Finance', 75000, 'Mumbai', 'hari@gmail.com'),
(9, 'Ishita', 'Sales', 45000, 'Hyderabad', 'ishita@gmail.com'),
(10, 'Jeeva', 'Sales', 48000, 'Delhi', 'jeeva@gmail.com');

SELECT * FROM Employees;


-- Task 5 - Update Records

UPDATE Employees
SET salary = 75000
WHERE id = 1;

UPDATE Employees
SET department = 'Finance'
WHERE id = 4;

UPDATE Employees
SET salary = 60000,
    location = 'Chennai'
WHERE id = 5;

SELECT * FROM Employees;


-- Task 6 - Delete Records

DELETE FROM Employees
WHERE id = 10;

DELETE FROM Employees
WHERE location = 'Hyderabad';

SELECT * FROM Employees;


-- Task 7 - Basic SELECT

SELECT * FROM Employees;

SELECT name, salary
FROM Employees;

SELECT DISTINCT department
FROM Employees;

SELECT *
FROM Employees
WHERE salary > 40000;


-- Task 8 - WHERE Conditions

SELECT *
FROM Employees
WHERE salary > 50000
AND department = 'IT';

SELECT *
FROM Employees
WHERE department = 'IT'
OR department = 'Finance';

SELECT *
FROM Employees
WHERE department IN ('IT', 'HR');

SELECT *
FROM Employees
WHERE department NOT IN ('IT', 'HR');

SELECT *
FROM Employees
WHERE salary BETWEEN 50000 AND 70000;

SELECT *
FROM Employees
WHERE name LIKE 'A%';


-- Task 9 - ORDER BY & LIMIT

SELECT *
FROM Employees
ORDER BY salary DESC
LIMIT 1;

SELECT *
FROM Employees
ORDER BY salary ASC
LIMIT 1;

SELECT *
FROM Employees
ORDER BY salary DESC
LIMIT 5;

SELECT *
FROM Employees
ORDER BY id DESC
LIMIT 3;


-- Task 10 - Aggregate Functions

SELECT COUNT(*) AS employee_count
FROM Employees;

SELECT SUM(salary) AS total_salary
FROM Employees;

SELECT AVG(salary) AS average_salary
FROM Employees;

SELECT MAX(salary) AS highest_salary
FROM Employees;

SELECT MIN(salary) AS lowest_salary
FROM Employees;


-- Task 11 - GROUP BY

SELECT department, COUNT(*) AS employee_count
FROM Employees
GROUP BY department;

SELECT department, SUM(salary) AS total_salary
FROM Employees
GROUP BY department;

SELECT location, AVG(salary) AS average_salary
FROM Employees
GROUP BY location;

SELECT department, MAX(salary) AS highest_salary
FROM Employees
GROUP BY department;


-- Task 12 - HAVING

SELECT department, COUNT(*) AS employee_count
FROM Employees
GROUP BY department
HAVING COUNT(*) > 2;

SELECT location, AVG(salary) AS average_salary
FROM Employees
GROUP BY location
HAVING AVG(salary) > 50000;

SELECT department, SUM(salary) AS total_salary
FROM Employees
GROUP BY department
HAVING SUM(salary) > 200000;


-- Task 13 - String Functions

SELECT UPPER(name) AS upper_name
FROM Employees;

SELECT LOWER(name) AS lower_name
FROM Employees;

SELECT name, LENGTH(name) AS name_length
FROM Employees;

SELECT CONCAT(name, ' - ', department) AS employee_details
FROM Employees;

SELECT SUBSTRING(name, 1, 3) AS first_three_characters
FROM Employees;

SELECT REPLACE(name, 'a', '@') AS replaced_name
FROM Employees;

SELECT LEFT(name, 3) AS left_characters
FROM Employees;

SELECT RIGHT(name, 3) AS right_characters
FROM Employees;

SELECT REVERSE(name) AS reversed_name
FROM Employees;

SELECT TRIM(name) AS trimmed_name
FROM Employees;


-- Task 14 - Date Functions

SELECT CURDATE() AS current_date;

SELECT NOW() AS current_datetime;

SELECT YEAR(CURDATE()) AS current_year;

SELECT MONTH(CURDATE()) AS current_month;

SELECT DAY(CURDATE()) AS current_day;

SELECT DATE_FORMAT(CURDATE(), '%d-%m-%Y') AS formatted_date;

SELECT DATEDIFF(CURDATE(), '2024-01-01') AS days_difference;


-- Task 15 - Employee Dashboard

SELECT
    department,
    COUNT(*) AS employee_count,
    SUM(salary) AS total_salary,
    AVG(salary) AS average_salary,
    MAX(salary) AS highest_salary,
    MIN(salary) AS lowest_salary
FROM Employees
GROUP BY department
ORDER BY total_salary DESC;


-- Task 16 - HR Analytics Report

SELECT
    location,
    COUNT(*) AS employee_count,
    AVG(salary) AS average_salary
FROM Employees
WHERE salary > 40000
GROUP BY location
HAVING COUNT(*) > 2;


-- Task 17 - Sales Dashboard

SELECT
    department,
    SUM(salary) AS total_salary,
    MAX(salary) AS highest_salary,
    MIN(salary) AS lowest_salary
FROM Employees
GROUP BY department
HAVING AVG(salary) > 60000;


-- Task 18 - Multi Column GROUP BY

SELECT
    department,
    location,
    COUNT(*) AS employee_count,
    SUM(salary) AS total_salary
FROM Employees
GROUP BY department, location
ORDER BY employee_count;
SET SQL_SAFE_UPDATES = 0;

UPDATE Employees
SET salary = 75000
WHERE id = 1;
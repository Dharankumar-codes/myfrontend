-- Question 1 - DBMS vs RDBMS

-- DBMS stores and manages data.
-- RDBMS stores data in tables and supports relationships between tables.


-- Question 2 - DDL, DML, DQL, DCL, TCL

-- DDL: CREATE, ALTER, DROP, TRUNCATE
-- DML: INSERT, UPDATE, DELETE
-- DQL: SELECT
-- DCL: GRANT, REVOKE
-- TCL: COMMIT, ROLLBACK, SAVEPOINT


-- Question 3 - Create Database and Table

CREATE DATABASE IF NOT EXISTS CompanyDB;

USE CompanyDB;

CREATE TABLE IF NOT EXISTS Employees (
    id INT,
    name VARCHAR(100),
    department VARCHAR(100),
    salary INT,
    city VARCHAR(100)
);


-- Question 4 - DELETE, TRUNCATE, DROP

DELETE FROM Employees
WHERE id = 3;

TRUNCATE TABLE Employees;

-- DROP TABLE Employees;


-- Question 5 - CHAR and VARCHAR

-- CHAR is fixed length.
-- VARCHAR is variable length.


-- Question 6 - Insert, Update and Delete

INSERT INTO Employees
(id, name, department, salary, city)
VALUES
(1, 'Arun', 'IT', 60000, 'Chennai'),
(2, 'Bala', 'HR', 50000, 'Bangalore'),
(3, 'Charan', 'Finance', 70000, 'Mumbai'),
(4, 'Rahul', 'IT', 55000, 'Chennai'),
(5, 'Deepa', 'Sales', 45000, 'Delhi');

UPDATE Employees
SET salary = 80000
WHERE id = 3;

DELETE FROM Employees
WHERE name = 'Rahul';


-- Question 7 - Operators

SELECT * FROM Employees
WHERE salary = 60000;

SELECT * FROM Employees
WHERE salary > 50000;

SELECT * FROM Employees
WHERE salary < 60000;

SELECT * FROM Employees
WHERE salary >= 60000;

SELECT * FROM Employees
WHERE salary <= 60000;

SELECT * FROM Employees
WHERE salary != 60000;

SELECT * FROM Employees
WHERE department = 'IT'
AND salary > 50000;

SELECT * FROM Employees
WHERE department = 'IT'
OR department = 'HR';

SELECT * FROM Employees
WHERE department IN ('IT', 'HR');

SELECT * FROM Employees
WHERE salary BETWEEN 40000 AND 70000;

SELECT * FROM Employees
WHERE name LIKE 'A%';


-- Question 8 - ORDER BY and LIMIT

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
ORDER BY name ASC;


-- Question 9 - WHERE and HAVING

SELECT *
FROM Employees
WHERE salary > 50000;

SELECT department, COUNT(*) AS employee_count
FROM Employees
GROUP BY department
HAVING COUNT(*) > 2;


-- Question 10 - Aggregate Functions

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


-- Question 11 - Department Report

SELECT
    department,
    COUNT(*) AS employee_count,
    SUM(salary) AS total_salary,
    AVG(salary) AS average_salary
FROM Employees
GROUP BY department;


-- Question 12 - HAVING

SELECT
    department,
    COUNT(*) AS employee_count,
    AVG(salary) AS average_salary
FROM Employees
GROUP BY department
HAVING COUNT(*) > 3
AND AVG(salary) > 50000;


-- Question 13 - String Functions

SELECT UPPER(name) AS upper_name
FROM Employees;

SELECT LOWER(name) AS lower_name
FROM Employees;

SELECT LENGTH(name) AS name_length
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


-- Question 14 - Date Functions

SELECT CURDATE() AS current_date;

SELECT NOW() AS current_datetime;

SELECT YEAR(CURDATE()) AS current_year;

SELECT MONTH(CURDATE()) AS current_month;

SELECT DAY(CURDATE()) AS current_day;

SELECT DATE_FORMAT(CURDATE(), '%d-%m-%Y') AS formatted_date;

SELECT DATEDIFF(CURDATE(), '2024-01-01') AS days_difference;


-- Question 15 - Interview Challenge

SELECT
    department,
    COUNT(*) AS employee_count,
    SUM(salary) AS total_salary,
    AVG(salary) AS average_salary,
    MAX(salary) AS highest_salary,
    MIN(salary) AS lowest_salary
FROM Employees
WHERE salary > 40000
AND city = 'Chennai'
GROUP BY department
HAVING COUNT(*) > 2
AND AVG(salary) > 60000
ORDER BY total_salary DESC
LIMIT 3;
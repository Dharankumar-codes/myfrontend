-- CREATE DATABASE
CREATE DATABASE LabourDetails;

-- USE DATABASE
USE LabourDetails;

-- CREATE TABLE
CREATE TABLE Labour (
    LabourID INT PRIMARY KEY,
    LabourName VARCHAR(50),
    Age INT,
    Gender VARCHAR(10),
    WorkType VARCHAR(30),
    City VARCHAR(30),
    DailyWage DECIMAL(10,2),
    WorkingDays INT
);

-- INSERT 20 RECORDS
INSERT INTO Labour VALUES
(101,'Ramesh',28,'Male','Mason','Chennai',900,26),
(102,'Suresh',35,'Male','Painter','Madurai',850,24),
(103,'Priya',30,'Female','Electrician','Coimbatore',950,25),
(104,'Kumar',40,'Male','Plumber','Salem',800,22),
(105,'Anitha',27,'Female','Carpenter','Chennai',1000,26),
(106,'Vijay',32,'Male','Mason','Trichy',900,25),
(107,'Deepa',29,'Female','Painter','Madurai',850,23),
(108,'Arun',38,'Male','Electrician','Chennai',950,27),
(109,'Meena',31,'Female','Plumber','Coimbatore',800,24),
(110,'Raj',36,'Male','Carpenter','Salem',1000,26),
(111,'Karthik',26,'Male','Welder','Erode',850,24),
(112,'Divya',29,'Female','Mason','Chennai',920,25),
(113,'Manoj',34,'Male','Painter','Vellore',870,23),
(114,'Keerthana',28,'Female','Electrician','Madurai',980,26),
(115,'Saravanan',39,'Male','Plumber','Trichy',820,22),
(116,'Nisha',25,'Female','Carpenter','Coimbatore',1010,24),
(117,'Hari',33,'Male','Welder','Salem',890,25),
(118,'Lakshmi',30,'Female','Mason','Erode',930,26),
(119,'Prakash',41,'Male','Electrician','Chennai',970,27),
(120,'Kavya',27,'Female','Painter','Vellore',860,23);

-- SELECT
SELECT * FROM Labour;
SELECT LabourName, WorkType, DailyWage FROM Labour;

-- WHERE
SELECT * FROM Labour WHERE City='Chennai';
SELECT * FROM Labour WHERE DailyWage>900;
SELECT * FROM Labour WHERE Age>30;

-- GROUP BY
SELECT City, COUNT(*) AS TotalLabours
FROM Labour
GROUP BY City;

SELECT WorkType, AVG(DailyWage) AS AverageWage
FROM Labour
GROUP BY WorkType;

SELECT City, SUM(WorkingDays) AS TotalWorkingDays
FROM Labour
GROUP BY City;

-- AVG
SELECT AVG(DailyWage) AS AverageDailyWage
FROM Labour;

-- SUM
SELECT SUM(DailyWage) AS TotalDailyWage
FROM Labour;

-- COUNT
SELECT COUNT(*) AS TotalLabours
FROM Labour;

-- MAX
SELECT MAX(DailyWage) AS HighestWage
FROM Labour;

-- MIN
SELECT MIN(DailyWage) AS LowestWage
FROM Labour;

-- ORDER BY
SELECT * FROM Labour
ORDER BY DailyWage DESC;
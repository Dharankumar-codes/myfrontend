-- 1. ELECTION MANAGEMENT SYSTEM

CREATE DATABASE IF NOT EXISTS ElectionDB;
USE ElectionDB;

CREATE TABLE PollingBooths (
    booth_id INT PRIMARY KEY,
    booth_name VARCHAR(100),
    location VARCHAR(100),
    capacity INT
);

CREATE TABLE Voters (
    voter_id INT PRIMARY KEY,
    voter_name VARCHAR(100),
    age INT,
    gender VARCHAR(20),
    address VARCHAR(200),
    booth_id INT,
    FOREIGN KEY (booth_id) REFERENCES PollingBooths(booth_id)
);

CREATE TABLE Candidates (
    candidate_id INT PRIMARY KEY,
    candidate_name VARCHAR(100),
    party VARCHAR(100),
    constituency VARCHAR(100)
);

CREATE TABLE Votes (
    vote_id INT PRIMARY KEY,
    voter_id INT,
    candidate_id INT,
    booth_id INT,
    vote_date DATE,
    FOREIGN KEY (voter_id) REFERENCES Voters(voter_id),
    FOREIGN KEY (candidate_id) REFERENCES Candidates(candidate_id),
    FOREIGN KEY (booth_id) REFERENCES PollingBooths(booth_id)
);


-- 2. HOSPITAL MANAGEMENT SYSTEM

CREATE DATABASE IF NOT EXISTS HospitalDB;
USE HospitalDB;

CREATE TABLE Doctors (
    doctor_id INT PRIMARY KEY,
    doctor_name VARCHAR(100),
    specialization VARCHAR(100),
    phone VARCHAR(20)
);

CREATE TABLE Patients (
    patient_id INT PRIMARY KEY,
    patient_name VARCHAR(100),
    age INT,
    gender VARCHAR(20),
    phone VARCHAR(20)
);

CREATE TABLE Appointments (
    appointment_id INT PRIMARY KEY,
    doctor_id INT,
    patient_id INT,
    appointment_date DATE,
    status VARCHAR(50),
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id),
    FOREIGN KEY (patient_id) REFERENCES Patients(patient_id)
);

CREATE TABLE Treatments (
    treatment_id INT PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    treatment_name VARCHAR(200),
    treatment_date DATE,
    FOREIGN KEY (patient_id) REFERENCES Patients(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id)
);

CREATE TABLE Billing (
    bill_id INT PRIMARY KEY,
    patient_id INT,
    amount DECIMAL(10,2),
    bill_date DATE,
    payment_status VARCHAR(50),
    FOREIGN KEY (patient_id) REFERENCES Patients(patient_id)
);


-- 3. COLLEGE MANAGEMENT SYSTEM

CREATE DATABASE IF NOT EXISTS CollegeDB;
USE CollegeDB;

CREATE TABLE Departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100)
);

CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100),
    email VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES Departments(department_id)
);

CREATE TABLE Faculty (
    faculty_id INT PRIMARY KEY,
    faculty_name VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES Departments(department_id)
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100),
    department_id INT,
    faculty_id INT,
    FOREIGN KEY (department_id) REFERENCES Departments(department_id),
    FOREIGN KEY (faculty_id) REFERENCES Faculty(faculty_id)
);

CREATE TABLE Attendance (
    attendance_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    attendance_date DATE,
    status VARCHAR(20),
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

CREATE TABLE Examinations (
    exam_id INT PRIMARY KEY,
    course_id INT,
    exam_date DATE,
    exam_type VARCHAR(50),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);


-- 4. ONLINE SHOPPING / E-COMMERCE SYSTEM

CREATE DATABASE IF NOT EXISTS EcommerceDB;
USE EcommerceDB;

CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    address VARCHAR(200)
);

CREATE TABLE Products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10,2),
    stock INT,
    category VARCHAR(100)
);

CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    total_amount DECIMAL(10,2),
    status VARCHAR(50),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE OrderItems (
    order_item_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

CREATE TABLE Payments (
    payment_id INT PRIMARY KEY,
    order_id INT,
    payment_date DATE,
    amount DECIMAL(10,2),
    payment_method VARCHAR(50),
    status VARCHAR(50),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);

CREATE TABLE Deliveries (
    delivery_id INT PRIMARY KEY,
    order_id INT,
    delivery_address VARCHAR(200),
    delivery_date DATE,
    status VARCHAR(50),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);


-- 5. TEA SHOP MANAGEMENT SYSTEM

CREATE DATABASE IF NOT EXISTS TeaShopDB;
USE TeaShopDB;

CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(100),
    role VARCHAR(50),
    phone VARCHAR(20),
    salary DECIMAL(10,2)
);

CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    phone VARCHAR(20)
);

CREATE TABLE Products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10,2),
    stock INT
);

CREATE TABLE Bills (
    bill_id INT PRIMARY KEY,
    customer_id INT,
    employee_id INT,
    bill_date DATE,
    total_amount DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (employee_id) REFERENCES Employees(employee_id)
);

CREATE TABLE BillItems (
    bill_item_id INT PRIMARY KEY,
    bill_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10,2),
    FOREIGN KEY (bill_id) REFERENCES Bills(bill_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

CREATE TABLE DailySales (
    sales_id INT PRIMARY KEY,
    sales_date DATE,
    total_sales DECIMAL(10,2),
    total_orders INT
);
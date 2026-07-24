import { useState } from "react";

const App = () => {

  // Task 1
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  // Task 2
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState({
    name: "",
    course: "",
  });

  // Task 3
  const [empName, setEmpName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: "",
  });

  return (
    <>
      {/* Task 1 */}
      <h2>Task 1 - Name Display</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setDisplayName(name)}>
        Submit
      </button>

      <h3>{displayName}</h3>

      <hr />

      {/* Task 2 */}
      <h2>Task 2 - Student Details</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <br /><br />

      <button
        onClick={() =>
          setStudent({
            name: studentName,
            course: course,
          })
        }
      >
        Submit
      </button>

      <h3>Student Name : {student.name}</h3>
      <h3>Course : {student.course}</h3>

      <hr />

      {/* Task 3 */}
      <h2>Task 3 - Employee Details</h2>

      <input
        type="text"
        placeholder="Employee Name"
        value={empName}
        onChange={(e) => setEmpName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <br /><br />

      <button
        onClick={() =>
          setEmployee({
            name: empName,
            department: department,
            salary: salary,
          })
        }
      >
        Submit
      </button>

      <h3>Employee Name : {employee.name}</h3>
      <h3>Department : {employee.department}</h3>
      <h3>Salary : {employee.salary}</h3>
    </>
  );
};

export default App;
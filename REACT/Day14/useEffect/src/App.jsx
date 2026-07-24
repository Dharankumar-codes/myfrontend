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
  const [technology, setTechnology] = useState("");
  const [technologies, setTechnologies] = useState([]);

  // Task 4
  const [studentInput, setStudentInput] = useState("");
  const [studentList, setStudentList] = useState([]);

  return (
    <>
      {/* Task 1 */}
      <h2>Task 1 - Name Submit</h2>

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
      <h2>Task 3 - Add Technology</h2>

      <input
        type="text"
        placeholder="Enter Technology"
        value={technology}
        onChange={(e) => setTechnology(e.target.value)}
      />

      <button
        onClick={() => {
          setTechnologies([...technologies, technology]);
          setTechnology("");
        }}
      >
        Add
      </button>

      {technologies.map((tech, index) => (
        <p key={index}>{tech}</p>
      ))}

      <hr />

      {/* Task 4 */}
      <h2>Task 4 - Student List</h2>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={studentInput}
        onChange={(e) => setStudentInput(e.target.value)}
      />

      <button
        onClick={() => {
          setStudentList([...studentList, studentInput]);
          setStudentInput("");
        }}
      >
        Add Student
      </button>

      {studentList.map((student, index) => (
        <p key={index}>{student}</p>
      ))}
    </>
  );
};

export default App;
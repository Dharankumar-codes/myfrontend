import { useState } from "react";

const App = () => {

  // Task 1
  const [heroes, setHeroes] = useState(["Vijay", "Ajith", "Suriya"]);

  // Task 2
  const [fruits, setFruits] = useState(["Apple", "Orange", "Mango"]);

  // Task 3
  const [student, setStudent] = useState({
    name: "Sudhan",
    course: "JS",
  });

  // Task 4
  const [company, setCompany] = useState({
    company: "Google",
    city: "Chennai",
  });

  // Task 5
  const [students, setStudents] = useState([
    { id: 1, name: "Sudhan" },
    { id: 2, name: "Rahul" },
  ]);

  return (
    <>
      {/* Task 1 */}
      <h2>Task 1 - Heroes</h2>

      {heroes.map((hero, index) => (
        <p key={index}>{hero}</p>
      ))}

      <button
        onClick={() => {
          const newHeroes = [...heroes];
          newHeroes[1] = "SK";
          setHeroes(newHeroes);
        }}
      >
        Change Hero
      </button>

      <hr />

      {/* Task 2 */}
      <h2>Task 2 - Fruits</h2>

      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}

      <button
        onClick={() => {
          const newFruits = [...fruits];
          newFruits[1] = "Banana";
          setFruits(newFruits);
        }}
      >
        Update Fruit
      </button>

      <hr />

      {/* Task 3 */}
      <h2>Task 3 - Object</h2>

      <p>Name : {student.name}</p>
      <p>Course : {student.course}</p>

      <button
        onClick={() =>
          setStudent({
            ...student,
            course: "React",
          })
        }
      >
        Update Course
      </button>

      <hr />

      {/* Task 4 */}
      <h2>Task 4 - Company</h2>

      <p>Company : {company.company}</p>
      <p>City : {company.city}</p>

      <button
        onClick={() =>
          setCompany({
            ...company,
            company: "Microsoft",
          })
        }
      >
        Update Company
      </button>

      <hr />

      {/* Task 5 */}
      <h2>Task 5 - Students</h2>

      {students.map((student) => (
        <p key={student.id}>
          {student.id} - {student.name}
        </p>
      ))}

      <button
        onClick={() => {
          const newStudents = [...students];
          newStudents[1].name = "Vijay";
          setStudents([...newStudents]);
        }}
      >
        Update Student
      </button>
    </>
  );
};

export default App;
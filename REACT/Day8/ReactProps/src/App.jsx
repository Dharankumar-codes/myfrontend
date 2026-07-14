import StudentCard from "./components/StudentCard";
import EmployeeCard from "./components/EmployeeCard";
import StudentList from "./components/StudentList";

const App = () => {
  const employee = {
    name: "Rahul",
    email: "rahul@gmail.com",
    city: "Chennai",
    experience: "3 Years",
  };

  const students = [
    { id: 1, name: "Sudhan", course: "React" },
    { id: 2, name: "Rahul", course: "MERN" },
    { id: 3, name: "Vijay", course: "Node" },
    { id: 4, name: "Kumar", course: "JavaScript" },
    { id: 5, name: "Arun", course: "Angular" },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <StudentCard
          name="Sudhan"
          age={25}
          course="React"
          isPlaced={true}
        />

        <EmployeeCard employee={employee} />

        <StudentList students={students} />
      </div>
    </>
  );
};

export default App;
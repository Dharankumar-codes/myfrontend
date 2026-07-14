const RenderingTasks = () => {
  // Task 1
  const course = "React JS";

  // Task 2
  const price = 50000;
  const discount = 5000;

  // Task 3
  const isLogin = true;

  // Task 4
  const profileImage = null;

  // Task 5
  const email = undefined;

  // Task 6
  const getCompanyName = () => "Google";

  // Task 7
  const heroes = ["Vijay", "Ajith", "Suriya", "SK", "Dhanush"];

  // Task 8
  const employee = {
    name: "Dharan",
    course: "React JS",
    experience: "2 Years",
  };

  // Task 9
  const students = [
    { id: 1, name: "Arun", course: "React JS" },
    { id: 2, name: "Priya", course: "JavaScript" },
    { id: 3, name: "Kumar", course: "HTML & CSS" },
  ];

  // Task 10
  const companyName = "OpenAI";
  const totalEmployees = 5000;
  const isHiring = true;

  const ceo = {
    name: "Sam Altman",
    age: 41,
  };

  const departments = ["HR", "IT", "Marketing", "Finance"];

  const employees = [
    { id: 1, name: "John" },
    { id: 2, name: "David" },
    { id: 3, name: "Sara" },
  ];

  const getLocation = () => "California";

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        React Rendering Methods
      </h1>

      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Task 1 - String Rendering</h2>
        <p>{course}</p>
      </div>

      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Task 2 - Number Rendering</h2>
        <p>Price: ₹{price}</p>
        <p>Discount: ₹{discount}</p>
      </div>

      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Task 3 - Boolean Rendering</h2>
        <p>{isLogin ? "Welcome User" : "Please Login"}</p>
      </div>

      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Task 4 - Null Rendering</h2>
        <p>{profileImage ? "Image Available" : "No Image Found"}</p>
      </div>

      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Task 5 - Undefined Rendering</h2>
        <p>{email ? email : "Email Not Available"}</p>
      </div>

      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Task 6 - Function Rendering</h2>
        <p>{getCompanyName()}</p>
      </div>

      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Task 7 - Array Rendering</h2>
        {heroes.map((hero, index) => (
          <p key={index}>{hero}</p>
        ))}
      </div>

      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Task 8 - Object Rendering</h2>
        <p>Name: {employee.name}</p>
        <p>Course: {employee.course}</p>
        <p>Experience: {employee.experience}</p>
      </div>

      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">
          Task 9 - Array of Objects Rendering
        </h2>

        {students.map((student) => (
          <div key={student.id} className="border p-3 rounded mb-2">
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Course: {student.course}</p>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">
          Task 10 - Mixed Rendering Assignment
        </h2>

        <p>Company Name: {companyName}</p>
        <p>Total Employees: {totalEmployees}</p>
        <p>{isHiring ? "Hiring Now" : "Not Hiring"}</p>

        <h3 className="font-bold mt-4">CEO Details</h3>
        <p>Name: {ceo.name}</p>
        <p>Age: {ceo.age}</p>

        <h3 className="font-bold mt-4">Departments</h3>
        {departments.map((dept, index) => (
          <p key={index}>{dept}</p>
        ))}

        <h3 className="font-bold mt-4">Employees</h3>
        {employees.map((emp) => (
          <p key={emp.id}>{emp.name}</p>
        ))}

        <h3 className="font-bold mt-4">Location</h3>
        <p>{getLocation()}</p>
      </div>
    </div>
  );
};

export default RenderingTasks;
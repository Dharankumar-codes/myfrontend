import { useState } from "react";

const App = () => {

  // Task 1
  const [count, setCount] = useState(0);

  // Task 2
  const [name, setName] = useState("Sudhan");

  // Task 3
  const [login, setLogin] = useState(false);

  // Task 4
  const [theme, setTheme] = useState("Light Mode");

  // Task 5
  const [course, setCourse] = useState("JavaScript");

  return (
    <>
      {/* Task 1 */}
      <h2>Task 1 - Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <hr />

      {/* Task 2 */}
      <h2>Task 2 - Name Change</h2>
      <h3>{name}</h3>
      <button onClick={() => setName("React Developer")}>
        Change Name
      </button>

      <hr />

      {/* Task 3 */}
      <h2>Task 3 - Login Status</h2>
      <h3>{login ? "Welcome User" : "Please Login"}</h3>
      <button onClick={() => setLogin(true)}>
        Login
      </button>

      <hr />

      {/* Task 4 */}
      <h2>Task 4 - Theme Status</h2>
      <h3>{theme}</h3>
      <button
        onClick={() =>
          setTheme(theme === "Light Mode" ? "Dark Mode" : "Light Mode")
        }
      >
        Toggle Theme
      </button>

      <hr />

      {/* Task 5 */}
      <h2>Task 5 - Course Update</h2>
      <h3>{course}</h3>
      <button onClick={() => setCourse("React JS")}>
        Update Course
      </button>
    </>
  );
};

export default App;
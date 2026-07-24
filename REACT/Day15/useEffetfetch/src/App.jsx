import { useEffect, useState } from "react";

const App = () => {

  // Task 1
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count :", count);
  }, [count]);

  // Task 2
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = name ? `Welcome ${name}` : "React App";
  }, [name]);

  // Task 3
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Task 4
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {/* Task 1 */}
      <h2>Task 1 - Counter</h2>

      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <hr />

      {/* Task 2 */}
      <h2>Task 2 - Page Title</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Browser title changes automatically.</p>

      <hr />

      {/* Task 3 */}
      <h2>Task 3 - Digital Timer</h2>

      <h3>{timer}</h3>

      <hr />

      {/* Task 4 */}
      <h2>Task 4 - Fetch API</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default App;
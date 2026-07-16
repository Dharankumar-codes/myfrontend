

import { useState } from "react";

const App = () => {
  const [fruits, setFruits] = useState(["Apple", "Mango"]);

  const addFruit = () => {
    setFruits([...fruits, "Orange"]);
  };

  return (
    <div>
      <h1>Fruits List</h1>

      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}

      <button onClick={addFruit} className="bg-amber-300 p-1 ">
        Add Fruit
      </button>
    </div>
  );
};

export default App;
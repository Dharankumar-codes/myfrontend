import { useState } from "react";

const App = () => {

  // Task 1
  const [student, setStudent] = useState({
    name: "Sudhan",
    course: "React",
  });

  // Task 2
  const [product, setProduct] = useState({
    name: "Mobile",
    price: 20000,
  });

  // Task 3
  const [heroes, setHeroes] = useState([
    "Vijay",
    "Ajith",
    "Suriya",
  ]);

  // Task 4
  const [numbers, setNumbers] = useState([
    10,
    20,
    30,
    40,
  ]);

  // Task 5
  const [fruits, setFruits] = useState([
    "Apple",
    "Orange",
  ]);

  // Task 6
  const [fruitList, setFruitList] = useState([
    "Apple",
    "Orange",
    "Mango",
  ]);

  return (
    <>
      {/* Task 1 */}
      <h2>Task 1</h2>

      <p>Name : {student.name}</p>
      <p>Course : {student.course}</p>

      <button
        onClick={() =>
          setStudent({
            ...student,
            course: "MERN",
          })
        }
      >
        Update Course
      </button>

      <hr />

      {/* Task 2 */}
      <h2>Task 2</h2>

      <p>Product : {product.name}</p>
      <p>Price : {product.price}</p>

      <button
        onClick={() =>
          setProduct({
            ...product,
            price: 25000,
          })
        }
      >
        Update Price
      </button>

      <hr />

      {/* Task 3 */}
      <h2>Task 3</h2>

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

      {/* Task 4 */}
      <h2>Task 4</h2>

      {numbers.map((num, index) => (
        <p key={index}>{num}</p>
      ))}

      <button
        onClick={() => {
          const newNumbers = [...numbers];
          newNumbers[2] = 100;
          setNumbers(newNumbers);
        }}
      >
        Change Number
      </button>

      <hr />

      {/* Task 5 */}
      <h2>Task 5</h2>

      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}

      <button
        onClick={() => {
          setFruits([...fruits, "Mango"]);
        }}
      >
        Add Mango
      </button>

      <hr />

      {/* Task 6 */}
      <h2>Task 6</h2>

      {fruitList.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}

      <button
        onClick={() => {
          setFruitList(
            fruitList.filter((fruit) => fruit !== "Orange")
          );
        }}
      >
        Remove Orange
      </button>
    </>
  );
};

export default App;
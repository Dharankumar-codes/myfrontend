const StudentCard = ({ name, age, course, isPlaced }) => {
  return (
    <>
      <div className="bg-white shadow-md p-4 rounded-lg mb-5">
        <h2 className="text-xl font-bold mb-3">Task 1 - Primitive Props</h2>

        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>Course : {course}</p>
        <p>Status : {isPlaced ? "Placed" : "Not Placed"}</p>
      </div>
    </>
  );
};

export default StudentCard;
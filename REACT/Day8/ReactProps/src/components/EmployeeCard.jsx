const EmployeeCard = ({ employee }) => {
  return (
    <>
      <div className="bg-white shadow-md p-4 rounded-lg mb-5">
        <h2 className="text-xl font-bold mb-3">Task 2 - Object Props</h2>

        <p>Name : {employee.name}</p>
        <p>Email : {employee.email}</p>
        <p>City : {employee.city}</p>
        <p>Experience : {employee.experience}</p>
      </div>
    </>
  );
};

export default EmployeeCard;
const Employee = () => {


  const employee = {

    name:"Rahul",
    email:"rahul@gmail.com",
    department:"IT"

  };


  return (
    <>
      <div className="p-10">

        <h1 className="text-2xl font-bold">
          Employee Page
        </h1>


        <div className="bg-green-100 p-5 rounded-lg mt-5">

          <p>Name : {employee.name}</p>
          <p>Email : {employee.email}</p>
          <p>Department : {employee.department}</p>

        </div>


      </div>
    </>
  );
};


export default Employee;
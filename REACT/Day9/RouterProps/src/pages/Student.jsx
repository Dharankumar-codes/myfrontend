const Student = () => {

  const student = {
    name:"Sudhan",
    age:25,
    course:"React"
  };


  return (
    <>
      <div className="p-10">

        <h1 className="text-2xl font-bold">
          Student Page
        </h1>

        <div className="bg-blue-100 p-5 rounded-lg mt-5">

          <p>Name : {student.name}</p>
          <p>Age : {student.age}</p>
          <p>Course : {student.course}</p>

        </div>

      </div>
    </>
  );
};


export default Student;
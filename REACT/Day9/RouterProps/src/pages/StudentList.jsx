const StudentList = () => {


  const students = [

    {
      id:1,
      name:"Sudhan",
      course:"React"
    },

    {
      id:2,
      name:"Rahul",
      course:"MERN"
    },

    {
      id:3,
      name:"Vijay",
      course:"Node"
    }

  ];


  return (

    <>
      <div className="p-10">

        <h1 className="text-2xl font-bold">
          Student List
        </h1>


        {
          students.map((student)=>(

            <div 
            key={student.id}
            className="bg-purple-100 p-3 mt-3 rounded"
            >

              {student.id} - {student.name} - {student.course}

            </div>

          ))
        }


      </div>
    </>
  );
};


export default StudentList;
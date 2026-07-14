const StudentList = ({ students }) => {
  return (
    <>
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-3">
          Task 3 - Array Of Objects Props
        </h2>

        {students.map((student) => (
          <p key={student.id}>
            {student.id} - {student.name} - {student.course}
          </p>
        ))}
      </div>
    </>
  );
};

export default StudentList;
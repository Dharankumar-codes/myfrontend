const Movie = () => {


  const movies = [
    "Vijay",
    "Ajith",
    "Suriya"
  ];


  return (
    <>
      <div className="p-10">

        <h1 className="text-2xl font-bold">
          Movie Page
        </h1>


        {
          movies.map((movie,index)=>(
            
            <p 
            key={index}
            className="mt-3 bg-red-100 p-3 rounded"
            >
              {movie}
            </p>

          ))
        }


      </div>
    </>
  );
};


export default Movie;
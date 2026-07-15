const EventButton = () => {
  const changeName = () => {
    alert("Name changed to Kumar");
  };

  const name='Dharan'
  const [name,setN]

  return (
    <div>
      <h1>{name}</h1>

      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  );
};

export default EventButton;
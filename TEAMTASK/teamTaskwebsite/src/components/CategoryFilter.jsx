const CategoryFilter = ({ category, setCategory }) => {
  return (
    <div>

      <button onClick={() => setCategory("All")}>All</button>

      <button onClick={() => setCategory("Technology")}>
        Technology
      </button>

      <button onClick={() => setCategory("Sports")}>
        Sports
      </button>

      <button onClick={() => setCategory("Business")}>
        Business
      </button>

      <button onClick={() => setCategory("Science")}>
        Science
      </button>

    </div>
  );
};

export default CategoryFilter;
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav className="bg-blue-600 p-4 text-white flex gap-5">

        <Link to="/">Home</Link>
        <Link to="/student">Student</Link>
        <Link to="/employee">Employee</Link>
        <Link to="/products">Products</Link>
        <Link to="/movie">Movie</Link>
        <Link to="/studentlist">Student List</Link>

      </nav>
    </>
  );
};

export default Navbar;
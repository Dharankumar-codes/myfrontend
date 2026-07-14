import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Student from "./pages/Student";
import Employee from "./pages/Employee";
import Products from "./pages/Products";
import Movie from "./pages/Movie";
import StudentList from "./pages/StudentList";


const App = () => {

  return (
    <>

      <Navbar />

      <Routes>

        <Route 
          path="/" 
          element={<Home />} 
        />

        <Route 
          path="/student" 
          element={<Student />} 
        />

        <Route 
          path="/employee" 
          element={<Employee />} 
        />

        <Route 
          path="/products" 
          element={<Products />} 
        />

        <Route 
          path="/movie" 
          element={<Movie />} 
        />

        <Route 
          path="/studentlist" 
          element={<StudentList />} 
        />

      </Routes>

    </>
  );
};


export default App;
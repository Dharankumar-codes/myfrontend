import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Help from "./components/Help";

const App = () => {
  return (
    <>
      
        <nav className="bg-slate-800 p-4">
          <ul className="flex justify-center gap-8 text-white font-medium">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/help" className="hover:text-yellow-400">
                Help
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      
    </>
  );
};

export default App;
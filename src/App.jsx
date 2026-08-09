import "./App.css";
// import Button from "./components/Button";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;

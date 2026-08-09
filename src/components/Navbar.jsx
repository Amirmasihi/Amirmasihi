import { useState } from "react";

import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* menu md */}
      <header className="flex flex-row justify-between gap-4 px-12 py-12 h-12 border-b-3 items-center w-full select-none relative z-50   bg-black/40 backdrop-blur-md">
        <div className="">
          <h1 className="md:text-3xl text-2xl font-bold -motion-translate-y-loop-50 motion-duration-2000 motion-ease-spring-smooth select-none">
            Amir <span className="text-primary">Masihi</span>
          </h1>
        </div>

        {/* hambrger icon */}
        <button
          className="md:hidden cursor-pointer select-none"
          onClick={toggleMenu}
        >
          {isOpen ? <IoMdClose size={32} /> : <IoIosMenu size={32} />}
        </button>

        <ul className="md:flex flex-row gap-4 md:text-lg text-sm hidden font-medium z-50">
          <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
            <Link to="/project">Projects</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>

      {/* menu sm */}
      <div
        className={`md:hidden transition-all duration-500 ${
          isOpen
            ? "motion-preset-slide-down motion-duration-500 opacity-100"
            : "motion-preset-slide-up motion-duration-300 opacity-0"
        }`}
      >
        {isOpen && (
          <header className="flex justify-center gap-4 flex-col mx-auto text-white pb-6 z-100 w-full bg-black/40 backdrop-blur-md select-none">
            <div className=""></div>
            <li className="border-b-2 text-center font-medium pb-3 hover:text-primary motion-preset-fade motion-duration-300 motion-delay-100 cursor-pointer">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="border-b-2 text-center font-medium pb-3 hover:text-primary motion-preset-fade motion-duration-300 motion-delay-200 cursor-pointer">
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="border-b-2 text-center font-medium pb-3 hover:text-primary motion-preset-fade motion-duration-300 motion-delay-300 cursor-pointer">
              <Link to="/project" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li className="border-b-2 text-center font-medium pb-3 hover:text-primary motion-preset-fade motion-duration-300 motion-delay-400 cursor-pointer">
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </header>
        )}
      </div>
    </>
  );
};

export default Navbar;

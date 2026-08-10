import { IoRocketOutline } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { CiClock2 } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="">
        <h1 className="text-2xl md:text-3xl mx-14 my-8  font-bold">
          new projects :
        </h1>
      </div>
      <div className="flex justify-center items-center gap-8 flex-wrap motion-preset-slide-right motion-duration-2000 ">
        <div className="w-80 h-96 bg-white/5 backdrop-blur-md shadow-lg bordrer border-white/10 rounded-2xl flex items-center justify-center hover:scale-110 duration-700 mt-4">
          <div className="absolute top-0">
            <img
              src="/project1.jpg"
              alt="project1"
              className="w-full rounded-t-2xl "
            />
            <h1 className="text-lg font-bold py-2 px-4">portfolio</h1>
            <p className="text-gray-300 px-4 text-md">
              a modern portfolio website built with React and Tailwind css
            </p>
            <div className="flex gap-2 p-4">
              <button className="rounded-lg text-sm w-auto px-2 h-8 border border-gray-400">
                <span className="flex items-center gap-2">
                  {" "}
                  React
                  <SiReact size={18} className="text-primary " />
                </span>
              </button>
              <button className="rounded-lg text-sm w-auto px-2 h-8 border border-gray-400">
                <span className="flex items-center gap-2 ">
                  {" "}
                  Tailwindcss
                  <SiTailwindcss size={18} className="text-primary " />
                </span>
              </button>
            </div>
            <div className="flex justify-center gap-4 py-2 px-4">
              <Link to={"/"} className="rounded-lg text-sm w-auto py-1 px-2 h-8 border border-gray-400 ">
                <span className="flex items-center gap-2">
                  {" "}
                  Live Demo
                  <GoArrowUpRight size={18} className="text-primary" />
                </span>
              </Link>
              <a
                href="https://github.com/Amirmasihi/AmirMasihi"
                className="rounded-lg text-sm w-auto px-2 py-1 h-8 border border-gray-400 "
              >
                <span className="flex  items-center gap-2 ">
                  GitHub
                  <SiGithub size={18} className="text-primary" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-80 h-96 bg-white/5 backdrop-blur-md shadow-lg bordrer border-white/10 rounded-2xl flex py-14 justify-center hover:scale-110 duration-700 mt-4 ">
          <div className="flex flex-col justify-center items-center gap-4">
            <IoRocketOutline size={72} className="text-primary text-center" />
            <h1 className="text-2xl text-center">coming soon</h1>
            <p className="text-gray-300 p-4 text-center">
              a new project is under development stay tuned!
            </p>
            <button className="rounded-lg text-md w-auto px-2 h-8 border border-gray-400">
              <span className="flex items-center gap-2 ">
                {" "}
                In Progress
                <CiClock2 size={18} className="text-primary" />
              </span>
            </button>
          </div>
        </div>
        <div className="w-80 h-96 bg-white/5 backdrop-blur-md shadow-lg bordrer border-white/10 rounded-2xl flex py-14 justify-center hover:scale-110 duration-700 mt-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <IoRocketOutline size={72} className="text-primary text-center" />
            <h1 className="text-2xl text-center">coming soon</h1>
            <p className="text-gray-300 p-4 text-center">
              a new project is under development stay tuned!
            </p>
            <button className="rounded-lg text-md w-auto px-2 h-8 border border-gray-400">
              <span className="flex items-center gap-2 ">
                {" "}
                In Progress
                <CiClock2 size={18} className="text-primary" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

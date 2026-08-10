import { SiReact } from "react-icons/si";
import { SiTailwindcss} from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";

const About = () => {
  return (
    <>
      <div className="">
        <h1 className="text-2xl md:text-3xl m-14 font-bold" id="about-h1">skill me :</h1>
      </div>
      <div className="flex justify-center gap-4 flex-wrap motion-preset-slide-right motion-duration-2000 ">
        <div className="w-48 h-48 bg-white/5 backdrop-blur-md shadow-lg bordrer border-white/10 rounded-2xl flex items-center justify-center hover:scale-110 duration-700 ">
          <SiReact size={72} className="text-primary " />
        </div>
        <div className="w-48 h-48 bg-white/5 backdrop-blur-md shadow-lg bordrer border-white/10 rounded-2xl flex items-center justify-center hover:scale-110 duration-700 ">
          <SiTailwindcss size={72} className="text-primary" />
        </div>
        <div className="w-48 h-48 bg-white/5 backdrop-blur-md shadow-lg bordrer border-white/10 rounded-2xl flex items-center justify-center hover:scale-110 duration-700 ">
          <SiGit size={72} className="text-primary" />
        </div>
        <div className="w-48 h-48 bg-white/5 backdrop-blur-md shadow-lg bordrer border-white/10 rounded-2xl flex items-center justify-center hover:scale-110 duration-700 ">
          <SiGithub size={72} className="text-primary" />
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl md:text-3xl m-14 font-bold">about me :</h1>
      </div>
      <p className="text-gray-300 mx-14 text-lg motion-preset-slide-right motion-duration-2000">
        I'm Amir Masihi, a front-end developer. My expertise is turning designs
        into clean, fast, and responsive code using React and Tailwind CSS. My
        goal is to build a practical and beautiful experience for users..
      </p>
    </>
  );
};

export default About;

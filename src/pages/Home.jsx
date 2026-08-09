import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:gap-24 gap-8 md:flex-row justify-center items-center flex-wrap md:flex-nowrap mx-18 my-14">
        <div className="">
          <img
            src="/1000454207-removebg-preview.png"
            alt=""
            className="relative -z-50 select-none motion-preset-slide-right motion-duration-2000"
          />
        </div>
        <div className="flex flex-col gap-8">
          <h1 className=" text-xl md:text-3xl font-mono motion-preset-slide-right motion-duration-2000">
            <Typewriter
              options={{
                strings: ["front-end developer", "responsive web designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-gray-300 text-lg motion-preset-slide-right motion-duration-2000 ">
            I build modern, responsive, and user-friendly web applications!
          </p>
          <button className="w-36 h-12 border-2 border-primary text-lg select-none motion-preset-slide-right motion-duration-2000 cursor-pointer hover:scale-105 transition-all duration-300 rounded-tr-2xl rounded-bl-2xl ">
            Downloade CV
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

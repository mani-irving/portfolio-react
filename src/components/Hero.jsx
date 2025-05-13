import React from "react";
import manikantImage from "../assets/manikant-img.jpg";

export default function Hero() {
  const resumeLink =
    "https://drive.google.com/file/d/1EKoa_MCddbTI3hrj53XB-cJdDTHWMGyr/view?usp=sharing";
  return (
    <section className="bg-white text-black  dark:bg-gray-900 dark:text-gray-200 pt-[80px] min-h-[calc(100vh-62px)] flex justify-center items-center px-[2%] sm:px-[4%] md:px-[6%] lg:px-[8%]">
      <div className="flex flex-col lg:flex-row justify-between gap-10 items-center w-full">
        <div className="w-[150px] h-[150px] sm:h-[180px] sm:w-[180px] md:h-[280px] md:w-[280px] lg:h-[350px] lg:w-[350px] rounded-full border-[0.3px] border-blue-400  overflow-hidden">
          <img
            src={manikantImage}
            alt="Manikant-Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 max-w-xl text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            Hi, I'm <span className="text-blue-700">Manikant</span> — Full Stack
            Developer
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            I build scalable, performant, and user-friendly web applications —
            from polished UIs to powerful backend systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#Projects">
              <button className="bg-blue-600 text-white rounded px-5 py-2 hover:bg-blue-500 shadow-2xl cursor-pointer">
                Explore My Work
              </button>
            </a>

            <a href={resumeLink}>
              <button className="bg-blue-600 text-white rounded px-2 sm:px-5 py-2 hover:bg-blue-500 shadow-2xl cursor-pointer">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

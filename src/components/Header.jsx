import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Header({
  theme,
  setTheme,
  hamburgerMenuActivated,
  sethamburgerMenuActivated,
}) {
  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-brightness-high"
      viewBox="0 0 16 16"
    >
      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
    </svg>
  );

  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-moon"
      viewBox="0 0 16 16"
    >
      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
    </svg>
  );

  const [logoColour, setLogoColour] = useState("bg-black");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  //   useEffect(() => {
  //     const header = document.querySelector("header");
  //     if (theme === "dark") {
  //       setLogoColour("bg-white");
  //     } else {
  //       setLogoColour("bg-black");
  //     }
  //   }, [theme]);

  return (
    <header
      className="bg-white text-black shadow-lg dark:bg-black 
        dark:text-white dark:shadow-lg flex justify-between 
        items-center py-[15px] px-[2%] sm:px-[4%] md:px-[6%] lg:px-[8%] "
    >
      <motion.div
        animate={{
          y: [0, 4, 0],
        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
        }}
        id="logo-Name"
        className="flex gap-1 items-center"
      >
        <div className="flex gap-1 items-center border-amber-50 rounded hover:text-blue-200">
          <div
            className={`mAlphabetInLogo bg-black dark:bg-white w-[4px] h-[25px] rounded`}
          ></div>
          <div
            className={`mAlphabetInLogo bg-black dark:bg-white w-[4px] h-[25px] rounded`}
          ></div>
          <div
            className={`mAlphabetInLogo bg-black dark:bg-white w-[4px] h-[25px] rounded`}
          ></div>
        </div>

        <h1 className=" font-bold text-2xl">anikant</h1>
      </motion.div>

      <nav className="hidden lg:flex ">
        <ul className="flex justify-between items-center">
          <li className="px-4 hover:text-blue-100">
            <a href="#">Home</a>
          </li>
          <li className="px-4 hover:text-blue-100">
            <a href="#about">About</a>
          </li>
          <li className="px-4 hover:text-blue-100">
            <a href="#education">Education</a>
          </li>
          <li className="px-4 hover:text-blue-100">
            <a href="#Skills">Skills</a>
          </li>
          <li className="px-4 hover:text-blue-100">
            <a href="#">Projects</a>
          </li>
          <li className="px-4 hover:text-blue-100">
            <a href="#">Certifications</a>
          </li>
          <li className="px-4 hover:text-blue-100">
            <a href="#">Achievements</a>
          </li>
        </ul>
      </nav>

      {/* Theme- Changer Button */}
      <div
        onClick={toggleTheme}
        className="hidden lg:flex cursor-pointer hover:text-blue-500"
      >
        {theme === "light" ? darkIcon : lightIcon}
      </div>

      {/* Hamburger-Menu */}
      <div
        onClick={() => sethamburgerMenuActivated((prev) => !prev)}
        className="lg:hidden p-[5px] sm:p-[15px]  flex flex-col gap-1 border-[1px] border-solid 
                  hover:scale-110 transition-transform
                border-gray-500 rounded-md hover:bg-blue-200 relative"
      >
        <div className="bg-gray-500 w-[30px] h-[4px] sm:w-[35px] sm:h-[4px] rounded"></div>
        <div className="bg-gray-500 w-[30px] h-[4px] sm:w-[35px] sm:h-[4px] rounded"></div>
        <div className="bg-gray-500 w-[30px] h-[4px] sm:w-[35px] sm:h-[4px] rounded"></div>
      </div>

      {hamburgerMenuActivated && (
        <div
          className="lg:hidden mt-2 bg-white dark:bg-black shadow-md rounded-md
      p-8 absolute top-[70px] right-4 w-[200px] flex flex-col gap-4"
        >
          <ul className="flex flex-col gap-4">
            <li className="hover:text-blue-400">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-blue-400">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-400">
              <a href="#education">Education</a>
            </li>
            <li className="hover:text-blue-400">
              <a href="#Skills">Skills</a>
            </li>
            <li className="hover:text-blue-400">
              <a href="#">Projects</a>
            </li>
            <li className="hover:text-blue-400">
              <a href="#">Certifications</a>
            </li>
            <li className="hover:text-blue-400">
              <a href="#">Achievements</a>
            </li>
          </ul>

          {/* BEAUTIFUL Theme Toggle Button inside Hamburger */}
          {/* Beautiful Theme Toggle Switch */}
          <div
            onClick={toggleTheme}
            className={`mt-4 flex items-center justify-between cursor-pointer 
            w-20 h-10 p-1 rounded-full transition-colors duration-300
            ${theme === "light" ? "bg-gray-300" : "bg-purple-700"}`}
          >
            {/* Sun Icon */}
            <div className="w-1/2 flex justify-center items-center text-black">
              {lightIcon}
            </div>

            {/* Moon Icon */}
            <div className="w-1/2 flex justify-center items-center text-white">
              {darkIcon}
            </div>

            {/* Sliding Circle */}
            <div
              className={`absolute w-8 h-8 bg-white opacity-65 rounded-full shadow-md transform 
              transition-transform duration-300
              ${theme === "light" ? "translate-x-1" : "translate-x-10"}`}
            />
          </div>
        </div>
      )}
    </header>
  );
}

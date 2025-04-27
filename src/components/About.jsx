import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white text-black  dark:bg-gray-900 dark:text-gray-200 pt-[80px]  max-h-100vh min-h-[calc(100vh-62px)] flex flex-col items-center gap-5 px-[2%] sm:px-[4%] md:px-[6%] lg:px-[8%]"
    >
      <div className="h-[1px] w-full bg-black dark:bg-blue-300 mb-[30px]"></div>
      <div className="flex justify-center">
        <h1 className="font-bold">About Me</h1>
      </div>
      <div className="flex flex-col gap-7">
        <p>
          Hi, I'm Manikant Pandey, an aspiring Full-Stack Developer currently
          pursuing my B.Tech in Information Technology from Techno International
          Newtown. I’m passionate about building dynamic, responsive web
          applications and constantly pushing my boundaries in both frontend and
          backend development.
        </p>
        <p>
          With hands-on experience in technologies like React.js, Node.js,
          Express.js, and SQL, I’ve built real-world projects such as an
          e-commerce platform for a flower delivery startup and a productivity
          tracker app. I’m deeply interested in problem-solving, and I have a
          strong foundation in Data Structures, Object-Oriented Programming, and
          Agile Development.
        </p>
        <p>
          Beyond the code, I’m a team player who thrives in collaborative
          environments. My background as a state-level basketball captain
          reflects my leadership and perseverance, both on and off the court.
          I’m currently looking for opportunities to contribute to innovative
          software solutions and grow as a developer.
        </p>
      </div>
      <div className="h-[1px] w-full bg-black dark:bg-blue-300 mt-[30px]"></div>
    </section>
  );
}

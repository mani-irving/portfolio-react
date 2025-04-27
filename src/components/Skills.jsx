import React from "react";
import Card from "../card component/SkillsCard";
import {
  ProgrammingLanguage,
  FullStackDevelopment,
} from "../user details/SkillDetails";

export default function Skills() {
  return (
    <section
      id="Skills"
      className="bg-white text-black  dark:bg-gray-900 dark:text-gray-200 pt-[80px]  max-h-100vh min-h-[calc(100vh-62px)] flex flex-col  gap-5 px-[2%] sm:px-[4%] md:px-[6%] lg:px-[8%]"
    >
      <div className="flex justify-center gap-6">
        <h1 className="text-3xl font-bold">Skills</h1>
      </div>
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-2xl font-bold">Programming Languages</h2>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 items-center sm:flex-row sm:flex-wrap sm:justify-start">
          {ProgrammingLanguage.map((detail) => (
            <Card
              key={detail.id}
              skillName={detail.name}
              imgSrc={detail.imgSrc}
              imgAlt={detail.imgAlt}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-2xl font-bold">Full Stack Development</h2>
        </div>
        <div className="flex flex-col gap-6 items-center sm:flex-row sm:flex-wrap sm:justify-start">
          {FullStackDevelopment.map((detail) => (
            <Card
              key={detail.id}
              skillName={detail.name}
              imgSrc={detail.imgSrc}
              imgAlt={detail.imgAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

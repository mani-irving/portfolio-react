import React from "react";

export default function SkillsCard({ skillName, imgSrc, imgAlt }) {
  return (
    <div
      className="flex flex-col h-[150px] w-[180px] gap-4 p-[8px] rounded-[8px] 
    justify-around items-center bg-gray-100 text-black dark:bg-gray-700
     dark:text-gray-300 shadow-lg transition-transform duration-300 transform hover:scale-105"
    >
      <img src={imgSrc} alt={imgAlt} className="h-[100px] w-[100px]" />
      <h3>{skillName}</h3>
    </div>
  );
}

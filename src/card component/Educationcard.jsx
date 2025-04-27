import React from "react";

export default function EducationCard({
  instituteName,
  yop,
  courseName,
  cgpaOrPercentage,
}) {
  return (
    <div
      className="min-w-full h-[200px] sm:h-[200px] md:min-w-[380px] md:h-[200px] 
        flex flex-col justify-between items-center text-center
        bg-white text-black dark:bg-gray-700 dark:text-white p-2 sm:p-4 rounded shadow-md 
        transition-transform duration-300 transform hover:scale-105"
    >
      <h2 className="text-xl font-semibold">{instituteName}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-200">{courseName}</p>
      <p className="text-sm">Year of Passing: {yop}</p>
      <p className="text-sm font-medium">CGPA/Percentage: {cgpaOrPercentage}</p>
    </div>
  );
}

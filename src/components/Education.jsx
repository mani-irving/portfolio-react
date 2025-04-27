import React from "react";
import EducationDetails from "../user details/EducationDetails";
import Card from "../card component/Educationcard";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-white text-black dark:bg-gray-900 dark:text-gray-200 
    pt-[80px] min-h-[calc(100vh-62px)] flex flex-col sm:items-center  gap-4 px-[2%] sm:px-[4%] md:px-[6%] lg:px-[8%]"
    >
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Education</h1>
      </div>

      <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 items-center sm:flex-row sm:flex-wrap justify-start">
        {EducationDetails.map(
          ({
            id,
            Institute,
            StartYear,
            EndYear,
            CourseName,
            cgpaOrPercentage,
          }) => (
            <Card
              key={id}
              instituteName={Institute}
              courseName={CourseName}
              yop={EndYear}
              cgpaOrPercentage={cgpaOrPercentage}
            />
          )
        )}
      </div>
    </section>
  );
}

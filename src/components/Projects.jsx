import React from "react";
import { motion } from "motion/react";
import ProjectCard from "../card component/ProjectCard";
import ProjectDetails from "../user details/ProjectDetails";

export default function Project() {
  return (
    <motion.section
      id="Projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="bg-white text-black dark:bg-gray-900 dark:text-white pt-20 px-6 md:px-12 min-h-[100vh]"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">My Recent Projects</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {ProjectDetails.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            imgSrc={project.imgSrc}
            desc={project.desc}
            techs={project.tech}
            projectLink={project.projectLink}
            sourceCodeLink={project.sourceCodeLink}
          />
        ))}
      </div>
    </motion.section>
  );
}

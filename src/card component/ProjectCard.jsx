import React from "react";
import TechStacks from "./TechStack";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({
  name,
  imgSrc,
  desc,
  techs,
  projectLink,
  sourceCodeLink,
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 flex flex-col gap-4 hover:shadow-xl transition duration-300">
      {/* Image */}
      <img
        src={imgSrc}
        alt={`${name} screenshot`}
        className="rounded-xl object-cover h-48 w-full"
      />

      {/* Project Name */}
      <h2 className="text-xl font-semibold text-center">{name}</h2>

      {/* Tech Stack */}
      <div className="flex flex-wrap justify-center gap-2">
        {techs.map((tech, index) => (
          <TechStacks key={index} tech={tech} />
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-justify text-gray-700 dark:text-gray-300 line-clamp-4">
        {desc}
      </p>

      {/* Links */}
      <div className="flex justify-between mt-auto">
        <a
          href={projectLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1 transition"
        >
          <ExternalLink size={16} /> View
        </a>
        <a
          href={sourceCodeLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1 transition"
        >
          <i className="bi bi-github"></i> Code
        </a>
      </div>
    </div>
  );
}

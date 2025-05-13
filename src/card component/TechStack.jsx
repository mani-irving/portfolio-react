import React from "react";

export default function TechStack({ tech }) {
  return (
    <span className="bg-gray-200 dark:bg-gray-600 text-black dark:text-white text-xs px-3 py-1 rounded-full">
      {tech}
    </span>
  );
}

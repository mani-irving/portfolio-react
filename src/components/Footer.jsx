// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400 py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col items-center gap-2">
        <p>&copy; {new Date().getFullYear()} ManiKant. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/mani-irving"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manikant-pandey-58a0a5217/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mani73244@gmail.com"
            className="hover:text-blue-400 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

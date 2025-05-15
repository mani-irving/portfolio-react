import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const email = "mani73244@gmail.com"; // <-- replace with your real email
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white text-black dark:bg-gray-900 dark:text-gray-200 pt-10 pb-10
      px-[2%] sm:px-[4%] md:px-[6%] lg:px-[8%]"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        Get in Touch
      </h2>

      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <p className="mb-2 text-gray-700 dark:text-gray-300 text-left font-medium">
          Email me at:
        </p>

        {/* Email + Copy */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={email}
            disabled
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white bg-transparent"
          />
          <button
            onClick={handleCopy}
            className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
        </div>

        {/* Copy confirmation */}
        {copied && (
          <p className="text-green-500 font-medium text-sm mb-3">
            Email copied to clipboard!
          </p>
        )}

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://github.com/mani-irving"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github text-2xl hover:text-gray-700 dark:hover:text-white"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/manikant-pandey-58a0a5217/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin text-2xl text-blue-700 hover:text-blue-900"></i>
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <i className="bi bi-twitter-x text-2xl hover:text-black dark:hover:text-white"></i>
          </a>
        </div>
      </div>
    </motion.section>
  );
}

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const arrowUpwards = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="currentColor"
      className="bi bi-arrow-up-short"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
      />
    </svg>
  );

  useEffect(() => {
    const scrollDetect = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", scrollDetect);
  }, []);

  const dragToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 2,
        delay: 1,
        repeat: Infinity,
      }}
      className={`h-[70px] w-[70px] rounded-full p-3
       bg-blue-300 shadow-lg hover:bg-blue-500 flex 
        items-center justify-center fixed bottom-5 right-5
        ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      onClick={dragToTop}
    >
      {arrowUpwards}
    </motion.div>
  );
}

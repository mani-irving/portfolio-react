import { useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";
import "../src/App.css";
import "./App.css";
import Header from "./components/Header";
import Imports from "./components/Imports";

function App() {
  const [theme, setTheme] = useState("light");
  const [hamburgerMenuActivated, sethamburgerMenuActivated] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const ScrollYProgress = useScroll().scrollYProgress;

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white ">
      <motion.div
        style={{
          scaleX: ScrollYProgress,
        }}
        className="bg-blue-500 h-[2px] w-full fixed top-0 left-0 origin-left "
      ></motion.div>
      <Header
        theme={theme}
        setTheme={setTheme}
        hamburgerMenuActivated={hamburgerMenuActivated}
        sethamburgerMenuActivated={sethamburgerMenuActivated}
      />
      <Imports />
    </div>
  );
}

export default App;

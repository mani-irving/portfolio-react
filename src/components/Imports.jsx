import React from "react";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import ScrollToTopButton from "./ScrollToTopButton";
import Project from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Imports() {
  return (
    <>
      <Hero />
      <ScrollToTopButton />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

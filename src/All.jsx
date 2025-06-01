import React from "react";

import Home from "./components/Home/Home";
import AboutMe from "./components/AboutSection/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/ProjectSection/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function All() {
  return (
    <div className="snap-y scrollbar-hide  snap-mandatory h-screen overflow-y-auto bg-white dark:bg-gray-900">
      <div className="snap-start">
        <Home />
      </div>
      <div className="snap-start">
        <AboutMe />
      </div>
      <div className="snap-start">
        <Skills />
      </div>
      <div className="snap-start">
        <Projects />
      </div>
      <div className="snap-start">
        <Contact />
      </div>
      <div className="snap-start ">
        <Footer />
      </div>
    </div>
  );
}

export default All;

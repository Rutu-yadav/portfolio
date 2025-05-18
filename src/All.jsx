import React from "react";

import Home from "./components/Home/Home";
import AboutMe from "./components/AboutSection/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/ProjectSection/Projects";
import Contact from "./components/Contact/Contact";

function All() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-auto bg-white dark:bg-gray-900">
      {/* <Navbar /> */}
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
    </div>
  );
}

export default All;

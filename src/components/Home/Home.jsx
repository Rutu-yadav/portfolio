import React, { useState, useEffect } from "react";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { toast } from "react-toastify";
import { Navbar } from "./NavBar/Navbar";

function Home() {
  const [cvDownloaded, setCvDownloaded] = useState(false);
  const [text] = useTypewriter({
    words: [
      "Java Full Stack Developer",
      "Frontend Developer",
      "React Developer",
      "Backend Developer",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const handleDownload = () => {
    setCvDownloaded(true);
    setTimeout(() => setCvDownloaded(false), 5000);
    toast.success("Thank you for downloading Resume!");
  };

  return (
    <div id="home" className="relative">
      <div className="absolute top-0 left-0 right-0 z-10 ">
        <Navbar />
      </div>
      <div className="h-screen flex">
        <div className="w-1/2 flex items-center justify-center bg-white dark:bg-[#111827]">
          <div className="text-black dark:text-white ">
            <h1 className="text-xl  font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl font-bold text-black dark:text-white mb-2">
              I am
            </p>
            <p className="text-7xl font-bold text-blue-500 mb-4">
              Rutuja Yadav
            </p>
            <div>
              <span className="text-5xl mr-4">a</span>
              <span className="text-5xl font-bold text-blue-500 ">{text}</span>
              <Cursor />
            </div>
            <div className="mt-4 text-2xl font-bold">
              🧠 Logic | 🎨 Design | ⚡ Execution | 💯 Results
            </div>
            <div className="flex items-center gap-2 mt-6">
              <Link
                to="/resume/RutujaYadavResume.pdf"
                className="bg-blue-500 flex items-center gap-2 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-full"
                onClick={handleDownload}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
                <FaDownload />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/2 relative">
          <div
            className="absolute inset-0 bg-no-repeat bg-center mt-20 p-32 "
            style={{ backgroundImage: "url('/Images/office-work-11.svg')" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { toast } from "react-toastify";
import { Navbar } from "./NavBar/Navbar";

function Home() {
  const [cvDownloaded, setCvDownloaded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

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
      <div className="absolute top-10 left-0 right-0 z-10">
        <Navbar />
      </div>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white dark:bg-[#111827] px-2 sm:px-6 md:px-8 lg:px-12">
          <div
            ref={ref}
            className="text-black dark:text-white text-center lg:text-left mt-44"
          >
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-left"
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white mb-2 text-left"
            >
              I am
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-8xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-500 mb-4 text-left"
            >
              Rutuja Yadav
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex  sm:flex-row t gap-2"
            >
              <span className="text-2xl sm:text-4xl md:text-5xl ">a</span>
              <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-500 text-left">
                {text}
              </span>
              <Cursor />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-4 text-base sm:text-2xl font-bold text-left "
            >
              🧠 Logic | 🎨 Design | ⚡Execution | 💯 Results
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex items-center justify-center lg:justify-start gap-2 mt-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/resume/RutujaYadav_Frontend_Resume.pdf"
                  className="bg-blue-500 flex items-center gap-2 hover:bg-blue-700 text-white font-bold px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base "
                  onClick={handleDownload}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                  <FaDownload />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full  lg:w-1/2 relative  hidden  sm:block "
        >
          <div
            className=" absolute bg-no-repeat bg-center bg-cover  mt-8 h-full w-full "
            style={{ backgroundImage: "url('/Images/office-work-11.svg')" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;

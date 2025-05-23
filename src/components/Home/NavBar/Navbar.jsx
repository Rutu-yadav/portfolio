// import React, { useState, useEffect } from "react";
// import { BsSunFill, BsMoonFill } from "react-icons/bs";

// export const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     // Check if user has a theme preference in localStorage
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       setIsDarkMode(savedTheme === "dark");
//       document.documentElement.classList.toggle("dark", savedTheme === "dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle("dark");
//     localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
//   };

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="fixed top-6 left-0 right-0 z-50 mx-16 ">
//       <div className="flex justify-between items-center p-5 rounded-full bg-gray-300 dark:bg-gray-800 text-blue-500 dark:text-blue-400">
//         <button
//           onClick={() => scrollToSection("home")}
//           className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-300 transition-colors mx-10"
//         >
//           👩‍💻 Rutuja
//         </button>

//         <div className="flex items-center gap-14 ">
//           <button
//             onClick={() => scrollToSection("home")}
//             className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-lg font-bold"
//           >
//             Home
//           </button>
//           <button
//             onClick={() => scrollToSection("about")}
//             className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-lg font-bold"
//           >
//             About
//           </button>
//           <button
//             onClick={() => scrollToSection("skills")}
//             className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-lg font-bold"
//           >
//             Skills
//           </button>
//           <button
//             onClick={() => scrollToSection("projects")}
//             className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-lg font-bold"
//           >
//             Projects
//           </button>
//         </div>
//         <div className="flex items-center gap-8">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-lg font-bold"
//             aria-label="Toggle theme"
//           >
//             {isDarkMode ? (
//               <BsSunFill className="w-5 h-5 text-yellow-400" />
//             ) : (
//               <BsMoonFill className="w-5 h-5 text-blue-600" />
//             )}
//           </button>
//           <button
//             onClick={() => scrollToSection("contact")}
//             className=" dark:hover:text-blue-300 transition-colors rounded-full border-2 border-blue-500 px-4 dark:bg-gray-800 p-2 text-lg font-bold hover:bg-blue-500 hover:text-white hover:dark:bg-blue-500 hover:dark:text-white"
//           >
//             Contact me
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 mx-4 md:mx-16">
      <div className="flex justify-between items-center p-5 rounded-full bg-gray-300 dark:bg-gray-800 text-blue-500 dark:text-blue-400">
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-300 transition-colors mx-4 md:mx-10"
        >
          👩‍💻 Rutuja
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-14">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-lg font-bold"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-lg font-bold"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-lg font-bold"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-lg font-bold"
          >
            Projects
          </button>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-lg font-bold"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <BsSunFill className="w-5 h-5 text-yellow-400" />
            ) : (
              <BsMoonFill className="w-5 h-5 text-blue-600" />
            )}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <IoClose className="w-6 h-6" />
            ) : (
              <HiMenuAlt4 className="w-6 h-6" />
            )}
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block dark:hover:text-blue-300 transition-colors rounded-full border-2 border-blue-500 px-4 dark:bg-gray-800 p-2 text-lg font-bold hover:bg-blue-500 hover:text-white hover:dark:bg-blue-500 hover:dark:text-white"
          >
            Contact me
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl bg-gray-300 dark:bg-gray-800 shadow-lg">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-lg font-bold py-2 hover:bg-blue-400 rounded-full"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-lg font-bold py-2 hover:bg-blue-400 rounded-full"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-lg font-bold py-2 hover:bg-blue-400 rounded-full "
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-lg font-bold py-2 hover:bg-blue-400 rounded-full"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-lg font-bold py-2 hover:bg-blue-400 rounded-full"
            >
              Contact me
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

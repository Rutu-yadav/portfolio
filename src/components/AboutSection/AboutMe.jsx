import React, { useState } from "react";

function AboutMe() {
  const [activeTab, setActiveTab] = useState("about");

  const aboutContent = `
  I'm a full-stack developer who loves building websites and apps. I enjoy working on both the frontend (what users see) and backend (how it all works).

I'm always learning new things and working on projects to improve my skills. When I'm not coding, I like reading about tech and helping others learn.

I'm excited to start my career and work on real-world projects!
  
 `;

  const educationContent = [
    {
      degree: "Bachelor of Computer Application",
      institution: "Shivaji University, Kolhapur",
      year: "2020 - 2023",
      details: "CGPA: 8.24",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Shivaji University, Kolhapur ",
      year: "2018 - 2019",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Shivaji University, Kolhapur ",
      year: "2016 - 2017",
      details: "Percentage: 81.80%",
    },
    {
      degree: "Certificate in Java Full Stack Development",
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen flex justify-center items-center pt-20 sm:py-16 md:py-20"
    >
      <div className=" mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mt-6 sm:mt-10 text-blue-900 dark:text-blue-400">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row gap-8 mt-8 sm:mt-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="transition-transform duration-300 hover:scale-[1.05]">
              <img
                src="/Images/undraw_programmer_raqr.svg"
                alt="Profile"
                className="h-auto rounded-lg w-3/4 sm:w-4/5 mx-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4 sm:p-6">
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
              <button
                className={`px-4 sm:px-6 py-2 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] ${
                  activeTab === "about"
                    ? "border-b-2 border-blue-500 text-blue-500 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>

              <button
                className={`px-4 sm:px-6 py-2 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] ${
                  activeTab === "education"
                    ? "border-b-2 border-blue-500 text-blue-500 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
            </div>

            <div className="transition-all duration-300">
              {activeTab === "about" ? (
                <div className="max-w-3xl px-4 sm:px-10 py-4 sm:py-6">
                  <p className="text-xl sm:text-2xl font-bold dark:text-white text-blue-700">
                    Hello I'm Rutuja Yadav
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {aboutContent}
                  </p>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-10">
                  {educationContent.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-500 pl-4 transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        {edu.institution}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {edu.year}
                      </p>
                      <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300 mt-2 font-bold">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

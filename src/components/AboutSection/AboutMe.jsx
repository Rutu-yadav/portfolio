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
    <div id="about" className="h-screen flex justify-center items-center ">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mt-10 text-blue-900 dark:text-blue-400">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className=" ">
              <img
                src="/Images/undraw_programmer_raqr.svg"
                alt="Profile"
                className="h-auto rounded-lg w-4/5  text-center mx-auto mt-14"
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
              <button
                className={`px-6 py-2 text-lg font-medium ${
                  activeTab === "about"
                    ? "border-b-2 border-blue-500 text-blue-500 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>

              <button
                className={`px-6 py-2 text-lg font-medium ${
                  activeTab === "education"
                    ? "border-b-2 border-blue-500 text-blue-500 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
            </div>

            <div className="mt-4">
              {activeTab === "about" ? (
                <div className=" max-w-3xl  px-10 py-6">
                  <p className="text-2xl font-bold dark:text-white text-blue-700">
                    Hello I'm Rutuja Yadav
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                    {aboutContent}
                  </p>
                </div>
              ) : (
                <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
                  {educationContent.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-500 pl-4"
                    >
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.institution}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {edu.year}
                      </p>
                      <p className="text-gray-800 dark:text-gray-300 mt-2 font-bold">
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

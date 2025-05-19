import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      title: "Weather App",
      description:
        "A React application that fetches and displays real-time weather updates.Users can search for any city and view temperature, humidity, and forecast.",
      image: "/Images/weather.png",
      technologies: ["React Js", "Tailwind CSS", "OpenWeather API"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React showcasing projects and skills.Includes smooth navigation and a modern responsive design.",
      image: "/Images/portfolio1.png",
      technologies: ["React Js", "Tailwind CSS", "Framer Motion"],
      link: "#",
    },
    {
      title: "Todo List App",
      description:
        "A simple and intuitive Todo List application built with React.Users can add, edit, delete, and mark tasks as completed.",
      image: "/Images/todo.png",
      technologies: ["React Js", "Tailwind CSS", "Local Storage"],

      link: "#",
    },
  ];

  return (
    <div id="projects" className="h-screen py-32 ">
      <div className="container mx-auto px-20">
        <h1 className="text-3xl font-bold text-center mb-2 text-blue-900 dark:text-blue-400">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-90 transition-transform duration-300"
            >
              <div className="w-full h-70 overflow-hidden flex justify-center items-center ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

import { FaGithub, FaExternalLinkAlt, FaLinkedinIn } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const projects = [
    {
      title: "Weather App",
      description:
        "A React application that fetches and displays real-time weather updates.Users can search for any city and view temperature, humidity, and forecast.",
      image: "/Images/weatherapp.png",
      technologies: ["React Js", "Tailwind CSS", "OpenWeather API"],
      linkNetlify: "https://rutuja-weatherapp.netlify.app/",
      linkGithub: "https://github.com/Rutu-yadav/WeatherApp",
      linkLinkedin: "https://www.linkedin.com/in/rutujayadav/",
      viewNetlify: <FaExternalLinkAlt />,
      viewGithub: <FaGithub />,
      viewLinkedin: <FaLinkedinIn />,
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React showcasing projects and skills.Includes smooth navigation and a modern responsive design.",
      image: "/Images/portfolioo.png",
      technologies: ["React Js", "Tailwind CSS", "Framer Motion"],
      linkNetlify: "https://rutujayadav.netlify.app/",
      linkGithub: "https://github.com/Rutu-yadav/portfolio",
      linkLinkedin: "https://www.linkedin.com/in/rutujayadav/",
      viewNetlify: <FaExternalLinkAlt />,
      viewGithub: <FaGithub />,
      viewLinkedin: <FaLinkedinIn />,
    },
    {
      title: "Todo List App",
      description:
        "A simple and intuitive Todo List application built with React.Users can add, edit, delete, and mark tasks as completed.",
      image: "/Images/todo.png",
      technologies: ["React Js", "Tailwind CSS", "Local Storage"],
      linkNetlify: "https://rutuja-todolistapp.netlify.app/",
      linkGithub: "https://github.com/Rutu-yadav/TodoListApp",
      linkLinkedin: "https://www.linkedin.com/in/rutujayadav/",
      viewNetlify: <FaExternalLinkAlt />,
      viewGithub: <FaGithub />,
      viewLinkedin: <FaLinkedinIn />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      id="projects"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-4">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-blue-900 dark:text-blue-400"
        >
          Projects
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ scale: 0.98, y: -5 }}
              className="bg-blue-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full h-48 sm:h-56 md:h-64 overflow-hidden flex justify-center items-center bg-white dark:bg-gray-700"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-2"
                />
              </motion.div>

              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex justify-evenly sm:justify-evenly items-center gap-4 sm:gap-6">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.linkNetlify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300"
                    aria-label="View Live Demo"
                  >
                    {project.viewNetlify}
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.linkGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300"
                    aria-label="View GitHub Repository"
                  >
                    {project.viewGithub}
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.linkLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300"
                    aria-label="View LinkedIn Profile"
                  >
                    {project.viewLinkedin}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Projects;

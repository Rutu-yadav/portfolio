import { FaGithub, FaExternalLinkAlt, FaLinkedinIn } from "react-icons/fa";

function Projects() {
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
      icon: "/icons/github.svg",
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

  return (
    <div id="projects" className="h-screen pt-36 ">
      <div className="container mx-auto px-20">
        <h1 className="text-3xl font-bold text-center mb-10 text-blue-900 dark:text-blue-400">
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
                <div className="flex justify-evenly items-center ">
                  <div>
                    <a
                      href={project.linkNetlify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2  rounded-lg  transition-colors text-2xl font-bold text-blue-500 hover:text-blue-800"
                    >
                      {project.viewNetlify}
                    </a>
                  </div>
                  <div className="">
                    <a
                      href={project.linkGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2    rounded-lg  transition-colors text-3xl font-bold text-blue-500 hover:text-blue-800"
                    >
                      {project.viewGithub}
                    </a>
                  </div>
                  <div>
                    <a
                      href={project.linkLinkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2    rounded-lg  transition-colors text-3xl font-bold text-blue-500 hover:text-blue-800"
                    >
                      {project.viewLinkedin}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

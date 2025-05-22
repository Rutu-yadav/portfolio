import React from "react";

function Skills() {
  const skills = {
    frontend: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "jQuery", icon: "/icons/jquery-icon.svg" },
      { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { name: "React JS", icon: "/icons/reactjs.svg" },
    ],
    backend: [
      { name: "C", icon: "/icons/cpp.svg" },
      { name: "C++", icon: "/icons/c.svg" },
      { name: "Java", icon: "/icons/java.svg" },
      { name: "Spring Boot", icon: "/icons/spring.svg" },
      { name: "Hibernate", icon: "/icons/hibernate.svg" },
    ],
    database: [{ name: "MySQL", icon: "/icons/mysql.svg" }],
    tools: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      { name: "Postman", icon: "/icons/postman-icon.svg" },
    ],
  };

  return (
    <div id="skills" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mt-6 sm:mt-10 text-blue-900 dark:text-blue-400">
          Skills
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 mt-8 sm:mt-12">
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 gap-6 mx-4 sm:mx-8 md:mx-12 lg:mx-20">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-white dark:bg-gray-800 bg-opacity-10 mt-4 dark:bg-opacity-0 backdrop-blur-sm rounded-lg p-4 sm:p-6 transition-all duration-300 "
                >
                  <h2 className="text-lg sm:text-xl font-semibold mb-4 text-blue-900 dark:text-blue-400 capitalize">
                    {category}:-
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
                    {items.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-evenly gap-1 p-2 sm:p-3 dark:bg-gray-800 bg-opacity-10 dark:bg-opacity-0 rounded-lg transition-all duration-300 cursor-pointer shadow-xl border-2 border-gray-500 dark:border-white hover:bg-blue-500 hover:opacity-999 dark:hover:bg-blue-500 group hover:shadow-blue-500/50 hover:scale-[1.05]"
                      >
                        {skill.icon && (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-6 sm:w-8    transition-transform duration-500 hover:rotate-360"
                          />
                        )}
                        <p className="text-sm sm:text-base font-medium text-blue-900 dark:text-blue-400 group-hover:text-white transition-colors duration-300 text-center text-nowrap">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
            <div className="bg-white dark:bg-gray-800 bg-opacity-10 dark:bg-opacity-0 backdrop-blur-sm rounded-lg p-4 h-full flex items-center justify-center transition-transform duration-300 hover:scale-[1.05]">
              <img
                src="/Images/undraw_react_ytu4.svg"
                alt="Skills"
                className="w-full h-auto rounded-lg animate-spin-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

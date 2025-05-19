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
    <div id="skills" className="py-20">
      <div>
        <h1 className="text-4xl font-bold text-center mt-10 text-blue-900 dark:text-blue-400">
          Skills
        </h1>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 lg:w-2/3 sm:w-full ">
            <div className="grid grid-cols-1 mx-20">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-white dark:bg-gray-800 bg-opacity-10 mt-4 dark:bg-opacity-0 backdrop-blur-sm rounded-lg"
                >
                  <h2 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-400 capitalize">
                    {category}:-
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-2">
                    {items.map((skill, index) => (
                      <div
                        key={index}
                        className="flex  items-center justify-evenly gap-1 p-2 dark:bg-gray-800 bg-opacity-10 dark:bg-opacity-0 rounded-lg transition-all duration-300 cursor-pointer shadow-xl border-2 border-gray-500 dark:border-white hover:bg-blue-500 hover:opacity-999 dark:hover:bg-blue-500 group hover:shadow-blue-500/50"
                      >
                        {skill.icon && (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-8 "
                          />
                        )}
                        <h3 className="text-bold text-lg font-medium text-blue-900 dark:text-blue-400 group-hover:text-white transition-colors duration-300 text-center text-nowrap">
                          {skill.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/4">
            <div className="bg-white dark:bg-gray-800 bg-opacity-10 dark:bg-opacity-0 backdrop-blur-sm rounded-lg p-4 h-full flex items-center justify-center">
              <img
                src="/Images/undraw_programmer_raqr.svg"
                alt="Skills"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

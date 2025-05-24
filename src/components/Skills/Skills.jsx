import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
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
      id="skills"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 sm:py-16 md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-center mt-6 sm:mt-10 text-blue-900 dark:text-blue-400"
        >
          Skills
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 gap-6 mx-4 sm:mx-8 md:mx-12 lg:mx-20">
              {Object.entries(skills).map(([category, items]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 bg-opacity-10 dark:bg-opacity-0 transition-all duration-300"
                >
                  <motion.h2
                    initial={{ x: 30, opacity: 0 }}
                    animate={
                      isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }
                    }
                    transition={{ duration: 0.5 }}
                    className="text-lg sm:text-xl font-semibold mb-2 text-blue-900 dark:text-blue-400 capitalize"
                  >
                    {category}:-
                  </motion.h2>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4"
                  >
                    {items.map((skill, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="flex items-center justify-evenly gap-1 p-2 sm:p-3 dark:bg-gray-800 bg-opacity-10 dark:bg-opacity-0 rounded-lg transition-all duration-300 cursor-pointer shadow-xl border-2 border-gray-500 dark:border-white hover:bg-blue-500 hover:opacity-999 dark:hover:bg-blue-500 group hover:shadow-blue-500/50"
                      >
                        {skill.icon && (
                          <motion.img
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            src={skill.icon}
                            alt={skill.name}
                            className="w-6"
                          />
                        )}
                        <p className="text-sm sm:text-base font-medium text-blue-900 dark:text-blue-400 group-hover:text-white transition-colors duration-300 text-center text-nowrap">
                          {skill.name}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:w-1/4 mt-8 lg:mt-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 bg-opacity-10 dark:bg-opacity-0 backdrop-blur-sm rounded-lg p-4 h-full flex items-center justify-center transition-transform duration-300"
            >
              <img
                src="/Images/undraw_react_ytu4.svg"
                alt="Skills"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;

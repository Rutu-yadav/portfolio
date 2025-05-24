import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const nameVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: [0, -20, 0, -10, 0],
      transition: {
        x: {
          duration: 0.8,
          ease: "easeOut",
        },
        y: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="text-center mt-12 sm:mt-4 bg-blue-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg"
    >
      <p className="text-gray-600">
        © {new Date().getFullYear()} All Rights Reserved | Developed with ❤️ by{" "}
        <motion.span
          variants={nameVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-blue-500 font-semibold dark:text-blue-500 inline-block"
        >
          Rutuja Yadav
        </motion.span>
      </p>
    </motion.div>
  );
}

export default Footer;

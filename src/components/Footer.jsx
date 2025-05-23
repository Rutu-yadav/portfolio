import React from "react";

function Footer() {
  return (
    <div className="text-center mt-12 sm:mt-4 bg-blue-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <p className="text-gray-600">
        © {new Date().getFullYear()} All Rights Reserved | Developed with ❤️ by{" "}
        <span className="text-blue-500 font-semibold dark:text-blue-500">
          Rutuja Yadav
        </span>
      </p>
    </div>
  );
}

export default Footer;

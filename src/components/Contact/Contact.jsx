import React, { useRef } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xsivd9d", "template_q6lk9gc", form.current, {
        publicKey: "5G199fn12e-bxR_m6",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };
  return (
    <div id="contact" className="pt-28">
      <div className="">
        <h1 className="text-4xl font-bold text-center mt-2 text-blue-900 dark:text-blue-400">
          Contact Me
        </h1>

        <div className="max-w-4xl mx-auto p-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Send a Message
              </h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    id="name"
                    placeholder="Enter your name"
                    className="mt-2 block w-full rounded-md border-2 shadow-lg focus:ring-4 focus:ring-blue-500 dark:bg-gray-700 dark:text-white px-4 py-2 bg-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Enter your email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-2 shadow-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white px-4 py-2 bg-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    rows="3"
                    className="mt-1 block w-full rounded-lg border-2 shadow-lg  focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white px-4 py-2 bg-white"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Social Links
                </h2>
                <div className="flex space-x-4">
                  <Link
                    to="https://github.com/Rutu-yadav"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <div>
                      <FaGithub className="text-2xl" />
                    </div>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/rutujayadav/"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <div>
                      <FaLinkedin className="text-2xl" />
                    </div>
                  </Link>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=rutujayadav1601@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <div>
                      <FaEnvelope className="text-2xl" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

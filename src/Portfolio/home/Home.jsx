import React, { useState, useEffect } from "react";
import {technologies} from "../../data/about";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const currentWord = technologies[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(150);
      } else {
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(50);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % technologies.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <section
      id="home"
      className="h-screen pt-20 flex flex-col justify-center items-center bg-[#1A1A1A] px-4 md:px-12"
    >
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-center">
        Mukarram Ali
      </h1>

      <h2 className="text-lg sm:text-2xl md:text-3xl h-10 text-[#FFD700] mt-2 flex">
        {text}
        <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
      </h2>

      <p className="text-gray-400 text-center text-base sm:text-lg md:text-xl mt-4 max-w-2xl mb-2">
        A results-driven web and mobile app developer specializing in building high-performance
        digital solutions. Committed to clean code, seamless user experiences, and driving product success.
      </p>

      <button
        type="button"
        onClick={() => {
          const projectsSection = document.getElementById("projects");
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 
  font-medium rounded-lg text-md px-6 sm:px-8 py-2.5 me-2 mb-2 
  dark:bg-blue-600 dark:hover:bg-blue-700 transition-transform transform hover:-translate-y-1 
  sm:hover:-translate-y-1.5"
      >
        View My Work
      </button>

    </section>
  );
};

export default Home;

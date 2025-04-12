import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaEnvelope, FaFolder, FaBars, FaTimes } from "react-icons/fa";
import Star from './Star';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="md:bg-blue-700 bg-gray-800 text-white p-4 px-5 fixed w-full top-0 shadow-md z-50 h-20 flex items-center">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <Star />
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className="hidden md:flex space-x-6">
            <li className="flex items-center space-x-2 cursor-pointer">
              <FaHome size={24} />
              <Link to="home" smooth={true} duration={500} offset={-70}>Home</Link>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <FaUser size={20} />
              <Link to="about" smooth={true} duration={500} offset={-70}>About</Link>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <FaFolder size={20} />
              <Link to="projects" smooth={true} duration={1000} offset={-70}>Projects</Link>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <FaEnvelope size={20} />
              <Link to="contact" smooth={true} duration={1000} offset={-70}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu outside the nav */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-gray-600 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>
        <ul className="flex flex-col items-center mt-16 space-y-6">
          <li className="flex items-center space-x-2 cursor-pointer">
            <FaHome />
            <Link to="home" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <FaUser />
            <Link to="about" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <FaFolder />
            <Link to="projects" smooth={true} duration={1000} offset={-70} onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <FaEnvelope />
            <Link to="contact" smooth={true} duration={1000} offset={-70} onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

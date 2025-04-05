import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-10 px-6 sm:px-12 border-t border-gray-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-blue-600">Muhammad Mukarram</h2>
          <p className="mt-4 text-gray-300">
            Passionate about building high-quality web and mobile applications. 
            Let's collaborate and create something amazing!
          </p>
          <p className="mt-4 text-sm text-gray-400">© 2025 Muhammad Mukarram. All rights reserved.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-600">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileTap={{ scale: 0.9, color: "#3b82f6" }} 
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={`${item.toLowerCase()}`} className="hover:underline hover:cursor-pointer">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-600">Connect with Me</h2>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white">
              <FaGithub size={20} />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white">
              <FaWhatsapp size={20} />
            </a>
          </div>
          <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg transition">
            Connect With ME
          </button>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        Designed and Develop with passion
      </div>
    </footer>
  );
}

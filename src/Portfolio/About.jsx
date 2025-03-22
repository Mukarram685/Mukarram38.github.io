import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiRedux, SiFirebase, SiExpress, SiMongoose, SiMongodb, SiMongoosedotws } from "react-icons/si";
import { about } from "../data/about";

const About = () => {

  console.log(about);

  const skills = [
    { name: "JavaScript", icon: <FaJs size={24} className="text-[#F7DF1E]" />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript size={24} className="text-[#3178C6]" />, color: "#3178C6" },
    { name: "React", icon: <FaReact size={24} className="text-[#61DAFB]" />, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={24} className="text-[#06B6D4]" />, color: "#06B6D4" },
    // { name: "HTML", icon: <FaHtml5 size={24} className="text-[#E34F26]" />, color: "#E34F26" },
    // { name: "CSS", icon: <FaCss3Alt size={24} className="text-[#1572B6]" />, color: "#1572B6" },
    { name: "Responsive Design", icon: "📱", color: "#007BFF" }, // Emoji for Responsive Design
    { name: "Git", icon: <FaGitAlt size={24} className="text-[#F05032]" />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub size={24} className="text-[#181717]" />, color: "#181717" },
    { name: "Redux", icon: <SiRedux size={24} className="text-[#FFCA28]" />, color: "#764ABC" },
    { name: "Firebase", icon: <SiFirebase size={24} className="text-[#FFCA28]" />, color: "#FFCA28" },
    { name: "Express", icon: <SiExpress size={24} className="text-[#FFCA28]" />, color: "#FFCA28" },
    { name: "MongoDB", icon: <SiMongodb size={24} className="text-[#47A248]" />, color: "#47A248" },
  ];

  return (
    <section id="about" className="bg-[#1A1A1A] text-white px-4 py-12">
      <div>
        <h2 className="text-3xl text-center font-bold text-[#007BFF] mb-1">About Me</h2>
        <div className="h-[1px] max-w-sm mx-auto bg-[#FFCA28] mb-6"></div>
        <div className="space-y-4">
          <p className="text-md text-center mb-4 max-w-3xl m-auto">
            I am a <span className="text-[#FFD700] font-semibold">Frontend Developer</span>React and React Native for web and mobile development. It emphasizes quality, scalability, and user experience with modern and impactful language.
          </p>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row py-4 gap-8">
          <div className="flex-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-5  opacity-95 hover:opacity-100 transition-opacity">
            <h2 className="text-2xl font-bold text-[#007BFF] mb-6">Get to know me!</h2>
            <div className="space-y-4">

              {
                about.map((item) => (
                  <p key={item.id} className="text-md">
                    {item.description}
                  </p>
                ))
              }
            </div>
          </div>

          <div className="flex-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-5 opacity-95 hover:opacity-100 transition-opacity">
            <h2 className="text-2xl font-bold text-[#007BFF] mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">

              {skills.map((skill, index) => (
                <p
                  key={index}
                  className="text-md flex items-center gap-3 border bg-gray-700 border-gray-400 rounded-md p-2 px-3 hover:bg-gray-700 hover:shadow-md transition-all"
                  style={{
                    borderColor: skill.color,
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = skill.color;
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#F7DF1E";
                  }}
                >
                  {skill.icon} {skill.name}
                </p>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
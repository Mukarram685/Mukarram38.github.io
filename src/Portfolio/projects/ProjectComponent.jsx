import React, { useState, useEffect } from "react";

const ProjectComponent = ({ project, onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div 
      className="bg-gray-800 text-white rounded-xl pb-8 shadow-lg p-4 max-w-md mx-auto hover:scale-105 transition-transform cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-60 w-full overflow-hidden bg-gray-500/50 rounded-lg">
        <div className="m-3 bg-gray-900/50 rounded-lg overflow-hidden h-full">
          <img
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-opacity duration-500"
          />
        </div>
      </div>

      <h2 className="text-xl font-bold mt-4">{project.title}</h2>
      <p className="text-gray-300 mt-2">{project.description}</p>
      <div className="flex flex-wrap mt-4 gap-2">
        {project.technologies.slice(0, 5).map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-[12px] bg-[#007BFF] text-white rounded-[5px]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
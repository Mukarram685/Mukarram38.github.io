import React from 'react'
import { useState } from "react";
import ProjectComponent from "./ProjectComponent";
import ProjectDetail from "./ProjectDetail";
import {projects} from "../../data/projects";

const ProjectsList = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
  
    const toggleShowAll = () => {
      setShowAll(!showAll);
    };
  
    const handleProjectClick = (project) => {
      setSelectedProject(project);
    };
  
    const handleCloseDetail = () => {
      setSelectedProject(null);
    };
  
    const visibleProjects = showAll ? projects : projects.slice(0, 3);
  
    return (
      <section id="projects" className="px-2 py-12 bg-[#1A1A1A] text-white">
        <h2 className="text-3xl font-bold text-[#007BFF] text-center mb-8">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visibleProjects.map((project, index) => (
            <ProjectComponent 
              key={index} 
              project={project} 
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
  
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleShowAll}
            className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
          >
            {showAll ? "Show Less" : "Show More Projects"}
          </button>
        </div>
  
        <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
      </section>
    );
  };
  
  export default ProjectsList;
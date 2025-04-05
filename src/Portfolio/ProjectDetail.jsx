import React from 'react'
import { useState, useEffect } from "react";

const ProjectDetail = ({ project, onClose }) => {
    if (!project) return null;
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
        <div className="fixed inset-0 z-50 overflow-hidden ">
            <div
                className="absolute inset-0 bg-gray-800 bg-opacity-50 transition-opacity"
                onClick={onClose} >
            </div>
            <div className="absolute inset-y-0 right-0 max-w-full flex">
                <div className="relative w-screen max-w-md lg:max-w-xl">
                    <div className="h-full flex flex-col bg-gray-800 shadow-xl overflow-y-scroll">
                        <div className="flex-1 p-6 overflow-y-auto">
                            <div className="flex items-start justify-end">
                                <button
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <span className="sr-only">Close panel</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-2xl font-bold text-[#007BFF] mb-4">{project.title}</h2>
                                <div className="mb-6">
                                    <div className="relative h-64 w-full overflow-hidden bg-gray-500/50 rounded-lg">
                                        <img
                                            src={project.images[currentImageIndex]}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="flex mt-5 space-x-3 overflow-x-auto justify-center">
                                        {project.images.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt={`${project.title} ${index + 1}`}
                                                className="h-16 w-16 object-cover rounded cursor-pointer"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="prose prose-invert">
                                    <p className="text-gray-300 mb-4">{project.description}</p>

                                    {project.longDescription && (
                                        <p className="text-gray-300 mb-4">{project.longDescription}</p>
                                    )}

                                    <h3 className='text-lg font-semibold text-blue-500 mb-2'>Features</h3>
                                    {project.features && project.features.length > 0 ? (
                                        <ul className="list-disc list-inside text-gray-300 mb-4">
                                            {project.features.map((feature, index) => (
                                                <li key={index} className="mb-2 list-none">{feature}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-300">No features available.</p>
                                    )}

                                    <h3 className="text-lg font-semibold text-white mb-2">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-[#007BFF] text-white rounded-[5px] text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {project.liveUrl && (
                                        <div className="mb-4">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-4"
                                            >
                                                Live Demo
                                            </a>
                                        </div>
                                    )}

                                    {project.githubUrl && (
                                        <div className="mb-4">
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
                                            >
                                                View on GitHub
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail
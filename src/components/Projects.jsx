import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const filters = ['All', ...new Set(data.map((p) => p.category))];

  const filteredProjects =
    activeFilter === 'All'
      ? data
      : data.filter((p) => p.category === activeFilter);

  return (
    <motion.section
      id="projects"
      className="min-h-fit bg-white dark:bg-gray-900 p-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold font-poppins text-center text-navy dark:text-white mb-8">
        Projects
      </h2>

      <div className="flex justify-center mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 mx-2 rounded-full font-bold font-inter transition-colors duration-300 ${
              activeFilter === filter
                ? 'bg-teal text-navy'
                : 'bg-gray-200 dark:bg-gray-700 text-navy dark:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            layout
          >
            <h3 className="text-2xl font-bold font-poppins text-navy dark:text-white">
              {project.title}
            </h3>
            <div className="flex flex-wrap mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-teal text-navy px-2 py-1 rounded-full text-sm mr-2 mb-2 font-inter"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex space-x-2">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy text-white px-4 py-2 rounded-full font-bold text-sm font-inter hover:bg-teal hover:text-navy transition-colors duration-300"
                >
                  GitHub
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal text-navy px-4 py-2 rounded-full font-bold text-sm font-inter hover:bg-navy hover:text-white transition-colors duration-300"
                >
                  Live
                </a>
              )}
              <button
                className="bg-soft-gray text-text-dark px-4 py-2 rounded-full font-bold text-sm font-inter hover:bg-blue-500 hover:text-text-light transition-colors duration-300"
                onClick={() => openModal(project)}
              >
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </motion.section>
  );
};

export default Projects;
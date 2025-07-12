import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-2xl w-full relative"
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          exit={{ y: "100vh", opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          <button
            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
          <h3 className="text-3xl font-bold text-navy dark:text-white mb-4">{project.title}</h3>
          <div className="flex flex-wrap mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-teal text-navy px-2 py-1 rounded-full text-sm mr-2 mb-2">{tag}</span>
            ))}
          </div>
          <div className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
            {project.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="flex space-x-4 mt-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white px-4 py-2 rounded-full font-bold hover:bg-teal hover:text-navy transition-colors duration-300"
              >
                View on GitHub
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal text-navy px-4 py-2 rounded-full font-bold font-inter hover:bg-navy hover:text-white transition-colors duration-300"
              >
                View Live
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;

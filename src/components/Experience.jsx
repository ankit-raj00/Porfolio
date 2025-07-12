import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-navy text-white p-6">
      <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal"></div>
        {data.map((experience, index) => (
          <motion.div 
            key={index}
            className="mb-8 flex justify-center items-center w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
              <h3 className="text-2xl font-bold">{experience.role}</h3>
              <p className="text-lg">{experience.company}</p>
              <p className="text-md text-gray-400">{experience.date}</p>
              <button 
                onClick={() => handleToggle(index)}
                className="text-teal hover:underline mt-2"
              >
                {expandedIndex === index ? 'Show Less' : 'Show More'}
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-300 text-sm"
                  >
                    {experience.description.map((item, descIndex) => (
                      <p key={descIndex}>{item}</p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center z-10">
              <div className="w-4 h-4 bg-navy rounded-full"></div>
            </div>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

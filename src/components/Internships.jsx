import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Internships = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.section 
      className="min-h-fit bg-gray-50 dark:bg-navy text-navy dark:text-white p-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold font-poppins text-center mb-8 text-navy dark:text-white">Internships</h2>
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
              <h3 className="text-2xl font-bold font-poppins text-navy dark:text-teal">{experience.role}</h3>
              <p className="text-lg text-navy dark:text-gray-200">{experience.company}</p>
              <p className="text-md font-inter text-gray-600 dark:text-gray-300">{experience.date}</p>
              <button 
                onClick={() => handleToggle(index)}
                className="text-teal hover:underline mt-2 font-inter"
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
                    className="mt-2 text-gray-200 text-sm font-inter"
                  >
                    {experience.description.map((item, descIndex) => (
                      <p key={descIndex}>{item}</p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center z-10">
              <div className="w-4 h-4 bg-background-dark rounded-full"></div>
            </div>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Internships;
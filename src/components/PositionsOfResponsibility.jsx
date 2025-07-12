import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PositionsOfResponsibility = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.section 
      className="min-h-fit bg-white dark:bg-gray-900 p-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold font-poppins text-center mb-12 text-navy dark:text-teal">Positions of Responsibility</h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal"></div>

        {data.map((por, index) => (
          <motion.div 
            key={index}
            className={`mb-8 flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left'}`}>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold font-poppins text-navy dark:text-teal">{por.role}</h3>
                <p className="text-lg text-navy dark:text-gray-200">{por.company}</p>
                <p className="text-md font-inter text-gray-600 dark:text-gray-300">{por.date}</p>
                <button 
                  onClick={() => handleToggle(index)}
                  className="text-teal hover:underline mt-2 text-sm font-inter"
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
                      className="mt-2 text-gray-800 dark:text-gray-200 text-sm font-inter"
                    >
                      {por.description.map((item, descIndex) => (
                        <p key={descIndex}>{item}</p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-teal rounded-full flex items-center justify-center z-10">
              <div className="w-4 h-4 bg-navy rounded-full"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PositionsOfResponsibility;

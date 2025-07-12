import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(data.categories)[0]);

  return (
    <motion.section 
      className="min-h-fit bg-gray-50 dark:bg-navy text-navy dark:text-white p-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold font-poppins text-center mb-8 text-navy dark:text-white">Skills</h2>
      <div className="flex justify-center mb-8">
        {Object.keys(data.categories).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 mx-2 rounded-full font-bold font-inter transition-colors duration-300 ${activeTab === tab ? 'bg-teal text-navy' : 'bg-gray-200 dark:bg-gray-700 text-navy dark:text-white'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {data.categories[activeTab].map((skill, index) => (
          <motion.div 
            key={skill}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center text-text-dark dark:text-text-light font-inter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;

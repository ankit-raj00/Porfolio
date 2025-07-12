import React from 'react';
import { motion } from 'framer-motion';

const About = ({ data }) => {
  return (
    <motion.section 
      className="min-h-fit bg-gray-50 dark:bg-gray-900 p-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="h-auto bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto max-w-sm"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/image.jpg" alt="Profile" className="w-full h-full object-contain rounded-lg shadow-lg" />
        </motion.div>
        <div>
          <motion.h2 
            className="text-4xl font-bold font-poppins text-navy dark:text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {data.title}
          </motion.h2>
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {data.bio.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 dark:text-gray-300 font-inter text-text-dark dark:text-gray-300">{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

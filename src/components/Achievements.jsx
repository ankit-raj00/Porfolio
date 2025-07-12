import React from 'react';
import { motion } from 'framer-motion';

const Achievements = ({ data }) => {
  return (
    <motion.section 
      className="min-h-fit bg-white dark:bg-gray-900 p-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold font-poppins text-center text-navy dark:text-white mb-8">Achievements</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((achievement, index) => (
          <motion.div 
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-4xl text-teal mb-4">🏆</div>
            <p className="text-lg text-navy dark:text-white font-inter">{achievement}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Achievements;

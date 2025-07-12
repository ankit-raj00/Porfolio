import React from 'react';
import { motion } from 'framer-motion';

const Leadership = ({ data }) => {
  return (
    <section className="min-h-screen bg-navy text-white p-6">
      <h2 className="text-4xl font-bold text-center mb-8">Leadership</h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <motion.div 
            key={index}
            className="bg-gray-800 p-4 rounded-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold text-teal">{item.role}</h3>
            <p className="text-lg">{item.org}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
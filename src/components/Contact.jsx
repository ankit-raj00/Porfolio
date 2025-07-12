import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ data }) => {
  return (
    <motion.section 
      className="min-h-fit bg-white dark:bg-gray-900 p-6 flex items-center justify-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-lg">
        <h2 className="text-4xl font-bold font-poppins text-center text-navy dark:text-white mb-8">{data.title}</h2>
        <motion.form 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <input type="text" placeholder="Name" className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-teal font-inter" />
          </div>
          <div>
            <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-teal font-inter" />
          </div>
          <div>
            <textarea placeholder="Message" rows="4" className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-teal font-inter"></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="w-full bg-teal text-navy p-3 rounded-lg font-bold font-inter hover:bg-navy hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.form>
        
      </div>
    </motion.section>
  );
};

export default Contact;

'use client'

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.section 
          className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-900 to-primary text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Re-Engineering Innovation, Driving Excellence
          </motion.h1>
          <motion.p 
            className="text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            At Kernel Greens Integrated Services, we provide cutting-edge software development, IT support, and cloud operations solutions.
          </motion.p>
          <motion.a
            href="/services"
            className="mt-6 px-6 py-3 bg-accent text-gray-900 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
            whileHover={{ scale: 1.05 }}
          >
            Explore Our Services
          </motion.a>
        </motion.section>
      );
};

export default Hero;

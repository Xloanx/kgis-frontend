'use client'
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      className="py-20 bg-gray-100 text-gray-900"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>
        <motion.p 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Founded by passionate engineers, Kernel Greens is committed to 
          delivering cutting-edge solutions that empower businesses. 
          We specialize in software development, IT support, and cloud operations, 
          ensuring that your digital initiatives thrive. <br />
          With a team of skilled professionals and a commitment to excellence, 
          we are dedicated to helping you navigate the ever-evolving landscape of 
          technology...
          <Link href="/about" className="text-gray-600 hover:text-accent font-semibold hover:underline">Learn More</Link>
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;

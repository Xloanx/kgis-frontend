'use client'


import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="bg-primary text-white text-center py-4 mt-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>&copy; {new Date().getFullYear()} Kernel Greens Integrated Services. All Rights Reserved.</p>
      <p className="mt-2">
        Experience a flawed service? Report to  <Link href="https://resolvo.vercel.app" className="text-accent font-semibold hover:underline">Resolvo</Link>
      </p>
    </motion.footer>
  );
};

export default Footer;

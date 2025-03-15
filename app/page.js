'use client'
import Navbar from "@/components/navbar"
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
   
      <Hero />
      <Services />
      <About />
  
    </motion.div>
  );
}

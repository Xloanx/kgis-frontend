'use client'

import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { useParams } from "next/navigation"; // Correct way to get route params in Next.js 13+
import Link from "next/link";
import { ProjectCarousel } from "@/components/project-carousel";
import { motion } from "framer-motion"; // For smooth animations

const ServiceDetails = () => {
  const { sid } = useParams(); // Correctly extract service ID
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const matchedProjects = projects.filter(project => project.sid === sid);
    setFilteredProjects(matchedProjects);
  }, [sid]);

  return (
    <div className="container mx-auto py-10 px-6">
      {filteredProjects.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <p className="text-gray-600 text-lg mt-36">Details of projects for this service are yet to be added.</p>
          <Link href="/services">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
            >
              Back to All Services
            </motion.button>
          </Link>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7 }}
        >
          <ProjectCarousel filteredProjects={filteredProjects} />
        </motion.div>
      )}
    </div>
  );
};

export default ServiceDetails;

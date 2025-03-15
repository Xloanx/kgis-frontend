'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ServiceCard = ({ title, shortDescription, longDescription, sid }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/services/${sid}`} passHref>
      <motion.div 
        className="relative w-64 md:w-80 h-40 md:h-48 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1, rotateY: 180, width: "320px" }} 
        transition={{ duration: 0.5 }}
      >
        {/* Front Side */}
        <motion.div 
          className="absolute w-full h-full bg-primary text-white flex items-center justify-center rounded-lg shadow-lg p-4 backface-hidden"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isHovered ? 180 : 0 }}
        >
          <h3 className="text-lg font-bold text-center">{title}</h3>
        </motion.div>

        {/* Back Side (Expanded Details) */}
        <motion.div 
          className="absolute w-full h-full bg-accent text-white flex items-center justify-center rounded-lg shadow-lg p-4 backface-hidden"
          initial={{ rotateY: -180 }}
          animate={{ rotateY: isHovered ? 0 : -180 }}
        >
          <p className="text-sm text-center text-amber-950" style={{ transform: "rotateY(180deg)" }}>
            {longDescription}
          </p>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;

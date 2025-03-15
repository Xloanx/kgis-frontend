'use client'

import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceCard from "@/components/serviceCard";
  
  const Services = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <motion.section 
            className="py-20 bg-white text-gray-900"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto text-center">
              <motion.h2 
                className="text-4xl font-bold mb-10"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Our Services
              </motion.h2>
              <section className="p-16 bg-gray-100">
                <div className="container mx-auto text-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {services.map((service, index) => (
                      <ServiceCard key={index} {...service} />
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </motion.section>
        </main>
     
      </div>

    );
  };
  
  export default Services;
  
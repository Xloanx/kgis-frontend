'use client'
import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceCard from "./serviceCard";

  
  const Services = () => {
    return (
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
      );
  };
  
  export default Services;
  
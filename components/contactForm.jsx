'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setMessage("Sending...");
    
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setMessage("Message sent successfully!");
      reset();
    } else {
      setMessage("Failed to send message.");
    }
  };

  return (
    <motion.section 
      className="py-20 bg-white text-gray-900"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto max-w-lg">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <input 
            {...register("name", { required: true })} 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border rounded"
          />
          {errors.name && <span className="text-red-500">Name is required</span>}

          <input 
            {...register("email", { required: true })} 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 border rounded"
          />
          {errors.email && <span className="text-red-500">Valid email is required</span>}

          <textarea 
            {...register("message", { required: true })} 
            placeholder="Your Message" 
            className="w-full p-3 border rounded h-32"
          ></textarea>
          {errors.message && <span className="text-red-500">Message is required</span>}

          <button 
            type="submit" 
            className="w-full py-3 bg-accent text-white font-bold rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>

          {message && <p className="text-center mt-2">{message}</p>}
        </form>
      </div>
    </motion.section>
  );
};

export default ContactForm;

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div 
        className="text-center text-white px-4 max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-8"
          variants={titleVariants}
        >
          About Us
        </motion.h2>
        <motion.p 
          className="text-lg md:text-2xl mb-8"
          variants={textVariants}
        >
          At Delicious Bites, we believe in providing an unforgettable dining experience. 
          Our chefs use the freshest ingredients to create mouth-watering dishes that will 
          leave you coming back for more. Whether you're here for a quick bite or a 
          full-course meal, we have something for everyone.
        </motion.p>
        <motion.p 
          className="text-lg md:text-2xl mb-8"
          variants={textVariants}
        >
          Our 3D dining experience allows you to explore our menu in a unique and interactive way. 
          We hope you enjoy your time with us and look forward to serving you again soon!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutSection;

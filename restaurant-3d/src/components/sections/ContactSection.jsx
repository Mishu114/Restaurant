import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
      <motion.div 
        className="text-center text-white px-4 max-w-2xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-8"
          variants={titleVariants}
        >
          Contact Us
        </motion.h2>
        <motion.div 
          className="bg-white bg-opacity-10 backdrop-blur-md p-6 md:p-8 rounded-2xl"
          variants={contentVariants}
        >
          <motion.p 
            className="text-lg md:text-2xl mb-4"
            variants={itemVariants}
          >
            📍 123 Food Street, Culinary City
          </motion.p>
          <motion.p 
            className="text-lg md:text-2xl mb-4"
            variants={itemVariants}
          >
            📞 (555) 123-4567
          </motion.p>
          <motion.p 
            className="text-lg md:text-2xl mb-8"
            variants={itemVariants}
          >
            ✉️ hello@deliciousbites.com
          </motion.p>
          <motion.div 
            className="text-base md:text-xl mb-4"
            variants={itemVariants}
          >
            <p className="font-bold">Opening Hours:</p>
            <p>Mon-Fri: 11:00 AM - 10:00 PM</p>
            <p>Sat-Sun: 10:00 AM - 11:00 PM</p>
          </motion.div>
          <motion.button 
            className="bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold mt-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Make a Reservation
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;

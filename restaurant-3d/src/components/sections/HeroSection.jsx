import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut', delay: 1.2 }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <motion.div 
        className="text-center text-white px-4 relative z-10 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          Delicious Bites
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-4 drop-shadow-lg"
          variants={itemVariants}
        >
          Experience Fine Dining in 3D
        </motion.p>
        <motion.p 
          className="text-base md:text-lg mb-8 drop-shadow-lg max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Immerse yourself in a culinary journey like no other. Our innovative 3D dining experience brings food to life, 
          allowing you to explore our menu in stunning detail before you order.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          variants={itemVariants}
        >
          <motion.button 
            className="bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold shadow-lg"
            whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Explore Menu
          </motion.button>
          <motion.button 
            className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold shadow-lg"
            whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#111827' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Order Now
          </motion.button>
        </motion.div>
        <motion.div 
          className="grid grid-cols-3 gap-4 md:gap-8 mt-12"
          variants={statsVariants}
        >
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-blur-lg p-4 md:p-6 rounded-xl"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <p className="text-3xl md:text-4xl font-bold mb-2">500+</p>
            <p className="text-sm md:text-base">Happy Customers</p>
          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-blur-lg p-4 md:p-6 rounded-xl"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <p className="text-3xl md:text-4xl font-bold mb-2">50+</p>
            <p className="text-sm md:text-base">Menu Items</p>
          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-blur-lg p-4 md:p-6 rounded-xl"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <p className="text-3xl md:text-4xl font-bold mb-2">4.9 ★</p>
            <p className="text-sm md:text-base">Rating</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

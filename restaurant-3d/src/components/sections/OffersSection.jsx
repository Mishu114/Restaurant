import React from 'react';
import { motion } from 'framer-motion';

const OffersSection = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div 
        className="text-center text-white px-4 max-w-6xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-8"
          variants={titleVariants}
        >
          Special Offers
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
        >
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-blur-md p-6 md:p-8 rounded-2xl"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              transition: { type: 'spring', stiffness: 300, damping: 20 }
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Family Deal</h3>
            <p className="text-lg md:text-xl mb-4">2 Large Pizzas + 4 Drinks</p>
            <p className="text-3xl md:text-4xl font-bold">$29.99</p>
          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-blur-md p-6 md:p-8 rounded-2xl"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              transition: { type: 'spring', stiffness: 300, damping: 20 }
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Burger Combo</h3>
            <p className="text-lg md:text-xl mb-4">Any Burger + Fries + Drink</p>
            <p className="text-3xl md:text-4xl font-bold">$12.99</p>
          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-blur-md p-6 md:p-8 rounded-2xl"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              transition: { type: 'spring', stiffness: 300, damping: 20 }
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Sweet Treat</h3>
            <p className="text-lg md:text-xl mb-4">Buy 2 Get 1 Free Dessert</p>
            <p className="text-3xl md:text-4xl font-bold">Special</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OffersSection;

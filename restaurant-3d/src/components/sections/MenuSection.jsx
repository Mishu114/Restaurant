import React from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Pizza from '../3d/Pizza';
import Burger from '../3d/Burger';
import IceCream from '../3d/IceCream';

const MenuSection = ({ title, items, modelType }) => {
  const renderModel = () => {
    switch(modelType) {
      case 'pizza':
        return <Pizza visible={true} />;
      case 'burger':
        return <Burger visible={true} />;
      case 'dessert':
        return <IceCream visible={true} />;
      default:
        return null;
    }
  };

  // Set background color based on model type
  const getBgColor = () => {
    switch(modelType) {
      case 'pizza':
        return 'bg-gradient-to-br from-orange-600 to-red-700';
      case 'burger':
        return 'bg-gradient-to-br from-amber-700 to-orange-800';
      case 'dessert':
        return 'bg-gradient-to-br from-pink-500 to-purple-600';
      default:
        return 'bg-gradient-to-br from-gray-700 to-gray-900';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className={` min-h-screen flex flex-col items-center justify-between pl-4 md:pl-20 pt-16 pr-4 md:pr-20 relative ${getBgColor()}`}>
      {/* Menu Content */}
      <motion.div 
        className="text-white w-full z-10 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-8 text-center"
          variants={titleVariants}
        >
          {title}
        </motion.h2>
        <motion.div 
          className="space-y-4 md:space-y-6 flex justify-evenly"
          variants={containerVariants}
        >
          {items.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2">{item.name}</h3>
              <p className="mb-2 text-sm md:text-base">{item.description}</p>
              <p className="text-xl md:text-2xl font-bold">{item.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* 3D Model Canvas - Sticks to this section */}
      <div className="hidden lg:block w-full h-full absolute right-0 top-[10vh] pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <pointLight position={[-10, 5, -10]} intensity={0.8} color="#ffaa66" />
          <spotLight position={[0, 15, 10]} angle={0.4} penumbra={1} intensity={1.2} castShadow />
          {renderModel()}
        </Canvas>
      </div>
    </section>
  );
};

export default MenuSection;

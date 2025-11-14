import React from 'react';
import { Canvas } from '@react-three/fiber';
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

  return (
    <section className="min-h-screen flex flex-col items-center justify-between pl-4 md:pl-20 pr-4 md:pr-20 relative">
      {/* Menu Content */}
      <div className="text-white w-full z-10 items-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">{title}</h2>
        <div className="space-y-4 md:space-y-6 flex justify-evenly ">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl transform hover:scale-105 hover:bg-opacity-20 transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2">{item.name}</h3>
              <p className="mb-2 text-sm md:text-base">{item.description}</p>
              <p className="text-xl md:text-2xl font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

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

import React from 'react';

const MenuSection = ({ title, items }) => {
  return (
    <section className="min-h-screen flex items-center justify-start pl-4 md:pl-20">
      <div className="text-white max-w-xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">{title}</h2>
        <div className="space-y-4 md:space-y-6">
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
    </section>
  );
};

export default MenuSection;

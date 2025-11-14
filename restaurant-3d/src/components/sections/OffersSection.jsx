import React from 'react';

const OffersSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center text-white px-4 max-w-6xl w-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 md:p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Family Deal</h3>
            <p className="text-lg md:text-xl mb-4">2 Large Pizzas + 4 Drinks</p>
            <p className="text-3xl md:text-4xl font-bold">$29.99</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 md:p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Burger Combo</h3>
            <p className="text-lg md:text-xl mb-4">Any Burger + Fries + Drink</p>
            <p className="text-3xl md:text-4xl font-bold">$12.99</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 md:p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Sweet Treat</h3>
            <p className="text-lg md:text-xl mb-4">Buy 2 Get 1 Free Dessert</p>
            <p className="text-3xl md:text-4xl font-bold">Special</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;

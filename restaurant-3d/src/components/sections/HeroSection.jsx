import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center text-white px-4 relative z-10 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in drop-shadow-lg">
          Delicious Bites
        </h1>
        <p className="text-xl md:text-2xl mb-4 animate-fade-in-delay drop-shadow-lg">
          Experience Fine Dining in 3D
        </p>
        <p className="text-base md:text-lg mb-8 animate-fade-in-delay-2 drop-shadow-lg max-w-3xl mx-auto">
          Immerse yourself in a culinary journey like no other. Our innovative 3D dining experience brings food to life, 
          allowing you to explore our menu in stunning detail before you order.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-delay-3">
          <button className="bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Explore Menu
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 shadow-lg">
            Order Now
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 animate-fade-in-delay-4">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl">
            <p className="text-3xl md:text-4xl font-bold mb-2">500+</p>
            <p className="text-sm md:text-base">Happy Customers</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl">
            <p className="text-3xl md:text-4xl font-bold mb-2">50+</p>
            <p className="text-sm md:text-base">Menu Items</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl">
            <p className="text-3xl md:text-4xl font-bold mb-2">4.9★</p>
            <p className="text-sm md:text-base">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

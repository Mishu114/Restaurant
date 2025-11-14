import React from 'react';

const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center text-white px-4 max-w-4xl w-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">About Us</h2>
        <p className="text-lg md:text-2xl mb-8">
          At Delicious Bites, we believe in providing an unforgettable dining experience. 
          Our chefs use the freshest ingredients to create mouth-watering dishes that will 
          leave you coming back for more. Whether you're here for a quick bite or a 
          full-course meal, we have something for everyone.
        </p>
        <p className="text-lg md:text-2xl mb-8">
          Our 3D dining experience allows you to explore our menu in a unique and interactive way. 
          We hope you enjoy your time with us and look forward to serving you again soon!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

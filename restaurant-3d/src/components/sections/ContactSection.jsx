import React from 'react';

const ContactSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center text-white px-4 max-w-2xl w-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Contact Us</h2>
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 md:p-8 rounded-2xl">
          <p className="text-lg md:text-2xl mb-4">📍 123 Food Street, Culinary City</p>
          <p className="text-lg md:text-2xl mb-4">📞 (555) 123-4567</p>
          <p className="text-lg md:text-2xl mb-8">✉️ hello@deliciousbites.com</p>
          <div className="text-base md:text-xl mb-4">
            <p className="font-bold">Opening Hours:</p>
            <p>Mon-Fri: 11:00 AM - 10:00 PM</p>
            <p>Sat-Sun: 10:00 AM - 11:00 PM</p>
          </div>
          <button className="bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 mt-4">
            Make a Reservation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

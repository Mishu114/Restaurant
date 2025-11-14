import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      if (scrollPosition < windowHeight * 0.9) setActiveSection('intro');
      else if (scrollPosition < windowHeight * 1.9) setActiveSection('offers');
      else if (scrollPosition < windowHeight * 2.9) setActiveSection('about');
      else if (scrollPosition < windowHeight * 3.9) setActiveSection('pizza');
      else if (scrollPosition < windowHeight * 4.9) setActiveSection('burger');
      else if (scrollPosition < windowHeight * 5.9) setActiveSection('dessert');
      else setActiveSection('contact');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const windowHeight = window.innerHeight;
    let scrollTo = 0;

    switch(sectionId) {
      case 'intro': scrollTo = 0; break;
      case 'offers': scrollTo = windowHeight * 1; break;
      case 'about': scrollTo = windowHeight * 2; break;
      case 'pizza': scrollTo = windowHeight * 3; break;
      case 'burger': scrollTo = windowHeight * 4; break;
      case 'dessert': scrollTo = windowHeight * 5; break;
      case 'contact': scrollTo = windowHeight * 6; break;
      default: scrollTo = 0;
    }

    window.scrollTo({ top: scrollTo, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'intro', label: 'Home' },
    { id: 'offers', label: 'Offers' },
    { id: 'about', label: 'About' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'burger', label: 'Burgers' },
    { id: 'dessert', label: 'Desserts' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-10 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('intro')}
              className="text-white text-2xl font-bold hover:scale-105 transition-transform"
            >
              Delicious Bites
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-white bg-opacity-20 text-white'
                      : 'text-white text-opacity-80 hover:bg-white hover:bg-opacity-10 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu.classList.toggle('hidden');
              }}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className="hidden md:hidden bg-white bg-opacity-10 backdrop-blur-md">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                document.getElementById('mobile-menu').classList.add('hidden');
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-white bg-opacity-20 text-white'
                  : 'text-white text-opacity-80 hover:bg-white hover:bg-opacity-10 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

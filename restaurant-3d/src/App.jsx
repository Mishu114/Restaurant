import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import OffersSection from './components/sections/OffersSection';
import AboutSection from './components/sections/AboutSection';
import MenuSection from './components/sections/MenuSection';
import ContactSection from './components/sections/ContactSection';

import { pizzaMenuItems, burgerMenuItems, dessertMenuItems } from './utils/menuData';

export default function App() {
  const [currentSection, setCurrentSection] = useState('intro');
  const videoRef = useRef(null);
  const [videoOpacity, setVideoOpacity] = useState(1);

  useEffect(() => {
    // Initialize video
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, []);


  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Scroll-controlled Video */}
      <div 
        className="fixed inset-0 z-5 pointer-events-none transition-opacity duration-300"
        style={{ opacity: videoOpacity }}
      >
        <video
                    className="w-full h-full object-cover"
          src="/video/hero_section_vid.mp4"
          muted
          playsInline
          preload="metadata"
autoPlay
          loop={false}
        />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        <HeroSection />
        <OffersSection />
        <AboutSection />
        <MenuSection title="Pizza Menu" items={pizzaMenuItems} modelType="pizza" />
        <MenuSection title="Burger Menu" items={burgerMenuItems} modelType="burger" />
        <MenuSection title="Desserts" items={dessertMenuItems} modelType="dessert" />
        <ContactSection />
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.9s both;
        }
        .animate-fade-in-delay-4 {
          animation: fade-in 1s ease-out 1.2s both;
        }
      `}</style>
    </div>
  );
}

// Preload the GLTF models
useGLTF.preload('/models/pepperoni_pizza/scene.gltf');
useGLTF.preload('/models/burger/scene.gltf');
useGLTF.preload('/models/pink_ice_cream/scene.gltf');
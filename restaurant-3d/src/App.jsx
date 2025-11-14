import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import OffersSection from './components/sections/OffersSection';
import AboutSection from './components/sections/AboutSection';
import MenuSection from './components/sections/MenuSection';
import ContactSection from './components/sections/ContactSection';

import { interpolateColors, getSectionBgColor } from './utils/colorUtils';
import { pizzaMenuItems, burgerMenuItems, dessertMenuItems } from './utils/menuData';

export default function App() {
  const [currentSection, setCurrentSection] = useState('intro');
  const videoRef = useRef(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [bgGradient, setBgGradient] = useState(getSectionBgColor('intro'));

  useEffect(() => {
    // Initialize video
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Video scroll control - sync video time with scroll position
      const videoEndPoint = windowHeight * 2.5;
      if (videoRef.current && scrollPosition < videoEndPoint) {
        const videoDuration = videoRef.current.duration || 10;
        const scrollProgress = Math.min(scrollPosition / videoEndPoint, 1);
        const targetTime = scrollProgress * videoDuration;
        
        if (Math.abs(videoRef.current.currentTime - targetTime) > 0.1) {
          videoRef.current.currentTime = targetTime;
        }
      }
      
      // Video opacity control
      if (scrollPosition < videoEndPoint) {
        const fadeStart = windowHeight * 1.5;
        if (scrollPosition < fadeStart) {
          setVideoOpacity(1);
        } else {
          const fadeProgress = (scrollPosition - fadeStart) / (videoEndPoint - fadeStart);
          setVideoOpacity(Math.max(0, 1 - fadeProgress));
        }
      } else {
        setVideoOpacity(0);
      }
      
      // Section transitions
      const section1 = windowHeight * 0.5;
      const section2 = windowHeight * 1.3;
      const section3 = windowHeight * 2.1;
      const section4 = windowHeight * 2.9;
      const section5 = windowHeight * 3.7;
      const section6 = windowHeight * 4.5;
      
      let newColors = getSectionBgColor('intro');
      
      if (scrollPosition < section1) {
        newColors = getSectionBgColor('intro');
        setCurrentSection('intro');
      } else if (scrollPosition < section2) {
        const progress = (scrollPosition - section1) / (section2 - section1);
        newColors = interpolateColors(
          getSectionBgColor('intro'),
          getSectionBgColor('offers'),
          progress
        );
        setCurrentSection('offers');
      } else if (scrollPosition < section3) {
        const progress = (scrollPosition - section2) / (section3 - section2);
        newColors = interpolateColors(
          getSectionBgColor('offers'),
          getSectionBgColor('about'),
          progress
        );
        setCurrentSection(progress > 0.1 ? 'about' : 'offers');
      } else if (scrollPosition < section4) {
        const progress = (scrollPosition - section3) / (section4 - section3);
        newColors = interpolateColors(
          getSectionBgColor('about'),
          getSectionBgColor('pizza'),
          progress
        );
        setCurrentSection(progress > 0.1 ? 'pizza' : 'about');
      } else if (scrollPosition < section5) {
        const progress = (scrollPosition - section4) / (section5 - section4);
        newColors = interpolateColors(
          getSectionBgColor('pizza'),
          getSectionBgColor('burger'),
          progress
        );
        setCurrentSection(progress > 0.1 ? 'burger' : 'pizza');
      } else if (scrollPosition < section6) {
        const progress = (scrollPosition - section5) / (section6 - section5);
        newColors = interpolateColors(
          getSectionBgColor('burger'),
          getSectionBgColor('dessert'),
          progress
        );
        setCurrentSection(progress > 0.1 ? 'dessert' : 'burger');
      } else {
        const progress = Math.min((scrollPosition - section6) / windowHeight, 1);
        newColors = interpolateColors(
          getSectionBgColor('dessert'),
          getSectionBgColor('contact'),
          progress
        );
        setCurrentSection(progress > 0.1 ? 'contact' : 'dessert');
      }
      
      setBgGradient(newColors);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Fixed Background Gradient */}
      <div className="fixed inset-0 z-0" style={{
        background: `linear-gradient(to bottom right, ${bgGradient.from}, ${bgGradient.to})`,
        transition: 'background 0.1s linear'
      }} />

      {/* Scroll-controlled Video */}
      <div 
        className="fixed inset-0 z-5 pointer-events-none transition-opacity duration-300"
        style={{ opacity: videoOpacity }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/video/hero_section_vid.mp4"
          muted
          playsInline
          preload="metadata"
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
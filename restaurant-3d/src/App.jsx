import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Helper function to interpolate between two colors
const interpolateColor = (color1, color2, progress) => {
  const r1 = parseInt(color1.slice(1, 3), 16);
  const g1 = parseInt(color1.slice(3, 5), 16);
  const b1 = parseInt(color1.slice(5, 7), 16);
  
  const r2 = parseInt(color2.slice(1, 3), 16);
  const g2 = parseInt(color2.slice(3, 5), 16);
  const b2 = parseInt(color2.slice(5, 7), 16);
  
  const r = Math.round(r1 + (r2 - r1) * progress);
  const g = Math.round(g1 + (g2 - g1) * progress);
  const b = Math.round(b1 + (b2 - b1) * progress);
  
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

const interpolateColors = (colors1, colors2, progress) => {
  return {
    from: interpolateColor(colors1.from, colors2.from, progress),
    to: interpolateColor(colors1.to, colors2.to, progress)
  };
};

// Pizza 3D Model Component
const Pizza = ({ visible }) => {
  const meshRef = useRef();
  const [scale, setScale] = useState(0);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (visible && scale < 1) {
        setScale(prev => Math.min(prev + 0.05, 1));
      } else if (!visible && scale > 0) {
        setScale(prev => Math.max(prev - 0.05, 0));
      }
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={[3, 0, 0]}>
        {/* Pizza Base */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[2, 2, 0.3, 32]} />
          <meshStandardMaterial color="#f4d03f" roughness={0.5} />
        </mesh>
        {/* Tomato Sauce */}
        <mesh position={[0, 0.16, 0]}>
          <cylinderGeometry args={[1.9, 1.9, 0.05, 32]} />
          <meshStandardMaterial color="#e74c3c" roughness={0.3} />
        </mesh>
        {/* Cheese */}
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[1.85, 1.85, 0.08, 32]} />
          <meshStandardMaterial color="#f9e79f" roughness={0.4} />
        </mesh>
        {/* Pepperoni slices */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 1.2;
          return (
            <mesh key={i} position={[Math.cos(angle) * radius, 0.25, Math.sin(angle) * radius]}>
              <cylinderGeometry args={[0.3, 0.3, 0.05, 16]} />
              <meshStandardMaterial color="#c0392b" roughness={0.5} />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
};

// Burger 3D Model Component
const Burger = ({ visible }) => {
  const meshRef = useRef();
  const [scale, setScale] = useState(0);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (visible && scale < 1) {
        setScale(prev => Math.min(prev + 0.05, 1));
      } else if (!visible && scale > 0) {
        setScale(prev => Math.max(prev - 0.05, 0));
      }
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={[3, 0, 0]}>
        {/* Bottom Bun */}
        <mesh position={[0, -1, 0]}>
          <sphereGeometry args={[1.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#d4a574" roughness={0.6} />
        </mesh>
        {/* Patty */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[1.4, 1.4, 0.4, 32]} />
          <meshStandardMaterial color="#6b4423" roughness={0.7} />
        </mesh>
        {/* Cheese */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[1.5, 1.4, 0.1, 32]} />
          <meshStandardMaterial color="#f9ca24" roughness={0.4} />
        </mesh>
        {/* Lettuce */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.45, 1.45, 0.15, 32]} />
          <meshStandardMaterial color="#6ab04c" roughness={0.5} />
        </mesh>
        {/* Tomato */}
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[1.4, 1.4, 0.1, 32]} />
          <meshStandardMaterial color="#e74c3c" roughness={0.4} />
        </mesh>
        {/* Top Bun */}
        <mesh position={[0, 0.7, 0]} rotation={[Math.PI, 0, 0]}>
          <sphereGeometry args={[1.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#d4a574" roughness={0.6} />
        </mesh>
        {/* Sesame Seeds */}
        {[...Array(15)].map((_, i) => {
          const angle = Math.random() * Math.PI * 2;
          const radius = Math.random() * 1.2;
          return (
            <mesh key={i} position={[Math.cos(angle) * radius, 0.9, Math.sin(angle) * radius]}>
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshStandardMaterial color="#f5e6d3" />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
};

// Dessert (Ice Cream) 3D Model Component
const IceCream = ({ visible }) => {
  const meshRef = useRef();
  const [scale, setScale] = useState(0);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (visible && scale < 1) {
        setScale(prev => Math.min(prev + 0.05, 1));
      } else if (!visible && scale > 0) {
        setScale(prev => Math.max(prev - 0.05, 0));
      }
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={[3, 0, 0]}>
        {/* Cone */}
        <mesh position={[0, -1, 0]} rotation={[0, 0, 0]}>
          <coneGeometry args={[0.8, 2, 32]} />
          <meshStandardMaterial color="#d4a574" roughness={0.7} />
        </mesh>
        {/* Ice Cream Scoops */}
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshStandardMaterial color="#f8b4d9" roughness={0.3} metalness={0.1} />
        </mesh>
        <mesh position={[0, 1.3, 0]}>
          <sphereGeometry args={[0.85, 32, 32]} />
          <meshStandardMaterial color="#a8e6cf" roughness={0.3} metalness={0.1} />
        </mesh>
        <mesh position={[0, 2.2, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="#ffd93d" roughness={0.3} metalness={0.1} />
        </mesh>
        {/* Cherry on top */}
        <mesh position={[0, 3, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#c0392b" />
        </mesh>
      </group>
    </Float>
  );
};

// 3D Scene Component
const Scene = ({ currentSection }) => {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[-10, 5, -10]} intensity={0.8} color="#ffaa66" />
      <spotLight position={[0, 15, 10]} angle={0.4} penumbra={1} intensity={1.2} castShadow />
      
      <Pizza visible={currentSection === 'pizza'} />
      <Burger visible={currentSection === 'burger'} />
      <IceCream visible={currentSection === 'dessert'} />
    </>
  );
};

// Main App Component
export default function App() {
  const [currentSection, setCurrentSection] = useState('intro');
  const containerRef = useRef();
  const videoRef = useRef(null);
  const [videoOpacity, setVideoOpacity] = useState(1);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Video opacity control - fade out video before pizza section
      const videoEndPoint = windowHeight * 2.5; // End video halfway through offers section
      if (scrollPosition < videoEndPoint) {
        const fadeStart = windowHeight * 1.5; // Start fading after intro section
        if (scrollPosition < fadeStart) {
          setVideoOpacity(1);
        } else {
          const fadeProgress = (scrollPosition - fadeStart) / (videoEndPoint - fadeStart);
          setVideoOpacity(Math.max(0, 1 - fadeProgress));
        }
      } else {
        setVideoOpacity(0);
      }
      
      // Calculate smooth color transitions based on scroll position
      const section1 = windowHeight * 0.8;
      const section2 = windowHeight * 2;
      const section3 = windowHeight * 3;
      const section4 = windowHeight * 4;
      const section5 = windowHeight * 5;
      
      let newColors = { from: '#1e293b', to: '#475569' };
      
      if (scrollPosition < section1) {
        // Intro
        newColors = { from: '#1e293b', to: '#475569' };
        setCurrentSection('intro');
      } else if (scrollPosition < section2) {
        // Transition from intro to offers
        const progress = (scrollPosition - section1) / (section2 - section1);
        newColors = interpolateColors(
          { from: '#1e293b', to: '#475569' },
          { from: '#334155', to: '#64748b' },
          progress
        );
        setCurrentSection('offers');
      } else if (scrollPosition < section3) {
        // Transition from offers to pizza
        const progress = (scrollPosition - section2) / (section3 - section2);
        newColors = interpolateColors(
          { from: '#334155', to: '#64748b' },
          { from: '#ea580c', to: '#dc2626' },
          progress
        );
        if (progress > 0.3) setCurrentSection('pizza');
        else setCurrentSection('offers');
      } else if (scrollPosition < section4) {
        // Transition from pizza to burger
        const progress = (scrollPosition - section3) / (section4 - section3);
        newColors = interpolateColors(
          { from: '#ea580c', to: '#dc2626' },
          { from: '#b45309', to: '#c2410c' },
          progress
        );
        if (progress > 0.3) setCurrentSection('burger');
        else setCurrentSection('pizza');
      } else if (scrollPosition < section5) {
        // Transition from burger to dessert
        const progress = (scrollPosition - section4) / (section5 - section4);
        newColors = interpolateColors(
          { from: '#b45309', to: '#c2410c' },
          { from: '#ec4899', to: '#a855f7' },
          progress
        );
        if (progress > 0.3) setCurrentSection('dessert');
        else setCurrentSection('burger');
      } else {
        // Transition from dessert to contact
        const progress = Math.min((scrollPosition - section5) / windowHeight, 1);
        newColors = interpolateColors(
          { from: '#ec4899', to: '#a855f7' },
          { from: '#0f172a', to: '#1e293b' },
          progress
        );
        if (progress > 0.3) setCurrentSection('contact');
        else setCurrentSection('dessert');
      }
      
      setBgGradient(newColors);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBgColor = () => {
    switch(currentSection) {
      case 'intro': return { from: '#1e293b', to: '#475569' };
      case 'offers': return { from: '#334155', to: '#64748b' };
      case 'pizza': return { from: '#ea580c', to: '#dc2626' };
      case 'burger': return { from: '#b45309', to: '#c2410c' };
      case 'dessert': return { from: '#ec4899', to: '#a855f7' };
      case 'contact': return { from: '#0f172a', to: '#1e293b' };
      default: return { from: '#1e293b', to: '#475569' };
    }
  };

  const bgColors = getBgColor();
  const [bgGradient, setBgGradient] = useState(bgColors);

  useEffect(() => {
    const newColors = getBgColor();
    setBgGradient(newColors);
  }, [currentSection]);

  return (
    <div className="relative">
      {/* Fixed 3D Canvas Background */}
      <div className="fixed inset-0 z-0" style={{
        background: `linear-gradient(to bottom right, ${bgGradient.from}, ${bgGradient.to})`,
        transition: 'background 0.1s linear'
      }}>
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Scene currentSection={currentSection} />
        </Canvas>
      </div>

      {/* Background Video */}
      <div 
        className="fixed inset-0 z-5 pointer-events-none transition-opacity duration-1000"
        style={{ opacity: videoOpacity }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/video/hero_section_vid.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>

      {/* Scrollable Content */}
      <div ref={containerRef} className="relative z-10">
        {/* Intro Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="text-center text-white px-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in drop-shadow-lg">Delicious Bites</h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay drop-shadow-lg">Experience Fine Dining in 3D</p>
            <button className="bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Explore Menu
            </button>
          </div>
        </section>

        {/* Offers Section */}
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

        {/* Pizza Section */}
        <section className="min-h-screen flex items-center justify-start pl-4 md:pl-20">
          <div className="text-white max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Pizza Menu</h2>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl transform hover:scale-105 hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Margherita</h3>
                <p className="mb-2 text-sm md:text-base">Fresh mozzarella, tomatoes, basil</p>
                <p className="text-xl md:text-2xl font-bold">$14.99</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl transform hover:scale-105 hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Pepperoni Supreme</h3>
                <p className="mb-2 text-sm md:text-base">Extra pepperoni, cheese, herbs</p>
                <p className="text-xl md:text-2xl font-bold">$16.99</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl transform hover:scale-105 hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Veggie Delight</h3>
                <p className="mb-2 text-sm md:text-base">Mushrooms, peppers, olives, onions</p>
                <p className="text-xl md:text-2xl font-bold">$15.99</p>
              </div>
            </div>
          </div>
        </section>

        {/* Burger Section */}
        <section className="min-h-screen flex items-center justify-start pl-4 md:pl-20">
          <div className="text-white max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Burger Menu</h2>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl transform hover:scale-105 hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Classic Cheeseburger</h3>
                <p className="mb-2 text-sm md:text-base">Beef patty, cheddar, lettuce, tomato</p>
                <p className="text-xl md:text-2xl font-bold">$10.99</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl transform hover:scale-105 hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-2">BBQ Bacon Burger</h3>
                <p className="mb-2 text-sm md:text-base">Bacon, BBQ sauce, onion rings</p>
                <p className="text-xl md:text-2xl font-bold">$13.99</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl transform hover:scale-105 hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Mushroom Swiss</h3>
                <p className="mb-2 text-sm md:text-base">Sautéed mushrooms, Swiss cheese</p>
                <p className="text-xl md:text-2xl font-bold">$12.99</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dessert Section */}
        <section className="min-h-screen flex items-center justify-start pl-4 md:pl-20">
          <div className="text-white max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Desserts</h2>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl transform hover:scale-105 hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Triple Scoop Ice Cream</h3>
                <p className="mb-2 text-sm md:text-base">Choose any 3 flavors</p>
                <p className="text-xl md:text-2xl font-bold">$6.99</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl transform hover:scale-105 hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Chocolate Lava Cake</h3>
                <p className="mb-2 text-sm md:text-base">Warm cake with vanilla ice cream</p>
                <p className="text-xl md:text-2xl font-bold">$7.99</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl transform hover:scale-105 hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Cheesecake</h3>
                <p className="mb-2 text-sm md:text-base">New York style with berry sauce</p>
                <p className="text-xl md:text-2xl font-bold">$8.99</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
      </div>

      <style >{`
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
      `}</style>
    </div>
  );
}
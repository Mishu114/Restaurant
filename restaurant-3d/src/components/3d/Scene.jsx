import React from 'react';
import Pizza from './Pizza';
import Burger from './Burger';
import IceCream from './IceCream';
import { OrbitControls } from '@react-three/drei';

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

export default Scene;

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useGLTF } from '@react-three/drei';

const Pizza = ({ visible }) => {
  const meshRef = useRef();
  const [scale, setScale] = useState(0);
  const { scene } = useGLTF('/models/pepperoni_pizza/scene.gltf');

  useFrame(() => {
    if (meshRef.current) {
      if (visible && scale < 1) {
        setScale(prev => Math.min(prev + 0.05, 1));
      } else if (!visible && scale > 0) {
        setScale(prev => Math.max(prev - 0.05, 0));
      }
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={meshRef} position={[0, 0, 4]} rotation={[0.5,0,0]}>
        <primitive object={scene.clone()} scale={[7, 7, 7]} />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/pepperoni_pizza/scene.gltf");
export default Pizza;

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useGLTF } from '@react-three/drei';

const IceCream = ({ visible }) => {
  const meshRef = useRef();
  const [scale, setScale] = useState(0);
  const { scene } = useGLTF('/models/pink_ice_cream/scene.gltf');

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
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <group ref={meshRef} position={[0, -0.7, 7]} rotation={[0,0,0.5]}>
        <primitive object={scene.clone()} scale={[5, 5, 5]} />
      </group>
    </Float>
  );
};
useGLTF.preload("/models/pink_ice_cream/scene.gltf");

export default IceCream;

"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Box } from "@react-three/drei";
import * as THREE from "three";

function FloatingCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <Box ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color="#8B5CF6" metalness={0.8} roughness={0.2} />
      </Box>
    </Float>
  );
}

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingCube position={[-2, 1, 0]} />
        <FloatingCube position={[2, -1, 0]} />
        <FloatingCube position={[0, 2, -1]} />
      </Canvas>
    </div>
  );
}

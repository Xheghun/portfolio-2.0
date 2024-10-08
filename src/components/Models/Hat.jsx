"use client"

import React, { useRef } from 'react';
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

export default function Hat(props) {
  const { nodes, materials } = useGLTF('/models/hat-transformed.glb')

  const modelRef = useRef();
  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });

  return (
    <group {...props} ref={modelRef} scale={[1.8,1.8,1.8]} position={[0,0,0]} rotation={[0.4, -1, 0]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.initialShadingGroup}
        position={[0, -3.867, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/hat-transformed.glb')
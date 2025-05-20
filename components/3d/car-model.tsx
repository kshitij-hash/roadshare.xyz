"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export function CarModel(props) {
  const carRef = useRef()

  useFrame((state) => {
    if (carRef.current) {
      carRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
      carRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <group ref={carRef} {...props}>
      {/* Car body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.6, 5]} />
        <meshStandardMaterial color="#8b5cf6" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Car top */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[2, 0.6, 3]} />
        <meshStandardMaterial color="#8b5cf6" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Wheels */}
      <mesh position={[-1.3, -0.5, 1.5]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
        <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.5} />
        <group rotation={[Math.PI / 2, 0, 0]} />
      </mesh>

      <mesh position={[1.3, -0.5, 1.5]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
        <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.5} />
        <group rotation={[Math.PI / 2, 0, 0]} />
      </mesh>

      <mesh position={[-1.3, -0.5, -1.5]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
        <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.5} />
        <group rotation={[Math.PI / 2, 0, 0]} />
      </mesh>

      <mesh position={[1.3, -0.5, -1.5]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
        <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.5} />
        <group rotation={[Math.PI / 2, 0, 0]} />
      </mesh>

      {/* Windshield */}
      <mesh position={[0, 0.6, -1]} castShadow>
        <boxGeometry args={[1.8, 0.5, 0.1]} />
        <meshPhysicalMaterial color="#22d3ee" roughness={0} metalness={0.8} transmission={0.9} thickness={0.5} />
      </mesh>

      {/* Headlights */}
      <mesh position={[-0.8, 0.1, -2.5]} castShadow>
        <boxGeometry args={[0.5, 0.3, 0.1]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
      </mesh>

      <mesh position={[0.8, 0.1, -2.5]} castShadow>
        <boxGeometry args={[0.5, 0.3, 0.1]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
      </mesh>

      {/* Data particles flowing around the car */}
      <points>
        <sphereGeometry args={[3, 24, 24]} />
        <pointsMaterial size={0.05} color="#22d3ee" sizeAttenuation transparent opacity={0.6} />
      </points>
    </group>
  )
}

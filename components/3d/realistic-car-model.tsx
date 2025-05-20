"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshWobbleMaterial } from "@react-three/drei"

export function RealisticCarModel(props) {
  const carRef = useRef()
  const wheelFL = useRef()
  const wheelFR = useRef()
  const wheelBL = useRef()
  const wheelBR = useRef()

  useFrame((state) => {
    if (carRef.current) {
      // Gentle floating animation
      carRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05

      // Subtle rotation
      carRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
    }

    // Rotate wheels
    if (wheelFL.current && wheelFR.current && wheelBL.current && wheelBR.current) {
      wheelFL.current.rotation.x += 0.01
      wheelFR.current.rotation.x += 0.01
      wheelBL.current.rotation.x += 0.01
      wheelBR.current.rotation.x += 0.01
    }
  })

  const carColor = "#8b5cf6" // Purple color matching our theme
  const metalness = 0.9
  const roughness = 0.1
  const clearcoat = 0.5
  const clearcoatRoughness = 0.2

  return (
    <group ref={carRef} {...props}>
      {/* Car body - main chassis */}
      <mesh castShadow receiveShadow position={[0, 0.4, 0]}>
        <meshPhysicalMaterial
          color={carColor}
          metalness={metalness}
          roughness={roughness}
          clearcoat={clearcoat}
          clearcoatRoughness={clearcoatRoughness}
          envMapIntensity={1}
        />
        <boxGeometry args={[2.4, 0.5, 5]} />
      </mesh>

      {/* Lower body/chassis */}
      <mesh castShadow receiveShadow position={[0, 0.15, 0]}>
        <meshPhysicalMaterial
          color={carColor}
          metalness={metalness}
          roughness={roughness}
          clearcoat={clearcoat}
          clearcoatRoughness={clearcoatRoughness}
        />
        <boxGeometry args={[2.2, 0.3, 4.8]} />
      </mesh>

      {/* Car cabin/top */}
      <mesh castShadow receiveShadow position={[0, 0.9, -0.2]}>
        <meshPhysicalMaterial
          color={carColor}
          metalness={metalness}
          roughness={roughness}
          clearcoat={clearcoat}
          clearcoatRoughness={clearcoatRoughness}
        />
        <boxGeometry args={[2, 0.5, 2.8]} />
      </mesh>

      {/* Car hood */}
      <mesh castShadow receiveShadow position={[0, 0.5, -2]}>
        <meshPhysicalMaterial
          color={carColor}
          metalness={metalness}
          roughness={roughness}
          clearcoat={clearcoat}
          clearcoatRoughness={clearcoatRoughness}
        />
        <boxGeometry args={[2.2, 0.2, 1]} />
      </mesh>

      {/* Car trunk */}
      <mesh castShadow receiveShadow position={[0, 0.5, 2]}>
        <meshPhysicalMaterial
          color={carColor}
          metalness={metalness}
          roughness={roughness}
          clearcoat={clearcoat}
          clearcoatRoughness={clearcoatRoughness}
        />
        <boxGeometry args={[2.2, 0.2, 0.8]} />
      </mesh>

      {/* Front windshield */}
      <mesh castShadow receiveShadow position={[0, 0.9, -1.2]}>
        <meshPhysicalMaterial
          color="#111111"
          metalness={0.9}
          roughness={0.1}
          transmission={0.8}
          thickness={0.5}
          envMapIntensity={1.5}
        />
        <boxGeometry args={[1.9, 0.5, 0.1]} />
      </mesh>

      {/* Rear windshield */}
      <mesh castShadow receiveShadow position={[0, 0.9, 0.8]}>
        <meshPhysicalMaterial
          color="#111111"
          metalness={0.9}
          roughness={0.1}
          transmission={0.8}
          thickness={0.5}
          envMapIntensity={1.5}
        />
        <boxGeometry args={[1.9, 0.5, 0.1]} />
      </mesh>

      {/* Side windows - left */}
      <mesh castShadow receiveShadow position={[-1, 0.9, -0.2]}>
        <meshPhysicalMaterial
          color="#111111"
          metalness={0.9}
          roughness={0.1}
          transmission={0.8}
          thickness={0.5}
          envMapIntensity={1.5}
        />
        <boxGeometry args={[0.1, 0.5, 2.6]} />
      </mesh>

      {/* Side windows - right */}
      <mesh castShadow receiveShadow position={[1, 0.9, -0.2]}>
        <meshPhysicalMaterial
          color="#111111"
          metalness={0.9}
          roughness={0.1}
          transmission={0.8}
          thickness={0.5}
          envMapIntensity={1.5}
        />
        <boxGeometry args={[0.1, 0.5, 2.6]} />
      </mesh>

      {/* Front bumper */}
      <mesh castShadow receiveShadow position={[0, 0.3, -2.5]}>
        <meshPhysicalMaterial
          color={carColor}
          metalness={metalness}
          roughness={roughness}
          clearcoat={clearcoat}
          clearcoatRoughness={clearcoatRoughness}
        />
        <boxGeometry args={[2.2, 0.4, 0.2]} />
      </mesh>

      {/* Rear bumper */}
      <mesh castShadow receiveShadow position={[0, 0.3, 2.5]}>
        <meshPhysicalMaterial
          color={carColor}
          metalness={metalness}
          roughness={roughness}
          clearcoat={clearcoat}
          clearcoatRoughness={clearcoatRoughness}
        />
        <boxGeometry args={[2.2, 0.4, 0.2]} />
      </mesh>

      {/* Front grille */}
      <mesh castShadow receiveShadow position={[0, 0.4, -2.6]}>
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
        <boxGeometry args={[1.8, 0.2, 0.1]} />
      </mesh>

      {/* Headlights - left */}
      <mesh castShadow position={[-0.8, 0.4, -2.6]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} toneMapped={false} />
        <boxGeometry args={[0.4, 0.2, 0.1]} />
      </mesh>

      {/* Headlights - right */}
      <mesh castShadow position={[0.8, 0.4, -2.6]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} toneMapped={false} />
        <boxGeometry args={[0.4, 0.2, 0.1]} />
      </mesh>

      {/* Taillights - left */}
      <mesh castShadow position={[-0.8, 0.4, 2.6]}>
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} toneMapped={false} />
        <boxGeometry args={[0.4, 0.2, 0.1]} />
      </mesh>

      {/* Taillights - right */}
      <mesh castShadow position={[0.8, 0.4, 2.6]}>
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} toneMapped={false} />
        <boxGeometry args={[0.4, 0.2, 0.1]} />
      </mesh>

      {/* Wheels - front left */}
      <group position={[-1.2, -0.1, -1.5]}>
        <mesh ref={wheelFL} castShadow>
          <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.4} />
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
          <cylinderGeometry args={[0.2, 0.2, 0.31, 24]} rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
      </group>

      {/* Wheels - front right */}
      <group position={[1.2, -0.1, -1.5]}>
        <mesh ref={wheelFR} castShadow>
          <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.4} />
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
          <cylinderGeometry args={[0.2, 0.2, 0.31, 24]} rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
      </group>

      {/* Wheels - back left */}
      <group position={[-1.2, -0.1, 1.5]}>
        <mesh ref={wheelBL} castShadow>
          <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.4} />
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
          <cylinderGeometry args={[0.2, 0.2, 0.31, 24]} rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
      </group>

      {/* Wheels - back right */}
      <group position={[1.2, -0.1, 1.5]}>
        <mesh ref={wheelBR} castShadow>
          <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.4} />
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
          <cylinderGeometry args={[0.2, 0.2, 0.31, 24]} rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
      </group>

      {/* License plate - front */}
      <mesh position={[0, 0.3, -2.61]}>
        <meshStandardMaterial color="#ffffff" />
        <boxGeometry args={[0.8, 0.2, 0.01]} />
      </mesh>

      {/* License plate - back */}
      <mesh position={[0, 0.3, 2.61]}>
        <meshStandardMaterial color="#ffffff" />
        <boxGeometry args={[0.8, 0.2, 0.01]} />
      </mesh>

      {/* Data visualization effect around the car */}
      <mesh>
        <sphereGeometry args={[3, 32, 32]} />
        <MeshWobbleMaterial color="#22d3ee" factor={0.2} speed={0.5} transparent opacity={0.1} wireframe />
      </mesh>

      {/* Glowing particles */}
      <points>
        <sphereGeometry args={[2.5, 24, 24]} />
        <pointsMaterial size={0.05} color="#22d3ee" sizeAttenuation transparent opacity={0.6} />
      </points>
    </group>
  )
}

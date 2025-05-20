"use client"

import { Canvas } from "@react-three/fiber"
import { PresentationControls, Float, BakeShadows, Stage } from "@react-three/drei"
import { RealisticCarModel } from "./3d/realistic-car-model"
import { DataEffects } from "./3d/data-effects"
import { Suspense } from "react"

export default function ThreeScene() {
  return (
    <Canvas shadows camera={{ position: [4, 2, 8], fov: 35 }}>
      <color attach="background" args={["#00000000"]} />

      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.5} contactShadow shadowBias={-0.0015}>
          <PresentationControls
            global
            rotation={[0, -Math.PI / 4, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
          >
            <Float rotationIntensity={0.2} floatIntensity={0.5} speed={2}>
              <RealisticCarModel position={[0, -0.5, 0]} scale={0.8} />
              <DataEffects />
            </Float>
          </PresentationControls>
        </Stage>

        {/* Additional lighting for better highlights */}
        <spotLight position={[5, 5, -5]} angle={0.15} penumbra={1} intensity={0.5} castShadow color="#8b5cf6" />
        <spotLight position={[-5, 5, 5]} angle={0.15} penumbra={1} intensity={0.5} castShadow color="#22d3ee" />

        {/* Ground reflection */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
          <planeGeometry args={[50, 50]} />
          <meshPhysicalMaterial color="#111111" metalness={0.9} roughness={0.1} reflectivity={0.5} />
        </mesh>

        <BakeShadows />
      </Suspense>
    </Canvas>
  )
}

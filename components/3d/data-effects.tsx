"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { MathUtils } from "three"

export function DataEffects() {
  const particlesRef = useRef()
  const linesRef = useRef()

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001
      particlesRef.current.rotation.x += 0.0005
    }

    if (linesRef.current) {
      linesRef.current.rotation.y -= 0.002
      linesRef.current.rotation.z += 0.0005
    }
  })

  // Create data points
  const particleCount = 200
  const particlePositions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    const radius = 3 + Math.random() * 2
    const theta = MathUtils.randFloatSpread(360)
    const phi = MathUtils.randFloatSpread(360)

    particlePositions[i * 3] = radius * Math.sin(theta) * Math.cos(phi)
    particlePositions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
    particlePositions[i * 3 + 2] = radius * Math.cos(theta)
  }

  // Create data lines
  const lineCount = 20
  const linePositions = new Float32Array(lineCount * 6) // 2 points per line, 3 coordinates per point

  for (let i = 0; i < lineCount; i++) {
    const radius = 3.5
    const theta1 = Math.random() * Math.PI * 2
    const phi1 = Math.random() * Math.PI * 2

    const theta2 = theta1 + MathUtils.randFloatSpread(Math.PI / 2)
    const phi2 = phi1 + MathUtils.randFloatSpread(Math.PI / 2)

    // Start point
    linePositions[i * 6] = radius * Math.sin(theta1) * Math.cos(phi1)
    linePositions[i * 6 + 1] = radius * Math.sin(theta1) * Math.sin(phi1)
    linePositions[i * 6 + 2] = radius * Math.cos(theta1)

    // End point
    linePositions[i * 6 + 3] = radius * Math.sin(theta2) * Math.cos(phi2)
    linePositions[i * 6 + 4] = radius * Math.sin(theta2) * Math.sin(phi2)
    linePositions[i * 6 + 5] = radius * Math.cos(theta2)
  }

  return (
    <group>
      {/* Data particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={particlePositions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.08} color="#22d3ee" sizeAttenuation transparent opacity={0.8} toneMapped={false} />
      </points>

      {/* Data lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={lineCount * 2} array={linePositions} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#8b5cf6" transparent opacity={0.5} toneMapped={false} />
      </lineSegments>
    </group>
  )
}

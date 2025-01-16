'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useSpring, animated } from 'react-spring'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function AnimatedBox() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#FF9933" /> {/* Using saffron color */}
    </mesh>
  )
}

export default function Home() {
  const stats = useSpring({
    from: { number: 0 },
    to: { number: 1000 },
    config: { duration: 2000 },
  })

  return (
    <div className="min-h-screen">
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
  className="absolute inset-0 w-full h-full object-cover z-0"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/background-video.mp4" type="video/mp4" />
  </video>
  <div className="background-overlay"></div> 
         
        </div>
        <div className="z-10 text-center">
          <motion.h1
            className="text-6xl font-bold mb-4 font-orbitron"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Garudex Lab
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Revolutionizing Traffic with AI Precision
          </motion.p>
       
        </div>
      </section>

    </div>
  )
}


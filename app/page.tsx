'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useSpring, animated } from 'react-spring'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'



export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Video */}
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

        {/* Content: Logo and Text */}
        <div className="relative z-10 text-center flex flex-col items-center">
          {/* Logo */}
          <img
            src="garudex.png"
            alt="Logo"
            className="w-50 h-50 z-15 mb-0 bg-transparent object-contain"
          />

          {/* Main Heading */}
          <motion.h1
            className="text-6xl font-bold mb-4 font-orbitron"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Garudex Labs
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-2xl"
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
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const teamMembers = [
  {
    name: 'Ryan Madhuwala',
    role: 'Founder',
    image: '/ryan.jpg',
    bio: '',
  },
  {
    name: 'Ronit Raj',
    role: 'Co-Founder',
    image: '/ronit.jpg',
    bio: '',
  },
  {
    name: 'Samyak Choudhary',
    role: 'Core Member',
    image: '/team/rahul-sharma.jpg',
    bio: '',
  },
  {
    name: 'Parv Mittal',
    role: 'Core Member',
    image: '/parv.jpg',
    bio: '',
  },
]

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<{
    name:string,
    role:string,
    image:string,
    bio:string,
  }|null>(null)

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center font-orbitron"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Team & Vision
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedMember(member)}
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-bold mb-2 text-modern-purple">{member.name}</h2>
              <p className="text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember({
                name:"",
                role:"",
                image:"",
                bio:"",
              })}
            >
              <motion.div
                className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedMember.image || "/placeholder.svg"}
                  alt={selectedMember.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold mb-2 text-modern-purple">{selectedMember.name}</h2>
                <p className="text-xl mb-4">{selectedMember.role}</p>
                <p className="text-gray-300">{selectedMember.bio}</p>
                <button
                  className="mt-6 bg-modern-purple text-white px-4 py-2 rounded-full"
                  onClick={() => setSelectedMember(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="mt-16 bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center font-orbitron">Our Vision</h2>
          <p className="text-gray-300 text-center">
            At Garudex Lab, we envision a future where urban mobility is seamless, safe, and sustainable. 
            Our mission is to revolutionize traffic management through cutting-edge AI technology, 
            creating smart cities that enhance the quality of life for all residents.
          </p>
        </motion.div>
      </div>
    </div>
  )
}


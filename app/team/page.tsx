'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const teamMembers = [
  {
    name: 'Ryan Madhuwala',
    role: 'Founder',
    image: '/ryan.jpg',
    bio: "Ryan Madhuwala is a second-year student entrepreneur and AI researcher leading Garudex Labs. With 2 years of hands-on AI experience, he has demonstrated technical excellence through his team's victory at Smart India Hackathon 2024 and multiple successful hackathon projects. As a passionate technologist, Ryan actively contributes to the AI community through research papers and technical blogs, while building innovative AI solutions at Garudex Labs. His work focuses on democratizing emerging technologies and inspiring the next generation of tech innovators.",
  },
  {
    name: 'Ronit Raj',
    role: 'Co-Founder',
    image: '/ronit.jpg',
    bio: "Ronit Raj is a dynamic co-founder of Garudex Labs, specializing in mathematical foundations of AI and computational systems. With a background in various deep learning such as Graph Neural Network, Image generation etc. and algorithm optimization, he brings technical depth to AI development. At Garudex Labs, Ronit leads the computational research division, focusing on developing efficient AI architectures. His expertise in mathematical computing and problem-solving has been instrumental in multiple hackathon victories and innovative AI solutions across diverse applications.",
  },
  {
    name: 'Samyak Choudhary',
    role: 'Core Member',
    image: '/samyak.jpg',
    bio: "Samyak Choudhary is a core member of Garudex Labs, with a growing focus on AI development and modern web technologies. As an aspiring full-stack developer and AI enthusiast, he works on building practical and user-friendly solutions. At Garudex Labs, Samyak contributes to technical project management and IT infrastructure, helping integrate AI systems effectively. His enthusiasm for learning and hands-on approach drive the development of scalable applications that address real-world challenges.",
  },
  {
    name: 'Parv Mittal',
    role: 'Core Member',
    image: '/parv.jpg',
    bio: "Parv Mittal is a core member of Garudex Labs and an aspiring Computer Science Engineer, specializing in AI and Machine Learning technologies. His expertise spans predictive modeling, computer vision, and natural language processing, complemented by strong algorithmic thinking. At Garudex Labs, Parv drives innovation in deep learning solutions and data-driven applications. His commitment to sustainable technology development and practical problem-solving makes him instrumental in transforming complex challenges into efficient AI solutions.",
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


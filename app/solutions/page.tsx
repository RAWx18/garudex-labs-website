'use client'

import { motion } from 'framer-motion'

const solutions = [
  {
    title: 'Traffic Ka Future',
    description: 'Say goodbye to jams! Our AI predicts traffic like a pro, turning chaos into smooth flow from gali to highway.',
  },
  {
    title: 'Digital Challan Express',
    description: ' Spot violations 24x7, generate challans instantly. No more revenue leakage, full paisa vasool!.',
  },
  {
    title: 'Rakshak Mode',
    description: ' Accidents? Detected in seconds! Quick response means more lives saved on our roads.',
  },
  {
    title: 'Business ka Growth Engine',
    description: 'Smooth traffic = Happy business. Watch your city thrive with faster deliveries and less fuel waste.',
  },
]

export default function Solutions() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center font-orbitron"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Solutions
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-saffron">{solution.title}</h2>
              <p className="text-gray-300">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


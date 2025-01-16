'use client'

import { motion } from 'framer-motion'
import { Twitter, Linkedin, Github } from 'lucide-react'

const socialPosts = [
  {
    platform: 'Twitter',
    content: 'Excited to announce our latest breakthrough in AI-driven traffic management! #SmartCities #AI',
    date: '2023-05-20',
    icon: Twitter,
  },
  {
    platform: 'LinkedIn',
    content: 'Garudex Lab is hiring! We are looking for talented AI researchers to join our team. #JobOpening #AIJobs',
    date: '2023-05-18',
    icon: Linkedin,
  },
  {
    platform: 'GitHub',
    content: 'We have open-sourced our traffic simulation toolkit. Check it out and contribute! #OpenSource #TrafficAI',
    date: '2023-05-15',
    icon: Github,
  },
  {
    platform: 'Twitter',
    content: 'Join us at the upcoming Smart Cities Expo where we will be showcasing our latest innovations! #SmartCitiesExpo',
    date: '2023-05-10',
    icon: Twitter,
  },
]

export default function Social() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center font-orbitron"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Social Media Feed
        </motion.h1>
        <div className="space-y-6">
          {socialPosts.map((post, index) => (
            <motion.div
              key={index}
              className="gradient-bg p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <post.icon className="text-white mr-2" size={24} />
                <span className="text-white font-bold">{post.platform}</span>
                <span className="text-gray-300 ml-auto">{post.date}</span>
              </div>
              <p className="text-white">{post.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


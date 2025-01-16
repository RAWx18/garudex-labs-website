'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Twitter, Linkedin, FileCode2, Github } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here (e.g., send data to an API)
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center font-orbitron"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <div className="flex flex-wrap -mx-4">
          <motion.div
            className="w-full md:w-1/2 px-4 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-modern-purple"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-modern-purple"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-modern-purple"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-modern-purple text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 px-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-modern-purple">Connect With Us</h2>
              <p className="mb-6 text-gray-300">
                Follow us on social media to stay updated with our latest research and developments in AI-driven traffic management.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/garudexlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-modern-purple hover:text-purple-400 transition-colors duration-200"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/garudexlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-modern-purple hover:text-purple-400 transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/garudexlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-modern-purple hover:text-purple-400 transition-colors duration-200"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://huggingface.co/garudexlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-modern-purple hover:text-purple-400 transition-colors duration-200"
                >
                  <FileCode2 size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}


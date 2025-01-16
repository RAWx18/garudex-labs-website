'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FileText, Video } from 'lucide-react'


const papers = [
  {
    title: 'Work in Progress',
    date: '2023-05-15',
    pdfUrl: '/dc-3.1.pdf',
    videoUrl: '/videos/traffic-analysis.mp4',
  },
 
]

export default function RnD() {
  const [selectedPaper, setSelectedPaper] = useState<{
    title: string;
    date: string;
    pdfUrl: string;
    videoUrl: string;
  } | null>(null);
  
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center font-orbitron"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Research & Development
        </motion.h1>
        <div className="space-y-6">
          {papers.map((paper, index) => (
            <motion.div
              key={paper.title}
              className="gradient-bg p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">{paper.title}</h2>
                <span className="text-sm text-gray-300">{paper.date}</span>
              </div>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => setSelectedPaper(paper)}
                  className="flex items-center space-x-2 bg-white text-modern-purple px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <FileText size={20} color='black' />
                  <span className='PDF'>View PDF</span>
                </button>
                {paper.videoUrl && (
                  <button
                    onClick={() => {
                      setSelectedPaper(paper)
                      setShowVideo(true)
                    }}
                    className="flex items-center space-x-2 bg-white text-modern-purple px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Video size={20} color='black'/>
                    <span className='Video'>Watch Video</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedPaper && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
            <h2 className="text-2xl font-bold mb-4 text-modern-purple">{selectedPaper.title}</h2>
            {showVideo && selectedPaper.videoUrl ? (
              <video src={selectedPaper.videoUrl} controls className="w-full rounded-lg" />
            ) : (
              <iframe src={selectedPaper.pdfUrl} className="w-full h-96 rounded-lg" />
            )}
            <button
              onClick={() => {
                setSelectedPaper(null)
                setShowVideo(false)
              }}
              className="mt-4 bg-modern-purple text-black px-4 py-2 rounded-full hover:bg-electric-indigo transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


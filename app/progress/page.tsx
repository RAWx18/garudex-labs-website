'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const weeklyData = [
  { date: 'Nov 2023', improvement: 'Reduced average response time by 15%', videoUrl: '/videos/week1.mp4' },
  { date: 'Dec 2023', improvement: 'Increased incident detection accuracy by 10%', videoUrl: '/videos/week2.mp4' },

]

const data = {
  labels: weeklyData.map(week => week.date),
  datasets: [
    {
      label: 'Efficiency Improvement',
      data: [15, 25, 30, 50],
      backgroundColor: 'rgba(138, 43, 226, 0.6)',
      borderColor: 'rgb(138, 43, 226)',
      borderWidth: 1,
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Weekly Efficiency Improvement',
    },
  },
}

export default function Progress() {
  const [selectedWeek, setSelectedWeek] = useState(0)

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 font-orbitron">Monthly Highlights</h2>
            {weeklyData.map((week, index) => (
              <motion.div
                key={week.date}
                className="gradient-bg p-4 rounded-lg shadow-lg mb-4 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedWeek(index)}
              >
                <h3 className="text-xl font-bold mb-2 text-white">{new Date(week.date).toLocaleDateString()}</h3>
                <p className="text-gray-200">{week.improvement}</p>
              </motion.div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6 font-orbitron">Progress Video</h2>
            {selectedWeek !== null ? (
              <video
                src={weeklyData[selectedWeek].videoUrl}
                controls
                className="w-full rounded-lg shadow-lg"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="gradient-bg p-4 rounded-lg shadow-lg text-center text-white">
                Select a week to view the progress video
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


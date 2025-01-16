import './globals.css'
import { Inter, Orbitron } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cursor from '../components/Cursor'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata = {
  title: 'Garudex Lab - Revolutionizing Traffic with AI Precision',
  description: 'Garudex Lab is a traffic surveillance and management startup using AI to revolutionize urban mobility.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} font-sans bg-black text-white`}>
        <Cursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}


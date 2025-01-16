import Link from 'next/link'
import { SiHuggingface } from "react-icons/si";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 font-orbitron">Garudex Labs</h3>
            <p className="mb-4">Revolutionizing traffic management with AI precision.</p>
            <div className="flex space-x-4">
              <a href="https://huggingface.co/GarudexLabs" className="text-saffron hover:text-gold transition-colors duration-200">
                <span className="sr-only">Hugging Face</span>
                <SiHuggingface style={{ color: "black", fontSize: "23px", fill:"white"}} />
              </a>
              <a href="https://x.com/GarudexLabs" className="text-saffron hover:text-gold transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <CiTwitter style={{ color: "black", fontSize: "25px", fill:"white"}} />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/garudex-labs/" className="text-saffron hover:text-gold transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <CiLinkedin style={{ color: "black", fontSize: "26px", fill:"white"}} />
              
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/solutions" className="hover:text-saffron transition-colors duration-200">Our Solutions</Link></li>
              <li><Link href="/progress" className="hover:text-saffron transition-colors duration-200">Our Progress</Link></li>
              <li><Link href="/team" className="hover:text-saffron transition-colors duration-200">Team & Vision</Link></li>
              <li><Link href="/media" className="hover:text-saffron transition-colors duration-200">Media</Link></li>
              <li><Link href="/contact" className="hover:text-saffron transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">IIITM Campus, Gwalior</p>
            <p className="mb-2"><a href="mailto:admin@garudexlabs.com">admin@garudexlabs.com</a></p>
            <p className='mb-2'>Ryan:<a href="tel:+91 9016508900">+91 9016508900</a></p>
            <p className='mb-2'>Ronit:<a href="tel:+91 8102624252">+91 8102624252</a></p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Garudex Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


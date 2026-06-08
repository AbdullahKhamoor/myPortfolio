import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Abdullah Khamoor</h3>
            <p className="text-gray-400">Full Stack developer based in USA, specializing in web and
              software development.
            </p>
          </div>
          <div className='flex-1 w-full'>

          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Abdullah. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 transition-transform duration-150 hover:scale-150 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 transition-transform duration-150 hover:scale-150 hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/abdullah-khamoor/" target="_blank" className="text-gray-400 transform transition-transform duration-150 hover:text-white hover:scale-150">
              <FaLinkedin />
            </a>
            <a href="https://github.com/AbdullahKhamoor" target="_blank" className="text-gray-400 transition-transform duration-200 hover:scale-150 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400  hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400  hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )

}

export default Footer
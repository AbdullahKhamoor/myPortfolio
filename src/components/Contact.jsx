import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import AOS3 from "aos";
import 'aos/dist/aos.css';

const Contact = () => {

  const [aosAnimation, setAosAnimation] = useState('fade-up');
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 769) {
        setAosAnimation('fade-right'); // Mobile
      } else {
        setAosAnimation('fade-left'); // Desktop
      }
    };
    // Initial check and event listener
    handleResize();
    window.addEventListener('resize', handleResize);
    AOS3.init({ duration: 900 })
    return () => window.removeEventListener('resize', handleResize);

  }, [])


  // AOS3.init({duration:900});

  return (
    <div className='bg-black text-white py-20' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12 ' >
          <div data-aos="fade-right" className='flex-1'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
              <a href="mailto:youremail@example.com" className='hover:underline'>
                youremail@example.com
              </a>
            </div>
            <div className='mb-4 '>
              <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
              <span>+923170118530</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
              <a href="mailto:youremail@example.com" className='hover:underline'>
                youremail@example.com
              </a>
            </div>
          </div>

          <div data-aos={aosAnimation} className='flex-1 w-full' >
            <form className='space-y-4' >
              <div >
                <label htmlFor="name">Your Name</label>
                <input type="text"
                  className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Name' />
              </div>
              <div>
                <label htmlFor="name" className='block mb-2'>Email</label>
                <input type="text"
                  className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Email' />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Message</label>
                <textarea type="text"
                  className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400'
                  rows="5"
                  placeholder='Enter Your Message' />
              </div>
              <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline
                       transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
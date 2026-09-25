import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import AOS3 from "aos";
import 'aos/dist/aos.css';
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [aosAnimation, setAosAnimation] = useState('fade-up');
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 769) {
        setAosAnimation('fade-right'); // Mobile
      } else {
        setAosAnimation('fade-up'); // Desktop
      }
    };
    // Initial check and event listener
    handleResize();
    window.addEventListener('resize', handleResize);
    AOS3.init({ duration: 900 })
    return () => window.removeEventListener('resize', handleResize);

  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_18it9j9",
      "template_1opkdkk",
      e.target,
      "sAyNWP0sSyEeKCuoK"
    )
      .then(() => {
        alert("Message sent Successfully");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // AOS3.init({duration:900});

  return (
    <div className='section-surface text-white py-20' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='font-display text-4xl font-semibold text-center mb-12 tracking-tight'>Contact Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12 ' >
          <div data-aos="fade-right" className='flex-1'>
            <h3 className='font-display text-3xl font-semibold accent-gradient-text mb-4'>Let's Talk</h3>
            <p className='text-gray-400'>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-cyan-400 mr-2'></FaEnvelope>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullah.khamoor4@gmail.com" target="_blank" className='hover:underline text-gray-300'>
                abdullah.khamoor4@gmail.com
              </a>
            </div>
            <div className='mb-4 '>
              <FaPhone className='inline-block text-cyan-400 mr-2'></FaPhone>
              <span className='text-gray-300'>+923170118530</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-cyan-400 mr-2'></FaMapMarkedAlt>
              <a href="#" className='hover:underline text-gray-300'>
                youremail@example.com
              </a>
            </div>
          </div>

          <div data-aos={aosAnimation} className='flex-1 w-full glass-panel rounded-2xl p-6 md:p-8' >
            <form onSubmit={sendEmail} className='space-y-4' >
              <div >
                <label htmlFor="name" className='block mb-2 text-sm text-gray-300'>Your Name</label>
                <input type="text"
                  id='name'
                  name="user_name"
                  required
                  className='w-full p-2.5 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400/60 transition-colors duration-200 '
                  placeholder='Enter Your Name' />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2 text-sm text-gray-300'>Email</label>
                <input type="email"
                  id='email'
                  required
                  name="user_email"
                  className='w-full p-2.5 rounded-lg bg-white/5 border border-white/10  focus:outline-none focus:border-cyan-400/60 transition-colors duration-200'
                  placeholder='Enter Your Email' />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2 text-sm text-gray-300'>Message</label>
                <textarea type="text"
                  id='message'
                  name="message"
                  required
                  className='w-full p-2.5 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400/60 transition-colors duration-200'
                  rows="5"
                  placeholder='Enter Your Message' />
              </div>
              <button className='cursor-pointer accent-gradient-bg text-white  md:inline
                       transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 px-8 py-2.5 rounded-full active:opacity-80'>Send </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
import React from 'react'
import { useEffect, useState } from 'react';
import AOS1 from "aos";
import 'aos/dist/aos.css';


const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },

];
const Service = () => {
  const [aosAnimation, setAosAnimation] = useState('fade-up');
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAosAnimation('fade-up'); // Mobile
      } else {
        setAosAnimation('zoom-in'); // Desktop
      }
    };
    // Initial check and event listener
    handleResize();
    window.addEventListener('resize', handleResize);
    AOS1.init({ duration: 900 })
    return () => window.removeEventListener('resize', handleResize);

  }, [])
  // AOS1.init({duration:900});

  return (
    <div className='section-surface text-white py-20' id="service" >
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='font-display text-4xl font-semibold text-center mb-12 tracking-tight' >My Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ' >
          {services.map((service) => (
            <div
              key={service.id}
              className='glass-panel px-6 pt-6 pb-6 rounded-2xl hover:shadow-xl hover:shadow-black/30 hover:border-indigo-400/30 transform 
              transition-all duration-300 hover:scale-105' data-aos={aosAnimation}>

              <div className='text-right text-2xl font-bold accent-gradient-text'
              >
                {service.id}
              </div>
              <h3 className='mt-2 text-2xl font-bold accent-gradient-text'>
                {service.title}Read
              </h3>
              <p className='mt-2 text-gray-400'>{service.description}</p>
              <a href="#" className='mt-4 inline-block text-cyan-400 transition-colors duration-200 hover:text-indigo-400'>Read More</a>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default Service
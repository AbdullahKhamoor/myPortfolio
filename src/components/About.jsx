import React, { useEffect } from 'react'
import AboutImage from "../assets/aboutme-image.png"
import AOS from "aos";
import 'aos/dist/aos.css';

const About = () => {
  useEffect(()=>{
    AOS.init({duration: 900})
  },[])


  return (
    <div className='bg-black text-white py-20 w-full' id="about" >
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>   
            <h2 className='text-4xl font-bold text-center mb-12' >About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImage} alt=""
                 className='w-72 h-80 rounded object-cover mb-8 md:mb-0' data-aos = 'fade-right' />
                 <div className='flex-1 '>
                <p className='hidden md:block text-lg mb-8   ' data-aos="fade-left">
                    I am passionate full-stack developer with a focus on building modern and responsive web application
                    with a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient
                    user experiences.
                </p>
                {/* Mobile  Responsive */}
                <p className='block md:hidden text-lg mb-8  ' data-aos="fade-up">
                    I am passionate full-stack developer with a focus on building modern and responsive web application
                    with a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient
                    user experiences.
                </p>
                
                <div className='hidden md:block space-y-4 ' data-aos="fade-left" >
                    <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded 
                        transform transition-transform duration-300 hover:scale-105 w-10/12'>

                        </div>

                    </div>
                    </div>
                    <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'>React JS </label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded 
                        transform transition-transform duration-300 hover:scale-105 w-11/12'>

                        </div>

                    </div>
                    </div>
                    <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'>Node JS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded 
                        transform transition-transform duration-300 hover:scale-105 w-8/12'
                        ></div>
                    </div>
                    </div>
                </div>
{/*  mobile Animation */}

                <div className='block md:hidden space-y-4 ' data-aos="fade-right" >
                    <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded 
                        transform transition-transform duration-300 hover:scale-105 w-10/12'>

                        </div>

                    </div>
                    </div>
                    <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'>React JS </label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded 
                        transform transition-transform duration-300 hover:scale-105 w-11/12'>

                        </div>

                    </div>
                    </div>
                    <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'>Node JS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded 
                        transform transition-transform duration-300 hover:scale-105 w-8/12'
                        ></div>
                    </div>
                    </div>
                </div>
                <div className='hidden md:block'>
                <div className='   mt-12 flex justify-between text-center   ' data-aos = 'fade-left'>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text
                         bg-gradient-to-r from-green-400 to-blue-500'>
                            3+
                        </h3>
                        <p>Years Experience</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text
                         bg-gradient-to-r from-green-400 to-blue-500'>
                            10+
                        </h3>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text
                         bg-gradient-to-r from-green-400 to-blue-500'>
                            10+
                        </h3>
                        <p>Happy Clients</p>
                    </div>
                </div>
                </div>
                {/* Mobile Animation */}
                <div className='block md:hidden'>
                <div className='   mt-12 flex justify-between text-center   ' data-aos = 'fade-right'>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text
                         bg-gradient-to-r from-green-400 to-blue-500'>
                            3+
                        </h3>
                        <p>Years Experience</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text
                         bg-gradient-to-r from-green-400 to-blue-500'>
                            10+
                        </h3>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text
                         bg-gradient-to-r from-green-400 to-blue-500'>
                            10+
                        </h3>
                        <p>Happy Clients</p>
                    </div>
                </div>
                </div>
              
                {/* ********  ********* */}
                </div>
            </div>
            
         </div>
    </div>
  )
}

export default About
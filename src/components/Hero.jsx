import React from 'react'
// import ProfileImage from "../assets/profileImg.jpeg"
import profileimg from "../assets/portfolio img.png"
import Typewriter from "typewriter-effect"
const Hero = () => {
  return (
    <div id="home" className='relative bg-[#05070d] bg-[url(assets/back.gif)] bg-cover bg-center text-white text-center py-24 px-6 overflow-hidden'>
      <div className='absolute inset-0 bg-[#05070d]/70'></div>
      <div className='absolute inset-0 bg-gradient-to-b from-[#05070d] via-transparent to-[#05070d]'></div>
      <div className='relative'>
        <div className='mx-auto mb-8 w-48 h-48 rounded-full p-1 accent-gradient-bg'>
          <img src={profileimg} alt="img"
            className='w-full h-full rounded-full object-cover border-4 border-[#05070d] transform transition-transform duration-300 hover:scale-105' />
        </div>
        <h1 className='font-display text-4xl md:text-5xl font-semibold tracking-tight'>
          <Typewriter

            options={{
              autoStart: true,
              loop: true,
              delay: 60,
              strings: ["I AM  ABDULLAH KHAMOOR", "I AM A WEB-DEVELOPER"]
            }}>

            I'm {""}
            <span className='accent-gradient-text'>Abdullah Khamoor</span>
            ,Full-Stack Developer
          </Typewriter>
        </h1>
        <p className='mt-4 text-lg text-gray-400 max-w-xl mx-auto'>
          I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
          <a href="/Resume.pdf" target="_blank"   >
            <button
              className='cursor-pointer accent-gradient-bg text-white font-medium  md:inline
                transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 px-6 py-2.5 rounded-full'>View Resume</button>
          </a>
          {/* <a href="../../public/Resume.pdf"></a> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useEffect } from 'react';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);


  return (
    <>
    <nav className='sticky top-0 z-50 bg-[#05070d]/80 backdrop-blur-md border-b border-white/5 text-white px-8 md:px-16 lg:px-24 '>
      <div className='container py-3 flex justify-center md:justify-between items-center'>
        <div className='font-display text-2xl font-semibold hidden md:inline tracking-tight'>
          Abdullah<span className='accent-gradient-text'>.</span>
        </div>
        <div className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-300'>
          <a href="#home" className='transition-colors duration-200 hover:text-white'>Home</a>
          <a href="#about" className='transition-colors duration-200 hover:text-white'>About</a>
          <a href="#service" className='transition-colors duration-200 hover:text-white'>Services</a>
          <a href="#project" className='transition-colors duration-200 hover:text-white'>Projects</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}><GiHamburgerMenu className='md:hidden w-7 h-7 absolute top-3.5 right-6' /></button>
        <a href="#contact">
          <button className='cursor-pointer accent-gradient-bg text-white hidden md:inline text-sm font-medium
            transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 px-5 py-2.5 rounded-full '>Contact me</button></a>
      </div>
    </nav>

    {/* //? ****    Responsive *** */}

    <div className={` ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}  fixed z-[100] md:hidden bg-[#05070d] text-aliceblue inset-0
      flex flex-col items-center justify-center text-white
      overflow-y-auto origin-top transition-all duration-500 `}>

      <h1 className='font-display text-white tracking-tight absolute top-5 left-6 text-lg'>PORTFOLIO</h1>
      <button onClick={() => setIsOpen(!isOpen)} className='p-2' ><ImCross className='w-7 h-7 absolute top-5 right-6' /></button>

      <div className='flex flex-col items-center gap-8 text-white text-lg font-medium'>
        <a href="#home" onClick={() => setIsOpen(false)} className='text-[#7297d8] hover:text-cyan-400 transition-colors duration-200 pb-1 border-b-2 border-white/50'>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)} className='hover:text-cyan-400 transition-colors duration-200 pb-1 border-b-2 border-white/50'>About</a>
        <a href="#service" onClick={() => setIsOpen(false)} className='hover:text-cyan-400 transition-colors duration-200 pb-1 border-b-2 border-white/50'>Services</a>
        <a href="#project" onClick={() => setIsOpen(false)} className='hover:text-cyan-400 transition-colors duration-200 pb-1 border-b-2 border-white/50'>Projects</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className='hover:text-cyan-400 transition-colors duration-200 pb-1 border-b-2 border-white/50'>Contact</a>
      </div>
    </div>
    </>
  )
}

export default Navbar
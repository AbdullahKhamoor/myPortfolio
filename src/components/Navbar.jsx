import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";



const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);

  



  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 '>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Abdullah</div>
            <div className='hidden md:block space-x-6'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About</a>
                <a href="#service" className='hover:text-gray-400'>Services</a>
                <a href="#project" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            <button onClick={()=> setIsOpen(!isOpen)}><GiHamburgerMenu className='md:hidden w-7 h-7 absolute top-2.5 right-6' /></button>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full '>Connect Me</button>
        </div>
        {/* //Responsive */}
        <div  className={ ` ${isOpen ? 'block' : 'hidden' }  fixed z-10 md:hidden bg-white text-black inset-0 p-3 overflow-hidden `}  >
             
                <h1>PORTFOLIO</h1>
                <button onClick={()=> setIsOpen(!isOpen)}  className='md:hidden p-2' ><ImCross className='md:hidden w-7 h-7 absolute top-2.5 right-6' /></button>
                <div className=''>
                <div className=' flex flex-col items-center gap-8  md:hidden ' >
                <a href="#home" className=' hover:text-gray-400   border-b-2'><button onClick={()=> setIsOpen(!isOpen)}>Home</button></a>
                <a href="#about" className={ ` hover:text-gray-400 border-b-2 md:hidden `}><button onClick={()=> setIsOpen(!isOpen)}>About</button>  </a>
                <a href="#service" className='hover:text-gray-400 border-b-2 '> <button onClick={()=> setIsOpen(!isOpen)}>Services</button> </a>
                <a href="#project" className='hover:text-gray-400 border-b-2'> <button onClick={()=> setIsOpen(!isOpen)}>Projects</button> </a>
                <a href="#contact" className='hover:text-gray-400 border-b-2'> <button onClick={()=> setIsOpen(!isOpen)}>Contact</button> </a>
                </div>
                <div className='h-[1px] bg-gray-300 mt-6'></div>
                </div>
            </div>
    </nav>
  )
}

export default Navbar
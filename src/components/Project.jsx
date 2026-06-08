import React from 'react'
import employeeMSImage from "../assets/EMS.png";
import bookMSImage from "../assets/Quiz.png";
import userList from "../assets/CrudOperation.png"
import { useEffect, useState } from 'react';
import AOS2 from "aos";
import 'aos/dist/aos.css';



const projects = [
  {
    id: 1,
    name: "Employee MS",
    technologies: "MERN Stack",
    description:
      "Built a full-stack Employee Management System using React.js, Node.js, Express.js, and MongoDB. The application includes role-based authenticationwith separate Admin and Employee dashboards. Admins can manage employee records, departments, salaries, and leave requests, as well as add new employees and update their information. Employees can securely log in, view their profile details, apply for leave, and track their salary history. The system improves HR management by automating employee-related processes and providing a user-friendly interface for both administrators and employees",
    image: employeeMSImage,
    github: "https://ems-frontend-three-blond.vercel.app/",
  },
  {
    id: 2,
    name: "Quiz App",
    technologies: "MERN Stack",
    description: "Built an interactive quiz application using React.js that displays multiple-choice questions, tracks user score, and provides instant feedback for correct and incorrect answers. The app includes question navigation, answer locking to prevent multiple selections, and a final result screen with score display and reset functionality. It demonstrates efficient use of React hooks like useState and useRef for state and DOM management.",
    image: bookMSImage,
    github: "https://abdullahkhamoor.github.io/Quiz-App/",
  },
  {
    id: 3,
    name: "User list crud operations",
    technologies: "MERN Stack",
    description: "Developed a full-stack User List application with complete CRUD (Create, Read, Update, Delete) functionality. The project enables users to add, update, view, and delete records, with all data securely stored in a MongoDB database. Redux Toolkit was used for efficient state management, ensuring seamless data flow and improved application performance. The application integrates REST APIs for real-time communication between the frontend and backend, providing a smooth and responsive user experience. It demonstrates strong proficiency in full-stack development, API integration, database operations, and modern state management techniques.",
    image: userList,
    github: "https://crud-project-c8b4.vercel.app/",
  },
];
const Project = () => {
  const [aosAnimation, setAosAnimation] = useState('fade-up');
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
    AOS2.init({ duration: 900 })
    return () => window.removeEventListener('resize', handleResize);

  }, [])

  // AOS2.init({duration:900});

  return (
    <div className='bg-black text-white py-20' id="project" >
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 items-start '>
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-500 hover:scale-105 hover:opacity-10" data-aos={aosAnimation} >
              <img src={project.image} alt="" className='rounded-lg mb-4 
              w-full h-48 object-cover' />
              <h3 className="text-2xl font-bold  hover:opacity-10">{project.name}</h3>

              <p className='text-gray-300 transition-all duration-500 ease-in-out'>
                {expanded[project.id]
                  ? project.description
                  : `${(project.description || "").slice(0, 80)}...`}
              </p>


              <button
                onClick={() => toggleReadMore(project.id)}
                className="cursor-pointer  text-green-400 hover:text-blue-500 mt-2"
              >
                {expanded[project.id] ? "Read Less" : "Read More"}
              </button>

              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className='inline-block bg-gradient-to-r
                    from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:opacity-80
    active:opacity-50  active:scale-105' target='_blank'>GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
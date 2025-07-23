// import './App.css'
import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Service from "./components/Service"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Service/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import FigmaDesigns from './components/FigmaDesigns'
import Certificates from './components/Certificates'
import Hackathon from './components/Hackathon'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import SocialMedia from './components/SocialMedia'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <SocialMedia />
        <Skills id="skills" />
        <Projects id="projects" />
        <FigmaDesigns />
        <Certificates />
        <Hackathon />
        <Achievements />
        <Resume />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  )
}

export default App
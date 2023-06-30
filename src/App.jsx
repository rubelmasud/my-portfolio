
import { useState } from 'react'
import './App.css'
import About from './Components/About'
import Bot from './Components/Bot'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import HireMe from './Components/HireMe'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import Skills from './Components/Skills'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <HireMe />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

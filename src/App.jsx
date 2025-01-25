import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Your Name</h1>
        <p>Front-End Developer | Web Designer</p>
      </header>

      <Navbar />
      <About />
      <Projects />
      <Contact />

      <footer>
        <p>&copy; 2025 [Your Name]. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App

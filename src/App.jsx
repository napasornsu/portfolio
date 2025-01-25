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
      <Navbar />
      <header>
        <h1>Welcome to My Portfolio</h1>
        <p>Here's a little about myself, my work, and how you can get in touch!</p>
      </header>

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

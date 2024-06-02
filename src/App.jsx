import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Proyects from './components/Proyects'
import Contact from './components/Contact'
import Banner from './components/Banner'
import About from './components/About'
import Skill from './components/Skill'


function App() {

  return (
    
    <div>
      <NavBar />
      <Banner />
      <About />
      <Proyects />
      <Skill />
      <Contact />
      <Footer />
    </div>
    
  )
}

export default App

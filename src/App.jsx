import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from "./components/Home"
import Exprince from "./components/Exprince"
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
function App() {
 useEffect(() => {
  
Aos.init();


 }, []);

  return (
    <>
    
    <Navbar/>
    <Home/>
    <Exprince/>
    <Skills/>
    <ContactMe/>
    </>
  )
}

export default App

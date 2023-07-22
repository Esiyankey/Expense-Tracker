import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Landing } from './components/Landing'
import { Footer } from './components/footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <Landing/>
      <Footer/>
    </>
  )
}

export default App

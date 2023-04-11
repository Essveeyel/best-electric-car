import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/Navbar/NavBar'
import Home from './screens/Home'
import Cars from './screens/Cars'

function App() {
  return (
    <>
    <NavBar />
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cars" element={<Cars />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
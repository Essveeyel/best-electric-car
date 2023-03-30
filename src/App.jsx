import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/Navbar/NavBar'
import Home from './screens/Home'

function App() {
  return (
    <>
    <NavBar />
      <Routes>
    <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
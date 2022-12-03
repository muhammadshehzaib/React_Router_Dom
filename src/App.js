import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Contact from "./pages/Contact"
import Navbar from './pages/Navbar'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/layout' element={<Layout />} />
          <Route path='/contact' element={<Contact />} />
          
        </Routes>
      </Router>
    </div>
  )
}

export default App
import React, { useState,createContext } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import Layout from "./pages/Layout"
import Contact from "./pages/Contact"
import Navbar from './pages/Navbar'

export const UserNameContext = createContext();

const App = () => {
    const [username,setUsername] = useState("Shehzaib")
  return (
    <div className='App'>
    <UserNameContext.Provider value={{username,setUsername}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/layout' element={<Layout />} />
          <Route path='/contact' element={<Contact />} />
          
        </Routes>
      </Router>
     </UserNameContext.Provider>
     </div>
  )
}

export default App
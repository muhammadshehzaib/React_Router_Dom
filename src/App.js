import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Contact from "./pages/Contact"
import Navbar from './pages/Navbar'
import {QueryClient,QueryClientProvider} from "react-query"

const App = () => {
const client = new QueryClient({defaultOptions:{
   queries:{
    refetchOnWindowFocus:false
   }
}})
  return (
    <div>
      <QueryClientProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/layout' element={<Layout />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
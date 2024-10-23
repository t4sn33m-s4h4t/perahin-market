import React from 'react'
import Menu from './menu'
import Contact from './Contact'
import Home from './Home'
import About from './About'
import { Routes,Route, Navigate} from 'react-router-dom'
const Body = () => {

  return (
    <div>
      <Routes>

      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      </Routes>
    </div>
  )
}

export default Body

import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const Navigation = () => {
  
  return (
    <div>
      <Navbar 
      className="my-2"
      color="dark"
      dark
      >
        <div className="container">
            <NavbarBrand href='/'>
                Perahin Market 
            </NavbarBrand>
        </div>
      </Navbar>
    </div>
  )
}

export default Navigation

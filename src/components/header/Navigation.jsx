import { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <Navbar className="my-2" color="dark" dark expand="sm">
        <div className="container d-flex align-items-center justify-content-center">
          <NavbarBrand tag={NavLink} to="/" exact='true'>
            Perahin Market
          </NavbarBrand>

          <Collapse isOpen={isNavOpen} navbar>
            <Nav className="mr-auto text-center ms-auto" navbar>
              <NavItem>
                <NavLink to="/" exact='true' className="nav-link">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/menu" className="nav-link">
                  Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>

          <NavbarToggler className="ms-auto" onClick={() => setIsNavOpen(!isNavOpen)} />
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;

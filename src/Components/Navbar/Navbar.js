import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../IMG/Index/Isotipo.png';
import Burger from '../../IMG/Index/burger.svg';  

import './navbar.css';

function BasicExample() {

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      expand="lg" 
      className="navBar"
      expanded={expanded}     // ⭐ Controla si está abierto o cerrado
    >
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >

        {/* Logo */}
        <Navbar.Brand href="#home">
          <img src={Logo} className="logo" alt="Logo" />
        </Navbar.Brand>

        {/* Botón hamburguesa */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}   // ⭐ Toggle real
        >
          <img src={Burger} alt="Menú" className="burger-icon" />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex w-100 justify-content-lg-end">

            <Nav.Link 
              className="link" 
              href="#nosotros"
              onClick={() => setExpanded(false)}   // ⭐ Cierra menú al click
            >
              Nosotros
            </Nav.Link>

            <Nav.Link 
              className="link" 
              href="#portfolio"
              onClick={() => setExpanded(false)}   // ⭐ Cierra menú al click
            >
              Nuestros Trabajos
            </Nav.Link>

            <Nav.Link 
              className="link" 
              href="#contacto"
              onClick={() => setExpanded(false)}   // ⭐ Cierra menú al click
            >
              Contacto
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

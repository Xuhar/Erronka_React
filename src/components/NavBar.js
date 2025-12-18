import React from "react";
// 1. Importamos 'Button' aquí
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#272626" }}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarUnderlineExample" />
        <Navbar.Brand href="#">
          <img src="/argazkiak/logoaB.png" width="36" alt="Marblow Logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="navbarUnderlineExample">
          {/* 2. Añadimos 'me-auto' (margin-end: auto) para empujar el contenido siguiente a la derecha */}
          <Nav className="navbar-nav-underline me-auto">
            <Nav.Link href="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="/teams" className="text-white">
              Teams
            </Nav.Link>
            <Nav.Link href="/blowers" className="text-white ">
              Blowers
            </Nav.Link>
            <NavDropdown
              title="Events"
              id="events-dropdown"
              className="nav-link-white"
            >
              <NavDropdown.Item href="/events">Incoming Events</NavDropdown.Item>
              <NavDropdown.Item href="/">Previous Events</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Freestyle</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact" className="text-white">
              Contact
            </Nav.Link>
          </Nav>
          
          {/* 3. Nuevo bloque para el botón de Log In */}
          <Nav>
            <Button 
                href="/login" 
                variant="outline-light" 
                className="ms-2" // Un pequeño margen a la izquierda para separarlo si colapsa
            >
                Log In
            </Button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
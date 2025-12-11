import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#272626" }}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarUnderlineExample" />
        <Navbar.Brand href="#">
          <img src="/argazkiak/logoaB.png" width="36" alt="Marblow Logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="navbarUnderlineExample">
          <Nav className="navbar-nav-underline">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

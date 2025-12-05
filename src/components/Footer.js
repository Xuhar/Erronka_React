import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer
      className="px-3 py-4"
      style={{ backgroundColor: "#272626", color: "white" }}
    >
      <Container>
        <Row className="align-items-center text-center text-md-start mb-3">
          <Col md={4} className="mb-3 mb-md-0 text-center text-md-start">
            <img
              alt="Marblow"
              src="/argazkiak/logoaB.png"
              width="50"
              className="mb-2 d-block mx-md-0 mx-auto"
            />
            <p className="mb-0 small">
              © Marblow 2025
              <br />
              Todos los derechos reservados.
            </p>
          </Col>

          <Col md={4} className="mb-3 mb-md-0 text-center">
            <Nav className="justify-content-center">
              <Nav.Link href="#" className="text-white px-2">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-white px-2">
                Teams
              </Nav.Link>
              <Nav.Link href="#" className="text-white px-2">
                Blowers
              </Nav.Link>
              <Nav.Link href="#" className="text-white px-2">
                Events
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3 align-items-center">
              <p className="mb-0">Social Media:</p>
              <img
                src="/argazkiak/instagramblanco.png"
                alt="Instagram"
                width="35"
              />
              <img
                src="/argazkiak/whatsappblanco.svg"
                alt="WhatsApp"
                width="35"
              />
              <img src="/argazkiak/facebookona.svg" alt="Facebook" width="35" />
            </div>
          </Col>
        </Row>

        <hr style={{ borderTop: "1px solid #6c6c6c", margin: "0 0 15px 0" }} />

        <div className="text-center">
          <Nav className="justify-content-center small mb-2">
            <Nav.Link href="#" className="text-white py-0 px-2">
              Aviso legal
            </Nav.Link>
            <Nav.Link href="#" className="text-white py-0 px-2">
              Política de privacidad
            </Nav.Link>
            <Nav.Link href="#" className="text-white py-0 px-2">
              Política de cookies
            </Nav.Link>
          </Nav>
          <img
            src="/argazkiak/taldearen-izena1.png"
            className="marblogo"
            alt=""
            style={{ height: "90px", width: "200px", objectFit: "contain" }}
          />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

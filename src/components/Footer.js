import React from "react";
import { Container, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer
      className="px-3"
      style={{ backgroundColor: "#272626", color: "white" }}
    >
      <Container className="pt-4 pb-2">
        {/* FILA SUPERIOR – siempre space-between y menú centrado perfecto */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 mb-4">
          
          {/* Izquierda: Solo logo en desktop, oculto en móvil */}
          <div className="text-center text-md-start order-2 order-md-0 d-none d-md-block">
            <img
              src="/argazkiak/logoaB.png"
              alt="Marblow"
              width="50"
              className="mb-2"
            />
            <p className="mb-0 small text-white-50">
              © Marblow 2025<br />Todos los derechos reservados.
            </p>
          </div>

          {/* Centro: Menú principal – siempre centrado y en una sola línea en desktop */}
          <Nav className="flex-row flex-wrap justify-content-center gap-3 d-none d-md-flex">
            <Nav.Link href="#" className="text-white px-0">Home</Nav.Link>
            <Nav.Link href="#" className="text-white px-0">Teams</Nav.Link>
            <Nav.Link href="#" className="text-white px-0">Blowers</Nav.Link>
            <Nav.Link href="#" className="text-white px-0">Events</Nav.Link>
            <Nav.Link href="#" className="text-white px-0">Contact</Nav.Link>
          </Nav>

          {/* Versión móvil del menú - ORDEN 0 en móvil (primero) */}
          <Nav className="flex-column align-items-center d-md-none order-0">
            <Nav.Link href="#" className="text-white">Home</Nav.Link>
            <Nav.Link href="#" className="text-white">Teams</Nav.Link>
            <Nav.Link href="#" className="text-white">Blowers</Nav.Link>
            <Nav.Link href="#" className="text-white">Events</Nav.Link>
            <Nav.Link href="#" className="text-white">Contact</Nav.Link>
          </Nav>

          {/* Derecha: Redes sociales - ORDEN 1 en móvil (medio) */}
          <div className="text-center text-md-end order-1">
            <p className="mb-2 text-white-50 small">Social Media:</p>
            <div className="d-flex justify-content-center justify-content-md-end gap-4">
              <a href="https://www.instagram.com/willsmith/" target="_blank" rel="noopener noreferrer">
                <img src="/argazkiak/instagramblanco.png" alt="Instagram" width="35" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <img src="/argazkiak/whatsappblanco.svg" alt="WhatsApp" width="35" />
              </a>
              <a href="https://www.facebook.com/WillSmith/" target="_blank" rel="noopener noreferrer">
                <img src="/argazkiak/facebookona.svg" alt="Facebook" width="35" />
              </a>
            </div>
          </div>
        </div>

        {/* LÍNEA DIVISORIA */}
        <hr className="border-secondary opacity-25 my-4" />

        {/* FILA INFERIOR – centrada */}
        <div className="text-center">
          <Nav className="justify-content-center small mb-3 flex-wrap gap-3">
            <Nav.Link href="#" className="text-white-50 py-0">Aviso legal</Nav.Link>
            <span className="text-white-50">·</span>
            <Nav.Link href="#" className="text-white-50 py-0">Política de privacidad</Nav.Link>
            <span className="text-white-50">·</span>
            <Nav.Link href="#" className="text-white-50 py-0">Política de cookies</Nav.Link>
          </Nav>
          
          <img
            src="/argazkiak/taldearen-izena1.png"
            alt="Marblow"
            className="marblogo mb-3"
            style={{ width: "200px", objectFit: "contain" }}
          />

          {/* Copyright en móvil - aparece al final de todo */}
          <div className="d-md-none text-center">
            <img
              src="/argazkiak/logoaB.png"
              alt="Marblow"
              width="50"
              className="mb-2"
            />
            <p className="mb-0 small text-white-50">
              © Marblow 2025<br />Todos los derechos reservados.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function TeamHero({
  logoSrc,
  name,
  description
}) {
  // Estado para detectar orientación del logo
  const [isPortrait, setIsPortrait] = useState(false);

  // Detectar dimensiones al cargar la imagen
  const handleImageLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.target;
    if (naturalHeight > naturalWidth) {
      setIsPortrait(true);
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center py-3">
      <Container>
        <div className={`hero-blur ${isPortrait ? "text-start" : "text-center"}`}>
          
          <Row className={`align-items-center ${isPortrait ? "" : "justify-content-center"}`}>
            
            {/* 1. COLUMNA DEL LOGO */}
            <Col xs={12} md={isPortrait ? 4 : 12} className="mb-4 mb-md-0">
              {logoSrc && (
                <img
                  src={logoSrc}
                  alt={name || "Team Logo"}
                  onLoad={handleImageLoad}
                  className="img-fluid"
                  style={{ 
                    maxHeight: isPortrait ? "300px" : "200px", 
                    maxWidth: "100%",
                    objectFit: "contain" 
                  }}
                />
              )}
            </Col>

            {/* 2. COLUMNA DE INFORMACIÓN (Nombre + Descripción) */}
            <Col xs={12} md={isPortrait ? 8 : 12}>
              {isPortrait && name && (
                <h1 className="mb-3 display-3 fw-bold">
                  {name}
                </h1>
              )}
              
              {description && (
                <p
                  className="lead mb-0 description"
                  style={{ maxWidth: "800px", margin: isPortrait ? "0" : "0 auto" }}
                >
                  {description}
                </p>
              )}
            </Col>

          </Row>
        </div>
      </Container>
    </section>
  );
}

export default TeamHero;
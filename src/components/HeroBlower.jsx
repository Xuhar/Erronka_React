import React from "react";
import { Container, ProgressBar, Row, Col, Image } from "react-bootstrap";

function HeroBlower({
  title,
  name,
  surname,
  description,
  age,
  PulmonCap,
  yazz,
  imageSrc // Nueva prop para la foto
}) {

  // CONFIGURACIÓN DE MÁXIMOS (Para calcular el % de las barras)
  const MAX_AGE = 80;
  const MAX_PULMON = 80;
  const MAX_SMOKE_YEARS = age || 40;

  // Imagen por defecto si no se pasa ninguna (Placeholder)
  const displayImage = imageSrc || "https://via.placeholder.com/400x400?text=Blower+Profile";

  return (
    <section className="d-flex justify-content-center align-items-center py-5">
      <Container>
        {/* Contenedor con fondo semitransparente */}
        <div 
          className="hero-blur blower p-4 p-md-5" 
          style={{ 
            borderRadius: '20px', 
            background: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro para resaltar
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          
          {/* Título de la sección (Opcional, puede ir fuera o arriba) */}
          {title && (
            <h1 className="mb-4 display-4 text-white text-center text-uppercase font-weight-bold">
              {title}
            </h1>
          )}

          <Row className="align-items-center">
            
            {/* COLUMNA IZQUIERDA: IMAGEN */}
            <Col md={5} lg={4} className="mb-4 mb-md-0 text-center">
              <div style={{ 
                  padding: '10px', 
                  border: '2px solid rgba(255,255,255,0.2)', 
                  borderRadius: '15px',
                  display: 'inline-block'
                }}>
                <Image 
                  src={displayImage} 
                  alt={`${name} ${surname}`} 
                  fluid 
                  rounded 
                  style={{ 
                    maxHeight: '350px', 
                    objectFit: 'cover',
                    width: '100%',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.5)'
                  }} 
                />
              </div>
            </Col>

            {/* COLUMNA DERECHA: INFO Y STATS */}
            <Col md={7} lg={8}>
              <div className="pl-md-3">
                <h2 className="text-white display-5 font-weight-bold mb-0">{name}</h2>
                <h3 className="text-info mb-4">{surname}</h3>
                {description && (
                  <div className="mb-4 text-white font-weight-bold">
                    {description}
                  </div>
                )}
                {/* --- BARRAS DE ESTADÍSTICAS --- */}
                <div className="stats-bars">
                  
                  
                  {/* 1. Edad */}
                  <div className="mb-2">
                    <div className="d-flex justify-content-between text-white mb-1">
                      <span style={{ fontSize: '1.1rem' }}>🎂 Edad</span>
                      <span className="font-weight-bold">{age} años</span>
                    </div>
                    <ProgressBar 
                      now={(age / MAX_AGE) * 100} 
                      variant="success" 
                      striped
                      style={{ height: '24px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.1)' }} 
                    />
                  </div>

                  {/* 2. Años de Fumador */}
                  <div className="mb-2">
                    <div className="d-flex justify-content-between text-white mb-1">
                      <span style={{ fontSize: '1.1rem' }}>🚬 Años de Fumador</span>
                      <span className="font-weight-bold">{yazz} años</span>
                    </div>
                    <ProgressBar 
                      now={(yazz / MAX_SMOKE_YEARS) * 100} 
                      variant="danger" 
                      striped 
                      style={{ height: '24px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.1)' }} 
                    />
                  </div>

                  {/* 3. Capacidad Pulmonar */}
                  <div className="mb-4">
                    <div className="d-flex justify-content-between text-white mb-1">
                      <span style={{ fontSize: '1.1rem' }}>🫁 Capacidad Pulmonar</span>
                      <span className="font-weight-bold">{PulmonCap} dl</span>
                    </div>
                    <ProgressBar 
                      now={(PulmonCap / MAX_PULMON) * 100} 
                      variant="info" 
                      animated 
                      style={{ height: '24px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.1)' }} 
                    />
                  </div>

                </div>
              </div>
            </Col>
          </Row>

        </div>
      </Container>
    </section>
  );
}

export default HeroBlower;
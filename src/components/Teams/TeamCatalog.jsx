import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

// IMPORTANTE: Importar los estilos CSS de slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importamos la tarjeta individual
import BlowerCard from "./BlowerCard"; 

function TeamCatalog({ title, participants }) {
  
  // Configuración del Slider (react-slick)
  const settings = {
    dots: true,           // Muestra los puntos de navegación abajo
    infinite: true,       // Loop infinito
    speed: 500,           // Velocidad de transición
    slidesToShow: 4,      // Cuántos se ven en escritorio
    slidesToScroll: 1,    // Cuántos se mueven al deslizar
    autoplay: true,       // Movimiento automático opcional
    autoplaySpeed: 3000,
    arrows: true,         // Flechas laterales (se ven si el CSS lo permite)
    responsive: [
      {
        breakpoint: 1200, // Pantallas grandes
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992, // Tablets landscape
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576, // Móviles
        settings: {
          slidesToShow: 1,
          arrows: false // Ocultar flechas en móvil para más espacio
        }
      }
    ]
  };

  return (
    <section className="py-3">
      <Container>
        {/* Reutilizamos la clase "hero-blur" para el fondo consistente */}
        <div className="hero-blur p-4 p-md-5">
            
          {title && (
            <h2 className="text-center text-white mb-5 display-5 fw-bold text-uppercase">
              {title}
            </h2>
          )}

          {/* Contenedor para el slider con margen para las flechas */}
          <div className="team-catalog-slider-wrapper">
            <Slider {...settings}>
                {participants.map((member, index) => (
                    // Es importante poner la 'key' aquí en el map
                    <BlowerCard 
                        key={index}
                        imageSrc={member.image}
                        name={member.name}
                        nickname={member.surname} // Usamos surname como apodo principal
                        age={member.age}
                        lungCapacity={member.lungCapacity}
                    />
                ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TeamCatalog;
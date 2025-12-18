import React from "react";
import { Container } from "react-bootstrap";
// Importar Swiper y módulos necesarios
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import BlowerCard from "./BlowerCard";

function TeamCatalog({ title, subtitle, participants }) {
  return (
    <section className="py-3">
      <Container>
        <div className="hero-blur p-4 p-md-5">
          {title && (
            <h2 className="text-center text-white mb-3 display-5 fw-bold text-uppercase">
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className="lead mb-4 text-center"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              {subtitle}
            </p>
          )}
          
          <div className="team-catalog-slider-wrapper">
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1} // Base para móviles pequeños
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop="true"
            breakpoints={{
              // ≥768px → 2 slides (tablets pequeñas)
              768: {
                slidesPerView: 2,
              },
              // ≥1024px → 3 slides (tablets grandes / laptops pequeñas)
              1024: {
                slidesPerView: 3,
              },
              // ≥1400px → 4 slides (escritorios grandes)
              1400: {
                slidesPerView: 4,
              },
              // Opcional: ≥1600px → 5 slides si quieres aún más en pantallas muy grandes
              // 1600: {
              //   slidesPerView: 5,
              // },
            }}
          >
              {participants.map((member, index) => (
                <SwiperSlide key={index}>
                  <BlowerCard
                    imageSrc={member.image}
                    name={member.name}
                    nickname={member.surname}
                    age={member.age}
                    lungCapacity={member.lungCapacity}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TeamCatalog;
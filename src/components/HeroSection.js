import React from "react";
import { Container, Button } from "react-bootstrap";

function HeroSection() {
  return (
    <section className="d-flex justify-content-center align-items-center py-5">
      <Container>
        <div className="hero-blur text-center">
          <h1 className="mb-3 display-3">
            International Marble Blowing Competition
          </h1>
          <p
            className="lead mb-5"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            Experience the pinnacle of precision and skill! The most prestigious
            and exciting marble-blowing event in the world, uniting the globe's
            finest blowers.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button
              href="#"
              variant="primary"
              size="lg"
              className="px-4 gap-3 fw-bold shadow-lg"
            >
              Register Now
            </Button>
            <Button href="#" variant="outline-light" size="lg" className="px-4">
              View Rulebook
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;

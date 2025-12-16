import React from "react";
import { Container, Button } from "react-bootstrap";

function HeroSection({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  cosas
}) {
  return (
    <section className="d-flex justify-content-center align-items-center py-5">
      <Container>
        <div className="hero-blur text-center">
          {title && (
            <h1 className="mb-3 display-3">
              {title}
            </h1>
          )}

          {subtitle && (
            <p
              className="lead mb-4"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              {subtitle}
            </p>
          )}
          {cosas && (
            <div className="hero-cosas">
              {cosas}
            </div>
          )}

          {(primaryButton || secondaryButton) && (
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              {primaryButton && (
                <Button
                  href={primaryButton.href}
                  variant={primaryButton.variant || "primary"}
                  size="lg"
                  className="px-4 gap-3 fw-bold shadow-lg"
                >
                  {primaryButton.label}
                </Button>
              )}

              {secondaryButton && (
                <Button
                  href={secondaryButton.href}
                  variant={secondaryButton.variant || "outline-light"}
                  size="lg"
                  className="px-4"
                >
                  {secondaryButton.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
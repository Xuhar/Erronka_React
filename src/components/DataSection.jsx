import React from "react";
import { Container } from "react-bootstrap";

function DataSection({ title, subtitle, children }) {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center">

          {title && <h2 className="mb-3">{title}</h2>}

          {subtitle && (
            <p className="lead mb-4">
              {subtitle}
            </p>
          )}

          <div className="mt-4">
            {children}
          </div>

        </div>
      </Container>
    </section>
  );
}

export default DataSection;

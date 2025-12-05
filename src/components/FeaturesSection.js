import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function FeaturesSection() {
  const features = [
    {
      title: "Global Teams",
      description:
        "Over 50 countries compete for the coveted Golden Marble Trophy.",
    },
    {
      title: "Elite Blowers",
      description:
        "Profiling the legends and rising stars of the blowing community.",
    },
    {
      title: "Live Events",
      description:
        "Follow all the action from local qualifiers to the international finals.",
    },
  ];

  return (
    <section className="py-5 section-alt">
      <Container>
        <div className="hero-blur p-4 p-md-5">
          <h2 className="mb-4 text-center">The Game of Precision</h2>
          <Row className="row-cols-1 row-cols-md-3 g-4 text-center">
            {features.map((feature, index) => (
              <Col key={index}>
                <div className="p-3">
                  <h3 className="h4">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default FeaturesSection;

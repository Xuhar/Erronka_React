import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function HighlightsSection() {
  const highlights = [
    {
      title: "Top Teams",
      description:
        "Meet the most successful marble blowing teams and learn what makes them exceptional. View standings and team profiles.",
      image:
        "https://via.placeholder.com/600x400/007bff/FFFFFF?text=Team+Focus",
      buttonText: "View Teams",
    },
    {
      title: "Star Blowers",
      description:
        "Profiles of the most skilled marble blowers participating in the competition, including stats and history.",
      image:
        "https://via.placeholder.com/600x400/272626/FFFFFF?text=Blower+Profile",
      buttonText: "View Blowers",
    },
    {
      title: "Upcoming Events",
      description:
        "Stay informed about all upcoming international tournaments, local qualifiers, and rule updates.",
      image: "/argazkiak/canicas.png",
      buttonText: "Event Calendar",
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <h3 className="mb-5 text-center text-outline-white display-6">
          Featured Highlights
        </h3>
        <Row className="g-4">
          {highlights.map((highlight, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow-lg border-0">
                <Card.Img
                  variant="top"
                  src={highlight.image}
                  alt={highlight.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-primary">
                    {highlight.title}
                  </Card.Title>
                  <Card.Text className="text-dark-emphasis">
                    {highlight.description}
                  </Card.Text>
                  <Button
                    href="#"
                    variant="outline-primary"
                    size="sm"
                    className="mt-3"
                  >
                    {highlight.buttonText}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default HighlightsSection;

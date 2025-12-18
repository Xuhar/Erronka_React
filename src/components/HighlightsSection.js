import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function HighlightsSection() {
  const highlights = [
    {
      title: "Puzgailur",
      description:
        "Meet the most successful marble blowing teams and learn what makes them exceptional. View standings and team profiles.",
      image:
        "/Teams/puzgailurOnPoint.png",
      buttonText: "View Teams",
      link: "/teams",
    },
    {
      title: "Top Blowers",
      description:
        "Profiles of the most skilled marble blowers participating in the competition, including stats and history.",
      image:
        "/Teams/perlada.png",
      buttonText: "View Blowers",
      link: "/blowers",
    },
    {
      title: "Upcoming Events",
      description:
        "Stay informed about all upcoming international tournaments, local qualifiers, and rule updates.",
      image: "/argazkiak/canicas.png",
      buttonText: "Event Calendar",
      link: "/events",
    },
  ];

  return (
    <section className="py-4">
      <Container>
        <h3 className="mb-4 text-center text-outline-white display-6">
          Featured Pages
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
                    href={highlight.link || "#"}
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

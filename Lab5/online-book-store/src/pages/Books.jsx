import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { bookList } from "../data/books";

export default function Books() {
  return (
    <Container className="py-4">
      <h3 className="fw-bold mb-3">Book List</h3>

      <Row className="g-4">
        {bookList.map((b) => (
          <Col key={b.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={b.image}
                alt={b.title}
                style={{ height: 260, objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-6 fw-bold">{b.title}</Card.Title>
                <Card.Text className="mb-1">
                  <small className="text-muted">Author: {b.author}</small>
                </Card.Text>
                <Card.Text className="mb-3">
                  <small className="text-muted">Price: {b.price}</small>
                </Card.Text>

                <Button
                  as={Link}
                  to={`/books/${b.id}`}
                  variant="success"
                  className="mt-auto"
                >
                  <i className="bi bi-box-arrow-in-right me-2" />
                  View Detail
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

import Container from "react-bootstrap/Container";

export default function NotFound() {
  return (
    <Container className="py-4">
      <h3 className="fw-bold">404 - Not Found</h3>
      <p className="text-muted">The page you are looking for does not exist.</p>
    </Container>
  );
}

import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <Container className="py-4">
      <h2 className="fw-bold mb-3">Welcome to the Book Store</h2>

      <p className="text-muted mb-2">
        Discover a world of stories and knowledge. Whether you're looking for
        the latest bestsellers or timeless classics, we have something for
        everyone.
      </p>

      <p className="text-muted">
        Our collection spans various genres including fiction, non-fiction,
        mystery, romance, and science fiction. Dive into your next adventure
        today!
      </p>
    </Container>
  );
}

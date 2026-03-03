import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import { bookList } from "../data/books";

export default function BookDetail() {
  const { id } = useParams();
  const bookId = Number(id);
  const book = bookList.find((b) => b.id === bookId);

  if (!book) {
    return (
      <Container className="py-4">
        <h3 className="fw-bold">Book not found!</h3>
        <Button as={Link} to="/books" variant="secondary" className="mt-2">
          <i className="bi bi-arrow-left me-2" />
          Back to Book List
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h3 className="fw-bold">{book.title}</h3>
      <p className="text-muted mb-1">Author: {book.author}</p>
      <p className="text-muted">Price: {book.price}</p>

      <img
        src={book.image}
        alt={book.title}
        style={{ maxWidth: 260, width: "100%", borderRadius: 8 }}
        className="shadow-sm mb-3"
      />

      <div>
        <Button as={Link} to="/books" variant="secondary">
          <i className="bi bi-arrow-left me-2" />
          Back to Book List
        </Button>
      </div>
    </Container>
  );
}

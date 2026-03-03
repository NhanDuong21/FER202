import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-semibold">
          Book Store
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end className="nav-link-hover">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/books" className="nav-link-hover">
              Books
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link-hover">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

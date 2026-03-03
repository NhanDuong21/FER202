import { useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const e = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.email.trim()) e.email = "Please enter your email.";
    else if (!isValidEmail(values.email))
      e.email = "Please enter a valid email.";
    if (!values.message.trim()) e.message = "Please enter your message.";
    return e;
  }, [values]);

  const hasError = (field) => touched[field] && errors[field];

  const onChange = (field) => (ev) =>
    setValues((p) => ({ ...p, [field]: ev.target.value }));
  const onBlur = (field) => () => setTouched((p) => ({ ...p, [field]: true }));

  const onSubmit = (ev) => {
    ev.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      setValues({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
    } else {
      setSubmitted(false);
    }
  };

  const onReset = () => {
    setValues({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
    setSubmitted(false);
  };

  return (
    <Container className="py-4" style={{ maxWidth: 760 }}>
      <h3 className="fw-bold mb-3">Contact Us</h3>

      {submitted && (
        <div className="alert alert-success" role="alert">
          Submitted successfully!
        </div>
      )}

      <Form onSubmit={onSubmit} onReset={onReset} noValidate>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={values.name}
            onChange={onChange("name")}
            onBlur={onBlur("name")}
            isInvalid={!!hasError("name")}
            placeholder="Enter your name"
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={values.email}
            onChange={onChange("email")}
            onBlur={onBlur("email")}
            isInvalid={!!hasError("email")}
            placeholder="Enter email"
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={values.message}
            onChange={onChange("message")}
            onBlur={onBlur("message")}
            isInvalid={!!hasError("message")}
            placeholder="Enter message"
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary" className="me-2">
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </Form>
    </Container>
  );
}

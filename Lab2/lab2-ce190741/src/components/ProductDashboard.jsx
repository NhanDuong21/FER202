import { useMemo, useState } from "react";
import { Table, Button, Modal, Form, InputGroup } from "react-bootstrap";
import { initialProducts } from "../data/product";

export default function ProductDashboard() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");

  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("view");
  const [selected, setSelected] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  const filtered = useMemo(() => {
    const key = search.trim().toLowerCase();
    if (!key) return products;
    return products.filter((p) => p.name.toLowerCase().includes(key));
  }, [products, search]);

  const parsePrice = (v) => {
    if (v === null || v === undefined) return 0;
    if (typeof v === "number") return v;
    const n = Number(String(v).replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) ? n : 0;
  };

  const formatPrice = (n) => `$${Number(n) || 0}`;

  const openView = (p) => {
    setMode("view");
    setSelected({
      ...p,
      price: parsePrice(p.price),
      status: p.status || "In Stock",
    });
    setShow(true);
  };

  const openEdit = (p) => {
    setMode("edit");
    setSelected({
      ...p,
      price: parsePrice(p.price),
      status: p.status || "In Stock",
    });
    setShow(true);
  };

  const openAdd = () => {
    setMode("add");
    setSelected({
      id: Date.now(),
      name: "",
      price: 0,
      status: "In Stock",
    });
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
    setSelected(null);
  };

  const save = () => {
    if (!selected.name.trim()) {
      alert("Name is required!");
      return;
    }

    const normalized = {
      ...selected,
      price: formatPrice(parsePrice(selected.price)),
    };

    setProducts((prev) => {
      const exists = prev.some((x) => x.id === normalized.id);
      if (exists)
        return prev.map((x) => (x.id === normalized.id ? normalized : x));
      return [normalized, ...prev];
    });

    closeModal();
  };

  const openDelete = (p) => {
    setToDelete(p);
    setShowDelete(true);
  };

  const closeDelete = () => {
    setShowDelete(false);
    setToDelete(null);
  };

  const confirmDelete = () => {
    if (!toDelete) return;
    setProducts((prev) => prev.filter((x) => x.id !== toDelete.id));
    closeDelete();
  };

  const isView = mode === "view";

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3 gap-3">
        <div style={{ maxWidth: 420, width: "100%" }}>
          <InputGroup>
            <InputGroup.Text>
              <i className="bi bi-search" />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </div>

        <Button variant="primary" onClick={openAdd}>
          <i className="bi bi-plus-circle me-2" />
          Add Product
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th style={{ width: "10%", textAlign: "center" }}>#</th>
            <th style={{ width: "40%" }}>Name</th>
            <th style={{ width: "20%" }}>Status</th>
            <th style={{ width: "30%", textAlign: "center" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((p, idx) => (
            <tr key={p.id}>
              <td style={{ textAlign: "center" }}>{idx + 1}</td>
              <td>{p.name}</td>
              <td>{p.status}</td>
              <td className="d-flex justify-content-center align-items-center gap-2 flex-wrap">
                <Button size="sm" variant="info" onClick={() => openView(p)}>
                  <i className="bi bi-eye"></i>
                </Button>

                <Button size="sm" variant="warning" onClick={() => openEdit(p)}>
                  <i className="bi bi-pencil-square"></i>
                </Button>

                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => openDelete(p)}
                >
                  <i className="bi bi-trash" />
                </Button>
              </td>
            </tr>
          ))}

          {filtered.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-4">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal show={show} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {mode === "view" && "Product Details"}
            {mode === "edit" && "Edit Product"}
            {mode === "add" && "Add Product"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selected && (
            <>
              {mode === "view" ? (
                <div>
                  <div className="mb-2">
                    <strong>Name:</strong> {selected.name}
                  </div>
                  <div className="mb-2">
                    <strong>Price:</strong>{" "}
                    {formatPrice(parsePrice(selected.price))}
                  </div>
                  <div className="mb-2">
                    <strong>Status:</strong> {selected.status}
                  </div>
                </div>
              ) : (
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      value={selected.name}
                      onChange={(e) =>
                        setSelected({ ...selected, name: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      value={parsePrice(selected.price)}
                      onChange={(e) =>
                        setSelected({
                          ...selected,
                          price: parsePrice(e.target.value),
                        })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      value={selected.status}
                      onChange={(e) =>
                        setSelected({ ...selected, status: e.target.value })
                      }
                    />
                  </Form.Group>
                </Form>
              )}
            </>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          {!isView && (
            <Button variant="primary" onClick={save}>
              Save
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      <Modal show={showDelete} onHide={closeDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>

        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

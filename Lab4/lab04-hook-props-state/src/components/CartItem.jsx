export default function CartItem({
  id,
  name,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  const subtotal = price * quantity;

  return (
    <div className="border rounded p-2 mb-2">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <div className="fw-semibold">{name}</div>
          <div className="text-muted small">${price.toFixed(2)} each</div>
        </div>

        <div className="text-end">
          <div className="text-muted small">Subtotal</div>
          <div className="fw-semibold">${subtotal.toFixed(2)}</div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <div className="btn-group btn-group-sm" role="group" aria-label="qty">
          <button
            className="btn btn-outline-secondary"
            onClick={() => onDecrease(id)}
          >
            -
          </button>
          <button className="btn btn-outline-secondary" disabled>
            {quantity}
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => onIncrease(id)}
          >
            +
          </button>
        </div>

        <button
          className="btn btn-link text-danger p-0"
          onClick={() => onRemove(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

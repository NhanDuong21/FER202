export default function ProductItem({
  id,
  name,
  price,
  stock,
  description,
  onAddToCart,
}) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h6 className="card-title mb-1">{name}</h6>
        <p className="text-muted small mb-2">{description}</p>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <strong>${price.toFixed(2)}</strong>
          <span className="text-muted small">Stock: {stock}</span>
        </div>

        <button
          className="btn btn-primary mt-auto"
          onClick={() => onAddToCart(id)}
          disabled={stock <= 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

import CartItem from "./CartItem";

export default function Cart({
  items,
  totalPrice,
  totalItems,
  error,
  onIncrease,
  onDecrease,
  onRemove,
  onClearCart,
}) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="mb-2">Cart</h5>
        <div className="text-muted small mb-3">
          <strong>Cart Total:</strong> ${totalPrice.toFixed(2)} ({totalItems}{" "}
          items)
        </div>

        {error ? (
          <div className="alert alert-warning py-2 small" role="alert">
            {error}
          </div>
        ) : null}

        {items.length === 0 ? (
          <div className="text-muted">Your cart is empty.</div>
        ) : (
          <>
            <div style={{ maxHeight: 360, overflowY: "auto" }}>
              {items.map((i) => (
                <CartItem
                  key={i.id}
                  id={i.id}
                  name={i.name}
                  price={i.price}
                  quantity={i.quantity}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  onRemove={onRemove}
                />
              ))}
            </div>

            <div className="d-flex justify-content-between mt-3">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={onClearCart}
              >
                Clear Cart
              </button>
              <button
                className="btn btn-success btn-sm"
                onClick={() => alert(`Checkout: $${totalPrice.toFixed(2)}`)}
              >
                Checkout (${totalPrice.toFixed(2)})
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

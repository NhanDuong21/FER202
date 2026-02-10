import { useMemo, useReducer } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { PRODUCTS } from "./data/products";
import { cartReducer, initialCartState } from "./reducer/cartReducer";

export default function App() {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  const totalItems = useMemo(
    () => cartState.items.reduce((sum, i) => sum + i.quantity, 0),
    [cartState.items],
  );

  const totalPrice = useMemo(
    () => cartState.items.reduce((sum, i) => sum + i.quantity * i.price, 0),
    [cartState.items],
  );

  const getStockById = (id) => PRODUCTS.find((p) => p.id === id)?.stock ?? 0;

  // ADD: nếu đã có -> tăng qty, nhưng phải check stock trước
  const handleAddToCart = (productId) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    const inCart = cartState.items.find((i) => i.id === productId);
    const currentQty = inCart ? inCart.quantity : 0;

    if (currentQty + 1 > product.stock) {
      dispatch({
        type: "SET_ERROR",
        payload: { message: `Cannot add more than stock (${product.stock}).` },
      });
      return;
    }

    dispatch({ type: "ADD_ITEM", payload: { product } });
  };

  const handleIncrease = (id) => {
    const stock = getStockById(id);
    const inCart = cartState.items.find((i) => i.id === id);
    const currentQty = inCart ? inCart.quantity : 0;

    if (currentQty + 1 > stock) {
      dispatch({
        type: "SET_ERROR",
        payload: { message: `Cannot add more than stock (${stock}).` },
      });
      return;
    }

    dispatch({ type: "INCREASE_QTY", payload: { id } });
  };

  const handleDecrease = (id) =>
    dispatch({ type: "DECREASE_QTY", payload: { id } });
  const handleRemove = (id) =>
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  const handleClearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <div className="container py-4">
      <h2 className="mb-4">React Hooks Shopping Cart</h2>

      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <ProductList products={PRODUCTS} onAddToCart={handleAddToCart} />
        </div>

        <div className="col-12 col-lg-4">
          <Cart
            items={cartState.items}
            totalItems={totalItems}
            totalPrice={totalPrice}
            error={cartState.error}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
            onClearCart={handleClearCart}
          />
        </div>
      </div>
    </div>
  );
}

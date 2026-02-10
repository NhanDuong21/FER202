import ProductItem from "./ProductItem";

export default function ProductList({ products, onAddToCart }) {
  return (
    <div>
      <h5 className="mb-3">Products</h5>
      <div className="row g-3">
        {products.map((p) => (
          <div className="col-12 col-md-6" key={p.id}>
            <ProductItem
              id={p.id}
              name={p.name}
              price={p.price}
              stock={p.stock}
              description={p.description}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

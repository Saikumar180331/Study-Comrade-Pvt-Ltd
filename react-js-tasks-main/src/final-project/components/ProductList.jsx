import React from "react";
import { useDispatch } from "react-redux";
import products from "../data/products";

function ProductList() {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

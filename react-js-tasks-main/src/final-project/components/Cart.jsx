import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, i) => (
          <div key={i}>
            {item.name} - ₹{item.price}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;

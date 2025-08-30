// src/Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="container py-5">
        <h1>Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1>Your Cart</h1>
      <ul className="list-group mb-3">
        {cartItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{item.name}</h5>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button className="btn btn-secondary" onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

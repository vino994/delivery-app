// src/Pricing.js (example)
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const products = [
  { id: 1, name: "Basic Plan", price: 9.99 },
  { id: 2, name: "Standard Plan", price: 19.99 },
  { id: 3, name: "Premium Plan", price: 29.99 },
];

export default function Pricing() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container py-5">
      <h1>Pricing Plans</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5>{product.name}</h5>
                <p>${product.price.toFixed(2)}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

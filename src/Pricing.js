import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Pricing.css";

const products = [
  { id: 1, name: "Basic Plan", price: 9.99, features: ["Feature A", "Feature B", "Feature C"] },
  { id: 2, name: "Standard Plan", price: 19.99, features: ["Feature A", "Feature B", "Feature C", "Feature D"] },
  { id: 3, name: "Premium Plan", price: 29.99, features: ["All Features Included", "Priority Support", "Free Delivery"] },
];

export default function Pricing() {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="pricing-section container py-5">
      <h1 className="text-center mb-5 fw-bold">Pricing Plans</h1>
      <div className="row g-4">
        {products.map(({ id, name, price, features }) => (
          <div className="col-md-4" key={id}>
            <div className="card pricing-card shadow-lg p-3 rounded-4 h-100">
              <div className="card-header text-center bg-gradient-primary text-white rounded-3 mb-3">
                <h4 className="mb-0">{name}</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <div className="price-tag text-center mb-3">
                  <span className="currency">$</span>
                  <span className="price">{price.toFixed(2)}</span>
                  <span className="duration">/month</span>
                </div>
                <ul className="list-unstyled mb-4 flex-grow-1">
                  {features.map((feature, idx) => (
                    <li key={idx} className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="btn btn-primary btn-lg w-100 fw-semibold"
                  onClick={() => addToCart({ id, name, price })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

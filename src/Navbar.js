// src/Navbar.js
import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function Navbar() {
  const { cartCount } = useContext(CartContext);
  const collapseRef = useRef(null);
  const bsCollapse = useRef(null);

  // Initialize Bootstrap collapse manually
  useEffect(() => {
    if (collapseRef.current && window.bootstrap) {
      bsCollapse.current = new window.bootstrap.Collapse(collapseRef.current, {
        toggle: false,
      });
    }
  }, []);

  const toggleMenu = () => {
    if (bsCollapse.current) {
      bsCollapse.current.toggle();
    }
  };

  const closeMenu = () => {
    if (bsCollapse.current) {
      bsCollapse.current.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
          <i className="fas fa-shopping-cart me-2 text-warning"></i>
          <strong>Deliver X</strong>
        </Link>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Nav Items */}
        <div
          className="collapse navbar-collapse animated-navbar"
          id="navbarNav"
          ref={collapseRef}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing" onClick={closeMenu}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages" onClick={closeMenu}>Pages</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" onClick={closeMenu}>Cart ({cartCount})</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
            <li className="nav-item d-lg-none">
              <Link className="nav-link" to="/register" onClick={closeMenu}>Register</Link>
            </li>
          </ul>

          {/* Desktop Right Buttons */}
          <div className="ms-3 d-none d-lg-flex">
            <button className="btn btn-outline-dark me-2">Download App</button>
            <Link to="/register" className="btn btn-danger">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

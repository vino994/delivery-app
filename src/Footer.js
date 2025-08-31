// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container py-5 border-top">
        <div className="row">
          {/* Menu Column */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Menu</h6>
            <ul className="list-unstyled text-muted">
              <li><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
              <li><Link to="/about" className="text-decoration-none text-muted">About</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-muted">Contact</Link></li>
              <li><Link to="/pricing" className="text-decoration-none text-muted">Pricing</Link></li>
              <li><Link to="/pages" className="text-decoration-none text-muted">Pages</Link></li>
              <li><Link to="/register" className="text-decoration-none text-muted">Register</Link></li>
              <li><Link to="/login" className="text-decoration-none text-muted">Login</Link></li>
              <li><Link to="/cart" className="text-decoration-none text-muted">Cart</Link></li>
            </ul>
          </div>

          {/* Utility Pages Column */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Utility pages</h6>
            <ul className="list-unstyled text-muted">
              <li><Link to="/404" className="text-decoration-none text-muted">404 Not found</Link></li>
              <li><a href="https://brixtemplates.com" target="_blank" rel="noopener noreferrer" className="text-danger fw-bold text-decoration-none">Browse More Templates</a></li>
            </ul>
          </div>

          {/* Locations Column */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Available in</h6>
            <ul className="list-unstyled text-muted">
              <li>Coimbatore</li>
              <li>Bangalore</li>
              <li>Chennai</li>
              <li>Aranthangi</li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mt-4 border-top pt-4">
          <div className="text-muted small mb-2 mb-md-0">
            © Deliver X | Designed by{" "}
            <a href="https://brixtemplates.com" target="_blank" rel="noopener noreferrer" className="text-danger fw-bold text-decoration-none">
              VINO sanjeev Templates
            </a>
          </div>

          <div className="d-flex gap-2">
            <a href="https://www.facebook.com/vinothkumar.sanjeevi/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit Facebook
            </a>
            <a href="tel:+919380334317" className="btn btn-success">
              Connect / Call Now
            </a>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn btn-danger">
            📱 Download for iOS
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="btn btn-danger">
            🤖 Download for Android
          </a>
        </div>
      </div>
    </footer>
  );
}

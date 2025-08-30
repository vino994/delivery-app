import React from "react";
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
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Blog posts</li>
              <li>Plans</li>
              <li>Plan single</li>
              <li>Register</li>
            </ul>
          </div>

          {/* Utility Pages Column */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Utility pages</h6>
            <ul className="list-unstyled text-muted">
              <li>Start here</li>
              <li>Styleguide</li>
              <li>Password protected</li>
              <li>404 Not found</li>
              <li>Licenses</li>
              <li>Changelog</li>
              <li className="text-danger fw-bold">Browse More Templates</li>
            </ul>
          </div>

          {/* Locations Column */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Available in</h6>
            <ul className="list-unstyled text-muted">
              <li>🇺🇸 San Francisco, CA</li>
              <li>🏖️ Los Angeles, CA</li>
              <li>🇺🇸 New York, NY</li>
              <li>✈️ Seattle, WA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mt-4 border-top pt-4">
          <div className="text-muted small mb-2 mb-md-0">
            Copyright © Deliver X | Designed by{" "}
            <a href="" className="text-danger fw-bold">BRIX Templates</a> - Powered by Webflow
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-primary">Visit Facebook</button>
            <button className="btn btn-success">Connect / Call Now</button>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-danger">
            📱 Download for iOS
          </button>
          <button className="btn btn-danger">
            🤖 Download for Android
          </button>
        </div>
      </div>
    </footer>
  );
}

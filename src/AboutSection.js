// components/AboutSection.js
import React from "react";
import "./AboutSection.css"; // make sure this is updated
import riderImg from "./assets/delivery.png";
import burgerImg from "./assets/burger.PNG";

export default function AboutSection() {
  return (
    <section className="about-section py-5 position-relative">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6 mb-5 mb-lg-0 fade-in-left">
            <h6 className="text-uppercase text-danger fw-bold mb-2">
              ✨ About Deliver X
            </h6>
            <h2 className="fw-bold display-5 text-dark">
              We help top restaurants reach amazing customers
            </h2>
            <p className="text-secondary mt-3 lead">
              We connect food lovers to their favorite restaurants, ensuring fast,
              secure, and delicious deliveries every time. Join thousands who trust
              Deliver X to bring joy to their doorstep.
            </p>
            <button className="btn btn-danger mt-3 px-4 py-2 fw-semibold">
              Learn More
            </button>
          </div>

          {/* Image Content */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center position-relative fade-in-right">
            <div className="about-graphics-wrapper">
              <img
                src={riderImg}
                alt="Delivery Rider"
                className="img-fluid rider-img animated-rider"
              />

              <div className="card card-burger shadow rounded-4 p-2">
                <img src={burgerImg} className="card-img-top rounded-3" alt="Burger" />
                <div className="card-body p-2">
                  <h6 className="fw-bold mb-1">🍔 Duder Burger</h6>
                  <small className="text-muted">Top rated item!</small>
                </div>
              </div>

              <div className="card card-delivery shadow text-center py-3 px-4 rounded-4">
                <div className="fs-3 mb-2">🚚</div>
                <strong>Delivery time</strong>
                <div className="text-muted small">16 minutes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

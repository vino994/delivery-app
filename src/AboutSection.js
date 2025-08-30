// components/AboutSection.js
import React from "react";
import "./AboutSection.css"; // custom styles
import riderImg from "./assets/delivery.png";
import burgerImg from "./assets/burger.PNG";

export default function AboutSection() {
  return (
    <section className="about-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h6 className="text-danger fw-bold mb-2">ABOUT DELIVER X</h6>
            <h2 className="fw-bold display-6">
              We are here to help amazing restaurants get great customers
            </h2>
            <p className="text-muted mt-3">
              At morbi adipiscing sit sed consectetur senectus Dignissim sed amet
              tincidunt vitae ultricies ultrices amet fermentum amet neque et id
              sed lacinia massa pretium aliquam libero et.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 position-relative d-flex justify-content-center align-items-center">
            {/* Background Circle */}
            <div className="bg-circle rounded-circle"></div>

            {/* Rider Image */}
            <img
              src={riderImg}
              alt="Delivery Rider"
              className="rider-img img-fluid position-absolute"
            />

            {/* Burger Card */}
            <div className="card card-burger shadow-sm position-absolute text-start">
              <img src={burgerImg} className="card-img-top" alt="Burger" />
              <div className="card-body p-2">
                <h6 className="mb-0 fw-bold">Duder Burger</h6>
                <small className="text-muted">Number one-rated burger on our app!</small>
              </div>
            </div>

            {/* Delivery Time Card */}
            <div className="card card-delivery shadow-sm position-absolute text-center p-3">
              <div className="fs-3 mb-1">🚚</div>
              <div>
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

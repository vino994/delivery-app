// components/CompanyIntro.js
import React from "react";
import "./CompanyIntro.css"; // Custom CSS
import companyImg from "./assets/person.PNG"; // Replace with correct image path

export default function CompanyIntro() {
  return (
    <section className="company-intro-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={companyImg} alt="Company" className="img-fluid rounded shadow" />
          </div>

          {/* Text Content */}
          <div className="col-md-6">
            <h6 className="text-uppercase text-muted fw-bold mb-2">About Us</h6>
            <h2 className="fw-bold mb-3">Our company started back in 2016</h2>
            <p className="text-muted">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

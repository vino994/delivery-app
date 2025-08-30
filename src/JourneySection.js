import React from "react";
import "./JourneySection.css"; // You'll create this file for custom styles

const journeyData = [
  {
    year: "2016",
    title: "Deliver X was founded",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium..."
  },
  {
    year: "2018",
    title: "Raised Series A at $50M valuation",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium..."
  },
  {
    year: "2018",
    title: "Expanded to 10 major cities",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium..."
  },
  // Add more journey items as needed
];

export default function JourneySection() {
  return (
    <section className="py-5 bg-light journey-section">
      <div className="container">
        <div className="row">
          {/* Left Side: Title */}
          <div className="col-lg-5 mb-4">
            <h6 className="text-uppercase fw-bold text-danger">Our Journey</h6>
            <h2 className="fw-bold">
              It has been a long but <br /> incredible journey
            </h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
              egestas morbi sem vulputate etiam facilisis pellentesque ut quis.
            </p>
            <button className="btn btn-danger mt-3">Download app</button>
          </div>

          {/* Right Side: Scrollable Cards */}
          <div className="col-lg-7">
            <div className="journey-timeline overflow-auto p-2">
              {journeyData.map((item, index) => (
                <div key={index} className="card mb-3 p-3 rounded-4">
                  <small className="text-danger fw-bold">{item.year}</small>
                  <h5 className="fw-bold mt-1">{item.title}</h5>
                  <p className="text-muted mb-0">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

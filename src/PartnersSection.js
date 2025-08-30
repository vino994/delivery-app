import React from "react";
import "./PartnersSection.css";

import customerImg from "./assets/custmer.PNG";
import restaurantImg from "./assets/restaurent.PNG";
import riderImg from "./assets/riders.PNG";

export default function PartnersSection() {
  const partners = [
    {
      title: "Customers",
      image: customerImg,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis"
    },
    {
      title: "Restaurants",
      image: restaurantImg,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis"
    },
    {
      title: "Riders",
      image: riderImg,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis"
    }
  ];

  return (
    <section className="partners-section py-5 bg-light text-center">
      <div className="container">
        <h6 className="text-danger fw-bold text-uppercase">Our Partners</h6>
        <h2 className="fw-bold display-6">
          We don’t walk alone, Deliver X works thanks to our partners
        </h2>
        <p className="text-muted col-lg-8 mx-auto">
          Lorem Ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi
          sem vulputate etiam facilisis pellentesque ut quis.
        </p>

        <div className="row mt-5">
          {partners.map((partner, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="p-4">
                <img
                  src={partner.image}
                  alt={partner.title}
                  className="partner-img mb-3"
                />
                <h5 className="fw-bold">{partner.title}</h5>
                <p className="text-muted">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

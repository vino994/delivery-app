import React from "react";
import "./PressNewsSection.css";

const news = [
  {
    icon: "❤️",
    title: "Deliver X raises $26M in series B funding for growth",
    date: "January 22, 2023"
  },
  {
    icon: "🎵",
    title: "Deliver X claims to be the #1 player in the delivery industry",
    date: "Nov 15, 2022"
  },
  {
    icon: "📦",
    title: "Introducing curbside ordering with Deliver X",
    date: "Sep 18, 2022"
  },
  {
    icon: "🔥",
    title: "Introducing the Square POS integration with Deliver X",
    date: "Mar 12, 2022"
  }
];

export default function PressNewsSection() {
  return (
    <section className="press-news-section py-5 bg-white text-center">
      <div className="container">
        <h6 className="text-danger fw-bold text-uppercase">Press & News</h6>
        <h2 className="fw-bold mb-4">See what the press says<br />about Deliver X</h2>

        <div className="row justify-content-center">
          {news.map((item, idx) => (
            <div key={idx} className="col-md-5 m-2">
              <div className="news-card p-4 shadow-sm rounded bg-white h-100 text-start">
                <div className="fw-bold mb-2">
                  <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>{item.icon}</span>
                  <span className="text-capitalize">company</span>
                </div>
                <h6 className="mb-2">{item.title}</h6>
                <p className="text-danger fw-bold small">Read more →</p>
                <p className="text-muted small m-0">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

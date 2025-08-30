import React from "react";
import missionImg from "./assets/phone.PNG";

export default function MissionSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center flex-lg-row-reverse">
          <div className="col-lg-6">
            <img src={missionImg} alt="Mission" className="img-fluid rounded shadow" />
          </div>
          <div className="col-lg-6">
            <h6 className="text-uppercase fw-bold mb-2 text-danger">Our Mission</h6>
            <h2 className="fw-bold">Our mission is to disrupt the food industry</h2>
            <p className="text-muted mt-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/Contact.js
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Optional: for custom styles

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_lilibt4',
      'template_n1cxwq8',
      form.current,
      '-ofppnO1dVjdcg5jI'
    )
      .then(() => {
        setStatus("Message sent successfully!");
        form.current.reset();
      }, () => {
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="contact-bg py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <h2 className="mb-4 text-center text-danger">📬 Contact Us</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Your Name</label>
                    <input
                      type="text"
                      name="user_name"
                      className="form-control border-primary"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Email Address</label>
                    <input
                      type="email"
                      name="user_email"
                      className="form-control border-success"
                      placeholder="example@email.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      className="form-control border-warning"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-danger w-100 fw-bold">
                    ✉️ Send Message
                  </button>

                  {status && (
                    <div className="alert alert-info text-center mt-4 fw-semibold">
                      {status}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

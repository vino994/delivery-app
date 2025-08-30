// src/Contact.js
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_lilibt4',       // Replace with your actual EmailJS service ID
      'template_n1cxwq8',      // Replace with your actual EmailJS template ID
      form.current,
      '-ofppnO1dVjdcg5jI'        // Replace with your EmailJS public key
    )
    .then(() => {
      setStatus("Message sent successfully!");
      form.current.reset();
    }, () => {
      setStatus("Failed to send message. Please try again.");
    });
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="user_name" className="form-label">Your Name</label>
          <input type="text" name="user_name" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="user_email" className="form-label">Email Address</label>
          <input type="email" name="user_email" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea name="message" rows="5" className="form-control" required></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Send Message</button>

        {status && <div className="alert alert-info mt-3">{status}</div>}
      </form>
    </div>
  );
}

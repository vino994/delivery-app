import React, { useState } from "react";
import "./Register.css";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered Successfully!");
    console.log("Registered user:", form);
  };

  return (
    <div className="page-wrapper">
      <div className="register-container">
        <div className="register-card fade-in-up">
          <h2 className="register-title">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                placeholder="John Doe"
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                placeholder="john@example.com"
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={form.password}
                placeholder="********"
                className="input-field"
                required
              />
            </div>
            <button type="submit" className="btn-primary w-100">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

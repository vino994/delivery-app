// src/Login.js
import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in Successfully!");
    console.log("Login form:", form);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-danger">Login</h2>
      <form onSubmit={handleSubmit} className="col-md-6 mx-auto border p-4 shadow rounded">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" onChange={handleChange} value={form.email} className="form-control" required />
        </div>
        <div className="mb-4">
          <label className="form-label">Password</label>
          <input type="password" name="password" onChange={handleChange} value={form.password} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-danger w-100">Login</button>
      </form>
    </div>
  );
}

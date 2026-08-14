import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      `Welcome ${formData.name}! Your account has been created successfully.`
    );

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <section className="signup-page">
      <div className="signup-card">
        <h1>Create Account</h1>

        <p>Join Trippy and start your journey.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            minLength="6"
            required
          />

          <button type="submit">
            Sign Up
          </button>
        </form>

        {message && <div className="success-message">{message}</div>}
      </div>
    </section>
  );
}

export default Signup;
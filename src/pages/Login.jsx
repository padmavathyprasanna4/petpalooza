import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showSignup, setShowSignup] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Login:", form);

  // Redirect after login
  navigate("/home");
};

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setShowSignup(false);
    navigate("/home"); // redirect after signup
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Account</h1>

        <div className="login-card">
          <div className="login-bar">
            <div className="login-bar-left">Returning customer</div>
            <div className="login-bar-right">New customer</div>
          </div>

          <div className="login-content">
            {/* Left */}
            <div className="login-col">
              <form onSubmit={handleSubmit} className="login-form">
                <label className="login-label">
                  Email<span className="req">*</span>
                </label>
                <input
                  className="login-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                <label className="login-label">
                  Password<span className="req">*</span>
                </label>
                <input
                  className="login-input"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />

                <button className="login-btn" type="submit">
                  Log in
                </button>

                <button type="button" className="login-linkBtn">
                  Forget your password?
                </button>
              </form>
            </div>

            <div className="login-divider" />

            {/* Right */}
            <div className="login-col login-col-right">
              <p className="login-rightText">
                Register with us for a faster checkout,
                to track the status of your order and more.
              </p>

              <button
                type="button"
                className="create-btn"
                onClick={() => setShowSignup(true)}
              >
                Create an account
              </button>
            </div>
          </div>

          <div className="login-bottomLine" />
        </div>
      </div>

      {/* ================= SIGNUP MODAL ================= */}
      {showSignup && (
        <div className="modal-overlay">
          <div className="signup-modal">
            <button
              className="close-btn"
              onClick={() => setShowSignup(false)}
            >
              ✕
            </button>

            <h3>Sign up for a free account at Petpalooza.</h3>

            <form onSubmit={handleSignupSubmit}>
              <label>First Name</label>
              <input type="text" required />

              <label>Last Name</label>
              <input type="text" required />

              <label>Email</label>
              <input type="email" required />

              <label>Password</label>
              <input type="password" required />

              <button type="submit" className="signup-btn">
                Create an account
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
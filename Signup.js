import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";  // Linking the provided styles.css

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");  // To show the success message
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success) {
        // Show success message
        setMessage(data.message);
        setTimeout(() => {
          navigate("/login");  // Redirect to login page after 3 seconds
        }, 3000);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="wrapper">
      <div className="title">Signup Form</div>
      <form onSubmit={handleSignup} className="form-inner">
        <div className="field">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="btn">
          <button type="submit">Signup</button>
        </div>
        <div className="link-text">
          Already a member? <a href="/login">Login here</a>
        </div>
      </form>

      {/* Show success message */}
      {message && <div className="success-message">{message}</div>}
    </div>
  );
};

export default Signup;

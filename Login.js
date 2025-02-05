import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";  

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
        navigate("/home");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="wrapper">
      <div className="title">Login Form</div>
      <form onSubmit={handleLogin} className="form-inner">
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
        <div className="btn">
          <button type="submit">Login</button>
        </div>
        <div className="link-text">
          Not a member? <a href="/signup">Signup now</a>
        </div>
      </form>
    </div>
  );
};

export default Login;

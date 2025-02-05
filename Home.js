import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Assuming the CSS is in this file

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored user data (like tokens)
    localStorage.removeItem("userToken"); // or sessionStorage depending on your implementation
    navigate("/login"); // Redirect user to login page
  };

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;

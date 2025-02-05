import React from "react";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <button className="menu-btn">☰</button>
        <h1>Prize Scout</h1>
        <input type="text" placeholder="E.g. Laptops, mobiles" />
        <button className="login-btn">Login/Signup</button>
      </nav>

      {/* Main Content */}
      <div className="container">
        <section className="section">
          <h2>Trending</h2>
          <div className="grid">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            
          </div>
          
        </section>

        <section className="section">
          <h2>Smartphones</h2>
          <div className="grid">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;

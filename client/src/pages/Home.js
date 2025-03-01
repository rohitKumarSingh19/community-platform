import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to the Community Collaboration Platform</h1>
        <p>Join us to share ideas, collaborate, and grow together!</p>
        <a href="/register" className="btn-primary">
          Get Started
        </a>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h3>💡 Share Ideas</h3>
          <p>Post and discuss your innovative thoughts with the community.</p>
        </div>
        <div className="feature">
          <h3>🤝 Collaborate</h3>
          <p>Connect with people and work on projects together.</p>
        </div>
        <div className="feature">
          <h3>🎓 Learn & Grow</h3>
          <p>Enhance your skills by engaging in productive discussions.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Community Collaboration Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

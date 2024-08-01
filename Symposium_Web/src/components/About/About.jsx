import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-page-layout">
        <header className="about-header">
          <h1>About Vidyutrenz 2024</h1>
          <p>Explore the cutting-edge world of innovation and technology.</p>
        </header>
        <section className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              We are committed to pushing the boundaries of technology and
              design to deliver groundbreaking solutions.
            </p>
          </div>
          <div className="about-section">
            <h2>Our Vision</h2>
            <p>
              To revolutionize industries with advanced tech and bring the
              future to today’s world.
            </p>
          </div>
          <div className="about-section">
            <h2>Our Values</h2>
            <p>Innovation, Integrity, and Excellence drive everything we do.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

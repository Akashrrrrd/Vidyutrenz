import React, {useState, useEffect} from "react";
import "./About.css";

const About = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 100; i++) {
      const style = {
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 5}s`,
      };
      particleArray.push(<div className="particle" style={style} key={i}></div>);
    }
    setParticles(particleArray);
  }, []);
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

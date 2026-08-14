import { Link } from "react-router-dom";
import aboutImage from "../assets/images/service3.jpg";
import serviceImage from "../assets/images/service2.jpg";
import aboutHeroImage from "../assets/images/about-hero.jpg";
import "../components/About.css";
import "../components/Hero.css";

function About() {
  return (
    <>
      <section
        className="hero about-page-hero"
        style={{ backgroundImage: `url(${aboutHeroImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <p>ABOUT TRIPPY</p>
            <h1>Travel made unforgettable</h1>
            <h2>Discover the story behind every journey</h2>
          </div>
        </div>
      </section>

      <section className="about about-page-content section">
        <div className="about-image about-page-images">
          <img src={aboutImage} alt="Travel destination" />
          <img src={serviceImage} alt="Travel experience" />
        </div>

        <div className="about-content">
          <p className="small-title">ABOUT TRIPPY</p>

          <h2>We make your travel dreams come true</h2>

          <p>
            Trippy is a modern tour and travel website created to help
            travelers discover beautiful destinations around the world.
          </p>

          <p>
            We provide exciting travel packages, comfortable experiences
            and unforgettable adventures.
          </p>

          <Link to="/about" className="primary-btn">
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;

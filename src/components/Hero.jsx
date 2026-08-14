import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <p>TRAVEL WITH US</p>

          <h1>Adventure is out there</h1>

          <h2>Explore the world with Trippy</h2>

          <Link to="/packages" className="hero-btn">
            Explore Packages
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
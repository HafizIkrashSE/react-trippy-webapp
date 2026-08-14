import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h2>Trippy<span>.</span></h2>

          <p>
            Discover beautiful destinations and make unforgettable
            memories with us.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Developer</h3>

          <p>Created by</p>

          <strong>Hafiz Ikrash</strong>

          <a
            href="https://github.com/HafizIkrashUE"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="copyright">
        © 2026 Trippy. Created by Hafiz Ikrash.
      </div>
    </footer>
  );
}

export default Footer;
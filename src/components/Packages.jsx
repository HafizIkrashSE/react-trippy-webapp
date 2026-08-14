import { Link } from "react-router-dom";
import "./Packages.css";

import package1 from "../assets/images/package1.jpg";
import package2 from "../assets/images/package2.jpg";
import package3 from "../assets/images/package3.jpg";

const packages = [
  {
    image: package1,
    location: "Paris, France",
    title: "Beautiful Paris",
    price: "$899",
  },
  {
    image: package2,
    location: "Bali, Indonesia",
    title: "Amazing Bali",
    price: "$799",
  },
  {
    image: package3,
    location: "Dubai, UAE",
    title: "Dubai Adventure",
    price: "$699",
  },
];

function Packages() {
  return (
    <section className="packages section">
      <div className="section-heading">
        <p>POPULAR PACKAGES</p>
        <h2>Explore our amazing destinations</h2>
      </div>

      <div className="packages-grid">
        {packages.map((item) => (
          <div className="package-card" key={item.title}>
            <img src={item.image} alt={item.title} />

            <div className="package-info">
              <span>{item.location}</span>

              <h3>{item.title}</h3>

              <p>Starting from {item.price}</p>

              <Link to="/contact" className="primary-btn">
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;
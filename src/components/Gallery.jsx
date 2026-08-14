import "./Gallery.css";

import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery6 from "../assets/images/gallery6.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery3,
  gallery6,
];

function Gallery() {
  return (
    <section className="gallery section">
      <div className="section-heading">
        <p>TRAVEL GALLERY</p>
        <h2>Some beautiful moments</h2>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Travel ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

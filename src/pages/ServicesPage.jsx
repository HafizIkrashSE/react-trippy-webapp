import Services from "../components/Services";
import servicesImage from "../assets/images/about.jpg";

function ServicesPage() {
  return (
    <>
      <div
        className="page-header details-page-header"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ), url(${servicesImage})`,
        }}
      >
        <h1>Our Services</h1>
        <p>Everything you need for your journey</p>
      </div>

      <Services />
    </>
  );
}

export default ServicesPage;

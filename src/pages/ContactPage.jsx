import Contact from "../components/Contact";
import contactImage from "../assets/images/gallery1.jpg";

function ContactPage() {
  return (
    <>
      <div
        className="page-header details-page-header"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ), url(${contactImage})`,
        }}
      >
        <h1>Contact Us</h1>
        <p>We would love to hear from you</p>
      </div>

      <Contact />
    </>
  );
}

export default ContactPage;

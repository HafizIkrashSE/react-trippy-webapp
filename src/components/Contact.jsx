import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
  };

  return (
    <section className="contact section">
      <div className="section-heading">
        <p>CONTACT US</p>
        <h2>Let's plan your next adventure</h2>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />

        <input type="email" placeholder="Your Email" required />

        <input type="text" placeholder="Destination" required />

        <textarea
          placeholder="Your Message"
          rows="6"
          required
        ></textarea>

        <button type="submit" className="primary-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
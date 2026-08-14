import "./Services.css";

const services = [
  {
    icon: "✈️",
    title: "Flight Booking",
    text: "Find comfortable flights for your next adventure.",
  },
  {
    icon: "🏨",
    title: "Hotel Booking",
    text: "Choose comfortable hotels at great destinations.",
  },
  {
    icon: "🌍",
    title: "Travel Guide",
    text: "Explore beautiful places with our travel guidance.",
  },
];

function Services() {
  return (
    <section className="services section">
      <div className="section-heading">
        <p>OUR SERVICES</p>
        <h2>We provide the best travel services</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
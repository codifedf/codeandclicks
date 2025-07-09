import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/NewServices.css"
import {
  FaCode,
  FaMobileAlt,
  FaChartLine,
  FaPaintBrush,
  FaDigitalOcean,
  FaSearch,
  FaCloud,
  FaLock,
  FaLaptop,
  FaHeadset,
  FaRocket,
  FaBug,
  FaRegLightbulb,
} from "react-icons/fa";

const servicesData = [
  {
    title: "Web Development",
    icon: <FaCode />,
    description: "Custom websites and web apps using React, Node.js, and modern stacks.",
    details: "We develop scalable, SEO-friendly, and lightning-fast web platforms with admin panels, user systems, and third-party integrations.",
    border: "left",
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt />,
    description: "Cross-platform mobile applications for Android and iOS.",
    details: "Using Flutter and React Native, we deliver mobile apps with native performance and modern UI/UX.",
    border: "top",
  },
  {
    title: "Analytics & Insights",
    icon: <FaChartLine />,
    description: "Data dashboards, business insights, and visualization.",
    details: "We create dashboards with real-time analytics, charts, and actionable insights using tools like Power BI, Tableau, and custom APIs.",
    border: "right",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: "Creative, interactive user interfaces.",
    details: "Design wireframes, high-fidelity prototypes, and deliver pixel-perfect UI kits using Figma and Adobe XD.",
    border: "bottom",
  },
  {
    title: "Digital Marketing",
    icon: <FaDigitalOcean />,
    description: "Social media, PPC, affiliate, email marketing.",
    details: "We manage your digital campaigns with data-driven strategies, automation, and ROI optimization.",
    border: "right-bottom",
  },
  {
    title: "SEO Optimization",
    icon: <FaSearch />,
    description: "Boost Google rankings with white-hat SEO.",
    details: "From technical SEO to content and backlinks, we ensure long-term organic traffic and visibility.",
    border: "triple",
  },
  // ... You can add more services with 'details'
];



const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <Helmet>
        <title>Services | CodeClicks</title>
        <meta name="description" content="Explore the wide range of digital services offered by CodeClicks, including web development, mobile apps, UI/UX design, and more." />
        <meta name="keywords" content="CodeClicks services, web development, mobile app, UI/UX design, digital marketing, analytics" />
      </Helmet>
      <div className="services-container">
      <section className="services-section">
        <header className="neon-heading">
          <h1>Our <span>Services</span></h1>
          <p className="tagline">Empowering your business with next-gen solutions.</p>
        </header>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className={`service-card border-${service.border}`}>
              <div className="icon-pulse neon-icon">{service.icon}</div>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-desc">{service.description}</p>
              <button className="btn-glow" onClick={() => handleLearnMore(service)}>Learn More</button>
            </div>
          ))}
        </div>

        {/* Modal for More Details */}
        {selectedService && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedService.title}</h2>
              <p>{selectedService.details}</p>
              <button className="btn-glow close-btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Let’s Build Something Great Together</h2>
        <div className="cta-buttons">
          <button className="btn-glow">Book a Free Consultation</button>
          <button className="btn-glow">Schedule a Meeting</button>
        </div>
      </section>

      {/* Company Journey Section */}
      <section className="journey-section">
        <h2>Our Journey</h2>
        <p>Founded in 2018, we've completed 300+ projects across 10+ countries with a 98% client satisfaction rate.</p>
        <ul>
          <li>2019 - Launched our first SaaS app</li>
          <li>2020 - Crossed 100 client milestone</li>
          <li>2022 - Global expansion to Europe and USA</li>
        </ul>
      </section>

      {/* Extra Value Section */}
      <section className="value-section">
        <h2>More Value for You</h2>
        <ul>
          <li>Free downloadable guides and templates</li>
          <li>Exclusive member discounts</li>
          <li>Monthly expert webinars</li>
        </ul>
        <a href="/blog" className="btn-glow">Explore Our Resources</a>
      </section>
    </div>
    </>
  );
};

export default Services;

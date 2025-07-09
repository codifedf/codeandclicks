import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaChartLine,
  FaBullseye,
  FaRocket,
  FaTarget,
  FaLightbulb,
  FaClock,
  FaComment,
  FaShieldAlt
} from 'react-icons/fa';

// Stats Data
const stats = [
  { title: "100+", subtitle: "Projects Completed" },
  { title: "50+", subtitle: "Happy Clients" },
  { title: "95%", subtitle: "Client Satisfaction" }
];

// Services Data
const services = [
  { 
    icon: <FaCode className="service-icon" />,
    title: "Website Design",
    description: "Modern, responsive, and custom websites tailored to your business needs."
  },
  { 
    icon: <FaMobileAlt className="service-icon" />,
    title: "App Development",
    description: "Powerful mobile apps for Android and iOS to engage your customers."
  },
  { 
    icon: <FaPaintBrush className="service-icon" />,
    title: "UI Design",
    description: "Beautiful and intuitive interfaces that enhance user experience and drive conversions."
  },
  { 
    icon: <FaChartLine className="service-icon" />,
    title: "Analytics & Insights",
    description: "Data-driven insights and analytics to optimize your digital strategy and performance."
  },
  { 
    icon: <FaRocket className="service-icon" />,
    title: "Growth Strategy",
    description: "Custom strategies to accelerate your business growth and market reach."
  },
  { 
    icon: <FaBullseye className="service-icon" />,
    title: "Digital Marketing",
    description: "Result-driven campaigns to boost your online presence and reach."
  }
];



// Features Data
const features = [
  { 
    icon: <FaBullseye className="feature-icon" />,
    title: "Expert Team",
    description: "Skilled professionals with years of experience in digital solutions."
  },
  { 
    icon: <FaLightbulb className="feature-icon" />,
    title: "Custom Solutions",
    description: "Tailored services for every client's unique needs and requirements."
  },
  { 
    icon: <FaClock className="feature-icon" />,
    title: "On-Time Delivery",
    description: "We respect your time and deadlines with efficient project management."
  },
  { 
    icon: <FaComment className="feature-icon" />,
    title: "Clear Communication",
    description: "Transparent updates and honest advice throughout the project."
  },
  { 
    icon: <FaShieldAlt className="feature-icon" />,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control to ensure excellence."
  },
  { 
    icon: <FaChartLine className="feature-icon" />,
    title: "Performance Optimization",
    description: "Optimized code and fast loading times for better user experience."
  }
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>CodeandClicks | Digital Growth Partner</title>
        <meta name="description" content="CodeandClicks - Your Partner in Digital Growth" />
        <meta name="keywords" content="CodeandClicks, web development, website design, app development, UIUX design, analytics, digital marketing, growth strategy" />
      </Helmet>
      <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="logo-container">
                <h1 className="logo-text">Code <span className="logo-clicks">Clicks</span></h1>
                <div className="logo-glow"></div>
              </div>
              <h2 className="neon-text">Your Partner in Digital Growth</h2>
              <p className="hero-description">
                At CodeandClicks, we help businesses turn ideas into reality. Whether you need a stunning website, a user-friendly app, or a powerful digital marketing strategy — we do it all!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button neon-text"
              >
                Get Started Now
              </motion.button>
            </motion.div>

            <div className="hero-image">
              <img
                src="/images/pexels-fauxels-3184357 (1).jpg"
                alt="Digital Growth"
                className="hero-img"
              />
              <div className="hero-overlay">
                <div className="hero-stats">
                  {stats.map((stat, index) => (
                    <div className="stat-item" key={index}>
                      <h3>{stat.title}</h3>
                      <p>{stat.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <section className="services-section">
            <header className="neon-heading">
              <h1>Our <span>Services</span></h1>
              <p className="tagline">Empowering your business with next-gen solutions.</p>
            </header>
            <div className="services-grid">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card border-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="icon-pulse neon-icon">{service.icon}</div>
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-desc">{service.description}</p>
                  <button className="btn-glow">Learn More</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <section className="services-section">
            <header className="neon-heading">
              <h1>Why <span>Choose Us</span></h1>
              <p className="tagline">Experience excellence with our professional services.</p>
            </header>
            <div className="services-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="service-card border-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="icon-pulse neon-icon">{feature.icon}</div>
                  <h2 className="service-title">{feature.title}</h2>
                  <p className="service-desc">{feature.description}</p>
                  <button className="btn-glow">Learn More</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="neon-text">Ready to Grow Your Business?</h2>
            <p>Let's build something amazing together!</p>
            <motion.button
              className="cta-button neon-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Now
            </motion.button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;

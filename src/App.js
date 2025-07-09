import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './App.css';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/NewServices';


function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-content">
            <Link to="/" className="nav-link neon-text">CodeandClicks</Link>
            
            {/* Center - Page Links */}
            <div className="nav-links center-links">
              <Link to="/" className="nav-link">🏠 Home</Link>
              <Link to="/about" className="nav-link">👨‍💻 About</Link>
              <Link to="/services" className="nav-link">🔧 Services</Link>
              <Link to="/contact" className="nav-link">📞 Contact</Link>
            </div>

            {/* Left Side - Social Links */}
            <div className="nav-links left-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
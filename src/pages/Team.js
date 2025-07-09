import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <div className="team-section">
      <div className="container">
        <h2 className="section-title neon-text">Meet Our Team</h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="team-grid"
        >
          <div className="team-member">
            <div className="team-img-container">
              <img 
                src="/images/ai-generative-happy-business-man-in-a-suit-white-transparent-background-free-photo.jpg"
                alt="Rohit Prajapati" 
                className="team-img"
              />
              <div className="team-overlay">
                <div className="team-social">
                  <a href="#" className="social-icon">🔗</a>
                  <a href="#" className="social-icon">💼</a>
                  <a href="#" className="social-icon">📧</a>
                </div>
              </div>
            </div>
            <h4>Rohit Prajapati</h4>
            <p>CEO & Founder</p>
            <p className="team-bio">
              With over 15 years of experience, Rohit leads our team with vision and passion.
            </p>
          </div>

          <div className="team-member">
            <div className="team-img-container">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="Aayush Goswami" 
                className="team-img"
              />
              <div className="team-overlay">
                <div className="team-social">
                  <a href="#" className="social-icon">🔗</a>
                  <a href="#" className="social-icon">💼</a>
                  <a href="#" className="social-icon">📧</a>
                </div>
              </div>
            </div>
            <h4>Aayush Goswami</h4>
            <p>Managing Director</p>
            <p className="team-bio">
              Aayush brings creativity and innovation to every project.
            </p>
          </div>

          <div className="team-member">
            <div className="team-img-container">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="Dhruv Patel" 
                className="team-img"
              />
              <div className="team-overlay">
                <div className="team-social">
                  <a href="#" className="social-icon">🔗</a>
                  <a href="#" className="social-icon">💼</a>
                  <a href="#" className="social-icon">📧</a>
                </div>
              </div>
            </div>
            <h4>Dhruv Patel</h4>
            <p>Project Manager</p>
            <p className="team-bio">
              Dhruv is our technical genius, solving complex problems with elegant solutions.
            </p>
          </div>

          <div className="team-member">
            <div className="team-img-container">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="Samir Pathan" 
                className="team-img"
              />
              <div className="team-overlay">
                <div className="team-social">
                  <a href="#" className="social-icon">🔗</a>
                  <a href="#" className="social-icon">💼</a>
                  <a href="#" className="social-icon">📧</a>
                </div>
              </div>
            </div>
            <h4>Samir Pathan</h4>
            <p>Project Leader</p>
            <p className="team-bio">
              Samir leads our project teams with expertise and dedication.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;

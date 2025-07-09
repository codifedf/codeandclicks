import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const About = () => {
  const teamContainerRef = useRef(null);

  const scrollTeam = (index) => {
    const container = teamContainerRef.current;
    if (container) {
      const scrollAmount = 800; // Width of two team members
      container.scrollLeft = index * scrollAmount;
    }
  };
  return (
    <>
      <Helmet>
        <title>About Us | CodeClicks</title>
        <meta name="description" content="Learn about CodeClicks, our mission, vision, and the expert team driving digital growth for businesses worldwide." />
        <meta name="keywords" content="About CodeClicks, digital agency, expert team, mission, vision" />
        <meta name="robots" content="index, follow" />
        <meta name="og:title" content="About Us | CodeClicks" />
        <meta name="og:description" content="Learn about CodeClicks, our mission, vision, and the expert team driving digital growth for businesses worldwide." />
        <meta name="og:image" content="https://example.com/image.jpg" />
        <meta name="twitter:title" content="About Us | CodeClicks" />
        <meta name="twitter:description" content="Learn about CodeClicks, our mission, vision, and the expert team driving digital growth for businesses worldwide." />
        <meta name="twitter:image" content="https://example.com/image.jpg" />
      </Helmet>
      <div className="about">
      <section className="about-section">
        <div className="container">
          <h2 className="section-title neon-text">About Us</h2>
          
          <div className="about-content">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="about-text"
            >
              <h3>Our Journey</h3>
              <p>
                Founded in 2020, CodeandClicks has been on a mission to revolutionize the digital landscape. Our team of experts brings years of experience and a passion for creating innovative solutions that drive business growth.
              </p>
              <p>
                We believe in building lasting relationships with our clients and delivering exceptional results through cutting-edge technology and creative design.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="about-image"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Team Working" 
                className="about-img"
              />
              <div className="image-overlay">
                <div className="image-stats">
                  <div className="stat-item">
                    <h3>5+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className="stat-item">
                    <h3>100+</h3>
                    <p>Projects Completed</p>
                  </div>
                  <div className="stat-item">
                    <h3>50+</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="core-values"
          >
            <h3>Our Values</h3>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h4>Customer Focus</h4>
                <p>We prioritize our clients' needs above all else. Our dedicated team works tirelessly to understand your unique requirements and deliver solutions that exceed your expectations. We believe in building long-term relationships based on trust and mutual success.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">💡</div>
                <h4>Innovation</h4>
                <p>Innovation is at the heart of everything we do. We constantly explore the latest technologies and methodologies to provide cutting-edge solutions that give our clients a competitive edge. Our team of experts stays ahead of industry trends to ensure our solutions remain relevant and effective.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h4>Collaboration</h4>
                <p>We believe in the power of teamwork and open communication. Our collaborative approach ensures that all stakeholders are involved in the decision-making process, leading to better solutions and stronger outcomes. We foster an environment where ideas flow freely and everyone's voice is heard.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">🚀</div>
                <h4>Results</h4>
                <p>We are committed to delivering measurable results that drive business growth. Our solutions are designed to solve real problems and create tangible benefits for our clients. We track key performance indicators and maintain transparency throughout the project lifecycle.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">🌟</div>
                <h4>Excellence</h4>
                <p>We strive for excellence in everything we do. Our team is dedicated to maintaining the highest standards of quality and professionalism. We continuously improve our processes and skills to ensure we deliver the best possible results to our clients.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">🌱</div>
                <h4>Sustainability</h4>
                <p>We are committed to sustainable practices in our work and operations. We develop solutions that are not only effective but also environmentally conscious. We believe in creating a positive impact that extends beyond our immediate business goals.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="team-section"
          >
            <h2 className="section-title neon-text">Meet Our Team</h2>
            
            <div className="team-container" ref={teamContainerRef}>
              <div className="team-grid" ref={teamContainerRef}>
                <div className="team-pair">
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
                    <button className="team-view-more">View More</button>
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
                    <button className="team-view-more">View More</button>
                  </div>
                </div>
                

                <div className="team-pair">
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
                    <button className="team-view-more">View More</button>
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
                    <button className="team-view-more">View More</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="testimonials"
          >
            <h3>Client Testimonials</h3>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    "Working with CodeandClicks was a game-changer for our business. Their team is professional, creative, and delivers results."
                  </p>
                  <div className="testimonial-author">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" 
                      alt="Client" 
                      className="testimonial-img"
                    />
                    <div>
                      <h4>Emma Wilson</h4>
                      <p>CEO, TechCorp</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    "The team at CodeandClicks is incredibly talented and dedicated. They helped us build a website that truly stands out in our industry."
                  </p>
                  <div className="testimonial-author">
                    <img 
                      src="/images/ai-generative-happy-business-man-in-a-suit-white-transparent-background-free-photo.jpg"
                      alt="Client" 
                      className="testimonial-img"
                    />
                    <div>
                      <h4>David Brown</h4>
                      <p>Founder, StartupX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;

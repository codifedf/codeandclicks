import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | CodeandClicks</title>
        <meta name="description" content="Get in touch with CodeandClicks for web development, app development, UI/UX design, and digital marketing services." />
        <meta name="keywords" content="Contact CodeandClicks, get in touch, web development contact, digital agency phone, email codeandclicks" />
      </Helmet>
    <div className="contact-container">
      <h1 className="contact-title">CONTACT</h1>
      <p className="contact-subtitle">
        We’d love to hear about your project, challenge, or opportunity.
      </p>

      <div className="contact-box">
        <div className="form-section">
          <input type="text" placeholder="FULL NAME" />
          <div className="form-row">
            <input type="email" placeholder="EMAIL" />
            <input type="text" placeholder="BUDGET" />
          </div>
          <textarea placeholder="MESSAGE"></textarea>
          <div className="service-select">
            <select name="services" id="services">
              <option value="">Select Service</option>
              <option value="website">Website</option>
              <option value="application">Application</option>
              <option value="webdevelopment">Web Development</option>
              <option value="graphicdesign">Graphic Design</option>
              <option value="software">Software</option>
              <option value="games">Games</option>
            </select>
          </div>
          <button 
            className="send-button"
            onClick={(e) => {
              e.preventDefault();
              
              try {
                const formData = {
                  name: document.querySelector('input[placeholder="FULL NAME"]').value,
                  email: document.querySelector('input[placeholder="EMAIL"]').value,
                  budget: document.querySelector('input[placeholder="BUDGET"]').value,
                  message: document.querySelector('textarea').value,
                  service: document.querySelector('#services').value
                };

                if (!formData.name || !formData.email || !formData.message) {
                  alert('Please fill in all required fields!');
                  return;
                }

                // Format message
                const message = `New Contact Form Submission:\n\n` +
                              `Name: ${formData.name}\n` +
                              `Email: ${formData.email}\n` +
                              `Budget: ${formData.budget}\n` +
                              `Service: ${formData.service}\n` +
                              `Message: ${formData.message}`;

                console.log('Sending message:', message);

                // Open WhatsApp with pre-filled text
                const encodedMsg = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/917383131985?text=${encodedMsg}`;
                window.open(whatsappUrl, '_blank');
                // Optional: reset form after opening WhatsApp
                document.querySelector('input[placeholder="FULL NAME"]').value = '';
                document.querySelector('input[placeholder="EMAIL"]').value = '';
                document.querySelector('input[placeholder="BUDGET"]').value = '';
                document.querySelector('textarea').value = '';
                    document.querySelector('#services').selectedIndex = 0;

              } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
              }
            }}
          >
            Send Message
          </button>
        </div>

              
        
        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h3 className="faq-question">What services does your agency provide?</h3>
              <p className="faq-answer">We offer a range of services including digital marketing, website development, social media management, branding, and more.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How can I get a quote for my project?</h3>
              <p className="faq-answer">You can fill out the contact form or call us directly. We will provide a customized quote based on your requirements.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do you offer support after the project is completed?</h3>
              <p className="faq-answer">Yes, we offer full support and maintenance even after the project is delivered.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How long does it take to complete a project?</h3>
              <p className="faq-answer">Project timelines vary based on scope and requirements. On average, small projects take 1-2 weeks, while larger ones can take 3-6 weeks.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can you help me grow my business online?</h3>
              <p className="faq-answer">Absolutely! Our team specializes in SEO, social media ads, and online branding to grow your presence and increase leads.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do you work with clients from other cities or countries?</h3>
              <p className="faq-answer">Yes, we work with clients across India and internationally through online meetings and collaboration tools.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Is there a contract or agreement?</h3>
              <p className="faq-answer">Yes, before starting any project, we provide a clear agreement detailing services, deadlines, and costs.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What makes your agency different from others?</h3>
              <p className="faq-answer">We focus on personalized service, fast communication, creative strategies, and real results.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do you provide custom website designs?</h3>
              <p className="faq-answer">Yes, every website we create is custom-designed according to the client's brand and goals.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How do I get started with your agency?</h3>
              <p className="faq-answer">Just click on the "Get Started" button or fill out our inquiry form. We'll get in touch shortly!</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">AHEMDABAD  VADODRA  HALOL</h3>
              <p className="faq-answer">+91 7383131985  +91 9974362951 +91 9099492577 +91  9737230166</p>
            </div>
          </div>
        </div>
        
        

        {/* Logo Section */}
        <div className="logo-box">
          <div className="logo-container">
            <img src="/images/Untitled design (1)_20250602_114945_0000.png" alt="COS Logo" className="logo-image" />
            <p className="thanks-text">Thanks for Visit COS</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;

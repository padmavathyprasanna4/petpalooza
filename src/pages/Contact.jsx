import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './contact.css';

const Contact = () => {
  const navigate = useNavigate();  // Create navigate function

  const handleSignInClick = () => {
    navigate('/login');  // Navigate to the login page when Sign In is clicked
  };

  return (
    <div className="contact-container">
      {/* Contact Us Section */}
      <div className="contact-us-box">
        <h1 className="contact-us-heading">Contact Us</h1>
        <div className="contact-us-content">
          <i className="bi bi-person-circle person-icon"></i>
          <span className="contact-us-text">Getting help is easy. Sign in to get help with recent orders.</span>
          <button className="sign-in-btn" onClick={handleSignInClick}>Sign in</button> {/* Attach click handler */}
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="quick-links">
        <h2>Quick Links</h2>
        <div className="quick-links-boxes">
          <div className="box">
            <i className="bi bi-truck link-icon"></i>
            <div className="box-content">
              <h3>Track order</h3>
              <p>View the status of your order</p>
            </div>
            <i className="bi bi-arrow-right arrow-icon"></i>
          </div>
          <div className="box">
            <i className="bi bi-arrow-repeat link-icon"></i>
            <div className="box-content">
              <h3>Return order</h3>
              <p>Return and view the items in your order</p>
            </div>
            <i className="bi bi-arrow-right arrow-icon"></i>
          </div>
          <div className="box">
            <i className="bi bi-chat-dots link-icon"></i>
            <div className="box-content">
              <h3>Chat with vet</h3>
              <p>View the status of your order</p>
            </div>
            <i className="bi bi-arrow-right arrow-icon"></i>
          </div>
        </div>
      </div>

      {/* Browse Topics Section */}
      <div className="browse-topics">
        <h2>Browse Topics</h2>
        <div className="browse-boxes">
          <div className="box">
            Order related
            <i className="bi bi-arrow-right arrow-icon"></i>
          </div>
          <div className="box">
            Return & cancellations related
            <i className="bi bi-arrow-right arrow-icon"></i>
          </div>
          <div className="box">
            Payments & refund related
            <i className="bi bi-arrow-right arrow-icon"></i>
          </div>
          <div className="box">
            General enquiry
            <i className="bi bi-arrow-right arrow-icon"></i>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="get-in-touch">
        <h2>Get in touch</h2>
        <p>If you have any inquiries, feel free to contact us</p>
        <div className="contact-info">
          <p><strong>Call to: </strong>1234567890</p>
          <p><strong>Email: </strong>support@petpalooza.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
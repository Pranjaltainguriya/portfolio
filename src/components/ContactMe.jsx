import React from 'react';
import './contectme.css';
import img from "../../public/matrial/Images/hero/imag.png"

const ContactMe = () => {
  return (
    <footer className="contact-footer" id='contant'>
        <h2>Contact Me</h2>
      <div className="contact-container">
        {/* Profile Image */}
        <div className="profile-section">
          <a href="https://your-profile-link.com" target="_blank" rel="noopener noreferrer">
            <img src={img} alt="Profile" className="profile-img" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          
          <p><strong>Phone:</strong> +123-456-7890</p>
          <p><strong>Email:</strong> <a href="mailto:Dhruvmudgal54@gmail.com">Dhruvmudgal54@gmail.com</a></p>
        </div>

        {/* Social Links Grid */}
        <div className="social-grid">
          <div className="social-item">
            <a
              href="https://www.instagram.com/pandit_dhruv_mudgal?utm_source=qr&igsh=MXZuY2JoY25jYXBjYw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNPYBLb6Z4PIJSlr6qXbUy8VZ0w2w4BPPVQ&s"
                alt="Instagram"
              />
              <span>Instagram</span>
            </a>
          </div>

          <div className="social-item">
            <a href="mailto:Dhruvmudgal54@gmail.com">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                alt="Gmail"
              />
              <span>Gmail</span>
            </a>
          </div>

          <div className="social-item">
            <a
              href="https://www.linkedin.com/in/dhruv-mudgal-83676b256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="https://www.svgrepo.com/show/157006/linkedin.svg"
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLbsOZKIL9Th6OU7sDVhBOQdPmCsjiFVNGw&s" alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="social-item">
            <a
              href="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              target="_blank"
              rel="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
            >
              <img src="data:image/png;base64,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" alt="GitHub" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactMe;

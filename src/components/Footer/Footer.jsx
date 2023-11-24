import React from 'react';
import './Footer.scss';
import logoFooter from '../../assets/images/logo-footer.png';

// Footer functional component
function Footer() {
  // Returning the JSX for the footer
  return (
    <footer className="footer-container">
      <img src={logoFooter} alt="Kasa logo" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

// Exporting the Footer component for use in other parts of the application
export default Footer;
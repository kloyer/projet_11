import React from 'react';
import './Footer.scss';
import logoFooter from '../../assets/images/logo-footer.png'; // Assurez-vous que le chemin est correct

function Footer() {
  return (
    <footer className="footer-container">
      <img src={logoFooter} alt="Kasa logo" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
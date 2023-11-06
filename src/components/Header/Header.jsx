import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/logo-header.png'; // Assurez-vous que le chemin est correct

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="header-container">
      <a href="/"><img src={logo} alt="Kasa logo" className="header-logo" /></a>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/" className={currentPath === '/' ? 'active' : ''}>Accueil</a>
          </li>
          <li>
            <a href="/about" className={currentPath === '/about' ? 'active' : ''}>À Propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

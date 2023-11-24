import React from 'react';
import './Header.scss';

// Importing useLocation hook from react-router-dom for accessing the current route's location
import { useLocation } from 'react-router-dom';

// Importing the logo image
import logo from '../../assets/images/logo-header.png'; // Ensure the path is correct

// Header functional component
function Header() {
  // Getting the current location object
  const location = useLocation();

  // Extracting the pathname from the location object to determine the current route
  const currentPath = location.pathname;

  // Returning the JSX for the header
  return (
    <header className="header-container">
      <a href="/"><img src={logo} alt="Kasa logo" className="header-logo" /></a>

      {/* Navigation menu */}
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

// Exporting the Header component for use in other parts of the application
export default Header;
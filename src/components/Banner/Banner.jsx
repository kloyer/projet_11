import React from 'react';
import './Banner.scss';

// Banner functional component with props 'imagePath', 'text', and 'children'
function Banner({ imagePath, text, children }) {
  // Creating a style object for the banner background image
  const backgroundStyle = {
    backgroundImage: `url(${imagePath})`
  };

  // Returning the JSX for the banner
  return (
    // Banner container with dynamic background image
    <div className="banner-container" style={backgroundStyle}>
      {/* Conditional rendering of the text, if provided */}
      {text && <h1 className="banner-text">{text}</h1>}

      {/* Rendering any children components passed to this component */}
      {children}
    </div>
  );
}

// Exporting the Banner component for use in other parts of the application
export default Banner;
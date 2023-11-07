import React from 'react';
import './Banner.scss';

function Banner({ imagePath, text, children }) {
  const backgroundStyle = {
    backgroundImage: `url(${imagePath})`
  };

  return (
    <div className="banner-container" style={backgroundStyle}>
      {text && <h1 className="banner-text">{text}</h1>}
      {children}
    </div>
  );
}

export default Banner;

/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import leftArrow from '../../assets/images/arrow-left.png';
import rightArrow from '../../assets/images/arrow-right.png';
import './Carousel.scss';

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-carousel-container">
      {images.length > 1 && (
        <>
          <button className="carousel-arrow left" onClick={prevImage}>
            <img src={leftArrow} alt="Previous" />
          </button>
          
          <button className="carousel-arrow right" onClick={nextImage}>
            <img src={rightArrow} alt="Next" />
          </button>

          <div className="image-counter">
            {currentImageIndex + 1}/{images.length}
          </div>
        </>
      )}

      <img
        src={images[currentImageIndex]}
        alt="Logement image"
        className="carousel-image"
      />
    </div>
  );
}

export default Carousel;
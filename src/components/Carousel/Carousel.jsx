/* eslint-disable jsx-a11y/img-redundant-alt */
// Disabling a specific ESLint rule about redundant alternative text for images
import React, { useState } from 'react';
import leftArrow from '../../assets/images/arrow-left.png';
import rightArrow from '../../assets/images/arrow-right.png';
import './Carousel.scss';

// Carousel functional component with 'images' prop
function Carousel({ images }) {
  // State to track the index of the current image being displayed
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to set the next image in the carousel
  const nextImage = () => {
    // Incrementing the index and wrapping around if it exceeds the images array length
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to set the previous image in the carousel
  const prevImage = () => {
    // Decrementing the index or setting it to the last image if the current index is 0
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Returning the JSX for the carousel
  return (
    <div className="image-carousel-container">
      {/* Rendering navigation arrows and image counter only if there are multiple images */}
      {images.length > 1 && (
        <>
          {/* Button to navigate to the previous image */}
          <button className="carousel-arrow left" onClick={prevImage}>
            <img src={leftArrow} alt="Previous" />
          </button>
          
          {/* Button to navigate to the next image */}
          <button className="carousel-arrow right" onClick={nextImage}>
            <img src={rightArrow} alt="Next" />
          </button>

          {/* Image counter displaying the current image number out of the total number */}
          <div className="image-counter">
            {currentImageIndex + 1}/{images.length}
          </div>
        </>
      )}

      {/* Displaying the current image */}
      <img
        src={images[currentImageIndex]}
        alt="Logement image"
        className="carousel-image"
      />
    </div>
  );
}

// Exporting the Carousel component for use in other parts of the application
export default Carousel;

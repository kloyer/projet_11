import React from 'react';
import './Rating.scss';

// Rating functional component
function Rating({ rating }) {
    // Creating an array of 5 elements to represent stars
    const ratingStars = Array.from({ length: 5 }, (_, index) => {
      // Filling the star ('★') if the index is less than the rating value, otherwise empty star ('☆')
      return index < rating ? '★' : '☆';
    });
  
    // Returning the JSX for the star rating
    return (
      <div className="star-rating">
        {/* Mapping over the ratingStars array to render each star */}
        {ratingStars.map((star, index) => (
          // Using a span to display each star. Applying a class based on whether the star is filled or empty
          <span key={index} className={star === '★' ? 'filled-star' : 'empty-star'}>
            {star}
          </span>
        ))}
      </div>
    );
}

// Exporting the Rating component for use in other parts of the application
export default Rating;

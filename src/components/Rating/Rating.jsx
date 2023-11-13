import React from 'react';
import './Rating.scss';

function Rating({ rating }) {
    const ratingStars = Array.from({ length: 5 }, (_, index) => {
      return index < rating ? '★' : '☆';
    });
  
    return (
      <div className="star-rating">
        {ratingStars.map((star, index) => (
          <span key={index} className={star === '★' ? 'filled-star' : 'empty-star'}>
            {star}
          </span>
        ))}
      </div>
    );
  }

export default Rating;
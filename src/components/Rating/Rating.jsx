import React from 'react';
import './Rating.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

// Rating functional component
function Rating({ rating }) {
    // Creating an array of 5 elements to represent stars
    const ratingStars = Array.from({ length: 5 }, (_, index) => {
        // Using solid star for filled, regular star for empty
        return index < rating ? solidStar : regularStar;
    });

    // Returning the JSX for the star rating
    return (
        <div className="star-rating">
            {/* Mapping over the ratingStars array to render each star */}
            {ratingStars.map((star, index) => (
                // Using FontAwesomeIcon to display each star
                <FontAwesomeIcon key={index} icon={star} className={star === solidStar ? 'filled-star' : 'empty-star'} />
            ))}
        </div>
    );
}

// Exporting the Rating component for use in other parts of the application
export default Rating;
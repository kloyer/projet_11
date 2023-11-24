import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

// Card functional component with 'logement' prop
function Card({ logement }) {
  return (
    // Wrapping the card in a Link component to make it clickable and navigate to the detail page of the logement
    <Link to={`/logement/${logement.id}`} className="card-link">
      {/* Card container */}
      <div className="card">
        {/* Image of the logement with alt text for accessibility */}
        <img src={logement.cover} alt={logement.title} className="card-image" />

        {/* Title of the logement */}
        <div className="card-title">{logement.title}</div>
      </div>
    </Link>
  );
}

// Exporting the Card component for use in other parts of the application
export default Card;
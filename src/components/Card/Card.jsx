import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card-link">
      <div className="card">
        <img src={logement.cover} alt={logement.title} className="card-image" />
        <div className="card-title">{logement.title}</div>
      </div>
    </Link>
  );
}

export default Card;
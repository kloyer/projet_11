import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import logements from '../../datas/logements.json';
import Carousel from '../../components/Carousel/Carousel';
import './Logement.scss';

function StarRating({ rating }) {
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

function Logement() {
  const [logement, setLogement] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundLogement = logements.find(item => item.id === id);
    setLogement(foundLogement);
  }, [id]);

  if (!logement) {
    return <div>Loading...</div>;
  }

  return (
    <div className="logement-container">
      <div className="logement-images">
        <Carousel images={logement.pictures} />
      </div>
      <div className="logement-details">
        <h2>{logement.title}</h2>
        <h3>{logement.location}</h3>
        <div className="logement-tags">
          {logement.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="logement-host">
        <img src={logement.host.picture} alt={`Hosted by ${logement.host.name}`} />
        <p>{logement.host.name}</p>
      </div>
      <div className="logement-rating">
        <StarRating rating={parseInt(logement.rating, 10)} />
      </div>
      <div className="logement-collapse-sections">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;

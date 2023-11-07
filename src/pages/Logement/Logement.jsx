import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import Carousel from '../../components/Carousel/Carousel';
import logements from '../../datas/logements.json';
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
  const navigate = useNavigate();

  useEffect(() => {
    const foundLogement = logements.find(item => item.id === id);
    if (foundLogement) {
      setLogement(foundLogement);
    } else {
      navigate('/*');
    }
  }, [id, navigate]);

  if (!logement) {
    return <div>Loading...</div>;
  }

  return (
    <div className="logement-container">
      <div className="logement-images">
        <Carousel images={logement.pictures} />
      </div>
      <div className="logement-details">
        <div className='section-left'>
          <p className='title'>{logement.title}</p>
          <p className='location'>{logement.location}</p>
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className='section-right'>
          <div className="logement-host">
            <img src={logement.host.picture} alt={`Hosted by ${logement.host.name}`} />
            <p>{logement.host.name}</p>
        </div>
        <div className="logement-rating">
            <StarRating rating={parseInt(logement.rating, 10)} />
          </div>
        </div>
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

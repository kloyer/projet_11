// Importing React, useState, and useEffect hooks
import React, { useState, useEffect } from 'react';

// Importing useParams and useNavigate hooks from react-router-dom
import { useParams, useNavigate } from 'react-router-dom';

// Importing the dataset for logements
import logements from '../../datas/logements.json';

import Collapse from '../../components/Collapse/Collapse';
import Carousel from '../../components/Carousel/Carousel';
import Rating from '../../components/Rating/Rating';
import './Logement.scss';

// Logement functional component
function Logement() {
  // State hook for managing the current logement's data
  const [logement, setLogement] = useState(null);

  // Extracting the 'id' param from the URL using useParams
  const { id } = useParams();

  // Hook to navigate to different routes
  const navigate = useNavigate();

  // Effect hook to load the logement data based on the URL parameter 'id'
  useEffect(() => {
    // Finding the logement with the matching 'id'
    const foundLogement = logements.find(item => item.id === id);

    // If the logement is found, update the state; otherwise, redirect
    if (foundLogement) {
      setLogement(foundLogement);
    } else {
      navigate('/*');
    }
  }, [id, navigate]); // Dependencies for the useEffect hook

  // Display loading text while logement data is being fetched
  if (!logement) {
    return <div>Loading...</div>;
  }

  // JSX to render once the logement data is available
  return (
    <div className="logement-container">
      {/* Carousel for logement images */}
      <div className="logement-images">
        <Carousel images={logement.pictures} />
      </div>

      {/* Logement details */}
      <div className="logement-details">
        {/* Section containing title, location, and tags */}
        <div className='section-left'>
          <p className='title'>{logement.title}</p>
          <p className='location'>{logement.location}</p>
          {/* Mapping through tags and displaying each as a span */}
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Section containing host information and rating */}
        <div className='section-right'>
          {/* Host information with image */}
          <div className="logement-host">
            <img src={logement.host.picture} alt={`Hosted by ${logement.host.name}`} />
            <p>{logement.host.name}</p>
          </div>
          {/* Rating component */}
          <div className="logement-rating">
            <Rating rating={parseInt(logement.rating, 10)} />
          </div>
        </div>
      </div>

      {/* Collapse components for description and equipments */}
      <div className="logement-collapse-sections">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {/* Mapping through equipments and displaying each as a list item */}
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

// Exporting the Logement component for use in other parts of the application
export default Logement;

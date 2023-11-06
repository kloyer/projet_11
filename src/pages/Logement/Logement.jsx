import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import logements from '../../datas/logements.json';
import './Logement.scss';

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
        {/* Ici, vous pouvez implémenter un carrousel pour les images */}
      </div>
      <div className="logement-details">
        <h2>{logement.title}</h2>
        <h3>{logement.location}</h3>
        {/* Ici, vous pouvez mapper et afficher les tags */}
      </div>
      <div className="logement-host">
        <img src={logement.host.picture} alt={`Hosted by ${logement.host.name}`} />
        <p>{logement.host.name}</p>
      </div>
      <div className="logement-rating">
        {/* Ici, vous pouvez afficher la note du logement en étoiles */}
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

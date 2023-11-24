import React from 'react';
import Collapse from '../../components/Collapse/Collapse';
import Banner from '../../components/Banner/Banner';
import './About.scss';

// Importing the banner image for the about page
import bannerHomeImage from '../../assets/images/banner-about.png';

// Static data for the about page content
const aboutInfo = [
  { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
  { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
  { title: "Service", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
  { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
];

// About functional component
function About() {
  return (
    <div className="about-page">
      {/* Banner component with image path */}
      <Banner imagePath={bannerHomeImage}/>
      <div className='about-collapse-container'>
        {/* Mapping through the aboutInfo array to create a Collapse component for each item */}
        {aboutInfo.map((item, index) => (
          <Collapse key={index} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </div>
    </div>
  );
}

// Exporting the About component
export default About;
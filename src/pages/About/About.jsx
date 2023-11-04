import React from 'react';
import Collapse from '../../components/Collapse/Collapse';
import './About.scss';

const aboutInfo = [
  { title: "Fiabilité", content: "Contenu pour Fiabilité" },
  { title: "Respect", content: "Contenu pour Respect" },
  { title: "Service", content: "Contenu pour Service" },
  { title: "Sécurité", content: "Contenu pour Sécurité" }
];

function About() {
  return (
    <div className="about-page">
      <div className="about-header" style={{ height: '223px' }} />
      {aboutInfo.map((item, index) => (
        <Collapse key={index} title={item.title}>
          <p>{item.content}</p>
        </Collapse>
      ))}
    </div>
  );
}

export default About;

import React from 'react';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import './Home.scss';

// Importing the dataset
import logements from '../../datas/logements.json';

// Importing the banner image
import bannerHomeImage from '../../assets/images/banner-home.png';

// Home functional component
export default function Home() {
  return (
    <div>
      {/* Banner component with image and text props */}
      <Banner imagePath={bannerHomeImage} text="Chez vous, partout et ailleurs" />
      <section className="home-container">
        {/* Mapping through the logements data and creating a Card component for each */}
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </div>
  );
}

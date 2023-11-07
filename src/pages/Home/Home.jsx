// Home.jsx
import React from 'react';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import logements from '../../datas/logements.json';
import './Home.scss';
import bannerHomeImage from '../../assets/images/banner-home.png';

export default function Home() {
  return (
    <div>
      <Banner imagePath={bannerHomeImage} text="Chez vous, partout et ailleurs"/>
      <section className="home-container">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </div>
  );
}
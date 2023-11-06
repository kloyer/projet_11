// Home.jsx
import React from 'react';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import logements from '../../datas/logements.json';
import './Home.scss';

export default function Home() {
  return (
    <div>
      <Banner/>
      <section className="home-container">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </div>
  );
}
// Home.jsx
import React from 'react';
import Card from '../../components/Card/Card';
import logements from '../../datas/logements.json';
import './Home.scss';

export default function Home() {
  return (
    <div>
      <header className="header">
        Chez vous, partout et ailleurs
      </header>
      <section className="logements-container">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </div>
  );
}
import React from 'react';
import './NotFound.scss';

// The NotFound functional component
const NotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <p>Oups! La page que vous demandez n'existe pas.</p>
    <a href='/'>Retourner sur la page d’accueil</a>
  </div>
);

// Exporting the NotFound component as the default export of this file
export default NotFound;

import React, { useState } from 'react';
import './Collapse.scss'; // Votre fichier SASS pour le style

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <button className="collapse-toggle" onClick={toggle}>
        {title}
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;

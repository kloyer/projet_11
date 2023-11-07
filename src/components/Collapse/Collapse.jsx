import React, { useState, useRef } from 'react';
import './Collapse.scss';
import arrowUpDown from '../../assets/images/arrow-up-down.png';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const contentHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';

  return (
    <div className="collapse-container">
      <button className="collapse-toggle" onClick={toggle}>
        {title}
        <img 
          src={arrowUpDown} 
          alt="Toggle" 
          className={`arrow-icon ${isOpen ? 'up' : 'down'}`}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
        />
      </button>
      <div
        ref={contentRef}
        className="collapse-content"
        style={{ maxHeight: contentHeight }}
      >
        {children}
      </div>
    </div>
  );
}

export default Collapse;

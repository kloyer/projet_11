// Importing the React library, useState for state management, and useRef for referencing a DOM element
import React, { useState, useRef } from 'react';
import './Collapse.scss';
import arrowUpDown from '../../assets/images/arrow-up-down.png';

// Collapse functional component with props 'title' and 'children'
function Collapse({ title, children }) {
  // State to track if the collapse content is open or not
  const [isOpen, setIsOpen] = useState(false);

  // useRef hook to reference the collapsible content's DOM node
  const contentRef = useRef(null);

  // Function to toggle the isOpen state
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Calculating the height for the content based on its open state
  // When open, it uses the scrollHeight of the content, otherwise 0px
  const contentHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';

  // Returning the JSX for the collapse component
  return (
    <div className="collapse-container">
      {/* Toggle button with an image indicating its state (open or closed) */}
      <button className="collapse-toggle" onClick={toggle}>
        {title}
        <img 
          src={arrowUpDown} 
          alt="Toggle" 
          className={`arrow-icon ${isOpen ? 'up' : 'down'}`}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
        />
      </button>

      {/* Collapsible content section */}
      <div
        ref={contentRef} // Reference to the content div for dynamic height calculation
        className="collapse-content"
        style={{ maxHeight: contentHeight }} // Dynamic style based on open state
      >
        {children}
      </div>
    </div>
  );
}

// Exporting the Collapse component for use in other parts of the application
export default Collapse;

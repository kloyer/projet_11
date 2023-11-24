import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Importing BrowserRouter from react-router-dom and aliasing it as Router
import { BrowserRouter as Router } from 'react-router-dom';

// Selecting the DOM element with id 'root'
const container = document.getElementById('root');

// Creating a root element
const root = createRoot(container);

// Rendering the application
root.render(
  // StrictMode is a tool for highlighting potential problems in an application
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
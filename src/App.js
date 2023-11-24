import React from 'react';
import './App.scss';

// Importing the Routes and Route components from react-router-dom for routing
import { Routes, Route } from 'react-router-dom';

// Importing components for different pages
import Home from './pages/Home/Home';
import Logement from './pages/Logement/Logement';
import NotFound from './pages/NotFound/NotFound';
import Layout from './pages/Layout/Layout';
import About from './pages/About/About';

// The main App component
function App() {
  return (
    // Using the Layout component to wrap around the Routes
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

// Exporting the App component as the default export of this module
export default App;
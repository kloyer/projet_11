import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Layout.scss';

// Layout functional component
const Layout = ({ children }) => (
  // React Fragment to group multiple elements without adding extra nodes to the DOM
  <>
    <Header />
    {/* Rendering the main content area, where children components will be placed */}
    <main>{children}</main>
    <Footer />
  </>
);

// Exporting the Layout component for use in other parts of the application
export default Layout;

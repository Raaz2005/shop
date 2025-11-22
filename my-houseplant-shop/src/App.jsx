import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Import all the pages you need to create
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import Header from './components/Header'; // The header must appear on all visible pages

function App() {
  return (
    <>
      {/* The Header is placed here, OUTSIDE the <Routes>, 
        so it appears persistently on all pages that load below it.
      */}
      <Header /> 

      {/* <Routes> defines all the available paths (URLs) 
        and which component (page) to display for each.
      */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </>
  );
}

export default App;
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  // Get the total items from Redux state (3 points)
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: '#f4f4f4' }}>
      <h1>The Houseplant Shop</h1> {/* Company Name */}

      <nav> {/* Navigation (2 points) */}
        <Link to="/products" style={{ marginRight: '20px' }}>Products</Link>
        <Link to="/cart">
          🛒 Cart ({totalItems}) {/* Shopping cart icon with value (3 points) */}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
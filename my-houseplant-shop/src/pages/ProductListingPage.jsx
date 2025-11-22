import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  // Get the total number of items from Redux state (3 points)
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header style={styles.header}>
      {/* Company Name */}
      <h1 style={styles.logo}>The Houseplant Haven</h1>

      <nav style={styles.nav}>
        {/* Navigation to either of the other pages (2 points) */}
        <Link to="/products" style={styles.link}>Products</Link>
        
        <Link to="/cart" style={styles.cartLink}>
          {/* Shopping cart icon with value (3 points) */}
          🛒 Cart ({totalItems}) 
        </Link>
      </nav>
    </header>
  );
};

const styles = {
    header: {
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '15px 30px', 
        backgroundColor: 'white', // Clean white background
        borderBottom: '2px solid #ddd', // Subtle separation line
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        width: '100%',
    },
    logo: {
        fontSize: '1.5em',
        color: '#28a745', // Green color for the brand name
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    link: {
        textDecoration: 'none',
        color: '#555',
        fontWeight: '500',
        padding: '5px 10px',
        transition: 'color 0.2s',
    },
    cartLink: {
        textDecoration: 'none',
        color: '#007bff', // Blue color to highlight cart status
        fontWeight: 'bold',
        padding: '5px 10px',
        border: '1px solid #007bff',
        borderRadius: '5px',
        backgroundColor: '#e6f0ff',
    }
};

export default Header;
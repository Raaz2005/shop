// --- File: src/pages/LandingPage.jsx ---
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = ({ developerName = "YOUR NAME HERE" }) => { 
  return (
    // Uses the CSS class defined in index.css
    <div className="landing-container">
      <div style={styles.overlay}>
        
        <h1 style={styles.companyName}>The Houseplant Haven</h1>

        <p style={styles.paragraph}>
          Welcome to The Houseplant Haven! We specialize in bringing life and freshness into your home.
        </p>

        <p style={styles.credit}>
          A project by *{developerName}*
        </p>
        
        {/* The required navigation link */}
        <Link to="/products" style={styles.link}>
          <button style={styles.button}>
            Get Started →
          </button>
        </Link>
      </div>
    </div>
  );
};

// Simplified styles used here
const styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '40px',
    borderRadius: '10px',
    maxWidth: '600px',
    textAlign: 'center',
  },
  companyName: {
    fontSize: '3em',
    marginBottom: '10px',
    color: 'white',
  },
  paragraph: {
    fontSize: '1.2em',
    marginBottom: '30px',
    color: 'white',
  },
  credit: {
    fontSize: '1em',
    marginBottom: '10px',
    color: 'white',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    padding: '12px 25px',
    fontSize: '1.1em',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  }
};

export default LandingPage;
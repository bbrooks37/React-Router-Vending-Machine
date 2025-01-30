import React from 'react';
import { Link } from 'react-router-dom';
import sodaImage from './assets/soda.jpg'; // Correct relative path

function Soda() {
  return (
    <div className="snack-page">
      <h1>Refreshing Soda!</h1>
      <p>Enjoy your bubbly drink.</p>
      <img src={sodaImage} alt="Cold Soda" width="400" /> {/* Descriptive alt text */}
      <Link to="/" className="back-link">Go Back</Link>
    </div>
  );
}

export default Soda;
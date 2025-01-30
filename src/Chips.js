import React from 'react';
import { Link } from 'react-router-dom';
import chipsImage from './assets/chips.jpg'; // Replace with your chips image path

function Chips() {
  return (
    <div className="snack-page"> {/* Added a class for styling */}
      <h1>Crunchy Chips!</h1>
      <p>Enjoy these salty, crispy treats.</p>
      <img src={chipsImage} alt="Bag of Chips" width="400" /> {/* Adjust width as needed */}
      <Link to="/" className="back-link">Go Back</Link> {/* Added a class for styling */}
    </div>
  );
}

export default Chips;
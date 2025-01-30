import React from 'react';
import { Link } from 'react-router-dom';
import candyImage from './assets/candy.jpg'; // Replace with your candy image path

function Candy() {
  return (
    <div className="snack-page"> {/* Added a class for styling */}
      <h1>Sweet Candy!</h1>
      <p>Indulge in these sugary delights.</p>
      <img src={candyImage} alt="Pile of Candy" width="400" /> {/* Adjust width as needed */}
      <Link to="/" className="back-link">Go Back</Link> {/* Added a class for styling */}
    </div>
  );
}

export default Candy;
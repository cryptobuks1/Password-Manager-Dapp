import React from 'react';
import { Link } from 'react-router-dom';

const Landing = (props) => {
  return (
    <div>
      <Link to='/dashboard'>
        go to Dashboard
      </Link>
      <h1>Good to go!</h1>
      <p>Your Truffle Box is installed and ready 💪.</p>
    </div>
  );
}
 
export default Landing;
// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the App</h1>
      <div>
        <Link to="/signin">
          <button style={{ margin: '10px' }}>Sign In</button>
        </Link>
        <Link to="/signup">
          <button style={{ margin: '10px' }}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

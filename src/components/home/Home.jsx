// Home.jsx
import React from 'react';
import './Home.css';
import LandingHeader from './LandingHeader';
import { Link } from 'react-router-dom';
import LandingHero from './LandingHero';
import LandingContent from './LandingContent';

const Home = () => {
  return (
    
    <div className='home-bground'>
    <LandingHeader/>
    <LandingHero/>
    <LandingContent/>
    </div>
  );
};

export default Home;

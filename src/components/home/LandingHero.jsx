import React from 'react';
import { Link } from 'react-router-dom';
import TypewriterComponent from 'typewriter-effect';
import './LandingHero.css';

const LandingHero = () => {
    return (
        <div className='landing-hero'>
            <div className='landing-title'>
                <h1>The best AI tool for</h1>
                <div className='gradient-text'>
                    <TypewriterComponent
                        options={{
                            strings: [
                                "Chatbot.",
                                "Photo Generation.",
                                "Music Generation.",
                                "Code Generation.",
                                "Video Generation.",
                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
            </div>
            <div className='sub-text'>
                Create content using AI 10x faster.
            </div>
            <div>
                <Link to="/signin">
                    <button className='cta-button'>Start Generating For Free</button>
                </Link>
            </div>
            <div className='credit-info'>
                No credit card required.
            </div>
        </div>
    );
}

export default LandingHero;

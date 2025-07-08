import React from 'react';
import '../styles/HeroSection.css';
import nagoyaVideo from '../assets/nagoya.mp4';

const HeroSection = () => {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        src={nagoyaVideo}
        type="video/mp4"
      />
      <div className="hero-content">
        <h1></h1>
        <p></p>
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default HeroSection;

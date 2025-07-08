import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TourSection from './components/Tour';
import MusicSection from './components/Music';
import AboutSection from './components/About';
import MerchandiseSection from './components/MerchandiseSection';
import MediaPressSection from './components/MediaPress';
import NewsletterSignup from './components/NewsletterSignup';
import SocialMediaFeeds from './components/SocialMediaFeeds';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TourSection />
      <MusicSection />
      <Content />
      <MerchandiseSection />
      <MediaPressSection />
      <NewsletterSignup />
      <SocialMediaFeeds />
      <Footer />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">MORFEM</h1>
        <nav className="nav">
          {isMobile ? (
            <>
              <button
                className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className="bar line1"></span>
                <span className="bar line2"></span>
                <span className="bar line3"></span>
              </button>
              <div className={`menu-dropdown ${menuOpen ? 'open' : ''}`}>
                <a href="#about" className="menu-item" onClick={(e) => handleMenuItemClick(e, 'about')}>About</a>
                <a href="#tour" className="menu-item" onClick={(e) => handleMenuItemClick(e, 'tour')}>Tour</a>
                <a href="#music" className="menu-item" onClick={(e) => handleMenuItemClick(e, 'music')}>Music</a>
                <a href="#merchandise" className="menu-item" onClick={(e) => handleMenuItemClick(e, 'merchandise')}>Shop</a>
                <a href="#media-press" className="menu-item" onClick={(e) => handleMenuItemClick(e, 'media-press')}>
                  Media <br /> &amp; Press
                </a>
              </div>
            </>
          ) : (
            <div className="menu">
              <a href="#about" className="menu-item" onClick={(e) => handleMenuItemClick(e, 'about')}>About</a>
              <a href="#tour" className="menu-item" onClick={(e) => handleMenuItemClick(e, 'tour')}>Tour</a>
              <a href="#music" className="menu-item" onClick={(e) => handleMenuItemClick(e, 'music')}>Music</a>
              <a href="#merchandise" className="menu-item" onClick={(e) => handleMenuItemClick(e, 'merchandise')}>Shop</a>
              <a href="#media-press" className="menu-item" onClick={(e) => handleMenuItemClick(e, 'media-press')}>Media &amp; Press</a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

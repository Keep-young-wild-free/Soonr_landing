import React, { useState, useEffect } from 'react';
import './Header.css';
import soonrBlackLogo from '../assets/soonr-black-logo.png';
import soonrWhiteLogo from '../assets/soonr-white-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setHasScrolled(window.scrollY > 10);
      setIsHidden(window.scrollY > heroHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Global Navigation"
      className={`global-navigation ${hasScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}
    >
      <div className="nav-background">
        <div className="nav-content">
          <div className="nav-section">
            {/* Logo */}
            <div className="logo-wrapper">
              <a href="/" aria-label="Home" className="logo-link">
                <img src={hasScrolled ? soonrBlackLogo : soonrWhiteLogo} alt="Soonr" style={{ height: '22px', width: 'auto' }} />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div role="menubar" className="nav-inner">
              <ul role="menu" className="nav-list">
                <li role="none" className="nav-list-item">
                  <button role="menuitem" className="nav-button">
                    <span>Log in</span>
                  </button>
                </li>
                <li role="none" className="nav-list-item">
                  <button
                    aria-label="Slide Menu Toggle"
                    role="menuitem"
                    className="nav-button nav-menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <button
              className="mobile-menu-close"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
          </div>
          <nav className="mobile-nav">
            <a href="#how-it-works" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>How it works</a>
            <a href="#biomarkers" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Biomarkers</a>
            <a href="#plans" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Plans</a>
            <a href="#faq" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>FAQ</a>
          </nav>
          <div className="mobile-menu-footer">
            <a href="/login" className="mobile-login-btn">Log in</a>
            <a href="/start" className="mobile-cta-btn">Start testing</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;


import React, { useState, useEffect } from 'react';
import './ChromeNav.css';

const ChromeNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`chrome-nav ${isVisible ? 'visible' : ''}`}>
      <div className="chrome-nav-grid">
        <div className="chrome-nav-row">
          <div className="chrome-nav-column">
            <div className="chrome-nav-group">
              <a href="#how-it-works" className="chrome-nav-link">How it works</a>
              <a href="#biomarkers" className="chrome-nav-link">Biomarkers</a>
              <a href="#plans" className="chrome-nav-link">Plans</a>
              <a href="#faq" className="chrome-nav-link">FAQ</a>
              <a href="/start" className="chrome-nav-cta">
                From $199&nbsp;&nbsp;|&nbsp;&nbsp;Start&nbsp;testing
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.69922 3.99602C8.08974 3.60549 8.72373 3.60549 9.11426 3.99602L13.3564 8.23821C13.7469 8.62865 13.7467 9.26173 13.3564 9.65227L9.11426 13.8954C8.72373 14.286 8.08974 14.286 7.69922 13.8954C7.30895 13.505 7.30904 12.8719 7.69922 12.4814L10.2354 9.94524H2.75C2.19772 9.94524 1.75 9.49752 1.75 8.94524C1.7502 8.39313 2.19784 7.94524 2.75 7.94524H10.2354L7.69922 5.41008C7.30897 5.01963 7.30902 4.3865 7.69922 3.99602Z" fill="currentcolor"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChromeNav;

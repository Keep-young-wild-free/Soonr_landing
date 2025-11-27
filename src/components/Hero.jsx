import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import heroBg from '../assets/family-home2.jpg';

const Hero = () => {
  const heroRef = useRef(null);
  const [parallaxY, setParallaxY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        setParallaxY(scrolled * 0.3);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = heroBg;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
      data-hero="true"
      style={{ '--y-parallax': `${parallaxY}px` }}
    >
      <div className="hero-grid">
        <div className="hero-row">
          <div className="hero-col hero-col-title">
            <div className="hero-content">
              <h1 className="hero-headline">
                <header className="hero-header">
                  <h2 className="hero-title">
                    <div className="hero-line-wrapper">
                      <div className="hero-line">Get there together, sooner</div>
                    </div>
                    <div className="hero-line-wrapper">
                      <div className="hero-line">AI-powered preconception coaching for both partners. Evidence-based & personalized.</div>
                    </div>
                  </h2>
                </header>
              </h1>
            </div>
          </div>

          <div className="hero-col hero-col-features">
            <ul className="hero-feature-list">
              <li className="hero-feature-item">
                <span className="hero-feature-number">120</span>
                Up to 120 tests
              </li>
              <li className="hero-feature-item">
                <span className="hero-feature-number">10</span>
                vital health areas
              </li>
              <li className="hero-feature-item">
                <span className="hero-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13.8186 14.1191L16.2357 10.5489H14.3976L12.9592 12.8463L11.2957 10.5489C11.8238 10.4254 12.2938 10.1254 12.6281 9.69838C12.9624 9.2714 13.1408 8.74309 13.1339 8.2009C13.1561 7.86648 13.1067 7.5312 12.9891 7.21737C12.8714 6.90354 12.6882 6.61839 12.4516 6.38096C12.2151 6.14354 11.9306 5.95927 11.6171 5.84049C11.3037 5.7217 10.9686 5.67114 10.634 5.69213H7.57812V13.3518H9.12214V10.5949H9.62767L12.0034 14.1145L9.35651 18.2085H11.1717L12.9271 15.3505L14.6733 18.2085H16.5114L13.8186 14.1191ZM9.1038 7.05219H10.4824C10.6343 7.04924 10.7853 7.07802 10.9255 7.13666C11.0658 7.1953 11.1922 7.28251 11.2969 7.39276C11.4015 7.50301 11.482 7.63388 11.5333 7.77698C11.5845 7.92007 11.6053 8.07229 11.5945 8.2239C11.602 8.38359 11.5743 8.543 11.5133 8.69079C11.4523 8.83857 11.3596 8.97109 11.2416 9.07898C11.1236 9.18687 10.9833 9.26749 10.8306 9.31506C10.678 9.36263 10.5167 9.37598 10.3583 9.35421H9.12214L9.1038 7.05219Z" fill="currentColor"></path>
                    <path d="M11.7132 0C13.3192 0 15.279 0.046477 17.1402 0.107175C20.8192 0.227159 23.7683 3.16283 23.8942 6.84166C23.9548 8.6164 23.9998 10.4819 23.9994 12.0465L23.9702 14.4667C23.9521 15.3135 23.9269 16.1861 23.8981 17.0408C23.772 20.7727 20.7437 23.7254 17.0116 23.8435L12.0289 23.9994L6.9917 23.8415C3.25705 23.7242 0.226357 20.7694 0.101329 17.035C0.0433129 15.3019 0 13.4937 0 11.9744C1.12367e-05 10.4212 0.0452755 8.57313 0.105226 6.81438C0.22662 3.26195 2.98101 0.400237 6.487 0.114969L6.82996 0.0954831C8.4868 0.0410763 10.2216 8.98109e-06 11.7132 0ZM1.20036 11.9744C1.20036 13.4744 1.24384 15.2681 1.30169 16.996C1.40521 20.0824 3.9111 22.5449 7.02873 22.6431L12.027 22.799L16.9726 22.6431C20.0887 22.5449 22.5951 20.0859 22.6996 17.0018C22.7572 15.2969 22.8006 13.5283 22.801 12.0445C22.8013 10.5003 22.7543 8.65153 22.6938 6.88258C22.5896 3.837 20.1508 1.40699 17.1012 1.30753C15.2445 1.24698 13.2999 1.20036 11.7132 1.20036C10.2403 1.20037 8.52005 1.23967 6.86894 1.29389C3.83374 1.39357 1.40942 3.81821 1.30559 6.8553C1.24582 8.60862 1.20037 10.4411 1.20036 11.9744Z" fill="currentColor"></path>
                  </svg>
                </span>
                doctor-developed action plans
              </li>
            </ul>
          </div>
        </div>

        <div className="hero-row hero-row-cta">
          <a href="/start" className="hero-cta">
            From $199&nbsp;&nbsp;|&nbsp;&nbsp;Start&nbsp;testing
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.69922 3.99602C8.08974 3.60549 8.72373 3.60549 9.11426 3.99602L13.3564 8.23821C13.7469 8.62865 13.7467 9.26173 13.3564 9.65227L9.11426 13.8954C8.72373 14.286 8.08974 14.286 7.69922 13.8954C7.30895 13.505 7.30904 12.8719 7.69922 12.4814L10.2354 9.94524H2.75C2.19772 9.94524 1.75 9.49752 1.75 8.94524C1.7502 8.39313 2.19784 7.94524 2.75 7.94524H10.2354L7.69922 5.41008C7.30897 5.01963 7.30902 4.3865 7.69922 3.99602Z" fill="currentcolor"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Background parallax image */}
      <div
        className={`hero-parallax ${imageLoaded ? 'loaded' : ''}`}
        style={{
          transform: `translateY(${parallaxY}px)`,
          backgroundImage: `url(${heroBg})`
        }}
      ></div>
    </section>
  );
};

export default Hero;

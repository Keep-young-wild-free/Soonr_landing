import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Book your test',
      description: 'In the app for a lab draw near you at one of over 2000+ locations.',
      image: '/images/step-1.jpg'
    },
    {
      title: 'Get your results',
      description: 'To know which areas of your health need the most attention.',
      image: '/images/step-2.jpg'
    },
    {
      title: 'Spot early signals',
      description: 'A provider can help identify early signs of potential health risks or system imbalances.',
      image: '/images/step-3.jpg'
    },
    {
      title: 'View your Action Plan',
      description: 'Based on your health profile and your results, with expert guidance.',
      image: '/images/step-4.jpg'
    },
    {
      title: 'Improve over time',
      description: 'With a mid-year panel on the Advanced plan and follow-ups with a provider.',
      image: '/images/step-5.jpg'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-grid">
        <div className="how-it-works-row">
          <div className="how-it-works-header-col">
            <div className="how-it-works-header">
              <header className="section-header-wrapper">
                <h2 className="section-title">
                  <div className="title-line">A snapshot of your</div>
                  <div className="title-line">health, <span className="text-highlight">plus the</span></div>
                  <div className="title-line"><span className="text-highlight">power to change it</span></div>
                </h2>
              </header>
            </div>
          </div>
        </div>

        <div className="how-it-works-row">
          <div className="how-it-works-editorial-col">
            <div className="how-it-works-editorial">
              {steps.map((step, index) => (
                <div key={index} className="editorial-item">
                  <div className="editorial-image">
                    <div className="editorial-image-placeholder"></div>
                  </div>
                  <div className="editorial-content">
                    <span className="editorial-title">{step.title}</span>
                    <span className="editorial-description">{step.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

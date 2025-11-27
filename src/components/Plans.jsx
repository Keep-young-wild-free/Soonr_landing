import React from 'react';
import './Plans.css';

const Plans = () => {
  const plans = [
    {
      name: 'Essential',
      price: '$199',
      period: 'one time',
      biomarkers: 70,
      description: 'Get started with core health insights',
      features: [
        '70 biomarkers',
        'Heart health panel',
        'Metabolic health panel',
        'Thyroid panel',
        'Liver & kidney function',
        'Immune defense',
        'Basic nutrients',
        'Results in 5-7 days',
        'Digital health report'
      ],
      cta: 'Get started',
      highlight: false
    },
    {
      name: 'Complete',
      price: '$349',
      period: 'one time',
      biomarkers: 95,
      description: 'Comprehensive testing for deeper insights',
      features: [
        '95 biomarkers',
        'Everything in Essential',
        'Advanced lipid panel',
        'Hormone panel',
        'Inflammation markers',
        'Extended nutrients',
        'Vitamin D & B12',
        'Homocysteine',
        'Action plan included'
      ],
      cta: 'Get started',
      highlight: true,
      badge: 'Most popular'
    },
    {
      name: 'Advanced',
      price: '$449',
      period: '/year',
      biomarkers: 120,
      description: 'Maximum insights with ongoing monitoring',
      features: [
        '120 biomarkers',
        'Everything in Complete',
        '2 tests per year',
        'Apolipoprotein B',
        'Full hormone panel',
        'Cortisol & DHEA',
        'Progress tracking',
        'Provider follow-ups',
        'Priority support'
      ],
      cta: 'Get started',
      highlight: false
    }
  ];

  return (
    <section id="plans" className="plans">
      <div className="plans-grid">
        {/* Header */}
        <div className="plans-row plans-header-row">
          <div className="plans-header-col">
            <div className="plans-header">
              <header className="plans-header-wrapper">
                <h2 className="plans-title">
                  <div className="title-line">Choose your</div>
                  <div className="title-line"><span className="text-highlight">testing plan</span></div>
                </h2>
              </header>
            </div>
          </div>
          <div className="plans-description-col">
            <div className="plans-description">
              <span className="description-regular">
                All plans include physician oversight, easy-to-understand results, and personalized health insights. Choose the level of depth that's right for you.
              </span>
            </div>
          </div>
        </div>

        {/* Plans Cards */}
        <div className="plans-row">
          <div className="plans-cards-col">
            <div className="plans-cards">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`plan-card ${plan.highlight ? 'highlighted' : ''}`}
                >
                  {plan.badge && (
                    <div className="plan-badge">{plan.badge}</div>
                  )}
                  <div className="plan-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <p className="plan-description">{plan.description}</p>
                  </div>
                  <div className="plan-pricing">
                    <span className="plan-price">{plan.price}</span>
                    <span className="plan-period">{plan.period}</span>
                  </div>
                  <div className="plan-biomarkers">
                    <span className="biomarker-count">{plan.biomarkers}</span>
                    <span className="biomarker-label">biomarkers</span>
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/start" className={`plan-cta ${plan.highlight ? 'primary' : 'secondary'}`}>
                    {plan.cta}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.69922 3.99602C8.08974 3.60549 8.72373 3.60549 9.11426 3.99602L13.3564 8.23821C13.7469 8.62865 13.7467 9.26173 13.3564 9.65227L9.11426 13.8954C8.72373 14.286 8.08974 14.286 7.69922 13.8954C7.30895 13.505 7.30904 12.8719 7.69922 12.4814L10.2354 9.94524H2.75C2.19772 9.94524 1.75 9.49752 1.75 8.94524C1.7502 8.39313 2.19784 7.94524 2.75 7.94524H10.2354L7.69922 5.41008C7.30897 5.01963 7.30902 4.3865 7.69922 3.99602Z" fill="currentcolor"/>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="plans-row plans-trust-row">
          <div className="trust-badges">
            <div className="trust-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>HIPAA compliant</span>
            </div>
            <div className="trust-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>CLIA-certified labs</span>
            </div>
            <div className="trust-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Results in 5-7 days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;

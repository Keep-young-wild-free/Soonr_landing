import React from 'react';
import './Snapshot.css';

const Snapshot = () => {
  return (
    <section className="snapshot">
      <div className="snapshot-container">
        <header className="snapshot-header">
          <h2 className="snapshot-title">
            <span className="title-line">A snapshot of your</span>
            <span className="title-line">health, <span className="text-highlight">plus the</span></span>
            <span className="title-line"><span className="text-highlight">power to change it</span></span>
          </h2>
        </header>

        <div className="snapshot-grid">
          {/* Row 1: Book your test + Get your results */}
          <div className="snapshot-card card-book">
            <div className="card-content">
              <h3 className="card-title">Book your test</h3>
              <p className="card-description">
                In the app for a lab draw near you at one of over 2000+ locations.
              </p>
            </div>
            <div className="card-visual book-visual">
              <div className="lab-visit-card">
                <h4 className="lab-visit-title">Your lab visit</h4>
                <div className="lab-visit-info">
                  <div className="visit-item">
                    <span className="visit-dot date-dot"></span>
                    <div className="visit-details">
                      <span className="visit-label">Monday, Aug 18</span>
                      <span className="visit-sublabel">10:00 AM</span>
                    </div>
                  </div>
                  <div className="visit-item">
                    <span className="visit-dot location-dot"></span>
                    <div className="visit-details">
                      <span className="visit-label">Quest Diagnostics</span>
                      <span className="visit-sublabel">941 Clay St<br/>San Francisco, CA 94108</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="snapshot-card card-results">
            <div className="card-content">
              <h3 className="card-title">Get your results</h3>
              <p className="card-description">
                To know which areas of your health need the most attention.
              </p>
            </div>
            <div className="card-visual results-visual">
              <div className="results-dashboard">
                <div className="results-ring">
                  <svg viewBox="0 0 120 120" className="ring-svg">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#3a3a3a" strokeWidth="8"/>
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#22c55e" strokeWidth="8"
                      strokeDasharray="280 314" strokeLinecap="round" transform="rotate(-90 60 60)"/>
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#f97316" strokeWidth="8"
                      strokeDasharray="20 314" strokeDashoffset="-280" strokeLinecap="round" transform="rotate(-90 60 60)"/>
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#ef4444" strokeWidth="8"
                      strokeDasharray="14 314" strokeDashoffset="-300" strokeLinecap="round" transform="rotate(-90 60 60)"/>
                  </svg>
                  <div className="ring-center">
                    <span className="ring-text">All 75 biomarkers</span>
                  </div>
                </div>
                <div className="results-stats">
                  <div className="stat-item">
                    <span className="stat-label">Optimal</span>
                    <span className="stat-value optimal">66</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">In range</span>
                    <span className="stat-value in-range">3</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Out of range</span>
                    <span className="stat-value out-range">6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Spot early signals (full width) */}
          <div className="snapshot-card card-signals">
            <div className="card-content">
              <h3 className="card-title">Spot early signals</h3>
              <p className="card-description">
                A provider can help identify early signs of potential health risks or system imbalances.
              </p>
            </div>
            <div className="card-visual signals-visual">
              <div className="phone-mockup">
                <div className="phone-screen"></div>
              </div>
            </div>
          </div>

          {/* Row 3: Action Plan + Improve over time */}
          <div className="snapshot-card card-action">
            <div className="card-content">
              <h3 className="card-title">View your Action Plan</h3>
              <p className="card-description">
                Based on your health profile and your results, with expert guidance.
              </p>
            </div>
            <div className="card-visual action-visual">
              <div className="action-plan-card">
                <h4 className="action-plan-title">Action Plan</h4>
                <p className="action-plan-subtitle">Level up your markers with an Action Plan tailored to your full results.</p>
                <div className="action-tag">Needs attention</div>
                <div className="action-section">
                  <h5 className="action-section-title">Metabolic Health</h5>
                  <p className="action-section-desc">Indicators show added strain on your metabolism.</p>
                </div>
                <div className="action-item">
                  <span className="action-dot"></span>
                  <div className="action-item-content">
                    <span className="action-item-title">Nutrition</span>
                    <span className="action-item-desc">Eat plants and fiber-rich foods, like vegetables, fruits, beans, whole grains, oats, and greens.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="snapshot-card card-improve">
            <div className="card-content">
              <h3 className="card-title">Improve over time</h3>
              <p className="card-description">
                With a mid-year panel on the Advanced plan and follow-ups with a provider.
              </p>
            </div>
            <div className="card-visual improve-visual">
              <div className="improve-chart">
                <div className="chart-header">
                  <span className="chart-age">31 years old</span>
                  <span className="chart-badge">↑ 3% from last year</span>
                </div>
                <span className="chart-sublabel">As of today</span>
                <div className="chart-graph">
                  <div className="chart-y-axis">
                    <div className="y-label out">99.0<br/><span>Out of range</span></div>
                    <div className="y-label in">70.0<br/><span>In range</span></div>
                    <div className="y-label optimal">0.0<br/><span>Optimal</span></div>
                  </div>
                  <div className="chart-line">
                    <svg viewBox="0 0 200 100" preserveAspectRatio="none">
                      <path d="M 0 80 Q 50 70 100 50 T 200 20" fill="none" stroke="#22c55e" strokeWidth="2"/>
                      <circle cx="180" cy="25" r="6" fill="#22c55e"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Snapshot;

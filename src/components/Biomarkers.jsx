import React, { useState, useRef } from 'react';
import './Biomarkers.css';

const Biomarkers = () => {
  const [activeTab, setActiveTab] = useState(0);
  const carouselRef = useRef(null);

  const categories = [
    {
      id: 'heart-health',
      name: 'Heart',
      fullName: 'Heart Health',
      description: 'Assess how well your heart is pumping oxygen and nutrients throughout your body.',
      biomarkerCount: 9,
      tags: ['LDL Cholesterol', 'HDL Cholesterol', 'Non-HDL Cholesterol', 'Apolipoprotein B'],
      color: '#e8d5c4'
    },
    {
      id: 'metabolism-health',
      name: 'Metabolism',
      fullName: 'Metabolism',
      description: 'Make sure every organ is getting the energy supply and cell repair it needs.',
      biomarkerCount: 4,
      tags: ['Hemoglobin A1c', 'Fasting Insulin', 'Uric Acid', 'Glucose'],
      color: '#d4e5d7'
    },
    {
      id: 'hormone-health',
      name: 'Hormones',
      fullName: 'Hormones',
      description: 'See if your endocrine system is in balance through energy, mood, and sexual health markers.',
      biomarkerCount: 8,
      tags: ['Estradiol', 'Luteinizing Hormone', 'Follicle Stimulating Hormone', 'SHBG'],
      color: '#e5d4e8'
    },
    {
      id: 'inflammation-stress',
      name: 'Inflammation & Stress',
      fullName: 'Inflammation & Stress',
      description: 'Check inflammation markers to see if your body is responding well to stress.',
      biomarkerCount: 2,
      tags: ['Cortisol', 'DHEA-Sulfate'],
      color: '#f5e6d3'
    },
    {
      id: 'thyroid',
      name: 'Thyroid',
      fullName: 'Thyroid',
      description: 'Spot any hormonal imbalances through markers that show an over- or under-active thyroid.',
      biomarkerCount: 5,
      tags: ['Thyroid-Stimulating Hormone', 'Thyroxine (T4)', 'Free Triiodothyronine (T3)'],
      color: '#d3e5f5'
    },
    {
      id: 'kidney-health',
      name: 'Kidney',
      fullName: 'Kidney',
      description: 'See if your kidneys are filtering waste efficiently with protein byproduct markers.',
      biomarkerCount: 4,
      tags: ['Blood Urea Nitrogen', 'BUN/Creatinine Ratio', 'Creatinine', 'eGFR'],
      color: '#e5e5d3'
    },
    {
      id: 'liver-health',
      name: 'Liver',
      fullName: 'Liver',
      description: 'Check liver enzymes to assess how well it\'s working for digestion and detoxification.',
      biomarkerCount: 9,
      tags: ['Albumin', 'Alanine Transaminase', 'Alkaline Phosphatase', 'Total Protein'],
      color: '#d3f5e5'
    },
    {
      id: 'immune-defense',
      name: 'Immune Defense',
      fullName: 'Immune Defense',
      description: 'Get a read on your body\'s readiness to fight infections and recover.',
      biomarkerCount: 12,
      tags: ['White Blood Cell Count', 'Basophils', 'Eosinophils', 'Lymphocytes'],
      color: '#f5d3d3'
    },
    {
      id: 'nutrients',
      name: 'Nutrients',
      fullName: 'Nutrients',
      description: 'See if your nutrient levels are what they should be for your overall health.',
      biomarkerCount: 16,
      tags: ['Vitamin D', 'Homocysteine', 'Iron', 'Magnesium', 'Sodium', 'Potassium'],
      color: '#d3d3f5'
    },
    {
      id: 'blood-health',
      name: 'Blood',
      fullName: 'Blood Health',
      description: 'Assess red blood cell health and oxygen-carrying capacity throughout your body.',
      biomarkerCount: 9,
      tags: ['Red Blood Cell Count', 'Hemoglobin', 'Hematocrit', 'MCV'],
      color: '#f5d3e5'
    }
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.offsetWidth || 400;
      const gap = 24;
      carouselRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="biomarkers" className="biomarkers">
      <div className="biomarkers-grid">
        {/* Header */}
        <div className="biomarkers-row biomarkers-header-row">
          <div className="biomarkers-header-col">
            <div className="biomarkers-header">
              <header className="biomarkers-header-wrapper">
                <h2 className="biomarkers-title">
                  <div className="title-line">Gain insights into</div>
                  <div className="title-line"><span className="text-highlight">10 vital areas</span> of</div>
                  <div className="title-line">your health</div>
                </h2>
              </header>
            </div>
          </div>
          <div className="biomarkers-description-col">
            <div className="biomarkers-description">
              <span className="description-bold">Measure what matters.</span>
              <br />
              <span className="description-regular">
                Gain a holistic, in-depth view of how your heart, metabolism, and vital systems work together. In each test, an understanding of what matters for your long-term health.
              </span>
            </div>
          </div>
        </div>

        {/* Toggle Tabs */}
        <div className="biomarkers-row">
          <div className="biomarkers-toggle-col">
            <div role="tablist" aria-label="Toggle" className="biomarkers-toggle">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  role="tab"
                  aria-controls={category.id}
                  aria-selected={activeTab === index}
                  className={`toggle-item ${activeTab === index ? 'active' : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  <label>{category.name}</label>
                </button>
              ))}
              <div
                className="toggle-highlight"
                style={{
                  transform: `translateX(${activeTab * 100}%)`,
                  width: `${100 / categories.length}%`
                }}
              ></div>
            </div>

            {/* Carousel */}
            <div className="biomarkers-carousel">
              <div className="carousel-viewport" ref={carouselRef}>
                {categories.map((category, index) => (
                  <div key={category.id} className="carousel-item">
                    <div className="carousel-slide">
                      <div className="carousel-content">
                        <a
                          id={category.id}
                          role="tabpanel"
                          aria-label={category.fullName}
                          href={`/labs/${category.id}`}
                          className="vital-areas-card"
                        >
                          <div className="card-header">
                            <span className="card-title">{category.fullName}</span>
                            <span className="card-description">{category.description}</span>
                          </div>
                          <div className="card-footer">
                            <span className="card-label">Includes {category.biomarkerCount} biomarkers</span>
                            <ul className="card-tags">
                              {category.tags.map((tag, tagIndex) => (
                                <li key={tagIndex} className="card-tag">{tag}</li>
                              ))}
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div
                        className="carousel-image"
                        style={{ backgroundColor: category.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biomarkers;

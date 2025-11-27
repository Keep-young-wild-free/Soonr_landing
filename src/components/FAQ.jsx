import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does the testing process work?',
      answer: 'After selecting your plan, you\'ll visit a nearby partner lab for a quick blood draw. The test takes about 15 minutes, and your results will be available in your online dashboard within 5-7 business days.'
    },
    {
      question: 'Who reviews my results?',
      answer: 'All test results are reviewed by licensed physicians. If any concerning findings are identified, we\'ll provide guidance on next steps and can connect you with appropriate care providers.'
    },
    {
      question: 'Do I need to prepare for the test?',
      answer: 'For accurate results, we recommend fasting for 8-12 hours before your test. Water is fine to drink. Please inform us of any medications you\'re currently taking.'
    },
    {
      question: 'What does the results report include?',
      answer: 'Your report includes detailed biomarker values with reference ranges, easy-to-understand interpretations, and actionable recommendations for improvement. Complete and Advanced plans include personalized action plans.'
    },
    {
      question: 'How often should I get tested?',
      answer: 'Essential and Complete plans include one test. The Advanced plan includes two tests per year, allowing you to track changes over time and monitor your health improvements.'
    },
    {
      question: 'How is my data protected?',
      answer: 'All health data is encrypted and stored securely following HIPAA compliance standards. Your information is never shared with third parties without your explicit consent.'
    },
    {
      question: 'What is the refund policy?',
      answer: 'Full refunds are available before your lab visit. Once testing is complete and results are delivered, refunds are not available as the service has been rendered.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="faq-grid">
        {/* Header Row */}
        <div className="faq-row faq-header-row">
          <div className="faq-header-col">
            <div className="faq-header">
              <header className="faq-header-wrapper">
                <h2 className="faq-title">
                  <div className="title-line">Frequently asked</div>
                  <div className="title-line"><span className="text-highlight">questions</span></div>
                </h2>
              </header>
            </div>
          </div>
          <div className="faq-description-col">
            <div className="faq-description">
              <span className="description-regular">
                Have more questions? Feel free to reach out to our support team.
              </span>
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="faq-row">
          <div className="faq-list-col">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="question-text">{faq.question}</span>
                    <span className="faq-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d={openIndex === index ? "M5 10H15" : "M10 5V15M5 10H15"}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Row */}
        <div className="faq-row faq-contact-row">
          <div className="faq-contact">
            <p>Still have questions?</p>
            <a href="mailto:support@example.com" className="contact-link">
              Contact support
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.69922 3.99602C8.08974 3.60549 8.72373 3.60549 9.11426 3.99602L13.3564 8.23821C13.7469 8.62865 13.7467 9.26173 13.3564 9.65227L9.11426 13.8954C8.72373 14.286 8.08974 14.286 7.69922 13.8954C7.30895 13.505 7.30904 12.8719 7.69922 12.4814L10.2354 9.94524H2.75C2.19772 9.94524 1.75 9.49752 1.75 8.94524C1.7502 8.39313 2.19784 7.94524 2.75 7.94524H10.2354L7.69922 5.41008C7.30897 5.01963 7.30902 4.3865 7.69922 3.99602Z" fill="currentcolor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

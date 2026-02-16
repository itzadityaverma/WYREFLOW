import React, { useState } from 'react';
import './FAQSection.css';

const faqData = [
  {
    question: 'What does Wyreflow do?',
    answer: 'Wyreflow offers a range of services including application services, ITES, mobility, cloud, big data, machine learning, and AI.'
  },
  {
    question: 'What is the future for Wyreflow?',
    answer: 'Wyreflow is constantly innovating and expanding its services to meet the needs of both US clients and government projects.'
  },
  {
    question: 'How can Wyreflow help my business grow?',
    answer: 'By leveraging cutting-edge technology, Wyreflow can provide tailored solutions that help businesses scale and succeed in their respective industries.'
  },
  {
    question: 'What industries does Wyreflow serve?',
    answer: 'Wyreflow serves various industries including healthcare, finance, manufacturing, and more.'
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span>{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

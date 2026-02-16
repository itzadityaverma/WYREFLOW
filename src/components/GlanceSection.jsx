import React, { useState } from 'react';
import './GlanceSection.css';

const tabContents = [
  {
    number: '01',
    title: 'Fostering Lasting Connections',
    content: 'We prioritize a long-term perspective, cultivating lasting relationships that drive mutual growth and foster sustainable outcomes.'
  },
  {
    number: '02',
    title: 'Shaping Future-Focused Relationships',
    content: 'We prioritize enduring partnerships that drive innovation, growth, and long-term success for all involved.'
  },
  {
    number: '03',
    title: 'Committed to the Impact We Have on Every Life',
    content: 'Our guiding beliefs in integrity, excellence, and innovation drive our commitment to achieving impactful results and building lasting trust.'
  },
  {
    number: '04',
    title: 'Build and Share Knowledge Pathways',
    content: 'Develop comprehensive knowledge pathways and facilitate their dissemination, ensuring seamless access to critical insights and expertise across your organization.'
  }
];

const tabs = ['Our Commitment', 'Our Context', 'Our Beliefs', 'Our Roadmap'];

const GlanceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="glance-section">
      <div className="container">
        <h2 className="section-title">Wyreflow at a Glance</h2>
        
        <div className="section-tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="card-grid">
          <div className="card">
            <div className="card-number">{tabContents[activeTab].number}</div>
            <h3>{tabContents[activeTab].title}</h3>
            <p>{tabContents[activeTab].content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlanceSection;

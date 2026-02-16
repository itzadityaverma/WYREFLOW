import React from 'react';
import './VisionSection.css';

const visionData = [
  {
    title: 'Vision',
    content: 'We will continue to Rise to be an agile, customer-centric, and purpose-led company, delivering best-in-class technology solutions to our stakeholders.'
  },
  {
    title: 'Purpose',
    content: 'At Wyreflow, our vision is to lead the digital transformation journey by delivering innovative solutions that empower businesses to thrive in a dynamic world. We aim to drive growth, efficiency, and sustainability through cutting-edge technology and strategic insights.'
  },
  {
    title: 'Value',
    content: 'Wyreflow is built on innovation, integrity, and long-term partnerships. We\'re committed to delivering sustainable, impactful solutions while fostering continuous learning and collaboration, ensuring our clients stay ahead in the ever-evolving digital world.'
  }
];

const VisionSection = () => {
  return (
    <section className="vision-section">
      <div className="container">
        <div className="vision-grid">
          {visionData.map((item, index) => (
            <div key={index} className="vision-card">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

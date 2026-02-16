import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GlanceSection from './components/GlanceSection';
import VisionSection from './components/VisionSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <GlanceSection />
      <VisionSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;

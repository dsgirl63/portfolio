import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import FloatingContactButton from './components/FloatingContactButton';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navigation />
      <Hero />
      <Timeline />
      <Projects />
      <Certifications />
      <Contact />
      <FloatingContactButton />
    </div>
  );
}

export default App;
import React from 'react';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Academics from './components/sections/Academics';
import EducationBenefits from './components/sections/EducationBenefits';
import Projects from './components/sections/Projects';
import Extracurriculars from './components/sections/Extracurriculars';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  console.log('App component rendered');
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Academics />
        <EducationBenefits />
        <Projects />
        <Extracurriculars />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
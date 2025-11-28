import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ChromeNav from './components/ChromeNav';
import Snapshot from './components/Snapshot';
import HowItWorks from './components/HowItWorks';
import Biomarkers from './components/Biomarkers';
import Plans from './components/Plans';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ChromeNav />
      <main>
        <Hero />
        <Snapshot />
        <HowItWorks />
        <Biomarkers />
        <Plans />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;


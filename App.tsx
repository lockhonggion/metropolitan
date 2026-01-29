import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-white selection:bg-amber-600 selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
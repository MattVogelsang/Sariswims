import React from 'react';
import './App.css';
import Header from './components/Header';
import WhyChoose from './components/WhyChoose';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <WhyChoose />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 
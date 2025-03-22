import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Projects/>
    </div>
  );
};

export default Portfolio;
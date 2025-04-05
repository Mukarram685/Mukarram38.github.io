import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Projects/>
      <Footer/>
    </div>
  );
};

export default Portfolio;
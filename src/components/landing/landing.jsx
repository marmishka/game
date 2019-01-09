import React from 'react';
import './landing.scss';
import Hero from './hero/index';
import About from './about/index';
import Footer from './footer/index';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <Hero />
        <About />
        <Footer />
      </div>
    );    
  };
}

export default Landing;

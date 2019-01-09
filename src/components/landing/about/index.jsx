import React from 'react';
import './index.scss';
import template from './index.pug';
const buttonText = 'В бой!';
const tree = './images/tree0.png';

class About extends React.Component {
  render() {
    return template.call(this, { buttonText, tree });   
    
  };
}

export default About;

import React from 'react';
import './index.scss';
import template from './index.pug';
const buttonText = 'Помоги!';


class Hero extends React.Component {
  render() {
    return template.call(this, { buttonText });   
    
  };
}

export default Hero;

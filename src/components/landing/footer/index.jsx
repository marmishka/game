import React from 'react';
import './index.scss';
import template from './index.pug';


class Hero extends React.Component {
  render() {
    return template.call(this);     
  };
}

export default Hero;

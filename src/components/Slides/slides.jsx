import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './slides.scss'

class SlidesCarousel extends Component {

  render() {
    return (
      <div className="slides">
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/images/screenshots/Screenshot_0.jpg" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/images/screenshots/Screenshot_3.jpg" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/images/screenshots/Screenshot_6.jpg" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      

    );
  }
}

export default SlidesCarousel;

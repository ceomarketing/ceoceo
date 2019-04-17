import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
 
class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      carouselIndex: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      carouselIndex: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/public/images/placeholders/home-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>We empower and connect entrepreneurs in China and Silicon Valley.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
 
export default Home;
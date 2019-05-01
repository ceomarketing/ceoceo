import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import data from './HomeCarouselData.js';
import '../css/home.css';
 
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
          {
            data.map((itemData, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block"
                    src={itemData.img_src}
                    alt={"Slide" + index}
                  />
                  <Carousel.Caption>
                    <h3>{itemData.caption}</h3>
                    <p>{itemData.subtitle}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                );
            })
          }
        </Carousel>
      </div>
    );
  }
}
 
export default Home;
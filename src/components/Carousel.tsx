import * as React from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import './Carousel.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};


function CarouselComponent({ children } : React.PropsWithChildren) {
  return (
    <Carousel
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      dotListClass="carousel-dot-list"
      containerClass="carousel-container"
    >
      {children}
    </Carousel>
  );
}

export default CarouselComponent;
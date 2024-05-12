// CustomCarousel.js
import React, { useState } from 'react';
import '../globals.css';

const CustomCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };
  

  return (
    <div className="carousel">
      <button className="navButton" onClick={goToPrevSlide}>
        &lt;
      </button>
      <div className="slideContainer">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="navButton" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default CustomCarousel;

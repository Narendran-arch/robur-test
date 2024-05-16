import React, { useEffect, useState } from 'react';

const Carousel = ({ content, width, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? content.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [currentIndex]);
 
  return (
    <div className="carousel" >
      <div className="slide" >
        {content[currentIndex]}
      </div>
     <div className='carousel-button-container'>
        <button className='prev-button' onClick={prevSlide}>&#60;</button>
        <button className='next-button' onClick={nextSlide}>&#62;</button>
     </div>
    </div>
  );
};

export default Carousel;

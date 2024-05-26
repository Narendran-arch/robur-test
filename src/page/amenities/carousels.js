// import React, { useEffect, useState } from 'react';

// const Carousel = ({ content, width, height }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? content.length - 1 : prevIndex - 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000); // Change slide every 5 seconds
//     return () => clearInterval(interval); // Clean up interval on component unmount
//   }, [currentIndex]);
 
//   return (
//     <div className="carousel" >
//       <div className="slide" >
//         {content[currentIndex]}
//       </div>
//      <div className='carousel-button-container'>
//         <button className='prev-button' onClick={prevSlide}>&#60;</button>
//         <button className='next-button' onClick={nextSlide}>&#62;</button>
//      </div>
//     </div>
//   );
// };

// export default Carousel;

import React from "react";
import Slider from "react-slick";

function Carousels() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
        <div>
          <h3>10</h3>
        </div>
        <div>
          <h3>11</h3>
        </div>
        <div>
          <h3>12</h3>
        </div>
        <div>
          <h3>13</h3>
        </div>
        <div>
          <h3>14</h3>
        </div>
        <div>
          <h3>15</h3>
        </div>
        <div>
          <h3>16</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Carousels;
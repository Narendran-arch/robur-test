import React, { useEffect, useRef, useState } from 'react';
import './Amenities.css';
import Carousel from './carousels.js';
import amenitiesone from '../../image/amenities1.png';
import amenitiestwo from '../../image/amenities2.png';
import amenitiesthree from '../../image/amenities3.png';
import amenitiesfour from '../../image/amenities4.png';
import amenitiesfive from '../../image/amenities5.png';
import amenitiessix from '../../image/amenities6.png';
import amenitiesseven from '../../image/amenities7.png';
import amenitieseight from '../../image/amenities8.png';
import Slider from 'react-slick';
import Carousels from './carousels.js';

const Amenities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const amenitiesRef = useRef(null);
  const [infoVisible, setInfoVisible] = useState(false);

  useEffect(() => {
    const handleScrollToAmenities = () => {
      amenitiesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    document.addEventListener('scrollToAmenities', handleScrollToAmenities);

    return () => {
      document.removeEventListener('scrollToAmenities', handleScrollToAmenities);
    };
  }, []);

  const toggleInfo = () => {
    setInfoVisible(!infoVisible);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === content.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 1000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [currentSlide]);

  const content = [
    "From personal training sessions to ice baths and steam rooms, we offer a multitude of facilities to enhance  your fitness journey and provide the ultimate workout experience. Because fitness is not just a short time goal, it's a lifestyle.",
    "From personal, we offer a multitude of facilities to enhance  your fitness journey and provide the ultimate workout experience. Because fitness is not just a short time goal, it's a lifestyle.",
    "We offer a multitude of facilities to enhance  your fitness journey and provide the ultimate workout experience. Because fitness is not just a short time goal, it's a lifestyle.",
  ];

  const images = [
    { url: amenitiesone, heading: 'Steam Bath', text: 'Relax your body muscle for speedy recovery', text2: 'Line 2 of text' },
    { url: amenitiestwo, heading: 'Heading 1', text: 'Line 1 of text', text2: 'Line 2 of text' },
    { url: amenitiesthree, heading: 'Heading 1', text: 'Line 1 of text', text2: 'Line 2 of text' },
    { url: amenitiesfour, heading: 'Heading 1', text: 'Line 1 of text', text2: 'Line 2 of text' },
    { url: amenitiesfive, heading: 'Heading 1', text: 'Line 1 of text', text2: 'Line 2 of text' },
    { url: amenitiessix, heading: 'Heading 1', text: 'Line 1 of text', text2: 'Line 2 of text' },
    { url: amenitiesseven, heading: 'Heading 1', text: 'Line 1 of text', text2: 'Line 2 of text' },
    { url: amenitieseight, heading: 'Heading 1', text: 'Line 1 of text', text2: 'Line 2 of text' },
  ];

  const renderImageRows = () => {
    const rows = [];
    const imagesPerRow = 4;
    const totalImages = images.length;

    // Calculate the number of rows needed
    const numRows = Math.ceil(totalImages / imagesPerRow);

    // Loop through each row
    for (let i = 0; i < numRows; i++) {
      // Calculate the start and end index for the current row
      const startIndex = i * imagesPerRow;
      const endIndex = Math.min(startIndex + imagesPerRow, totalImages);

      // Slice the images for the current row
      const rowImages = images.slice(startIndex, endIndex);

      // Push the row into the rows array
      rows.push(
        <div className="amenities-image-row" key={i}>
          {rowImages.map((image, index) => (
            <div className="amenities-image" key={index}>
              <div className="image-container" onMouseEnter={toggleInfo} onMouseLeave={toggleInfo}>
                <div className="info">
                  <div className="info-heading">{image.heading}</div>
                  <div className="info-text">{image.text}</div>
                  <div className="info-text">{image.text2}</div>
                </div>
                <div className="image" style={{ backgroundImage: `url(${image.url})` }}></div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return rows;
  };
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "10px",
  //   slidesToShow: 3,
  //   speed: 500,
  //   rows: 2,
  //   slidesPerRow: 2
  // };

  return (
    <div className='amenities-main-container' id='amenities' ref={amenitiesRef}>
      <div className='amenities-heading-container'>
        <div className='amenities-title'>
          <div className='amenities-mob-title'>AMENITIES</div>
        </div>
        {/* <div className='amenities-carousels'>
          <Carousel content={content} />
        </div> */}
      </div>
      {/* <div className='amenities-image-container'>
        {renderImageRows()}
      </div> */}
      <div>
      {/* <div className="slider-container">
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
        
      </Slider>
    </div> */}
    <Carousels/>
      </div>
    </div>
  );
}

export default Amenities;

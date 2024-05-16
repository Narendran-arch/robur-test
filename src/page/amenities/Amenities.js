import React, { useEffect, useRef, useState } from 'react'
import './Amenities.css'
import Carousel from './carousels'
import amenitiesone from '../../image/amenities1.png'
import amenitiestwo from '../../image/amenities2.png'
import amenitiesthree from '../../image/amenities3.png'
import amenitiesfour from '../../image/amenities4.png'
import amenitiesfive from '../../image/amenities5.png'
import amenitiessix from '../../image/amenities6.png'
import amenitiesseven from '../../image/amenities7.png'
import amenitieseight from '../../image/amenities8.png'
import useFadeInAnimation from '../useFadeInAnimation'

const Amenities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const { isVisible: isVisiblecard, elementRef: elementRefcard } = useFadeInAnimation();
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
       "From personal training sessions to ice baths and steam rooms, we offer a multitude of facilities to enhance  your fitness journey and provide the ultimate workout experience .Because fitness is not just a short time goal , its a life style ",
       "From personal , we offer a multitude of facilities to enhance  your fitness journey and provide the ultimate workout experience .Because fitness is not just a short time goal , its a life style ",
       " we offer a multitude of facilities to enhance  your fitness journey and provide the ultimate workout experience .Because fitness is not just a short time goal , its a life style ",
      ];
      const images = [
        {url:amenitiesone,heading: 'steam bath', text: 'rela your body musscle for speedy recovery ', text2: 'Line 2 of text'},
        {url:amenitiestwo,heading: 'Heading 1', text: 'Line 1 of text', text2: 'Line 2 of text'},
        {url:amenitiesthree,heading: 'Heading 1', text: 'Line 1 of text', text2: 'Line 2 of text'},
        {url:amenitiesfour,heading: 'Heading 1', text: 'Line 1 of text', text2: 'Line 2 of text'},
        {url:amenitiesfive,heading: 'Heading 1', text: 'Line 1 of text', text2: 'Line 2 of text'},
        {url:amenitiessix,heading: 'Heading 1', text: 'Line 1 of text', text2: 'Line 2 of text'},
        {url:amenitiesseven,heading: 'Heading 1', text: 'Line 1 of text', text2: 'Line 2 of text'},
        {url:amenitieseight,heading: 'Heading 1', text: 'Line 1 of text', text2: 'Line 2 of text'}
      ];
      const renderImageDivs = () => {
        return images.map((image, index) => (
          <div  className={ "amenities-image" }  key={index}>
            <div className="image-container"  onMouseEnter={toggleInfo} onMouseLeave={toggleInfo}>
              <div className="info">
                <div className="info-heading">{image.heading}</div>
                <div className="info-text">{image.text}</div>
                <div className="info-text">{image.text2}</div>
              </div>
              <div className="image" style={{ backgroundImage: `url(${image.url})` }}></div>
            </div>
          </div>
        ));
      };
    
      // Group image divs into rows of 4
      const renderImageRows = () => {
        const rows = [];
        for (let i = 0; i < images.length; i += 4) {
          rows.push(
            <div  className="amenities-image-row" key={i}>
              {renderImageDivs().slice(i, i + 4)}
            </div>
          );
        }
        return rows;
      };
    
  return (
    <div className='amenities-main-container' id='amenities' ref={amenitiesRef}>
        <div className='amenities-heading-container' >
            <div className='amenities-title'> 
              <div>  AMENITIES </div>
            </div>
            <div className='amenities-carousels'>
                    <Carousel content={content} />
            </div>

        </div>
        <div className='amenities-image-container'>
         
          {renderImageRows()}
          

        </div>
    </div>
  )
}

export default Amenities
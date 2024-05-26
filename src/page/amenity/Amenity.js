import './Amenity.css';
import React from 'react';
import Slider from 'react-slick';
import zumba from '../../image/ZUMBA .png';
import yoga from '../../image/YOGA.png';
import mma from '../../image/MMA SESSIONS.png';
import grouptrain from '../../image/GROUP TRAINING.png';
import personal from '../../image/PERSONAL TRAINING.png';
import steambath from '../../image/STEAM BATH.png';
import icebathback from '../../image/ICE BATH.png';
import dj from '../../image/DJ.png';
import amenitiesone from '../../image/amenities1.png';
import amenitiestwo from '../../image/amenities2.png';
import amenitiesthree from '../../image/amenities3.png';
import amenitiesfour from '../../image/amenities4.png';
import amenitiesfive from '../../image/amenities5.png';
import amenitiessix from '../../image/amenities6.png';
import amenitiesseven from '../../image/amenities7.png';
import amenitieseight from '../../image/amenities8.png';
import symbol from '../../image/robursymbol.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Amenity = () => {
    const amenity = useRef(null);


    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };    
  const settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    className: "center",
    centerMode: true,
    lazyLoad: true,
    centerPadding: "400px",
    slidesToShow:2,
    slidesToScroll:2,
    rows: 2,
    variableWidth: true,
    arrows:false,
   
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            centerPadding: "100px",
            slidesToShow: 2.1,
            slidesToScroll: 2,
            rows: 2,

          }},
          {
            breakpoint: 768,
            settings: {
              centerPadding: "50px",
              slidesToShow: 1.5,
              slidesToScroll: 2,
              rows: 2,
  
            }},
           { breakpoint:1440,
            settings:{
                centerPadding: "200px",
                slidesToShow: 2.4,
                slidesToScroll:2,
                rows: 2,
            }
        }
        ]
   
  };
  
  return (
   <div className='amenity-contianer' id='amenities' ref={amenity}>
    <div className='amenity-header'>
            <div className='amenity-header-title'>AMENITIES</div>
            <div className='amenity-header-description-contianer'>
                <div className='amenity-header-description-content'>
                From personal training sessions to ice baths and steam rooms, we offer a multitude of facilities to enhance your fitness journey and provide the ultimate workout experience. Because fitness is not just a short-term goal; it's a lifestyle.

                </div>
                <div className='amenity-header-buttons'>
                <div className="back-button-skew"onClick={previous}> <FontAwesomeIcon icon={faAngleLeft} /></div>
      <div className='next-button-skew' onClick={ next}> <FontAwesomeIcon icon={faAngleRight} /></div>
                </div>
            </div>
    </div>
     <div className='amenity-slider'>
      <Slider  ref={slider => {
          sliderRef = slider;
        }} {...settings }>
            
            <div>
          <div className="image-container  slide--has-caption">
            <img loading="lazy" src={amenitiesone} alt="Amenity 1" className='amenity-image' />
            <div className="caption">
                <div className='caption-image-container'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-description-container'>
                        <div className='caption-description-heading'>
                            ZUMBA
                        </div>
                        <div className='caption-description-content'>
                            REVITALIZE YOUR FITNESS ROUTINE WITH EXCITING WORKOUTS FOR AN ENERGIZED YOU
                        </div>
                        
                </div>
            </div>
          </div>
        </div>
        <div>
          <div className="image-container  slide--has-caption">
            <img loading="lazy" src={amenitiestwo} alt="Amenity 1" className='amenity-image' />
            <div className="caption">
                <div className='caption-image-container'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-description-container'>
                        <div className='caption-description-heading'>
                            YOGA
                        </div>
                        <div className='caption-description-content'>
                        CULTIVATE YOUR BALANCE , STRENGTH AND INNER PEACE THROUGH MINDFUL MOVEMENT AND BREATHING 
                        </div>
                </div>
            </div>          </div>
        </div>
        <div>
          <div className="image-container  slide--has-caption">
            <img loading="lazy" src={amenitiesthree} alt="Amenity 1" className='amenity-image' />
            <div className="caption">
                <div className='caption-image-container'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-description-container'>
                        <div className='caption-description-heading'>
                            MMA SESSIONS 
                        </div>
                        <div className='caption-description-content'>
                           EXPERIENCE HIGH-INTENSITY SESSIONS TO ENHANCE STRENGTH , AGILITY AND ENDURANCE 
                        </div>
                        
                </div>
            </div>          </div>
        </div>
        <div>
          <div className="image-container  slide--has-caption">
            <img loading="lazy" src={amenitiesfour} alt="Amenity 1" className='amenity-image' />
            <div className="caption">
                <div className='caption-image-container'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-description-container'>
                        <div className='caption-description-heading'>
                            GROUP TRAINING  
                        </div>
                        <div className='caption-description-content'>
                            WORKOUT IN SUPPORTIVE ENVIROMENT WITH PROFESSIONAL COACHING 
                        </div>
                        
                </div>
            </div>          </div>
        </div>
        <div>
          <div className="image-container  slide--has-caption">
            <img loading="lazy" src={amenitiesfive} alt="Amenity 1" className='amenity-image' />
            <div className="caption">
                <div className='caption-image-container'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-description-container'>
                        <div className='caption-description-heading'>
                            PERSONAL TRAINING
                        </div>
                        <div className='caption-description-content'>
PERSONALIZED PLANS TO HELP YOU ACHIEVE YOUR DESIRED FITNESS OUTCOMES                        </div>
                        
                </div>
            </div>          </div>
        </div>
        <div>
          <div className="image-container  slide--has-caption">
            <img loading="lazy" src={amenitiessix} alt="Amenity 1" className='amenity-image' />
            <div className="caption">
                <div className='caption-image-container'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-description-container'>
                        <div className='caption-description-heading'>
                            STEAM BATH 
                        </div>
                        <div className='caption-description-content'>
INDULGE IN DEEP RELAXATION FOR YOUR BODY WITH THE SOOTHING WARMTH OF STEAM                         </div>
                        
                </div>
            </div>       
           </div>
        </div>
        <div>
          <div className="image-container  slide--has-caption">
            <img loading="lazy" src={amenitiesseven} alt="Amenity 1" className='amenity-image' />
            <div className="caption">
                <div className='caption-image-container'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-description-container'>
                        <div className='caption-description-heading'>
                            ICE BATH 
                        </div>
                        <div className='caption-description-content'>
                           RAPID RECOVERY & MUSCLE REPAIR THROUGH THE THERAPEUTIC POWER OF COLD IMMERSION
                        </div>
                        
                </div>
            </div>          </div>
        </div>
        <div>
          <div className="image-container  slide--has-caption">
            <img loading="lazy" src={amenitieseight } alt="Amenity 1" className='amenity-image' />
            <div className="caption">
                <div className='caption-image-container'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-description-container'>
                        <div className='caption-description-heading'>
                            DJ
                        </div>
                        <div className='caption-description-content'>
                            PUMP UP YOUR WORKOUTS WITH YOUR EXCITING DJ ON EVERY WEEKENDS 
                        </div>
                        
                </div>
            </div>          </div>
        </div>
      </Slider>
     
    </div>
    <div className='mobile-gallery'>
      
          <div className="gallery-item">
            <img loading="lazy" src={zumba} alt="Amenity 1" className='gallery-image' />
            <div className="image-caption">
                <div className='caption-icon'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-text'>
                        <div className='caption-title'>
                            ZUMBA
                        </div>
                        <div className='caption-description'>
                            REVITALIZE YOUR FITNESS ROUTINE WITH EXCITING WORKOUTS FOR AN ENERGIZED YOU
                        </div>
                        
                </div>
            </div>
          </div>
       
       
          <div className="gallery-item  ">
            <img loading="lazy" src={yoga} alt="Amenity 1" className='gallery-image' />
            <div className="image-caption">
                <div className='caption-icon'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-text'>
                        <div className='caption-title'>
                            YOGA
                        </div>
                        <div className='caption-description'>
                        CULTIVATE YOUR BALANCE , STRENGTH AND INNER PEACE THROUGH MINDFUL MOVEMENT AND BREATHING 
                        </div>
                </div>
            </div>          </div>
        
          <div className="gallery-item  ">
            <img loading="lazy" src={mma} alt="Amenity 1" className='gallery-image' />
            <div className="image-caption">
                <div className='caption-icon'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-text'>
                        <div className='caption-title'>
                            MMA SESSIONS 
                        </div>
                        <div className='caption-description'>
                           EXPERIENCE HIGH-INTENSITY SESSIONS TO ENHANCE STRENGTH , AGILITY AND ENDURANCE 
                        </div>
                        
                </div>
            </div>          </div>
      
          <div className="gallery-item  ">
            <img loading="lazy" src={grouptrain} alt="Amenity 1" className='gallery-image' />
            <div className="image-caption">
                <div className='caption-icon'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-text'>
                        <div className='caption-title'>
                            GROUP TRAINING  
                        </div>
                        <div className='caption-description'>
                            WORKOUT IN SUPPORTIVE ENVIROMENT WITH PROFESSIONAL COACHING 
                        </div>
                        
                </div>
            </div>          </div>
     
          <div className="gallery-item  ">
            <img loading="lazy" src={personal} alt="Amenity 1" className='gallery-image' />
            <div className="image-caption">
                <div className='caption-icon'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-text'>
                        <div className='caption-title'>
                            PERSONAL TRAINING
                        </div>
                        <div className='caption-description'>
PERSONALIZED PLANS TO HELP YOU ACHIEVE YOUR DESIRED FITNESS OUTCOMES                        </div>
                        
                </div>
            </div>          </div>
      
          <div className="gallery-item  ">
            <img loading="lazy" src={steambath} alt="Amenity 1" className='gallery-image' />
            <div className="image-caption">
                <div className='caption-icon'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-text'>
                        <div className='caption-title'>
                            STEAM BATH 
                        </div>
                        <div className='caption-description'>
INDULGE IN DEEP RELAXATION FOR YOUR BODY WITH THE SOOTHING WARMTH OF STEAM                         </div>
                </div>
            </div>       
           </div>
      
          <div className="gallery-item ">
            <img loading="lazy" src={icebathback} alt="Amenity 1" className='gallery-image' />
            <div className="image-caption">
                <div className='caption-icon'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-text'>
                        <div className='caption-title'>
                            ICE BATH 
                        </div>
                        <div className='caption-description'>
                           RAPID RECOVERY & MUSCLE REPAIR THROUGH THE THERAPEUTIC POWER OF COLD IMMERSION
                        </div>
                        
                </div>
            </div>          </div>
        
          <div className="gallery-item  ">
            <img loading="lazy" src={dj } alt="Amenity 1" className='gallery-image' />
            <div className="image-caption">
                <div className='caption-icon'>
                    <img src={symbol} alt="logo"/>
                </div>
                <div className='caption-text ' >
                        <div className='caption-title'>
                            DJ
                        </div>
                        <div className='caption-description'>
                            PUMP UP YOUR WORKOUTS WITH YOUR EXCITING DJ ON EVERY WEEKENDS 
                        </div>
                        
                </div>
            </div>          </div>
       
       </div>
   </div>
  );
};

export default Amenity;

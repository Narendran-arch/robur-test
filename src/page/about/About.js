import React, { useEffect, useRef } from 'react'
import './About.css'
import dumbell from '../../image/dumbellicon.png'
import report from '../../image/reporticon.png'
import scale from '../../image/scaleicon.png'
import towel from '../../image/towelicon.png'
import useFadeInAnimation from '../useFadeInAnimation'
const About = () => {
  const { isVisible: isVisiblecardone, elementRef: elementRefcardone } = useFadeInAnimation();
  const { isVisible: isVisiblecardtwo, elementRef: elementRefcardtwo } = useFadeInAnimation();
  const { isVisible: isVisiblecardthree, elementRef: elementRefcardthree } = useFadeInAnimation();
  const { isVisible: isVisiblecardfour, elementRef: elementRefcardfour } = useFadeInAnimation();

    const aboutRef = useRef(null);
    

    useEffect(() => {
      const handleScrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
  
      document.addEventListener('scrollToAbout', handleScrollToAbout);
  
      return () => {
        document.removeEventListener('scrollToAbout', handleScrollToAbout);
      };
    }, []);
  return (
    <div className='about-main-container'id='about' ref={aboutRef}>
        <div className='about-heading'>
            <div className='about-heading-1'><h1>WHY <span>CHOOSE RFH?</span></h1></div>
            <div className='about-heading-2'>BE A PART OF CHENNAI'S LARGEST GYM</div>
        </div>
        <div className='about-content-container'>
            <div  className={isVisiblecardone ? "about-content-container-items flip-left ":"about-content-container-items " } ref={elementRefcardone}  >
                <div className='about-content-container-icons ' style={{    margin: "2.5%"}}>
                    <img loading="lazy" src={dumbell} alt='dumbell icon' style={{marginBottom:"12%"}} />
                </div>
                <div className='about-content-container-icons-heading'  >
                ELITE EQUIPMENTS
                <hr/>
                
                </div>
                <div className='about-content-container-description' style={{margin:"4%"}}>
                  
                We've tailored our gym equipments 
with superior biomechanics, from 
heavy-duty machines to versatile 
options, ensuring your comfort.
                </div>
            </div>
            <div className={isVisiblecardtwo ? "about-content-container-items flip-left ":"about-content-container-items " } ref={elementRefcardtwo}>
            <div className='about-content-container-icons' >
                    <img loading="lazy" src={report} alt='dumbell icon' style={{marginBottom:"-16%"}}/>
                </div>
                <div className='about-content-container-icons-heading'>
                CERTIFIED TRAINERS
                <hr/>
                </div>
                <div className='about-content-container-description'>
                Experience top-tier guidance from 
our certified trainers, dedicated to 
maximizing your fitness potential and 
helping you achieve your goals consistently
                </div>
            </div>
            <div className={isVisiblecardthree ? "about-content-container-items flip-left ":"about-content-container-items "  }ref={elementRefcardthree}>
            <div className='about-content-container-icons'>
                    <img loading="lazy" src={scale} alt='dumbell icon'/>
                </div>
                <div className='about-content-container-icons-heading'>
                FUNCTIONAL FITNESS
                <hr/>
                </div>
                <div className='about-content-container-description'>
                Explore functional fitness at our 
premium gym, where dynamic workouts 
are tailored to enhance your everyday 
movements and overall wellness
                </div>
            </div>
            <div className={isVisiblecardfour ? "about-content-container-items flip-left ":"about-content-container-items  " } ref={elementRefcardfour}>
            <div className='about-content-container-icons'>
                    <img loading="lazy" src={towel} alt='dumbell icon'/>
                </div>
                <div className='about-content-container-icons-heading'>
                 STEAM AND ICEBATH
                <hr/>
                </div>
                <div className='about-content-container-description'>
                Revitalize post-workout with our 
refreshing ice bath and relax in 
our soothing steam room, enhancing 
your gym visit and speedy muscle recovery
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
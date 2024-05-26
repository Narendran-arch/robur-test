import React, { useEffect, useRef } from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar'
import useFadeInAnimation from '../useFadeInAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  const { isVisible: isVisiblehomespin, elementRef: elementRefhomespin } = useFadeInAnimation();

  const homeRef = useRef(null);

  useEffect(() => {
    const handleScrollToHome = () => {
      homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Listen for custom event 'scrollToHome' and handle scrolling
    document.addEventListener('scrollToHome', handleScrollToHome);

    return () => {
      document.removeEventListener('scrollToHome', handleScrollToHome);
    };
  }, []);

  return (
    <div className='home-main-container' >
      
      <div  className={isVisiblehomespin ? "home-container circles-in":"home-container" } id='home' ref={homeRef} >
        <div className='home-container-lggym'>
            LARGEST GYM IN CHENNAI
        </div>
        <div  className='home-container-launchtxt'>
        IS NOW ACCESSIBLE
        </div>
        <div className='home-container-reg' onClick={()=>{ window.open("https://wa.me/9566526089", '_blank','noopener noreferrer'); }}>
        
          <div className='home-container-reg2'>
                      REGISTER NOW

          </div>
          <div className='home-container-icon'><FontAwesomeIcon icon={faAngleRight} /></div>
        </div>


      </div>
    </div>
  )
}

export default Home
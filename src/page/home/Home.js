import React, { useEffect, useRef } from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar'
import useFadeInAnimation from '../useFadeInAnimation';
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
    <div className='home-main-container' id='home' ref={homeRef}>
      
      <div  className={isVisiblehomespin ? "home-container circles-in":"home-container" } >
        <div className='home-container-lggym'>
            LARGEST GYM IN CHENNAI
        </div>
        <div  className='home-container-launchtxt'>
        IS NOW ACCESSIBLE
        </div>
        <div className='home-container-reg'>
        
          <div className='home-container-reg2'>
                      REGISTER NOW

          </div>
          <div className='home-container-icon'>&#62;</div>
        </div>


      </div>
    </div>
  )
}

export default Home
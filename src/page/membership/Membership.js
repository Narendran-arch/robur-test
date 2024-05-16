import React, { useEffect, useRef } from 'react'
import "./Membership.css"
import useFadeInAnimation from '../useFadeInAnimation';

const Membership = () => {
  const { isVisible: isVisiblemembercontainer, elementRef: elementRefmembercontainer } = useFadeInAnimation();

    const membershipRef = useRef(null);

    useEffect(() => {
      const handleScrollToMembership = () => {
        membershipRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
  
      // Listen for custom event 'scrollToHome' and handle scrolling
      document.addEventListener('scrollToMembership', handleScrollToMembership);
  
      return () => {
        document.removeEventListener('scrollToMembership', handleScrollToMembership);
      };
    }, []);
  return (
    <div className='membership-main-container' id='membership' ref={membershipRef}>
        <div className='membership-container' ref={elementRefmembercontainer} >
            <div className={isVisiblemembercontainer ? "membership-heading slide-left":"membership-heading slide-out-right" }  >
                   <h1> CHECKOUT OUR MEMBERSHIP PLAN </h1>
            </div>
            <div className={isVisiblemembercontainer ? "membership-subhead slide-right":"membership-subhead slide-out-left" }  >
                  FIT IS NOT A DESTINATION , IT'S A JOURNEY 
            </div>
            <div className='membership-button-container'>
            <div className='membership-button'>
                    MEMBERSHIP PLANS 
                   </div>
                    
            </div>
        </div>
    </div>
  )
}

export default Membership
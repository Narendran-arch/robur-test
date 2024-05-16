import React, { useEffect, useRef } from 'react';
import  './Price.css';
import useFadeInAnimation from '../useFadeInAnimation';
const Price = () => {
  const { isVisible: isVisiblecardcontainer, elementRef: elementRefcardcontainer } = useFadeInAnimation();

    const pricingRef = useRef(null);

    useEffect(() => {
      const handleScrollToPricing = () => {
        pricingRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
  
      // Listen for custom event 'scrollToHome' and handle scrolling
      document.addEventListener('scrollToPricing', handleScrollToPricing);
  
      return () => {
        document.removeEventListener('scrollToPricing', handleScrollToPricing);
      };
    }, []);
  return (
    <div className='Price-main-container' id='pricing' ref={pricingRef}>
        <div className='Price-container-color1' >
        <div  className='price-heading-container'>
           <div className={"price-heading slide-out-left" } >
            <h1>           OUR <span>PRICING PLANS </span> 
</h1>
           </div>
           
            <div className={"price-subhead slide-out-right" }   ><p>optimize your workouts with our specialized dedicated  to function fitness, enhancing athleticism and the other crafted for weightlifiting  and bodybuilding  </p></div>
           </div>
       
 <div className='price-card-container' >
               <div className={isVisiblecardcontainer?"price-card-second-bg slide-bottom":"price-card-second-bg"} ref={elementRefcardcontainer}>
            <div className= {"price-card1" }  >
               <div className='price-card1-head'>  ANNUAL SUBSCRIPTION   </div>  
               <div className='price-card1-amount'> ₹24,999</div>   
               </div>
            </div>
            <div className={isVisiblecardcontainer ? "price-card2 slide-top":"price-card2 slide-out-top" }>
            <div className='price-card2-head'>  MONTHLY SUBSCRIPTION   </div>  
               <div className='price-card2-amount'> ₹4,999</div>               </div>
              <div className={isVisiblecardcontainer?"price-card-second-bg slide-bottom":"price-card-second-bg"} >
            <div className={"price-card1 " } >
<div className='price-card1-head'>  ANNUAL SUBSCRIPTION   </div>  
               <div className='price-card1-amount'> ₹17,999</div>  
              </div>
                        
                </div>
            <div className={isVisiblecardcontainer ? "price-card2 slide-right":"price-card2 slide-out-right" }>
            <div className='price-card2-head'>  MONTHLY SUBSCRIPTION   </div>  
               <div className='price-card2-amount'> ₹4,999</div>               </div>
        </div>
            <div className='price-split' >
                    <div  className={isVisiblecardcontainer ? "price-split-text1 fade-in":"price-split-text1 fade-out" }  >
                        FUNCTIONAL TRAINING
                    </div>
                    <div className={isVisiblecardcontainer ? "price-split-text2 fade-in":"price-split-text2 fade-out" }>
                        GYM TRAINING
                    </div>
            </div>
            <div className={"price-enroll-continer slide-out-bottom" } >
                <div className='price-enroll-button'>ENROLL NOW </div>
            </div>
        </div>
       
        <div className='Price-container-color2'>
    </div>

    </div>
  )
}

export default Price
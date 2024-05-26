import React, { useEffect, useRef, useState } from 'react'
import "./Membership.css"
import useFadeInAnimation from '../useFadeInAnimation';
import pdf from '../../pdf/membershipplans2024 .pdf'
const Membership = () => {
  const { isVisible: isVisiblemembercontainer, elementRef: elementRefmembercontainer } = useFadeInAnimation();
  const [disp,setDisp]=useState()
    const membershipRef = useRef(null);
    const dropdownRef = useRef(null);

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
    
    useEffect(() => {
      const handleClickOutside = (event) => { // Added
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) { // Added
          setDisp(false); // Added
        } // Added
      }; // Added
  
      document.addEventListener('mousedown', handleClickOutside); // Added
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside); // Added
      }; // Added
    }, [dropdownRef]); // Added
    
    const downloadhandler = () => {
      fetch(pdf).then((response) => {
          response.blob().then((blob) => {
              const fileURL =
                  window.URL.createObjectURL(blob);                     
              let alink = document.createElement("a");
              alink.href = fileURL;
              alink.download = "membershipplan2024.pdf";
              alink.click();
          });
      });
  };
  return (
    <div className='membership-main-container' id='membership' ref={membershipRef}>
        <div className='membership-container'  >
            <div className={isVisiblemembercontainer ? "membership-heading slide-top":"membership-heading " }   >
                   <h1> CHECKOUT OUR MEMBERSHIP PLAN </h1>
            </div>
            <div className={isVisiblemembercontainer ? "membership-subhead slide-bottom":"membership-subhead " } ref={elementRefmembercontainer}  >
                  FITNESS IS NOT A DESTINATION , IT'S A JOURNEY 
            </div>
            <div className='membership-button-container'>
            <div className='membership-button' onClick={()=>{setDisp(!disp)}}>
                    MEMBERSHIP PLANS 
                    {
                     disp ? <> <div class="dropdown-content" ref={dropdownRef}>
                     <a href={pdf}  target="_blank"
                    rel="noreferrer"><div className='dropdown-buttons'>VIEW</div></a>
                     <div className='dropdown-buttons' onClick={downloadhandler}>DOWNLOAD</div>
                   </div> </>: <></>
                    }
                   </div>
                    
            </div>
        </div>
    </div>
  )
}

export default Membership
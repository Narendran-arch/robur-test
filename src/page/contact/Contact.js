import React from 'react'
import './Contact.css'
import bg from '../../image/conatactbglogo.png'
import logo from '../../image/contactuslogo.png'
import rightlogo from '../../image/robursymbolhalf.png'
import mirrorimg from '../../image/robursymbolmirrorhalf.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
const Contact = () => {
  const contact = useRef(null);

  return (
    <div className='contact-main-container' id='contact' ref={contact}>
      
      <div className='contact-container'>
        <div className='contact-map-container'>
          
          <div className='contact-map'>
          <div className='contact-phone-one' onClick={()=>{ window.open("tel:9566526089", '_blank','noopener noreferrer'); }} >
             <div className='contact-icon'>
               <FontAwesomeIcon icon={faPhone} size='xl'  />
             </div>
                <div className='contact-content'>
                +91 9566526089
                </div>
           </div>
           <div className='contact-phone-two' onClick={()=>{ window.open("tel:7305910751", '_blank','noopener noreferrer'); }} >
             <div className='contact-icon'>
               <FontAwesomeIcon icon={faPhone} size='xl'  />
             </div>
                <div className='contact-content' style={{padding:"0 3rem"}}>
                 +91 7305910751
                </div>
           </div>
           <div className='contact-email'  onClick={()=>{ window.open("mailto:roburfitnesshub@gmail.com", '_blank','noopener noreferrer'); }}  >
             <div className='contact-icon'>
               <FontAwesomeIcon icon={faEnvelope} size='xl'  />
             </div>
                <div className='contact-content'>
                roburfitnesshub@gmail.com 
                </div>
          </div>
         
          <div className='contact-mobile-div'>
            
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.384219872605!2d80.15152232305933!3d13.01362121196987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526159d106820f%3A0x93cd0a9219a28bf3!2sRobur%20Fitness%20Hub%20-%20A%20Hygeia%20Enterprises%20gym!5e0!3m2!1sen!2sin!4v1716187154959!5m2!1sen!2sin"  title='map'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map'></iframe>
          <div className='contact-logo-container'>
              <img src={rightlogo} alt='logo' className='logoright' />
              <img src={mirrorimg} alt='logo' className='logoleft' />

                <div className='contact-logo-des'>
                  CONTACT NOW
                </div>
                <div className='contact-logo'>
                  <img src={logo} alt='logo'/>
                </div>
                <div className='contact-logo-destwo'>
                  A ONE STOP DESTINATION FOR ALL YOUR FITNESS NEEDS 
                </div>
          </div>
        </div>
        
<img src={bg} alt='logo' className='bglog'/>
          </div>
          
        </div>
        <div className='contact-mobile-footer'>
        <div className='footer-logo'>
          <div>

            <img src={bg} alt='logo' className='contact-footer-logo' />
          </div>
          </div>
          <div className='footer-content'>
          <div className='contact-mobile-phone-one' onClick={()=>{ window.open("tel:9566526089", '_blank','noopener noreferrer'); }} >
                <div className='contact-mobile-content'>
                +91 9566526089
                </div>
             <div className='contact-mobile-icon'>
               <FontAwesomeIcon icon={faPhone} size='xl'  />
             </div>
           </div>
           <div className='contact-mobile-phone-two'  onClick={()=>{ window.open("tel:7305910751", '_blank','noopener noreferrer'); }} >
            
                <div className='contact-mobile-content'>
                +91 7305910751
                </div> <div className='contact-mobile-icon'>
               <FontAwesomeIcon icon={faPhone} size='xl'  />
             </div>
          </div>
          <div className='contact-mobile-email' onClick={()=>{ window.open("mailto:roburfitnesshub@gmail.com", '_blank','noopener noreferrer'); }} >
             
                <div className='contact-mobile-content'>
                roburfitnesshub@gmail.com 
                </div><div className='contact-mobile-icon'>
               <FontAwesomeIcon icon={faEnvelope} size='xl'  />
             </div>
          </div>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Contact
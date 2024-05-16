import React from 'react'
import './Contact.css'
import bg from '../../image/conatactbglogo.png'
import logo from '../../image/contactuslogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  return (
    <div className='contact-main-container' id='contact'>
      <div className='contact-container'>
        <div className='contact-map-container'>
          <div className='contact-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.378667084747!2d80.1567146748937!3d13.011541287307484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526159d106820f%3A0x93cd0a9219a28bf3!2sRobur%20Fitness%20Hub%20-%20A%20Hygeia%20Enterprises%20gym!5e0!3m2!1sen!2sin!4v1715779764307!5m2!1sen!2sin" title='map'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map'>
            
          </iframe>
          <img src={bg} alt='logo' className='bglog'/>
          </div>
          <div className='contact-logo-container'>
                <div className='contact-logo-des'>
                  CONTACT NOW
                </div>
                <div className='contact-logo'>
                  <img src={logo} alt='logo'/>
                </div>
                <div className='contact-logo-destwo'>
                  A ONE STOP DESTINATION FOR ALL YOUT FITNESS NEEDS 
                </div>
          </div>
          <div className='contact-number-one'>
               <div className='contact-icon'>
               <FontAwesomeIcon icon={faPhone} size='xl'  />
               </div>
                <div className='contact-content'>
                +91 7305910751
                </div>
                
                
          </div>
          <div className='contact-number-two'>
               <div className='contact-icon'>
               <FontAwesomeIcon icon={faPhone} size='xl'  />
               </div>
                <div className='contact-content'>
                +91 9566526089
                </div>
                
          </div>
          <div className='contact-email'>
               <div className='contact-icon'>
               <FontAwesomeIcon icon={faEnvelope} size='xl' />               </div>
                <div className='contact-content'>
                roburfitnesshub@gmail.com                </div>
                
                
          </div>
          <div className='contact-address'>
               <div className='contact-icon' style={{padding:"1rem 2rem"}}>
               <FontAwesomeIcon icon={faLocationDot} size='xl' />                    </div>
                <div className='contact-content'>
                Opposite BBCL Stanbury, 24/1A2, Anna Main Rd,  Kolapakkam, Chennai - 6000128              </div>
                
                
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
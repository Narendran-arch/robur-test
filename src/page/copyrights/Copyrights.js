import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Copyrights.css'
const Copyrights = () => {
  return (
    <div className='copyrights-main-container'>
        <div className='copyright-socialmedia-container'>
        <a href='https://www.facebook.com/share/ufpViR9cejE91zJf/?mibextid=qi2Omg' target="_blank" rel="noopener noreferrer">
              <div>

              <FontAwesomeIcon icon={faFacebook} style={{ padding: "1rem" }} size='xl' />

              </div>
                </a>
                  <a href='https://www.instagram.com/roburfitnesshub' target="_blank" rel="noopener noreferrer">
                                <div>

                                <FontAwesomeIcon icon={faInstagram} style={{ padding: "1rem" }} size='xl' />
                                </div>
                  </a>
                  <a href='https://www.youtube.com/@ROBURFITNESS/featured'target="_blank" rel="noopener noreferrer">
                                <div>

                                <FontAwesomeIcon icon={faYoutube} style={{ padding: "1rem" }} size='xl' />
                                </div>
                  </a>
        </div>
       
        <div className='copyrights-container'>
        Copyright © 2024 <span><a href='https://www.yourdigitallift.com/external-tab-customer-enquiry-form/MzkzNw--/' target="_blank" rel="noopener noreferrer"> Robur Fitness Hub </a></span>. All Rights Reserved. Designed by <span><a href='https://www.instagram.com/cstudiosofficial/' target="_blank" rel="noopener noreferrer">C Studios</a></span>
        </div>

    </div>
  )
}

export default Copyrights
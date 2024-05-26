import React, { useEffect, useState } from 'react';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../image/Roburlogowhite.png';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = ['home', 'about', 'membership', 'pricing', 'amenities', 'contact'];
      let activeSection = 'Home';

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 300;
          const offsetBottom = offsetTop + element.clientHeight;
          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            activeSection = section.charAt(0).toUpperCase() + section.slice(1);
            break;
          }
        }
      }

      setActiveTab(activeSection);
      setScrollDirection(scrollY > window.lastScrollY ? 'down' : 'up');
      window.lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div>
      <div className={`navbar-main-container ${scrollDirection === 'down' ? 'hide' : 'show'}`}>
        <div className='navbaricon-main-container'>
          <div className='navbaricon-container'>
            <img src={logo} alt='logo' className='navbaricon' />
          </div>
        </div>
        <div className='navflex'>
          <div className='socialnav-main-container'>
            <div className="socialnav-container">
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
          </div>
          <div className='menubar-main-container'>
            <div className='menubar-container'>
              <div onClick={() => scrollToSection('home')} className={`${activeTab === 'Home' ? 'active' : ''}`}>
                Home
              </div>
              <div onClick={() => scrollToSection('about')} className={`${activeTab === 'About' ? 'active' : ''}`}>
                About us
              </div>
              <div onClick={() => scrollToSection('membership')} className={`${activeTab === 'Membership' ? 'active' : ''}`}>
                Membership
              </div>
              {/* <div onClick={() => scrollToSection('pricing')} className={`${activeTab === 'Pricing' ? 'active' : ''}`}>
                Pricing
              </div> */}
              <div onClick={() => scrollToSection('amenities')} className={`${activeTab === 'Amenities' ? 'active' : ''}`}>
                Amenities
              </div>
              <div onClick={() => scrollToSection('contact')} className={`${activeTab === 'Contact' ? 'active' : ''}`}>
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="socialnav-container-mobile">
      <a href='https://www.facebook.com/share/ufpViR9cejE91zJf/?mibextid=qi2Omg' target="_blank" rel="noopener noreferrer">
              <div>

              <FontAwesomeIcon icon={faFacebook} style={{ padding: "0.5rem 1rem" }} size='xl' />

              </div>
                </a>
                <a href='https://www.instagram.com/roburfitnesshub' target="_blank" rel="noopener noreferrer">
                                <div>

                                <FontAwesomeIcon icon={faInstagram} style={{ padding: "0.5rem 1rem" }} size='xl' />
                                </div>
                  </a>
                  <a href='https://www.youtube.com/@ROBURFITNESS/featured'target="_blank" rel="noopener noreferrer">
                                <div>

                                <FontAwesomeIcon icon={faYoutube} style={{ padding: "0.5rem 1rem" }} size='xl' />
                                </div>
                  </a>
      </div>
      <div className='burger-menu' onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size='2xl' />
      </div>
      {isMenuOpen && (
        <div className='menu-bar'>
          <div className='hamburger-socialnav-main-container'>
            <div className="hamburger-socialnav-container">
              <div className='navbaricon-container'>
                <img src={logo} alt='logo' className='navbaricon' />
              </div>
            </div>
          </div>
          <div className='hamburger-menubar-main-container'>
            <div className='hamburger-menubar-container'>
              <div onClick={() => scrollToSection('home')} className={`${activeTab === 'Home' ? 'active' : ''}`}>
                HOME
              </div>
              <div onClick={() => scrollToSection('about')} className={`${activeTab === 'About' ? 'active' : ''}`}>
                ABOUT US
              </div>
              <div onClick={() => scrollToSection('membership')} className={`${activeTab === 'Membership' ? 'active' : ''}`}>
                MEMBERSHIP
              </div>
              {/* <div onClick={() => scrollToSection('pricing')} className={`${activeTab === 'Pricing' ? 'active' : ''}`}>
                PRICING
              </div> */}
              <div onClick={() => scrollToSection('amenities')} className={`${activeTab === 'Amenities' ? 'active' : ''}`}>
                AMENITIES
              </div>
              <div onClick={() => scrollToSection('contact')} className={`${activeTab === 'Contact' ? 'active' : ''}`}>
                CONTACT
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

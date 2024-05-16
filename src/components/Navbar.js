import React, { useEffect, useState } from 'react';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../image/Roburlogowhite.png';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const homeElement = document.getElementById('home');
      const aboutElement = document.getElementById('about');
      const membershipElement = document.getElementById('membership');
      const pricingElement = document.getElementById('pricing');
      const amenitiesElement = document.getElementById('amenities');
      const contactElement = document.getElementById('contact');
      if (homeElement && aboutElement && membershipElement && pricingElement && amenitiesElement && contactElement ) {
        if (
          
          scrollY >= homeElement.offsetTop && 
          scrollY < aboutElement.offsetTop
        ) {
          
          setActiveTab('Home');
        } else if (
          scrollY >= aboutElement.offsetTop - 300 && 
          scrollY < membershipElement.offsetTop- 300 
        ) {
          setActiveTab('About');
        } else if (
          scrollY >= membershipElement.offsetTop- 300  && 
          scrollY < pricingElement.offsetTop- 300 
        ) {
          setActiveTab('Membership');
        } else if (
          scrollY >= pricingElement.offsetTop - 300 && 
          scrollY < amenitiesElement.offsetTop- 300 
        ) {
          setActiveTab('Pricing');
        }
         else if (
          scrollY >= amenitiesElement.offsetTop- 300 
           && 
          scrollY < contactElement.offsetTop
        ) 
        
        {
          setActiveTab('Amenities');
        }
         else if (
          scrollY >= contactElement.offsetTop
        ) {
          setActiveTab('Contact');
        }
      }
      
      setScrollDirection(scrollY > 0 && scrollY > window.lastScrollY ? 'down' : 'up');
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

  return (
    <div >
      <div className={`navbar-main-container ${scrollDirection === 'down' ? 'hide' : 'show'}`}>
      <div className='navbaricon-main-container'>
        <div className='navbaricon-container'>
          <img src={logo} alt='logo' className='navbaricon'/>
        </div>
      </div>
      <div className='navflex'>
        <div className='socialnav-main-container'>
          <div className="socialnav-container">
            <div>
              <FontAwesomeIcon icon={faFacebook} style={{padding:"1rem"}} size='xl'/>
            </div>
            <div>
              <FontAwesomeIcon icon={faInstagram} style={{padding:"1rem"}} size='xl' />
            </div>
            <div>
              <FontAwesomeIcon icon={faYoutube} style={{padding:"1rem"}} size='xl' />
            </div>
          </div>
        </div>
        <div className='menubar-main-container'>
          <div className='menubar-container'>
            <div onClick={() => {  window.scrollTo({top: 0, behavior: 'smooth'})}}className={`${activeTab === 'Home' ? 'active' : ''}` } >
              Home
            </div>
            <div onClick={() => {window.scrollTo({top: (document.getElementById('about')?.offsetTop || 0), behavior: 'smooth'})} }className={`${activeTab === 'About' ? 'active' : ''}`}>
              About us
            </div>
            <div onClick={() => window.scrollTo({top: (document.getElementById('membership')?.offsetTop || 0), behavior: 'smooth'})} className={`${activeTab === 'Membership' ? 'active' : ''}`}>
              Membership
            </div>
            <div onClick={() => window.scrollTo({top: (document.getElementById('pricing')?.offsetTop || 0), behavior: 'smooth'})} className={`${activeTab === 'Pricing' ? 'active' : ''}`}>
              Pricing
            </div>
            <div onClick={() => window.scrollTo({top: (document.getElementById('amenities')?.offsetTop || 0), behavior: 'smooth'})} className={`${activeTab === 'Amenities' ? 'active' : ''}`}>
              Amenities
            </div>
            <div onClick={() => window.scrollTo({top: (document.getElementById('contact')?.offsetTop || 0), behavior: 'smooth'})} className={`${activeTab === 'Contact' ? 'active' : ''}`}>
              Contact
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="socialnav-container-mobile">
            <div>
              <FontAwesomeIcon icon={faFacebook} style={{padding:"1rem"}} size='sm'/>
            </div>
            <div>
              <FontAwesomeIcon icon={faInstagram} style={{padding:"1rem"}} size='sm' />
            </div>
            <div>
              <FontAwesomeIcon icon={faYoutube} style={{padding:"1rem"}} size='sm' />
            </div>
          </div>
      <div className='burger-menu' onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size='xl' />
        </div>
      {isMenuOpen && (
        <div className='menu-bar'>
          <div className='hamburger-socialnav-main-container'>
            <div className="hambhurger-socialnav-container">
            <div className='navbaricon-container'>
          <img src={logo} alt='logo' className='navbaricon'/>
        </div>
              <div>
                <FontAwesomeIcon icon={faFacebook} style={{ padding: "1rem" }} size='xl' />
              </div>
              <div>
                <FontAwesomeIcon icon={faInstagram} style={{ padding: "1rem" }} size='xl' />
              </div>
              <div>
                <FontAwesomeIcon icon={faYoutube} style={{ padding: "1rem" }} size='xl' />
              </div>
            </div>
          </div>
          <div className='hambhrger-menubar-main-container'>
            <div className='hambhurger-menubar-container'>
            <div onClick={() => {     setIsMenuOpen(!isMenuOpen);
window.scrollTo({top: 0, behavior: 'smooth'})}} className={`${activeTab === 'Home' ? 'active' : ''}`}>
              HOME
            </div>
            <div onClick={() => {window.scrollTo({top: (document.getElementById('about')?.offsetTop || 0), behavior: 'smooth'});     setIsMenuOpen(!isMenuOpen);
}} className={`${activeTab === 'About' ? 'active' : ''}`}>
             ABOUT US
            </div>
            <div onClick={() => {window.scrollTo({top: (document.getElementById('membership')?.offsetTop || 0), behavior: 'smooth'})  ;  setIsMenuOpen(!isMenuOpen);
}} className={`${activeTab === 'Membership' ? 'active' : ''}`}>
              MEMBERSHIP
            </div>
            <div onClick={() => {window.scrollTo({top: (document.getElementById('pricing')?.offsetTop || 0), behavior: 'smooth'});    setIsMenuOpen(!isMenuOpen);
}} className={`${activeTab === 'Pricing' ? 'active' : ''}`}>
              PRICING
            </div>
            <div onClick={() => {window.scrollTo({top: (document.getElementById('amenities')?.offsetTop || 0), behavior: 'smooth'});    setIsMenuOpen(!isMenuOpen);
}} className={`${activeTab === 'Amenities' ? 'active' : ''}`}>
              AMENITIES
            </div>
            <div onClick={() => {window.scrollTo({top: (document.getElementById('contact')?.offsetTop || 0), behavior: 'smooth'});    setIsMenuOpen(!isMenuOpen);
}} className={`${activeTab === 'Contact' ? 'active' : ''}`}>
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

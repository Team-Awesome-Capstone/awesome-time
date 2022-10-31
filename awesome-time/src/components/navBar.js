import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <h3></h3>
      <nav>
        <a href='/#'>Event Page</a>
        <a href='/#'> RSVP Form</a>
        <a href='/#'>Contact</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />{' '}
      </button>
    </header>
  );
}
export default Navbar;

import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';
import AppRouter from '../AppRouter';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <nav ref={navRef}>
        <a href='/http://localhost:3000/event-page'>Event Page</a>
        <a href='/http://localhost:3000/rsvp'> RSVP Form</a>
        <a href='/http://localhost:3000/contact'>Contact</a>
        <a href='/http://localhost:3000/meet-the-team'>Meet the Team!</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
        <AppRouter />
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />{' '}
      </button>
    </header>
  );
}
export default Navbar;

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
        <a href='/'>Home</a>
        <a href='/event-page'>Event Page</a>
        <a href='/rsvp'> RSVP Form</a>
        <a href='/contact'>Contact</a>
        <a href='/meet-the-team'>Meet the Team!</a>
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

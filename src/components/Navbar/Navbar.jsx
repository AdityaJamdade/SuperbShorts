import { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="navbar">
        {/* <div className="navbar-left">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          <FontAwesomeIcon icon={faInstagram} className="icon" />
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </div> */}
        <div className="navbar-title">SuperbShorts</div>
        {/* <div className="navbar-right">
          <div className="hamburger" onClick={handleToggle}>
            <div className="ham-line"></div>
            <div className="ham-line"></div>
            <div className="ham-line"></div>
          </div> */}

          {/* <a href='/'>Contact Us</a> */}
          {/* <div className="navbar-right-links">
            {isOpen &&
              <>
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                <FontAwesomeIcon icon={faInstagram} className="icon" />
                <FontAwesomeIcon icon={faTwitter} className="icon" />
              </>
            }
          </div> */}
      </div>
    </nav>
  );
};

export default Navbar;

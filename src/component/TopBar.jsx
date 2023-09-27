
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext';


export const TopBar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const [_, setBodyDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.setAttribute("data-bs-theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    toggleDarkMode();
    setBodyDarkMode(!darkMode);
  }

  return (
    <header className="container-fluid bg-primary text-white d-none d-lg-flex">
      <div className="container py-3">
        <div className="d-flex align-items-center">
          <Link to="/" aria-label="Home Page">
            <h2 className="text-white fw-bold m-0">Garag KSB</h2>
          </Link>
          <div className="ms-auto d-flex align-items-center">
            <small className="ms-4"><FontAwesomeIcon icon={faLocationDot} aria-hidden="true" /> 123 Street, New York, USA</small>
            <small className="ms-4"><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /> info@example.com</small>
            <small className="ms-4"><FontAwesomeIcon icon={faPhoneVolume} aria-hidden="true" /> +012 345 67890</small>
            <div className="ms-3 d-flex">
              <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center" href="#!" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} style={{ color: "#4761ff", }} aria-hidden="true" />
              </a>
              <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center" href="#!" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} style={{ color: "#4761ff", }} aria-hidden="true" />
              </a>
              <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center" href="#!" aria-label="Twitter">
                <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#4761ff", }} aria-hidden="true" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


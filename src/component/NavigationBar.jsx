import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { LanguageSelector } from "./LanguageSelector";
import LOGO from '../assets/KSB_LOGO.png';
import { useTranslation } from "react-i18next";

export const NavigationBar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { t } = useTranslation(); // Access translations

  const location = useLocation();
  const currentURL = location.pathname;

  const burgerButton = useRef();
  const navbarCollapse = useRef();

  const toggleNavbar = () => {
    if (navbarCollapse.current.classList.contains("show")) {
      navbarCollapse.current.classList.remove("show");
    } else {
      navbarCollapse.current.classList.add("show");
    }
  };

  const closeMobileNavigation = () => {
    navbarCollapse.current.classList.remove("show");
  }

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', closeMobileNavigation);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', closeMobileNavigation);
    };
  }, []); // Empty dependency array to run only once on component mount

  const navLinkStatus = (path) => {
    if (currentURL == path) return 'nav-item nav-link active';
    return darkMode ? 'nav-item nav-link text-white font-weight-bold' : 'nav-item nav-link text-dark';
  }

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
    <div className={`sticky-top navigation-bar ${darkMode && 'bg-secondary'}`} style={{ marginBottom: '4rem' }}>
      <a href="#main-content" className={`sr-only sr-only-focusable`}>
        Skip to content
      </a>
      <div className={`container-fluid sticky-top`}>
        <div className={`container p-0`}>
          <nav className={`navbar navbar-expand-lg navbar-light p-lg-0`}>

            {/* Mobile Logo */}
            <Link to={'/'} className={`navbar-brand d-lg-none text-decoration-none`}>
              <span className={`sr-only`}>{t('logoName')}</span>
              <p className={`fw-bold m-0`}>{t('logoName')}</p>
            </Link>

            {/* Desktop Logo */}
            <Link to="/" aria-label="Home Page" className="desktop-logo" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h2 className={`${darkMode ? 'text-white' : 'text-dark'} m-0`} style={{ fontSize: '1.5rem', }}>{t('logoName')}</h2>
              <img className="d-block w-100" src={LOGO} style={{ maxWidth: '60px' }} alt="Image" />
            </Link>

            {/* Toggle menu button */}
            <button
              type="button"
              className={`navbar-toggler me-0`}
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              onClick={toggleNavbar}
              ref={burgerButton}
            >
              <span>☰</span>
            </button>

            <div className={`collapse navbar-collapse`} id="navbarCollapse" ref={navbarCollapse}>

              <div className={`navbar-nav mx-lg-2`}>

                <NavLink
                  onClick={closeMobileNavigation}
                  to={'/'}
                  className={`${navLinkStatus('/')}`}
                >
                  {t('nav.home')}
                </NavLink>

                <NavLink
                  onClick={closeMobileNavigation}
                  to={'/about'}
                  className={`${navLinkStatus('/about')}`}
                >
                  {t('nav.about')}
                </NavLink>

                <NavLink
                  onClick={closeMobileNavigation}
                  to={'/services'}
                  className={`${navLinkStatus('/services')}`}
                >
                  {t('nav.services')}
                </NavLink>

                <NavLink
                  onClick={closeMobileNavigation}
                  to={'/products'}
                  className={`${navLinkStatus('/products')}`}
                >
                  {t('nav.products')}
                </NavLink>

                <NavLink
                  onClick={closeMobileNavigation}
                  to={'/contacts'}
                  className={`${navLinkStatus('/contacts')}`}
                >
                  {t('nav.contacts')}
                </NavLink>
              </div>

              <div className={`ms-auto d-none d-lg-block`} style={{ marginRight: '20px' }}>
                <a href="#section-6" className={`btn btn-primary rounded-pill py-2 px-3`}>{t('nav.getACar')}</a>
              </div>

              {/* Darkmode button */}
              <button onClick={toggleTheme} style={{ borderRadius: '100%', border: '1px solid #eee', width: '40px', height: '40px' }}>
                {darkMode ? <FontAwesomeIcon icon={faSun} size="lg" /> : <FontAwesomeIcon icon={faMoon} />}
              </button>

              <LanguageSelector />

            </div>

          </nav>
        </div>
      </div>
    </div>
  );
};

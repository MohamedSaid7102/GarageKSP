import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export const NavigationBar = () => {
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

  return (
    <div>
      <a href="#main-content" className="sr-only sr-only-focusable">
        Skip to content
      </a>
      <div className="container-fluid bg-white sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">

            <Link to={'/'} className="navbar-brand d-lg-none">
              <span className="sr-only">Garag KSP</span>
              <h1 className="fw-bold m-0">Garag KSP</h1>
            </Link>

            {/* Toggle menu button */}
            <button
              type="button"
              className="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              onClick={toggleNavbar}
              ref={burgerButton}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse" ref={navbarCollapse}>

              <div className="navbar-nav">
                <NavLink
                  onClick={closeMobileNavigation}
                  to={'/'}
                  className={`nav-item nav-link ${({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                        ? "pending"
                        : ""
                    }`
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  onClick={closeMobileNavigation}
                  to={'/about'}
                  className={`nav-item nav-link ${({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                        ? "pending"
                        : ""
                    }`
                  }
                >
                  About
                </NavLink>

                <NavLink
                  onClick={closeMobileNavigation}
                  to={'/services'}
                  className={`nav-item nav-link ${({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                        ? "pending"
                        : ""
                    }`
                  }
                >
                  Services
                </NavLink>

                <NavLink
                  onClick={closeMobileNavigation}
                  to={'/projects'}
                  className={`nav-item nav-link ${({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                        ? "pending"
                        : ""
                    }`
                  }
                >
                  Projects
                </NavLink>

                <NavLink
                  onClick={closeMobileNavigation}
                  to={'/contacts'}
                  className={`nav-item nav-link ${({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                        ? "pending"
                        : ""
                    }`
                  }
                >
                  Contacts
                </NavLink>

              </div>

              <div className="ms-auto d-none d-lg-block">
                <Link to="/contacts" className="btn btn-primary rounded-pill py-2 px-3">Get A Car</Link>
              </div>

            </div>

          </nav>
        </div>
      </div>
    </div>
  );
};

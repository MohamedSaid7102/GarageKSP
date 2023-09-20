import React, { useEffect, useRef } from "react";

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

            <a href="index.html" className="navbar-brand d-lg-none">
              <span className="sr-only">GrowMark</span>
              <h1 className="fw-bold m-0">GrowMark</h1>
            </a>

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
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Services</a>
                <a href="project.html" className="nav-item nav-link">Projects</a>

                <a href="contact.html" className="nav-item nav-link">Contact</a>

              </div>

              <div className="ms-auto d-none d-lg-block">
                <a href="" className="btn btn-primary rounded-pill py-2 px-3">Get A Quote</a>
              </div>

            </div>

          </nav>
        </div>
      </div>
    </div>
  );
};
